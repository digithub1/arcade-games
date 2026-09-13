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
		{name:"storage_atlas_", frames: [[0,602,1600,600],[0,0,1600,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_4", frames: [[0,802,700,580],[0,0,800,800],[702,802,640,510],[802,0,640,510]]},
		{name:"storage_atlas_5", frames: [[1284,0,490,620],[0,1024,1600,200],[642,0,640,510],[0,0,640,510],[0,512,640,510]]},
		{name:"storage_atlas_6", frames: [[1346,0,400,600],[0,0,540,540],[944,0,400,600],[542,0,400,600],[0,542,400,600],[402,602,440,440],[1286,602,440,440],[844,602,440,440]]},
		{name:"storage_atlas_7", frames: [[442,442,440,440],[0,442,440,440],[1326,884,440,440],[884,442,440,440],[0,0,440,440],[0,884,440,440],[884,0,440,440],[1326,0,440,440],[442,0,440,440],[442,884,440,440],[1326,442,440,440],[884,884,440,440]]},
		{name:"storage_atlas_8", frames: [[0,0,440,440],[442,282,490,360],[934,282,490,360],[1084,0,640,280],[442,0,640,280],[0,644,490,360],[492,644,490,360],[492,1006,490,360],[0,1006,490,360],[984,1006,490,360],[984,644,490,360]]},
		{name:"storage_atlas_9", frames: [[492,784,500,300],[1004,794,500,300],[1004,1096,500,300],[502,1086,500,300],[0,1086,500,300],[492,482,500,300],[1346,402,390,390],[984,0,360,480],[1346,0,400,400],[492,0,490,360],[0,362,490,360],[0,724,490,360],[0,0,490,360]]},
		{name:"storage_atlas_10", frames: [[1146,0,290,490],[0,382,280,480],[564,382,280,480],[564,864,280,480],[846,382,280,480],[282,864,280,480],[0,864,280,480],[1438,442,280,480],[1128,492,280,480],[282,382,280,480],[846,864,280,480],[1438,0,320,440],[0,0,380,380],[382,0,380,380],[764,0,380,380],[1410,924,390,340]]},
		{name:"storage_atlas_11", frames: [[784,0,390,290],[784,292,390,290],[1478,892,300,300],[1176,958,300,320],[1439,584,303,306],[1176,584,261,372],[392,342,390,290],[1176,292,390,290],[784,584,390,290],[0,634,390,290],[392,634,390,290],[0,0,390,340],[392,926,390,290],[784,876,390,290],[0,926,390,290],[1176,0,390,290],[0,342,390,290],[392,0,390,340]]},
		{name:"storage_atlas_12", frames: [[747,1018,190,190],[1208,0,300,300],[906,0,300,300],[1389,945,190,190],[545,1010,200,200],[174,1179,200,200],[1197,743,200,200],[1348,506,200,200],[1591,691,180,180],[1581,1082,180,180],[1581,900,180,180],[769,776,180,240],[326,650,240,260],[604,0,300,300],[302,0,300,300],[0,0,300,300],[951,981,190,190],[247,302,211,346],[460,302,211,346],[1241,302,263,202],[349,912,194,227],[1197,945,190,194],[0,850,172,277],[174,912,173,265],[1143,1141,187,187],[673,577,324,197],[0,651,324,197],[999,577,347,164],[376,1141,165,221],[673,302,262,273],[1550,541,233,148],[1510,0,245,347],[0,302,245,347],[937,349,302,226],[999,743,196,236],[747,1210,181,188],[568,776,199,232],[0,1129,172,243],[1389,1137,190,190],[939,1173,186,188],[543,1212,194,178],[1399,708,190,190],[1550,349,190,190]]},
		{name:"storage_atlas_13", frames: [[872,915,120,120],[750,907,120,120],[182,0,180,180],[1715,923,80,120],[1737,395,60,60],[1737,457,60,60],[0,254,160,160],[324,254,160,160],[1251,315,160,160],[486,254,160,160],[0,416,160,160],[1413,315,160,160],[648,254,160,160],[810,337,160,160],[972,362,160,160],[162,254,160,160],[1575,395,160,160],[364,0,180,180],[546,0,180,180],[728,0,180,180],[304,846,120,120],[0,0,180,180],[1134,362,100,100],[788,1109,100,100],[890,1109,100,100],[1360,1115,100,100],[1471,880,120,120],[1223,903,120,120],[1101,873,120,120],[426,846,120,120],[1094,1147,64,64],[1458,477,64,64],[994,915,64,64],[1471,801,64,64],[844,182,64,64],[1593,880,36,36],[548,879,36,36],[1060,915,36,36],[598,789,36,36],[750,832,36,36],[670,934,70,92],[1462,1127,143,52],[0,1124,175,52],[951,686,162,125],[1737,519,47,31],[548,846,47,31],[1627,0,152,151],[645,578,152,150],[1099,0,177,168],[162,712,130,130],[1316,709,121,8],[1607,1127,160,41],[498,578,145,164],[351,578,145,164],[1466,0,159,156],[670,1029,116,122],[1316,639,125,68],[488,1138,144,45],[294,712,24,25],[1593,233,162,160],[910,173,162,162],[992,1117,100,99],[1538,719,105,159],[1278,161,420,70],[0,1090,385,32],[0,182,420,70],[422,182,420,70],[949,813,150,100],[1115,771,150,100],[645,730,150,100],[0,842,150,100],[294,744,150,100],[1267,801,150,100],[1645,719,150,100],[446,744,150,100],[0,740,150,100],[797,805,150,100],[598,832,150,100],[152,846,150,100],[1645,821,150,100],[1471,1002,120,120],[1116,1025,120,120],[1134,639,180,130],[1316,719,220,80],[1251,233,340,80],[1458,543,100,10],[1134,464,100,10],[972,337,110,20],[177,1124,90,90],[1524,477,40,55],[598,744,40,43],[1781,0,10,11],[269,1124,69,94],[1700,153,100,73],[488,968,57,60],[387,1090,99,100],[1251,170,23,38],[750,870,31,31],[1735,1045,50,50],[1757,228,40,147],[799,661,150,142],[1360,903,50,210],[1419,801,50,297],[910,0,187,171],[162,578,187,132],[1278,0,186,159],[1593,1045,140,80],[488,1056,140,80],[994,995,120,120],[1160,1147,64,64],[1296,477,160,160],[1620,557,160,160],[1458,557,160,160],[1134,477,160,160],[810,499,160,160],[972,524,160,160],[648,416,160,160],[486,416,160,160],[324,416,160,160],[0,578,160,160],[162,416,160,160],[810,254,80,80],[1099,170,150,190],[788,1037,180,70],[244,968,120,120],[0,944,120,120],[122,948,120,120],[366,968,120,120],[1593,923,120,120],[548,934,120,120],[1238,1025,120,120]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.again_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.before_hero_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_cards_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_hero_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_hero_2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg_hero_3_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg_next_round_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_pause_button_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_prize_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.bg_start_level_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_help_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.black_drop_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.card_0_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.card_10_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.card_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.card_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.card_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.card_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.card_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.card_6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.card_7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.card_8_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.card_9_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.copyright_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.countdown_0_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.countdown_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.countdown_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.countdown_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.countdown_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.current_location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.decor_1_cards_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.decor_2_cards_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.decor_buttons_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.decor_buttons_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.decor_buttons_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.decor_buttons_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.decor_location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.decor_title_help_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.decor_title_help_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.flash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.flash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.flash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.flash_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.forward_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.ghost_for_main_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero1_body1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_body2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hand1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hand2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero1_head1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero1_head2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero2_body1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero3_accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hero3_body1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero3_body2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero3_earrings1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hero3_earrings2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hero3_finger_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero3_head1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hero3_head2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.heroes_for_main_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.indicator_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.indicator_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.language_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.language_de_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.language_en_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.language_es_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.language_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.language_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.language_id_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.language_it_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.language_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.language_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.language_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.language_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.language_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.languages_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.languages_1_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.languages_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.languages_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.memory_timer_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.memory_timer_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.memory_timer_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.mini_hero_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.mini_hero_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.mini_next_button_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.pause_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.petiole_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.prize_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.prize_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.prize_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.prize_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.prize_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.prize_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.prize_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.prize_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.prize_3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.prize_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.prize_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.prize_4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.prize_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.prize_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.prize_5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.pumpkin_card_0_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.pumpkin_card_10_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.pumpkin_card_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.pumpkin_card_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.pumpkin_card_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.pumpkin_card_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.pumpkin_card_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.pumpkin_card_6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.pumpkin_card_7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.pumpkin_card_8_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.pumpkin_card_9_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.ray_of_light_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.screamer_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.skip_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.small_bg_cards_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.text_bubble_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.text_bubble_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.title_help_en_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.title_help_es_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.title_help_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_help_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_help_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_loss_en_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_loss_es_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_loss_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_loss_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_loss_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_next_round_en_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_next_round_es_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_next_round_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_next_round_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_next_round_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.title_start_level_en_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.title_start_level_es_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.title_start_level_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.title_start_level_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.title_start_level_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.title_win_en_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_win_es_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_win_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_win_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.title_win_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.web_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



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
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("Eh8+Au4MAAAhdvMD59AAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
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
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,1],-4.4,11.6,5.8,-15.6).s().p("AgqB0QhJgNgmgpQgogqATgwQASgwA/gZQBBgaBHANQBKAKAmAqQAmAqgSAuQgTAxg/AYQgtAUgyAAQgTAAgVgDg");
	this.shape.setTransform(0.2,-117.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,1],11.5,20,-14.9,-25.9).s().p("AiOELQh+gFguhRQgvhQA7hsQA7hwCEhMQCBhLB9AEQB9AEAvBRQAvBSg7BrQg6BviDBMQh7BIh4AAIgNAAg");
	this.shape_1.setTransform(-54,-91.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// graph
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,0.976],-1.6,-202.4,-1.4,65.4).s().p("AsdJ+QlLkIAAl2QAAl1FLkIQFKkIHTAAQHTAAFLEIQFLEIAAF1QAAF2lLEIQlLEInTAAQnTAAlKkIg");
	this.shape_2.setTransform(0.5,-47.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// graph
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(152,172,255,0)","rgba(191,194,255,0.298)"],[0,1],0.9,8.8,0.9,75.8).s().p("AtnDnQlXlWgRngQAVFiFTD9QFpEQH+AAQH/AAFpkQQFQj7AYlfQgTHdlVFUQlpFpn/AAQn+AAlplpg");
	this.shape_3.setTransform(0,64.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// graph
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(255,145,175,0)","#E023A0","rgba(205,24,144,0)"],[0,0.667,1],33.4,-45.3,0,33.4,-45.3,220.8).s().p("AvdPeQmZmagBpEQABpDGZmaQGamZJDgBQJEABGaGZQGZGaABJDQgBJEmZGaQmaGZpEABQpDgBmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// graph
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#F252BC","#F87BCE"],[0,1],0,124.2,0,-135.9).s().p("AvdPeQmZmagBpEQABpDGZmaQGamZJDgBQJEABGaGZQGZGaABJDQgBJEmZGaQmaGZpEABQpDgBmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// graph
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.098)").s().p("AvcPeQmbmaAApEQAApDGbmZQGZmbJDAAQJEAAGaGbQGZGZAAJDQAAJEmZGaQmaGZpEAAQpDAAmZmZg");
	this.shape_6.setTransform(4.7,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,284.7,284.7);
p.frameBounds = [rect];


(lib.preloader_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFF00","#FF6600"],[0,1],-2.1,-23.8,0,-2.1,-23.8,97.6).s().p("AnDJ5IgDgCIAAAAIgBgBQg0ghgfg7IgBgBQgdg5AAhCIAAs7QgBhDAfg5IgBACQAgg/A4giIACgBQA5gkBDABQBCgBA6AkIKNGgQA2AgAhA+IABABQAdA5AABBQAABAgdA7IgBADQghA6gzAhIgDACIqLGeQg2AlhIgBQhJABg1glg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// graph
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF6699","#E023A0"],[0,1],0,-79,0,79).s().p("AoGLcQhRgyguhaIAAABQgrhTgBhgIAAs7QABhhAshTIgCAEQAwheBTgzIADgCQBWg1BlAAQBkAABWA1IKLGfQBUAwAyBfIgBgBQAsBTABBgQgBBdgqBUIgDAGQgvBVhNAyIgEACIqHGbQhSA6hwABQhwgBhRg5gAkFlGIACgCIABgBIgDADg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69,-79,138,158);
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
	this.shape.graphics.lf(["#F77EBB","#F82991"],[0,1],0,17,0,-17).s().p("Ax8CqQhHgBgygxQgxgyAAhGQAAhFAxgyQAygxBHAAMAj5AAAQBHAAAyAxQAyAygBBFQABBGgyAyQgyAxhHABg");
	this.shape.setTransform(130,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// graph
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F77EBB","#F82991"],[0,1],0,-26,0,26).s().p("Ax8EEQhtgBhLhLQhNhMABhsQAAhqBLhMIABgBQBMhLBsAAMAj5AAAQBtgBBMBNQBMBLgBBrQABBrhMBMIAAABIAAAAQhNBLhsABg");
	this.shape_1.setTransform(130,15);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11,-11,282,52);
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
	this.shape.setTransform(400,300,1.333,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.pause_app_4_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ag2FdQhUAAgBhTIAAoSQABhUBUAAIBtAAQBUAAABBUIAAISQgBBThUAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14,-35,28,70);
p.frameBounds = [rect];


(lib.pause_app_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ao0I1QjrjqAAlLQAAlKDrjqQDqjqFKAAQFLAADqDqQDrDqAAFKQAAFLjrDqQjqDqlLAAQlKAAjqjqgAnWnWQjDDDAAETQAAEUDDDDQDEDDESAAQEUAADDjDQDDjDAAkUQAAkTjDjDQjDjDkUAAQkSAAjEDDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.pause_app_3_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Ag2FeQhUAAgBhUIAAoTQABhUBUAAIBtAAQBUAAABBUIAAITQgBBUhUAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14,-35,28,70);
p.frameBounds = [rect];


(lib.pause_app_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AjOHBQhHgIgwg0Qgxg0AAhGIAAoVQAAhGAxg0QAwg0BHgHQBHgIA6AqIF3ELQAwAkATA4QATA2gTA4QgTA4gxAjIl3EMQgxAjg8AAIgTgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.5,-45,75,90);
p.frameBounds = [rect];


(lib.pause_app_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Ao0I1QjrjqAAlLQAAlKDrjqQDqjrFKAAQFLAADqDrQDrDqAAFKQAAFLjrDqQjqDrlLAAQlKAAjqjrgAnWnWQjDDEAAESQAAEUDDDDQDEDDESAAQEUAADDjDQDDjDAAkUQAAkSjDjEQjDjDkUAAQkSAAjEDDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.pause_app_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AjOHBQhHgIgwg0Qgxg0AAhGIAAoVQAAhGAxg0QAwg0BHgHQBHgIA6AqIF3ELQAwAkATA4QATA2gTA4QgTA4gxAjIl3EMQgxAjg8AAIgTgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.5,-45,75,90);
p.frameBounds = [rect];


(lib.pause_app_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("Ap7J8QkIkIAAl0QAAlzEIkIQEHkHF0gBQF0ABEIEHQEIEIAAFzQAAF0kIEIQkIEHl0AAQl0AAkHkHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.orientation_lock_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhFAtIEQAAQAAjMiRiRQiPiRjPAAQiqAAiABjIk1k0QEBjiFeAAQGAAAEQERQEQERABF/IEHAAInmNIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-88.5,180,177.1);
p.frameBounds = [rect];


(lib.orientation_lock_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhTBUQgkgjABgxQgBgxAkgiQAjgjAwAAQAyAAAiAjQAjAiAAAxQAAAxgjAjQgiAjgyAAQgwAAgjgjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12,-12,24,24);
p.frameBounds = [rect];


(lib.orientation_lock_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AkgA8QgaAAgRgSQgSgRAAgZQAAgYASgRQARgSAaAAIJBAAQAZAAASASQASARAAAYQAAAZgSARQgSASgZAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-6,70,12);
p.frameBounds = [rect];


(lib.orientation_lock_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AiwCwQhIhJgBhnQAAgWAFgWQAMhLA4g5QA5g4BLgMQAQgEASAAIAKgBIAOABQBeAEBEBEQBKBKAABmQAABnhKBJQhJBKhnAAQhmAAhKhKgAgKikQg+ADgsAtQgxAxAABDQAAATAEASQAJAuAkAiQAxAxBDAAQBEAAAxgxQAxgxAAhEQAAhDgxgxQgigkgugJQgLgDgMAAIgOgBIgKABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.orientation_lock_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A1FbVMAAAg2pMAqLAAAMAAAA2pg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-175,270,350);
p.frameBounds = [rect];


(lib.orientation_lock_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgRzAnEQiVgBhphpQhqhpAAiVMAAAhC3QAAiVBqhpQBphpCVgBMAjnAAAQCVABBpBpQBqBpAACVMAAABC3QAACVhqBpQhpBpiVABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-250,300,500);
p.frameBounds = [rect];


(lib.languages_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.languages_2_3_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.languages_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.languages_1_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.languages_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.languages_1_3_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.languages_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.languages_2_img();
	this.instance.setTransform(-90,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-65,180,130);
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
	this.shape.setTransform(400,300,1.333,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.web_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.web_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.text_bubble_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.text_bubble_2_img();
	this.instance.setTransform(-245,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-180,490,360);
p.frameBounds = [rect];


(lib.text_bubble_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.text_bubble_1_img();
	this.instance.setTransform(-245,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-180,490,360);
p.frameBounds = [rect];


(lib.small_bg_cards_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.small_bg_cards_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect];


(lib.semitransparent_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("Eh+jAwbMAAAhg1MD9HAAAMAAABg1g");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
p.frameBounds = [rect];


(lib.screamer_mc = function(mode,startPosition,loop) {
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
	this.instance = new lib.screamer_img();
	this.instance.setTransform(-75,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-95,150,190);
p.frameBounds = [rect];


(lib.pumpkin_card_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pumpkin_card_10_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.pumpkin_card_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pumpkin_card_9_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.pumpkin_card_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pumpkin_card_8_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.pumpkin_card_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pumpkin_card_7_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.pumpkin_card_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pumpkin_card_6_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.pumpkin_card_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pumpkin_card_5_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.pumpkin_card_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pumpkin_card_4_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.pumpkin_card_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pumpkin_card_3_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.pumpkin_card_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pumpkin_card_2_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.pumpkin_card_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pumpkin_card_1_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.pumpkin_card_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pumpkin_card_0_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.prize_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.ray_of_light_img();
	this.instance.setTransform(-400,-400);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-400,800,800);
p.frameBounds = [rect];


(lib.prize_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];


(lib.petiole_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.petiole_img();
	this.instance.setTransform(-32,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-32,64,64);
p.frameBounds = [rect];


(lib.mini_next_button_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.mini_next_button_img();
	this.instance.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.memory_timer_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.memory_timer_3_img();
	this.instance.setTransform(-5,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-10,110,20);
p.frameBounds = [rect];


(lib.memory_timer_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.memory_timer_2_img();
	this.instance.setTransform(0,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-5,100,10);
p.frameBounds = [rect];


(lib.memory_timer_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.memory_timer_1_img();
	this.instance.setTransform(0,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-5,100,10);
p.frameBounds = [rect];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,200);
p.frameBounds = [rect];


(lib.indicator_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_4_img();
	this.instance.setTransform(-210,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-35,420,70);
p.frameBounds = [rect];


(lib.indicator_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.indicator_3_img();
	this.instance.setTransform(-210,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-35,420,70);
p.frameBounds = [rect];


(lib.indicator_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_1_img();
	this.instance.setTransform(-210,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-35,420,70);
p.frameBounds = [rect];


(lib.indicator_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_2_img();
	this.instance.setTransform(0,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-16,385,32);
p.frameBounds = [rect];


(lib.heroes_for_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.heroes_for_main_img();
	this.instance.setTransform(-245,-310);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-310,490,620);
p.frameBounds = [rect];


(lib.hero3_top_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_top2_img();
	this.instance.setTransform(-56.5,-75);

	this.instance_1 = new lib.hero3_top1_img();
	this.instance_1.setTransform(-50,-49.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.5,-75,105,159);
p.frameBounds = [rect, new cjs.Rectangle(-50,-49.5,100,99)];


(lib.hero3_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_hair2_img();
	this.instance.setTransform(-131,-143.1);

	this.instance_1 = new lib.hero3_hair1_img();
	this.instance_1.setTransform(-86,-121.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131,-143.1,261,372);
p.frameBounds = [rect, new cjs.Rectangle(-86,-121.5,172,243)];


(lib.hero3_fringe2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_earrings2_img();
	this.instance.setTransform(-72.3,22.5);

	this.instance_1 = new lib.hero3_fringe2_img();
	this.instance_1.setTransform(-99.5,-116);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.5,-116,199,232);
p.frameBounds = [rect];


(lib.hero3_fringe1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_fringe1_img();
	this.instance.setTransform(-90.5,-105.3);

	this.instance_1 = new lib.hero3_earrings1_img();
	this.instance_1.setTransform(-65.9,37.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.5,-105.3,181,210.7);
p.frameBounds = [rect];


(lib.hero3_bottom_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_bottom2_img();
	this.instance.setTransform(-103.5,-122.5);

	this.instance_1 = new lib.hero3_bottom1_img();
	this.instance_1.setTransform(-151,-113);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.5,-122.5,196,236);
p.frameBounds = [rect, new cjs.Rectangle(-151,-113,302,226)];


(lib.hero3_body2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_head2_img();
	this.instance.setTransform(-91.5,-246.5);

	this.instance_1 = new lib.hero3_body2_img();
	this.instance_1.setTransform(-122.5,-101.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.5,-246.5,245,491.7);
p.frameBounds = [rect];


(lib.hero3_body1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_head1_img();
	this.instance.setTransform(-91.5,-245);

	this.instance_1 = new lib.hero3_body1_img();
	this.instance_1.setTransform(-122.5,-101.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.5,-245,245,490.2);
p.frameBounds = [rect];


(lib.hero3_accessory1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_finger_img();
	this.instance.setTransform(-16.5,38.5);

	this.instance_1 = new lib.hero3_accessory1_img();
	this.instance_1.setTransform(-58,-63.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58,-63.4,116,126.9);
p.frameBounds = [rect];


(lib.hero2_top2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_top2_img();
	this.instance.setTransform(-116.5,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116.5,-74,233,148);
p.frameBounds = [rect];


(lib.hero2_top1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_top1_img();
	this.instance.setTransform(-79.5,-78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.5,-78,159,156);
p.frameBounds = [rect];


(lib.hero2_fringe2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe2_img();
	this.instance.setTransform(-130.5,-122.5);

	this.instance_1 = new lib.hero2_earrings2_img();
	this.instance_1.setTransform(-83.5,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130.5,-122.5,262,273);
p.frameBounds = [rect];


(lib.hero2_fringe1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings1_img();
	this.instance.setTransform(-61,57.3);

	this.instance_1 = new lib.hero2_fringe1_img();
	this.instance_1.setTransform(-82.5,-110.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.5,-110.5,165,221);
p.frameBounds = [rect];


(lib.hero2_bottom2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bottom2_img();
	this.instance.setTransform(-65,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.hero2_bottom1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bottom1_img();
	this.instance.setTransform(-173.5,-82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-173.5,-82,347,164);
p.frameBounds = [rect];


(lib.hero2_body2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_head2_img();
	this.instance.setTransform(-74.5,-228.8);

	this.instance_1 = new lib.hero2_body1_img();
	this.instance_1.setTransform(-151.5,-77.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-151.5,-228.8,303,457.8);
p.frameBounds = [rect];


(lib.hero2_body1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_head1_img();
	this.instance.setTransform(-74.5,-228.8);

	this.instance_1 = new lib.hero2_body1_img();
	this.instance_1.setTransform(-151.5,-77.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-151.5,-228.8,303,457.8);
p.frameBounds = [rect];


(lib.hero2_accessory_all2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_accessory1_1_img();
	this.instance.setTransform(-139.6,-229.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-139.6,-229.1,324,197);
p.frameBounds = [rect, null];


(lib.hero2_accessory_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_accessory1_2_img();
	this.instance.setTransform(-139.6,-229.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-139.6,-229.1,324,197);
p.frameBounds = [rect, null];


(lib.hero1_top2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hand2_img();
	this.instance.setTransform(-70.7,19.3);

	this.instance_1 = new lib.hero1_top2_img();
	this.instance_1.setTransform(-88.5,-84);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88.5,-84,177,168);
p.frameBounds = [rect];


(lib.hero1_top1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hand1_img();
	this.instance.setTransform(-77.2,7);

	this.instance_1 = new lib.hero1_top1_img();
	this.instance_1.setTransform(-93.5,-93.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.5,-93.5,187,187);
p.frameBounds = [rect];


(lib.hero1_hair2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hair2_img();
	this.instance.setTransform(-86.5,-132.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.5,-132.5,173,265);
p.frameBounds = [rect];


(lib.hero1_hair1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-86,-138.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86,-138.5,172,277);
p.frameBounds = [rect];


(lib.hero1_fringe2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings2_img();
	this.instance.setTransform(-87.5,39.5);

	this.instance_1 = new lib.hero1_fringe2_img();
	this.instance_1.setTransform(-78.4,-91.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.5,-91.5,175,183);
p.frameBounds = [rect];


(lib.hero1_fringe1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings1_img();
	this.instance.setTransform(-71.9,34.8);

	this.instance_1 = new lib.hero1_fringe1_img();
	this.instance_1.setTransform(-95,-97);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-97,190,194);
p.frameBounds = [rect];


(lib.hero1_bottom_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_bottom2_img();
	this.instance.setTransform(-75,-126.4);

	this.instance_1 = new lib.hero1_bottom1_img();
	this.instance_1.setTransform(-131.5,-101);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-126.4,194,227);
p.frameBounds = [rect, new cjs.Rectangle(-131.5,-101,263,202)];


(lib.hero1_accessory1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hand2_img();
	this.instance.setTransform(-44.7,-20.2);

	this.instance_1 = new lib.hero1_accessory1_img();
	this.instance_1.setTransform(-25.3,-46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.7,-46,89.4,92);
p.frameBounds = [rect];


(lib.hero_b2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_head2_img();
	this.instance.setTransform(-66.6,-240.7);

	this.instance_1 = new lib.hero1_body2_img();
	this.instance_1.setTransform(-105.5,-105.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105.5,-240.7,211,481.5);
p.frameBounds = [rect];


(lib.hero_b1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_head1_img();
	this.instance.setTransform(-66.6,-240.7);

	this.instance_1 = new lib.hero1_body1_img();
	this.instance_1.setTransform(-105.5,-105.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105.5,-240.7,211,481.5);
p.frameBounds = [rect];


(lib.decor_location_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_location_1_1_img();
	this.instance.setTransform(-140,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-240,280,480);
p.frameBounds = [rect];


(lib.decor_2_cards_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_2_cards_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.decor_1_cards_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_1_cards_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.current_location_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_1_1_img();
	this.instance.setTransform(-145,-245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-245,290,490);
p.frameBounds = [rect];


(lib.countdown_bg_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.countdown_bg_img();
	this.instance.setTransform(-195,-195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-195,390,390);
p.frameBounds = [rect];


(lib.card_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_10_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.card_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_9_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.card_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_8_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.card_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_7_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.card_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_6_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.card_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_5_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.card_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_4_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.card_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_3_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.card_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_2_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.card_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_1_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.card_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.card_0_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.body_title_win_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// text
	this.instance = new lib.title_win_en_img();
	this.instance.setTransform(-245,-180);

	this.instance_1 = new lib.title_win_ru_img();
	this.instance_1.setTransform(-245,-180);

	this.instance_2 = new lib.title_win_es_img();
	this.instance_2.setTransform(-245,-180);

	this.instance_3 = new lib.title_win_pt_img();
	this.instance_3.setTransform(-245,-180);

	this.instance_4 = new lib.title_win_tr_img();
	this.instance_4.setTransform(-245,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(2).to({_off:true},1).wait(3).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-180,490,360);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_start_level_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_start_level_en_img();
	this.instance.setTransform(-195,-145);

	this.instance_1 = new lib.title_start_level_ru_img();
	this.instance_1.setTransform(-195,-145);

	this.instance_2 = new lib.title_start_level_es_img();
	this.instance_2.setTransform(-195,-145);

	this.instance_3 = new lib.title_start_level_pt_img();
	this.instance_3.setTransform(-195,-145);

	this.instance_4 = new lib.title_start_level_tr_img();
	this.instance_4.setTransform(-195,-145);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(2).to({_off:true},1).wait(3).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-145,390,290);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_next_round_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_next_round_en_img();
	this.instance.setTransform(-195,-145);

	this.instance_1 = new lib.title_next_round_ru_img();
	this.instance_1.setTransform(-195,-145);

	this.instance_2 = new lib.title_next_round_es_img();
	this.instance_2.setTransform(-195,-145);

	this.instance_3 = new lib.title_next_round_pt_img();
	this.instance_3.setTransform(-195,-145);

	this.instance_4 = new lib.title_next_round_tr_img();
	this.instance_4.setTransform(-195,-145);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(2).to({_off:true},1).wait(3).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-145,390,290);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-195,-170);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-195,-170);

	this.instance_2 = new lib.title_tr_img();
	this.instance_2.setTransform(-195,-170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(1).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-170,390,340);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_loss_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// text
	this.instance = new lib.title_loss_en_img();
	this.instance.setTransform(-245,-180);

	this.instance_1 = new lib.title_loss_ru_img();
	this.instance_1.setTransform(-245,-180);

	this.instance_2 = new lib.title_loss_es_img();
	this.instance_2.setTransform(-245,-180);

	this.instance_3 = new lib.title_loss_pt_img();
	this.instance_3.setTransform(-245,-180);

	this.instance_4 = new lib.title_loss_tr_img();
	this.instance_4.setTransform(-245,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(2).to({_off:true},1).wait(3).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-180,490,360);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.black_drop_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.black_drop_img();
	this.instance.setTransform(-40,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-60,80,120);
p.frameBounds = [rect];


(lib.bg_title_help_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_help_img();
	this.instance.setTransform(-350,-290);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,-290,700,580);
p.frameBounds = [rect];


(lib.bg_start_level_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_start_level_img();
	this.instance.setTransform(-195,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-145,390,290);
p.frameBounds = [rect];


(lib.bg_prize_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_prize_img();
	this.instance.setTransform(-220,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-220,440,440);
p.frameBounds = [rect];


(lib.bg_next_round_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_next_round_img();
	this.instance.setTransform(-195,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-145,390,290);
p.frameBounds = [rect];


(lib.bg_hero_mc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_hero_3_img();
	this.instance.setTransform(-200,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-300,400,600);
p.frameBounds = [rect];


(lib.bg_hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_hero_2_img();
	this.instance.setTransform(-200,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-300,400,600);
p.frameBounds = [rect];


(lib.bg_cards_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_cards_img();
	this.instance.setTransform(-270,-270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-270,540,540);
p.frameBounds = [rect];


(lib.before_hero_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.before_hero_img();
	this.instance.setTransform(-200,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-300,400,600);
p.frameBounds = [rect];


(lib.curtain_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_2_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.curtain_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_1_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.copyright_body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// text
	this.instance = new lib.copyright_title_en_img();
	this.instance.setTransform(-250,-150);

	this.instance_1 = new lib.copyright_title_ru_img();
	this.instance_1.setTransform(-250,-150);

	this.instance_2 = new lib.copyright_title_es_img();
	this.instance_2.setTransform(-250,-150);

	this.instance_3 = new lib.copyright_title_pt_img();
	this.instance_3.setTransform(-250,-150);

	this.instance_4 = new lib.copyright_title_tr_img();
	this.instance_4.setTransform(-250,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(2).to({_off:true},1).wait(3).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-150,500,300);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.copyright_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.copyright_1_img();
	this.instance.setTransform(-250,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-150,500,300);
p.frameBounds = [rect];


(lib.copyright_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("Eh8+Au4MAAAhdvMD59AAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.ParticleGravityExplosionMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gravity_explosion_1_img();
	this.instance.setTransform(-18,-18);

	this.instance_1 = new lib.gravity_explosion_2_img();
	this.instance_1.setTransform(-18,-18);

	this.instance_2 = new lib.gravity_explosion_3_img();
	this.instance_2.setTransform(-18,-18);

	this.instance_3 = new lib.gravity_explosion_4_img();
	this.instance_3.setTransform(-18,-18);

	this.instance_4 = new lib.gravity_explosion_5_img();
	this.instance_4.setTransform(-18,-18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4,p:{scaleX:1,scaleY:1,x:-18,y:-18}}]},1).to({state:[{t:this.instance_4,p:{scaleX:0.778,scaleY:0.778,x:-14,y:-14}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-14,-14,28,28)];


(lib.flash_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash_4_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.flash_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash_3_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.flash_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash_2_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.flash_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash_1_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.bubble_2_2_mc = function(mode,startPosition,loop) {
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
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect];


(lib.blinking_light_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_1_2_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect];


(lib.ParticleBigGravityExplosionMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gravity_big_explosion_1_img();
	this.instance.setTransform(-32,-32);

	this.instance_1 = new lib.gravity_big_explosion_2_img();
	this.instance_1.setTransform(-24,-24,0.75,0.75);

	this.instance_2 = new lib.gravity_big_explosion_3_img();
	this.instance_2.setTransform(-32,-32);

	this.instance_3 = new lib.gravity_big_explosion_4_img();
	this.instance_3.setTransform(-32,-32);

	this.instance_4 = new lib.gravity_big_explosion_5_img();
	this.instance_4.setTransform(-32,-32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4,p:{scaleX:1,scaleY:1,x:-32,y:-32}}]},1).to({state:[{t:this.instance_4,p:{scaleX:0.718,scaleY:0.718,x:-23,y:-23}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-32,64,64);
p.frameBounds = [rect, new cjs.Rectangle(-24,-24,48,48), rect=new cjs.Rectangle(-32,-32,64,64), rect, rect, new cjs.Rectangle(-23,-23,46,46)];


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


(lib.skip_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.skip_img();
	this.instance.setTransform(-90,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDFeIAAq7IcHAAIAAK7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-35,180,70);
p.frameBounds = [rect];


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

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiTiTAAjOQAAjOCTiTQCSiSDOABQDPgBCSCSQCTCTAADOQAADOiTCTQiSCTjPAAQjOAAiSiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
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


(lib.pause_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pause_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.nav_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_1_img();
	this.instance.setTransform(-70,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-40,140,80);
p.frameBounds = [rect];


(lib.nav_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_1_img();
	this.instance.setTransform(-70,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-40,140,80);
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
		///* this.stop();*/
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


(lib.body_forward_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.forward_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.body_decor_buttons_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_buttons_4_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.body_decor_buttons_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_buttons_3_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.body_decor_buttons_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_buttons_2_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.body_decor_buttons_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_buttons_1_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.bg_small_buttons_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_small_buttons_5_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.bg_small_buttons_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_small_buttons_4_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.bg_small_buttons_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_small_buttons_3_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.bg_small_buttons_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_small_buttons_2_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.bg_pause_button_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_pause_button_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,180,180);
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


(lib.again_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.again_1_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.body_title_antiblocking_ads_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_antiblocking_ads_en_img();
	this.instance.setTransform(-320,-140);

	this.instance_1 = new lib.title_antiblocking_ads_ru_img();
	this.instance_1.setTransform(-320,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-320,-140,640,280);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.antiblocking_ads_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300,1.35,1.033);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
p.frameBounds = [rect];


(lib.redirect_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAdedIgdgkIgcAkI9OAAMAAAg85MA7VAAAMAAAA85g");
	mask.setTransform(0,5);

	// image_1
	this.instance = new lib.redirect_4_mc();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({alpha:0.012},15).to({_off:true},1).wait(149).to({_off:false,scaleX:0.5,scaleY:0.5,x:95,y:95},0).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},15).wait(1));

	// image_2
	this.instance_1 = new lib.redirect_5_mc();
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).wait(55).to({alpha:0.012},15).to({_off:true},1).wait(39).to({_off:false,scaleX:0.5,scaleY:0.5,x:-95,y:-95},0).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},15).wait(56));

	// image_1
	this.instance_2 = new lib.redirect_4_mc();
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(94).to({_off:false},0).wait(70).to({_off:true},1).wait(55));

	// bg
	this.instance_3 = new lib.redirect_3_mc();
	this.instance_3.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(220));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EggyAlgMAAAhK/MBBlAAAMAAABK/g");
	this.shape.setTransform(0,50,1,1.083);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,520);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preloader_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.preloader_13_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.25,scaleY:1.25,x:-10},5).to({x:10},10).to({scaleX:1,scaleY:1,x:0},5).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69,-79,138,158);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-74.4,-82.9,144.9,165.9), new cjs.Rectangle(-79.9,-86.9,151.8,173.8), new cjs.Rectangle(-85.3,-90.8,158.7,181.7), new cjs.Rectangle(-90.8,-94.8,165.6,189.6), new cjs.Rectangle(-96.2,-98.7,172.5,197.5), new cjs.Rectangle(-94.2,-98.7,172.5,197.5), new cjs.Rectangle(-92.2,-98.7,172.5,197.5), new cjs.Rectangle(-90.2,-98.7,172.5,197.5), new cjs.Rectangle(-88.2,-98.7,172.5,197.5), new cjs.Rectangle(-86.2,-98.7,172.5,197.5), new cjs.Rectangle(-84.2,-98.7,172.5,197.5), new cjs.Rectangle(-82.2,-98.7,172.5,197.5), new cjs.Rectangle(-80.2,-98.7,172.5,197.5), new cjs.Rectangle(-78.2,-98.7,172.5,197.5), new cjs.Rectangle(-76.2,-98.7,172.5,197.5), new cjs.Rectangle(-74.8,-94.8,165.6,189.6), new cjs.Rectangle(-73.4,-90.8,158.7,181.7), new cjs.Rectangle(-71.9,-86.9,151.8,173.8), new cjs.Rectangle(-70.5,-82.9,144.9,165.9), rect=new cjs.Rectangle(-69,-79,138,158), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("Ao0I1QjqjqgBlLQABlJDqjrQA6g6BAgsQDDiFD3AAQD5AADDCFQBAAsA5A6QDrDrAAFJQAAFLjrDqQjqDqlLABQlJgBjrjqg");

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
	mask.graphics.p("AAZCVIgZgYIgXAYIxlAAQg/ABgrgtQgsgsgBg9QABg9AsgrQArgsA/gBIRvAAIANAQIAOgQIRvAAQA/ABAsAsQArArABA9QgBA9grAsQgsAtg/gBg");
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


(lib.preloader_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preloader_2_mc();
	this.instance.setTransform(-105.5,0);

	this.instance_1 = new lib.preloader_2_mc();
	this.instance_1.setTransform(-175,0);

	this.instance_2 = new lib.preloader_2_mc();
	this.instance_2.setTransform(175,0);

	this.instance_3 = new lib.preloader_2_mc();
	this.instance_3.setTransform(105,0);

	this.instance_4 = new lib.preloader_2_mc();
	this.instance_4.setTransform(35,0);

	this.instance_5 = new lib.preloader_2_mc();
	this.instance_5.setTransform(-35,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-23,410,46.1);
p.frameBounds = [rect];


(lib.preloader_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preloader_2_mc();
	this.instance.setTransform(-140,0);

	this.instance_1 = new lib.preloader_2_mc();
	this.instance_1.setTransform(-70,0);

	this.instance_2 = new lib.preloader_2_mc();
	this.instance_2.setTransform(140,0);

	this.instance_3 = new lib.preloader_2_mc();
	this.instance_3.setTransform(70,0);

	this.instance_4 = new lib.preloader_2_mc();
	this.instance_4.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-23,340,46.1);
p.frameBounds = [rect];


(lib.preloader_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preloader_2_4_mc();
	this.instance.setTransform(800,550);
	this.instance.alpha = 0.199;

	this.instance_1 = new lib.preloader_2_4_mc();
	this.instance_1.setTransform(0,550);
	this.instance_1.alpha = 0.199;

	this.instance_2 = new lib.preloader_2_3_mc();
	this.instance_2.setTransform(800,500);
	this.instance_2.alpha = 0.148;

	this.instance_3 = new lib.preloader_2_3_mc();
	this.instance_3.setTransform(0,500);
	this.instance_3.alpha = 0.148;

	this.instance_4 = new lib.preloader_2_4_mc();
	this.instance_4.setTransform(0,450);
	this.instance_4.alpha = 0.102;

	this.instance_5 = new lib.preloader_2_4_mc();
	this.instance_5.setTransform(800,450);
	this.instance_5.alpha = 0.102;

	this.instance_6 = new lib.preloader_2_3_mc();
	this.instance_6.setTransform(0,400);
	this.instance_6.alpha = 0.051;

	this.instance_7 = new lib.preloader_2_3_mc();
	this.instance_7.setTransform(800,400);
	this.instance_7.alpha = 0.051;

	this.instance_8 = new lib.preloader_4_mc();
	this.instance_8.setTransform(400,50);
	this.instance_8.alpha = 0.199;

	this.instance_9 = new lib.preloader_3_mc();
	this.instance_9.setTransform(400,100);
	this.instance_9.alpha = 0.148;

	this.instance_10 = new lib.preloader_4_mc();
	this.instance_10.setTransform(400,150);
	this.instance_10.alpha = 0.102;

	this.instance_11 = new lib.preloader_3_mc();
	this.instance_11.setTransform(400,200);
	this.instance_11.alpha = 0.051;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_12 = new lib.preloader_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.pause_app_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pause_app_3_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.pause_app_4_5_mc();
	this.instance_1.setTransform(4,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14,-35,32,72);
p.frameBounds = [rect];


(lib.pause_app_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pause_app_2_5_mc();
	this.instance.setTransform(-22,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.pause_app_2_5_mc();
	this.instance_1.setTransform(22,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36,-35,76,72);
p.frameBounds = [rect];


(lib.pause_app_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pause_app_2_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.pause_app_3_4_mc();
	this.instance_1.setTransform(4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.5,-45,79,94);
p.frameBounds = [rect];


(lib.pause_app_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pause_app_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.pause_app_4_1_mc();
	this.instance_1.setTransform(0,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.pause_app_2_1_mc();
	this.instance_2.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.orientation_lock_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.orientation_lock_8_mc();
	this.instance.setTransform(60,0);

	this.instance_1 = new lib.orientation_lock_6_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-12,107,24);
p.frameBounds = [rect];


(lib.languages_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.languages_2_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({rotation:-5},10).to({rotation:5},20).to({rotation:0},10).wait(1));

	// graph
	this.instance_1 = new lib.languages_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-60.5,-60.5,121.1,121.1), new cjs.Rectangle(-61,-61,122.1,122.1), new cjs.Rectangle(-61.5,-61.5,123.1,123.1), new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-62.5,-62.5,125.1,125.1), new cjs.Rectangle(-63,-63,126.1,126.1), new cjs.Rectangle(-63.5,-63.5,127.1,127.1), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-64.5,-64.4,129,129), new cjs.Rectangle(-65,-65,130,130), new cjs.Rectangle(-64.5,-64.4,129,129), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-63.5,-63.5,127.1,127.1), new cjs.Rectangle(-63,-63,126.1,126.1), new cjs.Rectangle(-62.5,-62.5,125.1,125.1), new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-61.5,-61.5,123.1,123.1), new cjs.Rectangle(-61,-61,122.1,122.1), new cjs.Rectangle(-60.5,-60.5,121.1,121.1), new cjs.Rectangle(-60,-60,120,120), new cjs.Rectangle(-60.5,-60.5,121.1,121.1), new cjs.Rectangle(-61,-61,122.1,122.1), new cjs.Rectangle(-61.5,-61.5,123.1,123.1), new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-62.5,-62.5,125.1,125.1), new cjs.Rectangle(-63,-63,126.1,126.1), new cjs.Rectangle(-63.5,-63.5,127.1,127.1), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-64.4,-64.5,129,129), new cjs.Rectangle(-65,-65,130,130), new cjs.Rectangle(-64.4,-64.5,129,129), new cjs.Rectangle(-64,-64,128.1,128.1), new cjs.Rectangle(-63.5,-63.5,127.1,127.1), new cjs.Rectangle(-63,-63,126.1,126.1), new cjs.Rectangle(-62.5,-62.5,125.1,125.1), new cjs.Rectangle(-62,-62,124.1,124.1), new cjs.Rectangle(-61.5,-61.5,123.1,123.1), new cjs.Rectangle(-61,-61,122.1,122.1), new cjs.Rectangle(-60.5,-60.5,121.1,121.1), new cjs.Rectangle(-60,-60,120,120)];


(lib.languages_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.languages_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},39).to({alpha:1},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-65,180,130);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.languages_1_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.languages_3_3_mc();
	this.instance.setTransform(0,0,0.75,0.75);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-60,-60,120,120)];


(lib.language_zh_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.name = "zh";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.language_zh_img();
	this.instance.setTransform(-75,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// check
	this.instance_1 = new lib.languages_1_2_mc();
	this.instance_1.alpha = 0.012;

	this.instance_2 = new lib.languages_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDKJIAA0RIcHAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-65,180,130);
p.frameBounds = [rect, rect];


(lib.language_tr_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.name = "tr";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.language_tr_img();
	this.instance.setTransform(-75,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// check
	this.instance_1 = new lib.languages_1_2_mc();
	this.instance_1.alpha = 0.012;

	this.instance_2 = new lib.languages_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDKJIAA0RIcHAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-65,180,130);
p.frameBounds = [rect, rect];


(lib.language_ru_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.name = "ru";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.language_ru_img();
	this.instance.setTransform(-75,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// check
	this.instance_1 = new lib.languages_1_2_mc();
	this.instance_1.alpha = 0.012;

	this.instance_2 = new lib.languages_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDKJIAA0RIcHAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-65,180,130);
p.frameBounds = [rect, rect];


(lib.language_pt_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.name = "pt";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.language_pt_img();
	this.instance.setTransform(-75,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// check
	this.instance_1 = new lib.languages_1_2_mc();
	this.instance_1.alpha = 0.012;

	this.instance_2 = new lib.languages_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDKJIAA0RIcHAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-65,180,130);
p.frameBounds = [rect, rect];


(lib.language_ja_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.name = "ja";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.language_ja_img();
	this.instance.setTransform(-75,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// check
	this.instance_1 = new lib.languages_1_2_mc();
	this.instance_1.alpha = 0.012;

	this.instance_2 = new lib.languages_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDKJIAA0RIcHAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-65,180,130);
p.frameBounds = [rect, rect];


(lib.language_it_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.name = "it";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.language_it_img();
	this.instance.setTransform(-75,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// check
	this.instance_1 = new lib.languages_1_2_mc();
	this.instance_1.alpha = 0.012;

	this.instance_2 = new lib.languages_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDKJIAA0RIcHAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-65,180,130);
p.frameBounds = [rect, rect];


(lib.language_id_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.name = "id";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.language_id_img();
	this.instance.setTransform(-75,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// check
	this.instance_1 = new lib.languages_1_2_mc();
	this.instance_1.alpha = 0.012;

	this.instance_2 = new lib.languages_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDKJIAA0RIcHAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-65,180,130);
p.frameBounds = [rect, rect];


(lib.language_hi_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.name = "hi";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.language_hi_img();
	this.instance.setTransform(-75,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// check
	this.instance_1 = new lib.languages_1_2_mc();
	this.instance_1.alpha = 0.012;

	this.instance_2 = new lib.languages_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDKJIAA0RIcHAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-65,180,130);
p.frameBounds = [rect, rect];


(lib.language_fr_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.name = "fr";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.language_fr_img();
	this.instance.setTransform(-75,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// check
	this.instance_1 = new lib.languages_1_2_mc();
	this.instance_1.alpha = 0.012;

	this.instance_2 = new lib.languages_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDKJIAA0RIcHAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-65,180,130);
p.frameBounds = [rect, rect];


(lib.language_es_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.name = "es";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.language_es_img();
	this.instance.setTransform(-75,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// check
	this.instance_1 = new lib.languages_1_2_mc();
	this.instance_1.alpha = 0.012;

	this.instance_2 = new lib.languages_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDKJIAA0RIcHAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-65,180,130);
p.frameBounds = [rect, rect];


(lib.language_en_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.name = "en";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.language_en_img();
	this.instance.setTransform(-75,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// check
	this.instance_1 = new lib.languages_1_2_mc();
	this.instance_1.alpha = 0.012;

	this.instance_2 = new lib.languages_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDKJIAA0RIcHAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-65,180,130);
p.frameBounds = [rect, rect];


(lib.language_de_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.name = "de";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.language_de_img();
	this.instance.setTransform(-75,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// check
	this.instance_1 = new lib.languages_1_2_mc();
	this.instance_1.alpha = 0.012;

	this.instance_2 = new lib.languages_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDKJIAA0RIcHAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-65,180,130);
p.frameBounds = [rect, rect];


(lib.language_ar_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.name = "ar";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.language_ar_img();
	this.instance.setTransform(-75,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// check
	this.instance_1 = new lib.languages_1_2_mc();
	this.instance_1.alpha = 0.012;

	this.instance_2 = new lib.languages_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDKJIAA0RIcHAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-65,180,130);
p.frameBounds = [rect, rect];


(lib.title_win_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		установка языка
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		try
		{
			this.body_mc.gotoAndStop(app.getLanguageFunc());
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_win_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.text_bubble_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-180,490,360);
p.frameBounds = [rect];


(lib.title_start_level_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		установка языка
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		try
		{
			this.body_mc.gotoAndStop(app.getLanguageFunc());
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// decor
	this.instance = new lib.mini_next_button_mc();
	this.instance.setTransform(0,115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.body_title_start_level_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance_1 = new lib.bg_start_level_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-145,390.5,305);
p.frameBounds = [rect];


(lib.title_next_round_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		установка языка
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		try
		{
			this.body_mc.gotoAndStop(app.getLanguageFunc());
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// decor
	this.instance = new lib.mini_next_button_mc();
	this.instance.setTransform(0,115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.body_title_next_round_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance_1 = new lib.bg_next_round_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-145,390.5,305);
p.frameBounds = [rect];


(lib.title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		установка языка
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		try
		{
			this.body_mc.gotoAndStop(app.getLanguageFunc());
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-170,390,340);
p.frameBounds = [rect];


(lib.title_loss_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		установка языка
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		try
		{
			this.body_mc.gotoAndStop(app.getLanguageFunc());
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_loss_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.text_bubble_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-180,490,360);
p.frameBounds = [rect];


(lib.prize_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{location_1_round_1:0,location_1_round_2:1,location_1_round_3:2,location_1_round_4:3,location_1_round_5:4,location_2_round_1:5,location_2_round_2:6,location_2_round_3:7,location_2_round_4:8,location_2_round_5:9,location_3_round_1:10,location_3_round_2:11,location_3_round_3:12,location_3_round_4:13,location_3_round_5:14});

	// graph
	this.instance = new lib.prize_1_1_img();
	this.instance.setTransform(-220,-220);

	this.instance_1 = new lib.prize_2_1_img();
	this.instance_1.setTransform(-220,-220);

	this.instance_2 = new lib.prize_3_1_img();
	this.instance_2.setTransform(-220,-220);

	this.instance_3 = new lib.prize_4_1_img();
	this.instance_3.setTransform(-220,-220);

	this.instance_4 = new lib.prize_5_1_img();
	this.instance_4.setTransform(-220,-220);

	this.instance_5 = new lib.prize_1_2_img();
	this.instance_5.setTransform(-220,-220);

	this.instance_6 = new lib.prize_2_2_img();
	this.instance_6.setTransform(-220,-220);

	this.instance_7 = new lib.prize_3_2_img();
	this.instance_7.setTransform(-220,-220);

	this.instance_8 = new lib.prize_4_2_img();
	this.instance_8.setTransform(-220,-220);

	this.instance_9 = new lib.prize_5_2_img();
	this.instance_9.setTransform(-220,-220);

	this.instance_10 = new lib.prize_1_3_img();
	this.instance_10.setTransform(-220,-220);

	this.instance_11 = new lib.prize_2_3_img();
	this.instance_11.setTransform(-220,-220);

	this.instance_12 = new lib.prize_3_3_img();
	this.instance_12.setTransform(-220,-220);

	this.instance_13 = new lib.prize_4_3_img();
	this.instance_13.setTransform(-220,-220);

	this.instance_14 = new lib.prize_5_3_img();
	this.instance_14.setTransform(-220,-220);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).wait(1));

	// decor
	this.instance_15 = new lib.bg_prize_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-220,440,440);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.prize_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{end:99});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// foreground
	this.instance = new lib.prize_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	// body
	this.body_mc = new lib.prize_3_mc();
	this.body_mc.setTransform(0,100,0.762,0.762);
	this.body_mc.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).to({scaleX:1,scaleY:1,y:0,alpha:1},19).wait(60).to({scaleX:0.76,scaleY:0.76,x:400,alpha:0.012},20).wait(1));

	// background
	this.instance_1 = new lib.prize_2_mc();
	this.instance_1.setTransform(0,100);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:0,alpha:1},19).to({rotation:90},20).to({rotation:180},20).to({rotation:0},20).to({alpha:0.012},5).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-300,800,800);
p.frameBounds = [rect, new cjs.Rectangle(-400,-305.2,800,800), new cjs.Rectangle(-400,-310.5,800,800), new cjs.Rectangle(-400,-315.8,800,800), new cjs.Rectangle(-400,-321,800,800), new cjs.Rectangle(-400,-326.3,800,800), new cjs.Rectangle(-400,-331.6,800,800), new cjs.Rectangle(-400,-336.8,800,800), new cjs.Rectangle(-400,-342.1,800,800), new cjs.Rectangle(-400,-347.3,800,800), new cjs.Rectangle(-400,-352.6,800,800), new cjs.Rectangle(-400,-357.9,800,800), new cjs.Rectangle(-400,-363.1,800,800), new cjs.Rectangle(-400,-368.4,800,800), new cjs.Rectangle(-400,-373.7,800,800), new cjs.Rectangle(-400,-378.9,800,800), new cjs.Rectangle(-400,-384.2,800,800), new cjs.Rectangle(-400,-389.4,800,800), new cjs.Rectangle(-400,-394.7,800,800), new cjs.Rectangle(-400,-400,800,800), new cjs.Rectangle(-430,-430,860.1,860.1), new cjs.Rectangle(-457.4,-457.4,914.9,914.9), new cjs.Rectangle(-481,-481,962.1,962.1), new cjs.Rectangle(-502.8,-502.7,1005.6,1005.6), new cjs.Rectangle(-522.6,-522.6,1045.3,1045.3), new cjs.Rectangle(-537.4,-537.4,1074.8,1074.8), new cjs.Rectangle(-549.3,-549.3,1098.8,1098.8), new cjs.Rectangle(-557.6,-557.6,1115.3,1115.3), new cjs.Rectangle(-562.9,-562.9,1125.9,1125.9), new cjs.Rectangle(-565.7,-565.6,1131.4,1131.4), new cjs.Rectangle(-563,-562.9,1125.9,1125.9), new cjs.Rectangle(-557.6,-557.6,1115.3,1115.3), new cjs.Rectangle(-549.4,-549.3,1098.8,1098.8), new cjs.Rectangle(-537.4,-537.4,1074.8,1074.8), new cjs.Rectangle(-522.6,-522.6,1045.3,1045.3), new cjs.Rectangle(-502.8,-502.7,1005.6,1005.6), new cjs.Rectangle(-481.1,-481,962.1,962.1), new cjs.Rectangle(-457.5,-457.4,914.9,914.9), new cjs.Rectangle(-430.1,-430,860.1,860.1), new cjs.Rectangle(-400,-400,800,800), new cjs.Rectangle(-430.1,-430,860.1,860.1), new cjs.Rectangle(-457.5,-457.4,914.9,914.9), new cjs.Rectangle(-481.1,-481,962.1,962.1), new cjs.Rectangle(-502.8,-502.8,1005.6,1005.6), new cjs.Rectangle(-522.6,-522.6,1045.3,1045.3), new cjs.Rectangle(-537.4,-537.4,1074.8,1074.8), new cjs.Rectangle(-549.4,-549.3,1098.8,1098.8), new cjs.Rectangle(-557.6,-557.6,1115.3,1115.3), new cjs.Rectangle(-563,-562.9,1125.9,1125.9), new cjs.Rectangle(-565.7,-565.7,1131.4,1131.4), new cjs.Rectangle(-563,-563,1125.9,1125.9), new cjs.Rectangle(-557.6,-557.6,1115.3,1115.3), new cjs.Rectangle(-549.4,-549.4,1098.8,1098.8), new cjs.Rectangle(-537.4,-537.4,1074.8,1074.8), new cjs.Rectangle(-522.6,-522.6,1045.3,1045.3), new cjs.Rectangle(-502.8,-502.8,1005.6,1005.6), new cjs.Rectangle(-481.1,-481.1,962.1,962.1), new cjs.Rectangle(-457.5,-457.5,914.9,914.9), new cjs.Rectangle(-430.1,-430.1,860.1,860.1), new cjs.Rectangle(-400,-400,800,800), new cjs.Rectangle(-457.5,-457.5,914.9,914.9), new cjs.Rectangle(-503.6,-503.6,1007.3,1007.3), new cjs.Rectangle(-536.8,-536.8,1073.7,1073.7), new cjs.Rectangle(-557.6,-557.6,1115.3,1115.3), new cjs.Rectangle(-565.7,-565.7,1131.4,1131.4), new cjs.Rectangle(-557.6,-557.6,1115.3,1115.3), new cjs.Rectangle(-536.8,-536.8,1073.7,1073.7), new cjs.Rectangle(-503.6,-503.6,1007.3,1007.3), new cjs.Rectangle(-457.5,-457.4,914.9,914.9), new cjs.Rectangle(-400,-400,800,800), new cjs.Rectangle(-457.5,-457.4,914.9,914.9), new cjs.Rectangle(-503.6,-503.6,1007.3,1007.3), new cjs.Rectangle(-536.8,-536.8,1073.7,1073.7), new cjs.Rectangle(-557.6,-557.6,1115.3,1115.3), new cjs.Rectangle(-565.7,-565.6,1131.4,1131.4), new cjs.Rectangle(-557.6,-557.6,1115.3,1115.3), new cjs.Rectangle(-536.8,-536.8,1073.7,1073.7), new cjs.Rectangle(-503.6,-503.6,1007.3,1007.3), new cjs.Rectangle(-457.4,-457.4,914.9,914.9), rect=new cjs.Rectangle(-400,-400,800,800), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-400,811.2,800), new cjs.Rectangle(-400,-400,828.6,800), new cjs.Rectangle(-400,-400,845.9,800), new cjs.Rectangle(-400,-400,863.3,800), new cjs.Rectangle(-400,-400,880.7,800), new cjs.Rectangle(-400,-400,898.1,800), new cjs.Rectangle(-400,-400,915.5,800), new cjs.Rectangle(-400,-400,932.8,800), new cjs.Rectangle(-400,-400,950.2,800), new cjs.Rectangle(-400,-400,967.6,800)];


(lib.memoryTimer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"end":79});

	// animation
	this.instance = new lib.memory_timer_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.01},78).to({_off:true},1).wait(1));

	// bg
	this.instance_1 = new lib.memory_timer_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

	// shadow
	this.instance_2 = new lib.memory_timer_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-10,110,20);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.indicator_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.indicator_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.398},39).to({alpha:1},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-35,420,70);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.indicator_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.indicator_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},29).to({alpha:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-16,385,32);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.indicator_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_199 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(199).call(this.frame_199).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A9VBxQgugvgBhCQABhAAugwQAwguBCgBQBCABAvAuQAPAQAKARMA2OAAAQAgAAAYAYQAXAXABAgQgBAggXAXQgYAYggAAMg2NAAAQgKASgQAQQgvAvhCAAQhCAAgwgvg");
	mask.setTransform(192.5,0);

	// band
	this.band_mc = new lib.indicator_3_mc();
	this.band_mc.setTransform(0,0,0.003,1);

	this.band_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.band_mc).to({scaleX:1},199).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-16,1.1,32);
p.frameBounds = [rect, new cjs.Rectangle(0,-16,3,32), new cjs.Rectangle(0,-16,4.9,32), new cjs.Rectangle(0,-16,6.9,32), new cjs.Rectangle(0,-16,8.8,32), new cjs.Rectangle(0,-16,10.7,32), new cjs.Rectangle(0,-16,12.6,32), new cjs.Rectangle(0,-16,14.6,32), new cjs.Rectangle(0,-16,16.5,32), new cjs.Rectangle(0,-16,18.4,32), new cjs.Rectangle(0,-16,20.4,32), new cjs.Rectangle(0,-16,22.3,32), new cjs.Rectangle(0,-16,24.2,32), new cjs.Rectangle(0,-16,26.1,32), new cjs.Rectangle(0,-16,28.1,32), new cjs.Rectangle(0,-16,30,32), new cjs.Rectangle(0,-16,31.9,32), new cjs.Rectangle(0,-16,33.9,32), new cjs.Rectangle(0,-16,35.8,32), new cjs.Rectangle(0,-16,37.7,32), new cjs.Rectangle(0,-16,39.6,32), new cjs.Rectangle(0,-16,41.6,32), new cjs.Rectangle(0,-16,43.5,32), new cjs.Rectangle(0,-16,45.4,32), new cjs.Rectangle(0,-16,47.4,32), new cjs.Rectangle(0,-16,49.3,32), new cjs.Rectangle(0,-16,51.2,32), new cjs.Rectangle(0,-16,53.2,32), new cjs.Rectangle(0,-16,55.1,32), new cjs.Rectangle(0,-16,57,32), new cjs.Rectangle(0,-16,58.9,32), new cjs.Rectangle(0,-16,60.9,32), new cjs.Rectangle(0,-16,62.8,32), new cjs.Rectangle(0,-16,64.7,32), new cjs.Rectangle(0,-16,66.7,32), new cjs.Rectangle(0,-16,68.6,32), new cjs.Rectangle(0,-16,70.5,32), new cjs.Rectangle(0,-16,72.5,32), new cjs.Rectangle(0,-16,74.4,32), new cjs.Rectangle(0,-16,76.3,32), new cjs.Rectangle(0,-16,78.2,32), new cjs.Rectangle(0,-16,80.2,32), new cjs.Rectangle(0,-16,82.1,32), new cjs.Rectangle(0,-16,84,32), new cjs.Rectangle(0,-16,86,32), new cjs.Rectangle(0,-16,87.9,32), new cjs.Rectangle(0,-16,89.8,32), new cjs.Rectangle(0,-16,91.7,32), new cjs.Rectangle(0,-16,93.7,32), new cjs.Rectangle(0,-16,95.6,32), new cjs.Rectangle(0,-16,97.5,32), new cjs.Rectangle(0,-16,99.5,32), new cjs.Rectangle(0,-16,101.4,32), new cjs.Rectangle(0,-16,103.3,32), new cjs.Rectangle(0,-16,105.3,32), new cjs.Rectangle(0,-16,107.2,32), new cjs.Rectangle(0,-16,109.1,32), new cjs.Rectangle(0,-16,111,32), new cjs.Rectangle(0,-16,113,32), new cjs.Rectangle(0,-16,114.9,32), new cjs.Rectangle(0,-16,116.8,32), new cjs.Rectangle(0,-16,118.8,32), new cjs.Rectangle(0,-16,120.7,32), new cjs.Rectangle(0,-16,122.6,32), new cjs.Rectangle(0,-16,124.5,32), new cjs.Rectangle(0,-16,126.5,32), new cjs.Rectangle(0,-16,128.4,32), new cjs.Rectangle(0,-16,130.3,32), new cjs.Rectangle(0,-16,132.3,32), new cjs.Rectangle(0,-16,134.2,32), new cjs.Rectangle(0,-16,136.1,32), new cjs.Rectangle(0,-16,138.1,32), new cjs.Rectangle(0,-16,140,32), new cjs.Rectangle(0,-16,141.9,32), new cjs.Rectangle(0,-16,143.8,32), new cjs.Rectangle(0,-16,145.8,32), new cjs.Rectangle(0,-16,147.7,32), new cjs.Rectangle(0,-16,149.6,32), new cjs.Rectangle(0,-16,151.6,32), new cjs.Rectangle(0,-16,153.5,32), new cjs.Rectangle(0,-16,155.4,32), new cjs.Rectangle(0,-16,157.3,32), new cjs.Rectangle(0,-16,159.3,32), new cjs.Rectangle(0,-16,161.2,32), new cjs.Rectangle(0,-16,163.1,32), new cjs.Rectangle(0,-16,165.1,32), new cjs.Rectangle(0,-16,167,32), new cjs.Rectangle(0,-16,168.9,32), new cjs.Rectangle(0,-16,170.9,32), new cjs.Rectangle(0,-16,172.8,32), new cjs.Rectangle(0,-16,174.7,32), new cjs.Rectangle(0,-16,176.6,32), new cjs.Rectangle(0,-16,178.6,32), new cjs.Rectangle(0,-16,180.5,32), new cjs.Rectangle(0,-16,182.4,32), new cjs.Rectangle(0,-16,184.4,32), new cjs.Rectangle(0,-16,186.3,32), new cjs.Rectangle(0,-16,188.2,32), new cjs.Rectangle(0,-16,190.2,32), new cjs.Rectangle(0,-16,192.1,32), new cjs.Rectangle(0,-16,194,32), new cjs.Rectangle(0,-16,195.9,32), new cjs.Rectangle(0,-16,197.9,32), new cjs.Rectangle(0,-16,199.8,32), new cjs.Rectangle(0,-16,201.7,32), new cjs.Rectangle(0,-16,203.7,32), new cjs.Rectangle(0,-16,205.6,32), new cjs.Rectangle(0,-16,207.5,32), new cjs.Rectangle(0,-16,209.4,32), new cjs.Rectangle(0,-16,211.4,32), new cjs.Rectangle(0,-16,213.3,32), new cjs.Rectangle(0,-16,215.2,32), new cjs.Rectangle(0,-16,217.2,32), new cjs.Rectangle(0,-16,219.1,32), new cjs.Rectangle(0,-16,221,32), new cjs.Rectangle(0,-16,223,32), new cjs.Rectangle(0,-16,224.9,32), new cjs.Rectangle(0,-16,226.8,32), new cjs.Rectangle(0,-16,228.7,32), new cjs.Rectangle(0,-16,230.7,32), new cjs.Rectangle(0,-16,232.6,32), new cjs.Rectangle(0,-16,234.5,32), new cjs.Rectangle(0,-16,236.5,32), new cjs.Rectangle(0,-16,238.4,32), new cjs.Rectangle(0,-16,240.3,32), new cjs.Rectangle(0,-16,242.2,32), new cjs.Rectangle(0,-16,244.2,32), new cjs.Rectangle(0,-16,246.1,32), new cjs.Rectangle(0,-16,248,32), new cjs.Rectangle(0,-16,250,32), new cjs.Rectangle(0,-16,251.9,32), new cjs.Rectangle(0,-16,253.8,32), new cjs.Rectangle(0,-16,255.8,32), new cjs.Rectangle(0,-16,257.7,32), new cjs.Rectangle(0,-16,259.6,32), new cjs.Rectangle(0,-16,261.5,32), new cjs.Rectangle(0,-16,263.5,32), new cjs.Rectangle(0,-16,265.4,32), new cjs.Rectangle(0,-16,267.3,32), new cjs.Rectangle(0,-16,269.3,32), new cjs.Rectangle(0,-16,271.2,32), new cjs.Rectangle(0,-16,273.1,32), new cjs.Rectangle(0,-16,275,32), new cjs.Rectangle(0,-16,277,32), new cjs.Rectangle(0,-16,278.9,32), new cjs.Rectangle(0,-16,280.8,32), new cjs.Rectangle(0,-16,282.8,32), new cjs.Rectangle(0,-16,284.7,32), new cjs.Rectangle(0,-16,286.6,32), new cjs.Rectangle(0,-16,288.6,32), new cjs.Rectangle(0,-16,290.5,32), new cjs.Rectangle(0,-16,292.4,32), new cjs.Rectangle(0,-16,294.3,32), new cjs.Rectangle(0,-16,296.3,32), new cjs.Rectangle(0,-16,298.2,32), new cjs.Rectangle(0,-16,300.1,32), new cjs.Rectangle(0,-16,302.1,32), new cjs.Rectangle(0,-16,304,32), new cjs.Rectangle(0,-16,305.9,32), new cjs.Rectangle(0,-16,307.8,32), new cjs.Rectangle(0,-16,309.8,32), new cjs.Rectangle(0,-16,311.7,32), new cjs.Rectangle(0,-16,313.6,32), new cjs.Rectangle(0,-16,315.6,32), new cjs.Rectangle(0,-16,317.5,32), new cjs.Rectangle(0,-16,319.4,32), new cjs.Rectangle(0,-16,321.3,32), new cjs.Rectangle(0,-16,323.3,32), new cjs.Rectangle(0,-16,325.2,32), new cjs.Rectangle(0,-16,327.1,32), new cjs.Rectangle(0,-16,329.1,32), new cjs.Rectangle(0,-16,331,32), new cjs.Rectangle(0,-16,332.9,32), new cjs.Rectangle(0,-16,334.9,32), new cjs.Rectangle(0,-16,336.8,32), new cjs.Rectangle(0,-16,338.7,32), new cjs.Rectangle(0,-16,340.6,32), new cjs.Rectangle(0,-16,342.6,32), new cjs.Rectangle(0,-16,344.5,32), new cjs.Rectangle(0,-16,346.4,32), new cjs.Rectangle(0,-16,348.4,32), new cjs.Rectangle(0,-16,350.3,32), new cjs.Rectangle(0,-16,352.2,32), new cjs.Rectangle(0,-16,354.2,32), new cjs.Rectangle(0,-16,356.1,32), new cjs.Rectangle(0,-16,358,32), new cjs.Rectangle(0,-16,359.9,32), new cjs.Rectangle(0,-16,361.9,32), new cjs.Rectangle(0,-16,363.8,32), new cjs.Rectangle(0,-16,365.7,32), new cjs.Rectangle(0,-16,367.7,32), new cjs.Rectangle(0,-16,369.6,32), new cjs.Rectangle(0,-16,371.5,32), new cjs.Rectangle(0,-16,373.4,32), new cjs.Rectangle(0,-16,375.4,32), new cjs.Rectangle(0,-16,377.3,32), new cjs.Rectangle(0,-16,379.2,32), new cjs.Rectangle(0,-16,381.2,32), new cjs.Rectangle(0,-16,383.1,32), new cjs.Rectangle(0,-16,385,32)];


(lib.indicator_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.petiole_mc();
	this.instance.setTransform(-199.1,-23.1,0.375,0.375,-20,0,0,-0.3,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.instance_1 = new lib.indicator_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// frame
	this.instance_2 = new lib.indicator_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// body
	this.body_mc = new lib.indicator_2_mc();
	this.body_mc.setTransform(-193,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance_3 = new lib.indicator_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-214.4,-38.4,424.4,73.4);
p.frameBounds = [rect];


(lib.hero3_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_fringe2_mc();
	this.instance.setTransform(-2.6,13.9);

	this.instance_1 = new lib.hero3_fringe1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.1,-102.1,199,232);
p.frameBounds = [rect, new cjs.Rectangle(-90.5,-105.3,181,210.7)];


(lib.hero3_body_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_body2_mc();

	this.instance_1 = new lib.hero3_body1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.5,-246.5,245,491.7);
p.frameBounds = [rect, new cjs.Rectangle(-122.5,-245,245,490.2)];


(lib.hero3_accessory_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_accessory1_mc();
	this.instance.setTransform(130.1,47.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(72.1,-16.1,116,126.9);
p.frameBounds = [rect, null];


(lib.hero2_top_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_top2_mc();
	this.instance.setTransform(-1,-12.9);

	this.instance_1 = new lib.hero2_top1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117.5,-86.9,233,148);
p.frameBounds = [rect, new cjs.Rectangle(-79.5,-78,159,156)];


(lib.hero2_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_fringe2_mc();
	this.instance.setTransform(1,26);

	this.instance_1 = new lib.hero2_fringe1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-129.6,-96.5,262,273);
p.frameBounds = [rect, new cjs.Rectangle(-82.5,-110.5,165,221)];


(lib.hero2_bottom_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_bottom2_mc();
	this.instance.setTransform(-1,-19.9);

	this.instance_1 = new lib.hero2_bottom1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66,-84.9,130,130);
p.frameBounds = [rect, new cjs.Rectangle(-173.5,-82,347,164)];


(lib.hero2_body_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_body2_mc();

	this.instance_1 = new lib.hero2_body1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-151.5,-228.8,303,457.8);
p.frameBounds = [rect, rect];


(lib.hero1_top_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_top2_mc();
	this.instance.setTransform(-4.9,-10.9);

	this.instance_1 = new lib.hero1_top1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.4,-94.9,177,168);
p.frameBounds = [rect, new cjs.Rectangle(-93.5,-93.5,187,187)];


(lib.hero1_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_hair2_mc();
	this.instance.setTransform(2.9,-27.9);

	this.instance_1 = new lib.hero1_hair1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.6,-160.4,173,265);
p.frameBounds = [rect, new cjs.Rectangle(-86,-138.5,172,277)];


(lib.hero1_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_fringe2_mc();
	this.instance.setTransform(-0.2,-4.1);

	this.instance_1 = new lib.hero1_fringe1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.7,-95.6,175,183);
p.frameBounds = [rect, new cjs.Rectangle(-95,-97,190,194)];


(lib.hero1_accessory_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_accessory1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.7,-46,89.4,92);
p.frameBounds = [rect, null];


(lib.hero_b_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_b2_mc();

	this.instance_1 = new lib.hero_b1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105.5,-240.7,211,481.5);
p.frameBounds = [rect, rect];


(lib.hero_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// round_1
	this.round_1 = new lib.hero3_fringe_all_mc();
	this.round_1.setTransform(-5.5,-94.2);

	this.timeline.addTween(cjs.Tween.get(this.round_1).wait(1));

	// round_5
	this.round_5 = new lib.hero3_accessory_all_mc();
	this.round_5.setTransform(-23.1,113.2);

	this.timeline.addTween(cjs.Tween.get(this.round_5).wait(1));

	// round_3
	this.round_3 = new lib.hero3_top_all_mc();
	this.round_3.setTransform(7.5,75.8);

	this.timeline.addTween(cjs.Tween.get(this.round_3).wait(1));

	// round_4
	this.round_4 = new lib.hero3_bottom_all_mc();
	this.round_4.setTransform(1.4,213.4);

	this.timeline.addTween(cjs.Tween.get(this.round_4).wait(1));

	// round_2
	this.round_2 = new lib.hero3_body_all_mc();
	this.round_2.setTransform(1.5,81.4);

	this.timeline.addTween(cjs.Tween.get(this.round_2).wait(1));

	// round_1_second
	this.round_1_second = new lib.hero3_hair_all_mc();
	this.round_1_second.setTransform(-13,-31.4);

	this.timeline.addTween(cjs.Tween.get(this.round_1_second).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-144,-196.4,309,523.3);
p.frameBounds = [rect];


(lib.hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// round_1
	this.round_1 = new lib.hero2_fringe_all_mc();
	this.round_1.setTransform(-4.5,-74.3);

	this.timeline.addTween(cjs.Tween.get(this.round_1).wait(1));

	// round_5
	this.round_5 = new lib.hero2_accessory_all_mc();
	this.round_5.setTransform(-23.1,113.2);

	this.timeline.addTween(cjs.Tween.get(this.round_5).wait(1));

	// round_3
	this.round_3 = new lib.hero2_top_all_mc();
	this.round_3.setTransform(-2.5,118.6);

	this.timeline.addTween(cjs.Tween.get(this.round_3).wait(1));

	// round_4
	this.round_4 = new lib.hero2_bottom_all_mc();
	this.round_4.setTransform(-1.5,244.7);

	this.timeline.addTween(cjs.Tween.get(this.round_4).wait(1));

	// round_2
	this.round_2 = new lib.hero2_body_all_mc();
	this.round_2.setTransform(-3.5,97.5);

	this.timeline.addTween(cjs.Tween.get(this.round_2).wait(1));

	// round_5_second
	this.round_5_second = new lib.hero2_accessory_all2_mc();
	this.round_5_second.setTransform(-23.1,113.2);

	this.timeline.addTween(cjs.Tween.get(this.round_5_second).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-162.7,-170.8,324,497.2);
p.frameBounds = [rect];


(lib.hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// round_1
	this.round_1 = new lib.hero1_fringe_all_mc();
	this.round_1.setTransform(16.1,-91.4);

	this.timeline.addTween(cjs.Tween.get(this.round_1).wait(1));

	// round_5
	this.round_5 = new lib.hero1_accessory_all_mc();
	this.round_5.setTransform(-23.1,113.2);

	this.timeline.addTween(cjs.Tween.get(this.round_5).wait(1));

	// round_3
	this.round_3 = new lib.hero1_top_mc();
	this.round_3.setTransform(9.8,86);

	this.timeline.addTween(cjs.Tween.get(this.round_3).wait(1));

	// round_4
	this.round_4 = new lib.hero1_bottom_all_mc();
	this.round_4.setTransform(-3.3,224.1);

	this.timeline.addTween(cjs.Tween.get(this.round_4).wait(1));

	// round_2
	this.round_2 = new lib.hero_b_all_mc();
	this.round_2.setTransform(6.6,84.6);

	this.timeline.addTween(cjs.Tween.get(this.round_2).wait(1));

	// round_1_second
	this.round_1_second = new lib.hero1_hair_all_mc();
	this.round_1_second.setTransform(15.5,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.round_1_second).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.9,-187,214.6,512.3);
p.frameBounds = [rect];


(lib.countdown_0_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.countdown_3_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.countdown_bg_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-195,390,390);
p.frameBounds = [rect];


(lib.countdown_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.countdown_2_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.countdown_bg_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-195,390,390);
p.frameBounds = [rect];


(lib.countdown_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.countdown_1_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.countdown_bg_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-195,390,390);
p.frameBounds = [rect];


(lib.countdown_0_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.countdown_0_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.countdown_bg_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-195,390,390);
p.frameBounds = [rect];


(lib.bg_hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.web_mc();
	this.instance.setTransform(126.6,-181.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.bg_hero_1_img();
	this.instance_1.setTransform(-200,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-300,400,600);
p.frameBounds = [rect];


(lib.animation_start_level_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// animation
	this.instance = new lib.title_start_level_mc();
	this.instance.setTransform(0,0,1,1,0,0,0,0.5,0.5);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({scaleX:0.55,scaleY:0.55,x:0.3,y:100.3},0).to({scaleX:1,scaleY:1,x:0.5,y:0.5,alpha:1},15).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195.5,-145.5,390.5,305);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-106.3,20.9,213,166.4), new cjs.Rectangle(-112.2,9.9,224.8,175.6), new cjs.Rectangle(-118.1,-1.1,236.7,184.8), new cjs.Rectangle(-124,-12.2,248.5,194), new cjs.Rectangle(-129.9,-23.3,260.3,203.3), new cjs.Rectangle(-135.8,-34.4,272.1,212.6), new cjs.Rectangle(-141.7,-45.4,284,221.8), new cjs.Rectangle(-147.6,-56.4,295.8,231), new cjs.Rectangle(-153.5,-67.5,307.6,240.2), new cjs.Rectangle(-159.4,-78.5,319.5,249.5), new cjs.Rectangle(-165.4,-89.6,331.3,258.7), new cjs.Rectangle(-171.2,-100.7,343.1,268), new cjs.Rectangle(-177.2,-111.7,355,277.2), new cjs.Rectangle(-183.1,-122.8,366.8,286.5), new cjs.Rectangle(-188.9,-133.9,378.7,295.7), rect=new cjs.Rectangle(-195,-145,390.5,305), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_pumpkin_card_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{begin:0,mid:4,"end":9});

	// animation
	this.instance = new lib.pumpkin_card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.pumpkin_card_10_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_pumpkin_card_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.pumpkin_card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.pumpkin_card_9_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_pumpkin_card_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.pumpkin_card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.pumpkin_card_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_pumpkin_card_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.pumpkin_card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.pumpkin_card_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_pumpkin_card_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.pumpkin_card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.pumpkin_card_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_pumpkin_card_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.pumpkin_card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.pumpkin_card_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_pumpkin_card_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.pumpkin_card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.pumpkin_card_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_pumpkin_card_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.pumpkin_card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.pumpkin_card_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_pumpkin_card_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.pumpkin_card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.pumpkin_card_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_pumpkin_card_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.pumpkin_card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.pumpkin_card_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_pumpkin_card_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pumpkin_card_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.animation_next_round_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// animation
	this.instance = new lib.title_next_round_mc();
	this.instance.setTransform(-0.1,-0.1,0.697,0.697,0,0,0,0.5,0.5);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},19).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136.3,-101.5,272.2,212.5);
p.frameBounds = [rect, new cjs.Rectangle(-139.5,-103.8,278.5,217.4), new cjs.Rectangle(-142.6,-106.1,284.7,222.3), new cjs.Rectangle(-145.7,-108.4,290.9,227), new cjs.Rectangle(-148.7,-110.6,297.1,231.9), new cjs.Rectangle(-151.9,-113,303.3,236.9), new cjs.Rectangle(-155,-115.3,309.6,241.7), new cjs.Rectangle(-158.1,-117.6,315.8,246.5), new cjs.Rectangle(-161.2,-119.9,322,251.4), new cjs.Rectangle(-164.3,-122.3,328.3,256.3), new cjs.Rectangle(-167.4,-124.6,334.5,261.1), new cjs.Rectangle(-170.5,-126.9,340.7,266), new cjs.Rectangle(-173.6,-129.2,346.9,270.9), new cjs.Rectangle(-176.7,-131.5,353.2,275.8), new cjs.Rectangle(-179.8,-133.8,359.4,280.5), new cjs.Rectangle(-183,-136.2,365.6,285.5), new cjs.Rectangle(-186.1,-138.5,371.8,290.4), new cjs.Rectangle(-189.2,-140.8,378,295.2), new cjs.Rectangle(-192.3,-143.1,384.3,300), rect=new cjs.Rectangle(-195.5,-145.5,390.5,305), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_current_location_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_location_1_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},39).to({alpha:0.102},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-245,290,490);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_card_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_10_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_card_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_9_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_card_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_card_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_card_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_card_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_card_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_card_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_card_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_card_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"begin":0,"mid":4,"end":9});

	// animation
	this.instance = new lib.card_0_mc();
	this.instance.setTransform(0,0,0.006,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1},5).wait(1));

	// animation
	this.instance_1 = new lib.card_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.01},4).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-60.1,-80,120.3,160), new cjs.Rectangle(-40.2,-80,80.5,160), new cjs.Rectangle(-20.3,-80,40.8,160), new cjs.Rectangle(-0.5,-80,1,160), new cjs.Rectangle(-16.3,-80,32.8,160), new cjs.Rectangle(-32.2,-80,64.6,160), new cjs.Rectangle(-48.1,-80,96.4,160), new cjs.Rectangle(-64.1,-80,128.2,160), new cjs.Rectangle(-80,-80,160,160)];


(lib.animation_card_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.card_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.anim_heroes_for_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.heroes_for_main_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.99,y:2},79).to({scaleY:1,y:0},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-310,490,620);
p.frameBounds = [rect, new cjs.Rectangle(-245,-309.9,490,619.9), new cjs.Rectangle(-245,-309.8,490,619.9), new cjs.Rectangle(-245,-309.7,490,619.8), new cjs.Rectangle(-245,-309.7,490,619.7), rect=new cjs.Rectangle(-245,-309.6,490,619.6), rect, new cjs.Rectangle(-245,-309.5,490,619.5), new cjs.Rectangle(-245,-309.4,490,619.4), new cjs.Rectangle(-245,-309.4,490,619.3), new cjs.Rectangle(-245,-309.3,490,619.3), new cjs.Rectangle(-245,-309.2,490,619.2), new cjs.Rectangle(-245,-309.2,490,619.1), rect=new cjs.Rectangle(-245,-309.1,490,619), rect, new cjs.Rectangle(-245,-309,490,618.9), new cjs.Rectangle(-245,-308.9,490,618.8), new cjs.Rectangle(-245,-308.9,490,618.7), new cjs.Rectangle(-245,-308.8,490,618.7), new cjs.Rectangle(-245,-308.7,490,618.6), new cjs.Rectangle(-245,-308.7,490,618.5), rect=new cjs.Rectangle(-245,-308.6,490,618.4), rect, new cjs.Rectangle(-245,-308.5,490,618.3), new cjs.Rectangle(-245,-308.4,490,618.2), new cjs.Rectangle(-245,-308.3,490,618.1), new cjs.Rectangle(-245,-308.3,490,618), new cjs.Rectangle(-245,-308.2,490,618), new cjs.Rectangle(-245,-308.2,490,617.8), new cjs.Rectangle(-245,-308.1,490,617.8), new cjs.Rectangle(-245,-308.1,490,617.7), new cjs.Rectangle(-245,-308,490,617.7), new cjs.Rectangle(-245,-307.9,490,617.6), new cjs.Rectangle(-245,-307.8,490,617.5), new cjs.Rectangle(-245,-307.8,490,617.4), new cjs.Rectangle(-245,-307.7,490,617.4), new cjs.Rectangle(-245,-307.7,490,617.3), new cjs.Rectangle(-245,-307.6,490,617.2), new cjs.Rectangle(-245,-307.6,490,617.1), new cjs.Rectangle(-245,-307.5,490,617.1), new cjs.Rectangle(-245,-307.4,490,617), new cjs.Rectangle(-245,-307.3,490,616.9), new cjs.Rectangle(-245,-307.3,490,616.8), new cjs.Rectangle(-245,-307.2,490,616.8), new cjs.Rectangle(-245,-307.2,490,616.7), new cjs.Rectangle(-245,-307.1,490,616.6), new cjs.Rectangle(-245,-307.1,490,616.5), new cjs.Rectangle(-245,-307,490,616.5), new cjs.Rectangle(-245,-306.9,490,616.3), new cjs.Rectangle(-245,-306.8,490,616.3), new cjs.Rectangle(-245,-306.8,490,616.2), new cjs.Rectangle(-245,-306.7,490,616.2), new cjs.Rectangle(-245,-306.7,490,616.1), new cjs.Rectangle(-245,-306.6,490,616), new cjs.Rectangle(-245,-306.6,490,615.9), new cjs.Rectangle(-245,-306.5,490,615.9), new cjs.Rectangle(-245,-306.4,490,615.8), new cjs.Rectangle(-245,-306.3,490,615.7), new cjs.Rectangle(-245,-306.3,490,615.6), new cjs.Rectangle(-245,-306.2,490,615.6), new cjs.Rectangle(-245,-306.2,490,615.5), new cjs.Rectangle(-245,-306.1,490,615.4), new cjs.Rectangle(-245,-306,490,615.3), new cjs.Rectangle(-245,-306,490,615.2), new cjs.Rectangle(-245,-305.9,490,615.2), new cjs.Rectangle(-245,-305.8,490,615.1), new cjs.Rectangle(-245,-305.8,490,615), new cjs.Rectangle(-245,-305.7,490,614.9), new cjs.Rectangle(-245,-305.7,490,614.8), new cjs.Rectangle(-245,-305.6,490,614.8), new cjs.Rectangle(-245,-305.5,490,614.7), new cjs.Rectangle(-245,-305.5,490,614.6), new cjs.Rectangle(-245,-305.4,490,614.6), new cjs.Rectangle(-245,-305.3,490,614.5), new cjs.Rectangle(-245,-305.3,490,614.4), rect=new cjs.Rectangle(-245,-305.2,490,614.3), rect, new cjs.Rectangle(-245,-305.1,490,614.2), new cjs.Rectangle(-245,-305,490,614.1), new cjs.Rectangle(-245,-305,490,614), new cjs.Rectangle(-245,-304.9,490,614.1), new cjs.Rectangle(-245,-305,490,614.1), new cjs.Rectangle(-245,-305,490,614.2), rect=new cjs.Rectangle(-245,-305.1,490,614.3), rect, new cjs.Rectangle(-245,-305.2,490,614.3), new cjs.Rectangle(-245,-305.3,490,614.4), new cjs.Rectangle(-245,-305.3,490,614.5), rect=new cjs.Rectangle(-245,-305.4,490,614.6), rect, new cjs.Rectangle(-245,-305.4,490,614.7), new cjs.Rectangle(-245,-305.5,490,614.7), new cjs.Rectangle(-245,-305.5,490,614.8), rect=new cjs.Rectangle(-245,-305.6,490,614.9), rect, new cjs.Rectangle(-245,-305.7,490,615), new cjs.Rectangle(-245,-305.8,490,615), rect=new cjs.Rectangle(-245,-305.8,490,615.1), rect, new cjs.Rectangle(-245,-305.9,490,615.2), new cjs.Rectangle(-245,-305.9,490,615.3), new cjs.Rectangle(-245,-306,490,615.3), new cjs.Rectangle(-245,-306,490,615.4), rect=new cjs.Rectangle(-245,-306.1,490,615.5), rect, new cjs.Rectangle(-245,-306.2,490,615.6), new cjs.Rectangle(-245,-306.3,490,615.6), new cjs.Rectangle(-245,-306.3,490,615.7), new cjs.Rectangle(-245,-306.3,490,615.8), rect=new cjs.Rectangle(-245,-306.4,490,615.8), rect, new cjs.Rectangle(-245,-306.5,490,615.9), new cjs.Rectangle(-245,-306.5,490,616), new cjs.Rectangle(-245,-306.6,490,616), new cjs.Rectangle(-245,-306.6,490,616.1), rect=new cjs.Rectangle(-245,-306.7,490,616.2), rect, new cjs.Rectangle(-245,-306.8,490,616.3), new cjs.Rectangle(-245,-306.8,490,616.4), new cjs.Rectangle(-245,-306.9,490,616.4), new cjs.Rectangle(-245,-306.9,490,616.5), new cjs.Rectangle(-245,-307,490,616.5), new cjs.Rectangle(-245,-307,490,616.6), rect=new cjs.Rectangle(-245,-307.1,490,616.7), rect, rect=new cjs.Rectangle(-245,-307.2,490,616.8), rect, rect=new cjs.Rectangle(-245,-307.3,490,616.9), rect, new cjs.Rectangle(-245,-307.3,490,617), new cjs.Rectangle(-245,-307.4,490,617.1), new cjs.Rectangle(-245,-307.5,490,617.1), new cjs.Rectangle(-245,-307.5,490,617.2), rect=new cjs.Rectangle(-245,-307.6,490,617.3), rect, new cjs.Rectangle(-245,-307.7,490,617.3), new cjs.Rectangle(-245,-307.7,490,617.4), rect=new cjs.Rectangle(-245,-307.8,490,617.5), rect, new cjs.Rectangle(-245,-307.8,490,617.6), new cjs.Rectangle(-245,-307.9,490,617.7), new cjs.Rectangle(-245,-308,490,617.7), new cjs.Rectangle(-245,-308,490,617.8), new cjs.Rectangle(-245,-308.1,490,617.8), new cjs.Rectangle(-245,-308.1,490,617.9), rect=new cjs.Rectangle(-245,-308.2,490,618), rect, new cjs.Rectangle(-245,-308.3,490,618.1), rect=new cjs.Rectangle(-245,-308.3,490,618.2), rect, new cjs.Rectangle(-245,-308.4,490,618.3), new cjs.Rectangle(-245,-308.5,490,618.3), new cjs.Rectangle(-245,-308.5,490,618.4), new cjs.Rectangle(-245,-308.6,490,618.4), new cjs.Rectangle(-245,-308.6,490,618.5), rect=new cjs.Rectangle(-245,-308.7,490,618.6), rect, new cjs.Rectangle(-245,-308.7,490,618.7), new cjs.Rectangle(-245,-308.8,490,618.7), new cjs.Rectangle(-245,-308.8,490,618.8), new cjs.Rectangle(-245,-308.9,490,618.8), new cjs.Rectangle(-245,-308.9,490,618.9), new cjs.Rectangle(-245,-309,490,619), rect=new cjs.Rectangle(-245,-309.1,490,619.1), rect, rect=new cjs.Rectangle(-245,-309.2,490,619.2), rect, new cjs.Rectangle(-245,-309.2,490,619.3), new cjs.Rectangle(-245,-309.3,490,619.3), new cjs.Rectangle(-245,-309.3,490,619.4), rect=new cjs.Rectangle(-245,-309.4,490,619.5), rect, new cjs.Rectangle(-245,-309.5,490,619.6), new cjs.Rectangle(-245,-309.6,490,619.6), new cjs.Rectangle(-245,-309.6,490,619.7), new cjs.Rectangle(-245,-309.6,490,619.8), new cjs.Rectangle(-245,-309.7,490,619.8), new cjs.Rectangle(-245,-309.7,490,619.9), new cjs.Rectangle(-245,-309.8,490,619.9), new cjs.Rectangle(-245,-310,490,620)];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":29,"end":59});

	// animation
	this.instance = new lib.curtain_2_mc();
	this.instance.setTransform(462.1,80,0.889,0.889,0,0,0,0.1,0);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:462,alpha:1},15).wait(10).to({regX:0.1,scaleX:0.89,scaleY:0.89,x:462.1,alpha:0.012},15).to({_off:true},1).wait(10));

	// animation
	this.instance_1 = new lib.curtain_1_mc();
	this.instance_1.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:0,alpha:0.012},0).to({alpha:1},18).wait(20).to({alpha:0.012},19).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,600,1600,600);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,0,1600,600), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-0.6,1600,600.7), new cjs.Rectangle(-400,-1.3,1600,601.3), new cjs.Rectangle(-400,-1.9,1600,602), new cjs.Rectangle(-400,-2.6,1600,602.7), new cjs.Rectangle(-400,-3.3,1600,603.3), new cjs.Rectangle(-400,-4,1600,604), new cjs.Rectangle(-400,-4.6,1600,604.7), new cjs.Rectangle(-400,-5.3,1600,605.3), new cjs.Rectangle(-400,-5.9,1600,606), new cjs.Rectangle(-400,-6.6,1600,606.7), new cjs.Rectangle(-400,-7.3,1600,607.3), new cjs.Rectangle(-400,-7.9,1600,608), new cjs.Rectangle(-400,-8.6,1600,608.7), new cjs.Rectangle(-400,-9.3,1600,609.3), rect=new cjs.Rectangle(-400,-10,1600,610), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-9.3,1600,609.3), new cjs.Rectangle(-400,-8.6,1600,608.7), new cjs.Rectangle(-400,-8,1600,608), new cjs.Rectangle(-400,-7.3,1600,607.3), new cjs.Rectangle(-400,-6.6,1600,606.7), new cjs.Rectangle(-400,-5.9,1600,606), new cjs.Rectangle(-400,-5.3,1600,605.3), new cjs.Rectangle(-400,-4.6,1600,604.7), new cjs.Rectangle(-400,-4,1600,604), new cjs.Rectangle(-400,-3.3,1600,603.3), new cjs.Rectangle(-400,-2.6,1600,602.7), new cjs.Rectangle(-400,-1.9,1600,602), new cjs.Rectangle(-400,-1.3,1600,601.3), new cjs.Rectangle(-400,-0.6,1600,600.7), rect=new cjs.Rectangle(-400,0,1600,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.copyright_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		установка языка
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		try
		{
			this.body_mc.gotoAndStop(app.getLanguageFunc());
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.copyright_body_title_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-150,500,300);
p.frameBounds = [rect];


(lib.copyright_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.copyright_title_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.copyright_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-150,500,300);
p.frameBounds = [rect];


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


(lib.gravity_explosion_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// container
	this.example_mc = new lib.ParticleGravityExplosionMC();

	this.timeline.addTween(cjs.Tween.get(this.example_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.flash_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flash_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.blinking_light_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_light_1_mc();
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.67,scaleY:0.67,alpha:0.012},19).to({scaleX:1,scaleY:1,alpha:0.301},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect, new cjs.Rectangle(-29.4,-29.4,59,59), new cjs.Rectangle(-28.9,-28.9,57.9,57.9), new cjs.Rectangle(-28.4,-28.4,56.9,56.9), new cjs.Rectangle(-27.8,-27.8,55.8,55.8), new cjs.Rectangle(-27.3,-27.3,54.8,54.8), new cjs.Rectangle(-26.8,-26.8,53.7,53.7), new cjs.Rectangle(-26.3,-26.3,52.7,52.7), new cjs.Rectangle(-25.7,-25.7,51.6,51.6), new cjs.Rectangle(-25.2,-25.2,50.6,50.6), new cjs.Rectangle(-24.7,-24.7,49.5,49.5), new cjs.Rectangle(-24.2,-24.2,48.4,48.4), new cjs.Rectangle(-23.6,-23.6,47.3,47.3), new cjs.Rectangle(-23.1,-23.1,46.3,46.3), new cjs.Rectangle(-22.6,-22.6,45.3,45.3), new cjs.Rectangle(-22.1,-22.1,44.2,44.2), new cjs.Rectangle(-21.5,-21.5,43.2,43.2), new cjs.Rectangle(-21,-21,42.1,42.1), new cjs.Rectangle(-20.5,-20.5,41.1,41.1), new cjs.Rectangle(-20,-20,40,40), new cjs.Rectangle(-20.4,-20.4,41,41), new cjs.Rectangle(-20.9,-20.9,42,42), new cjs.Rectangle(-21.4,-21.4,43,43), new cjs.Rectangle(-21.9,-21.9,44,44), new cjs.Rectangle(-22.4,-22.4,45,45), new cjs.Rectangle(-22.9,-22.9,46,46), new cjs.Rectangle(-23.4,-23.4,47,47), new cjs.Rectangle(-23.9,-23.9,48,48), new cjs.Rectangle(-24.4,-24.4,49,49), new cjs.Rectangle(-24.9,-24.9,50,50), new cjs.Rectangle(-25.4,-25.4,51,51), new cjs.Rectangle(-25.9,-25.9,52,52), new cjs.Rectangle(-26.4,-26.4,53,53), new cjs.Rectangle(-26.9,-26.9,54,54), new cjs.Rectangle(-27.4,-27.4,55,55), new cjs.Rectangle(-27.9,-27.9,56,56), new cjs.Rectangle(-28.4,-28.4,57,57), new cjs.Rectangle(-28.9,-28.9,58,58), new cjs.Rectangle(-29.4,-29.4,59,59), new cjs.Rectangle(-30,-30,60,60)];


(lib.blinking_light_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_light_1_2_mc();
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.012},14).to({scaleX:1,scaleY:1,alpha:0.301},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect, new cjs.Rectangle(-29.5,-29.5,59.2,59.2), new cjs.Rectangle(-29.1,-29.1,58.3,58.3), new cjs.Rectangle(-28.7,-28.7,57.5,57.5), new cjs.Rectangle(-28.2,-28.2,56.6,56.6), new cjs.Rectangle(-27.8,-27.8,55.7,55.7), new cjs.Rectangle(-27.4,-27.4,54.9,54.9), new cjs.Rectangle(-27,-27,54,54), new cjs.Rectangle(-26.5,-26.5,53.2,53.2), new cjs.Rectangle(-26.1,-26.1,52.3,52.3), new cjs.Rectangle(-25.7,-25.7,51.5,51.5), new cjs.Rectangle(-25.2,-25.2,50.6,50.6), new cjs.Rectangle(-24.8,-24.8,49.7,49.7), new cjs.Rectangle(-24.4,-24.4,48.8,48.8), new cjs.Rectangle(-24,-24,48,48), new cjs.Rectangle(-24.3,-24.3,48.8,48.8), new cjs.Rectangle(-24.7,-24.7,49.6,49.6), new cjs.Rectangle(-25.1,-25.1,50.4,50.4), new cjs.Rectangle(-25.5,-25.5,51.2,51.2), new cjs.Rectangle(-25.9,-25.9,52,52), new cjs.Rectangle(-26.3,-26.3,52.8,52.8), new cjs.Rectangle(-26.7,-26.7,53.6,53.6), new cjs.Rectangle(-27.1,-27.1,54.4,54.4), new cjs.Rectangle(-27.5,-27.5,55.2,55.2), new cjs.Rectangle(-27.9,-27.9,56,56), new cjs.Rectangle(-28.3,-28.3,56.8,56.8), new cjs.Rectangle(-28.7,-28.7,57.6,57.6), new cjs.Rectangle(-29.1,-29.1,58.4,58.4), new cjs.Rectangle(-29.5,-29.5,59.2,59.2), new cjs.Rectangle(-30,-30,60,60)];


(lib.gravity_big_explosion_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// container
	this.example_mc = new lib.ParticleBigGravityExplosionMC();

	this.timeline.addTween(cjs.Tween.get(this.example_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-32,64,64);
p.frameBounds = [rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-43.7,-43.7,87.5,87.5);
p.frameBounds = [rect, new cjs.Rectangle(-50,-50,100,100), new cjs.Rectangle(-43.7,-43.7,87.5,87.5), new cjs.Rectangle(-50,-50,100,100)];


(lib.pause_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.pause_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_pause_button_mc();
	this.instance_1.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.nav_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_1_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},19).to({alpha:0.012},30).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AobGPQigABAAigIAAnfQAAigCgABIQ3AAQCggBAACgIAAHfQAACgiggBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-40,140,80);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
	this.instance_2 = new lib.bg_small_buttons_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
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
	this.instance_2 = new lib.bg_small_buttons_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.forward_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_forward_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.97},29).to({scaleX:1,scaleY:0.97},30).to({scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, new cjs.Rectangle(-94.8,-95,189.8,190), new cjs.Rectangle(-94.7,-95,189.6,190), new cjs.Rectangle(-94.6,-95,189.4,190), new cjs.Rectangle(-94.5,-95,189.1,190), new cjs.Rectangle(-94.4,-95,189,190), new cjs.Rectangle(-94.3,-95,188.8,190), new cjs.Rectangle(-94.2,-95,188.6,190), new cjs.Rectangle(-94.1,-95,188.4,190), new cjs.Rectangle(-94,-95,188.1,190), new cjs.Rectangle(-93.9,-95,188,190), new cjs.Rectangle(-93.8,-95,187.7,190), new cjs.Rectangle(-93.7,-95,187.5,190), new cjs.Rectangle(-93.6,-95,187.3,190), new cjs.Rectangle(-93.5,-95,187.1,190), new cjs.Rectangle(-93.4,-95,186.9,190), new cjs.Rectangle(-93.3,-95,186.7,190), new cjs.Rectangle(-93.2,-95,186.5,190), new cjs.Rectangle(-93.1,-95,186.3,190), new cjs.Rectangle(-93,-95,186.1,190), new cjs.Rectangle(-92.9,-95,185.9,190), new cjs.Rectangle(-92.8,-95,185.6,190), new cjs.Rectangle(-92.7,-95,185.5,190), new cjs.Rectangle(-92.6,-95,185.3,190), new cjs.Rectangle(-92.5,-95,185.1,190), new cjs.Rectangle(-92.4,-95,184.9,190), new cjs.Rectangle(-92.3,-95,184.6,190), new cjs.Rectangle(-92.2,-95,184.4,190), new cjs.Rectangle(-92.1,-95,184.2,190), new cjs.Rectangle(-92,-95,184,190), new cjs.Rectangle(-92,-94.8,184.2,189.8), new cjs.Rectangle(-92.1,-94.7,184.4,189.6), new cjs.Rectangle(-92.2,-94.6,184.6,189.4), new cjs.Rectangle(-92.3,-94.5,184.8,189.2), new cjs.Rectangle(-92.4,-94.4,185,189), new cjs.Rectangle(-92.5,-94.3,185.2,188.8), new cjs.Rectangle(-92.6,-94.2,185.4,188.6), new cjs.Rectangle(-92.7,-94.1,185.6,188.4), new cjs.Rectangle(-92.8,-94,185.8,188.2), new cjs.Rectangle(-92.9,-93.9,186,188), new cjs.Rectangle(-93,-93.8,186.2,187.8), new cjs.Rectangle(-93.1,-93.7,186.4,187.6), new cjs.Rectangle(-93.2,-93.6,186.6,187.4), new cjs.Rectangle(-93.3,-93.5,186.8,187.2), new cjs.Rectangle(-93.4,-93.4,187,187), new cjs.Rectangle(-93.5,-93.3,187.2,186.8), new cjs.Rectangle(-93.6,-93.2,187.4,186.6), new cjs.Rectangle(-93.7,-93.1,187.6,186.4), new cjs.Rectangle(-93.8,-93,187.8,186.2), new cjs.Rectangle(-93.9,-92.9,188,186), new cjs.Rectangle(-94,-92.8,188.2,185.8), new cjs.Rectangle(-94.1,-92.7,188.4,185.6), new cjs.Rectangle(-94.2,-92.6,188.6,185.4), new cjs.Rectangle(-94.3,-92.5,188.8,185.2), new cjs.Rectangle(-94.4,-92.4,189,185), new cjs.Rectangle(-94.5,-92.3,189.2,184.8), new cjs.Rectangle(-94.6,-92.2,189.4,184.6), new cjs.Rectangle(-94.7,-92.1,189.6,184.4), new cjs.Rectangle(-94.8,-92,189.8,184.2), new cjs.Rectangle(-95,-92,190,184), new cjs.Rectangle(-95,-92,190,184.2), new cjs.Rectangle(-95,-92.1,190,184.4), new cjs.Rectangle(-95,-92.2,190,184.6), new cjs.Rectangle(-95,-92.3,190,184.8), new cjs.Rectangle(-95,-92.4,190,185), new cjs.Rectangle(-95,-92.5,190,185.2), new cjs.Rectangle(-95,-92.6,190,185.4), new cjs.Rectangle(-95,-92.7,190,185.6), new cjs.Rectangle(-95,-92.8,190,185.8), new cjs.Rectangle(-95,-92.9,190,186), new cjs.Rectangle(-95,-93,190,186.2), new cjs.Rectangle(-95,-93.1,190,186.4), new cjs.Rectangle(-95,-93.2,190,186.6), new cjs.Rectangle(-95,-93.3,190,186.8), new cjs.Rectangle(-95,-93.4,190,187), new cjs.Rectangle(-95,-93.5,190,187.2), new cjs.Rectangle(-95,-93.6,190,187.4), new cjs.Rectangle(-95,-93.7,190,187.6), new cjs.Rectangle(-95,-93.8,190,187.8), new cjs.Rectangle(-95,-93.9,190,188), new cjs.Rectangle(-95,-94,190,188.2), new cjs.Rectangle(-95,-94.1,190,188.4), new cjs.Rectangle(-95,-94.2,190,188.6), new cjs.Rectangle(-95,-94.3,190,188.8), new cjs.Rectangle(-95,-94.4,190,189), new cjs.Rectangle(-95,-94.5,190,189.2), new cjs.Rectangle(-95,-94.6,190,189.4), new cjs.Rectangle(-95,-94.7,190,189.6), new cjs.Rectangle(-95,-94.8,190,189.8), new cjs.Rectangle(-95,-95,190,190)];


(lib.decor_buttons_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_decor_buttons_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5},29).to({rotation:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect, new cjs.Rectangle(-50,-50,100.1,100.1), new cjs.Rectangle(-50.2,-50.2,100.5,100.5), new cjs.Rectangle(-50.4,-50.4,100.9,100.9), new cjs.Rectangle(-50.4,-50.4,101,101), new cjs.Rectangle(-50.6,-50.6,101.4,101.4), new cjs.Rectangle(-50.8,-50.8,101.8,101.8), new cjs.Rectangle(-50.9,-50.9,101.9,101.9), new cjs.Rectangle(-51.1,-51.1,102.2,102.2), new cjs.Rectangle(-51.3,-51.2,102.6,102.6), new cjs.Rectangle(-51.3,-51.3,102.7,102.7), new cjs.Rectangle(-51.5,-51.5,103.1,103.1), new cjs.Rectangle(-51.7,-51.7,103.5,103.5), new cjs.Rectangle(-51.7,-51.7,103.6,103.6), new cjs.Rectangle(-51.9,-51.9,103.9,103.9), new cjs.Rectangle(-52.1,-52.1,104.3,104.3), new cjs.Rectangle(-52.3,-52.3,104.7,104.7), new cjs.Rectangle(-52.3,-52.3,104.8,104.8), new cjs.Rectangle(-52.5,-52.5,105.2,105.2), new cjs.Rectangle(-52.7,-52.7,105.5,105.5), new cjs.Rectangle(-52.7,-52.7,105.6,105.6), new cjs.Rectangle(-52.9,-52.9,106,106), new cjs.Rectangle(-53.1,-53.1,106.3,106.3), new cjs.Rectangle(-53.2,-53.1,106.4,106.4), new cjs.Rectangle(-53.3,-53.3,106.8,106.8), new cjs.Rectangle(-53.5,-53.5,107.2,107.2), new cjs.Rectangle(-53.5,-53.6,107.2,107.2), new cjs.Rectangle(-53.7,-53.7,107.6,107.6), new cjs.Rectangle(-53.9,-53.9,108,108), new cjs.Rectangle(-54.1,-54.1,108.3,108.3), new cjs.Rectangle(-53.9,-53.9,108,108), new cjs.Rectangle(-53.7,-53.7,107.6,107.6), new cjs.Rectangle(-53.5,-53.6,107.2,107.2), new cjs.Rectangle(-53.5,-53.5,107.2,107.2), new cjs.Rectangle(-53.3,-53.3,106.8,106.8), new cjs.Rectangle(-53.2,-53.2,106.4,106.4), new cjs.Rectangle(-53.1,-53.1,106.4,106.4), new cjs.Rectangle(-53,-52.9,106,106), new cjs.Rectangle(-52.8,-52.7,105.6,105.6), new cjs.Rectangle(-52.7,-52.7,105.5,105.5), new cjs.Rectangle(-52.5,-52.5,105.2,105.2), new cjs.Rectangle(-52.3,-52.3,104.8,104.8), new cjs.Rectangle(-52.3,-52.3,104.7,104.7), new cjs.Rectangle(-52.1,-52.1,104.4,104.4), new cjs.Rectangle(-51.9,-51.9,104,104), new cjs.Rectangle(-51.9,-51.9,103.9,103.9), new cjs.Rectangle(-51.7,-51.7,103.5,103.5), rect=new cjs.Rectangle(-51.5,-51.5,103.1,103.1), rect, new cjs.Rectangle(-51.3,-51.3,102.7,102.7), new cjs.Rectangle(-51.1,-51.1,102.3,102.3), new cjs.Rectangle(-51,-51,102.2,102.2), new cjs.Rectangle(-50.8,-50.8,101.8,101.8), new cjs.Rectangle(-50.6,-50.7,101.4,101.4), new cjs.Rectangle(-50.6,-50.6,101.4,101.4), new cjs.Rectangle(-50.4,-50.4,101,101), new cjs.Rectangle(-50.2,-50.2,100.6,100.6), new cjs.Rectangle(-50.2,-50.2,100.5,100.5), new cjs.Rectangle(-50,-50,100.1,100.1), new cjs.Rectangle(-50,-50,100,100)];


(lib.decor_buttons_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_decor_buttons_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5},29).to({rotation:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect, new cjs.Rectangle(-50,-50,100.1,100.1), new cjs.Rectangle(-50.2,-50.2,100.5,100.5), new cjs.Rectangle(-50.4,-50.4,100.9,100.9), new cjs.Rectangle(-50.4,-50.4,101,101), new cjs.Rectangle(-50.6,-50.6,101.4,101.4), new cjs.Rectangle(-50.8,-50.8,101.8,101.8), new cjs.Rectangle(-50.9,-50.9,101.9,101.9), new cjs.Rectangle(-51.1,-51.1,102.2,102.2), new cjs.Rectangle(-51.3,-51.2,102.6,102.6), new cjs.Rectangle(-51.3,-51.3,102.7,102.7), new cjs.Rectangle(-51.5,-51.5,103.1,103.1), new cjs.Rectangle(-51.7,-51.7,103.5,103.5), new cjs.Rectangle(-51.7,-51.7,103.6,103.6), new cjs.Rectangle(-51.9,-51.9,103.9,103.9), new cjs.Rectangle(-52.1,-52.1,104.3,104.3), new cjs.Rectangle(-52.3,-52.3,104.7,104.7), new cjs.Rectangle(-52.3,-52.3,104.8,104.8), new cjs.Rectangle(-52.5,-52.5,105.2,105.2), new cjs.Rectangle(-52.7,-52.7,105.5,105.5), new cjs.Rectangle(-52.7,-52.7,105.6,105.6), new cjs.Rectangle(-52.9,-52.9,106,106), new cjs.Rectangle(-53.1,-53.1,106.3,106.3), new cjs.Rectangle(-53.2,-53.1,106.4,106.4), new cjs.Rectangle(-53.3,-53.3,106.8,106.8), new cjs.Rectangle(-53.5,-53.5,107.2,107.2), new cjs.Rectangle(-53.5,-53.6,107.2,107.2), new cjs.Rectangle(-53.7,-53.7,107.6,107.6), new cjs.Rectangle(-53.9,-53.9,108,108), new cjs.Rectangle(-54.1,-54.1,108.3,108.3), new cjs.Rectangle(-53.9,-53.9,108,108), new cjs.Rectangle(-53.7,-53.7,107.6,107.6), new cjs.Rectangle(-53.5,-53.6,107.2,107.2), new cjs.Rectangle(-53.5,-53.5,107.2,107.2), new cjs.Rectangle(-53.3,-53.3,106.8,106.8), new cjs.Rectangle(-53.2,-53.2,106.4,106.4), new cjs.Rectangle(-53.1,-53.1,106.4,106.4), new cjs.Rectangle(-53,-52.9,106,106), new cjs.Rectangle(-52.8,-52.7,105.6,105.6), new cjs.Rectangle(-52.7,-52.7,105.5,105.5), new cjs.Rectangle(-52.5,-52.5,105.2,105.2), new cjs.Rectangle(-52.3,-52.3,104.8,104.8), new cjs.Rectangle(-52.3,-52.3,104.7,104.7), new cjs.Rectangle(-52.1,-52.1,104.4,104.4), new cjs.Rectangle(-51.9,-51.9,104,104), new cjs.Rectangle(-51.9,-51.9,103.9,103.9), new cjs.Rectangle(-51.7,-51.7,103.5,103.5), rect=new cjs.Rectangle(-51.5,-51.5,103.1,103.1), rect, new cjs.Rectangle(-51.3,-51.3,102.7,102.7), new cjs.Rectangle(-51.1,-51.1,102.3,102.3), new cjs.Rectangle(-51,-51,102.2,102.2), new cjs.Rectangle(-50.8,-50.8,101.8,101.8), new cjs.Rectangle(-50.6,-50.7,101.4,101.4), new cjs.Rectangle(-50.6,-50.6,101.4,101.4), new cjs.Rectangle(-50.4,-50.4,101,101), new cjs.Rectangle(-50.2,-50.2,100.6,100.6), new cjs.Rectangle(-50.2,-50.2,100.5,100.5), new cjs.Rectangle(-50,-50,100.1,100.1), new cjs.Rectangle(-50,-50,100,100)];


(lib.decor_buttons_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_decor_buttons_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5},29).to({rotation:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect, new cjs.Rectangle(-50,-50,100.1,100.1), new cjs.Rectangle(-50.2,-50.2,100.5,100.5), new cjs.Rectangle(-50.4,-50.4,100.9,100.9), new cjs.Rectangle(-50.4,-50.4,101,101), new cjs.Rectangle(-50.6,-50.6,101.4,101.4), new cjs.Rectangle(-50.8,-50.8,101.8,101.8), new cjs.Rectangle(-50.9,-50.9,101.9,101.9), new cjs.Rectangle(-51.1,-51.1,102.2,102.2), new cjs.Rectangle(-51.2,-51.3,102.6,102.6), new cjs.Rectangle(-51.3,-51.3,102.7,102.7), new cjs.Rectangle(-51.5,-51.5,103.1,103.1), new cjs.Rectangle(-51.7,-51.7,103.5,103.5), new cjs.Rectangle(-51.7,-51.7,103.6,103.6), new cjs.Rectangle(-51.9,-51.9,103.9,103.9), new cjs.Rectangle(-52.1,-52.1,104.3,104.3), new cjs.Rectangle(-52.3,-52.3,104.7,104.7), new cjs.Rectangle(-52.3,-52.3,104.8,104.8), new cjs.Rectangle(-52.5,-52.5,105.2,105.2), new cjs.Rectangle(-52.7,-52.7,105.5,105.5), new cjs.Rectangle(-52.7,-52.7,105.6,105.6), new cjs.Rectangle(-52.9,-52.9,106,106), new cjs.Rectangle(-53.1,-53.1,106.3,106.3), new cjs.Rectangle(-53.1,-53.2,106.4,106.4), new cjs.Rectangle(-53.3,-53.3,106.8,106.8), new cjs.Rectangle(-53.5,-53.5,107.2,107.2), new cjs.Rectangle(-53.6,-53.5,107.2,107.2), new cjs.Rectangle(-53.7,-53.7,107.6,107.6), new cjs.Rectangle(-53.9,-53.9,108,108), new cjs.Rectangle(-54.1,-54.1,108.3,108.3), new cjs.Rectangle(-53.9,-53.9,107.9,107.9), new cjs.Rectangle(-53.7,-53.7,107.6,107.6), new cjs.Rectangle(-53.7,-53.7,107.5,107.5), new cjs.Rectangle(-53.5,-53.5,107.2,107.2), rect=new cjs.Rectangle(-53.3,-53.3,106.8,106.8), rect, new cjs.Rectangle(-53.1,-53.1,106.4,106.4), new cjs.Rectangle(-52.9,-53,106,106), new cjs.Rectangle(-52.9,-52.9,105.9,105.9), new cjs.Rectangle(-52.7,-52.7,105.5,105.5), new cjs.Rectangle(-52.5,-52.5,105.2,105.2), new cjs.Rectangle(-52.5,-52.5,105.1,105.1), new cjs.Rectangle(-52.3,-52.3,104.7,104.7), new cjs.Rectangle(-52.1,-52.1,104.4,104.4), new cjs.Rectangle(-52.1,-52.1,104.3,104.3), new cjs.Rectangle(-51.9,-51.9,103.9,103.9), rect=new cjs.Rectangle(-51.7,-51.7,103.5,103.5), rect, new cjs.Rectangle(-51.5,-51.5,103.1,103.1), new cjs.Rectangle(-51.3,-51.3,102.7,102.7), new cjs.Rectangle(-51.2,-51.2,102.6,102.6), new cjs.Rectangle(-51,-51,102.2,102.2), rect=new cjs.Rectangle(-50.8,-50.8,101.8,101.8), rect, new cjs.Rectangle(-50.6,-50.6,101.4,101.4), new cjs.Rectangle(-50.4,-50.4,101,101), new cjs.Rectangle(-50.4,-50.4,100.9,100.9), new cjs.Rectangle(-50.2,-50.2,100.5,100.5), new cjs.Rectangle(-50,-50,100.1,100.1), new cjs.Rectangle(-50,-50,100,100)];


(lib.decor_buttons_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_decor_buttons_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5},29).to({rotation:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect, new cjs.Rectangle(-50,-50,100.1,100.1), new cjs.Rectangle(-50.2,-50.2,100.5,100.5), new cjs.Rectangle(-50.4,-50.4,100.9,100.9), new cjs.Rectangle(-50.4,-50.4,101,101), new cjs.Rectangle(-50.6,-50.6,101.4,101.4), new cjs.Rectangle(-50.8,-50.8,101.8,101.8), new cjs.Rectangle(-50.9,-50.9,101.9,101.9), new cjs.Rectangle(-51.1,-51.1,102.2,102.2), new cjs.Rectangle(-51.2,-51.3,102.6,102.6), new cjs.Rectangle(-51.3,-51.3,102.7,102.7), new cjs.Rectangle(-51.5,-51.5,103.1,103.1), new cjs.Rectangle(-51.7,-51.7,103.5,103.5), new cjs.Rectangle(-51.7,-51.7,103.6,103.6), new cjs.Rectangle(-51.9,-51.9,103.9,103.9), new cjs.Rectangle(-52.1,-52.1,104.3,104.3), new cjs.Rectangle(-52.3,-52.3,104.7,104.7), new cjs.Rectangle(-52.3,-52.3,104.8,104.8), new cjs.Rectangle(-52.5,-52.5,105.2,105.2), new cjs.Rectangle(-52.7,-52.7,105.5,105.5), new cjs.Rectangle(-52.7,-52.7,105.6,105.6), new cjs.Rectangle(-52.9,-52.9,106,106), new cjs.Rectangle(-53.1,-53.1,106.3,106.3), new cjs.Rectangle(-53.1,-53.2,106.4,106.4), new cjs.Rectangle(-53.3,-53.3,106.8,106.8), new cjs.Rectangle(-53.5,-53.5,107.2,107.2), new cjs.Rectangle(-53.6,-53.5,107.2,107.2), new cjs.Rectangle(-53.7,-53.7,107.6,107.6), new cjs.Rectangle(-53.9,-53.9,108,108), new cjs.Rectangle(-54.1,-54.1,108.3,108.3), new cjs.Rectangle(-53.9,-53.9,107.9,107.9), new cjs.Rectangle(-53.7,-53.7,107.6,107.6), new cjs.Rectangle(-53.7,-53.7,107.5,107.5), new cjs.Rectangle(-53.5,-53.5,107.2,107.2), rect=new cjs.Rectangle(-53.3,-53.3,106.8,106.8), rect, new cjs.Rectangle(-53.1,-53.1,106.4,106.4), new cjs.Rectangle(-52.9,-53,106,106), new cjs.Rectangle(-52.9,-52.9,105.9,105.9), new cjs.Rectangle(-52.7,-52.7,105.5,105.5), new cjs.Rectangle(-52.5,-52.5,105.2,105.2), new cjs.Rectangle(-52.5,-52.5,105.1,105.1), new cjs.Rectangle(-52.3,-52.3,104.7,104.7), new cjs.Rectangle(-52.1,-52.1,104.4,104.4), new cjs.Rectangle(-52.1,-52.1,104.3,104.3), new cjs.Rectangle(-51.9,-51.9,103.9,103.9), rect=new cjs.Rectangle(-51.7,-51.7,103.5,103.5), rect, new cjs.Rectangle(-51.5,-51.5,103.1,103.1), new cjs.Rectangle(-51.3,-51.3,102.7,102.7), new cjs.Rectangle(-51.2,-51.2,102.6,102.6), new cjs.Rectangle(-51,-51,102.2,102.2), rect=new cjs.Rectangle(-50.8,-50.8,101.8,101.8), rect, new cjs.Rectangle(-50.6,-50.6,101.4,101.4), new cjs.Rectangle(-50.4,-50.4,101,101), new cjs.Rectangle(-50.4,-50.4,100.9,100.9), new cjs.Rectangle(-50.2,-50.2,100.5,100.5), new cjs.Rectangle(-50,-50,100.1,100.1), new cjs.Rectangle(-50,-50,100,100)];


(lib.credits_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.credits_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_small_buttons_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
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
	this.instance.setTransform(-50,100,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.banner_2_img();
	this.instance_1.setTransform(-130,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

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
	this.instance.setTransform(50,100,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.banner_1_img();
	this.instance_1.setTransform(-130,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDUTMAAAgolIcHAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,275);
p.frameBounds = [rect];


(lib.again_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.decor_buttons_3_mc();
	this.instance.setTransform(-43.7,56.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// icon
	this.instance_1 = new lib.again_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,201.3);
p.frameBounds = [rect];


(lib.title_antiblocking_ads_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/////*
		////ищем наиболее подходящий язык
		////https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		////*/
		////this.stop();
		////this.body_mc.gotoAndStop(0);
		/////*
		////
		////*/
		////var label_str = "en";
		////var lang_str = window.navigator.language || navigator.userLanguage;
		////lang_str = lang_str.split("-")[0].toLowerCase();
		/////*
		////
		////*/
		////if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be") || (lang_str == "kk") || (lang_str == "uz"))
		////{
		////	label_str = "ru";
		////}
		////if (lang_str == "de")
		////{
		////	label_str = "de";
		////}
		////if (lang_str == "fr")
		////{
		////	label_str = "fr";
		////}
		////if (lang_str == "it")
		////{
		////	label_str = "it";
		////}
		////if (lang_str == "es")
		////{
		////	label_str = "es";
		////}
		////if (lang_str == "pt")
		////{
		////	label_str = "pt";
		////}
		////if (lang_str == "tr")
		////{
		////	label_str = "tr";
		////}
		////if (lang_str == "ja")
		////{
		////	label_str = "ja";
		////}
		////if (lang_str == "hi")
		////{
		////	label_str = "hi";
		////}
		////if (lang_str == "ar")
		////{
		////	label_str = "ar";
		////}
		////if (lang_str == "id")
		////{
		////	label_str = "id";
		////}
		////if (lang_str == "zh")
		////{
		////	label_str = "zh";
		////}
		/////*
		////
		////*/
		////this.body_mc.gotoAndStop(label_str);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_antiblocking_ads_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-320,-140,640,280);
p.frameBounds = [rect];


(lib.antiblocking_ads_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.title_antiblocking_ads_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-320,-140,640,280);
p.frameBounds = [rect];


(lib.redirect_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.remove_btn = new lib.remove_btn();
	this.remove_btn.setTransform(580,115);
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
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,610);
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


(lib.pause_app_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.pause_app_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.pause_app_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.pause_app_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.pause_app_1_4_mc();
	this.instance.setTransform(5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.pause_app_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.pause_app_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{play:0,pause:1});

	// graph
	this.instance = new lib.pause_app_2_mc();
	this.instance.setTransform(400,300);

	this.instance_1 = new lib.pause_app_3_mc();
	this.instance_1.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.4)").s().p("EhduAwcMAAAhg2MC7dAAAMAAABg2g");
	this.shape.setTransform(400,300,1.35,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
p.frameBounds = [rect, rect];


(lib.orientation_lock_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.orientation_lock_7_mc();
	this.instance.setTransform(-18.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.5,-12,107,24);
p.frameBounds = [rect];


(lib.orientation_lock_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.orientation_lock_9_mc();
	this.instance.setTransform(0,-208);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.orientation_lock_5_mc();
	this.instance_1.setTransform(0,210);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.orientation_lock_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.orientation_lock_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-250,300,500);
p.frameBounds = [rect];


(lib.orientation_lock_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.orientation_lock_10_mc();
	this.instance.setTransform(440,210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.orientation_lock_2_mc();
	this.instance_1.setTransform(210,280.1,0.833,0.833,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.orientation_lock_2_mc();
	this.instance_2.setTransform(510,430,0.833,0.833,90);
	this.instance_2.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(85,71.7,633.3,483.3);
p.frameBounds = [rect];


(lib.orientation_lock_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.orientation_lock_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhduAwcMAAAhg2MC7dAAAMAAABg2g");
	this.shape.setTransform(400,300,1.35,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
p.frameBounds = [rect];


(lib.languages_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.pt = new lib.language_pt_mc();
	this.pt.setTransform(510,370);

	this.es = new lib.language_es_mc();
	this.es.setTransform(290,370);

	this.tr = new lib.language_tr_mc();
	this.tr.setTransform(620,220);

	this.ru = new lib.language_ru_mc();
	this.ru.setTransform(180,220);

	this.en = new lib.language_en_mc();
	this.en.setTransform(400,220);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.en},{t:this.ru},{t:this.tr},{t:this.es},{t:this.pt}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(90,155,620,280);
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
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.pumpkin_card_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.body_0_mc = new lib.animation_pumpkin_card_0_mc();

	this.body_1_mc = new lib.animation_pumpkin_card_1_mc();

	this.body_2_mc = new lib.animation_pumpkin_card_2_mc();

	this.body_3_mc = new lib.animation_pumpkin_card_3_mc();

	this.body_4_mc = new lib.animation_pumpkin_card_4_mc();

	this.body_5_mc = new lib.animation_pumpkin_card_5_mc();

	this.body_6_mc = new lib.animation_pumpkin_card_6_mc();

	this.body_7_mc = new lib.animation_pumpkin_card_7_mc();

	this.body_8_mc = new lib.animation_pumpkin_card_8_mc();

	this.body_9_mc = new lib.animation_pumpkin_card_9_mc();

	this.body_10_mc = new lib.animation_pumpkin_card_10_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_0_mc}]}).to({state:[{t:this.body_1_mc}]},1).to({state:[{t:this.body_2_mc}]},1).to({state:[{t:this.body_3_mc}]},1).to({state:[{t:this.body_4_mc}]},1).to({state:[{t:this.body_5_mc}]},1).to({state:[{t:this.body_6_mc}]},1).to({state:[{t:this.body_7_mc}]},1).to({state:[{t:this.body_8_mc}]},1).to({state:[{t:this.body_9_mc}]},1).to({state:[{t:this.body_10_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preview_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// before
	this.instance = new lib.before_hero_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(160));

	// hero
	this.location_3 = new lib.hero_3_mc();
	this.location_3.setTransform(10,-20,1.003,1.003);

	this.timeline.addTween(cjs.Tween.get(this.location_3).to({y:-25},79).to({y:-20},80).wait(1));

	// bg
	this.instance_1 = new lib.bg_hero_mc3();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-300,400,607.9);
p.frameBounds = [rect, rect, new cjs.Rectangle(-200,-300,400,607.8), rect=new cjs.Rectangle(-200,-300,400,607.7), rect, new cjs.Rectangle(-200,-300,400,607.6), rect=new cjs.Rectangle(-200,-300,400,607.5), rect, rect=new cjs.Rectangle(-200,-300,400,607.4), rect, new cjs.Rectangle(-200,-300,400,607.3), rect=new cjs.Rectangle(-200,-300,400,607.2), rect, new cjs.Rectangle(-200,-300,400,607.1), rect=new cjs.Rectangle(-200,-300,400,607), rect, new cjs.Rectangle(-200,-300,400,606.9), rect=new cjs.Rectangle(-200,-300,400,606.8), rect, rect=new cjs.Rectangle(-200,-300,400,606.7), rect, new cjs.Rectangle(-200,-300,400,606.6), rect=new cjs.Rectangle(-200,-300,400,606.5), rect, new cjs.Rectangle(-200,-300,400,606.4), rect=new cjs.Rectangle(-200,-300,400,606.3), rect, rect=new cjs.Rectangle(-200,-300,400,606.2), rect, new cjs.Rectangle(-200,-300,400,606.1), rect=new cjs.Rectangle(-200,-300,400,606), rect, new cjs.Rectangle(-200,-300,400,605.9), rect=new cjs.Rectangle(-200,-300,400,605.8), rect, new cjs.Rectangle(-200,-300,400,605.7), rect=new cjs.Rectangle(-200,-300,400,605.6), rect, rect=new cjs.Rectangle(-200,-300,400,605.5), rect, new cjs.Rectangle(-200,-300,400,605.4), rect=new cjs.Rectangle(-200,-300,400,605.3), rect, new cjs.Rectangle(-200,-300,400,605.2), rect=new cjs.Rectangle(-200,-300,400,605.1), rect, rect=new cjs.Rectangle(-200,-300,400,605), rect, new cjs.Rectangle(-200,-300,400,604.9), rect=new cjs.Rectangle(-200,-300,400,604.8), rect, new cjs.Rectangle(-200,-300,400,604.7), rect=new cjs.Rectangle(-200,-300,400,604.6), rect, new cjs.Rectangle(-200,-300,400,604.5), rect=new cjs.Rectangle(-200,-300,400,604.4), rect, rect=new cjs.Rectangle(-200,-300,400,604.3), rect, new cjs.Rectangle(-200,-300,400,604.2), rect=new cjs.Rectangle(-200,-300,400,604.1), rect, new cjs.Rectangle(-200,-300,400,604), rect=new cjs.Rectangle(-200,-300,400,603.9), rect, new cjs.Rectangle(-200,-300,400,603.8), rect=new cjs.Rectangle(-200,-300,400,603.7), rect, rect=new cjs.Rectangle(-200,-300,400,603.6), rect, new cjs.Rectangle(-200,-300,400,603.5), rect=new cjs.Rectangle(-200,-300,400,603.4), rect, new cjs.Rectangle(-200,-300,400,603.3), rect=new cjs.Rectangle(-200,-300,400,603.2), rect, rect=new cjs.Rectangle(-200,-300,400,603.1), rect, new cjs.Rectangle(-200,-300,400,603), rect=new cjs.Rectangle(-200,-300,400,602.9), rect, new cjs.Rectangle(-200,-300,400,603), rect=new cjs.Rectangle(-200,-300,400,603.1), rect, new cjs.Rectangle(-200,-300,400,603.2), rect=new cjs.Rectangle(-200,-300,400,603.3), rect, rect=new cjs.Rectangle(-200,-300,400,603.4), rect, new cjs.Rectangle(-200,-300,400,603.5), rect=new cjs.Rectangle(-200,-300,400,603.6), rect, new cjs.Rectangle(-200,-300,400,603.7), rect=new cjs.Rectangle(-200,-300,400,603.8), rect, rect=new cjs.Rectangle(-200,-300,400,603.9), rect, new cjs.Rectangle(-200,-300,400,604), rect=new cjs.Rectangle(-200,-300,400,604.1), rect, new cjs.Rectangle(-200,-300,400,604.2), rect=new cjs.Rectangle(-200,-300,400,604.3), rect, rect=new cjs.Rectangle(-200,-300,400,604.4), rect, new cjs.Rectangle(-200,-300,400,604.5), rect=new cjs.Rectangle(-200,-300,400,604.6), rect, new cjs.Rectangle(-200,-300,400,604.7), rect=new cjs.Rectangle(-200,-300,400,604.8), rect, rect=new cjs.Rectangle(-200,-300,400,604.9), rect, new cjs.Rectangle(-200,-300,400,605), rect=new cjs.Rectangle(-200,-300,400,605.1), rect, new cjs.Rectangle(-200,-300,400,605.2), rect=new cjs.Rectangle(-200,-300,400,605.3), rect, rect=new cjs.Rectangle(-200,-300,400,605.4), rect, new cjs.Rectangle(-200,-300,400,605.5), rect=new cjs.Rectangle(-200,-300,400,605.6), rect, new cjs.Rectangle(-200,-300,400,605.7), rect=new cjs.Rectangle(-200,-300,400,605.8), rect, rect=new cjs.Rectangle(-200,-300,400,605.9), rect, new cjs.Rectangle(-200,-300,400,606), rect=new cjs.Rectangle(-200,-300,400,606.1), rect, new cjs.Rectangle(-200,-300,400,606.2), rect=new cjs.Rectangle(-200,-300,400,606.3), rect, rect=new cjs.Rectangle(-200,-300,400,606.4), rect, new cjs.Rectangle(-200,-300,400,606.5), rect=new cjs.Rectangle(-200,-300,400,606.6), rect, new cjs.Rectangle(-200,-300,400,606.7), rect=new cjs.Rectangle(-200,-300,400,606.8), rect, rect=new cjs.Rectangle(-200,-300,400,606.9), rect, new cjs.Rectangle(-200,-300,400,607), rect=new cjs.Rectangle(-200,-300,400,607.1), rect, new cjs.Rectangle(-200,-300,400,607.2), rect=new cjs.Rectangle(-200,-300,400,607.3), rect, rect=new cjs.Rectangle(-200,-300,400,607.4), rect, new cjs.Rectangle(-200,-300,400,607.5), rect=new cjs.Rectangle(-200,-300,400,607.6), rect, new cjs.Rectangle(-200,-300,400,607.7), rect=new cjs.Rectangle(-200,-300,400,607.8), rect, new cjs.Rectangle(-200,-300,400,607.9)];


(lib.preview_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// before
	this.instance = new lib.before_hero_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(160));

	// hero
	this.location_2 = new lib.hero_2_mc();
	this.location_2.setTransform(3,-25,1.003,1.003);

	this.timeline.addTween(cjs.Tween.get(this.location_2).to({y:-30},79).to({y:-25},80).wait(1));

	// bg
	this.instance_1 = new lib.bg_hero_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-300,400,602.4);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-200,-300,400,602.3), rect, rect=new cjs.Rectangle(-200,-300,400,602.2), rect, new cjs.Rectangle(-200,-300,400,602.1), rect=new cjs.Rectangle(-200,-300,400,602), rect, new cjs.Rectangle(-200,-300,400,601.9), rect=new cjs.Rectangle(-200,-300,400,601.8), rect, rect=new cjs.Rectangle(-200,-300,400,601.7), rect, new cjs.Rectangle(-200,-300,400,601.6), rect=new cjs.Rectangle(-200,-300,400,601.5), rect, new cjs.Rectangle(-200,-300,400,601.4), rect=new cjs.Rectangle(-200,-300,400,601.3), rect, new cjs.Rectangle(-200,-300,400,601.2), rect=new cjs.Rectangle(-200,-300,400,601.1), rect, rect=new cjs.Rectangle(-200,-300,400,601), rect, new cjs.Rectangle(-200,-300,400,600.9), rect=new cjs.Rectangle(-200,-300,400,600.8), rect, new cjs.Rectangle(-200,-300,400,600.7), rect=new cjs.Rectangle(-200,-300,400,600.6), rect, new cjs.Rectangle(-200,-300,400,600.5), rect=new cjs.Rectangle(-200,-300,400,600.4), rect, rect=new cjs.Rectangle(-200,-300,400,600.3), rect, new cjs.Rectangle(-200,-300,400,600.2), rect=new cjs.Rectangle(-200,-300,400,600.1), rect, rect=new cjs.Rectangle(-200,-300,400,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-200,-300,400,600.1), rect=new cjs.Rectangle(-200,-300,400,600.2), rect, new cjs.Rectangle(-200,-300,400,600.3), rect=new cjs.Rectangle(-200,-300,400,600.4), rect, rect=new cjs.Rectangle(-200,-300,400,600.5), rect, new cjs.Rectangle(-200,-300,400,600.6), rect=new cjs.Rectangle(-200,-300,400,600.7), rect, new cjs.Rectangle(-200,-300,400,600.8), rect=new cjs.Rectangle(-200,-300,400,600.9), rect, rect=new cjs.Rectangle(-200,-300,400,601), rect, new cjs.Rectangle(-200,-300,400,601.1), rect=new cjs.Rectangle(-200,-300,400,601.2), rect, new cjs.Rectangle(-200,-300,400,601.3), rect=new cjs.Rectangle(-200,-300,400,601.4), rect, rect=new cjs.Rectangle(-200,-300,400,601.5), rect, new cjs.Rectangle(-200,-300,400,601.6), rect=new cjs.Rectangle(-200,-300,400,601.7), rect, new cjs.Rectangle(-200,-300,400,601.8), rect=new cjs.Rectangle(-200,-300,400,601.9), rect, rect=new cjs.Rectangle(-200,-300,400,602), rect, new cjs.Rectangle(-200,-300,400,602.1), rect=new cjs.Rectangle(-200,-300,400,602.2), rect, new cjs.Rectangle(-200,-300,400,602.3), rect=new cjs.Rectangle(-200,-300,400,602.4), rect, rect];


(lib.preview_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// before
	this.instance = new lib.before_hero_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(160));

	// hero
	this.location_1 = new lib.hero_1_mc();
	this.location_1.setTransform(-15,-20,1.003,1.003);

	this.timeline.addTween(cjs.Tween.get(this.location_1).to({y:-25},79).to({y:-20},80).wait(1));

	// bg
	this.instance_1 = new lib.bg_hero_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-300,400,606.4);
p.frameBounds = [rect, rect, new cjs.Rectangle(-200,-300,400,606.3), rect=new cjs.Rectangle(-200,-300,400,606.2), rect, new cjs.Rectangle(-200,-300,400,606.1), rect=new cjs.Rectangle(-200,-300,400,606), rect, rect=new cjs.Rectangle(-200,-300,400,605.9), rect, new cjs.Rectangle(-200,-300,400,605.8), rect=new cjs.Rectangle(-200,-300,400,605.7), rect, new cjs.Rectangle(-200,-300,400,605.6), rect=new cjs.Rectangle(-200,-300,400,605.5), rect, new cjs.Rectangle(-200,-300,400,605.4), rect=new cjs.Rectangle(-200,-300,400,605.3), rect, rect=new cjs.Rectangle(-200,-300,400,605.2), rect, new cjs.Rectangle(-200,-300,400,605.1), rect=new cjs.Rectangle(-200,-300,400,605), rect, new cjs.Rectangle(-200,-300,400,604.9), rect=new cjs.Rectangle(-200,-300,400,604.8), rect, rect=new cjs.Rectangle(-200,-300,400,604.7), rect, new cjs.Rectangle(-200,-300,400,604.6), rect=new cjs.Rectangle(-200,-300,400,604.5), rect, new cjs.Rectangle(-200,-300,400,604.4), rect=new cjs.Rectangle(-200,-300,400,604.3), rect, new cjs.Rectangle(-200,-300,400,604.2), rect=new cjs.Rectangle(-200,-300,400,604.1), rect, rect=new cjs.Rectangle(-200,-300,400,604), rect, new cjs.Rectangle(-200,-300,400,603.9), rect=new cjs.Rectangle(-200,-300,400,603.8), rect, new cjs.Rectangle(-200,-300,400,603.7), rect=new cjs.Rectangle(-200,-300,400,603.6), rect, rect=new cjs.Rectangle(-200,-300,400,603.5), rect, new cjs.Rectangle(-200,-300,400,603.4), rect=new cjs.Rectangle(-200,-300,400,603.3), rect, new cjs.Rectangle(-200,-300,400,603.2), rect=new cjs.Rectangle(-200,-300,400,603.1), rect, new cjs.Rectangle(-200,-300,400,603), rect=new cjs.Rectangle(-200,-300,400,602.9), rect, rect=new cjs.Rectangle(-200,-300,400,602.8), rect, new cjs.Rectangle(-200,-300,400,602.7), rect=new cjs.Rectangle(-200,-300,400,602.6), rect, new cjs.Rectangle(-200,-300,400,602.5), rect=new cjs.Rectangle(-200,-300,400,602.4), rect, new cjs.Rectangle(-200,-300,400,602.3), rect=new cjs.Rectangle(-200,-300,400,602.2), rect, rect=new cjs.Rectangle(-200,-300,400,602.1), rect, new cjs.Rectangle(-200,-300,400,602), rect=new cjs.Rectangle(-200,-300,400,601.9), rect, new cjs.Rectangle(-200,-300,400,601.8), rect=new cjs.Rectangle(-200,-300,400,601.7), rect, rect=new cjs.Rectangle(-200,-300,400,601.6), rect, new cjs.Rectangle(-200,-300,400,601.5), rect=new cjs.Rectangle(-200,-300,400,601.4), rect, new cjs.Rectangle(-200,-300,400,601.5), rect=new cjs.Rectangle(-200,-300,400,601.6), rect, new cjs.Rectangle(-200,-300,400,601.7), rect=new cjs.Rectangle(-200,-300,400,601.8), rect, rect=new cjs.Rectangle(-200,-300,400,601.9), rect, new cjs.Rectangle(-200,-300,400,602), rect=new cjs.Rectangle(-200,-300,400,602.1), rect, new cjs.Rectangle(-200,-300,400,602.2), rect=new cjs.Rectangle(-200,-300,400,602.3), rect, rect=new cjs.Rectangle(-200,-300,400,602.4), rect, new cjs.Rectangle(-200,-300,400,602.5), rect=new cjs.Rectangle(-200,-300,400,602.6), rect, new cjs.Rectangle(-200,-300,400,602.7), rect=new cjs.Rectangle(-200,-300,400,602.8), rect, rect=new cjs.Rectangle(-200,-300,400,602.9), rect, new cjs.Rectangle(-200,-300,400,603), rect=new cjs.Rectangle(-200,-300,400,603.1), rect, new cjs.Rectangle(-200,-300,400,603.2), rect=new cjs.Rectangle(-200,-300,400,603.3), rect, rect=new cjs.Rectangle(-200,-300,400,603.4), rect, new cjs.Rectangle(-200,-300,400,603.5), rect=new cjs.Rectangle(-200,-300,400,603.6), rect, new cjs.Rectangle(-200,-300,400,603.7), rect=new cjs.Rectangle(-200,-300,400,603.8), rect, rect=new cjs.Rectangle(-200,-300,400,603.9), rect, new cjs.Rectangle(-200,-300,400,604), rect=new cjs.Rectangle(-200,-300,400,604.1), rect, new cjs.Rectangle(-200,-300,400,604.2), rect=new cjs.Rectangle(-200,-300,400,604.3), rect, rect=new cjs.Rectangle(-200,-300,400,604.4), rect, new cjs.Rectangle(-200,-300,400,604.5), rect=new cjs.Rectangle(-200,-300,400,604.6), rect, new cjs.Rectangle(-200,-300,400,604.7), rect=new cjs.Rectangle(-200,-300,400,604.8), rect, rect=new cjs.Rectangle(-200,-300,400,604.9), rect, new cjs.Rectangle(-200,-300,400,605), rect=new cjs.Rectangle(-200,-300,400,605.1), rect, new cjs.Rectangle(-200,-300,400,605.2), rect=new cjs.Rectangle(-200,-300,400,605.3), rect, rect=new cjs.Rectangle(-200,-300,400,605.4), rect, new cjs.Rectangle(-200,-300,400,605.5), rect=new cjs.Rectangle(-200,-300,400,605.6), rect, new cjs.Rectangle(-200,-300,400,605.7), rect=new cjs.Rectangle(-200,-300,400,605.8), rect, rect=new cjs.Rectangle(-200,-300,400,605.9), rect, new cjs.Rectangle(-200,-300,400,606), rect=new cjs.Rectangle(-200,-300,400,606.1), rect, new cjs.Rectangle(-200,-300,400,606.2), rect=new cjs.Rectangle(-200,-300,400,606.3), rect, new cjs.Rectangle(-200,-300,400,606.4)];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_3_img();
	this.instance.setTransform(-140,-240);

	this.instance_1 = new lib.location_1_3_img();
	this.instance_1.setTransform(-140,-240);

	this.instance_2 = new lib.location_2_3_img();
	this.instance_2.setTransform(-140,-240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// decor
	this.instance_3 = new lib.decor_location_1_1_mc();

	this.instance_4 = new lib.animation_current_location_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgVFAj8MAAAhH3MAqLAAAMAAABH3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-240,280,480);
p.frameBounds = [rect, new cjs.Rectangle(-145,-245,290,490), new cjs.Rectangle(-140,-240,280,480)];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_2_img();
	this.instance.setTransform(-140,-240);

	this.instance_1 = new lib.location_1_2_img();
	this.instance_1.setTransform(-140,-240);

	this.instance_2 = new lib.location_2_2_img();
	this.instance_2.setTransform(-140,-240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// decor
	this.instance_3 = new lib.decor_location_1_1_mc();

	this.instance_4 = new lib.animation_current_location_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgVFAj8MAAAhH3MAqLAAAMAAABH3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-240,280,480);
p.frameBounds = [rect, new cjs.Rectangle(-145,-245,290,490), new cjs.Rectangle(-140,-240,280,480)];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_1_img();
	this.instance.setTransform(-140,-240);

	this.instance_1 = new lib.location_1_1_img();
	this.instance_1.setTransform(-140,-240);

	this.instance_2 = new lib.location_2_1_img();
	this.instance_2.setTransform(-140,-240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// decor
	this.instance_3 = new lib.decor_location_1_1_mc();

	this.instance_4 = new lib.animation_current_location_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgVFAj8MAAAhH3MAqLAAAMAAABH3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-240,280,480);
p.frameBounds = [rect, new cjs.Rectangle(-145,-245,290,490), new cjs.Rectangle(-140,-240,280,480)];


(lib.frame_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":179});

	// timeline functions:
	this.frame_34 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_54 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_74 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(20).call(this.frame_54).wait(20).call(this.frame_74).wait(106));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-260,20);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:-550},0).wait(23).to({y:100},15).to({y:20},5).wait(75).to({y:-30},5).to({y:650},10).wait(46));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(0,-20);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-600},0).wait(43).to({y:70},15).to({y:-20},5).wait(70).to({y:-70},5).to({y:600},10).wait(31));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(260,20);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-550},0).wait(63).to({y:100},15).to({y:20},5).wait(5).to({scaleX:0.93,scaleY:0.93},5).to({scaleX:1,scaleY:1},10).wait(45).to({y:-30},5).to({y:650},10).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-260,800,520);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,-840,800,530), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-840,800,573.4), new cjs.Rectangle(-400,-840,800,616.7), new cjs.Rectangle(-400,-840,800,660), new cjs.Rectangle(-400,-840,800,703.4), new cjs.Rectangle(-400,-840,800,746.7), new cjs.Rectangle(-400,-840,800,790), new cjs.Rectangle(-400,-840,800,833.4), new cjs.Rectangle(-400,-840,800,876.7), new cjs.Rectangle(-400,-840,800,920), new cjs.Rectangle(-400,-840,800,963.4), new cjs.Rectangle(-400,-840,800,1006.7), new cjs.Rectangle(-400,-840,800,1050), new cjs.Rectangle(-400,-840,800,1093.4), new cjs.Rectangle(-400,-840,800,1136.7), new cjs.Rectangle(-400,-840,800,1180), new cjs.Rectangle(-400,-840,800,1164), new cjs.Rectangle(-400,-840,800,1148), new cjs.Rectangle(-400,-840,800,1132), new cjs.Rectangle(-400,-840,800,1116), new cjs.Rectangle(-400,-840,800,1100), new cjs.Rectangle(-400,-795.3,800,1055.4), rect=new cjs.Rectangle(-400,-790,800,1050), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-790,800,1055.4), new cjs.Rectangle(-400,-790,800,1100), new cjs.Rectangle(-400,-790,800,1082), new cjs.Rectangle(-400,-790,800,1064), rect=new cjs.Rectangle(-400,-790,800,1050), rect, rect, new cjs.Rectangle(-400,-746.6,800,1006.7), new cjs.Rectangle(-400,-703.3,800,963.4), new cjs.Rectangle(-400,-660,800,920), new cjs.Rectangle(-400,-616.6,800,876.7), new cjs.Rectangle(-400,-573.3,800,833.4), new cjs.Rectangle(-400,-530,800,790), new cjs.Rectangle(-400,-486.6,800,746.7), new cjs.Rectangle(-400,-443.3,800,703.4), new cjs.Rectangle(-400,-400,800,660), new cjs.Rectangle(-400,-356.6,800,616.7), new cjs.Rectangle(-400,-313.3,800,573.4), new cjs.Rectangle(-400,-270,800,530), new cjs.Rectangle(-400,-260,800,520), new cjs.Rectangle(-400,-260,800,556.7), new cjs.Rectangle(-400,-260,800,600), new cjs.Rectangle(-400,-260,800,584), new cjs.Rectangle(-400,-260,800,568), new cjs.Rectangle(-400,-260,800,552), new cjs.Rectangle(-400,-260,800,536), rect=new cjs.Rectangle(-400,-260,800,520), rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-260,798,520), new cjs.Rectangle(-400,-260,796,520), new cjs.Rectangle(-400,-260,794.1,520), new cjs.Rectangle(-400,-260,792.1,520), new cjs.Rectangle(-400,-260,790,520), new cjs.Rectangle(-400,-260,791,520), new cjs.Rectangle(-400,-260,792,520), new cjs.Rectangle(-400,-260,793,520), new cjs.Rectangle(-400,-260,794,520), new cjs.Rectangle(-400,-260,795,520), new cjs.Rectangle(-400,-260,796,520), new cjs.Rectangle(-400,-260,797,520), new cjs.Rectangle(-400,-260,798,520), new cjs.Rectangle(-400,-260,798.9,520), rect=new cjs.Rectangle(-400,-260,800,520), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-270,800,530), new cjs.Rectangle(-400,-260,800,538), new cjs.Rectangle(-400,-260,800,606), new cjs.Rectangle(-400,-260,800,674), new cjs.Rectangle(-400,-260,800,742), new cjs.Rectangle(-400,-260,800,810), new cjs.Rectangle(-400,-260,800,878), new cjs.Rectangle(-400,-260,800,946), new cjs.Rectangle(-400,-260,800,1014), new cjs.Rectangle(-400,-260,800,1082), new cjs.Rectangle(-400,-260,800,1150), new cjs.Rectangle(-400,-270,800,1160), new cjs.Rectangle(-400,-280,800,1170), new cjs.Rectangle(-400,-290,800,1180), new cjs.Rectangle(-400,-300,800,1190), new cjs.Rectangle(-400,-310,800,1200), new cjs.Rectangle(-400,-243,800,1133), rect=new cjs.Rectangle(-400,-220,800,1110), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-230,800,1120), new cjs.Rectangle(-400,-240,800,1130), new cjs.Rectangle(-400,-250,800,1140), new cjs.Rectangle(-400,-260,800,1150), new cjs.Rectangle(-400,-270,800,1160), new cjs.Rectangle(-400,-202,800,1092), new cjs.Rectangle(-400,-134,800,1024), new cjs.Rectangle(-400,-66,800,956), new cjs.Rectangle(-400,2,800,888), new cjs.Rectangle(-400,70,800,820), new cjs.Rectangle(-400,138,800,752), new cjs.Rectangle(-400,206,800,684), new cjs.Rectangle(-400,274,800,616), new cjs.Rectangle(-400,342,800,548), rect=new cjs.Rectangle(-400,360,800,530), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":139,"end":229});

	// timeline functions:
	this.frame_34 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_54 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_74 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_84 = function() {
		try
		{
			app.addSoundFunc("ghost_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(20).call(this.frame_54).wait(20).call(this.frame_74).wait(10).call(this.frame_84).wait(146));

	// decor
	this.instance = new lib.screamer_mc();
	this.instance.setTransform(-500,450);
	this.instance.alpha = 0.199;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84).to({_off:false},0).to({x:-227.3,y:218.2,alpha:0.898},15).to({x:136.4,y:-90.9},20).to({x:500,y:-400,alpha:0.199},20).to({_off:true},1).wait(90));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-260,20);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:-550},0).wait(23).to({y:100},15).to({y:20},5).wait(125).to({y:-30},5).to({y:650},10).wait(46));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(0,-20);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-600},0).wait(43).to({y:70},15).to({y:-20},5).wait(75).to({scaleX:0.93,scaleY:0.93},5).to({scaleX:1,scaleY:1},10).wait(45).to({y:-70},5).to({y:600},10).wait(16));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(260,20);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-550},0).wait(63).to({y:100},15).to({y:20},5).wait(100).to({y:-30},5).to({y:650},10).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-260,800,520);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,-840,800,530), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-840,800,573.4), new cjs.Rectangle(-400,-840,800,616.7), new cjs.Rectangle(-400,-840,800,660), new cjs.Rectangle(-400,-840,800,703.4), new cjs.Rectangle(-400,-840,800,746.7), new cjs.Rectangle(-400,-840,800,790), new cjs.Rectangle(-400,-840,800,833.4), new cjs.Rectangle(-400,-840,800,876.7), new cjs.Rectangle(-400,-840,800,920), new cjs.Rectangle(-400,-840,800,963.4), new cjs.Rectangle(-400,-840,800,1006.7), new cjs.Rectangle(-400,-840,800,1050), new cjs.Rectangle(-400,-840,800,1093.4), new cjs.Rectangle(-400,-840,800,1136.7), new cjs.Rectangle(-400,-840,800,1180), new cjs.Rectangle(-400,-840,800,1164), new cjs.Rectangle(-400,-840,800,1148), new cjs.Rectangle(-400,-840,800,1132), new cjs.Rectangle(-400,-840,800,1116), new cjs.Rectangle(-400,-840,800,1100), new cjs.Rectangle(-400,-795.3,800,1055.4), rect=new cjs.Rectangle(-400,-790,800,1050), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-790,800,1055.4), new cjs.Rectangle(-400,-790,800,1100), new cjs.Rectangle(-400,-790,800,1082), new cjs.Rectangle(-400,-790,800,1064), rect=new cjs.Rectangle(-400,-790,800,1050), rect, rect, new cjs.Rectangle(-400,-746.6,800,1006.7), new cjs.Rectangle(-400,-703.3,800,963.4), new cjs.Rectangle(-400,-660,800,920), new cjs.Rectangle(-400,-616.6,800,876.7), new cjs.Rectangle(-400,-573.3,800,833.4), new cjs.Rectangle(-400,-530,800,790), new cjs.Rectangle(-400,-486.6,800,746.7), new cjs.Rectangle(-400,-443.3,800,703.4), new cjs.Rectangle(-400,-400,800,660), new cjs.Rectangle(-400,-356.6,800,616.7), new cjs.Rectangle(-400,-313.3,800,573.4), new cjs.Rectangle(-400,-270,800,530), new cjs.Rectangle(-400,-260,800,520), new cjs.Rectangle(-400,-260,800,556.7), new cjs.Rectangle(-400,-260,800,600), new cjs.Rectangle(-400,-260,800,584), new cjs.Rectangle(-400,-260,800,568), new cjs.Rectangle(-400,-260,800,552), new cjs.Rectangle(-400,-260,800,536), new cjs.Rectangle(-575,-260,975,805), new cjs.Rectangle(-556.8,-260,956.8,789.6), new cjs.Rectangle(-538.6,-260,938.7,774.1), new cjs.Rectangle(-520.4,-260,920.5,758.7), new cjs.Rectangle(-502.3,-260,902.3,743.2), new cjs.Rectangle(-484.1,-260,884.1,727.8), new cjs.Rectangle(-465.9,-260,865.9,712.3), new cjs.Rectangle(-447.7,-260,847.8,696.9), new cjs.Rectangle(-429.5,-260,829.6,681.4), new cjs.Rectangle(-411.4,-260,811.4,665.9), new cjs.Rectangle(-400,-260,800,650.5), new cjs.Rectangle(-400,-260,800,635), new cjs.Rectangle(-400,-260,800,619.6), new cjs.Rectangle(-400,-260,800,604.1), new cjs.Rectangle(-400,-260,800,588.7), new cjs.Rectangle(-400,-260,800,573.2), new cjs.Rectangle(-400,-260,800,557.8), new cjs.Rectangle(-400,-260,800,542.3), new cjs.Rectangle(-400,-260,800,526.9), rect=new cjs.Rectangle(-400,-260,800,520), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-263.1,800,523.2), new cjs.Rectangle(-400,-278.6,800,538.7), new cjs.Rectangle(-400,-294.1,800,554.1), new cjs.Rectangle(-400,-309.5,800,569.6), new cjs.Rectangle(-400,-325,800,585), new cjs.Rectangle(-400,-340.4,800,600.5), new cjs.Rectangle(-400,-355.9,811.4,615.9), new cjs.Rectangle(-400,-371.3,829.6,631.4), new cjs.Rectangle(-400,-386.8,847.7,646.8), new cjs.Rectangle(-400,-402.2,865.9,662.3), new cjs.Rectangle(-400,-417.7,884.1,677.7), new cjs.Rectangle(-400,-433.2,902.3,693.2), new cjs.Rectangle(-400,-448.6,920.5,708.7), new cjs.Rectangle(-400,-464.1,938.7,724.1), new cjs.Rectangle(-400,-479.5,956.8,739.6), new cjs.Rectangle(-400,-495,975,755), new cjs.Rectangle(-400,-256.5,800,516.6), new cjs.Rectangle(-400,-253.1,800,513.1), new cjs.Rectangle(-400,-249.7,800,509.7), new cjs.Rectangle(-400,-246.2,800,506.3), new cjs.Rectangle(-400,-242.8,800,502.9), new cjs.Rectangle(-400,-244.5,800,504.6), new cjs.Rectangle(-400,-246.2,800,506.3), new cjs.Rectangle(-400,-247.9,800,508), new cjs.Rectangle(-400,-249.7,800,509.7), new cjs.Rectangle(-400,-251.4,800,511.4), new cjs.Rectangle(-400,-253.1,800,513.1), new cjs.Rectangle(-400,-254.8,800,514.8), new cjs.Rectangle(-400,-256.5,800,516.6), new cjs.Rectangle(-400,-258.2,800,518.3), rect=new cjs.Rectangle(-400,-260,800,520), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-270,800,530), new cjs.Rectangle(-400,-260,800,538), new cjs.Rectangle(-400,-260,800,606), new cjs.Rectangle(-400,-260,800,674), new cjs.Rectangle(-400,-260,800,742), new cjs.Rectangle(-400,-260,800,810), new cjs.Rectangle(-400,-260,800,878), new cjs.Rectangle(-400,-260,800,946), new cjs.Rectangle(-400,-260,800,1014), new cjs.Rectangle(-400,-260,800,1082), rect=new cjs.Rectangle(-400,-260,800,1150), rect, rect, rect, rect, new cjs.Rectangle(-400,-270,800,1160), rect=new cjs.Rectangle(-400,-260,800,1150), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-270,800,1160), new cjs.Rectangle(-400,-280,800,1170), new cjs.Rectangle(-400,-290,800,1180), new cjs.Rectangle(-400,-300,800,1190), new cjs.Rectangle(-400,-310,800,1200), new cjs.Rectangle(-400,-243,800,1133), new cjs.Rectangle(-400,-176,800,1066), new cjs.Rectangle(-400,-109,800,999), new cjs.Rectangle(-400,-42,800,932), new cjs.Rectangle(-400,25,800,865), new cjs.Rectangle(-400,92,800,798), new cjs.Rectangle(-400,159,800,731), new cjs.Rectangle(-400,226,800,664), new cjs.Rectangle(-400,293,800,597), rect=new cjs.Rectangle(-400,360,800,530), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":179});

	// timeline functions:
	this.frame_34 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_54 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_74 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(20).call(this.frame_54).wait(20).call(this.frame_74).wait(106));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-260,20);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:-550},0).wait(23).to({y:100},15).to({y:20},5).wait(45).to({scaleX:0.93,scaleY:0.93},5).to({scaleX:1,scaleY:1},10).wait(45).to({y:-30},5).to({y:650},10).wait(16));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(0,-20);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-600},0).wait(43).to({y:70},15).to({y:-20},5).wait(70).to({y:-70},5).to({y:600},10).wait(31));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(260,20);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-550},0).wait(63).to({y:100},15).to({y:20},5).wait(35).to({y:-30},5).to({y:650},10).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-260,800,520);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,-840,800,530), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-840,800,573.4), new cjs.Rectangle(-400,-840,800,616.7), new cjs.Rectangle(-400,-840,800,660), new cjs.Rectangle(-400,-840,800,703.4), new cjs.Rectangle(-400,-840,800,746.7), new cjs.Rectangle(-400,-840,800,790), new cjs.Rectangle(-400,-840,800,833.4), new cjs.Rectangle(-400,-840,800,876.7), new cjs.Rectangle(-400,-840,800,920), new cjs.Rectangle(-400,-840,800,963.4), new cjs.Rectangle(-400,-840,800,1006.7), new cjs.Rectangle(-400,-840,800,1050), new cjs.Rectangle(-400,-840,800,1093.4), new cjs.Rectangle(-400,-840,800,1136.7), new cjs.Rectangle(-400,-840,800,1180), new cjs.Rectangle(-400,-840,800,1164), new cjs.Rectangle(-400,-840,800,1148), new cjs.Rectangle(-400,-840,800,1132), new cjs.Rectangle(-400,-840,800,1116), new cjs.Rectangle(-400,-840,800,1100), new cjs.Rectangle(-400,-795.3,800,1055.4), rect=new cjs.Rectangle(-400,-790,800,1050), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-790,800,1055.4), new cjs.Rectangle(-400,-790,800,1100), new cjs.Rectangle(-400,-790,800,1082), new cjs.Rectangle(-400,-790,800,1064), rect=new cjs.Rectangle(-400,-790,800,1050), rect, rect, new cjs.Rectangle(-400,-746.6,800,1006.7), new cjs.Rectangle(-400,-703.3,800,963.4), new cjs.Rectangle(-400,-660,800,920), new cjs.Rectangle(-400,-616.6,800,876.7), new cjs.Rectangle(-400,-573.3,800,833.4), new cjs.Rectangle(-400,-530,800,790), new cjs.Rectangle(-400,-486.6,800,746.7), new cjs.Rectangle(-400,-443.3,800,703.4), new cjs.Rectangle(-400,-400,800,660), new cjs.Rectangle(-400,-356.6,800,616.7), new cjs.Rectangle(-400,-313.3,800,573.4), new cjs.Rectangle(-400,-270,800,530), new cjs.Rectangle(-400,-260,800,520), new cjs.Rectangle(-400,-260,800,556.7), new cjs.Rectangle(-400,-260,800,600), new cjs.Rectangle(-400,-260,800,584), new cjs.Rectangle(-400,-260,800,568), new cjs.Rectangle(-400,-260,800,552), new cjs.Rectangle(-400,-260,800,536), rect=new cjs.Rectangle(-400,-260,800,520), rect, rect, rect, rect, rect, new cjs.Rectangle(-398,-260,798,520), new cjs.Rectangle(-396,-260,796,520), new cjs.Rectangle(-394,-260,794,520), new cjs.Rectangle(-392,-260,792,520), new cjs.Rectangle(-390,-260,790,520), new cjs.Rectangle(-390.9,-260,791,520), new cjs.Rectangle(-391.9,-260,792,520), new cjs.Rectangle(-392.9,-260,793,520), new cjs.Rectangle(-393.9,-260,794,520), new cjs.Rectangle(-394.9,-260,794.9,520), new cjs.Rectangle(-395.9,-260,795.9,520), new cjs.Rectangle(-396.9,-260,796.9,520), new cjs.Rectangle(-397.9,-260,797.9,520), new cjs.Rectangle(-398.8,-260,798.9,520), rect=new cjs.Rectangle(-400,-260,800,520), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-270,800,530), new cjs.Rectangle(-400,-260,800,538), new cjs.Rectangle(-400,-260,800,606), new cjs.Rectangle(-400,-260,800,674), new cjs.Rectangle(-400,-260,800,742), new cjs.Rectangle(-400,-260,800,810), new cjs.Rectangle(-400,-260,800,878), new cjs.Rectangle(-400,-260,800,946), new cjs.Rectangle(-400,-260,800,1014), new cjs.Rectangle(-400,-260,800,1082), new cjs.Rectangle(-400,-260,800,1150), new cjs.Rectangle(-400,-270,800,1160), new cjs.Rectangle(-400,-280,800,1170), new cjs.Rectangle(-400,-290,800,1180), new cjs.Rectangle(-400,-300,800,1190), new cjs.Rectangle(-400,-310,800,1200), new cjs.Rectangle(-400,-243,800,1133), rect=new cjs.Rectangle(-400,-220,800,1110), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-230,800,1120), new cjs.Rectangle(-400,-240,800,1130), new cjs.Rectangle(-400,-250,800,1140), new cjs.Rectangle(-400,-260,800,1150), new cjs.Rectangle(-400,-270,800,1160), new cjs.Rectangle(-400,-202,800,1092), new cjs.Rectangle(-400,-134,800,1024), new cjs.Rectangle(-400,-66,800,956), new cjs.Rectangle(-400,2,800,888), new cjs.Rectangle(-400,70,800,820), new cjs.Rectangle(-400,138,800,752), new cjs.Rectangle(-400,206,800,684), new cjs.Rectangle(-400,274,800,616), new cjs.Rectangle(-400,342,800,548), rect=new cjs.Rectangle(-400,360,800,530), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.countdown_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"end":139});

	// timeline functions:
	this.frame_24 = function() {
		try
		{
			app.addSoundFunc("tick_sound", 0.1);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_54 = function() {
		try
		{
			app.addSoundFunc("tick_sound", 0.1);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_84 = function() {
		try
		{
			app.addSoundFunc("tick_sound", 0.1);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_114 = function() {
		try
		{
			app.addSoundFunc("tick_sound", 0.1);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(30).call(this.frame_54).wait(30).call(this.frame_84).wait(30).call(this.frame_114).wait(26));

	// animation
	this.instance = new lib.black_drop_mc();
	this.instance.setTransform(45.2,-75.1,0.773,0.773,30,0,0,0.1,-0.2);
	this.instance.alpha = 0.102;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({regY:-0.1,scaleX:1,scaleY:1,x:65.2,y:-145,alpha:1},5).to({alpha:0.102},5).to({_off:true},1).wait(19).to({_off:false,regX:0,regY:0,scaleX:0.71,scaleY:0.71,rotation:-45,x:-65,y:-60},0).to({scaleX:1,scaleY:1,x:-110,y:-100,alpha:1},5).to({alpha:0.102},5).to({_off:true},1).wait(19).to({_off:false,scaleX:0.77,scaleY:0.77,rotation:-210,x:30,y:80},0).to({scaleX:1,scaleY:1,x:65,y:155,alpha:1},5).to({alpha:0.102},5).to({_off:true},1).wait(19).to({_off:false,scaleX:0.71,scaleY:0.71,rotation:-135,x:-75,y:60},0).to({scaleX:1,scaleY:1,x:-150,y:120,alpha:1},5).to({alpha:0.102},5).to({_off:true},1).wait(15));

	// animation
	this.instance_1 = new lib.countdown_0_3_mc();
	this.instance_1.setTransform(0,0,0.643,0.643);
	this.instance_1.alpha = 0.012;

	this.instance_2 = new lib.countdown_0_2_mc();
	this.instance_2.setTransform(0,0,0.643,0.643);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.instance_3 = new lib.countdown_0_1_mc();
	this.instance_3.setTransform(0,0,0.643,0.643);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.instance_4 = new lib.countdown_0_0_mc();
	this.instance_4.setTransform(0,0,0.643,0.643);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({scaleX:1,scaleY:1,alpha:1},9).to({_off:true},21).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},9).to({_off:true},21).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(80).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},9).to({_off:true},21).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(110).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},9).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125.3,-125.3,250.7,250.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-133,-133,266.2,266.2), new cjs.Rectangle(-140.8,-140.8,281.7,281.7), new cjs.Rectangle(-148.5,-148.5,297.2,297.2), new cjs.Rectangle(-156.3,-156.3,312.6,312.6), new cjs.Rectangle(-164,-164,328.1,328.1), new cjs.Rectangle(-171.7,-171.7,343.6,343.6), new cjs.Rectangle(-179.5,-182.1,359.1,361.7), new cjs.Rectangle(-187.2,-199.5,374.5,386.8), new cjs.Rectangle(-195,-216.9,390,412), rect=new cjs.Rectangle(-195,-216.8,390,411.9), rect, rect, rect, new cjs.Rectangle(-195,-216.9,390,412), rect=new cjs.Rectangle(-195,-195,390,390), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-125.3,-125.3,250.7,250.7), new cjs.Rectangle(-133,-133,266.2,266.2), new cjs.Rectangle(-140.8,-140.8,281.7,281.7), new cjs.Rectangle(-148.5,-148.5,297.2,297.2), new cjs.Rectangle(-156.3,-156.3,312.6,312.6), new cjs.Rectangle(-164,-164,328.1,328.1), new cjs.Rectangle(-171.7,-171.7,343.6,343.6), new cjs.Rectangle(-179.5,-179.5,359.1,359.1), new cjs.Rectangle(-187.2,-187.2,374.5,374.5), rect=new cjs.Rectangle(-195,-195,390,390), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-125.3,-125.3,250.7,250.7), new cjs.Rectangle(-133,-133,266.2,266.2), new cjs.Rectangle(-140.8,-140.8,281.7,281.7), new cjs.Rectangle(-148.5,-148.5,297.2,297.2), new cjs.Rectangle(-156.3,-156.3,312.6,312.6), new cjs.Rectangle(-164,-164,328.1,328.1), new cjs.Rectangle(-171.7,-171.7,343.6,343.7), new cjs.Rectangle(-179.5,-179.5,359.1,369.7), new cjs.Rectangle(-187.2,-187.2,374.5,395.8), new cjs.Rectangle(-195,-195,390,422), rect=new cjs.Rectangle(-195,-195,390,421.9), rect, rect, rect, new cjs.Rectangle(-195,-195,390,422), rect=new cjs.Rectangle(-195,-195,390,390), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-125.3,-125.3,250.7,250.7), new cjs.Rectangle(-133,-133,266.2,266.2), new cjs.Rectangle(-140.8,-140.8,281.7,281.7), new cjs.Rectangle(-148.5,-148.5,297.2,297.2), new cjs.Rectangle(-156.3,-156.3,312.6,312.6), new cjs.Rectangle(-164,-164,328.1,328.1), new cjs.Rectangle(-171.7,-171.7,343.6,343.6), new cjs.Rectangle(-182.3,-179.5,361.9,359.1), new cjs.Rectangle(-201.4,-187.2,388.7,374.5), new cjs.Rectangle(-220.7,-195,415.8,390), rect=new cjs.Rectangle(-220.6,-195,415.6,390), rect, rect, rect, new cjs.Rectangle(-220.7,-195,415.8,390), rect=new cjs.Rectangle(-195,-195,390,390), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cards_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.pumpkin_card_mc();
	this.instance.setTransform(154.9,154.9,0.912,0.912,0,0,0,-0.1,-0.1);

	this.instance_1 = new lib.pumpkin_card_mc();
	this.instance_1.setTransform(-0.1,154.9,0.912,0.912,0,0,0,-0.1,-0.1);

	this.instance_2 = new lib.pumpkin_card_mc();
	this.instance_2.setTransform(-155.1,154.9,0.912,0.912,0,0,0,-0.1,-0.1);

	this.instance_3 = new lib.pumpkin_card_mc();
	this.instance_3.setTransform(154.9,-0.1,0.912,0.912,0,0,0,-0.1,-0.1);

	this.instance_4 = new lib.pumpkin_card_mc();
	this.instance_4.setTransform(-155.1,-0.1,0.912,0.912,0,0,0,-0.1,-0.1);

	this.instance_5 = new lib.pumpkin_card_mc();
	this.instance_5.setTransform(154.9,-155.1,0.912,0.912,0,0,0,-0.1,-0.1);

	this.instance_6 = new lib.pumpkin_card_mc();
	this.instance_6.setTransform(-0.1,-155.1,0.912,0.912,0,0,0,-0.1,-0.1);

	this.instance_7 = new lib.pumpkin_card_mc();
	this.instance_7.setTransform(-155.1,-155.1,0.912,0.912,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-228,-228,456,456);
p.frameBounds = [rect];


(lib.cards_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.pumpkin_card_mc();
	this.instance.setTransform(-0.1,-150.1,0.912,0.912,0,0,0,-0.1,-0.1);

	this.instance_1 = new lib.pumpkin_card_mc();
	this.instance_1.setTransform(79.9,-0.1,0.912,0.912,0,0,0,-0.1,-0.1);

	this.instance_2 = new lib.pumpkin_card_mc();
	this.instance_2.setTransform(-80.1,-0.1,0.912,0.912,0,0,0,-0.1,-0.1);

	this.instance_3 = new lib.pumpkin_card_mc();
	this.instance_3.setTransform(159.9,149.9,0.912,0.912,0,0,0,-0.1,-0.1);

	this.instance_4 = new lib.pumpkin_card_mc();
	this.instance_4.setTransform(-0.1,149.9,0.912,0.912,0,0,0,-0.1,-0.1);

	this.instance_5 = new lib.pumpkin_card_mc();
	this.instance_5.setTransform(-160.1,149.9,0.912,0.912,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-233,-223,466,446);
p.frameBounds = [rect];


(lib.cards_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.pumpkin_card_mc();
	this.instance.setTransform(74.9,74.9,0.912,0.912,0,0,0,-0.1,-0.1);

	this.instance_1 = new lib.pumpkin_card_mc();
	this.instance_1.setTransform(-75.1,74.9,0.912,0.912,0,0,0,-0.1,-0.1);

	this.instance_2 = new lib.pumpkin_card_mc();
	this.instance_2.setTransform(74.9,-75.1,0.912,0.912,0,0,0,-0.1,-0.1);

	this.instance_3 = new lib.pumpkin_card_mc();
	this.instance_3.setTransform(-75.1,-75.1,0.912,0.912,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-148,-148,296,296);
p.frameBounds = [rect];


(lib.card_turn_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.body_0_mc = new lib.animation_card_0_mc();

	this.body_1_mc = new lib.animation_card_10_mc();

	this.body_2_mc = new lib.animation_card_9_mc();

	this.body_3_mc = new lib.animation_card_8_mc();

	this.body_4_mc = new lib.animation_card_7_mc();

	this.body_5_mc = new lib.animation_card_6_mc();

	this.body_6_mc = new lib.animation_card_5_mc();

	this.body_7_mc = new lib.animation_card_4_mc();

	this.body_8_mc = new lib.animation_card_3_mc();

	this.body_9_mc = new lib.animation_card_2_mc();

	this.body_10_mc = new lib.animation_card_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_0_mc}]}).to({state:[{t:this.body_1_mc}]},1).to({state:[{t:this.body_2_mc}]},1).to({state:[{t:this.body_3_mc}]},1).to({state:[{t:this.body_4_mc}]},1).to({state:[{t:this.body_5_mc}]},1).to({state:[{t:this.body_6_mc}]},1).to({state:[{t:this.body_7_mc}]},1).to({state:[{t:this.body_8_mc}]},1).to({state:[{t:this.body_9_mc}]},1).to({state:[{t:this.body_10_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.card_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.body_0_mc = new lib.animation_card_0_mc();

	this.body_1_mc = new lib.animation_card_1_mc();

	this.body_2_mc = new lib.animation_card_2_mc();

	this.body_3_mc = new lib.animation_card_3_mc();

	this.body_4_mc = new lib.animation_card_4_mc();

	this.body_5_mc = new lib.animation_card_5_mc();

	this.body_6_mc = new lib.animation_card_6_mc();

	this.body_7_mc = new lib.animation_card_7_mc();

	this.body_8_mc = new lib.animation_card_8_mc();

	this.body_9_mc = new lib.animation_card_9_mc();

	this.body_10_mc = new lib.animation_card_10_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_0_mc}]}).to({state:[{t:this.body_1_mc}]},1).to({state:[{t:this.body_2_mc}]},1).to({state:[{t:this.body_3_mc}]},1).to({state:[{t:this.body_4_mc}]},1).to({state:[{t:this.body_5_mc}]},1).to({state:[{t:this.body_6_mc}]},1).to({state:[{t:this.body_7_mc}]},1).to({state:[{t:this.body_8_mc}]},1).to({state:[{t:this.body_9_mc}]},1).to({state:[{t:this.body_10_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_completed_location_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		try
		{
			app.addSoundFunc("message_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_63 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(14).call(this.frame_63).wait(1));

	// animation
	this.instance = new lib.forward_mc();
	this.instance.setTransform(660,700,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({regY:0.1,scaleX:0.53,scaleY:0.53,y:700.1},0).to({regY:0,scaleX:0.95,scaleY:0.95,y:450},14).to({scaleX:0.84,scaleY:0.84,y:500},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(580,620,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(610,650,100,100), new cjs.Rectangle(607.1,629.3,105.7,105.7), new cjs.Rectangle(604.3,608.6,111.4,111.4), new cjs.Rectangle(601.4,587.9,117.1,117.1), new cjs.Rectangle(598.6,567.1,122.9,122.9), new cjs.Rectangle(595.7,546.4,128.5,128.5), new cjs.Rectangle(592.9,525.7,134.3,134.3), new cjs.Rectangle(590,505,140,140), new cjs.Rectangle(587.1,484.2,145.7,145.7), new cjs.Rectangle(584.3,463.5,151.4,151.4), new cjs.Rectangle(581.4,442.8,157.1,157.2), new cjs.Rectangle(578.6,422.1,162.9,162.8), new cjs.Rectangle(575.7,401.4,168.5,168.6), new cjs.Rectangle(572.9,380.7,174.3,174.3), new cjs.Rectangle(570,360,180,180), new cjs.Rectangle(572,372,176,176), new cjs.Rectangle(574.1,384,172,172), new cjs.Rectangle(576,396,168,168), new cjs.Rectangle(578,408,164,164), new cjs.Rectangle(580,420,160,160)];


(lib.CurtainScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.curtain_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,600,1600,600);
p.frameBounds = [rect];


(lib.CopyrightScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// screen
	this.screen_mc = new lib.copyright_2_mc();
	this.screen_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

	// bg
	this.instance = new lib.copyright_1_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
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


(lib.flash_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
		this.parent.parent.removeChild(this.parent);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// animation
	this.instance = new lib.flash_5_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).to({alpha:0.012},8).to({_off:true},1).wait(10));

	// animation
	this.instance_1 = new lib.flash_6_mc();
	this.instance_1.setTransform(-80,-80,0.167,0.167);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:0.602},0).to({regX:0.1,scaleX:0.33,scaleY:0.33,rotation:90},3).to({regX:0,scaleX:0.17,scaleY:0.17,rotation:180,alpha:0.012},10).to({_off:true},1).wait(5));

	// animation
	this.instance_2 = new lib.flash_6_mc();
	this.instance_2.setTransform(80,80,0.167,0.167);
	this.instance_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({alpha:0.602},0).to({regX:0.1,scaleX:0.33,scaleY:0.33,rotation:90,y:80.1},3).to({regX:0,scaleX:0.17,scaleY:0.17,rotation:180,y:80,alpha:0.012},10).to({_off:true},1).wait(5));

	// animation
	this.instance_3 = new lib.flash_6_mc();
	this.instance_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleX:0.33,scaleY:0.33,alpha:0.602},0).to({scaleX:0.87,scaleY:0.87,rotation:90},3).to({scaleX:0.33,scaleY:0.33,rotation:180,alpha:0.012},10).to({_off:true},1).wait(5));

	// animation
	this.instance_4 = new lib.flash_2_mc();
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.801},0).to({scaleX:1,scaleY:1,alpha:0.012},13).to({_off:true},1).wait(5));

	// animation
	this.instance_5 = new lib.flash_4_mc();
	this.instance_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({alpha:1},0).to({alpha:0.012},13).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=null, rect, rect, rect, rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect];


(lib.blinking_light_3_2_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.blinking_light_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect];


(lib.GravityBigExplosionMC = function(mode,startPosition,loop) {
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
		var _particleMaxSpeed_num = 8;
		var _particleFadeSpeed_num = 0.005;
		var _particleTotal_num = 25;
		var _particleRange_num = 500;
		var _gravity_num = 0.5;
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
				var particle_mc = new lib.ParticleBigGravityExplosionMC();
				body_mc.addChild(particle_mc);
				particle_mc.gotoAndStop(0);
				particle_mc.gotoAndStop(Math.floor(Math.random() * particle_mc.totalFrames));
				particle_mc.x = 0;
				particle_mc.y = 0;
				particle_mc.rotation = Math.random() * 360;
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
			/*
			
			*/
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
			if (target_mc.x < target_mc.boundyLeft_num || target_mc.x > target_mc.boundyRight_num || target_mc.y < target_mc.boundyTop_num || target_mc.y > target_mc.boundyBottom_num)
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
	this.body_mc = new lib.gravity_big_explosion_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-32,64,64);
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
	this.instance_2 = new lib.bg_small_buttons_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect, rect];


(lib.prev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-40,140,80);
p.frameBounds = [rect];


(lib.play_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.decor_buttons_4_mc();
	this.instance.setTransform(-35,-90);

	this.instance_1 = new lib.decor_buttons_1_mc();
	this.instance_1.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(160));

	// icon
	this.instance_2 = new lib.play_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({x:5},5).to({x:-5},10).to({x:0},5).wait(81));

	// bg
	this.instance_3 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-140,195,240);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-96,-140,196,240), new cjs.Rectangle(-97,-140,197,240), new cjs.Rectangle(-98,-140,198,240), new cjs.Rectangle(-99,-140,199,240), new cjs.Rectangle(-100,-140,200,240), new cjs.Rectangle(-99,-140,199,240), new cjs.Rectangle(-98,-140,198,240), new cjs.Rectangle(-97,-140,197,240), new cjs.Rectangle(-96,-140,196,240), rect=new cjs.Rectangle(-95,-140,195,240), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.photo_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.decor_buttons_4_mc();
	this.instance.setTransform(36.3,-90,1,1,0,0,180);

	this.instance_1 = new lib.decor_buttons_2_mc();
	this.instance_1.setTransform(60,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// icon
	this.instance_2 = new lib.photo_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.instance_3 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-140,205,240);
p.frameBounds = [rect];


(lib.pause_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pause_0_mc();
	this.instance.setTransform(0,0,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.5,-82.5,165,165);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-82.5,-82.5,165,165), new cjs.Rectangle(-90,-90,180,180)];


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-40,140,80);
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
	this.instance.setTransform(0,0,0.947,0.947);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ap7J8QkHkIgBl0QABl0EHkHQEIkIFzAAQF1AAEHEIQEIEHAAF0QAAF0kIEIQkHEHl1ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, rect, rect, rect];


(lib.free_games_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.free_games_0_mc();
	this.instance.setTransform(0,0,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.6,-91.6,183.3,183.3);
p.frameBounds = [rect, new cjs.Rectangle(-100,-100,200,200), new cjs.Rectangle(-91.6,-91.6,183.3,183.3), new cjs.Rectangle(-100,-100,200,200)];


(lib.credits_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.credits_0_mc();
	this.instance.setTransform(0,0,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.6,-91.6,183.3,183.3);
p.frameBounds = [rect, new cjs.Rectangle(-100,-100,200,200), new cjs.Rectangle(-91.6,-91.6,183.3,183.3), new cjs.Rectangle(-100,-100,200,200)];


(lib.again_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.again_0_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ap7J8QkHkIgBl0QABl0EHkHQEIkIFzAAQF1AAEHEIQEIEHAAF0QAAF0kIEIQkHEHl1ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,201.3);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-90,-90,180,180)];


(lib.AntiBlockingAdsScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.remove_btn = new lib.remove_btn();
	this.remove_btn.setTransform(750,50);
	new cjs.ButtonHelper(this.remove_btn, 0, 1, 2, false, new lib.remove_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.remove_btn).wait(1));

	// text
	this.instance = new lib.antiblocking_ads_2_mc();
	this.instance.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.antiblocking_ads_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
p.frameBounds = [rect];


(lib.RedirectScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.redirect_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,610);
p.frameBounds = [rect];


(lib.PreloaderScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_mc = new lib.preloader_5_mc();
	this.logo_mc.setTransform(400,260);

	this.timeline.addTween(cjs.Tween.get(this.logo_mc).wait(1));

	// play
	this.play_mc = new lib.preloader_12_mc();
	this.play_mc.setTransform(400,500);

	this.timeline.addTween(cjs.Tween.get(this.play_mc).wait(1));

	// indicator
	this.indicator_mc = new lib.preloader_9_mc();
	this.indicator_mc.setTransform(400,500);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// bg
	this.bg_mc = new lib.preloader_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.PauseAppScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// screen
	this.screen_mc = new lib.pause_app_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
p.frameBounds = [rect];


(lib.OrientationLockScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// screen
	this.screen_mc = new lib.orientation_lock_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
p.frameBounds = [rect];


(lib.LanguagesScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.remove_btn = new lib.languages_1_btn();
	this.remove_btn.setTransform(400,520);
	new cjs.ButtonHelper(this.remove_btn, 0, 1, 2, false, new lib.languages_1_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.remove_btn).wait(1));

	// screen
	this.screen_mc = new lib.languages_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

	// reserve
	this.ja = new lib.language_ja_mc();
	this.ja.setTransform(600,1100);

	this.zh = new lib.language_zh_mc();
	this.zh.setTransform(200,950);

	this.it = new lib.language_it_mc();
	this.it.setTransform(400,1100);

	this.id = new lib.language_id_mc();
	this.id.setTransform(200,1100);

	this.hi = new lib.language_hi_mc();
	this.hi.setTransform(600,950);

	this.fr = new lib.language_fr_mc();
	this.fr.setTransform(400,950);

	this.de = new lib.language_de_mc();
	this.de.setTransform(500,800);

	this.ar = new lib.language_ar_mc();
	this.ar.setTransform(300,800);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ar},{t:this.de},{t:this.fr},{t:this.hi},{t:this.id},{t:this.it},{t:this.zh},{t:this.ja}]}).wait(1));

	// bg
	this.instance = new lib.languages_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,1165);
p.frameBounds = [rect];


(lib.popup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.animation_start_level_mc();
	this.instance.setTransform(400,280);

	this.countdown_mc = new lib.countdown_mc();
	this.countdown_mc.setTransform(400,300);

	this.prize_mc = new lib.prize_0_mc();
	this.prize_mc.setTransform(260,320);

	this.instance_1 = new lib.animation_next_round_mc();
	this.instance_1.setTransform(400,280);

	this.instance_2 = new lib.animation_completed_location_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.countdown_mc}]},1).to({state:[{t:this.prize_mc}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.instance_3 = new lib.semitransparent_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(2).to({_off:false},0).wait(1).to({alpha:0.012},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
p.frameBounds = [rect, new cjs.Rectangle(274.7,174.7,250.7,250.7), new cjs.Rectangle(-140,20,800,800), new cjs.Rectangle(-410,-10,1620,620), new cjs.Rectangle(-410,-10,1620,790)];


(lib.mini_hero_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(-15,-145,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.mini_hero_1_2_img();
	this.instance_1.setTransform(-160,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-220,320,440);
p.frameBounds = [rect];


(lib.mini_hero_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(-100,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.mini_hero_1_1_img();
	this.instance_1.setTransform(-180,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-240,360,480);
p.frameBounds = [rect];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{location_1:0,location_2:1,location_3:2});

	// body
	this.frame_1_mc = new lib.frame_locations_1_mc();

	this.frame_2_mc = new lib.frame_locations_2_mc();

	this.frame_3_mc = new lib.frame_locations_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-260,800,520);
p.frameBounds = [rect, rect, rect];


(lib.ghost_for_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(106,22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.ghost_for_main_img();
	this.instance_1.setTransform(-150,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-160,300,320);
p.frameBounds = [rect];


(lib.decor_title_help_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(78,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.decor_title_help_2_img();
	this.instance_1.setTransform(-120,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-130,240,260);
p.frameBounds = [rect];


(lib.decor_title_help_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(60,49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.decor_title_help_1_img();
	this.instance_1.setTransform(-90,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-120,180,240);
p.frameBounds = [rect];


(lib.cards_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(178,177,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(59,177,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(-59,177,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(-178,177,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(178,59,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(59,59,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(-59,59,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(-178,59,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_8 = new lib.card_mc();
	this.instance_8.setTransform(178,-59,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_9 = new lib.card_mc();
	this.instance_9.setTransform(59,-59,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_10 = new lib.card_mc();
	this.instance_10.setTransform(-59,-59,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_11 = new lib.card_mc();
	this.instance_11.setTransform(-178,-59,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_12 = new lib.card_mc();
	this.instance_12.setTransform(178,-177,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_13 = new lib.card_mc();
	this.instance_13.setTransform(59,-177,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_14 = new lib.card_mc();
	this.instance_14.setTransform(-59,-177,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_15 = new lib.card_mc();
	this.instance_15.setTransform(-178,-177,0.687,0.687,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-233,-232,466,464);
p.frameBounds = [rect];


(lib.cards_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(57.9,176,0.687,0.687,0,0,0,-0.2,-0.1);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(-58.1,176,0.687,0.687,0,0,0,-0.2,-0.1);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(175.9,58,0.687,0.687,0,0,0,-0.2,-0.1);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(175.9,-58,0.687,0.687,0,0,0,-0.2,-0.1);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(-176.1,58,0.687,0.687,0,0,0,-0.2,-0.1);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(-176.1,-58,0.687,0.687,0,0,0,-0.2,-0.1);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(57.9,-176,0.687,0.687,0,0,0,-0.2,-0.1);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(-58.1,-176,0.687,0.687,0,0,0,-0.2,-0.1);

	this.instance_8 = new lib.card_mc();
	this.instance_8.setTransform(57.9,58,0.687,0.687,0,0,0,-0.2,-0.1);

	this.instance_9 = new lib.card_mc();
	this.instance_9.setTransform(-58.1,58,0.687,0.687,0,0,0,-0.2,-0.1);

	this.instance_10 = new lib.card_mc();
	this.instance_10.setTransform(57.9,-58,0.687,0.687,0,0,0,-0.2,-0.1);

	this.instance_11 = new lib.card_mc();
	this.instance_11.setTransform(-58.1,-58,0.687,0.687,0,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-231,-231,462,462);
p.frameBounds = [rect];


(lib.cards_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(0,175,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(175,0,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(-175,0,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(0,-175,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(58,58,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(-58,58,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(58,-58,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(-58,-58,0.687,0.687,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-230,460,460);
p.frameBounds = [rect];


(lib.cards_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_turn_mc();
	this.instance.setTransform(59,177,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_1 = new lib.card_turn_mc();
	this.instance_1.setTransform(-59,177,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_2 = new lib.card_turn_mc();
	this.instance_2.setTransform(-178,177,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_3 = new lib.card_turn_mc();
	this.instance_3.setTransform(178,59,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_4 = new lib.card_turn_mc();
	this.instance_4.setTransform(59,59,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_5 = new lib.card_turn_mc();
	this.instance_5.setTransform(-59,59,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_6 = new lib.card_turn_mc();
	this.instance_6.setTransform(-178,59,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_7 = new lib.card_turn_mc();
	this.instance_7.setTransform(178,-59,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_8 = new lib.card_turn_mc();
	this.instance_8.setTransform(59,-59,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_9 = new lib.card_turn_mc();
	this.instance_9.setTransform(-59,-59,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_10 = new lib.card_turn_mc();
	this.instance_10.setTransform(-178,-59,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_11 = new lib.card_turn_mc();
	this.instance_11.setTransform(178,-177,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_12 = new lib.card_turn_mc();
	this.instance_12.setTransform(59,-177,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_13 = new lib.card_turn_mc();
	this.instance_13.setTransform(-59,-177,0.687,0.687,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-233,-232,466,464);
p.frameBounds = [rect];


(lib.cards_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_turn_mc();
	this.instance.setTransform(154.9,154.9,1,1,0,0,0,-0.1,-0.1);

	this.instance_1 = new lib.card_turn_mc();
	this.instance_1.setTransform(-0.1,154.9,0.812,0.812,0,0,0,-0.1,-0.1);

	this.instance_2 = new lib.card_turn_mc();
	this.instance_2.setTransform(-155.1,154.9,1,1,0,0,0,-0.1,-0.1);

	this.instance_3 = new lib.card_turn_mc();
	this.instance_3.setTransform(154.9,-0.1,0.812,0.812,0,0,0,-0.1,-0.1);

	this.instance_4 = new lib.card_turn_mc();
	this.instance_4.setTransform(-155.1,-0.1,0.812,0.812,0,0,0,-0.1,-0.1);

	this.instance_5 = new lib.card_turn_mc();
	this.instance_5.setTransform(154.9,-155.1,1,1,0,0,0,-0.1,-0.1);

	this.instance_6 = new lib.card_turn_mc();
	this.instance_6.setTransform(-0.1,-155.1,0.812,0.812,0,0,0,-0.1,-0.1);

	this.instance_7 = new lib.card_turn_mc();
	this.instance_7.setTransform(-155.2,-155.1,1,1,0,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-235,-235,470,470);
p.frameBounds = [rect];


(lib.cards_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(154.9,154.9,0.912,0.912,0,0,0,-0.1,-0.1);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(-0.1,154.9,0.912,0.912,0,0,0,-0.1,-0.1);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(-155.1,154.9,0.912,0.912,0,0,0,-0.1,-0.1);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(154.9,-0.1,0.912,0.912,0,0,0,-0.1,-0.1);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(-155.1,-0.1,0.912,0.912,0,0,0,-0.1,-0.1);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(154.9,-155.1,0.912,0.912,0,0,0,-0.1,-0.1);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(-0.1,-155.1,0.912,0.912,0,0,0,-0.1,-0.1);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(-155.1,-155.1,0.912,0.912,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-228,-228,456,456);
p.frameBounds = [rect];


(lib.cards_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(172,174,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(56,174,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(-60,174,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(172,58,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(56,58,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(-60,58,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(55,-58,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(-61,-58,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_8 = new lib.card_mc();
	this.instance_8.setTransform(-177,-58,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_9 = new lib.card_mc();
	this.instance_9.setTransform(55,-174,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_10 = new lib.card_mc();
	this.instance_10.setTransform(-61,-174,0.687,0.687,0,0,0,-0.1,-0.1);

	this.instance_11 = new lib.card_mc();
	this.instance_11.setTransform(-177,-174,0.687,0.687,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-232,-229,459,458);
p.frameBounds = [rect];


(lib.cards_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(171,171,0.688,0.688);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(53,171,0.688,0.688);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(171,53,0.688,0.688);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(53,53,0.688,0.688);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(-53,-53,0.688,0.688);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(-171,-53,0.688,0.688);

	this.instance_6 = new lib.card_mc();
	this.instance_6.setTransform(-53,-171,0.688,0.688);

	this.instance_7 = new lib.card_mc();
	this.instance_7.setTransform(-171,-171,0.688,0.688);

	this.instance_8 = new lib.card_mc();
	this.instance_8.setTransform(-110,110,1,1,-45);

	this.instance_9 = new lib.card_mc();
	this.instance_9.setTransform(110,-110,1,1,-45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-226,-226,452,452);
p.frameBounds = [rect];


(lib.cards_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(-0.1,-155.1,0.912,0.912,0,0,0,-0.1,-0.1);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(79.9,-0.1,0.912,0.912,0,0,0,-0.1,-0.1);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(-80.1,-0.1,0.912,0.912,0,0,0,-0.1,-0.1);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(154.9,154.9,0.912,0.912,0,0,0,-0.1,-0.1);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(-0.1,154.9,0.912,0.912,0,0,0,-0.1,-0.1);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(-155.1,154.9,0.912,0.912,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-228,-228,456,456);
p.frameBounds = [rect];


(lib.cards_0_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(-0.1,154.9,0.912,0.912,0,0,0,-0.1,-0.1);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(79.9,-0.1,0.912,0.912,0,0,0,-0.1,-0.1);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(-80.1,-0.1,0.912,0.912,0,0,0,-0.1,-0.1);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(154.9,-155.1,0.912,0.912,0,0,0,-0.1,-0.1);

	this.instance_4 = new lib.card_mc();
	this.instance_4.setTransform(-0.1,-155.1,0.912,0.912,0,0,0,-0.1,-0.1);

	this.instance_5 = new lib.card_mc();
	this.instance_5.setTransform(-155.1,-155.1,0.912,0.912,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-228,-228,456,456);
p.frameBounds = [rect];


(lib.cards_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(-72,72,0.75,0.75,0,0,0,-0.1,-0.1);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(72,-72,0.75,0.75,0,0,0,-0.1,-0.1);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(69.9,69.9,0.937,0.937,0,0,0,-0.1,-0.1);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(-70.1,-70.1,0.937,0.937,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.cards_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cards
	this.instance = new lib.card_mc();
	this.instance.setTransform(75,75,0.912,0.912);

	this.instance_1 = new lib.card_mc();
	this.instance_1.setTransform(-75,75,0.912,0.912);

	this.instance_2 = new lib.card_mc();
	this.instance_2.setTransform(75,-75,0.912,0.912);

	this.instance_3 = new lib.card_mc();
	this.instance_3.setTransform(-75.1,-75.1,0.912,0.912,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-148,-148,296,296);
p.frameBounds = [rect];


(lib.background_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(469,36,0.667,0.667);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(320,43,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_2 = new lib.background_4_img();
	this.instance_2.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(-134.9,477,1,1,0,0,0,0.1,0);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(727.1,495,1,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_2 = new lib.background_3_img();
	this.instance_2.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(744.1,267,1,1,0,0,0,0.1,0);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(804.1,397,1,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_2 = new lib.background_2_img();
	this.instance_2.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(400.1,239,1,1,0,0,0,0.1,0);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(467.1,402,1,1,0,0,0,0.1,0);
	this.instance_1.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_2 = new lib.background_1_img();
	this.instance_2.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.anim_ghost_for_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.ghost_for_main_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,y:-2},59).to({scaleX:1,scaleY:0.99,y:2},60).to({scaleY:1,y:0},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-160,300,320);
p.frameBounds = [rect, new cjs.Rectangle(-149.9,-160,300,320), new cjs.Rectangle(-149.9,-160,299.9,320), rect=new cjs.Rectangle(-149.8,-160.1,299.8,320), rect, new cjs.Rectangle(-149.8,-160.1,299.7,320), new cjs.Rectangle(-149.7,-160.2,299.6,320), rect=new cjs.Rectangle(-149.7,-160.2,299.5,320), rect, new cjs.Rectangle(-149.6,-160.3,299.4,320), rect=new cjs.Rectangle(-149.6,-160.3,299.3,320), rect, new cjs.Rectangle(-149.5,-160.4,299.2,320), rect=new cjs.Rectangle(-149.5,-160.4,299.1,320), rect, new cjs.Rectangle(-149.4,-160.5,299,320), new cjs.Rectangle(-149.4,-160.5,298.9,320), new cjs.Rectangle(-149.4,-160.6,298.9,320), new cjs.Rectangle(-149.3,-160.6,298.8,320), new cjs.Rectangle(-149.3,-160.6,298.7,320), new cjs.Rectangle(-149.3,-160.7,298.7,320), new cjs.Rectangle(-149.2,-160.7,298.6,320), new cjs.Rectangle(-149.2,-160.7,298.5,320), new cjs.Rectangle(-149.2,-160.8,298.5,320), new cjs.Rectangle(-149.1,-160.8,298.4,320), new cjs.Rectangle(-149.1,-160.8,298.3,320), new cjs.Rectangle(-149.1,-160.9,298.3,320), new cjs.Rectangle(-149,-160.9,298.2,320), new cjs.Rectangle(-149,-160.9,298.1,320), new cjs.Rectangle(-149,-161,298.1,320), new cjs.Rectangle(-148.9,-161,298,320), new cjs.Rectangle(-148.9,-161,297.9,320), new cjs.Rectangle(-148.9,-161.1,297.9,320), new cjs.Rectangle(-148.8,-161.1,297.8,320), new cjs.Rectangle(-148.8,-161.1,297.7,320), new cjs.Rectangle(-148.8,-161.2,297.7,320), new cjs.Rectangle(-148.7,-161.2,297.6,320), new cjs.Rectangle(-148.7,-161.2,297.5,320), new cjs.Rectangle(-148.7,-161.3,297.4,320), new cjs.Rectangle(-148.6,-161.3,297.4,320), new cjs.Rectangle(-148.6,-161.3,297.3,320), new cjs.Rectangle(-148.6,-161.4,297.2,320), new cjs.Rectangle(-148.5,-161.4,297.2,320), new cjs.Rectangle(-148.5,-161.4,297.1,320), new cjs.Rectangle(-148.5,-161.5,297,320), new cjs.Rectangle(-148.4,-161.5,297,320), new cjs.Rectangle(-148.4,-161.5,296.9,320), new cjs.Rectangle(-148.4,-161.6,296.8,320), new cjs.Rectangle(-148.3,-161.6,296.8,320), new cjs.Rectangle(-148.3,-161.6,296.7,320), new cjs.Rectangle(-148.3,-161.7,296.6,320), new cjs.Rectangle(-148.2,-161.7,296.6,320), new cjs.Rectangle(-148.2,-161.7,296.5,320), new cjs.Rectangle(-148.2,-161.8,296.4,320), new cjs.Rectangle(-148.1,-161.8,296.4,320), new cjs.Rectangle(-148.1,-161.8,296.3,320), new cjs.Rectangle(-148.1,-161.9,296.2,320), new cjs.Rectangle(-148,-161.9,296.2,320), new cjs.Rectangle(-148,-161.9,296.1,320), new cjs.Rectangle(-148,-162,296,320), new cjs.Rectangle(-148,-161.9,296.1,320), new cjs.Rectangle(-148,-161.7,296.1,319.9), new cjs.Rectangle(-148,-161.6,296.2,319.8), new cjs.Rectangle(-148.1,-161.6,296.3,319.8), new cjs.Rectangle(-148.1,-161.4,296.4,319.7), new cjs.Rectangle(-148.1,-161.3,296.4,319.6), new cjs.Rectangle(-148.2,-161.3,296.5,319.6), new cjs.Rectangle(-148.2,-161.1,296.6,319.5), new cjs.Rectangle(-148.2,-161,296.6,319.4), new cjs.Rectangle(-148.3,-160.9,296.7,319.4), new cjs.Rectangle(-148.3,-160.8,296.7,319.3), new cjs.Rectangle(-148.3,-160.7,296.8,319.2), new cjs.Rectangle(-148.4,-160.6,296.9,319.2), new cjs.Rectangle(-148.4,-160.5,296.9,319.1), new cjs.Rectangle(-148.4,-160.4,297,319), new cjs.Rectangle(-148.5,-160.3,297.1,319), new cjs.Rectangle(-148.5,-160.2,297.2,318.9), new cjs.Rectangle(-148.5,-160.1,297.2,318.8), new cjs.Rectangle(-148.6,-160,297.3,318.8), new cjs.Rectangle(-148.6,-159.9,297.4,318.7), new cjs.Rectangle(-148.6,-159.8,297.4,318.6), new cjs.Rectangle(-148.7,-159.7,297.5,318.6), new cjs.Rectangle(-148.7,-159.6,297.5,318.5), new cjs.Rectangle(-148.7,-159.5,297.6,318.4), new cjs.Rectangle(-148.8,-159.4,297.7,318.4), new cjs.Rectangle(-148.8,-159.3,297.7,318.3), new cjs.Rectangle(-148.8,-159.2,297.8,318.2), new cjs.Rectangle(-148.9,-159.1,297.9,318.2), new cjs.Rectangle(-148.9,-159,297.9,318.1), new cjs.Rectangle(-148.9,-159,298,318), new cjs.Rectangle(-149,-158.9,298.1,318), new cjs.Rectangle(-149,-158.8,298.1,317.9), new cjs.Rectangle(-149,-158.7,298.2,317.8), new cjs.Rectangle(-149.1,-158.6,298.3,317.8), new cjs.Rectangle(-149.1,-158.5,298.4,317.7), new cjs.Rectangle(-149.1,-158.4,298.4,317.6), new cjs.Rectangle(-149.2,-158.3,298.5,317.6), new cjs.Rectangle(-149.2,-158.2,298.6,317.5), new cjs.Rectangle(-149.2,-158.1,298.6,317.4), new cjs.Rectangle(-149.3,-158,298.7,317.4), new cjs.Rectangle(-149.3,-157.9,298.7,317.3), new cjs.Rectangle(-149.3,-157.8,298.8,317.2), new cjs.Rectangle(-149.4,-157.7,298.9,317.2), new cjs.Rectangle(-149.4,-157.6,298.9,317), new cjs.Rectangle(-149.4,-157.5,299,317), new cjs.Rectangle(-149.5,-157.4,299.1,317), new cjs.Rectangle(-149.5,-157.3,299.2,316.9), new cjs.Rectangle(-149.5,-157.2,299.2,316.8), new cjs.Rectangle(-149.6,-157.1,299.3,316.8), new cjs.Rectangle(-149.6,-156.9,299.4,316.7), new cjs.Rectangle(-149.6,-156.9,299.4,316.6), new cjs.Rectangle(-149.7,-156.8,299.5,316.6), new cjs.Rectangle(-149.7,-156.6,299.5,316.5), new cjs.Rectangle(-149.7,-156.6,299.6,316.4), new cjs.Rectangle(-149.8,-156.5,299.7,316.4), new cjs.Rectangle(-149.8,-156.3,299.8,316.3), new cjs.Rectangle(-149.8,-156.3,299.8,316.2), new cjs.Rectangle(-149.9,-156.2,299.9,316.2), new cjs.Rectangle(-149.9,-156,299.9,316.1), new cjs.Rectangle(-150,-156,300,316), new cjs.Rectangle(-150,-156,300,316.1), new cjs.Rectangle(-150,-156.1,300,316.1), new cjs.Rectangle(-150,-156.1,300,316.2), new cjs.Rectangle(-150,-156.2,300,316.3), rect=new cjs.Rectangle(-150,-156.3,300,316.4), rect, new cjs.Rectangle(-150,-156.4,300,316.5), rect=new cjs.Rectangle(-150,-156.5,300,316.6), rect, new cjs.Rectangle(-150,-156.6,300,316.7), rect=new cjs.Rectangle(-150,-156.7,300,316.8), rect, new cjs.Rectangle(-150,-156.8,300,316.9), rect=new cjs.Rectangle(-150,-156.9,300,317), rect, new cjs.Rectangle(-150,-157,300,317.1), rect=new cjs.Rectangle(-150,-157.1,300,317.2), rect, new cjs.Rectangle(-150,-157.2,300,317.3), rect=new cjs.Rectangle(-150,-157.3,300,317.4), rect, new cjs.Rectangle(-150,-157.4,300,317.5), rect=new cjs.Rectangle(-150,-157.5,300,317.6), rect, new cjs.Rectangle(-150,-157.6,300,317.7), rect=new cjs.Rectangle(-150,-157.7,300,317.8), rect, new cjs.Rectangle(-150,-157.8,300,317.9), rect=new cjs.Rectangle(-150,-157.9,300,318), rect, new cjs.Rectangle(-150,-158,300,318.1), new cjs.Rectangle(-150,-158.1,300,318.2), new cjs.Rectangle(-150,-158.2,300,318.2), new cjs.Rectangle(-150,-158.2,300,318.3), new cjs.Rectangle(-150,-158.3,300,318.4), new cjs.Rectangle(-150,-158.4,300,318.4), new cjs.Rectangle(-150,-158.4,300,318.5), new cjs.Rectangle(-150,-158.5,300,318.6), new cjs.Rectangle(-150,-158.6,300,318.6), new cjs.Rectangle(-150,-158.6,300,318.7), new cjs.Rectangle(-150,-158.7,300,318.8), new cjs.Rectangle(-150,-158.8,300,318.8), new cjs.Rectangle(-150,-158.8,300,318.9), new cjs.Rectangle(-150,-158.9,300,319), new cjs.Rectangle(-150,-159,300,319), new cjs.Rectangle(-150,-159,300,319.1), new cjs.Rectangle(-150,-159.1,300,319.2), new cjs.Rectangle(-150,-159.2,300,319.2), new cjs.Rectangle(-150,-159.2,300,319.3), new cjs.Rectangle(-150,-159.3,300,319.4), new cjs.Rectangle(-150,-159.4,300,319.4), rect=new cjs.Rectangle(-150,-159.5,300,319.5), rect, new cjs.Rectangle(-150,-159.6,300,319.6), new cjs.Rectangle(-150,-159.7,300,319.7), new cjs.Rectangle(-150,-159.7,300,319.8), new cjs.Rectangle(-150,-159.8,300,319.8), rect=new cjs.Rectangle(-150,-159.9,300,319.9), rect, new cjs.Rectangle(-150,-160,300,320)];


(lib.anim_decor_title_help_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.decor_title_help_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:5},34).to({y:0},35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-130,240,260);
p.frameBounds = [rect, new cjs.Rectangle(-120,-129.8,240,260), new cjs.Rectangle(-120,-129.7,240,260), new cjs.Rectangle(-120,-129.5,240,260), new cjs.Rectangle(-120,-129.4,240,260), new cjs.Rectangle(-120,-129.2,240,260), new cjs.Rectangle(-120,-129.1,240,260), new cjs.Rectangle(-120,-128.9,240,260), new cjs.Rectangle(-120,-128.8,240,260), new cjs.Rectangle(-120,-128.7,240,260), new cjs.Rectangle(-120,-128.5,240,260), new cjs.Rectangle(-120,-128.4,240,260), new cjs.Rectangle(-120,-128.2,240,260), new cjs.Rectangle(-120,-128.1,240,260), new cjs.Rectangle(-120,-127.9,240,260), new cjs.Rectangle(-120,-127.8,240,260), new cjs.Rectangle(-120,-127.6,240,260), new cjs.Rectangle(-120,-127.5,240,260), new cjs.Rectangle(-120,-127.3,240,260), new cjs.Rectangle(-120,-127.2,240,260), new cjs.Rectangle(-120,-127,240,260), new cjs.Rectangle(-120,-126.9,240,260), new cjs.Rectangle(-120,-126.7,240,260), new cjs.Rectangle(-120,-126.6,240,260), new cjs.Rectangle(-120,-126.4,240,260), new cjs.Rectangle(-120,-126.3,240,260), new cjs.Rectangle(-120,-126.2,240,260), new cjs.Rectangle(-120,-126,240,260), new cjs.Rectangle(-120,-125.9,240,260), new cjs.Rectangle(-120,-125.7,240,260), new cjs.Rectangle(-120,-125.6,240,260), new cjs.Rectangle(-120,-125.4,240,260), new cjs.Rectangle(-120,-125.3,240,260), new cjs.Rectangle(-120,-125.1,240,260), new cjs.Rectangle(-120,-125,240,260), new cjs.Rectangle(-120,-125.1,240,260), new cjs.Rectangle(-120,-125.3,240,260), new cjs.Rectangle(-120,-125.4,240,260), new cjs.Rectangle(-120,-125.5,240,260), new cjs.Rectangle(-120,-125.7,240,260), new cjs.Rectangle(-120,-125.8,240,260), new cjs.Rectangle(-120,-126,240,260), new cjs.Rectangle(-120,-126.1,240,260), new cjs.Rectangle(-120,-126.3,240,260), new cjs.Rectangle(-120,-126.4,240,260), new cjs.Rectangle(-120,-126.5,240,260), new cjs.Rectangle(-120,-126.7,240,260), new cjs.Rectangle(-120,-126.8,240,260), new cjs.Rectangle(-120,-127,240,260), new cjs.Rectangle(-120,-127.1,240,260), new cjs.Rectangle(-120,-127.3,240,260), new cjs.Rectangle(-120,-127.4,240,260), new cjs.Rectangle(-120,-127.5,240,260), new cjs.Rectangle(-120,-127.7,240,260), new cjs.Rectangle(-120,-127.8,240,260), new cjs.Rectangle(-120,-128,240,260), new cjs.Rectangle(-120,-128.1,240,260), new cjs.Rectangle(-120,-128.3,240,260), new cjs.Rectangle(-120,-128.4,240,260), new cjs.Rectangle(-120,-128.5,240,260), new cjs.Rectangle(-120,-128.7,240,260), new cjs.Rectangle(-120,-128.8,240,260), new cjs.Rectangle(-120,-129,240,260), new cjs.Rectangle(-120,-129.1,240,260), new cjs.Rectangle(-120,-129.3,240,260), new cjs.Rectangle(-120,-129.4,240,260), new cjs.Rectangle(-120,-129.5,240,260), new cjs.Rectangle(-120,-129.7,240,260), new cjs.Rectangle(-120,-129.8,240,260), new cjs.Rectangle(-120,-130,240,260)];


(lib.anim_decor_title_help_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.decor_title_help_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-4},39).to({y:0},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-120,180,240);
p.frameBounds = [rect, new cjs.Rectangle(-90,-120.1,180,240), new cjs.Rectangle(-90,-120.2,180,240), new cjs.Rectangle(-90,-120.3,180,240), new cjs.Rectangle(-90,-120.4,180,240), new cjs.Rectangle(-90,-120.5,180,240), new cjs.Rectangle(-90,-120.6,180,240), new cjs.Rectangle(-90,-120.7,180,240), new cjs.Rectangle(-90,-120.8,180,240), new cjs.Rectangle(-90,-120.9,180,240), new cjs.Rectangle(-90,-121,180,240), new cjs.Rectangle(-90,-121.1,180,240), new cjs.Rectangle(-90,-121.2,180,240), new cjs.Rectangle(-90,-121.3,180,240), new cjs.Rectangle(-90,-121.4,180,240), new cjs.Rectangle(-90,-121.5,180,240), new cjs.Rectangle(-90,-121.6,180,240), new cjs.Rectangle(-90,-121.7,180,240), new cjs.Rectangle(-90,-121.8,180,240), new cjs.Rectangle(-90,-121.9,180,240), new cjs.Rectangle(-90,-122,180,240), new cjs.Rectangle(-90,-122.1,180,240), new cjs.Rectangle(-90,-122.2,180,240), new cjs.Rectangle(-90,-122.3,180,240), new cjs.Rectangle(-90,-122.4,180,240), new cjs.Rectangle(-90,-122.5,180,240), new cjs.Rectangle(-90,-122.6,180,240), new cjs.Rectangle(-90,-122.7,180,240), new cjs.Rectangle(-90,-122.8,180,240), new cjs.Rectangle(-90,-122.9,180,240), new cjs.Rectangle(-90,-123.1,180,240), new cjs.Rectangle(-90,-123.2,180,240), new cjs.Rectangle(-90,-123.3,180,240), new cjs.Rectangle(-90,-123.4,180,240), new cjs.Rectangle(-90,-123.5,180,240), new cjs.Rectangle(-90,-123.6,180,240), new cjs.Rectangle(-90,-123.7,180,240), new cjs.Rectangle(-90,-123.8,180,240), new cjs.Rectangle(-90,-123.9,180,240), new cjs.Rectangle(-90,-124,180,240), new cjs.Rectangle(-90,-123.9,180,240), new cjs.Rectangle(-90,-123.8,180,240), new cjs.Rectangle(-90,-123.7,180,240), new cjs.Rectangle(-90,-123.6,180,240), new cjs.Rectangle(-90,-123.5,180,240), new cjs.Rectangle(-90,-123.4,180,240), new cjs.Rectangle(-90,-123.3,180,240), new cjs.Rectangle(-90,-123.2,180,240), new cjs.Rectangle(-90,-123.1,180,240), new cjs.Rectangle(-90,-123,180,240), new cjs.Rectangle(-90,-122.9,180,240), new cjs.Rectangle(-90,-122.8,180,240), new cjs.Rectangle(-90,-122.7,180,240), new cjs.Rectangle(-90,-122.6,180,240), new cjs.Rectangle(-90,-122.5,180,240), new cjs.Rectangle(-90,-122.4,180,240), new cjs.Rectangle(-90,-122.3,180,240), new cjs.Rectangle(-90,-122.2,180,240), new cjs.Rectangle(-90,-122.1,180,240), new cjs.Rectangle(-90,-122,180,240), new cjs.Rectangle(-90,-121.9,180,240), new cjs.Rectangle(-90,-121.8,180,240), new cjs.Rectangle(-90,-121.7,180,240), new cjs.Rectangle(-90,-121.6,180,240), new cjs.Rectangle(-90,-121.5,180,240), new cjs.Rectangle(-90,-121.4,180,240), new cjs.Rectangle(-90,-121.3,180,240), new cjs.Rectangle(-90,-121.2,180,240), new cjs.Rectangle(-90,-121.1,180,240), new cjs.Rectangle(-90,-121,180,240), new cjs.Rectangle(-90,-120.9,180,240), new cjs.Rectangle(-90,-120.8,180,240), new cjs.Rectangle(-90,-120.7,180,240), new cjs.Rectangle(-90,-120.6,180,240), new cjs.Rectangle(-90,-120.5,180,240), new cjs.Rectangle(-90,-120.4,180,240), new cjs.Rectangle(-90,-120.3,180,240), new cjs.Rectangle(-90,-120.2,180,240), new cjs.Rectangle(-90,-120.1,180,240), new cjs.Rectangle(-90,-120,180,240)];


(lib.FlashAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		@author edapskov
		@copyright 2019 edapskov v 1.0
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.flash_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.Bubble_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_3_mc();
	this.instance.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.bubble_1_2_mc = function(mode,startPosition,loop) {
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
				var bubble_mc = new lib.Bubble_2();
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
	this.instance = new lib.Bubble_2();
	this.instance.setTransform(600,650);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// container
	this.container_mc = new lib.bubble_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,668);
p.frameBounds = [rect];


(lib.play_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_0_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ap7J8QkHkIgBl0QABl0EHkHQEIkIFzAAQF1AAEHEIQEIEHAAF0QAAF0kIEIQkHEHl1ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-140,195,240);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-90,-90,180,180)];


(lib.photo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_0_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ap7J8QkHkIgBl0QABl0EHkHQEIkIFzAAQF1AAEHEIQEIEHAAF0QAAF0kIEIQkHEHl1ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-140,205,240);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-90,-90,180,180)];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":109,"end":179});

	// timeline functions:
	this.frame_49 = function() {
		try
		{
			app.addSoundFunc("air_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_149 = function() {
		try
		{
			app.addSoundFunc("air_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(100).call(this.frame_149).wait(31));

	// play_btn
	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(700,750,0.895,0.895);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).wait(79).to({y:450},10).to({y:500},5).wait(15).to({regX:0.1,regY:0.1,scaleX:0.67,scaleY:0.67,x:700.1,y:500.1},5).to({regX:0,regY:0,scaleX:0.9,scaleY:0.9,x:700,y:500},10).to({y:480},5).to({y:750},10).wait(41));

	// btn
	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(400.5,820.5,0.75,0.75,0,0,0,0.7,0.7);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,920);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,50,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(40.1,50.1,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(400,1050,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(70,550,0.727,0.727);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.social_network_mc}]}).to({state:[{t:this.logo_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.social_network_mc}]},109).wait(71));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(0,400);
	this.instance.alpha = 0.398;
	this.instance.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(180));

	// title
	this.instance_1 = new lib.title_mc();
	this.instance_1.setTransform(180,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({y:380},15).to({y:320},5).wait(141));

	// ghost
	this.instance_2 = new lib.anim_ghost_for_main_mc();
	this.instance_2.setTransform(470,900);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({y:400},15).to({y:480},5).wait(55).to({x:1400},15).wait(31));

	// decor
	this.bubble_comp = new lib.bubble_1_2_mc();
	this.bubble_comp.setTransform(-201,-1,1,1,0,0,0,-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(180));

	// heroes
	this.instance_3 = new lib.anim_heroes_for_main_mc();
	this.instance_3.setTransform(1500,310);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({x:460},15).to({x:540},5).wait(90).to({x:500},5).to({x:1500,y:600},15).wait(11));

	// bg
	this.instance_4 = new lib.background_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(180));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-370,2145,1492.7);
p.frameBounds = [rect, new cjs.Rectangle(-400,-370,2145,1492.8), new cjs.Rectangle(-400,-370,2145,1492.7), new cjs.Rectangle(-400,-370,2145,1492.8), new cjs.Rectangle(-400,-370,2145,1492.7), new cjs.Rectangle(-400,-370,2145,1492.8), new cjs.Rectangle(-400,-370,2145,1492.7), new cjs.Rectangle(-400,-370,2145,1492.8), new cjs.Rectangle(-400,-370,2145,1492.7), new cjs.Rectangle(-400,-370,2145,1492.8), new cjs.Rectangle(-400,-370,2145,1492.7), new cjs.Rectangle(-400,-370,2145,1492.8), new cjs.Rectangle(-400,-370,2145,1492.7), new cjs.Rectangle(-400,-370,2145,1492.8), new cjs.Rectangle(-400,-370,2145,1492.7), new cjs.Rectangle(-400,-370,2145,1492.8), new cjs.Rectangle(-400,-370,2145,1492.7), new cjs.Rectangle(-400,-370,2145,1492.8), new cjs.Rectangle(-400,-370,2145,1492.7), new cjs.Rectangle(-400,-370,2145,1492.8), new cjs.Rectangle(-400,-331.3,2145,1454.1), new cjs.Rectangle(-400,-292.6,2145,1415.4), new cjs.Rectangle(-400,-254,2145,1376.7), new cjs.Rectangle(-400,-215.3,2145,1338.1), new cjs.Rectangle(-400,-280.8,2145,1403.6), new cjs.Rectangle(-400,-138,2145,1260.8), new cjs.Rectangle(-400,-99.3,2145,1222.1), new cjs.Rectangle(-400,-90,2145,1212.8), new cjs.Rectangle(-400,-280.8,2145,1403.6), new cjs.Rectangle(-400,-90,2145,1212.8), new cjs.Rectangle(-400,-90,2145,1212.7), new cjs.Rectangle(-400,-90,2145,1212.8), new cjs.Rectangle(-400,-280.8,2145,1403.6), new cjs.Rectangle(-400,-90,2145,1212.8), new cjs.Rectangle(-400,-90,2145,1212.7), new cjs.Rectangle(-400,-90,2145,1212.8), new cjs.Rectangle(-400,-280.8,2145,1403.6), new cjs.Rectangle(-400,-90,2145,1212.8), new cjs.Rectangle(-400,-90,2145,1212.7), new cjs.Rectangle(-400,-90,2145,1212.8), new cjs.Rectangle(-400,-280.8,2075.7,1403.6), new cjs.Rectangle(-400,-90,2006.4,1212.8), new cjs.Rectangle(-400,-90,1937,1212.7), new cjs.Rectangle(-400,-90,1867.7,1212.8), new cjs.Rectangle(-400,-280.8,1798.4,1403.6), new cjs.Rectangle(-400,-90,1729,1212.8), new cjs.Rectangle(-400,-90,1659.7,1212.7), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-280.8,1600,1403.6), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-90,1600,1212.7), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-280.8,1600,1403.6), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-90,1600,1212.7), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-280.8,1600,1403.6), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-90,1600,1212.7), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-280.8,1600,1403.6), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-90,1600,1212.7), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-280.8,1600,1403.6), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-90,1600,1212.7), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-280.8,1600,1403.6), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-90,1600,1212.7), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-280.8,1600,1403.6), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-90,1600,1212.7), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-280.8,1600,1403.6), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-90,1600,1212.7), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-280.8,1600,1403.6), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-90,1600,1212.7), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-280.8,1600,1403.6), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-90,1600,1212.7), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-280.8,1600,1403.6), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-90,1600,1212.7), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-280.8,1600,1403.6), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-90,1600,1212.7), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-280.8,1600,1403.6), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-90,1600,1212.7), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-280.8,1600,1403.6), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-90,1600,1212.7), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-280.8,1600,1403.6), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-90,1600,1212.7), new cjs.Rectangle(-400,-90,1600,1212.8), rect=new cjs.Rectangle(-400,-280.8,1600,1403.6), rect, new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-90,1600,1212.7), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-280.8,1600,1403.6), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-90,1600,1212.7), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-280.8,1600,1403.6), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-90,1600,1212.7), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-280.8,1600,1403.6), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-90,1600,1212.7), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-280.8,1600,1403.6), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-90,1600,1212.7), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-280.8,1600,1403.6), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-90,1600,1212.7), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-280.8,1600,1403.6), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-90,1600,1212.7), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-280.8,1600,1403.6), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-90,1600,1212.7), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-280.8,1600,1403.6), new cjs.Rectangle(-400,-90,1600,1212.8), new cjs.Rectangle(-400,-90,1600,1212.7), new cjs.Rectangle(-400,-90,1640,1212.8), new cjs.Rectangle(-400,-280.8,1702,1403.6), new cjs.Rectangle(-400,-90,1764,1212.8), new cjs.Rectangle(-400,-90,1826,1212.7), new cjs.Rectangle(-400,-90,1888,1212.8), new cjs.Rectangle(-400,-280.8,1950,1403.6), new cjs.Rectangle(-400,-90,1950,1212.8), new cjs.Rectangle(-400,-90,1950,1212.7), new cjs.Rectangle(-400,-90,1950,1212.8), new cjs.Rectangle(-400,-280.8,1950,1403.6), new cjs.Rectangle(-400,-90,1950,1212.8), new cjs.Rectangle(-400,-90,1950,1212.7), new cjs.Rectangle(-400,-90,1950,1212.8), new cjs.Rectangle(-400,-280.8,1950,1403.6), new cjs.Rectangle(-400,-90,1950,1212.8), new cjs.Rectangle(-400,-90,1950,1212.7), new cjs.Rectangle(-400,-90,1950,1212.8), new cjs.Rectangle(-400,-280.8,1950,1403.6), new cjs.Rectangle(-400,-90,1950,1212.8), new cjs.Rectangle(-400,-90,1950,1212.7), new cjs.Rectangle(-400,-90,1950,1212.8), new cjs.Rectangle(-400,-280.8,1950,1403.6), new cjs.Rectangle(-400,-90,1950,1212.8), new cjs.Rectangle(-400,-90,2011.7,1212.7), new cjs.Rectangle(-400,-90,2078.4,1212.8), new cjs.Rectangle(-400,-280.8,2145,1403.6), new cjs.Rectangle(-400,-90,2145,1212.8), new cjs.Rectangle(-400,-90,2145,1212.7), new cjs.Rectangle(-400,-90,2145,1212.8), new cjs.Rectangle(-400,-280.8,2145,1403.6), new cjs.Rectangle(-400,-90,2145,1212.8), new cjs.Rectangle(-400,-90,2145,1212.7), new cjs.Rectangle(-400,-90,2145,1212.8), new cjs.Rectangle(-400,-280.8,2145,1403.6), new cjs.Rectangle(-400,-90,2145,1212.8), new cjs.Rectangle(-400,-90,2145,1212.7)];


(lib.mini_hero_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mini_hero_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,y:-4},79).to({scaleX:1.02,y:4},80).to({scaleX:1,y:0},80).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-220,320,440);
p.frameBounds = [rect, new cjs.Rectangle(-159.9,-220,320,440), rect=new cjs.Rectangle(-159.9,-220.1,319.9,440), rect, rect=new cjs.Rectangle(-159.8,-220.2,319.8,440), rect, rect=new cjs.Rectangle(-159.8,-220.3,319.7,440), rect, rect=new cjs.Rectangle(-159.7,-220.4,319.6,440), rect, rect=new cjs.Rectangle(-159.7,-220.5,319.5,440), rect, rect=new cjs.Rectangle(-159.6,-220.6,319.4,440), rect, rect=new cjs.Rectangle(-159.6,-220.7,319.3,440), rect, rect=new cjs.Rectangle(-159.5,-220.8,319.2,440), rect, rect=new cjs.Rectangle(-159.5,-220.9,319.1,440), rect, rect=new cjs.Rectangle(-159.4,-221,319,440), rect, rect=new cjs.Rectangle(-159.4,-221.1,318.9,440), rect, rect=new cjs.Rectangle(-159.3,-221.2,318.8,440), rect, rect=new cjs.Rectangle(-159.3,-221.3,318.7,440), rect, rect=new cjs.Rectangle(-159.2,-221.4,318.6,440), rect, rect=new cjs.Rectangle(-159.2,-221.5,318.5,440), rect, rect=new cjs.Rectangle(-159.1,-221.6,318.4,440), rect, rect=new cjs.Rectangle(-159.1,-221.7,318.3,440), rect, rect=new cjs.Rectangle(-159,-221.8,318.2,440), rect, rect=new cjs.Rectangle(-159,-221.9,318.1,440), rect, new cjs.Rectangle(-158.9,-222,318,440), rect=new cjs.Rectangle(-158.9,-222.1,317.9,440), rect, new cjs.Rectangle(-158.9,-222.2,317.8,440), new cjs.Rectangle(-158.8,-222.2,317.8,440), rect=new cjs.Rectangle(-158.8,-222.3,317.7,440), rect, new cjs.Rectangle(-158.8,-222.4,317.6,440), new cjs.Rectangle(-158.7,-222.4,317.6,440), rect=new cjs.Rectangle(-158.7,-222.5,317.5,440), rect, new cjs.Rectangle(-158.7,-222.6,317.4,440), new cjs.Rectangle(-158.6,-222.6,317.4,440), rect=new cjs.Rectangle(-158.6,-222.7,317.3,440), rect, new cjs.Rectangle(-158.6,-222.8,317.2,440), new cjs.Rectangle(-158.5,-222.8,317.2,440), rect=new cjs.Rectangle(-158.5,-222.9,317.1,440), rect, new cjs.Rectangle(-158.5,-223,317,440), new cjs.Rectangle(-158.4,-223,317,440), rect=new cjs.Rectangle(-158.4,-223.1,316.9,440), rect, new cjs.Rectangle(-158.4,-223.2,316.8,440), new cjs.Rectangle(-158.3,-223.2,316.8,440), rect=new cjs.Rectangle(-158.3,-223.3,316.7,440), rect, new cjs.Rectangle(-158.3,-223.4,316.6,440), new cjs.Rectangle(-158.2,-223.4,316.6,440), rect=new cjs.Rectangle(-158.2,-223.5,316.5,440), rect, new cjs.Rectangle(-158.2,-223.6,316.4,440), new cjs.Rectangle(-158.1,-223.6,316.4,440), rect=new cjs.Rectangle(-158.1,-223.7,316.3,440), rect, new cjs.Rectangle(-158.1,-223.8,316.2,440), new cjs.Rectangle(-158,-223.8,316.2,440), rect=new cjs.Rectangle(-158,-223.9,316.1,440), rect, new cjs.Rectangle(-158,-224,316,440), new cjs.Rectangle(-158,-223.9,316.1,440), new cjs.Rectangle(-158.1,-223.8,316.2,440), new cjs.Rectangle(-158.1,-223.7,316.4,440), new cjs.Rectangle(-158.2,-223.6,316.5,440), new cjs.Rectangle(-158.2,-223.5,316.6,440), new cjs.Rectangle(-158.3,-223.4,316.7,440), new cjs.Rectangle(-158.3,-223.3,316.8,440), new cjs.Rectangle(-158.4,-223.2,316.9,440), new cjs.Rectangle(-158.5,-223.1,317,440), new cjs.Rectangle(-158.5,-223,317.1,440), new cjs.Rectangle(-158.6,-222.9,317.3,440), new cjs.Rectangle(-158.6,-222.8,317.4,440), new cjs.Rectangle(-158.7,-222.7,317.5,440), new cjs.Rectangle(-158.7,-222.6,317.6,440), new cjs.Rectangle(-158.8,-222.5,317.7,440), new cjs.Rectangle(-158.8,-222.4,317.8,440), new cjs.Rectangle(-158.9,-222.3,317.9,440), new cjs.Rectangle(-159,-222.2,318,440), new cjs.Rectangle(-159,-222.1,318.2,440), new cjs.Rectangle(-159.1,-222,318.3,440), new cjs.Rectangle(-159.1,-221.9,318.4,440), new cjs.Rectangle(-159.2,-221.8,318.5,440), new cjs.Rectangle(-159.2,-221.7,318.6,440), new cjs.Rectangle(-159.3,-221.6,318.7,440), new cjs.Rectangle(-159.4,-221.5,318.8,440), new cjs.Rectangle(-159.4,-221.4,318.9,440), new cjs.Rectangle(-159.5,-221.3,319.1,440), new cjs.Rectangle(-159.5,-221.2,319.2,440), new cjs.Rectangle(-159.6,-221.1,319.3,440), new cjs.Rectangle(-159.6,-221,319.4,440), new cjs.Rectangle(-159.7,-220.9,319.5,440), new cjs.Rectangle(-159.7,-220.8,319.6,440), new cjs.Rectangle(-159.8,-220.7,319.7,440), new cjs.Rectangle(-159.9,-220.6,319.8,440), new cjs.Rectangle(-159.9,-220.5,320,440), new cjs.Rectangle(-160,-220.4,320.1,440), new cjs.Rectangle(-160,-220.3,320.2,440), new cjs.Rectangle(-160.1,-220.2,320.3,440), new cjs.Rectangle(-160.1,-220.1,320.4,440), new cjs.Rectangle(-160.2,-220,320.5,440), new cjs.Rectangle(-160.3,-219.9,320.6,440), new cjs.Rectangle(-160.3,-219.8,320.7,440), new cjs.Rectangle(-160.4,-219.7,320.9,440), new cjs.Rectangle(-160.4,-219.6,321,440), new cjs.Rectangle(-160.5,-219.5,321.1,440), new cjs.Rectangle(-160.5,-219.4,321.2,440), new cjs.Rectangle(-160.6,-219.3,321.3,440), new cjs.Rectangle(-160.6,-219.2,321.4,440), new cjs.Rectangle(-160.7,-219.1,321.5,440), new cjs.Rectangle(-160.8,-219,321.6,440), new cjs.Rectangle(-160.8,-218.9,321.8,440), new cjs.Rectangle(-160.9,-218.8,321.9,440), new cjs.Rectangle(-160.9,-218.7,322,440), new cjs.Rectangle(-161,-218.6,322.1,440), new cjs.Rectangle(-161,-218.5,322.2,440), new cjs.Rectangle(-161.1,-218.4,322.3,440), new cjs.Rectangle(-161.2,-218.3,322.4,440), new cjs.Rectangle(-161.2,-218.2,322.5,440), new cjs.Rectangle(-161.3,-218.1,322.7,440), new cjs.Rectangle(-161.3,-218,322.8,440), new cjs.Rectangle(-161.4,-217.9,322.9,440), new cjs.Rectangle(-161.4,-217.8,323,440), new cjs.Rectangle(-161.5,-217.7,323.1,440), new cjs.Rectangle(-161.5,-217.6,323.2,440), new cjs.Rectangle(-161.6,-217.5,323.3,440), new cjs.Rectangle(-161.7,-217.4,323.4,440), new cjs.Rectangle(-161.7,-217.3,323.6,440), new cjs.Rectangle(-161.8,-217.2,323.7,440), new cjs.Rectangle(-161.8,-217.1,323.8,440), new cjs.Rectangle(-161.9,-217,323.9,440), new cjs.Rectangle(-161.9,-216.9,324,440), new cjs.Rectangle(-162,-216.8,324.1,440), new cjs.Rectangle(-162.1,-216.7,324.2,440), new cjs.Rectangle(-162.1,-216.6,324.3,440), new cjs.Rectangle(-162.2,-216.5,324.5,440), new cjs.Rectangle(-162.2,-216.4,324.6,440), new cjs.Rectangle(-162.3,-216.3,324.7,440), new cjs.Rectangle(-162.3,-216.2,324.8,440), new cjs.Rectangle(-162.4,-216.1,324.9,440), new cjs.Rectangle(-162.5,-216,325,440), new cjs.Rectangle(-162.4,-216,325,440), new cjs.Rectangle(-162.4,-216.1,324.9,440), new cjs.Rectangle(-162.4,-216.1,324.8,440), new cjs.Rectangle(-162.3,-216.2,324.8,440), new cjs.Rectangle(-162.3,-216.2,324.7,440), new cjs.Rectangle(-162.3,-216.3,324.6,440), new cjs.Rectangle(-162.2,-216.3,324.6,440), rect=new cjs.Rectangle(-162.2,-216.4,324.5,440), rect, new cjs.Rectangle(-162.1,-216.5,324.4,440), new cjs.Rectangle(-162.1,-216.5,324.3,440), new cjs.Rectangle(-162.1,-216.6,324.3,440), new cjs.Rectangle(-162,-216.6,324.2,440), rect=new cjs.Rectangle(-162,-216.7,324.1,440), rect, rect=new cjs.Rectangle(-161.9,-216.8,324,440), rect, new cjs.Rectangle(-161.9,-216.9,323.9,440), new cjs.Rectangle(-161.9,-216.9,323.8,440), new cjs.Rectangle(-161.8,-217,323.8,440), new cjs.Rectangle(-161.8,-217,323.7,440), new cjs.Rectangle(-161.8,-217.1,323.6,440), new cjs.Rectangle(-161.7,-217.1,323.6,440), rect=new cjs.Rectangle(-161.7,-217.2,323.5,440), rect, new cjs.Rectangle(-161.6,-217.3,323.4,440), new cjs.Rectangle(-161.6,-217.3,323.3,440), new cjs.Rectangle(-161.6,-217.4,323.3,440), new cjs.Rectangle(-161.5,-217.4,323.2,440), rect=new cjs.Rectangle(-161.5,-217.5,323.1,440), rect, rect=new cjs.Rectangle(-161.4,-217.6,323,440), rect, new cjs.Rectangle(-161.4,-217.7,322.9,440), new cjs.Rectangle(-161.4,-217.7,322.8,440), new cjs.Rectangle(-161.3,-217.8,322.8,440), new cjs.Rectangle(-161.3,-217.8,322.7,440), new cjs.Rectangle(-161.3,-217.9,322.6,440), new cjs.Rectangle(-161.2,-217.9,322.6,440), rect=new cjs.Rectangle(-161.2,-218,322.5,440), rect, new cjs.Rectangle(-161.1,-218.1,322.4,440), new cjs.Rectangle(-161.1,-218.1,322.3,440), new cjs.Rectangle(-161.1,-218.2,322.3,440), new cjs.Rectangle(-161,-218.2,322.2,440), rect=new cjs.Rectangle(-161,-218.3,322.1,440), rect, rect=new cjs.Rectangle(-160.9,-218.4,322,440), rect, new cjs.Rectangle(-160.9,-218.5,321.9,440), new cjs.Rectangle(-160.9,-218.5,321.8,440), new cjs.Rectangle(-160.8,-218.6,321.8,440), new cjs.Rectangle(-160.8,-218.6,321.7,440), new cjs.Rectangle(-160.8,-218.7,321.6,440), new cjs.Rectangle(-160.7,-218.7,321.6,440), rect=new cjs.Rectangle(-160.7,-218.8,321.5,440), rect, new cjs.Rectangle(-160.6,-218.9,321.4,440), new cjs.Rectangle(-160.6,-218.9,321.3,440), new cjs.Rectangle(-160.6,-219,321.3,440), new cjs.Rectangle(-160.5,-219,321.2,440), rect=new cjs.Rectangle(-160.5,-219.1,321.1,440), rect, rect=new cjs.Rectangle(-160.4,-219.2,321,440), rect, new cjs.Rectangle(-160.4,-219.3,320.9,440), new cjs.Rectangle(-160.4,-219.3,320.8,440), new cjs.Rectangle(-160.3,-219.4,320.8,440), new cjs.Rectangle(-160.3,-219.4,320.7,440), new cjs.Rectangle(-160.3,-219.5,320.6,440), new cjs.Rectangle(-160.2,-219.5,320.6,440), rect=new cjs.Rectangle(-160.2,-219.6,320.5,440), rect, new cjs.Rectangle(-160.1,-219.7,320.4,440), new cjs.Rectangle(-160.1,-219.7,320.3,440), new cjs.Rectangle(-160.1,-219.8,320.3,440), new cjs.Rectangle(-160,-219.8,320.2,440), rect=new cjs.Rectangle(-160,-219.9,320.1,440), rect, new cjs.Rectangle(-160,-220,320,440)];


(lib.mini_hero_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mini_hero_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,y:-4},79).to({scaleX:1.01,y:4},80).to({scaleX:1,y:0},80).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-240,360,480);
p.frameBounds = [rect, new cjs.Rectangle(-179.9,-240,360,480), rect=new cjs.Rectangle(-179.9,-240.1,359.9,480), rect, rect=new cjs.Rectangle(-179.8,-240.2,359.8,480), rect, rect=new cjs.Rectangle(-179.8,-240.3,359.7,480), rect, rect=new cjs.Rectangle(-179.7,-240.4,359.6,480), rect, rect=new cjs.Rectangle(-179.7,-240.5,359.5,480), rect, rect=new cjs.Rectangle(-179.6,-240.6,359.4,480), rect, rect=new cjs.Rectangle(-179.6,-240.7,359.3,480), rect, rect=new cjs.Rectangle(-179.5,-240.8,359.2,480), rect, rect=new cjs.Rectangle(-179.5,-240.9,359.1,480), rect, rect=new cjs.Rectangle(-179.4,-241,359,480), rect, rect=new cjs.Rectangle(-179.4,-241.1,358.9,480), rect, rect=new cjs.Rectangle(-179.3,-241.2,358.8,480), rect, rect=new cjs.Rectangle(-179.3,-241.3,358.7,480), rect, rect=new cjs.Rectangle(-179.2,-241.4,358.6,480), rect, rect=new cjs.Rectangle(-179.2,-241.5,358.5,480), rect, rect=new cjs.Rectangle(-179.1,-241.6,358.4,480), rect, rect=new cjs.Rectangle(-179.1,-241.7,358.3,480), rect, rect=new cjs.Rectangle(-179,-241.8,358.2,480), rect, rect=new cjs.Rectangle(-179,-241.9,358.1,480), rect, new cjs.Rectangle(-178.9,-242,358,480), rect=new cjs.Rectangle(-178.9,-242.1,357.9,480), rect, new cjs.Rectangle(-178.9,-242.2,357.8,480), new cjs.Rectangle(-178.8,-242.2,357.8,480), rect=new cjs.Rectangle(-178.8,-242.3,357.7,480), rect, new cjs.Rectangle(-178.8,-242.4,357.6,480), new cjs.Rectangle(-178.7,-242.4,357.6,480), rect=new cjs.Rectangle(-178.7,-242.5,357.5,480), rect, new cjs.Rectangle(-178.7,-242.6,357.4,480), new cjs.Rectangle(-178.6,-242.6,357.4,480), rect=new cjs.Rectangle(-178.6,-242.7,357.3,480), rect, new cjs.Rectangle(-178.6,-242.8,357.2,480), new cjs.Rectangle(-178.5,-242.8,357.2,480), rect=new cjs.Rectangle(-178.5,-242.9,357.1,480), rect, new cjs.Rectangle(-178.5,-243,357,480), new cjs.Rectangle(-178.4,-243,357,480), rect=new cjs.Rectangle(-178.4,-243.1,356.9,480), rect, new cjs.Rectangle(-178.4,-243.2,356.8,480), new cjs.Rectangle(-178.3,-243.2,356.8,480), rect=new cjs.Rectangle(-178.3,-243.3,356.7,480), rect, new cjs.Rectangle(-178.3,-243.4,356.6,480), new cjs.Rectangle(-178.2,-243.4,356.6,480), rect=new cjs.Rectangle(-178.2,-243.5,356.5,480), rect, new cjs.Rectangle(-178.2,-243.6,356.4,480), new cjs.Rectangle(-178.1,-243.6,356.4,480), rect=new cjs.Rectangle(-178.1,-243.7,356.3,480), rect, new cjs.Rectangle(-178.1,-243.8,356.2,480), new cjs.Rectangle(-178,-243.8,356.2,480), rect=new cjs.Rectangle(-178,-243.9,356.1,480), rect, new cjs.Rectangle(-178,-244,356,480), new cjs.Rectangle(-178,-243.9,356.1,480), new cjs.Rectangle(-178,-243.8,356.2,480), new cjs.Rectangle(-178.1,-243.7,356.3,480), new cjs.Rectangle(-178.1,-243.6,356.4,480), new cjs.Rectangle(-178.2,-243.5,356.5,480), new cjs.Rectangle(-178.2,-243.4,356.6,480), new cjs.Rectangle(-178.3,-243.3,356.7,480), new cjs.Rectangle(-178.3,-243.2,356.8,480), new cjs.Rectangle(-178.4,-243.1,356.9,480), new cjs.Rectangle(-178.4,-243,357,480), new cjs.Rectangle(-178.5,-242.9,357.1,480), new cjs.Rectangle(-178.5,-242.8,357.2,480), new cjs.Rectangle(-178.6,-242.7,357.3,480), new cjs.Rectangle(-178.6,-242.6,357.4,480), new cjs.Rectangle(-178.7,-242.5,357.5,480), new cjs.Rectangle(-178.7,-242.4,357.6,480), new cjs.Rectangle(-178.8,-242.3,357.7,480), new cjs.Rectangle(-178.8,-242.2,357.8,480), new cjs.Rectangle(-178.9,-242.1,357.9,480), new cjs.Rectangle(-178.9,-242,358,480), new cjs.Rectangle(-179,-241.9,358.1,480), new cjs.Rectangle(-179,-241.8,358.2,480), new cjs.Rectangle(-179.1,-241.7,358.3,480), new cjs.Rectangle(-179.1,-241.6,358.4,480), new cjs.Rectangle(-179.2,-241.5,358.5,480), new cjs.Rectangle(-179.2,-241.4,358.6,480), new cjs.Rectangle(-179.3,-241.3,358.7,480), new cjs.Rectangle(-179.3,-241.2,358.8,480), new cjs.Rectangle(-179.4,-241.1,358.9,480), new cjs.Rectangle(-179.4,-241,359,480), new cjs.Rectangle(-179.5,-240.9,359.1,480), new cjs.Rectangle(-179.5,-240.8,359.2,480), new cjs.Rectangle(-179.6,-240.7,359.3,480), new cjs.Rectangle(-179.6,-240.6,359.4,480), new cjs.Rectangle(-179.7,-240.5,359.5,480), new cjs.Rectangle(-179.7,-240.4,359.6,480), new cjs.Rectangle(-179.8,-240.3,359.7,480), new cjs.Rectangle(-179.8,-240.2,359.8,480), new cjs.Rectangle(-179.9,-240.1,359.9,480), new cjs.Rectangle(-179.9,-240,360,480), new cjs.Rectangle(-180,-239.9,360.1,480), new cjs.Rectangle(-180,-239.8,360.2,480), new cjs.Rectangle(-180.1,-239.7,360.3,480), new cjs.Rectangle(-180.1,-239.6,360.4,480), new cjs.Rectangle(-180.2,-239.5,360.5,480), new cjs.Rectangle(-180.2,-239.4,360.6,480), new cjs.Rectangle(-180.3,-239.3,360.7,480), new cjs.Rectangle(-180.3,-239.2,360.8,480), new cjs.Rectangle(-180.4,-239.1,360.9,480), new cjs.Rectangle(-180.4,-239,361,480), new cjs.Rectangle(-180.5,-238.9,361.1,480), new cjs.Rectangle(-180.5,-238.8,361.2,480), new cjs.Rectangle(-180.6,-238.7,361.3,480), new cjs.Rectangle(-180.6,-238.6,361.4,480), new cjs.Rectangle(-180.7,-238.5,361.5,480), new cjs.Rectangle(-180.7,-238.4,361.6,480), new cjs.Rectangle(-180.8,-238.3,361.7,480), new cjs.Rectangle(-180.8,-238.2,361.8,480), new cjs.Rectangle(-180.9,-238.1,361.9,480), new cjs.Rectangle(-180.9,-238,362,480), new cjs.Rectangle(-181,-237.9,362.1,480), new cjs.Rectangle(-181,-237.8,362.2,480), new cjs.Rectangle(-181.1,-237.7,362.3,480), new cjs.Rectangle(-181.1,-237.6,362.4,480), new cjs.Rectangle(-181.2,-237.5,362.5,480), new cjs.Rectangle(-181.2,-237.4,362.6,480), new cjs.Rectangle(-181.3,-237.3,362.7,480), new cjs.Rectangle(-181.3,-237.2,362.8,480), new cjs.Rectangle(-181.4,-237.1,362.9,480), new cjs.Rectangle(-181.4,-237,363,480), new cjs.Rectangle(-181.5,-236.9,363.1,480), new cjs.Rectangle(-181.5,-236.8,363.2,480), new cjs.Rectangle(-181.6,-236.7,363.3,480), new cjs.Rectangle(-181.6,-236.6,363.4,480), new cjs.Rectangle(-181.7,-236.5,363.5,480), new cjs.Rectangle(-181.7,-236.4,363.6,480), new cjs.Rectangle(-181.8,-236.3,363.7,480), new cjs.Rectangle(-181.8,-236.2,363.8,480), new cjs.Rectangle(-181.9,-236.1,363.9,480), new cjs.Rectangle(-182,-236,364,480), new cjs.Rectangle(-181.9,-236,364,480), rect=new cjs.Rectangle(-181.9,-236.1,363.9,480), rect, rect=new cjs.Rectangle(-181.8,-236.2,363.8,480), rect, rect=new cjs.Rectangle(-181.8,-236.3,363.7,480), rect, rect=new cjs.Rectangle(-181.7,-236.4,363.6,480), rect, rect=new cjs.Rectangle(-181.7,-236.5,363.5,480), rect, rect=new cjs.Rectangle(-181.6,-236.6,363.4,480), rect, rect=new cjs.Rectangle(-181.6,-236.7,363.3,480), rect, rect=new cjs.Rectangle(-181.5,-236.8,363.2,480), rect, rect=new cjs.Rectangle(-181.5,-236.9,363.1,480), rect, rect=new cjs.Rectangle(-181.4,-237,363,480), rect, rect=new cjs.Rectangle(-181.4,-237.1,362.9,480), rect, rect=new cjs.Rectangle(-181.3,-237.2,362.8,480), rect, rect=new cjs.Rectangle(-181.3,-237.3,362.7,480), rect, rect=new cjs.Rectangle(-181.2,-237.4,362.6,480), rect, rect=new cjs.Rectangle(-181.2,-237.5,362.5,480), rect, rect=new cjs.Rectangle(-181.1,-237.6,362.4,480), rect, rect=new cjs.Rectangle(-181.1,-237.7,362.3,480), rect, rect=new cjs.Rectangle(-181,-237.8,362.2,480), rect, rect=new cjs.Rectangle(-181,-237.9,362.1,480), rect, rect=new cjs.Rectangle(-180.9,-238,362,480), rect, rect=new cjs.Rectangle(-180.9,-238.1,361.9,480), rect, rect=new cjs.Rectangle(-180.8,-238.2,361.8,480), rect, rect=new cjs.Rectangle(-180.8,-238.3,361.7,480), rect, rect=new cjs.Rectangle(-180.7,-238.4,361.6,480), rect, rect=new cjs.Rectangle(-180.7,-238.5,361.5,480), rect, rect=new cjs.Rectangle(-180.6,-238.6,361.4,480), rect, rect=new cjs.Rectangle(-180.6,-238.7,361.3,480), rect, rect=new cjs.Rectangle(-180.5,-238.8,361.2,480), rect, rect=new cjs.Rectangle(-180.5,-238.9,361.1,480), rect, rect=new cjs.Rectangle(-180.4,-239,361,480), rect, rect=new cjs.Rectangle(-180.4,-239.1,360.9,480), rect, rect=new cjs.Rectangle(-180.3,-239.2,360.8,480), rect, rect=new cjs.Rectangle(-180.3,-239.3,360.7,480), rect, rect=new cjs.Rectangle(-180.2,-239.4,360.6,480), rect, rect=new cjs.Rectangle(-180.2,-239.5,360.5,480), rect, rect=new cjs.Rectangle(-180.1,-239.6,360.4,480), rect, rect=new cjs.Rectangle(-180.1,-239.7,360.3,480), rect, rect=new cjs.Rectangle(-180,-239.8,360.2,480), rect, rect=new cjs.Rectangle(-180,-239.9,360.1,480), rect, new cjs.Rectangle(-180,-240,360,480)];


(lib.heroes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// location_2
	this.location_2 = new lib.hero_2_mc();
	this.location_2.setTransform(404.9,340.1,1.08,1.08,0,0,0,2.7,76);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(4));

	// location_3
	this.location_3 = new lib.hero_3_mc();
	this.location_3.setTransform(622.9,357.1,1.08,1.08,0,0,0,2.7,76);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(4));

	// location_1
	this.location_1 = new lib.hero_1_mc();
	this.location_1.setTransform(172.9,362.1,1.08,1.08,0,0,0,2.7,76);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(4));

	// bg
	this.instance = new lib.background_4_mc();

	this.instance_1 = new lib.background_3_mc();

	this.instance_2 = new lib.background_1_mc();

	this.instance_3 = new lib.background_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,631.3);
p.frameBounds = [rect, rect, rect, rect];


(lib.cards_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timer
	this.memoryTimer_mc = new lib.memoryTimer_mc();
	this.memoryTimer_mc.setTransform(-50,240);

	this.timeline.addTween(cjs.Tween.get(this.memoryTimer_mc).wait(5));

	// rounds
	this.round_1 = new lib.cards_0_3_mc();

	this.round_2 = new lib.cards_1_3_mc();

	this.round_3 = new lib.cards_2_3_mc();

	this.round_4 = new lib.cards_3_3_mc();

	this.round_5 = new lib.cards_4_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.round_1}]}).to({state:[{t:this.round_2}]},1).to({state:[{t:this.round_3}]},1).to({state:[{t:this.round_4}]},1).to({state:[{t:this.round_5}]},1).wait(1));

	// decor
	this.instance = new lib.decor_1_cards_mc();
	this.instance.setTransform(-155,155,0.889,0.889,0,0,180);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.decor_1_cards_mc();
	this.instance_1.setTransform(155,155,0.889,0.889);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.web_mc();
	this.instance_2.setTransform(-189,198,1,1,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{scaleX:0.889,scaleY:0.889,x:155,y:155}},{t:this.instance,p:{skewY:180,x:-155,y:155,scaleX:0.889,scaleY:0.889}}]}).to({state:[{t:this.instance,p:{skewY:0,x:0,y:0,scaleX:0.889,scaleY:0.889}}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.667,scaleY:0.667,x:175,y:175}},{t:this.instance,p:{skewY:180,x:-175,y:-175,scaleX:0.667,scaleY:0.667}}]},1).to({state:[]},1).wait(1));

	// bg
	this.instance_3 = new lib.bg_cards_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-270,540,540);
p.frameBounds = [rect, rect, rect, rect, rect];


(lib.cards_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timer
	this.memoryTimer_mc = new lib.memoryTimer_mc();
	this.memoryTimer_mc.setTransform(-50,240);

	this.timeline.addTween(cjs.Tween.get(this.memoryTimer_mc).wait(5));

	// rounds
	this.round_1 = new lib.cards_0_2_mc();

	this.round_2 = new lib.cards_1_2_mc();

	this.round_3 = new lib.cards_2_2_mc();

	this.round_4 = new lib.cards_3_2_mc();

	this.round_5 = new lib.cards_4_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.round_1}]}).to({state:[{t:this.round_2}]},1).to({state:[{t:this.round_3}]},1).to({state:[{t:this.round_4}]},1).to({state:[{t:this.round_5}]},1).wait(1));

	// decor
	this.instance = new lib.decor_2_cards_mc();
	this.instance.alpha = 0.5;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// bg
	this.instance_1 = new lib.small_bg_cards_mc();

	this.instance_2 = new lib.bg_cards_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,440);
p.frameBounds = [rect, rect=new cjs.Rectangle(-270,-270,540,540), rect, rect, rect];


(lib.cards_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timer
	this.memoryTimer_mc = new lib.memoryTimer_mc();
	this.memoryTimer_mc.setTransform(-50,240);

	this.timeline.addTween(cjs.Tween.get(this.memoryTimer_mc).wait(5));

	// rounds
	this.round_1 = new lib.cards_0_1_mc();

	this.round_2 = new lib.cards_1_1_mc();

	this.round_3 = new lib.cards_2_1_mc();

	this.round_4 = new lib.cards_3_1_mc();

	this.round_5 = new lib.cards_4_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.round_1}]}).to({state:[{t:this.round_2}]},1).to({state:[{t:this.round_3}]},1).to({state:[{t:this.round_4}]},1).to({state:[{t:this.round_5}]},1).wait(1));

	// decor
	this.instance = new lib.decor_1_cards_mc();
	this.instance.setTransform(0,0,0.889,0.889);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.decor_1_cards_mc();
	this.instance_1.setTransform(155,155,0.889,0.889,0,180,0);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.decor_1_cards_mc();
	this.instance_2.setTransform(155,-155,0.889,0.889);
	this.instance_2.alpha = 0.5;

	this.instance_3 = new lib.decor_1_cards_mc();
	this.instance_3.setTransform(-155,-155,0.889,0.889,0,0,180);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{rotation:0,x:0,y:0}}]},3).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance,p:{rotation:180,x:-155,y:156.5}}]},1).wait(1));

	// bg
	this.instance_4 = new lib.small_bg_cards_mc();

	this.instance_5 = new lib.bg_cards_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,440);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-270,-270,540,540), rect, rect];


(lib.body_title_help_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// decor
	this.instance = new lib.anim_decor_title_help_2_mc();
	this.instance.setTransform(195,-95);

	this.instance_1 = new lib.anim_decor_title_help_1_mc();
	this.instance_1.setTransform(-215,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(13));

	// graph
	this.instance_2 = new lib.title_help_en_img();
	this.instance_2.setTransform(-320,-255);

	this.instance_3 = new lib.title_help_ru_img();
	this.instance_3.setTransform(-320,-255);

	this.instance_4 = new lib.title_help_es_img();
	this.instance_4.setTransform(-320,-255);

	this.instance_5 = new lib.title_help_pt_img();
	this.instance_5.setTransform(-320,-255);

	this.instance_6 = new lib.title_help_tr_img();
	this.instance_6.setTransform(-320,-255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(1).to({_off:false},0).wait(2).to({_off:true},1).wait(3).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-320,-255,640,510);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_title_win_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		try
		{
			app.addSoundFunc("air_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_49 = function() {
		try
		{
			app.addSoundFunc("message_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_164 = function() {
		try
		{
			app.addSoundFunc("air_sound", 0.2);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_179 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(25).call(this.frame_49).wait(115).call(this.frame_164).wait(15).call(this.frame_179).wait(1));

	// animation
	this.instance = new lib.title_win_mc();
	this.instance.setTransform(400.5,900.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({regX:0.6,regY:0.6,scaleX:0.61,scaleY:0.61,x:410.4,y:280.4,alpha:0.012},0).to({regX:0.5,regY:0.5,scaleX:1,scaleY:1,x:250.5,y:160.5,alpha:1},10).to({x:320.5,y:220.5},5).wait(90).to({alpha:0.012},15).to({_off:true},1).wait(15));

	// animation
	this.instance_1 = new lib.mini_hero_2_2_mc();
	this.instance_1.setTransform(1000,850);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({x:450,y:300},15).to({x:620,y:380},5).wait(120).to({x:1000,y:850},15).wait(1));

	// animation
	this.instance_2 = new lib.semitransparent_mc();
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({alpha:1},15).wait(120).to({alpha:0.012},14).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(155,630,1005,450);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(155,593.4,968.4,486.7), new cjs.Rectangle(155,556.7,931.7,523.4), new cjs.Rectangle(155,520,895,560), new cjs.Rectangle(155,483.4,858.4,596.7), rect=new cjs.Rectangle(-410,-10,1620,1090), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-410,-10,1620,620), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-410,-20,1620,630), rect=new cjs.Rectangle(-410,-10,1620,620), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-410,-10,1620,641.4), new cjs.Rectangle(-410,-10,1620,672.7), new cjs.Rectangle(-410,-10,1620,704), new cjs.Rectangle(-410,-10,1620,735.4), new cjs.Rectangle(-410,-10,1620,766.7), new cjs.Rectangle(-410,-10,1620,798), new cjs.Rectangle(-410,-10,1620,829.4), new cjs.Rectangle(-410,-10,1620,860.7), new cjs.Rectangle(-410,-10,1620,892), new cjs.Rectangle(-410,-10,1620,923.4), new cjs.Rectangle(-410,-10,1620,954.7), new cjs.Rectangle(-410,-10,1620,986), new cjs.Rectangle(-410,-10,1620,1017.4), new cjs.Rectangle(-410,-10,1620,1048.7), new cjs.Rectangle(840,630,320,440)];


(lib.animation_loss_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		try
		{
			app.addSoundFunc("air_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_49 = function() {
		try
		{
			app.addSoundFunc("message_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_79 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(25).call(this.frame_49).wait(30).call(this.frame_79).wait(1));

	// animation
	this.instance = new lib.mini_hero_2_1_mc();
	this.instance.setTransform(1400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({y:1000},0).to({x:520,y:300},15).to({x:620},5).wait(36));

	// animation
	this.instance_1 = new lib.title_loss_mc();
	this.instance_1.setTransform(400,900,1,1,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({regX:-0.1,regY:0.1,scaleX:0.34,scaleY:0.34,x:570,y:230.1,alpha:0.012},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:160,y:350,alpha:1},10).to({x:220,y:250},5).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(108.3,60,1471.8,1093);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(108.3,647.1,1471.8,593), new cjs.Rectangle(108.3,647.1,1413.1,546.3), new cjs.Rectangle(108.3,647.1,1354.4,505.9), new cjs.Rectangle(108.3,620,1295.8,533), new cjs.Rectangle(108.3,573.4,1237.1,579.6), new cjs.Rectangle(108.3,526.7,1178.4,626.3), new cjs.Rectangle(108.3,480,1119.8,673), new cjs.Rectangle(108.3,433.4,1061.1,719.6), new cjs.Rectangle(108.3,386.7,1002.4,766.3), new cjs.Rectangle(108.3,340,943.8,813), new cjs.Rectangle(108.3,293.4,885.1,859.6), new cjs.Rectangle(108.3,246.7,826.4,906.3), new cjs.Rectangle(108.3,200,767.8,953), new cjs.Rectangle(108.3,153.4,709.1,999.6), new cjs.Rectangle(108.3,106.7,650.4,1046.3), new cjs.Rectangle(108.3,60,591.8,1093), new cjs.Rectangle(108.3,60,611.8,1093), new cjs.Rectangle(108.3,60,631.8,1093), new cjs.Rectangle(108.3,60,651.8,1093), new cjs.Rectangle(108.3,60,671.8,1093), new cjs.Rectangle(440,60,360,480), new cjs.Rectangle(410,60,390,480), new cjs.Rectangle(350,60,450.1,480), new cjs.Rectangle(289.8,60,510.2,480), new cjs.Rectangle(229.6,60,570.4,480), new cjs.Rectangle(169.6,60,630.5,480), new cjs.Rectangle(109.4,60,690.7,480), new cjs.Rectangle(49.3,60,750.8,480), new cjs.Rectangle(-10.8,60,810.9,484.9), new cjs.Rectangle(-71,60,871,513.5), new cjs.Rectangle(-131.7,60,931.8,543), new cjs.Rectangle(-119.2,60,919.2,522.2), new cjs.Rectangle(-107.2,57.8,907.2,504.4), new cjs.Rectangle(-95.2,37.8,895.2,504.4), new cjs.Rectangle(-83.2,17.8,883.2,522.3), rect=new cjs.Rectangle(-71.7,-2.9,871.8,543), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.title_help_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		установка языка
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		try
		{
			this.body_mc.gotoAndStop(app.getLanguageFunc());
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_help_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.bg_title_help_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,-290,700,580);
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
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,631.3);
p.frameBounds = [rect];


(lib.LossScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(400.5,700.5,0.75,0.75,0,0,0,0.7,0.7);

	this.playAgain_btn = new lib.again_btn();
	this.playAgain_btn.setTransform(90,510,0.895,0.895);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.again_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,50,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(680.1,50.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.playAgain_btn},{t:this.social_network_mc}]}).wait(1));

	// title
	this.instance = new lib.animation_loss_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(0,400);
	this.instance_1.alpha = 0.398;
	this.instance_1.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_2_mc();
	this.bubble_comp.setTransform(-201,-1,1,1,0,0,0,-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_2 = new lib.background_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1980,1433.8);
p.frameBounds = [rect];


(lib.LocationScreen_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// btn
	this.skip_mc = new lib.skip_mc();
	this.skip_mc.setTransform(400,700);

	this.pause_btn = new lib.pause_btn();
	this.pause_btn.setTransform(50.1,40.1,0.545,0.545,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.pause_btn, 0, 1, 2, false, new lib.pause_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,50,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(680.1,50.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-40);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.pause_btn},{t:this.skip_mc}]}).wait(1));

	// cards
	this.cards_mc = new lib.cards_3_mc();
	this.cards_mc.setTransform(260,320);

	this.timeline.addTween(cjs.Tween.get(this.cards_mc).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_1_mc();
	this.indicator_mc.setTransform(270,30,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// preview
	this.preview_mc = new lib.preview_3_mc();
	this.preview_mc.setTransform(660,310);

	this.timeline.addTween(cjs.Tween.get(this.preview_mc).wait(1));

	// bg
	this.instance = new lib.background_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-270.8,1620,1251.9);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// btn
	this.skip_mc = new lib.skip_mc();
	this.skip_mc.setTransform(400,700);

	this.pause_btn = new lib.pause_btn();
	this.pause_btn.setTransform(50.1,40.1,0.545,0.545,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.pause_btn, 0, 1, 2, false, new lib.pause_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,50,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(680.1,50.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-40);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.pause_btn},{t:this.skip_mc}]}).wait(1));

	// cards
	this.cards_mc = new lib.cards_2_mc();
	this.cards_mc.setTransform(260,320);

	this.timeline.addTween(cjs.Tween.get(this.cards_mc).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_1_mc();
	this.indicator_mc.setTransform(270,30,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// preview
	this.preview_mc = new lib.preview_2_mc();
	this.preview_mc.setTransform(660,310);

	this.timeline.addTween(cjs.Tween.get(this.preview_mc).wait(1));

	// bg
	this.instance = new lib.background_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-270.8,1620,1251.9);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// popup
	this.popup_mc = new lib.popup_mc();

	this.timeline.addTween(cjs.Tween.get(this.popup_mc).wait(1));

	// btn
	this.skip_mc = new lib.skip_mc();
	this.skip_mc.setTransform(400,700);

	this.pause_btn = new lib.pause_btn();
	this.pause_btn.setTransform(50.1,40.1,0.545,0.545,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.pause_btn, 0, 1, 2, false, new lib.pause_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,50,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(680.1,50.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-40);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.pause_btn},{t:this.skip_mc}]}).wait(1));

	// cards
	this.cards_mc = new lib.cards_1_mc();
	this.cards_mc.setTransform(260,320);

	this.timeline.addTween(cjs.Tween.get(this.cards_mc).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_1_mc();
	this.indicator_mc.setTransform(270,30,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// preview
	this.preview_mc = new lib.preview_1_mc();
	this.preview_mc.setTransform(660,310);

	this.timeline.addTween(cjs.Tween.get(this.preview_mc).wait(1));

	// bg
	this.instance = new lib.background_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-270.8,1620,1251.9);
p.frameBounds = [rect];


(lib.help_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_help_mc();
	this.instance.setTransform(400.5,300.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.semitransparent_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
p.frameBounds = [rect];


(lib.WinScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(460,550);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(340,550);

	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(220.5,700.5,0.75,0.75,0,0,0,0.7,0.7);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(580,700,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(710,510,0.895,0.895);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.playAgain_btn = new lib.again_btn();
	this.playAgain_btn.setTransform(90,510,0.895,0.895);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.again_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,50,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(40.1,50.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.playAgain_btn},{t:this.photo_btn},{t:this.freeGames_mc},{t:this.social_network_mc},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// banners
	this.banner_2_mc = new lib.banner_2_mc();
	this.banner_2_mc.setTransform(720,-200,0.923,0.923);

	this.banner_1_mc = new lib.banner_1_mc();
	this.banner_1_mc.setTransform(80,-200,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.banner_1_mc},{t:this.banner_2_mc}]}).wait(1));

	// title
	this.instance = new lib.animation_title_win_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(0,400);
	this.instance_1.alpha = 0.398;
	this.instance_1.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_mc();

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-319.9,1600,1400);
p.frameBounds = [rect];


(lib.SelectionScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// help_mc
	this.help_mc = new lib.help_mc();

	this.timeline.addTween(cjs.Tween.get(this.help_mc).wait(1));

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,50,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(40.1,50.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// locations
	this.locations_mc = new lib.locations_mc();
	this.locations_mc.setTransform(400,290);

	this.timeline.addTween(cjs.Tween.get(this.locations_mc).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(0,400);
	this.instance.alpha = 0.398;
	this.instance.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_2_mc();
	this.bubble_comp.setTransform(-201,-1,1,1,0,0,0,-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_1 = new lib.background_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-280.8,1620,1261.9);
p.frameBounds = [rect];


(lib.storage_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

	// storage
	this.text = new cjs.Text("storage", "64px 'Arial'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 74;
	this.text.lineWidth = 253;
	this.text.setTransform(128.5,2);

	this.instance = new lib.PreloaderScreen();

	this.instance_1 = new lib.CopyrightScreen();

	this.instance_2 = new lib.LanguagesScreen();

	this.instance_3 = new lib.WelcomeScreen();

	this.instance_4 = new lib.SelectionScreen();

	this.instance_5 = new lib.LocationScreen_1();

	this.instance_6 = new lib.LocationScreen_2();

	this.instance_7 = new lib.LocationScreen_3();

	this.instance_8 = new lib.RedirectScreen();

	this.instance_9 = new lib.LossScreen();

	this.instance_10 = new lib.WinScreen();

	this.instance_11 = new lib.InstructionScreen();

	this.gravity_big_explosion_comp = new lib.GravityBigExplosionMC();
	this.gravity_big_explosion_comp.setTransform(310,50);

	this.instance_12 = new lib.FlashAnimation();
	this.instance_12.setTransform(150,280);

	this.instance_13 = new lib.forward_mc();
	this.instance_13.setTransform(450,300);

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(250,50);

	this.instance_14 = new lib.Cursor();
	this.instance_14.setTransform(190,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(120.1,50,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(50.1,50,0.583,0.583,0,0,0,0.1,0);

	this.instance_15 = new lib.PauseAppScreen();

	this.instance_16 = new lib.OrientationLockScreen();

	this.instance_17 = new lib.CurtainScreen();

	this.instance_18 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_14},{t:this.gravity_explosion_comp},{t:this.instance_13},{t:this.instance_12},{t:this.gravity_big_explosion_comp}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[]},1).to({state:[{t:this.instance_18}]},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,257,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,0,1600,600), rect, new cjs.Rectangle(-400,0,1600,1165), new cjs.Rectangle(-400,-370,2145,1486.7), new cjs.Rectangle(-410,-280.8,1620,1261.9), rect=new cjs.Rectangle(-410,-270.8,1620,1251.9), rect, rect, new cjs.Rectangle(-400,0,1600,610), new cjs.Rectangle(-400,-280.8,1980,1433.8), new cjs.Rectangle(-400,-319.9,1600,1400), new cjs.Rectangle(-400,0,1600,600), new cjs.Rectangle(-8.3,-8.3,553.4,438.4), rect=new cjs.Rectangle(-410,-10,1620,620), rect, new cjs.Rectangle(-400,600,1600,600), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-410,-10,1620,620)];


// stage content:
(lib.storage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// storage
	this.instance = new lib.storage_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(400,300,257,75.5);
p.frameBounds = [rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;