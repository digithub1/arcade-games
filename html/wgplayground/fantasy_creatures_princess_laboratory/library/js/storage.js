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
		{name:"storage_atlas_2", frames: [[0,602,1600,600],[0,0,1600,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_4", frames: [[0,0,600,1024],[602,0,600,1024]]},
		{name:"storage_atlas_5", frames: [[0,0,600,1024],[602,0,600,1024]]},
		{name:"storage_atlas_6", frames: [[0,0,600,1024],[602,0,600,1024]]},
		{name:"storage_atlas_7", frames: [[1412,804,384,471],[0,0,600,600],[0,602,1600,200],[986,804,424,470],[0,804,518,522],[520,804,464,517],[602,0,640,280],[602,282,640,280]]},
		{name:"storage_atlas_8", frames: [[0,808,800,200],[802,606,800,200],[0,404,800,200],[0,1010,800,200],[802,808,800,200],[802,1010,800,200],[802,404,800,200],[0,606,800,200],[0,202,800,200],[802,0,800,200],[0,0,800,200],[802,202,800,200]]},
		{name:"storage_atlas_9", frames: [[764,302,400,352],[1056,656,278,471],[764,656,290,471],[0,402,500,300],[0,704,500,300],[402,0,500,300],[904,0,500,300],[1336,382,319,399],[502,302,234,468],[764,1129,466,267],[0,0,400,400],[382,1006,380,380],[0,1006,380,380],[1406,0,380,380],[1336,783,338,371]]},
		{name:"storage_atlas_10", frames: [[1348,777,322,257],[1208,1036,270,270],[1480,1036,270,270],[584,346,380,240],[719,0,303,344],[1348,484,310,291],[262,1110,301,257],[324,0,393,269],[0,342,280,364],[282,342,300,320],[676,830,280,280],[958,830,248,311],[382,830,292,278],[565,1112,331,224],[0,0,322,340],[0,950,260,307],[0,708,380,240],[966,588,380,240],[1348,242,380,240],[1406,0,380,240],[584,588,380,240],[1024,0,380,240],[966,346,380,240]]},
		{name:"storage_atlas_11", frames: [[1263,852,190,190],[660,0,240,240],[0,306,200,300],[227,279,200,300],[1443,192,290,120],[1372,602,190,190],[0,608,241,224],[408,969,231,180],[641,986,223,177],[1627,1181,150,195],[1607,984,150,195],[1643,716,150,195],[992,229,150,219],[1455,984,150,219],[1592,314,150,219],[1635,0,150,190],[1248,344,150,256],[140,855,266,163],[0,1226,263,133],[742,476,191,287],[601,491,111,269],[902,0,251,227],[1253,1044,184,168],[935,637,243,200],[742,242,248,232],[1155,172,286,170],[1155,0,286,170],[140,1020,199,204],[434,491,165,311],[434,804,277,163],[243,581,189,272],[1071,852,190,190],[1455,794,186,188],[1564,536,194,178],[866,1089,187,171],[1439,1205,186,159],[1071,1044,180,180],[493,1165,222,140],[227,0,224,277],[1443,0,190,190],[1400,344,190,190],[341,1151,150,247],[0,834,138,372],[429,301,311,188],[906,839,163,248],[935,476,311,159],[453,0,205,299],[713,765,191,219],[0,0,225,304],[1180,637,190,213]]},
		{name:"storage_atlas_12", frames: [[1542,1014,120,120],[1420,1136,120,120],[1420,1014,120,120],[844,708,133,146],[1542,1136,120,120],[1659,383,120,128],[952,185,110,135],[879,1248,126,127],[152,566,150,185],[307,0,150,185],[152,379,150,185],[608,1253,150,143],[1378,538,150,143],[1530,563,150,143],[459,0,150,185],[0,766,150,185],[0,953,150,185],[1219,82,150,180],[1067,82,150,180],[152,1124,150,180],[1409,0,150,179],[1561,0,150,179],[1371,181,150,179],[304,536,150,172],[304,188,150,172],[304,362,150,172],[0,1140,150,184],[611,0,150,184],[152,753,150,184],[763,0,150,183],[152,939,150,183],[915,0,150,183],[0,0,150,190],[0,192,150,190],[152,188,150,189],[0,384,150,189],[0,575,150,189],[1495,1258,151,89],[797,489,216,95],[844,586,162,120],[760,633,82,249],[1523,181,130,203],[152,0,153,186],[1298,1111,120,120],[1176,976,120,120],[1176,1098,120,120],[1298,989,120,120],[1530,386,127,175],[1510,912,150,100],[1054,874,150,100],[1358,887,150,100],[1510,810,150,100],[1206,870,150,100],[1358,785,150,100],[1054,772,150,100],[1054,670,150,100],[1358,683,150,100],[1206,666,150,100],[1510,708,150,100],[1206,768,150,100],[902,856,150,100],[1054,568,150,100],[1054,976,120,120],[1054,1098,120,120],[618,186,180,130],[760,1015,220,80],[1067,0,340,80],[618,318,150,150],[800,185,150,150],[304,912,150,150],[304,1064,150,150],[770,337,150,150],[456,797,150,150],[922,337,150,150],[608,949,150,150],[1226,362,150,150],[1378,386,150,150],[456,949,150,150],[456,1101,150,150],[608,1101,150,150],[608,645,150,150],[1074,264,150,150],[304,1216,150,150],[456,645,150,150],[1074,416,150,150],[608,797,150,150],[1226,514,150,150],[645,489,150,142],[1662,708,50,297],[456,511,187,132],[760,1097,117,149],[760,1248,117,149],[879,1097,117,149],[456,187,160,160],[456,349,160,160],[152,1306,148,84],[1714,513,64,200],[998,958,54,269],[1648,1258,92,142],[1655,181,107,200],[456,1253,150,145],[1251,1233,120,120],[1129,1220,120,120],[1007,1229,120,120],[1373,1258,120,120],[1664,1129,120,120],[1664,1007,120,120],[760,884,140,129],[304,710,123,200]]},
		{name:"storage_atlas_13", frames: [[728,193,90,90],[188,418,50,50],[0,326,66,89],[415,340,96,59],[695,340,96,59],[793,340,96,59],[0,417,64,45],[760,401,62,72],[987,189,37,57],[880,405,43,90],[190,296,49,120],[439,205,100,78],[824,401,54,80],[623,359,64,80],[0,173,134,69],[601,495,48,30],[212,508,27,46],[651,495,27,46],[241,508,27,46],[318,450,51,47],[240,459,51,47],[0,464,51,47],[978,40,16,18],[190,182,27,18],[902,189,83,99],[415,285,117,53],[695,285,117,53],[891,290,117,53],[136,182,52,160],[0,513,27,41],[975,516,27,41],[901,517,27,41],[631,441,47,52],[113,445,47,52],[582,441,47,52],[820,483,42,47],[471,488,42,47],[515,488,42,47],[241,339,93,61],[0,244,85,80],[925,467,48,48],[728,0,123,85],[853,0,123,85],[0,86,123,85],[336,378,69,70],[407,401,69,70],[689,401,69,70],[513,362,68,72],[279,257,80,80],[902,87,100,100],[456,103,100,100],[53,500,80,20],[219,0,59,200],[190,202,87,92],[891,345,95,58],[643,212,50,145],[68,393,43,105],[1004,0,20,136],[830,87,70,147],[362,254,51,122],[129,344,57,99],[984,405,40,55],[559,495,40,43],[978,60,10,11],[820,236,69,94],[541,205,100,73],[925,405,57,60],[558,103,99,100],[978,0,23,38],[478,401,31,31],[478,436,50,50],[87,244,40,147],[676,0,50,210],[0,0,148,84],[930,517,39,18],[135,520,39,18],[29,522,39,18],[150,0,67,180],[362,135,75,117],[241,296,35,41],[864,497,35,41],[293,499,35,41],[541,280,80,80],[280,135,80,120],[530,436,50,50],[421,473,48,48],[371,473,48,48],[680,473,48,48],[162,470,48,48],[280,0,86,133],[368,0,86,133],[988,345,34,39],[330,499,34,39],[987,248,34,39],[728,87,100,104],[583,362,38,70],[695,212,30,57],[775,475,43,47],[975,467,43,47],[730,475,43,47],[241,402,75,55],[566,0,108,101],[456,0,108,101]]}
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
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.achievement_open_es_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.achievement_open_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.achievement_open_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.achievement_open_id_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.achievement_open_it_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.achievement_open_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.achievement_open_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.achievement_open_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.achievement_open_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.again_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_for_next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.aquarium_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.back_water_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
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
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
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
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_inventory_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bg_item_inventory_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bg_product_progress_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_product_progress_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.butterfly_body_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.butterfly_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.butterfly_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.butterfly_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.butterfly_hand_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.butterfly_head1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.butterfly_leg1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.butterfly_leg2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.butterfly_usik_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.butterfly_wing_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.candle_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.cat_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.colba1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.colba2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.comics_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.comics_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.comics_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.comics_text1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.comics_text2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.copyright_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dog_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.dragon_body_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.dragon_ear_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.dragon_eye1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.dragon_eye1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.dragon_eye1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.dragon_eye2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.dragon_eye2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.dragon_eye2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.dragon_head_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.dragon_perya1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.dragon_perya2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.dragon_wing1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.dragon_wing2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.egg10_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.egg10_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.egg10_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.egg11_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.egg11_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.egg11_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.egg12_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.egg12_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.egg12_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.egg1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.egg1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.egg1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.egg2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.egg2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.egg2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.egg3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.egg3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.egg3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.egg4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.egg4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.egg4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.egg5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.egg5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.egg5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.egg6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.egg6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.egg6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.egg7_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.egg7_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.egg7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.egg8_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.egg8_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.egg8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.egg9_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.egg9_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.egg9_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.feniks_body_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.feniks_eye1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.feniks_eye2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.feniks_head_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.feniks_tale1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.feniks_tale2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.feniks_tale3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.feniks_tale4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.feniks_wing1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.feniks_wing2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.fire_stone_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.flower_cat_body_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.flower_cat_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.flower_cat_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.flower_cat_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.flower_cat_head_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.flower_cat_meh_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.flower_cat_tale_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.flower_cat_usik_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.flower_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.foxower_body_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.foxower_ear1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.foxower_ear2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.foxower_eye1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.foxower_eye2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.foxower_eye3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.foxower_head_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.foxower_tale_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.foxower_wing1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.foxower_wing2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.frame_product_progress_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.furniture_86_img_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.gold_fish_body_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.gold_fish_eye1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.gold_fish_eye1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.gold_fish_eye1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.gold_fish_eye2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.gold_fish_eye2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.gold_fish_eye2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.gold_fish_plavnik1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.gold_fish_plavnik2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.gold_fish_tale_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.grif_body_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.grif_eye1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.grif_eye1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.grif_eye1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.grif_eye2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.grif_eye2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.grif_eye2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.grif_head_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.grif_kluv1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.grif_leg_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.grif_tale_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.grif_wing1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hearts_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.help_hand_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.kolpak_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.kristall_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.lamp_idea1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.lamp_idea2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.language_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.language_de_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.language_en_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.language_es_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.language_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.language_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.language_id_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.language_it_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.language_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.language_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.language_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.language_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.language_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.languages_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.languages_1_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.languages_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.languages_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.lightbulb_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.mag_pal_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.magic10_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.magic11_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.magic12_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.magic13_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.magic14_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.magic15_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.magic16_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.magic17_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.magic18_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.magic19_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.magic1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.magic20_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.magic2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.magic3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.magic4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.magic5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.magic6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.magic7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.magic8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.magic9_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.medusa1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.medusa2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.medusa3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.medusa4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.medusa5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.medusa6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.medusa7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.medusa8_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.model_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.model_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.model_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.model_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.model_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.model_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.nav_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.neud1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.neud2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.neud3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.next_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.night_shadow_body_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.night_shadow_ear2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.night_shadow_ear_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.night_shadow_eye1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.night_shadow_eye2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.night_shadow_eye3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.night_shadow_head_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.night_shadow_tale_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.night_stone_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.no_product_progress_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.pero_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.pipe_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.rainbow_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.rainbowtale_body_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.rainbowtale_ear_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.rainbowtale_eye1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.rainbowtale_eye2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.rainbowtale_eye3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.rainbowtale_tale1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.rainbowtale_tale2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.rainbowtale_wing_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.rose_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.rose_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.sad_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.shadow_product_progress_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.shelfs_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.shell_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.simple_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.simple_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.simple_explosion_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.simple_explosion_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.spiked_pony_body_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.spiked_pony_ear1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.spiked_pony_ear2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.spiked_pony_eye1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.spiked_pony_eye2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.spiked_pony_eye3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.spiked_pony_hair_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.spiked_pony_head_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.spiked_pony_tale_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.table_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.think_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(94);
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
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.title_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.unicorn_body_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.unicorn_ear_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.unicorn_earb_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.unicorn_eye1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.unicorn_eye2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.unicorn_eye3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.unicorn_hair_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.unicorn_hairb_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.unicorn_head_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.unicorn_horn_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.unicorn_tale_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.unicorn_uzor1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.unicorn_uzor2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.water_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(108);
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
	this.shape.graphics.f("rgba(0,0,0,0.4)").s().p("Eh+jAwcMAAAhg2MD9GAAAMAAABg2g");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
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
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A3bXbMAAAgu2MAu3AAAMAAAAu2g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.preloader_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F82991").s().p("AkqAAIEqmOIErGOIkrGPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-40,60,80);
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


(lib.unicorn_uzor2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.unicorn_uzor2_img();
	this.instance.setTransform(-54,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-50.5,108,101);
p.frameBounds = [rect];


(lib.unicorn_uzor1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.unicorn_uzor1_img();
	this.instance.setTransform(-54,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-50.5,108,101);
p.frameBounds = [rect];


(lib.unicorn_tale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.unicorn_tale_img();
	this.instance.setTransform(-95,-106.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-106.5,190,213);
p.frameBounds = [rect];


(lib.unicorn_hairb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.unicorn_hairb_img();
	this.instance.setTransform(-112.5,-152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112.5,-152,225,304);
p.frameBounds = [rect];


(lib.unicorn_hair = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.unicorn_hair_img();
	this.instance.setTransform(-95.5,-109.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.5,-109.5,191,219);
p.frameBounds = [rect];


(lib.unicorn_eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.unicorn_eye1_img();
	this.instance.setTransform(-21.5,-23.5);

	this.instance_1 = new lib.unicorn_eye2_img();
	this.instance_1.setTransform(-21.5,-23.5);

	this.instance_2 = new lib.unicorn_eye3_img();
	this.instance_2.setTransform(-21.5,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},27).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21.5,-23.5,43,47);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.unicorn_earb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.unicorn_earb_img();
	this.instance.setTransform(-15,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-28.5,30,57);
p.frameBounds = [rect];


(lib.unicorn_ear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.unicorn_ear_img();
	this.instance.setTransform(-19,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19,-35,38,70);
p.frameBounds = [rect];


(lib.table = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.table_img();
	this.instance.setTransform(-155.5,-79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155.5,-79.5,311,159);
p.frameBounds = [rect];


(lib.spiked_pony_tale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.spiked_pony_tale_img();
	this.instance.setTransform(-121.1,-133.6,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121.1,-133.6,243.4,267.1);
p.frameBounds = [rect];


(lib.spiked_pony_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.spiked_pony_head_img();
	this.instance.setTransform(-58.3,-89.2,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.3,-89.2,117.4,178.6);
p.frameBounds = [rect];


(lib.spiked_pony_hair = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.spiked_pony_hair_img();
	this.instance.setTransform(-93.1,-110.3,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.1,-110.3,187.2,221.1);
p.frameBounds = [rect];


(lib.spiked_pony_eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.spiked_pony_eye1_img();
	this.instance.setTransform(-11.8,-13.3,0.72,0.72);

	this.instance_1 = new lib.spiked_pony_eye2_img();
	this.instance_1.setTransform(-11.8,-13.3,0.72,0.72);

	this.instance_2 = new lib.spiked_pony_eye3_img();
	this.instance_2.setTransform(-11.8,-13.3,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance}]},3).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.8,-13.3,24.5,28.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.spiked_pony_ear2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.spiked_pony_ear2_img();
	this.instance.setTransform(-31.1,-48.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.1,-48.1,61.9,95.8);
p.frameBounds = [rect];


(lib.spiked_pony_ear1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.spiked_pony_ear1_img();
	this.instance.setTransform(-31,-47.5,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31,-47.5,61.9,95.8);
p.frameBounds = [rect];


(lib.spiked_pony_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.spiked_pony_body_img();
	this.instance.setTransform(-167.3,-186.6,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-167.3,-186.6,334,372.3);
p.frameBounds = [rect];


(lib.shelfs_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shelfs_img();
	this.instance.setTransform(-259,-261);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-259,-261,518,522);
p.frameBounds = [rect];


(lib.shadow_achievement_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.4)").s().p("Eh+jAwbMAAAhg1MD9HAAAMAAABg1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-810,-310,1620,620);
p.frameBounds = [rect];


(lib.rainbowtale_wing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.rainbowtale_wing_img();
	this.instance.setTransform(-168.5,-96.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-168.5,-96.1,335.5,192.3);
p.frameBounds = [rect];


(lib.rainbowtale_tale2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.rainbowtale_tale2_img();
	this.instance.setTransform(-111.9,-67.7,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.9,-67.7,223.9,135.4);
p.frameBounds = [rect];


(lib.rainbowtale_tale1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.rainbowtale_tale1_img();
	this.instance.setTransform(-50.8,-133.2,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.8,-133.2,99.4,267.9);
p.frameBounds = [rect];


(lib.rainbowtale_eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.rainbowtale_eye1_img();
	this.instance.setTransform(-12.5,-13.9,0.72,0.72);

	this.instance_1 = new lib.rainbowtale_eye2_img();
	this.instance_1.setTransform(-12.5,-13.9,0.72,0.72);

	this.instance_2 = new lib.rainbowtale_eye3_img();
	this.instance_2.setTransform(-12.5,-13.9,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},16).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.5,-13.9,25.2,29.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.rainbowtale_ear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.rainbowtale_ear_img();
	this.instance.setTransform(-33.2,-50.7,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33.2,-50.7,66.3,102.3);
p.frameBounds = [rect];


(lib.rainbowtale_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.rainbowtale_body_img();
	this.instance.setTransform(-83.2,-168.6,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.2,-168.6,168.5,337);
p.frameBounds = [rect];


(lib.pipe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pipe_img();
	this.instance.setTransform(-27,-134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27,-134.5,54,269);
p.frameBounds = [rect];


(lib.no_product_progress_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.no_product_progress_img();
	this.instance.setTransform(-34.5,-68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.5,-68.5,75,117);
p.frameBounds = [rect];


(lib.night_shadow_tale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.night_shadow_tale_img();
	this.instance.setTransform(-80.7,-99.7,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.7,-99.7,161.3,199.5);
p.frameBounds = [rect];


(lib.night_shadow_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.night_shadow_head_img();
	this.instance.setTransform(-79.8,-50.5,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.8,-50.5,159.9,100.8);
p.frameBounds = [rect];


(lib.night_shadow_eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.night_shadow_eye1_img();
	this.instance.setTransform(-13.6,-6.5,0.72,0.72);

	this.instance_1 = new lib.night_shadow_eye2_img();
	this.instance_1.setTransform(-13.6,-6.5,0.72,0.72);

	this.instance_2 = new lib.night_shadow_eye3_img();
	this.instance_2.setTransform(-13.6,-6.5,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},2).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-13.6,-6.5,28.1,13);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.night_shadow_ear2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.night_shadow_ear2_img();
	this.instance.setTransform(-53.1,-30.5,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.1,-30.5,106.6,60.5);
p.frameBounds = [rect];


(lib.night_shadow_ear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.night_shadow_ear_img();
	this.instance.setTransform(-53.4,-30.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.4,-30.1,106.6,60.5);
p.frameBounds = [rect];


(lib.night_shadow_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.night_shadow_body_img();
	this.instance.setTransform(-153.1,-168.2,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-153.1,-168.2,305.3,338.4);
p.frameBounds = [rect];


(lib.neud1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.neud1_img();
	this.instance.setTransform(-58.5,-74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.5,-74.5,117,149);
p.frameBounds = [rect];


(lib.model_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.model_5_1_img();
	this.instance.setTransform(-300,-512);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-512,600,1024);
p.frameBounds = [rect];


(lib.model_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.model_4_1_img();
	this.instance.setTransform(-300,-512);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-512,600,1024);
p.frameBounds = [rect];


(lib.model_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.model_2_1_img();
	this.instance.setTransform(-300,-512);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-512,600,1024);
p.frameBounds = [rect];


(lib.model_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.model_1_1_img();
	this.instance.setTransform(-300,-512);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-512,600,1024);
p.frameBounds = [rect];


(lib.mixer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,255,0.008)").s().p("A6jakMAAAg1HMA1HAAAMAAAA1Hg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.medusa8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.medusa8_img();
	this.instance.setTransform(-28.5,-49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.5,-49.5,57,99);
p.frameBounds = [rect];


(lib.medusa7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.medusa7_img();
	this.instance.setTransform(-25.5,-61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-61,51,122);
p.frameBounds = [rect];


(lib.medusa6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.medusa6_img();
	this.instance.setTransform(-35,-73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-73.5,70,147);
p.frameBounds = [rect];


(lib.medusa5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.medusa5_img();
	this.instance.setTransform(-10,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-68,20,136);
p.frameBounds = [rect];


(lib.medusa4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.medusa4_img();
	this.instance.setTransform(-21.5,-52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21.5,-52.5,43,105);
p.frameBounds = [rect];


(lib.medusa3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.medusa3_img();
	this.instance.setTransform(-25,-72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-72.5,50,145);
p.frameBounds = [rect];


(lib.medusa2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.medusa2_img();
	this.instance.setTransform(-47.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.5,-29,95,58);
p.frameBounds = [rect];


(lib.medusa1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.medusa1_img();
	this.instance.setTransform(-43.5,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.5,-46,87,92);
p.frameBounds = [rect];


(lib.magic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_20 = function() {
		/* this.stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(1));

	// Слой 1
	this.instance = new lib.magic1_img();

	this.instance_1 = new lib.magic2_img();

	this.instance_2 = new lib.magic3_img();

	this.instance_3 = new lib.magic4_img();

	this.instance_4 = new lib.magic5_img();

	this.instance_5 = new lib.magic6_img();

	this.instance_6 = new lib.magic7_img();

	this.instance_7 = new lib.magic8_img();

	this.instance_8 = new lib.magic9_img();

	this.instance_9 = new lib.magic10_img();

	this.instance_10 = new lib.magic11_img();

	this.instance_11 = new lib.magic12_img();

	this.instance_12 = new lib.magic13_img();

	this.instance_13 = new lib.magic14_img();

	this.instance_14 = new lib.magic15_img();

	this.instance_15 = new lib.magic16_img();

	this.instance_16 = new lib.magic17_img();

	this.instance_17 = new lib.magic18_img();

	this.instance_18 = new lib.magic19_img();

	this.instance_19 = new lib.magic20_img();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,150,150);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.mag_pal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mag_pal_img();
	this.instance.setTransform(-27,-44.1,0.496,0.496,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27,-51.7,54,103.5);
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


(lib.lightbulb_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lightbulb_img();
	this.instance.setTransform(-40,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-10,80,20);
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


(lib.lamp_idea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lamp_idea1_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.kolpak = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kolpak_img();
	this.instance.setTransform(-161,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-161,-170,322,340);
p.frameBounds = [rect];


(lib.ingredient_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flower_img();
	this.instance.setTransform(-50,-53,0.342,0.342);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBGPIAAsdIODAAIAAMdg");
	this.shape.setTransform(-8.5,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.5,-58.5,90,80);
p.frameBounds = [rect];


(lib.ingredient_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fire_stone_img();
	this.instance.setTransform(-40,-30,0.458,0.458);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Am0FeIAAq7INpAAIAAK7g");
	this.shape.setTransform(-4.3,-3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("AgLFeIAAq7IAXAAIAAK7g");
	this.shape_1.setTransform(43.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48,-38,93,73);
p.frameBounds = [rect];


(lib.ingredient_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.water_img();
	this.instance.setTransform(-26,-59,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqGoIAAtPIJVAAIAANPg");
	this.shape.setTransform(-1,-19);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31,-61.5,60,85);
p.frameBounds = [rect];


(lib.ingredient_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.night_stone_img();
	this.instance.setTransform(-57.7,-10.3,0.612,0.612,-59.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokFeIAAq7IRJAAIAAK7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.7,-45.6,115.8,91.4);
p.frameBounds = [rect];


(lib.ingredient_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shell_img();
	this.instance.setTransform(-50,-76,0.653,0.653);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzHzIAAvmIPmAAIAAPmg");
	this.shape.setTransform(-1,-28);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51,-78,100,100);
p.frameBounds = [rect];


(lib.ingredient_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rose_img();
	this.instance.setTransform(-80.7,-19.3,0.59,0.59,-64.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao7BMIhCi2IDBloIJqgeIHQLqIh2D2g");
	this.shape.setTransform(-18.6,-17.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.4,-76.3,135.3,108.7);
p.frameBounds = [rect];


(lib.ingredient_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kristall_img();
	this.instance.setTransform(-54,-51,0.693,0.693);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokDqIgHh4IHxocIIlECIBBERIj2EZIptApg");
	this.shape.setTransform(-2.6,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.2,-59.2,111.3,85.5);
p.frameBounds = [rect];


(lib.ingredient_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rainbow_img();
	this.instance.setTransform(-32,-85,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AldH0IAAvnIK7AAIAAPng");
	this.shape.setTransform(-2,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37,-85.5,70,100);
p.frameBounds = [rect];


(lib.ingredient_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pero_img();
	this.instance.setTransform(42.5,-57.1,0.655,0.655,55.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AplE+IOKsUIDfAAIBeCGIAEDAIkaFhIosDbIlcArg");
	this.shape.setTransform(-1.9,-8.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.9,-57.1,132,108.4);
p.frameBounds = [rect];


(lib.ingredient_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.candle_img();
	this.instance.setTransform(-17,-65,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5HCIAAuDIHzAAIAAODg");
	this.shape.setTransform(-1,-25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-70,50,90);
p.frameBounds = [rect];


(lib.hero_mc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.model_3_1_img();
	this.instance.setTransform(-300,-512);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-512,600,1024);
p.frameBounds = [rect];


(lib.hero_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.model_0_1_img();
	this.instance.setTransform(-300,-512);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-512,600,1024);
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


(lib.hearts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hearts_img();
	this.instance.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.grif_wing1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.grif_wing1_img();
	this.instance.setTransform(-119,-80.8,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119,-80.8,238.3,161.3);
p.frameBounds = [rect];


(lib.grif_tale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.grif_tale_img();
	this.instance.setTransform(-99.5,-58.4,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.5,-58.4,199.5,117.4);
p.frameBounds = [rect];


(lib.grif_leg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.grif_leg_img();
	this.instance.setTransform(-45.5,-63,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.5,-63,91.4,126);
p.frameBounds = [rect];


(lib.grif_kluv1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.grif_kluv1_img();
	this.instance.setTransform(-24.5,-23.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24.5,-23.1,49,51.9);
p.frameBounds = [rect];


(lib.grif_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.grif_head_img();
	this.instance.setTransform(-105.3,-100.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105.3,-100.1,210.3,200.1);
p.frameBounds = [rect];


(lib.grif_eye2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.grif_eye2_1_img();
	this.instance.setTransform(-24.6,-24.7,0.72,0.72);

	this.instance_1 = new lib.grif_eye2_2_img();
	this.instance_1.setTransform(-24.6,-24.7,0.72,0.72);

	this.instance_2 = new lib.grif_eye2_3_img();
	this.instance_2.setTransform(-24.6,-24.4,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance}]},3).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24.6,-24.7,49.7,50.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-24.6,-24.4,49.7,50.4), rect, rect, rect=new cjs.Rectangle(-24.6,-24.7,49.7,50.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.grif_eye1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.grif_eye1_1_img();
	this.instance.setTransform(-43.8,-25.8,0.72,0.72);

	this.instance_1 = new lib.grif_eye1_2_img();
	this.instance_1.setTransform(-43.9,-25.8,0.72,0.72);

	this.instance_2 = new lib.grif_eye1_3_img();
	this.instance_2.setTransform(-43.4,-25.8,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance}]},3).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.8,-25.8,88.6,61.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-43.9,-25.8,88.6,61.2), rect, rect, rect=new cjs.Rectangle(-43.4,-25.8,88.6,61.2), rect, rect, rect=new cjs.Rectangle(-43.9,-25.8,88.6,61.2), rect, rect, rect=new cjs.Rectangle(-43.8,-25.8,88.6,61.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.grif_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.grif_body_img();
	this.instance.setTransform(-89.3,-111.5,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.3,-111.5,178.6,223.9);
p.frameBounds = [rect];


(lib.gold_fish_tale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gold_fish_tale_img();
	this.instance.setTransform(-82.5,-155.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.5,-155.5,165,311);
p.frameBounds = [rect];


(lib.gold_fish_plavnik2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gold_fish_plavnik2_img();
	this.instance.setTransform(-42.5,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.5,-40,85,80);
p.frameBounds = [rect];


(lib.gold_fish_plavnik1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gold_fish_plavnik1_img();
	this.instance.setTransform(-46.5,-30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.5,-30.5,93,61);
p.frameBounds = [rect];


(lib.gold_fish_eye2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gold_fish_eye2_1_img();
	this.instance.setTransform(-21,-23.5);

	this.instance_1 = new lib.gold_fish_eye2_2_img();
	this.instance_1.setTransform(-21,-23.5);

	this.instance_2 = new lib.gold_fish_eye2_3_img();
	this.instance_2.setTransform(-21,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-23.5,42,47);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.gold_fish_eye1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gold_fish_eye1_1_img();
	this.instance.setTransform(-23.5,-26);

	this.instance_1 = new lib.gold_fish_eye1_2_img();
	this.instance_1.setTransform(-23.5,-26);

	this.instance_2 = new lib.gold_fish_eye1_3_img();
	this.instance_2.setTransform(-23.5,-26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23.5,-26,47,52);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.furniture_86_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.furniture_86_img_img();
	this.instance.setTransform(-63,-63,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63,-63,126,126);
p.frameBounds = [rect];


(lib.frame_product_progress_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.frame_product_progress_img();
	this.instance.setTransform(-150,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-160,300,320);
p.frameBounds = [rect];


(lib.foxower_wing2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.foxower_wing2_img();
	this.instance.setTransform(-102,-60.5,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-60.5,205.9,122.4);
p.frameBounds = [rect];


(lib.foxower_wing1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.foxower_wing1_img();
	this.instance.setTransform(-103,-61,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103,-61,205.9,122.4);
p.frameBounds = [rect];


(lib.foxower_tale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.foxower_tale_img();
	this.instance.setTransform(-88.8,-83.4,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88.8,-83.4,178.6,167.1);
p.frameBounds = [rect];


(lib.foxower_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.foxower_head_img();
	this.instance.setTransform(-55.6,-67,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.6,-67,110.2,133.9);
p.frameBounds = [rect];


(lib.foxower_eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.foxower_eye1_img();
	this.instance.setTransform(-9.1,-14.3,0.72,0.72);

	this.instance_1 = new lib.foxower_eye2_img();
	this.instance_1.setTransform(-9.1,-14.3,0.72,0.72);

	this.instance_2 = new lib.foxower_eye3_img();
	this.instance_2.setTransform(-9.1,-14.3,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},22).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance}]},2).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9.1,-14.3,19.5,29.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.foxower_ear2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.foxower_ear2_img();
	this.instance.setTransform(-45.8,-72.6,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.8,-72.6,93.6,146.1);
p.frameBounds = [rect];


(lib.foxower_ear1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.foxower_ear1_img();
	this.instance.setTransform(-28.8,-88.7,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.8,-88.7,59.1,179.3);
p.frameBounds = [rect];


(lib.foxower_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.foxower_body_img();
	this.instance.setTransform(-100.3,-131,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.3,-131,201.6,262.1);
p.frameBounds = [rect];


(lib.flower_cat_usik = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.flower_cat_usik_img();
	this.instance.setTransform(-18.6,-57,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18.6,-57,37.5,115.2);
p.frameBounds = [rect];


(lib.flower_cat_tale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.flower_cat_tale_img();
	this.instance.setTransform(-115.1,-144.4,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115.1,-144.4,229.7,287.3);
p.frameBounds = [rect];


(lib.flower_cat_meh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.flower_cat_meh_img();
	this.instance.setTransform(-66.1,-60.8,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.1,-60.8,132.5,121);
p.frameBounds = [rect];


(lib.flower_cat_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.flower_cat_head_img();
	this.instance.setTransform(-90,-81.6,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-81.6,180.7,163.5);
p.frameBounds = [rect];


(lib.flower_cat_eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.flower_cat_eyes1_img();
	this.instance.setTransform(-42.4,-18.9,0.72,0.72);

	this.instance_1 = new lib.flower_cat_eyes2_img();
	this.instance_1.setTransform(-42.4,-18.9,0.72,0.72);

	this.instance_2 = new lib.flower_cat_eyes3_img();
	this.instance_2.setTransform(-42.4,-18.9,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance}]},2).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.4,-18.9,84.3,38.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.flower_cat_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.flower_cat_body_img();
	this.instance.setTransform(-141.3,-96.7,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.3,-96.7,283,193.7);
p.frameBounds = [rect];


(lib.flower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flower_img();
	this.instance.setTransform(-54.5,-44.8,0.449,0.449);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.5,-44.8,109,89.7);
p.frameBounds = [rect];


(lib.fire_stone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fire_stone_img();
	this.instance.setTransform(-49,-36.3,0.605,0.605);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49,-36.3,98,72.6);
p.frameBounds = [rect];


(lib.feniks_wing2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.feniks_wing2_img();
	this.instance.setTransform(-55.5,-134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.5,-134.5,111,269);
p.frameBounds = [rect];


(lib.feniks_wing1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.feniks_wing1_img();
	this.instance.setTransform(-95.5,-143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.5,-143.5,191,287);
p.frameBounds = [rect];


(lib.feniks_tale4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.feniks_tale4_img();
	this.instance.setTransform(-108,-47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108,-47.5,216,95);
p.frameBounds = [rect];


(lib.feniks_tale3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.feniks_tale3_img();
	this.instance.setTransform(-131.5,-66.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131.5,-66.5,263,133);
p.frameBounds = [rect];


(lib.feniks_tale2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.feniks_tale2_img();
	this.instance.setTransform(-133,-81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-133,-81.5,266,163);
p.frameBounds = [rect];


(lib.feniks_tale1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.feniks_tale1_img();
	this.instance.setTransform(-75.5,-44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.5,-44.5,151,89);
p.frameBounds = [rect];


(lib.feniks_eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.feniks_eye1_img();
	this.instance.setTransform(-8,-9);

	this.instance_1 = new lib.feniks_eye2_img();
	this.instance_1.setTransform(-18,-9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance}]},2).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8,-9,16,18);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-18,-9,27,18), rect, rect=new cjs.Rectangle(-8,-9,16,18), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.egg12_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg12_2_img();
	this.instance.setTransform(-62,-76.4,0.827,0.827);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62,-76.4,124,153);
p.frameBounds = [rect];


(lib.egg12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg12_1_img();
	this.instance.setTransform(-62,-76.4,0.827,0.827);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62,-76.4,124,153);
p.frameBounds = [rect];


(lib.egg12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.egg12_img();
	this.instance.setTransform(-62,-76.1,0.827,0.827);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62,-76.1,124,153);
p.frameBounds = [rect];


(lib.egg11_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg11_2_img();
	this.instance.setTransform(-81,-77.2,1.08,1.08);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81,-77.2,162,154.5);
p.frameBounds = [rect];


(lib.egg11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg11_1_img();
	this.instance.setTransform(-81,-77.2,1.08,1.08);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81,-77.2,162,154.5);
p.frameBounds = [rect];


(lib.egg11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.egg11_img();
	this.instance.setTransform(-72,-74.8,1.08,1.08);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72,-74.8,162,154.5);
p.frameBounds = [rect];


(lib.egg10_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg10_2_img();
	this.instance.setTransform(-60,-74,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-74,120,148);
p.frameBounds = [rect];


(lib.egg10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg10_1_img();
	this.instance.setTransform(-60,-74,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-74,120,148);
p.frameBounds = [rect];


(lib.egg10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.egg10_img();
	this.instance.setTransform(-56,-69.6,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56,-69.6,120,148);
p.frameBounds = [rect];


(lib.egg9_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg9_2_img();
	this.instance.setTransform(-60,-75.6,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-75.6,120,151.2);
p.frameBounds = [rect];


(lib.egg9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg9_1_img();
	this.instance.setTransform(-60,-75.6,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-75.6,120,151.2);
p.frameBounds = [rect];


(lib.egg9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.egg9_img();
	this.instance.setTransform(-58,-74.6,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58,-74.6,120,151.2);
p.frameBounds = [rect];


(lib.egg8_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg8_2_img();
	this.instance.setTransform(-62,-78.5,0.827,0.827);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62,-78.5,124,157.1);
p.frameBounds = [rect];


(lib.egg8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg8_1_img();
	this.instance.setTransform(-62,-78.5,0.827,0.827);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62,-78.5,124,157.1);
p.frameBounds = [rect];


(lib.egg8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.egg8_img();
	this.instance.setTransform(-59.5,-74.6,0.827,0.827);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.5,-74.6,124,157.1);
p.frameBounds = [rect];


(lib.egg7_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg7_2_img();
	this.instance.setTransform(-63.6,-77.6,0.849,0.849);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.6,-77.6,127.3,155.4);
p.frameBounds = [rect];


(lib.egg7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg7_1_img();
	this.instance.setTransform(-63.6,-77.6,0.849,0.849);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.6,-77.6,127.3,155.4);
p.frameBounds = [rect];


(lib.egg7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.egg7_img();
	this.instance.setTransform(-61.6,-74.7,0.849,0.849);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.6,-74.7,127.3,155.4);
p.frameBounds = [rect];


(lib.egg6_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg6_2_img();
	this.instance.setTransform(-66.7,-81.9,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.7,-81.9,133.5,163.8);
p.frameBounds = [rect];


(lib.egg6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg6_1_img();
	this.instance.setTransform(-66.7,-81.9,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.7,-81.9,133.5,163.8);
p.frameBounds = [rect];


(lib.egg6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.egg6_img();
	this.instance.setTransform(-64.7,-81.5,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.7,-81.5,133.5,163.8);
p.frameBounds = [rect];


(lib.egg5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg5_2_img();
	this.instance.setTransform(-60,-87.6,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-87.6,120,175.2);
p.frameBounds = [rect];


(lib.egg5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg5_1_img();
	this.instance.setTransform(-60,-87.6,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-87.6,120,175.2);
p.frameBounds = [rect];


(lib.egg5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.egg5_img();
	this.instance.setTransform(-59,-97.6,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59,-97.6,120,175.2);
p.frameBounds = [rect];


(lib.egg4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg4_2_img();
	this.instance.setTransform(-75,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-86,150,172);
p.frameBounds = [rect];


(lib.egg4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg4_1_img();
	this.instance.setTransform(-75,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-86,150,172);
p.frameBounds = [rect];


(lib.egg4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.egg4_img();
	this.instance.setTransform(-76,-83.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76,-83.6,150,172);
p.frameBounds = [rect];


(lib.egg3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg3_2_img();
	this.instance.setTransform(-75,-89.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-89.5,150,179);
p.frameBounds = [rect];


(lib.egg3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg3_1_img();
	this.instance.setTransform(-75,-89.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-89.5,150,179);
p.frameBounds = [rect];


(lib.egg3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.egg3_img();
	this.instance.setTransform(-72,-89.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72,-89.5,150,179);
p.frameBounds = [rect];


(lib.egg2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg2_2_img();
	this.instance.setTransform(-63.7,-82.9,0.85,0.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.7,-82.9,127.6,165.8);
p.frameBounds = [rect];


(lib.egg2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg2_1_img();
	this.instance.setTransform(-63.7,-82.9,0.85,0.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.7,-82.9,127.6,165.8);
p.frameBounds = [rect];


(lib.egg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.egg2_img();
	this.instance.setTransform(-60.8,-82.5,0.85,0.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.8,-82.5,127.6,165.8);
p.frameBounds = [rect];


(lib.egg1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg1_2_img();
	this.instance.setTransform(-67,-80.4,0.893,0.893);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67,-80.4,134,160.8);
p.frameBounds = [rect];


(lib.egg1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg1_1_img();
	this.instance.setTransform(-67,-80.4,0.893,0.893);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67,-80.4,134,160.8);
p.frameBounds = [rect];


(lib.egg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.egg1_img();
	this.instance.setTransform(-67,-80.4,0.893,0.893);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67,-80.4,134,160.8);
p.frameBounds = [rect];


(lib.dragon1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.dragon_wing1_img();
	this.instance.setTransform(-47,-166.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.dragon_eye2_img();
	this.instance_1.setTransform(-129.5,-143);

	this.instance_2 = new lib.dragon_ear_img();
	this.instance_2.setTransform(-87,-181.5);

	this.instance_3 = new lib.dragon_perya2_img();
	this.instance_3.setTransform(-152,-290);

	this.instance_4 = new lib.dragon_head_img();
	this.instance_4.setTransform(-175,-185.5);

	this.instance_5 = new lib.dragon_perya1_img();
	this.instance_5.setTransform(-139,-291);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Слой 5
	this.instance_6 = new lib.dragon_eye1_img();
	this.instance_6.setTransform(-182,-139.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 1
	this.instance_7 = new lib.dragon_body_img();
	this.instance_7.setTransform(-150.5,-128.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 4
	this.instance_8 = new lib.dragon_wing2_img();
	this.instance_8.setTransform(-73.5,-162);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-182,-291,366,419.6);
p.frameBounds = [rect];


(lib.dragon_wing2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dragon_wing2_img();
	this.instance.setTransform(-111.5,-88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.5,-88.5,223,177);
p.frameBounds = [rect];


(lib.dragon_wing1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dragon_wing1_img();
	this.instance.setTransform(-115.5,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115.5,-90,231,180);
p.frameBounds = [rect];


(lib.dragon_perya2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dragon_perya2_img();
	this.instance.setTransform(-63,-63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63,-63.5,126,127);
p.frameBounds = [rect];


(lib.dragon_perya1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dragon_perya1_img();
	this.instance.setTransform(-55,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-67.5,110,135);
p.frameBounds = [rect];


(lib.dragon_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dragon_head_img();
	this.instance.setTransform(-60,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-64,120,128);
p.frameBounds = [rect];


(lib.dragon_eye2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dragon_eye2_img();
	this.instance.setTransform(-25.5,-23.5);

	this.instance_1 = new lib.dragon_eye2_1_img();
	this.instance_1.setTransform(-25.5,-23.5);

	this.instance_2 = new lib.dragon_eye2_2_img();
	this.instance_2.setTransform(-25.5,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-23.5,51,47);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.dragon_eye1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dragon_eye1_img();
	this.instance.setTransform(-13.5,-23);

	this.instance_1 = new lib.dragon_eye1_1_img();
	this.instance_1.setTransform(-13.5,-23);

	this.instance_2 = new lib.dragon_eye1_2_img();
	this.instance_2.setTransform(-13.5,-23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-13.5,-23,27,46);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.dragon_ear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dragon_ear_img();
	this.instance.setTransform(-24,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-15,48,30);
p.frameBounds = [rect];


(lib.drag_drop_container_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
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

	// Слой 2
	this.instance = new lib.sad_img();
	this.instance.setTransform(-22.6,21.4);

	this.instance_1 = new lib.sad_img();
	this.instance_1.setTransform(18,-38);

	this.instance_2 = new lib.sad_img();
	this.instance_2.setTransform(-72.6,-28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_3 = new lib.comics_text1_img();
	this.instance_3.setTransform(-120.5,-112);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.5,-112,241,224);
p.frameBounds = [rect];


(lib.colb2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.colba2_img();
	this.instance.setTransform(-20.5,-46.9,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.2,-46.9,82.5,93.8);
p.frameBounds = [rect];


(lib.colb1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.colba1_img();
	this.instance.setTransform(-43.4,-21.1,1,1,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.4,-48.1,86.8,96.3);
p.frameBounds = [rect];


(lib.c3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.comics_3_img();
	this.instance.setTransform(-145,-235.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-235.5,290,471);
p.frameBounds = [rect];


(lib.c2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.comics_2_img();
	this.instance.setTransform(-190,-235.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-235.5,384,471);
p.frameBounds = [rect];


(lib.c1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.comics_1_img();
	this.instance.setTransform(-139,-236);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-139,-236,278,471);
p.frameBounds = [rect];


(lib.butterfly_wing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.butterfly_wing_img();
	this.instance.setTransform(-109,-123.9,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-123.9,218.2,247.7);
p.frameBounds = [rect];


(lib.butterfly_usik = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.butterfly_usik_img();
	this.instance.setTransform(-15,-31.4,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-31.4,31,64.8);
p.frameBounds = [rect];


(lib.butterfly_leg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.butterfly_leg2_img();
	this.instance.setTransform(-12.3,-19.7,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.3,-19.7,26.7,41.1);
p.frameBounds = [rect];


(lib.butterfly_leg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.butterfly_leg1_img();
	this.instance.setTransform(-21.6,-25.5,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21.6,-25.5,44.7,51.9);
p.frameBounds = [rect];


(lib.butterfly_head1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.butterfly_head1_img();
	this.instance.setTransform(-47.8,-52.1,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.8,-52.1,95.8,105.1);
p.frameBounds = [rect];


(lib.butterfly_hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.butterfly_hand_img();
	this.instance.setTransform(-22.8,-15.2,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.8,-15.2,46.1,32.4);
p.frameBounds = [rect];


(lib.butterfly_eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.butterfly_eyes1_img();
	this.instance.setTransform(-33.7,-19.4,0.72,0.72);

	this.instance_1 = new lib.butterfly_eyes2_img();
	this.instance_1.setTransform(-33.7,-19.4,0.72,0.72);

	this.instance_2 = new lib.butterfly_eyes3_img();
	this.instance_2.setTransform(-33.7,-19.4,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},13).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33.7,-19.4,69.1,42.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.butterfly_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.butterfly_body_img();
	this.instance.setTransform(-23.2,-31.4,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23.2,-31.4,47.5,64.1);
p.frameBounds = [rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-190,-120);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-190,-120);

	this.instance_2 = new lib.title_de_img();
	this.instance_2.setTransform(-190,-120);

	this.instance_3 = new lib.title_fr_img();
	this.instance_3.setTransform(-190,-120);

	this.instance_4 = new lib.title_es_img();
	this.instance_4.setTransform(-190,-120);

	this.instance_5 = new lib.title_pt_img();
	this.instance_5.setTransform(-190,-120);

	this.instance_6 = new lib.title_tr_img();
	this.instance_6.setTransform(-190,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-120,380,240);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_achievement_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,-88,700,175);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.bg_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_img();
	this.instance.setTransform(-190,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-120,380,240);
p.frameBounds = [rect];


(lib.bg_product_progress_mc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bg_product_progress_2_img();
	this.instance.setTransform(-131,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131,-145,270,270);
p.frameBounds = [rect];


(lib.bg_product_progress_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_product_progress_img();
	this.instance.setTransform(-131,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131,-145,270,270);
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


(lib.background_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.back_water = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back_water_img();
	this.instance.setTransform(-161,-128.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-161,-128.5,322,257);
p.frameBounds = [rect];


(lib.aquarium = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.aquarium_img();
	this.instance.setTransform(-105,-92.4,0.525,0.525);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-92.4,210,184.8);
p.frameBounds = [rect];


(lib.animals = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dog_img();
	this.instance.setTransform(-55.5,15.1,0.754,0.754,-15);

	this.instance_1 = new lib.cat_img();
	this.instance_1.setTransform(-12.1,-65.3,0.7,0.7,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.5,-65.3,111,130.6);
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
	this.shape.graphics.f("#ABEEE0").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
	this.shape.setTransform(400,300,1.35,1.033);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
p.frameBounds = [rect];


(lib.curtain_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_2_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
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

	this.instance_2 = new lib.copyright_title_tr_img();
	this.instance_2.setTransform(-250,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(4).to({_off:true},1).wait(1).to({_off:false},0).wait(5));

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
	this.shape.graphics.f("rgba(0,0,0,0.4)").s().p("Eh+jAwcMAAAhg2MD9GAAAMAAABg2g");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
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
p.nominalBounds = rect = new cjs.Rectangle(-555,-40,1110,80);
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
p.nominalBounds = rect = new cjs.Rectangle(-590,-40,1180,80.1);
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
p.nominalBounds = rect = new cjs.Rectangle(-205,-40,410,80);
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
p.nominalBounds = rect = new cjs.Rectangle(-170,-40,340,80.1);
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


(lib.unicorn_uzor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.unicorn_uzor2();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},12).wait(17).to({alpha:0.012},10).to({_off:true},1).wait(10));

	// Слой 1
	this.instance_1 = new lib.unicorn_uzor1();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},12).wait(18).to({_off:false},0).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-50.5,108,101);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.unicorn_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.unicorn_eye();
	this.instance.setTransform(-33.6,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// Слой 5
	this.instance_1 = new lib.unicorn_horn_img();
	this.instance_1.setTransform(-4.6,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

	// Слой 4
	this.instance_2 = new lib.unicorn_ear();
	this.instance_2.setTransform(-34.6,-47.6,1,1,0,0,0,-7,29);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({rotation:21},3).to({rotation:0},3).to({rotation:21},3).to({rotation:0},3).wait(24));

	// Слой 3
	this.instance_3 = new lib.unicorn_hair();
	this.instance_3.setTransform(-30.6,-51,1,1,0,0,0,-25,-97);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:-24.9,rotation:2.5},9).to({regX:-25,rotation:0},11).wait(30));

	// Слой 1
	this.instance_4 = new lib.unicorn_head_img();
	this.instance_4.setTransform(-70,-64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50));

	// Слой 2
	this.instance_5 = new lib.unicorn_earb();
	this.instance_5.setTransform(1,-48,1,1,0,0,0,-9,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35).to({rotation:21.5},2).to({rotation:0},2).to({rotation:21.5},2).to({rotation:0},2).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.1,-111.6,191,267.2);
p.frameBounds = [rect, new cjs.Rectangle(-102.1,-111.6,192,267.7), new cjs.Rectangle(-103,-111.6,193,268.2), new cjs.Rectangle(-103.9,-111.6,193.9,268.7), new cjs.Rectangle(-104.8,-111.6,194.9,269.2), new cjs.Rectangle(-105.7,-111.6,195.9,269.8), new cjs.Rectangle(-106.6,-111.6,196.8,270.2), new cjs.Rectangle(-107.5,-111.6,197.8,270.8), new cjs.Rectangle(-108.4,-111.6,198.7,271.4), new cjs.Rectangle(-110,-111.6,200.2,272.1), new cjs.Rectangle(-108.6,-111.6,198.8,271.3), new cjs.Rectangle(-108.3,-111.6,198.5,271.2), new cjs.Rectangle(-107.5,-111.6,197.7,270.7), new cjs.Rectangle(-106.6,-111.6,196.7,270.2), new cjs.Rectangle(-105.7,-111.6,195.8,269.8), new cjs.Rectangle(-104.9,-112.5,194.9,270.2), new cjs.Rectangle(-104,-112.5,194,269.6), new cjs.Rectangle(-103.2,-111.7,193.1,268.4), new cjs.Rectangle(-102.3,-112.5,192.1,268.7), new cjs.Rectangle(-101.3,-112.5,191.2,268.1), new cjs.Rectangle(-101.1,-111.6,191,267.2), rect=new cjs.Rectangle(-101.1,-112.5,191,268.1), rect, new cjs.Rectangle(-101.1,-111.7,191,267.2), new cjs.Rectangle(-101.1,-112.5,191,268.1), new cjs.Rectangle(-101.1,-112.5,191,268), rect=new cjs.Rectangle(-101.1,-111.6,191,267.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.unicorn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.unicorn_head();
	this.instance.setTransform(43.4,-95,1,1,0,0,0,-49,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-49.1,regY:31.9,rotation:5.7,x:43.3},24).to({regX:-49,regY:32,rotation:0,x:43.4},25).wait(1));

	// Слой 5
	this.instance_1 = new lib.unicorn_uzor();
	this.instance_1.setTransform(-11,-20.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

	// Слой 1
	this.instance_2 = new lib.unicorn_body_img();
	this.instance_2.setTransform(-102.5,-149.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

	// Слой 2
	this.instance_3 = new lib.unicorn_tale();
	this.instance_3.setTransform(-56.6,-32,1,1,0,0,0,86,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:5.5},10).to({rotation:0},14).to({rotation:5.5},12).to({rotation:0},13).wait(1));

	// Слой 3
	this.instance_4 = new lib.unicorn_hairb();
	this.instance_4.setTransform(58,-174.6,1,1,0,0,0,-48,-142);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:2.7,x:60,y:-174.7},24).to({rotation:0,x:58,y:-174.6},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-237.6,-238.6,456.2,388.2);
p.frameBounds = [rect, new cjs.Rectangle(-239.2,-238.6,457.9,388.2), new cjs.Rectangle(-240.8,-238.6,459.5,388.2), new cjs.Rectangle(-242.4,-238.5,461.3,388.3), new cjs.Rectangle(-243.9,-238.5,462.9,388.3), new cjs.Rectangle(-245.5,-238.5,464.5,388.2), new cjs.Rectangle(-247.6,-238.5,466.8,388.2), new cjs.Rectangle(-249.1,-238.5,468.3,388.2), new cjs.Rectangle(-250.6,-238.4,469.9,388), new cjs.Rectangle(-252.1,-238.4,471.5,388), new cjs.Rectangle(-254.1,-238.4,473.7,387.9), new cjs.Rectangle(-252.7,-238.3,472.4,387.8), new cjs.Rectangle(-251.4,-238.3,471.1,387.8), new cjs.Rectangle(-250.5,-238.2,470.3,387.8), new cjs.Rectangle(-249.1,-238.2,469,387.8), new cjs.Rectangle(-248.3,-238.1,468.3,387.8), new cjs.Rectangle(-246.9,-238.1,467,387.7), new cjs.Rectangle(-245.4,-238,465.6,387.7), new cjs.Rectangle(-244.6,-238,465,387.7), new cjs.Rectangle(-243.2,-237.9,463.6,387.6), new cjs.Rectangle(-242.3,-237.8,462.7,387.5), new cjs.Rectangle(-240.8,-237.8,461.4,387.4), new cjs.Rectangle(-239.9,-237.8,460.6,387.3), new cjs.Rectangle(-238.5,-237.7,459.2,387.2), new cjs.Rectangle(-237.6,-237.6,458.5,387.2), new cjs.Rectangle(-238.5,-237.6,459.3,387.2), new cjs.Rectangle(-240.1,-237.6,460.8,387.2), new cjs.Rectangle(-241.6,-237.7,462.1,387.4), new cjs.Rectangle(-243.1,-237.8,463.6,387.5), new cjs.Rectangle(-244.6,-237.8,465,387.5), new cjs.Rectangle(-245.5,-237.9,465.7,387.6), new cjs.Rectangle(-247,-237.9,467.2,387.6), new cjs.Rectangle(-248.4,-238,468.5,387.8), new cjs.Rectangle(-249.9,-238,469.9,387.7), new cjs.Rectangle(-251.3,-238.1,471.3,387.7), new cjs.Rectangle(-252.7,-238.2,472.6,387.8), new cjs.Rectangle(-254.1,-238.2,473.9,387.7), new cjs.Rectangle(-252.7,-238.2,472.3,387.8), new cjs.Rectangle(-251.3,-238.2,470.9,387.8), new cjs.Rectangle(-249.9,-238.3,469.4,388), new cjs.Rectangle(-249.1,-238.3,468.5,388), new cjs.Rectangle(-247.6,-238.4,466.9,388.1), new cjs.Rectangle(-246.2,-238.4,465.4,388.1), new cjs.Rectangle(-245.3,-238.4,464.4,388.1), new cjs.Rectangle(-243.9,-238.4,462.9,388), new cjs.Rectangle(-242.4,-238.5,461.3,388.1), new cjs.Rectangle(-241.4,-238.5,460.3,388.1), new cjs.Rectangle(-240,-238.5,458.7,388), new cjs.Rectangle(-238.5,-238.5,457.2,388.1), new cjs.Rectangle(-237.6,-238.6,456.2,388.2)];


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
p.nominalBounds = rect = new cjs.Rectangle(-190,-120,380,240);
p.frameBounds = [rect];


(lib.title_achievement_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_title_achievement_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,-88,700,175);
p.frameBounds = [rect];


(lib.spiked_pony_head2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// spiked_pony_ear1
	this.instance = new lib.spiked_pony_ear1();
	this.instance.setTransform(36.7,-1.1,1,1,10,0,0,-3.9,31.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({rotation:-5,y:-1},2).to({rotation:10,y:-1.1},2).to({rotation:-5,y:-1},2).to({rotation:10,y:-1.1},3).to({rotation:-5,y:-1},2).to({rotation:10,y:-1.1},2).wait(25));

	// spiked_pony_eye
	this.instance_1 = new lib.spiked_pony_eye();
	this.instance_1.setTransform(-1.7,31.7,1,1,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

	// spiked_pony_head
	this.instance_2 = new lib.spiked_pony_head();
	this.instance_2.setTransform(17.1,55.8,1,1,10,0,0,38,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

	// spiked_pony_ear2
	this.instance_3 = new lib.spiked_pony_ear2();
	this.instance_3.setTransform(-17,-11,1,1,-35,0,0,-2.1,27.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(37).to({regX:-2,rotation:-20},3).to({regX:-2.1,rotation:-35},2).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.6,-98,169.4,196.1);
p.frameBounds = [rect, rect=new cjs.Rectangle(-84.6,-98,169.1,196.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-84.6,-98,169.4,196.1), new cjs.Rectangle(-84.6,-98,159.3,196.1), new cjs.Rectangle(-84.6,-98,157.4,196.1), new cjs.Rectangle(-84.6,-98,159.3,196.1), new cjs.Rectangle(-84.6,-98,169.4,196.1), new cjs.Rectangle(-84.6,-98,159.3,196.1), new cjs.Rectangle(-84.6,-98,157.4,196.1), new cjs.Rectangle(-84.6,-98,156.1,196.1), new cjs.Rectangle(-84.6,-98,162.7,196.1), new cjs.Rectangle(-84.6,-98,169.4,196.1), new cjs.Rectangle(-84.6,-98,159.3,196.1), new cjs.Rectangle(-84.6,-98,157.4,196.1), new cjs.Rectangle(-84.6,-98,159.3,196.1), new cjs.Rectangle(-84.6,-98,169.4,196.1), rect=new cjs.Rectangle(-84.6,-98,169.1,196.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-84.6,-98,169.4,196.1)];


(lib.spiked_pony_d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// spiked_pony_head2
	this.instance = new lib.spiked_pony_ear1();
	this.instance.setTransform(-142.1,-146.8,1,1,10,0,0,-3.9,31.9);

	this.instance_1 = new lib.spiked_pony_eye1_img();
	this.instance_1.setTransform(-189.8,-129.1,0.72,0.72,10);

	this.instance_2 = new lib.spiked_pony_head();
	this.instance_2.setTransform(-161.7,-89.9,1,1,10,0,0,38,50);

	this.instance_3 = new lib.spiked_pony_ear2();
	this.instance_3.setTransform(-195.8,-156.7,1,1,-35,0,0,-2.1,27.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// spiked_pony_hair
	this.instance_4 = new lib.spiked_pony_hair();
	this.instance_4.setTransform(-128.5,-92.1,0.851,0.851,0,0,0,-25.9,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// spiked_pony_body
	this.instance_5 = new lib.spiked_pony_body();
	this.instance_5.setTransform(-26,58.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// spiked_pony_tale
	this.instance_6 = new lib.spiked_pony_tale();
	this.instance_6.setTransform(70.3,-15.7,1,1,0,0,0,-71,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-263.4,-243.7,527,487.6);
p.frameBounds = [rect];


(lib.spiked_pony = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.spiked_pony_head2();
	this.instance.setTransform(-155.8,-98.7,1,1,0,0,0,23,47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({regX:22.9,rotation:-15,x:-155.9},9).wait(16).to({regX:23,rotation:0,x:-155.8},5).wait(11));

	// animation
	this.instance_1 = new lib.spiked_pony_hair();
	this.instance_1.setTransform(-128.5,-92.1,0.851,0.851,0,0,0,-25.9,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:19.9,scaleX:0.86,skewY:6.2,y:-92.2},12).to({regY:20,scaleX:0.85,skewY:0,y:-92.1},12).to({regY:19.9,scaleX:0.86,skewY:6.2,y:-92.2},13).to({regY:20,scaleX:0.85,skewY:0,y:-92.1},12).wait(1));

	// graph
	this.instance_2 = new lib.spiked_pony_body();
	this.instance_2.setTransform(-26,58.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

	// animation
	this.instance_3 = new lib.spiked_pony_tale();
	this.instance_3.setTransform(70.3,-15.7,1,1,0,0,0,-71,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-13,x:70.4},24).to({rotation:0,x:70.3},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-263.4,-243.7,527,487.6);
p.frameBounds = [rect, new cjs.Rectangle(-263.4,-243.7,528.9,487.6), new cjs.Rectangle(-263.4,-243.7,530.9,487.6), new cjs.Rectangle(-263.4,-243.7,533,487.6), new cjs.Rectangle(-263.4,-243.7,534.9,487.6), new cjs.Rectangle(-263.4,-243.7,536.9,487.6), new cjs.Rectangle(-263.4,-243.7,538.8,487.6), new cjs.Rectangle(-263.4,-243.7,541.5,487.6), new cjs.Rectangle(-263.4,-243.7,543.3,487.6), new cjs.Rectangle(-263.4,-243.7,545.3,487.6), new cjs.Rectangle(-265.7,-241.5,549.4,485.4), new cjs.Rectangle(-268.7,-239,554.3,482.9), new cjs.Rectangle(-271.3,-236.7,558.7,480.5), new cjs.Rectangle(-274.1,-233.9,564,477.8), new cjs.Rectangle(-276.7,-231,568.3,474.9), new cjs.Rectangle(-279,-228.4,572.4,472.3), new cjs.Rectangle(-281.5,-228.7,576.7,472.6), new cjs.Rectangle(-283.8,-229.8,580.7,473.6), new cjs.Rectangle(-286.1,-230.8,584.8,474.7), new cjs.Rectangle(-285.7,-230.7,586.7,474.5), new cjs.Rectangle(-285.7,-230.7,588.4,474.5), new cjs.Rectangle(-285.7,-230.7,590,474.5), new cjs.Rectangle(-285.7,-230.7,591.7,474.5), new cjs.Rectangle(-285.7,-230.7,593.3,474.5), new cjs.Rectangle(-285.7,-230.7,595.7,474.5), new cjs.Rectangle(-285.7,-230.7,593.4,474.5), new cjs.Rectangle(-285.7,-230.7,591.8,474.5), new cjs.Rectangle(-285.7,-230.7,590.2,474.5), new cjs.Rectangle(-285.7,-230.7,588.5,474.5), new cjs.Rectangle(-285.7,-230.7,586.8,474.5), new cjs.Rectangle(-285.7,-230.7,585.2,474.5), new cjs.Rectangle(-285.7,-230.7,583.5,474.5), new cjs.Rectangle(-285.7,-230.7,581.8,474.5), new cjs.Rectangle(-285.7,-230.7,580.1,474.5), new cjs.Rectangle(-286.1,-230.8,578.6,474.7), new cjs.Rectangle(-281.8,-228.9,572.6,472.8), new cjs.Rectangle(-277.5,-230.1,565.9,474), new cjs.Rectangle(-272.9,-235.1,559.3,479), new cjs.Rectangle(-267.9,-239.7,552.7,483.6), new cjs.Rectangle(-263.4,-243.7,546.3,487.6), new cjs.Rectangle(-263.4,-243.7,544.4,487.6), new cjs.Rectangle(-263.4,-243.7,542.6,487.6), new cjs.Rectangle(-263.4,-243.7,540.7,487.6), new cjs.Rectangle(-263.4,-243.7,538.7,487.6), new cjs.Rectangle(-263.4,-243.7,536.8,487.6), new cjs.Rectangle(-263.4,-243.7,534.8,487.6), new cjs.Rectangle(-263.4,-243.7,532.9,487.6), new cjs.Rectangle(-263.4,-243.7,531,487.6), new cjs.Rectangle(-263.4,-243.7,529,487.6), new cjs.Rectangle(-263.4,-243.7,527,487.6)];


(lib.rainbowtale_d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rainbowtale_eye
	this.instance = new lib.rainbowtale_eye1_img();
	this.instance.setTransform(-41.9,-128.8,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// rainbowtale_ear
	this.instance_1 = new lib.rainbowtale_ear();
	this.instance_1.setTransform(-2,-138.3,1,1,0,0,0,21.5,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// rainbowtale_wing
	this.instance_2 = new lib.rainbowtale_wing();
	this.instance_2.setTransform(20.2,-51.4,1,1,0,0,0,-159,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// rainbowtale_tale1
	this.instance_3 = new lib.rainbowtale_tale1();
	this.instance_3.setTransform(79.2,-31.1,1,1,0,0,0,-13,-127);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// rainbowtale_body
	this.instance_4 = new lib.rainbowtale_body();
	this.instance_4.setTransform(11.4,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// rainbowtale_ear
	this.instance_5 = new lib.rainbowtale_ear();
	this.instance_5.setTransform(-53.1,-125.1,0.878,1,0,-55.1,124.9,21.5,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// rainbowtale_tale2
	this.instance_6 = new lib.rainbowtale_tale2();
	this.instance_6.setTransform(67.2,-7.8,1,1,0,0,0,-94,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// rainbowtale_tale1
	this.instance_7 = new lib.rainbowtale_tale1();
	this.instance_7.setTransform(78.2,-26,0.886,0.887,0,12.8,15,-13,-126.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// rainbowtale_wing
	this.instance_8 = new lib.rainbowtale_wing();
	this.instance_8.setTransform(-19.9,-47.6,1,1,0,0.3,-179.7,-159,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-346.1,-230.5,692.2,461);
p.frameBounds = [rect];


(lib.rainbowtale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rainbowtale_eye
	this.instance = new lib.rainbowtale_eye();
	this.instance.setTransform(-29.4,-114.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// rainbowtale_ear
	this.instance_1 = new lib.rainbowtale_ear();
	this.instance_1.setTransform(-2,-138.3,1,1,0,0,0,21.5,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({regX:21.4,rotation:15,x:-2.1,y:-138.2},3).to({regX:21.5,rotation:0,x:-2,y:-138.3},3).wait(31));

	// rainbowtale_wing
	this.instance_2 = new lib.rainbowtale_wing();
	this.instance_2.setTransform(20.2,-51.4,1,1,0,0,0,-159,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:45.1,rotation:-22.2},29).to({regX:-159.1,regY:45,rotation:36.2,x:20.1,y:-51.5},8).to({regX:-159,rotation:0,x:20.2,y:-51.4},22).wait(1));

	// rainbowtale_tale1
	this.instance_3 = new lib.rainbowtale_tale1();
	this.instance_3.setTransform(79.2,-31.1,1,1,0,0,0,-13,-127);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-11.7},29).to({rotation:0},30).wait(1));

	// rainbowtale_body
	this.instance_4 = new lib.rainbowtale_body();
	this.instance_4.setTransform(11.4,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60));

	// rainbowtale_ear
	this.instance_5 = new lib.rainbowtale_ear();
	this.instance_5.setTransform(-53.1,-125.1,0.878,1,0,-55.1,124.9,21.5,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({skewX:-40.1,skewY:139.9,y:-125},3).to({skewX:-55.1,skewY:124.9,y:-125.1},3).wait(47));

	// rainbowtale_tale2
	this.instance_6 = new lib.rainbowtale_tale2();
	this.instance_6.setTransform(67.2,-7.8,1,1,0,0,0,-94,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:-57.1,rotation:-15},29).to({regY:-57,rotation:0},30).wait(1));

	// rainbowtale_tale1
	this.instance_7 = new lib.rainbowtale_tale1();
	this.instance_7.setTransform(78.2,-26,0.886,0.887,0,12.8,15,-13,-126.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({skewX:-2.2,skewY:0,x:78.3},29).to({skewX:12.8,skewY:15,x:78.2},30).wait(1));

	// rainbowtale_wing
	this.instance_8 = new lib.rainbowtale_wing();
	this.instance_8.setTransform(-19.9,-47.6,1,1,0,0.3,-179.7,-159,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({skewX:21.2,skewY:-158.8},29).to({regY:44.9,skewX:-38.8,skewY:-218.8},8).to({regY:45,skewX:0.3,skewY:-179.7},22).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-346.1,-230.5,692.2,461);
p.frameBounds = [rect, new cjs.Rectangle(-346.5,-230.5,693.3,461.1), new cjs.Rectangle(-347,-230.5,694.3,461.5), new cjs.Rectangle(-347.6,-230.5,695.4,461.6), new cjs.Rectangle(-348,-230.5,696.3,461.8), new cjs.Rectangle(-348.4,-230.5,697.1,462.1), new cjs.Rectangle(-348.7,-230.5,697.8,462.3), new cjs.Rectangle(-349.1,-230.5,698.5,462.5), new cjs.Rectangle(-349.3,-230.5,699,462.6), new cjs.Rectangle(-349.4,-230.5,699.2,462.8), new cjs.Rectangle(-349.6,-234.1,699.5,466.5), new cjs.Rectangle(-349.7,-238,699.7,470.5), new cjs.Rectangle(-349.7,-241.9,699.8,474.6), new cjs.Rectangle(-349.6,-245.9,699.6,478.7), new cjs.Rectangle(-349.5,-249.8,699.3,482.6), new cjs.Rectangle(-349.4,-253.7,699,486.6), new cjs.Rectangle(-349.2,-258.4,698.6,491.4), new cjs.Rectangle(-348.9,-262.2,698,495.2), new cjs.Rectangle(-348.7,-265.9,697.3,498.9), new cjs.Rectangle(-348.3,-269.6,696.6,502.7), new cjs.Rectangle(-347.9,-273.3,695.8,506.4), new cjs.Rectangle(-347.5,-276.9,694.8,510), new cjs.Rectangle(-346.9,-280.5,693.7,513.6), new cjs.Rectangle(-346.4,-284,692.5,517.1), new cjs.Rectangle(-345.8,-287.5,691.2,520.5), new cjs.Rectangle(-345.1,-291,689.7,523.9), new cjs.Rectangle(-344.4,-294.5,688.2,527.3), new cjs.Rectangle(-343.6,-297.8,686.6,530.7), new cjs.Rectangle(-342.7,-301.2,684.8,533.9), new cjs.Rectangle(-342.2,-305.4,683.5,538.2), new cjs.Rectangle(-348.5,-270.9,696.7,503.6), new cjs.Rectangle(-349.3,-233.9,699.2,466.7), new cjs.Rectangle(-348.8,-230.5,695.2,463.3), new cjs.Rectangle(-363.3,-230.5,723.7,463.4), new cjs.Rectangle(-372,-230.5,742.6,463.4), new cjs.Rectangle(-374.5,-230.5,749.4,463.5), new cjs.Rectangle(-371.1,-230.5,744.5,463.6), new cjs.Rectangle(-362.3,-230.5,728.9,463.6), new cjs.Rectangle(-364.6,-230.5,732.8,463.5), new cjs.Rectangle(-367,-230.5,737.1,463.6), new cjs.Rectangle(-369.1,-230.5,740.5,463.5), new cjs.Rectangle(-370.8,-230.5,743.6,463.5), new cjs.Rectangle(-372.2,-230.5,746,463.5), new cjs.Rectangle(-373.3,-230.5,747.8,463.4), new cjs.Rectangle(-374,-230.5,748.9,463.4), new cjs.Rectangle(-374.5,-230.5,749.4,463.3), new cjs.Rectangle(-374.5,-230.5,749.3,463.2), new cjs.Rectangle(-374.2,-230.5,748.6,463.1), new cjs.Rectangle(-373.6,-230.5,747.1,463), new cjs.Rectangle(-372.7,-230.5,745.1,462.9), new cjs.Rectangle(-371.3,-230.5,742.4,462.7), new cjs.Rectangle(-369.7,-230.5,739,462.6), new cjs.Rectangle(-367.8,-230.5,735.3,462.3), new cjs.Rectangle(-365.5,-230.5,730.7,462.2), new cjs.Rectangle(-362.9,-230.5,725.5,462), new cjs.Rectangle(-359.9,-230.5,719.8,461.9), new cjs.Rectangle(-356.8,-230.5,713.5,461.6), new cjs.Rectangle(-353.2,-230.5,706.8,461.4), new cjs.Rectangle(-349.3,-230.5,699.1,461.2), new cjs.Rectangle(-346.1,-230.5,692.2,461)];


(lib.product_progress_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{show:0,hide:1});

	// frame
	this.instance = new lib.frame_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// graph
	this.instance_1 = new lib.flower_img();
	this.instance_1.setTransform(-87,-80,0.7,0.7);

	this.instance_2 = new lib.no_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.instance_3 = new lib.bg_product_progress_mc2();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

	// decor
	this.instance_4 = new lib.shadow_product_progress_img();
	this.instance_4.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, rect];


(lib.product_progress_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"show":0,"hide":1});

	// frame
	this.instance = new lib.frame_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// graph
	this.instance_1 = new lib.fire_stone_img();
	this.instance_1.setTransform(-79,-70);

	this.instance_2 = new lib.no_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.instance_3 = new lib.bg_product_progress_mc2();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

	// decor
	this.instance_4 = new lib.shadow_product_progress_img();
	this.instance_4.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, rect];


(lib.product_progress_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"show":0,"hide":1});

	// frame
	this.instance = new lib.frame_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Au5O6QmLmMAAouQAAotGLmMQGLmMIuAAQIvAAGLGMQGLGMABItQgBIumLGMQmLGLovABQougBmLmLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:5,y:-9}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// graph
	this.instance_1 = new lib.spiked_pony_d();
	this.instance_1.setTransform(-45,-2,0.505,0.505,0,0,180);

	this.instance_2 = new lib.no_product_progress_mc();

	this.instance_1.mask = this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.instance_3 = new lib.bg_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

	// decor
	this.instance_4 = new lib.shadow_product_progress_img();
	this.instance_4.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, rect];


(lib.product_progress_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"show":0,"hide":1});

	// frame
	this.instance = new lib.frame_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Au5O6QmLmMAAouQAAotGLmMQGLmMIuAAQIvAAGLGMQGLGMABItQgBIumLGMQmLGLovABQougBmLmLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:5,y:-9}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// graph
	this.instance_1 = new lib.rainbowtale_d();
	this.instance_1.setTransform(-5.2,-4,0.414,0.414);

	this.instance_2 = new lib.no_product_progress_mc();

	this.instance_1.mask = this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.instance_3 = new lib.bg_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

	// decor
	this.instance_4 = new lib.shadow_product_progress_img();
	this.instance_4.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, rect];


(lib.product_progress_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"show":0,"hide":1});

	// frame
	this.instance = new lib.frame_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// graph
	this.instance_1 = new lib.dragon1();
	this.instance_1.setTransform(34,-14.7,0.561,0.561,0,0,0,9.9,-77.8);

	this.instance_2 = new lib.no_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.instance_3 = new lib.bg_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

	// decor
	this.instance_4 = new lib.shadow_product_progress_img();
	this.instance_4.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, rect];


(lib.night_shadow_face = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// night_shadow_eye
	this.instance = new lib.night_shadow_eye();
	this.instance.setTransform(-28.9,-3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// night_shadow_ear
	this.instance_1 = new lib.night_shadow_ear();
	this.instance_1.setTransform(-7.2,-8.6,1,1,0,0,0,-46,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({rotation:-60},7).wait(20).to({rotation:0},6).wait(13));

	// night_shadow_head
	this.instance_2 = new lib.night_shadow_head();
	this.instance_2.setTransform(-12,7.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

	// night_shadow_ear2
	this.instance_3 = new lib.night_shadow_ear2();
	this.instance_3.setTransform(-20.9,-9.3,1,1,-7.2,0,0,-46,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({regX:-46.1,rotation:-82.2,x:-21},7).wait(20).to({regX:-46,rotation:-7.2,x:-20.9},6).to({rotation:-7.2},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.8,-57.9,183.8,115.3);
p.frameBounds = [rect, rect=new cjs.Rectangle(-91.8,-57.6,183.8,115), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-91.8,-57.9,183.8,115.3), new cjs.Rectangle(-91.8,-74.3,186.2,131.7), new cjs.Rectangle(-91.8,-88.8,186.4,146.2), new cjs.Rectangle(-91.8,-100.3,184.5,157.7), new cjs.Rectangle(-91.8,-108.8,180.1,166.2), new cjs.Rectangle(-91.8,-113.7,173.7,171.1), new cjs.Rectangle(-91.8,-115.1,165.4,172.5), rect=new cjs.Rectangle(-91.8,-112.8,159.9,170.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-91.8,-115.2,167,172.6), new cjs.Rectangle(-91.8,-112.5,176.1,169.9), new cjs.Rectangle(-91.8,-105,182.6,162.4), new cjs.Rectangle(-91.8,-93,186.1,150.4), new cjs.Rectangle(-91.8,-76.9,186.4,134.3), new cjs.Rectangle(-91.8,-57.9,183.8,115.3), rect=new cjs.Rectangle(-91.8,-57.6,183.8,115), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-91.8,-57.9,183.8,115.3)];


(lib.night_shadow_d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// night_shadow_face
	this.instance = new lib.night_shadow_eye1_img();
	this.instance.setTransform(-133.8,-140.5,0.72,0.72);

	this.instance_1 = new lib.night_shadow_ear();
	this.instance_1.setTransform(-98.5,-139.4,1,1,0,0,0,-46,6);

	this.instance_2 = new lib.night_shadow_head();
	this.instance_2.setTransform(-103.3,-123.8);

	this.instance_3 = new lib.night_shadow_ear2();
	this.instance_3.setTransform(-112.2,-140.1,1,1,-7.2,0,0,-46,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// night_shadow_body
	this.instance_4 = new lib.night_shadow_body();
	this.instance_4.setTransform(-20.9,19.2,1,1,0,0,0,0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// night_shadow_tale
	this.instance_5 = new lib.night_shadow_tale();
	this.instance_5.setTransform(67.6,4.2,1,1,0,0,0,-35,88);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-183.1,-188.8,366.3,377.6);
p.frameBounds = [rect];


(lib.night_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.night_shadow_face();
	this.instance.setTransform(-91.3,-106.8,1,1,0,0,0,0,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({regX:-0.1,regY:23.9,rotation:-30,x:-91.4},10).wait(27).to({regX:0,regY:24,rotation:0,x:-91.3},12).wait(1));

	// animation
	this.instance_1 = new lib.night_shadow_body();
	this.instance_1.setTransform(-20.9,19.2,1,1,0,0,0,0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70));

	// animation
	this.instance_2 = new lib.night_shadow_tale();
	this.instance_2.setTransform(67.6,4.2,1,1,0,0,0,-35,88);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:39},9).to({rotation:0},13).to({rotation:39},11).to({rotation:0},11).to({rotation:39},12).to({rotation:0},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-183.1,-188.8,366.3,377.6);
p.frameBounds = [rect, new cjs.Rectangle(-183.1,-188.8,379.9,377.6), new cjs.Rectangle(-183.1,-188.8,392.8,377.6), new cjs.Rectangle(-183.1,-188.8,405,377.7), new cjs.Rectangle(-183.1,-188.8,416.7,377.6), new cjs.Rectangle(-183.1,-188.8,427,377.6), new cjs.Rectangle(-183.1,-188.8,436.3,377.6), new cjs.Rectangle(-183.1,-188.8,444.9,377.6), new cjs.Rectangle(-183.1,-188.8,452.1,377.6), new cjs.Rectangle(-183.1,-188.8,458.7,377.6), new cjs.Rectangle(-183.1,-188.8,454,377.6), new cjs.Rectangle(-183.1,-188.8,449.3,377.6), new cjs.Rectangle(-183.1,-188.8,444.1,377.6), new cjs.Rectangle(-183.1,-188.8,438.3,377.6), new cjs.Rectangle(-183.1,-188.8,432,377.6), new cjs.Rectangle(-183.1,-188.8,425.3,377.6), new cjs.Rectangle(-183.1,-188.8,418,377.6), new cjs.Rectangle(-183.1,-188.8,410.3,377.6), new cjs.Rectangle(-183.1,-188.8,402.1,377.6), new cjs.Rectangle(-183.1,-188.8,393.6,377.6), new cjs.Rectangle(-183.1,-188.8,384.6,377.6), new cjs.Rectangle(-186.5,-192.4,378.6,381.3), new cjs.Rectangle(-189.4,-195.7,372.6,384.6), new cjs.Rectangle(-192.3,-199,386.7,387.9), new cjs.Rectangle(-194.8,-202,400,390.8), new cjs.Rectangle(-197.1,-204.7,412.5,393.5), new cjs.Rectangle(-199.3,-207.2,424.4,396), new cjs.Rectangle(-201,-209.3,435.2,398.2), new cjs.Rectangle(-202.4,-211.2,445.6,400.1), new cjs.Rectangle(-203.6,-212.8,454.6,401.7), new cjs.Rectangle(-204.5,-214.3,462.7,403.2), new cjs.Rectangle(-204.3,-214.1,468.8,402.9), new cjs.Rectangle(-204.3,-214.1,474.4,402.9), new cjs.Rectangle(-204.3,-214.1,479.8,402.9), new cjs.Rectangle(-204.3,-214.1,474.4,402.9), new cjs.Rectangle(-204.3,-214.1,468.7,402.9), new cjs.Rectangle(-204.3,-214.1,462.4,402.9), new cjs.Rectangle(-204.3,-214.1,455.2,402.9), new cjs.Rectangle(-204.3,-214.1,447.4,402.9), new cjs.Rectangle(-204.3,-214.1,438.5,402.9), new cjs.Rectangle(-204.3,-214.1,429.4,402.9), new cjs.Rectangle(-204.3,-214.1,419.7,402.9), new cjs.Rectangle(-204.3,-214.1,409.4,402.9), new cjs.Rectangle(-204.3,-214.1,398.7,402.9), new cjs.Rectangle(-204.3,-214.1,387.5,402.9), new cjs.Rectangle(-204.3,-214.1,397.3,402.9), new cjs.Rectangle(-204.3,-214.1,407.3,402.9), new cjs.Rectangle(-204.3,-214.1,416.9,402.9), new cjs.Rectangle(-204.3,-214.1,426.1,402.9), new cjs.Rectangle(-204.3,-214.1,434.8,402.9), new cjs.Rectangle(-204.3,-214.1,442.9,402.9), new cjs.Rectangle(-204.3,-214.1,450.5,402.9), new cjs.Rectangle(-204.3,-214.1,457.5,402.9), new cjs.Rectangle(-204.3,-214.1,463.9,402.9), new cjs.Rectangle(-204.3,-214.1,469.7,402.9), new cjs.Rectangle(-204.3,-214.1,474.9,402.9), new cjs.Rectangle(-204.3,-214.1,479.8,402.9), new cjs.Rectangle(-204.5,-214.3,475.4,403.2), new cjs.Rectangle(-203.7,-213.1,469.9,401.9), new cjs.Rectangle(-202.8,-211.7,463.8,400.6), new cjs.Rectangle(-201.7,-210.3,456.8,399.1), new cjs.Rectangle(-200.4,-208.6,449.3,397.4), new cjs.Rectangle(-198.9,-206.7,441,395.5), new cjs.Rectangle(-197.1,-204.6,432,393.5), new cjs.Rectangle(-195.2,-202.4,422.4,391.2), new cjs.Rectangle(-193.1,-199.9,412.1,388.8), new cjs.Rectangle(-190.8,-197.3,401.3,386.2), new cjs.Rectangle(-188.5,-194.7,390,383.6), new cjs.Rectangle(-185.7,-191.6,377.8,380.4), new cjs.Rectangle(-183.1,-188.8,366.3,377.6)];


(lib.neud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// anim
	this.instance = new lib.neud1();
	this.instance.setTransform(58.5,148.5,1,1,0,0,0,0,74);
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.neud2_img();

	this.instance_2 = new lib.neud3_img();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},23).to({state:[{t:this.instance}]},30).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},7).wait(1).to({_off:true},5).wait(12).to({_off:false,regY:0,y:74.5},0).wait(23).to({regY:74,y:148.5},0).to({scaleX:1.65,scaleY:0.19,alpha:0.012},30).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,117,149);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1.2,4,119.6,145), new cjs.Rectangle(-2.5,8,122.1,141), new cjs.Rectangle(-3.8,12,124.6,137), new cjs.Rectangle(-5,16,127.2,133), new cjs.Rectangle(-6.3,20,129.7,129), new cjs.Rectangle(-7.6,24,132.2,124.9), new cjs.Rectangle(-8.8,28,134.8,120.9), new cjs.Rectangle(-10.1,32,137.3,116.9), new cjs.Rectangle(-11.4,36,139.8,112.9), new cjs.Rectangle(-12.6,40,142.4,108.9), new cjs.Rectangle(-13.9,44,144.9,104.9), new cjs.Rectangle(-15.2,48,147.4,100.9), new cjs.Rectangle(-16.4,52,150,96.9), new cjs.Rectangle(-17.7,56,152.5,92.8), new cjs.Rectangle(-19,60,155,88.8), new cjs.Rectangle(-20.2,64,157.6,84.8), new cjs.Rectangle(-21.5,68,160.1,80.8), new cjs.Rectangle(-22.8,72,162.7,76.7), new cjs.Rectangle(-24,76,165.2,72.7), new cjs.Rectangle(-25.3,80,167.7,68.7), new cjs.Rectangle(-26.6,84,170.3,64.7), new cjs.Rectangle(-27.8,88,172.8,60.7), new cjs.Rectangle(-29.1,92,175.3,56.7), new cjs.Rectangle(-30.4,96,177.9,52.7), new cjs.Rectangle(-31.6,100,180.4,48.6), new cjs.Rectangle(-32.9,104,182.9,44.6), new cjs.Rectangle(-34.2,108,185.5,40.6), new cjs.Rectangle(-35.4,112,188,36.6), new cjs.Rectangle(-36.7,115.9,190.5,32.6), new cjs.Rectangle(-38,120,193,28.6), null];


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


(lib.medusa_d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 8
	this.instance = new lib.medusa8();
	this.instance.setTransform(38,23,1,1,0,0,0,22.5,-47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 7
	this.instance_1 = new lib.medusa7();
	this.instance_1.setTransform(27.5,20.9,1,1,0,0,0,24.5,-59.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 6
	this.instance_2 = new lib.medusa6();
	this.instance_2.setTransform(-0.1,18.5,1,1,0,0,0,0.5,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 5
	this.instance_3 = new lib.medusa5();
	this.instance_3.setTransform(-18.6,23.3,1,1,0,0,0,2,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 4
	this.instance_4 = new lib.medusa4();
	this.instance_4.setTransform(12.4,22,1,1,0,0,0,-4,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 3
	this.instance_5 = new lib.medusa3();
	this.instance_5.setTransform(-1.6,28.3,1,1,0,0,0,2,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 1
	this.instance_6 = new lib.medusa2();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 2
	this.instance_7 = new lib.medusa1();
	this.instance_7.setTransform(-38,28.3,1,1,0,0,0,-35,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.5,-29,95,195);
p.frameBounds = [rect];


(lib.medusa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 8
	this.instance = new lib.medusa8();
	this.instance.setTransform(38,23,1,1,0,0,0,22.5,-47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:22.4,rotation:6.7,y:22.9},9).to({regX:22.5,rotation:0,y:23},10).wait(1));

	// Слой 7
	this.instance_1 = new lib.medusa7();
	this.instance_1.setTransform(27.5,20.9,1,1,0,0,0,24.5,-59.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:24.4,regY:-59.6,rotation:17.5,y:20.8},9).to({regX:24.5,regY:-59.5,rotation:0,y:20.9},10).wait(1));

	// Слой 6
	this.instance_2 = new lib.medusa6();
	this.instance_2.setTransform(-0.1,18.5,1,1,0,0,0,0.5,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1.01,skewX:-7.3},9).to({scaleY:1,skewX:0},10).wait(1));

	// Слой 5
	this.instance_3 = new lib.medusa5();
	this.instance_3.setTransform(-18.6,23.3,1,1,0,0,0,2,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:5.7},9).to({rotation:0},10).wait(1));

	// Слой 4
	this.instance_4 = new lib.medusa4();
	this.instance_4.setTransform(12.4,22,1,1,0,0,0,-4,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-10.2},9).to({rotation:0},10).wait(1));

	// Слой 3
	this.instance_5 = new lib.medusa3();
	this.instance_5.setTransform(-1.6,28.3,1,1,0,0,0,2,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:-63.9,rotation:5.9,y:28.4},9).to({regY:-64,rotation:0,y:28.3},10).wait(1));

	// Слой 1
	this.instance_6 = new lib.medusa2();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:0.93},9).to({scaleX:1},10).wait(1));

	// Слой 2
	this.instance_7 = new lib.medusa1();
	this.instance_7.setTransform(-38,28.3,1,1,0,0,0,-35,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-22.7,x:-37.9,y:28.4},9).to({rotation:0,x:-38,y:28.3},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.5,-29,95,195);
p.frameBounds = [rect, new cjs.Rectangle(-47.1,-29,94.2,195.1), new cjs.Rectangle(-46.7,-29,94.7,195.2), new cjs.Rectangle(-46.8,-29,98.3,195.2), new cjs.Rectangle(-46.9,-29,101.6,195.2), new cjs.Rectangle(-46.9,-29,104.8,195.3), new cjs.Rectangle(-46.9,-29,107.8,195.2), new cjs.Rectangle(-49.2,-29,112.8,195.1), new cjs.Rectangle(-52.7,-29,118.9,195.3), new cjs.Rectangle(-56.2,-29,125.1,195.4), new cjs.Rectangle(-52.7,-28.9,119.2,195.2), new cjs.Rectangle(-49.6,-28.9,113.8,195.1), new cjs.Rectangle(-47,-28.9,108.7,195.1), new cjs.Rectangle(-46.9,-28.9,106.1,195.3), new cjs.Rectangle(-46.9,-28.9,103.3,195.2), new cjs.Rectangle(-46.9,-28.9,100.4,195.2), new cjs.Rectangle(-46.8,-28.9,97.2,195.2), new cjs.Rectangle(-46.7,-28.9,94,195.1), new cjs.Rectangle(-47.1,-28.9,94.3,195), new cjs.Rectangle(-47.5,-29,95,195)];


(lib.magic_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pipe();
	this.instance.setTransform(393,134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// animation
	this.instance_1 = new lib.kolpak();
	this.instance_1.setTransform(398,430);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// animation
	this.instance_2 = new lib.magic();
	this.instance_2.setTransform(396,402,1.213,1.213,0,0,0,75,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},29).wait(1));

	// animation
	this.instance_3 = new lib.flower();
	this.instance_3.setTransform(393,434.4);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({alpha:1},13).wait(16));

	// animation
	this.instance_4 = new lib.table();
	this.instance_4.setTransform(399,520.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30));

	// animation
	this.instance_5 = new lib.hero_mc();
	this.instance_5.setTransform(130,400,0.803,0.803);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.9,-11.1,669.9,822.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.magic_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pipe();
	this.instance.setTransform(393,134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// animation
	this.instance_1 = new lib.kolpak();
	this.instance_1.setTransform(398,430);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// animation
	this.instance_2 = new lib.magic();
	this.instance_2.setTransform(396,402,1.213,1.213,0,0,0,75,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},29).wait(1));

	// animation
	this.instance_3 = new lib.fire_stone();
	this.instance_3.setTransform(398,447);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({alpha:1},13).wait(16));

	// animation
	this.instance_4 = new lib.table();
	this.instance_4.setTransform(399,520.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30));

	// animation
	this.instance_5 = new lib.hero_mc();
	this.instance_5.setTransform(130,400,0.803,0.803);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.9,-11.1,669.9,822.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.magic_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pipe();
	this.instance.setTransform(393,134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({y:-472.4},32).to({_off:true},1).wait(51));

	// animation
	this.instance_1 = new lib.kolpak();
	this.instance_1.setTransform(398,430);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({y:-176.9},32).to({_off:true},1).wait(51));

	// animation
	this.instance_2 = new lib.magic();
	this.instance_2.setTransform(396,402,1.213,1.213,0,0,0,75,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},21).wait(89));

	// animation
	this.instance_3 = new lib.egg12_1();
	this.instance_3.setTransform(390,474.4,1,1,0,0,0,-3,70);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).to({rotation:-76.5,alpha:0.012},20).to({_off:true},1).wait(30));

	// animation
	this.instance_4 = new lib.egg12_2();
	this.instance_4.setTransform(393,476.4,1,1,0,0,0,0,72);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59).to({_off:false},0).to({rotation:76.7,alpha:0.012},20).to({_off:true},1).wait(30));

	// animation
	this.instance_5 = new lib.spiked_pony();
	this.instance_5.setTransform(400.5,410.8,0.275,0.275);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59).to({_off:false},0).to({alpha:1},20).to({scaleX:0.96,scaleY:0.96,x:415.5,y:252.8},30).wait(1));

	// animation
	this.instance_6 = new lib.egg12();
	this.instance_6.setTransform(393,404);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({alpha:1},18).wait(38).to({_off:true},1).wait(51));

	// animation
	this.instance_7 = new lib.table();
	this.instance_7.setTransform(399,520.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(110));

	// animation
	this.instance_8 = new lib.hero_mc();
	this.instance_8.setTransform(130,400,0.803,0.803);

	this.instance_9 = new lib.hero_mc3();
	this.instance_9.setTransform(130,400,0.803,0.803);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},60).to({state:[{t:this.instance_8}]},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.9,-11.1,669.9,822.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110.9,-18.9,669.9,830.1), new cjs.Rectangle(-110.9,-37.9,669.9,849.1), new cjs.Rectangle(-110.9,-56.9,669.9,868.1), new cjs.Rectangle(-110.9,-75.8,669.9,887), new cjs.Rectangle(-110.9,-94.8,669.9,906), new cjs.Rectangle(-110.9,-113.8,669.9,925), new cjs.Rectangle(-110.9,-132.7,669.9,943.9), new cjs.Rectangle(-110.9,-151.7,669.9,962.9), new cjs.Rectangle(-110.9,-170.7,669.9,981.9), new cjs.Rectangle(-110.9,-189.6,669.9,1000.8), new cjs.Rectangle(-110.9,-208.6,669.9,1019.8), new cjs.Rectangle(-110.9,-227.6,669.9,1038.8), new cjs.Rectangle(-110.9,-246.5,669.9,1057.7), new cjs.Rectangle(-110.9,-265.5,669.9,1076.7), new cjs.Rectangle(-110.9,-284.5,669.9,1095.7), new cjs.Rectangle(-110.9,-303.4,669.9,1114.6), new cjs.Rectangle(-110.9,-322.4,669.9,1133.6), new cjs.Rectangle(-110.9,-341.4,669.9,1152.6), new cjs.Rectangle(-110.9,-360.4,669.9,1171.6), new cjs.Rectangle(-110.9,-379.3,669.9,1190.5), new cjs.Rectangle(-110.9,-398.3,669.9,1209.5), new cjs.Rectangle(-110.9,-417.3,669.9,1228.5), new cjs.Rectangle(-110.9,-436.2,669.9,1247.4), new cjs.Rectangle(-110.9,-455.2,669.9,1266.4), new cjs.Rectangle(-110.9,-474.2,669.9,1285.4), new cjs.Rectangle(-110.9,-493.1,669.9,1304.3), new cjs.Rectangle(-110.9,-512.1,669.9,1323.3), new cjs.Rectangle(-110.9,-531.1,669.9,1342.3), new cjs.Rectangle(-110.9,-550,669.9,1361.2), new cjs.Rectangle(-110.9,-569,669.9,1380.2), new cjs.Rectangle(-110.9,-588,669.9,1399.2), new cjs.Rectangle(-110.9,-606.9,669.9,1418.1), rect=new cjs.Rectangle(-110.9,-11.1,665.4,822.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110.9,-11.1,668.8,822.3), new cjs.Rectangle(-110.9,-11.1,675.3,822.3), new cjs.Rectangle(-110.9,-11.1,681.8,822.3), new cjs.Rectangle(-110.9,-11.1,688.3,822.3), new cjs.Rectangle(-110.9,-11.1,694.9,822.3), new cjs.Rectangle(-110.9,-11.1,701.4,822.3), new cjs.Rectangle(-110.9,-11.1,707.9,822.3), new cjs.Rectangle(-110.9,-11.1,714.4,822.3), new cjs.Rectangle(-110.9,-11.1,721,822.3), new cjs.Rectangle(-110.9,-11.1,727.5,822.3), new cjs.Rectangle(-110.9,-11.1,734.1,822.3), new cjs.Rectangle(-110.9,-11.1,740.6,822.3), new cjs.Rectangle(-110.9,-11.1,747.2,822.3), new cjs.Rectangle(-110.9,-11.1,753.6,822.3), new cjs.Rectangle(-110.9,-11.1,760.3,822.3), new cjs.Rectangle(-110.9,-11.1,766.7,822.3), new cjs.Rectangle(-110.9,-11.1,773.3,822.3), new cjs.Rectangle(-110.9,-11.1,779.8,822.3)];


(lib.magic_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pipe();
	this.instance.setTransform(393,134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({y:-472.4},32).to({_off:true},1).wait(51));

	// animation
	this.instance_1 = new lib.kolpak();
	this.instance_1.setTransform(398,430);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({y:-176.9},32).to({_off:true},1).wait(51));

	// animation
	this.instance_2 = new lib.magic();
	this.instance_2.setTransform(396,402,1.213,1.213,0,0,0,75,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},21).wait(89));

	// animation
	this.instance_3 = new lib.egg10_1();
	this.instance_3.setTransform(397,480.4,1,1,0,0,0,0,72);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).to({rotation:-75,alpha:0.012},20).to({_off:true},1).wait(30));

	// animation
	this.instance_4 = new lib.egg10_2();
	this.instance_4.setTransform(397,481.4,1,1,0,0,0,0,73);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59).to({_off:false},0).to({regX:-0.1,regY:73.1,rotation:75.9,x:396.9,y:481.3,alpha:0.012},20).to({_off:true},1).wait(30));

	// animation
	this.instance_5 = new lib.night_shadow();
	this.instance_5.setTransform(405.5,422,0.334,0.334);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59).to({_off:false},0).to({alpha:1},20).to({scaleX:1,scaleY:1,x:420.5,y:293},30).wait(1));

	// animation
	this.instance_6 = new lib.egg10();
	this.instance_6.setTransform(393,404);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({alpha:1},18).wait(38).to({_off:true},1).wait(51));

	// animation
	this.instance_7 = new lib.table();
	this.instance_7.setTransform(399,520.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(110));

	// animation
	this.instance_8 = new lib.hero_mc();
	this.instance_8.setTransform(130,400,0.803,0.803);

	this.instance_9 = new lib.hero_mc3();
	this.instance_9.setTransform(130,400,0.803,0.803);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},60).to({state:[{t:this.instance_8}]},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.9,-11.1,669.9,822.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110.9,-18.9,669.9,830.1), new cjs.Rectangle(-110.9,-37.9,669.9,849.1), new cjs.Rectangle(-110.9,-56.9,669.9,868.1), new cjs.Rectangle(-110.9,-75.8,669.9,887), new cjs.Rectangle(-110.9,-94.8,669.9,906), new cjs.Rectangle(-110.9,-113.8,669.9,925), new cjs.Rectangle(-110.9,-132.7,669.9,943.9), new cjs.Rectangle(-110.9,-151.7,669.9,962.9), new cjs.Rectangle(-110.9,-170.7,669.9,981.9), new cjs.Rectangle(-110.9,-189.6,669.9,1000.8), new cjs.Rectangle(-110.9,-208.6,669.9,1019.8), new cjs.Rectangle(-110.9,-227.6,669.9,1038.8), new cjs.Rectangle(-110.9,-246.5,669.9,1057.7), new cjs.Rectangle(-110.9,-265.5,669.9,1076.7), new cjs.Rectangle(-110.9,-284.5,669.9,1095.7), new cjs.Rectangle(-110.9,-303.4,669.9,1114.6), new cjs.Rectangle(-110.9,-322.4,669.9,1133.6), new cjs.Rectangle(-110.9,-341.4,669.9,1152.6), new cjs.Rectangle(-110.9,-360.4,669.9,1171.6), new cjs.Rectangle(-110.9,-379.3,669.9,1190.5), new cjs.Rectangle(-110.9,-398.3,669.9,1209.5), new cjs.Rectangle(-110.9,-417.3,669.9,1228.5), new cjs.Rectangle(-110.9,-436.2,669.9,1247.4), new cjs.Rectangle(-110.9,-455.2,669.9,1266.4), new cjs.Rectangle(-110.9,-474.2,669.9,1285.4), new cjs.Rectangle(-110.9,-493.1,669.9,1304.3), new cjs.Rectangle(-110.9,-512.1,669.9,1323.3), new cjs.Rectangle(-110.9,-531.1,669.9,1342.3), new cjs.Rectangle(-110.9,-550,669.9,1361.2), new cjs.Rectangle(-110.9,-569,669.9,1380.2), new cjs.Rectangle(-110.9,-588,669.9,1399.2), new cjs.Rectangle(-110.9,-606.9,669.9,1418.1), rect=new cjs.Rectangle(-110.9,-11.1,665.4,822.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110.9,-11.1,666.1,822.3), new cjs.Rectangle(-110.9,-11.1,666.3,822.3), new cjs.Rectangle(-110.9,-11.1,665.9,822.3), rect=new cjs.Rectangle(-110.9,-11.1,665.4,822.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110.9,-11.1,668.8,822.3), new cjs.Rectangle(-110.9,-11.1,673.3,822.3), new cjs.Rectangle(-110.9,-11.1,677.9,822.3), new cjs.Rectangle(-110.9,-11.1,682.5,822.3), new cjs.Rectangle(-110.9,-11.1,687.1,822.3), new cjs.Rectangle(-110.9,-11.1,691.6,822.3), new cjs.Rectangle(-110.9,-11.1,696.2,822.3), new cjs.Rectangle(-110.9,-11.1,700.8,822.3), new cjs.Rectangle(-110.9,-11.1,705.3,822.3), new cjs.Rectangle(-110.9,-11.1,709.9,822.3), new cjs.Rectangle(-110.9,-11.1,714.5,822.3)];


(lib.magic_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pipe();
	this.instance.setTransform(393,134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(110));

	// animation
	this.instance_1 = new lib.kolpak();
	this.instance_1.setTransform(398,430);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(110));

	// animation
	this.instance_2 = new lib.magic();
	this.instance_2.setTransform(396,402,1.213,1.213,0,0,0,75,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},21).wait(89));

	// animation
	this.instance_3 = new lib.back_water();
	this.instance_3.setTransform(398,569.5);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(22).to({_off:false},0).to({y:471.5,alpha:1},36).wait(52));

	// animation
	this.instance_4 = new lib.egg4_1();
	this.instance_4.setTransform(393,490.4,1,1,0,0,0,1,84);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59).to({_off:false},0).to({rotation:-58.2,x:393.1,alpha:0.012},20).to({_off:true},1).wait(30));

	// animation
	this.instance_5 = new lib.egg4_2();
	this.instance_5.setTransform(395,490.4,1,1,0,0,0,3,84);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59).to({_off:false},0).to({rotation:53.7,x:394.9,alpha:0.012},20).to({_off:true},1).wait(30));

	// animation
	this.instance_6 = new lib.medusa();
	this.instance_6.setTransform(399.8,385.9,0.482,0.482);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(59).to({_off:false},0).to({alpha:1},20).to({scaleX:0.81,scaleY:0.81,x:400.3,y:368.4},30).wait(1));

	// animation
	this.instance_7 = new lib.egg4();
	this.instance_7.setTransform(393,404);
	this.instance_7.alpha = 0.012;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).to({alpha:1},18).wait(38).to({_off:true},1).wait(51));

	// animation
	this.instance_8 = new lib.table();
	this.instance_8.setTransform(399,520.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(110));

	// animation
	this.instance_9 = new lib.hero_mc();
	this.instance_9.setTransform(130,400,0.803,0.803);

	this.instance_10 = new lib.hero_mc3();
	this.instance_10.setTransform(130,400,0.803,0.803);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_10}]},60).to({state:[{t:this.instance_9}]},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.9,-11.1,669.9,822.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110.9,-11.1,670.4,822.3), new cjs.Rectangle(-110.9,-11.1,673.9,822.3), new cjs.Rectangle(-110.9,-11.1,677.4,822.3), new cjs.Rectangle(-110.9,-11.1,680.4,822.3), new cjs.Rectangle(-110.9,-11.1,683,822.3), new cjs.Rectangle(-110.9,-11.1,685.4,822.3), rect=new cjs.Rectangle(-110.9,-11.1,669.9,822.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.magic_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pipe();
	this.instance.setTransform(393,134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({y:-472.4},32).to({_off:true},1).wait(51));

	// animation
	this.instance_1 = new lib.kolpak();
	this.instance_1.setTransform(398,430);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({y:-176.9},32).to({_off:true},1).wait(51));

	// animation
	this.instance_2 = new lib.magic();
	this.instance_2.setTransform(396,402,1.213,1.213,0,0,0,75,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},21).wait(89));

	// animation
	this.instance_3 = new lib.egg2_2();
	this.instance_3.setTransform(394.9,485.4,1,1,0,0,0,-1,81);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).to({rotation:67,y:485.3,alpha:0.012},20).to({_off:true},1).wait(30));

	// animation
	this.instance_4 = new lib.egg2_1();
	this.instance_4.setTransform(395.9,487.4,1,1,0,0,0,0,83);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59).to({_off:false},0).to({rotation:-68.4,x:396,alpha:0.012},20).to({_off:true},1).wait(30));

	// animation
	this.instance_5 = new lib.unicorn();
	this.instance_5.setTransform(407.2,429.4,0.336,0.336);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59).to({_off:false},0).to({alpha:1},20).to({scaleX:0.9,scaleY:0.9,x:439.3,y:349.4},30).wait(1));

	// animation
	this.instance_6 = new lib.egg2();
	this.instance_6.setTransform(393,404);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({alpha:1},18).wait(38).to({_off:true},1).wait(51));

	// animation
	this.instance_7 = new lib.table();
	this.instance_7.setTransform(399,520.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(110));

	// animation
	this.instance_8 = new lib.hero_mc();
	this.instance_8.setTransform(130,400,0.803,0.803);

	this.instance_9 = new lib.hero_mc3();
	this.instance_9.setTransform(130,400,0.803,0.803);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},60).to({state:[{t:this.instance_8}]},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.9,-11.1,669.9,822.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110.9,-18.9,669.9,830.1), new cjs.Rectangle(-110.9,-37.9,669.9,849.1), new cjs.Rectangle(-110.9,-56.9,669.9,868.1), new cjs.Rectangle(-110.9,-75.8,669.9,887), new cjs.Rectangle(-110.9,-94.8,669.9,906), new cjs.Rectangle(-110.9,-113.8,669.9,925), new cjs.Rectangle(-110.9,-132.7,669.9,943.9), new cjs.Rectangle(-110.9,-151.7,669.9,962.9), new cjs.Rectangle(-110.9,-170.7,669.9,981.9), new cjs.Rectangle(-110.9,-189.6,669.9,1000.8), new cjs.Rectangle(-110.9,-208.6,669.9,1019.8), new cjs.Rectangle(-110.9,-227.6,669.9,1038.8), new cjs.Rectangle(-110.9,-246.5,669.9,1057.7), new cjs.Rectangle(-110.9,-265.5,669.9,1076.7), new cjs.Rectangle(-110.9,-284.5,669.9,1095.7), new cjs.Rectangle(-110.9,-303.4,669.9,1114.6), new cjs.Rectangle(-110.9,-322.4,669.9,1133.6), new cjs.Rectangle(-110.9,-341.4,669.9,1152.6), new cjs.Rectangle(-110.9,-360.4,669.9,1171.6), new cjs.Rectangle(-110.9,-379.3,669.9,1190.5), new cjs.Rectangle(-110.9,-398.3,669.9,1209.5), new cjs.Rectangle(-110.9,-417.3,669.9,1228.5), new cjs.Rectangle(-110.9,-436.2,669.9,1247.4), new cjs.Rectangle(-110.9,-455.2,669.9,1266.4), new cjs.Rectangle(-110.9,-474.2,669.9,1285.4), new cjs.Rectangle(-110.9,-493.1,669.9,1304.3), new cjs.Rectangle(-110.9,-512.1,669.9,1323.3), new cjs.Rectangle(-110.9,-531.1,669.9,1342.3), new cjs.Rectangle(-110.9,-550,669.9,1361.2), new cjs.Rectangle(-110.9,-569,669.9,1380.2), new cjs.Rectangle(-110.9,-588,669.9,1399.2), new cjs.Rectangle(-110.9,-606.9,669.9,1418.1), rect=new cjs.Rectangle(-110.9,-11.1,665.4,822.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110.9,-11.1,669.4,822.3), new cjs.Rectangle(-110.9,-11.1,672.8,822.3), new cjs.Rectangle(-110.9,-11.1,675.9,822.3), new cjs.Rectangle(-110.9,-11.1,678.2,822.3), new cjs.Rectangle(-110.9,-11.1,680,822.3), new cjs.Rectangle(-110.9,-11.1,681.1,822.3), new cjs.Rectangle(-110.9,-11.1,682,822.3), rect=new cjs.Rectangle(-110.9,-11.1,665.4,822.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110.9,-11.1,668.6,822.3), new cjs.Rectangle(-110.9,-11.1,673.8,822.3), new cjs.Rectangle(-110.9,-11.1,678.9,822.3), new cjs.Rectangle(-110.9,-11.1,684.1,822.3), new cjs.Rectangle(-110.9,-11.1,689.2,822.3), new cjs.Rectangle(-110.9,-11.1,694.4,822.3), new cjs.Rectangle(-110.9,-11.1,699.4,822.3), new cjs.Rectangle(-110.9,-11.1,704.6,822.3), new cjs.Rectangle(-110.9,-11.1,709.7,822.3), new cjs.Rectangle(-110.9,-11.1,714.9,822.3), new cjs.Rectangle(-110.9,-11.1,720,822.3), new cjs.Rectangle(-110.9,-11.1,725.2,822.3), new cjs.Rectangle(-110.9,-11.1,730.3,822.3), new cjs.Rectangle(-110.9,-11.1,735.4,822.3), new cjs.Rectangle(-110.9,-11.1,740.6,822.3), new cjs.Rectangle(-110.9,-11.1,745.7,822.3)];


(lib.magic_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pipe();
	this.instance.setTransform(393,134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// animation
	this.instance_1 = new lib.kolpak();
	this.instance_1.setTransform(398,430);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// animation
	this.instance_2 = new lib.table();
	this.instance_2.setTransform(399,520.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

	// animation
	this.instance_3 = new lib.hero_mc();
	this.instance_3.setTransform(130,400,0.803,0.803);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.9,-11.1,669.9,822.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.items_inventory_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.candle_img();
	this.instance.setTransform(-14,-32,0.583,0.583);

	this.instance_1 = new lib.pero_img();
	this.instance_1.setTransform(26.4,-37.2,0.469,0.469,48.3);

	this.instance_2 = new lib.rainbow_img();
	this.instance_2.setTransform(-21,-33,0.283,0.283);

	this.instance_3 = new lib.kristall_img();
	this.instance_3.setTransform(-37,-20,0.5,0.5);

	this.instance_4 = new lib.rose_2_img();
	this.instance_4.setTransform(12.8,-42.9,0.75,0.75,45);

	this.instance_5 = new lib.shell_img();
	this.instance_5.setTransform(-35,-34,0.467,0.467);

	this.instance_6 = new lib.night_stone_img();
	this.instance_6.setTransform(-45,-12.8,0.487,0.487,-53.7);

	this.instance_7 = new lib.water_img();
	this.instance_7.setTransform(-22,-33,0.35,0.35);

	this.instance_8 = new lib.fire_stone_img();
	this.instance_8.setTransform(-35,-21,0.432,0.432);

	this.instance_9 = new lib.flower_img();
	this.instance_9.setTransform(-36,-26,0.288,0.288);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

	// bg
	this.instance_10 = new lib.bg_item_inventory_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect, rect, new cjs.Rectangle(-45,-45,91.3,92.6), rect=new cjs.Rectangle(-45,-45,90,90), rect, new cjs.Rectangle(-50.8,-45,106.1,108.2), rect=new cjs.Rectangle(-45,-45,90,90), rect, rect, rect, rect];


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
	this.instance.alpha = 0.789;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-60,290,120);
p.frameBounds = [rect];


(lib.hero_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.model_5_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-512,600,1024);
p.frameBounds = [rect];


(lib.hero_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.model_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-512,600,1024);
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
	this.shape.setTransform(400,300,1.35,1.033);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,854);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-410,-10,1620,620), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-410,-10,1620,628), new cjs.Rectangle(-410,-10,1620,640), new cjs.Rectangle(-410,-10,1620,652), new cjs.Rectangle(-410,-10,1620,664), new cjs.Rectangle(-410,-10,1620,676), new cjs.Rectangle(-410,-10,1620,688), new cjs.Rectangle(-410,-10,1620,700), new cjs.Rectangle(-410,-10,1620,712), new cjs.Rectangle(-410,-10,1620,724), new cjs.Rectangle(-410,-10,1620,736), new cjs.Rectangle(-410,-10,1620,748), new cjs.Rectangle(-410,-10,1620,760), new cjs.Rectangle(-410,-10,1620,772), new cjs.Rectangle(-410,-10,1620,784), new cjs.Rectangle(-410,-10,1620,796), new cjs.Rectangle(-410,-10,1620,808), new cjs.Rectangle(-410,-10,1620,820), new cjs.Rectangle(-410,-10,1620,832), new cjs.Rectangle(-410,-10,1620,844)];


(lib.grifon_d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// grif_eye1
	this.instance = new lib.grif_eye1_1_img();
	this.instance.setTransform(-17.3,-98.7,0.72,0.72,15);

	this.instance_1 = new lib.grif_kluv1_img();
	this.instance_1.setTransform(65.4,-70.3,0.72,0.72,15);

	this.instance_2 = new lib.grif_eye2_1_img();
	this.instance_2.setTransform(79.3,-106.3,0.72,0.72,15);

	this.instance_3 = new lib.grif_head();
	this.instance_3.setTransform(28.8,-95.4,1,1,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// grif_wing1
	this.instance_4 = new lib.grif_wing1_img();
	this.instance_4.setTransform(-238,-51.6,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// grif_leg
	this.instance_5 = new lib.grif_leg_img();
	this.instance_5.setTransform(-4.3,72.8,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// grif_body
	this.instance_6 = new lib.grif_body_img();
	this.instance_6.setTransform(-93.7,-32.4,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// grif_tale
	this.instance_7 = new lib.grif_tale_img();
	this.instance_7.setTransform(-271.9,60.7,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// grif_leg
	this.instance_8 = new lib.grif_leg_img();
	this.instance_8.setTransform(30.4,69.2,0.72,0.72,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// grif_wing1
	this.instance_9 = new lib.grif_wing1_img();
	this.instance_9.setTransform(191.5,-170.9,0.72,0.72,0,-30,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-271.9,-219.3,544,418.2);
p.frameBounds = [rect];


(lib.grif_wing_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.grif_wing1();
	this.instance.setTransform(112.9,32.2,1,1,0,0,0,113,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:31.9,rotation:18.5,y:32.1},29).to({regY:32,rotation:0,y:32.2},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119.1,-80.6,238.3,161.3);
p.frameBounds = [rect, new cjs.Rectangle(-119.5,-82.7,239.8,163.5), new cjs.Rectangle(-120.1,-85.6,241.8,166.4), new cjs.Rectangle(-120.5,-87.8,243.2,168.6), new cjs.Rectangle(-121,-90.6,245.1,171.6), new cjs.Rectangle(-121.3,-92.7,246.5,173.7), new cjs.Rectangle(-121.8,-95.5,248.4,176.6), new cjs.Rectangle(-122,-97.6,249.7,178.7), new cjs.Rectangle(-122.4,-100.4,251.5,181.5), new cjs.Rectangle(-122.6,-102.5,252.7,183.6), new cjs.Rectangle(-123,-105.2,254.5,186.3), new cjs.Rectangle(-123.2,-108,256.1,189.1), new cjs.Rectangle(-123.4,-110,257.3,191.1), new cjs.Rectangle(-123.6,-112.7,258.9,193.8), new cjs.Rectangle(-123.7,-114.7,260.1,195.8), new cjs.Rectangle(-123.8,-117.3,261.6,198.4), new cjs.Rectangle(-123.9,-119.2,262.7,200.3), new cjs.Rectangle(-123.9,-121.9,264.1,202.9), new cjs.Rectangle(-123.9,-123.8,265.2,204.8), new cjs.Rectangle(-123.9,-126.3,266.5,207.3), new cjs.Rectangle(-123.9,-128.3,267.6,209.2), new cjs.Rectangle(-123.9,-130.7,268.8,211.6), new cjs.Rectangle(-123.8,-133.2,270.1,214), new cjs.Rectangle(-123.7,-135.1,271,215.9), new cjs.Rectangle(-123.5,-137.5,272.2,218.2), new cjs.Rectangle(-123.3,-139.3,273,220), new cjs.Rectangle(-123.1,-141.7,274.1,222.2), new cjs.Rectangle(-122.9,-143.5,274.9,224), new cjs.Rectangle(-122.6,-145.9,276,226.2), new cjs.Rectangle(-122.6,-148.4,277.1,228.6), new cjs.Rectangle(-122.7,-145.9,276,226.2), new cjs.Rectangle(-122.9,-144.1,275.2,224.5), new cjs.Rectangle(-123.2,-141.8,274.2,222.3), new cjs.Rectangle(-123.3,-140,273.3,220.6), new cjs.Rectangle(-123.6,-137.6,272.2,218.3), new cjs.Rectangle(-123.7,-135.8,271.4,216.5), new cjs.Rectangle(-123.8,-133.4,270.2,214.1), new cjs.Rectangle(-124,-131.6,269.2,212.4), new cjs.Rectangle(-124,-129.1,267.9,210), new cjs.Rectangle(-124,-127.1,267,208.2), new cjs.Rectangle(-124.1,-124.6,265.7,205.6), new cjs.Rectangle(-124.1,-122.7,264.6,203.8), new cjs.Rectangle(-124,-120.1,263.2,201.2), new cjs.Rectangle(-123.9,-118.2,262.1,199.3), new cjs.Rectangle(-123.8,-115.6,260.6,196.7), new cjs.Rectangle(-123.7,-113.7,259.5,194.8), new cjs.Rectangle(-123.6,-111.6,258.3,192.8), new cjs.Rectangle(-123.4,-109,256.8,190.1), new cjs.Rectangle(-123.2,-107,255.5,188.2), new cjs.Rectangle(-122.9,-104.2,253.9,185.4), new cjs.Rectangle(-122.7,-102.2,252.7,183.4), new cjs.Rectangle(-122.3,-99.5,250.9,180.6), new cjs.Rectangle(-122.1,-97.4,249.6,178.5), new cjs.Rectangle(-121.7,-94.6,247.8,175.7), new cjs.Rectangle(-121.4,-92.5,246.5,173.6), new cjs.Rectangle(-121,-89.8,244.6,170.7), new cjs.Rectangle(-120.5,-87.7,243.2,168.6), new cjs.Rectangle(-120.1,-84.8,241.3,165.6), new cjs.Rectangle(-119.6,-82.7,239.8,163.5), new cjs.Rectangle(-119.1,-80.6,238.3,161.3)];


(lib.grif_tale_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.grif_tale();
	this.instance.setTransform(88.8,29.8,1,1,0,0,0,89,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:30.1,rotation:24.7},19).to({regY:30,rotation:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.7,-58.6,199.5,117.4);
p.frameBounds = [rect, new cjs.Rectangle(-100.3,-62.7,202,121.7), new cjs.Rectangle(-100.7,-66.8,204.4,126.1), new cjs.Rectangle(-101.2,-70.8,206.7,130.2), new cjs.Rectangle(-101.5,-74.8,209,134.4), new cjs.Rectangle(-101.7,-78.7,211.1,138.5), new cjs.Rectangle(-101.8,-83.2,213.4,143.2), new cjs.Rectangle(-101.8,-87,215.3,147.2), new cjs.Rectangle(-101.8,-90.8,217.1,151), new cjs.Rectangle(-101.5,-94.5,218.8,154.9), new cjs.Rectangle(-101.2,-98.1,220.4,158.6), new cjs.Rectangle(-100.9,-102.2,222.1,162.8), new cjs.Rectangle(-100.4,-105.7,223.4,166.3), new cjs.Rectangle(-99.8,-109.1,224.7,169.9), new cjs.Rectangle(-99.2,-112.5,225.8,173.3), new cjs.Rectangle(-98.5,-115.9,226.8,176.6), new cjs.Rectangle(-97.5,-119.6,227.9,180.3), new cjs.Rectangle(-96.6,-122.7,228.7,183.5), new cjs.Rectangle(-95.5,-125.8,229.4,186.5), new cjs.Rectangle(-94.6,-129.4,230.2,190), new cjs.Rectangle(-95.6,-125.9,229.3,186.6), new cjs.Rectangle(-96.6,-122.9,228.7,183.5), new cjs.Rectangle(-97.5,-119.8,227.9,180.4), new cjs.Rectangle(-98.2,-117,227.2,177.7), new cjs.Rectangle(-99,-113.8,226.2,174.5), new cjs.Rectangle(-99.6,-110.5,225.1,171.1), new cjs.Rectangle(-100.2,-107.1,223.9,167.7), new cjs.Rectangle(-100.7,-103.7,222.6,164.3), new cjs.Rectangle(-101.2,-100.2,221.2,160.6), new cjs.Rectangle(-101.5,-96.6,219.7,157), new cjs.Rectangle(-101.7,-93,218.1,153.3), new cjs.Rectangle(-101.9,-89.3,216.4,149.5), new cjs.Rectangle(-101.9,-85.5,214.5,145.6), new cjs.Rectangle(-101.8,-81.8,212.7,141.6), new cjs.Rectangle(-101.7,-78,210.6,137.7), new cjs.Rectangle(-101.4,-74.1,208.5,133.6), new cjs.Rectangle(-101.2,-70.1,206.3,129.5), new cjs.Rectangle(-100.8,-66.2,204,125.3), new cjs.Rectangle(-100.2,-62.1,201.6,121.1), new cjs.Rectangle(-99.7,-58.6,199.5,117.4)];


(lib.grif_head_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// grif_eye1
	this.instance = new lib.grif_eye1();
	this.instance.setTransform(-1.4,34.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// grif_kluv1
	this.instance_1 = new lib.grif_kluv1();
	this.instance_1.setTransform(66.6,37.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// grif_eye2
	this.instance_2 = new lib.grif_eye2();
	this.instance_2.setTransform(70.7,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// grif_head
	this.instance_3 = new lib.grif_head();
	this.instance_3.setTransform(0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105.1,-100.1,210.3,200.1);
p.frameBounds = [rect];


(lib.gold_fish2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.gold_fish_eye1_1_img();
	this.instance.setTransform(-69.1,12.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.gold_fish_plavnik2();
	this.instance_1.setTransform(-20.6,87.4,1,1,34.7,0,0,-35,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.gold_fish_body_img();
	this.instance_2.setTransform(-99.5,-102);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 6
	this.instance_3 = new lib.gold_fish_eye2_1_img();
	this.instance_3.setTransform(-101,12.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 5
	this.instance_4 = new lib.gold_fish_tale();
	this.instance_4.setTransform(68,25.4,1,1,0,0,0,-83,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 2
	this.instance_5 = new lib.gold_fish_plavnik1();
	this.instance_5.setTransform(-61,87.4,1,1,0,0,0,25,-21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-132.5,-127.1,366,311);
p.frameBounds = [rect];


(lib.gold_fish = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.gold_fish_eye1();
	this.instance.setTransform(-45.6,38.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// Слой 3
	this.instance_1 = new lib.gold_fish_plavnik2();
	this.instance_1.setTransform(-20.6,87.4,1,1,34.7,0,0,-35,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:15,x:-20.7},7).to({rotation:34.7,x:-20.6},7).to({rotation:15,x:-20.7},7).to({rotation:34.7,x:-20.6},8).wait(1));

	// Слой 1
	this.instance_2 = new lib.gold_fish_body_img();
	this.instance_2.setTransform(-99.5,-102);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

	// Слой 6
	this.instance_3 = new lib.gold_fish_eye2();
	this.instance_3.setTransform(-80,36.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30));

	// Слой 5
	this.instance_4 = new lib.gold_fish_tale();
	this.instance_4.setTransform(68,25.4,1,1,0,0,0,-83,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.78},14).to({scaleX:1},15).wait(1));

	// Слой 2
	this.instance_5 = new lib.gold_fish_plavnik1();
	this.instance_5.setTransform(-61,87.4,1,1,0,0,0,25,-21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:-22,rotation:27,x:-60.9},7).to({regY:-21.9,rotation:0,x:-61},7).to({regY:-22,rotation:27,x:-60.9},7).to({regY:-21.9,rotation:0,x:-61},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-132.5,-127.1,366,311);
p.frameBounds = [rect, new cjs.Rectangle(-135.7,-127.1,366.5,311), new cjs.Rectangle(-138.7,-127.1,366.9,311), new cjs.Rectangle(-141.4,-127.1,367,311), new cjs.Rectangle(-143.7,-127.1,366.6,311), new cjs.Rectangle(-145.6,-127.1,365.8,311), new cjs.Rectangle(-147.2,-127.1,364.7,311), new cjs.Rectangle(-148.5,-127.1,363.4,311), new cjs.Rectangle(-147.2,-127.1,359.5,311), new cjs.Rectangle(-145.7,-127.1,355.3,311), new cjs.Rectangle(-143.7,-127.1,350.6,311), new cjs.Rectangle(-141.4,-127.1,345.7,311), new cjs.Rectangle(-138.7,-127.1,340.3,311), new cjs.Rectangle(-135.7,-127.1,334.6,311), new cjs.Rectangle(-132.5,-127.1,328.7,311), new cjs.Rectangle(-135.7,-127.1,334.4,311), new cjs.Rectangle(-138.7,-127.1,339.8,311), new cjs.Rectangle(-141.4,-127.1,345,311), new cjs.Rectangle(-143.7,-127.1,349.9,311), new cjs.Rectangle(-145.6,-127.1,354.2,311), new cjs.Rectangle(-147.2,-127.1,358.3,311), new cjs.Rectangle(-148.5,-127.1,362.2,311), new cjs.Rectangle(-147.4,-127.1,363.5,311), new cjs.Rectangle(-146,-127.1,364.6,311), new cjs.Rectangle(-144.5,-127.1,365.5,311), new cjs.Rectangle(-142.6,-127.1,366.2,311), new cjs.Rectangle(-140.4,-127.1,366.5,311), new cjs.Rectangle(-137.9,-127.1,366.5,311), new cjs.Rectangle(-135.3,-127.1,366.3,311), new cjs.Rectangle(-132.5,-127.1,366,311)];


(lib.gf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gold_fish();
	this.instance.setTransform(-23,-12.9,0.456,0.456);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-9.9},14).to({y:-12.9},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.4,-70.9,166.8,141.8);
p.frameBounds = [rect, new cjs.Rectangle(-83.3,-70.6,166.7,141.8), new cjs.Rectangle(-83.3,-70.3,166.7,141.8), new cjs.Rectangle(-83.3,-70.1,166.7,141.8), new cjs.Rectangle(-83.3,-69.9,166.7,141.8), new cjs.Rectangle(-83.3,-69.7,166.7,141.8), new cjs.Rectangle(-83.3,-69.5,166.7,141.8), new cjs.Rectangle(-83.3,-69.3,166.7,141.8), new cjs.Rectangle(-83.3,-69.1,166.7,141.8), new cjs.Rectangle(-83.3,-68.8,166.7,141.8), new cjs.Rectangle(-83.3,-68.6,166.7,141.8), new cjs.Rectangle(-83.3,-68.4,166.7,141.8), new cjs.Rectangle(-83.3,-68.2,166.7,141.8), new cjs.Rectangle(-83.3,-68,166.7,141.8), new cjs.Rectangle(-83.4,-67.9,166.8,141.8), new cjs.Rectangle(-83.3,-68,166.7,141.8), new cjs.Rectangle(-83.3,-68.2,166.7,141.8), new cjs.Rectangle(-83.3,-68.4,166.7,141.8), new cjs.Rectangle(-83.3,-68.6,166.7,141.8), new cjs.Rectangle(-83.3,-68.8,166.7,141.8), new cjs.Rectangle(-83.3,-69,166.7,141.8), new cjs.Rectangle(-83.3,-69.2,166.7,141.8), new cjs.Rectangle(-83.3,-69.4,166.7,141.8), new cjs.Rectangle(-83.3,-69.6,166.7,141.8), new cjs.Rectangle(-83.3,-69.8,166.7,141.8), new cjs.Rectangle(-83.3,-70,166.7,141.8), new cjs.Rectangle(-83.3,-70.2,166.7,141.8), new cjs.Rectangle(-83.3,-70.4,166.7,141.8), new cjs.Rectangle(-83.3,-70.6,166.7,141.8), new cjs.Rectangle(-83.4,-70.9,166.8,141.8)];


(lib.foxower_head2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// foxower_eye
	this.instance = new lib.foxower_eye();
	this.instance.setTransform(27.6,80.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// foxower_ear1
	this.instance_1 = new lib.foxower_ear1();
	this.instance_1.setTransform(41.3,43,1,1,0,0,0,0,79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:9.2},9).to({rotation:0},10).wait(1));

	// foxower_head
	this.instance_2 = new lib.foxower_head();
	this.instance_2.setTransform(26.8,58.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

	// foxower_ear2
	this.instance_3 = new lib.foxower_ear2();
	this.instance_3.setTransform(2,42,1,1,0,0,0,37.5,60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-10,x:2.1,y:42.1},9).to({rotation:0,x:2,y:42},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.3,-125.2,162.6,251);
p.frameBounds = [rect, new cjs.Rectangle(-83.6,-125.6,164.9,251.4), new cjs.Rectangle(-85.9,-126,167.3,251.8), new cjs.Rectangle(-88.6,-126.4,170,252.2), new cjs.Rectangle(-90.9,-126.7,174.1,252.5), new cjs.Rectangle(-93.6,-126.9,179.7,252.7), new cjs.Rectangle(-95.8,-127.1,184.9,252.9), new cjs.Rectangle(-98.4,-127.3,190.2,253.1), new cjs.Rectangle(-100.5,-127.4,195.3,253.2), new cjs.Rectangle(-103,-127.6,201,253.4), new cjs.Rectangle(-100.5,-127.4,195.9,253.2), new cjs.Rectangle(-98.4,-127.3,191.1,253.1), new cjs.Rectangle(-96.4,-127.2,186.2,253), new cjs.Rectangle(-94.2,-127,181.8,252.8), new cjs.Rectangle(-92.1,-126.8,176.8,252.6), new cjs.Rectangle(-89.8,-126.5,171.7,252.3), new cjs.Rectangle(-87.6,-126.3,169,252.1), new cjs.Rectangle(-85.4,-125.9,166.7,251.7), new cjs.Rectangle(-83.1,-125.5,164.4,251.3), new cjs.Rectangle(-81.3,-125.2,162.6,251)];


(lib.foxower_d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.foxower_eye1_img();
	this.instance.setTransform(63.6,-41.2,0.72,0.72);

	this.instance_1 = new lib.foxower_ear1();
	this.instance_1.setTransform(86.5,-64.7,1,1,0,0,0,0,79.5);

	this.instance_2 = new lib.foxower_head();
	this.instance_2.setTransform(72,-48.8);

	this.instance_3 = new lib.foxower_ear2();
	this.instance_3.setTransform(47.2,-65.7,1,1,0,0,0,37.5,60.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_4 = new lib.foxower_body();
	this.instance_4.setTransform(48.8,58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 3
	this.instance_5 = new lib.foxower_wing1();
	this.instance_5.setTransform(56,63.6,1,1,0,0,0,89,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 4
	this.instance_6 = new lib.foxower_wing2();
	this.instance_6.setTransform(58,89.6,1,1,38.2,0,0,71.5,39.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 5
	this.instance_7 = new lib.foxower_tale();
	this.instance_7.setTransform(-14.2,99.7,1,1,0,0,0,67,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-232.9,320.2,466.2);
p.frameBounds = [rect];


(lib.foxower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.foxower_head2();
	this.instance.setTransform(100.2,-21.7,1,1,0,0,0,55,86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({rotation:-11.5},8).wait(24).to({rotation:0},6).wait(6));

	// Слой 2
	this.instance_1 = new lib.foxower_body();
	this.instance_1.setTransform(48.8,58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// Слой 3
	this.instance_2 = new lib.foxower_wing1();
	this.instance_2.setTransform(56,63.6,1,1,0,0,0,89,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-15},14).to({rotation:0},15).to({rotation:-15},15).to({rotation:0},15).wait(1));

	// Слой 4
	this.instance_3 = new lib.foxower_wing2();
	this.instance_3.setTransform(58,89.6,1,1,38.2,0,0,71.5,39.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:61.5,x:53},14).to({rotation:38.2,x:58},15).to({rotation:61.5,x:53},15).to({rotation:38.2,x:58},15).wait(1));

	// Слой 5
	this.instance_4 = new lib.foxower_tale();
	this.instance_4.setTransform(-14.2,99.7,1,1,0,0,0,67,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-15},29).to({rotation:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-232.9,320.2,466.2);
p.frameBounds = [rect, new cjs.Rectangle(-170.3,-232.9,320.4,467.5), new cjs.Rectangle(-170.6,-232.9,320.7,468.9), new cjs.Rectangle(-170.8,-232.9,321,470.2), new cjs.Rectangle(-171.1,-232.9,321.2,471.5), new cjs.Rectangle(-171.3,-232.9,322,472.9), new cjs.Rectangle(-171.5,-232.9,323.1,474.2), new cjs.Rectangle(-171.8,-232.9,324.2,475.5), new cjs.Rectangle(-172,-232.9,325.2,476.8), new cjs.Rectangle(-172.1,-232.9,325.9,478.1), new cjs.Rectangle(-172.3,-232.9,326.8,479.4), new cjs.Rectangle(-172.5,-232.9,327.4,480.6), new cjs.Rectangle(-172.6,-232.9,327.9,481.8), new cjs.Rectangle(-172.8,-232.9,328.4,483.1), new cjs.Rectangle(-172.9,-232.9,328.9,484.3), new cjs.Rectangle(-173,-232.9,328.7,485.9), new cjs.Rectangle(-173.1,-232.9,328.4,487.1), new cjs.Rectangle(-173.2,-233.2,328.2,488.5), new cjs.Rectangle(-173.2,-233.4,327.8,489.9), new cjs.Rectangle(-173.3,-233.5,327.2,491.1), new cjs.Rectangle(-173.4,-233.4,326.7,492.2), new cjs.Rectangle(-173.4,-233.3,326.1,493.3), new cjs.Rectangle(-173.4,-233,325.4,494), new cjs.Rectangle(-173.4,-232.4,324.8,494.6), new cjs.Rectangle(-173.4,-232,323.8,495.3), new cjs.Rectangle(-173.4,-231.9,323.5,496.3), new cjs.Rectangle(-173.3,-231.9,323.5,497.4), new cjs.Rectangle(-173.3,-231.9,323.5,498.4), new cjs.Rectangle(-173.2,-231.9,323.4,499.5), new cjs.Rectangle(-173.4,-231.9,323.5,501), new cjs.Rectangle(-173.3,-231.9,323.4,499.5), new cjs.Rectangle(-173.4,-231.9,323.5,498.4), new cjs.Rectangle(-173.5,-231.9,323.6,497.4), new cjs.Rectangle(-173.4,-231.9,323.5,496.4), new cjs.Rectangle(-173.5,-231.9,323.8,495.3), new cjs.Rectangle(-173.5,-231.9,324.8,494.2), new cjs.Rectangle(-173.5,-231.9,325.5,493.2), new cjs.Rectangle(-173.4,-231.9,326.2,492), new cjs.Rectangle(-173.4,-231.9,326.8,490.9), new cjs.Rectangle(-173.4,-231.9,327.3,489.8), new cjs.Rectangle(-173.3,-231.9,327.9,488.6), new cjs.Rectangle(-173.2,-231.9,328.2,487.4), new cjs.Rectangle(-173.1,-231.9,328.4,486.3), new cjs.Rectangle(-173.1,-231.9,328.8,485.1), new cjs.Rectangle(-173,-231.9,329,483.9), new cjs.Rectangle(-172.8,-231.9,328.5,482.8), new cjs.Rectangle(-172.7,-231.9,328,481.5), new cjs.Rectangle(-172.6,-231.9,327.5,480.3), new cjs.Rectangle(-172.4,-232,327,479.1), new cjs.Rectangle(-172.3,-232.7,326.2,478.5), new cjs.Rectangle(-172,-233.2,325.4,477.8), new cjs.Rectangle(-171.9,-233.4,324.6,476.8), new cjs.Rectangle(-171.7,-233.5,323.7,475.5), new cjs.Rectangle(-171.4,-233.2,322.8,474), new cjs.Rectangle(-171.2,-232.9,321.6,472.3), new cjs.Rectangle(-171,-232.9,321.2,471.1), new cjs.Rectangle(-170.7,-232.9,320.9,469.8), new cjs.Rectangle(-170.5,-232.9,320.6,468.4), new cjs.Rectangle(-170.3,-232.9,320.5,467.6), new cjs.Rectangle(-170,-232.9,320.2,466.2)];


(lib.flower_cat_head2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flower_cat_eyes
	this.instance = new lib.flower_cat_eyes();
	this.instance.setTransform(-7.9,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// flower_cat_usik
	this.instance_1 = new lib.flower_cat_usik();
	this.instance_1.setTransform(26.5,5,1,1,0,0,0,12,56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:15},9).to({rotation:0},10).wait(1));

	// flower_cat_head
	this.instance_2 = new lib.flower_cat_head();
	this.instance_2.setTransform(9.2,100.2,1,1,0,0,0,-16.5,73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

	// flower_cat_usik
	this.instance_3 = new lib.flower_cat_usik();
	this.instance_3.setTransform(-34.1,18.6,1,1,-29.2,0,0,12.1,56.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:56.5,rotation:-14.2,x:-34.2,y:18.5},9).to({regY:56.6,rotation:-29.2,x:-34.1,y:18.6},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116.3,-108.5,232.7,217);
p.frameBounds = [rect, new cjs.Rectangle(-113.8,-109.2,230.1,217.7), new cjs.Rectangle(-111.1,-109.9,227.5,218.5), new cjs.Rectangle(-108.4,-110.5,224.8,219), new cjs.Rectangle(-105.9,-111.1,222.3,219.6), new cjs.Rectangle(-103.1,-111.6,219.5,220.2), new cjs.Rectangle(-100.3,-111.9,216.6,220.5), new cjs.Rectangle(-97.6,-112.1,213.9,220.7), new cjs.Rectangle(-94.6,-112.3,210.9,220.9), new cjs.Rectangle(-91.8,-112.5,208.2,221.1), new cjs.Rectangle(-94.1,-112.4,210.5,220.9), new cjs.Rectangle(-96.7,-112.2,213.1,220.8), new cjs.Rectangle(-99.3,-112,215.7,220.5), new cjs.Rectangle(-101.9,-111.7,218.2,220.2), new cjs.Rectangle(-104.3,-111.3,220.7,219.9), new cjs.Rectangle(-106.7,-110.9,223.1,219.5), new cjs.Rectangle(-109.1,-110.4,225.5,218.9), new cjs.Rectangle(-111.5,-109.8,227.8,218.4), new cjs.Rectangle(-113.7,-109.2,230.1,217.7), new cjs.Rectangle(-116.3,-108.5,232.7,217)];


(lib.flower_cat_d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flower_cat_meh
	this.instance = new lib.flower_cat_meh();
	this.instance.setTransform(-132.3,81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// flower_cat_eyes
	this.instance_1 = new lib.flower_cat_eyes1_img();
	this.instance_1.setTransform(-189.7,-33.6,0.72,0.72);

	this.instance_2 = new lib.flower_cat_usik_img();
	this.instance_2.setTransform(-143.5,-161.2,0.72,0.72);

	this.instance_3 = new lib.flower_cat_head();
	this.instance_3.setTransform(-130.2,47.5,1,1,0,0,0,-16.5,73.5);

	this.instance_4 = new lib.flower_cat_usik_img();
	this.instance_4.setTransform(-255.7,-118.4,0.72,0.72,-29.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// flower_cat_body
	this.instance_5 = new lib.flower_cat_body();
	this.instance_5.setTransform(-59.1,96.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// flower_cat_tale
	this.instance_6 = new lib.flower_cat_tale();
	this.instance_6.setTransform(43.3,50.8,1,1,0,0,0,-98,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-255.7,-193.6,511.6,387.4);
p.frameBounds = [rect];


(lib.flower_cat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flower_cat_meh
	this.instance = new lib.flower_cat_meh();
	this.instance.setTransform(-132.3,81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// flower_cat_eyes
	this.instance_1 = new lib.flower_cat_head2();
	this.instance_1.setTransform(-133.4,52.3,1,1,0,0,0,6,105);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:5.9,regY:105.1,rotation:5},29).to({regX:6,regY:105,rotation:0},30).wait(1));

	// flower_cat_body
	this.instance_2 = new lib.flower_cat_body();
	this.instance_2.setTransform(-59.1,96.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

	// flower_cat_tale
	this.instance_3 = new lib.flower_cat_tale();
	this.instance_3.setTransform(43.3,50.8,1,1,0,0,0,-98,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:30,x:29.3,y:41.8},29).to({rotation:0,x:43.3,y:50.8},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-255.7,-193.6,511.6,387.4);
p.frameBounds = [rect, new cjs.Rectangle(-255.6,-194.1,515.1,387.9), new cjs.Rectangle(-254.8,-194.5,518.1,388.3), new cjs.Rectangle(-254.2,-195.1,521.1,388.8), new cjs.Rectangle(-254,-195.4,524.5,389.1), new cjs.Rectangle(-253.4,-195.6,527.3,389.3), new cjs.Rectangle(-252.6,-195.8,530.1,389.5), new cjs.Rectangle(-252.5,-195.8,533.3,389.5), new cjs.Rectangle(-251.8,-195.9,536.6,389.6), new cjs.Rectangle(-251.1,-195.8,539,389.5), new cjs.Rectangle(-251,-195.6,542,389.4), new cjs.Rectangle(-250.3,-195.4,544.4,389.1), new cjs.Rectangle(-249.6,-195.2,546.6,388.9), new cjs.Rectangle(-249.4,-194.8,549.3,388.5), new cjs.Rectangle(-248.7,-194.4,551.4,388.1), new cjs.Rectangle(-248.1,-193.7,554,387.4), new cjs.Rectangle(-247.9,-193.1,556.6,386.8), new cjs.Rectangle(-247.1,-192.4,558.2,386.2), new cjs.Rectangle(-246.5,-191.7,560.1,385.5), new cjs.Rectangle(-245.8,-190.8,561.8,384.5), new cjs.Rectangle(-245.6,-189.9,563.8,383.7), new cjs.Rectangle(-244.9,-189,565.3,382.7), new cjs.Rectangle(-244.2,-187.7,567.1,381.5), new cjs.Rectangle(-244.1,-186.6,569,380.4), new cjs.Rectangle(-243.4,-185.4,570.2,379.1), new cjs.Rectangle(-242.6,-184.1,571.2,377.8), new cjs.Rectangle(-242.5,-182.7,572.8,376.5), new cjs.Rectangle(-241.8,-181.4,573.6,375.1), new cjs.Rectangle(-241,-179.9,574.5,373.7), new cjs.Rectangle(-240.4,-178.4,576,372.2), new cjs.Rectangle(-241,-179.9,574.4,373.7), new cjs.Rectangle(-241.7,-181.4,573.7,375.1), new cjs.Rectangle(-242.4,-182.8,572.8,376.5), new cjs.Rectangle(-242.6,-184.1,571.2,377.9), new cjs.Rectangle(-243.3,-185.3,570.1,379), new cjs.Rectangle(-244,-186.6,568.9,380.3), new cjs.Rectangle(-244.1,-187.7,567.1,381.5), new cjs.Rectangle(-244.8,-188.8,565.7,382.5), new cjs.Rectangle(-245.6,-189.7,564.3,383.5), new cjs.Rectangle(-245.6,-190.7,562.1,384.4), new cjs.Rectangle(-246.4,-191.5,560.6,385.2), new cjs.Rectangle(-247.1,-192.3,558.8,386), new cjs.Rectangle(-247.2,-192.9,556.5,386.7), new cjs.Rectangle(-247.9,-193.6,554.6,387.3), new cjs.Rectangle(-248.7,-194.1,552.7,387.9), new cjs.Rectangle(-248.7,-194.6,550,388.3), new cjs.Rectangle(-249.5,-195,548,388.8), new cjs.Rectangle(-250.2,-195.3,545.8,389), new cjs.Rectangle(-250.3,-195.6,542.9,389.3), new cjs.Rectangle(-250.9,-195.8,540.5,389.5), new cjs.Rectangle(-251.7,-195.9,538.1,389.7), new cjs.Rectangle(-251.8,-195.9,535,389.7), new cjs.Rectangle(-252.5,-195.9,532.4,389.6), new cjs.Rectangle(-253.2,-195.8,529.8,389.5), new cjs.Rectangle(-253.3,-195.5,527.2,389.3), new cjs.Rectangle(-254,-195.3,523.6,389), new cjs.Rectangle(-254.7,-195,521.6,388.7), new cjs.Rectangle(-254.8,-194.5,517.2,388.3), new cjs.Rectangle(-255.5,-194.1,515,387.9), new cjs.Rectangle(-255.7,-193.6,511.6,387.4)];


(lib.feniks_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.feniks_eye();
	this.instance.setTransform(14.4,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.feniks_head_img();
	this.instance_1.setTransform(-41.5,-49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.5,-49.5,83,99);
p.frameBounds = [rect];


(lib.feniks_d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.feniks_wing1();
	this.instance.setTransform(2.4,-96.6,1,1,0,0,0,87,81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.feniks_eye1_img();
	this.instance_1.setTransform(44.9,-164.5);

	this.instance_2 = new lib.feniks_head_img();
	this.instance_2.setTransform(-3,-202.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Слой 1
	this.instance_3 = new lib.feniks_body_img();
	this.instance_3.setTransform(-75,-128);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 6
	this.instance_4 = new lib.feniks_wing2();
	this.instance_4.setTransform(52,-96.6,1,1,0,0,0,-40,99);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 5
	this.instance_5 = new lib.feniks_tale1();
	this.instance_5.setTransform(0.4,-3.6,1,1,0,0,0,72,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 4
	this.instance_6 = new lib.feniks_tale2();
	this.instance_6.setTransform(13.4,4.4,1,1,0,0,0,-9,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 8
	this.instance_7 = new lib.feniks_tale3();
	this.instance_7.setTransform(19.5,0.4,1,1,0,0,0,-112,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 2
	this.instance_8 = new lib.feniks_tale4();
	this.instance_8.setTransform(18,0.4,1,1,0,0,0,-98,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.1,-330.1,443.2,484);
p.frameBounds = [rect];


(lib.feniks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.feniks_wing1();
	this.instance.setTransform(2.4,-96.6,1,1,0,0,0,87,81);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.02,skewX:-32,skewY:-20.4},24).to({scaleX:1,skewX:0,skewY:0},25).wait(1));

	// Слой 3
	this.instance_1 = new lib.feniks_head();
	this.instance_1.setTransform(38.5,-153);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:9.7,x:42.5,y:-151},24).to({rotation:0,x:38.5,y:-153},25).wait(1));

	// Слой 1
	this.instance_2 = new lib.feniks_body_img();
	this.instance_2.setTransform(-75,-128);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

	// Слой 6
	this.instance_3 = new lib.feniks_wing2();
	this.instance_3.setTransform(52,-96.6,1,1,0,0,0,-40,99);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:48.7,x:36.9,y:-100.6},24).to({rotation:0,x:52,y:-96.6},25).wait(1));

	// Слой 5
	this.instance_4 = new lib.feniks_tale1();
	this.instance_4.setTransform(0.4,-3.6,1,1,0,0,0,72,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:5.2,y:-3.7},24).to({rotation:0,y:-3.6},25).wait(1));

	// Слой 4
	this.instance_5 = new lib.feniks_tale2();
	this.instance_5.setTransform(13.4,4.4,1,1,0,0,0,-9,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:6.7},24).to({rotation:0},25).wait(1));

	// Слой 8
	this.instance_6 = new lib.feniks_tale3();
	this.instance_6.setTransform(19.5,0.4,1,1,0,0,0,-112,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:-112.1,rotation:-8.7},24).to({regX:-112,rotation:0},25).wait(1));

	// Слой 2
	this.instance_7 = new lib.feniks_tale4();
	this.instance_7.setTransform(18,0.4,1,1,0,0,0,-98,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:-29.9,rotation:-16.5,x:18.1},24).to({regY:-30,rotation:0,x:18},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.1,-330.1,443.2,484);
p.frameBounds = [rect, new cjs.Rectangle(-185.2,-330.6,448.8,485.1), new cjs.Rectangle(-190.3,-330.9,454.5,486.1), new cjs.Rectangle(-196.1,-330.8,461.1,486.7), new cjs.Rectangle(-201,-330.5,466.6,487), new cjs.Rectangle(-206,-329.9,472.5,487), new cjs.Rectangle(-211.5,-329,478.5,486.7), new cjs.Rectangle(-216.4,-327.8,484.2,486.1), new cjs.Rectangle(-221.1,-326.4,489.4,485.3), new cjs.Rectangle(-226.5,-324.5,495.7,484.4), new cjs.Rectangle(-231.2,-322.4,500.8,483), new cjs.Rectangle(-235.7,-320.1,505.7,481.3), new cjs.Rectangle(-241,-317.5,511.8,479.2), new cjs.Rectangle(-245.3,-314.6,516.6,477), new cjs.Rectangle(-249.7,-311.6,521.8,474.6), new cjs.Rectangle(-254.7,-309.2,527.3,472.7), new cjs.Rectangle(-258.8,-307.6,532,471.7), new cjs.Rectangle(-263,-305.8,536.7,470.9), new cjs.Rectangle(-267.6,-303.7,542,469.4), new cjs.Rectangle(-271.6,-301.7,546.4,467.9), new cjs.Rectangle(-275.5,-299.6,551,466.5), new cjs.Rectangle(-279.8,-297.1,555.6,464.5), new cjs.Rectangle(-283.5,-294.8,559.8,462.8), new cjs.Rectangle(-287,-292.5,563.9,461), new cjs.Rectangle(-291.3,-289.9,569,459.4), new cjs.Rectangle(-287,-292.4,564,461), new cjs.Rectangle(-283.6,-294.8,560.1,462.9), new cjs.Rectangle(-279.9,-297,555.8,464.5), new cjs.Rectangle(-276.1,-299.2,551.7,466.1), new cjs.Rectangle(-272.2,-301.3,547.1,467.5), new cjs.Rectangle(-268.5,-303.3,543,469.1), new cjs.Rectangle(-264.5,-305.1,538.6,470.3), new cjs.Rectangle(-260.4,-306.9,533.8,471.5), new cjs.Rectangle(-255.5,-308.9,528.5,472.9), new cjs.Rectangle(-251.4,-310.4,523.6,473.8), new cjs.Rectangle(-247,-313.2,518.8,476.1), new cjs.Rectangle(-242.7,-316.2,514.1,478.1), new cjs.Rectangle(-238.2,-318.8,508.8,480.1), new cjs.Rectangle(-233.8,-321.3,503.8,482), new cjs.Rectangle(-229.2,-323.4,498.6,483.5), new cjs.Rectangle(-224.6,-325.2,493.5,484.7), new cjs.Rectangle(-219.2,-326.8,487.6,485.7), new cjs.Rectangle(-214.5,-328.1,482.1,486.4), new cjs.Rectangle(-209.7,-329.2,476.8,486.9), new cjs.Rectangle(-204.9,-330.1,471,487.1), new cjs.Rectangle(-200,-330.6,465.6,487.1), new cjs.Rectangle(-195,-330.9,460.2,486.7), new cjs.Rectangle(-190.1,-330.8,454.3,486), new cjs.Rectangle(-185,-330.6,448.7,485.2), new cjs.Rectangle(-180.1,-330.1,443.2,484)];


(lib.elsa_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.model_4_1_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({_off:false},0).to({_off:true},3).wait(33).to({_off:false},0).to({_off:true},3).wait(2));

	// animation
	this.instance_1 = new lib.model_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-512,600,1024);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.dragon_face = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.dragon_eye2();
	this.instance.setTransform(0,54.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// Слой 3
	this.instance_1 = new lib.dragon_ear();
	this.instance_1.setTransform(27,12.8,1,1,0,0,0,-14,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({rotation:13.5},3).to({rotation:0},3).to({rotation:13.5},4).to({rotation:0},3).wait(15));

	// Слой 2
	this.instance_2 = new lib.dragon_perya2();
	this.instance_2.setTransform(-39,7.8,1,1,0,0,0,-54,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1.02,skewX:11.9},19).to({scaleY:1,skewX:0},20).wait(1));

	// Слой 5
	this.instance_3 = new lib.dragon_head();
	this.instance_3.setTransform(14,101.8,1,1,0,0,0,25,49);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40));

	// Слой 6
	this.instance_4 = new lib.dragon_perya1();
	this.instance_4.setTransform(-29,15.8,1,1,0,0,0,-49,65);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:0.94,skewX:6.9},19).to({scaleY:1,skewX:0},20).wait(1));

	// Слой 1
	this.instance_5 = new lib.dragon_eye1();
	this.instance_5.setTransform(-64.5,57.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78,-116.7,156,233.5);
p.frameBounds = [rect, new cjs.Rectangle(-78,-116.1,157.1,232.9), new cjs.Rectangle(-78,-115.9,158.7,232.7), new cjs.Rectangle(-78,-115.9,159.8,232.7), new cjs.Rectangle(-78,-116,161.4,232.8), new cjs.Rectangle(-78,-116.1,162.6,232.9), new cjs.Rectangle(-78,-116.2,164.1,233), new cjs.Rectangle(-78,-116.3,165.3,233.1), new cjs.Rectangle(-78,-116.3,166.8,233.1), new cjs.Rectangle(-78,-116.3,168,233.1), new cjs.Rectangle(-78,-116.3,169.6,233.1), new cjs.Rectangle(-78,-116.2,170.7,233), new cjs.Rectangle(-78,-116.2,172.4,233), new cjs.Rectangle(-78,-116.2,173.5,233), new cjs.Rectangle(-78,-116.1,175.1,232.9), new cjs.Rectangle(-78,-116,176.3,232.8), new cjs.Rectangle(-78,-115.9,177.8,232.7), new cjs.Rectangle(-78,-115.9,179,232.7), new cjs.Rectangle(-78,-115.7,180.6,232.5), new cjs.Rectangle(-78,-115.7,182,232.5), new cjs.Rectangle(-78,-115.7,180.6,232.5), new cjs.Rectangle(-78,-115.9,179.1,232.7), new cjs.Rectangle(-78,-115.9,177.9,232.7), new cjs.Rectangle(-78,-116,176.7,232.8), new cjs.Rectangle(-78,-116.2,175.2,233), new cjs.Rectangle(-78,-116.2,174,233), new cjs.Rectangle(-78,-116.3,172.5,233.1), new cjs.Rectangle(-78,-116.3,171.3,233.1), new cjs.Rectangle(-78,-116.2,170.1,233), new cjs.Rectangle(-78,-116.3,168.6,233.1), new cjs.Rectangle(-78,-116.3,167.5,233.1), new cjs.Rectangle(-78,-116.3,166.3,233.1), new cjs.Rectangle(-78,-116.3,164.8,233.1), new cjs.Rectangle(-78,-116.2,163.6,233), new cjs.Rectangle(-78,-116.1,162.1,232.9), new cjs.Rectangle(-78,-116,160.9,232.8), new cjs.Rectangle(-78,-115.9,159.8,232.7), new cjs.Rectangle(-78,-115.9,158.3,232.7), new cjs.Rectangle(-78,-116.2,157.1,233), new cjs.Rectangle(-78,-116.7,156,233.5)];


(lib.dragon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.dragon_wing1();
	this.instance.setTransform(-10.5,3.5,1,1,0,0,0,-79,80);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:80.1,scaleY:1.04,skewX:28.7,skewY:12.5,x:-17.5,y:5.5},29).to({regY:80,scaleY:1,skewX:0,skewY:0,x:-10.5,y:3.5},30).wait(1));

	// Слой 5
	this.instance_1 = new lib.dragon_face();
	this.instance_1.setTransform(-87,-81.3,1,1,0,0,0,17,93);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({rotation:-14.7},5).wait(21).to({rotation:0},6).wait(16));

	// Слой 1
	this.instance_2 = new lib.dragon_body_img();
	this.instance_2.setTransform(-150.5,-128.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

	// Слой 4
	this.instance_3 = new lib.dragon_wing2();
	this.instance_3.setTransform(-41,8.5,1,1,0,0,0,-79,82);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:1.08,skewX:-39.9,skewY:-17.8,x:-40.9},29).to({scaleY:1,skewX:0,skewY:0,x:-41},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-182,-291,366,419.6);
p.frameBounds = [rect, new cjs.Rectangle(-182,-291,368.1,419.6), new cjs.Rectangle(-182,-291,370.9,419.6), new cjs.Rectangle(-182,-291,373.6,419.6), new cjs.Rectangle(-182,-291,376.3,419.6), new cjs.Rectangle(-182,-291,378.9,419.6), new cjs.Rectangle(-182,-291,381.6,419.6), new cjs.Rectangle(-182,-291,384.3,419.6), new cjs.Rectangle(-182,-291,386.9,419.6), new cjs.Rectangle(-182,-291,389.7,419.6), new cjs.Rectangle(-182,-291,392.3,419.6), new cjs.Rectangle(-182,-291,395,419.6), new cjs.Rectangle(-182,-291,397.6,419.6), new cjs.Rectangle(-184.6,-293.5,402.8,422.1), new cjs.Rectangle(-187.2,-295.7,408,424.2), new cjs.Rectangle(-189.8,-297.2,413.2,425.8), new cjs.Rectangle(-194.3,-298.2,420.3,426.8), new cjs.Rectangle(-202.8,-298.9,431.3,427.4), new cjs.Rectangle(-202.2,-298.7,433.2,427.2), new cjs.Rectangle(-202.2,-298.7,435.7,427.2), new cjs.Rectangle(-202.2,-298.7,438.2,427.2), new cjs.Rectangle(-202.2,-298.7,440.7,427.2), new cjs.Rectangle(-202.2,-298.7,442.7,427.2), new cjs.Rectangle(-202.2,-298.7,445,427.2), new cjs.Rectangle(-202.2,-298.7,447.4,427.2), new cjs.Rectangle(-202.2,-298.7,449.7,427.2), new cjs.Rectangle(-202.2,-298.7,452.2,427.2), new cjs.Rectangle(-202.2,-298.7,454.5,427.2), new cjs.Rectangle(-202.2,-298.7,456.8,427.2), new cjs.Rectangle(-202.2,-298.7,459.6,427.2), new cjs.Rectangle(-202.2,-298.7,456.8,427.2), new cjs.Rectangle(-202.2,-298.7,455,427.2), new cjs.Rectangle(-202.2,-298.7,452.7,427.2), new cjs.Rectangle(-202.2,-298.7,450.4,427.2), new cjs.Rectangle(-202.2,-298.7,448,427.2), new cjs.Rectangle(-202.2,-298.7,445.6,427.2), new cjs.Rectangle(-202.2,-298.7,443.2,427.2), new cjs.Rectangle(-202.2,-298.7,441.3,427.2), new cjs.Rectangle(-202.8,-298.9,439.4,427.4), new cjs.Rectangle(-195,-298.3,429.2,426.8), new cjs.Rectangle(-191.3,-297.6,422.9,426.2), new cjs.Rectangle(-188.5,-296.5,417.6,425.1), new cjs.Rectangle(-186.4,-295,413,423.6), new cjs.Rectangle(-184.2,-293.1,408.9,421.6), new cjs.Rectangle(-182,-291,404.1,419.6), new cjs.Rectangle(-182,-291,401.5,419.6), new cjs.Rectangle(-182,-291,398.9,419.6), new cjs.Rectangle(-182,-291,396.3,419.6), new cjs.Rectangle(-182,-291,394.2,419.6), new cjs.Rectangle(-182,-291,391.5,419.6), new cjs.Rectangle(-182,-291,388.9,419.6), new cjs.Rectangle(-182,-291,386.3,419.6), new cjs.Rectangle(-182,-291,383.7,419.6), new cjs.Rectangle(-182,-291,381,419.6), new cjs.Rectangle(-182,-291,378.9,419.6), new cjs.Rectangle(-182,-291,376.2,419.6), new cjs.Rectangle(-182,-291,373.5,419.6), new cjs.Rectangle(-182,-291,370.8,419.6), new cjs.Rectangle(-182,-291,368.1,419.6), new cjs.Rectangle(-182,-291,366,419.6)];


(lib.comics2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		try
		{
			app.addSoundFunc("message_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(186));

	// animation
	this.instance = new lib.com_text1();
	this.instance.setTransform(-16.5,182.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(200));

	// animation
	this.instance_1 = new lib.animals();
	this.instance_1.setTransform(300,-152.1,0.477,0.477);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.instance_2 = new lib.mag_pal();
	this.instance_2.setTransform(313.3,-164.7,0.593,0.593,0,0,0,0,-0.1);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},5).wait(34).to({alpha:0.012},5).to({_off:true},1).wait(105));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(115).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,alpha:1},5).wait(33).to({alpha:0.012},5).to({_off:true},1).wait(41));

	// animation
	this.instance_3 = new lib.hearts();
	this.instance_3.setTransform(240.3,-165.6,0.55,0.55);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(43).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},5).wait(41).to({alpha:0.012},5).to({_off:true},1).wait(12).to({_off:false,scaleX:0.55,scaleY:0.55},0).to({scaleX:1,scaleY:1,alpha:1},5).wait(41).to({alpha:0.012},5).to({_off:true},1).wait(41));

	// animation
	this.instance_4 = new lib.furniture_86_mc();
	this.instance_4.setTransform(174.5,-165,0.651,0.651,0,0,180);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(36).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},5).wait(48).to({alpha:0.012},5).to({_off:true},1).wait(5).to({_off:false,scaleX:0.65,scaleY:0.65},0).to({scaleX:1,scaleY:1,alpha:1},5).wait(48).to({alpha:0.012},5).to({_off:true},1).wait(41));

	// animation
	this.instance_5 = new lib.lamp_idea2();
	this.instance_5.setTransform(255,-150);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(176).to({_off:false},0).to({alpha:1},20).wait(4));

	// animation
	this.instance_6 = new lib.com_text2();
	this.instance_6.setTransform(226.3,-160,0.555,0.555);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.instance_7 = new lib.lamp_idea();
	this.instance_7.setTransform(255,-150,0.74,0.74);
	this.instance_7.alpha = 0.012;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(22).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},14).wait(124).to({scaleX:0.52,scaleY:0.52,alpha:0.012},8).to({_off:true},1).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(170).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},6).wait(24));

	// animation
	this.instance_8 = new lib.c2();
	this.instance_8.setTransform(262.9,237);
	this.instance_8.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:1,alpha:1},18).wait(182));

	// animation
	this.instance_9 = new lib.c1();

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-139,-236,595.9,708.5);
p.frameBounds = [rect, new cjs.Rectangle(-139,-236,595.9,695.4), new cjs.Rectangle(-139,-236,595.9,682.3), new cjs.Rectangle(-139,-236,595.9,669.1), new cjs.Rectangle(-139,-236,595.9,656), new cjs.Rectangle(-139,-236,595.9,642.9), new cjs.Rectangle(-139,-236,595.9,629.8), new cjs.Rectangle(-139,-236,595.9,616.7), new cjs.Rectangle(-139,-236,595.9,603.6), new cjs.Rectangle(-139,-236,595.9,590.5), new cjs.Rectangle(-139,-236,595.9,577.4), new cjs.Rectangle(-139,-236,595.9,564.3), new cjs.Rectangle(-139,-236,595.9,551.1), new cjs.Rectangle(-139,-236,595.9,538), rect=new cjs.Rectangle(-139,-236,595.9,530.3), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-139,-240.7,595.9,535.1), new cjs.Rectangle(-139,-245.3,595.9,539.7), new cjs.Rectangle(-139,-249.9,595.9,544.3), new cjs.Rectangle(-139,-254.6,595.9,549), new cjs.Rectangle(-139,-259.2,595.9,553.5), new cjs.Rectangle(-139,-263.8,595.9,558.2), new cjs.Rectangle(-139,-268.5,595.9,562.8), new cjs.Rectangle(-139,-273.1,595.9,567.4), new cjs.Rectangle(-139,-277.7,595.9,572.1), new cjs.Rectangle(-139,-282.3,595.9,576.7), new cjs.Rectangle(-139,-286.9,595.9,581.3), new cjs.Rectangle(-139,-291.6,595.9,586), new cjs.Rectangle(-139,-296.2,595.9,590.5), new cjs.Rectangle(-139,-300.8,595.9,595.2), rect=new cjs.Rectangle(-139,-305.5,595.9,599.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-139,-296.8,595.9,591.1), new cjs.Rectangle(-139,-288.1,595.9,582.4), new cjs.Rectangle(-139,-279.4,595.9,573.8), new cjs.Rectangle(-139,-270.7,595.9,565.1), new cjs.Rectangle(-139,-262,595.9,556.4), new cjs.Rectangle(-139,-253.4,595.9,547.7), new cjs.Rectangle(-139,-244.7,595.9,539), new cjs.Rectangle(-139,-236,595.9,530.4), rect=new cjs.Rectangle(-139,-236,595.9,530.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.comics1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		try
		{
			app.addSoundFunc("message_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(51));

	// animation
	this.instance = new lib.com_text1();
	this.instance.setTransform(-16.5,120.3);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({y:182.3,alpha:1},12).wait(19));

	// animation
	this.instance_1 = new lib.c1();
	this.instance_1.setTransform(-252,0);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({x:0,alpha:1},13).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-391,-236,278,471);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-371.6,-236,278,471), new cjs.Rectangle(-352.2,-236,278,471), new cjs.Rectangle(-332.8,-236,278,471), new cjs.Rectangle(-313.4,-236,278,471), new cjs.Rectangle(-294.1,-236,278,471), new cjs.Rectangle(-274.7,-236,278,471), new cjs.Rectangle(-255.3,-236,278,471), new cjs.Rectangle(-235.9,-236,278,471), new cjs.Rectangle(-216.5,-236,278,471), new cjs.Rectangle(-197.1,-236,278,471), new cjs.Rectangle(-177.7,-236,278,471), new cjs.Rectangle(-158.4,-236,278,471), rect=new cjs.Rectangle(-139,-236,278,471), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-139,-236,278,473.5), new cjs.Rectangle(-139,-236,278,478.7), new cjs.Rectangle(-139,-236,278,483.8), new cjs.Rectangle(-139,-236,278,489), new cjs.Rectangle(-139,-236,278,494.2), new cjs.Rectangle(-139,-236,278,499.3), new cjs.Rectangle(-139,-236,278,504.5), new cjs.Rectangle(-139,-236,278,509.7), new cjs.Rectangle(-139,-236,278,514.8), new cjs.Rectangle(-139,-236,278,520), new cjs.Rectangle(-139,-236,278,525.2), rect=new cjs.Rectangle(-139,-236,278,530.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.colba2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.colb2();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:15},12).to({rotation:0},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.2,-46.9,82.5,93.8);
p.frameBounds = [rect, new cjs.Rectangle(-41.8,-47.2,83.7,94.6), new cjs.Rectangle(-42.4,-47.6,84.9,95.4), new cjs.Rectangle(-43,-48,86.1,96.2), new cjs.Rectangle(-43.6,-48.4,87.3,96.9), new cjs.Rectangle(-44.2,-48.7,88.5,97.7), new cjs.Rectangle(-44.7,-49.1,89.6,98.3), new cjs.Rectangle(-45.2,-49.4,90.6,98.9), new cjs.Rectangle(-45.7,-49.6,91.6,99.4), new cjs.Rectangle(-46.3,-49.9,92.6,99.9), new cjs.Rectangle(-46.7,-50.1,93.5,100.4), new cjs.Rectangle(-47.2,-50.3,94.4,100.8), new cjs.Rectangle(-52,-56,104,112), new cjs.Rectangle(-47.2,-50.3,94.4,100.8), new cjs.Rectangle(-46.7,-50.1,93.5,100.4), new cjs.Rectangle(-46.3,-49.9,92.6,99.9), new cjs.Rectangle(-45.7,-49.6,91.6,99.4), new cjs.Rectangle(-45.2,-49.4,90.6,98.9), new cjs.Rectangle(-44.7,-49.1,89.6,98.3), new cjs.Rectangle(-44.2,-48.7,88.5,97.7), new cjs.Rectangle(-43.6,-48.4,87.3,96.9), new cjs.Rectangle(-43,-48,86.1,96.2), new cjs.Rectangle(-42.4,-47.6,84.9,95.4), new cjs.Rectangle(-41.8,-47.2,83.7,94.6), new cjs.Rectangle(-41.2,-46.9,82.5,93.8)];


(lib.colba1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.colb1();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:15},14).to({rotation:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.4,-48.1,86.8,96.3);
p.frameBounds = [rect, new cjs.Rectangle(-43,-48,86,96.2), new cjs.Rectangle(-42.6,-47.9,85.2,96), new cjs.Rectangle(-42.2,-47.8,84.4,95.8), new cjs.Rectangle(-41.7,-47.7,83.4,95.5), new cjs.Rectangle(-41.3,-47.6,82.5,95.3), new cjs.Rectangle(-40.8,-47.4,81.6,94.9), new cjs.Rectangle(-40.3,-47.2,80.7,94.6), new cjs.Rectangle(-39.8,-47,79.5,94.2), new cjs.Rectangle(-39.3,-46.8,78.5,93.8), new cjs.Rectangle(-38.8,-46.6,77.5,93.4), new cjs.Rectangle(-38.2,-46.4,76.3,92.9), new cjs.Rectangle(-37.6,-46.1,75.2,92.3), new cjs.Rectangle(-37.1,-45.9,74.1,91.8), new cjs.Rectangle(-54.3,-57.7,108.7,115.5), new cjs.Rectangle(-37.1,-45.9,74.1,91.8), new cjs.Rectangle(-37.6,-46.1,75.2,92.3), new cjs.Rectangle(-38.1,-46.4,76.2,92.8), new cjs.Rectangle(-38.6,-46.6,77.2,93.3), new cjs.Rectangle(-39.1,-46.8,78.3,93.7), new cjs.Rectangle(-39.6,-47,79.2,94.1), new cjs.Rectangle(-40.1,-47.2,80.2,94.5), new cjs.Rectangle(-40.6,-47.3,81.1,94.8), new cjs.Rectangle(-41,-47.5,82,95.1), new cjs.Rectangle(-41.5,-47.6,82.9,95.3), new cjs.Rectangle(-41.9,-47.7,83.8,95.6), new cjs.Rectangle(-42.3,-47.9,84.6,95.8), new cjs.Rectangle(-42.7,-48,85.4,96), new cjs.Rectangle(-43.1,-48.1,86.2,96.2), new cjs.Rectangle(-43.4,-48.1,86.8,96.3)];


(lib.butterfly_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.butterfly_usik();
	this.instance.setTransform(-28.1,-21.8,1,1,0,0,0,14.6,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:14.7,rotation:10.5,x:-28},4).to({regX:14.6,rotation:0,x:-28.1},5).wait(1));

	// Слой 2
	this.instance_1 = new lib.butterfly_usik();
	this.instance_1.setTransform(9.6,-35.2,1,1,45,0,0,13.4,31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:52.5},4).to({rotation:45},5).wait(1));

	// Слой 1
	this.instance_2 = new lib.butterfly_head1();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.7,-99.9,113.7,152.9);
p.frameBounds = [rect, new cjs.Rectangle(-57.7,-99,114.9,152), new cjs.Rectangle(-57.6,-98.1,116.1,151.1), new cjs.Rectangle(-57.5,-97,117.3,150.1), new cjs.Rectangle(-57.4,-96.2,118.5,149.3), new cjs.Rectangle(-57.5,-96.9,117.5,150), new cjs.Rectangle(-57.6,-97.8,116.5,150.8), new cjs.Rectangle(-57.6,-98.5,115.6,151.6), new cjs.Rectangle(-57.7,-99.2,114.6,152.3), new cjs.Rectangle(-57.7,-99.9,113.7,152.9)];


(lib.butterfly_d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 9
	this.instance = new lib.butterfly_eyes1_img();
	this.instance.setTransform(-39.4,-8.2,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 8
	this.instance_1 = new lib.butterfly_usik();
	this.instance_1.setTransform(-39.3,-14.2,1,1,0,0,0,14.6,32.5);

	this.instance_2 = new lib.butterfly_usik();
	this.instance_2.setTransform(-1.6,-27.6,1,1,45,0,0,13.4,31.6);

	this.instance_3 = new lib.butterfly_head1();
	this.instance_3.setTransform(-11.2,7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Слой 7
	this.instance_4 = new lib.butterfly_hand();
	this.instance_4.setTransform(-27.8,74.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 6
	this.instance_5 = new lib.butterfly_leg1();
	this.instance_5.setTransform(-37.9,124.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 5
	this.instance_6 = new lib.butterfly_body();
	this.instance_6.setTransform(-3,84.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 4
	this.instance_7 = new lib.butterfly_hand();
	this.instance_7.setTransform(9.2,61.3,1,1,175.3,0,0,19.9,-12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 3
	this.instance_8 = new lib.butterfly_leg2();
	this.instance_8.setTransform(3.6,122);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 2
	this.instance_9 = new lib.butterfly_wing();
	this.instance_9.setTransform(-3,53.1,1,1,0,0,0,103.5,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 1
	this.instance_10 = new lib.butterfly_wing();
	this.instance_10.setTransform(-11.5,47.7,0.952,1,0,-21.7,158.3,103.5,17.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215.5,-158.9,431.2,317.9);
p.frameBounds = [rect];


(lib.butterfly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 9
	this.instance = new lib.butterfly_eyes();
	this.instance.setTransform(-5.7,11.5,1,1,0,0,0,0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// Слой 8
	this.instance_1 = new lib.butterfly_head();
	this.instance_1.setTransform(-11.2,7.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// Слой 7
	this.instance_2 = new lib.butterfly_hand();
	this.instance_2.setTransform(-27.8,74.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-13.4,x:-23.9,y:82.5},14).to({rotation:0,x:-27.8,y:74.7},15).wait(1));

	// Слой 6
	this.instance_3 = new lib.butterfly_leg1();
	this.instance_3.setTransform(-37.9,124.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-17.5,x:-28.8},14).to({rotation:0,x:-37.9},15).wait(1));

	// Слой 5
	this.instance_4 = new lib.butterfly_body();
	this.instance_4.setTransform(-3,84.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30));

	// Слой 4
	this.instance_5 = new lib.butterfly_hand();
	this.instance_5.setTransform(9.2,61.3,1,1,175.3,0,0,19.9,-12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:189.2},14).to({rotation:175.3},15).wait(1));

	// Слой 3
	this.instance_6 = new lib.butterfly_leg2();
	this.instance_6.setTransform(3.6,122);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-20.2,x:6.2},14).to({rotation:0,x:3.6},15).wait(1));

	// Слой 2
	this.instance_7 = new lib.butterfly_wing();
	this.instance_7.setTransform(-3,53.1,1,1,0,0,0,103.5,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:0.89,skewY:15},14).to({scaleX:1,skewY:0},15).wait(1));

	// Слой 1
	this.instance_8 = new lib.butterfly_wing();
	this.instance_8.setTransform(-11.5,47.7,0.952,1,0,-21.7,158.3,103.5,17.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:0.67,skewY:139.4},14).to({scaleX:0.95,skewY:158.3},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215.5,-158.9,431.2,317.9);
p.frameBounds = [rect, new cjs.Rectangle(-213.9,-161.3,423.3,320.4), new cjs.Rectangle(-212.1,-163.6,415.8,322.8), new cjs.Rectangle(-210.3,-166.2,408.1,325.5), new cjs.Rectangle(-208.4,-168,400.5,327.5), new cjs.Rectangle(-206.5,-169.7,393,329.3), new cjs.Rectangle(-204.5,-171.7,385.1,331.3), new cjs.Rectangle(-202.4,-172.9,377.4,332.6), new cjs.Rectangle(-200.2,-173.9,369.6,333.6), new cjs.Rectangle(-198,-175.1,361.6,335), new cjs.Rectangle(-195.8,-175.7,353.8,335.7), new cjs.Rectangle(-193.4,-176.5,345.7,336.6), new cjs.Rectangle(-191.1,-176.7,337.9,336.9), new cjs.Rectangle(-188.7,-176.7,330.2,336.9), new cjs.Rectangle(-186.3,-177,322.8,337.3), new cjs.Rectangle(-188.6,-176.9,329.4,337.1), new cjs.Rectangle(-190.8,-176.8,336.8,336.9), new cjs.Rectangle(-193.1,-176.6,344.2,336.5), new cjs.Rectangle(-195.2,-176.1,351.5,336.2), new cjs.Rectangle(-197.3,-175.5,358.9,335.4), new cjs.Rectangle(-199.4,-174.7,366.3,334.5), new cjs.Rectangle(-201.4,-173.7,373.5,333.4), new cjs.Rectangle(-203.4,-172.5,380.9,332.2), new cjs.Rectangle(-205.3,-171.2,388.1,330.7), new cjs.Rectangle(-207.2,-169.6,395.4,329), new cjs.Rectangle(-209,-167.8,402.6,327.2), new cjs.Rectangle(-210.7,-165.8,409.7,325.1), new cjs.Rectangle(-212.4,-163.1,416.9,322.3), new cjs.Rectangle(-214,-160.7,423.9,319.8), new cjs.Rectangle(-215.5,-158.9,431.2,317.9)];


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
p.nominalBounds = rect = new cjs.Rectangle(-190,-120,380,240);
p.frameBounds = [rect];


(lib.animation_lightbulb_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.lightbulb_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({alpha:0.199},5).to({alpha:0.012},5).wait(20).to({alpha:0.398},10).to({alpha:0.012},10).wait(20).to({alpha:0.898},15).to({alpha:0.012},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-10,80,20);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({alpha:0.012},0).to({alpha:0.398},15).wait(40).to({alpha:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-810,-310,1620,620);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-810,-488,1620,798), new cjs.Rectangle(-810,-450.5,1620,760.5), new cjs.Rectangle(-810,-413,1620,723), new cjs.Rectangle(-810,-375.5,1620,685.5), new cjs.Rectangle(-810,-338,1620,648), rect=new cjs.Rectangle(-810,-310,1620,620), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-810,-310,1620,623.9), new cjs.Rectangle(-810,-310,1620,658.6), new cjs.Rectangle(-810,-310,1620,693.2), new cjs.Rectangle(-810,-310,1620,727.8), new cjs.Rectangle(-810,-310,1620,762.4), new cjs.Rectangle(-810,-310,1620,797)];


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
	this.instance.setTransform(400.1,300.1,0.5,0.5,0,0,0,0.1,0.1);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:400,y:300,alpha:1},10).wait(9).to({scaleX:0.5,scaleY:0.5,alpha:0.012},11).to({_off:true},1).wait(20));

	// curtain_1
	this.instance_1 = new lib.curtain_1_mc();
	this.instance_1.setTransform(-1200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:0},18).wait(9).to({x:-1200},30).to({_off:true},1).wait(1));

	// curtain_2
	this.instance_2 = new lib.curtain_2_mc();
	this.instance_2.setTransform(1200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:0},18).wait(9).to({x:1200},30).to({_off:true},1).wait(1));

	// bg
	this.instance_3 = new lib.curtain_3_mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(9).to({_off:true},1).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1600,0,4000,600);
p.frameBounds = [rect, rect, new cjs.Rectangle(-1533.3,0,3866.7,600), new cjs.Rectangle(-1466.6,0,3733.3,600), new cjs.Rectangle(-1400,0,3600,600), new cjs.Rectangle(-1333.3,0,3466.6,600), new cjs.Rectangle(-1266.6,0,3333.3,600), new cjs.Rectangle(-1200,0,3200,600), new cjs.Rectangle(-1133.3,0,3066.7,600), new cjs.Rectangle(-1066.6,0,2933.3,600), new cjs.Rectangle(-1000,0,2800,600), new cjs.Rectangle(-933.3,0,2666.7,600), new cjs.Rectangle(-866.6,0,2533.3,600), new cjs.Rectangle(-800,0,2400,600), new cjs.Rectangle(-733.3,0,2266.7,600), new cjs.Rectangle(-666.6,0,2133.3,600), new cjs.Rectangle(-600,0,2000,600), new cjs.Rectangle(-533.3,0,1866.7,600), new cjs.Rectangle(-466.6,0,1733.3,600), rect=new cjs.Rectangle(-410,-10,1620,620), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-440,0,1680,600), new cjs.Rectangle(-480,0,1760,600), new cjs.Rectangle(-520,0,1840,600), new cjs.Rectangle(-560,0,1920,600), new cjs.Rectangle(-600,0,2000,600), new cjs.Rectangle(-640,0,2080,600), new cjs.Rectangle(-680,0,2160,600), new cjs.Rectangle(-720,0,2240,600), new cjs.Rectangle(-760,0,2320,600), new cjs.Rectangle(-800,0,2400,600), new cjs.Rectangle(-840,0,2480,600), new cjs.Rectangle(-880,0,2560,600), new cjs.Rectangle(-920,0,2640,600), new cjs.Rectangle(-960,0,2720,600), new cjs.Rectangle(-1000,0,2800,600), new cjs.Rectangle(-1040,0,2880,600), new cjs.Rectangle(-1080,0,2960,600), new cjs.Rectangle(-1120,0,3040,600), new cjs.Rectangle(-1160,0,3120,600), new cjs.Rectangle(-1200,0,3200,600), new cjs.Rectangle(-1240,0,3280,600), new cjs.Rectangle(-1280,0,3360,600), new cjs.Rectangle(-1320,0,3440,600), new cjs.Rectangle(-1360,0,3520,600), new cjs.Rectangle(-1400,0,3600,600), new cjs.Rectangle(-1440,0,3680,600), new cjs.Rectangle(-1480,0,3760,600), new cjs.Rectangle(-1520,0,3840,600), new cjs.Rectangle(-1560,0,3920,600), new cjs.Rectangle(-1600,0,4000,600), null];


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
	this.instance_1.alpha = 0.602;

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
	this.instance.setTransform(200,200,0.6,0.6);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(50,110,300,180);
p.frameBounds = [rect, new cjs.Rectangle(46.3,106.8,302.5,181.5), new cjs.Rectangle(35.2,97.1,309.9,186), new cjs.Rectangle(16.7,81.1,322.2,193.4), new cjs.Rectangle(-9.3,58.6,339.5,203.7), new cjs.Rectangle(-42.6,29.7,361.7,217.1), new cjs.Rectangle(-83.3,-5.5,388.9,233.4), new cjs.Rectangle(-131.4,-47.2,421,252.6), new cjs.Rectangle(-187,-95.4,458,274.8), new cjs.Rectangle(-250,-150,500,300)];


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
p.nominalBounds = rect = new cjs.Rectangle(-43.7,-43.7,87.5,87.5);
p.frameBounds = [rect, new cjs.Rectangle(-50,-50,100,100), new cjs.Rectangle(-43.7,-43.7,87.5,87.5), new cjs.Rectangle(-50,-50,100,100)];


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
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
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
	this.shape.graphics.f("rgba(0,0,0,0.4)").s().p("Eh+jAwcMAAAhg2MD9GAAAMAAABg2g");
	this.shape.setTransform(400,300);

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
	this.pt.setTransform(200,450);

	this.es = new lib.language_es_mc();
	this.es.setTransform(600,310);

	this.tr = new lib.language_tr_mc();
	this.tr.setTransform(600,170);

	this.fr = new lib.language_fr_mc();
	this.fr.setTransform(400,310);

	this.de = new lib.language_de_mc();
	this.de.setTransform(200,310);

	this.ru = new lib.language_ru_mc();
	this.ru.setTransform(400,170);

	this.en = new lib.language_en_mc();
	this.en.setTransform(200,170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.en},{t:this.ru},{t:this.de},{t:this.fr},{t:this.tr},{t:this.es},{t:this.pt}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(110,105,580,410);
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


(lib.unicorn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.unicorn_eye1_img();
	this.instance.setTransform(37.2,-152.1);

	this.instance_1 = new lib.unicorn_horn_img();
	this.instance_1.setTransform(87.7,-191);

	this.instance_2 = new lib.unicorn_ear();
	this.instance_2.setTransform(57.7,-174.6,1,1,0,0,0,-7,29);

	this.instance_3 = new lib.unicorn_hair();
	this.instance_3.setTransform(61.7,-178,1,1,0,0,0,-25,-97);

	this.instance_4 = new lib.unicorn_head_img();
	this.instance_4.setTransform(22.4,-191.5);

	this.instance_5 = new lib.unicorn_earb();
	this.instance_5.setTransform(93.4,-175,1,1,0,0,0,-9,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 5
	this.instance_6 = new lib.unicorn_uzor();
	this.instance_6.setTransform(-11,-20.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 1
	this.instance_7 = new lib.unicorn_body_img();
	this.instance_7.setTransform(-102.5,-149.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 2
	this.instance_8 = new lib.unicorn_tale();
	this.instance_8.setTransform(-56.6,-32,1,1,0,0,0,86,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 3
	this.instance_9 = new lib.unicorn_hairb();
	this.instance_9.setTransform(58,-174.6,1,1,0,0,0,-48,-142);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-237.6,-238.6,456.2,388.2);
p.frameBounds = [rect];


(lib.rainbowtale_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rainbowtale();
	this.instance.setTransform(0,0,0.653,0.653);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:12},29).to({y:-6},8).to({y:0},22).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-226,-150.5,452.1,301);
p.frameBounds = [rect, new cjs.Rectangle(-226,-150.1,452.1,301), new cjs.Rectangle(-226,-149.6,452.1,301.1), new cjs.Rectangle(-226,-149.2,452.1,301.1), new cjs.Rectangle(-226,-148.8,452.1,301), new cjs.Rectangle(-226,-148.4,452.1,301), new cjs.Rectangle(-226,-148,452.1,301.1), new cjs.Rectangle(-226,-147.6,452.1,301), new cjs.Rectangle(-226,-147.2,452.1,301), new cjs.Rectangle(-226,-146.8,452.1,301.1), new cjs.Rectangle(-226,-146.3,452.1,301), new cjs.Rectangle(-226,-145.9,452.1,301), new cjs.Rectangle(-226,-145.5,452.1,301.1), new cjs.Rectangle(-226,-145.1,452.1,301), new cjs.Rectangle(-226,-144.7,452.1,301), new cjs.Rectangle(-226,-144.3,452.1,301.1), new cjs.Rectangle(-226,-143.9,452.1,301.1), new cjs.Rectangle(-226,-143.4,452.1,301), new cjs.Rectangle(-226,-143,452.1,301.1), new cjs.Rectangle(-226,-142.6,452.1,301.1), new cjs.Rectangle(-226,-142.2,452.1,301), new cjs.Rectangle(-226,-141.8,452.1,301.1), new cjs.Rectangle(-226,-141.4,452.1,301.1), new cjs.Rectangle(-226,-141,452.1,301.1), new cjs.Rectangle(-226,-140.5,452.1,301.1), new cjs.Rectangle(-226,-140.1,452.1,301.1), new cjs.Rectangle(-226,-139.7,452.1,301.1), new cjs.Rectangle(-226,-139.3,452.1,301), new cjs.Rectangle(-226,-138.9,452.1,301.1), new cjs.Rectangle(-226,-138.5,452.1,301), new cjs.Rectangle(-226,-140.7,452.1,301.1), new cjs.Rectangle(-226,-143,452.1,301.1), new cjs.Rectangle(-226,-145.2,452.1,301.1), new cjs.Rectangle(-226,-147.5,452.1,301.1), new cjs.Rectangle(-226,-149.7,452.1,301.1), new cjs.Rectangle(-226,-151.9,452.1,301), new cjs.Rectangle(-226,-154.2,452.1,301), new cjs.Rectangle(-226,-156.5,452.1,301), new cjs.Rectangle(-226,-156.2,452.1,301), new cjs.Rectangle(-226,-155.9,452.1,301.1), new cjs.Rectangle(-226,-155.6,452.1,301.1), new cjs.Rectangle(-226,-155.3,452.1,301), new cjs.Rectangle(-226,-155.1,452.1,301), new cjs.Rectangle(-226,-154.8,452.1,301.1), new cjs.Rectangle(-226,-154.5,452.1,301.1), new cjs.Rectangle(-226,-154.2,452.1,301.1), new cjs.Rectangle(-226,-154,452.1,301.1), new cjs.Rectangle(-226,-153.7,452.1,301), new cjs.Rectangle(-226,-153.4,452.1,301), new cjs.Rectangle(-226,-153.2,452.1,301), new cjs.Rectangle(-226,-152.9,452.1,301.1), new cjs.Rectangle(-226,-152.6,452.1,301.1), new cjs.Rectangle(-226,-152.3,452.1,301), new cjs.Rectangle(-226,-152.1,452.1,301), new cjs.Rectangle(-226,-151.8,452.1,301.1), new cjs.Rectangle(-226,-151.5,452.1,301.1), new cjs.Rectangle(-226,-151.2,452.1,301.1), new cjs.Rectangle(-226,-151,452.1,301.1), new cjs.Rectangle(-226,-150.7,452.1,301), new cjs.Rectangle(-226,-150.5,452.1,301)];


(lib.product_progress_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"show":0,"hide":1});

	// frame
	this.instance = new lib.frame_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// graph
	this.instance_1 = new lib.foxower_d();
	this.instance_1.setTransform(-12.9,-12.8,0.557,0.557,0,0,0,-10,0.1);

	this.instance_2 = new lib.no_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.instance_3 = new lib.bg_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

	// decor
	this.instance_4 = new lib.shadow_product_progress_img();
	this.instance_4.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, rect];


(lib.product_progress_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"show":0,"hide":1});

	// frame
	this.instance = new lib.frame_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// graph
	this.instance_1 = new lib.night_shadow_d();
	this.instance_1.setTransform(13,-10,0.583,0.583);

	this.instance_2 = new lib.no_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.instance_3 = new lib.bg_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

	// decor
	this.instance_4 = new lib.shadow_product_progress_img();
	this.instance_4.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, rect];


(lib.product_progress_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"show":0,"hide":1});

	// frame
	this.instance = new lib.frame_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Au5O6QmLmMAAouQAAotGLmMQGLmMIuAAQIvAAGLGMQGLGMABItQgBIumLGMQmLGLovABQougBmLmLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:5,y:-9}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// graph
	this.instance_1 = new lib.flower_cat_d();
	this.instance_1.setTransform(31,-22.5,0.542,0.542,4);

	this.instance_2 = new lib.no_product_progress_mc();

	this.instance_1.mask = this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.instance_3 = new lib.bg_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

	// decor
	this.instance_4 = new lib.shadow_product_progress_img();
	this.instance_4.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, rect];


(lib.product_progress_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"show":0,"hide":1});

	// frame
	this.instance = new lib.frame_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// graph
	this.instance_1 = new lib.grifon_d();
	this.instance_1.setTransform(-3.1,-9.5,0.483,0.483);

	this.instance_2 = new lib.no_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.instance_3 = new lib.bg_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

	// decor
	this.instance_4 = new lib.shadow_product_progress_img();
	this.instance_4.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, rect];


(lib.product_progress_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"show":0,"hide":1});

	// frame
	this.instance = new lib.frame_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// graph
	this.instance_1 = new lib.butterfly_d();
	this.instance_1.setTransform(16.4,-7.9,0.629,0.629);

	this.instance_2 = new lib.no_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.instance_3 = new lib.bg_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

	// decor
	this.instance_4 = new lib.shadow_product_progress_img();
	this.instance_4.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, rect];


(lib.product_progress_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"show":0,"hide":1});

	// frame
	this.instance = new lib.frame_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// graph
	this.instance_1 = new lib.feniks_d();
	this.instance_1.setTransform(-7,36.5,0.477,0.477);

	this.instance_2 = new lib.no_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.instance_3 = new lib.bg_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

	// decor
	this.instance_4 = new lib.shadow_product_progress_img();
	this.instance_4.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, rect];


(lib.product_progress_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"show":0,"hide":1});

	// frame
	this.instance = new lib.frame_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// graph
	this.instance_1 = new lib.medusa_d();
	this.instance_1.setTransform(2.4,-7.9,1,1,0,0,0,0,68.5);

	this.instance_2 = new lib.no_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.instance_3 = new lib.bg_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

	// decor
	this.instance_4 = new lib.shadow_product_progress_img();
	this.instance_4.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, rect];


(lib.product_progress_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"show":0,"hide":1});

	// frame
	this.instance = new lib.frame_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// graph
	this.instance_1 = new lib.gold_fish2();
	this.instance_1.setTransform(2,-11.6,0.53,0.53,0,0,0,50.5,28.4);

	this.instance_2 = new lib.no_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.instance_3 = new lib.bg_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

	// decor
	this.instance_4 = new lib.shadow_product_progress_img();
	this.instance_4.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, rect];


(lib.product_progress_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"show":0,"hide":1});

	// frame
	this.instance = new lib.frame_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Au5O6QmLmMAAouQAAotGLmMQGLmMIuAAQIvAAGLGMQGLGMABItQgBIumLGMQmLGLovABQougBmLmLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:5,y:-9}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// graph
	this.instance_1 = new lib.unicorn2();
	this.instance_1.setTransform(-23.4,14.9,0.624,0.624);

	this.instance_2 = new lib.no_product_progress_mc();

	this.instance_1.mask = this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.instance_3 = new lib.bg_product_progress_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

	// decor
	this.instance_4 = new lib.shadow_product_progress_img();
	this.instance_4.setTransform(-190,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect, rect];


(lib.prev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0,0,0.555,0.556,0,0,180,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-141.1,266.5,282.3);
p.frameBounds = [rect];


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0.1,0,0.555,0.556,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-216.5,-141.1,266.5,282.3);
p.frameBounds = [rect];


(lib.magic_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pipe();
	this.instance.setTransform(393,134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({y:-472.4},32).to({_off:true},1).wait(51));

	// animation
	this.instance_1 = new lib.kolpak();
	this.instance_1.setTransform(398,430);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({y:-176.9},32).to({_off:true},1).wait(51));

	// animation
	this.instance_2 = new lib.magic();
	this.instance_2.setTransform(396,402,1.213,1.213,0,0,0,75,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},21).wait(89));

	// animation
	this.instance_3 = new lib.egg11_1();
	this.instance_3.setTransform(392,479.4,1,1,0,0,0,-10,73);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).to({rotation:-56.6,x:392.1,y:479.3,alpha:0.012},20).to({_off:true},1).wait(30));

	// animation
	this.instance_4 = new lib.egg11_2();
	this.instance_4.setTransform(393,478.4,1,1,0,0,0,-9,72);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59).to({_off:false},0).to({rotation:65.2,y:478.3,alpha:0.012},20).to({_off:true},1).wait(30));

	// animation
	this.instance_5 = new lib.foxower();
	this.instance_5.setTransform(388.5,414,0.375,0.375,0,0,0,-10,0.1);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59).to({_off:false},0).to({alpha:1},20).to({scaleX:0.74,scaleY:0.74,x:395.5,y:355.9},30).wait(1));

	// animation
	this.instance_6 = new lib.egg11();
	this.instance_6.setTransform(393,404);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({alpha:1},18).wait(38).to({_off:true},1).wait(51));

	// animation
	this.instance_7 = new lib.table();
	this.instance_7.setTransform(399,520.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(110));

	// animation
	this.instance_8 = new lib.hero_mc();
	this.instance_8.setTransform(130,400,0.803,0.803);

	this.instance_9 = new lib.hero_mc3();
	this.instance_9.setTransform(130,400,0.803,0.803);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},60).to({state:[{t:this.instance_8}]},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.9,-11.1,669.9,822.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110.9,-18.9,669.9,830.1), new cjs.Rectangle(-110.9,-37.9,669.9,849.1), new cjs.Rectangle(-110.9,-56.9,669.9,868.1), new cjs.Rectangle(-110.9,-75.8,669.9,887), new cjs.Rectangle(-110.9,-94.8,669.9,906), new cjs.Rectangle(-110.9,-113.8,669.9,925), new cjs.Rectangle(-110.9,-132.7,669.9,943.9), new cjs.Rectangle(-110.9,-151.7,669.9,962.9), new cjs.Rectangle(-110.9,-170.7,669.9,981.9), new cjs.Rectangle(-110.9,-189.6,669.9,1000.8), new cjs.Rectangle(-110.9,-208.6,669.9,1019.8), new cjs.Rectangle(-110.9,-227.6,669.9,1038.8), new cjs.Rectangle(-110.9,-246.5,669.9,1057.7), new cjs.Rectangle(-110.9,-265.5,669.9,1076.7), new cjs.Rectangle(-110.9,-284.5,669.9,1095.7), new cjs.Rectangle(-110.9,-303.4,669.9,1114.6), new cjs.Rectangle(-110.9,-322.4,669.9,1133.6), new cjs.Rectangle(-110.9,-341.4,669.9,1152.6), new cjs.Rectangle(-110.9,-360.4,669.9,1171.6), new cjs.Rectangle(-110.9,-379.3,669.9,1190.5), new cjs.Rectangle(-110.9,-398.3,669.9,1209.5), new cjs.Rectangle(-110.9,-417.3,669.9,1228.5), new cjs.Rectangle(-110.9,-436.2,669.9,1247.4), new cjs.Rectangle(-110.9,-455.2,669.9,1266.4), new cjs.Rectangle(-110.9,-474.2,669.9,1285.4), new cjs.Rectangle(-110.9,-493.1,669.9,1304.3), new cjs.Rectangle(-110.9,-512.1,669.9,1323.3), new cjs.Rectangle(-110.9,-531.1,669.9,1342.3), new cjs.Rectangle(-110.9,-550,669.9,1361.2), new cjs.Rectangle(-110.9,-569,669.9,1380.2), new cjs.Rectangle(-110.9,-588,669.9,1399.2), new cjs.Rectangle(-110.9,-606.9,669.9,1418.1), rect=new cjs.Rectangle(-110.9,-11.1,665.4,822.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110.9,-11.1,667.5,822.3), new cjs.Rectangle(-110.9,-11.1,670.6,822.3), new cjs.Rectangle(-110.9,-11.1,673.1,822.3), new cjs.Rectangle(-110.9,-11.1,675.2,822.3), new cjs.Rectangle(-110.9,-11.1,676.6,822.3), new cjs.Rectangle(-110.9,-11.1,677.4,822.3), new cjs.Rectangle(-110.9,-11.1,677.8,822.3), new cjs.Rectangle(-110.9,-11.1,677.6,822.3), new cjs.Rectangle(-110.9,-11.1,677.1,822.3), rect=new cjs.Rectangle(-110.9,-11.1,665.4,822.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.magic_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pipe();
	this.instance.setTransform(393,134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({y:-472.4},32).to({_off:true},1).wait(51));

	// animation
	this.instance_1 = new lib.kolpak();
	this.instance_1.setTransform(398,430);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({y:-176.9},32).to({_off:true},1).wait(51));

	// animation
	this.instance_2 = new lib.magic();
	this.instance_2.setTransform(396,402,1.213,1.213,0,0,0,75,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},21).wait(89));

	// animation
	this.instance_3 = new lib.egg9_1();
	this.instance_3.setTransform(394,483,1,1,0,0,0,-1,78);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).to({rotation:-74.2,alpha:0.012},20).to({_off:true},1).wait(30));

	// animation
	this.instance_4 = new lib.egg9_2();
	this.instance_4.setTransform(393,478,1,1,0,0,0,-2,73);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59).to({_off:false},0).to({rotation:71,alpha:0.012},20).to({_off:true},1).wait(30));

	// animation
	this.instance_5 = new lib.flower_cat();
	this.instance_5.setTransform(407.5,424,0.289,0.289,4);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59).to({_off:false},0).to({alpha:1},20).to({scaleX:0.72,scaleY:0.72,x:432.5,y:373},30).wait(1));

	// animation
	this.instance_6 = new lib.egg9();
	this.instance_6.setTransform(393,404);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({alpha:1},18).wait(38).to({_off:true},1).wait(51));

	// animation
	this.instance_7 = new lib.table();
	this.instance_7.setTransform(399,520.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(110));

	// animation
	this.instance_8 = new lib.hero_mc();
	this.instance_8.setTransform(130,400,0.803,0.803);

	this.instance_9 = new lib.hero_mc3();
	this.instance_9.setTransform(130,400,0.803,0.803);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},60).to({state:[{t:this.instance_8}]},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.9,-11.1,669.9,822.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110.9,-18.9,669.9,830.1), new cjs.Rectangle(-110.9,-37.9,669.9,849.1), new cjs.Rectangle(-110.9,-56.9,669.9,868.1), new cjs.Rectangle(-110.9,-75.8,669.9,887), new cjs.Rectangle(-110.9,-94.8,669.9,906), new cjs.Rectangle(-110.9,-113.8,669.9,925), new cjs.Rectangle(-110.9,-132.7,669.9,943.9), new cjs.Rectangle(-110.9,-151.7,669.9,962.9), new cjs.Rectangle(-110.9,-170.7,669.9,981.9), new cjs.Rectangle(-110.9,-189.6,669.9,1000.8), new cjs.Rectangle(-110.9,-208.6,669.9,1019.8), new cjs.Rectangle(-110.9,-227.6,669.9,1038.8), new cjs.Rectangle(-110.9,-246.5,669.9,1057.7), new cjs.Rectangle(-110.9,-265.5,669.9,1076.7), new cjs.Rectangle(-110.9,-284.5,669.9,1095.7), new cjs.Rectangle(-110.9,-303.4,669.9,1114.6), new cjs.Rectangle(-110.9,-322.4,669.9,1133.6), new cjs.Rectangle(-110.9,-341.4,669.9,1152.6), new cjs.Rectangle(-110.9,-360.4,669.9,1171.6), new cjs.Rectangle(-110.9,-379.3,669.9,1190.5), new cjs.Rectangle(-110.9,-398.3,669.9,1209.5), new cjs.Rectangle(-110.9,-417.3,669.9,1228.5), new cjs.Rectangle(-110.9,-436.2,669.9,1247.4), new cjs.Rectangle(-110.9,-455.2,669.9,1266.4), new cjs.Rectangle(-110.9,-474.2,669.9,1285.4), new cjs.Rectangle(-110.9,-493.1,669.9,1304.3), new cjs.Rectangle(-110.9,-512.1,669.9,1323.3), new cjs.Rectangle(-110.9,-531.1,669.9,1342.3), new cjs.Rectangle(-110.9,-550,669.9,1361.2), new cjs.Rectangle(-110.9,-569,669.9,1380.2), new cjs.Rectangle(-110.9,-588,669.9,1399.2), new cjs.Rectangle(-110.9,-606.9,669.9,1418.1), rect=new cjs.Rectangle(-110.9,-11.1,665.4,822.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110.9,-11.1,665.9,822.3), new cjs.Rectangle(-110.9,-11.1,670.5,822.3), new cjs.Rectangle(-110.9,-11.1,675.2,822.3), new cjs.Rectangle(-110.9,-11.1,679.9,822.3), new cjs.Rectangle(-110.9,-11.1,684.6,822.3), new cjs.Rectangle(-110.9,-11.1,689.2,822.3), new cjs.Rectangle(-110.9,-11.1,693.9,822.3), new cjs.Rectangle(-110.9,-11.1,698.5,822.3), new cjs.Rectangle(-110.9,-11.1,703.2,822.3), new cjs.Rectangle(-110.9,-11.1,707.9,822.3), new cjs.Rectangle(-110.9,-11.1,712.6,822.3), new cjs.Rectangle(-110.9,-11.1,717.2,822.3), new cjs.Rectangle(-110.9,-11.1,721.9,822.3), new cjs.Rectangle(-110.9,-11.1,726.6,822.3), new cjs.Rectangle(-110.9,-11.1,731.3,822.3), new cjs.Rectangle(-110.9,-11.1,736.3,822.3)];


(lib.magic_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pipe();
	this.instance.setTransform(393,134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({y:-472.4},32).to({_off:true},1).wait(51));

	// animation
	this.instance_1 = new lib.kolpak();
	this.instance_1.setTransform(398,430);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({y:-176.9},32).to({_off:true},1).wait(51));

	// animation
	this.instance_2 = new lib.magic();
	this.instance_2.setTransform(396,402,1.213,1.213,0,0,0,75,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},21).wait(89));

	// animation
	this.instance_3 = new lib.egg8_1();
	this.instance_3.setTransform(396.5,487.9,1,1,0,0,0,1,80);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).to({rotation:-69.8,x:396.6,y:487.8,alpha:0.012},20).to({_off:true},1).wait(30));

	// animation
	this.instance_4 = new lib.egg8_2();
	this.instance_4.setTransform(395.5,484.9,1,1,0,0,0,0,77);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59).to({_off:false},0).to({regX:-0.1,rotation:71.5,x:395.4,alpha:0.012},20).to({_off:true},1).wait(30));

	// animation
	this.instance_5 = new lib.rainbowtale();
	this.instance_5.setTransform(387.5,418,0.249,0.249);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.instance_6 = new lib.rainbowtale_a();
	this.instance_6.setTransform(412.5,306,1.19,1.19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},59).to({state:[{t:this.instance_5}]},20).to({state:[{t:this.instance_5}]},29).to({state:[{t:this.instance_6}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59).to({_off:false},0).to({alpha:1},20).to({scaleX:0.78,scaleY:0.78,x:412.5,y:306},29).to({_off:true,scaleX:1.19,scaleY:1.19},1).wait(1));

	// animation
	this.instance_7 = new lib.egg8();
	this.instance_7.setTransform(393,404);
	this.instance_7.alpha = 0.012;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).to({alpha:1},18).wait(38).to({_off:true},1).wait(51));

	// animation
	this.instance_8 = new lib.table();
	this.instance_8.setTransform(399,520.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(110));

	// animation
	this.instance_9 = new lib.hero_mc();
	this.instance_9.setTransform(130,400,0.803,0.803);

	this.instance_10 = new lib.hero_mc3();
	this.instance_10.setTransform(130,400,0.803,0.803);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_10}]},60).to({state:[{t:this.instance_9}]},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.9,-11.1,669.9,822.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110.9,-18.9,669.9,830.1), new cjs.Rectangle(-110.9,-37.9,669.9,849.1), new cjs.Rectangle(-110.9,-56.9,669.9,868.1), new cjs.Rectangle(-110.9,-75.8,669.9,887), new cjs.Rectangle(-110.9,-94.8,669.9,906), new cjs.Rectangle(-110.9,-113.8,669.9,925), new cjs.Rectangle(-110.9,-132.7,669.9,943.9), new cjs.Rectangle(-110.9,-151.7,669.9,962.9), new cjs.Rectangle(-110.9,-170.7,669.9,981.9), new cjs.Rectangle(-110.9,-189.6,669.9,1000.8), new cjs.Rectangle(-110.9,-208.6,669.9,1019.8), new cjs.Rectangle(-110.9,-227.6,669.9,1038.8), new cjs.Rectangle(-110.9,-246.5,669.9,1057.7), new cjs.Rectangle(-110.9,-265.5,669.9,1076.7), new cjs.Rectangle(-110.9,-284.5,669.9,1095.7), new cjs.Rectangle(-110.9,-303.4,669.9,1114.6), new cjs.Rectangle(-110.9,-322.4,669.9,1133.6), new cjs.Rectangle(-110.9,-341.4,669.9,1152.6), new cjs.Rectangle(-110.9,-360.4,669.9,1171.6), new cjs.Rectangle(-110.9,-379.3,669.9,1190.5), new cjs.Rectangle(-110.9,-398.3,669.9,1209.5), new cjs.Rectangle(-110.9,-417.3,669.9,1228.5), new cjs.Rectangle(-110.9,-436.2,669.9,1247.4), new cjs.Rectangle(-110.9,-455.2,669.9,1266.4), new cjs.Rectangle(-110.9,-474.2,669.9,1285.4), new cjs.Rectangle(-110.9,-493.1,669.9,1304.3), new cjs.Rectangle(-110.9,-512.1,669.9,1323.3), new cjs.Rectangle(-110.9,-531.1,669.9,1342.3), new cjs.Rectangle(-110.9,-550,669.9,1361.2), new cjs.Rectangle(-110.9,-569,669.9,1380.2), new cjs.Rectangle(-110.9,-588,669.9,1399.2), new cjs.Rectangle(-110.9,-606.9,669.9,1418.1), rect=new cjs.Rectangle(-110.9,-11.1,665.4,822.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110.9,-11.1,668.1,822.3), new cjs.Rectangle(-110.9,-11.1,670.3,822.3), new cjs.Rectangle(-110.9,-11.1,672.1,822.3), new cjs.Rectangle(-110.9,-11.1,673.1,822.3), new cjs.Rectangle(-110.9,-11.1,673.4,822.3), new cjs.Rectangle(-110.9,-11.1,673.5,822.3), rect=new cjs.Rectangle(-110.9,-11.1,665.4,822.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110.9,-11.1,670.4,822.3), new cjs.Rectangle(-110.9,-11.1,677.7,822.3), new cjs.Rectangle(-110.9,-11.1,684.8,822.3), new cjs.Rectangle(-110.9,-11.1,692,822.3), new cjs.Rectangle(-110.9,-11.1,699.2,822.3), new cjs.Rectangle(-110.9,-11.1,706.3,822.3), new cjs.Rectangle(-110.9,-11.1,713.6,822.3), new cjs.Rectangle(-110.9,-11.1,720.7,822.3), new cjs.Rectangle(-110.9,-11.1,727.9,822.3), new cjs.Rectangle(-110.9,-11.1,735,822.3), new cjs.Rectangle(-110.9,-11.1,742.2,822.3), new cjs.Rectangle(-110.9,-11.1,749.4,822.3), new cjs.Rectangle(-110.9,-11.1,756.6,822.3), new cjs.Rectangle(-110.9,-11.1,763.7,822.3), new cjs.Rectangle(-110.9,-11.1,770.9,822.3), new cjs.Rectangle(-110.9,-11.1,778.1,822.3), new cjs.Rectangle(-110.9,-11.1,785.3,822.3), rect=new cjs.Rectangle(-110.9,-11.1,792.4,822.3), rect];


(lib.magic_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pipe();
	this.instance.setTransform(393,134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(110));

	// animation
	this.instance_1 = new lib.kolpak();
	this.instance_1.setTransform(398,430);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(110));

	// animation
	this.instance_2 = new lib.magic();
	this.instance_2.setTransform(396,402,1.213,1.213,0,0,0,75,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},21).wait(89));

	// animation
	this.instance_3 = new lib.back_water();
	this.instance_3.setTransform(398,569.5);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(22).to({_off:false},0).to({y:471.5,alpha:1},36).wait(52));

	// animation
	this.instance_4 = new lib.egg3_1();
	this.instance_4.setTransform(396,474,1,1,0,0,0,0,70);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59).to({_off:false},0).to({regX:-0.1,rotation:-80.8,x:396.1,y:474.2,alpha:0.012},20).to({_off:true},1).wait(30));

	// animation
	this.instance_5 = new lib.egg3_2();
	this.instance_5.setTransform(396,471,1,1,0,0,0,0,67);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59).to({_off:false},0).to({rotation:75.2,alpha:0.012},20).to({_off:true},1).wait(30));

	// animation
	this.instance_6 = new lib.gold_fish();
	this.instance_6.setTransform(381.3,398,0.216,0.216);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.instance_7 = new lib.gf();
	this.instance_7.setTransform(387.3,416.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},59).to({state:[{t:this.instance_6}]},20).to({state:[{t:this.instance_6}]},29).to({state:[{t:this.instance_7}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(59).to({_off:false},0).to({alpha:1},20).to({scaleX:0.46,scaleY:0.46,x:364.3,y:404},29).to({_off:true,scaleX:1,scaleY:1,x:387.3,y:416.9},1).wait(1));

	// animation
	this.instance_8 = new lib.egg3();
	this.instance_8.setTransform(393,404);
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({_off:false},0).to({alpha:1},18).wait(38).to({_off:true},1).wait(51));

	// animation
	this.instance_9 = new lib.table();
	this.instance_9.setTransform(399,520.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(110));

	// animation
	this.instance_10 = new lib.hero_mc();
	this.instance_10.setTransform(130,400,0.803,0.803);

	this.instance_11 = new lib.hero_mc3();
	this.instance_11.setTransform(130,400,0.803,0.803);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_11}]},60).to({state:[{t:this.instance_10}]},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.9,-11.1,669.9,822.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110.9,-11.1,670.3,822.3), new cjs.Rectangle(-110.9,-11.1,673.7,822.3), new cjs.Rectangle(-110.9,-11.1,676.4,822.3), new cjs.Rectangle(-110.9,-11.1,678.4,822.3), new cjs.Rectangle(-110.9,-11.1,679.6,822.3), new cjs.Rectangle(-110.9,-11.1,680.2,822.3), new cjs.Rectangle(-110.9,-11.1,679.9,822.3), new cjs.Rectangle(-110.9,-11.1,678.9,822.3), new cjs.Rectangle(-110.9,-11.1,677.3,822.3), rect=new cjs.Rectangle(-110.9,-11.1,669.9,822.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.magic_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pipe();
	this.instance.setTransform(393,134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({y:-472.4},32).to({_off:true},1).wait(51));

	// animation
	this.instance_1 = new lib.kolpak();
	this.instance_1.setTransform(398,430);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({y:-176.9},32).to({_off:true},1).wait(51));

	// animation
	this.instance_2 = new lib.magic();
	this.instance_2.setTransform(396,402,1.213,1.213,0,0,0,75,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},21).wait(89));

	// animation
	this.instance_3 = new lib.egg1_2();
	this.instance_3.setTransform(395,484,1,1,0,0,0,2,80);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).to({rotation:64.2,x:394.9,y:484.1,alpha:0.012},20).to({_off:true},1).wait(30));

	// animation
	this.instance_4 = new lib.egg1_1();
	this.instance_4.setTransform(393,483,1,1,0,0,0,0,79);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59).to({_off:false},0).to({rotation:-67.2,alpha:0.012},20).to({_off:true},1).wait(30));

	// animation
	this.instance_5 = new lib.dragon();
	this.instance_5.setTransform(415,433.5,0.364,0.364);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59).to({_off:false},0).wait(20).to({scaleX:0.89,scaleY:0.89,x:412,y:382.5},30).wait(1));

	// animation
	this.instance_6 = new lib.egg1();
	this.instance_6.setTransform(393,404);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({alpha:1},18).wait(38).to({_off:true},1).wait(51));

	// animation
	this.instance_7 = new lib.table();
	this.instance_7.setTransform(399,520.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(110));

	// animation
	this.instance_8 = new lib.hero_mc();
	this.instance_8.setTransform(130,400,0.803,0.803);

	this.instance_9 = new lib.hero_mc3();
	this.instance_9.setTransform(130,400,0.803,0.803);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},60).to({state:[{t:this.instance_8}]},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.9,-11.1,669.9,822.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110.9,-18.9,669.9,830.1), new cjs.Rectangle(-110.9,-37.9,669.9,849.1), new cjs.Rectangle(-110.9,-56.9,669.9,868.1), new cjs.Rectangle(-110.9,-75.8,669.9,887), new cjs.Rectangle(-110.9,-94.8,669.9,906), new cjs.Rectangle(-110.9,-113.8,669.9,925), new cjs.Rectangle(-110.9,-132.7,669.9,943.9), new cjs.Rectangle(-110.9,-151.7,669.9,962.9), new cjs.Rectangle(-110.9,-170.7,669.9,981.9), new cjs.Rectangle(-110.9,-189.6,669.9,1000.8), new cjs.Rectangle(-110.9,-208.6,669.9,1019.8), new cjs.Rectangle(-110.9,-227.6,669.9,1038.8), new cjs.Rectangle(-110.9,-246.5,669.9,1057.7), new cjs.Rectangle(-110.9,-265.5,669.9,1076.7), new cjs.Rectangle(-110.9,-284.5,669.9,1095.7), new cjs.Rectangle(-110.9,-303.4,669.9,1114.6), new cjs.Rectangle(-110.9,-322.4,669.9,1133.6), new cjs.Rectangle(-110.9,-341.4,669.9,1152.6), new cjs.Rectangle(-110.9,-360.4,669.9,1171.6), new cjs.Rectangle(-110.9,-379.3,669.9,1190.5), new cjs.Rectangle(-110.9,-398.3,669.9,1209.5), new cjs.Rectangle(-110.9,-417.3,669.9,1228.5), new cjs.Rectangle(-110.9,-436.2,669.9,1247.4), new cjs.Rectangle(-110.9,-455.2,669.9,1266.4), new cjs.Rectangle(-110.9,-474.2,669.9,1285.4), new cjs.Rectangle(-110.9,-493.1,669.9,1304.3), new cjs.Rectangle(-110.9,-512.1,669.9,1323.3), new cjs.Rectangle(-110.9,-531.1,669.9,1342.3), new cjs.Rectangle(-110.9,-550,669.9,1361.2), new cjs.Rectangle(-110.9,-569,669.9,1380.2), new cjs.Rectangle(-110.9,-588,669.9,1399.2), new cjs.Rectangle(-110.9,-606.9,669.9,1418.1), rect=new cjs.Rectangle(-110.9,-11.1,665.4,822.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110.9,-11.1,668.4,822.3), new cjs.Rectangle(-110.9,-11.1,671.4,822.3), new cjs.Rectangle(-110.9,-11.1,673.9,822.3), new cjs.Rectangle(-110.9,-11.1,675.9,822.3), new cjs.Rectangle(-110.9,-11.1,677.3,822.3), new cjs.Rectangle(-110.9,-11.1,678.5,822.3), rect=new cjs.Rectangle(-110.9,-11.1,665.4,822.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110.9,-11.1,668.2,822.3), new cjs.Rectangle(-110.9,-11.1,671.3,822.3), new cjs.Rectangle(-110.9,-11.1,674.4,822.3), new cjs.Rectangle(-110.9,-11.1,677.6,822.3), new cjs.Rectangle(-110.9,-11.1,680.7,822.3), new cjs.Rectangle(-110.9,-11.1,683.8,822.3), new cjs.Rectangle(-110.9,-11.1,687.1,822.3)];


(lib.magic_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pipe();
	this.instance.setTransform(393,134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// animation
	this.instance_1 = new lib.kolpak();
	this.instance_1.setTransform(398,430);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// animation
	this.instance_2 = new lib.magic();
	this.instance_2.setTransform(396,402,1.213,1.213,0,0,0,75,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},89).wait(1));

	// animation
	this.instance_3 = new lib.neud();
	this.instance_3.setTransform(397,408.4,1,1,0,0,0,58.5,74.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({_off:true},81).wait(1));

	// animation
	this.instance_4 = new lib.table();
	this.instance_4.setTransform(399,520.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(90));

	// animation
	this.instance_5 = new lib.hero_mc();
	this.instance_5.setTransform(130,400,0.803,0.803);

	this.instance_6 = new lib.hero_1_2_mc();
	this.instance_6.setTransform(130,400,0.803,0.803);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},16).to({state:[{t:this.instance_5}]},73).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.9,-11.1,669.9,822.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.magic_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pipe();
	this.instance.setTransform(393,134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// animation
	this.instance_1 = new lib.kolpak();
	this.instance_1.setTransform(398,430);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// animation
	this.instance_2 = new lib.magic();
	this.instance_2.setTransform(396,402,1.213,1.213,0,0,0,75,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},89).wait(1));

	// animation
	this.instance_3 = new lib.neud();
	this.instance_3.setTransform(397,408.4,1,1,0,0,0,58.5,74.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({_off:true},81).wait(1));

	// animation
	this.instance_4 = new lib.table();
	this.instance_4.setTransform(399,520.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(90));

	// animation
	this.instance_5 = new lib.hero_mc();
	this.instance_5.setTransform(130,400,0.803,0.803);

	this.instance_6 = new lib.hero_2_2_mc();
	this.instance_6.setTransform(130,400,0.803,0.803);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},16).to({state:[{t:this.instance_5}]},73).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.9,-11.1,669.9,822.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.grif_head_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.grif_head_1();
	this.instance.setTransform(33,91,1,1,15,0,0,33,82);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:33.1,regY:81.9,rotation:4.8,x:33.1},29).to({regX:33,regY:82,rotation:15,x:33},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105.1,-120.6,254.9,247.8);
p.frameBounds = [rect, new cjs.Rectangle(-105.2,-119.7,253.6,246.4), new cjs.Rectangle(-105.3,-119.4,252.9,245.6), new cjs.Rectangle(-105.4,-118.6,251.8,244.4), new cjs.Rectangle(-105.4,-118.2,251.1,243.6), new cjs.Rectangle(-105.6,-117.5,249.9,242.3), new cjs.Rectangle(-105.7,-117,249.2,241.6), new cjs.Rectangle(-105.7,-116.6,248.5,240.8), new cjs.Rectangle(-105.8,-115.8,247.2,239.5), new cjs.Rectangle(-105.9,-115.3,246.5,238.7), new cjs.Rectangle(-106,-114.5,245.3,237.4), new cjs.Rectangle(-106,-114,244.5,236.6), new cjs.Rectangle(-106,-113.6,243.8,235.8), new cjs.Rectangle(-106.1,-112.7,242.5,234.4), new cjs.Rectangle(-106.1,-112.2,241.7,233.6), new cjs.Rectangle(-106.2,-111.4,240.5,232.2), new cjs.Rectangle(-106.2,-110.9,239.7,231.3), new cjs.Rectangle(-106.2,-110.3,238.9,230.5), new cjs.Rectangle(-106.3,-109.5,237.6,229.1), new cjs.Rectangle(-106.3,-109,236.8,228.2), new cjs.Rectangle(-106.3,-108.1,235.4,226.8), new cjs.Rectangle(-106.3,-107.5,234.6,225.9), new cjs.Rectangle(-106.3,-107,233.7,225), new cjs.Rectangle(-106.3,-106.1,232.3,223.5), new cjs.Rectangle(-106.3,-105.5,231.5,222.7), new cjs.Rectangle(-106.3,-104.6,230.1,221.1), new cjs.Rectangle(-106.2,-104,229.3,220.2), new cjs.Rectangle(-106.2,-103.4,228.4,219.3), new cjs.Rectangle(-106.2,-102.4,227,217.8), new cjs.Rectangle(-106.3,-102,226.4,217.1), new cjs.Rectangle(-106.2,-102.4,226.9,217.8), new cjs.Rectangle(-106.2,-103,227.8,218.7), new cjs.Rectangle(-106.3,-104,229.2,220.2), new cjs.Rectangle(-106.3,-104.5,230.1,221.1), new cjs.Rectangle(-106.3,-105.5,231.5,222.6), new cjs.Rectangle(-106.3,-106,232.3,223.5), new cjs.Rectangle(-106.3,-106.6,233.1,224.4), new cjs.Rectangle(-106.4,-107.5,234.5,225.8), new cjs.Rectangle(-106.4,-108,235.3,226.7), new cjs.Rectangle(-106.3,-108.6,236.1,227.6), new cjs.Rectangle(-106.3,-109.4,237.4,229), new cjs.Rectangle(-106.3,-110,238.2,229.8), new cjs.Rectangle(-106.3,-110.5,239,230.7), new cjs.Rectangle(-106.2,-111.3,240.3,232.1), new cjs.Rectangle(-106.2,-111.8,241.1,232.9), new cjs.Rectangle(-106.1,-112.3,241.8,233.7), new cjs.Rectangle(-106.1,-113.1,243.1,235.1), new cjs.Rectangle(-106.1,-113.6,243.9,235.9), new cjs.Rectangle(-106,-114.5,245.1,237.2), new cjs.Rectangle(-106,-114.9,245.9,238), new cjs.Rectangle(-105.9,-115.4,246.6,238.8), new cjs.Rectangle(-105.8,-116.1,247.8,240.1), new cjs.Rectangle(-105.7,-116.6,248.5,240.9), new cjs.Rectangle(-105.7,-117.1,249.2,241.7), new cjs.Rectangle(-105.5,-117.8,250.4,242.9), new cjs.Rectangle(-105.5,-118.2,251.1,243.7), new cjs.Rectangle(-105.4,-118.7,251.8,244.4), new cjs.Rectangle(-105.3,-119.4,252.9,245.6), new cjs.Rectangle(-105.3,-119.7,253.6,246.4), new cjs.Rectangle(-105.1,-120.6,254.9,247.8)];


(lib.feniks_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.feniks();
	this.instance.setTransform(-35.4,75.5,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:43.5},24).to({y:75.5},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-189.5,-206.9,379.1,414);
p.frameBounds = [rect, new cjs.Rectangle(-189.5,-208.3,379.1,414), new cjs.Rectangle(-189.5,-209.6,379.1,414), new cjs.Rectangle(-189.5,-211,379.1,414), new cjs.Rectangle(-189.5,-212.3,379.1,414), new cjs.Rectangle(-189.5,-213.6,379.1,414), new cjs.Rectangle(-189.5,-215,379.1,414), new cjs.Rectangle(-189.5,-216.3,379.1,414), new cjs.Rectangle(-189.5,-217.6,379.1,414), new cjs.Rectangle(-189.5,-219,379.1,414), new cjs.Rectangle(-189.5,-220.3,379.1,414), new cjs.Rectangle(-189.5,-221.6,379.1,414), new cjs.Rectangle(-189.5,-223,379.1,414), new cjs.Rectangle(-189.5,-224.3,379.1,414), new cjs.Rectangle(-189.5,-225.6,379.1,414), new cjs.Rectangle(-189.5,-227,379.1,414), new cjs.Rectangle(-189.5,-228.3,379.1,414), new cjs.Rectangle(-189.5,-229.6,379.1,414), new cjs.Rectangle(-189.5,-231,379.1,414), new cjs.Rectangle(-189.5,-232.3,379.1,414), new cjs.Rectangle(-189.5,-233.6,379.1,414), new cjs.Rectangle(-189.5,-235,379.1,414), new cjs.Rectangle(-189.5,-236.3,379.1,414), new cjs.Rectangle(-189.5,-237.6,379.1,414), new cjs.Rectangle(-189.5,-238.9,379.1,414), new cjs.Rectangle(-189.5,-237.7,379.1,414), new cjs.Rectangle(-189.5,-236.4,379.1,414), new cjs.Rectangle(-189.5,-235.1,379.1,414), new cjs.Rectangle(-189.5,-233.9,379.1,414), new cjs.Rectangle(-189.5,-232.6,379.1,414), new cjs.Rectangle(-189.5,-231.3,379.1,414), new cjs.Rectangle(-189.5,-230,379.1,414), new cjs.Rectangle(-189.5,-228.7,379.1,414), new cjs.Rectangle(-189.5,-227.5,379.1,414), new cjs.Rectangle(-189.5,-226.2,379.1,414), new cjs.Rectangle(-189.5,-224.9,379.1,414), new cjs.Rectangle(-189.5,-223.6,379.1,414), new cjs.Rectangle(-189.5,-222.3,379.1,414), new cjs.Rectangle(-189.5,-221.1,379.1,414), new cjs.Rectangle(-189.5,-219.8,379.1,414), new cjs.Rectangle(-189.5,-218.5,379.1,414), new cjs.Rectangle(-189.5,-217.2,379.1,414), new cjs.Rectangle(-189.5,-215.9,379.1,414), new cjs.Rectangle(-189.5,-214.7,379.1,414), new cjs.Rectangle(-189.5,-213.4,379.1,414), new cjs.Rectangle(-189.5,-212.1,379.1,414), new cjs.Rectangle(-189.5,-210.8,379.1,414), new cjs.Rectangle(-189.5,-209.5,379.1,414), new cjs.Rectangle(-189.5,-208.3,379.1,414), new cjs.Rectangle(-189.5,-206.9,379.1,414)];


(lib.com_text3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.colba2();
	this.instance.setTransform(46.3,20.3);

	this.instance_1 = new lib.colba1();
	this.instance_1.setTransform(-49.9,28.4);

	this.instance_2 = new lib.think_img();
	this.instance_2.setTransform(-32.6,-57.9,0.62,0.62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_3 = new lib.comics_text1_img();
	this.instance_3.setTransform(-120.5,-112);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.5,-112,241,224);
p.frameBounds = [rect];


(lib.butterfly_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.butterfly();
	this.instance.setTransform(0,0,0.615,0.615);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-11},14).to({y:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-132.5,-97.7,265.2,195.5);
p.frameBounds = [rect, new cjs.Rectangle(-132.5,-98.5,265.1,195.5), new cjs.Rectangle(-132.5,-99.2,265.1,195.5), new cjs.Rectangle(-132.5,-100,265.1,195.5), new cjs.Rectangle(-132.5,-100.8,265.1,195.5), new cjs.Rectangle(-132.5,-101.6,265.1,195.5), new cjs.Rectangle(-132.5,-102.4,265.1,195.5), new cjs.Rectangle(-132.5,-103.2,265.1,195.5), new cjs.Rectangle(-132.5,-104,265.1,195.5), new cjs.Rectangle(-132.5,-104.7,265.1,195.5), new cjs.Rectangle(-132.5,-105.5,265.1,195.5), new cjs.Rectangle(-132.5,-106.3,265.1,195.5), new cjs.Rectangle(-132.5,-107.1,265.1,195.5), new cjs.Rectangle(-132.5,-107.9,265.1,195.5), new cjs.Rectangle(-132.5,-108.7,265.2,195.5), new cjs.Rectangle(-132.5,-107.9,265.1,195.5), new cjs.Rectangle(-132.5,-107.2,265.1,195.5), new cjs.Rectangle(-132.5,-106.4,265.1,195.5), new cjs.Rectangle(-132.5,-105.7,265.1,195.5), new cjs.Rectangle(-132.5,-105,265.1,195.5), new cjs.Rectangle(-132.5,-104.2,265.1,195.5), new cjs.Rectangle(-132.5,-103.5,265.1,195.5), new cjs.Rectangle(-132.5,-102.8,265.1,195.5), new cjs.Rectangle(-132.5,-102,265.1,195.5), new cjs.Rectangle(-132.5,-101.3,265.1,195.5), new cjs.Rectangle(-132.5,-100.6,265.1,195.5), new cjs.Rectangle(-132.5,-99.8,265.1,195.5), new cjs.Rectangle(-132.5,-99.1,265.1,195.5), new cjs.Rectangle(-132.5,-98.4,265.1,195.5), new cjs.Rectangle(-132.5,-97.7,265.2,195.5)];


(lib.background_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.animation_lightbulb_mc();
	this.instance.setTransform(1130,57);

	this.instance_1 = new lib.animation_lightbulb_mc();
	this.instance_1.setTransform(-320,58);

	this.instance_2 = new lib.animation_lightbulb_mc();
	this.instance_2.setTransform(495,58);

	this.instance_3 = new lib.animation_lightbulb_mc();
	this.instance_3.setTransform(315,58);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_4 = new lib.background_1_img();
	this.instance_4.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.CurtainScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.curtain_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1600,0,4000,600);
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
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
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
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
p.frameBounds = [rect];


(lib.PreloaderScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_mc = new lib.preloader_5_mc();
	this.logo_mc.setTransform(400,240);

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
	this.remove_btn.setTransform(600,500);
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

	this.ar = new lib.language_ar_mc();
	this.ar.setTransform(400,950);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ar},{t:this.hi},{t:this.id},{t:this.it},{t:this.zh},{t:this.ja}]}).wait(1));

	// bg
	this.instance = new lib.languages_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,1165);
p.frameBounds = [rect];


(lib.products_progress_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// products
	this.product_14_mc = new lib.product_progress_14_mc();
	this.product_14_mc.setTransform(160,165,0.5,0.5);

	this.product_13_mc = new lib.product_progress_13_mc();
	this.product_13_mc.setTransform(0,165,0.5,0.5);

	this.product_12_mc = new lib.product_progress_12_mc();
	this.product_12_mc.setTransform(-160,165,0.5,0.5);

	this.product_11_mc = new lib.product_progress_11_mc();
	this.product_11_mc.setTransform(-320,165,0.5,0.5);

	this.product_10_mc = new lib.product_progress_10_mc();
	this.product_10_mc.setTransform(320,0,0.5,0.5);

	this.product_9_mc = new lib.product_progress_9_mc();
	this.product_9_mc.setTransform(160,0,0.5,0.5);

	this.product_8_mc = new lib.product_progress_8_mc();
	this.product_8_mc.setTransform(0,0,0.5,0.5);

	this.product_7_mc = new lib.product_progress_7_mc();
	this.product_7_mc.setTransform(-160,0,0.5,0.5);

	this.product_6_mc = new lib.product_progress_6_mc();
	this.product_6_mc.setTransform(-320,0,0.5,0.5);

	this.product_5_mc = new lib.product_progress_5_mc();
	this.product_5_mc.setTransform(320,-165,0.5,0.5);

	this.product_4_mc = new lib.product_progress_4_mc();
	this.product_4_mc.setTransform(160,-165,0.5,0.5);

	this.product_3_mc = new lib.product_progress_3_mc();
	this.product_3_mc.setTransform(0,-165,0.5,0.5);

	this.product_2_mc = new lib.product_progress_2_mc();
	this.product_2_mc.setTransform(-160,-165,0.5,0.5);

	this.product_1_mc = new lib.product_progress_1_mc();
	this.product_1_mc.setTransform(-320,-165,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.product_1_mc},{t:this.product_2_mc},{t:this.product_3_mc},{t:this.product_4_mc},{t:this.product_5_mc},{t:this.product_6_mc},{t:this.product_7_mc},{t:this.product_8_mc},{t:this.product_9_mc},{t:this.product_10_mc},{t:this.product_11_mc},{t:this.product_12_mc},{t:this.product_13_mc},{t:this.product_14_mc}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-415,-260,830,520);
p.frameBounds = [rect];


(lib.magic_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pipe();
	this.instance.setTransform(393,134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({y:-472.4},32).to({_off:true},1).wait(51));

	// animation
	this.instance_1 = new lib.kolpak();
	this.instance_1.setTransform(398,430);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({y:-176.9},32).to({_off:true},1).wait(51));

	// animation
	this.instance_2 = new lib.magic();
	this.instance_2.setTransform(396,402,1.213,1.213,0,0,0,75,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},21).wait(89));

	// animation
	this.instance_3 = new lib.egg6_1();
	this.instance_3.setTransform(395,484.4,1,1,0,0,0,0,80);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).to({regX:-0.1,rotation:-66.7,x:394.9,alpha:0.012},20).to({_off:true},1).wait(30));

	// animation
	this.instance_4 = new lib.egg6_2();
	this.instance_4.setTransform(393,482.4,1,1,0,0,0,-2,78);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59).to({_off:false},0).to({rotation:58.2,x:392.9,y:482.5,alpha:0.012},20).to({_off:true},1).wait(30));

	// animation
	this.instance_5 = new lib.butterfly();
	this.instance_5.setTransform(402,402,0.36,0.36);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.instance_6 = new lib.butterfly_a();
	this.instance_6.setTransform(399,261);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},59).to({state:[{t:this.instance_5}]},20).to({state:[{t:this.instance_5}]},29).to({state:[{t:this.instance_6}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59).to({_off:false},0).to({alpha:1},20).to({scaleX:0.62,scaleY:0.62,x:399,y:261},29).to({_off:true,scaleX:1,scaleY:1},1).wait(1));

	// animation
	this.instance_7 = new lib.egg6();
	this.instance_7.setTransform(393,404);
	this.instance_7.alpha = 0.012;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).to({alpha:1},18).wait(38).to({_off:true},1).wait(51));

	// animation
	this.instance_8 = new lib.table();
	this.instance_8.setTransform(399,520.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(110));

	// animation
	this.instance_9 = new lib.hero_mc();
	this.instance_9.setTransform(130,400,0.803,0.803);

	this.instance_10 = new lib.hero_mc3();
	this.instance_10.setTransform(130,400,0.803,0.803);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_10}]},60).to({state:[{t:this.instance_9}]},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.9,-11.1,669.9,822.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110.9,-18.9,669.9,830.1), new cjs.Rectangle(-110.9,-37.9,669.9,849.1), new cjs.Rectangle(-110.9,-56.9,669.9,868.1), new cjs.Rectangle(-110.9,-75.8,669.9,887), new cjs.Rectangle(-110.9,-94.8,669.9,906), new cjs.Rectangle(-110.9,-113.8,669.9,925), new cjs.Rectangle(-110.9,-132.7,669.9,943.9), new cjs.Rectangle(-110.9,-151.7,669.9,962.9), new cjs.Rectangle(-110.9,-170.7,669.9,981.9), new cjs.Rectangle(-110.9,-189.6,669.9,1000.8), new cjs.Rectangle(-110.9,-208.6,669.9,1019.8), new cjs.Rectangle(-110.9,-227.6,669.9,1038.8), new cjs.Rectangle(-110.9,-246.5,669.9,1057.7), new cjs.Rectangle(-110.9,-265.5,669.9,1076.7), new cjs.Rectangle(-110.9,-284.5,669.9,1095.7), new cjs.Rectangle(-110.9,-303.4,669.9,1114.6), new cjs.Rectangle(-110.9,-322.4,669.9,1133.6), new cjs.Rectangle(-110.9,-341.4,669.9,1152.6), new cjs.Rectangle(-110.9,-360.4,669.9,1171.6), new cjs.Rectangle(-110.9,-379.3,669.9,1190.5), new cjs.Rectangle(-110.9,-398.3,669.9,1209.5), new cjs.Rectangle(-110.9,-417.3,669.9,1228.5), new cjs.Rectangle(-110.9,-436.2,669.9,1247.4), new cjs.Rectangle(-110.9,-455.2,669.9,1266.4), new cjs.Rectangle(-110.9,-474.2,669.9,1285.4), new cjs.Rectangle(-110.9,-493.1,669.9,1304.3), new cjs.Rectangle(-110.9,-512.1,669.9,1323.3), new cjs.Rectangle(-110.9,-531.1,669.9,1342.3), new cjs.Rectangle(-110.9,-550,669.9,1361.2), new cjs.Rectangle(-110.9,-569,669.9,1380.2), new cjs.Rectangle(-110.9,-588,669.9,1399.2), new cjs.Rectangle(-110.9,-606.9,669.9,1418.1), rect=new cjs.Rectangle(-110.9,-11.1,665.4,822.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110.9,-11.1,666.9,822.3), new cjs.Rectangle(-110.9,-11.1,669.6,822.3), new cjs.Rectangle(-110.9,-11.1,672,822.3), new cjs.Rectangle(-110.9,-11.1,674.1,822.3), new cjs.Rectangle(-110.9,-11.1,675.9,822.3), rect=new cjs.Rectangle(-110.9,-11.1,665.4,822.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.magic_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.pipe();
	this.instance.setTransform(393,134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({y:-472.4},32).to({_off:true},1).wait(51));

	// animation
	this.instance_1 = new lib.kolpak();
	this.instance_1.setTransform(398,430);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({y:-176.9},32).to({_off:true},1).wait(51));

	// animation
	this.instance_2 = new lib.magic();
	this.instance_2.setTransform(396,402,1.213,1.213,0,0,0,75,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},21).wait(89));

	// animation
	this.instance_3 = new lib.egg5_1();
	this.instance_3.setTransform(396,485,1,1,0,0,0,2,91);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).to({rotation:-68.8,x:395.9,y:485.1,alpha:0.012},20).to({_off:true},1).wait(30));

	// animation
	this.instance_4 = new lib.egg5_2();
	this.instance_4.setTransform(395,481,1,1,0,0,0,1,87);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59).to({_off:false},0).to({rotation:74.5,x:394.9,alpha:0.012},20).to({_off:true},1).wait(30));

	// animation
	this.instance_5 = new lib.feniks();
	this.instance_5.setTransform(394,431.4,0.256,0.256);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.instance_6 = new lib.feniks_a();
	this.instance_6.setTransform(424.4,234);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},59).to({state:[{t:this.instance_5}]},20).to({state:[{t:this.instance_5}]},29).to({state:[{t:this.instance_6}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59).to({_off:false},0).to({alpha:1},20).to({scaleX:0.86,scaleY:0.86,x:389,y:309.4},29).to({_off:true,scaleX:1,scaleY:1,x:424.4,y:234},1).wait(1));

	// animation
	this.instance_7 = new lib.egg5();
	this.instance_7.setTransform(393,404);
	this.instance_7.alpha = 0.012;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).to({alpha:1},18).wait(38).to({_off:true},1).wait(51));

	// animation
	this.instance_8 = new lib.table();
	this.instance_8.setTransform(399,520.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(110));

	// animation
	this.instance_9 = new lib.hero_mc();
	this.instance_9.setTransform(130,400,0.803,0.803);

	this.instance_10 = new lib.hero_mc3();
	this.instance_10.setTransform(130,400,0.803,0.803);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_10}]},60).to({state:[{t:this.instance_9}]},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.9,-11.1,669.9,822.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110.9,-18.9,669.9,830.1), new cjs.Rectangle(-110.9,-37.9,669.9,849.1), new cjs.Rectangle(-110.9,-56.9,669.9,868.1), new cjs.Rectangle(-110.9,-75.8,669.9,887), new cjs.Rectangle(-110.9,-94.8,669.9,906), new cjs.Rectangle(-110.9,-113.8,669.9,925), new cjs.Rectangle(-110.9,-132.7,669.9,943.9), new cjs.Rectangle(-110.9,-151.7,669.9,962.9), new cjs.Rectangle(-110.9,-170.7,669.9,981.9), new cjs.Rectangle(-110.9,-189.6,669.9,1000.8), new cjs.Rectangle(-110.9,-208.6,669.9,1019.8), new cjs.Rectangle(-110.9,-227.6,669.9,1038.8), new cjs.Rectangle(-110.9,-246.5,669.9,1057.7), new cjs.Rectangle(-110.9,-265.5,669.9,1076.7), new cjs.Rectangle(-110.9,-284.5,669.9,1095.7), new cjs.Rectangle(-110.9,-303.4,669.9,1114.6), new cjs.Rectangle(-110.9,-322.4,669.9,1133.6), new cjs.Rectangle(-110.9,-341.4,669.9,1152.6), new cjs.Rectangle(-110.9,-360.4,669.9,1171.6), new cjs.Rectangle(-110.9,-379.3,669.9,1190.5), new cjs.Rectangle(-110.9,-398.3,669.9,1209.5), new cjs.Rectangle(-110.9,-417.3,669.9,1228.5), new cjs.Rectangle(-110.9,-436.2,669.9,1247.4), new cjs.Rectangle(-110.9,-455.2,669.9,1266.4), new cjs.Rectangle(-110.9,-474.2,669.9,1285.4), new cjs.Rectangle(-110.9,-493.1,669.9,1304.3), new cjs.Rectangle(-110.9,-512.1,669.9,1323.3), new cjs.Rectangle(-110.9,-531.1,669.9,1342.3), new cjs.Rectangle(-110.9,-550,669.9,1361.2), new cjs.Rectangle(-110.9,-569,669.9,1380.2), new cjs.Rectangle(-110.9,-588,669.9,1399.2), new cjs.Rectangle(-110.9,-606.9,669.9,1418.1), rect=new cjs.Rectangle(-110.9,-11.1,665.4,822.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110.9,-11.1,670.2,822.3), new cjs.Rectangle(-110.9,-11.1,675.3,822.3), new cjs.Rectangle(-110.9,-11.1,679.6,822.3), new cjs.Rectangle(-110.9,-11.1,683.2,822.3), new cjs.Rectangle(-110.9,-11.1,686.1,822.3), new cjs.Rectangle(-110.9,-11.1,688.1,822.3), new cjs.Rectangle(-110.9,-11.1,689.4,822.3), rect=new cjs.Rectangle(-110.9,-11.1,689.9,822.3), rect, rect=new cjs.Rectangle(-110.9,-11.1,665.4,822.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110.9,-11.1,666.9,822.3), new cjs.Rectangle(-110.9,-11.1,672.2,822.3), new cjs.Rectangle(-110.9,-11.1,677.4,822.3), new cjs.Rectangle(-110.9,-11.1,682.8,822.3), new cjs.Rectangle(-110.9,-11.1,688,822.3), new cjs.Rectangle(-110.9,-11.1,693.3,822.3), new cjs.Rectangle(-110.9,-11.1,698.4,822.3), new cjs.Rectangle(-110.9,-11.1,703.8,822.3), new cjs.Rectangle(-110.9,-11.1,709,822.3), new cjs.Rectangle(-110.9,-11.1,714.3,822.3), new cjs.Rectangle(-110.9,-11.1,719.6,822.3), rect=new cjs.Rectangle(-110.9,-11.1,724.9,822.3), rect];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.spiked_pony();
	this.instance.setTransform(95,467,0.926,0.926,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.night_shadow();
	this.instance_1.setTransform(575,448,1.227,1.227);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.butterfly_a();
	this.instance_2.setTransform(130,218,0.821,0.821);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.elsa_main();
	this.instance_3.setTransform(341.2,377.2,0.807,0.807,0,0,0,1.5,-15.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-149.1,-23.4,948.9,826.8);
p.frameBounds = [rect];


(lib.grifon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// grif_eye1
	this.instance = new lib.grif_head_2();
	this.instance.setTransform(6.3,-98.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// grif_wing1
	this.instance_1 = new lib.grif_wing_2();
	this.instance_1.setTransform(-118.8,29);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// grif_leg
	this.instance_2 = new lib.grif_leg();
	this.instance_2.setTransform(31.3,85.8,1,1,0,0,0,-10,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// grif_body
	this.instance_3 = new lib.grif_body();
	this.instance_3.setTransform(-4.3,79.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// grif_tale
	this.instance_4 = new lib.grif_tale_2();
	this.instance_4.setTransform(-172.1,119.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// grif_leg
	this.instance_5 = new lib.grif_leg();
	this.instance_5.setTransform(67.3,77.7,1,1,-7,0,0,-10,-50.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// grif_wing1
	this.instance_6 = new lib.grif_wing_2();
	this.instance_6.setTransform(51.1,40.2,1,1,0,-30,150,108,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-271.9,-219.3,544,418.1);
p.frameBounds = [rect];


(lib.comics3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		try
		{
			app.addSoundFunc("message_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(86));

	// animation
	this.instance = new lib.com_text3();
	this.instance.setTransform(532.8,178.3,0.419,0.419);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},19).wait(52));

	// animation
	this.instance_1 = new lib.c3();
	this.instance_1.setTransform(687.3,2);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:510.3,alpha:1},10).wait(80));

	// animation
	this.instance_2 = new lib.com_text1();
	this.instance_2.setTransform(-16.5,182.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

	// animation
	this.instance_3 = new lib.lamp_idea2();
	this.instance_3.setTransform(255,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90));

	// animation
	this.instance_4 = new lib.lamp_idea();
	this.instance_4.setTransform(255,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(90));

	// animation
	this.instance_5 = new lib.c2();
	this.instance_5.setTransform(262.9,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(90));

	// animation
	this.instance_6 = new lib.c1();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-139,-236,971.3,530.3);
p.frameBounds = [rect, new cjs.Rectangle(-139,-236,953.6,530.3), new cjs.Rectangle(-139,-236,935.9,530.3), new cjs.Rectangle(-139,-236,918.2,530.3), new cjs.Rectangle(-139,-236,900.5,530.3), new cjs.Rectangle(-139,-236,882.8,530.3), new cjs.Rectangle(-139,-236,865.1,530.3), new cjs.Rectangle(-139,-236,847.4,530.3), new cjs.Rectangle(-139,-236,829.7,530.3), new cjs.Rectangle(-139,-236,812,530.3), rect=new cjs.Rectangle(-139,-236,794.3,530.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.cartoons_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.frame_1_mc = new lib.comics1();
	this.frame_1_mc.setTransform(142,300.9);

	this.frame_2_mc = new lib.comics2();
	this.frame_2_mc.setTransform(142,300.9);

	this.frame_3_mc = new lib.comics3();
	this.frame_3_mc.setTransform(142,300.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-249,64.9,278,471);
p.frameBounds = [rect, new cjs.Rectangle(3,64.9,595.9,708.4), new cjs.Rectangle(3,64.9,971.3,530.3)];


(lib.Bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_3_mc();
	this.instance.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-15,30,30);
p.frameBounds = [rect];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":109});

	// timeline functions:
	this.frame_41 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(41).call(this.frame_41).wait(69));

	// play_btn
	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(710,700);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).wait(39).to({scaleX:0.63,scaleY:0.63,y:660},0).to({scaleX:1,scaleY:1,y:450},8).to({y:510},7).wait(5).to({scaleX:0.81,scaleY:0.81},5).to({scaleX:1,scaleY:1},10).to({scaleX:0.94,scaleY:0.94,y:460},5).to({scaleX:0.63,scaleY:0.63,y:660},10).wait(21));

	// btn
	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(400.5,700.5,0.75,0.75,0,0,0,0.7,0.7);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,920);
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

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.social_network_mc}]}).wait(110));

	// title
	this.instance = new lib.animation_title_mc();
	this.instance.setTransform(590,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({rotation:10,y:250},13).to({rotation:0,y:150},7).wait(76));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(0,400);
	this.instance_1.alpha = 0.398;
	this.instance_1.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(110));

	// heroes
	this.instance_2 = new lib.heroes_0_mc();
	this.instance_2.setTransform(400,395.9,1,1,0,0,0,400,395.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(110));

	// bg
	this.instance_3 = new lib.background_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1281.9);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,-270,1600,1271), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1281.9), rect=new cjs.Rectangle(-400,-270,1600,1271), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1281.9), rect=new cjs.Rectangle(-400,-270,1600,1271), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1281.9), rect=new cjs.Rectangle(-400,-270,1600,1271), rect, new cjs.Rectangle(-400,-241.7,1600,1242.7), new cjs.Rectangle(-400,-280.8,1600,1281.9), new cjs.Rectangle(-400,-185,1600,1186.1), new cjs.Rectangle(-400,-156.7,1600,1157.7), new cjs.Rectangle(-400,-128.4,1600,1129.4), new cjs.Rectangle(-400,-280.8,1600,1281.9), rect=new cjs.Rectangle(-400,-90,1600,1091), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1281.9), rect=new cjs.Rectangle(-400,-90,1600,1091), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1281.9), rect=new cjs.Rectangle(-400,-90,1600,1091), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1281.9), rect=new cjs.Rectangle(-400,-90,1600,1091), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1281.9), rect=new cjs.Rectangle(-400,-90,1600,1091), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1281.9), rect=new cjs.Rectangle(-400,-90,1600,1091), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1281.9), rect=new cjs.Rectangle(-400,-90,1600,1091), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1281.9), rect=new cjs.Rectangle(-400,-90,1600,1091), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1281.9), rect=new cjs.Rectangle(-400,-90,1600,1091), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1281.9), rect=new cjs.Rectangle(-400,-90,1600,1091), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1281.9), rect=new cjs.Rectangle(-400,-90,1600,1091), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1281.9), rect=new cjs.Rectangle(-400,-90,1600,1091), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1281.9), rect=new cjs.Rectangle(-400,-90,1600,1091), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1281.9), rect=new cjs.Rectangle(-400,-90,1600,1091), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1281.9), rect=new cjs.Rectangle(-400,-90,1600,1091), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1281.9), rect=new cjs.Rectangle(-400,-90,1600,1091), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1281.9), rect=new cjs.Rectangle(-400,-90,1600,1091), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1281.9), rect=new cjs.Rectangle(-400,-90,1600,1091), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1281.9), rect=new cjs.Rectangle(-400,-90,1600,1091), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1281.9), rect=new cjs.Rectangle(-400,-90,1600,1091), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1281.9), rect=new cjs.Rectangle(-400,-90,1600,1091), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1281.9), rect=new cjs.Rectangle(-400,-90,1600,1091), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1281.9), new cjs.Rectangle(-400,-90,1600,1091)];


(lib.magic_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pipe();
	this.instance.setTransform(393,134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({y:-472.4},32).to({_off:true},1).wait(51));

	// animation
	this.instance_1 = new lib.kolpak();
	this.instance_1.setTransform(398,430);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({y:-176.9},32).to({_off:true},1).wait(51));

	// animation
	this.instance_2 = new lib.magic();
	this.instance_2.setTransform(396,402,1.213,1.213,0,0,0,75,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},21).wait(89));

	// animation
	this.instance_3 = new lib.egg7_1();
	this.instance_3.setTransform(394,483.9,1,1,0,0,0,-1,77);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).to({rotation:-67.2,y:484,alpha:0.012},20).to({_off:true},1).wait(30));

	// animation
	this.instance_4 = new lib.egg7_2();
	this.instance_4.setTransform(396,484.9,1,1,0,0,0,1,78);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59).to({_off:false},0).to({rotation:68.7,alpha:0.012},20).to({_off:true},1).wait(30));

	// animation
	this.instance_5 = new lib.grifon();
	this.instance_5.setTransform(399.9,414.4,0.302,0.302);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59).to({_off:false},0).to({alpha:1},20).to({scaleX:0.63,scaleY:0.63,x:421.9,y:365.4},30).wait(1));

	// animation
	this.instance_6 = new lib.egg7();
	this.instance_6.setTransform(393,404);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({alpha:1},18).wait(38).to({_off:true},1).wait(51));

	// animation
	this.instance_7 = new lib.table();
	this.instance_7.setTransform(399,520.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(110));

	// animation
	this.instance_8 = new lib.hero_mc();
	this.instance_8.setTransform(130,400,0.803,0.803);

	this.instance_9 = new lib.hero_mc3();
	this.instance_9.setTransform(130,400,0.803,0.803);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},60).to({state:[{t:this.instance_8}]},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.9,-11.1,669.9,822.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110.9,-18.9,669.9,830.1), new cjs.Rectangle(-110.9,-37.9,669.9,849.1), new cjs.Rectangle(-110.9,-56.9,669.9,868.1), new cjs.Rectangle(-110.9,-75.8,669.9,887), new cjs.Rectangle(-110.9,-94.8,669.9,906), new cjs.Rectangle(-110.9,-113.8,669.9,925), new cjs.Rectangle(-110.9,-132.7,669.9,943.9), new cjs.Rectangle(-110.9,-151.7,669.9,962.9), new cjs.Rectangle(-110.9,-170.7,669.9,981.9), new cjs.Rectangle(-110.9,-189.6,669.9,1000.8), new cjs.Rectangle(-110.9,-208.6,669.9,1019.8), new cjs.Rectangle(-110.9,-227.6,669.9,1038.8), new cjs.Rectangle(-110.9,-246.5,669.9,1057.7), new cjs.Rectangle(-110.9,-265.5,669.9,1076.7), new cjs.Rectangle(-110.9,-284.5,669.9,1095.7), new cjs.Rectangle(-110.9,-303.4,669.9,1114.6), new cjs.Rectangle(-110.9,-322.4,669.9,1133.6), new cjs.Rectangle(-110.9,-341.4,669.9,1152.6), new cjs.Rectangle(-110.9,-360.4,669.9,1171.6), new cjs.Rectangle(-110.9,-379.3,669.9,1190.5), new cjs.Rectangle(-110.9,-398.3,669.9,1209.5), new cjs.Rectangle(-110.9,-417.3,669.9,1228.5), new cjs.Rectangle(-110.9,-436.2,669.9,1247.4), new cjs.Rectangle(-110.9,-455.2,669.9,1266.4), new cjs.Rectangle(-110.9,-474.2,669.9,1285.4), new cjs.Rectangle(-110.9,-493.1,669.9,1304.3), new cjs.Rectangle(-110.9,-512.1,669.9,1323.3), new cjs.Rectangle(-110.9,-531.1,669.9,1342.3), new cjs.Rectangle(-110.9,-550,669.9,1361.2), new cjs.Rectangle(-110.9,-569,669.9,1380.2), new cjs.Rectangle(-110.9,-588,669.9,1399.2), new cjs.Rectangle(-110.9,-606.9,669.9,1418.1), rect=new cjs.Rectangle(-110.9,-11.1,665.4,822.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110.9,-11.1,667.4,822.3), new cjs.Rectangle(-110.9,-11.1,669.9,822.3), new cjs.Rectangle(-110.9,-11.1,671.9,822.3), new cjs.Rectangle(-110.9,-11.1,673.3,822.3), new cjs.Rectangle(-110.9,-11.1,674.2,822.3), new cjs.Rectangle(-110.9,-11.1,674.7,822.3), rect=new cjs.Rectangle(-110.9,-11.1,665.4,822.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110.9,-11.1,666.8,822.3), new cjs.Rectangle(-110.9,-11.1,670.5,822.3), new cjs.Rectangle(-110.9,-11.1,674.2,822.3), new cjs.Rectangle(-110.9,-11.1,677.9,822.3), new cjs.Rectangle(-110.9,-11.1,681.6,822.3), new cjs.Rectangle(-110.9,-11.1,685.3,822.3), new cjs.Rectangle(-110.9,-11.1,688.9,822.3), new cjs.Rectangle(-110.9,-11.1,692.7,822.3), new cjs.Rectangle(-110.9,-11.1,696.4,822.3), new cjs.Rectangle(-110.9,-11.1,700.1,822.3), new cjs.Rectangle(-110.9,-11.1,703.9,822.3)];


(lib.heroes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.aquarium();
	this.instance.setTransform(400,440);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// graph
	this.instance_1 = new lib.butterfly_a();
	this.instance_1.setTransform(260,120,0.646,0.646);

	this.instance_2 = new lib.foxower();
	this.instance_2.setTransform(193.1,380.1,0.694,0.694,0,0,0,-10,0.1);

	this.instance_3 = new lib.night_shadow();
	this.instance_3.setTransform(550,330,0.943,0.943);

	this.instance_4 = new lib.medusa();
	this.instance_4.setTransform(350,460.4,0.517,0.517,0,0,0,0,68.5);

	this.instance_5 = new lib.gf();
	this.instance_5.setTransform(430,455,0.617,0.617);

	this.instance_6 = new lib.grifon();
	this.instance_6.setTransform(200,385.1,0.478,0.478,0,0,0,0,-10.4);

	this.instance_7 = new lib.dragon();
	this.instance_7.setTransform(640.7,343.1,0.7,0.7,0,0,0,1,-81.4);

	this.instance_8 = new lib.unicorn();
	this.instance_8.setTransform(353.3,248.6,0.705,0.705,0,0,0,-9.6,-44.6);

	this.instance_9 = new lib.flower_cat();
	this.instance_9.setTransform(560,350,0.562,0.562,4);

	this.instance_10 = new lib.feniks_a();
	this.instance_10.setTransform(260,200,0.647,0.647);

	this.instance_11 = new lib.spiked_pony();
	this.instance_11.setTransform(270,340,0.651,0.651,0,0,180);

	this.instance_12 = new lib.rainbowtale_a();
	this.instance_12.setTransform(500,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},1).to({state:[{t:this.instance_10},{t:this.instance_9}]},1).to({state:[{t:this.instance_12},{t:this.instance_11}]},1).wait(1));

	// bg
	this.instance_13 = new lib.background_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect, rect, rect, rect];


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
	this.instance = new lib.background_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1261.9);
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
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.magic_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"default":0,fail_1:1,fail_2:2,product_1:3,product_2:4,product_3:5,product_4:6,product_5:7,product_6:8,product_7:9,product_8:10,product_9:11,product_10:12,product_11:13,product_12:14,product_13:15,product_14:16});

	// animations
	this.body_1_mc = new lib.magic_1_mc();
	this.body_1_mc.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.body_2_mc = new lib.magic_2_mc();
	this.body_2_mc.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.body_3_mc = new lib.magic_2_2_mc();
	this.body_3_mc.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.body_4_mc = new lib.magic_3_mc();
	this.body_4_mc.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.body_5_mc = new lib.magic_4_mc();
	this.body_5_mc.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.body_6_mc = new lib.magic_5_mc();
	this.body_6_mc.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.body_7_mc = new lib.magic_6_mc();
	this.body_7_mc.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.body_8_mc = new lib.magic_7_mc();
	this.body_8_mc.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.body_9_mc = new lib.magic_8_mc();
	this.body_9_mc.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.body_10_mc = new lib.magic_9_mc();
	this.body_10_mc.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.body_11_mc = new lib.magic_10_mc();
	this.body_11_mc.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.body_12_mc = new lib.magic_11_mc();
	this.body_12_mc.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.body_13_mc = new lib.magic_12_mc();
	this.body_13_mc.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.body_14_mc = new lib.magic_13_mc();
	this.body_14_mc.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.body_15_mc = new lib.magic_14_mc();
	this.body_15_mc.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.body_16_mc = new lib.magic_15_mc();
	this.body_16_mc.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.body_17_mc = new lib.magic_16_mc();
	this.body_17_mc.setTransform(-1,0,1,1,0,0,0,-1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1_mc}]}).to({state:[{t:this.body_2_mc}]},1).to({state:[{t:this.body_3_mc}]},1).to({state:[{t:this.body_4_mc}]},1).to({state:[{t:this.body_5_mc}]},1).to({state:[{t:this.body_6_mc}]},1).to({state:[{t:this.body_7_mc}]},1).to({state:[{t:this.body_8_mc}]},1).to({state:[{t:this.body_9_mc}]},1).to({state:[{t:this.body_10_mc}]},1).to({state:[{t:this.body_11_mc}]},1).to({state:[{t:this.body_12_mc}]},1).to({state:[{t:this.body_13_mc}]},1).to({state:[{t:this.body_14_mc}]},1).to({state:[{t:this.body_15_mc}]},1).to({state:[{t:this.body_16_mc}]},1).to({state:[{t:this.body_17_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.9,-11.1,669.9,822.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_progress_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.title_mc = new lib.animation_achievement_mc();
	this.title_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.title_mc).wait(1));

	// products
	this.products_mc = new lib.products_progress_mc();
	this.products_mc.setTransform(158.1,304,1,1,0,0,0,-241.9,4);

	this.timeline.addTween(cjs.Tween.get(this.products_mc).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(200,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,675);
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
	this.mixer_mc.setTransform(400,430);

	this.timeline.addTween(cjs.Tween.get(this.mixer_mc).wait(1));

	// magic
	this.magic_mc = new lib.magic_mc();

	this.timeline.addTween(cjs.Tween.get(this.magic_mc).wait(1));

	// ingredients
	this.ingredient_10_mc = new lib.ingredient_10_mc();
	this.ingredient_10_mc.setTransform(730,128);

	this.ingredient_9_mc = new lib.ingredient_9_mc();
	this.ingredient_9_mc.setTransform(625,112);

	this.ingredient_8_mc = new lib.ingredient_8_mc();
	this.ingredient_8_mc.setTransform(766,214);

	this.ingredient_7_mc = new lib.ingredient_7_mc();
	this.ingredient_7_mc.setTransform(674,200);

	this.ingredient_6_mc = new lib.ingredient_6_mc();
	this.ingredient_6_mc.setTransform(725,420);

	this.ingredient_5_mc = new lib.ingredient_5_mc();
	this.ingredient_5_mc.setTransform(776.8,325.5);

	this.ingredient_4_mc = new lib.ingredient_4_mc();
	this.ingredient_4_mc.setTransform(642,307);

	this.ingredient_3_mc = new lib.ingredient_3_mc();
	this.ingredient_3_mc.setTransform(630,425);

	this.ingredient_2_mc = new lib.ingredient_2_mc();
	this.ingredient_2_mc.setTransform(558,211);

	this.ingredient_1_mc = new lib.ingredient_1_mc();
	this.ingredient_1_mc.setTransform(562,317);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ingredient_1_mc},{t:this.ingredient_2_mc},{t:this.ingredient_3_mc},{t:this.ingredient_4_mc},{t:this.ingredient_5_mc},{t:this.ingredient_6_mc},{t:this.ingredient_7_mc},{t:this.ingredient_8_mc},{t:this.ingredient_9_mc},{t:this.ingredient_10_mc}]}).wait(1));

	// decor
	this.instance = new lib.shelfs_mc();
	this.instance.setTransform(723,354);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(200,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-11.1,1620,855.2);
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
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.body_alchemy_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-280.8,1620,1261.9);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(220.5,700.5,0.75,0.75,0,0,0,0.7,0.7);

	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(450,550);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(350,550);

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
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

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
	this.instance.setTransform(0,400);
	this.instance.alpha = 0.398;
	this.instance.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_mc();

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-319.9,1600,1065);
p.frameBounds = [rect];


(lib.ProgressScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_mc_1();
	this.next_mc.setTransform(710,510);

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
	this.body_mc = new lib.body_progress_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// storage
	this.text = new cjs.Text("storage", "64px 'Arial'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 74;
	this.text.lineWidth = 252;
	this.text.setTransform(128.2,2);

	this.instance = new lib.PreloaderScreen();

	this.instance_1 = new lib.CopyrightScreen();

	this.instance_2 = new lib.LanguagesScreen();

	this.instance_3 = new lib.WelcomeScreen();

	this.instance_4 = new lib.CartoonScreen();

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AqwKxIAAAAIAA1hIVhAAIAAAA");
	this.shape.setTransform(608,237);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AqwKxIAA1hIVhAAIAAAAI1hAAIAAVhg");
	this.shape_1.setTransform(608,237);

	this.instance_5 = new lib.AlchemyScreen();

	this.instance_6 = new lib.ProgressScreen();

	this.instance_7 = new lib.RedirectScreen();

	this.instance_8 = new lib.ResultScreen();

	this.instance_9 = new lib.InstructionScreen();

	this.simple_explosion_comp = new lib.SimpleExplosionMC();
	this.simple_explosion_comp.setTransform(310,55);

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(260,55);

	this.instance_10 = new lib.Cursor();
	this.instance_10.setTransform(195,55);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(125.1,55,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(55.1,55,0.583,0.583,0,0,0,0.1,0);

	this.instance_11 = new lib.PauseAppScreen();

	this.instance_12 = new lib.OrientationLockScreen();

	this.instance_13 = new lib.CurtainScreen();

	this.instance_14 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_10},{t:this.gravity_explosion_comp},{t:this.simple_explosion_comp}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[]},1).to({state:[{t:this.instance_14}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, new cjs.Rectangle(-400,0,1600,600), new cjs.Rectangle(-410,-10,1620,620), new cjs.Rectangle(-400,0,1600,1165), new cjs.Rectangle(-400,-280.8,1600,1281.9), new cjs.Rectangle(-400,-280.8,1600,1261.9), rect=new cjs.Rectangle(-410,-280.8,1620,1261.9), rect, new cjs.Rectangle(-410,-10,1620,620), new cjs.Rectangle(-400,-319.9,1600,1065), new cjs.Rectangle(-400,0,1600,600), new cjs.Rectangle(20,20,314,70), rect=new cjs.Rectangle(-410,-10,1620,620), rect, new cjs.Rectangle(-1600,0,4000,600), rect=null, rect, rect, rect, new cjs.Rectangle(-410,-10,1620,620)];


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