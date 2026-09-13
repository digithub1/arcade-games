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
		{src:"library/images/storage_atlas_16.png", id:"storage_atlas_16"},
		{src:"library/images/storage_atlas_17.png", id:"storage_atlas_17"},
		{src:"library/images/storage_atlas_18.png", id:"storage_atlas_18"},
		{src:"library/images/storage_atlas_19.png", id:"storage_atlas_19"},
		{src:"library/images/storage_atlas_20.png", id:"storage_atlas_20"},
		{src:"library/images/storage_atlas_21.png", id:"storage_atlas_21"},
		{src:"library/images/storage_atlas_22.png", id:"storage_atlas_22"},
		{src:"library/images/storage_atlas_23.png", id:"storage_atlas_23"},
		{src:"library/images/storage_atlas_24.png", id:"storage_atlas_24"},
		{src:"library/images/storage_atlas_25.png", id:"storage_atlas_25"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,602,1600,600],[0,0,1600,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_4", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_5", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_6", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_7", frames: [[0,0,603,539],[0,541,603,539],[605,0,603,539],[605,541,603,539]]},
		{name:"storage_atlas_8", frames: [[605,0,603,539],[0,0,603,539],[0,541,603,539],[605,541,603,539]]},
		{name:"storage_atlas_9", frames: [[605,0,664,472],[0,743,664,472],[666,743,664,472],[0,0,603,539],[0,541,1600,200]]},
		{name:"storage_atlas_10", frames: [[0,0,664,472],[0,474,664,472],[666,474,664,472],[666,0,664,472]]},
		{name:"storage_atlas_11", frames: [[0,474,664,472],[666,0,664,472],[0,0,664,472],[666,474,595,481]]},
		{name:"storage_atlas_12", frames: [[0,0,595,481],[1194,483,595,481],[0,483,595,481],[597,0,595,481],[1194,0,595,481],[597,483,595,481]]},
		{name:"storage_atlas_13", frames: [[1246,592,420,500],[0,0,595,481],[597,0,595,481],[432,483,410,590],[0,483,430,590],[844,592,400,590],[1194,0,460,590]]},
		{name:"storage_atlas_14", frames: [[0,0,420,500],[422,0,420,480],[422,482,400,470],[0,502,420,480],[824,482,400,470],[1236,0,390,480],[1226,482,390,480],[844,0,390,480]]},
		{name:"storage_atlas_15", frames: [[784,0,390,480],[0,482,390,480],[392,0,390,480],[392,482,390,480],[1176,0,390,480],[784,482,390,480],[0,0,390,480],[1176,482,390,480]]},
		{name:"storage_atlas_16", frames: [[0,924,420,440],[0,482,420,440],[0,0,390,480],[422,282,380,440],[1186,724,380,440],[422,724,380,440],[804,282,380,440],[1186,282,380,440],[804,724,380,440],[1034,0,640,280],[392,0,640,280]]},
		{name:"storage_atlas_17", frames: [[382,442,380,440],[382,0,380,440],[382,884,380,440],[764,0,380,440],[1146,0,380,440],[764,442,380,440],[764,884,380,440],[1146,442,380,440],[1146,884,380,440],[0,0,380,440],[0,442,380,440],[0,884,380,440]]},
		{name:"storage_atlas_18", frames: [[764,442,380,440],[0,0,380,440],[382,884,380,440],[0,442,380,440],[764,0,380,440],[382,0,380,440],[1146,0,380,440],[382,442,380,440],[0,884,380,440],[764,884,380,440],[1146,442,380,440],[1146,884,380,440]]},
		{name:"storage_atlas_19", frames: [[382,442,370,440],[754,884,370,440],[1126,442,370,440],[382,884,370,440],[754,0,370,440],[1126,884,370,440],[1126,0,370,440],[754,442,370,440],[382,0,370,440],[0,884,380,440],[0,0,380,440],[0,442,380,440]]},
		{name:"storage_atlas_20", frames: [[794,0,500,300],[794,302,500,300],[794,604,500,300],[812,906,360,390],[1174,906,360,390],[1296,0,360,390],[1296,392,360,390],[402,0,390,390],[402,392,390,390],[0,784,428,346],[0,0,400,400],[0,402,380,380],[430,906,380,380]]},
		{name:"storage_atlas_21", frames: [[1476,783,259,376],[901,1097,380,260],[362,0,360,390],[0,0,360,390],[1152,783,322,312],[306,392,255,483],[912,561,238,465],[0,392,304,406],[724,0,451,279],[563,561,347,336],[1177,0,500,220],[1152,561,500,220],[451,899,448,226],[451,1127,440,224],[0,877,449,254],[0,1133,437,225],[724,281,451,278],[1177,222,446,239]]},
		{name:"storage_atlas_22", frames: [[1331,0,300,300],[1029,302,300,300],[265,820,237,387],[1108,906,218,404],[1328,937,249,350],[0,604,255,379],[806,906,300,300],[1331,302,300,300],[1108,604,300,300],[806,604,300,300],[419,231,306,302],[0,985,263,357],[0,0,265,367],[1410,604,265,331],[727,302,300,300],[1029,0,300,300],[504,820,300,300],[727,0,300,300],[0,369,417,233],[257,604,438,214],[267,0,420,229]]},
		{name:"storage_atlas_23", frames: [[253,309,252,291],[1310,0,253,302],[258,602,239,296],[1060,0,248,309],[0,971,226,361],[460,1183,210,210],[672,1183,210,210],[934,998,210,210],[1205,776,210,210],[1146,998,210,210],[1358,988,210,210],[0,647,256,322],[1565,0,169,401],[0,0,282,307],[838,0,220,357],[1570,403,195,226],[1375,304,178,236],[0,309,251,336],[616,0,220,361],[1417,756,200,200],[1570,958,200,200],[1358,1200,200,200],[1331,554,200,200],[1560,1200,200,200],[983,776,220,220],[499,719,240,240],[490,961,220,220],[258,900,230,230],[712,961,220,220],[741,719,240,240],[1109,554,220,220],[228,1132,230,230],[864,359,243,262],[884,1210,229,182],[1109,311,264,241],[507,545,353,172],[284,0,330,254],[507,363,355,180]]},
		{name:"storage_atlas_24", frames: [[798,1204,190,190],[1536,726,180,180],[1162,404,190,190],[990,908,180,180],[202,404,200,200],[202,808,200,200],[202,1010,200,200],[606,0,200,200],[202,202,200,200],[202,0,200,200],[0,1010,200,200],[808,0,200,200],[1010,0,200,200],[202,606,200,200],[0,808,200,200],[404,0,200,200],[1172,778,246,131],[1546,404,246,138],[1212,0,200,200],[1414,0,200,200],[404,202,200,200],[404,404,200,200],[404,606,200,200],[404,808,200,200],[404,1010,200,200],[1354,404,190,190],[1179,1064,176,178],[990,1263,223,133],[1172,911,211,151],[1400,1225,153,171],[1545,990,153,171],[1555,1163,153,171],[798,404,170,222],[606,202,185,208],[1215,1244,183,148],[0,1220,220,160],[798,1012,190,190],[1420,908,340,80],[606,614,190,200],[606,816,190,200],[793,202,190,200],[606,1018,190,200],[0,0,200,200],[985,202,190,200],[606,412,190,200],[0,202,200,200],[1177,202,190,200],[0,404,200,200],[1369,202,190,200],[1561,202,190,200],[0,606,200,200],[222,1212,186,188],[410,1212,194,178],[990,1090,187,171],[1357,1064,186,159],[606,1220,180,180],[1616,0,180,180],[990,596,180,180],[1546,544,180,180],[798,628,190,190],[798,820,190,190],[970,404,190,190],[1172,596,180,180],[1354,596,180,180]]},
		{name:"storage_atlas_25", frames: [[1023,937,120,120],[274,945,120,120],[901,937,120,120],[1267,987,40,40],[640,1019,40,40],[1145,945,120,120],[1109,756,18,67],[838,795,24,57],[1775,168,25,62],[1405,843,24,62],[1681,643,90,50],[1017,756,90,50],[396,1019,120,120],[719,980,120,120],[122,982,120,120],[0,984,120,120],[304,1067,36,36],[719,939,36,36],[1205,1067,36,36],[1687,994,36,36],[1306,1115,36,36],[475,754,36,36],[1078,437,36,36],[342,1067,36,36],[1344,1115,36,36],[551,754,36,36],[640,1061,36,36],[513,754,36,36],[678,1061,36,36],[382,1248,36,36],[456,314,18,18],[420,1248,36,36],[458,1248,36,36],[1040,437,36,36],[496,1248,36,36],[534,1248,36,36],[1186,478,24,24],[1212,478,24,24],[1116,437,24,24],[825,651,135,78],[1030,1200,130,69],[1064,1129,133,69],[1499,597,180,107],[438,638,163,114],[1267,1032,145,81],[0,1225,151,55],[738,1213,152,56],[153,1225,150,55],[1414,1032,149,77],[586,1206,150,59],[1414,1111,148,70],[930,0,153,171],[620,0,153,171],[155,0,153,171],[0,0,153,171],[1085,0,153,171],[775,0,153,171],[476,314,21,11],[1240,0,153,171],[310,0,153,171],[1395,0,153,171],[465,0,153,171],[1550,0,153,171],[0,173,153,171],[155,173,153,171],[1747,1010,53,137],[1566,1225,51,132],[947,1213,49,138],[967,506,69,130],[347,1248,33,132],[892,1213,53,128],[967,649,162,105],[310,173,188,139],[304,856,169,87],[802,506,163,143],[620,506,180,130],[1186,597,159,134],[1265,478,24,21],[274,860,18,67],[1773,643,25,56],[1238,478,25,23],[1775,232,25,61],[985,858,23,62],[1337,173,144,169],[1629,173,144,169],[310,314,144,169],[1483,173,144,169],[1148,307,144,169],[456,335,144,169],[0,517,159,139],[602,335,144,169],[748,335,144,169],[292,485,144,169],[1440,344,144,169],[1040,478,144,169],[0,346,144,169],[146,346,144,169],[894,335,144,169],[1294,344,144,169],[1586,344,144,169],[1705,0,80,124],[518,1019,120,120],[1023,1067,180,60],[1565,1094,180,60],[640,1102,180,60],[122,1104,180,60],[841,1059,180,60],[1565,1032,180,60],[1186,515,280,80],[603,733,260,60],[1468,515,280,80],[841,980,40,40],[152,758,150,100],[627,795,150,100],[1131,733,150,100],[1587,808,150,100],[0,760,150,100],[475,795,150,100],[1283,741,150,100],[1435,808,150,100],[323,754,150,100],[1017,835,150,100],[0,658,150,100],[1169,843,150,100],[865,756,150,100],[1443,910,120,120],[1565,910,120,120],[438,506,180,130],[1435,741,60,60],[603,651,220,80],[1321,843,40,55],[1705,126,40,43],[1787,0,10,11],[1619,1225,69,94],[323,656,100,73],[779,795,57,60],[1205,1115,99,100],[1775,295,23,38],[1294,307,31,31],[1131,649,50,50],[305,1248,40,147],[1347,597,150,142],[1739,798,50,210],[1750,344,50,297],[1148,173,187,132],[161,656,160,100],[986,173,160,160],[500,173,160,160],[1499,706,160,100],[662,173,160,160],[824,173,160,160],[901,858,40,40],[943,858,40,40],[1747,126,40,40],[1363,843,40,40],[1681,597,40,40],[1687,910,40,40],[1687,952,40,40],[396,945,40,40],[1267,945,40,40],[719,897,40,40],[161,517,120,120],[1690,1225,80,80],[1661,706,120,90],[779,858,120,120],[152,860,120,120],[0,862,120,120],[597,897,120,120],[1321,910,120,120],[475,897,120,120],[344,1206,240,40],[102,1183,240,40],[546,1164,240,40],[1306,1183,240,40],[1548,1183,240,40],[788,1171,240,40],[304,1141,240,40],[822,1129,240,40],[1364,1225,200,40],[1162,1225,200,40],[0,1106,100,100],[1040,335,100,100]]}
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
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_for_pointer_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_10_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_6_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_7_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_8_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_9_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.blanket_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blanket_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.blanket_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.blanket_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.blanket_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.blanket_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.blanket_7_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.blanket_8_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.blanket_9_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.copyright_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.crown_for_closet1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.crown_for_closet1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.crown_for_closet1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.crown_for_closet1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.crown_for_closet1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.crown_for_closet1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.crown_for_closet2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.crown_for_closet2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.crown_for_closet2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.crown_for_closet2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.crown_for_closet2_5_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.crown_for_closet2_6_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.current_location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.decor_location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dress_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dress_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dress_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dress_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dress_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.dress_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.dress_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.dress_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.dress_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.dress_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.dress_7_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.dress_7_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.dress_8_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.dress_8_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.dress_9_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.dress_9_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.dress_check_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress_check_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dress_check_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.dress_check_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.ear_for_closet1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ear_for_closet1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ear_for_closet1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ear_for_closet1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ear_for_closet1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ear_for_closet1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.ear_for_closet2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.ear_for_closet2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ear_for_closet2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.ear_for_closet2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.ear_for_closet2_5_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ear_for_closet2_6_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.earrings_back2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.earrings_back3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.earrings_back5_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.earrings_back6_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.eyes_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.eyes_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.eyes_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.eyes_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.eyes_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.eyes_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.eyes_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.eyes_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.eyes_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.eyes_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.eyes_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.eyes_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.fern_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.flash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.flash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.flash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.flash_4_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.forward_icon_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.glitter_10_3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.glitter_11_3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.glitter_12_3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.glitter_13_3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.glitter_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.glitter_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.glitter_3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.glitter_4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.glitter_5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.glitter_6_3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.glitter_7_3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.glitter_8_3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.glitter_9_3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_second_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_second_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_second_3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_second_4_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_second_5_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_check_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_check_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_check_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_check_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_crown1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero1_crown2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero1_crown3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero1_crown4_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero1_crown5_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero1_crown6_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress0_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress9_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings4_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings5_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings6_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hero1_finger_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_head_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hero1_makeup1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hero1_makeup2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_makeup3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hero1_makeup4_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_makeup5_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hero1_makeup6_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.hero1_makeup7_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero1_makeup8_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.hero1_makeup9_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.hero1_wand1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.hero1_wand2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.hero1_wand3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.hero1_wand4_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.hero1_wand5_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.hero1_wand6_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bodyhorse1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bodyhorse2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bodyhorse3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bodyhorse4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bodyhorse5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bodyhorse6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bodyhorse7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bodyhorse8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bodyhorse9_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_crown1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.hero2_crown2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.hero2_crown3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.hero2_crown4_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.hero2_crown5_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.hero2_crown6_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress7_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress8_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress9_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings4_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings5_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings6_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.hero2_makeup1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.hero2_makeup2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.hero2_makeup3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.hero2_makeup4_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.hero2_makeup5_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.hero2_makeup6_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.hero2_makeup7_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.hero2_makeup8_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.hero2_makeup9_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_de_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_es_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.indicator_3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.language_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.language_de_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.language_en_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.language_es_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.language_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.language_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.language_id_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.language_it_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.language_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.language_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.language_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.language_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.language_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.languages_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.languages_1_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.languages_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.languages_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.location_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_0_5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_0_6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_progress_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.makeup_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.makeup_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.makeup_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.makeup_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.makeup_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.makeup_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.makeup_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.makeup_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.makeup_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.makeup_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.makeup_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.makeup_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.makeup_7_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.makeup_7_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.makeup_8_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.makeup_8_2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.makeup_9_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.makeup_9_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.makeup_check_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.makeup_check_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.makeup_check_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.makeup_check_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.makeup_check_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.makeup_check_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.makeup_check_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.makeup_check_2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_5_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(155);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(156);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(157);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(158);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(159);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(160);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(161);
}).prototype = p = new cjs.Sprite();



(lib.popona1_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.popona2_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.popona3_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.popona4_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.popona5_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.popona6_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.popona7_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.popona8_img = function() {
	this.spriteSheet = ss["storage_atlas_23"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.popona9_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_24"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(162);
}).prototype = p = new cjs.Sprite();



(lib.skin_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.skin_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.skin_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.skin_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.skin_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.skin_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.skin_7_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.skin_8_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.skin_9_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.skip_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(163);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(164);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(165);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(166);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(167);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(168);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(169);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(170);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(171);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(172);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(173);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(174);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(175);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(176);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(177);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(178);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(179);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.track_move_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(180);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_25"];
	this.gotoAndStop(181);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.white_flash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.white_flash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.white_flash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.white_flash_4_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.wings1_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.wings2_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.wings3_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.wings4_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.wings5_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.wings6_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.wings7_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.wings8_img = function() {
	this.spriteSheet = ss["storage_atlas_21"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.wings9_img = function() {
	this.spriteSheet = ss["storage_atlas_22"];
	this.gotoAndStop(20);
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


(lib.wings_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.wings4_img();
	this.instance.setTransform(-225,-129);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-225,-129,449,254);
p.frameBounds = [rect];


(lib.wings_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wings1_img();
	this.instance.setTransform(-224,-113);

	this.instance_1 = new lib.wings2_img();
	this.instance_1.setTransform(-210,-123);

	this.instance_2 = new lib.wings3_img();
	this.instance_2.setTransform(-220,-114);

	this.instance_3 = new lib.wings4_img();
	this.instance_3.setTransform(-225,-129);

	this.instance_4 = new lib.wings5_img();
	this.instance_4.setTransform(-219,-113.9);

	this.instance_5 = new lib.wings6_img();
	this.instance_5.setTransform(-227,-114.9);

	this.instance_6 = new lib.wings7_img();
	this.instance_6.setTransform(-220,-91.9);

	this.instance_7 = new lib.wings8_img();
	this.instance_7.setTransform(-224,-115);

	this.instance_8 = new lib.wings9_img();
	this.instance_8.setTransform(-210,-113.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-224,-113,448,226);
p.frameBounds = [rect, new cjs.Rectangle(-210,-123,417,233), new cjs.Rectangle(-220,-114,440,224), new cjs.Rectangle(-225,-129,449,254), new cjs.Rectangle(-219,-113.9,437,225), new cjs.Rectangle(-227,-114.9,451,278), new cjs.Rectangle(-220,-91.9,438,214), new cjs.Rectangle(-224,-115,446,239), new cjs.Rectangle(-210,-113.9,420,229), null];


(lib.wings_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wings9_img();
	this.instance.setTransform(-119,-64.9,0.567,0.567);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A13MgIAA4/MArvAAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-80,280,160);
p.frameBounds = [rect];


(lib.wings_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wings8_img();
	this.instance.setTransform(-126.4,-67.7,0.567,0.567);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A13MgIAA4/MArvAAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-80,280,160);
p.frameBounds = [rect];


(lib.wings_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wings7_img();
	this.instance.setTransform(-124.2,-60.7,0.567,0.567);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A13MgIAA4/MArvAAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-80,280,160);
p.frameBounds = [rect];


(lib.wings_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wings6_img();
	this.instance.setTransform(-120,-74,0.532,0.532);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A13MgIAA4/MArvAAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-80,280,160);
p.frameBounds = [rect];


(lib.wings_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wings5_img();
	this.instance.setTransform(-123.9,-63.8,0.567,0.567);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A13MgIAA4/MArvAAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-80,280,160);
p.frameBounds = [rect];


(lib.wings_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wings4_img();
	this.instance.setTransform(-127.2,-72,0.567,0.567);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A13MgIAA4/MArvAAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-80,280,160);
p.frameBounds = [rect];


(lib.wings_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wings3_img();
	this.instance.setTransform(-115,-59,0.523,0.523);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A13MgIAA4/MArvAAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-80,280,160);
p.frameBounds = [rect];


(lib.wings_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wings2_img();
	this.instance.setTransform(-118.2,-66,0.567,0.567);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A13MgIAA4/MArvAAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-80,280,160);
p.frameBounds = [rect];


(lib.wings_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wings1_img();
	this.instance.setTransform(-115,-58,0.513,0.513);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A13MgIAA4/MArvAAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-80,280,160);
p.frameBounds = [rect];


(lib.wardrobe_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_4_img();
	this.instance.setTransform(-230,-295);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-295,460,590);
p.frameBounds = [rect];


(lib.wardrobe_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_3_img();
	this.instance.setTransform(-200,-295);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-295,400,590);
p.frameBounds = [rect];


(lib.wardrobe_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_2_img();
	this.instance.setTransform(-215,-295);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-295,430,590);
p.frameBounds = [rect];


(lib.wardrobe_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_1_img();
	this.instance.setTransform(-205,-295);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-295,410,590);
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
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("EhduAu4MAAAhdvMC7eAAAMAAABdvg");
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


(lib.popona_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.popona4_img();
	this.instance.setTransform(-269.9,-127);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-269.9,-127,451,279);
p.frameBounds = [rect];


(lib.popona_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.popona1_img();
	this.instance.setTransform(-121.5,-131);

	this.instance_1 = new lib.popona2_img();
	this.instance_1.setTransform(-104,-134);

	this.instance_2 = new lib.popona3_img();
	this.instance_2.setTransform(-147,-139);

	this.instance_3 = new lib.popona4_img();
	this.instance_3.setTransform(-269.9,-127);

	this.instance_4 = new lib.popona5_img();
	this.instance_4.setTransform(-270,-157);

	this.instance_5 = new lib.popona6_img();
	this.instance_5.setTransform(-226,-143);

	this.instance_6 = new lib.popona7_img();
	this.instance_6.setTransform(-216,-152);

	this.instance_7 = new lib.popona8_img();
	this.instance_7.setTransform(-252,-132);

	this.instance_8 = new lib.popona9_img();
	this.instance_8.setTransform(-216,-142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121.5,-131,243,262);
p.frameBounds = [rect, new cjs.Rectangle(-104,-134,229,182), new cjs.Rectangle(-147,-139,264,241), new cjs.Rectangle(-269.9,-127,451,279), new cjs.Rectangle(-270,-157,428,346), new cjs.Rectangle(-226,-143,353,172), new cjs.Rectangle(-216,-152,330,254), new cjs.Rectangle(-252,-132,355,180), new cjs.Rectangle(-216,-142,347,336), null];


(lib.object_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwAQBQmpmpABpYQgBpYGpmpQGomnJYAAQJYAAGpGnQGoGpAAJYQAAJYmoGpQmpGopYAAQpYAAmomog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
p.frameBounds = [rect];


(lib.makeup_check_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.makeup_check_2_4_img();
	this.instance.setTransform(-115,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-115,230,230);
p.frameBounds = [rect];


(lib.makeup_check_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.makeup_check_2_3_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.makeup_check_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.makeup_check_2_2_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.makeup_check_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.makeup_check_2_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.makeup_check_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.makeup_check_1_4_img();
	this.instance.setTransform(-115,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-115,230,230);
p.frameBounds = [rect];


(lib.makeup_check_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.makeup_check_1_3_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.makeup_check_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.makeup_check_1_2_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.makeup_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.makeup_check_1_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
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


(lib.hero2_makeup_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero2_makeup2_img();
	this.instance.setTransform(-72,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72,-84.5,144,169);
p.frameBounds = [rect];


(lib.hero2_makeup_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_makeup1_img();
	this.instance.setTransform(-72,-84.5);

	this.instance_1 = new lib.hero2_makeup2_img();
	this.instance_1.setTransform(-72,-84.5);

	this.instance_2 = new lib.hero2_makeup3_img();
	this.instance_2.setTransform(-72,-84.5);

	this.instance_3 = new lib.hero2_makeup4_img();
	this.instance_3.setTransform(-72,-84.5);

	this.instance_4 = new lib.hero2_makeup5_img();
	this.instance_4.setTransform(-72,-84.5);

	this.instance_5 = new lib.hero2_makeup6_img();
	this.instance_5.setTransform(-72,-84.5);

	this.instance_6 = new lib.hero2_makeup7_img();
	this.instance_6.setTransform(-72,-84.5);

	this.instance_7 = new lib.hero2_makeup8_img();
	this.instance_7.setTransform(-72,-84.5);

	this.instance_8 = new lib.hero2_makeup9_img();
	this.instance_8.setTransform(-72,-84.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72,-84.5,144,169);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.hero2_head_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_head_img();
	this.instance.setTransform(-72,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72,-84.5,144,169);
p.frameBounds = [rect];


(lib.hero2_hair_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero2_hair3_img();
	this.instance.setTransform(-95.9,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.9,-100,304,406);
p.frameBounds = [rect];


(lib.hero2_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_hair1_img();
	this.instance.setTransform(-118.4,-103.5);

	this.instance_1 = new lib.hero2_hair2_img();
	this.instance_1.setTransform(-100.9,-141.5);

	this.instance_2 = new lib.hero2_hair3_img();
	this.instance_2.setTransform(-95.9,-100);

	this.instance_3 = new lib.hero2_hair4_img();
	this.instance_3.setTransform(-100.4,-96.5);

	this.instance_4 = new lib.hero2_hair5_img();
	this.instance_4.setTransform(-91.4,-93);

	this.instance_5 = new lib.hero2_hair6_img();
	this.instance_5.setTransform(-137.4,-106);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.4,-103.5,255,483);
p.frameBounds = [rect, new cjs.Rectangle(-100.9,-141.5,238,465), new cjs.Rectangle(-95.9,-100,304,406), new cjs.Rectangle(-100.4,-96.5,220,361), new cjs.Rectangle(-91.4,-93,183,148), new cjs.Rectangle(-137.4,-106,265,331)];


(lib.hero2_fringe_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe3_img();
	this.instance.setTransform(-96.4,-107);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.4,-107,185,208);
p.frameBounds = [rect];


(lib.hero2_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_fringe1_img();
	this.instance.setTransform(-97.5,-113);

	this.instance_1 = new lib.hero2_fringe2_img();
	this.instance_1.setTransform(-94.9,-147);

	this.instance_2 = new lib.hero2_fringe3_img();
	this.instance_2.setTransform(-96.4,-107);

	this.instance_3 = new lib.hero2_fringe4_img();
	this.instance_3.setTransform(-98.9,-98.5);

	this.instance_4 = new lib.hero2_fringe5_img();
	this.instance_4.setTransform(-126.4,-100.5);

	this.instance_5 = new lib.hero2_fringe6_img();
	this.instance_5.setTransform(-91,-101.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.5,-113,195,226);
p.frameBounds = [rect, new cjs.Rectangle(-94.9,-147,170,222), new cjs.Rectangle(-96.4,-107,185,208), new cjs.Rectangle(-98.9,-98.5,178,236), new cjs.Rectangle(-126.4,-100.5,251,336), new cjs.Rectangle(-91,-101.5,159,139)];


(lib.hero2_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_eyes1_img();
	this.instance.setTransform(-72,-84.5);

	this.instance_1 = new lib.hero2_eyes2_img();
	this.instance_1.setTransform(-72,-84.5);

	this.instance_2 = new lib.hero2_eyes3_img();
	this.instance_2.setTransform(-72,-84.5);

	this.instance_3 = new lib.hero2_eyes4_img();
	this.instance_3.setTransform(-72,-84.5);

	this.instance_4 = new lib.hero2_eyes5_img();
	this.instance_4.setTransform(-72,-84.5);

	this.instance_5 = new lib.hero2_eyes6_img();
	this.instance_5.setTransform(-72,-84.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72,-84.5,144,169);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_earrings_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero2_earrings2_img();
	this.instance.setTransform(-9,-5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9,-5.7,18,67);
p.frameBounds = [rect];


(lib.hero2_earrings_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_earrings1_img();
	this.instance.setTransform(-12,-10.5);

	this.instance_1 = new lib.hero2_earrings2_img();
	this.instance_1.setTransform(-9,-5.7);

	this.instance_2 = new lib.hero2_earrings3_img();
	this.instance_2.setTransform(-11,-7.2);

	this.instance_3 = new lib.hero2_earrings4_img();
	this.instance_3.setTransform(-15.5,-10.2);

	this.instance_4 = new lib.hero2_earrings5_img();
	this.instance_4.setTransform(-11.5,-7.2);

	this.instance_5 = new lib.hero2_earrings6_img();
	this.instance_5.setTransform(-11.5,-6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12,-10.5,24,21);
p.frameBounds = [rect, new cjs.Rectangle(-9,-5.7,18,67), new cjs.Rectangle(-11,-7.2,25,56), new cjs.Rectangle(-15.5,-10.2,25,23), new cjs.Rectangle(-11.5,-7.2,25,61), new cjs.Rectangle(-11.5,-6.2,23,62), null];


(lib.hero2_dress_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress4_img();
	this.instance.setTransform(-301.5,-273.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-301.5,-273.5,603,539);
p.frameBounds = [rect];


(lib.hero2_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_dress1_img();
	this.instance.setTransform(-301.5,-273.5);

	this.instance_1 = new lib.hero2_dress2_img();
	this.instance_1.setTransform(-301.5,-273.5);

	this.instance_2 = new lib.hero2_dress3_img();
	this.instance_2.setTransform(-301.5,-273.5);

	this.instance_3 = new lib.hero2_dress4_img();
	this.instance_3.setTransform(-301.5,-273.5);

	this.instance_4 = new lib.hero2_dress5_img();
	this.instance_4.setTransform(-301.5,-273.5);

	this.instance_5 = new lib.hero2_dress6_img();
	this.instance_5.setTransform(-301.5,-273.5);

	this.instance_6 = new lib.hero2_dress7_img();
	this.instance_6.setTransform(-301.5,-273.5);

	this.instance_7 = new lib.hero2_dress8_img();
	this.instance_7.setTransform(-301.5,-273.5);

	this.instance_8 = new lib.hero2_dress9_img();
	this.instance_8.setTransform(-301.5,-273.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-301.5,-273.5,603,539);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.hero2_crown_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero2_crown2_img();
	this.instance.setTransform(-95,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-63,188,139);
p.frameBounds = [rect];


(lib.hero2_crown_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_crown1_img();
	this.instance.setTransform(-81,-52.5);

	this.instance_1 = new lib.hero2_crown2_img();
	this.instance_1.setTransform(-95,-63);

	this.instance_2 = new lib.hero2_crown3_img();
	this.instance_2.setTransform(-87,-54);

	this.instance_3 = new lib.hero2_crown4_img();
	this.instance_3.setTransform(-73,-54);

	this.instance_4 = new lib.hero2_crown5_img();
	this.instance_4.setTransform(-96,-63);

	this.instance_5 = new lib.hero2_crown6_img();
	this.instance_5.setTransform(-86,-54);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81,-52.5,162,105);
p.frameBounds = [rect, new cjs.Rectangle(-95,-63,188,139), new cjs.Rectangle(-87,-54,169,87), new cjs.Rectangle(-73,-54,163,143), new cjs.Rectangle(-96,-63,180,130), new cjs.Rectangle(-86,-54,159,134), null];


(lib.hero2_bodyhorse_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero2_bodyhorse3_img();
	this.instance.setTransform(-297.5,-240.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-297.5,-240.5,595,481);
p.frameBounds = [rect];


(lib.hero2_bodyhorse_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_bodyhorse1_img();
	this.instance.setTransform(-297.5,-240.5);

	this.instance_1 = new lib.hero2_bodyhorse2_img();
	this.instance_1.setTransform(-297.5,-240.5);

	this.instance_2 = new lib.hero2_bodyhorse3_img();
	this.instance_2.setTransform(-297.5,-240.5);

	this.instance_3 = new lib.hero2_bodyhorse4_img();
	this.instance_3.setTransform(-297.5,-240.5);

	this.instance_4 = new lib.hero2_bodyhorse5_img();
	this.instance_4.setTransform(-297.5,-240.5);

	this.instance_5 = new lib.hero2_bodyhorse6_img();
	this.instance_5.setTransform(-297.5,-240.5);

	this.instance_6 = new lib.hero2_bodyhorse7_img();
	this.instance_6.setTransform(-297.5,-240.5);

	this.instance_7 = new lib.hero2_bodyhorse8_img();
	this.instance_7.setTransform(-297.5,-240.5);

	this.instance_8 = new lib.hero2_bodyhorse9_img();
	this.instance_8.setTransform(-297.5,-240.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-297.5,-240.5,595,481);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_wand_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero1_wand2_img();
	this.instance.setTransform(-24.5,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24.5,-51,51,132);
p.frameBounds = [rect];


(lib.hero1_wand_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_wand1_img();
	this.instance.setTransform(-26.5,-68.5);

	this.instance_1 = new lib.hero1_wand2_img();
	this.instance_1.setTransform(-24.5,-51);

	this.instance_2 = new lib.hero1_wand3_img();
	this.instance_2.setTransform(-13.5,-67.5);

	this.instance_3 = new lib.hero1_wand4_img();
	this.instance_3.setTransform(-37,-63);

	this.instance_4 = new lib.hero1_wand5_img();
	this.instance_4.setTransform(-11,-57.5);

	this.instance_5 = new lib.hero1_wand6_img();
	this.instance_5.setTransform(-26.5,-61);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.5,-68.5,53,137);
p.frameBounds = [rect, new cjs.Rectangle(-24.5,-51,51,132), new cjs.Rectangle(-13.5,-67.5,49,138), new cjs.Rectangle(-37,-63,69,130), new cjs.Rectangle(-11,-57.5,33,132), new cjs.Rectangle(-26.5,-61,53,128), null];


(lib.hero1_makeup_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero1_makeup9_img();
	this.instance.setTransform(-76.5,-85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-85.5,153,171);
p.frameBounds = [rect];


(lib.hero1_makeup_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_makeup1_img();
	this.instance.setTransform(-76.5,-85.5);

	this.instance_1 = new lib.hero1_makeup2_img();
	this.instance_1.setTransform(-76.5,-85.5);

	this.instance_2 = new lib.hero1_makeup3_img();
	this.instance_2.setTransform(-76.5,-85.5);

	this.instance_3 = new lib.hero1_makeup4_img();
	this.instance_3.setTransform(-76.5,-85.5);

	this.instance_4 = new lib.hero1_makeup5_img();
	this.instance_4.setTransform(-76.5,-85.5);

	this.instance_5 = new lib.hero1_makeup6_img();
	this.instance_5.setTransform(-76.5,-85.5);

	this.instance_6 = new lib.hero1_makeup7_img();
	this.instance_6.setTransform(-76.5,-85.5);

	this.instance_7 = new lib.hero1_makeup8_img();
	this.instance_7.setTransform(-76.5,-85.5);

	this.instance_8 = new lib.hero1_makeup9_img();
	this.instance_8.setTransform(-76.5,-85.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-85.5,153,171);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.hero1_head_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_head_img();
	this.instance.setTransform(-76.5,-85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-85.5,153,171);
p.frameBounds = [rect];


(lib.hero1_hair_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_hair6_img();
	this.instance.setTransform(-132.5,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-132.5,-89,265,367);
p.frameBounds = [rect];


(lib.hero1_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-82.5,-71.2);

	this.instance_1 = new lib.hero1_hair3_img();
	this.instance_1.setTransform(-148,-89.5);

	this.instance_2 = new lib.hero1_hair4_img();
	this.instance_2.setTransform(-113,-87);

	this.instance_3 = new lib.hero1_hair5_img();
	this.instance_3.setTransform(-166.5,-103.5);

	this.instance_4 = new lib.hero1_hair6_img();
	this.instance_4.setTransform(-132.5,-89);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.5,-71.2,169,401);
p.frameBounds = [rect, null, new cjs.Rectangle(-148,-89.5,282,307), new cjs.Rectangle(-113,-87,220,357), new cjs.Rectangle(-166.5,-103.5,322,312), new cjs.Rectangle(-132.5,-89,265,367)];


(lib.hero1_fringe_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fringe6_img();
	this.instance.setTransform(-103.4,-92.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103.4,-92.5,211,151);
p.frameBounds = [rect];


(lib.hero1_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_fringe1_img();
	this.instance.setTransform(-88,-89);

	this.instance_1 = new lib.hero1_fringe2_img();
	this.instance_1.setTransform(-128.9,-113);

	this.instance_2 = new lib.hero1_fringe3_img();
	this.instance_2.setTransform(-151.9,-111);

	this.instance_3 = new lib.hero1_fringe4_img();
	this.instance_3.setTransform(-132.5,-90);

	this.instance_4 = new lib.hero1_fringe5_img();
	this.instance_4.setTransform(-103.5,-91);

	this.instance_5 = new lib.hero1_fringe6_img();
	this.instance_5.setTransform(-103.4,-92.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88,-89,176,178);
p.frameBounds = [rect, new cjs.Rectangle(-128.9,-113,256,322), new cjs.Rectangle(-151.9,-111,306,302), new cjs.Rectangle(-132.5,-90,263,357), new cjs.Rectangle(-103.5,-91,223,133), new cjs.Rectangle(-103.4,-92.5,211,151)];


(lib.hero1_finger_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_finger_img();
	this.instance.setTransform(-10.5,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.5,-5.5,21,11);
p.frameBounds = [rect];


(lib.hero1_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_eyes1_img();
	this.instance.setTransform(-76.5,-85.5);

	this.instance_1 = new lib.hero1_eyes2_img();
	this.instance_1.setTransform(-76.5,-85.5);

	this.instance_2 = new lib.hero1_eyes3_img();
	this.instance_2.setTransform(-76.5,-85.5);

	this.instance_3 = new lib.hero1_eyes4_img();
	this.instance_3.setTransform(-76.5,-85.5);

	this.instance_4 = new lib.hero1_eyes5_img();
	this.instance_4.setTransform(-76.5,-85.5);

	this.instance_5 = new lib.hero1_eyes6_img();
	this.instance_5.setTransform(-76.5,-85.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-85.5,153,171);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_earrings_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero1_earrings3_img();
	this.instance.setTransform(-74.4,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.4,-27.5,150,55);
p.frameBounds = [rect];


(lib.hero1_earrings_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_earrings1_img();
	this.instance.setTransform(-75.5,-27.5);

	this.instance_1 = new lib.hero1_earrings2_img();
	this.instance_1.setTransform(-75.5,-28);

	this.instance_2 = new lib.hero1_earrings3_img();
	this.instance_2.setTransform(-74.4,-27.5);

	this.instance_3 = new lib.hero1_earrings4_img();
	this.instance_3.setTransform(-73.9,-28.5);

	this.instance_4 = new lib.hero1_earrings5_img();
	this.instance_4.setTransform(-75.9,-29);

	this.instance_5 = new lib.hero1_earrings6_img();
	this.instance_5.setTransform(-74,-28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.5,-27.5,151,55);
p.frameBounds = [rect, new cjs.Rectangle(-75.5,-28,152,56), new cjs.Rectangle(-74.4,-27.5,150,55), new cjs.Rectangle(-73.9,-28.5,149,77), new cjs.Rectangle(-75.9,-29,150,59), new cjs.Rectangle(-74,-28.5,148,70), null];


(lib.hero1_dress_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero1_dress2_img();
	this.instance.setTransform(-332,-236);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-332,-236,664,472);
p.frameBounds = [rect];


(lib.hero1_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_dress1_img();
	this.instance.setTransform(-332,-236);

	this.instance_1 = new lib.hero1_dress2_img();
	this.instance_1.setTransform(-332,-236);

	this.instance_2 = new lib.hero1_dress3_img();
	this.instance_2.setTransform(-332,-236);

	this.instance_3 = new lib.hero1_dress4_img();
	this.instance_3.setTransform(-332,-236);

	this.instance_4 = new lib.hero1_dress5_img();
	this.instance_4.setTransform(-332,-236);

	this.instance_5 = new lib.hero1_dress6_img();
	this.instance_5.setTransform(-332,-236);

	this.instance_6 = new lib.hero1_dress7_img();
	this.instance_6.setTransform(-332,-236);

	this.instance_7 = new lib.hero1_dress8_img();
	this.instance_7.setTransform(-332,-236);

	this.instance_8 = new lib.hero1_dress9_img();
	this.instance_8.setTransform(-332,-236);

	this.instance_9 = new lib.hero1_dress0_img();
	this.instance_9.setTransform(-332,-236);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-332,-236,664,472);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_crown_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero1_crown6_img();
	this.instance.setTransform(-75.9,-17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.9,-17.7,145,81);
p.frameBounds = [rect];


(lib.hero1_crown_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_crown1_img();
	this.instance.setTransform(-67.5,-39);

	this.instance_1 = new lib.hero1_crown2_img();
	this.instance_1.setTransform(-67.9,-25.2);

	this.instance_2 = new lib.hero1_crown3_img();
	this.instance_2.setTransform(-69,-29.7);

	this.instance_3 = new lib.hero1_crown4_img();
	this.instance_3.setTransform(-93.5,-31.2);

	this.instance_4 = new lib.hero1_crown5_img();
	this.instance_4.setTransform(-82.9,-37.7);

	this.instance_5 = new lib.hero1_crown6_img();
	this.instance_5.setTransform(-75.9,-17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.5,-39,135,78);
p.frameBounds = [rect, new cjs.Rectangle(-67.9,-25.2,130,69), new cjs.Rectangle(-69,-29.7,133,69), new cjs.Rectangle(-93.5,-31.2,180,107), new cjs.Rectangle(-82.9,-37.7,163,114), new cjs.Rectangle(-75.9,-17.7,145,81), null];


(lib.headdress_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown_for_closet1_6_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxKPoIAA/OMAiVAAAIAAfOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,220,200);
p.frameBounds = [rect];


(lib.headdress_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown_for_closet2_6_img();
	this.instance.setTransform(100,-100,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxKOEIAA8HMAiVAAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,220,200);
p.frameBounds = [rect];


(lib.headdress_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown_for_closet1_5_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxKPoIAA/OMAiVAAAIAAfOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,220,200);
p.frameBounds = [rect];


(lib.headdress_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown_for_closet2_5_img();
	this.instance.setTransform(100,-100,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxKOEIAA8HMAiVAAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,220,200);
p.frameBounds = [rect];


(lib.headdress_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown_for_closet1_4_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxKPoIAA/OMAiVAAAIAAfOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,220,200);
p.frameBounds = [rect];


(lib.headdress_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown_for_closet2_4_img();
	this.instance.setTransform(100,-100,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxKOEIAA8HMAiVAAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,220,200);
p.frameBounds = [rect];


(lib.headdress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown_for_closet1_3_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxKK8IAA13MAiVAAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,220,200);
p.frameBounds = [rect];


(lib.headdress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown_for_closet2_3_img();
	this.instance.setTransform(100,-100,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxKOEIAA8HMAiVAAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,220,200);
p.frameBounds = [rect];


(lib.headdress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown_for_closet1_2_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxKPoIAA/OMAiVAAAIAAfOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,220,200);
p.frameBounds = [rect];


(lib.headdress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown_for_closet2_2_img();
	this.instance.setTransform(100,-100,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxKOEIAA8HMAiVAAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,220,200);
p.frameBounds = [rect];


(lib.headdress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown_for_closet1_1_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxKPoIAA/OMAiVAAAIAAfOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,220,200);
p.frameBounds = [rect];


(lib.headdress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crown_for_closet2_1_img();
	this.instance.setTransform(100,-100,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxKOEIAA8HMAiVAAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,220,200);
p.frameBounds = [rect];


(lib.hairstyle_check_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_check_2_2_img();
	this.instance.setTransform(-210,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-220,420,440);
p.frameBounds = [rect];


(lib.hairstyle_check_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_check_2_1_img();
	this.instance.setTransform(-195,-195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-195,390,390);
p.frameBounds = [rect];


(lib.hairstyle_check_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_check_1_2_img();
	this.instance.setTransform(-210,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-220,420,440);
p.frameBounds = [rect];


(lib.hairstyle_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_check_1_1_img();
	this.instance.setTransform(-195,-195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-195,390,390);
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


(lib.fern_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.fern_1_img();
	this.instance.setTransform(-100,-175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-175,200,200);
p.frameBounds = [rect];


(lib.earrings_back_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.earrings_back2_img();
	this.instance.setTransform(-9,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9,-33.5,18,67);
p.frameBounds = [rect];


(lib.earrings_back_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.earrings_back2_img();
	this.instance.setTransform(-9,-33.5);

	this.instance_1 = new lib.earrings_back3_img();
	this.instance_1.setTransform(-10,-29.2);

	this.instance_2 = new lib.earrings_back5_img();
	this.instance_2.setTransform(-15,-31.2);

	this.instance_3 = new lib.earrings_back6_img();
	this.instance_3.setTransform(-15,-27.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, new cjs.Rectangle(-9,-33.5,18,67), new cjs.Rectangle(-10,-29.2,24,57), null, new cjs.Rectangle(-15,-31.2,25,62), new cjs.Rectangle(-15,-27.2,24,62), null];


(lib.earrings_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ear_for_closet2_6_img();
	this.instance.setTransform(-66.4,-98.7,0.521,0.521);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxKSvMAAAgleMAiVAAAMAAAAleg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-120,220,240);
p.frameBounds = [rect];


(lib.earrings_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ear_for_closet1_6_img();
	this.instance.setTransform(-68.2,-109,0.604,0.604);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxKR9MAAAgj5MAiVAAAMAAAAj5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-115,220,230);
p.frameBounds = [rect];


(lib.earrings_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ear_for_closet2_5_img();
	this.instance.setTransform(-67.5,-98,0.521,0.521);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxKSvMAAAgleMAiVAAAMAAAAleg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-120,220,240);
p.frameBounds = [rect];


(lib.earrings_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ear_for_closet1_5_img();
	this.instance.setTransform(-74.9,-93.3,0.604,0.604);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxKPnIAA/NMAiVAAAIAAfNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,220,200);
p.frameBounds = [rect];


(lib.earrings_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ear_for_closet2_4_img();
	this.instance.setTransform(-74.3,-41.6,0.604,0.604);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxKH0IAAvmMAiVAAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-50,220,100);
p.frameBounds = [rect];


(lib.earrings_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ear_for_closet1_4_img();
	this.instance.setTransform(-71.6,-116.8,0.604,0.604);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxKSvMAAAgldMAiVAAAMAAAAldg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-120,220,240);
p.frameBounds = [rect];


(lib.earrings_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ear_for_closet2_3_img();
	this.instance.setTransform(-75.2,-105.7,0.604,0.604);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxKSvMAAAgleMAiVAAAMAAAAleg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-120,220,240);
p.frameBounds = [rect];


(lib.earrings_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ear_for_closet1_3_img();
	this.instance.setTransform(-72.2,-89.4,0.604,0.604);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxKPnIAA/NMAiVAAAIAAfNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,220,200);
p.frameBounds = [rect];


(lib.earrings_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ear_for_closet2_2_img();
	this.instance.setTransform(-65.8,-122,0.604,0.604);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxKUTMAAAgolMAiVAAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-130,220,260);
p.frameBounds = [rect];


(lib.earrings_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ear_for_closet1_2_img();
	this.instance.setTransform(-76.4,-91.2,0.604,0.604);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxKPnIAA/NMAiVAAAIAAfNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,220,200);
p.frameBounds = [rect];


(lib.earrings_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ear_for_closet2_1_img();
	this.instance.setTransform(-74.3,-39.6,0.604,0.604);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxKH0IAAvmMAiVAAAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-50,220,100);
p.frameBounds = [rect];


(lib.earrings_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ear_for_closet1_1_img();
	this.instance.setTransform(-76.1,-87.9,0.604,0.604);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxKPnIAA/NMAiVAAAIAAfNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,220,200);
p.frameBounds = [rect];


(lib.dress_check_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_check_2_2_img();
	this.instance.setTransform(-200,-235);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-235,400,470);
p.frameBounds = [rect];


(lib.dress_check_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_check_2_1_img();
	this.instance.setTransform(-210,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-240,420,480);
p.frameBounds = [rect];


(lib.dress_check_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_check_1_2_img();
	this.instance.setTransform(-200,-235);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-235,400,470);
p.frameBounds = [rect];


(lib.dress_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_check_1_1_img();
	this.instance.setTransform(-210,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-240,420,480);
p.frameBounds = [rect];


(lib.decor_location_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_location_1_1_img();
	this.instance.setTransform(-210,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-250,420,500);
p.frameBounds = [rect];


(lib.current_location_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_1_1_img();
	this.instance.setTransform(-210,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-250,420,500);
p.frameBounds = [rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-250,-110);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-250,-110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-110,500,220);
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


(lib.background_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_10_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_9_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_8_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
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


(lib.background_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_2_img();
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


(lib.accessory_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_wand6_img();
	this.instance.setTransform(-26.5,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzMgIAA4/IPnAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-80,100,160);
p.frameBounds = [rect];


(lib.accessory_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_wand5_img();
	this.instance.setTransform(16,-66,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzMgIAA4/IPnAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-80,100,160);
p.frameBounds = [rect];


(lib.accessory_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_wand4_img();
	this.instance.setTransform(-34.5,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzMgIAA4/IPnAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-80,100,160);
p.frameBounds = [rect];


(lib.accessory_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_wand3_img();
	this.instance.setTransform(-24.5,-69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzMgIAA4/IPnAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-80,100,160);
p.frameBounds = [rect];


(lib.accessory_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_wand2_img();
	this.instance.setTransform(25,-66,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzMgIAA4/IPnAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-80,100,160);
p.frameBounds = [rect];


(lib.accessory_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_wand1_img();
	this.instance.setTransform(-26.5,-68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzMgIAA4/IPnAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-80,100,160);
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(11));

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


(lib.white_flash_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.white_flash_4_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.white_flash_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.white_flash_3_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.white_flash_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.white_flash_2_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.white_flash_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.white_flash_1_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
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
	this.instance.setTransform(-12,-12);

	this.instance_1 = new lib.gravity_explosion_2_img();
	this.instance_1.setTransform(-12,-12);

	this.instance_2 = new lib.gravity_explosion_3_img();
	this.instance_2.setTransform(-12,-12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12,-12,24,24);
p.frameBounds = [rect, rect, rect, rect];


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
	this.instance.setTransform(-32,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-32,40,40);
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


(lib.ParticleBigGravityExplosionSecondMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gravity_big_explosion_second_1_img();
	this.instance.setTransform(-18,-18);

	this.instance_1 = new lib.gravity_big_explosion_second_2_img();
	this.instance_1.setTransform(-18,-18);

	this.instance_2 = new lib.gravity_big_explosion_second_3_img();
	this.instance_2.setTransform(-18,-18);

	this.instance_3 = new lib.gravity_big_explosion_second_4_img();
	this.instance_3.setTransform(-18,-18);

	this.instance_4 = new lib.gravity_big_explosion_second_5_img();
	this.instance_4.setTransform(-18,-18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect, rect, rect, rect, rect];


(lib.ParticleBigGravityExplosionMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.gravity_big_explosion_1_img();
	this.instance.setTransform(-18,-18);

	this.instance_1 = new lib.gravity_big_explosion_2_img();
	this.instance_1.setTransform(-9,-9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect, rect=new cjs.Rectangle(-9,-9,18,18), rect, rect, rect];


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


(lib.nav_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_5_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.nav_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_4_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,160,160);
p.frameBounds = [rect];


(lib.nav_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_3_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.nav_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_2_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.nav_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_1_img();
	this.instance.setTransform(-80,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-50,160,100);
p.frameBounds = [rect];


(lib.nav_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_5_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.nav_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_4_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,160,160);
p.frameBounds = [rect];


(lib.nav_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_3_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.nav_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_2_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.nav_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_1_img();
	this.instance.setTransform(-80,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-50,160,100);
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


(lib.wings_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0.1,0.48,0.48,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
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
p.nominalBounds = rect = new cjs.Rectangle(-250,-110,500,220);
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


(lib.makeup_check_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.makeup_check_1_4_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},24).to({alpha:0.102},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-115,230,230);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup_check_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.makeup_check_1_3_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},24).to({alpha:0.102},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup_check_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.makeup_check_1_2_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},24).to({alpha:0.102},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup_check_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.makeup_check_1_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},24).to({alpha:0.102},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup_check_0_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.makeup_check_3_4_mc();
	this.instance.alpha = 0.602;

	this.instance_1 = new lib.makeup_check_2_4_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-115,230,230);
p.frameBounds = [rect, rect];


(lib.makeup_check_0_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.makeup_check_3_3_mc();
	this.instance.alpha = 0.602;

	this.instance_1 = new lib.makeup_check_2_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect, rect];


(lib.makeup_check_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.makeup_check_3_2_mc();
	this.instance.alpha = 0.602;

	this.instance_1 = new lib.makeup_check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect, rect];


(lib.makeup_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.makeup_check_3_1_mc();
	this.instance.alpha = 0.602;

	this.instance_1 = new lib.makeup_check_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect, rect];


(lib.makeup_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_9_2_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1O2IAA9qIdrAAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.makeup_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_9_1_img();
	this.instance.setTransform(-95,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvmPoIAA/PIfNAAIAAfPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.makeup_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_8_2_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1O2IAA9qIdrAAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.makeup_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_8_1_img();
	this.instance.setTransform(-95,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvmPoIAA/PIfNAAIAAfPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.makeup_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_7_2_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1O2IAA9qIdrAAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.makeup_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_7_1_img();
	this.instance.setTransform(-95,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvmPoIAA/PIfNAAIAAfPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.makeup_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_6_2_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1O2IAA9qIdrAAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.makeup_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_6_1_img();
	this.instance.setTransform(-95,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvmPoIAA/PIfNAAIAAfPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.makeup_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_5_2_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1O2IAA9qIdrAAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.makeup_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_5_1_img();
	this.instance.setTransform(-95,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvmPoIAA/PIfNAAIAAfPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.makeup_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_4_2_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1O2IAA9qIdrAAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.makeup_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_4_1_img();
	this.instance.setTransform(-95,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvmPoIAA/PIfNAAIAAfPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.makeup_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_3_2_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1O2IAA9qIdrAAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.makeup_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_3_1_img();
	this.instance.setTransform(-95,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvmPoIAA/PIfNAAIAAfPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.makeup_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_2_2_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1O2IAA9qIdrAAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.makeup_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_2_1_img();
	this.instance.setTransform(-95,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvmPoIAA/PIfNAAIAAfPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.makeup_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_1_2_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1O2IAA9qIdrAAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.makeup_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.makeup_1_1_img();
	this.instance.setTransform(-95,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvmPoIAA/PIfNAAIAAfPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.makeup_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0.1,0.48,0.48,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
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


(lib.hero2_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero2_crown_main_mc();
	this.instance.setTransform(-206,-284.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.7,x:-209.9,y:-274},46).to({rotation:0,x:-206,y:-284.5},48).wait(1));

	// animation
	this.instance_1 = new lib.hero2_fringe_main_mc();
	this.instance_1.setTransform(-193,-226.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-1.7,x:-195.1,y:-216.2},46).to({rotation:0,x:-193,y:-226.2},48).wait(1));

	// animation
	this.instance_2 = new lib.hero2_earrings_main_mc();
	this.instance_2.setTransform(-149,-188.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-1.7,x:-150.1,y:-180},46).to({rotation:0,x:-149,y:-188.7},48).wait(1));

	// animation
	this.instance_3 = new lib.hero2_makeup_main_mc();
	this.instance_3.setTransform(-199,-225.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-1.7,x:-201.1,y:-215.3},46).to({rotation:0,x:-199,y:-225.5},48).wait(1));

	// animation
	this.instance_4 = new lib.hero2_head_mc();
	this.instance_4.setTransform(-199,-225.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-1.7,x:-201.1,y:-215.3},46).to({rotation:0,x:-199,y:-225.5},48).wait(1));

	// animation
	this.instance_5 = new lib.hero2_dress_main_mc();
	this.instance_5.setTransform(-3,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:54.6},46).to({y:44.6},48).wait(1));

	// animation
	this.instance_6 = new lib.popona_main_mc();
	this.instance_6.setTransform(-11,111.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:121.4},46).to({y:111.4},48).wait(1));

	// animation
	this.instance_7 = new lib.hero2_bodyhorse_main_mc();
	this.instance_7.setTransform(0,69.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:79.6},46).to({y:69.6},48).wait(1));

	// animation
	this.instance_8 = new lib.earrings_back_main_mc();
	this.instance_8.setTransform(-249.5,-163.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-1.7,x:-249.8,y:-152.1},46).to({rotation:0,x:-249.5,y:-163.7},48).wait(1));

	// animation
	this.instance_9 = new lib.hero2_hair_main_mc();
	this.instance_9.setTransform(-193,-226.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:-1.7,x:-195.1,y:-216.2},46).to({rotation:0,x:-193,y:-226.2},48).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-304.5,-347.5,603,657.6);
p.frameBounds = [rect, new cjs.Rectangle(-304.5,-347.3,603,657.6), new cjs.Rectangle(-304.5,-347.1,603,657.6), new cjs.Rectangle(-304.5,-346.9,603,657.6), new cjs.Rectangle(-304.5,-346.6,603,657.6), new cjs.Rectangle(-304.5,-346.4,603,657.6), new cjs.Rectangle(-304.5,-346.3,603,657.7), new cjs.Rectangle(-304.5,-346.3,603,657.9), new cjs.Rectangle(-304.5,-346.1,603,658), new cjs.Rectangle(-304.5,-345.9,603,657.9), new cjs.Rectangle(-304.5,-345.7,603,657.9), new cjs.Rectangle(-304.5,-345.5,603,658), new cjs.Rectangle(-304.5,-345.3,603,658), new cjs.Rectangle(-304.5,-345,603,658), new cjs.Rectangle(-304.5,-345.1,603,658.3), new cjs.Rectangle(-304.5,-344.9,603,658.3), new cjs.Rectangle(-304.5,-344.7,603,658.3), new cjs.Rectangle(-304.5,-344.5,603,658.3), new cjs.Rectangle(-304.5,-344.3,603,658.3), new cjs.Rectangle(-304.5,-344.1,603,658.3), new cjs.Rectangle(-304.5,-343.9,603,658.3), new cjs.Rectangle(-304.5,-344,603,658.6), new cjs.Rectangle(-304.5,-343.7,603,658.6), new cjs.Rectangle(-304.5,-343.5,603,658.6), new cjs.Rectangle(-304.5,-343.3,603,658.6), new cjs.Rectangle(-304.5,-343.1,603,658.6), new cjs.Rectangle(-304.5,-342.9,603,658.7), new cjs.Rectangle(-304.5,-343,603,658.9), new cjs.Rectangle(-304.5,-342.8,603,659), new cjs.Rectangle(-304.5,-342.5,603,658.9), new cjs.Rectangle(-304.6,-342.3,603.2,658.9), new cjs.Rectangle(-304.7,-342.1,603.3,659), new cjs.Rectangle(-304.8,-342,603.3,659), new cjs.Rectangle(-304.9,-341.7,603.4,658.9), new cjs.Rectangle(-305.2,-341.8,603.7,659.3), new cjs.Rectangle(-305.3,-341.6,603.8,659.3), new cjs.Rectangle(-305.4,-341.3,603.9,659.3), new cjs.Rectangle(-305.5,-341.2,604,659.3), new cjs.Rectangle(-305.5,-340.9,604.1,659.3), new cjs.Rectangle(-305.6,-340.7,604.2,659.3), new cjs.Rectangle(-305.8,-340.5,604.3,659.3), new cjs.Rectangle(-306.1,-340.6,604.6,659.6), new cjs.Rectangle(-306.1,-340.4,604.7,659.6), new cjs.Rectangle(-306.2,-340.2,604.8,659.6), new cjs.Rectangle(-306.3,-340,604.9,659.6), new cjs.Rectangle(-306.4,-339.8,605,659.7), new cjs.Rectangle(-306.7,-339.8,605.3,659.9), new cjs.Rectangle(-306.5,-339.7,605,659.6), new cjs.Rectangle(-306.3,-339.9,604.9,659.6), new cjs.Rectangle(-306.2,-340.1,604.8,659.6), new cjs.Rectangle(-306.1,-340.3,604.7,659.6), new cjs.Rectangle(-306.1,-340.5,604.6,659.6), new cjs.Rectangle(-305.8,-340.5,604.3,659.3), new cjs.Rectangle(-305.7,-340.6,604.2,659.2), new cjs.Rectangle(-305.6,-340.8,604.1,659.3), new cjs.Rectangle(-305.5,-341,604,659.3), new cjs.Rectangle(-305.4,-341.3,604,659.3), new cjs.Rectangle(-305.3,-341.4,603.9,659.2), new cjs.Rectangle(-305.2,-341.6,603.8,659.2), new cjs.Rectangle(-304.9,-341.6,603.5,659), new cjs.Rectangle(-304.9,-341.8,603.4,659), new cjs.Rectangle(-304.8,-341.9,603.3,658.9), new cjs.Rectangle(-304.7,-342.2,603.2,659), new cjs.Rectangle(-304.6,-342.3,603.1,658.9), new cjs.Rectangle(-304.5,-342.6,603,658.9), new cjs.Rectangle(-304.5,-342.8,603,659), new cjs.Rectangle(-304.5,-342.6,603,658.6), new cjs.Rectangle(-304.5,-342.9,603,658.7), new cjs.Rectangle(-304.5,-343.1,603,658.6), new cjs.Rectangle(-304.5,-343.2,603,658.5), new cjs.Rectangle(-304.5,-343.5,603,658.6), new cjs.Rectangle(-304.5,-343.7,603,658.6), new cjs.Rectangle(-304.5,-343.9,603,658.6), new cjs.Rectangle(-304.5,-343.9,603,658.3), new cjs.Rectangle(-304.5,-344,603,658.3), new cjs.Rectangle(-304.5,-344.2,603,658.2), new cjs.Rectangle(-304.5,-344.5,603,658.3), new cjs.Rectangle(-304.5,-344.6,603,658.3), new cjs.Rectangle(-304.5,-344.8,603,658.2), new cjs.Rectangle(-304.5,-345.1,603,658.3), new cjs.Rectangle(-304.5,-344.9,603,657.9), new cjs.Rectangle(-304.5,-345.1,603,657.9), new cjs.Rectangle(-304.5,-345.3,603,657.9), new cjs.Rectangle(-304.5,-345.6,603,658), new cjs.Rectangle(-304.5,-345.7,603,657.8), new cjs.Rectangle(-304.5,-346,603,658), new cjs.Rectangle(-304.5,-346.1,603,657.8), new cjs.Rectangle(-304.5,-346,603,657.6), new cjs.Rectangle(-304.5,-346.2,603,657.6), new cjs.Rectangle(-304.5,-346.5,603,657.6), new cjs.Rectangle(-304.5,-346.6,603,657.6), new cjs.Rectangle(-304.5,-346.9,603,657.6), new cjs.Rectangle(-304.5,-347,603,657.5), new cjs.Rectangle(-304.5,-347.3,603,657.6), new cjs.Rectangle(-304.5,-347.5,603,657.6)];


(lib.hero1_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero1_crown_main_mc();
	this.instance.setTransform(-9.5,-295.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4.2,x:2.1,y:-286.1},39).to({rotation:0,x:-9.5,y:-295.7},40).wait(1));

	// animation
	this.instance_1 = new lib.hero1_finger_mc();
	this.instance_1.setTransform(-189.4,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:25},39).to({y:16},40).wait(1));

	// animation
	this.instance_2 = new lib.hero1_wand_main_mc();
	this.instance_2.setTransform(-207.5,-26.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-17.7},39).to({y:-26.7},40).wait(1));

	// animation
	this.instance_3 = new lib.hero1_fringe_main_mc();
	this.instance_3.setTransform(-12,-229.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:4.2,x:-5.2,y:-220.5},39).to({rotation:0,x:-12,y:-229.7},40).wait(1));

	// animation
	this.instance_4 = new lib.hero1_earrings_main_mc();
	this.instance_4.setTransform(-12,-151.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:4.2,x:-10.9,y:-142.2},39).to({rotation:0,x:-12,y:-151.2},40).wait(1));

	// animation
	this.instance_5 = new lib.hero1_makeup_main_mc();
	this.instance_5.setTransform(-11,-209.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:4.2,x:-5.7,y:-200.2},39).to({rotation:0,x:-11,y:-209.5},40).wait(1));

	// animation
	this.instance_6 = new lib.hero1_head_mc();
	this.instance_6.setTransform(-11,-209.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:4.2,x:-5.7,y:-200.2},39).to({rotation:0,x:-11,y:-209.5},40).wait(1));

	// animation
	this.instance_7 = new lib.hero1_dress_main_mc();
	this.instance_7.setTransform(0,59.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:68.1},39).to({y:59.1},40).wait(1));

	// animation
	this.instance_8 = new lib.hero1_hair_main_mc();
	this.instance_8.setTransform(-12,-229.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:4.2,x:-5.2,y:-220.5},39).to({rotation:0,x:-12,y:-229.7},40).wait(1));

	// animation
	this.instance_9 = new lib.wings_main_mc();
	this.instance_9.setTransform(-11,-77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:0.86,y:-68.5},39).to({scaleX:1,y:-77.5},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-332,-322.2,664,617.3);
p.frameBounds = [rect, new cjs.Rectangle(-332,-322,664,617.3), new cjs.Rectangle(-332,-321.8,664,617.4), new cjs.Rectangle(-332,-322,664,617.8), new cjs.Rectangle(-332,-321.8,664,617.8), new cjs.Rectangle(-332,-321.9,664,618.2), new cjs.Rectangle(-332,-321.8,664,618.3), new cjs.Rectangle(-332,-321.9,664,618.6), new cjs.Rectangle(-332,-321.7,664,618.6), new cjs.Rectangle(-332,-321.5,664,618.7), new cjs.Rectangle(-332,-321.7,664,619.1), new cjs.Rectangle(-332,-321.5,664,619.1), new cjs.Rectangle(-332,-321.6,664,619.4), new cjs.Rectangle(-332,-321.4,664,619.5), new cjs.Rectangle(-332,-321.6,664,619.9), new cjs.Rectangle(-332,-321.4,664,619.9), new cjs.Rectangle(-332,-321.2,664,620), new cjs.Rectangle(-332,-321.3,664,620.3), new cjs.Rectangle(-332,-321.1,664,620.3), new cjs.Rectangle(-332,-321.3,664,620.8), new cjs.Rectangle(-332,-321.1,664,620.8), new cjs.Rectangle(-332,-321.2,664,621.1), new cjs.Rectangle(-332,-321,664,621.2), new cjs.Rectangle(-332,-320.8,664,621.2), new cjs.Rectangle(-332,-320.9,664,621.6), new cjs.Rectangle(-332,-320.7,664,621.6), new cjs.Rectangle(-332,-320.9,664,622), new cjs.Rectangle(-332,-320.7,664,622.1), new cjs.Rectangle(-332,-320.8,664,622.4), new cjs.Rectangle(-332,-320.6,664,622.4), new cjs.Rectangle(-332,-320.5,664,622.5), new cjs.Rectangle(-332,-320.6,664,622.8), new cjs.Rectangle(-332,-320.4,664,622.8), new cjs.Rectangle(-332,-320.5,664,623.2), new cjs.Rectangle(-332,-320.3,664,623.3), new cjs.Rectangle(-332,-320.5,664,623.7), new cjs.Rectangle(-332,-320.3,664,623.7), new cjs.Rectangle(-332,-320,664,623.7), new cjs.Rectangle(-332,-320.2,664,624.1), new cjs.Rectangle(-332,-320.3,664,624.4), new cjs.Rectangle(-332,-320.2,664,624.1), new cjs.Rectangle(-332,-320.1,664,623.8), new cjs.Rectangle(-332,-320.3,664,623.8), new cjs.Rectangle(-332,-320.5,664,623.7), new cjs.Rectangle(-332,-320.3,664,623.3), new cjs.Rectangle(-332,-320.5,664,623.3), new cjs.Rectangle(-332,-320.3,664,622.9), new cjs.Rectangle(-332,-320.5,664,622.8), new cjs.Rectangle(-332,-320.8,664,622.9), new cjs.Rectangle(-332,-320.6,664,622.5), new cjs.Rectangle(-332,-320.8,664,622.5), new cjs.Rectangle(-332,-320.7,664,622.1), new cjs.Rectangle(-332,-320.9,664,622.1), new cjs.Rectangle(-332,-320.7,664,621.7), new cjs.Rectangle(-332,-320.9,664,621.7), new cjs.Rectangle(-332,-321.1,664,621.6), new cjs.Rectangle(-332,-321,664,621.3), new cjs.Rectangle(-332,-321.2,664,621.2), new cjs.Rectangle(-332,-321,664,620.9), new cjs.Rectangle(-332,-321.2,664,620.8), new cjs.Rectangle(-332,-321.1,664,620.5), new cjs.Rectangle(-332,-321.3,664,620.4), new cjs.Rectangle(-332,-321.4,664,620.3), new cjs.Rectangle(-332,-321.3,664,620), new cjs.Rectangle(-332,-321.4,664,619.9), new cjs.Rectangle(-332,-321.3,664,619.5), new cjs.Rectangle(-332,-321.5,664,619.5), new cjs.Rectangle(-332,-321.7,664,619.5), new cjs.Rectangle(-332,-321.6,664,619.2), new cjs.Rectangle(-332,-321.8,664,619.1), new cjs.Rectangle(-332,-321.5,664,618.7), new cjs.Rectangle(-332,-321.7,664,618.6), new cjs.Rectangle(-332,-321.6,664,618.3), new cjs.Rectangle(-332,-321.8,664,618.3), new cjs.Rectangle(-332,-322,664,618.2), new cjs.Rectangle(-332,-321.8,664,617.8), new cjs.Rectangle(-332,-322,664,617.8), new cjs.Rectangle(-332,-321.8,664,617.4), new cjs.Rectangle(-332,-322,664,617.3), new cjs.Rectangle(-332,-322.2,664,617.3)];


(lib.hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// headdress
	this.headdress = new lib.hero2_crown_all_mc();
	this.headdress.setTransform(-206,-284.5);

	this.timeline.addTween(cjs.Tween.get(this.headdress).to({rotation:-3.7,x:-214.3,y:-273.6},41).to({rotation:0,x:-206,y:-284.5},43).wait(1));

	// fringe
	this.fringe = new lib.hero2_fringe_all_mc();
	this.fringe.setTransform(-193,-226.2);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({rotation:-3.7,x:-197.6,y:-216.3},41).to({rotation:0,x:-193,y:-226.2},43).wait(1));

	// earrings
	this.earrings = new lib.hero2_earrings_all_mc();
	this.earrings.setTransform(-149,-188.7);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({rotation:-3.7,x:-151.2,y:-181.7},41).to({rotation:0,x:-149,y:-188.7},43).wait(1));

	// makeup
	this.makeup = new lib.hero2_makeup_all_mc();
	this.makeup.setTransform(-199,-225.5);

	this.timeline.addTween(cjs.Tween.get(this.makeup).to({rotation:-3.7,x:-203.5,y:-215.2},41).to({rotation:0,x:-199,y:-225.5},43).wait(1));

	// eyes
	this.eyes = new lib.hero2_eyes_all_mc();
	this.eyes.setTransform(-199,-225.5);

	this.timeline.addTween(cjs.Tween.get(this.eyes).to({rotation:-3.7,x:-203.5,y:-215.2},41).to({rotation:0,x:-199,y:-225.5},43).wait(1));

	// body
	this.instance = new lib.hero2_head_mc();
	this.instance.setTransform(-199,-225.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3.7,x:-203.5,y:-215.2},41).to({rotation:0,x:-199,y:-225.5},43).wait(1));

	// dress
	this.dress = new lib.hero2_dress_all_mc();
	this.dress.setTransform(-3,44.6);

	this.timeline.addTween(cjs.Tween.get(this.dress).to({y:54.6},41).to({y:44.6},43).wait(1));

	// blanket
	this.blanket = new lib.popona_all_mc();
	this.blanket.setTransform(-11,111.4);

	this.timeline.addTween(cjs.Tween.get(this.blanket).to({y:121.4},41).to({y:111.4},43).wait(1));

	// skin
	this.skin = new lib.hero2_bodyhorse_all_mc();
	this.skin.setTransform(0,69.6);

	this.timeline.addTween(cjs.Tween.get(this.skin).to({y:79.6},41).to({y:69.6},43).wait(1));

	// earringsSecond
	this.earringsSecond = new lib.earrings_back_all_mc();
	this.earringsSecond.setTransform(-249.5,-163.7);

	this.timeline.addTween(cjs.Tween.get(this.earringsSecond).to({rotation:-3.7,x:-249.8,y:-150.2},41).to({rotation:0,x:-249.5,y:-163.7},43).wait(1));

	// hair
	this.hair = new lib.hero2_hair_all_mc();
	this.hair.setTransform(-193,-226.2);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({rotation:-3.7,x:-197.6,y:-216.3},41).to({rotation:0,x:-193,y:-226.2},43).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-311.4,-339.2,610,649.3);
p.frameBounds = [rect, new cjs.Rectangle(-311.5,-339,610.1,649.4), new cjs.Rectangle(-311.7,-338.8,610.2,649.4), new cjs.Rectangle(-312.2,-338.9,610.8,649.8), new cjs.Rectangle(-312.4,-338.7,610.9,649.8), new cjs.Rectangle(-312.5,-338.5,611,649.8), new cjs.Rectangle(-313,-338.6,611.5,650.2), new cjs.Rectangle(-313.2,-338.4,611.7,650.2), new cjs.Rectangle(-313.3,-338.2,611.8,650.2), new cjs.Rectangle(-313.8,-338.3,612.3,650.6), new cjs.Rectangle(-313.9,-338.1,612.5,650.7), new cjs.Rectangle(-314.4,-338.2,613,651), new cjs.Rectangle(-314.6,-338,613.1,651.1), new cjs.Rectangle(-314.7,-337.8,613.3,651), new cjs.Rectangle(-315.2,-337.9,613.7,651.4), new cjs.Rectangle(-315.4,-337.7,613.9,651.5), new cjs.Rectangle(-315.5,-337.5,614.1,651.5), new cjs.Rectangle(-316,-337.6,614.5,651.8), new cjs.Rectangle(-316.1,-337.4,614.7,651.9), new cjs.Rectangle(-316.3,-337.2,614.9,651.9), new cjs.Rectangle(-316.8,-337.3,615.3,652.3), new cjs.Rectangle(-316.9,-337.1,615.5,652.3), new cjs.Rectangle(-317.4,-337.2,615.9,652.7), new cjs.Rectangle(-317.6,-337,616.1,652.7), new cjs.Rectangle(-317.7,-336.8,616.3,652.7), new cjs.Rectangle(-318.2,-336.9,616.7,653.1), new cjs.Rectangle(-318.3,-336.7,616.9,653.1), new cjs.Rectangle(-318.5,-336.5,617.1,653.2), new cjs.Rectangle(-319,-336.6,617.5,653.5), new cjs.Rectangle(-319.1,-336.4,617.7,653.6), new cjs.Rectangle(-319.2,-336.2,617.8,653.6), new cjs.Rectangle(-319.7,-336.3,618.3,653.9), new cjs.Rectangle(-319.9,-336,618.4,653.9), new cjs.Rectangle(-320.3,-336.2,618.9,654.3), new cjs.Rectangle(-320.5,-336,619,654.4), new cjs.Rectangle(-320.7,-335.7,619.2,654.4), new cjs.Rectangle(-321.1,-335.9,619.7,654.8), new cjs.Rectangle(-321.3,-335.6,619.9,654.7), new cjs.Rectangle(-321.4,-335.5,619.9,654.8), new cjs.Rectangle(-321.9,-335.5,620.4,655.1), new cjs.Rectangle(-322,-335.3,620.6,655.2), new cjs.Rectangle(-322.5,-335.4,621.1,655.5), new cjs.Rectangle(-322,-335.3,620.6,655.2), new cjs.Rectangle(-321.8,-335.5,620.4,655.1), new cjs.Rectangle(-321.5,-335.4,620,654.8), new cjs.Rectangle(-321.3,-335.6,619.8,654.8), new cjs.Rectangle(-321.1,-335.8,619.7,654.7), new cjs.Rectangle(-320.6,-335.7,619.2,654.4), new cjs.Rectangle(-320.5,-335.9,619.1,654.3), new cjs.Rectangle(-320.4,-336.1,619,654.3), new cjs.Rectangle(-319.9,-336,618.5,654), new cjs.Rectangle(-319.8,-336.2,618.3,653.9), new cjs.Rectangle(-319.6,-336.4,618.2,654), new cjs.Rectangle(-319.2,-336.3,617.7,653.6), new cjs.Rectangle(-319,-336.5,617.6,653.6), new cjs.Rectangle(-318.8,-336.7,617.4,653.5), new cjs.Rectangle(-318.4,-336.5,617,653.1), new cjs.Rectangle(-318.3,-336.8,616.8,653.2), new cjs.Rectangle(-318.2,-336.9,616.7,653.1), new cjs.Rectangle(-317.7,-336.8,616.2,652.7), new cjs.Rectangle(-317.5,-337,616.1,652.7), new cjs.Rectangle(-317.3,-337.2,615.9,652.7), new cjs.Rectangle(-316.9,-337.1,615.5,652.3), new cjs.Rectangle(-316.8,-337.3,615.3,652.3), new cjs.Rectangle(-316.3,-337.1,614.9,651.8), new cjs.Rectangle(-316.2,-337.4,614.7,651.9), new cjs.Rectangle(-316,-337.5,614.5,651.8), new cjs.Rectangle(-315.5,-337.5,614.1,651.5), new cjs.Rectangle(-315.4,-337.7,613.9,651.5), new cjs.Rectangle(-315.2,-337.9,613.8,651.5), new cjs.Rectangle(-314.8,-337.8,613.3,651.1), new cjs.Rectangle(-314.6,-337.9,613.2,651), new cjs.Rectangle(-314.5,-338.2,613,651.1), new cjs.Rectangle(-314,-338,612.6,650.6), new cjs.Rectangle(-313.8,-338.2,612.4,650.7), new cjs.Rectangle(-313.7,-338.4,612.2,650.6), new cjs.Rectangle(-313.2,-338.3,611.8,650.2), new cjs.Rectangle(-313.1,-338.5,611.6,650.2), new cjs.Rectangle(-312.9,-338.6,611.5,650.1), new cjs.Rectangle(-312.5,-338.5,611,649.8), new cjs.Rectangle(-312.3,-338.8,610.9,649.8), new cjs.Rectangle(-312.1,-338.9,610.7,649.7), new cjs.Rectangle(-311.7,-338.8,610.2,649.4), new cjs.Rectangle(-311.5,-339,610.1,649.3), new cjs.Rectangle(-311.4,-339.2,610,649.3)];


(lib.hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// headdress
	this.headdress = new lib.hero1_crown_all_mc();
	this.headdress.setTransform(-9.5,-295.7);

	this.timeline.addTween(cjs.Tween.get(this.headdress).to({rotation:4.2,x:2.3,y:-284.1},34).to({rotation:0,x:-9.5,y:-295.7},35).wait(1));

	// body
	this.instance = new lib.hero1_finger_mc();
	this.instance.setTransform(-189.4,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4.2,x:-192.1,y:22.6},34).to({rotation:0,x:-189.4,y:16},35).wait(1));

	// accessory
	this.accessory = new lib.hero1_wand_all_mc();
	this.accessory.setTransform(-207.5,-26.7);

	this.timeline.addTween(cjs.Tween.get(this.accessory).to({rotation:-0.9,x:-209,y:-22.3},34).to({rotation:0,x:-207.5,y:-26.7},35).wait(1));

	// fringe
	this.fringe = new lib.hero1_fringe_all_mc();
	this.fringe.setTransform(-12,-229.7);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({rotation:4.2,x:-5.1,y:-221.4},34).to({rotation:0,x:-12,y:-229.7},35).wait(1));

	// earrings
	this.earrings = new lib.hero1_earrings_all_mc();
	this.earrings.setTransform(-12,-151.2);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({rotation:4.2,x:-10.8,y:-143.1},34).to({rotation:0,x:-12,y:-151.2},35).wait(1));

	// makeup
	this.makeup = new lib.hero1_makeup_all_mc();
	this.makeup.setTransform(-11,-209.5);

	this.timeline.addTween(cjs.Tween.get(this.makeup).to({rotation:4.2,x:-5.6,y:-201.1},34).to({rotation:0,x:-11,y:-209.5},35).wait(1));

	// eyes
	this.eyes = new lib.hero1_eyes_all_mc();
	this.eyes.setTransform(-11,-209.5);

	this.timeline.addTween(cjs.Tween.get(this.eyes).to({rotation:4.2,x:-5.6,y:-201.1},34).to({rotation:0,x:-11,y:-209.5},35).wait(1));

	// body
	this.instance_1 = new lib.hero1_head_mc();
	this.instance_1.setTransform(-11,-209.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:4.2,x:-5.6,y:-201.1},34).to({rotation:0,x:-11,y:-209.5},35).wait(1));

	// dress
	this.dress = new lib.hero1_dress_all_mc();
	this.dress.setTransform(0,59.1);

	this.timeline.addTween(cjs.Tween.get(this.dress).to({y:67.1},34).to({y:59.1},35).wait(1));

	// hair
	this.hair = new lib.hero1_hair_all_mc();
	this.hair.setTransform(-12,-229.7);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({rotation:4.2,x:-5.1,y:-221.4},34).to({rotation:0,x:-12,y:-229.7},35).wait(1));

	// wings
	this.wings = new lib.wings_all_mc();
	this.wings.setTransform(-11,-77.5);

	this.timeline.addTween(cjs.Tween.get(this.wings).to({scaleX:0.82,y:-69.5},34).to({scaleX:1,y:-77.5},35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-332,-334.7,664,629.8);
p.frameBounds = [rect, new cjs.Rectangle(-332,-334.4,664,629.7), new cjs.Rectangle(-332,-334.1,664,629.6), new cjs.Rectangle(-332,-334,664,629.8), new cjs.Rectangle(-332,-333.7,664,629.8), new cjs.Rectangle(-332,-333.6,664,629.9), new cjs.Rectangle(-332,-333.3,664,629.8), new cjs.Rectangle(-332,-333.2,664,630), new cjs.Rectangle(-332,-332.9,664,629.8), new cjs.Rectangle(-332,-332.8,664,630), new cjs.Rectangle(-332,-332.5,664,629.9), new cjs.Rectangle(-332,-332.4,664,630.1), new cjs.Rectangle(-332,-332.1,664,630), new cjs.Rectangle(-332,-332,664,630.2), new cjs.Rectangle(-332,-331.7,664,630.1), new cjs.Rectangle(-332,-331.6,664,630.3), new cjs.Rectangle(-332,-331.3,664,630.2), new cjs.Rectangle(-332,-331.2,664,630.3), new cjs.Rectangle(-332,-330.9,664,630.3), new cjs.Rectangle(-332,-330.8,664,630.4), new cjs.Rectangle(-332,-330.5,664,630.3), new cjs.Rectangle(-332,-330.4,664,630.5), new cjs.Rectangle(-332,-330.1,664,630.4), new cjs.Rectangle(-332,-330,664,630.5), new cjs.Rectangle(-332,-329.8,664,630.5), new cjs.Rectangle(-332,-329.7,664,630.7), new cjs.Rectangle(-332,-329.3,664,630.5), new cjs.Rectangle(-332,-329.2,664,630.7), new cjs.Rectangle(-332,-329,664,630.7), new cjs.Rectangle(-332,-328.8,664,630.7), new cjs.Rectangle(-332,-328.5,664,630.7), new cjs.Rectangle(-332,-328.4,664,630.8), new cjs.Rectangle(-332,-328.1,664,630.8), new cjs.Rectangle(-332,-328,664,630.9), new cjs.Rectangle(-332,-327.9,664,631), new cjs.Rectangle(-332,-328,664,630.9), new cjs.Rectangle(-332,-328.1,664,630.7), new cjs.Rectangle(-332,-328.4,664,630.8), new cjs.Rectangle(-332,-328.6,664,630.8), new cjs.Rectangle(-332,-328.8,664,630.7), new cjs.Rectangle(-332,-328.9,664,630.6), new cjs.Rectangle(-332,-329.2,664,630.7), new cjs.Rectangle(-332,-329.2,664,630.5), new cjs.Rectangle(-332,-329.6,664,630.6), new cjs.Rectangle(-332,-329.9,664,630.7), new cjs.Rectangle(-332,-329.9,664,630.5), new cjs.Rectangle(-332,-330.2,664,630.6), new cjs.Rectangle(-332,-330.3,664,630.5), new cjs.Rectangle(-332,-330.6,664,630.5), new cjs.Rectangle(-332,-330.7,664,630.4), new cjs.Rectangle(-332,-331,664,630.5), new cjs.Rectangle(-332,-331.1,664,630.3), new cjs.Rectangle(-332,-331.4,664,630.3), new cjs.Rectangle(-332,-331.4,664,630.2), new cjs.Rectangle(-332,-331.8,664,630.3), new cjs.Rectangle(-332,-331.9,664,630.2), new cjs.Rectangle(-332,-332.1,664,630.2), new cjs.Rectangle(-332,-332.2,664,630.1), new cjs.Rectangle(-332,-332.5,664,630.1), new cjs.Rectangle(-332,-332.6,664,630), new cjs.Rectangle(-332,-332.9,664,630), new cjs.Rectangle(-332,-333,664,629.9), new cjs.Rectangle(-332,-333.3,664,630), new cjs.Rectangle(-332,-333.3,664,629.7), new cjs.Rectangle(-332,-333.7,664,629.9), new cjs.Rectangle(-332,-333.7,664,629.7), new cjs.Rectangle(-332,-334,664,629.8), new cjs.Rectangle(-332,-334.1,664,629.7), new cjs.Rectangle(-332,-334.4,664,629.7), new cjs.Rectangle(-332,-334.7,664,629.8)];


(lib.headdress_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0.1,0.48,0.48,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.hairstyle_check_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_check_1_2_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},24).to({alpha:0.102},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-220,420,440);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hairstyle_check_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_check_1_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},24).to({alpha:0.102},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-195,390,390);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hairstyle_check_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hairstyle_check_3_2_mc();
	this.instance.alpha = 0.602;

	this.instance_1 = new lib.hairstyle_check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-220,420,440);
p.frameBounds = [rect, rect];


(lib.hairstyle_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hairstyle_check_3_1_mc();
	this.instance.alpha = 0.602;

	this.instance_1 = new lib.hairstyle_check_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-195,390,390);
p.frameBounds = [rect, rect];


(lib.hairstyle_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_6_2_img();
	this.instance.setTransform(-190,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A1hViQo8o7AAsnQAAsmI8o8QI7o7MmAAQMoAAI6I7QI8I8AAMmQAAMno8I7Qo6I8sogBQsmABo7o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-220,420,440);
p.frameBounds = [rect];


(lib.hairstyle_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_6_1_img();
	this.instance.setTransform(-180,-195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("Az3T4QoPoPgBrpQABroIPoPQIPoPLogBQLpABIPIPQIPIPABLoQgBLpoPIPQoPIQrpAAQroAAoPoQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-195,390,390);
p.frameBounds = [rect];


(lib.hairstyle_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_5_2_img();
	this.instance.setTransform(-190,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A1hViQo8o7AAsnQAAsmI8o8QI7o7MmAAQMoAAI6I7QI8I8AAMmQAAMno8I7Qo6I8sogBQsmABo7o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-220,420,440);
p.frameBounds = [rect];


(lib.hairstyle_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_5_1_img();
	this.instance.setTransform(-180,-195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("Az3T4QoPoPgBrpQABroIPoPQIPoPLogBQLpABIPIPQIPIPABLoQgBLpoPIPQoPIQrpAAQroAAoPoQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-195,390,390);
p.frameBounds = [rect];


(lib.hairstyle_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_4_2_img();
	this.instance.setTransform(-190,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A1hViQo8o7AAsnQAAsmI8o8QI7o7MmAAQMoAAI6I7QI8I8AAMmQAAMno8I7Qo6I8sogBQsmABo7o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-220,420,440);
p.frameBounds = [rect];


(lib.hairstyle_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_4_1_img();
	this.instance.setTransform(-180,-195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("Az3T4QoPoPgBrpQABroIPoPQIPoPLogBQLpABIPIPQIPIPABLoQgBLpoPIPQoPIQrpAAQroAAoPoQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-195,390,390);
p.frameBounds = [rect];


(lib.hairstyle_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_3_2_img();
	this.instance.setTransform(-190,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A1hViQo8o7AAsnQAAsmI8o8QI7o7MmAAQMoAAI6I7QI8I8AAMmQAAMno8I7Qo6I8sogBQsmABo7o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-220,420,440);
p.frameBounds = [rect];


(lib.hairstyle_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_3_1_img();
	this.instance.setTransform(-180,-195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("Az3T4QoPoPgBrpQABroIPoPQIPoPLogBQLpABIPIPQIPIPABLoQgBLpoPIPQoPIQrpAAQroAAoPoQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-195,390,390);
p.frameBounds = [rect];


(lib.hairstyle_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_2_2_img();
	this.instance.setTransform(-190,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A1hViQo8o7AAsnQAAsmI8o8QI7o7MmAAQMoAAI6I7QI8I8AAMmQAAMno8I7Qo6I8sogBQsmABo7o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-220,420,440);
p.frameBounds = [rect];


(lib.hairstyle_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_2_1_img();
	this.instance.setTransform(-180,-195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("Az3T4QoPoPgBrpQABroIPoPQIPoPLogBQLpABIPIPQIPIPABLoQgBLpoPIPQoPIQrpAAQroAAoPoQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-195,390,390);
p.frameBounds = [rect];


(lib.hairstyle_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_1_2_img();
	this.instance.setTransform(-190,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A1hViQo8o7AAsnQAAsmI8o8QI7o7MmAAQMoAAI6I7QI8I8AAMmQAAMno8I7Qo6I8sogBQsmABo7o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-220,420,440);
p.frameBounds = [rect];


(lib.hairstyle_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_1_1_img();
	this.instance.setTransform(-180,-195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("Az3T4QoPoPgBrpQABroIPoPQIPoPLogBQLpABIPIPQIPIPABLoQgBLpoPIPQoPIQrpAAQroAAoPoQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-195,390,390);
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


(lib.fern_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.fern_1_mc();
	this.instance.setTransform(0,0,1,1,0,-5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.95,skewX:5},59).to({scaleY:1,skewX:-5},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115.2,-174.3,217.5,199.3);
p.frameBounds = [rect, new cjs.Rectangle(-114.5,-174.1,216.6,199.1), new cjs.Rectangle(-113.8,-174.1,215.8,199), new cjs.Rectangle(-113.1,-174,215,198.9), new cjs.Rectangle(-112.9,-173.8,214.9,198.7), new cjs.Rectangle(-112.2,-173.7,214.1,198.6), new cjs.Rectangle(-111.5,-173.6,213.2,198.5), new cjs.Rectangle(-111.4,-173.5,213.1,198.4), new cjs.Rectangle(-110.7,-173.4,212.3,198.2), new cjs.Rectangle(-110,-173.3,211.5,198.1), new cjs.Rectangle(-109.8,-173.1,211.3,198), new cjs.Rectangle(-109.1,-173,210.5,197.8), new cjs.Rectangle(-108.4,-172.9,209.7,197.7), new cjs.Rectangle(-108.3,-172.8,209.6,197.5), new cjs.Rectangle(-107.6,-172.7,208.8,197.4), new cjs.Rectangle(-106.9,-172.5,208,197.3), new cjs.Rectangle(-106.8,-172.4,207.8,197.1), new cjs.Rectangle(-106.1,-172.3,207,197), new cjs.Rectangle(-105.4,-172.2,206.2,196.8), new cjs.Rectangle(-105.2,-172,206.1,196.7), new cjs.Rectangle(-104.5,-171.9,205.3,196.5), new cjs.Rectangle(-103.8,-171.8,204.5,196.4), new cjs.Rectangle(-103.7,-171.6,204.3,196.2), new cjs.Rectangle(-103,-171.5,203.5,196.1), new cjs.Rectangle(-102.3,-171.3,202.7,195.9), new cjs.Rectangle(-102.2,-171.2,202.6,195.7), new cjs.Rectangle(-101.5,-171.1,201.8,195.5), new cjs.Rectangle(-100.8,-170.9,201,195.4), new cjs.Rectangle(-100.7,-170.8,200.9,195.2), new cjs.Rectangle(-100,-170.6,200.1,195.1), new cjs.Rectangle(-99.9,-170.5,200.1,194.9), new cjs.Rectangle(-100.1,-170.3,200.9,194.7), new cjs.Rectangle(-100.1,-170.2,201,194.5), new cjs.Rectangle(-100.2,-170,201.8,194.4), new cjs.Rectangle(-100.3,-169.8,202.6,194.2), new cjs.Rectangle(-100.3,-169.7,202.7,194), new cjs.Rectangle(-100.4,-169.5,203.5,193.8), new cjs.Rectangle(-100.5,-169.4,204.3,193.6), new cjs.Rectangle(-100.5,-169.2,204.4,193.5), new cjs.Rectangle(-100.6,-169,205.2,193.3), new cjs.Rectangle(-100.7,-168.9,205.9,193.1), new cjs.Rectangle(-100.7,-168.7,206.1,192.9), new cjs.Rectangle(-100.8,-168.6,206.8,192.7), new cjs.Rectangle(-100.9,-168.4,207.6,192.5), new cjs.Rectangle(-100.9,-168.2,207.8,192.3), new cjs.Rectangle(-101,-168,208.5,192.1), new cjs.Rectangle(-101.1,-167.9,209.3,191.9), new cjs.Rectangle(-101.1,-167.7,209.4,191.7), new cjs.Rectangle(-101.2,-167.5,210.2,191.5), new cjs.Rectangle(-101.3,-167.3,210.9,191.3), new cjs.Rectangle(-101.3,-167.2,211.1,191.1), new cjs.Rectangle(-101.4,-167,211.8,190.9), new cjs.Rectangle(-101.5,-166.8,212.6,190.7), new cjs.Rectangle(-101.6,-166.6,212.7,190.5), new cjs.Rectangle(-101.6,-166.4,213.5,190.3), new cjs.Rectangle(-101.7,-166.2,214.2,190.1), new cjs.Rectangle(-101.7,-166.1,214.3,189.9), new cjs.Rectangle(-101.8,-165.9,215.1,189.7), new cjs.Rectangle(-101.9,-165.7,215.8,189.4), new cjs.Rectangle(-102,-165.5,216.6,189.2), new cjs.Rectangle(-101.9,-165.7,215.8,189.4), new cjs.Rectangle(-101.8,-165.9,215.1,189.6), new cjs.Rectangle(-101.8,-166,215,189.8), new cjs.Rectangle(-101.7,-166.2,214.2,190.1), new cjs.Rectangle(-101.6,-166.4,213.5,190.3), new cjs.Rectangle(-101.6,-166.6,213.3,190.5), new cjs.Rectangle(-101.5,-166.8,212.6,190.7), new cjs.Rectangle(-101.4,-167,211.8,190.9), new cjs.Rectangle(-101.4,-167.1,211.7,191.1), new cjs.Rectangle(-101.3,-167.3,211,191.3), new cjs.Rectangle(-101.2,-167.5,210.2,191.5), new cjs.Rectangle(-101.2,-167.6,210.1,191.7), new cjs.Rectangle(-101.1,-167.8,209.3,191.9), new cjs.Rectangle(-101,-168,208.6,192.1), new cjs.Rectangle(-101,-168.2,208.4,192.3), new cjs.Rectangle(-100.9,-168.3,207.7,192.5), new cjs.Rectangle(-100.8,-168.5,206.9,192.7), new cjs.Rectangle(-100.8,-168.7,206.8,192.8), new cjs.Rectangle(-100.7,-168.8,206,193), new cjs.Rectangle(-100.6,-169,205.2,193.2), new cjs.Rectangle(-100.6,-169.1,205.1,193.4), new cjs.Rectangle(-100.5,-169.3,204.3,193.5), new cjs.Rectangle(-100.4,-169.5,203.5,193.8), new cjs.Rectangle(-100.4,-169.6,203.4,193.9), new cjs.Rectangle(-100.3,-169.8,202.6,194.1), new cjs.Rectangle(-100.2,-169.9,201.9,194.3), new cjs.Rectangle(-100.2,-170.1,201.7,194.5), new cjs.Rectangle(-100,-170.2,200.9,194.6), new cjs.Rectangle(-100,-170.4,200.2,194.8), new cjs.Rectangle(-100,-170.5,200,195), new cjs.Rectangle(-100.1,-170.7,200.1,195.1), new cjs.Rectangle(-100.8,-170.8,200.9,195.3), new cjs.Rectangle(-100.9,-171,201.1,195.5), new cjs.Rectangle(-101.6,-171.1,201.9,195.6), new cjs.Rectangle(-102.2,-171.3,202.7,195.8), new cjs.Rectangle(-102.4,-171.4,202.8,196), new cjs.Rectangle(-103.1,-171.5,203.6,196.1), new cjs.Rectangle(-103.8,-171.7,204.4,196.3), new cjs.Rectangle(-103.9,-171.8,204.5,196.4), new cjs.Rectangle(-104.6,-171.9,205.3,196.5), new cjs.Rectangle(-105.3,-172.1,206.1,196.7), new cjs.Rectangle(-105.4,-172.2,206.3,196.9), new cjs.Rectangle(-106.1,-172.3,207,197), new cjs.Rectangle(-106.8,-172.4,207.8,197.1), new cjs.Rectangle(-106.9,-172.6,208,197.3), new cjs.Rectangle(-107.6,-172.7,208.8,197.4), new cjs.Rectangle(-108.3,-172.8,209.6,197.5), new cjs.Rectangle(-108.4,-172.9,209.7,197.7), new cjs.Rectangle(-109.1,-173.1,210.5,197.9), new cjs.Rectangle(-109.8,-173.2,211.3,198), new cjs.Rectangle(-110,-173.3,211.5,198.1), new cjs.Rectangle(-110.7,-173.4,212.3,198.3), new cjs.Rectangle(-111.4,-173.5,213.1,198.4), new cjs.Rectangle(-111.5,-173.6,213.3,198.5), new cjs.Rectangle(-112.2,-173.7,214.1,198.6), new cjs.Rectangle(-112.9,-173.8,214.9,198.7), new cjs.Rectangle(-113.1,-174,215,198.9), new cjs.Rectangle(-113.8,-174.1,215.8,199), new cjs.Rectangle(-114.5,-174.1,216.6,199.1), new cjs.Rectangle(-115.2,-174.3,217.5,199.3)];


(lib.eyes_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_6_2_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvmPoIAA/PIfNAAIAAfPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-115,230,230);
p.frameBounds = [rect];


(lib.eyes_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_6_1_img();
	this.instance.setTransform(-105,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvmPnIAA/OIfNAAIAAfOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyes_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_5_2_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvmPoIAA/PIfNAAIAAfPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-115,230,230);
p.frameBounds = [rect];


(lib.eyes_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_5_1_img();
	this.instance.setTransform(-105,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvmPnIAA/OIfNAAIAAfOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyes_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_4_2_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvmPoIAA/PIfNAAIAAfPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-115,230,230);
p.frameBounds = [rect];


(lib.eyes_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_4_1_img();
	this.instance.setTransform(-105,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvmPnIAA/OIfNAAIAAfOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyes_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_3_2_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvmPoIAA/PIfNAAIAAfPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-115,230,230);
p.frameBounds = [rect];


(lib.eyes_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_3_1_img();
	this.instance.setTransform(-105,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvmPnIAA/OIfNAAIAAfOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyes_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_2_2_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvmPoIAA/PIfNAAIAAfPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-115,230,230);
p.frameBounds = [rect];


(lib.eyes_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_2_1_img();
	this.instance.setTransform(-105,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvmPnIAA/OIfNAAIAAfOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyes_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_1_2_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvmPoIAA/PIfNAAIAAfPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-115,230,230);
p.frameBounds = [rect];


(lib.eyes_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_1_1_img();
	this.instance.setTransform(-105,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AvmPnIAA/OIfNAAIAAfOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.earrings_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0.1,0.48,0.48,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.dress_check_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_check_1_2_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},24).to({alpha:0.102},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-235,400,470);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.dress_check_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_check_1_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},24).to({alpha:0.102},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-240,420,480);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.dress_check_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.dress_check_3_2_mc();
	this.instance.alpha = 0.602;

	this.instance_1 = new lib.dress_check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-235,400,470);
p.frameBounds = [rect, rect];


(lib.dress_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.dress_check_3_1_mc();
	this.instance.alpha = 0.602;

	this.instance_1 = new lib.dress_check_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-240,420,480);
p.frameBounds = [rect, rect];


(lib.dress_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_9_2_img();
	this.instance.setTransform(-185,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("Az3T4QoPoPgBrpQABroIPoPQIPoPLogBQLpABIPIPQIPIPABLoQgBLpoPIPQoPIQrpAAQroAAoPoQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-235,400,470);
p.frameBounds = [rect];


(lib.dress_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_9_1_img();
	this.instance.setTransform(-190,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A0+YTQosqEAAuPQAAuOIsqFQIsqDMSAAQMTAAIsKDQIsKFAAOOQAAOPosKEQosKFsTAAQsSAAosqFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-240,420,480);
p.frameBounds = [rect];


(lib.dress_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_8_2_img();
	this.instance.setTransform(-185,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("Az3T4QoPoPgBrpQABroIPoPQIPoPLogBQLpABIPIPQIPIPABLoQgBLpoPIPQoPIQrpAAQroAAoPoQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-235,400,470);
p.frameBounds = [rect];


(lib.dress_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_8_1_img();
	this.instance.setTransform(-190,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A0+YTQosqEAAuPQAAuOIsqFQIsqDMSAAQMTAAIsKDQIsKFAAOOQAAOPosKEQosKFsTAAQsSAAosqFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-240,420,480);
p.frameBounds = [rect];


(lib.dress_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_7_2_img();
	this.instance.setTransform(-185,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("Az3T4QoPoPgBrpQABroIPoPQIPoPLogBQLpABIPIPQIPIPABLoQgBLpoPIPQoPIQrpAAQroAAoPoQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-235,400,470);
p.frameBounds = [rect];


(lib.dress_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_7_1_img();
	this.instance.setTransform(-190,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A0+YTQosqEAAuPQAAuOIsqFQIsqDMSAAQMTAAIsKDQIsKFAAOOQAAOPosKEQosKFsTAAQsSAAosqFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-240,420,480);
p.frameBounds = [rect];


(lib.dress_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_6_2_img();
	this.instance.setTransform(-185,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("Az3T4QoPoPgBrpQABroIPoPQIPoPLogBQLpABIPIPQIPIPABLoQgBLpoPIPQoPIQrpAAQroAAoPoQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-235,400,470);
p.frameBounds = [rect];


(lib.dress_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_6_1_img();
	this.instance.setTransform(-190,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A0+YTQosqEAAuPQAAuOIsqFQIsqDMSAAQMTAAIsKDQIsKFAAOOQAAOPosKEQosKFsTAAQsSAAosqFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-240,420,480);
p.frameBounds = [rect];


(lib.dress_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_5_2_img();
	this.instance.setTransform(-185,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("Az3T4QoPoPgBrpQABroIPoPQIPoPLogBQLpABIPIPQIPIPABLoQgBLpoPIPQoPIQrpAAQroAAoPoQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-235,400,470);
p.frameBounds = [rect];


(lib.dress_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_5_1_img();
	this.instance.setTransform(-190,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A0+YTQosqEAAuPQAAuOIsqFQIsqDMSAAQMTAAIsKDQIsKFAAOOQAAOPosKEQosKFsTAAQsSAAosqFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-240,420,480);
p.frameBounds = [rect];


(lib.dress_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_4_2_img();
	this.instance.setTransform(-185,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("Az3T4QoPoPgBrpQABroIPoPQIPoPLogBQLpABIPIPQIPIPABLoQgBLpoPIPQoPIQrpAAQroAAoPoQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-235,400,470);
p.frameBounds = [rect];


(lib.dress_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_4_1_img();
	this.instance.setTransform(-190,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A0+YTQosqEAAuPQAAuOIsqFQIsqDMSAAQMTAAIsKDQIsKFAAOOQAAOPosKEQosKFsTAAQsSAAosqFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-240,420,480);
p.frameBounds = [rect];


(lib.dress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_3_2_img();
	this.instance.setTransform(-185,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("Az3T4QoPoPgBrpQABroIPoPQIPoPLogBQLpABIPIPQIPIPABLoQgBLpoPIPQoPIQrpAAQroAAoPoQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-235,400,470);
p.frameBounds = [rect];


(lib.dress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_3_1_img();
	this.instance.setTransform(-190,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A0+YTQosqEAAuPQAAuOIsqFQIsqDMSAAQMTAAIsKDQIsKFAAOOQAAOPosKEQosKFsTAAQsSAAosqFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-240,420,480);
p.frameBounds = [rect];


(lib.dress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_2_2_img();
	this.instance.setTransform(-185,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("Az3T4QoPoPgBrpQABroIPoPQIPoPLogBQLpABIPIPQIPIPABLoQgBLpoPIPQoPIQrpAAQroAAoPoQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-235,400,470);
p.frameBounds = [rect];


(lib.dress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_2_1_img();
	this.instance.setTransform(-190,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A0+YTQosqEAAuPQAAuOIsqFQIsqDMSAAQMTAAIsKDQIsKFAAOOQAAOPosKEQosKFsTAAQsSAAosqFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-240,420,480);
p.frameBounds = [rect];


(lib.dress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_1_2_img();
	this.instance.setTransform(-185,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("Az3T4QoPoPgBrpQABroIPoPQIPoPLogBQLpABIPIPQIPIPABLoQgBLpoPIPQoPIQrpAAQroAAoPoQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-235,400,470);
p.frameBounds = [rect];


(lib.dress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_1_1_img();
	this.instance.setTransform(-190,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A0+YTQosqEAAuPQAAuOIsqFQIsqDMSAAQMTAAIsKDQIsKFAAOOQAAOPosKEQosKFsTAAQsSAAosqFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-240,420,480);
p.frameBounds = [rect];


(lib.dress_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0.1,0.48,0.48,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
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


(lib.closet_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(-181,-98);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(-181,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.earrings_0}]}).to({state:[{t:this.headdress_0}]},4).wait(3));

	// options
	this.earrings_2 = new lib.earrings_2_2_mc();
	this.earrings_2.setTransform(0,60);

	this.earrings_1 = new lib.earrings_1_2_mc();
	this.earrings_1.setTransform(0,-130);

	this.earrings_4 = new lib.earrings_4_2_mc();
	this.earrings_4.setTransform(0,-130);

	this.earrings_3 = new lib.earrings_3_2_mc();
	this.earrings_3.setTransform(0,60);

	this.earrings_6 = new lib.earrings_6_2_mc();

	this.earrings_5 = new lib.earrings_5_2_mc();

	this.headdress_2 = new lib.headdress_2_2_mc();
	this.headdress_2.setTransform(0,100);

	this.headdress_1 = new lib.headdress_1_2_mc();
	this.headdress_1.setTransform(0,-100);

	this.headdress_4 = new lib.headdress_4_2_mc();
	this.headdress_4.setTransform(0,90);

	this.headdress_3 = new lib.headdress_3_2_mc();
	this.headdress_3.setTransform(0,-90);

	this.headdress_6 = new lib.headdress_6_2_mc();
	this.headdress_6.setTransform(0,100);

	this.headdress_5 = new lib.headdress_5_2_mc();
	this.headdress_5.setTransform(0,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.earrings_1},{t:this.earrings_2}]}).to({state:[{t:this.earrings_3},{t:this.earrings_4}]},1).to({state:[{t:this.earrings_6}]},1).to({state:[{t:this.earrings_5}]},1).to({state:[{t:this.headdress_1},{t:this.headdress_2}]},1).to({state:[{t:this.headdress_3},{t:this.headdress_4}]},1).to({state:[{t:this.headdress_5},{t:this.headdress_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-180,315,370);
p.frameBounds = [rect, new cjs.Rectangle(-205,-180,315,360), rect=new cjs.Rectangle(-205,-122,315,242), rect, new cjs.Rectangle(-205,-200,315,400), new cjs.Rectangle(-205,-190,315,380), new cjs.Rectangle(-205,-200,315,400)];


(lib.closet_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(154,-125);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(154,-125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.earrings_0}]}).to({state:[{t:this.headdress_0}]},3).wait(3));

	// options
	this.earrings_4 = new lib.earrings_4_1_mc();
	this.earrings_4.setTransform(0,110);

	this.earrings_1 = new lib.earrings_1_1_mc();
	this.earrings_1.setTransform(0,-120);

	this.earrings_5 = new lib.earrings_5_1_mc();
	this.earrings_5.setTransform(0,110);

	this.earrings_3 = new lib.earrings_3_1_mc();
	this.earrings_3.setTransform(0,-110);

	this.earrings_2 = new lib.earrings_2_1_mc();
	this.earrings_2.setTransform(0,-110);

	this.earrings_6 = new lib.earrings_6_1_mc();
	this.earrings_6.setTransform(0,110);

	this.headdress_3 = new lib.headdress_3_1_mc();
	this.headdress_3.setTransform(0,90);

	this.headdress_1 = new lib.headdress_1_1_mc();
	this.headdress_1.setTransform(0,-90);

	this.headdress_2 = new lib.headdress_2_1_mc();
	this.headdress_2.setTransform(0,-90);

	this.headdress_4 = new lib.headdress_4_1_mc();
	this.headdress_4.setTransform(0,90);

	this.headdress_6 = new lib.headdress_6_1_mc();
	this.headdress_6.setTransform(0,90);

	this.headdress_5 = new lib.headdress_5_1_mc();
	this.headdress_5.setTransform(0,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.earrings_1},{t:this.earrings_4}]}).to({state:[{t:this.earrings_3},{t:this.earrings_5}]},1).to({state:[{t:this.earrings_6},{t:this.earrings_2}]},1).to({state:[{t:this.headdress_1},{t:this.headdress_3}]},1).to({state:[{t:this.headdress_4},{t:this.headdress_2}]},1).to({state:[{t:this.headdress_5},{t:this.headdress_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-220,288,450);
p.frameBounds = [rect, new cjs.Rectangle(-110,-210,288,420), new cjs.Rectangle(-110,-210,288,435), rect=new cjs.Rectangle(-110,-190,288,380), rect, rect];


(lib.closet_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.dress_0 = new lib.dress_0_mc();
	this.dress_0.setTransform(140,-180);

	this.timeline.addTween(cjs.Tween.get(this.dress_0).wait(9));

	// options
	this.dress_8 = new lib.dress_8_2_mc();
	this.dress_8.setTransform(0,-30);

	this.dress_7 = new lib.dress_7_2_mc();
	this.dress_7.setTransform(0,-30);

	this.dress_3 = new lib.dress_3_2_mc();
	this.dress_3.setTransform(0,-30);

	this.dress_4 = new lib.dress_4_2_mc();
	this.dress_4.setTransform(0,-30);

	this.dress_5 = new lib.dress_5_2_mc();
	this.dress_5.setTransform(0,-30);

	this.dress_6 = new lib.dress_6_2_mc();
	this.dress_6.setTransform(0,-30);

	this.dress_2 = new lib.dress_2_2_mc();
	this.dress_2.setTransform(0,-30);

	this.dress_9 = new lib.dress_9_2_mc();
	this.dress_9.setTransform(0,-30);

	this.dress_1 = new lib.dress_1_2_mc();
	this.dress_1.setTransform(0,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_8}]}).to({state:[{t:this.dress_7}]},1).to({state:[{t:this.dress_3}]},1).to({state:[{t:this.dress_4}]},1).to({state:[{t:this.dress_5}]},1).to({state:[{t:this.dress_6}]},1).to({state:[{t:this.dress_2}]},1).to({state:[{t:this.dress_9}]},1).to({state:[{t:this.dress_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-265,400,470);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.closet_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.dress_0 = new lib.dress_0_mc();
	this.dress_0.setTransform(-145,-185);

	this.timeline.addTween(cjs.Tween.get(this.dress_0).wait(9));

	// options
	this.dress_9 = new lib.dress_9_1_mc();
	this.dress_9.setTransform(0,-30);

	this.dress_2 = new lib.dress_2_1_mc();
	this.dress_2.setTransform(0,-30);

	this.dress_3 = new lib.dress_3_1_mc();
	this.dress_3.setTransform(0,-30);

	this.dress_4 = new lib.dress_4_1_mc();
	this.dress_4.setTransform(0,-30);

	this.dress_5 = new lib.dress_5_1_mc();
	this.dress_5.setTransform(0,-30);

	this.dress_6 = new lib.dress_6_1_mc();
	this.dress_6.setTransform(0,-30);

	this.dress_7 = new lib.dress_7_1_mc();
	this.dress_7.setTransform(0,-30);

	this.dress_8 = new lib.dress_8_1_mc();
	this.dress_8.setTransform(0,-30);

	this.dress_1 = new lib.dress_1_1_mc();
	this.dress_1.setTransform(0,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_9}]}).to({state:[{t:this.dress_2}]},1).to({state:[{t:this.dress_3}]},1).to({state:[{t:this.dress_4}]},1).to({state:[{t:this.dress_5}]},1).to({state:[{t:this.dress_6}]},1).to({state:[{t:this.dress_7}]},1).to({state:[{t:this.dress_8}]},1).to({state:[{t:this.dress_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-270,420,480);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.closet_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.hair_4 = new lib.hairstyle_4_2_mc();
	this.hair_4.setTransform(0,-10);

	this.hair_3 = new lib.hairstyle_3_2_mc();
	this.hair_3.setTransform(0,-10);

	this.hair_2 = new lib.hairstyle_2_2_mc();
	this.hair_2.setTransform(0,-10);

	this.hair_5 = new lib.hairstyle_5_2_mc();
	this.hair_5.setTransform(0,-10);

	this.hair_6 = new lib.hairstyle_6_2_mc();
	this.hair_6.setTransform(0,-10);

	this.hair_1 = new lib.hairstyle_1_2_mc();
	this.hair_1.setTransform(0,-10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_4}]}).to({state:[{t:this.hair_3}]},1).to({state:[{t:this.hair_2}]},1).to({state:[{t:this.hair_5}]},1).to({state:[{t:this.hair_6}]},1).to({state:[{t:this.hair_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-230,420,440);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.closet_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.hair_3 = new lib.hairstyle_3_1_mc();

	this.hair_2 = new lib.hairstyle_2_1_mc();

	this.hair_5 = new lib.hairstyle_5_1_mc();

	this.hair_4 = new lib.hairstyle_4_1_mc();

	this.hair_6 = new lib.hairstyle_6_1_mc();

	this.hair_1 = new lib.hairstyle_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_3}]}).to({state:[{t:this.hair_2}]},1).to({state:[{t:this.hair_5}]},1).to({state:[{t:this.hair_4}]},1).to({state:[{t:this.hair_6}]},1).to({state:[{t:this.hair_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-195,390,390);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.closet_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.makeup_0 = new lib.makeup_0_mc();
	this.makeup_0.setTransform(135,-90);

	this.timeline.addTween(cjs.Tween.get(this.makeup_0).to({_off:true},5).wait(3));

	// options
	this.makeup_2 = new lib.makeup_2_2_mc();
	this.makeup_2.setTransform(10,100);

	this.makeup_1 = new lib.makeup_1_2_mc();
	this.makeup_1.setTransform(-10,-90);

	this.makeup_4 = new lib.makeup_4_2_mc();
	this.makeup_4.setTransform(-10,100);

	this.makeup_3 = new lib.makeup_3_2_mc();
	this.makeup_3.setTransform(10,-90);

	this.makeup_8 = new lib.makeup_8_2_mc();
	this.makeup_8.setTransform(10,100);

	this.makeup_5 = new lib.makeup_5_2_mc();
	this.makeup_5.setTransform(-10,-90);

	this.makeup_6 = new lib.makeup_6_2_mc();
	this.makeup_6.setTransform(-10,100);

	this.makeup_7 = new lib.makeup_7_2_mc();
	this.makeup_7.setTransform(10,-90);

	this.makeup_9 = new lib.makeup_9_2_mc();
	this.makeup_9.setTransform(0,10);

	this.eyes_6 = new lib.eyes_6_2_mc();
	this.eyes_6.setTransform(-10,105);

	this.eyes_2 = new lib.eyes_2_2_mc();
	this.eyes_2.setTransform(10,-95);

	this.eyes_4 = new lib.eyes_4_2_mc();
	this.eyes_4.setTransform(10,105);

	this.eyes_3 = new lib.eyes_3_2_mc();
	this.eyes_3.setTransform(-10,-95);

	this.eyes_1 = new lib.eyes_1_2_mc();
	this.eyes_1.setTransform(-10,105);

	this.eyes_5 = new lib.eyes_5_2_mc();
	this.eyes_5.setTransform(10,-95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.makeup_1},{t:this.makeup_2}]}).to({state:[{t:this.makeup_3},{t:this.makeup_4}]},1).to({state:[{t:this.makeup_5},{t:this.makeup_8}]},1).to({state:[{t:this.makeup_7},{t:this.makeup_6}]},1).to({state:[{t:this.makeup_9}]},1).to({state:[{t:this.eyes_2},{t:this.eyes_6}]},1).to({state:[{t:this.eyes_3},{t:this.eyes_4}]},1).to({state:[{t:this.eyes_5},{t:this.eyes_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-200,279,410);
p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(-110,-114,269,234), rect=new cjs.Rectangle(-125,-210,250,430), rect, rect];


(lib.closet_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.makeup_0 = new lib.makeup_0_mc();
	this.makeup_0.setTransform(-167,-70);

	this.timeline.addTween(cjs.Tween.get(this.makeup_0).to({_off:true},5).wait(3));

	// options
	this.makeup_8 = new lib.makeup_8_1_mc();
	this.makeup_8.setTransform(10,100);

	this.makeup_1 = new lib.makeup_1_1_mc();
	this.makeup_1.setTransform(-20,-100);

	this.makeup_4 = new lib.makeup_4_1_mc();
	this.makeup_4.setTransform(-10,100);

	this.makeup_3 = new lib.makeup_3_1_mc();
	this.makeup_3.setTransform(20,-100);

	this.makeup_6 = new lib.makeup_6_1_mc();
	this.makeup_6.setTransform(10,100);

	this.makeup_5 = new lib.makeup_5_1_mc();
	this.makeup_5.setTransform(-20,-100);

	this.makeup_9 = new lib.makeup_9_1_mc();
	this.makeup_9.setTransform(-10,100);

	this.makeup_7 = new lib.makeup_7_1_mc();
	this.makeup_7.setTransform(20,-100);

	this.makeup_2 = new lib.makeup_2_1_mc();
	this.makeup_2.setTransform(0,10);

	this.eyes_6 = new lib.eyes_6_1_mc();
	this.eyes_6.setTransform(10,100);

	this.eyes_2 = new lib.eyes_2_1_mc();
	this.eyes_2.setTransform(-20,-110);

	this.eyes_4 = new lib.eyes_4_1_mc();
	this.eyes_4.setTransform(-10,100);

	this.eyes_3 = new lib.eyes_3_1_mc();
	this.eyes_3.setTransform(20,-110);

	this.eyes_1 = new lib.eyes_1_1_mc();
	this.eyes_1.setTransform(10,100);

	this.eyes_5 = new lib.eyes_5_1_mc();
	this.eyes_5.setTransform(-20,-110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.makeup_1},{t:this.makeup_8}]}).to({state:[{t:this.makeup_3},{t:this.makeup_4}]},1).to({state:[{t:this.makeup_5},{t:this.makeup_6}]},1).to({state:[{t:this.makeup_7},{t:this.makeup_9}]},1).to({state:[{t:this.makeup_2}]},1).to({state:[{t:this.eyes_2},{t:this.eyes_6}]},1).to({state:[{t:this.eyes_3},{t:this.eyes_4}]},1).to({state:[{t:this.eyes_5},{t:this.eyes_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-191,-210,311,420);
p.frameBounds = [rect, new cjs.Rectangle(-191,-210,321,420), new cjs.Rectangle(-191,-210,311,420), new cjs.Rectangle(-191,-210,321,420), new cjs.Rectangle(-191,-100,301,220), new cjs.Rectangle(-140,-230,270,450), new cjs.Rectangle(-130,-230,270,450), new cjs.Rectangle(-140,-230,270,450)];


(lib.bodyDressupPanel_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_2_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-180,315,370);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_2_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-220,288,450);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_1_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-265,400,470);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-270,420,480);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-230,420,440);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-195,390,390);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-200,279,410);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-191,-210,311,420);
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


(lib.blanket_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blanket_9_2_img();
	this.instance.setTransform(-190,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A1hViQo8o7AAsnQAAsmI8o8QI7o7MmAAQMoAAI6I7QI8I8AAMmQAAMno8I7Qo6I8sogBQsmABo7o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-220,420,440);
p.frameBounds = [rect];


(lib.blanket_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blanket_8_2_img();
	this.instance.setTransform(-190,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A1hViQo8o7AAsnQAAsmI8o8QI7o7MmAAQMoAAI6I7QI8I8AAMmQAAMno8I7Qo6I8sogBQsmABo7o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-220,420,440);
p.frameBounds = [rect];


(lib.blanket_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blanket_7_2_img();
	this.instance.setTransform(-190,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A1hViQo8o7AAsnQAAsmI8o8QI7o7MmAAQMoAAI6I7QI8I8AAMmQAAMno8I7Qo6I8sogBQsmABo7o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-220,420,440);
p.frameBounds = [rect];


(lib.blanket_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blanket_6_2_img();
	this.instance.setTransform(-190,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A1hViQo8o7AAsnQAAsmI8o8QI7o7MmAAQMoAAI6I7QI8I8AAMmQAAMno8I7Qo6I8sogBQsmABo7o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-220,420,440);
p.frameBounds = [rect];


(lib.blanket_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blanket_5_2_img();
	this.instance.setTransform(-190,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A1hViQo8o7AAsnQAAsmI8o8QI7o7MmAAQMoAAI6I7QI8I8AAMmQAAMno8I7Qo6I8sogBQsmABo7o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-220,420,440);
p.frameBounds = [rect];


(lib.blanket_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blanket_4_2_img();
	this.instance.setTransform(-190,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A1hViQo8o7AAsnQAAsmI8o8QI7o7MmAAQMoAAI6I7QI8I8AAMmQAAMno8I7Qo6I8sogBQsmABo7o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-220,420,440);
p.frameBounds = [rect];


(lib.blanket_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blanket_3_2_img();
	this.instance.setTransform(-190,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A1hViQo8o7AAsnQAAsmI8o8QI7o7MmAAQMoAAI6I7QI8I8AAMmQAAMno8I7Qo6I8sogBQsmABo7o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-220,420,440);
p.frameBounds = [rect];


(lib.blanket_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blanket_2_2_img();
	this.instance.setTransform(-190,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A1hViQo8o7AAsnQAAsmI8o8QI7o7MmAAQMoAAI6I7QI8I8AAMmQAAMno8I7Qo6I8sogBQsmABo7o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-220,420,440);
p.frameBounds = [rect];


(lib.blanket_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blanket_1_2_img();
	this.instance.setTransform(-190,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A1hViQo8o7AAsnQAAsmI8o8QI7o7MmAAQMoAAI6I7QI8I8AAMmQAAMno8I7Qo6I8sogBQsmABo7o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-220,420,440);
p.frameBounds = [rect];


(lib.blanket_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0.1,0.48,0.48,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-210,-250,420,500);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.accessory_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0.1,0.48,0.48,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


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
	this.instance.setTransform(-200,200,0.6,0.6);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,110,300,180);
p.frameBounds = [rect, new cjs.Rectangle(-348.7,106.8,302.5,181.5), new cjs.Rectangle(-345,97.1,309.9,186), new cjs.Rectangle(-338.9,81.1,322.2,193.4), new cjs.Rectangle(-330.2,58.6,339.5,203.7), new cjs.Rectangle(-319,29.7,361.7,217.1), new cjs.Rectangle(-305.5,-5.5,388.9,233.4), new cjs.Rectangle(-289.4,-47.2,421,252.6), new cjs.Rectangle(-270.9,-95.4,458,274.8), new cjs.Rectangle(-250,-150,500,300)];


(lib.white_flash_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.white_flash_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
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
p.nominalBounds = rect = new cjs.Rectangle(-12,-12,24,24);
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
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.67,scaleY:0.67,alpha:0.012},19).to({scaleX:1,scaleY:1,alpha:0.301},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-32,40,40);
p.frameBounds = [rect, new cjs.Rectangle(-31.4,-31.4,39.3,39.3), new cjs.Rectangle(-30.8,-30.8,38.6,38.6), new cjs.Rectangle(-30.3,-30.3,37.9,37.9), new cjs.Rectangle(-29.7,-29.7,37.2,37.2), new cjs.Rectangle(-29.1,-29.1,36.5,36.5), new cjs.Rectangle(-28.6,-28.6,35.8,35.8), new cjs.Rectangle(-28,-28,35.1,35.1), new cjs.Rectangle(-27.5,-27.5,34.4,34.4), new cjs.Rectangle(-26.9,-26.9,33.7,33.7), new cjs.Rectangle(-26.3,-26.3,33,33), new cjs.Rectangle(-25.8,-25.8,32.3,32.3), new cjs.Rectangle(-25.2,-25.2,31.6,31.6), new cjs.Rectangle(-24.7,-24.7,30.9,30.9), new cjs.Rectangle(-24.1,-24.1,30.2,30.2), new cjs.Rectangle(-23.5,-23.5,29.5,29.5), new cjs.Rectangle(-23,-23,28.8,28.8), new cjs.Rectangle(-22.4,-22.4,28.1,28.1), new cjs.Rectangle(-21.8,-21.8,27.4,27.4), new cjs.Rectangle(-21.3,-21.3,26.7,26.7), new cjs.Rectangle(-21.8,-21.8,27.4,27.4), new cjs.Rectangle(-22.3,-22.3,28,28), new cjs.Rectangle(-22.9,-22.9,28.7,28.7), new cjs.Rectangle(-23.4,-23.4,29.4,29.4), new cjs.Rectangle(-23.9,-23.9,30,30), new cjs.Rectangle(-24.5,-24.5,30.7,30.7), new cjs.Rectangle(-25,-25,31.4,31.4), new cjs.Rectangle(-25.5,-25.5,32,32), new cjs.Rectangle(-26.1,-26.1,32.7,32.7), new cjs.Rectangle(-26.6,-26.6,33.4,33.4), new cjs.Rectangle(-27.1,-27.1,34,34), new cjs.Rectangle(-27.7,-27.7,34.7,34.7), new cjs.Rectangle(-28.2,-28.2,35.4,35.4), new cjs.Rectangle(-28.7,-28.7,36,36), new cjs.Rectangle(-29.3,-29.3,36.7,36.7), new cjs.Rectangle(-29.8,-29.8,37.4,37.4), new cjs.Rectangle(-30.3,-30.3,38,38), new cjs.Rectangle(-30.9,-30.9,38.7,38.7), new cjs.Rectangle(-31.4,-31.4,39.4,39.4), new cjs.Rectangle(-32,-32,40,40)];


(lib.blinking_light_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_light_1_2_mc();
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.012},14).to({scaleX:1,scaleY:1,alpha:0.301},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect, new cjs.Rectangle(-19.7,-19.7,39.5,39.5), new cjs.Rectangle(-19.4,-19.4,38.8,38.8), new cjs.Rectangle(-19.1,-19.1,38.3,38.3), new cjs.Rectangle(-18.8,-18.8,37.7,37.7), new cjs.Rectangle(-18.5,-18.5,37.2,37.2), new cjs.Rectangle(-18.2,-18.2,36.6,36.6), new cjs.Rectangle(-18,-18,36,36), new cjs.Rectangle(-17.7,-17.7,35.5,35.5), new cjs.Rectangle(-17.4,-17.4,34.8,34.8), new cjs.Rectangle(-17.1,-17.1,34.3,34.3), new cjs.Rectangle(-16.8,-16.8,33.7,33.7), new cjs.Rectangle(-16.5,-16.5,33.2,33.2), new cjs.Rectangle(-16.2,-16.2,32.6,32.6), new cjs.Rectangle(-16,-16,32,32), new cjs.Rectangle(-16.2,-16.2,32.6,32.6), new cjs.Rectangle(-16.5,-16.5,33.1,33.1), new cjs.Rectangle(-16.7,-16.7,33.6,33.6), new cjs.Rectangle(-17,-17,34.2,34.2), new cjs.Rectangle(-17.3,-17.3,34.7,34.7), new cjs.Rectangle(-17.5,-17.5,35.2,35.2), new cjs.Rectangle(-17.8,-17.8,35.8,35.8), new cjs.Rectangle(-18.1,-18.1,36.3,36.3), new cjs.Rectangle(-18.3,-18.3,36.8,36.8), new cjs.Rectangle(-18.6,-18.6,37.3,37.3), new cjs.Rectangle(-18.9,-18.9,37.8,37.8), new cjs.Rectangle(-19.1,-19.1,38.4,38.4), new cjs.Rectangle(-19.4,-19.4,39,39), new cjs.Rectangle(-19.7,-19.7,39.5,39.5), new cjs.Rectangle(-20,-20,40,40)];


(lib.gravity_big_explosion_second_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// container
	this.example_mc = new lib.ParticleBigGravityExplosionSecondMC();

	this.timeline.addTween(cjs.Tween.get(this.example_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


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


(lib.nav_anim_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_5_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},19).to({alpha:0.012},10).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoRISQjbjcgBk2QABk1DbjdQDcjbE1AAQE2AADcDbQDcDdAAE1QAAE2jcDcQjcDck2AAQk1AAjcjcg");
	this.shape.setTransform(3.3,6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,161.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_anim_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_4_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},19).to({alpha:0.012},10).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoRISQjcjcABk2QgBk1DcjdQDcjaE1AAQE2AADcDaQDcDdgBE1QABE2jcDcQjcDck2gBQk1ABjcjcg");
	this.shape.setTransform(-5.2,-3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,160,161.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_anim_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_3_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},19).to({alpha:0.012},10).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoRISQjcjcABk2QgBk1DcjdQDcjaE1AAQE2AADcDaQDcDdgBE1QABE2jcDcQjcDck2gBQk1ABjcjcg");
	this.shape.setTransform(6.6,6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_anim_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_2_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},19).to({alpha:0.012},10).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoRISQjcjcABk2QgBk1DcjdQDcjaE1AAQE2AADcDaQDcDdgBE1QABE2jcDcQjcDck2gBQk1ABjcjcg");
	this.shape.setTransform(-8.2,-8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfHzIAAvmIY/AAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-50,160,100);
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


(lib.skin_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.skin_9_2_img();
	this.instance.setTransform(-190,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A1hViQo8o7AAsnQAAsmI8o8QI7o7MmAAQMoAAI6I7QI8I8AAMmQAAMno8I7Qo6I8sogBQsmABo7o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-220,420,440);
p.frameBounds = [rect];


(lib.skin_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.skin_8_2_img();
	this.instance.setTransform(-190,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A1hViQo8o7AAsnQAAsmI8o8QI7o7MmAAQMoAAI6I7QI8I8AAMmQAAMno8I7Qo6I8sogBQsmABo7o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-220,420,440);
p.frameBounds = [rect];


(lib.skin_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.skin_7_2_img();
	this.instance.setTransform(-190,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A1hViQo8o7AAsnQAAsmI8o8QI7o7MmAAQMoAAI6I7QI8I8AAMmQAAMno8I7Qo6I8sogBQsmABo7o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-220,420,440);
p.frameBounds = [rect];


(lib.skin_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.skin_6_2_img();
	this.instance.setTransform(-190,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A1hViQo8o7AAsnQAAsmI8o8QI7o7MmAAQMoAAI6I7QI8I8AAMmQAAMno8I7Qo6I8sogBQsmABo7o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-220,420,440);
p.frameBounds = [rect];


(lib.skin_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.skin_5_2_img();
	this.instance.setTransform(-190,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A1hViQo8o7AAsnQAAsmI8o8QI7o7MmAAQMoAAI6I7QI8I8AAMmQAAMno8I7Qo6I8sogBQsmABo7o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-220,420,440);
p.frameBounds = [rect];


(lib.skin_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.skin_4_2_img();
	this.instance.setTransform(-190,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A1hViQo8o7AAsnQAAsmI8o8QI7o7MmAAQMoAAI6I7QI8I8AAMmQAAMno8I7Qo6I8sogBQsmABo7o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-220,420,440);
p.frameBounds = [rect];


(lib.skin_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.skin_3_2_img();
	this.instance.setTransform(-190,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A1hViQo8o7AAsnQAAsmI8o8QI7o7MmAAQMoAAI6I7QI8I8AAMmQAAMno8I7Qo6I8sogBQsmABo7o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-220,420,440);
p.frameBounds = [rect];


(lib.skin_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.skin_2_2_img();
	this.instance.setTransform(-190,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A1hViQo8o7AAsnQAAsmI8o8QI7o7MmAAQMoAAI6I7QI8I8AAMmQAAMno8I7Qo6I8sogBQsmABo7o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-220,420,440);
p.frameBounds = [rect];


(lib.skin_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.skin_1_2_img();
	this.instance.setTransform(-190,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.008)").s().p("A1hViQo8o7AAsnQAAsmI8o8QI7o7MmAAQMoAAI6I7QI8I8AAMmQAAMno8I7Qo6I8sogBQsmABo7o8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-220,420,440);
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
	this.instance.setTransform(-195,-240);

	this.instance_1 = new lib.location_1_6_img();
	this.instance_1.setTransform(-195,-240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_1_mc();
	this.instance_2.setTransform(-2,0,1,1,0,0,180);

	this.instance_3 = new lib.animation_current_location_1_1_mc();
	this.instance_3.setTransform(-2,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A0+ZaQosqhAAu5QAAu4IsqiQIsqhMSAAQMSAAIsKhQItKiAAO4QAAO5otKhQosKisSAAQsSAAosqig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-212,-250,420,500);
p.frameBounds = [rect, rect, rect];


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_5_img();
	this.instance.setTransform(-195,-240);

	this.instance_1 = new lib.location_1_5_img();
	this.instance_1.setTransform(-195,-240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_1_mc();

	this.instance_3 = new lib.animation_current_location_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A0+ZaQosqhAAu5QAAu4IsqiQIsqhMSAAQMSAAIsKhQItKiAAO4QAAO5otKhQosKisSAAQsSAAosqig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-250,420,500);
p.frameBounds = [rect, rect, rect];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_4_img();
	this.instance.setTransform(-195,-240);

	this.instance_1 = new lib.location_1_4_img();
	this.instance_1.setTransform(-195,-240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_1_mc();
	this.instance_2.setTransform(-2,0,1,1,0,0,180);

	this.instance_3 = new lib.animation_current_location_1_1_mc();
	this.instance_3.setTransform(-2,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A0+ZaQosqhAAu5QAAu4IsqiQIsqhMSAAQMSAAIsKhQItKiAAO4QAAO5otKhQosKisSAAQsSAAosqig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-212,-250,420,500);
p.frameBounds = [rect, rect, rect];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_3_img();
	this.instance.setTransform(-195,-240);

	this.instance_1 = new lib.location_1_3_img();
	this.instance_1.setTransform(-195,-240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_1_mc();

	this.instance_3 = new lib.animation_current_location_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A0+ZaQosqhAAu5QAAu4IsqiQIsqhMSAAQMSAAIsKhQItKiAAO4QAAO5otKhQosKisSAAQsSAAosqig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-250,420,500);
p.frameBounds = [rect, rect, rect];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_2_img();
	this.instance.setTransform(-195,-240);

	this.instance_1 = new lib.location_1_2_img();
	this.instance_1.setTransform(-195,-240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_1_mc();
	this.instance_2.setTransform(-2,0,1,1,0,0,180);

	this.instance_3 = new lib.animation_current_location_1_1_mc();
	this.instance_3.setTransform(-2,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A0+ZaQosqhAAu5QAAu4IsqiQIsqhMSAAQMSAAIsKhQItKiAAO4QAAO5otKhQosKisSAAQsSAAosqig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-212,-250,420,500);
p.frameBounds = [rect, rect, rect];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_1_img();
	this.instance.setTransform(-195,-240);

	this.instance_1 = new lib.location_1_1_img();
	this.instance_1.setTransform(-195,-240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_1_mc();

	this.instance_3 = new lib.animation_current_location_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A0+ZaQosqhAAu5QAAu4IsqiQIsqhMSAAQMSAAIsKhQItKiAAO4QAAO5otKhQosKisSAAQsSAAosqig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-250,420,500);
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


(lib.frame_locations_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:49,end:99});

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(100));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-195,0);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(100));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(195,0);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(24).to({scaleX:1.08,scaleY:1.08},10).to({scaleX:1,scaleY:1},10).wait(5).to({scaleX:0.91,scaleY:0.91},5).to({scaleX:1,scaleY:1},10).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-405,-250,808,550);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-405,-251.9,809.6,552), new cjs.Rectangle(-405,-254,811.3,554), new cjs.Rectangle(-405,-256,813,556), new cjs.Rectangle(-405,-257.9,814.6,558), new cjs.Rectangle(-405,-260,816.3,560), new cjs.Rectangle(-405,-262,818,562), new cjs.Rectangle(-405,-263.9,819.6,564), new cjs.Rectangle(-405,-265.9,821.3,566), new cjs.Rectangle(-405,-268,823,568), new cjs.Rectangle(-405,-270,824.6,570), new cjs.Rectangle(-405,-267.9,823,568), new cjs.Rectangle(-405,-265.9,821.3,566), new cjs.Rectangle(-405,-263.9,819.6,564), new cjs.Rectangle(-405,-261.9,818,562), new cjs.Rectangle(-405,-259.9,816.3,560), new cjs.Rectangle(-405,-257.9,814.6,558), new cjs.Rectangle(-405,-255.9,813,556), new cjs.Rectangle(-405,-253.9,811.3,554), new cjs.Rectangle(-405,-251.9,809.6,552), rect=new cjs.Rectangle(-405,-250,808,550), rect, rect, rect, rect, rect, new cjs.Rectangle(-405,-250,804,550), new cjs.Rectangle(-405,-250,800,550), new cjs.Rectangle(-405,-250,796.1,550), new cjs.Rectangle(-405,-250,792.2,550), new cjs.Rectangle(-405,-250,788.2,550), new cjs.Rectangle(-405,-250,790.1,550), new cjs.Rectangle(-405,-250,792.1,550), new cjs.Rectangle(-405,-250,794.1,550), new cjs.Rectangle(-405,-250,796.1,550), new cjs.Rectangle(-405,-250,798,550), new cjs.Rectangle(-405,-250,800,550), new cjs.Rectangle(-405,-250,802,550), new cjs.Rectangle(-405,-250,803.9,550), new cjs.Rectangle(-405,-250,805.9,550), rect=new cjs.Rectangle(-405,-250,808,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":119});

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
	this.frame_32 = function() {
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
	this.frame_52 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(8).call(this.frame_32).wait(12).call(this.frame_44).wait(8).call(this.frame_52).wait(68));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(120));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-195,0);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:-550},0).wait(23).to({scaleY:0.92,y:100},13).to({scaleY:1,y:0},7).wait(25).to({scaleX:0.91,scaleY:0.91},5).to({scaleX:1,scaleY:1},10).wait(36));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(195,0);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({y:-550},0).wait(43).to({scaleY:0.92,y:100},13).to({scaleY:1,y:0},7).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-405,-250,808,550);
p.frameBounds = [rect, rect=new cjs.Rectangle(-405,-800,808,1100), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-405,-800,808,1130), new cjs.Rectangle(-404.9,-800,807.9,1118.6), new cjs.Rectangle(-404.9,-800,807.9,1107.2), rect=new cjs.Rectangle(-404.9,-800,807.9,1100), rect, rect, rect, new cjs.Rectangle(-405,-800,808,1100), new cjs.Rectangle(-405,-748.4,808,1048.5), new cjs.Rectangle(-405,-696.9,808,996.9), new cjs.Rectangle(-405,-645.3,808,945.4), new cjs.Rectangle(-405,-593.8,808,893.8), new cjs.Rectangle(-405,-542.3,808,842.3), new cjs.Rectangle(-405,-490.8,808,790.8), new cjs.Rectangle(-405,-439.2,808,739.2), new cjs.Rectangle(-405,-387.7,808,687.7), new cjs.Rectangle(-405,-336.2,808,636.2), new cjs.Rectangle(-405,-284.6,808,584.7), rect=new cjs.Rectangle(-405,-250,808,550), rect, new cjs.Rectangle(-405,-250,808,580), new cjs.Rectangle(-405,-250,807.9,568.6), new cjs.Rectangle(-405,-250,807.9,557.2), rect=new cjs.Rectangle(-405,-250,807.9,550), rect, rect, rect, rect=new cjs.Rectangle(-405,-250,808,550), rect, rect, rect, rect, rect, new cjs.Rectangle(-401,-250,804,550), new cjs.Rectangle(-396.9,-250,800,550), new cjs.Rectangle(-393,-250,796,550), new cjs.Rectangle(-389,-250,792,550), new cjs.Rectangle(-385,-250,788,550), new cjs.Rectangle(-386.9,-250,790,550), new cjs.Rectangle(-388.9,-250,792,550), new cjs.Rectangle(-390.9,-250,794,550), new cjs.Rectangle(-392.9,-250,796,550), new cjs.Rectangle(-394.9,-250,797.9,550), new cjs.Rectangle(-396.9,-250,799.9,550), new cjs.Rectangle(-398.9,-250,801.9,550), new cjs.Rectangle(-400.9,-250,803.9,550), new cjs.Rectangle(-402.9,-250,805.9,550), rect=new cjs.Rectangle(-405,-250,808,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":99});

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(100));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-195,0);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(100));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(195,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(24).to({scaleX:1.08,scaleY:1.08},10).to({scaleX:1,scaleY:1},10).wait(5).to({scaleX:0.91,scaleY:0.91},5).to({scaleX:1,scaleY:1},10).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-405,-250,808,550);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-405,-251.9,809.6,552), new cjs.Rectangle(-405,-254,811.3,554), new cjs.Rectangle(-405,-256,813,556), new cjs.Rectangle(-405,-257.9,814.6,558), new cjs.Rectangle(-405,-260,816.3,560), new cjs.Rectangle(-405,-262,818,562), new cjs.Rectangle(-405,-263.9,819.6,564), new cjs.Rectangle(-405,-265.9,821.3,566), new cjs.Rectangle(-405,-268,823,568), new cjs.Rectangle(-405,-270,824.6,570), new cjs.Rectangle(-405,-267.9,823,568), new cjs.Rectangle(-405,-265.9,821.3,566), new cjs.Rectangle(-405,-263.9,819.6,564), new cjs.Rectangle(-405,-261.9,818,562), new cjs.Rectangle(-405,-259.9,816.3,560), new cjs.Rectangle(-405,-257.9,814.6,558), new cjs.Rectangle(-405,-255.9,813,556), new cjs.Rectangle(-405,-253.9,811.3,554), new cjs.Rectangle(-405,-251.9,809.6,552), rect=new cjs.Rectangle(-405,-250,808,550), rect, rect, rect, rect, rect, new cjs.Rectangle(-405,-250,804,550), new cjs.Rectangle(-405,-250,800,550), new cjs.Rectangle(-405,-250,796.1,550), new cjs.Rectangle(-405,-250,792.2,550), new cjs.Rectangle(-405,-250,788.2,550), new cjs.Rectangle(-405,-250,790.1,550), new cjs.Rectangle(-405,-250,792.1,550), new cjs.Rectangle(-405,-250,794.1,550), new cjs.Rectangle(-405,-250,796.1,550), new cjs.Rectangle(-405,-250,798,550), new cjs.Rectangle(-405,-250,800,550), new cjs.Rectangle(-405,-250,802,550), new cjs.Rectangle(-405,-250,803.9,550), new cjs.Rectangle(-405,-250,805.9,550), rect=new cjs.Rectangle(-405,-250,808,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":119});

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
	this.frame_32 = function() {
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
	this.frame_52 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(8).call(this.frame_32).wait(12).call(this.frame_44).wait(8).call(this.frame_52).wait(68));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(120));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-195,0);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-550},0).wait(23).to({scaleY:0.92,y:100},13).to({scaleY:1,y:0},7).wait(25).to({scaleX:0.91,scaleY:0.91},5).to({scaleX:1,scaleY:1},10).wait(36));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(195,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({y:-550},0).wait(43).to({scaleY:0.92,y:100},13).to({scaleY:1,y:0},7).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-405,-250,808,550);
p.frameBounds = [rect, rect=new cjs.Rectangle(-405,-800,808,1100), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-405,-800,808,1130), new cjs.Rectangle(-404.9,-800,807.9,1118.6), new cjs.Rectangle(-404.9,-800,807.9,1107.1), rect=new cjs.Rectangle(-404.9,-800,807.9,1100), rect, rect, rect, new cjs.Rectangle(-405,-800,808,1100), new cjs.Rectangle(-405,-748.4,808,1048.5), new cjs.Rectangle(-405,-696.9,808,996.9), new cjs.Rectangle(-405,-645.3,808,945.4), new cjs.Rectangle(-405,-593.8,808,893.8), new cjs.Rectangle(-405,-542.3,808,842.3), new cjs.Rectangle(-405,-490.7,808,790.8), new cjs.Rectangle(-405,-439.1,808,739.2), new cjs.Rectangle(-405,-387.6,808,687.6), new cjs.Rectangle(-405,-336.1,808,636.1), new cjs.Rectangle(-405,-284.5,808,584.6), rect=new cjs.Rectangle(-405,-250,808,550), rect, new cjs.Rectangle(-405,-250,808,580), new cjs.Rectangle(-405,-250,807.9,568.6), new cjs.Rectangle(-405,-250,807.9,557.1), rect=new cjs.Rectangle(-405,-250,807.9,550), rect, rect, rect, rect=new cjs.Rectangle(-405,-250,808,550), rect, rect, rect, rect, rect, new cjs.Rectangle(-401,-250,804,550), new cjs.Rectangle(-396.9,-250,800,550), new cjs.Rectangle(-393,-250,796,550), new cjs.Rectangle(-389,-250,792,550), new cjs.Rectangle(-385,-250,788,550), new cjs.Rectangle(-386.9,-250,790,550), new cjs.Rectangle(-388.9,-250,792,550), new cjs.Rectangle(-390.9,-250,794,550), new cjs.Rectangle(-392.9,-250,796,550), new cjs.Rectangle(-394.9,-250,797.9,550), new cjs.Rectangle(-396.9,-250,799.9,550), new cjs.Rectangle(-398.9,-250,801.9,550), new cjs.Rectangle(-400.9,-250,803.9,550), new cjs.Rectangle(-402.9,-250,805.9,550), rect=new cjs.Rectangle(-405,-250,808,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":99});

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(100));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-195,0);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(100));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(195,0);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(24).to({scaleX:1.08,scaleY:1.08},10).to({scaleX:1,scaleY:1},10).wait(5).to({scaleX:0.91,scaleY:0.91},5).to({scaleX:1,scaleY:1},10).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-405,-250,808,550);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-405,-251.9,809.6,552), new cjs.Rectangle(-405,-254,811.3,554), new cjs.Rectangle(-405,-256,813,556), new cjs.Rectangle(-405,-257.9,814.6,558), new cjs.Rectangle(-405,-260,816.3,560), new cjs.Rectangle(-405,-262,818,562), new cjs.Rectangle(-405,-263.9,819.6,564), new cjs.Rectangle(-405,-265.9,821.3,566), new cjs.Rectangle(-405,-268,823,568), new cjs.Rectangle(-405,-270,824.6,570), new cjs.Rectangle(-405,-267.9,823,568), new cjs.Rectangle(-405,-265.9,821.3,566), new cjs.Rectangle(-405,-263.9,819.6,564), new cjs.Rectangle(-405,-261.9,818,562), new cjs.Rectangle(-405,-259.9,816.3,560), new cjs.Rectangle(-405,-257.9,814.6,558), new cjs.Rectangle(-405,-255.9,813,556), new cjs.Rectangle(-405,-253.9,811.3,554), new cjs.Rectangle(-405,-251.9,809.6,552), rect=new cjs.Rectangle(-405,-250,808,550), rect, rect, rect, rect, rect, new cjs.Rectangle(-405,-250,804,550), new cjs.Rectangle(-405,-250,800,550), new cjs.Rectangle(-405,-250,796.1,550), new cjs.Rectangle(-405,-250,792.2,550), new cjs.Rectangle(-405,-250,788.2,550), new cjs.Rectangle(-405,-250,790.1,550), new cjs.Rectangle(-405,-250,792.1,550), new cjs.Rectangle(-405,-250,794.1,550), new cjs.Rectangle(-405,-250,796.1,550), new cjs.Rectangle(-405,-250,798,550), new cjs.Rectangle(-405,-250,800,550), new cjs.Rectangle(-405,-250,802,550), new cjs.Rectangle(-405,-250,803.9,550), new cjs.Rectangle(-405,-250,805.9,550), rect=new cjs.Rectangle(-405,-250,808,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":119});

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
	this.frame_32 = function() {
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
	this.frame_52 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(8).call(this.frame_32).wait(12).call(this.frame_44).wait(8).call(this.frame_52).wait(68));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(120));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-195,0);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:-550},0).wait(23).to({scaleY:0.92,y:100},13).to({scaleY:1,y:0},7).wait(25).to({scaleX:0.91,scaleY:0.91},5).to({scaleX:1,scaleY:1},10).wait(36));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(195,0);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-550},0).wait(43).to({scaleY:0.92,y:100},13).to({scaleY:1,y:0},7).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-405,-250,808,550);
p.frameBounds = [rect, rect=new cjs.Rectangle(-405,-800,808,1100), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-405,-800,808,1130), new cjs.Rectangle(-404.9,-800,807.9,1118.6), new cjs.Rectangle(-404.9,-800,807.9,1107.1), rect=new cjs.Rectangle(-404.9,-800,807.9,1100), rect, rect, rect, new cjs.Rectangle(-405,-800,808,1100), new cjs.Rectangle(-405,-748.4,808,1048.5), new cjs.Rectangle(-405,-696.9,808,996.9), new cjs.Rectangle(-405,-645.3,808,945.4), new cjs.Rectangle(-405,-593.8,808,893.8), new cjs.Rectangle(-405,-542.3,808,842.3), new cjs.Rectangle(-405,-490.7,808,790.8), new cjs.Rectangle(-405,-439.2,808,739.2), new cjs.Rectangle(-405,-387.6,808,687.7), new cjs.Rectangle(-405,-336.1,808,636.2), new cjs.Rectangle(-405,-284.6,808,584.6), rect=new cjs.Rectangle(-405,-250,808,550), rect, new cjs.Rectangle(-405,-250,808,580), new cjs.Rectangle(-405,-250,807.9,568.6), new cjs.Rectangle(-405,-250,807.9,557.2), rect=new cjs.Rectangle(-405,-250,807.9,550), rect, rect, rect, rect=new cjs.Rectangle(-405,-250,808,550), rect, rect, rect, rect, rect, new cjs.Rectangle(-401,-250,804,550), new cjs.Rectangle(-396.9,-250,800,550), new cjs.Rectangle(-393,-250,796,550), new cjs.Rectangle(-389,-250,792,550), new cjs.Rectangle(-385,-250,788,550), new cjs.Rectangle(-386.9,-250,790,550), new cjs.Rectangle(-388.9,-250,792,550), new cjs.Rectangle(-390.9,-250,794,550), new cjs.Rectangle(-392.9,-250,796,550), new cjs.Rectangle(-394.9,-250,797.9,550), new cjs.Rectangle(-396.9,-250,799.9,550), new cjs.Rectangle(-398.9,-250,801.9,550), new cjs.Rectangle(-400.9,-250,803.9,550), new cjs.Rectangle(-402.9,-250,805.9,550), rect=new cjs.Rectangle(-405,-250,808,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.closet_3_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blanket_0 = new lib.blanket_0_mc();
	this.blanket_0.setTransform(150,-140);

	this.timeline.addTween(cjs.Tween.get(this.blanket_0).wait(9));

	// options
	this.blanket_1 = new lib.blanket_1_2_mc();
	this.blanket_1.setTransform(0,-10);

	this.blanket_2 = new lib.blanket_2_2_mc();
	this.blanket_2.setTransform(0,-10);

	this.blanket_3 = new lib.blanket_3_2_mc();
	this.blanket_3.setTransform(0,-10);

	this.blanket_4 = new lib.blanket_4_2_mc();
	this.blanket_4.setTransform(0,-10);

	this.blanket_5 = new lib.blanket_5_2_mc();
	this.blanket_5.setTransform(0,-10);

	this.blanket_6 = new lib.blanket_6_2_mc();
	this.blanket_6.setTransform(0,-10);

	this.blanket_7 = new lib.blanket_7_2_mc();
	this.blanket_7.setTransform(0,-10);

	this.blanket_8 = new lib.blanket_8_2_mc();
	this.blanket_8.setTransform(0,-10);

	this.blanket_9 = new lib.blanket_9_2_mc();
	this.blanket_9.setTransform(0,-10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blanket_1}]}).to({state:[{t:this.blanket_2}]},1).to({state:[{t:this.blanket_3}]},1).to({state:[{t:this.blanket_4}]},1).to({state:[{t:this.blanket_5}]},1).to({state:[{t:this.blanket_6}]},1).to({state:[{t:this.blanket_7}]},1).to({state:[{t:this.blanket_8}]},1).to({state:[{t:this.blanket_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-230,420,440);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.closet_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.skin_4 = new lib.skin_4_2_mc();
	this.skin_4.setTransform(0,-10);

	this.skin_2 = new lib.skin_2_2_mc();
	this.skin_2.setTransform(0,-10);

	this.skin_3 = new lib.skin_3_2_mc();
	this.skin_3.setTransform(0,-10);

	this.skin_5 = new lib.skin_5_2_mc();
	this.skin_5.setTransform(0,-10);

	this.skin_6 = new lib.skin_6_2_mc();
	this.skin_6.setTransform(0,-10);

	this.skin_7 = new lib.skin_7_2_mc();
	this.skin_7.setTransform(0,-10);

	this.skin_8 = new lib.skin_8_2_mc();
	this.skin_8.setTransform(0,-10);

	this.skin_9 = new lib.skin_9_2_mc();
	this.skin_9.setTransform(0,-10);

	this.skin_1 = new lib.skin_1_2_mc();
	this.skin_1.setTransform(0,-10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.skin_4}]}).to({state:[{t:this.skin_2}]},1).to({state:[{t:this.skin_3}]},1).to({state:[{t:this.skin_5}]},1).to({state:[{t:this.skin_6}]},1).to({state:[{t:this.skin_7}]},1).to({state:[{t:this.skin_8}]},1).to({state:[{t:this.skin_9}]},1).to({state:[{t:this.skin_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-230,420,440);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.closet_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.wings_0 = new lib.wings_0_mc();
	this.wings_0.setTransform(163,-110);

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(163,-110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.wings_0}]}).to({state:[{t:this.accessory_0}]},5).wait(2));

	// options
	this.wings_8 = new lib.wings_8_1_mc();
	this.wings_8.setTransform(0,80);

	this.wings_7 = new lib.wings_7_1_mc();
	this.wings_7.setTransform(0,-80);

	this.wings_3 = new lib.wings_3_1_mc();
	this.wings_3.setTransform(0,80);

	this.wings_4 = new lib.wings_4_1_mc();
	this.wings_4.setTransform(0,-80);

	this.wings_6 = new lib.wings_6_1_mc();
	this.wings_6.setTransform(0,80);

	this.wings_5 = new lib.wings_5_1_mc();
	this.wings_5.setTransform(0,-80);

	this.wings_2 = new lib.wings_2_1_mc();
	this.wings_2.setTransform(0,-80);

	this.wings_1 = new lib.wings_1_1_mc();
	this.wings_1.setTransform(0,80);

	this.wings_9 = new lib.wings_9_1_mc();

	this.accessory_3 = new lib.accessory_3_1_mc();
	this.accessory_3.setTransform(0,90);

	this.accessory_2 = new lib.accessory_2_1_mc();
	this.accessory_2.setTransform(60,-80);

	this.accessory_1 = new lib.accessory_1_1_mc();
	this.accessory_1.setTransform(-60,-80);

	this.accessory_6 = new lib.accessory_6_1_mc();
	this.accessory_6.setTransform(-60,-80);

	this.accessory_5 = new lib.accessory_5_1_mc();
	this.accessory_5.setTransform(60,-80);

	this.accessory_4 = new lib.accessory_4_1_mc();
	this.accessory_4.setTransform(0,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.wings_7},{t:this.wings_8}]}).to({state:[{t:this.wings_4},{t:this.wings_3}]},1).to({state:[{t:this.wings_5},{t:this.wings_6}]},1).to({state:[{t:this.wings_1},{t:this.wings_2}]},1).to({state:[{t:this.wings_9}]},1).to({state:[{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3}]},1).to({state:[{t:this.accessory_4},{t:this.accessory_5},{t:this.accessory_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-160,327,320);
p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(-140,-134,327,214), rect=new cjs.Rectangle(-110,-160,297,330), rect];


(lib.bodyDressupPanel_3_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_3_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-230,420,440);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_2_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-230,420,440);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_2_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-160,327,320);
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


(lib.white_flash_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.white_flash_5_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).to({alpha:0.012},12).to({_off:true},1).wait(76));

	// animation
	this.instance_1 = new lib.white_flash_6_mc();
	this.instance_1.setTransform(63,-77,0.167,0.167);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:0.602},0).to({regX:0.1,scaleX:0.33,scaleY:0.33,rotation:90,y:-76.9},5).to({regX:0,scaleX:0.17,scaleY:0.17,rotation:180,y:-77,alpha:0.012},12).to({_off:true},1).wait(71));

	// animation
	this.instance_2 = new lib.white_flash_6_mc();
	this.instance_2.setTransform(-3,-276,0.167,0.167);
	this.instance_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({alpha:0.602},0).to({regX:0.1,scaleX:0.33,scaleY:0.33,rotation:90,y:-275.9},5).to({regX:0,scaleX:0.17,scaleY:0.17,rotation:180,y:-276,alpha:0.012},12).to({_off:true},1).wait(71));

	// animation
	this.instance_3 = new lib.white_flash_6_mc();
	this.instance_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleX:0.33,scaleY:0.33,alpha:0.602},0).to({scaleX:0.87,scaleY:0.87,rotation:90},5).to({scaleX:0.33,scaleY:0.33,rotation:180,alpha:0.012},12).to({_off:true},1).wait(71));

	// animation
	this.instance_4 = new lib.white_flash_2_mc();
	this.instance_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.801},0).to({scaleX:1,scaleY:1,alpha:0.012},17).to({_off:true},1).wait(71));

	// animation
	this.instance_5 = new lib.white_flash_4_mc();
	this.instance_5.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({alpha:1},0).to({alpha:0.012},17).to({_off:true},1).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-301,300,451);
p.frameBounds = [rect, rect, new cjs.Rectangle(-150,-313.7,300,463.8), new cjs.Rectangle(-150,-324.8,300,474.8), new cjs.Rectangle(-150,-331.7,300,481.7), new cjs.Rectangle(-150,-332.6,300,482.6), new cjs.Rectangle(-150,-326,300,476), new cjs.Rectangle(-150,-329.6,300,479.7), new cjs.Rectangle(-150,-332,300,482.1), new cjs.Rectangle(-150,-333,300,483.1), new cjs.Rectangle(-150,-332.8,300,482.9), new cjs.Rectangle(-150,-331.4,300,481.4), new cjs.Rectangle(-150,-328.9,300,478.9), new cjs.Rectangle(-150,-325.6,300,475.6), new cjs.Rectangle(-150,-321.4,300,471.5), new cjs.Rectangle(-150,-316.8,300,466.8), new cjs.Rectangle(-150,-311.7,300,461.7), new cjs.Rectangle(-150,-306.4,300,456.4), new cjs.Rectangle(-150,-301,300,451), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-12,-12,24,24);
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
p.nominalBounds = rect = new cjs.Rectangle(-32,-32,40,40);
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


(lib.GravityBigExplosionSecondMC = function(mode,startPosition,loop) {
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
				var particle_mc = new lib.ParticleBigGravityExplosionSecondMC();
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
	this.body_mc = new lib.gravity_big_explosion_second_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
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
p.nominalBounds = rect = new cjs.Rectangle(-61.5,-38.4,123.1,76.9);
p.frameBounds = [rect];


(lib.prev_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_5_mc();
	this.instance.setTransform(0,0.7,0.875,0.875,0,0,180,0,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,141.4);
p.frameBounds = [rect];


(lib.prev_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_4_mc();
	this.instance.setTransform(0,0,0.875,0.875,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.2,-78.7,140,141);
p.frameBounds = [rect];


(lib.prev_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_3_mc();
	this.instance.setTransform(0,0,0.778,0.778,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.prev_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_2_mc();
	this.instance.setTransform(0,0,0.778,0.778,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
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
p.nominalBounds = rect = new cjs.Rectangle(-61.5,-38.4,123.1,76.9);
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


(lib.next_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_5_mc();
	this.instance.setTransform(0,0.7,0.875,0.875,0,0,0,0,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,141.4);
p.frameBounds = [rect];


(lib.next_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_4_mc();
	this.instance.setTransform(0,0,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.7,-78.7,140,141);
p.frameBounds = [rect];


(lib.next_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_3_mc();
	this.instance.setTransform(0,0,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.next_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_2_mc();
	this.instance.setTransform(0,0,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
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
p.nominalBounds = rect = new cjs.Rectangle(-405,-250,808,550);
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


(lib.dressupPanel_3_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_4_mc();
	this.next_mc.setTransform(140.1,190.3,1,1,0,0,0,0.1,0.3);

	this.prev_mc = new lib.prev_4_mc();
	this.prev_mc.setTransform(-140.1,190.3,1,1,0,0,0,-0.1,0.3);

	this.set_6 = new lib.set_0_mc();
	this.set_6.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_6},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_3_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-230,420,880);
p.frameBounds = [rect];


(lib.dressupPanel_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_4_mc();
	this.next_mc.setTransform(140.1,190.3,1,1,0,0,0,0.1,0.3);

	this.prev_mc = new lib.prev_4_mc();
	this.prev_mc.setTransform(-140.1,190.3,1,1,0,0,0,-0.1,0.3);

	this.set_5 = new lib.set_0_mc();
	this.set_5.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_5},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-230,420,880);
p.frameBounds = [rect];


(lib.dressupPanel_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(165.1,110.2,1,1,10,0,0,0.1,0.2);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-165,110.2,1,1,-10,0,0,-0.1,0.2);

	this.set_5 = new lib.set_0_mc();
	this.set_5.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_5},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-246,-295,492.1,945);
p.frameBounds = [rect];


(lib.dressupPanel_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(174.1,100.1,1,1,10,0,0,0.1,0.1);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-172,100.2,1,1,-10,0,0,-0.1,0.2);

	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_3},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-253,-295,508.1,945);
p.frameBounds = [rect];


(lib.dressupPanel_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(165.1,110.2,1,1,10,0,0,0.1,0.2);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-165,110.2,1,1,-10,0,0,-0.1,0.2);

	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_3},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-246,-295,492.1,945);
p.frameBounds = [rect];


(lib.dressupPanel_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_4_mc();
	this.next_mc.setTransform(140.1,190.3,1,1,0,0,0,0.1,0.3);

	this.prev_mc = new lib.prev_4_mc();
	this.prev_mc.setTransform(-140.1,190.3,1,1,0,0,0,-0.1,0.3);

	this.set_4 = new lib.set_0_mc();
	this.set_4.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_4},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-201.2,-265,402.5,915);
p.frameBounds = [rect];


(lib.dressupPanel_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_5_mc();
	this.next_mc.setTransform(130.1,180.2,1,1,0,0,0,0.1,0.2);

	this.prev_mc = new lib.prev_5_mc();
	this.prev_mc.setTransform(-130.1,180.3,1,1,0,0,0,-0.1,0.3);

	this.set_4 = new lib.set_0_mc();
	this.set_4.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_4},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-270,420,920);
p.frameBounds = [rect];


(lib.dressupPanel_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_4_mc();
	this.next_mc.setTransform(140.1,190.3,1,1,0,0,0,0.1,0.3);

	this.prev_mc = new lib.prev_4_mc();
	this.prev_mc.setTransform(-140.1,190.3,1,1,0,0,0,-0.1,0.3);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-230,420,880);
p.frameBounds = [rect];


(lib.dressupPanel_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_5_mc();
	this.next_mc.setTransform(130.1,180.2,1,1,0,0,0,0.1,0.2);

	this.prev_mc = new lib.prev_5_mc();
	this.prev_mc.setTransform(-130.1,180.3,1,1,0,0,0,-0.1,0.3);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-195,400,845);
p.frameBounds = [rect];


(lib.dressupPanel_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(175.1,100.1,1,1,10,0,0,0.1,0.1);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-172,100.2,1,1,-10,0,0,-0.1,0.2);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-253,-295,509.1,945);
p.frameBounds = [rect];


(lib.dressupPanel_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(165.1,110.2,1,1,10,0,0,0.1,0.2);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-165,110.2,1,1,-10,0,0,-0.1,0.2);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-246,-295,492.1,945);
p.frameBounds = [rect];


(lib.decor_shadow_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.gravity_big_explosion_comp = new lib.GravityBigExplosionSecondMC();
	this.gravity_big_explosion_comp.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.gravity_big_explosion_comp).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(382,282,36,36);
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


(lib.background_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(488,37,0.75,0.75);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(324,36,0.75,0.75);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(406,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_3 = new lib.background_6_img();
	this.instance_3.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(979,341,0.5,0.5);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(488,38,0.75,0.75);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(325,38,0.75,0.75);

	this.instance_3 = new lib.blinking_light_3_2_mc();
	this.instance_3.setTransform(406,28);

	this.instance_4 = new lib.blinking_light_3_2_mc();
	this.instance_4.setTransform(175,189,0.75,0.75);

	this.instance_5 = new lib.blinking_light_3_2_mc();
	this.instance_5.setTransform(846,350);

	this.instance_6 = new lib.blinking_light_3_2_mc();
	this.instance_6.setTransform(-95,181);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_7 = new lib.background_4_img();
	this.instance_7.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(485,38,0.75,0.75);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(326,42,0.75,0.75);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(406,23);

	this.instance_3 = new lib.blinking_light_3_2_mc();
	this.instance_3.setTransform(755,207);

	this.instance_4 = new lib.blinking_light_3_2_mc();
	this.instance_4.setTransform(171,189,0.75,0.75);

	this.instance_5 = new lib.blinking_light_3_2_mc();
	this.instance_5.setTransform(-93,182);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_6 = new lib.background_3_img();
	this.instance_6.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(89,216,0.75,0.75);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(734,217,0.75,0.75);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(1028,196);

	this.instance_3 = new lib.blinking_light_3_2_mc();
	this.instance_3.setTransform(-218,198);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_4 = new lib.background_1_img();
	this.instance_4.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":34,"end":59});

	// animation
	this.body_mc = new lib.white_flash_3_mc();
	this.body_mc.setTransform(410,300);
	this.body_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(14).to({_off:false},0).wait(46));

	// animation
	this.instance = new lib.curtain_1_mc();
	this.instance.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:0,alpha:0.012},0).to({alpha:1},13).wait(25).to({alpha:0.012},19).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,600,1600,600);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,0,1600,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-400,-1,1600,601), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(260,-1,300,451)];


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
p.nominalBounds = rect = new cjs.Rectangle(-19.2,-19.2,24,24);
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
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,654.8);
p.frameBounds = [rect];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":109,"end":159});

	// timeline functions:
	this.frame_34 = function() {
		try
		{
			app.addSoundFunc("air_sound", 0.1);
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
			app.addSoundFunc("air_sound", 0.1);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(35).call(this.frame_69).wait(45).call(this.frame_114).wait(46));

	// play_btn
	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(700,700);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).wait(84).to({scaleX:0.53,scaleY:0.53,y:650},0).to({scaleX:1,scaleY:1,y:450},13).to({y:500},7).wait(5).to({scaleX:0.84,scaleY:0.84},5).to({scaleX:1,scaleY:1},10).to({y:460},5).to({scaleX:0.53,scaleY:0.53,y:650},10).wait(21));

	// btn
	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(400.5,1050.5,0.75,0.75,0,0,0,0.7,0.7);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,920);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(400,820,0.727,0.727);
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.social_network_mc}]}).wait(160));

	// title
	this.instance = new lib.title_mc();
	this.instance.setTransform(350,750);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(64).to({scaleX:0.8,scaleY:0.8,y:700},0).to({scaleX:1,scaleY:1,y:450},13).to({y:490},7).wait(76));

	// decor
	this.instance_1 = new lib.fern_0_mc();
	this.instance_1.setTransform(80,605,0.8,0.8,0,0,180);

	this.instance_2 = new lib.fern_0_mc();
	this.instance_2.setTransform(800,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(160));

	// decor
	this.instance_3 = new lib.lower_shadow_mc();
	this.instance_3.setTransform(0,400);
	this.instance_3.alpha = 0.398;
	this.instance_3.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(160));

	// hero_1
	this.instance_4 = new lib.hero1_main_mc();
	this.instance_4.setTransform(-800,330);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({x:680},25).to({x:550},15).wait(96));

	// hero_2
	this.instance_5 = new lib.hero2_main_mc();
	this.instance_5.setTransform(1600,340);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({x:300},25).to({x:430},15).wait(96));

	// decor
	this.bubble_comp = new lib.bubble_1_2_mc();
	this.bubble_comp.setTransform(-201,-1,1,1,0,0,0,-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(160));

	// bg
	this.instance_6 = new lib.background_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1132,-280.8,3030.5,1375.9);
p.frameBounds = [rect, rect=new cjs.Rectangle(-1132,-90,3030.5,1185), rect, rect, new cjs.Rectangle(-1132,-280.8,3030.5,1375.9), rect=new cjs.Rectangle(-1132,-90,3030.5,1185), rect, rect, new cjs.Rectangle(-1132,-280.8,3030.5,1375.9), rect=new cjs.Rectangle(-1132,-90,3030.5,1185), rect, rect, new cjs.Rectangle(-1132,-280.8,3030.5,1375.9), rect=new cjs.Rectangle(-1132,-90,3030.5,1185), rect, rect, new cjs.Rectangle(-1132,-280.8,3030.5,1375.9), rect=new cjs.Rectangle(-1132,-90,3030.5,1185), rect, rect, new cjs.Rectangle(-1132,-280.8,3030.5,1375.9), rect=new cjs.Rectangle(-1132,-90,3030.5,1185), rect, rect, new cjs.Rectangle(-1132,-280.8,3030.5,1375.9), new cjs.Rectangle(-1072.8,-90,2919.3,1185), new cjs.Rectangle(-1013.6,-90,2808.1,1185), new cjs.Rectangle(-954.4,-90,2696.9,1185), new cjs.Rectangle(-895.2,-280.8,2585.7,1375.9), new cjs.Rectangle(-836,-90,2474.5,1185), new cjs.Rectangle(-776.8,-90,2363.3,1185), new cjs.Rectangle(-717.6,-90,2252.1,1185), new cjs.Rectangle(-658.4,-280.8,2140.9,1375.9), new cjs.Rectangle(-599.2,-90,2029.7,1185), new cjs.Rectangle(-540,-90,1918.5,1185), new cjs.Rectangle(-480.8,-90,1807.3,1185), new cjs.Rectangle(-421.6,-280.8,1696.1,1375.9), new cjs.Rectangle(-400,-90,1622.5,1185), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect, new cjs.Rectangle(-400,-280.8,1600,1375.9), rect=new cjs.Rectangle(-400,-90,1600,1185), rect, rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1261.9);
p.frameBounds = [rect];


(lib.quest_3_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":249});

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
	this.frame_74 = function() {
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
	this.frame_124 = function() {
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
	this.frame_237 = function() {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(70).call(this.frame_74).wait(50).call(this.frame_124).wait(113).call(this.frame_237).wait(13));

	// decor
	this.instance = new lib.forward_mc();
	this.instance.setTransform(700.1,650,0.526,0.526,0,0,0,0.1,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(234).to({_off:false},0).to({regX:0,scaleX:0.95,scaleY:0.95,x:700,y:450},8).to({scaleX:0.84,scaleY:0.84,y:500},7).wait(1));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(560,700,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(34).to({scaleX:0.53,scaleY:0.53,y:650},0).to({scaleX:0.95,scaleY:0.95,y:480},8).to({scaleX:0.84,scaleY:0.84,y:520},7).wait(10).to({scaleX:0.68,scaleY:0.68},5).to({scaleX:0.84,scaleY:0.84},10).to({y:480},5).to({scaleX:0.53,scaleY:0.53,y:650},10).wait(161));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_3_6_mc();
	this.dressupPanel_mc.setTransform(1450,290);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(4).to({x:460},20).to({x:560},10).wait(45).to({x:460},10).to({x:1450},20).wait(141));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(380,350);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(109).to({x:590},20).wait(121));

	// decor
	this.instance_1 = new lib.decor_shadow_1_mc();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(129).to({_off:false},0).wait(121));

	// shadow
	this.instance_2 = new lib.shadow_dressup_mc();
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(109).to({_off:false},0).to({alpha:1},20).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(68.6,10.8,1591.5,929.3);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(68.6,10.8,1542,929.3), new cjs.Rectangle(68.6,10.8,1492.5,929.3), new cjs.Rectangle(68.6,10.8,1443,929.3), new cjs.Rectangle(68.6,10.8,1393.5,929.3), new cjs.Rectangle(68.6,10.8,1344,929.3), new cjs.Rectangle(68.6,10.8,1294.5,929.3), new cjs.Rectangle(68.6,10.8,1245,929.3), new cjs.Rectangle(68.6,10.8,1195.5,929.3), new cjs.Rectangle(68.6,10.8,1146,929.3), new cjs.Rectangle(68.6,10.8,1096.5,929.3), new cjs.Rectangle(68.6,10.8,1047,929.3), new cjs.Rectangle(68.6,10.8,997.5,929.3), new cjs.Rectangle(68.6,10.8,948,929.3), new cjs.Rectangle(68.6,10.8,898.5,929.3), new cjs.Rectangle(68.6,10.8,849,929.3), new cjs.Rectangle(68.6,10.8,799.5,929.3), new cjs.Rectangle(68.6,10.8,750,929.3), new cjs.Rectangle(68.6,10.8,700.5,929.3), new cjs.Rectangle(68.6,10.8,651,929.3), new cjs.Rectangle(68.6,10.8,610,929.3), new cjs.Rectangle(68.6,10.8,611.5,929.3), new cjs.Rectangle(68.6,10.8,621.5,929.3), new cjs.Rectangle(68.6,10.8,631.5,929.3), new cjs.Rectangle(68.6,10.8,641.5,929.3), new cjs.Rectangle(68.6,10.8,651.5,929.3), new cjs.Rectangle(68.6,10.8,661.5,929.3), new cjs.Rectangle(68.6,10.8,671.5,929.3), new cjs.Rectangle(68.6,10.8,681.5,929.3), new cjs.Rectangle(68.6,10.8,691.5,929.3), rect=new cjs.Rectangle(68.6,10.8,701.5,929.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(68.6,10.8,691.5,929.3), new cjs.Rectangle(68.6,10.8,681.5,929.3), new cjs.Rectangle(68.6,10.8,671.5,929.3), new cjs.Rectangle(68.6,10.8,661.5,929.3), new cjs.Rectangle(68.6,10.8,651.5,929.3), new cjs.Rectangle(68.6,10.8,641.5,929.3), new cjs.Rectangle(68.6,10.8,631.5,929.3), new cjs.Rectangle(68.6,10.8,621.5,929.3), new cjs.Rectangle(68.6,10.8,611.5,929.3), new cjs.Rectangle(68.6,10.8,610,929.3), new cjs.Rectangle(68.6,10.8,651,929.3), new cjs.Rectangle(68.6,10.8,700.5,929.3), new cjs.Rectangle(68.6,10.8,750,929.3), new cjs.Rectangle(68.6,10.8,799.5,929.3), new cjs.Rectangle(68.6,10.8,849,929.3), new cjs.Rectangle(68.6,10.8,898.5,929.3), new cjs.Rectangle(68.6,10.8,948,929.3), new cjs.Rectangle(68.6,10.8,997.5,929.3), new cjs.Rectangle(68.6,10.8,1047,929.3), new cjs.Rectangle(68.6,10.8,1096.5,929.3), new cjs.Rectangle(68.6,10.8,1146,929.3), new cjs.Rectangle(68.6,10.8,1195.5,929.3), new cjs.Rectangle(68.6,10.8,1245,929.3), new cjs.Rectangle(68.6,10.8,1294.5,929.3), new cjs.Rectangle(68.6,10.8,1344,929.3), new cjs.Rectangle(68.6,10.8,1393.5,929.3), new cjs.Rectangle(68.6,10.8,1443,929.3), new cjs.Rectangle(68.6,10.8,1492.5,929.3), new cjs.Rectangle(68.6,10.8,1542,929.3), rect=new cjs.Rectangle(-410,-10,2070,950), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":144});

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
	this.frame_74 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(70).call(this.frame_74).wait(71));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(560,700,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(34).to({scaleX:0.53,scaleY:0.53},0).to({scaleX:0.95,scaleY:0.95,y:480},8).to({scaleX:0.84,scaleY:0.84,y:520},7).wait(10).to({scaleX:0.68,scaleY:0.68},5).to({scaleX:0.84,scaleY:0.84},10).to({y:480},5).to({scaleX:0.53,scaleY:0.53,y:650},10).wait(56));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_6_mc();
	this.dressupPanel_mc.setTransform(1450,290);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(4).to({x:450},20).to({x:560},10).wait(45).to({x:460},10).to({x:1450},20).wait(36));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(380,350);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(145));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(68.6,10.8,1591.5,929.3);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(68.6,10.8,1541.5,929.3), new cjs.Rectangle(68.6,10.8,1491.5,929.3), new cjs.Rectangle(68.6,10.8,1441.5,929.3), new cjs.Rectangle(68.6,10.8,1391.5,929.3), new cjs.Rectangle(68.6,10.8,1341.5,929.3), new cjs.Rectangle(68.6,10.8,1291.5,929.3), new cjs.Rectangle(68.6,10.8,1241.5,929.3), new cjs.Rectangle(68.6,10.8,1191.5,929.3), new cjs.Rectangle(68.6,10.8,1141.5,929.3), new cjs.Rectangle(68.6,10.8,1091.5,929.3), new cjs.Rectangle(68.6,10.8,1041.5,929.3), new cjs.Rectangle(68.6,10.8,991.5,929.3), new cjs.Rectangle(68.6,10.8,941.5,929.3), new cjs.Rectangle(68.6,10.8,891.5,929.3), new cjs.Rectangle(68.6,10.8,841.5,929.3), new cjs.Rectangle(68.6,10.8,791.5,929.3), new cjs.Rectangle(68.6,10.8,741.5,929.3), new cjs.Rectangle(68.6,10.8,691.5,929.3), new cjs.Rectangle(68.6,10.8,641.5,929.3), rect=new cjs.Rectangle(68.6,10.8,610,929.3), rect, new cjs.Rectangle(68.6,10.8,613.5,929.3), new cjs.Rectangle(68.6,10.8,624.5,929.3), new cjs.Rectangle(68.6,10.8,635.5,929.3), new cjs.Rectangle(68.6,10.8,646.5,929.3), new cjs.Rectangle(68.6,10.8,657.5,929.3), new cjs.Rectangle(68.6,10.8,668.5,929.3), new cjs.Rectangle(68.6,10.8,679.5,929.3), new cjs.Rectangle(68.6,10.8,690.5,929.3), rect=new cjs.Rectangle(68.6,10.8,701.5,929.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(68.6,10.8,691.5,929.3), new cjs.Rectangle(68.6,10.8,681.5,929.3), new cjs.Rectangle(68.6,10.8,671.5,929.3), new cjs.Rectangle(68.6,10.8,661.5,929.3), new cjs.Rectangle(68.6,10.8,651.5,929.3), new cjs.Rectangle(68.6,10.8,641.5,929.3), new cjs.Rectangle(68.6,10.8,631.5,929.3), new cjs.Rectangle(68.6,10.8,621.5,929.3), new cjs.Rectangle(68.6,10.8,611.5,929.3), new cjs.Rectangle(68.6,10.8,610,929.3), new cjs.Rectangle(68.6,10.8,651,929.3), new cjs.Rectangle(68.6,10.8,700.5,929.3), new cjs.Rectangle(68.6,10.8,750,929.3), new cjs.Rectangle(68.6,10.8,799.5,929.3), new cjs.Rectangle(68.6,10.8,849,929.3), new cjs.Rectangle(68.6,10.8,898.5,929.3), new cjs.Rectangle(68.6,10.8,948,929.3), new cjs.Rectangle(68.6,10.8,997.5,929.3), new cjs.Rectangle(68.6,10.8,1047,929.3), new cjs.Rectangle(68.6,10.8,1096.5,929.3), new cjs.Rectangle(68.6,10.8,1146,929.3), new cjs.Rectangle(68.6,10.8,1195.5,929.3), new cjs.Rectangle(68.6,10.8,1245,929.3), new cjs.Rectangle(68.6,10.8,1294.5,929.3), new cjs.Rectangle(68.6,10.8,1344,929.3), new cjs.Rectangle(68.6,10.8,1393.5,929.3), new cjs.Rectangle(68.6,10.8,1443,929.3), new cjs.Rectangle(68.6,10.8,1492.5,929.3), new cjs.Rectangle(68.6,10.8,1542,929.3), rect=new cjs.Rectangle(68.6,10.8,1591.5,929.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":249});

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
	this.frame_74 = function() {
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
	this.frame_124 = function() {
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
	this.frame_237 = function() {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(70).call(this.frame_74).wait(50).call(this.frame_124).wait(113).call(this.frame_237).wait(13));

	// decor
	this.instance = new lib.forward_mc();
	this.instance.setTransform(700.1,650,0.526,0.526,0,0,0,0.1,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(234).to({_off:false},0).to({regX:0,scaleX:0.95,scaleY:0.95,x:700,y:450},8).to({scaleX:0.84,scaleY:0.84,y:500},7).wait(1));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(560,700,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(34).to({scaleX:0.53,scaleY:0.53,y:650},0).to({scaleX:0.95,scaleY:0.95,y:480},8).to({scaleX:0.84,scaleY:0.84,y:520},7).wait(10).to({scaleX:0.68,scaleY:0.68},5).to({scaleX:0.84,scaleY:0.84},10).to({y:480},5).to({scaleX:0.53,scaleY:0.53,y:650},10).wait(161));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_5_mc();
	this.dressupPanel_mc.setTransform(1500,290);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(4).to({x:450},20).to({x:560},10).wait(45).to({x:460},10).to({x:1500},20).wait(141));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(240,350);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(109).to({x:410},20).wait(121));

	// decor
	this.instance_1 = new lib.decor_shadow_2_mc();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(129).to({_off:false},0).wait(121));

	// shadow
	this.instance_2 = new lib.shadow_dressup_mc();
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(109).to({_off:false},0).to({alpha:1},20).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-5,1838.1,945);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-92,-5,1785.6,945), new cjs.Rectangle(-92,-5,1733.1,945), new cjs.Rectangle(-92,-5,1680.6,945), new cjs.Rectangle(-92,-5,1628.1,945), new cjs.Rectangle(-92,-5,1575.6,945), new cjs.Rectangle(-92,-5,1523.1,945), new cjs.Rectangle(-92,-5,1470.6,945), new cjs.Rectangle(-92,-5,1418.1,945), new cjs.Rectangle(-92,-5,1365.6,945), new cjs.Rectangle(-92,-5,1313.1,945), new cjs.Rectangle(-92,-5,1260.6,945), new cjs.Rectangle(-92,-5,1208.1,945), new cjs.Rectangle(-92,-5,1155.6,945), new cjs.Rectangle(-92,-5,1103.1,945), new cjs.Rectangle(-92,-5,1050.6,945), new cjs.Rectangle(-92,-5,998.1,945), new cjs.Rectangle(-92,-5,945.6,945), new cjs.Rectangle(-92,-5,893.1,945), new cjs.Rectangle(-92,-5,840.6,945), new cjs.Rectangle(-92,-5,788.1,945), new cjs.Rectangle(-92,-5,799.1,945), new cjs.Rectangle(-92,-5,810.1,945), new cjs.Rectangle(-92,-5,821.1,945), new cjs.Rectangle(-92,-5,832.1,945), new cjs.Rectangle(-92,-5,843.1,945), new cjs.Rectangle(-92,-5,854.1,945), new cjs.Rectangle(-92,-5,865.1,945), new cjs.Rectangle(-92,-5,876.1,945), new cjs.Rectangle(-92,-5,887.1,945), rect=new cjs.Rectangle(-92,-5,898.1,945), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-92,-5,888.1,945), new cjs.Rectangle(-92,-5,878.1,945), new cjs.Rectangle(-92,-5,868.1,945), new cjs.Rectangle(-92,-5,858.1,945), new cjs.Rectangle(-92,-5,848.1,945), new cjs.Rectangle(-92,-5,838.1,945), new cjs.Rectangle(-92,-5,828.1,945), new cjs.Rectangle(-92,-5,818.1,945), new cjs.Rectangle(-92,-5,808.1,945), new cjs.Rectangle(-92,-5,798.1,945), new cjs.Rectangle(-92,-5,850.1,945), new cjs.Rectangle(-92,-5,902.1,945), new cjs.Rectangle(-92,-5,954.1,945), new cjs.Rectangle(-92,-5,1006.1,945), new cjs.Rectangle(-92,-5,1058.1,945), new cjs.Rectangle(-92,-5,1110.1,945), new cjs.Rectangle(-92,-5,1162.1,945), new cjs.Rectangle(-92,-5,1214.1,945), new cjs.Rectangle(-92,-5,1266.1,945), new cjs.Rectangle(-92,-5,1318.1,945), new cjs.Rectangle(-92,-5,1370.1,945), new cjs.Rectangle(-92,-5,1422.1,945), new cjs.Rectangle(-92,-5,1474.1,945), new cjs.Rectangle(-92,-5,1526.1,945), new cjs.Rectangle(-92,-5,1578.1,945), new cjs.Rectangle(-92,-5,1630.1,945), new cjs.Rectangle(-92,-5,1682.1,945), new cjs.Rectangle(-92,-5,1734.1,945), new cjs.Rectangle(-92,-5,1786.1,945), rect=new cjs.Rectangle(-410,-10,2156.1,950), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":219});

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
	this.frame_54 = function() {
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
	this.frame_94 = function() {
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
	this.frame_207 = function() {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(50).call(this.frame_54).wait(40).call(this.frame_94).wait(113).call(this.frame_207).wait(13));

	// decor
	this.instance = new lib.forward_mc();
	this.instance.setTransform(700.1,650,0.526,0.526,0,0,0,0.1,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(204).to({_off:false},0).to({regX:0,scaleX:0.95,scaleY:0.95,x:700,y:450},8).to({scaleX:0.84,scaleY:0.84,y:500},7).wait(1));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(700,700,0.895,0.895);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(24).to({scaleX:0.53,scaleY:0.53,y:650},0).to({scaleX:0.9,scaleY:0.9,y:450},8).to({y:500},7).wait(10).to({regX:0.1,scaleX:0.74,scaleY:0.74,x:700.1},5).to({regX:0,scaleX:0.9,scaleY:0.9,x:700},10).to({y:450},5).to({scaleX:0.53,scaleY:0.53,y:650},10).wait(141));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_4_mc();
	this.dressupPanel_mc.setTransform(240,900);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(4).to({y:200},13).to({y:280},7).wait(35).to({y:220},7).to({y:900},13).wait(141));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(800,360);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(79).to({x:590},20).wait(121));

	// decor
	this.instance_1 = new lib.decor_shadow_1_mc();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(99).to({_off:false},0).wait(121));

	// shadow
	this.instance_2 = new lib.shadow_dressup_mc();
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({_off:false},0).to({alpha:1},20).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-13,20.8,1111.6,1529.3);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-13.1,20.8,1111.6,1475.4), new cjs.Rectangle(-13.1,20.8,1111.6,1421.6), new cjs.Rectangle(-13.1,20.8,1111.6,1367.7), new cjs.Rectangle(-13.1,20.8,1111.6,1313.9), new cjs.Rectangle(-13.1,20.8,1111.6,1260), new cjs.Rectangle(-13.1,20.8,1111.6,1206.2), new cjs.Rectangle(-13.1,20.8,1111.6,1152.3), new cjs.Rectangle(-13.1,20.8,1111.6,1098.5), new cjs.Rectangle(-13.1,20.8,1111.6,1044.7), new cjs.Rectangle(-13.1,20.8,1111.6,990.8), new cjs.Rectangle(-13.1,12.7,1111.6,945), new cjs.Rectangle(-13.1,-41.1,1111.6,945), new cjs.Rectangle(-13,-95,1111.6,945), new cjs.Rectangle(-13.1,-83.5,1111.6,945), new cjs.Rectangle(-13.1,-72.1,1111.6,945), new cjs.Rectangle(-13.1,-60.7,1111.6,945), new cjs.Rectangle(-13.1,-49.3,1111.6,945), new cjs.Rectangle(-13.1,-37.8,1111.6,945), new cjs.Rectangle(-13.1,-26.4,1111.6,945), rect=new cjs.Rectangle(-13,-15,1111.6,945), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-13.1,-23.5,1111.6,945), new cjs.Rectangle(-13.1,-32.1,1111.6,945), new cjs.Rectangle(-13.1,-40.7,1111.6,945), new cjs.Rectangle(-13.1,-49.3,1111.6,945), new cjs.Rectangle(-13.1,-57.8,1111.6,945), new cjs.Rectangle(-13.1,-66.4,1111.6,945), new cjs.Rectangle(-13,-75,1111.6,945), new cjs.Rectangle(-13.1,-22.7,1111.6,945), new cjs.Rectangle(-13.1,20.8,1111.6,953.9), new cjs.Rectangle(-13.1,20.8,1111.6,1006.2), new cjs.Rectangle(-13.1,20.8,1111.6,1058.5), new cjs.Rectangle(-13.1,20.8,1111.6,1110.8), new cjs.Rectangle(-13.1,20.8,1111.6,1163.1), new cjs.Rectangle(-13.1,20.8,1111.6,1215.4), new cjs.Rectangle(-13.1,20.8,1111.6,1267.7), new cjs.Rectangle(-13.1,20.8,1111.6,1320), new cjs.Rectangle(-13.1,20.8,1111.6,1372.3), new cjs.Rectangle(-13.1,20.8,1111.6,1424.7), new cjs.Rectangle(-13.1,20.8,1111.6,1477), rect=new cjs.Rectangle(-410,-10,1620,1560), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":219});

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
	this.frame_54 = function() {
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
	this.frame_94 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(50).call(this.frame_54).wait(40).call(this.frame_94).wait(126));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(100,700,0.895,0.895);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(24).to({scaleX:0.53,scaleY:0.53,y:650},0).to({scaleX:0.95,scaleY:0.95,y:450},8).to({scaleX:0.9,scaleY:0.9,y:500},7).wait(10).to({scaleX:0.74,scaleY:0.74},5).to({scaleX:0.9,scaleY:0.9},10).to({y:460},5).to({scaleX:0.53,scaleY:0.53,y:650},10).wait(141));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_3_mc();
	this.dressupPanel_mc.setTransform(560,900);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(4).to({y:200},13).to({y:290},7).wait(35).to({y:200},7).to({y:900},13).wait(141));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(230,350);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(79).to({x:400},20).wait(121));

	// decor
	this.instance = new lib.decor_shadow_2_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({_off:false},0).wait(121));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(79).to({_off:false},0).to({alpha:1},20).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,15.3,908.1,1534.8);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-102,15.3,908.1,1480.9), new cjs.Rectangle(-102,15.3,908.1,1427.1), new cjs.Rectangle(-102,15.3,908.1,1373.2), new cjs.Rectangle(-102,15.3,908.1,1319.4), new cjs.Rectangle(-102,15.3,908.1,1265.5), new cjs.Rectangle(-102,15.3,908.1,1211.7), new cjs.Rectangle(-102,15.3,908.1,1157.8), new cjs.Rectangle(-102,15.3,908.1,1104), new cjs.Rectangle(-102,15.3,908.1,1050.2), new cjs.Rectangle(-102,15.3,908.1,996.3), new cjs.Rectangle(-102,12.7,908.1,945), new cjs.Rectangle(-102,-41.1,908.1,945), new cjs.Rectangle(-102,-95,908.1,945), new cjs.Rectangle(-102,-82.1,908.1,945), new cjs.Rectangle(-102,-69.3,908.1,945), new cjs.Rectangle(-102,-56.4,908.1,945), new cjs.Rectangle(-102,-43.5,908.1,945), new cjs.Rectangle(-102,-30.7,908.1,945), new cjs.Rectangle(-102,-17.8,908.1,945), rect=new cjs.Rectangle(-102,-5,908.1,945), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-102,-17.8,908.1,945), new cjs.Rectangle(-102,-30.7,908.1,945), new cjs.Rectangle(-102,-43.5,908.1,945), new cjs.Rectangle(-102,-56.4,908.1,945), new cjs.Rectangle(-102,-69.3,908.1,945), new cjs.Rectangle(-102,-82.1,908.1,945), new cjs.Rectangle(-102,-95,908.1,945), new cjs.Rectangle(-102,-41.1,908.1,945), new cjs.Rectangle(-102,12.7,908.1,945), new cjs.Rectangle(-102,15.3,908.1,996.3), new cjs.Rectangle(-102,15.3,908.1,1050.2), new cjs.Rectangle(-102,15.3,908.1,1104), new cjs.Rectangle(-102,15.3,908.1,1157.8), new cjs.Rectangle(-102,15.3,908.1,1211.7), new cjs.Rectangle(-102,15.3,908.1,1265.5), new cjs.Rectangle(-102,15.3,908.1,1319.4), new cjs.Rectangle(-102,15.3,908.1,1373.2), new cjs.Rectangle(-102,15.3,908.1,1427.1), new cjs.Rectangle(-102,15.3,908.1,1480.9), rect=new cjs.Rectangle(-410,-10,1620,1560), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":99,"end":184});

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
	this.frame_49 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(25).call(this.frame_49).wait(65).call(this.frame_114).wait(71));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(560,520,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(78).to({scaleX:0.53,scaleY:0.53,y:650},0).to({scaleX:0.95,scaleY:0.95,y:480},8).to({scaleX:0.84,scaleY:0.84,y:520},7).wait(5).to({scaleX:0.68,scaleY:0.68},5).to({scaleX:0.84,scaleY:0.84},10).to({scaleX:0.95,scaleY:0.95,y:480},5).to({scaleX:0.53,scaleY:0.53,y:650},10).wait(56));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_6_mc();
	this.dressupPanel_mc.setTransform(560,290);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:1450},0).wait(48).to({x:450},20).to({x:560},10).wait(40).to({x:460},10).to({x:1450},20).wait(36));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(380,350);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:1600},0).wait(23).to({x:300},15).to({x:380},10).wait(136));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(68.6,10.8,692.7,929.3);
p.frameBounds = [rect, rect=new cjs.Rectangle(480,10.8,1418.5,929.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(480,10.8,1331.9,929.3), new cjs.Rectangle(480,10.8,1245.2,929.3), rect=new cjs.Rectangle(480,10.8,1171.3,929.3), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(421.9,10.8,1229.4,929.3), new cjs.Rectangle(335.2,10.8,1316.1,929.3), new cjs.Rectangle(248.6,10.8,1402.7,929.3), new cjs.Rectangle(161.9,10.8,1489.4,929.3), new cjs.Rectangle(75.2,10.8,1576.1,929.3), new cjs.Rectangle(-11.4,10.8,1662.7,929.3), new cjs.Rectangle(-3.4,10.8,1654.7,929.3), new cjs.Rectangle(4.6,10.8,1646.7,929.3), new cjs.Rectangle(12.6,10.8,1638.7,929.3), new cjs.Rectangle(20.6,10.8,1630.7,929.3), new cjs.Rectangle(28.6,10.8,1622.7,929.3), new cjs.Rectangle(36.6,10.8,1614.7,929.3), new cjs.Rectangle(44.6,10.8,1606.7,929.3), new cjs.Rectangle(52.6,10.8,1598.7,929.3), new cjs.Rectangle(60.6,10.8,1590.7,929.3), new cjs.Rectangle(68.6,10.8,1582.7,929.3), new cjs.Rectangle(68.6,10.8,1532.7,929.3), new cjs.Rectangle(68.6,10.8,1482.7,929.3), new cjs.Rectangle(68.6,10.8,1432.7,929.3), new cjs.Rectangle(68.6,10.8,1382.7,929.3), new cjs.Rectangle(68.6,10.8,1332.7,929.3), new cjs.Rectangle(68.6,10.8,1282.7,929.3), new cjs.Rectangle(68.6,10.8,1232.7,929.3), new cjs.Rectangle(68.6,10.8,1182.7,929.3), new cjs.Rectangle(68.6,10.8,1132.7,929.3), new cjs.Rectangle(68.6,10.8,1082.7,929.3), new cjs.Rectangle(68.6,10.8,1032.7,929.3), new cjs.Rectangle(68.6,10.8,982.7,929.3), new cjs.Rectangle(68.6,10.8,932.7,929.3), new cjs.Rectangle(68.6,10.8,882.7,929.3), new cjs.Rectangle(68.6,10.8,832.7,929.3), new cjs.Rectangle(68.6,10.8,782.7,929.3), new cjs.Rectangle(68.6,10.8,732.7,929.3), new cjs.Rectangle(68.6,10.8,682.7,929.3), new cjs.Rectangle(68.6,10.8,632.7,929.3), rect=new cjs.Rectangle(68.6,10.8,610,929.3), rect, rect, new cjs.Rectangle(68.6,10.8,615.7,929.3), new cjs.Rectangle(68.6,10.8,626.7,929.3), new cjs.Rectangle(68.6,10.8,637.7,929.3), new cjs.Rectangle(68.6,10.8,648.7,929.3), new cjs.Rectangle(68.6,10.8,659.7,929.3), new cjs.Rectangle(68.6,10.8,670.7,929.3), new cjs.Rectangle(68.6,10.8,681.7,929.3), rect=new cjs.Rectangle(68.6,10.8,692.7,929.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(68.6,10.8,682.7,929.3), new cjs.Rectangle(68.6,10.8,672.7,929.3), new cjs.Rectangle(68.6,10.8,662.7,929.3), new cjs.Rectangle(68.6,10.8,652.7,929.3), new cjs.Rectangle(68.6,10.8,642.7,929.3), new cjs.Rectangle(68.6,10.8,632.7,929.3), new cjs.Rectangle(68.6,10.8,622.7,929.3), new cjs.Rectangle(68.6,10.8,612.7,929.3), rect=new cjs.Rectangle(68.6,10.8,610,929.3), rect, new cjs.Rectangle(68.6,10.8,642.2,929.3), new cjs.Rectangle(68.6,10.8,691.7,929.3), new cjs.Rectangle(68.6,10.8,741.2,929.3), new cjs.Rectangle(68.6,10.8,790.7,929.3), new cjs.Rectangle(68.6,10.8,840.2,929.3), new cjs.Rectangle(68.6,10.8,889.7,929.3), new cjs.Rectangle(68.6,10.8,939.2,929.3), new cjs.Rectangle(68.6,10.8,988.7,929.3), new cjs.Rectangle(68.6,10.8,1038.2,929.3), new cjs.Rectangle(68.6,10.8,1087.7,929.3), new cjs.Rectangle(68.6,10.8,1137.2,929.3), new cjs.Rectangle(68.6,10.8,1186.7,929.3), new cjs.Rectangle(68.6,10.8,1236.2,929.3), new cjs.Rectangle(68.6,10.8,1285.7,929.3), new cjs.Rectangle(68.6,10.8,1335.2,929.3), new cjs.Rectangle(68.6,10.8,1384.7,929.3), new cjs.Rectangle(68.6,10.8,1434.2,929.3), new cjs.Rectangle(68.6,10.8,1483.7,929.3), new cjs.Rectangle(68.6,10.8,1533.2,929.3), rect=new cjs.Rectangle(68.6,10.8,1582.7,929.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":99,"end":169});

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
	this.frame_49 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(25).call(this.frame_49).wait(65).call(this.frame_114).wait(56));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(240,520,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(78).to({scaleX:0.53,scaleY:0.53,y:650},0).to({scaleX:0.95,scaleY:0.95,y:480},8).to({scaleX:0.84,scaleY:0.84,y:520},7).wait(5).to({scaleX:0.68,scaleY:0.68},5).to({scaleX:0.84,scaleY:0.84},10).to({y:480},5).to({scaleX:0.53,scaleY:0.53,y:650},10).wait(41));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_5_mc();
	this.dressupPanel_mc.setTransform(240,290);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-700},0).wait(48).to({x:350},20).to({x:240},10).wait(40).to({x:340},10).to({x:-700},20).wait(21));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(620,350);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:1600},0).wait(23).to({x:500},15).to({x:620},10).wait(100).to({x:240},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(30,15.3,922,924.8);
p.frameBounds = [rect, rect=new cjs.Rectangle(-910,15.3,2842,924.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-910,15.3,2768.7,924.8), new cjs.Rectangle(-910,15.3,2695.4,924.8), new cjs.Rectangle(-910,15.3,2622,924.8), new cjs.Rectangle(-910,15.3,2548.7,924.8), new cjs.Rectangle(-910,15.3,2475.4,924.8), new cjs.Rectangle(-910,15.3,2402,924.8), new cjs.Rectangle(-910,15.3,2328.7,924.8), new cjs.Rectangle(-910,15.3,2255.3,924.8), new cjs.Rectangle(-910,15.3,2182,924.8), new cjs.Rectangle(-910,15.3,2108.7,924.8), new cjs.Rectangle(-910,15.3,2035.4,924.8), new cjs.Rectangle(-910,15.3,1962,924.8), new cjs.Rectangle(-910,15.3,1888.7,924.8), new cjs.Rectangle(-910,15.3,1815.4,924.8), new cjs.Rectangle(-910,15.3,1742,924.8), new cjs.Rectangle(-910,15.3,1754,924.8), new cjs.Rectangle(-910,15.3,1766,924.8), new cjs.Rectangle(-910,15.3,1778,924.8), new cjs.Rectangle(-910,15.3,1790,924.8), new cjs.Rectangle(-910,15.3,1802,924.8), new cjs.Rectangle(-910,15.3,1814,924.8), new cjs.Rectangle(-910,15.3,1826,924.8), new cjs.Rectangle(-910,15.3,1838,924.8), new cjs.Rectangle(-910,15.3,1850,924.8), new cjs.Rectangle(-910,15.3,1862,924.8), new cjs.Rectangle(-857.5,15.3,1809.5,924.8), new cjs.Rectangle(-805,15.3,1757,924.8), new cjs.Rectangle(-752.5,15.3,1704.5,924.8), new cjs.Rectangle(-700,15.3,1652,924.8), new cjs.Rectangle(-647.5,15.3,1599.5,924.8), new cjs.Rectangle(-595,15.3,1547,924.8), new cjs.Rectangle(-542.5,15.3,1494.5,924.8), new cjs.Rectangle(-490,15.3,1442,924.8), new cjs.Rectangle(-437.5,15.3,1389.5,924.8), new cjs.Rectangle(-385,15.3,1337,924.8), new cjs.Rectangle(-332.5,15.3,1284.5,924.8), new cjs.Rectangle(-280,15.3,1232,924.8), new cjs.Rectangle(-227.5,15.3,1179.5,924.8), new cjs.Rectangle(-175,15.3,1127,924.8), new cjs.Rectangle(-122.5,15.3,1074.5,924.8), new cjs.Rectangle(-70,15.3,1022,924.8), new cjs.Rectangle(-17.5,15.3,969.5,924.8), new cjs.Rectangle(35,15.3,917,924.8), new cjs.Rectangle(87.5,15.3,864.5,924.8), new cjs.Rectangle(140,15.3,812,924.8), new cjs.Rectangle(129,15.3,823,924.8), new cjs.Rectangle(118,15.3,834,924.8), new cjs.Rectangle(107,15.3,845,924.8), new cjs.Rectangle(96,15.3,856,924.8), new cjs.Rectangle(85,15.3,867,924.8), new cjs.Rectangle(74,15.3,878,924.8), new cjs.Rectangle(63,15.3,889,924.8), new cjs.Rectangle(52,15.3,900,924.8), new cjs.Rectangle(41,15.3,911,924.8), rect=new cjs.Rectangle(30,15.3,922,924.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(40,15.3,912,924.8), new cjs.Rectangle(50,15.3,902,924.8), new cjs.Rectangle(60,15.3,892,924.8), new cjs.Rectangle(70,15.3,882,924.8), new cjs.Rectangle(80,15.3,872,924.8), new cjs.Rectangle(90,15.3,862,924.8), new cjs.Rectangle(100,15.3,852,924.8), new cjs.Rectangle(110,15.3,842,924.8), new cjs.Rectangle(120,15.3,832,924.8), new cjs.Rectangle(130,15.3,822,924.8), new cjs.Rectangle(78,15.3,874,924.8), new cjs.Rectangle(26,15.3,926,924.8), new cjs.Rectangle(-26,15.3,978,924.8), new cjs.Rectangle(-78,15.3,1030,924.8), new cjs.Rectangle(-130,15.3,1082,924.8), new cjs.Rectangle(-182,15.3,1134,924.8), new cjs.Rectangle(-234,15.3,1186,924.8), new cjs.Rectangle(-286,15.3,1238,924.8), new cjs.Rectangle(-338,15.3,1290,924.8), new cjs.Rectangle(-390,15.3,1342,924.8), new cjs.Rectangle(-442,15.3,1394,924.8), new cjs.Rectangle(-494,15.3,1446,924.8), new cjs.Rectangle(-546,15.3,1498,924.8), new cjs.Rectangle(-598,15.3,1550,924.8), new cjs.Rectangle(-650,15.3,1602,924.8), new cjs.Rectangle(-702,15.3,1654,924.8), new cjs.Rectangle(-754,15.3,1706,924.8), new cjs.Rectangle(-806,15.3,1758,924.8), new cjs.Rectangle(-858,15.3,1810,924.8), new cjs.Rectangle(-910,15.3,1862,924.8), new cjs.Rectangle(-910,15.3,1843,924.8), new cjs.Rectangle(-910,15.3,1824,924.8), new cjs.Rectangle(-910,15.3,1805,924.8), new cjs.Rectangle(-910,15.3,1786,924.8), new cjs.Rectangle(-910,15.3,1767,924.8), new cjs.Rectangle(-910,15.3,1748,924.8), new cjs.Rectangle(-910,15.3,1729,924.8), new cjs.Rectangle(-910,15.3,1710,924.8), new cjs.Rectangle(-910,15.3,1691,924.8), new cjs.Rectangle(-910,15.3,1672,924.8), new cjs.Rectangle(-910,15.3,1653,924.8), new cjs.Rectangle(-910,15.3,1634,924.8), new cjs.Rectangle(-910,15.3,1615,924.8), new cjs.Rectangle(-910,15.3,1596,924.8), new cjs.Rectangle(-910,15.3,1577,924.8), new cjs.Rectangle(-910,15.3,1558,924.8), new cjs.Rectangle(-910,15.3,1539,924.8), new cjs.Rectangle(-910,15.3,1520,924.8), new cjs.Rectangle(-910,15.3,1501,924.8), new cjs.Rectangle(-910,15.3,1482,924.8)];


(lib.quest_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":174});

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
	this.frame_49 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(25).call(this.frame_49).wait(45).call(this.frame_94).wait(81));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(240,520,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(68).to({scaleX:0.53,scaleY:0.53,y:650},0).to({scaleX:0.84,scaleY:0.84,y:480},8).to({y:520},7).wait(5).to({scaleX:0.68,scaleY:0.68},5).to({scaleX:0.84,scaleY:0.84},10).to({y:480},5).to({regX:0.1,scaleX:0.53,scaleY:0.53,y:650},10).wait(56));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_4_mc();
	this.dressupPanel_mc.setTransform(240,280);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:900},0).wait(48).to({y:200},13).to({y:280},7).wait(30).to({y:220},7).to({y:900},13).wait(56));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(780,360);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:1600},0).wait(23).to({x:650},15).to({x:780},10).wait(70).to({x:800},20).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(30,20.8,1048.5,909.3);
p.frameBounds = [rect, rect=new cjs.Rectangle(30,20.8,1868.5,1529.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(30,20.8,1805.2,1529.3), new cjs.Rectangle(30,20.8,1741.9,1529.3), new cjs.Rectangle(30,20.8,1678.5,1529.3), new cjs.Rectangle(30,20.8,1615.2,1529.3), new cjs.Rectangle(30,20.8,1551.9,1529.3), new cjs.Rectangle(30,20.8,1488.5,1529.3), new cjs.Rectangle(30,20.8,1425.2,1529.3), new cjs.Rectangle(30,20.8,1361.9,1529.3), new cjs.Rectangle(30,20.8,1298.5,1529.3), new cjs.Rectangle(30,20.8,1235.2,1529.3), new cjs.Rectangle(30,20.8,1171.9,1529.3), new cjs.Rectangle(30,20.8,1108.5,1529.3), new cjs.Rectangle(30,20.8,1045.2,1529.3), new cjs.Rectangle(30,20.8,981.9,1529.3), new cjs.Rectangle(30,20.8,918.5,1529.3), new cjs.Rectangle(30,20.8,931.5,1529.3), new cjs.Rectangle(30,20.8,944.5,1529.3), new cjs.Rectangle(30,20.8,957.5,1529.3), new cjs.Rectangle(30,20.8,970.5,1529.3), new cjs.Rectangle(30,20.8,983.5,1529.3), new cjs.Rectangle(30,20.8,996.5,1529.3), new cjs.Rectangle(30,20.8,1009.5,1529.3), new cjs.Rectangle(30,20.8,1022.5,1529.3), new cjs.Rectangle(30,20.8,1035.5,1529.3), new cjs.Rectangle(30,20.8,1048.5,1529.3), new cjs.Rectangle(30,20.8,1048.5,1475.4), new cjs.Rectangle(30,20.8,1048.5,1421.6), new cjs.Rectangle(30,20.8,1048.5,1367.7), new cjs.Rectangle(30,20.8,1048.5,1313.9), new cjs.Rectangle(30,20.8,1048.5,1260), new cjs.Rectangle(30,20.8,1048.5,1206.2), new cjs.Rectangle(30,20.8,1048.5,1152.3), new cjs.Rectangle(30,20.8,1048.5,1098.5), new cjs.Rectangle(30,20.8,1048.5,1044.7), new cjs.Rectangle(30,20.8,1048.5,990.8), new cjs.Rectangle(30,20.8,1048.5,937), new cjs.Rectangle(30,20.8,1048.5,883.1), new cjs.Rectangle(30,-30,1048.5,880), new cjs.Rectangle(30,-18.5,1048.5,880), new cjs.Rectangle(30,-7.1,1048.5,880), new cjs.Rectangle(30,4.3,1048.5,880), new cjs.Rectangle(30,15.7,1048.5,880), new cjs.Rectangle(30,20.8,1048.5,886.4), new cjs.Rectangle(30,20.8,1048.5,897.8), rect=new cjs.Rectangle(30,20.8,1048.5,909.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(30,20.8,1048.5,900.7), new cjs.Rectangle(30,20.8,1048.5,892.1), new cjs.Rectangle(30,20.8,1048.5,883.6), new cjs.Rectangle(30,15.7,1048.5,880), new cjs.Rectangle(30,7.2,1048.5,880), new cjs.Rectangle(30,-1.4,1048.5,880), new cjs.Rectangle(30,-10,1048.5,880), new cjs.Rectangle(30,20.8,1048.5,901.6), new cjs.Rectangle(30,20.8,1048.5,953.9), new cjs.Rectangle(30,20.8,1048.5,1006.2), new cjs.Rectangle(30,20.8,1048.5,1058.5), new cjs.Rectangle(30,20.8,1048.5,1110.8), new cjs.Rectangle(30,20.8,1048.5,1163.1), new cjs.Rectangle(30,20.8,1048.5,1215.4), new cjs.Rectangle(30,20.8,1048.5,1267.7), new cjs.Rectangle(30,20.8,1048.5,1320), new cjs.Rectangle(30,20.8,1048.5,1372.3), new cjs.Rectangle(30,20.8,1048.5,1424.7), new cjs.Rectangle(30,20.8,1048.5,1477), new cjs.Rectangle(30,20.8,1048.5,1529.3), new cjs.Rectangle(30,20.8,1049.5,1529.3), new cjs.Rectangle(30,20.8,1050.5,1529.3), new cjs.Rectangle(30,20.8,1051.5,1529.3), new cjs.Rectangle(30,20.8,1052.5,1529.3), new cjs.Rectangle(30,20.8,1053.5,1529.3), new cjs.Rectangle(30,20.8,1054.5,1529.3), new cjs.Rectangle(30,20.8,1055.5,1529.3), new cjs.Rectangle(30,20.8,1056.5,1529.3), new cjs.Rectangle(30,20.8,1057.5,1529.3), new cjs.Rectangle(30,20.8,1058.5,1529.3), new cjs.Rectangle(30,20.8,1059.5,1529.3), new cjs.Rectangle(30,20.8,1060.5,1529.3), new cjs.Rectangle(30,20.8,1061.5,1529.3), new cjs.Rectangle(30,20.8,1062.5,1529.3), new cjs.Rectangle(30,20.8,1063.5,1529.3), new cjs.Rectangle(30,20.8,1064.5,1529.3), new cjs.Rectangle(30,20.8,1065.5,1529.3), new cjs.Rectangle(30,20.8,1066.5,1529.3), new cjs.Rectangle(30,20.8,1067.5,1529.3), rect=new cjs.Rectangle(30,20.8,1068.5,1529.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":159});

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
	this.frame_49 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(25).call(this.frame_49).wait(45).call(this.frame_94).wait(66));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(560,520,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(68).to({scaleX:0.53,scaleY:0.53},0).to({scaleX:0.84,scaleY:0.84,y:470},8).to({y:520},7).wait(5).to({scaleX:0.68,scaleY:0.68},5).to({scaleX:0.84,scaleY:0.84},10).to({y:480},5).to({scaleX:0.53,scaleY:0.53,y:650},10).wait(41));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_3_mc();
	this.dressupPanel_mc.setTransform(560,290);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:850},0).wait(48).to({y:200},13).to({y:290},7).wait(30).to({y:220},7).to({y:850},13).wait(41));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(230,350);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:-800},0).wait(23).to({x:360},15).to({x:230},10).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,15.3,862,924.8);
p.frameBounds = [rect, rect=new cjs.Rectangle(-1132,15.3,1892,1484.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1054.6,15.3,1814.7,1484.8), new cjs.Rectangle(-977.3,15.3,1737.4,1484.8), new cjs.Rectangle(-900,15.3,1660,1484.8), new cjs.Rectangle(-822.7,15.3,1582.7,1484.8), new cjs.Rectangle(-745.3,15.3,1505.4,1484.8), new cjs.Rectangle(-668,15.3,1428,1484.8), new cjs.Rectangle(-590.7,15.3,1350.7,1484.8), new cjs.Rectangle(-513.3,15.3,1273.3,1484.8), new cjs.Rectangle(-436,15.3,1196,1484.8), new cjs.Rectangle(-358.6,15.3,1118.7,1484.8), new cjs.Rectangle(-281.3,15.3,1041.4,1484.8), new cjs.Rectangle(-204,15.3,964,1484.8), new cjs.Rectangle(-126.6,15.3,886.7,1484.8), new cjs.Rectangle(-49.3,15.3,809.4,1484.8), new cjs.Rectangle(28,15.3,732,1484.8), new cjs.Rectangle(15,15.3,745,1484.8), new cjs.Rectangle(2,15.3,758,1484.8), new cjs.Rectangle(-11,15.3,771,1484.8), new cjs.Rectangle(-24,15.3,784,1484.8), new cjs.Rectangle(-37,15.3,797,1484.8), new cjs.Rectangle(-50,15.3,810,1484.8), new cjs.Rectangle(-63,15.3,823,1484.8), new cjs.Rectangle(-76,15.3,836,1484.8), new cjs.Rectangle(-89,15.3,849,1484.8), new cjs.Rectangle(-102,15.3,862,1484.8), new cjs.Rectangle(-102,15.3,862,1434.8), new cjs.Rectangle(-102,15.3,862,1384.8), new cjs.Rectangle(-102,15.3,862,1334.8), new cjs.Rectangle(-102,15.3,862,1284.8), new cjs.Rectangle(-102,15.3,862,1234.8), new cjs.Rectangle(-102,15.3,862,1184.8), new cjs.Rectangle(-102,15.3,862,1134.8), new cjs.Rectangle(-102,15.3,862,1084.8), new cjs.Rectangle(-102,15.3,862,1034.8), new cjs.Rectangle(-102,15.3,862,984.8), new cjs.Rectangle(-102,15.3,862,934.8), new cjs.Rectangle(-102,15.3,862,884.8), new cjs.Rectangle(-102,5,862,845), new cjs.Rectangle(-102,15.3,862,847.6), new cjs.Rectangle(-102,15.3,862,860.5), new cjs.Rectangle(-102,15.3,862,873.3), new cjs.Rectangle(-102,15.3,862,886.2), new cjs.Rectangle(-102,15.3,862,899.1), new cjs.Rectangle(-102,15.3,862,911.9), rect=new cjs.Rectangle(-102,15.3,862,924.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-102,15.3,862,914.8), new cjs.Rectangle(-102,15.3,862,904.8), new cjs.Rectangle(-102,15.3,862,894.8), new cjs.Rectangle(-102,15.3,862,884.8), new cjs.Rectangle(-102,15.3,862,874.8), new cjs.Rectangle(-102,15.3,862,864.8), new cjs.Rectangle(-102,15.3,862,854.8), new cjs.Rectangle(-102,15.3,862,903.2), new cjs.Rectangle(-102,15.3,862,951.7), new cjs.Rectangle(-102,15.3,862,1000.2), new cjs.Rectangle(-102,15.3,862,1048.6), new cjs.Rectangle(-102,15.3,862,1097.1), new cjs.Rectangle(-102,15.3,862,1145.5), new cjs.Rectangle(-102,15.3,862,1194), new cjs.Rectangle(-102,15.3,862,1242.5), new cjs.Rectangle(-102,15.3,862,1290.9), new cjs.Rectangle(-102,15.3,862,1339.4), new cjs.Rectangle(-102,15.3,862,1387.9), new cjs.Rectangle(-102,15.3,862,1436.3), rect=new cjs.Rectangle(-102,15.3,862,1484.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":259});

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
	this.frame_49 = function() {
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
	this.frame_247 = function() {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(25).call(this.frame_49).wait(45).call(this.frame_94).wait(40).call(this.frame_134).wait(113).call(this.frame_247).wait(13));

	// decor
	this.instance = new lib.forward_mc();
	this.instance.setTransform(700.1,650,0.526,0.526,0,0,0,0.1,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(244).to({_off:false},0).to({regX:0,scaleX:0.95,scaleY:0.95,x:700,y:450},8).to({scaleX:0.84,scaleY:0.84,y:500},7).wait(1));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(100,500,0.895,0.895);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(68).to({regX:0.1,scaleX:0.53,scaleY:0.53,x:100.1,y:650},0).to({regX:0,scaleX:0.9,scaleY:0.9,x:100,y:450},8).to({y:500},7).wait(5).to({regX:0.1,regY:0.1,scaleX:0.74,scaleY:0.74,x:100.1,y:500.1},5).to({regX:0,regY:0,scaleX:0.9,scaleY:0.9,x:100,y:500},10).to({y:460},5).to({regX:0.1,scaleX:0.53,scaleY:0.53,x:100.1,y:650},10).wait(141));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_2_mc();
	this.dressupPanel_mc.setTransform(560,290);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:900},0).wait(48).to({y:200},13).to({y:290},7).wait(30).to({y:200},7).to({y:900},13).wait(141));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(0,400);
	this.instance_1.alpha = 0.398;
	this.instance_1.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(260));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(390,360);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:1600},0).wait(23).to({x:280},15).to({x:390},10).wait(70).to({x:590},20).wait(121));

	// decor
	this.instance_2 = new lib.decor_shadow_1_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(139).to({_off:false},0).wait(121));

	// shadow
	this.instance_3 = new lib.shadow_dressup_mc();
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(119).to({_off:false},0).to({alpha:1},20).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-5,1600,945);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,20.8,2298.5,1529.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,20.8,2210.5,1529.3), new cjs.Rectangle(-400,20.8,2122.5,1529.3), new cjs.Rectangle(-400,20.8,2034.5,1529.3), new cjs.Rectangle(-400,20.8,1946.5,1529.3), new cjs.Rectangle(-400,20.8,1858.5,1529.3), new cjs.Rectangle(-400,20.8,1770.5,1529.3), new cjs.Rectangle(-400,20.8,1682.5,1529.3), rect=new cjs.Rectangle(-400,20.8,1600,1529.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,20.8,1600,1475.4), new cjs.Rectangle(-400,20.8,1600,1421.6), new cjs.Rectangle(-400,20.8,1600,1367.7), new cjs.Rectangle(-400,20.8,1600,1313.9), new cjs.Rectangle(-400,20.8,1600,1260), new cjs.Rectangle(-400,20.8,1600,1206.2), new cjs.Rectangle(-400,20.8,1600,1152.3), new cjs.Rectangle(-400,20.8,1600,1098.5), new cjs.Rectangle(-400,20.8,1600,1044.7), new cjs.Rectangle(-400,20.8,1600,990.8), new cjs.Rectangle(-400,12.7,1600,945), new cjs.Rectangle(-400,-41.1,1600,945), new cjs.Rectangle(-400,-95,1600,945), new cjs.Rectangle(-400,-82.1,1600,945), new cjs.Rectangle(-400,-69.3,1600,945), new cjs.Rectangle(-400,-56.4,1600,945), new cjs.Rectangle(-400,-43.5,1600,945), new cjs.Rectangle(-400,-30.7,1600,945), new cjs.Rectangle(-400,-17.8,1600,945), rect=new cjs.Rectangle(-400,-5,1600,945), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-17.8,1600,945), new cjs.Rectangle(-400,-30.7,1600,945), new cjs.Rectangle(-400,-43.5,1600,945), new cjs.Rectangle(-400,-56.4,1600,945), new cjs.Rectangle(-400,-69.3,1600,945), new cjs.Rectangle(-400,-82.1,1600,945), new cjs.Rectangle(-400,-95,1600,945), new cjs.Rectangle(-400,-41.1,1600,945), new cjs.Rectangle(-400,12.7,1600,945), new cjs.Rectangle(-400,20.8,1600,990.8), new cjs.Rectangle(-400,20.8,1600,1044.7), new cjs.Rectangle(-400,20.8,1600,1098.5), new cjs.Rectangle(-400,20.8,1600,1152.3), new cjs.Rectangle(-400,20.8,1600,1206.2), new cjs.Rectangle(-400,20.8,1600,1260), new cjs.Rectangle(-400,20.8,1600,1313.9), new cjs.Rectangle(-400,20.8,1600,1367.7), new cjs.Rectangle(-400,20.8,1600,1421.6), new cjs.Rectangle(-400,20.8,1600,1475.4), rect=new cjs.Rectangle(-410,-10,1620,1560), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":259});

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
	this.frame_49 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(25).call(this.frame_49).wait(45).call(this.frame_94).wait(40).call(this.frame_134).wait(126));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(700,500,0.895,0.895);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(68).to({regX:0.1,scaleX:0.53,scaleY:0.53,x:700.1,y:650},0).to({regX:0,scaleX:0.9,scaleY:0.9,x:700,y:450},8).to({y:500},7).wait(5).to({regX:0.1,regY:0.1,scaleX:0.74,scaleY:0.74,x:700.1,y:500.1},5).to({regX:0,regY:0,scaleX:0.9,scaleY:0.9,x:700,y:500},10).to({y:460},5).to({regX:0.1,scaleX:0.53,scaleY:0.53,x:700.1,y:650},10).wait(141));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_1_mc();
	this.dressupPanel_mc.setTransform(240,290);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:900},0).wait(48).to({y:200},13).to({y:290},7).wait(30).to({y:200},7).to({y:900},13).wait(141));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(0,400);
	this.instance.alpha = 0.398;
	this.instance.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(260));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(590,350);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:1600},0).wait(23).to({x:450},15).to({x:590},10).wait(70).to({x:410},20).wait(121));

	// decor
	this.instance_1 = new lib.decor_shadow_2_mc();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(139).to({_off:false},0).wait(121));

	// shadow
	this.instance_2 = new lib.shadow_dressup_mc();
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(119).to({_off:false},0).to({alpha:1},20).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-5,1600,945);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,15.3,2332,1534.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,15.3,2255.4,1534.8), new cjs.Rectangle(-400,15.3,2178.7,1534.8), new cjs.Rectangle(-400,15.3,2102,1534.8), new cjs.Rectangle(-400,15.3,2025.4,1534.8), new cjs.Rectangle(-400,15.3,1948.7,1534.8), new cjs.Rectangle(-400,15.3,1872,1534.8), new cjs.Rectangle(-400,15.3,1795.4,1534.8), new cjs.Rectangle(-400,15.3,1718.7,1534.8), new cjs.Rectangle(-400,15.3,1642,1534.8), rect=new cjs.Rectangle(-400,15.3,1600,1534.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,15.3,1600,1480.9), new cjs.Rectangle(-400,15.3,1600,1427.1), new cjs.Rectangle(-400,15.3,1600,1373.2), new cjs.Rectangle(-400,15.3,1600,1319.4), new cjs.Rectangle(-400,15.3,1600,1265.5), new cjs.Rectangle(-400,15.3,1600,1211.7), new cjs.Rectangle(-400,15.3,1600,1157.8), new cjs.Rectangle(-400,15.3,1600,1104), new cjs.Rectangle(-400,15.3,1600,1050.2), new cjs.Rectangle(-400,15.3,1600,996.3), new cjs.Rectangle(-400,12.7,1600,945), new cjs.Rectangle(-400,-41.1,1600,945), new cjs.Rectangle(-400,-95,1600,945), new cjs.Rectangle(-400,-82.1,1600,945), new cjs.Rectangle(-400,-69.3,1600,945), new cjs.Rectangle(-400,-56.4,1600,945), new cjs.Rectangle(-400,-43.5,1600,945), new cjs.Rectangle(-400,-30.7,1600,945), new cjs.Rectangle(-400,-17.8,1600,945), rect=new cjs.Rectangle(-400,-5,1600,945), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-17.8,1600,945), new cjs.Rectangle(-400,-30.7,1600,945), new cjs.Rectangle(-400,-43.5,1600,945), new cjs.Rectangle(-400,-56.4,1600,945), new cjs.Rectangle(-400,-69.3,1600,945), new cjs.Rectangle(-400,-82.1,1600,945), new cjs.Rectangle(-400,-95,1600,945), new cjs.Rectangle(-400,-41.1,1600,945), new cjs.Rectangle(-400,12.7,1600,945), new cjs.Rectangle(-400,15.3,1600,996.3), new cjs.Rectangle(-400,15.3,1600,1050.2), new cjs.Rectangle(-400,15.3,1600,1104), new cjs.Rectangle(-400,15.3,1600,1157.8), new cjs.Rectangle(-400,15.3,1600,1211.7), new cjs.Rectangle(-400,15.3,1600,1265.5), new cjs.Rectangle(-400,15.3,1600,1319.4), new cjs.Rectangle(-400,15.3,1600,1373.2), new cjs.Rectangle(-400,15.3,1600,1427.1), new cjs.Rectangle(-400,15.3,1600,1480.9), rect=new cjs.Rectangle(-410,-10,1620,1560), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.heroes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(570,340);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:400,y:1400},0).wait(1).to({x:410,y:340},0).wait(1).to({x:250},0).wait(1).to({x:410},0).wait(1).to({x:400,y:1400},0).wait(1).to({x:570,y:340},0).wait(1).to({x:400,y:1400},0).wait(1).to({x:410,y:340},0).wait(1).to({x:250},0).wait(1).to({x:410},0).wait(1).to({x:400,y:1400},0).wait(1).to({x:570,y:340},0).wait(1).to({x:400,y:1400},0).wait(1).to({x:410,y:340},0).wait(1));

	// hero_2
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(420,360);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:490},0).wait(1).to({x:400,y:1400},0).wait(1).to({skewY:180,x:370,y:360},0).wait(1).to({skewY:0,x:400,y:1400},0).wait(1).to({x:490,y:360},0).wait(1).to({x:420},0).wait(1).to({x:490},0).wait(1).to({x:400,y:1400},0).wait(1).to({skewY:180,x:370,y:360},0).wait(1).to({skewY:0,x:400,y:1400},0).wait(1).to({x:490,y:360},0).wait(1).to({x:420},0).wait(1).to({x:490},0).wait(1).to({x:400,y:1400},0).wait(1));

	// bg
	this.instance = new lib.background_7_mc();

	this.instance_1 = new lib.background_8_mc();

	this.instance_2 = new lib.background_9_mc();

	this.instance_3 = new lib.background_10_mc();

	this.instance_4 = new lib.background_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,670.1);
p.frameBounds = [rect, new cjs.Rectangle(-400,0,1600,1695.1), new cjs.Rectangle(-400,0,1600,1710.1), new cjs.Rectangle(-400,0,1600,670.1), new cjs.Rectangle(-400,0,1600,1710.1), new cjs.Rectangle(-400,0,1600,1695.1), new cjs.Rectangle(-400,0,1600,670.1), new cjs.Rectangle(-400,0,1600,1695.1), new cjs.Rectangle(-400,0,1600,1710.1), new cjs.Rectangle(-400,0,1600,670.1), new cjs.Rectangle(-400,0,1600,1710.1), new cjs.Rectangle(-400,0,1600,1695.1), new cjs.Rectangle(-400,0,1600,670.1), new cjs.Rectangle(-400,0,1600,1695.1), new cjs.Rectangle(-400,0,1600,1710.1)];


(lib.CurtainScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.curtain_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,600,1600,600);
p.frameBounds = [rect];


(lib.quest_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(520,-100);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(380,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-280,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).wait(1));

	// objects
	this.object_4 = new lib.object_0_mc();
	this.object_4.setTransform(700,500);
	this.object_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.object_4).wait(3).to({_off:false},0).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_6_mc();

	this.frame_2_mc = new lib.quest_2_6_mc();

	this.frame_3_mc = new lib.quest_3_6_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(68.6,-349.4,692.7,1289.4);
p.frameBounds = [rect, rect=new cjs.Rectangle(68.6,-349.4,1591.5,1289.4), rect, rect];


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
p.nominalBounds = rect = new cjs.Rectangle(30,-349.4,922,1289.4);
p.frameBounds = [rect, rect=new cjs.Rectangle(-92,-349.4,1838.1,1289.4), rect];


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
p.nominalBounds = rect = new cjs.Rectangle(30,-349.4,1048.5,1279.4);
p.frameBounds = [rect, rect=new cjs.Rectangle(-13,-349.4,1111.6,1899.4), rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-102,-349.4,862,1289.4);
p.frameBounds = [rect, new cjs.Rectangle(-102,-349.4,908.1,1899.4)];


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
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1289.4);
p.frameBounds = [rect, rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1289.4);
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
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,670.1);
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
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_6_mc();
	this.body_mc.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_6_mc();

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
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

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
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_4_mc();
	this.body_mc.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

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
	this.instance = new lib.background_3_mc();

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
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

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
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

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

	this.instance_24 = new lib.decor_shadow_2_mc();

	this.instance_25 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.gravity_explosion_comp},{t:this.instance_15},{t:this.instance_14},{t:this.next_btn}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[]},1).to({state:[{t:this.instance_23}]},5).to({state:[{t:this.instance_24}]},1).to({state:[]},1).to({state:[{t:this.instance_25}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,257,75.5);
p.frameBounds = [rect, new cjs.Rectangle(-400,0,1600,600), new cjs.Rectangle(-410,-10,1620,620), new cjs.Rectangle(-400,0,1600,1315), new cjs.Rectangle(-1132,-280.8,3030.5,1375.9), new cjs.Rectangle(-400,-280.8,1600,1261.9), rect=new cjs.Rectangle(-400,-349.4,1600,1330.4), rect, rect, rect, rect, rect, new cjs.Rectangle(-410,-10,1620,620), new cjs.Rectangle(-400,-319.9,1600,1780), new cjs.Rectangle(-400,0,1600,600), new cjs.Rectangle(0,0,785,425), rect=new cjs.Rectangle(-410,-10,1620,620), rect, new cjs.Rectangle(-400,600,1600,600), rect=null, rect, rect, rect, rect, rect=new cjs.Rectangle(382,282,36,36), rect, rect=null, rect, rect, new cjs.Rectangle(-410,-10,1620,620)];


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