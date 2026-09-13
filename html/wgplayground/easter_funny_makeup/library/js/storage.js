(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 32,
	color: "#FFFFFF",
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
		{src:"library/images/storage_atlas_13.png", id:"storage_atlas_13"},
		{src:"library/images/storage_atlas_14.png", id:"storage_atlas_14"},
		{src:"library/images/storage_atlas_15.png", id:"storage_atlas_15"},
		{src:"library/images/storage_atlas_16.png", id:"storage_atlas_16"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,602,715,623],[0,0,1200,600]]},
		{name:"storage_atlas_5", frames: [[0,0,600,600],[526,602,509,548],[0,602,524,585],[602,0,509,535]]},
		{name:"storage_atlas_6", frames: [[0,741,470,493],[897,202,365,512],[444,202,451,489],[0,202,442,537],[472,716,427,421],[0,0,1200,200]]},
		{name:"storage_atlas_7", frames: [[724,744,319,504],[0,282,333,510],[697,282,360,460],[0,794,360,460],[362,744,360,460],[335,282,360,460],[642,0,640,280],[0,0,640,280]]},
		{name:"storage_atlas_8", frames: [[402,0,380,380],[319,402,500,300],[0,402,317,494],[0,898,427,360],[0,0,400,400],[821,382,380,380],[784,0,380,380],[811,764,380,380],[429,704,380,380]]},
		{name:"storage_atlas_9", frames: [[764,382,367,392],[764,776,369,389],[0,764,380,380],[0,0,380,380],[0,382,380,380],[382,0,380,380],[764,0,380,380],[382,382,380,380],[382,764,380,380]]},
		{name:"storage_atlas_10", frames: [[0,390,297,315],[718,0,380,260],[0,0,301,388],[303,0,413,244],[299,495,313,298],[929,535,313,298],[614,535,313,298],[725,262,350,271],[303,262,420,231],[0,795,352,264],[354,835,352,264],[708,835,352,264]]},
		{name:"storage_atlas_11", frames: [[660,563,369,207],[660,321,304,237],[0,540,338,232],[366,286,292,308],[683,0,289,319],[762,1025,410,159],[0,286,364,252],[354,0,327,284],[974,299,317,262],[0,852,348,198],[350,1025,410,166],[0,1052,347,186],[0,0,352,264],[945,772,326,219],[642,772,301,251],[340,596,300,254],[974,0,308,297]]},
		{name:"storage_atlas_12", frames: [[673,0,200,300],[875,0,200,300],[376,210,173,308],[1077,0,193,308],[0,0,377,163],[0,165,374,143],[379,0,292,208],[783,514,230,210],[696,938,230,210],[696,726,230,210],[0,946,230,210],[1015,310,230,210],[232,732,230,210],[928,734,230,210],[0,310,230,210],[0,522,230,210],[928,946,230,210],[464,726,230,210],[232,944,230,210],[464,938,230,210],[551,302,230,210],[551,514,230,210],[232,520,230,210],[1015,522,230,210],[0,734,230,210],[783,302,230,210]]},
		{name:"storage_atlas_13", frames: [[464,636,314,150],[0,424,230,210],[0,636,230,210],[0,1060,230,210],[0,848,230,210],[0,0,230,210],[0,212,230,210],[232,0,230,210],[232,212,230,210],[232,424,230,210],[232,636,230,210],[464,212,230,210],[464,0,230,210],[232,848,230,210],[232,1060,230,210],[464,424,230,210],[696,0,240,180],[696,182,240,180],[696,364,240,180],[938,182,240,180],[780,546,240,180],[938,0,240,180],[938,364,240,180],[780,728,240,180],[464,788,240,180],[706,910,240,180],[464,970,240,180],[948,910,240,180],[1022,546,240,180],[1022,728,240,180],[706,1092,240,180],[948,1092,240,180]]},
		{name:"storage_atlas_14", frames: [[0,920,190,190],[514,988,180,180],[696,1092,180,180],[0,728,190,190],[632,546,180,180],[1060,615,180,180],[1060,797,180,180],[814,546,180,180],[878,1092,180,180],[696,728,180,180],[996,433,180,180],[696,910,180,180],[514,806,180,180],[878,728,180,180],[1060,979,180,180],[222,1077,180,180],[878,910,180,180],[242,364,200,212],[388,806,124,269],[971,192,279,129],[242,690,312,114],[676,192,293,123],[242,578,324,110],[632,439,310,105],[958,323,310,108],[0,1112,220,160],[484,182,190,190],[444,374,186,188],[192,806,194,178],[726,0,190,190],[918,0,190,190],[1110,0,190,190],[0,0,240,180],[242,182,240,180],[0,546,240,180],[0,364,240,180],[0,182,240,180],[242,0,240,180],[484,0,240,180],[676,317,280,120]]},
		{name:"storage_atlas_15", frames: [[1169,314,120,120],[241,938,120,120],[0,1083,120,120],[585,189,150,163],[0,364,180,180],[0,0,180,180],[0,182,180,180],[881,904,120,120],[724,1042,100,100],[1184,522,110,110],[455,775,140,140],[906,380,261,71],[1032,744,247,59],[485,1042,237,48],[589,920,120,120],[711,920,120,120],[1003,904,120,120],[833,1026,120,120],[491,393,99,286],[1123,171,128,141],[371,681,265,92],[477,107,106,284],[737,276,215,102],[455,917,132,123],[182,125,293,105],[435,0,293,105],[370,232,100,137],[1032,0,262,77],[922,453,267,67],[597,860,282,58],[1008,171,113,161],[182,492,157,158],[790,764,240,68],[737,189,269,85],[730,0,300,87],[942,604,240,68],[189,393,300,97],[942,674,240,68],[881,834,240,68],[1199,1139,80,124],[955,1026,120,120],[667,1148,180,60],[485,1092,180,60],[0,1205,180,60],[849,1148,180,60],[241,1164,180,60],[485,1154,180,60],[927,89,280,80],[922,522,220,80],[585,107,340,80],[241,1060,99,100],[638,716,150,142],[1199,927,50,210],[189,938,50,297],[0,910,187,171],[182,652,187,132],[182,232,186,159],[724,380,180,120],[1251,805,40,256],[1077,1026,120,120],[0,546,180,180],[0,728,180,180],[592,354,130,179],[638,535,130,179],[322,786,131,150],[341,492,131,150],[189,786,131,150],[770,502,150,129],[790,633,150,129],[1125,805,120,120],[363,1042,120,120],[182,0,251,123],[907,1252,240,40],[182,1258,240,40],[665,1252,240,40],[667,1210,240,40],[909,1210,240,40],[423,1216,240,40],[1184,634,100,100]]},
		{name:"storage_atlas_16", frames: [[0,42,90,90],[0,365,133,42],[92,84,240,33],[0,409,90,50],[0,461,90,50],[212,303,48,48],[311,605,48,48],[103,529,58,54],[386,193,40,41],[228,402,102,14],[103,604,102,33],[228,564,101,39],[386,236,112,58],[207,605,102,32],[331,564,101,39],[0,573,101,39],[52,303,97,60],[386,84,71,107],[151,303,59,97],[408,296,56,106],[434,507,51,67],[135,402,64,81],[0,134,263,30],[212,353,119,47],[329,476,99,42],[228,476,99,42],[92,485,99,42],[329,520,99,42],[0,529,99,42],[228,520,99,42],[52,271,220,30],[361,605,40,40],[334,84,50,158],[459,84,50,150],[0,166,50,150],[265,119,50,150],[92,409,40,55],[0,318,40,43],[496,40,10,11],[154,166,69,94],[52,166,100,73],[430,445,57,60],[484,0,23,38],[430,404,31,31],[434,576,50,50],[466,296,40,147],[168,639,40,40],[42,614,40,40],[126,639,40,40],[403,628,40,40],[0,614,40,40],[361,647,40,40],[84,639,40,40],[445,628,40,40],[210,639,40,40],[252,639,40,40],[228,449,200,25],[201,402,25,200],[228,422,200,25],[356,296,50,124],[225,166,24,97],[274,271,80,80],[0,0,240,40],[242,0,240,40],[294,42,200,40],[92,42,200,40]]}
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
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_for_pointer_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_category_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blesk_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.body_hair_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.body_makeup_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.category_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.category_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.category_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.category_4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.category_5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.category_6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.category_7_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.check_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.check_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.check_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.check_4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.check_5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.check_6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.check_7_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_3_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.decor_title_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.decor_title_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.decor_title_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.els_hair0_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.els_lips0_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.els_shad0_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.facebook_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.gubka_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_flower1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_flower1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_flower2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_flower3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_flower4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_flower5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_flower6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadow1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadow1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadow2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadow3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadow4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadow5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadow6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero2_body1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows0_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips0_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows0_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_de_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_es_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.kist2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.lipstick32_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.lipstick33_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.lipstick34_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.nav_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.pencil2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.pencil33_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.pencil7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.podvodka1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.podvodka1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.rastr1 = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.rastr2 = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.rastr3 = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.rouge14_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.rouge7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.rouge8_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_0_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_10_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_11_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_12_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_13_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_14_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_15_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_16_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_17_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_18_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_19_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_20_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_21_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_22_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_23_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_24_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_25_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_26_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_27_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_28_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_29_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_30_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_31_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_32_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_33_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_8_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_9_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_0_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_10_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_11_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_12_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_13_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_14_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_15_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_16_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_17_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_18_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_19_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_20_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_21_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_22_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_7_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_8_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_9_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.shadow_background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.shadow_background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.shadows19_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.shadows28_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.table0_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_de_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.title_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_redirect_img();
	this.instance.setTransform(-130,-56,0.929,0.929);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-56,260,111.5);
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
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],11.5,20,-14.9,-25.9).s().p("AiOELQh+gFguhRQgvhQA7hsQA7hwCEhMQCBhLB9AEQB9AEAvBRQAvBSg7BrQg6BviDBMQh7BIh4AAIgNAAg");
	this.shape.setTransform(-54,-91.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-4.4,11.6,5.8,-15.6).s().p("AgqB0QhJgNgmgpQgogqATgwQASgwA/gZQBBgaBHANQBKAKAmAqQAmAqgSAuQgTAxg/AYQgtAUgyAAQgTAAgVgDg");
	this.shape_1.setTransform(0.2,-117.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// graph
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,0.976],-1.6,-202.4,-1.4,65.4).s().p("AsdJ+QlLkIAAl2QAAl1FLkIQFKkIHTAAQHTAAFLEIQFLEIAAF1QAAF2lLEIQlLEInTAAQnTAAlKkIg");
	this.shape_2.setTransform(0.5,-47.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// graph
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(152,172,255,0)","#BFC2FF"],[0,1],0.9,8.8,0.9,75.8).s().p("AtnDnQlXlWgRngQAVFiFTD9QFpEQH+AAQH/AAFpkQQFQj7AYlfQgTHdlVFUQlpFpn/AAQn+AAlplpg");
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
	this.shape.graphics.f().s("#E22AA1").ss(12,1,1).p("AjPI5IKCl0QBIgpAdhOQAchOgchMQgchOhJgpIqCl0QhIgqhRAOQhSAPg1A/Qg2BAAABTIAALlQAABSA1BAQA1BABSAOQBRAPBJgpg");
	this.shape.setTransform(4.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#DDDDDD"],[0,1],9.3,-48,-25.7,63.1).s().p("AlpJTQhSgOg1hAQg1hAAAhSIAArlQAAhTA2hAQA1g/BSgPQBRgOBIAqIKCF0QBJApAcBOQAcBMgcBOQgdBOhIApIqCF0Qg1Aeg6AAQgVAAgWgEg");
	this.shape_1.setTransform(4.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.4,-66,122.1,132);
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
	this.shape.setTransform(400,300,1.167,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,0,1400,600);
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


(lib.title_filter_body_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_filter_en_img();
	this.instance.setTransform(-100,-20);

	this.instance_1 = new lib.title_filter_ru_img();
	this.instance_1.setTransform(-100,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-20,200,40);
p.frameBounds = [rect, rect];


(lib.title_filter_body_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_filter_3_en_img();
	this.instance.setTransform(1,1,0.95,0.95);

	this.instance_1 = new lib.title_filter_3_ru_img();
	this.instance_1.setTransform(1,1,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1,1,228,38);
p.frameBounds = [rect, rect];


(lib.title_filter_body_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_filter_2_en_img();

	this.instance_1 = new lib.title_filter_2_ru_img();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,240,40);
p.frameBounds = [rect, rect];


(lib.title_filter_body_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_filter_1_en_img();
	this.instance.setTransform(1,1,0.95,0.95);

	this.instance_1 = new lib.title_filter_1_ru_img();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1,1,228,38);
p.frameBounds = [rect, new cjs.Rectangle(0,0,240,40)];


(lib.title_filter_body_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_filter_0_en_img();
	this.instance.setTransform(1,1,0.95,0.95);

	this.instance_1 = new lib.title_filter_0_ru_img();
	this.instance_1.setTransform(1,1,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1,1,228,38);
p.frameBounds = [rect, rect];


(lib.table1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.table0_img();
	this.instance.setTransform(-125.5,-92.5);

	this.instance_1 = new lib.rastr1();
	this.instance_1.setTransform(-13,-4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125.5,-92.5,251,185.1);
p.frameBounds = [rect];


(lib.shadows28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows28_img();
	this.instance.setTransform(-75,-64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-64.5,150,129);
p.frameBounds = [rect];


(lib.shadows19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows19_img();
	this.instance.setTransform(-75,-64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-64.5,150,129);
p.frameBounds = [rect];


(lib.semicircular_arrow_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.semicircular_arrow_1_img();
	this.instance.setTransform(-120,-90);

	this.instance_1 = new lib.semicircular_arrow_2_img();
	this.instance_1.setTransform(-120,-90);

	this.instance_2 = new lib.semicircular_arrow_3_img();
	this.instance_2.setTransform(-120,-90);

	this.instance_3 = new lib.semicircular_arrow_4_img();
	this.instance_3.setTransform(-120,-90);

	this.instance_4 = new lib.semicircular_arrow_5_img();
	this.instance_4.setTransform(-120,-90);

	this.instance_5 = new lib.semicircular_arrow_6_img();
	this.instance_5.setTransform(-120,-90);

	this.instance_6 = new lib.semicircular_arrow_7_img();
	this.instance_6.setTransform(-120,-90);

	this.instance_7 = new lib.semicircular_arrow_8_img();
	this.instance_7.setTransform(-120,-90);

	this.instance_8 = new lib.semicircular_arrow_9_img();
	this.instance_8.setTransform(-120,-90);

	this.instance_9 = new lib.semicircular_arrow_10_img();
	this.instance_9.setTransform(-120,-90);

	this.instance_10 = new lib.semicircular_arrow_11_img();
	this.instance_10.setTransform(-120,-90);

	this.instance_11 = new lib.semicircular_arrow_12_img();
	this.instance_11.setTransform(-120,-90);

	this.instance_12 = new lib.semicircular_arrow_13_img();
	this.instance_12.setTransform(-120,-90);

	this.instance_13 = new lib.semicircular_arrow_14_img();
	this.instance_13.setTransform(-120,-90);

	this.instance_14 = new lib.semicircular_arrow_15_img();
	this.instance_14.setTransform(-120,-90);

	this.instance_15 = new lib.semicircular_arrow_16_img();
	this.instance_15.setTransform(-120,-90);

	this.instance_16 = new lib.semicircular_arrow_17_img();
	this.instance_16.setTransform(-120,-90);

	this.instance_17 = new lib.semicircular_arrow_18_img();
	this.instance_17.setTransform(-120,-90);

	this.instance_18 = new lib.semicircular_arrow_19_img();
	this.instance_18.setTransform(-120,-90);

	this.instance_19 = new lib.semicircular_arrow_20_img();
	this.instance_19.setTransform(-120,-90);

	this.instance_20 = new lib.semicircular_arrow_21_img();
	this.instance_20.setTransform(-120,-90);

	this.instance_21 = new lib.semicircular_arrow_22_img();
	this.instance_21.setTransform(-120,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[]},1).wait(3));

	// bg
	this.instance_22 = new lib.semicircular_arrow_0_img();
	this.instance_22.setTransform(-120,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-90,240,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.round_arrow_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.round_arrow_1_img();
	this.instance.setTransform(-115,-105);

	this.instance_1 = new lib.round_arrow_2_img();
	this.instance_1.setTransform(-115,-105);

	this.instance_2 = new lib.round_arrow_3_img();
	this.instance_2.setTransform(-115,-105);

	this.instance_3 = new lib.round_arrow_4_img();
	this.instance_3.setTransform(-115,-105);

	this.instance_4 = new lib.round_arrow_5_img();
	this.instance_4.setTransform(-115,-105);

	this.instance_5 = new lib.round_arrow_6_img();
	this.instance_5.setTransform(-115,-105);

	this.instance_6 = new lib.round_arrow_7_img();
	this.instance_6.setTransform(-115,-105);

	this.instance_7 = new lib.round_arrow_8_img();
	this.instance_7.setTransform(-115,-105);

	this.instance_8 = new lib.round_arrow_9_img();
	this.instance_8.setTransform(-115,-105);

	this.instance_9 = new lib.round_arrow_10_img();
	this.instance_9.setTransform(-115,-105);

	this.instance_10 = new lib.round_arrow_11_img();
	this.instance_10.setTransform(-115,-105);

	this.instance_11 = new lib.round_arrow_12_img();
	this.instance_11.setTransform(-115,-105);

	this.instance_12 = new lib.round_arrow_13_img();
	this.instance_12.setTransform(-115,-105);

	this.instance_13 = new lib.round_arrow_14_img();
	this.instance_13.setTransform(-115,-105);

	this.instance_14 = new lib.round_arrow_15_img();
	this.instance_14.setTransform(-115,-105);

	this.instance_15 = new lib.round_arrow_16_img();
	this.instance_15.setTransform(-115,-105);

	this.instance_16 = new lib.round_arrow_17_img();
	this.instance_16.setTransform(-115,-105);

	this.instance_17 = new lib.round_arrow_18_img();
	this.instance_17.setTransform(-115,-105);

	this.instance_18 = new lib.round_arrow_19_img();
	this.instance_18.setTransform(-115,-105);
	this.instance_18._off = true;

	this.instance_19 = new lib.round_arrow_20_img();
	this.instance_19.setTransform(-115,-105);

	this.instance_20 = new lib.round_arrow_21_img();
	this.instance_20.setTransform(-115,-105);

	this.instance_21 = new lib.round_arrow_22_img();
	this.instance_21.setTransform(-115,-105);

	this.instance_22 = new lib.round_arrow_23_img();
	this.instance_22.setTransform(-115,-105);

	this.instance_23 = new lib.round_arrow_24_img();
	this.instance_23.setTransform(-115,-105);

	this.instance_24 = new lib.round_arrow_25_img();
	this.instance_24.setTransform(-115,-105);

	this.instance_25 = new lib.round_arrow_26_img();
	this.instance_25.setTransform(-115,-105);

	this.instance_26 = new lib.round_arrow_27_img();
	this.instance_26.setTransform(-115,-105);

	this.instance_27 = new lib.round_arrow_28_img();
	this.instance_27.setTransform(-115,-105);

	this.instance_28 = new lib.round_arrow_29_img();
	this.instance_28.setTransform(-115,-105);

	this.instance_29 = new lib.round_arrow_30_img();
	this.instance_29.setTransform(-115,-105);

	this.instance_30 = new lib.round_arrow_31_img();
	this.instance_30.setTransform(-115,-105);

	this.instance_31 = new lib.round_arrow_32_img();
	this.instance_31.setTransform(-115,-105);

	this.instance_32 = new lib.round_arrow_33_img();
	this.instance_32.setTransform(-115,-105);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[]},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(19).to({_off:false},0).wait(3).to({_off:true},1).wait(17));

	// bg
	this.instance_33 = new lib.round_arrow_0_img();
	this.instance_33.setTransform(-115,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-105,230,210);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.rouge14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge14_img();
	this.instance.setTransform(-65.5,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.5,-75,131,150);
p.frameBounds = [rect];


(lib.rouge8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge8_img();
	this.instance.setTransform(-65.5,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.5,-75,131,150);
p.frameBounds = [rect];


(lib.rouge7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge7_img();
	this.instance.setTransform(-65.5,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.5,-75,131,150);
p.frameBounds = [rect];


(lib.rouge2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_rouge2_2_img();
	this.instance.setTransform(-66,-128);

	this.instance_1 = new lib.hero2_rouge2_1_img();
	this.instance_1.setTransform(-163,-91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-163,-128,326,256);
p.frameBounds = [rect];


(lib.rab1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_rouge1_4_img();
	this.instance.setTransform(-56.5,-80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.5,-80.5,113,161);
p.frameBounds = [rect];


(lib.r3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rastr3();
	this.instance.setTransform(-64.9,-89.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.9,-89.5,130,179);
p.frameBounds = [rect];


(lib.r2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rastr2();
	this.instance.setTransform(-64.9,-89.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.9,-89.5,130,179);
p.frameBounds = [rect];


(lib.podvodka1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.podvodka1_3_img();
	this.instance.setTransform(-20,-128);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-128,40,256);
p.frameBounds = [rect];


(lib.podvodka1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.podvodka1_1_img();
	this.instance.setTransform(-25,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-62,50,124);
p.frameBounds = [rect];


(lib.pencil33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil33_img();
	this.instance.setTransform(-12.5,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.5,-100,25,200);
p.frameBounds = [rect];


(lib.pencil7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil7_img();
	this.instance.setTransform(-100,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-12.5,200,25);
p.frameBounds = [rect];


(lib.pencil2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil2_img();
	this.instance.setTransform(-100,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-12.5,200,25);
p.frameBounds = [rect];


(lib.object_19_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A5ZZaQqiqiAAu4QAAu3KiqiQKiqiO3AAQO4AAKiKiQKiKiAAO3QAAO4qiKiQqiKiu4AAQu3AAqiqig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-230,460,460);
p.frameBounds = [rect];


(lib.object_18_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkXgBmIQABmIEVkWQEXkXGIAAQGIAAEXEXQEXEWAAGIQAAGIkXEXQkXEXmIAAQmIAAkXkXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.object_14_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ap8J8QkGkIgBl0QABl0EGkIQEIkGF0gBQF0ABEIEGQEHEIABF0QgBF0kHEIQkIEHl0ABQl0gBkIkHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.object_13_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBMgIAA4/IODAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-80,90,160);
p.frameBounds = [rect];


(lib.object_12_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A5ZZaQqiqiAAu4QAAu3KiqiQKiqiO3AAQO4AAKiKiQKiKiAAO3QAAO4qiKiQqiKiu4AAQu3AAqiqig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-230,460,460);
p.frameBounds = [rect];


(lib.object_12_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOMgIAA4/IMdAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-80,80,160);
p.frameBounds = [rect];


(lib.object_11_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.object_10_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOMgIAA4/IMdAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-80,80,160);
p.frameBounds = [rect];


(lib.object_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoRISQjbjcAAk2QAAk1DbjcQDcjcE1ABQE2gBDcDcQDcDcgBE1QABE2jcDcQjcDbk2AAQk1AAjcjbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.object_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnwFflfQFflfHwAAQHxAAFeFfQFgFfAAHwQAAHxlgFfQleFfnxAAQnwAAlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.object_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ap7J8QkIkHAAl1QAAl0EIkHQEHkIF0AAQF0AAEIEIQEIEHAAF0QAAF1kIEHQkIEIl0AAQl0AAkHkIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.object_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzPnIAA/NIPnAAIAAfNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-100,100,200);
p.frameBounds = [rect];


(lib.object_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDHCIAAuDIcHAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-45,180,90);
p.frameBounds = [rect];


(lib.object_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuH0IAAvnMAldAAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-50,240,100);
p.frameBounds = [rect];


(lib.object_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDHCIAAuDIcHAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-45,180,90);
p.frameBounds = [rect];


(lib.object_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.object_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoRISQjcjcABk2QgBk1DcjcQDcjbE1AAQE2AADcDbQDcDcgBE1QABE2jcDcQjcDck2gBQk1ABjcjcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.object_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I1QjpjrgBlKQABlKDpjrQDrjpFKgBQFKABDrDpQDqDrABFKQgBFKjqDrQjrDqlKABQlKgBjrjqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
p.frameBounds = [rect];


(lib.lipstick34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick34_img();
	this.instance.setTransform(-25,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-75,50,150);
p.frameBounds = [rect];


(lib.lipstick33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick33_img();
	this.instance.setTransform(-25,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-75,50,150);
p.frameBounds = [rect];


(lib.lipstick32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick32_img();
	this.instance.setTransform(-25,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-75,50,150);
p.frameBounds = [rect];


(lib.kist2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kist2_img();
	this.instance.setTransform(-25,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-79,50,158);
p.frameBounds = [rect];


(lib.indicator_part_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_part_4_img();
	this.instance.setTransform(-20,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.indicator_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_2_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,220,30);
p.frameBounds = [rect];


(lib.indicator_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.indicator_1_img();
	this.instance.setTransform(-140,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-40,280,80);
p.frameBounds = [rect];


(lib.hint_filter_arrow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hint_filter_arrow_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.hint_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hint_2_img();
	this.instance.setTransform(-33,-51.1,0.825,0.825);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33,-51.1,66,102.3);
p.frameBounds = [rect];


(lib.hint_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hint_1_img();
	this.instance.setTransform(-110,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-80,220,160);
p.frameBounds = [rect];


(lib.hero2_shadows1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shadows1_img();
	this.instance.setTransform(-134.5,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-134.5,-42.5,269,85);
p.frameBounds = [rect];


(lib.hero2_shadows0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shadows0_img();
	this.instance.setTransform(-120,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-34,240,68);
p.frameBounds = [rect];


(lib.hero2_rouge1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_rouge1_5_img();
	this.instance.setTransform(-176,-132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-176,-132,352,264);
p.frameBounds = [rect];


(lib.hero2_rouge1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_rouge1_3_img();
	this.instance.setTransform(-176,-132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-176,-132,352,264);
p.frameBounds = [rect];


(lib.hero2_rouge1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_rouge1_2_img();
	this.instance.setTransform(-176,-132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-176,-132,352,264);
p.frameBounds = [rect];


(lib.hero2_rouge1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_rouge1_1_img();
	this.instance.setTransform(-176,-132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-176,-132,352,264);
p.frameBounds = [rect];


(lib.hero2_lips1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips1_img();
	this.instance.setTransform(-49.5,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-21,99,42);
p.frameBounds = [rect];


(lib.hero2_lips0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips0_img();
	this.instance.setTransform(-59.5,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.5,-23.5,119,47);
p.frameBounds = [rect];


(lib.hero2_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_head_img();
	this.instance.setTransform(-184.5,-194.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-184.5,-194.5,369,389);
p.frameBounds = [rect];


(lib.hero2_hat_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat1_img();
	this.instance.setTransform(-188.5,-81.5);

	this.instance_1 = new lib.hero2_hat2_img();
	this.instance_1.setTransform(-166.5,-42.5);

	this.instance_2 = new lib.hero2_hat3_img();
	this.instance_2.setTransform(-197,-64);

	this.instance_3 = new lib.hero2_hat4_img();
	this.instance_3.setTransform(-203,-75);

	this.instance_4 = new lib.hero2_hat5_img();
	this.instance_4.setTransform(-180,-32);

	this.instance_5 = new lib.hero2_hat6_img();
	this.instance_5.setTransform(-179,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-188.5,-81.5,377,163);
p.frameBounds = [rect, new cjs.Rectangle(-166.5,-42.5,348,198), new cjs.Rectangle(-197,-64,410,166), new cjs.Rectangle(-203,-75,420,231), new cjs.Rectangle(-180,-32,374,143), new cjs.Rectangle(-179,-60,347,186), null];


(lib.hero2_hair0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hair0_img();
	this.instance.setTransform(-163.5,-142);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-163.5,-142,327,284);
p.frameBounds = [rect];


(lib.hero2_fringe0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe0_img();
	this.instance.setTransform(-182,-126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-182,-126,364,252);
p.frameBounds = [rect];


(lib.hero2_eyes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes1_3_img();
	this.instance.setTransform(-141.4,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.4,-16.5,282,58);
p.frameBounds = [rect];


(lib.hero2_eyes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero2_eyes1_1_img();
	this.instance.setTransform(-131,-38.5);

	this.instance_1 = new lib.hero2_eyes1_2_img();
	this.instance_1.setTransform(-133.9,-28.5);

	this.instance_2 = new lib.hero2_eyes1_3_img();
	this.instance_2.setTransform(-141.4,-16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},24).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(44));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131,-38.5,262,77);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-133.9,-28.5,267,67), rect, rect=new cjs.Rectangle(-141.4,-16.5,282,58), rect, rect=new cjs.Rectangle(-133.9,-28.5,267,67), rect, rect=new cjs.Rectangle(-131,-38.5,262,77), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero2_eyebrows0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyebrows0_img();
	this.instance.setTransform(-131.5,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131.5,-15,263,30);
p.frameBounds = [rect];


(lib.hero2_earring6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring6_img();
	this.instance.setTransform(112.2,-40.5);

	this.instance_1 = new lib.hero2_earring6_img();
	this.instance_1.setTransform(-176.1,-40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-176.1,-40.5,352.3,81);
p.frameBounds = [rect];


(lib.hero2_earring5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring5_img();
	this.instance.setTransform(176.5,-33.5,1,1,0,0,180);

	this.instance_1 = new lib.hero2_earring5_img();
	this.instance_1.setTransform(-176.5,-33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-176.5,-33.5,353.1,67);
p.frameBounds = [rect];


(lib.hero2_earring4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring4_img();
	this.instance.setTransform(118.2,-53);

	this.instance_1 = new lib.hero2_earring4_img();
	this.instance_1.setTransform(-174.2,-53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-174.2,-53,348.4,106);
p.frameBounds = [rect];


(lib.hero2_earring3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring3_img();
	this.instance.setTransform(93,-68.5);

	this.instance_1 = new lib.hero2_earring3_img();
	this.instance_1.setTransform(-193,-68.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193,-68.5,386,137);
p.frameBounds = [rect];


(lib.hero2_earring2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring2_img();
	this.instance.setTransform(174,-48.5,1,1,0,0,180);

	this.instance_1 = new lib.hero2_earring2_img();
	this.instance_1.setTransform(-174,-48.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-174,-48.5,348,97);
p.frameBounds = [rect];


(lib.hero2_earring1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring1_img();
	this.instance.setTransform(114.5,-51.5);

	this.instance_1 = new lib.hero2_earring1_img();
	this.instance_1.setTransform(-185.5,-55.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-185.5,-55.4,371,110.9);
p.frameBounds = [rect];


(lib.hero2_body1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_body1_img();
	this.instance.setTransform(-205,-79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-79.5,410,159);
p.frameBounds = [rect];


(lib.hero1_shadow1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shadow1_2_img();
	this.instance.setTransform(-66,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66,-61.5,132,123);
p.frameBounds = [rect];


(lib.hero1_shadow1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shadow1_1_img();
	this.instance.setTransform(-146.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-146.5,-61.5,293,123);
p.frameBounds = [rect];


(lib.hero1_rouge1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_rouge1_4_img();
	this.instance.setTransform(-48.5,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.5,-30,97,60);
p.frameBounds = [rect];


(lib.hero1_rouge1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_rouge1_3_img();
	this.instance.setTransform(-156.5,-149);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-156.5,-149,313,298);
p.frameBounds = [rect];


(lib.hero1_rouge1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_rouge1_2_img();
	this.instance.setTransform(-156.5,-149);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-156.5,-149,313,298);
p.frameBounds = [rect];


(lib.hero1_rouge1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_rouge1_1_img();
	this.instance.setTransform(-156.5,-149);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-156.5,-149,313,298);
p.frameBounds = [rect];


(lib.hero1_lips1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips1_2_img();
	this.instance.setTransform(-51,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51,-16.5,102,33);
p.frameBounds = [rect];


(lib.hero1_lips1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips1_1_img();
	this.instance.setTransform(-51,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51,-7,102,14);
p.frameBounds = [rect];


(lib.hero1_hat1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat1_img();
	this.instance.setTransform(-206.5,-122);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-206.5,-122,413,244);
p.frameBounds = [rect];


(lib.hero1_hair_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-254.5,-274);

	this.instance_1 = new lib.hero1_hair2_img();
	this.instance_1.setTransform(-286.2,-305.8,1.45,1.45);

	this.instance_2 = new lib.hero1_hair3_img();
	this.instance_2.setTransform(-224,-298.1,1.45,1.45);

	this.instance_3 = new lib.hero1_hair4_img();
	this.instance_3.setTransform(-271,-290.4,1.4,1.4);

	this.instance_4 = new lib.hero1_hair5_img();
	this.instance_4.setTransform(-275.6,-288.9,1.4,1.4);

	this.instance_5 = new lib.hero1_hair6_img();
	this.instance_5.setTransform(-269.9,-272.3,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.5,-274,509,548);
p.frameBounds = [rect, new cjs.Rectangle(-286.2,-305.8,462.6,730.8), new cjs.Rectangle(-224,-298.1,436.5,562.6), new cjs.Rectangle(-271,-290.4,511,716.8), new cjs.Rectangle(-275.6,-288.9,466.2,714), new cjs.Rectangle(-269.9,-272.3,443.8,691.6)];


(lib.hero1_flower1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_flower1_2_img();
	this.instance.setTransform(-20,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20.5,40,41);
p.frameBounds = [rect];


(lib.hero1_flower1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_flower1_1_img();
	this.instance.setTransform(-29,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29,-27,58,54);
p.frameBounds = [rect];


(lib.gubka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gubka_img();
	this.instance.setTransform(-100,-106);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-106,200,212);
p.frameBounds = [rect];


(lib.filters_body_open_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.filters_open_img();
	this.instance.setTransform(-45,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect];


(lib.filters_body_exit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.filters_exit_img();
	this.instance.setTransform(-45,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect];


(lib.filters_bg_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.filters_bg_img();
	this.instance.setTransform(-190,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-130,380,260);
p.frameBounds = [rect];


(lib.eyes3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.eyes3_img();
	this.instance.setTransform(3.2,36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(3.2,36.1,240,33);
p.frameBounds = [rect];


(lib.eyes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyes2_img();
	this.instance.setTransform(7.7,11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(7.7,11.4,237,48);
p.frameBounds = [rect];


(lib.eyes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyes1_img();
	this.instance.setTransform(1.2,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1.2,-0.3,247,59);
p.frameBounds = [rect];


(lib.els_shad0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.els_shad0_img();
	this.instance.setTransform(-31.1,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.1,-0.4,261,71);
p.frameBounds = [rect];


(lib.els_hair01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.els_hair0_img();
	this.instance.setTransform(-83.3,-104.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.3,-104.2,297,315);
p.frameBounds = [rect];


(lib.decor_title_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_title_3_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.decor_title_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_title_2_img();
	this.instance.setTransform(-55,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.decor_title_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_title_1_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.checkpoint_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AmOPnIAA/NIMdAAIAAfNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-100,80,200);
p.frameBounds = [rect];


(lib.check_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_1_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,es:4,pt:5,tr:6,ja:7,hi:8});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-190,-190);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-190,-190);

	this.instance_2 = new lib.title_de_img();
	this.instance_2.setTransform(-190,-190);

	this.instance_3 = new lib.title_fr_img();
	this.instance_3.setTransform(-190,-190);

	this.instance_4 = new lib.title_es_img();
	this.instance_4.setTransform(-190,-190);

	this.instance_5 = new lib.title_pt_img();
	this.instance_5.setTransform(-190,-190);

	this.instance_6 = new lib.title_tr_img();
	this.instance_6.setTransform(-190,-190);

	this.instance_7 = new lib.title_ja_img();
	this.instance_7.setTransform(-190,-190);

	this.instance_8 = new lib.title_hi_img();
	this.instance_8.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_pointer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pointer_img();
	this.instance.setTransform(-112,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112,-59,120,120);
p.frameBounds = [rect];


(lib.body_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_img();
	this.instance.setTransform(-90,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-60,180,120);
p.frameBounds = [rect];


(lib.body_category_1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.category_7_img();
	this.instance.setTransform(-75,-75,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.body_category_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.category_6_img();
	this.instance.setTransform(-80,-80,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.body_category_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.category_5_img();
	this.instance.setTransform(-80,-80,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.body_category_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.category_4_img();
	this.instance.setTransform(-80,-80,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.body_category_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.category_3_img();
	this.instance.setTransform(-80,-80,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.body_category_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.category_2_img();
	this.instance.setTransform(-80,-80,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.body_category_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.category_1_img();
	this.instance.setTransform(-80,-80,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.blesk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blesk_img();
	this.instance.setTransform(-75,-81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.5,150,163);
p.frameBounds = [rect];


(lib.bg_title_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_img();
	this.instance.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect];


(lib.bg_category_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_category_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("Ao0I1QjrjqAAlLQAAlKDrjqQDqjrFKAAQFLAADqDrQDrDqAAFKQAAFLjrDqQjqDrlLAAQlKAAjqjrg");
	this.shape.setTransform(9.1,9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("Ap8J8QkGkIgBl0QABlzEGkIQEJkHFzAAQFzAAEJEHQEHEIABFzQgBF0kHEIQkJEHlzABQlzgBkJkHg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.animation_for_pointer_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.animation_for_pointer_1_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
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
	this.shape.graphics.f("#FFFFFF").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
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


(lib.radio_button_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.radio_button_0_img();
	this.instance.setTransform(-20,-20,0.222,0.222);

	this.instance_1 = new lib.radio_button_1_img();
	this.instance_1.setTransform(-20,-20,0.222,0.222);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect, rect];


(lib.output_numbers_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// numbers
	this.instance = new lib.output_numbers_0_img();
	this.instance.setTransform(-20,-20);

	this.instance_1 = new lib.output_numbers_1_img();
	this.instance_1.setTransform(-20,-20);

	this.instance_2 = new lib.output_numbers_2_img();
	this.instance_2.setTransform(-20,-20);

	this.instance_3 = new lib.output_numbers_3_img();
	this.instance_3.setTransform(-20,-20);

	this.instance_4 = new lib.output_numbers_4_img();
	this.instance_4.setTransform(-20,-20);

	this.instance_5 = new lib.output_numbers_5_img();
	this.instance_5.setTransform(-20,-20);

	this.instance_6 = new lib.output_numbers_6_img();
	this.instance_6.setTransform(-20,-20);

	this.instance_7 = new lib.output_numbers_7_img();
	this.instance_7.setTransform(-20,-20);

	this.instance_8 = new lib.output_numbers_8_img();
	this.instance_8.setTransform(-20,-20);

	this.instance_9 = new lib.output_numbers_9_img();
	this.instance_9.setTransform(-20,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.ParticleGravityExplosionMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gravity_explosion_1_img();
	this.instance.setTransform(-18,-18,0.75,0.75);

	this.instance_1 = new lib.gravity_explosion_2_img();
	this.instance_1.setTransform(-24,-24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect, new cjs.Rectangle(-24,-24,48,48)];


(lib.bubble_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// viewer
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Eg+fAnEMAAAhOHMB8/AAAMAAABOHg");
	this.shape.setTransform(600,300,1.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,600);
p.frameBounds = [rect];


(lib.blinking_light_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_1_img();
	this.instance.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.track_move_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.track_move_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
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


(lib.next_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_1_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
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


(lib.facebook_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.facebook_img();
	this.instance.setTransform(-60,-60,0.667,0.667);

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
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,it:4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,ar:10,id:11,zh:12});

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
	this.shape.setTransform(400,300,1.017,1.033);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-10,1220,620);
p.frameBounds = [rect];


(lib.redirect_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_redirect_mc();
	this.instance.setTransform(5,462,1,1,0,0,0,5,262);

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
p.nominalBounds = rect = new cjs.Rectangle(-56.4,-66,122.1,132);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-61.2,-69.3,128.2,138.6), new cjs.Rectangle(-66,-72.6,134.3,145.1), new cjs.Rectangle(-70.8,-75.9,140.4,151.8), new cjs.Rectangle(-75.7,-79.2,146.5,158.4), new cjs.Rectangle(-80.5,-82.5,152.7,165), new cjs.Rectangle(-78.4,-82.5,152.6,165), new cjs.Rectangle(-76.4,-82.5,152.6,165), new cjs.Rectangle(-74.4,-82.5,152.6,165), new cjs.Rectangle(-72.4,-82.5,152.6,165), new cjs.Rectangle(-70.5,-82.5,152.6,165), new cjs.Rectangle(-68.5,-82.5,152.6,165), new cjs.Rectangle(-66.5,-82.5,152.6,165), new cjs.Rectangle(-64.5,-82.5,152.6,165), new cjs.Rectangle(-62.5,-82.5,152.6,165), new cjs.Rectangle(-60.5,-82.5,152.7,165), new cjs.Rectangle(-59.7,-79.2,146.5,158.4), new cjs.Rectangle(-58.9,-75.9,140.4,151.8), new cjs.Rectangle(-58.1,-72.6,134.3,145.1), new cjs.Rectangle(-57.2,-69.3,128.2,138.6), rect=new cjs.Rectangle(-56.4,-66,122.1,132), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-300,0,1400,600);
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


(lib.ts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.table1();
	this.instance.setTransform(304.5,91);

	this.instance_1 = new lib.table1();
	this.instance_1.setTransform(-304.5,91);

	this.instance_2 = new lib.table1();
	this.instance_2.setTransform(304.5,-90.9);

	this.instance_3 = new lib.table1();
	this.instance_3.setTransform(-304.5,-90.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-430,-183.5,860,367.1);
p.frameBounds = [rect];


(lib.title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		устанавливаем рус. или англ. название
		https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be"))
		{
			this.body_mc.gotoAndStop("ru");
		}
		else if (lang_str == "de")
		{
			this.body_mc.gotoAndStop("de");
		}
		else if (lang_str == "fr")
		{
			this.body_mc.gotoAndStop("fr");
		}
		else if (lang_str == "es")
		{
			this.body_mc.gotoAndStop("es");
		}
		else if (lang_str == "pt")
		{
			this.body_mc.gotoAndStop("pt");
		}
		else if (lang_str == "tr")
		{
			this.body_mc.gotoAndStop("tr");
		}
		else if (lang_str == "ja")
		{
			this.body_mc.gotoAndStop("ja");
		}
		else if (lang_str == "hi")
		{
			this.body_mc.gotoAndStop("hi");
		}
		else
		{
			this.body_mc.gotoAndStop("en");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect];


(lib.title_filter_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		устанавливаем рус. или англ. название
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		if((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be"))
		{
			this.body_mc.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.title_filter_body_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);
	this.body_mc.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.5,-19.5,200,40);
p.frameBounds = [rect];


(lib.title_filter_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		устанавливаем рус. или англ. название
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		if((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be"))
		{
			this.body_mc.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.title_filter_body_3_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);
	this.body_mc.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1.5,1.5,228,38);
p.frameBounds = [rect];


(lib.title_filter_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		устанавливаем рус. или англ. название
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		if((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be"))
		{
			this.body_mc.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.title_filter_body_2_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);
	this.body_mc.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.5,0.5,240,40);
p.frameBounds = [rect];


(lib.title_filter_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		устанавливаем рус. или англ. название
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		if((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be"))
		{
			this.body_mc.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.title_filter_body_1_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);
	this.body_mc.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1.5,1.5,228,38);
p.frameBounds = [rect];


(lib.title_filter_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		устанавливаем рус. или англ. название
		*/
		this.stop();
		this.body_mc.gotoAndStop(0);
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		if((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be"))
		{
			this.body_mc.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.title_filter_body_0_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);
	this.body_mc.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1.5,1.5,228,38);
p.frameBounds = [rect];


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.table1();
	this.instance.setTransform(304.5,91);

	this.instance_1 = new lib.table1();
	this.instance_1.setTransform(-304.5,91);

	this.instance_2 = new lib.table1();
	this.instance_2.setTransform(304.5,-90.9);

	this.instance_3 = new lib.table1();
	this.instance_3.setTransform(-304.5,-90.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-430,-183.5,860,367.1);
p.frameBounds = [rect];


(lib.semicircular_arrow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_3 = new lib.checkpoint_mc();
	this.checkpoint_3.setTransform(28,-62,1,1,-45);
	this.checkpoint_3.alpha = 0.012;

	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(-100,40,1,1,-45);
	this.checkpoint_1.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.setTransform(-70,-45,1,1,-45);
	this.checkpoint_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_2},{t:this.checkpoint_1},{t:this.checkpoint_3}]}).wait(1));

	// graph
	this.instance = new lib.semicircular_arrow_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.round_arrow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_3 = new lib.checkpoint_mc();
	this.checkpoint_3.setTransform(-20,-80);
	this.checkpoint_3.alpha = 0.012;

	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(-20,80);
	this.checkpoint_1.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.setTransform(-80,0,1,1,-90);
	this.checkpoint_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_2},{t:this.checkpoint_1},{t:this.checkpoint_3}]}).wait(1));

	// graph
	this.instance = new lib.round_arrow_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.rouge1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_rouge1_5();
	this.instance.setTransform(0,6);

	this.instance_1 = new lib.rab1_1();
	this.instance_1.setTransform(-1.9,-53);

	this.instance_2 = new lib.hero2_rouge1_3();
	this.instance_2.setTransform(0,-5.9);

	this.instance_3 = new lib.hero2_rouge1_2();
	this.instance_3.setTransform(0,-5.9);

	this.instance_4 = new lib.hero2_rouge1_1();
	this.instance_4.setTransform(0,-5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-176,-137.9,352,276);
p.frameBounds = [rect];


(lib.rouge_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge1();

	this.instance_1 = new lib.rouge2();
	this.instance_1.setTransform(-10.3,0.3);

	this.instance_2 = new lib.hero2_rouge3_img();
	this.instance_2.setTransform(-150.9,-114);

	this.instance_3 = new lib.hero2_rouge4_img();
	this.instance_3.setTransform(-148.9,-112.5);

	this.instance_4 = new lib.hero2_rouge5_img();
	this.instance_4.setTransform(-147.4,-87.5);

	this.instance_5 = new lib.hero2_rouge6_img();
	this.instance_5.setTransform(-156.9,-144);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-176,-137.9,352,276);
p.frameBounds = [rect, new cjs.Rectangle(-173.3,-127.7,326,256), new cjs.Rectangle(-150.9,-114,301,251), new cjs.Rectangle(-148.9,-112.5,300,254), new cjs.Rectangle(-147.4,-87.5,292,208), new cjs.Rectangle(-156.9,-144,308,297), null];


(lib.rab1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.rastr2();
	this.instance.setTransform(-64.5,-87.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.rab1_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.rastr3();
	this.instance_2.setTransform(-64.5,-87.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.5,-87.9,130,179);
p.frameBounds = [rect];


(lib.nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApAECIiygXQA3jcg3j5ICogIIAokCIUVH0I0JH1g");

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


(lib.makeup2_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 16
	this.instance = new lib.lipstick34();
	this.instance.setTransform(316,498.7,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:328,y:478.7},6).to({x:359,y:470.7},6).to({x:381},6).to({x:409,y:482.7},7).to({x:370,y:490.4},7).to({x:334,y:482.4},7).to({x:227,y:579.4},9).to({_off:true},1).wait(1));

	// hero2_fringe0
	this.instance_1 = new lib.hero2_fringe0();
	this.instance_1.setTransform(400,214.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

	// hero2_eyes1
	this.instance_2 = new lib.hero2_eyes1();
	this.instance_2.setTransform(402,319.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

	// Слой 4
	this.instance_3 = new lib.hero2_lips1();
	this.instance_3.setTransform(402.7,427.7);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({alpha:1},33).wait(11));

	// hero2_lips0
	this.instance_4 = new lib.hero2_lips0();
	this.instance_4.setTransform(401.5,425.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50));

	// Слой 3
	this.instance_5 = new lib.hero2_shadows1();
	this.instance_5.setTransform(404.5,307.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50));

	// Слой 5
	this.instance_6 = new lib.hero2_rouge1_5();
	this.instance_6.setTransform(403.3,293);

	this.instance_7 = new lib.rab1_1();
	this.instance_7.setTransform(401.4,233.9);

	this.instance_8 = new lib.hero2_rouge1_3();
	this.instance_8.setTransform(403.3,281);

	this.instance_9 = new lib.hero2_rouge1_2();
	this.instance_9.setTransform(403.3,281);

	this.instance_10 = new lib.hero2_rouge1_1();
	this.instance_10.setTransform(403.3,281);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).wait(50));

	// hero2_hair0
	this.instance_11 = new lib.hero2_eyebrows0();
	this.instance_11.setTransform(402.5,267.8);

	this.instance_12 = new lib.hero2_head();
	this.instance_12.setTransform(401.5,297);

	this.instance_13 = new lib.hero2_body1();
	this.instance_13.setTransform(405,520.5);

	this.instance_14 = new lib.hero2_hair0();
	this.instance_14.setTransform(404,458.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]}).wait(50));

	// Layer 3
	this.instance_15 = new lib.t2();
	this.instance_15.setTransform(397.5,419.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(39).to({y:751.6,alpha:0.012},9).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,88.8,860,514.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,88.8,860,551.3), new cjs.Rectangle(-32.5,88.8,860,588.2), new cjs.Rectangle(-32.5,88.8,860,625.1), new cjs.Rectangle(-32.5,88.8,860,662), new cjs.Rectangle(-32.5,88.8,860,698.8), new cjs.Rectangle(-32.5,88.8,860,735.7), new cjs.Rectangle(-32.5,88.8,860,772.6), new cjs.Rectangle(-32.5,88.8,860,809.5), new cjs.Rectangle(-32.5,88.8,860,846.4), new cjs.Rectangle(200,88.8,410,511.7)];


(lib.makeup2_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 16
	this.instance = new lib.lipstick34();
	this.instance.setTransform(625,422.4,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:30,x:316,y:498.7},9).wait(1));

	// hero2_fringe0
	this.instance_1 = new lib.hero2_fringe0();
	this.instance_1.setTransform(400,214.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// hero2_eyes1
	this.instance_2 = new lib.hero2_eyes1();
	this.instance_2.setTransform(402,319.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// hero2_lips0
	this.instance_3 = new lib.hero2_lips0();
	this.instance_3.setTransform(401.5,425.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// Слой 3
	this.instance_4 = new lib.hero2_shadows1();
	this.instance_4.setTransform(404.5,307.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// Слой 5
	this.instance_5 = new lib.hero2_rouge1_5();
	this.instance_5.setTransform(403.3,293);

	this.instance_6 = new lib.rab1_1();
	this.instance_6.setTransform(401.4,233.9);

	this.instance_7 = new lib.hero2_rouge1_3();
	this.instance_7.setTransform(403.3,281);

	this.instance_8 = new lib.hero2_rouge1_2();
	this.instance_8.setTransform(403.3,281);

	this.instance_9 = new lib.hero2_rouge1_1();
	this.instance_9.setTransform(403.3,281);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(10));

	// hero2_hair0
	this.instance_10 = new lib.hero2_eyebrows0();
	this.instance_10.setTransform(402.5,267.8);

	this.instance_11 = new lib.hero2_head();
	this.instance_11.setTransform(401.5,297);

	this.instance_12 = new lib.hero2_body1();
	this.instance_12.setTransform(405,520.5);

	this.instance_13 = new lib.hero2_hair0();
	this.instance_13.setTransform(404,458.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).wait(10));

	// Layer 3
	this.instance_14 = new lib.table1();
	this.instance_14.setTransform(702,510.6);

	this.instance_15 = new lib.table1();
	this.instance_15.setTransform(93,510.6);

	this.instance_16 = new lib.table1();
	this.instance_16.setTransform(702,328.7);

	this.instance_17 = new lib.table1();
	this.instance_17.setTransform(93,328.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,88.8,860,514.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup2_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_110 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(110).call(this.frame_110).wait(1));

	// Слой 7
	this.instance = new lib.kist2();
	this.instance.setTransform(94.3,406.9,1,1,154.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:103.3},3).to({x:94.3},3).to({x:103.3},3).to({rotation:34.3,x:260.3,y:357.6},7).to({x:310.3,y:345.6},11).to({x:325.6,y:382.6},10).to({x:260.6,y:369.4},8).to({x:323.6,y:395.8},9).to({x:410.6},6).to({x:433.6,y:355.8},8).to({x:488.6,y:364.8},8).to({x:410.1,y:395.8},8).to({x:450.1},8).to({x:481.1,y:369.4},8).to({y:576.4,alpha:0.012},9).to({_off:true},1).wait(1));

	// Слой 6
	this.instance_1 = new lib.shadows28();
	this.instance_1.setTransform(164.5,440.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({y:631.7,alpha:0.012},7).to({_off:true},1).wait(94));

	// Слой 16
	this.instance_2 = new lib.lipstick34();
	this.instance_2.setTransform(625,422.4,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(111));

	// hero2_fringe0
	this.instance_3 = new lib.hero2_fringe0();
	this.instance_3.setTransform(400,214.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(111));

	// hero2_eyes1
	this.instance_4 = new lib.hero2_eyes2();
	this.instance_4.setTransform(402,319.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(111));

	// hero2_lips0
	this.instance_5 = new lib.hero2_lips0();
	this.instance_5.setTransform(401.5,425.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(111));

	// Слой 3
	this.instance_6 = new lib.hero2_shadows1();
	this.instance_6.setTransform(404.5,307.8);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16).to({_off:false},0).to({alpha:1},84).wait(11));

	// hero2_shadows0
	this.instance_7 = new lib.hero2_shadows0();
	this.instance_7.setTransform(401.5,315.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},100).wait(11));

	// Слой 5
	this.instance_8 = new lib.hero2_rouge1_5();
	this.instance_8.setTransform(403.3,293);

	this.instance_9 = new lib.rab1_1();
	this.instance_9.setTransform(401.4,233.9);

	this.instance_10 = new lib.hero2_rouge1_3();
	this.instance_10.setTransform(403.3,281);

	this.instance_11 = new lib.hero2_rouge1_2();
	this.instance_11.setTransform(403.3,281);

	this.instance_12 = new lib.hero2_rouge1_1();
	this.instance_12.setTransform(403.3,281);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(111));

	// hero2_hair0
	this.instance_13 = new lib.hero2_eyebrows0();
	this.instance_13.setTransform(402.5,267.8);

	this.instance_14 = new lib.hero2_head();
	this.instance_14.setTransform(401.5,297);

	this.instance_15 = new lib.hero2_body1();
	this.instance_15.setTransform(405,520.5);

	this.instance_16 = new lib.hero2_hair0();
	this.instance_16.setTransform(404,458.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(111));

	// Layer 3
	this.instance_17 = new lib.table1();
	this.instance_17.setTransform(702,510.6);

	this.instance_18 = new lib.table1();
	this.instance_18.setTransform(93,510.6);

	this.instance_19 = new lib.table1();
	this.instance_19.setTransform(702,328.7);

	this.instance_20 = new lib.table1();
	this.instance_20.setTransform(93,328.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,88.8,860,514.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,88.8,860,525.6), new cjs.Rectangle(-32.5,88.8,860,552.9), new cjs.Rectangle(-32.5,88.8,860,580.1), new cjs.Rectangle(-32.5,88.8,860,607.4), rect=new cjs.Rectangle(-32.5,88.8,860,514.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,88.8,860,520.9), new cjs.Rectangle(-32.5,88.8,860,543.9), new cjs.Rectangle(-32.5,88.8,860,567), new cjs.Rectangle(-32.5,88.8,860,514.4)];


(lib.makeup2_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 7
	this.instance = new lib.kist2();
	this.instance.setTransform(-97.6,214.9,1,1,79.3);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:154.3,x:94.3,y:406.9,alpha:1},9).wait(1));

	// Слой 6
	this.instance_1 = new lib.shadows28();
	this.instance_1.setTransform(703.5,252,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:164.5,y:440.7},9).wait(1));

	// Слой 16
	this.instance_2 = new lib.lipstick34();
	this.instance_2.setTransform(625,422.4,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// hero2_fringe0
	this.instance_3 = new lib.hero2_fringe0();
	this.instance_3.setTransform(400,214.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// hero2_eyes1
	this.instance_4 = new lib.hero2_eyes1();
	this.instance_4.setTransform(402,319.8);

	this.instance_5 = new lib.hero2_eyes2();
	this.instance_5.setTransform(402,319.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},9).wait(1));

	// hero2_lips0
	this.instance_6 = new lib.hero2_lips0();
	this.instance_6.setTransform(401.5,425.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// hero2_shadows0
	this.instance_7 = new lib.hero2_shadows0();
	this.instance_7.setTransform(401.5,315.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// Слой 5
	this.instance_8 = new lib.hero2_rouge1_5();
	this.instance_8.setTransform(403.3,293);

	this.instance_9 = new lib.rab1_1();
	this.instance_9.setTransform(401.4,233.9);

	this.instance_10 = new lib.hero2_rouge1_3();
	this.instance_10.setTransform(403.3,281);

	this.instance_11 = new lib.hero2_rouge1_2();
	this.instance_11.setTransform(403.3,281);

	this.instance_12 = new lib.hero2_rouge1_1();
	this.instance_12.setTransform(403.3,281);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(10));

	// hero2_hair0
	this.instance_13 = new lib.hero2_eyebrows0();
	this.instance_13.setTransform(402.5,267.8);

	this.instance_14 = new lib.hero2_head();
	this.instance_14.setTransform(401.5,297);

	this.instance_15 = new lib.hero2_body1();
	this.instance_15.setTransform(405,520.5);

	this.instance_16 = new lib.hero2_hair0();
	this.instance_16.setTransform(404,458.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(10));

	// Layer 3
	this.instance_17 = new lib.table1();
	this.instance_17.setTransform(702,510.6);

	this.instance_18 = new lib.table1();
	this.instance_18.setTransform(93,510.6);

	this.instance_19 = new lib.table1();
	this.instance_19.setTransform(702,328.7);

	this.instance_20 = new lib.table1();
	this.instance_20.setTransform(93,328.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-179.9,88.8,1007.4,514.4);
p.frameBounds = [rect, new cjs.Rectangle(-156.2,88.8,983.8,514.4), new cjs.Rectangle(-136.1,88.8,963.7,514.4), new cjs.Rectangle(-116.3,88.8,943.9,514.4), new cjs.Rectangle(-94.9,88.8,922.4,514.4), new cjs.Rectangle(-71.5,88.8,899.1,514.4), new cjs.Rectangle(-46.5,88.8,874.1,514.4), rect=new cjs.Rectangle(-32.5,88.8,860,514.4), rect, rect];


(lib.makeup2_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_109 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(109).call(this.frame_109).wait(1));

	// Слой 4
	this.instance = new lib.gubka();
	this.instance.setTransform(554.9,484.3,0.557,0.557,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.46,scaleY:0.46},3).to({scaleX:0.56,scaleY:0.56},3).to({scaleX:0.46,scaleY:0.46},3).to({scaleX:0.56,scaleY:0.56},3).to({rotation:0,x:393.9,y:256.3},8).to({scaleX:0.47,scaleY:0.47},3).to({scaleX:0.56,scaleY:0.56},3).to({x:300.9,y:339.3},9).to({scaleX:0.49,scaleY:0.49},4).to({scaleX:0.56,scaleY:0.56},3).to({x:497.9,y:362},10).to({scaleX:0.46,scaleY:0.46},3).to({scaleX:0.56,scaleY:0.56},3).to({x:397.9,y:271.1},8).to({x:330.9,y:250.1},7).to({x:397.9,y:271.1},8).to({x:510.9,y:244.1},10).to({x:397.9,y:271.1},8).to({x:273.9,y:568,alpha:0.012},9).to({_off:true},1).wait(1));

	// Слой 3
	this.instance_1 = new lib.blesk();
	this.instance_1.setTransform(576,452.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({y:637.4,alpha:0.012},8).to({_off:true},1).wait(89));

	// Слой 16
	this.instance_2 = new lib.lipstick34();
	this.instance_2.setTransform(625,422.4,0.76,0.76);

	this.instance_3 = new lib.shadows28();
	this.instance_3.setTransform(703.5,252,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(110));

	// hero2_fringe0
	this.instance_4 = new lib.hero2_fringe0();
	this.instance_4.setTransform(400,214.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(110));

	// hero2_eyes1
	this.instance_5 = new lib.hero2_eyes1();
	this.instance_5.setTransform(402,319.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(110));

	// hero2_lips0
	this.instance_6 = new lib.hero2_lips0();
	this.instance_6.setTransform(401.5,425.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(110));

	// hero2_shadows0
	this.instance_7 = new lib.hero2_shadows0();
	this.instance_7.setTransform(401.5,315.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(110));

	// Слой 6
	this.instance_8 = new lib.hero2_rouge1_5();
	this.instance_8.setTransform(403.3,293);
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(20).to({_off:false},0).to({alpha:1},79).wait(11));

	// Слой 5
	this.instance_9 = new lib.rab1_1();
	this.instance_9.setTransform(401.4,233.9);

	this.instance_10 = new lib.hero2_rouge1_3();
	this.instance_10.setTransform(403.3,281);

	this.instance_11 = new lib.hero2_rouge1_2();
	this.instance_11.setTransform(403.3,281);

	this.instance_12 = new lib.hero2_rouge1_1();
	this.instance_12.setTransform(403.3,281);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(110));

	// hero2_hair0
	this.instance_13 = new lib.hero2_eyebrows0();
	this.instance_13.setTransform(402.5,267.8);

	this.instance_14 = new lib.hero2_head();
	this.instance_14.setTransform(401.5,297);

	this.instance_15 = new lib.hero2_body1();
	this.instance_15.setTransform(405,520.5);

	this.instance_16 = new lib.hero2_hair0();
	this.instance_16.setTransform(404,458.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(110));

	// Layer 3
	this.instance_17 = new lib.table1();
	this.instance_17.setTransform(702,510.6);

	this.instance_18 = new lib.table1();
	this.instance_18.setTransform(93,510.6);

	this.instance_19 = new lib.table1();
	this.instance_19.setTransform(702,328.7);

	this.instance_20 = new lib.table1();
	this.instance_20.setTransform(93,328.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,88.8,860,514.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,88.8,860,514.6), new cjs.Rectangle(-32.5,88.8,860,537.7), new cjs.Rectangle(-32.5,88.8,860,560.8), new cjs.Rectangle(-32.5,88.8,860,583.9), new cjs.Rectangle(-32.5,88.8,860,607.1), new cjs.Rectangle(-32.5,88.8,860,630.2), rect=new cjs.Rectangle(-32.5,88.8,860,514.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,88.8,860,538.3), new cjs.Rectangle(-32.5,88.8,860,514.4)];


(lib.makeup2_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 4
	this.instance = new lib.gubka();
	this.instance.setTransform(821.9,701.2,0.557,0.557,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:554.9,y:484.3},9).wait(1));

	// Слой 3
	this.instance_1 = new lib.blesk();
	this.instance_1.setTransform(152,243.5,0.573,0.573);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:576,y:452.4},9).wait(1));

	// Слой 16
	this.instance_2 = new lib.lipstick34();
	this.instance_2.setTransform(625,422.4,0.76,0.76);

	this.instance_3 = new lib.shadows28();
	this.instance_3.setTransform(703.5,252,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(10));

	// hero2_fringe0
	this.instance_4 = new lib.hero2_fringe0();
	this.instance_4.setTransform(400,214.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// hero2_eyes1
	this.instance_5 = new lib.hero2_eyes1();
	this.instance_5.setTransform(402,319.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// hero2_lips0
	this.instance_6 = new lib.hero2_lips0();
	this.instance_6.setTransform(401.5,425.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// hero2_shadows0
	this.instance_7 = new lib.hero2_shadows0();
	this.instance_7.setTransform(401.5,315.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// Слой 5
	this.instance_8 = new lib.rab1_1();
	this.instance_8.setTransform(401.4,233.9);

	this.instance_9 = new lib.hero2_rouge1_3();
	this.instance_9.setTransform(403.3,281);

	this.instance_10 = new lib.hero2_rouge1_2();
	this.instance_10.setTransform(403.3,281);

	this.instance_11 = new lib.hero2_rouge1_1();
	this.instance_11.setTransform(403.3,281);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(10));

	// hero2_hair0
	this.instance_12 = new lib.hero2_eyebrows0();
	this.instance_12.setTransform(402.5,267.8);

	this.instance_13 = new lib.hero2_head();
	this.instance_13.setTransform(401.5,297);

	this.instance_14 = new lib.hero2_body1();
	this.instance_14.setTransform(405,520.5);

	this.instance_15 = new lib.hero2_hair0();
	this.instance_15.setTransform(404,458.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(10));

	// Layer 3
	this.instance_16 = new lib.table1();
	this.instance_16.setTransform(702,510.6);

	this.instance_17 = new lib.table1();
	this.instance_17.setTransform(93,510.6);

	this.instance_18 = new lib.table1();
	this.instance_18.setTransform(702,328.7);

	this.instance_19 = new lib.table1();
	this.instance_19.setTransform(93,328.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,88.8,923.5,683.9);
p.frameBounds = [rect, new cjs.Rectangle(-32.5,88.8,893.6,659.7), new cjs.Rectangle(-32.5,88.8,863.9,635.6), new cjs.Rectangle(-32.5,88.8,860,611.5), new cjs.Rectangle(-32.5,88.8,860,587.4), new cjs.Rectangle(-32.5,88.8,860,563.2), new cjs.Rectangle(-32.5,88.8,860,539.1), new cjs.Rectangle(-32.5,88.8,860,515), rect=new cjs.Rectangle(-32.5,88.8,860,514.4), rect];


(lib.makeup2_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_45 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(45).call(this.frame_45).wait(1));

	// hero2_fringe0
	this.instance = new lib.hero2_fringe0();
	this.instance.setTransform(400,214.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(27));

	// rastr2
	this.instance_1 = new lib.r2();
	this.instance_1.setTransform(195.3,435.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({x:401.9,y:235.5},10).wait(8).to({rotation:-45,x:176.9,y:339.5,alpha:0.012},7).to({_off:true},1).wait(1));

	// rab1_1
	this.instance_2 = new lib.rab1_1();
	this.instance_2.setTransform(194.8,433.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({x:401.4,y:233.9},10).wait(17));

	// rastr3
	this.instance_3 = new lib.r3();
	this.instance_3.setTransform(195.3,524.7,1,1,0,0,0,0,89.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:0.4},10).to({y:656.7,alpha:0.012},9).to({_off:true},1).wait(26));

	// Слой 16
	this.instance_4 = new lib.lipstick34();
	this.instance_4.setTransform(625,422.4,0.76,0.76);

	this.instance_5 = new lib.blesk();
	this.instance_5.setTransform(152,243.5,0.573,0.573);

	this.instance_6 = new lib.shadows28();
	this.instance_6.setTransform(703.5,252,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(46));

	// hero2_fringe0
	this.instance_7 = new lib.hero2_fringe0();
	this.instance_7.setTransform(400,214.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(46));

	// hero2_eyes1
	this.instance_8 = new lib.hero2_eyes1();
	this.instance_8.setTransform(402,319.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(46));

	// hero2_lips0
	this.instance_9 = new lib.hero2_lips0();
	this.instance_9.setTransform(401.5,425.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(46));

	// hero2_shadows0
	this.instance_10 = new lib.hero2_shadows0();
	this.instance_10.setTransform(401.5,315.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(46));

	// Слой 5
	this.instance_11 = new lib.hero2_rouge1_3();
	this.instance_11.setTransform(403.3,281);

	this.instance_12 = new lib.hero2_rouge1_2();
	this.instance_12.setTransform(403.3,281);

	this.instance_13 = new lib.hero2_rouge1_1();
	this.instance_13.setTransform(403.3,281);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]}).wait(46));

	// hero2_hair0
	this.instance_14 = new lib.hero2_eyebrows0();
	this.instance_14.setTransform(402.5,267.8);

	this.instance_15 = new lib.hero2_head();
	this.instance_15.setTransform(401.5,297);

	this.instance_16 = new lib.hero2_body1();
	this.instance_16.setTransform(405,520.5);

	this.instance_17 = new lib.hero2_hair0();
	this.instance_17.setTransform(404,458.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(46));

	// Layer 3
	this.instance_18 = new lib.table1();
	this.instance_18.setTransform(702,510.6);

	this.instance_19 = new lib.table1();
	this.instance_19.setTransform(93,510.6);

	this.instance_20 = new lib.table1();
	this.instance_20.setTransform(702,328.7);

	this.instance_21 = new lib.table1();
	this.instance_21.setTransform(93,328.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18}]}).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,88.8,860,514.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,88.8,860,523.9), new cjs.Rectangle(-32.5,88.8,860,538.6), new cjs.Rectangle(-32.5,88.8,860,553.3), new cjs.Rectangle(-32.5,88.8,860,567.9), rect=new cjs.Rectangle(-32.5,88.8,860,514.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup2_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 6
	this.instance = new lib.rab1();
	this.instance.setTransform(725.8,463.6,0.651,0.557,0,48.2,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:194.8,y:433.6},9).wait(1));

	// Слой 16
	this.instance_1 = new lib.lipstick34();
	this.instance_1.setTransform(625,422.4,0.76,0.76);

	this.instance_2 = new lib.blesk();
	this.instance_2.setTransform(152,243.5,0.573,0.573);

	this.instance_3 = new lib.shadows28();
	this.instance_3.setTransform(703.5,252,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// hero2_fringe0
	this.instance_4 = new lib.hero2_fringe0();
	this.instance_4.setTransform(400,214.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// hero2_eyes1
	this.instance_5 = new lib.hero2_eyes1();
	this.instance_5.setTransform(402,319.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// hero2_lips0
	this.instance_6 = new lib.hero2_lips0();
	this.instance_6.setTransform(401.5,425.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// hero2_shadows0
	this.instance_7 = new lib.hero2_shadows0();
	this.instance_7.setTransform(401.5,315.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// Слой 5
	this.instance_8 = new lib.hero2_rouge1_3();
	this.instance_8.setTransform(403.3,281);

	this.instance_9 = new lib.hero2_rouge1_2();
	this.instance_9.setTransform(403.3,281);

	this.instance_10 = new lib.hero2_rouge1_1();
	this.instance_10.setTransform(403.3,281);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(10));

	// hero2_hair0
	this.instance_11 = new lib.hero2_eyebrows0();
	this.instance_11.setTransform(402.5,267.8);

	this.instance_12 = new lib.hero2_head();
	this.instance_12.setTransform(401.5,297);

	this.instance_13 = new lib.hero2_body1();
	this.instance_13.setTransform(405,520.5);

	this.instance_14 = new lib.hero2_hair0();
	this.instance_14.setTransform(404,458.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]}).wait(10));

	// Layer 3
	this.instance_15 = new lib.table1();
	this.instance_15.setTransform(702,510.6);

	this.instance_16 = new lib.table1();
	this.instance_16.setTransform(93,510.6);

	this.instance_17 = new lib.table1();
	this.instance_17.setTransform(702,328.7);

	this.instance_18 = new lib.table1();
	this.instance_18.setTransform(93,328.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,88.8,860,514.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup2_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_120 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(120).call(this.frame_120).wait(1));

	// Слой 6
	this.instance = new lib.pencil2();
	this.instance.setTransform(181.5,390.8,0.999,0.999,-45.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:216.5},5).to({x:200.5,y:381.2},5).to({x:217.5,y:368.5},5).to({x:310.5,y:341},7).to({x:285.5,y:329.5},4).to({x:263.3,y:333},3).to({y:306},3).to({x:288.3,y:321.5},3).to({x:306.3,y:334.8},3).to({x:268.7,y:293.8},5).to({x:289.7,y:283.2},3).to({x:294.7,y:310.2},3).to({x:302.7,y:332.2},3).to({x:360.7,y:338.8},6).to({x:376.7,y:316.5},3).to({y:283.5},3).to({x:400.7,y:284.5},4).to({x:373.7,y:318.5},4).to({x:412.7,y:294.5},5).to({x:418.7,y:313.5},4).to({x:378.3,y:327.5},6).to({x:417.3,y:332.8},6).to({x:453.3,y:369.8},7).to({x:470.3,y:373.8},3).to({x:459.3,y:381.2},3).to({x:469.3,y:387.2},3).to({x:461.3,y:395.2},3).to({x:465.3,y:667.2},7).to({_off:true},1).wait(1));

	// Слой 16
	this.instance_1 = new lib.rab1();
	this.instance_1.setTransform(725.8,463.6,0.651,0.557,0,48.2,8.2);

	this.instance_2 = new lib.lipstick34();
	this.instance_2.setTransform(625,422.4,0.76,0.76);

	this.instance_3 = new lib.blesk();
	this.instance_3.setTransform(152,243.5,0.573,0.573);

	this.instance_4 = new lib.shadows28();
	this.instance_4.setTransform(703.5,252,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(121));

	// hero2_fringe0
	this.instance_5 = new lib.hero2_fringe0();
	this.instance_5.setTransform(400,214.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(121));

	// hero2_eyes1
	this.instance_6 = new lib.hero2_eyes1();
	this.instance_6.setTransform(402,319.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(121));

	// hero2_lips0
	this.instance_7 = new lib.hero2_lips0();
	this.instance_7.setTransform(401.5,425.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(121));

	// hero2_shadows0
	this.instance_8 = new lib.hero2_shadows0();
	this.instance_8.setTransform(401.5,315.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(121));

	// Слой 3
	this.instance_9 = new lib.hero2_rouge1_3();
	this.instance_9.setTransform(403.3,281);
	this.instance_9.alpha = 0.012;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({_off:false},0).to({alpha:1},110).wait(9));

	// Слой 5
	this.instance_10 = new lib.hero2_rouge1_2();
	this.instance_10.setTransform(403.3,281);

	this.instance_11 = new lib.hero2_rouge1_1();
	this.instance_11.setTransform(403.3,281);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).wait(121));

	// hero2_hair0
	this.instance_12 = new lib.hero2_eyebrows0();
	this.instance_12.setTransform(402.5,267.8);

	this.instance_13 = new lib.hero2_head();
	this.instance_13.setTransform(401.5,297);

	this.instance_14 = new lib.hero2_body1();
	this.instance_14.setTransform(405,520.5);

	this.instance_15 = new lib.hero2_hair0();
	this.instance_15.setTransform(404,458.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(121));

	// Layer 3
	this.instance_16 = new lib.table1();
	this.instance_16.setTransform(702,510.6);

	this.instance_17 = new lib.table1();
	this.instance_17.setTransform(93,510.6);

	this.instance_18 = new lib.table1();
	this.instance_18.setTransform(702,328.7);

	this.instance_19 = new lib.table1();
	this.instance_19.setTransform(93,328.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]}).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,88.8,860,514.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,88.8,860,541.9), new cjs.Rectangle(-32.5,88.8,860,580.8), new cjs.Rectangle(-32.5,88.8,860,619.6), new cjs.Rectangle(-32.5,88.8,860,658.7), new cjs.Rectangle(-32.5,88.8,860,514.4)];


(lib.makeup2_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 6
	this.instance = new lib.pencil2();
	this.instance.setTransform(97.5,468.7,0.781,0.781,14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-45.7,x:181.5,y:390.8},9).wait(1));

	// Слой 16
	this.instance_1 = new lib.rab1();
	this.instance_1.setTransform(725.8,463.6,0.651,0.557,0,48.2,8.2);

	this.instance_2 = new lib.lipstick34();
	this.instance_2.setTransform(625,422.4,0.76,0.76);

	this.instance_3 = new lib.blesk();
	this.instance_3.setTransform(152,243.5,0.573,0.573);

	this.instance_4 = new lib.shadows28();
	this.instance_4.setTransform(703.5,252,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// hero2_fringe0
	this.instance_5 = new lib.hero2_fringe0();
	this.instance_5.setTransform(400,214.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// hero2_eyes1
	this.instance_6 = new lib.hero2_eyes1();
	this.instance_6.setTransform(402,319.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// hero2_lips0
	this.instance_7 = new lib.hero2_lips0();
	this.instance_7.setTransform(401.5,425.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// hero2_shadows0
	this.instance_8 = new lib.hero2_shadows0();
	this.instance_8.setTransform(401.5,315.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// Слой 5
	this.instance_9 = new lib.hero2_rouge1_2();
	this.instance_9.setTransform(403.3,281);

	this.instance_10 = new lib.hero2_rouge1_1();
	this.instance_10.setTransform(403.3,281);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(10));

	// hero2_hair0
	this.instance_11 = new lib.hero2_eyebrows0();
	this.instance_11.setTransform(402.5,267.8);

	this.instance_12 = new lib.hero2_head();
	this.instance_12.setTransform(401.5,297);

	this.instance_13 = new lib.hero2_body1();
	this.instance_13.setTransform(405,520.5);

	this.instance_14 = new lib.hero2_hair0();
	this.instance_14.setTransform(404,458.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]}).wait(10));

	// Layer 3
	this.instance_15 = new lib.table1();
	this.instance_15.setTransform(702,510.6);

	this.instance_16 = new lib.table1();
	this.instance_16.setTransform(93,510.6);

	this.instance_17 = new lib.table1();
	this.instance_17.setTransform(702,328.7);

	this.instance_18 = new lib.table1();
	this.instance_18.setTransform(93,328.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,88.8,860,514.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup2_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_129 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(129).call(this.frame_129).wait(1));

	// Слой 6
	this.instance = new lib.pencil7();
	this.instance.setTransform(199.2,471.2,0.999,0.999,-45.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:212.2,y:393.2},9).to({rotation:-52.2,x:231.2,y:424.2},4).to({x:209.2},4).to({x:232.2,y:436.8},3).to({x:213.2,y:432.8},3).to({x:286.2,y:339.5},8).to({x:236.8,y:320.2},6).to({y:344.2},4).to({x:222.8,y:334.7},4).to({x:251.8,y:306.7},6).to({x:281.8,y:322.7},4).to({x:254.8,y:276.7},5).to({x:398.8,y:332.5},9).to({x:407.8,y:294.5},4).to({x:424.8},2).to({x:436.8,y:271.7},4).to({x:442.8,y:312.7},5).to({x:403.8,y:342.7},4).to({x:445.8,y:320.7},5).to({x:453.8,y:334.7},4).to({x:462.8,y:403},7).to({x:445.8,y:427},4).to({x:468.8,y:423},4).to({y:442},3).to({x:453.8,y:449},3).to({x:526.8,y:627,alpha:0.012},10).to({_off:true},1).wait(1));

	// Слой 16
	this.instance_1 = new lib.rab1();
	this.instance_1.setTransform(725.8,463.6,0.651,0.557,0,48.2,8.2);

	this.instance_2 = new lib.pencil2();
	this.instance_2.setTransform(97.5,468.7,0.781,0.781,14.3);

	this.instance_3 = new lib.lipstick34();
	this.instance_3.setTransform(625,422.4,0.76,0.76);

	this.instance_4 = new lib.blesk();
	this.instance_4.setTransform(152,243.5,0.573,0.573);

	this.instance_5 = new lib.shadows28();
	this.instance_5.setTransform(703.5,252,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(130));

	// hero2_fringe0
	this.instance_6 = new lib.hero2_fringe0();
	this.instance_6.setTransform(400,214.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(130));

	// hero2_eyes1
	this.instance_7 = new lib.hero2_eyes1();
	this.instance_7.setTransform(402,319.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(130));

	// hero2_lips0
	this.instance_8 = new lib.hero2_lips0();
	this.instance_8.setTransform(401.5,425.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(130));

	// hero2_shadows0
	this.instance_9 = new lib.hero2_shadows0();
	this.instance_9.setTransform(401.5,315.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(130));

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_6 = new cjs.Graphics().p("EAEIApAIAAgoIgoAAIAAziIbWAAIAAUKg");
	var mask_graphics_7 = new cjs.Graphics().p("EAEIApAIAAgpIgoAAIAA0SIbWAAIAAU7g");
	var mask_graphics_8 = new cjs.Graphics().p("EAEIApAIAAgrIgoAAIAA1BIbWAAIAAVsg");
	var mask_graphics_9 = new cjs.Graphics().p("EAEIApAIAAgsIgoAAIAA1xIbWAAIAAWdg");
	var mask_graphics_10 = new cjs.Graphics().p("EAEIApAIAAguIgoAAIAA2gIbWAAIAAXOg");
	var mask_graphics_11 = new cjs.Graphics().p("EAEIApAIAAgvIgoAAIAA3QIbWAAIAAX/g");
	var mask_graphics_12 = new cjs.Graphics().p("EAEIApAIAAgxIgoAAIAA3/IbWAAIAAYwg");
	var mask_graphics_13 = new cjs.Graphics().p("EAEIApAIAAgyIgoAAIAA4vIbWAAIAAZhg");
	var mask_graphics_14 = new cjs.Graphics().p("EAEIApAIAAg0IgoAAIAA5eIbWAAIAAaSg");
	var mask_graphics_15 = new cjs.Graphics().p("EAEIApAIAAg1IgoAAIAA6OIbWAAIAAbDg");
	var mask_graphics_16 = new cjs.Graphics().p("EAEIApAIAAg3IgoAAIAA69IbWAAIAAb0g");
	var mask_graphics_17 = new cjs.Graphics().p("EAEIApAIAAg5IgoAAIAA7tIbWAAIAAcmg");
	var mask_graphics_18 = new cjs.Graphics().p("EAEIApAIAAg6IgoAAIAA8dIbWAAIAAdXg");
	var mask_graphics_19 = new cjs.Graphics().p("EAEIApAIAAg8IgoAAIAA9MIbWAAIAAeIg");
	var mask_graphics_20 = new cjs.Graphics().p("EAEIApAIAAg9IgoAAIAA98IbWAAIAAe5g");
	var mask_graphics_21 = new cjs.Graphics().p("EAEIApAIAAg/IgoAAIAA+rIbWAAIAAfqg");
	var mask_graphics_22 = new cjs.Graphics().p("EAEIApAIAAhAIgoAAIAA/bIbWAAMAAAAgbg");
	var mask_graphics_23 = new cjs.Graphics().p("EAEIApAIAAhCIgoAAMAAAggKIbWAAMAAAAhMg");
	var mask_graphics_24 = new cjs.Graphics().p("EAEIApAIAAhDIgoAAMAAAgg6IbWAAMAAAAh9g");
	var mask_graphics_25 = new cjs.Graphics().p("EAEIApAIAAhFIgoAAMAAAghpIbWAAMAAAAiug");
	var mask_graphics_26 = new cjs.Graphics().p("EAEIApAIAAhGIgoAAMAAAgiZIbWAAMAAAAjfg");
	var mask_graphics_27 = new cjs.Graphics().p("EAEIApAIAAhIIgoAAMAAAgjIIbWAAMAAAAkQg");
	var mask_graphics_28 = new cjs.Graphics().p("EAEIApAIAAhJIgoAAMAAAgj4IbWAAMAAAAlBg");
	var mask_graphics_29 = new cjs.Graphics().p("EAEIApAIAAhJIgoAAMAAAgj4IbWAAMAAAAlBg");
	var mask_graphics_30 = new cjs.Graphics().p("EAEIApAIAAhJIgoAAMAAAgj4IbWAAMAAAAlBg");
	var mask_graphics_31 = new cjs.Graphics().p("EAEIApAIAAhJIgoAAMAAAgj4IbWAAMAAAAlBg");
	var mask_graphics_32 = new cjs.Graphics().p("EAEIApAIAAhJIgoAAMAAAgj4IbWAAMAAAAlBg");
	var mask_graphics_33 = new cjs.Graphics().p("EAEIApAIAAhJIgoAAMAAAgj4IbWAAMAAAAlBg");
	var mask_graphics_34 = new cjs.Graphics().p("EAEIApAIAAhLIgoAAMAAAgksIbWAAMAAAAl3g");
	var mask_graphics_35 = new cjs.Graphics().p("EAEIApAIAAhNIgoAAMAAAglfIbWAAMAAAAmsg");
	var mask_graphics_36 = new cjs.Graphics().p("EAEIApAIAAhOIgoAAMAAAgmUIbWAAMAAAAnig");
	var mask_graphics_37 = new cjs.Graphics().p("EAEIApAIAAhQIgoAAMAAAgnHIbWAAMAAAAoXg");
	var mask_graphics_38 = new cjs.Graphics().p("EAEIApAIAAhSIgoAAMAAAgn4IbWAAMAAAApKg");
	var mask_graphics_39 = new cjs.Graphics().p("EAEIApAIAAhTIgoAAMAAAgotIbWAAMAAAAqAg");
	var mask_graphics_40 = new cjs.Graphics().p("EAEIApAIAAhVIgoAAMAAAgpgIbWAAMAAAAq1g");
	var mask_graphics_41 = new cjs.Graphics().p("EAEIApAIAAhWIgoAAMAAAgqUIbWAAMAAAArqg");
	var mask_graphics_42 = new cjs.Graphics().p("EAEIApAIAAhYIgoAAMAAAgrIIbWAAMAAAAsgg");
	var mask_graphics_43 = new cjs.Graphics().p("EAEIApAIAAhaIgoAAMAAAgr7IbWAAMAAAAtVg");
	var mask_graphics_44 = new cjs.Graphics().p("EAEIApAIAAhbIgoAAMAAAgswIbWAAMAAAAuLg");
	var mask_graphics_45 = new cjs.Graphics().p("EAEIApAIAAhdIgoAAMAAAgtjIbWAAMAAAAvAg");
	var mask_graphics_46 = new cjs.Graphics().p("EAEIApAIAAhfIgoAAMAAAguWIbWAAMAAAAv1g");
	var mask_graphics_47 = new cjs.Graphics().p("EAEIApAIAAhgIgoAAMAAAgvLIbWAAMAAAAwrg");
	var mask_graphics_48 = new cjs.Graphics().p("EAEIApAIAAhiIgoAAMAAAgv+IbWAAMAAAAxgg");
	var mask_graphics_49 = new cjs.Graphics().p("EAEIApAIAAhkIgoAAMAAAgwyIbWAAMAAAAyWg");
	var mask_graphics_50 = new cjs.Graphics().p("EAEIApAIAAhlIgoAAMAAAgxmIbWAAMAAAAzLg");
	var mask_graphics_51 = new cjs.Graphics().p("EAEIApAIAAhnIgoAAMAAAgyZIbWAAMAAAA0Ag");
	var mask_graphics_52 = new cjs.Graphics().p("EAEIApAIAAhpIgoAAMAAAgzNIbWAAMAAAA02g");
	var mask_graphics_53 = new cjs.Graphics().p("EAEIApAIAAhqIgoAAMAAAg0BIbWAAMAAAA1rg");
	var mask_graphics_54 = new cjs.Graphics().p("EAEIApAIAAhsIgoAAMAAAg01IbWAAMAAAA2hg");
	var mask_graphics_55 = new cjs.Graphics().p("EAEIApAIAAhtIgoAAMAAAg1pIbWAAMAAAA3Wg");
	var mask_graphics_56 = new cjs.Graphics().p("EAEIApAIAAhvIgoAAMAAAg2cIbWAAMAAAA4Lg");
	var mask_graphics_57 = new cjs.Graphics().p("EAEIApAIAAhxIgoAAMAAAg3QIbWAAMAAAA5Bg");
	var mask_graphics_58 = new cjs.Graphics().p("EAEIApAIAAhyIgoAAMAAAg4EIbWAAMAAAA52g");
	var mask_graphics_59 = new cjs.Graphics().p("EAEIApAIAAh0IgoAAMAAAg43IbWAAMAAAA6rg");
	var mask_graphics_60 = new cjs.Graphics().p("EAEIApAIAAh0IgoAAMAAAg43IbWAAMAAAA6rg");
	var mask_graphics_61 = new cjs.Graphics().p("EAEIApAIAAh0IgoAAMAAAg43IbWAAMAAAA6rg");
	var mask_graphics_62 = new cjs.Graphics().p("EAEIApAIAAh0IgoAAMAAAg43IbWAAMAAAA6rg");
	var mask_graphics_63 = new cjs.Graphics().p("EAEIApAIAAh0IgoAAMAAAg43IbWAAMAAAA6rg");
	var mask_graphics_64 = new cjs.Graphics().p("EAEIApAIAAh0IgoAAMAAAg43IbWAAMAAAA6rg");
	var mask_graphics_65 = new cjs.Graphics().p("EAEIApAIAAh0IgoAAMAAAg43IbWAAMAAAA6rg");
	var mask_graphics_66 = new cjs.Graphics().p("EAEIApAIAAh0IgoAAMAAAg43IbWAAMAAAA6rg");
	var mask_graphics_67 = new cjs.Graphics().p("EAEIApAIAAh0IgoAAMAAAg43IbWAAMAAAA6rg");
	var mask_graphics_68 = new cjs.Graphics().p("EAEIApAIAAh0IgoAAMAAAg43IbWAAMAAAA6rg");
	var mask_graphics_69 = new cjs.Graphics().p("EADtApAIAAh0IgqAAMAAAg43IcQAAMAAAA6rg");
	var mask_graphics_70 = new cjs.Graphics().p("EADRApAIAAh0IgrAAMAAAg43IdKAAMAAAA6rg");
	var mask_graphics_71 = new cjs.Graphics().p("EAC2ApAIAAh0IgsAAMAAAg43IeDAAMAAAA6rg");
	var mask_graphics_72 = new cjs.Graphics().p("EACaApAIAAh0IgtAAMAAAg43Ie9AAMAAAA6rg");
	var mask_graphics_73 = new cjs.Graphics().p("EAB+ApAIAAh0IguAAMAAAg43If3AAMAAAA6rg");
	var mask_graphics_74 = new cjs.Graphics().p("EABjApAIAAh0IgwAAMAAAg43MAgxAAAMAAAA6rg");
	var mask_graphics_75 = new cjs.Graphics().p("EABHApAIAAh0IgxAAMAAAg43MAhqAAAMAAAA6rg");
	var mask_graphics_76 = new cjs.Graphics().p("EAAsApAIAAh0IgxAAMAAAg43MAiiAAAMAAAA6rg");
	var mask_graphics_77 = new cjs.Graphics().p("EAAQApAIAAh0IgyAAMAAAg43MAjcAAAMAAAA6rg");
	var mask_graphics_78 = new cjs.Graphics().p("EgAJApAIAAh0Ig2AAMAAAg43MAkWAAAMAAAA6rg");
	var mask_graphics_79 = new cjs.Graphics().p("EgAlApAIAAh0Ig3AAMAAAg43MAlQAAAMAAAA6rg");
	var mask_graphics_80 = new cjs.Graphics().p("EgBBApAIAAh0Ig3AAMAAAg43MAmJAAAMAAAA6rg");
	var mask_graphics_81 = new cjs.Graphics().p("EgBcApAIAAh0Ig5AAMAAAg43MAnDAAAMAAAA6rg");
	var mask_graphics_82 = new cjs.Graphics().p("EgB4ApAIAAh0Ig6AAMAAAg43MAn9AAAMAAAA6rg");
	var mask_graphics_83 = new cjs.Graphics().p("EgCTApAIAAh0Ig8AAMAAAg43MAo3AAAMAAAA6rg");
	var mask_graphics_84 = new cjs.Graphics().p("EgCvApAIAAh0Ig9AAMAAAg43MApwAAAMAAAA6rg");
	var mask_graphics_85 = new cjs.Graphics().p("EgDKApAIAAh0Ig/AAMAAAg43MAqqAAAMAAAA6rg");
	var mask_graphics_86 = new cjs.Graphics().p("EgDmApAIAAh0IhAAAMAAAg43MArkAAAMAAAA6rg");
	var mask_graphics_87 = new cjs.Graphics().p("EgECApAIAAh0IhBAAMAAAg43MAseAAAMAAAA6rg");
	var mask_graphics_88 = new cjs.Graphics().p("EgEdApAIAAh0IhDAAMAAAg43MAtYAAAMAAAA6rg");
	var mask_graphics_89 = new cjs.Graphics().p("EgE5ApAIAAh0IhDAAMAAAg43MAuRAAAMAAAA6rg");
	var mask_graphics_90 = new cjs.Graphics().p("EgFUApAIAAh0IhFAAMAAAg43MAvLAAAMAAAA6rg");
	var mask_graphics_91 = new cjs.Graphics().p("EgFwApAIAAh0IhGAAMAAAg43MAwFAAAMAAAA6rg");
	var mask_graphics_92 = new cjs.Graphics().p("EgGLApAIAAh0IhIAAMAAAg43MAw/AAAMAAAA6rg");
	var mask_graphics_93 = new cjs.Graphics().p("EgGnApAIAAh0IhJAAMAAAg43MAx4AAAMAAAA6rg");
	var mask_graphics_94 = new cjs.Graphics().p("EgHDApAIAAh0IhKAAMAAAg43MAyyAAAMAAAA6rg");
	var mask_graphics_95 = new cjs.Graphics().p("EgHeApAIAAh0IhMAAMAAAg43MAzsAAAMAAAA6rg");
	var mask_graphics_96 = new cjs.Graphics().p("EgHeApAIAAh0IhMAAMAAAg43MAzsAAAMAAAA6rg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_graphics_6,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_7,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_8,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_9,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_10,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_11,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_12,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_13,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_14,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_15,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_16,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_17,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_18,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_19,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_20,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_21,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_22,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_23,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_24,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_25,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_26,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_27,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_28,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_29,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_30,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_31,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_32,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_33,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_34,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_35,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_36,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_37,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_38,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_39,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_40,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_41,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_42,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_43,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_44,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_45,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_46,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_47,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_48,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_49,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_50,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_51,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_52,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_53,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_54,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_55,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_56,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_57,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_58,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_59,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_60,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_61,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_62,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_63,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_64,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_65,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_66,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_67,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_68,x:197.5,y:262.5}).wait(1).to({graphics:mask_graphics_69,x:200.4,y:262.5}).wait(1).to({graphics:mask_graphics_70,x:203.3,y:262.5}).wait(1).to({graphics:mask_graphics_71,x:206.1,y:262.5}).wait(1).to({graphics:mask_graphics_72,x:209,y:262.5}).wait(1).to({graphics:mask_graphics_73,x:211.9,y:262.5}).wait(1).to({graphics:mask_graphics_74,x:214.8,y:262.5}).wait(1).to({graphics:mask_graphics_75,x:217.7,y:262.5}).wait(1).to({graphics:mask_graphics_76,x:220.6,y:262.5}).wait(1).to({graphics:mask_graphics_77,x:223.5,y:262.5}).wait(1).to({graphics:mask_graphics_78,x:226.4,y:262.5}).wait(1).to({graphics:mask_graphics_79,x:229.3,y:262.5}).wait(1).to({graphics:mask_graphics_80,x:232.1,y:262.5}).wait(1).to({graphics:mask_graphics_81,x:235,y:262.5}).wait(1).to({graphics:mask_graphics_82,x:237.9,y:262.5}).wait(1).to({graphics:mask_graphics_83,x:240.8,y:262.5}).wait(1).to({graphics:mask_graphics_84,x:243.7,y:262.5}).wait(1).to({graphics:mask_graphics_85,x:246.6,y:262.5}).wait(1).to({graphics:mask_graphics_86,x:249.5,y:262.5}).wait(1).to({graphics:mask_graphics_87,x:252.4,y:262.5}).wait(1).to({graphics:mask_graphics_88,x:255.3,y:262.5}).wait(1).to({graphics:mask_graphics_89,x:258.1,y:262.5}).wait(1).to({graphics:mask_graphics_90,x:261,y:262.5}).wait(1).to({graphics:mask_graphics_91,x:263.9,y:262.5}).wait(1).to({graphics:mask_graphics_92,x:266.8,y:262.5}).wait(1).to({graphics:mask_graphics_93,x:269.7,y:262.5}).wait(1).to({graphics:mask_graphics_94,x:272.6,y:262.5}).wait(1).to({graphics:mask_graphics_95,x:275.5,y:262.5}).wait(1).to({graphics:mask_graphics_96,x:275.5,y:262.5}).wait(34));

	// Слой 3
	this.instance_10 = new lib.hero2_rouge1_2();
	this.instance_10.setTransform(403.3,281);
	this.instance_10.alpha = 0.012;
	this.instance_10._off = true;

	this.instance_10.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(6).to({_off:false},0).to({alpha:1},112).wait(12));

	// Слой 5
	this.instance_11 = new lib.hero2_rouge1_1();
	this.instance_11.setTransform(403.3,281);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(130));

	// hero2_hair0
	this.instance_12 = new lib.hero2_eyebrows0();
	this.instance_12.setTransform(402.5,267.8);

	this.instance_13 = new lib.hero2_head();
	this.instance_13.setTransform(401.5,297);

	this.instance_14 = new lib.hero2_body1();
	this.instance_14.setTransform(405,520.5);

	this.instance_15 = new lib.hero2_hair0();
	this.instance_15.setTransform(404,458.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(130));

	// Layer 3
	this.instance_16 = new lib.table1();
	this.instance_16.setTransform(702,510.6);

	this.instance_17 = new lib.table1();
	this.instance_17.setTransform(93,510.6);

	this.instance_18 = new lib.table1();
	this.instance_18.setTransform(702,328.7);

	this.instance_19 = new lib.table1();
	this.instance_19.setTransform(93,328.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]}).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,88.8,860,514.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,88.8,860,517.9), new cjs.Rectangle(-32.5,88.8,860,535.7), new cjs.Rectangle(-32.5,88.8,860,553.5), new cjs.Rectangle(-32.5,88.8,860,571.3), new cjs.Rectangle(-32.5,88.8,860,589.1), new cjs.Rectangle(-32.5,88.8,860,606.9), new cjs.Rectangle(-32.5,88.8,860,624.8), new cjs.Rectangle(-32.5,88.8,860,514.4)];


(lib.makeup2_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 6
	this.instance = new lib.pencil7();
	this.instance.setTransform(123.2,435.2,0.781,0.781,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-45.2,x:199.2,y:471.2},9).wait(1));

	// Слой 16
	this.instance_1 = new lib.rab1();
	this.instance_1.setTransform(725.8,463.6,0.651,0.557,0,48.2,8.2);

	this.instance_2 = new lib.pencil2();
	this.instance_2.setTransform(97.5,468.7,0.781,0.781,14.3);

	this.instance_3 = new lib.lipstick34();
	this.instance_3.setTransform(625,422.4,0.76,0.76);

	this.instance_4 = new lib.blesk();
	this.instance_4.setTransform(152,243.5,0.573,0.573);

	this.instance_5 = new lib.shadows28();
	this.instance_5.setTransform(703.5,252,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// hero2_fringe0
	this.instance_6 = new lib.hero2_fringe0();
	this.instance_6.setTransform(400,214.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// hero2_eyes1
	this.instance_7 = new lib.hero2_eyes1();
	this.instance_7.setTransform(402,319.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// hero2_lips0
	this.instance_8 = new lib.hero2_lips0();
	this.instance_8.setTransform(401.5,425.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// hero2_shadows0
	this.instance_9 = new lib.hero2_shadows0();
	this.instance_9.setTransform(401.5,315.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// Слой 5
	this.instance_10 = new lib.hero2_rouge1_1();
	this.instance_10.setTransform(403.3,281);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// hero2_hair0
	this.instance_11 = new lib.hero2_eyebrows0();
	this.instance_11.setTransform(402.5,267.8);

	this.instance_12 = new lib.hero2_head();
	this.instance_12.setTransform(401.5,297);

	this.instance_13 = new lib.hero2_body1();
	this.instance_13.setTransform(405,520.5);

	this.instance_14 = new lib.hero2_hair0();
	this.instance_14.setTransform(404,458.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]}).wait(10));

	// Layer 3
	this.instance_15 = new lib.table1();
	this.instance_15.setTransform(702,510.6);

	this.instance_16 = new lib.table1();
	this.instance_16.setTransform(93,510.6);

	this.instance_17 = new lib.table1();
	this.instance_17.setTransform(702,328.7);

	this.instance_18 = new lib.table1();
	this.instance_18.setTransform(93,328.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,88.8,860,514.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_109 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(109).call(this.frame_109).wait(1));

	// Слой 4
	this.instance = new lib.gubka();
	this.instance.setTransform(554.9,484.3,0.557,0.557,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.46,scaleY:0.46},3).to({scaleX:0.56,scaleY:0.56},3).to({scaleX:0.46,scaleY:0.46},3).to({scaleX:0.56,scaleY:0.56},3).to({rotation:0,x:393.9,y:256.3},8).to({scaleX:0.47,scaleY:0.47},3).to({scaleX:0.56,scaleY:0.56},3).to({x:300.9,y:339.3},9).to({scaleX:0.49,scaleY:0.49},4).to({scaleX:0.56,scaleY:0.56},3).to({x:497.9,y:362},10).to({scaleX:0.46,scaleY:0.46},3).to({scaleX:0.56,scaleY:0.56},3).to({x:397.9,y:271.1},8).to({x:330.9,y:250.1},7).to({x:397.9,y:271.1},8).to({x:510.9,y:244.1},10).to({x:397.9,y:271.1},8).to({x:273.9,y:568,alpha:0.012},9).to({_off:true},1).wait(1));

	// Слой 3
	this.instance_1 = new lib.rouge14();
	this.instance_1.setTransform(565,428.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({y:626.5,alpha:0.012},8).to({_off:true},1).wait(89));

	// Слой 16
	this.instance_2 = new lib.rab1();
	this.instance_2.setTransform(725.8,463.6,0.651,0.557,0,48.2,8.2);

	this.instance_3 = new lib.pencil7();
	this.instance_3.setTransform(123.2,435.2,0.781,0.781,15);

	this.instance_4 = new lib.pencil2();
	this.instance_4.setTransform(97.5,468.7,0.781,0.781,14.3);

	this.instance_5 = new lib.lipstick34();
	this.instance_5.setTransform(625,422.4,0.76,0.76);

	this.instance_6 = new lib.blesk();
	this.instance_6.setTransform(152,243.5,0.573,0.573);

	this.instance_7 = new lib.shadows28();
	this.instance_7.setTransform(703.5,252,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(110));

	// hero2_fringe0
	this.instance_8 = new lib.hero2_fringe0();
	this.instance_8.setTransform(400,214.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(110));

	// hero2_eyes1
	this.instance_9 = new lib.hero2_eyes1();
	this.instance_9.setTransform(402,319.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(110));

	// hero2_lips0
	this.instance_10 = new lib.hero2_lips0();
	this.instance_10.setTransform(401.5,425.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(110));

	// hero2_shadows0
	this.instance_11 = new lib.hero2_shadows0();
	this.instance_11.setTransform(401.5,315.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(110));

	// Слой 5
	this.instance_12 = new lib.hero2_rouge1_1();
	this.instance_12.setTransform(403.3,281);
	this.instance_12.alpha = 0.012;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(20).to({_off:false},0).to({alpha:1},79).wait(11));

	// hero2_hair0
	this.instance_13 = new lib.hero2_eyebrows0();
	this.instance_13.setTransform(402.5,267.8);

	this.instance_14 = new lib.hero2_head();
	this.instance_14.setTransform(401.5,297);

	this.instance_15 = new lib.hero2_body1();
	this.instance_15.setTransform(405,520.5);

	this.instance_16 = new lib.hero2_hair0();
	this.instance_16.setTransform(404,458.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(110));

	// Layer 3
	this.instance_17 = new lib.table1();
	this.instance_17.setTransform(702,510.6);

	this.instance_18 = new lib.table1();
	this.instance_18.setTransform(93,510.6);

	this.instance_19 = new lib.table1();
	this.instance_19.setTransform(702,328.7);

	this.instance_20 = new lib.table1();
	this.instance_20.setTransform(93,328.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,88.8,860,514.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,88.8,860,538.5), new cjs.Rectangle(-32.5,88.8,860,563.2), new cjs.Rectangle(-32.5,88.8,860,588), new cjs.Rectangle(-32.5,88.8,860,612.7), rect=new cjs.Rectangle(-32.5,88.8,860,514.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,88.8,860,538.3), new cjs.Rectangle(-32.5,88.8,860,514.4)];


(lib.makeup2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 4
	this.instance = new lib.gubka();
	this.instance.setTransform(821.9,701.2,0.557,0.557,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:554.9,y:484.3},9).wait(1));

	// Слой 3
	this.instance_1 = new lib.rouge14();
	this.instance_1.setTransform(57.5,245.3,0.679,0.679);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:565,y:428.5},9).wait(1));

	// Слой 16
	this.instance_2 = new lib.rab1();
	this.instance_2.setTransform(725.8,463.6,0.651,0.557,0,48.2,8.2);

	this.instance_3 = new lib.pencil7();
	this.instance_3.setTransform(123.2,435.2,0.781,0.781,15);

	this.instance_4 = new lib.pencil2();
	this.instance_4.setTransform(97.5,468.7,0.781,0.781,14.3);

	this.instance_5 = new lib.lipstick34();
	this.instance_5.setTransform(625,422.4,0.76,0.76);

	this.instance_6 = new lib.blesk();
	this.instance_6.setTransform(152,243.5,0.573,0.573);

	this.instance_7 = new lib.shadows28();
	this.instance_7.setTransform(703.5,252,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(10));

	// hero2_fringe0
	this.instance_8 = new lib.hero2_fringe0();
	this.instance_8.setTransform(400,214.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// hero2_eyes1
	this.instance_9 = new lib.hero2_eyes1();
	this.instance_9.setTransform(402,319.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// hero2_lips0
	this.instance_10 = new lib.hero2_lips0();
	this.instance_10.setTransform(401.5,425.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// hero2_shadows0
	this.instance_11 = new lib.hero2_shadows0();
	this.instance_11.setTransform(401.5,315.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// hero2_eyebrows0
	this.instance_12 = new lib.hero2_eyebrows0();
	this.instance_12.setTransform(402.5,267.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// hero2_head
	this.instance_13 = new lib.hero2_head();
	this.instance_13.setTransform(401.5,297);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// hero2_body1
	this.instance_14 = new lib.hero2_body1();
	this.instance_14.setTransform(405,520.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10));

	// hero2_hair0
	this.instance_15 = new lib.hero2_hair0();
	this.instance_15.setTransform(404,458.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(10));

	// Layer 3
	this.instance_16 = new lib.table1();
	this.instance_16.setTransform(702,510.6);

	this.instance_17 = new lib.table1();
	this.instance_17.setTransform(93,510.6);

	this.instance_18 = new lib.table1();
	this.instance_18.setTransform(702,328.7);

	this.instance_19 = new lib.table1();
	this.instance_19.setTransform(93,328.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,88.8,923.5,683.9);
p.frameBounds = [rect, new cjs.Rectangle(-32.5,88.8,893.6,659.7), new cjs.Rectangle(-32.5,88.8,863.9,635.6), new cjs.Rectangle(-32.5,88.8,860,611.5), new cjs.Rectangle(-32.5,88.8,860,587.4), new cjs.Rectangle(-32.5,88.8,860,563.2), new cjs.Rectangle(-32.5,88.8,860,539.1), new cjs.Rectangle(-32.5,88.8,860,515), rect=new cjs.Rectangle(-32.5,88.8,860,514.4), rect];


(lib.lips_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_lips1
	this.instance = new lib.hero2_lips1();
	this.instance.setTransform(1.3,2.5);

	this.instance_1 = new lib.hero2_lips2_img();
	this.instance_1.setTransform(-48.5,-18.5);

	this.instance_2 = new lib.hero2_lips3_img();
	this.instance_2.setTransform(-48.5,-18.5);

	this.instance_3 = new lib.hero2_lips4_img();
	this.instance_3.setTransform(-47.5,-18);

	this.instance_4 = new lib.hero2_lips5_img();
	this.instance_4.setTransform(-48.5,-18.5);

	this.instance_5 = new lib.hero2_lips6_img();
	this.instance_5.setTransform(-48,-18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

	// hero2_lips0
	this.instance_6 = new lib.hero2_lips0();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.5,-23.5,119,47);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-59.5,-23.5,119,47.5), new cjs.Rectangle(-59.5,-23.5,119,47), new cjs.Rectangle(-59.5,-23.5,119,47.5)];


(lib.hint_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hint_2_mc();
	this.instance.setTransform(-59.6,-12.6,1,1,-55.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-33.5,x:-36.6,y:-31.6},7).to({rotation:0,x:-0.6,y:-40.6},7).to({rotation:42.2,x:31.4,y:-30.6},8).to({rotation:65.5,x:46.4,y:-15.6},7).to({rotation:42.2,x:31.4,y:-30.6},8).to({rotation:0,x:-0.6,y:-40.6},7).to({rotation:-33.5,x:-36.6,y:-31.6},8).to({rotation:-55.9,x:-59.6,y:-12.6},7).wait(1));

	// graph
	this.instance_1 = new lib.hint_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.5,-80,230.5,160);
p.frameBounds = [rect, new cjs.Rectangle(-116.9,-80,226.9,160), new cjs.Rectangle(-113.3,-80,223.3,160), new cjs.Rectangle(-110,-80,220,160), new cjs.Rectangle(-110,-83.2,220,163.3), new cjs.Rectangle(-110,-86.5,220,166.5), new cjs.Rectangle(-110,-89.5,220,169.6), new cjs.Rectangle(-110,-92.5,220,172.6), new cjs.Rectangle(-110,-93.5,220,173.6), new cjs.Rectangle(-110,-94.2,220,174.2), new cjs.Rectangle(-110,-94.5,220,174.6), new cjs.Rectangle(-110,-94.3,220,174.4), new cjs.Rectangle(-110,-93.9,220,173.9), new cjs.Rectangle(-110,-92.9,220,173), new cjs.Rectangle(-110,-91.7,220,171.8), new cjs.Rectangle(-110,-93.2,220,173.3), new cjs.Rectangle(-110,-94.3,220,174.4), new cjs.Rectangle(-110,-94.9,220,175), new cjs.Rectangle(-110,-95.1,220,175.1), new cjs.Rectangle(-110,-94.7,220,174.8), new cjs.Rectangle(-110,-93.8,220,173.9), new cjs.Rectangle(-110,-92.4,220,172.5), new cjs.Rectangle(-110,-90.6,220,170.7), new cjs.Rectangle(-110,-87.7,220,167.8), new cjs.Rectangle(-110,-84.8,220,164.8), new cjs.Rectangle(-110,-81.5,220,161.5), rect=new cjs.Rectangle(-110,-80,220,160), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110,-82.7,220,162.7), new cjs.Rectangle(-110,-85.4,220,165.5), new cjs.Rectangle(-110,-88.1,220,168.1), new cjs.Rectangle(-110,-90.6,220,170.7), new cjs.Rectangle(-110,-92.7,220,172.8), new cjs.Rectangle(-110,-94.2,220,174.2), new cjs.Rectangle(-110,-95,220,175), new cjs.Rectangle(-110,-95.1,220,175.1), new cjs.Rectangle(-110,-94.6,220,174.6), new cjs.Rectangle(-110,-93.4,220,173.5), new cjs.Rectangle(-110,-91.7,220,171.8), new cjs.Rectangle(-110,-92.8,220,172.8), new cjs.Rectangle(-110,-93.6,220,173.7), new cjs.Rectangle(-110,-94.3,220,174.3), rect=new cjs.Rectangle(-110,-94.4,220,174.5), rect, new cjs.Rectangle(-110,-94.1,220,174.2), new cjs.Rectangle(-110,-93.4,220,173.4), new cjs.Rectangle(-110,-92.5,220,172.6), new cjs.Rectangle(-110,-89.5,220,169.6), new cjs.Rectangle(-110,-86.5,220,166.6), new cjs.Rectangle(-110,-83.3,220,163.3), new cjs.Rectangle(-110,-80,220,160), new cjs.Rectangle(-113.3,-80,223.4,160), new cjs.Rectangle(-117,-80,227,160), new cjs.Rectangle(-120.5,-80,230.5,160)];


(lib.hero2_shadows_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shadows1();
	this.instance.setTransform(0.5,1);

	this.instance_1 = new lib.hero2_shadows2_img();
	this.instance_1.setTransform(-148.8,-41.7);

	this.instance_2 = new lib.hero2_shadows3_img();
	this.instance_2.setTransform(-122,-23.7);

	this.instance_3 = new lib.hero2_shadows4_img();
	this.instance_3.setTransform(-148,-51.7);

	this.instance_4 = new lib.hero2_shadows5_img();
	this.instance_4.setTransform(-122,-23.7);

	this.instance_5 = new lib.hero2_shadows6_img();
	this.instance_5.setTransform(-123,-23.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-134,-41.5,269,85);
p.frameBounds = [rect, new cjs.Rectangle(-148.8,-41.7,300,87), new cjs.Rectangle(-122,-23.7,240,68), new cjs.Rectangle(-148,-51.7,300,97), new cjs.Rectangle(-122,-23.7,240,68), new cjs.Rectangle(-123,-23.2,240,68), null];


(lib.hero2_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 11
	this.instance = new lib.hero2_hat1_img();
	this.instance.setTransform(-196,-292);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero2_fringe_all
	this.instance_1 = new lib.hero2_fringe0_img();
	this.instance_1.setTransform(-187,-255.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// hero2_eyes1
	this.instance_2 = new lib.hero2_eyes1();
	this.instance_2.setTransform(-3,-24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// lips_all
	this.instance_3 = new lib.hero2_lips1();
	this.instance_3.setTransform(-2.2,83.1);

	this.instance_4 = new lib.hero2_lips0();
	this.instance_4.setTransform(-3.5,80.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// hero2_shadows_all
	this.instance_5 = new lib.hero2_shadows1();
	this.instance_5.setTransform(-0.5,-36.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// rouge_all
	this.instance_6 = new lib.hero2_rouge1_5();
	this.instance_6.setTransform(-1.6,-51.6);

	this.instance_7 = new lib.rab1_1();
	this.instance_7.setTransform(-3.5,-110.7);

	this.instance_8 = new lib.hero2_rouge1_3();
	this.instance_8.setTransform(-1.6,-63.6);

	this.instance_9 = new lib.hero2_rouge1_2();
	this.instance_9.setTransform(-1.6,-63.6);

	this.instance_10 = new lib.hero2_rouge1_1();
	this.instance_10.setTransform(-1.6,-63.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	// hero2_body
	this.instance_11 = new lib.hero2_eyebrows0();
	this.instance_11.setTransform(-2.5,-76.8);

	this.instance_12 = new lib.hero2_head();
	this.instance_12.setTransform(-3.5,-47.6);

	this.instance_13 = new lib.hero2_body1();
	this.instance_13.setTransform(0,175.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]}).wait(1));

	// hero2_hair_all
	this.instance_14 = new lib.hero2_hair0_img();
	this.instance_14.setTransform(-164.5,-28.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-292,410,547.9);
p.frameBounds = [rect];


(lib.hero2_hair_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hair0();

	this.instance_1 = new lib.hero2_hair1_img();
	this.instance_1.setTransform(-218.8,-278.7);

	this.instance_2 = new lib.hero2_hair2_img();
	this.instance_2.setTransform(-154,-120);

	this.instance_3 = new lib.hero2_hair3_img();
	this.instance_3.setTransform(-4,-166.9);

	this.instance_4 = new lib.hero2_hair4_img();
	this.instance_4.setTransform(-187,-249.9);

	this.instance_5 = new lib.hero2_hair5_img();
	this.instance_5.setTransform(-205,-219);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-163.5,-142,327,284);
p.frameBounds = [rect, new cjs.Rectangle(-218.8,-278.7,427,421), new cjs.Rectangle(-154,-120,317,262), new cjs.Rectangle(-4,-166.9,193,308), new cjs.Rectangle(-187,-249.9,367,392), new cjs.Rectangle(-205,-219,427,360)];


(lib.hero2_fringe_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe0();

	this.instance_1 = new lib.hero2_fringe1_img();
	this.instance_1.setTransform(-280.5,-200);

	this.instance_2 = new lib.hero2_fringe2_img();
	this.instance_2.setTransform(-230,-145);

	this.instance_3 = new lib.hero2_fringe3_img();
	this.instance_3.setTransform(-184,-151);

	this.instance_4 = new lib.hero2_fringe4_img();
	this.instance_4.setTransform(-177,-163);

	this.instance_5 = new lib.hero2_fringe5_img();
	this.instance_5.setTransform(-278,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-182,-126,364,252);
p.frameBounds = [rect, new cjs.Rectangle(-280.5,-200,524,585), new cjs.Rectangle(-230,-145,451,489), new cjs.Rectangle(-184,-151,442,537), new cjs.Rectangle(-177,-163,350,271), new cjs.Rectangle(-278,-150,509,535)];


(lib.hero2_earring_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring1();

	this.instance_1 = new lib.hero2_earring2();
	this.instance_1.setTransform(-1,4.5);

	this.instance_2 = new lib.hero2_earring3();
	this.instance_2.setTransform(-6.5,30.5);

	this.instance_3 = new lib.hero2_earring4();
	this.instance_3.setTransform(-2,8);

	this.instance_4 = new lib.hero2_earring5();
	this.instance_4.setTransform(-0.9,-11.5);

	this.instance_5 = new lib.hero2_earring6();
	this.instance_5.setTransform(-3.8,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-185.5,-55.4,371,110.9);
p.frameBounds = [rect, new cjs.Rectangle(-175,-44,348,97), new cjs.Rectangle(-199.5,-38,386,137), new cjs.Rectangle(-176.2,-45,348.4,106), new cjs.Rectangle(-177.4,-45,353,67), new cjs.Rectangle(-179.9,-42.2,352.3,81), null];


(lib.hero1_hat_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat1();

	this.instance_1 = new lib.hero1_hat2_img();
	this.instance_1.setTransform(-255.3,-130.1,1.4,1.4);

	this.instance_2 = new lib.hero1_hat3_img();
	this.instance_2.setTransform(-143.3,-19.6,1.4,1.4);

	this.instance_3 = new lib.hero1_hat4_img();
	this.instance_3.setTransform(-212.8,-154.4,1.4,1.4);

	this.instance_4 = new lib.hero1_hat5_img();
	this.instance_4.setTransform(-204.8,-19,1.4,1.4);

	this.instance_5 = new lib.hero1_hat6_img();
	this.instance_5.setTransform(-241.6,-121.9,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-206.5,-122,413,244);
p.frameBounds = [rect, new cjs.Rectangle(-255.3,-130.1,516.6,289.8), new cjs.Rectangle(-143.3,-19.6,301,142.8), new cjs.Rectangle(-212.8,-154.4,425.6,331.8), new cjs.Rectangle(-204.8,-19,390.6,180.6), new cjs.Rectangle(-241.6,-121.9,473.2,324.8), null];


(lib.hero1_decor1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_flower1_1();
	this.instance.setTransform(-94.8,-5.7,1,1,-105);

	this.instance_1 = new lib.hero1_flower1_1();
	this.instance_1.setTransform(94.7,-3.1);

	this.instance_2 = new lib.hero1_flower1_2();
	this.instance_2.setTransform(-46.5,20.3);

	this.instance_3 = new lib.hero1_flower1_2();
	this.instance_3.setTransform(-146.9,-10.6,1,1,-90);

	this.instance_4 = new lib.hero1_flower1_2();
	this.instance_4.setTransform(44.5,19.3);

	this.instance_5 = new lib.hero1_flower1_2();
	this.instance_5.setTransform(147.5,-15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-167.4,-40.7,334.9,81.5);
p.frameBounds = [rect];


(lib.hero1_decor_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_decor1();

	this.instance_1 = new lib.hero1_flower2_img();
	this.instance_1.setTransform(-144.7,-63.2);

	this.instance_2 = new lib.hero1_flower3_img();
	this.instance_2.setTransform(-149.3,-113.8);

	this.instance_3 = new lib.hero1_flower4_img();
	this.instance_3.setTransform(-137,-44);

	this.instance_4 = new lib.hero1_flower5_img();
	this.instance_4.setTransform(26,-81);

	this.instance_5 = new lib.hero1_flower6_img();
	this.instance_5.setTransform(-161,-93);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-167.4,-40.7,334.9,81.5);
p.frameBounds = [rect, new cjs.Rectangle(-144.7,-63.2,99,286), new cjs.Rectangle(-149.3,-113.8,128,141), new cjs.Rectangle(-137,-44,265,92), new cjs.Rectangle(26,-81,124,269), new cjs.Rectangle(-161,-93,106,284), null];


(lib.hero_dressup_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hoop
	this.hoop = new lib.hero2_hat_all();
	this.hoop.setTransform(-7.5,-210.5);

	this.timeline.addTween(cjs.Tween.get(this.hoop).wait(1));

	// fringe
	this.fringe = new lib.hero2_fringe_all();
	this.fringe.setTransform(-5,-129.8);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// earrings
	this.earrings = new lib.hero2_earring_all();
	this.earrings.setTransform(-1.5,51.6);

	this.timeline.addTween(cjs.Tween.get(this.earrings).wait(1));

	// body
	this.instance = new lib.hero2_eyes1();
	this.instance.setTransform(-3,-24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// lips
	this.lips = new lib.lips_all();
	this.lips.setTransform(-3.5,80.7);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// shadows
	this.shadows = new lib.hero2_shadows_all();
	this.shadows.setTransform(-0.5,-36.8);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// blush
	this.blush = new lib.rouge_all();
	this.blush.setTransform(-1.6,-57.6);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_1 = new lib.hero2_eyebrows0();
	this.instance_1.setTransform(-2.5,-76.8);

	this.instance_2 = new lib.hero2_head();
	this.instance_2.setTransform(-3.5,-47.6);

	this.instance_3 = new lib.hero2_body1();
	this.instance_3.setTransform(0,175.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// hair
	this.hair = new lib.hero2_hair_all();
	this.hair.setTransform(-1,113.9);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-292,410,547.9);
p.frameBounds = [rect];


(lib.h1_s1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shadow1_2();
	this.instance.setTransform(81.5,-1,1,1,0,0,180);

	this.instance_1 = new lib.hero1_shadow1_2();
	this.instance_1.setTransform(-78.5,-1);

	this.instance_2 = new lib.hero1_shadow1_1();
	this.instance_2.setTransform(-0.9,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-147.4,-62.5,295,125.1);
p.frameBounds = [rect];


(lib.h1_s_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_s1();

	this.instance_1 = new lib.hero1_shadow2_img();
	this.instance_1.setTransform(-161.5,-49.5);

	this.instance_2 = new lib.hero1_shadow3_img();
	this.instance_2.setTransform(-154.2,-44.7);

	this.instance_3 = new lib.hero1_shadow4_img();
	this.instance_3.setTransform(-154.2,-47.2);

	this.instance_4 = new lib.hero1_shadow5_img();
	this.instance_4.setTransform(-144.5,-42.2);

	this.instance_5 = new lib.hero1_shadow6_img();
	this.instance_5.setTransform(-145,-42.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-147.4,-62.5,295,125.1);
p.frameBounds = [rect, new cjs.Rectangle(-161.5,-49.5,324,110), new cjs.Rectangle(-154.2,-44.7,310,105), new cjs.Rectangle(-154.2,-47.2,310,108), new cjs.Rectangle(-144.5,-42.2,293,105), new cjs.Rectangle(-145,-42.2,293,105), null];


(lib.h1_r1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_rouge1_4();
	this.instance.setTransform(-85.5,65.6,1,1,0,0,180);

	this.instance_1 = new lib.hero1_rouge1_4();
	this.instance_1.setTransform(80.5,65.6);

	this.instance_2 = new lib.hero1_rouge1_3();

	this.instance_3 = new lib.hero1_rouge1_2();

	this.instance_4 = new lib.hero1_rouge1_1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-156.5,-149,313,298);
p.frameBounds = [rect];


(lib.h1_r_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_r1();

	this.instance_1 = new lib.hero1_rouge2_img();
	this.instance_1.setTransform(-157,-46.9);

	this.instance_2 = new lib.hero1_rouge3_img();
	this.instance_2.setTransform(-158.5,-29.8);

	this.instance_3 = new lib.hero1_rouge4_img();
	this.instance_3.setTransform(-151,-134);

	this.instance_4 = new lib.hero1_rouge5_img();
	this.instance_4.setTransform(-158,-199.9);

	this.instance_5 = new lib.hero1_rouge6_img();
	this.instance_5.setTransform(-140,-223.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-156.5,-149,313,298);
p.frameBounds = [rect, new cjs.Rectangle(-157,-46.9,314,150), new cjs.Rectangle(-158.5,-29.8,312,114), new cjs.Rectangle(-151,-134,292,308), new cjs.Rectangle(-158,-199.9,173,308), new cjs.Rectangle(-140,-223.9,289,319), null];


(lib.h1_l1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips1_1();
	this.instance.setTransform(-0.5,-12.3);

	this.instance_1 = new lib.hero1_lips1_2();
	this.instance_1.setTransform(0.5,2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.5,-19.3,103,38.8);
p.frameBounds = [rect];


(lib.h1_l_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1_l1();

	this.instance_1 = new lib.hero1_lips2_img();
	this.instance_1.setTransform(-49.7,-19.8);

	this.instance_2 = new lib.hero1_lips3_img();
	this.instance_2.setTransform(-49.8,-19.5);

	this.instance_3 = new lib.hero1_lips4_img();
	this.instance_3.setTransform(-51,-19.7);

	this.instance_4 = new lib.hero1_lips5_img();
	this.instance_4.setTransform(-50,-19.2);

	this.instance_5 = new lib.hero1_lips6_img();
	this.instance_5.setTransform(-49.2,-19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.5,-19.3,103,38.8);
p.frameBounds = [rect, new cjs.Rectangle(-49.7,-19.8,101,39), new cjs.Rectangle(-49.8,-19.5,112,58), new cjs.Rectangle(-51,-19.7,102,32), new cjs.Rectangle(-50,-19.2,101,39), new cjs.Rectangle(-49.2,-19.7,101,39)];


(lib.filters_exit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.filters_body_exit_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},19).to({scaleX:1,scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect, new cjs.Rectangle(-44.7,-24.8,89.6,49.8), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.2,-24.6,88.6,49.2), new cjs.Rectangle(-44,-24.4,88.1,49), new cjs.Rectangle(-43.8,-24.3,87.7,48.7), new cjs.Rectangle(-43.5,-24.2,87.2,48.4), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.1,-23.9,86.2,47.9), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-42.6,-23.6,85.3,47.3), new cjs.Rectangle(-42.3,-23.5,84.8,47.1), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-41.9,-23.2,83.9,46.6), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.4,-23,82.9,46.1), new cjs.Rectangle(-41.2,-22.8,82.4,45.8), new cjs.Rectangle(-40.9,-22.7,82,45.6), new cjs.Rectangle(-40.7,-22.6,81.5,45.3), new cjs.Rectangle(-40.5,-22.5,81,45), new cjs.Rectangle(-40.6,-22.5,81.3,45.2), new cjs.Rectangle(-40.7,-22.6,81.6,45.3), new cjs.Rectangle(-40.9,-22.7,81.9,45.5), new cjs.Rectangle(-41,-22.8,82.2,45.7), new cjs.Rectangle(-41.2,-22.9,82.5,45.8), new cjs.Rectangle(-41.3,-22.9,82.8,46), new cjs.Rectangle(-41.5,-23,83.1,46.2), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.8,-23.2,83.7,46.5), new cjs.Rectangle(-41.9,-23.3,84,46.7), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-42.2,-23.4,84.6,47), new cjs.Rectangle(-42.4,-23.5,84.9,47.2), new cjs.Rectangle(-42.5,-23.6,85.2,47.3), new cjs.Rectangle(-42.7,-23.7,85.5,47.5), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-43,-23.9,86.1,47.8), new cjs.Rectangle(-43.1,-23.9,86.4,48), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.4,-24.1,87,48.3), new cjs.Rectangle(-43.6,-24.2,87.3,48.5), new cjs.Rectangle(-43.7,-24.3,87.6,48.7), new cjs.Rectangle(-43.9,-24.4,87.9,48.8), new cjs.Rectangle(-44,-24.4,88.2,49), new cjs.Rectangle(-44.2,-24.5,88.5,49.2), new cjs.Rectangle(-44.3,-24.6,88.8,49.3), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.6,-24.8,89.4,49.7), new cjs.Rectangle(-44.8,-24.9,89.7,49.8), new cjs.Rectangle(-45,-25,90,50)];


(lib.els_eyes1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.eyes3();
	this.instance.setTransform(24,-36.6,1,1,0,0,0,123.5,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.3,-29.9,240,33);
p.frameBounds = [rect];


(lib.els_eyes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.eyes1();
	this.instance.setTransform(24,-36.6,1,1,0,0,0,123.5,29.4);

	this.instance_1 = new lib.eyes2();
	this.instance_1.setTransform(24,-36.6,1,1,0,0,0,123.5,29.4);

	this.instance_2 = new lib.eyes3();
	this.instance_2.setTransform(24,-36.6,1,1,0,0,0,123.5,29.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},60).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.3,-66.3,247,59);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-91.9,-54.6,237,48), rect, rect=new cjs.Rectangle(-96.3,-29.9,240,33), rect, rect=new cjs.Rectangle(-91.9,-54.6,237,48), rect];


(lib.corner_filters_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_filter_mc();
	this.instance.setTransform(14.9,-14.7,1,1,45,0,0,0.6,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.corner_filters_img();
	this.instance_1.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-99.3,189.4,189.3);
p.frameBounds = [rect];


(lib.check_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(1));

	// animation
	this.instance = new lib.check_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.check_7_img();
	this.instance_1.setTransform(-90,-90);

	this.instance_2 = new lib.check_6_img();
	this.instance_2.setTransform(-90,-90);

	this.instance_3 = new lib.check_5_img();
	this.instance_3.setTransform(-90,-90);

	this.instance_4 = new lib.check_4_img();
	this.instance_4.setTransform(-90,-90);

	this.instance_5 = new lib.check_3_img();
	this.instance_5.setTransform(-90,-90);

	this.instance_6 = new lib.check_2_img();
	this.instance_6.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{alpha:0.012}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance,p:{alpha:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_hint_filter_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"es":4,"pt":5});

	// graph
	this.instance = new lib.hint_filter_en_img();
	this.instance.setTransform(-90,-30);

	this.instance_1 = new lib.hint_filter_ru_img();
	this.instance_1.setTransform(-90,-30);

	this.instance_2 = new lib.hint_filter_de_img();
	this.instance_2.setTransform(-90,-30);

	this.instance_3 = new lib.hint_filter_fr_img();
	this.instance_3.setTransform(-90,-30);

	this.instance_4 = new lib.hint_filter_es_img();
	this.instance_4.setTransform(-90,-30);

	this.instance_5 = new lib.hint_filter_pt_img();
	this.instance_5.setTransform(-90,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

	// decor
	this.instance_6 = new lib.hint_filter_arrow_mc();
	this.instance_6.setTransform(60,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-30,210,150);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.body_category_2_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_category_1_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(319).to({rotation:-15},10).to({rotation:15},20).to({rotation:0},10).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-76.9,-76.9,153.9,153.9), new cjs.Rectangle(-78.5,-78.5,157.1,157.1), new cjs.Rectangle(-80.4,-80.4,160.9,160.9), new cjs.Rectangle(-82.1,-82.1,164.4,164.4), new cjs.Rectangle(-83.9,-83.9,167.8,167.8), new cjs.Rectangle(-85.5,-85.5,171.1,171.1), new cjs.Rectangle(-87.1,-87.1,174.4,174.4), new cjs.Rectangle(-88.7,-88.7,177.4,177.4), new cjs.Rectangle(-90.1,-90.2,180.4,180.4), new cjs.Rectangle(-91.8,-91.8,183.7,183.7), new cjs.Rectangle(-90.1,-90.2,180.4,180.4), new cjs.Rectangle(-88.7,-88.7,177.4,177.4), new cjs.Rectangle(-87.4,-87.4,174.9,174.9), new cjs.Rectangle(-85.5,-85.5,171.1,171.1), new cjs.Rectangle(-83.9,-83.9,167.8,167.8), new cjs.Rectangle(-82.1,-82.1,164.4,164.4), new cjs.Rectangle(-80.4,-80.4,160.9,160.9), new cjs.Rectangle(-78.8,-78.8,157.6,157.6), new cjs.Rectangle(-76.9,-76.9,153.9,153.9), new cjs.Rectangle(-74.9,-74.9,150,150), new cjs.Rectangle(-76.9,-76.9,153.8,153.8), new cjs.Rectangle(-78.8,-78.8,157.6,157.6), new cjs.Rectangle(-80.3,-80.4,160.8,160.8), new cjs.Rectangle(-82.1,-82.1,164.4,164.4), new cjs.Rectangle(-83.9,-83.8,167.8,167.8), new cjs.Rectangle(-85.5,-85.5,171.1,171.1), new cjs.Rectangle(-87.4,-87.4,174.9,174.9), new cjs.Rectangle(-88.7,-88.7,177.4,177.4), new cjs.Rectangle(-90.2,-90.1,180.4,180.4), new cjs.Rectangle(-91.8,-91.8,183.7,183.7), new cjs.Rectangle(-90.2,-90.1,180.4,180.4), new cjs.Rectangle(-88.7,-88.7,177.4,177.4), new cjs.Rectangle(-87.1,-87.1,174.4,174.4), new cjs.Rectangle(-85.5,-85.5,171.1,171.1), new cjs.Rectangle(-83.9,-83.9,167.8,167.8), new cjs.Rectangle(-82.1,-82.1,164.4,164.4), new cjs.Rectangle(-80.4,-80.4,160.9,160.9), new cjs.Rectangle(-78.5,-78.5,157.1,157.1), new cjs.Rectangle(-76.9,-76.9,153.9,153.9), rect=new cjs.Rectangle(-75,-75,150,150), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_category_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_category_1_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(319).to({rotation:-15},10).to({rotation:15},20).to({rotation:0},10).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-82,-82,164.1,164.1), new cjs.Rectangle(-83.8,-83.8,167.6,167.6), new cjs.Rectangle(-85.7,-85.7,171.6,171.6), new cjs.Rectangle(-87.6,-87.6,175.3,175.3), new cjs.Rectangle(-89.4,-89.4,179,179), new cjs.Rectangle(-91.2,-91.2,182.6,182.6), new cjs.Rectangle(-92.9,-92.9,186,186), new cjs.Rectangle(-94.6,-94.6,189.3,189.3), new cjs.Rectangle(-96.2,-96.2,192.5,192.5), new cjs.Rectangle(-97.9,-97.9,195.9,195.9), new cjs.Rectangle(-96.2,-96.2,192.4,192.4), new cjs.Rectangle(-94.6,-94.6,189.3,189.3), new cjs.Rectangle(-93.2,-93.2,186.5,186.5), new cjs.Rectangle(-91.2,-91.2,182.5,182.5), new cjs.Rectangle(-89.4,-89.4,179,179), new cjs.Rectangle(-87.6,-87.6,175.3,175.3), new cjs.Rectangle(-85.7,-85.7,171.6,171.6), new cjs.Rectangle(-84,-84,168.1,168.1), new cjs.Rectangle(-82,-82,164.1,164.1), new cjs.Rectangle(-79.9,-79.9,160,160), new cjs.Rectangle(-82,-82,164.1,164.1), new cjs.Rectangle(-84,-84,168.1,168.1), new cjs.Rectangle(-85.7,-85.7,171.5,171.5), new cjs.Rectangle(-87.6,-87.6,175.3,175.3), new cjs.Rectangle(-89.4,-89.4,179,179), new cjs.Rectangle(-91.2,-91.2,182.5,182.5), new cjs.Rectangle(-93.2,-93.2,186.5,186.5), new cjs.Rectangle(-94.6,-94.6,189.3,189.3), new cjs.Rectangle(-96.2,-96.2,192.4,192.4), new cjs.Rectangle(-97.9,-97.9,195.9,195.9), new cjs.Rectangle(-96.2,-96.2,192.4,192.4), new cjs.Rectangle(-94.6,-94.6,189.3,189.3), new cjs.Rectangle(-92.9,-92.9,186,186), new cjs.Rectangle(-91.2,-91.2,182.5,182.5), new cjs.Rectangle(-89.4,-89.4,179,179), new cjs.Rectangle(-87.6,-87.6,175.3,175.3), new cjs.Rectangle(-85.7,-85.7,171.6,171.6), new cjs.Rectangle(-83.8,-83.8,167.6,167.6), new cjs.Rectangle(-82,-82,164.1,164.1), rect=new cjs.Rectangle(-80,-80,160,160), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_category_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_category_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(259).to({rotation:-15},10).to({rotation:15},20).to({rotation:0},10).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-82,-82,164.1,164.1), new cjs.Rectangle(-83.8,-83.8,167.6,167.6), new cjs.Rectangle(-85.7,-85.7,171.6,171.6), new cjs.Rectangle(-87.6,-87.6,175.3,175.3), new cjs.Rectangle(-89.4,-89.4,179,179), new cjs.Rectangle(-91.2,-91.2,182.6,182.6), new cjs.Rectangle(-92.9,-92.9,186,186), new cjs.Rectangle(-94.6,-94.6,189.3,189.3), new cjs.Rectangle(-96.2,-96.2,192.5,192.5), new cjs.Rectangle(-97.9,-97.9,195.9,195.9), new cjs.Rectangle(-96.2,-96.2,192.4,192.4), new cjs.Rectangle(-94.6,-94.6,189.3,189.3), new cjs.Rectangle(-93.2,-93.2,186.5,186.5), new cjs.Rectangle(-91.2,-91.2,182.5,182.5), new cjs.Rectangle(-89.4,-89.4,179,179), new cjs.Rectangle(-87.6,-87.6,175.3,175.3), new cjs.Rectangle(-85.7,-85.7,171.6,171.6), new cjs.Rectangle(-84,-84,168.1,168.1), new cjs.Rectangle(-82,-82,164.1,164.1), new cjs.Rectangle(-79.9,-79.9,160,160), new cjs.Rectangle(-82,-82,164.1,164.1), new cjs.Rectangle(-84,-84,168.1,168.1), new cjs.Rectangle(-85.7,-85.7,171.5,171.5), new cjs.Rectangle(-87.6,-87.6,175.3,175.3), new cjs.Rectangle(-89.4,-89.4,179,179), new cjs.Rectangle(-91.2,-91.2,182.5,182.5), new cjs.Rectangle(-93.2,-93.2,186.5,186.5), new cjs.Rectangle(-94.6,-94.6,189.3,189.3), new cjs.Rectangle(-96.2,-96.2,192.4,192.4), new cjs.Rectangle(-97.9,-97.9,195.9,195.9), new cjs.Rectangle(-96.2,-96.2,192.4,192.4), new cjs.Rectangle(-94.6,-94.6,189.3,189.3), new cjs.Rectangle(-92.9,-92.9,186,186), new cjs.Rectangle(-91.2,-91.2,182.5,182.5), new cjs.Rectangle(-89.4,-89.4,179,179), new cjs.Rectangle(-87.6,-87.6,175.3,175.3), new cjs.Rectangle(-85.7,-85.7,171.6,171.6), new cjs.Rectangle(-83.8,-83.8,167.6,167.6), new cjs.Rectangle(-82,-82,164.1,164.1), rect=new cjs.Rectangle(-80,-80,160,160), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_category_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_category_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(199).to({rotation:-15},10).to({rotation:15},20).to({rotation:0},10).wait(161));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-82,-82,164.1,164.1), new cjs.Rectangle(-83.8,-83.8,167.6,167.6), new cjs.Rectangle(-85.7,-85.7,171.6,171.6), new cjs.Rectangle(-87.6,-87.6,175.3,175.3), new cjs.Rectangle(-89.4,-89.4,179,179), new cjs.Rectangle(-91.2,-91.2,182.6,182.6), new cjs.Rectangle(-92.9,-92.9,186,186), new cjs.Rectangle(-94.6,-94.6,189.3,189.3), new cjs.Rectangle(-96.2,-96.2,192.5,192.5), new cjs.Rectangle(-97.9,-97.9,195.9,195.9), new cjs.Rectangle(-96.2,-96.2,192.4,192.4), new cjs.Rectangle(-94.6,-94.6,189.3,189.3), new cjs.Rectangle(-93.2,-93.2,186.5,186.5), new cjs.Rectangle(-91.2,-91.2,182.5,182.5), new cjs.Rectangle(-89.4,-89.4,179,179), new cjs.Rectangle(-87.6,-87.6,175.3,175.3), new cjs.Rectangle(-85.7,-85.7,171.6,171.6), new cjs.Rectangle(-84,-84,168.1,168.1), new cjs.Rectangle(-82,-82,164.1,164.1), new cjs.Rectangle(-79.9,-79.9,160,160), new cjs.Rectangle(-82,-82,164.1,164.1), new cjs.Rectangle(-84,-84,168.1,168.1), new cjs.Rectangle(-85.7,-85.7,171.5,171.5), new cjs.Rectangle(-87.6,-87.6,175.3,175.3), new cjs.Rectangle(-89.4,-89.4,179,179), new cjs.Rectangle(-91.2,-91.2,182.5,182.5), new cjs.Rectangle(-93.2,-93.2,186.5,186.5), new cjs.Rectangle(-94.6,-94.6,189.3,189.3), new cjs.Rectangle(-96.2,-96.2,192.4,192.4), new cjs.Rectangle(-97.9,-97.9,195.9,195.9), new cjs.Rectangle(-96.2,-96.2,192.4,192.4), new cjs.Rectangle(-94.6,-94.6,189.3,189.3), new cjs.Rectangle(-92.9,-92.9,186,186), new cjs.Rectangle(-91.2,-91.2,182.5,182.5), new cjs.Rectangle(-89.4,-89.4,179,179), new cjs.Rectangle(-87.6,-87.6,175.3,175.3), new cjs.Rectangle(-85.7,-85.7,171.6,171.6), new cjs.Rectangle(-83.8,-83.8,167.6,167.6), new cjs.Rectangle(-82,-82,164.1,164.1), rect=new cjs.Rectangle(-80,-80,160,160), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_category_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_category_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(139).to({rotation:-15},10).to({rotation:15},20).to({rotation:0},10).wait(221));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-82,-82,164.1,164.1), new cjs.Rectangle(-83.8,-83.8,167.6,167.6), new cjs.Rectangle(-85.7,-85.7,171.6,171.6), new cjs.Rectangle(-87.6,-87.6,175.3,175.3), new cjs.Rectangle(-89.4,-89.4,179,179), new cjs.Rectangle(-91.2,-91.2,182.6,182.6), new cjs.Rectangle(-92.9,-92.9,186,186), new cjs.Rectangle(-94.6,-94.6,189.3,189.3), new cjs.Rectangle(-96.2,-96.2,192.5,192.5), new cjs.Rectangle(-97.9,-97.9,195.9,195.9), new cjs.Rectangle(-96.2,-96.2,192.4,192.4), new cjs.Rectangle(-94.6,-94.6,189.3,189.3), new cjs.Rectangle(-93.2,-93.2,186.5,186.5), new cjs.Rectangle(-91.2,-91.2,182.5,182.5), new cjs.Rectangle(-89.4,-89.4,179,179), new cjs.Rectangle(-87.6,-87.6,175.3,175.3), new cjs.Rectangle(-85.7,-85.7,171.6,171.6), new cjs.Rectangle(-84,-84,168.1,168.1), new cjs.Rectangle(-82,-82,164.1,164.1), new cjs.Rectangle(-79.9,-79.9,160,160), new cjs.Rectangle(-82,-82,164.1,164.1), new cjs.Rectangle(-84,-84,168.1,168.1), new cjs.Rectangle(-85.7,-85.7,171.5,171.5), new cjs.Rectangle(-87.6,-87.6,175.3,175.3), new cjs.Rectangle(-89.4,-89.4,179,179), new cjs.Rectangle(-91.2,-91.2,182.5,182.5), new cjs.Rectangle(-93.2,-93.2,186.5,186.5), new cjs.Rectangle(-94.6,-94.6,189.3,189.3), new cjs.Rectangle(-96.2,-96.2,192.4,192.4), new cjs.Rectangle(-97.9,-97.9,195.9,195.9), new cjs.Rectangle(-96.2,-96.2,192.4,192.4), new cjs.Rectangle(-94.6,-94.6,189.3,189.3), new cjs.Rectangle(-92.9,-92.9,186,186), new cjs.Rectangle(-91.2,-91.2,182.5,182.5), new cjs.Rectangle(-89.4,-89.4,179,179), new cjs.Rectangle(-87.6,-87.6,175.3,175.3), new cjs.Rectangle(-85.7,-85.7,171.6,171.6), new cjs.Rectangle(-83.8,-83.8,167.6,167.6), new cjs.Rectangle(-82,-82,164.1,164.1), rect=new cjs.Rectangle(-80,-80,160,160), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_category_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_category_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({rotation:-15},10).to({rotation:15},20).to({rotation:0},10).wait(281));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-82,-82,164.1,164.1), new cjs.Rectangle(-83.8,-83.8,167.6,167.6), new cjs.Rectangle(-85.7,-85.7,171.6,171.6), new cjs.Rectangle(-87.6,-87.6,175.3,175.3), new cjs.Rectangle(-89.4,-89.4,179,179), new cjs.Rectangle(-91.2,-91.2,182.6,182.6), new cjs.Rectangle(-92.9,-92.9,186,186), new cjs.Rectangle(-94.6,-94.6,189.3,189.3), new cjs.Rectangle(-96.2,-96.2,192.5,192.5), new cjs.Rectangle(-97.9,-97.9,195.9,195.9), new cjs.Rectangle(-96.2,-96.2,192.4,192.4), new cjs.Rectangle(-94.6,-94.6,189.3,189.3), new cjs.Rectangle(-93.2,-93.2,186.5,186.5), new cjs.Rectangle(-91.2,-91.2,182.5,182.5), new cjs.Rectangle(-89.4,-89.4,179,179), new cjs.Rectangle(-87.6,-87.6,175.3,175.3), new cjs.Rectangle(-85.7,-85.7,171.6,171.6), new cjs.Rectangle(-84,-84,168.1,168.1), new cjs.Rectangle(-82,-82,164.1,164.1), new cjs.Rectangle(-79.9,-79.9,160,160), new cjs.Rectangle(-82,-82,164.1,164.1), new cjs.Rectangle(-84,-84,168.1,168.1), new cjs.Rectangle(-85.7,-85.7,171.5,171.5), new cjs.Rectangle(-87.6,-87.6,175.3,175.3), new cjs.Rectangle(-89.4,-89.4,179,179), new cjs.Rectangle(-91.2,-91.2,182.5,182.5), new cjs.Rectangle(-93.2,-93.2,186.5,186.5), new cjs.Rectangle(-94.6,-94.6,189.3,189.3), new cjs.Rectangle(-96.2,-96.2,192.4,192.4), new cjs.Rectangle(-97.9,-97.9,195.9,195.9), new cjs.Rectangle(-96.2,-96.2,192.4,192.4), new cjs.Rectangle(-94.6,-94.6,189.3,189.3), new cjs.Rectangle(-92.9,-92.9,186,186), new cjs.Rectangle(-91.2,-91.2,182.5,182.5), new cjs.Rectangle(-89.4,-89.4,179,179), new cjs.Rectangle(-87.6,-87.6,175.3,175.3), new cjs.Rectangle(-85.7,-85.7,171.6,171.6), new cjs.Rectangle(-83.8,-83.8,167.6,167.6), new cjs.Rectangle(-82,-82,164.1,164.1), rect=new cjs.Rectangle(-80,-80,160,160), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_category_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_category_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({rotation:-15},10).to({rotation:15},20).to({rotation:0},10).wait(341));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-82,-82,164.1,164.1), new cjs.Rectangle(-83.8,-83.8,167.6,167.6), new cjs.Rectangle(-85.7,-85.7,171.6,171.6), new cjs.Rectangle(-87.6,-87.6,175.3,175.3), new cjs.Rectangle(-89.4,-89.4,179,179), new cjs.Rectangle(-91.2,-91.2,182.5,182.5), new cjs.Rectangle(-92.9,-92.9,186,186), new cjs.Rectangle(-94.6,-94.6,189.3,189.3), new cjs.Rectangle(-96.2,-96.2,192.4,192.4), new cjs.Rectangle(-97.9,-97.9,195.9,195.9), new cjs.Rectangle(-96.2,-96.2,192.4,192.4), new cjs.Rectangle(-94.6,-94.6,189.3,189.3), new cjs.Rectangle(-93.2,-93.2,186.5,186.5), new cjs.Rectangle(-91.2,-91.2,182.5,182.5), new cjs.Rectangle(-89.4,-89.4,179,179), new cjs.Rectangle(-87.6,-87.6,175.3,175.3), new cjs.Rectangle(-85.7,-85.7,171.6,171.6), new cjs.Rectangle(-84,-84,168.1,168.1), new cjs.Rectangle(-82,-82,164.1,164.1), new cjs.Rectangle(-79.9,-79.9,160,160), new cjs.Rectangle(-82,-82,164.1,164.1), new cjs.Rectangle(-84,-84,168.1,168.1), new cjs.Rectangle(-85.7,-85.7,171.5,171.5), new cjs.Rectangle(-87.6,-87.6,175.3,175.3), new cjs.Rectangle(-89.4,-89.4,179,179), new cjs.Rectangle(-91.2,-91.2,182.5,182.5), new cjs.Rectangle(-93.2,-93.2,186.5,186.5), new cjs.Rectangle(-94.6,-94.6,189.3,189.3), new cjs.Rectangle(-96.2,-96.2,192.4,192.4), new cjs.Rectangle(-97.9,-97.9,195.9,195.9), new cjs.Rectangle(-96.2,-96.2,192.4,192.4), new cjs.Rectangle(-94.6,-94.6,189.3,189.3), new cjs.Rectangle(-92.9,-92.9,186,186), new cjs.Rectangle(-91.2,-91.2,182.5,182.5), new cjs.Rectangle(-89.4,-89.4,179,179), new cjs.Rectangle(-87.6,-87.6,175.3,175.3), new cjs.Rectangle(-85.7,-85.7,171.6,171.6), new cjs.Rectangle(-83.8,-83.8,167.6,167.6), new cjs.Rectangle(-82,-82,164.1,164.1), rect=new cjs.Rectangle(-80,-80,160,160), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.bg_title_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.decor_title_3_mc();
	this.instance.setTransform(0,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(139).to({rotation:-10},10).to({rotation:10},20).to({rotation:0},10).wait(1));

	// animation
	this.instance_1 = new lib.decor_title_2_mc();
	this.instance_1.setTransform(-100,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(79).to({rotation:-10},10).to({rotation:10},20).to({rotation:0},10).wait(61));

	// animation
	this.instance_2 = new lib.decor_title_1_mc();
	this.instance_2.setTransform(110,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({rotation:-10},10).to({rotation:10},20).to({rotation:0},10).wait(121));

	// bg
	this.instance_3 = new lib.bg_title_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(180));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.arrow_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.animation_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.title_mc();
	this.instance.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9,x:-0.4,y:-0.4},39).to({scaleX:1,scaleY:1,x:-0.5,y:-0.5},40).wait(1));

	// bg
	this.instance_1 = new lib.bg_title_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_for_pointer_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_for_pointer_2_mc();
	this.instance.setTransform(0,0,0.111,0.111);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:0.22,scaleY:0.22,alpha:0.898},5).to({scaleX:0.89,scaleY:0.89,alpha:0.012},15).to({_off:true},1).wait(35));

	// animation
	this.instance_1 = new lib.animation_for_pointer_2_mc();
	this.instance_1.setTransform(0,0,0.111,0.111);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({scaleX:0.22,scaleY:0.22,alpha:0.898},5).to({scaleX:0.89,scaleY:0.89,alpha:0.012},15).to({_off:true},1).wait(30));

	// animation
	this.instance_2 = new lib.animation_for_pointer_2_mc();
	this.instance_2.setTransform(0,0,0.111,0.111);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({scaleX:0.22,scaleY:0.22,alpha:0.898},5).to({scaleX:0.89,scaleY:0.89,alpha:0.012},15).to({_off:true},1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(-10,-10,20,20), new cjs.Rectangle(-11.9,-11.9,24,24), new cjs.Rectangle(-13.9,-13.9,28,28), new cjs.Rectangle(-15.9,-15.9,32,32), new cjs.Rectangle(-17.9,-17.9,36,36), new cjs.Rectangle(-20,-20,40,40), new cjs.Rectangle(-23.9,-23.9,48,48), new cjs.Rectangle(-27.9,-27.9,56,56), new cjs.Rectangle(-31.9,-31.9,64,64), new cjs.Rectangle(-35.9,-35.9,72,72), new cjs.Rectangle(-39.9,-39.9,80,80), new cjs.Rectangle(-43.9,-43.9,88,88), new cjs.Rectangle(-47.9,-47.9,96,96), new cjs.Rectangle(-51.9,-51.9,104,104), new cjs.Rectangle(-55.9,-55.9,112,112), new cjs.Rectangle(-59.9,-59.9,120,120), new cjs.Rectangle(-63.9,-63.9,128,128), new cjs.Rectangle(-67.9,-67.9,136,136), new cjs.Rectangle(-71.9,-71.9,144,144), new cjs.Rectangle(-75.9,-75.9,152,152), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-63.9,-63.9,128,128), new cjs.Rectangle(-67.9,-67.9,136,136), new cjs.Rectangle(-71.9,-71.9,144,144), new cjs.Rectangle(-75.9,-75.9,152,152), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-63.9,-63.9,128,128), new cjs.Rectangle(-67.9,-67.9,136,136), new cjs.Rectangle(-71.9,-71.9,144,144), new cjs.Rectangle(-75.9,-75.9,152,152), new cjs.Rectangle(-80,-80,160,160), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_for_pointer_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.animation_for_pointer_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];


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
	this.instance.setTransform(600,300);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.41},0).wait(1).to({alpha:0.609},0).wait(1).to({alpha:0.801},0).wait(1).to({alpha:1},0).wait(10).to({alpha:0.91},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.73},0).wait(1).to({alpha:0.641},0).wait(1).to({alpha:0.551},0).wait(1).to({alpha:0.461},0).wait(1).to({alpha:0.371},0).wait(1).to({alpha:0.281},0).wait(1).to({alpha:0.191},0).wait(1).to({alpha:0.102},0).wait(1).to({alpha:0.012},0).to({_off:true},1).wait(20));

	// curtain_1
	this.instance_1 = new lib.curtain_1_mc();
	this.instance_1.setTransform(-1000,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({x:-944.4},0).wait(1).to({x:-888.9},0).wait(1).to({x:-833.3},0).wait(1).to({x:-777.7},0).wait(1).to({x:-722.2},0).wait(1).to({x:-666.6},0).wait(1).to({x:-611.1},0).wait(1).to({x:-555.5},0).wait(1).to({x:-500},0).wait(1).to({x:-444.4},0).wait(1).to({x:-388.9},0).wait(1).to({x:-333.3},0).wait(1).to({x:-277.7},0).wait(1).to({x:-222.2},0).wait(1).to({x:-166.6},0).wait(1).to({x:-111.1},0).wait(1).to({x:-55.5},0).wait(1).to({x:0},0).wait(10).to({x:-33.3},0).wait(1).to({x:-66.6},0).wait(1).to({x:-100},0).wait(1).to({x:-133.3},0).wait(1).to({x:-166.6},0).wait(1).to({x:-200},0).wait(1).to({x:-233.3},0).wait(1).to({x:-266.6},0).wait(1).to({x:-300},0).wait(1).to({x:-333.3},0).wait(1).to({x:-366.6},0).wait(1).to({x:-400},0).wait(1).to({x:-433.3},0).wait(1).to({x:-466.6},0).wait(1).to({x:-500},0).wait(1).to({x:-533.3},0).wait(1).to({x:-566.6},0).wait(1).to({x:-600},0).wait(1).to({x:-633.3},0).wait(1).to({x:-666.6},0).wait(1).to({x:-700},0).wait(1).to({x:-733.3},0).wait(1).to({x:-766.6},0).wait(1).to({x:-800},0).wait(1).to({x:-833.3},0).wait(1).to({x:-866.6},0).wait(1).to({x:-900},0).wait(1).to({x:-933.3},0).wait(1).to({x:-966.6},0).wait(1).to({x:-1000},0).wait(2));

	// curtain_2
	this.instance_2 = new lib.curtain_2_mc();
	this.instance_2.setTransform(1000,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({x:944.5},0).wait(1).to({x:888.9},0).wait(1).to({x:833.4},0).wait(1).to({x:777.8},0).wait(1).to({x:722.2},0).wait(1).to({x:666.7},0).wait(1).to({x:611.1},0).wait(1).to({x:555.6},0).wait(1).to({x:500},0).wait(1).to({x:444.5},0).wait(1).to({x:388.9},0).wait(1).to({x:333.4},0).wait(1).to({x:277.8},0).wait(1).to({x:222.3},0).wait(1).to({x:166.7},0).wait(1).to({x:111.1},0).wait(1).to({x:55.6},0).wait(1).to({x:0},0).wait(10).to({x:33.4},0).wait(1).to({x:66.7},0).wait(1).to({x:100},0).wait(1).to({x:133.4},0).wait(1).to({x:166.7},0).wait(1).to({x:200},0).wait(1).to({x:233.4},0).wait(1).to({x:266.7},0).wait(1).to({x:300},0).wait(1).to({x:333.4},0).wait(1).to({x:366.7},0).wait(1).to({x:400},0).wait(1).to({x:433.4},0).wait(1).to({x:466.7},0).wait(1).to({x:500},0).wait(1).to({x:533.4},0).wait(1).to({x:566.7},0).wait(1).to({x:600},0).wait(1).to({x:633.4},0).wait(1).to({x:666.7},0).wait(1).to({x:700},0).wait(1).to({x:733.4},0).wait(1).to({x:766.7},0).wait(1).to({x:800},0).wait(1).to({x:833.4},0).wait(1).to({x:866.7},0).wait(1).to({x:900},0).wait(1).to({x:933.4},0).wait(1).to({x:966.7},0).wait(1).to({x:1000},0).wait(2));

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
	this.instance.setTransform(200,200,0.6,0.6);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(50,110,300,180);
p.frameBounds = [rect, new cjs.Rectangle(46.3,106.8,302.5,181.5), new cjs.Rectangle(35.2,97.1,309.9,186), new cjs.Rectangle(16.7,81.1,322.2,193.4), new cjs.Rectangle(-9.3,58.6,339.5,203.7), new cjs.Rectangle(-42.6,29.7,361.7,217.1), new cjs.Rectangle(-83.3,-5.5,388.9,233.4), new cjs.Rectangle(-131.4,-47.2,421,252.6), new cjs.Rectangle(-187,-95.4,458,274.8), new cjs.Rectangle(-250,-150,500,300)];


(lib.radio_button_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.radio_button_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// text
	this.instance = new lib.title_filter_3_mc();
	this.instance.setTransform(15.5,-20,1,1,0,0,0,0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3aDHIAAmNMAu1AAAIAAGNg");
	this.shape.setTransform(130,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,300,40);
p.frameBounds = [rect];


(lib.radio_button_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.radio_button_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// text
	this.instance = new lib.title_filter_2_mc();
	this.instance.setTransform(15.5,-20,1,1,0,0,0,0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3aDHIAAmNMAu1AAAIAAGNg");
	this.shape.setTransform(130,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,300,40.5);
p.frameBounds = [rect];


(lib.radio_button_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.radio_button_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// text
	this.instance = new lib.title_filter_1_mc();
	this.instance.setTransform(15.5,-20,1,1,0,0,0,0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3aDHIAAmNMAu1AAAIAAGNg");
	this.shape.setTransform(130,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,300,40);
p.frameBounds = [rect];


(lib.radio_button_1_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.radio_button_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// text
	this.instance = new lib.title_filter_0_mc();
	this.instance.setTransform(15.5,-20,1,1,0,0,0,0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3aDHIAAmNMAu1AAAIAAGNg");
	this.shape.setTransform(130,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,300,40);
p.frameBounds = [rect];


(lib.output_numbers_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chars
	this.char_2 = new lib.output_numbers_3_mc();
	this.char_2.setTransform(26,0);

	this.char_1 = new lib.output_numbers_3_mc();

	this.char_0 = new lib.output_numbers_3_mc();
	this.char_0.setTransform(-26,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.char_0},{t:this.char_1},{t:this.char_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-20,92,40);
p.frameBounds = [rect];


(lib.output_numbers_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2017 edapskov v 3.0
		*/
		createjs.EventDispatcher.initialize(this);
		/*
		
		*/
		this.gotoAndStop(0);
		this.chars_mc.gotoAndStop(0);
		/*
		
		*/
		var _INTERVAL = 100;
		/*
		
		*/
		var _that = this;
		var _value_num = 0;
		var _value_str = "0";
		var _startValue_num = 0;
		var _finalValue_num = 0;
		var _duration_num = 0;
		var _partValue_num = 0;
		var _maxChars_num = Number(this.chars_mc.numChildren);
		var _idInterval;
		/*
		
		*/
		_updateValueFunc();
		/*
		
		*/
		this.setValueFunc = function(value_num)
		{
			/*
			
			*/
			if(value_num === undefined)
			{
				value_num = 0;
			}
			else
			{
				value_num = Number(value_num);
			}
			/*
			
			*/
			_value_num = value_num;
			/*
			
			*/
			_updateValueFunc();
		}
		/*
		
		*/
		this.setAnimatedValueFunc = function(startValue_num, finalValue_num, duration_num, delay_num)
		{
			/*
			
			*/
			if(startValue_num === undefined)
			{
				startValue_num = 0;
			}
			else
			{
				startValue_num = Number(startValue_num);
			}
			/*
			
			*/
			if(finalValue_num === undefined)
			{
				finalValue_num = 0;
			}
			else
			{
				finalValue_num = Number(finalValue_num);
			}
			/*
			
			*/
			if(duration_num === undefined)
			{
				duration_num = 1;
			}
			else
			{
				duration_num = Number(duration_num);
			}
			/*
			
			*/
			if(delay_num === undefined)
			{
				delay_num = 0;
			}
			else
			{
				delay_num = Number(delay_num);
			}
			/*
			
			*/
			_value_num = startValue_num;
			_startValue_num = startValue_num;
			_finalValue_num = finalValue_num;
			_duration_num = duration_num;
			/*
			
			*/
			if(delay_num > 0)
			{
				setTimeout(_onStartIntervalFunc, delay_num * 1000);
			}
			else
			{
				_onStartIntervalFunc();
			}
		}
		/*
		
		*/
		function _onStartIntervalFunc()
		{
			var tick_num = (_duration_num * 1000) / _INTERVAL;
			_partValue_num = Math.ceil((_finalValue_num - _startValue_num) / tick_num);
			_idInterval = setInterval(_onTickIntervalFunc, _INTERVAL);
		}
		/*
		
		*/
		function _onTickIntervalFunc()
		{
			/*
			
			*/
			_value_num += _partValue_num;
			/*
			
			*/
			if(_value_num > _finalValue_num)
			{
				/*
				
				*/
				_value_num = _finalValue_num;
				/*
				
				*/
				clearInterval(_idInterval);
				/*
				
				*/
				var user_event = new createjs.Event("completed_animation");
				user_event.numberValue = _value_num;
				_that.dispatchEvent(user_event);
			}
			/*
			
			*/
			_updateValueFunc();
		}
		/*
		
		*/
		function _updateValueFunc()
		{
			/*
			
			*/
			_value_str = _value_num.toString();
			_value_str = String(_value_str).trim();
			/*
			
			*/
			if(_value_str.length > _maxChars_num)
			{
				_value_str = _value_str.substr(0, _maxChars_num);
			}
			/*
			
			*/
			var i = _maxChars_num - 1;
			var j = _value_str.length - 1;
			var char_mc;
			while(i >= 0)
			{
				/*
				
				*/
				if(_that.chars_mc["char_" + i])
				{
					/*
					
					*/
					char_mc = _that.chars_mc["char_" + i];
					char_mc.name = "char_" + i;
					/*
					
					*/
					if(j >= 0)
					{
						char_mc.visible = true;
						char_mc.gotoAndStop(parseInt(_value_str.charAt(j)));
					}
					else
					{
						char_mc.visible = false;
						char_mc.gotoAndStop(0);
					}
				}
				/*
				
				*/
				i--;
				j--;
			}
		}
		/*
		
		*/
		function _getNumberValueFunc()
		{
			/*
			
			*/
			var result_num = parseInt(_value_str);
			/*
			
			*/
			if(isNaN(result_num))
			{
				result_num = 0;
			}
			/*
			
			*/
			return result_num;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.chars_mc = new lib.output_numbers_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.chars_mc).wait(1));

	// bg
	this.instance = new lib.indicator_part_5_mc();
	this.instance.setTransform(60,0,0.899,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-20,124,40);
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
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.63,scaleY:0.62,alpha:0.012},29).wait(20).to({scaleY:0.63},0).to({scaleX:1,scaleY:1,alpha:0.801},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect, new cjs.Rectangle(-44.4,-44.4,88.9,88.9), new cjs.Rectangle(-43.8,-43.8,87.7,87.7), new cjs.Rectangle(-43.2,-43.2,86.5,86.5), new cjs.Rectangle(-42.6,-42.6,85.4,85.4), new cjs.Rectangle(-42,-42,84.2,84.2), new cjs.Rectangle(-41.5,-41.5,83,83), new cjs.Rectangle(-40.9,-40.9,81.9,81.9), new cjs.Rectangle(-40.3,-40.3,80.7,80.7), new cjs.Rectangle(-39.7,-39.7,79.6,79.5), new cjs.Rectangle(-39.1,-39.1,78.4,78.4), new cjs.Rectangle(-38.5,-38.5,77.2,77.2), new cjs.Rectangle(-38,-38,76.1,76), new cjs.Rectangle(-37.4,-37.4,74.9,74.9), new cjs.Rectangle(-36.8,-36.8,73.7,73.7), new cjs.Rectangle(-36.2,-36.3,72.6,72.5), new cjs.Rectangle(-35.6,-35.7,71.4,71.4), new cjs.Rectangle(-35.1,-35.1,70.2,70.2), new cjs.Rectangle(-34.5,-34.5,69.1,69), new cjs.Rectangle(-33.9,-33.9,67.9,67.9), new cjs.Rectangle(-33.3,-33.3,66.7,66.7), new cjs.Rectangle(-32.7,-32.8,65.6,65.5), new cjs.Rectangle(-32.1,-32.2,64.4,64.4), new cjs.Rectangle(-31.6,-31.6,63.3,63.2), new cjs.Rectangle(-31,-31,62.1,62), new cjs.Rectangle(-30.4,-30.4,60.9,60.9), new cjs.Rectangle(-29.8,-29.8,59.8,59.7), new cjs.Rectangle(-29.2,-29.3,58.6,58.5), new cjs.Rectangle(-28.7,-28.7,57.4,57.4), rect=new cjs.Rectangle(-28.1,-28.1,56.3,56.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-28.5,-28.5,57.1,57.1), new cjs.Rectangle(-28.9,-28.9,58,58), new cjs.Rectangle(-29.3,-29.3,58.8,58.8), new cjs.Rectangle(-29.8,-29.8,59.6,59.6), new cjs.Rectangle(-30.2,-30.2,60.5,60.5), new cjs.Rectangle(-30.6,-30.6,61.3,61.3), new cjs.Rectangle(-31,-31,62.2,62.2), new cjs.Rectangle(-31.4,-31.4,63,63), new cjs.Rectangle(-31.9,-31.9,63.9,63.9), new cjs.Rectangle(-32.3,-32.3,64.7,64.7), new cjs.Rectangle(-32.7,-32.7,65.6,65.5), new cjs.Rectangle(-33.1,-33.1,66.4,66.4), new cjs.Rectangle(-33.6,-33.6,67.2,67.2), new cjs.Rectangle(-34,-34,68.1,68.1), new cjs.Rectangle(-34.4,-34.4,68.9,68.9), new cjs.Rectangle(-34.8,-34.8,69.8,69.8), new cjs.Rectangle(-35.2,-35.2,70.6,70.6), new cjs.Rectangle(-35.7,-35.7,71.5,71.5), new cjs.Rectangle(-36.1,-36.1,72.3,72.3), new cjs.Rectangle(-36.5,-36.5,73.1,73.1), new cjs.Rectangle(-36.9,-36.9,74,74), new cjs.Rectangle(-37.4,-37.4,74.8,74.8), new cjs.Rectangle(-37.8,-37.8,75.7,75.7), new cjs.Rectangle(-38.2,-38.2,76.5,76.5), new cjs.Rectangle(-38.6,-38.6,77.4,77.4), new cjs.Rectangle(-39,-39,78.2,78.2), new cjs.Rectangle(-39.5,-39.5,79.1,79.1), new cjs.Rectangle(-39.9,-39.9,79.9,79.9), new cjs.Rectangle(-40.3,-40.3,80.7,80.7), new cjs.Rectangle(-40.7,-40.7,81.6,81.6), new cjs.Rectangle(-41.2,-41.2,82.4,82.4), new cjs.Rectangle(-41.6,-41.6,83.3,83.3), new cjs.Rectangle(-42,-42,84.1,84.1), new cjs.Rectangle(-42.4,-42.4,85,85), new cjs.Rectangle(-42.8,-42.8,85.8,85.8), new cjs.Rectangle(-43.3,-43.3,86.6,86.6), new cjs.Rectangle(-43.7,-43.7,87.5,87.5), new cjs.Rectangle(-44.1,-44.1,88.3,88.3), new cjs.Rectangle(-44.5,-44.5,89.2,89.2), new cjs.Rectangle(-45,-45,90,90)];


(lib.TrackMove = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.parent.removeChild(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// animation
	this.instance = new lib.track_move_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.5,scaleY:0.5},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect, new cjs.Rectangle(-49.1,-49.1,98.3,98.3), new cjs.Rectangle(-48.2,-48.2,96.6,96.6), new cjs.Rectangle(-47.4,-47.4,94.9,94.9), new cjs.Rectangle(-46.5,-46.5,93.1,93.1), new cjs.Rectangle(-45.6,-45.6,91.4,91.4), new cjs.Rectangle(-44.8,-44.8,89.7,89.7), new cjs.Rectangle(-43.9,-43.9,88,88), new cjs.Rectangle(-43.1,-43.1,86.2,86.2), new cjs.Rectangle(-42.2,-42.2,84.5,84.5), new cjs.Rectangle(-41.3,-41.3,82.8,82.8), new cjs.Rectangle(-40.5,-40.5,81.1,81.1), new cjs.Rectangle(-39.6,-39.6,79.3,79.3), new cjs.Rectangle(-38.7,-38.7,77.6,77.6), new cjs.Rectangle(-37.9,-37.9,75.9,75.9), new cjs.Rectangle(-37,-37,74.2,74.2), new cjs.Rectangle(-36.2,-36.2,72.4,72.4), new cjs.Rectangle(-35.3,-35.3,70.7,70.7), new cjs.Rectangle(-34.4,-34.4,69,69), new cjs.Rectangle(-33.6,-33.6,67.3,67.3), new cjs.Rectangle(-32.7,-32.7,65.5,65.5), new cjs.Rectangle(-31.8,-31.8,63.8,63.8), new cjs.Rectangle(-31,-31,62.1,62.1), new cjs.Rectangle(-30.1,-30.1,60.4,60.4), new cjs.Rectangle(-29.3,-29.3,58.6,58.6), new cjs.Rectangle(-28.4,-28.4,56.9,56.9), new cjs.Rectangle(-27.5,-27.5,55.2,55.2), new cjs.Rectangle(-26.7,-26.7,53.5,53.5), new cjs.Rectangle(-25.8,-25.8,51.7,51.7), new cjs.Rectangle(-25,-25,50,50)];


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({x:5},5).to({x:-5},10).to({x:0},5).wait(81));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(99).to({scaleX:0.95},20).to({scaleX:1,scaleY:0.95},20).to({scaleY:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-95,-95,191,190), new cjs.Rectangle(-95,-95,192,190), new cjs.Rectangle(-95,-95,193,190), new cjs.Rectangle(-95,-95,194,190), new cjs.Rectangle(-95,-95,195,190), new cjs.Rectangle(-95,-95,194,190), new cjs.Rectangle(-95,-95,193,190), new cjs.Rectangle(-95,-95,192,190), new cjs.Rectangle(-95,-95,191,190), new cjs.Rectangle(-95,-95,190,190), new cjs.Rectangle(-96,-95,191,190), new cjs.Rectangle(-97,-95,192,190), new cjs.Rectangle(-98,-95,193,190), new cjs.Rectangle(-99,-95,194,190), new cjs.Rectangle(-100,-95,195,190), new cjs.Rectangle(-99,-95,194,190), new cjs.Rectangle(-98,-95,193,190), new cjs.Rectangle(-97,-95,192,190), new cjs.Rectangle(-96,-95,191,190), rect=new cjs.Rectangle(-95,-95,190,190), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.next_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.next_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},10).wait(6));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-96,-96,192,192), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-100,-100,200,200), new cjs.Rectangle(-99.4,-99.4,199,199), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-98.4,-98.4,197,197), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-100,-100,200,200), new cjs.Rectangle(-99.4,-99.4,199,199), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-98.4,-98.4,197,197), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-97.4,-97.4,195,195), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-96.4,-96.4,193,193), new cjs.Rectangle(-95.9,-95.9,192,192), new cjs.Rectangle(-95.4,-95.4,191,191), new cjs.Rectangle(-95,-95,190,190)];


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


(lib.facebook_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.facebook_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.801},0).wait(1).to({scaleX:1.17,scaleY:1.17,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, new cjs.Rectangle(-70,-70,140,140), new cjs.Rectangle(-60,-60,120,120), new cjs.Rectangle(-70,-70,140,140)];


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

	// graph
	this.instance_1 = new lib.banner_2_img();
	this.instance_1.setTransform(-87,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDUUMAAAgomIcHAAMAAAAomg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-130,180,275);
p.frameBounds = [rect];


(lib.banner_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.banner_play_0_mc();
	this.instance.setTransform(0,100,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.banner_1_img();
	this.instance_1.setTransform(-87,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDUTMAAAgolIcHAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-130,180,275);
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


(lib.title_antiblocking_ads_mc = function(mode,startPosition,loop) {
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
		if (lang_str == "zh")
		{
			label_str = "zh";
		}
		/*
		
		*/
		this.body_mc.gotoAndStop(label_str);
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
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-10,1200,620);
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
	this.instance.setTransform(133.3,0,0.889,0.889,0,0,180,-150,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-225.7,426.5,451.4);
p.frameBounds = [rect];


(lib.pointer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_pointer_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.83,scaleY:0.83},14).to({scaleX:1,scaleY:1},15).wait(1));

	// animation
	this.waves_mc = new lib.animation_for_pointer_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.waves_mc).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112,-59,120,120);
p.frameBounds = [rect, new cjs.Rectangle(-110.6,-58.2,118.6,118.6), new cjs.Rectangle(-109.3,-57.5,117.2,117.2), new cjs.Rectangle(-107.9,-56.8,115.7,115.7), new cjs.Rectangle(-106.6,-56.1,114.3,114.3), new cjs.Rectangle(-105.3,-55.4,112.9,112.9), new cjs.Rectangle(-104,-54.7,111.5,111.5), new cjs.Rectangle(-102.6,-54,110,110), new cjs.Rectangle(-101.3,-53.3,108.6,108.6), new cjs.Rectangle(-99.9,-52.6,107.2,107.2), new cjs.Rectangle(-98.6,-51.9,105.7,105.7), new cjs.Rectangle(-97.3,-51.2,104.3,104.3), new cjs.Rectangle(-95.9,-50.5,102.9,102.9), new cjs.Rectangle(-94.6,-49.8,101.5,101.5), new cjs.Rectangle(-93.3,-49.1,100,100), new cjs.Rectangle(-94.5,-49.8,101.4,101.4), new cjs.Rectangle(-95.8,-50.4,102.7,102.7), new cjs.Rectangle(-97,-51.1,104,104), new cjs.Rectangle(-98.3,-51.7,105.4,105.4), new cjs.Rectangle(-99.5,-52.4,106.7,106.7), new cjs.Rectangle(-100.7,-53,108,108), new cjs.Rectangle(-102,-53.7,109.4,109.4), new cjs.Rectangle(-103.2,-54.4,110.7,110.7), new cjs.Rectangle(-104.5,-55,112,112), new cjs.Rectangle(-105.7,-55.7,113.4,113.4), new cjs.Rectangle(-107,-56.3,114.7,114.7), new cjs.Rectangle(-108.2,-57,116,116), new cjs.Rectangle(-109.5,-57.6,117.4,117.4), new cjs.Rectangle(-110.7,-58.3,118.7,118.7), new cjs.Rectangle(-112,-59,120,120)];


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(-133.3,0,0.889,0.889,0,0,0,-150,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-346.5,-225.7,426.5,451.4);
p.frameBounds = [rect];


(lib.makeup1_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// hero1_flower1_1
	this.instance = new lib.hero1_flower1_1();
	this.instance.setTransform(135.1,179.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-105,x:309.1,y:237.4},14).wait(1));

	// hero1_flower1_1
	this.instance_1 = new lib.hero1_flower1_1();
	this.instance_1.setTransform(605.5,192);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:498.5,y:240},14).wait(1));

	// hero1_flower1_2
	this.instance_2 = new lib.hero1_flower1_2();
	this.instance_2.setTransform(199.9,172.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:357.3,y:263.4},14).wait(1));

	// hero1_flower1_2
	this.instance_3 = new lib.hero1_flower1_2();
	this.instance_3.setTransform(79,206.6,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:257,y:232.5},14).wait(1));

	// hero1_flower1_2
	this.instance_4 = new lib.hero1_flower1_2();
	this.instance_4.setTransform(541.3,183.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:448.3,y:262.4},14).wait(1));

	// hero1_flower1_2
	this.instance_5 = new lib.hero1_flower1_2();
	this.instance_5.setTransform(676.3,224.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:551.3,y:227.4},14).wait(1));

	// els_eyes1
	this.instance_6 = new lib.els_eyes1();
	this.instance_6.setTransform(419.2,385.5,1.252,1.252,0,0,0,40,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

	// els_hair01
	this.instance_7 = new lib.els_hair01();
	this.instance_7.setTransform(423.1,197.1,1.252,1.252,0,0,0,79,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

	// Слой 6
	this.instance_8 = new lib.hero1_shadow1_2();
	this.instance_8.setTransform(480,310,1,1,0,0,180);

	this.instance_9 = new lib.hero1_shadow1_2();
	this.instance_9.setTransform(320,310);

	this.instance_10 = new lib.hero1_shadow1_1();
	this.instance_10.setTransform(397.5,312);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(15));

	// Слой 5
	this.instance_11 = new lib.hero1_lips1_1();
	this.instance_11.setTransform(402,455.3);

	this.instance_12 = new lib.hero1_lips1_2();
	this.instance_12.setTransform(403,470.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11}]}).wait(15));

	// els_li1.png
	this.instance_13 = new lib.els_lips0_img();
	this.instance_13.setTransform(336.3,444.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15));

	// Слой 4
	this.instance_14 = new lib.hero1_rouge1_4();
	this.instance_14.setTransform(316.8,420.9,1,1,0,0,180);

	this.instance_15 = new lib.hero1_rouge1_4();
	this.instance_15.setTransform(482.8,420.9);

	this.instance_16 = new lib.hero1_rouge1_3();
	this.instance_16.setTransform(402.3,355.4);

	this.instance_17 = new lib.hero1_rouge1_2();
	this.instance_17.setTransform(402.3,355.4);

	this.instance_18 = new lib.hero1_rouge1_1();
	this.instance_18.setTransform(402.3,355.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(15));

	// body_makeup
	this.instance_19 = new lib.body_makeup_img();
	this.instance_19.setTransform(53,64.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(15));

	// Layer 3
	this.instance_20 = new lib.ts();
	this.instance_20.setTransform(397.5,693.6);
	this.instance_20.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-57.7,860,934.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup1_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// hero1_flower1_1
	this.instance = new lib.hero1_flower1_1();
	this.instance.setTransform(707.1,456.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:135.1,y:179.4},9).wait(1));

	// hero1_flower1_1
	this.instance_1 = new lib.hero1_flower1_1();
	this.instance_1.setTransform(683.3,430);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:605.5,y:192},9).wait(1));

	// hero1_flower1_2
	this.instance_2 = new lib.hero1_flower1_2();
	this.instance_2.setTransform(755.4,466.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:199.9,y:172.9},9).wait(1));

	// hero1_flower1_2
	this.instance_3 = new lib.hero1_flower1_2();
	this.instance_3.setTransform(637,438.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-90,x:79,y:206.6},9).wait(1));

	// hero1_flower1_2
	this.instance_4 = new lib.hero1_flower1_2();
	this.instance_4.setTransform(743.3,439.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:541.3,y:183.4},9).wait(1));

	// hero1_flower1_2
	this.instance_5 = new lib.hero1_flower1_2();
	this.instance_5.setTransform(743.3,439.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:676.3,y:224.4},9).wait(1));

	// els_eyes1
	this.instance_6 = new lib.els_eyes1();
	this.instance_6.setTransform(419.2,385.5,1.252,1.252,0,0,0,40,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// els_hair01
	this.instance_7 = new lib.els_hair01();
	this.instance_7.setTransform(423.1,197.1,1.252,1.252,0,0,0,79,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// Слой 6
	this.instance_8 = new lib.hero1_shadow1_2();
	this.instance_8.setTransform(480,310,1,1,0,0,180);

	this.instance_9 = new lib.hero1_shadow1_2();
	this.instance_9.setTransform(320,310);

	this.instance_10 = new lib.hero1_shadow1_1();
	this.instance_10.setTransform(397.5,312);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(10));

	// Слой 5
	this.instance_11 = new lib.hero1_lips1_1();
	this.instance_11.setTransform(402,455.3);

	this.instance_12 = new lib.hero1_lips1_2();
	this.instance_12.setTransform(403,470.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11}]}).wait(10));

	// els_li1.png
	this.instance_13 = new lib.els_lips0_img();
	this.instance_13.setTransform(336.3,444.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// Слой 4
	this.instance_14 = new lib.hero1_rouge1_4();
	this.instance_14.setTransform(316.8,420.9,1,1,0,0,180);

	this.instance_15 = new lib.hero1_rouge1_4();
	this.instance_15.setTransform(482.8,420.9);

	this.instance_16 = new lib.hero1_rouge1_3();
	this.instance_16.setTransform(402.3,355.4);

	this.instance_17 = new lib.hero1_rouge1_2();
	this.instance_17.setTransform(402.3,355.4);

	this.instance_18 = new lib.hero1_rouge1_1();
	this.instance_18.setTransform(402.3,355.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(10));

	// body_makeup
	this.instance_19 = new lib.body_makeup_img();
	this.instance_19.setTransform(53,64.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(10));

	// Layer 3
	this.instance_20 = new lib.ts();
	this.instance_20.setTransform(397.5,419.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({y:693.6,alpha:0.012},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-57.7,860,745.4);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-32.5,-57.7,860,752.2), new cjs.Rectangle(-32.5,-57.7,860,782.6), new cjs.Rectangle(-32.5,-57.7,860,813.1), new cjs.Rectangle(-32.5,-57.7,860,843.5), new cjs.Rectangle(-32.5,-57.7,860,873.9), new cjs.Rectangle(-32.5,-57.7,860,904.4), new cjs.Rectangle(-32.5,-57.7,860,934.8)];


(lib.makeup1_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// Слой 7
	this.instance = new lib.kist2();
	this.instance.setTransform(153.5,401.1,1,1,161.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:175.5},3).to({x:153.5},3).to({x:175.5},3).to({x:153.5},3).to({x:175.5},3).to({rotation:41.3,x:407.2,y:384.1},8).to({x:443.2,y:353},9).to({x:484.2,y:378.2},11).to({x:401.2,y:390.2},10).to({x:448.2,y:397.2},9).to({x:478.1,y:381.1},9).to({y:702},7).to({_off:true},1).wait(1));

	// Слой 8
	this.instance_1 = new lib.shadows19();
	this.instance_1.setTransform(166.4,439.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({y:698.8},8).to({_off:true},1).wait(56));

	// Слой 3
	this.instance_2 = new lib.hero1_flower1_2();
	this.instance_2.setTransform(755.4,466.4);

	this.instance_3 = new lib.hero1_flower1_2();
	this.instance_3.setTransform(637,438.6);

	this.instance_4 = new lib.hero1_flower1_1();
	this.instance_4.setTransform(707.1,456.9);

	this.instance_5 = new lib.hero1_flower1_2();
	this.instance_5.setTransform(743.3,439.3);

	this.instance_6 = new lib.hero1_flower1_1();
	this.instance_6.setTransform(683.3,430);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(80));

	// els_eyes1
	this.instance_7 = new lib.els_eyes1_2();
	this.instance_7.setTransform(419.2,385.5,1.252,1.252,0,0,0,40,16.9);

	this.instance_8 = new lib.els_eyes1();
	this.instance_8.setTransform(419.2,385.5,1.252,1.252,0,0,0,40,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_8}]},79).wait(1));

	// els_hair01
	this.instance_9 = new lib.els_hair01();
	this.instance_9.setTransform(423.1,197.1,1.252,1.252,0,0,0,79,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(80));

	// Слой 10
	this.instance_10 = new lib.hero1_shadow1_2();
	this.instance_10.setTransform(480,310,1,1,0,0,180);
	this.instance_10.alpha = 0.012;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(23).to({_off:false},0).to({alpha:1},48).wait(9));

	// Слой 9
	this.instance_11 = new lib.hero1_shadow1_2();
	this.instance_11.setTransform(320,310);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(80));

	// Слой 6
	this.instance_12 = new lib.hero1_shadow1_1();
	this.instance_12.setTransform(397.5,312);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(80));

	// els_shad0
	this.instance_13 = new lib.els_shad0();
	this.instance_13.setTransform(404.6,314.4,1,1,0,0,0,103.8,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},79).wait(1));

	// Слой 5
	this.instance_14 = new lib.hero1_lips1_1();
	this.instance_14.setTransform(402,455.3);

	this.instance_15 = new lib.hero1_lips1_2();
	this.instance_15.setTransform(403,470.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14}]}).wait(80));

	// els_li1.png
	this.instance_16 = new lib.els_lips0_img();
	this.instance_16.setTransform(336.3,444.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(80));

	// Слой 4
	this.instance_17 = new lib.hero1_rouge1_4();
	this.instance_17.setTransform(316.8,420.9,1,1,0,0,180);

	this.instance_18 = new lib.hero1_rouge1_4();
	this.instance_18.setTransform(482.8,420.9);

	this.instance_19 = new lib.hero1_rouge1_3();
	this.instance_19.setTransform(402.3,355.4);

	this.instance_20 = new lib.hero1_rouge1_2();
	this.instance_20.setTransform(402.3,355.4);

	this.instance_21 = new lib.hero1_rouge1_1();
	this.instance_21.setTransform(402.3,355.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(80));

	// body_makeup
	this.instance_22 = new lib.body_makeup_img();
	this.instance_22.setTransform(53,64.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(80));

	// Layer 3
	this.instance_23 = new lib.table1();
	this.instance_23.setTransform(702,510.6);

	this.instance_24 = new lib.table1();
	this.instance_24.setTransform(93,510.6);

	this.instance_25 = new lib.table1();
	this.instance_25.setTransform(702,328.7);

	this.instance_26 = new lib.table1();
	this.instance_26.setTransform(93,328.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23}]}).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-57.7,860,745.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,-57.7,860,756.3), new cjs.Rectangle(-32.5,-57.7,860,788.7), new cjs.Rectangle(-32.5,-57.7,860,821), rect=new cjs.Rectangle(-32.5,-57.7,860,745.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,-57.7,860,789.5), new cjs.Rectangle(-32.5,-57.7,860,835.6), new cjs.Rectangle(-32.5,-57.7,860,745.4)];


(lib.makeup1_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// Слой 7
	this.instance = new lib.kist2();
	this.instance.setTransform(153.5,401.1,1,1,161.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:175.5},3).to({x:153.5},3).to({x:175.5},3).to({x:153.5},3).to({x:175.5},3).to({rotation:41.3,x:247.5,y:377.2},9).to({x:284.5,y:353},9).to({x:325.5,y:386.4},9).to({x:236.5,y:375},10).to({x:276.5,y:390},11).to({x:315.5},9).to({rotation:161.3,x:153.5,y:401.1},7).wait(1));

	// Слой 8
	this.instance_1 = new lib.shadows19();
	this.instance_1.setTransform(166.4,439.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

	// Слой 3
	this.instance_2 = new lib.hero1_flower1_2();
	this.instance_2.setTransform(755.4,466.4);

	this.instance_3 = new lib.hero1_flower1_2();
	this.instance_3.setTransform(637,438.6);

	this.instance_4 = new lib.hero1_flower1_1();
	this.instance_4.setTransform(707.1,456.9);

	this.instance_5 = new lib.hero1_flower1_2();
	this.instance_5.setTransform(743.3,439.3);

	this.instance_6 = new lib.hero1_flower1_1();
	this.instance_6.setTransform(683.3,430);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(80));

	// els_eyes1
	this.instance_7 = new lib.els_eyes1_2();
	this.instance_7.setTransform(419.2,385.5,1.252,1.252,0,0,0,40,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(80));

	// els_hair01
	this.instance_8 = new lib.els_hair01();
	this.instance_8.setTransform(423.1,197.1,1.252,1.252,0,0,0,79,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(80));

	// Слой 9
	this.instance_9 = new lib.hero1_shadow1_2();
	this.instance_9.setTransform(320,310);
	this.instance_9.alpha = 0.012;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(24).to({_off:false},0).to({alpha:1},48).wait(8));

	// Слой 6
	this.instance_10 = new lib.hero1_shadow1_1();
	this.instance_10.setTransform(397.5,312);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(80));

	// els_shad0
	this.instance_11 = new lib.els_shad0();
	this.instance_11.setTransform(404.6,314.4,1,1,0,0,0,103.8,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(80));

	// Слой 5
	this.instance_12 = new lib.hero1_lips1_1();
	this.instance_12.setTransform(402,455.3);

	this.instance_13 = new lib.hero1_lips1_2();
	this.instance_13.setTransform(403,470.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12}]}).wait(80));

	// els_li1.png
	this.instance_14 = new lib.els_lips0_img();
	this.instance_14.setTransform(336.3,444.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(80));

	// Слой 4
	this.instance_15 = new lib.hero1_rouge1_4();
	this.instance_15.setTransform(316.8,420.9,1,1,0,0,180);

	this.instance_16 = new lib.hero1_rouge1_4();
	this.instance_16.setTransform(482.8,420.9);

	this.instance_17 = new lib.hero1_rouge1_3();
	this.instance_17.setTransform(402.3,355.4);

	this.instance_18 = new lib.hero1_rouge1_2();
	this.instance_18.setTransform(402.3,355.4);

	this.instance_19 = new lib.hero1_rouge1_1();
	this.instance_19.setTransform(402.3,355.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(80));

	// body_makeup
	this.instance_20 = new lib.body_makeup_img();
	this.instance_20.setTransform(53,64.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(80));

	// Layer 3
	this.instance_21 = new lib.table1();
	this.instance_21.setTransform(702,510.6);

	this.instance_22 = new lib.table1();
	this.instance_22.setTransform(93,510.6);

	this.instance_23 = new lib.table1();
	this.instance_23.setTransform(702,328.7);

	this.instance_24 = new lib.table1();
	this.instance_24.setTransform(93,328.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21}]}).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-57.7,860,745.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup1_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Слой 7
	this.instance = new lib.kist2();
	this.instance.setTransform(94.3,406.9,1,1,154.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:103.3},3).to({x:94.3},3).to({x:103.3},3).to({rotation:34.3,x:256.3,y:350.6},7).to({rotation:49.3,x:281.3,y:347.6},6).to({x:312.3,y:375.4},7).to({x:390.3,y:373.5},5).to({x:441.5,y:337.5},10).to({rotation:11.3,x:515.5,y:377.7},9).to({rotation:161.3,x:153.5,y:401.1},6).wait(1));

	// Слой 8
	this.instance_1 = new lib.shadows19();
	this.instance_1.setTransform(166.4,439.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// Слой 3
	this.instance_2 = new lib.hero1_flower1_2();
	this.instance_2.setTransform(755.4,466.4);

	this.instance_3 = new lib.hero1_flower1_2();
	this.instance_3.setTransform(637,438.6);

	this.instance_4 = new lib.hero1_flower1_1();
	this.instance_4.setTransform(707.1,456.9);

	this.instance_5 = new lib.hero1_flower1_2();
	this.instance_5.setTransform(743.3,439.3);

	this.instance_6 = new lib.hero1_flower1_1();
	this.instance_6.setTransform(683.3,430);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(60));

	// els_eyes1
	this.instance_7 = new lib.els_eyes1_2();
	this.instance_7.setTransform(419.2,385.5,1.252,1.252,0,0,0,40,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(60));

	// els_hair01
	this.instance_8 = new lib.els_hair01();
	this.instance_8.setTransform(423.1,197.1,1.252,1.252,0,0,0,79,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(60));

	// Слой 6
	this.instance_9 = new lib.hero1_shadow1_1();
	this.instance_9.setTransform(397.5,312);
	this.instance_9.alpha = 0.012;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(16).to({_off:false},0).to({alpha:1},37).wait(7));

	// els_shad0
	this.instance_10 = new lib.els_shad0();
	this.instance_10.setTransform(404.6,314.4,1,1,0,0,0,103.8,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(60));

	// Слой 5
	this.instance_11 = new lib.hero1_lips1_1();
	this.instance_11.setTransform(402,455.3);

	this.instance_12 = new lib.hero1_lips1_2();
	this.instance_12.setTransform(403,470.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11}]}).wait(60));

	// els_li1.png
	this.instance_13 = new lib.els_lips0_img();
	this.instance_13.setTransform(336.3,444.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(60));

	// Слой 4
	this.instance_14 = new lib.hero1_rouge1_4();
	this.instance_14.setTransform(316.8,420.9,1,1,0,0,180);

	this.instance_15 = new lib.hero1_rouge1_4();
	this.instance_15.setTransform(482.8,420.9);

	this.instance_16 = new lib.hero1_rouge1_3();
	this.instance_16.setTransform(402.3,355.4);

	this.instance_17 = new lib.hero1_rouge1_2();
	this.instance_17.setTransform(402.3,355.4);

	this.instance_18 = new lib.hero1_rouge1_1();
	this.instance_18.setTransform(402.3,355.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(60));

	// body_makeup
	this.instance_19 = new lib.body_makeup_img();
	this.instance_19.setTransform(53,64.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(60));

	// Layer 3
	this.instance_20 = new lib.table1();
	this.instance_20.setTransform(702,510.6);

	this.instance_21 = new lib.table1();
	this.instance_21.setTransform(93,510.6);

	this.instance_22 = new lib.table1();
	this.instance_22.setTransform(702,328.7);

	this.instance_23 = new lib.table1();
	this.instance_23.setTransform(93,328.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20}]}).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-57.7,860,745.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup1_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 7
	this.instance = new lib.kist2();
	this.instance.setTransform(-97.6,214.9,1,1,79.3);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:154.3,x:94.3,y:406.9,alpha:1},9).wait(1));

	// Слой 8
	this.instance_1 = new lib.shadows19();
	this.instance_1.setTransform(742.4,253.1,0.773,0.773);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:166.4,y:439.9},9).wait(1));

	// Слой 3
	this.instance_2 = new lib.hero1_flower1_2();
	this.instance_2.setTransform(755.4,466.4);

	this.instance_3 = new lib.hero1_flower1_2();
	this.instance_3.setTransform(637,438.6);

	this.instance_4 = new lib.hero1_flower1_1();
	this.instance_4.setTransform(707.1,456.9);

	this.instance_5 = new lib.hero1_flower1_2();
	this.instance_5.setTransform(743.3,439.3);

	this.instance_6 = new lib.hero1_flower1_1();
	this.instance_6.setTransform(683.3,430);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(10));

	// els_eyes1
	this.instance_7 = new lib.els_eyes1();
	this.instance_7.setTransform(419.2,385.5,1.252,1.252,0,0,0,40,16.9);

	this.instance_8 = new lib.els_eyes1_2();
	this.instance_8.setTransform(419.2,385.5,1.252,1.252,0,0,0,40,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_8}]},9).wait(1));

	// els_hair01
	this.instance_9 = new lib.els_hair01();
	this.instance_9.setTransform(423.1,197.1,1.252,1.252,0,0,0,79,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// els_shad0
	this.instance_10 = new lib.els_shad0();
	this.instance_10.setTransform(404.6,314.4,1,1,0,0,0,103.8,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// Слой 5
	this.instance_11 = new lib.hero1_lips1_1();
	this.instance_11.setTransform(402,455.3);

	this.instance_12 = new lib.hero1_lips1_2();
	this.instance_12.setTransform(403,470.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11}]}).wait(10));

	// els_li1.png
	this.instance_13 = new lib.els_lips0_img();
	this.instance_13.setTransform(336.3,444.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// Слой 4
	this.instance_14 = new lib.hero1_rouge1_4();
	this.instance_14.setTransform(316.8,420.9,1,1,0,0,180);

	this.instance_15 = new lib.hero1_rouge1_4();
	this.instance_15.setTransform(482.8,420.9);

	this.instance_16 = new lib.hero1_rouge1_3();
	this.instance_16.setTransform(402.3,355.4);

	this.instance_17 = new lib.hero1_rouge1_2();
	this.instance_17.setTransform(402.3,355.4);

	this.instance_18 = new lib.hero1_rouge1_1();
	this.instance_18.setTransform(402.3,355.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(10));

	// body_makeup
	this.instance_19 = new lib.body_makeup_img();
	this.instance_19.setTransform(53,64.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(10));

	// Layer 3
	this.instance_20 = new lib.table1();
	this.instance_20.setTransform(702,510.6);

	this.instance_21 = new lib.table1();
	this.instance_21.setTransform(93,510.6);

	this.instance_22 = new lib.table1();
	this.instance_22.setTransform(702,328.7);

	this.instance_23 = new lib.table1();
	this.instance_23.setTransform(93,328.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-179.9,-57.7,1007.4,745.4);
p.frameBounds = [rect, new cjs.Rectangle(-156.2,-57.7,983.8,745.4), new cjs.Rectangle(-136.1,-57.7,963.7,745.4), new cjs.Rectangle(-116.3,-57.7,943.9,745.4), new cjs.Rectangle(-94.9,-57.7,922.4,745.4), new cjs.Rectangle(-71.5,-57.7,899.1,745.4), new cjs.Rectangle(-46.5,-57.7,874.1,745.4), rect=new cjs.Rectangle(-32.5,-57.7,860,745.4), rect, rect];


(lib.makeup1_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_67 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(67).call(this.frame_67).wait(1));

	// Слой 8
	this.instance = new lib.lipstick33();
	this.instance.setTransform(323.5,521,0.842,0.842,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:335.5,y:514},3).to({x:371.5,y:519},14).to({x:408.5,y:516.1},16).to({x:371.5,y:519},13).to({x:335.5,y:514},12).to({x:255.5,y:668.3},8).to({_off:true},1).wait(1));

	// Слой 3
	this.instance_1 = new lib.shadows19();
	this.instance_1.setTransform(742.4,253.1,0.773,0.773);

	this.instance_2 = new lib.hero1_flower1_2();
	this.instance_2.setTransform(755.4,466.4);

	this.instance_3 = new lib.hero1_flower1_2();
	this.instance_3.setTransform(637,438.6);

	this.instance_4 = new lib.hero1_flower1_1();
	this.instance_4.setTransform(707.1,456.9);

	this.instance_5 = new lib.hero1_flower1_2();
	this.instance_5.setTransform(743.3,439.3);

	this.instance_6 = new lib.hero1_flower1_1();
	this.instance_6.setTransform(683.3,430);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(68));

	// els_eyes1
	this.instance_7 = new lib.els_eyes1();
	this.instance_7.setTransform(419.2,385.5,1.252,1.252,0,0,0,40,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(68));

	// els_hair01
	this.instance_8 = new lib.els_hair01();
	this.instance_8.setTransform(423.1,197.1,1.252,1.252,0,0,0,79,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(68));

	// els_shad0
	this.instance_9 = new lib.els_shad0();
	this.instance_9.setTransform(404.6,314.4,1,1,0,0,0,103.8,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(68));

	// Слой 5
	this.instance_10 = new lib.hero1_lips1_1();
	this.instance_10.setTransform(402,455.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(68));

	// Слой 6
	this.instance_11 = new lib.hero1_lips1_2();
	this.instance_11.setTransform(403,470.6);
	this.instance_11.alpha = 0.012;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(2).to({_off:false},0).to({alpha:1},56).wait(10));

	// els_li1.png
	this.instance_12 = new lib.els_lips0_img();
	this.instance_12.setTransform(336.3,444.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(68));

	// Слой 4
	this.instance_13 = new lib.hero1_rouge1_4();
	this.instance_13.setTransform(316.8,420.9,1,1,0,0,180);

	this.instance_14 = new lib.hero1_rouge1_4();
	this.instance_14.setTransform(482.8,420.9);

	this.instance_15 = new lib.hero1_rouge1_3();
	this.instance_15.setTransform(402.3,355.4);

	this.instance_16 = new lib.hero1_rouge1_2();
	this.instance_16.setTransform(402.3,355.4);

	this.instance_17 = new lib.hero1_rouge1_1();
	this.instance_17.setTransform(402.3,355.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(68));

	// body_makeup
	this.instance_18 = new lib.body_makeup_img();
	this.instance_18.setTransform(53,64.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(68));

	// Layer 3
	this.instance_19 = new lib.table1();
	this.instance_19.setTransform(702,510.6);

	this.instance_20 = new lib.table1();
	this.instance_20.setTransform(93,510.6);

	this.instance_21 = new lib.table1();
	this.instance_21.setTransform(702,328.7);

	this.instance_22 = new lib.table1();
	this.instance_22.setTransform(93,328.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19}]}).wait(68));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-57.7,860,745.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,-57.7,860,752.5), new cjs.Rectangle(-32.5,-57.7,860,771.8), new cjs.Rectangle(-32.5,-57.7,860,791.2), new cjs.Rectangle(-32.5,-57.7,860,745.4)];


(lib.makeup1_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 8
	this.instance = new lib.lipstick33();
	this.instance.setTransform(64.5,418,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:30,x:323.5,y:521},9).wait(1));

	// Слой 3
	this.instance_1 = new lib.shadows19();
	this.instance_1.setTransform(742.4,253.1,0.773,0.773);

	this.instance_2 = new lib.hero1_flower1_2();
	this.instance_2.setTransform(755.4,466.4);

	this.instance_3 = new lib.hero1_flower1_2();
	this.instance_3.setTransform(637,438.6);

	this.instance_4 = new lib.hero1_flower1_1();
	this.instance_4.setTransform(707.1,456.9);

	this.instance_5 = new lib.hero1_flower1_2();
	this.instance_5.setTransform(743.3,439.3);

	this.instance_6 = new lib.hero1_flower1_1();
	this.instance_6.setTransform(683.3,430);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// els_eyes1
	this.instance_7 = new lib.els_eyes1();
	this.instance_7.setTransform(419.2,385.5,1.252,1.252,0,0,0,40,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// els_hair01
	this.instance_8 = new lib.els_hair01();
	this.instance_8.setTransform(423.1,197.1,1.252,1.252,0,0,0,79,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// els_shad0
	this.instance_9 = new lib.els_shad0();
	this.instance_9.setTransform(404.6,314.4,1,1,0,0,0,103.8,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// Слой 5
	this.instance_10 = new lib.hero1_lips1_1();
	this.instance_10.setTransform(402,455.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// els_li1.png
	this.instance_11 = new lib.els_lips0_img();
	this.instance_11.setTransform(336.3,444.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// Слой 4
	this.instance_12 = new lib.hero1_rouge1_4();
	this.instance_12.setTransform(316.8,420.9,1,1,0,0,180);

	this.instance_13 = new lib.hero1_rouge1_4();
	this.instance_13.setTransform(482.8,420.9);

	this.instance_14 = new lib.hero1_rouge1_3();
	this.instance_14.setTransform(402.3,355.4);

	this.instance_15 = new lib.hero1_rouge1_2();
	this.instance_15.setTransform(402.3,355.4);

	this.instance_16 = new lib.hero1_rouge1_1();
	this.instance_16.setTransform(402.3,355.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(10));

	// body_makeup
	this.instance_17 = new lib.body_makeup_img();
	this.instance_17.setTransform(53,64.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(10));

	// Layer 3
	this.instance_18 = new lib.table1();
	this.instance_18.setTransform(702,510.6);

	this.instance_19 = new lib.table1();
	this.instance_19.setTransform(93,510.6);

	this.instance_20 = new lib.table1();
	this.instance_20.setTransform(702,328.7);

	this.instance_21 = new lib.table1();
	this.instance_21.setTransform(93,328.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-57.7,860,745.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup1_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

	// Слой 8
	this.instance = new lib.lipstick32();
	this.instance.setTransform(313.4,513.3,0.842,0.842,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:332.4,y:509.1},3).to({x:371.4,y:502.1},13).to({x:412.4,y:509.1},14).to({x:371.4,y:502.1},13).to({x:332.4,y:509.1},16).to({x:228.4,y:653.1},9).to({_off:true},1).wait(1));

	// Слой 3
	this.instance_1 = new lib.shadows19();
	this.instance_1.setTransform(742.4,253.1,0.773,0.773);

	this.instance_2 = new lib.hero1_flower1_2();
	this.instance_2.setTransform(755.4,466.4);

	this.instance_3 = new lib.hero1_flower1_2();
	this.instance_3.setTransform(637,438.6);

	this.instance_4 = new lib.hero1_flower1_1();
	this.instance_4.setTransform(707.1,456.9);

	this.instance_5 = new lib.hero1_flower1_2();
	this.instance_5.setTransform(743.3,439.3);

	this.instance_6 = new lib.hero1_flower1_1();
	this.instance_6.setTransform(683.3,430);

	this.instance_7 = new lib.lipstick33();
	this.instance_7.setTransform(64.5,418,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(70));

	// els_eyes1
	this.instance_8 = new lib.els_eyes1();
	this.instance_8.setTransform(419.2,385.5,1.252,1.252,0,0,0,40,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(70));

	// els_hair01
	this.instance_9 = new lib.els_hair01();
	this.instance_9.setTransform(423.1,197.1,1.252,1.252,0,0,0,79,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(70));

	// els_shad0
	this.instance_10 = new lib.els_shad0();
	this.instance_10.setTransform(404.6,314.4,1,1,0,0,0,103.8,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(70));

	// Слой 5
	this.instance_11 = new lib.hero1_lips1_1();
	this.instance_11.setTransform(402,455.3);
	this.instance_11.alpha = 0.012;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(3).to({_off:false},0).to({alpha:1},56).wait(11));

	// els_li1.png
	this.instance_12 = new lib.els_lips0_img();
	this.instance_12.setTransform(336.3,444.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(70));

	// Слой 4
	this.instance_13 = new lib.hero1_rouge1_4();
	this.instance_13.setTransform(316.8,420.9,1,1,0,0,180);

	this.instance_14 = new lib.hero1_rouge1_4();
	this.instance_14.setTransform(482.8,420.9);

	this.instance_15 = new lib.hero1_rouge1_3();
	this.instance_15.setTransform(402.3,355.4);

	this.instance_16 = new lib.hero1_rouge1_2();
	this.instance_16.setTransform(402.3,355.4);

	this.instance_17 = new lib.hero1_rouge1_1();
	this.instance_17.setTransform(402.3,355.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(70));

	// body_makeup
	this.instance_18 = new lib.body_makeup_img();
	this.instance_18.setTransform(53,64.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(70));

	// Layer 3
	this.instance_19 = new lib.table1();
	this.instance_19.setTransform(702,510.6);

	this.instance_20 = new lib.table1();
	this.instance_20.setTransform(93,510.6);

	this.instance_21 = new lib.table1();
	this.instance_21.setTransform(702,328.7);

	this.instance_22 = new lib.table1();
	this.instance_22.setTransform(93,328.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19}]}).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-57.7,860,745.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,-57.7,860,759.9), new cjs.Rectangle(-32.5,-57.7,860,775.9), new cjs.Rectangle(-32.5,-57.7,860,745.4)];


(lib.makeup1_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 8
	this.instance = new lib.lipstick32();
	this.instance.setTransform(123.4,416.3,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:30,x:313.4,y:513.3},9).wait(1));

	// Слой 3
	this.instance_1 = new lib.shadows19();
	this.instance_1.setTransform(742.4,253.1,0.773,0.773);

	this.instance_2 = new lib.hero1_flower1_2();
	this.instance_2.setTransform(755.4,466.4);

	this.instance_3 = new lib.hero1_flower1_2();
	this.instance_3.setTransform(637,438.6);

	this.instance_4 = new lib.hero1_flower1_1();
	this.instance_4.setTransform(707.1,456.9);

	this.instance_5 = new lib.hero1_flower1_2();
	this.instance_5.setTransform(743.3,439.3);

	this.instance_6 = new lib.hero1_flower1_1();
	this.instance_6.setTransform(683.3,430);

	this.instance_7 = new lib.lipstick33();
	this.instance_7.setTransform(64.5,418,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// els_eyes1
	this.instance_8 = new lib.els_eyes1();
	this.instance_8.setTransform(419.2,385.5,1.252,1.252,0,0,0,40,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// els_hair01
	this.instance_9 = new lib.els_hair01();
	this.instance_9.setTransform(423.1,197.1,1.252,1.252,0,0,0,79,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// els_shad0
	this.instance_10 = new lib.els_shad0();
	this.instance_10.setTransform(404.6,314.4,1,1,0,0,0,103.8,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// els_li1.png
	this.instance_11 = new lib.els_lips0_img();
	this.instance_11.setTransform(336.3,444.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// Слой 4
	this.instance_12 = new lib.hero1_rouge1_4();
	this.instance_12.setTransform(316.8,420.9,1,1,0,0,180);

	this.instance_13 = new lib.hero1_rouge1_4();
	this.instance_13.setTransform(482.8,420.9);

	this.instance_14 = new lib.hero1_rouge1_3();
	this.instance_14.setTransform(402.3,355.4);

	this.instance_15 = new lib.hero1_rouge1_2();
	this.instance_15.setTransform(402.3,355.4);

	this.instance_16 = new lib.hero1_rouge1_1();
	this.instance_16.setTransform(402.3,355.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(10));

	// body_makeup
	this.instance_17 = new lib.body_makeup_img();
	this.instance_17.setTransform(53,64.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(10));

	// Layer 3
	this.instance_18 = new lib.table1();
	this.instance_18.setTransform(702,510.6);

	this.instance_19 = new lib.table1();
	this.instance_19.setTransform(93,510.6);

	this.instance_20 = new lib.table1();
	this.instance_20.setTransform(702,328.7);

	this.instance_21 = new lib.table1();
	this.instance_21.setTransform(93,328.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-57.7,860,745.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup1_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_66 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(66).call(this.frame_66).wait(1));

	// Слой 8
	this.instance = new lib.podvodka1_3();
	this.instance.setTransform(283.5,488,0.799,0.799,-136.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:294.5,y:493},3).to({rotation:-121.4,x:235.5,y:449},11).to({rotation:-97.9,x:176.5,y:411},12).to({rotation:-142.9,x:301.5,y:507.8},5).to({rotation:-82.9,x:196.5,y:410.8},12).to({rotation:-142.9,x:301.5,y:511},4).to({rotation:-97.9,x:205.8,y:456.8},10).to({rotation:-127.9,x:104.8,y:672.8,alpha:0.012},8).to({_off:true},1).wait(1));

	// Слой 3
	this.instance_1 = new lib.shadows19();
	this.instance_1.setTransform(742.4,253.1,0.773,0.773);

	this.instance_2 = new lib.hero1_flower1_2();
	this.instance_2.setTransform(755.4,466.4);

	this.instance_3 = new lib.hero1_flower1_2();
	this.instance_3.setTransform(637,438.6);

	this.instance_4 = new lib.hero1_flower1_1();
	this.instance_4.setTransform(707.1,456.9);

	this.instance_5 = new lib.hero1_flower1_2();
	this.instance_5.setTransform(743.3,439.3);

	this.instance_6 = new lib.hero1_flower1_1();
	this.instance_6.setTransform(683.3,430);

	this.instance_7 = new lib.lipstick32();
	this.instance_7.setTransform(123.4,416.3,0.842,0.842);

	this.instance_8 = new lib.lipstick33();
	this.instance_8.setTransform(64.5,418,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(67));

	// els_eyes1
	this.instance_9 = new lib.els_eyes1();
	this.instance_9.setTransform(419.2,385.5,1.252,1.252,0,0,0,40,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(67));

	// els_hair01
	this.instance_10 = new lib.els_hair01();
	this.instance_10.setTransform(423.1,197.1,1.252,1.252,0,0,0,79,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(67));

	// els_shad0
	this.instance_11 = new lib.els_shad0();
	this.instance_11.setTransform(404.6,314.4,1,1,0,0,0,103.8,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(67));

	// els_li1.png
	this.instance_12 = new lib.els_lips0_img();
	this.instance_12.setTransform(336.3,444.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(67));

	// Слой 5
	this.instance_13 = new lib.hero1_rouge1_4();
	this.instance_13.setTransform(316.8,420.9,1,1,0,0,180);
	this.instance_13.alpha = 0.012;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(3).to({_off:false},0).to({alpha:1},54).wait(10));

	// Слой 4
	this.instance_14 = new lib.hero1_rouge1_4();
	this.instance_14.setTransform(482.8,420.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(67));

	// Слой 6
	this.instance_15 = new lib.hero1_rouge1_3();
	this.instance_15.setTransform(402.3,355.4);

	this.instance_16 = new lib.hero1_rouge1_2();
	this.instance_16.setTransform(402.3,355.4);

	this.instance_17 = new lib.hero1_rouge1_1();
	this.instance_17.setTransform(402.3,355.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(67));

	// body_makeup
	this.instance_18 = new lib.body_makeup_img();
	this.instance_18.setTransform(53,64.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(67));

	// Layer 3
	this.instance_19 = new lib.table1();
	this.instance_19.setTransform(702,510.6);

	this.instance_20 = new lib.table1();
	this.instance_20.setTransform(93,510.6);

	this.instance_21 = new lib.table1();
	this.instance_21.setTransform(702,328.7);

	this.instance_22 = new lib.table1();
	this.instance_22.setTransform(93,328.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19}]}).wait(67));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-57.7,860,745.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,-57.7,860,773.8), new cjs.Rectangle(-32.5,-57.7,860,805.9), new cjs.Rectangle(-32.5,-57.7,860,745.4)];


(lib.makeup1_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_58 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(58).call(this.frame_58).wait(1));

	// Слой 8
	this.instance = new lib.podvodka1_3();
	this.instance.setTransform(519.5,476.6,0.799,0.799,135.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:105.1,x:534.5,y:447},3).to({x:566.5,y:423},9).to({x:609.5,y:417.8},7).to({rotation:135.1,x:512.5,y:493.1},3).to({rotation:97.1,x:593.5,y:430.5},12).to({rotation:127.1,x:520.5,y:490.5},3).to({rotation:112.1,x:591.5,y:477.5},15).to({rotation:223.6,x:283.5,y:488},6).wait(1));

	// Слой 3
	this.instance_1 = new lib.shadows19();
	this.instance_1.setTransform(742.4,253.1,0.773,0.773);

	this.instance_2 = new lib.hero1_flower1_2();
	this.instance_2.setTransform(755.4,466.4);

	this.instance_3 = new lib.hero1_flower1_2();
	this.instance_3.setTransform(637,438.6);

	this.instance_4 = new lib.hero1_flower1_1();
	this.instance_4.setTransform(707.1,456.9);

	this.instance_5 = new lib.hero1_flower1_2();
	this.instance_5.setTransform(743.3,439.3);

	this.instance_6 = new lib.hero1_flower1_1();
	this.instance_6.setTransform(683.3,430);

	this.instance_7 = new lib.lipstick32();
	this.instance_7.setTransform(123.4,416.3,0.842,0.842);

	this.instance_8 = new lib.lipstick33();
	this.instance_8.setTransform(64.5,418,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(59));

	// els_eyes1
	this.instance_9 = new lib.els_eyes1();
	this.instance_9.setTransform(419.2,385.5,1.252,1.252,0,0,0,40,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(59));

	// els_hair01
	this.instance_10 = new lib.els_hair01();
	this.instance_10.setTransform(423.1,197.1,1.252,1.252,0,0,0,79,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(59));

	// els_shad0
	this.instance_11 = new lib.els_shad0();
	this.instance_11.setTransform(404.6,314.4,1,1,0,0,0,103.8,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(59));

	// els_li1.png
	this.instance_12 = new lib.els_lips0_img();
	this.instance_12.setTransform(336.3,444.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(59));

	// Слой 4
	this.instance_13 = new lib.hero1_rouge1_4();
	this.instance_13.setTransform(482.8,420.9);
	this.instance_13.alpha = 0.012;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(3).to({_off:false},0).to({alpha:1},49).wait(7));

	// Слой 6
	this.instance_14 = new lib.hero1_rouge1_3();
	this.instance_14.setTransform(402.3,355.4);

	this.instance_15 = new lib.hero1_rouge1_2();
	this.instance_15.setTransform(402.3,355.4);

	this.instance_16 = new lib.hero1_rouge1_1();
	this.instance_16.setTransform(402.3,355.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(59));

	// body_makeup
	this.instance_17 = new lib.body_makeup_img();
	this.instance_17.setTransform(53,64.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(59));

	// Layer 3
	this.instance_18 = new lib.table1();
	this.instance_18.setTransform(702,510.6);

	this.instance_19 = new lib.table1();
	this.instance_19.setTransform(93,510.6);

	this.instance_20 = new lib.table1();
	this.instance_20.setTransform(702,328.7);

	this.instance_21 = new lib.table1();
	this.instance_21.setTransform(93,328.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18}]}).wait(59));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-57.7,860,745.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup1_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 8
	this.instance = new lib.podvodka1_3();
	this.instance.setTransform(648.5,214.7,0.685,0.685,165);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,rotation:135.1,x:519.5,y:476.6},9).wait(1));

	// Слой 3
	this.instance_1 = new lib.shadows19();
	this.instance_1.setTransform(742.4,253.1,0.773,0.773);

	this.instance_2 = new lib.hero1_flower1_2();
	this.instance_2.setTransform(755.4,466.4);

	this.instance_3 = new lib.hero1_flower1_2();
	this.instance_3.setTransform(637,438.6);

	this.instance_4 = new lib.hero1_flower1_1();
	this.instance_4.setTransform(707.1,456.9);

	this.instance_5 = new lib.hero1_flower1_2();
	this.instance_5.setTransform(743.3,439.3);

	this.instance_6 = new lib.hero1_flower1_1();
	this.instance_6.setTransform(683.3,430);

	this.instance_7 = new lib.lipstick32();
	this.instance_7.setTransform(123.4,416.3,0.842,0.842);

	this.instance_8 = new lib.lipstick33();
	this.instance_8.setTransform(64.5,418,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// els_eyes1
	this.instance_9 = new lib.els_eyes1();
	this.instance_9.setTransform(419.2,385.5,1.252,1.252,0,0,0,40,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// els_hair01
	this.instance_10 = new lib.els_hair01();
	this.instance_10.setTransform(423.1,197.1,1.252,1.252,0,0,0,79,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// els_shad0
	this.instance_11 = new lib.els_shad0();
	this.instance_11.setTransform(404.6,314.4,1,1,0,0,0,103.8,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// els_li1.png
	this.instance_12 = new lib.els_lips0_img();
	this.instance_12.setTransform(336.3,444.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// Слой 6
	this.instance_13 = new lib.hero1_rouge1_3();
	this.instance_13.setTransform(402.3,355.4);

	this.instance_14 = new lib.hero1_rouge1_2();
	this.instance_14.setTransform(402.3,355.4);

	this.instance_15 = new lib.hero1_rouge1_1();
	this.instance_15.setTransform(402.3,355.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(10));

	// body_makeup
	this.instance_16 = new lib.body_makeup_img();
	this.instance_16.setTransform(53,64.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10));

	// Layer 3
	this.instance_17 = new lib.table1();
	this.instance_17.setTransform(702,510.6);

	this.instance_18 = new lib.table1();
	this.instance_18.setTransform(93,510.6);

	this.instance_19 = new lib.table1();
	this.instance_19.setTransform(702,328.7);

	this.instance_20 = new lib.table1();
	this.instance_20.setTransform(93,328.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-57.7,860,745.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup1_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_70 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(70).call(this.frame_70).wait(1));

	// Слой 8
	this.instance = new lib.pencil33();
	this.instance.setTransform(519.5,483.9,1,1,-47.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:453.5,y:463.9},9).to({x:465.5,y:480},9).to({x:489.5,y:466.1},10).to({x:458.5,y:460.1},11).to({y:477.1},10).to({x:483.5,y:471.1},10).to({x:650.5,y:717.1},10).to({_off:true},1).wait(1));

	// Слой 3
	this.instance_1 = new lib.shadows19();
	this.instance_1.setTransform(742.4,253.1,0.773,0.773);

	this.instance_2 = new lib.hero1_flower1_2();
	this.instance_2.setTransform(755.4,466.4);

	this.instance_3 = new lib.hero1_flower1_2();
	this.instance_3.setTransform(637,438.6);

	this.instance_4 = new lib.hero1_flower1_1();
	this.instance_4.setTransform(707.1,456.9);

	this.instance_5 = new lib.hero1_flower1_2();
	this.instance_5.setTransform(743.3,439.3);

	this.instance_6 = new lib.hero1_flower1_1();
	this.instance_6.setTransform(683.3,430);

	this.instance_7 = new lib.lipstick32();
	this.instance_7.setTransform(123.4,416.3,0.842,0.842);

	this.instance_8 = new lib.lipstick33();
	this.instance_8.setTransform(64.5,418,0.842,0.842);

	this.instance_9 = new lib.podvodka1_3();
	this.instance_9.setTransform(648.5,214.7,0.685,0.685,165);

	this.instance_10 = new lib.podvodka1_1();
	this.instance_10.setTransform(638.2,258.6,0.685,0.685);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(71));

	// els_eyes1
	this.instance_11 = new lib.els_eyes1();
	this.instance_11.setTransform(419.2,385.5,1.252,1.252,0,0,0,40,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(71));

	// els_hair01
	this.instance_12 = new lib.els_hair01();
	this.instance_12.setTransform(423.1,197.1,1.252,1.252,0,0,0,79,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(71));

	// els_shad0
	this.instance_13 = new lib.els_shad0();
	this.instance_13.setTransform(404.6,314.4,1,1,0,0,0,103.8,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(71));

	// els_li1.png
	this.instance_14 = new lib.els_lips0_img();
	this.instance_14.setTransform(336.3,444.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(71));

	// Слой 4
	this.instance_15 = new lib.hero1_rouge1_3();
	this.instance_15.setTransform(402.3,355.4);
	this.instance_15.alpha = 0.012;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(9).to({_off:false},0).to({alpha:1},50).wait(12));

	// Слой 6
	this.instance_16 = new lib.hero1_rouge1_2();
	this.instance_16.setTransform(402.3,355.4);

	this.instance_17 = new lib.hero1_rouge1_1();
	this.instance_17.setTransform(402.3,355.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16}]}).wait(71));

	// body_makeup
	this.instance_18 = new lib.body_makeup_img();
	this.instance_18.setTransform(53,64.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(71));

	// Layer 3
	this.instance_19 = new lib.table1();
	this.instance_19.setTransform(702,510.6);

	this.instance_20 = new lib.table1();
	this.instance_20.setTransform(93,510.6);

	this.instance_21 = new lib.table1();
	this.instance_21.setTransform(702,328.7);

	this.instance_22 = new lib.table1();
	this.instance_22.setTransform(93,328.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19}]}).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-57.7,860,745.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,-57.7,860,753.1), new cjs.Rectangle(-32.5,-57.7,860,777.7), new cjs.Rectangle(-32.5,-57.7,860,802.3), new cjs.Rectangle(-32.5,-57.7,860,826.9), new cjs.Rectangle(-32.5,-57.7,860,851.8), new cjs.Rectangle(-32.5,-57.7,860,745.4)];


(lib.makeup1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 8
	this.instance = new lib.pencil33();
	this.instance.setTransform(84.5,483.9,1,1,-83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-47.3,x:519.5},9).wait(1));

	// Слой 3
	this.instance_1 = new lib.shadows19();
	this.instance_1.setTransform(742.4,253.1,0.773,0.773);

	this.instance_2 = new lib.hero1_flower1_2();
	this.instance_2.setTransform(755.4,466.4);

	this.instance_3 = new lib.hero1_flower1_2();
	this.instance_3.setTransform(637,438.6);

	this.instance_4 = new lib.hero1_flower1_1();
	this.instance_4.setTransform(707.1,456.9);

	this.instance_5 = new lib.hero1_flower1_2();
	this.instance_5.setTransform(743.3,439.3);

	this.instance_6 = new lib.hero1_flower1_1();
	this.instance_6.setTransform(683.3,430);

	this.instance_7 = new lib.lipstick32();
	this.instance_7.setTransform(123.4,416.3,0.842,0.842);

	this.instance_8 = new lib.lipstick33();
	this.instance_8.setTransform(64.5,418,0.842,0.842);

	this.instance_9 = new lib.podvodka1_3();
	this.instance_9.setTransform(648.5,214.7,0.685,0.685,165);

	this.instance_10 = new lib.podvodka1_1();
	this.instance_10.setTransform(638.2,258.6,0.685,0.685);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(10));

	// els_eyes1
	this.instance_11 = new lib.els_eyes1();
	this.instance_11.setTransform(419.2,385.5,1.252,1.252,0,0,0,40,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// els_hair01
	this.instance_12 = new lib.els_hair01();
	this.instance_12.setTransform(423.1,197.1,1.252,1.252,0,0,0,79,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10));

	// els_shad0
	this.instance_13 = new lib.els_shad0();
	this.instance_13.setTransform(404.6,314.4,1,1,0,0,0,103.8,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// els_li1.png
	this.instance_14 = new lib.els_lips0_img();
	this.instance_14.setTransform(336.3,444.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10));

	// Слой 6
	this.instance_15 = new lib.hero1_rouge1_2();
	this.instance_15.setTransform(402.3,355.4);

	this.instance_16 = new lib.hero1_rouge1_1();
	this.instance_16.setTransform(402.3,355.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15}]}).wait(10));

	// body_makeup
	this.instance_17 = new lib.body_makeup_img();
	this.instance_17.setTransform(53,64.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(10));

	// Layer 3
	this.instance_18 = new lib.table1();
	this.instance_18.setTransform(702,510.6);

	this.instance_19 = new lib.table1();
	this.instance_19.setTransform(93,510.6);

	this.instance_20 = new lib.table1();
	this.instance_20.setTransform(702,328.7);

	this.instance_21 = new lib.table1();
	this.instance_21.setTransform(93,328.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-57.7,860,745.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_80 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(80).call(this.frame_80).wait(1));

	// Слой 8
	this.instance = new lib.gubka();
	this.instance.setTransform(554.9,484.3,0.557,0.557,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.46,scaleY:0.46},3).to({scaleX:0.56,scaleY:0.56},3).to({scaleX:0.46,scaleY:0.46},3).to({scaleX:0.56,scaleY:0.56},3).to({rotation:0,x:393.9,y:256.3},8).to({scaleX:0.47,scaleY:0.47},3).to({scaleX:0.56,scaleY:0.56},3).to({y:378.3},9).to({scaleX:0.45,scaleY:0.45},4).to({scaleX:0.56,scaleY:0.56},3).to({x:317.9,y:400},10).to({scaleX:0.46,scaleY:0.46},3).to({scaleX:0.56,scaleY:0.56},3).to({x:479.9,y:401.1},8).to({scaleX:0.47,scaleY:0.47},3).to({scaleX:0.56,scaleY:0.56},4).to({y:669},6).to({_off:true},1).wait(1));

	// Слой 7
	this.instance_1 = new lib.rouge8();
	this.instance_1.setTransform(576.5,457);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({y:684},8).to({_off:true},1).wait(60));

	// Слой 3
	this.instance_2 = new lib.shadows19();
	this.instance_2.setTransform(742.4,253.1,0.773,0.773);

	this.instance_3 = new lib.hero1_flower1_2();
	this.instance_3.setTransform(755.4,466.4);

	this.instance_4 = new lib.hero1_flower1_2();
	this.instance_4.setTransform(637,438.6);

	this.instance_5 = new lib.hero1_flower1_1();
	this.instance_5.setTransform(707.1,456.9);

	this.instance_6 = new lib.hero1_flower1_2();
	this.instance_6.setTransform(743.3,439.3);

	this.instance_7 = new lib.hero1_flower1_1();
	this.instance_7.setTransform(683.3,430);

	this.instance_8 = new lib.pencil33();
	this.instance_8.setTransform(84.5,483.9,1,1,-83.5);

	this.instance_9 = new lib.lipstick32();
	this.instance_9.setTransform(123.4,416.3,0.842,0.842);

	this.instance_10 = new lib.lipstick33();
	this.instance_10.setTransform(64.5,418,0.842,0.842);

	this.instance_11 = new lib.podvodka1_3();
	this.instance_11.setTransform(648.5,214.7,0.685,0.685,165);

	this.instance_12 = new lib.podvodka1_1();
	this.instance_12.setTransform(638.2,258.6,0.685,0.685);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(81));

	// els_eyes1
	this.instance_13 = new lib.els_eyes1();
	this.instance_13.setTransform(419.2,385.5,1.252,1.252,0,0,0,40,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(81));

	// els_hair01
	this.instance_14 = new lib.els_hair01();
	this.instance_14.setTransform(423.1,197.1,1.252,1.252,0,0,0,79,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(81));

	// els_shad0
	this.instance_15 = new lib.els_shad0();
	this.instance_15.setTransform(404.6,314.4,1,1,0,0,0,103.8,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(81));

	// els_li1.png
	this.instance_16 = new lib.els_lips0_img();
	this.instance_16.setTransform(336.3,444.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(81));

	// Слой 4
	this.instance_17 = new lib.hero1_rouge1_2();
	this.instance_17.setTransform(402.3,355.4);
	this.instance_17.alpha = 0.012;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(20).to({_off:false},0).to({alpha:1},53).wait(8));

	// Слой 6
	this.instance_18 = new lib.hero1_rouge1_1();
	this.instance_18.setTransform(402.3,355.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(81));

	// body_makeup
	this.instance_19 = new lib.body_makeup_img();
	this.instance_19.setTransform(53,64.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(81));

	// Layer 3
	this.instance_20 = new lib.table1();
	this.instance_20.setTransform(702,510.6);

	this.instance_21 = new lib.table1();
	this.instance_21.setTransform(93,510.6);

	this.instance_22 = new lib.table1();
	this.instance_22.setTransform(702,328.7);

	this.instance_23 = new lib.table1();
	this.instance_23.setTransform(93,328.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20}]}).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-57.7,860,745.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,-57.7,860,760), new cjs.Rectangle(-32.5,-57.7,860,788.4), new cjs.Rectangle(-32.5,-57.7,860,816.7), rect=new cjs.Rectangle(-32.5,-57.7,860,745.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,-57.7,860,785.8), new cjs.Rectangle(-32.5,-57.7,860,745.4)];


(lib.makeup1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 8
	this.instance = new lib.gubka();
	this.instance.setTransform(821.9,701.2,0.557,0.557,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:554.9,y:484.3},9).wait(1));

	// Слой 7
	this.instance_1 = new lib.rouge8();
	this.instance_1.setTransform(160.1,234.2,0.824,0.824);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:576.5,y:457},9).wait(1));

	// Слой 3
	this.instance_2 = new lib.shadows19();
	this.instance_2.setTransform(742.4,253.1,0.773,0.773);

	this.instance_3 = new lib.hero1_flower1_2();
	this.instance_3.setTransform(755.4,466.4);

	this.instance_4 = new lib.hero1_flower1_2();
	this.instance_4.setTransform(637,438.6);

	this.instance_5 = new lib.hero1_flower1_1();
	this.instance_5.setTransform(707.1,456.9);

	this.instance_6 = new lib.hero1_flower1_2();
	this.instance_6.setTransform(743.3,439.3);

	this.instance_7 = new lib.hero1_flower1_1();
	this.instance_7.setTransform(683.3,430);

	this.instance_8 = new lib.pencil33();
	this.instance_8.setTransform(84.5,483.9,1,1,-83.5);

	this.instance_9 = new lib.lipstick32();
	this.instance_9.setTransform(123.4,416.3,0.842,0.842);

	this.instance_10 = new lib.lipstick33();
	this.instance_10.setTransform(64.5,418,0.842,0.842);

	this.instance_11 = new lib.podvodka1_3();
	this.instance_11.setTransform(648.5,214.7,0.685,0.685,165);

	this.instance_12 = new lib.podvodka1_1();
	this.instance_12.setTransform(638.2,258.6,0.685,0.685);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(10));

	// els_eyes1
	this.instance_13 = new lib.els_eyes1();
	this.instance_13.setTransform(419.2,385.5,1.252,1.252,0,0,0,40,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// els_hair01
	this.instance_14 = new lib.els_hair01();
	this.instance_14.setTransform(423.1,197.1,1.252,1.252,0,0,0,79,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10));

	// els_shad0
	this.instance_15 = new lib.els_shad0();
	this.instance_15.setTransform(404.6,314.4,1,1,0,0,0,103.8,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(10));

	// els_li1.png
	this.instance_16 = new lib.els_lips0_img();
	this.instance_16.setTransform(336.3,444.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10));

	// Слой 6
	this.instance_17 = new lib.hero1_rouge1_1();
	this.instance_17.setTransform(402.3,355.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(10));

	// body_makeup
	this.instance_18 = new lib.body_makeup_img();
	this.instance_18.setTransform(53,64.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(10));

	// Layer 3
	this.instance_19 = new lib.table1();
	this.instance_19.setTransform(702,510.6);

	this.instance_20 = new lib.table1();
	this.instance_20.setTransform(93,510.6);

	this.instance_21 = new lib.table1();
	this.instance_21.setTransform(702,328.7);

	this.instance_22 = new lib.table1();
	this.instance_22.setTransform(93,328.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-57.7,923.5,830.4);
p.frameBounds = [rect, new cjs.Rectangle(-32.5,-57.7,893.6,806.1), new cjs.Rectangle(-32.5,-57.7,863.9,782), new cjs.Rectangle(-32.5,-57.7,860,757.9), rect=new cjs.Rectangle(-32.5,-57.7,860,745.4), rect, rect, rect, rect, rect];


(lib.makeup1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_80 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(80).call(this.frame_80).wait(1));

	// Слой 5
	this.instance = new lib.gubka();
	this.instance.setTransform(554.9,484.3,0.557,0.557,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.46,scaleY:0.46},3).to({scaleX:0.56,scaleY:0.56},3).to({scaleX:0.46,scaleY:0.46},3).to({scaleX:0.56,scaleY:0.56},3).to({rotation:0,x:393.9,y:256.3},8).to({scaleX:0.47,scaleY:0.47},3).to({scaleX:0.56,scaleY:0.56},3).to({y:378.3},9).to({scaleX:0.45,scaleY:0.45},4).to({scaleX:0.56,scaleY:0.56},3).to({x:317.9,y:400},10).to({scaleX:0.46,scaleY:0.46},3).to({scaleX:0.56,scaleY:0.56},3).to({x:479.9,y:401.1},8).to({scaleX:0.47,scaleY:0.47},3).to({scaleX:0.56,scaleY:0.56},4).to({y:669},6).to({_off:true},1).wait(1));

	// Слой 4
	this.instance_1 = new lib.rouge7();
	this.instance_1.setTransform(590.8,469.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({y:686.1},6).to({_off:true},1).wait(62));

	// Слой 3
	this.instance_2 = new lib.shadows19();
	this.instance_2.setTransform(742.4,253.1,0.773,0.773);

	this.instance_3 = new lib.hero1_flower1_2();
	this.instance_3.setTransform(755.4,466.4);

	this.instance_4 = new lib.hero1_flower1_2();
	this.instance_4.setTransform(637,438.6);

	this.instance_5 = new lib.hero1_flower1_1();
	this.instance_5.setTransform(707.1,456.9);

	this.instance_6 = new lib.hero1_flower1_2();
	this.instance_6.setTransform(743.3,439.3);

	this.instance_7 = new lib.hero1_flower1_1();
	this.instance_7.setTransform(683.3,430);

	this.instance_8 = new lib.pencil33();
	this.instance_8.setTransform(84.5,483.9,1,1,-83.5);

	this.instance_9 = new lib.lipstick32();
	this.instance_9.setTransform(123.4,416.3,0.842,0.842);

	this.instance_10 = new lib.lipstick33();
	this.instance_10.setTransform(64.5,418,0.842,0.842);

	this.instance_11 = new lib.rouge8();
	this.instance_11.setTransform(160.1,234.2,0.824,0.824);

	this.instance_12 = new lib.podvodka1_3();
	this.instance_12.setTransform(648.5,214.7,0.685,0.685,165);

	this.instance_13 = new lib.podvodka1_1();
	this.instance_13.setTransform(638.2,258.6,0.685,0.685);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(81));

	// els_eyes1
	this.instance_14 = new lib.els_eyes1();
	this.instance_14.setTransform(419.2,385.5,1.252,1.252,0,0,0,40,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(81));

	// els_hair01
	this.instance_15 = new lib.els_hair01();
	this.instance_15.setTransform(423.1,197.1,1.252,1.252,0,0,0,79,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(81));

	// els_shad0
	this.instance_16 = new lib.els_shad0();
	this.instance_16.setTransform(404.6,314.4,1,1,0,0,0,103.8,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(81));

	// els_li1.png
	this.instance_17 = new lib.els_lips0_img();
	this.instance_17.setTransform(336.3,444.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(81));

	// Слой 6
	this.instance_18 = new lib.hero1_rouge1_1();
	this.instance_18.setTransform(402.3,355.4);
	this.instance_18.alpha = 0.012;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(20).to({_off:false},0).to({alpha:1},53).wait(8));

	// body_makeup
	this.instance_19 = new lib.body_makeup_img();
	this.instance_19.setTransform(53,64.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(81));

	// Layer 3
	this.instance_20 = new lib.table1();
	this.instance_20.setTransform(702,510.6);

	this.instance_21 = new lib.table1();
	this.instance_21.setTransform(93,510.6);

	this.instance_22 = new lib.table1();
	this.instance_22.setTransform(702,328.7);

	this.instance_23 = new lib.table1();
	this.instance_23.setTransform(93,328.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20}]}).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-57.7,860,745.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,-57.7,860,746.5), new cjs.Rectangle(-32.5,-57.7,860,782.7), new cjs.Rectangle(-32.5,-57.7,860,818.8), rect=new cjs.Rectangle(-32.5,-57.7,860,745.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,-57.7,860,785.8), new cjs.Rectangle(-32.5,-57.7,860,745.4)];


(lib.makeup1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 5
	this.instance = new lib.gubka();
	this.instance.setTransform(821.9,701.2,0.557,0.557,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:554.9,y:484.3},9).wait(1));

	// Слой 4
	this.instance_1 = new lib.rouge7();
	this.instance_1.setTransform(46.8,234.2,0.824,0.824);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:590.8,y:469.2},9).wait(1));

	// Слой 3
	this.instance_2 = new lib.shadows19();
	this.instance_2.setTransform(742.4,253.1,0.773,0.773);

	this.instance_3 = new lib.hero1_flower1_2();
	this.instance_3.setTransform(755.4,466.4);

	this.instance_4 = new lib.hero1_flower1_2();
	this.instance_4.setTransform(637,438.6);

	this.instance_5 = new lib.hero1_flower1_1();
	this.instance_5.setTransform(707.1,456.9);

	this.instance_6 = new lib.hero1_flower1_2();
	this.instance_6.setTransform(743.3,439.3);

	this.instance_7 = new lib.hero1_flower1_1();
	this.instance_7.setTransform(683.3,430);

	this.instance_8 = new lib.pencil33();
	this.instance_8.setTransform(84.5,483.9,1,1,-83.5);

	this.instance_9 = new lib.lipstick32();
	this.instance_9.setTransform(123.4,416.3,0.842,0.842);

	this.instance_10 = new lib.lipstick33();
	this.instance_10.setTransform(64.5,418,0.842,0.842);

	this.instance_11 = new lib.rouge8();
	this.instance_11.setTransform(160.1,234.2,0.824,0.824);

	this.instance_12 = new lib.podvodka1_3();
	this.instance_12.setTransform(648.5,214.7,0.685,0.685,165);

	this.instance_13 = new lib.podvodka1_1();
	this.instance_13.setTransform(638.2,258.6,0.685,0.685);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(10));

	// els_eyes1
	this.instance_14 = new lib.els_eyes1();
	this.instance_14.setTransform(419.2,385.5,1.252,1.252,0,0,0,40,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10));

	// els_hair01
	this.instance_15 = new lib.els_hair01();
	this.instance_15.setTransform(423.1,197.1,1.252,1.252,0,0,0,79,99.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(10));

	// els_shad0
	this.instance_16 = new lib.els_shad0();
	this.instance_16.setTransform(404.6,314.4,1,1,0,0,0,103.8,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10));

	// els_li1.png
	this.instance_17 = new lib.els_lips0_img();
	this.instance_17.setTransform(336.3,444.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(10));

	// body_makeup
	this.instance_18 = new lib.body_makeup_img();
	this.instance_18.setTransform(53,64.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(10));

	// Layer 3
	this.instance_19 = new lib.table1();
	this.instance_19.setTransform(702,510.6);

	this.instance_20 = new lib.table1();
	this.instance_20.setTransform(93,510.6);

	this.instance_21 = new lib.table1();
	this.instance_21.setTransform(702,328.7);

	this.instance_22 = new lib.table1();
	this.instance_22.setTransform(93,328.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-57.7,923.5,830.4);
p.frameBounds = [rect, new cjs.Rectangle(-32.5,-57.7,893.6,806.1), new cjs.Rectangle(-32.5,-57.7,863.9,782), new cjs.Rectangle(-32.5,-57.7,860,757.9), rect=new cjs.Rectangle(-32.5,-57.7,860,745.4), rect, rect, rect, rect, rect];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_2_mc();
	this.instance.setTransform(115,100);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_2_img();
	this.instance_1.setTransform(-180,-230);

	this.instance_2 = new lib.location_1_2_img();
	this.instance_2.setTransform(-180,-230);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgTXAj8QjogBikikQikijAAjpMAAAg2VQAAjpCkijQCkikDogBMAmvAAAQDoABCkCkQCkCjAADpMAAAA2VQAADpikCjQikCkjoABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-230,360,460);
p.frameBounds = [rect, rect, new cjs.Rectangle(-180,-230,385,460)];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.check_2_mc();
	this.instance.setTransform(115,100);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_1_img();
	this.instance_1.setTransform(-180,-230);

	this.instance_2 = new lib.location_1_1_img();
	this.instance_2.setTransform(-180,-230);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgTXAj8QjogBikikQikijAAjpMAAAg2VQAAjpCkijQCkikDogBMAmvAAAQDoABCkCkQCkCjAADpMAAAA2VQAADpikCjQikCkjoABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-230,360,460);
p.frameBounds = [rect, rect, new cjs.Rectangle(-180,-230,385,460)];


(lib.indicator_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuqCLQg2ABgngmQglgmgBg2QABg0AlgnQAnglA2gBIdqAAQA1ABAmAlQAnAngBA0QABA2gnAmQgmAmg1gBg");
	mask.setTransform(109,14);

	// text
	this.output_numbers_comp = new lib.output_numbers_1_mc();
	this.output_numbers_comp.setTransform(110.1,-19.4,0.6,0.6,0,0,0,0.1,1);

	this.output_numbers_comp.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.output_numbers_comp).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_2_mc();

	this.indicator_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(2,2,216,26);
p.frameBounds = [rect];


(lib.hint_filter_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		устанавливаем рус. или англ. название
		https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		*/
		this.stop();
		this.mouseChildren = false;
		this.mouseEnabled = false;
		this.body_mc.gotoAndStop(0);
		var lang_str = window.navigator.language || navigator.userLanguage;
		lang_str = lang_str.split("-")[0].toLowerCase();
		if ((lang_str == "ru") || (lang_str == "uk") || (lang_str == "be"))
		{
			this.body_mc.gotoAndStop("ru");
		}
		else if (lang_str == "de")
		{
			this.body_mc.gotoAndStop("de");
		}
		else if (lang_str == "fr")
		{
			this.body_mc.gotoAndStop("fr");
		}
		else if (lang_str == "es")
		{
			this.body_mc.gotoAndStop("es");
		}
		else if (lang_str == "pt")
		{
			this.body_mc.gotoAndStop("pt");
		}
		else
		{
			this.body_mc.gotoAndStop("en");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_hint_filter_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.5,-29.5,210,150);
p.frameBounds = [rect];


(lib.hero_dressup_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hoop
	this.hoop = new lib.hero1_hat_all();
	this.hoop.setTransform(-12.1,-239.1);

	this.timeline.addTween(cjs.Tween.get(this.hoop).wait(1));

	// flowers
	this.flowers = new lib.hero1_decor_all();
	this.flowers.setTransform(-6.6,-83.4);

	this.timeline.addTween(cjs.Tween.get(this.flowers).wait(1));

	// body
	this.instance = new lib.els_eyes1();
	this.instance.setTransform(8.8,59,1.252,1.252,0,0,0,40,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hair
	this.hair = new lib.hero1_hair_all();
	this.hair.setTransform(-12.1,-5.2);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

	// shadows
	this.shadows = new lib.h1_s_all();
	this.shadows.setTransform(-12,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.h1_l_all();
	this.lips.setTransform(-8,141.2);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// body
	this.instance_1 = new lib.els_lips0_img();
	this.instance_1.setTransform(-74.1,118.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// blush
	this.blush = new lib.h1_r_all();
	this.blush.setTransform(-8.1,28.9);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_2 = new lib.body_hair_img();
	this.instance_2.setTransform(-359.2,-261,1.52,1.52);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-359.2,-361.1,714.4,849.5);
p.frameBounds = [rect];


(lib.hero_dressup_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_hat_all
	this.instance = new lib.hero1_hat1();
	this.instance.setTransform(-12.1,-239.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero1_decor_all
	this.instance_1 = new lib.hero1_decor1();
	this.instance_1.setTransform(-6.6,-83.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// els_eyes1
	this.instance_2 = new lib.els_eyes1();
	this.instance_2.setTransform(8.8,59,1.252,1.252,0,0,0,40,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// hero1_hair_all
	this.instance_3 = new lib.hero1_hair1_img();
	this.instance_3.setTransform(-266.6,-279.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// h1_s_all
	this.instance_4 = new lib.h1_s1();
	this.instance_4.setTransform(-12,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// h1_l_all
	this.instance_5 = new lib.h1_l1();
	this.instance_5.setTransform(-8,141.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// els_lips0.png
	this.instance_6 = new lib.els_lips0_img();
	this.instance_6.setTransform(-74.1,118.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// h1_r_all
	this.instance_7 = new lib.h1_r1();
	this.instance_7.setTransform(-8.1,28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 11
	this.instance_8 = new lib.body_hair_img();
	this.instance_8.setTransform(-359.2,-261,1.52,1.52);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-359.2,-361.1,714.4,849.5);
p.frameBounds = [rect];


(lib.category_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.body_category_2_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_category_mc();
	this.instance_1.setTransform(0,0,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.category_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.body_category_2_6_mc();
	this.instance.setTransform(0,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_category_mc();
	this.instance_1.setTransform(0,0,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-83,160,163);
p.frameBounds = [rect];


(lib.category_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.body_category_2_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_category_mc();
	this.instance_1.setTransform(0,0,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.category_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.body_category_2_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_category_mc();
	this.instance_1.setTransform(0,0,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.category_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.body_category_2_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_category_mc();
	this.instance_1.setTransform(0,0,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.category_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.body_category_2_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_category_mc();
	this.instance_1.setTransform(0,0,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.category_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.body_category_2_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_category_mc();
	this.instance_1.setTransform(0,0,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.category_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.body_category_2_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_category_mc();
	this.instance_1.setTransform(0,0,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.category_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.body_category_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_category_mc();
	this.instance_1.setTransform(0,0,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.category_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.body_category_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_category_mc();
	this.instance_1.setTransform(0,0,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.category_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.body_category_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_category_mc();
	this.instance_1.setTransform(0,0,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.category_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.body_category_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_category_mc();
	this.instance_1.setTransform(0,0,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.animation_hint_filter_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_149 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(149).call(this.frame_149).wait(1));

	// animation
	this.instance = new lib.hint_filter_mc();
	this.instance.setTransform(0.5,0.5,1,1,0,0,0,0.5,0.5);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({alpha:1},10).wait(70).to({alpha:0.012},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.5,-29.5,210,150);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.radio_button_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// button_0
	this.button_0_mc = new lib.radio_button_1_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.button_0_mc).wait(1));

	// button_1
	this.button_1_mc = new lib.radio_button_1_1_mc();
	this.button_1_mc.setTransform(0,40);

	this.timeline.addTween(cjs.Tween.get(this.button_1_mc).wait(1));

	// button_2
	this.button_2_mc = new lib.radio_button_1_2_mc();
	this.button_2_mc.setTransform(0,80);

	this.timeline.addTween(cjs.Tween.get(this.button_2_mc).wait(1));

	// button_3
	this.button_3_mc = new lib.radio_button_1_3_mc();
	this.button_3_mc.setTransform(0,120);

	this.timeline.addTween(cjs.Tween.get(this.button_3_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,300,160);
p.frameBounds = [rect];


(lib.radio_button_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2018 edapskov v 1.0
		*/
		createjs.EventDispatcher.initialize(this);
		/*
		
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = true;
		this.mouseChildren = true;
		/*
		
		*/
		var container_mc = this.body_mc;
		container_mc.gotoAndStop(0);
		container_mc.mouseEnabled = true;
		container_mc.mouseChildren = true;
		/*
		
		*/
		var _that = this;
		var _value_num = 0;
		var _totalButtons_num = Number(container_mc.numChildren);
		/*
		
		*/
		this.setValueFunc = function(value_num)
		{
			_updateValueFunc(value_num);
		}
		/*
		
		*/
		this.getValueFunc = function()
		{
			return _getValueFunc();
		}
		/*
		
		*/
		function _updateButtonsFunc()
		{
			/*
			
			*/
			var button_mc;
			var i = 0;
			/*
			
			*/
			while(i < _totalButtons_num)
			{
				/*
				
				*/
				if(container_mc["button_" + i + "_mc"])
				{
					/*
					
					*/
					button_mc = container_mc["button_" + i + "_mc"];
					button_mc.gotoAndStop(0);
					button_mc.name = "button_" + i + "_mc";
					/*
					
					*/
					if(i == _value_num)
					{
						/*
						
						*/
						button_mc.mouseEnabled = false;
						button_mc.mouseChildren = false;
						button_mc.cursor = "default";
						button_mc.removeEventListener("click", _onClickButtonMcFunc, false);
						/*
						
						*/
						if(button_mc.check_mc)
						{
							button_mc.check_mc.gotoAndStop(1);
						}
					}
					else
					{
						/*
						
						*/
						button_mc.mouseEnabled = true;
						button_mc.mouseChildren = true;
						button_mc.cursor = "pointer";
						button_mc.addEventListener("click", _onClickButtonMcFunc, false);
						/*
						
						*/
						if(button_mc.check_mc)
						{
							button_mc.check_mc.gotoAndStop(0);
						}
					}
				}
				/*
				
				*/
				i++;
			}
		}
		/*
		
		*/
		function _onClickButtonMcFunc(event)
		{
			var current_mc = event.currentTarget;
			var temp_arr = current_mc.name.split("_");
			_updateValueFunc(temp_arr[1]);
		}
		/*
		 
		*/
		function _updateValueFunc(value_num)
		{
			/*
			
			*/
			if(value_num === undefined)
			{
				value_num = 0;
			}
			else
			{
				value_num = Number(value_num);
			}
			/*
			
			*/
			if(value_num < 0)
			{
				value_num = 0;
			}
			else if(value_num >= _totalButtons_num)
			{
				value_num = Number(_totalButtons_num - 1);
			}
			/*
			
			*/
			_value_num = value_num;
			/*
			
			*/
			_updateButtonsFunc();
			/*
			
			*/
			var user_event = new createjs.Event("change_radio_button");
			user_event.numberValue = _value_num;
			_that.dispatchEvent(user_event);
		}
		/*
		
		*/
		function _getValueFunc()
		{
			return _value_num;
		}
		/*
		
		*/
		_updateButtonsFunc();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.radio_button_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,300,160);
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
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
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
	this.instance.setTransform(0,0,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.9,scaleY:0.9,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-85,-85,170,170), new cjs.Rectangle(-90,-90,180,180)];


(lib.photo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_0_mc();
	this.instance.setTransform(0,0,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.9,scaleY:0.9,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-85,-85,170,170), new cjs.Rectangle(-90,-90,180,180)];


(lib.next_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_0_mc();
	this.instance.setTransform(0,0,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-90,-90,180,180)];


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
	this.instance.setTransform(0,0,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.9,scaleY:0.9,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-85,-85,170,170), new cjs.Rectangle(-90,-90,180,180)];


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
	this.instance.setTransform(0,0,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.9,scaleY:0.9,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-85,-85,170,170), new cjs.Rectangle(-90,-90,180,180)];


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
p.nominalBounds = rect = new cjs.Rectangle(-210,-10,1220,620);
p.frameBounds = [rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-300,0,1400,600);
p.frameBounds = [rect];


(lib.OrientationLockScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// screen
	this.screen_mc = new lib.orientation_lock_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-10,1200,620);
p.frameBounds = [rect];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(190,0);
	this.location_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(29).to({scaleX:0.83,scaleY:0.83},0).to({regX:0.1,scaleX:1.11,scaleY:1.11,x:190.1,alpha:0.738},11).to({regX:0,scaleX:1,scaleY:1,x:190,alpha:1},4).wait(1));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-190,0);
	this.location_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(19).to({scaleX:0.83,scaleY:0.83},0).to({regX:-0.1,scaleX:1.17,scaleY:1.17,x:-190.1,alpha:0.738},11).to({regX:0,scaleX:1,scaleY:1,x:-190,alpha:1},4).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-230,740,460);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-340,-230,710,460), new cjs.Rectangle(-345.4,-230,715.5,460), new cjs.Rectangle(-350.9,-230,720.9,460), new cjs.Rectangle(-356.3,-230,726.4,460), new cjs.Rectangle(-361.8,-230,731.8,460), new cjs.Rectangle(-367.2,-230,737.3,460), new cjs.Rectangle(-372.7,-233.4,742.8,466.9), new cjs.Rectangle(-378.2,-240.4,748.2,480.9), new cjs.Rectangle(-383.7,-247.4,753.7,494.9), new cjs.Rectangle(-389.1,-254.3,759.2,508.7), new cjs.Rectangle(-394.6,-261.3,734.6,522.7), new cjs.Rectangle(-400,-268.3,744.6,536.6), new cjs.Rectangle(-392.4,-258.7,741.6,517.5), new cjs.Rectangle(-384.9,-249.1,738.6,498.4), new cjs.Rectangle(-377.4,-239.5,735.6,479.2), new cjs.Rectangle(-370,-230,732.7,460), new cjs.Rectangle(-370,-230,737.3,460), new cjs.Rectangle(-370,-232.3,741.8,464.7), new cjs.Rectangle(-370,-238.1,746.4,476.3), new cjs.Rectangle(-370,-243.9,751,487.9), new cjs.Rectangle(-370,-249.7,755.6,499.4), new cjs.Rectangle(-370,-255.5,760,511), new cjs.Rectangle(-370,-249.1,755,498.3), new cjs.Rectangle(-370,-242.7,750,485.5), new cjs.Rectangle(-370,-236.4,745,472.8), new cjs.Rectangle(-370,-230,740,460)];


(lib.indicator_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// indicator
	this.indicator_mc = new lib.indicator_1_mc();
	this.indicator_mc.setTransform(-110,-15);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// bg
	this.instance = new lib.indicator_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-47,280,87);
p.frameBounds = [rect];


(lib.heroes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.hero_dressup_1_mc();
	this.hero_1.setTransform(260,259,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:408},0).to({_off:true},1).wait(1).to({_off:false,x:260},0).wait(1).to({x:408},0).to({_off:true},1).wait(1));

	// decor
	this.instance = new lib.shadow_background_3_img();
	this.instance.setTransform(-200,0);

	this.instance_1 = new lib.shadow_background_1_img();
	this.instance_1.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).wait(3));

	// hero_2
	this.hero_2 = new lib.hero_dressup_2_mc();
	this.hero_2.setTransform(590,330,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).to({_off:true},1).wait(1).to({_off:false,x:400},0).wait(1).to({x:590},0).to({_off:true},1).wait(1).to({_off:false,x:400},0).wait(1));

	// bg
	this.instance_2 = new lib.background_3_img();
	this.instance_2.setTransform(-200,0);

	this.instance_3 = new lib.background_1_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600.8);
p.frameBounds = [rect, rect, new cjs.Rectangle(-200,0,1200,600), rect=new cjs.Rectangle(-200,0,1200,600.8), rect, new cjs.Rectangle(-200,0,1200,600)];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero
	this.instance = new lib.hero_dressup_0_mc();
	this.instance.setTransform(270,259,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.shadow_background_1_img();
	this.instance_1.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// hero
	this.instance_2 = new lib.hero2_main();
	this.instance_2.setTransform(590,330,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600.8);
p.frameBounds = [rect];


(lib.filters_open_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hint
	this.instance = new lib.animation_hint_filter_mc();
	this.instance.setTransform(-105,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// animation
	this.instance_1 = new lib.filters_body_open_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.801},19).to({alpha:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-194.5,-164.5,239.5,189.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.filters_container_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.exit_mc = new lib.filters_exit_mc();
	this.exit_mc.setTransform(0,-145);

	this.open_mc = new lib.filters_open_mc();
	this.open_mc.setTransform(0,-155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.open_mc},{t:this.exit_mc}]}).wait(1));

	// title
	this.instance = new lib.corner_filters_mc();
	this.instance.setTransform(118,-58,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// filters
	this.filters_mc = new lib.radio_button_1_mc();
	this.filters_mc.setTransform(-120,-65);

	this.timeline.addTween(cjs.Tween.get(this.filters_mc).wait(1));

	// bg
	this.instance_1 = new lib.filters_bg_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-194.5,-319.5,395.3,449.5);
p.frameBounds = [rect];


(lib.filters_animation_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{open:0,exit:9});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(1));

	// animation
	this.filters_container_mc = new lib.filters_container_mc();
	this.filters_container_mc.setTransform(400,730);

	this.timeline.addTween(cjs.Tween.get(this.filters_container_mc).to({y:450},9).to({y:730},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(205.5,410.5,395.3,449.5);
p.frameBounds = [rect, new cjs.Rectangle(205.5,379.4,395.3,449.5), new cjs.Rectangle(205.5,348.3,395.3,449.5), new cjs.Rectangle(205.5,317.2,395.3,449.5), new cjs.Rectangle(205.5,286.1,395.3,449.5), new cjs.Rectangle(205.5,255,395.3,449.5), new cjs.Rectangle(205.5,223.9,395.3,449.5), new cjs.Rectangle(205.5,192.7,395.3,449.5), new cjs.Rectangle(205.5,161.6,395.3,449.5), new cjs.Rectangle(205.5,130.5,395.3,449.5), new cjs.Rectangle(205.5,158.5,395.3,449.5), new cjs.Rectangle(205.5,186.5,395.3,449.5), new cjs.Rectangle(205.5,214.5,395.3,449.5), new cjs.Rectangle(205.5,242.5,395.3,449.5), new cjs.Rectangle(205.5,270.5,395.3,449.5), new cjs.Rectangle(205.5,298.5,395.3,449.5), new cjs.Rectangle(205.5,326.5,395.3,449.5), new cjs.Rectangle(205.5,354.5,395.3,449.5), new cjs.Rectangle(205.5,382.5,395.3,449.5), new cjs.Rectangle(205.5,410.5,395.3,449.5)];


(lib.dressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// categories
	this.earrings = new lib.category_6_2_mc();
	this.earrings.setTransform(270,155);

	this.hoop = new lib.category_5_2_mc();
	this.hoop.setTransform(270,0);

	this.hair = new lib.category_4_2_mc();
	this.hair.setTransform(270,-155);

	this.shadows = new lib.category_3_2_mc();
	this.shadows.setTransform(-270,155);

	this.lips = new lib.category_2_2_mc();
	this.lips.setTransform(-270,0);

	this.blush = new lib.category_1_2_mc();
	this.blush.setTransform(-270,-155);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AgBAYIgMgFIgEgDIgEgFQgCgDAAgGIgBgHIABgDIABgCIAIgIIAGgCIAIgBIAAgDQAIAEAEACQADACABACIAEAFQAEAFABADIgBAEQgDAOgLAFIgGACIgEABg");
	this.shape.setTransform(-284.2,-6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.blush},{t:this.lips},{t:this.shadows},{t:this.hair},{t:this.hoop},{t:this.earrings}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,-235,700,470);
p.frameBounds = [rect];


(lib.dressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// categories
	this.flowers = new lib.category_6_1_mc();
	this.flowers.setTransform(270,155);

	this.hoop = new lib.category_5_1_mc();
	this.hoop.setTransform(270,0);

	this.hair = new lib.category_4_1_mc();
	this.hair.setTransform(270,-155);

	this.shadows = new lib.category_3_1_mc();
	this.shadows.setTransform(-270,155);

	this.lips = new lib.category_2_1_mc();
	this.lips.setTransform(-270,0);

	this.blush = new lib.category_1_1_mc();
	this.blush.setTransform(-270,-155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush},{t:this.lips},{t:this.shadows},{t:this.hair},{t:this.hoop},{t:this.flowers}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,-235,700,470);
p.frameBounds = [rect];


(lib.Bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_3_mc();
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect];


(lib.quest_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(81,235,1,1,0,-30,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1,p:{skewX:-30,skewY:150,x:81,y:235,rotation:0}},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:-60,skewY:120,x:126,y:421,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:-60,skewY:120,x:96,y:453,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:686,y:450,rotation:30}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:387,y:289,rotation:-30}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:130,y:236,rotation:15}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:650,y:253,rotation:15}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:604,y:420,rotation:15}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).wait(1));

	// arrows
	this.object_2 = new lib.arrow_11_mc();
	this.object_2.setTransform(404,315,1,1,90);

	this.object_4 = new lib.arrow_12_mc();
	this.object_4.setTransform(415,280,1,1,45);

	this.object_6 = new lib.arrow_13_mc();
	this.object_6.setTransform(420,175,1,1,0,135,-45);

	this.object_10 = new lib.arrow_14_mc();
	this.object_10.setTransform(400,310,1,1,0,-90,90);

	this.object_14 = new lib.arrow_15_mc();
	this.object_14.setTransform(425,400,1,1,0,135,-45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.object_2}]},1).to({state:[]},1).to({state:[{t:this.object_4}]},1).to({state:[]},1).to({state:[{t:this.object_6}]},1).to({state:[]},1).to({state:[{t:this.object_10}]},3).to({state:[]},1).to({state:[{t:this.object_14}]},3).to({state:[]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]}).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:45}},{t:this.instance,p:{x:405,y:410}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{x:400,y:-260}}]},1).wait(1));

	// tools
	this.dressupPanel_15_mc = new lib.dressupPanel_2_mc();
	this.dressupPanel_15_mc.setTransform(400,310);
	this.dressupPanel_15_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_15_mc).wait(14).to({_off:false},0).wait(1));

	// objects
	this.object_1 = new lib.object_1_2_mc();
	this.object_1.setTransform(47,241);

	this.object_3 = new lib.object_3_2_mc();
	this.object_3.setTransform(122,430);

	this.object_5 = new lib.object_5_2_mc();
	this.object_5.setTransform(98,464);

	this.object_7 = new lib.object_7_2_mc();
	this.object_7.setTransform(724,460);

	this.object_8 = new lib.object_8_2_mc();
	this.object_8.setTransform(404,268);

	this.object_9 = new lib.object_9_2_mc();
	this.object_9.setTransform(150,238);

	this.object_11 = new lib.object_11_2_mc();
	this.object_11.setTransform(704,248);

	this.object_12 = new lib.object_12_2_mc();
	this.object_12.setTransform(403,290);

	this.object_13 = new lib.object_13_2_mc();
	this.object_13.setTransform(626,422);

	this.instance_1 = new lib.shadow_background_3_img();
	this.instance_1.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[]},1).to({state:[{t:this.object_3}]},1).to({state:[]},1).to({state:[{t:this.object_5}]},1).to({state:[]},1).to({state:[{t:this.object_7}]},1).to({state:[{t:this.object_8}]},1).to({state:[{t:this.object_9}]},1).to({state:[]},1).to({state:[{t:this.object_11}]},1).to({state:[{t:this.object_12}]},1).to({state:[{t:this.object_13}]},1).to({state:[]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// objects
	this.subject_1 = new lib.makeup2_2();
	this.subject_1.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_2 = new lib.makeup2_3();
	this.subject_2.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_3 = new lib.makeup2_4();
	this.subject_3.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_4 = new lib.makeup2_5();
	this.subject_4.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_5 = new lib.makeup2_6();
	this.subject_5.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_6 = new lib.makeup2_7();
	this.subject_6.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_7 = new lib.makeup2_8();

	this.subject_8 = new lib.makeup2_9();
	this.subject_8.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_9 = new lib.makeup2_10();
	this.subject_9.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_10 = new lib.makeup2_11();
	this.subject_10.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_11 = new lib.makeup2_12();
	this.subject_11.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_12 = new lib.makeup2_13();
	this.subject_12.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_13 = new lib.makeup2_15();
	this.subject_13.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_14 = new lib.makeup2_16();
	this.subject_14.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.hero_2 = new lib.hero_dressup_2_mc();
	this.hero_2.setTransform(400,310);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[{t:this.subject_3}]},1).to({state:[{t:this.subject_4}]},1).to({state:[{t:this.subject_5}]},1).to({state:[{t:this.subject_6}]},1).to({state:[{t:this.subject_7}]},1).to({state:[{t:this.subject_8}]},1).to({state:[{t:this.subject_9}]},1).to({state:[{t:this.subject_10}]},1).to({state:[{t:this.subject_11}]},1).to({state:[{t:this.subject_12}]},1).to({state:[{t:this.subject_13}]},1).to({state:[{t:this.subject_14}]},1).to({state:[{t:this.hero_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-329.4,923.5,1102.1);
p.frameBounds = [rect, rect=new cjs.Rectangle(-32.5,-329.4,860,932.6), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-32.5,-329.4,923.5,1102.1), new cjs.Rectangle(-32.5,-329.4,860,932.6), new cjs.Rectangle(-179.9,-329.4,1007.4,932.6), new cjs.Rectangle(-32.5,-139,860,742.2), rect=new cjs.Rectangle(-32.5,-329.4,860,932.6), rect, new cjs.Rectangle(-200,-329.4,1200,929.4)];


(lib.quest_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(76,221,1,1,0,-30,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1,p:{skewX:-30,skewY:150,x:76,y:221,rotation:0}},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:-30,skewY:150,x:190,y:220,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:-60,skewY:120,x:154,y:482,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:641,y:243,rotation:-15}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:-30,skewY:150,x:145,y:412,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:180,x:90,y:425,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:689,y:252,rotation:15}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:-60,skewY:120,x:715,y:416,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:405,y:240,rotation:60}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).wait(1));

	// arrows
	this.object_2 = new lib.arrow_1_mc();
	this.object_2.setTransform(400,390,1,1,0,-90,90);

	this.object_4 = new lib.arrow_2_mc();
	this.object_4.setTransform(400,390,1,1,90);

	this.object_6 = new lib.arrow_3_mc();
	this.object_6.setTransform(417.8,390.5,0.813,0.813,0,135,-45,0.3,-1.1);

	this.object_8 = new lib.arrow_4_mc();
	this.object_8.setTransform(520.1,440,0.858,0.858,45,0,0,0.1,-0.1);

	this.object_9 = new lib.arrow_5_mc();
	this.object_9.setTransform(280.1,440.1,0.858,0.858,0,-45,135,0,0.1);

	this.object_11 = new lib.arrow_6_mc();
	this.object_11.setTransform(422,490,1,1,45);

	this.object_13 = new lib.arrow_7_mc();
	this.object_13.setTransform(422,440,1,1,0,135,-45);

	this.object_15 = new lib.arrow_8_mc();
	this.object_15.setTransform(400,300,1,1,90);

	this.object_16 = new lib.arrow_9_mc();
	this.object_16.setTransform(340,290,1,1,45);

	this.object_17 = new lib.arrow_10_mc();
	this.object_17.setTransform(455,290,1,1,0,-45,135);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.object_2}]},1).to({state:[]},1).to({state:[{t:this.object_4}]},1).to({state:[]},1).to({state:[{t:this.object_6}]},1).to({state:[]},1).to({state:[{t:this.object_8}]},1).to({state:[{t:this.object_9}]},1).to({state:[]},1).to({state:[{t:this.object_11}]},1).to({state:[]},1).to({state:[{t:this.object_13}]},1).to({state:[]},1).to({state:[{t:this.object_15}]},1).to({state:[{t:this.object_16}]},1).to({state:[{t:this.object_17}]},1).to({state:[]},1).wait(3));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).wait(1));

	// tools
	this.dressupPanel_20_mc = new lib.dressupPanel_1_mc();
	this.dressupPanel_20_mc.setTransform(400,310);
	this.dressupPanel_20_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_20_mc).wait(19).to({_off:false},0).wait(1));

	// objects
	this.object_1 = new lib.object_1_1_mc();
	this.object_1.setTransform(35,232);

	this.object_3 = new lib.object_3_1_mc();
	this.object_3.setTransform(149,234);

	this.object_5 = new lib.object_5_1_mc();
	this.object_5.setTransform(87,484);

	this.object_7 = new lib.object_7_1_mc();
	this.object_7.setTransform(647,212);

	this.object_10 = new lib.object_10_1_mc();
	this.object_10.setTransform(124,416);

	this.object_12 = new lib.object_12_1_mc();
	this.object_12.setTransform(66,416);

	this.object_14 = new lib.object_14_1_mc();
	this.object_14.setTransform(743,255);

	this.object_18 = new lib.object_18_1_mc();
	this.object_18.setTransform(697,444);

	this.object_19 = new lib.object_19_1_mc();
	this.object_19.setTransform(400,260);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[]},1).to({state:[{t:this.object_3}]},1).to({state:[]},1).to({state:[{t:this.object_5}]},1).to({state:[]},1).to({state:[{t:this.object_7}]},1).to({state:[]},1).to({state:[{t:this.object_10}]},2).to({state:[]},1).to({state:[{t:this.object_12}]},1).to({state:[]},1).to({state:[{t:this.object_14}]},1).to({state:[]},1).to({state:[{t:this.object_18}]},3).to({state:[{t:this.object_19}]},1).to({state:[]},1).wait(1));

	// objects
	this.subject_1 = new lib.makeup1_2();

	this.subject_2 = new lib.makeup1_3();
	this.subject_2.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_3 = new lib.makeup1_4();
	this.subject_3.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_4 = new lib.makeup1_5();
	this.subject_4.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_5 = new lib.makeup1_6();
	this.subject_5.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_6 = new lib.makeup1_7();
	this.subject_6.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_7 = new lib.makeup1_8();
	this.subject_7.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_8 = new lib.makeup1_9();
	this.subject_8.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_9 = new lib.makeup1_10();
	this.subject_9.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_10 = new lib.makeup1_11();
	this.subject_10.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_11 = new lib.makeup1_12();
	this.subject_11.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_12 = new lib.makeup1_13();
	this.subject_12.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_13 = new lib.makeup1_14();
	this.subject_13.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_14 = new lib.makeup1_15();
	this.subject_14.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_15 = new lib.makeup1_16();
	this.subject_15.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_16 = new lib.makeup1_17();
	this.subject_16.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_17 = new lib.makeup1_18();
	this.subject_17.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_18 = new lib.makeup1_19();
	this.subject_18.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.subject_19 = new lib.makeup1_20();
	this.subject_19.setTransform(65,174.8,1,1,0,0,0,65,174.8);

	this.hero_1 = new lib.hero_dressup_1_mc();
	this.hero_1.setTransform(408,259,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[{t:this.subject_3}]},1).to({state:[{t:this.subject_4}]},1).to({state:[{t:this.subject_5}]},1).to({state:[{t:this.subject_6}]},1).to({state:[{t:this.subject_7}]},1).to({state:[{t:this.subject_8}]},1).to({state:[{t:this.subject_9}]},1).to({state:[{t:this.subject_10}]},1).to({state:[{t:this.subject_11}]},1).to({state:[{t:this.subject_12}]},1).to({state:[{t:this.subject_13}]},1).to({state:[{t:this.subject_14}]},1).to({state:[{t:this.subject_15}]},1).to({state:[{t:this.subject_16}]},1).to({state:[{t:this.subject_17}]},1).to({state:[{t:this.subject_18}]},1).to({state:[{t:this.subject_19}]},1).to({state:[{t:this.hero_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-329.4,936,1102.1);
p.frameBounds = [rect, new cjs.Rectangle(-32.5,-329.4,860,1017.1), new cjs.Rectangle(-32.5,-329.4,923.5,1102.1), new cjs.Rectangle(-32.5,-329.4,860,1017.1), new cjs.Rectangle(-33,-329.4,860.5,1017.1), rect=new cjs.Rectangle(-32.5,-329.4,860,1017.1), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-179.9,-329.4,1012.9,1017.1), rect=new cjs.Rectangle(-32.5,-329.4,860,1017.1), rect, rect, rect, new cjs.Rectangle(-32.5,-329.4,860,1206.5), new cjs.Rectangle(50,-329.4,700,930.2)];


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
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600.8);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400.1,530.1,0.75,0.75,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400.1,530.1,0.75,0.75,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3);
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
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,680);
p.frameBounds = [rect];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(400,800,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(585,550,0.727,0.727);
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.play_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// title
	this.instance = new lib.animation_title_mc();
	this.instance.setTransform(400,480);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.102;
	this.instance_1.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// heroes
	this.instance_2 = new lib.heroes_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(200,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_3 = new lib.background_1_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9);
p.frameBounds = [rect];


(lib.SelectionScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

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
	this.instance.setTransform(-200,400);
	this.instance.alpha = 0.102;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(200,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// filters
	this.filters_animation_mc = new lib.filters_animation_mc();
	this.filters_animation_mc.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.filters_animation_mc).wait(1));

	// btn
	this.facebook_btn = new lib.facebook_btn();
	this.facebook_btn.setTransform(100,700);
	new cjs.ButtonHelper(this.facebook_btn, 0, 1, 2, false, new lib.facebook_btn(), 3);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(580,700,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(700,500);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.playAgain_btn = new lib.again_btn();
	this.playAgain_btn.setTransform(100,500);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.again_btn(), 3);

	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(485,540);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(315,540);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,40);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.prev_mc},{t:this.next_mc},{t:this.playAgain_btn},{t:this.photo_btn},{t:this.freeGames_mc},{t:this.facebook_btn}]}).wait(1));

	// banners
	this.banner_2_mc = new lib.banner_2_mc();
	this.banner_2_mc.setTransform(720,-200,0.923,0.923);

	this.banner_1_mc = new lib.banner_1_mc();
	this.banner_1_mc.setTransform(80,-200,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.banner_1_mc},{t:this.banner_2_mc}]}).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(-200,400);
	this.instance.alpha = 0.012;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_mc();
	this.photoContainer_mc.setTransform(0,-0.1,1,1,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-319.9,1262.7,1780);
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
	this.text.lineHeight = 74;
	this.text.lineWidth = 252;
	this.text.setTransform(2,2);

	this.instance = new lib.PreloaderScreen();

	this.instance_1 = new lib.CopyrightScreen();

	this.instance_2 = new lib.WelcomeScreen();

	this.instance_3 = new lib.SelectionScreen();

	this.instance_4 = new lib.LocationScreen_1();

	this.instance_5 = new lib.LocationScreen_2();

	this.instance_6 = new lib.RedirectScreen();

	this.instance_7 = new lib.ResultScreen();
	this.instance_7.setTransform(0,-0.1,1,1,0,0,0,0,-0.1);

	this.instance_8 = new lib.InstructionScreen();

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(345,50);

	this.instance_9 = new lib.TrackMove();
	this.instance_9.setTransform(270,50);

	this.instance_10 = new lib.Cursor();
	this.instance_10.setTransform(185,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(115.1,50,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(45.1,50,0.583,0.583,0,0,0,0.1,0);

	this.instance_11 = new lib.OrientationLockScreen();

	this.instance_12 = new lib.CurtainScreen();

	this.instance_13 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_10},{t:this.instance_9},{t:this.gravity_explosion_comp}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[]},1).to({state:[{t:this.instance_13}]},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, new cjs.Rectangle(-300,0,1400,600), new cjs.Rectangle(-200,0,1200,600), rect=new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9), rect, rect=new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3), rect, new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-262.6,-319.9,1262.7,1780), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(10,0,353,100), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-1200,0,3200,600), rect=null, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-10,1220,620)];


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