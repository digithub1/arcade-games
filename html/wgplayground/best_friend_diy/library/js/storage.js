(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 32,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"library/images/storage_atlas_.png", id:"storage_atlas_"},
		{src:"library/images/storage_atlas_2.png", id:"storage_atlas_2"},
		{src:"library/images/storage_atlas_3.png", id:"storage_atlas_3"},
		{src:"library/images/storage_atlas_4.png", id:"storage_atlas_4"},
		{src:"library/images/storage_atlas_5.png", id:"storage_atlas_5"},
		{src:"library/images/storage_atlas_6.png", id:"storage_atlas_6"},
		{src:"library/images/storage_atlas_7.png", id:"storage_atlas_7"},
		{src:"library/images/storage_atlas_8.png", id:"storage_atlas_8"},
		{src:"library/images/storage_atlas_9.png", id:"storage_atlas_9"},
		{src:"library/images/storage_atlas_10.png", id:"storage_atlas_10"},
		{src:"library/images/storage_atlas_11.png", id:"storage_atlas_11"},
		{src:"library/images/storage_atlas_12.png", id:"storage_atlas_12"},
		{src:"library/images/storage_atlas_13.png", id:"storage_atlas_13"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1200,600],[0,602,600,600]]},
		{name:"storage_atlas_4", frames: [[861,0,429,597],[402,0,457,600],[402,602,454,544],[0,0,400,820]]},
		{name:"storage_atlas_5", frames: [[0,0,454,544],[456,0,600,400],[0,546,1200,200]]},
		{name:"storage_atlas_6", frames: [[604,594,329,508],[935,0,316,521],[292,642,310,560],[0,642,290,611],[342,0,292,592],[0,0,340,640]]},
		{name:"storage_atlas_7", frames: [[0,404,800,200],[0,808,800,200],[0,0,800,200],[0,202,800,200],[0,1010,800,200],[0,606,800,200]]},
		{name:"storage_atlas_8", frames: [[0,202,800,200],[0,0,800,200],[0,404,800,200],[0,606,800,200],[0,808,800,200],[0,1010,800,200],[802,402,278,572],[802,0,400,400]]},
		{name:"storage_atlas_9", frames: [[0,574,291,541],[672,0,390,390],[293,392,390,390],[280,0,390,390],[0,0,278,572],[685,392,390,390],[685,784,390,390],[293,784,390,390]]},
		{name:"storage_atlas_10", frames: [[392,0,390,390],[784,0,390,390],[392,392,390,390],[0,0,390,390],[0,784,390,390],[784,392,390,390],[392,784,390,390],[0,392,390,390],[784,784,390,390]]},
		{name:"storage_atlas_11", frames: [[514,986,240,240],[0,302,246,500],[312,986,200,300],[550,382,200,300],[752,382,241,224],[0,804,310,291],[0,0,500,300],[312,684,300,300],[248,382,300,300],[614,684,204,277],[756,963,189,272],[995,382,220,220],[947,826,220,220],[995,604,220,220],[947,1048,220,220],[502,0,380,380],[884,0,380,380]]},
		{name:"storage_atlas_12", frames: [[0,888,190,190],[444,222,86,518],[714,648,133,200],[948,0,290,120],[222,666,190,190],[1096,456,200,143],[912,264,197,167],[920,433,174,188],[311,858,164,171],[1109,1082,119,187],[192,888,117,284],[1109,937,156,143],[1153,601,130,171],[0,1080,190,190],[311,1031,340,80],[724,264,186,188],[724,454,194,178],[1111,122,187,171],[311,1113,187,132],[1111,295,186,159],[532,648,180,180],[477,830,160,160],[639,850,160,160],[532,456,190,190],[532,264,190,190],[0,0,220,220],[222,222,220,220],[222,444,220,220],[0,222,220,220],[222,0,220,220],[0,444,220,220],[444,0,220,220],[0,666,220,220],[666,162,420,100],[500,1113,150,155],[653,1012,150,155],[805,948,150,155],[1001,623,150,155],[957,948,150,155],[1001,780,150,155],[805,1105,150,155],[849,791,150,155],[957,1105,150,155],[849,634,150,155],[666,0,280,160]]},
		{name:"storage_atlas_13", frames: [[270,601,135,46],[286,82,120,120],[863,0,120,120],[851,468,97,99],[102,510,90,90],[863,122,120,120],[585,558,120,66],[688,421,50,50],[766,0,95,155],[740,299,23,23],[747,633,57,78],[368,663,51,67],[134,144,120,120],[313,502,92,97],[688,478,119,78],[568,708,47,60],[518,739,38,50],[464,487,119,78],[0,0,132,168],[407,502,53,54],[985,189,35,33],[270,649,56,67],[249,718,69,39],[806,651,70,50],[585,523,70,31],[183,652,70,50],[673,749,65,21],[313,448,45,43],[794,752,40,22],[320,747,40,37],[0,414,100,101],[1010,282,14,56],[1010,224,14,56],[809,535,32,32],[183,704,64,47],[676,700,64,47],[806,703,64,47],[617,746,54,36],[404,733,54,36],[652,257,54,36],[408,82,94,68],[766,157,90,76],[478,567,90,72],[421,663,45,68],[57,694,45,68],[530,155,120,120],[408,152,120,120],[0,170,120,120],[256,204,120,120],[972,727,48,48],[676,633,69,65],[478,641,48,79],[140,602,41,118],[633,626,41,118],[891,578,80,78],[194,550,74,100],[851,366,109,100],[652,155,54,100],[740,366,109,110],[622,299,116,120],[244,326,116,120],[464,399,120,86],[122,388,88,120],[0,517,71,110],[73,602,65,90],[570,626,61,80],[586,421,100,100],[528,641,38,96],[328,649,38,96],[586,399,34,18],[286,0,220,80],[809,478,40,55],[270,550,40,43],[122,170,10,11],[407,567,69,94],[707,558,100,73],[878,658,57,60],[212,448,99,100],[256,144,23,38],[937,658,31,31],[742,713,50,50],[973,578,40,147],[134,0,150,142],[962,366,50,210],[714,0,50,297],[985,0,37,60],[985,62,37,60],[985,124,34,63],[368,732,34,63],[809,569,80,80],[0,717,50,50],[508,0,103,150],[0,629,55,86],[378,204,25,63],[73,517,25,63],[922,720,48,48],[104,722,48,48],[872,720,48,48],[468,722,48,48],[888,244,120,120],[122,266,120,120],[500,277,120,120],[766,244,120,120],[0,292,120,120],[378,274,120,120],[613,0,99,153],[362,396,100,104]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.achievement_open_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.achievement_open_de_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.achievement_open_en_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.achievement_open_es_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.achievement_open_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.achievement_open_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.achievement_open_id_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.achievement_open_it_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.achievement_open_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.achievement_open_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.achievement_open_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.achievement_open_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.again_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_for_next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.back_door1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.back_door2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.back_part1_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.back_part2_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bak1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bak2_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bak3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banca1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.banca2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.battery_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg_inventory_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg_item_inventory_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.big_lips_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.body_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.brain_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bubble1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.cls_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.colba1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.colba2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.comics_text1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.comics_text2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.crazy_professor_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.cronenberg1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.cronenberg1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.cronenberg1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.cronenberg1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.cronenberg1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.cronenberg1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.cronenberg2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.cronenberg2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.cronenberg2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.cronenberg2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.cronenberg2_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.cronenberg2_6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.cronenberg2_7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.cronenberg2_8_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.cronenberg2_9_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.cronenberg3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.cronenberg3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.cronenberg3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.cronenberg3_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_3_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cutefrankenstein_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.decor_banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.decor_banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.decor_progress_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.earring1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.earring2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.electron_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.eye2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.eye2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.eye2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.eye2_friend1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.eye2_friend2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.eye2_friend3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.flash1 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.flash2 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.flash3 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.flash4_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.flash5_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.flash6_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.foot1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.foot2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.fr1 = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.fr2 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.fr3 = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.h01_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.half_hair_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.head0_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.heart1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.heart2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.heart3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.help_hand_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hip1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hip2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.horn_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.icon_ingredient_13_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.icon_ingredient_14_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.icon_ingredient_15_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.icon_ingredient_16_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.icon_ingredient_17_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.icon_ingredient_18_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.icon_ingredient_19_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.icon_ingredient_20_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.icon_ingredient_22_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.icon_ingredient_7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.icon_ingredient_8_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.lamp_idea2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.leg_down1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.leg_down2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.lips_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.nav_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.next_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.palm1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.palm2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.predpl1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.predpl2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.product_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.product_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.product_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.product_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.product_0_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.product_0_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.product_0_7_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.product_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.product_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.product_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.product_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.product_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.product_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.sad_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.sceleton_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.shelf_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.shoe1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.shoulder1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.shoulder2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.simple_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.simple_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.simple_explosion_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.simple_explosion_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.smoke10_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.smoke1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.smoke2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.smoke3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.smoke4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.smoke5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.smoke6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.smoke7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.smoke8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.smoke9_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.tentacle_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.think_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.title_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_de_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.title_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_id_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_it_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_redirect_img();
	this.instance.setTransform(-130,-74,0.929,0.928);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-74,260,148.6);
p.frameBounds = [rect];


(lib.redirect_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.redirect_2_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect];


(lib.redirect_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.redirect_1_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect];


(lib.redirect_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.redirect_0_img();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-200,400,400);
p.frameBounds = [rect];


(lib.redirect_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("EhdvAu3MAAAhdtMC7fAAAMAAABdtg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.preloader_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F77EBB").s().p("AiVAAICVhiICWBiIiWBjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// graph
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F82991").s().p("AkqAAIEqjGIErDGIkrDHg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-20,60,40);
p.frameBounds = [rect];


(lib.preloader_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],5.8,10.1,-7.6,-13.1).s().p("AhHCHQhAgCgYgqQgXgoAdg2QAeg5BEgmQBAgmA/ACQBAACAYApQAXApgeA2QgdA4hCAnQg+Akg9AAIgGAAg");
	this.shape.setTransform(-54,-91.1,1.97,1.97);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-2.2,5.9,3,-7.9).s().p("AgUA7QglgHgUgVQgUgVAKgXQAJgZAggMQAhgOAjAHQAlAFAUAVQATAWgJAWQgKAZggAMQgXAKgYAAQgKAAgKgBg");
	this.shape_1.setTransform(0.2,-117.4,1.97,1.97);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// graph
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,0.976],-0.8,-102.7,-0.7,33.2).s().p("AmUFDQioiGABi9QgBi9CoiGQCoiGDsAAQDtAACoCGQCnCGAAC9QAAC9inCGQioCGjtABQjsgBioiGg");
	this.shape_2.setTransform(0.5,-47.8,1.97,1.97);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// graph
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(152,172,255,0)","#BFC2FF"],[0,1],0.5,4.5,0.5,38.5).s().p("Am5B1QivitgIjzQALC0CsB/QC3CKECAAQEDAAC4iKQCph/ANiyQgJDyitCsQi4C3kDAAQkCAAi3i3g");
	this.shape_3.setTransform(0,64.1,1.97,1.97);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// graph
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(255,145,175,0)","#E023A0","rgba(205,24,144,0)"],[0,0.667,1],17,-23,0,17,-23,112.1).s().p("An1H2QjQjQAAkmQAAklDQjQQDQjQElAAQEmAADQDQQDQDQAAElQAAEmjQDQQjQDQkmAAQklAAjQjQg");
	this.shape_4.setTransform(0,0,1.97,1.97);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// graph
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#F252BC","#F87BCE"],[0,1],0,63,0,-69).s().p("An1H2QjQjQAAkmQAAklDQjQQDQjQElAAQEmAADQDQQDQDQAAElQAAEmjQDQQjQDQkmAAQklAAjQjQg");
	this.shape_5.setTransform(0,0,1.97,1.97);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// graph
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.2)").s().p("AvcPeQmbmaAApEQAApDGbmZQGZmbJDAAQJEAAGaGbQGZGZAAJDQAAJEmZGaQmaGZpEAAQpDAAmZmZg");
	this.shape_6.setTransform(4.7,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,284.7,284.7);
p.frameBounds = [rect];


(lib.preloader_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFF0C9","#FFBE1F"],[0,1],0.1,-65,0.1,64.9).s().p("AmxJlIgEgCQgzgjgdg2IgEgGQgbg4AAg+IAAsbQAAg+Abg4IAEgGQAdg3AzgiIAEgCQA5gkBEAAQBEgBA5AkIACACIJpGPIgBgBQA1AiAgA7QAdA4AABAQAABBgdA4QggA7g1AhIAAAAIpoGPIgCABQg5AlhEgBQhEAAg5gkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-65,110,130);
p.frameBounds = [rect];


(lib.preloader_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A07FeQigAAAAihIAAl5QAAihCgAAMAp3AAAQCgAAAAChIAAF5QAAChigAAg");
	this.shape.setTransform(150,35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,300,70);
p.frameBounds = [rect];


(lib.preloader_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("A0TgGIAAhkMAonAAAIAABkQqGBxqKAAQqIAAqPhxg");
	this.shape.setTransform(130,10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,260,21.5);
p.frameBounds = [rect];


(lib.preloader_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F77EBB","#F82991"],[0,1],0,17,0,-17).s().p("Ax8CqQhHAAgygyQgygyABhGQgBhFAygyQAygyBHABMAj5AAAQBHgBAyAyQAxAyAABFQAABGgxAyQgyAyhHAAg");
	this.shape.setTransform(130,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// graph
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F77EBB","#F82991"],[0,1],0,-25,0,25).s().p("AyvD5QhTABg6g7Qg6g7AAhTIAAhiQAAhTA6g6QA6g6BTAAMAlfAAAQBTAAA6A6QA6A6ABBTIAABiQgBBTg6A7Qg6A7hTgBg");
	this.shape_1.setTransform(130,15);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-10,280,50);
p.frameBounds = [rect];


(lib.preloader_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#66CCFF","#6699FF","#66CCFF"],[0,0.494,1],20,15,20,-15).s().p("A0TCVIAAkqMAonAAAIAAEqg");
	this.shape.setTransform(130,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,260,30);
p.frameBounds = [rect];


(lib.preloader_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A3bXcMAAAgu3MAu3AAAMAAAAu3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.preloader_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F82991").s().p("AgKDkQgUgHgWgOQhZgygrgmQgygsgdgwQgkg5ABg4QAAhRA/glQApgZAxAAQA5AAAnAZQAcAQAVAgQAVggAdgQQAmgZA6AAQAyAAAoAZQBAAlAABRQAAA4gkA5QgdAwgyAsQgrAmhZAyQgWAOgTAHQgHACgFAAQgFAAgFgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-23,60,46.1);
p.frameBounds = [rect];


(lib.preloader_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F77EBB").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.instruction_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("text", "100px 'Arial'");
	this.text.lineHeight = 114;
	this.text.lineWidth = 317;
	this.text.setTransform(-158.4,-55.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160.4,-57.8,321,115.8);
p.frameBounds = [rect];


(lib.instruction_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCCFF").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.tentacle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tentacle_img();
	this.instance.setTransform(-49.5,-76.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-76.5,99,153);
p.frameBounds = [rect];


(lib.smoke_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(1));

	// animation
	this.instance = new lib.smoke1_img();

	this.instance_1 = new lib.smoke2_img();

	this.instance_2 = new lib.smoke3_img();

	this.instance_3 = new lib.smoke4_img();

	this.instance_4 = new lib.smoke5_img();

	this.instance_5 = new lib.smoke6_img();

	this.instance_6 = new lib.smoke7_img();

	this.instance_7 = new lib.smoke8_img();

	this.instance_8 = new lib.smoke9_img();

	this.instance_9 = new lib.smoke10_img();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,150,155);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.smoke_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.smoke1_img();

	this.instance_1 = new lib.smoke2_img();

	this.instance_2 = new lib.smoke3_img();

	this.instance_3 = new lib.smoke4_img();

	this.instance_4 = new lib.smoke5_img();

	this.instance_5 = new lib.smoke6_img();

	this.instance_6 = new lib.smoke7_img();

	this.instance_7 = new lib.smoke8_img();

	this.instance_8 = new lib.smoke9_img();

	this.instance_9 = new lib.smoke10_img();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},15).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[]},2).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,150,155), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.smoke_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.smoke1_img();

	this.instance_1 = new lib.smoke2_img();

	this.instance_2 = new lib.smoke3_img();

	this.instance_3 = new lib.smoke4_img();

	this.instance_4 = new lib.smoke5_img();

	this.instance_5 = new lib.smoke6_img();

	this.instance_6 = new lib.smoke7_img();

	this.instance_7 = new lib.smoke8_img();

	this.instance_8 = new lib.smoke9_img();

	this.instance_9 = new lib.smoke10_img();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},24).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[]},2).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,150,155), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.smoke_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.smoke1_img();

	this.instance_1 = new lib.smoke2_img();

	this.instance_2 = new lib.smoke3_img();

	this.instance_3 = new lib.smoke4_img();

	this.instance_4 = new lib.smoke5_img();

	this.instance_5 = new lib.smoke6_img();

	this.instance_6 = new lib.smoke7_img();

	this.instance_7 = new lib.smoke8_img();

	this.instance_8 = new lib.smoke9_img();

	this.instance_9 = new lib.smoke10_img();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[]},2).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,150,155);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.shoulder2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoulder2_img();
	this.instance.setTransform(-12.5,-30.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.5,-30.3,25,63);
p.frameBounds = [rect];


(lib.shoulder1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shoulder1_img();
	this.instance.setTransform(-12.5,-30.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.5,-30.3,25,63);
p.frameBounds = [rect];


(lib.shoe1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.shoe1_img();
	this.instance.setTransform(-27.1,-43.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27.1,-43.1,55,86);
p.frameBounds = [rect];


(lib.shelf_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shelf_img();
	this.instance.setTransform(-165,-39,0.786,0.785);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-39,330,78.6);
p.frameBounds = [rect];


(lib.shadow_achievement_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhdvAu3MAAAhdtMC7fAAAMAAABdtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-300,1200,600);
p.frameBounds = [rect];


(lib.product_progress_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{show:0,hide:1});

	// graph
	this.instance = new lib.product_1_6_img();
	this.instance.setTransform(-90,-90,0.818,0.818);

	this.instance_1 = new lib.product_0_6_img();
	this.instance_1.setTransform(-90,-90,0.818,0.818);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, rect];


(lib.product_progress_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"show":0,"hide":1});

	// graph
	this.instance = new lib.product_1_5_img();
	this.instance.setTransform(-90,-90,0.818,0.818);

	this.instance_1 = new lib.product_0_5_img();
	this.instance_1.setTransform(-90,-90,0.818,0.818);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, rect];


(lib.product_progress_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"show":0,"hide":1});

	// graph
	this.instance = new lib.product_1_4_img();
	this.instance.setTransform(-90,-90,0.818,0.818);

	this.instance_1 = new lib.product_0_4_img();
	this.instance_1.setTransform(-90,-90,0.818,0.818);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, rect];


(lib.product_progress_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"show":0,"hide":1});

	// graph
	this.instance = new lib.product_1_3_img();
	this.instance.setTransform(-90,-90,0.818,0.818);

	this.instance_1 = new lib.product_0_3_img();
	this.instance_1.setTransform(-90,-90,0.818,0.818);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, rect];


(lib.product_progress_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"show":0,"hide":1});

	// graph
	this.instance = new lib.product_1_2_img();
	this.instance.setTransform(-90,-90,0.818,0.818);

	this.instance_1 = new lib.product_0_2_img();
	this.instance_1.setTransform(-90,-90,0.818,0.818);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, rect];


(lib.product_progress_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"show":0,"hide":1});

	// graph
	this.instance = new lib.product_1_1_img();
	this.instance.setTransform(-90,-90,0.818,0.818);

	this.instance_1 = new lib.product_0_1_img();
	this.instance_1.setTransform(-90,-90,0.818,0.818);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, rect];


(lib.predpl2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.predpl2_img();
	this.instance.setTransform(-17.2,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-17.2,-31.5,34,63);
p.frameBounds = [rect];


(lib.predpl1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.predpl1_img();
	this.instance.setTransform(-17.2,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-17.2,-31.5,34,63);
p.frameBounds = [rect];


(lib.palm2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.palm2_img();
	this.instance.setTransform(-18.4,-29.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18.4,-29.8,37,60);
p.frameBounds = [rect];


(lib.palm1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.palm1_img();
	this.instance.setTransform(-18.4,-29.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18.4,-29.8,37,60);
p.frameBounds = [rect];


(lib.mixer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.008)").s().p("EgXbArvMAAAhXdMAu3AAAMAAABXdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-280,300,560);
p.frameBounds = [rect];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
p.frameBounds = [rect];


(lib.leg_down2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.leg_down2_img();
	this.instance.setTransform(-19.1,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.1,-48,38,96);
p.frameBounds = [rect];


(lib.leg_down1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.leg_down1_img();
	this.instance.setTransform(-19.1,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.1,-48,38,96);
p.frameBounds = [rect];


(lib.lamp_idea2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lamp_idea2_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.ingridient13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.body_1_img();
	this.instance.setTransform(-47.7,-77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.7,-77,95,155);
p.frameBounds = [rect];


(lib.ingridient7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sceleton_img();
	this.instance.setTransform(-51.5,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.5,-75,103,150);
p.frameBounds = [rect];


(lib.ingridient3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_img();
	this.instance.setTransform(-16.4,-8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16.4,-8.8,34,18);
p.frameBounds = [rect];


(lib.ingridient2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.head0_img();
	this.instance.setTransform(-78,-72.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78,-72.7,156,143);
p.frameBounds = [rect];


(lib.ingredient_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.big_lips_img();
	this.instance.setTransform(-33,-18,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldErIAApVIK7AAIAAJVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-30,70,60);
p.frameBounds = [rect];


(lib.horn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.horn_img();
	this.instance.setTransform(-40,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-39,80,78);
p.frameBounds = [rect];


(lib.hip2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hip2_img();
	this.instance.setTransform(-20.6,-57.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20.6,-57.1,41,118);
p.frameBounds = [rect];


(lib.hip1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hip1_img();
	this.instance.setTransform(-20.6,-57.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20.6,-57.1,41,118);
p.frameBounds = [rect];


(lib.help_object_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkZEaQh1h1AAilQAAikB1h1QB1h1CkAAQClAAB1B1QB2B1gBCkQABClh2B1Qh1B2ilgBQikABh1h2g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.help_hand_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.help_hand_img();
	this.instance.setTransform(-29,-6,0.735,0.735);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29,-6,139,200);
p.frameBounds = [rect];


(lib.heart32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.heart3_img();
	this.instance.setTransform(-17.9,-29.5,0.747,0.747);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-17.9,-29.5,35.9,59.1);
p.frameBounds = [rect];


(lib.heart22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.heart2_img();
	this.instance.setTransform(-25.8,-24.3,0.747,0.747);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.8,-24.3,51.6,48.6);
p.frameBounds = [rect];


(lib.half_hair2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.half_hair_img();
	this.instance.setTransform(-64.2,-56.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.2,-56.1,117,284);
p.frameBounds = [rect];


(lib.hair1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.hair1_img();
	this.instance.setTransform(-102,-137.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-137.2,204,277);
p.frameBounds = [rect];


(lib.h01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h01_img();
	this.instance.setTransform(-146,-296);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-146,-296,292,592);
p.frameBounds = [rect];


(lib.friend2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fr3();
	this.instance.setTransform(-150.2,-326.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150.2,-326.7,290,611);
p.frameBounds = [rect];


(lib.foot2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.foot2_img();
	this.instance.setTransform(-22.2,-34.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.2,-34.1,45,68);
p.frameBounds = [rect];


(lib.foot1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.foot1_img();
	this.instance.setTransform(-22.2,-34.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.2,-34.1,45,68);
p.frameBounds = [rect];


(lib.flashing1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash1();
	this.instance.setTransform(-45.9,-32.5);

	this.instance_1 = new lib.flash2();
	this.instance_1.setTransform(-64,-38.9);

	this.instance_2 = new lib.flash3();
	this.instance_2.setTransform(-71.5,-51.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.9,-32.5,94,68);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-64,-38.9,90,76), rect, rect=new cjs.Rectangle(-71.5,-51.3,90,72), rect];


(lib.eye2_friend = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 10
	this.instance = new lib.eye2_friend1_img();
	this.instance.setTransform(-27.8,-17);

	this.instance_1 = new lib.eye2_friend2_img();
	this.instance_1.setTransform(-27.8,-17);

	this.instance_2 = new lib.eye2_friend3_img();
	this.instance_2.setTransform(-27.8,-17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},30).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance}]},3).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27.8,-17,54,36);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.eye2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 9
	this.instance = new lib.eye2_1_img();
	this.instance.setTransform(-28,-24.1);

	this.instance_1 = new lib.eye2_2_img();
	this.instance_1.setTransform(-28,-24.1);

	this.instance_2 = new lib.eye2_3_img();
	this.instance_2.setTransform(-28,-24.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-24.1,64,47);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.eye1_friend = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 9
	this.instance = new lib.eye2_friend1_img();
	this.instance.setTransform(-27.8,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27.8,-17,54,36);
p.frameBounds = [rect];


(lib.eye1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.eye2_1_img();
	this.instance.setTransform(-28,-24.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-24.1,64,47);
p.frameBounds = [rect];


(lib.earring2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring2_img();
	this.instance.setTransform(-7.1,-28.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-7.1,-28.1,14,56);
p.frameBounds = [rect];


(lib.earring1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring1_img();
	this.instance.setTransform(-7.1,-28.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-7.1,-28.1,14,56);
p.frameBounds = [rect];


(lib.dress1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.dress1_img();
	this.instance.setTransform(-58.5,-76.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.5,-76.5,119,187);
p.frameBounds = [rect];


(lib.drag_drop_container_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];


(lib.cutefrankenstein = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cutefrankenstein_img();
	this.instance.setTransform(-50,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50.5,100,101);
p.frameBounds = [rect];


(lib.cronenberg3_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cronenberg3_2_img();
	this.instance.setTransform(-22.5,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.5,-21.5,45,43);
p.frameBounds = [rect];


(lib.cronenberg3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cronenberg3_3_img();
	this.instance.setTransform(-20,-11);

	this.instance_1 = new lib.cronenberg3_4_img();
	this.instance_1.setTransform(-20,-11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).to({state:[]},2).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-11,40,22);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-20,-11,40,37), rect, rect=new cjs.Rectangle(-20,-11,40,22), rect, rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cronenberg2_92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cronenberg2_9_img();
	this.instance.setTransform(-32.5,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-10.5,65,21);
p.frameBounds = [rect];


(lib.cronenberg2_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cronenberg2_4_img();
	this.instance.setTransform(-28,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-33.5,56,67);
p.frameBounds = [rect];


(lib.cronenberg2_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cronenberg2_3_img();
	this.instance.setTransform(-17.5,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-17.5,-16.5,35,33);
p.frameBounds = [rect];


(lib.cronenberg2_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cronenberg2_2_img();
	this.instance.setTransform(-26.5,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.5,-27,53,54);
p.frameBounds = [rect];


(lib.cronenberg2_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.cronenberg2_7_img();
	this.instance.setTransform(-35,-25);

	this.instance_1 = new lib.cronenberg2_8_img();
	this.instance_1.setTransform(-35,-25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},14).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).to({state:[]},2).to({state:[]},1).wait(29));

	// Слой 1
	this.instance_2 = new lib.cronenberg2_6_img();
	this.instance_2.setTransform(-35,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-25,70,50);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cronenberg1_51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cronenberg1_5_img();
	this.instance.setTransform(-19,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19,-25,38,50);
p.frameBounds = [rect];


(lib.cronenberg1_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cronenberg1_4_img();
	this.instance.setTransform(-23.5,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23.5,-30,47,60);
p.frameBounds = [rect];


(lib.cronenberg1_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cronenberg1_2_img();
	this.instance.setTransform(-46,-48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-48.5,92,97);
p.frameBounds = [rect];


(lib.cronenberg1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cronenberg1_3_img();
	this.instance.setTransform(-59.5,-39);

	this.instance_1 = new lib.cronenberg1_6_img();
	this.instance_1.setTransform(-59.5,-39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.5,-39,119,78);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cronenberg1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cronenberg1_1_img();
	this.instance.setTransform(-87,-94);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87,-94,174,188);
p.frameBounds = [rect];


(lib.crazy_professor_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.crazy_professor_img();
	this.instance.setTransform(-185,-380,0.927,0.927);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-185,-380,370.8,760);
p.frameBounds = [rect];


(lib.comics_part3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,0,3).p("EAVjgpEMAAABSJI9lAAMgNchSJg");
	this.shape.setTransform(-0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgIEApFMgNchSJMArBAAAMAAABSJg");

	// Слой 2
	this.instance = new lib.back_part2_img();
	this.instance.setTransform(-205.1,-320);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140.6,-265.4,281,531);
p.frameBounds = [rect];


(lib.com_text2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.comics_text2_img();
	this.instance.setTransform(-155,-145.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-145.5,310,291);
p.frameBounds = [rect];


(lib.com_text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sad_img();
	this.instance.setTransform(-22.6,21.4);

	this.instance_1 = new lib.sad_img();
	this.instance_1.setTransform(18,-38);

	this.instance_2 = new lib.sad_img();
	this.instance_2.setTransform(-72.6,-28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_3 = new lib.comics_text1_img();
	this.instance_3.setTransform(-120.5,-112);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.5,-112,241,224);
p.frameBounds = [rect];


(lib.colba2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.colba2_img();
	this.instance.setTransform(-25.5,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-33.5,51,67);
p.frameBounds = [rect];


(lib.colba1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.colba1_img();
	this.instance.setTransform(-28.5,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.5,-39,57,78);
p.frameBounds = [rect];


(lib.colb2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.colba2_img();
	this.instance.setTransform(-19.5,-35.9,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36.9,-35.9,66.6,77.9);
p.frameBounds = [rect];


(lib.colb1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.colba1_img();
	this.instance.setTransform(-43.4,-21.1,1,1,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.4,-49.6,88.4,96.1);
p.frameBounds = [rect];


(lib.closes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.earring1_img();
	this.instance.setTransform(-46.4,-20.3,1,1,-75);

	this.instance_1 = new lib.earring2_img();
	this.instance_1.setTransform(-43.5,-29,1,1,-75);

	this.instance_2 = new lib.shoe1_img();
	this.instance_2.setTransform(-22.1,-10.3,0.88,0.88);

	this.instance_3 = new lib.shoe1_img();
	this.instance_3.setTransform(5.5,-10.3,0.88,0.88);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_4 = new lib.cls_img();
	this.instance_4.setTransform(-46.5,-39.4,0.472,0.472);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.5,-42.5,100.4,107.9);
p.frameBounds = [rect];


(lib.bubble1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bubble1_img();
	this.instance.setTransform(-11.5,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.5,-11.5,23,23);
p.frameBounds = [rect];


(lib.brain11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.brain_img();
	this.instance.setTransform(-52,-37.2,0.52,0.52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52,-37.2,104,74.4);
p.frameBounds = [rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-195,-195);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-195,-195);

	this.instance_2 = new lib.title_de_img();
	this.instance_2.setTransform(-195,-195);

	this.instance_3 = new lib.title_fr_img();
	this.instance_3.setTransform(-195,-195);

	this.instance_4 = new lib.title_it_img();
	this.instance_4.setTransform(-195,-195);

	this.instance_5 = new lib.title_es_img();
	this.instance_5.setTransform(-195,-195);

	this.instance_6 = new lib.title_pt_img();
	this.instance_6.setTransform(-195,-195);

	this.instance_7 = new lib.title_tr_img();
	this.instance_7.setTransform(-195,-195);

	this.instance_8 = new lib.title_ja_img();
	this.instance_8.setTransform(-195,-195);

	this.instance_9 = new lib.title_hi_img();
	this.instance_9.setTransform(-195,-195);

	this.instance_10 = new lib.title_ar_img();
	this.instance_10.setTransform(-195,-195);

	this.instance_11 = new lib.title_id_img();
	this.instance_11.setTransform(-195,-195);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-195,390,390);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_achievement_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11});

	// graph
	this.instance = new lib.achievement_open_en_img();
	this.instance.setTransform(-350,-88,0.875,0.875);

	this.instance_1 = new lib.achievement_open_ru_img();
	this.instance_1.setTransform(-350,-88,0.875,0.875);

	this.instance_2 = new lib.achievement_open_de_img();
	this.instance_2.setTransform(-350,-88,0.875,0.875);

	this.instance_3 = new lib.achievement_open_fr_img();
	this.instance_3.setTransform(-350,-88,0.875,0.875);

	this.instance_4 = new lib.achievement_open_it_img();
	this.instance_4.setTransform(-350,-88,0.875,0.875);

	this.instance_5 = new lib.achievement_open_es_img();
	this.instance_5.setTransform(-350,-88,0.875,0.875);

	this.instance_6 = new lib.achievement_open_pt_img();
	this.instance_6.setTransform(-350,-88,0.875,0.875);

	this.instance_7 = new lib.achievement_open_tr_img();
	this.instance_7.setTransform(-350,-88,0.875,0.875);

	this.instance_8 = new lib.achievement_open_ja_img();
	this.instance_8.setTransform(-350,-88,0.875,0.875);

	this.instance_9 = new lib.achievement_open_hi_img();
	this.instance_9.setTransform(-350,-88,0.875,0.875);

	this.instance_10 = new lib.achievement_open_ar_img();
	this.instance_10.setTransform(-350,-88,0.875,0.875);

	this.instance_11 = new lib.achievement_open_id_img();
	this.instance_11.setTransform(-350,-88,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,-88,700,175);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.body_electron_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.electron_img();
	this.instance.setTransform(-16,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16,-16,32,32);
p.frameBounds = [rect];


(lib.bg_title_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_3_img();
	this.instance.setTransform(-195,-195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-195,390,390);
p.frameBounds = [rect];


(lib.bg_title_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_2_img();
	this.instance.setTransform(-195,-195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-195,390,390);
p.frameBounds = [rect];


(lib.bg_title_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_1_img();
	this.instance.setTransform(-195,-195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-195,390,390);
p.frameBounds = [rect];


(lib.bg_item_inventory_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_item_inventory_img();
	this.instance.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.bg_inventory_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_inventory_img();
	this.instance.setTransform(-145,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-60,290,120);
p.frameBounds = [rect];


(lib.battery = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.battery_img();
	this.instance.setTransform(-49.1,-47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.1,-47.5,97,99);
p.frameBounds = [rect];


(lib.banca2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.banca2_img();
	this.instance.setTransform(-67.5,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.5,-23,135,46);
p.frameBounds = [rect];


(lib.banca1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.banca1_img();
	this.instance.setTransform(-66.5,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.5,-100,133,200);
p.frameBounds = [rect];


(lib.bak3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bak3_img();
	this.instance.setTransform(-130,-270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-270,291,541);
p.frameBounds = [rect];


(lib.bak2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bak2_img();
	this.instance.setTransform(-227,-272);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-227,-272,454,544);
p.frameBounds = [rect];


(lib.bak1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bak1_img();
	this.instance.setTransform(-227,-272);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-227,-272,454,544);
p.frameBounds = [rect];


(lib.back_door2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.back_door2_img();
	this.instance.setTransform(-44,-259);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44,-259,86,518);
p.frameBounds = [rect];


(lib.back_door1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.back_door1_img();
	this.instance.setTransform(-123,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123,-250,246,500);
p.frameBounds = [rect];


(lib.curtain_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_3_img();
	this.instance.setTransform(-300,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-300,600,600);
p.frameBounds = [rect];


(lib.curtain_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5A6DA6").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
	this.shape.setTransform(600,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,600);
p.frameBounds = [rect];


(lib.curtain_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_2_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,600);
p.frameBounds = [rect];


(lib.curtain_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,600);
p.frameBounds = [rect];


(lib.copyright_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.copyright_img();
	this.instance.setTransform(-250,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-150,500,300);
p.frameBounds = [rect];


(lib.copyright_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.thunder_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];


(lib.thunder_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.ParticleSimpleExplosionMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.simple_explosion_1_img();
	this.instance.setTransform(-24,-24);

	this.instance_1 = new lib.simple_explosion_2_img();
	this.instance_1.setTransform(-24,-24);

	this.instance_2 = new lib.simple_explosion_3_img();
	this.instance_2.setTransform(-24,-24);

	this.instance_3 = new lib.simple_explosion_4_img();
	this.instance_3.setTransform(-24,-24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect, rect, rect, rect];


(lib.ParticleGravityExplosionMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gravity_explosion_img();
	this.instance.setTransform(-18,-18,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.bubble_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// viewer
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Eg+fAnEMAAAhOHMB8/AAAMAAABOHg");
	this.shape.setTransform(600,250,1.5,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,500);
p.frameBounds = [rect];


(lib.blinking_light_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_1_img();
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.sound_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sound_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.sound_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sound_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.social_network_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{vk:0,fb:1,youtube:2,twitter:3});

	// graph
	this.instance = new lib.social_network_1_img();
	this.instance.setTransform(-60,-60);

	this.instance_1 = new lib.social_network_2_img();
	this.instance_1.setTransform(-60,-60);

	this.instance_2 = new lib.social_network_3_img();
	this.instance_2.setTransform(-60,-60);

	this.instance_3 = new lib.social_network_4_img();
	this.instance_3.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect];


(lib.remove_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// bg
	this.instance = new lib.remove_1_img();
	this.instance.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect, null];


(lib.play_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_1_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.photo_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_1_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.next_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_2_img();
	this.instance.setTransform(-65,-65,0.812,0.812);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.next_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_1_img();
	this.instance.setTransform(-70,-70,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.more_games_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_19_img();
	this.instance.setTransform(-0.4,-0.2,0.26,0.26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.4,-0.2,8.1,8);
p.frameBounds = [rect];


(lib.more_games_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_18_img();
	this.instance.setTransform(0,0.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0.1,16.6,27.4);
p.frameBounds = [rect];


(lib.more_games_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_17_img();
	this.instance.setTransform(-0.1,-0.1,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.1,-0.1,23.8,24);
p.frameBounds = [rect];


(lib.more_games_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.more_games_1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,50,50);
p.frameBounds = [rect];


(lib.more_games_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_16_img();
	this.instance.setTransform(2.7,-7.5,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(2.7,-7.5,41.1,43.2);
p.frameBounds = [rect];


(lib.more_games_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_6_img();
	this.instance.setTransform(-69.8,-64.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.8,-64.1,139.7,128.2);
p.frameBounds = [rect];


(lib.more_games_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.more_games_15_img();
	this.instance.setTransform(0,0,0.822,0.822);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,82.2,60);
p.frameBounds = [rect];


(lib.more_games_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_14_img();
	this.instance.setTransform(0.3,0.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.3,0.1,49.7,67.7);
p.frameBounds = [rect];


(lib.more_games_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_13_img();
	this.instance.setTransform(0.1,-0.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.1,-0.1,7.2,7.9);
p.frameBounds = [rect];


(lib.more_games_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_10_img();
	this.instance.setTransform(0,1.5,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,1.5,133.9,135.4);
p.frameBounds = [rect];


(lib.more_games_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_9_img();
	this.instance.setTransform(0.1,-0.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.1,-0.1,133.9,114.5);
p.frameBounds = [rect];


(lib.more_games_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_8_img();
	this.instance.setTransform(-0.1,0,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.1,0,134.7,95.1);
p.frameBounds = [rect];


(lib.more_games_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.more_games_7_img();
	this.instance.setTransform(-0.3,0,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.3,0,134.7,123.1);
p.frameBounds = [rect];


(lib.logotype_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.logotype_img();
	this.instance.setTransform(-170,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4CGPQihABAAigIAAnfQAAigChABMAwFAAAQChgBAACgIAAHfQAACgihgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-40,340,80);
p.frameBounds = [rect];


(lib.logo_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.logo_1_img();
	this.instance.setTransform(-110,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("At5GPQhWABg+g+Qg9g9AAhYIAAl5QAAhYA9g9QA+g+BWABIbzAAQBWgBA+A+QA9A9AABYIAAF5QAABYg9A9Qg+A+hWgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-40,220,80);
p.frameBounds = [rect];


(lib.instruction_1_mc_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.instruction_1_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.full_screen_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.full_screen_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.full_screen_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.full_screen_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.free_games_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.free_games_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.free_games_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.free_games_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.Cursor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"default":0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Aj2D3QhnhnAAiQQAAiPBnhnQBnhnCPAAQCQAABnBnQBnBnAACPQAACQhnBnQhnBniQAAQiPAAhnhng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect];


(lib.credits_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.credits_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.bg_small_buttons_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_small_buttons_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.bg_large_buttons_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_large_buttons_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.beam_light_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.mouseChildren = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.298)","rgba(255,255,255,0)"],[0.024,0.494,0.984],-75.1,0,74.9,0).s().p("EgLsAnEMAAAhOHIXZAAMAAABOHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-250,150,500);
p.frameBounds = [rect];


(lib.banner_play_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.banner_play_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.banner_play_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.banner_play_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.animation_for_next_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.animation_for_next_1_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.again_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.again_1_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.redirect_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_redirect_mc();
	this.instance.setTransform(0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(220));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAdedIgdgkIgcAkI9OAAMAAAg85MA7VAAAMAAAA85g");
	mask.setTransform(0,5);

	// image_1
	this.instance_1 = new lib.redirect_4_mc();

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({alpha:0.012},15).to({_off:true},1).wait(149).to({_off:false,scaleX:0.5,scaleY:0.5,x:95,y:95},0).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},15).wait(1));

	// image_2
	this.instance_2 = new lib.redirect_5_mc();
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).wait(55).to({alpha:0.012},15).to({_off:true},1).wait(39).to({_off:false,scaleX:0.5,scaleY:0.5,x:-95,y:-95},0).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},15).wait(56));

	// image_1
	this.instance_3 = new lib.redirect_4_mc();
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(94).to({_off:false},0).wait(70).to({_off:true},1).wait(55));

	// bg
	this.instance_4 = new lib.redirect_3_mc();
	this.instance_4.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(220));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EggyAlgMAAAhK/MBBlAAAMAAABK/g");
	this.shape.setTransform(0,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,480.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preloader_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.preloader_13_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.25,scaleY:1.25,x:-10},5).to({x:10},10).to({scaleX:1,scaleY:1,x:0},5).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-65,110,130);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-59.7,-68.2,115.5,136.5), new cjs.Rectangle(-64.5,-71.5,121,143), new cjs.Rectangle(-69.2,-74.7,126.5,149.5), new cjs.Rectangle(-74,-78,132,156), new cjs.Rectangle(-78.7,-81.2,137.5,162.5), new cjs.Rectangle(-76.7,-81.2,137.5,162.5), new cjs.Rectangle(-74.7,-81.2,137.5,162.5), new cjs.Rectangle(-72.7,-81.2,137.5,162.5), new cjs.Rectangle(-70.7,-81.2,137.5,162.5), new cjs.Rectangle(-68.7,-81.2,137.5,162.5), new cjs.Rectangle(-66.7,-81.2,137.5,162.5), new cjs.Rectangle(-64.7,-81.2,137.5,162.5), new cjs.Rectangle(-62.7,-81.2,137.5,162.5), new cjs.Rectangle(-60.7,-81.2,137.5,162.5), new cjs.Rectangle(-58.7,-81.2,137.5,162.5), new cjs.Rectangle(-58,-78,132,156), new cjs.Rectangle(-57.3,-74.7,126.5,149.5), new cjs.Rectangle(-56.5,-71.5,121,143), new cjs.Rectangle(-55.8,-68.2,115.5,136.5), rect=new cjs.Rectangle(-55,-65,110,130), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preloader_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.preloader_16_mc();
	this.instance.setTransform(8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.preloader_15_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,284.7,284.7);
p.frameBounds = [rect];


(lib.preloader_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preloader_14_mc();
	this.instance.setTransform(0,0.1,0.462,0.462,0,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("AntHuQjOjNAAkhQAAkgDOjOQAygyA5gmQCph1DZAAQDaAACqB1QA4AmAzAyQDMDOABEgQgBEhjMDNQjODOkhAAQkgAAjNjOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("Ap7J8QkHkIgBl0QABlzEHkIQBChBBHgxQDbiWEXAAQEYAADbCWQBIAxBBBBQEIEIAAFzQAAF0kIEIQkHEHl1ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.preloader_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// decor
	this.instance = new lib.preloader_18_mc();
	this.instance.setTransform(130,32,0.4,0.4);

	this.instance_1 = new lib.preloader_18_mc();
	this.instance_1.setTransform(130,-2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(100));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAVCVIgVgYIgUAYIxtAAQg7gBgqgrQgrgqgCg8IAAgFQACg8ArgqQAqgrA7gCIRtAAIAUAaIAVgaIRtAAQA7ACArArQAqAqACA8IAAAFQgCA8gqAqQgrArg7ABg");
	mask.setTransform(130,15);

	// shadow
	this.instance_2 = new lib.preloader_10_mc();

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

	// animation
	this.instance_3 = new lib.preloader_7_mc();
	this.instance_3.setTransform(0,0,0.003,1);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1},99).wait(1));

	// bg
	this.instance_4 = new lib.preloader_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100));

	// shadow
	this.instance_5 = new lib.preloader_11_mc();
	this.instance_5.setTransform(-20,-20);
	this.instance_5.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,300,70);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preloader_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preloader_2_mc();
	this.instance.setTransform(-525,0);

	this.instance_1 = new lib.preloader_2_mc();
	this.instance_1.setTransform(-455,0);

	this.instance_2 = new lib.preloader_2_mc();
	this.instance_2.setTransform(-385,0);

	this.instance_3 = new lib.preloader_2_mc();
	this.instance_3.setTransform(-315,0);

	this.instance_4 = new lib.preloader_2_mc();
	this.instance_4.setTransform(-245,0);

	this.instance_5 = new lib.preloader_2_mc();
	this.instance_5.setTransform(-105.5,0);

	this.instance_6 = new lib.preloader_2_mc();
	this.instance_6.setTransform(-175,0);

	this.instance_7 = new lib.preloader_2_mc();
	this.instance_7.setTransform(525,0);

	this.instance_8 = new lib.preloader_2_mc();
	this.instance_8.setTransform(455,0);

	this.instance_9 = new lib.preloader_2_mc();
	this.instance_9.setTransform(385,0);

	this.instance_10 = new lib.preloader_2_mc();
	this.instance_10.setTransform(315,0);

	this.instance_11 = new lib.preloader_2_mc();
	this.instance_11.setTransform(245,0);

	this.instance_12 = new lib.preloader_2_mc();
	this.instance_12.setTransform(175,0);

	this.instance_13 = new lib.preloader_2_mc();
	this.instance_13.setTransform(105,0);

	this.instance_14 = new lib.preloader_2_mc();
	this.instance_14.setTransform(35,0);

	this.instance_15 = new lib.preloader_2_mc();
	this.instance_15.setTransform(-35,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-555,-23,1110,46.1);
p.frameBounds = [rect];


(lib.preloader_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preloader_2_mc();
	this.instance.setTransform(-560,0);

	this.instance_1 = new lib.preloader_2_mc();
	this.instance_1.setTransform(-490,0);

	this.instance_2 = new lib.preloader_2_mc();
	this.instance_2.setTransform(-420,0);

	this.instance_3 = new lib.preloader_2_mc();
	this.instance_3.setTransform(-350,0);

	this.instance_4 = new lib.preloader_2_mc();
	this.instance_4.setTransform(-280,0);

	this.instance_5 = new lib.preloader_2_mc();
	this.instance_5.setTransform(-210,0);

	this.instance_6 = new lib.preloader_2_mc();
	this.instance_6.setTransform(-140,0);

	this.instance_7 = new lib.preloader_2_mc();
	this.instance_7.setTransform(-70,0);

	this.instance_8 = new lib.preloader_2_mc();
	this.instance_8.setTransform(560,0);

	this.instance_9 = new lib.preloader_2_mc();
	this.instance_9.setTransform(490,0);

	this.instance_10 = new lib.preloader_2_mc();
	this.instance_10.setTransform(420,0);

	this.instance_11 = new lib.preloader_2_mc();
	this.instance_11.setTransform(350,0);

	this.instance_12 = new lib.preloader_2_mc();
	this.instance_12.setTransform(280,0);

	this.instance_13 = new lib.preloader_2_mc();
	this.instance_13.setTransform(210,0);

	this.instance_14 = new lib.preloader_2_mc();
	this.instance_14.setTransform(140,0);

	this.instance_15 = new lib.preloader_2_mc();
	this.instance_15.setTransform(70,0);

	this.instance_16 = new lib.preloader_2_mc();
	this.instance_16.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-590,-23,1180,46.1);
p.frameBounds = [rect];


(lib.preloader_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preloader_4_mc();
	this.instance.setTransform(400,50);
	this.instance.alpha = 0.199;

	this.instance_1 = new lib.preloader_4_mc();
	this.instance_1.setTransform(400,550);
	this.instance_1.alpha = 0.199;

	this.instance_2 = new lib.preloader_3_mc();
	this.instance_2.setTransform(400,500);
	this.instance_2.alpha = 0.148;

	this.instance_3 = new lib.preloader_3_mc();
	this.instance_3.setTransform(400,100);
	this.instance_3.alpha = 0.148;

	this.instance_4 = new lib.preloader_4_mc();
	this.instance_4.setTransform(400,450);
	this.instance_4.alpha = 0.102;

	this.instance_5 = new lib.preloader_4_mc();
	this.instance_5.setTransform(400,150);
	this.instance_5.alpha = 0.102;

	this.instance_6 = new lib.preloader_3_mc();
	this.instance_6.setTransform(400,400);
	this.instance_6.alpha = 0.051;

	this.instance_7 = new lib.preloader_3_mc();
	this.instance_7.setTransform(400,200);
	this.instance_7.alpha = 0.051;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_8 = new lib.preloader_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		ищем наиболее подходящий язык
		https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		/*
		
		*/
		var label_str = "en";
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		/*
		
		*/
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz"))
		{
			label_str = "ru";
		}
		if (lang_str == "de")
		{
			label_str = "de";
		}
		if (lang_str == "fr")
		{
			label_str = "fr";
		}
		if (lang_str == "it")
		{
			label_str = "it";
		}
		if (lang_str == "es")
		{
			label_str = "es";
		}
		if (lang_str == "pt")
		{
			label_str = "pt";
		}
		if (lang_str == "tr")
		{
			label_str = "tr";
		}
		if (lang_str == "ja")
		{
			label_str = "ja";
		}
		if (lang_str == "hi")
		{
			label_str = "hi";
		}
		if (lang_str == "ar")
		{
			label_str = "ar";
		}
		if (lang_str == "id")
		{
			label_str = "id";
		}
		/*
		
		*/
		this.body_mc.gotoAndStop(label_str);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-195,390,390);
p.frameBounds = [rect];


(lib.title_achievement_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		ищем наиболее подходящий язык
		https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		/*
		
		*/
		var label_str = "en";
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		/*
		
		*/
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz"))
		{
			label_str = "ru";
		}
		if (lang_str == "de")
		{
			label_str = "de";
		}
		if (lang_str == "fr")
		{
			label_str = "fr";
		}
		if (lang_str == "it")
		{
			label_str = "it";
		}
		if (lang_str == "es")
		{
			label_str = "es";
		}
		if (lang_str == "pt")
		{
			label_str = "pt";
		}
		if (lang_str == "tr")
		{
			label_str = "tr";
		}
		if (lang_str == "ja")
		{
			label_str = "ja";
		}
		if (lang_str == "hi")
		{
			label_str = "hi";
		}
		if (lang_str == "ar")
		{
			label_str = "ar";
		}
		if (lang_str == "id")
		{
			label_str = "id";
		}
		/*
		
		*/
		this.body_mc.gotoAndStop(label_str);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_achievement_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,-88,700,175);
p.frameBounds = [rect];


(lib.nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlPIlQgzg0AAhIQAAhHAzgzIExkvIkvkwQgzgwAAhLQAAhHAzgyQAygyBIgBQBKABAxAyIGoGpQAzA0AABHQAABGgzAyImpGtQg1AyhHABQhHgBgzgyg");

	// animation
	this.instance = new lib.beam_light_0_mc();
	this.instance.setTransform(-200,0,1,1,30);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({x:200},20).wait(41));

	// graph
	this.instance_1 = new lib.body_nav_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ap7J8QkIkHAAl1QAAl0EIkHQEHkIF0AAQF0AAEIEIQEIEHAAF0QAAF1kIEHQkIEIl0AAQl0AAkHkIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180.1,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.magic_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.ingridient13();
	this.instance.setTransform(196.3,220.4,1,1,0,0,0,-0.2,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(75).to({_off:false},0).to({x:739.8,y:322.5},19).wait(1));

	// animation
	this.instance_1 = new lib.smoke_4_mc();
	this.instance_1.setTransform(314,484.9,1,1,0,0,0,75,77.5);

	this.instance_2 = new lib.smoke_4_mc();
	this.instance_2.setTransform(510,295,1,1,0,0,0,75,77.5);

	this.instance_3 = new lib.smoke_4_mc();
	this.instance_3.setTransform(289,142.4,1,1,0,0,0,75,77.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},34).to({state:[]},47).wait(14));

	// animation
	this.instance_4 = new lib.flash4_img();
	this.instance_4.setTransform(239.4,73.6);

	this.instance_5 = new lib.flash5_img();
	this.instance_5.setTransform(240.9,63.1);

	this.instance_6 = new lib.flash6_img();
	this.instance_6.setTransform(243.6,26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},35).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[]},2).wait(42));

	// animation
	this.instance_7 = new lib.back_door2();
	this.instance_7.setTransform(519,311,1.398,1,0,0,0,43,4);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(66).to({scaleX:1,alpha:1},4).wait(4).to({scaleX:1.4,alpha:0.012},4).wait(17));

	// animation
	this.instance_8 = new lib.back_door1();
	this.instance_8.setTransform(517.5,304.5,1,1,0,0,0,119.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(64).to({scaleX:0.35},5).to({_off:true},1).wait(6).to({_off:false},0).to({scaleX:1},5).wait(14));

	// animation
	this.instance_9 = new lib.ingridient13();
	this.instance_9.setTransform(399.3,297.4,1,1,0,0,0,-0.2,0.5);
	this.instance_9.alpha = 0.012;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(45).to({_off:false},0).to({y:240.4,alpha:1},8).wait(16).to({x:196.3,y:220.4},6).to({_off:true},1).wait(19));

	// animation
	this.instance_10 = new lib.bak3();
	this.instance_10.setTransform(381,304.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(95));

	// animation (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EABKArMIAAg7IBuAAIAAgBMAmIAAAIAAA8g");
	var mask_graphics_1 = new cjs.Graphics().p("EABKArMIAAjvIBuAAIAAgFMAmIAAAIAAD0g");
	var mask_graphics_2 = new cjs.Graphics().p("EABKArNIAAmkIBuAAIAAgJMAmIAAAIAAGtg");
	var mask_graphics_3 = new cjs.Graphics().p("EABKArNIAApZIBuAAIAAgMMAmIAAAIAAJlg");
	var mask_graphics_4 = new cjs.Graphics().p("EABKArNIAAsNIBuAAIAAgQMAmIAAAIAAMdg");
	var mask_graphics_5 = new cjs.Graphics().p("EABKArNIAAvCIBuAAIAAgTMAmIAAAIAAPVg");
	var mask_graphics_6 = new cjs.Graphics().p("EABKArNIAAx2IBuAAIAAgXMAmIAAAIAASNg");
	var mask_graphics_7 = new cjs.Graphics().p("EABKArOIAA0rIBuAAIAAgbMAmIAAAIAAVGg");
	var mask_graphics_8 = new cjs.Graphics().p("EABKArOIAA3gIBuAAIAAgeMAmIAAAIAAX+g");
	var mask_graphics_9 = new cjs.Graphics().p("EABKArOIAA6UIBuAAIAAgiMAmIAAAIAAa2g");
	var mask_graphics_10 = new cjs.Graphics().p("EABKArOIAA9JIBuAAIAAglMAmIAAAIAAdug");
	var mask_graphics_11 = new cjs.Graphics().p("EABKArOIAA/9IBuAAIAAgpMAmIAAAMAAAAgmg");
	var mask_graphics_12 = new cjs.Graphics().p("EABKArOMAAAgixIBuAAIAAgtMAmIAAAMAAAAjeg");
	var mask_graphics_13 = new cjs.Graphics().p("EABKArPMAAAglnIBuAAIAAgwMAmIAAAMAAAAmXg");
	var mask_graphics_14 = new cjs.Graphics().p("EABKArPMAAAgobIBuAAIAAg0MAmIAAAMAAAApPg");
	var mask_graphics_15 = new cjs.Graphics().p("EABKArPMAAAgrPIBuAAIAAg3MAmIAAAMAAAAsGg");
	var mask_graphics_16 = new cjs.Graphics().p("EABKArPMAAAguCIBuAAIAAg8MAmIAAAMAAAAu+g");
	var mask_graphics_17 = new cjs.Graphics().p("EABKArPMAAAgw2IBuAAIAAhAMAmIAAAMAAAAx2g");
	var mask_graphics_18 = new cjs.Graphics().p("EABKArQMAAAgzsIBuAAIAAhDMAmIAAAMAAAA0vg");
	var mask_graphics_19 = new cjs.Graphics().p("EABKArQMAAAg2gIBuAAIAAhHMAmIAAAMAAAA3ng");
	var mask_graphics_20 = new cjs.Graphics().p("EABKArQMAAAg5UIBuAAIAAhLMAmIAAAMAAAA6fg");
	var mask_graphics_21 = new cjs.Graphics().p("EABKArQMAAAg8JIBuAAIAAhOMAmIAAAMAAAA9Xg");
	var mask_graphics_22 = new cjs.Graphics().p("EABKArQMAAAg+9IBuAAIAAhSMAmIAAAMAAABAPg");
	var mask_graphics_23 = new cjs.Graphics().p("EABKArQMAAAhByIBuAAIAAhVMAmIAAAMAAABDHg");
	var mask_graphics_24 = new cjs.Graphics().p("EABKArRMAAAhEnIBuAAIAAhZMAmIAAAMAAABGAg");
	var mask_graphics_25 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_26 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_27 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_28 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_29 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_30 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_31 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_32 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_33 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_34 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_35 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_36 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_37 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_38 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_39 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_40 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_41 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_42 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_43 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_44 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_45 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_46 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_47 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_48 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_49 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_50 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_51 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_52 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_53 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_54 = new cjs.Graphics().p("EABKArQMAAAg/lIBuAAIAAhTMAmIAAAMAAABA4g");
	var mask_graphics_55 = new cjs.Graphics().p("EABKArQMAAAg3wIBuAAIAAhJMAmIAAAMAAAA45g");
	var mask_graphics_56 = new cjs.Graphics().p("EABKArPMAAAgv6IBuAAIAAg+MAmIAAAMAAAAw4g");
	var mask_graphics_57 = new cjs.Graphics().p("EABKArPMAAAgoHIBuAAIAAg0MAmIAAAMAAAAo7g");
	var mask_graphics_58 = new cjs.Graphics().p("EABKArOMAAAggRIBuAAIAAgqMAmIAAAMAAAAg7g");
	var mask_graphics_59 = new cjs.Graphics().p("EABKArOIAA4cIBuAAIAAggMAmIAAAIAAY8g");
	var mask_graphics_60 = new cjs.Graphics().p("EABKArNIAAwmIBuAAIAAgVMAmIAAAIAAQ7g");
	var mask_graphics_61 = new cjs.Graphics().p("EABKArNIAAoxIBuAAIAAgLMAmIAAAIAAI8g");
	var mask_graphics_62 = new cjs.Graphics().p("EABKArMIAAg7IBuAAIAAgBMAmIAAAIAAA8g");
	var mask_graphics_63 = new cjs.Graphics().p("EABKArMIAAg7IBuAAIAAgBMAmIAAAIAAA8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_1,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_2,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_3,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_4,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_5,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_6,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_7,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_8,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_9,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_10,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_11,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_12,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_13,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_14,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_15,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_16,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_17,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_18,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_19,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_20,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_21,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_22,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_23,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_24,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_25,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_26,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_27,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_28,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_29,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_30,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_31,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_32,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_33,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_34,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_35,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_36,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_37,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_38,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_39,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_40,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_41,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_42,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_43,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_44,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_45,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_46,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_47,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_48,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_49,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_50,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_51,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_52,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_53,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_54,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_55,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_56,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_57,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_58,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_59,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_60,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_61,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_62,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_63,x:262.5,y:276.5}).wait(32));

	// animation
	this.instance_11 = new lib.bak2();
	this.instance_11.setTransform(381,304.5);

	this.instance_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(251,34.5,291,541);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(214,34.5,371,541), rect=new cjs.Rectangle(214,34.5,371,547.2), rect, rect=new cjs.Rectangle(214,34.5,371,549.6), rect, rect=new cjs.Rectangle(214,26.2,371,560), rect, rect=new cjs.Rectangle(214,34.5,371,547.2), rect, rect=new cjs.Rectangle(214,34.5,371,549.6), rect, rect=new cjs.Rectangle(214,26.2,371,560), rect, rect=new cjs.Rectangle(214,34.5,371,547.2), rect, rect=new cjs.Rectangle(214,34.5,371,549.6), rect, rect=new cjs.Rectangle(214,26.2,371,560), rect, rect=new cjs.Rectangle(214,34.5,371,541), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(182.7,34.5,402.3,541), new cjs.Rectangle(148.8,34.5,436.2,541), new cjs.Rectangle(177.4,34.5,407.6,541), new cjs.Rectangle(206,34.5,379,541), rect=new cjs.Rectangle(214,34.5,371,541), rect, rect, rect=new cjs.Rectangle(251,34.5,291,541), rect, rect, rect, rect, new cjs.Rectangle(251,34.5,307.5,541), new cjs.Rectangle(251,34.5,336.1,541), new cjs.Rectangle(251,34.5,364.7,541), new cjs.Rectangle(251,34.5,393.3,541), new cjs.Rectangle(251,34.5,422,541), new cjs.Rectangle(251,34.5,450.6,541), new cjs.Rectangle(251,34.5,479.2,541), new cjs.Rectangle(251,34.5,507.8,541), new cjs.Rectangle(251,34.5,536.3,541)];


(lib.magic_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.back_door1();
	this.instance.setTransform(398,304.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.bak3();
	this.instance_1.setTransform(381,304.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EABKArMIAAg7IBuAAIAAgBMAmIAAAIAAA8g");
	mask.setTransform(262.5,276.5);

	// graph
	this.instance_2 = new lib.bak2();
	this.instance_2.setTransform(381,304.5);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(251,34.5,291,541);
p.frameBounds = [rect];


(lib.ingridient20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ingridient13();
	this.instance.setTransform(2.7,-111.9);

	this.instance_1 = new lib.hip2();
	this.instance_1.setTransform(27.6,4.4,1,1,0,0,180);

	this.instance_2 = new lib.hip1();
	this.instance_2.setTransform(-24.7,4.4);

	this.instance_3 = new lib.leg_down2();
	this.instance_3.setTransform(33,86.7,1,1,0,0,180);

	this.instance_4 = new lib.leg_down1();
	this.instance_4.setTransform(-29.7,86.7);

	this.instance_5 = new lib.foot2();
	this.instance_5.setTransform(27.2,155.2,1,1,0,0,180);

	this.instance_6 = new lib.foot1();
	this.instance_6.setTransform(-23.6,155.2);

	this.instance_7 = new lib.shoulder2();
	this.instance_7.setTransform(35.7,-129.5,1,1,0,0,180);

	this.instance_8 = new lib.shoulder1();
	this.instance_8.setTransform(-35.8,-127.8);

	this.instance_9 = new lib.predpl2();
	this.instance_9.setTransform(48.1,-73,1,1,0,0,180);

	this.instance_10 = new lib.predpl1();
	this.instance_10.setTransform(-48.3,-72);

	this.instance_11 = new lib.palm2();
	this.instance_11.setTransform(64,-20.3,1,1,0,0,180);

	this.instance_12 = new lib.palm1();
	this.instance_12.setTransform(-64,-19.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.4,-189,164.8,378);
p.frameBounds = [rect];


(lib.ingridient16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoulder2();
	this.instance.setTransform(15.2,-55,1,1,0,0,180);

	this.instance_1 = new lib.shoulder1();
	this.instance_1.setTransform(-15.3,-53.3);

	this.instance_2 = new lib.predpl2();
	this.instance_2.setTransform(27.6,1.5,1,1,0,0,180);

	this.instance_3 = new lib.predpl1();
	this.instance_3.setTransform(-27.8,2.5);

	this.instance_4 = new lib.palm2();
	this.instance_4.setTransform(43.5,54.2,1,1,0,0,180);

	this.instance_5 = new lib.palm1();
	this.instance_5.setTransform(-43.5,55.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.9,-85.3,123.8,170.7);
p.frameBounds = [rect];


(lib.ingridient15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hip2();
	this.instance.setTransform(22,-63.7,1,1,0,0,180);

	this.instance_1 = new lib.hip1();
	this.instance_1.setTransform(-22.3,-63.7);

	this.instance_2 = new lib.leg_down2();
	this.instance_2.setTransform(27.4,18.6,1,1,0,0,180);

	this.instance_3 = new lib.leg_down1();
	this.instance_3.setTransform(-27.3,18.6);

	this.instance_4 = new lib.foot2();
	this.instance_4.setTransform(21.6,87.1,1,1,0,0,180);

	this.instance_5 = new lib.foot1();
	this.instance_5.setTransform(-21.2,87.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.5,-120.8,93.1,241.8);
p.frameBounds = [rect];


(lib.ingridient12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.foot1();
	this.instance.setTransform(-11.4,2.1,1,1,0,0,0,0.3,-0.1);

	this.instance_1 = new lib.foot2();
	this.instance_1.setTransform(11.6,-1.9,1,1,0,0,0,0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34,-36,68,72);
p.frameBounds = [rect];


(lib.ingridient11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.leg_down2();
	this.instance.setTransform(-20,0,1,1,0,0,180,-0.1,-0.1);

	this.instance_1 = new lib.leg_down1();
	this.instance_1.setTransform(20.1,0,1,1,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39,-48,78,96);
p.frameBounds = [rect];


(lib.ingridient10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hip2();
	this.instance.setTransform(23.5,0.1,1,1,0,0,180,-0.1,1.9);

	this.instance_1 = new lib.hip1();
	this.instance_1.setTransform(-23.4,0.1,1,1,0,0,0,-0.1,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44,-59,88,118);
p.frameBounds = [rect];


(lib.ingridient9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.battery();
	this.instance.setTransform(0.6,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.5,-49.5,97,99);
p.frameBounds = [rect];


(lib.ingridient6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.palm2();
	this.instance.setTransform(19.5,0,1,1,0,0,180,0.1,0.1);

	this.instance_1 = new lib.palm1();
	this.instance_1.setTransform(-19.5,0,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-30,76,60);
p.frameBounds = [rect];


(lib.ingridient5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.predpl2();
	this.instance.setTransform(-17.9,0,1,1,0,0,0,-0.2,-0.1);

	this.instance_1 = new lib.predpl1();
	this.instance_1.setTransform(18,0,1,1,0,0,180,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.9,-31.5,70,63);
p.frameBounds = [rect];


(lib.ingridient4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoulder1();
	this.instance.setTransform(-15.5,0,1,1,0,0,0,-0.1,1.2);

	this.instance_1 = new lib.shoulder2();
	this.instance_1.setTransform(15.6,0,1,1,0,0,180,-0.1,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-31.5,56,63);
p.frameBounds = [rect];


(lib.ingredient_23_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.horn();
	this.instance.setTransform(-20.5,19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlTGSIhehGIggjaIBvksIDqjBID2gwIFUDeIodJ5g");
	this.shape.setTransform(-20.2,19);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.8,-23.8,93.2,85.7);
p.frameBounds = [rect];


(lib.ingredient_22_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tentacle();
	this.instance.setTransform(0,0,0.653,0.654,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AklIGIhGuRIB/iKIB7gPICPBDIFCIrIAMDOIiTB+ImtCPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36.4,-55,72.9,110);
p.frameBounds = [rect];


(lib.ingredient_21_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.closes_all();
	this.instance.setTransform(-3.6,-11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokImIAAxLIRJAAIAARLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.ingredient_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ingridient20();
	this.instance.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkaWbIl03MIF+1uIIUAAIGLWBIloW+g");
	this.shape.setTransform(-0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.8,-144.1,131.1,288);
p.frameBounds = [rect];


(lib.ingredient_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ingridient16();
	this.instance.setTransform(0,50,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnaKSIgSiOIFSyeIE4AAIFPSbIgYCag");
	this.shape.setTransform(0.1,49.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.2,-17.6,98.6,133.5);
p.frameBounds = [rect];


(lib.ingredient_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ingridient15();
	this.instance.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOO2IAA9qIMdAAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-95,80,190);
p.frameBounds = [rect];


(lib.ingredient_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ingridient13();
	this.instance.setTransform(0,-6.4,1,1,0,0,0,-0.2,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("An6KYIBux5IC2lDIGAgBICrEoICnR+IlECfIlOAGg");
	this.shape.setTransform(-0.1,-7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.9,-87.6,101.6,161.3);
p.frameBounds = [rect];


(lib.ingredient_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ingridient12();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldGQIAAsfIK7AAIAAMfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-40,70,80);
p.frameBounds = [rect];


(lib.ingredient_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ingridient11();
	this.instance.setTransform(0,0,0.937,0.938);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOHzIAAvmIMdAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-50,80,100);
p.frameBounds = [rect];


(lib.ingredient_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ingridient10();
	this.instance.setTransform(0,0,0.847,0.847);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOIlIAAxJIMdAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-55,80,110);
p.frameBounds = [rect];


(lib.ingredient_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ingridient9();
	this.instance.setTransform(1.5,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmoGHIhcpEIEDjsIFehzIGaDxIAODKIhvFfInnEfg");
	this.shape.setTransform(1.2,42.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.5,-12,103.6,108.4);
p.frameBounds = [rect];


(lib.ingredient_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ingridient7();
	this.instance.setTransform(-7.5,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlaLDIjRvuICBnzIN0BwIBiGMIhEOIIhnCJIpaAwg");
	this.shape.setTransform(-6.6,26.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.2,-53.1,111.4,159.9);
p.frameBounds = [rect];


(lib.ingredient_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ingridient6();
	this.instance.setTransform(0,17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOFeIAAq7IMdAAIAAK7g");
	this.shape.setTransform(0,17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-18,80,70);
p.frameBounds = [rect];


(lib.ingredient_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ingridient5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOGQIAAsfIMdAAIAAMfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.ingredient_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ingridient4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqFdIAAq5IJVAAIAAK5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-35,60,70);
p.frameBounds = [rect];


(lib.ingredient_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ingridient2();
	this.instance.setTransform(0,-0.9,0.75,0.75,0,0,0,0,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGoQiwiwAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCwQivCvj4AAQj3AAiwivg");
	this.shape.setTransform(0,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-58.5,120,120);
p.frameBounds = [rect];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.crazy_professor_mc();
	this.instance.setTransform(515.4,335,1,1,0,0,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.smoke_3_mc();
	this.instance_1.setTransform(114,458.4,1,1,0,0,0,75,77.5);

	this.instance_2 = new lib.smoke_2_mc();
	this.instance_2.setTransform(302,245.5,1,1,0,0,0,75,77.5);

	this.instance_3 = new lib.smoke_1_mc();
	this.instance_3.setTransform(135,82.5,1,1,0,0,0,75,77.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// graph
	this.instance_4 = new lib.h01();
	this.instance_4.setTransform(215,310,0.929,0.929);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(60,-45,640.8,760);
p.frameBounds = [rect];


(lib.help_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.help_hand_mc();
	this.instance.setTransform(400,650);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({x:690,y:205,alpha:0.012},0).to({alpha:1},10).to({x:400,y:400},20).to({x:640,y:640,alpha:0.012},20).wait(1));

	// animation
	this.instance_1 = new lib.help_object_mc();
	this.instance_1.setTransform(400,650);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({x:690,y:205,alpha:0.012},0).to({alpha:0.602},10).wait(10).to({x:400,y:400},20).to({scaleX:0.5,scaleY:0.5,alpha:0.012},10).wait(11));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("EhdvAu3MAAAhdtMC7fAAAMAAABdtg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,844);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,0,1200,606), new cjs.Rectangle(-200,0,1200,618), new cjs.Rectangle(-200,0,1200,630), new cjs.Rectangle(-200,0,1200,642), new cjs.Rectangle(-200,0,1200,654), new cjs.Rectangle(-200,0,1200,666), new cjs.Rectangle(-200,0,1200,678), new cjs.Rectangle(-200,0,1200,690), new cjs.Rectangle(-200,0,1200,702), new cjs.Rectangle(-200,0,1200,714), new cjs.Rectangle(-200,0,1200,726), new cjs.Rectangle(-200,0,1200,738), new cjs.Rectangle(-200,0,1200,750), new cjs.Rectangle(-200,0,1200,762), new cjs.Rectangle(-200,0,1200,774), new cjs.Rectangle(-200,0,1200,786), new cjs.Rectangle(-200,0,1200,798), new cjs.Rectangle(-200,0,1200,810), new cjs.Rectangle(-200,0,1200,822), new cjs.Rectangle(-200,0,1200,834)];


(lib.heart3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.heart32();
	this.instance.setTransform(17.9,-30.5,1,1,0,0,0,17.9,-30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-30.6,rotation:22.5,x:18,y:-30.6},4).to({regY:-30.5,rotation:0,x:17.9,y:-30.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-17.9,-29.5,35.9,59.1);
p.frameBounds = [rect, new cjs.Rectangle(-23.5,-32.9,41.4,62.2), new cjs.Rectangle(-28.7,-36.4,46.6,64.8), new cjs.Rectangle(-33.7,-39.9,51.4,66.9), new cjs.Rectangle(-38.2,-43.2,55.8,68.3), new cjs.Rectangle(-34.5,-40.4,52.2,67.1), new cjs.Rectangle(-30.7,-37.7,48.5,65.7), new cjs.Rectangle(-26.7,-34.9,44.5,63.8), new cjs.Rectangle(-22.3,-32.1,40.2,61.6), new cjs.Rectangle(-17.9,-29.5,35.9,59.1)];


(lib.heart2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.heart22();
	this.instance.setTransform(24.3,22.4,1,1,0,0,0,24.3,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-9},4).to({rotation:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.8,-24.3,51.6,48.6);
p.frameBounds = [rect, new cjs.Rectangle(-27.4,-24.3,53.3,50.4), new cjs.Rectangle(-29.1,-24.2,55.1,52.3), new cjs.Rectangle(-30.7,-24.1,56.8,54.2), new cjs.Rectangle(-32.5,-24,58.6,56), new cjs.Rectangle(-31,-24.1,57.1,54.5), new cjs.Rectangle(-29.7,-24.3,55.8,53.1), new cjs.Rectangle(-28.4,-24.3,54.5,51.7), new cjs.Rectangle(-27.1,-24.3,53.1,50.2), new cjs.Rectangle(-25.8,-24.3,51.6,48.6)];


(lib.heart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.heart1_img();
	this.instance.setTransform(-61.8,-85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.heart3();
	this.instance_1.setTransform(44.1,82.4,1,1,0,0,180);

	this.instance_2 = new lib.heart2();
	this.instance_2.setTransform(63.3,21.4,1,1,0,0,180);

	this.instance_3 = new lib.heart3();
	this.instance_3.setTransform(-44.6,82.4);

	this.instance_4 = new lib.heart2();
	this.instance_4.setTransform(-63.8,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.6,-85.5,178.6,197.5);
p.frameBounds = [rect];


(lib.half_hair = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.flashing1();
	this.instance.setTransform(6.7,-32.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 5
	this.instance_1 = new lib.half_hair_img();
	this.instance_1.setTransform(-64.2,-56.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.2,-64.8,119,292.7);
p.frameBounds = [rect];


(lib.hairall2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.half_hair2();
	this.instance.setTransform(-93,-81,1,1,0,0,180);

	this.instance_1 = new lib.half_hair2();
	this.instance_1.setTransform(93,-81);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145.8,-137.1,291.6,284);
p.frameBounds = [rect];


(lib.hairall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.half_hair();
	this.instance.setTransform(-93,-81,1,1,0,0,180);

	this.instance_1 = new lib.half_hair();
	this.instance_1.setTransform(93,-81);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-147.7,-145.8,295.5,292.7);
p.frameBounds = [rect];


(lib.friend4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eye1_friend
	this.instance = new lib.eye2_friend();
	this.instance.setTransform(-23.6,-180.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// eye1_friend
	this.instance_1 = new lib.eye2_friend();
	this.instance_1.setTransform(52.4,-180.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// cherry
	this.instance_2 = new lib.fr2();
	this.instance_2.setTransform(-138.9,-279.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.9,-279.2,278,572);
p.frameBounds = [rect];


(lib.friend3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eye2_friend();
	this.instance.setTransform(-23.6,-180.3,1,1,0,0,180);

	this.instance_1 = new lib.eye2_friend();
	this.instance_1.setTransform(52.4,-180.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// cherry
	this.instance_2 = new lib.fr1();
	this.instance_2.setTransform(-138.9,-279.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.9,-279.2,278,572);
p.frameBounds = [rect];


(lib.friend1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eye1_friend
	this.instance = new lib.eye1_friend();
	this.instance.setTransform(-23.6,-180.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// eye1_friend
	this.instance_1 = new lib.eye1_friend();
	this.instance_1.setTransform(52.4,-180.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// cherry
	this.instance_2 = new lib.fr2();
	this.instance_2.setTransform(-138.9,-279.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-138.9,-279.2,278,572);
p.frameBounds = [rect];


(lib.eyes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eye2();
	this.instance.setTransform(-40.2,1,1,1,0,0,180);

	this.instance_1 = new lib.eye2();
	this.instance_1.setTransform(40.3,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.2,-23.1,152.5,47);
p.frameBounds = [rect];


(lib.eyes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eye1();
	this.instance.setTransform(-40.2,1,1,1,0,0,180);

	this.instance_1 = new lib.eye1();
	this.instance_1.setTransform(40.3,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.2,-23.1,152.5,47);
p.frameBounds = [rect];


(lib.electron_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_electron_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.88,scaleY:0.88,alpha:0.801},19).to({scaleX:1,scaleY:1,alpha:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16,-16,32,32);
p.frameBounds = [rect, new cjs.Rectangle(-15.8,-15.8,31.8,31.8), new cjs.Rectangle(-15.7,-15.7,31.6,31.6), new cjs.Rectangle(-15.6,-15.6,31.4,31.4), new cjs.Rectangle(-15.5,-15.5,31.2,31.2), new cjs.Rectangle(-15.4,-15.4,31,31), new cjs.Rectangle(-15.3,-15.3,30.8,30.8), new cjs.Rectangle(-15.2,-15.2,30.6,30.6), new cjs.Rectangle(-15.1,-15.1,30.3,30.3), new cjs.Rectangle(-15,-15,30.1,30.1), new cjs.Rectangle(-14.9,-14.9,29.9,29.9), new cjs.Rectangle(-14.8,-14.8,29.7,29.7), new cjs.Rectangle(-14.7,-14.7,29.5,29.5), new cjs.Rectangle(-14.6,-14.6,29.3,29.3), new cjs.Rectangle(-14.5,-14.5,29.1,29.1), new cjs.Rectangle(-14.4,-14.4,28.9,28.9), new cjs.Rectangle(-14.3,-14.3,28.7,28.7), new cjs.Rectangle(-14.2,-14.2,28.4,28.4), new cjs.Rectangle(-14.1,-14.1,28.2,28.2), new cjs.Rectangle(-14,-14,28,28), new cjs.Rectangle(-14,-14,28.2,28.2), new cjs.Rectangle(-14.1,-14.1,28.4,28.4), new cjs.Rectangle(-14.2,-14.2,28.6,28.6), new cjs.Rectangle(-14.3,-14.3,28.8,28.8), new cjs.Rectangle(-14.4,-14.4,29,29), new cjs.Rectangle(-14.5,-14.5,29.2,29.2), new cjs.Rectangle(-14.6,-14.6,29.4,29.4), new cjs.Rectangle(-14.7,-14.7,29.6,29.6), new cjs.Rectangle(-14.8,-14.8,29.8,29.8), new cjs.Rectangle(-14.9,-14.9,30,30), new cjs.Rectangle(-15,-15,30.2,30.2), new cjs.Rectangle(-15.1,-15.1,30.4,30.4), new cjs.Rectangle(-15.2,-15.2,30.6,30.6), new cjs.Rectangle(-15.3,-15.3,30.8,30.8), new cjs.Rectangle(-15.4,-15.4,31,31), new cjs.Rectangle(-15.5,-15.5,31.2,31.2), new cjs.Rectangle(-15.6,-15.6,31.4,31.4), new cjs.Rectangle(-15.7,-15.7,31.6,31.6), new cjs.Rectangle(-15.8,-15.8,31.8,31.8), new cjs.Rectangle(-16,-16,32,32)];


(lib.decor_progress_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.electron_mc();
	this.instance.setTransform(30,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:150},19).to({y:180},20).to({x:270},10).wait(1));

	// animation
	this.instance_1 = new lib.electron_mc();
	this.instance_1.setTransform(15,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:150},24).to({y:0},5).to({x:270},20).wait(1));

	// animation
	this.instance_2 = new lib.electron_mc();
	this.instance_2.setTransform(100,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:150},9).to({y:-180},10).to({x:270},30).wait(1));

	// animation
	this.instance_3 = new lib.electron_mc();
	this.instance_3.setTransform(-25,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-150},19).to({y:180},10).to({x:-270},20).wait(1));

	// animation
	this.instance_4 = new lib.electron_mc();
	this.instance_4.setTransform(-60,55);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-150},19).to({y:0},10).to({x:-270},20).wait(1));

	// animation
	this.instance_5 = new lib.electron_mc();
	this.instance_5.setTransform(-40,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-150},19).to({y:-180},10).to({x:-270},20).wait(1));

	// graph
	this.instance_6 = new lib.decor_progress_img();
	this.instance_6.setTransform(-300,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-200,600,400);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cronenberg3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cronenberg3_22();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.77},9).to({scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.5,-21.5,45,43);
p.frameBounds = [rect, new cjs.Rectangle(-22.5,-20.9,45,41.9), new cjs.Rectangle(-22.5,-20.3,45,40.8), new cjs.Rectangle(-22.5,-19.8,45,39.7), new cjs.Rectangle(-22.5,-19.2,45,38.6), new cjs.Rectangle(-22.5,-18.7,45,37.5), new cjs.Rectangle(-22.5,-18.1,45,36.3), new cjs.Rectangle(-22.5,-17.6,45,35.2), new cjs.Rectangle(-22.5,-17,45,34.1), new cjs.Rectangle(-22.5,-16.5,45,33), new cjs.Rectangle(-22.5,-16.9,45,34), new cjs.Rectangle(-22.5,-17.4,45,35), new cjs.Rectangle(-22.5,-17.9,45,36), new cjs.Rectangle(-22.5,-18.4,45,37), new cjs.Rectangle(-22.5,-18.9,45,38), new cjs.Rectangle(-22.5,-19.4,45,39), new cjs.Rectangle(-22.5,-19.9,45,40), new cjs.Rectangle(-22.5,-20.4,45,41), new cjs.Rectangle(-22.5,-20.9,45,42), new cjs.Rectangle(-22.5,-21.5,45,43)];


(lib.cronenberg3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.cronenberg3_3();
	this.instance.setTransform(-30.6,-63.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.cronenberg3_2();
	this.instance_1.setTransform(20,-27.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.cronenberg3_1_img();
	this.instance_2.setTransform(-82,-85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82,-85.5,164,171);
p.frameBounds = [rect];


(lib.cronenberg2_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cronenberg2_92();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-4},2).to({y:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-10.5,65,21);
p.frameBounds = [rect, new cjs.Rectangle(-32.5,-12.5,65,21), new cjs.Rectangle(-32.5,-14.5,65,21), new cjs.Rectangle(-32.5,-12.5,65,21), new cjs.Rectangle(-32.5,-10.5,65,21)];


(lib.cronenberg2_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cronenberg2_42();
	this.instance.setTransform(-23,30,1,1,0,0,0,-23,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:45},9).to({rotation:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-33.5,56,67);
p.frameBounds = [rect, new cjs.Rectangle(-28.3,-33.6,61.6,71.6), new cjs.Rectangle(-28.5,-33.3,66.8,75.7), new cjs.Rectangle(-28.7,-32.5,71.3,79), new cjs.Rectangle(-28.9,-31.3,75.3,82), new cjs.Rectangle(-29.1,-29.6,78.9,84.2), new cjs.Rectangle(-29.2,-27.4,81.8,85.9), new cjs.Rectangle(-29.3,-24.8,84.1,86.9), new cjs.Rectangle(-29.2,-21.7,85.8,87.2), new cjs.Rectangle(-29,-18.4,87,87), new cjs.Rectangle(-29.2,-21.4,86,87.2), new cjs.Rectangle(-29.2,-24.1,84.5,86.9), new cjs.Rectangle(-29.1,-26.6,82.6,86.2), new cjs.Rectangle(-29.1,-28.7,80.2,85), new cjs.Rectangle(-28.9,-30.5,77.2,83.2), new cjs.Rectangle(-28.8,-31.9,73.8,80.9), new cjs.Rectangle(-28.7,-32.9,70.1,78.2), new cjs.Rectangle(-28.4,-33.4,65.6,74.8), new cjs.Rectangle(-28.2,-33.6,61.1,71.2), new cjs.Rectangle(-28,-33.5,56,67)];


(lib.cronenberg2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cronenberg2_32();
	this.instance.setTransform(-17.5,-16.5,1,1,0,0,0,-17.5,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:30},9).to({rotation:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-17.5,-16.5,35,33);
p.frameBounds = [rect, new cjs.Rectangle(-19.4,-16.5,36.8,35), new cjs.Rectangle(-21.2,-16.5,38.5,36.8), new cjs.Rectangle(-23.1,-16.5,40.1,38.5), new cjs.Rectangle(-25.1,-16.5,41.7,40.2), new cjs.Rectangle(-26.9,-16.5,42.9,41.6), new cjs.Rectangle(-28.7,-16.5,44.1,42.9), new cjs.Rectangle(-30.5,-16.5,45.2,44.1), new cjs.Rectangle(-32.2,-16.5,46,45.1), new cjs.Rectangle(-34,-16.5,46.8,46.1), new cjs.Rectangle(-32.4,-16.4,46.1,45.2), new cjs.Rectangle(-30.8,-16.5,45.3,44.3), new cjs.Rectangle(-29.2,-16.5,44.4,43.3), new cjs.Rectangle(-27.5,-16.5,43.4,42.1), new cjs.Rectangle(-25.9,-16.5,42.3,40.8), new cjs.Rectangle(-24.2,-16.5,41,39.5), new cjs.Rectangle(-22.5,-16.5,39.6,38), new cjs.Rectangle(-20.8,-16.5,38.2,36.4), new cjs.Rectangle(-19.2,-16.5,36.7,34.8), new cjs.Rectangle(-17.5,-16.5,35,33)];


(lib.cronenberg2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cronenberg2_22();
	this.instance.setTransform(-23.5,0,1,1,0,0,0,-26.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.01,skewY:-9.6},8).to({scaleX:1,skewY:0},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23.5,-27,53,54);
p.frameBounds = [rect, new cjs.Rectangle(-23.5,-27.9,53.1,55), new cjs.Rectangle(-23.5,-29,53.2,56.1), new cjs.Rectangle(-23.5,-30.2,53.2,57.3), new cjs.Rectangle(-23.5,-31.4,53.2,58.5), new cjs.Rectangle(-23.5,-32.5,53.2,59.6), new cjs.Rectangle(-23.5,-33.5,53.2,60.6), new cjs.Rectangle(-23.5,-34.6,53.1,61.8), new cjs.Rectangle(-23.5,-36,53,63), new cjs.Rectangle(-23.5,-34.6,53.1,61.7), new cjs.Rectangle(-23.5,-33.2,53.2,60.3), new cjs.Rectangle(-23.5,-32,53.2,59.1), new cjs.Rectangle(-23.5,-30.7,53.2,57.8), new cjs.Rectangle(-23.5,-29.5,53.2,56.6), new cjs.Rectangle(-23.5,-28.2,53.1,55.2), new cjs.Rectangle(-23.5,-27,53,54)];


(lib.cronenberg2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.cronenberg2_9();
	this.instance.setTransform(6.4,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 5
	this.instance_1 = new lib.cronenberg2_6();
	this.instance_1.setTransform(6.4,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 4
	this.instance_2 = new lib.cronenberg2_5_img();
	this.instance_2.setTransform(-25.5,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.instance_3 = new lib.cronenberg2_1_img();
	this.instance_3.setTransform(-60,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 3
	this.instance_4 = new lib.cronenberg2_4();
	this.instance_4.setTransform(-60.1,2.4,1,1,0,0,180);

	this.instance_5 = new lib.cronenberg2_3();
	this.instance_5.setTransform(-33.1,83,1,1,0,0,180);

	this.instance_6 = new lib.cronenberg2_4();
	this.instance_6.setTransform(72.4,2.4);

	this.instance_7 = new lib.cronenberg2_3();
	this.instance_7.setTransform(45.4,83);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// Слой 2
	this.instance_8 = new lib.cronenberg2_2();
	this.instance_8.setTransform(-23.1,-4,1,1,0,0,180,-26.5,0);

	this.instance_9 = new lib.cronenberg2_2();
	this.instance_9.setTransform(36.9,-4,1,1,0,0,0,-26.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88.1,-80,188.5,179.5);
p.frameBounds = [rect];


(lib.cronenberg1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cronenberg1_51();
	this.instance.setTransform(0,-25,1,1,0,0,0,0,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:30},9).to({rotation:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19,-25,38,50);
p.frameBounds = [rect, new cjs.Rectangle(-21.7,-26,40.8,52.1), new cjs.Rectangle(-24.5,-27.1,43.5,54), new cjs.Rectangle(-27.2,-28.2,45.9,55.8), new cjs.Rectangle(-29.9,-29.3,48.5,57.4), new cjs.Rectangle(-32.4,-30.4,50.7,58.7), new cjs.Rectangle(-34.7,-31.4,52.7,59.9), new cjs.Rectangle(-37.1,-32.5,54.6,60.9), new cjs.Rectangle(-39.2,-33.5,56.3,61.7), new cjs.Rectangle(-41.4,-34.5,57.9,62.3), new cjs.Rectangle(-39.4,-33.5,56.4,61.7), new cjs.Rectangle(-37.5,-32.6,54.9,61.1), new cjs.Rectangle(-35.5,-31.7,53.2,60.2), new cjs.Rectangle(-33.3,-30.7,51.5,59.2), new cjs.Rectangle(-31.1,-29.8,49.5,58), new cjs.Rectangle(-28.8,-28.8,47.4,56.7), new cjs.Rectangle(-26.4,-27.9,45.2,55.2), new cjs.Rectangle(-23.9,-26.9,42.8,53.6), new cjs.Rectangle(-21.6,-26,40.6,51.9), new cjs.Rectangle(-19,-25,38,50)];


(lib.cronenberg1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cronenberg1_41();
	this.instance.setTransform(23.5,-30,1,1,0,0,0,23.5,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-30.1,rotation:-15},9).to({regY:-30,rotation:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23.5,-30,47,60);
p.frameBounds = [rect, new cjs.Rectangle(-23.4,-30,48.6,61.2), new cjs.Rectangle(-23.3,-30,50.3,62.6), new cjs.Rectangle(-23.2,-30,51.9,63.7), new cjs.Rectangle(-23.1,-30,53.6,65), new cjs.Rectangle(-23,-29.9,55.2,66.1), new cjs.Rectangle(-22.8,-30,56.6,67.1), new cjs.Rectangle(-22.5,-30,58,68.2), new cjs.Rectangle(-22.2,-30,59.5,69.2), new cjs.Rectangle(-21.9,-30,60.9,70.2), new cjs.Rectangle(-22.2,-29.9,59.5,69.2), new cjs.Rectangle(-22.4,-29.9,58.3,68.3), new cjs.Rectangle(-22.6,-29.9,57,67.4), new cjs.Rectangle(-22.9,-29.9,55.6,66.5), new cjs.Rectangle(-23,-30,54.3,65.5), new cjs.Rectangle(-23.2,-29.9,52.9,64.4), new cjs.Rectangle(-23.2,-29.9,51.4,63.4), new cjs.Rectangle(-23.3,-29.9,49.9,62.2), new cjs.Rectangle(-23.4,-30,48.3,61.1), new cjs.Rectangle(-23.5,-30,47,60)];


(lib.cronenberg1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cronenberg1_21();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.86},7).to({scaleY:1},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-48.5,92,97);
p.frameBounds = [rect, new cjs.Rectangle(-46,-47.5,92,95), new cjs.Rectangle(-46,-46.4,92,93), new cjs.Rectangle(-46,-45.4,92,91), new cjs.Rectangle(-46,-44.5,92,89), new cjs.Rectangle(-46,-43.5,92,87), new cjs.Rectangle(-46,-42.4,92,85), new cjs.Rectangle(-46,-41.5,92,83), new cjs.Rectangle(-46,-42.4,92,85), new cjs.Rectangle(-46,-43.4,92,87), new cjs.Rectangle(-46,-44.4,92,89), new cjs.Rectangle(-46,-45.4,92,91), new cjs.Rectangle(-46,-46.4,92,93), new cjs.Rectangle(-46,-47.4,92,95), new cjs.Rectangle(-46,-48.5,92,97)];


(lib.cronenberg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.cronenberg1_2();
	this.instance.setTransform(-1,47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.cronenberg1_3();
	this.instance_1.setTransform(0,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.cronenberg1_1();
	this.instance_2.setTransform(-4,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 4
	this.instance_3 = new lib.cronenberg1_4();
	this.instance_3.setTransform(49.4,9,1,1,-75,0,0,21.8,-30.7);

	this.instance_4 = new lib.cronenberg1_5();
	this.instance_4.setTransform(29.9,66,1,1,0,0,180,4,-20.9);

	this.instance_5 = new lib.cronenberg1_4();
	this.instance_5.setTransform(-55,9,1,1,0,75,-105,21.8,-30.7);

	this.instance_6 = new lib.cronenberg1_5();
	this.instance_6.setTransform(-35.5,66,1,1,0,0,0,4,-20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.1,-109,222.6,220.9);
p.frameBounds = [rect];


(lib.comics_part3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_89 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

	// graph
	this.instance = new lib.smoke_4_mc();
	this.instance.setTransform(99.2,-86,1,1,0,0,0,75,77.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37).to({_off:false},0).wait(53));

	// graph
	this.instance_1 = new lib.smoke_4_mc();
	this.instance_1.setTransform(-76,12.4,1,1,0,0,0,75,77.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({_off:false},0).wait(62));

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,0,3).p("EAVjApFI9lAAMgNchSJMArBAAAg");
	this.shape.setTransform(-0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgIEApFMgNchSJMArBAAAMAAABSJg");

	// animation
	this.instance_2 = new lib.colba1();
	this.instance_2.setTransform(94,-86,0.462,0.462);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(37).to({_off:false},0).to({scaleX:1,scaleY:1,y:-67,alpha:1},5).to({scaleX:1.21,scaleY:1.21},2).to({scaleX:1,scaleY:1},2).wait(44));

	// animation
	this.instance_3 = new lib.colba2();
	this.instance_3.setTransform(-80,4.4,0.417,0.417);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(28).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},5).to({scaleX:1.21,scaleY:1.21},2).to({scaleX:1,scaleY:1},2).wait(53));

	// animation
	this.instance_4 = new lib.friend2();
	this.instance_4.setTransform(-262,23.7);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:35},19).wait(71));

	// graph
	this.instance_5 = new lib.back_part2_img();
	this.instance_5.setTransform(-205.1,-320);

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140.6,-265.4,281,531);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-151,-265.4,291.3,531), rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-151,-265.4,325.2,531), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.comics_part2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,0,3).p("EAeIApFMg8PAAAMANchSJMAhXAAAg");
	this.shape.setTransform(-0.2,0,1,1,0,0,0,-0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgeHApFMANchSJMAhXAAAMANcBSJg");

	// graph
	this.instance = new lib.friend1();
	this.instance.setTransform(-14,122.7);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.back_part1_img();
	this.instance_1.setTransform(-215.5,-266);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195.7,-265.4,391.6,531);
p.frameBounds = [rect];


(lib.comics_part1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,0,3).p("EAIBApFI9iAAMAAAhSJMAq+AAAg");
	this.shape.setTransform(0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgVfApFMAAAhSJMAq/AAAMgNdBSJg");

	// graph
	this.instance = new lib.friend3();
	this.instance.setTransform(-43,20.7);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.back_part1_img();
	this.instance_1.setTransform(-162.5,-334);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140.1,-265.4,280.6,531);
p.frameBounds = [rect];


(lib.colba21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.colb2();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:15},12).to({rotation:0},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36.9,-35.9,66.6,77.9);
p.frameBounds = [rect, new cjs.Rectangle(-37.4,-36.2,67.6,78.5), new cjs.Rectangle(-38,-36.6,68.7,79.1), new cjs.Rectangle(-38.5,-37,69.7,79.8), new cjs.Rectangle(-39.1,-37.4,70.7,80.3), new cjs.Rectangle(-39.6,-37.7,71.7,80.8), new cjs.Rectangle(-40.2,-38,72.6,81.3), new cjs.Rectangle(-40.7,-38.3,73.5,81.8), new cjs.Rectangle(-41.2,-38.6,74.4,82.2), new cjs.Rectangle(-41.6,-38.9,75.2,82.6), new cjs.Rectangle(-42.1,-39.2,76.1,82.9), new cjs.Rectangle(-42.5,-39.4,76.8,83.2), new cjs.Rectangle(-46.5,-44.2,84.5,92.5), new cjs.Rectangle(-42.5,-39.4,76.8,83.2), new cjs.Rectangle(-42.1,-39.2,76.1,82.9), new cjs.Rectangle(-41.6,-38.9,75.2,82.6), new cjs.Rectangle(-41.2,-38.6,74.4,82.2), new cjs.Rectangle(-40.7,-38.3,73.5,81.8), new cjs.Rectangle(-40.2,-38,72.6,81.3), new cjs.Rectangle(-39.6,-37.7,71.6,80.8), new cjs.Rectangle(-39.1,-37.4,70.7,80.3), new cjs.Rectangle(-38.5,-37,69.7,79.8), new cjs.Rectangle(-38,-36.6,68.7,79.1), new cjs.Rectangle(-37.4,-36.2,67.6,78.5), new cjs.Rectangle(-36.9,-35.9,66.6,77.9)];


(lib.colba11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.colb1();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:15},14).to({rotation:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.4,-49.6,88.4,96.1);
p.frameBounds = [rect, new cjs.Rectangle(-43,-49.5,87.7,95.9), new cjs.Rectangle(-42.6,-49.3,86.9,95.6), new cjs.Rectangle(-42.2,-49.2,86.2,95.3), new cjs.Rectangle(-41.7,-49,85.2,95), new cjs.Rectangle(-41.3,-48.8,84.4,94.7), new cjs.Rectangle(-40.8,-48.6,83.5,94.3), new cjs.Rectangle(-40.3,-48.4,82.6,93.9), new cjs.Rectangle(-39.8,-48.1,81.6,93.4), new cjs.Rectangle(-39.3,-47.9,80.7,92.9), new cjs.Rectangle(-38.8,-47.6,79.7,92.4), new cjs.Rectangle(-38.2,-47.3,78.5,91.9), new cjs.Rectangle(-37.6,-47,77.4,91.3), new cjs.Rectangle(-37.1,-46.7,76.5,90.8), new cjs.Rectangle(-53.9,-59.2,110.2,115.7), new cjs.Rectangle(-37.1,-46.7,76.4,90.7), new cjs.Rectangle(-37.6,-47,77.4,91.3), new cjs.Rectangle(-38.1,-47.3,78.4,91.8), new cjs.Rectangle(-38.6,-47.6,79.4,92.3), new cjs.Rectangle(-39.1,-47.8,80.4,92.8), new cjs.Rectangle(-39.6,-48.1,81.3,93.3), new cjs.Rectangle(-40.1,-48.3,82.2,93.7), new cjs.Rectangle(-40.6,-48.5,83.1,94.1), new cjs.Rectangle(-41,-48.7,83.9,94.5), new cjs.Rectangle(-41.5,-48.9,84.8,94.8), new cjs.Rectangle(-41.9,-49.1,85.6,95.2), new cjs.Rectangle(-42.3,-49.3,86.4,95.4), new cjs.Rectangle(-42.7,-49.4,87.1,95.7), new cjs.Rectangle(-43.1,-49.5,87.8,95.9), new cjs.Rectangle(-43.4,-49.6,88.4,96.1)];


(lib.cartoon_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.colba2();
	this.instance.setTransform(45,-170.6,0.661,0.661,30);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},6).to({scaleX:1.21,scaleY:1.21},2).to({scaleX:1,scaleY:1},2).to({rotation:45},10).to({rotation:30},11).to({rotation:15},9).to({scaleX:0.66,scaleY:0.66,rotation:30,alpha:0.012},7).to({_off:true},1).wait(46));

	// animation
	this.instance_1 = new lib.colba1();
	this.instance_1.setTransform(-67.5,-174.9,0.637,0.637,-30);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},6).to({scaleX:1.14,scaleY:1.14},2).to({scaleX:1,scaleY:1},2).to({rotation:-15},9).to({rotation:-45},9).to({rotation:-30},10).to({rotation:-15},9).to({rotation:-30},10).to({scaleX:0.64,scaleY:0.64,alpha:0.012},6).to({_off:true},1).wait(35));

	// animation
	this.instance_2 = new lib.cutefrankenstein();
	this.instance_2.setTransform(-9,-221.5,0.78,0.78);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(26).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},6).to({scaleX:1.12,scaleY:1.12},2).to({scaleX:1,scaleY:1},2).wait(57).to({scaleX:0.78,scaleY:0.78,alpha:0.012},5).to({_off:true},1).wait(30));

	// animation
	this.instance_3 = new lib.com_text2();
	this.instance_3.setTransform(-25.7,-205,0.601,0.601);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.instance_4 = new lib.lamp_idea2();
	this.instance_4.setTransform(-5.7,-205.6);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},7).wait(72).to({scaleX:0.2,scaleY:0.2,x:-5.7,alpha:0.012},7).to({_off:true},1).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(108).to({_off:false},0).to({alpha:1},20).wait(1));

	// graph
	this.instance_5 = new lib.com_text1();
	this.instance_5.setTransform(-260.5,157.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(129));

	// graph
	this.instance_6 = new lib.comics_part1();
	this.instance_6.setTransform(-252.4,0,1,1,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(129));

	// animation
	this.instance_7 = new lib.comics_part2();
	this.instance_7.setTransform(-0.2,324);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:0,alpha:1},19).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-434.6,-334,647.9,1073.4);
p.frameBounds = [rect, new cjs.Rectangle(-434.6,-334,630.2,906.4), new cjs.Rectangle(-434.6,-334,630.2,889.4), new cjs.Rectangle(-434.6,-334,630.2,872.3), new cjs.Rectangle(-434.6,-334,630.2,855.3), new cjs.Rectangle(-434.6,-334,630.2,838.2), new cjs.Rectangle(-434.6,-334,630.2,821.2), new cjs.Rectangle(-434.6,-334,630.2,804.1), new cjs.Rectangle(-434.6,-334,630.2,787.1), new cjs.Rectangle(-434.6,-334,630.2,770), new cjs.Rectangle(-434.6,-334,630.2,753), new cjs.Rectangle(-434.6,-334,630.2,735.9), new cjs.Rectangle(-434.6,-334,630.2,718.9), new cjs.Rectangle(-434.6,-334,630.2,701.8), new cjs.Rectangle(-434.6,-334,630.2,684.8), new cjs.Rectangle(-434.6,-334,630.2,667.7), new cjs.Rectangle(-434.6,-334,630.2,650.7), rect=new cjs.Rectangle(-434.6,-334,630.2,647.5), rect, rect=new cjs.Rectangle(-434.6,-334,647.9,749.5), rect, rect, rect, rect, rect, new cjs.Rectangle(-434.6,-342.2,647.9,757.7), rect=new cjs.Rectangle(-434.6,-350.5,647.9,766), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-434.6,-334,647.9,749.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cartoon_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.com_text1();
	this.instance.setTransform(-260.5,69.3);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).to({y:157.3,alpha:1},12).wait(19));

	// animation
	this.instance_1 = new lib.comics_part1();
	this.instance_1.setTransform(-799.8,0,1,1,0,0,0,0.2,0);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({x:-659.8},0).to({x:-252.4,alpha:1},23).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-981.9,-334,448.5,647.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-841.9,-334,448.5,647.5), new cjs.Rectangle(-782.4,-265.4,280.7,531), new cjs.Rectangle(-764.7,-265.4,280.7,531), new cjs.Rectangle(-746.9,-265.4,280.7,531), new cjs.Rectangle(-729.2,-265.4,280.7,531), new cjs.Rectangle(-711.5,-265.4,280.7,531), new cjs.Rectangle(-693.8,-265.4,280.7,531), new cjs.Rectangle(-676.1,-265.4,280.7,531), new cjs.Rectangle(-658.4,-265.4,280.7,531), new cjs.Rectangle(-640.7,-265.4,280.7,531), new cjs.Rectangle(-623,-265.4,280.7,531), new cjs.Rectangle(-605.3,-265.4,280.7,531), new cjs.Rectangle(-587.5,-265.4,280.7,531), new cjs.Rectangle(-569.8,-265.4,280.7,531), new cjs.Rectangle(-552.1,-265.4,280.7,531), new cjs.Rectangle(-534.4,-265.4,280.7,531), new cjs.Rectangle(-516.7,-265.4,280.7,531), new cjs.Rectangle(-499,-265.4,280.7,531), new cjs.Rectangle(-481.3,-265.4,280.7,531), new cjs.Rectangle(-463.6,-265.4,280.7,531), new cjs.Rectangle(-445.9,-265.4,280.7,531), new cjs.Rectangle(-428.1,-265.4,280.7,531), new cjs.Rectangle(-410.4,-265.4,280.7,531), rect=new cjs.Rectangle(-434.6,-334,448.5,647.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.bubble2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bubble1();
	this.instance.setTransform(0,6.5,0.478,0.478);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:-17,y:-41},24).to({scaleX:1.39,scaleY:1.39,x:6.5,y:-104,alpha:0.012},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5.5,1,11,11);
p.frameBounds = [rect, new cjs.Rectangle(-6.4,-1.2,11.5,11.5), new cjs.Rectangle(-7.3,-3.4,12,12), new cjs.Rectangle(-8.3,-5.6,12.5,12.5), new cjs.Rectangle(-9.3,-7.8,13,13), new cjs.Rectangle(-10.2,-10,13.5,13.5), new cjs.Rectangle(-11.2,-12.2,14,14), new cjs.Rectangle(-12.1,-14.5,14.5,14.5), new cjs.Rectangle(-13.1,-16.7,15,15), new cjs.Rectangle(-14,-18.9,15.5,15.5), new cjs.Rectangle(-15,-21.2,16,16), new cjs.Rectangle(-16,-23.4,16.5,16.5), new cjs.Rectangle(-16.9,-25.7,17,17), new cjs.Rectangle(-17.9,-27.9,17.5,17.5), new cjs.Rectangle(-18.8,-30.1,18,18), new cjs.Rectangle(-19.8,-32.3,18.5,18.5), new cjs.Rectangle(-20.8,-34.5,19,19), new cjs.Rectangle(-21.7,-36.8,19.5,19.5), new cjs.Rectangle(-22.7,-39,20,20), new cjs.Rectangle(-23.6,-41.2,20.5,20.5), new cjs.Rectangle(-24.6,-43.5,21,21), new cjs.Rectangle(-25.5,-45.7,21.5,21.5), new cjs.Rectangle(-26.5,-47.9,22,22), new cjs.Rectangle(-27.5,-50.2,22.5,22.5), new cjs.Rectangle(-28.5,-52.5,23,23), new cjs.Rectangle(-27.7,-55.1,23.4,23.3), new cjs.Rectangle(-26.9,-57.9,23.7,23.7), new cjs.Rectangle(-26.2,-60.5,24.1,24.1), new cjs.Rectangle(-25.4,-63.3,24.5,24.4), new cjs.Rectangle(-24.7,-66,24.8,24.8), new cjs.Rectangle(-23.9,-68.6,25.2,25.2), new cjs.Rectangle(-23.1,-71.4,25.5,25.5), new cjs.Rectangle(-22.4,-74,25.9,25.9), new cjs.Rectangle(-21.6,-76.8,26.3,26.3), new cjs.Rectangle(-20.8,-79.4,26.6,26.6), new cjs.Rectangle(-20.1,-82.1,27,27), new cjs.Rectangle(-19.3,-84.9,27.3,27.3), new cjs.Rectangle(-18.6,-87.5,27.7,27.7), new cjs.Rectangle(-17.8,-90.3,28.1,28.1), new cjs.Rectangle(-17.1,-93,28.4,28.4), new cjs.Rectangle(-16.3,-95.6,28.8,28.8), new cjs.Rectangle(-15.5,-98.4,29.1,29.1), new cjs.Rectangle(-14.8,-101,29.5,29.5), new cjs.Rectangle(-14.1,-103.8,29.9,29.8), new cjs.Rectangle(-13.3,-106.4,30.2,30.2), new cjs.Rectangle(-12.5,-109.1,30.6,30.6), new cjs.Rectangle(-11.8,-111.9,30.9,30.9), new cjs.Rectangle(-11,-114.5,31.3,31.3), new cjs.Rectangle(-10.3,-117.3,31.7,31.6), new cjs.Rectangle(-9.5,-120,32,32)];


(lib.brain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.brain11();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:14},29).to({y:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52,-37.2,104,74.4);
p.frameBounds = [rect, new cjs.Rectangle(-52,-36.7,104,74.4), new cjs.Rectangle(-52,-36.2,104,74.4), new cjs.Rectangle(-52,-35.7,104,74.4), new cjs.Rectangle(-52,-35.2,104,74.4), new cjs.Rectangle(-52,-34.8,104,74.4), new cjs.Rectangle(-52,-34.3,104,74.4), new cjs.Rectangle(-52,-33.8,104,74.4), new cjs.Rectangle(-52,-33.3,104,74.4), new cjs.Rectangle(-52,-32.8,104,74.4), new cjs.Rectangle(-52,-32.3,104,74.4), new cjs.Rectangle(-52,-31.9,104,74.4), new cjs.Rectangle(-52,-31.4,104,74.4), new cjs.Rectangle(-52,-30.9,104,74.4), new cjs.Rectangle(-52,-30.4,104,74.4), new cjs.Rectangle(-52,-29.9,104,74.4), new cjs.Rectangle(-52,-29.5,104,74.4), new cjs.Rectangle(-52,-29,104,74.4), new cjs.Rectangle(-52,-28.5,104,74.4), new cjs.Rectangle(-52,-28,104,74.4), new cjs.Rectangle(-52,-27.5,104,74.4), new cjs.Rectangle(-52,-27,104,74.4), new cjs.Rectangle(-52,-26.6,104,74.4), new cjs.Rectangle(-52,-26.1,104,74.4), new cjs.Rectangle(-52,-25.6,104,74.4), new cjs.Rectangle(-52,-25.1,104,74.4), new cjs.Rectangle(-52,-24.6,104,74.4), new cjs.Rectangle(-52,-24.1,104,74.4), new cjs.Rectangle(-52,-23.7,104,74.4), new cjs.Rectangle(-52,-23.2,104,74.4), new cjs.Rectangle(-52,-23.6,104,74.4), new cjs.Rectangle(-52,-24.1,104,74.4), new cjs.Rectangle(-52,-24.6,104,74.4), new cjs.Rectangle(-52,-25,104,74.4), new cjs.Rectangle(-52,-25.5,104,74.4), new cjs.Rectangle(-52,-26,104,74.4), new cjs.Rectangle(-52,-26.4,104,74.4), new cjs.Rectangle(-52,-26.9,104,74.4), new cjs.Rectangle(-52,-27.4,104,74.4), new cjs.Rectangle(-52,-27.8,104,74.4), new cjs.Rectangle(-52,-28.3,104,74.4), new cjs.Rectangle(-52,-28.8,104,74.4), new cjs.Rectangle(-52,-29.2,104,74.4), new cjs.Rectangle(-52,-29.7,104,74.4), new cjs.Rectangle(-52,-30.2,104,74.4), new cjs.Rectangle(-52,-30.6,104,74.4), new cjs.Rectangle(-52,-31.1,104,74.4), new cjs.Rectangle(-52,-31.6,104,74.4), new cjs.Rectangle(-52,-32,104,74.4), new cjs.Rectangle(-52,-32.5,104,74.4), new cjs.Rectangle(-52,-33,104,74.4), new cjs.Rectangle(-52,-33.4,104,74.4), new cjs.Rectangle(-52,-33.9,104,74.4), new cjs.Rectangle(-52,-34.4,104,74.4), new cjs.Rectangle(-52,-34.8,104,74.4), new cjs.Rectangle(-52,-35.3,104,74.4), new cjs.Rectangle(-52,-35.8,104,74.4), new cjs.Rectangle(-52,-36.2,104,74.4), new cjs.Rectangle(-52,-36.7,104,74.4), new cjs.Rectangle(-52,-37.2,104,74.4)];


(lib.bg_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.bg_title_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:20},29).to({rotation:-2},5).to({rotation:2},10).to({rotation:0},5).to({y:0},30).wait(1));

	// animation
	this.instance_1 = new lib.bg_title_2_mc();
	this.instance_1.setTransform(0,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:10},29).to({rotation:-2},5).to({rotation:2,x:0.1},10).to({rotation:0,x:0},5).to({y:-10},30).wait(1));

	// graph
	this.instance_2 = new lib.bg_title_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-205,390,400);
p.frameBounds = [rect, new cjs.Rectangle(-195,-204.3,390,400), new cjs.Rectangle(-195,-203.6,390,400), new cjs.Rectangle(-195,-202.9,390,400), new cjs.Rectangle(-195,-202.2,390,400), new cjs.Rectangle(-195,-201.5,390,400), new cjs.Rectangle(-195,-200.8,390,400), new cjs.Rectangle(-195,-200.1,390,400), new cjs.Rectangle(-195,-199.5,390,400), new cjs.Rectangle(-195,-198.8,390,400), new cjs.Rectangle(-195,-198.1,390,400), new cjs.Rectangle(-195,-197.4,390,400), new cjs.Rectangle(-195,-196.7,390,400), new cjs.Rectangle(-195,-196,390,400), new cjs.Rectangle(-195,-195.3,390,400), new cjs.Rectangle(-195,-195,390,400.4), new cjs.Rectangle(-195,-195,390,401.1), new cjs.Rectangle(-195,-195,390,401.7), new cjs.Rectangle(-195,-195,390,402.4), new cjs.Rectangle(-195,-195,390,403.1), new cjs.Rectangle(-195,-195,390,403.8), new cjs.Rectangle(-195,-195,390,404.5), new cjs.Rectangle(-195,-195,390,405.2), new cjs.Rectangle(-195,-195,390,405.9), new cjs.Rectangle(-195,-195,390,406.6), new cjs.Rectangle(-195,-195,390,407.3), new cjs.Rectangle(-195,-195,390,408), new cjs.Rectangle(-195,-195,390,408.6), new cjs.Rectangle(-195,-195,390,409.3), new cjs.Rectangle(-195,-195,390,410), new cjs.Rectangle(-195.9,-195,392,411), new cjs.Rectangle(-197.5,-195,395.2,412.6), new cjs.Rectangle(-198.5,-195,397.1,413.6), new cjs.Rectangle(-200.1,-195,400.3,415.2), new cjs.Rectangle(-201.7,-195,403.5,416.7), new cjs.Rectangle(-200.1,-195,400.3,415.1), new cjs.Rectangle(-198.5,-195,397.1,413.5), new cjs.Rectangle(-197.6,-195,395.2,412.6), new cjs.Rectangle(-196,-195,392,411), new cjs.Rectangle(-195,-195,390,410), new cjs.Rectangle(-195.9,-195,392,411), new cjs.Rectangle(-197.6,-195,395.2,412.6), new cjs.Rectangle(-198.6,-195,397.1,413.6), new cjs.Rectangle(-200.1,-195,400.3,415.2), new cjs.Rectangle(-201.7,-195,403.5,416.7), new cjs.Rectangle(-200.1,-195,400.3,415.1), new cjs.Rectangle(-198.5,-195,397.1,413.5), new cjs.Rectangle(-197.5,-195,395.2,412.5), new cjs.Rectangle(-195.9,-195,392,410.9), new cjs.Rectangle(-195,-195,390,410), new cjs.Rectangle(-195,-195,390,409.4), new cjs.Rectangle(-195,-195,390,408.7), new cjs.Rectangle(-195,-195,390,408), new cjs.Rectangle(-195,-195,390,407.4), new cjs.Rectangle(-195,-195,390,406.7), new cjs.Rectangle(-195,-195,390,406), new cjs.Rectangle(-195,-195,390,405.4), new cjs.Rectangle(-195,-195,390,404.7), new cjs.Rectangle(-195,-195,390,404), new cjs.Rectangle(-195,-195,390,403.4), new cjs.Rectangle(-195,-195,390,402.7), new cjs.Rectangle(-195,-195,390,402), new cjs.Rectangle(-195,-195,390,401.4), new cjs.Rectangle(-195,-195,390,400.7), new cjs.Rectangle(-195,-195,390,400), new cjs.Rectangle(-195,-195.6,390,400), new cjs.Rectangle(-195,-196.3,390,400), new cjs.Rectangle(-195,-197,390,400), new cjs.Rectangle(-195,-197.6,390,400), new cjs.Rectangle(-195,-198.3,390,400), new cjs.Rectangle(-195,-199,390,400), new cjs.Rectangle(-195,-199.6,390,400), new cjs.Rectangle(-195,-200.3,390,400), new cjs.Rectangle(-195,-201,390,400), new cjs.Rectangle(-195,-201.6,390,400), new cjs.Rectangle(-195,-202.3,390,400), new cjs.Rectangle(-195,-203,390,400), new cjs.Rectangle(-195,-203.6,390,400), new cjs.Rectangle(-195,-204.3,390,400), new cjs.Rectangle(-195,-205,390,400)];


(lib.bg_alchemy_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shelf_mc();
	this.instance.setTransform(715,390,1,1,0,0,180);

	this.instance_1 = new lib.shelf_mc();
	this.instance_1.setTransform(715,200,1,1,0,0,180);

	this.instance_2 = new lib.shelf_mc();
	this.instance_2.setTransform(85,390);

	this.instance_3 = new lib.shelf_mc();
	this.instance_3.setTransform(85,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_4 = new lib.bak1();
	this.instance_4.setTransform(381,304.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.background_3_img();
	this.instance_5.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.animation_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_mc();
	this.instance.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_title_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-205,390,400);
p.frameBounds = [rect];


(lib.animation_achievement_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// animation
	this.instance = new lib.title_achievement_mc();
	this.instance.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({y:-400.5},0).to({y:49.5,alpha:1},12).to({y:-0.5},3).wait(40).to({y:-50.5,alpha:0.871},2).to({y:399.5,alpha:0.012},13).wait(1));

	// animation
	this.instance_1 = new lib.shadow_achievement_mc();
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({alpha:0.398},15).wait(40).to({alpha:0.012},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-300,1200,600);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-600,-488,1200,788), new cjs.Rectangle(-600,-450.5,1200,750.5), new cjs.Rectangle(-600,-413,1200,713), new cjs.Rectangle(-600,-375.5,1200,675.5), new cjs.Rectangle(-600,-338,1200,638), new cjs.Rectangle(-600,-300.5,1200,600.5), rect=new cjs.Rectangle(-600,-300,1200,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-600,-300,1200,613.9), new cjs.Rectangle(-600,-300,1200,648.6), new cjs.Rectangle(-600,-300,1200,683.2), new cjs.Rectangle(-600,-300,1200,717.8), new cjs.Rectangle(-600,-300,1200,752.4), new cjs.Rectangle(-600,-300,1200,787)];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:22,end:59});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// logo
	this.instance = new lib.curtain_4_mc();
	this.instance.setTransform(600.1,300.1,0.5,0.5,0,0,0,0.1,0.1);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:600,y:300,alpha:1},10).wait(9).to({scaleX:0.5,scaleY:0.5,alpha:0.012},11).to({_off:true},1).wait(20));

	// curtain_1
	this.instance_1 = new lib.curtain_1_mc();
	this.instance_1.setTransform(-1000,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:0},18).wait(9).to({x:-1000},30).wait(2));

	// curtain_2
	this.instance_2 = new lib.curtain_2_mc();
	this.instance_2.setTransform(1000,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:0},18).wait(9).to({x:1000},30).wait(2));

	// bg
	this.instance_3 = new lib.curtain_3_mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(9).to({_off:true},1).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1000,0,3200,600);
p.frameBounds = [rect, rect, new cjs.Rectangle(-944.4,0,3088.9,600), new cjs.Rectangle(-888.9,0,2977.8,600), new cjs.Rectangle(-833.3,0,2866.7,600), new cjs.Rectangle(-777.7,0,2755.5,600), new cjs.Rectangle(-722.2,0,2644.4,600), new cjs.Rectangle(-666.6,0,2533.3,600), new cjs.Rectangle(-611.1,0,2422.2,600), new cjs.Rectangle(-555.5,0,2311.1,600), new cjs.Rectangle(-500,0,2200,600), new cjs.Rectangle(-444.4,0,2088.9,600), new cjs.Rectangle(-388.9,0,1977.8,600), new cjs.Rectangle(-333.3,0,1866.7,600), new cjs.Rectangle(-277.7,0,1755.5,600), new cjs.Rectangle(-222.2,0,1644.5,600), new cjs.Rectangle(-166.6,0,1533.3,600), new cjs.Rectangle(-111.1,0,1422.2,600), new cjs.Rectangle(-55.5,0,1311.1,600), rect=new cjs.Rectangle(0,0,1200,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-33.3,0,1266.7,600), new cjs.Rectangle(-66.6,0,1333.3,600), new cjs.Rectangle(-100,0,1400,600), new cjs.Rectangle(-133.3,0,1466.7,600), new cjs.Rectangle(-166.6,0,1533.3,600), new cjs.Rectangle(-200,0,1600,600), new cjs.Rectangle(-233.3,0,1666.7,600), new cjs.Rectangle(-266.6,0,1733.3,600), new cjs.Rectangle(-300,0,1800,600), new cjs.Rectangle(-333.3,0,1866.7,600), new cjs.Rectangle(-366.6,0,1933.3,600), new cjs.Rectangle(-400,0,2000,600), new cjs.Rectangle(-433.3,0,2066.7,600), new cjs.Rectangle(-466.6,0,2133.3,600), new cjs.Rectangle(-500,0,2200,600), new cjs.Rectangle(-533.3,0,2266.7,600), new cjs.Rectangle(-566.6,0,2333.3,600), new cjs.Rectangle(-600,0,2400,600), new cjs.Rectangle(-633.3,0,2466.7,600), new cjs.Rectangle(-666.6,0,2533.3,600), new cjs.Rectangle(-700,0,2600,600), new cjs.Rectangle(-733.3,0,2666.7,600), new cjs.Rectangle(-766.6,0,2733.3,600), new cjs.Rectangle(-800,0,2800,600), new cjs.Rectangle(-833.3,0,2866.7,600), new cjs.Rectangle(-866.6,0,2933.3,600), new cjs.Rectangle(-900,0,3000,600), new cjs.Rectangle(-933.3,0,3066.7,600), new cjs.Rectangle(-966.6,0,3133.3,600), rect=new cjs.Rectangle(-1000,0,3200,600), rect];


(lib.copyright_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.copyright_3_mc();
	this.instance.setTransform(-200,200,0.6,0.6);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,110,300,180);
p.frameBounds = [rect, new cjs.Rectangle(-348.7,106.8,302.5,181.5), new cjs.Rectangle(-345,97.1,309.9,186), new cjs.Rectangle(-338.9,81.1,322.2,193.4), new cjs.Rectangle(-330.2,58.6,339.5,203.7), new cjs.Rectangle(-319,29.7,361.7,217.1), new cjs.Rectangle(-305.5,-5.5,388.9,233.4), new cjs.Rectangle(-289.4,-47.2,421,252.6), new cjs.Rectangle(-270.9,-95.4,458,274.8), new cjs.Rectangle(-250,-150,500,300)];


(lib.thunder_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// thunder
	this.thunder_mc = new lib.thunder_3_mc();
	this.thunder_mc.shadow = new cjs.Shadow("#FFFFFF",0,0,30);
	this.thunder_mc.filters = [new cjs.BlurFilter(4, 4, 3)];

	this.timeline.addTween(cjs.Tween.get(this.thunder_mc).wait(1));

	// whiteBackground
	this.whiteBackground_mc = new lib.thunder_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.whiteBackground_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-38,1200,638);
p.frameBounds = [rect];


(lib.thunder_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2017 edapskov v 1.0
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
		/*
		
		*/
		this.body_mc.gotoAndStop(0);
		var _thunder_mc = this.body_mc.thunder_mc;
		_thunder_mc.gotoAndStop(0);
		_thunder_mc.visible = false;
		var _whiteBackground_mc = this.body_mc.whiteBackground_mc;
		_whiteBackground_mc.gotoAndStop(0);
		_whiteBackground_mc.visible = false;
		/*
		константы
		*/
		var _INTERVAL = 30;
		/*
		переменные
		*/
		var _currentUpdate_num = 0;
		var _totalUpdates_num = 100;
		var _interval_id = setInterval(_updateFunc, _INTERVAL);
		/*
		обновляем эффект
		*/
		function _updateFunc()
		{
			try
			{
				/*
				
				*/
				_currentUpdate_num++;
				/*
				
				*/
				if (_currentUpdate_num == 1)
				{
					_thunder_mc.removeAllChildren();
					var lightning = new Lightning();
					lightning.createLightningFunc(_thunder_mc, 800 * Math.random(), 100, 300);
				}
				else if (_currentUpdate_num == 2)
				{
					_thunder_mc.visible = true;
				}
				else if (_currentUpdate_num == 4)
				{
					_whiteBackground_mc.visible = true;
					_thunder_mc.visible = false;
				}
				else if (_currentUpdate_num == 6)
				{
					_whiteBackground_mc.visible = false;
				}
				else if (_currentUpdate_num >= _totalUpdates_num)
				{
					_totalUpdates_num = Math.round(Math.random() * 100) + 50;
					_currentUpdate_num = 0;
				}
			}
			catch(event)
			{
				clearInterval(_interval_id);
				console.log(event);
			}
			finally
			{
				
			}
		};
		/*
		динамическое создание молний
		*/
		function Lightning()
		{
			/*
			
			*/
			this.lightning_shape;
			this.cloudX_num;
			this.cloudY_num;
			this.groundX_num;
			this.groundY_num;
			this.branchCloudX_arr;
			this.branchCloudY_arr;
			this.branchThickness_arr;
			this.midRatio_num = 20;
			this.midRatioTaper_num = 0.95;
			this.termDelta_num = 15;
			this.termDeltaTaper_num = 0.95;
			this.lastLegDist_num = 15;
			this.branchProbe_num = 0.5;
			this.branchFactor_num = 0.9;
			this.isBranching_bool = true;
			this.branchCount_num = 0;
			this.branchMax_num = 3;
			this.branchRangeXmax_num = 100;//30
			this.branchRangeXmin_num = 50;//20
			this.branchRangeYmax_num = 80;
			this.branchRangeYmin_num = 50;
			this.thickness_num = 6; 
			this.thicknessTaper_num = 0.3; 
			this.color_str = "#ffffff"; 
			this.termX_num;
			this.termY_num;
			/*
			
			*/
			this.createLightningFunc = function (container_mc, coordX_num, minLenght_num, maxLenght_num)
			{
				/*
				
				*/
				this.cloudX_num = 0;
				this.cloudY_num = 0;
				this.groundX_num = 0;
				this.groundY_num = Math.round((maxLenght_num - minLenght_num) * Math.random()) + minLenght_num;
				this.branchCloudX_arr = new Array();
				this.branchCloudY_arr = new Array();
				this.branchThickness_arr = new Array();
				/*
				
				*/
				this.lightning_shape = new createjs.Shape();
				container_mc.addChild(this.lightning_shape);
				this.lightning_shape.x = coordX_num;
				this.lightning_shape.y = 0;
				/*
				
				*/
				var glowingBall_shape = new createjs.Shape();
				glowingBall_shape.graphics.beginFill(this.color_str);
				glowingBall_shape.graphics.drawCircle(0, 0, 10);
				glowingBall_shape.graphics.endFill();
				container_mc.addChild(glowingBall_shape);
				glowingBall_shape.alpha = 0.5;
				glowingBall_shape.x = coordX_num;
				glowingBall_shape.y = 0;
				/*
				
				*/
				this._getTermFunc();
			};
			/*
			
			*/
			this._setBranchDefaultsFunc = function()
			{
				this.midRatio_num = 20;
				this.midRatioTaper_num = 0.95;
				this.termDelta_num = 5;
				this.termDeltaTaper_num = 0.95;
				this.lastLegDist_num = 15;
				this.thicknessTaper_num = 0.1;
			}
			/*
			
			*/
			this._getTermFunc = function()
			{
				var _lenghtX_num = this.groundX_num - this.cloudX_num;
				var _lenghtY_num = this.groundY_num - this.cloudY_num;
				var midTermX_num = this.cloudX_num + (_lenghtX_num / this.midRatio_num);
				var midTermY_num = this.cloudY_num + (_lenghtY_num / this.midRatio_num);
				if (Math.abs(midTermX_num - this.groundX_num) < this.lastLegDist_num && Math.abs(midTermY_num - this.groundY_num) < this.lastLegDist_num)
				{
					this.termX_num = this.groundX_num;
					this.termY_num = this.groundY_num;
					this._drawStrikeFunc();
					if (this.isBranching_bool)
					{
						this._makeBranchFunc();
					}
					return;
				}
				var rndAngle_num = Math.random() * Math.PI;
				var rndDelta_num = Math.random() * this.termDelta_num;
				this.termX_num = midTermX_num + (rndDelta_num * Math.cos(rndAngle_num));
				this.termY_num = midTermY_num + (rndDelta_num * Math.sin(rndAngle_num));
				var rndNum_num = Math.random();
				if (rndNum_num < this.branchProbe_num && this.branchCount_num < this.branchMax_num && this.isBranching_bool)
				{
					this.branchCloudX_arr[this.branchCount_num] = this.cloudX_num;
					this.branchCloudY_arr[this.branchCount_num] = this.cloudY_num;
					this.branchThickness_arr[this.branchCount_num] = this.thickness_num;
					this.branchCount_num++;
					this.branchProbe_num *= this.branchFactor_num;
				}
				this._drawStrikeFunc(); 
				this._getTermFunc();
			}
			/*
			
			*/
			this._drawStrikeFunc = function()
			{
				this.lightning_shape.graphics.setStrokeStyle(this.thickness_num);
				this.lightning_shape.graphics.beginStroke(this.color_str);
				this.thickness_num = Math.max(0.01, this.thickness_num - this.thicknessTaper_num);
				this.lightning_shape.graphics.moveTo(this.cloudX_num, this.cloudY_num);
				this.lightning_shape.graphics.lineTo(this.termX_num, this.termY_num);
				this.cloudX_num = this.termX_num;
				this.cloudY_num = this.termY_num;
				this.midRatio_num *= this.midRatioTaper_num;
				this.termDelta_num *= this.termDeltaTaper_num;
			}
			/*
			
			*/
			this._makeBranchFunc = function()
			{
				var trigger_num = -1;
				for (var i = 0; i < this.branchCloudX_arr.length; i++)
				{
					this.isBranching_bool = false;
					this.cloudX_num = this.branchCloudX_arr[i];
					this.cloudY_num = this.branchCloudY_arr[i];
					this.thickness_num = this.branchThickness_arr[i] / 2;
					this.groundX_num = this.cloudX_num + trigger_num * (Math.random() * (this.branchRangeXmax_num - this.branchRangeXmin_num) + this.branchRangeXmin_num);
					this.groundY_num = this.cloudY_num + (Math.random() * (this.branchRangeYmax_num - this.branchRangeYmin_num) + this.branchRangeYmin_num);
					this._setBranchDefaultsFunc();
					this._getTermFunc();
					trigger_num *= -1;
				}
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.thunder_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-38,1200,638);
p.frameBounds = [rect];


(lib.simple_explosion_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// container
	this.example_mc = new lib.ParticleSimpleExplosionMC();

	this.timeline.addTween(cjs.Tween.get(this.example_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.gravity_explosion_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// container
	this.example_mc = new lib.ParticleGravityExplosionMC();

	this.timeline.addTween(cjs.Tween.get(this.example_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.blinking_light_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_light_1_mc();
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.012},14).to({scaleX:1,scaleY:1,alpha:0.5},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect, new cjs.Rectangle(-24.6,-24.6,49.3,49.3), new cjs.Rectangle(-24.2,-24.2,48.6,48.6), new cjs.Rectangle(-23.9,-23.9,47.8,47.8), new cjs.Rectangle(-23.5,-23.5,47.2,47.2), new cjs.Rectangle(-23.2,-23.2,46.5,46.5), new cjs.Rectangle(-22.8,-22.8,45.7,45.7), new cjs.Rectangle(-22.5,-22.5,45,45), new cjs.Rectangle(-22.1,-22.1,44.3,44.3), new cjs.Rectangle(-21.7,-21.7,43.6,43.6), new cjs.Rectangle(-21.4,-21.4,42.8,42.8), new cjs.Rectangle(-21,-21,42.2,42.2), new cjs.Rectangle(-20.7,-20.7,41.5,41.5), new cjs.Rectangle(-20.3,-20.3,40.7,40.7), new cjs.Rectangle(-20,-20,40,40), new cjs.Rectangle(-20.3,-20.3,40.7,40.7), new cjs.Rectangle(-20.6,-20.6,41.3,41.3), new cjs.Rectangle(-20.9,-20.9,42,42), new cjs.Rectangle(-21.3,-21.3,42.7,42.7), new cjs.Rectangle(-21.6,-21.6,43.3,43.3), new cjs.Rectangle(-21.9,-21.9,44,44), new cjs.Rectangle(-22.3,-22.3,44.7,44.7), new cjs.Rectangle(-22.6,-22.6,45.3,45.3), new cjs.Rectangle(-22.9,-22.9,46,46), new cjs.Rectangle(-23.3,-23.3,46.7,46.7), new cjs.Rectangle(-23.6,-23.6,47.3,47.3), new cjs.Rectangle(-23.9,-23.9,48,48), new cjs.Rectangle(-24.3,-24.3,48.7,48.7), new cjs.Rectangle(-24.6,-24.6,49.3,49.3), new cjs.Rectangle(-25,-25,50,50)];


(lib.sound_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sound_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.sound_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.sound_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.sound_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({rotation:-10},5).to({rotation:10},10).to({rotation:0},5).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-69.5,-69.5,139,139), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-59.9,-59.9,120,120), new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-69.5,-69.5,139,139), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-62,-62,124.1,124.1), rect=new cjs.Rectangle(-60,-60,120,120), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.sound_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.sound_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({rotation:-10},5).to({rotation:10},10).to({rotation:0},5).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-69.5,-69.5,139,139), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-59.9,-59.9,120,120), new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-69.5,-69.5,139,139), new cjs.Rectangle(-67.7,-67.7,135.5,135.5), new cjs.Rectangle(-65.9,-65.9,131.9,131.9), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-62,-62,124.1,124.1), rect=new cjs.Rectangle(-60,-60,120,120), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.social_network_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		@author edapskov
		@copyright 2023 edapskov v 1.0
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = true;
		this.mouseChildren = true;
		this.cursor = "pointer";
		this.addEventListener("click", _onClickSocialNetworkMcFunc, false);
		/*
		
		*/
		var enSocialNetwork_arr = ["fb", "youtube", "twitter"];
		var ruSocialNetwork_arr = ["vk", "vk", "youtube"];
		var social_network_str = enSocialNetwork_arr[Math.floor(Math.random() * enSocialNetwork_arr.length)];
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz"))
		{
			social_network_str = ruSocialNetwork_arr[Math.floor(Math.random() * ruSocialNetwork_arr.length)];
		}
		/*
		
		*/
		this.body_mc.gotoAndStop(0);
		this.body_mc.gotoAndStop(social_network_str);
		/*
		
		*/
		function _onClickSocialNetworkMcFunc(event)
		{
			if(social_network_str == "fb")
			{
				window.open("https://facebook.com/dlgirlsgames", '_blank');
			}
			if(social_network_str == "vk")
			{
				window.open("https://vk.com/dlgirls", '_blank');
			}
			if(social_network_str == "youtube")
			{
				window.open("https://youtube.com/channel/UC7WA6wxCaCbCoLrQu-SbA8g", '_blank');
			}
			if(social_network_str == "twitter")
			{
				window.open("https://twitter.com/DLstudio_2012", '_blank');
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.social_network_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmDGEQihihAAjjQAAjiChihQChihDiAAQDjAAChChQCiChgBDiQABDjiiChQihChjjAAQjiAAihihg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.remove_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.remove_1_mc();
	this.instance.setTransform(0,0,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect, new cjs.Rectangle(-40,-40,80,80), new cjs.Rectangle(-35,-35,70,70), new cjs.Rectangle(-40,-40,80,80)];


(lib.play_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.play_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({x:5},5).to({x:-5},10).to({x:0},5).wait(1));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},10).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-96,-96,192,192), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-100,-100,200,200), new cjs.Rectangle(-99.4,-99.4,199,199), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-98.4,-98.4,197,197), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-97.4,-97.4,195,195), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-97,-96.4,193.6,193), new cjs.Rectangle(-98,-95.9,194.1,192), new cjs.Rectangle(-99,-95.4,194.6,191), new cjs.Rectangle(-100,-95,195,190), new cjs.Rectangle(-99,-95,194,190), new cjs.Rectangle(-98,-95,193,190), new cjs.Rectangle(-97,-95,192,190), new cjs.Rectangle(-96,-95,191,190), new cjs.Rectangle(-95,-95,190,190)];


(lib.photo_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.photo_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.more_games_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.more_games_7_mc();
	this.instance.setTransform(97.9,45,2.363,2.363,0,0,0,3.5,3.9);

	this.instance_1 = new lib.more_games_7_mc();
	this.instance_1.setTransform(127.2,56.6,1.553,1.553,0,0,0,3.5,3.9);

	this.instance_2 = new lib.more_games_7_mc();
	this.instance_2.setTransform(117.9,50.5,2.363,2.363,0,0,0,3.5,3.9);

	this.instance_3 = new lib.more_games_7_mc();
	this.instance_3.setTransform(26.9,80,2.363,2.363,0,0,0,3.5,3.9);

	this.instance_4 = new lib.more_games_7_mc();
	this.instance_4.setTransform(56.4,108.1,2.363,2.363,0,0,0,3.5,3.9);

	this.instance_5 = new lib.more_games_7_mc();
	this.instance_5.setTransform(71.4,113.1,2.363,2.363,0,0,0,3.5,3.9);

	this.instance_6 = new lib.more_games_11_mc();
	this.instance_6.setTransform(94.6,90.6,0.964,0.964,-15,0,0,22.1,10);

	this.instance_7 = new lib.more_games_13_mc();
	this.instance_7.setTransform(16,64.1,0.987,0.987,60,0,0,11.8,12);

	this.instance_8 = new lib.more_games_13_mc();
	this.instance_8.setTransform(64,100.6,1.051,1.051,0,0,0,11.9,11.9);

	this.instance_9 = new lib.more_games_12_img();
	this.instance_9.setTransform(10.7,37.7);

	this.instance_10 = new lib.more_games_14_mc();
	this.instance_10.setTransform(82,109.1,0.929,0.929,180,0,0,8.3,13.3);

	this.instance_11 = new lib.more_games_9_mc();
	this.instance_11.setTransform(79.8,80.3,1,1,0,0,0,41.1,30);

	this.instance_12 = new lib.more_games_15_mc();
	this.instance_12.setTransform(81.5,45.2,2.743,2.743,0,0,0,3.8,3.8);

	this.instance_13 = new lib.more_games_14_mc();
	this.instance_13.setTransform(53.4,48.6,1.196,1.196,150,0,0,8.3,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 3
	this.instance_14 = new lib.more_games_11_img();
	this.instance_14.setTransform(95,33.3,0.897,0.897,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Слой 2
	this.instance_15 = new lib.more_games_4_img();
	this.instance_15.setTransform(26.4,5.4,0.339,0.339,-15);

	this.instance_16 = new lib.more_games_5_img();
	this.instance_16.setTransform(98.4,5.1,0.239,0.239,30);

	this.instance_17 = new lib.more_games_2_img();
	this.instance_17.setTransform(107,0,0.529,0.529,15);

	this.instance_18 = new lib.more_games_3_img();
	this.instance_18.setTransform(44.2,4.7,0.316,0.316);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,150.7,122.4);
p.frameBounds = [rect];


(lib.more_games_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.more_games_12_mc();
	this.instance.setTransform(-4.8,-46.8,0.322,0.322,0,0,0,25,25);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({_off:false},0).to({regX:24.9,regY:24.9,scaleX:0.91,scaleY:0.91,y:-46.9},3).to({regX:25,regY:25,scaleX:0.32,scaleY:0.32,y:-46.8},4).to({_off:true},1).wait(17).to({_off:false},0).to({regX:24.9,regY:24.9,scaleX:0.91,scaleY:0.91,y:-46.9},3).to({regX:25,regY:25,scaleX:0.32,scaleY:0.32,y:-46.8},4).to({_off:true},1).wait(32));

	// animation
	this.instance_1 = new lib.more_games_12_mc();
	this.instance_1.setTransform(-4.8,25.2,0.322,0.322,0,0,0,25,25);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36).to({_off:false},0).to({regX:24.9,regY:24.9,scaleX:0.91,scaleY:0.91,y:25.1},3).to({regX:25,regY:25,scaleX:0.32,scaleY:0.32,y:25.2},4).to({_off:true},1).wait(17).to({_off:false},0).to({regX:24.9,regY:24.9,scaleX:0.91,scaleY:0.91,y:25.1},3).to({regX:25,regY:25,scaleX:0.32,scaleY:0.32,y:25.2},4).to({_off:true},1).wait(37));

	// animation
	this.instance_2 = new lib.more_games_12_mc();
	this.instance_2.setTransform(-45.1,-28.6,0.418,0.418,0,0,0,25,25);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(32).to({_off:false},0).to({regX:24.9,scaleX:1.18,scaleY:1.18},3).to({regX:25,scaleX:0.42,scaleY:0.42},4).to({_off:true},1).wait(17).to({_off:false},0).to({regX:24.9,scaleX:1.18,scaleY:1.18},3).to({regX:25,scaleX:0.42,scaleY:0.42},4).to({_off:true},1).wait(41));

	// animation
	this.instance_3 = new lib.more_games_12_mc();
	this.instance_3.setTransform(17.9,11.3,0.418,0.418,0,0,0,25,25);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).to({regX:24.9,scaleX:1.18,scaleY:1.18},3).to({regX:25,scaleX:0.42,scaleY:0.42},4).to({_off:true},1).wait(17).to({_off:false},0).to({regX:24.9,scaleX:1.18,scaleY:1.18},3).to({regX:25,scaleX:0.42,scaleY:0.42},4).to({_off:true},1).wait(48));

	// animation
	this.instance_4 = new lib.more_games_8_mc();
	this.instance_4.setTransform(38.3,-2.7,1,1,-105,0,0,24.9,33.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({rotation:0,x:62.7,y:23.2},11,cjs.Ease.get(1)).wait(54).to({scaleX:0.69,scaleY:0.69,rotation:-105,x:34.8,y:7.2},12,cjs.Ease.get(-1)).to({_off:true},2).wait(8));

	// animation
	this.instance_5 = new lib.more_games_5_mc();
	this.instance_5.setTransform(0.2,-6.5,1.074,0.924,0,0,0,67.1,57.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({regX:67.2,scaleX:0.96,scaleY:0.83,y:-5},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:0.57,y:-25.8},2).to({regX:67.1,scaleX:1.07,scaleY:0.07,y:-58.5},4).to({_off:true},1).wait(72).to({_off:false},0).to({scaleY:0.92,y:-6.5},7).to({y:-4.5},2).to({y:-6.5},2).wait(3));

	// animation
	this.instance_6 = new lib.more_games_3_mc();
	this.instance_6.setTransform(0.3,21.9,1.074,1.074,0,0,0,67.2,47.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({scaleX:0.96,scaleY:0.96,x:0.2,y:20.3},4,cjs.Ease.get(-1)).to({scaleX:1.07,scaleY:1.07,x:0.3,y:21.9},4,cjs.Ease.get(1)).wait(82).to({y:23.9},2).to({y:21.9},2).wait(3));

	// animation
	this.instance_7 = new lib.more_games_4_mc();
	this.instance_7.setTransform(3,2.2,0.815,0.685,0,0,0,75.3,61.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({_off:false},0).to({scaleX:1,scaleY:0.84,x:3.5,y:-3.3},6).to({scaleY:1.09,y:-18.8},6,cjs.Ease.get(1)).to({scaleY:1,y:-13.3},2).wait(58).to({scaleY:0.88,y:-5.7},6).to({regX:75.4,scaleX:0.91,scaleY:0.79,y:1.4},7).to({_off:true},1).wait(7));

	// animation
	this.instance_8 = new lib.more_games_2_mc();
	this.instance_8.setTransform(0.3,6.9,1.074,1.074,0,0,0,67.2,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({scaleX:0.96,scaleY:0.96,x:0.2},4,cjs.Ease.get(-1)).to({scaleX:1.07,scaleY:1.07,x:0.3},4,cjs.Ease.get(1)).wait(82).to({y:8.9},2).to({y:6.9},2).wait(3));

	// animation
	this.instance_9 = new lib.more_games_6_mc();
	this.instance_9.setTransform(0.2,-61.5,1.074,0.039,0,180,0,67.1,57.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(20).to({_off:false},0).to({regY:57.1,scaleY:0.29,y:-72.8},5).wait(60).to({regY:57.5,scaleY:0.04,y:-61.5},6,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// graph
	this.instance_10 = new lib.more_games_10_mc();
	this.instance_10.setTransform(2.2,16.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.3,-59.4,145,139.6);
p.frameBounds = [rect, rect=new cjs.Rectangle(-72.2,-59.3,144.9,139.5), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-72.3,-59.4,145,139.6), new cjs.Rectangle(-71.8,-58.9,144,139.1), new cjs.Rectangle(-70.3,-57.6,142.4,137.8), new cjs.Rectangle(-68,-55.4,140.1,135.6), new cjs.Rectangle(-67.6,-52.3,139.7,132.6), new cjs.Rectangle(-68,-55.5,140.1,135.7), new cjs.Rectangle(-70.4,-58.6,142.5,138.9), new cjs.Rectangle(-71.8,-59.5,144,139.7), new cjs.Rectangle(-72.3,-60.3,146.5,140.6), new cjs.Rectangle(-72.2,-61.3,148.7,141.6), new cjs.Rectangle(-72.2,-62.2,151.1,142.5), new cjs.Rectangle(-72.2,-64.6,151.1,144.8), new cjs.Rectangle(-72.2,-71.8,158.9,152), new cjs.Rectangle(-72.2,-77.7,164.1,158), new cjs.Rectangle(-72.2,-83.3,166.4,163.6), new cjs.Rectangle(-72.2,-89.6,166.5,169.9), new cjs.Rectangle(-72.2,-96,165.6,176.2), new cjs.Rectangle(-72.2,-95.9,164.1,176.2), new cjs.Rectangle(-72.2,-95.9,162.5,176.2), new cjs.Rectangle(-72.2,-95.9,161.1,176.2), new cjs.Rectangle(-72.2,-95.9,160.2,176.2), rect=new cjs.Rectangle(-72.2,-95.9,160,176.2), rect, rect, rect, rect, new cjs.Rectangle(-74.5,-95.9,162.3,176.2), rect=new cjs.Rectangle(-72.2,-95.9,160,176.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-74.5,-95.9,162.3,176.2), rect=new cjs.Rectangle(-72.2,-95.9,160,176.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-72.3,-96,160.1,176.2), new cjs.Rectangle(-72.2,-95.1,160.6,175.4), new cjs.Rectangle(-72.2,-92.5,161.4,172.7), new cjs.Rectangle(-72.2,-88.1,162.1,168.3), new cjs.Rectangle(-72.2,-82,162.5,162.3), new cjs.Rectangle(-72.2,-74.2,162.4,154.4), new cjs.Rectangle(-72.2,-64.6,161.3,144.8), new cjs.Rectangle(-72.2,-62.2,158.6,142.5), new cjs.Rectangle(-72.2,-61.8,153.8,142), new cjs.Rectangle(-72.2,-61.4,148,141.6), new cjs.Rectangle(-72.2,-61,147.1,141.2), new cjs.Rectangle(-72.2,-60.6,146,140.8), new cjs.Rectangle(-72.2,-60.2,145,140.4), new cjs.Rectangle(-72.2,-59.8,144.9,140), new cjs.Rectangle(-72.3,-59.4,145,139.6), new cjs.Rectangle(-72.2,-58.3,144.9,138.5), new cjs.Rectangle(-72.3,-57.4,145,137.6), new cjs.Rectangle(-72.2,-58.3,144.9,138.6), rect=new cjs.Rectangle(-72.3,-59.4,145,139.6), rect, rect];


(lib.logo_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak2F3QgagPgdgZIABAAQh0hjg1hFIgFgIIgCgBIgKgOIgBgCQgpAyhWBFQgWASgTALQgNAHgNgFQgWgGgZgLQhmgyg0gnQg7gvgmg1QgWgfgNggQgPgggEgiQgLhiA/g0QAnghA2gGQAdgEAaAEQAbgJAfgDQAjgEAjADQAWACAVAFQAjgZA0gGIAAAAIACAAIAKgBIACAAIADAAQAeg8A+gcQA/geBHAKQBSANAyAuQAkAgAZA2QAmgsAsgVIAAAAQA+gfBPANQBIAKAzAvQAPAOAMAPQAwAJAdAbQAXAVAQAiQAYgcAdgOQAegOAlABIgDgHIgCgNIAAgBIAAgBIgBgDIAAgBQgGg2AigcQAWgSAdgEQAhgDAZANQASAJAPASQAKgWAQgMIgBAAQAWgTAhgDQAdgEAZANQApATAGA2IAAADIABAOIAAAFIAHgIIA/gsIADgBIACgBIAIgDQA4gXA6ANQAxAJAjAkQAYAYARAlIAFAKIAAADQAKAZAGAcIAAABIACAPIAAAAQAEAlgEAqIgBALQgJBIgiBNQgeBDhLBnQgSAagTASQgLALgPgBQgaAAgfgGIAAAAQh+gXhDgcQhOghg5gvQgigdgZggIgaAVIgBAAIAEAIQABAFgKADQgIACgLgBQgqAZhDAeQgXAKgSAFQgMADgKgGQgRgKgTgQQgogjgcgcQgFAGgFACQgRAGgQAEQgiAhgoAfIgBAAIgBABQhGAyiJA9QgiAPgeAIIgLACQgMAAgLgHg");

	// animation
	this.instance = new lib.beam_light_0_mc();
	this.instance.setTransform(-220,0,1,1,30);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({regX:-0.1,regY:0.1,scaleX:0.53,scaleY:0.53,x:-200.1},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:29.9,x:0},15).to({regX:0.1,regY:-0.1,scaleX:0.53,scaleY:0.53,rotation:30,x:200.1},15).wait(1));

	// graph
	this.instance_1 = new lib.logo_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-40,220,80);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.instruction_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.instruction_1_mc_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.full_screen_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// icon
	this.instance = new lib.full_screen_1_mc();

	this.instance_1 = new lib.full_screen_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.bg_small_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect];


(lib.free_games_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.free_games_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({y:-5},5).to({y:0},5).to({y:-5},5).to({y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-60,-61,120,120), new cjs.Rectangle(-60,-62,120,120), new cjs.Rectangle(-60,-63,120,120), new cjs.Rectangle(-60,-64,120,120), new cjs.Rectangle(-60,-65,120,120), new cjs.Rectangle(-60,-64,120,120), new cjs.Rectangle(-60,-63,120,120), new cjs.Rectangle(-60,-62,120,120), new cjs.Rectangle(-60,-61,120,120), new cjs.Rectangle(-60,-60,120,120), new cjs.Rectangle(-60,-61,120,120), new cjs.Rectangle(-60,-62,120,120), new cjs.Rectangle(-60,-63,120,120), new cjs.Rectangle(-60,-64,120,120), new cjs.Rectangle(-60,-65,120,120), new cjs.Rectangle(-60,-64,120,120), new cjs.Rectangle(-60,-63,120,120), new cjs.Rectangle(-60,-62,120,120), new cjs.Rectangle(-60,-61,120,120), new cjs.Rectangle(-60,-60,120,120)];


(lib.free_games_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.free_games_3_mc();
	this.instance.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// icon
	this.instance_1 = new lib.free_games_1_mc();
	this.instance_1.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.bg_small_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.credits_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.credits_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_small_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.banner_play_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.banner_play_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:0.83,scaleY:0.83,x:-5},10).to({x:5},10).to({scaleX:1,scaleY:1,x:0},10).wait(21));

	// bg
	this.instance_1 = new lib.banner_play_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.banner_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.banner_play_0_mc();
	this.instance.setTransform(0,100,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.decor_banner_2_img();
	this.instance_1.setTransform(-130,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.banner_2_img();
	this.instance_2.setTransform(-87,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDUUMAAAgomIcHAAMAAAAomg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,275);
p.frameBounds = [rect];


(lib.banner_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.banner_play_0_mc();
	this.instance.setTransform(0,100,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.decor_banner_1_img();
	this.instance_1.setTransform(-130,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.banner_1_img();
	this.instance_2.setTransform(-87,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDUTMAAAgolIcHAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,275);
p.frameBounds = [rect];


(lib.animation_for_next_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_for_next_2_mc();
	this.instance.setTransform(0,0,0.5,0.5);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({scaleX:0.67,scaleY:0.67,alpha:1},8).to({scaleX:1.08,scaleY:1.08,alpha:0.012},20).wait(17));

	// animation
	this.instance_1 = new lib.animation_for_next_2_mc();
	this.instance_1.setTransform(0,0,0.5,0.5);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).to({scaleX:0.67,scaleY:0.67,alpha:1},8).to({scaleX:1.08,scaleY:1.08,alpha:0.012},20).wait(9));

	// animation
	this.instance_2 = new lib.animation_for_next_2_mc();
	this.instance_2.setTransform(0,0,0.5,0.5);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({_off:false},0).to({scaleX:0.67,scaleY:0.67,alpha:1},8).to({scaleX:1.08,scaleY:1.08,alpha:0.012},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-60,-60,120,120), new cjs.Rectangle(-62.4,-62.4,125,125), new cjs.Rectangle(-65,-65,130,130), new cjs.Rectangle(-67.5,-67.5,135,135), new cjs.Rectangle(-70,-70,140,140), new cjs.Rectangle(-72.5,-72.5,145,145), new cjs.Rectangle(-75,-75,150,150), new cjs.Rectangle(-77.5,-77.5,155,155), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-82.4,-82.4,165,165), new cjs.Rectangle(-84.9,-84.9,170,170), new cjs.Rectangle(-87.4,-87.4,175,175), new cjs.Rectangle(-89.9,-89.9,180,180), new cjs.Rectangle(-92.4,-92.4,185,185), new cjs.Rectangle(-94.9,-94.9,190,190), new cjs.Rectangle(-97.4,-97.4,195,195), new cjs.Rectangle(-99.9,-99.9,200,200), new cjs.Rectangle(-102.4,-102.4,205,205), new cjs.Rectangle(-104.9,-104.9,210,210), new cjs.Rectangle(-107.4,-107.4,215,215), new cjs.Rectangle(-109.9,-109.9,220,220), new cjs.Rectangle(-112.4,-112.4,225,225), new cjs.Rectangle(-114.9,-114.9,230,230), new cjs.Rectangle(-117.4,-117.4,235,235), new cjs.Rectangle(-119.9,-119.9,240,240), new cjs.Rectangle(-122.4,-122.4,245,245), new cjs.Rectangle(-124.9,-124.9,250,250), new cjs.Rectangle(-127.4,-127.4,255,255), rect=new cjs.Rectangle(-130,-130,260,260), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_for_next_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.animation_for_next_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];


(lib.again_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.again_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.redirect_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.remove_btn = new lib.remove_btn();
	this.remove_btn.setTransform(585,115);
	new cjs.ButtonHelper(this.remove_btn, 0, 1, 2, false, new lib.remove_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.remove_btn).wait(1));

	// banner
	this.banner_mc = new lib.redirect_2_mc();
	this.banner_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.banner_mc).wait(1));

	// bg
	this.instance = new lib.redirect_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.preloader_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// indicator
	this.indicator_mc = new lib.preloader_6_mc();
	this.indicator_mc.setTransform(-130,-15);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-35,300,70);
p.frameBounds = [rect];


(lib.InstructionScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.remove_btn = new lib.remove_btn();
	this.remove_btn.setTransform(750,50);
	new cjs.ButtonHelper(this.remove_btn, 0, 1, 2, false, new lib.remove_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.remove_btn).wait(1));

	// text
	this.instance = new lib.instruction_2_mc();
	this.instance.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.instruction_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.prev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0,0,0.666,0.667,0,0,180,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-169.3,319.9,338.7);
p.frameBounds = [rect];


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0.1,0,0.666,0.667,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-259.8,-169.3,319.9,338.7);
p.frameBounds = [rect];


(lib.magic_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.ingridient20();
	this.instance.setTransform(156.6,349);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({_off:false},0).to({scaleX:0.85,scaleY:0.85,x:740,y:390},10).wait(1));

	// animation
	this.instance_1 = new lib.smoke_4_mc();
	this.instance_1.setTransform(314,484.9,1,1,0,0,0,75,77.5);

	this.instance_2 = new lib.smoke_4_mc();
	this.instance_2.setTransform(510,295,1,1,0,0,0,75,77.5);

	this.instance_3 = new lib.smoke_4_mc();
	this.instance_3.setTransform(289,142.4,1,1,0,0,0,75,77.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},34).to({state:[]},47).wait(9));

	// animation
	this.instance_4 = new lib.flash4_img();
	this.instance_4.setTransform(239.4,73.6);

	this.instance_5 = new lib.flash5_img();
	this.instance_5.setTransform(240.9,63.1);

	this.instance_6 = new lib.flash6_img();
	this.instance_6.setTransform(243.6,26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},35).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[]},2).wait(37));

	// animation
	this.instance_7 = new lib.back_door2();
	this.instance_7.setTransform(519,311,1.398,1,0,0,0,43,4);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(66).to({scaleX:1,alpha:1},4).wait(4).to({scaleX:1.4,alpha:0.012},4).wait(12));

	// animation
	this.instance_8 = new lib.back_door1();
	this.instance_8.setTransform(517.5,304.5,1,1,0,0,0,119.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(64).to({scaleX:0.35},5).to({_off:true},1).wait(6).to({_off:false},0).to({scaleX:1},5).wait(9));

	// animation
	this.instance_9 = new lib.ingridient20();
	this.instance_9.setTransform(399,356);
	this.instance_9.alpha = 0.012;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(46).to({_off:false},0).to({y:313,alpha:1},11).wait(15).to({x:156.6,y:349},7).to({_off:true},1).wait(10));

	// animation
	this.instance_10 = new lib.bak3();
	this.instance_10.setTransform(381,304.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(90));

	// animation (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EABKArMIAAg7IBuAAIAAgBMAmIAAAIAAA8g");
	var mask_graphics_1 = new cjs.Graphics().p("EABKArMIAAjvIBuAAIAAgFMAmIAAAIAAD0g");
	var mask_graphics_2 = new cjs.Graphics().p("EABKArNIAAmkIBuAAIAAgJMAmIAAAIAAGtg");
	var mask_graphics_3 = new cjs.Graphics().p("EABKArNIAApZIBuAAIAAgMMAmIAAAIAAJlg");
	var mask_graphics_4 = new cjs.Graphics().p("EABKArNIAAsNIBuAAIAAgQMAmIAAAIAAMdg");
	var mask_graphics_5 = new cjs.Graphics().p("EABKArNIAAvCIBuAAIAAgTMAmIAAAIAAPVg");
	var mask_graphics_6 = new cjs.Graphics().p("EABKArNIAAx2IBuAAIAAgXMAmIAAAIAASNg");
	var mask_graphics_7 = new cjs.Graphics().p("EABKArOIAA0rIBuAAIAAgbMAmIAAAIAAVGg");
	var mask_graphics_8 = new cjs.Graphics().p("EABKArOIAA3gIBuAAIAAgeMAmIAAAIAAX+g");
	var mask_graphics_9 = new cjs.Graphics().p("EABKArOIAA6UIBuAAIAAgiMAmIAAAIAAa2g");
	var mask_graphics_10 = new cjs.Graphics().p("EABKArOIAA9JIBuAAIAAglMAmIAAAIAAdug");
	var mask_graphics_11 = new cjs.Graphics().p("EABKArOIAA/9IBuAAIAAgpMAmIAAAMAAAAgmg");
	var mask_graphics_12 = new cjs.Graphics().p("EABKArOMAAAgixIBuAAIAAgtMAmIAAAMAAAAjeg");
	var mask_graphics_13 = new cjs.Graphics().p("EABKArPMAAAglnIBuAAIAAgwMAmIAAAMAAAAmXg");
	var mask_graphics_14 = new cjs.Graphics().p("EABKArPMAAAgobIBuAAIAAg0MAmIAAAMAAAApPg");
	var mask_graphics_15 = new cjs.Graphics().p("EABKArPMAAAgrPIBuAAIAAg3MAmIAAAMAAAAsGg");
	var mask_graphics_16 = new cjs.Graphics().p("EABKArPMAAAguCIBuAAIAAg8MAmIAAAMAAAAu+g");
	var mask_graphics_17 = new cjs.Graphics().p("EABKArPMAAAgw2IBuAAIAAhAMAmIAAAMAAAAx2g");
	var mask_graphics_18 = new cjs.Graphics().p("EABKArQMAAAgzsIBuAAIAAhDMAmIAAAMAAAA0vg");
	var mask_graphics_19 = new cjs.Graphics().p("EABKArQMAAAg2gIBuAAIAAhHMAmIAAAMAAAA3ng");
	var mask_graphics_20 = new cjs.Graphics().p("EABKArQMAAAg5UIBuAAIAAhLMAmIAAAMAAAA6fg");
	var mask_graphics_21 = new cjs.Graphics().p("EABKArQMAAAg8JIBuAAIAAhOMAmIAAAMAAAA9Xg");
	var mask_graphics_22 = new cjs.Graphics().p("EABKArQMAAAg+9IBuAAIAAhSMAmIAAAMAAABAPg");
	var mask_graphics_23 = new cjs.Graphics().p("EABKArQMAAAhByIBuAAIAAhVMAmIAAAMAAABDHg");
	var mask_graphics_24 = new cjs.Graphics().p("EABKArRMAAAhEnIBuAAIAAhZMAmIAAAMAAABGAg");
	var mask_graphics_25 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_26 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_27 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_28 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_29 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_30 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_31 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_32 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_33 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_34 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_35 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_36 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_37 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_38 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_39 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_40 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_41 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_42 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_43 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_44 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_45 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_46 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_47 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_48 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_49 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_50 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_51 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_52 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_53 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_54 = new cjs.Graphics().p("EABKArQMAAAg/lIBuAAIAAhTMAmIAAAMAAABA4g");
	var mask_graphics_55 = new cjs.Graphics().p("EABKArQMAAAg3wIBuAAIAAhJMAmIAAAMAAAA45g");
	var mask_graphics_56 = new cjs.Graphics().p("EABKArPMAAAgv6IBuAAIAAg+MAmIAAAMAAAAw4g");
	var mask_graphics_57 = new cjs.Graphics().p("EABKArPMAAAgoHIBuAAIAAg0MAmIAAAMAAAAo7g");
	var mask_graphics_58 = new cjs.Graphics().p("EABKArOMAAAggRIBuAAIAAgqMAmIAAAMAAAAg7g");
	var mask_graphics_59 = new cjs.Graphics().p("EABKArOIAA4cIBuAAIAAggMAmIAAAIAAY8g");
	var mask_graphics_60 = new cjs.Graphics().p("EABKArNIAAwmIBuAAIAAgVMAmIAAAIAAQ7g");
	var mask_graphics_61 = new cjs.Graphics().p("EABKArNIAAoxIBuAAIAAgLMAmIAAAIAAI8g");
	var mask_graphics_62 = new cjs.Graphics().p("EABKArMIAAg7IBuAAIAAgBMAmIAAAIAAA8g");
	var mask_graphics_63 = new cjs.Graphics().p("EABKArMIAAg7IBuAAIAAgBMAmIAAAIAAA8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_1,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_2,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_3,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_4,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_5,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_6,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_7,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_8,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_9,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_10,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_11,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_12,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_13,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_14,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_15,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_16,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_17,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_18,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_19,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_20,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_21,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_22,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_23,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_24,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_25,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_26,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_27,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_28,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_29,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_30,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_31,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_32,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_33,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_34,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_35,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_36,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_37,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_38,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_39,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_40,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_41,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_42,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_43,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_44,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_45,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_46,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_47,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_48,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_49,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_50,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_51,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_52,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_53,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_54,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_55,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_56,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_57,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_58,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_59,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_60,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_61,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_62,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_63,x:262.5,y:276.5}).wait(27));

	// animation
	this.instance_11 = new lib.bak2();
	this.instance_11.setTransform(381,304.5);

	this.instance_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(251,34.5,291,541);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(214,34.5,371,541), rect=new cjs.Rectangle(214,34.5,371,547.2), rect, rect=new cjs.Rectangle(214,34.5,371,549.6), rect, rect=new cjs.Rectangle(214,26.2,371,560), rect, rect=new cjs.Rectangle(214,34.5,371,547.2), rect, rect=new cjs.Rectangle(214,34.5,371,549.6), rect, rect=new cjs.Rectangle(214,26.2,371,560), rect, rect=new cjs.Rectangle(214,34.5,371,547.2), rect, rect=new cjs.Rectangle(214,34.5,371,549.6), rect, rect=new cjs.Rectangle(214,26.2,371,560), rect, rect=new cjs.Rectangle(214,34.5,371,541), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(212.7,34.5,372.3,541), new cjs.Rectangle(178.1,34.5,406.9,541), new cjs.Rectangle(143.4,34.5,441.6,541), new cjs.Rectangle(108.8,34.5,476.2,541), new cjs.Rectangle(74.2,34.5,510.8,541), new cjs.Rectangle(133.7,34.5,451.3,541), new cjs.Rectangle(193.4,34.5,348.6,541), rect=new cjs.Rectangle(251,34.5,291,541), rect, rect, new cjs.Rectangle(251,34.5,330.5,541), new cjs.Rectangle(251,34.5,387.6,541), new cjs.Rectangle(251,34.5,444.6,541), new cjs.Rectangle(251,34.5,501.7,541), new cjs.Rectangle(251,34.5,558.8,541)];


(lib.magic_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.ingridient15();
	this.instance.setTransform(160,380);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(77).to({_off:false},0).to({scaleX:0.83,scaleY:0.83,x:623,y:115},22).wait(1));

	// animation
	this.instance_1 = new lib.smoke_4_mc();
	this.instance_1.setTransform(314,484.9,1,1,0,0,0,75,77.5);

	this.instance_2 = new lib.smoke_4_mc();
	this.instance_2.setTransform(510,295,1,1,0,0,0,75,77.5);

	this.instance_3 = new lib.smoke_4_mc();
	this.instance_3.setTransform(289,142.4,1,1,0,0,0,75,77.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},34).to({state:[]},47).wait(19));

	// animation
	this.instance_4 = new lib.flash4_img();
	this.instance_4.setTransform(239.4,73.6);

	this.instance_5 = new lib.flash5_img();
	this.instance_5.setTransform(240.9,63.1);

	this.instance_6 = new lib.flash6_img();
	this.instance_6.setTransform(243.6,26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},35).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[]},2).wait(47));

	// animation
	this.instance_7 = new lib.back_door2();
	this.instance_7.setTransform(519,311,1.398,1,0,0,0,43,4);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(66).to({scaleX:1,alpha:1},4).wait(4).to({scaleX:1.4,alpha:0.012},4).wait(22));

	// animation
	this.instance_8 = new lib.back_door1();
	this.instance_8.setTransform(517.5,304.5,1,1,0,0,0,119.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(64).to({scaleX:0.35},5).to({_off:true},1).wait(6).to({_off:false},0).to({scaleX:1},5).wait(19));

	// animation
	this.instance_9 = new lib.ingridient15();
	this.instance_9.setTransform(400,310);
	this.instance_9.alpha = 0.012;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(46).to({_off:false},0).to({y:240,alpha:1},9).wait(17).to({x:160,y:380},5).to({_off:true},1).wait(22));

	// animation
	this.instance_10 = new lib.bak3();
	this.instance_10.setTransform(381,304.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(100));

	// animation (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EABKArMIAAg7IBuAAIAAgBMAmIAAAIAAA8g");
	var mask_graphics_1 = new cjs.Graphics().p("EABKArMIAAjvIBuAAIAAgFMAmIAAAIAAD0g");
	var mask_graphics_2 = new cjs.Graphics().p("EABKArNIAAmkIBuAAIAAgJMAmIAAAIAAGtg");
	var mask_graphics_3 = new cjs.Graphics().p("EABKArNIAApZIBuAAIAAgMMAmIAAAIAAJlg");
	var mask_graphics_4 = new cjs.Graphics().p("EABKArNIAAsNIBuAAIAAgQMAmIAAAIAAMdg");
	var mask_graphics_5 = new cjs.Graphics().p("EABKArNIAAvCIBuAAIAAgTMAmIAAAIAAPVg");
	var mask_graphics_6 = new cjs.Graphics().p("EABKArNIAAx2IBuAAIAAgXMAmIAAAIAASNg");
	var mask_graphics_7 = new cjs.Graphics().p("EABKArOIAA0rIBuAAIAAgbMAmIAAAIAAVGg");
	var mask_graphics_8 = new cjs.Graphics().p("EABKArOIAA3gIBuAAIAAgeMAmIAAAIAAX+g");
	var mask_graphics_9 = new cjs.Graphics().p("EABKArOIAA6UIBuAAIAAgiMAmIAAAIAAa2g");
	var mask_graphics_10 = new cjs.Graphics().p("EABKArOIAA9JIBuAAIAAglMAmIAAAIAAdug");
	var mask_graphics_11 = new cjs.Graphics().p("EABKArOIAA/9IBuAAIAAgpMAmIAAAMAAAAgmg");
	var mask_graphics_12 = new cjs.Graphics().p("EABKArOMAAAgixIBuAAIAAgtMAmIAAAMAAAAjeg");
	var mask_graphics_13 = new cjs.Graphics().p("EABKArPMAAAglnIBuAAIAAgwMAmIAAAMAAAAmXg");
	var mask_graphics_14 = new cjs.Graphics().p("EABKArPMAAAgobIBuAAIAAg0MAmIAAAMAAAApPg");
	var mask_graphics_15 = new cjs.Graphics().p("EABKArPMAAAgrPIBuAAIAAg3MAmIAAAMAAAAsGg");
	var mask_graphics_16 = new cjs.Graphics().p("EABKArPMAAAguCIBuAAIAAg8MAmIAAAMAAAAu+g");
	var mask_graphics_17 = new cjs.Graphics().p("EABKArPMAAAgw2IBuAAIAAhAMAmIAAAMAAAAx2g");
	var mask_graphics_18 = new cjs.Graphics().p("EABKArQMAAAgzsIBuAAIAAhDMAmIAAAMAAAA0vg");
	var mask_graphics_19 = new cjs.Graphics().p("EABKArQMAAAg2gIBuAAIAAhHMAmIAAAMAAAA3ng");
	var mask_graphics_20 = new cjs.Graphics().p("EABKArQMAAAg5UIBuAAIAAhLMAmIAAAMAAAA6fg");
	var mask_graphics_21 = new cjs.Graphics().p("EABKArQMAAAg8JIBuAAIAAhOMAmIAAAMAAAA9Xg");
	var mask_graphics_22 = new cjs.Graphics().p("EABKArQMAAAg+9IBuAAIAAhSMAmIAAAMAAABAPg");
	var mask_graphics_23 = new cjs.Graphics().p("EABKArQMAAAhByIBuAAIAAhVMAmIAAAMAAABDHg");
	var mask_graphics_24 = new cjs.Graphics().p("EABKArRMAAAhEnIBuAAIAAhZMAmIAAAMAAABGAg");
	var mask_graphics_25 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_26 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_27 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_28 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_29 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_30 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_31 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_32 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_33 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_34 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_35 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_36 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_37 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_38 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_39 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_40 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_41 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_42 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_43 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_44 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_45 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_46 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_47 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_48 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_49 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_50 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_51 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_52 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_53 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_54 = new cjs.Graphics().p("EABKArQMAAAg/lIBuAAIAAhTMAmIAAAMAAABA4g");
	var mask_graphics_55 = new cjs.Graphics().p("EABKArQMAAAg3wIBuAAIAAhJMAmIAAAMAAAA45g");
	var mask_graphics_56 = new cjs.Graphics().p("EABKArPMAAAgv6IBuAAIAAg+MAmIAAAMAAAAw4g");
	var mask_graphics_57 = new cjs.Graphics().p("EABKArPMAAAgoHIBuAAIAAg0MAmIAAAMAAAAo7g");
	var mask_graphics_58 = new cjs.Graphics().p("EABKArOMAAAggRIBuAAIAAgqMAmIAAAMAAAAg7g");
	var mask_graphics_59 = new cjs.Graphics().p("EABKArOIAA4cIBuAAIAAggMAmIAAAIAAY8g");
	var mask_graphics_60 = new cjs.Graphics().p("EABKArNIAAwmIBuAAIAAgVMAmIAAAIAAQ7g");
	var mask_graphics_61 = new cjs.Graphics().p("EABKArNIAAoxIBuAAIAAgLMAmIAAAIAAI8g");
	var mask_graphics_62 = new cjs.Graphics().p("EABKArMIAAg7IBuAAIAAgBMAmIAAAIAAA8g");
	var mask_graphics_63 = new cjs.Graphics().p("EABKArMIAAg7IBuAAIAAgBMAmIAAAIAAA8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_1,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_2,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_3,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_4,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_5,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_6,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_7,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_8,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_9,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_10,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_11,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_12,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_13,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_14,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_15,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_16,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_17,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_18,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_19,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_20,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_21,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_22,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_23,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_24,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_25,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_26,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_27,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_28,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_29,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_30,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_31,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_32,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_33,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_34,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_35,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_36,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_37,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_38,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_39,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_40,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_41,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_42,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_43,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_44,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_45,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_46,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_47,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_48,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_49,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_50,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_51,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_52,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_53,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_54,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_55,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_56,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_57,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_58,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_59,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_60,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_61,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_62,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_63,x:262.5,y:276.5}).wait(37));

	// animation
	this.instance_11 = new lib.bak2();
	this.instance_11.setTransform(381,304.5);

	this.instance_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(251,34.5,291,541);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(214,34.5,371,541), rect=new cjs.Rectangle(214,34.5,371,547.2), rect, rect=new cjs.Rectangle(214,34.5,371,549.6), rect, rect=new cjs.Rectangle(214,26.2,371,560), rect, rect=new cjs.Rectangle(214,34.5,371,547.2), rect, rect=new cjs.Rectangle(214,34.5,371,549.6), rect, rect=new cjs.Rectangle(214,26.2,371,560), rect, rect=new cjs.Rectangle(214,34.5,371,547.2), rect, rect=new cjs.Rectangle(214,34.5,371,549.6), rect, rect=new cjs.Rectangle(214,26.2,371,560), rect, rect=new cjs.Rectangle(214,34.5,371,541), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(209.5,34.5,375.5,541), new cjs.Rectangle(161.5,34.5,423.5,541), new cjs.Rectangle(113.5,34.5,471.5,541), new cjs.Rectangle(134.9,34.5,450.1,541), new cjs.Rectangle(156.3,34.5,428.7,541), new cjs.Rectangle(177.7,34.5,407.3,541), new cjs.Rectangle(199.1,34.5,342.9,541), new cjs.Rectangle(220.5,34.5,321.5,541), new cjs.Rectangle(241.9,34.5,300.1,541), rect=new cjs.Rectangle(251,34.5,291,541), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(251,34.5,307.1,541), new cjs.Rectangle(251,34.5,327.8,541), new cjs.Rectangle(251,34.5,348.5,541), new cjs.Rectangle(251,34.5,369.2,541), new cjs.Rectangle(251,26.1,389.8,549.4), new cjs.Rectangle(251,15,410.6,560.5)];


(lib.magic_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.smoke_4_mc();
	this.instance.setTransform(314,484.9,1,1,0,0,0,75,77.5);

	this.instance_1 = new lib.smoke_4_mc();
	this.instance_1.setTransform(510,295,1,1,0,0,0,75,77.5);

	this.instance_2 = new lib.smoke_4_mc();
	this.instance_2.setTransform(289,142.4,1,1,0,0,0,75,77.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},34).to({state:[]},52).wait(1));

	// animation
	this.instance_3 = new lib.flash4_img();
	this.instance_3.setTransform(239.4,73.6);

	this.instance_4 = new lib.flash5_img();
	this.instance_4.setTransform(240.9,63.1);

	this.instance_5 = new lib.flash6_img();
	this.instance_5.setTransform(243.6,26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},35).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[]},2).wait(34));

	// animation
	this.instance_6 = new lib.back_door2();
	this.instance_6.setTransform(519,311,1.398,1,0,0,0,43,4);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(66).to({scaleX:1,alpha:1},4).wait(4).to({scaleX:1.4,alpha:0.012},4).wait(9));

	// animation
	this.instance_7 = new lib.back_door1();
	this.instance_7.setTransform(517.5,304.5,1,1,0,0,0,119.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(64).to({scaleX:0.35},5).to({_off:true},1).wait(6).to({_off:false},0).to({scaleX:1},10).wait(1));

	// animation
	this.instance_8 = new lib.ingridient16();
	this.instance_8.setTransform(399.3,287);
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(45).to({_off:false},0).to({y:252,alpha:1},8).wait(18).to({x:149.1,y:417},5).to({x:50,y:170},10).wait(1));

	// animation
	this.instance_9 = new lib.bak3();
	this.instance_9.setTransform(381,304.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(87));

	// animation (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EABKArMIAAg7IBuAAIAAgBMAmIAAAIAAA8g");
	var mask_graphics_1 = new cjs.Graphics().p("EABKArMIAAjvIBuAAIAAgFMAmIAAAIAAD0g");
	var mask_graphics_2 = new cjs.Graphics().p("EABKArNIAAmkIBuAAIAAgJMAmIAAAIAAGtg");
	var mask_graphics_3 = new cjs.Graphics().p("EABKArNIAApZIBuAAIAAgMMAmIAAAIAAJlg");
	var mask_graphics_4 = new cjs.Graphics().p("EABKArNIAAsNIBuAAIAAgQMAmIAAAIAAMdg");
	var mask_graphics_5 = new cjs.Graphics().p("EABKArNIAAvCIBuAAIAAgTMAmIAAAIAAPVg");
	var mask_graphics_6 = new cjs.Graphics().p("EABKArNIAAx2IBuAAIAAgXMAmIAAAIAASNg");
	var mask_graphics_7 = new cjs.Graphics().p("EABKArOIAA0rIBuAAIAAgbMAmIAAAIAAVGg");
	var mask_graphics_8 = new cjs.Graphics().p("EABKArOIAA3gIBuAAIAAgeMAmIAAAIAAX+g");
	var mask_graphics_9 = new cjs.Graphics().p("EABKArOIAA6UIBuAAIAAgiMAmIAAAIAAa2g");
	var mask_graphics_10 = new cjs.Graphics().p("EABKArOIAA9JIBuAAIAAglMAmIAAAIAAdug");
	var mask_graphics_11 = new cjs.Graphics().p("EABKArOIAA/9IBuAAIAAgpMAmIAAAMAAAAgmg");
	var mask_graphics_12 = new cjs.Graphics().p("EABKArOMAAAgixIBuAAIAAgtMAmIAAAMAAAAjeg");
	var mask_graphics_13 = new cjs.Graphics().p("EABKArPMAAAglnIBuAAIAAgwMAmIAAAMAAAAmXg");
	var mask_graphics_14 = new cjs.Graphics().p("EABKArPMAAAgobIBuAAIAAg0MAmIAAAMAAAApPg");
	var mask_graphics_15 = new cjs.Graphics().p("EABKArPMAAAgrPIBuAAIAAg3MAmIAAAMAAAAsGg");
	var mask_graphics_16 = new cjs.Graphics().p("EABKArPMAAAguCIBuAAIAAg8MAmIAAAMAAAAu+g");
	var mask_graphics_17 = new cjs.Graphics().p("EABKArPMAAAgw2IBuAAIAAhAMAmIAAAMAAAAx2g");
	var mask_graphics_18 = new cjs.Graphics().p("EABKArQMAAAgzsIBuAAIAAhDMAmIAAAMAAAA0vg");
	var mask_graphics_19 = new cjs.Graphics().p("EABKArQMAAAg2gIBuAAIAAhHMAmIAAAMAAAA3ng");
	var mask_graphics_20 = new cjs.Graphics().p("EABKArQMAAAg5UIBuAAIAAhLMAmIAAAMAAAA6fg");
	var mask_graphics_21 = new cjs.Graphics().p("EABKArQMAAAg8JIBuAAIAAhOMAmIAAAMAAAA9Xg");
	var mask_graphics_22 = new cjs.Graphics().p("EABKArQMAAAg+9IBuAAIAAhSMAmIAAAMAAABAPg");
	var mask_graphics_23 = new cjs.Graphics().p("EABKArQMAAAhByIBuAAIAAhVMAmIAAAMAAABDHg");
	var mask_graphics_24 = new cjs.Graphics().p("EABKArRMAAAhEnIBuAAIAAhZMAmIAAAMAAABGAg");
	var mask_graphics_25 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_26 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_27 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_28 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_29 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_30 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_31 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_32 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_33 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_34 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_35 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_36 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_37 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_38 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_39 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_40 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_41 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_42 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_43 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_44 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_45 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_46 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_47 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_48 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_49 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_50 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_51 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_52 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_53 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_54 = new cjs.Graphics().p("EABKArQMAAAg/lIBuAAIAAhTMAmIAAAMAAABA4g");
	var mask_graphics_55 = new cjs.Graphics().p("EABKArQMAAAg3wIBuAAIAAhJMAmIAAAMAAAA45g");
	var mask_graphics_56 = new cjs.Graphics().p("EABKArPMAAAgv6IBuAAIAAg+MAmIAAAMAAAAw4g");
	var mask_graphics_57 = new cjs.Graphics().p("EABKArPMAAAgoHIBuAAIAAg0MAmIAAAMAAAAo7g");
	var mask_graphics_58 = new cjs.Graphics().p("EABKArOMAAAggRIBuAAIAAgqMAmIAAAMAAAAg7g");
	var mask_graphics_59 = new cjs.Graphics().p("EABKArOIAA4cIBuAAIAAggMAmIAAAIAAY8g");
	var mask_graphics_60 = new cjs.Graphics().p("EABKArNIAAwmIBuAAIAAgVMAmIAAAIAAQ7g");
	var mask_graphics_61 = new cjs.Graphics().p("EABKArNIAAoxIBuAAIAAgLMAmIAAAIAAI8g");
	var mask_graphics_62 = new cjs.Graphics().p("EABKArMIAAg7IBuAAIAAgBMAmIAAAIAAA8g");
	var mask_graphics_63 = new cjs.Graphics().p("EABKArMIAAg7IBuAAIAAgBMAmIAAAIAAA8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_1,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_2,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_3,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_4,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_5,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_6,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_7,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_8,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_9,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_10,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_11,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_12,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_13,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_14,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_15,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_16,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_17,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_18,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_19,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_20,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_21,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_22,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_23,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_24,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_25,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_26,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_27,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_28,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_29,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_30,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_31,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_32,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_33,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_34,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_35,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_36,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_37,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_38,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_39,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_40,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_41,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_42,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_43,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_44,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_45,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_46,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_47,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_48,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_49,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_50,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_51,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_52,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_53,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_54,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_55,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_56,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_57,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_58,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_59,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_60,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_61,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_62,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_63,x:262.5,y:276.5}).wait(24));

	// animation
	this.instance_10 = new lib.bak2();
	this.instance_10.setTransform(381,304.5);

	this.instance_10.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(87));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(251,34.5,291,541);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(214,34.5,371,541), rect=new cjs.Rectangle(214,34.5,371,547.2), rect, rect=new cjs.Rectangle(214,34.5,371,549.6), rect, rect=new cjs.Rectangle(214,26.2,371,560), rect, rect=new cjs.Rectangle(214,34.5,371,547.2), rect, rect=new cjs.Rectangle(214,34.5,371,549.6), rect, rect=new cjs.Rectangle(214,26.2,371,560), rect, rect=new cjs.Rectangle(214,34.5,371,547.2), rect, rect=new cjs.Rectangle(214,34.5,371,549.6), rect, rect=new cjs.Rectangle(214,26.2,371,560), rect, rect=new cjs.Rectangle(214,34.5,371,541), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(187.3,34.5,397.7,541), new cjs.Rectangle(137.2,34.5,447.8,541), new cjs.Rectangle(87.2,34.5,497.8,541), new cjs.Rectangle(77.3,34.5,507.7,541), new cjs.Rectangle(67.4,34.5,517.6,541), new cjs.Rectangle(57.5,34.5,527.5,541), new cjs.Rectangle(47.6,34.5,537.4,541), new cjs.Rectangle(37.7,34.5,547.3,541), new cjs.Rectangle(27.7,34.5,557.3,541), new cjs.Rectangle(17.8,34.5,567.2,541), new cjs.Rectangle(7.9,34.5,577.1,541), new cjs.Rectangle(-2,34.5,587,541), new cjs.Rectangle(-11.9,34.5,553.9,541)];


(lib.magic_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.smoke_4_mc();
	this.instance.setTransform(314,484.9,1,1,0,0,0,75,77.5);

	this.instance_1 = new lib.smoke_4_mc();
	this.instance_1.setTransform(510,295,1,1,0,0,0,75,77.5);

	this.instance_2 = new lib.smoke_4_mc();
	this.instance_2.setTransform(289,142.4,1,1,0,0,0,75,77.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},34).to({state:[]},47).wait(49));

	// animation
	this.instance_3 = new lib.flash4_img();
	this.instance_3.setTransform(239.4,73.6);

	this.instance_4 = new lib.flash5_img();
	this.instance_4.setTransform(240.9,63.1);

	this.instance_5 = new lib.flash6_img();
	this.instance_5.setTransform(243.6,26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},35).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[]},2).wait(77));

	// animation
	this.instance_6 = new lib.back_door2();
	this.instance_6.setTransform(519,311,1.398,1,0,0,0,43,4);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(66).to({scaleX:1,alpha:1},4).wait(4).to({scaleX:1.4,alpha:0.012},4).wait(52));

	// animation
	this.instance_7 = new lib.back_door1();
	this.instance_7.setTransform(517.5,304.5,1,1,0,0,0,119.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(64).to({scaleX:0.35},5).to({_off:true},1).wait(6).to({_off:false},0).to({scaleX:1},5).wait(49));

	// animation
	this.instance_8 = new lib.smoke_4_mc();
	this.instance_8.setTransform(164,411.4,1.453,1.453,0,0,0,75,77.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(108).to({_off:false},0).wait(22));

	// animation
	this.instance_9 = new lib.cronenberg3();
	this.instance_9.setTransform(395,329.9);
	this.instance_9.alpha = 0.012;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(45).to({_off:false},0).to({y:226.9,alpha:1},17).wait(10).to({x:134,y:417.9},10).wait(26).to({alpha:0.012},13).to({_off:true},1).wait(8));

	// animation
	this.instance_10 = new lib.bak3();
	this.instance_10.setTransform(381,304.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(130));

	// animation (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EABKArMIAAg7IBuAAIAAgBMAmIAAAIAAA8g");
	var mask_graphics_1 = new cjs.Graphics().p("EABKArMIAAjvIBuAAIAAgFMAmIAAAIAAD0g");
	var mask_graphics_2 = new cjs.Graphics().p("EABKArNIAAmkIBuAAIAAgJMAmIAAAIAAGtg");
	var mask_graphics_3 = new cjs.Graphics().p("EABKArNIAApZIBuAAIAAgMMAmIAAAIAAJlg");
	var mask_graphics_4 = new cjs.Graphics().p("EABKArNIAAsNIBuAAIAAgQMAmIAAAIAAMdg");
	var mask_graphics_5 = new cjs.Graphics().p("EABKArNIAAvCIBuAAIAAgTMAmIAAAIAAPVg");
	var mask_graphics_6 = new cjs.Graphics().p("EABKArNIAAx2IBuAAIAAgXMAmIAAAIAASNg");
	var mask_graphics_7 = new cjs.Graphics().p("EABKArOIAA0rIBuAAIAAgbMAmIAAAIAAVGg");
	var mask_graphics_8 = new cjs.Graphics().p("EABKArOIAA3gIBuAAIAAgeMAmIAAAIAAX+g");
	var mask_graphics_9 = new cjs.Graphics().p("EABKArOIAA6UIBuAAIAAgiMAmIAAAIAAa2g");
	var mask_graphics_10 = new cjs.Graphics().p("EABKArOIAA9JIBuAAIAAglMAmIAAAIAAdug");
	var mask_graphics_11 = new cjs.Graphics().p("EABKArOIAA/9IBuAAIAAgpMAmIAAAMAAAAgmg");
	var mask_graphics_12 = new cjs.Graphics().p("EABKArOMAAAgixIBuAAIAAgtMAmIAAAMAAAAjeg");
	var mask_graphics_13 = new cjs.Graphics().p("EABKArPMAAAglnIBuAAIAAgwMAmIAAAMAAAAmXg");
	var mask_graphics_14 = new cjs.Graphics().p("EABKArPMAAAgobIBuAAIAAg0MAmIAAAMAAAApPg");
	var mask_graphics_15 = new cjs.Graphics().p("EABKArPMAAAgrPIBuAAIAAg3MAmIAAAMAAAAsGg");
	var mask_graphics_16 = new cjs.Graphics().p("EABKArPMAAAguCIBuAAIAAg8MAmIAAAMAAAAu+g");
	var mask_graphics_17 = new cjs.Graphics().p("EABKArPMAAAgw2IBuAAIAAhAMAmIAAAMAAAAx2g");
	var mask_graphics_18 = new cjs.Graphics().p("EABKArQMAAAgzsIBuAAIAAhDMAmIAAAMAAAA0vg");
	var mask_graphics_19 = new cjs.Graphics().p("EABKArQMAAAg2gIBuAAIAAhHMAmIAAAMAAAA3ng");
	var mask_graphics_20 = new cjs.Graphics().p("EABKArQMAAAg5UIBuAAIAAhLMAmIAAAMAAAA6fg");
	var mask_graphics_21 = new cjs.Graphics().p("EABKArQMAAAg8JIBuAAIAAhOMAmIAAAMAAAA9Xg");
	var mask_graphics_22 = new cjs.Graphics().p("EABKArQMAAAg+9IBuAAIAAhSMAmIAAAMAAABAPg");
	var mask_graphics_23 = new cjs.Graphics().p("EABKArQMAAAhByIBuAAIAAhVMAmIAAAMAAABDHg");
	var mask_graphics_24 = new cjs.Graphics().p("EABKArRMAAAhEnIBuAAIAAhZMAmIAAAMAAABGAg");
	var mask_graphics_25 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_26 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_27 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_28 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_29 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_30 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_31 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_32 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_33 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_34 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_35 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_36 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_37 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_38 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_39 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_40 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_41 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_42 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_43 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_44 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_45 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_46 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_47 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_48 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_49 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_50 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_51 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_52 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_53 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_54 = new cjs.Graphics().p("EABKArQMAAAg/lIBuAAIAAhTMAmIAAAMAAABA4g");
	var mask_graphics_55 = new cjs.Graphics().p("EABKArQMAAAg3wIBuAAIAAhJMAmIAAAMAAAA45g");
	var mask_graphics_56 = new cjs.Graphics().p("EABKArPMAAAgv6IBuAAIAAg+MAmIAAAMAAAAw4g");
	var mask_graphics_57 = new cjs.Graphics().p("EABKArPMAAAgoHIBuAAIAAg0MAmIAAAMAAAAo7g");
	var mask_graphics_58 = new cjs.Graphics().p("EABKArOMAAAggRIBuAAIAAgqMAmIAAAMAAAAg7g");
	var mask_graphics_59 = new cjs.Graphics().p("EABKArOIAA4cIBuAAIAAggMAmIAAAIAAY8g");
	var mask_graphics_60 = new cjs.Graphics().p("EABKArNIAAwmIBuAAIAAgVMAmIAAAIAAQ7g");
	var mask_graphics_61 = new cjs.Graphics().p("EABKArNIAAoxIBuAAIAAgLMAmIAAAIAAI8g");
	var mask_graphics_62 = new cjs.Graphics().p("EABKArMIAAg7IBuAAIAAgBMAmIAAAIAAA8g");
	var mask_graphics_63 = new cjs.Graphics().p("EABKArMIAAg7IBuAAIAAgBMAmIAAAIAAA8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_1,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_2,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_3,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_4,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_5,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_6,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_7,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_8,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_9,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_10,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_11,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_12,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_13,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_14,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_15,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_16,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_17,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_18,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_19,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_20,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_21,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_22,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_23,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_24,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_25,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_26,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_27,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_28,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_29,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_30,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_31,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_32,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_33,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_34,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_35,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_36,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_37,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_38,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_39,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_40,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_41,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_42,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_43,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_44,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_45,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_46,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_47,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_48,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_49,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_50,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_51,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_52,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_53,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_54,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_55,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_56,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_57,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_58,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_59,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_60,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_61,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_62,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_63,x:262.5,y:276.5}).wait(67));

	// animation
	this.instance_11 = new lib.bak2();
	this.instance_11.setTransform(381,304.5);

	this.instance_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(251,34.5,291,541);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(214,34.5,371,541), rect=new cjs.Rectangle(214,34.5,371,547.2), rect, rect=new cjs.Rectangle(214,34.5,371,549.6), rect, rect=new cjs.Rectangle(214,26.2,371,560), rect, rect=new cjs.Rectangle(214,34.5,371,547.2), rect, rect=new cjs.Rectangle(214,34.5,371,549.6), rect, rect=new cjs.Rectangle(214,26.2,371,560), rect, rect=new cjs.Rectangle(214,34.5,371,547.2), rect, rect=new cjs.Rectangle(214,34.5,371,549.6), rect, rect=new cjs.Rectangle(214,26.2,371,560), rect, rect=new cjs.Rectangle(214,34.5,371,541), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(208.6,34.5,376.4,541), new cjs.Rectangle(182.5,34.5,402.5,541), new cjs.Rectangle(156.4,34.5,428.6,541), new cjs.Rectangle(130.3,34.5,454.7,541), new cjs.Rectangle(104.2,34.5,480.8,541), new cjs.Rectangle(78.1,34.5,463.9,541), rect=new cjs.Rectangle(52,34.5,490,541), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(55,34.5,487,541), rect, rect, rect, rect, rect, rect, rect];


(lib.magic_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.smoke_4_mc();
	this.instance.setTransform(314,484.9,1,1,0,0,0,75,77.5);

	this.instance_1 = new lib.smoke_4_mc();
	this.instance_1.setTransform(510,295,1,1,0,0,0,75,77.5);

	this.instance_2 = new lib.smoke_4_mc();
	this.instance_2.setTransform(289,142.4,1,1,0,0,0,75,77.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},34).to({state:[]},47).wait(49));

	// animation
	this.instance_3 = new lib.flash4_img();
	this.instance_3.setTransform(239.4,73.6);

	this.instance_4 = new lib.flash5_img();
	this.instance_4.setTransform(240.9,63.1);

	this.instance_5 = new lib.flash6_img();
	this.instance_5.setTransform(243.6,26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},35).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[]},2).wait(77));

	// animation
	this.instance_6 = new lib.back_door2();
	this.instance_6.setTransform(519,311,1.398,1,0,0,0,43,4);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(66).to({scaleX:1,alpha:1},4).wait(4).to({scaleX:1.4,alpha:0.012},4).wait(52));

	// animation
	this.instance_7 = new lib.back_door1();
	this.instance_7.setTransform(517.5,304.5,1,1,0,0,0,119.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(64).to({scaleX:0.35},5).to({_off:true},1).wait(6).to({_off:false},0).to({scaleX:1},5).wait(49));

	// animation
	this.instance_8 = new lib.smoke_4_mc();
	this.instance_8.setTransform(164,411.4,1.453,1.453,0,0,0,75,77.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(108).to({_off:false},0).wait(22));

	// animation
	this.instance_9 = new lib.cronenberg2_1();
	this.instance_9.setTransform(396,335);
	this.instance_9.alpha = 0.012;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(45).to({_off:false},0).to({y:225,alpha:1},14).wait(10).to({x:145,y:405},11).wait(28).to({alpha:0.012},8).to({_off:true},1).wait(13));

	// animation
	this.instance_10 = new lib.bak3();
	this.instance_10.setTransform(381,304.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(130));

	// animation (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EABKArMIAAg7IBuAAIAAgBMAmIAAAIAAA8g");
	var mask_graphics_1 = new cjs.Graphics().p("EABKArMIAAjvIBuAAIAAgFMAmIAAAIAAD0g");
	var mask_graphics_2 = new cjs.Graphics().p("EABKArNIAAmkIBuAAIAAgJMAmIAAAIAAGtg");
	var mask_graphics_3 = new cjs.Graphics().p("EABKArNIAApZIBuAAIAAgMMAmIAAAIAAJlg");
	var mask_graphics_4 = new cjs.Graphics().p("EABKArNIAAsNIBuAAIAAgQMAmIAAAIAAMdg");
	var mask_graphics_5 = new cjs.Graphics().p("EABKArNIAAvCIBuAAIAAgTMAmIAAAIAAPVg");
	var mask_graphics_6 = new cjs.Graphics().p("EABKArNIAAx2IBuAAIAAgXMAmIAAAIAASNg");
	var mask_graphics_7 = new cjs.Graphics().p("EABKArOIAA0rIBuAAIAAgbMAmIAAAIAAVGg");
	var mask_graphics_8 = new cjs.Graphics().p("EABKArOIAA3gIBuAAIAAgeMAmIAAAIAAX+g");
	var mask_graphics_9 = new cjs.Graphics().p("EABKArOIAA6UIBuAAIAAgiMAmIAAAIAAa2g");
	var mask_graphics_10 = new cjs.Graphics().p("EABKArOIAA9JIBuAAIAAglMAmIAAAIAAdug");
	var mask_graphics_11 = new cjs.Graphics().p("EABKArOIAA/9IBuAAIAAgpMAmIAAAMAAAAgmg");
	var mask_graphics_12 = new cjs.Graphics().p("EABKArOMAAAgixIBuAAIAAgtMAmIAAAMAAAAjeg");
	var mask_graphics_13 = new cjs.Graphics().p("EABKArPMAAAglnIBuAAIAAgwMAmIAAAMAAAAmXg");
	var mask_graphics_14 = new cjs.Graphics().p("EABKArPMAAAgobIBuAAIAAg0MAmIAAAMAAAApPg");
	var mask_graphics_15 = new cjs.Graphics().p("EABKArPMAAAgrPIBuAAIAAg3MAmIAAAMAAAAsGg");
	var mask_graphics_16 = new cjs.Graphics().p("EABKArPMAAAguCIBuAAIAAg8MAmIAAAMAAAAu+g");
	var mask_graphics_17 = new cjs.Graphics().p("EABKArPMAAAgw2IBuAAIAAhAMAmIAAAMAAAAx2g");
	var mask_graphics_18 = new cjs.Graphics().p("EABKArQMAAAgzsIBuAAIAAhDMAmIAAAMAAAA0vg");
	var mask_graphics_19 = new cjs.Graphics().p("EABKArQMAAAg2gIBuAAIAAhHMAmIAAAMAAAA3ng");
	var mask_graphics_20 = new cjs.Graphics().p("EABKArQMAAAg5UIBuAAIAAhLMAmIAAAMAAAA6fg");
	var mask_graphics_21 = new cjs.Graphics().p("EABKArQMAAAg8JIBuAAIAAhOMAmIAAAMAAAA9Xg");
	var mask_graphics_22 = new cjs.Graphics().p("EABKArQMAAAg+9IBuAAIAAhSMAmIAAAMAAABAPg");
	var mask_graphics_23 = new cjs.Graphics().p("EABKArQMAAAhByIBuAAIAAhVMAmIAAAMAAABDHg");
	var mask_graphics_24 = new cjs.Graphics().p("EABKArRMAAAhEnIBuAAIAAhZMAmIAAAMAAABGAg");
	var mask_graphics_25 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_26 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_27 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_28 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_29 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_30 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_31 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_32 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_33 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_34 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_35 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_36 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_37 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_38 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_39 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_40 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_41 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_42 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_43 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_44 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_45 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_46 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_47 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_48 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_49 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_50 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_51 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_52 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_53 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_54 = new cjs.Graphics().p("EABKArQMAAAg/lIBuAAIAAhTMAmIAAAMAAABA4g");
	var mask_graphics_55 = new cjs.Graphics().p("EABKArQMAAAg3wIBuAAIAAhJMAmIAAAMAAAA45g");
	var mask_graphics_56 = new cjs.Graphics().p("EABKArPMAAAgv6IBuAAIAAg+MAmIAAAMAAAAw4g");
	var mask_graphics_57 = new cjs.Graphics().p("EABKArPMAAAgoHIBuAAIAAg0MAmIAAAMAAAAo7g");
	var mask_graphics_58 = new cjs.Graphics().p("EABKArOMAAAggRIBuAAIAAgqMAmIAAAMAAAAg7g");
	var mask_graphics_59 = new cjs.Graphics().p("EABKArOIAA4cIBuAAIAAggMAmIAAAIAAY8g");
	var mask_graphics_60 = new cjs.Graphics().p("EABKArNIAAwmIBuAAIAAgVMAmIAAAIAAQ7g");
	var mask_graphics_61 = new cjs.Graphics().p("EABKArNIAAoxIBuAAIAAgLMAmIAAAIAAI8g");
	var mask_graphics_62 = new cjs.Graphics().p("EABKArMIAAg7IBuAAIAAgBMAmIAAAIAAA8g");
	var mask_graphics_63 = new cjs.Graphics().p("EABKArMIAAg7IBuAAIAAgBMAmIAAAIAAA8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_1,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_2,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_3,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_4,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_5,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_6,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_7,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_8,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_9,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_10,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_11,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_12,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_13,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_14,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_15,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_16,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_17,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_18,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_19,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_20,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_21,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_22,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_23,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_24,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_25,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_26,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_27,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_28,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_29,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_30,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_31,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_32,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_33,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_34,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_35,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_36,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_37,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_38,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_39,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_40,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_41,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_42,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_43,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_44,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_45,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_46,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_47,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_48,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_49,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_50,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_51,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_52,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_53,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_54,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_55,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_56,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_57,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_58,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_59,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_60,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_61,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_62,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_63,x:262.5,y:276.5}).wait(67));

	// animation
	this.instance_11 = new lib.bak2();
	this.instance_11.setTransform(381,304.5);

	this.instance_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(251,34.5,291,541);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(214,34.5,371,541), rect=new cjs.Rectangle(214,34.5,371,547.2), rect, rect=new cjs.Rectangle(214,34.5,371,549.6), rect, rect=new cjs.Rectangle(214,26.2,371,560), rect, rect=new cjs.Rectangle(214,34.5,371,547.2), rect, rect=new cjs.Rectangle(214,34.5,371,549.6), rect, rect=new cjs.Rectangle(214,26.2,371,560), rect, rect=new cjs.Rectangle(214,34.5,371,547.2), rect, rect=new cjs.Rectangle(214,34.5,371,549.6), rect, rect=new cjs.Rectangle(214,26.2,371,560), rect, rect=new cjs.Rectangle(214,34.5,371,541), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(193.7,34.5,391.3,541), new cjs.Rectangle(170.9,34.5,414.1,541), new cjs.Rectangle(148.1,34.5,436.9,541), new cjs.Rectangle(125.3,34.5,459.7,541), new cjs.Rectangle(102.5,34.5,482.5,541), new cjs.Rectangle(79.6,34.5,505.4,541), new cjs.Rectangle(56.8,34.5,528.2,541), rect=new cjs.Rectangle(56.8,34.5,485.2,541), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(55,34.5,487,541), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.magic_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.smoke_4_mc();
	this.instance.setTransform(314,484.9,1,1,0,0,0,75,77.5);

	this.instance_1 = new lib.smoke_4_mc();
	this.instance_1.setTransform(510,295,1,1,0,0,0,75,77.5);

	this.instance_2 = new lib.smoke_4_mc();
	this.instance_2.setTransform(289,142.4,1,1,0,0,0,75,77.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},34).to({state:[]},47).wait(49));

	// animation
	this.instance_3 = new lib.flash4_img();
	this.instance_3.setTransform(239.4,73.6);

	this.instance_4 = new lib.flash5_img();
	this.instance_4.setTransform(240.9,63.1);

	this.instance_5 = new lib.flash6_img();
	this.instance_5.setTransform(243.6,26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},35).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[]},2).wait(77));

	// animation
	this.instance_6 = new lib.back_door2();
	this.instance_6.setTransform(519,311,1.398,1,0,0,0,43,4);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(66).to({scaleX:1,alpha:1},4).wait(4).to({scaleX:1.4,alpha:0.012},4).wait(52));

	// animation
	this.instance_7 = new lib.back_door1();
	this.instance_7.setTransform(517.5,304.5,1,1,0,0,0,119.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(64).to({scaleX:0.35},5).to({_off:true},1).wait(6).to({_off:false},0).to({scaleX:1},5).wait(49));

	// animation
	this.instance_8 = new lib.smoke_4_mc();
	this.instance_8.setTransform(164,411.4,1.453,1.453,0,0,0,75,77.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(108).to({_off:false},0).wait(22));

	// animation
	this.instance_9 = new lib.cronenberg1();
	this.instance_9.setTransform(400,326);
	this.instance_9.alpha = 0.012;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(45).to({_off:false},0).to({y:251,alpha:1},11).wait(8).to({x:166,y:391.9},8).wait(36).to({alpha:0.012},11).to({_off:true},1).wait(10));

	// animation
	this.instance_10 = new lib.bak3();
	this.instance_10.setTransform(381,304.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(130));

	// animation (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EABKArMIAAg7IBuAAIAAgBMAmIAAAIAAA8g");
	var mask_graphics_1 = new cjs.Graphics().p("EABKArMIAAjvIBuAAIAAgFMAmIAAAIAAD0g");
	var mask_graphics_2 = new cjs.Graphics().p("EABKArNIAAmkIBuAAIAAgJMAmIAAAIAAGtg");
	var mask_graphics_3 = new cjs.Graphics().p("EABKArNIAApZIBuAAIAAgMMAmIAAAIAAJlg");
	var mask_graphics_4 = new cjs.Graphics().p("EABKArNIAAsNIBuAAIAAgQMAmIAAAIAAMdg");
	var mask_graphics_5 = new cjs.Graphics().p("EABKArNIAAvCIBuAAIAAgTMAmIAAAIAAPVg");
	var mask_graphics_6 = new cjs.Graphics().p("EABKArNIAAx2IBuAAIAAgXMAmIAAAIAASNg");
	var mask_graphics_7 = new cjs.Graphics().p("EABKArOIAA0rIBuAAIAAgbMAmIAAAIAAVGg");
	var mask_graphics_8 = new cjs.Graphics().p("EABKArOIAA3gIBuAAIAAgeMAmIAAAIAAX+g");
	var mask_graphics_9 = new cjs.Graphics().p("EABKArOIAA6UIBuAAIAAgiMAmIAAAIAAa2g");
	var mask_graphics_10 = new cjs.Graphics().p("EABKArOIAA9JIBuAAIAAglMAmIAAAIAAdug");
	var mask_graphics_11 = new cjs.Graphics().p("EABKArOIAA/9IBuAAIAAgpMAmIAAAMAAAAgmg");
	var mask_graphics_12 = new cjs.Graphics().p("EABKArOMAAAgixIBuAAIAAgtMAmIAAAMAAAAjeg");
	var mask_graphics_13 = new cjs.Graphics().p("EABKArPMAAAglnIBuAAIAAgwMAmIAAAMAAAAmXg");
	var mask_graphics_14 = new cjs.Graphics().p("EABKArPMAAAgobIBuAAIAAg0MAmIAAAMAAAApPg");
	var mask_graphics_15 = new cjs.Graphics().p("EABKArPMAAAgrPIBuAAIAAg3MAmIAAAMAAAAsGg");
	var mask_graphics_16 = new cjs.Graphics().p("EABKArPMAAAguCIBuAAIAAg8MAmIAAAMAAAAu+g");
	var mask_graphics_17 = new cjs.Graphics().p("EABKArPMAAAgw2IBuAAIAAhAMAmIAAAMAAAAx2g");
	var mask_graphics_18 = new cjs.Graphics().p("EABKArQMAAAgzsIBuAAIAAhDMAmIAAAMAAAA0vg");
	var mask_graphics_19 = new cjs.Graphics().p("EABKArQMAAAg2gIBuAAIAAhHMAmIAAAMAAAA3ng");
	var mask_graphics_20 = new cjs.Graphics().p("EABKArQMAAAg5UIBuAAIAAhLMAmIAAAMAAAA6fg");
	var mask_graphics_21 = new cjs.Graphics().p("EABKArQMAAAg8JIBuAAIAAhOMAmIAAAMAAAA9Xg");
	var mask_graphics_22 = new cjs.Graphics().p("EABKArQMAAAg+9IBuAAIAAhSMAmIAAAMAAABAPg");
	var mask_graphics_23 = new cjs.Graphics().p("EABKArQMAAAhByIBuAAIAAhVMAmIAAAMAAABDHg");
	var mask_graphics_24 = new cjs.Graphics().p("EABKArRMAAAhEnIBuAAIAAhZMAmIAAAMAAABGAg");
	var mask_graphics_25 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_26 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_27 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_28 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_29 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_30 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_31 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_32 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_33 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_34 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_35 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_36 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_37 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_38 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_39 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_40 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_41 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_42 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_43 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_44 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_45 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_46 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_47 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_48 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_49 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_50 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_51 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_52 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_53 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_54 = new cjs.Graphics().p("EABKArQMAAAg/lIBuAAIAAhTMAmIAAAMAAABA4g");
	var mask_graphics_55 = new cjs.Graphics().p("EABKArQMAAAg3wIBuAAIAAhJMAmIAAAMAAAA45g");
	var mask_graphics_56 = new cjs.Graphics().p("EABKArPMAAAgv6IBuAAIAAg+MAmIAAAMAAAAw4g");
	var mask_graphics_57 = new cjs.Graphics().p("EABKArPMAAAgoHIBuAAIAAg0MAmIAAAMAAAAo7g");
	var mask_graphics_58 = new cjs.Graphics().p("EABKArOMAAAggRIBuAAIAAgqMAmIAAAMAAAAg7g");
	var mask_graphics_59 = new cjs.Graphics().p("EABKArOIAA4cIBuAAIAAggMAmIAAAIAAY8g");
	var mask_graphics_60 = new cjs.Graphics().p("EABKArNIAAwmIBuAAIAAgVMAmIAAAIAAQ7g");
	var mask_graphics_61 = new cjs.Graphics().p("EABKArNIAAoxIBuAAIAAgLMAmIAAAIAAI8g");
	var mask_graphics_62 = new cjs.Graphics().p("EABKArMIAAg7IBuAAIAAgBMAmIAAAIAAA8g");
	var mask_graphics_63 = new cjs.Graphics().p("EABKArMIAAg7IBuAAIAAgBMAmIAAAIAAA8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_1,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_2,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_3,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_4,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_5,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_6,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_7,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_8,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_9,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_10,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_11,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_12,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_13,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_14,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_15,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_16,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_17,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_18,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_19,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_20,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_21,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_22,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_23,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_24,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_25,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_26,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_27,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_28,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_29,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_30,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_31,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_32,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_33,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_34,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_35,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_36,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_37,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_38,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_39,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_40,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_41,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_42,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_43,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_44,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_45,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_46,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_47,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_48,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_49,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_50,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_51,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_52,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_53,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_54,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_55,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_56,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_57,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_58,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_59,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_60,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_61,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_62,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_63,x:262.5,y:276.5}).wait(67));

	// animation
	this.instance_11 = new lib.bak2();
	this.instance_11.setTransform(381,304.5);

	this.instance_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(251,34.5,291,541);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(214,34.5,371,541), rect=new cjs.Rectangle(214,34.5,371,547.2), rect, rect=new cjs.Rectangle(214,34.5,371,549.6), rect, rect=new cjs.Rectangle(214,26.2,371,560), rect, rect=new cjs.Rectangle(214,34.5,371,547.2), rect, rect=new cjs.Rectangle(214,34.5,371,549.6), rect, rect=new cjs.Rectangle(214,26.2,371,560), rect, rect=new cjs.Rectangle(214,34.5,371,547.2), rect, rect=new cjs.Rectangle(214,34.5,371,549.6), rect, rect=new cjs.Rectangle(214,26.2,371,560), rect, rect=new cjs.Rectangle(214,34.5,371,541), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(198.2,34.5,386.8,541), new cjs.Rectangle(168.9,34.5,416.1,541), new cjs.Rectangle(139.7,34.5,445.3,541), new cjs.Rectangle(110.4,34.5,474.6,541), new cjs.Rectangle(81.2,34.5,503.8,541), rect=new cjs.Rectangle(51.9,34.5,533.1,541), rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(51.9,34.5,490.1,541), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(55,34.5,487,541), rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.items_inventory_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.eye2_1_img();
	this.instance.setTransform(-26,-24);

	this.instance_1 = new lib.head0_img();
	this.instance_1.setTransform(-40,-37,0.513,0.513);

	this.instance_2 = new lib.big_lips_img();
	this.instance_2.setTransform(-32,-16,0.533,0.534);

	this.instance_3 = new lib.ingridient4();

	this.instance_4 = new lib.ingridient5();

	this.instance_5 = new lib.ingridient6();

	this.instance_6 = new lib.icon_ingredient_7_img();
	this.instance_6.setTransform(-33,-45);

	this.instance_7 = new lib.icon_ingredient_8_img();
	this.instance_7.setTransform(-28,-38,0.949,0.95);

	this.instance_8 = new lib.battery_img();
	this.instance_8.setTransform(-39,-38,0.808,0.808);

	this.instance_9 = new lib.ingridient10();
	this.instance_9.setTransform(0,1,0.678,0.678);

	this.instance_10 = new lib.ingridient11();
	this.instance_10.setTransform(0,0,0.833,0.833);

	this.instance_11 = new lib.ingridient12();
	this.instance_11.setTransform(0,2.5);

	this.instance_12 = new lib.icon_ingredient_13_img();
	this.instance_12.setTransform(-30,-39,0.8,0.8);

	this.instance_13 = new lib.icon_ingredient_14_img();
	this.instance_13.setTransform(-40,-37,0.734,0.734);

	this.instance_14 = new lib.icon_ingredient_15_img();
	this.instance_14.setTransform(-21,-40,0.8,0.8);

	this.instance_15 = new lib.icon_ingredient_16_img();
	this.instance_15.setTransform(-40,-42,0.727,0.727);

	this.instance_16 = new lib.icon_ingredient_17_img();
	this.instance_16.setTransform(-39,-40,0.667,0.667);

	this.instance_17 = new lib.icon_ingredient_18_img();
	this.instance_17.setTransform(-39,-40,0.667,0.667);

	this.instance_18 = new lib.icon_ingredient_19_img();
	this.instance_18.setTransform(-35,-25,0.583,0.584);

	this.instance_19 = new lib.icon_ingredient_20_img();
	this.instance_19.setTransform(-29,-40,0.666,0.667);

	this.instance_20 = new lib.closes_all();
	this.instance_20.setTransform(-2.7,-8.5,0.741,0.741);

	this.instance_21 = new lib.icon_ingredient_22_img();
	this.instance_21.setTransform(-25,-40,0.727,0.727);

	this.instance_22 = new lib.horn_img();
	this.instance_22.setTransform(-35,-34,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).wait(1));

	// bg
	this.instance_23 = new lib.bg_item_inventory_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.inventory_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// items
	this.item_2_mc = new lib.items_inventory_mc();
	this.item_2_mc.setTransform(90,0,0.889,0.889);

	this.item_0_mc = new lib.items_inventory_mc();

	this.item_1_mc = new lib.items_inventory_mc();
	this.item_1_mc.setTransform(-90,0,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item_1_mc},{t:this.item_0_mc},{t:this.item_2_mc}]}).wait(1));

	// bg
	this.instance = new lib.bg_inventory_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-60,290,120);
p.frameBounds = [rect];


(lib.ingridient19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// banca2
	this.instance = new lib.banca2();
	this.instance.setTransform(0,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// banca1
	this.instance_1 = new lib.banca1();
	this.instance_1.setTransform(-1,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// Слой 8
	this.instance_2 = new lib.bubble2();
	this.instance_2.setTransform(30.1,55.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({_off:false},0).wait(44));

	// Слой 7
	this.instance_3 = new lib.bubble2();
	this.instance_3.setTransform(-28.4,62.1,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

	// Слой 6
	this.instance_4 = new lib.bubble2();
	this.instance_4.setTransform(-1.9,41.1,0.636,0.636,0,0,180);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).wait(52));

	// Слой 1
	this.instance_5 = new lib.bubble2();
	this.instance_5.setTransform(30.1,55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(60));

	// Слой 2
	this.instance_6 = new lib.brain();
	this.instance_6.setTransform(0,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.5,-110,135,220);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.ingridient18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hair1
	this.instance = new lib.hair1();
	this.instance.setTransform(-1.8,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// eyes2
	this.instance_1 = new lib.eyes2();
	this.instance_1.setTransform(0.7,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// ingridient3
	this.instance_2 = new lib.ingridient3();
	this.instance_2.setTransform(0.3,32.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// ingridient2
	this.instance_3 = new lib.ingridient2();
	this.instance_3.setTransform(0.9,-17.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// hairall
	this.instance_4 = new lib.hairall2();
	this.instance_4.setTransform(0,-9.5,1,1,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145.8,-147.1,291.6,302.9);
p.frameBounds = [rect];


(lib.ingridient17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hair1
	this.instance = new lib.hair1();
	this.instance.setTransform(-1.8,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hairall
	this.instance_1 = new lib.hairall2();
	this.instance_1.setTransform(0,-9.5,1,1,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145.8,-147.1,291.6,302.9);
p.frameBounds = [rect];


(lib.ingridient14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes1();
	this.instance.setTransform(-0.2,17.6);

	this.instance_1 = new lib.ingridient3();
	this.instance_1.setTransform(-0.5,51.3);

	this.instance_2 = new lib.ingridient2();
	this.instance_2.setTransform(0,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78,-71.5,156,143);
p.frameBounds = [rect];


(lib.ingridient1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// banca2
	this.instance = new lib.banca2();
	this.instance.setTransform(0,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// banca1
	this.instance_1 = new lib.banca1();
	this.instance_1.setTransform(-1,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// Слой 8
	this.instance_2 = new lib.bubble2();
	this.instance_2.setTransform(30.1,55.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({_off:false},0).wait(44));

	// Слой 7
	this.instance_3 = new lib.bubble2();
	this.instance_3.setTransform(-28.4,62.1,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

	// Слой 6
	this.instance_4 = new lib.bubble2();
	this.instance_4.setTransform(-1.9,41.1,0.636,0.636,0,0,180);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).wait(52));

	// Слой 1
	this.instance_5 = new lib.bubble2();
	this.instance_5.setTransform(30.1,55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(60));

	// eye1
	this.instance_6 = new lib.eye1();
	this.instance_6.setTransform(-12.7,29.4,1,1,0,-30,150,4,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:25.4},14).to({y:29.4},15).to({y:25.4},15).to({y:29.4},15).wait(1));

	// eye1
	this.instance_7 = new lib.eye1();
	this.instance_7.setTransform(16.4,-38.5,1,1,30,0,0,4,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:-42.5},14).to({y:-38.5},15).to({y:-42.5},15).to({y:-38.5},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.5,-110,135,220);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.ingredient_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ingridient19();
	this.instance.setTransform(0,0,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzMfIAA4+IPnAAIAAY+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-80,100,160);
p.frameBounds = [rect];


(lib.ingredient_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ingridient18();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsMgIAA4/IXZAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-80,150,160);
p.frameBounds = [rect];


(lib.ingredient_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ingridient17();
	this.instance.setTransform(0,30,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsMgIAA4/IXZAAIAAY/g");
	this.shape.setTransform(0,32);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-48,150,160);
p.frameBounds = [rect];


(lib.ingredient_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ingridient14();
	this.instance.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGoQiwiwAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCwQivCvj4AAQj3AAiwivg");
	this.shape.setTransform(0,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-58.5,120,120);
p.frameBounds = [rect];


(lib.ingredient_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ingridient1();
	this.instance.setTransform(0,0,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzMfIAA4+IPnAAIAAY+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-80,100,160);
p.frameBounds = [rect];


(lib.hero_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hair1
	this.instance = new lib.hair1();
	this.instance.setTransform(-1.8,-128.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// earring2
	this.instance_1 = new lib.earring2();
	this.instance_1.setTransform(66.7,-101.9,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// earring1
	this.instance_2 = new lib.earring1();
	this.instance_2.setTransform(-63.8,-101.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// dress1
	this.instance_3 = new lib.dress1();
	this.instance_3.setTransform(2.7,-6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// shoe1
	this.instance_4 = new lib.shoe1();
	this.instance_4.setTransform(31.9,257.6,1,1,0,0,180,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// shoe1
	this.instance_5 = new lib.shoe1();
	this.instance_5.setTransform(-25.5,257.6,1,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// eye1
	this.instance_6 = new lib.eyes2();
	this.instance_6.setTransform(0.7,-145.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// lips
	this.instance_7 = new lib.ingridient3();
	this.instance_7.setTransform(0.3,-112.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// head0
	this.instance_8 = new lib.ingridient2();
	this.instance_8.setTransform(0.9,-162.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// body_1
	this.instance_9 = new lib.ingridient13();
	this.instance_9.setTransform(3.8,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// hip2
	this.instance_10 = new lib.hip2();
	this.instance_10.setTransform(28.8,91.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// hip1
	this.instance_11 = new lib.hip1();
	this.instance_11.setTransform(-23.6,91.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// leg_down2
	this.instance_12 = new lib.leg_down2();
	this.instance_12.setTransform(34.2,173.6,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// leg_down1
	this.instance_13 = new lib.leg_down1();
	this.instance_13.setTransform(-28.6,173.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// foot2
	this.instance_14 = new lib.foot2();
	this.instance_14.setTransform(28.3,242.1,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// foot1
	this.instance_15 = new lib.foot1();
	this.instance_15.setTransform(-22.4,242.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

	// shoulder2
	this.instance_16 = new lib.shoulder2();
	this.instance_16.setTransform(36.9,-42.6,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// shoulder1
	this.instance_17 = new lib.shoulder1();
	this.instance_17.setTransform(-34.6,-40.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1));

	// predpl2
	this.instance_18 = new lib.predpl2();
	this.instance_18.setTransform(49.3,13.9,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1));

	// predpl1
	this.instance_19 = new lib.predpl1();
	this.instance_19.setTransform(-47.2,14.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

	// palm2
	this.instance_20 = new lib.palm2();
	this.instance_20.setTransform(65.2,66.6,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

	// palm1
	this.instance_21 = new lib.palm1();
	this.instance_21.setTransform(-62.8,67.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1));

	// hairall
	this.instance_22 = new lib.hairall();
	this.instance_22.setTransform(0,-153.9,1,1,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-147.7,-300.1,295.5,600.6);
p.frameBounds = [rect];


(lib.heart21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.heart();
	this.instance.setTransform(0,0,0.557,0.557);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-16},19).to({y:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.8,-47.6,99.4,109.9);
p.frameBounds = [rect, new cjs.Rectangle(-49.8,-48.4,99.4,109.9), new cjs.Rectangle(-49.8,-49.3,99.4,109.9), new cjs.Rectangle(-49.8,-50.1,99.4,109.9), new cjs.Rectangle(-49.8,-50.9,99.4,109.9), new cjs.Rectangle(-49.8,-51.8,99.4,109.9), new cjs.Rectangle(-49.8,-52.6,99.4,109.9), new cjs.Rectangle(-49.8,-53.5,99.4,109.9), new cjs.Rectangle(-49.8,-54.3,99.4,109.9), new cjs.Rectangle(-49.8,-55.2,99.4,109.9), new cjs.Rectangle(-49.8,-56,99.4,109.9), new cjs.Rectangle(-49.8,-56.8,99.4,109.9), new cjs.Rectangle(-49.8,-57.7,99.4,109.9), new cjs.Rectangle(-49.8,-58.5,99.4,109.9), new cjs.Rectangle(-49.8,-59.4,99.4,109.9), new cjs.Rectangle(-49.8,-60.2,99.4,109.9), new cjs.Rectangle(-49.8,-61,99.4,109.9), new cjs.Rectangle(-49.8,-61.9,99.4,109.9), new cjs.Rectangle(-49.8,-62.7,99.4,109.9), new cjs.Rectangle(-49.8,-63.6,99.4,109.9), new cjs.Rectangle(-49.8,-62.8,99.4,109.9), new cjs.Rectangle(-49.8,-62,99.4,109.9), new cjs.Rectangle(-49.8,-61.2,99.4,109.9), new cjs.Rectangle(-49.8,-60.4,99.4,109.9), new cjs.Rectangle(-49.8,-59.6,99.4,109.9), new cjs.Rectangle(-49.8,-58.8,99.4,109.9), new cjs.Rectangle(-49.8,-58,99.4,109.9), new cjs.Rectangle(-49.8,-57.2,99.4,109.9), new cjs.Rectangle(-49.8,-56.4,99.4,109.9), new cjs.Rectangle(-49.8,-55.6,99.4,109.9), new cjs.Rectangle(-49.8,-54.8,99.4,109.9), new cjs.Rectangle(-49.8,-54,99.4,109.9), new cjs.Rectangle(-49.8,-53.2,99.4,109.9), new cjs.Rectangle(-49.8,-52.4,99.4,109.9), new cjs.Rectangle(-49.8,-51.6,99.4,109.9), new cjs.Rectangle(-49.8,-50.8,99.4,109.9), new cjs.Rectangle(-49.8,-50,99.4,109.9), new cjs.Rectangle(-49.8,-49.2,99.4,109.9), new cjs.Rectangle(-49.8,-48.4,99.4,109.9), new cjs.Rectangle(-49.8,-47.6,99.4,109.9)];


(lib.com_text3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.colba21();
	this.instance.setTransform(46.3,20.3);

	this.instance_1 = new lib.colba11();
	this.instance_1.setTransform(-49.9,28.4);

	this.instance_2 = new lib.think_img();
	this.instance_2.setTransform(-32.6,-57.9,0.62,0.62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_3 = new lib.comics_text1_img();
	this.instance_3.setTransform(-120.5,-112);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.5,-112,241,224);
p.frameBounds = [rect];


(lib.cartoon_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.com_text3();
	this.instance.setTransform(279,167.4,0.545,0.545);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},10).wait(1));

	// animation
	this.instance_1 = new lib.lamp_idea2();
	this.instance_1.setTransform(-5.7,-205.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

	// animation
	this.instance_2 = new lib.com_text1();
	this.instance_2.setTransform(-260.5,157.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80));

	// animation
	this.instance_3 = new lib.comics_part1();
	this.instance_3.setTransform(-252.4,0,1,1,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(80));

	// animation
	this.instance_4 = new lib.comics_part2();
	this.instance_4.setTransform(-0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(80));

	// animation
	this.instance_5 = new lib.comics_part3();
	this.instance_5.setTransform(612.2,0,1,1,0,0,0,-0.2,0);
	this.instance_5.alpha = 0.012;

	this.instance_6 = new lib.comics_part3_1();
	this.instance_6.setTransform(252.3,0,1,1,0,0,0,-0.2,0);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:252.3,alpha:1},14).to({_off:true},1).wait(65));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},1).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-434.6,-334,1298.9,749.5);
p.frameBounds = [rect, new cjs.Rectangle(-434.6,-334,1161.6,749.5), new cjs.Rectangle(-434.6,-334,1135.9,749.5), new cjs.Rectangle(-434.6,-334,1110.2,749.5), new cjs.Rectangle(-434.6,-334,1084.5,749.5), new cjs.Rectangle(-434.6,-334,1058.8,749.5), new cjs.Rectangle(-434.6,-334,1033.1,749.5), new cjs.Rectangle(-434.6,-334,1007.4,749.5), new cjs.Rectangle(-434.6,-334,981.6,749.5), new cjs.Rectangle(-434.6,-334,955.9,749.5), new cjs.Rectangle(-434.6,-334,930.2,749.5), new cjs.Rectangle(-434.6,-334,904.5,749.5), new cjs.Rectangle(-434.6,-334,878.8,749.5), new cjs.Rectangle(-434.6,-334,853.1,749.5), rect=new cjs.Rectangle(-434.6,-334,938.9,749.5), rect, rect=new cjs.Rectangle(-434.6,-334,827.4,749.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-434.6,-334,828.6,749.5), new cjs.Rectangle(-434.6,-334,938.9,749.5)];


(lib.CurtainScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.curtain_0_mc();
	this.body_mc.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1200,0,3200,600);
p.frameBounds = [rect];


(lib.CopyrightScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// screen
	this.screen_mc = new lib.copyright_2_mc();
	this.screen_mc.setTransform(1000,600,1,1,0,0,0,600,300);

	this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

	// bg
	this.instance = new lib.copyright_1_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.SimpleExplosionMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2021 edapskov v 1.0
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
		var body_mc = this.body_mc;
		body_mc.gotoAndStop(0);
		var example_mc = body_mc.example_mc;
		example_mc.gotoAndStop(0);
		example_mc.visible = false;
		/*
		переменные
		*/
		var _that = this;
		var _maxSpeed_num = 5;
		var _minParticles_num = 15;
		var _maxParticles_num = 30;
		var _particlesTotal_num;
		var _particlesRange_num = 250;
		/*
		функция добавления частиц
		*/
		function _createSimpleExplosionFunc()
		{
			/*
			
			*/
			_particlesTotal_num = _randRangeFunc(_minParticles_num, _maxParticles_num);
			/*
			
			*/
			var particle_mc;
			var size_num;
			var i = 0;
			/*
			
			*/
			while (i < _particlesTotal_num)
			{
				/*
				
				*/
				var particle_mc = new lib.ParticleSimpleExplosionMC();
				body_mc.addChild(particle_mc);
				particle_mc.gotoAndStop(0);
				particle_mc.gotoAndStop(_randRangeFunc(0, particle_mc.totalFrames - 1));
				particle_mc.x = 0;
				particle_mc.y = 0;
				particle_mc.rotation = Math.random() * 360;
				particle_mc.scale = Math.random() * 0.5 + 0.5;
				particle_mc.alpha = Math.random() * 0.5 + 0.5;
				/*
				
				*/
				particle_mc.boundyLeft_num = - _particlesRange_num;
				particle_mc.boundyTop_num = - _particlesRange_num;
				particle_mc.boundyRight_num = _particlesRange_num;
				particle_mc.boundyBottom_num = _particlesRange_num;
				/*
				
				*/
				particle_mc.speedX_num = _randRangeFunc(-_maxSpeed_num, _maxSpeed_num);
				particle_mc.speedY_num = _randRangeFunc(-_maxSpeed_num, _maxSpeed_num);
				/*
				
				*/
				particle_mc.addEventListener("tick", _onTickParticleFunc, false);
				/*
				
				*/
				i++;
			}
		}
		/*
		обновляем в каждом кадре
		*/
		function _onTickParticleFunc(event)
		{
			/*
			получаем частицу
			*/
			var target_mc = event.target;
			//target_mc.gotoAndStop(0);
			/*
			
			*/
			target_mc.alpha -= 0.02;
			target_mc.x += target_mc.speedX_num;
			target_mc.y += target_mc.speedY_num;
			/*
			
			*/
			if (target_mc.alpha <= 0 ||	target_mc.x < target_mc.boundyLeft_num || target_mc.x > target_mc.boundyRight_num || target_mc.y < target_mc.boundyTop_num || target_mc.y > target_mc.boundyBottom_num)
			{
				/*
				
				*/
				target_mc.parent.removeChild(target_mc);
				/*
				
				*/
				_particlesTotal_num--;
				if(_particlesTotal_num <= 0)
				{
					_that.parent.removeChild(_that);
				}
			}
		}
		/*
		
		*/
		function _randRangeFunc(min_num, max_num)
		{
			var rand_num = Math.floor(Math.random() * (max_num - min_num + 1)) + min_num;
			return rand_num;
		}
		/*
		запускаем
		*/
		_createSimpleExplosionFunc();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.simple_explosion_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.GravityExplosionMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2019 edapskov v 1.0
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
		var body_mc = this.body_mc;
		body_mc.gotoAndStop(0);
		var example_mc = body_mc.example_mc;
		example_mc.gotoAndStop(0);
		example_mc.visible = false;
		/*
		переменные
		*/
		var _that = this;
		var _particleMaxSpeed_num = 4;
		var _particleFadeSpeed_num = 0.01;
		var _particleTotal_num = 25;
		var _particleRange_num = 100;
		var _gravity_num = 0.4;
		/*
		функция добавления частиц
		*/
		function _createExplosionFunc()
		{
			/*
			
			*/
			var particle_mc;
			var i = 0;
			/*
			
			*/
			while (i < _particleTotal_num)
			{
				/*
				
				*/
				var particle_mc = new lib.ParticleGravityExplosionMC();
				body_mc.addChild(particle_mc);
				particle_mc.gotoAndStop(0);
				particle_mc.gotoAndStop(Math.floor(Math.random() * particle_mc.totalFrames));
				particle_mc.x = 0;
				particle_mc.y = 0;
				particle_mc.rotation = Math.random() * 360;
				particle_mc.alpha = Math.random() * (1 - 0.5) + 0.5;
				/*
				
				*/
				particle_mc.boundyLeft_num = - _particleRange_num;
				particle_mc.boundyTop_num = - _particleRange_num;
				particle_mc.boundyRight_num = _particleRange_num;
				particle_mc.boundyBottom_num = _particleRange_num;
				/*
				
				*/
				particle_mc.speedX_num = Math.random() * _particleMaxSpeed_num - Math.random() * _particleMaxSpeed_num;
				particle_mc.speedY_num = Math.random() * _particleMaxSpeed_num - (Math.random() * _particleMaxSpeed_num);
				particle_mc.speedX_num *= _particleMaxSpeed_num;
				particle_mc.speedY_num *= _particleMaxSpeed_num;
				/*
				
				*/
				particle_mc.fadeSpeed_num = Math.random() * _particleFadeSpeed_num;
				/*
				
				*/
				particle_mc.addEventListener("tick", _onTickParticleFunc, false);
				/*
				
				*/
				i++;
			}
		}
		/*
		обновляем в каждом кадре
		*/
		function _onTickParticleFunc(event)
		{
			/*
			получаем частицу
			*/
			var target_mc = event.target;
			//target_mc.gotoAndStop(0);
			/*
			
			*/
			target_mc.alpha -= target_mc.fadeSpeed_num;
			target_mc.x += target_mc.speedX_num;
			target_mc.y += target_mc.speedY_num;
			/*
			
			*/
			if(target_mc.speedY_num < _particleMaxSpeed_num)
			{
				target_mc.speedY_num += _gravity_num;
			}
			/*
			
			*/
			if (target_mc.alpha <= 0 ||	target_mc.x < target_mc.boundyLeft_num || target_mc.x > target_mc.boundyRight_num || target_mc.y < target_mc.boundyTop_num || target_mc.y > target_mc.boundyBottom_num)
			{
				/*
				
				*/
				target_mc.parent.removeChild(target_mc);
				/*
				
				*/
				_particleTotal_num--;
				if(_particleTotal_num <= 0)
				{
					_that.parent.removeChild(_that);
				}
			}
		}
		/*
		запускаем
		*/
		_createExplosionFunc();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.gravity_explosion_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.blinking_light_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2019 edapskov v 1.0
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
		/*
		
		*/
		var _body_mc = this.body_mc;
		_body_mc.gotoAndStop(0);
		_body_mc.visible = false;
		/*
		
		*/
		var timeOut_id = setTimeout(_startAnimationBlinkingLightFunc, Math.random() * 2000);
		function _startAnimationBlinkingLightFunc()
		{
			/*
			
			*/
			clearTimeout(timeOut_id);
			/*
			
			*/
			_body_mc.play();
			_body_mc.visible = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.blinking_light_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.sound_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// icon
	this.instance = new lib.sound_1_mc();

	this.instance_1 = new lib.sound_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.instance_2 = new lib.bg_small_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect];


(lib.play_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_0_mc();
	this.instance.setTransform(0,0,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-90,-90,180,180)];


(lib.photo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_0_mc();
	this.instance.setTransform(0,0,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-90,-90,180,180)];


(lib.next_mc_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance_1 = new lib.next_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.next_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// animation
	this.animation_mc = new lib.animation_for_next_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.02)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.more_games_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApNOEQhXgBg9g9Qg9g+gBhWIAA1jQABhWA9g+QA9g9BXgBISbAAQBWABA+A9QA9A+ABBWIAAVjQgBBWg9A+Qg+A9hWABg");
	this.shape.setTransform(0,-9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-99,160,180);
p.frameBounds = [rect];


(lib.more_games_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-99,160,180);
p.frameBounds = [rect, rect, rect, rect];


(lib.logo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.logo_0_mc();
	this.instance.setTransform(0,0,0.909,0.909);

	this.instance_1 = new lib.logo_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.909,scaleY:0.909,alpha:0.801}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,alpha:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-372.6,-230.8,472.7,461.7);
p.frameBounds = [rect, new cjs.Rectangle(-110,-40,220,80), new cjs.Rectangle(-100,-36.3,200,72.7), new cjs.Rectangle(-110,-40,220,80)];


(lib.instruction_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.instruction_0_mc();
	this.instance.setTransform(0,0,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-90,-90,180,180)];


(lib.free_games_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.free_games_0_mc();
	this.instance.setTransform(0,0,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect, new cjs.Rectangle(-60,-60,120,120), new cjs.Rectangle(-55,-55,110,110), new cjs.Rectangle(-60,-60,120,120)];


(lib.credits_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.credits_0_mc();
	this.instance.setTransform(0,0,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect, new cjs.Rectangle(-60,-60,120,120), new cjs.Rectangle(-55,-55,110,110), new cjs.Rectangle(-60,-60,120,120)];


(lib.again_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.again_0_mc();
	this.instance.setTransform(0,0,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-90,-90,180,180)];


(lib.RedirectScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.redirect_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.PreloaderScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_mc = new lib.preloader_5_mc();
	this.logo_mc.setTransform(400,260);

	this.timeline.addTween(cjs.Tween.get(this.logo_mc).wait(1));

	// play
	this.play_mc = new lib.preloader_12_mc();
	this.play_mc.setTransform(400,495);

	this.timeline.addTween(cjs.Tween.get(this.play_mc).wait(1));

	// indicator
	this.indicator_mc = new lib.preloader_9_mc();
	this.indicator_mc.setTransform(400,495);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// bg
	this.bg_mc = new lib.preloader_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(400.5,900.5,0.75,0.75,0,0,0,0.7,0.7);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,1000);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(110.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(400,820,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(590,550,0.727,0.727);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(710,510);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.play_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.social_network_mc}]}).wait(1));

	// title
	this.instance = new lib.animation_title_mc();
	this.instance.setTransform(400,460,0.821,0.82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.398;
	this.instance_1.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.thunder_comp = new lib.thunder_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.thunder_comp).wait(1));

	// heroes
	this.instance_2 = new lib.heroes_0_mc();
	this.instance_2.setTransform(325.7,308.5,1,1,0,0,0,325.7,308.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.instance_3 = new lib.background_1_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1361.9);
p.frameBounds = [rect];


(lib.product_progress_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"show":0,"hide":1});

	// graph
	this.instance = new lib.hero_mc();
	this.instance.setTransform(0.1,0.2,0.916,0.916,0,0,0,0.1,0.2);

	this.instance_1 = new lib.product_0_7_img();
	this.instance_1.setTransform(-151,-282,0.891,0.891);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135.2,-274.7,270.5,549.9);
p.frameBounds = [rect, new cjs.Rectangle(-151,-282,302.8,570)];


(lib.magic_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero_mc();
	this.instance.setTransform(133,299.2,0.781,0.781);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({_off:false},0).to({scaleX:0.97,scaleY:0.97,x:395,y:300},15).wait(1));

	// animation
	this.instance_1 = new lib.smoke_4_mc();
	this.instance_1.setTransform(314,484.9,1,1,0,0,0,75,77.5);

	this.instance_2 = new lib.smoke_4_mc();
	this.instance_2.setTransform(510,295,1,1,0,0,0,75,77.5);

	this.instance_3 = new lib.smoke_4_mc();
	this.instance_3.setTransform(289,142.4,1,1,0,0,0,75,77.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},34).to({state:[]},47).wait(9));

	// animation
	this.instance_4 = new lib.flash4_img();
	this.instance_4.setTransform(239.4,73.6);

	this.instance_5 = new lib.flash5_img();
	this.instance_5.setTransform(240.9,63.1);

	this.instance_6 = new lib.flash6_img();
	this.instance_6.setTransform(243.6,26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},35).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[]},2).wait(37));

	// animation
	this.instance_7 = new lib.back_door2();
	this.instance_7.setTransform(519,311,1.398,1,0,0,0,43,4);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(66).to({scaleX:1,alpha:1},4).wait(20));

	// animation
	this.instance_8 = new lib.back_door1();
	this.instance_8.setTransform(517.5,304.5,1,1,0,0,0,119.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(64).to({scaleX:0.35},5).to({_off:true},1).wait(20));

	// animation
	this.instance_9 = new lib.hero_mc();
	this.instance_9.setTransform(396,299.2,0.781,0.781);
	this.instance_9.alpha = 0.012;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(46).to({_off:false},0).to({alpha:1},12).wait(11).to({x:133},5).to({_off:true},1).wait(15));

	// animation
	this.instance_10 = new lib.bak3();
	this.instance_10.setTransform(381,304.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(90));

	// animation (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EABKArMIAAg7IBuAAIAAgBMAmIAAAIAAA8g");
	var mask_graphics_1 = new cjs.Graphics().p("EABKArMIAAjvIBuAAIAAgFMAmIAAAIAAD0g");
	var mask_graphics_2 = new cjs.Graphics().p("EABKArNIAAmkIBuAAIAAgJMAmIAAAIAAGtg");
	var mask_graphics_3 = new cjs.Graphics().p("EABKArNIAApZIBuAAIAAgMMAmIAAAIAAJlg");
	var mask_graphics_4 = new cjs.Graphics().p("EABKArNIAAsNIBuAAIAAgQMAmIAAAIAAMdg");
	var mask_graphics_5 = new cjs.Graphics().p("EABKArNIAAvCIBuAAIAAgTMAmIAAAIAAPVg");
	var mask_graphics_6 = new cjs.Graphics().p("EABKArNIAAx2IBuAAIAAgXMAmIAAAIAASNg");
	var mask_graphics_7 = new cjs.Graphics().p("EABKArOIAA0rIBuAAIAAgbMAmIAAAIAAVGg");
	var mask_graphics_8 = new cjs.Graphics().p("EABKArOIAA3gIBuAAIAAgeMAmIAAAIAAX+g");
	var mask_graphics_9 = new cjs.Graphics().p("EABKArOIAA6UIBuAAIAAgiMAmIAAAIAAa2g");
	var mask_graphics_10 = new cjs.Graphics().p("EABKArOIAA9JIBuAAIAAglMAmIAAAIAAdug");
	var mask_graphics_11 = new cjs.Graphics().p("EABKArOIAA/9IBuAAIAAgpMAmIAAAMAAAAgmg");
	var mask_graphics_12 = new cjs.Graphics().p("EABKArOMAAAgixIBuAAIAAgtMAmIAAAMAAAAjeg");
	var mask_graphics_13 = new cjs.Graphics().p("EABKArPMAAAglnIBuAAIAAgwMAmIAAAMAAAAmXg");
	var mask_graphics_14 = new cjs.Graphics().p("EABKArPMAAAgobIBuAAIAAg0MAmIAAAMAAAApPg");
	var mask_graphics_15 = new cjs.Graphics().p("EABKArPMAAAgrPIBuAAIAAg3MAmIAAAMAAAAsGg");
	var mask_graphics_16 = new cjs.Graphics().p("EABKArPMAAAguCIBuAAIAAg8MAmIAAAMAAAAu+g");
	var mask_graphics_17 = new cjs.Graphics().p("EABKArPMAAAgw2IBuAAIAAhAMAmIAAAMAAAAx2g");
	var mask_graphics_18 = new cjs.Graphics().p("EABKArQMAAAgzsIBuAAIAAhDMAmIAAAMAAAA0vg");
	var mask_graphics_19 = new cjs.Graphics().p("EABKArQMAAAg2gIBuAAIAAhHMAmIAAAMAAAA3ng");
	var mask_graphics_20 = new cjs.Graphics().p("EABKArQMAAAg5UIBuAAIAAhLMAmIAAAMAAAA6fg");
	var mask_graphics_21 = new cjs.Graphics().p("EABKArQMAAAg8JIBuAAIAAhOMAmIAAAMAAAA9Xg");
	var mask_graphics_22 = new cjs.Graphics().p("EABKArQMAAAg+9IBuAAIAAhSMAmIAAAMAAABAPg");
	var mask_graphics_23 = new cjs.Graphics().p("EABKArQMAAAhByIBuAAIAAhVMAmIAAAMAAABDHg");
	var mask_graphics_24 = new cjs.Graphics().p("EABKArRMAAAhEnIBuAAIAAhZMAmIAAAMAAABGAg");
	var mask_graphics_25 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_26 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_27 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_28 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_29 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_30 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_31 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_32 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_33 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_34 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_35 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_36 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_37 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_38 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_39 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_40 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_41 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_42 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_43 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_44 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_45 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_46 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_47 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_48 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_49 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_50 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_51 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_52 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_53 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_54 = new cjs.Graphics().p("EABKArQMAAAg/lIBuAAIAAhTMAmIAAAMAAABA4g");
	var mask_graphics_55 = new cjs.Graphics().p("EABKArQMAAAg3wIBuAAIAAhJMAmIAAAMAAAA45g");
	var mask_graphics_56 = new cjs.Graphics().p("EABKArPMAAAgv6IBuAAIAAg+MAmIAAAMAAAAw4g");
	var mask_graphics_57 = new cjs.Graphics().p("EABKArPMAAAgoHIBuAAIAAg0MAmIAAAMAAAAo7g");
	var mask_graphics_58 = new cjs.Graphics().p("EABKArOMAAAggRIBuAAIAAgqMAmIAAAMAAAAg7g");
	var mask_graphics_59 = new cjs.Graphics().p("EABKArOIAA4cIBuAAIAAggMAmIAAAIAAY8g");
	var mask_graphics_60 = new cjs.Graphics().p("EABKArNIAAwmIBuAAIAAgVMAmIAAAIAAQ7g");
	var mask_graphics_61 = new cjs.Graphics().p("EABKArNIAAoxIBuAAIAAgLMAmIAAAIAAI8g");
	var mask_graphics_62 = new cjs.Graphics().p("EABKArMIAAg7IBuAAIAAgBMAmIAAAIAAA8g");
	var mask_graphics_63 = new cjs.Graphics().p("EABKArMIAAg7IBuAAIAAgBMAmIAAAIAAA8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_1,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_2,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_3,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_4,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_5,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_6,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_7,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_8,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_9,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_10,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_11,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_12,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_13,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_14,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_15,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_16,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_17,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_18,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_19,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_20,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_21,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_22,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_23,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_24,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_25,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_26,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_27,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_28,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_29,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_30,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_31,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_32,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_33,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_34,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_35,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_36,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_37,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_38,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_39,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_40,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_41,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_42,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_43,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_44,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_45,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_46,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_47,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_48,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_49,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_50,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_51,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_52,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_53,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_54,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_55,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_56,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_57,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_58,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_59,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_60,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_61,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_62,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_63,x:262.5,y:276.5}).wait(27));

	// animation
	this.instance_11 = new lib.bak2();
	this.instance_11.setTransform(381,304.5);

	this.instance_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(251,34.5,291,541);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(214,34.5,371,541), rect=new cjs.Rectangle(214,34.5,371,547.2), rect, rect=new cjs.Rectangle(214,34.5,371,549.6), rect, rect=new cjs.Rectangle(214,26.2,371,560), rect, rect=new cjs.Rectangle(214,34.5,371,547.2), rect, rect=new cjs.Rectangle(214,34.5,371,549.6), rect, rect=new cjs.Rectangle(214,26.2,371,560), rect, rect=new cjs.Rectangle(214,34.5,371,547.2), rect, rect=new cjs.Rectangle(214,34.5,371,549.6), rect, rect=new cjs.Rectangle(214,26.2,371,560), rect, rect=new cjs.Rectangle(214,34.5,371,541), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(175.3,34.5,409.7,541), new cjs.Rectangle(122.7,34.5,462.3,541), new cjs.Rectangle(70.1,34.5,514.9,541), new cjs.Rectangle(17.6,34.5,567.4,541), new cjs.Rectangle(33.2,34.5,551.8,541), new cjs.Rectangle(48.8,34.5,536.2,541), new cjs.Rectangle(64.4,34.5,520.6,541), new cjs.Rectangle(80.1,34.5,504.9,541), new cjs.Rectangle(95.7,34.5,489.3,541), new cjs.Rectangle(111.4,34.5,473.6,541), new cjs.Rectangle(127.2,34.5,414.8,541), new cjs.Rectangle(142.8,34.5,399.2,541), new cjs.Rectangle(158.4,32,383.6,543.5), new cjs.Rectangle(174,28.3,368,547.2), new cjs.Rectangle(189.7,24.6,352.3,550.9), new cjs.Rectangle(205.3,21,336.7,557.9), new cjs.Rectangle(220.9,17.4,321.1,565.2), new cjs.Rectangle(236.7,13.7,305.3,572.7), new cjs.Rectangle(251,10.1,291,580.1)];


(lib.magic_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.ingridient18();
	this.instance.setTransform(129.3,464.4,0.76,0.76,0,0,0,0,4.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(76).to({_off:false},0).to({regX:0.1,scaleX:0.66,scaleY:0.66,x:170.1,y:182.9},13).wait(1));

	// animation
	this.instance_1 = new lib.smoke_4_mc();
	this.instance_1.setTransform(314,484.9,1,1,0,0,0,75,77.5);

	this.instance_2 = new lib.smoke_4_mc();
	this.instance_2.setTransform(510,295,1,1,0,0,0,75,77.5);

	this.instance_3 = new lib.smoke_4_mc();
	this.instance_3.setTransform(289,142.4,1,1,0,0,0,75,77.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},34).to({state:[]},47).wait(9));

	// animation
	this.instance_4 = new lib.flash4_img();
	this.instance_4.setTransform(239.4,73.6);

	this.instance_5 = new lib.flash5_img();
	this.instance_5.setTransform(240.9,63.1);

	this.instance_6 = new lib.flash6_img();
	this.instance_6.setTransform(243.6,26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},35).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[]},2).wait(37));

	// animation
	this.instance_7 = new lib.back_door2();
	this.instance_7.setTransform(519,311,1.398,1,0,0,0,43,4);
	this.instance_7.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(66).to({scaleX:1,alpha:1},4).wait(4).to({scaleX:1.4,alpha:0.012},4).wait(12));

	// animation
	this.instance_8 = new lib.back_door1();
	this.instance_8.setTransform(517.5,304.5,1,1,0,0,0,119.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(64).to({scaleX:0.35},5).to({_off:true},1).wait(6).to({_off:false},0).to({scaleX:1},5).wait(9));

	// animation
	this.instance_9 = new lib.ingridient18();
	this.instance_9.setTransform(399.3,325,0.76,0.76,0,0,0,0,4.4);
	this.instance_9.alpha = 0.012;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(46).to({_off:false},0).to({y:223,alpha:1},13).wait(11).to({x:129.3,y:464.4},6).to({_off:true},1).wait(13));

	// animation
	this.instance_10 = new lib.bak3();
	this.instance_10.setTransform(381,304.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(90));

	// animation (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EABKArMIAAg7IBuAAIAAgBMAmIAAAIAAA8g");
	var mask_graphics_1 = new cjs.Graphics().p("EABKArMIAAjvIBuAAIAAgFMAmIAAAIAAD0g");
	var mask_graphics_2 = new cjs.Graphics().p("EABKArNIAAmkIBuAAIAAgJMAmIAAAIAAGtg");
	var mask_graphics_3 = new cjs.Graphics().p("EABKArNIAApZIBuAAIAAgMMAmIAAAIAAJlg");
	var mask_graphics_4 = new cjs.Graphics().p("EABKArNIAAsNIBuAAIAAgQMAmIAAAIAAMdg");
	var mask_graphics_5 = new cjs.Graphics().p("EABKArNIAAvCIBuAAIAAgTMAmIAAAIAAPVg");
	var mask_graphics_6 = new cjs.Graphics().p("EABKArNIAAx2IBuAAIAAgXMAmIAAAIAASNg");
	var mask_graphics_7 = new cjs.Graphics().p("EABKArOIAA0rIBuAAIAAgbMAmIAAAIAAVGg");
	var mask_graphics_8 = new cjs.Graphics().p("EABKArOIAA3gIBuAAIAAgeMAmIAAAIAAX+g");
	var mask_graphics_9 = new cjs.Graphics().p("EABKArOIAA6UIBuAAIAAgiMAmIAAAIAAa2g");
	var mask_graphics_10 = new cjs.Graphics().p("EABKArOIAA9JIBuAAIAAglMAmIAAAIAAdug");
	var mask_graphics_11 = new cjs.Graphics().p("EABKArOIAA/9IBuAAIAAgpMAmIAAAMAAAAgmg");
	var mask_graphics_12 = new cjs.Graphics().p("EABKArOMAAAgixIBuAAIAAgtMAmIAAAMAAAAjeg");
	var mask_graphics_13 = new cjs.Graphics().p("EABKArPMAAAglnIBuAAIAAgwMAmIAAAMAAAAmXg");
	var mask_graphics_14 = new cjs.Graphics().p("EABKArPMAAAgobIBuAAIAAg0MAmIAAAMAAAApPg");
	var mask_graphics_15 = new cjs.Graphics().p("EABKArPMAAAgrPIBuAAIAAg3MAmIAAAMAAAAsGg");
	var mask_graphics_16 = new cjs.Graphics().p("EABKArPMAAAguCIBuAAIAAg8MAmIAAAMAAAAu+g");
	var mask_graphics_17 = new cjs.Graphics().p("EABKArPMAAAgw2IBuAAIAAhAMAmIAAAMAAAAx2g");
	var mask_graphics_18 = new cjs.Graphics().p("EABKArQMAAAgzsIBuAAIAAhDMAmIAAAMAAAA0vg");
	var mask_graphics_19 = new cjs.Graphics().p("EABKArQMAAAg2gIBuAAIAAhHMAmIAAAMAAAA3ng");
	var mask_graphics_20 = new cjs.Graphics().p("EABKArQMAAAg5UIBuAAIAAhLMAmIAAAMAAAA6fg");
	var mask_graphics_21 = new cjs.Graphics().p("EABKArQMAAAg8JIBuAAIAAhOMAmIAAAMAAAA9Xg");
	var mask_graphics_22 = new cjs.Graphics().p("EABKArQMAAAg+9IBuAAIAAhSMAmIAAAMAAABAPg");
	var mask_graphics_23 = new cjs.Graphics().p("EABKArQMAAAhByIBuAAIAAhVMAmIAAAMAAABDHg");
	var mask_graphics_24 = new cjs.Graphics().p("EABKArRMAAAhEnIBuAAIAAhZMAmIAAAMAAABGAg");
	var mask_graphics_25 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_26 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_27 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_28 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_29 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_30 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_31 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_32 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_33 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_34 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_35 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_36 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_37 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_38 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_39 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_40 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_41 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_42 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_43 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_44 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_45 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_46 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_47 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_48 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_49 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_50 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_51 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_52 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_53 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_54 = new cjs.Graphics().p("EABKArQMAAAg/lIBuAAIAAhTMAmIAAAMAAABA4g");
	var mask_graphics_55 = new cjs.Graphics().p("EABKArQMAAAg3wIBuAAIAAhJMAmIAAAMAAAA45g");
	var mask_graphics_56 = new cjs.Graphics().p("EABKArPMAAAgv6IBuAAIAAg+MAmIAAAMAAAAw4g");
	var mask_graphics_57 = new cjs.Graphics().p("EABKArPMAAAgoHIBuAAIAAg0MAmIAAAMAAAAo7g");
	var mask_graphics_58 = new cjs.Graphics().p("EABKArOMAAAggRIBuAAIAAgqMAmIAAAMAAAAg7g");
	var mask_graphics_59 = new cjs.Graphics().p("EABKArOIAA4cIBuAAIAAggMAmIAAAIAAY8g");
	var mask_graphics_60 = new cjs.Graphics().p("EABKArNIAAwmIBuAAIAAgVMAmIAAAIAAQ7g");
	var mask_graphics_61 = new cjs.Graphics().p("EABKArNIAAoxIBuAAIAAgLMAmIAAAIAAI8g");
	var mask_graphics_62 = new cjs.Graphics().p("EABKArMIAAg7IBuAAIAAgBMAmIAAAIAAA8g");
	var mask_graphics_63 = new cjs.Graphics().p("EABKArMIAAg7IBuAAIAAgBMAmIAAAIAAA8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_1,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_2,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_3,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_4,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_5,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_6,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_7,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_8,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_9,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_10,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_11,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_12,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_13,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_14,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_15,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_16,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_17,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_18,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_19,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_20,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_21,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_22,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_23,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_24,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_25,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_26,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_27,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_28,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_29,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_30,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_31,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_32,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_33,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_34,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_35,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_36,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_37,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_38,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_39,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_40,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_41,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_42,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_43,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_44,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_45,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_46,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_47,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_48,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_49,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_50,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_51,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_52,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_53,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_54,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_55,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_56,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_57,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_58,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_59,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_60,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_61,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_62,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_63,x:262.5,y:276.5}).wait(27));

	// animation
	this.instance_11 = new lib.bak2();
	this.instance_11.setTransform(381,304.5);

	this.instance_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(251,34.5,291,541);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(214,34.5,371,541), rect=new cjs.Rectangle(214,34.5,371,547.2), rect, rect=new cjs.Rectangle(214,34.5,371,549.6), rect, rect=new cjs.Rectangle(214,26.2,371,560), rect, rect=new cjs.Rectangle(214,34.5,371,547.2), rect, rect=new cjs.Rectangle(214,34.5,371,549.6), rect, rect=new cjs.Rectangle(214,26.2,371,560), rect, rect=new cjs.Rectangle(214,34.5,371,547.2), rect, rect=new cjs.Rectangle(214,34.5,371,549.6), rect, rect=new cjs.Rectangle(214,26.2,371,560), rect, rect=new cjs.Rectangle(214,34.5,371,541), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(198.4,34.5,386.6,541), new cjs.Rectangle(153.4,34.5,431.6,541), new cjs.Rectangle(108.4,34.5,476.6,541), new cjs.Rectangle(63.4,34.5,521.6,541), new cjs.Rectangle(18.5,34.5,566.5,545), new cjs.Rectangle(22.7,34.5,562.3,541), new cjs.Rectangle(26.9,34.5,558.1,541), new cjs.Rectangle(31.2,34.5,553.8,541), new cjs.Rectangle(35.5,34.5,549.5,541), new cjs.Rectangle(39.7,34.5,502.3,541), new cjs.Rectangle(44,34.5,498,541), new cjs.Rectangle(48.2,34.5,493.8,541), new cjs.Rectangle(52.4,34.5,489.6,541), new cjs.Rectangle(56.7,34.5,485.3,541), new cjs.Rectangle(61,34.5,481,541), new cjs.Rectangle(65.3,34.5,476.7,541), new cjs.Rectangle(69.5,34.5,472.5,541), new cjs.Rectangle(73.8,34.5,468.2,541)];


(lib.magic_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.smoke_4_mc();
	this.instance.setTransform(314,484.9,1,1,0,0,0,75,77.5);

	this.instance_1 = new lib.smoke_4_mc();
	this.instance_1.setTransform(510,295,1,1,0,0,0,75,77.5);

	this.instance_2 = new lib.smoke_4_mc();
	this.instance_2.setTransform(289,142.4,1,1,0,0,0,75,77.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},34).to({state:[]},47).wait(1));

	// animation
	this.instance_3 = new lib.flash4_img();
	this.instance_3.setTransform(239.4,73.6);

	this.instance_4 = new lib.flash5_img();
	this.instance_4.setTransform(240.9,63.1);

	this.instance_5 = new lib.flash6_img();
	this.instance_5.setTransform(243.6,26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},35).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[]},2).wait(29));

	// animation
	this.instance_6 = new lib.back_door2();
	this.instance_6.setTransform(519,311,1.398,1,0,0,0,43,4);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(66).to({scaleX:1,alpha:1},4).wait(4).to({scaleX:1.4,alpha:0.012},4).wait(4));

	// animation
	this.instance_7 = new lib.back_door1();
	this.instance_7.setTransform(517.5,304.5,1,1,0,0,0,119.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(64).to({scaleX:0.35},5).to({_off:true},1).wait(6).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_8 = new lib.ingridient14();
	this.instance_8.setTransform(399,172.4);
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(45).to({_off:false},0).to({y:204.4,alpha:1},8).wait(17).to({x:165,y:150},11).wait(1));

	// animation
	this.instance_9 = new lib.bak3();
	this.instance_9.setTransform(381,304.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(82));

	// animation (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EABKArMIAAg7IBuAAIAAgBMAmIAAAIAAA8g");
	var mask_graphics_1 = new cjs.Graphics().p("EABKArMIAAjvIBuAAIAAgFMAmIAAAIAAD0g");
	var mask_graphics_2 = new cjs.Graphics().p("EABKArNIAAmkIBuAAIAAgJMAmIAAAIAAGtg");
	var mask_graphics_3 = new cjs.Graphics().p("EABKArNIAApZIBuAAIAAgMMAmIAAAIAAJlg");
	var mask_graphics_4 = new cjs.Graphics().p("EABKArNIAAsNIBuAAIAAgQMAmIAAAIAAMdg");
	var mask_graphics_5 = new cjs.Graphics().p("EABKArNIAAvCIBuAAIAAgTMAmIAAAIAAPVg");
	var mask_graphics_6 = new cjs.Graphics().p("EABKArNIAAx2IBuAAIAAgXMAmIAAAIAASNg");
	var mask_graphics_7 = new cjs.Graphics().p("EABKArOIAA0rIBuAAIAAgbMAmIAAAIAAVGg");
	var mask_graphics_8 = new cjs.Graphics().p("EABKArOIAA3gIBuAAIAAgeMAmIAAAIAAX+g");
	var mask_graphics_9 = new cjs.Graphics().p("EABKArOIAA6UIBuAAIAAgiMAmIAAAIAAa2g");
	var mask_graphics_10 = new cjs.Graphics().p("EABKArOIAA9JIBuAAIAAglMAmIAAAIAAdug");
	var mask_graphics_11 = new cjs.Graphics().p("EABKArOIAA/9IBuAAIAAgpMAmIAAAMAAAAgmg");
	var mask_graphics_12 = new cjs.Graphics().p("EABKArOMAAAgixIBuAAIAAgtMAmIAAAMAAAAjeg");
	var mask_graphics_13 = new cjs.Graphics().p("EABKArPMAAAglnIBuAAIAAgwMAmIAAAMAAAAmXg");
	var mask_graphics_14 = new cjs.Graphics().p("EABKArPMAAAgobIBuAAIAAg0MAmIAAAMAAAApPg");
	var mask_graphics_15 = new cjs.Graphics().p("EABKArPMAAAgrPIBuAAIAAg3MAmIAAAMAAAAsGg");
	var mask_graphics_16 = new cjs.Graphics().p("EABKArPMAAAguCIBuAAIAAg8MAmIAAAMAAAAu+g");
	var mask_graphics_17 = new cjs.Graphics().p("EABKArPMAAAgw2IBuAAIAAhAMAmIAAAMAAAAx2g");
	var mask_graphics_18 = new cjs.Graphics().p("EABKArQMAAAgzsIBuAAIAAhDMAmIAAAMAAAA0vg");
	var mask_graphics_19 = new cjs.Graphics().p("EABKArQMAAAg2gIBuAAIAAhHMAmIAAAMAAAA3ng");
	var mask_graphics_20 = new cjs.Graphics().p("EABKArQMAAAg5UIBuAAIAAhLMAmIAAAMAAAA6fg");
	var mask_graphics_21 = new cjs.Graphics().p("EABKArQMAAAg8JIBuAAIAAhOMAmIAAAMAAAA9Xg");
	var mask_graphics_22 = new cjs.Graphics().p("EABKArQMAAAg+9IBuAAIAAhSMAmIAAAMAAABAPg");
	var mask_graphics_23 = new cjs.Graphics().p("EABKArQMAAAhByIBuAAIAAhVMAmIAAAMAAABDHg");
	var mask_graphics_24 = new cjs.Graphics().p("EABKArRMAAAhEnIBuAAIAAhZMAmIAAAMAAABGAg");
	var mask_graphics_25 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_26 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_27 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_28 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_29 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_30 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_31 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_32 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_33 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_34 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_35 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_36 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_37 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_38 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_39 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_40 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_41 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_42 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_43 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_44 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_45 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_46 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_47 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_48 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_49 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_50 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_51 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_52 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_53 = new cjs.Graphics().p("EABKArRMAAAhHcIBuAAIAAhcMAmIAAAMAAABI4g");
	var mask_graphics_54 = new cjs.Graphics().p("EABKArQMAAAg/lIBuAAIAAhTMAmIAAAMAAABA4g");
	var mask_graphics_55 = new cjs.Graphics().p("EABKArQMAAAg3wIBuAAIAAhJMAmIAAAMAAAA45g");
	var mask_graphics_56 = new cjs.Graphics().p("EABKArPMAAAgv6IBuAAIAAg+MAmIAAAMAAAAw4g");
	var mask_graphics_57 = new cjs.Graphics().p("EABKArPMAAAgoHIBuAAIAAg0MAmIAAAMAAAAo7g");
	var mask_graphics_58 = new cjs.Graphics().p("EABKArOMAAAggRIBuAAIAAgqMAmIAAAMAAAAg7g");
	var mask_graphics_59 = new cjs.Graphics().p("EABKArOIAA4cIBuAAIAAggMAmIAAAIAAY8g");
	var mask_graphics_60 = new cjs.Graphics().p("EABKArNIAAwmIBuAAIAAgVMAmIAAAIAAQ7g");
	var mask_graphics_61 = new cjs.Graphics().p("EABKArNIAAoxIBuAAIAAgLMAmIAAAIAAI8g");
	var mask_graphics_62 = new cjs.Graphics().p("EABKArMIAAg7IBuAAIAAgBMAmIAAAIAAA8g");
	var mask_graphics_63 = new cjs.Graphics().p("EABKArMIAAg7IBuAAIAAgBMAmIAAAIAAA8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_1,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_2,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_3,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_4,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_5,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_6,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_7,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_8,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_9,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_10,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_11,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_12,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_13,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_14,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_15,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_16,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_17,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_18,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_19,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_20,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_21,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_22,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_23,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_24,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_25,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_26,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_27,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_28,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_29,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_30,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_31,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_32,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_33,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_34,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_35,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_36,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_37,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_38,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_39,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_40,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_41,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_42,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_43,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_44,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_45,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_46,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_47,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_48,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_49,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_50,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_51,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_52,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_53,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_54,x:262.5,y:276.9}).wait(1).to({graphics:mask_graphics_55,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_56,x:262.5,y:276.8}).wait(1).to({graphics:mask_graphics_57,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_58,x:262.5,y:276.7}).wait(1).to({graphics:mask_graphics_59,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_60,x:262.5,y:276.6}).wait(1).to({graphics:mask_graphics_61,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_62,x:262.5,y:276.5}).wait(1).to({graphics:mask_graphics_63,x:262.5,y:276.5}).wait(19));

	// animation
	this.instance_10 = new lib.bak2();
	this.instance_10.setTransform(381,304.5);

	this.instance_10.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(82));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(251,34.5,291,541);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(214,34.5,371,541), rect=new cjs.Rectangle(214,34.5,371,547.2), rect, rect=new cjs.Rectangle(214,34.5,371,549.6), rect, rect=new cjs.Rectangle(214,26.2,371,560), rect, rect=new cjs.Rectangle(214,34.5,371,547.2), rect, rect=new cjs.Rectangle(214,34.5,371,549.6), rect, rect=new cjs.Rectangle(214,26.2,371,560), rect, rect=new cjs.Rectangle(214,34.5,371,547.2), rect, rect=new cjs.Rectangle(214,34.5,371,549.6), rect, rect=new cjs.Rectangle(214,26.2,371,560), rect, rect=new cjs.Rectangle(214,34.5,371,541), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(193.4,34.5,391.6,541), new cjs.Rectangle(172.1,34.5,412.9,541), new cjs.Rectangle(150.8,34.5,434.2,541), new cjs.Rectangle(129.6,34.5,455.4,541), new cjs.Rectangle(108.3,34.5,476.7,541), new cjs.Rectangle(87,34.5,455,541)];


(lib.ingridient8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// banca2
	this.instance = new lib.banca2();
	this.instance.setTransform(0,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// banca1
	this.instance_1 = new lib.banca1();
	this.instance_1.setTransform(-1,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// Слой 8
	this.instance_2 = new lib.bubble2();
	this.instance_2.setTransform(30.1,55.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({_off:false},0).wait(44));

	// Слой 7
	this.instance_3 = new lib.bubble2();
	this.instance_3.setTransform(-28.4,62.1,0.636,0.636);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

	// Слой 6
	this.instance_4 = new lib.bubble2();
	this.instance_4.setTransform(-1.9,41.1,0.636,0.636,0,0,180);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).wait(52));

	// Слой 1
	this.instance_5 = new lib.bubble2();
	this.instance_5.setTransform(30.1,55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(60));

	// Слой 2
	this.instance_6 = new lib.heart21();
	this.instance_6.setTransform(-0.6,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.5,-110,135,220);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.ingredient_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ingridient8();
	this.instance.setTransform(0,0,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzMfIAA4+IPnAAIAAY+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-80,100,160);
p.frameBounds = [rect];


(lib.heroes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// heroes
	this.instance = new lib.hero_mc();
	this.instance.setTransform(520.1,305.1,0.932,0.932,0,0,0,0.1,0.1);

	this.instance_1 = new lib.friend4();
	this.instance_1.setTransform(250.1,311.6,0.962,0.962,0,0,0,0.1,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance,p:{x:520.1,regX:0.1,scaleX:0.932,scaleY:0.932,y:305.1}}]}).to({state:[{t:this.instance,p:{x:398.1,regX:0.1,scaleX:0.932,scaleY:0.932,y:305.1}}]},1).to({state:[{t:this.instance,p:{x:398,regX:0,scaleX:1,scaleY:1,y:297.1}}]},1).wait(1));

	// bg
	this.instance_2 = new lib.background_1_img();
	this.instance_2.setTransform(-200,0);

	this.instance_3 = new lib.background_2_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect, rect, new cjs.Rectangle(-200,-3.1,1200,603.1)];


(lib.cartoons_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1_mc = new lib.cartoon_1_mc();
	this.body_1_mc.setTransform(400,300);

	this.body_2_mc = new lib.cartoon_2_mc();
	this.body_2_mc.setTransform(400,300);

	this.body_3_mc = new lib.cartoon_3_mc();
	this.body_3_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1_mc}]}).to({state:[{t:this.body_2_mc}]},1).to({state:[{t:this.body_3_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-581.9,-34,448.5,647.5);
p.frameBounds = [rect, new cjs.Rectangle(-34.6,-34,647.9,1073.4), new cjs.Rectangle(-34.6,-34,1298.9,749.5)];


(lib.Bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_3_mc();
	this.instance.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-15,30,30);
p.frameBounds = [rect];


(lib.products_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// products
	this.product_7_mc = new lib.product_progress_7_mc();
	this.product_7_mc.setTransform(0,0.4,1,1,0,0,0,0,0.4);

	this.product_6_mc = new lib.product_progress_6_mc();
	this.product_6_mc.setTransform(272.5,173.4);

	this.product_5_mc = new lib.product_progress_5_mc();
	this.product_5_mc.setTransform(280,0);

	this.product_4_mc = new lib.product_progress_4_mc();
	this.product_4_mc.setTransform(280,-180);

	this.product_3_mc = new lib.product_progress_3_mc();
	this.product_3_mc.setTransform(-280,180);

	this.product_2_mc = new lib.product_progress_2_mc();
	this.product_2_mc.setTransform(-280,0);

	this.product_1_mc = new lib.product_progress_1_mc();
	this.product_1_mc.setTransform(-280,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.product_1_mc},{t:this.product_2_mc},{t:this.product_3_mc},{t:this.product_4_mc},{t:this.product_5_mc},{t:this.product_6_mc},{t:this.product_7_mc}]}).wait(1));

	// decor
	this.instance = new lib.decor_progress_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-274.7,740,549.9);
p.frameBounds = [rect];


(lib.photoContainer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_btn = new lib.logotype_mc();
	this.logo_btn.setTransform(100,575.1,0.529,0.529,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.logo_btn).wait(1));

	// heroes
	this.heroes_mc = new lib.heroes_mc();

	this.timeline.addTween(cjs.Tween.get(this.heroes_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.magic_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"default":0,fail_1:1,fail_2:2,fail_3:3,product_1:4,product_2:5,product_3:6,product_4:7,product_5:8,product_6:9,product_7:10});

	// animations
	this.body_1_mc = new lib.magic_1_mc();
	this.body_1_mc.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.body_2_mc = new lib.magic_2_mc();
	this.body_2_mc.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.body_3_mc = new lib.magic_3_mc();
	this.body_3_mc.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.body_4_mc = new lib.magic_4_mc();
	this.body_4_mc.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.body_5_mc = new lib.magic_5_mc();
	this.body_5_mc.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.body_6_mc = new lib.magic_6_mc();
	this.body_6_mc.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.body_7_mc = new lib.magic_8_mc();
	this.body_7_mc.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.body_8_mc = new lib.magic_10_mc();
	this.body_8_mc.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.body_9_mc = new lib.magic_7_mc();
	this.body_9_mc.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.body_10_mc = new lib.magic_9_mc();
	this.body_10_mc.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.body_11_mc = new lib.magic_11_mc();
	this.body_11_mc.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1_mc}]}).to({state:[{t:this.body_2_mc}]},1).to({state:[{t:this.body_3_mc}]},1).to({state:[{t:this.body_4_mc}]},1).to({state:[{t:this.body_5_mc}]},1).to({state:[{t:this.body_6_mc}]},1).to({state:[{t:this.body_7_mc}]},1).to({state:[{t:this.body_8_mc}]},1).to({state:[{t:this.body_9_mc}]},1).to({state:[{t:this.body_10_mc}]},1).to({state:[{t:this.body_11_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(154,32.5,454,544);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.CartoonScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_mc_1();
	this.next_mc.setTransform(400,520);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.cartoons_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-581.9,-280.8,1582,1261.9);
p.frameBounds = [rect];


(lib.body_alchemy_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// help
	this.help_mc = new lib.help_mc();

	this.timeline.addTween(cjs.Tween.get(this.help_mc).wait(1));

	// drag
	this.dragDropContainer_mc = new lib.drag_drop_container_mc();

	this.timeline.addTween(cjs.Tween.get(this.dragDropContainer_mc).wait(1));

	// inventory
	this.inventory_mc = new lib.inventory_mc();
	this.inventory_mc.setTransform(400,540);

	this.timeline.addTween(cjs.Tween.get(this.inventory_mc).wait(1));

	// mixer
	this.mixer_mc = new lib.mixer_mc();
	this.mixer_mc.setTransform(400,310);

	this.timeline.addTween(cjs.Tween.get(this.mixer_mc).wait(1));

	// magic
	this.magic_mc = new lib.magic_mc();
	this.magic_mc.setTransform(5,0);

	this.timeline.addTween(cjs.Tween.get(this.magic_mc).wait(1));

	// ingredients_3
	this.ingredient_20_mc = new lib.ingredient_20_mc();
	this.ingredient_20_mc.setTransform(745,395);

	this.ingredient_18_mc = new lib.ingredient_18_mc();
	this.ingredient_18_mc.setTransform(180,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ingredient_18_mc},{t:this.ingredient_20_mc}]}).wait(1));

	// ingredients_2
	this.ingredient_17_mc = new lib.ingredient_17_mc();
	this.ingredient_17_mc.setTransform(630,260);

	this.ingredient_15_mc = new lib.ingredient_15_mc();
	this.ingredient_15_mc.setTransform(630,122);

	this.ingredient_13_mc = new lib.ingredient_13_mc();
	this.ingredient_13_mc.setTransform(745,330);

	this.ingredient_16_mc = new lib.ingredient_16_mc();
	this.ingredient_16_mc.setTransform(55,98);

	this.ingredient_14_mc = new lib.ingredient_14_mc();
	this.ingredient_14_mc.setTransform(180,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ingredient_14_mc},{t:this.ingredient_16_mc},{t:this.ingredient_13_mc},{t:this.ingredient_15_mc},{t:this.ingredient_17_mc}]}).wait(1));

	// ingredients_1
	this.ingredient_3_mc = new lib.ingredient_3_mc();
	this.ingredient_3_mc.setTransform(168,385);

	this.ingredient_23_mc = new lib.ingredient_23_mc();
	this.ingredient_23_mc.setTransform(275,45);

	this.ingredient_22_mc = new lib.ingredient_22_mc();
	this.ingredient_22_mc.setTransform(545,55);

	this.ingredient_21_mc = new lib.ingredient_21_mc();
	this.ingredient_21_mc.setTransform(60,485);

	this.ingredient_19_mc = new lib.ingredient_19_mc();
	this.ingredient_19_mc.setTransform(630,322);

	this.ingredient_12_mc = new lib.ingredient_12_mc();
	this.ingredient_12_mc.setTransform(205,490);

	this.ingredient_11_mc = new lib.ingredient_11_mc();
	this.ingredient_11_mc.setTransform(740,480);

	this.ingredient_10_mc = new lib.ingredient_10_mc();
	this.ingredient_10_mc.setTransform(630,165);

	this.ingredient_9_mc = new lib.ingredient_9_mc();
	this.ingredient_9_mc.setTransform(630,445);

	this.ingredient_8_mc = new lib.ingredient_8_mc();
	this.ingredient_8_mc.setTransform(75,322);

	this.ingredient_7_mc = new lib.ingredient_7_mc();
	this.ingredient_7_mc.setTransform(745,300);

	this.ingredient_6_mc = new lib.ingredient_6_mc();
	this.ingredient_6_mc.setTransform(55,165);

	this.ingredient_5_mc = new lib.ingredient_5_mc();
	this.ingredient_5_mc.setTransform(168,293);

	this.ingredient_4_mc = new lib.ingredient_4_mc();
	this.ingredient_4_mc.setTransform(150,550,1,1,-45);

	this.ingredient_2_mc = new lib.ingredient_2_mc();
	this.ingredient_2_mc.setTransform(180,160);

	this.ingredient_1_mc = new lib.ingredient_1_mc();
	this.ingredient_1_mc.setTransform(740,132);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ingredient_1_mc},{t:this.ingredient_2_mc},{t:this.ingredient_4_mc},{t:this.ingredient_5_mc},{t:this.ingredient_6_mc},{t:this.ingredient_7_mc},{t:this.ingredient_8_mc},{t:this.ingredient_9_mc},{t:this.ingredient_10_mc},{t:this.ingredient_11_mc},{t:this.ingredient_12_mc},{t:this.ingredient_19_mc},{t:this.ingredient_21_mc},{t:this.ingredient_22_mc},{t:this.ingredient_23_mc},{t:this.ingredient_3_mc}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,844);
p.frameBounds = [rect];


(lib.AlchemyScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_mc_1();
	this.next_mc.setTransform(680,530);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(110.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.body_alchemy_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_alchemy_mc();
	this.instance.setTransform(600,300,1,1,0,0,0,600,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9);
p.frameBounds = [rect];


(lib.bubble_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2017 edapskov v 1.2
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
		var container_mc = this.container_mc;
		container_mc.gotoAndStop(0);
		var _containerBounds_rect = container_mc.getBounds();
		/*
		константы
		*/
		var _SPEED_NUM = 0.75;
		var _CURRENT_NUM = 0.25;
		var _BUBBLE_DIAMETER_NUM = 50;
		/*
		создаём n-ое количество пузырей
		*/
		_createBubblesFunc(20);
		/*
		функция, создающая пузыри
		*/
		function _createBubblesFunc(bubbles_num) 
		{
			/*
			переменные
			*/
			var randomScale_num;
			var i = 0;
			/*
			цикл
			*/
			while (i < bubbles_num) 
			{
				/*
				создаём пузырь
				*/
				var bubble_mc = new lib.Bubble();
				container_mc.addChild(bubble_mc);
				bubble_mc.gotoAndStop(0);
				bubble_mc.gotoAndStop(Math.floor(Math.random() * bubble_mc.totalFrames));
				bubble_mc.rad = Math.random() * _CURRENT_NUM - Math.random() * _CURRENT_NUM;
				randomScale_num = Math.random() * (1 - 0.5) + 0.5;
				bubble_mc.scaleX = randomScale_num;
				bubble_mc.scaleY = randomScale_num;
				bubble_mc.alpha = randomScale_num;
				bubble_mc.x = Math.random() * _containerBounds_rect.width;
				bubble_mc.y = Math.random() * _containerBounds_rect.height;
				bubble_mc.addEventListener("tick", _onTickBubbleFunc, false);
				/*
				обновление итератора
				*/
				i++;
			}
		}
		/*
		обновляем в каждом кадре
		*/
		function _onTickBubbleFunc(event)
		{
			/*
			получаем пузырь
			*/
			var target_mc = event.target;
			target_mc.gotoAndStop(0);
			/*
			обновляем координаты
			*/
			target_mc.x -= target_mc.rad;
			target_mc.y -= _SPEED_NUM;
			/*
			если пузырь уходит за границы, то исправляем это
			*/
			if (target_mc.y <= 0)
			{
				target_mc.y = _containerBounds_rect.height - _BUBBLE_DIAMETER_NUM;
			}
			if (target_mc.x >= _containerBounds_rect.width - _BUBBLE_DIAMETER_NUM)
			{
				target_mc.x = 1;
			}
			if (target_mc.x <= 0)
			{
				target_mc.x = _containerBounds_rect.width - _BUBBLE_DIAMETER_NUM;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bubble
	this.instance = new lib.Bubble();
	this.instance.setTransform(600,650);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// container
	this.container_mc = new lib.bubble_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,665);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(220.5,700.5,0.75,0.75,0,0,0,0.7,0.7);

	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(720,320);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(80,320);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(580,700,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(700,500);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.playAgain_btn = new lib.again_btn();
	this.playAgain_btn.setTransform(100,500);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.again_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.playAgain_btn},{t:this.photo_btn},{t:this.freeGames_mc},{t:this.prev_mc},{t:this.next_mc},{t:this.social_network_mc}]}).wait(1));

	// banners
	this.banner_2_mc = new lib.banner_2_mc();
	this.banner_2_mc.setTransform(720,-200,0.923,0.923);

	this.banner_1_mc = new lib.banner_1_mc();
	this.banner_1_mc.setTransform(80,-200,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.banner_1_mc},{t:this.banner_2_mc}]}).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(-200,400);
	this.instance.alpha = 0.398;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_mc();

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-319.9,1262.7,1065);
p.frameBounds = [rect];


(lib.body_progress_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.title_mc = new lib.animation_achievement_mc();
	this.title_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.title_mc).wait(1));

	// products
	this.products_mc = new lib.products_mc();
	this.products_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.products_mc).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(200,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,665);
p.frameBounds = [rect];


(lib.ProgressScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_mc_1();
	this.next_mc.setTransform(525,520);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.body_progress_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9);
p.frameBounds = [rect];


(lib.storage_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// storage
	this.text = new cjs.Text("storage", "64px 'Arial'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 74;
	this.text.lineWidth = 252;
	this.text.setTransform(128.2,2);

	this.instance = new lib.PreloaderScreen();

	this.instance_1 = new lib.CopyrightScreen();

	this.instance_2 = new lib.WelcomeScreen();

	this.instance_3 = new lib.CartoonScreen();

	this.instance_4 = new lib.AlchemyScreen();

	this.instance_5 = new lib.ProgressScreen();

	this.instance_6 = new lib.RedirectScreen();

	this.instance_7 = new lib.ResultScreen();
	this.instance_7.setTransform(0,0.3,1,1,0,0,0,0,0.3);

	this.instance_8 = new lib.InstructionScreen();

	this.simple_explosion_comp = new lib.SimpleExplosionMC();
	this.simple_explosion_comp.setTransform(310,55);

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(260,55);

	this.instance_9 = new lib.Cursor();
	this.instance_9.setTransform(195,55);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(125.1,55,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(55.1,55,0.583,0.583,0,0,0,0.1,0);

	this.instance_10 = new lib.CurtainScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_9},{t:this.gravity_explosion_comp},{t:this.simple_explosion_comp}]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, new cjs.Rectangle(-262.6,-280.8,1262.7,1361.9), new cjs.Rectangle(-581.9,-280.8,1582,1261.9), rect=new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9), rect, new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-262.6,-319.9,1262.7,1065), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(20,20,314,70), new cjs.Rectangle(-1200,0,3200,600), rect=null, rect, rect, rect, rect, rect, rect, rect];


// stage content:
(lib.storage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// storage
	this.instance = new lib.storage_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(400,300,256.5,75.5);
p.frameBounds = [rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;