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
		{name:"storage_atlas_", frames: [[0,0,1200,900]]},
		{name:"storage_atlas_2", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_5", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_6", frames: [[0,0,1200,500],[0,502,1200,450]]},
		{name:"storage_atlas_7", frames: [[0,0,1200,400],[0,402,1200,400],[0,804,1200,400]]},
		{name:"storage_atlas_8", frames: [[0,402,1200,350],[0,0,1200,400]]},
		{name:"storage_atlas_9", frames: [[0,599,1200,301],[0,902,1200,301],[0,0,670,597]]},
		{name:"storage_atlas_10", frames: [[0,0,1200,301],[0,303,1200,301],[0,606,526,537]]},
		{name:"storage_atlas_11", frames: [[0,742,1200,174],[0,202,444,538],[0,0,1200,200],[446,202,400,400],[0,918,640,280],[642,918,640,280]]},
		{name:"storage_atlas_12", frames: [[382,324,760,160],[382,648,760,160],[382,810,760,160],[502,0,760,160],[382,486,760,160],[502,162,760,160],[0,0,500,300],[0,1066,1210,110],[0,684,380,380],[0,302,380,380]]},
		{name:"storage_atlas_13", frames: [[0,0,760,160],[0,162,760,160],[0,324,760,160],[0,486,760,160],[0,648,760,160],[0,810,760,160],[0,972,760,160],[0,1134,712,162]]},
		{name:"storage_atlas_14", frames: [[0,0,615,168],[617,0,585,168],[0,472,300,300],[0,170,300,300],[0,774,300,300],[302,170,300,300],[624,734,320,280],[604,452,320,280],[926,452,320,280],[302,734,320,280],[624,1016,320,280],[302,1016,320,280],[946,734,320,280],[604,170,320,280],[926,170,320,280],[946,1016,320,280]]},
		{name:"storage_atlas_15", frames: [[808,976,190,190],[966,242,239,210],[966,0,240,240],[944,454,200,200],[742,282,200,200],[0,421,200,200],[606,686,200,200],[202,444,200,200],[404,646,200,200],[0,623,200,200],[404,444,200,200],[606,484,200,200],[808,656,200,200],[606,888,200,200],[1010,656,200,200],[202,646,200,200],[0,825,200,200],[0,1027,200,200],[202,848,200,200],[606,1090,200,200],[404,848,200,200],[202,1050,200,200],[404,1050,200,200],[1000,976,190,190],[808,858,328,116],[0,0,320,280],[400,282,340,160],[322,0,320,280],[644,0,320,280],[0,282,398,137]]},
		{name:"storage_atlas_16", frames: [[134,735,111,217],[449,734,92,183],[665,719,64,178],[247,938,83,13],[381,324,103,32],[188,700,103,32],[162,1261,103,32],[1184,1139,103,31],[723,1267,103,31],[618,1267,103,31],[824,102,49,52],[1257,955,28,50],[1227,955,28,73],[188,487,137,157],[1147,1161,23,9],[381,358,7,5],[1172,1161,6,9],[723,317,96,34],[1187,1067,96,34],[964,1091,78,58],[884,1091,78,58],[374,365,120,120],[487,1050,120,120],[496,1172,120,120],[1052,1242,48,48],[293,700,32,32],[824,162,150,125],[1044,134,150,150],[580,102,150,150],[183,954,150,150],[162,1109,150,150],[967,523,100,100],[384,180,180,80],[314,1177,180,100],[192,365,180,120],[335,938,180,110],[529,609,120,120],[0,0,190,190],[1261,750,39,76],[1069,532,100,100],[543,731,120,120],[479,487,120,120],[601,254,120,120],[543,853,120,120],[335,1050,150,125],[0,192,190,190],[1248,212,50,150],[1261,637,37,111],[976,162,39,104],[824,289,220,80],[1191,433,100,100],[0,384,186,188],[1205,1198,40,55],[1219,786,40,43],[517,1037,10,11],[609,1037,69,94],[913,829,100,73],[1125,1099,57,60],[1029,841,99,100],[1017,162,23,38],[1227,1030,31,31],[1052,1190,50,50],[1219,637,40,147],[327,487,150,142],[1248,0,50,210],[1196,134,50,297],[384,0,194,178],[192,192,187,171],[1044,0,187,132],[0,574,186,159],[0,1109,160,160],[882,0,160,160],[1063,943,60,60],[1063,1005,60,60],[618,1133,60,60],[1125,975,60,60],[618,1195,60,60],[1212,893,60,60],[1125,1037,60,60],[928,1151,60,60],[680,1143,60,60],[742,1143,60,60],[680,1205,60,60],[804,1143,60,60],[990,1213,60,60],[742,1205,60,60],[804,1205,60,60],[1063,1067,60,60],[866,1151,60,60],[990,1151,60,60],[866,1213,60,60],[928,1213,60,60],[651,667,250,50],[680,1091,100,50],[601,498,100,101],[1089,401,100,129],[1015,634,100,100],[1171,535,100,100],[580,0,300,100],[247,734,200,100],[782,1091,100,50],[496,324,100,100],[913,625,100,100],[913,727,100,100],[1052,1161,93,27],[0,1271,91,29],[247,836,200,100],[1117,739,100,100],[327,631,200,101],[188,646,130,52],[1015,736,100,100],[1130,841,150,50],[192,0,190,190],[1130,893,80,80],[732,102,90,213],[0,735,132,218],[1203,1277,95,11],[1203,1255,92,20],[828,1275,99,23],[1102,1249,99,23],[1102,1274,99,23],[1104,1198,99,24],[1147,1172,99,24],[929,1275,99,23],[1104,1224,99,23],[1187,975,38,90],[1248,364,50,59],[0,955,181,152],[496,480,18,5],[913,615,6,8],[1184,1103,96,34],[1046,286,146,113],[601,376,120,120],[967,401,120,120],[723,371,120,120],[723,493,120,120],[845,493,120,120],[845,371,120,120],[479,609,20,20],[267,1261,32,32],[1117,637,100,100],[651,615,260,50],[496,426,101,52],[665,905,180,60],[731,843,180,60],[731,719,180,60],[517,975,180,60],[699,967,180,60],[699,1029,180,60],[731,781,180,60],[847,905,180,60],[381,262,180,60],[881,1029,180,60],[881,967,180,60]]}
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
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.angel_body1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.angel_body2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.angel_body3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.angel_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.angel_eyes1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.angel_eyes1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.angel_eyes1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.angel_eyes2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.angel_eyes2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.angel_eyes2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.angel_hair_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.angel_hand1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.angel_hand3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.angel_hand4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.angel_head1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.angel_mouth1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.angel_mouth2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.angel_mouth3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.angel_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.angel_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.animation_for_next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.aw1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.aw2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_с1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_с1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_с1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_с1_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_с2_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_с3_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.bengali_10_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bengali_11_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bengali_12_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bengali_13_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bengali_14_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.bengali_15_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.bengali_16_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.bengali_17_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.bengali_18_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.bengali_19_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.bengali_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.bengali_20_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.bengali_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.bengali_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.bengali_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.bengali_5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.bengali_6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.bengali_7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.bengali_8_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.bengali_9_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.bomb_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.bomb_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.bomb_explosion_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.bomb_explosion_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.bomb_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.cloud_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.cloud_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.cloud_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.cloud_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.congratulations_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.congratulations_de_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.congratulations_en_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.congratulations_es_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.congratulations_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.congratulations_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.congratulations_id_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.congratulations_it_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.congratulations_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.congratulations_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.congratulations_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.congratulations_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.congratulations_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.decor_banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.decor_banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.done_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.fire1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.flash_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.folded_finger_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.ground_10_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ground_11_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ground_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ground_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ground_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ground_4_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ground_5_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ground_6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ground_7_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ground_8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ground_9_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.heart_prize_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.heroes_main_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.ladder_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.lava_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.leg1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.leg2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.luch_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.moon_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.next_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.number_level_10_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.number_level_11_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.number_level_12_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.number_level_13_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.number_level_14_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.number_level_15_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.number_level_16_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.number_level_17_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.number_level_18_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.number_level_19_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.number_level_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.number_level_20_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.number_level_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.number_level_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.number_level_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.number_level_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.number_level_6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.number_level_7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.number_level_8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.number_level_9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.object10_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.object11_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.object1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.object2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.object3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.object3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.object4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.object4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.object5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.object5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.object5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.object5_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.object6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.object6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.object7_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.object7_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.object7_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.object8_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.object9_11_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.object9_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.podlogka_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.sat_body1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.sat_body2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.sat_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.sat_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.sat_eyes1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.sat_eyes1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.sat_eyes1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.sat_eyes4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.sat_eyes4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.sat_eyes6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.sat_eyes6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.sat_hand1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.sat_hand2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.sat_head1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.sat_mouth1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.sat_mouth2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.sat_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.sat_tail1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.spark_bomb_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.spark_bomb_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.starry_sky_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.straightened_finger_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.substrate_level_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.sw1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_de_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.title_id_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.title_it_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.title_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.title_level_de_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.title_level_en_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.title_level_es_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.title_level_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.title_level_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.title_level_id_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.title_level_it_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.title_level_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.title_level_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.title_level_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.title_level_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.title_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.water_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.white_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_redirect_img();
	this.instance.setTransform(-170,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-80,340,160);
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


(lib.white_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.white_img();
	this.instance.setTransform(-600,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-300,1200,600);
p.frameBounds = [rect];


(lib.sw1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sw1_img();
	this.instance.setTransform(-50.4,-25.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.4,-25.8,101,52);
p.frameBounds = [rect];


(lib.substrate_level_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.substrate_level_1_img();
	this.instance.setTransform(-130,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-25,260,50);
p.frameBounds = [rect];


(lib.substrate_for_objects_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.podlogka_img();
	this.instance.setTransform(-356,-81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-356,-81,712,162);
p.frameBounds = [rect];


(lib.straightened_finger_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.straightened_finger_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.shadow_congratulations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhfTAwbMAAAhg1MC+nAAAMAAABg1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-610,-310,1220,620);
p.frameBounds = [rect];


(lib.sat_tail1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sat_tail1_img();
	this.instance.setTransform(-72.9,-56.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.9,-56.6,146,113);
p.frameBounds = [rect];


(lib.sat_rouge1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.sat_rouge1_img();
	this.instance.setTransform(-46.2,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.2,-15.5,96,34);
p.frameBounds = [rect];


(lib.sat_mouth1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sat_mouth1_img();
	this.instance.setTransform(-8.8,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8.8,-2.3,18,5);
p.frameBounds = [rect];


(lib.sat_head1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.sat_head1_img();
	this.instance.setTransform(-90.6,-75.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.6,-75.8,181,152);
p.frameBounds = [rect];


(lib.sat_hand3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A2282C").ss(1,1,1).p("ADXkNQgBgSgBgEQgCgEgGgBQgGgBgDACIgBAAQgBABgBABQgFAFgFAQQgHAQgCAJQgEAfgPAOQgjAhgGAcQgBABgBABQgIAHgHAQQhNCCgVAaQguAwgMATADNj3QgDgIABgEQABgDAEgDQADgCADgCIABAAAD8j3QgJgDgHgCQgRgFgFADQgEACgFAFAErjjQgBgNgCgHQAAgCAAgDQgDgPgFgHQgHgNgPAAQgFgBgGABQgPADgYAOIgBABAEmi+QAFgEACgJQABgDAAgDQADgOgBgCQAAgBgFgBQgGgEgOgGQgDgBgDgBQgGgDgEgBAEniNQAGgKAEgIQAGgNgEgJQgDgDgKgGQgIgFgQgHQgCAAAAgBQgkgQgIAFQgOAIgUAbQgGAJgDAGQgEgCgDgBQgBAAgDgDQgCgEANgdIABgBQABgDACgDQACgFACgDAEniNQgGgHgIgGQgKgHgGgDQgDgCgCgBQgFgCgIgFQgGgFgMAHQgLAGgTATQgEAEgDAEQgPgCgCgFQgCgDADgHQACgDADgFACygrIAZgPQAagOAYgMIABgBQATgIAOgKQAEgDAEgDQAPgOgHgJQgEgGgEgDAC4h/QABgBABgDQADgEADgEADnh+QgEAGgBABQAAAAgKAFQgJAGgJABQgMABgEgIQgCgCABgCAhCBtQgHgEgGgEQgJgFgJgIQgggbgGghQgNhCgigaQgVgQgdAAQghAAgXAoQgUAkAAAoQAABJCCBjQAxAmAyAbQAvAZAfgBQAdgBBAh+QA/h+AXhWIAAgBQgmACgJgOADAjiQAIgOAFgH");
	this.shape.setTransform(6.3,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A2282C").s().p("Ah2EMQgQgHgBgCIAAgBIANgBQAXgDAHgIQAAAEgFALQgEAJgIAAQgEAAgFgCgAiVCaIgFgJIgCgDIgCgDQgJgPACgLQAAgDACgDIABgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAIABAAIADABIACADIgBAEIgBACIAAABQgBAIAFATIAAACIADALIgBgBgAAXhiQABgEAHgKIABAAQAHgLAFgEQANgHAaAEQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIABABQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAIAAADIgBACIgBACQgBABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQgYgDgKAFQgFACgGAJIgQALIAAgCgACfhyQgJgBgHgFIgJgIIgCgCIABgFIADgCQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAIAKAJIgBgBIALALQAAAAABAAQAAABABAAQAAABAAAAQABAAAAABIgCAAgAAMh8QAAgHAFgMIgCACIgEADIACgEQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAIABAAIADACQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAHgGALIgBABIAAABIgCgGgACfjzQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIgCgEQgCgSAEgBIACgBIABAAIACAFQACAFACALIABADIgBABQAAABgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgEgBg");
	this.shape_1.setTransform(16,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CD383D").s().p("AhtDYQgHgQgEgOIAFAJIACABIgDgLIgBgCQgFgTABgIIAAgBIACgCIAAgEIgCgDQAMgTAugwQAXgaBLiCIgOAiQgNAgAcgwIABABIAAABIAEAFQAHAHAEAHIAFAJIABACIABAAIAAAAIgOBhQgEAMgIAfQgHAcgHAPQgbA/gKAPQgQAYgVAAQghAAgVgqgAjNC3QgogqAAgKQAAgKAIgnQAIgnAAgRQAAgagKgRIgFgIQAiAZANBDQAGAhAgAbQAJAIAJAFQgFAMgCAOIgBATIAAAVQAAALADAGIAAAHQgSgDgpgsgADFhbIgBAAQgRgRgOAHIgJAIIgJAHQgIAFgIAAIgHgBIAAgCIAAgDQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAAAAAIACgEIAGgIIAHgIQATgTALgGQAMgHAGAFIANAHIAFADQAGADAKAHQAIAGAGAHQAEADAEAGQAHAJgPAOIgIAGQgNgLgPgQgAB5hZQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIABgBQAAgBAGgBIgCAEIgBgBgABPhgIgBAAQgGAAgDgEQgGgKALgNQABgDAIgHIAEgEIADABQAFACABADIACAGQACAEAAAGQgBAMgIAFQgFACgFAAIgCAAgAByh1IAFgIQADgGAGgJQAUgbAOgIQAIgFAkAQIACABQAQAHAIAFQAKAGADADQAEAJgGANIgmgTIgLgFQgXgJgQAJQgEACgJAKQgKAKgGAEQgFACgEAAIgDgBgADSixQgLgFgGgCQgigMgMAGIgMANIgPAMIADgGIAEgIIADgIQABgEgCgHIgDgKIgBgLQAAgHADgNIADgPIACgCIABAAQADgCAGABQAGABACAEQABAEABASIgBAAIgGAEQgEADgBADQgBAEADAIQAFgFAEgCQAFgDARAFIAQAFIABAEQAAAAAAABQAAAAABAAQAAABAAAAQABAAABAAIAEABQAAAAAAAAQABAAAAAAQABAAAAgBQAAAAAAgBIABgBIAKAEIAGACIAUAKIAFACQABACgDAOIgBAGQgRgIgMgFgACCi7IANgVIgNAVgAB3ilIABAAIgBABgADRjfIgKgEIgFgBIAAAAIgCABIAAgBQgJgCgPACIgWACIAGgEIABAAIABgBQAYgOAPgDIALAAQAPAAAHANQAFAHADAPIAAAFIgZgPg");
	this.shape_2.setTransform(12.5,-4.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B82E31").s().p("AhNEPQgygbgxgmQiChjAAhJQAAgoAUgkQAXgoAhAAQAdAAAVAQIAFAIQAKATAAAaQAAAPgIAnQgIAnAAAKQAAAKAoAqQApAsASADIAAgHQgDgGAAgLIAAgVIABgTQACgOAFgMIANAIQgDADAAADQgCALAKAPIABADIACADQAEAOAHAQQAVAqAfAAQAVAAAQgYQAKgPAdg/QAHgPAHgcQAIgfAEgMIAOhhIAAAAIgBAAIgBgCIgFgJQgEgHgHgHIgEgFIAAgBIgBgBQgcAwANggIAOgiQAHgQAIgHIACgCQAGgcAjghQAPgOAEgfQACgJAHgQQAFgQAFgFIgDAPQgDANAAAHIABALIADAKQACAHgBAEIgDAIIgEAIIgDAGIgBAAIAAABQgLAZAAAGIAAACQADADABAAIAHADIgHgDQgBAAgDgDIAAgCQAAgGALgZIABgBIAPgMIAMgNQAMgGAiAMQAGACALAFQAMAFARAIQgCAJgFAEQgIgFgQgHIgCgBQgkgQgIAFQgOAIgUAbQgGAJgDAGIgFAIQAFACAHgDQAGgEAKgKQAJgKAEgCQAQgJAXAJIALAFIAmATIgKASQgGgHgIgGQgKgHgGgDIgFgDIgNgHQgGgFgMAHQgLAGgTATIgHAIQgPgCgCgFIgBgDIACgHIgCAHIABADQACAFAPACIgGAIQgGABAAABIgBABQgagEgMAHQgFAEgIALIgBAAQgHAKAAAEIgBACIARgLQAGgJAEgCQALgFAYADQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAgBIACgCIAHABQAIAAAIgFIAJgHIAJgIQAOgHARARIABAAQAPAQANALQgOAKgTAIIgBABQgYAMgaAOIgZAPIgCAAIgKAAIAAAAIgBAAQgZAAgIgKIgBgCIABACQAIAKAZAAIABAAIAAAAIAKAAIACAAIAAABQgXBWg/B+QhAB+geABIgBABQgfAAgtgZgAgXEBIgOABIAAABQABACAQAHQAQAGAEgNQAFgLAAgEQgFAIgXADgADGhtIACAAQAJgBAJgGIAKgFIAFgHIAJAIQAHAFAJABIABAAIACAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgKgLIAAABIgKgJQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIgEACIgBAFIADACIgFAHIgKAFQgJAGgJABIgCAAIAAAAIgBAAQgJAAgEgHIAAAAIgBgDIAAgBIAAABIABADIAAAAQAEAHAJAAIABAAIAAAAgABvh8IACAGIAAgBIAAgBQAGgLABgHQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgCgCQgGAMABAHgACPiJQAHABAFgDQAIgFABgMQAAgGgCgEIgCgGQgBgDgFgCIgDgBIgEAEQgIAHgBADQgLANAGAKQADAEAGAAIAAAAIABAAgAEZjvIgGgCIgKgEIAAgDQgCgLgCgFIgDgFIAFABIAKAEIAZAPIADAUIgUgKgADuj+QgRgFgFADQgEACgFAFQgDgIABgEQABgDAEgDIAWgCQAPgCAJACIAAABQgFABADASIgQgFg");
	this.shape_3.setTransform(6.1,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.6,-31.5,63.9,61.6);
p.frameBounds = [rect];


(lib.sat_hand2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sat_hand2_img();
	this.instance.setTransform(-25.1,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.1,-29.5,50,59);
p.frameBounds = [rect];


(lib.sat_hand1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sat_hand1_img();
	this.instance.setTransform(-18.9,-44.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18.9,-44.9,38,90);
p.frameBounds = [rect];


(lib.sat_eyes6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.sat_eyes6_1_img();
	this.instance.setTransform(-48.5,-10.8);

	this.instance_1 = new lib.sat_eyes6_2_img();
	this.instance_1.setTransform(-48.5,-10.8);

	this.instance_2 = new lib.sat_eyes1_3_img();
	this.instance_2.setTransform(-48.5,-10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},20).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.5,-10.8,99,23);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-48.5,-10.3,99,23), rect, rect=new cjs.Rectangle(-48.5,-10.8,99,23), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.sat_eyes4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.sat_eyes4_1_img();
	this.instance.setTransform(-48.2,-11.9);

	this.instance_1 = new lib.sat_eyes4_2_img();
	this.instance_1.setTransform(-48.2,-11.9);

	this.instance_2 = new lib.sat_eyes1_3_img();
	this.instance_2.setTransform(-49.2,-10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},20).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.2,-11.9,99,24);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-49.2,-10.4,99,23), rect, rect=new cjs.Rectangle(-48.2,-11.9,99,24), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.sat_eyes2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sat_eyes1_3_img();
	this.instance.setTransform(-48.5,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.5,-10.5,99,23);
p.frameBounds = [rect];


(lib.sat_eyes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.sat_eyes1_1_img();
	this.instance.setTransform(-48.5,-10.5);

	this.instance_1 = new lib.sat_eyes1_2_img();
	this.instance_1.setTransform(-48.5,-10.5);

	this.instance_2 = new lib.sat_eyes1_3_img();
	this.instance_2.setTransform(-48.5,-10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},20).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.5,-10.5,99,23);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.sat_eyebrows2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sat_eyebrows2_img();
	this.instance.setTransform(-44.2,-10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.2,-10.6,92,20);
p.frameBounds = [rect];


(lib.sat_eyebrows1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sat_eyebrows1_img();
	this.instance.setTransform(-47.3,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.3,-5.5,95,11);
p.frameBounds = [rect];


(lib.sat_body2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.sat_body2_img();
	this.instance.setTransform(-22.6,-105.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.6,-105.6,132,218);
p.frameBounds = [rect];


(lib.sat_body1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.sat_body1_img();
	this.instance.setTransform(-44.1,-106.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.1,-106.5,90,213);
p.frameBounds = [rect];


(lib.object_5_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj5HLIAAuWIHzAAIAAOWg");
	mask.setTransform(0,-25);

	// graph
	this.instance = new lib.object11_1_img();
	this.instance.setTransform(25,-75,1,1,90);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-71,50,92);
p.frameBounds = [rect];


(lib.object_4_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnzLuIAA3aIPnAAIAAXag");
	this.shape.setTransform(0,-25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-100,100,150);
p.frameBounds = [rect];


(lib.object_4_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvnH0IPnvnIPoAAIAAPng");
	this.shape.setTransform(-50,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-50,200,100);
p.frameBounds = [rect];


(lib.object_3_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnyD6IAAnzIPmAAIAAHzg");
	this.shape.setTransform(0,-75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-100,100,150);
p.frameBounds = [rect];


(lib.object_3_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AnzH0IPnvnIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// area
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.object_3_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvmHzIAAvmIfNAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-50,200,100);
p.frameBounds = [rect];


(lib.object_3_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnzLuIAA3aIPnAAIAAXag");
	this.shape.setTransform(0,-25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-100,100,150);
p.frameBounds = [rect];


(lib.object_3_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnzH0IPnvnIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.object_2_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnzLtIAA3ZIPmAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-75,100,150);
p.frameBounds = [rect];


(lib.object_2_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnzLtIAA3ZIPnAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-75,100,150);
p.frameBounds = [rect];


(lib.object_2_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArZDlIAAnKIWyAAIAAHKg");
	mask.setTransform(-52,-2);

	// graph
	this.instance = new lib.object9_2_img();
	this.instance.setTransform(-125,-25);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-25,146,46);
p.frameBounds = [rect];


(lib.object_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnzLuIAA3aIPnAAIAAXag");
	this.shape.setTransform(0,-25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-100,100,150);
p.frameBounds = [rect];


(lib.object_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnzH0IPnvnIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.object_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvnH0IPnvnIPoAAIAAPng");
	this.shape.setTransform(-50,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-50,200,100);
p.frameBounds = [rect];


(lib.object_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnzHzIAAvmIPnAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.object_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnzD6IAAnzIPmAAIAAHzg");
	this.shape.setTransform(0,-75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-100,100,150);
p.frameBounds = [rect];


(lib.object_1_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnzLtIAA3ZIPmAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-75,100,150);
p.frameBounds = [rect];


(lib.object_1_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj5KyIAA9WIHzHzIAAdWg");

	// graph
	this.instance = new lib.object10_1_img();
	this.instance.setTransform(-25,125,1,1,-90);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-119,50,238);
p.frameBounds = [rect];


(lib.object_1_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArYDlIAAnKIWyAAIAAHKg");
	mask.setTransform(52,-2);

	// graph
	this.instance = new lib.object9_2_img();
	this.instance.setTransform(-25,-25);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-25,146,46);
p.frameBounds = [rect];


(lib.object_1_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.object8_1_img();
	this.instance.setTransform(-65,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.object_1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnzH0IAAvnIABAAIPmPmIAAABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.object_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnzD6IAAnzIPmAAIAAHzg");
	this.shape.setTransform(0,-75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-100,100,150);
p.frameBounds = [rect];


(lib.object_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.object_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bH0IPpvnIfOAAIAAPng");
	this.shape.setTransform(-50,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-50,300,100);
p.frameBounds = [rect];


(lib.object_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.object_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnzLuIAA3aIPnAAIAAXag");
	this.shape.setTransform(0,-25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-100,100,150);
p.frameBounds = [rect];


(lib.object_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.number_level_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.number_level_1_img();
	this.instance.setTransform(-30,-30);

	this.instance_1 = new lib.number_level_2_img();
	this.instance_1.setTransform(-30,-30);

	this.instance_2 = new lib.number_level_3_img();
	this.instance_2.setTransform(-30,-30);

	this.instance_3 = new lib.number_level_4_img();
	this.instance_3.setTransform(-30,-30);

	this.instance_4 = new lib.number_level_5_img();
	this.instance_4.setTransform(-30,-30);

	this.instance_5 = new lib.number_level_6_img();
	this.instance_5.setTransform(-30,-30);

	this.instance_6 = new lib.number_level_7_img();
	this.instance_6.setTransform(-30,-30);

	this.instance_7 = new lib.number_level_8_img();
	this.instance_7.setTransform(-30,-30);

	this.instance_8 = new lib.number_level_9_img();
	this.instance_8.setTransform(-30,-30);

	this.instance_9 = new lib.number_level_10_img();
	this.instance_9.setTransform(-30,-30);

	this.instance_10 = new lib.number_level_11_img();
	this.instance_10.setTransform(-30,-30);

	this.instance_11 = new lib.number_level_12_img();
	this.instance_11.setTransform(-30,-30);

	this.instance_12 = new lib.number_level_13_img();
	this.instance_12.setTransform(-30,-30);

	this.instance_13 = new lib.number_level_14_img();
	this.instance_13.setTransform(-30,-30);

	this.instance_14 = new lib.number_level_15_img();
	this.instance_14.setTransform(-30,-30);

	this.instance_15 = new lib.number_level_16_img();
	this.instance_15.setTransform(-30,-30);

	this.instance_16 = new lib.number_level_17_img();
	this.instance_16.setTransform(-30,-30);

	this.instance_17 = new lib.number_level_18_img();
	this.instance_17.setTransform(-30,-30);

	this.instance_18 = new lib.number_level_19_img();
	this.instance_18.setTransform(-30,-30);

	this.instance_19 = new lib.number_level_20_img();
	this.instance_19.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.luch_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.luch_img();
	this.instance.setTransform(-263,-268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-263,-268.5,526,537);
p.frameBounds = [rect];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();
	this.instance.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,5,1200,200);
p.frameBounds = [rect];


(lib.leg2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.leg2_img();
	this.instance.setTransform(-19.5,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.5,-52,39,104);
p.frameBounds = [rect];


(lib.leg1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.leg1_img();
	this.instance.setTransform(-18.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18.5,-55.5,37,111);
p.frameBounds = [rect];


(lib.lava_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lava_img();
	this.instance.setTransform(-164,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-164,-58,328,116);
p.frameBounds = [rect];


(lib.heart_prize_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.heart_prize_img();
	this.instance.setTransform(-75,-62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-62.5,150,125);
p.frameBounds = [rect];


(lib.folded_finger_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.folded_finger_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.flash_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.flash_img();
	this.instance.setTransform(-222,-269);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222,-269,444,538);
p.frameBounds = [rect];


(lib.fire1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fire1_img();
	this.instance.setTransform(-19.7,-37.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.7,-37.8,39,76);
p.frameBounds = [rect];


(lib.drag_6_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.object6_2_img();
	this.instance.setTransform(-46,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.drag_6_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.object6_1_img();
	this.instance.setTransform(-47,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.drag_5_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.object6_2_img();
	this.instance.setTransform(-46,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.drag_5_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.object6_1_img();
	this.instance.setTransform(-47,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.drag_4_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.object6_1_img();
	this.instance.setTransform(-47,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.drag_4_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Au+HfIO+u+IO/AAIAAO+g");
	mask.setTransform(-50,-2);

	// graph
	this.instance = new lib.object7_1_img();
	this.instance.setTransform(-150,-50);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-146,-50,192,96);
p.frameBounds = [rect];


(lib.drag_4_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.object6_1_img();
	this.instance.setTransform(-47,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.drag_4_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.object5_1_img();
	this.instance.setTransform(-50,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.drag_3_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.object6_1_img();
	this.instance.setTransform(-47,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.drag_3_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.object9_11_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.drag_3_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Au/HfIAAu+Id/AAIAAO+g");
	mask.setTransform(0,-2);

	// graph
	this.instance = new lib.object7_3_img();
	this.instance.setTransform(-100,-51);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96,-50,192,96);
p.frameBounds = [rect];


(lib.drag_3_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.object6_2_img();
	this.instance.setTransform(-46,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.drag_3_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnKHLIOVuVIAAOVg");

	// graph
	this.instance = new lib.object5_4_img();
	this.instance.setTransform(-50,-50);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-46,92,92);
p.frameBounds = [rect];


(lib.drag_2_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.ladder_img();
	this.instance.setTransform(-25,-74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5LtIAA3ZIHzAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-75,50,150.5);
p.frameBounds = [rect];


(lib.drag_2_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.ladder_img();
	this.instance.setTransform(-25,-74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5LtIAA3ZIHzAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-75,50,150.5);
p.frameBounds = [rect];


(lib.drag_2_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnKHLIAAuVIOVOVg");

	// graph
	this.instance = new lib.object9_11_img();
	this.instance.setTransform(50,-50,1,1,0,0,180);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-46,92,92);
p.frameBounds = [rect];


(lib.drag_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.object6_2_img();
	this.instance.setTransform(-46,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.drag_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnKHLIOVuVIAAOVg");

	// graph
	this.instance = new lib.object5_2_img();
	this.instance.setTransform(-50,-50);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-46,92,92);
p.frameBounds = [rect];


(lib.drag_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Au+HfIO+u+IO/AAIAAO+g");
	mask.setTransform(-50,-2);

	// graph
	this.instance = new lib.object4_2_img();
	this.instance.setTransform(-150,-50);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-146,-50,192,96);
p.frameBounds = [rect];


(lib.drag_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnKHLIAAuVIOVOVg");

	// graph
	this.instance = new lib.object3_1_img();
	this.instance.setTransform(-50,-50);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-46,92,92);
p.frameBounds = [rect];


(lib.drag_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.object2_1_img();
	this.instance.setTransform(-50,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-75,100,129);
p.frameBounds = [rect];


(lib.drag_1_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.ladder_img();
	this.instance.setTransform(-25,-74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5LtIAA3ZIHzAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-75,50,150.5);
p.frameBounds = [rect];


(lib.drag_1_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.object9_11_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.drag_1_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnKHLIOVuVIAAOVg");

	// graph
	this.instance = new lib.object9_11_img();
	this.instance.setTransform(-50,-50);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-46,92,92);
p.frameBounds = [rect];


(lib.drag_1_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.object1_1_img();
	this.instance.setTransform(-45,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-51,105,101);
p.frameBounds = [rect];


(lib.drag_1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnLHMIAAuXIOXOXg");

	// graph
	this.instance = new lib.object7_2_img();
	this.instance.setTransform(-50,-50);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-46,92.1,92.1);
p.frameBounds = [rect];


(lib.drag_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.object6_2_img();
	this.instance.setTransform(-46,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.drag_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnfHfIAAu+IO+AAIAAO+g");
	mask.setTransform(-2,-2);

	// graph
	this.instance = new lib.object5_3_img();
	this.instance.setTransform(-50,-50);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,96,96);
p.frameBounds = [rect];


(lib.drag_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2zHfIPBu+IemAAIAAO+g");
	mask.setTransform(-50,-2);

	// graph
	this.instance = new lib.object4_1_img();
	this.instance.setTransform(-200,-50);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-196,-50,292,96);
p.frameBounds = [rect];


(lib.drag_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnKHLIOVuVIAAOVg");

	// graph
	this.instance = new lib.object3_2_img();
	this.instance.setTransform(-50,-50);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-46,92,92);
p.frameBounds = [rect];


(lib.drag_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.object2_1_img();
	this.instance.setTransform(-50,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-75,100,129);
p.frameBounds = [rect];


(lib.drag_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnKHfIAAu+IOVAAIAAO+g");
	mask.setTransform(0,-2);

	// graph
	this.instance = new lib.object1_1_img();
	this.instance.setTransform(-50,-50);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-50,92,96);
p.frameBounds = [rect];


(lib.cloud_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.cloud_4_img();
	this.instance.setTransform(-90,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-55,180,110);
p.frameBounds = [rect];


(lib.cloud_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.cloud_3_img();
	this.instance.setTransform(-90,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-60,180,120);
p.frameBounds = [rect];


(lib.cloud_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.cloud_2_img();
	this.instance.setTransform(-90,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-50,180,100);
p.frameBounds = [rect];


(lib.cloud_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.cloud_1_img();
	this.instance.setTransform(-90,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-40,180,80);
p.frameBounds = [rect];


(lib.bomb_explosion_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bomb_explosion_4_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.body_water_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.water_img();
	this.instance.setTransform(-199,-68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-68.5,398,137);
p.frameBounds = [rect];


(lib.body_title_level_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// graph
	this.instance = new lib.title_level_en_img();
	this.instance.setTransform(-90,-30);

	this.instance_1 = new lib.title_level_ru_img();
	this.instance_1.setTransform(-90,-30);

	this.instance_2 = new lib.title_level_de_img();
	this.instance_2.setTransform(-90,-30);

	this.instance_3 = new lib.title_level_fr_img();
	this.instance_3.setTransform(-90,-30);

	this.instance_4 = new lib.title_level_it_img();
	this.instance_4.setTransform(-90,-30);

	this.instance_5 = new lib.title_level_es_img();
	this.instance_5.setTransform(-90,-30);

	this.instance_6 = new lib.title_level_pt_img();
	this.instance_6.setTransform(-90,-30);

	this.instance_7 = new lib.title_level_tr_img();
	this.instance_7.setTransform(-90,-30);

	this.instance_8 = new lib.title_ja_img();
	this.instance_8.setTransform(-90,-30);

	this.instance_9 = new lib.title_level_hi_img();
	this.instance_9.setTransform(-90,-30);

	this.instance_10 = new lib.title_ar_img();
	this.instance_10.setTransform(-90,-30);

	this.instance_11 = new lib.title_level_id_img();
	this.instance_11.setTransform(-90,-30);

	this.instance_12 = new lib.title_level_zh_img();
	this.instance_12.setTransform(-90,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-30,180,60);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-90,-30,320,280), new cjs.Rectangle(-90,-30,180,60), new cjs.Rectangle(-90,-30,320,280), rect=new cjs.Rectangle(-90,-30,180,60), rect];


(lib.body_starry_sky_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.starry_sky_img();
	this.instance.setTransform(-600,-450);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-450,1200,900);
p.frameBounds = [rect];


(lib.body_moon_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.moon_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.body_congratulations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.congratulations_en_img();
	this.instance.setTransform(-380,-80);

	this.instance_1 = new lib.congratulations_ru_img();
	this.instance_1.setTransform(-380,-80);

	this.instance_2 = new lib.congratulations_de_img();
	this.instance_2.setTransform(-380,-80);

	this.instance_3 = new lib.congratulations_fr_img();
	this.instance_3.setTransform(-380,-80);

	this.instance_4 = new lib.congratulations_it_img();
	this.instance_4.setTransform(-380,-103);

	this.instance_5 = new lib.congratulations_es_img();
	this.instance_5.setTransform(-380,-80);

	this.instance_6 = new lib.congratulations_pt_img();
	this.instance_6.setTransform(-380,-80);

	this.instance_7 = new lib.congratulations_tr_img();
	this.instance_7.setTransform(-380,-80);

	this.instance_8 = new lib.congratulations_ja_img();
	this.instance_8.setTransform(-380,-80);

	this.instance_9 = new lib.congratulations_hi_img();
	this.instance_9.setTransform(-380,-80);

	this.instance_10 = new lib.congratulations_ar_img();
	this.instance_10.setTransform(-380,-80);

	this.instance_11 = new lib.congratulations_id_img();
	this.instance_11.setTransform(-380,-80);

	this.instance_12 = new lib.congratulations_zh_img();
	this.instance_12.setTransform(-380,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-80,760,160);
p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(-380,-103,760,160), rect=new cjs.Rectangle(-380,-80,760,160), rect, rect, rect, rect, rect, rect, rect];


(lib.body_bengali_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.bengali_1_img();
	this.instance.setTransform(-100,-100);

	this.instance_1 = new lib.bengali_2_img();
	this.instance_1.setTransform(-100,-100);

	this.instance_2 = new lib.bengali_3_img();
	this.instance_2.setTransform(-100,-100);

	this.instance_3 = new lib.bengali_4_img();
	this.instance_3.setTransform(-100,-100);

	this.instance_4 = new lib.bengali_5_img();
	this.instance_4.setTransform(-100,-100);

	this.instance_5 = new lib.bengali_6_img();
	this.instance_5.setTransform(-100,-100);

	this.instance_6 = new lib.bengali_7_img();
	this.instance_6.setTransform(-100,-100);

	this.instance_7 = new lib.bengali_8_img();
	this.instance_7.setTransform(-100,-100);

	this.instance_8 = new lib.bengali_9_img();
	this.instance_8.setTransform(-100,-100);

	this.instance_9 = new lib.bengali_10_img();
	this.instance_9.setTransform(-100,-100);

	this.instance_10 = new lib.bengali_11_img();
	this.instance_10.setTransform(-100,-100);

	this.instance_11 = new lib.bengali_12_img();
	this.instance_11.setTransform(-100,-100);

	this.instance_12 = new lib.bengali_13_img();
	this.instance_12.setTransform(-100,-100);

	this.instance_13 = new lib.bengali_14_img();
	this.instance_13.setTransform(-100,-100);

	this.instance_14 = new lib.bengali_15_img();
	this.instance_14.setTransform(-100,-100);

	this.instance_15 = new lib.bengali_16_img();
	this.instance_15.setTransform(-100,-100);

	this.instance_16 = new lib.bengali_17_img();
	this.instance_16.setTransform(-100,-100);

	this.instance_17 = new lib.bengali_18_img();
	this.instance_17.setTransform(-100,-100);

	this.instance_18 = new lib.bengali_19_img();
	this.instance_18.setTransform(-100,-100);

	this.instance_19 = new lib.bengali_20_img();
	this.instance_19.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_10}]},3).to({state:[{t:this.instance_11}]},3).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_19}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.background_с1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.background_с1_3_img();
	this.instance.setTransform(-292.5,-84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-292.5,-84,585,168);
p.frameBounds = [rect];


(lib.background_с1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.background_с1_2_img();
	this.instance.setTransform(-307.5,-84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-307.5,-84,615,168);
p.frameBounds = [rect];


(lib.background_с1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.background_с1_1_img();
	this.instance.setTransform(-600,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-87,1200,174);
p.frameBounds = [rect];


(lib.aw2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.aw2_img();
	this.instance.setTransform(-39.2,-29.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.2,-29.2,78,58);
p.frameBounds = [rect];


(lib.aw1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.aw1_img();
	this.instance.setTransform(-39.2,-29.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.2,-29.2,78,58);
p.frameBounds = [rect];


(lib.angel_rouge2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.angel_rouge2_img();
	this.instance.setTransform(-46.2,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.2,-15.5,96,34);
p.frameBounds = [rect];


(lib.angel_rouge1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.angel_rouge1_img();
	this.instance.setTransform(-46.2,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.2,-15.5,96,34);
p.frameBounds = [rect];


(lib.angel_mouth1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.angel_mouth1_img();
	this.instance.setTransform(-11.5,-4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.5,-4.3,23,9);
p.frameBounds = [rect];


(lib.angel_head1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.angel_head1_img();
	this.instance.setTransform(-68.5,-78.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.5,-78.4,137,157);
p.frameBounds = [rect];


(lib.angel_hand4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.angel_hand4_img();
	this.instance.setTransform(-14,-36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14,-36.5,28,73);
p.frameBounds = [rect];


(lib.angel_hand3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.angel_hand3_img();
	this.instance.setTransform(-14,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14,-25,28,50);
p.frameBounds = [rect];


(lib.angel_hand1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.angel_hand1_img();
	this.instance.setTransform(-24.6,-25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24.6,-25.9,49,52);
p.frameBounds = [rect];


(lib.angel_hair_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.angel_hair_img();
	this.instance.setTransform(-118.9,-115.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.9,-115.6,239,210);
p.frameBounds = [rect];


(lib.angel_eyes9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.angel_eyes2_1_img();
	this.instance.setTransform(-50,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-15,103,31);
p.frameBounds = [rect];


(lib.angel_eyes3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.angel_eyes1_3_img();
	this.instance.setTransform(-50.5,-15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.5,-15.4,103,32);
p.frameBounds = [rect];


(lib.angel_eyes2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.angel_eyes2_1_img();
	this.instance.setTransform(-50.4,-15.8);

	this.instance_1 = new lib.angel_eyes2_2_img();
	this.instance_1.setTransform(-50.4,-15.8);

	this.instance_2 = new lib.angel_eyes2_3_img();
	this.instance_2.setTransform(-50.4,-15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},16).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.4,-15.8,103,31);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.angel_eyes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.angel_eyes1_1_img();
	this.instance.setTransform(-50.5,-15.4);

	this.instance_1 = new lib.angel_eyes1_2_img();
	this.instance_1.setTransform(-50.5,-15.4);

	this.instance_2 = new lib.angel_eyes1_3_img();
	this.instance_2.setTransform(-50.5,-15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},16).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.5,-15.4,103,32);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.angel_eyebrows1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.angel_eyebrows1_img();
	this.instance.setTransform(-41.5,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.5,-6.5,83,13);
p.frameBounds = [rect];


(lib.angel_body3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.angel_body3_img();
	this.instance.setTransform(-32,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-89,64,178);
p.frameBounds = [rect];


(lib.angel_body2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.angel_body2_img();
	this.instance.setTransform(-50,-109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-109,92,183);
p.frameBounds = [rect];


(lib.angel_body1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.angel_body1_img();
	this.instance.setTransform(-55.5,-108.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.5,-108.5,111,217);
p.frameBounds = [rect];


(lib.curtain_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_1_img();
	this.instance.setTransform(-205,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-5,1210,110);
p.frameBounds = [rect];


(lib.ParticleGravityExplosionMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.spark_bomb_1_img();
	this.instance.setTransform(-8,-8,0.8,0.8);

	this.instance_1 = new lib.spark_bomb_2_img();
	this.instance_1.setTransform(-8,-8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8,-8,16,16);
p.frameBounds = [rect, rect];


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


(lib.bubble_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// viewer
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
	this.shape.setTransform(600,275,1,0.917);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,550);
p.frameBounds = [rect];


(lib.bubble_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// viewer
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A3bXbMAAAgu2MAu2AAAMAAAAu2g");
	this.shape.setTransform(150,150);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,300,300);
p.frameBounds = [rect];


(lib.blinking_light_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_1_img();
	this.instance.setTransform(-75,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-63,150,125);
p.frameBounds = [rect];


(lib.blinking_light_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_1_3_img();
	this.instance.setTransform(-16,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16,-16,32,32);
p.frameBounds = [rect];


(lib.blinking_light_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_1_2_img();
	this.instance.setTransform(-24,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
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


(lib.done_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.done_1_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
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

	// title
	this.instance = new lib.title_redirect_mc();
	this.instance.setTransform(0,400);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({y:185,alpha:1},10).wait(40).to({alpha:0.602},5).to({alpha:1},5).to({alpha:0.602},5).to({alpha:1},5).wait(110).to({y:400,alpha:0.012},10).wait(1));

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
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,690);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-210,420,668.5), new cjs.Rectangle(-210,-210,420,647), new cjs.Rectangle(-210,-210,420,625.5), new cjs.Rectangle(-210,-210,420,604), new cjs.Rectangle(-210,-210,420,582.5), new cjs.Rectangle(-210,-210,420,561), new cjs.Rectangle(-210,-210,420,539.5), new cjs.Rectangle(-210,-210,420,518), new cjs.Rectangle(-210,-210,420,496.5), rect=new cjs.Rectangle(-210,-210,420,480.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-210,420,496.5), new cjs.Rectangle(-210,-210,420,518), new cjs.Rectangle(-210,-210,420,539.5), new cjs.Rectangle(-210,-210,420,561), new cjs.Rectangle(-210,-210,420,582.5), new cjs.Rectangle(-210,-210,420,604), new cjs.Rectangle(-210,-210,420,625.5), new cjs.Rectangle(-210,-210,420,647), new cjs.Rectangle(-210,-210,420,668.5), new cjs.Rectangle(-210,-210,420,690)];


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


(lib.water_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_water_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},29).to({alpha:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-68.5,398,137);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.title_level_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_title_level_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-30,180,60);
p.frameBounds = [rect];


(lib.substrate_level_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.substrate_level_1_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-25,260,50);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.starry_sky_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body_starry_sky_mc();
	this.instance.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-450,1200,900);
p.frameBounds = [rect];


(lib.sat_h6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sat_eyes1
	this.instance = new lib.sat_eyes6_mc();
	this.instance.setTransform(-14.8,35.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// sat_eyebrows1
	this.instance_1 = new lib.sat_eyebrows1_mc();
	this.instance_1.setTransform(-17.4,15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// sat_mouth1
	this.instance_2 = new lib.sat_mouth1_mc();
	this.instance_2.setTransform(-17.2,62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 6
	this.instance_3 = new lib.sat_rouge1_mc();
	this.instance_3.setTransform(-14.1,56.4,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// sat_head1
	this.instance_4 = new lib.sat_head1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.6,-75.8,181,152);
p.frameBounds = [rect];


(lib.sat_h5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sat_eyes1
	this.instance = new lib.sat_eyes2_mc();
	this.instance.setTransform(-14.8,35.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// sat_eyebrows1
	this.instance_1 = new lib.sat_eyebrows2_mc();
	this.instance_1.setTransform(-17.4,15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// sat_mouth1
	this.instance_2 = new lib.sat_mouth2_img();
	this.instance_2.setTransform(-18.2,59.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// sat_head1
	this.instance_3 = new lib.sat_head1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.6,-75.8,181,152);
p.frameBounds = [rect];


(lib.sat_h4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sat_eyes4_mc();
	this.instance.setTransform(-14.8,35.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.sat_eyebrows1_mc();
	this.instance_1.setTransform(-17.4,15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.sat_mouth1_mc();
	this.instance_2.setTransform(-17.2,62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.sat_rouge1_mc();
	this.instance_3.setTransform(-14.1,56.4,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.sat_head1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.6,-75.8,181,152);
p.frameBounds = [rect];


(lib.sat_h3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sat_eyes2_mc();
	this.instance.setTransform(-14.8,35.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.sat_eyebrows1_mc();
	this.instance_1.setTransform(-17.4,15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.sat_mouth1_mc();
	this.instance_2.setTransform(-17.2,62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.sat_rouge1_mc();
	this.instance_3.setTransform(-14.1,56.4,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.sat_head1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.6,-75.8,181,152);
p.frameBounds = [rect];


(lib.sat_h1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sat_eyes1
	this.instance = new lib.sat_eyes1_mc();
	this.instance.setTransform(-14.8,35.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// sat_eyebrows1
	this.instance_1 = new lib.sat_eyebrows1_mc();
	this.instance_1.setTransform(-17.4,15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// sat_mouth1
	this.instance_2 = new lib.sat_mouth1_mc();
	this.instance_2.setTransform(-17.2,62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// sat_head1
	this.instance_3 = new lib.sat_head1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.6,-75.8,181,152);
p.frameBounds = [rect];


(lib.objects_location_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// objects
	this.drag_2 = new lib.drag_2_9_mc();
	this.drag_2.setTransform(130,500);

	this.object_3 = new lib.object_3_9_mc();
	this.object_3.setTransform(200,200);

	this.object_2 = new lib.object_2_9_mc();
	this.object_2.setTransform(375,175);

	this.drag_1 = new lib.drag_1_9_mc();
	this.drag_1.setTransform(250,500);

	this.object_1 = new lib.object_1_9_mc();
	this.object_1.setTransform(125,275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1},{t:this.drag_1},{t:this.object_2},{t:this.object_3},{t:this.drag_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,150,320,400);
p.frameBounds = [rect];


(lib.objects_location_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// objects
	this.drag_6 = new lib.drag_6_6_mc();
	this.drag_6.setTransform(560,540);

	this.drag_5 = new lib.drag_5_6_mc();
	this.drag_5.setTransform(340,540);

	this.drag_4 = new lib.drag_4_6_mc();
	this.drag_4.setTransform(120,540);

	this.drag_3 = new lib.drag_3_6_mc();
	this.drag_3.setTransform(670,540);

	this.drag_2 = new lib.drag_2_6_mc();
	this.drag_2.setTransform(450,540);

	this.object_3 = new lib.object_3_6_mc();
	this.object_3.setTransform(500,350);

	this.object_2 = new lib.object_2_6_mc();
	this.object_2.setTransform(400,350);

	this.drag_1 = new lib.drag_1_6_mc();
	this.drag_1.setTransform(230,540);

	this.object_1 = new lib.object_1_6_mc();
	this.object_1.setTransform(300,350);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1},{t:this.drag_1},{t:this.object_2},{t:this.object_3},{t:this.drag_2},{t:this.drag_3},{t:this.drag_4},{t:this.drag_5},{t:this.drag_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(70,250,650,340);
p.frameBounds = [rect];


(lib.objects_location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// objects
	this.object_2 = new lib.object_2_4_mc();
	this.object_2.setTransform(500,250);

	this.drag_2 = new lib.drag_2_4_mc();
	this.drag_2.setTransform(230,500);

	this.drag_1 = new lib.drag_1_4_mc();
	this.drag_1.setTransform(500,500);

	this.object_1 = new lib.object_1_4_mc();
	this.object_1.setTransform(450,350);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1},{t:this.drag_1},{t:this.drag_2},{t:this.object_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,200,520,350);
p.frameBounds = [rect];


(lib.objects_location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// objects
	this.object_2 = new lib.object_2_3_mc();
	this.object_2.setTransform(500,300);

	this.drag_2 = new lib.drag_2_3_mc();
	this.drag_2.setTransform(125,500);

	this.drag_1 = new lib.drag_1_3_mc();
	this.drag_1.setTransform(240,500);

	this.object_1 = new lib.object_1_3_mc();
	this.object_1.setTransform(300,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1},{t:this.drag_1},{t:this.drag_2},{t:this.object_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(75,250,475,300);
p.frameBounds = [rect];


(lib.objects_location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// objects
	this.drag_2 = new lib.drag_2_2_mc();
	this.drag_2.setTransform(235,515);

	this.object_2 = new lib.object_2_2_mc();
	this.object_2.setTransform(450,350);

	this.drag_1 = new lib.drag_1_2_mc();
	this.drag_1.setTransform(125,515);

	this.object_1 = new lib.object_1_2_mc();
	this.object_1.setTransform(350,350);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1},{t:this.drag_1},{t:this.object_2},{t:this.drag_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(75,250,425,319);
p.frameBounds = [rect];


(lib.objects_location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// objects
	this.drag_1 = new lib.drag_1_1_mc();
	this.drag_1.setTransform(125,500);

	this.object_1 = new lib.object_1_1_mc();
	this.object_1.setTransform(400,350);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1},{t:this.drag_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(75,300,375,251);
p.frameBounds = [rect];


(lib.moon_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body_moon_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.level_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_level_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// number
	this.number_mc = new lib.number_level_mc();
	this.number_mc.setTransform(120,0);

	this.timeline.addTween(cjs.Tween.get(this.number_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_level_mc();
	this.substrate_mc.setTransform(10,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-30,270,60);
p.frameBounds = [rect];


(lib.heroes_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sat_eyes1_mc();
	this.instance.setTransform(-2.9,-142.5,1.251,1.251,-7.2,0,0,1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.angel_eyes1_mc();
	this.instance_1.setTransform(-72.1,-28.5,1.098,1.098,7.5,0,0,1.1,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.heroes_main_img();
	this.instance_2.setTransform(-335,-298.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-335,-298.5,670,597);
p.frameBounds = [rect];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// heroes
	this.instance = new lib.heroes_main_mc();
	this.instance.setTransform(540,310);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(205,11.5,670,597);
p.frameBounds = [rect];


(lib.help_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.straightened_finger_mc();
	this.instance.setTransform(400,500);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.instance_1 = new lib.folded_finger_mc();
	this.instance_1.setTransform(170,540);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({alpha:1},5).wait(5).to({x:170,y:540},10).to({_off:true},1).wait(20).to({_off:false,x:430,y:400},0).wait(9).to({alpha:0.012},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35).to({_off:false},0).to({x:430,y:400},19).to({_off:true},1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(350,450,100,100), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(327,454,100,100), new cjs.Rectangle(304,458,100,100), new cjs.Rectangle(281,462,100,100), new cjs.Rectangle(258,466,100,100), new cjs.Rectangle(235,470,100,100), new cjs.Rectangle(212,474,100,100), new cjs.Rectangle(189,478,100,100), new cjs.Rectangle(166,482,100,100), new cjs.Rectangle(143,486,100,100), rect=new cjs.Rectangle(120,490,100,100), rect, new cjs.Rectangle(133.7,482.7,100,100), new cjs.Rectangle(147.4,475.3,100,100), new cjs.Rectangle(161.1,467.9,100,100), new cjs.Rectangle(174.8,460.6,100,100), new cjs.Rectangle(188.4,453.2,100,100), new cjs.Rectangle(202.1,445.8,100,100), new cjs.Rectangle(215.8,438.4,100,100), new cjs.Rectangle(229.5,431.1,100,100), new cjs.Rectangle(243.2,423.7,100,100), new cjs.Rectangle(256.9,416.3,100,100), new cjs.Rectangle(270.6,409,100,100), new cjs.Rectangle(284.2,401.6,100,100), new cjs.Rectangle(297.9,394.2,100,100), new cjs.Rectangle(311.6,386.9,100,100), new cjs.Rectangle(325.3,379.5,100,100), new cjs.Rectangle(339,372.1,100,100), new cjs.Rectangle(352.7,364.8,100,100), new cjs.Rectangle(366.3,357.4,100,100), rect=new cjs.Rectangle(380,350,100,100), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.ground_location_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.substrate_for_objects_1_mc();
	this.instance.setTransform(400,500);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.ground_8_img();
	this.instance_1.setTransform(-200,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.cloud_1_mc();
	this.instance_2.setTransform(340,40);
	this.instance_2.alpha = 0.602;

	this.instance_3 = new lib.moon_mc();
	this.instance_3.setTransform(480,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// graph
	this.instance_4 = new lib.background_2_img();
	this.instance_4.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-20,1200,621);
p.frameBounds = [rect];


(lib.ground_location_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.substrate_for_objects_1_mc();
	this.instance.setTransform(400,500);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.ground_7_img();
	this.instance_1.setTransform(-200,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.cloud_4_mc();
	this.instance_2.setTransform(575.1,30.1,0.556,0.555,0,0,0,0.2,0.1);
	this.instance_2.alpha = 0.602;

	this.instance_3 = new lib.cloud_1_mc();
	this.instance_3.setTransform(375,80.1,0.889,0.888,0,0,0,0,0.1);
	this.instance_3.alpha = 0.602;

	this.instance_4 = new lib.moon_mc();
	this.instance_4.setTransform(480,50,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// graph
	this.instance_5 = new lib.background_2_img();
	this.instance_5.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-0.5,1200,600.5);
p.frameBounds = [rect];


(lib.ground_location_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.substrate_for_objects_1_mc();
	this.instance.setTransform(400,500);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.ground_6_img();
	this.instance_1.setTransform(-200,299);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.cloud_4_mc();
	this.instance_2.setTransform(205,40.1,0.667,0.666,0,0,0,0,0.1);
	this.instance_2.alpha = 0.602;

	this.instance_3 = new lib.cloud_1_mc();
	this.instance_3.setTransform(460,45);
	this.instance_3.alpha = 0.602;

	this.instance_4 = new lib.moon_mc();
	this.instance_4.setTransform(320,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// water
	this.instance_5 = new lib.water_mc();
	this.instance_5.setTransform(400,380);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// graph
	this.instance_6 = new lib.background_2_img();
	this.instance_6.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.ground_location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.substrate_for_objects_1_mc();
	this.instance.setTransform(400,500);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.ground_5_img();
	this.instance_1.setTransform(-200,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.starry_sky_mc();
	this.instance_2.setTransform(400,0,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// decor
	this.instance_3 = new lib.cloud_2_mc();
	this.instance_3.setTransform(90,120);
	this.instance_3.alpha = 0.602;

	this.instance_4 = new lib.cloud_1_mc();
	this.instance_4.setTransform(210,85);
	this.instance_4.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// graph
	this.instance_5 = new lib.background_2_img();
	this.instance_5.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-450,1200,1050);
p.frameBounds = [rect];


(lib.ground_location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.substrate_for_objects_1_mc();
	this.instance.setTransform(400,500);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.ground_4_img();
	this.instance_1.setTransform(-200,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.starry_sky_mc();
	this.instance_2.setTransform(400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// decor
	this.instance_3 = new lib.cloud_3_mc();
	this.instance_3.setTransform(310,40,0.667,0.667);
	this.instance_3.alpha = 0.602;

	this.instance_4 = new lib.cloud_4_mc();
	this.instance_4.setTransform(115,100);
	this.instance_4.alpha = 0.602;

	this.instance_5 = new lib.moon_mc();
	this.instance_5.setTransform(200,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// graph
	this.instance_6 = new lib.background_2_img();
	this.instance_6.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-450,1200,1050);
p.frameBounds = [rect];


(lib.ground_location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.substrate_for_objects_1_mc();
	this.instance.setTransform(400,500);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.ground_3_img();
	this.instance_1.setTransform(-200,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.cloud_2_mc();
	this.instance_2.setTransform(340,30);
	this.instance_2.alpha = 0.602;

	this.instance_3 = new lib.cloud_4_mc();
	this.instance_3.setTransform(560,90.1,0.667,0.666,0,0,0,0,0.1);
	this.instance_3.alpha = 0.602;

	this.instance_4 = new lib.moon_mc();
	this.instance_4.setTransform(480,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// graph
	this.instance_5 = new lib.background_2_img();
	this.instance_5.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-20,1200,620);
p.frameBounds = [rect];


(lib.ground_location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.substrate_for_objects_1_mc();
	this.instance.setTransform(400,500);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.ground_2_img();
	this.instance_1.setTransform(-200,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.cloud_3_mc();
	this.instance_2.setTransform(215.1,35.1,0.667,0.666,0,0,0,0.1,0.1);
	this.instance_2.alpha = 0.602;

	this.instance_3 = new lib.cloud_2_mc();
	this.instance_3.setTransform(410,80);
	this.instance_3.alpha = 0.602;

	this.instance_4 = new lib.moon_mc();
	this.instance_4.setTransform(320,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// graph
	this.instance_5 = new lib.background_2_img();
	this.instance_5.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-4.9,1200,606);
p.frameBounds = [rect];


(lib.ground_location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.substrate_for_objects_1_mc();
	this.instance.setTransform(400,500);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.ground_1_img();
	this.instance_1.setTransform(-200,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.cloud_3_mc();
	this.instance_2.setTransform(440,6);
	this.instance_2.alpha = 0.602;

	this.instance_3 = new lib.cloud_1_mc();
	this.instance_3.setTransform(230,40);
	this.instance_3.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// graph
	this.instance_4 = new lib.background_2_img();
	this.instance_4.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-54,1200,655);
p.frameBounds = [rect];


(lib.congratulations_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_congratulations_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-80,760,160);
p.frameBounds = [rect];


(lib.bomb_explosion_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// graph
	this.instance = new lib.bomb_explosion_1_img();
	this.instance.setTransform(-75,-75);

	this.instance_1 = new lib.bomb_explosion_2_img();
	this.instance_1.setTransform(-75,-75);

	this.instance_2 = new lib.bomb_explosion_3_img();
	this.instance_2.setTransform(-75,-75);

	this.instance_3 = new lib.bomb_explosion_1_mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},3).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({scaleX:1.33,scaleY:1.33,alpha:0.012},3).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-83.3,-83.3,166.6,166.6), new cjs.Rectangle(-91.6,-91.6,183.4,183.4), new cjs.Rectangle(-100,-100,200,200), null];


(lib.bengali_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_bengali_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.ast_wing1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sw1_mc();
	this.instance.setTransform(-49.6,-11.8,1,1,0,0,0,-49.6,-11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-21.7},9).to({rotation:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.4,-25.8,101,52);
p.frameBounds = [rect, new cjs.Rectangle(-50.9,-29.8,103,56), new cjs.Rectangle(-51.6,-34.1,104.9,60.2), new cjs.Rectangle(-52.1,-37.9,106.6,64), new cjs.Rectangle(-52.7,-42.2,108.2,68), new cjs.Rectangle(-53.2,-46.4,109.6,71.9), new cjs.Rectangle(-53.8,-50,110.7,75.3), new cjs.Rectangle(-54.4,-54,111.6,78.9), new cjs.Rectangle(-54.9,-58,112.4,82.4), new cjs.Rectangle(-55.5,-61.8,113.1,85.7), new cjs.Rectangle(-55,-58.5,112.5,82.7), new cjs.Rectangle(-54.5,-54.9,111.8,79.6), new cjs.Rectangle(-54,-51.3,111,76.4), new cjs.Rectangle(-53.5,-48,110.1,73.4), new cjs.Rectangle(-53,-44.3,108.9,69.9), new cjs.Rectangle(-52.5,-40.5,107.6,66.4), new cjs.Rectangle(-52,-37,106.2,63.1), new cjs.Rectangle(-51.4,-33.2,104.6,59.4), new cjs.Rectangle(-50.9,-29.3,102.8,55.6), new cjs.Rectangle(-50.4,-25.8,101,52)];


(lib.animation_congratulations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_110 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(110).call(this.frame_110).wait(1));

	// title
	this.instance = new lib.congratulations_mc();
	this.instance.setTransform(0.5,60.5,1,1,0,0,0,0.5,0.5);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({regX:0.6,scaleX:0.66,scaleY:0.66,x:0.4,y:-399.6},0).to({scaleX:1,scaleY:1,x:0.6,y:100.5,alpha:1},15).to({regX:0.5,x:0.5,y:60.5},5).wait(70).to({regY:0.6,scaleX:0.53,scaleY:0.53,x:0.3,y:400.3,alpha:0.012},10).to({_off:true},1).wait(1));

	// shadow
	this.instance_1 = new lib.shadow_congratulations_mc();
	this.instance_1.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(99).to({alpha:0.012},10).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-610,-310,1220,620);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-610,-452.6,1220,762.6), new cjs.Rectangle(-610,-421.1,1220,731.1), new cjs.Rectangle(-610,-389.5,1220,699.6), new cjs.Rectangle(-610,-358,1220,668.1), new cjs.Rectangle(-610,-326.6,1220,636.6), rect=new cjs.Rectangle(-610,-310,1220,620), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-610,-310,1220,631.2), new cjs.Rectangle(-610,-310,1220,661.5), new cjs.Rectangle(-610,-310,1220,691.7), new cjs.Rectangle(-610,-310,1220,721.9), new cjs.Rectangle(-610,-310,1220,752.1), null];


(lib.angel_wind3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		/* this.stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Слой 4
	this.instance = new lib.fire1_mc();
	this.instance.setTransform(1,-8.4,1,1,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-9.5,x:-28.3,y:-5,alpha:0.012},28).to({_off:true},1).wait(1));

	// Слой 2
	this.instance_1 = new lib.aw1_mc();
	this.instance_1.setTransform(34.5,18,1,1,0,0,0,34.5,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.012},28).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_2 = new lib.aw2_mc();
	this.instance_2.setTransform(34.5,18,1,1,0,0,0,34.5,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.2,-49.9,78,83.5);
p.frameBounds = [rect, new cjs.Rectangle(-39.2,-49.7,78,83.4), new cjs.Rectangle(-39.2,-49.5,78,83.3), new cjs.Rectangle(-39.2,-49.4,78,83.3), new cjs.Rectangle(-39.2,-49.2,78,83.1), new cjs.Rectangle(-39.2,-49.1,78,83.2), new cjs.Rectangle(-39.2,-48.9,78,83.1), new cjs.Rectangle(-39.2,-48.8,78,82.9), new cjs.Rectangle(-39.2,-48.6,78,82.9), rect=new cjs.Rectangle(-39.2,-48.4,78,82.8), rect, new cjs.Rectangle(-39.2,-48.2,78,82.7), new cjs.Rectangle(-39.2,-47.9,78,82.6), new cjs.Rectangle(-39.8,-47.8,78.7,82.5), new cjs.Rectangle(-40.8,-47.7,79.6,82.4), new cjs.Rectangle(-41.8,-47.5,80.6,82.4), new cjs.Rectangle(-42.7,-47.4,81.5,82.3), new cjs.Rectangle(-43.6,-47.2,82.4,82.2), new cjs.Rectangle(-44.5,-47.1,83.4,82.2), new cjs.Rectangle(-45.5,-47,84.4,82.1), new cjs.Rectangle(-46.4,-46.8,85.3,82), new cjs.Rectangle(-47.4,-46.6,86.2,81.9), new cjs.Rectangle(-48.3,-46.4,87.1,81.8), new cjs.Rectangle(-49.1,-46.2,87.9,81.8), new cjs.Rectangle(-50.2,-46.1,89,81.7), new cjs.Rectangle(-51.1,-45.9,89.9,81.6), new cjs.Rectangle(-52,-45.8,90.8,81.5), new cjs.Rectangle(-52.9,-45.5,91.7,81.4), new cjs.Rectangle(-54,-45.5,92.9,81.4), new cjs.Rectangle(-39.2,-29.2,78,58)];


(lib.angel_wind2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.aw2_mc();
	this.instance.setTransform(34.6,18,1,1,-60,0,0,34.6,18);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:34.5,regY:18.1,rotation:-69.5,y:18.2},9).to({regX:34.6,regY:18,rotation:-60,y:18},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.2,-9.3,89.3,96.6);
p.frameBounds = [rect, new cjs.Rectangle(-42.3,-8.5,88.4,96.2), new cjs.Rectangle(-41.5,-7.8,87.6,96), new cjs.Rectangle(-40.7,-7.1,86.9,95.6), new cjs.Rectangle(-39.9,-6.3,86.1,95.4), new cjs.Rectangle(-38.9,-5.5,85.1,95), new cjs.Rectangle(-38.1,-4.8,84.3,94.6), new cjs.Rectangle(-37.2,-4,83.4,94.2), new cjs.Rectangle(-36.3,-3.2,82.5,93.7), new cjs.Rectangle(-35.6,-2.5,81.7,93.4), new cjs.Rectangle(-36.2,-3,82.3,93.7), new cjs.Rectangle(-37,-3.7,83.2,94.1), new cjs.Rectangle(-37.9,-4.5,84,94.5), new cjs.Rectangle(-38.7,-5.2,84.9,94.9), new cjs.Rectangle(-39.5,-6,85.7,95.2), new cjs.Rectangle(-40.2,-6.5,86.3,95.4), new cjs.Rectangle(-41,-7.2,87,95.7), new cjs.Rectangle(-41.7,-8,87.8,96), new cjs.Rectangle(-42.4,-8.6,88.5,96.3), new cjs.Rectangle(-43.2,-9.3,89.3,96.6)];


(lib.angel_wind1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.aw1_mc();
	this.instance.setTransform(34.5,18,1,1,0,0,0,34.5,18);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-24.5},9).to({rotation:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.2,-29.2,78,58);
p.frameBounds = [rect, new cjs.Rectangle(-41.2,-29.3,80.5,61.5), new cjs.Rectangle(-43.2,-29.3,83,65), new cjs.Rectangle(-45,-29.2,85.3,68.3), new cjs.Rectangle(-46.6,-29.1,87.4,71.6), new cjs.Rectangle(-48.1,-28.8,89.4,74.6), new cjs.Rectangle(-49.3,-28.4,91.1,77.4), new cjs.Rectangle(-50.4,-27.9,92.6,80.2), new cjs.Rectangle(-51.3,-27.4,93.9,82.7), new cjs.Rectangle(-52.1,-26.7,95,85.1), new cjs.Rectangle(-51.3,-27.3,94,83), new cjs.Rectangle(-50.6,-27.8,92.9,80.7), new cjs.Rectangle(-49.6,-28.4,91.5,78.3), new cjs.Rectangle(-48.5,-28.7,90,75.7), new cjs.Rectangle(-47.3,-29,88.3,73), new cjs.Rectangle(-46,-29.2,86.7,70.4), new cjs.Rectangle(-44.5,-29.4,84.7,67.4), new cjs.Rectangle(-42.8,-29.4,82.6,64.3), new cjs.Rectangle(-40.9,-29.3,80.3,61.1), new cjs.Rectangle(-39.2,-29.2,78,58)];


(lib.angel_h9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ergwewf
	this.instance = new lib.angel_eyes9_mc();
	this.instance.setTransform(15.2,32.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// angel_mouth1
	this.instance_1 = new lib.angel_mouth2_img();
	this.instance_1.setTransform(19,60.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// angel_eyebrows1
	this.instance_2 = new lib.angel_eyebrows1_mc();
	this.instance_2.setTransform(19.3,2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// angel_rouge1
	this.instance_3 = new lib.angel_rouge2_mc();
	this.instance_3.setTransform(13.5,57.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// angel_head1
	this.instance_4 = new lib.angel_head1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.5,-78.4,137,157);
p.frameBounds = [rect];


(lib.angel_h7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ergwewf
	this.instance = new lib.angel_eyes1_mc();
	this.instance.setTransform(15.2,32.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// angel_mouth1
	this.instance_1 = new lib.angel_mouth2_img();
	this.instance_1.setTransform(19,60.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// angel_eyebrows1
	this.instance_2 = new lib.angel_eyebrows1_mc();
	this.instance_2.setTransform(19.3,2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// angel_rouge1
	this.instance_3 = new lib.angel_rouge2_mc();
	this.instance_3.setTransform(13.5,57.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// angel_head1
	this.instance_4 = new lib.angel_head1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.5,-78.4,137,157);
p.frameBounds = [rect];


(lib.angel_h6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ergwewf
	this.instance = new lib.angel_eyes3_mc();
	this.instance.setTransform(15.2,32.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// angel_mouth1
	this.instance_1 = new lib.angel_mouth1_mc();
	this.instance_1.setTransform(15.3,61.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// angel_eyebrows1
	this.instance_2 = new lib.angel_eyebrows1_mc();
	this.instance_2.setTransform(19.3,2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// angel_rouge1
	this.instance_3 = new lib.angel_rouge1_mc();
	this.instance_3.setTransform(13.5,57.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// angel_head1
	this.instance_4 = new lib.angel_head1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.5,-78.4,137,157);
p.frameBounds = [rect];


(lib.angel_h5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.angel_eyes2_mc();
	this.instance.setTransform(15.2,32.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.angel_mouth1_mc();
	this.instance_1.setTransform(15.3,61.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.angel_eyebrows1_mc();
	this.instance_2.setTransform(19.3,2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.angel_rouge1_mc();
	this.instance_3.setTransform(13.5,57.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.angel_head1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.5,-78.4,137,157);
p.frameBounds = [rect];


(lib.angel_h4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ergwewf
	this.instance = new lib.angel_eyes3_mc();
	this.instance.setTransform(15.2,32.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// angel_mouth1
	this.instance_1 = new lib.angel_mouth2_img();
	this.instance_1.setTransform(19,60.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// angel_eyebrows1
	this.instance_2 = new lib.angel_eyebrows1_mc();
	this.instance_2.setTransform(19.3,2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// angel_rouge1
	this.instance_3 = new lib.angel_rouge2_mc();
	this.instance_3.setTransform(13.5,57.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// angel_head1
	this.instance_4 = new lib.angel_head1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.5,-78.4,137,157);
p.frameBounds = [rect];


(lib.angel_h3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ergwewf
	this.instance = new lib.angel_eyes3_mc();
	this.instance.setTransform(15.2,32.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// angel_mouth1
	this.instance_1 = new lib.angel_mouth3_img();
	this.instance_1.setTransform(22.2,57.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// angel_eyebrows1
	this.instance_2 = new lib.angel_eyebrows1_mc();
	this.instance_2.setTransform(19.3,2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// angel_rouge1
	this.instance_3 = new lib.angel_rouge1_mc();
	this.instance_3.setTransform(13.5,57.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// angel_head1
	this.instance_4 = new lib.angel_head1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.5,-78.4,137,157);
p.frameBounds = [rect];


(lib.angel_h1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ergwewf
	this.instance = new lib.angel_eyes1_mc();
	this.instance.setTransform(15.2,32.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// angel_mouth1
	this.instance_1 = new lib.angel_mouth1_mc();
	this.instance_1.setTransform(15.3,61.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// angel_eyebrows1
	this.instance_2 = new lib.angel_eyebrows1_mc();
	this.instance_2.setTransform(19.3,2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// angel_rouge1
	this.instance_3 = new lib.angel_rouge1_mc();
	this.instance_3.setTransform(13.5,57.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// angel_head1
	this.instance_4 = new lib.angel_head1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.5,-78.4,137,157);
p.frameBounds = [rect];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:35,end:74});

	// timeline functions:
	this.frame_74 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(74).call(this.frame_74).wait(1));

	// animation
	this.instance = new lib.curtain_1_mc();
	this.instance.setTransform(1300,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0},9).wait(30).to({x:-1300},10).to({_off:true},1).wait(25));

	// animation
	this.instance_1 = new lib.curtain_1_mc();
	this.instance_1.setTransform(1300,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({x:0},10).wait(30).to({x:-1300},10).to({_off:true},1).wait(20));

	// animation
	this.instance_2 = new lib.curtain_1_mc();
	this.instance_2.setTransform(1300,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({x:0},10).wait(30).to({x:-1300},10).to({_off:true},1).wait(15));

	// animation
	this.instance_3 = new lib.curtain_1_mc();
	this.instance_3.setTransform(1300,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({x:0},10).wait(30).to({x:-1300},10).to({_off:true},1).wait(10));

	// animation
	this.instance_4 = new lib.curtain_1_mc();
	this.instance_4.setTransform(1300,400);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({x:0},10).wait(30).to({x:-1300},10).to({_off:true},1).wait(5));

	// animation
	this.instance_5 = new lib.curtain_1_mc();
	this.instance_5.setTransform(1300,500);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({x:0},10).wait(30).to({x:-1300},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1095,-5,1210,610);
p.frameBounds = [rect, new cjs.Rectangle(950.6,-5,1354.5,610), new cjs.Rectangle(806.1,-5,1498.9,610), new cjs.Rectangle(661.7,-5,1643.4,610), new cjs.Rectangle(517.2,-5,1787.8,610), new cjs.Rectangle(372.8,-5,1932.2,610), new cjs.Rectangle(228.3,-5,2076.7,610), new cjs.Rectangle(83.9,-5,2221.1,610), new cjs.Rectangle(-60.5,-5,2365.6,610), rect=new cjs.Rectangle(-205,-5,2510,610), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-205,-5,2380,610), new cjs.Rectangle(-205,-5,2250,610), new cjs.Rectangle(-205,-5,2120,610), new cjs.Rectangle(-205,-5,1990,610), new cjs.Rectangle(-205,-5,1860,610), new cjs.Rectangle(-205,-5,1730,610), new cjs.Rectangle(-205,-5,1600,610), new cjs.Rectangle(-205,-5,1470,610), new cjs.Rectangle(-205,-5,1340,610), rect=new cjs.Rectangle(-205,-5,1210,610), rect, rect, rect, rect, rect, new cjs.Rectangle(-335,-5,1340,610), new cjs.Rectangle(-465,-5,1470,610), new cjs.Rectangle(-595,-5,1600,610), new cjs.Rectangle(-725,-5,1730,610), new cjs.Rectangle(-855,-5,1860,610), new cjs.Rectangle(-985,-5,1990,610), new cjs.Rectangle(-1115,-5,2120,610), new cjs.Rectangle(-1245,-5,2250,610), new cjs.Rectangle(-1375,-5,2380,610), new cjs.Rectangle(-1505,-5,2510,610), new cjs.Rectangle(-985,95,1990,510), new cjs.Rectangle(-1115,95,2120,510), new cjs.Rectangle(-1245,95,2250,510), new cjs.Rectangle(-1375,95,2380,510), new cjs.Rectangle(-1505,95,2510,510), new cjs.Rectangle(-985,195,1990,410), new cjs.Rectangle(-1115,195,2120,410), new cjs.Rectangle(-1245,195,2250,410), new cjs.Rectangle(-1375,195,2380,410), new cjs.Rectangle(-1505,195,2510,410), new cjs.Rectangle(-985,295,1990,310), new cjs.Rectangle(-1115,295,2120,310), new cjs.Rectangle(-1245,295,2250,310), new cjs.Rectangle(-1375,295,2380,310), new cjs.Rectangle(-1505,295,2510,310), new cjs.Rectangle(-985,395,1860,210), new cjs.Rectangle(-1115,395,1860,210), new cjs.Rectangle(-1245,395,1860,210), new cjs.Rectangle(-1375,395,1860,210), new cjs.Rectangle(-1505,395,1860,210), new cjs.Rectangle(-985,495,1210,110), new cjs.Rectangle(-1115,495,1210,110), new cjs.Rectangle(-1245,495,1210,110), new cjs.Rectangle(-1375,495,1210,110), new cjs.Rectangle(-1505,495,1210,110)];


(lib.gravity_explosion_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// container
	this.example_mc = new lib.ParticleGravityExplosionMC();

	this.timeline.addTween(cjs.Tween.get(this.example_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8,-8,16,16);
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
	this.instance.setTransform(200,200,0.6,0.6);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(50,110,300,180);
p.frameBounds = [rect, new cjs.Rectangle(46.3,106.8,302.5,181.5), new cjs.Rectangle(35.2,97.1,309.9,186), new cjs.Rectangle(16.7,81.1,322.2,193.4), new cjs.Rectangle(-9.3,58.6,339.5,203.7), new cjs.Rectangle(-42.6,29.7,361.7,217.1), new cjs.Rectangle(-83.3,-5.5,388.9,233.4), new cjs.Rectangle(-131.4,-47.2,421,252.6), new cjs.Rectangle(-187,-95.4,458,274.8), new cjs.Rectangle(-250,-150,500,300)];


(lib.blinking_light_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_light_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8},29).to({scaleX:1,scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-63,150,125);
p.frameBounds = [rect, new cjs.Rectangle(-74.4,-62.5,149,124.2), new cjs.Rectangle(-73.9,-62.1,148,123.3), new cjs.Rectangle(-73.4,-61.6,146.9,122.4), new cjs.Rectangle(-72.9,-61.2,145.9,121.6), new cjs.Rectangle(-72.4,-60.8,144.9,120.7), new cjs.Rectangle(-71.8,-60.3,143.8,119.9), new cjs.Rectangle(-71.3,-59.9,142.8,119), new cjs.Rectangle(-70.8,-59.5,141.7,118.1), new cjs.Rectangle(-70.3,-59,140.7,117.3), new cjs.Rectangle(-69.8,-58.6,139.6,116.4), new cjs.Rectangle(-69.3,-58.2,138.6,115.5), new cjs.Rectangle(-68.7,-57.7,137.6,114.7), new cjs.Rectangle(-68.2,-57.3,136.6,113.8), new cjs.Rectangle(-67.7,-56.9,135.5,113), new cjs.Rectangle(-67.2,-56.4,134.5,112.1), new cjs.Rectangle(-66.7,-56,133.5,111.2), new cjs.Rectangle(-66.2,-55.6,132.4,110.4), new cjs.Rectangle(-65.6,-55.1,131.4,109.5), new cjs.Rectangle(-65.1,-54.7,130.4,108.6), new cjs.Rectangle(-64.6,-54.3,129.3,107.8), new cjs.Rectangle(-64.1,-53.8,128.3,106.9), new cjs.Rectangle(-63.6,-53.4,127.3,106.1), new cjs.Rectangle(-63.1,-53,126.2,105.2), new cjs.Rectangle(-62.5,-52.5,125.2,104.3), new cjs.Rectangle(-62,-52.1,124.2,103.5), new cjs.Rectangle(-61.5,-51.7,123.1,102.6), new cjs.Rectangle(-61,-51.2,122.1,101.7), new cjs.Rectangle(-60.5,-50.8,121.1,100.9), new cjs.Rectangle(-60,-50.4,120,100), new cjs.Rectangle(-60.4,-50.8,121,100.9), new cjs.Rectangle(-60.9,-51.2,122,101.7), new cjs.Rectangle(-61.4,-51.6,123,102.5), new cjs.Rectangle(-61.9,-52,124,103.4), new cjs.Rectangle(-62.4,-52.4,125,104.2), new cjs.Rectangle(-62.9,-52.9,126,105), new cjs.Rectangle(-63.4,-53.3,127,105.9), new cjs.Rectangle(-63.9,-53.7,128,106.7), new cjs.Rectangle(-64.4,-54.1,129,107.5), new cjs.Rectangle(-64.9,-54.5,130,108.4), new cjs.Rectangle(-65.4,-55,131,109.2), new cjs.Rectangle(-65.9,-55.4,132,110), new cjs.Rectangle(-66.4,-55.8,133,110.9), new cjs.Rectangle(-66.9,-56.2,134,111.7), new cjs.Rectangle(-67.4,-56.6,135,112.5), new cjs.Rectangle(-67.9,-57.1,136,113.4), new cjs.Rectangle(-68.4,-57.5,137,114.2), new cjs.Rectangle(-68.9,-57.9,138,115), new cjs.Rectangle(-69.4,-58.3,139,115.9), new cjs.Rectangle(-69.9,-58.7,140,116.7), new cjs.Rectangle(-70.4,-59.2,141,117.5), new cjs.Rectangle(-70.9,-59.6,142,118.4), new cjs.Rectangle(-71.4,-60,143,119.2), new cjs.Rectangle(-71.9,-60.4,144,120), new cjs.Rectangle(-72.4,-60.8,145,120.9), new cjs.Rectangle(-72.9,-61.3,146,121.7), new cjs.Rectangle(-73.4,-61.7,147,122.5), new cjs.Rectangle(-73.9,-62.1,148,123.4), new cjs.Rectangle(-74.4,-62.5,149,124.2), new cjs.Rectangle(-75,-63,150,125)];


(lib.blinking_light_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_light_1_3_mc();
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.301},29).to({scaleX:1,scaleY:1,alpha:0.5},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16,-16,32,32);
p.frameBounds = [rect, new cjs.Rectangle(-15.8,-15.8,31.8,31.8), new cjs.Rectangle(-15.7,-15.7,31.6,31.6), new cjs.Rectangle(-15.6,-15.6,31.4,31.4), new cjs.Rectangle(-15.5,-15.5,31.1,31.1), new cjs.Rectangle(-15.4,-15.4,30.9,30.9), new cjs.Rectangle(-15.3,-15.3,30.7,30.7), new cjs.Rectangle(-15.2,-15.2,30.5,30.5), new cjs.Rectangle(-15.1,-15.1,30.3,30.3), new cjs.Rectangle(-15,-15,30,30), new cjs.Rectangle(-14.8,-14.8,29.8,29.8), new cjs.Rectangle(-14.7,-14.7,29.6,29.6), new cjs.Rectangle(-14.6,-14.6,29.4,29.4), new cjs.Rectangle(-14.5,-14.5,29.2,29.2), new cjs.Rectangle(-14.4,-14.4,28.9,28.9), new cjs.Rectangle(-14.3,-14.3,28.7,28.7), new cjs.Rectangle(-14.2,-14.2,28.5,28.5), new cjs.Rectangle(-14.1,-14.1,28.3,28.3), new cjs.Rectangle(-14,-14,28.1,28.1), new cjs.Rectangle(-13.9,-13.9,27.8,27.8), new cjs.Rectangle(-13.7,-13.7,27.6,27.6), new cjs.Rectangle(-13.6,-13.6,27.4,27.4), new cjs.Rectangle(-13.5,-13.5,27.2,27.2), new cjs.Rectangle(-13.4,-13.4,26.9,26.9), new cjs.Rectangle(-13.3,-13.3,26.7,26.7), new cjs.Rectangle(-13.2,-13.2,26.5,26.5), new cjs.Rectangle(-13.1,-13.1,26.3,26.3), new cjs.Rectangle(-13,-13,26.1,26.1), new cjs.Rectangle(-12.9,-12.9,25.8,25.8), new cjs.Rectangle(-12.8,-12.8,25.6,25.6), new cjs.Rectangle(-12.9,-12.9,25.8,25.8), new cjs.Rectangle(-13,-13,26.1,26.1), new cjs.Rectangle(-13.1,-13.1,26.3,26.3), new cjs.Rectangle(-13.2,-13.2,26.5,26.5), new cjs.Rectangle(-13.3,-13.3,26.7,26.7), new cjs.Rectangle(-13.4,-13.4,26.9,26.9), new cjs.Rectangle(-13.5,-13.5,27.1,27.1), new cjs.Rectangle(-13.6,-13.6,27.3,27.3), new cjs.Rectangle(-13.7,-13.7,27.5,27.5), new cjs.Rectangle(-13.8,-13.8,27.8,27.8), new cjs.Rectangle(-13.9,-13.9,28,28), new cjs.Rectangle(-14,-14,28.2,28.2), new cjs.Rectangle(-14.1,-14.1,28.4,28.4), new cjs.Rectangle(-14.2,-14.2,28.6,28.6), new cjs.Rectangle(-14.3,-14.3,28.8,28.8), new cjs.Rectangle(-14.5,-14.5,29,29), new cjs.Rectangle(-14.6,-14.6,29.3,29.3), new cjs.Rectangle(-14.7,-14.7,29.5,29.5), new cjs.Rectangle(-14.8,-14.8,29.7,29.7), new cjs.Rectangle(-14.9,-14.9,29.9,29.9), new cjs.Rectangle(-15,-15,30.1,30.1), new cjs.Rectangle(-15.1,-15.1,30.3,30.3), new cjs.Rectangle(-15.2,-15.2,30.5,30.5), new cjs.Rectangle(-15.3,-15.3,30.7,30.7), new cjs.Rectangle(-15.4,-15.4,31,31), new cjs.Rectangle(-15.5,-15.5,31.2,31.2), new cjs.Rectangle(-15.6,-15.6,31.4,31.4), new cjs.Rectangle(-15.7,-15.7,31.6,31.6), new cjs.Rectangle(-15.8,-15.8,31.8,31.8), new cjs.Rectangle(-16,-16,32,32)];


(lib.blinking_light_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_light_1_2_mc();
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.012},14).to({scaleX:1,scaleY:1,alpha:0.5},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect, new cjs.Rectangle(-23.6,-23.6,47.3,47.3), new cjs.Rectangle(-23.3,-23.3,46.7,46.7), new cjs.Rectangle(-22.9,-22.9,46,46), new cjs.Rectangle(-22.6,-22.6,45.3,45.3), new cjs.Rectangle(-22.2,-22.2,44.6,44.6), new cjs.Rectangle(-21.9,-21.9,43.9,43.9), new cjs.Rectangle(-21.6,-21.6,43.2,43.2), new cjs.Rectangle(-21.2,-21.2,42.5,42.5), new cjs.Rectangle(-20.9,-20.9,41.8,41.8), new cjs.Rectangle(-20.5,-20.5,41.2,41.2), new cjs.Rectangle(-20.2,-20.2,40.5,40.5), new cjs.Rectangle(-19.8,-19.8,39.8,39.8), new cjs.Rectangle(-19.5,-19.5,39.1,39.1), new cjs.Rectangle(-19.2,-19.2,38.4,38.4), new cjs.Rectangle(-19.5,-19.5,39.1,39.1), new cjs.Rectangle(-19.8,-19.8,39.7,39.7), new cjs.Rectangle(-20.1,-20.1,40.3,40.3), new cjs.Rectangle(-20.4,-20.4,41,41), new cjs.Rectangle(-20.7,-20.7,41.6,41.6), new cjs.Rectangle(-21.1,-21.1,42.3,42.3), new cjs.Rectangle(-21.4,-21.4,42.9,42.9), new cjs.Rectangle(-21.7,-21.7,43.5,43.5), new cjs.Rectangle(-22,-22,44.2,44.2), new cjs.Rectangle(-22.3,-22.3,44.8,44.8), new cjs.Rectangle(-22.7,-22.7,45.5,45.5), new cjs.Rectangle(-23,-23,46.1,46.1), new cjs.Rectangle(-23.3,-23.3,46.7,46.7), new cjs.Rectangle(-23.6,-23.6,47.3,47.3), new cjs.Rectangle(-24,-24,48,48)];


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


(lib.done_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.done_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},10).wait(6));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-96,-96,192,192), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-100,-100,200,200), new cjs.Rectangle(-99.4,-99.4,199,199), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-98.4,-98.4,197,197), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-100,-100,200,200), new cjs.Rectangle(-99.4,-99.4,199,199), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-98.4,-98.4,197,197), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-97.4,-97.4,195,195), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-96.4,-96.4,193,193), new cjs.Rectangle(-95.9,-95.9,192,192), new cjs.Rectangle(-95.4,-95.4,191,191), new cjs.Rectangle(-95,-95,190,190)];


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
	this.instance.setTransform(-50,100,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.decor_banner_2_img();
	this.instance_1.setTransform(-130,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.banner_2_img();
	this.instance_2.setTransform(-130,-130,0.867,0.867);

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
	this.instance.setTransform(50,100,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.decor_banner_1_img();
	this.instance_1.setTransform(-130,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.banner_1_img();
	this.instance_2.setTransform(-130,-130,0.867,0.867);

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
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,780);
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


(lib.satan6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sat_h1
	this.instance = new lib.sat_h6_mc();
	this.instance.setTransform(6.8,-100.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// sat_hand1
	this.instance_1 = new lib.sat_hand1_mc();
	this.instance_1.setTransform(-33.7,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// sat_body1
	this.instance_2 = new lib.sat_body1_mc();
	this.instance_2.setTransform(-3.9,69.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// sat_hand2
	this.instance_3 = new lib.sat_hand2_mc();
	this.instance_3.setTransform(47.8,-8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// ast_wing1
	this.instance_4 = new lib.ast_wing1_mc();
	this.instance_4.setTransform(3.5,-9.1,1,1,0,0,180,-50.5,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// ast_wing1
	this.instance_5 = new lib.ast_wing1_mc();
	this.instance_5.setTransform(10,-7.6,0.816,1,0,0,0,-50.5,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// sat_tail1
	this.instance_6 = new lib.sat_tail1_mc();
	this.instance_6.setTransform(6.7,53.6,1,1,0,0,0,17,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.6,-176.1,194.9,352.3);
p.frameBounds = [rect];


(lib.satan5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// animation
	this.instance = new lib.sat_h5_mc();
	this.instance.setTransform(-0.2,-37.3,1,1,0,0,0,-7,63);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.7},29).wait(1));

	// animation
	this.instance_1 = new lib.sat_hand2_mc();
	this.instance_1.setTransform(26.7,-1.9,1,1,24.2,0,0,-14.9,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-15,rotation:25.7,x:17.9,y:3.8},29).wait(1));

	// animation
	this.instance_2 = new lib.sat_body2_mc();
	this.instance_2.setTransform(-1.1,-26.8,1,1,0,0,180,12,-98);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({skewX:14.5,skewY:194.5,x:-2.7,y:-27.3},29).wait(1));

	// animation
	this.instance_3 = new lib.sat_hand2_mc();
	this.instance_3.setTransform(-21.9,-10.3,1,1,0,0,180,-19,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:-19.1,regY:-3.1,skewX:2.5,skewY:182.5,x:-26.9,y:-16.4},29).wait(1));

	// animation
	this.instance_4 = new lib.sw1_mc();
	this.instance_4.setTransform(4.3,-5.8,1,1,-17.9,0,0,-49.6,-11.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:-11.8,rotation:-19.4,x:-2.7,y:-5.7},29).wait(1));

	// animation
	this.instance_5 = new lib.sw1_mc();
	this.instance_5.setTransform(-3.7,-4.4,0.816,1,0,28.5,-151.5,-49.6,-11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:-11.7,skewX:59.9,skewY:-120.1,x:-10.9,y:-6.1},29).wait(1));

	// animation
	this.instance_6 = new lib.sat_tail1_mc();
	this.instance_6.setTransform(0.3,55.1,1,1,30.2,0,0,17,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:16.9,regY:-50.6,rotation:7.7,x:-21.9,y:52.3},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131.2,-176.1,242.6,359.7);
p.frameBounds = [rect, new cjs.Rectangle(-131,-176.2,241.9,360), new cjs.Rectangle(-131,-176.2,241.8,360.2), new cjs.Rectangle(-131.2,-176.2,241.7,360.5), new cjs.Rectangle(-131.2,-176.3,241.5,360.7), new cjs.Rectangle(-131.3,-176.6,241.3,361.3), new cjs.Rectangle(-131.3,-176.6,241.1,361.5), new cjs.Rectangle(-131.3,-176.6,240.9,361.7), new cjs.Rectangle(-131.2,-176.6,240.6,361.9), new cjs.Rectangle(-131.2,-177,240.3,362.4), new cjs.Rectangle(-130.9,-177,239.8,362.5), new cjs.Rectangle(-130.8,-177,239.4,362.7), new cjs.Rectangle(-130.7,-177.1,239,362.8), new cjs.Rectangle(-130.5,-177.4,238.6,363.2), new cjs.Rectangle(-130.3,-177.4,238.2,363.4), new cjs.Rectangle(-130.2,-177.4,237.8,363.4), new cjs.Rectangle(-130,-177.5,237.4,363.5), new cjs.Rectangle(-129.8,-177.7,236.9,363.7), new cjs.Rectangle(-130.5,-177.8,237.4,363.7), new cjs.Rectangle(-132.2,-177.8,238.9,363.8), new cjs.Rectangle(-133.9,-177.9,240.4,363.9), new cjs.Rectangle(-135.6,-178.2,241.9,364.1), new cjs.Rectangle(-137.3,-178.2,243.2,364.1), new cjs.Rectangle(-139,-178.2,244.6,364.1), new cjs.Rectangle(-140.6,-178.3,246,364), new cjs.Rectangle(-142.4,-178.3,247.6,363.9), new cjs.Rectangle(-144,-178.6,249,364.1), new cjs.Rectangle(-145.7,-178.6,250.5,364), new cjs.Rectangle(-147.3,-178.6,251.8,363.8), new cjs.Rectangle(-149.6,-179,254,364.1)];


(lib.satan4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_60 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(1));

	// animation
	this.instance = new lib.heart_prize_mc();
	this.instance.setTransform(-63,-27,0.413,0.413);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-68.4,y:-9.9},29).to({scaleX:0.68,scaleY:0.68,x:-105.9,y:-11.9},30).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.sat_h3_mc();
	this.instance_1.setTransform(6.8,-100.3);

	this.instance_2 = new lib.sat_h4_mc();
	this.instance_2.setTransform(6.8,-100.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},29).to({state:[{t:this.instance_1}]},30).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:true},1).wait(1));

	// animation
	this.instance_3 = new lib.sat_hand3_mc();
	this.instance_3.setTransform(-19.8,-4.1,1,1,0,-15,165,-18.9,0);

	this.instance_4 = new lib.sat_hand1_mc();
	this.instance_4.setTransform(-33.7,30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},29).to({state:[{t:this.instance_3}]},30).to({state:[{t:this.instance_4}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:0.1,skewX:-36.2,skewY:143.8,x:-19.7,y:-4},29).wait(30).to({_off:true,regX:0,regY:0,skewX:0,skewY:0,x:-33.7,y:30.9},1).wait(1));

	// animation
	this.instance_5 = new lib.sat_body1_mc();
	this.instance_5.setTransform(-3.9,69.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(61));

	// animation
	this.instance_6 = new lib.sat_hand2_mc();
	this.instance_6.setTransform(47.8,-8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(61));

	// animation
	this.instance_7 = new lib.ast_wing1_mc();
	this.instance_7.setTransform(3.5,-9.1,1,1,0,0,180,-50.5,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(61));

	// animation
	this.instance_8 = new lib.ast_wing1_mc();
	this.instance_8.setTransform(10,-7.6,0.816,1,0,0,0,-50.5,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(61));

	// animation
	this.instance_9 = new lib.sat_tail1_mc();
	this.instance_9.setTransform(6.7,53.6,1,1,0,0,0,17,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.6,-176.1,194.9,352.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-97.8,-176.1,195.1,352.3), new cjs.Rectangle(-98,-176.1,195.3,352.3), new cjs.Rectangle(-98.2,-176.1,195.5,352.3), new cjs.Rectangle(-98.4,-176.1,195.6,352.3), new cjs.Rectangle(-98.6,-176.1,195.8,352.3), new cjs.Rectangle(-98.8,-176.1,196,352.3), new cjs.Rectangle(-99,-176.1,196.2,352.3), new cjs.Rectangle(-99.1,-176.1,196.4,352.3), new cjs.Rectangle(-99.4,-176.1,196.6,352.3), new cjs.Rectangle(-101.3,-176.1,198.5,352.3), new cjs.Rectangle(-103.2,-176.1,200.4,352.3), new cjs.Rectangle(-105.1,-176.1,202.3,352.3), new cjs.Rectangle(-107,-176.1,204.2,352.3), new cjs.Rectangle(-108.9,-176.1,206.1,352.3), new cjs.Rectangle(-110.8,-176.1,208.1,352.3), new cjs.Rectangle(-112.7,-176.1,210,352.3), new cjs.Rectangle(-114.6,-176.1,211.9,352.3), new cjs.Rectangle(-116.6,-176.1,213.8,352.3), new cjs.Rectangle(-118.4,-176.1,215.7,352.3), new cjs.Rectangle(-120.4,-176.1,217.6,352.3), new cjs.Rectangle(-122.3,-176.1,219.5,352.3), new cjs.Rectangle(-124.2,-176.1,221.4,352.3), new cjs.Rectangle(-126.1,-176.1,223.4,352.3), new cjs.Rectangle(-128,-176.1,225.2,352.3), new cjs.Rectangle(-129.9,-176.1,227.2,352.3), new cjs.Rectangle(-131.8,-176.1,229.1,352.3), new cjs.Rectangle(-133.8,-176.1,231,352.3), new cjs.Rectangle(-135.7,-176.1,232.9,352.3), new cjs.Rectangle(-137.5,-176.1,234.8,352.3), new cjs.Rectangle(-139.5,-176.1,236.7,352.3), new cjs.Rectangle(-141.4,-176.1,238.7,352.3), new cjs.Rectangle(-143.3,-176.1,240.6,352.3), new cjs.Rectangle(-145.2,-176.1,242.5,352.3), new cjs.Rectangle(-147.1,-176.1,244.4,352.3), new cjs.Rectangle(-149,-176.1,246.2,352.3), new cjs.Rectangle(-151,-176.1,248.2,352.3), new cjs.Rectangle(-152.9,-176.1,250.1,352.3), new cjs.Rectangle(-154.8,-176.1,252,352.3), new cjs.Rectangle(-156.7,-176.1,254,352.3), new cjs.Rectangle(-97.6,-176.1,194.9,352.3)];


(lib.satan3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sat_h3_mc();
	this.instance.setTransform(6.8,-100.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.sat_hand1_mc();
	this.instance_1.setTransform(-33.7,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.sat_body1_mc();
	this.instance_2.setTransform(-3.9,69.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.sat_hand2_mc();
	this.instance_3.setTransform(47.8,-8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.ast_wing1_mc();
	this.instance_4.setTransform(3.5,-9.1,1,1,0,0,180,-50.5,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.ast_wing1_mc();
	this.instance_5.setTransform(10,-7.6,0.816,1,0,0,0,-50.5,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// graph
	this.instance_6 = new lib.sat_tail1_mc();
	this.instance_6.setTransform(6.7,53.6,1,1,0,0,0,17,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.6,-176.1,194.9,352.3);
p.frameBounds = [rect];


(lib.satan1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.sat_h1_mc();
	this.instance.setTransform(6.8,-100.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:0.9,x:10.9},19).to({skewX:0,x:6.8},20).to({skewX:-0.9,x:2.6},20).to({skewX:0,x:6.8},20).wait(1));

	// animation
	this.instance_1 = new lib.sat_hand1_mc();
	this.instance_1.setTransform(-33.7,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({skewX:0.9,x:-31.5},19).to({skewX:0,x:-33.7},20).to({skewX:-0.9,x:-35.8},20).to({skewX:0,x:-33.7},20).wait(1));

	// animation
	this.instance_2 = new lib.sat_body1_mc();
	this.instance_2.setTransform(-3.9,69.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({skewX:0.9,x:-2.3},19).to({skewX:0,x:-3.9},20).to({skewX:-0.9,x:-5.5},20).to({skewX:0,x:-3.9},20).wait(1));

	// animation
	this.instance_3 = new lib.sat_hand2_mc();
	this.instance_3.setTransform(47.8,-8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({skewX:0.9,x:50.5},19).to({skewX:0,x:47.8},20).to({skewX:-0.9,x:45},20).to({skewX:0,x:47.8},20).wait(1));

	// animation
	this.instance_4 = new lib.ast_wing1_mc();
	this.instance_4.setTransform(3.5,-9.1,1,1,0,0,180,-50.5,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({skewX:0.9,x:6.2},19).to({skewX:0,x:3.5},20).to({skewX:-0.9,x:0.7},20).to({skewX:0,x:3.5},20).wait(1));

	// animation
	this.instance_5 = new lib.ast_wing1_mc();
	this.instance_5.setTransform(10,-7.6,0.816,1,0,0,0,-50.5,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({skewX:0.9,x:12.7},19).to({skewX:0,x:10},20).to({skewX:-0.9,x:7.2},20).to({skewX:0,x:10},20).wait(1));

	// animation
	this.instance_6 = new lib.sat_tail1_mc();
	this.instance_6.setTransform(6.7,53.6,1,1,0,0,0,17,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({skewX:0.9,x:8.5},19).to({skewX:0,x:6.7},20).to({regX:16.9,skewX:-0.9,x:4.8},20).to({regX:17,skewX:0,x:6.7},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.6,-176.1,194.9,352.3);
p.frameBounds = [rect, new cjs.Rectangle(-97.5,-176.1,195,352.3), new cjs.Rectangle(-97.3,-176.2,195.1,352.4), new cjs.Rectangle(-97.2,-176.2,195.2,352.4), new cjs.Rectangle(-97.1,-176.2,195.3,352.4), new cjs.Rectangle(-97,-176.2,195.4,352.4), new cjs.Rectangle(-96.9,-176.2,195.8,352.4), new cjs.Rectangle(-96.8,-176.2,195.9,352.4), new cjs.Rectangle(-96.6,-176.2,196,352.4), new cjs.Rectangle(-96.5,-176.2,196.1,352.4), new cjs.Rectangle(-96.3,-176.2,196.1,352.4), new cjs.Rectangle(-96.2,-176.2,196.3,352.4), new cjs.Rectangle(-96.2,-176.1,196.7,352.3), new cjs.Rectangle(-96,-176.2,196.8,352.4), new cjs.Rectangle(-95.9,-176.2,196.9,352.4), new cjs.Rectangle(-95.8,-176.2,197.1,352.4), new cjs.Rectangle(-95.6,-176.2,197.1,352.4), new cjs.Rectangle(-95.7,-176.1,197.6,352.3), new cjs.Rectangle(-95.6,-176.1,197.8,352.3), new cjs.Rectangle(-95.5,-176.1,198,352.3), new cjs.Rectangle(-95.5,-176.1,197.7,352.3), new cjs.Rectangle(-95.6,-176.1,197.6,352.3), new cjs.Rectangle(-95.6,-176.2,197.1,352.4), new cjs.Rectangle(-95.8,-176.2,197.1,352.4), new cjs.Rectangle(-95.9,-176.2,197,352.4), new cjs.Rectangle(-96,-176.2,196.8,352.4), new cjs.Rectangle(-96.1,-176.2,196.7,352.4), new cjs.Rectangle(-96.3,-176.1,196.6,352.3), new cjs.Rectangle(-96.3,-176.2,196.3,352.4), new cjs.Rectangle(-96.4,-176.2,196.1,352.4), new cjs.Rectangle(-96.5,-176.2,196,352.4), new cjs.Rectangle(-96.7,-176.2,196,352.4), new cjs.Rectangle(-96.8,-176.2,195.9,352.4), new cjs.Rectangle(-96.9,-176.2,195.8,352.4), new cjs.Rectangle(-96.9,-176.2,195.3,352.4), new cjs.Rectangle(-97.1,-176.2,195.2,352.4), new cjs.Rectangle(-97.2,-176.2,195.1,352.4), new cjs.Rectangle(-97.3,-176.2,195,352.4), new cjs.Rectangle(-97.4,-176.1,194.9,352.3), new cjs.Rectangle(-97.6,-176.1,194.9,352.3), new cjs.Rectangle(-97.7,-176.1,194.8,352.3), new cjs.Rectangle(-97.9,-176.2,194.8,352.4), new cjs.Rectangle(-98,-176.2,194.7,352.4), new cjs.Rectangle(-98.1,-176.2,194.6,352.4), new cjs.Rectangle(-98.3,-176.2,194.6,352.4), new cjs.Rectangle(-98.5,-176.2,194.9,352.4), new cjs.Rectangle(-98.7,-176.2,194.9,352.4), new cjs.Rectangle(-98.8,-176.2,194.8,352.4), new cjs.Rectangle(-98.9,-176.2,194.7,352.4), new cjs.Rectangle(-99.1,-176.2,194.7,352.4), new cjs.Rectangle(-99.2,-176.2,194.6,352.4), new cjs.Rectangle(-99.4,-176.1,194.9,352.3), new cjs.Rectangle(-99.5,-176.2,194.8,352.4), new cjs.Rectangle(-99.7,-176.2,194.8,352.4), new cjs.Rectangle(-99.8,-176.2,194.6,352.4), new cjs.Rectangle(-100,-176.2,194.7,352.4), new cjs.Rectangle(-100.2,-176.2,194.7,352.4), new cjs.Rectangle(-100.2,-176.1,194.7,352.3), new cjs.Rectangle(-100.4,-176.1,194.7,352.3), new cjs.Rectangle(-100.6,-176.1,194.8,352.3), new cjs.Rectangle(-100.4,-176.1,194.7,352.3), new cjs.Rectangle(-100.2,-176.1,194.7,352.3), new cjs.Rectangle(-100.1,-176.2,194.6,352.4), new cjs.Rectangle(-99.9,-176.2,194.6,352.4), new cjs.Rectangle(-99.8,-176.2,194.6,352.4), new cjs.Rectangle(-99.6,-176.2,194.7,352.4), new cjs.Rectangle(-99.5,-176.2,194.7,352.4), new cjs.Rectangle(-99.4,-176.1,194.8,352.3), new cjs.Rectangle(-99.2,-176.2,194.5,352.4), new cjs.Rectangle(-99,-176.2,194.6,352.4), new cjs.Rectangle(-98.9,-176.2,194.6,352.4), new cjs.Rectangle(-98.7,-176.2,194.7,352.4), new cjs.Rectangle(-98.6,-176.2,194.8,352.4), new cjs.Rectangle(-98.5,-176.2,194.8,352.4), new cjs.Rectangle(-98.3,-176.2,194.5,352.4), new cjs.Rectangle(-98.1,-176.2,194.5,352.4), new cjs.Rectangle(-98,-176.2,194.7,352.4), new cjs.Rectangle(-97.9,-176.2,194.7,352.4), new cjs.Rectangle(-97.7,-176.1,194.8,352.3), new cjs.Rectangle(-97.6,-176.1,194.9,352.3)];


(lib.heroes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// heroes
	this.instance = new lib.heroes_main_mc();
	this.instance.setTransform(430,310);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(95,11.5,670,597);
p.frameBounds = [rect];


(lib.cartoon_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.satan5_mc();
	this.instance.setTransform(-46.7,-203.9,1,1,16.2,0,0,-10,3.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:3.7,rotation:39.4,x:90.4,y:154},29).wait(1));

	// animation
	this.instance_1 = new lib.background_с2_img();
	this.instance_1.setTransform(-600,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-397.3,1200,697.4);
p.frameBounds = [rect, new cjs.Rectangle(-600,-385,1200,685.1), new cjs.Rectangle(-600,-372.9,1200,672.9), new cjs.Rectangle(-600,-360.7,1200,660.7), new cjs.Rectangle(-600,-348.5,1200,648.6), new cjs.Rectangle(-600,-336.3,1200,636.4), new cjs.Rectangle(-600,-324,1200,624.1), new cjs.Rectangle(-600,-311.8,1200,611.8), rect=new cjs.Rectangle(-600,-300,1200,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-600,-300,1200,608.8), new cjs.Rectangle(-600,-300,1200,620.5)];


(lib.bomb_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.bengali_mc();
	this.instance.setTransform(-10,-45,0.7,0.7);
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.bomb_img();
	this.instance_1.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-115,140,165);
p.frameBounds = [rect];


(lib.angel14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 10
	this.instance = new lib.angel_hand3_mc();
	this.instance.setTransform(40.3,23.1,1,1,0,0,180,-6.3,13.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(2).to({_off:true},1).wait(1));

	// Слой 5
	this.instance_1 = new lib.angel_hand4_mc();
	this.instance_1.setTransform(37.3,3,1,1,0,0,0,1.3,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:true},1).wait(3).to({_off:false},0).wait(1));

	// Слой 9
	this.instance_2 = new lib.angel_hand4_mc();
	this.instance_2.setTransform(-3.3,11.8,1,1,0,0,180,1.3,32.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).wait(2).to({_off:true},1).wait(1));

	// Слой 6
	this.instance_3 = new lib.angel_hand3_mc();
	this.instance_3.setTransform(-14.3,26.8,1,1,0,0,0,-6.3,13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:true},1).wait(3).to({_off:false},0).wait(1));

	// angel_hair
	this.instance_4 = new lib.angel_hair_mc();
	this.instance_4.setTransform(0,-87.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7));

	// angel_h1
	this.instance_5 = new lib.angel_h7_mc();
	this.instance_5.setTransform(5,-90.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7));

	// Слой 8
	this.instance_6 = new lib.leg2_mc();
	this.instance_6.setTransform(1.3,56.2,1,1,0,0,0,3.8,-43.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:40.5},3).to({y:56.2},3).wait(1));

	// Слой 4
	this.instance_7 = new lib.leg2_mc();
	this.instance_7.setTransform(32.5,83.7,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:99.5},3).to({y:83.7},3).wait(1));

	// Слой 7
	this.instance_8 = new lib.angel_body3_mc();
	this.instance_8.setTransform(9.7,68.3,1,1,0,0,0,-6.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(7));

	// angel_wind1
	this.instance_9 = new lib.angel_wind2_mc();
	this.instance_9.setTransform(32.3,5,0.733,1,0,0,180,32.5,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(7));

	// angel_wind1
	this.instance_10 = new lib.angel_wind2_mc();
	this.instance_10.setTransform(2.3,1.2,1,1,-15,0,0,32.5,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.9,-202.8,239,358.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect];


(lib.angel12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// angel_hair
	this.instance = new lib.angel_hair_mc();
	this.instance.setTransform(0,-87.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// angel_h1
	this.instance_1 = new lib.angel_h9_mc();
	this.instance_1.setTransform(5,-90.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// angel_hand1
	this.instance_2 = new lib.angel_hand1_mc();
	this.instance_2.setTransform(-22.4,20.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// angel_body1
	this.instance_3 = new lib.angel_body2_mc();
	this.instance_3.setTransform(17.9,85.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// angel_hand1
	this.instance_4 = new lib.angel_hand1_mc();
	this.instance_4.setTransform(51.6,18.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 2
	this.instance_5 = new lib.leg1_mc();
	this.instance_5.setTransform(5.7,76.8,1,1,-22.9,0,0,0.1,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 3
	this.instance_6 = new lib.leg1_mc();
	this.instance_6.setTransform(13,54.9,1,1,-3.6,0,0,0.1,-55.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// angel_wind1
	this.instance_7 = new lib.angel_wind2_mc();
	this.instance_7.setTransform(29.8,8.5,0.733,1,0,0,180,32.5,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// angel_wind1
	this.instance_8 = new lib.angel_wind2_mc();
	this.instance_8.setTransform(7.3,7.5,1,1,-15,0,0,32.5,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.9,-202.8,239,389.1);
p.frameBounds = [rect];


(lib.angel11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// angel_hair
	this.instance = new lib.angel_hair_mc();
	this.instance.setTransform(0,-87.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-89.1},4).to({y:-87.1},5).to({y:-89.1},5).to({y:-87.1},5).wait(1));

	// angel_h1
	this.instance_1 = new lib.angel_h9_mc();
	this.instance_1.setTransform(5,-90.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-92.2},4).to({y:-90.2},5).to({y:-92.2},5).to({y:-90.2},5).wait(1));

	// angel_hand1
	this.instance_2 = new lib.angel_hand1_mc();
	this.instance_2.setTransform(-22.4,20.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:18.6},4).to({y:20.6},5).to({y:18.6},5).to({y:20.6},5).wait(1));

	// angel_body1
	this.instance_3 = new lib.angel_body2_mc();
	this.instance_3.setTransform(17.9,85.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:83.8},4).to({y:85.8},5).to({y:83.8},5).to({y:85.8},5).wait(1));

	// angel_hand1
	this.instance_4 = new lib.angel_hand1_mc();
	this.instance_4.setTransform(51.6,18.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:16.5},4).to({y:18.5},5).to({y:16.5},5).to({y:18.5},5).wait(1));

	// Слой 2
	this.instance_5 = new lib.leg1_mc();
	this.instance_5.setTransform(8.6,71.1,1,1,5.7,0,0,0.1,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:-55.4,rotation:-9.3,x:14.1,y:59.1},4).to({regY:-55.3,rotation:-23.7,x:3.7,y:62.7},5).to({regY:-55.5,rotation:-4,x:8.5,y:66.6},5).to({rotation:3.6,x:8.6,y:71},5).wait(1));

	// Слой 3
	this.instance_6 = new lib.leg1_mc();
	this.instance_6.setTransform(8.6,71.1,1,1,-17.4,0,0,0.1,-55.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-8.4,x:8.5,y:69.1},4).to({regY:-55.3,rotation:6.6,y:71.2},5).to({regY:-55.4,rotation:-8.4,x:14.5,y:59.6},5).to({rotation:-22.9,x:3.1,y:61.1},5).wait(1));

	// angel_wind1
	this.instance_7 = new lib.angel_wind2_mc();
	this.instance_7.setTransform(29.8,8.5,0.733,1,0,0,180,32.5,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:6.5},4).to({y:8.5},5).to({y:6.5},5).to({y:8.5},5).wait(1));

	// angel_wind1
	this.instance_8 = new lib.angel_wind2_mc();
	this.instance_8.setTransform(7.3,7.5,1,1,-15,0,0,32.5,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:5.5},4).to({y:7.5},5).to({y:5.5},5).to({y:7.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.9,-202.8,239,386.1);
p.frameBounds = [rect, new cjs.Rectangle(-118.9,-203.3,239,385.8), new cjs.Rectangle(-118.9,-203.8,239,386.2), new cjs.Rectangle(-118.9,-204.3,239,386.4), new cjs.Rectangle(-118.9,-204.8,239,386.3), new cjs.Rectangle(-118.9,-204.4,239,386.1), new cjs.Rectangle(-118.9,-204,239,385.4), new cjs.Rectangle(-118.9,-203.6,239,385), new cjs.Rectangle(-118.9,-203.2,239,385.7), new cjs.Rectangle(-118.9,-202.8,239,386.2), new cjs.Rectangle(-118.9,-203.2,239,383.7), new cjs.Rectangle(-118.9,-203.6,239,381.2), new cjs.Rectangle(-118.9,-204,239,381.3), new cjs.Rectangle(-118.9,-204.4,239,382.4), new cjs.Rectangle(-118.9,-204.8,239,383.4), new cjs.Rectangle(-118.9,-204.4,239,383.5), new cjs.Rectangle(-118.9,-204,239,383.6), new cjs.Rectangle(-118.9,-203.6,239,383.9), new cjs.Rectangle(-118.9,-203.2,239,384.8), new cjs.Rectangle(-118.9,-202.8,239,385.8)];


(lib.angel10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.angel_hair_mc();
	this.instance.setTransform(0,-87.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.angel_h7_mc();
	this.instance_1.setTransform(5,-90.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.angel_hand1_mc();
	this.instance_2.setTransform(-22.4,20.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.angel_body2_mc();
	this.instance_3.setTransform(17.9,85.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.angel_hand1_mc();
	this.instance_4.setTransform(51.6,18.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.leg1_mc();
	this.instance_5.setTransform(8.6,71.1,1,1,5.7,0,0,0.1,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// graph
	this.instance_6 = new lib.leg1_mc();
	this.instance_6.setTransform(8.6,71.1,1,1,-17.4,0,0,0.1,-55.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// graph
	this.instance_7 = new lib.angel_wind2_mc();
	this.instance_7.setTransform(29.8,8.5,0.733,1,0,0,180,32.5,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// graph
	this.instance_8 = new lib.angel_wind2_mc();
	this.instance_8.setTransform(7.3,7.5,1,1,-15,0,0,32.5,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.9,-202.8,239,386.1);
p.frameBounds = [rect];


(lib.angel9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.angel_hair_mc();
	this.instance.setTransform(0,-87.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-89.1},4).to({y:-87.1},5).to({y:-89.1},5).to({y:-87.1},5).wait(1));

	// animation
	this.instance_1 = new lib.angel_h9_mc();
	this.instance_1.setTransform(5,-90.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-92.2},4).to({y:-90.2},5).to({y:-92.2},5).to({y:-90.2},5).wait(1));

	// animation
	this.instance_2 = new lib.angel_hand1_mc();
	this.instance_2.setTransform(-22.4,20.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:18.6},4).to({y:20.6},5).to({y:18.6},5).to({y:20.6},5).wait(1));

	// animation
	this.instance_3 = new lib.angel_body2_mc();
	this.instance_3.setTransform(17.9,85.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:83.8},4).to({y:85.8},5).to({y:83.8},5).to({y:85.8},5).wait(1));

	// animation
	this.instance_4 = new lib.angel_hand1_mc();
	this.instance_4.setTransform(51.6,18.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:16.5},4).to({y:18.5},5).to({y:16.5},5).to({y:18.5},5).wait(1));

	// animation
	this.instance_5 = new lib.leg1_mc();
	this.instance_5.setTransform(8.6,71.1,1,1,5.7,0,0,0.1,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:-55.4,rotation:-9.3,y:69.1},4).to({rotation:-19.5,y:71.1},5).to({rotation:-9.3,y:69.1},5).to({regY:-55.5,rotation:3.6,y:71},5).wait(1));

	// animation
	this.instance_6 = new lib.leg1_mc();
	this.instance_6.setTransform(8.6,71.1,1,1,-17.4,0,0,0.1,-55.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-8.4,x:8.5,y:69.1},4).to({regY:-55.3,rotation:6.6,y:71.2},5).to({regY:-55.4,rotation:-8.4,y:69.1},5).to({rotation:-15.9,x:8.6,y:71.1},5).wait(1));

	// animation
	this.instance_7 = new lib.angel_wind2_mc();
	this.instance_7.setTransform(29.8,8.5,0.733,1,0,0,180,32.5,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:6.5},4).to({y:8.5},5).to({y:6.5},5).to({y:8.5},5).wait(1));

	// animation
	this.instance_8 = new lib.angel_wind2_mc();
	this.instance_8.setTransform(7.3,7.5,1,1,-15,0,0,32.5,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:5.5},4).to({y:7.5},5).to({y:5.5},5).to({y:7.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.9,-202.8,239,386.1);
p.frameBounds = [rect, new cjs.Rectangle(-118.9,-203.3,239,385.8), new cjs.Rectangle(-118.9,-203.8,239,386.2), new cjs.Rectangle(-118.9,-204.3,239,386.4), new cjs.Rectangle(-118.9,-204.8,239,386.4), new cjs.Rectangle(-118.9,-204.4,239,386.3), new cjs.Rectangle(-118.9,-204,239,386), new cjs.Rectangle(-118.9,-203.6,239,385.7), new cjs.Rectangle(-118.9,-203.2,239,385.7), new cjs.Rectangle(-118.9,-202.8,239,386.2), new cjs.Rectangle(-118.9,-203.2,239,385.6), new cjs.Rectangle(-118.9,-203.6,239,385.7), new cjs.Rectangle(-118.9,-204,239,386), new cjs.Rectangle(-118.9,-204.4,239,386.2), new cjs.Rectangle(-118.9,-204.8,239,386.4), new cjs.Rectangle(-118.9,-204.4,239,386.3), new cjs.Rectangle(-118.9,-204,239,386.2), new cjs.Rectangle(-118.9,-203.6,239,386.1), new cjs.Rectangle(-118.9,-203.2,239,385.9), new cjs.Rectangle(-118.9,-202.8,239,385.8)];


(lib.angel7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.angel_hair_mc();
	this.instance.setTransform(0,-87.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.angel_h7_mc();
	this.instance_1.setTransform(5,-90.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.angel_hand1_mc();
	this.instance_2.setTransform(-22.4,20.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.angel_body1_mc();
	this.instance_3.setTransform(17.9,85.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.angel_hand1_mc();
	this.instance_4.setTransform(51.6,18.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.angel_wind2_mc();
	this.instance_5.setTransform(29.8,8.5,0.733,1,0,0,180,32.5,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// graph
	this.instance_6 = new lib.angel_wind2_mc();
	this.instance_6.setTransform(7.3,7.5,1,1,-15,0,0,32.5,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.9,-202.8,239,397.1);
p.frameBounds = [rect];


(lib.angel6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.angel_hair_mc();
	this.instance.setTransform(0,-87.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.angel_h6_mc();
	this.instance_1.setTransform(5,-90.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.angel_hand1_mc();
	this.instance_2.setTransform(-22.4,20.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.angel_body1_mc();
	this.instance_3.setTransform(17.9,85.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.angel_hand1_mc();
	this.instance_4.setTransform(51.6,18.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.angel_wind1_mc();
	this.instance_5.setTransform(29.8,8.5,0.733,1,0,0,180,32.5,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// graph
	this.instance_6 = new lib.angel_wind1_mc();
	this.instance_6.setTransform(7.3,7.3,1,1,-30,0,0,32.5,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.9,-202.8,239,397.1);
p.frameBounds = [rect];


(lib.angel5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.angel_hair_mc();
	this.instance.setTransform(0,-87.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.angel_h5_mc();
	this.instance_1.setTransform(5,-90.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.angel_hand1_mc();
	this.instance_2.setTransform(-22.4,20.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.angel_body1_mc();
	this.instance_3.setTransform(17.9,85.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.angel_hand1_mc();
	this.instance_4.setTransform(51.6,18.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.angel_wind1_mc();
	this.instance_5.setTransform(29.8,8.5,0.733,1,0,0,180,32.5,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// graph
	this.instance_6 = new lib.angel_wind1_mc();
	this.instance_6.setTransform(7.3,7.3,1,1,-30,0,0,32.5,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.9,-202.8,239,397.1);
p.frameBounds = [rect];


(lib.angel4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// animation
	this.instance = new lib.angel_hair_mc();
	this.instance.setTransform(0,-87.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// animation
	this.instance_1 = new lib.angel_h4_mc();
	this.instance_1.setTransform(5,-90.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// animation
	this.instance_2 = new lib.angel_hand1_mc();
	this.instance_2.setTransform(-22.4,20.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:25.3,x:-17.9,y:18.6},29).wait(1));

	// animation
	this.instance_3 = new lib.angel_body1_mc();
	this.instance_3.setTransform(17.9,85.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-19.7,x:56,y:81.6},29).wait(1));

	// animation
	this.instance_4 = new lib.angel_hand1_mc();
	this.instance_4.setTransform(51.6,18.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({skewX:-64.7,skewY:115.3,x:66.4,y:-12.1},29).wait(1));

	// animation
	this.instance_5 = new lib.angel_wind3_mc();
	this.instance_5.setTransform(29.8,8.5,0.733,1,0,0,180,32.5,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({skewX:-34.7,skewY:145.3,x:41.1,y:4.8},29).wait(1));

	// animation
	this.instance_6 = new lib.angel_wind3_mc();
	this.instance_6.setTransform(7.3,7.3,1,1,-30,0,0,32.5,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-19.7,x:19.5,y:11.3},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.9,-202.8,239,397.1);
p.frameBounds = [rect, new cjs.Rectangle(-118.9,-202.8,239,397.5), new cjs.Rectangle(-118.9,-202.8,239,398.1), new cjs.Rectangle(-118.9,-202.8,239,398.6), new cjs.Rectangle(-118.9,-202.8,239,398.9), new cjs.Rectangle(-118.9,-202.8,239,399.4), new cjs.Rectangle(-118.9,-202.8,239,399.9), new cjs.Rectangle(-118.9,-202.8,239,400.4), new cjs.Rectangle(-118.9,-202.8,239,400.6), new cjs.Rectangle(-118.9,-202.8,239,401), new cjs.Rectangle(-118.9,-202.8,239,401.4), new cjs.Rectangle(-118.9,-202.8,239,401.7), new cjs.Rectangle(-118.9,-202.8,239,402), new cjs.Rectangle(-118.9,-202.8,239,402.4), new cjs.Rectangle(-118.9,-202.8,239,402.7), new cjs.Rectangle(-118.9,-202.8,239,403), new cjs.Rectangle(-118.9,-202.8,239,403.3), new cjs.Rectangle(-118.9,-202.8,239,403.6), new cjs.Rectangle(-118.9,-202.8,239,403.8), new cjs.Rectangle(-118.9,-202.8,239.9,404), new cjs.Rectangle(-118.9,-202.8,242.5,404.2), new cjs.Rectangle(-118.9,-202.8,244.9,404.4), new cjs.Rectangle(-118.9,-202.8,247.1,404.5), new cjs.Rectangle(-118.9,-202.8,249.6,404.6), new cjs.Rectangle(-118.9,-202.8,252.1,404.8), new cjs.Rectangle(-118.9,-202.8,254.5,404.9), new cjs.Rectangle(-118.9,-202.8,256.6,405), new cjs.Rectangle(-118.9,-202.8,259,405.1), new cjs.Rectangle(-118.9,-202.8,261.4,405.2), new cjs.Rectangle(-118.9,-202.8,263.8,405.3)];


(lib.angel3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

	// animation
	this.instance = new lib.angel_hair_mc();
	this.instance.setTransform(0,-87.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-4.3,x:40.7,y:-86.2},29).wait(15).to({rotation:0,x:0,y:-87.1},25).wait(1));

	// animation
	this.instance_1 = new lib.angel_h3_mc();
	this.instance_1.setTransform(5,-90.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-4.3,x:45.4,y:-89.7},29).wait(15).to({rotation:0,x:5,y:-90.2},25).wait(1));

	// animation
	this.instance_2 = new lib.angel_hand1_mc();
	this.instance_2.setTransform(-22.4,20.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:10.7,x:8.9,y:15.4},29).wait(15).to({rotation:0,x:-22.4,y:20.6},25).wait(1));

	// animation
	this.instance_3 = new lib.angel_body2_mc();
	this.instance_3.setTransform(17.9,85.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:10.7,x:36.3,y:86.9},29).wait(15).to({rotation:0,x:17.9,y:85.8},25).wait(1));

	// animation
	this.instance_4 = new lib.angel_hand1_mc();
	this.instance_4.setTransform(51.6,18.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({skewX:10.7,skewY:190.7,x:81.9,y:27.1},29).wait(15).to({skewX:0,skewY:180,x:51.6,y:18.5},25).wait(1));

	// animation
	this.instance_5 = new lib.leg1_mc();
	this.instance_5.setTransform(8.6,71.1,1,1,5.7,0,0,0.1,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:-55.4,rotation:50.4,x:45.2,y:86},29).wait(15).to({regY:-55.5,rotation:5.7,x:8.6,y:71.1},25).wait(1));

	// animation
	this.instance_6 = new lib.leg1_mc();
	this.instance_6.setTransform(8.6,71.1,1,1,-17.4,0,0,0.1,-55.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-1.5,x:30.5,y:71.2},29).wait(15).to({rotation:-17.4,x:8.6,y:71.1},25).wait(1));

	// animation
	this.instance_7 = new lib.angel_wind2_mc();
	this.instance_7.setTransform(29.8,8.5,0.733,1,0,0,180,32.5,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({skewX:10.7,skewY:190.7,x:62.4,y:13.2},29).wait(15).to({skewX:0,skewY:180,x:29.8,y:8.5},25).wait(1));

	// animation
	this.instance_8 = new lib.angel_wind2_mc();
	this.instance_8.setTransform(7.3,7.3,1,1,-30,0,0,32.5,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-19.3,x:40.4,y:7.8},29).wait(15).to({rotation:-30,x:7.3,y:7.3},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.9,-202.8,239,386.1);
p.frameBounds = [rect, new cjs.Rectangle(-117.6,-202.8,239.2,386.7), new cjs.Rectangle(-116.7,-203.3,240,387.8), new cjs.Rectangle(-115.3,-203.3,240.1,388.3), new cjs.Rectangle(-114.4,-203.8,240.9,389.2), new cjs.Rectangle(-113.1,-203.8,241.1,389.5), new cjs.Rectangle(-112.1,-204.2,241.9,390.2), new cjs.Rectangle(-111.2,-204.6,242.7,390.8), new cjs.Rectangle(-109.8,-204.6,242.8,391), new cjs.Rectangle(-108.9,-205.1,243.6,391.5), new cjs.Rectangle(-107.6,-205.1,243.7,391.4), new cjs.Rectangle(-106.6,-205.6,244.5,391.8), new cjs.Rectangle(-105.6,-206,245.3,392), new cjs.Rectangle(-104.3,-206.1,245.5,391.7), new cjs.Rectangle(-103.3,-206.4,246.2,391.7), new cjs.Rectangle(-102,-206.5,246.4,391.3), new cjs.Rectangle(-101,-206.9,247.2,391.2), new cjs.Rectangle(-100,-207.3,248,391), new cjs.Rectangle(-98.7,-207.4,248.1,390.9), new cjs.Rectangle(-97.7,-207.8,248.9,391.3), new cjs.Rectangle(-96.4,-207.9,249,391.3), new cjs.Rectangle(-95.4,-208.3,249.7,391.7), new cjs.Rectangle(-94.5,-208.6,250.5,392), new cjs.Rectangle(-93.1,-208.7,250.6,392), new cjs.Rectangle(-92.1,-209.1,251.4,392.3), new cjs.Rectangle(-90.8,-209.1,251.5,392.2), new cjs.Rectangle(-89.8,-209.6,252.3,392.5), new cjs.Rectangle(-88.9,-210,253,392.8), new cjs.Rectangle(-87.5,-210.1,253.2,392.8), new cjs.Rectangle(-86.6,-210.5,254.1,393.1), rect=new cjs.Rectangle(-86.5,-210.4,253.9,392.9), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-86.6,-210.5,254.1,393.1), new cjs.Rectangle(-87.8,-210,253.2,392.7), new cjs.Rectangle(-88.9,-209.6,252.4,392.4), new cjs.Rectangle(-90.4,-209.6,252.2,392.5), new cjs.Rectangle(-91.6,-209.1,251.5,392.2), new cjs.Rectangle(-92.9,-208.7,250.7,392), new cjs.Rectangle(-94.4,-208.7,250.5,392), new cjs.Rectangle(-95.6,-208.2,249.7,391.6), new cjs.Rectangle(-96.7,-207.8,248.9,391.3), new cjs.Rectangle(-98.3,-207.8,248.8,391.3), new cjs.Rectangle(-99.5,-207.3,248,390.8), new cjs.Rectangle(-100.7,-206.9,247.2,390.9), new cjs.Rectangle(-101.9,-206.5,246.4,391.2), new cjs.Rectangle(-103.4,-206.4,246.2,391.7), new cjs.Rectangle(-104.6,-206,245.4,391.7), new cjs.Rectangle(-105.8,-205.6,244.6,391.6), new cjs.Rectangle(-107.3,-205.5,244.5,391.7), new cjs.Rectangle(-108.5,-205.1,243.6,391.3), new cjs.Rectangle(-109.6,-204.7,242.8,390.9), new cjs.Rectangle(-111.2,-204.6,242.7,390.8), new cjs.Rectangle(-112.4,-204.2,241.8,390), new cjs.Rectangle(-113.5,-203.7,241,389.3), new cjs.Rectangle(-115.1,-203.7,240.8,388.9), new cjs.Rectangle(-116.2,-203.3,240,387.9), new cjs.Rectangle(-117.4,-202.8,239.2,386.8), new cjs.Rectangle(-118.9,-202.8,239,386.1)];


(lib.angel1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// angel_hair
	this.instance = new lib.angel_hair_mc();
	this.instance.setTransform(0,-87.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// angel_h1
	this.instance_1 = new lib.angel_h1_mc();
	this.instance_1.setTransform(5,-90.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// angel_hand1
	this.instance_2 = new lib.angel_hand1_mc();
	this.instance_2.setTransform(-22.4,20.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// angel_body1
	this.instance_3 = new lib.angel_body1_mc();
	this.instance_3.setTransform(17.9,85.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// angel_hand1
	this.instance_4 = new lib.angel_hand1_mc();
	this.instance_4.setTransform(51.6,18.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// angel_wind1
	this.instance_5 = new lib.angel_wind1_mc();
	this.instance_5.setTransform(29.8,8.5,0.733,1,0,0,180,32.5,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// angel_wind1
	this.instance_6 = new lib.angel_wind1_mc();
	this.instance_6.setTransform(7.3,7.3,1,1,-30,0,0,32.5,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.9,-202.8,239,397.1);
p.frameBounds = [rect];


(lib.CurtainScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.curtain_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1095,-5,1210,610);
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
p.nominalBounds = rect = new cjs.Rectangle(-8,-8,16,16);
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
p.nominalBounds = rect = new cjs.Rectangle(-75,-63,150,125);
p.frameBounds = [rect];


(lib.blinking_light_3_3_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.blinking_light_2_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16,-16,32,32);
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
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
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


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.next_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.next_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

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


(lib.done_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.done_0_mc();
	this.instance.setTransform(0,0,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-90,-90,180,180)];


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
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,780);
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


(lib.OrientationLockScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// screen
	this.screen_mc = new lib.orientation_lock_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-10,1200,620);
p.frameBounds = [rect];


(lib.object_8_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{successfully:1});

	// graph
	this.instance = new lib.bomb_mc();

	this.instance_1 = new lib.bomb_explosion_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-115,140,165);
p.frameBounds = [rect, new cjs.Rectangle(-75,-75,150,150)];


(lib.object_7_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"successfully":1});

	// graph
	this.instance = new lib.bomb_mc();

	this.instance_1 = new lib.bomb_explosion_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-115,140,165);
p.frameBounds = [rect, new cjs.Rectangle(-75,-75,150,150)];


(lib.object_6_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"successfully":1});

	// graph
	this.instance = new lib.bomb_mc();

	this.instance_1 = new lib.bomb_explosion_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-115,140,165);
p.frameBounds = [rect, new cjs.Rectangle(-75,-75,150,150)];


(lib.object_6_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"successfully":1});

	// graph
	this.instance = new lib.bomb_mc();

	this.instance_1 = new lib.bomb_explosion_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-115,140,165);
p.frameBounds = [rect, new cjs.Rectangle(-75,-75,150,150)];


(lib.object_5_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"successfully":1});

	// graph
	this.instance = new lib.bomb_mc();

	this.instance_1 = new lib.bomb_explosion_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-115,140,165);
p.frameBounds = [rect, new cjs.Rectangle(-75,-75,150,150)];


(lib.object_5_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"successfully":1});

	// graph
	this.instance = new lib.bomb_mc();

	this.instance_1 = new lib.bomb_explosion_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-115,140,165);
p.frameBounds = [rect, new cjs.Rectangle(-75,-75,150,150)];


(lib.object_4_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"successfully":1});

	// graph
	this.instance = new lib.bomb_mc();

	this.instance_1 = new lib.bomb_explosion_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-115,140,165);
p.frameBounds = [rect, new cjs.Rectangle(-75,-75,150,150)];


(lib.object_4_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"successfully":1});

	// graph
	this.instance = new lib.bomb_mc();

	this.instance_1 = new lib.bomb_explosion_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-115,140,165);
p.frameBounds = [rect, new cjs.Rectangle(-75,-75,150,150)];


(lib.object_3_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"successfully":1});

	// graph
	this.instance = new lib.bomb_mc();

	this.instance_1 = new lib.bomb_explosion_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-115,140,165);
p.frameBounds = [rect, new cjs.Rectangle(-75,-75,150,150)];


(lib.object_3_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"successfully":1});

	// graph
	this.instance = new lib.bomb_mc();

	this.instance_1 = new lib.bomb_explosion_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-115,140,165);
p.frameBounds = [rect, new cjs.Rectangle(-75,-75,150,150)];


(lib.object_2_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"successfully":1});

	// graph
	this.instance = new lib.bomb_mc();

	this.instance_1 = new lib.bomb_explosion_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-115,140,165);
p.frameBounds = [rect, new cjs.Rectangle(-75,-75,150,150)];


(lib.object_2_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"successfully":1});

	// graph
	this.instance = new lib.bomb_mc();

	this.instance_1 = new lib.bomb_explosion_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-115,140,165);
p.frameBounds = [rect, new cjs.Rectangle(-75,-75,150,150)];


(lib.hero_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.angel10_mc();
	this.instance.setTransform(-10,-78,0.5,0.5,0,0,0,0.6,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.8,-177.3,119.5,193.1);
p.frameBounds = [rect];


(lib.hero_5lad_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.angel14_mc();
	this.instance.setTransform(-10,-78,0.5,0.5,0,0,0,0.6,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.8,-177.3,119.5,179.4);
p.frameBounds = [rect];


(lib.hero_5down_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.angel12_mc();
	this.instance.setTransform(-10,-78,0.5,0.5,0,0,0,0.6,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.8,-177.3,119.5,194.5);
p.frameBounds = [rect];


(lib.hero_4up_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.angel11_mc();
	this.instance.setTransform(-10,-78,0.5,0.5,0,0,0,0.6,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.8,-177.3,119.5,193.1);
p.frameBounds = [rect];


(lib.hero_3walk_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.angel9_mc();
	this.instance.setTransform(-10,-78,0.5,0.5,0,0,0,0.6,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.8,-177.3,119.5,193.1);
p.frameBounds = [rect];


(lib.hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.angel3_mc();
	this.instance.setTransform(-10,-63,0.5,0.5,0,0,0,0.6,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.8,-162.3,119.5,193);
p.frameBounds = [rect];


(lib.cartoon_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.angel7_mc();
	this.instance.setTransform(-3.2,-126.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:9.8,y:42.6},29).wait(1));

	// animation
	this.instance_1 = new lib.background_с3_img();
	this.instance_1.setTransform(-600,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-300,1200,600);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cartoon_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.white_mc();
	this.instance.alpha = 0.5;
	this.instance._off = true;

	this.instance_1 = new lib.luch_mc();
	this.instance_1.setTransform(-62.6,-32);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({alpha:1},1).to({_off:true},1).wait(3).to({_off:false,alpha:0.5},0).to({alpha:1},1).to({_off:true},1).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({_off:false},0).to({alpha:1},12).wait(40).to({alpha:0.012},8).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.angel5_mc();
	this.instance_2.setTransform(-97.5,25.5,1,1,0,0,0,0,0.3);

	this.instance_3 = new lib.angel4_mc();
	this.instance_3.setTransform(-97.5,25.5,1,1,0,0,0,0,0.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},28).to({state:[{t:this.instance_3}]},32).to({state:[{t:this.instance_3}]},20).to({state:[{t:this.instance_3}]},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(28).to({_off:false},0).to({x:-164.5,y:-205.5},32).to({regX:-0.1,rotation:-7.7,x:-234.6,y:-467.5,alpha:0.012},20).wait(10));

	// animation
	this.instance_4 = new lib.flash_mc();
	this.instance_4.setTransform(101,-31);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({alpha:1},3).to({alpha:0.012},2).to({alpha:1},3).to({_off:true},1).wait(72));

	// animation
	this.instance_5 = new lib.satan6_mc();
	this.instance_5.setTransform(127.3,36);

	this.instance_6 = new lib.satan5_mc();
	this.instance_6.setTransform(127.3,36);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},28).to({state:[{t:this.instance_6}]},32).to({state:[{t:this.instance_6}]},1).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(28).to({_off:false},0).to({rotation:38,x:268.3,y:457.9},32).wait(30));

	// animation
	this.instance_7 = new lib.background_с1_3_mc();
	this.instance_7.setTransform(308.5,217);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(18).to({_off:false},0).to({x:639.5},23).wait(49));

	// animation
	this.instance_8 = new lib.background_с1_2_mc();
	this.instance_8.setTransform(-292.5,217);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(18).to({_off:false},0).to({x:-618.5},23).wait(49));

	// animation
	this.instance_9 = new lib.background_с1_1_mc();
	this.instance_9.setTransform(0,221);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(18).to({_off:false},0).wait(72));

	// animation
	this.instance_10 = new lib.background_с1_img();
	this.instance_10.setTransform(-600,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-300,1200,600);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-600,-300,1201,608), new cjs.Rectangle(-614.1,-300,1229.6,608), new cjs.Rectangle(-628.3,-300,1258.2,608), new cjs.Rectangle(-642.5,-300,1286.7,608), new cjs.Rectangle(-656.7,-300,1315.3,608), new cjs.Rectangle(-670.8,-300,1343.8,608), new cjs.Rectangle(-685,-300,1372.4,608), new cjs.Rectangle(-699.2,-300,1401,608), new cjs.Rectangle(-713.4,-300,1429.6,608), new cjs.Rectangle(-727.5,-300,1458.1,608), new cjs.Rectangle(-741.7,-300.5,1486.7,608.5), new cjs.Rectangle(-755.9,-300.5,1515.2,608.5), new cjs.Rectangle(-770.1,-300.5,1543.8,608.5), new cjs.Rectangle(-784.2,-300.5,1572.4,608.5), new cjs.Rectangle(-798.4,-300.5,1601,608.5), new cjs.Rectangle(-812.6,-300.5,1629.5,608.5), new cjs.Rectangle(-826.8,-300.5,1658.1,608.5), new cjs.Rectangle(-840.9,-300.5,1686.6,615.1), new cjs.Rectangle(-855.1,-300.5,1715.2,628.3), new cjs.Rectangle(-869.3,-300.5,1743.8,641.5), new cjs.Rectangle(-883.5,-300.5,1772.4,654.7), new cjs.Rectangle(-897.6,-300.5,1800.9,667.7), new cjs.Rectangle(-911.8,-300.5,1829.5,680.6), new cjs.Rectangle(-926,-300.5,1858,693.6), new cjs.Rectangle(-926,-300.5,1858,706.4), new cjs.Rectangle(-926,-300.5,1858,719), new cjs.Rectangle(-926,-300.5,1858,731.8), new cjs.Rectangle(-926,-300.5,1858,744.3), new cjs.Rectangle(-926,-307.5,1858,763.8), new cjs.Rectangle(-926,-314.7,1858,783.3), new cjs.Rectangle(-926,-321.9,1858,803.1), new cjs.Rectangle(-926,-329.2,1858,822.4), new cjs.Rectangle(-926,-336.4,1858,841.8), new cjs.Rectangle(-926,-343.6,1858,861.1), new cjs.Rectangle(-926,-350.8,1858,880.4), new cjs.Rectangle(-926,-358,1858,899.6), new cjs.Rectangle(-926,-365.3,1858,918.6), new cjs.Rectangle(-926,-372.5,1858,937.6), new cjs.Rectangle(-926,-379.7,1858,956.6), new cjs.Rectangle(-926,-386.9,1858,975.5), new cjs.Rectangle(-926,-394.1,1858,994.2), new cjs.Rectangle(-926,-401.4,1858,1012.9), new cjs.Rectangle(-926,-408.6,1858,1031.8), new cjs.Rectangle(-926,-422.2,1858,1045.4), new cjs.Rectangle(-926,-436.3,1858,1059.5), new cjs.Rectangle(-926,-450,1858,1073.2), new cjs.Rectangle(-926,-464,1858,1087.2), new cjs.Rectangle(-926,-477.7,1858,1100.9), new cjs.Rectangle(-926,-491.7,1858,1114.9), new cjs.Rectangle(-926,-505.4,1858,1128.6), new cjs.Rectangle(-926,-519.3,1858,1142.5), new cjs.Rectangle(-926,-533,1858,1156.2), new cjs.Rectangle(-926,-546.9,1858,1170.1), new cjs.Rectangle(-926,-560.9,1858,1184.1), new cjs.Rectangle(-926,-574.5,1858,1197.7), new cjs.Rectangle(-926,-588.4,1858,1211.6), new cjs.Rectangle(-926,-602.1,1858,1225.3), new cjs.Rectangle(-926,-616,1858,1239.2), new cjs.Rectangle(-926,-629.6,1858,1252.8), new cjs.Rectangle(-926,-643.5,1858,1266.7), new cjs.Rectangle(-926,-657,1858,1280.2), new cjs.Rectangle(-926,-670.9,1858,1294.1), rect=new cjs.Rectangle(-926,-684.9,1858,1308.1), rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cartoon_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.heart_prize_mc();
	this.instance.setTransform(21.4,24.1,0.678,0.678);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({scaleX:0.45,scaleY:0.45,x:-44.6,y:46.1},10).to({scaleX:0.21,scaleY:0.21,x:-64.6,y:38.1,alpha:0.012},10).to({_off:true},1).wait(20));

	// animation
	this.instance_1 = new lib.satan4_mc();
	this.instance_1.setTransform(127.3,36);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// animation
	this.instance_2 = new lib.angel5_mc();
	this.instance_2.setTransform(-97.5,25.5,1,1,0,0,0,0,0.3);

	this.instance_3 = new lib.angel6_mc();
	this.instance_3.setTransform(-97.5,25.5,1,1,0,0,0,0,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},80).wait(20));

	// animation
	this.instance_4 = new lib.background_с1_img();
	this.instance_4.setTransform(-600,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-300,1200,600);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cartoon_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.satan1_mc();
	this.instance.setTransform(127.3,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70));

	// animation
	this.instance_1 = new lib.angel1_mc();
	this.instance_1.setTransform(-270,-519.7,1,1,0,0,0,0,0.3);

	this.instance_2 = new lib.angel5_mc();
	this.instance_2.setTransform(-97.5,25.5,1,1,0,0,0,0,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},21).to({state:[{t:this.instance_1}]},29).to({state:[{t:this.instance_2}]},19).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({x:-97.5,y:25.5},29).to({_off:true},19).wait(1));

	// animation
	this.instance_3 = new lib.background_с1_img();
	this.instance_3.setTransform(-600,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-600,-722.8,1200,1022.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-600,-704,1200,1004), new cjs.Rectangle(-600,-685.2,1200,985.2), new cjs.Rectangle(-600,-666.4,1200,966.4), new cjs.Rectangle(-600,-647.6,1200,947.6), new cjs.Rectangle(-600,-628.8,1200,928.8), new cjs.Rectangle(-600,-610,1200,910), new cjs.Rectangle(-600,-591.2,1200,891.2), new cjs.Rectangle(-600,-572.4,1200,872.4), new cjs.Rectangle(-600,-553.6,1200,853.6), new cjs.Rectangle(-600,-534.8,1200,834.8), new cjs.Rectangle(-600,-516,1200,816), new cjs.Rectangle(-600,-497.2,1200,797.2), new cjs.Rectangle(-600,-478.4,1200,778.4), new cjs.Rectangle(-600,-459.6,1200,759.6), new cjs.Rectangle(-600,-440.8,1200,740.8), new cjs.Rectangle(-600,-422,1200,722), new cjs.Rectangle(-600,-403.2,1200,703.2), new cjs.Rectangle(-600,-384.4,1200,684.4), new cjs.Rectangle(-600,-365.6,1200,665.6), new cjs.Rectangle(-600,-346.8,1200,646.8), new cjs.Rectangle(-600,-328,1200,628), new cjs.Rectangle(-600,-309.2,1200,609.2), rect=new cjs.Rectangle(-600,-300,1200,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(-66,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({x:-64,y:-98},0).wait(1).to({x:-66,y:-100},0).wait(4).to({x:-65,y:-95},0).wait(1).to({x:-66,y:-100},0).wait(2));

	// graph
	this.instance_1 = new lib.title_en_img();
	this.instance_1.setTransform(-160,-140);

	this.instance_2 = new lib.title_ru_img();
	this.instance_2.setTransform(-160,-140);

	this.instance_3 = new lib.title_de_img();
	this.instance_3.setTransform(-160,-140);

	this.instance_4 = new lib.title_fr_img();
	this.instance_4.setTransform(-160,-140);

	this.instance_5 = new lib.title_it_img();
	this.instance_5.setTransform(-160,-140);

	this.instance_6 = new lib.title_es_img();
	this.instance_6.setTransform(-160,-140);

	this.instance_7 = new lib.title_pt_img();
	this.instance_7.setTransform(-160,-140);

	this.instance_8 = new lib.title_tr_img();
	this.instance_8.setTransform(-160,-140);

	this.instance_9 = new lib.title_ja_img();
	this.instance_9.setTransform(-160,-140);

	this.instance_10 = new lib.title_hi_img();
	this.instance_10.setTransform(-160,-140);

	this.instance_11 = new lib.title_ar_img();
	this.instance_11.setTransform(-160,-140);

	this.instance_12 = new lib.title_id_img();
	this.instance_12.setTransform(-160,-140);

	this.instance_13 = new lib.title_zh_img();
	this.instance_13.setTransform(-160,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-140,320,280);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_location_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.heart_prize_mc();
	this.instance.setTransform(725,190,0.173,0.173);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(130).to({_off:false},0).to({scaleX:0.53,scaleY:0.53,x:724,y:30,alpha:0.012},30).to({_off:true},1).wait(9));

	// animation
	this.instance_1 = new lib.satan1_mc();
	this.instance_1.setTransform(751.3,214,0.5,0.5,0,0,0,-0.2,0);

	this.instance_2 = new lib.satan3_mc();
	this.instance_2.setTransform(751.3,214,0.5,0.5,0,0,0,-0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},100).wait(70));

	// animation
	this.instance_3 = new lib.hero_mc();
	this.instance_3.setTransform(50,288);

	this.instance_4 = new lib.hero_3walk_mc();
	this.instance_4.setTransform(50,288);
	this.instance_4._off = true;

	this.instance_5 = new lib.hero_5lad_mc();
	this.instance_5.setTransform(133,300);
	this.instance_5._off = true;

	this.instance_6 = new lib.hero_2_mc();
	this.instance_6.setTransform(700,273);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},7).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},21).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},22).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},12).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},32).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},69).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({x:133},7).to({_off:true,y:300},1).wait(21).to({_off:false,y:138.4},1).to({x:382},22).to({_off:true,y:156.4},1).wait(12).to({_off:false,y:288.4},1).to({x:700,y:288},32).to({_off:true,y:273},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},1).to({y:154.4},21).to({_off:true,y:138.4},1).wait(22).to({_off:false,x:382,y:156.4},1).to({y:301.4},12).to({_off:true,y:288.4},1).wait(103));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(99).to({_off:false},1).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.8,110.7,819.8,193);
p.frameBounds = [rect, rect, new cjs.Rectangle(-7.9,110.6,808,193), new cjs.Rectangle(3.9,110.6,796.2,193), new cjs.Rectangle(15.7,110.6,784.3,193), new cjs.Rectangle(27.6,110.6,772.4,193), new cjs.Rectangle(39.5,110.6,760.6,193), new cjs.Rectangle(51.3,110.6,748.7,193), new cjs.Rectangle(63.2,110.7,736.8,193), new cjs.Rectangle(63.2,122.7,736.8,179.4), new cjs.Rectangle(63.2,115.7,736.9,186.4), new cjs.Rectangle(63.2,108.8,736.9,193.3), new cjs.Rectangle(63.2,101.8,736.9,200.2), new cjs.Rectangle(63.2,94.9,736.9,207.2), new cjs.Rectangle(63.2,87.9,736.9,214.1), new cjs.Rectangle(63.2,81,736.9,221), new cjs.Rectangle(63.2,74.1,736.9,228), new cjs.Rectangle(63.2,67.1,736.9,234.9), new cjs.Rectangle(63.2,60.2,736.9,241.8), new cjs.Rectangle(63.2,53.3,736.9,248.8), new cjs.Rectangle(63.2,46.3,736.9,255.7), new cjs.Rectangle(63.2,39.4,736.9,262.7), new cjs.Rectangle(63.2,32.5,736.9,269.6), new cjs.Rectangle(63.2,25.5,736.9,276.5), new cjs.Rectangle(63.2,18.6,736.9,283.5), new cjs.Rectangle(63.2,11.7,736.9,290.4), new cjs.Rectangle(63.2,4.7,736.9,297.3), new cjs.Rectangle(63.2,-2.2,736.9,304.2), new cjs.Rectangle(63.2,-9.1,736.9,311.2), new cjs.Rectangle(63.2,-16,736.9,318.1), new cjs.Rectangle(63.2,-23,736.8,325), new cjs.Rectangle(63.2,-39,736.8,341), new cjs.Rectangle(74.5,-39,725.6,341), new cjs.Rectangle(85.8,-39,714.2,341), new cjs.Rectangle(97.1,-39,702.9,341), new cjs.Rectangle(108.4,-39,691.6,341), new cjs.Rectangle(119.8,-39,680.3,341), new cjs.Rectangle(131.1,-39,669,341), new cjs.Rectangle(142.4,-39,657.6,341), new cjs.Rectangle(153.7,-39,646.3,341), new cjs.Rectangle(165,-39,635,341), new cjs.Rectangle(176.4,-39,623.7,341), new cjs.Rectangle(187.7,-39,612.4,341), new cjs.Rectangle(199,-39,601.1,341), new cjs.Rectangle(210.3,-39,589.7,341), new cjs.Rectangle(221.6,-39,578.4,341), new cjs.Rectangle(232.9,-39,567.1,341), new cjs.Rectangle(244.3,-39,555.8,341), new cjs.Rectangle(255.6,-39,544.5,341), new cjs.Rectangle(266.9,-39,533.1,341), new cjs.Rectangle(278.2,-39,521.8,341), new cjs.Rectangle(289.5,-39,510.5,341), new cjs.Rectangle(300.9,-39,499.2,341), new cjs.Rectangle(312.2,-39,487.8,341), new cjs.Rectangle(312.2,-21,487.8,323), new cjs.Rectangle(312.2,-8.9,487.9,310.9), new cjs.Rectangle(312.2,3.1,487.9,298.9), new cjs.Rectangle(312.2,15.2,487.9,286.8), new cjs.Rectangle(312.2,27.3,487.9,274.7), new cjs.Rectangle(312.2,39.4,487.9,262.7), new cjs.Rectangle(312.2,51.5,487.9,250.6), new cjs.Rectangle(312.2,63.6,487.9,238.5), new cjs.Rectangle(312.2,75.6,487.9,226.4), new cjs.Rectangle(312.2,87.7,487.9,214.3), new cjs.Rectangle(312.2,99.8,487.9,202.2), new cjs.Rectangle(312.2,111.9,487.9,190.2), new cjs.Rectangle(312.2,124,487.8,179.4), new cjs.Rectangle(312.2,111,487.8,193.1), new cjs.Rectangle(322.1,111,477.9,193.1), new cjs.Rectangle(332,111,468,193.1), new cjs.Rectangle(342,110.9,458.1,193), new cjs.Rectangle(351.9,110.9,448.1,193), new cjs.Rectangle(361.9,110.9,438.2,193), new cjs.Rectangle(371.8,110.9,428.3,193), new cjs.Rectangle(381.7,110.9,418.3,193), new cjs.Rectangle(391.7,110.9,408.4,193), new cjs.Rectangle(401.6,110.9,398.5,193), new cjs.Rectangle(411.5,110.9,388.5,193), new cjs.Rectangle(421.5,110.9,378.6,193), new cjs.Rectangle(431.4,110.8,368.6,193.1), new cjs.Rectangle(441.3,110.8,358.7,193.1), new cjs.Rectangle(451.3,110.8,348.8,193.1), new cjs.Rectangle(461.2,110.8,338.8,193.1), new cjs.Rectangle(471.2,110.8,328.9,193.1), new cjs.Rectangle(481.1,110.8,319,193.1), new cjs.Rectangle(491,110.8,309,193.1), new cjs.Rectangle(501,110.8,299.1,193.1), new cjs.Rectangle(510.9,110.8,289.2,193.1), new cjs.Rectangle(520.8,110.7,279.2,193.1), new cjs.Rectangle(530.8,110.7,269.3,193.1), new cjs.Rectangle(540.7,110.7,259.3,193.1), new cjs.Rectangle(550.6,110.7,249.4,193.1), new cjs.Rectangle(560.6,110.7,239.5,193.1), new cjs.Rectangle(570.5,110.7,229.5,193), new cjs.Rectangle(580.4,110.7,219.6,193), new cjs.Rectangle(590.4,110.7,209.7,193), new cjs.Rectangle(600.3,110.7,199.7,193), new cjs.Rectangle(610.3,110.6,189.8,193), new cjs.Rectangle(620.2,110.6,179.9,193), rect=new cjs.Rectangle(630.2,110.7,169.9,193), rect, rect=new cjs.Rectangle(630.1,110.6,169.9,193), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(630.1,106.1,169.9,197.5), new cjs.Rectangle(630.1,100,169.9,203.6), new cjs.Rectangle(630.1,94,169.9,209.7), new cjs.Rectangle(630.1,87.9,169.9,215.8), new cjs.Rectangle(630.1,81.8,169.9,221.9), new cjs.Rectangle(630.1,75.7,169.9,228), new cjs.Rectangle(630.1,69.6,169.9,234.1), new cjs.Rectangle(630.1,63.5,169.9,240.2), new cjs.Rectangle(630.1,57.5,169.9,246.2), new cjs.Rectangle(630.1,51.4,169.9,252.3), new cjs.Rectangle(630.1,45.3,169.9,258.4), new cjs.Rectangle(630.1,39.2,169.9,264.5), new cjs.Rectangle(630.1,33.1,169.9,270.5), new cjs.Rectangle(630.1,27,169.9,276.7), new cjs.Rectangle(630.1,21,169.9,282.7), new cjs.Rectangle(630.1,14.9,169.9,288.8), new cjs.Rectangle(630.1,8.8,169.9,294.8), new cjs.Rectangle(630.1,2.8,169.9,300.9), new cjs.Rectangle(630.1,-3.4,169.9,307), rect=new cjs.Rectangle(630.1,110.6,169.9,193), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(630.2,110.7,169.9,193)];


(lib.animation_location_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.heart_prize_mc();
	this.instance.setTransform(725,96,0.173,0.173);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(130).to({_off:false},0).to({scaleX:0.53,scaleY:0.53,x:724,y:-3.4,alpha:0.012},30).to({_off:true},1).wait(9));

	// animation
	this.instance_1 = new lib.satan1_mc();
	this.instance_1.setTransform(751.3,118,0.5,0.5,0,0,0,-0.2,0);

	this.instance_2 = new lib.satan3_mc();
	this.instance_2.setTransform(751.3,118,0.5,0.5,0,0,0,-0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},100).wait(70));

	// animation
	this.instance_3 = new lib.hero_mc();
	this.instance_3.setTransform(687,389,0.8,0.8,0,0,180);

	this.instance_4 = new lib.hero_3walk_mc();
	this.instance_4.setTransform(686,389,0.8,0.8,0,0,180);
	this.instance_4._off = true;

	this.instance_5 = new lib.hero_5lad_mc();
	this.instance_5.setTransform(222,389,0.8,0.8,0,0,180);
	this.instance_5._off = true;

	this.instance_6 = new lib.hero_2_mc();
	this.instance_6.setTransform(700,177);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},41).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},12).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_4}]},36).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},69).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({x:222},41).to({_off:true},1).wait(12).to({_off:false,skewY:0,x:221.9,y:239},1).to({x:243.9},3).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1,x:310,y:190},4).to({regX:0,regY:0,x:700,y:192},36).to({_off:true,y:177},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(42).to({_off:false},1).to({y:259},12).to({_off:true,skewY:0,x:221.9,y:239},1).wait(114));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(99).to({_off:false},1).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(647.2,29.9,152.8,371.6);
p.frameBounds = [rect, new cjs.Rectangle(646.3,29.9,153.8,371.6), new cjs.Rectangle(634.9,29.9,165.1,371.5), new cjs.Rectangle(623.6,29.9,176.5,371.5), new cjs.Rectangle(612.3,29.9,187.8,371.5), new cjs.Rectangle(601,29.9,199,371.5), new cjs.Rectangle(589.6,29.9,210.4,371.5), new cjs.Rectangle(578.3,29.9,221.7,371.5), new cjs.Rectangle(567,29.9,233,371.5), new cjs.Rectangle(555.7,29.9,244.4,371.5), new cjs.Rectangle(544.4,29.9,255.7,371.5), new cjs.Rectangle(533.1,29.9,267,371.5), new cjs.Rectangle(521.7,29.9,278.3,371.5), new cjs.Rectangle(510.4,29.9,289.6,371.5), new cjs.Rectangle(499.1,29.9,300.9,371.5), new cjs.Rectangle(487.8,29.9,312.3,371.5), new cjs.Rectangle(476.5,29.9,323.6,371.5), new cjs.Rectangle(465.2,29.9,334.9,371.5), new cjs.Rectangle(453.8,29.9,346.2,371.5), new cjs.Rectangle(442.5,29.9,357.5,371.5), new cjs.Rectangle(431.2,29.9,368.8,371.5), new cjs.Rectangle(419.9,29.9,380.2,371.5), new cjs.Rectangle(408.6,29.9,391.5,371.5), new cjs.Rectangle(397.2,29.9,402.8,371.5), new cjs.Rectangle(385.9,29.9,414.1,371.5), new cjs.Rectangle(374.6,29.9,425.4,371.5), new cjs.Rectangle(363.3,29.9,436.8,371.5), new cjs.Rectangle(352,29.9,448.1,371.5), new cjs.Rectangle(340.7,29.9,459.4,371.5), new cjs.Rectangle(329.3,29.9,470.7,371.5), new cjs.Rectangle(318,29.9,482,371.5), new cjs.Rectangle(306.7,29.9,493.3,371.5), new cjs.Rectangle(295.4,29.9,504.7,371.5), new cjs.Rectangle(284.1,29.9,516,371.5), new cjs.Rectangle(272.8,29.9,527.3,371.5), new cjs.Rectangle(261.4,29.9,538.6,371.5), new cjs.Rectangle(250.1,29.9,549.9,371.5), new cjs.Rectangle(238.8,29.9,561.2,371.5), new cjs.Rectangle(227.5,29.9,572.6,371.5), new cjs.Rectangle(216.2,29.9,583.9,371.5), new cjs.Rectangle(204.9,29.9,595.2,371.5), new cjs.Rectangle(193.5,29.9,606.5,371.5), new cjs.Rectangle(182.3,29.9,617.8,371.6), new cjs.Rectangle(182.3,29.9,617.8,360.6), new cjs.Rectangle(182.2,29.9,617.9,349.8), new cjs.Rectangle(182.2,29.9,617.9,339), new cjs.Rectangle(182.2,29.9,617.9,328.1), new cjs.Rectangle(182.2,29.9,617.9,317.3), new cjs.Rectangle(182.2,29.9,617.9,306.5), new cjs.Rectangle(182.2,29.9,617.9,295.6), new cjs.Rectangle(182.2,29.9,617.9,284.8), new cjs.Rectangle(182.2,29.9,617.9,274), new cjs.Rectangle(182.2,29.9,617.9,263.1), new cjs.Rectangle(182.2,29.9,617.9,252.2), new cjs.Rectangle(182.2,29.9,617.9,241.5), new cjs.Rectangle(182.3,29.9,617.8,230.6), new cjs.Rectangle(166,29.9,634,221.6), new cjs.Rectangle(173.3,29.9,626.7,221.5), new cjs.Rectangle(180.6,29.9,619.4,221.5), new cjs.Rectangle(188,29.9,612,221.6), new cjs.Rectangle(201,29.9,599.1,210.1), new cjs.Rectangle(214,29.9,586.1,198.6), new cjs.Rectangle(227.1,29.9,573,187.1), new cjs.Rectangle(240.1,12.6,560,193.5), new cjs.Rectangle(250.9,12.6,549.1,193.4), new cjs.Rectangle(261.7,12.7,538.3,193.4), new cjs.Rectangle(272.6,12.7,527.5,193.3), new cjs.Rectangle(283.4,12.8,516.6,193.3), new cjs.Rectangle(294.2,12.9,505.8,193.2), new cjs.Rectangle(305.1,12.9,495,193.1), new cjs.Rectangle(315.9,13,484.1,193.1), new cjs.Rectangle(326.7,13,473.3,193.1), new cjs.Rectangle(337.6,13.1,462.5,193), new cjs.Rectangle(348.4,13.1,451.6,193.1), new cjs.Rectangle(359.2,13.2,440.8,193), new cjs.Rectangle(370.1,13.2,430,193.1), new cjs.Rectangle(380.9,13.3,419.1,193.1), new cjs.Rectangle(391.7,13.4,408.3,193.1), new cjs.Rectangle(402.6,13.4,397.5,193), new cjs.Rectangle(413.4,13.5,386.6,193.1), new cjs.Rectangle(424.2,13.5,375.8,193.1), new cjs.Rectangle(435,13.5,365,193.1), new cjs.Rectangle(445.9,13.6,354.2,193), new cjs.Rectangle(456.7,13.6,343.4,193.1), new cjs.Rectangle(467.5,13.7,332.5,193), new cjs.Rectangle(478.4,13.7,321.7,193.1), new cjs.Rectangle(489.2,13.8,310.9,193), new cjs.Rectangle(500,13.9,300,193.1), new cjs.Rectangle(510.9,13.9,289.2,193), new cjs.Rectangle(521.7,14,278.4,193.1), new cjs.Rectangle(532.5,14,267.5,193.1), new cjs.Rectangle(543.4,14.1,256.7,193), new cjs.Rectangle(554.2,14.1,245.9,193.1), new cjs.Rectangle(565,14.2,235,193), new cjs.Rectangle(575.9,14.2,224.2,193.1), new cjs.Rectangle(586.7,14.3,213.4,193), new cjs.Rectangle(597.5,14.4,202.5,193.1), new cjs.Rectangle(608.4,14.4,191.6,193), new cjs.Rectangle(619.2,14.5,180.9,193.1), rect=new cjs.Rectangle(630.2,14.7,169.9,193), rect, rect=new cjs.Rectangle(630.1,14.6,169.9,193.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(630.1,12,169.9,195.7), new cjs.Rectangle(630.1,7.9,169.9,199.8), new cjs.Rectangle(630.1,3.9,169.9,203.8), new cjs.Rectangle(630.1,-0.2,169.9,207.9), new cjs.Rectangle(630.1,-4.2,169.9,211.9), new cjs.Rectangle(630.1,-8.3,169.9,216), new cjs.Rectangle(630.1,-12.3,169.9,220), new cjs.Rectangle(630.1,-16.5,169.9,224.2), new cjs.Rectangle(630.1,-20.5,169.9,228.2), new cjs.Rectangle(630.1,-24.5,169.9,232.2), new cjs.Rectangle(630.1,-28.6,169.9,236.3), new cjs.Rectangle(630.1,-32.6,169.9,240.3), new cjs.Rectangle(630.1,-36.8,169.9,244.5), rect=new cjs.Rectangle(630.1,14.6,169.9,193.1), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(630.2,14.7,169.9,193)];


(lib.animation_location_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.heart_prize_mc();
	this.instance.setTransform(724,195,0.173,0.173);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(130).to({_off:false},0).to({scaleX:0.53,scaleY:0.53,y:52,alpha:0.012},30).to({_off:true},1).wait(9));

	// animation
	this.instance_1 = new lib.satan1_mc();
	this.instance_1.setTransform(751.3,215,0.5,0.5,0,0,0,-0.2,0);

	this.instance_2 = new lib.satan3_mc();
	this.instance_2.setTransform(751.3,215,0.5,0.5,0,0,0,-0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},100).wait(70));

	// animation
	this.instance_3 = new lib.hero_mc();
	this.instance_3.setTransform(50,238);

	this.instance_4 = new lib.hero_3walk_mc();
	this.instance_4.setTransform(50,238);
	this.instance_4._off = true;

	this.instance_5 = new lib.hero_4up_mc();
	this.instance_5.setTransform(149,234);
	this.instance_5._off = true;

	this.instance_6 = new lib.hero_5down_mc();
	this.instance_6.setTransform(453,143);
	this.instance_6._off = true;

	this.instance_7 = new lib.hero_2_mc();
	this.instance_7.setTransform(700,274);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},13).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},17).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},28).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},18).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},18).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},69).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({x:143},13).to({_off:true,x:149,y:234},1).wait(17).to({_off:false,x:244,y:138},1).to({x:450},28).to({_off:true,x:453,y:143},1).wait(18).to({_off:false,x:594,y:288},1).to({x:700,y:289},18).to({_off:true,y:274},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},1).to({x:244,y:138},17).to({_off:true},1).wait(137));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(61).to({_off:false},1).to({x:594,y:288},18).to({_off:true},1).wait(89));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(99).to({_off:false},1).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.8,60.7,819.8,242.4);
p.frameBounds = [rect, rect, new cjs.Rectangle(-12.6,60.6,812.7,242.4), new cjs.Rectangle(-5.5,60.6,805.5,242.4), new cjs.Rectangle(1.6,60.6,798.4,242.4), new cjs.Rectangle(8.8,60.6,791.3,242.4), new cjs.Rectangle(15.9,60.6,784.1,242.4), new cjs.Rectangle(23.1,60.6,777,242.4), new cjs.Rectangle(30.2,60.6,769.8,242.4), new cjs.Rectangle(37.4,60.6,762.7,242.4), new cjs.Rectangle(44.5,60.6,755.5,242.4), new cjs.Rectangle(51.7,60.6,748.4,242.4), new cjs.Rectangle(58.8,60.6,741.2,242.4), new cjs.Rectangle(66,60.6,734.1,242.4), new cjs.Rectangle(73.2,60.7,726.9,242.4), new cjs.Rectangle(79.2,56.7,720.9,246.4), new cjs.Rectangle(84.7,51,715.3,252.1), new cjs.Rectangle(90.3,45.3,709.7,257.7), new cjs.Rectangle(95.9,39.7,704.2,263.4), new cjs.Rectangle(101.5,34,698.6,269), new cjs.Rectangle(107.1,28.4,693,274.7), new cjs.Rectangle(112.7,22.7,687.4,280.3), new cjs.Rectangle(118.2,17.1,681.8,286), new cjs.Rectangle(123.8,11.4,676.2,291.6), new cjs.Rectangle(129.4,5.8,670.6,297.2), new cjs.Rectangle(135,0.2,665,302.9), new cjs.Rectangle(140.6,-5.4,659.5,308.5), new cjs.Rectangle(146.2,-11.1,653.9,314.1), new cjs.Rectangle(151.8,-16.7,648.3,319.8), new cjs.Rectangle(157.4,-22.4,642.7,325.4), new cjs.Rectangle(162.9,-28,637.1,331.1), new cjs.Rectangle(168.5,-33.7,631.5,336.7), rect=new cjs.Rectangle(174.2,-39.3,625.9,342.4), rect, new cjs.Rectangle(181.5,-39.3,618.6,342.4), new cjs.Rectangle(188.8,-39.3,611.2,342.4), new cjs.Rectangle(196.2,-39.3,603.9,342.4), new cjs.Rectangle(203.6,-39.3,596.5,342.4), new cjs.Rectangle(210.9,-39.3,589.1,342.4), new cjs.Rectangle(218.3,-39.3,581.8,342.4), new cjs.Rectangle(225.6,-39.3,574.4,342.4), new cjs.Rectangle(233,-39.3,567.1,342.4), new cjs.Rectangle(240.3,-39.3,559.7,342.4), new cjs.Rectangle(247.7,-39.3,552.4,342.4), new cjs.Rectangle(255.1,-39.3,545,342.4), new cjs.Rectangle(262.4,-39.3,537.6,342.4), new cjs.Rectangle(269.8,-39.3,530.3,342.4), new cjs.Rectangle(277.1,-39.3,522.9,342.4), new cjs.Rectangle(284.5,-39.3,515.6,342.4), new cjs.Rectangle(291.8,-39.3,508.2,342.4), new cjs.Rectangle(299.2,-39.3,500.9,342.4), new cjs.Rectangle(306.6,-39.3,493.5,342.4), new cjs.Rectangle(313.9,-39.3,486.1,342.4), new cjs.Rectangle(321.3,-39.3,478.8,342.4), new cjs.Rectangle(328.6,-39.3,471.4,342.4), new cjs.Rectangle(336,-39.3,464.1,342.4), new cjs.Rectangle(343.3,-39.3,456.7,342.4), new cjs.Rectangle(350.7,-39.3,449.4,342.4), new cjs.Rectangle(358.1,-39.3,442,342.4), new cjs.Rectangle(365.4,-39.3,434.6,342.4), new cjs.Rectangle(372.8,-39.3,427.3,342.4), new cjs.Rectangle(380.2,-39.3,419.9,342.4), new cjs.Rectangle(383.2,-34.3,416.9,337.4), new cjs.Rectangle(391,-26.3,409.1,329.3), new cjs.Rectangle(398.8,-18.2,401.3,321.3), new cjs.Rectangle(406.6,-10.2,393.4,313.2), new cjs.Rectangle(414.5,-2.1,385.6,305.2), new cjs.Rectangle(422.3,5.9,377.8,297.1), new cjs.Rectangle(430.1,14,369.9,289.1), new cjs.Rectangle(438,22,362.1,281), new cjs.Rectangle(445.8,30.1,354.3,273), new cjs.Rectangle(453.6,38.1,346.4,264.9), new cjs.Rectangle(461.5,46.2,338.6,256.9), new cjs.Rectangle(469.3,54.2,330.8,248.8), new cjs.Rectangle(477.1,62.3,322.9,240.8), new cjs.Rectangle(485,70.3,315.1,232.7), new cjs.Rectangle(492.8,78.4,307.3,224.6), new cjs.Rectangle(500.6,86.5,299.4,216.6), new cjs.Rectangle(508.5,94.5,291.6,208.5), new cjs.Rectangle(516.3,102.6,283.8,200.5), new cjs.Rectangle(524.2,110.7,275.9,194.5), new cjs.Rectangle(524.2,110.7,275.9,193), new cjs.Rectangle(530,110.7,270,193), new cjs.Rectangle(535.9,110.7,264.1,193.1), new cjs.Rectangle(541.8,110.8,258.3,193.1), new cjs.Rectangle(547.7,110.8,252.4,193.1), new cjs.Rectangle(553.6,110.9,246.5,193), new cjs.Rectangle(559.5,111,240.5,193.1), new cjs.Rectangle(565.3,111,234.7,193.1), new cjs.Rectangle(571.2,111.1,228.8,193.1), new cjs.Rectangle(577.1,111.1,222.9,193), new cjs.Rectangle(583,111.2,217,193), new cjs.Rectangle(588.9,111.2,211.1,193.1), new cjs.Rectangle(594.8,111.3,205.3,193.1), new cjs.Rectangle(600.7,111.3,199.4,193.1), new cjs.Rectangle(606.6,111.4,193.5,193), new cjs.Rectangle(612.5,111.5,187.5,193.1), new cjs.Rectangle(618.3,111.5,181.7,193.1), new cjs.Rectangle(624.2,111.6,175.8,193.1), rect=new cjs.Rectangle(630.2,111.7,169.9,193), rect, rect=new cjs.Rectangle(630.1,111.6,169.9,193), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(630.1,106.9,169.9,197.8), new cjs.Rectangle(630.1,101.4,169.9,203.3), new cjs.Rectangle(630.1,95.9,169.9,208.8), new cjs.Rectangle(630.1,90.3,169.9,214.3), new cjs.Rectangle(630.1,84.8,169.9,219.8), new cjs.Rectangle(630.1,79.4,169.9,225.3), new cjs.Rectangle(630.1,73.8,169.9,230.9), new cjs.Rectangle(630.1,68.3,169.9,236.4), new cjs.Rectangle(630.1,62.8,169.9,241.9), new cjs.Rectangle(630.1,57.2,169.9,247.5), new cjs.Rectangle(630.1,51.7,169.9,253), new cjs.Rectangle(630.1,46.2,169.9,258.5), new cjs.Rectangle(630.1,40.7,169.9,264), new cjs.Rectangle(630.1,35.2,169.9,269.5), new cjs.Rectangle(630.1,29.7,169.9,275), new cjs.Rectangle(630.1,24.1,169.9,280.5), new cjs.Rectangle(630.1,18.6,169.9,286), rect=new cjs.Rectangle(630.1,111.6,169.9,193), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(630.2,111.7,169.9,193)];


(lib.animation_location_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.heart_prize_mc();
	this.instance.setTransform(725,190,0.173,0.173);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(130).to({_off:false},0).to({scaleX:0.53,scaleY:0.53,x:724,y:40,alpha:0.012},30).to({_off:true},1).wait(9));

	// animation
	this.instance_1 = new lib.satan1_mc();
	this.instance_1.setTransform(751.3,215,0.5,0.5,0,0,0,-0.2,0);

	this.instance_2 = new lib.satan3_mc();
	this.instance_2.setTransform(751.3,215,0.5,0.5,0,0,0,-0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},100).wait(70));

	// animation
	this.instance_3 = new lib.hero_mc();
	this.instance_3.setTransform(50,289);

	this.instance_4 = new lib.hero_3walk_mc();
	this.instance_4.setTransform(50,289);
	this.instance_4._off = true;

	this.instance_5 = new lib.hero_2_mc();
	this.instance_5.setTransform(700,274);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},98).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},69).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({x:700},98).to({_off:true,y:274},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(99).to({_off:false},1).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.8,111.7,819.8,193);
p.frameBounds = [rect, rect, new cjs.Rectangle(-13.1,111.6,813.2,193), new cjs.Rectangle(-6.5,111.6,806.6,193), new cjs.Rectangle(0.1,111.6,800,193), new cjs.Rectangle(6.7,111.6,793.3,193), new cjs.Rectangle(13.3,111.6,786.7,193), new cjs.Rectangle(20,111.6,780.1,193), new cjs.Rectangle(26.6,111.6,773.5,193), new cjs.Rectangle(33.2,111.6,766.8,193), new cjs.Rectangle(39.9,111.6,760.2,193), new cjs.Rectangle(46.5,111.6,753.6,193), new cjs.Rectangle(53.1,111.6,746.9,193), new cjs.Rectangle(59.8,111.6,740.3,193), new cjs.Rectangle(66.4,111.6,733.7,193), new cjs.Rectangle(73,111.6,727,193), new cjs.Rectangle(79.7,111.6,720.4,193), new cjs.Rectangle(86.3,111.6,713.8,193), new cjs.Rectangle(92.9,111.6,707.1,193), new cjs.Rectangle(99.6,111.6,700.5,193), new cjs.Rectangle(106.2,111.6,693.9,193), new cjs.Rectangle(112.8,111.6,687.2,193), new cjs.Rectangle(119.4,111.6,680.6,193), new cjs.Rectangle(126.1,111.6,674,193), new cjs.Rectangle(132.7,111.6,667.3,193), new cjs.Rectangle(139.4,111.6,660.7,193), new cjs.Rectangle(146,111.6,654.1,193), new cjs.Rectangle(152.6,111.6,647.4,193), new cjs.Rectangle(159.2,111.6,640.8,193), new cjs.Rectangle(165.9,111.6,634.2,193), new cjs.Rectangle(172.5,111.6,627.5,193), new cjs.Rectangle(179.1,111.6,620.9,193), new cjs.Rectangle(185.8,111.6,614.3,193), new cjs.Rectangle(192.4,111.6,607.6,193), new cjs.Rectangle(199,111.6,601,193), new cjs.Rectangle(205.7,111.6,594.4,193), new cjs.Rectangle(212.3,111.6,587.8,193), new cjs.Rectangle(218.9,111.6,581.1,193), new cjs.Rectangle(225.6,111.6,574.5,193), new cjs.Rectangle(232.2,111.6,567.9,193), new cjs.Rectangle(238.8,111.6,561.2,193), new cjs.Rectangle(245.5,111.6,554.6,193), new cjs.Rectangle(252.1,111.6,548,193), new cjs.Rectangle(258.7,111.6,541.3,193), new cjs.Rectangle(265.4,111.6,534.7,193), new cjs.Rectangle(272,111.6,528.1,193), new cjs.Rectangle(278.6,111.6,521.4,193), new cjs.Rectangle(285.3,111.6,514.8,193), new cjs.Rectangle(291.9,111.6,508.2,193), new cjs.Rectangle(298.5,111.6,501.5,193), new cjs.Rectangle(305.1,111.6,494.9,193), new cjs.Rectangle(311.8,111.6,488.3,193), new cjs.Rectangle(318.4,111.6,481.6,193), new cjs.Rectangle(325,111.6,475,193), new cjs.Rectangle(331.7,111.6,468.4,193), new cjs.Rectangle(338.3,111.6,461.7,193), new cjs.Rectangle(344.9,111.6,455.1,193), new cjs.Rectangle(351.6,111.6,448.5,193), new cjs.Rectangle(358.2,111.6,441.8,193), new cjs.Rectangle(364.8,111.6,435.2,193), new cjs.Rectangle(371.5,111.6,428.6,193), new cjs.Rectangle(378.1,111.6,421.9,193), new cjs.Rectangle(384.7,111.6,415.3,193), new cjs.Rectangle(391.4,111.6,408.7,193), new cjs.Rectangle(398,111.6,402.1,193), new cjs.Rectangle(404.6,111.6,395.4,193), new cjs.Rectangle(411.3,111.6,388.8,193), new cjs.Rectangle(417.9,111.6,382.2,193), new cjs.Rectangle(424.5,111.6,375.5,193), new cjs.Rectangle(431.2,111.6,368.9,193), new cjs.Rectangle(437.8,111.6,362.3,193), new cjs.Rectangle(444.4,111.6,355.6,193), new cjs.Rectangle(451.1,111.6,349,193), new cjs.Rectangle(457.7,111.6,342.4,193), new cjs.Rectangle(464.3,111.6,335.7,193), new cjs.Rectangle(471,111.6,329.1,193), new cjs.Rectangle(477.6,111.6,322.5,193), new cjs.Rectangle(484.2,111.6,315.8,193), new cjs.Rectangle(490.9,111.6,309.2,193), new cjs.Rectangle(497.5,111.6,302.6,193), new cjs.Rectangle(504.1,111.6,295.9,193), new cjs.Rectangle(510.7,111.6,289.3,193), new cjs.Rectangle(517.4,111.6,282.7,193), new cjs.Rectangle(524,111.6,276,193), new cjs.Rectangle(530.6,111.6,269.4,193), new cjs.Rectangle(537.3,111.6,262.8,193), new cjs.Rectangle(543.9,111.6,256.1,193), new cjs.Rectangle(550.5,111.6,249.5,193), new cjs.Rectangle(557.2,111.6,242.9,193), new cjs.Rectangle(563.8,111.6,236.2,193), new cjs.Rectangle(570.4,111.6,229.6,193), new cjs.Rectangle(577.1,111.6,223,193), new cjs.Rectangle(583.7,111.6,216.3,193), new cjs.Rectangle(590.3,111.6,209.7,193), new cjs.Rectangle(597,111.6,203,193), new cjs.Rectangle(603.6,111.6,196.5,193), new cjs.Rectangle(610.2,111.6,189.8,193), new cjs.Rectangle(616.9,111.6,183.1,193), new cjs.Rectangle(623.5,111.6,176.5,193), rect=new cjs.Rectangle(630.2,111.7,169.9,193), rect, rect=new cjs.Rectangle(630.1,111.6,169.9,193), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(630.1,110.1,169.9,194.5), new cjs.Rectangle(630.1,104.4,169.9,200.3), new cjs.Rectangle(630.1,98.6,169.9,206.1), new cjs.Rectangle(630.1,92.9,169.9,211.8), new cjs.Rectangle(630.1,87.1,169.9,217.6), new cjs.Rectangle(630.1,81.4,169.9,223.3), new cjs.Rectangle(630.1,75.6,169.9,229.1), new cjs.Rectangle(630.1,69.9,169.9,234.8), new cjs.Rectangle(630.1,64.1,169.9,240.6), new cjs.Rectangle(630.1,58.4,169.9,246.3), new cjs.Rectangle(630.1,52.6,169.9,252.1), new cjs.Rectangle(630.1,46.9,169.9,257.8), new cjs.Rectangle(630.1,41.1,169.9,263.5), new cjs.Rectangle(630.1,35.4,169.9,269.3), new cjs.Rectangle(630.1,29.6,169.9,275), new cjs.Rectangle(630.1,23.9,169.9,280.8), new cjs.Rectangle(630.1,18.2,169.9,286.5), new cjs.Rectangle(630.1,12.4,169.9,292.3), new cjs.Rectangle(630.1,6.6,169.9,298), rect=new cjs.Rectangle(630.1,111.6,169.9,193), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(630.2,111.7,169.9,193)];


(lib.animation_location_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.heart_prize_mc();
	this.instance.setTransform(725,95,0.173,0.173);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(130).to({_off:false},0).to({scaleX:0.53,scaleY:0.53,x:724,y:23,alpha:0.012},30).to({_off:true},1).wait(9));

	// animation
	this.instance_1 = new lib.satan1_mc();
	this.instance_1.setTransform(751.3,115,0.5,0.5,0,0,0,-0.2,0);

	this.instance_2 = new lib.satan3_mc();
	this.instance_2.setTransform(751.3,115,0.5,0.5,0,0,0,-0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},100).wait(70));

	// animation
	this.instance_3 = new lib.hero_mc();
	this.instance_3.setTransform(50,187);

	this.instance_4 = new lib.hero_3walk_mc();
	this.instance_4.setTransform(50,187);
	this.instance_4._off = true;

	this.instance_5 = new lib.hero_5down_mc();
	this.instance_5.setTransform(100,191);
	this.instance_5._off = true;

	this.instance_6 = new lib.hero_4up_mc();
	this.instance_6.setTransform(500,283);
	this.instance_6._off = true;

	this.instance_7 = new lib.hero_2_mc();
	this.instance_7.setTransform(700,174);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},10).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},46).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},18).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},14).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},69).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({x:98},6).to({_off:true,x:100,y:191},1).wait(10).to({_off:false,x:193,y:285},1).to({x:494},46).to({_off:true,x:500,y:283},1).wait(18).to({_off:false,x:596,y:188},1).to({x:700,y:189},14).to({_off:true,y:174},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({_off:false},1).to({x:193,y:285},10).to({_off:true},1).wait(151));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(65).to({_off:false},1).to({x:596,y:188},18).to({_off:true},1).wait(85));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(99).to({_off:false},1).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.8,9.7,819.8,193.4);
p.frameBounds = [rect, rect, new cjs.Rectangle(-11.8,9.6,811.8,193.4), new cjs.Rectangle(-3.8,9.6,803.8,193.4), new cjs.Rectangle(4.2,9.6,795.9,193.4), new cjs.Rectangle(12.2,9.6,787.9,193.4), new cjs.Rectangle(20.2,9.6,779.9,193.4), new cjs.Rectangle(28.2,9.7,771.8,193.4), new cjs.Rectangle(30.2,13.7,769.8,194.5), new cjs.Rectangle(39.5,23,760.6,194.5), new cjs.Rectangle(48.8,26.9,751.3,200), new cjs.Rectangle(58.1,26.9,742,209.4), new cjs.Rectangle(67.4,26.9,732.7,218.8), new cjs.Rectangle(76.6,26.9,723.4,228.2), new cjs.Rectangle(85.9,26.9,714.1,237.6), new cjs.Rectangle(95.2,26.9,704.8,247), new cjs.Rectangle(104.5,26.9,695.5,256.4), new cjs.Rectangle(113.8,26.9,686.2,265.8), new cjs.Rectangle(123.2,26.9,676.9,275.3), new cjs.Rectangle(123.2,26.9,676.9,273.8), new cjs.Rectangle(129.7,26.9,670.4,273.8), new cjs.Rectangle(136.2,26.9,663.8,273.8), new cjs.Rectangle(142.8,26.9,657.3,273.8), new cjs.Rectangle(149.3,26.9,650.7,273.8), new cjs.Rectangle(155.8,26.9,644.2,273.8), new cjs.Rectangle(162.4,26.9,637.7,273.8), new cjs.Rectangle(168.9,26.9,631.1,273.8), new cjs.Rectangle(175.5,26.9,624.6,273.8), new cjs.Rectangle(182,26.9,618,273.8), new cjs.Rectangle(188.6,26.9,611.5,273.8), new cjs.Rectangle(195.1,26.9,604.9,273.8), new cjs.Rectangle(201.6,26.9,598.4,273.8), new cjs.Rectangle(208.2,26.9,591.9,273.8), new cjs.Rectangle(214.7,26.9,585.3,273.8), new cjs.Rectangle(221.3,26.9,578.8,273.8), new cjs.Rectangle(227.8,26.9,572.2,273.8), new cjs.Rectangle(234.4,26.9,565.7,273.8), new cjs.Rectangle(240.9,26.9,559.1,273.8), new cjs.Rectangle(247.4,26.9,552.6,273.8), new cjs.Rectangle(254,26.9,546.1,273.8), new cjs.Rectangle(260.5,26.9,539.5,273.8), new cjs.Rectangle(267.1,26.9,533,273.8), new cjs.Rectangle(273.6,26.9,526.4,273.8), new cjs.Rectangle(280.2,26.9,519.9,273.8), new cjs.Rectangle(286.7,26.9,513.3,273.8), new cjs.Rectangle(293.3,26.9,506.8,273.8), new cjs.Rectangle(299.8,26.9,500.2,273.8), new cjs.Rectangle(306.3,26.9,493.7,273.8), new cjs.Rectangle(312.9,26.9,487.2,273.8), new cjs.Rectangle(319.4,26.9,480.6,273.8), new cjs.Rectangle(326,26.9,474.1,273.8), new cjs.Rectangle(332.5,26.9,467.5,273.8), new cjs.Rectangle(339.1,26.9,461,273.8), new cjs.Rectangle(345.6,26.9,454.4,273.8), new cjs.Rectangle(352.1,26.9,447.9,273.8), new cjs.Rectangle(358.7,26.9,441.4,273.8), new cjs.Rectangle(365.2,26.9,434.8,273.8), new cjs.Rectangle(371.8,26.9,428.3,273.8), new cjs.Rectangle(378.3,26.9,421.7,273.8), new cjs.Rectangle(384.9,26.9,415.2,273.8), new cjs.Rectangle(391.4,26.9,408.6,273.8), new cjs.Rectangle(398,26.9,402.1,273.8), new cjs.Rectangle(404.5,26.9,395.6,273.8), new cjs.Rectangle(411,26.9,389,273.8), new cjs.Rectangle(417.6,26.9,382.5,273.8), new cjs.Rectangle(424.2,26.9,375.9,273.8), new cjs.Rectangle(430.2,26.9,369.9,271.8), new cjs.Rectangle(435.5,26.9,364.6,266.5), new cjs.Rectangle(440.8,26.9,359.3,261.2), new cjs.Rectangle(446.1,26.9,353.9,255.9), new cjs.Rectangle(451.5,26.9,348.6,250.7), new cjs.Rectangle(456.8,26.9,343.3,245.4), new cjs.Rectangle(462.1,26.9,337.9,240.1), new cjs.Rectangle(467.5,26.9,332.6,234.8), new cjs.Rectangle(472.8,26.9,327.3,229.6), new cjs.Rectangle(478.1,26.9,321.9,224.3), new cjs.Rectangle(483.5,26.9,316.6,219), new cjs.Rectangle(488.8,26.9,311.3,213.7), new cjs.Rectangle(494.1,26.9,305.9,208.4), new cjs.Rectangle(499.5,26.9,300.6,203.2), new cjs.Rectangle(504.8,26.9,295.3,197.9), new cjs.Rectangle(510.1,26.5,289.9,193.1), new cjs.Rectangle(515.5,21.2,284.5,193), new cjs.Rectangle(520.8,15.9,279.3,193), rect=new cjs.Rectangle(526.2,10.7,273.9,193), rect, new cjs.Rectangle(533.6,10.7,266.5,193), new cjs.Rectangle(541,10.8,259,193.1), new cjs.Rectangle(548.4,10.8,251.6,193), new cjs.Rectangle(555.8,10.9,244.2,193), new cjs.Rectangle(563.3,11,236.8,193.1), new cjs.Rectangle(570.7,11.1,229.4,193), new cjs.Rectangle(578.1,11.1,221.9,193.1), new cjs.Rectangle(585.6,11.2,214.5,193), new cjs.Rectangle(593,11.3,207,193.1), new cjs.Rectangle(600.4,11.3,199.6,193), new cjs.Rectangle(607.8,11.4,192.2,193), new cjs.Rectangle(615.3,11.5,184.8,193.1), new cjs.Rectangle(622.7,11.6,177.4,193), rect=new cjs.Rectangle(630.2,11.7,169.9,193), rect, rect=new cjs.Rectangle(630.1,11.6,169.9,193.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(630.1,8.5,169.9,196.2), new cjs.Rectangle(630.1,5.4,169.9,199.3), new cjs.Rectangle(630.1,2.2,169.9,202.5), new cjs.Rectangle(630.1,-0.9,169.9,205.6), new cjs.Rectangle(630.1,-4,169.9,208.7), new cjs.Rectangle(630.1,-7.1,169.9,211.8), new cjs.Rectangle(630.1,-10.4,169.9,215.1), rect=new cjs.Rectangle(630.1,11.6,169.9,193.1), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(630.2,11.7,169.9,193)];


(lib.animation_location_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.heart_prize_mc();
	this.instance.setTransform(725,193,0.173,0.173);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(130).to({_off:false},0).to({scaleX:0.53,scaleY:0.53,x:724,y:41,alpha:0.012},30).to({_off:true},1).wait(9));

	// animation
	this.instance_1 = new lib.satan1_mc();
	this.instance_1.setTransform(751.3,214,0.5,0.5,0,0,0,-0.2,0);

	this.instance_2 = new lib.satan3_mc();
	this.instance_2.setTransform(751.3,214,0.5,0.5,0,0,0,-0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},100).wait(70));

	// animation
	this.instance_3 = new lib.hero_mc();
	this.instance_3.setTransform(50,288);

	this.instance_4 = new lib.hero_3walk_mc();
	this.instance_4.setTransform(50,288);
	this.instance_4._off = true;

	this.instance_5 = new lib.hero_2_mc();
	this.instance_5.setTransform(700,273);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},98).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},69).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({x:700},98).to({_off:true,y:273},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(99).to({_off:false},1).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.8,110.7,819.8,193);
p.frameBounds = [rect, rect, new cjs.Rectangle(-13.1,110.6,813.2,193), new cjs.Rectangle(-6.5,110.6,806.6,193), new cjs.Rectangle(0.1,110.6,800,193), new cjs.Rectangle(6.7,110.6,793.3,193), new cjs.Rectangle(13.3,110.6,786.7,193), new cjs.Rectangle(20,110.6,780.1,193), new cjs.Rectangle(26.6,110.6,773.5,193), new cjs.Rectangle(33.2,110.6,766.8,193), new cjs.Rectangle(39.9,110.6,760.2,193), new cjs.Rectangle(46.5,110.6,753.6,193), new cjs.Rectangle(53.1,110.6,746.9,193), new cjs.Rectangle(59.8,110.6,740.3,193), new cjs.Rectangle(66.4,110.6,733.7,193), new cjs.Rectangle(73,110.6,727,193), new cjs.Rectangle(79.7,110.6,720.4,193), new cjs.Rectangle(86.3,110.6,713.8,193), new cjs.Rectangle(92.9,110.6,707.1,193), new cjs.Rectangle(99.6,110.6,700.5,193), new cjs.Rectangle(106.2,110.6,693.9,193), new cjs.Rectangle(112.8,110.6,687.2,193), new cjs.Rectangle(119.4,110.6,680.6,193), new cjs.Rectangle(126.1,110.6,674,193), new cjs.Rectangle(132.7,110.6,667.3,193), new cjs.Rectangle(139.4,110.6,660.7,193), new cjs.Rectangle(146,110.6,654.1,193), new cjs.Rectangle(152.6,110.6,647.4,193), new cjs.Rectangle(159.2,110.6,640.8,193), new cjs.Rectangle(165.9,110.6,634.2,193), new cjs.Rectangle(172.5,110.6,627.5,193), new cjs.Rectangle(179.1,110.6,620.9,193), new cjs.Rectangle(185.8,110.6,614.3,193), new cjs.Rectangle(192.4,110.6,607.6,193), new cjs.Rectangle(199,110.6,601,193), new cjs.Rectangle(205.7,110.6,594.4,193), new cjs.Rectangle(212.3,110.6,587.8,193), new cjs.Rectangle(218.9,110.6,581.1,193), new cjs.Rectangle(225.6,110.6,574.5,193), new cjs.Rectangle(232.2,110.6,567.9,193), new cjs.Rectangle(238.8,110.6,561.2,193), new cjs.Rectangle(245.5,110.6,554.6,193), new cjs.Rectangle(252.1,110.6,548,193), new cjs.Rectangle(258.7,110.6,541.3,193), new cjs.Rectangle(265.4,110.6,534.7,193), new cjs.Rectangle(272,110.6,528.1,193), new cjs.Rectangle(278.6,110.6,521.4,193), new cjs.Rectangle(285.3,110.6,514.8,193), new cjs.Rectangle(291.9,110.6,508.2,193), new cjs.Rectangle(298.5,110.6,501.5,193), new cjs.Rectangle(305.1,110.6,494.9,193), new cjs.Rectangle(311.8,110.6,488.3,193), new cjs.Rectangle(318.4,110.6,481.6,193), new cjs.Rectangle(325,110.6,475,193), new cjs.Rectangle(331.7,110.6,468.4,193), new cjs.Rectangle(338.3,110.6,461.7,193), new cjs.Rectangle(344.9,110.6,455.1,193), new cjs.Rectangle(351.6,110.6,448.5,193), new cjs.Rectangle(358.2,110.6,441.8,193), new cjs.Rectangle(364.8,110.6,435.2,193), new cjs.Rectangle(371.5,110.6,428.6,193), new cjs.Rectangle(378.1,110.6,421.9,193), new cjs.Rectangle(384.7,110.6,415.3,193), new cjs.Rectangle(391.4,110.6,408.7,193), new cjs.Rectangle(398,110.6,402.1,193), new cjs.Rectangle(404.6,110.6,395.4,193), new cjs.Rectangle(411.3,110.6,388.8,193), new cjs.Rectangle(417.9,110.6,382.2,193), new cjs.Rectangle(424.5,110.6,375.5,193), new cjs.Rectangle(431.2,110.6,368.9,193), new cjs.Rectangle(437.8,110.6,362.3,193), new cjs.Rectangle(444.4,110.6,355.6,193), new cjs.Rectangle(451.1,110.6,349,193), new cjs.Rectangle(457.7,110.6,342.4,193), new cjs.Rectangle(464.3,110.6,335.7,193), new cjs.Rectangle(471,110.6,329.1,193), new cjs.Rectangle(477.6,110.6,322.5,193), new cjs.Rectangle(484.2,110.6,315.8,193), new cjs.Rectangle(490.9,110.6,309.2,193), new cjs.Rectangle(497.5,110.6,302.6,193), new cjs.Rectangle(504.1,110.6,295.9,193), new cjs.Rectangle(510.7,110.6,289.3,193), new cjs.Rectangle(517.4,110.6,282.7,193), new cjs.Rectangle(524,110.6,276,193), new cjs.Rectangle(530.6,110.6,269.4,193), new cjs.Rectangle(537.3,110.6,262.8,193), new cjs.Rectangle(543.9,110.6,256.1,193), new cjs.Rectangle(550.5,110.6,249.5,193), new cjs.Rectangle(557.2,110.6,242.9,193), new cjs.Rectangle(563.8,110.6,236.2,193), new cjs.Rectangle(570.4,110.6,229.6,193), new cjs.Rectangle(577.1,110.6,223,193), new cjs.Rectangle(583.7,110.6,216.3,193), new cjs.Rectangle(590.3,110.6,209.7,193), new cjs.Rectangle(597,110.6,203,193), new cjs.Rectangle(603.6,110.6,196.5,193), new cjs.Rectangle(610.2,110.6,189.8,193), new cjs.Rectangle(616.9,110.6,183.1,193), new cjs.Rectangle(623.5,110.6,176.5,193), rect=new cjs.Rectangle(630.2,110.7,169.9,193), rect, rect=new cjs.Rectangle(630.1,110.6,169.9,193), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(630.1,106.5,169.9,197.1), new cjs.Rectangle(630.1,100.7,169.9,203), new cjs.Rectangle(630.1,94.9,169.9,208.8), new cjs.Rectangle(630.1,89.1,169.9,214.6), new cjs.Rectangle(630.1,83.2,169.9,220.5), new cjs.Rectangle(630.1,77.4,169.9,226.2), new cjs.Rectangle(630.1,71.6,169.9,232.1), new cjs.Rectangle(630.1,65.8,169.9,237.9), new cjs.Rectangle(630.1,60,169.9,243.7), new cjs.Rectangle(630.1,54.2,169.9,249.5), new cjs.Rectangle(630.1,48.3,169.9,255.3), new cjs.Rectangle(630.1,42.5,169.9,261.2), new cjs.Rectangle(630.1,36.7,169.9,267), new cjs.Rectangle(630.1,30.9,169.9,272.8), new cjs.Rectangle(630.1,25.1,169.9,278.6), new cjs.Rectangle(630.1,19.3,169.9,284.4), new cjs.Rectangle(630.1,13.4,169.9,290.3), new cjs.Rectangle(630.1,7.6,169.9,296), rect=new cjs.Rectangle(630.1,110.6,169.9,193), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(630.2,110.7,169.9,193)];


(lib.animation_location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.heart_prize_mc();
	this.instance.setTransform(725,95,0.173,0.173);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(130).to({_off:false},0).to({scaleX:0.53,scaleY:0.53,x:724,y:10,alpha:0.012},30).to({_off:true},1).wait(9));

	// animation
	this.instance_1 = new lib.satan1_mc();
	this.instance_1.setTransform(751.3,114,0.5,0.5,0,0,0,-0.2,0);

	this.instance_2 = new lib.satan3_mc();
	this.instance_2.setTransform(751.3,114,0.5,0.5,0,0,0,-0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},100).wait(70));

	// animation
	this.instance_3 = new lib.hero_mc();
	this.instance_3.setTransform(50,388);

	this.instance_4 = new lib.hero_3walk_mc();
	this.instance_4.setTransform(50,388);
	this.instance_4._off = true;

	this.instance_5 = new lib.hero_4up_mc();
	this.instance_5.setTransform(302,383);
	this.instance_5._off = true;

	this.instance_6 = new lib.hero_2_mc();
	this.instance_6.setTransform(700,173);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},35).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},37).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},24).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},69).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({x:294},35).to({_off:true,x:302,y:383},1).wait(37).to({_off:false,x:499,y:188},1).to({x:700},24).to({_off:true,y:173},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(36).to({_off:false},1).to({x:496,y:189},37).to({_off:true,x:499,y:188},1).wait(95));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(99).to({_off:false},1).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.8,25.9,819.8,377.8);
p.frameBounds = [rect, rect, new cjs.Rectangle(-12.8,25.9,812.9,377.8), new cjs.Rectangle(-5.8,25.9,805.9,377.8), new cjs.Rectangle(1.1,25.9,799,377.8), new cjs.Rectangle(8.1,25.9,792,377.8), new cjs.Rectangle(15,25.9,785,377.8), new cjs.Rectangle(22,25.9,778.1,377.8), new cjs.Rectangle(29,25.9,771.1,377.8), new cjs.Rectangle(35.9,25.9,764.1,377.8), new cjs.Rectangle(42.9,25.9,757.1,377.8), new cjs.Rectangle(49.9,25.9,750.2,377.8), new cjs.Rectangle(56.8,25.9,743.2,377.8), new cjs.Rectangle(63.8,25.9,736.2,377.8), new cjs.Rectangle(70.8,25.9,729.3,377.8), new cjs.Rectangle(77.8,25.9,722.3,377.8), new cjs.Rectangle(84.7,25.9,715.3,377.8), new cjs.Rectangle(91.7,25.9,708.4,377.8), new cjs.Rectangle(98.7,25.9,701.4,377.8), new cjs.Rectangle(105.6,25.9,694.4,377.8), new cjs.Rectangle(112.6,25.9,687.4,377.8), new cjs.Rectangle(119.6,25.9,680.5,377.8), new cjs.Rectangle(126.5,25.9,673.5,377.8), new cjs.Rectangle(133.5,25.9,666.5,377.8), new cjs.Rectangle(140.5,25.9,659.6,377.8), new cjs.Rectangle(147.5,25.9,652.6,377.8), new cjs.Rectangle(154.4,25.9,645.6,377.8), new cjs.Rectangle(161.4,25.9,638.7,377.8), new cjs.Rectangle(168.4,25.9,631.7,377.8), new cjs.Rectangle(175.3,25.9,624.7,377.8), new cjs.Rectangle(182.3,25.9,617.7,377.8), new cjs.Rectangle(189.3,25.9,610.8,377.8), new cjs.Rectangle(196.2,25.9,603.8,377.8), new cjs.Rectangle(203.2,25.9,596.8,377.8), new cjs.Rectangle(210.2,25.9,589.9,377.8), new cjs.Rectangle(217.2,25.9,582.9,377.8), new cjs.Rectangle(224.2,25.9,575.9,377.8), new cjs.Rectangle(232.2,25.9,567.9,372.8), new cjs.Rectangle(237.4,25.9,562.7,367.5), new cjs.Rectangle(242.6,25.9,557.4,362.3), new cjs.Rectangle(247.9,25.9,552.2,357), new cjs.Rectangle(253.1,25.9,547,351.8), new cjs.Rectangle(258.3,25.9,541.7,346.6), new cjs.Rectangle(263.6,25.9,536.5,341.3), new cjs.Rectangle(268.8,25.9,531.2,336.1), new cjs.Rectangle(274.1,25.9,526,330.8), new cjs.Rectangle(279.3,25.9,520.7,325.6), new cjs.Rectangle(284.6,25.9,515.5,320.3), new cjs.Rectangle(289.8,25.9,510.2,315.1), new cjs.Rectangle(295,25.9,505,309.9), new cjs.Rectangle(300.3,25.9,499.8,304.6), new cjs.Rectangle(305.5,25.9,494.5,299.4), new cjs.Rectangle(310.8,25.9,489.3,294.1), new cjs.Rectangle(316,25.9,484,288.9), new cjs.Rectangle(321.3,25.9,478.8,283.6), new cjs.Rectangle(326.5,25.9,473.5,278.4), new cjs.Rectangle(331.7,25.9,468.3,273.2), new cjs.Rectangle(337,25.9,463.1,267.9), new cjs.Rectangle(342.2,25.9,457.8,262.7), new cjs.Rectangle(347.5,25.9,452.6,257.4), new cjs.Rectangle(352.7,25.9,447.3,252.2), new cjs.Rectangle(358,25.9,442.1,246.9), new cjs.Rectangle(363.2,25.9,436.8,241.7), new cjs.Rectangle(368.4,25.9,431.6,236.5), new cjs.Rectangle(373.7,25.9,426.4,231.2), new cjs.Rectangle(378.9,25.9,421.1,226), new cjs.Rectangle(384.2,25.9,415.9,220.7), new cjs.Rectangle(389.4,25.9,410.6,215.5), new cjs.Rectangle(394.7,25.9,405.4,210.2), new cjs.Rectangle(399.9,25.9,400.1,205), new cjs.Rectangle(405.2,25.9,394.9,199.7), new cjs.Rectangle(410.4,25.9,389.7,194.5), new cjs.Rectangle(415.6,22.1,384.4,193.1), new cjs.Rectangle(420.9,16.9,379.2,193.1), new cjs.Rectangle(426.2,11.7,373.9,193), new cjs.Rectangle(429.2,10.7,370.9,193), new cjs.Rectangle(437.5,10.6,362.5,193.1), new cjs.Rectangle(445.9,10.6,354.2,193.1), new cjs.Rectangle(454.3,10.6,345.8,193.1), new cjs.Rectangle(462.6,10.6,337.4,193.1), new cjs.Rectangle(471,10.6,329.1,193.1), new cjs.Rectangle(479.4,10.6,320.7,193.1), new cjs.Rectangle(487.8,10.6,312.3,193.1), new cjs.Rectangle(496.1,10.6,303.9,193.1), new cjs.Rectangle(504.5,10.6,295.5,193.1), new cjs.Rectangle(512.9,10.6,287.2,193.1), new cjs.Rectangle(521.2,10.6,278.8,193.1), new cjs.Rectangle(529.6,10.6,270.4,193.1), new cjs.Rectangle(538,10.6,262,193.1), new cjs.Rectangle(546.4,10.6,253.7,193.1), new cjs.Rectangle(554.7,10.6,245.3,193.1), new cjs.Rectangle(563.1,10.6,236.9,193.1), new cjs.Rectangle(571.5,10.6,228.5,193.1), new cjs.Rectangle(579.9,10.6,220.2,193.1), new cjs.Rectangle(588.3,10.6,211.8,193.1), new cjs.Rectangle(596.6,10.6,203.4,193.1), new cjs.Rectangle(605,10.6,195,193.1), new cjs.Rectangle(613.4,10.6,186.6,193.1), new cjs.Rectangle(621.7,10.6,178.3,193.1), rect=new cjs.Rectangle(630.2,10.7,169.9,193), rect, rect=new cjs.Rectangle(630.1,10.6,169.9,193.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(630.1,8.9,169.9,194.8), new cjs.Rectangle(630.1,5.3,169.9,198.4), new cjs.Rectangle(630.1,1.7,169.9,202), new cjs.Rectangle(630.1,-1.8,169.9,205.5), new cjs.Rectangle(630.1,-5.4,169.9,209.1), new cjs.Rectangle(630.1,-9,169.9,212.7), new cjs.Rectangle(630.1,-12.6,169.9,216.3), new cjs.Rectangle(630.1,-16.2,169.9,219.9), new cjs.Rectangle(630.1,-19.7,169.9,223.4), new cjs.Rectangle(630.1,-23.4,169.9,227.1), rect=new cjs.Rectangle(630.1,10.6,169.9,193.1), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(630.2,10.7,169.9,193)];


(lib.animation_location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.heart_prize_mc();
	this.instance.setTransform(725,94,0.173,0.173);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(130).to({_off:false},0).to({scaleX:0.53,scaleY:0.53,x:724,y:22,alpha:0.012},30).to({_off:true},1).wait(9));

	// graph
	this.instance_1 = new lib.satan1_mc();
	this.instance_1.setTransform(751.3,114,0.5,0.5,0,0,0,-0.2,0);

	this.instance_2 = new lib.satan3_mc();
	this.instance_2.setTransform(751.3,114,0.5,0.5,0,0,0,-0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},100).wait(70));

	// animation
	this.instance_3 = new lib.hero_mc();
	this.instance_3.setTransform(50,388);

	this.instance_4 = new lib.hero_3walk_mc();
	this.instance_4.setTransform(50,388);
	this.instance_4._off = true;

	this.instance_5 = new lib.hero_4up_mc();
	this.instance_5.setTransform(247,388);
	this.instance_5._off = true;

	this.instance_6 = new lib.hero_2_mc();
	this.instance_6.setTransform(700,173);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},28).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},37).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},31).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},69).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({x:247},28).to({_off:true},1).wait(37).to({_off:false,x:448,y:188},1).to({x:700},31).to({_off:true,y:173},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({_off:false},1).to({x:446,y:188},37).to({_off:true,x:448},1).wait(102));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(99).to({_off:false},1).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.8,25.9,819.8,377.8);
p.frameBounds = [rect, rect, new cjs.Rectangle(-12.7,25.9,812.8,377.8), new cjs.Rectangle(-5.7,25.9,805.8,377.8), new cjs.Rectangle(1.3,25.9,798.8,377.8), new cjs.Rectangle(8.3,25.9,791.7,377.8), new cjs.Rectangle(15.3,25.9,784.7,377.8), new cjs.Rectangle(22.4,25.9,777.7,377.8), new cjs.Rectangle(29.4,25.9,770.6,377.8), new cjs.Rectangle(36.4,25.9,763.6,377.8), new cjs.Rectangle(43.5,25.9,756.6,377.8), new cjs.Rectangle(50.5,25.9,749.5,377.8), new cjs.Rectangle(57.5,25.9,742.5,377.8), new cjs.Rectangle(64.6,25.9,735.5,377.8), new cjs.Rectangle(71.6,25.9,728.4,377.8), new cjs.Rectangle(78.7,25.9,721.4,377.8), new cjs.Rectangle(85.7,25.9,714.4,377.8), new cjs.Rectangle(92.7,25.9,707.3,377.8), new cjs.Rectangle(99.8,25.9,700.3,377.8), new cjs.Rectangle(106.8,25.9,693.3,377.8), new cjs.Rectangle(113.8,25.9,686.2,377.8), new cjs.Rectangle(120.9,25.9,679.2,377.8), new cjs.Rectangle(127.9,25.9,672.2,377.8), new cjs.Rectangle(134.9,25.9,665.1,377.8), new cjs.Rectangle(142,25.9,658.1,377.8), new cjs.Rectangle(149,25.9,651.1,377.8), new cjs.Rectangle(156,25.9,644,377.8), new cjs.Rectangle(163.1,25.9,637,377.8), new cjs.Rectangle(170.1,25.9,630,377.8), rect=new cjs.Rectangle(177.2,25.9,622.9,377.8), rect, new cjs.Rectangle(182.5,25.9,617.5,372.4), new cjs.Rectangle(187.9,25.9,612.2,367), new cjs.Rectangle(193.3,25.9,606.8,361.6), new cjs.Rectangle(198.6,25.9,601.4,356.2), new cjs.Rectangle(204,25.9,596,350.7), new cjs.Rectangle(209.4,25.9,590.7,345.3), new cjs.Rectangle(214.8,25.9,585.3,339.9), new cjs.Rectangle(220.2,25.9,579.9,334.5), new cjs.Rectangle(225.5,25.9,574.5,329.1), new cjs.Rectangle(230.9,25.9,569.1,323.7), new cjs.Rectangle(236.3,25.9,563.8,318.3), new cjs.Rectangle(241.7,25.9,558.4,312.9), new cjs.Rectangle(247,25.9,553,307.5), new cjs.Rectangle(252.4,25.9,547.6,302.1), new cjs.Rectangle(257.8,25.9,542.2,296.7), new cjs.Rectangle(263.2,25.9,536.9,291.3), new cjs.Rectangle(268.6,25.9,531.5,285.9), new cjs.Rectangle(273.9,25.9,526.1,280.5), new cjs.Rectangle(279.3,25.9,520.7,275.1), new cjs.Rectangle(284.7,25.9,515.4,269.7), new cjs.Rectangle(290.1,25.9,510,264.3), new cjs.Rectangle(295.4,25.9,504.6,258.9), new cjs.Rectangle(300.8,25.9,499.2,253.5), new cjs.Rectangle(306.2,25.9,493.8,248), new cjs.Rectangle(311.6,25.9,488.5,242.6), new cjs.Rectangle(317,25.9,483.1,237.2), new cjs.Rectangle(322.3,25.9,477.7,231.8), new cjs.Rectangle(327.7,25.9,472.3,226.4), new cjs.Rectangle(333.1,25.9,467,221), new cjs.Rectangle(338.5,25.9,461.6,215.6), new cjs.Rectangle(343.9,25.9,456.2,210.2), new cjs.Rectangle(349.2,25.9,450.8,204.8), new cjs.Rectangle(354.6,25.9,445.4,199.4), new cjs.Rectangle(360,25.9,440.1,194), new cjs.Rectangle(365.4,21.4,434.7,193), new cjs.Rectangle(370.7,16,429.3,193.1), new cjs.Rectangle(376.2,10.7,423.9,193), new cjs.Rectangle(378.2,10.7,421.9,193), new cjs.Rectangle(386.3,10.6,413.8,193.1), new cjs.Rectangle(394.4,10.6,405.7,193.1), new cjs.Rectangle(402.5,10.6,397.5,193.1), new cjs.Rectangle(410.6,10.6,389.4,193.1), new cjs.Rectangle(418.8,10.6,381.3,193.1), new cjs.Rectangle(426.9,10.6,373.2,193.1), new cjs.Rectangle(435,10.6,365,193.1), new cjs.Rectangle(443.2,10.6,356.9,193.1), new cjs.Rectangle(451.3,10.6,348.8,193.1), new cjs.Rectangle(459.4,10.6,340.6,193.1), new cjs.Rectangle(467.5,10.6,332.5,193.1), new cjs.Rectangle(475.7,10.6,324.4,193.1), new cjs.Rectangle(483.8,10.6,316.2,193.1), new cjs.Rectangle(491.9,10.6,308.1,193.1), new cjs.Rectangle(500.1,10.6,300,193.1), new cjs.Rectangle(508.2,10.6,291.9,193.1), new cjs.Rectangle(516.3,10.6,283.7,193.1), new cjs.Rectangle(524.4,10.6,275.6,193.1), new cjs.Rectangle(532.6,10.6,267.5,193.1), new cjs.Rectangle(540.7,10.6,259.3,193.1), new cjs.Rectangle(548.8,10.6,251.2,193.1), new cjs.Rectangle(557,10.6,243,193.1), new cjs.Rectangle(565.1,10.6,235,193.1), new cjs.Rectangle(573.2,10.6,226.8,193.1), new cjs.Rectangle(581.4,10.6,218.7,193.1), new cjs.Rectangle(589.5,10.6,210.5,193.1), new cjs.Rectangle(597.6,10.6,202.4,193.1), new cjs.Rectangle(605.7,10.6,194.3,193.1), new cjs.Rectangle(613.9,10.6,186.1,193.1), new cjs.Rectangle(622,10.6,178,193.1), rect=new cjs.Rectangle(630.2,10.7,169.9,193), rect, rect=new cjs.Rectangle(630.1,10.6,169.9,193.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(630.1,7.5,169.9,196.2), new cjs.Rectangle(630.1,4.4,169.9,199.3), new cjs.Rectangle(630.1,1.2,169.9,202.5), new cjs.Rectangle(630.1,-1.9,169.9,205.6), new cjs.Rectangle(630.1,-5,169.9,208.7), new cjs.Rectangle(630.1,-8.2,169.9,211.9), new cjs.Rectangle(630.1,-11.4,169.9,215.1), rect=new cjs.Rectangle(630.1,10.6,169.9,193.1), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(630.2,10.7,169.9,193)];


(lib.animation_location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.heart_prize_mc();
	this.instance.setTransform(725,244,0.173,0.173);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(130).to({_off:false},0).to({scaleX:0.53,scaleY:0.53,x:724,y:123,alpha:0.012},30).to({_off:true},1).wait(9));

	// animation
	this.instance_1 = new lib.satan1_mc();
	this.instance_1.setTransform(751.3,264,0.5,0.5,0,0,0,-0.2,0);

	this.instance_2 = new lib.satan3_mc();
	this.instance_2.setTransform(751.3,264,0.5,0.5,0,0,0,-0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},100).wait(70));

	// animation
	this.instance_3 = new lib.hero_mc();
	this.instance_3.setTransform(50,338);

	this.instance_4 = new lib.hero_3walk_mc();
	this.instance_4.setTransform(50,338);
	this.instance_4._off = true;

	this.instance_5 = new lib.hero_4up_mc();
	this.instance_5.setTransform(227,336.3);
	this.instance_5._off = true;

	this.instance_6 = new lib.hero_5down_mc();
	this.instance_6.setTransform(447,235.3);
	this.instance_6._off = true;

	this.instance_7 = new lib.hero_2_mc();
	this.instance_7.setTransform(700,323);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},27).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},27).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},14).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},10).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},16).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},69).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({x:227,y:336.3},27).to({_off:true},1).wait(27).to({_off:false,x:354,y:237.3},1).to({x:443},14).to({_off:true,x:447,y:235.3},1).wait(10).to({_off:false,x:549.4,y:337.8},1).to({x:700,y:338},16).to({_off:true,y:323},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(28).to({_off:false},1).to({x:354,y:237.3},27).to({_off:true},1).wait(113));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(71).to({_off:false},1).to({x:549.4,y:336.3},10).to({_off:true,y:337.8},1).wait(87));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(99).to({_off:false},1).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.8,160.7,819.8,193);
p.frameBounds = [rect, rect, new cjs.Rectangle(-13.2,160.6,813.3,193.1), new cjs.Rectangle(-6.7,160.5,806.7,193.1), new cjs.Rectangle(-0.1,160.4,800.2,193), new cjs.Rectangle(6.4,160.4,793.7,193), new cjs.Rectangle(12.9,160.3,787.1,193.1), new cjs.Rectangle(19.5,160.2,780.6,193.1), new cjs.Rectangle(26.1,160.2,774,193), new cjs.Rectangle(32.6,160.1,767.4,193), new cjs.Rectangle(39.2,160.1,760.9,193.1), new cjs.Rectangle(45.7,160,754.3,193.1), new cjs.Rectangle(52.3,159.9,747.8,193), new cjs.Rectangle(58.8,159.9,741.2,193), new cjs.Rectangle(65.4,159.8,734.7,193.1), new cjs.Rectangle(71.9,159.7,728.1,193.1), new cjs.Rectangle(78.5,159.7,721.6,193), new cjs.Rectangle(85,159.6,715,193), new cjs.Rectangle(91.6,159.6,708.5,193.1), new cjs.Rectangle(98.1,159.5,701.9,193.1), new cjs.Rectangle(104.7,159.4,695.4,193), new cjs.Rectangle(111.2,159.4,688.8,193), new cjs.Rectangle(117.8,159.3,682.2,193.1), new cjs.Rectangle(124.4,159.2,675.7,193.1), new cjs.Rectangle(130.9,159.2,669.1,193), new cjs.Rectangle(137.5,159.1,662.6,193), new cjs.Rectangle(144,159.1,656,193.1), new cjs.Rectangle(150.6,159,649.5,193.1), rect=new cjs.Rectangle(157.2,159,642.9,193.1), rect, new cjs.Rectangle(161.8,155.3,638.2,196.8), new cjs.Rectangle(166.5,151.6,633.5,200.5), new cjs.Rectangle(171.2,147.9,628.8,204.1), new cjs.Rectangle(175.9,144.3,624.1,207.8), new cjs.Rectangle(180.6,140.6,619.4,211.5), new cjs.Rectangle(185.3,136.9,614.7,215.1), new cjs.Rectangle(190.1,133.3,610,218.8), new cjs.Rectangle(194.8,129.6,605.3,222.5), new cjs.Rectangle(199.5,125.9,600.6,226.1), new cjs.Rectangle(204.2,122.3,595.9,229.8), new cjs.Rectangle(208.9,118.6,591.2,233.5), new cjs.Rectangle(213.6,114.9,586.5,237.1), new cjs.Rectangle(218.3,111.3,581.8,240.8), new cjs.Rectangle(223,107.6,577.1,244.5), new cjs.Rectangle(227.7,103.9,572.4,248.1), new cjs.Rectangle(232.4,100.3,567.7,251.8), new cjs.Rectangle(237.1,96.6,563,255.5), new cjs.Rectangle(241.8,92.9,558.3,259.1), new cjs.Rectangle(246.5,89.3,553.6,262.8), new cjs.Rectangle(251.2,85.6,548.9,266.5), new cjs.Rectangle(255.9,81.9,544.1,270.1), new cjs.Rectangle(260.6,78.3,539.4,273.8), new cjs.Rectangle(265.3,74.6,534.7,277.5), new cjs.Rectangle(270,70.9,530,281.1), new cjs.Rectangle(274.7,67.3,525.3,284.8), new cjs.Rectangle(279.4,63.6,520.6,288.5), rect=new cjs.Rectangle(284.2,60,515.9,292.1), rect, new cjs.Rectangle(290.5,59.9,509.6,292.1), new cjs.Rectangle(296.8,59.9,503.2,292.1), new cjs.Rectangle(303.2,59.9,496.9,292.1), new cjs.Rectangle(309.6,59.9,490.5,292.1), new cjs.Rectangle(315.9,59.9,484.1,292.1), new cjs.Rectangle(322.3,59.9,477.8,292.1), new cjs.Rectangle(328.6,59.9,471.4,292.1), new cjs.Rectangle(335,59.9,465.1,292.1), new cjs.Rectangle(341.3,59.9,458.7,292.1), new cjs.Rectangle(347.7,59.9,452.4,292.1), new cjs.Rectangle(354.1,59.9,446,292.1), new cjs.Rectangle(360.4,59.9,439.6,292.1), new cjs.Rectangle(366.8,59.9,433.3,292.1), new cjs.Rectangle(373.2,60,426.9,292.1), new cjs.Rectangle(377.2,58,422.9,294.1), new cjs.Rectangle(387.4,68,412.7,284), new cjs.Rectangle(397.6,78.1,402.4,273.9), new cjs.Rectangle(407.9,88.2,392.2,263.8), new cjs.Rectangle(418.1,98.3,381.9,253.7), new cjs.Rectangle(428.4,108.4,371.7,243.6), new cjs.Rectangle(438.6,118.5,361.5,233.5), new cjs.Rectangle(448.8,128.6,351.2,223.4), new cjs.Rectangle(459.1,138.7,341,213.3), new cjs.Rectangle(469.3,148.8,330.7,203.2), new cjs.Rectangle(479.6,159,320.4,194.5), new cjs.Rectangle(479.6,160.5,320.4,193.1), new cjs.Rectangle(489,160.4,311.1,193), new cjs.Rectangle(498.4,160.5,301.7,193.1), new cjs.Rectangle(507.8,160.5,292.2,193.1), new cjs.Rectangle(517.2,160.5,282.8,193.1), new cjs.Rectangle(526.6,160.5,273.4,193.1), new cjs.Rectangle(536,160.5,264,193.1), new cjs.Rectangle(545.4,160.5,254.6,193.1), new cjs.Rectangle(554.9,160.5,245.2,193.1), new cjs.Rectangle(564.3,160.5,235.8,193.1), new cjs.Rectangle(573.7,160.6,226.4,193.1), new cjs.Rectangle(583.1,160.6,217,193.1), new cjs.Rectangle(592.5,160.6,207.5,193.1), new cjs.Rectangle(601.9,160.6,198.1,193.1), new cjs.Rectangle(611.3,160.6,188.7,193), new cjs.Rectangle(620.7,160.6,179.3,193), rect=new cjs.Rectangle(630.2,160.7,169.9,193), rect, rect=new cjs.Rectangle(630.1,160.6,169.9,193), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(630.1,156.6,169.9,197.1), new cjs.Rectangle(630.1,151.8,169.9,201.8), new cjs.Rectangle(630.1,147,169.9,206.7), new cjs.Rectangle(630.1,142.2,169.9,211.5), new cjs.Rectangle(630.1,137.5,169.9,216.2), new cjs.Rectangle(630.1,132.7,169.9,221), new cjs.Rectangle(630.1,127.9,169.9,225.8), new cjs.Rectangle(630.1,123.1,169.9,230.6), new cjs.Rectangle(630.1,118.3,169.9,235.3), new cjs.Rectangle(630.1,113.5,169.9,240.2), new cjs.Rectangle(630.1,108.8,169.9,244.9), new cjs.Rectangle(630.1,104,169.9,249.7), new cjs.Rectangle(630.1,99.2,169.9,254.5), new cjs.Rectangle(630.1,94.4,169.9,259.3), new cjs.Rectangle(630.1,89.6,169.9,264), rect=new cjs.Rectangle(630.1,160.6,169.9,193), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(630.2,160.7,169.9,193)];


(lib.animation_location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.heart_prize_mc();
	this.instance.setTransform(725,202,0.173,0.173);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(130).to({_off:false},0).to({scaleX:0.53,scaleY:0.53,x:724,y:65,alpha:0.012},30).to({_off:true},1).wait(9));

	// animation
	this.instance_1 = new lib.satan1_mc();
	this.instance_1.setTransform(751.3,213,0.5,0.5,0,0,0,-0.2,0);

	this.instance_2 = new lib.satan3_mc();
	this.instance_2.setTransform(751.3,213,0.5,0.5,0,0,0,-0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},100).wait(70));

	// animation
	this.instance_3 = new lib.hero_mc();
	this.instance_3.setTransform(50,287);

	this.instance_4 = new lib.hero_3walk_mc();
	this.instance_4.setTransform(50,287);
	this.instance_4._off = true;

	this.instance_5 = new lib.hero_2_mc();
	this.instance_5.setTransform(700,272);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},98).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},69).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({x:700},98).to({_off:true,y:272},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(99).to({_off:false},1).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.8,109.7,819.8,193);
p.frameBounds = [rect, rect, new cjs.Rectangle(-13.1,109.6,813.2,193), new cjs.Rectangle(-6.5,109.6,806.6,193), new cjs.Rectangle(0.1,109.6,800,193), new cjs.Rectangle(6.7,109.6,793.3,193), new cjs.Rectangle(13.3,109.6,786.7,193), new cjs.Rectangle(20,109.6,780.1,193), new cjs.Rectangle(26.6,109.6,773.5,193), new cjs.Rectangle(33.2,109.6,766.8,193), new cjs.Rectangle(39.9,109.6,760.2,193), new cjs.Rectangle(46.5,109.6,753.6,193), new cjs.Rectangle(53.1,109.6,746.9,193), new cjs.Rectangle(59.8,109.6,740.3,193), new cjs.Rectangle(66.4,109.6,733.7,193), new cjs.Rectangle(73,109.6,727,193), new cjs.Rectangle(79.7,109.6,720.4,193), new cjs.Rectangle(86.3,109.6,713.8,193), new cjs.Rectangle(92.9,109.6,707.1,193), new cjs.Rectangle(99.6,109.6,700.5,193), new cjs.Rectangle(106.2,109.6,693.9,193), new cjs.Rectangle(112.8,109.6,687.2,193), new cjs.Rectangle(119.4,109.6,680.6,193), new cjs.Rectangle(126.1,109.6,674,193), new cjs.Rectangle(132.7,109.6,667.3,193), new cjs.Rectangle(139.4,109.6,660.7,193), new cjs.Rectangle(146,109.6,654.1,193), new cjs.Rectangle(152.6,109.6,647.4,193), new cjs.Rectangle(159.2,109.6,640.8,193), new cjs.Rectangle(165.9,109.6,634.2,193), new cjs.Rectangle(172.5,109.6,627.5,193), new cjs.Rectangle(179.1,109.6,620.9,193), new cjs.Rectangle(185.8,109.6,614.3,193), new cjs.Rectangle(192.4,109.6,607.6,193), new cjs.Rectangle(199,109.6,601,193), new cjs.Rectangle(205.7,109.6,594.4,193), new cjs.Rectangle(212.3,109.6,587.8,193), new cjs.Rectangle(218.9,109.6,581.1,193), new cjs.Rectangle(225.6,109.6,574.5,193), new cjs.Rectangle(232.2,109.6,567.9,193), new cjs.Rectangle(238.8,109.6,561.2,193), new cjs.Rectangle(245.5,109.6,554.6,193), new cjs.Rectangle(252.1,109.6,548,193), new cjs.Rectangle(258.7,109.6,541.3,193), new cjs.Rectangle(265.4,109.6,534.7,193), new cjs.Rectangle(272,109.6,528.1,193), new cjs.Rectangle(278.6,109.6,521.4,193), new cjs.Rectangle(285.3,109.6,514.8,193), new cjs.Rectangle(291.9,109.6,508.2,193), new cjs.Rectangle(298.5,109.6,501.5,193), new cjs.Rectangle(305.1,109.6,494.9,193), new cjs.Rectangle(311.8,109.6,488.3,193), new cjs.Rectangle(318.4,109.6,481.6,193), new cjs.Rectangle(325,109.6,475,193), new cjs.Rectangle(331.7,109.6,468.4,193), new cjs.Rectangle(338.3,109.6,461.7,193), new cjs.Rectangle(344.9,109.6,455.1,193), new cjs.Rectangle(351.6,109.6,448.5,193), new cjs.Rectangle(358.2,109.6,441.8,193), new cjs.Rectangle(364.8,109.6,435.2,193), new cjs.Rectangle(371.5,109.6,428.6,193), new cjs.Rectangle(378.1,109.6,421.9,193), new cjs.Rectangle(384.7,109.6,415.3,193), new cjs.Rectangle(391.4,109.6,408.7,193), new cjs.Rectangle(398,109.6,402.1,193), new cjs.Rectangle(404.6,109.6,395.4,193), new cjs.Rectangle(411.3,109.6,388.8,193), new cjs.Rectangle(417.9,109.6,382.2,193), new cjs.Rectangle(424.5,109.6,375.5,193), new cjs.Rectangle(431.2,109.6,368.9,193), new cjs.Rectangle(437.8,109.6,362.3,193), new cjs.Rectangle(444.4,109.6,355.6,193), new cjs.Rectangle(451.1,109.6,349,193), new cjs.Rectangle(457.7,109.6,342.4,193), new cjs.Rectangle(464.3,109.6,335.7,193), new cjs.Rectangle(471,109.6,329.1,193), new cjs.Rectangle(477.6,109.6,322.5,193), new cjs.Rectangle(484.2,109.6,315.8,193), new cjs.Rectangle(490.9,109.6,309.2,193), new cjs.Rectangle(497.5,109.6,302.6,193), new cjs.Rectangle(504.1,109.6,295.9,193), new cjs.Rectangle(510.7,109.6,289.3,193), new cjs.Rectangle(517.4,109.6,282.7,193), new cjs.Rectangle(524,109.6,276,193), new cjs.Rectangle(530.6,109.6,269.4,193), new cjs.Rectangle(537.3,109.6,262.8,193), new cjs.Rectangle(543.9,109.6,256.1,193), new cjs.Rectangle(550.5,109.6,249.5,193), new cjs.Rectangle(557.2,109.6,242.9,193), new cjs.Rectangle(563.8,109.6,236.2,193), new cjs.Rectangle(570.4,109.6,229.6,193), new cjs.Rectangle(577.1,109.6,223,193), new cjs.Rectangle(583.7,109.6,216.3,193), new cjs.Rectangle(590.3,109.6,209.7,193), new cjs.Rectangle(597,109.6,203,193), new cjs.Rectangle(603.6,109.6,196.5,193), new cjs.Rectangle(610.2,109.6,189.8,193), new cjs.Rectangle(616.9,109.6,183.1,193), new cjs.Rectangle(623.5,109.6,176.5,193), rect=new cjs.Rectangle(630.2,109.7,169.9,193), rect, rect=new cjs.Rectangle(630.1,109.6,169.9,193), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(630.1,106.1,169.9,196.6), new cjs.Rectangle(630.1,100.7,169.9,202), new cjs.Rectangle(630.1,95.4,169.9,207.2), new cjs.Rectangle(630.1,90.1,169.9,212.6), new cjs.Rectangle(630.1,84.8,169.9,217.9), new cjs.Rectangle(630.1,79.5,169.9,223.2), new cjs.Rectangle(630.1,74.2,169.9,228.5), new cjs.Rectangle(630.1,68.8,169.9,233.8), new cjs.Rectangle(630.1,63.5,169.9,239.2), new cjs.Rectangle(630.1,58.2,169.9,244.5), new cjs.Rectangle(630.1,52.9,169.9,249.8), new cjs.Rectangle(630.1,47.6,169.9,255.1), new cjs.Rectangle(630.1,42.3,169.9,260.4), new cjs.Rectangle(630.1,36.9,169.9,265.8), new cjs.Rectangle(630.1,31.6,169.9,271), rect=new cjs.Rectangle(630.1,109.6,169.9,193), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(630.2,109.7,169.9,193)];


(lib.animation_location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.heart_prize_mc();
	this.instance.setTransform(725,202,0.173,0.173);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(130).to({_off:false},0).to({scaleX:0.53,scaleY:0.53,x:724,y:65,alpha:0.012},30).to({_off:true},1).wait(9));

	// animation
	this.instance_1 = new lib.satan1_mc();
	this.instance_1.setTransform(751.3,213,0.5,0.5,0,0,0,-0.2,0);

	this.instance_2 = new lib.satan3_mc();
	this.instance_2.setTransform(751.3,213,0.5,0.5,0,0,0,-0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},100).wait(70));

	// animation
	this.instance_3 = new lib.hero_mc();
	this.instance_3.setTransform(50,287);

	this.instance_4 = new lib.hero_3walk_mc();
	this.instance_4.setTransform(50,287);
	this.instance_4._off = true;

	this.instance_5 = new lib.hero_2_mc();
	this.instance_5.setTransform(700,272);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},98).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},69).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({x:700},98).to({_off:true,y:272},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(99).to({_off:false},1).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.8,109.7,819.8,193);
p.frameBounds = [rect, rect, new cjs.Rectangle(-13.1,109.6,813.2,193), new cjs.Rectangle(-6.5,109.6,806.6,193), new cjs.Rectangle(0.1,109.6,800,193), new cjs.Rectangle(6.7,109.6,793.3,193), new cjs.Rectangle(13.3,109.6,786.7,193), new cjs.Rectangle(20,109.6,780.1,193), new cjs.Rectangle(26.6,109.6,773.5,193), new cjs.Rectangle(33.2,109.6,766.8,193), new cjs.Rectangle(39.9,109.6,760.2,193), new cjs.Rectangle(46.5,109.6,753.6,193), new cjs.Rectangle(53.1,109.6,746.9,193), new cjs.Rectangle(59.8,109.6,740.3,193), new cjs.Rectangle(66.4,109.6,733.7,193), new cjs.Rectangle(73,109.6,727,193), new cjs.Rectangle(79.7,109.6,720.4,193), new cjs.Rectangle(86.3,109.6,713.8,193), new cjs.Rectangle(92.9,109.6,707.1,193), new cjs.Rectangle(99.6,109.6,700.5,193), new cjs.Rectangle(106.2,109.6,693.9,193), new cjs.Rectangle(112.8,109.6,687.2,193), new cjs.Rectangle(119.4,109.6,680.6,193), new cjs.Rectangle(126.1,109.6,674,193), new cjs.Rectangle(132.7,109.6,667.3,193), new cjs.Rectangle(139.4,109.6,660.7,193), new cjs.Rectangle(146,109.6,654.1,193), new cjs.Rectangle(152.6,109.6,647.4,193), new cjs.Rectangle(159.2,109.6,640.8,193), new cjs.Rectangle(165.9,109.6,634.2,193), new cjs.Rectangle(172.5,109.6,627.5,193), new cjs.Rectangle(179.1,109.6,620.9,193), new cjs.Rectangle(185.8,109.6,614.3,193), new cjs.Rectangle(192.4,109.6,607.6,193), new cjs.Rectangle(199,109.6,601,193), new cjs.Rectangle(205.7,109.6,594.4,193), new cjs.Rectangle(212.3,109.6,587.8,193), new cjs.Rectangle(218.9,109.6,581.1,193), new cjs.Rectangle(225.6,109.6,574.5,193), new cjs.Rectangle(232.2,109.6,567.9,193), new cjs.Rectangle(238.8,109.6,561.2,193), new cjs.Rectangle(245.5,109.6,554.6,193), new cjs.Rectangle(252.1,109.6,548,193), new cjs.Rectangle(258.7,109.6,541.3,193), new cjs.Rectangle(265.4,109.6,534.7,193), new cjs.Rectangle(272,109.6,528.1,193), new cjs.Rectangle(278.6,109.6,521.4,193), new cjs.Rectangle(285.3,109.6,514.8,193), new cjs.Rectangle(291.9,109.6,508.2,193), new cjs.Rectangle(298.5,109.6,501.5,193), new cjs.Rectangle(305.1,109.6,494.9,193), new cjs.Rectangle(311.8,109.6,488.3,193), new cjs.Rectangle(318.4,109.6,481.6,193), new cjs.Rectangle(325,109.6,475,193), new cjs.Rectangle(331.7,109.6,468.4,193), new cjs.Rectangle(338.3,109.6,461.7,193), new cjs.Rectangle(344.9,109.6,455.1,193), new cjs.Rectangle(351.6,109.6,448.5,193), new cjs.Rectangle(358.2,109.6,441.8,193), new cjs.Rectangle(364.8,109.6,435.2,193), new cjs.Rectangle(371.5,109.6,428.6,193), new cjs.Rectangle(378.1,109.6,421.9,193), new cjs.Rectangle(384.7,109.6,415.3,193), new cjs.Rectangle(391.4,109.6,408.7,193), new cjs.Rectangle(398,109.6,402.1,193), new cjs.Rectangle(404.6,109.6,395.4,193), new cjs.Rectangle(411.3,109.6,388.8,193), new cjs.Rectangle(417.9,109.6,382.2,193), new cjs.Rectangle(424.5,109.6,375.5,193), new cjs.Rectangle(431.2,109.6,368.9,193), new cjs.Rectangle(437.8,109.6,362.3,193), new cjs.Rectangle(444.4,109.6,355.6,193), new cjs.Rectangle(451.1,109.6,349,193), new cjs.Rectangle(457.7,109.6,342.4,193), new cjs.Rectangle(464.3,109.6,335.7,193), new cjs.Rectangle(471,109.6,329.1,193), new cjs.Rectangle(477.6,109.6,322.5,193), new cjs.Rectangle(484.2,109.6,315.8,193), new cjs.Rectangle(490.9,109.6,309.2,193), new cjs.Rectangle(497.5,109.6,302.6,193), new cjs.Rectangle(504.1,109.6,295.9,193), new cjs.Rectangle(510.7,109.6,289.3,193), new cjs.Rectangle(517.4,109.6,282.7,193), new cjs.Rectangle(524,109.6,276,193), new cjs.Rectangle(530.6,109.6,269.4,193), new cjs.Rectangle(537.3,109.6,262.8,193), new cjs.Rectangle(543.9,109.6,256.1,193), new cjs.Rectangle(550.5,109.6,249.5,193), new cjs.Rectangle(557.2,109.6,242.9,193), new cjs.Rectangle(563.8,109.6,236.2,193), new cjs.Rectangle(570.4,109.6,229.6,193), new cjs.Rectangle(577.1,109.6,223,193), new cjs.Rectangle(583.7,109.6,216.3,193), new cjs.Rectangle(590.3,109.6,209.7,193), new cjs.Rectangle(597,109.6,203,193), new cjs.Rectangle(603.6,109.6,196.5,193), new cjs.Rectangle(610.2,109.6,189.8,193), new cjs.Rectangle(616.9,109.6,183.1,193), new cjs.Rectangle(623.5,109.6,176.5,193), rect=new cjs.Rectangle(630.2,109.7,169.9,193), rect, rect=new cjs.Rectangle(630.1,109.6,169.9,193), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(630.1,106.1,169.9,196.6), new cjs.Rectangle(630.1,100.7,169.9,202), new cjs.Rectangle(630.1,95.4,169.9,207.2), new cjs.Rectangle(630.1,90.1,169.9,212.6), new cjs.Rectangle(630.1,84.8,169.9,217.9), new cjs.Rectangle(630.1,79.5,169.9,223.2), new cjs.Rectangle(630.1,74.2,169.9,228.5), new cjs.Rectangle(630.1,68.8,169.9,233.8), new cjs.Rectangle(630.1,63.5,169.9,239.2), new cjs.Rectangle(630.1,58.2,169.9,244.5), new cjs.Rectangle(630.1,52.9,169.9,249.8), new cjs.Rectangle(630.1,47.6,169.9,255.1), new cjs.Rectangle(630.1,42.3,169.9,260.4), new cjs.Rectangle(630.1,36.9,169.9,265.8), new cjs.Rectangle(630.1,31.6,169.9,271), rect=new cjs.Rectangle(630.1,109.6,169.9,193), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(630.2,109.7,169.9,193)];


(lib.Bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-63,150,125);
p.frameBounds = [rect];


(lib.Bubble_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_3_3_mc();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8,-8,16,16);
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
		_createBubblesFunc(8);
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
	this.instance.setTransform(0,700);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// container
	this.container_mc = new lib.bubble_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8,0,308,708);
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
	this.body_mc = new lib.body_title_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-140,320,280);
p.frameBounds = [rect];


(lib.objects_location_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// objects
	this.drag_6 = new lib.drag_6_11_mc();
	this.drag_6.setTransform(360,535);

	this.drag_5 = new lib.drag_5_11_mc();
	this.drag_5.setTransform(120,535);

	this.object_6 = new lib.object_6_11_mc();
	this.object_6.setTransform(400,250);

	this.object_5 = new lib.object_5_11_mc();
	this.object_5.setTransform(425,125);

	this.drag_4 = new lib.drag_4_11_mc();
	this.drag_4.setTransform(480,535);

	this.drag_3 = new lib.drag_3_11_mc();
	this.drag_3.setTransform(240,535);

	this.object_4 = new lib.object_4_11_mc();
	this.object_4.setTransform(600,350);

	this.object_3 = new lib.object_3_11_mc();
	this.object_3.setTransform(500,350);

	this.drag_2 = new lib.drag_2_11_mc();
	this.drag_2.setTransform(660,490);

	this.object_2 = new lib.object_2_11_mc();
	this.object_2.setTransform(375,225);

	this.drag_1 = new lib.drag_1_11_mc();
	this.drag_1.setTransform(590,490);

	this.object_1 = new lib.object_1_11_mc();
	this.object_1.setTransform(125,225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1},{t:this.drag_1},{t:this.object_2},{t:this.drag_2},{t:this.object_3},{t:this.object_4},{t:this.drag_3},{t:this.drag_4},{t:this.object_5},{t:this.object_6},{t:this.drag_5},{t:this.drag_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(70,50,615,535);
p.frameBounds = [rect];


(lib.objects_location_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// objects
	this.drag_3 = new lib.drag_3_10_mc();
	this.drag_3.setTransform(550,500);

	this.drag_1 = new lib.drag_1_10_mc();
	this.drag_1.setTransform(250,500);

	this.object_8 = new lib.object_8_10_mc();
	this.object_8.setTransform(550,150);

	this.object_7 = new lib.object_7_10_mc();
	this.object_7.setTransform(450,150);

	this.object_6 = new lib.object_6_10_mc();
	this.object_6.setTransform(350,150);

	this.object_5 = new lib.object_5_10_mc();
	this.object_5.setTransform(550,350);

	this.object_4 = new lib.object_4_10_mc();
	this.object_4.setTransform(450,350);

	this.object_1 = new lib.object_1_10_mc();
	this.object_1.setTransform(175,224);

	this.object_3 = new lib.object_3_10_mc();
	this.object_3.setTransform(350,350);

	this.drag_2 = new lib.drag_2_10_mc();
	this.drag_2.setTransform(400,490);

	this.object_2 = new lib.object_2_10_mc();
	this.object_2.setTransform(225,325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_2},{t:this.drag_2},{t:this.object_3},{t:this.object_1},{t:this.object_4},{t:this.object_5},{t:this.object_6},{t:this.object_7},{t:this.object_8},{t:this.drag_1},{t:this.drag_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(150,35,460,530.5);
p.frameBounds = [rect];


(lib.objects_location_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// objects
	this.object_3 = new lib.object_3_8_mc();
	this.object_3.setTransform(530,250);

	this.object_2 = new lib.object_2_8_mc();
	this.object_2.setTransform(275,250);

	this.drag_1 = new lib.drag_1_8_mc();
	this.drag_1.setTransform(125,500);

	this.object_1 = new lib.object_1_8_mc();
	this.object_1.setTransform(400,324.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1},{t:this.drag_1},{t:this.object_2},{t:this.object_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(75,135,515,415);
p.frameBounds = [rect];


(lib.objects_location_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// objects
	this.object_2 = new lib.object_2_7_mc();
	this.object_2.setTransform(400,350);

	this.object_4 = new lib.object_4_7_mc();
	this.object_4.setTransform(650,250);

	this.drag_4 = new lib.drag_4_7_mc();
	this.drag_4.setTransform(220,499);

	this.object_3 = new lib.object_3_7_mc();
	this.object_3.setTransform(400,350);

	this.drag_3 = new lib.drag_3_7_mc();
	this.drag_3.setTransform(620,499);

	this.drag_1 = new lib.drag_1_7_mc();
	this.drag_1.setTransform(400,499);

	this.object_1 = new lib.object_1_7_mc();
	this.object_1.setTransform(150,250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1},{t:this.drag_1},{t:this.drag_3},{t:this.object_3},{t:this.drag_4},{t:this.object_4},{t:this.object_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(70,200,650,349);
p.frameBounds = [rect];


(lib.objects_location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// objects
	this.object_5 = new lib.object_5_5_mc();
	this.object_5.setTransform(600,150);

	this.object_4 = new lib.object_4_5_mc();
	this.object_4.setTransform(200,350);

	this.object_3 = new lib.object_3_5_mc();
	this.object_3.setTransform(450,250);

	this.object_2 = new lib.object_2_5_mc();
	this.object_2.setTransform(350,350);

	this.drag_4 = new lib.drag_4_5_mc();
	this.drag_4.setTransform(130,497);

	this.drag_3 = new lib.drag_3_5_mc();
	this.drag_3.setTransform(505,500);

	this.drag_2 = new lib.drag_2_5_mc();
	this.drag_2.setTransform(255,500);

	this.drag_1 = new lib.drag_1_5_mc();
	this.drag_1.setTransform(380,500);

	this.object_1 = new lib.object_1_5_mc();
	this.object_1.setTransform(450,350);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1},{t:this.drag_1},{t:this.drag_2},{t:this.drag_3},{t:this.drag_4},{t:this.object_2},{t:this.object_3},{t:this.object_4},{t:this.object_5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(80,35,580,515);
p.frameBounds = [rect];


(lib.location_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// objects
	this.objects_mc = new lib.objects_location_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.objects_mc).wait(1));

	// animation
	this.animation_mc = new lib.animation_location_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

	// level
	this.level_mc = new lib.level_mc();
	this.level_mc.setTransform(640,30);

	this.timeline.addTween(cjs.Tween.get(this.level_mc).wait(1));

	// ground
	this.ground_mc = new lib.ground_location_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.ground_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-20,1200,621);
p.frameBounds = [rect];


(lib.location_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// objects
	this.objects_mc = new lib.objects_location_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.objects_mc).wait(1));

	// animation
	this.animation_mc = new lib.animation_location_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

	// level
	this.level_mc = new lib.level_mc();
	this.level_mc.setTransform(300,30);

	this.timeline.addTween(cjs.Tween.get(this.level_mc).wait(1));

	// ground
	this.ground_mc = new lib.ground_location_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.ground_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-0.5,1200,600.5);
p.frameBounds = [rect];


(lib.location_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// objects
	this.objects_mc = new lib.objects_location_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.objects_mc).wait(1));

	// animation
	this.animation_mc = new lib.animation_location_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

	// level
	this.level_mc = new lib.level_mc();
	this.level_mc.setTransform(640,30);

	this.timeline.addTween(cjs.Tween.get(this.level_mc).wait(1));

	// ground
	this.ground_mc = new lib.ground_location_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.ground_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// objects
	this.objects_mc = new lib.objects_location_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.objects_mc).wait(1));

	// animation
	this.animation_mc = new lib.animation_location_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

	// level
	this.level_mc = new lib.level_mc();
	this.level_mc.setTransform(300,30);

	this.timeline.addTween(cjs.Tween.get(this.level_mc).wait(1));

	// ground
	this.ground_mc = new lib.ground_location_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.ground_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-450,1200,1050);
p.frameBounds = [rect];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// objects
	this.objects_mc = new lib.objects_location_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.objects_mc).wait(1));

	// animation
	this.animation_mc = new lib.animation_location_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

	// level
	this.level_mc = new lib.level_mc();
	this.level_mc.setTransform(490,30);

	this.timeline.addTween(cjs.Tween.get(this.level_mc).wait(1));

	// ground
	this.ground_mc = new lib.ground_location_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.ground_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-450,1200,1050);
p.frameBounds = [rect];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// objects
	this.objects_mc = new lib.objects_location_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.objects_mc).wait(1));

	// animation
	this.animation_mc = new lib.animation_location_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

	// level
	this.level_mc = new lib.level_mc();
	this.level_mc.setTransform(640,30);

	this.timeline.addTween(cjs.Tween.get(this.level_mc).wait(1));

	// ground
	this.ground_mc = new lib.ground_location_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.ground_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-20,1200,620);
p.frameBounds = [rect];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// objects
	this.objects_mc = new lib.objects_location_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.objects_mc).wait(1));

	// animation
	this.animation_mc = new lib.animation_location_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

	// level
	this.level_mc = new lib.level_mc();
	this.level_mc.setTransform(640,30);

	this.timeline.addTween(cjs.Tween.get(this.level_mc).wait(1));

	// ground
	this.ground_mc = new lib.ground_location_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.ground_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-4.9,1200,606);
p.frameBounds = [rect];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// help
	this.help_mc = new lib.help_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.help_mc).wait(1));

	// objects
	this.objects_mc = new lib.objects_location_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.objects_mc).wait(1));

	// animation
	this.animation_mc = new lib.animation_location_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

	// level
	this.level_mc = new lib.level_mc();
	this.level_mc.setTransform(640,30);

	this.timeline.addTween(cjs.Tween.get(this.level_mc).wait(1));

	// ground
	this.ground_mc = new lib.ground_location_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.ground_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-54,1200,655);
p.frameBounds = [rect];


(lib.ground_location_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.substrate_for_objects_1_mc();
	this.instance.setTransform(400,500);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.ground_11_img();
	this.instance_1.setTransform(-200,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// lava
	this.instance_2 = new lib.lava_mc();
	this.instance_2.setTransform(550,370);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_2_mc();
	this.bubble_comp.setTransform(395,25);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// graph
	this.instance_3 = new lib.background_3_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,733);
p.frameBounds = [rect];


(lib.ground_location_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.substrate_for_objects_1_mc();
	this.instance.setTransform(400,500);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.ground_10_img();
	this.instance_1.setTransform(-200,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_2_mc();
	this.bubble_comp.setTransform(40,0);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// graph
	this.instance_2 = new lib.background_4_img();
	this.instance_2.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,708);
p.frameBounds = [rect];


(lib.ground_location_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.substrate_for_objects_1_mc();
	this.instance.setTransform(400,500);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.ground_9_img();
	this.instance_1.setTransform(-200,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_2_mc();
	this.bubble_comp.setTransform(100,105);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// graph
	this.instance_2 = new lib.background_3_img();
	this.instance_2.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,813);
p.frameBounds = [rect];


(lib.cartoons_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1_mc = new lib.cartoon_1_mc();
	this.body_1_mc.setTransform(400,300);

	this.body_2_mc = new lib.cartoon_2_mc();
	this.body_2_mc.setTransform(400,300);

	this.body_3_mc = new lib.cartoon_3_mc();
	this.body_3_mc.setTransform(400,300);

	this.body_4_mc = new lib.cartoon_4_mc();
	this.body_4_mc.setTransform(400,300);

	this.body_5_mc = new lib.cartoon_5_mc();
	this.body_5_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1_mc}]}).to({state:[{t:this.body_2_mc}]},1).to({state:[{t:this.body_3_mc}]},1).to({state:[{t:this.body_4_mc}]},1).to({state:[{t:this.body_5_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-422.8,1200,1022.8);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, new cjs.Rectangle(-200,-97.4,1200,697.4), new cjs.Rectangle(-200,0,1200,600)];


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
		_createBubblesFunc(6);
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
	this.instance.setTransform(600,700);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// container
	this.container_mc = new lib.bubble_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,762);
p.frameBounds = [rect];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,1000);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(110.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(400,850,0.727,0.727);
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.play_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// title
	this.instance = new lib.title_mc();
	this.instance.setTransform(180.5,290.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// heroes
	this.instance_2 = new lib.heroes_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.instance_3 = new lib.background_1_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1361.9);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(580.5,700.5,0.75,0.75,0,0,0,0.7,0.7);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,1000);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(220,700,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.playAgain_btn = new lib.again_btn();
	this.playAgain_btn.setTransform(100,500);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.again_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.playAgain_btn},{t:this.freeGames_mc},{t:this.moreGames_btn},{t:this.social_network_mc}]}).wait(1));

	// congratulations
	this.instance = new lib.animation_congratulations_mc();
	this.instance.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// banners
	this.banner_2_mc = new lib.banner_2_mc();
	this.banner_2_mc.setTransform(720,-200,0.923,0.923);

	this.banner_1_mc = new lib.banner_1_mc();
	this.banner_1_mc.setTransform(80,-200,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.banner_1_mc},{t:this.banner_2_mc}]}).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// heroes
	this.instance_2 = new lib.heroes_mc();
	this.instance_2.setTransform(379.9,303.9,1,1,0,0,0,379.9,303.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(0.1,1,1,1,0,0,0,200.1,1);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_3 = new lib.background_1_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-319.9,1272.7,1401);
p.frameBounds = [rect];


(lib.LocationScreen_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.done_btn = new lib.done_btn();
	this.done_btn.setTransform(720.3,520.3,0.875,0.875,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.done_btn, 0, 1, 2, false, new lib.done_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(110.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(400,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.done_btn}]}).wait(1));

	// body
	this.body_mc = new lib.location_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-280.8,1200,1251.8);
p.frameBounds = [rect];


(lib.LocationScreen_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.done_btn = new lib.done_btn();
	this.done_btn.setTransform(720.3,520.3,0.875,0.875,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.done_btn, 0, 1, 2, false, new lib.done_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,-50,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(110.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(400,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.done_btn}]}).wait(1));

	// body
	this.body_mc = new lib.location_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-280.8,1200,1251.8);
p.frameBounds = [rect];


(lib.LocationScreen_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.done_btn = new lib.done_btn();
	this.done_btn.setTransform(720.3,520.3,0.875,0.875,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.done_btn, 0, 1, 2, false, new lib.done_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(110.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(400,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.done_btn}]}).wait(1));

	// body
	this.body_mc = new lib.location_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-280.8,1200,1251.8);
p.frameBounds = [rect];


(lib.LocationScreen_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.done_btn = new lib.done_btn();
	this.done_btn.setTransform(720.3,520.3,0.875,0.875,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.done_btn, 0, 1, 2, false, new lib.done_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(110.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(400,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.done_btn}]}).wait(1));

	// body
	this.body_mc = new lib.location_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-450,1200,1420.9);
p.frameBounds = [rect];


(lib.LocationScreen_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.done_btn = new lib.done_btn();
	this.done_btn.setTransform(720.3,520.3,0.875,0.875,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.done_btn, 0, 1, 2, false, new lib.done_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(110.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(400,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.done_btn}]}).wait(1));

	// body
	this.body_mc = new lib.location_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-450,1200,1420.9);
p.frameBounds = [rect];


(lib.LocationScreen_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.done_btn = new lib.done_btn();
	this.done_btn.setTransform(720.3,520.3,0.875,0.875,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.done_btn, 0, 1, 2, false, new lib.done_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(110.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(400,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.done_btn}]}).wait(1));

	// body
	this.body_mc = new lib.location_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-280.8,1200,1251.8);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.done_btn = new lib.done_btn();
	this.done_btn.setTransform(720.3,520.3,0.875,0.875,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.done_btn, 0, 1, 2, false, new lib.done_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(110.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(400,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.done_btn}]}).wait(1));

	// body
	this.body_mc = new lib.location_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-280.8,1200,1251.8);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.done_btn = new lib.done_btn();
	this.done_btn.setTransform(720.3,520.3,0.875,0.875,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.done_btn, 0, 1, 2, false, new lib.done_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(110.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(400,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.done_btn}]}).wait(1));

	// body
	this.body_mc = new lib.location_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-280.8,1200,1251.8);
p.frameBounds = [rect];


(lib.location_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// objects
	this.objects_mc = new lib.objects_location_11_mc();

	this.timeline.addTween(cjs.Tween.get(this.objects_mc).wait(1));

	// animation
	this.animation_mc = new lib.animation_location_11_mc();

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

	// level
	this.level_mc = new lib.level_mc();
	this.level_mc.setTransform(640,30);

	this.timeline.addTween(cjs.Tween.get(this.level_mc).wait(1));

	// ground
	this.ground_mc = new lib.ground_location_11_mc();

	this.timeline.addTween(cjs.Tween.get(this.ground_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,733);
p.frameBounds = [rect];


(lib.location_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// objects
	this.objects_mc = new lib.objects_location_10_mc();

	this.timeline.addTween(cjs.Tween.get(this.objects_mc).wait(1));

	// animation
	this.animation_mc = new lib.animation_location_10_mc();

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

	// level
	this.level_mc = new lib.level_mc();
	this.level_mc.setTransform(300,30);

	this.timeline.addTween(cjs.Tween.get(this.level_mc).wait(1));

	// ground
	this.ground_mc = new lib.ground_location_10_mc();

	this.timeline.addTween(cjs.Tween.get(this.ground_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,708);
p.frameBounds = [rect];


(lib.location_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// objects
	this.objects_mc = new lib.objects_location_9_mc();

	this.timeline.addTween(cjs.Tween.get(this.objects_mc).wait(1));

	// animation
	this.animation_mc = new lib.animation_location_9_mc();

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

	// level
	this.level_mc = new lib.level_mc();
	this.level_mc.setTransform(120,30);

	this.timeline.addTween(cjs.Tween.get(this.level_mc).wait(1));

	// ground
	this.ground_mc = new lib.ground_location_9_mc();

	this.timeline.addTween(cjs.Tween.get(this.ground_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,813);
p.frameBounds = [rect];


(lib.CartoonScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(700,520);

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

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-422.8,1262.7,1403.8);
p.frameBounds = [rect];


(lib.LocationScreen_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.done_btn = new lib.done_btn();
	this.done_btn.setTransform(720.3,520.3,0.875,0.875,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.done_btn, 0, 1, 2, false, new lib.done_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(110.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(400,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.done_btn}]}).wait(1));

	// body
	this.body_mc = new lib.location_11_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-280.8,1200,1251.8);
p.frameBounds = [rect];


(lib.LocationScreen_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.done_btn = new lib.done_btn();
	this.done_btn.setTransform(720.3,520.3,0.875,0.875,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.done_btn, 0, 1, 2, false, new lib.done_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(110.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(400,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.done_btn}]}).wait(1));

	// body
	this.body_mc = new lib.location_10_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-280.8,1200,1251.8);
p.frameBounds = [rect];


(lib.LocationScreen_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.done_btn = new lib.done_btn();
	this.done_btn.setTransform(720.3,520.3,0.875,0.875,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.done_btn, 0, 1, 2, false, new lib.done_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(400,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.done_btn}]}).wait(1));

	// body
	this.body_mc = new lib.location_9_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-280.8,1200,1251.8);
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
	this.text.lineWidth = 252;
	this.text.setTransform(128.2,2);

	this.instance = new lib.PreloaderScreen();

	this.ikNode_1 = new lib.CopyrightScreen();

	this.instance_1 = new lib.WelcomeScreen();

	this.instance_2 = new lib.CartoonScreen();

	this.instance_3 = new lib.LocationScreen_1();
	this.instance_3.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_4 = new lib.LocationScreen_2();
	this.instance_4.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_5 = new lib.LocationScreen_3();
	this.instance_5.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_6 = new lib.LocationScreen_4();
	this.instance_6.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_7 = new lib.LocationScreen_5();
	this.instance_7.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_8 = new lib.LocationScreen_6();
	this.instance_8.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_9 = new lib.LocationScreen_7();
	this.instance_9.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_10 = new lib.LocationScreen_8();
	this.instance_10.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_11 = new lib.LocationScreen_9();

	this.instance_12 = new lib.LocationScreen_10();
	this.instance_12.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_13 = new lib.LocationScreen_11();
	this.instance_13.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_14 = new lib.RedirectScreen();

	this.instance_15 = new lib.ResultScreen();

	this.instance_16 = new lib.InstructionScreen();

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(250,50);

	this.instance_17 = new lib.Cursor();
	this.instance_17.setTransform(185,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(115.1,50,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(45.1,50,0.583,0.583,0,0,0,0.1,0);

	this.instance_18 = new lib.OrientationLockScreen();

	this.instance_19 = new lib.CurtainScreen();

	this.instance_20 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.ikNode_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_17},{t:this.gravity_explosion_comp}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[]},1).to({state:[{t:this.instance_20}]},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, new cjs.Rectangle(-262.6,-280.8,1262.7,1361.9), new cjs.Rectangle(-262.6,-422.8,1262.7,1403.8), rect=new cjs.Rectangle(-200,-280.8,1200,1251.8), rect, rect, rect=new cjs.Rectangle(-200,-450,1200,1420.9), rect, rect=new cjs.Rectangle(-200,-280.8,1200,1251.8), rect, rect, rect, rect, rect, null, new cjs.Rectangle(-200,0,1200,780), new cjs.Rectangle(-262.6,-319.9,1272.7,1401), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(10,15,248,70), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(1095,-5,1210,610), rect=null, rect, rect, rect, rect, rect, new cjs.Rectangle(-410,-10,1620,620)];


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