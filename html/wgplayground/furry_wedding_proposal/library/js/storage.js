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
		{name:"storage_atlas_", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_4", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_5", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_6", frames: [[0,0,800,540],[0,542,1600,200]]},
		{name:"storage_atlas_7", frames: [[864,402,360,720],[462,0,400,740],[864,0,700,400],[1226,402,440,540],[0,682,460,680],[0,0,460,680],[462,742,400,580]]},
		{name:"storage_atlas_8", frames: [[824,0,400,460],[0,864,360,440],[1406,744,360,440],[1044,744,360,440],[1466,0,297,564],[642,744,400,400],[824,462,640,280],[0,582,640,280],[402,0,420,540],[0,0,400,580]]},
		{name:"storage_atlas_9", frames: [[724,744,500,300],[724,1046,500,300],[1226,744,500,300],[1226,1046,500,300],[724,442,500,300],[1226,442,500,300],[362,442,360,440],[362,884,360,440],[724,0,360,440],[1086,0,360,440],[0,0,360,440],[0,442,360,440],[0,884,360,440],[362,0,360,440]]},
		{name:"storage_atlas_10", frames: [[0,0,500,300],[744,664,340,360],[784,1026,340,360],[1126,1026,340,360],[1086,664,340,360],[1428,332,340,360],[382,664,360,360],[382,302,360,360],[0,302,380,380],[0,684,380,380],[0,1066,390,330],[392,1026,390,330],[784,0,390,330],[1176,0,390,330],[744,332,390,330]]},
		{name:"storage_atlas_11", frames: [[684,362,300,300],[1026,0,300,300],[0,1086,380,260],[1328,0,300,300],[684,966,300,300],[684,664,300,300],[382,1086,300,300],[0,0,340,360],[0,362,340,360],[342,0,340,360],[0,724,340,360],[342,362,340,360],[684,0,340,360],[342,724,340,360],[986,362,177,488],[986,852,247,273],[1482,1059,233,262],[1235,829,245,269],[1482,798,240,259],[1225,1127,235,270],[1165,559,254,268],[986,1127,237,273],[1437,554,261,242],[1165,302,270,255],[1437,302,265,250]]},
		{name:"storage_atlas_12", frames: [[216,0,190,190],[1604,0,180,180],[0,534,190,190],[800,1179,150,150],[356,1144,147,160],[192,969,177,150],[647,1155,151,150],[800,1027,150,150],[188,1121,166,150],[371,992,157,150],[952,1072,149,150],[1103,1072,146,150],[1590,960,120,150],[1473,888,115,160],[1257,1106,119,150],[1513,564,131,160],[1121,1224,134,160],[1646,564,118,160],[1237,523,132,160],[1223,812,116,170],[1526,1112,111,150],[580,192,180,180],[1378,1106,146,120],[282,1306,196,90],[952,1224,167,130],[753,895,174,130],[530,1033,194,120],[1375,180,187,130],[1257,1258,196,90],[1023,564,212,100],[929,828,140,160],[839,676,150,150],[0,918,190,190],[984,0,200,180],[1186,0,220,160],[1407,482,280,80],[480,1319,260,60],[952,990,280,80],[792,0,190,190],[0,0,214,261],[0,263,198,269],[192,535,131,206],[325,535,144,179],[1639,1112,150,100],[571,901,180,130],[1503,726,120,160],[949,406,220,80],[388,374,340,80],[0,1110,186,188],[1071,824,150,142],[1408,0,194,178],[762,192,187,171],[1186,162,187,132],[200,374,186,159],[600,0,190,190],[192,743,120,224],[1066,182,111,215],[1179,296,112,212],[951,192,113,212],[615,456,116,218],[726,676,111,217],[314,743,113,215],[613,676,111,223],[1293,312,112,209],[762,365,185,106],[471,456,142,180],[429,817,140,173],[991,666,144,156],[471,638,140,177],[875,510,146,154],[1547,317,141,163],[1407,312,138,167],[505,1155,140,162],[733,510,140,164],[408,0,190,190],[0,726,190,190],[216,192,180,180],[398,192,180,180],[0,1300,280,100],[1341,840,130,150],[1371,564,140,150],[1564,182,180,133],[1455,1264,160,100],[1625,726,160,116],[1617,1264,160,98],[1137,685,160,125],[1251,992,160,112],[1625,844,160,114],[1341,716,160,122]]},
		{name:"storage_atlas_13", frames: [[437,102,120,120],[559,102,120,120],[315,102,120,120],[1238,1231,40,40],[1566,346,48,48],[1616,224,50,50],[321,1029,79,61],[1434,1199,90,55],[640,224,120,120],[152,102,161,90],[570,468,110,130],[682,468,110,130],[794,468,110,130],[458,468,110,130],[346,468,110,130],[234,468,110,130],[1250,224,120,120],[1128,224,120,120],[1372,224,120,120],[1494,224,120,120],[0,326,120,120],[1616,299,120,120],[122,316,120,120],[762,224,120,120],[244,346,120,120],[884,224,120,120],[366,346,120,120],[1006,224,120,120],[917,1004,90,50],[1306,1216,90,50],[488,346,120,120],[610,346,120,120],[732,346,120,120],[854,346,120,120],[679,1246,36,36],[500,1250,36,36],[1434,1256,36,36],[1472,1256,36,36],[810,1254,36,36],[462,1250,36,36],[848,1254,36,36],[924,1254,36,36],[0,1253,36,36],[886,1254,36,36],[996,1246,36,36],[1034,1246,36,36],[38,1253,36,36],[1390,738,64,64],[1072,1260,36,36],[538,1255,36,36],[1732,650,64,64],[0,829,80,124],[976,346,120,120],[1095,666,180,60],[1277,676,180,60],[605,682,180,60],[102,694,180,60],[284,694,180,60],[1095,728,180,60],[335,1246,40,40],[611,977,106,79],[1601,756,128,81],[213,600,126,92],[1048,790,129,80],[787,730,117,92],[1009,979,108,76],[1654,553,134,95],[605,744,117,90],[1313,1149,119,65],[1434,1151,167,46],[99,1199,170,33],[222,977,184,50],[324,888,182,44],[808,954,199,48],[401,1185,177,32],[483,600,184,61],[1009,872,165,30],[830,1184,186,37],[1395,979,97,83],[818,1004,97,83],[1494,981,97,83],[1692,981,97,83],[222,1029,97,83],[1593,981,97,83],[0,1052,97,83],[490,1054,97,83],[917,1057,97,83],[1016,1057,97,83],[589,1058,97,83],[719,1004,97,83],[1390,809,101,101],[1493,809,97,105],[1363,573,119,101],[906,809,101,101],[1592,839,98,98],[1692,839,98,89],[548,836,101,97],[1626,650,104,104],[124,972,96,99],[408,977,80,113],[297,1177,102,67],[622,1174,102,70],[1603,1151,102,75],[726,1174,102,68],[112,570,99,122],[826,824,70,72],[0,580,100,115],[1277,738,111,95],[1731,756,69,65],[1776,0,19,70],[1593,1066,97,83],[1692,1066,97,83],[1395,1064,97,83],[1494,1066,97,83],[1115,1071,97,83],[1214,1071,97,83],[99,1073,97,83],[688,1089,97,83],[321,1092,97,83],[198,1114,97,83],[787,1089,97,83],[0,1137,97,83],[456,0,150,100],[304,0,150,100],[608,0,150,100],[760,0,150,100],[1216,0,150,100],[0,0,150,100],[912,0,150,100],[1368,0,150,100],[1520,0,150,100],[0,102,150,100],[152,0,150,100],[1064,0,150,100],[1098,346,120,120],[1220,346,120,120],[1303,979,90,90],[82,756,80,130],[0,697,80,130],[164,756,80,130],[466,755,80,130],[328,756,80,130],[246,756,80,130],[724,744,60,60],[1048,731,40,55],[1196,1231,40,43],[1776,72,10,11],[651,836,69,94],[1204,1156,100,73],[1313,1071,57,60],[1281,835,99,100],[122,204,23,38],[1330,578,31,31],[1512,478,50,50],[1738,212,40,147],[1724,0,50,210],[1672,0,50,297],[1119,979,90,90],[1535,102,120,120],[152,194,120,120],[274,224,120,120],[1211,979,90,90],[518,224,120,120],[0,204,120,120],[396,224,120,120],[644,1246,33,41],[1009,809,35,50],[1398,1216,34,42],[410,756,40,48],[508,887,37,43],[548,755,40,52],[1591,1228,39,46],[410,806,36,52],[610,1246,32,43],[1738,361,62,41],[401,1219,59,42],[545,1219,63,34],[1632,1228,56,32],[1138,1225,56,34],[1018,1184,56,60],[1076,1225,60,33],[1732,716,65,37],[420,1092,68,40],[1526,1199,63,40],[1179,790,70,40],[811,600,70,40],[99,1158,81,29],[1068,904,81,29],[913,1223,81,29],[830,1223,81,29],[462,1219,81,29],[0,1222,81,29],[1190,578,138,86],[490,977,119,75],[1363,478,147,93],[1068,468,151,91],[1088,1156,114,67],[0,972,122,78],[1732,1233,40,40],[1690,1233,40,40],[125,1234,40,40],[251,1234,40,40],[768,1244,40,40],[209,1234,40,40],[83,1234,40,40],[167,1234,40,40],[726,1244,40,40],[1526,1241,40,40],[681,102,120,120],[1707,1151,80,80],[1678,421,110,130],[1342,346,110,130],[0,448,110,130],[1566,421,110,130],[122,438,110,130],[1454,346,110,130],[293,1246,40,40],[483,663,120,90],[803,102,120,120],[1047,102,120,120],[925,102,120,120],[1169,102,120,120],[1291,102,120,120],[1413,102,120,120],[1512,553,140,94],[1221,478,140,98],[1459,731,140,76],[669,600,140,80],[1048,561,140,87],[906,731,140,76],[953,650,140,79],[341,600,140,82],[906,557,140,89],[811,648,140,80],[1484,649,140,80],[82,888,240,40],[826,912,240,40],[82,930,240,40],[324,935,240,40],[566,935,240,40],[1068,937,240,40],[1310,937,240,40],[1552,939,240,40],[886,1142,200,40],[420,1143,200,40],[1179,835,100,100],[724,824,100,100],[906,468,160,87]]}
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



(lib.animation_for_pointer_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_6_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_7_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_8_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bouquet_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bouquet_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bouquet_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bouquet_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bouquet_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.bouquet_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.bouquet_7_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.bouquet_8_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.bouquet_9_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.boutonniere_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.boutonniere_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.boutonniere_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.boutonniere_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.boutonniere_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.boutonniere_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.boutonniere_7_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.boutonniere_8_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.boutonniere_9_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.closet1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.closet2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
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



(lib.copyright_title_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.current_location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.decor_location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.earrings_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.earrings_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.earrings_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.earrings_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.earrings_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.earrings_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.earrings_7_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.earrings_8_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.earrings_9_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_check_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.eyes_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.eyes_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.eyes_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.eyes_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.eyes_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.eyes_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.eyes_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.eyes_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.eyes_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.eyes_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.eyes_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.eyes_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.eyes_check_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.flash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.flash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.flash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.flash_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.forward_icon_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.glare_sun_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.glitter_10_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.glitter_11_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.glitter_12_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.glitter_13_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.glitter_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.glitter_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.glitter_3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.glitter_4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.glitter_5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.glitter_6_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.glitter_7_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.glitter_8_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.glitter_9_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.grass_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_de_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_es_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.indicator_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.judy_body_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.judy_crown1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.judy_crown2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.judy_crown3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.judy_crown4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.judy_crown5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.judy_crown6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.judy_crown7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.judy_crown8_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.judy_crown9_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.judy_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.judy_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.judy_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.judy_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.judy_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.judy_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.judy_dress7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.judy_dress8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.judy_dress9_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.judy_earrings1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.judy_earrings2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.judy_earrings3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.judy_earrings4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.judy_earrings5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.judy_earrings6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.judy_earrings7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.judy_earrings8_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.judy_earrings9_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.judy_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.judy_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.judy_eyebrows3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.judy_eyebrows4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.judy_eyebrows5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.judy_eyebrows6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.judy_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.judy_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.judy_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.judy_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.judy_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.judy_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.judy_flower1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.judy_flower2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.judy_flower3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.judy_flower4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.judy_flower5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.judy_flower6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.judy_flower7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.judy_flower8_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.judy_flower9_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.judy_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.judy_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.judy_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.judy_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.judy_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.judy_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.judy_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.judy_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.judy_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.judy_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.judy_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.judy_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.judy_hand_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.judy_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.judy_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.judy_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.judy_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.judy_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.judy_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.judy_main_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.judy_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.judy_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.judy_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.judy_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.judy_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.judy_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.language_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.language_de_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.language_en_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.language_es_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.language_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.language_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.language_id_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.language_it_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.language_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.language_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.language_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.language_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.language_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.languages_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.languages_1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.languages_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.languages_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.leaf_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.lips_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.lips_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.lips_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.lips_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.lips_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.lips_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.lips_check_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_0_5_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.location_progress_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(155);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(156);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(157);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(158);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(159);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(160);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(161);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(162);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(163);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(164);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.nick_body_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.nick_bottom1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.nick_bottom2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.nick_bottom3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.nick_bottom4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.nick_bottom5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.nick_bottom6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.nick_bottom7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.nick_bottom8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.nick_bottom9_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.nick_boutonniere1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(165);
}).prototype = p = new cjs.Sprite();



(lib.nick_boutonniere2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(166);
}).prototype = p = new cjs.Sprite();



(lib.nick_boutonniere3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(167);
}).prototype = p = new cjs.Sprite();



(lib.nick_boutonniere4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(168);
}).prototype = p = new cjs.Sprite();



(lib.nick_boutonniere5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(169);
}).prototype = p = new cjs.Sprite();



(lib.nick_boutonniere6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(170);
}).prototype = p = new cjs.Sprite();



(lib.nick_boutonniere7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(171);
}).prototype = p = new cjs.Sprite();



(lib.nick_boutonniere8_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(172);
}).prototype = p = new cjs.Sprite();



(lib.nick_boutonniere9_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(173);
}).prototype = p = new cjs.Sprite();



(lib.nick_bow10_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(174);
}).prototype = p = new cjs.Sprite();



(lib.nick_bow11_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(175);
}).prototype = p = new cjs.Sprite();



(lib.nick_bow12_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(176);
}).prototype = p = new cjs.Sprite();



(lib.nick_bow1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(177);
}).prototype = p = new cjs.Sprite();



(lib.nick_bow2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(178);
}).prototype = p = new cjs.Sprite();



(lib.nick_bow3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(179);
}).prototype = p = new cjs.Sprite();



(lib.nick_bow4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(180);
}).prototype = p = new cjs.Sprite();



(lib.nick_bow5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(181);
}).prototype = p = new cjs.Sprite();



(lib.nick_bow6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(182);
}).prototype = p = new cjs.Sprite();



(lib.nick_bow7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(183);
}).prototype = p = new cjs.Sprite();



(lib.nick_bow8_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(184);
}).prototype = p = new cjs.Sprite();



(lib.nick_bow9_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(185);
}).prototype = p = new cjs.Sprite();



(lib.nick_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(186);
}).prototype = p = new cjs.Sprite();



(lib.nick_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(187);
}).prototype = p = new cjs.Sprite();



(lib.nick_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(188);
}).prototype = p = new cjs.Sprite();



(lib.nick_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(189);
}).prototype = p = new cjs.Sprite();



(lib.nick_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(190);
}).prototype = p = new cjs.Sprite();



(lib.nick_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(191);
}).prototype = p = new cjs.Sprite();



(lib.nick_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(192);
}).prototype = p = new cjs.Sprite();



(lib.nick_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(193);
}).prototype = p = new cjs.Sprite();



(lib.nick_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(194);
}).prototype = p = new cjs.Sprite();



(lib.nick_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.nick_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(195);
}).prototype = p = new cjs.Sprite();



(lib.nick_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(196);
}).prototype = p = new cjs.Sprite();



(lib.nick_hands_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(197);
}).prototype = p = new cjs.Sprite();



(lib.nick_main_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.nick_top1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.nick_top2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.nick_top3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.nick_top4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.nick_top5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.nick_top6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.nick_top7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.nick_top8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.nick_top9_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.option_check_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.option_check_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(198);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(199);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(200);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(201);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(202);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(203);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(204);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(205);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(206);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(207);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.photoflash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.photoflash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.photoflash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(208);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.rainbow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(209);
}).prototype = p = new cjs.Sprite();



(lib.shadow_circle_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.shadows_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(210);
}).prototype = p = new cjs.Sprite();



(lib.shadows_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(211);
}).prototype = p = new cjs.Sprite();



(lib.shadows_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(212);
}).prototype = p = new cjs.Sprite();



(lib.shadows_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(213);
}).prototype = p = new cjs.Sprite();



(lib.shadows_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(214);
}).prototype = p = new cjs.Sprite();



(lib.shadows_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(215);
}).prototype = p = new cjs.Sprite();



(lib.shadows_check_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.shine_1_9_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(216);
}).prototype = p = new cjs.Sprite();



(lib.skip_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(217);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(218);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(219);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(220);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(221);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(222);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(223);
}).prototype = p = new cjs.Sprite();



(lib.tie_10_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(224);
}).prototype = p = new cjs.Sprite();



(lib.tie_11_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(225);
}).prototype = p = new cjs.Sprite();



(lib.tie_12_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(226);
}).prototype = p = new cjs.Sprite();



(lib.tie_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(227);
}).prototype = p = new cjs.Sprite();



(lib.tie_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(228);
}).prototype = p = new cjs.Sprite();



(lib.tie_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.tie_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(229);
}).prototype = p = new cjs.Sprite();



(lib.tie_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(230);
}).prototype = p = new cjs.Sprite();



(lib.tie_6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(231);
}).prototype = p = new cjs.Sprite();



(lib.tie_7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(232);
}).prototype = p = new cjs.Sprite();



(lib.tie_8_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(233);
}).prototype = p = new cjs.Sprite();



(lib.tie_9_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(234);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(235);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(236);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(237);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(238);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(239);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(240);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(241);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(242);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(243);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(244);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.track_move_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(245);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(246);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_0_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.wreath_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.wreath_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.wreath_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.wreath_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.wreath_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.wreath_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.wreath_7_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.wreath_8_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.wreath_9_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(247);
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


(lib.wreath_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wreath_9_1_img();
	this.instance.setTransform(-80,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwQD1ICoogIXbkIIGeFmIhuHeI5CEjg");
	this.shape.setTransform(-0.5,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.6,-57.8,208.2,112.9);
p.frameBounds = [rect];


(lib.wreath_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wreath_8_1_img();
	this.instance.setTransform(-80,-61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsiJvIjLpiIFJo8IMWiqIJeDNIEeI5Ih9GmI2qEHg");
	this.shape.setTransform(0,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.6,-74.4,201.3,146.1);
p.frameBounds = [rect];


(lib.wreath_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wreath_7_1_img();
	this.instance.setTransform(-80,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuyFPIA/pTIJRmcINLBBIGKHQIiDH2I1EE6g");
	this.shape.setTransform(3.2,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.4,-65.1,189.4,134.7);
p.frameBounds = [rect];


(lib.wreath_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wreath_6_1_img();
	this.instance.setTransform(-80,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsyIYIhym4IAwkeIJBm4IMbAnIG9FnIgsHpIlJDQIx+Cmg");
	this.shape.setTransform(2.5,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.8,-61.3,186.6,126.4);
p.frameBounds = [rect];


(lib.wreath_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wreath_5_1_img();
	this.instance.setTransform(-80,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuJD+IBDpsIQplzIKnHNIhEK+I3YE4g");
	this.shape.setTransform(1,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.7,-72.4,181.4,147.7);
p.frameBounds = [rect];


(lib.wreath_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wreath_4_1_img();
	this.instance.setTransform(-80,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvrCZIFFpeIQbi3IJ3IMIiYH5I5nD0g");
	this.shape.setTransform(-2.1,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.5,-64.5,200.9,127.5);
p.frameBounds = [rect];


(lib.wreath_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wreath_3_1_img();
	this.instance.setTransform(-80,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArVJ5IjFmuIFkqSIPhi5IHwHCIg4GvI0wGQg");
	this.shape.setTransform(-2.2,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.5,-65.6,184.6,128.3);
p.frameBounds = [rect];


(lib.wreath_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wreath_2_1_img();
	this.instance.setTransform(-80,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvYFZIEApQIKLlMILUBdIFSJpIjlC2I2QELg");
	this.shape.setTransform(0.9,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.6,-58.3,197,116.2);
p.frameBounds = [rect];


(lib.wreath_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wreath_1_1_img();
	this.instance.setTransform(-90,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvjIoIgwpfIIvqCIPZhBIIgHhIgaKhI8DFzg");
	this.shape.setTransform(-1.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105.8,-76.2,209,152.8);
p.frameBounds = [rect];


(lib.wardrobe_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_5_img();
	this.instance.setTransform(-200,-290);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-290,400,580);
p.frameBounds = [rect];


(lib.wardrobe_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_4_img();
	this.instance.setTransform(-200,-290);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-290,400,580);
p.frameBounds = [rect];


(lib.wardrobe_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_3_img();
	this.instance.setTransform(-230,-340);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-340,460,680);
p.frameBounds = [rect];


(lib.wardrobe_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_2_img();
	this.instance.setTransform(-230,-340);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-340,460,680);
p.frameBounds = [rect];


(lib.wardrobe_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_1_img();
	this.instance.setTransform(-210,-270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-270,420,540);
p.frameBounds = [rect];


(lib.wardrobe_1_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_0_img();
	this.instance.setTransform(-220,-270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-270,440,540);
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


(lib.tie_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tie_12_img();
	this.instance.setTransform(-70,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfHCIAAuCIY/AAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-45,160,90);
p.frameBounds = [rect];


(lib.tie_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tie_11_img();
	this.instance.setTransform(-70,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfHCIAAuCIY/AAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-49,160,98);
p.frameBounds = [rect];


(lib.tie_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tie_10_img();
	this.instance.setTransform(-70,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfHCIAAuCIY/AAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-47,160,94);
p.frameBounds = [rect];


(lib.tie_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tie_9_img();
	this.instance.setTransform(-70,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfHCIAAuCIY/AAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-45,160,90);
p.frameBounds = [rect];


(lib.tie_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tie_8_img();
	this.instance.setTransform(-70,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfHCIAAuCIY/AAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-45,160,90);
p.frameBounds = [rect];


(lib.tie_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tie_7_img();
	this.instance.setTransform(-70,-44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfHCIAAuCIY/AAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-45,160,90);
p.frameBounds = [rect];


(lib.tie_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tie_6_img();
	this.instance.setTransform(-70,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfHCIAAuCIY/AAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-45,160,90);
p.frameBounds = [rect];


(lib.tie_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tie_5_img();
	this.instance.setTransform(-70,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfHCIAAuCIY/AAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-45,160,90);
p.frameBounds = [rect];


(lib.tie_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tie_4_img();
	this.instance.setTransform(-70,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfHCIAAuCIY/AAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-45,160,90);
p.frameBounds = [rect];


(lib.tie_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tie_3_img();
	this.instance.setTransform(-65,-70,0.929,0.929);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfLuIAA3aIY/AAIAAXag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-75,160,150);
p.frameBounds = [rect];


(lib.tie_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tie_2_img();
	this.instance.setTransform(-70,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfHCIAAuCIY/AAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-45,160,90);
p.frameBounds = [rect];


(lib.tie_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tie_1_img();
	this.instance.setTransform(-70,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfHCIAAuCIY/AAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-45,160,90);
p.frameBounds = [rect];


(lib.shadows_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadows_check_1_1_img();
	this.instance.setTransform(-65,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-75,130,150);
p.frameBounds = [rect];


(lib.shadow_dressup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("EhduAu4MAAAhdvMC7eAAAMAAABdvg");
	this.shape.setTransform(400,300,1.35,1.033);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
p.frameBounds = [rect];


(lib.shadow_circle_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_circle_img();
	this.instance.setTransform(-140,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-50,280,100);
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


(lib.rainbow_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.rainbow_1_img();
	this.instance.setTransform(-350,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,-200,700,400);
p.frameBounds = [rect];


(lib.option_check_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.option_check_1_1_img();
	this.instance.setTransform(-180,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect];


(lib.option_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.option_check_0_1_img();
	this.instance.setTransform(-180,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect];


(lib.object_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Az3T4QoPoPgBrpQABroIPoPQIPoQLoAAQLoAAIQIQQIQIPAALoQAALpoQIPQoQIProABQrogBoPoPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect];


(lib.nick_top_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nick_top1_img();
	this.instance.setTransform(-71,-90);

	this.instance_1 = new lib.nick_top2_img();
	this.instance_1.setTransform(-69.5,-93);

	this.instance_2 = new lib.nick_top3_img();
	this.instance_2.setTransform(-70.4,-89);

	this.instance_3 = new lib.nick_top4_img();
	this.instance_3.setTransform(-70.5,-97.5);

	this.instance_4 = new lib.nick_top5_img();
	this.instance_4.setTransform(-73,-88.5);

	this.instance_5 = new lib.nick_top6_img();
	this.instance_5.setTransform(-70.4,-86.5);

	this.instance_6 = new lib.nick_top7_img();
	this.instance_6.setTransform(-68.9,-91);

	this.instance_7 = new lib.nick_top8_img();
	this.instance_7.setTransform(-70.5,-93.5);

	this.instance_8 = new lib.nick_top9_img();
	this.instance_8.setTransform(-70,-91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71,-90,142,180);
p.frameBounds = [rect, new cjs.Rectangle(-69.5,-93,140,173), new cjs.Rectangle(-70.4,-89,144,156), new cjs.Rectangle(-70.5,-97.5,140,177), new cjs.Rectangle(-73,-88.5,146,154), new cjs.Rectangle(-70.4,-86.5,141,163), new cjs.Rectangle(-68.9,-91,138,167), new cjs.Rectangle(-70.5,-93.5,140,162), new cjs.Rectangle(-70,-91,140,164), null];


(lib.nick_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nick_main_img();
	this.instance.setTransform(-200,-370);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-370,400,740);
p.frameBounds = [rect];


(lib.nick_hands_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.nick_hands_img();
	this.instance.setTransform(-61,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61,-39,122,78);
p.frameBounds = [rect];


(lib.nick_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nick_hair1_img();
	this.instance.setTransform(-69,-43);

	this.instance_1 = new lib.nick_hair2_img();
	this.instance_1.setTransform(-59.4,-46.5);

	this.instance_2 = new lib.nick_hair3_img();
	this.instance_2.setTransform(-78.9,-60.5);

	this.instance_3 = new lib.nick_hair4_img();
	this.instance_3.setTransform(-93.4,-47);

	this.instance_4 = new lib.nick_hair5_img();
	this.instance_4.setTransform(-77.5,-50.5);

	this.instance_5 = new lib.nick_hair6_img();
	this.instance_5.setTransform(-57.9,-57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69,-43,138,86);
p.frameBounds = [rect, new cjs.Rectangle(-59.4,-46.5,119,75), new cjs.Rectangle(-78.9,-60.5,147,93), new cjs.Rectangle(-93.4,-47,185,106), new cjs.Rectangle(-77.5,-50.5,151,91), new cjs.Rectangle(-57.9,-57,114,67), null];


(lib.nick_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nick_eyes1_img();
	this.instance.setTransform(-40.5,-14.5);

	this.instance_1 = new lib.nick_eyes2_img();
	this.instance_1.setTransform(-40.5,-14.5);

	this.instance_2 = new lib.nick_eyes3_img();
	this.instance_2.setTransform(-40.5,-14.5);

	this.instance_3 = new lib.nick_eyes4_img();
	this.instance_3.setTransform(-40.5,-14.5);

	this.instance_4 = new lib.nick_eyes5_img();
	this.instance_4.setTransform(-40.5,-14.5);

	this.instance_5 = new lib.nick_eyes6_img();
	this.instance_5.setTransform(-40.5,-14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.5,-14.5,81,29);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.nick_bow_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nick_bow1_img();
	this.instance.setTransform(-28,-16);

	this.instance_1 = new lib.nick_bow2_img();
	this.instance_1.setTransform(-28.5,-17);

	this.instance_2 = new lib.nick_bow3_img();
	this.instance_2.setTransform(-29,-18);

	this.instance_3 = new lib.nick_bow4_img();
	this.instance_3.setTransform(-30,-17);

	this.instance_4 = new lib.nick_bow5_img();
	this.instance_4.setTransform(-32.5,-19.5);

	this.instance_5 = new lib.nick_bow6_img();
	this.instance_5.setTransform(-33,-21.5);

	this.instance_6 = new lib.nick_bow7_img();
	this.instance_6.setTransform(-31,-20.5);

	this.instance_7 = new lib.nick_bow8_img();
	this.instance_7.setTransform(-34,-19.5);

	this.instance_8 = new lib.nick_bow9_img();
	this.instance_8.setTransform(-33.5,-20);

	this.instance_9 = new lib.nick_bow10_img();
	this.instance_9.setTransform(-30,-20.5);

	this.instance_10 = new lib.nick_bow11_img();
	this.instance_10.setTransform(-28,-22);

	this.instance_11 = new lib.nick_bow12_img();
	this.instance_11.setTransform(-29.5,-17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-16,56,32);
p.frameBounds = [rect, new cjs.Rectangle(-28.5,-17,56,34), new cjs.Rectangle(-29,-18,56,60), new cjs.Rectangle(-30,-17,60,33), new cjs.Rectangle(-32.5,-19.5,65,37), new cjs.Rectangle(-33,-21.5,68,40), new cjs.Rectangle(-31,-20.5,63,40), new cjs.Rectangle(-34,-19.5,70,40), new cjs.Rectangle(-33.5,-20,70,40), new cjs.Rectangle(-30,-20.5,62,41), new cjs.Rectangle(-28,-22,59,42), new cjs.Rectangle(-29.5,-17,63,34), null];


(lib.nick_boutonniere_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nick_boutonniere1_img();
	this.instance.setTransform(-16.5,-20.5);

	this.instance_1 = new lib.nick_boutonniere2_img();
	this.instance_1.setTransform(-19,-26);

	this.instance_2 = new lib.nick_boutonniere3_img();
	this.instance_2.setTransform(-16.9,-17.5);

	this.instance_3 = new lib.nick_boutonniere4_img();
	this.instance_3.setTransform(-21.9,-18.5);

	this.instance_4 = new lib.nick_boutonniere5_img();
	this.instance_4.setTransform(-18.5,-16);

	this.instance_5 = new lib.nick_boutonniere6_img();
	this.instance_5.setTransform(-18.9,-21.5);

	this.instance_6 = new lib.nick_boutonniere7_img();
	this.instance_6.setTransform(-18.9,-16.5);

	this.instance_7 = new lib.nick_boutonniere8_img();
	this.instance_7.setTransform(-18,-19);

	this.instance_8 = new lib.nick_boutonniere9_img();
	this.instance_8.setTransform(-13.5,-18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16.5,-20.5,33,41);
p.frameBounds = [rect, new cjs.Rectangle(-19,-26,35,50), new cjs.Rectangle(-16.9,-17.5,34,42), new cjs.Rectangle(-21.9,-18.5,40,48), new cjs.Rectangle(-18.5,-16,37,43), new cjs.Rectangle(-18.9,-21.5,40,52), new cjs.Rectangle(-18.9,-16.5,39,46), new cjs.Rectangle(-18,-19,36,52), new cjs.Rectangle(-13.5,-18.5,32,43), null];


(lib.nick_bottom_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nick_bottom1_img();
	this.instance.setTransform(-60,-112);

	this.instance_1 = new lib.nick_bottom2_img();
	this.instance_1.setTransform(-55.4,-105.5);

	this.instance_2 = new lib.nick_bottom3_img();
	this.instance_2.setTransform(-53.9,-100.5);

	this.instance_3 = new lib.nick_bottom4_img();
	this.instance_3.setTransform(-52.9,-103.5);

	this.instance_4 = new lib.nick_bottom5_img();
	this.instance_4.setTransform(-55.4,-107.5);

	this.instance_5 = new lib.nick_bottom6_img();
	this.instance_5.setTransform(-53.4,-108.5);

	this.instance_6 = new lib.nick_bottom7_img();
	this.instance_6.setTransform(-55.4,-109.5);

	this.instance_7 = new lib.nick_bottom8_img();
	this.instance_7.setTransform(-52.9,-115);

	this.instance_8 = new lib.nick_bottom9_img();
	this.instance_8.setTransform(-55.4,-100.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-112,120,224);
p.frameBounds = [rect, new cjs.Rectangle(-55.4,-105.5,111,215), new cjs.Rectangle(-53.9,-100.5,112,212), new cjs.Rectangle(-52.9,-103.5,113,212), new cjs.Rectangle(-55.4,-107.5,116,218), new cjs.Rectangle(-53.4,-108.5,111,217), new cjs.Rectangle(-55.4,-109.5,113,215), new cjs.Rectangle(-52.9,-115,111,223), new cjs.Rectangle(-55.4,-100.5,112,209), null];


(lib.nick_body_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nick_body_img();
	this.instance.setTransform(-148.5,-282);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-148.5,-282,297,564);
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


(lib.lips_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lips_check_1_1_img();
	this.instance.setTransform(-60,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-80,120,160);
p.frameBounds = [rect];


(lib.leaf_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.leaf_img();
	this.instance.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.judy_shadows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.judy_shadows1_img();
	this.instance.setTransform(-48.5,-41.5);

	this.instance_1 = new lib.judy_shadows2_img();
	this.instance_1.setTransform(-48.5,-41.5);

	this.instance_2 = new lib.judy_shadows3_img();
	this.instance_2.setTransform(-48.5,-41.5);

	this.instance_3 = new lib.judy_shadows4_img();
	this.instance_3.setTransform(-48.5,-41.5);

	this.instance_4 = new lib.judy_shadows5_img();
	this.instance_4.setTransform(-48.5,-41.5);

	this.instance_5 = new lib.judy_shadows6_img();
	this.instance_5.setTransform(-48.5,-41.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.5,-41.5,97,83);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.judy_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.judy_lips1_img();
	this.instance.setTransform(-48.5,-41.5);

	this.instance_1 = new lib.judy_lips2_img();
	this.instance_1.setTransform(-48.5,-41.5);

	this.instance_2 = new lib.judy_lips3_img();
	this.instance_2.setTransform(-48.5,-41.5);

	this.instance_3 = new lib.judy_lips4_img();
	this.instance_3.setTransform(-48.5,-41.5);

	this.instance_4 = new lib.judy_lips5_img();
	this.instance_4.setTransform(-48.5,-41.5);

	this.instance_5 = new lib.judy_lips6_img();
	this.instance_5.setTransform(-48.5,-41.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.5,-41.5,97,83);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.judy_hand_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.judy_hand_img();
	this.instance.setTransform(-9.5,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9.5,-35,19,70);
p.frameBounds = [rect];


(lib.judy_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.judy_hair1_img();
	this.instance.setTransform(-35,-36);

	this.instance_1 = new lib.judy_hair2_img();
	this.instance_1.setTransform(-76.5,2.5);

	this.instance_2 = new lib.judy_hair3_img();
	this.instance_2.setTransform(-69.9,-54);

	this.instance_3 = new lib.judy_hair4_img();
	this.instance_3.setTransform(-96.5,-5);

	this.instance_4 = new lib.judy_hair5_img();
	this.instance_4.setTransform(-38,22.5);

	this.instance_5 = new lib.judy_hair6_img();
	this.instance_5.setTransform(-105.9,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-36,70,72);
p.frameBounds = [rect, new cjs.Rectangle(-76.5,2.5,100,115), new cjs.Rectangle(-69.9,-54,111,95), new cjs.Rectangle(-96.5,-5,131,206), new cjs.Rectangle(-38,22.5,69,65), new cjs.Rectangle(-105.9,4.5,144,179), null];


(lib.judy_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.judy_fringe1_img();
	this.instance.setTransform(-65.5,-22.5);

	this.instance_1 = new lib.judy_fringe2_img();
	this.instance_1.setTransform(-80.9,-28.5);

	this.instance_2 = new lib.judy_fringe3_img();
	this.instance_2.setTransform(-81,-25.5);

	this.instance_3 = new lib.judy_fringe4_img();
	this.instance_3.setTransform(-82.5,-37.5);

	this.instance_4 = new lib.judy_fringe5_img();
	this.instance_4.setTransform(-82.9,-32.5);

	this.instance_5 = new lib.judy_fringe6_img();
	this.instance_5.setTransform(-79.4,-27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.5,-22.5,80,113);
p.frameBounds = [rect, new cjs.Rectangle(-80.9,-28.5,102,67), new cjs.Rectangle(-81,-25.5,102,70), new cjs.Rectangle(-82.5,-37.5,102,75), new cjs.Rectangle(-82.9,-32.5,102,68), new cjs.Rectangle(-79.4,-27.5,99,122), null];


(lib.judy_flower_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.judy_flower1_img();
	this.instance.setTransform(-50.5,-50.5);

	this.instance_1 = new lib.judy_flower2_img();
	this.instance_1.setTransform(-59.9,-56);

	this.instance_2 = new lib.judy_flower3_img();
	this.instance_2.setTransform(-65.4,-46.5);

	this.instance_3 = new lib.judy_flower4_img();
	this.instance_3.setTransform(-58.9,-46.5);

	this.instance_4 = new lib.judy_flower5_img();
	this.instance_4.setTransform(-54,-49.5);

	this.instance_5 = new lib.judy_flower6_img();
	this.instance_5.setTransform(-55.9,-46.5);

	this.instance_6 = new lib.judy_flower7_img();
	this.instance_6.setTransform(-54.9,-49);

	this.instance_7 = new lib.judy_flower8_img();
	this.instance_7.setTransform(-55,-57.5);

	this.instance_8 = new lib.judy_flower9_img();
	this.instance_8.setTransform(-51.5,-53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.5,-50.5,101,101);
p.frameBounds = [rect, new cjs.Rectangle(-59.9,-56,97,105), new cjs.Rectangle(-65.4,-46.5,119,101), new cjs.Rectangle(-58.9,-46.5,101,101), new cjs.Rectangle(-54,-49.5,98,98), new cjs.Rectangle(-55.9,-46.5,98,89), new cjs.Rectangle(-54.9,-49,101,97), new cjs.Rectangle(-55,-57.5,104,104), new cjs.Rectangle(-51.5,-53,96,99), null];


(lib.judy_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.judy_eyes1_img();
	this.instance.setTransform(-48.5,-41.5);

	this.instance_1 = new lib.judy_eyes2_img();
	this.instance_1.setTransform(-48.5,-41.5);

	this.instance_2 = new lib.judy_eyes3_img();
	this.instance_2.setTransform(-48.5,-41.5);

	this.instance_3 = new lib.judy_eyes4_img();
	this.instance_3.setTransform(-48.5,-41.5);

	this.instance_4 = new lib.judy_eyes5_img();
	this.instance_4.setTransform(-48.5,-41.5);

	this.instance_5 = new lib.judy_eyes6_img();
	this.instance_5.setTransform(-48.5,-41.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.5,-41.5,97,83);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.judy_eyebrows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.judy_eyebrows1_img();
	this.instance.setTransform(-48.5,-41.5);

	this.instance_1 = new lib.judy_eyebrows2_img();
	this.instance_1.setTransform(-48.5,-41.5);

	this.instance_2 = new lib.judy_eyebrows3_img();
	this.instance_2.setTransform(-48.5,-41.5);

	this.instance_3 = new lib.judy_eyebrows4_img();
	this.instance_3.setTransform(-48.5,-41.5);

	this.instance_4 = new lib.judy_eyebrows5_img();
	this.instance_4.setTransform(-48.5,-41.5);

	this.instance_5 = new lib.judy_eyebrows6_img();
	this.instance_5.setTransform(-48.5,-41.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.5,-41.5,97,83);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.judy_earrings_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.judy_earrings1_img();
	this.instance.setTransform(-83.5,-23);

	this.instance_1 = new lib.judy_earrings2_img();
	this.instance_1.setTransform(-87.4,-21);

	this.instance_2 = new lib.judy_earrings3_img();
	this.instance_2.setTransform(-94.4,-19.5);

	this.instance_3 = new lib.judy_earrings4_img();
	this.instance_3.setTransform(-92.9,-19.5);

	this.instance_4 = new lib.judy_earrings5_img();
	this.instance_4.setTransform(-101.9,-16);

	this.instance_5 = new lib.judy_earrings6_img();
	this.instance_5.setTransform(-90.9,-20.5);

	this.instance_6 = new lib.judy_earrings7_img();
	this.instance_6.setTransform(-93.4,-18);

	this.instance_7 = new lib.judy_earrings8_img();
	this.instance_7.setTransform(-83.9,-22);

	this.instance_8 = new lib.judy_earrings9_img();
	this.instance_8.setTransform(-95.9,-22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.5,-23,167,46);
p.frameBounds = [rect, new cjs.Rectangle(-87.4,-21,170,33), new cjs.Rectangle(-94.4,-19.5,184,50), new cjs.Rectangle(-92.9,-19.5,182,44), new cjs.Rectangle(-101.9,-16,199,48), new cjs.Rectangle(-90.9,-20.5,177,32), new cjs.Rectangle(-93.4,-18,184,61), new cjs.Rectangle(-83.9,-22,165,30), new cjs.Rectangle(-95.9,-22.5,186,37), null];


(lib.judy_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.judy_dress1_img();
	this.instance.setTransform(-123.5,-136.5);

	this.instance_1 = new lib.judy_dress2_img();
	this.instance_1.setTransform(-113.4,-135.5);

	this.instance_2 = new lib.judy_dress3_img();
	this.instance_2.setTransform(-105.9,-135);

	this.instance_3 = new lib.judy_dress4_img();
	this.instance_3.setTransform(-115.9,-135);

	this.instance_4 = new lib.judy_dress5_img();
	this.instance_4.setTransform(-122.4,-135);

	this.instance_5 = new lib.judy_dress6_img();
	this.instance_5.setTransform(-92.9,-136);

	this.instance_6 = new lib.judy_dress7_img();
	this.instance_6.setTransform(-111.9,-138.5);

	this.instance_7 = new lib.judy_dress8_img();
	this.instance_7.setTransform(-119.9,-135);

	this.instance_8 = new lib.judy_dress9_img();
	this.instance_8.setTransform(-112.4,-136);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.5,-136.5,247,273);
p.frameBounds = [rect, new cjs.Rectangle(-113.4,-135.5,233,262), new cjs.Rectangle(-105.9,-135,214,261), new cjs.Rectangle(-115.9,-135,245,269), new cjs.Rectangle(-122.4,-135,240,259), new cjs.Rectangle(-92.9,-136,198,269), new cjs.Rectangle(-111.9,-138.5,235,270), new cjs.Rectangle(-119.9,-135,254,268), new cjs.Rectangle(-112.4,-136,237,273), null];


(lib.judy_crown_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.judy_crown1_img();
	this.instance.setTransform(-53,-39.5);

	this.instance_1 = new lib.judy_crown2_img();
	this.instance_1.setTransform(-62.4,-47);

	this.instance_2 = new lib.judy_crown3_img();
	this.instance_2.setTransform(-64.9,-43.5);

	this.instance_3 = new lib.judy_crown4_img();
	this.instance_3.setTransform(-66.5,-42);

	this.instance_4 = new lib.judy_crown5_img();
	this.instance_4.setTransform(-62.4,-40.5);

	this.instance_5 = new lib.judy_crown6_img();
	this.instance_5.setTransform(-57.4,-40.5);

	this.instance_6 = new lib.judy_crown7_img();
	this.instance_6.setTransform(-67.4,-53);

	this.instance_7 = new lib.judy_crown8_img();
	this.instance_7.setTransform(-63,-47.5);

	this.instance_8 = new lib.judy_crown9_img();
	this.instance_8.setTransform(-58.4,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53,-39.5,106,79);
p.frameBounds = [rect, new cjs.Rectangle(-62.4,-47,128,81), new cjs.Rectangle(-64.9,-43.5,126,92), new cjs.Rectangle(-66.5,-42,129,80), new cjs.Rectangle(-62.4,-40.5,117,92), new cjs.Rectangle(-57.4,-40.5,108,76), new cjs.Rectangle(-67.4,-53,134,95), new cjs.Rectangle(-63,-47.5,117,90), new cjs.Rectangle(-58.4,-40,119,65), null];


(lib.judy_body_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.judy_body_img();
	this.instance.setTransform(-88.5,-244);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88.5,-244,177,488);
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


(lib.grass_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.grass_img();
	this.instance.setTransform(-100,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-160,200,180);
p.frameBounds = [rect];


(lib.glare_sun_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.glare_sun_img();
	this.instance.setTransform(-400,-270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-270,800,540);
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


(lib.eyes_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.eyes_check_1_1_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyebrows_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.eyebrows_check_1_1_img();
	this.instance.setTransform(-70,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-80,140,160);
p.frameBounds = [rect];


(lib.earrings_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_9_1_img();
	this.instance.setTransform(-106,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtjJXIlXk4IgXnvIHamGIZWAAIFzGDIgZIKImPEgg");
	this.shape.setTransform(3.5,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-61.9,246.9,120);
p.frameBounds = [rect];


(lib.earrings_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_8_1_img();
	this.instance.setTransform(-98,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au5HfIj2qHIGNk3IaIAAIFKGCIjiI8g");
	this.shape.setTransform(0.6,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119.4,-46.9,240.1,96);
p.frameBounds = [rect];


(lib.earrings_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_7_1_img();
	this.instance.setTransform(-94,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsULPIlQplIJbs4IRnAAIIHMoIk0J1g");
	this.shape.setTransform(-0.9,-2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113.4,-73.9,225.2,144);
p.frameBounds = [rect];


(lib.earrings_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_6_1_img();
	this.instance.setTransform(-81,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsSHfIjhoGIElm4IXdAAIDmGKIjbI0g");
	this.shape.setTransform(-2,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.3,-46.9,202.6,96);
p.frameBounds = [rect];


(lib.earrings_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_5_1_img();
	this.instance.setTransform(-97,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AutJnIj6qSIMMo7IPEAAIJ/KRIjaI8g");
	this.shape.setTransform(1.1,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.1,-62,238.5,123);
p.frameBounds = [rect];


(lib.earrings_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_4_1_img();
	this.instance.setTransform(-87,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApNLQIm5n7II6ukIQJAAIHKM+IlkJhg");
	this.shape.setTransform(-1.6,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.8,-73,206.4,144.1);
p.frameBounds = [rect];


(lib.earrings_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_3_1_img();
	this.instance.setTransform(-84,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtmKnIicsFIKvpIIKjAAIKzKhIjUKsg");
	this.shape.setTransform(1.7,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101,-68.9,205.6,136);
p.frameBounds = [rect];


(lib.earrings_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_2_1_img();
	this.instance.setTransform(-98,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au7HuIlJovIGFmtIbfAAIGlIXIl/HFg");
	this.shape.setTransform(0.4,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128.1,-49.9,257.1,99);
p.frameBounds = [rect];


(lib.earrings_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earrings_1_1_img();
	this.instance.setTransform(-73,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsjKJIi1qfIF9pyISqAAIGKLMIi7JFg");
	this.shape.setTransform(1.2,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.3,-63.9,197.1,130);
p.frameBounds = [rect];


(lib.decor_location_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_location_1_1_img();
	this.instance.setTransform(-180,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-220,360,440);
p.frameBounds = [rect];


(lib.current_location_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_1_1_img();
	this.instance.setTransform(-200,-230);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-230,400,460);
p.frameBounds = [rect];


(lib.closet2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.closet2_2_img();
	this.instance.setTransform(-45,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-27.5,90,55);
p.frameBounds = [rect];


(lib.closet1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.closet1_4_img();
	this.instance.setTransform(-39.5,-30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.5,-30.5,79,61);
p.frameBounds = [rect];


(lib.boutonniere_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.boutonniere_9_2_img();
	this.instance.setTransform(-55.5,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmbMjIjxuEIIsrLIJLBsICiJxIkzN8g");
	this.shape.setTransform(-2.4,-5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.8,-86.5,130.7,162.8);
p.frameBounds = [rect];


(lib.boutonniere_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.boutonniere_8_2_img();
	this.instance.setTransform(-58,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqQJHIgVtSID/pPIQvg3IAcMdInQNpImrCeg");
	this.shape.setTransform(0.5,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.3,-89.8,135.6,183);
p.frameBounds = [rect];


(lib.boutonniere_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.boutonniere_7_2_img();
	this.instance.setTransform(-66,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqWJoIhwucIHcowIM7AzID2NSInWMBIpVBCg");
	this.shape.setTransform(0.8,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.8,-87.7,155.1,173.8);
p.frameBounds = [rect];


(lib.boutonniere_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.boutonniere_6_2_img();
	this.instance.setTransform(-59,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmdOSIkts1IBAl4IJRp2IJSIeICyHLImCM6g");
	this.shape.setTransform(-0.8,-10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.3,-101.7,143.1,182.8);
p.frameBounds = [rect];


(lib.boutonniere_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.boutonniere_5_2_img();
	this.instance.setTransform(-67,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsNMsIA7wAIFOnVIQ5jsIBYP6IsTMxg");
	this.shape.setTransform(3.1,-3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-94.8,156.4,183.6);
p.frameBounds = [rect];


(lib.boutonniere_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.boutonniere_4_2_img();
	this.instance.setTransform(-65.5,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ar4BhIBGqgIQck1IGPIVIhEJqIoQJnImwADg");
	this.shape.setTransform(1.6,-2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.5,-91.1,152.4,177);
p.frameBounds = [rect];


(lib.boutonniere_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.boutonniere_3_2_img();
	this.instance.setTransform(-59.5,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmhNMIlUyEIGRoYIRaHWIlfTLg");
	this.shape.setTransform(2,-9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.9,-94.2,151.8,169.8);
p.frameBounds = [rect];


(lib.boutonniere_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.boutonniere_2_2_img();
	this.instance.setTransform(-57.5,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmSMyIkLtMIBhllIHcmoIC8gKIJCJkIjhP/g");
	this.shape.setTransform(2.1,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.9,-83.6,134.1,163.6);
p.frameBounds = [rect];


(lib.boutonniere_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.boutonniere_1_2_img();
	this.instance.setTransform(-60,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArLLMIDxtiII0qJIF6gvID4FpIhLFhIpGMXIqhC8g");
	this.shape.setTransform(0.1,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.6,-83.9,143.4,169.5);
p.frameBounds = [rect];


(lib.bouquet_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bouquet_9_1_img();
	this.instance.setTransform(-73,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVG7IHVxbIIJi0IKeCRICvE/IimLJIy3IQg");
	this.shape.setTransform(0.2,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.6,-84.7,183.7,170.8);
p.frameBounds = [rect];


(lib.bouquet_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bouquet_8_1_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsZKZIg/l6IIRxOILFBSIG8F8IAfKNIvjG+InJBGg");
	this.shape.setTransform(4.4,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.3,-81.4,171.5,163.3);
p.frameBounds = [rect];


(lib.bouquet_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bouquet_7_1_img();
	this.instance.setTransform(-79,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au3EoILXynISYFUIi5TvI1TC8g");
	this.shape.setTransform(2.4,-3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.8,-93.3,190.6,179.4);
p.frameBounds = [rect];


(lib.bouquet_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bouquet_6_1_img();
	this.instance.setTransform(-83,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("As3MFIh8nIIGGtNILZkrIMIKRIh1MQIpNDWg");
	this.shape.setTransform(2.2,-2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.6,-85,189.8,165.6);
p.frameBounds = [rect];


(lib.bouquet_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bouquet_5_1_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtnDRIHNrkID3kAIJ+APIGNHUIgsJlIjyDdIvyECg");
	this.shape.setTransform(-1.1,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88.4,-77.1,174.6,157.7);
p.frameBounds = [rect];


(lib.bouquet_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bouquet_4_1_img();
	this.instance.setTransform(-76,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuZBtIG3rmIKSjVILqE6IhgQQIyaFTg");
	this.shape.setTransform(-0.8,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93,-86,184.4,169.6);
p.frameBounds = [rect];


(lib.bouquet_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bouquet_3_1_img();
	this.instance.setTransform(-89,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvoD4ILZwJIJLgyIJaF2IBTJbImXG3I0ED/g");
	this.shape.setTransform(0.5,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.6,-80.5,200.3,167.3);
p.frameBounds = [rect];


(lib.bouquet_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bouquet_2_1_img();
	this.instance.setTransform(73,-80,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtsAJIB9qJIJCkyIHbA+II/YCImHElg");
	this.shape.setTransform(-2.1,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.8,-93,175.5,189.6);
p.frameBounds = [rect];


(lib.bouquet_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bouquet_1_1_img();
	this.instance.setTransform(-75,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqSK7IjenjIEat7IKyiXIMVHVIhxOaInWEGg");
	this.shape.setTransform(1.9,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.2,-83.9,176.3,165.6);
p.frameBounds = [rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-195,-165);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-195,-165);

	this.instance_2 = new lib.title_es_img();
	this.instance_2.setTransform(-195,-165);

	this.instance_3 = new lib.title_pt_img();
	this.instance_3.setTransform(-195,-165);

	this.instance_4 = new lib.title_tr_img();
	this.instance_4.setTransform(-195,-165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(2).to({_off:true},1).wait(3).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-165,390,330);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_pointer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pointer_img();
	this.instance.setTransform(-112,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112,-59,120,120);
p.frameBounds = [rect];


(lib.background_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_7_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_5_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_4_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
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


(lib.background_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_1_img();
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

	this.instance_5 = new lib.copyright_title_ja_img();
	this.instance_5.setTransform(-250,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(2).to({_off:true},1).wait(4).to({_off:false},0).wait(4));

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


(lib.shine_3_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shine_1_9_img();
	this.instance.setTransform(-20,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
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


(lib.photoflash_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AvnHzIAAvmIfOAAIAAPmg");
	this.shape.setTransform(400,150,4,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,300);
p.frameBounds = [rect];


(lib.photoflash_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		try
		{
			app.addSoundFunc("photo_sound", 0.3);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// animation
	this.instance = new lib.photoflash_1_img();
	this.instance.setTransform(-94,-87,0.72,0.72);

	this.instance_1 = new lib.photoflash_2_img();
	this.instance_1.setTransform(-93,-92,0.72,0.72);

	this.instance_2 = new lib.photoflash_3_img();
	this.instance_2.setTransform(-95,-90,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).to({state:[]},2).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94,-87,187.9,174.3);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-93,-92,194.4,183.6), rect, rect=new cjs.Rectangle(-95,-90,190.8,180), rect, rect=new cjs.Rectangle(-93,-92,194.4,183.6), rect, rect=new cjs.Rectangle(-94,-87,187.9,174.3), rect, rect=null, rect, rect, rect, rect];


(lib.photoflash_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300,1.167,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,0,1400,600);
p.frameBounds = [rect];


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
	this.instance.setTransform(-32,-32);

	this.instance_1 = new lib.gravity_explosion_2_img();
	this.instance_1.setTransform(-18,-18);

	this.instance_2 = new lib.gravity_explosion_3_img();
	this.instance_2.setTransform(-18,-18);

	this.instance_3 = new lib.gravity_explosion_4_img();
	this.instance_3.setTransform(-24,-24,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-32,64,64);
p.frameBounds = [rect, rect=new cjs.Rectangle(-18,-18,36,36), rect, rect=new cjs.Rectangle(-24,-24,48,48), rect];


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


(lib.blinking_light_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_1_3_img();
	this.instance.setTransform(-24,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
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


(lib.nav_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_4_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
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
	this.instance.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.nav_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_4_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
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
	this.instance.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
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


(lib.wreath_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,-0.1,0.52,0.52,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-26,52,52);
p.frameBounds = [rect];


(lib.wardrobe_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_5_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.shadow_circle_mc();
	this.instance_1.setTransform(20,240);
	this.instance_1.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-290,400,580);
p.frameBounds = [rect];


(lib.wardrobe_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.shadow_circle_mc();
	this.instance_1.setTransform(15,240);
	this.instance_1.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-290,400,580);
p.frameBounds = [rect];


(lib.wardrobe_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-340,460,680);
p.frameBounds = [rect];


(lib.wardrobe_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-340,460,680);
p.frameBounds = [rect];


(lib.wardrobe_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.shadow_circle_mc();
	this.instance_1.setTransform(0,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-270,420,620);
p.frameBounds = [rect];


(lib.wardrobe_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.shadow_circle_mc();
	this.instance_1.setTransform(0,280);
	this.instance_1.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-270,440,600);
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
p.nominalBounds = rect = new cjs.Rectangle(-195,-165,390,330);
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


(lib.tie_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,-0.1,0.52,0.52,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-26,52,52);
p.frameBounds = [rect];


(lib.shadows_check_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.shadows_check_0_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},19).to({alpha:0.102},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-75,130,150);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.shadows_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.shadows_check_0_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.shadows_check_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-75,130,150);
p.frameBounds = [rect, rect];


(lib.shadows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_6_1_img();
	this.instance.setTransform(-55,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.shadows_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoRISQjbjcAAk2QAAk1DbjcQDcjcE1ABQE2gBDcDcQDcDcgBE1QABE2jcDcQjcDbk2AAQk1AAjcjbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.shadows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_5_1_img();
	this.instance.setTransform(-55,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.shadows_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoRISQjbjcAAk2QAAk1DbjcQDcjcE1ABQE2gBDcDcQDcDcgBE1QABE2jcDcQjcDbk2AAQk1AAjcjbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.shadows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_4_1_img();
	this.instance.setTransform(-55,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.shadows_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoRISQjbjcAAk2QAAk1DbjcQDcjcE1ABQE2gBDcDcQDcDcgBE1QABE2jcDcQjcDbk2AAQk1AAjcjbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.shadows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_3_1_img();
	this.instance.setTransform(-55,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.shadows_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoRISQjbjcAAk2QAAk1DbjcQDcjcE1ABQE2gBDcDcQDcDcgBE1QABE2jcDcQjcDbk2AAQk1AAjcjbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.shadows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_2_1_img();
	this.instance.setTransform(-55,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.shadows_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoRISQjbjcAAk2QAAk1DbjcQDcjcE1ABQE2gBDcDcQDcDcgBE1QABE2jcDcQjcDbk2AAQk1AAjcjbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.shadows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_1_1_img();
	this.instance.setTransform(-55,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.shadows_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoRISQjbjcAAk2QAAk1DbjcQDcjcE1ABQE2gBDcDcQDcDcgBE1QABE2jcDcQjcDbk2AAQk1AAjcjbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.shadows_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,-0.1,0.52,0.52,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-26,52,52);
p.frameBounds = [rect];


(lib.rainbow_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.rainbow_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.5},39).to({alpha:1},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,-200,700,400);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.option_check_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.option_check_2_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},39).to({alpha:0.102},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.option_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.option_check_1_1_mc();

	this.instance_1 = new lib.option_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect, rect];


(lib.nick_top9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.nick_top9_img();
	this.instance.setTransform(-59,-97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet2_2_mc();
	this.instance_1.setTransform(7,-97.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59,-125.4,140,191.9);
p.frameBounds = [rect];


(lib.nick_top8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.nick_top8_img();
	this.instance.setTransform(-58,-97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet2_2_mc();
	this.instance_1.setTransform(7,-97.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58,-125.4,140,189.9);
p.frameBounds = [rect];


(lib.nick_top7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.nick_top7_img();
	this.instance.setTransform(-57,-96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet2_2_mc();
	this.instance_1.setTransform(7,-97.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57,-125.4,138,195.9);
p.frameBounds = [rect];


(lib.nick_top6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.nick_top6_img();
	this.instance.setTransform(-58,-94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet2_2_mc();
	this.instance_1.setTransform(7,-97.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58,-125.4,141,193.9);
p.frameBounds = [rect];


(lib.nick_top5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.nick_top5_img();
	this.instance.setTransform(-60,-98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet2_2_mc();
	this.instance_1.setTransform(7,-97.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-125.4,146,180.9);
p.frameBounds = [rect];


(lib.nick_top4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.nick_top4_img();
	this.instance.setTransform(-58,-107.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet2_2_mc();
	this.instance_1.setTransform(7,-97.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58,-125.4,140,194.9);
p.frameBounds = [rect];


(lib.nick_top3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.nick_top3_img();
	this.instance.setTransform(-60,-98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet2_2_mc();
	this.instance_1.setTransform(7,-97.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-125.4,144,182.9);
p.frameBounds = [rect];


(lib.nick_top2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.nick_top2_img();
	this.instance.setTransform(-58,-100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet2_2_mc();
	this.instance_1.setTransform(7,-97.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58,-125.4,140,197.9);
p.frameBounds = [rect];


(lib.nick_top1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.nick_top1_img();
	this.instance.setTransform(-57,-92.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet2_2_mc();
	this.instance_1.setTransform(7,-97.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57,-125.4,142,212.9);
p.frameBounds = [rect];


(lib.nick_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hair
	this.hair = new lib.nick_hair_all_mc();
	this.hair.setTransform(40.5,-194.5);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

	// eyes
	this.eyes = new lib.nick_eyes_all_mc();
	this.eyes.setTransform(42,-140.5);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// boutonniere
	this.boutonniere = new lib.nick_boutonniere_all_mc();
	this.boutonniere.setTransform(72,-2);

	this.timeline.addTween(cjs.Tween.get(this.boutonniere).wait(1));

	// tie
	this.tie = new lib.nick_bow_all_mc();
	this.tie.setTransform(38,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.tie).wait(1));

	// top
	this.top = new lib.nick_top_all_mc();
	this.top.setTransform(45,32);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

	// body
	this.instance = new lib.nick_hands_mc();
	this.instance.setTransform(38.5,88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bottom
	this.bottom = new lib.nick_bottom_all_mc();
	this.bottom.setTransform(35,155.5);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1));

	// body
	this.instance_1 = new lib.nick_body_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-148.5,-282,297,564);
p.frameBounds = [rect];


(lib.nick_bottom9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.nick_bottom9_img();
	this.instance.setTransform(-52,-98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet2_2_mc();
	this.instance_1.setTransform(7,-97.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52,-125.4,112,235.9);
p.frameBounds = [rect];


(lib.nick_bottom8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.nick_bottom8_img();
	this.instance.setTransform(-52,-98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet2_2_mc();
	this.instance_1.setTransform(7,-97.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52,-125.4,111,249.9);
p.frameBounds = [rect];


(lib.nick_bottom7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.nick_bottom7_img();
	this.instance.setTransform(-54,-98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet2_2_mc();
	this.instance_1.setTransform(7,-97.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-125.4,113,241.9);
p.frameBounds = [rect];


(lib.nick_bottom6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.nick_bottom6_img();
	this.instance.setTransform(-52,-98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet2_2_mc();
	this.instance_1.setTransform(7,-97.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52,-125.4,111,243.9);
p.frameBounds = [rect];


(lib.nick_bottom5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.nick_bottom5_img();
	this.instance.setTransform(-54,-98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet2_2_mc();
	this.instance_1.setTransform(7,-97.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-125.4,116,244.9);
p.frameBounds = [rect];


(lib.nick_bottom4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.nick_bottom4_img();
	this.instance.setTransform(-52,-98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet2_2_mc();
	this.instance_1.setTransform(7,-97.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52,-125.4,113,238.9);
p.frameBounds = [rect];


(lib.nick_bottom3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.nick_bottom3_img();
	this.instance.setTransform(-52,-98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet2_2_mc();
	this.instance_1.setTransform(7,-97.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52,-125.4,112,238.9);
p.frameBounds = [rect];


(lib.nick_bottom2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.nick_bottom2_img();
	this.instance.setTransform(-56,-98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet2_2_mc();
	this.instance_1.setTransform(7,-97.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56,-125.4,111,241.9);
p.frameBounds = [rect];


(lib.nick_bottom1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.nick_bottom1_img();
	this.instance.setTransform(-60,-98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet2_2_mc();
	this.instance_1.setTransform(7,-97.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-125.4,120,250.9);
p.frameBounds = [rect];


(lib.location_progress_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.location_progress_1_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},39).to({alpha:0.602},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.lips_check_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.lips_check_0_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},19).to({alpha:0.102},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-80,120,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.lips_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.lips_check_0_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.lips_check_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-80,120,160);
p.frameBounds = [rect, rect];


(lib.lips_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_6_1_img();
	this.instance.setTransform(-40,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.lips_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK8IAA13IODAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-80,120,160);
p.frameBounds = [rect];


(lib.lips_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_5_1_img();
	this.instance.setTransform(-40,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.lips_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK8IAA13IODAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-80,120,160);
p.frameBounds = [rect];


(lib.lips_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_4_1_img();
	this.instance.setTransform(-40,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.lips_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK8IAA13IODAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-80,120,160);
p.frameBounds = [rect];


(lib.lips_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_3_1_img();
	this.instance.setTransform(-40,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.lips_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK8IAA13IODAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-80,120,160);
p.frameBounds = [rect];


(lib.lips_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_2_1_img();
	this.instance.setTransform(-40,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.lips_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK8IAA13IODAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-80,120,160);
p.frameBounds = [rect];


(lib.lips_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_1_1_img();
	this.instance.setTransform(-40,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.lips_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK8IAA13IODAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-80,120,160);
p.frameBounds = [rect];


(lib.judy_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wreath
	this.wreath = new lib.judy_crown_all_mc();
	this.wreath.setTransform(3.9,-122);

	this.timeline.addTween(cjs.Tween.get(this.wreath).wait(1));

	// earrings
	this.earrings = new lib.judy_earrings_all_mc();
	this.earrings.setTransform(14,-203);

	this.timeline.addTween(cjs.Tween.get(this.earrings).wait(1));

	// fringe
	this.fringe = new lib.judy_fringe_all_mc();
	this.fringe.setTransform(33.5,-122.5);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// dress
	this.dress = new lib.judy_dress_all_mc();
	this.dress.setTransform(-18.1,105.5);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// lips
	this.lips = new lib.judy_lips_all_mc();
	this.lips.setTransform(-6,-83.5);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// eyebrows
	this.eyebrows = new lib.judy_eyebrows_all_mc();
	this.eyebrows.setTransform(-6,-83.5);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).wait(1));

	// eyes
	this.eyes = new lib.judy_eyes_all_mc();
	this.eyes.setTransform(-6,-83.5);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// shadows
	this.shadows = new lib.judy_shadows_all_mc();
	this.shadows.setTransform(-6,-83.5);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// body
	this.instance = new lib.judy_body_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bouquet
	this.bouquet = new lib.judy_flower_all_mc();
	this.bouquet.setTransform(47,21.5);

	this.timeline.addTween(cjs.Tween.get(this.bouquet).wait(1));

	// body
	this.instance_1 = new lib.judy_hand_mc();
	this.instance_1.setTransform(10,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// hair
	this.hair = new lib.judy_hair_all_mc();
	this.hair.setTransform(33.5,-122.5);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.6,-244,247,488);
p.frameBounds = [rect];


(lib.judy_dress9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.judy_dress9_img();
	this.instance.setTransform(-115.5,-118.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_mc();
	this.instance_1.setTransform(9.7,-122);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115.5,-152.5,237,307.1);
p.frameBounds = [rect];


(lib.judy_dress8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.judy_dress8_img();
	this.instance.setTransform(-121.5,-120.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_mc();
	this.instance_1.setTransform(9.7,-122);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121.5,-152.5,254,300.1);
p.frameBounds = [rect];


(lib.judy_dress7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.judy_dress7_img();
	this.instance.setTransform(-112.5,-120.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_mc();
	this.instance_1.setTransform(9.7,-122);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112.5,-152.5,235,302.1);
p.frameBounds = [rect];


(lib.judy_dress6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.judy_dress6_img();
	this.instance.setTransform(-94.5,-117.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_mc();
	this.instance_1.setTransform(9.7,-122);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.5,-152.5,198,304.1);
p.frameBounds = [rect];


(lib.judy_dress5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.judy_dress5_img();
	this.instance.setTransform(-122.5,-116.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_mc();
	this.instance_1.setTransform(9.7,-122);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.5,-152.5,240,295.1);
p.frameBounds = [rect];


(lib.judy_dress4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.judy_dress4_img();
	this.instance.setTransform(-117.5,-117.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_mc();
	this.instance_1.setTransform(9.7,-122);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117.5,-152.5,245,304.1);
p.frameBounds = [rect];


(lib.judy_dress3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.judy_dress3_img();
	this.instance.setTransform(-107.5,-118.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_mc();
	this.instance_1.setTransform(9.7,-122);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.5,-152.5,214,295.1);
p.frameBounds = [rect];


(lib.judy_dress2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.judy_dress2_img();
	this.instance.setTransform(-114.5,-118.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_mc();
	this.instance_1.setTransform(9.7,-122);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.5,-152.5,233,296.1);
p.frameBounds = [rect];


(lib.judy_dress1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.judy_dress1_img();
	this.instance.setTransform(-123.5,-120.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.closet1_4_mc();
	this.instance_1.setTransform(9.7,-122);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.5,-152.5,247,305.1);
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


(lib.hairstyle_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_6_2_img();
	this.instance.setTransform(-170,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxrRrQnTnVgBqWQABqWHTnUQHWnVKVAAQKWAAHVHVQHUHUABKWQgBKWnUHVQnVHUqWABQqVgBnWnUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect];


(lib.hairstyle_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_6_1_img();
	this.instance.setTransform(-170,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxrRrQnTnVgBqWQABqWHTnUQHWnVKVAAQKWAAHVHVQHUHUABKWQgBKWnUHVQnVHUqWABQqVgBnWnUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect];


(lib.hairstyle_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_5_2_img();
	this.instance.setTransform(-170,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxrRrQnTnVgBqWQABqWHTnUQHWnVKVAAQKWAAHVHVQHUHUABKWQgBKWnUHVQnVHUqWABQqVgBnWnUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect];


(lib.hairstyle_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_5_1_img();
	this.instance.setTransform(-170,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxrRrQnTnVgBqWQABqWHTnUQHWnVKVAAQKWAAHVHVQHUHUABKWQgBKWnUHVQnVHUqWABQqVgBnWnUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect];


(lib.hairstyle_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_4_2_img();
	this.instance.setTransform(-170,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxrRrQnTnVgBqWQABqWHTnUQHWnVKVAAQKWAAHVHVQHUHUABKWQgBKWnUHVQnVHUqWABQqVgBnWnUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect];


(lib.hairstyle_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_4_1_img();
	this.instance.setTransform(-170,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxrRrQnTnVgBqWQABqWHTnUQHWnVKVAAQKWAAHVHVQHUHUABKWQgBKWnUHVQnVHUqWABQqVgBnWnUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect];


(lib.hairstyle_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_3_2_img();
	this.instance.setTransform(-170,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxrRrQnTnVgBqWQABqWHTnUQHWnVKVAAQKWAAHVHVQHUHUABKWQgBKWnUHVQnVHUqWABQqVgBnWnUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect];


(lib.hairstyle_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_3_1_img();
	this.instance.setTransform(-170,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxrRrQnTnVgBqWQABqWHTnUQHWnVKVAAQKWAAHVHVQHUHUABKWQgBKWnUHVQnVHUqWABQqVgBnWnUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect];


(lib.hairstyle_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_2_2_img();
	this.instance.setTransform(-170,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxrRrQnTnVgBqWQABqWHTnUQHWnVKVAAQKWAAHVHVQHUHUABKWQgBKWnUHVQnVHUqWABQqVgBnWnUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect];


(lib.hairstyle_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_2_1_img();
	this.instance.setTransform(-170,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxrRrQnTnVgBqWQABqWHTnUQHWnVKVAAQKWAAHVHVQHUHUABKWQgBKWnUHVQnVHUqWABQqVgBnWnUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect];


(lib.hairstyle_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_1_2_img();
	this.instance.setTransform(-170,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxrRrQnTnVgBqWQABqWHTnUQHWnVKVAAQKWAAHVHVQHUHUABKWQgBKWnUHVQnVHUqWABQqVgBnWnUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect];


(lib.hairstyle_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_1_1_img();
	this.instance.setTransform(-170,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.option_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxrRrQnTnVgBqWQABqWHTnUQHWnVKVAAQKWAAHVHVQHUHUABKWQgBKWnUHVQnVHUqWABQqVgBnWnUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect];


(lib.hair_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,-0.1,0.52,0.52,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-26,52,52);
p.frameBounds = [rect];


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


(lib.eyes_check_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.eyes_check_0_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},19).to({alpha:0.102},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.eyes_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.eyes_check_0_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.eyes_check_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect, rect];


(lib.eyes_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_6_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnKHLQi+i/AAkMQAAkLC+jAQC+i+EMAAQEMAAC/C+QC/DAgBELQABEMi/C/Qi/C+kMABQkMgBi+i+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyes_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_6_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnKHLQi+i/AAkMQAAkLC+jAQC+i+EMAAQEMAAC/C+QC/DAgBELQABEMi/C/Qi/C+kMABQkMgBi+i+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyes_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_5_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnKHLQi+i/AAkMQAAkLC+jAQC+i+EMAAQEMAAC/C+QC/DAgBELQABEMi/C/Qi/C+kMABQkMgBi+i+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyes_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_5_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnKHLQi+i/AAkMQAAkLC+jAQC+i+EMAAQEMAAC/C+QC/DAgBELQABEMi/C/Qi/C+kMABQkMgBi+i+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyes_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_4_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnKHLQi+i/AAkMQAAkLC+jAQC+i+EMAAQEMAAC/C+QC/DAgBELQABEMi/C/Qi/C+kMABQkMgBi+i+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyes_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_4_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnKHLQi+i/AAkMQAAkLC+jAQC+i+EMAAQEMAAC/C+QC/DAgBELQABEMi/C/Qi/C+kMABQkMgBi+i+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyes_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_3_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnKHLQi+i/AAkMQAAkMC+i+QC+i+EMAAQEMAAC/C+QC/C+gBEMQABEMi/C/Qi/C/kMgBQkMABi+i/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyes_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_3_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnKHLQi+i/AAkMQAAkLC+jAQC+i+EMAAQEMAAC/C+QC/DAgBELQABEMi/C/Qi/C+kMABQkMgBi+i+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyes_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_2_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnKHLQi+i/AAkMQAAkLC+jAQC+i+EMAAQEMAAC/C+QC/DAgBELQABEMi/C/Qi/C+kMABQkMgBi+i+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyes_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_2_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnKHLQi+i/AAkMQAAkLC+jAQC+i+EMAAQEMAAC/C+QC/DAgBELQABEMi/C/Qi/C+kMABQkMgBi+i+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyes_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_1_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnKHLQi+i/AAkMQAAkLC+jAQC+i+EMAAQEMAAC/C+QC/DAgBELQABEMi/C/Qi/C+kMABQkMgBi+i+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyes_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_1_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnKHLQi+i/AAkMQAAkLC+jAQC+i+EMAAQEMAAC/C+QC/DAgBELQABEMi/C/Qi/C+kMABQkMgBi+i+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyebrows_check_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.eyebrows_check_0_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},19).to({alpha:0.102},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-80,140,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.eyebrows_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.eyebrows_check_0_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.eyebrows_check_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-80,140,160);
p.frameBounds = [rect, rect];


(lib.eyebrows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_6_1_img();
	this.instance.setTransform(-55,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsnHwISD1hIHMGCIyDVhg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.8,-88.2,161.6,176.5);
p.frameBounds = [rect];


(lib.eyebrows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_5_1_img();
	this.instance.setTransform(-55,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsnHwISD1hIHMGCIyDVhg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.8,-88.2,161.6,176.5);
p.frameBounds = [rect];


(lib.eyebrows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_4_1_img();
	this.instance.setTransform(-55,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsnHwISD1hIHMGCIyDVhg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.8,-88.2,161.6,176.5);
p.frameBounds = [rect];


(lib.eyebrows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_3_1_img();
	this.instance.setTransform(-55,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsnHwISD1hIHMGCIyDVhg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.8,-88.2,161.6,176.5);
p.frameBounds = [rect];


(lib.eyebrows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_2_1_img();
	this.instance.setTransform(-55,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsnHwISD1hIHMGCIyDVhg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.8,-88.2,161.6,176.5);
p.frameBounds = [rect];


(lib.eyebrows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_1_1_img();
	this.instance.setTransform(-55,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_check_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsnHwISD1hIHMGCIyDVhg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.8,-88.2,161.6,176.5);
p.frameBounds = [rect];


(lib.earrings_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,-0.1,0.52,0.52,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-26,52,52);
p.frameBounds = [rect];


(lib.dress_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.judy_dress9_mc();
	this.instance.setTransform(9.5,152.6,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AzvUgMARAgt3IGtARMAPyArQInIEuIufCgg");
	this.shape.setTransform(5.5,155.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.8,-6.7,252.8,324.9);
p.frameBounds = [rect];


(lib.dress_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.judy_dress8_mc();
	this.instance.setTransform(9.5,152.6,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0YSkMARMgrHIFggLMASFArSIoREZI0BByg");
	this.shape.setTransform(4.3,150.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-126.2,-7.4,261.1,316.6);
p.frameBounds = [rect];


(lib.dress_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.judy_dress7_mc();
	this.instance.setTransform(9,152.6,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AzvTwMAPjgsjIJUAUMAOpAsOIqYEaIylArg");
	this.shape.setTransform(3.4,151.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.1,-7,253,317.8);
p.frameBounds = [rect];


(lib.dress_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.judy_dress6_mc();
	this.instance.setTransform(9.5,152.6,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwnVnMAL2gumIHiAAMAN3AsxIngD7IvKBTg");
	this.shape.setTransform(5.7,152.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.7,-7.6,213,320.1);
p.frameBounds = [rect];


(lib.dress_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.judy_dress5_mc();
	this.instance.setTransform(9.5,152.6,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Az5SnMAN1gq6IHCgDMAS8ApDIstGyIu/A4g");
	this.shape.setTransform(13.6,148.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113.8,-7,255,311.9);
p.frameBounds = [rect];


(lib.dress_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.judy_dress4_mc();
	this.instance.setTransform(9,152.6,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AriX9IollfMAQCgrLIHHgBMARGArtIttFwg");
	this.shape.setTransform(4.9,151.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.9,-6.7,257.7,316.7);
p.frameBounds = [rect];


(lib.dress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.judy_dress3_mc();
	this.instance.setTransform(9,152.6,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ap0XvIoKkgMAMJgrXIHhAAMAQTAplIpnGsg");
	this.shape.setTransform(10.5,148.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.6,-6,230.2,309.1);
p.frameBounds = [rect];


(lib.dress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.judy_dress2_mc();
	this.instance.setTransform(9.5,152.6,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AzOUkMAN9gruIGlhAMAR7Ar3IrhD8ItYAig");
	this.shape.setTransform(9.4,147.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113.7,-7.4,246.4,309.5);
p.frameBounds = [rect];


(lib.dress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.judy_dress1_mc();
	this.instance.setTransform(10,152.6,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtTVUInOmxIAxwRIQU3lIFFgBISIYNIAxOuIo/JzIrZB7g");
	this.shape.setTransform(9.9,151.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121.5,-10.2,262.9,324.3);
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


(lib.closet_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.eyes_2 = new lib.eyes_2_2_mc();
	this.eyes_2.setTransform(-30,110);

	this.eyes_6 = new lib.eyes_6_2_mc();
	this.eyes_6.setTransform(40,0);

	this.eyes_3 = new lib.eyes_3_2_mc();
	this.eyes_3.setTransform(-30,-110);

	this.eyes_5 = new lib.eyes_5_2_mc();
	this.eyes_5.setTransform(30,110);

	this.eyes_4 = new lib.eyes_4_2_mc();
	this.eyes_4.setTransform(-40,0);

	this.eyes_1 = new lib.eyes_1_2_mc();
	this.eyes_1.setTransform(30,-110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eyes_3},{t:this.eyes_6},{t:this.eyes_2}]}).to({state:[{t:this.eyes_1},{t:this.eyes_4},{t:this.eyes_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-185,220,370);
p.frameBounds = [rect, new cjs.Rectangle(-115,-185,220,370)];


(lib.closet_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(165,-55);

	this.timeline.addTween(cjs.Tween.get(this.earrings_0).wait(4));

	// options
	this.earrings_7 = new lib.earrings_7_1_mc();
	this.earrings_7.setTransform(0,70);

	this.earrings_9 = new lib.earrings_9_1_mc();
	this.earrings_9.setTransform(0,-60);

	this.earrings_5 = new lib.earrings_5_1_mc();
	this.earrings_5.setTransform(0,70);

	this.earrings_4 = new lib.earrings_4_1_mc();
	this.earrings_4.setTransform(0,-60);

	this.earrings_2 = new lib.earrings_2_1_mc();
	this.earrings_2.setTransform(0,-60);

	this.earrings_1 = new lib.earrings_1_1_mc();
	this.earrings_1.setTransform(0,70);

	this.earrings_8 = new lib.earrings_8_1_mc();
	this.earrings_8.setTransform(0,-105);

	this.earrings_6 = new lib.earrings_6_1_mc();
	this.earrings_6.setTransform(0,-5);

	this.earrings_3 = new lib.earrings_3_1_mc();
	this.earrings_3.setTransform(0,110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.earrings_9},{t:this.earrings_7}]}).to({state:[{t:this.earrings_4},{t:this.earrings_5}]},1).to({state:[{t:this.earrings_1},{t:this.earrings_2}]},1).to({state:[{t:this.earrings_3},{t:this.earrings_6},{t:this.earrings_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-121.9,311,262);
p.frameBounds = [rect, new cjs.Rectangle(-118.1,-133,309.1,264), new cjs.Rectangle(-128.1,-109.9,319.2,246), new cjs.Rectangle(-119.4,-151.9,310.4,329)];


(lib.closet_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.leaf_mc();
	this.instance.setTransform(-11,-208,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

	// options
	this.dress_9 = new lib.dress_9_1_mc();
	this.dress_9.setTransform(-70,-175);

	this.dress_2 = new lib.dress_2_1_mc();
	this.dress_2.setTransform(60,-175);

	this.dress_3 = new lib.dress_3_1_mc();
	this.dress_3.setTransform(-70,-175);

	this.dress_4 = new lib.dress_4_1_mc();
	this.dress_4.setTransform(60,-175);

	this.dress_5 = new lib.dress_5_1_mc();
	this.dress_5.setTransform(-70,-175);

	this.dress_6 = new lib.dress_6_1_mc();
	this.dress_6.setTransform(60,-175);

	this.dress_7 = new lib.dress_7_1_mc();
	this.dress_7.setTransform(-70,-175);

	this.dress_8 = new lib.dress_8_1_mc();
	this.dress_8.setTransform(60,-175);

	this.dress_1 = new lib.dress_1_1_mc();
	this.dress_1.setTransform(0,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_2},{t:this.dress_9}]}).to({state:[{t:this.dress_4},{t:this.dress_3}]},1).to({state:[{t:this.dress_6},{t:this.dress_5}]},1).to({state:[{t:this.dress_8},{t:this.dress_7}]},1).to({state:[{t:this.dress_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190.8,-253,383.5,396.2);
p.frameBounds = [rect, new cjs.Rectangle(-174.6,-253,368.4,388), new cjs.Rectangle(-183.8,-253,356,390.5), new cjs.Rectangle(-193.1,-253,388.1,388.8), new cjs.Rectangle(-121.5,-253,262.9,377.1)];


(lib.closet_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.hair_0 = new lib.hair_0_mc();
	this.hair_0.setTransform(-170,-130);

	this.timeline.addTween(cjs.Tween.get(this.hair_0).wait(6));

	// options
	this.hair_1 = new lib.hairstyle_1_2_mc();
	this.hair_1.setTransform(0,-100);

	this.hair_2 = new lib.hairstyle_2_2_mc();
	this.hair_2.setTransform(0,-100);

	this.hair_3 = new lib.hairstyle_3_2_mc();
	this.hair_3.setTransform(0,-100);

	this.hair_4 = new lib.hairstyle_4_2_mc();
	this.hair_4.setTransform(0,-100);

	this.hair_5 = new lib.hairstyle_5_2_mc();
	this.hair_5.setTransform(0,-100);

	this.hair_6 = new lib.hairstyle_6_2_mc();
	this.hair_6.setTransform(0,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1}]}).to({state:[{t:this.hair_2}]},1).to({state:[{t:this.hair_3}]},1).to({state:[{t:this.hair_4}]},1).to({state:[{t:this.hair_5}]},1).to({state:[{t:this.hair_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-196,-280,376,360);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.closet_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.hair_0 = new lib.hair_0_mc();
	this.hair_0.setTransform(-170,-130);

	this.timeline.addTween(cjs.Tween.get(this.hair_0).wait(6));

	// options
	this.hair_1 = new lib.hairstyle_1_1_mc();
	this.hair_1.setTransform(0,-100);

	this.hair_2 = new lib.hairstyle_2_1_mc();
	this.hair_2.setTransform(0,-100);

	this.hair_3 = new lib.hairstyle_3_1_mc();
	this.hair_3.setTransform(0,-100);

	this.hair_4 = new lib.hairstyle_4_1_mc();
	this.hair_4.setTransform(0,-100);

	this.hair_5 = new lib.hairstyle_5_1_mc();
	this.hair_5.setTransform(0,-100);

	this.hair_6 = new lib.hairstyle_6_1_mc();
	this.hair_6.setTransform(0,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1}]}).to({state:[{t:this.hair_2}]},1).to({state:[{t:this.hair_3}]},1).to({state:[{t:this.hair_4}]},1).to({state:[{t:this.hair_5}]},1).to({state:[{t:this.hair_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-196,-280,376,360);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.closet_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(165,-55);
	this.shadows_0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shadows_0).wait(2).to({_off:false},0).to({_off:true},2).wait(1));

	// options
	this.eyes_6 = new lib.eyes_6_1_mc();
	this.eyes_6.setTransform(65,115);

	this.eyes_5 = new lib.eyes_5_1_mc();
	this.eyes_5.setTransform(-65,115);

	this.eyes_4 = new lib.eyes_4_1_mc();
	this.eyes_4.setTransform(65,0);

	this.eyes_3 = new lib.eyes_3_1_mc();
	this.eyes_3.setTransform(-65,0);

	this.eyes_2 = new lib.eyes_2_1_mc();
	this.eyes_2.setTransform(65,-115);

	this.eyes_1 = new lib.eyes_1_1_mc();
	this.eyes_1.setTransform(-65,-115);

	this.lips_6 = new lib.lips_6_1_mc();
	this.lips_6.setTransform(80,50);

	this.lips_5 = new lib.lips_5_1_mc();
	this.lips_5.setTransform(0,110);

	this.lips_4 = new lib.lips_4_1_mc();
	this.lips_4.setTransform(-90,50);

	this.lips_3 = new lib.lips_3_1_mc();
	this.lips_3.setTransform(80,-90);

	this.lips_2 = new lib.lips_2_1_mc();
	this.lips_2.setTransform(0,-30);

	this.lips_1 = new lib.lips_1_1_mc();
	this.lips_1.setTransform(-80,-90);

	this.shadows_3 = new lib.shadows_3_1_mc();
	this.shadows_3.setTransform(0,80);

	this.shadows_2 = new lib.shadows_2_1_mc();
	this.shadows_2.setTransform(70,-60);

	this.shadows_1 = new lib.shadows_1_1_mc();
	this.shadows_1.setTransform(-70,-60);

	this.shadows_6 = new lib.shadows_6_1_mc();
	this.shadows_6.setTransform(0,80);

	this.shadows_5 = new lib.shadows_5_1_mc();
	this.shadows_5.setTransform(-70,-60);

	this.shadows_4 = new lib.shadows_4_1_mc();
	this.shadows_4.setTransform(70,-60);

	this.eyebrows_6 = new lib.eyebrows_6_1_mc();
	this.eyebrows_6.setTransform(70,80);

	this.eyebrows_5 = new lib.eyebrows_5_1_mc();
	this.eyebrows_5.setTransform(0,80);

	this.eyebrows_4 = new lib.eyebrows_4_1_mc();
	this.eyebrows_4.setTransform(-70,80);

	this.eyebrows_3 = new lib.eyebrows_3_1_mc();
	this.eyebrows_3.setTransform(70,-70);

	this.eyebrows_2 = new lib.eyebrows_2_1_mc();
	this.eyebrows_2.setTransform(0,-70);

	this.eyebrows_1 = new lib.eyebrows_1_1_mc();
	this.eyebrows_1.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eyes_1},{t:this.eyes_2},{t:this.eyes_3},{t:this.eyes_4},{t:this.eyes_5},{t:this.eyes_6}]}).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]},1).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3}]},1).to({state:[{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.eyebrows_1},{t:this.eyebrows_2},{t:this.eyebrows_3},{t:this.eyebrows_4},{t:this.eyebrows_5},{t:this.eyebrows_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-190,280,380);
p.frameBounds = [rect, new cjs.Rectangle(-150,-170,290,360), rect=new cjs.Rectangle(-145,-135,336,290), rect, new cjs.Rectangle(-150.8,-158.2,301.7,326.5)];


(lib.boutonniere_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,-0.1,0.52,0.52,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-26,52,52);
p.frameBounds = [rect];


(lib.bouquet_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,-0.1,0.52,0.52,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-26,52,52);
p.frameBounds = [rect];


(lib.bottom_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nick_bottom9_mc();
	this.instance.setTransform(-7,125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnTtEIF1mjIFCAAIF9GwIh7eVIxGCKg");
	this.shape.setTransform(-2.3,119.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.3,-6,122,251.3);
p.frameBounds = [rect];


(lib.bottom_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nick_bottom8_mc();
	this.instance.setTransform(-7,125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoAuLIGdmKIDmgDIFSFjIB7J4IiWYjIwJAzg");
	this.shape.setTransform(0.9,124.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59,-5.6,119.2,261);
p.frameBounds = [rect];


(lib.bottom_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nick_bottom7_mc();
	this.instance.setTransform(-7.5,125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnvrPIGRoNIEoACIGiHxIiEepIxTAdg");
	this.shape.setTransform(-3.4,119.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.5,-4.8,124.2,249.2);
p.frameBounds = [rect];


(lib.bottom_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nick_bottom6_mc();
	this.instance.setTransform(-7.5,125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApVTlMACTgg8IGGmcIDyAAIGgGLMgB4Ahcg");
	this.shape.setTransform(-4.6,121.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.4,-5.5,119.6,253.6);
p.frameBounds = [rect];


(lib.bottom_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nick_bottom5_mc();
	this.instance.setTransform(-7,125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoCrtIGNoGIG+AMIEtJfIinc3IxEBFg");
	this.shape.setTransform(-2.8,122.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.8,-4.5,126.1,253.7);
p.frameBounds = [rect];


(lib.bottom_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nick_bottom4_mc();
	this.instance.setTransform(-7,125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("An0t4IGglcIEFABIFvFgIA3GXIifZLIwOBmg");
	this.shape.setTransform(-2.3,120.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.2,-2.9,119.9,247.5);
p.frameBounds = [rect];


(lib.bottom_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nick_bottom3_mc();
	this.instance.setTransform(-8,125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnatIIGQmGIEpgBIE8FVIBAFeIh9bHIw4Alg");
	this.shape.setTransform(-6,118.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.3,-4.6,120.7,246.6);
p.frameBounds = [rect];


(lib.bottom_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nick_bottom2_mc();
	this.instance.setTransform(-7,125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApmSiIBN/mIHEmrIE3AFIGFGkIhbfJInGBtg");
	this.shape.setTransform(-5.2,121.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.7,-5.1,123.1,253);
p.frameBounds = [rect];


(lib.bottom_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nick_bottom1_mc();
	this.instance.setTransform(-7.5,125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnXtnIHJm+IDZgBIHJI4Ig6f5IztAcg");
	this.shape.setTransform(-6.1,126);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.1,-6,132.1,264);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_2_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-185,220,370);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-121.9,311,262);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190.8,-253,383.5,396.2);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-196,-280,376,360);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-196,-280,376,360);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-190,280,380);
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


(lib.animation_grass_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.grass_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:4.3},29).to({scaleY:1.01,skewX:-6.8},60).to({scaleY:1,skewX:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-160,200,180);
p.frameBounds = [rect, new cjs.Rectangle(-99.9,-160,200.1,180), new cjs.Rectangle(-100,-160,200.8,180.1), new cjs.Rectangle(-100.1,-160,201,180.1), new cjs.Rectangle(-100.1,-160,201.7,180.1), new cjs.Rectangle(-100.1,-160,201.8,180.1), new cjs.Rectangle(-100.2,-160,202.5,180.1), new cjs.Rectangle(-100.3,-160,203.1,180.1), new cjs.Rectangle(-100.3,-160,203.3,180.1), new cjs.Rectangle(-100.4,-160,204,180.1), new cjs.Rectangle(-100.4,-160.1,204.1,180.1), new cjs.Rectangle(-100.5,-160,204.8,180.1), new cjs.Rectangle(-100.5,-160,205.5,180.1), new cjs.Rectangle(-100.6,-160.1,205.7,180.1), new cjs.Rectangle(-100.7,-160,206.4,180.1), new cjs.Rectangle(-100.7,-160.1,206.5,180.1), new cjs.Rectangle(-100.7,-160,207.2,180.1), new cjs.Rectangle(-100.8,-160,207.9,180.1), new cjs.Rectangle(-100.8,-160,208,180.1), new cjs.Rectangle(-100.9,-160,208.7,180.1), new cjs.Rectangle(-100.9,-160,208.8,180.1), new cjs.Rectangle(-101,-160,209.5,180.1), new cjs.Rectangle(-101.1,-160,210.3,180.1), new cjs.Rectangle(-101.1,-160,210.4,180.1), new cjs.Rectangle(-101.2,-160,211.1,180.1), new cjs.Rectangle(-101.2,-160,211.2,180.1), new cjs.Rectangle(-101.2,-160,211.9,180), new cjs.Rectangle(-101.3,-160,212,180.1), new cjs.Rectangle(-101.4,-160,212.7,180), new cjs.Rectangle(-101.5,-160,213.5,180), new cjs.Rectangle(-101.4,-160,212.7,180.1), new cjs.Rectangle(-101.3,-160,212,180.1), new cjs.Rectangle(-101.2,-160.1,211.2,180.2), new cjs.Rectangle(-101.2,-160.1,211.1,180.2), new cjs.Rectangle(-101.1,-160.2,210.4,180.3), new cjs.Rectangle(-101,-160.2,209.6,180.3), new cjs.Rectangle(-100.9,-160.3,208.9,180.4), new cjs.Rectangle(-100.9,-160.3,208.7,180.4), new cjs.Rectangle(-100.9,-160.3,208,180.4), new cjs.Rectangle(-100.8,-160.4,207.3,180.5), new cjs.Rectangle(-100.7,-160.4,207.1,180.5), new cjs.Rectangle(-100.6,-160.4,206.4,180.5), new cjs.Rectangle(-100.6,-160.5,205.7,180.6), new cjs.Rectangle(-100.5,-160.5,204.9,180.6), new cjs.Rectangle(-100.5,-160.5,204.8,180.6), new cjs.Rectangle(-100.4,-160.5,204,180.7), new cjs.Rectangle(-100.3,-160.6,203.3,180.7), new cjs.Rectangle(-100.2,-160.6,202.6,180.7), new cjs.Rectangle(-100.2,-160.6,202.4,180.7), new cjs.Rectangle(-100.1,-160.6,201.7,180.8), new cjs.Rectangle(-100,-160.6,200.9,180.8), new cjs.Rectangle(-100,-160.6,200.2,180.8), rect=new cjs.Rectangle(-100,-160.7,200.1,180.8), rect, new cjs.Rectangle(-100.7,-160.7,200.9,180.8), new cjs.Rectangle(-101.4,-160.7,201.6,180.8), new cjs.Rectangle(-101.5,-160.7,201.7,180.9), new cjs.Rectangle(-102.1,-160.7,202.5,180.9), new cjs.Rectangle(-102.8,-160.7,203.2,180.9), new cjs.Rectangle(-102.9,-160.7,203.4,180.9), new cjs.Rectangle(-103.6,-160.7,204.1,180.9), new cjs.Rectangle(-104.2,-160.7,204.8,180.9), new cjs.Rectangle(-104.9,-160.7,205.6,180.8), new cjs.Rectangle(-105,-160.7,205.7,180.9), new cjs.Rectangle(-105.7,-160.7,206.5,180.8), new cjs.Rectangle(-106.3,-160.7,207.2,180.8), new cjs.Rectangle(-107,-160.6,207.9,180.8), new cjs.Rectangle(-107.1,-160.6,208.1,180.8), new cjs.Rectangle(-107.8,-160.6,208.8,180.8), new cjs.Rectangle(-108.4,-160.6,209.6,180.8), new cjs.Rectangle(-109.1,-160.6,210.3,180.7), new cjs.Rectangle(-109.2,-160.6,210.4,180.7), new cjs.Rectangle(-109.9,-160.5,211.2,180.7), new cjs.Rectangle(-110.5,-160.5,211.9,180.7), new cjs.Rectangle(-111.2,-160.5,212.7,180.6), new cjs.Rectangle(-111.3,-160.5,212.8,180.6), new cjs.Rectangle(-112,-160.4,213.5,180.5), new cjs.Rectangle(-112.6,-160.4,214.3,180.5), new cjs.Rectangle(-112.8,-160.4,214.4,180.5), new cjs.Rectangle(-113.4,-160.4,215.2,180.5), new cjs.Rectangle(-114.1,-160.3,215.9,180.4), new cjs.Rectangle(-114.7,-160.3,216.6,180.4), new cjs.Rectangle(-114.8,-160.3,216.8,180.4), new cjs.Rectangle(-115.5,-160.2,217.5,180.3), new cjs.Rectangle(-116.2,-160.1,218.3,180.2), new cjs.Rectangle(-116.8,-160.1,219,180.2), new cjs.Rectangle(-116.9,-160.1,219.1,180.2), new cjs.Rectangle(-117.6,-160,219.9,180.1), new cjs.Rectangle(-118.2,-160,220.6,180), new cjs.Rectangle(-119,-160,221.4,180), new cjs.Rectangle(-118.2,-159.9,220.6,180), new cjs.Rectangle(-117.5,-160,219.8,180.1), new cjs.Rectangle(-116.8,-160,219,180.1), new cjs.Rectangle(-116.2,-160.1,218.3,180.1), new cjs.Rectangle(-115.5,-160.1,217.5,180.2), new cjs.Rectangle(-114.8,-160.1,216.7,180.2), new cjs.Rectangle(-114.1,-160.1,215.9,180.2), new cjs.Rectangle(-113.4,-160.2,215.2,180.3), new cjs.Rectangle(-112.7,-160.2,214.4,180.3), new cjs.Rectangle(-112.6,-160.2,214.2,180.3), new cjs.Rectangle(-111.9,-160.2,213.5,180.3), new cjs.Rectangle(-111.2,-160.2,212.7,180.3), new cjs.Rectangle(-110.5,-160.2,211.9,180.3), new cjs.Rectangle(-109.8,-160.2,211.1,180.3), new cjs.Rectangle(-109.1,-160.2,210.4,180.3), new cjs.Rectangle(-108.5,-160.2,209.6,180.3), new cjs.Rectangle(-107.8,-160.2,208.8,180.3), new cjs.Rectangle(-107.1,-160.2,208.1,180.3), new cjs.Rectangle(-106.4,-160.2,207.3,180.3), new cjs.Rectangle(-106.3,-160.2,207.1,180.3), new cjs.Rectangle(-105.6,-160.2,206.3,180.3), new cjs.Rectangle(-104.9,-160.2,205.6,180.3), new cjs.Rectangle(-104.2,-160.1,204.8,180.2), new cjs.Rectangle(-103.5,-160.1,204,180.2), new cjs.Rectangle(-102.8,-160.1,203.3,180.2), new cjs.Rectangle(-102.2,-160.1,202.5,180.2), new cjs.Rectangle(-101.5,-160.1,201.7,180.1), new cjs.Rectangle(-100.8,-160,201,180.1), new cjs.Rectangle(-100.1,-160,200.2,180.1), new cjs.Rectangle(-100,-160,200,180)];


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


(lib.animation_current_location_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_location_1_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},39).to({alpha:0.102},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-230,400,460);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.anim_nick_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nick_main_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1},39).to({scaleY:1},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-370,400,740);
p.frameBounds = [rect, new cjs.Rectangle(-200,-369.9,400,739.9), new cjs.Rectangle(-200,-369.8,400,739.8), new cjs.Rectangle(-200,-369.8,400,739.7), new cjs.Rectangle(-200,-369.7,400,739.6), new cjs.Rectangle(-200,-369.7,400,739.5), new cjs.Rectangle(-200,-369.6,400,739.4), new cjs.Rectangle(-200,-369.6,400,739.3), new cjs.Rectangle(-200,-369.5,400,739.2), new cjs.Rectangle(-200,-369.5,400,739.1), new cjs.Rectangle(-200,-369.4,400,739), new cjs.Rectangle(-200,-369.4,400,738.8), new cjs.Rectangle(-200,-369.3,400,738.8), new cjs.Rectangle(-200,-369.3,400,738.7), new cjs.Rectangle(-200,-369.2,400,738.6), new cjs.Rectangle(-200,-369.2,400,738.5), rect=new cjs.Rectangle(-200,-369.1,400,738.3), rect, new cjs.Rectangle(-200,-369,400,738.2), new cjs.Rectangle(-200,-369,400,738.1), new cjs.Rectangle(-200,-368.9,400,738), new cjs.Rectangle(-200,-368.9,400,737.8), new cjs.Rectangle(-200,-368.8,400,737.8), new cjs.Rectangle(-200,-368.8,400,737.7), new cjs.Rectangle(-200,-368.7,400,737.6), new cjs.Rectangle(-200,-368.7,400,737.5), rect=new cjs.Rectangle(-200,-368.6,400,737.3), rect, new cjs.Rectangle(-200,-368.5,400,737.2), new cjs.Rectangle(-200,-368.5,400,737.1), new cjs.Rectangle(-200,-368.4,400,737), new cjs.Rectangle(-200,-368.4,400,736.8), new cjs.Rectangle(-200,-368.3,400,736.8), new cjs.Rectangle(-200,-368.3,400,736.6), new cjs.Rectangle(-200,-368.2,400,736.5), new cjs.Rectangle(-200,-368.2,400,736.4), new cjs.Rectangle(-200,-368.1,400,736.3), new cjs.Rectangle(-200,-368.1,400,736.2), new cjs.Rectangle(-200,-368,400,736.1), new cjs.Rectangle(-200,-368,400,736), new cjs.Rectangle(-200,-368,400,736.1), new cjs.Rectangle(-200,-368,400,736.2), new cjs.Rectangle(-200,-368.1,400,736.3), new cjs.Rectangle(-200,-368.1,400,736.4), new cjs.Rectangle(-200,-368.2,400,736.5), new cjs.Rectangle(-200,-368.2,400,736.6), new cjs.Rectangle(-200,-368.3,400,736.7), new cjs.Rectangle(-200,-368.3,400,736.8), new cjs.Rectangle(-200,-368.4,400,736.9), new cjs.Rectangle(-200,-368.4,400,737), new cjs.Rectangle(-200,-368.5,400,737.1), new cjs.Rectangle(-200,-368.5,400,737.2), new cjs.Rectangle(-200,-368.6,400,737.3), new cjs.Rectangle(-200,-368.6,400,737.4), new cjs.Rectangle(-200,-368.7,400,737.5), new cjs.Rectangle(-200,-368.7,400,737.6), new cjs.Rectangle(-200,-368.8,400,737.7), new cjs.Rectangle(-200,-368.8,400,737.8), new cjs.Rectangle(-200,-368.9,400,737.9), new cjs.Rectangle(-200,-368.9,400,738), new cjs.Rectangle(-200,-369,400,738.1), new cjs.Rectangle(-200,-369,400,738.2), rect=new cjs.Rectangle(-200,-369.1,400,738.3), rect, new cjs.Rectangle(-200,-369.2,400,738.5), new cjs.Rectangle(-200,-369.2,400,738.6), new cjs.Rectangle(-200,-369.3,400,738.7), new cjs.Rectangle(-200,-369.3,400,738.8), new cjs.Rectangle(-200,-369.4,400,738.9), new cjs.Rectangle(-200,-369.4,400,739), new cjs.Rectangle(-200,-369.5,400,739.1), new cjs.Rectangle(-200,-369.5,400,739.2), new cjs.Rectangle(-200,-369.6,400,739.3), new cjs.Rectangle(-200,-369.6,400,739.4), new cjs.Rectangle(-200,-369.7,400,739.5), new cjs.Rectangle(-200,-369.7,400,739.6), new cjs.Rectangle(-200,-369.8,400,739.7), new cjs.Rectangle(-200,-369.8,400,739.8), new cjs.Rectangle(-200,-369.9,400,739.9), new cjs.Rectangle(-200,-370,400,740)];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:59,end:99});

	// animation
	this.instance = new lib.glare_sun_mc();
	this.instance.setTransform(400,270);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:1},18).to({alpha:0.602},15).to({alpha:1},20).wait(15).to({alpha:0.012},20).to({_off:true},10).wait(1));

	// animation
	this.instance_1 = new lib.curtain_1_mc();
	this.instance_1.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:0,alpha:0.012},0).to({alpha:1},18).wait(60).to({alpha:0.012},19).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,600,1600,600);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,0,1600,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


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


(lib.shine_2_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.shine_3_9_mc("synched",0);
	this.instance.setTransform(0,0,0.44,0.44,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0},14).to({scaleX:0.14,scaleY:0.14,rotation:135},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8.7,-8.8,17.6,17.6);
p.frameBounds = [rect, new cjs.Rectangle(-10.5,-10.6,21.2,21.2), new cjs.Rectangle(-12.4,-12.4,24.9,24.9), new cjs.Rectangle(-14.2,-14.2,28.5,28.5), new cjs.Rectangle(-15.9,-16,32,32), new cjs.Rectangle(-17.6,-17.6,35.3,35.3), new cjs.Rectangle(-19,-19.1,38.2,38.2), new cjs.Rectangle(-20.3,-20.3,40.7,40.7), new cjs.Rectangle(-21.3,-21.3,42.7,42.7), new cjs.Rectangle(-22,-21.9,44,44), new cjs.Rectangle(-22.3,-22.3,44.8,44.8), new cjs.Rectangle(-22.4,-22.3,44.8,44.8), new cjs.Rectangle(-21.9,-22,44,44), new cjs.Rectangle(-21.1,-21.1,42.3,42.3), new cjs.Rectangle(-20,-20,40,40), new cjs.Rectangle(-21.2,-21.2,42.5,42.5), new cjs.Rectangle(-22,-22,44.1,44.1), new cjs.Rectangle(-22.3,-22.3,44.7,44.7), new cjs.Rectangle(-22.2,-22.2,44.5,44.5), new cjs.Rectangle(-21.7,-21.7,43.6,43.6), new cjs.Rectangle(-20.8,-20.8,41.8,41.8), new cjs.Rectangle(-19.7,-19.7,39.4,39.4), new cjs.Rectangle(-18.3,-18.2,36.6,36.6), new cjs.Rectangle(-16.7,-16.6,33.3,33.3), new cjs.Rectangle(-14.9,-14.8,29.8,29.8), new cjs.Rectangle(-12.9,-12.9,25.9,25.9), new cjs.Rectangle(-11,-11,22.1,22.1), new cjs.Rectangle(-9.1,-9.1,18.3,18.3), new cjs.Rectangle(-8.5,-8.5,17.1,17.1), new cjs.Rectangle(-8.3,-8.3,16.7,16.7), new cjs.Rectangle(-7.8,-7.8,15.7,15.7), new cjs.Rectangle(-7.1,-7.1,14.2,14.2), new cjs.Rectangle(-6.2,-6.1,12.4,12.4), new cjs.Rectangle(-5.1,-5.1,10.2,10.2), new cjs.Rectangle(-4,-3.9,7.9,7.9)];


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


(lib.photoflash_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// photoflash
	this.photoflash_mc = new lib.photoflash_3_mc();
	this.photoflash_mc.setTransform(400,-300);

	this.timeline.addTween(cjs.Tween.get(this.photoflash_mc).wait(1));

	// area
	this.area_mc = new lib.photoflash_4_mc();
	this.area_mc.setTransform(0,100);

	this.timeline.addTween(cjs.Tween.get(this.area_mc).wait(1));

	// whiteBackground
	this.whiteBackground_mc = new lib.photoflash_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.whiteBackground_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-387,1400,987);
p.frameBounds = [rect];


(lib.photoflash_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2018 edapskov v 1.1
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
		/*
		
		*/
		this.body_mc.gotoAndStop(0);
		var _photoflash_mc = this.body_mc.photoflash_mc;
		_photoflash_mc.gotoAndStop(0);
		_photoflash_mc.visible = false;
		var _area_mc = this.body_mc.area_mc;
		_area_mc.gotoAndStop(0);
		var _area_bounds_obj = _area_mc.getBounds();
		_area_mc.visible = false;
		var _whiteBackground_mc = this.body_mc.whiteBackground_mc;
		_whiteBackground_mc.gotoAndStop(0);
		_whiteBackground_mc.visible = false;
		/*
		константы
		*/
		var _INTERVAL = 15;
		/*
		переменные
		*/
		var _currentUpdate_num = 0;
		var _totalUpdates_num = 50;
		var _interval_id = setInterval(_updateFunc, _INTERVAL);
		/*
		обновляем эффект
		*/
		function _updateFunc()
		{
			/*
			
			*/
			var randomScale_num = 1;
			/*
			
			*/
			try
			{
				/*
				
				*/
				_currentUpdate_num++;
				/*
				
				*/
				if (_currentUpdate_num == 1)
				{
					randomScale_num = Math.random() * (1 - 0.3) + 0.7;
					_photoflash_mc.scaleX = randomScale_num;
					_photoflash_mc.scaleY = randomScale_num;
					_photoflash_mc.x = _area_mc.x + (Math.random() * _area_bounds_obj.width);
					_photoflash_mc.y = _area_mc.y + (Math.random() * _area_bounds_obj.height);
					_photoflash_mc.rotation = 360 * Math.random();
					_photoflash_mc.visible = true;
					_photoflash_mc.gotoAndPlay(0);
				}
				else if (_currentUpdate_num == 4)
				{
					_whiteBackground_mc.visible = true;
				}
				else if (_currentUpdate_num == 6)
				{
					_photoflash_mc.visible = false;
					_whiteBackground_mc.visible = false;
				}
				else if (_currentUpdate_num >= _totalUpdates_num)
				{
					_totalUpdates_num = Math.round(Math.random() * 20) + 30;
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.photoflash_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-387,1400,987);
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
p.nominalBounds = rect = new cjs.Rectangle(-32,-32,64,64);
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
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.012},14).to({scaleX:1,scaleY:1,alpha:0.5},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect, new cjs.Rectangle(-24.6,-24.6,49.3,49.3), new cjs.Rectangle(-24.2,-24.2,48.6,48.6), new cjs.Rectangle(-23.9,-23.9,47.8,47.8), new cjs.Rectangle(-23.5,-23.5,47.2,47.2), new cjs.Rectangle(-23.2,-23.2,46.5,46.5), new cjs.Rectangle(-22.8,-22.8,45.7,45.7), new cjs.Rectangle(-22.5,-22.5,45,45), new cjs.Rectangle(-22.1,-22.1,44.3,44.3), new cjs.Rectangle(-21.7,-21.7,43.6,43.6), new cjs.Rectangle(-21.4,-21.4,42.8,42.8), new cjs.Rectangle(-21,-21,42.2,42.2), new cjs.Rectangle(-20.7,-20.7,41.5,41.5), new cjs.Rectangle(-20.3,-20.3,40.7,40.7), new cjs.Rectangle(-20,-20,40,40), new cjs.Rectangle(-20.3,-20.3,40.7,40.7), new cjs.Rectangle(-20.6,-20.6,41.3,41.3), new cjs.Rectangle(-20.9,-20.9,42,42), new cjs.Rectangle(-21.3,-21.3,42.7,42.7), new cjs.Rectangle(-21.6,-21.6,43.3,43.3), new cjs.Rectangle(-21.9,-21.9,44,44), new cjs.Rectangle(-22.3,-22.3,44.7,44.7), new cjs.Rectangle(-22.6,-22.6,45.3,45.3), new cjs.Rectangle(-22.9,-22.9,46,46), new cjs.Rectangle(-23.3,-23.3,46.7,46.7), new cjs.Rectangle(-23.6,-23.6,47.3,47.3), new cjs.Rectangle(-23.9,-23.9,48,48), new cjs.Rectangle(-24.3,-24.3,48.7,48.7), new cjs.Rectangle(-24.6,-24.6,49.3,49.3), new cjs.Rectangle(-25,-25,50,50)];


(lib.blinking_light_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_light_1_3_mc();
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.012},19).to({scaleX:1,scaleY:1,alpha:0.5},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect, new cjs.Rectangle(-23.7,-23.7,47.5,47.5), new cjs.Rectangle(-23.4,-23.4,47,47), new cjs.Rectangle(-23.2,-23.2,46.5,46.5), new cjs.Rectangle(-22.9,-22.9,46,46), new cjs.Rectangle(-22.7,-22.7,45.5,45.5), new cjs.Rectangle(-22.4,-22.4,45,45), new cjs.Rectangle(-22.2,-22.2,44.5,44.5), new cjs.Rectangle(-21.9,-21.9,44,44), new cjs.Rectangle(-21.7,-21.7,43.5,43.5), new cjs.Rectangle(-21.4,-21.4,43,43), new cjs.Rectangle(-21.2,-21.2,42.5,42.5), new cjs.Rectangle(-20.9,-20.9,42,42), new cjs.Rectangle(-20.7,-20.7,41.5,41.5), new cjs.Rectangle(-20.4,-20.4,41,41), new cjs.Rectangle(-20.2,-20.2,40.4,40.4), new cjs.Rectangle(-19.9,-19.9,39.9,39.9), new cjs.Rectangle(-19.7,-19.7,39.4,39.4), new cjs.Rectangle(-19.4,-19.4,38.9,38.9), new cjs.Rectangle(-19.2,-19.2,38.4,38.4), new cjs.Rectangle(-19.4,-19.4,38.9,38.9), new cjs.Rectangle(-19.6,-19.6,39.3,39.3), new cjs.Rectangle(-19.9,-19.9,39.8,39.8), new cjs.Rectangle(-20.1,-20.1,40.3,40.3), new cjs.Rectangle(-20.3,-20.3,40.8,40.8), new cjs.Rectangle(-20.6,-20.6,41.3,41.3), new cjs.Rectangle(-20.8,-20.8,41.8,41.8), new cjs.Rectangle(-21.1,-21.1,42.3,42.3), new cjs.Rectangle(-21.3,-21.3,42.7,42.7), new cjs.Rectangle(-21.5,-21.5,43.2,43.2), new cjs.Rectangle(-21.8,-21.8,43.7,43.7), new cjs.Rectangle(-22,-22,44.2,44.2), new cjs.Rectangle(-22.3,-22.3,44.7,44.7), new cjs.Rectangle(-22.5,-22.5,45.1,45.1), new cjs.Rectangle(-22.7,-22.7,45.6,45.6), new cjs.Rectangle(-23,-23,46.1,46.1), new cjs.Rectangle(-23.2,-23.2,46.6,46.6), new cjs.Rectangle(-23.5,-23.5,47.1,47.1), new cjs.Rectangle(-23.7,-23.7,47.5,47.5), new cjs.Rectangle(-24,-24,48,48)];


(lib.blinking_light_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_light_1_2_mc();
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.012},14).to({scaleX:1,scaleY:1,alpha:0.301},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect, new cjs.Rectangle(-19.7,-19.7,39.5,39.5), new cjs.Rectangle(-19.4,-19.4,38.8,38.8), new cjs.Rectangle(-19.1,-19.1,38.3,38.3), new cjs.Rectangle(-18.8,-18.8,37.7,37.7), new cjs.Rectangle(-18.5,-18.5,37.2,37.2), new cjs.Rectangle(-18.2,-18.2,36.6,36.6), new cjs.Rectangle(-18,-18,36,36), new cjs.Rectangle(-17.7,-17.7,35.5,35.5), new cjs.Rectangle(-17.4,-17.4,34.8,34.8), new cjs.Rectangle(-17.1,-17.1,34.3,34.3), new cjs.Rectangle(-16.8,-16.8,33.7,33.7), new cjs.Rectangle(-16.5,-16.5,33.2,33.2), new cjs.Rectangle(-16.2,-16.2,32.6,32.6), new cjs.Rectangle(-16,-16,32,32), new cjs.Rectangle(-16.2,-16.2,32.6,32.6), new cjs.Rectangle(-16.5,-16.5,33.1,33.1), new cjs.Rectangle(-16.7,-16.7,33.6,33.6), new cjs.Rectangle(-17,-17,34.2,34.2), new cjs.Rectangle(-17.3,-17.3,34.7,34.7), new cjs.Rectangle(-17.5,-17.5,35.2,35.2), new cjs.Rectangle(-17.8,-17.8,35.8,35.8), new cjs.Rectangle(-18.1,-18.1,36.3,36.3), new cjs.Rectangle(-18.3,-18.3,36.8,36.8), new cjs.Rectangle(-18.6,-18.6,37.3,37.3), new cjs.Rectangle(-18.9,-18.9,37.8,37.8), new cjs.Rectangle(-19.1,-19.1,38.4,38.4), new cjs.Rectangle(-19.4,-19.4,39,39), new cjs.Rectangle(-19.7,-19.7,39.5,39.5), new cjs.Rectangle(-20,-20,40,40)];


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


(lib.nav_anim_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_4_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},15).to({alpha:0.102},15).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGoQiwiwAAj4QAAj3CwiwQCwiwD3AAQD4AACwCwQCwCwAAD3QAAD4iwCwQiwCwj4AAQj3AAiwiwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_anim_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_3_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},15).to({alpha:0.102},15).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGoQiwiwAAj4QAAj3CwiwQCwiwD3AAQD4AACwCwQCwCwAAD3QAAD4iwCwQiwCwj4AAQj3AAiwiwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_anim_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_2_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},15).to({alpha:0.102},15).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},19).to({alpha:0.012},30).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjQHCQhkAAhGhHQhGhGgBhkIAAmhQABhkBGhGQBGhGBkgBIGhAAQBkABBGBGQBHBGAABkIAAGhQAABkhHBGQhGBHhkAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
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


(lib.top_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nick_top9_mc();
	this.instance.setTransform(-6.5,125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArIN6IglveIHourIFmgDIKOQWIlBQPg");
	this.shape.setTransform(6.6,100.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.5,-3.9,150.2,208.7);
p.frameBounds = [rect];


(lib.top_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nick_top8_mc();
	this.instance.setTransform(-7.5,125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ar4N4IBFzGIHvqfIEggBIKdPzIkpPqg");
	this.shape.setTransform(7.7,96.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.4,-4.2,152.3,201.5);
p.frameBounds = [rect];


(lib.top_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nick_top7_mc();
	this.instance.setTransform(-7,125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AraPDIgXwgIHMuvIFdgBIK6QOIkjQNg");
	this.shape.setTransform(8.3,98.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.2,-5.2,150.9,207.7);
p.frameBounds = [rect];


(lib.top_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nick_top6_mc();
	this.instance.setTransform(-6.5,125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsJOfIAMySIJJsXIEKAAIK0QHIksQOg");
	this.shape.setTransform(7.3,100);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.5,-3.5,155.8,207.2);
p.frameBounds = [rect];


(lib.top_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nick_top5_mc();
	this.instance.setTransform(-6.5,125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsWAhIIJvtIGIgDII5LVIBjGVIk2MZIznAcg");
	this.shape.setTransform(7.3,93.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.8,-4,158.4,195.3);
p.frameBounds = [rect];


(lib.top_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nick_top4_mc();
	this.instance.setTransform(-7,125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ar8A+IG3woIGvgHIKUQDIkTPcIzBAEg");
	this.shape.setTransform(7,96.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.6,-4.6,153.2,202);
p.frameBounds = [rect];


(lib.top_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nick_top3_mc();
	this.instance.setTransform(-7.5,125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ar3O/IgmvwIH0uNIFQACIL3PPIlqOsg");
	this.shape.setTransform(7.9,91.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72,-4.2,159.8,191.9);
p.frameBounds = [rect];


(lib.top_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nick_top2_mc();
	this.instance.setTransform(-7.5,125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ar/OrIAv0xIJYqrIDbADIJ+NmIAfHDIlgM3g");
	this.shape.setTransform(4.4,99.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.4,-8.2,153.7,214.8);
p.frameBounds = [rect];


(lib.top_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nick_top1_mc();
	this.instance.setTransform(-7,125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ar5QfIgI0kII3t7IEwgBIKcRxIjgSSg");
	this.shape.setTransform(7,109.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-6.4,154.1,231);
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


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_5_img();
	this.instance.setTransform(-180,-220);

	this.instance_1 = new lib.location_1_5_img();
	this.instance_1.setTransform(-180,-220);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_1_mc();

	this.instance_3 = new lib.animation_current_location_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgU7AiXQjoAAikikQijikAAjoMAAAgzNQAAjoCjikQCkikDoAAMAp3AAAQDoAACkCkQCjCkAADoMAAAAzNQAADoijCkQikCkjoAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-220,380,440);
p.frameBounds = [rect, new cjs.Rectangle(-200,-230,400,460), new cjs.Rectangle(-190,-220,380,440)];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_4_img();
	this.instance.setTransform(-180,-220);

	this.instance_1 = new lib.location_1_4_img();
	this.instance_1.setTransform(-180,-220);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_1_mc();

	this.instance_3 = new lib.animation_current_location_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgU7AiXQjoAAikikQijikAAjoMAAAgzNQAAjoCjikQCkikDoAAMAp3AAAQDoAACkCkQCjCkAADoMAAAAzNQAADoijCkQikCkjoAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-220,380,440);
p.frameBounds = [rect, new cjs.Rectangle(-200,-230,400,460), new cjs.Rectangle(-190,-220,380,440)];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_3_img();
	this.instance.setTransform(-180,-220);

	this.instance_1 = new lib.location_1_3_img();
	this.instance_1.setTransform(-180,-220);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_1_mc();

	this.instance_3 = new lib.animation_current_location_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgU7AiXQjoAAikikQijikAAjoMAAAgzNQAAjoCjikQCkikDoAAMAp3AAAQDoAACkCkQCjCkAADoMAAAAzNQAADoijCkQikCkjoAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-220,380,440);
p.frameBounds = [rect, new cjs.Rectangle(-200,-230,400,460), new cjs.Rectangle(-190,-220,380,440)];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_2_img();
	this.instance.setTransform(-180,-220);

	this.instance_1 = new lib.location_1_2_img();
	this.instance_1.setTransform(-180,-220);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_1_mc();

	this.instance_3 = new lib.animation_current_location_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgU7AiXQjoAAikikQijikAAjoMAAAgzNQAAjoCjikQCkikDoAAMAp3AAAQDoAACkCkQCjCkAADoMAAAAzNQAADoijCkQikCkjoAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-220,380,440);
p.frameBounds = [rect, new cjs.Rectangle(-200,-230,400,460), new cjs.Rectangle(-190,-220,380,440)];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_1_img();
	this.instance.setTransform(-180,-220);

	this.instance_1 = new lib.location_1_1_img();
	this.instance_1.setTransform(-180,-220);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_1_mc();

	this.instance_3 = new lib.animation_current_location_1_1_mc();
	this.instance_3.setTransform(501,-126,1,1,0,0,0,501,-126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgU7AiXQjoAAikikQijikAAjoMAAAgzNQAAjoCjikQCkikDoAAMAp3AAAQDoAACkCkQCjCkAADoMAAAAzNQAADoijCkQikCkjoAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-220,380,440);
p.frameBounds = [rect, new cjs.Rectangle(-200,-230,400,460), new cjs.Rectangle(-190,-220,380,440)];


(lib.judy_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shine_mc = new lib.shine_1_9_mc();
	this.shine_mc.setTransform(-111,-107);

	this.timeline.addTween(cjs.Tween.get(this.shine_mc).wait(1));

	// graph
	this.instance = new lib.judy_main_img();
	this.instance.setTransform(-180,-360);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-360,360,720);
p.frameBounds = [rect];


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


(lib.frame_locations_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":179});

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
	this.frame_44 = function() {
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
	this.frame_109 = function() {
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
	this.frame_129 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(20).call(this.frame_44).wait(65).call(this.frame_109).wait(20).call(this.frame_129).wait(51));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(-110,265,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(55,265,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(0,265,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(-55,265,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_2_mc();
	this.instance_4.setTransform(110,265);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(180));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({x:-1100},0).wait(23).to({x:280},15).to({x:190},5).wait(65).to({x:140},5).to({x:1100},15).wait(51));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({x:-1100},0).wait(43).to({x:-100},15).to({x:-190},5).wait(15).to({scaleX:0.95,scaleY:0.96},5).to({scaleX:1,scaleY:1},10).wait(35).to({x:-240},5).to({x:1100},15).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-220,760,515);
p.frameBounds = [rect, rect=new cjs.Rectangle(-1290,-220,1430,515), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1290,-220,1484,515), new cjs.Rectangle(-1290,-220,1576,515), new cjs.Rectangle(-1290,-220,1668,515), new cjs.Rectangle(-1290,-220,1760,515), new cjs.Rectangle(-1290,-220,1742,515), new cjs.Rectangle(-1290,-220,1724,515), new cjs.Rectangle(-1290,-220,1706,515), new cjs.Rectangle(-1290,-220,1688,515), new cjs.Rectangle(-1290,-220,1670,515), new cjs.Rectangle(-1223.3,-220,1603.4,515), new cjs.Rectangle(-1156.6,-220,1536.7,515), new cjs.Rectangle(-1090,-220,1470,515), new cjs.Rectangle(-1023.3,-220,1403.4,515), new cjs.Rectangle(-956.6,-220,1336.7,515), new cjs.Rectangle(-890,-220,1270,515), new cjs.Rectangle(-823.3,-220,1203.4,515), new cjs.Rectangle(-756.6,-220,1136.7,515), new cjs.Rectangle(-690,-220,1070,515), new cjs.Rectangle(-623.3,-220,1003.4,515), new cjs.Rectangle(-556.6,-220,936.7,515), new cjs.Rectangle(-490,-220,870,515), new cjs.Rectangle(-423.3,-220,803.4,515), new cjs.Rectangle(-356.6,-220,736.7,515), new cjs.Rectangle(-290,-220,670,515), new cjs.Rectangle(-308,-220,688,515), new cjs.Rectangle(-326,-220,706,515), new cjs.Rectangle(-344,-220,724,515), new cjs.Rectangle(-362,-220,742,515), rect=new cjs.Rectangle(-380,-220,760,515), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-378.2,-220,758.3,515), new cjs.Rectangle(-376.5,-220,756.6,515), new cjs.Rectangle(-374.8,-220,754.9,515), new cjs.Rectangle(-373.1,-220,753.2,515), new cjs.Rectangle(-371.3,-220,751.4,515), new cjs.Rectangle(-372.2,-220,752.3,515), new cjs.Rectangle(-373.1,-220,753.2,515), new cjs.Rectangle(-373.9,-220,754,515), new cjs.Rectangle(-374.8,-220,754.8,515), new cjs.Rectangle(-375.6,-220,755.6,515), new cjs.Rectangle(-376.5,-220,756.5,515), new cjs.Rectangle(-377.3,-220,757.4,515), new cjs.Rectangle(-378.2,-220,758.2,515), new cjs.Rectangle(-379.1,-220,759.2,515), rect=new cjs.Rectangle(-380,-220,760,515), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-220,750,515), new cjs.Rectangle(-380,-220,740,515), new cjs.Rectangle(-380,-220,730,515), new cjs.Rectangle(-380,-220,720,515), new cjs.Rectangle(-380,-220,710,515), new cjs.Rectangle(-380,-220,774,515), new cjs.Rectangle(-380,-220,838,515), new cjs.Rectangle(-380,-220,902,515), new cjs.Rectangle(-380,-220,966,515), new cjs.Rectangle(-380,-220,1030,515), new cjs.Rectangle(-380,-220,1094,515), new cjs.Rectangle(-380,-220,1158,515), new cjs.Rectangle(-380,-220,1222,515), new cjs.Rectangle(-380,-220,1286,515), new cjs.Rectangle(-380,-220,1350,515), new cjs.Rectangle(-380,-220,1414,515), new cjs.Rectangle(-380,-220,1478,515), new cjs.Rectangle(-380,-220,1542,515), new cjs.Rectangle(-380,-220,1606,515), new cjs.Rectangle(-380,-220,1670,515), new cjs.Rectangle(-390,-220,1680,515), new cjs.Rectangle(-400,-220,1690,515), new cjs.Rectangle(-410,-220,1700,515), new cjs.Rectangle(-420,-220,1710,515), new cjs.Rectangle(-430,-220,1720,515), new cjs.Rectangle(-340.6,-220,1630.7,515), new cjs.Rectangle(-251.3,-220,1541.4,515), new cjs.Rectangle(-162,-220,1452,515), rect=new cjs.Rectangle(-135,-220,1425,515), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":179});

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
	this.frame_44 = function() {
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
	this.frame_109 = function() {
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
	this.frame_129 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(20).call(this.frame_44).wait(65).call(this.frame_109).wait(20).call(this.frame_129).wait(51));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(110,265,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(-110,265,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(0,265,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(-55,265,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_2_mc();
	this.instance_4.setTransform(55,265);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(180));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(-190,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({x:-1100},0).wait(43).to({x:-100},15).to({x:-190},5).wait(15).to({scaleX:0.95,scaleY:0.96},5).to({scaleX:1,scaleY:1},10).wait(35).to({x:-240},5).to({x:1100},15).wait(31));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({x:-1100},0).wait(23).to({x:280},15).to({x:190},5).wait(65).to({x:140},5).to({x:1100},15).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-220,760,515);
p.frameBounds = [rect, rect=new cjs.Rectangle(-1290,-220,1425,515), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1290,-220,1484,515), new cjs.Rectangle(-1290,-220,1576,515), new cjs.Rectangle(-1290,-220,1668,515), new cjs.Rectangle(-1290,-220,1760,515), new cjs.Rectangle(-1290,-220,1742,515), new cjs.Rectangle(-1290,-220,1724,515), new cjs.Rectangle(-1290,-220,1706,515), new cjs.Rectangle(-1290,-220,1688,515), new cjs.Rectangle(-1290,-220,1670,515), new cjs.Rectangle(-1223.3,-220,1603.4,515), new cjs.Rectangle(-1156.6,-220,1536.7,515), new cjs.Rectangle(-1090,-220,1470,515), new cjs.Rectangle(-1023.3,-220,1403.4,515), new cjs.Rectangle(-956.6,-220,1336.7,515), new cjs.Rectangle(-890,-220,1270,515), new cjs.Rectangle(-823.3,-220,1203.4,515), new cjs.Rectangle(-756.6,-220,1136.7,515), new cjs.Rectangle(-690,-220,1070,515), new cjs.Rectangle(-623.3,-220,1003.4,515), new cjs.Rectangle(-556.6,-220,936.7,515), new cjs.Rectangle(-490,-220,870,515), new cjs.Rectangle(-423.3,-220,803.4,515), new cjs.Rectangle(-356.6,-220,736.7,515), new cjs.Rectangle(-290,-220,670,515), new cjs.Rectangle(-308,-220,688,515), new cjs.Rectangle(-326,-220,706,515), new cjs.Rectangle(-344,-220,724,515), new cjs.Rectangle(-362,-220,742,515), rect=new cjs.Rectangle(-380,-220,760,515), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-378.2,-220,758.3,515), new cjs.Rectangle(-376.5,-220,756.6,515), new cjs.Rectangle(-374.8,-220,754.9,515), new cjs.Rectangle(-373.1,-220,753.2,515), new cjs.Rectangle(-371.3,-220,751.4,515), new cjs.Rectangle(-372.2,-220,752.3,515), new cjs.Rectangle(-373.1,-220,753.2,515), new cjs.Rectangle(-373.9,-220,754,515), new cjs.Rectangle(-374.8,-220,754.8,515), new cjs.Rectangle(-375.6,-220,755.6,515), new cjs.Rectangle(-376.5,-220,756.5,515), new cjs.Rectangle(-377.3,-220,757.4,515), new cjs.Rectangle(-378.2,-220,758.2,515), new cjs.Rectangle(-379.1,-220,759.2,515), rect=new cjs.Rectangle(-380,-220,760,515), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-220,750,515), new cjs.Rectangle(-380,-220,740,515), new cjs.Rectangle(-380,-220,730,515), new cjs.Rectangle(-380,-220,720,515), new cjs.Rectangle(-380,-220,710,515), new cjs.Rectangle(-380,-220,774,515), new cjs.Rectangle(-380,-220,838,515), new cjs.Rectangle(-380,-220,902,515), new cjs.Rectangle(-380,-220,966,515), new cjs.Rectangle(-380,-220,1030,515), new cjs.Rectangle(-380,-220,1094,515), new cjs.Rectangle(-380,-220,1158,515), new cjs.Rectangle(-380,-220,1222,515), new cjs.Rectangle(-380,-220,1286,515), new cjs.Rectangle(-380,-220,1350,515), new cjs.Rectangle(-380,-220,1414,515), new cjs.Rectangle(-380,-220,1478,515), new cjs.Rectangle(-380,-220,1542,515), new cjs.Rectangle(-380,-220,1606,515), new cjs.Rectangle(-380,-220,1670,515), new cjs.Rectangle(-390,-220,1680,515), new cjs.Rectangle(-400,-220,1690,515), new cjs.Rectangle(-410,-220,1700,515), new cjs.Rectangle(-420,-220,1710,515), new cjs.Rectangle(-430,-220,1720,515), new cjs.Rectangle(-340.6,-220,1630.7,515), new cjs.Rectangle(-251.3,-220,1541.4,515), new cjs.Rectangle(-162,-220,1452,515), rect=new cjs.Rectangle(-135,-220,1425,515), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":179});

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
	this.frame_44 = function() {
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
	this.frame_109 = function() {
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
	this.frame_129 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(20).call(this.frame_44).wait(65).call(this.frame_109).wait(20).call(this.frame_129).wait(51));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(110,265,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(55,265,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(-110,265,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(-55,265,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_2_mc();
	this.instance_4.setTransform(0,265);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(180));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({x:-1100},0).wait(43).to({x:-100},15).to({x:-190},5).wait(15).to({scaleX:0.95,scaleY:0.96},5).to({scaleX:1,scaleY:1},10).wait(35).to({x:-240},5).to({x:1100},15).wait(31));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({x:-1100},0).wait(23).to({x:280},15).to({x:190},5).wait(65).to({x:140},5).to({x:1100},15).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-220,760,515);
p.frameBounds = [rect, rect=new cjs.Rectangle(-1290,-220,1425,515), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1290,-220,1484,515), new cjs.Rectangle(-1290,-220,1576,515), new cjs.Rectangle(-1290,-220,1668,515), new cjs.Rectangle(-1290,-220,1760,515), new cjs.Rectangle(-1290,-220,1742,515), new cjs.Rectangle(-1290,-220,1724,515), new cjs.Rectangle(-1290,-220,1706,515), new cjs.Rectangle(-1290,-220,1688,515), new cjs.Rectangle(-1290,-220,1670,515), new cjs.Rectangle(-1223.3,-220,1603.4,515), new cjs.Rectangle(-1156.6,-220,1536.7,515), new cjs.Rectangle(-1090,-220,1470,515), new cjs.Rectangle(-1023.3,-220,1403.4,515), new cjs.Rectangle(-956.6,-220,1336.7,515), new cjs.Rectangle(-890,-220,1270,515), new cjs.Rectangle(-823.3,-220,1203.4,515), new cjs.Rectangle(-756.6,-220,1136.7,515), new cjs.Rectangle(-690,-220,1070,515), new cjs.Rectangle(-623.3,-220,1003.4,515), new cjs.Rectangle(-556.6,-220,936.7,515), new cjs.Rectangle(-490,-220,870,515), new cjs.Rectangle(-423.3,-220,803.4,515), new cjs.Rectangle(-356.6,-220,736.7,515), new cjs.Rectangle(-290,-220,670,515), new cjs.Rectangle(-308,-220,688,515), new cjs.Rectangle(-326,-220,706,515), new cjs.Rectangle(-344,-220,724,515), new cjs.Rectangle(-362,-220,742,515), rect=new cjs.Rectangle(-380,-220,760,515), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-378.2,-220,758.3,515), new cjs.Rectangle(-376.5,-220,756.6,515), new cjs.Rectangle(-374.8,-220,754.9,515), new cjs.Rectangle(-373.1,-220,753.2,515), new cjs.Rectangle(-371.3,-220,751.4,515), new cjs.Rectangle(-372.2,-220,752.3,515), new cjs.Rectangle(-373.1,-220,753.2,515), new cjs.Rectangle(-373.9,-220,754,515), new cjs.Rectangle(-374.8,-220,754.8,515), new cjs.Rectangle(-375.6,-220,755.6,515), new cjs.Rectangle(-376.5,-220,756.5,515), new cjs.Rectangle(-377.3,-220,757.4,515), new cjs.Rectangle(-378.2,-220,758.2,515), new cjs.Rectangle(-379.1,-220,759.2,515), rect=new cjs.Rectangle(-380,-220,760,515), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-220,750,515), new cjs.Rectangle(-380,-220,740,515), new cjs.Rectangle(-380,-220,730,515), new cjs.Rectangle(-380,-220,720,515), new cjs.Rectangle(-380,-220,710,515), new cjs.Rectangle(-380,-220,774,515), new cjs.Rectangle(-380,-220,838,515), new cjs.Rectangle(-380,-220,902,515), new cjs.Rectangle(-380,-220,966,515), new cjs.Rectangle(-380,-220,1030,515), new cjs.Rectangle(-380,-220,1094,515), new cjs.Rectangle(-380,-220,1158,515), new cjs.Rectangle(-380,-220,1222,515), new cjs.Rectangle(-380,-220,1286,515), new cjs.Rectangle(-380,-220,1350,515), new cjs.Rectangle(-380,-220,1414,515), new cjs.Rectangle(-380,-220,1478,515), new cjs.Rectangle(-380,-220,1542,515), new cjs.Rectangle(-380,-220,1606,515), new cjs.Rectangle(-380,-220,1670,515), new cjs.Rectangle(-390,-220,1680,515), new cjs.Rectangle(-400,-220,1690,515), new cjs.Rectangle(-410,-220,1700,515), new cjs.Rectangle(-420,-220,1710,515), new cjs.Rectangle(-430,-220,1720,515), new cjs.Rectangle(-340.6,-220,1630.7,515), new cjs.Rectangle(-251.3,-220,1541.4,515), new cjs.Rectangle(-162,-220,1452,515), rect=new cjs.Rectangle(-135,-220,1425,515), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":179});

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
	this.frame_44 = function() {
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
	this.frame_109 = function() {
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
	this.frame_129 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(20).call(this.frame_44).wait(65).call(this.frame_109).wait(20).call(this.frame_129).wait(51));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(110,265,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(55,265,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(0,265,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(-110,265,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_2_mc();
	this.instance_4.setTransform(-55,265);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(180));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({x:-1100},0).wait(43).to({x:-100},15).to({x:-190},5).wait(15).to({scaleX:0.95,scaleY:0.96},5).to({scaleX:1,scaleY:1},10).wait(35).to({x:-240},5).to({x:1100},15).wait(31));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({x:-1100},0).wait(23).to({x:280},15).to({x:190},5).wait(65).to({x:140},5).to({x:1100},15).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-220,760,515);
p.frameBounds = [rect, rect=new cjs.Rectangle(-1290,-220,1425,515), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1290,-220,1484,515), new cjs.Rectangle(-1290,-220,1576,515), new cjs.Rectangle(-1290,-220,1668,515), new cjs.Rectangle(-1290,-220,1760,515), new cjs.Rectangle(-1290,-220,1742,515), new cjs.Rectangle(-1290,-220,1724,515), new cjs.Rectangle(-1290,-220,1706,515), new cjs.Rectangle(-1290,-220,1688,515), new cjs.Rectangle(-1290,-220,1670,515), new cjs.Rectangle(-1223.3,-220,1603.4,515), new cjs.Rectangle(-1156.6,-220,1536.7,515), new cjs.Rectangle(-1090,-220,1470,515), new cjs.Rectangle(-1023.3,-220,1403.4,515), new cjs.Rectangle(-956.6,-220,1336.7,515), new cjs.Rectangle(-890,-220,1270,515), new cjs.Rectangle(-823.3,-220,1203.4,515), new cjs.Rectangle(-756.6,-220,1136.7,515), new cjs.Rectangle(-690,-220,1070,515), new cjs.Rectangle(-623.3,-220,1003.4,515), new cjs.Rectangle(-556.6,-220,936.7,515), new cjs.Rectangle(-490,-220,870,515), new cjs.Rectangle(-423.3,-220,803.4,515), new cjs.Rectangle(-356.6,-220,736.7,515), new cjs.Rectangle(-290,-220,670,515), new cjs.Rectangle(-308,-220,688,515), new cjs.Rectangle(-326,-220,706,515), new cjs.Rectangle(-344,-220,724,515), new cjs.Rectangle(-362,-220,742,515), rect=new cjs.Rectangle(-380,-220,760,515), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-378.2,-220,758.3,515), new cjs.Rectangle(-376.5,-220,756.6,515), new cjs.Rectangle(-374.8,-220,754.9,515), new cjs.Rectangle(-373.1,-220,753.2,515), new cjs.Rectangle(-371.3,-220,751.4,515), new cjs.Rectangle(-372.2,-220,752.3,515), new cjs.Rectangle(-373.1,-220,753.2,515), new cjs.Rectangle(-373.9,-220,754,515), new cjs.Rectangle(-374.8,-220,754.8,515), new cjs.Rectangle(-375.6,-220,755.6,515), new cjs.Rectangle(-376.5,-220,756.5,515), new cjs.Rectangle(-377.3,-220,757.4,515), new cjs.Rectangle(-378.2,-220,758.2,515), new cjs.Rectangle(-379.1,-220,759.2,515), rect=new cjs.Rectangle(-380,-220,760,515), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-220,750,515), new cjs.Rectangle(-380,-220,740,515), new cjs.Rectangle(-380,-220,730,515), new cjs.Rectangle(-380,-220,720,515), new cjs.Rectangle(-380,-220,710,515), new cjs.Rectangle(-380,-220,774,515), new cjs.Rectangle(-380,-220,838,515), new cjs.Rectangle(-380,-220,902,515), new cjs.Rectangle(-380,-220,966,515), new cjs.Rectangle(-380,-220,1030,515), new cjs.Rectangle(-380,-220,1094,515), new cjs.Rectangle(-380,-220,1158,515), new cjs.Rectangle(-380,-220,1222,515), new cjs.Rectangle(-380,-220,1286,515), new cjs.Rectangle(-380,-220,1350,515), new cjs.Rectangle(-380,-220,1414,515), new cjs.Rectangle(-380,-220,1478,515), new cjs.Rectangle(-380,-220,1542,515), new cjs.Rectangle(-380,-220,1606,515), new cjs.Rectangle(-380,-220,1670,515), new cjs.Rectangle(-390,-220,1680,515), new cjs.Rectangle(-400,-220,1690,515), new cjs.Rectangle(-410,-220,1700,515), new cjs.Rectangle(-420,-220,1710,515), new cjs.Rectangle(-430,-220,1720,515), new cjs.Rectangle(-340.6,-220,1630.7,515), new cjs.Rectangle(-251.3,-220,1541.4,515), new cjs.Rectangle(-162,-220,1452,515), rect=new cjs.Rectangle(-135,-220,1425,515), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":179});

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
	this.frame_44 = function() {
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
	this.frame_109 = function() {
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
	this.frame_129 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(20).call(this.frame_44).wait(65).call(this.frame_109).wait(20).call(this.frame_129).wait(51));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(110,265,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(55,265,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(0,265,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(-55,265,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_2_mc();
	this.instance_4.setTransform(-110,265);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(180));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({x:-1100},0).wait(43).to({x:-100},15).to({x:-190},5).wait(15).to({scaleX:0.95,scaleY:0.96},5).to({scaleX:1,scaleY:1},10).wait(35).to({x:-240},5).to({x:1100},15).wait(31));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(190,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({x:-1100},0).wait(23).to({x:280},15).to({x:190},5).wait(65).to({x:140},5).to({x:1100},15).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-220,760,515);
p.frameBounds = [rect, rect=new cjs.Rectangle(-1290,-220,1425,515), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1290,-220,1484,515), new cjs.Rectangle(-1290,-220,1576,515), new cjs.Rectangle(-1290,-220,1668,515), new cjs.Rectangle(-1290,-220,1760,515), new cjs.Rectangle(-1290,-220,1742,515), new cjs.Rectangle(-1290,-220,1724,515), new cjs.Rectangle(-1290,-220,1706,515), new cjs.Rectangle(-1290,-220,1688,515), new cjs.Rectangle(-1290,-220,1670,515), new cjs.Rectangle(-1223.3,-220,1603.4,515), new cjs.Rectangle(-1156.6,-220,1536.7,515), new cjs.Rectangle(-1090,-220,1470,515), new cjs.Rectangle(-1023.3,-220,1403.4,515), new cjs.Rectangle(-956.6,-220,1336.7,515), new cjs.Rectangle(-890,-220,1270,515), new cjs.Rectangle(-823.3,-220,1203.4,515), new cjs.Rectangle(-756.6,-220,1136.7,515), new cjs.Rectangle(-690,-220,1070,515), new cjs.Rectangle(-623.3,-220,1003.4,515), new cjs.Rectangle(-556.6,-220,936.7,515), new cjs.Rectangle(-490,-220,870,515), new cjs.Rectangle(-423.3,-220,803.4,515), new cjs.Rectangle(-356.6,-220,736.7,515), new cjs.Rectangle(-290,-220,670,515), new cjs.Rectangle(-308,-220,688,515), new cjs.Rectangle(-326,-220,706,515), new cjs.Rectangle(-344,-220,724,515), new cjs.Rectangle(-362,-220,742,515), rect=new cjs.Rectangle(-380,-220,760,515), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-378.2,-220,758.3,515), new cjs.Rectangle(-376.5,-220,756.6,515), new cjs.Rectangle(-374.8,-220,754.8,515), new cjs.Rectangle(-373.1,-220,753.1,515), new cjs.Rectangle(-371.3,-220,751.4,515), new cjs.Rectangle(-372.2,-220,752.3,515), new cjs.Rectangle(-373.1,-220,753.1,515), new cjs.Rectangle(-373.9,-220,754,515), new cjs.Rectangle(-374.8,-220,754.8,515), new cjs.Rectangle(-375.6,-220,755.7,515), new cjs.Rectangle(-376.5,-220,756.6,515), new cjs.Rectangle(-377.4,-220,757.4,515), new cjs.Rectangle(-378.3,-220,758.3,515), new cjs.Rectangle(-379.2,-220,759.2,515), rect=new cjs.Rectangle(-380,-220,760,515), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380,-220,750,515), new cjs.Rectangle(-380,-220,740,515), new cjs.Rectangle(-380,-220,730,515), new cjs.Rectangle(-380,-220,720,515), new cjs.Rectangle(-380,-220,710,515), new cjs.Rectangle(-380,-220,774,515), new cjs.Rectangle(-380,-220,838,515), new cjs.Rectangle(-380,-220,902,515), new cjs.Rectangle(-380,-220,966,515), new cjs.Rectangle(-380,-220,1030,515), new cjs.Rectangle(-380,-220,1094,515), new cjs.Rectangle(-380,-220,1158,515), new cjs.Rectangle(-380,-220,1222,515), new cjs.Rectangle(-380,-220,1286,515), new cjs.Rectangle(-380,-220,1350,515), new cjs.Rectangle(-380,-220,1414,515), new cjs.Rectangle(-380,-220,1478,515), new cjs.Rectangle(-380,-220,1542,515), new cjs.Rectangle(-380,-220,1606,515), new cjs.Rectangle(-380,-220,1670,515), new cjs.Rectangle(-390,-220,1680,515), new cjs.Rectangle(-400,-220,1690,515), new cjs.Rectangle(-410,-220,1700,515), new cjs.Rectangle(-420,-220,1710,515), new cjs.Rectangle(-430,-220,1720,515), new cjs.Rectangle(-340.6,-220,1630.7,515), new cjs.Rectangle(-251.3,-220,1541.4,515), new cjs.Rectangle(-162,-220,1452,515), rect=new cjs.Rectangle(-140,-220,1430,515), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.closet_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.tie_0 = new lib.tie_0_mc();
	this.tie_0.setTransform(148,-80);

	this.boutonniere_0 = new lib.boutonniere_0_mc();
	this.boutonniere_0.setTransform(148,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tie_0}]}).to({state:[{t:this.boutonniere_0}]},4).wait(4));

	// options
	this.tie_3 = new lib.tie_3_mc();
	this.tie_3.setTransform(0,105);

	this.tie_2 = new lib.tie_2_mc();
	this.tie_2.setTransform(0,-20);

	this.tie_1 = new lib.tie_1_mc();
	this.tie_1.setTransform(0,-120);

	this.tie_6 = new lib.tie_6_mc();
	this.tie_6.setTransform(0,90);

	this.tie_5 = new lib.tie_5_mc();
	this.tie_5.setTransform(0,-5);

	this.tie_4 = new lib.tie_4_mc();
	this.tie_4.setTransform(0,-100);

	this.tie_9 = new lib.tie_9_mc();
	this.tie_9.setTransform(0,-5);

	this.tie_8 = new lib.tie_8_mc();
	this.tie_8.setTransform(0,90);

	this.tie_7 = new lib.tie_7_mc();
	this.tie_7.setTransform(0,-100);

	this.tie_12 = new lib.tie_12_mc();
	this.tie_12.setTransform(0,-5);

	this.tie_11 = new lib.tie_11_mc();
	this.tie_11.setTransform(0,90);

	this.tie_10 = new lib.tie_10_mc();
	this.tie_10.setTransform(0,-100);

	this.boutonniere_2 = new lib.boutonniere_2_2_mc();
	this.boutonniere_2.setTransform(0,80);

	this.boutonniere_1 = new lib.boutonniere_1_2_mc();
	this.boutonniere_1.setTransform(60,-85);

	this.boutonniere_9 = new lib.boutonniere_9_2_mc();
	this.boutonniere_9.setTransform(-60,-70);

	this.boutonniere_4 = new lib.boutonniere_4_2_mc();
	this.boutonniere_4.setTransform(0,80);

	this.boutonniere_3 = new lib.boutonniere_3_2_mc();
	this.boutonniere_3.setTransform(0,-90);

	this.boutonniere_5 = new lib.boutonniere_5_2_mc();
	this.boutonniere_5.setTransform(0,80);

	this.boutonniere_6 = new lib.boutonniere_6_2_mc();
	this.boutonniere_6.setTransform(0,-85);

	this.boutonniere_8 = new lib.boutonniere_8_2_mc();
	this.boutonniere_8.setTransform(0,80);

	this.boutonniere_7 = new lib.boutonniere_7_2_mc();
	this.boutonniere_7.setTransform(0,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tie_1},{t:this.tie_2},{t:this.tie_3}]}).to({state:[{t:this.tie_4},{t:this.tie_5},{t:this.tie_6}]},1).to({state:[{t:this.tie_7},{t:this.tie_8},{t:this.tie_9}]},1).to({state:[{t:this.tie_10},{t:this.tie_11},{t:this.tie_12}]},1).to({state:[{t:this.boutonniere_9},{t:this.boutonniere_1},{t:this.boutonniere_2}]},1).to({state:[{t:this.boutonniere_3},{t:this.boutonniere_4}]},1).to({state:[{t:this.boutonniere_6},{t:this.boutonniere_5}]},1).to({state:[{t:this.boutonniere_7},{t:this.boutonniere_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-165,254,345);
p.frameBounds = [rect, rect=new cjs.Rectangle(-80,-145,254,280), rect, new cjs.Rectangle(-80,-147,254,286), new cjs.Rectangle(-127.8,-168.9,301.8,328.9), new cjs.Rectangle(-74.5,-184.2,248.6,350.1), new cjs.Rectangle(-75,-186.7,249.1,355.6), new cjs.Rectangle(-76.8,-177.7,250.8,350.9)];


(lib.closet_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.bouquet_0 = new lib.bouquet_0_mc();
	this.bouquet_0.setTransform(165,-55);

	this.wreath_0 = new lib.wreath_0_mc();
	this.wreath_0.setTransform(165,-55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bouquet_0}]}).to({state:[{t:this.wreath_0}]},4).wait(4));

	// options
	this.bouquet_3 = new lib.bouquet_3_1_mc();
	this.bouquet_3.setTransform(-40,-75);

	this.bouquet_1 = new lib.bouquet_1_1_mc();
	this.bouquet_1.setTransform(20,70);

	this.bouquet_4 = new lib.bouquet_4_1_mc();
	this.bouquet_4.setTransform(-40,-70);

	this.bouquet_7 = new lib.bouquet_7_1_mc();
	this.bouquet_7.setTransform(20,70);

	this.bouquet_6 = new lib.bouquet_6_1_mc();
	this.bouquet_6.setTransform(-40,-80);

	this.bouquet_9 = new lib.bouquet_9_1_mc();
	this.bouquet_9.setTransform(20,70);

	this.bouquet_5 = new lib.bouquet_5_1_mc();
	this.bouquet_5.setTransform(0,80);

	this.bouquet_8 = new lib.bouquet_8_1_mc();
	this.bouquet_8.setTransform(50,-80);

	this.bouquet_2 = new lib.bouquet_2_1_mc();
	this.bouquet_2.setTransform(-50,-20);

	this.wreath_9 = new lib.wreath_9_1_mc();

	this.wreath_3 = new lib.wreath_3_1_mc();
	this.wreath_3.setTransform(0,110);

	this.wreath_2 = new lib.wreath_2_1_mc();
	this.wreath_2.setTransform(0,-100);

	this.wreath_8 = new lib.wreath_8_1_mc();
	this.wreath_8.setTransform(0,70);

	this.wreath_4 = new lib.wreath_4_1_mc();
	this.wreath_4.setTransform(0,-70);

	this.wreath_6 = new lib.wreath_6_1_mc();
	this.wreath_6.setTransform(0,70);

	this.wreath_7 = new lib.wreath_7_1_mc();
	this.wreath_7.setTransform(0,-70);

	this.wreath_5 = new lib.wreath_5_1_mc();
	this.wreath_5.setTransform(0,70);

	this.wreath_1 = new lib.wreath_1_1_mc();
	this.wreath_1.setTransform(0,-70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bouquet_1},{t:this.bouquet_3}]}).to({state:[{t:this.bouquet_7},{t:this.bouquet_4}]},1).to({state:[{t:this.bouquet_9},{t:this.bouquet_6}]},1).to({state:[{t:this.bouquet_2},{t:this.bouquet_8},{t:this.bouquet_5}]},1).to({state:[{t:this.wreath_2},{t:this.wreath_3},{t:this.wreath_9}]},1).to({state:[{t:this.wreath_4},{t:this.wreath_8}]},1).to({state:[{t:this.wreath_7},{t:this.wreath_6}]},1).to({state:[{t:this.wreath_1},{t:this.wreath_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-139.6,-155.5,330.6,307.2);
p.frameBounds = [rect, new cjs.Rectangle(-133,-156,324,312.1), new cjs.Rectangle(-132.6,-165,323.7,321.1), new cjs.Rectangle(-139.8,-161.4,330.9,322), new cjs.Rectangle(-104.6,-158.3,295.6,331), new cjs.Rectangle(-102.5,-134.5,293.6,276.2), new cjs.Rectangle(-91.4,-135.1,282.5,270.2), new cjs.Rectangle(-105.8,-146.2,296.8,291.5)];


(lib.closet_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.top_2 = new lib.top_2_2_mc();
	this.top_2.setTransform(70,-176);

	this.bottom_2 = new lib.bottom_2_2_mc();
	this.bottom_2.setTransform(-60,-179);

	this.top_3 = new lib.top_3_2_mc();
	this.top_3.setTransform(-60,-179);

	this.bottom_3 = new lib.bottom_3_2_mc();
	this.bottom_3.setTransform(70,-176);

	this.top_4 = new lib.top_4_2_mc();
	this.top_4.setTransform(70,-176);

	this.bottom_4 = new lib.bottom_4_2_mc();
	this.bottom_4.setTransform(-60,-179);

	this.top_5 = new lib.top_5_2_mc();
	this.top_5.setTransform(70,-176);

	this.bottom_5 = new lib.bottom_5_2_mc();
	this.bottom_5.setTransform(-60,-179);

	this.top_6 = new lib.top_6_2_mc();
	this.top_6.setTransform(-60,-179);

	this.bottom_6 = new lib.bottom_6_2_mc();
	this.bottom_6.setTransform(70,-176);

	this.top_7 = new lib.top_7_2_mc();
	this.top_7.setTransform(70,-176);

	this.bottom_7 = new lib.bottom_7_2_mc();
	this.bottom_7.setTransform(-60,-179);

	this.top_8 = new lib.top_8_2_mc();
	this.top_8.setTransform(-60,-179);

	this.bottom_8 = new lib.bottom_8_2_mc();
	this.bottom_8.setTransform(70,-176);

	this.top_9 = new lib.top_9_2_mc();
	this.top_9.setTransform(70,-176);

	this.bottom_9 = new lib.bottom_9_2_mc();
	this.bottom_9.setTransform(-60,-179);

	this.top_1 = new lib.top_1_2_mc();
	this.top_1.setTransform(-60,-179);

	this.bottom_1 = new lib.bottom_1_2_mc();
	this.bottom_1.setTransform(70,-176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bottom_2},{t:this.top_2}]}).to({state:[{t:this.bottom_3},{t:this.top_3}]},1).to({state:[{t:this.bottom_4},{t:this.top_4}]},1).to({state:[{t:this.bottom_5},{t:this.top_5}]},1).to({state:[{t:this.bottom_6},{t:this.top_6}]},1).to({state:[{t:this.bottom_7},{t:this.top_7}]},1).to({state:[{t:this.bottom_8},{t:this.top_8}]},1).to({state:[{t:this.bottom_9},{t:this.top_9}]},1).to({state:[{t:this.bottom_1},{t:this.top_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-126.7,-184.2,278,253.1);
p.frameBounds = [rect, new cjs.Rectangle(-132,-183.2,256.4,249.2), new cjs.Rectangle(-122.2,-181.9,275.9,247.5), new cjs.Rectangle(-125.8,-183.5,282.4,253.7), new cjs.Rectangle(-130.5,-182.5,255.7,254.6), new cjs.Rectangle(-125.5,-183.8,279.2,249.2), new cjs.Rectangle(-128.4,-183.2,258.6,262.6), new cjs.Rectangle(-123.3,-185,275,251.3), new cjs.Rectangle(-130,-185.4,260,267.4)];


(lib.bodyDressupPanel_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_2_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-165,254,345);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_2_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-139.6,-155.5,330.6,307.2);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-126.7,-184.2,278,253.1);
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


(lib.anim_judy_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.judy_main_mc();
	this.instance.setTransform(0,0,1,0.992);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1},39).to({scaleY:0.99},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-357,360,714);
p.frameBounds = [rect, new cjs.Rectangle(-180,-357,360,714.2), new cjs.Rectangle(-180,-357.1,360,714.3), new cjs.Rectangle(-180,-357.2,360,714.5), new cjs.Rectangle(-180,-357.2,360,714.6), new cjs.Rectangle(-180,-357.3,360,714.8), new cjs.Rectangle(-180,-357.4,360,714.9), new cjs.Rectangle(-180,-357.5,360,715.1), new cjs.Rectangle(-180,-357.6,360,715.2), new cjs.Rectangle(-180,-357.6,360,715.3), new cjs.Rectangle(-180,-357.7,360,715.5), new cjs.Rectangle(-180,-357.8,360,715.7), new cjs.Rectangle(-180,-357.9,360,715.8), new cjs.Rectangle(-180,-357.9,360,716), new cjs.Rectangle(-180,-358,360,716.2), new cjs.Rectangle(-180,-358.1,360,716.3), new cjs.Rectangle(-180,-358.2,360,716.5), new cjs.Rectangle(-180,-358.3,360,716.6), new cjs.Rectangle(-180,-358.3,360,716.8), new cjs.Rectangle(-180,-358.4,360,716.9), new cjs.Rectangle(-180,-358.5,360,717.1), new cjs.Rectangle(-180,-358.6,360,717.2), new cjs.Rectangle(-180,-358.6,360,717.3), new cjs.Rectangle(-180,-358.7,360,717.6), new cjs.Rectangle(-180,-358.8,360,717.7), new cjs.Rectangle(-180,-358.9,360,717.8), new cjs.Rectangle(-180,-358.9,360,718), new cjs.Rectangle(-180,-359,360,718.2), new cjs.Rectangle(-180,-359.1,360,718.3), new cjs.Rectangle(-180,-359.2,360,718.5), new cjs.Rectangle(-180,-359.2,360,718.6), new cjs.Rectangle(-180,-359.3,360,718.8), new cjs.Rectangle(-180,-359.4,360,718.9), new cjs.Rectangle(-180,-359.5,360,719.1), new cjs.Rectangle(-180,-359.6,360,719.2), new cjs.Rectangle(-180,-359.6,360,719.3), new cjs.Rectangle(-180,-359.7,360,719.5), new cjs.Rectangle(-180,-359.8,360,719.7), new cjs.Rectangle(-180,-359.9,360,719.8), new cjs.Rectangle(-180,-360,360,720), new cjs.Rectangle(-180,-359.9,360,719.8), new cjs.Rectangle(-180,-359.8,360,719.7), new cjs.Rectangle(-180,-359.7,360,719.6), new cjs.Rectangle(-180,-359.6,360,719.4), new cjs.Rectangle(-180,-359.6,360,719.3), new cjs.Rectangle(-180,-359.5,360,719.1), new cjs.Rectangle(-180,-359.4,360,719), new cjs.Rectangle(-180,-359.4,360,718.8), new cjs.Rectangle(-180,-359.3,360,718.7), new cjs.Rectangle(-180,-359.2,360,718.5), new cjs.Rectangle(-180,-359.1,360,718.3), new cjs.Rectangle(-180,-359,360,718.2), new cjs.Rectangle(-180,-359,360,718.1), new cjs.Rectangle(-180,-358.9,360,717.9), new cjs.Rectangle(-180,-358.8,360,717.8), new cjs.Rectangle(-180,-358.8,360,717.6), new cjs.Rectangle(-180,-358.7,360,717.5), new cjs.Rectangle(-180,-358.6,360,717.3), new cjs.Rectangle(-180,-358.5,360,717.2), new cjs.Rectangle(-180,-358.5,360,717), new cjs.Rectangle(-180,-358.4,360,716.8), new cjs.Rectangle(-180,-358.3,360,716.7), new cjs.Rectangle(-180,-358.2,360,716.6), new cjs.Rectangle(-180,-358.1,360,716.4), new cjs.Rectangle(-180,-358.1,360,716.3), new cjs.Rectangle(-180,-358,360,716.1), new cjs.Rectangle(-180,-357.9,360,716), new cjs.Rectangle(-180,-357.9,360,715.8), new cjs.Rectangle(-180,-357.8,360,715.7), new cjs.Rectangle(-180,-357.7,360,715.5), new cjs.Rectangle(-180,-357.6,360,715.3), new cjs.Rectangle(-180,-357.5,360,715.2), new cjs.Rectangle(-180,-357.5,360,715.1), new cjs.Rectangle(-180,-357.4,360,714.9), new cjs.Rectangle(-180,-357.3,360,714.8), new cjs.Rectangle(-180,-357.3,360,714.6), new cjs.Rectangle(-180,-357.2,360,714.5), new cjs.Rectangle(-180,-357.1,360,714.3), new cjs.Rectangle(-180,-357,360,714.2), new cjs.Rectangle(-180,-357,360,714)];


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
p.nominalBounds = rect = new cjs.Rectangle(-32,-32,64,64);
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
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
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
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
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
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
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
	this.instance.setTransform(0,0,0.889,0.889,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.prev_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_4_mc();
	this.instance.setTransform(0,0,0.75,0.75,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.prev_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_3_mc();
	this.instance.setTransform(0,0,0.75,0.75,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.prev_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_2_mc();
	this.instance.setTransform(0,0,0.75,0.75,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
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
	this.instance.setTransform(0,0,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.next_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_0_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E60000").s().p("AzhIlIAAxJMAnDAAAIAARJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-125,-55,250,110)];


(lib.next_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_4_mc();
	this.instance.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.next_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_3_mc();
	this.instance.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.next_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_2_mc();
	this.instance.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
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


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{location_1:0,location_2:1,location_3:2,location_4:3,location_5:4});

	// body
	this.frame_1_mc = new lib.frame_locations_1_mc();

	this.frame_2_mc = new lib.frame_locations_2_mc();

	this.frame_3_mc = new lib.frame_locations_3_mc();

	this.frame_4_mc = new lib.frame_locations_4_mc();

	this.frame_5_mc = new lib.frame_locations_5_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).to({state:[{t:this.frame_4_mc}]},1).to({state:[{t:this.frame_5_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380,-220,760,515);
p.frameBounds = [rect, rect, rect, rect, rect];


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


(lib.dressupPanel_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(150,90);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-150,90);

	this.set_4 = new lib.set_0_mc();
	this.set_4.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_4},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-270,420,920);
p.frameBounds = [rect];


(lib.dressupPanel_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(170,90);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-170,90);

	this.set_5 = new lib.set_0_mc();
	this.set_5.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_5},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-270,440,920);
p.frameBounds = [rect];


(lib.dressupPanel_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(150,90);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-150,90);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-270,420,920);
p.frameBounds = [rect];


(lib.dressupPanel_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(170,90);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-170,90);

	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_3},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-270,440,920);
p.frameBounds = [rect];


(lib.dressupPanel_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_4_mc();
	this.next_mc.setTransform(110,140);

	this.prev_mc = new lib.prev_4_mc();
	this.prev_mc.setTransform(-110,140);

	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_3},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-290,400,940);
p.frameBounds = [rect];


(lib.dressupPanel_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(100,140);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-100,140);

	this.set_4 = new lib.set_0_mc();
	this.set_4.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_4},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

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
	this.next_mc.setTransform(90,120);

	this.prev_mc = new lib.prev_4_mc();
	this.prev_mc.setTransform(-90,120);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-340,460,990);
p.frameBounds = [rect];


(lib.dressupPanel_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(90,110);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-90,110);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-340,460,990);
p.frameBounds = [rect];


(lib.dressupPanel_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(170,90);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-170,90);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-270,440,920);
p.frameBounds = [rect];


(lib.decor_shadow_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_3_3_mc();
	this.instance.setTransform(790,110);

	this.instance_1 = new lib.blinking_light_3_3_mc();
	this.instance_1.setTransform(140,320);

	this.instance_2 = new lib.blinking_light_3_3_mc();
	this.instance_2.setTransform(200,495);

	this.instance_3 = new lib.blinking_light_3_3_mc();
	this.instance_3.setTransform(300,260);

	this.instance_4 = new lib.blinking_light_3_3_mc();
	this.instance_4.setTransform(520,555);

	this.instance_5 = new lib.blinking_light_3_3_mc();
	this.instance_5.setTransform(755,280);

	this.instance_6 = new lib.blinking_light_3_3_mc();
	this.instance_6.setTransform(545,225);

	this.instance_7 = new lib.blinking_light_3_3_mc();
	this.instance_7.setTransform(250,40);

	this.instance_8 = new lib.blinking_light_3_3_mc();
	this.instance_8.setTransform(570,445);

	this.instance_9 = new lib.blinking_light_3_3_mc();
	this.instance_9.setTransform(230,420);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(116,16,698,563);
p.frameBounds = [rect];


(lib.decor_shadow_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_3_3_mc();
	this.instance.setTransform(635,210);

	this.instance_1 = new lib.blinking_light_3_3_mc();
	this.instance_1.setTransform(200,455);

	this.instance_2 = new lib.blinking_light_3_3_mc();
	this.instance_2.setTransform(260,560);

	this.instance_3 = new lib.blinking_light_3_3_mc();
	this.instance_3.setTransform(65,415);

	this.instance_4 = new lib.blinking_light_3_3_mc();
	this.instance_4.setTransform(500,580);

	this.instance_5 = new lib.blinking_light_3_3_mc();
	this.instance_5.setTransform(695,405);

	this.instance_6 = new lib.blinking_light_3_3_mc();
	this.instance_6.setTransform(375,136);

	this.instance_7 = new lib.blinking_light_3_3_mc();
	this.instance_7.setTransform(268,235);

	this.instance_8 = new lib.blinking_light_3_3_mc();
	this.instance_8.setTransform(565,420);

	this.instance_9 = new lib.blinking_light_3_3_mc();
	this.instance_9.setTransform(208,136);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(41,112,678,492);
p.frameBounds = [rect];


(lib.background_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(6.1,316.1,0.8,0.8,0,0,0,0.1,0.1);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(86.1,326.1,0.65,0.65,0,0,0,0.1,0.1);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(802.1,319.1,0.8,0.8,0,0,0,0.1,0.1);

	this.instance_3 = new lib.blinking_light_3_2_mc();
	this.instance_3.setTransform(677.1,345.1,0.65,0.65,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_4 = new lib.background_8_img();
	this.instance_4.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(757.1,309.1,0.65,0.65,0,0,0,0.1,0.1);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(-20.9,422.1,0.65,0.65,0,0,0,0.1,0.1);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(21,213,0.8,0.8);

	this.instance_3 = new lib.blinking_light_3_2_mc();
	this.instance_3.setTransform(786,192,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_4 = new lib.background_6_img();
	this.instance_4.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
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


(lib.Bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_3_mc();
	this.instance.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-15,30,30);
p.frameBounds = [rect];


(lib.quest_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":289});

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
	this.frame_69 = function() {
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
	this.frame_129 = function() {
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
	this.frame_269 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(65).call(this.frame_69).wait(60).call(this.frame_129).wait(140).call(this.frame_269).wait(21));

	// decor
	this.instance = new lib.forward_mc();
	this.instance.setTransform(700,700,0.632,0.632);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(269).to({_off:false},0).to({scaleX:0.84,scaleY:0.84,y:450},10).to({y:500},5).wait(6));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(560,700,0.737,0.737);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(29).to({regX:0.1,regY:0.1,scaleX:0.58,scaleY:0.58,x:560.1,y:700.1},0).to({regX:0,regY:0,scaleX:0.74,scaleY:0.74,x:560,y:470},10).to({y:520},5).wait(5).to({regX:0.1,regY:0.1,scaleX:0.63,scaleY:0.63,x:560.1,y:520.1},5).to({regX:0,regY:0,scaleX:0.74,scaleY:0.74,x:560,y:520},10).to({y:470},5).to({y:700},10).wait(211));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_5_mc();
	this.dressupPanel_mc.setTransform(1500,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(9).to({x:460},15).to({x:560},5).wait(40).to({x:500},5).to({x:1500},15).wait(201));

	// photoflash
	this.photoflash_comp = new lib.photoflash_0_mc();
	this.photoflash_comp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.photoflash_comp).wait(154).to({_off:false},0).to({_off:true},81).wait(55));

	// hero_1
	this.hero_1 = new lib.judy_mc();
	this.hero_1.setTransform(1500,345);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(129).to({x:440},20).to({x:510},5).wait(136));

	// hero_2
	this.hero_2 = new lib.nick_mc();
	this.hero_2.setTransform(180,310);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(89).to({x:280},20).wait(181));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(31.5,28,1678.5,922);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(31.5,28,1609.2,922), rect=new cjs.Rectangle(31.5,28,1573.9,922), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(31.5,28,1611.9,922), new cjs.Rectangle(31.5,28,1678.5,922), new cjs.Rectangle(36.5,28,1673.5,922), new cjs.Rectangle(41.5,28,1668.5,922), new cjs.Rectangle(46.5,28,1663.5,922), new cjs.Rectangle(51.5,28,1658.5,922), new cjs.Rectangle(56.5,28,1653.5,922), new cjs.Rectangle(61.5,28,1648.5,922), new cjs.Rectangle(66.5,28,1643.5,922), new cjs.Rectangle(71.5,28,1638.5,922), new cjs.Rectangle(76.5,28,1633.5,922), new cjs.Rectangle(81.5,28,1628.5,922), new cjs.Rectangle(86.5,28,1623.5,922), new cjs.Rectangle(91.5,28,1618.5,922), new cjs.Rectangle(96.5,28,1613.5,922), new cjs.Rectangle(101.5,28,1608.5,922), new cjs.Rectangle(106.5,28,1603.5,922), new cjs.Rectangle(111.5,28,1598.5,922), new cjs.Rectangle(116.5,28,1593.5,922), new cjs.Rectangle(121.5,28,1588.5,922), new cjs.Rectangle(126.5,28,1583.5,922), rect=new cjs.Rectangle(131.5,28,1578.5,922), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-300,-387,2010,1337), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(131.5,28,1578.5,922), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":209});

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
	this.frame_69 = function() {
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
	this.frame_189 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(65).call(this.frame_69).wait(120).call(this.frame_189).wait(21));

	// decor
	this.instance = new lib.forward_mc();
	this.instance.setTransform(700,700,0.632,0.632);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(189).to({_off:false},0).to({scaleX:0.84,scaleY:0.84,y:450},10).to({y:500},5).wait(6));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(240,700,0.737,0.737);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(29).to({regX:0.1,regY:0.1,scaleX:0.63,scaleY:0.63,x:240.1,y:700.1},0).to({regX:0,regY:0,scaleX:0.74,scaleY:0.74,x:240,y:470},10).to({y:520},5).wait(5).to({regX:0.1,regY:0.1,scaleX:0.63,scaleY:0.63,x:240.1,y:520.1},5).to({regX:0,regY:0,scaleX:0.74,scaleY:0.74,x:240,y:480},10).to({y:700},10).wait(136));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_4_mc();
	this.dressupPanel_mc.setTransform(-700,320);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(9).to({x:340},15).to({x:240},5).wait(40).to({x:300},5).to({x:-700},15).wait(121));

	// hero
	this.hero_1 = new lib.judy_mc();
	this.hero_1.setTransform(610,345);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(89).to({x:410},20).wait(101));

	// decor
	this.instance_1 = new lib.decor_shadow_1_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89).to({_off:false},0).to({alpha:1},20).wait(101));

	// shadow
	this.instance_2 = new lib.shadow_dressup_mc();
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(89).to({_off:false},0).to({alpha:1},20).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-920,50,1635.4,920);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-850.6,50,1566.1,920), new cjs.Rectangle(-781.3,50,1496.8,920), new cjs.Rectangle(-712,50,1427.4,920), new cjs.Rectangle(-642.7,50,1358.1,920), new cjs.Rectangle(-573.3,50,1288.8,920), new cjs.Rectangle(-504,50,1219.4,920), new cjs.Rectangle(-434.7,50,1150.1,920), new cjs.Rectangle(-365.3,50,1080.7,920), new cjs.Rectangle(-296,50,1011.4,920), new cjs.Rectangle(-226.6,50,942.1,920), new cjs.Rectangle(-157.3,50,872.8,920), new cjs.Rectangle(-88,50,803.4,920), new cjs.Rectangle(-18.6,50,734.1,920), new cjs.Rectangle(50.7,50,664.8,920), new cjs.Rectangle(120,50,595.4,920), new cjs.Rectangle(100,50,615.4,920), new cjs.Rectangle(80,50,635.4,920), new cjs.Rectangle(60,50,655.4,920), new cjs.Rectangle(40,50,675.4,920), rect=new cjs.Rectangle(20,50,695.4,920), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(32,50,683.4,920), new cjs.Rectangle(44,50,671.4,920), new cjs.Rectangle(56,50,659.4,920), new cjs.Rectangle(68,50,647.4,920), new cjs.Rectangle(80,50,635.4,920), new cjs.Rectangle(13.4,50,702.1,920), new cjs.Rectangle(-53.3,50,768.8,920), new cjs.Rectangle(-120,50,835.4,920), new cjs.Rectangle(-186.6,50,902.1,920), new cjs.Rectangle(-253.3,50,968.8,920), new cjs.Rectangle(-320,50,1035.4,920), new cjs.Rectangle(-386.6,50,1102.1,920), new cjs.Rectangle(-453.3,50,1168.8,920), new cjs.Rectangle(-520,50,1235.4,920), new cjs.Rectangle(-586.6,50,1302.1,920), new cjs.Rectangle(-653.3,50,1368.8,920), new cjs.Rectangle(-720,50,1435.4,920), new cjs.Rectangle(-786.6,50,1502.1,920), new cjs.Rectangle(-853.3,50,1568.8,920), rect=new cjs.Rectangle(-920,-10,2130,980), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":209});

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
	this.frame_69 = function() {
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
	this.frame_189 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(65).call(this.frame_69).wait(120).call(this.frame_189).wait(21));

	// decor
	this.instance = new lib.forward_mc();
	this.instance.setTransform(700,700,0.632,0.632);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(189).to({_off:false},0).to({scaleX:0.84,scaleY:0.84,y:450},10).to({y:500},5).wait(6));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(700,700,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(29).to({regX:0.1,regY:0.1,scaleX:0.63,scaleY:0.63,x:700.1,y:700.1},0).to({regX:0,regY:0,scaleX:0.84,scaleY:0.84,x:700,y:450},10).to({y:500},5).wait(5).to({regX:0.1,regY:0.1,scaleX:0.63,scaleY:0.63,x:700.1,y:500.1},5).to({regX:0,regY:0,scaleX:0.84,scaleY:0.84,x:700,y:500},10).wait(5).to({y:450},5).to({y:700},10).wait(126));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_3_mc();
	this.dressupPanel_mc.setTransform(-700,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(9).to({x:340},15).to({x:240},5).wait(40).to({x:300},5).to({x:-700},15).wait(121));

	// hero
	this.hero_2 = new lib.nick_mc();
	this.hero_2.setTransform(560,315);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(89).to({x:360},20).wait(101));

	// decor
	this.instance_1 = new lib.decor_shadow_2_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89).to({_off:false},0).to({alpha:1},20).wait(101));

	// shadow
	this.instance_2 = new lib.shadow_dressup_mc();
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(89).to({_off:false},0).to({alpha:1},20).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-910,30,1690,920);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-910,30,1715.3,920), rect=new cjs.Rectangle(-910,30,1690,920), rect, rect, new cjs.Rectangle(-910,30,1715.3,920), rect=new cjs.Rectangle(-910,30,1690,920), rect, new cjs.Rectangle(-840.6,30,1620.7,920), new cjs.Rectangle(-771.3,30,1576.6,920), new cjs.Rectangle(-702,30,1482,920), new cjs.Rectangle(-632.7,30,1412.7,920), new cjs.Rectangle(-563.3,30,1343.4,920), new cjs.Rectangle(-494,30,1299.3,920), new cjs.Rectangle(-424.7,30,1204.7,920), new cjs.Rectangle(-355.3,30,1135.3,920), new cjs.Rectangle(-286,30,1066,920), new cjs.Rectangle(-216.6,30,1021.9,920), new cjs.Rectangle(-147.3,30,927.4,920), new cjs.Rectangle(-78,30,858,920), new cjs.Rectangle(-8.6,30,788.7,920), new cjs.Rectangle(60.7,30,744.6,920), new cjs.Rectangle(130,30,650,920), new cjs.Rectangle(110,30,670,920), new cjs.Rectangle(90,30,690,920), new cjs.Rectangle(70,30,735.3,920), new cjs.Rectangle(50,30,730,920), new cjs.Rectangle(30,30,730,920), new cjs.Rectangle(30,30,732,920), new cjs.Rectangle(30,30,734,920), new cjs.Rectangle(30,30,736,920), new cjs.Rectangle(30,30,738,920), new cjs.Rectangle(30,30,740,920), new cjs.Rectangle(30,30,742,920), new cjs.Rectangle(30,30,744,920), new cjs.Rectangle(30,30,746,920), new cjs.Rectangle(30,30,748,920), rect=new cjs.Rectangle(30,30,750,920), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(30,30,775.3,920), rect=new cjs.Rectangle(30,30,750,920), rect, new cjs.Rectangle(30,30,746,920), new cjs.Rectangle(30,30,742,920), new cjs.Rectangle(30,30,738,920), new cjs.Rectangle(30,30,734,920), new cjs.Rectangle(30,30,730,920), new cjs.Rectangle(30,30,732,920), new cjs.Rectangle(30,30,734,920), new cjs.Rectangle(30,30,736,920), new cjs.Rectangle(30,30,738,920), new cjs.Rectangle(30,30,740,920), new cjs.Rectangle(30,30,742,920), new cjs.Rectangle(30,30,744,920), new cjs.Rectangle(30,30,746,920), new cjs.Rectangle(30,30,748,920), rect=new cjs.Rectangle(30,30,750,920), rect, rect, new cjs.Rectangle(30,30,775.3,920), rect=new cjs.Rectangle(30,30,750,920), rect, new cjs.Rectangle(42,30,738,920), new cjs.Rectangle(54,30,726,920), new cjs.Rectangle(66,30,714,920), new cjs.Rectangle(78,30,702,920), new cjs.Rectangle(90,30,690,920), new cjs.Rectangle(23.4,30,756.7,920), new cjs.Rectangle(-43.3,30,823.4,920), new cjs.Rectangle(-110,30,890,920), new cjs.Rectangle(-176.6,30,956.7,920), new cjs.Rectangle(-243.3,30,1023.4,920), new cjs.Rectangle(-310,30,1090,920), new cjs.Rectangle(-376.6,30,1156.7,920), new cjs.Rectangle(-443.3,30,1223.4,920), new cjs.Rectangle(-510,30,1290,920), new cjs.Rectangle(-576.6,30,1356.7,920), new cjs.Rectangle(-643.3,30,1423.4,920), new cjs.Rectangle(-710,30,1490,920), new cjs.Rectangle(-776.6,30,1581.9,920), new cjs.Rectangle(-843.3,30,1623.4,920), rect=new cjs.Rectangle(-910,-10,2120,960), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":209});

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
	this.frame_69 = function() {
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
	this.frame_189 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(65).call(this.frame_69).wait(120).call(this.frame_189).wait(21));

	// decor
	this.instance = new lib.forward_mc();
	this.instance.setTransform(700,700,0.632,0.632);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(189).to({_off:false},0).to({scaleX:0.84,scaleY:0.84,y:450},10).to({y:500},5).wait(6));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(100,700,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(29).to({regX:0.1,regY:0.1,scaleX:0.63,scaleY:0.63,x:100.1,y:700.1},0).to({regX:0,regY:0,scaleX:0.84,scaleY:0.84,x:100,y:450},10).to({y:500},5).wait(5).to({regX:0.1,regY:0.1,scaleX:0.63,scaleY:0.63,x:100.1,y:500.1},5).to({regX:0,regY:0,scaleX:0.84,scaleY:0.84,x:100,y:500},10).wait(5).to({y:450},5).to({y:700},10).wait(126));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_2_mc();
	this.dressupPanel_mc.setTransform(1500,320);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(9).to({x:460},15).to({x:560},5).wait(40).to({x:500},5).to({x:1500},15).wait(121));

	// hero
	this.hero_1 = new lib.judy_mc();
	this.hero_1.setTransform(190,330,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(89).to({x:380,y:340},20).wait(101));

	// decor
	this.instance_1 = new lib.decor_shadow_1_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89).to({_off:false},0).to({alpha:1},20).wait(101));

	// shadow
	this.instance_2 = new lib.shadow_dressup_mc();
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(89).to({_off:false},0).to({alpha:1},20).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(20,50,1700,920);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-5.2,50,1725.3,920), rect=new cjs.Rectangle(20,50,1700,920), rect, rect, new cjs.Rectangle(-5.2,50,1725.3,920), rect=new cjs.Rectangle(20,50,1700,920), rect, new cjs.Rectangle(20,50,1630.7,920), new cjs.Rectangle(-5.2,50,1586.6,920), new cjs.Rectangle(20,50,1492,920), new cjs.Rectangle(20,50,1422.7,920), new cjs.Rectangle(20,50,1353.4,920), new cjs.Rectangle(-5.2,50,1309.3,920), new cjs.Rectangle(20,50,1214.7,920), new cjs.Rectangle(20,50,1145.3,920), new cjs.Rectangle(20,50,1076,920), new cjs.Rectangle(-5.2,50,1031.9,920), new cjs.Rectangle(20,50,937.4,920), new cjs.Rectangle(20,50,868,920), new cjs.Rectangle(20,50,798.7,920), new cjs.Rectangle(-5.2,50,754.6,920), new cjs.Rectangle(20,50,660,920), new cjs.Rectangle(20,50,680,920), new cjs.Rectangle(20,50,700,920), new cjs.Rectangle(-5.2,50,745.3,920), new cjs.Rectangle(20,50,740,920), new cjs.Rectangle(40,50,740,920), new cjs.Rectangle(38,50,742,920), new cjs.Rectangle(36,50,744,920), new cjs.Rectangle(34,50,746,920), new cjs.Rectangle(32,50,748,920), new cjs.Rectangle(30,50,750,920), new cjs.Rectangle(28,50,752,920), new cjs.Rectangle(26,50,754,920), new cjs.Rectangle(24,50,756,920), new cjs.Rectangle(22,50,758.1,920), rect=new cjs.Rectangle(20,50,760,920), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-5.2,50,785.3,920), rect=new cjs.Rectangle(20,50,760,920), rect, new cjs.Rectangle(24,50,756,920), new cjs.Rectangle(28,50,752,920), new cjs.Rectangle(32,50,748,920), new cjs.Rectangle(36,50,744,920), new cjs.Rectangle(40,50,740,920), new cjs.Rectangle(38,50,742,920), new cjs.Rectangle(36,50,744,920), new cjs.Rectangle(34,50,746,920), new cjs.Rectangle(32,50,748,920), new cjs.Rectangle(30,50,750,920), new cjs.Rectangle(28,50,752,920), new cjs.Rectangle(26,50,754,920), new cjs.Rectangle(24,50,756,920), new cjs.Rectangle(22,50,758.1,920), rect=new cjs.Rectangle(20,50,760,920), rect, rect, new cjs.Rectangle(-5.2,50,785.3,920), rect=new cjs.Rectangle(20,50,760,920), rect, new cjs.Rectangle(20,50,748,920), new cjs.Rectangle(20,50,736,920), new cjs.Rectangle(20,50,724,920), new cjs.Rectangle(20,50,712,920), new cjs.Rectangle(20,50,700,920), new cjs.Rectangle(20,50,766.7,920), new cjs.Rectangle(20,50,833.4,920), new cjs.Rectangle(20,50,900,920), new cjs.Rectangle(20,50,966.7,920), new cjs.Rectangle(20,50,1033.4,920), new cjs.Rectangle(20,50,1100,920), new cjs.Rectangle(20,50,1166.7,920), new cjs.Rectangle(20,50,1233.4,920), new cjs.Rectangle(20,50,1300,920), new cjs.Rectangle(20,50,1366.7,920), new cjs.Rectangle(20,50,1433.4,920), new cjs.Rectangle(20,50,1500,920), new cjs.Rectangle(-5.2,50,1591.9,920), new cjs.Rectangle(20,50,1633.4,920), rect=new cjs.Rectangle(-410,-10,2130,980), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":149});

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
	this.frame_44 = function() {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(20).call(this.frame_44).wait(75).call(this.frame_119).wait(31));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(550,470,0.737,0.737);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({regX:0.1,regY:0.2,scaleX:0.53,scaleY:0.53,x:550.1,y:700.1},0).wait(68).to({regY:0.1},0).to({regX:0,regY:0,scaleX:0.74,scaleY:0.74,x:550,y:420},10).to({y:470},5).wait(5).to({regX:0.1,regY:0.1,scaleX:0.63,scaleY:0.63,x:550.1,y:470.1},5).to({regX:0,regY:0,scaleX:0.74,scaleY:0.74,x:550,y:470},10).to({y:420},5).to({y:700},10).wait(31));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_5_mc();
	this.dressupPanel_mc.setTransform(550,330);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:1500},0).wait(23).to({x:450},15).to({x:550},5).wait(75).to({x:500},5).to({x:1500},15).wait(11));

	// hero
	this.hero_2 = new lib.nick_mc();
	this.hero_2.setTransform(180,310);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:-700},0).wait(43).to({x:280},15).to({x:180},5).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(31.5,28,718.5,952);
p.frameBounds = [rect, rect=new cjs.Rectangle(-848.5,28,2548.5,952), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-848.5,28,2478.5,952), new cjs.Rectangle(-848.5,28,2408.5,952), new cjs.Rectangle(-848.5,28,2338.5,952), new cjs.Rectangle(-848.5,28,2268.5,952), new cjs.Rectangle(-848.5,28,2198.5,952), new cjs.Rectangle(-848.5,28,2128.5,952), new cjs.Rectangle(-848.5,28,2058.5,952), new cjs.Rectangle(-848.5,28,1988.5,952), new cjs.Rectangle(-848.5,28,1918.5,952), new cjs.Rectangle(-848.5,28,1848.5,952), new cjs.Rectangle(-848.5,28,1778.5,952), new cjs.Rectangle(-848.5,28,1708.5,952), new cjs.Rectangle(-848.5,28,1638.5,952), new cjs.Rectangle(-848.5,28,1568.5,952), new cjs.Rectangle(-848.5,28,1498.5,952), new cjs.Rectangle(-848.5,28,1518.5,952), new cjs.Rectangle(-848.5,28,1538.5,952), new cjs.Rectangle(-848.5,28,1558.5,952), new cjs.Rectangle(-848.5,28,1578.5,952), new cjs.Rectangle(-848.5,28,1598.5,952), new cjs.Rectangle(-783.1,28,1533.2,952), new cjs.Rectangle(-717.8,28,1467.9,952), new cjs.Rectangle(-652.5,28,1402.5,952), new cjs.Rectangle(-587.2,28,1337.2,952), new cjs.Rectangle(-521.8,28,1271.9,952), new cjs.Rectangle(-456.5,28,1206.5,952), new cjs.Rectangle(-391.2,28,1141.2,952), new cjs.Rectangle(-325.8,28,1075.8,952), new cjs.Rectangle(-260.5,28,1010.5,952), new cjs.Rectangle(-195.1,28,945.2,952), new cjs.Rectangle(-129.8,28,879.9,952), new cjs.Rectangle(-64.5,28,814.5,952), new cjs.Rectangle(0.9,28,749.2,952), new cjs.Rectangle(66.2,28,683.9,952), new cjs.Rectangle(131.5,28,618.5,952), new cjs.Rectangle(111.5,28,638.5,952), new cjs.Rectangle(91.5,28,658.5,952), new cjs.Rectangle(71.5,28,678.5,952), new cjs.Rectangle(51.5,28,698.5,952), rect=new cjs.Rectangle(31.5,28,718.5,952), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(31.5,28,708.5,952), new cjs.Rectangle(31.5,28,698.5,952), new cjs.Rectangle(31.5,28,688.5,952), new cjs.Rectangle(31.5,28,678.5,952), new cjs.Rectangle(31.5,28,668.5,952), new cjs.Rectangle(31.5,28,735.2,952), new cjs.Rectangle(31.5,28,801.9,952), new cjs.Rectangle(31.5,28,868.5,952), new cjs.Rectangle(31.5,28,935.2,952), new cjs.Rectangle(31.5,28,1001.9,952), new cjs.Rectangle(31.5,28,1068.5,952), new cjs.Rectangle(31.5,28,1135.2,952), new cjs.Rectangle(31.5,28,1201.9,952), new cjs.Rectangle(31.5,28,1268.5,952), new cjs.Rectangle(31.5,28,1335.2,952), new cjs.Rectangle(31.5,28,1401.9,952), new cjs.Rectangle(31.5,28,1468.5,952), new cjs.Rectangle(31.5,28,1535.2,952), new cjs.Rectangle(31.5,28,1601.9,952), rect=new cjs.Rectangle(31.5,28,1668.5,952), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":139});

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
	this.frame_44 = function() {
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
	this.frame_109 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(20).call(this.frame_44).wait(65).call(this.frame_109).wait(31));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(250,470,0.737,0.737);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(68).to({regX:0.1,regY:0.2,scaleX:0.53,scaleY:0.53,x:250.1,y:700.1},0).to({regX:0,regY:0,scaleX:0.74,scaleY:0.74,x:250,y:420},10).to({y:470},5).wait(5).to({regX:0.1,regY:0.1,scaleX:0.63,scaleY:0.63,x:250.1,y:470.1},5).to({regX:0,regY:0,scaleX:0.74,scaleY:0.74,x:250,y:470},10).wait(5).to({y:420},5).to({y:700},10).wait(16));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_4_mc();
	this.dressupPanel_mc.setTransform(250,330);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-700},0).wait(23).to({x:350},15).to({x:250},5).wait(65).to({x:300},5).to({x:-700},15).wait(11));

	// hero
	this.hero_1 = new lib.judy_mc();
	this.hero_1.setTransform(610,345);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:1400},0).wait(43).to({x:510},15).to({x:610},5).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(50,40,665.4,940);
p.frameBounds = [rect, rect=new cjs.Rectangle(-900,40,2405.4,940), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-830,40,2335.4,940), new cjs.Rectangle(-760,40,2265.4,940), new cjs.Rectangle(-690,40,2195.4,940), new cjs.Rectangle(-620,40,2125.4,940), new cjs.Rectangle(-550,40,2055.4,940), new cjs.Rectangle(-480,40,1985.4,940), new cjs.Rectangle(-410,40,1915.4,940), new cjs.Rectangle(-340,40,1845.4,940), new cjs.Rectangle(-270,40,1775.4,940), new cjs.Rectangle(-200,40,1705.4,940), new cjs.Rectangle(-130,40,1635.4,940), new cjs.Rectangle(-60,40,1565.4,940), new cjs.Rectangle(10,40,1495.4,940), new cjs.Rectangle(80,40,1425.4,940), new cjs.Rectangle(150,40,1355.4,940), new cjs.Rectangle(130,40,1375.4,940), new cjs.Rectangle(110,40,1395.4,940), new cjs.Rectangle(90,40,1415.4,940), new cjs.Rectangle(70,40,1435.4,940), new cjs.Rectangle(50,40,1455.4,940), new cjs.Rectangle(50,40,1396.1,940), new cjs.Rectangle(50,40,1336.8,940), new cjs.Rectangle(50,40,1277.4,940), new cjs.Rectangle(50,40,1218.1,940), new cjs.Rectangle(50,40,1158.8,940), new cjs.Rectangle(50,40,1099.4,940), new cjs.Rectangle(50,40,1040.1,940), new cjs.Rectangle(50,40,980.8,940), new cjs.Rectangle(50,40,921.4,940), new cjs.Rectangle(50,40,862.1,940), new cjs.Rectangle(50,40,802.8,940), new cjs.Rectangle(50,40,743.4,940), new cjs.Rectangle(50,40,684.1,940), new cjs.Rectangle(50,40,624.8,940), new cjs.Rectangle(50,40,565.4,940), new cjs.Rectangle(50,40,585.4,940), new cjs.Rectangle(50,40,605.4,940), new cjs.Rectangle(50,40,625.4,940), new cjs.Rectangle(50,40,645.4,940), rect=new cjs.Rectangle(50,40,665.4,940), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(60,40,655.4,940), new cjs.Rectangle(70,40,645.4,940), new cjs.Rectangle(80,40,635.4,940), new cjs.Rectangle(90,40,625.4,940), new cjs.Rectangle(100,40,615.4,940), new cjs.Rectangle(33.4,40,682.1,940), new cjs.Rectangle(-33.3,40,748.8,940), new cjs.Rectangle(-100,40,815.4,940), new cjs.Rectangle(-166.6,40,882.1,940), new cjs.Rectangle(-233.3,40,948.8,940), new cjs.Rectangle(-300,40,1015.4,940), new cjs.Rectangle(-366.6,40,1082.1,940), new cjs.Rectangle(-433.3,40,1148.8,940), new cjs.Rectangle(-500,40,1215.4,940), new cjs.Rectangle(-566.6,40,1282.1,940), new cjs.Rectangle(-633.3,40,1348.8,940), new cjs.Rectangle(-700,40,1415.4,940), new cjs.Rectangle(-766.6,40,1482.1,940), new cjs.Rectangle(-833.3,40,1548.8,940), rect=new cjs.Rectangle(-900,40,1615.4,940), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":139});

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
	this.frame_44 = function() {
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
	this.frame_109 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(20).call(this.frame_44).wait(65).call(this.frame_109).wait(31));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(700,500,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(68).to({regX:0.1,regY:0.1,scaleX:0.63,scaleY:0.63,x:700.1,y:700.1},0).to({regX:0,regY:0,scaleX:0.84,scaleY:0.84,x:700,y:450},10).to({y:500},5).wait(5).to({regX:0.1,regY:0.1,scaleX:0.63,scaleY:0.63,x:700.1,y:500.1},5).to({regX:0,regY:0,scaleX:0.84,scaleY:0.84,x:700,y:500},10).wait(5).to({y:450},5).to({y:700},10).wait(16));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_3_mc();
	this.dressupPanel_mc.setTransform(240,350);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-700},0).wait(23).to({x:340},15).to({x:240},5).wait(65).to({x:310},5).to({x:-700},15).wait(11));

	// hero
	this.hero_2 = new lib.nick_mc();
	this.hero_2.setTransform(560,315);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:1500},0).wait(43).to({x:460},15).to({x:560},5).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10,10,770,990);
p.frameBounds = [rect, rect=new cjs.Rectangle(-930,10,2578.5,990), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-860.6,10,2509.2,990), new cjs.Rectangle(-791.3,10,2439.9,990), new cjs.Rectangle(-722,10,2370.5,990), new cjs.Rectangle(-652.7,10,2301.2,990), new cjs.Rectangle(-583.3,10,2231.9,990), new cjs.Rectangle(-514,10,2162.5,990), new cjs.Rectangle(-444.7,10,2093.2,990), new cjs.Rectangle(-375.3,10,2023.8,990), new cjs.Rectangle(-306,10,1954.5,990), new cjs.Rectangle(-236.6,10,1885.2,990), new cjs.Rectangle(-167.3,10,1815.9,990), new cjs.Rectangle(-98,10,1746.5,990), new cjs.Rectangle(-28.6,10,1677.2,990), new cjs.Rectangle(40.7,10,1607.9,990), new cjs.Rectangle(110,10,1538.5,990), new cjs.Rectangle(90,10,1558.5,990), new cjs.Rectangle(70,10,1578.5,990), new cjs.Rectangle(50,10,1598.5,990), new cjs.Rectangle(30,10,1618.5,990), new cjs.Rectangle(10,10,1638.5,990), new cjs.Rectangle(10,10,1569.2,990), new cjs.Rectangle(10,10,1499.9,990), new cjs.Rectangle(10,10,1430.5,990), new cjs.Rectangle(10,10,1361.2,990), new cjs.Rectangle(10,10,1291.9,990), new cjs.Rectangle(10,10,1222.5,990), new cjs.Rectangle(10,10,1153.2,990), new cjs.Rectangle(10,10,1083.8,990), new cjs.Rectangle(10,10,1014.5,990), new cjs.Rectangle(10,10,945.2,990), new cjs.Rectangle(10,10,875.9,990), new cjs.Rectangle(10,10,806.5,990), rect=new cjs.Rectangle(10,10,770,990), rect, rect, new cjs.Rectangle(10,10,795.3,990), rect=new cjs.Rectangle(10,10,770,990), rect, rect, new cjs.Rectangle(10,10,795.3,990), rect=new cjs.Rectangle(10,10,770,990), rect, rect, new cjs.Rectangle(10,10,795.3,990), new cjs.Rectangle(10,10,750,990), new cjs.Rectangle(10,10,752,990), new cjs.Rectangle(10,10,754,990), new cjs.Rectangle(10,10,756,990), new cjs.Rectangle(10,10,758,990), new cjs.Rectangle(10,10,760,990), new cjs.Rectangle(10,10,762,990), new cjs.Rectangle(10,10,764,990), new cjs.Rectangle(10,10,766,990), new cjs.Rectangle(10,10,768,990), rect=new cjs.Rectangle(10,10,770,990), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(10,10,795.3,990), rect=new cjs.Rectangle(10,10,770,990), rect, new cjs.Rectangle(10,10,766,990), new cjs.Rectangle(10,10,762,990), new cjs.Rectangle(10,10,758,990), new cjs.Rectangle(10,10,754,990), new cjs.Rectangle(10,10,750,990), new cjs.Rectangle(10,10,752,990), new cjs.Rectangle(10,10,754,990), new cjs.Rectangle(10,10,756,990), new cjs.Rectangle(10,10,758,990), new cjs.Rectangle(10,10,760,990), new cjs.Rectangle(10,10,762,990), new cjs.Rectangle(10,10,764,990), new cjs.Rectangle(10,10,766,990), new cjs.Rectangle(10,10,768,990), rect=new cjs.Rectangle(10,10,770,990), rect, rect, new cjs.Rectangle(10,10,795.3,990), rect=new cjs.Rectangle(10,10,770,990), rect, new cjs.Rectangle(24,10,756,990), new cjs.Rectangle(38,10,742,990), new cjs.Rectangle(52,10,728,990), new cjs.Rectangle(66,10,714,990), new cjs.Rectangle(80,10,700,990), new cjs.Rectangle(12.7,10,767.4,990), new cjs.Rectangle(-54.6,10,834.7,990), new cjs.Rectangle(-122,10,902,990), new cjs.Rectangle(-189.3,10,969.3,990), new cjs.Rectangle(-256.6,10,1036.7,990), new cjs.Rectangle(-324,10,1104,990), new cjs.Rectangle(-391.3,10,1171.3,990), new cjs.Rectangle(-458.7,10,1238.7,990), new cjs.Rectangle(-526,10,1306,990), new cjs.Rectangle(-593.3,10,1373.4,990), new cjs.Rectangle(-660.6,10,1440.7,990), new cjs.Rectangle(-728,10,1508,990), new cjs.Rectangle(-795.3,10,1600.6,990), new cjs.Rectangle(-862.6,10,1642.7,990), rect=new cjs.Rectangle(-930,10,1710,990), rect, new cjs.Rectangle(-930,10,1735.3,990), rect=new cjs.Rectangle(-930,10,1710,990), rect, rect, new cjs.Rectangle(-930,10,1735.3,990), rect=new cjs.Rectangle(-930,10,1710,990), rect, rect, new cjs.Rectangle(-930,10,1735.3,990)];


(lib.quest_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":139});

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
	this.frame_44 = function() {
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
	this.frame_109 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(20).call(this.frame_44).wait(65).call(this.frame_109).wait(31));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(100,500,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(68).to({regX:0.1,regY:0.1,scaleX:0.63,scaleY:0.63,x:100.1,y:700.1},0).to({regX:0,regY:0,scaleX:0.84,scaleY:0.84,x:100,y:450},10).to({y:500},5).wait(5).to({regX:0.1,regY:0.1,scaleX:0.63,scaleY:0.63,x:100.1,y:500.1},5).to({regX:0,regY:0,scaleX:0.84,scaleY:0.84,x:100,y:500},10).wait(5).to({y:450},5).to({y:700},10).wait(16));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_2_mc();
	this.dressupPanel_mc.setTransform(560,350);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:1500},0).wait(23).to({x:460},15).to({x:560},5).wait(65).to({x:500},5).to({x:1500},15).wait(11));

	// hero
	this.hero_1 = new lib.judy_mc();
	this.hero_1.setTransform(190,330,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:-700},0).wait(43).to({x:290},15).to({x:190},5).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(20,10,770,990);
p.frameBounds = [rect, rect=new cjs.Rectangle(-805.4,10,2535.4,990), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-805.4,10,2466.1,990), new cjs.Rectangle(-805.4,10,2396.8,990), new cjs.Rectangle(-805.4,10,2327.4,990), new cjs.Rectangle(-805.4,10,2258.1,990), new cjs.Rectangle(-805.4,10,2188.8,990), new cjs.Rectangle(-805.4,10,2119.4,990), new cjs.Rectangle(-805.4,10,2050.1,990), new cjs.Rectangle(-805.4,10,1980.7,990), new cjs.Rectangle(-805.4,10,1911.4,990), new cjs.Rectangle(-805.4,10,1842.1,990), new cjs.Rectangle(-805.4,10,1772.8,990), new cjs.Rectangle(-805.4,10,1703.4,990), new cjs.Rectangle(-805.4,10,1634.1,990), new cjs.Rectangle(-805.4,10,1564.8,990), new cjs.Rectangle(-805.4,10,1495.4,990), new cjs.Rectangle(-805.4,10,1515.4,990), new cjs.Rectangle(-805.4,10,1535.4,990), new cjs.Rectangle(-805.4,10,1555.4,990), new cjs.Rectangle(-805.4,10,1575.4,990), new cjs.Rectangle(-805.4,10,1595.4,990), new cjs.Rectangle(-739.4,10,1529.4,990), new cjs.Rectangle(-673.4,10,1463.4,990), new cjs.Rectangle(-607.4,10,1397.4,990), new cjs.Rectangle(-541.4,10,1331.4,990), new cjs.Rectangle(-475.4,10,1265.4,990), new cjs.Rectangle(-409.4,10,1199.4,990), new cjs.Rectangle(-343.4,10,1133.4,990), new cjs.Rectangle(-277.4,10,1067.4,990), new cjs.Rectangle(-211.4,10,1001.4,990), new cjs.Rectangle(-145.4,10,935.4,990), new cjs.Rectangle(-79.4,10,869.4,990), new cjs.Rectangle(-13.4,10,803.4,990), rect=new cjs.Rectangle(20,10,770,990), rect, rect, new cjs.Rectangle(-5.2,10,795.3,990), rect=new cjs.Rectangle(20,10,770,990), rect, rect, new cjs.Rectangle(-5.2,10,795.3,990), rect=new cjs.Rectangle(20,10,770,990), rect, rect, new cjs.Rectangle(-5.2,10,795.3,990), new cjs.Rectangle(40,10,750,990), new cjs.Rectangle(38,10,752,990), new cjs.Rectangle(36,10,754,990), new cjs.Rectangle(34,10,756,990), new cjs.Rectangle(32,10,758,990), new cjs.Rectangle(30,10,760,990), new cjs.Rectangle(28,10,762,990), new cjs.Rectangle(26,10,764,990), new cjs.Rectangle(24,10,766,990), new cjs.Rectangle(22,10,768.1,990), rect=new cjs.Rectangle(20,10,770,990), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-5.2,10,795.3,990), rect=new cjs.Rectangle(20,10,770,990), rect, new cjs.Rectangle(24,10,766,990), new cjs.Rectangle(28,10,762,990), new cjs.Rectangle(32,10,758,990), new cjs.Rectangle(36,10,754,990), new cjs.Rectangle(40,10,750,990), new cjs.Rectangle(38,10,752,990), new cjs.Rectangle(36,10,754,990), new cjs.Rectangle(34,10,756,990), new cjs.Rectangle(32,10,758,990), new cjs.Rectangle(30,10,760,990), new cjs.Rectangle(28,10,762,990), new cjs.Rectangle(26,10,764,990), new cjs.Rectangle(24,10,766,990), new cjs.Rectangle(22,10,768.1,990), rect=new cjs.Rectangle(20,10,770,990), rect, rect, new cjs.Rectangle(-5.2,10,795.3,990), rect=new cjs.Rectangle(20,10,770,990), rect, new cjs.Rectangle(20,10,758,990), new cjs.Rectangle(20,10,746,990), new cjs.Rectangle(20,10,734,990), new cjs.Rectangle(20,10,722,990), new cjs.Rectangle(20,10,710,990), new cjs.Rectangle(20,10,776.7,990), new cjs.Rectangle(20,10,843.4,990), new cjs.Rectangle(20,10,910,990), new cjs.Rectangle(20,10,976.7,990), new cjs.Rectangle(20,10,1043.4,990), new cjs.Rectangle(20,10,1110,990), new cjs.Rectangle(20,10,1176.7,990), new cjs.Rectangle(20,10,1243.4,990), new cjs.Rectangle(20,10,1310,990), new cjs.Rectangle(20,10,1376.7,990), new cjs.Rectangle(20,10,1443.4,990), new cjs.Rectangle(20,10,1510,990), new cjs.Rectangle(-5.2,10,1601.9,990), new cjs.Rectangle(20,10,1643.4,990), rect=new cjs.Rectangle(20,10,1710,990), rect, new cjs.Rectangle(-5.2,10,1735.3,990), rect=new cjs.Rectangle(20,10,1710,990), rect, rect, new cjs.Rectangle(-5.2,10,1735.3,990), rect=new cjs.Rectangle(20,10,1710,990), rect, rect, new cjs.Rectangle(-5.2,10,1735.3,990)];


(lib.quest_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":179});

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
	this.frame_44 = function() {
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
	this.frame_139 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(20).call(this.frame_44).wait(70).call(this.frame_114).wait(25).call(this.frame_139).wait(41));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(700,500,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(68).to({regX:0.1,regY:0.1,scaleX:0.63,scaleY:0.63,x:700.1,y:700.1},0).to({regX:0,regY:0,scaleX:0.84,scaleY:0.84,x:700,y:450},10).to({y:500},5).wait(5).to({regX:0.1,regY:0.1,scaleX:0.63,scaleY:0.63,x:700.1,y:500.1},5).to({regX:0,regY:0,scaleX:0.84,scaleY:0.84,x:700,y:500},10).wait(6).to({y:450},4).to({y:700},10).wait(56));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_1_mc();
	this.dressupPanel_mc.setTransform(240,320);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-700},0).wait(23).to({x:340},15).to({x:240},5).wait(95).to({x:300},5).to({x:-700},15).wait(21));

	// hero
	this.hero_1 = new lib.judy_mc();
	this.hero_1.setTransform(610,340);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:1400},0).wait(43).to({x:510},15).to({x:610},5).wait(40).to({x:560},5).wait(1).to({skewY:180,x:550},0).wait(9).to({x:1400},15).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(20,50,760,920);
p.frameBounds = [rect, rect=new cjs.Rectangle(-920,50,2425.4,920), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-850.6,50,2356.1,920), new cjs.Rectangle(-781.3,50,2286.8,920), new cjs.Rectangle(-712,50,2217.4,920), new cjs.Rectangle(-642.7,50,2148.1,920), new cjs.Rectangle(-573.3,50,2078.8,920), new cjs.Rectangle(-504,50,2009.4,920), new cjs.Rectangle(-434.7,50,1940.1,920), new cjs.Rectangle(-365.3,50,1870.7,920), new cjs.Rectangle(-296,50,1801.4,920), new cjs.Rectangle(-226.6,50,1732.1,920), new cjs.Rectangle(-157.3,50,1662.8,920), new cjs.Rectangle(-88,50,1593.4,920), new cjs.Rectangle(-18.6,50,1524.1,920), new cjs.Rectangle(50.7,50,1454.8,920), new cjs.Rectangle(120,50,1385.4,920), new cjs.Rectangle(100,50,1405.4,920), new cjs.Rectangle(80,50,1425.4,920), new cjs.Rectangle(60,50,1445.4,920), new cjs.Rectangle(40,50,1465.4,920), new cjs.Rectangle(20,50,1485.4,920), new cjs.Rectangle(20,50,1426.1,920), new cjs.Rectangle(20,50,1366.8,920), new cjs.Rectangle(20,50,1307.4,920), new cjs.Rectangle(20,50,1248.1,920), new cjs.Rectangle(20,50,1188.8,920), new cjs.Rectangle(20,50,1129.4,920), new cjs.Rectangle(20,50,1070.1,920), new cjs.Rectangle(20,50,1010.8,920), new cjs.Rectangle(20,50,951.4,920), new cjs.Rectangle(20,50,892.1,920), new cjs.Rectangle(20,50,832.8,920), new cjs.Rectangle(20,50,785.3,920), rect=new cjs.Rectangle(20,50,760,920), rect, rect, new cjs.Rectangle(20,50,785.3,920), rect=new cjs.Rectangle(20,50,760,920), rect, rect, new cjs.Rectangle(20,50,785.3,920), rect=new cjs.Rectangle(20,50,760,920), rect, rect, new cjs.Rectangle(20,50,785.3,920), new cjs.Rectangle(20,50,740,920), new cjs.Rectangle(20,50,742,920), new cjs.Rectangle(20,50,744,920), new cjs.Rectangle(20,50,746,920), new cjs.Rectangle(20,50,748,920), new cjs.Rectangle(20,50,750,920), new cjs.Rectangle(20,50,752,920), new cjs.Rectangle(20,50,754,920), new cjs.Rectangle(20,50,756,920), new cjs.Rectangle(20,50,758,920), rect=new cjs.Rectangle(20,50,760,920), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(20,50,785.3,920), rect=new cjs.Rectangle(20,50,760,920), rect, new cjs.Rectangle(20,50,756,920), new cjs.Rectangle(20,50,752,920), new cjs.Rectangle(20,50,748,920), new cjs.Rectangle(20,50,744,920), new cjs.Rectangle(20,50,740,920), new cjs.Rectangle(20,50,742,920), new cjs.Rectangle(20,50,744,920), new cjs.Rectangle(20,50,746,920), new cjs.Rectangle(20,50,748,920), new cjs.Rectangle(20,50,750,920), new cjs.Rectangle(20,50,752,920), new cjs.Rectangle(20,50,754,920), new cjs.Rectangle(20,50,756,920), new cjs.Rectangle(20,50,758,920), rect=new cjs.Rectangle(20,50,760,920), rect, rect, new cjs.Rectangle(20,50,785.3,920), rect=new cjs.Rectangle(20,50,760,920), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(20,50,785,920), new cjs.Rectangle(20,50,841.6,920), new cjs.Rectangle(20,50,898.3,920), new cjs.Rectangle(20,50,955,920), new cjs.Rectangle(20,50,1011.6,920), new cjs.Rectangle(20,50,1068.3,920), new cjs.Rectangle(20,50,1125,920), new cjs.Rectangle(20,50,1181.6,920), new cjs.Rectangle(20,50,1238.3,920), new cjs.Rectangle(20,50,1295,920), new cjs.Rectangle(20,50,1351.6,920), new cjs.Rectangle(20,50,1408.3,920), new cjs.Rectangle(20,50,1465,920), rect=new cjs.Rectangle(20,50,1521.6,920), rect, rect, rect, rect, rect, new cjs.Rectangle(32,50,1509.6,920), new cjs.Rectangle(44,50,1497.6,920), new cjs.Rectangle(56,50,1485.6,920), new cjs.Rectangle(68,50,1473.6,920), new cjs.Rectangle(80,50,1461.6,920), new cjs.Rectangle(13.4,50,1528.3,920), new cjs.Rectangle(-53.3,50,1594.9,920), new cjs.Rectangle(-120,50,1661.6,920), new cjs.Rectangle(-186.6,50,1728.3,920), new cjs.Rectangle(-253.3,50,1795,920), new cjs.Rectangle(-320,50,1861.6,920), new cjs.Rectangle(-386.6,50,1928.3,920), new cjs.Rectangle(-453.3,50,1995,920), new cjs.Rectangle(-520,50,2061.6,920), new cjs.Rectangle(-586.6,50,2128.3,920), new cjs.Rectangle(-653.3,50,2195,920), new cjs.Rectangle(-720,50,2261.6,920), new cjs.Rectangle(-786.6,50,2328.3,920), new cjs.Rectangle(-853.3,50,2395,920), rect=new cjs.Rectangle(-920,50,2461.6,920), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.heroes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.nick_mc();
	this.hero_2.setTransform(290,300);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:360,y:1200},0).wait(1).to({y:300},0).wait(1).to({x:450,y:310},0).wait(1).to({x:280,y:330},0).wait(1).to({y:300},0).wait(1));

	// hero_1
	this.hero_1 = new lib.judy_mc();
	this.hero_1.setTransform(520,340);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:420,y:330},0).wait(1).to({x:400,y:1200},0).wait(1).to({skewY:180,x:320,y:340},0).wait(1).to({skewY:0,x:510,y:365},0).wait(1).to({y:340},0).wait(1));

	// bg
	this.instance = new lib.background_6_mc();

	this.instance_1 = new lib.background_7_mc();

	this.instance_2 = new lib.background_1_mc();

	this.instance_3 = new lib.background_8_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect, new cjs.Rectangle(-400,0,1600,1482), new cjs.Rectangle(-400,0,1600,1444), new cjs.Rectangle(-400,0,1600,600), new cjs.Rectangle(-400,0,1600,612), new cjs.Rectangle(-400,0,1600,600)];


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


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":109,"end":149});

	// timeline functions:
	this.frame_29 = function() {
		try
		{
			app.addSoundFunc("air_sound", 0.05);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_44 = function() {
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
	this.frame_64 = function() {
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
	this.frame_89 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(15).call(this.frame_44).wait(20).call(this.frame_64).wait(25).call(this.frame_89).wait(61));

	// play_btn
	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(700,700,0.895,0.895);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).wait(89).to({regX:0.1,regY:0.1,scaleX:0.63,scaleY:0.63,x:700.1,y:700.1},0).to({regX:0,regY:0,scaleX:0.9,scaleY:0.9,x:700,y:450},10).to({y:500},5).wait(5).to({scaleX:0.79,scaleY:0.79},5).to({scaleX:0.9,scaleY:0.9},10).to({y:450},5).to({y:700},10).wait(11));

	// btn
	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(400.5,800.5,0.75,0.75,0,0,0,0.7,0.7);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,920);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(110.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(400,1050,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(50,550,0.727,0.727);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.social_network_mc}]}).to({state:[{t:this.logo_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.social_network_mc}]},109).wait(41));

	// title
	this.instance = new lib.title_mc();
	this.instance.setTransform(180,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({y:380},15).to({y:310},5).wait(106));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(0,400);
	this.instance_1.alpha = 0.199;
	this.instance_1.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(150));

	// decor
	this.instance_2 = new lib.animation_grass_mc();
	this.instance_2.setTransform(240,600,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150));

	// judy
	this.instance_3 = new lib.anim_judy_main_mc();
	this.instance_3.setTransform(1700,370);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(64).to({x:600},15).to({x:680},5).wait(66));

	// nick
	this.instance_4 = new lib.anim_nick_main_mc();
	this.instance_4.setTransform(1500,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(44).to({x:350},15).to({x:430},5).wait(86));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(200,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(150));

	// bg
	this.instance_5 = new lib.background_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-365,2280,1458.6);
p.frameBounds = [rect, new cjs.Rectangle(-400,-365,2280,1458.7), new cjs.Rectangle(-400,-365,2280,1458.6), new cjs.Rectangle(-400,-365,2280,1458.7), new cjs.Rectangle(-400,-365,2280,1458.6), new cjs.Rectangle(-400,-365,2280,1458.7), new cjs.Rectangle(-400,-365,2280,1458.6), new cjs.Rectangle(-400,-365,2280,1458.7), new cjs.Rectangle(-400,-365,2280,1458.6), new cjs.Rectangle(-400,-365,2280,1458.7), new cjs.Rectangle(-400,-365,2280,1458.6), new cjs.Rectangle(-400,-365,2280,1458.7), new cjs.Rectangle(-400,-365,2280,1458.6), new cjs.Rectangle(-400,-365,2280,1458.7), new cjs.Rectangle(-400,-365,2280,1458.6), new cjs.Rectangle(-400,-365,2280,1458.7), new cjs.Rectangle(-400,-365,2280,1458.6), new cjs.Rectangle(-400,-365,2280,1458.7), new cjs.Rectangle(-400,-365,2280,1458.6), new cjs.Rectangle(-400,-365,2280,1458.7), new cjs.Rectangle(-400,-365,2280,1458.6), new cjs.Rectangle(-400,-365,2280,1458.7), new cjs.Rectangle(-400,-365,2280,1458.6), new cjs.Rectangle(-400,-365,2280,1458.7), new cjs.Rectangle(-400,-365,2280,1458.6), new cjs.Rectangle(-400,-326.3,2280,1420), new cjs.Rectangle(-400,-287.6,2280,1381.3), new cjs.Rectangle(-400,-249,2280,1342.7), new cjs.Rectangle(-400,-280.8,2280,1374.4), new cjs.Rectangle(-400,-171.6,2280,1265.3), new cjs.Rectangle(-400,-133,2280,1226.6), new cjs.Rectangle(-400,-94.3,2280,1188), new cjs.Rectangle(-400,-280.8,2280,1374.4), new cjs.Rectangle(-400,-90,2280,1183.7), new cjs.Rectangle(-400,-90,2280,1183.6), new cjs.Rectangle(-400,-90,2280,1183.7), new cjs.Rectangle(-400,-280.8,2280,1374.4), new cjs.Rectangle(-400,-90,2280,1183.7), new cjs.Rectangle(-400,-90,2280,1183.6), new cjs.Rectangle(-400,-90,2280,1183.7), new cjs.Rectangle(-400,-280.8,2280,1374.4), new cjs.Rectangle(-400,-90,2280,1183.7), new cjs.Rectangle(-400,-90,2280,1183.6), new cjs.Rectangle(-400,-90,2280,1183.7), new cjs.Rectangle(-400,-280.8,2280,1374.4), new cjs.Rectangle(-400,-90,2280,1183.7), new cjs.Rectangle(-400,-90,2280,1183.6), new cjs.Rectangle(-400,-90,2280,1183.7), new cjs.Rectangle(-400,-280.8,2280,1374.4), new cjs.Rectangle(-400,-90,2280,1183.7), new cjs.Rectangle(-400,-90,2280,1183.6), new cjs.Rectangle(-400,-90,2280,1183.7), new cjs.Rectangle(-400,-280.8,2280,1374.4), new cjs.Rectangle(-400,-90,2280,1183.7), new cjs.Rectangle(-400,-90,2280,1183.6), new cjs.Rectangle(-400,-90,2280,1183.7), new cjs.Rectangle(-400,-280.8,2280,1374.4), new cjs.Rectangle(-400,-90,2280,1183.7), new cjs.Rectangle(-400,-90,2280,1183.6), new cjs.Rectangle(-400,-90,2280,1183.7), new cjs.Rectangle(-400,-280.8,2280,1374.4), new cjs.Rectangle(-400,-90,2280,1183.7), new cjs.Rectangle(-400,-90,2280,1183.6), new cjs.Rectangle(-400,-90,2280,1183.7), new cjs.Rectangle(-400,-280.8,2280,1374.4), new cjs.Rectangle(-400,-90,2206.7,1183.7), new cjs.Rectangle(-400,-90,2133.4,1183.6), new cjs.Rectangle(-400,-90,2060,1183.7), new cjs.Rectangle(-400,-280.8,1986.7,1374.4), new cjs.Rectangle(-400,-90,1913.4,1183.7), new cjs.Rectangle(-400,-90,1840,1183.6), new cjs.Rectangle(-400,-90,1766.7,1183.7), new cjs.Rectangle(-400,-280.8,1693.3,1374.4), new cjs.Rectangle(-400,-90,1620,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), rect=new cjs.Rectangle(-400,-280.8,1600,1374.4), rect, new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-90,1600,1183.6), new cjs.Rectangle(-400,-90,1600,1183.7), new cjs.Rectangle(-400,-280.8,1600,1374.4)];


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
	this.instance = new lib.rainbow_1_mc();
	this.instance.setTransform(550,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(0,400);
	this.instance_1.alpha = 0.199;
	this.instance_1.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.animation_grass_mc();
	this.instance_2.setTransform(80,600);

	this.instance_3 = new lib.animation_grass_mc();
	this.instance_3.setTransform(700,600,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(200,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_4 = new lib.background_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1261.9);
p.frameBounds = [rect];


(lib.quest_5_mc = function(mode,startPosition,loop) {
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
	this.frame_1_mc = new lib.quest_1_5_mc();

	this.frame_2_mc = new lib.quest_2_5_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(31.5,-349.4,718.5,1329.4);
p.frameBounds = [rect, rect=new cjs.Rectangle(31.5,-349.4,1678.5,1299.4), rect];


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
p.nominalBounds = rect = new cjs.Rectangle(50,-349.4,665.4,1329.4);
p.frameBounds = [rect, new cjs.Rectangle(-920,-349.4,1635.4,1319.4), new cjs.Rectangle(-920,-349.4,1800,1319.4)];


(lib.quest_3_mc = function(mode,startPosition,loop) {
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
	this.frame_1_mc = new lib.quest_1_3_mc();

	this.frame_2_mc = new lib.quest_2_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10,-349.4,770,1349.4);
p.frameBounds = [rect, new cjs.Rectangle(-910,-349.4,1690,1299.4), new cjs.Rectangle(-910,-349.4,1790,1299.4)];


(lib.quest_2_mc = function(mode,startPosition,loop) {
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
	this.frame_1_mc = new lib.quest_1_2_mc();

	this.frame_2_mc = new lib.quest_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(20,-349.4,770,1349.4);
p.frameBounds = [rect, rect=new cjs.Rectangle(20,-349.4,1700,1319.4), rect];


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
p.nominalBounds = rect = new cjs.Rectangle(20,-349.4,760,1319.4);
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
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_5_mc();
	this.body_mc.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_5_mc();

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

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_4_mc();

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
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

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
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1349.4);
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
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1349.4);
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
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_1_mc();

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
	this.next_mc.setTransform(440,540);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(360,540);

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
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

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

	this.instance_6 = new lib.LocationScreen_2();

	this.instance_7 = new lib.LocationScreen_3();
	this.instance_7.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_8 = new lib.LocationScreen_4();

	this.instance_9 = new lib.LocationScreen_5();
	this.instance_9.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_10 = new lib.RedirectScreen();

	this.instance_11 = new lib.ResultScreen();

	this.instance_12 = new lib.InstructionScreen();

	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(690,250);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.instance_13 = new lib.forward_mc();
	this.instance_13.setTransform(500,250);

	this.instance_14 = new lib.Glitter_2();
	this.instance_14.setTransform(450,50);

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(400,50);

	this.instance_15 = new lib.FlashAnimation();
	this.instance_15.setTransform(150,280);

	this.instance_16 = new lib.TrackMove_2();
	this.instance_16.setTransform(350,50);

	this.instance_17 = new lib.TrackMove();
	this.instance_17.setTransform(270,50);

	this.instance_18 = new lib.Cursor();
	this.instance_18.setTransform(185,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(115.1,50,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(45.1,50,0.583,0.583,0,0,0,0.1,0);

	this.instance_19 = new lib.PauseAppScreen();

	this.instance_20 = new lib.OrientationLockScreen();

	this.instance_21 = new lib.CurtainScreen();

	this.instance_22 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.gravity_explosion_comp},{t:this.instance_14},{t:this.instance_13},{t:this.next_btn}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[]},1).to({state:[{t:this.instance_22}]},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,257,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,0,1600,600), rect, new cjs.Rectangle(-400,0,1600,1165), new cjs.Rectangle(-400,-365,2280,1455), new cjs.Rectangle(-400,-280.8,1600,1261.9), new cjs.Rectangle(-400,-349.4,1600,1330.4), rect=new cjs.Rectangle(-400,-349.4,1600,1349.4), rect, rect=new cjs.Rectangle(-400,-349.4,1600,1330.4), rect, new cjs.Rectangle(-400,0,1600,610), new cjs.Rectangle(-400,-319.9,1600,1780), new cjs.Rectangle(-400,0,1600,600), new cjs.Rectangle(0,0,785,430), rect=new cjs.Rectangle(-410,-10,1620,620), rect, new cjs.Rectangle(-400,600,1600,600), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-410,-10,1620,620)];


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