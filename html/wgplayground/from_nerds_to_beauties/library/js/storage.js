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
		{src:"library/images/storage_atlas_20.png", id:"storage_atlas_20"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,602,1600,600],[0,0,1600,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_4", frames: [[0,602,1600,600],[0,0,1600,600]]},
		{name:"storage_atlas_5", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_6", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_7", frames: [[0,0,662,740],[0,944,561,419],[0,742,1600,200],[664,0,520,520],[1186,0,520,520]]},
		{name:"storage_atlas_8", frames: [[0,0,487,482],[575,768,500,300],[1124,684,500,300],[1077,986,500,300],[575,1070,500,300],[0,966,573,389],[1124,282,400,400],[482,486,640,280],[878,0,640,280],[489,0,387,484],[0,484,480,480]]},
		{name:"storage_atlas_9", frames: [[0,0,382,388],[727,416,343,414],[727,832,343,414],[382,390,343,414],[727,0,343,414],[382,806,343,414],[1417,0,343,414],[1072,416,343,414],[1072,0,343,414],[1417,416,343,414],[1072,832,343,414],[1417,832,343,414],[0,390,380,380],[0,772,380,380]]},
		{name:"storage_atlas_10", frames: [[345,416,343,414],[345,0,343,414],[690,832,343,414],[345,832,343,414],[690,0,343,414],[1035,0,343,414],[1380,0,343,414],[690,416,343,414],[1380,832,343,414],[1380,416,343,414],[1035,832,343,414],[1035,416,343,414],[0,832,343,414],[0,0,343,414],[0,416,343,414]]},
		{name:"storage_atlas_11", frames: [[0,810,348,403],[0,0,348,403],[350,0,348,403],[0,405,348,403],[350,405,348,403],[350,810,348,403],[700,0,348,403],[1050,0,348,403],[1400,0,348,403],[700,810,348,403],[700,405,348,403],[1050,405,348,403],[1400,405,348,403],[1050,810,348,403],[1400,810,348,403]]},
		{name:"storage_atlas_12", frames: [[700,810,360,360],[1062,810,360,360],[350,405,348,403],[1050,0,348,403],[350,0,348,403],[1400,0,348,403],[0,0,348,403],[0,405,348,403],[700,405,348,403],[1050,405,348,403],[1400,405,348,403],[700,0,348,403],[0,810,348,403],[350,810,348,403],[1424,810,360,360]]},
		{name:"storage_atlas_13", frames: [[1086,1052,318,324],[1448,720,350,330],[1448,388,350,330],[1406,1052,358,284],[416,1086,375,310],[0,1086,414,299],[1086,724,332,307],[1448,0,304,386],[0,0,360,360],[0,362,360,360],[0,724,360,360],[362,0,360,360],[362,362,360,360],[724,0,360,360],[724,362,360,360],[1086,0,360,360],[1086,362,360,360],[724,724,360,360],[362,724,360,360]]},
		{name:"storage_atlas_14", frames: [[0,0,380,260],[0,262,320,300],[1449,0,320,300],[1076,267,320,300],[322,288,320,300],[644,288,320,300],[966,569,320,300],[1398,302,320,300],[0,564,320,300],[322,590,320,300],[1076,0,371,265],[729,0,345,286],[382,0,345,286],[644,590,320,300],[0,866,320,300],[966,871,320,300],[1288,604,320,300],[644,892,320,300],[322,892,320,300],[1288,906,320,300]]},
		{name:"storage_atlas_15", frames: [[1468,558,300,300],[1468,860,300,300],[624,1030,300,300],[322,906,300,300],[1166,558,300,300],[1166,860,300,300],[966,0,347,276],[1315,0,334,283],[1166,285,334,271],[644,484,520,180],[644,666,520,180],[644,848,520,180],[644,302,520,180],[0,1208,520,180],[0,604,320,300],[644,0,320,300],[322,302,320,300],[0,302,320,300],[0,0,320,300],[322,0,320,300],[322,604,320,300],[0,906,320,300]]},
		{name:"storage_atlas_16", frames: [[786,1120,260,260],[0,1122,260,260],[1048,1132,260,260],[1310,1082,260,260],[524,1120,260,260],[1109,288,280,280],[0,316,280,280],[282,316,245,305],[0,598,260,260],[262,623,260,260],[1333,820,260,260],[776,596,260,260],[524,858,260,260],[786,858,260,260],[0,860,260,260],[262,885,260,260],[1048,870,260,260],[829,305,271,289],[829,0,278,303],[0,0,281,314],[283,0,281,314],[1402,246,249,315],[1102,570,229,298],[529,338,245,301],[566,0,261,336],[1109,0,291,286],[1402,0,327,244],[1391,563,270,255]]},
		{name:"storage_atlas_17", frames: [[0,0,260,260],[262,0,260,260],[0,262,260,260],[0,1048,260,260],[0,524,260,260],[0,786,260,260],[1572,0,200,307],[1291,262,240,220],[988,914,220,200],[1437,908,220,200],[1013,1116,220,200],[1235,1110,220,200],[791,1116,220,200],[1457,1110,220,200],[1049,504,246,213],[1049,262,240,240],[1232,745,203,223],[1499,515,238,203],[791,506,202,246],[995,719,235,193],[1533,309,258,204],[1297,484,200,259],[786,262,261,242],[524,1048,265,250],[786,754,200,236],[262,262,260,260],[262,524,260,260],[262,786,260,260],[262,1048,260,260],[524,0,260,260],[786,0,260,260],[1310,0,260,260],[1048,0,260,260],[524,262,260,260],[524,524,260,260],[524,786,260,260],[1499,720,250,186]]},
		{name:"storage_atlas_18", frames: [[611,1105,190,190],[888,0,240,180],[803,1107,220,160],[1273,363,220,160],[1263,525,220,160],[1263,687,220,160],[1041,945,220,160],[1263,849,220,160],[1025,1107,220,160],[1495,310,220,160],[1495,472,220,160],[1485,634,220,160],[845,783,220,160],[819,945,220,160],[646,404,190,190],[0,0,220,200],[0,404,220,200],[222,0,220,200],[222,202,220,200],[444,0,220,200],[0,606,220,200],[222,404,220,200],[0,202,220,200],[444,202,220,200],[666,0,220,200],[0,808,220,200],[221,1010,190,190],[1037,544,180,180],[1067,726,180,180],[413,1129,190,190],[611,924,206,179],[666,202,214,195],[1374,0,242,165],[211,1202,198,198],[424,924,185,203],[1273,176,191,185],[0,1010,219,190],[1247,1201,177,197],[0,1202,209,189],[1618,0,124,308],[1030,374,196,168],[1451,1138,212,161],[1130,0,242,174],[222,606,227,188],[1080,182,191,186],[424,808,344,114],[1485,796,220,160],[653,596,190,190],[1263,1011,186,188],[1485,958,194,178],[838,399,190,190],[222,796,200,200],[444,404,200,200],[451,606,200,200],[845,591,190,190],[888,182,190,190]]},
		{name:"storage_atlas_19", frames: [[728,0,180,180],[1010,983,120,120],[700,1000,120,120],[394,961,120,120],[0,324,69,331],[979,570,240,80],[578,932,120,120],[182,0,180,180],[0,0,180,180],[364,0,180,180],[546,0,180,180],[1024,734,142,108],[0,946,120,120],[272,935,120,120],[888,946,120,120],[122,946,120,120],[71,650,138,125],[1187,1134,150,87],[887,182,201,131],[353,426,163,132],[1274,173,171,168],[1663,0,125,214],[435,725,147,106],[71,324,130,94],[1391,436,137,150],[71,508,139,140],[689,398,145,150],[836,447,141,144],[945,1220,81,132],[307,676,126,133],[1530,438,137,149],[518,426,137,156],[212,508,130,149],[509,584,130,139],[657,550,133,141],[1463,161,198,148],[1391,589,161,114],[1221,547,168,114],[1554,700,158,106],[1378,705,161,97],[1554,589,165,109],[344,560,163,114],[792,593,160,111],[0,182,201,140],[1461,1134,102,111],[1339,1134,120,108],[944,1105,119,113],[1669,438,129,146],[1168,750,118,129],[1674,910,119,122],[366,1083,113,124],[0,777,118,128],[459,833,117,126],[1065,1130,120,110],[641,693,119,135],[638,1122,123,109],[102,1252,80,124],[1132,1008,120,120],[0,1190,180,60],[364,1209,180,60],[1565,1156,180,60],[763,1220,180,60],[182,1190,180,60],[1565,1218,180,60],[1060,344,280,80],[762,734,260,60],[71,426,280,80],[1663,216,107,220],[979,447,78,120],[211,659,94,183],[1592,808,150,100],[1218,906,150,100],[1288,804,150,100],[762,796,150,100],[120,844,150,100],[914,844,150,100],[1066,881,150,100],[584,830,150,100],[1440,808,150,100],[736,898,150,100],[1370,910,150,100],[307,833,150,100],[1522,910,150,100],[1254,1012,120,120],[1376,1012,120,120],[878,315,180,130],[954,652,220,80],[203,182,340,80],[184,1252,99,100],[1060,426,150,142],[1747,1034,50,210],[1744,586,50,297],[1274,0,187,171],[689,264,187,132],[1463,0,186,159],[1028,1242,100,100],[203,264,160,160],[527,264,160,160],[1309,1244,100,100],[365,264,160,160],[1090,182,160,160],[1212,426,177,119],[1498,1012,120,120],[1092,0,180,180],[910,0,180,180],[546,1233,180,60],[545,182,340,80],[1176,663,200,85],[1187,1223,120,90],[244,1057,120,120],[1620,1034,120,120],[0,1068,120,120],[516,1054,120,120],[122,1068,120,120],[822,1068,120,120],[1447,311,200,123],[1513,1280,240,40],[285,1271,240,40],[285,1313,240,40],[1513,1322,240,40],[527,1295,240,40],[1270,1349,240,40],[527,1337,240,40],[1028,1344,240,40],[0,1252,100,100],[1411,1247,100,100]]},
		{name:"storage_atlas_20", frames: [[156,532,48,48],[833,329,64,64],[971,0,50,157],[248,480,40,45],[477,565,40,43],[54,534,45,46],[641,540,43,41],[982,524,39,54],[881,484,55,43],[680,96,46,28],[747,536,47,39],[796,570,44,38],[181,344,56,71],[503,443,21,120],[858,457,21,120],[526,460,21,120],[549,460,21,120],[317,469,21,120],[701,474,21,120],[340,469,21,120],[618,460,21,120],[572,460,21,120],[595,460,21,120],[294,469,21,120],[724,474,21,120],[561,321,90,50],[89,328,90,50],[363,483,50,50],[144,479,50,50],[196,480,50,50],[54,482,50,50],[773,426,56,56],[881,529,48,48],[106,531,48,48],[363,556,112,18],[208,0,94,91],[342,176,88,85],[626,201,94,75],[578,0,100,82],[769,0,96,85],[867,0,96,78],[517,278,150,41],[907,308,85,61],[259,248,52,124],[895,420,58,62],[206,532,47,47],[931,533,47,47],[78,0,76,117],[213,436,79,42],[395,289,82,65],[0,343,87,49],[304,0,83,102],[0,272,87,69],[432,201,83,86],[389,0,87,97],[907,231,88,75],[479,321,80,58],[711,358,81,52],[313,356,88,49],[899,371,83,47],[680,0,87,94],[711,294,85,62],[102,248,84,78],[0,0,76,123],[42,582,95,17],[561,373,69,54],[403,356,62,63],[529,429,116,29],[478,0,98,85],[833,231,72,96],[722,201,76,91],[363,576,45,37],[410,576,40,40],[517,201,107,66],[529,381,20,39],[239,374,60,60],[467,381,60,60],[89,380,60,60],[0,394,60,60],[833,395,60,60],[151,417,60,60],[711,412,60,60],[301,407,60,60],[955,420,25,111],[476,443,25,111],[422,421,25,111],[647,427,25,111],[0,456,25,111],[674,427,25,111],[831,457,25,111],[449,443,25,111],[27,456,25,111],[114,119,40,55],[0,569,40,43],[459,99,10,11],[188,248,69,94],[0,197,100,73],[363,421,57,60],[632,373,23,38],[728,96,31,31],[747,484,50,50],[669,278,40,147],[248,581,40,40],[747,577,40,40],[842,579,40,40],[884,579,40,40],[980,580,40,40],[926,582,40,40],[206,581,40,40],[139,582,40,40],[519,582,40,40],[561,582,40,40],[62,442,80,38],[997,231,21,291],[156,0,50,174],[436,99,21,23],[313,263,80,80],[208,104,112,70],[550,129,112,70],[228,176,112,70],[114,176,112,70],[436,129,112,70],[778,129,112,70],[322,104,112,70],[664,129,112,70],[0,125,112,70],[892,159,112,70],[800,201,31,223],[769,87,200,40],[478,87,200,40]]}
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
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_for_pointer_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_0_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_10_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_11_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_12_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_7_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_8_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_9_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.background_10_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
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
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_8_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_9_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bottle_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bottom_10_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bottom_11_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bottom_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bottom_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bottom_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bottom_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bottom_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bottom_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bottom_7_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bottom_8_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bottom_9_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.chip0_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.chip1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.circle1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.circle2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.circle3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_0_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_10_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_11_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_12_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_13_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_14_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_15_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_16_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_17_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_7_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_8_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_9_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.circle_item1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.circle_item2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.circle_item4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.circle_item5_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.circle_item6_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.circle_item7_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.circle_item8_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.circle_item9_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.circles_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.closet1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copyright_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.crab1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.crab2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.current_hairstyle_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.current_hairstyle_0_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.current_hairstyle_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.current_hairstyle_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.current_location_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.current_makeup_1_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.current_makeup_1_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.current_makeup_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.current_makeup_2_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.current_makeup_2_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.current_makeup_3_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.decor_location_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.facemask1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.fish1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.flash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.flash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.flash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.flash_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.forward_icon_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.gift1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.gift2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.gift3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.gift4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.gift5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.glitter_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.glitter_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.glitter_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.glitter_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_7_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_7_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_8_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_8_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_9_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_9_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_boby0_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_boby1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_brecets_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero1_crown1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero1_crown2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero1_crown3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero1_crown4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero1_crown5_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero1_crown6_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows0_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe7_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe8_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe9_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair0_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair7_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair8_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hand1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero1_head_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_leaf1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_leaf2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_leaf3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero1_leaf4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips0_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_prish1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero1_prish2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero1_scale_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_sinyak_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_tale1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_tale2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero1_tale3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_tale4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_tale5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_tale6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top0_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top10_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top11_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top12_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top13_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top14_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top5_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top6_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top7_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top8_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top9_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory10_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory11_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory12_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory7_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory8_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory9_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero2_boby0_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_boby1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom10_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom11_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom7_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom8_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom9_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero2_brecets_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.hero2_candy1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.hero2_candy2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero2_candy3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows0_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe8_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe9_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glasses_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair0_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair9_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero2_klaksi1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.hero2_klaksi2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.hero2_klaksi3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips0_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_prish_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top10_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top11_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top7_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top8_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top9_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_de_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_es_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.indicator_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.jellyfish2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.jellyfish_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.kap1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.kaplya_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.konek_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.language_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.language_de_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.language_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.language_es_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.language_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.language_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.language_id_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.language_it_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.language_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.language_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.language_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.language_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.language_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.languages_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.languages_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.languages_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.languages_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.lens10_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.lens11_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.lens12_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.lens13_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.lens19_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.lens21_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.lens22_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.lens30_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new10_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new11_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new23_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new26_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new37_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new39_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new44_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new5_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new9_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.location_0_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.location_0_6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.location_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.location_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.patch_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.pearloyster_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.pearloyster_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.pearloyster_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.pen_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.photoflash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.photoflash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.photoflash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.pinc_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.pipetka_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.rastr4_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new15_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new16_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new23_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new30_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new32_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new3_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new54_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new55_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new6_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new8_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.shelf_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.shelf_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.shell1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.skip_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.stick_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.tin_facemask1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_20"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.tongue_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.top_10_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.top_10_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.top_11_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.top_11_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.top_12_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.top_13_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.top_14_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.top_15_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.top_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.top_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.top_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.top_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.top_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.top_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.top_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.top_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.top_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.top_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.top_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.top_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.top_7_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.top_7_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.top_8_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.top_8_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.top_9_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.top_9_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.towel_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.track_move_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.ulitka_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
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


(lib.wardrobe_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_2_img();
	this.instance.setTransform(-260,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-260,520,520);
p.frameBounds = [rect];


(lib.wardrobe_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_4_img();
	this.instance.setTransform(-240,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-240,480,480);
p.frameBounds = [rect];


(lib.wardrobe_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_2_img();
	this.instance.setTransform(-260,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-260,520,520);
p.frameBounds = [rect];


(lib.ulitka_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ulitka_img();
	this.instance.setTransform(-125,-93);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-93,250,186);
p.frameBounds = [rect];


(lib.towel_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.towel_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,387,484);
p.frameBounds = [rect];


(lib.tongue_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tongue_img();
	this.instance.setTransform(-100,-118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-118,200,236);
p.frameBounds = [rect];


(lib.title_filter_body_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// graph
	this.instance = new lib.title_filter_en_img();
	this.instance.setTransform(-100,-20);

	this.instance_1 = new lib.title_filter_ru_img();
	this.instance_1.setTransform(-100,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-20,200,40);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.title_filter_body_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_filter_3_en_img();
	this.instance.setTransform(1,1,0.95,0.95);

	this.instance_1 = new lib.title_filter_3_ru_img();
	this.instance_1.setTransform(1,1,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1,1,228,38);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.title_filter_body_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_filter_2_en_img();

	this.instance_1 = new lib.title_filter_2_ru_img();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,240,40);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.title_filter_body_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_filter_1_en_img();
	this.instance.setTransform(1,1,0.95,0.95);

	this.instance_1 = new lib.title_filter_1_ru_img();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1,1,228,38);
p.frameBounds = [rect, new cjs.Rectangle(0,0,240,40), rect=new cjs.Rectangle(1,1,228,38), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.title_filter_body_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_filter_0_en_img();
	this.instance.setTransform(1,1,0.95,0.95);

	this.instance_1 = new lib.title_filter_0_ru_img();
	this.instance_1.setTransform(1,1,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1,1,228,38);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.tin_facemask1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tin_facemask1_img();
	this.instance.setTransform(-100,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-61.5,200,123);
p.frameBounds = [rect];


(lib.stick1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.kap1_img();
	this.instance.setTransform(-21.1,-111.8,0.579,0.579);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.stick_img();
	this.instance_1.setTransform(-15.5,-111.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21.1,-111.8,45.2,223.4);
p.frameBounds = [rect];


(lib.shell2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.closet1_img();
	this.instance.setTransform(-98.5,-97.5,0.405,0.405);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.5,-97.5,197.1,195.1);
p.frameBounds = [rect];


(lib.shell1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shell1_img();
	this.instance.setTransform(-100,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-42.5,200,85);
p.frameBounds = [rect];


(lib.shelf_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shelf_1_4_img();
	this.instance.setTransform(-170,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-40,340,80);
p.frameBounds = [rect];


(lib.shelf_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shelf_1_2_img();
	this.instance.setTransform(-90,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-30,180,60);
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


(lib.set_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AlgFhQiTiSAAjPQAAjNCTiTQCSiTDOAAQDOAACTCTQCTCTAADNQAADPiTCSQiTCTjOAAQjOAAiSiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.pipetka_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pipetka_img();
	this.instance.setTransform(-25,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-87,50,174);
p.frameBounds = [rect];


(lib.pincet2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rastr4_img();
	this.instance.setTransform(113.3,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.pinc_img();
	this.instance_1.setTransform(18,-35.9,1,1,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 2
	this.instance_2 = new lib.pinc_img();
	this.instance_2.setTransform(20.4,-51.4,1,1,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2.9,-51.4,196.9,154.6);
p.frameBounds = [rect];


(lib.pincet_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.pinc_img();
	this.instance.setTransform(21.5,-46.2,1,1,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.pinc_img();
	this.instance_1.setTransform(20.4,-51.4,1,1,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2.9,-51.4,198.8,153.3);
p.frameBounds = [rect];


(lib.pen_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.pen_img();
	this.instance.setTransform(0.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.8,0,21,291);
p.frameBounds = [rect];


(lib.pearloyster_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pearloyster_3_img();
	this.instance.setTransform(-80,-80,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.pearloyster_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pearloyster_2_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.pearloyster_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pearloyster_1_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.patch_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.patch_img();
	this.instance.setTransform(-40,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-19,80,38);
p.frameBounds = [rect];


(lib.object_20_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCLDQkkklAAmeQAAmdEkklQElkkGdAAQGeAAElEkQEkElAAGdQAAGekkElQklEkmeAAQmdAAklkkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.object_19_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvdPdQmZmagBpDQABpCGZmbQGbmaJCAAQJEAAGaGaQGZGbABJCQgBJDmZGaQmaGbpEAAQpCAAmbmbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.object_18_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmmGoQixiwAAj4QAAj3CxiwQCviwD3AAQD4AACwCwQCwCwAAD3QAAD4iwCwQiwCwj4AAQj3AAiviwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.object_17_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvdPeQmZmagBpEQABpDGZmaQGamZJDgBQJEABGaGZQGZGaABJDQgBJEmZGaQmaGZpEABQpDgBmamZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.object_16_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A/effQtDtDAAycQAAybNDtDQNDtDSbAAQScAANDNDQNDNDAASbQAASctDNDQtDNDycAAQybAAtDtDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-285,-285,570,570);
p.frameBounds = [rect];


(lib.object_13_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EggBAgCQtRtRAAyxQAAywNRtSQNRtRSwABQSxgBNRNRQNRNSAASwQAASxtRNRQtRNRyxAAQywAAtRtRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-290,-290,580,580);
p.frameBounds = [rect];


(lib.object_12_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuWOWQl8l8AAoaQAAoZF8l9QF9l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F9oaAAQoZAAl9l9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.object_12_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF9F8QF8F9AAIZQAAIal8F8Ql9F9oaAAQoZAAl8l9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.object_11_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A+7e7Qs0s0AByHQgByHM0s0QM1szSGAAQSIAAMzMzQM0M0AASHQAASHs0M0QszM0yIAAQyGAAs1s0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-280,-280,560,560);
p.frameBounds = [rect];


(lib.object_10_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF9F8QF8F9AAIZQAAIal8F8Ql9F9oaAAQoZAAl8l9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.object_9_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A+7e7Qs0szAByIQgByHM0s0QM1szSGAAQSHAAM1MzQM0M0gBSHQABSIs0MzQs1M0yHAAQyGAAs1s0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-280,-280,560,560);
p.frameBounds = [rect];


(lib.object_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClBAAnIQAAnHFClBQFBlCHHAAQHIAAFBFCQFCFBAAHHQAAHIlCFBQlBFCnIAAQnHAAlBlCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.object_8_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOXQl9l9AAoaQAAoZF9l8QF8l9IZAAQIaAAF9F9QF8F8AAIZQAAIal8F9Ql9F8oaAAQoZAAl8l8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.object_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnGFClCQFClCHGAAQHHAAFCFCQFDFCgBHGQABHHlDFCQlCFDnHgBQnGABlClDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.object_7_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao0I2QjrjrAAlLQAAlKDrjqQDqjrFKAAQFLAADrDrQDpDqABFKQgBFLjpDrQjrDplLABQlKgBjqjpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.object_6_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkWgBmJQABmIEVkXQEXkVGIgBQGJABEWEVQEXEXAAGIQAAGJkXEWQkWEXmJAAQmIAAkXkXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.object_5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I2QjpjrgBlLQABlKDpjqQDrjrFKAAQFLAADqDrQDrDqAAFKQAAFLjrDrQjqDplLABQlKgBjrjpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.object_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I1QjpjrgBlKQABlKDpjrQDsjpFJgBQFKABDrDpQDqDrABFKQgBFKjqDrQjrDqlKABQlJgBjsjqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.object_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I1QjpjqgBlLQABlKDpjrQDrjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjrjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.object_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsrMsQlRlRgBnbQABnbFRlRQFRlRHaAAQHcAAFRFRQFRFRAAHbQAAHblRFRQlRFRncABQnagBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-115,230,230);
p.frameBounds = [rect];


(lib.object_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ap7J8QkIkHAAl1QAAlzEIkIQEHkHF0gBQF0ABEIEHQEIEIAAFzQAAF1kIEHQkIEIl0AAQl0AAkHkIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.object_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCLCQkkklAAmdQAAmdEkklQElklGdABQGegBElElQEkElAAGdQAAGdkkElQklEmmegBQmdABklkmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.object_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuWOWQl8l8AAoaQAAoZF8l9QF9l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F9oaAAQoZAAl9l9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.object_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvdPdQmamZAApEQAApCGambQGbmaJCAAQJEAAGZGaQGbGbAAJCQAAJEmbGZQmZGbpEAAQpCAAmbmbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
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


(lib.lens19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens19_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect];


(lib.konek_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.konek_img();
	this.instance.setTransform(-47,-91.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-91.5,94,183);
p.frameBounds = [rect];


(lib.kaplya_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kaplya_img();
	this.instance.setTransform(-10,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-19.5,20,39);
p.frameBounds = [rect];


(lib.jellyfish2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jellyfish2_img();
	this.instance.setTransform(-53.5,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.5,-33,107,66);
p.frameBounds = [rect];


(lib.jellyfish_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jellyfish_img();
	this.instance.setTransform(-53.5,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.5,-110,107,220);
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


(lib.hero2_top_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_top1_img();
	this.instance.setTransform(-64.5,-73);

	this.instance_1 = new lib.hero2_top2_img();
	this.instance_1.setTransform(-61,-70);

	this.instance_2 = new lib.hero2_top3_img();
	this.instance_2.setTransform(-61.9,-70.5);

	this.instance_3 = new lib.hero2_top4_img();
	this.instance_3.setTransform(-58.5,-70);

	this.instance_4 = new lib.hero2_top5_img();
	this.instance_4.setTransform(-61,-70);

	this.instance_5 = new lib.hero2_top6_img();
	this.instance_5.setTransform(-62,-70.5);

	this.instance_6 = new lib.hero2_top7_img();
	this.instance_6.setTransform(-62.5,-71.5);

	this.instance_7 = new lib.hero2_top8_img();
	this.instance_7.setTransform(-63.5,-95);

	this.instance_8 = new lib.hero2_top9_img();
	this.instance_8.setTransform(-64,-70);

	this.instance_9 = new lib.hero2_top10_img();
	this.instance_9.setTransform(-63,-69);

	this.instance_10 = new lib.hero2_top11_img();
	this.instance_10.setTransform(-62.5,-72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.5,-73,129,146);
p.frameBounds = [rect, new cjs.Rectangle(-61,-70,118,129), new cjs.Rectangle(-61.9,-70.5,119,122), new cjs.Rectangle(-58.5,-70,113,124), new cjs.Rectangle(-61,-70,118,128), new cjs.Rectangle(-62,-70.5,117,126), new cjs.Rectangle(-62.5,-71.5,120,110), new cjs.Rectangle(-63.5,-95,119,135), new cjs.Rectangle(-64,-70,123,109), new cjs.Rectangle(-63,-69,120,108), new cjs.Rectangle(-62.5,-72,119,113)];


(lib.hero2_shadows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_shadows1_img();
	this.instance.setTransform(-171.5,-207);

	this.instance_1 = new lib.hero2_shadows2_img();
	this.instance_1.setTransform(-171.5,-207);

	this.instance_2 = new lib.hero2_shadows3_img();
	this.instance_2.setTransform(-171.5,-207);

	this.instance_3 = new lib.hero2_shadows4_img();
	this.instance_3.setTransform(-171.5,-207);

	this.instance_4 = new lib.hero2_shadows5_img();
	this.instance_4.setTransform(-171.5,-207);

	this.instance_5 = new lib.hero2_shadows6_img();
	this.instance_5.setTransform(-171.5,-207);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-207,343,414);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_prish_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_prish_img();
	this.instance.setTransform(-22.5,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.5,-18.5,45,37);
p.frameBounds = [rect];


(lib.hero2_lips0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips0_img();
	this.instance.setTransform(-171.5,-207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-207,343,414);
p.frameBounds = [rect];


(lib.hero2_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_lips1_img();
	this.instance.setTransform(-171.5,-207);

	this.instance_1 = new lib.hero2_lips2_img();
	this.instance_1.setTransform(-171.5,-207);

	this.instance_2 = new lib.hero2_lips3_img();
	this.instance_2.setTransform(-171.5,-207);

	this.instance_3 = new lib.hero2_lips4_img();
	this.instance_3.setTransform(-171.5,-207);

	this.instance_4 = new lib.hero2_lips5_img();
	this.instance_4.setTransform(-171.5,-207);

	this.instance_5 = new lib.hero2_lips6_img();
	this.instance_5.setTransform(-171.5,-207);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

	// graph
	this.instance_6 = new lib.hero2_lips0_img();
	this.instance_6.setTransform(-171.5,-207);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-207,343,414);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect];


(lib.hero2_klaksi3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_klaksi3_img();
	this.instance.setTransform(-38,-45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-45.5,76,91);
p.frameBounds = [rect];


(lib.hero2_klaksi2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_klaksi2_img();
	this.instance.setTransform(-36,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36,-48,72,96);
p.frameBounds = [rect];


(lib.hero2_klaksi1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_klaksi1_img();
	this.instance.setTransform(-49,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49,-42.5,98,85);
p.frameBounds = [rect];


(lib.hero2_head_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_head_img();
	this.instance.setTransform(-171.5,-207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-207,343,414);
p.frameBounds = [rect];


(lib.hero2_hair0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hair0_img();
	this.instance.setTransform(-280.5,-209.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-280.5,-209.5,561,419);
p.frameBounds = [rect];


(lib.hero2_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// Слой 2
	this.instance = new lib.hero2_hair1_img();
	this.instance.setTransform(-161,-85.7);

	this.instance_1 = new lib.hero2_hair6_img();
	this.instance_1.setTransform(-94,-39);

	this.instance_2 = new lib.hero2_hair7_img();
	this.instance_2.setTransform(-138.4,-40.9);

	this.instance_3 = new lib.hero2_hair9_img();
	this.instance_3.setTransform(-167.9,-83.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-161,-85.7,327,244);
p.frameBounds = [rect, rect=null, rect, rect, rect, new cjs.Rectangle(-94,-39,200,259), new cjs.Rectangle(-138.4,-40.9,304,386), null, new cjs.Rectangle(-167.9,-83.5,345,286)];


(lib.hero2_glasses_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glasses_img();
	this.instance.setTransform(-172,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-172,-57,344,114);
p.frameBounds = [rect];


(lib.hero2_fringe0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe0_img();
	this.instance.setTransform(-207,-149.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-207,-149.5,414,299);
p.frameBounds = [rect];


(lib.hero2_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_fringe1_img();
	this.instance.setTransform(-121,-87);

	this.instance_1 = new lib.hero2_fringe2_img();
	this.instance_1.setTransform(-114,-92);

	this.instance_2 = new lib.hero2_fringe3_img();
	this.instance_2.setTransform(-139,-117);

	this.instance_3 = new lib.hero2_fringe4_img();
	this.instance_3.setTransform(-91,-120);

	this.instance_4 = new lib.hero2_fringe5_img();
	this.instance_4.setTransform(-147,-126);

	this.instance_5 = new lib.hero2_fringe6_img();
	this.instance_5.setTransform(-146,-89);

	this.instance_6 = new lib.hero2_fringe7_img();
	this.instance_6.setTransform(-163.4,-91);

	this.instance_7 = new lib.hero2_fringe8_img();
	this.instance_7.setTransform(-158.9,-84);

	this.instance_8 = new lib.hero2_fringe9_img();
	this.instance_8.setTransform(-168.9,-84.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121,-87,242,174);
p.frameBounds = [rect, new cjs.Rectangle(-114,-92,227,188), new cjs.Rectangle(-139,-117,235,193), new cjs.Rectangle(-91,-120,191,186), new cjs.Rectangle(-147,-126,258,204), new cjs.Rectangle(-146,-89,291,286), new cjs.Rectangle(-163.4,-91,334,271), new cjs.Rectangle(-158.9,-84,332,307), new cjs.Rectangle(-168.9,-84.5,345,286)];


(lib.hero2_eyes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes1_img();
	this.instance.setTransform(-171.5,-207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-207,343,414);
p.frameBounds = [rect];


(lib.hero2_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_eyes1_img();
	this.instance.setTransform(-171.5,-207);

	this.instance_1 = new lib.hero2_eyes2_img();
	this.instance_1.setTransform(-171.5,-207);

	this.instance_2 = new lib.hero2_eyes3_img();
	this.instance_2.setTransform(-171.5,-207);

	this.instance_3 = new lib.hero2_eyes4_img();
	this.instance_3.setTransform(-171.5,-207);

	this.instance_4 = new lib.hero2_eyes5_img();
	this.instance_4.setTransform(-171.5,-207);

	this.instance_5 = new lib.hero2_eyes6_img();
	this.instance_5.setTransform(-171.5,-207);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-207,343,414);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_eyebrows1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyebrows1_img();
	this.instance.setTransform(-171.5,-207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-207,343,414);
p.frameBounds = [rect];


(lib.hero2_eyebrows0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyebrows0_img();
	this.instance.setTransform(-58,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58,-14.5,116,29);
p.frameBounds = [rect];


(lib.hero2_eyebrows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_eyebrows1_img();
	this.instance.setTransform(-171.5,-207);

	this.instance_1 = new lib.hero2_eyebrows2_img();
	this.instance_1.setTransform(-171.5,-207);

	this.instance_2 = new lib.hero2_eyebrows3_img();
	this.instance_2.setTransform(-171.5,-207);

	this.instance_3 = new lib.hero2_eyebrows4_img();
	this.instance_3.setTransform(-171.5,-207);

	this.instance_4 = new lib.hero2_eyebrows5_img();
	this.instance_4.setTransform(-171.5,-207);

	this.instance_5 = new lib.hero2_eyebrows6_img();
	this.instance_5.setTransform(-171.5,-207);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-207,343,414);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_candy3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_candy3_img();
	this.instance.setTransform(-31,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31,-31.5,62,63);
p.frameBounds = [rect];


(lib.hero2_candy2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_candy2_img();
	this.instance.setTransform(-51,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51,-55.5,102,111);
p.frameBounds = [rect];


(lib.hero2_candy1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_candy1_img();
	this.instance.setTransform(-34.5,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.5,-27,69,54);
p.frameBounds = [rect];


(lib.hero2_brecets_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_brecets_img();
	this.instance.setTransform(-47.5,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.5,-8.5,95,17);
p.frameBounds = [rect];


(lib.hero2_bottom_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_bottom1_img();
	this.instance.setTransform(-80.5,-57);

	this.instance_1 = new lib.hero2_bottom2_img();
	this.instance_1.setTransform(-83.9,-49);

	this.instance_2 = new lib.hero2_bottom3_img();
	this.instance_2.setTransform(-78.5,-53);

	this.instance_3 = new lib.hero2_bottom4_img();
	this.instance_3.setTransform(-80,-48);

	this.instance_4 = new lib.hero2_bottom5_img();
	this.instance_4.setTransform(-80.5,-57.5);

	this.instance_5 = new lib.hero2_bottom6_img();
	this.instance_5.setTransform(-80.9,-58.5);

	this.instance_6 = new lib.hero2_bottom7_img();
	this.instance_6.setTransform(-78.9,-57.5);

	this.instance_7 = new lib.hero2_bottom8_img();
	this.instance_7.setTransform(-103.9,-59.5);

	this.instance_8 = new lib.hero2_bottom9_img();
	this.instance_8.setTransform(-98.4,-56);

	this.instance_9 = new lib.hero2_bottom10_img();
	this.instance_9.setTransform(-97,-51.5);

	this.instance_10 = new lib.hero2_bottom11_img();
	this.instance_10.setTransform(-98.4,-67.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.5,-57,161,114);
p.frameBounds = [rect, new cjs.Rectangle(-83.9,-49,168,114), new cjs.Rectangle(-78.5,-53,158,106), new cjs.Rectangle(-80,-48,161,97), new cjs.Rectangle(-80.5,-57.5,165,109), new cjs.Rectangle(-80.9,-58.5,163,114), new cjs.Rectangle(-78.9,-57.5,160,111), new cjs.Rectangle(-103.9,-59.5,212,161), new cjs.Rectangle(-98.4,-56,201,140), new cjs.Rectangle(-97,-51.5,198,148), new cjs.Rectangle(-98.4,-67.5,196,168)];


(lib.hero2_boby1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_boby1_img();
	this.instance.setTransform(-191,-194);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-191,-194,382,388);
p.frameBounds = [rect];


(lib.hero2_boby0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_boby0_img();
	this.instance.setTransform(-167,-141.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-167,-141.5,334,283);
p.frameBounds = [rect];


(lib.hero2_accessory_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_accessory1_img();
	this.instance.setTransform(-70.5,-72);

	this.instance_1 = new lib.hero2_accessory2_img();
	this.instance_1.setTransform(-42.5,-56.2);

	this.instance_2 = new lib.hero2_accessory3_img();
	this.instance_2.setTransform(-42,-63.7);

	this.instance_3 = new lib.hero2_accessory4_img();
	this.instance_3.setTransform(-66,-62.7);

	this.instance_4 = new lib.hero2_accessory5_img();
	this.instance_4.setTransform(-71.5,-76.7);

	this.instance_5 = new lib.hero2_accessory6_img();
	this.instance_5.setTransform(-65,-80.7);

	this.instance_6 = new lib.hero2_accessory7_img();
	this.instance_6.setTransform(-68.5,-77.2);

	this.instance_7 = new lib.hero2_accessory8_img();
	this.instance_7.setTransform(-67.5,-67.2);

	this.instance_8 = new lib.hero2_accessory9_img();
	this.instance_8.setTransform(-64.5,-66.7);

	this.instance_9 = new lib.hero2_accessory10_img();
	this.instance_9.setTransform(-71,-78.2);

	this.instance_10 = new lib.hero2_accessory11_img();
	this.instance_10.setTransform(-69.5,-67.7);

	this.instance_11 = new lib.hero2_accessory12_img();
	this.instance_11.setTransform(-69,-73.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.5,-72,141,144);
p.frameBounds = [rect, new cjs.Rectangle(-42.5,-56.2,76,123), new cjs.Rectangle(-42,-63.7,81,132), new cjs.Rectangle(-66,-62.7,126,133), new cjs.Rectangle(-71.5,-76.7,137,149), new cjs.Rectangle(-65,-80.7,137,156), new cjs.Rectangle(-68.5,-77.2,130,149), new cjs.Rectangle(-67.5,-67.2,130,139), new cjs.Rectangle(-64.5,-66.7,133,141), new cjs.Rectangle(-71,-78.2,137,150), new cjs.Rectangle(-69.5,-67.7,139,140), new cjs.Rectangle(-69,-73.7,145,150), null];


(lib.hero1_top_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_top0_img();
	this.instance.setTransform(-39.5,-21);

	this.instance_1 = new lib.hero1_top1_img();
	this.instance_1.setTransform(-42.4,-43.5);

	this.instance_2 = new lib.hero1_top2_img();
	this.instance_2.setTransform(-41.9,-17.5);

	this.instance_3 = new lib.hero1_top3_img();
	this.instance_3.setTransform(-39.4,-14.5);

	this.instance_4 = new lib.hero1_top4_img();
	this.instance_4.setTransform(-39.4,-12.5);

	this.instance_5 = new lib.hero1_top5_img();
	this.instance_5.setTransform(-43.4,-17.5);

	this.instance_6 = new lib.hero1_top6_img();
	this.instance_6.setTransform(-39.9,-12.5);

	this.instance_7 = new lib.hero1_top7_img();
	this.instance_7.setTransform(-39.4,-17);

	this.instance_8 = new lib.hero1_top8_img();
	this.instance_8.setTransform(-39.4,-16);

	this.instance_9 = new lib.hero1_top9_img();
	this.instance_9.setTransform(-40.4,-14.5);

	this.instance_10 = new lib.hero1_top10_img();
	this.instance_10.setTransform(-40,-16);

	this.instance_11 = new lib.hero1_top11_img();
	this.instance_11.setTransform(-41.5,-16.5);

	this.instance_12 = new lib.hero1_top12_img();
	this.instance_12.setTransform(-39,-42);

	this.instance_13 = new lib.hero1_top13_img();
	this.instance_13.setTransform(-42.5,-18);

	this.instance_14 = new lib.hero1_top14_img();
	this.instance_14.setTransform(-40.5,-17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.5,-21,79,42);
p.frameBounds = [rect, new cjs.Rectangle(-42.4,-43.5,87,97), new cjs.Rectangle(-41.9,-17.5,88,75), new cjs.Rectangle(-39.4,-14.5,80,58), new cjs.Rectangle(-39.4,-12.5,81,52), new cjs.Rectangle(-43.4,-17.5,88,49), new cjs.Rectangle(-39.9,-12.5,83,47), new cjs.Rectangle(-39.4,-17,87,94), new cjs.Rectangle(-39.4,-16,85,62), new cjs.Rectangle(-40.4,-14.5,84,78), new cjs.Rectangle(-40,-16,82,65), new cjs.Rectangle(-41.5,-16.5,87,49), new cjs.Rectangle(-39,-42,83,102), new cjs.Rectangle(-42.5,-18,87,69), new cjs.Rectangle(-40.5,-17,83,86)];


(lib.hero1_tale_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_tale1_img();
	this.instance.setTransform(-122.5,-150.5);

	this.instance_1 = new lib.hero1_tale2_img();
	this.instance_1.setTransform(-116.9,-152.4);

	this.instance_2 = new lib.hero1_tale3_img();
	this.instance_2.setTransform(-123,-158.4);

	this.instance_3 = new lib.hero1_tale4_img();
	this.instance_3.setTransform(-112.5,-159.4);

	this.instance_4 = new lib.hero1_tale5_img();
	this.instance_4.setTransform(-111.9,-157.9);

	this.instance_5 = new lib.hero1_tale6_img();
	this.instance_5.setTransform(-110.9,-161.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.5,-150.5,245,301);
p.frameBounds = [rect, new cjs.Rectangle(-116.9,-152.4,124,308), new cjs.Rectangle(-123,-158.4,347,276), new cjs.Rectangle(-112.5,-159.4,371,265), new cjs.Rectangle(-111.9,-157.9,375,310), new cjs.Rectangle(-110.9,-161.4,261,336)];


(lib.hero1_sinyak_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_sinyak_img();
	this.instance.setTransform(-65,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-47,130,94);
p.frameBounds = [rect];


(lib.hero1_shadows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_shadows1_img();
	this.instance.setTransform(-174,-201.5);

	this.instance_1 = new lib.hero1_shadows2_img();
	this.instance_1.setTransform(-174,-201.5);

	this.instance_2 = new lib.hero1_shadows3_img();
	this.instance_2.setTransform(-174,-201.5);

	this.instance_3 = new lib.hero1_shadows4_img();
	this.instance_3.setTransform(-174,-201.5);

	this.instance_4 = new lib.hero1_shadows5_img();
	this.instance_4.setTransform(-174,-201.5);

	this.instance_5 = new lib.hero1_shadows6_img();
	this.instance_5.setTransform(-174,-201.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-174,-201.5,348,403);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_scale_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_scale_img();
	this.instance.setTransform(-38,-58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-58.5,76,117);
p.frameBounds = [rect];


(lib.hero1_prish2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_prish2_img();
	this.instance.setTransform(-23.5,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23.5,-23.5,47,47);
p.frameBounds = [rect];


(lib.hero1_prish1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_prish1_img();
	this.instance.setTransform(-23.5,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23.5,-23.5,47,47);
p.frameBounds = [rect];


(lib.hero1_lips0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips0_img();
	this.instance.setTransform(-174,-201.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-174,-201.5,348,403);
p.frameBounds = [rect];


(lib.hero1_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_lips1_img();
	this.instance.setTransform(-174,-201.5);

	this.instance_1 = new lib.hero1_lips2_img();
	this.instance_1.setTransform(-174,-201.5);

	this.instance_2 = new lib.hero1_lips3_img();
	this.instance_2.setTransform(-174,-201.5);

	this.instance_3 = new lib.hero1_lips4_img();
	this.instance_3.setTransform(-174,-201.5);

	this.instance_4 = new lib.hero1_lips5_img();
	this.instance_4.setTransform(-174,-201.5);

	this.instance_5 = new lib.hero1_lips6_img();
	this.instance_5.setTransform(-174,-201.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

	// graph
	this.instance_6 = new lib.hero1_lips0_img();
	this.instance_6.setTransform(-174,-201.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-174,-201.5,348,403);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_leaf4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_leaf4_img();
	this.instance.setTransform(-29,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29,-31,58,62);
p.frameBounds = [rect];


(lib.hero1_leaf3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_leaf3_img();
	this.instance.setTransform(-26,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-62,52,124);
p.frameBounds = [rect];


(lib.hero1_leaf2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_leaf2_img();
	this.instance.setTransform(-73.5,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.5,-53,147,106);
p.frameBounds = [rect];


(lib.hero1_leaf1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_leaf1_img();
	this.instance.setTransform(-62.5,-107);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.5,-107,125,214);
p.frameBounds = [rect];


(lib.hero1_head_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_head_img();
	this.instance.setTransform(-174,-201.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-174,-201.5,348,403);
p.frameBounds = [rect];


(lib.hero1_hand1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hand1_img();
	this.instance.setTransform(-42.5,-30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.5,-30.5,85,61);
p.frameBounds = [rect];


(lib.hero1_hair0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hair0_img();
	this.instance.setTransform(-331,-370);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-331,-370,662,740);
p.frameBounds = [rect];


(lib.hero1_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-137.5,-21.5);

	this.instance_1 = new lib.hero1_hair2_img();
	this.instance_1.setTransform(-137,-40);

	this.instance_2 = new lib.hero1_hair3_img();
	this.instance_2.setTransform(-89,-14);

	this.instance_3 = new lib.hero1_hair4_img();
	this.instance_3.setTransform(-130,-58);

	this.instance_4 = new lib.hero1_hair5_img();
	this.instance_4.setTransform(-116,-48);

	this.instance_5 = new lib.hero1_hair6_img();
	this.instance_5.setTransform(-98,-44);

	this.instance_6 = new lib.hero1_hair7_img();
	this.instance_6.setTransform(-83.4,-43);

	this.instance_7 = new lib.hero1_hair8_img();
	this.instance_7.setTransform(-103,-61);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-137.5,-21.5,281,314);
p.frameBounds = [rect, new cjs.Rectangle(-137,-40,281,314), new cjs.Rectangle(-89,-14,177,197), new cjs.Rectangle(-130,-58,249,315), new cjs.Rectangle(-116,-48,229,298), new cjs.Rectangle(-98,-44,202,246), new cjs.Rectangle(-83.4,-43,171,168), new cjs.Rectangle(-103,-61,209,189), null];


(lib.hero1_fringe0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fringe0_img();
	this.instance.setTransform(-286.5,-194.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-286.5,-194.5,573,389);
p.frameBounds = [rect];


(lib.hero1_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_fringe1_img();
	this.instance.setTransform(-121,-82.5);

	this.instance_1 = new lib.hero1_fringe2_img();
	this.instance_1.setTransform(-102.5,-73.5);

	this.instance_2 = new lib.hero1_fringe3_img();
	this.instance_2.setTransform(-100.9,-79);

	this.instance_3 = new lib.hero1_fringe4_img();
	this.instance_3.setTransform(-125.4,-70);

	this.instance_4 = new lib.hero1_fringe5_img();
	this.instance_4.setTransform(-135.9,-69);

	this.instance_5 = new lib.hero1_fringe6_img();
	this.instance_5.setTransform(-93.5,-62.5);

	this.instance_6 = new lib.hero1_fringe7_img();
	this.instance_6.setTransform(-104.4,-69);

	this.instance_7 = new lib.hero1_fringe8_img();
	this.instance_7.setTransform(-113,-71.5);

	this.instance_8 = new lib.hero1_fringe9_img();
	this.instance_8.setTransform(-83,-70.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121,-82.5,242,165);
p.frameBounds = [rect, new cjs.Rectangle(-102.5,-73.5,201,131), new cjs.Rectangle(-100.9,-79,198,198), new cjs.Rectangle(-125.4,-70,271,289), new cjs.Rectangle(-135.9,-69,278,303), new cjs.Rectangle(-93.5,-62.5,185,203), new cjs.Rectangle(-104.4,-69,191,185), new cjs.Rectangle(-113,-71.5,219,190), new cjs.Rectangle(-83,-70.5,163,132)];


(lib.hero1_eyes0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyes0_img();
	this.instance.setTransform(-174,-201.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-174,-201.5,348,403);
p.frameBounds = [rect];


(lib.hero1_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_eyes1_img();
	this.instance.setTransform(-174,-201.5);

	this.instance_1 = new lib.hero1_eyes2_img();
	this.instance_1.setTransform(-174,-201.5);

	this.instance_2 = new lib.hero1_eyes3_img();
	this.instance_2.setTransform(-174,-201.5);

	this.instance_3 = new lib.hero1_eyes4_img();
	this.instance_3.setTransform(-174,-201.5);

	this.instance_4 = new lib.hero1_eyes5_img();
	this.instance_4.setTransform(-174,-201.5);

	this.instance_5 = new lib.hero1_eyes6_img();
	this.instance_5.setTransform(-174,-201.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-174,-201.5,348,403);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_eyebrows1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyebrows1_img();
	this.instance.setTransform(-174,-201.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-174,-201.5,348,403);
p.frameBounds = [rect];


(lib.hero1_eyebrows0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyebrows0_img();
	this.instance.setTransform(-75,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-20.5,150,41);
p.frameBounds = [rect];


(lib.hero1_eyebrows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_eyebrows1_img();
	this.instance.setTransform(-174,-201.5);

	this.instance_1 = new lib.hero1_eyebrows2_img();
	this.instance_1.setTransform(-174,-201.5);

	this.instance_2 = new lib.hero1_eyebrows3_img();
	this.instance_2.setTransform(-174,-201.5);

	this.instance_3 = new lib.hero1_eyebrows4_img();
	this.instance_3.setTransform(-174,-201.5);

	this.instance_4 = new lib.hero1_eyebrows5_img();
	this.instance_4.setTransform(-174,-201.5);

	this.instance_5 = new lib.hero1_eyebrows6_img();
	this.instance_5.setTransform(-174,-201.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-174,-201.5,348,403);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_crown_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_crown1_img();
	this.instance.setTransform(-47,-45.5);

	this.instance_1 = new lib.hero1_crown2_img();
	this.instance_1.setTransform(-43.9,-40.7);

	this.instance_2 = new lib.hero1_crown3_img();
	this.instance_2.setTransform(-50.4,-29.7);

	this.instance_3 = new lib.hero1_crown4_img();
	this.instance_3.setTransform(-51.4,-39.2);

	this.instance_4 = new lib.hero1_crown5_img();
	this.instance_4.setTransform(-51.9,-40.2);

	this.instance_5 = new lib.hero1_crown6_img();
	this.instance_5.setTransform(-49,-24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-45.5,94,91);
p.frameBounds = [rect, new cjs.Rectangle(-43.9,-40.7,88,85), new cjs.Rectangle(-50.4,-29.7,94,75), new cjs.Rectangle(-51.4,-39.2,100,82), new cjs.Rectangle(-51.9,-40.2,96,85), new cjs.Rectangle(-49,-24.2,96,78), null];


(lib.hero1_brecets_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_brecets_img();
	this.instance.setTransform(-56,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56,-9,112,18);
p.frameBounds = [rect];


(lib.hero1_boby1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_boby1_img();
	this.instance.setTransform(-119,-101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119,-101.5,238,203);
p.frameBounds = [rect];


(lib.hero1_boby0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_boby0_img();
	this.instance.setTransform(-179,-142);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-179,-142,358,284);
p.frameBounds = [rect];


(lib.hero_main_2_top_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_top1_img();
	this.instance.setTransform(-64.5,-73);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.5,-73,129,146);
p.frameBounds = [rect];


(lib.hero_main_2_shadows_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shadows1_img();
	this.instance.setTransform(-171.5,-207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-207,343,414);
p.frameBounds = [rect];


(lib.hero_main_2_lips_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_lips1_img();
	this.instance.setTransform(-171.5,-207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero2_lips0_img();
	this.instance_1.setTransform(-171.5,-207);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-207,343,414);
p.frameBounds = [rect];


(lib.hero_main_2_head_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_head_img();
	this.instance.setTransform(-171.5,-207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-207,343,414);
p.frameBounds = [rect];


(lib.hero_main_2_hair_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_hair1_img();
	this.instance.setTransform(-161,-85.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-161,-85.7,327,244);
p.frameBounds = [rect];


(lib.hero_main_2_fringe_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe1_img();
	this.instance.setTransform(-121,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121,-87,242,174);
p.frameBounds = [rect];


(lib.hero_main_2_eyes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes1_img();
	this.instance.setTransform(-171.5,-207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-207,343,414);
p.frameBounds = [rect];


(lib.hero_main_2_eyebrows_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyebrows1_img();
	this.instance.setTransform(-171.5,-207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171.5,-207,343,414);
p.frameBounds = [rect];


(lib.hero_main_2_bottom_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bottom1_img();
	this.instance.setTransform(-80.5,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.5,-57,161,114);
p.frameBounds = [rect];


(lib.hero_main_2_boby1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_boby1_img();
	this.instance.setTransform(-191,-194);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-191,-194,382,388);
p.frameBounds = [rect];


(lib.hero_main_2_accessory_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory1_img();
	this.instance.setTransform(-70.5,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.5,-72,141,144);
p.frameBounds = [rect];


(lib.hero_main_1_top_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_top0_img();
	this.instance.setTransform(-39.5,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.5,-21,79,42);
p.frameBounds = [rect];


(lib.hero_main_1_tale_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_tale1_img();
	this.instance.setTransform(-122.5,-150.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.5,-150.5,245,301);
p.frameBounds = [rect];


(lib.hero_main_1_shadowsl_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shadows1_img();
	this.instance.setTransform(-174,-201.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-174,-201.5,348,403);
p.frameBounds = [rect];


(lib.hero_main_1_lips_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_lips1_img();
	this.instance.setTransform(-174,-201.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hero1_lips0_img();
	this.instance_1.setTransform(-174,-201.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-174,-201.5,348,403);
p.frameBounds = [rect];


(lib.hero_main_1_head_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_head_img();
	this.instance.setTransform(-174,-201.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-174,-201.5,348,403);
p.frameBounds = [rect];


(lib.hero_main_1_hand1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hand1_img();
	this.instance.setTransform(-42.5,-30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.5,-30.5,85,61);
p.frameBounds = [rect];


(lib.hero_main_1_hair_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-137.5,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-137.5,-21.5,281,314);
p.frameBounds = [rect];


(lib.hero_main_1_fringe_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fringe1_img();
	this.instance.setTransform(-121,-82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121,-82.5,242,165);
p.frameBounds = [rect];


(lib.hero_main_1_eyes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyes1_img();
	this.instance.setTransform(-174,-201.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-174,-201.5,348,403);
p.frameBounds = [rect];


(lib.hero_main_1_eyebrows_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyebrows1_img();
	this.instance.setTransform(-174,-201.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-174,-201.5,348,403);
p.frameBounds = [rect];


(lib.hero_main_1_boby1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_boby1_img();
	this.instance.setTransform(-119,-101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119,-101.5,238,203);
p.frameBounds = [rect];


(lib.gift5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gift5_img();
	this.instance.setTransform(-107,-97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107,-97.5,214,195);
p.frameBounds = [rect];


(lib.gift4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gift4_img();
	this.instance.setTransform(-103,-89.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103,-89.5,206,179);
p.frameBounds = [rect];


(lib.gift3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gift3_img();
	this.instance.setTransform(-101.5,-111.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.5,-111.5,203,223);
p.frameBounds = [rect];


(lib.gift2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gift2_img();
	this.instance.setTransform(-75,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-43.5,150,87);
p.frameBounds = [rect];


(lib.gift1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gift1_img();
	this.instance.setTransform(-69,-62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69,-62.5,138,125);
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


(lib.fish1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fish1_img();
	this.instance.setTransform(-82.5,-33.8,1,1,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.5,-70.5,165.1,141.1);
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


(lib.facemask1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.facemask1_img();
	this.instance.setTransform(-122.5,-152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.5,-152.5,245,305);
p.frameBounds = [rect];


(lib.decor_location_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_location_img();
	this.instance.setTransform(-180,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect];


(lib.current_makeup_3_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_makeup_3_0_2_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.current_makeup_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_makeup_1_1_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.current_makeup_2_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_makeup_2_0_2_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.current_makeup_2_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_makeup_2_0_1_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.current_makeup_1_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_makeup_1_0_2_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.current_makeup_1_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_makeup_1_0_1_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.current_location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_1_img();
	this.instance.setTransform(-180,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect];


(lib.current_hairstyle_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_hairstyle_1_img();
	this.instance.setTransform(-140,-132,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-132,280,264);
p.frameBounds = [rect];


(lib.current_hairstyle_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_hairstyle_1_2_img();
	this.instance.setTransform(-128,-128,0.914,0.914);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect];


(lib.current_hairstyle_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_hairstyle_0_img();
	this.instance.setTransform(-140,-132,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-132,280,264.1);
p.frameBounds = [rect];


(lib.current_hairstyle_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_hairstyle_0_2_img();
	this.instance.setTransform(-125,-125,0.893,0.893);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-125,250,250);
p.frameBounds = [rect];


(lib.crab2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crab2_img();
	this.instance.setTransform(-28,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-35.5,56,71);
p.frameBounds = [rect];


(lib.crab1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crab1_img();
	this.instance.setTransform(-123,-106.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123,-106.5,246,213);
p.frameBounds = [rect];


(lib.circles_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.circles_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.circle3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.circle3_img();
	this.instance.setTransform(-20,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-22.5,40,45);
p.frameBounds = [rect];


(lib.circle2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.circle2_img();
	this.instance.setTransform(-120,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-40,240,80);
p.frameBounds = [rect];


(lib.circle1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_glasses_img();
	this.instance.setTransform(-73.2,-88,0.203,0.203,45.2);

	this.instance_1 = new lib.circle_item8_img();
	this.instance_1.setTransform(-23.1,-95.5);

	this.instance_2 = new lib.circle_item7_img();
	this.instance_2.setTransform(32.4,-65.6);

	this.instance_3 = new lib.circle_item6_img();
	this.instance_3.setTransform(57.9,-18.1);

	this.instance_4 = new lib.circle_item5_img();
	this.instance_4.setTransform(36.5,38);

	this.instance_5 = new lib.circle_item4_img();
	this.instance_5.setTransform(-22.1,68.9);

	this.instance_6 = new lib.circle_item2_img();
	this.instance_6.setTransform(-85.5,42.4);

	this.instance_7 = new lib.circle_item1_img();
	this.instance_7.setTransform(-106.6,-18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_8 = new lib.circle1_img();
	this.instance_8.setTransform(-159,-162);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-159,-162,318,324);
p.frameBounds = [rect];


(lib.circle_arrow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.circle_arrow_1_img();
	this.instance.setTransform(-110,-100);

	this.instance_1 = new lib.circle_arrow_2_img();
	this.instance_1.setTransform(-110,-100);

	this.instance_2 = new lib.circle_arrow_3_img();
	this.instance_2.setTransform(-110,-100);

	this.instance_3 = new lib.circle_arrow_4_img();
	this.instance_3.setTransform(-110,-100);

	this.instance_4 = new lib.circle_arrow_5_img();
	this.instance_4.setTransform(-110,-100);

	this.instance_5 = new lib.circle_arrow_6_img();
	this.instance_5.setTransform(-110,-100);

	this.instance_6 = new lib.circle_arrow_7_img();
	this.instance_6.setTransform(-110,-100);

	this.instance_7 = new lib.circle_arrow_8_img();
	this.instance_7.setTransform(-110,-100);

	this.instance_8 = new lib.circle_arrow_9_img();
	this.instance_8.setTransform(-110,-100);

	this.instance_9 = new lib.circle_arrow_10_img();
	this.instance_9.setTransform(-110,-100);

	this.instance_10 = new lib.circle_arrow_11_img();
	this.instance_10.setTransform(-110,-100);

	this.instance_11 = new lib.circle_arrow_12_img();
	this.instance_11.setTransform(-110,-100);

	this.instance_12 = new lib.circle_arrow_13_img();
	this.instance_12.setTransform(-110,-100);

	this.instance_13 = new lib.circle_arrow_14_img();
	this.instance_13.setTransform(-110,-100);

	this.instance_14 = new lib.circle_arrow_15_img();
	this.instance_14.setTransform(-110,-100);

	this.instance_15 = new lib.circle_arrow_16_img();
	this.instance_15.setTransform(-110,-100);

	this.instance_16 = new lib.circle_arrow_17_img();
	this.instance_16.setTransform(-110,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_16}]},2).to({state:[]},2).wait(2));

	// graph
	this.instance_17 = new lib.circle_arrow_0_img();
	this.instance_17.setTransform(-120,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(38));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-110,240,220);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.chip1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.chip1_img();
	this.instance.setTransform(-7.6,-38.2,0.228,0.228);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-7.6,-38.2,15.7,75.4);
p.frameBounds = [rect];


(lib.chip0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chip0_img();
	this.instance.setTransform(-83.3,-56.6,0.55,0.55,-22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.3,-99.1,166.8,198.3);
p.frameBounds = [rect];


(lib.checkpoint_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("EgHzAnEMAAAhOHIPnAAMAAABOHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-250,100,500);
p.frameBounds = [rect];


(lib.bottom_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_tale6_img();
	this.instance.setTransform(-130.5,-168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtqGhIkMmrIkZyFICJogINLhYID5DzIhdZDIFPKFIQ8rkIEkZQIu9Dog");
	this.shape.setTransform(0.7,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-141.7,-176,284.9,360.1);
p.frameBounds = [rect];


(lib.bottom_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_tale5_img();
	this.instance.setTransform(160,-132,0.853,0.853,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A66PoIG24wICihDIXoUcMAFbggfIAdgMIO9BUIg/XIIllJ1I71Kkg");
	this.shape.setTransform(-3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-175.3,-142.2,344.7,287.2);
p.frameBounds = [rect];


(lib.bottom_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_tale4_img();
	this.instance.setTransform(160,-114,0.863,0.862,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A7CLkIL+1fIYdp3IRfCbIALSGIuvPHI/gD9g");
	this.shape.setTransform(-0.9,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-174,-127.1,346.3,253.5);
p.frameBounds = [rect];


(lib.bottom_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_tale3_img();
	this.instance.setTransform(-150,-119,0.865,0.864);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AzdAMIlis6ICfmCIOqhJICkCTIAtNuIElEzILfwnINhLmImLXIIsVA4g");
	this.shape.setTransform(0.4,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-159.6,-127.6,320,254.9);
p.frameBounds = [rect];


(lib.bottom_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_tale2_img();
	this.instance.setTransform(56.8,-140,0.909,0.909,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqlWhMACNgtnIS+AlMgECAtog");
	this.shape.setTransform(1.2,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.6,-147.1,135.7,295.8);
p.frameBounds = [rect];


(lib.bottom_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_tale1_img();
	this.instance.setTransform(-122.5,-150.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AAUYOIqyrsIinwZIC81AIPHAXIDCH0IhoF2InsRiIE8KJIGxBGICtDaIjNDjg");
	this.shape.setTransform(-44.6,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128.4,-157.1,250.9,318.6);
p.frameBounds = [rect];


(lib.bottle_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottle_img();
	this.instance.setTransform(-25,-78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-78.5,50,157);
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


(lib.arc_arrow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.arc_arrow_1_img();
	this.instance.setTransform(-110,-80);

	this.instance_1 = new lib.arc_arrow_2_img();
	this.instance_1.setTransform(-110,-80);

	this.instance_2 = new lib.arc_arrow_3_img();
	this.instance_2.setTransform(-110,-80);

	this.instance_3 = new lib.arc_arrow_4_img();
	this.instance_3.setTransform(-110,-80);

	this.instance_4 = new lib.arc_arrow_5_img();
	this.instance_4.setTransform(-110,-80);

	this.instance_5 = new lib.arc_arrow_6_img();
	this.instance_5.setTransform(-110,-80);

	this.instance_6 = new lib.arc_arrow_7_img();
	this.instance_6.setTransform(-110,-80);

	this.instance_7 = new lib.arc_arrow_8_img();
	this.instance_7.setTransform(-110,-80);

	this.instance_8 = new lib.arc_arrow_9_img();
	this.instance_8.setTransform(-110,-80);

	this.instance_9 = new lib.arc_arrow_10_img();
	this.instance_9.setTransform(-110,-80);

	this.instance_10 = new lib.arc_arrow_11_img();
	this.instance_10.setTransform(-110,-80);

	this.instance_11 = new lib.arc_arrow_12_img();
	this.instance_11.setTransform(-110,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[]},2).wait(2));

	// graph
	this.instance_12 = new lib.arc_arrow_0_img();
	this.instance_12.setTransform(-120,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-90,240,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_for_pointer_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.animation_for_pointer_1_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.accessory_12_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory12_img();
	this.instance.setTransform(-65,-68,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqwKVIhliwIGyzpIHlAAIE5FYIFbPQImZDhg");
	this.shape.setTransform(2.5,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-77.9,158.1,154.8);
p.frameBounds = [rect];


(lib.accessory_11_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory11_img();
	this.instance.setTransform(-63,-63,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqjKkIhZl1IGhwKIKcAAIG8RZIiiFeg");
	this.shape.setTransform(-0.1,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.6,-70.9,153.1,146.5);
p.frameBounds = [rect];


(lib.accessory_10_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory10_img();
	this.instance.setTransform(-62,-68,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqcKLIg+kAICirDIE6naIHMAfIINOdIjEJpg");
	this.shape.setTransform(4.3,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.7,-80.1,146.2,157.6);
p.frameBounds = [rect];


(lib.accessory_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory9_img();
	this.instance.setTransform(-60,-63,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqIJuIh+kRIGmxIIH5ARIJuSKImwE8g");
	this.shape.setTransform(4.5,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73,-73.2,155.1,149.8);
p.frameBounds = [rect];


(lib.accessory_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory8_img();
	this.instance.setTransform(-59,-63,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArXKBICOuzIFRnOIGNAdIGhHwICiMkIlIDQg");
	this.shape.setTransform(3.9,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.9,-78.1,145.7,153.9);
p.frameBounds = [rect];


(lib.accessory_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory7_img();
	this.instance.setTransform(-59,-67,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AquHrIFAzQIJkgCIFqKXIBPHnIjHFKIvCAHg");
	this.shape.setTransform(-0.7,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.4,-75.3,137.5,149);
p.frameBounds = [rect];


(lib.accessory_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory6_img();
	this.instance.setTransform(-62,-70,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqALAIhzjXIFvxZIFhjNIGzD2IFkTTIklCyg");
	this.shape.setTransform(0.6,-3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-86,151.3,166);
p.frameBounds = [rect];


(lib.accessory_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_crown6_img();
	this.instance.setTransform(-48,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqIKKIAA0TIURAAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.accessory_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory5_img();
	this.instance.setTransform(-62,-67,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApbKFIiYmkIHyvdIHiA3IIUQRIksGxg");
	this.shape.setTransform(0.8,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.8,-76,151.4,153.2);
p.frameBounds = [rect];


(lib.accessory_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_crown5_img();
	this.instance.setTransform(-48,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqIKKIAA0TIURAAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.accessory_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory4_img();
	this.instance.setTransform(-57,-60,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkgKTIlwi1IDbtkIESkWIH9AjIE3PsIiYEqg");
	this.shape.setTransform(0.6,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.1,-64.9,131.5,133.9);
p.frameBounds = [rect];


(lib.accessory_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_crown4_img();
	this.instance.setTransform(-50,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqIKKIAA0TIURAAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.accessory_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory3_img();
	this.instance.setTransform(-40.5,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlyM4IkJ0QIT3lmIlbZ9g");
	this.shape.setTransform(8.1,-6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.6,-89.3,127.4,166.3);
p.frameBounds = [rect];


(lib.accessory_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_crown3_img();
	this.instance.setTransform(-47,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqIKKIAA0TIURAAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.accessory_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory2_img();
	this.instance.setTransform(-38,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkRLIIkAzAINFjUIDfEAIi6SZg");
	this.shape.setTransform(-0.5,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.6,-73.5,106.2,143.4);
p.frameBounds = [rect];


(lib.accessory_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_crown2_img();
	this.instance.setTransform(-44,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqIKKIAA0TIURAAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.accessory_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory1_img();
	this.instance.setTransform(-70.5,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Am3NKImurZIMhu+IOqOkIn6L3g");
	this.shape.setTransform(1.2,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.8,-85.7,174.1,169.2);
p.frameBounds = [rect];


(lib.accessory_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_crown1_img();
	this.instance.setTransform(-47,-45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqIKKIAA0TIURAAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-65,130,130);
p.frameBounds = [rect];


(lib.curtain_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eh8+Au4MAAAhdvMD59AAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
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
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("Eh8+Au4MAAAhdvMD59AAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
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
	this.instance.setTransform(-26,-26,0.929,0.929);

	this.instance_1 = new lib.gravity_explosion_2_img();
	this.instance_1.setTransform(-24,-24);

	this.instance_2 = new lib.gravity_explosion_3_img();
	this.instance_2.setTransform(-24,-24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26,-26,52,52);
p.frameBounds = [rect, rect=new cjs.Rectangle(-24,-24,48,48), rect];


(lib.glitter_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.glitter_1_2_img();
	this.instance.setTransform(-25,-25);

	this.instance_1 = new lib.glitter_2_2_img();
	this.instance_1.setTransform(-25,-25);

	this.instance_2 = new lib.glitter_3_2_img();
	this.instance_2.setTransform(-25,-25);

	this.instance_3 = new lib.glitter_4_2_img();
	this.instance_3.setTransform(-9.1,-34.1,1,1,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{rotation:0,x:-25,y:-25}}]}).to({state:[{t:this.instance_1,p:{rotation:0,x:-25}}]},2).to({state:[{t:this.instance_2,p:{rotation:0,x:-25}}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_2,p:{rotation:90,x:25}}]},2).to({state:[{t:this.instance_1,p:{rotation:90,x:25}}]},2).to({state:[{t:this.instance,p:{rotation:60,x:9.2,y:-34.1}}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-34.1,-34.1,68.3,68.3), rect, rect=new cjs.Rectangle(-25,-25,50,50), rect, rect, rect, rect=new cjs.Rectangle(-34.1,-34.1,68.3,68.3), rect];


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
	this.instance.setTransform(-32,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-32,64,64);
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


(lib.nav_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_3_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.nav_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_2_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.nav_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_1_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.nav_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_3_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.nav_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_2_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.nav_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_1_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
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


(lib.wardrobe_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.wardrobe_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-260,520,520);
p.frameBounds = [rect];


(lib.title_filter_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.title_filter_body_0_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);
	this.body_mc.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1.5,1.5,228,38);
p.frameBounds = [rect];


(lib.shadows_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.7,0.7,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-28,56,56);
p.frameBounds = [rect];


(lib.prishi_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_prish1_mc();
	this.instance.setTransform(-56,-149.2);

	this.instance_1 = new lib.hero1_prish1_mc();
	this.instance_1.setTransform(37,149.2);

	this.instance_2 = new lib.hero1_prish1_mc();
	this.instance_2.setTransform(-2,38.2);

	this.instance_3 = new lib.hero1_prish1_mc();
	this.instance_3.setTransform(-12.9,-45.3);

	this.instance_4 = new lib.hero1_prish1_mc();
	this.instance_4.setTransform(56,-131.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.5,-172.7,159,345.5);
p.frameBounds = [rect];


(lib.pearloyster_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pearloyster_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// animation
	this.instance_1 = new lib.pearloyster_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.95,y:5},29).to({scaleY:1,y:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-100,-100,200,200.1), rect, rect, rect, rect, rect=new cjs.Rectangle(-100,-100,200,200), rect, rect, rect, rect, rect=new cjs.Rectangle(-100,-100,200,200.1), rect, rect, rect, rect, rect=new cjs.Rectangle(-100,-100,200,200), rect, rect, rect, rect, rect=new cjs.Rectangle(-100,-100,200,200.1), rect, rect, rect, new cjs.Rectangle(-100,-100,200,200), new cjs.Rectangle(-100,-100,200,200.1), new cjs.Rectangle(-100,-100,200,200), rect=new cjs.Rectangle(-100,-100,200,200.1), rect, new cjs.Rectangle(-100,-100,200,200), rect=new cjs.Rectangle(-100,-100,200,200.1), rect, new cjs.Rectangle(-100,-100,200,200), rect=new cjs.Rectangle(-100,-100,200,200.1), rect, new cjs.Rectangle(-100,-100,200,200), rect=new cjs.Rectangle(-100,-100,200,200.1), rect, new cjs.Rectangle(-100,-100,200,200), rect=new cjs.Rectangle(-100,-100,200,200.1), rect, new cjs.Rectangle(-100,-100,200,200), rect=new cjs.Rectangle(-100,-100,200,200.1), rect, new cjs.Rectangle(-100,-100,200,200), rect=new cjs.Rectangle(-100,-100,200,200.1), rect, rect, rect, rect, new cjs.Rectangle(-100,-100,200,200), rect=new cjs.Rectangle(-100,-100,200,200.1), rect, rect, new cjs.Rectangle(-100,-100,200,200)];


(lib.lips_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.7,0.7,0,0,0,0.1,-0.1);

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


(lib.hero1_prishi_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_prish1_mc();
	this.instance.setTransform(-92,-146.7);

	this.instance_1 = new lib.hero1_prish1_mc();
	this.instance_1.setTransform(1,146.7);

	this.instance_2 = new lib.hero1_prish1_mc();
	this.instance_2.setTransform(-15,9.7);

	this.instance_3 = new lib.hero1_prish1_mc();
	this.instance_3.setTransform(-68.9,114.2);

	this.instance_4 = new lib.hero1_prish1_mc();
	this.instance_4.setTransform(92,-129.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115.5,-170.2,231,340.5);
p.frameBounds = [rect];


(lib.hero_main_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero_main_2_accessory_mc();
	this.instance.setTransform(-151.5,-94.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-105.7},29).to({y:-94.7},30).wait(1));

	// animation
	this.instance_1 = new lib.hero_main_2_fringe_mc();
	this.instance_1.setTransform(-3,-232.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:4.2,x:10.2,y:-242.8},29).to({rotation:0,x:-3,y:-232.5},30).wait(1));

	// animation
	this.instance_2 = new lib.hero_main_2_eyebrows_mc();
	this.instance_2.setTransform(-0.7,-173.3,0.587,0.587);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:4.2,x:8.1,y:-183.6},29).to({rotation:0,x:-0.7,y:-173.3},30).wait(1));

	// animation
	this.instance_3 = new lib.hero_main_2_eyes_mc();
	this.instance_3.setTransform(-0.7,-173.3,0.587,0.587);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:4.2,x:8.1,y:-183.6},29).to({rotation:0,x:-0.7,y:-173.3},30).wait(1));

	// animation
	this.instance_4 = new lib.hero_main_2_shadows_mc();
	this.instance_4.setTransform(-0.7,-173.3,0.587,0.587);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:4.2,x:8.1,y:-183.6},29).to({rotation:0,x:-0.7,y:-173.3},30).wait(1));

	// animation
	this.instance_5 = new lib.hero_main_2_lips_mc();
	this.instance_5.setTransform(-0.7,-173.3,0.587,0.587);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:4.2,x:8.1,y:-183.6},29).to({rotation:0,x:-0.7,y:-173.3},30).wait(1));

	// animation
	this.instance_6 = new lib.hero_main_2_head_mc();
	this.instance_6.setTransform(-0.7,-173.3,0.587,0.587);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:4.2,x:8.1,y:-183.6},29).to({rotation:0,x:-0.7,y:-173.3},30).wait(1));

	// animation
	this.instance_7 = new lib.hero_main_2_top_mc();
	this.instance_7.setTransform(3,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:17.5},29).to({y:28.5},30).wait(1));

	// animation
	this.instance_8 = new lib.hero_main_2_bottom_mc();
	this.instance_8.setTransform(0,166.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:155.3},29).to({y:166.3},30).wait(1));

	// animation
	this.instance_9 = new lib.hero_main_2_boby1_mc();
	this.instance_9.setTransform(0,125.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:114.4},29).to({y:125.4},30).wait(1));

	// animation
	this.instance_10 = new lib.hero_main_2_hair_mc();
	this.instance_10.setTransform(-3,-232.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:4.2,x:10.2,y:-242.8},29).to({rotation:0,x:-3,y:-232.5},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222,-319.5,413.1,638.9);
p.frameBounds = [rect, new cjs.Rectangle(-222,-319.9,413.1,638.9), new cjs.Rectangle(-222,-320.7,413.1,639.3), new cjs.Rectangle(-222,-321.1,413.1,639.4), new cjs.Rectangle(-222,-322,413.1,639.9), new cjs.Rectangle(-222,-322.4,413.1,640), new cjs.Rectangle(-222,-323.2,413.1,640.4), new cjs.Rectangle(-222,-324.1,413.1,640.9), new cjs.Rectangle(-222,-324.5,413.1,640.9), new cjs.Rectangle(-222,-325.3,413.1,641.3), new cjs.Rectangle(-222,-325.7,413.1,641.4), new cjs.Rectangle(-222,-326.6,413.1,641.9), new cjs.Rectangle(-222,-327.4,413.1,642.3), new cjs.Rectangle(-222,-327.8,413.1,642.3), new cjs.Rectangle(-222,-328.8,413.1,642.9), new cjs.Rectangle(-222,-329.2,413.1,643), new cjs.Rectangle(-222,-330.2,413.1,643.6), new cjs.Rectangle(-222,-330.7,413.1,643.7), new cjs.Rectangle(-222,-331.6,413.1,644.2), new cjs.Rectangle(-222,-332.6,413.1,644.8), new cjs.Rectangle(-222,-333.1,413.1,644.9), new cjs.Rectangle(-222,-334,413.1,645.5), new cjs.Rectangle(-222,-334.5,413.1,645.6), new cjs.Rectangle(-222,-335.5,413.1,646.2), new cjs.Rectangle(-222,-336.4,413.1,646.8), new cjs.Rectangle(-222,-336.9,413.1,646.8), new cjs.Rectangle(-222,-337.9,413.1,647.5), new cjs.Rectangle(-222,-338.3,413.1,647.5), new cjs.Rectangle(-222,-339.3,413.1,648.1), new cjs.Rectangle(-222,-340.2,413.1,648.7), new cjs.Rectangle(-222,-339.3,413.1,648.1), new cjs.Rectangle(-222,-338.3,413.1,647.5), new cjs.Rectangle(-222,-337.9,413.1,647.4), new cjs.Rectangle(-222,-336.9,413.1,646.8), new cjs.Rectangle(-222,-336.5,413.1,646.8), new cjs.Rectangle(-222,-335.5,413.1,646.2), new cjs.Rectangle(-222,-335.1,413.1,646.1), new cjs.Rectangle(-222,-334.2,413.1,645.6), new cjs.Rectangle(-222,-333.2,413.1,644.9), new cjs.Rectangle(-222,-332.7,413.1,644.8), new cjs.Rectangle(-222,-331.8,413.1,644.3), new cjs.Rectangle(-222,-331.4,413.1,644.2), new cjs.Rectangle(-222,-330.4,413.1,643.6), new cjs.Rectangle(-222,-329.9,413.1,643.5), new cjs.Rectangle(-222,-329,413.1,642.9), new cjs.Rectangle(-222,-328.1,413.1,642.4), new cjs.Rectangle(-222,-327.6,413.1,642.3), new cjs.Rectangle(-222,-326.8,413.1,641.8), new cjs.Rectangle(-222,-326.4,413.1,641.8), new cjs.Rectangle(-222,-325.6,413.1,641.4), new cjs.Rectangle(-222,-325.2,413.1,641.3), new cjs.Rectangle(-222,-324.4,413.1,640.8), new cjs.Rectangle(-222,-323.5,413.1,640.4), new cjs.Rectangle(-222,-323.1,413.1,640.3), new cjs.Rectangle(-222,-322.3,413.1,639.9), new cjs.Rectangle(-222,-321.9,413.1,639.8), new cjs.Rectangle(-222,-321.1,413.1,639.5), new cjs.Rectangle(-222,-320.7,413.1,639.3), new cjs.Rectangle(-222,-319.8,413.1,638.9), new cjs.Rectangle(-222,-319.5,413.1,638.9)];


(lib.hero_main_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero_main_1_fringe_mc();
	this.instance.setTransform(-25,-227.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-4.7,x:-34.6,y:-209.2},49).to({rotation:0,x:-25,y:-227.2},50).wait(1));

	// animation
	this.instance_1 = new lib.hero_main_1_eyebrows_mc();
	this.instance_1.setTransform(-26.4,-189.7,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-4.7,x:-32.9,y:-171.7},49).to({rotation:0,x:-26.4,y:-189.7},50).wait(1));

	// animation
	this.instance_2 = new lib.hero_main_1_eyes_mc();
	this.instance_2.setTransform(-26.4,-189.7,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-4.7,x:-32.9,y:-171.7},49).to({rotation:0,x:-26.4,y:-189.7},50).wait(1));

	// animation
	this.instance_3 = new lib.hero_main_1_shadowsl_mc();
	this.instance_3.setTransform(-26.4,-189.7,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-4.7,x:-32.9,y:-171.7},49).to({rotation:0,x:-26.4,y:-189.7},50).wait(1));

	// animation
	this.instance_4 = new lib.hero_main_1_lips_mc();
	this.instance_4.setTransform(-26.4,-189.7,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-4.7,x:-32.9,y:-171.7},49).to({rotation:0,x:-26.4,y:-189.7},50).wait(1));

	// animation
	this.instance_5 = new lib.hero_main_1_head_mc();
	this.instance_5.setTransform(-26.4,-189.7,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-4.7,x:-32.9,y:-171.7},49).to({rotation:0,x:-26.4,y:-189.7},50).wait(1));

	// animation
	this.instance_6 = new lib.hero_main_1_hand1_mc();
	this.instance_6.setTransform(36.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:19.2},49).to({y:1.2},50).wait(1));

	// animation
	this.instance_7 = new lib.hero_main_1_tale_mc();
	this.instance_7.setTransform(40.5,159.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:177.2},49).to({y:159.2},50).wait(1));

	// animation
	this.instance_8 = new lib.hero_main_1_top_mc();
	this.instance_8.setTransform(-27,-52.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:-34.2},49).to({y:-52.2},50).wait(1));

	// animation
	this.instance_9 = new lib.hero_main_1_boby1_mc();
	this.instance_9.setTransform(-40,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:-0.5},49).to({y:-18.5},50).wait(1));

	// animation
	this.instance_10 = new lib.hero_main_1_hair_mc();
	this.instance_10.setTransform(-25,-227.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-4.7,x:-34.6,y:-209.2},49).to({rotation:0,x:-25,y:-227.2},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-162.5,-309.7,325.5,619.3);
p.frameBounds = [rect, new cjs.Rectangle(-162.7,-309.3,325.7,619.4), new cjs.Rectangle(-162.9,-309,325.9,619.4), new cjs.Rectangle(-163.1,-309.1,326.2,619.9), new cjs.Rectangle(-163.4,-308.8,326.4,619.9), new cjs.Rectangle(-163.6,-308.4,326.6,620), new cjs.Rectangle(-163.8,-308.5,326.9,620.4), new cjs.Rectangle(-164,-308.2,327,620.5), new cjs.Rectangle(-164.3,-308.3,327.3,620.9), new cjs.Rectangle(-164.5,-308,327.5,621), new cjs.Rectangle(-164.7,-307.7,327.7,621), new cjs.Rectangle(-165,-307.7,328,621.5), new cjs.Rectangle(-165.2,-307.4,328.2,621.5), new cjs.Rectangle(-165.4,-307.5,328.5,622), new cjs.Rectangle(-165.6,-307.2,328.7,622), new cjs.Rectangle(-165.8,-306.9,328.9,622.1), new cjs.Rectangle(-166.1,-306.9,329.2,622.5), new cjs.Rectangle(-166.3,-306.6,329.4,622.6), new cjs.Rectangle(-166.5,-306.3,329.6,622.6), new cjs.Rectangle(-166.7,-306.3,329.8,623), new cjs.Rectangle(-166.9,-306,330,623.1), new cjs.Rectangle(-167.2,-306.1,330.3,623.5), new cjs.Rectangle(-167.4,-305.8,330.5,623.6), new cjs.Rectangle(-167.6,-305.5,330.7,623.6), new cjs.Rectangle(-167.9,-305.5,330.9,624), new cjs.Rectangle(-168.1,-305.2,331.1,624.1), new cjs.Rectangle(-168.3,-305.3,331.4,624.5), new cjs.Rectangle(-168.5,-305,331.6,624.6), new cjs.Rectangle(-168.8,-304.6,331.8,624.6), new cjs.Rectangle(-169,-304.7,332.1,625.1), new cjs.Rectangle(-169.2,-304.4,332.3,625.1), new cjs.Rectangle(-169.4,-304.1,332.4,625.2), new cjs.Rectangle(-169.6,-304.1,332.7,625.6), new cjs.Rectangle(-169.8,-303.8,332.9,625.6), new cjs.Rectangle(-170.1,-303.9,333.1,626.1), new cjs.Rectangle(-170.3,-303.6,333.3,626.1), new cjs.Rectangle(-170.5,-303.3,333.5,626.2), new cjs.Rectangle(-170.7,-303.3,333.8,626.6), new cjs.Rectangle(-170.9,-303,334,626.7), new cjs.Rectangle(-171.2,-303,334.2,627.1), new cjs.Rectangle(-171.4,-302.7,334.4,627.1), new cjs.Rectangle(-171.6,-302.4,334.6,627.2), new cjs.Rectangle(-171.8,-302.5,334.9,627.6), new cjs.Rectangle(-172,-302.2,335,627.7), new cjs.Rectangle(-172.2,-301.9,335.2,627.7), new cjs.Rectangle(-172.4,-301.8,335.5,628.1), new cjs.Rectangle(-172.6,-301.5,335.7,628.1), new cjs.Rectangle(-172.9,-301.6,335.9,628.6), new cjs.Rectangle(-173.1,-301.3,336.1,628.6), new cjs.Rectangle(-173.4,-301.3,336.4,629), new cjs.Rectangle(-173.1,-301.3,336.1,628.6), new cjs.Rectangle(-172.8,-301.6,335.9,628.6), new cjs.Rectangle(-172.6,-301.5,335.7,628.1), new cjs.Rectangle(-172.5,-301.9,335.5,628.1), new cjs.Rectangle(-172.2,-301.8,335.3,627.7), new cjs.Rectangle(-172,-302.1,335.1,627.6), new cjs.Rectangle(-171.8,-302.4,334.9,627.6), new cjs.Rectangle(-171.6,-302.4,334.6,627.2), new cjs.Rectangle(-171.4,-302.6,334.4,627.1), new cjs.Rectangle(-171.2,-303,334.2,627.1), new cjs.Rectangle(-171,-302.9,334,626.6), new cjs.Rectangle(-170.8,-303.2,333.8,626.6), new cjs.Rectangle(-170.5,-303.1,333.6,626.1), new cjs.Rectangle(-170.3,-303.5,333.4,626.1), new cjs.Rectangle(-170.1,-303.8,333.2,626.1), new cjs.Rectangle(-169.9,-303.7,333,625.7), new cjs.Rectangle(-169.7,-304,332.8,625.6), new cjs.Rectangle(-169.5,-304.3,332.5,625.5), new cjs.Rectangle(-169.3,-304.3,332.3,625.1), new cjs.Rectangle(-169.1,-304.6,332.1,625.1), new cjs.Rectangle(-168.8,-304.5,331.8,624.7), new cjs.Rectangle(-168.6,-304.8,331.7,624.6), new cjs.Rectangle(-168.4,-305.1,331.5,624.5), new cjs.Rectangle(-168.2,-305,331.2,624.1), new cjs.Rectangle(-168,-305.4,331,624.1), new cjs.Rectangle(-167.8,-305.7,330.8,624), new cjs.Rectangle(-167.5,-305.6,330.6,623.6), new cjs.Rectangle(-167.3,-306,330.4,623.6), new cjs.Rectangle(-167,-305.9,330.1,623.1), new cjs.Rectangle(-166.9,-306.2,329.9,623.1), new cjs.Rectangle(-166.7,-306.5,329.7,623), new cjs.Rectangle(-166.4,-306.4,329.4,622.6), new cjs.Rectangle(-166.2,-306.7,329.3,622.5), new cjs.Rectangle(-166,-307,329.1,622.4), new cjs.Rectangle(-165.7,-306.9,328.8,622), new cjs.Rectangle(-165.6,-307.2,328.6,622), new cjs.Rectangle(-165.3,-307.1,328.4,621.5), new cjs.Rectangle(-165.1,-307.5,328.1,621.5), new cjs.Rectangle(-164.9,-307.8,327.9,621.4), new cjs.Rectangle(-164.6,-307.7,327.7,621), new cjs.Rectangle(-164.4,-308,327.5,621), new cjs.Rectangle(-164.2,-308.3,327.3,620.9), new cjs.Rectangle(-164,-308.3,327,620.5), new cjs.Rectangle(-163.7,-308.6,326.8,620.5), new cjs.Rectangle(-163.5,-308.5,326.6,620), new cjs.Rectangle(-163.3,-308.8,326.3,619.9), new cjs.Rectangle(-163.1,-309.1,326.1,619.9), new cjs.Rectangle(-162.9,-309,325.9,619.4), new cjs.Rectangle(-162.7,-309.3,325.7,619.4), new cjs.Rectangle(-162.5,-309.7,325.5,619.3)];


(lib.hero_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.hero2_accessory_all_mc();
	this.accessory.setTransform(-151.5,-94.7);

	this.timeline.addTween(cjs.Tween.get(this.accessory).to({y:-105.7},29).to({y:-94.7},30).wait(1));

	// fringe
	this.fringe = new lib.hero2_fringe_all_mc();
	this.fringe.setTransform(-3,-232.5);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({rotation:4.2,x:10.2,y:-242.8},29).to({rotation:0,x:-3,y:-232.5},30).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero2_eyebrows_all_mc();
	this.eyebrows.setTransform(-0.7,-173.3,0.587,0.587);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).to({rotation:4.2,x:8.1,y:-183.6},29).to({rotation:0,x:-0.7,y:-173.3},30).wait(1));

	// eyes
	this.eyes = new lib.hero2_eyes_all_mc();
	this.eyes.setTransform(-0.7,-173.3,0.587,0.587);

	this.timeline.addTween(cjs.Tween.get(this.eyes).to({rotation:4.2,x:8.1,y:-183.6},29).to({rotation:0,x:-0.7,y:-173.3},30).wait(1));

	// shadows
	this.shadows = new lib.hero2_shadows_all_mc();
	this.shadows.setTransform(-0.7,-173.3,0.587,0.587);

	this.timeline.addTween(cjs.Tween.get(this.shadows).to({rotation:4.2,x:8.1,y:-183.6},29).to({rotation:0,x:-0.7,y:-173.3},30).wait(1));

	// lips
	this.lips = new lib.hero2_lips_all_mc();
	this.lips.setTransform(-0.7,-173.3,0.587,0.587);

	this.timeline.addTween(cjs.Tween.get(this.lips).to({rotation:4.2,x:8.1,y:-183.6},29).to({rotation:0,x:-0.7,y:-173.3},30).wait(1));

	// body
	this.instance = new lib.hero2_head_mc();
	this.instance.setTransform(-0.7,-173.3,0.587,0.587);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4.2,x:8.1,y:-183.6},29).to({rotation:0,x:-0.7,y:-173.3},30).wait(1));

	// top
	this.top = new lib.hero2_top_mc();
	this.top.setTransform(3,28.5);

	this.timeline.addTween(cjs.Tween.get(this.top).to({y:17.5},29).to({y:28.5},30).wait(1));

	// bottom
	this.bottom = new lib.hero2_bottom_all_mc();
	this.bottom.setTransform(0,166.3);

	this.timeline.addTween(cjs.Tween.get(this.bottom).to({y:155.3},29).to({y:166.3},30).wait(1));

	// body
	this.instance_1 = new lib.hero2_boby1_mc();
	this.instance_1.setTransform(0,125.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:114.4},29).to({y:125.4},30).wait(1));

	// hair
	this.hair = new lib.hero2_hair_all_mc();
	this.hair.setTransform(-3,-232.5);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({rotation:4.2,x:10.2,y:-242.8},29).to({rotation:0,x:-3,y:-232.5},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222,-319.5,413.1,638.9);
p.frameBounds = [rect, new cjs.Rectangle(-222,-319.9,413.1,638.9), new cjs.Rectangle(-222,-320.7,413.1,639.3), new cjs.Rectangle(-222,-321.1,413.1,639.4), new cjs.Rectangle(-222,-322,413.1,639.9), new cjs.Rectangle(-222,-322.4,413.1,640), new cjs.Rectangle(-222,-323.2,413.1,640.4), new cjs.Rectangle(-222,-324.1,413.1,640.9), new cjs.Rectangle(-222,-324.5,413.1,640.9), new cjs.Rectangle(-222,-325.3,413.1,641.3), new cjs.Rectangle(-222,-325.7,413.1,641.4), new cjs.Rectangle(-222,-326.6,413.1,641.9), new cjs.Rectangle(-222,-327.4,413.1,642.3), new cjs.Rectangle(-222,-327.8,413.1,642.3), new cjs.Rectangle(-222,-328.8,413.1,642.9), new cjs.Rectangle(-222,-329.2,413.1,643), new cjs.Rectangle(-222,-330.2,413.1,643.6), new cjs.Rectangle(-222,-330.7,413.1,643.7), new cjs.Rectangle(-222,-331.6,413.1,644.2), new cjs.Rectangle(-222,-332.6,413.1,644.8), new cjs.Rectangle(-222,-333.1,413.1,644.9), new cjs.Rectangle(-222,-334,413.1,645.5), new cjs.Rectangle(-222,-334.5,413.1,645.6), new cjs.Rectangle(-222,-335.5,413.1,646.2), new cjs.Rectangle(-222,-336.4,413.1,646.8), new cjs.Rectangle(-222,-336.9,413.1,646.8), new cjs.Rectangle(-222,-337.9,413.1,647.5), new cjs.Rectangle(-222,-338.3,413.1,647.5), new cjs.Rectangle(-222,-339.3,413.1,648.1), new cjs.Rectangle(-222,-340.2,413.1,648.7), new cjs.Rectangle(-222,-339.3,413.1,648.1), new cjs.Rectangle(-222,-338.3,413.1,647.5), new cjs.Rectangle(-222,-337.9,413.1,647.4), new cjs.Rectangle(-222,-336.9,413.1,646.8), new cjs.Rectangle(-222,-336.5,413.1,646.8), new cjs.Rectangle(-222,-335.5,413.1,646.2), new cjs.Rectangle(-222,-335.1,413.1,646.1), new cjs.Rectangle(-222,-334.2,413.1,645.6), new cjs.Rectangle(-222,-333.2,413.1,644.9), new cjs.Rectangle(-222,-332.7,413.1,644.8), new cjs.Rectangle(-222,-331.8,413.1,644.3), new cjs.Rectangle(-222,-331.4,413.1,644.2), new cjs.Rectangle(-222,-330.4,413.1,643.6), new cjs.Rectangle(-222,-329.9,413.1,643.5), new cjs.Rectangle(-222,-329,413.1,642.9), new cjs.Rectangle(-222,-328.1,413.1,642.4), new cjs.Rectangle(-222,-327.6,413.1,642.3), new cjs.Rectangle(-222,-326.8,413.1,641.8), new cjs.Rectangle(-222,-326.4,413.1,641.8), new cjs.Rectangle(-222,-325.6,413.1,641.4), new cjs.Rectangle(-222,-325.2,413.1,641.3), new cjs.Rectangle(-222,-324.4,413.1,640.8), new cjs.Rectangle(-222,-323.5,413.1,640.4), new cjs.Rectangle(-222,-323.1,413.1,640.3), new cjs.Rectangle(-222,-322.3,413.1,639.9), new cjs.Rectangle(-222,-321.9,413.1,639.8), new cjs.Rectangle(-222,-321.1,413.1,639.5), new cjs.Rectangle(-222,-320.7,413.1,639.3), new cjs.Rectangle(-222,-319.8,413.1,638.9), new cjs.Rectangle(-222,-319.5,413.1,638.9)];


(lib.hero_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.hero1_crown_all_mc();
	this.accessory.setTransform(-28.5,-320.7);

	this.timeline.addTween(cjs.Tween.get(this.accessory).to({rotation:-4.7,x:-45.8,y:-302},49).to({rotation:0,x:-28.5,y:-320.7},50).wait(1));

	// fringe
	this.fringe = new lib.hero1_fringe_all_mc();
	this.fringe.setTransform(-25,-227.2);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({rotation:-4.7,x:-34.6,y:-209.2},49).to({rotation:0,x:-25,y:-227.2},50).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero1_eyebrows_all_mc();
	this.eyebrows.setTransform(-26.4,-189.7,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).to({rotation:-4.7,x:-32.9,y:-171.7},49).to({rotation:0,x:-26.4,y:-189.7},50).wait(1));

	// eyes
	this.eyes = new lib.hero1_eyes_all_mc();
	this.eyes.setTransform(-26.4,-189.7,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.eyes).to({rotation:-4.7,x:-32.9,y:-171.7},49).to({rotation:0,x:-26.4,y:-189.7},50).wait(1));

	// shadows
	this.shadows = new lib.hero1_shadows_all_mc();
	this.shadows.setTransform(-26.4,-189.7,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.shadows).to({rotation:-4.7,x:-32.9,y:-171.7},49).to({rotation:0,x:-26.4,y:-189.7},50).wait(1));

	// lips
	this.lips = new lib.hero1_lips_all_mc();
	this.lips.setTransform(-26.4,-189.7,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.lips).to({rotation:-4.7,x:-32.9,y:-171.7},49).to({rotation:0,x:-26.4,y:-189.7},50).wait(1));

	// body
	this.instance = new lib.hero1_head_mc();
	this.instance.setTransform(-26.4,-189.7,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-4.7,x:-32.9,y:-171.7},49).to({rotation:0,x:-26.4,y:-189.7},50).wait(1));

	// body
	this.instance_1 = new lib.hero1_hand1_mc();
	this.instance_1.setTransform(36.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:19.2},49).to({y:1.2},50).wait(1));

	// bottom
	this.bottom = new lib.hero1_tale_all_mc();
	this.bottom.setTransform(40.5,159.2);

	this.timeline.addTween(cjs.Tween.get(this.bottom).to({y:177.2},49).to({y:159.2},50).wait(1));

	// top
	this.top = new lib.hero1_top_all_mc();
	this.top.setTransform(-27,-52.2);

	this.timeline.addTween(cjs.Tween.get(this.top).to({y:-34.2},49).to({y:-52.2},50).wait(1));

	// body
	this.instance_2 = new lib.hero1_boby1_mc();
	this.instance_2.setTransform(-40,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-0.5},49).to({y:-18.5},50).wait(1));

	// hair
	this.hair = new lib.hero1_hair_all_mc();
	this.hair.setTransform(-25,-227.2);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({rotation:-4.7,x:-34.6,y:-209.2},49).to({rotation:0,x:-25,y:-227.2},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-162.5,-366.2,325.5,675.8);
p.frameBounds = [rect, new cjs.Rectangle(-162.7,-365.8,325.7,675.8), new cjs.Rectangle(-162.9,-365.5,325.9,675.9), new cjs.Rectangle(-163.1,-365.2,326.2,676), new cjs.Rectangle(-163.4,-364.9,326.4,676), new cjs.Rectangle(-163.6,-364.5,326.6,676), new cjs.Rectangle(-163.8,-364.3,326.9,676.2), new cjs.Rectangle(-164,-364,327,676.2), new cjs.Rectangle(-164.3,-363.7,327.3,676.4), new cjs.Rectangle(-164.5,-363.4,327.5,676.3), new cjs.Rectangle(-164.7,-363,327.7,676.3), new cjs.Rectangle(-165,-362.8,328,676.5), new cjs.Rectangle(-165.2,-362.4,328.2,676.5), new cjs.Rectangle(-165.4,-362.2,328.5,676.7), new cjs.Rectangle(-165.6,-361.8,328.7,676.7), new cjs.Rectangle(-165.8,-361.5,328.9,676.7), new cjs.Rectangle(-166.1,-361.3,329.2,676.9), new cjs.Rectangle(-166.3,-360.9,329.4,676.8), new cjs.Rectangle(-166.5,-360.6,329.6,676.9), new cjs.Rectangle(-166.7,-360.3,329.8,677), new cjs.Rectangle(-166.9,-360,330,677.1), new cjs.Rectangle(-167.2,-359.8,330.3,677.2), new cjs.Rectangle(-167.4,-359.5,330.5,677.3), new cjs.Rectangle(-167.6,-359,330.7,677.2), new cjs.Rectangle(-167.9,-358.8,330.9,677.3), new cjs.Rectangle(-168.1,-358.5,331.1,677.4), new cjs.Rectangle(-168.3,-358.3,331.4,677.5), new cjs.Rectangle(-168.5,-357.9,331.6,677.5), new cjs.Rectangle(-168.8,-357.6,331.8,677.6), new cjs.Rectangle(-169,-357.4,332.1,677.7), new cjs.Rectangle(-169.2,-357,332.3,677.7), new cjs.Rectangle(-169.4,-356.6,332.4,677.7), new cjs.Rectangle(-169.6,-356.4,332.7,677.8), new cjs.Rectangle(-169.8,-356,332.9,677.8), new cjs.Rectangle(-170.1,-355.8,333.1,678), new cjs.Rectangle(-170.3,-355.5,333.3,678), new cjs.Rectangle(-170.5,-355.1,333.5,678), new cjs.Rectangle(-170.7,-354.8,333.8,678.1), new cjs.Rectangle(-170.9,-354.5,334,678.2), new cjs.Rectangle(-171.2,-354.3,334.2,678.3), new cjs.Rectangle(-171.4,-353.9,334.4,678.3), new cjs.Rectangle(-171.6,-353.6,334.6,678.3), new cjs.Rectangle(-171.8,-353.3,334.9,678.4), new cjs.Rectangle(-172,-353,335,678.5), new cjs.Rectangle(-172.2,-352.6,335.2,678.4), new cjs.Rectangle(-172.4,-352.4,335.5,678.6), new cjs.Rectangle(-172.6,-352,335.7,678.6), new cjs.Rectangle(-172.9,-351.8,335.9,678.8), new cjs.Rectangle(-173.1,-351.4,336.1,678.8), new cjs.Rectangle(-173.4,-351.2,336.4,678.9), new cjs.Rectangle(-173.1,-351.4,336.1,678.8), new cjs.Rectangle(-172.8,-351.8,335.9,678.8), new cjs.Rectangle(-172.6,-351.9,335.7,678.5), new cjs.Rectangle(-172.5,-352.4,335.5,678.6), new cjs.Rectangle(-172.2,-352.5,335.3,678.4), new cjs.Rectangle(-172,-352.9,335.1,678.4), new cjs.Rectangle(-171.8,-353.3,334.9,678.5), new cjs.Rectangle(-171.6,-353.5,334.6,678.3), new cjs.Rectangle(-171.4,-353.8,334.4,678.3), new cjs.Rectangle(-171.2,-354.2,334.2,678.3), new cjs.Rectangle(-171,-354.4,334,678.1), new cjs.Rectangle(-170.8,-354.8,333.8,678.2), new cjs.Rectangle(-170.5,-355,333.6,678), new cjs.Rectangle(-170.3,-355.3,333.4,678), new cjs.Rectangle(-170.1,-355.7,333.2,678), new cjs.Rectangle(-169.9,-355.8,333,677.8), new cjs.Rectangle(-169.7,-356.2,332.8,677.8), new cjs.Rectangle(-169.5,-356.6,332.5,677.8), new cjs.Rectangle(-169.3,-356.8,332.3,677.7), new cjs.Rectangle(-169.1,-357.2,332.1,677.7), new cjs.Rectangle(-168.8,-357.4,331.8,677.5), new cjs.Rectangle(-168.6,-357.7,331.7,677.5), new cjs.Rectangle(-168.4,-358.1,331.5,677.5), new cjs.Rectangle(-168.2,-358.3,331.2,677.3), new cjs.Rectangle(-168,-358.7,331,677.3), new cjs.Rectangle(-167.8,-359,330.8,677.3), new cjs.Rectangle(-167.5,-359.2,330.6,677.2), new cjs.Rectangle(-167.3,-359.6,330.4,677.2), new cjs.Rectangle(-167,-359.7,330.1,676.9), new cjs.Rectangle(-166.9,-360.2,329.9,677.1), new cjs.Rectangle(-166.7,-360.5,329.7,677), new cjs.Rectangle(-166.4,-360.7,329.4,676.9), new cjs.Rectangle(-166.2,-361,329.3,676.8), new cjs.Rectangle(-166,-361.4,329.1,676.8), new cjs.Rectangle(-165.7,-361.6,328.8,676.7), new cjs.Rectangle(-165.6,-362,328.6,676.7), new cjs.Rectangle(-165.3,-362.2,328.4,676.6), new cjs.Rectangle(-165.1,-362.4,328.1,676.4), new cjs.Rectangle(-164.9,-362.9,327.9,676.5), new cjs.Rectangle(-164.6,-363,327.7,676.3), new cjs.Rectangle(-164.4,-363.4,327.5,676.3), new cjs.Rectangle(-164.2,-363.8,327.3,676.4), new cjs.Rectangle(-164,-364,327,676.2), new cjs.Rectangle(-163.7,-364.3,326.8,676.2), new cjs.Rectangle(-163.5,-364.5,326.6,676), new cjs.Rectangle(-163.3,-364.9,326.3,676), new cjs.Rectangle(-163.1,-365.2,326.1,676), new cjs.Rectangle(-162.9,-365.5,325.9,675.9), new cjs.Rectangle(-162.7,-365.8,325.7,675.9), new cjs.Rectangle(-162.5,-366.2,325.5,675.8)];


(lib.hero_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero2_fringe0_mc();
	this.instance.setTransform(10.6,-159.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero2_eyebrows_all_mc();
	this.eyebrows.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).wait(1));

	// eyes
	this.eyes = new lib.hero2_eyes_all_mc();
	this.eyes.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// shadows
	this.shadows = new lib.hero2_shadows_all_mc();
	this.shadows.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.hero2_lips_all_mc();
	this.lips.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// body
	this.instance_1 = new lib.hero2_head_mc();
	this.instance_1.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// body
	this.instance_2 = new lib.hero2_boby0_mc();
	this.instance_2.setTransform(10.5,260.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// body
	this.instance_3 = new lib.hero2_hair0_mc();
	this.instance_3.setTransform(12,-96.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-268.5,-308.8,561,710.8);
p.frameBounds = [rect];


(lib.hero_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero1_fringe0_mc();
	this.instance.setTransform(-4,-125.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero1_eyebrows_all_mc();
	this.eyebrows.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).wait(1));

	// eyes
	this.eyes = new lib.hero1_eyes_all_mc();
	this.eyes.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// shadows
	this.shadows = new lib.hero1_shadows_all_mc();
	this.shadows.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.hero1_lips_all_mc();
	this.lips.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// body
	this.instance_1 = new lib.hero1_head_mc();
	this.instance_1.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// body
	this.instance_2 = new lib.hero1_boby0_mc();
	this.instance_2.setTransform(-10,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// body
	this.instance_3 = new lib.hero1_hair0_mc();
	this.instance_3.setTransform(0,197.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-331,-319.9,662,887.4);
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


(lib.current_makeup_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_makeup_2_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:90},19).to({rotation:180},20).to({rotation:270},20).to({rotation:360},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, new cjs.Rectangle(-96.8,-96.8,193.7,193.7), new cjs.Rectangle(-103.3,-103.3,206.7,206.7), new cjs.Rectangle(-109,-109,218.2,218.2), new cjs.Rectangle(-114.1,-114.1,228.2,228.2), new cjs.Rectangle(-118.3,-118.3,236.7,236.7), new cjs.Rectangle(-121.7,-121.7,243.5,243.5), new cjs.Rectangle(-124.3,-124.3,248.7,248.7), new cjs.Rectangle(-126.1,-126,252.2,252.2), new cjs.Rectangle(-126.9,-126.9,254,254), new cjs.Rectangle(-127,-126.9,254,254), new cjs.Rectangle(-126.1,-126,252.2,252.2), new cjs.Rectangle(-124.3,-124.3,248.7,248.7), new cjs.Rectangle(-121.8,-121.7,243.5,243.5), new cjs.Rectangle(-118.4,-118.3,236.7,236.7), new cjs.Rectangle(-114.1,-114.1,228.2,228.2), new cjs.Rectangle(-109.1,-109,218.2,218.2), new cjs.Rectangle(-103.3,-103.3,206.7,206.7), new cjs.Rectangle(-96.9,-96.8,193.7,193.7), new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-96.7,-96.7,193.5,193.5), new cjs.Rectangle(-102.9,-102.9,205.9,205.9), new cjs.Rectangle(-108.3,-108.2,216.5,216.5), new cjs.Rectangle(-113.1,-113.1,226.3,226.3), new cjs.Rectangle(-117.6,-117.6,235.2,235.2), new cjs.Rectangle(-120.9,-120.8,241.8,241.8), new cjs.Rectangle(-123.6,-123.6,247.2,247.2), new cjs.Rectangle(-125.4,-125.4,250.9,250.9), new cjs.Rectangle(-126.6,-126.6,253.3,253.3), new cjs.Rectangle(-127.3,-127.3,254.6,254.6), new cjs.Rectangle(-126.6,-126.6,253.3,253.3), new cjs.Rectangle(-125.4,-125.4,250.9,250.9), new cjs.Rectangle(-123.6,-123.6,247.2,247.2), new cjs.Rectangle(-120.9,-120.9,241.8,241.8), new cjs.Rectangle(-117.6,-117.6,235.2,235.2), new cjs.Rectangle(-113.1,-113.1,226.3,226.3), new cjs.Rectangle(-108.3,-108.3,216.5,216.5), new cjs.Rectangle(-102.9,-102.9,205.9,205.9), new cjs.Rectangle(-96.7,-96.8,193.5,193.5), new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-96.8,-96.7,193.5,193.5), new cjs.Rectangle(-102.9,-102.9,205.9,205.9), new cjs.Rectangle(-108.3,-108.3,216.5,216.5), new cjs.Rectangle(-113.1,-113.1,226.3,226.3), new cjs.Rectangle(-117.6,-117.6,235.2,235.2), new cjs.Rectangle(-120.9,-120.9,241.8,241.8), new cjs.Rectangle(-123.6,-123.6,247.2,247.2), new cjs.Rectangle(-125.4,-125.4,250.9,250.9), new cjs.Rectangle(-126.6,-126.6,253.3,253.3), new cjs.Rectangle(-127.3,-127.3,254.6,254.6), new cjs.Rectangle(-126.6,-126.6,253.3,253.3), new cjs.Rectangle(-125.4,-125.4,250.9,250.9), new cjs.Rectangle(-123.6,-123.6,247.2,247.2), new cjs.Rectangle(-120.8,-120.9,241.8,241.8), new cjs.Rectangle(-117.6,-117.6,235.2,235.2), new cjs.Rectangle(-113.1,-113.1,226.3,226.3), new cjs.Rectangle(-108.2,-108.3,216.5,216.5), new cjs.Rectangle(-102.9,-102.9,205.9,205.9), new cjs.Rectangle(-96.7,-96.7,193.5,193.5), new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-96.7,-96.8,193.5,193.5), new cjs.Rectangle(-102.9,-102.9,205.9,205.9), new cjs.Rectangle(-108.2,-108.3,216.5,216.5), new cjs.Rectangle(-113.1,-113.1,226.3,226.3), new cjs.Rectangle(-117.5,-117.6,235.2,235.2), new cjs.Rectangle(-120.9,-120.9,241.8,241.8), new cjs.Rectangle(-123.6,-123.6,247.2,247.2), new cjs.Rectangle(-125.4,-125.4,250.9,250.9), new cjs.Rectangle(-126.6,-126.6,253.3,253.3), new cjs.Rectangle(-127.2,-127.3,254.6,254.6), new cjs.Rectangle(-126.6,-126.6,253.3,253.3), new cjs.Rectangle(-125.4,-125.4,250.9,250.9), new cjs.Rectangle(-123.6,-123.6,247.2,247.2), new cjs.Rectangle(-120.9,-120.8,241.8,241.8), new cjs.Rectangle(-117.5,-117.6,235.2,235.2), new cjs.Rectangle(-113.1,-113.1,226.3,226.3), new cjs.Rectangle(-108.2,-108.2,216.5,216.5), new cjs.Rectangle(-102.9,-102.9,205.9,205.9), new cjs.Rectangle(-96.7,-96.7,193.5,193.5), new cjs.Rectangle(-90,-90,180,180)];


(lib.current_makeup_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_makeup_2_1_mc();
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},19).wait(10).to({alpha:0.898},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_makeup_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_makeup_1_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// animation
	this.instance_1 = new lib.current_makeup_2_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.97,y:2},29).to({scaleY:1,y:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-90,-90,180.1,180), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-90,-90,180.1,180.1), rect, rect, new cjs.Rectangle(-90,-90,180,180)];


(lib.current_hairstyle_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_hairstyle_2_mc();
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},39).wait(20).to({alpha:0.898},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-132,280,264);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_hairstyle_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_hairstyle_2_2_mc();
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},39).wait(20).to({alpha:0.898},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.crab_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.crab1_mc();

	this.instance_1 = new lib.crab2_mc();
	this.instance_1.setTransform(-93.5,-36,1,1,0,0,0,-17,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123,-106.5,246,213);
p.frameBounds = [rect];


(lib.crab_cut_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.crab1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7));

	// Слой 1
	this.instance_1 = new lib.crab2_mc();
	this.instance_1.setTransform(-93.5,-35.9,1,1,-7.5,0,0,-17,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-16.9,rotation:16.2},3).to({regX:-17,rotation:-7.5},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123,-106.5,246,213);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect];


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


(lib.circle2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.tin_facemask1_img();
	this.instance.setTransform(-95.4,69.8,0.304,0.304,-44.9);

	this.instance_1 = new lib.patch_mc();
	this.instance_1.setTransform(82.4,2.3,0.801,0.801,-6.5);

	this.instance_2 = new lib.circle_item9_img();
	this.instance_2.setTransform(-81.6,-73.6);

	this.instance_3 = new lib.circle_item8_img();
	this.instance_3.setTransform(-23.1,-95.5);

	this.instance_4 = new lib.circle_item7_img();
	this.instance_4.setTransform(32.4,-65.6);

	this.instance_5 = new lib.circle_item5_img();
	this.instance_5.setTransform(36.5,38);

	this.instance_6 = new lib.circle_item4_img();
	this.instance_6.setTransform(-22.1,68.9);

	this.instance_7 = new lib.circle_item1_img();
	this.instance_7.setTransform(-106.6,-18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_8 = new lib.circle1_img();
	this.instance_8.setTransform(-159,-162);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-159,-162,318,324);
p.frameBounds = [rect];


(lib.circle_lvl2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.circle3_mc();
	this.instance.setTransform(-1.5,-167.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.circle2_mc();
	this.instance_1.setTransform(0.5,149.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.circle2_1_mc();
	this.instance_2.setTransform(-0.5,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-159.5,-190,318,379.5);
p.frameBounds = [rect];


(lib.circle_lvl2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_50 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(50).call(this.frame_50).wait(1));

	// animation
	this.instance = new lib.circle3_mc();
	this.instance.setTransform(-1.5,-167.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(51));

	// animation
	this.instance_1 = new lib.circle2_mc();
	this.instance_1.setTransform(0.5,149.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(51));

	// animation
	this.instance_2 = new lib.circle2_1_mc();
	this.instance_2.setTransform(-0.5,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:90},6).to({rotation:180},6).to({rotation:270},8).to({rotation:360},9).to({rotation:450},10).to({rotation:496.3},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-159.5,-190,318,379.5);
p.frameBounds = [rect, new cjs.Rectangle(-195.8,-218,390.8,407.4), new cjs.Rectangle(-218.7,-239.8,436.5,438.7), new cjs.Rectangle(-227.4,-247.5,454,454), new cjs.Rectangle(-219.8,-238.7,438.7,436.5), new cjs.Rectangle(-198,-215.9,395,405.3), new cjs.Rectangle(-162.5,-190,324,379.5), new cjs.Rectangle(-198,-215.9,395,405.3), new cjs.Rectangle(-219.8,-238.8,438.7,436.5), new cjs.Rectangle(-227.4,-247.5,454,454), new cjs.Rectangle(-218.7,-239.9,436.5,438.7), new cjs.Rectangle(-195.8,-218.1,390.8,407.5), new cjs.Rectangle(-159.5,-190,318,379.5), new cjs.Rectangle(-188,-210.5,375.1,399.9), new cjs.Rectangle(-209.3,-231.1,417.8,421.1), new cjs.Rectangle(-222.6,-243.6,444.4,446.1), new cjs.Rectangle(-227.4,-247.5,454,454), new cjs.Rectangle(-223.4,-242.7,446.1,444.4), new cjs.Rectangle(-210.9,-229.5,421.1,418.9), new cjs.Rectangle(-190.3,-208.1,379.9,397.6), new cjs.Rectangle(-162.5,-190,324,379.5), new cjs.Rectangle(-187.5,-205.2,374.1,394.6), new cjs.Rectangle(-206.8,-225.2,412.9,414.6), new cjs.Rectangle(-219.7,-238.8,438.7,436.5), new cjs.Rectangle(-226.3,-246,451.8,451.1), new cjs.Rectangle(-225.9,-246.4,451.1,451.8), new cjs.Rectangle(-218.6,-239.8,436.5,438.7), new cjs.Rectangle(-205,-226.9,409.3,416.4), new cjs.Rectangle(-185,-207.5,369.3,397), new cjs.Rectangle(-159.5,-190,318,379.5), new cjs.Rectangle(-182.7,-205.3,364.6,394.7), new cjs.Rectangle(-201.2,-223.2,401.5,412.7), new cjs.Rectangle(-215.4,-236.8,430,432.6), new cjs.Rectangle(-223.8,-244.6,446.9,448.2), new cjs.Rectangle(-227.4,-247.5,454,454), new cjs.Rectangle(-224.5,-243.9,448.2,446.9), new cjs.Rectangle(-216.7,-235.5,432.6,430), new cjs.Rectangle(-203.2,-221.3,405.5,410.7), new cjs.Rectangle(-185.3,-202.8,369.6,392.3), new cjs.Rectangle(-162.5,-190,324,379.5), new cjs.Rectangle(-173.2,-190.5,345.6,380), new cjs.Rectangle(-183.6,-201.1,366.3,390.6), new cjs.Rectangle(-193,-210.7,385.1,400.2), new cjs.Rectangle(-201.3,-219.3,401.7,408.8), new cjs.Rectangle(-208.5,-226.9,416.1,416.3), new cjs.Rectangle(-214.6,-233.2,428.3,425.4), new cjs.Rectangle(-219.3,-238.3,437.7,435.4), new cjs.Rectangle(-223.1,-242.4,445.2,443.5), new cjs.Rectangle(-225.6,-245.2,450.3,449.2), new cjs.Rectangle(-226.9,-246.8,452.9,452.5), new cjs.Rectangle(-227.3,-247.5,453.7,454)];


(lib.circle_lvl2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(1));

	// animation
	this.instance = new lib.circle3_mc();
	this.instance.setTransform(-1.5,-167.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(65));

	// animation
	this.instance_1 = new lib.circle2_mc();
	this.instance_1.setTransform(0.5,149.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(65));

	// animation
	this.instance_2 = new lib.circle2_1_mc();
	this.instance_2.setTransform(-0.5,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:90},6).to({rotation:180},6).to({rotation:270},8).to({rotation:360},9).to({rotation:450},10).to({rotation:540},11).to({rotation:630},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-159.5,-190,318,379.5);
p.frameBounds = [rect, new cjs.Rectangle(-195.8,-218,390.8,407.4), new cjs.Rectangle(-218.7,-239.8,436.5,438.7), new cjs.Rectangle(-227.4,-247.5,454,454), new cjs.Rectangle(-219.8,-238.7,438.7,436.5), new cjs.Rectangle(-198,-215.9,395,405.3), new cjs.Rectangle(-162.5,-190,324,379.5), new cjs.Rectangle(-198,-215.9,395,405.3), new cjs.Rectangle(-219.8,-238.8,438.7,436.5), new cjs.Rectangle(-227.4,-247.5,454,454), new cjs.Rectangle(-218.7,-239.9,436.5,438.7), new cjs.Rectangle(-195.8,-218.1,390.8,407.5), new cjs.Rectangle(-159.5,-190,318,379.5), new cjs.Rectangle(-188,-210.5,375.1,399.9), new cjs.Rectangle(-209.3,-231.1,417.8,421.1), new cjs.Rectangle(-222.6,-243.6,444.4,446.1), new cjs.Rectangle(-227.4,-247.5,454,454), new cjs.Rectangle(-223.4,-242.7,446.1,444.4), new cjs.Rectangle(-210.9,-229.5,421.1,418.9), new cjs.Rectangle(-190.3,-208.1,379.9,397.6), new cjs.Rectangle(-162.5,-190,324,379.5), new cjs.Rectangle(-187.5,-205.2,374.1,394.6), new cjs.Rectangle(-206.8,-225.2,412.9,414.6), new cjs.Rectangle(-219.7,-238.8,438.7,436.5), new cjs.Rectangle(-226.3,-246,451.8,451.1), new cjs.Rectangle(-225.9,-246.4,451.1,451.8), new cjs.Rectangle(-218.6,-239.8,436.5,438.7), new cjs.Rectangle(-205,-226.9,409.3,416.4), new cjs.Rectangle(-185,-207.5,369.3,397), new cjs.Rectangle(-159.5,-190,318,379.5), new cjs.Rectangle(-182.7,-205.3,364.6,394.7), new cjs.Rectangle(-201.2,-223.2,401.5,412.7), new cjs.Rectangle(-215.4,-236.8,430,432.6), new cjs.Rectangle(-223.8,-244.6,446.9,448.2), new cjs.Rectangle(-227.4,-247.5,454,454), new cjs.Rectangle(-224.5,-243.9,448.2,446.9), new cjs.Rectangle(-216.7,-235.5,432.6,430), new cjs.Rectangle(-203.2,-221.3,405.5,410.7), new cjs.Rectangle(-185.3,-202.8,369.6,392.3), new cjs.Rectangle(-162.5,-190,324,379.5), new cjs.Rectangle(-183,-200.5,365.2,390), new cjs.Rectangle(-200.4,-218.4,399.9,407.8), new cjs.Rectangle(-213.6,-232.1,426.3,423.3), new cjs.Rectangle(-222.3,-241.4,443.7,441.8), new cjs.Rectangle(-226.6,-246.4,452.4,451.8), new cjs.Rectangle(-226.3,-246.7,451.8,452.4), new cjs.Rectangle(-221.3,-242.4,441.8,443.7), new cjs.Rectangle(-212.1,-233.7,423.3,426.3), new cjs.Rectangle(-198.3,-220.5,395.8,409.9), new cjs.Rectangle(-180.5,-203.1,360.1,392.6), new cjs.Rectangle(-159.5,-190,318,379.5), new cjs.Rectangle(-176.2,-199,351.5,388.4), new cjs.Rectangle(-191.2,-213.6,381.6,403), new cjs.Rectangle(-203.8,-225.7,406.7,415.2), new cjs.Rectangle(-213.6,-235,426.2,429), new cjs.Rectangle(-220.9,-242,440.9,442.8), new cjs.Rectangle(-225.4,-246,449.9,450.9), new cjs.Rectangle(-227.4,-247.5,454,454), new cjs.Rectangle(-225.9,-245.5,450.9,449.9), new cjs.Rectangle(-221.8,-241,442.8,440.9), new cjs.Rectangle(-214.9,-233.6,429,426.2), new cjs.Rectangle(-205.6,-223.9,410.4,413.3), new cjs.Rectangle(-193.4,-211.3,386,400.8), new cjs.Rectangle(-178.8,-196.3,356.8,385.7), new cjs.Rectangle(-162.5,-190,324,379.5)];


(lib.circle_lvl2_0_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.circle3_mc();
	this.instance.setTransform(-1.5,-167.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// animation
	this.instance_1 = new lib.circle2_mc();
	this.instance_1.setTransform(0.5,149.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// animation
	this.instance_2 = new lib.circle2_1_mc();
	this.instance_2.setTransform(-0.5,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-159.5,-190,318,379.5);
p.frameBounds = [rect];


(lib.circle_lvl2_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.circle3_mc();
	this.instance.setTransform(-1.5,-167.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// animation
	this.instance_1 = new lib.circle2_mc();
	this.instance_1.setTransform(0.5,149.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// animation
	this.instance_2 = new lib.circle2_1_mc();
	this.instance_2.setTransform(-0.5,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-159.5,-190,318,379.5);
p.frameBounds = [rect];


(lib.circle_lvl1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.circle3_mc();
	this.instance.setTransform(-1.5,-167.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.circle2_mc();
	this.instance_1.setTransform(0.5,149.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.circle1_1_mc();
	this.instance_2.setTransform(-0.5,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-159.5,-190,318,379.5);
p.frameBounds = [rect];


(lib.circle_lvl1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// animation
	this.instance = new lib.circle3_mc();
	this.instance.setTransform(-1.5,-167.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// animation
	this.instance_1 = new lib.circle2_mc();
	this.instance_1.setTransform(0.5,149.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// animation
	this.instance_2 = new lib.circle1_1_mc();
	this.instance_2.setTransform(-0.5,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:90},4).to({rotation:225},5).to({rotation:315},4).to({rotation:405},6).to({rotation:495},8).to({rotation:585},8).to({rotation:675},9).to({rotation:720},8).to({rotation:765},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-159.5,-190,318,379.5);
p.frameBounds = [rect, new cjs.Rectangle(-209.3,-231,417.8,421.1), new cjs.Rectangle(-227.4,-247.5,454,454), new cjs.Rectangle(-211,-229.4,421.1,418.8), new cjs.Rectangle(-162.5,-190,324,379.5), new cjs.Rectangle(-216.5,-235.2,432.2,429.5), new cjs.Rectangle(-224,-244.8,447.1,448.4), new cjs.Rectangle(-182.3,-205,363.8,394.4), new cjs.Rectangle(-201.5,-223.6,402.2,413), new cjs.Rectangle(-227.5,-247.5,454,454), new cjs.Rectangle(-210.4,-229,420.1,418.5), new cjs.Rectangle(-162.4,-190,324,379.5), new cjs.Rectangle(-210.7,-229.3,420.6,418.7), new cjs.Rectangle(-227.5,-247.5,454,454), new cjs.Rectangle(-218.6,-239.9,436.5,438.7), new cjs.Rectangle(-195.8,-218,390.7,407.5), new cjs.Rectangle(-159.4,-190,318,379.5), new cjs.Rectangle(-195.7,-218,390.8,407.4), new cjs.Rectangle(-218.6,-239.8,436.5,438.7), new cjs.Rectangle(-227.5,-247.5,454,454), new cjs.Rectangle(-223.1,-242.3,445.2,443.5), new cjs.Rectangle(-210.5,-228.9,420.1,418.4), new cjs.Rectangle(-189.8,-207.6,378.8,397), new cjs.Rectangle(-162.5,-190,324,379.5), new cjs.Rectangle(-190.3,-208,379.6,397.4), new cjs.Rectangle(-210.7,-229.2,420.6,418.7), new cjs.Rectangle(-223.1,-242.4,445.5,443.8), new cjs.Rectangle(-227.5,-247.5,454,454), new cjs.Rectangle(-222.2,-243.2,443.5,445.2), new cjs.Rectangle(-208.9,-230.6,416.8,420.1), new cjs.Rectangle(-187.5,-210,374.1,399.4), new cjs.Rectangle(-159.5,-190,318,379.5), new cjs.Rectangle(-187.9,-210.4,374.9,399.9), new cjs.Rectangle(-209.1,-230.9,417.4,420.6), new cjs.Rectangle(-222.3,-243.3,443.8,445.5), new cjs.Rectangle(-227.5,-247.5,454,454), new cjs.Rectangle(-223.9,-243.3,447,445.5), new cjs.Rectangle(-213.9,-232.7,427.1,424.2), new cjs.Rectangle(-197.9,-215.9,395,405.4), new cjs.Rectangle(-175.1,-192.6,349.4,382), new cjs.Rectangle(-175.5,-193,350.4,382.5), new cjs.Rectangle(-197.8,-215.9,395,405.4), new cjs.Rectangle(-213.9,-232.6,427.1,424.2), new cjs.Rectangle(-223.9,-243.4,447.2,445.8), new cjs.Rectangle(-227.5,-247.5,454,454), new cjs.Rectangle(-225.7,-246.2,450.6,451.4), new cjs.Rectangle(-222.2,-243.1,443.5,445.2), new cjs.Rectangle(-216.6,-238,432.5,434.9), new cjs.Rectangle(-209.1,-230.9,417.4,420.6), new cjs.Rectangle(-199.2,-221.4,397.7,410.8), new cjs.Rectangle(-187.8,-210.3,374.9,399.8), new cjs.Rectangle(-174.2,-197.1,347.7,386.5), new cjs.Rectangle(-159.5,-190,318,379.5), new cjs.Rectangle(-176.2,-198.9,351.5,388.4), new cjs.Rectangle(-191.2,-213.6,381.5,403), new cjs.Rectangle(-203.7,-225.7,406.7,415.2), new cjs.Rectangle(-213.5,-235.1,426.2,429), new cjs.Rectangle(-220.8,-242,440.9,442.8), new cjs.Rectangle(-225.3,-246,449.9,450.9), new cjs.Rectangle(-227.5,-247.5,454,453.9)];


(lib.circle_lvl1_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.circle3_mc();
	this.instance.setTransform(-1.5,-167.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// animation
	this.instance_1 = new lib.circle2_mc();
	this.instance_1.setTransform(0.5,149.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// animation
	this.instance_2 = new lib.circle1_1_mc();
	this.instance_2.setTransform(-0.5,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-159.5,-190,318,379.5);
p.frameBounds = [rect];


(lib.circle_arrow_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.circle_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-110,240,220);
p.frameBounds = [rect];


(lib.circle_arrow_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_3 = new lib.checkpoint_mc();
	this.checkpoint_3.setTransform(0,-200,1,1,180);
	this.checkpoint_3.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.setTransform(-200,0,1,1,-90);
	this.checkpoint_2.alpha = 0.012;

	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(0,200,1,1,180);
	this.checkpoint_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_1},{t:this.checkpoint_2},{t:this.checkpoint_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-450,500,900);
p.frameBounds = [rect];


(lib.circle_arrow_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoints_mc = new lib.circle_arrow_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.checkpoints_mc).wait(1));

	// graph
	this.instance = new lib.circle_arrow_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-450,570,900);
p.frameBounds = [rect];


(lib.chip2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.chip1_mc();
	this.instance.setTransform(-15.1,-21.9,1,1,7.5,0,0,-1.2,-21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-1.3,rotation:0},9).to({regX:-1.2,rotation:7.5},10).wait(1));

	// Слой 1
	this.instance_1 = new lib.chip1_mc();
	this.instance_1.setTransform(-15.3,-21.8,1,1,0,-52.2,127.8,-1.2,-21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({skewX:-45,skewY:135,x:-15.4},9).to({skewX:-52.2,skewY:127.8,x:-15.3},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33.9,-38.9,69.3,76.9);
p.frameBounds = [rect, new cjs.Rectangle(-33.8,-38.8,68.7,76.7), new cjs.Rectangle(-33.8,-38.8,68.2,76.6), new cjs.Rectangle(-33.8,-38.6,67.7,76.4), new cjs.Rectangle(-33.7,-38.6,67.1,76.3), new cjs.Rectangle(-33.6,-38.5,66.5,76.2), new cjs.Rectangle(-33.5,-38.4,66,76), new cjs.Rectangle(-33.5,-38.3,65.5,75.8), new cjs.Rectangle(-33.4,-38.2,65,75.6), new cjs.Rectangle(-33.4,-38.2,64.4,75.4), new cjs.Rectangle(-33.4,-38.2,64.8,75.6), new cjs.Rectangle(-33.4,-38.3,65.3,75.7), new cjs.Rectangle(-33.6,-38.4,65.8,75.9), new cjs.Rectangle(-33.6,-38.5,66.4,76.1), new cjs.Rectangle(-33.7,-38.5,66.9,76.2), new cjs.Rectangle(-33.7,-38.6,67.4,76.4), new cjs.Rectangle(-33.8,-38.7,67.8,76.5), new cjs.Rectangle(-33.8,-38.7,68.2,76.6), new cjs.Rectangle(-33.9,-38.8,68.7,76.7), new cjs.Rectangle(-33.9,-38.9,69.3,76.9)];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// decor
	this.instance = new lib.pearloyster_3_mc();
	this.instance.setTransform(-240,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-250,y:-10},0).wait(1).to({x:-240,y:-4},0).wait(3).to({x:-245},0).wait(1).to({x:-190},0).wait(1).to({x:-270,y:-20},0).wait(1).to({x:-240,y:-4},0).wait(5));

	// graph
	this.instance_1 = new lib.title_en_img();
	this.instance_1.setTransform(-260,-90);

	this.instance_2 = new lib.title_ru_img();
	this.instance_2.setTransform(-260,-90);

	this.instance_3 = new lib.title_es_img();
	this.instance_3.setTransform(-260,-90);

	this.instance_4 = new lib.title_pt_img();
	this.instance_4.setTransform(-260,-90);

	this.instance_5 = new lib.title_tr_img();
	this.instance_5.setTransform(-260,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1).to({_off:false},0).wait(2).to({_off:true},1).wait(3).to({_off:false},0).wait(5));

	// decor
	this.instance_6 = new lib.pearloyster_4_mc();
	this.instance_6.setTransform(-240,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({x:-250,y:-20},0).wait(1).to({x:-240,y:-15},0).wait(3).to({x:-245},0).wait(1).to({x:-190},0).wait(1).to({x:-270,y:-30},0).wait(1).to({x:-240,y:-15},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-340,-115,600,205);
p.frameBounds = [rect, new cjs.Rectangle(-350,-120,610,210), rect=new cjs.Rectangle(-340,-115,600,205), rect, rect, new cjs.Rectangle(-345,-115,605,205), new cjs.Rectangle(-290,-115,550,205), new cjs.Rectangle(-370,-130,630,220), rect=new cjs.Rectangle(-340,-115,600,205), rect, rect, rect, rect];


(lib.body_hint_filter_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).wait(6));

	// decor
	this.instance_6 = new lib.hint_filter_arrow_mc();
	this.instance_6.setTransform(60,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-30,210,150);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.arrow_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.circle_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-450,570,900);
p.frameBounds = [rect];


(lib.arrow_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.circle_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-450,570,900);
p.frameBounds = [rect];


(lib.arrow_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.circle_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-450,570,900);
p.frameBounds = [rect];


(lib.arrow_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.circle_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-450,570,900);
p.frameBounds = [rect];


(lib.arc_arrow_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.arc_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-90,240,180);
p.frameBounds = [rect];


(lib.arc_arrow_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_3 = new lib.checkpoint_mc();
	this.checkpoint_3.setTransform(71.5,-63.8,1,1,-22.2);
	this.checkpoint_3.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.setTransform(-21,-26,1,1,-22.2);
	this.checkpoint_2.alpha = 0.012;

	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(-113.6,11.8,1,1,-22.2);
	this.checkpoint_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_1},{t:this.checkpoint_2},{t:this.checkpoint_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.arc_arrow_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoints_mc = new lib.arc_arrow_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.checkpoints_mc).wait(1));

	// graph
	this.instance = new lib.arc_arrow_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.animation2_23_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.chip2_mc();
	this.instance.setTransform(80.1,120.2,2.384,2.384,-25.7,0,0,0.7,-0.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({_off:true},21).wait(14));

	// animation
	this.instance_1 = new lib.chip0_mc();
	this.instance_1.setTransform(257.2,185.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:71.2,y:124.1},10).to({_off:true},1).wait(21).to({_off:false},0).to({x:-177.9,y:527},12).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.hero2_fringe0_mc();
	this.instance_2.setTransform(10.6,-159.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(46));

	// animation
	this.instance_3 = new lib.hero2_eyebrows1_mc();
	this.instance_3.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(46));

	// animation
	this.instance_4 = new lib.hero2_eyes1_mc();
	this.instance_4.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(46));

	// animation
	this.instance_5 = new lib.hero2_brecets_mc();
	this.instance_5.setTransform(10,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({rotation:-21},10).wait(11).to({x:-239.1,y:468.2},12).to({_off:true},1).wait(1));

	// animation
	this.instance_6 = new lib.hero2_lips0_mc();
	this.instance_6.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(46));

	// animation
	this.instance_7 = new lib.hero2_head_mc();
	this.instance_7.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(46));

	// animation
	this.instance_8 = new lib.hero2_boby0_mc();
	this.instance_8.setTransform(10.5,260.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(46));

	// animation
	this.instance_9 = new lib.hero2_hair0_mc();
	this.instance_9.setTransform(12,-96.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-268.5,-308.8,609.2,710.8);
p.frameBounds = [rect, new cjs.Rectangle(-268.5,-308.8,590.6,710.8), new cjs.Rectangle(-268.5,-308.8,572,710.8), rect=new cjs.Rectangle(-268.5,-308.8,561,710.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-268.5,-308.8,561,733.5), new cjs.Rectangle(-268.5,-308.8,561,767.1), new cjs.Rectangle(-268.5,-308.8,561,800.7), new cjs.Rectangle(-268.5,-308.8,561,834.3), new cjs.Rectangle(-268.5,-308.8,561,867.8), new cjs.Rectangle(-268.5,-308.8,561,901.4), new cjs.Rectangle(-286.5,-308.8,579,935), new cjs.Rectangle(-268.5,-308.8,561,710.8)];


(lib.animation2_22_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.gift5_mc();
	this.instance.setTransform(250.4,166);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.16,scaleY:0.16},13).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.chip0_mc();
	this.instance_1.setTransform(257.2,185.1,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1},14).wait(1));

	// animation
	this.instance_2 = new lib.hero2_fringe0_mc();
	this.instance_2.setTransform(10.6,-159.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// animation
	this.instance_3 = new lib.hero2_eyebrows1_mc();
	this.instance_3.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// animation
	this.instance_4 = new lib.hero2_eyes1_mc();
	this.instance_4.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

	// animation
	this.instance_5 = new lib.hero2_brecets_mc();
	this.instance_5.setTransform(10,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

	// animation
	this.instance_6 = new lib.hero2_lips0_mc();
	this.instance_6.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

	// animation
	this.instance_7 = new lib.hero2_head_mc();
	this.instance_7.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

	// animation
	this.instance_8 = new lib.hero2_boby0_mc();
	this.instance_8.setTransform(10.5,260.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15));

	// animation
	this.instance_9 = new lib.hero2_hair0_mc();
	this.instance_9.setTransform(12,-96.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-268.5,-308.8,625.9,710.8);
p.frameBounds = [rect, new cjs.Rectangle(-268.5,-308.8,619,710.8), new cjs.Rectangle(-268.5,-308.8,612,710.8), new cjs.Rectangle(-268.5,-308.8,605.1,710.8), new cjs.Rectangle(-268.5,-308.8,598.5,710.8), new cjs.Rectangle(-268.5,-308.8,599.5,710.8), new cjs.Rectangle(-268.5,-308.8,600.6,710.8), new cjs.Rectangle(-268.5,-308.8,601.6,710.8), new cjs.Rectangle(-268.5,-308.8,602.8,710.8), new cjs.Rectangle(-268.5,-308.8,603.9,710.8), new cjs.Rectangle(-268.5,-308.8,604.9,710.8), new cjs.Rectangle(-268.5,-308.8,606,710.8), new cjs.Rectangle(-268.5,-308.8,607,710.8), new cjs.Rectangle(-268.5,-308.8,608.1,710.8), new cjs.Rectangle(-268.5,-308.8,609.2,710.8)];


(lib.animation2_21_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pipetka_mc();
	this.instance.setTransform(61.4,409.2,1,1,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:2.4,y:-50.8},14).wait(21).to({rotation:135.2,x:608.3,y:391.2},13).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.kaplya_mc();
	this.instance_1.setTransform(-41.5,19.3,0.418,0.418,0,0,0,0,-20);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1},15).to({alpha:0.012},6).to({_off:true},1).wait(14));

	// animation
	this.instance_2 = new lib.gift5_mc();
	this.instance_2.setTransform(250.4,166);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

	// animation
	this.instance_3 = new lib.hero2_fringe0_mc();
	this.instance_3.setTransform(10.6,-159.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50));

	// animation
	this.instance_4 = new lib.hero2_eyebrows1_mc();
	this.instance_4.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50));

	// animation
	this.instance_5 = new lib.hero2_eyes1_mc();
	this.instance_5.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50));

	// animation
	this.instance_6 = new lib.hero2_prish_mc();
	this.instance_6.setTransform(-45,43.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(29).to({alpha:0.012},6).to({_off:true},1).wait(14));

	// animation
	this.instance_7 = new lib.hero2_brecets_mc();
	this.instance_7.setTransform(10,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50));

	// animation
	this.instance_8 = new lib.hero2_lips0_mc();
	this.instance_8.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50));

	// animation
	this.instance_9 = new lib.hero2_head_mc();
	this.instance_9.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// animation
	this.instance_10 = new lib.hero2_boby0_mc();
	this.instance_10.setTransform(10.5,260.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

	// animation
	this.instance_11 = new lib.hero2_hair0_mc();
	this.instance_11.setTransform(12,-96.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-268.5,-308.8,625.9,805.4);
p.frameBounds = [rect, new cjs.Rectangle(-268.5,-308.8,625.9,772.5), new cjs.Rectangle(-268.5,-308.8,625.9,739.6), rect=new cjs.Rectangle(-268.5,-308.8,625.9,710.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-268.5,-308.8,640.6,710.8), new cjs.Rectangle(-268.5,-308.8,685.3,710.8), new cjs.Rectangle(-268.5,-308.8,732.7,710.8), new cjs.Rectangle(-268.5,-308.8,780.8,710.8), new cjs.Rectangle(-268.5,-308.8,827.1,710.8), new cjs.Rectangle(-268.5,-308.8,871.8,710.8), new cjs.Rectangle(-268.5,-308.8,914.7,738.3), new cjs.Rectangle(-268.5,-308.8,955.9,779.3), new cjs.Rectangle(-268.5,-308.8,625.9,710.8)];


(lib.animation2_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.gift3_mc();
	this.instance.setTransform(-275.6,159.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.27,scaleY:0.27},9).to({_off:true},1).wait(30));

	// animation
	this.instance_1 = new lib.bottle_mc();
	this.instance_1.setTransform(-273.6,185);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({rotation:-14.5},10).to({x:20,y:410},20).wait(1));

	// animation
	this.instance_2 = new lib.gift5_mc();
	this.instance_2.setTransform(250.4,166);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40));

	// animation
	this.instance_3 = new lib.hero2_fringe0_mc();
	this.instance_3.setTransform(10.6,-159.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40));

	// animation
	this.instance_4 = new lib.hero2_eyebrows1_mc();
	this.instance_4.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40));

	// animation
	this.instance_5 = new lib.hero2_eyes1_mc();
	this.instance_5.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(40));

	// animation
	this.instance_6 = new lib.hero2_prish_mc();
	this.instance_6.setTransform(-45,43.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(40));

	// animation
	this.instance_7 = new lib.hero2_brecets_mc();
	this.instance_7.setTransform(10,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(40));

	// animation
	this.instance_8 = new lib.hero2_lips0_mc();
	this.instance_8.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(40));

	// animation
	this.instance_9 = new lib.hero2_head_mc();
	this.instance_9.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(40));

	// animation
	this.instance_10 = new lib.hero2_boby0_mc();
	this.instance_10.setTransform(10.5,260.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(40));

	// animation
	this.instance_11 = new lib.hero2_hair0_mc();
	this.instance_11.setTransform(12,-96.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-377.1,-308.8,734.5,710.8);
p.frameBounds = [rect, new cjs.Rectangle(-368.8,-308.8,726.2,710.8), new cjs.Rectangle(-360.5,-308.8,717.9,710.8), new cjs.Rectangle(-352.3,-308.8,709.7,710.8), new cjs.Rectangle(-344,-308.8,701.4,710.8), new cjs.Rectangle(-335.7,-308.8,693.1,710.8), new cjs.Rectangle(-327.4,-308.8,684.8,710.8), new cjs.Rectangle(-319.2,-308.8,676.6,710.8), new cjs.Rectangle(-310.9,-308.8,668.3,710.8), new cjs.Rectangle(-302.6,-308.8,660,710.8), new cjs.Rectangle(-300.4,-308.8,657.8,710.8), new cjs.Rectangle(-302.4,-308.8,659.8,710.8), new cjs.Rectangle(-304.4,-308.8,661.8,710.8), new cjs.Rectangle(-306.3,-308.8,663.7,710.8), new cjs.Rectangle(-308,-308.8,665.4,710.8), new cjs.Rectangle(-310,-308.8,667.4,710.8), new cjs.Rectangle(-311.9,-308.8,669.3,710.8), new cjs.Rectangle(-313.8,-308.8,671.2,710.8), new cjs.Rectangle(-315.6,-308.8,673,710.8), new cjs.Rectangle(-317.4,-308.8,674.8,710.8), new cjs.Rectangle(-302.6,-308.8,660,710.8), new cjs.Rectangle(-287.9,-308.8,645.3,710.8), new cjs.Rectangle(-273.2,-308.8,630.6,710.8), rect=new cjs.Rectangle(-268.5,-308.8,625.9,710.8), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-268.5,-308.8,625.9,711), new cjs.Rectangle(-268.5,-308.8,625.9,722.2), new cjs.Rectangle(-268.5,-308.8,625.9,733.5), new cjs.Rectangle(-268.5,-308.8,625.9,744.7), new cjs.Rectangle(-268.5,-308.8,625.9,756), new cjs.Rectangle(-268.5,-308.8,625.9,767.2), new cjs.Rectangle(-268.5,-308.8,625.9,778.5), new cjs.Rectangle(-268.5,-308.8,625.9,789.7), new cjs.Rectangle(-268.5,-308.8,625.9,801.1)];


(lib.animation2_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.gift3_mc();
	this.instance.setTransform(-275.6,416.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84).to({_off:false},0).to({y:159.3},13).to({y:149.3},4).to({y:159.3},4).wait(10));

	// animation
	this.instance_1 = new lib.gift5_mc();
	this.instance_1.setTransform(250.4,402.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(97).to({_off:false},0).to({y:166},9).to({y:156},4).to({y:166},4).wait(1));

	// animation
	this.instance_2 = new lib.stick1_mc();
	this.instance_2.setTransform(211.9,187.4,1,1,-48.7,0,0,1.4,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-10.1,y:87.4},9).to({regY:-0.2,rotation:-36.5,x:-46.1,y:-72.5},7).to({x:60.1,y:-98.5},6).to({x:177.1,y:-53.5},7).to({x:190.1,y:76.5},7).to({x:66.1,y:98.5},7).to({x:62.1,y:-25.5},8).to({x:-13.9,y:128},7).to({x:62.1,y:216.1},6).to({x:155.1,y:136.1},8).to({x:260.1,y:405.1},6).to({_off:true},1).wait(36));

	// animation
	this.instance_3 = new lib.hero2_fringe0_mc();
	this.instance_3.setTransform(10.6,-159.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(115));

	// animation
	this.instance_4 = new lib.hero2_eyebrows1_mc();
	this.instance_4.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(115));

	// animation
	this.instance_5 = new lib.hero2_eyes1_mc();
	this.instance_5.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(115));

	// animation
	this.instance_6 = new lib.facemask1_mc();
	this.instance_6.setTransform(8.4,-44.3,1.263,1.263);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({alpha:1},69).to({alpha:0.012},15).to({_off:true},1).wait(21));

	// animation
	this.instance_7 = new lib.hero2_prish_mc();
	this.instance_7.setTransform(-45,43.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(115));

	// animation
	this.instance_8 = new lib.hero2_brecets_mc();
	this.instance_8.setTransform(10,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(115));

	// animation
	this.instance_9 = new lib.hero2_lips0_mc();
	this.instance_9.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(115));

	// animation
	this.instance_10 = new lib.hero1_prishi_mc();
	this.instance_10.setTransform(14,-17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(78).to({alpha:0.012},10).to({_off:true},1).wait(26));

	// animation
	this.instance_11 = new lib.hero2_head_mc();
	this.instance_11.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(115));

	// animation
	this.instance_12 = new lib.hero2_boby0_mc();
	this.instance_12.setTransform(10.5,260.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(115));

	// animation
	this.instance_13 = new lib.hero2_hair0_mc();
	this.instance_13.setTransform(12,-96.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(115));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-268.5,-308.8,573.8,710.8);
p.frameBounds = [rect, rect=new cjs.Rectangle(-268.5,-308.8,561,710.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-268.5,-308.8,571.3,723.9), new cjs.Rectangle(-268.5,-308.8,588.8,768.7), new cjs.Rectangle(-268.5,-308.8,606.4,813.7), rect=new cjs.Rectangle(-268.5,-308.8,561,710.8), rect, rect, rect, rect, new cjs.Rectangle(-377.1,-308.8,669.6,837.2), new cjs.Rectangle(-377.1,-308.8,669.6,817.4), new cjs.Rectangle(-377.1,-308.8,669.6,797.6), new cjs.Rectangle(-377.1,-308.8,669.6,777.8), new cjs.Rectangle(-377.1,-308.8,669.6,758), new cjs.Rectangle(-377.1,-308.8,669.6,738.1), new cjs.Rectangle(-377.1,-308.8,669.6,718.3), rect=new cjs.Rectangle(-377.1,-308.8,669.6,710.8), rect, rect, rect, rect, rect, new cjs.Rectangle(-377.1,-308.8,734.5,809.2), new cjs.Rectangle(-377.1,-308.8,734.5,782.9), new cjs.Rectangle(-377.1,-308.8,734.5,756.6), new cjs.Rectangle(-377.1,-308.8,734.5,730.2), rect=new cjs.Rectangle(-377.1,-308.8,734.5,710.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(26));

	// animation
	this.instance = new lib.circle_lvl2_0_3_mc();
	this.instance.setTransform(-234,76.4);

	this.instance_1 = new lib.circle_lvl2_3_mc();
	this.instance_1.setTransform(-234,76.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},50).to({state:[{t:this.instance_1}]},10).to({state:[]},1).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(50).to({x:-569.9},10).to({_off:true},1).wait(13));

	// animation
	this.instance_2 = new lib.stick1_mc();
	this.instance_2.setTransform(211.9,395.4,1,1,-48.7,0,0,1.4,-0.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(62).to({_off:false},0).to({y:187.4},12).wait(1));

	// animation
	this.instance_3 = new lib.hero2_fringe0_mc();
	this.instance_3.setTransform(10.6,-159.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(75));

	// animation
	this.instance_4 = new lib.hero2_eyebrows1_mc();
	this.instance_4.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(75));

	// animation
	this.instance_5 = new lib.hero2_eyes1_mc();
	this.instance_5.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(75));

	// animation
	this.instance_6 = new lib.hero2_prish_mc();
	this.instance_6.setTransform(-45,43.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(75));

	// animation
	this.instance_7 = new lib.hero2_brecets_mc();
	this.instance_7.setTransform(10,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(75));

	// animation
	this.instance_8 = new lib.hero2_lips0_mc();
	this.instance_8.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(75));

	// animation
	this.instance_9 = new lib.hero1_prish1_mc();
	this.instance_9.setTransform(-78,-163.9);

	this.instance_10 = new lib.hero1_prish1_mc();
	this.instance_10.setTransform(15,129.5);

	this.instance_11 = new lib.hero1_prish1_mc();
	this.instance_11.setTransform(-1,-7.5);

	this.instance_12 = new lib.hero1_prish1_mc();
	this.instance_12.setTransform(-55,97);

	this.instance_13 = new lib.hero1_prish1_mc();
	this.instance_13.setTransform(106,-146.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(75));

	// animation
	this.instance_14 = new lib.hero2_head_mc();
	this.instance_14.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(75));

	// animation
	this.instance_15 = new lib.hero2_boby0_mc();
	this.instance_15.setTransform(10.5,260.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(75));

	// animation
	this.instance_16 = new lib.hero2_hair0_mc();
	this.instance_16.setTransform(12,-96.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-393.5,-308.8,686,710.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-427.1,-308.8,719.6,710.8), new cjs.Rectangle(-460.7,-308.8,753.2,710.8), new cjs.Rectangle(-494.3,-308.8,786.8,710.8), new cjs.Rectangle(-527.9,-308.8,820.4,710.8), new cjs.Rectangle(-561.4,-308.8,853.9,710.8), new cjs.Rectangle(-595,-308.8,887.5,710.8), new cjs.Rectangle(-628.6,-308.8,921.1,710.8), new cjs.Rectangle(-662.2,-308.8,954.7,710.8), new cjs.Rectangle(-695.8,-308.8,988.3,710.8), new cjs.Rectangle(-729.4,-308.8,1021.9,710.8), new cjs.Rectangle(-268.5,-308.8,573.8,790.6), new cjs.Rectangle(-268.5,-308.8,573.6,773.2), new cjs.Rectangle(-268.5,-308.8,573.6,755.9), new cjs.Rectangle(-268.5,-308.8,573.6,738.6), new cjs.Rectangle(-268.5,-308.8,573.6,721.2), rect=new cjs.Rectangle(-268.5,-308.8,573.6,710.8), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-268.5,-308.8,573.8,710.8)];


(lib.animation2_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.circle_lvl2_0_2_mc();
	this.instance.setTransform(-234,76.4);

	this.instance_1 = new lib.circle_lvl2_2_mc();
	this.instance_1.setTransform(-234,76.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},64).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},17).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(74).to({x:-334.9},10).wait(17).to({x:-234},17).wait(1));

	// animation
	this.instance_2 = new lib.patch_mc();
	this.instance_2.setTransform(87.6,335.1,1.275,1.275,0,-2.7,177.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75).to({_off:false},0).to({y:-6.8},10).wait(9).to({alpha:0.012},8).to({_off:true},1).wait(17));

	// animation
	this.instance_3 = new lib.patch_mc();
	this.instance_3.setTransform(-66.6,333.1,1.275,1.275,2.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(75).to({_off:false},0).to({y:-8.8},10).wait(9).to({alpha:0.012},8).to({_off:true},1).wait(17));

	// animation
	this.instance_4 = new lib.hero2_fringe0_mc();
	this.instance_4.setTransform(10.6,-159.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

	// animation
	this.instance_5 = new lib.hero2_eyebrows1_mc();
	this.instance_5.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120));

	// animation
	this.instance_6 = new lib.hero2_eyes1_mc();
	this.instance_6.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120));

	// animation
	this.instance_7 = new lib.hero1_sinyak_mc();
	this.instance_7.setTransform(92.8,-18.1,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(94).to({alpha:0.012},8).to({_off:true},1).wait(17));

	// animation
	this.instance_8 = new lib.hero1_sinyak_mc();
	this.instance_8.setTransform(-70.6,-18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(94).to({alpha:0.012},8).to({_off:true},1).wait(17));

	// animation
	this.instance_9 = new lib.hero2_prish_mc();
	this.instance_9.setTransform(-45,43.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(120));

	// animation
	this.instance_10 = new lib.hero2_brecets_mc();
	this.instance_10.setTransform(10,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(120));

	// animation
	this.instance_11 = new lib.hero2_lips0_mc();
	this.instance_11.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(120));

	// animation
	this.instance_12 = new lib.hero1_prish1_mc();
	this.instance_12.setTransform(-78,-163.9);

	this.instance_13 = new lib.hero1_prish1_mc();
	this.instance_13.setTransform(15,129.5);

	this.instance_14 = new lib.hero1_prish1_mc();
	this.instance_14.setTransform(-1,-7.5);

	this.instance_15 = new lib.hero1_prish1_mc();
	this.instance_15.setTransform(-55,97);

	this.instance_16 = new lib.hero1_prish1_mc();
	this.instance_16.setTransform(106,-146.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(120));

	// animation
	this.instance_17 = new lib.hero2_head_mc();
	this.instance_17.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(120));

	// animation
	this.instance_18 = new lib.hero2_boby0_mc();
	this.instance_18.setTransform(10.5,260.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(120));

	// animation
	this.instance_19 = new lib.hero2_hair0_mc();
	this.instance_19.setTransform(12,-96.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-393.5,-308.8,686,710.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-403.6,-308.8,696.1,710.8), new cjs.Rectangle(-413.7,-308.8,706.2,710.8), new cjs.Rectangle(-423.7,-308.8,716.2,710.8), new cjs.Rectangle(-433.8,-308.8,726.3,710.8), new cjs.Rectangle(-443.9,-308.8,736.4,710.8), new cjs.Rectangle(-454,-308.8,746.5,710.8), new cjs.Rectangle(-464.1,-308.8,756.6,710.8), new cjs.Rectangle(-474.2,-308.8,766.7,710.8), new cjs.Rectangle(-484.3,-308.8,776.8,710.8), rect=new cjs.Rectangle(-494.4,-308.8,786.8,710.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-488.4,-308.8,780.9,710.8), new cjs.Rectangle(-482.5,-308.8,775,710.8), new cjs.Rectangle(-476.6,-308.8,769.1,710.8), new cjs.Rectangle(-470.6,-308.8,763.1,710.8), new cjs.Rectangle(-464.7,-308.8,757.2,710.8), new cjs.Rectangle(-458.8,-308.8,751.3,710.8), new cjs.Rectangle(-452.8,-308.8,745.3,710.8), new cjs.Rectangle(-446.9,-308.8,739.3,710.8), new cjs.Rectangle(-441,-308.8,733.5,710.8), new cjs.Rectangle(-435,-308.8,727.5,710.8), new cjs.Rectangle(-429.1,-308.8,721.6,710.8), new cjs.Rectangle(-423.2,-308.8,715.7,710.8), new cjs.Rectangle(-417.2,-308.8,709.7,710.8), new cjs.Rectangle(-411.3,-308.8,703.8,710.8), new cjs.Rectangle(-405.3,-308.8,697.8,710.8), new cjs.Rectangle(-399.4,-308.8,691.9,710.8), new cjs.Rectangle(-393.5,-308.8,686,710.8)];


(lib.animation2_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		try
		{
			app.addSoundFunc("gift_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(21));

	// animation
	this.instance = new lib.circle_lvl2_mc();
	this.instance.setTransform(-607.9,76.4);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({x:-234,alpha:1},15).wait(1));

	// animation
	this.instance_1 = new lib.pincet_mc();
	this.instance_1.setTransform(252.5,184.5,0.999,0.999,48.4,0,0,96.5,25.3);

	this.instance_2 = new lib.pincet2_mc();
	this.instance_2.setTransform(41.2,-178.5,0.999,0.999,-20.1,0,0,96.5,25.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,rotation:-20.1,x:41.2,y:-178.5},10).wait(5).to({_off:false,x:123.2,y:-181.2},5).to({rotation:69.4,x:255.2,y:-90.8},9).to({x:473.2,y:391.1},19).to({_off:true},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},10).to({x:78.2,y:-172.2},5).to({_off:true,x:123.2,y:-181.2},5).wait(45));

	// animation
	this.instance_3 = new lib.hero2_fringe0_mc();
	this.instance_3.setTransform(10.6,-159.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(65));

	// animation
	this.instance_4 = new lib.hero2_eyebrows0_mc();
	this.instance_4.setTransform(8.5,-104.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({alpha:0.012},10).to({_off:true},1).wait(44));

	// animation
	this.instance_5 = new lib.hero2_eyebrows1_mc();
	this.instance_5.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(65));

	// animation
	this.instance_6 = new lib.hero2_eyes1_mc();
	this.instance_6.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(65));

	// animation
	this.instance_7 = new lib.hero1_sinyak_mc();
	this.instance_7.setTransform(92.8,-18.1,1,1,0,0,180);

	this.instance_8 = new lib.hero1_sinyak_mc();
	this.instance_8.setTransform(-70.6,-18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(65));

	// animation
	this.instance_9 = new lib.hero2_prish_mc();
	this.instance_9.setTransform(-45,43.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(65));

	// animation
	this.instance_10 = new lib.hero2_brecets_mc();
	this.instance_10.setTransform(10,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(65));

	// animation
	this.instance_11 = new lib.hero2_lips0_mc();
	this.instance_11.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(65));

	// animation
	this.instance_12 = new lib.hero1_prish1_mc();
	this.instance_12.setTransform(-78,-163.9);

	this.instance_13 = new lib.hero1_prish1_mc();
	this.instance_13.setTransform(15,129.5);

	this.instance_14 = new lib.hero1_prish1_mc();
	this.instance_14.setTransform(-1,-7.5);

	this.instance_15 = new lib.hero1_prish1_mc();
	this.instance_15.setTransform(-55,97);

	this.instance_16 = new lib.hero1_prish1_mc();
	this.instance_16.setTransform(106,-146.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(65));

	// animation
	this.instance_17 = new lib.hero2_head_mc();
	this.instance_17.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(65));

	// animation
	this.instance_18 = new lib.hero2_boby0_mc();
	this.instance_18.setTransform(10.5,260.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(65));

	// animation
	this.instance_19 = new lib.hero2_hair0_mc();
	this.instance_19.setTransform(12,-96.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-268.5,-308.8,643.1,710.8);
p.frameBounds = [rect, new cjs.Rectangle(-268.5,-308.8,601,710.8), new cjs.Rectangle(-268.5,-308.8,583.4,710.8), new cjs.Rectangle(-268.5,-308.8,564.3,710.8), rect=new cjs.Rectangle(-268.5,-308.8,561,710.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-268.5,-308.8,571.2,710.8), new cjs.Rectangle(-268.5,-308.8,581.9,710.8), new cjs.Rectangle(-268.5,-308.8,589.4,710.8), new cjs.Rectangle(-268.5,-308.8,594.5,710.8), new cjs.Rectangle(-268.5,-308.8,629.7,710.8), new cjs.Rectangle(-268.5,-308.8,608.5,710.8), new cjs.Rectangle(-268.5,-308.8,620,710.8), new cjs.Rectangle(-268.5,-308.8,631.5,710.8), new cjs.Rectangle(-268.5,-308.8,643,710.8), new cjs.Rectangle(-268.5,-308.8,654.4,710.8), new cjs.Rectangle(-268.5,-308.8,665.9,710.8), new cjs.Rectangle(-268.5,-308.8,677.4,710.8), new cjs.Rectangle(-268.5,-308.8,688.9,710.8), new cjs.Rectangle(-268.5,-308.8,700.3,710.8), new cjs.Rectangle(-268.5,-308.8,711.8,710.8), new cjs.Rectangle(-268.5,-308.8,723.3,710.8), new cjs.Rectangle(-268.5,-308.8,734.8,710.8), new cjs.Rectangle(-268.5,-308.8,746.2,710.8), new cjs.Rectangle(-268.5,-308.8,757.7,710.8), new cjs.Rectangle(-268.5,-308.8,769.2,710.8), new cjs.Rectangle(-268.5,-308.8,780.7,724), new cjs.Rectangle(-268.5,-308.8,792.1,749.4), new cjs.Rectangle(-268.5,-308.8,803.6,774.8), new cjs.Rectangle(-268.5,-308.8,847.7,819.6), new cjs.Rectangle(-767.4,-308.8,1059.9,710.8), new cjs.Rectangle(-742.5,-308.8,1035,710.8), new cjs.Rectangle(-717.6,-308.8,1010.1,710.8), new cjs.Rectangle(-692.6,-308.8,985.1,710.8), new cjs.Rectangle(-667.7,-308.8,960.2,710.8), new cjs.Rectangle(-642.8,-308.8,935.3,710.8), new cjs.Rectangle(-617.8,-308.8,910.3,710.8), new cjs.Rectangle(-592.9,-308.8,885.4,710.8), new cjs.Rectangle(-568,-308.8,860.5,710.8), new cjs.Rectangle(-543.1,-308.8,835.6,710.8), new cjs.Rectangle(-518.1,-308.8,810.6,710.8), new cjs.Rectangle(-493.2,-308.8,785.7,710.8), new cjs.Rectangle(-468.3,-308.8,760.8,710.8), new cjs.Rectangle(-443.3,-308.8,735.8,710.8), new cjs.Rectangle(-418.4,-308.8,710.9,710.8), new cjs.Rectangle(-393.5,-308.8,686,710.8)];


(lib.animation2_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.gift5_mc();
	this.instance.setTransform(250.4,166);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.19,scaleY:0.19},8).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.pincet_mc();
	this.instance_1.setTransform(252.5,184.5,0.741,0.741,-20.7,0,0,96.4,25.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:96.5,scaleX:1,scaleY:1,rotation:48.4},9).wait(1));

	// animation
	this.instance_2 = new lib.hero2_fringe0_mc();
	this.instance_2.setTransform(10.6,-159.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// animation
	this.instance_3 = new lib.hero2_eyebrows0_mc();
	this.instance_3.setTransform(8.5,-104.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.hero2_eyebrows1_mc();
	this.instance_4.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.hero2_eyes1_mc();
	this.instance_5.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// animation
	this.instance_6 = new lib.hero1_sinyak_mc();
	this.instance_6.setTransform(92.8,-18.1,1,1,0,0,180);

	this.instance_7 = new lib.hero1_sinyak_mc();
	this.instance_7.setTransform(-70.6,-18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(10));

	// animation
	this.instance_8 = new lib.hero2_prish_mc();
	this.instance_8.setTransform(-45,43.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// animation
	this.instance_9 = new lib.hero2_brecets_mc();
	this.instance_9.setTransform(10,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// animation
	this.instance_10 = new lib.hero2_lips0_mc();
	this.instance_10.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// animation
	this.instance_11 = new lib.hero1_prish1_mc();
	this.instance_11.setTransform(-78,-163.9);

	this.instance_12 = new lib.hero1_prish1_mc();
	this.instance_12.setTransform(15,129.5);

	this.instance_13 = new lib.hero1_prish1_mc();
	this.instance_13.setTransform(-1,-7.5);

	this.instance_14 = new lib.hero1_prish1_mc();
	this.instance_14.setTransform(-55,97);

	this.instance_15 = new lib.hero1_prish1_mc();
	this.instance_15.setTransform(106,-146.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]}).wait(10));

	// animation
	this.instance_16 = new lib.hero2_head_mc();
	this.instance_16.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10));

	// animation
	this.instance_17 = new lib.hero2_boby0_mc();
	this.instance_17.setTransform(10.5,260.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(10));

	// animation
	this.instance_18 = new lib.hero2_hair0_mc();
	this.instance_18.setTransform(12,-96.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-268.5,-308.8,625.9,710.8);
p.frameBounds = [rect, new cjs.Rectangle(-268.5,-308.8,615,710.8), new cjs.Rectangle(-268.5,-308.8,604.1,710.8), new cjs.Rectangle(-268.5,-308.8,604.5,710.8), new cjs.Rectangle(-268.5,-308.8,610.7,710.8), new cjs.Rectangle(-268.5,-308.8,615.7,710.8), new cjs.Rectangle(-268.5,-308.8,618.8,710.8), new cjs.Rectangle(-268.5,-308.8,620.2,710.8), new cjs.Rectangle(-268.5,-308.8,619.7,710.8), new cjs.Rectangle(-268.5,-308.8,643.1,710.8)];


(lib.animation2_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pen_mc();
	this.instance.setTransform(-9.9,197.6,0.619,0.619,35.5,0,0,11.3,145.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-125,y:-96.3},9).wait(3).to({x:58.6,y:-78.3},11).wait(3).to({regX:11.2,regY:145.5,rotation:32.5,x:-44.7,y:61.7},10).wait(3).to({x:-101.7,y:166.6},10).wait(3).to({regX:11.3,rotation:23,x:-17.6,y:206},11).wait(3).to({x:-227.4,y:421.9},12).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.gift5_mc();
	this.instance_1.setTransform(250.4,166);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

	// animation
	this.instance_2 = new lib.hero2_fringe0_mc();
	this.instance_2.setTransform(10.6,-159.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80));

	// animation
	this.instance_3 = new lib.hero2_eyebrows0_mc();
	this.instance_3.setTransform(8.5,-104.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(80));

	// animation
	this.instance_4 = new lib.hero2_eyebrows1_mc();
	this.instance_4.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(80));

	// animation
	this.instance_5 = new lib.hero2_eyes1_mc();
	this.instance_5.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(80));

	// animation
	this.instance_6 = new lib.hero1_sinyak_mc();
	this.instance_6.setTransform(92.8,-18.1,1,1,0,0,180);

	this.instance_7 = new lib.hero1_sinyak_mc();
	this.instance_7.setTransform(-70.6,-18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(80));

	// animation
	this.instance_8 = new lib.hero2_prish_mc();
	this.instance_8.setTransform(-45,43.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(80));

	// animation
	this.instance_9 = new lib.hero2_brecets_mc();
	this.instance_9.setTransform(10,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(80));

	// animation
	this.instance_10 = new lib.hero2_lips0_mc();
	this.instance_10.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(80));

	// animation
	this.instance_11 = new lib.hero1_prish2_mc();
	this.instance_11.setTransform(15,129.5);

	this.instance_12 = new lib.hero1_prish2_mc();
	this.instance_12.setTransform(-1,-7.5);

	this.instance_13 = new lib.hero1_prish2_mc();
	this.instance_13.setTransform(-57,96.6);

	this.instance_14 = new lib.hero1_prish2_mc();
	this.instance_14.setTransform(105.9,-145.4);

	this.instance_15 = new lib.hero1_prish2_mc();
	this.instance_15.setTransform(-77,-163.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12,p:{x:-1,y:-7.5}},{t:this.instance_11}]}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12,p:{x:-1,y:-7.5}},{t:this.instance_11}]},12).to({state:[{t:this.instance_13},{t:this.instance_12,p:{x:-1,y:-7.5}},{t:this.instance_11}]},14).to({state:[{t:this.instance_12,p:{x:-57,y:96.6}},{t:this.instance_11}]},13).to({state:[{t:this.instance_11}]},13).to({state:[]},14).wait(14));

	// animation
	this.instance_16 = new lib.hero1_prish1_mc();
	this.instance_16.setTransform(-78,-163.9);

	this.instance_17 = new lib.hero1_prish1_mc();
	this.instance_17.setTransform(15,129.5);

	this.instance_18 = new lib.hero1_prish1_mc();
	this.instance_18.setTransform(-1,-7.5);

	this.instance_19 = new lib.hero1_prish1_mc();
	this.instance_19.setTransform(-55,97);

	this.instance_20 = new lib.hero1_prish1_mc();
	this.instance_20.setTransform(106,-146.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]}).wait(80));

	// animation
	this.instance_21 = new lib.hero2_head_mc();
	this.instance_21.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(80));

	// animation
	this.instance_22 = new lib.hero2_boby0_mc();
	this.instance_22.setTransform(10.5,260.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(80));

	// animation
	this.instance_23 = new lib.hero2_hair0_mc();
	this.instance_23.setTransform(12,-96.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-268.5,-308.8,625.9,710.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-268.5,-308.8,625.9,726.1), new cjs.Rectangle(-268.5,-308.8,625.9,744.1), new cjs.Rectangle(-268.5,-308.8,625.9,762.1), new cjs.Rectangle(-268.5,-308.8,625.9,780.1), new cjs.Rectangle(-268.5,-308.8,625.9,798.1), new cjs.Rectangle(-268.5,-308.8,625.9,816.2), new cjs.Rectangle(-268.5,-308.8,625.9,710.8)];


(lib.animation2_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.gift4_mc();
	this.instance.setTransform(-12.5,195.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.29,scaleY:0.29},8).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.pen_mc();
	this.instance_1.setTransform(-10,197.6,0.31,0.31,35.5,0,0,11.1,145.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:11.3,scaleX:0.62,scaleY:0.62,x:-9.9},9).wait(1));

	// animation
	this.instance_2 = new lib.gift5_mc();
	this.instance_2.setTransform(250.4,166);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// animation
	this.instance_3 = new lib.hero2_fringe0_mc();
	this.instance_3.setTransform(10.6,-159.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// animation
	this.instance_4 = new lib.hero2_eyebrows0_mc();
	this.instance_4.setTransform(8.5,-104.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

	// animation
	this.instance_5 = new lib.hero2_eyebrows1_mc();
	this.instance_5.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10));

	// animation
	this.instance_6 = new lib.hero2_eyes1_mc();
	this.instance_6.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10));

	// animation
	this.instance_7 = new lib.hero1_sinyak_mc();
	this.instance_7.setTransform(92.8,-18.1,1,1,0,0,180);

	this.instance_8 = new lib.hero1_sinyak_mc();
	this.instance_8.setTransform(-70.6,-18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(10));

	// animation
	this.instance_9 = new lib.hero2_prish_mc();
	this.instance_9.setTransform(-45,43.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// animation
	this.instance_10 = new lib.hero2_brecets_mc();
	this.instance_10.setTransform(10,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// animation
	this.instance_11 = new lib.hero2_lips0_mc();
	this.instance_11.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10));

	// animation
	this.instance_12 = new lib.hero1_prish2_mc();
	this.instance_12.setTransform(15,129.5);

	this.instance_13 = new lib.hero1_prish2_mc();
	this.instance_13.setTransform(-1,-7.5);

	this.instance_14 = new lib.hero1_prish2_mc();
	this.instance_14.setTransform(-57,96.6);

	this.instance_15 = new lib.hero1_prish2_mc();
	this.instance_15.setTransform(105.9,-145.4);

	this.instance_16 = new lib.hero1_prish2_mc();
	this.instance_16.setTransform(-77,-163.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(10));

	// animation
	this.instance_17 = new lib.hero1_prish1_mc();
	this.instance_17.setTransform(-78,-163.9);

	this.instance_18 = new lib.hero1_prish1_mc();
	this.instance_18.setTransform(15,129.5);

	this.instance_19 = new lib.hero1_prish1_mc();
	this.instance_19.setTransform(-1,-7.5);

	this.instance_20 = new lib.hero1_prish1_mc();
	this.instance_20.setTransform(-55,97);

	this.instance_21 = new lib.hero1_prish1_mc();
	this.instance_21.setTransform(106,-146.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(10));

	// animation
	this.instance_22 = new lib.hero2_head_mc();
	this.instance_22.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(10));

	// animation
	this.instance_23 = new lib.hero2_boby0_mc();
	this.instance_23.setTransform(10.5,260.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(10));

	// animation
	this.instance_24 = new lib.hero2_hair0_mc();
	this.instance_24.setTransform(12,-96.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-268.5,-308.8,625.9,710.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.gift4_mc();
	this.instance.setTransform(-12.5,195.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(75));

	// animation
	this.instance_1 = new lib.gift5_mc();
	this.instance_1.setTransform(250.4,166);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(75));

	// animation
	this.instance_2 = new lib.towel_mc();
	this.instance_2.setTransform(-261.3,171.9,0.491,0.491,0,0,0,193.6,242);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-97.3,y:111.4},10).to({x:-52.3,y:109},4).to({x:-84.3,y:147.6},4).to({x:11.5,y:-83.3},9).to({x:68.5,y:-86.8},4).to({x:49.5,y:-54.8},4).to({x:3.5,y:-61.9},4).to({x:87.5,y:109},9).to({x:122.8,y:143.5},4).to({x:105.8,y:175.5},4).to({x:63.5,y:124.6},4).to({x:125.5,y:134.8},4).to({x:177.5,y:462.7,alpha:0.012},9).to({_off:true},1).wait(1));

	// animation
	this.instance_3 = new lib.hero2_fringe0_mc();
	this.instance_3.setTransform(10.6,-159.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(75));

	// animation
	this.instance_4 = new lib.hero2_eyebrows0_mc();
	this.instance_4.setTransform(8.5,-104.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(75));

	// animation
	this.instance_5 = new lib.hero2_eyebrows1_mc();
	this.instance_5.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(75));

	// animation
	this.instance_6 = new lib.hero2_eyes1_mc();
	this.instance_6.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(75));

	// animation
	this.instance_7 = new lib.hero1_sinyak_mc();
	this.instance_7.setTransform(92.8,-18.1,1,1,0,0,180);

	this.instance_8 = new lib.hero1_sinyak_mc();
	this.instance_8.setTransform(-70.6,-18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(75));

	// animation
	this.instance_9 = new lib.hero2_prish_mc();
	this.instance_9.setTransform(-45,43.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(75));

	// animation
	this.instance_10 = new lib.hero2_brecets_mc();
	this.instance_10.setTransform(10,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(75));

	// animation
	this.instance_11 = new lib.hero2_lips0_mc();
	this.instance_11.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(75));

	// animation
	this.instance_12 = new lib.hero2_klaksi3_mc();
	this.instance_12.setTransform(98.5,38.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(48).to({alpha:0.012},16).to({_off:true},1).wait(10));

	// animation
	this.instance_13 = new lib.hero2_klaksi2_mc();
	this.instance_13.setTransform(-90.1,32.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10).to({alpha:0.012},8).to({_off:true},1).wait(56));

	// animation
	this.instance_14 = new lib.hero2_klaksi1_mc();
	this.instance_14.setTransform(36.4,-161.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(27).to({alpha:0.012},12).to({_off:true},1).wait(35));

	// animation
	this.instance_15 = new lib.hero1_prish2_mc();
	this.instance_15.setTransform(15,129.5);

	this.instance_16 = new lib.hero1_prish2_mc();
	this.instance_16.setTransform(-1,-7.5);

	this.instance_17 = new lib.hero1_prish2_mc();
	this.instance_17.setTransform(-57,96.6);

	this.instance_18 = new lib.hero1_prish2_mc();
	this.instance_18.setTransform(105.9,-145.4);

	this.instance_19 = new lib.hero1_prish2_mc();
	this.instance_19.setTransform(-77,-163.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(75));

	// animation
	this.instance_20 = new lib.hero1_prish1_mc();
	this.instance_20.setTransform(-78,-163.9);

	this.instance_21 = new lib.hero1_prish1_mc();
	this.instance_21.setTransform(15,129.5);

	this.instance_22 = new lib.hero1_prish1_mc();
	this.instance_22.setTransform(-1,-7.5);

	this.instance_23 = new lib.hero1_prish1_mc();
	this.instance_23.setTransform(-55,97);

	this.instance_24 = new lib.hero1_prish1_mc();
	this.instance_24.setTransform(106,-146.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20}]}).wait(75));

	// animation
	this.instance_25 = new lib.hero2_head_mc();
	this.instance_25.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(75));

	// animation
	this.instance_26 = new lib.hero2_boby0_mc();
	this.instance_26.setTransform(10.5,260.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(75));

	// animation
	this.instance_27 = new lib.hero2_hair0_mc();
	this.instance_27.setTransform(12,-96.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-356.3,-308.8,713.7,710.8);
p.frameBounds = [rect, new cjs.Rectangle(-339.8,-308.8,697.2,710.8), new cjs.Rectangle(-323.4,-308.8,680.8,710.8), new cjs.Rectangle(-307,-308.8,664.4,710.8), new cjs.Rectangle(-290.6,-308.8,648,710.8), new cjs.Rectangle(-274.3,-308.8,631.7,710.8), rect=new cjs.Rectangle(-268.5,-308.8,625.9,710.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-268.5,-308.8,625.9,744.5), new cjs.Rectangle(-268.5,-308.8,625.9,780.9), new cjs.Rectangle(-268.5,-308.8,625.9,817.3), new cjs.Rectangle(-268.5,-308.8,625.9,853.8), new cjs.Rectangle(-268.5,-308.8,625.9,890.2), new cjs.Rectangle(-268.5,-308.8,625.9,710.8)];


(lib.animation2_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.gift3_mc();
	this.instance.setTransform(-275.6,159.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.21,scaleY:0.21,x:-265.6,y:163.3,alpha:0.012},7).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.towel_mc();
	this.instance_1.setTransform(-261.3,171.9,0.377,0.377,0,0,0,193.6,242);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.49,scaleY:0.49},8).wait(1));

	// animation
	this.instance_2 = new lib.gift4_mc();
	this.instance_2.setTransform(-12.5,195.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9));

	// animation
	this.instance_3 = new lib.gift5_mc();
	this.instance_3.setTransform(250.4,166);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9));

	// animation
	this.instance_4 = new lib.hero2_fringe0_mc();
	this.instance_4.setTransform(10.6,-159.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9));

	// animation
	this.instance_5 = new lib.hero2_eyebrows0_mc();
	this.instance_5.setTransform(8.5,-104.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9));

	// animation
	this.instance_6 = new lib.hero2_eyebrows1_mc();
	this.instance_6.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9));

	// animation
	this.instance_7 = new lib.hero2_eyes1_mc();
	this.instance_7.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9));

	// animation
	this.instance_8 = new lib.hero1_sinyak_mc();
	this.instance_8.setTransform(92.8,-18.1,1,1,0,0,180);

	this.instance_9 = new lib.hero1_sinyak_mc();
	this.instance_9.setTransform(-70.6,-18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(9));

	// animation
	this.instance_10 = new lib.hero2_prish_mc();
	this.instance_10.setTransform(-45,43.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(9));

	// animation
	this.instance_11 = new lib.hero2_brecets_mc();
	this.instance_11.setTransform(10,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(9));

	// animation
	this.instance_12 = new lib.hero2_lips0_mc();
	this.instance_12.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(9));

	// animation
	this.instance_13 = new lib.hero2_klaksi3_mc();
	this.instance_13.setTransform(98.5,38.2);

	this.instance_14 = new lib.hero2_klaksi2_mc();
	this.instance_14.setTransform(-90.1,32.7);

	this.instance_15 = new lib.hero2_klaksi1_mc();
	this.instance_15.setTransform(36.4,-161.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(9));

	// animation
	this.instance_16 = new lib.hero1_prish2_mc();
	this.instance_16.setTransform(15,129.5);

	this.instance_17 = new lib.hero1_prish2_mc();
	this.instance_17.setTransform(-1,-7.5);

	this.instance_18 = new lib.hero1_prish2_mc();
	this.instance_18.setTransform(-57,96.6);

	this.instance_19 = new lib.hero1_prish2_mc();
	this.instance_19.setTransform(105.9,-145.4);

	this.instance_20 = new lib.hero1_prish2_mc();
	this.instance_20.setTransform(-77,-163.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]}).wait(9));

	// animation
	this.instance_21 = new lib.hero1_prish1_mc();
	this.instance_21.setTransform(-78,-163.9);

	this.instance_22 = new lib.hero1_prish1_mc();
	this.instance_22.setTransform(15,129.5);

	this.instance_23 = new lib.hero1_prish1_mc();
	this.instance_23.setTransform(-1,-7.5);

	this.instance_24 = new lib.hero1_prish1_mc();
	this.instance_24.setTransform(-55,97);

	this.instance_25 = new lib.hero1_prish1_mc();
	this.instance_25.setTransform(106,-146.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21}]}).wait(9));

	// animation
	this.instance_26 = new lib.hero2_head_mc();
	this.instance_26.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(9));

	// animation
	this.instance_27 = new lib.hero2_boby0_mc();
	this.instance_27.setTransform(10.5,260.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(9));

	// animation
	this.instance_28 = new lib.hero2_hair0_mc();
	this.instance_28.setTransform(12,-96.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-377.1,-308.8,734.5,710.8);
p.frameBounds = [rect, new cjs.Rectangle(-364.2,-308.8,721.6,710.8), new cjs.Rectangle(-351.4,-308.8,708.8,710.8), new cjs.Rectangle(-342.5,-308.8,699.9,710.8), new cjs.Rectangle(-345.3,-308.8,702.7,710.8), new cjs.Rectangle(-348.1,-308.8,705.5,710.8), new cjs.Rectangle(-350.8,-308.8,708.2,710.8), new cjs.Rectangle(-353.6,-308.8,711,710.8), new cjs.Rectangle(-356.3,-308.8,713.7,710.8)];


(lib.animation2_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		try
		{
			app.addSoundFunc("gift_sound", 0.2);
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
			app.addSoundFunc("gift_sound", 0.2);
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
			app.addSoundFunc("gift_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(15).call(this.frame_39).wait(15).call(this.frame_54).wait(26));

	// animation
	this.instance = new lib.gift3_mc();
	this.instance.setTransform(-275.6,416.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({y:159.3},13).to({y:149.3},4).to({y:159.3},4).wait(30));

	// animation
	this.instance_1 = new lib.gift4_mc();
	this.instance_1.setTransform(-12.5,407.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({_off:false},0).to({y:195.5},13).to({y:185.5},4).to({y:195.5},4).wait(15));

	// animation
	this.instance_2 = new lib.gift5_mc();
	this.instance_2.setTransform(250.4,402.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({y:166},10).to({y:156},4).to({y:166},4).wait(3));

	// animation
	this.instance_3 = new lib.hero2_candy3_mc();
	this.instance_3.setTransform(185.4,-92.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({y:-96.5},4).to({x:186.6,y:-340.3},14).to({_off:true},1).wait(51));

	// animation
	this.instance_4 = new lib.tongue_mc();
	this.instance_4.setTransform(193.5,-362.5,0.45,0.455);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:1.18,x:188.5,y:-181.7},10).to({scaleY:1.1,y:-190.7},4).to({scaleY:0.55,y:-370.8},14).to({_off:true},1).wait(51));

	// animation
	this.instance_5 = new lib.hero2_fringe0_mc();
	this.instance_5.setTransform(10.6,-159.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(80));

	// animation
	this.instance_6 = new lib.hero2_eyebrows0_mc();
	this.instance_6.setTransform(8.5,-104.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(80));

	// animation
	this.instance_7 = new lib.hero2_eyebrows1_mc();
	this.instance_7.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(80));

	// animation
	this.instance_8 = new lib.hero2_eyes1_mc();
	this.instance_8.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(80));

	// animation
	this.instance_9 = new lib.hero1_sinyak_mc();
	this.instance_9.setTransform(92.8,-18.1,1,1,0,0,180);

	this.instance_10 = new lib.hero1_sinyak_mc();
	this.instance_10.setTransform(-70.6,-18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(80));

	// animation
	this.instance_11 = new lib.hero2_prish_mc();
	this.instance_11.setTransform(-45,43.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(80));

	// animation
	this.instance_12 = new lib.hero2_brecets_mc();
	this.instance_12.setTransform(10,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(80));

	// animation
	this.instance_13 = new lib.hero2_lips0_mc();
	this.instance_13.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(80));

	// animation
	this.instance_14 = new lib.hero2_klaksi3_mc();
	this.instance_14.setTransform(98.5,38.2);

	this.instance_15 = new lib.hero2_klaksi2_mc();
	this.instance_15.setTransform(-90.1,32.7);

	this.instance_16 = new lib.hero2_klaksi1_mc();
	this.instance_16.setTransform(36.4,-161.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(80));

	// animation
	this.instance_17 = new lib.hero1_prish2_mc();
	this.instance_17.setTransform(15,129.5);

	this.instance_18 = new lib.hero1_prish2_mc();
	this.instance_18.setTransform(-1,-7.5);

	this.instance_19 = new lib.hero1_prish2_mc();
	this.instance_19.setTransform(-57,96.6);

	this.instance_20 = new lib.hero1_prish2_mc();
	this.instance_20.setTransform(105.9,-145.4);

	this.instance_21 = new lib.hero1_prish2_mc();
	this.instance_21.setTransform(-77,-163.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(80));

	// animation
	this.instance_22 = new lib.hero1_prish1_mc();
	this.instance_22.setTransform(-78,-163.9);

	this.instance_23 = new lib.hero1_prish1_mc();
	this.instance_23.setTransform(15,129.5);

	this.instance_24 = new lib.hero1_prish1_mc();
	this.instance_24.setTransform(-1,-7.5);

	this.instance_25 = new lib.hero1_prish1_mc();
	this.instance_25.setTransform(-55,97);

	this.instance_26 = new lib.hero1_prish1_mc();
	this.instance_26.setTransform(106,-146.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22}]}).wait(80));

	// animation
	this.instance_27 = new lib.hero2_head_mc();
	this.instance_27.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(80));

	// animation
	this.instance_28 = new lib.hero2_boby0_mc();
	this.instance_28.setTransform(10.5,260.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(80));

	// animation
	this.instance_29 = new lib.hero2_hair0_mc();
	this.instance_29.setTransform(12,-96.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-268.5,-416.3,561,818.3);
p.frameBounds = [rect, new cjs.Rectangle(-268.5,-406.6,561,808.7), new cjs.Rectangle(-268.5,-397.1,561,799.1), new cjs.Rectangle(-268.5,-387.5,561,789.5), new cjs.Rectangle(-268.5,-377.9,561,779.9), new cjs.Rectangle(-268.5,-368.3,561,770.4), new cjs.Rectangle(-268.5,-358.7,561,760.8), new cjs.Rectangle(-268.5,-349.1,561,751.1), new cjs.Rectangle(-268.5,-339.5,561,741.5), new cjs.Rectangle(-268.5,-329.9,561,732), new cjs.Rectangle(-268.5,-320.4,561,722.4), rect=new cjs.Rectangle(-268.5,-320.3,561,722.4), rect, rect, new cjs.Rectangle(-268.5,-320.4,561,722.4), new cjs.Rectangle(-268.5,-328.6,561,730.6), new cjs.Rectangle(-268.5,-336.8,561,738.9), new cjs.Rectangle(-268.5,-345,561,747.1), new cjs.Rectangle(-268.5,-353.2,561,755.3), new cjs.Rectangle(-268.5,-361.5,561,763.5), new cjs.Rectangle(-268.5,-369.7,561,771.7), new cjs.Rectangle(-268.5,-377.9,561,780), new cjs.Rectangle(-268.5,-386.1,561,788.2), new cjs.Rectangle(-268.5,-394.3,561,796.4), new cjs.Rectangle(-268.5,-402.6,561,804.7), new cjs.Rectangle(-268.5,-410.8,561,812.9), new cjs.Rectangle(-268.5,-419,561,821.1), new cjs.Rectangle(-268.5,-427.3,561,829.3), new cjs.Rectangle(-268.5,-435.5,561,837.6), new cjs.Rectangle(-377.1,-308.8,669.6,837.2), new cjs.Rectangle(-377.1,-308.8,669.6,817.4), new cjs.Rectangle(-377.1,-308.8,669.6,797.6), new cjs.Rectangle(-377.1,-308.8,669.6,777.8), new cjs.Rectangle(-377.1,-308.8,669.6,758), new cjs.Rectangle(-377.1,-308.8,669.6,738.1), new cjs.Rectangle(-377.1,-308.8,669.6,718.3), rect=new cjs.Rectangle(-377.1,-308.8,669.6,710.8), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-377.1,-308.8,669.6,805.8), new cjs.Rectangle(-377.1,-308.8,669.6,789.5), new cjs.Rectangle(-377.1,-308.8,669.6,773.2), new cjs.Rectangle(-377.1,-308.8,669.6,756.9), new cjs.Rectangle(-377.1,-308.8,669.6,740.6), new cjs.Rectangle(-377.1,-308.8,669.6,724.3), rect=new cjs.Rectangle(-377.1,-308.8,669.6,710.8), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-377.1,-308.8,734.5,809.2), new cjs.Rectangle(-377.1,-308.8,734.5,785.5), new cjs.Rectangle(-377.1,-308.8,734.5,761.8), new cjs.Rectangle(-377.1,-308.8,734.5,738.1), new cjs.Rectangle(-377.1,-308.8,734.5,714.4), rect=new cjs.Rectangle(-377.1,-308.8,734.5,710.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero2_candy2_mc();
	this.instance.setTransform(113.4,-227.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({y:-235.3},4).to({y:-358.3},9).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.tongue_mc();
	this.instance_1.setTransform(91.5,-363.9,0.45,0.489);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-255.9},6).to({scaleY:0.4,y:-260.9},4).to({y:-383.9},9).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.hero2_candy3_mc();
	this.instance_2.setTransform(185.4,-92.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21));

	// animation
	this.instance_3 = new lib.hero2_fringe0_mc();
	this.instance_3.setTransform(10.6,-159.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21));

	// animation
	this.instance_4 = new lib.hero2_eyebrows0_mc();
	this.instance_4.setTransform(8.5,-104.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(21));

	// animation
	this.instance_5 = new lib.hero2_eyebrows1_mc();
	this.instance_5.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21));

	// animation
	this.instance_6 = new lib.hero2_eyes1_mc();
	this.instance_6.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(21));

	// animation
	this.instance_7 = new lib.hero1_sinyak_mc();
	this.instance_7.setTransform(92.8,-18.1,1,1,0,0,180);

	this.instance_8 = new lib.hero1_sinyak_mc();
	this.instance_8.setTransform(-70.6,-18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(21));

	// animation
	this.instance_9 = new lib.hero2_prish_mc();
	this.instance_9.setTransform(-45,43.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(21));

	// animation
	this.instance_10 = new lib.hero2_brecets_mc();
	this.instance_10.setTransform(10,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(21));

	// animation
	this.instance_11 = new lib.hero2_lips0_mc();
	this.instance_11.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(21));

	// animation
	this.instance_12 = new lib.hero2_klaksi3_mc();
	this.instance_12.setTransform(98.5,38.2);

	this.instance_13 = new lib.hero2_klaksi2_mc();
	this.instance_13.setTransform(-90.1,32.7);

	this.instance_14 = new lib.hero2_klaksi1_mc();
	this.instance_14.setTransform(36.4,-161.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(21));

	// animation
	this.instance_15 = new lib.hero1_prish2_mc();
	this.instance_15.setTransform(15,129.5);

	this.instance_16 = new lib.hero1_prish2_mc();
	this.instance_16.setTransform(-1,-7.5);

	this.instance_17 = new lib.hero1_prish2_mc();
	this.instance_17.setTransform(-57,96.6);

	this.instance_18 = new lib.hero1_prish2_mc();
	this.instance_18.setTransform(105.9,-145.4);

	this.instance_19 = new lib.hero1_prish2_mc();
	this.instance_19.setTransform(-77,-163.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(21));

	// animation
	this.instance_20 = new lib.hero1_prish1_mc();
	this.instance_20.setTransform(-78,-163.9);

	this.instance_21 = new lib.hero1_prish1_mc();
	this.instance_21.setTransform(15,129.5);

	this.instance_22 = new lib.hero1_prish1_mc();
	this.instance_22.setTransform(-1,-7.5);

	this.instance_23 = new lib.hero1_prish1_mc();
	this.instance_23.setTransform(-55,97);

	this.instance_24 = new lib.hero1_prish1_mc();
	this.instance_24.setTransform(106,-146.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20}]}).wait(21));

	// animation
	this.instance_25 = new lib.hero2_head_mc();
	this.instance_25.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(21));

	// animation
	this.instance_26 = new lib.hero2_boby0_mc();
	this.instance_26.setTransform(10.5,260.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(21));

	// animation
	this.instance_27 = new lib.hero2_hair0_mc();
	this.instance_27.setTransform(12,-96.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-268.5,-421.6,561,823.7);
p.frameBounds = [rect, new cjs.Rectangle(-268.5,-403.6,561,805.6), new cjs.Rectangle(-268.5,-385.6,561,787.6), new cjs.Rectangle(-268.5,-367.6,561,769.6), new cjs.Rectangle(-268.5,-349.6,561,751.6), new cjs.Rectangle(-268.5,-331.6,561,733.6), new cjs.Rectangle(-268.5,-313.6,561,715.7), new cjs.Rectangle(-268.5,-312.3,561,714.4), new cjs.Rectangle(-268.5,-311.1,561,713.1), new cjs.Rectangle(-268.5,-309.8,561,711.9), new cjs.Rectangle(-268.5,-308.8,561,710.8), new cjs.Rectangle(-268.5,-322.2,561,724.3), new cjs.Rectangle(-268.5,-335.9,561,738), new cjs.Rectangle(-268.5,-349.6,561,751.6), new cjs.Rectangle(-268.5,-363.2,561,765.3), new cjs.Rectangle(-268.5,-376.9,561,779), new cjs.Rectangle(-268.5,-390.6,561,792.6), new cjs.Rectangle(-268.5,-404.2,561,806.3), new cjs.Rectangle(-268.5,-417.9,561,820), new cjs.Rectangle(-268.5,-431.6,561,833.7), new cjs.Rectangle(-268.5,-308.8,561,710.8)];


(lib.animation2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero2_candy1_mc();
	this.instance.setTransform(-109.8,-229.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({y:-232.1},4).to({x:-110.8,y:-337.4},10).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.tongue_mc();
	this.instance_1.setTransform(-107.5,-373.5,0.45,0.549);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-110.5,y:-253.5},9).to({scaleY:0.49,y:-258.5},4).to({x:-111.5,y:-363.9},10).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.hero2_candy3_mc();
	this.instance_2.setTransform(185.4,-92.5);

	this.instance_3 = new lib.hero2_candy2_mc();
	this.instance_3.setTransform(113.4,-227.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(25));

	// animation
	this.instance_4 = new lib.hero2_fringe0_mc();
	this.instance_4.setTransform(10.6,-159.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25));

	// animation
	this.instance_5 = new lib.hero2_eyebrows0_mc();
	this.instance_5.setTransform(8.5,-104.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(25));

	// animation
	this.instance_6 = new lib.hero2_eyebrows1_mc();
	this.instance_6.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25));

	// animation
	this.instance_7 = new lib.hero2_eyes1_mc();
	this.instance_7.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(25));

	// animation
	this.instance_8 = new lib.hero1_sinyak_mc();
	this.instance_8.setTransform(92.8,-18.1,1,1,0,0,180);

	this.instance_9 = new lib.hero1_sinyak_mc();
	this.instance_9.setTransform(-70.6,-18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(25));

	// animation
	this.instance_10 = new lib.hero2_prish_mc();
	this.instance_10.setTransform(-45,43.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(25));

	// animation
	this.instance_11 = new lib.hero2_brecets_mc();
	this.instance_11.setTransform(10,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(25));

	// animation
	this.instance_12 = new lib.hero2_lips0_mc();
	this.instance_12.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(25));

	// animation
	this.instance_13 = new lib.hero2_klaksi3_mc();
	this.instance_13.setTransform(98.5,38.2);

	this.instance_14 = new lib.hero2_klaksi2_mc();
	this.instance_14.setTransform(-90.1,32.7);

	this.instance_15 = new lib.hero2_klaksi1_mc();
	this.instance_15.setTransform(36.4,-161.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(25));

	// animation
	this.instance_16 = new lib.hero1_prish2_mc();
	this.instance_16.setTransform(15,129.5);

	this.instance_17 = new lib.hero1_prish2_mc();
	this.instance_17.setTransform(-1,-7.5);

	this.instance_18 = new lib.hero1_prish2_mc();
	this.instance_18.setTransform(-57,96.6);

	this.instance_19 = new lib.hero1_prish2_mc();
	this.instance_19.setTransform(105.9,-145.4);

	this.instance_20 = new lib.hero1_prish2_mc();
	this.instance_20.setTransform(-77,-163.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]}).wait(25));

	// animation
	this.instance_21 = new lib.hero1_prish1_mc();
	this.instance_21.setTransform(-78,-163.9);

	this.instance_22 = new lib.hero1_prish1_mc();
	this.instance_22.setTransform(15,129.5);

	this.instance_23 = new lib.hero1_prish1_mc();
	this.instance_23.setTransform(-1,-7.5);

	this.instance_24 = new lib.hero1_prish1_mc();
	this.instance_24.setTransform(-55,97);

	this.instance_25 = new lib.hero1_prish1_mc();
	this.instance_25.setTransform(106,-146.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21}]}).wait(25));

	// animation
	this.instance_26 = new lib.hero2_head_mc();
	this.instance_26.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(25));

	// animation
	this.instance_27 = new lib.hero2_boby0_mc();
	this.instance_27.setTransform(10.5,260.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(25));

	// animation
	this.instance_28 = new lib.hero2_hair0_mc();
	this.instance_28.setTransform(12,-96.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-268.5,-438.3,561,840.3);
p.frameBounds = [rect, new cjs.Rectangle(-268.5,-424.9,561,826.9), new cjs.Rectangle(-268.5,-411.6,561,813.6), new cjs.Rectangle(-268.5,-398.2,561,800.3), new cjs.Rectangle(-268.5,-384.9,561,786.9), new cjs.Rectangle(-268.5,-371.6,561,773.6), new cjs.Rectangle(-268.5,-358.2,561,760.3), new cjs.Rectangle(-268.5,-344.9,561,746.9), new cjs.Rectangle(-268.5,-331.6,561,733.6), new cjs.Rectangle(-268.5,-318.3,561,720.3), new cjs.Rectangle(-268.5,-317.7,561,719.8), new cjs.Rectangle(-268.5,-317.3,561,719.3), new cjs.Rectangle(-268.5,-316.7,561,718.8), new cjs.Rectangle(-268.5,-316.3,561,718.3), new cjs.Rectangle(-268.5,-326.8,561,728.8), new cjs.Rectangle(-268.5,-337.3,561,739.3), new cjs.Rectangle(-268.5,-347.8,561,749.9), new cjs.Rectangle(-268.5,-358.4,561,760.4), new cjs.Rectangle(-268.5,-368.9,561,770.9), new cjs.Rectangle(-268.5,-379.4,561,781.5), new cjs.Rectangle(-268.5,-390,561,792), new cjs.Rectangle(-268.5,-400.5,561,802.6), new cjs.Rectangle(-268.5,-411,561,813.1), new cjs.Rectangle(-268.5,-421.6,561,823.7), new cjs.Rectangle(-268.5,-308.8,561,710.8)];


(lib.animation2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.lens19_mc();
	this.instance.setTransform(-184,79.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:84.5,y:-45.3},9).to({alpha:0.012},4).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.lens19_mc();
	this.instance_1.setTransform(-247,79.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-59,y:-47.9},9).to({alpha:0.012},4).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.hero2_candy3_mc();
	this.instance_2.setTransform(185.4,-92.5);

	this.instance_3 = new lib.hero2_candy2_mc();
	this.instance_3.setTransform(113.4,-227.3);

	this.instance_4 = new lib.hero2_candy1_mc();
	this.instance_4.setTransform(-109.8,-229.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(15));

	// animation
	this.instance_5 = new lib.hero2_fringe0_mc();
	this.instance_5.setTransform(10.6,-159.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

	// animation
	this.instance_6 = new lib.hero2_eyebrows0_mc();
	this.instance_6.setTransform(8.5,-104.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

	// animation
	this.instance_7 = new lib.hero2_eyebrows1_mc();
	this.instance_7.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

	// animation
	this.instance_8 = new lib.hero2_eyes1_mc();
	this.instance_8.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15));

	// animation
	this.instance_9 = new lib.hero1_sinyak_mc();
	this.instance_9.setTransform(92.8,-18.1,1,1,0,0,180);

	this.instance_10 = new lib.hero1_sinyak_mc();
	this.instance_10.setTransform(-70.6,-18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(15));

	// animation
	this.instance_11 = new lib.hero2_prish_mc();
	this.instance_11.setTransform(-45,43.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15));

	// animation
	this.instance_12 = new lib.hero2_brecets_mc();
	this.instance_12.setTransform(10,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(15));

	// animation
	this.instance_13 = new lib.hero2_lips0_mc();
	this.instance_13.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15));

	// animation
	this.instance_14 = new lib.hero2_klaksi3_mc();
	this.instance_14.setTransform(98.5,38.2);

	this.instance_15 = new lib.hero2_klaksi2_mc();
	this.instance_15.setTransform(-90.1,32.7);

	this.instance_16 = new lib.hero2_klaksi1_mc();
	this.instance_16.setTransform(36.4,-161.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(15));

	// animation
	this.instance_17 = new lib.hero1_prish2_mc();
	this.instance_17.setTransform(15,129.5);

	this.instance_18 = new lib.hero1_prish2_mc();
	this.instance_18.setTransform(-1,-7.5);

	this.instance_19 = new lib.hero1_prish2_mc();
	this.instance_19.setTransform(-57,96.6);

	this.instance_20 = new lib.hero1_prish2_mc();
	this.instance_20.setTransform(105.9,-145.4);

	this.instance_21 = new lib.hero1_prish2_mc();
	this.instance_21.setTransform(-77,-163.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(15));

	// animation
	this.instance_22 = new lib.hero1_prish1_mc();
	this.instance_22.setTransform(-78,-163.9);

	this.instance_23 = new lib.hero1_prish1_mc();
	this.instance_23.setTransform(15,129.5);

	this.instance_24 = new lib.hero1_prish1_mc();
	this.instance_24.setTransform(-1,-7.5);

	this.instance_25 = new lib.hero1_prish1_mc();
	this.instance_25.setTransform(-55,97);

	this.instance_26 = new lib.hero1_prish1_mc();
	this.instance_26.setTransform(106,-146.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22}]}).wait(15));

	// animation
	this.instance_27 = new lib.hero2_head_mc();
	this.instance_27.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(15));

	// animation
	this.instance_28 = new lib.hero2_boby0_mc();
	this.instance_28.setTransform(10.5,260.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(15));

	// animation
	this.instance_29 = new lib.hero2_hair0_mc();
	this.instance_29.setTransform(12,-96.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-277,-308.8,569.5,710.8);
p.frameBounds = [rect, rect=new cjs.Rectangle(-268.5,-308.8,561,710.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.gift2_mc();
	this.instance.setTransform(-214.5,117.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-36.2,x:-307.5,y:1.3,alpha:0.012},8).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.lens19_mc();
	this.instance_1.setTransform(-184,132.1);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({y:79.1,alpha:1},8).wait(1));

	// animation
	this.instance_2 = new lib.lens19_mc();
	this.instance_2.setTransform(-247,132.1);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({y:79.1,alpha:1},8).wait(1));

	// animation
	this.instance_3 = new lib.gift1_mc();
	this.instance_3.setTransform(-215.5,172.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:287.2,alpha:0.012},8).to({_off:true},1).wait(1));

	// animation
	this.instance_4 = new lib.hero2_candy3_mc();
	this.instance_4.setTransform(185.4,-92.5);

	this.instance_5 = new lib.hero2_candy2_mc();
	this.instance_5.setTransform(113.4,-227.3);

	this.instance_6 = new lib.hero2_candy1_mc();
	this.instance_6.setTransform(-109.8,-229.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(10));

	// animation
	this.instance_7 = new lib.hero2_fringe0_mc();
	this.instance_7.setTransform(10.6,-159.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10));

	// animation
	this.instance_8 = new lib.hero2_eyebrows0_mc();
	this.instance_8.setTransform(8.5,-104.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10));

	// animation
	this.instance_9 = new lib.hero2_eyebrows1_mc();
	this.instance_9.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10));

	// animation
	this.instance_10 = new lib.hero2_eyes1_mc();
	this.instance_10.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10));

	// animation
	this.instance_11 = new lib.hero1_sinyak_mc();
	this.instance_11.setTransform(92.8,-18.1,1,1,0,0,180);

	this.instance_12 = new lib.hero1_sinyak_mc();
	this.instance_12.setTransform(-70.6,-18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11}]}).wait(10));

	// animation
	this.instance_13 = new lib.hero2_prish_mc();
	this.instance_13.setTransform(-45,43.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10));

	// animation
	this.instance_14 = new lib.hero2_brecets_mc();
	this.instance_14.setTransform(10,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10));

	// animation
	this.instance_15 = new lib.hero2_lips0_mc();
	this.instance_15.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(10));

	// animation
	this.instance_16 = new lib.hero2_klaksi3_mc();
	this.instance_16.setTransform(98.5,38.2);

	this.instance_17 = new lib.hero2_klaksi2_mc();
	this.instance_17.setTransform(-90.1,32.7);

	this.instance_18 = new lib.hero2_klaksi1_mc();
	this.instance_18.setTransform(36.4,-161.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]}).wait(10));

	// animation
	this.instance_19 = new lib.hero1_prish2_mc();
	this.instance_19.setTransform(15,129.5);

	this.instance_20 = new lib.hero1_prish2_mc();
	this.instance_20.setTransform(-1,-7.5);

	this.instance_21 = new lib.hero1_prish2_mc();
	this.instance_21.setTransform(-57,96.6);

	this.instance_22 = new lib.hero1_prish2_mc();
	this.instance_22.setTransform(105.9,-145.4);

	this.instance_23 = new lib.hero1_prish2_mc();
	this.instance_23.setTransform(-77,-163.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19}]}).wait(10));

	// animation
	this.instance_24 = new lib.hero1_prish1_mc();
	this.instance_24.setTransform(-78,-163.9);

	this.instance_25 = new lib.hero1_prish1_mc();
	this.instance_25.setTransform(15,129.5);

	this.instance_26 = new lib.hero1_prish1_mc();
	this.instance_26.setTransform(-1,-7.5);

	this.instance_27 = new lib.hero1_prish1_mc();
	this.instance_27.setTransform(-55,97);

	this.instance_28 = new lib.hero1_prish1_mc();
	this.instance_28.setTransform(106,-146.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24}]}).wait(10));

	// animation
	this.instance_29 = new lib.hero2_head_mc();
	this.instance_29.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(10));

	// animation
	this.instance_30 = new lib.hero2_boby0_mc();
	this.instance_30.setTransform(10.5,260.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(10));

	// animation
	this.instance_31 = new lib.hero2_hair0_mc();
	this.instance_31.setTransform(12,-96.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-289.5,-308.8,582,710.8);
p.frameBounds = [rect, new cjs.Rectangle(-304.2,-308.8,596.7,710.8), new cjs.Rectangle(-318.5,-308.8,611,710.8), new cjs.Rectangle(-332.3,-308.8,624.8,710.8), new cjs.Rectangle(-345.7,-308.8,638.2,710.8), new cjs.Rectangle(-358.4,-308.8,650.8,710.8), new cjs.Rectangle(-370.7,-308.8,663.2,710.8), new cjs.Rectangle(-382.3,-308.8,674.8,710.8), new cjs.Rectangle(-393.7,-308.8,686.2,710.8), new cjs.Rectangle(-277,-308.8,569.5,710.8)];


(lib.animation2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_60 = function() {
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
	this.frame_109 = function() {
		try
		{
			app.addSoundFunc("gift_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(49).call(this.frame_109).wait(21));

	// animation
	this.instance = new lib.gift2_mc();
	this.instance.setTransform(-214.5,350.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(113).to({_off:false},0).to({y:117.3},10).to({y:93.3},3).to({y:117.3},3).wait(1));

	// animation
	this.instance_1 = new lib.gift1_mc();
	this.instance_1.setTransform(-215.5,405.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(113).to({_off:false},0).to({y:172.2},10).to({y:148.2},3).to({y:172.2},3).wait(1));

	// animation
	this.instance_2 = new lib.circle_lvl1_0_1_mc();
	this.instance_2.setTransform(229.5,102.5);

	this.instance_3 = new lib.circle_lvl1_1_mc();
	this.instance_3.setTransform(229.5,102.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},59).to({state:[{t:this.instance_3}]},7).to({state:[{t:this.instance_3}]},9).to({state:[]},1).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(66).to({x:584.5},9).to({_off:true},1).wait(53));

	// animation
	this.instance_4 = new lib.hero2_candy3_mc();
	this.instance_4.setTransform(185.4,-92.5);

	this.instance_5 = new lib.hero2_candy2_mc();
	this.instance_5.setTransform(113.4,-227.3);

	this.instance_6 = new lib.hero2_candy1_mc();
	this.instance_6.setTransform(-109.8,-229.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(130));

	// animation
	this.instance_7 = new lib.hero2_glasses_mc();
	this.instance_7.setTransform(-162.5,-33.7,1,1,0,0,0,-173,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(76).to({rotation:90},9).to({regY:1.1,rotation:96.2,x:-162.6},5).to({rotation:87.5,x:-162.5},5).to({rotation:96.2,x:-162.6},5).to({rotation:91,x:-162.5},4).to({y:319.3},8).to({_off:true},1).wait(17));

	// animation
	this.instance_8 = new lib.hero2_fringe0_mc();
	this.instance_8.setTransform(10.6,-159.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(130));

	// animation
	this.instance_9 = new lib.hero2_eyebrows0_mc();
	this.instance_9.setTransform(8.5,-104.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(130));

	// animation
	this.instance_10 = new lib.hero2_eyebrows1_mc();
	this.instance_10.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(130));

	// animation
	this.instance_11 = new lib.hero2_eyes1_mc();
	this.instance_11.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(130));

	// animation
	this.instance_12 = new lib.hero1_sinyak_mc();
	this.instance_12.setTransform(92.8,-18.1,1,1,0,0,180);

	this.instance_13 = new lib.hero1_sinyak_mc();
	this.instance_13.setTransform(-70.6,-18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12}]}).wait(130));

	// animation
	this.instance_14 = new lib.hero2_prish_mc();
	this.instance_14.setTransform(-45,43.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(130));

	// animation
	this.instance_15 = new lib.hero2_brecets_mc();
	this.instance_15.setTransform(10,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(130));

	// animation
	this.instance_16 = new lib.hero2_lips0_mc();
	this.instance_16.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(130));

	// animation
	this.instance_17 = new lib.hero2_klaksi3_mc();
	this.instance_17.setTransform(98.5,38.2);

	this.instance_18 = new lib.hero2_klaksi2_mc();
	this.instance_18.setTransform(-90.1,32.7);

	this.instance_19 = new lib.hero2_klaksi1_mc();
	this.instance_19.setTransform(36.4,-161.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(130));

	// animation
	this.instance_20 = new lib.hero1_prish2_mc();
	this.instance_20.setTransform(15,129.5);

	this.instance_21 = new lib.hero1_prish2_mc();
	this.instance_21.setTransform(-1,-7.5);

	this.instance_22 = new lib.hero1_prish2_mc();
	this.instance_22.setTransform(-57,96.6);

	this.instance_23 = new lib.hero1_prish2_mc();
	this.instance_23.setTransform(105.9,-145.4);

	this.instance_24 = new lib.hero1_prish2_mc();
	this.instance_24.setTransform(-77,-163.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20}]}).wait(130));

	// animation
	this.instance_25 = new lib.hero1_prish1_mc();
	this.instance_25.setTransform(-78,-163.9);

	this.instance_26 = new lib.hero1_prish1_mc();
	this.instance_26.setTransform(15,129.5);

	this.instance_27 = new lib.hero1_prish1_mc();
	this.instance_27.setTransform(-1,-7.5);

	this.instance_28 = new lib.hero1_prish1_mc();
	this.instance_28.setTransform(-55,97);

	this.instance_29 = new lib.hero1_prish1_mc();
	this.instance_29.setTransform(106,-146.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25}]}).wait(130));

	// animation
	this.instance_30 = new lib.hero2_head_mc();
	this.instance_30.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(130));

	// animation
	this.instance_31 = new lib.hero2_boby0_mc();
	this.instance_31.setTransform(10.5,260.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(130));

	// animation
	this.instance_32 = new lib.hero2_hair0_mc();
	this.instance_32.setTransform(12,-96.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-268.5,-308.8,656.6,710.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-268.5,-308.8,696,710.8), new cjs.Rectangle(-268.5,-308.8,735.5,710.8), new cjs.Rectangle(-268.5,-308.8,774.9,710.8), new cjs.Rectangle(-268.5,-308.8,814.3,710.8), new cjs.Rectangle(-268.5,-308.8,853.8,710.8), new cjs.Rectangle(-268.5,-308.8,893.2,710.8), new cjs.Rectangle(-268.5,-308.8,932.6,710.8), new cjs.Rectangle(-268.5,-308.8,972.1,710.8), new cjs.Rectangle(-268.5,-308.8,1011.5,710.8), rect=new cjs.Rectangle(-268.5,-308.8,561,710.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-268.5,-308.8,561,753.3), new cjs.Rectangle(-268.5,-308.8,561,797.4), new cjs.Rectangle(-268.5,-308.8,561,841.6), new cjs.Rectangle(-268.5,-308.8,561,885.7), new cjs.Rectangle(-268.5,-308.8,561,929.8), new cjs.Rectangle(-268.5,-308.8,561,974), new cjs.Rectangle(-289.5,-308.8,582,776.7), new cjs.Rectangle(-289.5,-308.8,582,753.4), new cjs.Rectangle(-289.5,-308.8,582,730), rect=new cjs.Rectangle(-289.5,-308.8,582,710.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		try
		{
			app.addSoundFunc("gift_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(11));

	// animation
	this.instance = new lib.circle_lvl1_mc();
	this.instance.setTransform(229.5,493.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:102.5},8).to({y:83.5},3).to({y:102.5},3).wait(1));

	// animation
	this.instance_1 = new lib.hero2_candy3_mc();
	this.instance_1.setTransform(185.4,-92.5);

	this.instance_2 = new lib.hero2_candy2_mc();
	this.instance_2.setTransform(113.4,-227.3);

	this.instance_3 = new lib.hero2_candy1_mc();
	this.instance_3.setTransform(-109.8,-229.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(15));

	// animation
	this.instance_4 = new lib.hero2_glasses_mc();
	this.instance_4.setTransform(10.5,-34.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

	// animation
	this.instance_5 = new lib.hero2_fringe0_mc();
	this.instance_5.setTransform(10.6,-159.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

	// animation
	this.instance_6 = new lib.hero2_eyebrows0_mc();
	this.instance_6.setTransform(8.5,-104.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

	// animation
	this.instance_7 = new lib.hero2_eyebrows1_mc();
	this.instance_7.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

	// animation
	this.instance_8 = new lib.hero2_eyes1_mc();
	this.instance_8.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15));

	// animation
	this.instance_9 = new lib.hero1_sinyak_mc();
	this.instance_9.setTransform(92.8,-18.1,1,1,0,0,180);

	this.instance_10 = new lib.hero1_sinyak_mc();
	this.instance_10.setTransform(-70.6,-18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(15));

	// animation
	this.instance_11 = new lib.hero2_prish_mc();
	this.instance_11.setTransform(-45,43.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15));

	// animation
	this.instance_12 = new lib.hero2_brecets_mc();
	this.instance_12.setTransform(10,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(15));

	// animation
	this.instance_13 = new lib.hero2_lips0_mc();
	this.instance_13.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15));

	// animation
	this.instance_14 = new lib.hero2_klaksi3_mc();
	this.instance_14.setTransform(98.5,38.2);

	this.instance_15 = new lib.hero2_klaksi2_mc();
	this.instance_15.setTransform(-90.1,32.7);

	this.instance_16 = new lib.hero2_klaksi1_mc();
	this.instance_16.setTransform(36.4,-161.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(15));

	// animation
	this.instance_17 = new lib.hero1_prish2_mc();
	this.instance_17.setTransform(15,129.5);

	this.instance_18 = new lib.hero1_prish2_mc();
	this.instance_18.setTransform(-1,-7.5);

	this.instance_19 = new lib.hero1_prish2_mc();
	this.instance_19.setTransform(-57,96.6);

	this.instance_20 = new lib.hero1_prish2_mc();
	this.instance_20.setTransform(105.9,-145.4);

	this.instance_21 = new lib.hero1_prish2_mc();
	this.instance_21.setTransform(-77,-163.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(15));

	// animation
	this.instance_22 = new lib.hero1_prish1_mc();
	this.instance_22.setTransform(-78,-163.9);

	this.instance_23 = new lib.hero1_prish1_mc();
	this.instance_23.setTransform(15,129.5);

	this.instance_24 = new lib.hero1_prish1_mc();
	this.instance_24.setTransform(-1,-7.5);

	this.instance_25 = new lib.hero1_prish1_mc();
	this.instance_25.setTransform(-55,97);

	this.instance_26 = new lib.hero1_prish1_mc();
	this.instance_26.setTransform(106,-146.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22}]}).wait(15));

	// animation
	this.instance_27 = new lib.hero2_head_mc();
	this.instance_27.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(15));

	// animation
	this.instance_28 = new lib.hero2_boby0_mc();
	this.instance_28.setTransform(10.5,260.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(15));

	// animation
	this.instance_29 = new lib.hero2_hair0_mc();
	this.instance_29.setTransform(12,-96.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-268.5,-308.8,656.6,991.8);
p.frameBounds = [rect, new cjs.Rectangle(-268.5,-308.8,656.6,942.9), new cjs.Rectangle(-268.5,-308.8,656.6,894), new cjs.Rectangle(-268.5,-308.8,656.6,845.1), new cjs.Rectangle(-268.5,-308.8,656.6,796.3), new cjs.Rectangle(-268.5,-308.8,656.6,747.4), rect=new cjs.Rectangle(-268.5,-308.8,656.6,710.8), rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.stick1_mc();
	this.instance.setTransform(16.9,375.5,1,1,-56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-40.1,y:83.8},9).to({x:-34.1,y:-41.1},9).to({rotation:-31,x:35.4,y:-69.1},8).to({x:121.4,y:-14.7},8).to({x:32.4,y:65.3},10).to({x:-55.6,y:133.3},10).to({x:31.4,y:230.3},7).to({x:136.4,y:117.3},8).to({x:253,y:414.2},5).to({_off:true},1).wait(20));

	// animation
	this.instance_1 = new lib.hero1_fringe0_mc();
	this.instance_1.setTransform(-4,-125.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(95));

	// animation
	this.instance_2 = new lib.hero1_eyebrows1_mc();
	this.instance_2.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(95));

	// animation
	this.instance_3 = new lib.hero1_eyes0_mc();
	this.instance_3.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(95));

	// animation
	this.instance_4 = new lib.hero1_lips0_mc();
	this.instance_4.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(95));

	// animation
	this.instance_5 = new lib.facemask1_mc();
	this.instance_5.setTransform(-12,-17.5,1.184,1.184);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({alpha:1},66).to({alpha:0.012},18).to({_off:true},1).wait(1));

	// animation
	this.instance_6 = new lib.prishi_mc();
	this.instance_6.setTransform(-22,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(75).to({alpha:0.012},11).to({_off:true},1).wait(8));

	// animation
	this.instance_7 = new lib.hero1_head_mc();
	this.instance_7.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(95));

	// animation
	this.instance_8 = new lib.hero1_boby0_mc();
	this.instance_8.setTransform(-10,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(95));

	// animation
	this.instance_9 = new lib.hero1_hair0_mc();
	this.instance_9.setTransform(0,197.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-331,-319.9,662,887.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pen_mc();
	this.instance.setTransform(-269.5,180.8,0.601,0.601,48.8,0,0,12.4,157.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.63,scaleY:0.63,rotation:44.2,x:-141.4,y:-96.5},9).wait(2).to({x:-29.4,y:-78.5},10).wait(2).to({regX:12.5,rotation:31.4,x:-84.3,y:19.5},10).wait(3).to({x:-71.3,y:102.5},10).wait(2).to({x:-31.3,y:212.9},10).wait(2).to({x:-290.3,y:426.8},10).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.shell2_mc();
	this.instance_1.setTransform(-265.5,178);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60).to({y:410},10).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.tin_facemask1_mc();
	this.instance_2.setTransform(271,191.5,0.79,0.79);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(71).to({_off:false},0).wait(1));

	// animation
	this.instance_3 = new lib.shell2_mc();
	this.instance_3.setTransform(266.5,178);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(71).to({_off:false},0).wait(1));

	// animation
	this.instance_4 = new lib.shell1_mc();
	this.instance_4.setTransform(268,232.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(70).to({_off:true},1).wait(1));

	// animation
	this.instance_5 = new lib.hero1_fringe0_mc();
	this.instance_5.setTransform(-4,-125.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(72));

	// animation
	this.instance_6 = new lib.hero1_eyebrows1_mc();
	this.instance_6.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(72));

	// animation
	this.instance_7 = new lib.hero1_eyes0_mc();
	this.instance_7.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(72));

	// animation
	this.instance_8 = new lib.hero1_lips0_mc();
	this.instance_8.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(72));

	// animation
	this.instance_9 = new lib.hero1_prish2_mc();
	this.instance_9.setTransform(15,134.5);

	this.instance_10 = new lib.hero1_prish2_mc();
	this.instance_10.setTransform(-24,23.5);

	this.instance_11 = new lib.hero1_prish2_mc();
	this.instance_11.setTransform(-37,-60.4);

	this.instance_12 = new lib.hero1_prish2_mc();
	this.instance_12.setTransform(33.9,-145.4);

	this.instance_13 = new lib.hero1_prish2_mc();
	this.instance_13.setTransform(-77,-163.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]},11).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]},12).to({state:[{t:this.instance_10},{t:this.instance_9}]},13).to({state:[{t:this.instance_9}]},12).to({state:[]},12).wait(12));

	// animation
	this.instance_14 = new lib.hero1_prish1_mc();
	this.instance_14.setTransform(-78,-163.9);

	this.instance_15 = new lib.hero1_prish1_mc();
	this.instance_15.setTransform(15,134.5);

	this.instance_16 = new lib.hero1_prish1_mc();
	this.instance_16.setTransform(-24,23.5);

	this.instance_17 = new lib.hero1_prish1_mc();
	this.instance_17.setTransform(-35,-60);

	this.instance_18 = new lib.hero1_prish1_mc();
	this.instance_18.setTransform(34,-146.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(72));

	// animation
	this.instance_19 = new lib.hero1_head_mc();
	this.instance_19.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(72));

	// animation
	this.instance_20 = new lib.hero1_boby0_mc();
	this.instance_20.setTransform(-10,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(72));

	// animation
	this.instance_21 = new lib.hero1_hair0_mc();
	this.instance_21.setTransform(0,197.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(72));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-364.1,-319.9,732.1,887.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-331,-319.9,696.1,887.4)];


(lib.animation1_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		try
		{
			app.addSoundFunc("gift_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(25));

	// animation
	this.instance = new lib.crab_mc();
	this.instance.setTransform(270,176.7,0.626,0.626);

	this.instance_1 = new lib.crab_cut_mc();
	this.instance_1.setTransform(47,122.7,0.626,0.626,-23.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.pen_mc();
	this.instance_2.setTransform(-269.5,180.8,0.601,0.601,48.8,0,0,12.4,157.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_1}]},11).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance}]},9).to({state:[]},1).to({state:[{t:this.instance_2}]},23).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:-23.5,x:47,y:122.7},7).wait(11).to({_off:false,x:-320,y:108.7},7).to({x:-540.9,y:399.7},9).to({_off:true},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},7).wait(11).to({_off:true,x:-320,y:108.7},7).wait(34));

	// animation
	this.instance_3 = new lib.shell2_mc();
	this.instance_3.setTransform(267.5,177.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({y:405.4},9).to({_off:true},1).wait(23).to({_off:false,x:-265.5,y:178},0).wait(1));

	// animation
	this.instance_4 = new lib.shell1_mc();
	this.instance_4.setTransform(-265,362.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(36).to({_off:false},0).to({y:232.9},7).to({y:204.9},3).to({y:232.9},4).wait(7).to({_off:true},1).wait(1));

	// animation
	this.instance_5 = new lib.shell1_mc();
	this.instance_5.setTransform(268,362.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(36).to({_off:false},0).to({y:232.9},7).to({y:204.9},3).to({y:232.9},4).wait(9));

	// animation
	this.instance_6 = new lib.hero1_fringe0_mc();
	this.instance_6.setTransform(-4,-125.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(59));

	// animation
	this.instance_7 = new lib.hero1_eyebrows1_mc();
	this.instance_7.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(59));

	// animation
	this.instance_8 = new lib.hero1_eyes0_mc();
	this.instance_8.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(59));

	// animation
	this.instance_9 = new lib.hero1_brecets_mc();
	this.instance_9.setTransform(-13,84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(7).to({rotation:-30.5},5).wait(6).to({x:-380,y:70.5},7).to({x:-601,y:361.5},9).to({_off:true},1).wait(24));

	// animation
	this.instance_10 = new lib.hero1_lips0_mc();
	this.instance_10.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(59));

	// animation
	this.instance_11 = new lib.hero1_prish2_mc();
	this.instance_11.setTransform(15,134.5);

	this.instance_12 = new lib.hero1_prish2_mc();
	this.instance_12.setTransform(-24,23.5);

	this.instance_13 = new lib.hero1_prish2_mc();
	this.instance_13.setTransform(-37,-60.4);

	this.instance_14 = new lib.hero1_prish2_mc();
	this.instance_14.setTransform(33.9,-145.4);

	this.instance_15 = new lib.hero1_prish2_mc();
	this.instance_15.setTransform(-77,-163.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]}).wait(59));

	// animation
	this.instance_16 = new lib.hero1_prish1_mc();
	this.instance_16.setTransform(-78,-163.9);

	this.instance_17 = new lib.hero1_prish1_mc();
	this.instance_17.setTransform(15,134.5);

	this.instance_18 = new lib.hero1_prish1_mc();
	this.instance_18.setTransform(-24,23.5);

	this.instance_19 = new lib.hero1_prish1_mc();
	this.instance_19.setTransform(-35,-60);

	this.instance_20 = new lib.hero1_prish1_mc();
	this.instance_20.setTransform(34,-146.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]}).wait(59));

	// animation
	this.instance_21 = new lib.hero1_head_mc();
	this.instance_21.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(59));

	// animation
	this.instance_22 = new lib.hero1_boby0_mc();
	this.instance_22.setTransform(-10,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(59));

	// animation
	this.instance_23 = new lib.hero1_hair0_mc();
	this.instance_23.setTransform(0,197.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(59));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-331,-319.9,697.1,887.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-380.4,-319.9,746.5,887.4), new cjs.Rectangle(-432.8,-319.9,798.9,887.4), new cjs.Rectangle(-457.3,-319.9,823.4,887.4), new cjs.Rectangle(-481.9,-319.9,848,887.4), new cjs.Rectangle(-506.4,-319.9,872.5,887.4), new cjs.Rectangle(-531,-319.9,897.1,887.4), new cjs.Rectangle(-555.5,-319.9,921.6,887.4), new cjs.Rectangle(-580.1,-319.9,946.2,887.4), new cjs.Rectangle(-604.6,-319.9,970.7,887.4), new cjs.Rectangle(-629.2,-319.9,995.3,887.4), new cjs.Rectangle(-653.8,-319.9,1019.9,887.4), new cjs.Rectangle(-331,-319.9,662,887.4), rect=new cjs.Rectangle(-365,-319.9,733,887.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-364.1,-319.9,732.1,887.4)];


(lib.animation1_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.crab_cut_mc();
	this.instance.setTransform(-265,177,0.626,0.626);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-38.7,x:107,y:-91},16).to({rotation:-20.3,x:53,y:-57},8).to({rotation:0.7,x:-17,y:-49},8).to({rotation:-32,x:-520.9,y:-362.7},17).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.shell2_mc();
	this.instance_1.setTransform(-265.5,178);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(41).to({y:403},8).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.crab_mc();
	this.instance_2.setTransform(270,176.7,0.626,0.626);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50).to({_off:false},0).wait(1));

	// animation
	this.instance_3 = new lib.shell2_mc();
	this.instance_3.setTransform(267.5,177.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50).to({_off:false},0).wait(1));

	// animation
	this.instance_4 = new lib.shell1_mc();
	this.instance_4.setTransform(268,232.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49).to({_off:true},1).wait(1));

	// animation
	this.instance_5 = new lib.hero1_fringe0_mc();
	this.instance_5.setTransform(-4,-125.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(51));

	// animation
	this.instance_6 = new lib.hero1_eyebrows0_mc();
	this.instance_6.setTransform(-18,-102.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16).to({alpha:0.012},16).to({_off:true},1).wait(18));

	// animation
	this.instance_7 = new lib.hero1_eyebrows1_mc();
	this.instance_7.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(51));

	// animation
	this.instance_8 = new lib.hero1_eyes0_mc();
	this.instance_8.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(51));

	// animation
	this.instance_9 = new lib.hero1_brecets_mc();
	this.instance_9.setTransform(-13,84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(51));

	// animation
	this.instance_10 = new lib.hero1_lips0_mc();
	this.instance_10.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(51));

	// animation
	this.instance_11 = new lib.hero1_prish2_mc();
	this.instance_11.setTransform(15,134.5);

	this.instance_12 = new lib.hero1_prish2_mc();
	this.instance_12.setTransform(-24,23.5);

	this.instance_13 = new lib.hero1_prish2_mc();
	this.instance_13.setTransform(-37,-60.4);

	this.instance_14 = new lib.hero1_prish2_mc();
	this.instance_14.setTransform(33.9,-145.4);

	this.instance_15 = new lib.hero1_prish2_mc();
	this.instance_15.setTransform(-77,-163.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]}).wait(51));

	// animation
	this.instance_16 = new lib.hero1_prish1_mc();
	this.instance_16.setTransform(-78,-163.9);

	this.instance_17 = new lib.hero1_prish1_mc();
	this.instance_17.setTransform(15,134.5);

	this.instance_18 = new lib.hero1_prish1_mc();
	this.instance_18.setTransform(-24,23.5);

	this.instance_19 = new lib.hero1_prish1_mc();
	this.instance_19.setTransform(-35,-60);

	this.instance_20 = new lib.hero1_prish1_mc();
	this.instance_20.setTransform(34,-146.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]}).wait(51));

	// animation
	this.instance_21 = new lib.hero1_head_mc();
	this.instance_21.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(51));

	// animation
	this.instance_22 = new lib.hero1_boby0_mc();
	this.instance_22.setTransform(-10,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(51));

	// animation
	this.instance_23 = new lib.hero1_hair0_mc();
	this.instance_23.setTransform(0,197.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-364.1,-319.9,732.1,887.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-376.4,-319.9,744.4,887.4), new cjs.Rectangle(-407.3,-320.9,775.3,888.3), new cjs.Rectangle(-438.3,-341,806.3,908.5), new cjs.Rectangle(-469.1,-361.1,837.1,928.6), new cjs.Rectangle(-499.8,-381.1,867.8,948.5), new cjs.Rectangle(-530.3,-400.9,898.3,968.3), new cjs.Rectangle(-560.8,-420.6,928.8,988), new cjs.Rectangle(-591.1,-440.2,959.1,1007.7), new cjs.Rectangle(-621.5,-459.9,989.5,1027.4), new cjs.Rectangle(-331,-319.9,697.1,887.4)];


(lib.animation1_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		try
		{
			app.addSoundFunc("gift_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(24));

	// animation
	this.instance = new lib.jellyfish2_mc();
	this.instance.setTransform(-105.3,18.1,1,1,-157.5);

	this.instance_1 = new lib.crab_mc();
	this.instance_1.setTransform(-265,177,0.626,0.626);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},38).to({state:[{t:this.instance}]},10).to({state:[]},1).to({state:[{t:this.instance_1}]},23).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38).to({rotation:-143.5,y:369.1},10).to({_off:true},1).wait(24));

	// animation
	this.instance_2 = new lib.jellyfish2_mc();
	this.instance_2.setTransform(83.7,18.1,1,1,0,157.5,-22.5);
	this.instance_2._off = true;

	this.instance_3 = new lib.shell2_mc();
	this.instance_3.setTransform(-265.5,178);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},13).to({state:[{t:this.instance_2}]},19).to({state:[{t:this.instance_2}]},10).to({state:[]},1).to({state:[{t:this.instance_3}]},29).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).wait(19).to({skewX:132.6,skewY:-47.4,y:375.1},10).to({_off:true},1).wait(30));

	// animation
	this.instance_4 = new lib.jellyfish_mc();
	this.instance_4.setTransform(267.4,165.7,0.72,0.72);

	this.instance_5 = new lib.shell1_mc();
	this.instance_5.setTransform(-265,362.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:0.57,rotation:-19.7,x:157.4,y:147.7},6).to({scaleX:1,scaleY:1,rotation:0,x:75.4,y:99.7},6).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50).to({_off:false},0).to({y:232.9},7).to({y:204.9},3).to({y:232.9},4).wait(7).to({_off:true},1).wait(1));

	// animation
	this.instance_6 = new lib.shell2_mc();
	this.instance_6.setTransform(268.5,178);

	this.instance_7 = new lib.shell1_mc();
	this.instance_7.setTransform(268,362.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(42).to({x:267.5,y:402},6).to({_off:true},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50).to({_off:false},0).to({y:232.9},7).to({y:204.9},3).to({y:232.9},4).wait(9));

	// animation
	this.instance_8 = new lib.hero1_fringe0_mc();
	this.instance_8.setTransform(-4,-125.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(73));

	// animation
	this.instance_9 = new lib.hero1_eyebrows0_mc();
	this.instance_9.setTransform(-18,-102.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(73));

	// animation
	this.instance_10 = new lib.hero1_eyebrows1_mc();
	this.instance_10.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(73));

	// animation
	this.instance_11 = new lib.hero1_eyes0_mc();
	this.instance_11.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(73));

	// animation
	this.instance_12 = new lib.hero1_sinyak_mc();
	this.instance_12.setTransform(-93,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(19).to({alpha:0.012},14).to({_off:true},1).wait(39));

	// animation
	this.instance_13 = new lib.hero1_sinyak_mc();
	this.instance_13.setTransform(72,10.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(19).to({alpha:0.012},14).to({_off:true},1).wait(39));

	// animation
	this.instance_14 = new lib.hero1_brecets_mc();
	this.instance_14.setTransform(-13,84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(73));

	// animation
	this.instance_15 = new lib.hero1_lips0_mc();
	this.instance_15.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(73));

	// animation
	this.instance_16 = new lib.hero1_prish2_mc();
	this.instance_16.setTransform(15,134.5);

	this.instance_17 = new lib.hero1_prish2_mc();
	this.instance_17.setTransform(-24,23.5);

	this.instance_18 = new lib.hero1_prish2_mc();
	this.instance_18.setTransform(-37,-60.4);

	this.instance_19 = new lib.hero1_prish2_mc();
	this.instance_19.setTransform(33.9,-145.4);

	this.instance_20 = new lib.hero1_prish2_mc();
	this.instance_20.setTransform(-77,-163.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]}).wait(73));

	// animation
	this.instance_21 = new lib.hero1_prish1_mc();
	this.instance_21.setTransform(-78,-163.9);

	this.instance_22 = new lib.hero1_prish1_mc();
	this.instance_22.setTransform(15,134.5);

	this.instance_23 = new lib.hero1_prish1_mc();
	this.instance_23.setTransform(-24,23.5);

	this.instance_24 = new lib.hero1_prish1_mc();
	this.instance_24.setTransform(-35,-60);

	this.instance_25 = new lib.hero1_prish1_mc();
	this.instance_25.setTransform(34,-146.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21}]}).wait(73));

	// animation
	this.instance_26 = new lib.hero1_head_mc();
	this.instance_26.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(73));

	// animation
	this.instance_27 = new lib.hero1_boby0_mc();
	this.instance_27.setTransform(-10,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(73));

	// animation
	this.instance_28 = new lib.hero1_hair0_mc();
	this.instance_28.setTransform(0,197.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(73));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-331,-319.9,698.1,887.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-331,-319.9,698,887.4), new cjs.Rectangle(-331,-319.9,697.8,887.4), new cjs.Rectangle(-331,-319.9,697.6,887.4), new cjs.Rectangle(-331,-319.9,697.5,887.4), new cjs.Rectangle(-331,-319.9,697.3,887.4), new cjs.Rectangle(-331,-319.9,697.1,887.4), new cjs.Rectangle(-331,-319.9,662,887.4), rect=new cjs.Rectangle(-365,-319.9,733,887.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-364.1,-319.9,732.1,887.4)];


(lib.animation1_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.jellyfish_mc();
	this.instance.setTransform(267.4,165.7,0.72,0.72);

	this.instance_1 = new lib.jellyfish2_mc();
	this.instance_1.setTransform(-105.3,18.1,1,1,-157.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.58,rotation:-29.2,x:160.4},7).to({scaleX:1,scaleY:1,rotation:-27.7,x:-7.6,y:116},5).to({rotation:0,x:-96.6,y:110},6).to({_off:true,rotation:-157.5,x:-105.3,y:18.1},1).wait(1));

	// animation
	this.instance_2 = new lib.jellyfish_mc();
	this.instance_2.setTransform(267.4,165.7,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

	// animation
	this.instance_3 = new lib.shell2_mc();
	this.instance_3.setTransform(268.5,178);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// animation
	this.instance_4 = new lib.hero1_fringe0_mc();
	this.instance_4.setTransform(-4,-125.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

	// animation
	this.instance_5 = new lib.hero1_eyebrows0_mc();
	this.instance_5.setTransform(-18,-102.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20));

	// animation
	this.instance_6 = new lib.hero1_eyebrows1_mc();
	this.instance_6.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20));

	// animation
	this.instance_7 = new lib.hero1_eyes0_mc();
	this.instance_7.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20));

	// animation
	this.instance_8 = new lib.hero1_sinyak_mc();
	this.instance_8.setTransform(-93,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(20));

	// animation
	this.instance_9 = new lib.hero1_sinyak_mc();
	this.instance_9.setTransform(72,10.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(20));

	// animation
	this.instance_10 = new lib.hero1_brecets_mc();
	this.instance_10.setTransform(-13,84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(20));

	// animation
	this.instance_11 = new lib.hero1_lips0_mc();
	this.instance_11.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(20));

	// animation
	this.instance_12 = new lib.hero1_prish2_mc();
	this.instance_12.setTransform(15,134.5);

	this.instance_13 = new lib.hero1_prish2_mc();
	this.instance_13.setTransform(-24,23.5);

	this.instance_14 = new lib.hero1_prish2_mc();
	this.instance_14.setTransform(-37,-60.4);

	this.instance_15 = new lib.hero1_prish2_mc();
	this.instance_15.setTransform(33.9,-145.4);

	this.instance_16 = new lib.hero1_prish2_mc();
	this.instance_16.setTransform(-77,-163.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(20));

	// animation
	this.instance_17 = new lib.hero1_prish1_mc();
	this.instance_17.setTransform(-78,-163.9);

	this.instance_18 = new lib.hero1_prish1_mc();
	this.instance_18.setTransform(15,134.5);

	this.instance_19 = new lib.hero1_prish1_mc();
	this.instance_19.setTransform(-24,23.5);

	this.instance_20 = new lib.hero1_prish1_mc();
	this.instance_20.setTransform(-35,-60);

	this.instance_21 = new lib.hero1_prish1_mc();
	this.instance_21.setTransform(34,-146.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(20));

	// animation
	this.instance_22 = new lib.hero1_head_mc();
	this.instance_22.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(20));

	// animation
	this.instance_23 = new lib.hero1_boby0_mc();
	this.instance_23.setTransform(-10,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(20));

	// animation
	this.instance_24 = new lib.hero1_hair0_mc();
	this.instance_24.setTransform(0,197.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-331,-319.9,698.1,887.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.ulitka_mc();
	this.instance.setTransform(83.2,158.5,0.6,0.6,132.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.48},4).to({scaleX:0.6,rotation:116.8,x:124.2,y:101.5},7).to({scaleX:0.44},4).to({scaleX:0.6,rotation:93.4,x:168.2,y:2.3},7).to({scaleX:0.44},4).to({scaleX:0.6,rotation:78.4,x:171.2,y:-64.6},8).to({rotation:86.4,y:-50.6},8).to({y:478.3},6).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.shell2_mc();
	this.instance_1.setTransform(-265.5,178);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(42).to({y:402},6).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.jellyfish_mc();
	this.instance_2.setTransform(267.4,165.7,0.72,0.72);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({_off:false},0).wait(1));

	// animation
	this.instance_3 = new lib.shell2_mc();
	this.instance_3.setTransform(268.5,178);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({_off:false},0).wait(1));

	// animation
	this.instance_4 = new lib.shell1_mc();
	this.instance_4.setTransform(268,232.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(48).to({_off:true},1).wait(1));

	// animation
	this.instance_5 = new lib.hero1_fringe0_mc();
	this.instance_5.setTransform(-4,-125.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50));

	// animation
	this.instance_6 = new lib.hero1_eyebrows0_mc();
	this.instance_6.setTransform(-18,-102.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(50));

	// animation
	this.instance_7 = new lib.hero1_eyebrows1_mc();
	this.instance_7.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50));

	// animation
	this.instance_8 = new lib.hero1_eyes0_mc();
	this.instance_8.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50));

	// animation
	this.instance_9 = new lib.hero1_sinyak_mc();
	this.instance_9.setTransform(72,10.5,1,1,0,0,180);

	this.instance_10 = new lib.hero1_sinyak_mc();
	this.instance_10.setTransform(-93,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(50));

	// animation
	this.instance_11 = new lib.hero1_brecets_mc();
	this.instance_11.setTransform(-13,84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

	// animation
	this.instance_12 = new lib.hero1_lips0_mc();
	this.instance_12.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

	// animation
	this.instance_13 = new lib.hero1_scale_mc();
	this.instance_13.setTransform(93.9,53.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({alpha:0.012},34).to({_off:true},1).wait(15));

	// animation
	this.instance_14 = new lib.hero1_prish2_mc();
	this.instance_14.setTransform(15,134.5);

	this.instance_15 = new lib.hero1_prish2_mc();
	this.instance_15.setTransform(-24,23.5);

	this.instance_16 = new lib.hero1_prish2_mc();
	this.instance_16.setTransform(-37,-60.4);

	this.instance_17 = new lib.hero1_prish2_mc();
	this.instance_17.setTransform(33.9,-145.4);

	this.instance_18 = new lib.hero1_prish2_mc();
	this.instance_18.setTransform(-77,-163.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(50));

	// animation
	this.instance_19 = new lib.hero1_prish1_mc();
	this.instance_19.setTransform(-78,-163.9);

	this.instance_20 = new lib.hero1_prish1_mc();
	this.instance_20.setTransform(15,134.5);

	this.instance_21 = new lib.hero1_prish1_mc();
	this.instance_21.setTransform(-24,23.5);

	this.instance_22 = new lib.hero1_prish1_mc();
	this.instance_22.setTransform(-35,-60);

	this.instance_23 = new lib.hero1_prish1_mc();
	this.instance_23.setTransform(34,-146.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19}]}).wait(50));

	// animation
	this.instance_24 = new lib.hero1_head_mc();
	this.instance_24.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(50));

	// animation
	this.instance_25 = new lib.hero1_boby0_mc();
	this.instance_25.setTransform(-10,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(50));

	// animation
	this.instance_26 = new lib.hero1_hair0_mc();
	this.instance_26.setTransform(0,197.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-364.1,-319.9,732.1,887.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-331,-319.9,698.1,887.4)];


(lib.animation1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.ulitka_mc();
	this.instance.setTransform(-270,186.9,0.6,0.6,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:-125,skewY:55,x:-113,y:139.3},6).to({scaleX:0.47},3).to({scaleX:0.6,skewX:-117.2,skewY:62.8,x:-141.2,y:105.3},6).to({scaleX:0.46},3).to({scaleX:0.6,skewX:-102.2,skewY:77.8,x:-171,y:52.3},7).to({scaleX:0.51},3).to({scaleX:0.6,skewX:-87.2,skewY:92.8,x:-190.2,y:-30.6},6).wait(2));

	// animation
	this.instance_1 = new lib.shell2_mc();
	this.instance_1.setTransform(-265.5,178);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36));

	// animation
	this.instance_2 = new lib.shell1_mc();
	this.instance_2.setTransform(268,232.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(36));

	// animation
	this.instance_3 = new lib.hero1_fringe0_mc();
	this.instance_3.setTransform(-4,-125.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(36));

	// animation
	this.instance_4 = new lib.hero1_eyebrows0_mc();
	this.instance_4.setTransform(-18,-102.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(36));

	// animation
	this.instance_5 = new lib.hero1_eyebrows1_mc();
	this.instance_5.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(36));

	// animation
	this.instance_6 = new lib.hero1_eyes0_mc();
	this.instance_6.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(36));

	// animation
	this.instance_7 = new lib.hero1_sinyak_mc();
	this.instance_7.setTransform(72,10.5,1,1,0,0,180);

	this.instance_8 = new lib.hero1_sinyak_mc();
	this.instance_8.setTransform(-93,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(36));

	// animation
	this.instance_9 = new lib.hero1_brecets_mc();
	this.instance_9.setTransform(-13,84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(36));

	// animation
	this.instance_10 = new lib.hero1_lips0_mc();
	this.instance_10.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(36));

	// animation
	this.instance_11 = new lib.hero1_scale_mc();
	this.instance_11.setTransform(-112,52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(7).to({alpha:0.012},27).to({_off:true},1).wait(1));

	// animation
	this.instance_12 = new lib.hero1_scale_mc();
	this.instance_12.setTransform(93.9,53.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(36));

	// animation
	this.instance_13 = new lib.hero1_prish2_mc();
	this.instance_13.setTransform(15,134.5);

	this.instance_14 = new lib.hero1_prish2_mc();
	this.instance_14.setTransform(-24,23.5);

	this.instance_15 = new lib.hero1_prish2_mc();
	this.instance_15.setTransform(-37,-60.4);

	this.instance_16 = new lib.hero1_prish2_mc();
	this.instance_16.setTransform(33.9,-145.4);

	this.instance_17 = new lib.hero1_prish2_mc();
	this.instance_17.setTransform(-77,-163.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(36));

	// animation
	this.instance_18 = new lib.hero1_prish1_mc();
	this.instance_18.setTransform(-78,-163.9);

	this.instance_19 = new lib.hero1_prish1_mc();
	this.instance_19.setTransform(15,134.5);

	this.instance_20 = new lib.hero1_prish1_mc();
	this.instance_20.setTransform(-24,23.5);

	this.instance_21 = new lib.hero1_prish1_mc();
	this.instance_21.setTransform(-35,-60);

	this.instance_22 = new lib.hero1_prish1_mc();
	this.instance_22.setTransform(34,-146.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18}]}).wait(36));

	// animation
	this.instance_23 = new lib.hero1_head_mc();
	this.instance_23.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(36));

	// animation
	this.instance_24 = new lib.hero1_boby0_mc();
	this.instance_24.setTransform(-10,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(36));

	// animation
	this.instance_25 = new lib.hero1_hair0_mc();
	this.instance_25.setTransform(0,197.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-364.1,-319.9,732.1,887.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		try
		{
			app.addSoundFunc("gift_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(25));

	// animation
	this.instance = new lib.konek_mc();
	this.instance.setTransform(290,410.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:93.6},9).to({y:74.6},3).to({y:93.6},3).to({x:207},7).to({skewX:9.2,skewY:189.2,x:275.2,y:95.5},7).to({y:406.4},10).to({_off:true},1).wait(24));

	// animation
	this.instance_1 = new lib.hero1_leaf4_mc();
	this.instance_1.setTransform(164.9,24.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({skewX:9.2,skewY:189.2,x:244.7,y:20.6},7).to({y:331.5},10).to({_off:true},1).wait(24));

	// animation
	this.instance_2 = new lib.ulitka_mc();
	this.instance_2.setTransform(-270,186.9,0.6,0.6,0,0,180);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(63).to({_off:false},0).wait(1));

	// animation
	this.instance_3 = new lib.shell2_mc();
	this.instance_3.setTransform(-265.5,178);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(63).to({_off:false},0).wait(1));

	// animation
	this.instance_4 = new lib.shell1_mc();
	this.instance_4.setTransform(-265,362.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(41).to({_off:false},0).to({y:232.9},7).to({y:204.9},3).to({y:232.9},4).wait(7).to({_off:true},1).wait(1));

	// animation
	this.instance_5 = new lib.shell1_mc();
	this.instance_5.setTransform(268,362.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(41).to({_off:false},0).to({y:232.9},7).to({y:204.9},3).to({y:232.9},4).wait(9));

	// animation
	this.instance_6 = new lib.hero1_fringe0_mc();
	this.instance_6.setTransform(-4,-125.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(64));

	// animation
	this.instance_7 = new lib.hero1_eyebrows0_mc();
	this.instance_7.setTransform(-18,-102.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(64));

	// animation
	this.instance_8 = new lib.hero1_eyebrows1_mc();
	this.instance_8.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(64));

	// animation
	this.instance_9 = new lib.hero1_eyes0_mc();
	this.instance_9.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(64));

	// animation
	this.instance_10 = new lib.hero1_sinyak_mc();
	this.instance_10.setTransform(72,10.5,1,1,0,0,180);

	this.instance_11 = new lib.hero1_sinyak_mc();
	this.instance_11.setTransform(-93,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).wait(64));

	// animation
	this.instance_12 = new lib.hero1_brecets_mc();
	this.instance_12.setTransform(-13,84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(64));

	// animation
	this.instance_13 = new lib.hero1_lips0_mc();
	this.instance_13.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(64));

	// animation
	this.instance_14 = new lib.hero1_scale_mc();
	this.instance_14.setTransform(93.9,53.5,1,1,0,0,180);

	this.instance_15 = new lib.hero1_scale_mc();
	this.instance_15.setTransform(-112,52.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14}]}).wait(64));

	// animation
	this.instance_16 = new lib.hero1_prish2_mc();
	this.instance_16.setTransform(15,134.5);

	this.instance_17 = new lib.hero1_prish2_mc();
	this.instance_17.setTransform(-24,23.5);

	this.instance_18 = new lib.hero1_prish2_mc();
	this.instance_18.setTransform(-37,-60.4);

	this.instance_19 = new lib.hero1_prish2_mc();
	this.instance_19.setTransform(33.9,-145.4);

	this.instance_20 = new lib.hero1_prish2_mc();
	this.instance_20.setTransform(-77,-163.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]}).wait(64));

	// animation
	this.instance_21 = new lib.hero1_prish1_mc();
	this.instance_21.setTransform(-78,-163.9);

	this.instance_22 = new lib.hero1_prish1_mc();
	this.instance_22.setTransform(15,134.5);

	this.instance_23 = new lib.hero1_prish1_mc();
	this.instance_23.setTransform(-24,23.5);

	this.instance_24 = new lib.hero1_prish1_mc();
	this.instance_24.setTransform(-35,-60);

	this.instance_25 = new lib.hero1_prish1_mc();
	this.instance_25.setTransform(34,-146.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21}]}).wait(64));

	// animation
	this.instance_26 = new lib.hero1_head_mc();
	this.instance_26.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(64));

	// animation
	this.instance_27 = new lib.hero1_boby0_mc();
	this.instance_27.setTransform(-10,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(64));

	// animation
	this.instance_28 = new lib.hero1_hair0_mc();
	this.instance_28.setTransform(0,197.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(64));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-331,-319.9,668.1,887.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-331,-319.9,662,887.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-331,-319.9,667.2,887.4), rect=new cjs.Rectangle(-331,-319.9,667,887.4), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-331,-319.9,667.2,887.4), new cjs.Rectangle(-331,-319.9,662,887.4), rect=new cjs.Rectangle(-365,-319.9,733,887.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-364.1,-319.9,732.1,887.4)];


(lib.animation1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.konek_mc();
	this.instance.setTransform(-264,410.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:75.5},9).to({y:67.5},3).to({y:75.5},3).to({x:-218},6).to({rotation:-8,x:-265.7,y:76.5},12).to({y:418.5},10).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.hero1_leaf4_mc();
	this.instance_1.setTransform(-184.9,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({rotation:-8,x:-241.7,y:9.6},12).to({y:351.6},10).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.hero1_leaf4_mc();
	this.instance_2.setTransform(164.9,24.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(45));

	// animation
	this.instance_3 = new lib.hero1_fringe0_mc();
	this.instance_3.setTransform(-4,-125.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(45));

	// animation
	this.instance_4 = new lib.hero1_eyebrows0_mc();
	this.instance_4.setTransform(-18,-102.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45));

	// animation
	this.instance_5 = new lib.hero1_eyebrows1_mc();
	this.instance_5.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(45));

	// animation
	this.instance_6 = new lib.hero1_eyes0_mc();
	this.instance_6.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(45));

	// animation
	this.instance_7 = new lib.hero1_sinyak_mc();
	this.instance_7.setTransform(72,10.5,1,1,0,0,180);

	this.instance_8 = new lib.hero1_sinyak_mc();
	this.instance_8.setTransform(-93,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(45));

	// animation
	this.instance_9 = new lib.hero1_brecets_mc();
	this.instance_9.setTransform(-13,84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(45));

	// animation
	this.instance_10 = new lib.hero1_lips0_mc();
	this.instance_10.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(45));

	// animation
	this.instance_11 = new lib.hero1_scale_mc();
	this.instance_11.setTransform(93.9,53.5,1,1,0,0,180);

	this.instance_12 = new lib.hero1_scale_mc();
	this.instance_12.setTransform(-112,52.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11}]}).wait(45));

	// animation
	this.instance_13 = new lib.hero1_prish2_mc();
	this.instance_13.setTransform(15,134.5);

	this.instance_14 = new lib.hero1_prish2_mc();
	this.instance_14.setTransform(-24,23.5);

	this.instance_15 = new lib.hero1_prish2_mc();
	this.instance_15.setTransform(-37,-60.4);

	this.instance_16 = new lib.hero1_prish2_mc();
	this.instance_16.setTransform(33.9,-145.4);

	this.instance_17 = new lib.hero1_prish2_mc();
	this.instance_17.setTransform(-77,-163.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(45));

	// animation
	this.instance_18 = new lib.hero1_prish1_mc();
	this.instance_18.setTransform(-78,-163.9);

	this.instance_19 = new lib.hero1_prish1_mc();
	this.instance_19.setTransform(15,134.5);

	this.instance_20 = new lib.hero1_prish1_mc();
	this.instance_20.setTransform(-24,23.5);

	this.instance_21 = new lib.hero1_prish1_mc();
	this.instance_21.setTransform(-35,-60);

	this.instance_22 = new lib.hero1_prish1_mc();
	this.instance_22.setTransform(34,-146.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18}]}).wait(45));

	// animation
	this.instance_23 = new lib.hero1_head_mc();
	this.instance_23.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(45));

	// animation
	this.instance_24 = new lib.hero1_boby0_mc();
	this.instance_24.setTransform(-10,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(45));

	// animation
	this.instance_25 = new lib.hero1_hair0_mc();
	this.instance_25.setTransform(0,197.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-331,-319.9,662,887.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.fish1_mc();
	this.instance.setTransform(597,-365,1,1,0,-30,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:-19.5,skewY:160.5,x:273,y:-50.5},9).to({skewX:10.5,skewY:190.5,x:-224,y:-121.3},12).to({skewX:25.5,skewY:205.5,x:-549.8,y:-369.6},12).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.hero1_leaf3_mc();
	this.instance_1.setTransform(219.4,-65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({rotation:30,x:-263,y:-161},12).to({rotation:45,x:-577.2,y:-418.1},12).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.hero1_leaf4_mc();
	this.instance_2.setTransform(164.9,24.5,1,1,0,0,180);

	this.instance_3 = new lib.hero1_leaf4_mc();
	this.instance_3.setTransform(-184.9,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(35));

	// animation
	this.instance_4 = new lib.hero1_fringe0_mc();
	this.instance_4.setTransform(-4,-125.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35));

	// animation
	this.instance_5 = new lib.hero1_eyebrows0_mc();
	this.instance_5.setTransform(-18,-102.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35));

	// animation
	this.instance_6 = new lib.hero1_eyebrows1_mc();
	this.instance_6.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(35));

	// animation
	this.instance_7 = new lib.hero1_eyes0_mc();
	this.instance_7.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(35));

	// animation
	this.instance_8 = new lib.hero1_sinyak_mc();
	this.instance_8.setTransform(72,10.5,1,1,0,0,180);

	this.instance_9 = new lib.hero1_sinyak_mc();
	this.instance_9.setTransform(-93,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(35));

	// animation
	this.instance_10 = new lib.hero1_brecets_mc();
	this.instance_10.setTransform(-13,84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(35));

	// animation
	this.instance_11 = new lib.hero1_lips0_mc();
	this.instance_11.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(35));

	// animation
	this.instance_12 = new lib.hero1_scale_mc();
	this.instance_12.setTransform(93.9,53.5,1,1,0,0,180);

	this.instance_13 = new lib.hero1_scale_mc();
	this.instance_13.setTransform(-112,52.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12}]}).wait(35));

	// animation
	this.instance_14 = new lib.hero1_prish2_mc();
	this.instance_14.setTransform(15,134.5);

	this.instance_15 = new lib.hero1_prish2_mc();
	this.instance_15.setTransform(-24,23.5);

	this.instance_16 = new lib.hero1_prish2_mc();
	this.instance_16.setTransform(-37,-60.4);

	this.instance_17 = new lib.hero1_prish2_mc();
	this.instance_17.setTransform(33.9,-145.4);

	this.instance_18 = new lib.hero1_prish2_mc();
	this.instance_18.setTransform(-77,-163.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(35));

	// animation
	this.instance_19 = new lib.hero1_prish1_mc();
	this.instance_19.setTransform(-78,-163.9);

	this.instance_20 = new lib.hero1_prish1_mc();
	this.instance_20.setTransform(15,134.5);

	this.instance_21 = new lib.hero1_prish1_mc();
	this.instance_21.setTransform(-24,23.5);

	this.instance_22 = new lib.hero1_prish1_mc();
	this.instance_22.setTransform(-35,-60);

	this.instance_23 = new lib.hero1_prish1_mc();
	this.instance_23.setTransform(34,-146.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19}]}).wait(35));

	// animation
	this.instance_24 = new lib.hero1_head_mc();
	this.instance_24.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(35));

	// animation
	this.instance_25 = new lib.hero1_boby0_mc();
	this.instance_25.setTransform(-10,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(35));

	// animation
	this.instance_26 = new lib.hero1_hair0_mc();
	this.instance_26.setTransform(0,197.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-331,-467.3,1034.8,1034.8);
p.frameBounds = [rect, new cjs.Rectangle(-331,-399.3,973.7,966.8), new cjs.Rectangle(-331,-363.1,936.9,930.6), new cjs.Rectangle(-331,-327.2,900.3,894.6), new cjs.Rectangle(-331,-319.9,863.4,887.4), new cjs.Rectangle(-331,-319.9,826.5,887.4), new cjs.Rectangle(-331,-319.9,789.8,887.4), new cjs.Rectangle(-331,-319.9,752.9,887.4), new cjs.Rectangle(-331,-319.9,715.8,887.4), new cjs.Rectangle(-331,-319.9,705.5,887.4), rect=new cjs.Rectangle(-331,-319.9,662,887.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-343.4,-319.9,674.3,887.4), new cjs.Rectangle(-370.4,-319.9,701.3,887.4), new cjs.Rectangle(-397.4,-319.9,728.4,887.4), new cjs.Rectangle(-424.4,-319.9,755.4,887.4), new cjs.Rectangle(-451.4,-333.5,782.4,901), new cjs.Rectangle(-478.3,-354.5,809.3,921.9), new cjs.Rectangle(-505.2,-375.5,836.2,943), new cjs.Rectangle(-532.1,-396.5,863.1,964), new cjs.Rectangle(-558.9,-417.6,889.9,985), new cjs.Rectangle(-585.7,-438.5,916.7,1006), new cjs.Rectangle(-612.6,-459.5,943.6,1026.9), new cjs.Rectangle(-654.6,-480.3,985.6,1047.8), new cjs.Rectangle(-331,-319.9,662,887.4)];


(lib.animation1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.fish1_mc();
	this.instance.setTransform(-624.9,-371,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5.7,x:-41.8,y:-269},9).to({rotation:-5.7,x:311.2,y:-263},14).to({rotation:-31.7,x:606.5,y:-377.1},10).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.hero1_leaf2_mc();
	this.instance_1.setTransform(73,-240.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({x:426,y:-234.4},14).to({rotation:-26,x:722.2,y:-401.7},10).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.hero1_leaf4_mc();
	this.instance_2.setTransform(164.9,24.5,1,1,0,0,180);

	this.instance_3 = new lib.hero1_leaf4_mc();
	this.instance_3.setTransform(-184.9,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(35));

	// animation
	this.instance_4 = new lib.hero1_leaf3_mc();
	this.instance_4.setTransform(219.4,-65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35));

	// animation
	this.instance_5 = new lib.hero1_fringe0_mc();
	this.instance_5.setTransform(-4,-125.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35));

	// animation
	this.instance_6 = new lib.hero1_eyebrows0_mc();
	this.instance_6.setTransform(-18,-102.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(35));

	// animation
	this.instance_7 = new lib.hero1_eyebrows1_mc();
	this.instance_7.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(35));

	// animation
	this.instance_8 = new lib.hero1_eyes0_mc();
	this.instance_8.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(35));

	// animation
	this.instance_9 = new lib.hero1_sinyak_mc();
	this.instance_9.setTransform(72,10.5,1,1,0,0,180);

	this.instance_10 = new lib.hero1_sinyak_mc();
	this.instance_10.setTransform(-93,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(35));

	// animation
	this.instance_11 = new lib.hero1_brecets_mc();
	this.instance_11.setTransform(-13,84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(35));

	// animation
	this.instance_12 = new lib.hero1_lips0_mc();
	this.instance_12.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(35));

	// animation
	this.instance_13 = new lib.hero1_scale_mc();
	this.instance_13.setTransform(93.9,53.5,1,1,0,0,180);

	this.instance_14 = new lib.hero1_scale_mc();
	this.instance_14.setTransform(-112,52.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13}]}).wait(35));

	// animation
	this.instance_15 = new lib.hero1_prish2_mc();
	this.instance_15.setTransform(15,134.5);

	this.instance_16 = new lib.hero1_prish2_mc();
	this.instance_16.setTransform(-24,23.5);

	this.instance_17 = new lib.hero1_prish2_mc();
	this.instance_17.setTransform(-37,-60.4);

	this.instance_18 = new lib.hero1_prish2_mc();
	this.instance_18.setTransform(33.9,-145.4);

	this.instance_19 = new lib.hero1_prish2_mc();
	this.instance_19.setTransform(-77,-163.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(35));

	// animation
	this.instance_20 = new lib.hero1_prish1_mc();
	this.instance_20.setTransform(-78,-163.9);

	this.instance_21 = new lib.hero1_prish1_mc();
	this.instance_21.setTransform(15,134.5);

	this.instance_22 = new lib.hero1_prish1_mc();
	this.instance_22.setTransform(-24,23.5);

	this.instance_23 = new lib.hero1_prish1_mc();
	this.instance_23.setTransform(-35,-60);

	this.instance_24 = new lib.hero1_prish1_mc();
	this.instance_24.setTransform(34,-146.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20}]}).wait(35));

	// animation
	this.instance_25 = new lib.hero1_head_mc();
	this.instance_25.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(35));

	// animation
	this.instance_26 = new lib.hero1_boby0_mc();
	this.instance_26.setTransform(-10,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(35));

	// animation
	this.instance_27 = new lib.hero1_hair0_mc();
	this.instance_27.setTransform(0,197.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-731.7,-473.3,1062.7,1040.8);
p.frameBounds = [rect, new cjs.Rectangle(-640,-426.1,971,993.6), new cjs.Rectangle(-572.4,-410.5,903.4,978), new cjs.Rectangle(-504.2,-394.6,835.2,962), new cjs.Rectangle(-437.6,-380.7,768.6,948.2), new cjs.Rectangle(-376.3,-374.2,707.3,941.6), new cjs.Rectangle(-331,-367.3,662,934.7), new cjs.Rectangle(-331,-360.1,662,927.5), new cjs.Rectangle(-331,-352.4,662,919.8), new cjs.Rectangle(-331,-347.4,662,914.9), new cjs.Rectangle(-331,-343.9,662,911.4), new cjs.Rectangle(-331,-343.5,662,911), new cjs.Rectangle(-331,-343.1,662,910.5), new cjs.Rectangle(-331,-342.7,662,910.1), new cjs.Rectangle(-331,-342.2,662,909.7), new cjs.Rectangle(-331,-341.8,662,909.3), new cjs.Rectangle(-331,-341.4,662,908.8), new cjs.Rectangle(-331,-340.9,679.2,908.4), new cjs.Rectangle(-331,-340.5,704.5,908), new cjs.Rectangle(-331,-340.1,729.7,907.5), new cjs.Rectangle(-331,-339.7,754.9,907.1), new cjs.Rectangle(-331,-339.2,780.1,906.7), new cjs.Rectangle(-331,-338.8,805.3,906.3), new cjs.Rectangle(-331,-341.4,830.5,908.9), new cjs.Rectangle(-331,-352,862.3,919.4), new cjs.Rectangle(-331,-365.2,894.1,932.7), new cjs.Rectangle(-331,-378.5,925.8,945.9), new cjs.Rectangle(-331,-391.4,957.3,958.8), new cjs.Rectangle(-331,-404.2,988.5,971.6), new cjs.Rectangle(-331,-416.9,1019.6,984.4), new cjs.Rectangle(-331,-429.3,1050.6,996.8), new cjs.Rectangle(-331,-443.8,1081.4,1011.2), new cjs.Rectangle(-331,-462.6,1112,1030.1), new cjs.Rectangle(-331,-481.6,1142.5,1049), new cjs.Rectangle(-331,-319.9,662,887.4)];


(lib.animation1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.fish1_mc();
	this.instance.setTransform(-624.9,-371,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,x:-326,y:-27},14).to({rotation:-10.2,x:-51.3,y:-45.2},10).to({x:332.7,y:-86.2},16).to({rotation:-25.2,x:555.4,y:-386.7},8).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.hero1_leaf1_mc();
	this.instance_1.setTransform(-195.9,-112.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({rotation:-10.2,x:61.5,y:-152.4},10).to({x:445.5,y:-193.4},16).to({rotation:-25.2,x:636.6,y:-519.4},8).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.hero1_leaf4_mc();
	this.instance_2.setTransform(164.9,24.5,1,1,0,0,180);

	this.instance_3 = new lib.hero1_leaf4_mc();
	this.instance_3.setTransform(-184.9,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(50));

	// animation
	this.instance_4 = new lib.hero1_leaf3_mc();
	this.instance_4.setTransform(219.4,-65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50));

	// animation
	this.instance_5 = new lib.hero1_leaf2_mc();
	this.instance_5.setTransform(73,-240.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50));

	// animation
	this.instance_6 = new lib.hero1_fringe0_mc();
	this.instance_6.setTransform(-4,-125.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(50));

	// animation
	this.instance_7 = new lib.hero1_eyebrows0_mc();
	this.instance_7.setTransform(-18,-102.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50));

	// animation
	this.instance_8 = new lib.hero1_eyebrows1_mc();
	this.instance_8.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50));

	// animation
	this.instance_9 = new lib.hero1_eyes0_mc();
	this.instance_9.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// animation
	this.instance_10 = new lib.hero1_sinyak_mc();
	this.instance_10.setTransform(72,10.5,1,1,0,0,180);

	this.instance_11 = new lib.hero1_sinyak_mc();
	this.instance_11.setTransform(-93,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).wait(50));

	// animation
	this.instance_12 = new lib.hero1_brecets_mc();
	this.instance_12.setTransform(-13,84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

	// animation
	this.instance_13 = new lib.hero1_lips0_mc();
	this.instance_13.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50));

	// animation
	this.instance_14 = new lib.hero1_scale_mc();
	this.instance_14.setTransform(93.9,53.5,1,1,0,0,180);

	this.instance_15 = new lib.hero1_scale_mc();
	this.instance_15.setTransform(-112,52.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14}]}).wait(50));

	// animation
	this.instance_16 = new lib.hero1_prish2_mc();
	this.instance_16.setTransform(15,134.5);

	this.instance_17 = new lib.hero1_prish2_mc();
	this.instance_17.setTransform(-24,23.5);

	this.instance_18 = new lib.hero1_prish2_mc();
	this.instance_18.setTransform(-37,-60.4);

	this.instance_19 = new lib.hero1_prish2_mc();
	this.instance_19.setTransform(33.9,-145.4);

	this.instance_20 = new lib.hero1_prish2_mc();
	this.instance_20.setTransform(-77,-163.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]}).wait(50));

	// animation
	this.instance_21 = new lib.hero1_prish1_mc();
	this.instance_21.setTransform(-78,-163.9);

	this.instance_22 = new lib.hero1_prish1_mc();
	this.instance_22.setTransform(15,134.5);

	this.instance_23 = new lib.hero1_prish1_mc();
	this.instance_23.setTransform(-24,23.5);

	this.instance_24 = new lib.hero1_prish1_mc();
	this.instance_24.setTransform(-35,-60);

	this.instance_25 = new lib.hero1_prish1_mc();
	this.instance_25.setTransform(34,-146.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21}]}).wait(50));

	// animation
	this.instance_26 = new lib.hero1_head_mc();
	this.instance_26.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(50));

	// animation
	this.instance_27 = new lib.hero1_boby0_mc();
	this.instance_27.setTransform(-10,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(50));

	// animation
	this.instance_28 = new lib.hero1_hair0_mc();
	this.instance_28.setTransform(0,197.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-731.7,-473.3,1062.7,1040.8);
p.frameBounds = [rect, new cjs.Rectangle(-684.7,-414.7,1015.7,982.2), new cjs.Rectangle(-661.8,-387.9,992.8,955.3), new cjs.Rectangle(-639,-361.1,970,928.6), new cjs.Rectangle(-615.9,-334.1,946.9,901.5), new cjs.Rectangle(-592.9,-319.9,923.9,887.4), new cjs.Rectangle(-569.6,-319.9,900.6,887.4), new cjs.Rectangle(-546.5,-319.9,877.5,887.4), new cjs.Rectangle(-527,-319.9,858,887.4), new cjs.Rectangle(-507.7,-319.9,838.7,887.4), new cjs.Rectangle(-487.9,-319.9,818.9,887.4), new cjs.Rectangle(-468.3,-319.9,799.3,887.4), new cjs.Rectangle(-448.4,-319.9,779.4,887.4), new cjs.Rectangle(-428.6,-319.9,759.6,887.4), new cjs.Rectangle(-408.5,-319.9,739.5,887.4), new cjs.Rectangle(-381.6,-319.9,712.6,887.4), new cjs.Rectangle(-354.7,-319.9,685.7,887.4), rect=new cjs.Rectangle(-331,-319.9,662,887.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-331,-319.9,664.7,887.4), new cjs.Rectangle(-331,-319.9,688.7,887.4), new cjs.Rectangle(-331,-319.9,712.7,887.4), new cjs.Rectangle(-331,-319.9,736.7,887.4), new cjs.Rectangle(-331,-319.9,760.7,887.4), new cjs.Rectangle(-331,-319.9,784.7,887.4), new cjs.Rectangle(-331,-319.9,808.7,887.4), new cjs.Rectangle(-331,-319.9,832.7,887.4), new cjs.Rectangle(-331,-319.9,857,887.4), new cjs.Rectangle(-331,-351.7,883.7,919.2), new cjs.Rectangle(-331,-393.5,910.5,961), new cjs.Rectangle(-331,-435.4,937.3,1002.9), new cjs.Rectangle(-331,-477.1,963.9,1044.5), new cjs.Rectangle(-331,-518.7,990.6,1086.1), new cjs.Rectangle(-331,-560.1,1016.9,1127.6), new cjs.Rectangle(-331,-601.5,1043.3,1168.9), new cjs.Rectangle(-331,-642.8,1069.8,1210.3), new cjs.Rectangle(-331,-319.9,662,887.4)];


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


(lib.animation_current_location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_location_1_mc();
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},39).to({alpha:0.301},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_circles_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.mouseChildren = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(100));

	// animation
	this.instance = new lib.circles_mc();
	this.instance.setTransform(0,0,0.316,0.316);
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(66).to({scaleX:1,scaleY:1},13).to({alpha:0.102},5).to({_off:true},1).wait(15));

	// animation
	this.instance_1 = new lib.circles_mc();
	this.instance_1.setTransform(0,0,0.316,0.316);
	this.instance_1.alpha = 0.602;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(79).to({_off:false},0).to({scaleX:1,scaleY:1},14).to({alpha:0.102},5).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-34.9,-34.9,70,70), new cjs.Rectangle(-39.9,-39.9,80,80), new cjs.Rectangle(-44.9,-44.9,90,90), new cjs.Rectangle(-49.9,-49.9,100,100), new cjs.Rectangle(-54.9,-54.9,110,110), new cjs.Rectangle(-59.9,-59.9,120,120), new cjs.Rectangle(-64.9,-64.9,130,130), new cjs.Rectangle(-69.9,-69.9,140,140), new cjs.Rectangle(-74.9,-74.9,150,150), new cjs.Rectangle(-79.9,-79.9,160,160), new cjs.Rectangle(-84.9,-84.9,170,170), new cjs.Rectangle(-89.9,-89.9,180,180), rect=new cjs.Rectangle(-95,-95,190,190), rect, rect, rect, rect, rect, new cjs.Rectangle(-57.8,-57.8,115.7,115.7), new cjs.Rectangle(-62.4,-62.4,125,125), new cjs.Rectangle(-67.1,-67.1,134.3,134.3), new cjs.Rectangle(-71.7,-71.7,143.6,143.6), new cjs.Rectangle(-76.4,-76.4,152.9,152.9), new cjs.Rectangle(-81,-81,162.1,162.1), new cjs.Rectangle(-85.7,-85.7,171.5,171.5), new cjs.Rectangle(-90.3,-90.3,180.7,180.7), rect=new cjs.Rectangle(-95,-95,190,190), rect, rect, rect, rect, rect, null];


(lib.animation_btn_2_24_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
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
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

	// animation
	this.instance = new lib.forward_mc();
	this.instance.setTransform(300,400,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({regX:0.1,regY:-0.1,scaleX:0.63,scaleY:0.63,x:300.1},0).to({regX:0,regY:0,scaleX:0.95,scaleY:0.95,x:300,y:150},10).to({scaleX:0.84,scaleY:0.84,y:200},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(220,320,160,160);
p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(240,340,120,120), new cjs.Rectangle(237,312.1,126,126), new cjs.Rectangle(234,284,132,132), new cjs.Rectangle(231,256,138,138), new cjs.Rectangle(228,228,144,144), new cjs.Rectangle(225,200,150,150), new cjs.Rectangle(222,172,156,156), new cjs.Rectangle(219,144,162,162), new cjs.Rectangle(216,116,168,168), new cjs.Rectangle(213,88,174,174), new cjs.Rectangle(210,60,180,180), new cjs.Rectangle(212,72,176,176), new cjs.Rectangle(214.1,84,172,172), new cjs.Rectangle(216,96,168,168), new cjs.Rectangle(218,108,164,164), new cjs.Rectangle(220,120,160,160)];


(lib.animation_btn_1_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
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
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// animation
	this.instance = new lib.forward_mc();
	this.instance.setTransform(300.1,400,0.632,0.632,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:0,scaleX:0.95,scaleY:0.95,x:300,y:150},9).to({scaleX:0.84,scaleY:0.84,y:200},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(240,340,120,120);
p.frameBounds = [rect, new cjs.Rectangle(236.7,308.9,126.7,126.6), new cjs.Rectangle(233.3,277.8,133.4,133.4), new cjs.Rectangle(230,246.7,140,140), new cjs.Rectangle(226.7,215.6,146.7,146.6), new cjs.Rectangle(223.3,184.5,153.4,153.4), new cjs.Rectangle(220,153.4,160,160), new cjs.Rectangle(216.7,122.2,166.7,166.7), new cjs.Rectangle(213.3,91.2,173.4,173.4), new cjs.Rectangle(210,60,180,180), new cjs.Rectangle(212,72,176,176), new cjs.Rectangle(214.1,84,172,172), new cjs.Rectangle(216,96,168,168), new cjs.Rectangle(218,108,164,164), new cjs.Rectangle(220,120,160,160)];


(lib.accessory_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.7,0.7,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-28,56,56);
p.frameBounds = [rect];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:34,end:69});

	// animation
	this.instance = new lib.curtain_2_mc();
	this.instance.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:900,y:0},0).to({x:400},8).to({x:0},15).wait(20).to({x:900},24).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.curtain_1_mc();
	this.instance_1.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-900,y:0},0).to({x:-400},8).to({x:0},15).wait(20).to({x:-900},24).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.curtain_3_mc();
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({alpha:1},5).wait(20).to({alpha:0.012},5).to({_off:true},1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,600,1600,600);
p.frameBounds = [rect, new cjs.Rectangle(-1300,0,3400,600), new cjs.Rectangle(-1237.5,0,3275,600), new cjs.Rectangle(-1175,0,3150,600), new cjs.Rectangle(-1112.5,0,3025,600), new cjs.Rectangle(-1050,0,2900,600), new cjs.Rectangle(-987.5,0,2775,600), new cjs.Rectangle(-925,0,2650,600), new cjs.Rectangle(-862.5,0,2525,600), new cjs.Rectangle(-800,0,2400,600), new cjs.Rectangle(-773.3,0,2346.7,600), new cjs.Rectangle(-746.6,0,2293.3,600), new cjs.Rectangle(-720,0,2240,600), new cjs.Rectangle(-693.3,0,2186.7,600), new cjs.Rectangle(-666.6,0,2133.3,600), new cjs.Rectangle(-640,0,2080,600), new cjs.Rectangle(-613.3,0,2026.7,600), new cjs.Rectangle(-586.6,0,1973.3,600), new cjs.Rectangle(-560,0,1920,600), new cjs.Rectangle(-533.3,0,1866.7,600), new cjs.Rectangle(-506.6,0,1813.3,600), new cjs.Rectangle(-480,0,1760,600), new cjs.Rectangle(-453.3,0,1706.7,600), new cjs.Rectangle(-426.6,0,1653.3,600), rect=new cjs.Rectangle(-400,0,1600,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-437.5,0,1675,600), new cjs.Rectangle(-475,0,1750,600), new cjs.Rectangle(-512.5,0,1825,600), new cjs.Rectangle(-550,0,1900,600), new cjs.Rectangle(-587.5,0,1975,600), new cjs.Rectangle(-625,0,2050,600), new cjs.Rectangle(-662.5,0,2125,600), new cjs.Rectangle(-700,0,2200,600), new cjs.Rectangle(-737.5,0,2275,600), new cjs.Rectangle(-775,0,2350,600), new cjs.Rectangle(-812.5,0,2425,600), new cjs.Rectangle(-850,0,2500,600), new cjs.Rectangle(-887.5,0,2575,600), new cjs.Rectangle(-925,0,2650,600), new cjs.Rectangle(-962.5,0,2725,600), new cjs.Rectangle(-1000,0,2800,600), new cjs.Rectangle(-1037.5,0,2875,600), new cjs.Rectangle(-1075,0,2950,600), new cjs.Rectangle(-1112.5,0,3025,600), new cjs.Rectangle(-1150,0,3100,600), new cjs.Rectangle(-1187.5,0,3175,600), new cjs.Rectangle(-1225,0,3250,600), new cjs.Rectangle(-1262.5,0,3325,600), new cjs.Rectangle(-1300,0,3400,600), null];


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
p.nominalBounds = rect = new cjs.Rectangle(-26,-26,52,52);
p.frameBounds = [rect];


(lib.Glitter_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.mouseChildren = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.glitter_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.102},14).to({scaleX:1,scaleY:1,alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-32,64,64);
p.frameBounds = [rect, new cjs.Rectangle(-31.5,-31.5,63.1,63.1), new cjs.Rectangle(-31,-31,62.2,62.2), new cjs.Rectangle(-30.6,-30.6,61.3,61.3), new cjs.Rectangle(-30.1,-30.1,60.4,60.4), new cjs.Rectangle(-29.7,-29.7,59.5,59.5), new cjs.Rectangle(-29.2,-29.2,58.5,58.5), new cjs.Rectangle(-28.8,-28.8,57.6,57.6), new cjs.Rectangle(-28.3,-28.3,56.7,56.7), new cjs.Rectangle(-27.8,-27.8,55.8,55.8), new cjs.Rectangle(-27.4,-27.4,54.9,54.9), new cjs.Rectangle(-26.9,-26.9,54,54), new cjs.Rectangle(-26.5,-26.5,53.1,53.1), new cjs.Rectangle(-26,-26,52.1,52.1), new cjs.Rectangle(-25.6,-25.6,51.2,51.2), new cjs.Rectangle(-26,-26,52.1,52.1), new cjs.Rectangle(-26.4,-26.4,52.9,52.9), new cjs.Rectangle(-26.8,-26.8,53.8,53.8), new cjs.Rectangle(-27.3,-27.3,54.6,54.6), new cjs.Rectangle(-27.7,-27.7,55.5,55.5), new cjs.Rectangle(-28.1,-28.1,56.3,56.3), new cjs.Rectangle(-28.5,-28.5,57.2,57.2), new cjs.Rectangle(-29,-29,58,58), new cjs.Rectangle(-29.4,-29.4,58.9,58.9), new cjs.Rectangle(-29.8,-29.8,59.8,59.8), new cjs.Rectangle(-30.2,-30.2,60.6,60.6), new cjs.Rectangle(-30.7,-30.7,61.5,61.5), new cjs.Rectangle(-31.1,-31.1,62.3,62.3), new cjs.Rectangle(-31.5,-31.5,63.2,63.2), new cjs.Rectangle(-32,-32,64,64)];


(lib.blinking_light_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_light_1_2_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.012},14).to({scaleX:1,scaleY:1,alpha:0.801},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect, new cjs.Rectangle(-23.6,-23.6,47.3,47.3), new cjs.Rectangle(-23.3,-23.3,46.7,46.7), new cjs.Rectangle(-22.9,-22.9,46,46), new cjs.Rectangle(-22.6,-22.6,45.3,45.3), new cjs.Rectangle(-22.2,-22.2,44.6,44.6), new cjs.Rectangle(-21.9,-21.9,43.9,43.9), new cjs.Rectangle(-21.6,-21.6,43.2,43.2), new cjs.Rectangle(-21.2,-21.2,42.5,42.5), new cjs.Rectangle(-20.9,-20.9,41.8,41.8), new cjs.Rectangle(-20.5,-20.5,41.2,41.2), new cjs.Rectangle(-20.2,-20.2,40.5,40.5), new cjs.Rectangle(-19.8,-19.8,39.8,39.8), new cjs.Rectangle(-19.5,-19.5,39.1,39.1), new cjs.Rectangle(-19.2,-19.2,38.4,38.4), new cjs.Rectangle(-19.5,-19.5,39.1,39.1), new cjs.Rectangle(-19.8,-19.8,39.7,39.7), new cjs.Rectangle(-20.1,-20.1,40.3,40.3), new cjs.Rectangle(-20.4,-20.4,41,41), new cjs.Rectangle(-20.7,-20.7,41.6,41.6), new cjs.Rectangle(-21.1,-21.1,42.3,42.3), new cjs.Rectangle(-21.4,-21.4,42.9,42.9), new cjs.Rectangle(-21.7,-21.7,43.5,43.5), new cjs.Rectangle(-22,-22,44.2,44.2), new cjs.Rectangle(-22.3,-22.3,44.8,44.8), new cjs.Rectangle(-22.7,-22.7,45.5,45.5), new cjs.Rectangle(-23,-23,46.1,46.1), new cjs.Rectangle(-23.3,-23.3,46.7,46.7), new cjs.Rectangle(-23.6,-23.6,47.3,47.3), new cjs.Rectangle(-24,-24,48,48)];


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
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect, new cjs.Rectangle(-40,-40,80,80), new cjs.Rectangle(-35,-35,70,70), new cjs.Rectangle(-40,-40,80,80)];


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


(lib.nav_anim_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_3_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({alpha:0.801},20).to({alpha:0.012},20).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao0I1QjrjpAAlMQAAlKDrjqQDqjrFKAAQFLAADqDrQDrDqAAFKQAAFMjrDpQjqDrlLAAQlKAAjqjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_anim_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_2_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({alpha:0.801},20).to({alpha:0.012},20).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao0I1QjrjpAAlMQAAlKDrjqQDqjrFKAAQFLAADqDrQDrDqAAFKQAAFMjrDpQjqDrlLAAQlKAAjqjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.89,scaleY:0.89,x:-5},19).to({scaleX:1,scaleY:1,x:5},40).to({x:0},20).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDPAACSCTQCTCTAADNQAADOiTCTQiSCTjPgBQjNABiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-50,-50,100.4,100), new cjs.Rectangle(-50,-50,100.8,100), new cjs.Rectangle(-50,-50,101.1,100), new cjs.Rectangle(-50,-50,101.6,100), new cjs.Rectangle(-50,-50,102,100), new cjs.Rectangle(-50,-50,102.3,100), new cjs.Rectangle(-50,-50,102.8,100), new cjs.Rectangle(-50,-50,103.1,100), new cjs.Rectangle(-50,-50,103.5,100), new cjs.Rectangle(-50,-50,103.9,100), new cjs.Rectangle(-50,-50,104.3,100), new cjs.Rectangle(-50,-50,104.6,100), new cjs.Rectangle(-50,-50,105,100), new cjs.Rectangle(-50,-50,104.8,100), new cjs.Rectangle(-50,-50,104.5,100), new cjs.Rectangle(-50,-50,104.3,100), new cjs.Rectangle(-50,-50,104,100), new cjs.Rectangle(-50,-50,103.8,100), new cjs.Rectangle(-50,-50,103.5,100), new cjs.Rectangle(-50,-50,103.3,100), new cjs.Rectangle(-50,-50,103,100), new cjs.Rectangle(-50,-50,102.8,100), new cjs.Rectangle(-50,-50,102.5,100), new cjs.Rectangle(-50,-50,102.3,100), new cjs.Rectangle(-50,-50,102,100), new cjs.Rectangle(-50,-50,101.8,100), new cjs.Rectangle(-50,-50,101.5,100), new cjs.Rectangle(-50,-50,101.3,100), new cjs.Rectangle(-50,-50,101,100), new cjs.Rectangle(-50,-50,100.8,100), new cjs.Rectangle(-50,-50,100.5,100), new cjs.Rectangle(-50,-50,100.3,100), new cjs.Rectangle(-50,-50,100,100)];


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
p.nominalBounds = rect = new cjs.Rectangle(-340,-115,600,205);
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
	this.instance.setTransform(-180,-180);

	this.instance_1 = new lib.location_1_6_img();
	this.instance_1.setTransform(-180,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_mc();

	this.instance_3 = new lib.animation_current_location_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNSPQnjnkAAqrQAAqqHjnjQHjnjKqAAQKrAAHkHjQHiHjAAKqQAAKrniHkQnkHiqrAAQqqAAnjnig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect, rect, rect];


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_5_img();
	this.instance.setTransform(-180,-180);

	this.instance_1 = new lib.location_1_5_img();
	this.instance_1.setTransform(-180,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_mc();

	this.instance_3 = new lib.animation_current_location_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNSPQnjnkAAqrQAAqqHjnjQHjnjKqAAQKrAAHkHjQHiHjAAKqQAAKrniHkQnkHiqrAAQqqAAnjnig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect, rect, rect];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_4_img();
	this.instance.setTransform(-180,-180);

	this.instance_1 = new lib.location_1_4_img();
	this.instance_1.setTransform(-180,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_mc();

	this.instance_3 = new lib.animation_current_location_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNSPQnjnkAAqrQAAqqHjnjQHjnjKqAAQKrAAHkHjQHiHjAAKqQAAKrniHkQnkHiqrAAQqqAAnjnig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect, rect, rect];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_3_img();
	this.instance.setTransform(-180,-180);

	this.instance_1 = new lib.location_1_3_img();
	this.instance_1.setTransform(-180,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_mc();

	this.instance_3 = new lib.animation_current_location_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNSPQnjnkAAqrQAAqqHjnjQHjnjKqAAQKrAAHkHjQHiHjAAKqQAAKrniHkQnkHiqrAAQqqAAnjnig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect, rect, rect];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_2_img();
	this.instance.setTransform(-180,-180);

	this.instance_1 = new lib.location_1_2_img();
	this.instance_1.setTransform(-180,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_mc();

	this.instance_3 = new lib.animation_current_location_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNSPQnjnkAAqrQAAqqHjnjQHjnjKqAAQKrAAHkHjQHiHjAAKqQAAKrniHkQnkHiqrAAQqqAAnjnig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect, rect, rect];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_1_img();
	this.instance.setTransform(-180,-180);

	this.instance_1 = new lib.location_1_1_img();
	this.instance_1.setTransform(-180,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_mc();

	this.instance_3 = new lib.animation_current_location_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNSPQnjnkAAqrQAAqqHjnjQHjnjKqAAQKrAAHkHjQHiHjAAKqQAAKrniHkQnkHiqrAAQqqAAnjnig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
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
	this.body_mc = new lib.body_hint_filter_mc();
	this.body_mc.setTransform(0,0,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.5,-29.5,210,150);
p.frameBounds = [rect];


(lib.heroes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.hero_2_2_mc();
	this.hero_2.setTransform(580,350);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:400,y:1400},0).wait(1).to({y:350},0).wait(1).to({y:1400},0).wait(1).to({y:350},0).wait(1));

	// hero_1
	this.hero_1 = new lib.hero_2_1_mc();
	this.hero_1.setTransform(227,360);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:427,y:370},0).wait(1).to({y:1400},0).wait(1).to({y:370},0).wait(1).to({y:1400},0).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-400,0);

	this.instance_1 = new lib.background_7_img();
	this.instance_1.setTransform(-400,0);

	this.instance_2 = new lib.background_10_img();
	this.instance_2.setTransform(-400,0);

	this.instance_3 = new lib.background_8_img();
	this.instance_3.setTransform(-400,0);

	this.instance_4 = new lib.background_9_img();
	this.instance_4.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-6.2,1600,675.9);
p.frameBounds = [rect, new cjs.Rectangle(-400,0,1600,1719.4), new cjs.Rectangle(-400,0,1600,1709.7), new cjs.Rectangle(-400,0,1600,1719.4), new cjs.Rectangle(-400,0,1600,1709.7)];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.instance = new lib.hero_main_1_mc();
	this.instance.setTransform(230,360);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero_2
	this.instance_1 = new lib.hero_main_2_mc();
	this.instance_1.setTransform(560,350);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(67.5,30.5,683.5,639.2);
p.frameBounds = [rect];


(lib.frame_locations_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":159});

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
	this.frame_49 = function() {
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
	this.frame_64 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(15).call(this.frame_49).wait(15).call(this.frame_64).wait(96));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(170,410);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({y:-300},0).wait(23).to({y:460},15).to({y:410},5).wait(55).to({y:370},5).to({y:1200},10).wait(46));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(630,410);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:-300},0).wait(38).to({y:460},15).to({y:410},5).wait(50).to({y:370},5).to({y:1200},10).wait(36));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(400,190);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({y:-600},0).wait(53).to({y:240},15).to({y:190},5).wait(45).to({y:140},5).to({y:900},10).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,10,820,580);
p.frameBounds = [rect, rect=new cjs.Rectangle(-10,-780,820,660), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-10,-780,820,710.7), new cjs.Rectangle(-10,-780,820,761.4), new cjs.Rectangle(-10,-780,820,812), new cjs.Rectangle(-10,-780,820,862.7), new cjs.Rectangle(-10,-780,820,913.4), new cjs.Rectangle(-10,-780,820,964), new cjs.Rectangle(-10,-780,820,1014.7), new cjs.Rectangle(-10,-780,820,1065.4), new cjs.Rectangle(-10,-780,820,1116), new cjs.Rectangle(-10,-780,820,1166.7), new cjs.Rectangle(-10,-780,820,1217.4), new cjs.Rectangle(-10,-780,820,1268), new cjs.Rectangle(-10,-780,820,1318.7), new cjs.Rectangle(-10,-780,820,1369.4), new cjs.Rectangle(-10,-780,820,1420), new cjs.Rectangle(-10,-780,820,1410), new cjs.Rectangle(-10,-780,820,1400), new cjs.Rectangle(-10,-780,820,1390), new cjs.Rectangle(-10,-780,820,1380), rect=new cjs.Rectangle(-10,-780,820,1370), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-10,-780,820,1420), new cjs.Rectangle(-10,-724,820,1354), new cjs.Rectangle(-10,-668,820,1288), new cjs.Rectangle(-10,-612,820,1222), new cjs.Rectangle(-10,-556,820,1156), new cjs.Rectangle(-10,-500,820,1090), new cjs.Rectangle(-10,-444,820,1034), new cjs.Rectangle(-10,-388,820,978), new cjs.Rectangle(-10,-332,820,922), new cjs.Rectangle(-10,-276,820,866), new cjs.Rectangle(-10,-220,820,810), new cjs.Rectangle(-10,-164,820,754), new cjs.Rectangle(-10,-108,820,698), new cjs.Rectangle(-10,-52,820,642), new cjs.Rectangle(-10,4,820,586), new cjs.Rectangle(-10,60,820,530), new cjs.Rectangle(-10,50,820,540), new cjs.Rectangle(-10,40,820,550), new cjs.Rectangle(-10,30,820,560), new cjs.Rectangle(-10,20,820,570), rect=new cjs.Rectangle(-10,10,820,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-10,10,820,623), new cjs.Rectangle(-10,10,820,706), new cjs.Rectangle(-10,10,820,789), new cjs.Rectangle(-10,10,820,872), new cjs.Rectangle(-10,10,820,955), new cjs.Rectangle(-10,10,820,1038), new cjs.Rectangle(-10,10,820,1121), new cjs.Rectangle(-10,10,820,1204), new cjs.Rectangle(-10,10,820,1287), rect=new cjs.Rectangle(-10,10,820,1370), rect, rect, rect, rect, rect, new cjs.Rectangle(-10,0,820,1380), new cjs.Rectangle(-10,-10,820,1390), new cjs.Rectangle(-10,-20,820,1400), new cjs.Rectangle(-10,-30,820,1410), new cjs.Rectangle(-10,-40,820,1420), new cjs.Rectangle(-10,36,820,1344), new cjs.Rectangle(-10,112,820,1268), new cjs.Rectangle(-10,188,820,1192), new cjs.Rectangle(-10,264,820,1116), new cjs.Rectangle(-10,340,820,1040), new cjs.Rectangle(-10,416,820,964), new cjs.Rectangle(-10,492,820,888), new cjs.Rectangle(-10,568,820,812), new cjs.Rectangle(-10,644,820,736), rect=new cjs.Rectangle(-10,720,820,660), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":119});

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
	this.frame_49 = function() {
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
	this.frame_64 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(15).call(this.frame_49).wait(15).call(this.frame_64).wait(56));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(170,190);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({y:-300},0).wait(38).to({y:240},15).to({y:190},5).wait(61));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(630,190);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:-300},0).wait(53).to({y:240},15).to({y:190},5).wait(46));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(400,410);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({y:-300},0).wait(23).to({y:460},15).to({y:410},5).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,10,820,580);
p.frameBounds = [rect, rect=new cjs.Rectangle(-10,-480,820,360), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-10,-480,820,410.7), new cjs.Rectangle(-10,-480,820,461.4), new cjs.Rectangle(-10,-480,820,512), new cjs.Rectangle(-10,-480,820,562.7), new cjs.Rectangle(-10,-480,820,613.4), new cjs.Rectangle(-10,-480,820,664), new cjs.Rectangle(-10,-480,820,714.7), new cjs.Rectangle(-10,-480,820,765.4), new cjs.Rectangle(-10,-480,820,816), new cjs.Rectangle(-10,-480,820,866.7), new cjs.Rectangle(-10,-480,820,917.4), new cjs.Rectangle(-10,-480,820,968), new cjs.Rectangle(-10,-480,820,1018.7), new cjs.Rectangle(-10,-480,820,1069.4), new cjs.Rectangle(-10,-480,820,1120), new cjs.Rectangle(-10,-480,820,1110), new cjs.Rectangle(-10,-480,820,1100), new cjs.Rectangle(-10,-480,820,1090), new cjs.Rectangle(-10,-480,820,1080), rect=new cjs.Rectangle(-10,-480,820,1070), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-10,-444,820,1034), new cjs.Rectangle(-10,-408,820,998), new cjs.Rectangle(-10,-372,820,962), new cjs.Rectangle(-10,-336,820,926), new cjs.Rectangle(-10,-300,820,890), new cjs.Rectangle(-10,-264,820,854), new cjs.Rectangle(-10,-228,820,818), new cjs.Rectangle(-10,-192,820,782), new cjs.Rectangle(-10,-156,820,746), new cjs.Rectangle(-10,-120,820,710), new cjs.Rectangle(-10,-84,820,674), new cjs.Rectangle(-10,-48,820,638), new cjs.Rectangle(-10,-12,820,602), rect=new cjs.Rectangle(-10,10,820,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":119});

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
	this.frame_49 = function() {
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
	this.frame_64 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(15).call(this.frame_49).wait(15).call(this.frame_64).wait(56));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(170,190);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({y:-300},0).wait(38).to({y:240},15).to({y:190},5).wait(61));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(630,190);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:-300},0).wait(53).to({y:240},15).to({y:190},5).wait(46));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(400,410);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({y:-300},0).wait(23).to({y:460},15).to({y:410},5).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,10,820,580);
p.frameBounds = [rect, rect=new cjs.Rectangle(-10,-480,820,360), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-10,-480,820,410.7), new cjs.Rectangle(-10,-480,820,461.4), new cjs.Rectangle(-10,-480,820,512), new cjs.Rectangle(-10,-480,820,562.7), new cjs.Rectangle(-10,-480,820,613.4), new cjs.Rectangle(-10,-480,820,664), new cjs.Rectangle(-10,-480,820,714.7), new cjs.Rectangle(-10,-480,820,765.4), new cjs.Rectangle(-10,-480,820,816), new cjs.Rectangle(-10,-480,820,866.7), new cjs.Rectangle(-10,-480,820,917.4), new cjs.Rectangle(-10,-480,820,968), new cjs.Rectangle(-10,-480,820,1018.7), new cjs.Rectangle(-10,-480,820,1069.4), new cjs.Rectangle(-10,-480,820,1120), new cjs.Rectangle(-10,-480,820,1110), new cjs.Rectangle(-10,-480,820,1100), new cjs.Rectangle(-10,-480,820,1090), new cjs.Rectangle(-10,-480,820,1080), rect=new cjs.Rectangle(-10,-480,820,1070), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-10,-444,820,1034), new cjs.Rectangle(-10,-408,820,998), new cjs.Rectangle(-10,-372,820,962), new cjs.Rectangle(-10,-336,820,926), new cjs.Rectangle(-10,-300,820,890), new cjs.Rectangle(-10,-264,820,854), new cjs.Rectangle(-10,-228,820,818), new cjs.Rectangle(-10,-192,820,782), new cjs.Rectangle(-10,-156,820,746), new cjs.Rectangle(-10,-120,820,710), new cjs.Rectangle(-10,-84,820,674), new cjs.Rectangle(-10,-48,820,638), new cjs.Rectangle(-10,-12,820,602), rect=new cjs.Rectangle(-10,10,820,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":119});

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
	this.frame_49 = function() {
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
	this.frame_64 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(15).call(this.frame_49).wait(15).call(this.frame_64).wait(56));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(170,410);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:-300},0).wait(23).to({y:460},15).to({y:410},5).wait(76));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(630,410);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-300},0).wait(38).to({y:460},15).to({y:410},5).wait(61));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(400,190);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-600},0).wait(53).to({y:240},15).to({y:190},5).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,10,820,580);
p.frameBounds = [rect, rect=new cjs.Rectangle(-10,-780,820,660), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-10,-780,820,710.7), new cjs.Rectangle(-10,-780,820,761.4), new cjs.Rectangle(-10,-780,820,812), new cjs.Rectangle(-10,-780,820,862.7), new cjs.Rectangle(-10,-780,820,913.4), new cjs.Rectangle(-10,-780,820,964), new cjs.Rectangle(-10,-780,820,1014.7), new cjs.Rectangle(-10,-780,820,1065.4), new cjs.Rectangle(-10,-780,820,1116), new cjs.Rectangle(-10,-780,820,1166.7), new cjs.Rectangle(-10,-780,820,1217.4), new cjs.Rectangle(-10,-780,820,1268), new cjs.Rectangle(-10,-780,820,1318.7), new cjs.Rectangle(-10,-780,820,1369.4), new cjs.Rectangle(-10,-780,820,1420), new cjs.Rectangle(-10,-780,820,1410), new cjs.Rectangle(-10,-780,820,1400), new cjs.Rectangle(-10,-780,820,1390), new cjs.Rectangle(-10,-780,820,1380), rect=new cjs.Rectangle(-10,-780,820,1370), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-10,-780,820,1420), new cjs.Rectangle(-10,-724,820,1354), new cjs.Rectangle(-10,-668,820,1288), new cjs.Rectangle(-10,-612,820,1222), new cjs.Rectangle(-10,-556,820,1156), new cjs.Rectangle(-10,-500,820,1090), new cjs.Rectangle(-10,-444,820,1034), new cjs.Rectangle(-10,-388,820,978), new cjs.Rectangle(-10,-332,820,922), new cjs.Rectangle(-10,-276,820,866), new cjs.Rectangle(-10,-220,820,810), new cjs.Rectangle(-10,-164,820,754), new cjs.Rectangle(-10,-108,820,698), new cjs.Rectangle(-10,-52,820,642), new cjs.Rectangle(-10,4,820,586), new cjs.Rectangle(-10,60,820,530), new cjs.Rectangle(-10,50,820,540), new cjs.Rectangle(-10,40,820,550), new cjs.Rectangle(-10,30,820,560), new cjs.Rectangle(-10,20,820,570), rect=new cjs.Rectangle(-10,10,820,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":119});

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
	this.frame_49 = function() {
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
	this.frame_64 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(15).call(this.frame_49).wait(15).call(this.frame_64).wait(56));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(170,190);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:-600},0).wait(38).to({y:240},15).to({y:190},5).wait(61));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(630,190);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-600},0).wait(53).to({y:240},15).to({y:190},5).wait(46));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(400,410);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-300},0).wait(23).to({y:460},15).to({y:410},5).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,10,820,580);
p.frameBounds = [rect, rect=new cjs.Rectangle(-10,-780,820,660), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-10,-780,820,710.7), new cjs.Rectangle(-10,-780,820,761.4), new cjs.Rectangle(-10,-780,820,812), new cjs.Rectangle(-10,-780,820,862.7), new cjs.Rectangle(-10,-780,820,913.4), new cjs.Rectangle(-10,-780,820,964), new cjs.Rectangle(-10,-780,820,1014.7), new cjs.Rectangle(-10,-780,820,1065.4), new cjs.Rectangle(-10,-780,820,1116), new cjs.Rectangle(-10,-780,820,1166.7), new cjs.Rectangle(-10,-780,820,1217.4), new cjs.Rectangle(-10,-780,820,1268), new cjs.Rectangle(-10,-780,820,1318.7), new cjs.Rectangle(-10,-780,820,1369.4), new cjs.Rectangle(-10,-780,820,1420), new cjs.Rectangle(-10,-780,820,1410), new cjs.Rectangle(-10,-780,820,1400), new cjs.Rectangle(-10,-780,820,1390), new cjs.Rectangle(-10,-780,820,1380), rect=new cjs.Rectangle(-10,-780,820,1370), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-10,-724,820,1314), new cjs.Rectangle(-10,-668,820,1258), new cjs.Rectangle(-10,-612,820,1202), new cjs.Rectangle(-10,-556,820,1146), new cjs.Rectangle(-10,-500,820,1090), new cjs.Rectangle(-10,-444,820,1034), new cjs.Rectangle(-10,-388,820,978), new cjs.Rectangle(-10,-332,820,922), new cjs.Rectangle(-10,-276,820,866), new cjs.Rectangle(-10,-220,820,810), new cjs.Rectangle(-10,-164,820,754), new cjs.Rectangle(-10,-108,820,698), new cjs.Rectangle(-10,-52,820,642), new cjs.Rectangle(-10,4,820,586), rect=new cjs.Rectangle(-10,10,820,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":119,"end":159});

	// timeline functions:
	this.frame_79 = function() {
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
	this.frame_89 = function() {
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
	this.frame_99 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(10).call(this.frame_89).wait(10).call(this.frame_99).wait(61));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-2650,190);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(69).to({x:220},36).to({x:170},4).wait(51));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(-2250,190);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(49).to({x:680},36).to({x:630},4).wait(71));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-1850,410);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(59).to({x:450},36).to({x:400},4).wait(61));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(-1450,300);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(39).to({x:1500},40).wait(81));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-1050,300);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(29).to({x:2000},40).wait(91));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(-650,300);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(19).to({x:2500},40).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2830,10,2360,580);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-2830,10,2438.8,580), new cjs.Rectangle(-2830,10,2517.5,580), new cjs.Rectangle(-2830,10,2596.3,580), new cjs.Rectangle(-2830,10,2675,580), new cjs.Rectangle(-2830,10,2753.8,580), new cjs.Rectangle(-2830,10,2832.5,580), new cjs.Rectangle(-2830,10,2911.3,580), new cjs.Rectangle(-2830,10,2990,580), new cjs.Rectangle(-2830,10,3068.8,580), new cjs.Rectangle(-2830,10,3147.5,580), new cjs.Rectangle(-2830,10,3226.3,580), new cjs.Rectangle(-2830,10,3305,580), new cjs.Rectangle(-2830,10,3383.8,580), new cjs.Rectangle(-2830,10,3462.5,580), new cjs.Rectangle(-2830,10,3541.3,580), new cjs.Rectangle(-2830,10,3620,580), new cjs.Rectangle(-2830,10,3698.8,580), new cjs.Rectangle(-2830,10,3777.5,580), new cjs.Rectangle(-2830,10,3856.3,580), new cjs.Rectangle(-2830,10,3935,580), new cjs.Rectangle(-2830,10,4013.8,580), new cjs.Rectangle(-2830,10,4092.5,580), new cjs.Rectangle(-2830,10,4171.3,580), new cjs.Rectangle(-2830,10,4250,580), new cjs.Rectangle(-2830,10,4328.8,580), new cjs.Rectangle(-2830,10,4407.5,580), new cjs.Rectangle(-2830,10,4486.3,580), new cjs.Rectangle(-2830,10,4565,580), new cjs.Rectangle(-2830,10,4643.8,580), new cjs.Rectangle(-2830,10,4722.5,580), new cjs.Rectangle(-2830,10,4801.3,580), new cjs.Rectangle(-2830,10,4880,580), new cjs.Rectangle(-2830,10,4958.8,580), new cjs.Rectangle(-2830,10,5037.5,580), new cjs.Rectangle(-2830,10,5116.3,580), new cjs.Rectangle(-2830,10,5195,580), new cjs.Rectangle(-2830,10,5273.8,580), new cjs.Rectangle(-2830,10,5352.5,580), new cjs.Rectangle(-2830,10,5431.3,580), rect=new cjs.Rectangle(-2830,10,5510,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-2750.3,10,5430.3,580), new cjs.Rectangle(-2670.5,10,5350.6,580), new cjs.Rectangle(-2590.8,10,5270.9,580), new cjs.Rectangle(-2511.1,10,5191.1,580), new cjs.Rectangle(-2431.4,10,5111.4,580), new cjs.Rectangle(-2351.6,10,5031.7,580), new cjs.Rectangle(-2271.9,10,4952,580), new cjs.Rectangle(-2192.2,10,4872.2,580), new cjs.Rectangle(-2112.5,10,4792.5,580), new cjs.Rectangle(-2032.8,10,4712.8,580), new cjs.Rectangle(-1953,10,4633.1,580), new cjs.Rectangle(-1873.3,10,4553.4,580), new cjs.Rectangle(-1793.6,10,4473.6,580), new cjs.Rectangle(-1713.9,10,4393.9,580), new cjs.Rectangle(-1634.1,10,4314.2,580), new cjs.Rectangle(-1554.4,10,4234.5,580), new cjs.Rectangle(-1474.7,10,4154.7,580), new cjs.Rectangle(-1395,10,4075,580), new cjs.Rectangle(-1315.3,10,3995.3,580), new cjs.Rectangle(-1235.5,10,3915.6,580), new cjs.Rectangle(-1155.8,10,3835.9,580), new cjs.Rectangle(-1076.1,10,3756.1,580), new cjs.Rectangle(-996.4,10,3676.4,580), new cjs.Rectangle(-916.6,10,3596.7,580), new cjs.Rectangle(-836.9,10,3517,580), new cjs.Rectangle(-757.2,10,3437.2,580), new cjs.Rectangle(-677.5,10,3357.5,580), new cjs.Rectangle(-597.8,10,3277.8,580), new cjs.Rectangle(-518,10,3198.1,580), new cjs.Rectangle(-438.3,10,3118.4,580), new cjs.Rectangle(-358.6,10,3038.6,580), new cjs.Rectangle(-278.9,10,2958.9,580), new cjs.Rectangle(-199.1,10,2879.2,580), new cjs.Rectangle(-119.4,10,2799.5,580), new cjs.Rectangle(-39.7,10,2719.7,580), new cjs.Rectangle(40,10,2640,580), new cjs.Rectangle(27.5,10,2652.5,580), new cjs.Rectangle(15,10,2665,580), new cjs.Rectangle(2.5,10,2677.5,580), rect=new cjs.Rectangle(-10,10,2690,580), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_makeup_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.current_makeup_3_0_2_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// body
	this.instance_1 = new lib.current_makeup_2_0_2_mc();

	this.instance_2 = new lib.current_makeup_1_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// body
	this.instance_3 = new lib.current_makeup_1_0_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, rect];


(lib.current_makeup_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.current_makeup_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// body
	this.instance_1 = new lib.current_makeup_1_1_mc();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, new cjs.Rectangle(-120,-120,240,240)];


(lib.current_hairstyle_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.current_hairstyle_0_mc();
	this.instance.setTransform(0,0.3,1,1,0,0,0,0,0.3);

	this.instance_1 = new lib.current_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-132,280,264.1);
p.frameBounds = [rect, new cjs.Rectangle(-140,-132,280,264)];


(lib.current_hairstyle_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.current_hairstyle_0_2_mc();
	this.instance.setTransform(0,0.3,1.024,1.024,0,0,0,0,0.3);

	this.instance_1 = new lib.current_hairstyle_1_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect, rect];


(lib.closet_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(165,-145);

	this.timeline.addTween(cjs.Tween.get(this.accessory_0).wait(4));

	// options
	this.accessory_3 = new lib.accessory_3_2_mc();
	this.accessory_3.setTransform(55,-100);

	this.accessory_2 = new lib.accessory_2_2_mc();
	this.accessory_2.setTransform(-60,-96);

	this.accessory_1 = new lib.accessory_1_2_mc();
	this.accessory_1.setTransform(0,43);

	this.accessory_6 = new lib.accessory_6_2_mc();
	this.accessory_6.setTransform(0,49);

	this.accessory_5 = new lib.accessory_5_2_mc();
	this.accessory_5.setTransform(70,-97);

	this.accessory_4 = new lib.accessory_4_2_mc();
	this.accessory_4.setTransform(-75,-90);

	this.accessory_9 = new lib.accessory_9_2_mc();
	this.accessory_9.setTransform(0,56);

	this.accessory_8 = new lib.accessory_8_2_mc();
	this.accessory_8.setTransform(70,-91);

	this.accessory_7 = new lib.accessory_7_2_mc();
	this.accessory_7.setTransform(-70,-95);

	this.accessory_12 = new lib.accessory_12_2_mc();
	this.accessory_12.setTransform(-70,-97);

	this.accessory_11 = new lib.accessory_11_2_mc();
	this.accessory_11.setTransform(0,53);

	this.accessory_10 = new lib.accessory_10_2_mc();
	this.accessory_10.setTransform(70,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3}]}).to({state:[{t:this.accessory_4},{t:this.accessory_5},{t:this.accessory_6}]},1).to({state:[{t:this.accessory_7},{t:this.accessory_8},{t:this.accessory_9}]},1).to({state:[{t:this.accessory_10},{t:this.accessory_11},{t:this.accessory_12}]},1).wait(1));

	// decor
	this.instance = new lib.shelf_1_4_mc();
	this.instance.setTransform(0,-20);

	this.instance_1 = new lib.shelf_1_4_mc();
	this.instance_1.setTransform(0,130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-189.3,363,359.4);
p.frameBounds = [rect, rect=new cjs.Rectangle(-170,-173,363,343), rect, new cjs.Rectangle(-170,-178.1,363,348.1)];


(lib.closet_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(0,-200);
	this.accessory_0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.accessory_0).wait(3).to({_off:false},0).wait(2));

	// options
	this.bottom_6 = new lib.bottom_6_1_mc();

	this.bottom_4 = new lib.bottom_4_1_mc();
	this.bottom_4.setTransform(-30,-50);

	this.bottom_3 = new lib.bottom_3_1_mc();
	this.bottom_3.setTransform(-5,50);

	this.bottom_2 = new lib.bottom_2_1_mc();
	this.bottom_2.setTransform(5,-60);

	this.bottom_1 = new lib.bottom_1_1_mc();
	this.bottom_1.setTransform(0,15);

	this.bottom_5 = new lib.bottom_5_1_mc();
	this.bottom_5.setTransform(-40,-60);

	this.accessory_3 = new lib.accessory_3_1_mc();
	this.accessory_3.setTransform(100,-80);

	this.accessory_2 = new lib.accessory_2_1_mc();
	this.accessory_2.setTransform(-100,-85);

	this.accessory_1 = new lib.accessory_1_1_mc();
	this.accessory_1.setTransform(0,61);

	this.accessory_6 = new lib.accessory_6_1_mc();
	this.accessory_6.setTransform(0,70);

	this.accessory_5 = new lib.accessory_5_1_mc();
	this.accessory_5.setTransform(100,-86);

	this.accessory_4 = new lib.accessory_4_1_mc();
	this.accessory_4.setTransform(-100,-84);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bottom_4},{t:this.bottom_6}]}).to({state:[{t:this.bottom_2},{t:this.bottom_3}]},1).to({state:[{t:this.bottom_5},{t:this.bottom_1}]},1).to({state:[{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3}]},1).to({state:[{t:this.accessory_4},{t:this.accessory_5},{t:this.accessory_6}]},1).wait(1));

	// decor
	this.instance = new lib.shelf_1_2_mc();
	this.instance.setTransform(0,110);

	this.instance_1 = new lib.shelf_1_2_mc();
	this.instance_1.setTransform(100,-40);

	this.instance_2 = new lib.shelf_1_2_mc();
	this.instance_2.setTransform(-100,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},3).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-204,-177.1,347.3,361.2);
p.frameBounds = [rect, new cjs.Rectangle(-164.6,-207.1,320,384.4), new cjs.Rectangle(-215.3,-202.2,344.7,378.7), rect=new cjs.Rectangle(-190,-228,380,368), rect];


(lib.bottom_11_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_11_2_img();
	this.instance.setTransform(-120,-120,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnvFflgQFflfHwgBQHxABFfFfQFfFgAAHvQAAHxlfFfQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect];


(lib.bottom_10_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_10_2_img();
	this.instance.setTransform(-120,-120,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnvFflgQFflfHwgBQHxABFfFfQFfFgAAHvQAAHxlfFfQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect];


(lib.bottom_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_9_2_img();
	this.instance.setTransform(-120,-120,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnvFflgQFflfHwgBQHxABFfFfQFfFgAAHvQAAHxlfFfQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect];


(lib.bottom_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_8_2_img();
	this.instance.setTransform(-120,-120,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnvFflgQFflfHwgBQHxABFfFfQFfFgAAHvQAAHxlfFfQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect];


(lib.bottom_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_7_2_img();
	this.instance.setTransform(-120,-120,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnvFflgQFflfHwgBQHxABFfFfQFfFgAAHvQAAHxlfFfQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect];


(lib.bottom_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_6_2_img();
	this.instance.setTransform(-120,-120,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnvFflgQFflfHwgBQHxABFfFfQFfFgAAHvQAAHxlfFfQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect];


(lib.bottom_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_5_2_img();
	this.instance.setTransform(-120,-120,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnvFflgQFflfHwgBQHxABFfFfQFfFgAAHvQAAHxlfFfQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect];


(lib.bottom_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_4_2_img();
	this.instance.setTransform(-120,-120,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnvFflgQFflfHwgBQHxABFfFfQFfFgAAHvQAAHxlfFfQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect];


(lib.bottom_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_3_2_img();
	this.instance.setTransform(-120,-120,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnvFflgQFflfHwgBQHxABFfFfQFfFgAAHvQAAHxlfFfQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect];


(lib.bottom_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_2_2_img();
	this.instance.setTransform(-120,-120,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnvFflgQFflfHwgBQHxABFfFfQFfFgAAHvQAAHxlfFfQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect];


(lib.bottom_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottom_1_2_img();
	this.instance.setTransform(-120,-120,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnvFflgQFflfHwgBQHxABFfFfQFfFgAAHvQAAHxlfFfQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect];


(lib.bodyDressupPanel_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-189.3,363,359.4);
p.frameBounds = [rect];


(lib.bodyDressupPanel_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-204,-177.1,347.3,361.2);
p.frameBounds = [rect];


(lib.arrow_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arc_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.arrow_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arc_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.arrow_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arc_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.arrow_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arc_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.arrow_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arc_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.arrow_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arc_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.animation2_24_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_btn_2_24_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(24));

	// animation
	this.instance_1 = new lib.forward_mc();
	this.instance_1.setTransform(300,200,0.842,0.842);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({scaleX:0.74,scaleY:0.74,y:160},4).to({regX:0.1,regY:-0.1,scaleX:0.53,scaleY:0.53,x:300.1,y:400},9).wait(11));

	// animation
	this.instance_2 = new lib.hero2_fringe0_mc();
	this.instance_2.setTransform(10.6,-159.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25));

	// animation
	this.instance_3 = new lib.hero2_eyebrows1_mc();
	this.instance_3.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25));

	// animation
	this.instance_4 = new lib.hero2_eyes1_mc();
	this.instance_4.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25));

	// animation
	this.instance_5 = new lib.hero2_lips0_mc();
	this.instance_5.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(25));

	// animation
	this.instance_6 = new lib.hero2_head_mc();
	this.instance_6.setTransform(10.8,-56.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25));

	// animation
	this.instance_7 = new lib.hero2_boby0_mc();
	this.instance_7.setTransform(10.5,260.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(25));

	// animation
	this.instance_8 = new lib.hero2_hair0_mc();
	this.instance_8.setTransform(12,-96.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-268.5,-308.8,648.6,788.8);
p.frameBounds = [rect, new cjs.Rectangle(-268.5,-308.8,648.6,710.8), new cjs.Rectangle(-268.5,-308.8,646.1,710.8), new cjs.Rectangle(-268.5,-308.8,643.6,710.8), new cjs.Rectangle(-268.5,-308.8,641.1,710.8), new cjs.Rectangle(-268.5,-308.8,638.6,710.8), new cjs.Rectangle(-268.5,-308.8,636.3,710.8), new cjs.Rectangle(-268.5,-308.8,634.1,710.8), new cjs.Rectangle(-268.5,-308.8,631.9,710.8), new cjs.Rectangle(-268.5,-308.8,629.7,710.8), new cjs.Rectangle(-268.5,-308.8,627.4,710.8), new cjs.Rectangle(-268.5,-308.8,625.3,710.8), new cjs.Rectangle(-268.5,-308.8,623,710.8), new cjs.Rectangle(-268.5,-308.8,620.8,734.4), rect=new cjs.Rectangle(-268.5,-308.8,618.6,758.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_btn_1_16_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(24));

	// animation
	this.instance_1 = new lib.forward_mc();
	this.instance_1.setTransform(300,200,0.842,0.842);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({scaleX:0.74,scaleY:0.74,y:160},4).to({regX:0.1,regY:-0.1,scaleX:0.53,scaleY:0.53,x:300.1,y:400},11).to({_off:true},1).wait(8));

	// animation
	this.instance_2 = new lib.hero1_fringe0_mc();
	this.instance_2.setTransform(-4,-125.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25));

	// animation
	this.instance_3 = new lib.hero1_eyebrows1_mc();
	this.instance_3.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25));

	// animation
	this.instance_4 = new lib.hero1_eyes0_mc();
	this.instance_4.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25));

	// animation
	this.instance_5 = new lib.hero1_lips0_mc();
	this.instance_5.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(25));

	// animation
	this.instance_6 = new lib.hero1_head_mc();
	this.instance_6.setTransform(-8,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25));

	// animation
	this.instance_7 = new lib.hero1_boby0_mc();
	this.instance_7.setTransform(-10,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(25));

	// animation
	this.instance_8 = new lib.hero1_hair0_mc();
	this.instance_8.setTransform(0,197.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-331,-319.9,691.1,887.4);
p.frameBounds = [rect, new cjs.Rectangle(-331,-319.9,711.1,887.4), new cjs.Rectangle(-331,-319.9,708.6,887.4), new cjs.Rectangle(-331,-319.9,706.1,887.4), new cjs.Rectangle(-331,-319.9,703.6,887.4), new cjs.Rectangle(-331,-319.9,701.1,887.4), new cjs.Rectangle(-331,-319.9,699.3,887.4), new cjs.Rectangle(-331,-319.9,697.4,887.4), new cjs.Rectangle(-331,-319.9,695.6,887.4), new cjs.Rectangle(-331,-319.9,693.8,887.4), new cjs.Rectangle(-331,-319.9,691.9,887.4), new cjs.Rectangle(-331,-319.9,690.2,887.4), new cjs.Rectangle(-331,-319.9,688.3,887.4), new cjs.Rectangle(-331,-319.9,686.5,887.4), new cjs.Rectangle(-331,-319.9,684.7,887.4), new cjs.Rectangle(-331,-319.9,682.9,887.4), new cjs.Rectangle(-331,-319.9,681.1,887.4), rect=new cjs.Rectangle(-331,-319.9,662,887.4), rect, rect, rect, rect, rect, rect, rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-26,-26,52,52);
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
p.nominalBounds = rect = new cjs.Rectangle(-32,-32,64,64);
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


(lib.prev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_mc();
	this.instance.setTransform(0,0,0.9,0.9,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.prev_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_3_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.prev_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_2_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
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
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.animation_circles_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.next_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_0_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AqeKfQkXkWAAmJQAAmJEXkWQEWkWGIAAQGJAAEWEWQEXEWAAGJQAAGJkXEWQkWEXmJAAQmIAAkWkXg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-95,-95,190,190.1)];


(lib.next_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.next_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

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
	this.zh = new lib.language_zh_mc();
	this.zh.setTransform(200,950);

	this.ja = new lib.language_ja_mc();
	this.ja.setTransform(600,1100);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ar},{t:this.de},{t:this.fr},{t:this.hi},{t:this.id},{t:this.it},{t:this.ja},{t:this.zh}]}).wait(1));

	// bg
	this.instance = new lib.languages_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,1165);
p.frameBounds = [rect];


(lib.top_15_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_15_1_img();
	this.instance.setTransform(-130,-121.9,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtzNzQluluAAoFQAAoEFuluQFvluIEgBQIFABFuFuQFuFuABIEQgBIFluFuQluFuoFABQoEgBlvlug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-132,280,264.1);
p.frameBounds = [rect];


(lib.top_14_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_14_1_img();
	this.instance.setTransform(-130,-121.9,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtzNzQluluAAoFQAAoEFuluQFvluIEgBQIFABFuFuQFuFuABIEQgBIFluFuQluFuoFABQoEgBlvlug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-132,280,264.1);
p.frameBounds = [rect];


(lib.top_13_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_13_1_img();
	this.instance.setTransform(-130,-121.8,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtzNzQluluAAoFQAAoEFuluQFvluIEgBQIFABFuFuQFuFuABIEQgBIFluFuQluFuoFABQoEgBlvlug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-132,280,264.1);
p.frameBounds = [rect];


(lib.top_12_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_12_1_img();
	this.instance.setTransform(-130,-122,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtzNzQluluAAoFQAAoEFuluQFvluIEgBQIFABFuFuQFuFuABIEQgBIFluFuQluFuoFABQoEgBlvlug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-132,280,264.1);
p.frameBounds = [rect];


(lib.top_11_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_11_2_img();
	this.instance.setTransform(-120,-120,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnvFflgQFflfHwgBQHxABFfFfQFfFgAAHvQAAHxlfFfQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect];


(lib.top_11_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_11_1_img();
	this.instance.setTransform(-130,-121.9,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtzNzQluluAAoFQAAoEFuluQFvluIEgBQIFABFuFuQFuFuABIEQgBIFluFuQluFuoFABQoEgBlvlug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-132,280,264.1);
p.frameBounds = [rect];


(lib.top_10_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_10_2_img();
	this.instance.setTransform(-120,-120,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnvFflgQFflfHwgBQHxABFfFfQFfFgAAHvQAAHxlfFfQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect];


(lib.top_10_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_10_1_img();
	this.instance.setTransform(-130,-121.8,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtzNzQluluAAoFQAAoEFuluQFvluIEgBQIFABFuFuQFuFuABIEQgBIFluFuQluFuoFABQoEgBlvlug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-132,280,264.1);
p.frameBounds = [rect];


(lib.top_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_9_2_img();
	this.instance.setTransform(-120,-120,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnvFflgQFflfHwgBQHxABFfFfQFfFgAAHvQAAHxlfFfQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect];


(lib.top_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_9_1_img();
	this.instance.setTransform(-130,-121.9,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtzNzQluluAAoFQAAoEFuluQFvluIEgBQIFABFuFuQFuFuABIEQgBIFluFuQluFuoFABQoEgBlvlug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-132,280,264.1);
p.frameBounds = [rect];


(lib.top_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_8_2_img();
	this.instance.setTransform(-120,-120,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnvFflgQFflfHwgBQHxABFfFfQFfFgAAHvQAAHxlfFfQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect];


(lib.top_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_8_1_img();
	this.instance.setTransform(-130,-121.9,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtzNzQluluAAoFQAAoEFuluQFvluIEgBQIFABFuFuQFuFuABIEQgBIFluFuQluFuoFABQoEgBlvlug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-132,280,264.1);
p.frameBounds = [rect];


(lib.top_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_7_2_img();
	this.instance.setTransform(-120,-120,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnvFflgQFflfHwgBQHxABFfFfQFfFgAAHvQAAHxlfFfQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect];


(lib.top_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_7_1_img();
	this.instance.setTransform(-130,-122,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtzNzQluluAAoFQAAoEFuluQFvluIEgBQIFABFuFuQFuFuABIEQgBIFluFuQluFuoFABQoEgBlvlug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-132,280,264.1);
p.frameBounds = [rect];


(lib.top_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_6_2_img();
	this.instance.setTransform(-120,-120,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnvFflgQFflfHwgBQHxABFfFfQFfFgAAHvQAAHxlfFfQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect];


(lib.top_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_6_1_img();
	this.instance.setTransform(-130,-121.9,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtzNzQluluAAoFQAAoEFuluQFvluIEgBQIFABFuFuQFuFuABIEQgBIFluFuQluFuoFABQoEgBlvlug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-132,280,264.1);
p.frameBounds = [rect];


(lib.top_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_5_2_img();
	this.instance.setTransform(-120,-120,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnvFflgQFflfHwgBQHxABFfFfQFfFgAAHvQAAHxlfFfQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect];


(lib.top_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_5_1_img();
	this.instance.setTransform(-130,-121.9,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtzNzQluluAAoFQAAoEFuluQFvluIEgBQIFABFuFuQFuFuABIEQgBIFluFuQluFuoFABQoEgBlvlug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-132,280,264.1);
p.frameBounds = [rect];


(lib.top_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_4_2_img();
	this.instance.setTransform(-120,-120,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnvFflgQFflfHwgBQHxABFfFfQFfFgAAHvQAAHxlfFfQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect];


(lib.top_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_4_1_img();
	this.instance.setTransform(-130,-121.8,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtzNzQluluAAoFQAAoEFuluQFvluIEgBQIFABFuFuQFuFuABIEQgBIFluFuQluFuoFABQoEgBlvlug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-132,280,264.1);
p.frameBounds = [rect];


(lib.top_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_3_2_img();
	this.instance.setTransform(-120,-120,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnvFflgQFflfHwgBQHxABFfFfQFfFgAAHvQAAHxlfFfQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect];


(lib.top_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_3_1_img();
	this.instance.setTransform(-130,-121.9,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtzNzQluluAAoFQAAoEFuluQFvluIEgBQIFABFuFuQFuFuABIEQgBIFluFuQluFuoFABQoEgBlvlug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-132,280,264.1);
p.frameBounds = [rect];


(lib.top_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_2_2_img();
	this.instance.setTransform(-120,-120,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnvFflgQFflfHwgBQHxABFfFfQFfFgAAHvQAAHxlfFfQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect];


(lib.top_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_2_1_img();
	this.instance.setTransform(-130,-121.9,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtzNzQluluAAoFQAAoEFuluQFvluIEgBQIFABFuFuQFuFuABIEQgBIFluFuQluFuoFABQoEgBlvlug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-132,280,264.1);
p.frameBounds = [rect];


(lib.top_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_1_2_img();
	this.instance.setTransform(-120,-120,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnvFflgQFflfHwgBQHxABFfFfQFfFgAAHvQAAHxlfFfQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect];


(lib.top_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_1_1_img();
	this.instance.setTransform(-130,-122,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtzNzQluluAAoFQAAoEFuluQFvluIEgBQIFABFuFuQFuFuABIEQgBIFluFuQluFuoFABQoEgBlvlug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-132,280,264.1);
p.frameBounds = [rect];


(lib.shadows_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shadow_new3_img();
	this.instance.setTransform(-56,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkXgBmIQABmHEVkYQEYkVGHgBQGJABEWEVQEXEYAAGHQAAGIkXEXQkWEXmJAAQmHAAkYkXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.shadows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shadow_new3_img();
	this.instance.setTransform(-56,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkWgBmJQABmIEVkWQEXkXGIAAQGJAAEWEXQEXEWAAGIQAAGJkXEWQkWEWmJAAQmIAAkXkWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.shadows_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shadow_new8_img();
	this.instance.setTransform(-56,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkXgBmIQABmHEVkYQEYkVGHgBQGJABEWEVQEXEYAAGHQAAGIkXEXQkWEXmJAAQmHAAkYkXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.shadows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shadow_new15_img();
	this.instance.setTransform(-56,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkWgBmJQABmIEVkWQEXkXGIAAQGJAAEWEXQEXEWAAGIQAAGJkXEWQkWEWmJAAQmIAAkXkWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.shadows_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shadow_new55_img();
	this.instance.setTransform(-56,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkXgBmIQABmHEVkYQEYkVGHgBQGJABEWEVQEXEYAAGHQAAGIkXEXQkWEXmJAAQmHAAkYkXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.shadows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shadow_new30_img();
	this.instance.setTransform(-56,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkWgBmJQABmIEVkWQEXkXGIAAQGJAAEWEXQEXEWAAGIQAAGJkXEWQkWEWmJAAQmIAAkXkWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.shadows_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shadow_new16_img();
	this.instance.setTransform(-56,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkXgBmIQABmHEVkYQEYkVGHgBQGJABEWEVQEXEYAAGHQAAGIkXEXQkWEXmJAAQmHAAkYkXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.shadows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shadow_new32_img();
	this.instance.setTransform(-56,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkWgBmJQABmIEVkWQEXkXGIAAQGJAAEWEXQEXEWAAGIQAAGJkXEWQkWEWmJAAQmIAAkXkWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.shadows_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shadow_new54_img();
	this.instance.setTransform(-56,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkXgBmIQABmHEVkYQEYkVGHgBQGJABEWEVQEXEYAAGHQAAGIkXEXQkWEXmJAAQmHAAkYkXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.shadows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shadow_new23_img();
	this.instance.setTransform(-56,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkWgBmJQABmIEVkWQEXkXGIAAQGJAAEWEXQEXEWAAGIQAAGJkXEWQkWEWmJAAQmIAAkXkWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.shadows_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shadow_new32_img();
	this.instance.setTransform(-56,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkXgBmIQABmHEVkYQEYkVGHgBQGJABEWEVQEXEYAAGHQAAGIkXEXQkWEXmJAAQmHAAkYkXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.shadows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.shadow_new6_img();
	this.instance.setTransform(-56,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkWgBmJQABmIEVkWQEXkXGIAAQGJAAEWEXQEXEWAAGIQAAGJkXEWQkWEWmJAAQmIAAkXkWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
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
p.nominalBounds = rect = new cjs.Rectangle(-400,-6.2,1600,675.9);
p.frameBounds = [rect];


(lib.lips_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.lipstick_new23_img();
	this.instance.setTransform(-25.4,-43.1,1,1,0,-45,135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkXgBmIQABmHEVkYQEYkVGHgBQGJABEWEVQEXEYAAGHQAAGIkXEXQkWEXmJAAQmHAAkYkXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.lips_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.lipstick_new26_img();
	this.instance.setTransform(-13,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkWgBmJQABmIEVkWQEXkXGIAAQGJAAEWEXQEXEWAAGIQAAGJkXEWQkWEWmJAAQmIAAkXkWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.lips_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.lipstick_new44_img();
	this.instance.setTransform(-25.4,-43.1,1,1,0,-45,135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkXgBmIQABmHEVkYQEYkVGHgBQGJABEWEVQEXEYAAGHQAAGIkXEXQkWEXmJAAQmHAAkYkXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.lips_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.lipstick_new5_img();
	this.instance.setTransform(-13,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkWgBmJQABmIEVkWQEXkXGIAAQGJAAEWEXQEXEWAAGIQAAGJkXEWQkWEWmJAAQmIAAkXkWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.lips_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.lipstick_new37_img();
	this.instance.setTransform(-25.4,-43.1,1,1,0,-45,135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkXgBmIQABmHEVkYQEYkVGHgBQGJABEWEVQEXEYAAGHQAAGIkXEXQkWEXmJAAQmHAAkYkXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.lips_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.lipstick_new23_img();
	this.instance.setTransform(-13,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkWgBmJQABmIEVkWQEXkXGIAAQGJAAEWEXQEXEWAAGIQAAGJkXEWQkWEWmJAAQmIAAkXkWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.lips_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.lipstick_new39_img();
	this.instance.setTransform(25.4,-43.1,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkXgBmIQABmHEVkYQEYkVGHgBQGJABEWEVQEXEYAAGHQAAGIkXEXQkWEXmJAAQmHAAkYkXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.lips_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.lipstick_new10_img();
	this.instance.setTransform(-13,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkWgBmJQABmIEVkWQEXkXGIAAQGJAAEWEXQEXEWAAGIQAAGJkXEWQkWEWmJAAQmIAAkXkWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.lips_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.lipstick_new11_img();
	this.instance.setTransform(25.4,-43.1,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkXgBmIQABmHEVkYQEYkVGHgBQGJABEWEVQEXEYAAGHQAAGIkXEXQkWEXmJAAQmHAAkYkXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.lips_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.lipstick_new39_img();
	this.instance.setTransform(-13,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkWgBmJQABmIEVkWQEXkXGIAAQGJAAEWEXQEXEWAAGIQAAGJkXEWQkWEWmJAAQmIAAkXkWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.lips_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.lipstick_new9_img();
	this.instance.setTransform(25.4,-43.1,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkXgBmIQABmHEVkYQEYkVGHgBQGJABEWEVQEXEYAAGHQAAGIkXEXQkWEXmJAAQmHAAkYkXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.lips_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.lipstick_new9_img();
	this.instance.setTransform(-13,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkWgBmJQABmIEVkWQEXkXGIAAQGJAAEWEXQEXEWAAGIQAAGJkXEWQkWEWmJAAQmIAAkXkWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


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


(lib.hairstyle_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_9_2_img();
	this.instance.setTransform(-120,-120,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnvFflgQFflfHwgBQHxABFfFfQFfFgAAHvQAAHxlfFfQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect];


(lib.hairstyle_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_9_1_img();
	this.instance.setTransform(-130,-122,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtzNzQluluAAoFQAAoEFuluQFvluIEgBQIFABFuFuQFuFuABIEQgBIFluFuQluFuoFABQoEgBlvlug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-132,280,264.1);
p.frameBounds = [rect];


(lib.hairstyle_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_8_2_img();
	this.instance.setTransform(-120,-120,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnvFflgQFflfHwgBQHxABFfFfQFfFgAAHvQAAHxlfFfQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect];


(lib.hairstyle_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_8_1_img();
	this.instance.setTransform(-130,-122,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtzNzQluluAAoFQAAoEFuluQFvluIEgBQIFABFuFuQFuFuABIEQgBIFluFuQluFuoFABQoEgBlvlug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-132,280,264.1);
p.frameBounds = [rect];


(lib.hairstyle_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_7_2_img();
	this.instance.setTransform(-120,-120,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnvFflgQFflfHwgBQHxABFfFfQFfFgAAHvQAAHxlfFfQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect];


(lib.hairstyle_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_7_1_img();
	this.instance.setTransform(-130,-122,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtzNzQluluAAoFQAAoEFuluQFvluIEgBQIFABFuFuQFuFuABIEQgBIFluFuQluFuoFABQoEgBlvlug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-132,280,264.1);
p.frameBounds = [rect];


(lib.hairstyle_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_6_2_img();
	this.instance.setTransform(-120,-120,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnvFflgQFflfHwgBQHxABFfFfQFfFgAAHvQAAHxlfFfQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect];


(lib.hairstyle_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_6_1_img();
	this.instance.setTransform(-130,-122,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtzNzQluluAAoFQAAoEFuluQFvluIEgBQIFABFuFuQFuFuABIEQgBIFluFuQluFuoFABQoEgBlvlug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-132,280,264.1);
p.frameBounds = [rect];


(lib.hairstyle_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_5_2_img();
	this.instance.setTransform(-120,-120,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnwFflfQFflfHwAAQHxAAFfFfQFfFfAAHwQAAHxlfFfQlfFfnxAAQnwAAlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect];


(lib.hairstyle_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_5_1_img();
	this.instance.setTransform(-130,-122,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtzNzQluluAAoFQAAoEFuluQFvluIEgBQIFABFuFuQFuFuABIEQgBIFluFuQluFuoFABQoEgBlvlug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-132,280,264.1);
p.frameBounds = [rect];


(lib.hairstyle_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_4_2_img();
	this.instance.setTransform(-120,-120,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnwFflfQFflfHwAAQHxAAFfFfQFfFfAAHwQAAHxlfFfQlfFfnxAAQnwAAlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect];


(lib.hairstyle_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_4_1_img();
	this.instance.setTransform(-130,-122,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtzNzQluluAAoFQAAoEFuluQFvluIEgBQIFABFuFuQFuFuABIEQgBIFluFuQluFuoFABQoEgBlvlug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-132,280,264.1);
p.frameBounds = [rect];


(lib.hairstyle_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_3_2_img();
	this.instance.setTransform(-120,-120,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnvFflgQFflfHwgBQHxABFfFfQFfFgAAHvQAAHxlfFfQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect];


(lib.hairstyle_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_3_1_img();
	this.instance.setTransform(-130,-122,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtzNzQluluAAoFQAAoEFuluQFvluIEgBQIFABFuFuQFuFuABIEQgBIFluFuQluFuoFABQoEgBlvlug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-132,280,264.1);
p.frameBounds = [rect];


(lib.hairstyle_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_2_2_img();
	this.instance.setTransform(-120,-120,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnwFflfQFflfHwAAQHxAAFfFfQFfFfAAHwQAAHxlfFfQlfFfnxAAQnwAAlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect];


(lib.hairstyle_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_2_1_img();
	this.instance.setTransform(-130,-122,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtzNzQluluAAoFQAAoEFuluQFvluIEgBQIFABFuFuQFuFuABIEQgBIFluFuQluFuoFABQoEgBlvlug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-132,280,264.1);
p.frameBounds = [rect];


(lib.hairstyle_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_1_2_img();
	this.instance.setTransform(-120,-120,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnvFflgQFflfHwgBQHxABFfFfQFfFgAAHvQAAHxlfFfQlfFfnxABQnwgBlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,-128,256,256);
p.frameBounds = [rect];


(lib.hairstyle_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_1_1_img();
	this.instance.setTransform(-130,-122,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtzNzQluluAAoFQAAoEFuluQFvluIEgBQIFABFuFuQFuFuABIEQgBIFluFuQluFuoFABQoEgBlvlug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-132,280,264.1);
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


(lib.eyes_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.lens30_img();
	this.instance.setTransform(-50,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.lens11_img();
	this.instance_1.setTransform(-10,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkXgBmIQABmHEVkYQEYkVGHgBQGJABEWEVQEXEYAAGHQAAGIkXEXQkWEXmJAAQmHAAkYkXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.eyes_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.lens13_img();
	this.instance.setTransform(-30,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkWgBmJQABmIEVkWQEXkXGIAAQGJAAEWEXQEXEWAAGIQAAGJkXEWQkWEWmJAAQmIAAkXkWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.eyes_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.lens11_img();
	this.instance.setTransform(-50,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.lens12_img();
	this.instance_1.setTransform(-10,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkXgBmIQABmHEVkYQEYkVGHgBQGJABEWEVQEXEYAAGHQAAGIkXEXQkWEXmJAAQmHAAkYkXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.eyes_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.lens12_img();
	this.instance.setTransform(-30,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkWgBmJQABmIEVkWQEXkXGIAAQGJAAEWEXQEXEWAAGIQAAGJkXEWQkWEWmJAAQmIAAkXkWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.eyes_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.lens21_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkXgBmIQABmHEVkYQEYkVGHgBQGJABEWEVQEXEYAAGHQAAGIkXEXQkWEXmJAAQmHAAkYkXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.eyes_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.lens22_img();
	this.instance.setTransform(-30,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkWgBmJQABmIEVkWQEXkXGIAAQGJAAEWEXQEXEWAAGIQAAGJkXEWQkWEWmJAAQmIAAkXkWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.eyes_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.lens13_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkXgBmIQABmHEVkYQEYkVGHgBQGJABEWEVQEXEYAAGHQAAGIkXEXQkWEXmJAAQmHAAkYkXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.eyes_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.lens21_img();
	this.instance.setTransform(-30,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkWgBmJQABmIEVkWQEXkXGIAAQGJAAEWEXQEXEWAAGIQAAGJkXEWQkWEWmJAAQmIAAkXkWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.eyes_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.lens10_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkXgBmIQABmHEVkYQEYkVGHgBQGJABEWEVQEXEYAAGHQAAGIkXEXQkWEXmJAAQmHAAkYkXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.eyes_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.lens30_img();
	this.instance.setTransform(-30,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkWgBmJQABmIEVkWQEXkXGIAAQGJAAEWEXQEXEWAAGIQAAGJkXEWQkWEWmJAAQmIAAkXkWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.eyes_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.lens19_img();
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkXgBmIQABmHEVkYQEYkVGHgBQGJABEWEVQEXEYAAGHQAAGIkXEXQkWEXmJAAQmHAAkYkXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.eyes_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.lens19_img();
	this.instance.setTransform(-30,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkWgBmJQABmIEVkWQEXkXGIAAQGJAAEWEXQEXEWAAGIQAAGJkXEWQkWEWmJAAQmIAAkXkWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.eyebrows_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyebrows_6_2_img();
	this.instance.setTransform(-32,-46.8,1,1,0,-45,135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkXgBmIQABmHEVkYQEYkVGHgBQGJABEWEVQEXEYAAGHQAAGIkXEXQkWEXmJAAQmHAAkYkXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.eyebrows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyebrows_6_1_img();
	this.instance.setTransform(-11,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkWgBmJQABmIEVkWQEXkXGIAAQGJAAEWEXQEXEWAAGIQAAGJkXEWQkWEWmJAAQmIAAkXkWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.eyebrows_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyebrows_5_2_img();
	this.instance.setTransform(-32,-46.8,1,1,0,-45,135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkXgBmIQABmHEVkYQEYkVGHgBQGJABEWEVQEXEYAAGHQAAGIkXEXQkWEXmJAAQmHAAkYkXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.eyebrows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyebrows_5_1_img();
	this.instance.setTransform(-11,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkWgBmJQABmIEVkWQEXkXGIAAQGJAAEWEXQEXEWAAGIQAAGJkXEWQkWEWmJAAQmIAAkXkWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.eyebrows_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyebrows_4_2_img();
	this.instance.setTransform(-32,-46.8,1,1,0,-45,135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkXgBmIQABmHEVkYQEYkVGHgBQGJABEWEVQEXEYAAGHQAAGIkXEXQkWEXmJAAQmHAAkYkXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.eyebrows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyebrows_4_1_img();
	this.instance.setTransform(-11,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkWgBmJQABmIEVkWQEXkXGIAAQGJAAEWEXQEXEWAAGIQAAGJkXEWQkWEWmJAAQmIAAkXkWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.eyebrows_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyebrows_3_2_img();
	this.instance.setTransform(32,-46.8,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkXgBmIQABmHEVkYQEYkVGHgBQGJABEWEVQEXEYAAGHQAAGIkXEXQkWEXmJAAQmHAAkYkXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.eyebrows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyebrows_3_1_img();
	this.instance.setTransform(-11,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkWgBmJQABmIEVkWQEXkXGIAAQGJAAEWEXQEXEWAAGIQAAGJkXEWQkWEWmJAAQmIAAkXkWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.eyebrows_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyebrows_2_2_img();
	this.instance.setTransform(32,-46.8,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkXgBmIQABmHEVkYQEYkVGHgBQGJABEWEVQEXEYAAGHQAAGIkXEXQkWEXmJAAQmHAAkYkXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.eyebrows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyebrows_2_1_img();
	this.instance.setTransform(-11,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkWgBmJQABmIEVkWQEXkXGIAAQGJAAEWEXQEXEWAAGIQAAGJkXEWQkWEWmJAAQmIAAkXkWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.eyebrows_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyebrows_1_2_img();
	this.instance.setTransform(32,-46.8,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkXgBmIQABmHEVkYQEYkVGHgBQGJABEWEVQEXEYAAGHQAAGIkXEXQkWEXmJAAQmHAAkYkXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.eyebrows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.eyebrows_1_1_img();
	this.instance.setTransform(-11,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkWgBmJQABmIEVkWQEXkXGIAAQGJAAEWEXQEXEWAAGIQAAGJkXEWQkWEWmJAAQmIAAkXkWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.dressupPanel_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-180.1,100,1,1,-20,0,0,-0.1,-0.1);

	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(180.2,100,1,1,20,0,0,0.1,-0.1);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-282.5,-240,565,890);
p.frameBounds = [rect];


(lib.dressupPanel_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-180,80);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(180,80);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-260,520,910);
p.frameBounds = [rect];


(lib.decor_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(650,215);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(137,426);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(436,526);

	this.instance_3 = new lib.blinking_light_3_2_mc();
	this.instance_3.setTransform(275,414);

	this.instance_4 = new lib.blinking_light_3_2_mc();
	this.instance_4.setTransform(679,426);

	this.instance_5 = new lib.blinking_light_3_2_mc();
	this.instance_5.setTransform(542,414);

	this.instance_6 = new lib.blinking_light_3_2_mc();
	this.instance_6.setTransform(510,60);

	this.instance_7 = new lib.blinking_light_3_2_mc();
	this.instance_7.setTransform(200,325);

	this.instance_8 = new lib.blinking_light_3_2_mc();
	this.instance_8.setTransform(590,320);

	this.instance_9 = new lib.blinking_light_3_2_mc();
	this.instance_9.setTransform(255,87);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(113,36,590,514);
p.frameBounds = [rect];


(lib.decor_shadow_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(390,364);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(538,20);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(339,565);

	this.instance_3 = new lib.blinking_light_3_2_mc();
	this.instance_3.setTransform(518,500);

	this.instance_4 = new lib.blinking_light_3_2_mc();
	this.instance_4.setTransform(183,282);

	this.instance_5 = new lib.blinking_light_3_2_mc();
	this.instance_5.setTransform(626,282);

	this.instance_6 = new lib.blinking_light_3_2_mc();
	this.instance_6.setTransform(672,329);

	this.instance_7 = new lib.blinking_light_3_2_mc();
	this.instance_7.setTransform(500,106);

	this.instance_8 = new lib.blinking_light_3_2_mc();
	this.instance_8.setTransform(179,196);

	this.instance_9 = new lib.blinking_light_3_2_mc();
	this.instance_9.setTransform(644,85);

	this.instance_10 = new lib.blinking_light_3_2_mc();
	this.instance_10.setTransform(270,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(155,-4,541,593);
p.frameBounds = [rect];


(lib.closet_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.hair_3 = new lib.hairstyle_3_2_mc();
	this.hair_3.setTransform(0,90);

	this.hair_9 = new lib.hairstyle_9_2_mc();
	this.hair_9.setTransform(115,-110);

	this.hair_8 = new lib.hairstyle_8_2_mc();
	this.hair_8.setTransform(-115,-110);

	this.hair_6 = new lib.hairstyle_6_2_mc();
	this.hair_6.setTransform(0,90);

	this.hair_5 = new lib.hairstyle_5_2_mc();
	this.hair_5.setTransform(115,-110);

	this.hair_4 = new lib.hairstyle_4_2_mc();
	this.hair_4.setTransform(-115,-110);

	this.hair_1 = new lib.hairstyle_1_2_mc();
	this.hair_1.setTransform(0,90);

	this.hair_2 = new lib.hairstyle_2_2_mc();
	this.hair_2.setTransform(-115,-110);

	this.hair_7 = new lib.hairstyle_7_2_mc();
	this.hair_7.setTransform(115,-110);

	this.top_10 = new lib.top_10_2_mc();
	this.top_10.setTransform(-115,-110);

	this.top_3 = new lib.top_3_2_mc();
	this.top_3.setTransform(0,90);

	this.top_2 = new lib.top_2_2_mc();
	this.top_2.setTransform(115,-110);

	this.top_6 = new lib.top_6_2_mc();
	this.top_6.setTransform(0,90);

	this.top_5 = new lib.top_5_2_mc();
	this.top_5.setTransform(115,-110);

	this.top_4 = new lib.top_4_2_mc();
	this.top_4.setTransform(-115,-110);

	this.top_9 = new lib.top_9_2_mc();
	this.top_9.setTransform(0,90);

	this.top_8 = new lib.top_8_2_mc();
	this.top_8.setTransform(115,-110);

	this.top_7 = new lib.top_7_2_mc();
	this.top_7.setTransform(-115,-110);

	this.top_1 = new lib.top_1_2_mc();
	this.top_1.setTransform(0,-135);

	this.top_11 = new lib.top_11_2_mc();
	this.top_11.setTransform(0,90);

	this.bottom_10 = new lib.bottom_10_2_mc();
	this.bottom_10.setTransform(-115,-110);

	this.bottom_3 = new lib.bottom_3_2_mc();
	this.bottom_3.setTransform(0,90);

	this.bottom_2 = new lib.bottom_2_2_mc();
	this.bottom_2.setTransform(115,-110);

	this.bottom_6 = new lib.bottom_6_2_mc();
	this.bottom_6.setTransform(0,90);

	this.bottom_5 = new lib.bottom_5_2_mc();
	this.bottom_5.setTransform(115,-110);

	this.bottom_4 = new lib.bottom_4_2_mc();
	this.bottom_4.setTransform(-115,-110);

	this.bottom_9 = new lib.bottom_9_2_mc();
	this.bottom_9.setTransform(0,90);

	this.bottom_8 = new lib.bottom_8_2_mc();
	this.bottom_8.setTransform(115,-110);

	this.bottom_7 = new lib.bottom_7_2_mc();
	this.bottom_7.setTransform(-115,-110);

	this.bottom_11 = new lib.bottom_11_2_mc();
	this.bottom_11.setTransform(0,-135);

	this.bottom_1 = new lib.bottom_1_2_mc();
	this.bottom_1.setTransform(0,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_8},{t:this.hair_9},{t:this.hair_3}]}).to({state:[{t:this.hair_4},{t:this.hair_5},{t:this.hair_6}]},1).to({state:[{t:this.hair_7},{t:this.hair_2},{t:this.hair_1}]},1).to({state:[{t:this.top_2},{t:this.top_3},{t:this.top_10}]},1).to({state:[{t:this.top_4},{t:this.top_5},{t:this.top_6}]},1).to({state:[{t:this.top_7},{t:this.top_8},{t:this.top_9}]},1).to({state:[{t:this.top_11},{t:this.top_1}]},1).to({state:[{t:this.bottom_2},{t:this.bottom_3},{t:this.bottom_10}]},1).to({state:[{t:this.bottom_4},{t:this.bottom_5},{t:this.bottom_6}]},1).to({state:[{t:this.bottom_7},{t:this.bottom_8},{t:this.bottom_9}]},1).to({state:[{t:this.bottom_1},{t:this.bottom_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-243,-238,486,456);
p.frameBounds = [rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-128,-263,256,481), rect=new cjs.Rectangle(-243,-238,486,456), rect, rect, new cjs.Rectangle(-128,-263,256,481)];


(lib.closet_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.hair_3 = new lib.hairstyle_3_1_mc();
	this.hair_3.setTransform(0,60);

	this.hair_4 = new lib.hairstyle_4_1_mc();
	this.hair_4.setTransform(130,-140);

	this.hair_8 = new lib.hairstyle_8_1_mc();
	this.hair_8.setTransform(-130,-140);

	this.hair_6 = new lib.hairstyle_6_1_mc();
	this.hair_6.setTransform(0,60);

	this.hair_5 = new lib.hairstyle_5_1_mc();
	this.hair_5.setTransform(130,-140);

	this.hair_2 = new lib.hairstyle_2_1_mc();
	this.hair_2.setTransform(-130,-140);

	this.hair_9 = new lib.hairstyle_9_1_mc();
	this.hair_9.setTransform(0,60);

	this.hair_1 = new lib.hairstyle_1_1_mc();
	this.hair_1.setTransform(130,-140);

	this.hair_7 = new lib.hairstyle_7_1_mc();
	this.hair_7.setTransform(-130,-140);

	this.top_4 = new lib.top_4_1_mc();
	this.top_4.setTransform(0,60);

	this.top_3 = new lib.top_3_1_mc();
	this.top_3.setTransform(130,-140);

	this.top_2 = new lib.top_2_1_mc();
	this.top_2.setTransform(-130,-140);

	this.top_7 = new lib.top_7_1_mc();
	this.top_7.setTransform(0,60);

	this.top_6 = new lib.top_6_1_mc();
	this.top_6.setTransform(130,-140);

	this.top_5 = new lib.top_5_1_mc();
	this.top_5.setTransform(-130,-140);

	this.top_10 = new lib.top_10_1_mc();
	this.top_10.setTransform(0,60);

	this.top_9 = new lib.top_9_1_mc();
	this.top_9.setTransform(130,-140);

	this.top_8 = new lib.top_8_1_mc();
	this.top_8.setTransform(-130,-140);

	this.top_13 = new lib.top_13_1_mc();
	this.top_13.setTransform(0,60);

	this.top_12 = new lib.top_12_1_mc();
	this.top_12.setTransform(130,-140);

	this.top_11 = new lib.top_11_1_mc();
	this.top_11.setTransform(-130,-140);

	this.top_1 = new lib.top_1_1_mc();
	this.top_1.setTransform(0,60);

	this.top_15 = new lib.top_15_1_mc();
	this.top_15.setTransform(130,-140);

	this.top_14 = new lib.top_14_1_mc();
	this.top_14.setTransform(-130,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_8},{t:this.hair_4},{t:this.hair_3}]}).to({state:[{t:this.hair_2},{t:this.hair_5},{t:this.hair_6}]},1).to({state:[{t:this.hair_7},{t:this.hair_1},{t:this.hair_9}]},1).to({state:[{t:this.top_2},{t:this.top_3},{t:this.top_4}]},1).to({state:[{t:this.top_5},{t:this.top_6},{t:this.top_7}]},1).to({state:[{t:this.top_8},{t:this.top_9},{t:this.top_10}]},1).to({state:[{t:this.top_11},{t:this.top_12},{t:this.top_13}]},1).to({state:[{t:this.top_14},{t:this.top_15},{t:this.top_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-272,540,464.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect];


(lib.closet_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.lips_0 = new lib.lips_0_mc();
	this.lips_0.setTransform(350,-160);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(350,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lips_0}]}).to({state:[{t:this.shadows_0}]},1).to({state:[]},1).wait(2));

	// options
	this.lips_6 = new lib.lips_6_2_mc();
	this.lips_6.setTransform(170,190);

	this.lips_5 = new lib.lips_5_2_mc();
	this.lips_5.setTransform(280,30);

	this.lips_4 = new lib.lips_4_2_mc();
	this.lips_4.setTransform(270,-160);

	this.lips_3 = new lib.lips_3_2_mc();
	this.lips_3.setTransform(-170,190);

	this.lips_2 = new lib.lips_2_2_mc();
	this.lips_2.setTransform(-280,30);

	this.lips_1 = new lib.lips_1_2_mc();
	this.lips_1.setTransform(-270,-160);

	this.shadows_6 = new lib.shadows_6_2_mc();
	this.shadows_6.setTransform(170,190);

	this.shadows_5 = new lib.shadows_5_2_mc();
	this.shadows_5.setTransform(280,30);

	this.shadows_4 = new lib.shadows_4_2_mc();
	this.shadows_4.setTransform(270,-160);

	this.shadows_3 = new lib.shadows_3_2_mc();
	this.shadows_3.setTransform(-170,190);

	this.shadows_2 = new lib.shadows_2_2_mc();
	this.shadows_2.setTransform(-280,30);

	this.shadows_1 = new lib.shadows_1_2_mc();
	this.shadows_1.setTransform(-270,-160);

	this.eyes_6 = new lib.eyes_6_2_mc();
	this.eyes_6.setTransform(-280,30);

	this.eyes_5 = new lib.eyes_5_2_mc();
	this.eyes_5.setTransform(280,30);

	this.eyes_4 = new lib.eyes_4_2_mc();
	this.eyes_4.setTransform(170,190);

	this.eyes_3 = new lib.eyes_3_2_mc();
	this.eyes_3.setTransform(-170,190);

	this.eyes_2 = new lib.eyes_2_2_mc();
	this.eyes_2.setTransform(270,-160);

	this.eyes_1 = new lib.eyes_1_2_mc();
	this.eyes_1.setTransform(-270,-160);

	this.eyebrows_6 = new lib.eyebrows_6_2_mc();
	this.eyebrows_6.setTransform(280,30);

	this.eyebrows_5 = new lib.eyebrows_5_2_mc();
	this.eyebrows_5.setTransform(170,190);

	this.eyebrows_4 = new lib.eyebrows_4_2_mc();
	this.eyebrows_4.setTransform(270,-160);

	this.eyebrows_3 = new lib.eyebrows_3_2_mc();
	this.eyebrows_3.setTransform(-170,190);

	this.eyebrows_2 = new lib.eyebrows_2_2_mc();
	this.eyebrows_2.setTransform(-280,30);

	this.eyebrows_1 = new lib.eyebrows_1_2_mc();
	this.eyebrows_1.setTransform(-270,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]}).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.eyes_1},{t:this.eyes_2},{t:this.eyes_3},{t:this.eyes_4},{t:this.eyes_5},{t:this.eyes_6}]},1).to({state:[{t:this.eyebrows_1},{t:this.eyebrows_2},{t:this.eyebrows_3},{t:this.eyebrows_4},{t:this.eyebrows_5},{t:this.eyebrows_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-375,-255,753,540);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-375,-255,750,540), rect];


(lib.closet_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.lips_0 = new lib.lips_0_mc();
	this.lips_0.setTransform(340,-35);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(340,-35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lips_0}]}).to({state:[{t:this.shadows_0}]},1).to({state:[]},1).wait(2));

	// options
	this.lips_6 = new lib.lips_6_1_mc();
	this.lips_6.setTransform(170,190);

	this.lips_5 = new lib.lips_5_1_mc();
	this.lips_5.setTransform(290,30);

	this.lips_4 = new lib.lips_4_1_mc();
	this.lips_4.setTransform(280,-160);

	this.lips_3 = new lib.lips_3_1_mc();
	this.lips_3.setTransform(-170,190);

	this.lips_2 = new lib.lips_2_1_mc();
	this.lips_2.setTransform(-290,30);

	this.lips_1 = new lib.lips_1_1_mc();
	this.lips_1.setTransform(-280,-160);

	this.shadows_6 = new lib.shadows_6_1_mc();
	this.shadows_6.setTransform(170,190);

	this.shadows_5 = new lib.shadows_5_1_mc();
	this.shadows_5.setTransform(290,30);

	this.shadows_4 = new lib.shadows_4_1_mc();
	this.shadows_4.setTransform(280,-160);

	this.shadows_3 = new lib.shadows_3_1_mc();
	this.shadows_3.setTransform(-170,190);

	this.shadows_2 = new lib.shadows_2_1_mc();
	this.shadows_2.setTransform(-290,30);

	this.shadows_1 = new lib.shadows_1_1_mc();
	this.shadows_1.setTransform(-280,-160);

	this.eyes_6 = new lib.eyes_6_1_mc();
	this.eyes_6.setTransform(170,190);

	this.eyes_5 = new lib.eyes_5_1_mc();
	this.eyes_5.setTransform(290,30);

	this.eyes_4 = new lib.eyes_4_1_mc();
	this.eyes_4.setTransform(280,-160);

	this.eyes_3 = new lib.eyes_3_1_mc();
	this.eyes_3.setTransform(-170,190);

	this.eyes_2 = new lib.eyes_2_1_mc();
	this.eyes_2.setTransform(-290,30);

	this.eyes_1 = new lib.eyes_1_1_mc();
	this.eyes_1.setTransform(-280,-160);

	this.eyebrows_6 = new lib.eyebrows_6_1_mc();
	this.eyebrows_6.setTransform(170,190);

	this.eyebrows_5 = new lib.eyebrows_5_1_mc();
	this.eyebrows_5.setTransform(290,30);

	this.eyebrows_4 = new lib.eyebrows_4_1_mc();
	this.eyebrows_4.setTransform(280,-160);

	this.eyebrows_3 = new lib.eyebrows_3_1_mc();
	this.eyebrows_3.setTransform(-170,190);

	this.eyebrows_2 = new lib.eyebrows_2_1_mc();
	this.eyebrows_2.setTransform(-290,30);

	this.eyebrows_1 = new lib.eyebrows_1_1_mc();
	this.eyebrows_1.setTransform(-280,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]}).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.eyes_1},{t:this.eyes_2},{t:this.eyes_3},{t:this.eyes_4},{t:this.eyes_5},{t:this.eyes_6}]},1).to({state:[{t:this.eyebrows_1},{t:this.eyebrows_2},{t:this.eyebrows_3},{t:this.eyebrows_4},{t:this.eyebrows_5},{t:this.eyebrows_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-385,-255,770,540);
p.frameBounds = [rect, rect, rect, rect];


(lib.bodyDressupPanel_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-243,-238,486,456);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-272,540,464.1);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-375,-255,753,540);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-385,-255,770,540);
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
p.nominalBounds = rect = new cjs.Rectangle(-19.2,-19.2,38.4,38.4);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// filters
	this.filters_animation_mc = new lib.filters_animation_mc();
	this.filters_animation_mc.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.filters_animation_mc).wait(1));

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(445,540);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(355,540);

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
	this.instance.alpha = 0.199;
	this.instance.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_mc();

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-319.9,1600,1780);
p.frameBounds = [rect];


(lib.quest_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(520,-100);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(380,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1,p:{rotation:0,x:380,y:-100,regX:0,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:0}},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1,p:{rotation:0,x:380,y:-100,regX:0,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:15,x:125,y:475,regX:0,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:380,y:-100,regX:0,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:300.1,y:85.1,regX:-0.1,scaleX:0.899,scaleY:0.899,skewX:60,skewY:-120,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:-44.9,x:475.1,y:75.1,regX:0,scaleX:0.898,scaleY:0.898,skewX:0,skewY:0,regY:0.1}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:600,y:195,regX:0,scaleX:0.898,scaleY:0.898,skewX:-44.9,skewY:135.1,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:90,x:127,y:355,regX:0,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:380,y:-100,regX:0,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:30,x:295,y:435,regX:0,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:380,y:-100,regX:0,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:30,x:575.1,y:410.1,regX:0.1,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:380,y:-100,regX:0,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:380,y:-100,regX:0,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:380,y:-100,regX:0,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:380,y:-100,regX:0,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:220,y:450,regX:0,scaleX:1,scaleY:1,skewX:-15,skewY:165,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:370,y:333.1,regX:0.1,scaleX:0.898,scaleY:0.898,skewX:-44.9,skewY:135.1,regY:0.1}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:30,x:575,y:410,regX:0,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:-75,x:408.2,y:380,regX:0.1,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:0.1}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:380,y:-100,regX:0,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:0}},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-280,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]}).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:-90,x:725,y:220}},{t:this.instance,p:{scaleX:0.7,scaleY:0.7,x:410,y:125}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:-90,x:90,y:260}},{t:this.instance,p:{scaleX:0.8,scaleY:0.8,x:410,y:125}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:-90,x:725,y:300}},{t:this.instance,p:{scaleX:0.7,scaleY:0.7,x:410,y:125}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{scaleX:0.868,scaleY:0.867,x:400,y:-280}}]},1).wait(1));

	// objects
	this.object_1 = new lib.arrow_10_mc();
	this.object_1.setTransform(560,450,1,1,0,135,-45);

	this.object_2 = new lib.arrow_11_mc();
	this.object_2.setTransform(640,385,0.8,0.8);

	this.object_3 = new lib.object_3_4_mc();
	this.object_3.setTransform(186,450);

	this.object_4 = new lib.arrow_12_mc();
	this.object_4.setTransform(270.1,408,0.898,0.898,0,135.1,-44.9,0.1,-0.1);

	this.object_5 = new lib.object_5_4_mc();
	this.object_5.setTransform(290,70);

	this.object_6 = new lib.object_6_4_mc();
	this.object_6.setTransform(514,69);

	this.object_7 = new lib.object_7_4_mc();
	this.object_7.setTransform(587,210);

	this.object_8 = new lib.object_8_4_mc();
	this.object_8.setTransform(127,455);

	this.object_9 = new lib.object_9_4_mc();
	this.object_9.setTransform(410,240);

	this.object_10 = new lib.object_10_4_mc();
	this.object_10.setTransform(390,485);

	this.object_11 = new lib.object_11_4_mc();
	this.object_11.setTransform(410,250);

	this.object_12 = new lib.object_12_4_mc();
	this.object_12.setTransform(651,450);

	this.object_13 = new lib.arrow_13_mc();
	this.object_13.setTransform(425.1,145,0.8,0.8,0,150,-30,0.1,-0.1);

	this.object_14 = new lib.arrow_14_mc();
	this.object_14.setTransform(177,361,0.9,0.9);

	this.object_15 = new lib.arrow_15_mc();
	this.object_15.setTransform(150,355,0.9,0.9,180);

	this.object_16 = new lib.object_16_4_mc();
	this.object_16.setTransform(410,250);

	this.object_17 = new lib.object_17_4_mc();
	this.object_17.setTransform(127,455);

	this.object_18 = new lib.object_18_4_mc();
	this.object_18.setTransform(356,344);

	this.object_19 = new lib.object_19_4_mc();
	this.object_19.setTransform(650,455);

	this.object_20 = new lib.object_20_4_mc();
	this.object_20.setTransform(410,370);

	this.object_21 = new lib.object_0_1_mc();
	this.object_21.setTransform(700,500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[{t:this.object_2}]},1).to({state:[{t:this.object_3}]},1).to({state:[{t:this.object_4}]},1).to({state:[{t:this.object_5}]},1).to({state:[{t:this.object_6}]},1).to({state:[{t:this.object_7}]},1).to({state:[{t:this.object_8}]},1).to({state:[{t:this.object_9}]},1).to({state:[{t:this.object_10}]},1).to({state:[{t:this.object_11}]},1).to({state:[{t:this.object_12}]},1).to({state:[{t:this.object_13}]},1).to({state:[{t:this.object_14}]},1).to({state:[{t:this.object_15}]},1).to({state:[{t:this.object_16}]},1).to({state:[{t:this.object_17}]},1).to({state:[{t:this.object_18}]},1).to({state:[{t:this.object_19}]},1).to({state:[{t:this.object_20}]},1).to({state:[{t:this.object_21}]},1).wait(1));

	// subjects
	this.subject_1 = new lib.animation2_1_mc();
	this.subject_1.setTransform(400,300);

	this.subject_2 = new lib.animation2_2_mc();
	this.subject_2.setTransform(400,300);

	this.subject_3 = new lib.animation2_3_mc();
	this.subject_3.setTransform(400,300);

	this.subject_4 = new lib.animation2_4_mc();
	this.subject_4.setTransform(400,300);

	this.subject_5 = new lib.animation2_5_mc();
	this.subject_5.setTransform(400,300);

	this.subject_6 = new lib.animation2_6_mc();
	this.subject_6.setTransform(400,300);

	this.subject_7 = new lib.animation2_7_mc();
	this.subject_7.setTransform(400,300);

	this.subject_8 = new lib.animation2_8_mc();
	this.subject_8.setTransform(400,300);

	this.subject_9 = new lib.animation2_9_mc();
	this.subject_9.setTransform(400,300);

	this.subject_10 = new lib.animation2_10_mc();
	this.subject_10.setTransform(400,300);

	this.subject_11 = new lib.animation2_11_mc();
	this.subject_11.setTransform(400,300);

	this.subject_12 = new lib.animation2_12_mc();
	this.subject_12.setTransform(400,300);

	this.subject_13 = new lib.animation2_14_mc();
	this.subject_13.setTransform(400,300);

	this.subject_14 = new lib.animation2_15_mc();
	this.subject_14.setTransform(400,300);

	this.subject_15 = new lib.animation2_16_mc();
	this.subject_15.setTransform(400,300);

	this.subject_16 = new lib.animation2_18_mc();
	this.subject_16.setTransform(400,300);

	this.subject_17 = new lib.animation2_19_mc();
	this.subject_17.setTransform(400,300);

	this.subject_18 = new lib.animation2_21_mc();
	this.subject_18.setTransform(400,300);

	this.subject_19 = new lib.animation2_22_mc();
	this.subject_19.setTransform(400,300);

	this.subject_20 = new lib.animation2_23_mc();
	this.subject_20.setTransform(400,300);

	this.subject_21 = new lib.animation2_24_mc();
	this.subject_21.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[{t:this.subject_3}]},1).to({state:[{t:this.subject_4}]},1).to({state:[{t:this.subject_5}]},1).to({state:[{t:this.subject_6}]},1).to({state:[{t:this.subject_7}]},1).to({state:[{t:this.subject_8}]},1).to({state:[{t:this.subject_9}]},1).to({state:[{t:this.subject_10}]},1).to({state:[{t:this.subject_11}]},1).to({state:[{t:this.subject_12}]},1).to({state:[{t:this.subject_13}]},1).to({state:[{t:this.subject_14}]},1).to({state:[{t:this.subject_15}]},1).to({state:[{t:this.subject_16}]},1).to({state:[{t:this.subject_17}]},1).to({state:[{t:this.subject_18}]},1).to({state:[{t:this.subject_19}]},1).to({state:[{t:this.subject_20}]},1).to({state:[{t:this.subject_21}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(131.5,-349.4,667.2,1332.4);
p.frameBounds = [rect, new cjs.Rectangle(131.5,-349.4,656.6,1094.4), new cjs.Rectangle(1,-349.4,691.5,1051.4), new cjs.Rectangle(62.2,-349.4,630.3,1051.4), rect=new cjs.Rectangle(131.5,-349.4,561,1051.4), rect, new cjs.Rectangle(131.5,-349.4,578.5,1051.4), new cjs.Rectangle(-3,-349.4,760.4,1051.4), new cjs.Rectangle(43.7,-159,721.3,861), new cjs.Rectangle(131.5,-349.4,625.9,1051.4), new cjs.Rectangle(28,-159,729.4,861), new cjs.Rectangle(131.5,-349.4,649.6,1051.4), new cjs.Rectangle(131.5,-349.4,643.1,1051.4), new cjs.Rectangle(-227.9,-349.4,920.4,1115.4), new cjs.Rectangle(6.5,-349.4,686,1109.4), new cjs.Rectangle(125,-159,640,861), new cjs.Rectangle(-13,-349.4,770.4,1051.4), new cjs.Rectangle(131.5,-349.4,625.9,1146), new cjs.Rectangle(131.5,-349.4,658.6,1051.4), new cjs.Rectangle(131.5,-349.4,609.2,1051.4), new cjs.Rectangle(131.5,-349.4,708.6,1129.4)];


(lib.quest_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":249});

	// timeline functions:
	this.frame_14 = function() {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(65).call(this.frame_79).wait(171));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(540,700,0.789,0.789);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(24).to({regX:0.1,regY:0.2,scaleX:0.53,scaleY:0.53,x:540.1,y:700.1},0).to({regY:0.1,scaleX:0.95,scaleY:0.95,y:460.1},10).to({regX:0,regY:0,scaleX:0.79,scaleY:0.79,x:540,y:510},5).wait(30).to({y:480},5).to({regX:0.1,regY:0.1,scaleX:0.53,scaleY:0.53,x:540.1,y:700.1},10).wait(166));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_3_2_mc();
	this.dressupPanel_mc.setTransform(1600,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).to({x:480},19).to({x:540},5).wait(55).to({x:480},5).to({x:1600},15).wait(151));

	// photoflash
	this.photoflash_comp = new lib.photoflash_0_mc();
	this.photoflash_comp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.photoflash_comp).wait(99).to({_off:false},0).to({_off:true},100).wait(51));

	// hero
	this.hero_2 = new lib.hero_2_2_mc();
	this.hero_2.setTransform(210,360);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(99).to({x:400},15).wait(136));

	// shadow
	this.instance = new lib.shadow_dressup_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({_off:false},0).to({alpha:1},15).wait(136));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12,40.5,1894.6,909.5);
p.frameBounds = [rect, new cjs.Rectangle(-12,40.5,1835.6,909.5), new cjs.Rectangle(-12,40.5,1776.7,909.5), new cjs.Rectangle(-12,40.5,1717.7,909.5), new cjs.Rectangle(-12,40.5,1658.8,909.5), new cjs.Rectangle(-12,40.5,1599.8,909.5), new cjs.Rectangle(-12,40.5,1540.9,909.5), new cjs.Rectangle(-12,40.5,1481.9,909.5), new cjs.Rectangle(-12,40.5,1423,909.5), new cjs.Rectangle(-12,40.5,1364.1,909.5), new cjs.Rectangle(-12,40.5,1305.1,909.5), new cjs.Rectangle(-12,40.5,1246.1,909.5), new cjs.Rectangle(-12,40.5,1187.2,909.5), new cjs.Rectangle(-12,40.5,1128.3,909.5), new cjs.Rectangle(-12,40.5,1069.3,909.5), new cjs.Rectangle(-12,40.5,1010.4,909.5), new cjs.Rectangle(-12,40.5,951.4,909.5), new cjs.Rectangle(-12,40.5,892.5,909.5), new cjs.Rectangle(-12,40.5,833.5,909.5), new cjs.Rectangle(-12,40.5,774.6,909.5), new cjs.Rectangle(-12,40.5,786.6,909.5), new cjs.Rectangle(-12,40.5,798.6,909.5), new cjs.Rectangle(-12,40.5,810.6,909.5), new cjs.Rectangle(-12,40.5,822.6,909.5), rect=new cjs.Rectangle(-12,40.5,834.6,909.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-12,40.5,822.6,909.5), new cjs.Rectangle(-12,40.5,810.6,909.5), new cjs.Rectangle(-12,40.5,798.6,909.5), new cjs.Rectangle(-12,40.5,786.6,909.5), new cjs.Rectangle(-12,40.5,774.6,909.5), new cjs.Rectangle(-12,40.5,849.2,909.5), new cjs.Rectangle(-12,40.5,923.9,909.5), new cjs.Rectangle(-12,40.5,998.6,909.5), new cjs.Rectangle(-12,40.5,1073.2,909.5), new cjs.Rectangle(-12,40.5,1147.9,909.5), new cjs.Rectangle(-12,40.5,1222.6,909.5), new cjs.Rectangle(-12,40.5,1297.2,909.5), new cjs.Rectangle(-12,40.5,1371.9,909.5), new cjs.Rectangle(-12,40.5,1446.6,909.5), new cjs.Rectangle(-12,40.5,1521.2,909.5), new cjs.Rectangle(-12,40.5,1595.9,909.5), new cjs.Rectangle(-12,40.5,1670.6,909.5), new cjs.Rectangle(-12,40.5,1745.2,909.5), new cjs.Rectangle(-12,40.5,1819.9,909.5), rect=new cjs.Rectangle(-410,-387,2292.5,1337), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-410,-10,2292.5,960), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":249});

	// timeline functions:
	this.frame_14 = function() {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(70).call(this.frame_84).wait(166));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(540,700,0.789,0.789);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(24).to({regX:0.1,regY:0.1,scaleX:0.53,scaleY:0.53,x:540.1,y:700.1},0).to({scaleX:0.95,scaleY:0.95,y:460.1},10).to({regX:0,regY:0,scaleX:0.79,scaleY:0.79,x:540,y:510},5).wait(30).to({regX:0.1,regY:0.1,scaleX:0.95,scaleY:0.95,x:540.1,y:480.1},5).to({scaleX:0.53,scaleY:0.53,y:700.1},10).wait(166));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_3_1_mc();
	this.dressupPanel_mc.setTransform(1600,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).to({x:480},19).to({x:540},5).wait(60).to({x:480},5).to({x:1600},15).wait(146));

	// photoflash
	this.photoflash_comp = new lib.photoflash_0_mc();
	this.photoflash_comp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.photoflash_comp).wait(99).to({_off:false},0).to({_off:true},100).wait(51));

	// hero
	this.hero_1 = new lib.hero_2_1_mc();
	this.hero_1.setTransform(180,330);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(99).to({x:430},15).wait(136));

	// shadow
	this.instance = new lib.shadow_dressup_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({_off:false},0).to({alpha:1},15).wait(136));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(17.5,-36.2,1842.5,986.2);
p.frameBounds = [rect, new cjs.Rectangle(17.5,-36.2,1783.6,986.2), new cjs.Rectangle(17.5,-36.2,1724.6,986.2), new cjs.Rectangle(17.5,-36.2,1665.7,986.2), new cjs.Rectangle(17.5,-36.2,1606.7,986.2), new cjs.Rectangle(17.5,-36.2,1547.8,986.2), new cjs.Rectangle(17.5,-36.2,1488.8,986.2), new cjs.Rectangle(17.5,-36.2,1429.9,986.2), new cjs.Rectangle(17.5,-36.2,1370.9,986.2), new cjs.Rectangle(17.5,-36.2,1312,986.2), new cjs.Rectangle(17.5,-36.2,1253,986.2), new cjs.Rectangle(17.5,-36.2,1194.1,986.2), new cjs.Rectangle(17.5,-36.2,1135.2,986.2), new cjs.Rectangle(17.5,-36.2,1076.2,986.2), new cjs.Rectangle(17.5,-36.2,1017.3,986.2), new cjs.Rectangle(17.5,-36.2,958.3,986.2), new cjs.Rectangle(17.5,-36.2,899.4,986.2), new cjs.Rectangle(17.5,-36.2,840.4,986.2), new cjs.Rectangle(17.5,-36.2,781.5,986.2), new cjs.Rectangle(17.5,-36.2,722.5,986.2), new cjs.Rectangle(17.5,-36.2,734.5,986.2), new cjs.Rectangle(17.5,-36.2,746.5,986.2), new cjs.Rectangle(17.5,-36.2,758.5,986.2), new cjs.Rectangle(17.5,-36.2,770.5,986.2), rect=new cjs.Rectangle(17.5,-36.2,782.5,986.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(17.5,-36.2,770.5,986.2), new cjs.Rectangle(17.5,-36.2,758.5,986.2), new cjs.Rectangle(17.5,-36.2,746.5,986.2), new cjs.Rectangle(17.5,-36.2,734.5,986.2), new cjs.Rectangle(17.5,-36.2,722.5,986.2), new cjs.Rectangle(17.5,-36.2,797.2,986.2), new cjs.Rectangle(17.5,-36.2,871.9,986.2), new cjs.Rectangle(17.5,-36.2,946.5,986.2), new cjs.Rectangle(17.5,-36.2,1021.2,986.2), new cjs.Rectangle(17.5,-36.2,1095.9,986.2), new cjs.Rectangle(17.5,-36.2,1170.5,986.2), new cjs.Rectangle(17.5,-36.2,1245.2,986.2), new cjs.Rectangle(17.5,-36.2,1319.9,986.2), new cjs.Rectangle(17.5,-36.2,1394.5,986.2), new cjs.Rectangle(-410,-387,1896.7,1337), new cjs.Rectangle(-410,-387,1971.4,1337), new cjs.Rectangle(-410,-387,2046,1337), new cjs.Rectangle(-410,-387,2120.7,1337), new cjs.Rectangle(-410,-387,2195.4,1337), rect=new cjs.Rectangle(-410,-387,2270,1337), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-410,-36.2,2270,986.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(520,-100);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(190,180,1,1,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1,p:{rotation:15,x:190,y:180,skewX:0,skewY:0}},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1,p:{rotation:-45,x:480,y:85,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:640,y:220,skewX:-15,skewY:165}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:-15,x:185,y:325,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:590,y:335,skewX:15,skewY:-165}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:380,y:-100,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:380,y:-100,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:-45,x:280,y:335,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:500,y:330,skewX:45,skewY:-135}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:380,y:-100,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:380,y:-100,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:45,x:120,y:470,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:380,y:-100,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:380,y:-100,skewX:0,skewY:0}},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-280,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280}}]}).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:-90,x:90,y:260}},{t:this.instance,p:{x:390,y:100}}]},1).to({state:[{t:this.indicator_mc,p:{rotation:0,x:400,y:-180}},{t:this.instance,p:{x:400,y:-280}}]},1).wait(1));

	// objects
	this.object_1 = new lib.object_1_1_mc();
	this.object_1.setTransform(215,185);

	this.object_2 = new lib.object_2_1_mc();
	this.object_2.setTransform(475,50);

	this.object_3 = new lib.object_3_1_mc();
	this.object_3.setTransform(620,230);

	this.object_4 = new lib.object_4_1_mc();
	this.object_4.setTransform(220,310);

	this.object_5 = new lib.object_5_1_mc();
	this.object_5.setTransform(560,320);

	this.object_6 = new lib.arrow_1_mc();
	this.object_6.setTransform(225,340,0.9,0.9,-90);

	this.object_7 = new lib.arrow_2_mc();
	this.object_7.setTransform(545,420,0.9,0.9,0,105,-75);

	this.object_8 = new lib.object_8_1_mc();
	this.object_8.setTransform(295,305);

	this.object_9 = new lib.object_9_1_mc();
	this.object_9.setTransform(480,305);

	this.object_10 = new lib.arrow_3_mc();
	this.object_10.setTransform(375,185.1,0.9,0.9,0,45,-135,-0.1,0.1);

	this.object_11 = new lib.arrow_4_mc();
	this.object_11.setTransform(315,410,0.799,0.799,-135.1);

	this.object_12 = new lib.object_12_1_mc();
	this.object_12.setTransform(137,480);

	this.object_13 = new lib.object_13_1_mc();
	this.object_13.setTransform(390,270);

	this.object_14 = new lib.object_0_1_mc();
	this.object_14.setTransform(700,500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[{t:this.object_2}]},1).to({state:[{t:this.object_3}]},1).to({state:[{t:this.object_4}]},1).to({state:[{t:this.object_5}]},1).to({state:[{t:this.object_6}]},1).to({state:[{t:this.object_7}]},1).to({state:[{t:this.object_8}]},1).to({state:[{t:this.object_9}]},1).to({state:[{t:this.object_10}]},1).to({state:[{t:this.object_11}]},1).to({state:[{t:this.object_12}]},1).to({state:[{t:this.object_13}]},1).to({state:[{t:this.object_14}]},1).wait(1));

	// subjects
	this.subject_1 = new lib.animation1_2_mc();
	this.subject_1.setTransform(400,300);

	this.subject_2 = new lib.animation1_3_mc();
	this.subject_2.setTransform(400,300);

	this.subject_3 = new lib.animation1_4_mc();
	this.subject_3.setTransform(400,300);

	this.subject_4 = new lib.animation1_5_mc();
	this.subject_4.setTransform(400,300);

	this.subject_5 = new lib.animation1_6_mc();
	this.subject_5.setTransform(400,300);

	this.subject_6 = new lib.animation1_7_mc();
	this.subject_6.setTransform(400,300);

	this.subject_7 = new lib.animation1_8_mc();
	this.subject_7.setTransform(400,300);

	this.subject_8 = new lib.animation1_9_mc();
	this.subject_8.setTransform(400,300);

	this.subject_9 = new lib.animation1_10_mc();
	this.subject_9.setTransform(400,300);

	this.subject_10 = new lib.animation1_11_mc();
	this.subject_10.setTransform(400,300);

	this.subject_11 = new lib.animation1_12_mc();
	this.subject_11.setTransform(400,300);

	this.subject_12 = new lib.animation1_13_mc();
	this.subject_12.setTransform(400,300);

	this.subject_13 = new lib.animation1_15_mc();
	this.subject_13.setTransform(400,300);

	this.subject_14 = new lib.animation1_16_mc();
	this.subject_14.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[{t:this.subject_3}]},1).to({state:[{t:this.subject_4}]},1).to({state:[{t:this.subject_5}]},1).to({state:[{t:this.subject_6}]},1).to({state:[{t:this.subject_7}]},1).to({state:[{t:this.subject_8}]},1).to({state:[{t:this.subject_9}]},1).to({state:[{t:this.subject_10}]},1).to({state:[{t:this.subject_11}]},1).to({state:[{t:this.subject_12}]},1).to({state:[{t:this.subject_13}]},1).to({state:[{t:this.subject_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-331.7,-349.4,1062.7,1216.8);
p.frameBounds = [rect, rect, new cjs.Rectangle(69,-349.4,1034.8,1216.8), new cjs.Rectangle(61.6,-349.4,669.4,1216.8), new cjs.Rectangle(69,-349.4,668.1,1216.8), new cjs.Rectangle(-57.8,-349.4,825.8,1216.8), new cjs.Rectangle(35.9,-349.4,787.7,1216.8), rect=new cjs.Rectangle(69,-349.4,698.1,1216.8), rect, new cjs.Rectangle(35.9,-349.4,732.1,1216.8), new cjs.Rectangle(69,-349.4,697.1,1216.8), new cjs.Rectangle(-2.3,-349.4,770.3,1216.8), new cjs.Rectangle(28,-159,703,1026.4), new cjs.Rectangle(69,-349.4,771.1,1216.8)];


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

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_5_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1332.4);
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

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1330.4);
p.frameBounds = [rect];


(lib.dressupPanel_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-180.1,80,1,1,-20,0,0,-0.1,-0.1);

	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(180.2,80,1,1,20,0,0,0.1,-0.1);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-282.5,-240,565,890);
p.frameBounds = [rect];


(lib.dressupPanel_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-180,80);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(180,80);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-272,540,922);
p.frameBounds = [rect];


(lib.dressupPanel_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-330,200);

	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(330,200);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-255,820,905);
p.frameBounds = [rect];


(lib.dressupPanel_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-330,200);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(330,200);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-255,820,905);
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
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,669.2);
p.frameBounds = [rect];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(50.5,700.5,0.75,0.75,0,0,0,0.7,0.7);

	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(710,510,0.895,0.895);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,920);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(400,1050,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(590,550,0.727,0.727);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,750);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.play_btn},{t:this.social_network_mc}]}).wait(1));

	// title
	this.instance = new lib.title_mc();
	this.instance.setTransform(290,515);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(0,400);
	this.instance_1.alpha = 0.301;
	this.instance_1.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(200,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// heroes
	this.instance_2 = new lib.heroes_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.instance_3 = new lib.background_1_img();
	this.instance_3.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1374.4);
p.frameBounds = [rect];


(lib.quest_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":129});

	// timeline functions:
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
	this.frame_104 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(70).call(this.frame_104).wait(26));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(260,510,0.789,0.789);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(43).to({regX:0.1,regY:0.1,scaleX:0.53,scaleY:0.53,x:260.1,y:700.1},0).to({scaleX:0.95,scaleY:0.95,y:460.1},10).to({regX:0,regY:0,scaleX:0.79,scaleY:0.79,x:260,y:510},5).wait(30).to({y:480},5).to({regX:0.1,regY:0.1,scaleX:0.53,scaleY:0.53,x:260.1,y:700.1},10).wait(26));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_2_mc();
	this.dressupPanel_mc.setTransform(260,280);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-800},0).wait(23).to({x:310},15).to({x:260},5).wait(60).to({x:310},5).to({x:-800},15).wait(6));

	// hero
	this.hero_2 = new lib.hero_2_2_mc();
	this.hero_2.setTransform(650,360);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:1600},0).wait(23).to({x:600},15).to({x:650},5).wait(70).to({x:210},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.5,40,863.5,890);
p.frameBounds = [rect, rect=new cjs.Rectangle(-1082.5,40,2873.5,890), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1008.5,40,2732.9,890), new cjs.Rectangle(-934.5,40,2592.2,890), new cjs.Rectangle(-860.5,40,2451.5,890), new cjs.Rectangle(-786.5,40,2310.9,890), new cjs.Rectangle(-712.5,40,2170.2,890), new cjs.Rectangle(-638.5,40,2029.5,890), new cjs.Rectangle(-564.5,40,1888.9,890), new cjs.Rectangle(-490.5,40,1748.2,890), new cjs.Rectangle(-416.5,40,1607.5,890), new cjs.Rectangle(-342.5,40,1466.9,890), new cjs.Rectangle(-268.5,40,1326.2,890), new cjs.Rectangle(-194.5,40,1185.5,890), new cjs.Rectangle(-120.5,40,1044.9,890), new cjs.Rectangle(-46.5,40,904.2,890), new cjs.Rectangle(27.5,40,763.5,890), new cjs.Rectangle(17.5,40,783.6,890), new cjs.Rectangle(7.5,40,803.6,890), new cjs.Rectangle(-2.5,40,823.6,890), new cjs.Rectangle(-12.5,40,843.6,890), rect=new cjs.Rectangle(-22.5,40,863.5,890), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-12.5,40,853.6,890), new cjs.Rectangle(-2.5,40,843.6,890), new cjs.Rectangle(7.5,40,833.6,890), new cjs.Rectangle(17.5,40,823.6,890), new cjs.Rectangle(27.5,40,813.5,890), new cjs.Rectangle(-46.5,40,887.6,890), new cjs.Rectangle(-120.5,40,961.6,890), new cjs.Rectangle(-194.5,40,1035.5,890), new cjs.Rectangle(-268.5,40,1109.5,890), new cjs.Rectangle(-342.5,40,1183.5,890), new cjs.Rectangle(-416.5,40,1228.2,890), new cjs.Rectangle(-490.5,40,1272.9,890), new cjs.Rectangle(-564.5,40,1317.5,890), new cjs.Rectangle(-638.5,40,1362.2,890), new cjs.Rectangle(-712.5,40,1406.9,890), new cjs.Rectangle(-786.5,40,1451.5,890), new cjs.Rectangle(-860.5,40,1496.2,890), new cjs.Rectangle(-934.5,40,1540.9,890), new cjs.Rectangle(-1008.5,40,1585.5,890), new cjs.Rectangle(-1082.5,40,1630.2,890), new cjs.Rectangle(-1082.5,40,1600.9,890), new cjs.Rectangle(-1082.5,40,1571.5,890), new cjs.Rectangle(-1082.5,40,1542.2,890), new cjs.Rectangle(-1082.5,40,1512.9,890), new cjs.Rectangle(-1082.5,40,1483.5,890)];


(lib.quest_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":259});

	// timeline functions:
	this.frame_49 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(65).call(this.frame_114).wait(146));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400,520,0.789,0.789);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(58).to({regX:0.1,regY:0.1,scaleX:0.53,scaleY:0.53,x:400.1,y:700.1},0).to({scaleX:0.95,scaleY:0.95,y:470.1},10).to({regX:0,regY:0,scaleX:0.79,scaleY:0.79,x:400,y:520},5).wait(25).to({regX:0.1,regY:0.1,scaleX:0.95,scaleY:0.95,x:400.1,y:480.1},5).to({scaleX:0.53,scaleY:0.53,y:700.1},10).wait(146));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_2_mc();
	this.dressupPanel_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:900},0).wait(38).to({y:250},15).to({y:300},5).wait(55).to({y:250},5).to({y:900},10).wait(131));

	// decor
	this.instance = new lib.decor_shadow_2_mc();
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(129).to({_off:false},0).to({alpha:1},15).wait(116));

	// hero
	this.hero_2 = new lib.hero_1_2_mc();
	this.hero_2.setTransform(402,341.6,1,1,0,0,0,12,46.6);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({y:1046.6},0).wait(23).to({y:266.6},15).to({y:341.6},5).wait(216));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(129).to({_off:false},0).to({alpha:1},15).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-13.8,820,963.8);
p.frameBounds = [rect, rect=new cjs.Rectangle(-10,625,820,925.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-10,587.2,820,962.8), new cjs.Rectangle(-10,535.2,820,1014.8), new cjs.Rectangle(-10,483.2,820,1066.8), new cjs.Rectangle(-10,431.2,820,1118.8), new cjs.Rectangle(-10,379.2,820,1170.8), new cjs.Rectangle(-10,327.2,820,1222.8), new cjs.Rectangle(-10,275.2,820,1274.8), new cjs.Rectangle(-10,223.2,820,1326.8), new cjs.Rectangle(-10,171.2,820,1378.8), new cjs.Rectangle(-10,119.2,820,1430.8), new cjs.Rectangle(-10,67.2,820,1482.8), new cjs.Rectangle(-10,15.2,820,1534.8), new cjs.Rectangle(-10,-36.8,820,1586.8), new cjs.Rectangle(-10,-88.8,820,1638.8), new cjs.Rectangle(-10,-73.8,820,1580.5), new cjs.Rectangle(-10,-58.8,820,1522.1), new cjs.Rectangle(-10,-43.8,820,1463.8), new cjs.Rectangle(-10,-28.8,820,1405.5), new cjs.Rectangle(-10,-13.8,820,1347.1), new cjs.Rectangle(-10,-13.8,820,1303.8), new cjs.Rectangle(-10,-13.8,820,1260.5), new cjs.Rectangle(-10,-13.8,820,1217.1), new cjs.Rectangle(-10,-13.8,820,1173.8), new cjs.Rectangle(-10,-13.8,820,1130.5), new cjs.Rectangle(-10,-13.8,820,1087.1), new cjs.Rectangle(-10,-13.8,820,1043.8), new cjs.Rectangle(-10,-13.8,820,1000.5), new cjs.Rectangle(-10,-13.8,820,957.2), new cjs.Rectangle(-10,-13.8,820,913.8), new cjs.Rectangle(-10,-13.8,820,923.8), new cjs.Rectangle(-10,-13.8,820,933.8), new cjs.Rectangle(-10,-13.8,820,943.8), new cjs.Rectangle(-10,-13.8,820,953.8), rect=new cjs.Rectangle(-10,-13.8,820,963.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-10,-13.8,820,953.8), new cjs.Rectangle(-10,-13.8,820,943.8), new cjs.Rectangle(-10,-13.8,820,933.8), new cjs.Rectangle(-10,-13.8,820,923.8), new cjs.Rectangle(-10,-13.8,820,913.8), new cjs.Rectangle(-10,-13.8,820,978.8), new cjs.Rectangle(-10,-13.8,820,1043.8), new cjs.Rectangle(-10,-13.8,820,1108.8), new cjs.Rectangle(-10,-13.8,820,1173.8), new cjs.Rectangle(-10,-13.8,820,1238.8), new cjs.Rectangle(-10,-13.8,820,1303.8), new cjs.Rectangle(-10,-13.8,820,1368.8), new cjs.Rectangle(-10,-13.8,820,1433.8), new cjs.Rectangle(-10,-13.8,820,1498.8), rect=new cjs.Rectangle(-410,-13.8,1620,1563.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":169});

	// timeline functions:
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
	this.frame_99 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(65).call(this.frame_99).wait(71));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(260,510,0.789,0.789);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(43).to({regX:0.1,regY:0.1,scaleX:0.53,scaleY:0.53,x:260.1,y:700.1},0).to({scaleX:0.95,scaleY:0.95,y:460.1},10).to({regX:0,regY:0,scaleX:0.79,scaleY:0.79,x:260,y:510},5).wait(30).to({y:480},5).to({regX:0.1,regY:0.1,scaleX:0.53,scaleY:0.53,x:260.1,y:700.1},10).wait(66));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_1_mc();
	this.dressupPanel_mc.setTransform(260,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-800},0).wait(23).to({x:310},15).to({x:260},5).wait(55).to({x:310},5).to({x:-800},15).wait(51));

	// hero
	this.hero_1 = new lib.hero_2_1_mc();
	this.hero_1.setTransform(655,330);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:1600},0).wait(23).to({x:600},15).to({x:655},5).wait(75).to({x:180},20).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-36.2,828,986.2);
p.frameBounds = [rect, rect=new cjs.Rectangle(-1070,-36.2,2833,986.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-996,-36.2,2692.4,986.2), new cjs.Rectangle(-922,-36.2,2551.7,986.2), new cjs.Rectangle(-848,-36.2,2411,986.2), new cjs.Rectangle(-774,-36.2,2270.4,986.2), new cjs.Rectangle(-700,-36.2,2129.7,986.2), new cjs.Rectangle(-626,-36.2,1989,986.2), new cjs.Rectangle(-552,-36.2,1848.4,986.2), new cjs.Rectangle(-478,-36.2,1707.7,986.2), new cjs.Rectangle(-404,-36.2,1567,986.2), new cjs.Rectangle(-330,-36.2,1426.4,986.2), new cjs.Rectangle(-256,-36.2,1285.7,986.2), new cjs.Rectangle(-182,-36.2,1145,986.2), new cjs.Rectangle(-108,-36.2,1004.4,986.2), new cjs.Rectangle(-34,-36.2,863.7,986.2), new cjs.Rectangle(40,-36.2,723,986.2), new cjs.Rectangle(30,-36.2,744,986.2), new cjs.Rectangle(20,-36.2,765,986.2), new cjs.Rectangle(10,-36.2,786,986.2), new cjs.Rectangle(0,-36.2,807,986.2), rect=new cjs.Rectangle(-10,-36.2,828,986.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(0,-36.2,818,986.2), new cjs.Rectangle(10,-36.2,808,986.2), new cjs.Rectangle(20,-36.2,798,986.2), new cjs.Rectangle(30,-36.2,788,986.2), new cjs.Rectangle(40,-36.2,778,986.2), new cjs.Rectangle(-34,-36.2,852,986.2), new cjs.Rectangle(-108,-36.2,926,986.2), new cjs.Rectangle(-182,-36.2,1000,986.2), new cjs.Rectangle(-256,-36.2,1074,986.2), new cjs.Rectangle(-330,-36.2,1148,986.2), new cjs.Rectangle(-404,-36.2,1222,986.2), new cjs.Rectangle(-478,-36.2,1296,986.2), new cjs.Rectangle(-552,-36.2,1370,986.2), new cjs.Rectangle(-626,-36.2,1444,986.2), new cjs.Rectangle(-700,-36.2,1518,986.2), new cjs.Rectangle(-774,-36.2,1592,986.2), new cjs.Rectangle(-848,-36.2,1666,986.2), new cjs.Rectangle(-922,-36.2,1740,986.2), new cjs.Rectangle(-996,-36.2,1814,986.2), new cjs.Rectangle(-1070,-36.2,1888,986.2), new cjs.Rectangle(-1070,-36.2,1864.3,986.2), new cjs.Rectangle(-1070,-36.2,1840.5,986.2), new cjs.Rectangle(-1070,-36.2,1816.8,986.2), new cjs.Rectangle(-1070,-36.2,1793,986.2), new cjs.Rectangle(-1070,-36.2,1769.3,986.2), new cjs.Rectangle(-1070,-36.2,1745.5,986.2), new cjs.Rectangle(-1070,-36.2,1721.8,986.2), new cjs.Rectangle(-1070,-36.2,1698,986.2), new cjs.Rectangle(-1070,-36.2,1674.3,986.2), new cjs.Rectangle(-1070,-36.2,1650.5,986.2), new cjs.Rectangle(-1070,-36.2,1626.8,986.2), new cjs.Rectangle(-1070,-36.2,1603,986.2), new cjs.Rectangle(-1070,-36.2,1579.3,986.2), new cjs.Rectangle(-1070,-36.2,1555.5,986.2), new cjs.Rectangle(-1070,-36.2,1531.8,986.2), new cjs.Rectangle(-1070,-36.2,1508,986.2), new cjs.Rectangle(-1070,-36.2,1484.3,986.2), new cjs.Rectangle(-1070,-36.2,1460.5,986.2), new cjs.Rectangle(-1070,-36.2,1436.8,986.2), rect=new cjs.Rectangle(-1070,-36.2,1413,986.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":259});

	// timeline functions:
	this.frame_49 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(65).call(this.frame_114).wait(146));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400,520,0.789,0.789);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(58).to({regX:0.1,regY:0.1,scaleX:0.53,scaleY:0.53,x:400.1,y:700.1},0).to({scaleX:0.95,scaleY:0.95,y:470.1},10).to({regX:0,regY:0,scaleX:0.79,scaleY:0.79,x:400,y:520},5).wait(25).to({regX:0.1,regY:0.1,scaleX:0.95,scaleY:0.95,x:400.1,y:480.1},5).to({scaleX:0.53,scaleY:0.53,y:700.1},10).wait(146));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_1_mc();
	this.dressupPanel_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:900},0).wait(38).to({y:250},15).to({y:300},5).wait(55).to({y:250},5).to({y:900},10).wait(131));

	// decor
	this.instance = new lib.decor_shadow_mc();
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(129).to({_off:false},0).to({alpha:1},15).wait(116));

	// hero
	this.hero_1 = new lib.hero_1_1_mc();
	this.hero_1.setTransform(410,270);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({y:1000},0).wait(23).to({y:200},15).to({y:270},5).wait(216));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(129).to({_off:false},0).to({alpha:1},15).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-49.9,820,1000);
p.frameBounds = [rect, rect=new cjs.Rectangle(-10,625,820,942.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-10,625,820,925.1), new cjs.Rectangle(-10,573.4,820,976.6), new cjs.Rectangle(-10,520.1,820,1030), new cjs.Rectangle(-10,466.7,820,1083.3), new cjs.Rectangle(-10,413.4,820,1136.6), new cjs.Rectangle(-10,360.1,820,1190), new cjs.Rectangle(-10,306.7,820,1243.3), new cjs.Rectangle(-10,253.4,820,1296.6), new cjs.Rectangle(-10,200.1,820,1350), new cjs.Rectangle(-10,146.7,820,1403.3), new cjs.Rectangle(-10,93.4,820,1456.6), new cjs.Rectangle(-10,40.1,820,1510), new cjs.Rectangle(-10,-13.3,820,1563.3), new cjs.Rectangle(-10,-66.6,820,1616.6), new cjs.Rectangle(-10,-119.9,820,1670), new cjs.Rectangle(-10,-105.9,820,1612.6), new cjs.Rectangle(-10,-91.9,820,1555.3), new cjs.Rectangle(-10,-77.9,820,1498), new cjs.Rectangle(-10,-63.9,820,1440.6), new cjs.Rectangle(-10,-49.9,820,1383.3), new cjs.Rectangle(-10,-49.9,820,1340), new cjs.Rectangle(-10,-49.9,820,1296.6), new cjs.Rectangle(-10,-49.9,820,1253.3), new cjs.Rectangle(-10,-49.9,820,1210), new cjs.Rectangle(-10,-49.9,820,1166.6), new cjs.Rectangle(-10,-49.9,820,1123.3), new cjs.Rectangle(-10,-49.9,820,1080), new cjs.Rectangle(-10,-49.9,820,1036.6), new cjs.Rectangle(-10,-49.9,820,993.3), new cjs.Rectangle(-10,-49.9,820,950), new cjs.Rectangle(-10,-49.9,820,960), new cjs.Rectangle(-10,-49.9,820,970), new cjs.Rectangle(-10,-49.9,820,980), new cjs.Rectangle(-10,-49.9,820,990), rect=new cjs.Rectangle(-10,-49.9,820,1000), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-10,-49.9,820,990), new cjs.Rectangle(-10,-49.9,820,980), new cjs.Rectangle(-10,-49.9,820,970), new cjs.Rectangle(-10,-49.9,820,960), new cjs.Rectangle(-10,-49.9,820,950), new cjs.Rectangle(-10,-49.9,820,1015), new cjs.Rectangle(-10,-49.9,820,1080), new cjs.Rectangle(-10,-49.9,820,1145), new cjs.Rectangle(-10,-49.9,820,1210), new cjs.Rectangle(-10,-49.9,820,1275), new cjs.Rectangle(-10,-49.9,820,1340), new cjs.Rectangle(-10,-49.9,820,1405), new cjs.Rectangle(-10,-49.9,820,1470), new cjs.Rectangle(-10,-49.9,820,1535), rect=new cjs.Rectangle(-410,-49.9,1620,1600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{location_1:0,location_2:1,location_3:2,location_4:3,location_5:4,location_6:5});

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(200,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).to({_off:true},3).wait(3));

	// body
	this.frame_1_mc = new lib.frame_locations_1_mc();

	this.frame_2_mc = new lib.frame_locations_2_mc();

	this.frame_3_mc = new lib.frame_locations_3_mc();

	this.frame_4_mc = new lib.frame_locations_4_mc();

	this.frame_5_mc = new lib.frame_locations_5_mc();

	this.frame_6_mc = new lib.frame_locations_6_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).to({state:[{t:this.frame_4_mc}]},1).to({state:[{t:this.frame_5_mc}]},1).to({state:[{t:this.frame_6_mc}]},1).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(0,400);
	this.instance.alpha = 0.102;
	this.instance.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6));

	// decor
	this.instance_1 = new lib.background_4_img();
	this.instance_1.setTransform(-400,0);

	this.instance_2 = new lib.background_3_img();
	this.instance_2.setTransform(-400,0);

	this.instance_3 = new lib.background_6_img();
	this.instance_3.setTransform(-400,0);

	this.instance_4 = new lib.background_5_img();
	this.instance_4.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2830,0,4030,669.2);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,0,1600,669.2), rect, rect=new cjs.Rectangle(-400,0,1600,600), rect, rect];


(lib.SelectionScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// locations
	this.locations_mc = new lib.locations_mc();

	this.timeline.addTween(cjs.Tween.get(this.locations_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2830,-280.8,4030,1261.9);
p.frameBounds = [rect];


(lib.quest_6_mc = function(mode,startPosition,loop) {
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
	this.frame_1_mc = new lib.quest_1_6_mc();

	this.frame_2_mc = new lib.quest_2_6_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.5,-349.4,863.5,1279.4);
p.frameBounds = [rect, new cjs.Rectangle(-12,-349.4,1894.6,1299.4)];


(lib.quest_5_mc = function(mode,startPosition,loop) {
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
	this.frame_1_mc = new lib.quest_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-349.4,820,1299.4);
p.frameBounds = [rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-10,-349.4,828,1299.4);
p.frameBounds = [rect, new cjs.Rectangle(17.5,-349.4,1842.5,1299.4)];


(lib.quest_2_mc = function(mode,startPosition,loop) {
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
	this.frame_1_mc = new lib.quest_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-349.4,820,1299.4);
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
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_5_img();
	this.instance.setTransform(-400,0);

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

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_6_img();
	this.instance.setTransform(-400,0);

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
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-400,0);

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

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_4_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1330.4);
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

	this.instance_8 = new lib.LocationScreen_4();

	this.instance_9 = new lib.LocationScreen_5();

	this.instance_10 = new lib.LocationScreen_6();

	this.instance_11 = new lib.RedirectScreen();

	this.instance_12 = new lib.ResultScreen();

	this.instance_13 = new lib.InstructionScreen();

	this.instance_14 = new lib.forward_mc();
	this.instance_14.setTransform(657,266);

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(400,50);

	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(467,266);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.instance_15 = new lib.Glitter_2();
	this.instance_15.setTransform(500,50);

	this.instance_16 = new lib.FlashAnimation();
	this.instance_16.setTransform(150,280);

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

	this.instance_23 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.next_btn},{t:this.gravity_explosion_comp},{t:this.instance_14}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[]},1).to({state:[{t:this.instance_23}]},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,257,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,0,1600,600), rect, new cjs.Rectangle(-400,0,1600,1165), new cjs.Rectangle(-400,-280.8,1600,1370.9), new cjs.Rectangle(-2830,-280.8,4030,1261.9), rect=new cjs.Rectangle(-400,-349.4,1600,1330.4), rect, rect, new cjs.Rectangle(-400,-349.4,1600,1332.4), rect=new cjs.Rectangle(-400,-349.4,1600,1330.4), rect, new cjs.Rectangle(-400,0,1600,610), new cjs.Rectangle(-400,-319.9,1600,1780), new cjs.Rectangle(-400,0,1600,600), new cjs.Rectangle(0,0,752,430), rect=new cjs.Rectangle(-410,-10,1620,620), rect, new cjs.Rectangle(-400,600,1600,600), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-410,-10,1620,620)];


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