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
		{src:"library/images/storage_atlas_13.png", id:"storage_atlas_13"},
		{src:"library/images/storage_atlas_14.png", id:"storage_atlas_14"},
		{src:"library/images/storage_atlas_15.png", id:"storage_atlas_15"},
		{src:"library/images/storage_atlas_16.png", id:"storage_atlas_16"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_2", frames: [[0,602,1600,600],[0,0,1600,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_4", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_5", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_6", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_7", frames: [[0,0,1600,600],[0,602,1600,200]]},
		{name:"storage_atlas_8", frames: [[0,602,680,280],[0,884,680,280],[0,0,460,600],[462,0,430,600],[894,582,400,580],[894,0,400,580],[1296,582,400,580],[1296,0,400,580]]},
		{name:"storage_atlas_9", frames: [[1284,0,500,340],[0,744,500,300],[0,1046,500,300],[402,342,500,300],[904,282,340,440],[502,644,340,440],[1246,342,340,440],[844,724,340,440],[1186,784,340,440],[0,342,400,400],[642,0,640,280],[0,0,640,280]]},
		{name:"storage_atlas_10", frames: [[1308,824,280,459],[1026,824,280,459],[684,884,340,440],[0,442,340,440],[0,884,340,440],[342,884,340,440],[0,0,340,440],[1026,0,340,440],[342,0,340,440],[684,0,340,440],[342,442,340,440],[1368,0,340,440],[684,442,340,440],[1026,442,380,380],[1408,442,380,380]]},
		{name:"storage_atlas_11", frames: [[282,922,280,459],[564,0,280,459],[564,461,280,459],[0,922,280,459],[282,0,280,459],[0,461,280,459],[0,0,280,459],[282,461,280,459],[564,922,266,474],[832,922,266,474],[846,0,266,474],[1368,476,266,474],[1100,476,266,474],[1114,0,266,474],[1382,0,266,474]]},
		{name:"storage_atlas_12", frames: [[268,476,300,300],[0,952,300,300],[604,718,240,320],[1330,1040,240,320],[604,1040,240,320],[1088,1040,240,320],[1330,718,240,320],[846,624,240,320],[846,946,240,320],[1088,718,240,320],[570,262,260,320],[832,302,260,320],[536,0,380,260],[918,0,300,300],[302,778,300,300],[302,1080,300,300],[1220,0,300,300],[1329,372,233,344],[0,0,266,474],[0,476,266,474],[268,0,266,474],[1094,302,233,345],[1564,372,232,334],[1522,0,236,370]]},
		{name:"storage_atlas_13", frames: [[0,0,240,320],[0,322,240,320],[242,0,240,320],[484,644,240,320],[0,644,240,320],[242,322,240,320],[484,0,240,320],[0,966,240,320],[242,966,240,320],[242,644,240,320],[484,322,240,320],[726,0,240,320],[1599,1074,180,240],[1417,1074,180,240],[1599,832,180,240],[964,574,180,240],[1302,332,180,240],[1120,332,180,240],[1484,348,180,240],[1146,574,180,240],[1037,816,180,240],[1219,816,180,240],[1417,832,180,240],[1401,590,180,240],[1053,1058,180,240],[1235,1058,180,240],[1583,590,180,240],[938,322,180,240],[839,1144,212,209],[1406,0,191,328],[672,966,165,289],[839,907,196,235],[1212,0,192,330],[968,0,242,313],[726,322,210,359],[726,683,236,222],[1599,0,179,346],[484,966,186,371]]},
		{name:"storage_atlas_14", frames: [[192,576,180,180],[0,0,190,190],[0,192,190,190],[1108,0,180,180],[192,0,190,190],[1290,0,180,180],[0,384,190,190],[1618,1043,143,167],[603,1043,143,167],[1618,1212,143,167],[1538,874,143,167],[1183,1212,143,167],[458,1043,143,167],[748,1212,143,167],[1103,865,143,167],[1038,1043,143,167],[458,1212,143,167],[748,1043,143,167],[1038,1212,143,167],[1654,0,140,192],[1328,1015,143,167],[1183,1043,143,167],[893,1043,143,167],[1328,1184,143,167],[1473,1043,143,167],[893,1212,143,167],[458,800,143,167],[603,1212,143,167],[603,800,143,167],[1473,1212,143,167],[748,867,143,167],[313,1110,143,167],[893,867,143,167],[525,382,170,164],[668,630,143,168],[168,948,143,168],[1651,194,143,168],[1393,675,143,168],[523,630,143,168],[813,697,143,168],[958,697,143,168],[697,357,143,168],[842,357,143,168],[1132,355,143,168],[867,527,143,168],[1302,376,143,168],[953,0,153,214],[798,0,153,221],[384,382,139,245],[1297,182,164,192],[0,1157,149,229],[0,948,166,207],[151,1157,143,168],[1103,695,143,168],[1592,534,143,168],[987,355,143,168],[313,940,143,168],[1012,525,143,168],[1248,695,143,168],[1157,525,143,168],[1538,704,143,168],[1447,505,143,168],[1625,364,143,168],[1393,845,143,168],[378,629,143,168],[576,0,220,160],[192,192,190,190],[525,548,340,80],[576,162,160,160],[1463,343,160,160],[384,192,186,188],[0,768,194,178],[1108,182,187,171],[738,223,187,132],[1463,182,186,159],[0,576,190,190],[192,384,190,190],[384,0,190,190],[196,758,180,180],[1472,0,180,180]]},
		{name:"storage_atlas_15", frames: [[840,690,120,120],[840,568,120,120],[842,446,120,120],[152,1205,120,120],[1330,1330,110,49],[1481,1210,87,110],[1450,476,108,110],[1106,1330,110,70],[518,1128,100,110],[1314,1068,110,56],[1442,1330,110,48],[334,1327,110,71],[1554,1323,110,47],[1218,1330,110,52],[1450,588,108,110],[0,1151,140,140],[0,1009,140,140],[0,725,140,140],[0,867,140,140],[324,82,140,140],[1030,0,140,140],[1456,0,140,140],[888,0,140,140],[1172,0,140,140],[1598,0,140,140],[1314,0,140,140],[88,491,140,140],[750,82,120,150],[514,508,120,150],[720,234,120,150],[1116,142,120,150],[1360,142,120,150],[720,386,120,150],[872,142,120,150],[994,142,120,150],[1482,142,120,150],[1238,142,120,150],[1604,142,120,150],[842,294,120,150],[396,783,120,120],[840,812,120,120],[274,1205,120,120],[396,1190,120,120],[228,650,130,130],[360,650,130,130],[964,450,107,112],[804,1088,97,110],[903,1110,99,103],[1455,356,102,118],[919,996,93,112],[1668,1272,91,82],[1211,966,98,100],[142,633,84,204],[0,491,86,232],[492,660,131,121],[964,294,115,154],[1106,1064,101,96],[1106,966,103,96],[0,172,129,173],[1706,856,94,98],[1706,956,87,102],[1209,1068,103,92],[1590,1132,88,98],[1706,1060,86,102],[692,986,103,108],[1740,0,58,203],[1680,1164,73,106],[1570,1232,96,89],[396,905,81,77],[518,783,69,178],[814,1200,80,124],[962,568,120,120],[1559,396,180,60],[1560,458,180,60],[152,1327,180,60],[1560,582,180,60],[835,934,180,60],[1560,520,180,60],[324,0,280,80],[1303,294,260,60],[606,0,280,80],[1081,376,150,100],[1565,294,150,100],[0,1293,150,100],[142,1001,150,100],[142,1103,150,100],[244,782,150,100],[244,884,150,100],[294,986,150,100],[294,1088,150,100],[636,640,150,100],[1303,356,150,100],[636,538,150,100],[625,742,150,100],[1084,478,120,120],[962,690,120,120],[142,0,180,130],[610,986,80,140],[1532,700,80,140],[753,844,80,140],[1450,700,80,140],[589,844,80,140],[528,986,80,140],[446,986,80,140],[1532,842,80,140],[1450,842,80,140],[671,844,80,140],[1532,984,80,140],[1450,984,80,140],[1081,294,220,80],[142,839,100,160],[0,0,140,170],[1726,205,69,94],[152,416,100,73],[896,1215,99,100],[1758,383,40,147],[0,347,150,142],[1706,644,50,210],[788,538,50,297],[1084,600,120,120],[1084,722,120,120],[1084,844,120,120],[712,1096,90,120],[620,1128,90,120],[518,1240,90,120],[610,1250,90,120],[962,812,120,120],[1206,844,120,120],[1206,722,120,120],[1614,1010,90,120],[1614,888,90,120],[1614,644,90,120],[1614,766,90,120],[1206,600,120,120],[1717,301,80,80],[142,132,140,140],[152,274,140,140],[578,366,140,140],[294,366,140,140],[466,82,140,140],[294,224,140,140],[436,224,140,140],[578,224,140,140],[372,508,140,140],[230,508,140,140],[608,82,140,140],[436,366,140,140],[797,996,120,90],[1328,458,120,120],[1206,478,120,120],[1328,946,120,120],[1328,702,120,120],[1328,580,120,120],[1328,824,120,120],[1106,1162,240,40],[1106,1204,240,40],[997,1246,240,40],[997,1288,240,40],[1239,1246,240,40],[1239,1288,240,40],[1348,1126,240,40],[1348,1168,240,40],[702,1326,200,40],[904,1330,200,40],[1004,1110,100,100],[712,1218,100,100]]},
		{name:"storage_atlas_16", frames: [[214,154,40,40],[0,100,56,56],[0,0,110,46],[112,0,90,50],[0,48,90,50],[38,372,36,36],[76,368,36,36],[160,322,36,36],[0,294,36,36],[122,292,36,36],[198,322,36,36],[198,360,36,36],[160,360,36,36],[84,330,36,36],[122,330,36,36],[0,332,36,36],[38,334,36,36],[84,292,36,36],[114,368,36,36],[0,370,36,36],[220,196,36,36],[220,234,36,36],[236,322,18,18],[236,362,18,18],[76,406,18,18],[236,342,18,18],[178,166,18,18],[152,398,37,29],[52,166,40,40],[92,52,60,60],[213,52,40,55],[214,109,40,43],[58,100,10,11],[154,52,57,60],[224,398,23,38],[191,398,31,31],[204,0,50,50],[136,166,40,40],[178,238,40,40],[136,208,40,40],[52,208,40,40],[42,250,40,40],[126,250,40,40],[178,196,40,40],[94,208,40,40],[94,166,40,40],[84,250,40,40],[0,210,40,40],[110,114,50,50],[162,114,50,50],[0,252,40,40],[168,280,40,40],[0,158,50,50],[58,114,50,50],[210,280,40,40],[42,292,40,40]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.accessory_check_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.accessory_check_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.again_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.animation_for_pointer_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.background_10_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
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



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_6_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_7_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_8_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_9_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
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



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.copyright_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.current_location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.current_location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.decor_location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.decor_location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.dress_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dress_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dress_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.dress_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.dress_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.dress_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.dress_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.dress_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dress_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.dress_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.dress_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.dress_7_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.dress_7_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.dress_8_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.dress_8_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.dress_9_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.dress_9_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.dress_check_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.dress_check_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.dress_check_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.dress_check_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.earrings_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.earrings_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.earrings_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.earrings_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.earrings_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.earrings_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.earrings_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.earrings_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.earrings_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.earrings_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.earrings_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.earrings_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.eyes_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.eyes_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.eyes_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.eyes_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.eyes_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.eyes_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.eyes_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.eyes_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.eyes_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.eyes_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.eyes_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.eyes_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
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
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.flash_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.forward_icon_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.gift_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.gift_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.glitter_10_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.glitter_11_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.glitter_12_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.glitter_13_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.glitter_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.glitter_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.glitter_3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.glitter_4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.glitter_5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.glitter_6_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.glitter_7_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.glitter_8_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.glitter_9_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_check_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_check_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_check_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_check_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bag1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bag2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bag3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bag4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bag5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bag6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress9_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hand_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_head_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bag6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress9_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_de_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_es_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.indicator_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.language_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.language_de_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.language_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.language_es_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.language_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.language_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.language_id_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.language_it_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.language_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.language_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.language_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.language_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.language_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.languages_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.languages_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.languages_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.languages_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.lips_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.lips_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.lips_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.lips_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.lips_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.lips_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.lips_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.lips_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.lips_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.lips_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.lips_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.lips_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(108);
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



(lib.location_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_0_5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_0_6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.location_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.location_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.location_progress_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.makeup_check_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.makeup_check_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.makeup_check_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.makeup_check_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.shadows_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.shadows_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.shadows_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.shadows_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.shadows_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.shadows_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.shadows_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.shadows_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.shadows_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.shadows_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.shadows_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.shadows_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.shine_1_10_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.shine_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.shine_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.shine_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.shine_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.shine_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.shine_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.shine_1_8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.shine_1_9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.skip_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(155);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(156);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(157);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(158);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(159);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(160);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(161);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(162);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(163);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.track_move_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(164);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(165);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_5_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_6_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
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


(lib.wardrobe_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wardrobe_6_img();
	this.instance.setTransform(-200,-290);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-290,400,580);
p.frameBounds = [rect];


(lib.wardrobe_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_5_img();
	this.instance.setTransform(-200,-290);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-290,400,580);
p.frameBounds = [rect];


(lib.wardrobe_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_4_img();
	this.instance.setTransform(-200,-290);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-290,400,580);
p.frameBounds = [rect];


(lib.wardrobe_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_3_img();
	this.instance.setTransform(-200,-290);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-290,400,580);
p.frameBounds = [rect];


(lib.wardrobe_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_img();
	this.instance.setTransform(-215,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-300,430,600);
p.frameBounds = [rect];


(lib.wardrobe_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_img();
	this.instance.setTransform(-230,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-300,460,600);
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


(lib.shadow_dressup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("EhduAu4MAAAhdvMC7eAAAMAAABdvg");
	this.shape.setTransform(400,300,1.35,1.033);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
p.frameBounds = [rect];


(lib.set_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AlgFhQiTiSAAjPQAAjNCTiTQCSiTDOAAQDOAACTCTQCTCTAADNQAADPiTCSQiTCTjOAAQjOAAiSiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.object_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwBQBQmnmpAApYQAApYGnmpQGpmnJYAAQJYAAGpGnQGoGpAAJYQAAJYmoGpQmpGopYAAQpYAAmpmog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.makeup_check_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.makeup_check_1_4_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.makeup_check_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.makeup_check_1_3_img();
	this.instance.setTransform(-70,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-85,140,170);
p.frameBounds = [rect];


(lib.makeup_check_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.makeup_check_1_2_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.makeup_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.makeup_check_1_1_img();
	this.instance.setTransform(-50,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-80,100,160);
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


(lib.location_progress_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_progress_1_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
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


(lib.indicator_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_3_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,280,80);
p.frameBounds = [rect];


(lib.indicator_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_2_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,260,60);
p.frameBounds = [rect];


(lib.indicator_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
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


(lib.hero2_shadows_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero2_shadows5_img();
	this.instance.setTransform(-71.5,-84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.5,-84,143,168);
p.frameBounds = [rect];


(lib.hero2_shadows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_shadows1_img();
	this.instance.setTransform(-71.5,-84);

	this.instance_1 = new lib.hero2_shadows2_img();
	this.instance_1.setTransform(-71.5,-84);

	this.instance_2 = new lib.hero2_shadows3_img();
	this.instance_2.setTransform(-71.5,-84);

	this.instance_3 = new lib.hero2_shadows4_img();
	this.instance_3.setTransform(-71.5,-84);

	this.instance_4 = new lib.hero2_shadows5_img();
	this.instance_4.setTransform(-71.5,-84);

	this.instance_5 = new lib.hero2_shadows6_img();
	this.instance_5.setTransform(-71.5,-84);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.5,-84,143,168);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_lips_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips4_img();
	this.instance.setTransform(-71.5,-84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.5,-84,143,168);
p.frameBounds = [rect];


(lib.hero2_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_lips1_img();
	this.instance.setTransform(-71.5,-84);

	this.instance_1 = new lib.hero2_lips2_img();
	this.instance_1.setTransform(-71.5,-84);

	this.instance_2 = new lib.hero2_lips3_img();
	this.instance_2.setTransform(-71.5,-84);

	this.instance_3 = new lib.hero2_lips4_img();
	this.instance_3.setTransform(-71.5,-84);

	this.instance_4 = new lib.hero2_lips5_img();
	this.instance_4.setTransform(-71.5,-84);

	this.instance_5 = new lib.hero2_lips6_img();
	this.instance_5.setTransform(-71.5,-84);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.5,-84,143,168);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_head_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_head_img();
	this.instance.setTransform(-71.5,-84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.5,-84,143,168);
p.frameBounds = [rect];


(lib.hero2_hair_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero2_hair6_img();
	this.instance.setTransform(-117.4,-114);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117.4,-114,236,370);
p.frameBounds = [rect];


(lib.hero2_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_hair1_img();
	this.instance.setTransform(-82.4,-107);

	this.instance_1 = new lib.hero2_hair2_img();
	this.instance_1.setTransform(-88.5,-107.5);

	this.instance_2 = new lib.hero2_hair3_img();
	this.instance_2.setTransform(-116.4,-134);

	this.instance_3 = new lib.hero2_hair4_img();
	this.instance_3.setTransform(-92,-100.5);

	this.instance_4 = new lib.hero2_hair5_img();
	this.instance_4.setTransform(-114.4,-99);

	this.instance_5 = new lib.hero2_hair6_img();
	this.instance_5.setTransform(-117.4,-114);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.4,-107,166,207);
p.frameBounds = [rect, new cjs.Rectangle(-88.5,-107.5,179,346), new cjs.Rectangle(-116.4,-134,233,345), new cjs.Rectangle(-92,-100.5,186,371), new cjs.Rectangle(-114.4,-99,232,334), new cjs.Rectangle(-117.4,-114,236,370)];


(lib.hero2_fringe_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe6_img();
	this.instance.setTransform(-71.5,-109.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.5,-109.5,149,229);
p.frameBounds = [rect];


(lib.hero2_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_fringe1_img();
	this.instance.setTransform(-76.5,-107);

	this.instance_1 = new lib.hero2_fringe2_img();
	this.instance_1.setTransform(-75.5,-107.5);

	this.instance_2 = new lib.hero2_fringe3_img();
	this.instance_2.setTransform(-120.4,-148);

	this.instance_3 = new lib.hero2_fringe4_img();
	this.instance_3.setTransform(-68.5,-101.5);

	this.instance_4 = new lib.hero2_fringe5_img();
	this.instance_4.setTransform(-82,-99.5);

	this.instance_5 = new lib.hero2_fringe6_img();
	this.instance_5.setTransform(-71.5,-109.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-107,153,214);
p.frameBounds = [rect, new cjs.Rectangle(-75.5,-107.5,153,221), new cjs.Rectangle(-120.4,-148,236,222), new cjs.Rectangle(-68.5,-101.5,139,245), new cjs.Rectangle(-82,-99.5,164,192), new cjs.Rectangle(-71.5,-109.5,149,229)];


(lib.hero2_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_eyes1_img();
	this.instance.setTransform(-71.5,-84);

	this.instance_1 = new lib.hero2_eyes2_img();
	this.instance_1.setTransform(-71.5,-84);

	this.instance_2 = new lib.hero2_eyes3_img();
	this.instance_2.setTransform(-71.5,-84);

	this.instance_3 = new lib.hero2_eyes4_img();
	this.instance_3.setTransform(-71.5,-84);

	this.instance_4 = new lib.hero2_eyes5_img();
	this.instance_4.setTransform(-71.5,-84);

	this.instance_5 = new lib.hero2_eyes6_img();
	this.instance_5.setTransform(-71.5,-84);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.5,-84,143,168);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_eyebrows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_eyebrows1_img();
	this.instance.setTransform(-71.5,-84);

	this.instance_1 = new lib.hero2_eyebrows2_img();
	this.instance_1.setTransform(-71.5,-84);

	this.instance_2 = new lib.hero2_eyebrows3_img();
	this.instance_2.setTransform(-71.5,-84);

	this.instance_3 = new lib.hero2_eyebrows4_img();
	this.instance_3.setTransform(-71.5,-84);

	this.instance_4 = new lib.hero2_eyebrows5_img();
	this.instance_4.setTransform(-71.5,-84);

	this.instance_5 = new lib.hero2_eyebrows6_img();
	this.instance_5.setTransform(-71.5,-84);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.5,-84,143,168);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_earrings6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings6_img();
	this.instance.setTransform(47.9,-22.2,0.25,0.25);

	this.instance_1 = new lib.hero2_earrings6_img();
	this.instance_1.setTransform(-65.1,-22.2,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.1,-22.2,130.3,44.5);
p.frameBounds = [rect];


(lib.hero2_earrings5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings5_img();
	this.instance.setTransform(68.2,-9.6,0.25,0.25,0,0,180);

	this.instance_1 = new lib.hero2_earrings5_img();
	this.instance_1.setTransform(-68.1,-9.6,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.1,-9.6,136.3,19.3);
p.frameBounds = [rect];


(lib.hero2_earrings4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings4_img();
	this.instance.setTransform(69,-11.1,0.25,0.25,0,0,180);

	this.instance_1 = new lib.hero2_earrings4_img();
	this.instance_1.setTransform(-69,-11.1,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69,-11.1,138,22.3);
p.frameBounds = [rect];


(lib.hero2_earrings3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings3_img();
	this.instance.setTransform(77.5,-20.5,0.25,0.25,0,0,180);

	this.instance_1 = new lib.hero2_earrings3_img();
	this.instance_1.setTransform(-77.5,-20.5,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.5,-20.5,155,41);
p.frameBounds = [rect];


(lib.hero2_earrings2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings2_img();
	this.instance.setTransform(47.6,-13.2,0.25,0.25);

	this.instance_1 = new lib.hero2_earrings2_img();
	this.instance_1.setTransform(-65.9,-13.2,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.9,-13.2,131.8,26.5);
p.frameBounds = [rect];


(lib.hero2_earrings1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings1_img();
	this.instance.setTransform(62.5,-25.6,0.25,0.25,0,0,180);

	this.instance_1 = new lib.hero2_earrings1_img();
	this.instance_1.setTransform(-62.5,-25.1,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.5,-25.6,125,51.3);
p.frameBounds = [rect];


(lib.hero2_dress_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero2_dress7_img();
	this.instance.setTransform(-133,-237);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-133,-237,266,474);
p.frameBounds = [rect];


(lib.hero2_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_dress1_img();
	this.instance.setTransform(-133,-237);

	this.instance_1 = new lib.hero2_dress2_img();
	this.instance_1.setTransform(-133,-237);

	this.instance_2 = new lib.hero2_dress3_img();
	this.instance_2.setTransform(-133,-237);

	this.instance_3 = new lib.hero2_dress4_img();
	this.instance_3.setTransform(-133,-237);

	this.instance_4 = new lib.hero2_dress5_img();
	this.instance_4.setTransform(-133,-237);

	this.instance_5 = new lib.hero2_dress6_img();
	this.instance_5.setTransform(-133,-237);

	this.instance_6 = new lib.hero2_dress7_img();
	this.instance_6.setTransform(-133,-237);

	this.instance_7 = new lib.hero2_dress8_img();
	this.instance_7.setTransform(-133,-237);

	this.instance_8 = new lib.hero2_dress9_img();
	this.instance_8.setTransform(-133,-237);

	this.instance_9 = new lib.hero2_dress0_img();
	this.instance_9.setTransform(-133,-237);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-133,-237,266,474);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero2_bag_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero2_bag1_img();
	this.instance.setTransform(-47,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-49,94,98);
p.frameBounds = [rect];


(lib.hero2_bag_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_bag1_img();
	this.instance.setTransform(-47,-49);

	this.instance_1 = new lib.hero2_bag2_img();
	this.instance_1.setTransform(-42,-49);

	this.instance_2 = new lib.hero2_bag3_img();
	this.instance_2.setTransform(-50,-49);

	this.instance_3 = new lib.hero2_bag4_img();
	this.instance_3.setTransform(-45,-49);

	this.instance_4 = new lib.hero2_bag5_img();
	this.instance_4.setTransform(-38,-50);

	this.instance_5 = new lib.hero2_bag6_img();
	this.instance_5.setTransform(-48,-51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-49,94,98);
p.frameBounds = [rect, new cjs.Rectangle(-42,-49,87,102), new cjs.Rectangle(-50,-49,103,92), new cjs.Rectangle(-45,-49,88,98), new cjs.Rectangle(-38,-50,86,102), new cjs.Rectangle(-48,-51,103,108), null];


(lib.hero1_shadows_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero1_shadows2_img();
	this.instance.setTransform(-71.5,-83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.5,-83.5,143,167);
p.frameBounds = [rect];


(lib.hero1_shadows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_shadows1_img();
	this.instance.setTransform(-71.5,-83.5);

	this.instance_1 = new lib.hero1_shadows2_img();
	this.instance_1.setTransform(-71.5,-83.5);

	this.instance_2 = new lib.hero1_shadows3_img();
	this.instance_2.setTransform(-71.5,-83.5);

	this.instance_3 = new lib.hero1_shadows4_img();
	this.instance_3.setTransform(-71.5,-83.5);

	this.instance_4 = new lib.hero1_shadows5_img();
	this.instance_4.setTransform(-71.5,-83.5);

	this.instance_5 = new lib.hero1_shadows6_img();
	this.instance_5.setTransform(-71.5,-83.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.5,-83.5,143,167);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_lips_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips2_img();
	this.instance.setTransform(-71.5,-83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.5,-83.5,143,167);
p.frameBounds = [rect];


(lib.hero1_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_lips1_img();
	this.instance.setTransform(-71.5,-83.5);

	this.instance_1 = new lib.hero1_lips2_img();
	this.instance_1.setTransform(-71.5,-83.5);

	this.instance_2 = new lib.hero1_lips3_img();
	this.instance_2.setTransform(-71.5,-83.5);

	this.instance_3 = new lib.hero1_lips4_img();
	this.instance_3.setTransform(-71.5,-83.5);

	this.instance_4 = new lib.hero1_lips5_img();
	this.instance_4.setTransform(-71.5,-83.5);

	this.instance_5 = new lib.hero1_lips6_img();
	this.instance_5.setTransform(-71.5,-83.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.5,-83.5,143,167);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_head_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_head_img();
	this.instance.setTransform(-71.5,-83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.5,-83.5,143,167);
p.frameBounds = [rect];


(lib.hero1_hand_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_hand_img();
	this.instance.setTransform(-18.5,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18.5,-14.5,37,29);
p.frameBounds = [rect];


(lib.hero1_hair_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 3
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-127.5,-103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-127.5,-103.5,233,344);
p.frameBounds = [rect];


(lib.hero1_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-127.5,-103.5);

	this.instance_1 = new lib.hero1_hair2_img();
	this.instance_1.setTransform(-104.5,-99.5);

	this.instance_2 = new lib.hero1_hair3_img();
	this.instance_2.setTransform(-126,-115);

	this.instance_3 = new lib.hero1_hair4_img();
	this.instance_3.setTransform(-116,-94);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-127.5,-103.5,233,344);
p.frameBounds = [rect, new cjs.Rectangle(-104.5,-99.5,192,330), new cjs.Rectangle(-126,-115,242,313), new cjs.Rectangle(-116,-94,210,359), rect=null, rect];


(lib.hero1_fringe_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero1_fringe1_img();
	this.instance.setTransform(-106,-104.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106,-104.5,212,209);
p.frameBounds = [rect];


(lib.hero1_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_fringe1_img();
	this.instance.setTransform(-106,-104.5);

	this.instance_1 = new lib.hero1_fringe2_img();
	this.instance_1.setTransform(-102.5,-98.5);

	this.instance_2 = new lib.hero1_fringe3_img();
	this.instance_2.setTransform(-77,-95);

	this.instance_3 = new lib.hero1_fringe4_img();
	this.instance_3.setTransform(-72.5,-89.5);

	this.instance_4 = new lib.hero1_fringe5_img();
	this.instance_4.setTransform(-79,-164);

	this.instance_5 = new lib.hero1_fringe6_img();
	this.instance_5.setTransform(-109.9,-116.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106,-104.5,212,209);
p.frameBounds = [rect, new cjs.Rectangle(-102.5,-98.5,191,328), new cjs.Rectangle(-77,-95,140,192), new cjs.Rectangle(-72.5,-89.5,129,173), new cjs.Rectangle(-79,-164,165,289), new cjs.Rectangle(-109.9,-116.5,196,235)];


(lib.hero1_eyes_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero1_eyes1_img();
	this.instance.setTransform(-71.5,-83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.5,-83.5,143,167);
p.frameBounds = [rect];


(lib.hero1_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_eyes1_img();
	this.instance.setTransform(-71.5,-83.5);

	this.instance_1 = new lib.hero1_eyes2_img();
	this.instance_1.setTransform(-71.5,-83.5);

	this.instance_2 = new lib.hero1_eyes3_img();
	this.instance_2.setTransform(-71.5,-83.5);

	this.instance_3 = new lib.hero1_eyes4_img();
	this.instance_3.setTransform(-71.5,-83.5);

	this.instance_4 = new lib.hero1_eyes5_img();
	this.instance_4.setTransform(-71.5,-83.5);

	this.instance_5 = new lib.hero1_eyes6_img();
	this.instance_5.setTransform(-71.5,-83.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.5,-83.5,143,167);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_eyebrows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_eyebrows1_img();
	this.instance.setTransform(-71.5,-83.5);

	this.instance_1 = new lib.hero1_eyebrows2_img();
	this.instance_1.setTransform(-71.5,-83.5);

	this.instance_2 = new lib.hero1_eyebrows3_img();
	this.instance_2.setTransform(-71.5,-83.5);

	this.instance_3 = new lib.hero1_eyebrows4_img();
	this.instance_3.setTransform(-71.5,-83.5);

	this.instance_4 = new lib.hero1_eyebrows5_img();
	this.instance_4.setTransform(-71.5,-83.5);

	this.instance_5 = new lib.hero1_eyebrows6_img();
	this.instance_5.setTransform(-71.5,-83.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.5,-83.5,143,167);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_earrings6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings6_2_img();
	this.instance.setTransform(48.7,-9.3,0.2,0.2);

	this.instance_1 = new lib.hero1_earrings6_1_img();
	this.instance_1.setTransform(-69.2,-9.8,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.2,-9.8,138.6,19.7);
p.frameBounds = [rect];


(lib.hero1_earrings5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings5_img();
	this.instance.setTransform(67,-16.6,0.2,0.2,0,0,180);

	this.instance_1 = new lib.hero1_earrings5_img();
	this.instance_1.setTransform(-67,-14.1,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67,-16.6,134,33.3);
p.frameBounds = [rect];


(lib.hero1_earrings4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings4_img();
	this.instance.setTransform(71.4,-12.6,0.2,0.2,0,0,180);

	this.instance_1 = new lib.hero1_earrings4_img();
	this.instance_1.setTransform(-71.3,-11.6,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.3,-12.6,142.6,25.2);
p.frameBounds = [rect];


(lib.hero1_earrings3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings3_img();
	this.instance.setTransform(64.1,-23.2,0.2,0.2,0,0,180);

	this.instance_1 = new lib.hero1_earrings3_img();
	this.instance_1.setTransform(-64.1,-23.2,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.1,-23.2,128.1,46.4);
p.frameBounds = [rect];


(lib.hero1_earrings2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings2_img();
	this.instance.setTransform(47.6,-20.4,0.2,0.2);

	this.instance_1 = new lib.hero1_earrings2_img();
	this.instance_1.setTransform(-64.3,-20.4,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.3,-20.4,128.8,40.8);
p.frameBounds = [rect];


(lib.hero1_earrings1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings1_img();
	this.instance.setTransform(69.8,-10,0.2,0.2,0,0,180);

	this.instance_1 = new lib.hero1_earrings1_img();
	this.instance_1.setTransform(-69.8,-10,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.8,-10,139.6,20);
p.frameBounds = [rect];


(lib.hero1_dress_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero1_dress1_img();
	this.instance.setTransform(-140,-229.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-229.5,280,459);
p.frameBounds = [rect];


(lib.hero1_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_dress1_img();
	this.instance.setTransform(-140,-229.5);

	this.instance_1 = new lib.hero1_dress2_img();
	this.instance_1.setTransform(-140,-229.5);

	this.instance_2 = new lib.hero1_dress3_img();
	this.instance_2.setTransform(-140,-229.5);

	this.instance_3 = new lib.hero1_dress4_img();
	this.instance_3.setTransform(-140,-229.5);

	this.instance_4 = new lib.hero1_dress5_img();
	this.instance_4.setTransform(-140,-229.5);

	this.instance_5 = new lib.hero1_dress6_img();
	this.instance_5.setTransform(-140,-229.5);

	this.instance_6 = new lib.hero1_dress7_img();
	this.instance_6.setTransform(-140,-229.5);

	this.instance_7 = new lib.hero1_dress8_img();
	this.instance_7.setTransform(-140,-229.5);

	this.instance_8 = new lib.hero1_dress9_img();
	this.instance_8.setTransform(-140,-229.5);

	this.instance_9 = new lib.hero1_dress0_img();
	this.instance_9.setTransform(-140,-229.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-229.5,280,459);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_bag_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero1_bag1_img();
	this.instance.setTransform(-53.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.5,-56,107,112);
p.frameBounds = [rect];


(lib.hero1_bag_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_bag1_img();
	this.instance.setTransform(-53.5,-56);

	this.instance_1 = new lib.hero1_bag2_img();
	this.instance_1.setTransform(-53.5,-56);

	this.instance_2 = new lib.hero1_bag3_img();
	this.instance_2.setTransform(-53.5,-56);

	this.instance_3 = new lib.hero1_bag4_img();
	this.instance_3.setTransform(-53.5,-58);

	this.instance_4 = new lib.hero1_bag5_img();
	this.instance_4.setTransform(-52.5,-57);

	this.instance_5 = new lib.hero1_bag6_img();
	this.instance_5.setTransform(-32.5,-59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.5,-56,107,112);
p.frameBounds = [rect, new cjs.Rectangle(-53.5,-56,97,110), new cjs.Rectangle(-53.5,-56,99,103), new cjs.Rectangle(-53.5,-58,102,118), new cjs.Rectangle(-52.5,-57,93,112), new cjs.Rectangle(-32.5,-59,91,82), null];


(lib.hairstyle_check_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_check_1_2_img();
	this.instance.setTransform(-90,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-120,180,240);
p.frameBounds = [rect];


(lib.hairstyle_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_check_1_1_img();
	this.instance.setTransform(-90,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-120,180,240);
p.frameBounds = [rect];


(lib.hairstyle_check_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_check_0_2_img();
	this.instance.setTransform(-90,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-120,180,240);
p.frameBounds = [rect];


(lib.hairstyle_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_check_0_1_img();
	this.instance.setTransform(-90,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-120,180,240);
p.frameBounds = [rect];


(lib.gift_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gift_2_img();
	this.instance.setTransform(-65,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.gift_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gift_1_img();
	this.instance.setTransform(-65,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.forward_icon_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.forward_icon_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
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


(lib.dress_check_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_check_1_2_img();
	this.instance.setTransform(-130,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-160,260,320);
p.frameBounds = [rect];


(lib.dress_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_check_1_1_img();
	this.instance.setTransform(-130,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-160,260,320);
p.frameBounds = [rect];


(lib.dress_check_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_check_0_2_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-160,240,320);
p.frameBounds = [rect];


(lib.dress_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_check_0_1_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-160,240,320);
p.frameBounds = [rect];


(lib.decor_location_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_location_1_2_img();
	this.instance.setTransform(-170,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-220,340,440);
p.frameBounds = [rect];


(lib.decor_location_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_location_1_1_img();
	this.instance.setTransform(-170,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-220,340,440);
p.frameBounds = [rect];


(lib.current_location_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_1_2_img();
	this.instance.setTransform(-170,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-220,340,440);
p.frameBounds = [rect];


(lib.current_location_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_1_1_img();
	this.instance.setTransform(-170,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-220,340,440);
p.frameBounds = [rect];


(lib.body_pointer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pointer_img();
	this.instance.setTransform(-112,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112,-59,120,120);
p.frameBounds = [rect];


(lib.background_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_10_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
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


(lib.accessory_check_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.accessory_check_1_2_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.accessory_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.accessory_check_1_1_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
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
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

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
	this.instance.setTransform(-250,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-170,500,340);
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


(lib.shine_3_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shine_1_10_img();
	this.instance.setTransform(-20,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.shine_3_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shine_1_9_img();
	this.instance.setTransform(-20,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.shine_3_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shine_1_8_img();
	this.instance.setTransform(-20,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.shine_3_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shine_1_6_img();
	this.instance.setTransform(-25,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-24,50,50);
p.frameBounds = [rect];


(lib.shine_3_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shine_1_5_img();
	this.instance.setTransform(-25,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-24,50,50);
p.frameBounds = [rect];


(lib.shine_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shine_1_4_img();
	this.instance.setTransform(-20,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.shine_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shine_1_3_img();
	this.instance.setTransform(-20,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.shine_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shine_1_2_img();
	this.instance.setTransform(-25,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-24,50,50);
p.frameBounds = [rect];


(lib.shine_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shine_1_1_img();
	this.instance.setTransform(-25,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-24,50,50);
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
	this.instance.setTransform(-9,-9);

	this.instance_1 = new lib.gravity_explosion_2_img();
	this.instance_1.setTransform(-9,-9);

	this.instance_2 = new lib.gravity_explosion_3_img();
	this.instance_2.setTransform(-9,-9);

	this.instance_3 = new lib.gravity_explosion_4_img();
	this.instance_3.setTransform(-9,-9);

	this.instance_4 = new lib.gravity_explosion_5_img();
	this.instance_4.setTransform(-9,-9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9,-9,18,18);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.glitter_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.glitter_1_3_img();
	this.instance.setTransform(-18,-18);

	this.instance_1 = new lib.glitter_2_3_img();
	this.instance_1.setTransform(-18,-18);

	this.instance_2 = new lib.glitter_3_3_img();
	this.instance_2.setTransform(-18,-18);

	this.instance_3 = new lib.glitter_4_3_img();
	this.instance_3.setTransform(-18,-18);

	this.instance_4 = new lib.glitter_5_3_img();
	this.instance_4.setTransform(-18,-18);

	this.instance_5 = new lib.glitter_6_3_img();
	this.instance_5.setTransform(-18,-18);

	this.instance_6 = new lib.glitter_7_3_img();
	this.instance_6.setTransform(-18,-18);

	this.instance_7 = new lib.glitter_8_3_img();
	this.instance_7.setTransform(-18,-18);

	this.instance_8 = new lib.glitter_9_3_img();
	this.instance_8.setTransform(-18,-18);

	this.instance_9 = new lib.glitter_10_3_img();
	this.instance_9.setTransform(-18,-18);

	this.instance_10 = new lib.glitter_11_3_img();
	this.instance_10.setTransform(-18,-18);

	this.instance_11 = new lib.glitter_12_3_img();
	this.instance_11.setTransform(-18,-18);

	this.instance_12 = new lib.glitter_13_3_img();
	this.instance_12.setTransform(-18,-18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
	this.instance.setTransform(-28,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-28,56,56);
p.frameBounds = [rect];


(lib.blinking_light_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_1_2_img();
	this.instance.setTransform(-20,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.ParticleBigGravityExplosionMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gravity_big_explosion_1_img();
	this.instance.setTransform(-18,-18);

	this.instance_1 = new lib.gravity_big_explosion_2_img();
	this.instance_1.setTransform(-18,-18);

	this.instance_2 = new lib.gravity_big_explosion_3_img();
	this.instance_2.setTransform(-18,-18);

	this.instance_3 = new lib.gravity_big_explosion_4_img();
	this.instance_3.setTransform(-18,-18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.track_move_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.track_move_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.track_move_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.track_move_1_2_img();
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
	this.instance.setTransform(-60,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-45,120,90);
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


(lib.next_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_1_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.nav_2_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_7_img();
	this.instance.setTransform(-45,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-60,90,120);
p.frameBounds = [rect];


(lib.nav_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_6_img();
	this.instance.setTransform(-45,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-60,90,120);
p.frameBounds = [rect];


(lib.nav_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_5_img();
	this.instance.setTransform(-45,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-60,90,120);
p.frameBounds = [rect];


(lib.nav_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_4_img();
	this.instance.setTransform(-45,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-60,90,120);
p.frameBounds = [rect];


(lib.nav_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_3_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.nav_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.nav_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.nav_1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_7_img();
	this.instance.setTransform(-45,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-60,90,120);
p.frameBounds = [rect];


(lib.nav_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_6_img();
	this.instance.setTransform(-45,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-60,90,120);
p.frameBounds = [rect];


(lib.nav_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_5_img();
	this.instance.setTransform(-45,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-60,90,120);
p.frameBounds = [rect];


(lib.nav_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_4_img();
	this.instance.setTransform(-45,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-60,90,120);
p.frameBounds = [rect];


(lib.nav_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_3_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.nav_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.nav_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
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


(lib.substrate_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.gift_2_mc();

	this.instance_1 = new lib.hero2_bag5_img();
	this.instance_1.setTransform(43,-56,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect, new cjs.Rectangle(-43,-56,86,102)];


(lib.substrate_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.gift_2_mc();

	this.instance_1 = new lib.hero2_bag4_img();
	this.instance_1.setTransform(-44,-56);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect, new cjs.Rectangle(-44,-56,88,98)];


(lib.substrate_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.gift_1_mc();

	this.instance_1 = new lib.hero1_bag4_img();
	this.instance_1.setTransform(-52,-66);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect, new cjs.Rectangle(-52,-66,102,118)];


(lib.substrate_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.gift_1_mc();

	this.instance_1 = new lib.hero1_bag3_img();
	this.instance_1.setTransform(48,-56,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect, new cjs.Rectangle(-51,-56,99,103)];


(lib.substrate_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.gift_2_mc();

	this.instance_1 = new lib.hero2_bag1_img();
	this.instance_1.setTransform(47,-52,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect, new cjs.Rectangle(-47,-52,94,98)];


(lib.substrate_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.gift_1_mc();

	this.instance_1 = new lib.hero1_bag1_img();
	this.instance_1.setTransform(-57.4,-59.5,1,1,-6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect, new cjs.Rectangle(-57.4,-71.6,119,123.4)];


(lib.shadows_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0.1,0.56,0.56,0,0,0,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-28,56,56);
p.frameBounds = [rect];


(lib.makeup_check_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.makeup_check_1_4_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},24).to({alpha:0.102},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup_check_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.makeup_check_1_3_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},24).to({alpha:0.102},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-85,140,170);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup_check_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.makeup_check_1_2_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},24).to({alpha:0.102},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup_check_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.makeup_check_1_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},24).to({alpha:0.102},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-80,100,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup_check_0_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.makeup_check_1_4_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.makeup_check_2_4_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect];


(lib.makeup_check_0_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.makeup_check_1_3_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.makeup_check_2_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-85,140,170);
p.frameBounds = [rect, rect];


(lib.makeup_check_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.makeup_check_1_2_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.makeup_check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect];


(lib.makeup_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.makeup_check_1_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.makeup_check_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-80,100,160);
p.frameBounds = [rect, rect];


(lib.location_progress_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.location_progress_1_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},39).to({alpha:0.602},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.lips_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_6_2_img();
	this.instance.setTransform(-25,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_1_mc();
	this.check_mc.setTransform(15,7);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,162);
p.frameBounds = [rect];


(lib.lips_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_6_1_img();
	this.instance.setTransform(-30,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_1_mc();
	this.check_mc.setTransform(10,3);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-77,150,160);
p.frameBounds = [rect];


(lib.lips_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_5_2_img();
	this.instance.setTransform(-25,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_1_mc();
	this.check_mc.setTransform(15,2);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-78,150,160);
p.frameBounds = [rect];


(lib.lips_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_5_1_img();
	this.instance.setTransform(-25,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_1_mc();
	this.check_mc.setTransform(15,-2);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-82,150,160);
p.frameBounds = [rect];


(lib.lips_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_4_2_img();
	this.instance.setTransform(-25,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_1_mc();
	this.check_mc.setTransform(15,7);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,162);
p.frameBounds = [rect];


(lib.lips_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_4_1_img();
	this.instance.setTransform(-25,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_1_mc();
	this.check_mc.setTransform(15,-3);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-83,150,160);
p.frameBounds = [rect];


(lib.lips_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_3_2_img();
	this.instance.setTransform(-25,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_1_mc();
	this.check_mc.setTransform(15,7);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,162);
p.frameBounds = [rect];


(lib.lips_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_3_1_img();
	this.instance.setTransform(-30,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_1_mc();
	this.check_mc.setTransform(10,-3);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-83,150,160);
p.frameBounds = [rect];


(lib.lips_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_2_2_img();
	this.instance.setTransform(-25,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_1_mc();
	this.check_mc.setTransform(15,2);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-78,150,160);
p.frameBounds = [rect];


(lib.lips_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_2_1_img();
	this.instance.setTransform(-30,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_1_mc();
	this.check_mc.setTransform(9,-2);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-82,150,160);
p.frameBounds = [rect];


(lib.lips_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_1_2_img();
	this.instance.setTransform(-25,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_1_mc();
	this.check_mc.setTransform(15,7);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,162);
p.frameBounds = [rect];


(lib.lips_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_1_1_img();
	this.instance.setTransform(-25,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_1_mc();
	this.check_mc.setTransform(15,3);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-77,150,160);
p.frameBounds = [rect];


(lib.lips_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0.1,0.56,0.56,0,0,0,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-28,56,56);
p.frameBounds = [rect];


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


(lib.hero2_earrings_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero2_earrings3_mc();
	this.instance.setTransform(-0.4,-6.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.9,-27.1,155,41);
p.frameBounds = [rect];


(lib.hero2_earrings_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_earrings1_mc();

	this.instance_1 = new lib.hero2_earrings2_mc();
	this.instance_1.setTransform(-0.4,-11.1);

	this.instance_2 = new lib.hero2_earrings3_mc();
	this.instance_2.setTransform(-0.4,-6.6);

	this.instance_3 = new lib.hero2_earrings4_mc();
	this.instance_3.setTransform(-0.5,-16.1);

	this.instance_4 = new lib.hero2_earrings5_mc();
	this.instance_4.setTransform(0,-18.6);

	this.instance_5 = new lib.hero2_earrings6_mc();
	this.instance_5.setTransform(0,-6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.5,-25.6,125,51.3);
p.frameBounds = [rect, new cjs.Rectangle(-66.3,-24.4,131.8,26.5), new cjs.Rectangle(-77.9,-27.1,155,41), new cjs.Rectangle(-69.5,-27.3,138,22.3), new cjs.Rectangle(-68.1,-28.2,136.3,19.3), new cjs.Rectangle(-65.1,-28.4,130.3,44.5), null];


(lib.hero1_earrings_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero1_earrings1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.8,-10,139.6,20);
p.frameBounds = [rect];


(lib.hero1_earrings_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_earrings1_mc();

	this.instance_1 = new lib.hero1_earrings2_mc();
	this.instance_1.setTransform(0,12.5);

	this.instance_2 = new lib.hero1_earrings3_mc();
	this.instance_2.setTransform(-0.9,15.5);

	this.instance_3 = new lib.hero1_earrings4_mc();
	this.instance_3.setTransform(0.3,0);

	this.instance_4 = new lib.hero1_earrings5_mc();
	this.instance_4.setTransform(-0.4,9.8);

	this.instance_5 = new lib.hero1_earrings6_mc();
	this.instance_5.setTransform(0.9,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.8,-10,139.6,20);
p.frameBounds = [rect, new cjs.Rectangle(-64.3,-7.9,128.8,40.8), new cjs.Rectangle(-65,-7.7,128.2,46.4), new cjs.Rectangle(-71,-12.6,142.6,25.2), new cjs.Rectangle(-67.4,-6.9,134,33.3), new cjs.Rectangle(-68.3,-11.3,138.6,19.7), null];


(lib.hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fringe
	this.fringe = new lib.hero2_fringe_all_mc();
	this.fringe.setTransform(-11,-197.5);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({rotation:-3,x:-14.2,y:-185.4},34).to({rotation:0,x:-11,y:-197.5},35).wait(1));

	// earrings
	this.earrings = new lib.hero2_earrings_all_mc();
	this.earrings.setTransform(-9.9,-146.9);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({rotation:-3,x:-10.5,y:-134.9},34).to({rotation:0,x:-9.9,y:-146.9},35).wait(1));

	// lips
	this.lips = new lib.hero2_lips_all_mc();
	this.lips.setTransform(-10,-206.5);

	this.timeline.addTween(cjs.Tween.get(this.lips).to({rotation:-3,x:-13.7,y:-194.5},34).to({rotation:0,x:-10,y:-206.5},35).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero2_eyebrows_all_mc();
	this.eyebrows.setTransform(-10,-206.5);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).to({rotation:-3,x:-13.7,y:-194.5},34).to({rotation:0,x:-10,y:-206.5},35).wait(1));

	// shadows
	this.shadows = new lib.hero2_shadows_all_mc();
	this.shadows.setTransform(-10,-206.5);

	this.timeline.addTween(cjs.Tween.get(this.shadows).to({rotation:-3,x:-13.7,y:-194.5},34).to({rotation:0,x:-10,y:-206.5},35).wait(1));

	// eyes
	this.eyes = new lib.hero2_eyes_all_mc();
	this.eyes.setTransform(-10,-206.5);

	this.timeline.addTween(cjs.Tween.get(this.eyes).to({rotation:-3,x:-13.7,y:-194.5},34).to({rotation:0,x:-10,y:-206.5},35).wait(1));

	// body
	this.instance = new lib.hero2_head_mc();
	this.instance.setTransform(-10,-206.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3,x:-13.7,y:-194.5},34).to({rotation:0,x:-10,y:-206.5},35).wait(1));

	// dress
	this.dress = new lib.hero2_dress_all_mc();
	this.dress.setTransform(-4,69.5);

	this.timeline.addTween(cjs.Tween.get(this.dress).to({y:81.5},34).to({y:69.5},35).wait(1));

	// accessory
	this.accessory = new lib.hero2_bag_all_mc();
	this.accessory.setTransform(90,193.4);

	this.timeline.addTween(cjs.Tween.get(this.accessory).to({rotation:-7.5,x:98,y:196.4},34).to({rotation:0,x:90,y:193.4},35).wait(1));

	// hair
	this.hair = new lib.hero2_hair_all_mc();
	this.hair.setTransform(-11,-197.5);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({rotation:-3,x:-14.2,y:-185.4},34).to({rotation:0,x:-11,y:-197.5},35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-137,-304.5,274,611);
p.frameBounds = [rect, new cjs.Rectangle(-137,-304.1,274.3,611), new cjs.Rectangle(-137,-303.8,274.7,611), new cjs.Rectangle(-137,-303.8,275.1,611.3), new cjs.Rectangle(-137,-303.5,275.6,611.4), new cjs.Rectangle(-137,-303.1,276.1,611.3), new cjs.Rectangle(-137,-303,276.4,611.6), new cjs.Rectangle(-137,-302.7,276.9,611.7), new cjs.Rectangle(-137,-302.4,277.4,611.7), new cjs.Rectangle(-137,-302.3,277.6,612), new cjs.Rectangle(-137,-302,278.1,612.1), new cjs.Rectangle(-137,-301.7,278.5,612.1), new cjs.Rectangle(-137,-301.7,278.9,612.4), new cjs.Rectangle(-137,-301.3,279.3,612.4), new cjs.Rectangle(-137,-301,279.8,612.4), new cjs.Rectangle(-137,-300.9,280.3,612.7), new cjs.Rectangle(-137,-300.6,280.7,612.8), new cjs.Rectangle(-137,-300.3,281,612.8), new cjs.Rectangle(-137,-300.2,281.4,613.1), new cjs.Rectangle(-137,-299.9,281.8,613.1), new cjs.Rectangle(-137,-299.9,282.2,613.4), new cjs.Rectangle(-137,-299.5,282.7,613.4), new cjs.Rectangle(-137,-299.2,283.1,613.4), new cjs.Rectangle(-137,-299.1,283.5,613.7), new cjs.Rectangle(-137,-298.8,284,613.7), new cjs.Rectangle(-137,-298.5,284.2,613.8), new cjs.Rectangle(-137,-298.4,284.6,614.1), new cjs.Rectangle(-137,-298.1,285.1,614.1), new cjs.Rectangle(-137,-297.7,285.5,614.1), new cjs.Rectangle(-137,-297.7,285.8,614.5), new cjs.Rectangle(-137,-297.3,286.3,614.4), new cjs.Rectangle(-137,-297,286.7,614.5), new cjs.Rectangle(-137,-296.9,287.1,614.7), new cjs.Rectangle(-137,-296.6,287.5,614.8), new cjs.Rectangle(-137,-296.6,288,615.1), new cjs.Rectangle(-137,-296.6,287.6,614.7), new cjs.Rectangle(-137,-296.9,287.1,614.7), new cjs.Rectangle(-137,-297,286.8,614.4), new cjs.Rectangle(-137,-297.3,286.4,614.5), new cjs.Rectangle(-137,-297.7,285.9,614.5), new cjs.Rectangle(-137,-297.7,285.6,614.1), new cjs.Rectangle(-137,-298,285.1,614.1), new cjs.Rectangle(-137,-298.3,284.8,614), new cjs.Rectangle(-137,-298.4,284.4,613.8), new cjs.Rectangle(-137,-298.7,284,613.7), new cjs.Rectangle(-137,-299,283.6,613.7), new cjs.Rectangle(-137,-299,283.2,613.4), new cjs.Rectangle(-137,-299.4,282.8,613.4), new cjs.Rectangle(-137,-299.7,282.3,613.3), new cjs.Rectangle(-137,-299.8,282,613.1), new cjs.Rectangle(-137,-300.1,281.6,613.1), new cjs.Rectangle(-137,-300.4,281.2,613), new cjs.Rectangle(-137,-300.4,280.8,612.7), new cjs.Rectangle(-137,-300.7,280.4,612.7), new cjs.Rectangle(-137,-301.1,280,612.7), new cjs.Rectangle(-137,-301.1,279.5,612.4), new cjs.Rectangle(-137,-301.4,279.3,612.3), new cjs.Rectangle(-137,-301.7,278.9,612.3), new cjs.Rectangle(-137,-301.7,278.4,612), new cjs.Rectangle(-137,-302.1,278,612.1), new cjs.Rectangle(-137,-302.4,277.5,612), new cjs.Rectangle(-137,-302.5,277.2,611.8), new cjs.Rectangle(-137,-302.8,276.7,611.7), new cjs.Rectangle(-137,-303.1,276.4,611.7), new cjs.Rectangle(-137,-303.1,276,611.3), new cjs.Rectangle(-137,-303.5,275.6,611.3), new cjs.Rectangle(-137,-303.8,275.1,611.3), new cjs.Rectangle(-137,-303.8,274.7,611), new cjs.Rectangle(-137,-304.1,274.4,611), new cjs.Rectangle(-137,-304.5,274,611)];


(lib.hero_2_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero2_fringe_main_mc();
	this.instance.setTransform(-11,-197.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-10,x:-23.2,y:-187.4},34).to({rotation:0,x:-11,y:-197.5},35).wait(1));

	// animation
	this.instance_1 = new lib.hero2_earrings_main_mc();
	this.instance_1.setTransform(-9.9,-146.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-10,x:-13.4,y:-137.6},34).to({rotation:0,x:-9.9,y:-146.9},35).wait(1));

	// animation
	this.instance_2 = new lib.hero2_lips_main_mc();
	this.instance_2.setTransform(-10,-206.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-10,x:-23.8,y:-196.5},34).to({rotation:0,x:-10,y:-206.5},35).wait(1));

	// animation
	this.instance_3 = new lib.hero2_shadows_main_mc();
	this.instance_3.setTransform(-10,-206.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-10,x:-23.8,y:-196.5},34).to({rotation:0,x:-10,y:-206.5},35).wait(1));

	// animation
	this.instance_4 = new lib.hero2_head_mc();
	this.instance_4.setTransform(-10,-206.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-10,x:-23.8,y:-196.5},34).to({rotation:0,x:-10,y:-206.5},35).wait(1));

	// animation
	this.instance_5 = new lib.hero2_dress_main_mc();
	this.instance_5.setTransform(-4,69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:78.5},34).to({y:69.5},35).wait(1));

	// animation
	this.instance_6 = new lib.hero2_bag_main_mc();
	this.instance_6.setTransform(90,193.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-10.5,x:95,y:202.4},34).to({rotation:0,x:90,y:193.4},35).wait(1));

	// animation
	this.instance_7 = new lib.hero2_hair_main_mc();
	this.instance_7.setTransform(-11,-197.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-10,x:-23.2,y:-187.4},34).to({rotation:0,x:-11,y:-197.5},35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-137,-311.5,274,618);
p.frameBounds = [rect, new cjs.Rectangle(-137,-311.7,274.4,618.4), new cjs.Rectangle(-137,-311.9,274.8,619), new cjs.Rectangle(-137,-312.1,275.1,619.4), new cjs.Rectangle(-137,-312.4,275.5,619.9), new cjs.Rectangle(-137,-312.6,276,620.4), new cjs.Rectangle(-137,-313.2,276.4,621.3), new cjs.Rectangle(-137,-313.4,276.8,621.8), new cjs.Rectangle(-137,-313.6,277.1,622.2), new cjs.Rectangle(-137,-313.9,277.6,622.8), new cjs.Rectangle(-137.4,-314.1,278.3,623.3), new cjs.Rectangle(-138.2,-314.4,279.6,623.8), new cjs.Rectangle(-139.4,-314.9,281.1,624.6), new cjs.Rectangle(-140.3,-315.1,282.4,625.1), new cjs.Rectangle(-141.1,-315.3,283.7,625.5), new cjs.Rectangle(-142,-315.5,284.9,626), new cjs.Rectangle(-142.8,-315.7,286.1,626.5), new cjs.Rectangle(-143.7,-315.9,287.3,626.9), new cjs.Rectangle(-144.8,-316.4,289,627.7), new cjs.Rectangle(-145.6,-316.6,290.1,628.2), new cjs.Rectangle(-146.4,-316.8,291.3,628.6), new cjs.Rectangle(-147.2,-317,292.4,629), new cjs.Rectangle(-148.1,-317.2,293.8,629.5), new cjs.Rectangle(-148.9,-317.3,294.9,629.9), new cjs.Rectangle(-150,-317.9,296.4,630.7), new cjs.Rectangle(-150.8,-318,297.5,631.1), new cjs.Rectangle(-151.6,-318.2,298.6,631.6), new cjs.Rectangle(-152.5,-318.4,300,632.1), new cjs.Rectangle(-153.3,-318.6,301.1,632.5), new cjs.Rectangle(-154,-318.7,302.2,632.9), new cjs.Rectangle(-155.1,-319.2,303.7,633.7), new cjs.Rectangle(-155.9,-319.4,304.9,634.1), new cjs.Rectangle(-156.7,-319.5,306.1,634.5), new cjs.Rectangle(-157.5,-319.6,307.2,634.8), new cjs.Rectangle(-158.6,-320.2,308.8,635.7), new cjs.Rectangle(-157.6,-319.7,307.3,635), new cjs.Rectangle(-156.8,-319.6,306.2,634.6), new cjs.Rectangle(-156,-319.3,305,634.1), new cjs.Rectangle(-155.2,-319.2,303.9,633.7), new cjs.Rectangle(-154.4,-319.1,302.7,633.3), new cjs.Rectangle(-153.6,-318.9,301.6,632.8), new cjs.Rectangle(-152.6,-318.4,300.2,632.1), new cjs.Rectangle(-151.7,-318.2,299,631.7), new cjs.Rectangle(-151,-318,297.9,631.2), new cjs.Rectangle(-150.2,-317.9,296.7,630.8), new cjs.Rectangle(-149.4,-317.7,295.5,630.3), new cjs.Rectangle(-148.6,-317.5,294.4,629.9), new cjs.Rectangle(-147.8,-317.3,293.2,629.5), new cjs.Rectangle(-146.6,-316.8,291.8,628.7), new cjs.Rectangle(-145.8,-316.6,290.5,628.3), new cjs.Rectangle(-145,-316.4,289.3,627.8), new cjs.Rectangle(-144.2,-316.2,288.1,627.3), new cjs.Rectangle(-143.4,-316,287,626.9), new cjs.Rectangle(-142.6,-315.8,285.9,626.4), new cjs.Rectangle(-141.8,-315.6,284.5,625.9), new cjs.Rectangle(-140.6,-315.1,282.9,625.2), new cjs.Rectangle(-139.8,-314.8,281.8,624.7), new cjs.Rectangle(-138.9,-314.6,280.5,624.2), new cjs.Rectangle(-138.1,-314.4,279.4,623.8), new cjs.Rectangle(-137.2,-314.1,278.1,623.2), new cjs.Rectangle(-137,-314,277.5,622.8), new cjs.Rectangle(-137,-313.7,277.1,622.3), new cjs.Rectangle(-137,-313.2,276.8,621.5), new cjs.Rectangle(-137,-312.9,276.4,621), new cjs.Rectangle(-137,-312.7,275.8,620.5), new cjs.Rectangle(-137,-312.5,275.5,620), new cjs.Rectangle(-137,-312.2,275.2,619.4), new cjs.Rectangle(-137,-312,274.8,619), new cjs.Rectangle(-137,-311.7,274.4,618.5), new cjs.Rectangle(-137,-311.5,274,618)];


(lib.hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fringe
	this.fringe = new lib.hero1_fringe_all_mc();
	this.fringe.setTransform(12,-278.5);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({rotation:5.7,x:18.7,y:-259.1},39).to({rotation:0,x:12,y:-278.5},40).wait(1));

	// earrings
	this.earrings = new lib.hero1_earrings_all_mc();
	this.earrings.setTransform(4,-244.5);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({rotation:5.7,x:7.4,y:-226},39).to({rotation:0,x:4,y:-244.5},40).wait(1));

	// body
	this.instance = new lib.hero1_hand_mc();
	this.instance.setTransform(-33,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-23.5},39).to({y:-41.5},40).wait(1));

	// accessory
	this.accessory = new lib.hero1_bag_all_mc();
	this.accessory.setTransform(-26,17.4);

	this.timeline.addTween(cjs.Tween.get(this.accessory).to({y:35.4},39).to({y:17.4},40).wait(1));

	// lips
	this.lips = new lib.hero1_lips_all_mc();
	this.lips.setTransform(4,-283.5);

	this.timeline.addTween(cjs.Tween.get(this.lips).to({rotation:5.7,x:11.3,y:-264.9},39).to({rotation:0,x:4,y:-283.5},40).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero1_eyebrows_all_mc();
	this.eyebrows.setTransform(4,-283.5);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).to({rotation:5.7,x:11.3,y:-264.9},39).to({rotation:0,x:4,y:-283.5},40).wait(1));

	// shadows
	this.shadows = new lib.hero1_shadows_all_mc();
	this.shadows.setTransform(4,-283.5);

	this.timeline.addTween(cjs.Tween.get(this.shadows).to({rotation:5.7,x:11.3,y:-264.9},39).to({rotation:0,x:4,y:-283.5},40).wait(1));

	// eyes
	this.eyes = new lib.hero1_eyes_all_mc();
	this.eyes.setTransform(4,-283.5);

	this.timeline.addTween(cjs.Tween.get(this.eyes).to({rotation:5.7,x:11.3,y:-264.9},39).to({rotation:0,x:4,y:-283.5},40).wait(1));

	// body
	this.instance_1 = new lib.hero1_head_mc();
	this.instance_1.setTransform(4,-283.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:5.7,x:11.3,y:-264.9},39).to({rotation:0,x:4,y:-283.5},40).wait(1));

	// dress
	this.dress = new lib.hero1_dress_all_mc();

	this.timeline.addTween(cjs.Tween.get(this.dress).to({y:18},39).to({y:0},40).wait(1));

	// hair
	this.hair = new lib.hero1_hair_all_mc();
	this.hair.setTransform(12,-278.5);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({rotation:5.7,x:18.7,y:-259.1},39).to({rotation:0,x:12,y:-278.5},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-383,280,612.6);
p.frameBounds = [rect, new cjs.Rectangle(-140,-382.6,280,612.6), new cjs.Rectangle(-140,-382.5,280,612.9), new cjs.Rectangle(-140,-382,280,613), new cjs.Rectangle(-140,-382,280,613.4), new cjs.Rectangle(-140,-381.5,280,613.4), new cjs.Rectangle(-140,-381.4,280,613.7), new cjs.Rectangle(-140,-381.3,280,614.1), new cjs.Rectangle(-140,-380.9,280,614.2), new cjs.Rectangle(-140,-380.8,280,614.5), new cjs.Rectangle(-140,-380.4,280,614.5), new cjs.Rectangle(-140,-380.3,280,614.9), new cjs.Rectangle(-140,-380.2,280,615.3), new cjs.Rectangle(-140,-379.7,280,615.3), new cjs.Rectangle(-140,-379.6,280,615.6), new cjs.Rectangle(-140,-379.2,280,615.7), new cjs.Rectangle(-140,-379.1,280,616.1), new cjs.Rectangle(-140,-378.7,280,616.1), new cjs.Rectangle(-140,-378.6,280,616.4), new cjs.Rectangle(-140,-378.5,280,616.8), new cjs.Rectangle(-140,-378.1,280,616.9), new cjs.Rectangle(-140,-378.1,280,617.3), new cjs.Rectangle(-140,-377.7,280,617.4), new cjs.Rectangle(-140,-377.7,280,617.8), new cjs.Rectangle(-140,-377.6,280,618.3), new cjs.Rectangle(-140,-377.2,280,618.3), new cjs.Rectangle(-140,-377.2,280,618.7), new cjs.Rectangle(-140,-376.8,280,618.8), new cjs.Rectangle(-140,-376.7,280,619.2), new cjs.Rectangle(-140,-376.7,280,619.6), new cjs.Rectangle(-140,-376.3,280,619.7), new cjs.Rectangle(-140,-376.2,280,620.1), new cjs.Rectangle(-140,-375.8,280,620.1), new cjs.Rectangle(-140,-375.8,280,620.6), new cjs.Rectangle(-140,-375.3,280,620.6), new cjs.Rectangle(-140,-375.3,280,621), new cjs.Rectangle(-140,-375.3,280,621.4), new cjs.Rectangle(-140,-374.8,280,621.5), new cjs.Rectangle(-140,-374.8,280,621.9), new cjs.Rectangle(-140,-374.8,280,622.3), new cjs.Rectangle(-140,-374.8,280,621.9), new cjs.Rectangle(-140,-374.8,280,621.4), new cjs.Rectangle(-140,-375.3,280,621.5), new cjs.Rectangle(-140,-375.3,280,621), new cjs.Rectangle(-140,-375.7,280,621), new cjs.Rectangle(-140,-375.7,280,620.5), new cjs.Rectangle(-140,-375.8,280,620.2), new cjs.Rectangle(-140,-376.2,280,620.1), new cjs.Rectangle(-140,-376.2,280,619.7), new cjs.Rectangle(-140,-376.6,280,619.6), new cjs.Rectangle(-140,-376.6,280,619.2), new cjs.Rectangle(-140,-377,280,619.2), new cjs.Rectangle(-140,-377,280,618.7), new cjs.Rectangle(-140,-377.1,280,618.3), new cjs.Rectangle(-140,-377.5,280,618.3), new cjs.Rectangle(-140,-377.5,280,617.9), new cjs.Rectangle(-140,-377.9,280,617.8), new cjs.Rectangle(-140,-377.9,280,617.3), new cjs.Rectangle(-140,-378.3,280,617.3), new cjs.Rectangle(-140,-378.3,280,616.8), new cjs.Rectangle(-140,-378.4,280,616.5), new cjs.Rectangle(-140,-378.8,280,616.5), new cjs.Rectangle(-140,-378.9,280,616.1), new cjs.Rectangle(-140,-379.3,280,616.1), new cjs.Rectangle(-140,-379.4,280,615.7), new cjs.Rectangle(-140,-379.8,280,615.7), new cjs.Rectangle(-140,-379.9,280,615.3), new cjs.Rectangle(-140,-380,280,614.9), new cjs.Rectangle(-140,-380.4,280,614.9), new cjs.Rectangle(-140,-380.5,280,614.6), new cjs.Rectangle(-140,-380.9,280,614.5), new cjs.Rectangle(-140,-381,280,614.1), new cjs.Rectangle(-140,-381.4,280,614.1), new cjs.Rectangle(-140,-381.5,280,613.8), new cjs.Rectangle(-140,-381.6,280,613.4), new cjs.Rectangle(-140,-382,280,613.4), new cjs.Rectangle(-140,-382.1,280,613), new cjs.Rectangle(-140,-382.5,280,613), new cjs.Rectangle(-140,-382.6,280,612.6), new cjs.Rectangle(-140,-383,280,612.6)];


(lib.hero_1_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero1_fringe_main_mc();
	this.instance.setTransform(12,-278.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4.7,x:18.1,y:-263.6},39).to({rotation:0,x:12,y:-278.5},40).wait(1));

	// animation
	this.instance_1 = new lib.hero1_earrings_main_mc();
	this.instance_1.setTransform(4,-244.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:4.7,x:7.4,y:-230.3},39).to({rotation:0,x:4,y:-244.5},40).wait(1));

	// animation
	this.instance_2 = new lib.hero1_hand_mc();
	this.instance_2.setTransform(-33,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-27.5},39).to({y:-41.5},40).wait(1));

	// animation
	this.instance_3 = new lib.hero1_bag_main_mc();
	this.instance_3.setTransform(-26,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:31.4},39).to({y:17.4},40).wait(1));

	// animation
	this.instance_4 = new lib.hero1_lips_main_mc();
	this.instance_4.setTransform(4,-283.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:4.7,x:10.6,y:-269.2},39).to({rotation:0,x:4,y:-283.5},40).wait(1));

	// animation
	this.instance_5 = new lib.hero1_shadows_main_mc();
	this.instance_5.setTransform(4,-283.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:4.7,x:10.6,y:-269.2},39).to({rotation:0,x:4,y:-283.5},40).wait(1));

	// animation
	this.instance_6 = new lib.hero1_eyes_main_mc();
	this.instance_6.setTransform(4,-283.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:4.7,x:10.6,y:-269.2},39).to({rotation:0,x:4,y:-283.5},40).wait(1));

	// animation
	this.instance_7 = new lib.hero1_head_mc();
	this.instance_7.setTransform(4,-283.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:4.7,x:10.6,y:-269.2},39).to({rotation:0,x:4,y:-283.5},40).wait(1));

	// animation
	this.instance_8 = new lib.hero1_dress_main_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:14},39).to({y:0},40).wait(1));

	// animation
	this.instance_9 = new lib.hero1_hair_main_mc();
	this.instance_9.setTransform(12,-278.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:4.7,x:18.1,y:-263.6},39).to({rotation:0,x:12,y:-278.5},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-383,280,612.6);
p.frameBounds = [rect, new cjs.Rectangle(-140,-382.7,280,612.6), new cjs.Rectangle(-140,-382.4,280,612.6), new cjs.Rectangle(-140,-382.4,280,613), new cjs.Rectangle(-140,-382,280,613), new cjs.Rectangle(-140,-382.1,280,613.4), new cjs.Rectangle(-140,-381.7,280,613.4), new cjs.Rectangle(-140,-381.7,280,613.8), new cjs.Rectangle(-140,-381.4,280,613.8), new cjs.Rectangle(-140,-381.4,280,614.2), new cjs.Rectangle(-140,-381.1,280,614.2), new cjs.Rectangle(-140,-381.1,280,614.6), new cjs.Rectangle(-140,-380.8,280,614.6), new cjs.Rectangle(-140,-380.8,280,615), new cjs.Rectangle(-140,-380.5,280,615.1), new cjs.Rectangle(-140,-380.5,280,615.4), new cjs.Rectangle(-140,-380.1,280,615.4), new cjs.Rectangle(-140,-380.1,280,615.8), new cjs.Rectangle(-140,-379.8,280,615.8), new cjs.Rectangle(-140,-379.8,280,616.1), new cjs.Rectangle(-140,-379.5,280,616.2), new cjs.Rectangle(-140,-379.5,280,616.6), new cjs.Rectangle(-140,-379.1,280,616.6), new cjs.Rectangle(-140,-379.2,280,617), new cjs.Rectangle(-140,-378.9,280,617), new cjs.Rectangle(-140,-378.9,280,617.4), new cjs.Rectangle(-140,-378.6,280,617.5), new cjs.Rectangle(-140,-378.7,280,618), new cjs.Rectangle(-140,-378.4,280,618), new cjs.Rectangle(-140,-378.5,280,618.4), new cjs.Rectangle(-140,-378.1,280,618.4), new cjs.Rectangle(-140,-377.8,280,618.5), new cjs.Rectangle(-140,-377.9,280,619), new cjs.Rectangle(-140,-377.6,280,619), new cjs.Rectangle(-140,-377.6,280,619.3), new cjs.Rectangle(-140,-377.3,280,619.4), new cjs.Rectangle(-140,-377.4,280,619.8), new cjs.Rectangle(-140,-377.1,280,619.9), new cjs.Rectangle(-140,-377.2,280,620.4), new cjs.Rectangle(-140,-377.2,280,620.8), new cjs.Rectangle(-140,-377.1,280,620.3), new cjs.Rectangle(-140,-377.1,280,619.9), new cjs.Rectangle(-140,-377.3,280,619.8), new cjs.Rectangle(-140,-377.3,280,619.4), new cjs.Rectangle(-140,-377.6,280,619.4), new cjs.Rectangle(-140,-377.9,280,619.4), new cjs.Rectangle(-140,-377.8,280,618.9), new cjs.Rectangle(-140,-378.2,280,618.9), new cjs.Rectangle(-140,-378.1,280,618.5), new cjs.Rectangle(-140,-378.4,280,618.4), new cjs.Rectangle(-140,-378.3,280,618), new cjs.Rectangle(-140,-378.6,280,618), new cjs.Rectangle(-140,-378.5,280,617.5), new cjs.Rectangle(-140,-378.8,280,617.5), new cjs.Rectangle(-140,-378.7,280,617), new cjs.Rectangle(-140,-379.1,280,617), new cjs.Rectangle(-140,-379,280,616.6), new cjs.Rectangle(-140,-379.3,280,616.6), new cjs.Rectangle(-140,-379.3,280,616.2), new cjs.Rectangle(-140,-379.6,280,616.2), new cjs.Rectangle(-140,-379.6,280,615.8), new cjs.Rectangle(-140,-379.9,280,615.8), new cjs.Rectangle(-140,-380.3,280,615.8), new cjs.Rectangle(-140,-380.2,280,615.3), new cjs.Rectangle(-140,-380.6,280,615.4), new cjs.Rectangle(-140,-380.5,280,615), new cjs.Rectangle(-140,-380.9,280,615), new cjs.Rectangle(-140,-380.9,280,614.6), new cjs.Rectangle(-140,-381.2,280,614.6), new cjs.Rectangle(-140,-381.1,280,614.2), new cjs.Rectangle(-140,-381.5,280,614.2), new cjs.Rectangle(-140,-381.5,280,613.8), new cjs.Rectangle(-140,-381.8,280,613.8), new cjs.Rectangle(-140,-381.8,280,613.4), new cjs.Rectangle(-140,-382.1,280,613.4), new cjs.Rectangle(-140,-382.1,280,613), new cjs.Rectangle(-140,-382.4,280,613), new cjs.Rectangle(-140,-382.4,280,612.6), new cjs.Rectangle(-140,-382.7,280,612.6), new cjs.Rectangle(-140,-383,280,612.6)];


(lib.hairstyle_check_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_check_1_2_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},39).to({alpha:0.102},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-120,180,240);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hairstyle_check_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_check_1_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},39).to({alpha:0.102},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-120,180,240);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.forward_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.forward_icon_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.filters_exit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.filters_body_exit_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},19).to({scaleX:1,scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect, new cjs.Rectangle(-44.7,-24.8,89.6,49.8), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.2,-24.6,88.6,49.2), new cjs.Rectangle(-44,-24.4,88.1,49), new cjs.Rectangle(-43.8,-24.3,87.7,48.7), new cjs.Rectangle(-43.5,-24.2,87.2,48.4), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.1,-23.9,86.2,47.9), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-42.6,-23.6,85.3,47.3), new cjs.Rectangle(-42.3,-23.5,84.8,47.1), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-41.9,-23.2,83.9,46.6), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.4,-23,82.9,46.1), new cjs.Rectangle(-41.2,-22.8,82.4,45.8), new cjs.Rectangle(-40.9,-22.7,82,45.6), new cjs.Rectangle(-40.7,-22.6,81.5,45.3), new cjs.Rectangle(-40.5,-22.5,81,45), new cjs.Rectangle(-40.6,-22.5,81.3,45.2), new cjs.Rectangle(-40.7,-22.6,81.6,45.3), new cjs.Rectangle(-40.9,-22.7,81.9,45.5), new cjs.Rectangle(-41,-22.8,82.2,45.7), new cjs.Rectangle(-41.2,-22.9,82.5,45.8), new cjs.Rectangle(-41.3,-22.9,82.8,46), new cjs.Rectangle(-41.5,-23,83.1,46.2), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.8,-23.2,83.7,46.5), new cjs.Rectangle(-41.9,-23.3,84,46.7), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-42.2,-23.4,84.6,47), new cjs.Rectangle(-42.4,-23.5,84.9,47.2), new cjs.Rectangle(-42.5,-23.6,85.2,47.3), new cjs.Rectangle(-42.7,-23.7,85.5,47.5), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-43,-23.9,86.1,47.8), new cjs.Rectangle(-43.1,-23.9,86.4,48), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.4,-24.1,87,48.3), new cjs.Rectangle(-43.6,-24.2,87.3,48.5), new cjs.Rectangle(-43.7,-24.3,87.6,48.7), new cjs.Rectangle(-43.9,-24.4,87.9,48.8), new cjs.Rectangle(-44,-24.4,88.2,49), new cjs.Rectangle(-44.2,-24.5,88.5,49.2), new cjs.Rectangle(-44.3,-24.6,88.8,49.3), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.6,-24.8,89.4,49.7), new cjs.Rectangle(-44.8,-24.9,89.7,49.8), new cjs.Rectangle(-45,-25,90,50)];


(lib.eyes_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_6_2_img();
	this.instance.setTransform(-60,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_3_mc();
	this.check_mc.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-86,150,170);
p.frameBounds = [rect];


(lib.eyes_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_6_1_img();
	this.instance.setTransform(-60,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_3_mc();
	this.check_mc.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-82,150,170);
p.frameBounds = [rect];


(lib.eyes_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_5_2_img();
	this.instance.setTransform(-60,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_3_mc();
	this.check_mc.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-82,150,170);
p.frameBounds = [rect];


(lib.eyes_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_5_1_img();
	this.instance.setTransform(-60,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_3_mc();
	this.check_mc.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-82,150,170);
p.frameBounds = [rect];


(lib.eyes_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_4_2_img();
	this.instance.setTransform(-60,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_3_mc();
	this.check_mc.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-86,150,170);
p.frameBounds = [rect];


(lib.eyes_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_4_1_img();
	this.instance.setTransform(-60,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_3_mc();
	this.check_mc.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-83,150,170);
p.frameBounds = [rect];


(lib.eyes_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_3_2_img();
	this.instance.setTransform(-60,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_3_mc();
	this.check_mc.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-82,150,170);
p.frameBounds = [rect];


(lib.eyes_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_3_1_img();
	this.instance.setTransform(-60,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_3_mc();
	this.check_mc.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-83,150,170);
p.frameBounds = [rect];


(lib.eyes_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_2_2_img();
	this.instance.setTransform(-60,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_3_mc();
	this.check_mc.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-82,150,170);
p.frameBounds = [rect];


(lib.eyes_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_2_1_img();
	this.instance.setTransform(-60,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_3_mc();
	this.check_mc.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-83,150,170);
p.frameBounds = [rect];


(lib.eyes_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_1_2_img();
	this.instance.setTransform(-60,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_3_mc();
	this.check_mc.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-82,150,170);
p.frameBounds = [rect];


(lib.eyes_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_1_1_img();
	this.instance.setTransform(-60,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_3_mc();
	this.check_mc.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-83,150,170);
p.frameBounds = [rect];


(lib.eyebrows_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_6_2_img();
	this.instance.setTransform(50,-70,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_4_mc();
	this.check_mc.setTransform(-22,-2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-82,177,160);
p.frameBounds = [rect];


(lib.eyebrows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_6_1_img();
	this.instance.setTransform(-55,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_4_mc();
	this.check_mc.setTransform(17,-13);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-93,172,168);
p.frameBounds = [rect];


(lib.eyebrows_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_5_2_img();
	this.instance.setTransform(50,-70,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_4_mc();
	this.check_mc.setTransform(-22,-2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-82,177,160);
p.frameBounds = [rect];


(lib.eyebrows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_5_1_img();
	this.instance.setTransform(-55,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_4_mc();
	this.check_mc.setTransform(17,-13);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-93,172,168);
p.frameBounds = [rect];


(lib.eyebrows_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_4_2_img();
	this.instance.setTransform(50,-65,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_4_mc();
	this.check_mc.setTransform(-22,3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-77,177,160);
p.frameBounds = [rect];


(lib.eyebrows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_4_1_img();
	this.instance.setTransform(-55,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_4_mc();
	this.check_mc.setTransform(17,-13);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-93,172,168);
p.frameBounds = [rect];


(lib.eyebrows_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_3_2_img();
	this.instance.setTransform(50,-65,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_4_mc();
	this.check_mc.setTransform(-22,3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-77,177,160);
p.frameBounds = [rect];


(lib.eyebrows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_3_1_img();
	this.instance.setTransform(-55,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_4_mc();
	this.check_mc.setTransform(17,-13);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-93,172,168);
p.frameBounds = [rect];


(lib.eyebrows_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_2_2_img();
	this.instance.setTransform(50,-65,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_4_mc();
	this.check_mc.setTransform(-22,2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-78,177,160);
p.frameBounds = [rect];


(lib.eyebrows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_2_1_img();
	this.instance.setTransform(-55,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_4_mc();
	this.check_mc.setTransform(15,0);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-80,170,160);
p.frameBounds = [rect];


(lib.eyebrows_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_1_2_img();
	this.instance.setTransform(50,-65,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_4_mc();
	this.check_mc.setTransform(-22,2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-78,177,160);
p.frameBounds = [rect];


(lib.eyebrows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_1_1_img();
	this.instance.setTransform(-55,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_4_mc();
	this.check_mc.setTransform(15,0);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-80,170,160);
p.frameBounds = [rect];


(lib.earrings_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0.1,0.56,0.56,0,0,0,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-28,56,56);
p.frameBounds = [rect];


(lib.dress_check_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_check_1_2_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},39).to({alpha:0.102},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-160,260,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.dress_check_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_check_1_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},39).to({alpha:0.102},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-160,260,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.dress_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0.1,0.56,0.56,0,0,0,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-28,56,56);
p.frameBounds = [rect];


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


(lib.animation_current_location_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_location_1_2_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},39).to({alpha:0.102},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-220,340,440);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_current_location_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_location_1_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},39).to({alpha:0.102},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-220,340,440);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.accessory_check_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.accessory_check_1_2_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},19).to({alpha:0.102},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.accessory_check_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.accessory_check_1_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},19).to({alpha:0.102},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.accessory_check_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.accessory_check_1_2_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.accessory_check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect];


(lib.accessory_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.accessory_check_1_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.accessory_check_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, rect];


(lib.accessory_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bag6_img();
	this.instance.setTransform(-48,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsfMgIAA4/IY/AAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.accessory_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bag6_img();
	this.instance.setTransform(46,-18,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsfMgIAA4/IY/AAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.accessory_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.accessory_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_5_2_mc();
	this.substrate_mc.setTransform(0,21);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsfMgIAA4/IY/AAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.accessory_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bag5_img();
	this.instance.setTransform(44,-51,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsfMgIAA4/IY/AAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.accessory_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.accessory_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_4_2_mc();
	this.substrate_mc.setTransform(0,25);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsfMgIAA4/IY/AAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.accessory_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.accessory_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_4_1_mc();
	this.substrate_mc.setTransform(0,15);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsfMgIAA4/IY/AAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.accessory_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bag3_img();
	this.instance.setTransform(-52,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsfMgIAA4/IY/AAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.accessory_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.accessory_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_3_1_mc();
	this.substrate_mc.setTransform(-3,20);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsfMgIAA4/IY/AAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.accessory_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bag2_img();
	this.instance.setTransform(47,-34,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsfMgIAA4/IY/AAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.accessory_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bag2_img();
	this.instance.setTransform(47,-42,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsfMgIAA4/IY/AAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.accessory_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.accessory_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_1_2_mc();
	this.substrate_mc.setTransform(0,27);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsfMgIAA4/IY/AAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.accessory_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.accessory_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_1_1_mc();
	this.substrate_mc.setTransform(0,25);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsfMgIAA4/IY/AAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.accessory_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0.1,0.56,0.56,0,0,0,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-28,56,56);
p.frameBounds = [rect];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:29,end:59});

	// animation
	this.instance = new lib.curtain_2_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:1},10).to({alpha:0.012},5).wait(10).to({alpha:1},10).to({alpha:0.012},10).to({_off:true},1).wait(5));

	// animation
	this.instance_1 = new lib.curtain_1_mc();
	this.instance_1.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:0,alpha:0.012},0).to({alpha:1},13).wait(25).to({alpha:0.012},19).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,600,1600,600);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,0,1600,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


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
p.nominalBounds = rect = new cjs.Rectangle(-250,-170,500,340);
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
	this.instance.setTransform(200,-200,0.6,0.6);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(50,-302,300,204);
p.frameBounds = [rect, new cjs.Rectangle(46.3,-300.3,302.5,205.7), new cjs.Rectangle(35.2,-295.4,309.9,210.7), new cjs.Rectangle(16.7,-287.3,322.2,219.1), new cjs.Rectangle(-9.3,-275.8,339.5,230.9), new cjs.Rectangle(-42.6,-261.1,361.7,246), new cjs.Rectangle(-83.3,-243.3,388.9,264.5), new cjs.Rectangle(-131.4,-222.1,421,286.3), new cjs.Rectangle(-187,-197.6,458,311.5), new cjs.Rectangle(-250,-170,500,340)];


(lib.shine_2_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.shine_3_10_mc("synched",0);
	this.instance.setTransform(0,0,0.44,0.44,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0},14).to({scaleX:0.14,scaleY:0.14,rotation:135},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8.7,-8.8,17.6,17.6);
p.frameBounds = [rect, new cjs.Rectangle(-10.5,-10.6,21.2,21.2), new cjs.Rectangle(-12.4,-12.4,24.9,24.9), new cjs.Rectangle(-14.2,-14.2,28.5,28.5), new cjs.Rectangle(-15.9,-16,32,32), new cjs.Rectangle(-17.6,-17.6,35.3,35.3), new cjs.Rectangle(-19,-19.1,38.2,38.2), new cjs.Rectangle(-20.3,-20.3,40.7,40.7), new cjs.Rectangle(-21.3,-21.3,42.7,42.7), new cjs.Rectangle(-22,-21.9,44,44), new cjs.Rectangle(-22.3,-22.3,44.8,44.8), new cjs.Rectangle(-22.4,-22.3,44.8,44.8), new cjs.Rectangle(-21.9,-22,44,44), new cjs.Rectangle(-21.1,-21.1,42.3,42.3), new cjs.Rectangle(-20,-20,40,40), new cjs.Rectangle(-21.5,-21.5,43.1,43.1), rect=new cjs.Rectangle(-22.2,-22.2,44.5,44.5), rect, new cjs.Rectangle(-21.4,-21.4,43,43), new cjs.Rectangle(-20.1,-20.1,40.3,40.3), new cjs.Rectangle(-18.3,-18.2,36.6,36.6), new cjs.Rectangle(-16.1,-16,32.2,32.2), new cjs.Rectangle(-13.6,-13.5,27.2,27.2), new cjs.Rectangle(-11,-11,22.1,22.1), new cjs.Rectangle(-8.5,-8.5,17.1,17.1), new cjs.Rectangle(-8.4,-8.4,16.9,16.9), new cjs.Rectangle(-7.8,-7.8,15.7,15.7), new cjs.Rectangle(-6.8,-6.8,13.7,13.7), new cjs.Rectangle(-5.5,-5.4,11,11), new cjs.Rectangle(-4,-3.9,7.9,7.9)];


(lib.shine_2_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.shine_3_9_mc("synched",0);
	this.instance.setTransform(0,0,0.44,0.44,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0},14).to({scaleX:0.14,scaleY:0.14,rotation:135},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8.7,-8.8,17.6,17.6);
p.frameBounds = [rect, new cjs.Rectangle(-10.5,-10.6,21.2,21.2), new cjs.Rectangle(-12.4,-12.4,24.9,24.9), new cjs.Rectangle(-14.2,-14.2,28.5,28.5), new cjs.Rectangle(-15.9,-16,32,32), new cjs.Rectangle(-17.6,-17.6,35.3,35.3), new cjs.Rectangle(-19,-19.1,38.2,38.2), new cjs.Rectangle(-20.3,-20.3,40.7,40.7), new cjs.Rectangle(-21.3,-21.3,42.7,42.7), new cjs.Rectangle(-22,-21.9,44,44), new cjs.Rectangle(-22.3,-22.3,44.8,44.8), new cjs.Rectangle(-22.4,-22.3,44.8,44.8), new cjs.Rectangle(-21.9,-22,44,44), new cjs.Rectangle(-21.1,-21.1,42.3,42.3), new cjs.Rectangle(-20,-20,40,40), new cjs.Rectangle(-21.2,-21.2,42.5,42.5), new cjs.Rectangle(-22,-22,44.1,44.1), new cjs.Rectangle(-22.3,-22.3,44.7,44.7), new cjs.Rectangle(-22.2,-22.2,44.5,44.5), new cjs.Rectangle(-21.7,-21.7,43.6,43.6), new cjs.Rectangle(-20.8,-20.8,41.8,41.8), new cjs.Rectangle(-19.7,-19.7,39.4,39.4), new cjs.Rectangle(-18.3,-18.2,36.6,36.6), new cjs.Rectangle(-16.7,-16.6,33.3,33.3), new cjs.Rectangle(-14.9,-14.8,29.8,29.8), new cjs.Rectangle(-12.9,-12.9,25.9,25.9), new cjs.Rectangle(-11,-11,22.1,22.1), new cjs.Rectangle(-9.1,-9.1,18.3,18.3), new cjs.Rectangle(-8.5,-8.5,17.1,17.1), new cjs.Rectangle(-8.3,-8.3,16.7,16.7), new cjs.Rectangle(-7.8,-7.8,15.7,15.7), new cjs.Rectangle(-7.1,-7.1,14.2,14.2), new cjs.Rectangle(-6.2,-6.1,12.4,12.4), new cjs.Rectangle(-5.1,-5.1,10.2,10.2), new cjs.Rectangle(-4,-3.9,7.9,7.9)];


(lib.shine_2_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.shine_3_8_mc("synched",0);
	this.instance.setTransform(0,0,0.44,0.44,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0},14).to({scaleX:0.14,scaleY:0.14,rotation:135},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8.7,-8.8,17.6,17.6);
p.frameBounds = [rect, new cjs.Rectangle(-10.5,-10.6,21.2,21.2), new cjs.Rectangle(-12.4,-12.4,24.9,24.9), new cjs.Rectangle(-14.2,-14.2,28.5,28.5), new cjs.Rectangle(-15.9,-16,32,32), new cjs.Rectangle(-17.6,-17.6,35.3,35.3), new cjs.Rectangle(-19,-19.1,38.2,38.2), new cjs.Rectangle(-20.3,-20.3,40.7,40.7), new cjs.Rectangle(-21.3,-21.3,42.7,42.7), new cjs.Rectangle(-22,-21.9,44,44), new cjs.Rectangle(-22.3,-22.3,44.8,44.8), new cjs.Rectangle(-22.4,-22.3,44.8,44.8), new cjs.Rectangle(-21.9,-22,44,44), new cjs.Rectangle(-21.1,-21.1,42.3,42.3), new cjs.Rectangle(-20,-20,40,40), new cjs.Rectangle(-21.5,-21.5,43.1,43.1), rect=new cjs.Rectangle(-22.2,-22.2,44.5,44.5), rect, new cjs.Rectangle(-21.4,-21.4,43,43), new cjs.Rectangle(-20.1,-20.1,40.3,40.3), new cjs.Rectangle(-18.3,-18.2,36.6,36.6), new cjs.Rectangle(-16.1,-16,32.2,32.2), new cjs.Rectangle(-13.6,-13.5,27.2,27.2), new cjs.Rectangle(-11,-11,22.1,22.1), new cjs.Rectangle(-8.5,-8.5,17.1,17.1), new cjs.Rectangle(-8.4,-8.4,16.9,16.9), new cjs.Rectangle(-7.8,-7.8,15.7,15.7), new cjs.Rectangle(-6.8,-6.8,13.7,13.7), new cjs.Rectangle(-5.5,-5.4,11,11), new cjs.Rectangle(-4,-3.9,7.9,7.9)];


(lib.shine_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.shine_3_6_mc("synched",0);
	this.instance.setTransform(0,0,0.44,0.44,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0},9).to({scaleX:0.14,scaleY:0.14,rotation:135},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.5,-11,22,22);
p.frameBounds = [rect, new cjs.Rectangle(-14,-14.4,29.1,29.1), new cjs.Rectangle(-17.5,-17.8,36.1,36.1), new cjs.Rectangle(-20.8,-21.1,42.8,42.8), new cjs.Rectangle(-23.6,-23.8,48.5,48.5), new cjs.Rectangle(-25.9,-25.8,52.9,52.9), new cjs.Rectangle(-27.3,-27,55.5,55.5), new cjs.Rectangle(-27.7,-27.1,56.1,56.1), new cjs.Rectangle(-26.9,-26.2,54.3,54.3), new cjs.Rectangle(-25,-24,50,50), new cjs.Rectangle(-26.6,-25.6,53.1,53.1), new cjs.Rectangle(-27.7,-26.6,55.1,55.1), new cjs.Rectangle(-28.2,-27,55.8,55.8), new cjs.Rectangle(-28.1,-27,55.6,55.6), new cjs.Rectangle(-27.6,-26.5,54.4,54.4), new cjs.Rectangle(-26.5,-25.5,52.2,52.2), new cjs.Rectangle(-25.2,-24.1,49.3,49.3), new cjs.Rectangle(-23.4,-22.4,45.7,45.7), new cjs.Rectangle(-21.3,-20.5,41.6,41.6), new cjs.Rectangle(-19.1,-18.3,37.2,37.2), new cjs.Rectangle(-16.7,-16,32.4,32.4), new cjs.Rectangle(-14.2,-13.7,27.6,27.6), new cjs.Rectangle(-11.9,-11.4,22.9,22.9), new cjs.Rectangle(-11,-10.6,21.3,21.3), new cjs.Rectangle(-10.7,-10.4,20.8,20.8), new cjs.Rectangle(-10.1,-9.8,19.6,19.6), new cjs.Rectangle(-9.1,-8.9,17.8,17.8), new cjs.Rectangle(-7.9,-7.8,15.5,15.5), new cjs.Rectangle(-6.5,-6.4,12.8,12.8), new cjs.Rectangle(-5,-4.9,9.8,9.8)];


(lib.shine_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.shine_3_5_mc("synched",0);
	this.instance.setTransform(0,0,0.44,0.44,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0},9).to({scaleX:0.14,scaleY:0.14,rotation:135},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.5,-11,22,22);
p.frameBounds = [rect, new cjs.Rectangle(-14,-14.4,29.1,29.1), new cjs.Rectangle(-17.5,-17.8,36.1,36.1), new cjs.Rectangle(-20.8,-21.1,42.8,42.8), new cjs.Rectangle(-23.6,-23.8,48.5,48.5), new cjs.Rectangle(-25.9,-25.8,52.9,52.9), new cjs.Rectangle(-27.3,-27,55.5,55.5), new cjs.Rectangle(-27.7,-27.1,56.1,56.1), new cjs.Rectangle(-26.9,-26.2,54.3,54.3), new cjs.Rectangle(-25,-24,50,50), new cjs.Rectangle(-27,-25.9,53.8,53.8), new cjs.Rectangle(-28,-26.9,55.7,55.7), new cjs.Rectangle(-28.1,-27,55.6,55.6), new cjs.Rectangle(-27.3,-26.2,53.7,53.7), new cjs.Rectangle(-25.6,-24.6,50.3,50.3), new cjs.Rectangle(-23.4,-22.4,45.7,45.7), new cjs.Rectangle(-20.6,-19.8,40.2,40.2), new cjs.Rectangle(-17.5,-16.8,34,34), new cjs.Rectangle(-14.2,-13.7,27.6,27.6), new cjs.Rectangle(-11.1,-10.6,21.3,21.3), new cjs.Rectangle(-10.9,-10.6,21.1,21.1), new cjs.Rectangle(-10.1,-9.8,19.6,19.6), new cjs.Rectangle(-8.8,-8.6,17.1,17), new cjs.Rectangle(-7,-6.9,13.7,13.7), new cjs.Rectangle(-5,-4.9,9.8,9.8)];


(lib.shine_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.shine_3_4_mc("synched",0);
	this.instance.setTransform(0,0,0.44,0.44,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0},9).to({scaleX:0.14,scaleY:0.14,rotation:135},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8.7,-8.8,17.6,17.6);
p.frameBounds = [rect, new cjs.Rectangle(-11.6,-11.6,23.2,23.2), new cjs.Rectangle(-14.4,-14.4,28.9,28.9), new cjs.Rectangle(-17,-17.1,34.2,34.2), new cjs.Rectangle(-19.3,-19.4,38.8,38.8), new cjs.Rectangle(-21.1,-21.1,42.3,42.3), new cjs.Rectangle(-22.1,-22.1,44.3,44.3), new cjs.Rectangle(-22.4,-22.4,44.8,44.8), new cjs.Rectangle(-21.7,-21.7,43.4,43.4), new cjs.Rectangle(-20,-20,40,40), new cjs.Rectangle(-21.5,-21.5,43.1,43.1), rect=new cjs.Rectangle(-22.2,-22.2,44.5,44.5), rect, new cjs.Rectangle(-21.4,-21.4,43,43), new cjs.Rectangle(-20.1,-20.1,40.3,40.3), new cjs.Rectangle(-18.3,-18.2,36.6,36.6), new cjs.Rectangle(-16.1,-16,32.2,32.2), new cjs.Rectangle(-13.6,-13.5,27.2,27.2), new cjs.Rectangle(-11,-11,22.1,22.1), new cjs.Rectangle(-8.5,-8.5,17.1,17.1), new cjs.Rectangle(-8.4,-8.4,16.9,16.9), new cjs.Rectangle(-7.8,-7.8,15.7,15.7), new cjs.Rectangle(-6.8,-6.8,13.7,13.7), new cjs.Rectangle(-5.5,-5.4,11,11), new cjs.Rectangle(-4,-3.9,7.9,7.9)];


(lib.shine_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.shine_3_3_mc("synched",0);
	this.instance.setTransform(0,0,0.44,0.44,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0},9).to({scaleX:0.14,scaleY:0.14,rotation:135},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8.7,-8.8,17.6,17.6);
p.frameBounds = [rect, new cjs.Rectangle(-11.6,-11.6,23.2,23.2), new cjs.Rectangle(-14.4,-14.4,28.9,28.9), new cjs.Rectangle(-17,-17.1,34.2,34.2), new cjs.Rectangle(-19.3,-19.4,38.8,38.8), new cjs.Rectangle(-21.1,-21.1,42.3,42.3), new cjs.Rectangle(-22.1,-22.1,44.3,44.3), new cjs.Rectangle(-22.4,-22.4,44.8,44.8), new cjs.Rectangle(-21.7,-21.7,43.4,43.4), new cjs.Rectangle(-20,-20,40,40), new cjs.Rectangle(-21.5,-21.5,43.1,43.1), rect=new cjs.Rectangle(-22.2,-22.2,44.5,44.5), rect, new cjs.Rectangle(-21.4,-21.4,43,43), new cjs.Rectangle(-20.1,-20.1,40.3,40.3), new cjs.Rectangle(-18.3,-18.2,36.6,36.6), new cjs.Rectangle(-16.1,-16,32.2,32.2), new cjs.Rectangle(-13.6,-13.5,27.2,27.2), new cjs.Rectangle(-11,-11,22.1,22.1), new cjs.Rectangle(-8.5,-8.5,17.1,17.1), new cjs.Rectangle(-8.4,-8.4,16.9,16.9), new cjs.Rectangle(-7.8,-7.8,15.7,15.7), new cjs.Rectangle(-6.8,-6.8,13.7,13.7), new cjs.Rectangle(-5.5,-5.4,11,11), new cjs.Rectangle(-4,-3.9,7.9,7.9)];


(lib.shine_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.shine_3_2_mc("synched",0);
	this.instance.setTransform(0,0,0.44,0.44,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0},14).to({scaleX:0.14,scaleY:0.14,rotation:135},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.5,-11,22,22);
p.frameBounds = [rect, new cjs.Rectangle(-12.7,-13.2,26.5,26.5), new cjs.Rectangle(-15,-15.4,31.1,31.1), new cjs.Rectangle(-17.2,-17.6,35.7,35.7), new cjs.Rectangle(-19.4,-19.7,40,40), new cjs.Rectangle(-21.4,-21.7,44,44), new cjs.Rectangle(-23.3,-23.4,47.7,47.7), new cjs.Rectangle(-24.9,-24.9,50.8,50.8), new cjs.Rectangle(-26.1,-26,53.3,53.3), new cjs.Rectangle(-27.1,-26.8,55.1,55.1), new cjs.Rectangle(-27.6,-27.1,56,56), new cjs.Rectangle(-27.7,-27.1,56,56), new cjs.Rectangle(-27.2,-26.5,55,55), new cjs.Rectangle(-26.3,-25.5,53,53), new cjs.Rectangle(-25,-24,50,50), new cjs.Rectangle(-27,-25.9,53.8,53.8), new cjs.Rectangle(-28,-26.9,55.7,55.7), new cjs.Rectangle(-28.1,-27,55.6,55.6), new cjs.Rectangle(-27.3,-26.2,53.7,53.7), new cjs.Rectangle(-25.6,-24.6,50.3,50.3), new cjs.Rectangle(-23.4,-22.4,45.7,45.7), new cjs.Rectangle(-20.6,-19.8,40.2,40.2), new cjs.Rectangle(-17.5,-16.8,34,34), new cjs.Rectangle(-14.2,-13.7,27.6,27.6), new cjs.Rectangle(-11.1,-10.6,21.3,21.3), new cjs.Rectangle(-10.9,-10.6,21.1,21.1), new cjs.Rectangle(-10.1,-9.8,19.6,19.6), new cjs.Rectangle(-8.8,-8.6,17.1,17), new cjs.Rectangle(-7,-6.9,13.7,13.7), new cjs.Rectangle(-5,-4.9,9.8,9.8)];


(lib.shine_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.shine_3_1_mc("synched",0);
	this.instance.setTransform(0,0,0.44,0.44,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0},9).to({scaleX:0.14,scaleY:0.14,rotation:135},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.5,-11,22,22);
p.frameBounds = [rect, new cjs.Rectangle(-14,-14.4,29.1,29.1), new cjs.Rectangle(-17.5,-17.8,36.1,36.1), new cjs.Rectangle(-20.8,-21.1,42.8,42.8), new cjs.Rectangle(-23.6,-23.8,48.5,48.5), new cjs.Rectangle(-25.9,-25.8,52.9,52.9), new cjs.Rectangle(-27.3,-27,55.5,55.5), new cjs.Rectangle(-27.7,-27.1,56.1,56.1), new cjs.Rectangle(-26.9,-26.2,54.3,54.3), new cjs.Rectangle(-25,-24,50,50), new cjs.Rectangle(-27.7,-26.6,55.1,55.1), new cjs.Rectangle(-28.1,-27,55.6,55.6), new cjs.Rectangle(-26.5,-25.5,52.2,52.2), new cjs.Rectangle(-23.4,-22.4,45.7,45.7), new cjs.Rectangle(-19.1,-18.3,37.2,37.2), new cjs.Rectangle(-14.2,-13.7,27.6,27.6), new cjs.Rectangle(-11,-10.6,21.3,21.3), new cjs.Rectangle(-10.1,-9.8,19.6,19.6), new cjs.Rectangle(-7.9,-7.8,15.5,15.5), new cjs.Rectangle(-5,-4.9,9.8,9.8)];


(lib.shine_1_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.mouseChildren = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// graph
	this.instance = new lib.shine_2_9_mc();
	this.instance.setTransform(0,0.1,0.765,0.765,30,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9.2,-9.2,18.4,18.4);
p.frameBounds = [rect];


(lib.shine_1_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.mouseChildren = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// graph
	this.instance = new lib.shine_2_8_mc();
	this.instance.setTransform(0,0.1,0.765,0.765,30,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9.2,-9.2,18.4,18.4);
p.frameBounds = [rect];


(lib.shine_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.mouseChildren = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// graph
	this.instance = new lib.shine_2_6_mc();
	this.instance.setTransform(0,0.1,0.765,0.765,30,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.2,-11.3,23,23);
p.frameBounds = [rect];


(lib.shine_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.mouseChildren = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// graph
	this.instance = new lib.shine_2_5_mc();
	this.instance.setTransform(0,0.1,0.765,0.765,30,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.2,-11.3,23,23);
p.frameBounds = [rect];


(lib.shine_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.mouseChildren = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// graph
	this.instance = new lib.shine_2_4_mc();
	this.instance.setTransform(0,0.1,0.765,0.765,30,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9.2,-9.2,18.4,18.4);
p.frameBounds = [rect];


(lib.shine_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.mouseChildren = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// graph
	this.instance = new lib.shine_2_3_mc();
	this.instance.setTransform(0,0.1,0.765,0.765,30,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9.2,-9.2,18.4,18.4);
p.frameBounds = [rect];


(lib.shine_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.mouseChildren = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// graph
	this.instance = new lib.shine_2_2_mc();
	this.instance.setTransform(0,0.1,0.765,0.765,30,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.2,-11.3,23,23);
p.frameBounds = [rect];


(lib.shine_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.mouseChildren = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// graph
	this.instance = new lib.shine_2_1_mc();
	this.instance.setTransform(0,0.1,0.765,0.765,30,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.2,-11.3,23,23);
p.frameBounds = [rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-9,-9,18,18);
p.frameBounds = [rect];


(lib.glitter_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.glitter_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.Glitter_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		///* this.stop();
		//this.mouseChildren = false;
		//this.mouseEnabled = false;*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.glitter_2_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

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
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.88,scaleY:0.88,alpha:0.602},19).to({scaleX:1,scaleY:1,alpha:0.801},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-28,56,56);
p.frameBounds = [rect, new cjs.Rectangle(-27.8,-27.8,55.7,55.7), new cjs.Rectangle(-27.6,-27.6,55.3,55.3), new cjs.Rectangle(-27.4,-27.4,55,55), new cjs.Rectangle(-27.3,-27.3,54.7,54.7), new cjs.Rectangle(-27.1,-27.1,54.3,54.3), new cjs.Rectangle(-26.9,-26.9,54,54), new cjs.Rectangle(-26.8,-26.8,53.6,53.6), new cjs.Rectangle(-26.6,-26.6,53.3,53.3), new cjs.Rectangle(-26.4,-26.4,52.9,52.9), new cjs.Rectangle(-26.2,-26.2,52.6,52.6), new cjs.Rectangle(-26.1,-26.1,52.3,52.3), new cjs.Rectangle(-25.9,-25.9,51.9,51.9), new cjs.Rectangle(-25.7,-25.7,51.6,51.6), new cjs.Rectangle(-25.6,-25.6,51.2,51.2), new cjs.Rectangle(-25.4,-25.4,50.8,50.8), new cjs.Rectangle(-25.2,-25.2,50.5,50.5), new cjs.Rectangle(-25,-25,50.2,50.2), new cjs.Rectangle(-24.9,-24.9,49.8,49.8), new cjs.Rectangle(-24.7,-24.7,49.5,49.5), new cjs.Rectangle(-24.9,-24.9,49.8,49.8), new cjs.Rectangle(-25,-25,50.2,50.2), new cjs.Rectangle(-25.2,-25.2,50.5,50.5), new cjs.Rectangle(-25.3,-25.3,50.8,50.8), new cjs.Rectangle(-25.5,-25.5,51.1,51.1), new cjs.Rectangle(-25.7,-25.7,51.5,51.5), new cjs.Rectangle(-25.8,-25.8,51.8,51.8), new cjs.Rectangle(-26,-26,52.1,52.1), new cjs.Rectangle(-26.2,-26.2,52.4,52.4), new cjs.Rectangle(-26.3,-26.3,52.8,52.8), new cjs.Rectangle(-26.5,-26.5,53.1,53.1), new cjs.Rectangle(-26.6,-26.6,53.4,53.4), new cjs.Rectangle(-26.8,-26.8,53.7,53.7), new cjs.Rectangle(-27,-27,54.1,54.1), new cjs.Rectangle(-27.1,-27.1,54.4,54.4), new cjs.Rectangle(-27.3,-27.3,54.7,54.7), new cjs.Rectangle(-27.5,-27.5,55,55), new cjs.Rectangle(-27.6,-27.6,55.4,55.4), new cjs.Rectangle(-27.8,-27.8,55.7,55.7), new cjs.Rectangle(-28,-28,56,56)];


(lib.blinking_light_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_light_1_2_mc();
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.012},14).to({scaleX:1,scaleY:1,alpha:0.301},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect, new cjs.Rectangle(-19.7,-19.7,39.5,39.5), new cjs.Rectangle(-19.4,-19.4,38.8,38.8), new cjs.Rectangle(-19.1,-19.1,38.3,38.3), new cjs.Rectangle(-18.8,-18.8,37.7,37.7), new cjs.Rectangle(-18.5,-18.5,37.2,37.2), new cjs.Rectangle(-18.2,-18.2,36.6,36.6), new cjs.Rectangle(-18,-18,36,36), new cjs.Rectangle(-17.7,-17.7,35.5,35.5), new cjs.Rectangle(-17.4,-17.4,34.8,34.8), new cjs.Rectangle(-17.1,-17.1,34.3,34.3), new cjs.Rectangle(-16.8,-16.8,33.7,33.7), new cjs.Rectangle(-16.5,-16.5,33.2,33.2), new cjs.Rectangle(-16.2,-16.2,32.6,32.6), new cjs.Rectangle(-16,-16,32,32), new cjs.Rectangle(-16.2,-16.2,32.6,32.6), new cjs.Rectangle(-16.5,-16.5,33.1,33.1), new cjs.Rectangle(-16.7,-16.7,33.6,33.6), new cjs.Rectangle(-17,-17,34.2,34.2), new cjs.Rectangle(-17.3,-17.3,34.7,34.7), new cjs.Rectangle(-17.5,-17.5,35.2,35.2), new cjs.Rectangle(-17.8,-17.8,35.8,35.8), new cjs.Rectangle(-18.1,-18.1,36.3,36.3), new cjs.Rectangle(-18.3,-18.3,36.8,36.8), new cjs.Rectangle(-18.6,-18.6,37.3,37.3), new cjs.Rectangle(-18.9,-18.9,37.8,37.8), new cjs.Rectangle(-19.1,-19.1,38.4,38.4), new cjs.Rectangle(-19.4,-19.4,39,39), new cjs.Rectangle(-19.7,-19.7,39.5,39.5), new cjs.Rectangle(-20,-20,40,40)];


(lib.gravity_big_explosion_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// container
	this.example_mc = new lib.ParticleBigGravityExplosionMC();

	this.timeline.addTween(cjs.Tween.get(this.example_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.TrackMove_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.parent.removeChild(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// animation
	this.instance = new lib.track_move_1_2_mc();
	this.instance.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},14).to({scaleX:0.9,scaleY:0.9,rotation:90},10).to({scaleX:0.8,scaleY:0.8,rotation:180},10).to({scaleX:0.6,scaleY:0.6,rotation:270},10).to({scaleX:0.4,scaleY:0.4,rotation:360},10).to({alpha:0.012},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect, new cjs.Rectangle(-31.4,-31.4,62.9,62.9), new cjs.Rectangle(-32.8,-32.8,65.7,65.7), new cjs.Rectangle(-34.2,-34.2,68.6,68.6), new cjs.Rectangle(-35.7,-35.7,71.5,71.5), new cjs.Rectangle(-37.1,-37.1,74.3,74.3), new cjs.Rectangle(-38.5,-38.5,77.2,77.2), new cjs.Rectangle(-39.9,-39.9,80,80), new cjs.Rectangle(-41.4,-41.4,82.9,82.9), new cjs.Rectangle(-42.8,-42.8,85.7,85.7), new cjs.Rectangle(-44.2,-44.2,88.6,88.6), new cjs.Rectangle(-45.7,-45.7,91.5,91.5), new cjs.Rectangle(-47.1,-47.1,94.3,94.3), new cjs.Rectangle(-48.5,-48.5,97.2,97.2), new cjs.Rectangle(-50,-50,100,100), new cjs.Rectangle(-56.6,-56.6,113.3,113.3), new cjs.Rectangle(-61.6,-61.5,123.2,123.2), new cjs.Rectangle(-65.1,-65.1,130.4,130.4), new cjs.Rectangle(-66.8,-66.9,133.8,133.8), new cjs.Rectangle(-67.1,-67.1,134.3,134.3), new cjs.Rectangle(-65.5,-65.5,131.1,131.1), new cjs.Rectangle(-62.4,-62.4,124.9,124.9), new cjs.Rectangle(-57.8,-57.8,115.7,115.7), new cjs.Rectangle(-52.1,-52,104.1,104.1), new cjs.Rectangle(-45,-45,90,90), new cjs.Rectangle(-50.9,-50.8,101.8,101.8), new cjs.Rectangle(-55.3,-55.2,110.6,110.6), new cjs.Rectangle(-58.5,-58.4,116.9,116.9), new cjs.Rectangle(-59.9,-59.9,119.9,119.9), new cjs.Rectangle(-60.1,-60.1,120.2,120.2), new cjs.Rectangle(-58.5,-58.5,117.1,117.1), new cjs.Rectangle(-55.8,-55.8,111.6,111.6), new cjs.Rectangle(-51.6,-51.5,103.1,103.1), new cjs.Rectangle(-46.3,-46.3,92.6,92.6), new cjs.Rectangle(-40,-40,80,80), new cjs.Rectangle(-44.6,-44.6,89.2,89.2), new cjs.Rectangle(-47.8,-47.8,95.6,95.6), new cjs.Rectangle(-49.7,-49.7,99.4,99.4), new cjs.Rectangle(-50.2,-50.2,100.4,100.4), new cjs.Rectangle(-49.5,-49.5,99,99), new cjs.Rectangle(-47.4,-47.4,94.8,94.8), new cjs.Rectangle(-44.3,-44.3,88.7,88.7), new cjs.Rectangle(-40.2,-40.2,80.5,80.5), new cjs.Rectangle(-35.4,-35.4,70.9,70.9), new cjs.Rectangle(-30,-30,60,60), new cjs.Rectangle(-33.1,-33.2,66.3,66.3), new cjs.Rectangle(-35.1,-35.2,70.4,70.4), new cjs.Rectangle(-36.2,-36.3,72.6,72.6), new cjs.Rectangle(-36.2,-36.2,72.5,72.5), new cjs.Rectangle(-35.3,-35.3,70.7,70.7), new cjs.Rectangle(-33.4,-33.4,67,67), new cjs.Rectangle(-30.8,-30.9,61.8,61.8), new cjs.Rectangle(-27.6,-27.6,55.3,55.3), new cjs.Rectangle(-24,-23.9,48,48), new cjs.Rectangle(-20,-20,40,40), rect=new cjs.Rectangle(-19.9,-19.9,40,40), rect, rect, rect, new cjs.Rectangle(-20,-20,40,40)];


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


(lib.skip_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.skip_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ArsHCIAAuDIXZAAIAAODg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-45,120,90);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-75,-45,150,90)];


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({x:5},5).to({x:-5},10).to({x:0},5).wait(81));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},10).wait(116));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},10).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-96,-96,192,192), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-100,-100,200,200), new cjs.Rectangle(-99.4,-99.4,199,199), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-98.4,-98.4,197,197), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-100,-100,200,200), new cjs.Rectangle(-99.4,-99.4,199,199), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-98.4,-98.4,197,197), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-97.4,-97.4,195,195), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-96.4,-96.4,193,193), new cjs.Rectangle(-95.9,-95.9,192,192), new cjs.Rectangle(-95.4,-95.4,191,191), rect=new cjs.Rectangle(-95,-95,190,190), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_anim_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_7_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({alpha:1},10).to({alpha:0.012},10).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGoQiwiwAAj4QAAj3CwiwQCwiwD3AAQD4AACwCwQCwCwAAD3QAAD4iwCwQiwCwj4AAQj3AAiwiwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_anim_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({alpha:0.801},10).to({alpha:1},10).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGoQiwiwAAj4QAAj3CwiwQCwiwD3AAQD4AACwCwQCwCwAAD3QAAD4iwCwQiwCwj4AAQj3AAiwiwg");
	this.shape.setTransform(7.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.7,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_anim_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_5_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({alpha:1},10).to({alpha:0.012},10).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGoQiwiwAAj4QAAj3CwiwQCwiwD3AAQD4AACwCwQCwCwAAD3QAAD4iwCwQiwCwj4AAQj3AAiwiwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_anim_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({alpha:0.801},10).to({alpha:1},10).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGoQiwiwAAj4QAAj3CwiwQCwiwD3AAQD4AACwCwQCwCwAAD3QAAD4iwCwQiwCwj4AAQj3AAiwiwg");
	this.shape.setTransform(7.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.7,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_anim_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({alpha:0.801},10).to({alpha:1},10).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGoQiviwAAj4QAAj3CviwQCwiwD3AAQD4AACwCwQCvCwAAD3QAAD4ivCwQiwCwj4AAQj3AAiwiwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_anim_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},19).to({alpha:1},11).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGoQiwiwAAj4QAAj3CwiwQCwiwD3AAQD4AACwCwQCwCwAAD3QAAD4iwCwQiwCwj4AAQj3AAiwiwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_1_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({alpha:1},15).to({alpha:0.012},15).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnKHMQi/i/ABkNQgBkLC/i/QC/i/ELAAQENAAC+C/QC+C/AAELQAAENi+C/Qi+C+kNAAQkLAAi/i+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
	this.ru = new lib.language_ru_mc();
	this.ru.setTransform(520,280);

	this.en = new lib.language_en_mc();
	this.en.setTransform(280,280);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.en},{t:this.ru}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(190,215,420,130);
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


(lib.shadows_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_6_2_img();
	this.instance.setTransform(-70,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_2_mc();
	this.check_mc.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-75,160,160);
p.frameBounds = [rect];


(lib.shadows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_6_1_img();
	this.instance.setTransform(-70,-69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_2_mc();
	this.check_mc.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-81,160,160);
p.frameBounds = [rect];


(lib.shadows_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_5_2_img();
	this.instance.setTransform(-70,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_2_mc();
	this.check_mc.setTransform(0,8);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-75,160,163);
p.frameBounds = [rect];


(lib.shadows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_5_1_img();
	this.instance.setTransform(-70,-69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_2_mc();
	this.check_mc.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-81,160,160);
p.frameBounds = [rect];


(lib.shadows_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_4_2_img();
	this.instance.setTransform(-70,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_2_mc();
	this.check_mc.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-75,160,160);
p.frameBounds = [rect];


(lib.shadows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_4_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_2_mc();
	this.check_mc.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-81,160,160);
p.frameBounds = [rect];


(lib.shadows_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_3_2_img();
	this.instance.setTransform(-70,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_2_mc();
	this.check_mc.setTransform(0,6);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-75,160,161);
p.frameBounds = [rect];


(lib.shadows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_3_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_2_mc();
	this.check_mc.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-81,160,160);
p.frameBounds = [rect];


(lib.shadows_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_2_2_img();
	this.instance.setTransform(-70,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_2_mc();
	this.check_mc.setTransform(0,6);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-75,160,161);
p.frameBounds = [rect];


(lib.shadows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_2_1_img();
	this.instance.setTransform(-70,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_2_mc();
	this.check_mc.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-77,160,160);
p.frameBounds = [rect];


(lib.shadows_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_1_2_img();
	this.instance.setTransform(-70,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_2_mc();
	this.check_mc.setTransform(0,8);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-75,160,163);
p.frameBounds = [rect];


(lib.shadows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_1_1_img();
	this.instance.setTransform(-70,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_2_mc();
	this.check_mc.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArsLuIAA3bIXZAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-77,160,160);
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


(lib.location_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_6_img();
	this.instance.setTransform(-170,-220);

	this.instance_1 = new lib.location_1_6_img();
	this.instance_1.setTransform(-170,-220);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_2_mc();

	this.instance_3 = new lib.animation_current_location_1_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Az3YTQoPqEgBuPQABuOIPqFQIPqELoABQLogBIQKEQIQKFAAOOQAAOPoQKEQoQKEroAAQroAAoPqEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-220,360,440);
p.frameBounds = [rect, rect, rect];


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_5_img();
	this.instance.setTransform(-170,-220);

	this.instance_1 = new lib.location_1_5_img();
	this.instance_1.setTransform(-170,-220);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_1_mc();

	this.instance_3 = new lib.animation_current_location_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Az3YTQoPqEgBuPQABuOIPqFQIPqELoABQLogBIQKEQIQKFAAOOQAAOPoQKEQoQKEroAAQroAAoPqEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-220,360,440);
p.frameBounds = [rect, rect, rect];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_4_img();
	this.instance.setTransform(-170,-220);

	this.instance_1 = new lib.location_1_4_img();
	this.instance_1.setTransform(-170,-220);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_2_mc();

	this.instance_3 = new lib.animation_current_location_1_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Az3YTQoPqEgBuPQABuOIPqFQIPqELoABQLogBIQKEQIQKFAAOOQAAOPoQKEQoQKEroAAQroAAoPqEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-220,360,440);
p.frameBounds = [rect, rect, rect];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_3_img();
	this.instance.setTransform(-170,-220);

	this.instance_1 = new lib.location_1_3_img();
	this.instance_1.setTransform(-170,-220);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_1_mc();

	this.instance_3 = new lib.animation_current_location_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Az3YTQoPqEgBuPQABuOIPqFQIPqELoABQLogBIQKEQIQKFAAOOQAAOPoQKEQoQKEroAAQroAAoPqEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-220,360,440);
p.frameBounds = [rect, rect, rect];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_2_img();
	this.instance.setTransform(-170,-220);

	this.instance_1 = new lib.location_1_2_img();
	this.instance_1.setTransform(-170,-220);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_2_mc();

	this.instance_3 = new lib.animation_current_location_1_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Az3YTQoPqEgBuPQABuOIPqFQIPqELoABQLogBIQKEQIQKFAAOOQAAOPoQKEQoQKEroAAQroAAoPqEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-220,360,440);
p.frameBounds = [rect, rect, rect];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_1_img();
	this.instance.setTransform(-170,-220);

	this.instance_1 = new lib.location_1_1_img();
	this.instance_1.setTransform(-170,-220);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_1_mc();

	this.instance_3 = new lib.animation_current_location_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Az3YTQoPqEgBuPQABuOIPqFQIPqELoABQLogBIQKEQIQKFAAOOQAAOPoQKEQoQKEroAAQroAAoPqEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-220,360,440);
p.frameBounds = [rect, rect, rect];


(lib.indicator_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shadow
	this.instance = new lib.indicator_4_mc();
	this.instance.setTransform(-10,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ay7DUQhVhVgCh4IgBgHIABgGQACh3BVhWQBYhXB8gBQB9ABBYBXQAdAdATAiIdfAAQA/gBAsAtQArAsABA8QgBA+grArQgsAsg/ABI9fAAQgUAggcAeQhYBXh9ABQh8gBhYhXg");
	mask.setTransform(130,30);

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
p.nominalBounds = rect = new cjs.Rectangle(-10,-10,280,80);
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


(lib.hairstyle_check_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hairstyle_check_0_2_mc();
	this.instance.alpha = 0.602;

	this.instance_1 = new lib.hairstyle_check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-120,180,240);
p.frameBounds = [rect, rect];


(lib.hairstyle_check_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hairstyle_check_0_1_mc();
	this.instance.alpha = 0.602;

	this.instance_1 = new lib.hairstyle_check_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-120,180,240);
p.frameBounds = [rect, rect];


(lib.hairstyle_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_6_2_img();
	this.instance.setTransform(-90,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AuDR+MAAAgj7IcHAAMAAAAj7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-120,180,240);
p.frameBounds = [rect];


(lib.hairstyle_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_6_1_img();
	this.instance.setTransform(-90,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AuDR9MAAAgj6IcHAAMAAAAj6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-120,180,240);
p.frameBounds = [rect];


(lib.hairstyle_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_5_2_img();
	this.instance.setTransform(-90,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AuDR+MAAAgj7IcHAAMAAAAj7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-120,180,240);
p.frameBounds = [rect];


(lib.hairstyle_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_5_1_img();
	this.instance.setTransform(-90,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AuDR9MAAAgj6IcHAAMAAAAj6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-120,180,240);
p.frameBounds = [rect];


(lib.hairstyle_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_4_2_img();
	this.instance.setTransform(-90,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AuDR+MAAAgj7IcHAAMAAAAj7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-120,180,240);
p.frameBounds = [rect];


(lib.hairstyle_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_4_1_img();
	this.instance.setTransform(-90,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AuDR9MAAAgj6IcHAAMAAAAj6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-120,180,240);
p.frameBounds = [rect];


(lib.hairstyle_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_3_2_img();
	this.instance.setTransform(-90,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AuDR+MAAAgj7IcHAAMAAAAj7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-120,180,240);
p.frameBounds = [rect];


(lib.hairstyle_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_3_1_img();
	this.instance.setTransform(-90,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AuDR9MAAAgj6IcHAAMAAAAj6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-120,180,240);
p.frameBounds = [rect];


(lib.hairstyle_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_2_2_img();
	this.instance.setTransform(-90,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AuDR+MAAAgj7IcHAAMAAAAj7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-120,180,240);
p.frameBounds = [rect];


(lib.hairstyle_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_2_1_img();
	this.instance.setTransform(-90,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AuDR9MAAAgj6IcHAAMAAAAj6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-120,180,240);
p.frameBounds = [rect];


(lib.hairstyle_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_1_2_img();
	this.instance.setTransform(-90,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AuDR+MAAAgj7IcHAAMAAAAj7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-120,180,240);
p.frameBounds = [rect];


(lib.hairstyle_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_1_1_img();
	this.instance.setTransform(-90,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AuDR9MAAAgj6IcHAAMAAAAj6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-120,180,240);
p.frameBounds = [rect];


(lib.frame_locations_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":169});

	// timeline functions:
	this.frame_84 = function() {
		try
		{
			app.addSoundFunc("whoosh_sound", 0.2);
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
			app.addSoundFunc("whoosh_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(84).call(this.frame_84).wait(30).call(this.frame_114).wait(56));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(-150,270,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(90,270,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(30,270,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(-30,270,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_1_mc();
	this.instance_4.setTransform(-90,270,0.833,0.833);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.location_progress_2_mc();
	this.instance_5.setTransform(150,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(170));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(89).to({scaleY:0.91,y:-120},12).to({scaleY:1,y:600},18).wait(51));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(24).to({scaleX:1.09,scaleY:1.09},10).to({scaleX:1,scaleY:1},20).wait(5).to({scaleX:0.91,scaleY:0.91},10).to({scaleX:1,scaleY:1},20).wait(30).to({scaleY:0.91,y:-120},12).to({scaleY:1,y:600},18).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-220,720,520);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-360,-222,721.7,522), new cjs.Rectangle(-360,-224,723.3,524), new cjs.Rectangle(-360,-226,724.9,526), new cjs.Rectangle(-360,-228,726.6,528), new cjs.Rectangle(-360,-230,728.2,530), new cjs.Rectangle(-360,-232,729.8,532), new cjs.Rectangle(-360,-234,731.5,534), new cjs.Rectangle(-360,-236,733.1,536), new cjs.Rectangle(-360,-238,734.7,538), new cjs.Rectangle(-360,-240,736.4,540), new cjs.Rectangle(-360,-239,735.6,539), new cjs.Rectangle(-360,-238,734.7,538), new cjs.Rectangle(-360,-237,733.9,537), new cjs.Rectangle(-360,-236,733.1,536), new cjs.Rectangle(-360,-235,732.3,535), new cjs.Rectangle(-360,-234,731.5,534), new cjs.Rectangle(-360,-233,730.7,533), new cjs.Rectangle(-360,-232,729.9,532), new cjs.Rectangle(-360,-231,729.1,531), new cjs.Rectangle(-360,-230,728.2,530), new cjs.Rectangle(-360,-229,727.4,529), new cjs.Rectangle(-360,-228,726.6,528), new cjs.Rectangle(-360,-227,725.8,527), new cjs.Rectangle(-360,-226,725,526), new cjs.Rectangle(-360,-225,724.2,525), new cjs.Rectangle(-360,-224,723.3,524), new cjs.Rectangle(-360,-223,722.5,523), new cjs.Rectangle(-360,-222,721.7,522), new cjs.Rectangle(-360,-221,720.8,521), rect=new cjs.Rectangle(-360,-220,720,520), rect, rect, rect, rect, rect, new cjs.Rectangle(-360,-220,718.4,520), new cjs.Rectangle(-360,-220,716.8,520), new cjs.Rectangle(-360,-220,715.1,520), new cjs.Rectangle(-360,-220,713.5,520), new cjs.Rectangle(-360,-220,711.8,520), new cjs.Rectangle(-360,-220,710.2,520), new cjs.Rectangle(-360,-220,708.6,520), new cjs.Rectangle(-360,-220,706.9,520), new cjs.Rectangle(-360,-220,705.3,520), new cjs.Rectangle(-360,-220,703.6,520), new cjs.Rectangle(-360,-220,704.5,520), new cjs.Rectangle(-360,-220,705.3,520), new cjs.Rectangle(-360,-220,706.1,520), new cjs.Rectangle(-360,-220,706.9,520), new cjs.Rectangle(-360,-220,707.8,520), new cjs.Rectangle(-360,-220,708.6,520), new cjs.Rectangle(-360,-220,709.4,520), new cjs.Rectangle(-360,-220,710.2,520), new cjs.Rectangle(-360,-220,711.1,520), new cjs.Rectangle(-360,-220,711.9,520), new cjs.Rectangle(-360,-220,712.7,520), new cjs.Rectangle(-360,-220,713.5,520), new cjs.Rectangle(-360,-220,714.3,520), new cjs.Rectangle(-360,-220,715.2,520), new cjs.Rectangle(-360,-220,716,520), new cjs.Rectangle(-360,-220,716.8,520), new cjs.Rectangle(-360,-220,717.6,520), new cjs.Rectangle(-360,-220,718.4,520), new cjs.Rectangle(-360,-220,719.3,520), new cjs.Rectangle(-360,-220,720,520), new cjs.Rectangle(-360,-228.3,720,528.4), new cjs.Rectangle(-360,-236.6,720,536.7), new cjs.Rectangle(-360,-245,720,545), new cjs.Rectangle(-360,-253.3,720,553.4), new cjs.Rectangle(-360,-261.6,720,561.7), new cjs.Rectangle(-360,-270,720,570), new cjs.Rectangle(-360,-278.3,720,578.4), new cjs.Rectangle(-360,-286.6,720,586.7), new cjs.Rectangle(-360,-295,720,595), new cjs.Rectangle(-360,-303.3,720,603.4), new cjs.Rectangle(-360,-311.6,720,611.7), new cjs.Rectangle(-360,-320,720,620), new cjs.Rectangle(-360,-281.1,720,581.1), new cjs.Rectangle(-360,-242.2,720,542.2), rect=new cjs.Rectangle(-360,-220,720,520), rect, rect, new cjs.Rectangle(-360,-220,720,546.6), new cjs.Rectangle(-360,-220,720,587.8), new cjs.Rectangle(-360,-220,720,628.9), new cjs.Rectangle(-360,-220,720,670), new cjs.Rectangle(-360,-220,720,711.1), new cjs.Rectangle(-360,-220,720,752.2), new cjs.Rectangle(-360,-220,720,793.3), new cjs.Rectangle(-360,-220,720,834.4), new cjs.Rectangle(-360,-220,720,875.5), new cjs.Rectangle(-360,-220,720,916.6), new cjs.Rectangle(-360,-220,720,957.7), new cjs.Rectangle(-360,-220,720,998.9), new cjs.Rectangle(-360,-220,720,1040), new cjs.Rectangle(-360,-228.3,720,1048.4), new cjs.Rectangle(-360,-236.6,720,1056.7), new cjs.Rectangle(-360,-245,720,1065), new cjs.Rectangle(-360,-253.3,720,1073.4), new cjs.Rectangle(-360,-261.6,720,1081.7), new cjs.Rectangle(-360,-270,720,1090), new cjs.Rectangle(-360,-278.3,720,1098.4), new cjs.Rectangle(-360,-286.6,720,1106.7), new cjs.Rectangle(-360,-295,720,1115), new cjs.Rectangle(-360,-303.3,720,1123.4), new cjs.Rectangle(-360,-311.6,720,1131.7), new cjs.Rectangle(-360,-320,720,1140), new cjs.Rectangle(-360,-281.1,720,1101.1), new cjs.Rectangle(-360,-242.2,720,1062.2), new cjs.Rectangle(-360,-203.3,720,1023.4), new cjs.Rectangle(-360,-164.5,720,984.5), new cjs.Rectangle(-360,-125.6,720,945.6), new cjs.Rectangle(-360,-86.7,720,906.7), new cjs.Rectangle(-360,-47.8,720,867.8), new cjs.Rectangle(-360,-8.9,720,829), new cjs.Rectangle(-360,30,720,790.1), new cjs.Rectangle(-360,68.8,720,751.2), new cjs.Rectangle(-360,107.7,720,712.3), new cjs.Rectangle(-360,146.6,720,673.4), new cjs.Rectangle(-360,185.5,720,634.5), new cjs.Rectangle(-360,224.4,720,595.6), rect=new cjs.Rectangle(-360,240,720,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":129});

	// timeline functions:
	this.frame_19 = function() {
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
	this.frame_34 = function() {
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
	this.frame_39 = function() {
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
	this.frame_54 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(15).call(this.frame_34).wait(5).call(this.frame_39).wait(15).call(this.frame_54).wait(76));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(150,270,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(-150,270,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(30,270,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(-30,270,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_1_mc();
	this.instance_4.setTransform(-90,270,0.833,0.833);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.location_progress_2_mc();
	this.instance_5.setTransform(90,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(130));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:-550},0).wait(23).to({scaleY:0.86,y:160},18).to({scaleY:1,y:0},12).wait(25).to({scaleX:0.91,scaleY:0.91},10).to({scaleX:1,scaleY:1},20).wait(21));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({y:-550},0).wait(43).to({scaleY:0.86,y:160},18).to({scaleY:1,y:0},12).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-220,720,520);
p.frameBounds = [rect, rect=new cjs.Rectangle(-360,-770,720,1070), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-360,-770,720,1082.3), new cjs.Rectangle(-360,-770,720,1120), new cjs.Rectangle(-359.9,-770,720,1109.3), new cjs.Rectangle(-359.9,-770,720,1098.5), new cjs.Rectangle(-359.9,-728.9,720,1046.5), new cjs.Rectangle(-359.9,-687.7,720,994.5), new cjs.Rectangle(-359.9,-646.6,720,946.7), new cjs.Rectangle(-359.9,-605.5,720,905.6), new cjs.Rectangle(-359.9,-564.4,720,864.4), new cjs.Rectangle(-359.9,-523.3,720,823.3), new cjs.Rectangle(-359.9,-482.2,720,782.2), new cjs.Rectangle(-359.9,-441.1,720,741.1), new cjs.Rectangle(-359.9,-400,720,700), new cjs.Rectangle(-360,-358.9,720,658.9), new cjs.Rectangle(-360,-317.7,720,617.8), new cjs.Rectangle(-360,-276.6,720,576.7), new cjs.Rectangle(-360,-235.5,720,535.6), rect=new cjs.Rectangle(-360,-220,720,520), rect, rect, new cjs.Rectangle(-360,-220,720,532.3), new cjs.Rectangle(-360,-220,720,570), new cjs.Rectangle(-360,-220,720,559.3), new cjs.Rectangle(-360,-220,720,548.5), new cjs.Rectangle(-360,-220,720,537.6), new cjs.Rectangle(-360,-220,720,526.7), rect=new cjs.Rectangle(-360,-220,720,520), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-358.3,-220,718.4,520), new cjs.Rectangle(-356.7,-220,716.8,520), new cjs.Rectangle(-355.1,-220,715.1,520), new cjs.Rectangle(-353.4,-220,713.5,520), new cjs.Rectangle(-351.8,-220,711.8,520), new cjs.Rectangle(-350.2,-220,710.2,520), new cjs.Rectangle(-348.5,-220,708.6,520), new cjs.Rectangle(-346.9,-220,706.9,520), new cjs.Rectangle(-345.2,-220,705.3,520), new cjs.Rectangle(-343.6,-220,703.6,520), new cjs.Rectangle(-344.4,-220,704.5,520), new cjs.Rectangle(-345.2,-220,705.3,520), new cjs.Rectangle(-346,-220,706.1,520), new cjs.Rectangle(-346.9,-220,706.9,520), new cjs.Rectangle(-347.7,-220,707.8,520), new cjs.Rectangle(-348.6,-220,708.6,520), new cjs.Rectangle(-349.4,-220,709.4,520), new cjs.Rectangle(-350.2,-220,710.2,520), new cjs.Rectangle(-351,-220,711.1,520), new cjs.Rectangle(-351.8,-220,711.9,520), new cjs.Rectangle(-352.7,-220,712.7,520), new cjs.Rectangle(-353.5,-220,713.5,520), new cjs.Rectangle(-354.3,-220,714.3,520), new cjs.Rectangle(-355.1,-220,715.2,520), new cjs.Rectangle(-355.9,-220,716,520), new cjs.Rectangle(-356.7,-220,716.8,520), new cjs.Rectangle(-357.6,-220,717.6,520), new cjs.Rectangle(-358.4,-220,718.4,520), new cjs.Rectangle(-359.2,-220,719.3,520), rect=new cjs.Rectangle(-360,-220,720,520), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":169});

	// timeline functions:
	this.frame_84 = function() {
		try
		{
			app.addSoundFunc("whoosh_sound", 0.2);
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
			app.addSoundFunc("whoosh_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(84).call(this.frame_84).wait(30).call(this.frame_114).wait(56));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(150,270,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(90,270,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(-150,270,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(-30,270,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_1_mc();
	this.instance_4.setTransform(-90,270,0.833,0.833);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.location_progress_2_mc();
	this.instance_5.setTransform(30,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(170));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(89).to({scaleY:0.91,y:-120},12).to({scaleY:1,y:600},18).wait(51));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(24).to({scaleX:1.09,scaleY:1.09},10).to({scaleX:1,scaleY:1},20).wait(5).to({scaleX:0.91,scaleY:0.91},10).to({scaleX:1,scaleY:1},20).wait(30).to({scaleY:0.91,y:-120},12).to({scaleY:1,y:600},18).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-220,720,520);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-360,-222,721.7,522), new cjs.Rectangle(-360,-224,723.3,524), new cjs.Rectangle(-360,-226,724.9,526), new cjs.Rectangle(-360,-228,726.6,528), new cjs.Rectangle(-360,-230,728.2,530), new cjs.Rectangle(-360,-232,729.8,532), new cjs.Rectangle(-360,-234,731.5,534), new cjs.Rectangle(-360,-236,733.1,536), new cjs.Rectangle(-360,-238,734.7,538), new cjs.Rectangle(-360,-240,736.4,540), new cjs.Rectangle(-360,-239,735.6,539), new cjs.Rectangle(-360,-238,734.7,538), new cjs.Rectangle(-360,-237,733.9,537), new cjs.Rectangle(-360,-236,733.1,536), new cjs.Rectangle(-360,-235,732.3,535), new cjs.Rectangle(-360,-234,731.5,534), new cjs.Rectangle(-360,-233,730.7,533), new cjs.Rectangle(-360,-232,729.9,532), new cjs.Rectangle(-360,-231,729.1,531), new cjs.Rectangle(-360,-230,728.2,530), new cjs.Rectangle(-360,-229,727.4,529), new cjs.Rectangle(-360,-228,726.6,528), new cjs.Rectangle(-360,-227,725.8,527), new cjs.Rectangle(-360,-226,725,526), new cjs.Rectangle(-360,-225,724.2,525), new cjs.Rectangle(-360,-224,723.3,524), new cjs.Rectangle(-360,-223,722.5,523), new cjs.Rectangle(-360,-222,721.7,522), new cjs.Rectangle(-360,-221,720.8,521), rect=new cjs.Rectangle(-360,-220,720,520), rect, rect, rect, rect, rect, new cjs.Rectangle(-360,-220,718.4,520), new cjs.Rectangle(-360,-220,716.8,520), new cjs.Rectangle(-360,-220,715.1,520), new cjs.Rectangle(-360,-220,713.5,520), new cjs.Rectangle(-360,-220,711.8,520), new cjs.Rectangle(-360,-220,710.2,520), new cjs.Rectangle(-360,-220,708.6,520), new cjs.Rectangle(-360,-220,706.9,520), new cjs.Rectangle(-360,-220,705.3,520), new cjs.Rectangle(-360,-220,703.6,520), new cjs.Rectangle(-360,-220,704.5,520), new cjs.Rectangle(-360,-220,705.3,520), new cjs.Rectangle(-360,-220,706.1,520), new cjs.Rectangle(-360,-220,706.9,520), new cjs.Rectangle(-360,-220,707.8,520), new cjs.Rectangle(-360,-220,708.6,520), new cjs.Rectangle(-360,-220,709.4,520), new cjs.Rectangle(-360,-220,710.2,520), new cjs.Rectangle(-360,-220,711.1,520), new cjs.Rectangle(-360,-220,711.9,520), new cjs.Rectangle(-360,-220,712.7,520), new cjs.Rectangle(-360,-220,713.5,520), new cjs.Rectangle(-360,-220,714.3,520), new cjs.Rectangle(-360,-220,715.2,520), new cjs.Rectangle(-360,-220,716,520), new cjs.Rectangle(-360,-220,716.8,520), new cjs.Rectangle(-360,-220,717.6,520), new cjs.Rectangle(-360,-220,718.4,520), new cjs.Rectangle(-360,-220,719.3,520), new cjs.Rectangle(-360,-220,720,520), new cjs.Rectangle(-360,-228.3,720,528.4), new cjs.Rectangle(-360,-236.6,720,536.7), new cjs.Rectangle(-360,-245,720,545), new cjs.Rectangle(-360,-253.3,720,553.4), new cjs.Rectangle(-360,-261.6,720,561.7), new cjs.Rectangle(-360,-270,720,570), new cjs.Rectangle(-360,-278.3,720,578.4), new cjs.Rectangle(-360,-286.6,720,586.7), new cjs.Rectangle(-360,-295,720,595), new cjs.Rectangle(-360,-303.3,720,603.4), new cjs.Rectangle(-360,-311.6,720,611.7), new cjs.Rectangle(-360,-320,720,620), new cjs.Rectangle(-360,-281.1,720,581.1), new cjs.Rectangle(-360,-242.2,720,542.2), rect=new cjs.Rectangle(-360,-220,720,520), rect, rect, new cjs.Rectangle(-360,-220,720,546.6), new cjs.Rectangle(-360,-220,720,587.8), new cjs.Rectangle(-360,-220,720,628.9), new cjs.Rectangle(-360,-220,720,670), new cjs.Rectangle(-360,-220,720,711.1), new cjs.Rectangle(-360,-220,720,752.2), new cjs.Rectangle(-360,-220,720,793.3), new cjs.Rectangle(-360,-220,720,834.4), new cjs.Rectangle(-360,-220,720,875.5), new cjs.Rectangle(-360,-220,720,916.6), new cjs.Rectangle(-360,-220,720,957.7), new cjs.Rectangle(-360,-220,720,998.9), new cjs.Rectangle(-360,-220,720,1040), new cjs.Rectangle(-360,-228.3,720,1048.4), new cjs.Rectangle(-360,-236.6,720,1056.7), new cjs.Rectangle(-360,-245,720,1065), new cjs.Rectangle(-360,-253.3,720,1073.4), new cjs.Rectangle(-360,-261.6,720,1081.7), new cjs.Rectangle(-360,-270,720,1090), new cjs.Rectangle(-360,-278.3,720,1098.4), new cjs.Rectangle(-360,-286.6,720,1106.7), new cjs.Rectangle(-360,-295,720,1115), new cjs.Rectangle(-360,-303.3,720,1123.4), new cjs.Rectangle(-360,-311.6,720,1131.7), new cjs.Rectangle(-360,-320,720,1140), new cjs.Rectangle(-360,-281.1,720,1101.1), new cjs.Rectangle(-360,-242.2,720,1062.2), new cjs.Rectangle(-360,-203.3,720,1023.4), new cjs.Rectangle(-360,-164.5,720,984.5), new cjs.Rectangle(-360,-125.6,720,945.6), new cjs.Rectangle(-360,-86.7,720,906.7), new cjs.Rectangle(-360,-47.8,720,867.8), new cjs.Rectangle(-360,-8.9,720,829), new cjs.Rectangle(-360,30,720,790.1), new cjs.Rectangle(-360,68.8,720,751.2), new cjs.Rectangle(-360,107.7,720,712.3), new cjs.Rectangle(-360,146.6,720,673.4), new cjs.Rectangle(-360,185.5,720,634.5), new cjs.Rectangle(-360,224.4,720,595.6), rect=new cjs.Rectangle(-360,240,720,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":129});

	// timeline functions:
	this.frame_19 = function() {
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
	this.frame_34 = function() {
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
	this.frame_39 = function() {
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
	this.frame_54 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(15).call(this.frame_34).wait(5).call(this.frame_39).wait(15).call(this.frame_54).wait(76));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(150,270,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(90,270,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(30,270,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(-150,270,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_1_mc();
	this.instance_4.setTransform(-90,270,0.833,0.833);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.location_progress_2_mc();
	this.instance_5.setTransform(-30,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(130));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-550},0).wait(23).to({scaleY:0.86,y:160},18).to({scaleY:1,y:0},12).wait(25).to({scaleX:0.91,scaleY:0.91},10).to({scaleX:1,scaleY:1},20).wait(21));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({y:-550},0).wait(43).to({scaleY:0.86,y:160},18).to({scaleY:1,y:0},12).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-220,720,520);
p.frameBounds = [rect, rect=new cjs.Rectangle(-360,-770,720,1070), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-360,-770,720,1082.3), new cjs.Rectangle(-360,-770,720,1120), new cjs.Rectangle(-359.9,-770,720,1109.3), new cjs.Rectangle(-359.9,-770,720,1098.5), new cjs.Rectangle(-359.9,-728.9,720,1046.5), new cjs.Rectangle(-359.9,-687.7,720,994.5), new cjs.Rectangle(-359.9,-646.6,720,946.7), new cjs.Rectangle(-359.9,-605.5,720,905.6), new cjs.Rectangle(-359.9,-564.4,720,864.4), new cjs.Rectangle(-359.9,-523.3,720,823.3), new cjs.Rectangle(-359.9,-482.2,720,782.2), new cjs.Rectangle(-359.9,-441.1,720,741.1), new cjs.Rectangle(-359.9,-400,720,700), new cjs.Rectangle(-360,-358.9,720,658.9), new cjs.Rectangle(-360,-317.7,720,617.8), new cjs.Rectangle(-360,-276.6,720,576.7), new cjs.Rectangle(-360,-235.5,720,535.6), rect=new cjs.Rectangle(-360,-220,720,520), rect, rect, new cjs.Rectangle(-360,-220,720,532.3), new cjs.Rectangle(-360,-220,720,570), new cjs.Rectangle(-360,-220,720,559.3), new cjs.Rectangle(-360,-220,720,548.5), new cjs.Rectangle(-360,-220,720,537.6), new cjs.Rectangle(-360,-220,720,526.7), rect=new cjs.Rectangle(-360,-220,720,520), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-358.3,-220,718.4,520), new cjs.Rectangle(-356.7,-220,716.8,520), new cjs.Rectangle(-355.1,-220,715.1,520), new cjs.Rectangle(-353.4,-220,713.5,520), new cjs.Rectangle(-351.8,-220,711.8,520), new cjs.Rectangle(-350.2,-220,710.2,520), new cjs.Rectangle(-348.5,-220,708.6,520), new cjs.Rectangle(-346.9,-220,706.9,520), new cjs.Rectangle(-345.2,-220,705.3,520), new cjs.Rectangle(-343.6,-220,703.6,520), new cjs.Rectangle(-344.4,-220,704.5,520), new cjs.Rectangle(-345.2,-220,705.3,520), new cjs.Rectangle(-346,-220,706.1,520), new cjs.Rectangle(-346.9,-220,706.9,520), new cjs.Rectangle(-347.7,-220,707.8,520), new cjs.Rectangle(-348.6,-220,708.6,520), new cjs.Rectangle(-349.4,-220,709.4,520), new cjs.Rectangle(-350.2,-220,710.2,520), new cjs.Rectangle(-351,-220,711.1,520), new cjs.Rectangle(-351.8,-220,711.9,520), new cjs.Rectangle(-352.7,-220,712.7,520), new cjs.Rectangle(-353.5,-220,713.5,520), new cjs.Rectangle(-354.3,-220,714.3,520), new cjs.Rectangle(-355.1,-220,715.2,520), new cjs.Rectangle(-355.9,-220,716,520), new cjs.Rectangle(-356.7,-220,716.8,520), new cjs.Rectangle(-357.6,-220,717.6,520), new cjs.Rectangle(-358.4,-220,718.4,520), new cjs.Rectangle(-359.2,-220,719.3,520), rect=new cjs.Rectangle(-360,-220,720,520), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":169});

	// timeline functions:
	this.frame_84 = function() {
		try
		{
			app.addSoundFunc("whoosh_sound", 0.2);
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
			app.addSoundFunc("whoosh_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(84).call(this.frame_84).wait(30).call(this.frame_114).wait(56));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(150,270,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(90,270,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(30,270,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(-30,270,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_1_mc();
	this.instance_4.setTransform(-150,270,0.833,0.833);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.location_progress_2_mc();
	this.instance_5.setTransform(-90,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(170));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(89).to({scaleY:0.91,y:-120},12).to({scaleY:1,y:600},18).wait(51));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(24).to({scaleX:1.05,scaleY:1.05},10).to({scaleX:1,scaleY:1},20).wait(5).to({scaleX:0.91,scaleY:0.91},10).to({scaleX:1,scaleY:1},20).wait(30).to({scaleY:0.91,y:-120},12).to({scaleY:1,y:600},18).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-220,720,520);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-360,-221,720.8,521), new cjs.Rectangle(-360,-222,721.7,522), new cjs.Rectangle(-360,-223,722.5,523), new cjs.Rectangle(-360,-224,723.3,524), new cjs.Rectangle(-360,-225,724.1,525), new cjs.Rectangle(-360,-226,724.9,526), new cjs.Rectangle(-360,-227,725.7,527), new cjs.Rectangle(-360,-228,726.6,528), new cjs.Rectangle(-360,-229,727.4,529), new cjs.Rectangle(-360,-230,728.2,530), new cjs.Rectangle(-360,-229.5,727.8,529.5), new cjs.Rectangle(-360,-229,727.4,529), new cjs.Rectangle(-360,-228.5,727,528.5), new cjs.Rectangle(-360,-228,726.5,528), new cjs.Rectangle(-360,-227.5,726.1,527.5), new cjs.Rectangle(-360,-227,725.7,527), new cjs.Rectangle(-360,-226.5,725.3,526.5), new cjs.Rectangle(-360,-226,724.9,526), new cjs.Rectangle(-360,-225.5,724.5,525.5), new cjs.Rectangle(-360,-225,724.1,525), new cjs.Rectangle(-360,-224.5,723.6,524.5), new cjs.Rectangle(-360,-224,723.3,524), new cjs.Rectangle(-360,-223.5,722.9,523.5), new cjs.Rectangle(-360,-223,722.5,523), new cjs.Rectangle(-360,-222.5,722,522.5), new cjs.Rectangle(-360,-222,721.6,522), new cjs.Rectangle(-360,-221.5,721.2,521.5), new cjs.Rectangle(-360,-221,720.8,521), new cjs.Rectangle(-360,-220.5,720.4,520.5), rect=new cjs.Rectangle(-360,-220,720,520), rect, rect, rect, rect, rect, new cjs.Rectangle(-360,-220,718.4,520), new cjs.Rectangle(-360,-220,716.8,520), new cjs.Rectangle(-360,-220,715.1,520), new cjs.Rectangle(-360,-220,713.5,520), new cjs.Rectangle(-360,-220,711.8,520), new cjs.Rectangle(-360,-220,710.2,520), new cjs.Rectangle(-360,-220,708.6,520), new cjs.Rectangle(-360,-220,706.9,520), new cjs.Rectangle(-360,-220,705.3,520), new cjs.Rectangle(-360,-220,703.6,520), new cjs.Rectangle(-360,-220,704.5,520), new cjs.Rectangle(-360,-220,705.3,520), new cjs.Rectangle(-360,-220,706.1,520), new cjs.Rectangle(-360,-220,706.9,520), new cjs.Rectangle(-360,-220,707.8,520), new cjs.Rectangle(-360,-220,708.6,520), new cjs.Rectangle(-360,-220,709.4,520), new cjs.Rectangle(-360,-220,710.2,520), new cjs.Rectangle(-360,-220,711.1,520), new cjs.Rectangle(-360,-220,711.9,520), new cjs.Rectangle(-360,-220,712.7,520), new cjs.Rectangle(-360,-220,713.5,520), new cjs.Rectangle(-360,-220,714.3,520), new cjs.Rectangle(-360,-220,715.2,520), new cjs.Rectangle(-360,-220,716,520), new cjs.Rectangle(-360,-220,716.8,520), new cjs.Rectangle(-360,-220,717.6,520), new cjs.Rectangle(-360,-220,718.4,520), new cjs.Rectangle(-360,-220,719.3,520), new cjs.Rectangle(-360,-220,720,520), new cjs.Rectangle(-360,-228.3,720,528.4), new cjs.Rectangle(-360,-236.6,720,536.7), new cjs.Rectangle(-360,-245,720,545), new cjs.Rectangle(-360,-253.3,720,553.4), new cjs.Rectangle(-360,-261.6,720,561.7), new cjs.Rectangle(-360,-270,720,570), new cjs.Rectangle(-360,-278.3,720,578.4), new cjs.Rectangle(-360,-286.6,720,586.7), new cjs.Rectangle(-360,-295,720,595), new cjs.Rectangle(-360,-303.3,720,603.4), new cjs.Rectangle(-360,-311.6,720,611.7), new cjs.Rectangle(-360,-320,720,620), new cjs.Rectangle(-360,-281.1,720,581.1), new cjs.Rectangle(-360,-242.2,720,542.2), rect=new cjs.Rectangle(-360,-220,720,520), rect, rect, new cjs.Rectangle(-360,-220,720,546.6), new cjs.Rectangle(-360,-220,720,587.8), new cjs.Rectangle(-360,-220,720,628.9), new cjs.Rectangle(-360,-220,720,670), new cjs.Rectangle(-360,-220,720,711.1), new cjs.Rectangle(-360,-220,720,752.2), new cjs.Rectangle(-360,-220,720,793.3), new cjs.Rectangle(-360,-220,720,834.4), new cjs.Rectangle(-360,-220,720,875.5), new cjs.Rectangle(-360,-220,720,916.6), new cjs.Rectangle(-360,-220,720,957.7), new cjs.Rectangle(-360,-220,720,998.9), new cjs.Rectangle(-360,-220,720,1040), new cjs.Rectangle(-360,-228.3,720,1048.4), new cjs.Rectangle(-360,-236.6,720,1056.7), new cjs.Rectangle(-360,-245,720,1065), new cjs.Rectangle(-360,-253.3,720,1073.4), new cjs.Rectangle(-360,-261.6,720,1081.7), new cjs.Rectangle(-360,-270,720,1090), new cjs.Rectangle(-360,-278.3,720,1098.4), new cjs.Rectangle(-360,-286.6,720,1106.7), new cjs.Rectangle(-360,-295,720,1115), new cjs.Rectangle(-360,-303.3,720,1123.4), new cjs.Rectangle(-360,-311.6,720,1131.7), new cjs.Rectangle(-360,-320,720,1140), new cjs.Rectangle(-360,-281.1,720,1101.1), new cjs.Rectangle(-360,-242.2,720,1062.2), new cjs.Rectangle(-360,-203.3,720,1023.4), new cjs.Rectangle(-360,-164.5,720,984.5), new cjs.Rectangle(-360,-125.6,720,945.6), new cjs.Rectangle(-360,-86.7,720,906.7), new cjs.Rectangle(-360,-47.8,720,867.8), new cjs.Rectangle(-360,-8.9,720,829), new cjs.Rectangle(-360,30,720,790.1), new cjs.Rectangle(-360,68.8,720,751.2), new cjs.Rectangle(-360,107.7,720,712.3), new cjs.Rectangle(-360,146.6,720,673.4), new cjs.Rectangle(-360,185.5,720,634.5), new cjs.Rectangle(-360,224.4,720,595.6), rect=new cjs.Rectangle(-360,240,720,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":129});

	// timeline functions:
	this.frame_19 = function() {
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
	this.frame_34 = function() {
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
	this.frame_39 = function() {
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
	this.frame_54 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(15).call(this.frame_34).wait(5).call(this.frame_39).wait(15).call(this.frame_54).wait(76));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(150,270,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(90,270,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(30,270,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(-30,270,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_1_mc();
	this.instance_4.setTransform(-90,270,0.833,0.833);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.location_progress_2_mc();
	this.instance_5.setTransform(-150,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(130));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:-550},0).wait(23).to({regY:0.1,scaleY:0.86,y:160.1},18).to({regY:0,scaleY:1,y:0},12).wait(25).to({scaleX:0.91,scaleY:0.91},10).to({scaleX:1,scaleY:1},20).wait(21));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-550},0).wait(43).to({regY:0.1,scaleY:0.86,y:160.1},18).to({regY:0,scaleY:1,y:0},12).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-220,720,520);
p.frameBounds = [rect, rect=new cjs.Rectangle(-360,-770,720,1070), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-360,-770,720,1082.3), new cjs.Rectangle(-360,-770,720,1120), new cjs.Rectangle(-360,-770,720,1109.2), new cjs.Rectangle(-360,-770,720,1098.3), new cjs.Rectangle(-360,-728.9,720,1046.4), new cjs.Rectangle(-360,-687.7,720,994.5), new cjs.Rectangle(-360,-646.6,720,946.7), new cjs.Rectangle(-360,-605.5,720,905.6), new cjs.Rectangle(-360,-564.4,720,864.4), new cjs.Rectangle(-360,-523.3,720,823.3), new cjs.Rectangle(-360,-482.2,720,782.2), new cjs.Rectangle(-360,-441,720,741.1), new cjs.Rectangle(-360,-399.9,720,700), new cjs.Rectangle(-360,-358.8,720,658.9), new cjs.Rectangle(-360,-317.7,720,617.7), new cjs.Rectangle(-360,-276.6,720,576.6), new cjs.Rectangle(-360,-235.5,720,535.5), rect=new cjs.Rectangle(-360,-220,720,520), rect, rect, new cjs.Rectangle(-360,-220,720,532.3), new cjs.Rectangle(-360,-220,720,570), new cjs.Rectangle(-360,-220,720,559.2), new cjs.Rectangle(-360,-220,720,548.3), new cjs.Rectangle(-360,-220,720,537.5), new cjs.Rectangle(-360,-220,720,526.7), rect=new cjs.Rectangle(-360,-220,720,520), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-358.3,-220,718.4,520), new cjs.Rectangle(-356.7,-220,716.7,520), new cjs.Rectangle(-355.1,-220,715.1,520), new cjs.Rectangle(-353.4,-220,713.5,520), new cjs.Rectangle(-351.8,-220,711.8,520), new cjs.Rectangle(-350.2,-220,710.2,520), new cjs.Rectangle(-348.5,-220,708.6,520), new cjs.Rectangle(-346.9,-220,707,520), new cjs.Rectangle(-345.3,-220,705.3,520), new cjs.Rectangle(-343.6,-220,703.6,520), new cjs.Rectangle(-344.4,-220,704.4,520), new cjs.Rectangle(-345.2,-220,705.3,520), new cjs.Rectangle(-346,-220,706.1,520), new cjs.Rectangle(-346.8,-220,706.9,520), new cjs.Rectangle(-347.7,-220,707.7,520), new cjs.Rectangle(-348.5,-220,708.5,520), new cjs.Rectangle(-349.3,-220,709.4,520), new cjs.Rectangle(-350.1,-220,710.2,520), new cjs.Rectangle(-350.9,-220,711,520), new cjs.Rectangle(-351.7,-220,711.8,520), new cjs.Rectangle(-352.5,-220,712.6,520), new cjs.Rectangle(-353.4,-220,713.4,520), new cjs.Rectangle(-354.2,-220,714.2,520), new cjs.Rectangle(-355,-220,715.1,520), new cjs.Rectangle(-355.8,-220,715.9,520), new cjs.Rectangle(-356.6,-220,716.7,520), new cjs.Rectangle(-357.5,-220,717.5,520), new cjs.Rectangle(-358.3,-220,718.3,520), new cjs.Rectangle(-359.1,-220,719.2,520), rect=new cjs.Rectangle(-360,-220,720,520), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.earrings_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_6_2_img();
	this.instance.setTransform(-54,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.earrings_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_6_1_img();
	this.instance.setTransform(-55,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.earrings_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_5_2_img();
	this.instance.setTransform(-55,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.earrings_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_5_1_img();
	this.instance.setTransform(-55,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.earrings_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_4_2_img();
	this.instance.setTransform(-55,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.earrings_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_4_1_img();
	this.instance.setTransform(-55,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.earrings_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_3_2_img();
	this.instance.setTransform(-55,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.earrings_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_3_1_img();
	this.instance.setTransform(-50,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.earrings_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_2_2_img();
	this.instance.setTransform(-55,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.earrings_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_2_1_img();
	this.instance.setTransform(-54,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.earrings_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_1_2_img();
	this.instance.setTransform(-43.5,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.earrings_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_1_1_img();
	this.instance.setTransform(-55,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.accessory_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.dress_check_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.dress_check_0_2_mc();
	this.instance.alpha = 0.602;

	this.instance_1 = new lib.dress_check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-160,240,320);
p.frameBounds = [rect, new cjs.Rectangle(-130,-160,260,320)];


(lib.dress_check_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.dress_check_0_1_mc();
	this.instance.alpha = 0.602;

	this.instance_1 = new lib.dress_check_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-160,240,320);
p.frameBounds = [rect, new cjs.Rectangle(-130,-160,260,320)];


(lib.dress_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_9_2_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuZAMAAAgx/MAldAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-160,240,320);
p.frameBounds = [rect];


(lib.dress_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_9_1_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuZAMAAAgx/MAldAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-160,240,320);
p.frameBounds = [rect];


(lib.dress_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_8_2_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuZAMAAAgx/MAldAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-160,240,320);
p.frameBounds = [rect];


(lib.dress_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_8_1_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuZAMAAAgx/MAldAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-160,240,320);
p.frameBounds = [rect];


(lib.dress_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_7_2_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuZAMAAAgx/MAldAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-160,240,320);
p.frameBounds = [rect];


(lib.dress_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_7_1_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuZAMAAAgx/MAldAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-160,240,320);
p.frameBounds = [rect];


(lib.dress_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_6_2_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuZAMAAAgx/MAldAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-160,240,320);
p.frameBounds = [rect];


(lib.dress_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_6_1_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuZAMAAAgx/MAldAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-160,240,320);
p.frameBounds = [rect];


(lib.dress_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_5_2_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuZAMAAAgx/MAldAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-160,240,320);
p.frameBounds = [rect];


(lib.dress_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_5_1_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuZAMAAAgx/MAldAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-160,240,320);
p.frameBounds = [rect];


(lib.dress_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_4_2_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuZAMAAAgx/MAldAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-160,240,320);
p.frameBounds = [rect];


(lib.dress_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_4_1_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuZAMAAAgx/MAldAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-160,240,320);
p.frameBounds = [rect];


(lib.dress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_3_2_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuZAMAAAgx/MAldAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-160,240,320);
p.frameBounds = [rect];


(lib.dress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_3_1_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuZAMAAAgx/MAldAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-160,240,320);
p.frameBounds = [rect];


(lib.dress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_2_2_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuZAMAAAgx/MAldAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-160,240,320);
p.frameBounds = [rect];


(lib.dress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_2_1_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuZAMAAAgx/MAldAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-160,240,320);
p.frameBounds = [rect];


(lib.dress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_1_2_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuZAMAAAgx/MAldAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-160,240,320);
p.frameBounds = [rect];


(lib.dress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_1_1_img();
	this.instance.setTransform(-120,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyuZAMAAAgx/MAldAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-160,240,320);
p.frameBounds = [rect];


(lib.closet_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(187,-175);

	this.timeline.addTween(cjs.Tween.get(this.accessory_0).wait(1));

	// options
	this.accessory_6 = new lib.accessory_6_2_mc();
	this.accessory_6.setTransform(90,180);

	this.accessory_5 = new lib.accessory_5_2_mc();
	this.accessory_5.setTransform(-90,180);

	this.accessory_4 = new lib.accessory_4_2_mc();
	this.accessory_4.setTransform(90,2);

	this.accessory_3 = new lib.accessory_3_2_mc();
	this.accessory_3.setTransform(90,-176);

	this.accessory_2 = new lib.accessory_2_2_mc();
	this.accessory_2.setTransform(-90,2);

	this.accessory_1 = new lib.accessory_1_2_mc();
	this.accessory_1.setTransform(-90,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3},{t:this.accessory_4},{t:this.accessory_5},{t:this.accessory_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-185,-271,400,546);
p.frameBounds = [rect];


(lib.closet_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(-190,-165);

	this.timeline.addTween(cjs.Tween.get(this.accessory_0).wait(1));

	// options
	this.accessory_6 = new lib.accessory_6_1_mc();
	this.accessory_6.setTransform(-90,0);

	this.accessory_5 = new lib.accessory_5_1_mc();
	this.accessory_5.setTransform(95,170);

	this.accessory_4 = new lib.accessory_4_1_mc();
	this.accessory_4.setTransform(-90,170);

	this.accessory_3 = new lib.accessory_3_1_mc();
	this.accessory_3.setTransform(95,0);

	this.accessory_2 = new lib.accessory_2_1_mc();
	this.accessory_2.setTransform(95,-170);

	this.accessory_1 = new lib.accessory_1_1_mc();
	this.accessory_1.setTransform(-90,-170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3},{t:this.accessory_4},{t:this.accessory_5},{t:this.accessory_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-218,-260,403,520);
p.frameBounds = [rect];


(lib.closet_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(186,-180);

	this.timeline.addTween(cjs.Tween.get(this.earrings_0).wait(1));

	// options
	this.earrings_6 = new lib.earrings_6_2_mc();
	this.earrings_6.setTransform(91,180);

	this.earrings_5 = new lib.earrings_5_2_mc();
	this.earrings_5.setTransform(-89,180);

	this.earrings_4 = new lib.earrings_4_2_mc();
	this.earrings_4.setTransform(91,3);

	this.earrings_3 = new lib.earrings_3_2_mc();
	this.earrings_3.setTransform(-89,3);

	this.earrings_2 = new lib.earrings_2_2_mc();
	this.earrings_2.setTransform(91,-177);

	this.earrings_1 = new lib.earrings_1_2_mc();
	this.earrings_1.setTransform(-89,-177);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.earrings_1},{t:this.earrings_2},{t:this.earrings_3},{t:this.earrings_4},{t:this.earrings_5},{t:this.earrings_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-184,-272,398,547);
p.frameBounds = [rect];


(lib.closet_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(-190,-165);

	this.timeline.addTween(cjs.Tween.get(this.earrings_0).wait(1));

	// options
	this.earrings_6 = new lib.earrings_6_1_mc();
	this.earrings_6.setTransform(92,170);

	this.earrings_5 = new lib.earrings_5_1_mc();
	this.earrings_5.setTransform(-88,170);

	this.earrings_4 = new lib.earrings_4_1_mc();
	this.earrings_4.setTransform(92,0);

	this.earrings_3 = new lib.earrings_3_1_mc();
	this.earrings_3.setTransform(-88,0);

	this.earrings_2 = new lib.earrings_2_1_mc();
	this.earrings_2.setTransform(92,-167);

	this.earrings_1 = new lib.earrings_1_1_mc();
	this.earrings_1.setTransform(-88,-167);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.earrings_1},{t:this.earrings_2},{t:this.earrings_3},{t:this.earrings_4},{t:this.earrings_5},{t:this.earrings_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-218,-257,400,517);
p.frameBounds = [rect];


(lib.closet_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.dress_0 = new lib.dress_0_mc();
	this.dress_0.setTransform(140,-180);

	this.timeline.addTween(cjs.Tween.get(this.dress_0).wait(9));

	// options
	this.dress_5 = new lib.dress_5_2_mc();
	this.dress_5.setTransform(-25,-50);

	this.dress_9 = new lib.dress_9_2_mc();
	this.dress_9.setTransform(-25,-50);

	this.dress_3 = new lib.dress_3_2_mc();
	this.dress_3.setTransform(-25,-50);

	this.dress_4 = new lib.dress_4_2_mc();
	this.dress_4.setTransform(-25,-50);

	this.dress_2 = new lib.dress_2_2_mc();
	this.dress_2.setTransform(-25,-50);

	this.dress_6 = new lib.dress_6_2_mc();
	this.dress_6.setTransform(-25,-50);

	this.dress_7 = new lib.dress_7_2_mc();
	this.dress_7.setTransform(-25,-50);

	this.dress_8 = new lib.dress_8_2_mc();
	this.dress_8.setTransform(-25,-50);

	this.dress_1 = new lib.dress_1_2_mc();
	this.dress_1.setTransform(-25,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_5}]}).to({state:[{t:this.dress_9}]},1).to({state:[{t:this.dress_3}]},1).to({state:[{t:this.dress_4}]},1).to({state:[{t:this.dress_2}]},1).to({state:[{t:this.dress_6}]},1).to({state:[{t:this.dress_7}]},1).to({state:[{t:this.dress_8}]},1).to({state:[{t:this.dress_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-210,313,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.closet_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.dress_0 = new lib.dress_0_mc();
	this.dress_0.setTransform(150,-180);

	this.timeline.addTween(cjs.Tween.get(this.dress_0).wait(9));

	// options
	this.dress_2 = new lib.dress_2_1_mc();
	this.dress_2.setTransform(-25,-50);

	this.dress_3 = new lib.dress_3_1_mc();
	this.dress_3.setTransform(-25,-50);

	this.dress_4 = new lib.dress_4_1_mc();
	this.dress_4.setTransform(-25,-50);

	this.dress_5 = new lib.dress_5_1_mc();
	this.dress_5.setTransform(-25,-50);

	this.dress_6 = new lib.dress_6_1_mc();
	this.dress_6.setTransform(-25,-50);

	this.dress_7 = new lib.dress_7_1_mc();
	this.dress_7.setTransform(-25,-50);

	this.dress_8 = new lib.dress_8_1_mc();
	this.dress_8.setTransform(-25,-50);

	this.dress_9 = new lib.dress_9_1_mc();
	this.dress_9.setTransform(-25,-50);

	this.dress_1 = new lib.dress_1_1_mc();
	this.dress_1.setTransform(-25,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_2}]}).to({state:[{t:this.dress_3}]},1).to({state:[{t:this.dress_4}]},1).to({state:[{t:this.dress_5}]},1).to({state:[{t:this.dress_6}]},1).to({state:[{t:this.dress_7}]},1).to({state:[{t:this.dress_8}]},1).to({state:[{t:this.dress_9}]},1).to({state:[{t:this.dress_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-210,323,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.closet_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.hair_2 = new lib.hairstyle_2_2_mc();
	this.hair_2.setTransform(-10,105);

	this.hair_5 = new lib.hairstyle_5_2_mc();
	this.hair_5.setTransform(-10,-120);

	this.hair_4 = new lib.hairstyle_4_2_mc();
	this.hair_4.setTransform(-10,105);

	this.hair_3 = new lib.hairstyle_3_2_mc();
	this.hair_3.setTransform(-10,-120);

	this.hair_1 = new lib.hairstyle_1_2_mc();
	this.hair_1.setTransform(-10,105);

	this.hair_6 = new lib.hairstyle_6_2_mc();
	this.hair_6.setTransform(-10,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_5},{t:this.hair_2}]}).to({state:[{t:this.hair_3},{t:this.hair_4}]},1).to({state:[{t:this.hair_6},{t:this.hair_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-240,180,465);
p.frameBounds = [rect, rect, rect];


(lib.closet_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.hair_3 = new lib.hairstyle_3_1_mc();
	this.hair_3.setTransform(-10,105);

	this.hair_2 = new lib.hairstyle_2_1_mc();
	this.hair_2.setTransform(-10,-120);

	this.hair_4 = new lib.hairstyle_4_1_mc();
	this.hair_4.setTransform(-10,105);

	this.hair_5 = new lib.hairstyle_5_1_mc();
	this.hair_5.setTransform(-10,-120);

	this.hair_1 = new lib.hairstyle_1_1_mc();
	this.hair_1.setTransform(-10,105);

	this.hair_6 = new lib.hairstyle_6_1_mc();
	this.hair_6.setTransform(-10,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_2},{t:this.hair_3}]}).to({state:[{t:this.hair_5},{t:this.hair_4}]},1).to({state:[{t:this.hair_6},{t:this.hair_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-240,180,465);
p.frameBounds = [rect, rect, rect];


(lib.closet_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.lips_0 = new lib.lips_0_mc();
	this.lips_0.setTransform(186,-170);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(186,-170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lips_0}]}).to({state:[{t:this.shadows_0}]},1).to({state:[]},1).wait(2));

	// options
	this.lips_6 = new lib.lips_6_2_mc();
	this.lips_6.setTransform(-92,2);

	this.lips_5 = new lib.lips_5_2_mc();
	this.lips_5.setTransform(-92,182);

	this.lips_4 = new lib.lips_4_2_mc();
	this.lips_4.setTransform(90,-177);

	this.lips_3 = new lib.lips_3_2_mc();
	this.lips_3.setTransform(90,2);

	this.lips_2 = new lib.lips_2_2_mc();
	this.lips_2.setTransform(90,182);

	this.lips_1 = new lib.lips_1_2_mc();
	this.lips_1.setTransform(-92,-177);

	this.shadows_6 = new lib.shadows_6_2_mc();
	this.shadows_6.setTransform(-92,176);

	this.shadows_5 = new lib.shadows_5_2_mc();
	this.shadows_5.setTransform(90,-177);

	this.shadows_4 = new lib.shadows_4_2_mc();
	this.shadows_4.setTransform(90,180);

	this.shadows_3 = new lib.shadows_3_2_mc();
	this.shadows_3.setTransform(-92,2);

	this.shadows_2 = new lib.shadows_2_2_mc();
	this.shadows_2.setTransform(90,2);

	this.shadows_1 = new lib.shadows_1_2_mc();
	this.shadows_1.setTransform(-92,-177);

	this.eyes_4 = new lib.eyes_4_2_mc();
	this.eyes_4.setTransform(-92,187);

	this.eyes_5 = new lib.eyes_5_2_mc();
	this.eyes_5.setTransform(90,2);

	this.eyes_6 = new lib.eyes_6_2_mc();
	this.eyes_6.setTransform(90,187);

	this.eyes_3 = new lib.eyes_3_2_mc();
	this.eyes_3.setTransform(-92,2);

	this.eyes_2 = new lib.eyes_2_2_mc();
	this.eyes_2.setTransform(90,-177);

	this.eyes_1 = new lib.eyes_1_2_mc();
	this.eyes_1.setTransform(-92,-177);

	this.eyebrows_6 = new lib.eyebrows_6_2_mc();
	this.eyebrows_6.setTransform(90,182);

	this.eyebrows_5 = new lib.eyebrows_5_2_mc();
	this.eyebrows_5.setTransform(-92,182);

	this.eyebrows_4 = new lib.eyebrows_4_2_mc();
	this.eyebrows_4.setTransform(90,2);

	this.eyebrows_3 = new lib.eyebrows_3_2_mc();
	this.eyebrows_3.setTransform(-92,2);

	this.eyebrows_2 = new lib.eyebrows_2_2_mc();
	this.eyebrows_2.setTransform(90,-177);

	this.eyebrows_1 = new lib.eyebrows_1_2_mc();
	this.eyebrows_1.setTransform(-92,-177);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]}).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.eyes_1},{t:this.eyes_2},{t:this.eyes_3},{t:this.eyes_6},{t:this.eyes_5},{t:this.eyes_4}]},1).to({state:[{t:this.eyebrows_1},{t:this.eyebrows_2},{t:this.eyebrows_3},{t:this.eyebrows_4},{t:this.eyebrows_5},{t:this.eyebrows_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-167,-252,381,516);
p.frameBounds = [rect, new cjs.Rectangle(-172,-252,386,517), new cjs.Rectangle(-167,-259,332,530), new cjs.Rectangle(-194,-255,359,515)];


(lib.closet_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.lips_0 = new lib.lips_0_mc();
	this.lips_0.setTransform(-190,-165);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(-190,-165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lips_0}]}).to({state:[{t:this.shadows_0}]},1).to({state:[]},1).wait(2));

	// options
	this.lips_6 = new lib.lips_6_1_mc();
	this.lips_6.setTransform(94,-168);

	this.lips_5 = new lib.lips_5_1_mc();
	this.lips_5.setTransform(-93,172);

	this.lips_4 = new lib.lips_4_1_mc();
	this.lips_4.setTransform(-93,5);

	this.lips_3 = new lib.lips_3_1_mc();
	this.lips_3.setTransform(94,5);

	this.lips_2 = new lib.lips_2_1_mc();
	this.lips_2.setTransform(94,172);

	this.lips_1 = new lib.lips_1_1_mc();
	this.lips_1.setTransform(-93,-168);

	this.shadows_6 = new lib.shadows_6_1_mc();
	this.shadows_6.setTransform(94,172);

	this.shadows_5 = new lib.shadows_5_1_mc();
	this.shadows_5.setTransform(-93,172);

	this.shadows_4 = new lib.shadows_4_1_mc();
	this.shadows_4.setTransform(94,5);

	this.shadows_3 = new lib.shadows_3_1_mc();
	this.shadows_3.setTransform(-93,5);

	this.shadows_2 = new lib.shadows_2_1_mc();
	this.shadows_2.setTransform(94,-168);

	this.shadows_1 = new lib.shadows_1_1_mc();
	this.shadows_1.setTransform(-93,-168);

	this.eyes_6 = new lib.eyes_6_1_mc();
	this.eyes_6.setTransform(94,172);

	this.eyes_5 = new lib.eyes_5_1_mc();
	this.eyes_5.setTransform(-93,172);

	this.eyes_4 = new lib.eyes_4_1_mc();
	this.eyes_4.setTransform(94,5);

	this.eyes_3 = new lib.eyes_3_1_mc();
	this.eyes_3.setTransform(-93,5);

	this.eyes_2 = new lib.eyes_2_1_mc();
	this.eyes_2.setTransform(94,-168);

	this.eyes_1 = new lib.eyes_1_1_mc();
	this.eyes_1.setTransform(-93,-168);

	this.eyebrows_6 = new lib.eyebrows_6_1_mc();
	this.eyebrows_6.setTransform(94,172);

	this.eyebrows_5 = new lib.eyebrows_5_1_mc();
	this.eyebrows_5.setTransform(-93,172);

	this.eyebrows_4 = new lib.eyebrows_4_1_mc();
	this.eyebrows_4.setTransform(94,5);

	this.eyebrows_3 = new lib.eyebrows_3_1_mc();
	this.eyebrows_3.setTransform(-93,5);

	this.eyebrows_2 = new lib.eyebrows_2_1_mc();
	this.eyebrows_2.setTransform(94,-168);

	this.eyebrows_1 = new lib.eyebrows_1_1_mc();
	this.eyebrows_1.setTransform(-93,-168);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]}).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.eyes_1},{t:this.eyes_2},{t:this.eyes_3},{t:this.eyes_4},{t:this.eyes_5},{t:this.eyes_6}]},1).to({state:[{t:this.eyebrows_1},{t:this.eyebrows_2},{t:this.eyebrows_3},{t:this.eyebrows_4},{t:this.eyebrows_5},{t:this.eyebrows_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-218,-245,387,495);
p.frameBounds = [rect, new cjs.Rectangle(-218,-245,392,496), new cjs.Rectangle(-168,-251,337,511), new cjs.Rectangle(-168,-248,359,495)];


(lib.bodyDressupPanel_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_2_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-185,-271,400,546);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_2_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-218,-260,403,520);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_2_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-184,-272,398,547);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_2_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-218,-257,400,517);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_1_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-210,313,320);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-210,323,320);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-240,180,465);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-240,180,465);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-167,-252,381,516);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-218,-245,387,495);
p.frameBounds = [rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// decor
	this.shine_mc = new lib.shine_1_5_mc();
	this.shine_mc.setTransform(-205,-68);

	this.timeline.addTween(cjs.Tween.get(this.shine_mc).wait(1).to({x:-205.5,y:-69},0).wait(1).to({x:-205,y:-68},0).wait(11));

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-340,-140);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-340,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-340,-140,680,280);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
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
				particle_mc.life = Math.random() * (1 - 0.5) + 0.5;
				particle_mc.alpha = Math.random() * (1 - 0.4) + 0.6;
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
			target_mc.life -= target_mc.fadeSpeed_num;
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
			if (target_mc.life <= 0 ||	target_mc.x < target_mc.boundyLeft_num || target_mc.x > target_mc.boundyRight_num || target_mc.y < target_mc.boundyTop_num || target_mc.y > target_mc.boundyBottom_num)
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
p.nominalBounds = rect = new cjs.Rectangle(-9,-9,18,18);
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
	this.instance_1.setTransform(80,-80,0.167,0.167);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:0.602},0).to({regX:0.1,scaleX:0.33,scaleY:0.33,rotation:90},3).to({regX:0,scaleX:0.17,scaleY:0.17,rotation:180,alpha:0.012},10).to({_off:true},1).wait(5));

	// animation
	this.instance_2 = new lib.flash_6_mc();
	this.instance_2.setTransform(-80,80,0.167,0.167);
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
p.nominalBounds = rect = new cjs.Rectangle(-28,-28,56,56);
p.frameBounds = [rect];


(lib.blinking_light_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/////*
		////* @author edapskov
		////* @copyright 2019 edapskov v 1.0
		////*/
		////this.gotoAndStop(0);
		////this.mouseEnabled = false;
		////this.mouseChildren = false;
		/////*
		////
		////*/
		////var _body_mc = this.body_mc;
		////_body_mc.gotoAndStop(0);
		////_body_mc.visible = false;
		/////*
		////
		////*/
		////var timeOut_id = setTimeout(_startAnimationBlinkingLightFunc, Math.random() * 2000);
		////function _startAnimationBlinkingLightFunc()
		////{
		////	/*
		////	
		////	*/
		////	clearTimeout(timeOut_id);
		////	/*
		////	
		////	*/
		////	_body_mc.play();
		////	_body_mc.visible = true;
		////}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.blinking_light_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
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
		var _particleMaxSpeed_num = 7;
		var _particleFadeSpeed_num = 0.004;
		var _particleTotal_num = 56;
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
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
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


(lib.prev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_mc();
	this.instance.setTransform(0,0,0.769,0.769,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.prev_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_7_mc();
	this.instance.setTransform(0,0,0.833,0.833,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.prev_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_6_mc();
	this.instance.setTransform(0,0,0.833,0.833,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.9,-50,100,100);
p.frameBounds = [rect];


(lib.prev_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_5_mc();
	this.instance.setTransform(0,0,0.833,0.833,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.prev_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_4_mc();
	this.instance.setTransform(0,0,0.833,0.833,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.9,-50,100,100);
p.frameBounds = [rect];


(lib.prev_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_3_mc();
	this.instance.setTransform(0,0,0.833,0.833,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.prev_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_2_mc();
	this.instance.setTransform(0,0,0.917,0.917,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.play_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_0_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ap7J8QkHkIgBl0QABl0EHkHQEIkIFzAAQF1AAEHEIQEIEHAAF0QAAF0kIEIQkHEHl1ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-90,-90,180,180)];


(lib.photo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_0_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ap7J8QkHkIgBl0QABl0EHkHQEIkIFzAAQF1AAEHEIQEIEHAAF0QAAF0kIEIQkHEHl1ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-90,-90,180,180)];


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_mc();
	this.instance.setTransform(0,0,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.next_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_0_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ap7J8QkIkIAAl0QAAlzEIkIQEIkHFzAAQF1AAEHEHQEIEIAAFzQAAF0kIEIQkHEHl1AAQlzAAkIkHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-90,-89.9,180,180)];


(lib.next_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_7_mc();
	this.instance.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.next_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_6_mc();
	this.instance.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.9,-50,100,100);
p.frameBounds = [rect];


(lib.next_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_5_mc();
	this.instance.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.next_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_4_mc();
	this.instance.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.9,-50,100,100);
p.frameBounds = [rect];


(lib.next_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_3_mc();
	this.instance.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.next_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_2_mc();
	this.instance.setTransform(0,0,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
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

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ap7J8QkHkIgBl0QABl0EHkHQEIkIFzAAQF1AAEHEIQEIEHAAF0QAAF0kIEIQkHEHl1ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
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
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
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
	this.pt = new lib.language_pt_mc();
	this.pt.setTransform(400,1250);

	this.es = new lib.language_es_mc();
	this.es.setTransform(200,1250);

	this.tr = new lib.language_tr_mc();
	this.tr.setTransform(600,1250);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ar},{t:this.de},{t:this.fr},{t:this.hi},{t:this.id},{t:this.it},{t:this.zh},{t:this.ja},{t:this.tr},{t:this.es},{t:this.pt}]}).wait(1));

	// bg
	this.instance = new lib.languages_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,1315);
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
p.nominalBounds = rect = new cjs.Rectangle(-340,-140,680,280);
p.frameBounds = [rect];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{location_1:0,location_2:1,location_3:2,location_4:3,location_5:4,location_6:5});

	// body
	this.frame_1_mc = new lib.frame_locations_1_mc();

	this.frame_2_mc = new lib.frame_locations_2_mc();

	this.frame_3_mc = new lib.frame_locations_3_mc();

	this.frame_4_mc = new lib.frame_locations_4_mc();

	this.frame_5_mc = new lib.frame_locations_5_mc();

	this.frame_6_mc = new lib.frame_locations_6_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).to({state:[{t:this.frame_4_mc}]},1).to({state:[{t:this.frame_5_mc}]},1).to({state:[{t:this.frame_6_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-220,720,520);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.indicator_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// indicator
	this.indicator_mc = new lib.indicator_1_mc();
	this.indicator_mc.setTransform(-130,-30);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// bg
	this.instance = new lib.indicator_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-62,280,102);
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


(lib.dressupPanel_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(180.1,90.1,1,1,0,0,0,0.1,0.1);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-180.1,90.1,1,1,0,0,0,-0.1,0.1);

	this.set_5 = new lib.set_0_mc();
	this.set_5.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_5},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-300,460,950);
p.frameBounds = [rect];


(lib.dressupPanel_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(190.1,85.1,1,1,0,0,0,0.1,0.1);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-190.1,85.1,1,1,0,0,0,-0.1,0.1);

	this.set_5 = new lib.set_0_mc();
	this.set_5.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_5},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-300,490,950);
p.frameBounds = [rect];


(lib.dressupPanel_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(180.1,90.1,1,1,0,0,0,0.1,0.1);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-180.1,90.1,1,1,0,0,0,-0.1,0.1);

	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_3},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-300,460,950);
p.frameBounds = [rect];


(lib.dressupPanel_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(190.1,85.1,1,1,0,0,0,0.1,0.1);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-190.1,85.1,1,1,0,0,0,-0.1,0.1);

	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_3},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-300,490,950);
p.frameBounds = [rect];


(lib.dressupPanel_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_7_mc();
	this.next_mc.setTransform(140.1,-49.9,1,1,0,0,0,0.1,0.1);

	this.prev_mc = new lib.prev_7_mc();
	this.prev_mc.setTransform(139.9,50.1,1,1,0,0,0,-0.1,0.1);

	this.set_4 = new lib.set_0_mc();
	this.set_4.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_4},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-290,400,940);
p.frameBounds = [rect];


(lib.dressupPanel_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_6_mc();
	this.next_mc.setTransform(150.1,-49.9,1,1,0,0,0,0.1,0.1);

	this.prev_mc = new lib.prev_6_mc();
	this.prev_mc.setTransform(149.9,50.1,1,1,0,0,0,-0.1,0.1);

	this.set_4 = new lib.set_0_mc();
	this.set_4.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_4},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-290,406.1,940);
p.frameBounds = [rect];


(lib.dressupPanel_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_5_mc();
	this.next_mc.setTransform(-149.9,-49.9,1,1,0,0,0,0.1,0.1);

	this.prev_mc = new lib.prev_5_mc();
	this.prev_mc.setTransform(-150.1,50.1,1,1,0,0,0,-0.1,0.1);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-290,400,940);
p.frameBounds = [rect];


(lib.dressupPanel_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_4_mc();
	this.next_mc.setTransform(-149.9,-49.9,1,1,0,0,0,0.1,0.1);

	this.prev_mc = new lib.prev_4_mc();
	this.prev_mc.setTransform(-150.1,50.1,1,1,0,0,0,-0.1,0.1);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-290,400,940);
p.frameBounds = [rect];


(lib.dressupPanel_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(180.1,90.1,1,1,0,0,0,0.1,0.1);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-180.1,90.1,1,1,0,0,0,-0.1,0.1);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-300,460,950);
p.frameBounds = [rect];


(lib.dressupPanel_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(190.1,85.1,1,1,0,0,0,0.1,0.1);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-190.1,85.1,1,1,0,0,0,-0.1,0.1);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-300,490,950);
p.frameBounds = [rect];


(lib.decor_shadow_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.gravity_big_explosion_comp = new lib.GravityBigExplosionMC();
	this.gravity_big_explosion_comp.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.gravity_big_explosion_comp).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(382,282,36,36);
p.frameBounds = [rect];


(lib.background_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(517,202);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(292,202);

	this.shine_mc = new lib.shine_1_2_mc();
	this.shine_mc.setTransform(834,74);

	this.shine_mc_1 = new lib.shine_1_1_mc();
	this.shine_mc_1.setTransform(35,115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shine_mc_1},{t:this.shine_mc},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_2 = new lib.background_9_img();
	this.instance_2.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(-295,461);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(-255,456);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(695,377);

	this.instance_3 = new lib.shine_2_10_mc();
	this.instance_3.setTransform(704,223.1,0.765,0.765,30,0,0,0,0.1);

	this.shine_mc = new lib.shine_1_4_mc();
	this.shine_mc.setTransform(598,229);

	this.shine_mc_1 = new lib.shine_1_9_mc();
	this.shine_mc_1.setTransform(470,231);

	this.shine_mc_2 = new lib.shine_1_8_mc();
	this.shine_mc_2.setTransform(798,213);

	this.shine_mc_3 = new lib.shine_1_8_mc();
	this.shine_mc_3.setTransform(237,219);

	this.shine_mc_4 = new lib.shine_1_3_mc();
	this.shine_mc_4.setTransform(884,196);

	this.shine_mc_5 = new lib.shine_1_3_mc();
	this.shine_mc_5.setTransform(103,206);

	this.shine_mc_6 = new lib.shine_1_1_mc();
	this.shine_mc_6.setTransform(984,171);

	this.shine_mc_7 = new lib.shine_1_1_mc();
	this.shine_mc_7.setTransform(59,201);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shine_mc_7},{t:this.shine_mc_6},{t:this.shine_mc_5},{t:this.shine_mc_4},{t:this.shine_mc_3},{t:this.shine_mc_2},{t:this.shine_mc_1},{t:this.shine_mc},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_4 = new lib.background_8_img();
	this.instance_4.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(726,172);

	this.shine_mc = new lib.shine_1_2_mc();
	this.shine_mc.setTransform(842,338);

	this.shine_mc_1 = new lib.shine_1_8_mc();
	this.shine_mc_1.setTransform(504,185);

	this.shine_mc_2 = new lib.shine_1_3_mc();
	this.shine_mc_2.setTransform(360,232);

	this.shine_mc_3 = new lib.shine_1_1_mc();
	this.shine_mc_3.setTransform(-23,373);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shine_mc_3},{t:this.shine_mc_2},{t:this.shine_mc_1},{t:this.shine_mc},{t:this.instance}]}).wait(1));

	// graph
	this.instance_1 = new lib.background_7_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(681,317,0.75,0.75);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(847,289);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(-170,343);

	this.shine_mc = new lib.shine_1_2_mc();
	this.shine_mc.setTransform(951,191);

	this.shine_mc_1 = new lib.shine_1_8_mc();
	this.shine_mc_1.setTransform(747,250);

	this.shine_mc_2 = new lib.shine_1_3_mc();
	this.shine_mc_2.setTransform(697,262);

	this.shine_mc_3 = new lib.shine_1_1_mc();
	this.shine_mc_3.setTransform(-2,445);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shine_mc_3},{t:this.shine_mc_2},{t:this.shine_mc_1},{t:this.shine_mc},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_3 = new lib.background_6_img();
	this.instance_3.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(1100,256);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(567,274);

	this.shine_mc = new lib.shine_1_2_mc();
	this.shine_mc.setTransform(880,265);

	this.shine_mc_1 = new lib.shine_1_1_mc();
	this.shine_mc_1.setTransform(794,184);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shine_mc_1},{t:this.shine_mc},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_2 = new lib.background_5_img();
	this.instance_2.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(418,503);

	this.shine_mc = new lib.shine_1_1_mc();
	this.shine_mc.setTransform(684,253);
	this.shine_mc.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shine_mc},{t:this.instance}]}).wait(1));

	// graph
	this.instance_1 = new lib.background_4_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(840,13);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(574,59);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(505,356);

	this.shine_mc = new lib.shine_1_2_mc();
	this.shine_mc.setTransform(840,71);

	this.shine_mc_1 = new lib.shine_1_1_mc();
	this.shine_mc_1.setTransform(22,179);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shine_mc_1},{t:this.shine_mc},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_3 = new lib.background_3_img();
	this.instance_3.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-7,1600,607);
p.frameBounds = [rect];


(lib.background_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(90,515);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(400,160,0.75,0.75);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(720,110);

	this.shine_mc = new lib.shine_1_6_mc();
	this.shine_mc.setTransform(451,431);
	this.shine_mc.alpha = 0.801;

	this.shine_mc_1 = new lib.shine_1_5_mc();
	this.shine_mc_1.setTransform(48,415);
	this.shine_mc_1.alpha = 0.801;

	this.shine_mc_2 = new lib.shine_1_3_mc();
	this.shine_mc_2.setTransform(127,40);

	this.shine_mc_3 = new lib.shine_1_2_mc();
	this.shine_mc_3.setTransform(817,318);

	this.shine_mc_4 = new lib.shine_1_1_mc();
	this.shine_mc_4.setTransform(71,126);
	this.shine_mc_4.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shine_mc_4},{t:this.shine_mc_3},{t:this.shine_mc_2},{t:this.shine_mc_1},{t:this.shine_mc},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_3 = new lib.background_2_img();
	this.instance_3.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(314,8,1,0.75);

	this.shine_mc = new lib.shine_1_2_mc();
	this.shine_mc.setTransform(108,38);
	this.shine_mc.alpha = 0.801;

	this.shine_mc_1 = new lib.shine_1_1_mc();
	this.shine_mc_1.setTransform(906,218);
	this.shine_mc_1.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shine_mc_1},{t:this.shine_mc},{t:this.instance}]}).wait(1));

	// graph
	this.instance_1 = new lib.background_1_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-7,1600,607);
p.frameBounds = [rect];


(lib.FlashAnimation = function(mode,startPosition,loop) {
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
p.nominalBounds = rect = new cjs.Rectangle(-16.8,-16.8,33.6,33.6);
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
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,666.8);
p.frameBounds = [rect];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":139});

	// timeline functions:
	this.frame_9 = function() {
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
	this.frame_37 = function() {
		try
		{
			app.addSoundFunc("whoosh_sound", 0.1);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_69 = function() {
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
	this.frame_94 = function() {
		try
		{
			app.addSoundFunc("whoosh_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(28).call(this.frame_37).wait(32).call(this.frame_69).wait(25).call(this.frame_94).wait(46));

	// play_btn
	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(700,700,0.895,0.895);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).wait(64).to({scaleX:0.53,scaleY:0.53},0).to({scaleX:0.95,scaleY:0.95,y:450},13).to({scaleX:0.9,scaleY:0.9,y:510},7).wait(5).to({scaleX:0.79,scaleY:0.79},5).to({scaleX:0.9,scaleY:0.9},5).to({y:460},5).to({scaleX:0.53,scaleY:0.53,y:700},10).wait(26));

	// btn
	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(400.5,1050.5,0.75,0.75,0,0,0,0.7,0.7);

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
	this.credits_btn.setTransform(760.1,40.1,0.636,0.636,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.social_network_mc}]}).wait(140));

	// title
	this.instance = new lib.title_mc();
	this.instance.setTransform(345,800);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({scaleX:0.74,scaleY:0.74,y:750},0).to({scaleX:1,scaleY:1,y:400},22).to({y:500},10).wait(76));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(0,400);
	this.instance_1.alpha = 0.5;
	this.instance_1.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(140));

	// hero_2
	this.instance_2 = new lib.hero_2_main_mc();
	this.instance_2.setTransform(1400,320);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({x:400},23).to({x:550},13).wait(95));

	// hero_1
	this.instance_3 = new lib.hero_1_main_mc();
	this.instance_3.setTransform(-600,390);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({x:400},23).to({x:255},13).wait(95));

	// decor
	this.bubble_comp = new lib.bubble_1_2_mc();
	this.bubble_comp.setTransform(-201,-1,1,1,0,0,0,-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(140));

	// bg
	this.instance_4 = new lib.background_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-740,-280.8,2277,1375.9);
p.frameBounds = [rect, rect=new cjs.Rectangle(-740,-90,2277,1185), rect, rect, new cjs.Rectangle(-740,-280.8,2277,1375.9), rect=new cjs.Rectangle(-740,-90,2277,1185), rect, rect, new cjs.Rectangle(-740,-280.8,2277,1375.9), new cjs.Rectangle(-740,-90,2277,1185), new cjs.Rectangle(-696.5,-90,2190.1,1185), new cjs.Rectangle(-653,-90,2103.1,1185), new cjs.Rectangle(-609.5,-280.8,2016.1,1375.9), new cjs.Rectangle(-566.1,-90,1929.2,1185), new cjs.Rectangle(-522.6,-90,1842.2,1185), new cjs.Rectangle(-479.1,-90,1755.3,1185), new cjs.Rectangle(-435.6,-280.8,1668.3,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect];


(lib.SelectionScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// locations
	this.locations_mc = new lib.locations_mc();
	this.locations_mc.setTransform(400,290);

	this.timeline.addTween(cjs.Tween.get(this.locations_mc).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(0,400);
	this.instance.alpha = 0.199;
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
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1261.9);
p.frameBounds = [rect];


(lib.quest_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":64,"end":244});

	// timeline functions:
	this.frame_4 = function() {
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
	this.frame_79 = function() {
		try
		{
			app.addSoundFunc("whoosh_sound", 0.2);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_134 = function() {
		try
		{
			app.addSoundFunc("magic_2_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_219 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(75).call(this.frame_79).wait(55).call(this.frame_134).wait(85).call(this.frame_219).wait(26));

	// decor
	this.instance = new lib.forward_mc();
	this.instance.setTransform(700.1,700.1,0.526,0.526,0,0,0,0.1,0.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(219).to({_off:false},0).to({regX:0,regY:0,scaleX:0.84,scaleY:0.84,x:700,y:460},13).to({scaleX:0.74,scaleY:0.74,y:510},7).wait(6));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(480.2,700,0.737,0.737,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(39).to({regX:0.3,regY:0.1,scaleX:0.53,scaleY:0.53,y:700.1},0).to({regY:0,scaleX:0.84,scaleY:0.84,x:480.3,y:460},13).to({regX:0.2,scaleX:0.74,scaleY:0.74,x:480.2,y:510},7).wait(5).to({regX:0.3,regY:0.1,scaleX:0.63,scaleY:0.63,y:510.1},5).to({regX:0.2,regY:0,scaleX:0.74,scaleY:0.74,y:510},10).to({regX:0.3,scaleX:0.84,scaleY:0.84,x:480.3,y:460},5).to({regY:0.1,scaleX:0.53,scaleY:0.53,x:480.2,y:700.1},15).wait(146));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_6_mc();
	this.dressupPanel_mc.setTransform(240,950);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).to({y:150},19).to({y:300},15).wait(50).to({y:150},15).to({y:950},20).wait(126));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(620,320);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(119).to({x:400},20).wait(106));

	// decor
	this.instance_1 = new lib.decor_shadow_1_mc();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(139).to({_off:false},0).wait(106));

	// shadow
	this.instance_2 = new lib.shadow_dressup_mc();
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(119).to({_off:false},0).to({alpha:1},20).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10,15.5,747,1584.5);
p.frameBounds = [rect, new cjs.Rectangle(10,15.5,747.1,1542.4), new cjs.Rectangle(10,15.5,747.1,1500.3), new cjs.Rectangle(10,15.5,747.1,1458.2), new cjs.Rectangle(10,15.5,747.1,1416.1), new cjs.Rectangle(10,15.5,747.1,1374), new cjs.Rectangle(10,15.5,747.1,1331.9), new cjs.Rectangle(10,15.5,747.1,1289.8), new cjs.Rectangle(10,15.5,747.1,1247.7), new cjs.Rectangle(10,15.5,747.1,1205.6), new cjs.Rectangle(10,15.5,747.1,1163.5), new cjs.Rectangle(10,15.5,747.1,1121.4), new cjs.Rectangle(10,15.5,747.1,1079.3), new cjs.Rectangle(10,15.5,747.1,1037.2), new cjs.Rectangle(10,15.5,747.1,995), new cjs.Rectangle(10,15.5,747.1,952.9), new cjs.Rectangle(10,-23.7,747.1,950), new cjs.Rectangle(10,-65.8,747.1,950), new cjs.Rectangle(10,-107.9,747.1,950), new cjs.Rectangle(10,-150,747,950), new cjs.Rectangle(10,-140,747.1,950), new cjs.Rectangle(10,-130,747.1,950), new cjs.Rectangle(10,-120,747.1,950), new cjs.Rectangle(10,-110,747.1,950), new cjs.Rectangle(10,-100,747.1,950), new cjs.Rectangle(10,-90,747.1,950), new cjs.Rectangle(10,-80,747.1,950), new cjs.Rectangle(10,-70,747.1,950), new cjs.Rectangle(10,-60,747.1,950), new cjs.Rectangle(10,-50,747.1,950), new cjs.Rectangle(10,-40,747.1,950), new cjs.Rectangle(10,-30,747.1,950), new cjs.Rectangle(10,-20,747.1,950), new cjs.Rectangle(10,-10,747.1,950), rect=new cjs.Rectangle(10,0,747,950), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(10,-10,747.1,950), new cjs.Rectangle(10,-20,747.1,950), new cjs.Rectangle(10,-30,747.1,950), new cjs.Rectangle(10,-40,747.1,950), new cjs.Rectangle(10,-50,747.1,950), new cjs.Rectangle(10,-60,747.1,950), new cjs.Rectangle(10,-70,747.1,950), new cjs.Rectangle(10,-80,747.1,950), new cjs.Rectangle(10,-90,747.1,950), new cjs.Rectangle(10,-100,747.1,950), new cjs.Rectangle(10,-110,747.1,950), new cjs.Rectangle(10,-120,747.1,950), new cjs.Rectangle(10,-130,747.1,950), new cjs.Rectangle(10,-140,747.1,950), new cjs.Rectangle(10,-150,747,950), new cjs.Rectangle(10,-110,747.1,950), new cjs.Rectangle(10,-70,747.1,950), new cjs.Rectangle(10,-30,747.1,950), new cjs.Rectangle(10,10,747.1,950), new cjs.Rectangle(10,15.5,747.1,984.5), new cjs.Rectangle(10,15.5,747.1,1024.5), new cjs.Rectangle(10,15.5,747.1,1064.5), new cjs.Rectangle(10,15.5,747.1,1104.5), new cjs.Rectangle(10,15.5,747.1,1144.5), new cjs.Rectangle(10,15.5,747.1,1184.5), new cjs.Rectangle(10,15.5,747.1,1224.5), new cjs.Rectangle(10,15.5,747.1,1264.5), new cjs.Rectangle(10,15.5,747.1,1304.5), new cjs.Rectangle(10,15.5,747.1,1344.5), new cjs.Rectangle(10,15.5,747.1,1384.5), new cjs.Rectangle(10,15.5,747.1,1424.5), new cjs.Rectangle(10,15.5,747.1,1464.5), new cjs.Rectangle(10,15.5,747.1,1504.5), new cjs.Rectangle(10,15.5,747.1,1544.5), rect=new cjs.Rectangle(-410,-10,1620,1610), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":64,"end":244});

	// timeline functions:
	this.frame_4 = function() {
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
	this.frame_79 = function() {
		try
		{
			app.addSoundFunc("whoosh_sound", 0.2);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_134 = function() {
		try
		{
			app.addSoundFunc("magic_2_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(75).call(this.frame_79).wait(55).call(this.frame_134).wait(111));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(700.2,700,0.737,0.737,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(39).to({regX:0.3,regY:0.1,scaleX:0.53,scaleY:0.53,y:700.1},0).to({regY:0,scaleX:0.84,scaleY:0.84,x:700.3,y:460},13).to({regX:0.2,scaleX:0.74,scaleY:0.74,x:700.2,y:510},7).wait(5).to({regX:0.1,scaleX:0.58,scaleY:0.58,x:700.1},5).to({regX:0.2,scaleX:0.74,scaleY:0.74,x:700.2},10).to({y:460},5).to({regX:0.3,regY:0.1,scaleX:0.53,scaleY:0.53,y:700.1},15).wait(146));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_5_mc();
	this.dressupPanel_mc.setTransform(240,950);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).to({y:150},19).to({y:300},15).wait(50).to({y:150},15).to({y:950},20).wait(126));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(610,400);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(119).to({x:400},20).wait(106));

	// decor
	this.instance = new lib.decor_shadow_1_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(139).to({_off:false},0).wait(106));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({alpha:1},20).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,17,775,1583.1);
p.frameBounds = [rect, new cjs.Rectangle(-5,17,775.1,1541), new cjs.Rectangle(-5,17,775.1,1498.9), new cjs.Rectangle(-5,17,775.1,1456.8), new cjs.Rectangle(-5,17,775.1,1414.6), new cjs.Rectangle(-5,17,775.1,1372.6), new cjs.Rectangle(-5,17,775.1,1330.4), new cjs.Rectangle(-5,17,775.1,1288.3), new cjs.Rectangle(-5,17,775.1,1246.2), new cjs.Rectangle(-5,17,775.1,1204.1), new cjs.Rectangle(-5,17,775.1,1162), new cjs.Rectangle(-5,17,775.1,1119.9), new cjs.Rectangle(-5,17,775.1,1077.8), new cjs.Rectangle(-5,17,775.1,1035.7), new cjs.Rectangle(-5,17,775.1,993.6), new cjs.Rectangle(-5,17,775.1,951.5), new cjs.Rectangle(-5,-23.7,775.1,950), new cjs.Rectangle(-5,-65.8,775.1,950), new cjs.Rectangle(-5,-107.9,775.1,950), new cjs.Rectangle(-5,-150,775,950), new cjs.Rectangle(-5,-140,775.1,950), new cjs.Rectangle(-5,-130,775.1,950), new cjs.Rectangle(-5,-120,775.1,950), new cjs.Rectangle(-5,-110,775.1,950), new cjs.Rectangle(-5,-100,775.1,950), new cjs.Rectangle(-5,-90,775.1,950), new cjs.Rectangle(-5,-80,775.1,950), new cjs.Rectangle(-5,-70,775.1,950), new cjs.Rectangle(-5,-60,775.1,950), new cjs.Rectangle(-5,-50,775.1,950), new cjs.Rectangle(-5,-40,775.1,950), new cjs.Rectangle(-5,-30,775.1,950), new cjs.Rectangle(-5,-20,775.1,950), new cjs.Rectangle(-5,-10,775.1,950), rect=new cjs.Rectangle(-5,0,775,950), rect, rect, rect, rect, new cjs.Rectangle(-5,0,755,950), new cjs.Rectangle(-5,0,757.2,950), new cjs.Rectangle(-5,0,759.6,950), new cjs.Rectangle(-5,0,761.9,950), new cjs.Rectangle(-5,0,764.2,950), new cjs.Rectangle(-5,0,766.5,950), new cjs.Rectangle(-5,0,768.8,950), new cjs.Rectangle(-5,0,771.1,950), new cjs.Rectangle(-5,0,773.4,950), new cjs.Rectangle(-5,0,775.8,950), new cjs.Rectangle(-5,0,778.1,950), new cjs.Rectangle(-5,0,780.3,950), new cjs.Rectangle(-5,0,782.7,950), new cjs.Rectangle(-5,0,785,950), new cjs.Rectangle(-5,0,783.6,950), new cjs.Rectangle(-5,0,782.2,950), new cjs.Rectangle(-5,0,780.7,950), new cjs.Rectangle(-5,0,779.2,950), new cjs.Rectangle(-5,0,777.8,950), new cjs.Rectangle(-5,0,776.4,950), rect=new cjs.Rectangle(-5,0,775,950), rect, rect, rect, rect, rect, new cjs.Rectangle(-5,0,772,950), new cjs.Rectangle(-5,0,769,950), new cjs.Rectangle(-5,0,766,950), new cjs.Rectangle(-5,0,763,950), new cjs.Rectangle(-5,0,760,950), new cjs.Rectangle(-5,0,761.5,950), new cjs.Rectangle(-5,0,763,950), new cjs.Rectangle(-5,0,764.5,950), new cjs.Rectangle(-5,0,766,950), new cjs.Rectangle(-5,0,767.6,950), new cjs.Rectangle(-5,0,769.1,950), new cjs.Rectangle(-5,0,770.5,950), new cjs.Rectangle(-5,0,772.1,950), new cjs.Rectangle(-5,0,773.6,950), rect=new cjs.Rectangle(-5,0,775,950), rect, rect, rect, rect, rect, new cjs.Rectangle(-5,-10,773.6,950), new cjs.Rectangle(-5,-20,772.3,950), new cjs.Rectangle(-5,-30,771,950), new cjs.Rectangle(-5,-40,769.7,950), new cjs.Rectangle(-5,-50,768.3,950), new cjs.Rectangle(-5,-60,767.1,950), new cjs.Rectangle(-5,-70,765.7,950), new cjs.Rectangle(-5,-80,764.3,950), new cjs.Rectangle(-5,-90,763.1,950), new cjs.Rectangle(-5,-100,761.8,950), new cjs.Rectangle(-5,-110,760.3,950), new cjs.Rectangle(-5,-120,759.1,950), new cjs.Rectangle(-5,-130,757.8,950), new cjs.Rectangle(-5,-140,756.4,950), new cjs.Rectangle(-5,-150,755,950), new cjs.Rectangle(-5,-110,755.1,950), new cjs.Rectangle(-5,-70,755.1,950), new cjs.Rectangle(-5,-30,755.1,950), new cjs.Rectangle(-5,10,755.1,950), new cjs.Rectangle(-5,17,755.1,983.1), new cjs.Rectangle(-5,17,755.1,1023.1), new cjs.Rectangle(-5,17,755.1,1063.1), new cjs.Rectangle(-5,17,755.1,1103.1), new cjs.Rectangle(-5,17,755.1,1143.1), new cjs.Rectangle(-5,17,755.1,1183.1), new cjs.Rectangle(-5,17,755.1,1223.1), new cjs.Rectangle(-5,17,755.1,1263.1), new cjs.Rectangle(-5,17,755.1,1303.1), new cjs.Rectangle(-5,17,755.1,1343.1), new cjs.Rectangle(-5,17,755.1,1383.1), new cjs.Rectangle(-5,17,755.1,1423.1), new cjs.Rectangle(-5,17,755.1,1463.1), new cjs.Rectangle(-5,17,755.1,1503.1), new cjs.Rectangle(-5,17,755.1,1543.1), rect=new cjs.Rectangle(-410,-10,1620,1610), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":64,"end":244});

	// timeline functions:
	this.frame_4 = function() {
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
	this.frame_79 = function() {
		try
		{
			app.addSoundFunc("whoosh_sound", 0.2);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_134 = function() {
		try
		{
			app.addSoundFunc("magic_2_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_219 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(75).call(this.frame_79).wait(55).call(this.frame_134).wait(85).call(this.frame_219).wait(26));

	// decor
	this.instance = new lib.forward_mc();
	this.instance.setTransform(700.1,700.1,0.526,0.526,0,0,0,0.1,0.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(219).to({_off:false},0).to({regX:0,regY:0,scaleX:0.84,scaleY:0.84,x:700,y:460},13).to({scaleX:0.74,scaleY:0.74,y:510},7).wait(6));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(100.1,700,0.737,0.737,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(39).to({regX:0.2,regY:0.1,scaleX:0.53,scaleY:0.53,y:700.1},0).to({regY:0,scaleX:0.84,scaleY:0.84,x:100.2,y:460},13).to({regX:0.1,scaleX:0.74,scaleY:0.74,x:100.1,y:510},7).wait(5).to({scaleX:0.58,scaleY:0.58},5).to({scaleX:0.74,scaleY:0.74},10).to({y:460},5).to({regX:0.2,regY:0.1,scaleX:0.53,scaleY:0.53,y:700.1},15).wait(146));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_4_mc();
	this.dressupPanel_mc.setTransform(560,950);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).to({y:150},19).to({y:300},15).wait(50).to({y:150},15).to({y:950},20).wait(126));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(220,330);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(119).to({x:400},20).wait(106));

	// decor
	this.instance_1 = new lib.decor_shadow_1_mc();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(139).to({_off:false},0).wait(106));

	// shadow
	this.instance_2 = new lib.shadow_dressup_mc();
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(119).to({_off:false},0).to({alpha:1},20).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(30,25.5,760,1574.5);
p.frameBounds = [rect, new cjs.Rectangle(30,25.5,760,1532.4), new cjs.Rectangle(30,25.5,760,1490.3), new cjs.Rectangle(30,25.5,760,1448.2), new cjs.Rectangle(30,25.5,760,1406.1), new cjs.Rectangle(30,25.5,760,1364), new cjs.Rectangle(30,25.5,760,1321.9), new cjs.Rectangle(30,25.5,760,1279.8), new cjs.Rectangle(30,25.5,760,1237.7), new cjs.Rectangle(30,25.5,760,1195.6), new cjs.Rectangle(30,25.5,760,1153.5), new cjs.Rectangle(30,25.5,760,1111.4), new cjs.Rectangle(30,25.5,760,1069.3), new cjs.Rectangle(30,25.5,760,1027.2), new cjs.Rectangle(30,25.5,760,985), new cjs.Rectangle(30,18.4,760,950), new cjs.Rectangle(30,-23.7,760,950), new cjs.Rectangle(30,-65.8,760,950), new cjs.Rectangle(30,-107.9,760,950), new cjs.Rectangle(30,-150,760,950), new cjs.Rectangle(30,-140,760,950), new cjs.Rectangle(30,-130,760,950), new cjs.Rectangle(30,-120,760,950), new cjs.Rectangle(30,-110,760,950), new cjs.Rectangle(30,-100,760,950), new cjs.Rectangle(30,-90,760,950), new cjs.Rectangle(30,-80,760,950), new cjs.Rectangle(30,-70,760,950), new cjs.Rectangle(30,-60,760,950), new cjs.Rectangle(30,-50,760,950), new cjs.Rectangle(30,-40,760,950), new cjs.Rectangle(30,-30,760,950), new cjs.Rectangle(30,-20,760,950), new cjs.Rectangle(30,-10,760,950), rect=new cjs.Rectangle(30,0,760,950), rect, rect, rect, rect, new cjs.Rectangle(50,0,740,950), new cjs.Rectangle(47.7,0,742.4,950), new cjs.Rectangle(45.4,0,744.7,950), new cjs.Rectangle(43,0,747,950), new cjs.Rectangle(40.8,0,749.3,950), new cjs.Rectangle(38.4,0,751.6,950), new cjs.Rectangle(36.1,0,753.9,950), new cjs.Rectangle(33.9,0,756.2,950), new cjs.Rectangle(31.5,0,758.5,950), new cjs.Rectangle(29.2,0,760.8,950), new cjs.Rectangle(26.9,0,763.1,950), new cjs.Rectangle(24.6,0,765.4,950), new cjs.Rectangle(22.3,0,767.7,950), new cjs.Rectangle(20,0,770,950), new cjs.Rectangle(21.4,0,768.6,950), new cjs.Rectangle(22.9,0,767.2,950), new cjs.Rectangle(24.2,0,765.8,950), new cjs.Rectangle(25.7,0,764.4,950), new cjs.Rectangle(27.1,0,763,950), new cjs.Rectangle(28.5,0,761.5,950), rect=new cjs.Rectangle(30,0,760,950), rect, rect, rect, rect, rect, new cjs.Rectangle(33,0,757,950), new cjs.Rectangle(36,0,754,950), new cjs.Rectangle(39,0,751,950), new cjs.Rectangle(42.1,0,748,950), new cjs.Rectangle(45,0,745,950), new cjs.Rectangle(43.5,0,746.5,950), new cjs.Rectangle(42,0,748,950), new cjs.Rectangle(40.5,0,749.5,950), new cjs.Rectangle(39,0,751,950), new cjs.Rectangle(37.5,0,752.5,950), new cjs.Rectangle(36,0,754,950), new cjs.Rectangle(34.5,0,755.6,950), new cjs.Rectangle(33,0,757,950), new cjs.Rectangle(31.5,0,758.6,950), rect=new cjs.Rectangle(30,0,760,950), rect, rect, rect, rect, rect, new cjs.Rectangle(31.3,-10,758.7,950), new cjs.Rectangle(32.7,-20,757.4,950), new cjs.Rectangle(34,-30,756,950), new cjs.Rectangle(35.3,-40,754.7,950), new cjs.Rectangle(36.7,-50,753.4,950), new cjs.Rectangle(38,-60,752,950), new cjs.Rectangle(39.3,-70,750.7,950), new cjs.Rectangle(40.7,-80,749.3,950), new cjs.Rectangle(42.1,-90,748,950), new cjs.Rectangle(43.3,-100,746.7,950), new cjs.Rectangle(44.7,-110,745.4,950), new cjs.Rectangle(46,-120,744,950), new cjs.Rectangle(47.3,-130,742.7,950), new cjs.Rectangle(48.7,-140,741.4,950), new cjs.Rectangle(50,-150,740,950), new cjs.Rectangle(50,-110,740,950), new cjs.Rectangle(50,-70,740,950), new cjs.Rectangle(50,-30,740,950), new cjs.Rectangle(50,10,740,950), new cjs.Rectangle(50,25.5,740,974.5), new cjs.Rectangle(50,25.5,740,1014.5), new cjs.Rectangle(50,25.5,740,1054.5), new cjs.Rectangle(50,25.5,740,1094.5), new cjs.Rectangle(50,25.5,740,1134.5), new cjs.Rectangle(50,25.5,740,1174.5), new cjs.Rectangle(50,25.5,740,1214.5), new cjs.Rectangle(50,25.5,740,1254.5), new cjs.Rectangle(50,25.5,740,1294.5), new cjs.Rectangle(50,25.5,740,1334.5), new cjs.Rectangle(50,25.5,740,1374.5), new cjs.Rectangle(50,25.5,740,1414.5), new cjs.Rectangle(50,25.5,740,1454.5), new cjs.Rectangle(50,25.5,740,1494.5), new cjs.Rectangle(50,25.5,740,1534.5), rect=new cjs.Rectangle(-410,-10,1620,1610), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":64,"end":244});

	// timeline functions:
	this.frame_4 = function() {
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
	this.frame_79 = function() {
		try
		{
			app.addSoundFunc("whoosh_sound", 0.2);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_134 = function() {
		try
		{
			app.addSoundFunc("magic_2_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(75).call(this.frame_79).wait(55).call(this.frame_134).wait(111));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(100.1,700,0.737,0.737,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(39).to({regX:0.2,regY:0.1,scaleX:0.53,scaleY:0.53,y:700.1},0).to({regY:0,scaleX:0.84,scaleY:0.84,x:100.2,y:460},13).to({regX:0.1,scaleX:0.74,scaleY:0.74,x:100.1,y:510},7).wait(5).to({scaleX:0.58,scaleY:0.58},5).to({scaleX:0.74,scaleY:0.74},10).to({y:460},5).to({regX:0.2,regY:0.1,scaleX:0.53,scaleY:0.53,y:700.1},15).wait(146));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_3_mc();
	this.dressupPanel_mc.setTransform(560,950);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).to({y:150},19).to({y:300},15).wait(50).to({y:150},15).to({y:950},20).wait(126));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(180,400);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(119).to({x:400},20).wait(106));

	// decor
	this.instance = new lib.decor_shadow_1_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(139).to({_off:false},0).wait(106));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({alpha:1},20).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(30,17,775,1583.1);
p.frameBounds = [rect, new cjs.Rectangle(30,17,775,1541), new cjs.Rectangle(30,17,775,1498.9), new cjs.Rectangle(30,17,775,1456.8), new cjs.Rectangle(30,17,775,1414.6), new cjs.Rectangle(30,17,775,1372.6), new cjs.Rectangle(30,17,775,1330.4), new cjs.Rectangle(30,17,775,1288.3), new cjs.Rectangle(30,17,775,1246.2), new cjs.Rectangle(30,17,775,1204.1), new cjs.Rectangle(30,17,775,1162), new cjs.Rectangle(30,17,775,1119.9), new cjs.Rectangle(30,17,775,1077.8), new cjs.Rectangle(30,17,775,1035.7), new cjs.Rectangle(30,17,775,993.6), new cjs.Rectangle(30,17,775,951.5), new cjs.Rectangle(30,-23.7,775,950), new cjs.Rectangle(30,-65.8,775,950), new cjs.Rectangle(30,-107.9,775,950), new cjs.Rectangle(30,-150,775,950), new cjs.Rectangle(30,-140,775,950), new cjs.Rectangle(30,-130,775,950), new cjs.Rectangle(30,-120,775,950), new cjs.Rectangle(30,-110,775,950), new cjs.Rectangle(30,-100,775,950), new cjs.Rectangle(30,-90,775,950), new cjs.Rectangle(30,-80,775,950), new cjs.Rectangle(30,-70,775,950), new cjs.Rectangle(30,-60,775,950), new cjs.Rectangle(30,-50,775,950), new cjs.Rectangle(30,-40,775,950), new cjs.Rectangle(30,-30,775,950), new cjs.Rectangle(30,-20,775,950), new cjs.Rectangle(30,-10,775,950), rect=new cjs.Rectangle(30,0,775,950), rect, rect, rect, rect, rect=new cjs.Rectangle(40,0,765,950), rect, rect, rect, rect, new cjs.Rectangle(38.4,0,766.6,950), new cjs.Rectangle(36.1,0,768.9,950), new cjs.Rectangle(33.9,0,771.2,950), new cjs.Rectangle(31.5,0,773.5,950), new cjs.Rectangle(29.2,0,775.8,950), new cjs.Rectangle(26.9,0,778.1,950), new cjs.Rectangle(24.6,0,780.4,950), new cjs.Rectangle(22.3,0,782.7,950), new cjs.Rectangle(20,0,785,950), new cjs.Rectangle(21.4,0,783.6,950), new cjs.Rectangle(22.9,0,782.2,950), new cjs.Rectangle(24.2,0,780.8,950), new cjs.Rectangle(25.7,0,779.4,950), new cjs.Rectangle(27.1,0,778,950), new cjs.Rectangle(28.5,0,776.5,950), rect=new cjs.Rectangle(30,0,775,950), rect, rect, rect, rect, rect, new cjs.Rectangle(33,0,772,950), new cjs.Rectangle(36,0,769,950), new cjs.Rectangle(39,0,766,950), rect=new cjs.Rectangle(40,0,765,950), rect, rect, rect, rect, new cjs.Rectangle(39,0,766,950), new cjs.Rectangle(37.5,0,767.5,950), new cjs.Rectangle(36,0,769,950), new cjs.Rectangle(34.5,0,770.6,950), new cjs.Rectangle(33,0,772,950), new cjs.Rectangle(31.5,0,773.6,950), rect=new cjs.Rectangle(30,0,775,950), rect, rect, rect, rect, rect, new cjs.Rectangle(31.3,-10,773.7,950), new cjs.Rectangle(32.7,-20,772.4,950), new cjs.Rectangle(34,-30,771,950), new cjs.Rectangle(35.3,-40,769.7,950), new cjs.Rectangle(36.7,-50,768.4,950), new cjs.Rectangle(38,-60,767,950), new cjs.Rectangle(39.3,-70,765.7,950), new cjs.Rectangle(40,-80,765,950), new cjs.Rectangle(40,-90,765,950), new cjs.Rectangle(40,-100,765,950), new cjs.Rectangle(40,-110,765,950), new cjs.Rectangle(40,-120,765,950), new cjs.Rectangle(40,-130,765,950), new cjs.Rectangle(40,-140,765,950), new cjs.Rectangle(40,-150,765,950), new cjs.Rectangle(40,-110,765,950), new cjs.Rectangle(40,-70,765,950), new cjs.Rectangle(40,-30,765,950), new cjs.Rectangle(40,10,765,950), new cjs.Rectangle(40,17,765,983.1), new cjs.Rectangle(40,17,765,1023.1), new cjs.Rectangle(40,17,765,1063.1), new cjs.Rectangle(40,17,765,1103.1), new cjs.Rectangle(40,17,765,1143.1), new cjs.Rectangle(40,17,765,1183.1), new cjs.Rectangle(40,17,765,1223.1), new cjs.Rectangle(40,17,765,1263.1), new cjs.Rectangle(40,17,765,1303.1), new cjs.Rectangle(40,17,765,1343.1), new cjs.Rectangle(40,17,765,1383.1), new cjs.Rectangle(40,17,765,1423.1), new cjs.Rectangle(40,17,765,1463.1), new cjs.Rectangle(40,17,765,1503.1), new cjs.Rectangle(40,17,765,1543.1), rect=new cjs.Rectangle(-410,-10,1620,1610), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":109,"end":179});

	// timeline functions:
	this.frame_24 = function() {
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
	this.frame_54 = function() {
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
	this.frame_114 = function() {
		try
		{
			app.addSoundFunc("whoosh_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(30).call(this.frame_54).wait(60).call(this.frame_114).wait(66));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(570.1,510,0.632,0.632,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(83).to({regX:0.3,regY:0.1,scaleX:0.53,scaleY:0.53,x:570.2},0).to({regX:0.2,regY:0,scaleX:0.79,scaleY:0.79,y:460},13).to({regX:0.1,scaleX:0.63,scaleY:0.63,x:570.1,y:510},7).wait(5).to({regX:0.3,regY:0.1,scaleX:0.53,scaleY:0.53,x:570.2,y:510.1},5).to({regX:0.1,regY:0,scaleX:0.63,scaleY:0.63,x:570.1,y:510},10).to({regY:0.1,scaleX:0.74,scaleY:0.74,y:460.1},5).to({regY:0,scaleX:0.63,scaleY:0.63,y:700},10).wait(41));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_6_mc();
	this.dressupPanel_mc.setTransform(590,330);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:1400,y:1000},0).wait(53).to({x:450,y:330},20).to({x:590},10).wait(35).to({x:500},10).to({x:1400,y:1000},20).wait(31));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(220,320);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:-650},0).wait(23).to({x:350},20).to({x:220},10).wait(95).to({x:620},20).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(83,15.5,707,964.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-787,15.5,2387,1634.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-737,15.5,2337,1634.5), new cjs.Rectangle(-687,15.5,2287,1634.5), new cjs.Rectangle(-637,15.5,2237,1634.5), new cjs.Rectangle(-587,15.5,2187,1634.5), new cjs.Rectangle(-537,15.5,2137,1634.5), new cjs.Rectangle(-487,15.5,2087,1634.5), new cjs.Rectangle(-437,15.5,2037,1634.5), new cjs.Rectangle(-387,15.5,1987,1634.5), new cjs.Rectangle(-337,15.5,1937,1634.5), new cjs.Rectangle(-287,15.5,1887,1634.5), new cjs.Rectangle(-237,15.5,1837,1634.5), new cjs.Rectangle(-187,15.5,1787,1634.5), new cjs.Rectangle(-137,15.5,1737,1634.5), new cjs.Rectangle(-87,15.5,1687,1634.5), new cjs.Rectangle(-37,15.5,1637,1634.5), new cjs.Rectangle(13,15.5,1587,1634.5), new cjs.Rectangle(63,15.5,1537,1634.5), new cjs.Rectangle(113,15.5,1487,1634.5), new cjs.Rectangle(163,15.5,1437,1634.5), new cjs.Rectangle(213,15.5,1387,1634.5), new cjs.Rectangle(200,15.5,1400,1634.5), new cjs.Rectangle(187,15.5,1413,1634.5), new cjs.Rectangle(174,15.5,1426,1634.5), new cjs.Rectangle(161,15.5,1439,1634.5), new cjs.Rectangle(148,15.5,1452,1634.5), new cjs.Rectangle(135,15.5,1465,1634.5), new cjs.Rectangle(122,15.5,1478,1634.5), new cjs.Rectangle(109,15.5,1491,1634.5), new cjs.Rectangle(96,15.5,1504,1634.5), new cjs.Rectangle(83,15.5,1517,1634.5), new cjs.Rectangle(83,15.5,1469.5,1601), new cjs.Rectangle(83,15.5,1422,1567.5), new cjs.Rectangle(83,15.5,1374.5,1534), new cjs.Rectangle(83,15.5,1327,1500.5), new cjs.Rectangle(83,15.5,1279.5,1467), new cjs.Rectangle(83,15.5,1232,1433.5), new cjs.Rectangle(83,15.5,1184.5,1400), new cjs.Rectangle(83,15.5,1137,1366.5), new cjs.Rectangle(83,15.5,1089.5,1333), new cjs.Rectangle(83,15.5,1042,1299.5), new cjs.Rectangle(83,15.5,994.5,1266), new cjs.Rectangle(83,15.5,947,1232.5), new cjs.Rectangle(83,15.5,899.5,1199), new cjs.Rectangle(83,15.5,852,1165.5), new cjs.Rectangle(83,15.5,804.5,1132), new cjs.Rectangle(83,15.5,757,1098.5), new cjs.Rectangle(83,15.5,709.5,1065), new cjs.Rectangle(83,15.5,662,1031.5), new cjs.Rectangle(83,15.5,614.5,998), new cjs.Rectangle(83,15.5,567,964.5), new cjs.Rectangle(83,15.5,581,964.5), new cjs.Rectangle(83,15.5,595,964.5), new cjs.Rectangle(83,15.5,609,964.5), new cjs.Rectangle(83,15.5,623,964.5), new cjs.Rectangle(83,15.5,637,964.5), new cjs.Rectangle(83,15.5,651,964.5), new cjs.Rectangle(83,15.5,665,964.5), new cjs.Rectangle(83,15.5,679,964.5), new cjs.Rectangle(83,15.5,693,964.5), rect=new cjs.Rectangle(83,15.5,707,964.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(83,15.5,698,964.5), new cjs.Rectangle(83,15.5,689,964.5), new cjs.Rectangle(83,15.5,680,964.5), new cjs.Rectangle(83,15.5,671,964.5), new cjs.Rectangle(83,15.5,662,964.5), new cjs.Rectangle(83,15.5,653,964.5), new cjs.Rectangle(83,15.5,644,964.5), new cjs.Rectangle(83,15.5,635,964.5), new cjs.Rectangle(83,15.5,626,964.5), new cjs.Rectangle(83,15.5,617,964.5), new cjs.Rectangle(83,15.5,662,998), new cjs.Rectangle(83,15.5,707,1031.5), new cjs.Rectangle(83,15.5,752,1065), new cjs.Rectangle(83,15.5,797,1098.5), new cjs.Rectangle(83,15.5,842,1132), new cjs.Rectangle(83,15.5,887,1165.5), new cjs.Rectangle(83,15.5,932,1199), new cjs.Rectangle(83,15.5,977,1232.5), new cjs.Rectangle(83,15.5,1022,1266), new cjs.Rectangle(83,15.5,1067,1299.5), new cjs.Rectangle(83,15.5,1112,1333), new cjs.Rectangle(83,15.5,1157,1366.5), new cjs.Rectangle(83,15.5,1202,1400), new cjs.Rectangle(83,15.5,1247,1433.5), new cjs.Rectangle(83,15.5,1292,1467), new cjs.Rectangle(83,15.5,1337,1500.5), new cjs.Rectangle(83,15.5,1382,1534), new cjs.Rectangle(83,15.5,1427,1567.5), new cjs.Rectangle(83,15.5,1472,1601), new cjs.Rectangle(83,15.5,1517,1634.5), new cjs.Rectangle(103,15.5,1497,1634.5), new cjs.Rectangle(123,15.5,1477,1634.5), new cjs.Rectangle(143,15.5,1457,1634.5), new cjs.Rectangle(163,15.5,1437,1634.5), new cjs.Rectangle(183,15.5,1417,1634.5), new cjs.Rectangle(203,15.5,1397,1634.5), new cjs.Rectangle(223,15.5,1377,1634.5), new cjs.Rectangle(243,15.5,1357,1634.5), new cjs.Rectangle(263,15.5,1337,1634.5), new cjs.Rectangle(283,15.5,1317,1634.5), new cjs.Rectangle(303,15.5,1297,1634.5), new cjs.Rectangle(323,15.5,1277,1634.5), new cjs.Rectangle(343,15.5,1257,1634.5), new cjs.Rectangle(363,15.5,1237,1634.5), new cjs.Rectangle(383,15.5,1217,1634.5), new cjs.Rectangle(403,15.5,1197,1634.5), new cjs.Rectangle(423,15.5,1177,1634.5), new cjs.Rectangle(443,15.5,1157,1634.5), new cjs.Rectangle(463,15.5,1137,1634.5), rect=new cjs.Rectangle(483,15.5,1117,1634.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":109,"end":189});

	// timeline functions:
	this.frame_24 = function() {
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
	this.frame_54 = function() {
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
	this.frame_124 = function() {
		try
		{
			app.addSoundFunc("whoosh_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(30).call(this.frame_54).wait(70).call(this.frame_124).wait(66));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(565.1,510,0.632,0.632,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(83).to({regX:0.2,scaleX:0.79,scaleY:0.79,x:565.2,y:460},10).to({regX:0.1,scaleX:0.63,scaleY:0.63,x:565.1,y:510},10).wait(5).to({regX:0.2,regY:0.1,scaleX:0.53,scaleY:0.53,y:510.1},5).to({regX:0.1,regY:0,scaleX:0.63,scaleY:0.63,y:510},10).to({regX:0.2,scaleX:0.74,scaleY:0.74,x:565.2,y:460},5).to({scaleX:0.47,scaleY:0.47,x:565.1,y:700},10).wait(51));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_5_mc();
	this.dressupPanel_mc.setTransform(590,330);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:1500,y:1000},0).wait(53).to({x:460,y:330},20).to({x:590},10).wait(45).to({x:480},10).to({x:1500,y:1000},20).wait(31));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(210,400);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:-650},0).wait(23).to({x:350},20).to({x:210},10).wait(105).to({x:610},20).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(70,17,726.1,963.1);
p.frameBounds = [rect, rect=new cjs.Rectangle(-790,17,2496.1,1633.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-740,17,2446.1,1633.1), new cjs.Rectangle(-690,17,2396.1,1633.1), new cjs.Rectangle(-640,17,2346.1,1633.1), new cjs.Rectangle(-590,17,2296.1,1633.1), new cjs.Rectangle(-540,17,2246.1,1633.1), new cjs.Rectangle(-490,17,2196.1,1633.1), new cjs.Rectangle(-440,17,2146.1,1633.1), new cjs.Rectangle(-390,17,2096.1,1633.1), new cjs.Rectangle(-340,17,2046.1,1633.1), new cjs.Rectangle(-290,17,1996.1,1633.1), new cjs.Rectangle(-240,17,1946.1,1633.1), new cjs.Rectangle(-190,17,1896.1,1633.1), new cjs.Rectangle(-140,17,1846.1,1633.1), new cjs.Rectangle(-90,17,1796.1,1633.1), new cjs.Rectangle(-40,17,1746.1,1633.1), new cjs.Rectangle(10,17,1696.1,1633.1), new cjs.Rectangle(60,17,1646.1,1633.1), new cjs.Rectangle(110,17,1596.1,1633.1), new cjs.Rectangle(160,17,1546.1,1633.1), new cjs.Rectangle(210,17,1496.1,1633.1), new cjs.Rectangle(196,17,1510.1,1633.1), new cjs.Rectangle(182,17,1524.1,1633.1), new cjs.Rectangle(168,17,1538.1,1633.1), new cjs.Rectangle(154,17,1552.1,1633.1), new cjs.Rectangle(140,17,1566.1,1633.1), new cjs.Rectangle(126,17,1580.1,1633.1), new cjs.Rectangle(112,17,1594.1,1633.1), new cjs.Rectangle(98,17,1608.1,1633.1), new cjs.Rectangle(84,17,1622.1,1633.1), new cjs.Rectangle(70,17,1636.1,1633.1), new cjs.Rectangle(70,17,1584,1599.6), new cjs.Rectangle(70,17,1532,1566.1), new cjs.Rectangle(70,17,1480,1532.6), new cjs.Rectangle(70,17,1428,1499.1), new cjs.Rectangle(70,17,1376,1465.6), new cjs.Rectangle(70,17,1324,1432.1), new cjs.Rectangle(70,17,1272,1398.6), new cjs.Rectangle(70,17,1220,1365.1), new cjs.Rectangle(70,17,1168,1331.6), new cjs.Rectangle(70,17,1116,1298.1), new cjs.Rectangle(70,17,1064,1264.6), new cjs.Rectangle(70,17,1012,1231.1), new cjs.Rectangle(70,17,960,1197.6), new cjs.Rectangle(70,17,908,1164.1), new cjs.Rectangle(70,17,856,1130.6), new cjs.Rectangle(70,17,804,1097.1), new cjs.Rectangle(70,17,752,1063.6), new cjs.Rectangle(70,17,700,1030.1), new cjs.Rectangle(70,17,648,996.6), new cjs.Rectangle(70,17,596.1,963.1), new cjs.Rectangle(70,17,609,963.1), new cjs.Rectangle(70,17,622,963.1), new cjs.Rectangle(70,17,635,963.1), new cjs.Rectangle(70,17,648,963.1), new cjs.Rectangle(70,17,661,963.1), new cjs.Rectangle(70,17,674,963.1), new cjs.Rectangle(70,17,687,963.1), new cjs.Rectangle(70,17,700,963.1), new cjs.Rectangle(70,17,713,963.1), rect=new cjs.Rectangle(70,17,726.1,963.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(70,17,715,963.1), new cjs.Rectangle(70,17,704,963.1), new cjs.Rectangle(70,17,693,963.1), new cjs.Rectangle(70,17,682,963.1), new cjs.Rectangle(70,17,671,963.1), new cjs.Rectangle(70,17,660,963.1), new cjs.Rectangle(70,17,649,963.1), new cjs.Rectangle(70,17,638,963.1), new cjs.Rectangle(70,17,627,963.1), new cjs.Rectangle(70,17,616.1,963.1), new cjs.Rectangle(70,17,667,996.6), new cjs.Rectangle(70,17,718,1030.1), new cjs.Rectangle(70,17,769,1063.6), new cjs.Rectangle(70,17,820,1097.1), new cjs.Rectangle(70,17,871,1130.6), new cjs.Rectangle(70,17,922,1164.1), new cjs.Rectangle(70,17,973,1197.6), new cjs.Rectangle(70,17,1024,1231.1), new cjs.Rectangle(70,17,1075,1264.6), new cjs.Rectangle(70,17,1126,1298.1), new cjs.Rectangle(70,17,1177,1331.6), new cjs.Rectangle(70,17,1228,1365.1), new cjs.Rectangle(70,17,1279,1398.6), new cjs.Rectangle(70,17,1330,1432.1), new cjs.Rectangle(70,17,1381,1465.6), new cjs.Rectangle(70,17,1432,1499.1), new cjs.Rectangle(70,17,1483,1532.6), new cjs.Rectangle(70,17,1534,1566.1), new cjs.Rectangle(70,17,1585,1599.6), new cjs.Rectangle(70,17,1636.1,1633.1), new cjs.Rectangle(90,17,1616.1,1633.1), new cjs.Rectangle(110,17,1596.1,1633.1), new cjs.Rectangle(130,17,1576.1,1633.1), new cjs.Rectangle(150,17,1556.1,1633.1), new cjs.Rectangle(170,17,1536.1,1633.1), new cjs.Rectangle(190,17,1516.1,1633.1), new cjs.Rectangle(210,17,1496.1,1633.1), new cjs.Rectangle(230,17,1476.1,1633.1), new cjs.Rectangle(250,17,1456.1,1633.1), new cjs.Rectangle(270,17,1436.1,1633.1), new cjs.Rectangle(290,17,1416.1,1633.1), new cjs.Rectangle(310,17,1396.1,1633.1), new cjs.Rectangle(330,17,1376.1,1633.1), new cjs.Rectangle(350,17,1356.1,1633.1), new cjs.Rectangle(370,17,1336.1,1633.1), new cjs.Rectangle(390,17,1316.1,1633.1), new cjs.Rectangle(410,17,1296.1,1633.1), new cjs.Rectangle(430,17,1276.1,1633.1), new cjs.Rectangle(450,17,1256.1,1633.1), rect=new cjs.Rectangle(470,17,1236.1,1633.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":109,"end":179});

	// timeline functions:
	this.frame_24 = function() {
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
	this.frame_54 = function() {
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
	this.frame_114 = function() {
		try
		{
			app.addSoundFunc("whoosh_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(30).call(this.frame_54).wait(60).call(this.frame_114).wait(66));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(700.1,510,0.737,0.737,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(83).to({regX:0.2,regY:0.1,scaleX:0.53,scaleY:0.53,y:700.1},0).to({regY:0,scaleX:0.84,scaleY:0.84,x:700.2,y:460},13).to({regX:0.1,scaleX:0.74,scaleY:0.74,x:700.1,y:510},7).wait(5).to({regY:0.1,scaleX:0.63,scaleY:0.63,y:510.1},5).to({regY:0,scaleX:0.74,scaleY:0.74,y:510},10).to({regX:0.2,scaleX:0.84,scaleY:0.84,x:700.2,y:460},5).to({regX:0.1,scaleX:0.74,scaleY:0.74,x:700.1,y:700},10).wait(41));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_4_mc();
	this.dressupPanel_mc.setTransform(220,330);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-600,y:1000},0).wait(53).to({x:350,y:330},20).to({x:220},10).wait(35).to({x:300},10).to({x:-600,y:1000},20).wait(31));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(600,330);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:1500},0).wait(23).to({x:450},20).to({x:600},10).wait(95).to({x:220},20).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(20,25.5,750,954.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-800,25.5,2437,1624.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-800,25.5,2384.5,1624.5), new cjs.Rectangle(-800,25.5,2332,1624.5), new cjs.Rectangle(-800,25.5,2279.5,1624.5), new cjs.Rectangle(-800,25.5,2227,1624.5), new cjs.Rectangle(-800,25.5,2174.5,1624.5), new cjs.Rectangle(-800,25.5,2122,1624.5), new cjs.Rectangle(-800,25.5,2069.5,1624.5), new cjs.Rectangle(-800,25.5,2017,1624.5), new cjs.Rectangle(-800,25.5,1964.5,1624.5), new cjs.Rectangle(-800,25.5,1912,1624.5), new cjs.Rectangle(-800,25.5,1859.5,1624.5), new cjs.Rectangle(-800,25.5,1807,1624.5), new cjs.Rectangle(-800,25.5,1754.5,1624.5), new cjs.Rectangle(-800,25.5,1702,1624.5), new cjs.Rectangle(-800,25.5,1649.5,1624.5), new cjs.Rectangle(-800,25.5,1597,1624.5), rect=new cjs.Rectangle(-800,25.5,1570,1624.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-752.5,25.5,1522.5,1591), new cjs.Rectangle(-705,25.5,1475,1557.5), new cjs.Rectangle(-657.5,25.5,1427.5,1524), new cjs.Rectangle(-610,25.5,1380,1490.5), new cjs.Rectangle(-562.5,25.5,1332.5,1457), new cjs.Rectangle(-515,25.5,1285,1423.5), new cjs.Rectangle(-467.5,25.5,1237.5,1390), new cjs.Rectangle(-420,25.5,1190,1356.5), new cjs.Rectangle(-372.5,25.5,1142.5,1323), new cjs.Rectangle(-325,25.5,1095,1289.5), new cjs.Rectangle(-277.5,25.5,1047.5,1256), new cjs.Rectangle(-230,25.5,1000,1222.5), new cjs.Rectangle(-182.5,25.5,952.5,1189), new cjs.Rectangle(-135,25.5,905,1155.5), new cjs.Rectangle(-87.5,25.5,857.5,1122), new cjs.Rectangle(-40,25.5,810,1088.5), new cjs.Rectangle(7.5,25.5,762.5,1055), new cjs.Rectangle(55,25.5,715,1021.5), new cjs.Rectangle(102.5,25.5,667.5,988), new cjs.Rectangle(150,25.5,620,954.5), new cjs.Rectangle(137,25.5,633,954.5), new cjs.Rectangle(124,25.5,646,954.5), new cjs.Rectangle(111,25.5,659,954.5), new cjs.Rectangle(98,25.5,672,954.5), new cjs.Rectangle(85,25.5,685,954.5), new cjs.Rectangle(72,25.5,698,954.5), new cjs.Rectangle(59,25.5,711,954.5), new cjs.Rectangle(46,25.5,724,954.5), new cjs.Rectangle(33,25.5,737,954.5), new cjs.Rectangle(20,25.5,730,954.5), new cjs.Rectangle(20,25.5,732.2,954.5), new cjs.Rectangle(20,25.5,734.6,954.5), new cjs.Rectangle(20,25.5,736.9,954.5), new cjs.Rectangle(20,25.5,739.2,954.5), new cjs.Rectangle(20,25.5,741.5,954.5), new cjs.Rectangle(20,25.5,743.9,954.5), new cjs.Rectangle(20,25.5,746.2,954.5), new cjs.Rectangle(20,25.5,748.4,954.5), new cjs.Rectangle(20,25.5,750.8,954.5), new cjs.Rectangle(20,25.5,753.1,954.5), new cjs.Rectangle(20,25.5,755.4,954.5), new cjs.Rectangle(20,25.5,757.7,954.5), new cjs.Rectangle(20,25.5,760,954.5), new cjs.Rectangle(20,25.5,758.5,954.5), new cjs.Rectangle(20,25.5,757.2,954.5), new cjs.Rectangle(20,25.5,755.6,954.5), new cjs.Rectangle(20,25.5,754.2,954.5), new cjs.Rectangle(20,25.5,752.8,954.5), new cjs.Rectangle(20,25.5,751.4,954.5), rect=new cjs.Rectangle(20,25.5,750,954.5), rect, rect, rect, rect, rect, new cjs.Rectangle(20,25.5,748,954.5), new cjs.Rectangle(20,25.5,746,954.5), new cjs.Rectangle(20,25.5,744,954.5), new cjs.Rectangle(20,25.5,742,954.5), new cjs.Rectangle(20,25.5,740,954.5), new cjs.Rectangle(20,25.5,741,954.5), new cjs.Rectangle(20,25.5,742,954.5), new cjs.Rectangle(20,25.5,743.1,954.5), new cjs.Rectangle(20,25.5,744,954.5), new cjs.Rectangle(20,25.5,745,954.5), new cjs.Rectangle(28,25.5,738,954.5), new cjs.Rectangle(36,25.5,731,954.5), new cjs.Rectangle(44,25.5,724,954.5), new cjs.Rectangle(52,25.5,717,954.5), new cjs.Rectangle(60,25.5,710,954.5), new cjs.Rectangle(68,25.5,704,954.5), new cjs.Rectangle(76,25.5,698,954.5), new cjs.Rectangle(84,25.5,692,954.5), new cjs.Rectangle(92,25.5,686,954.5), new cjs.Rectangle(100,25.5,680,954.5), new cjs.Rectangle(55,25.5,724,988), new cjs.Rectangle(10,25.5,768,1021.5), new cjs.Rectangle(-35,25.5,812,1055), new cjs.Rectangle(-80,25.5,856,1088.5), new cjs.Rectangle(-125,25.5,900,1122), new cjs.Rectangle(-170,25.5,944,1155.5), new cjs.Rectangle(-215,25.5,988,1189), new cjs.Rectangle(-260,25.5,1032,1222.5), new cjs.Rectangle(-305,25.5,1076,1256), new cjs.Rectangle(-350,25.5,1120,1289.5), new cjs.Rectangle(-395,25.5,1165,1323), new cjs.Rectangle(-440,25.5,1210,1356.5), new cjs.Rectangle(-485,25.5,1255,1390), new cjs.Rectangle(-530,25.5,1300,1423.5), new cjs.Rectangle(-575,25.5,1345,1457), new cjs.Rectangle(-620,25.5,1390,1490.5), new cjs.Rectangle(-665,25.5,1435,1524), new cjs.Rectangle(-710,25.5,1480,1557.5), new cjs.Rectangle(-755,25.5,1525,1591), rect=new cjs.Rectangle(-800,25.5,1570,1624.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":109,"end":189});

	// timeline functions:
	this.frame_24 = function() {
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
	this.frame_54 = function() {
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
	this.frame_114 = function() {
		try
		{
			app.addSoundFunc("whoosh_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(30).call(this.frame_54).wait(60).call(this.frame_114).wait(76));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(700.1,510,0.737,0.737,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(83).to({regX:0.2,regY:0.1,scaleX:0.53,scaleY:0.53,y:700.1},0).to({regY:0,scaleX:0.84,scaleY:0.84,x:700.2,y:460},13).to({regX:0.1,scaleX:0.74,scaleY:0.74,x:700.1,y:510},7).wait(5).to({regY:0.1,scaleX:0.63,scaleY:0.63,y:510.1},5).to({regY:0,scaleX:0.74,scaleY:0.74,y:510},10).to({regX:0.2,scaleX:0.84,scaleY:0.84,x:700.2,y:460},5).to({regX:0.1,scaleX:0.74,scaleY:0.74,x:700.1,y:700},10).wait(51));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_3_mc();
	this.dressupPanel_mc.setTransform(220,330);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-600,y:1000},0).wait(53).to({x:320,y:330},20).to({x:220},10).wait(36).to({x:300},9).to({x:-600,y:1000},20).wait(41));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(580,400);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:1500},0).wait(23).to({x:450},20).to({x:580},10).wait(95).to({x:180},20).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(20,17,750,963.1);
p.frameBounds = [rect, rect=new cjs.Rectangle(-800,17,2440,1633.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-800,17,2387.5,1633.1), new cjs.Rectangle(-800,17,2335,1633.1), new cjs.Rectangle(-800,17,2282.5,1633.1), new cjs.Rectangle(-800,17,2230,1633.1), new cjs.Rectangle(-800,17,2177.5,1633.1), new cjs.Rectangle(-800,17,2125,1633.1), new cjs.Rectangle(-800,17,2072.5,1633.1), new cjs.Rectangle(-800,17,2020,1633.1), new cjs.Rectangle(-800,17,1967.5,1633.1), new cjs.Rectangle(-800,17,1915,1633.1), new cjs.Rectangle(-800,17,1862.5,1633.1), new cjs.Rectangle(-800,17,1810,1633.1), new cjs.Rectangle(-800,17,1757.5,1633.1), new cjs.Rectangle(-800,17,1705,1633.1), new cjs.Rectangle(-800,17,1652.5,1633.1), new cjs.Rectangle(-800,17,1600,1633.1), rect=new cjs.Rectangle(-800,17,1570,1633.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-754,17,1524,1599.6), new cjs.Rectangle(-708,17,1478,1566.1), new cjs.Rectangle(-662,17,1432,1532.6), new cjs.Rectangle(-616,17,1386,1499.1), new cjs.Rectangle(-570,17,1340,1465.6), new cjs.Rectangle(-524,17,1294,1432.1), new cjs.Rectangle(-478,17,1248,1398.6), new cjs.Rectangle(-432,17,1202,1365.1), new cjs.Rectangle(-386,17,1156,1331.6), new cjs.Rectangle(-340,17,1110,1298.1), new cjs.Rectangle(-294,17,1064,1264.6), new cjs.Rectangle(-248,17,1018,1231.1), new cjs.Rectangle(-202,17,972,1197.6), new cjs.Rectangle(-156,17,926,1164.1), new cjs.Rectangle(-110,17,880,1130.6), new cjs.Rectangle(-64,17,834,1097.1), new cjs.Rectangle(-18,17,788,1063.6), new cjs.Rectangle(28,17,742,1030.1), new cjs.Rectangle(74,17,696,996.6), new cjs.Rectangle(120,17,650,963.1), new cjs.Rectangle(110,17,660,963.1), new cjs.Rectangle(100,17,670,963.1), new cjs.Rectangle(90,17,680,963.1), new cjs.Rectangle(80,17,690,963.1), new cjs.Rectangle(70,17,700,963.1), new cjs.Rectangle(60,17,710,963.1), new cjs.Rectangle(50,17,720,963.1), new cjs.Rectangle(40,17,730,963.1), new cjs.Rectangle(30,17,740,963.1), new cjs.Rectangle(20,17,730,963.1), new cjs.Rectangle(20,17,732.2,963.1), new cjs.Rectangle(20,17,734.6,963.1), new cjs.Rectangle(20,17,736.9,963.1), new cjs.Rectangle(20,17,739.2,963.1), new cjs.Rectangle(20,17,741.5,963.1), new cjs.Rectangle(20,17,743.9,963.1), new cjs.Rectangle(20,17,746.2,963.1), new cjs.Rectangle(20,17,748.4,963.1), new cjs.Rectangle(20,17,750.8,963.1), new cjs.Rectangle(20,17,753.1,963.1), new cjs.Rectangle(20,17,755.4,963.1), new cjs.Rectangle(20,17,757.7,963.1), new cjs.Rectangle(20,17,760,963.1), new cjs.Rectangle(20,17,758.5,963.1), new cjs.Rectangle(20,17,757.2,963.1), new cjs.Rectangle(20,17,755.6,963.1), new cjs.Rectangle(20,17,754.2,963.1), new cjs.Rectangle(20,17,752.8,963.1), new cjs.Rectangle(20,17,751.4,963.1), rect=new cjs.Rectangle(20,17,750,963.1), rect, rect, rect, rect, rect, new cjs.Rectangle(20,17,748,963.1), new cjs.Rectangle(20,17,746,963.1), new cjs.Rectangle(20,17,744,963.1), new cjs.Rectangle(20,17,742,963.1), new cjs.Rectangle(20,17,740,963.1), new cjs.Rectangle(20,17,741,963.1), new cjs.Rectangle(20,17,742,963.1), new cjs.Rectangle(20,17,743.1,963.1), new cjs.Rectangle(20,17,744,963.1), new cjs.Rectangle(20,17,745,963.1), new cjs.Rectangle(20,17,746,963.1), new cjs.Rectangle(28.9,17,738.1,963.1), new cjs.Rectangle(37.8,17,730.2,963.1), new cjs.Rectangle(46.7,17,722.4,963.1), new cjs.Rectangle(55.6,17,714.5,963.1), new cjs.Rectangle(64.5,17,707.5,963.1), new cjs.Rectangle(73.4,17,700.6,963.1), new cjs.Rectangle(82.2,17,693.8,963.1), new cjs.Rectangle(91.1,17,686.9,963.1), new cjs.Rectangle(100,17,680,963.1), new cjs.Rectangle(55,17,724,996.6), new cjs.Rectangle(10,17,768,1030.1), new cjs.Rectangle(-35,17,812,1063.6), new cjs.Rectangle(-80,17,856,1097.1), new cjs.Rectangle(-125,17,900,1130.6), new cjs.Rectangle(-170,17,944,1164.1), new cjs.Rectangle(-215,17,988,1197.6), new cjs.Rectangle(-260,17,1032,1231.1), new cjs.Rectangle(-305,17,1076,1264.6), new cjs.Rectangle(-350,17,1120,1298.1), new cjs.Rectangle(-395,17,1165,1331.6), new cjs.Rectangle(-440,17,1210,1365.1), new cjs.Rectangle(-485,17,1255,1398.6), new cjs.Rectangle(-530,17,1300,1432.1), new cjs.Rectangle(-575,17,1345,1465.6), new cjs.Rectangle(-620,17,1390,1499.1), new cjs.Rectangle(-665,17,1435,1532.6), new cjs.Rectangle(-710,17,1480,1566.1), new cjs.Rectangle(-755,17,1525,1599.6), rect=new cjs.Rectangle(-800,17,1570,1633.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":104,"end":284});

	// timeline functions:
	this.frame_29 = function() {
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
	this.frame_54 = function() {
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
	this.frame_119 = function() {
		try
		{
			app.addSoundFunc("whoosh_sound", 0.2);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_174 = function() {
		try
		{
			app.addSoundFunc("magic_2_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_259 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(25).call(this.frame_54).wait(65).call(this.frame_119).wait(55).call(this.frame_174).wait(85).call(this.frame_259).wait(26));

	// decor
	this.instance = new lib.forward_mc();
	this.instance.setTransform(700.1,700.1,0.526,0.526,0,0,0,0.1,0.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(259).to({_off:false},0).to({regX:0,regY:0,scaleX:0.84,scaleY:0.84,x:700,y:460},13).to({scaleX:0.74,scaleY:0.74,y:510},7).wait(6));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(700.1,510,0.737,0.737,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(83).to({y:460},10).to({y:510},5).wait(5).to({scaleX:0.58,scaleY:0.58},5).to({scaleX:0.74,scaleY:0.74},10).to({y:460},5).to({y:700},15).wait(146));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_2_mc();
	this.dressupPanel_mc.setTransform(240,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:950},0).wait(53).to({y:150},15).to({y:300},15).wait(40).to({y:150},15).to({y:950},20).wait(126));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(620,320);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:1500},0).wait(23).to({x:480},23).to({x:620},7).wait(105).to({x:400},20).wait(106));

	// decor
	this.instance_1 = new lib.decor_shadow_1_mc();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(179).to({_off:false},0).wait(106));

	// shadow
	this.instance_2 = new lib.shadow_dressup_mc();
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(159).to({_off:false},0).to({alpha:1},20).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10,0,760,950);
p.frameBounds = [rect, rect=new cjs.Rectangle(10,15.5,1627,1584.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(10,15.5,1582.7,1584.5), new cjs.Rectangle(10,15.5,1538.3,1584.5), new cjs.Rectangle(10,15.5,1494,1584.5), new cjs.Rectangle(10,15.5,1449.6,1584.5), new cjs.Rectangle(10,15.5,1405.3,1584.5), new cjs.Rectangle(10,15.5,1360.9,1584.5), new cjs.Rectangle(10,15.5,1316.6,1584.5), new cjs.Rectangle(10,15.5,1272.2,1584.5), new cjs.Rectangle(10,15.5,1227.9,1584.5), new cjs.Rectangle(10,15.5,1183.5,1584.5), new cjs.Rectangle(10,15.5,1139.2,1584.5), new cjs.Rectangle(10,15.5,1094.8,1584.5), new cjs.Rectangle(10,15.5,1050.5,1584.5), new cjs.Rectangle(10,15.5,1006.2,1584.5), new cjs.Rectangle(10,15.5,961.8,1584.5), new cjs.Rectangle(10,15.5,917.5,1584.5), new cjs.Rectangle(10,15.5,873.1,1584.5), new cjs.Rectangle(10,15.5,828.8,1584.5), new cjs.Rectangle(10,15.5,784.4,1584.5), rect=new cjs.Rectangle(10,15.5,760,1584.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(10,15.5,760.1,1531.2), new cjs.Rectangle(10,15.5,760.1,1477.9), new cjs.Rectangle(10,15.5,760.1,1424.5), new cjs.Rectangle(10,15.5,760.1,1371.2), new cjs.Rectangle(10,15.5,760.1,1317.9), new cjs.Rectangle(10,15.5,760.1,1264.5), new cjs.Rectangle(10,15.5,760.1,1211.2), new cjs.Rectangle(10,15.5,760.1,1157.9), new cjs.Rectangle(10,15.5,760.1,1104.5), new cjs.Rectangle(10,15.5,760.1,1051.2), new cjs.Rectangle(10,15.5,760.1,997.9), new cjs.Rectangle(10,10,760.1,950), new cjs.Rectangle(10,-43.3,760.1,950), new cjs.Rectangle(10,-96.6,760.1,950), new cjs.Rectangle(10,-150,760,950), new cjs.Rectangle(10,-140,760.1,950), new cjs.Rectangle(10,-130,760.1,950), new cjs.Rectangle(10,-120,760.1,950), new cjs.Rectangle(10,-110,760.1,950), new cjs.Rectangle(10,-100,760.1,950), new cjs.Rectangle(10,-90,760.1,950), new cjs.Rectangle(10,-80,760.1,950), new cjs.Rectangle(10,-70,760.1,950), new cjs.Rectangle(10,-60,760.1,950), new cjs.Rectangle(10,-50,760.1,950), new cjs.Rectangle(10,-40,760.1,950), new cjs.Rectangle(10,-30,760.1,950), new cjs.Rectangle(10,-20,760.1,950), new cjs.Rectangle(10,-10,760.1,950), rect=new cjs.Rectangle(10,0,760,950), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(10,0,757,950), new cjs.Rectangle(10,0,754,950), new cjs.Rectangle(10,0,751,950), new cjs.Rectangle(10,0,748,950), rect=new cjs.Rectangle(10,0,747,950), rect, new cjs.Rectangle(10,0,748,950), new cjs.Rectangle(10,0,749.5,950), new cjs.Rectangle(10,0,751,950), new cjs.Rectangle(10,0,752.5,950), new cjs.Rectangle(10,0,754,950), new cjs.Rectangle(10,0,755.5,950), new cjs.Rectangle(10,0,757,950), new cjs.Rectangle(10,0,758.5,950), rect=new cjs.Rectangle(10,0,760,950), rect, rect, rect, rect, rect, new cjs.Rectangle(10,-10,760,950), new cjs.Rectangle(10,-20,760,950), new cjs.Rectangle(10,-30,760,950), new cjs.Rectangle(10,-40,760,950), new cjs.Rectangle(10,-50,760,950), new cjs.Rectangle(10,-60,760,950), new cjs.Rectangle(10,-70,760,950), new cjs.Rectangle(10,-80,760,950), new cjs.Rectangle(10,-90,760,950), new cjs.Rectangle(10,-100,760,950), new cjs.Rectangle(10,-110,760,950), new cjs.Rectangle(10,-120,760,950), new cjs.Rectangle(10,-130,760,950), new cjs.Rectangle(10,-140,760,950), new cjs.Rectangle(10,-150,760,950), new cjs.Rectangle(10,-110,760.1,950), new cjs.Rectangle(10,-70,760.1,950), new cjs.Rectangle(10,-30,760.1,950), new cjs.Rectangle(10,10,760.1,950), new cjs.Rectangle(10,15.5,760.1,984.5), new cjs.Rectangle(10,15.5,760.1,1024.5), new cjs.Rectangle(10,15.5,760.1,1064.5), new cjs.Rectangle(10,15.5,760.1,1104.5), new cjs.Rectangle(10,15.5,760.1,1144.5), new cjs.Rectangle(10,15.5,760.1,1184.5), new cjs.Rectangle(10,15.5,760.1,1224.5), new cjs.Rectangle(10,15.5,760.1,1264.5), new cjs.Rectangle(10,15.5,760.1,1304.5), new cjs.Rectangle(10,15.5,760.1,1344.5), new cjs.Rectangle(10,15.5,760.1,1384.5), new cjs.Rectangle(10,15.5,760.1,1424.5), new cjs.Rectangle(10,15.5,760.1,1464.5), new cjs.Rectangle(10,15.5,760.1,1504.5), new cjs.Rectangle(10,15.5,760.1,1544.5), rect=new cjs.Rectangle(-410,-10,1620,1610), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":104,"end":284});

	// timeline functions:
	this.frame_29 = function() {
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
	this.frame_54 = function() {
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
	this.frame_119 = function() {
		try
		{
			app.addSoundFunc("whoosh_sound", 0.2);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_174 = function() {
		try
		{
			app.addSoundFunc("magic_2_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(25).call(this.frame_54).wait(65).call(this.frame_119).wait(55).call(this.frame_174).wait(111));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(100.1,510,0.737,0.737,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(83).to({y:460},10).to({y:510},5).wait(5).to({scaleX:0.58,scaleY:0.58},5).to({scaleX:0.74,scaleY:0.74},10).to({y:460},5).to({y:700},15).wait(146));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_1_mc();
	this.dressupPanel_mc.setTransform(560,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:950},0).wait(53).to({y:150},15).to({y:300},15).wait(40).to({y:150},15).to({y:950},20).wait(126));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(180,400);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:-700},0).wait(23).to({x:300},23).to({x:180},7).wait(105).to({x:400},20).wait(106));

	// decor
	this.instance = new lib.decor_shadow_1_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(179).to({_off:false},0).wait(106));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(159).to({_off:false},0).to({alpha:1},20).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(30,0,775,950);
p.frameBounds = [rect, rect=new cjs.Rectangle(-840,17,1645,1583.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-796.5,17,1601.6,1583.1), new cjs.Rectangle(-753,17,1558.1,1583.1), new cjs.Rectangle(-709.5,17,1514.6,1583.1), new cjs.Rectangle(-666.1,17,1471.1,1583.1), new cjs.Rectangle(-622.6,17,1427.6,1583.1), new cjs.Rectangle(-579.1,17,1384.2,1583.1), new cjs.Rectangle(-535.6,17,1340.7,1583.1), new cjs.Rectangle(-492.1,17,1297.2,1583.1), new cjs.Rectangle(-448.7,17,1253.7,1583.1), new cjs.Rectangle(-405.2,17,1210.2,1583.1), new cjs.Rectangle(-361.7,17,1166.8,1583.1), new cjs.Rectangle(-318.2,17,1123.3,1583.1), new cjs.Rectangle(-274.8,17,1079.8,1583.1), new cjs.Rectangle(-231.3,17,1036.3,1583.1), new cjs.Rectangle(-187.8,17,992.9,1583.1), new cjs.Rectangle(-144.3,17,949.4,1583.1), new cjs.Rectangle(-100.8,17,905.9,1583.1), new cjs.Rectangle(-57.4,17,862.4,1583.1), new cjs.Rectangle(-13.9,17,818.9,1583.1), new cjs.Rectangle(29.6,17,775.5,1583.1), rect=new cjs.Rectangle(30,17,775,1583.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(30,17,775,1529.7), new cjs.Rectangle(30,17,775,1476.4), new cjs.Rectangle(30,17,775,1423.1), new cjs.Rectangle(30,17,775,1369.7), new cjs.Rectangle(30,17,775,1316.4), new cjs.Rectangle(30,17,775,1263.1), new cjs.Rectangle(30,17,775,1209.7), new cjs.Rectangle(30,17,775,1156.4), new cjs.Rectangle(30,17,775,1103.1), new cjs.Rectangle(30,17,775,1049.7), new cjs.Rectangle(30,17,775,996.4), new cjs.Rectangle(30,10,775,950), new cjs.Rectangle(30,-43.3,775,950), new cjs.Rectangle(30,-96.6,775,950), new cjs.Rectangle(30,-150,775,950), new cjs.Rectangle(30,-140,775,950), new cjs.Rectangle(30,-130,775,950), new cjs.Rectangle(30,-120,775,950), new cjs.Rectangle(30,-110,775,950), new cjs.Rectangle(30,-100,775,950), new cjs.Rectangle(30,-90,775,950), new cjs.Rectangle(30,-80,775,950), new cjs.Rectangle(30,-70,775,950), new cjs.Rectangle(30,-60,775,950), new cjs.Rectangle(30,-50,775,950), new cjs.Rectangle(30,-40,775,950), new cjs.Rectangle(30,-30,775,950), new cjs.Rectangle(30,-20,775,950), new cjs.Rectangle(30,-10,775,950), rect=new cjs.Rectangle(30,0,775,950), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(33,0,772,950), new cjs.Rectangle(36,0,769,950), new cjs.Rectangle(39,0,766,950), rect=new cjs.Rectangle(40,0,765,950), rect, rect, rect, rect, new cjs.Rectangle(39,0,766,950), new cjs.Rectangle(37.5,0,767.5,950), new cjs.Rectangle(36,0,769,950), new cjs.Rectangle(34.5,0,770.6,950), new cjs.Rectangle(33,0,772,950), new cjs.Rectangle(31.5,0,773.6,950), rect=new cjs.Rectangle(30,0,775,950), rect, rect, rect, rect, rect, new cjs.Rectangle(30,-10,775,950), new cjs.Rectangle(30,-20,775,950), new cjs.Rectangle(30,-30,775,950), new cjs.Rectangle(30,-40,775,950), new cjs.Rectangle(30,-50,775,950), new cjs.Rectangle(30,-60,775,950), new cjs.Rectangle(30,-70,775,950), new cjs.Rectangle(30,-80,775,950), new cjs.Rectangle(30,-90,775,950), new cjs.Rectangle(30,-100,775,950), new cjs.Rectangle(30,-110,775,950), new cjs.Rectangle(30,-120,775,950), new cjs.Rectangle(30,-130,775,950), new cjs.Rectangle(30,-140,775,950), new cjs.Rectangle(30,-150,775,950), new cjs.Rectangle(30,-110,775,950), new cjs.Rectangle(30,-70,775,950), new cjs.Rectangle(30,-30,775,950), new cjs.Rectangle(30,10,775,950), new cjs.Rectangle(30,17,775,983.1), new cjs.Rectangle(30,17,775,1023.1), new cjs.Rectangle(30,17,775,1063.1), new cjs.Rectangle(30,17,775,1103.1), new cjs.Rectangle(30,17,775,1143.1), new cjs.Rectangle(30,17,775,1183.1), new cjs.Rectangle(30,17,775,1223.1), new cjs.Rectangle(30,17,775,1263.1), new cjs.Rectangle(30,17,775,1303.1), new cjs.Rectangle(30,17,775,1343.1), new cjs.Rectangle(30,17,775,1383.1), new cjs.Rectangle(30,17,775,1423.1), new cjs.Rectangle(30,17,775,1463.1), new cjs.Rectangle(30,17,775,1503.1), new cjs.Rectangle(30,17,775,1543.1), rect=new cjs.Rectangle(-410,-10,1620,1610), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.heroes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(530,315);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:400,y:1200},0).wait(1).to({x:410,y:315},0).wait(1).to({x:290},0).wait(1).to({x:410},0).wait(1).to({x:400,y:1200},0).wait(1).to({x:530,y:315},0).wait(1).to({x:400,y:1200},0).wait(1).to({x:410,y:315},0).wait(1).to({x:290},0).wait(1).to({x:410},0).wait(1).to({x:400,y:1200},0).wait(1).to({x:530,y:315},0).wait(1).to({x:400,y:1200},0).wait(1).to({x:410,y:315},0).wait(1));

	// hero_1
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(275,390);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:395},0).wait(1).to({x:400,y:1200},0).wait(1).to({x:515,y:390},0).wait(1).to({x:400,y:1200},0).wait(1).to({x:395,y:390},0).wait(1).to({x:275},0).wait(1).to({x:395},0).wait(1).to({x:400,y:1200},0).wait(1).to({x:515,y:390},0).wait(1).to({x:400,y:1200},0).wait(1).to({x:395,y:390},0).wait(1).to({x:275},0).wait(1).to({x:395},0).wait(1).to({x:400,y:1200},0).wait(1));

	// bg
	this.instance = new lib.background_9_mc();

	this.instance_1 = new lib.background_1_mc();

	this.instance_2 = new lib.background_10_mc();

	this.instance_3 = new lib.background_3_mc();

	this.instance_4 = new lib.background_4_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,621.5);
p.frameBounds = [rect, new cjs.Rectangle(-400,0,1600,1506.5), new cjs.Rectangle(-400,0,1600,1429.5), new cjs.Rectangle(-400,-7,1600,628.5), new cjs.Rectangle(-400,-7,1600,1436.5), new cjs.Rectangle(-400,-7,1600,1513.5), new cjs.Rectangle(-400,0,1600,621.5), new cjs.Rectangle(-400,0,1600,1506.5), new cjs.Rectangle(-400,0,1600,1429.5), new cjs.Rectangle(-400,-7,1600,628.5), new cjs.Rectangle(-400,-7,1600,1436.5), new cjs.Rectangle(-400,-7,1600,1513.5), new cjs.Rectangle(-400,0,1600,621.5), new cjs.Rectangle(-400,0,1600,1506.5), new cjs.Rectangle(-400,0,1600,1429.5)];


(lib.quest_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(520,-100);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(380,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-280,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).wait(1));

	// objects
	this.object_3 = new lib.object_0_mc();
	this.object_3.setTransform(700,500);
	this.object_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.object_3).wait(2).to({_off:false},0).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_6_mc();

	this.frame_2_mc = new lib.quest_2_6_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(83,-349.4,707,1329.4);
p.frameBounds = [rect, new cjs.Rectangle(10,-349.4,747,1949.4), new cjs.Rectangle(10,-349.4,835,1949.4)];


(lib.quest_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(520,-100);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(380,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-280,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_5_mc();

	this.frame_2_mc = new lib.quest_2_5_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(70,-349.4,726.1,1329.4);
p.frameBounds = [rect, new cjs.Rectangle(-5,-349.4,775,1949.4)];


(lib.quest_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(520,-100);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(380,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-280,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).wait(1));

	// objects
	this.object_3 = new lib.object_0_mc();
	this.object_3.setTransform(700,500);
	this.object_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.object_3).wait(2).to({_off:false},0).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_4_mc();

	this.frame_2_mc = new lib.quest_2_4_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(20,-349.4,750,1329.4);
p.frameBounds = [rect, new cjs.Rectangle(30,-349.4,760,1949.4), new cjs.Rectangle(30,-349.4,815,1949.4)];


(lib.quest_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(520,-100);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(380,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-280,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_3_mc();

	this.frame_2_mc = new lib.quest_2_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(20,-349.4,750,1329.4);
p.frameBounds = [rect, new cjs.Rectangle(30,-349.4,775,1949.4)];


(lib.quest_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(520,-100);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(380,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-280,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).wait(1));

	// objects
	this.object_2 = new lib.object_0_mc();
	this.object_2.setTransform(700,500);
	this.object_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.object_2).wait(1).to({_off:false},0).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10,-349.4,760,1299.4);
p.frameBounds = [rect, new cjs.Rectangle(10,-349.4,835,1299.4)];


(lib.quest_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(520,-100);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(380,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-280,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(30,-349.4,775,1299.4);
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
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,621.5);
p.frameBounds = [rect];


(lib.LocationScreen_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(760.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_6_mc();
	this.body_mc.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1330.4);
p.frameBounds = [rect];


(lib.LocationScreen_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(760.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_5_mc();
	this.body_mc.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1330.4);
p.frameBounds = [rect];


(lib.LocationScreen_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_4_mc();
	this.body_mc.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1330.4);
p.frameBounds = [rect];


(lib.LocationScreen_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(760.1,-39.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_3_mc();
	this.body_mc.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1330.4);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(760.1,-39.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_2_mc();
	this.body_mc.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1330.4);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_1_mc();
	this.body_mc.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1330.4);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// filters
	this.filters_animation_mc = new lib.filters_animation_mc();
	this.filters_animation_mc.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.filters_animation_mc).wait(1));

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(710,320);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(90,320);

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
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

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

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(0,400);
	this.instance.alpha = 0.398;
	this.instance.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_mc();
	this.photoContainer_mc.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-319.9,1600,1780);
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
	this.instance_5.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_6 = new lib.LocationScreen_2();
	this.instance_6.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_7 = new lib.LocationScreen_3();
	this.instance_7.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_8 = new lib.LocationScreen_4();
	this.instance_8.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_9 = new lib.LocationScreen_5();
	this.instance_9.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_10 = new lib.LocationScreen_6();
	this.instance_10.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_11 = new lib.RedirectScreen();

	this.instance_12 = new lib.ResultScreen();
	this.instance_12.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_13 = new lib.InstructionScreen();

	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(690,250);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.instance_14 = new lib.forward_mc();
	this.instance_14.setTransform(500,250);

	this.instance_15 = new lib.Glitter_2();
	this.instance_15.setTransform(450,50);

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(400,50);

	this.instance_16 = new lib.FlashAnimation();
	this.instance_16.setTransform(150,275);

	this.instance_17 = new lib.TrackMove_2();
	this.instance_17.setTransform(350,50);

	this.instance_18 = new lib.TrackMove();
	this.instance_18.setTransform(270,50);

	this.instance_19 = new lib.Cursor();
	this.instance_19.setTransform(185,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(115.1,50,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(45.1,50,0.583,0.583,0,0,0,0.1,0);

	this.instance_20 = new lib.PauseAppScreen();

	this.instance_21 = new lib.OrientationLockScreen();

	this.instance_22 = new lib.CurtainScreen();

	this.instance_23 = new lib.decor_shadow_1_mc();

	this.instance_24 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.gravity_explosion_comp},{t:this.instance_15},{t:this.instance_14},{t:this.next_btn}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[]},1).to({state:[{t:this.instance_23}]},5).to({state:[]},1).to({state:[{t:this.instance_24}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,257,75.5);
p.frameBounds = [rect, new cjs.Rectangle(-400,0,1600,600), new cjs.Rectangle(-410,-10,1620,620), new cjs.Rectangle(-400,0,1600,1315), new cjs.Rectangle(-740,-280.8,2277,1375.9), new cjs.Rectangle(-400,-280.8,1600,1261.9), rect=new cjs.Rectangle(-400,-349.4,1600,1330.4), rect, rect, rect, rect, rect, new cjs.Rectangle(-410,-10,1620,620), new cjs.Rectangle(-400,-319.9,1600,1780), new cjs.Rectangle(-400,0,1600,600), new cjs.Rectangle(0,0,785,425), rect=new cjs.Rectangle(-410,-10,1620,620), rect, new cjs.Rectangle(-400,600,1600,600), rect=null, rect, rect, rect, rect, new cjs.Rectangle(382,282,36,36), rect=null, rect, rect, rect, new cjs.Rectangle(-410,-10,1620,620)];


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