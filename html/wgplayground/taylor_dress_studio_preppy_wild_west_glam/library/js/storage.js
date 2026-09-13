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
		{name:"storage_atlas_", frames: [[0,602,1600,600],[0,0,1600,600]]},
		{name:"storage_atlas_2", frames: [[0,602,1600,600],[0,0,1600,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_4", frames: [[0,602,1600,600],[0,0,1600,600]]},
		{name:"storage_atlas_5", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_6", frames: [[1266,202,436,469],[1266,673,436,469],[0,0,1600,200],[0,864,540,420],[542,824,540,420],[0,202,420,660],[422,202,420,620],[844,202,420,620]]},
		{name:"storage_atlas_7", frames: [[876,471,436,469],[1314,471,436,469],[0,0,436,469],[438,0,436,469],[438,471,436,469],[1314,0,436,469],[876,0,436,469],[0,471,436,469]]},
		{name:"storage_atlas_8", frames: [[0,0,436,469],[0,471,436,469],[876,471,436,469],[1314,471,436,469],[438,0,436,469],[438,471,436,469],[876,0,436,469],[1314,0,436,469]]},
		{name:"storage_atlas_9", frames: [[876,471,436,469],[0,471,436,469],[438,0,436,469],[438,471,436,469],[876,0,436,469],[1314,0,436,469],[1314,471,436,469],[0,0,436,469]]},
		{name:"storage_atlas_10", frames: [[0,0,436,469],[0,471,436,469],[438,0,436,469],[876,0,436,469],[438,471,436,469],[876,471,436,469],[1314,0,436,469],[0,1093,640,280],[642,1093,640,280],[1314,471,290,620]]},
		{name:"storage_atlas_11", frames: [[744,302,500,300],[744,0,500,300],[502,604,500,300],[1246,302,500,300],[0,482,500,300],[1246,0,500,300],[874,986,290,380],[1166,986,280,370],[582,906,290,380],[1448,986,280,370],[288,906,292,386],[0,784,286,406],[342,0,400,400],[1004,604,380,380],[1386,604,380,380],[0,0,340,480]]},
		{name:"storage_atlas_12", frames: [[886,328,300,300],[0,352,300,300],[0,0,290,350],[292,0,290,350],[584,0,380,260],[302,564,300,300],[1248,302,300,300],[584,262,300,300],[1248,0,300,300],[966,0,280,326],[252,866,260,320],[776,972,260,320],[514,906,260,320],[1550,342,250,340],[1188,604,250,340],[604,564,250,340],[1440,684,260,320],[1108,946,260,320],[1370,1006,260,320],[856,630,250,340],[0,654,250,340],[1550,0,250,340],[0,996,240,330]]},
		{name:"storage_atlas_13", frames: [[1480,1052,190,240],[1484,757,190,240],[186,1104,190,260],[570,1128,190,240],[414,857,190,260],[419,614,190,240],[1046,343,190,260],[762,1128,190,240],[1070,605,190,260],[606,866,190,260],[990,1086,190,240],[378,1119,190,260],[798,866,190,260],[1238,343,190,260],[622,332,210,260],[410,332,210,280],[622,594,200,270],[834,343,210,260],[198,332,210,280],[0,654,200,270],[1483,502,188,253],[824,605,244,205],[1584,0,179,267],[1211,1052,267,176],[1405,0,177,278],[990,867,219,217],[202,857,210,245],[202,614,215,241],[1210,0,193,341],[0,926,184,275],[0,332,196,320],[1262,605,219,223],[1262,830,220,220],[1430,280,220,220],[0,0,240,330],[242,0,240,330],[484,0,240,330],[726,0,240,330],[968,0,240,330]]},
		{name:"storage_atlas_14", frames: [[1389,898,190,190],[1197,898,190,190],[1314,0,180,250],[1496,0,180,250],[0,242,180,250],[182,242,180,250],[364,242,180,250],[546,242,180,250],[728,252,180,250],[768,0,180,250],[910,252,180,250],[0,0,190,240],[1092,252,180,250],[950,0,180,250],[192,0,190,240],[1132,0,180,250],[384,0,190,240],[1456,252,180,250],[576,0,190,240],[1274,252,180,250],[352,1090,120,273],[0,906,119,294],[576,1070,127,271],[1638,252,144,295],[1608,549,158,250],[1002,903,190,190],[384,898,190,190],[1002,706,193,195],[0,494,192,218],[800,504,200,200],[194,494,200,200],[1002,504,200,200],[396,494,200,200],[1204,504,200,200],[598,504,200,200],[800,706,200,200],[1406,504,200,200],[598,706,200,200],[396,696,200,200],[194,696,200,200],[121,1090,229,144],[576,908,220,160],[1197,706,190,190],[798,908,186,188],[1581,993,194,178],[1389,706,190,190],[0,714,190,190],[1581,801,190,190],[1194,1090,180,180],[1376,1090,180,180],[192,898,190,190],[705,1098,360,90],[1429,1272,360,90],[705,1190,360,90],[1067,1272,360,90],[705,1282,360,90]]},
		{name:"storage_atlas_15", frames: [[0,274,180,180],[0,92,180,180],[0,629,103,299],[1709,0,84,270],[0,930,111,267],[764,897,138,201],[626,1071,100,220],[1188,1213,134,170],[815,713,155,182],[972,701,155,182],[1129,712,155,182],[658,713,155,182],[344,655,155,182],[815,529,155,182],[1349,172,170,170],[1521,172,170,170],[707,173,170,170],[344,299,170,170],[1005,161,170,170],[1177,172,170,170],[1286,712,155,182],[285,839,155,182],[1443,712,155,182],[501,676,155,182],[1600,712,155,182],[442,860,155,182],[1330,1020,140,180],[1472,1020,140,180],[904,1040,140,180],[1188,1031,140,180],[1614,1020,140,180],[1046,1040,140,180],[182,92,160,200],[904,897,190,141],[344,136,189,161],[599,897,163,172],[830,0,173,171],[599,0,229,132],[362,0,235,134],[1096,896,195,133],[1458,344,155,182],[285,1044,280,80],[344,1126,280,80],[1519,1202,180,130],[516,308,155,182],[673,345,155,182],[1144,344,155,182],[830,345,155,182],[1301,344,155,182],[987,333,155,182],[344,1208,220,80],[172,1317,340,80],[189,294,120,190],[728,1100,150,142],[0,456,187,171],[1330,1202,187,132],[1005,0,186,159],[879,173,120,150],[728,1244,120,150],[189,486,140,140],[1615,528,155,182],[1615,344,155,182],[1458,528,155,182],[344,471,155,182],[501,492,155,182],[987,517,155,182],[658,529,155,182],[1144,528,155,182],[1301,528,155,182],[535,136,170,170],[1365,0,170,170],[113,801,170,170],[1537,0,170,170],[0,1199,170,170],[105,629,170,170],[113,973,170,170],[172,1145,170,170],[1193,0,170,170],[0,0,360,90],[880,1222,290,60],[1293,896,420,60],[850,1284,290,60],[1293,958,420,60]]},
		{name:"storage_atlas_16", frames: [[610,368,120,120],[488,368,120,120],[732,368,120,120],[128,745,40,40],[1540,735,50,50],[1461,326,120,120],[1755,0,25,275],[0,477,65,159],[1066,388,118,92],[985,626,85,83],[1735,299,44,272],[1034,0,59,282],[888,720,90,50],[980,720,90,50],[366,294,120,120],[1339,326,120,120],[1613,299,120,120],[1217,325,120,120],[1556,681,123,52],[321,508,117,48],[128,702,117,41],[1556,621,128,58],[1357,0,157,99],[906,468,145,72],[1148,594,142,59],[142,646,125,54],[551,592,126,70],[1072,705,109,44],[269,701,124,43],[1210,686,135,48],[0,697,126,50],[0,646,140,49],[1072,655,136,48],[750,700,136,45],[269,646,127,53],[443,490,147,70],[1285,62,36,36],[854,368,36,36],[559,746,36,36],[892,368,36,36],[246,746,36,36],[1247,62,36,36],[322,746,36,36],[795,552,36,36],[521,746,36,36],[1309,736,36,36],[170,745,36,36],[284,746,36,36],[208,745,36,36],[1668,0,32,32],[1668,34,32,32],[360,746,32,32],[1323,62,32,32],[1668,68,32,32],[750,747,32,32],[578,172,32,32],[578,206,32,32],[1782,0,18,18],[1782,20,18,18],[1782,80,18,18],[1782,100,18,18],[1782,40,18,18],[1782,60,18,18],[1613,204,84,87],[916,42,114,104],[1755,696,40,42],[629,693,119,53],[0,396,137,79],[944,148,80,124],[1369,204,120,120],[1186,448,180,60],[1368,448,180,60],[139,396,180,60],[1550,448,180,60],[854,406,180,60],[139,458,180,60],[1095,0,260,60],[67,477,40,40],[612,144,150,100],[764,144,150,100],[0,172,150,100],[1095,164,150,100],[152,172,150,100],[304,172,150,100],[764,42,150,100],[1516,0,150,100],[612,42,150,100],[1095,62,150,100],[1247,101,150,100],[1399,102,150,100],[1551,102,150,100],[456,172,120,120],[1247,203,120,120],[102,0,100,170],[204,0,100,170],[0,0,100,170],[306,0,100,170],[408,0,100,170],[510,0,100,170],[488,294,60,60],[1347,686,76,84],[770,592,82,106],[471,604,74,96],[1639,510,88,109],[1681,696,72,84],[906,626,77,92],[1476,594,78,101],[679,592,89,99],[1467,697,71,77],[443,416,40,55],[1729,573,40,43],[1782,120,10,11],[398,646,69,94],[1686,621,100,73],[795,490,57,60],[694,490,99,100],[916,148,23,38],[784,747,31,31],[469,702,50,50],[1425,686,40,147],[854,468,50,210],[1703,0,50,297],[1491,204,120,120],[700,246,120,120],[1384,594,90,90],[1292,594,90,90],[1755,740,40,40],[906,542,40,40],[948,542,40,40],[1225,736,40,40],[1592,735,40,40],[990,542,40,40],[1634,735,40,40],[1183,736,40,40],[1267,736,40,40],[395,742,40,40],[822,246,120,120],[547,664,80,80],[321,416,120,90],[1095,266,120,120],[0,274,120,120],[578,246,120,120],[122,274,120,120],[244,274,120,120],[944,284,120,120],[1155,510,240,40],[1397,510,240,40],[309,562,240,40],[1155,552,240,40],[67,520,240,40],[1397,552,240,40],[906,584,240,40],[67,562,240,40],[269,604,200,40],[67,604,200,40],[592,490,100,100],[1053,482,100,100],[612,0,420,40]]}
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
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_6_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_7_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_8_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
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
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.copyright_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.current_location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.current_location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.current_location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.decor_location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.decor_location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.decor_location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.dress_10_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dress_10_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dress_11_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.dress_12_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.dress_13_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.dress_14_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.dress_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dress_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.dress_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.dress_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.dress_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.dress_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.dress_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.dress_3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.dress_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.dress_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.dress_4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.dress_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.dress_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.dress_5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.dress_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.dress_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.dress_6_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.dress_7_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.dress_7_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.dress_7_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.dress_8_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.dress_8_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.dress_8_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.dress_9_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.dress_9_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.dress_check_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.dress_check_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.dress_check_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.dress_check_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.dress_check_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.dress_check_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.earring10_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.earring11_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.earring12_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.earring13_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.earring14_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.earring15_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.earring16_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.earring17_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.earring18_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.earring1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.earring2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.earring3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.earring4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.earring5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.earring6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.earring7_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.earring8_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.earring9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_check_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.eyes_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.eyes_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.eyes_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.eyes_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.eyes_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.eyes_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.eyes_check_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.flash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.flash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.flash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.flash_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.forward_icon_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.fringe10_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.fringe7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.fringe8_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.fringe9_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.glasses10_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.glasses11_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.glasses12_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.glasses13_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.glasses14_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.glasses15_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.glasses16_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.glasses17_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.glasses18_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.glasses1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.glasses2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.glasses3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.glasses4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.glasses5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.glasses6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.glasses7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.glasses8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.glasses9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.glitter_10_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.glitter_11_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.glitter_12_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.glitter_13_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.glitter_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.glitter_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.glitter_3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.glitter_4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.glitter_5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.glitter_6_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.glitter_7_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.glitter_8_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.glitter_9_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.gravity_big_explosion_8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.hair0_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hair10_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.hair7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hair8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hair9_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_10_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_11_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_7_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_8_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_9_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_check_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_check_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hand_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.hat1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hat2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hat3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hat4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hat5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.hat6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress_0_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress_10_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress_11_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress_12_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress_13_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress_14_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress_15_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress_16_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress_17_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress_18_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress_19_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress_20_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress_21_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress_22_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress_23_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress_24_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress_25_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress_26_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress_27_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress_28_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress_29_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress_30_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress_31_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress_32_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress_3_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress_4_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress_5_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress_6_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress_7_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress_8_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero_dress_9_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero_head_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_de_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_es_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.indicator_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.language_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.language_de_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.language_en_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.language_es_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.language_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.language_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.language_id_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.language_it_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.language_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.language_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.language_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.language_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.language_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.languages_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.languages_1_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.languages_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.languages_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.lips_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.lips_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.lips_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.lips_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.lips_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.lips_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.location_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.location_0_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.location_0_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.location_0_7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.location_0_8_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.location_0_9_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.location_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.location_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.location_1_7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.location_1_8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.location_1_9_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.location_progress_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.makeup_check_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.mic1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.mic2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.mic3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.mic4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.mic5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.mic6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.mic7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.mic8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.mic9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(44);
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



(lib.nav_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.nav_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.notes_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.notes_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.shadows7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.shadows8_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.shadows9_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.shadows_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.shadows_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.shadows_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.shadows_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.shadows_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.shadows_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.shadows_7_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.shadows_8_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.shadows_9_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.shadows_check_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.skip_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_style_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.title_style_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.title_style_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.title_style_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.title_style_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.title_style_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.track_move_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(155);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(156);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(157);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_3_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(82);
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


(lib.wardrobe_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_4_2_img();
	this.instance.setTransform(-210,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-30,420,60);
p.frameBounds = [rect];


(lib.wardrobe_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_3_4_img();
	this.instance.setTransform(-145,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-30,290,60);
p.frameBounds = [rect];


(lib.wardrobe_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_3_2_img();
	this.instance.setTransform(-210,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-30,420,60);
p.frameBounds = [rect];


(lib.wardrobe_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_4_img();
	this.instance.setTransform(-145,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-30,290,60);
p.frameBounds = [rect];


(lib.wardrobe_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_2_img();
	this.instance.setTransform(-210,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-20,420,40);
p.frameBounds = [rect];


(lib.wardrobe_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_5_img();
	this.instance.setTransform(-170,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-240,340,480);
p.frameBounds = [rect];


(lib.wardrobe_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_4_img();
	this.instance.setTransform(-145,-310);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-310,290,620);
p.frameBounds = [rect];


(lib.wardrobe_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_3_img();
	this.instance.setTransform(-210,-310);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-310,420,620);
p.frameBounds = [rect];


(lib.wardrobe_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_2_img();
	this.instance.setTransform(-210,-310);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-310,420,620);
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


(lib.shadows_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadows_check_1_1_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
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


(lib.object_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwjQkQm4m3AAptQAApsG4m4QG3m2JsgBQJtABG3G2QG4G4AAJsQAAJtm4G3Qm3G4ptAAQpsAAm3m4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.notes_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.notes_2_img();
	this.instance.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.notes_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.notes_1_img();
	this.instance.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.microphone_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mic9_img();
	this.instance.setTransform(35,-39,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AmOHCIAAuDIMdAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-45,80,90);
p.frameBounds = [rect];


(lib.microphone_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mic8_img();
	this.instance.setTransform(44,-50,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzImIAAxLIPnAAIAARLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-55,100,110);
p.frameBounds = [rect];


(lib.microphone_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mic7_img();
	this.instance.setTransform(39,-51,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBI/IAAx9IODAAIAAR9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-57.5,90,115);
p.frameBounds = [rect];


(lib.microphone_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mic6_img();
	this.instance.setTransform(38,-46,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBIlIAAxJIODAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-55,90,110);
p.frameBounds = [rect];


(lib.microphone_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mic5_img();
	this.instance.setTransform(36,-42,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AmnHzIAAvlINPAAIAAPlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.5,-50,85,100);
p.frameBounds = [rect];


(lib.microphone_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mic4_img();
	this.instance.setTransform(44,-55,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AokJYIAAyvIRJAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-60,110,120);
p.frameBounds = [rect];


(lib.microphone_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mic3_img();
	this.instance.setTransform(37,-48,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBIlIAAxJIODAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-55,90,110);
p.frameBounds = [rect];


(lib.microphone_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mic2_img();
	this.instance.setTransform(41,-53,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnBI/IAAx9IODAAIAAR9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-57.5,90,115);
p.frameBounds = [rect];


(lib.microphone_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mic1_img();
	this.instance.setTransform(38,-42,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AnzH0IAAvnIPnAAIAAPng");
	this.shape.setTransform(0,-2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-52,100,100);
p.frameBounds = [rect];


(lib.makeup_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.makeup_check_1_1_img();
	this.instance.setTransform(-60,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-95,120,190);
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


(lib.hero3_shadows_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.shadows4_img();
	this.instance.setTransform(-77.5,-91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.5,-91,155,182);
p.frameBounds = [rect];


(lib.hero3_shadows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadows1_img();
	this.instance.setTransform(-77.5,-91);

	this.instance_1 = new lib.shadows2_img();
	this.instance_1.setTransform(-77.5,-91);

	this.instance_2 = new lib.shadows3_img();
	this.instance_2.setTransform(-77.5,-91);

	this.instance_3 = new lib.shadows4_img();
	this.instance_3.setTransform(-77.5,-91);

	this.instance_4 = new lib.shadows5_img();
	this.instance_4.setTransform(-77.5,-91);

	this.instance_5 = new lib.shadows6_img();
	this.instance_5.setTransform(-77.5,-91);

	this.instance_6 = new lib.shadows7_img();
	this.instance_6.setTransform(-77.5,-91);

	this.instance_7 = new lib.shadows8_img();
	this.instance_7.setTransform(-77.5,-91);

	this.instance_8 = new lib.shadows9_img();
	this.instance_8.setTransform(-77.5,-91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.5,-91,155,182);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.hero3_mic_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.mic1_img();
	this.instance.setTransform(-38,-42);

	this.instance_1 = new lib.mic2_img();
	this.instance_1.setTransform(-40.5,-56);

	this.instance_2 = new lib.mic3_img();
	this.instance_2.setTransform(-46,-59.5);

	this.instance_3 = new lib.mic4_img();
	this.instance_3.setTransform(-42,-55.5);

	this.instance_4 = new lib.mic5_img();
	this.instance_4.setTransform(-31.5,-39);

	this.instance_5 = new lib.mic6_img();
	this.instance_5.setTransform(-37,-47);

	this.instance_6 = new lib.mic7_img();
	this.instance_6.setTransform(-39.5,-52);

	this.instance_7 = new lib.mic8_img();
	this.instance_7.setTransform(-44,-50);

	this.instance_8 = new lib.mic9_img();
	this.instance_8.setTransform(-37.5,-42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-42,76,84);
p.frameBounds = [rect, new cjs.Rectangle(-40.5,-56,82,106), new cjs.Rectangle(-46,-59.5,74,96), new cjs.Rectangle(-42,-55.5,88,109), new cjs.Rectangle(-31.5,-39,72,84), new cjs.Rectangle(-37,-47,77,92), new cjs.Rectangle(-39.5,-52,78,101), new cjs.Rectangle(-44,-50,89,99), new cjs.Rectangle(-37.5,-42,71,77), null];


(lib.hero3_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lips1_img();
	this.instance.setTransform(-77.5,-91);

	this.instance_1 = new lib.lips2_img();
	this.instance_1.setTransform(-77.5,-91);

	this.instance_2 = new lib.lips3_img();
	this.instance_2.setTransform(-77.5,-91);

	this.instance_3 = new lib.lips4_img();
	this.instance_3.setTransform(-77.5,-91);

	this.instance_4 = new lib.lips5_img();
	this.instance_4.setTransform(-77.5,-91);

	this.instance_5 = new lib.lips6_img();
	this.instance_5.setTransform(-77.5,-91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.5,-91,155,182);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero3_hat_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hat1_img();
	this.instance.setTransform(-114.5,-72);

	this.instance_1 = new lib.hat2_img();
	this.instance_1.setTransform(-109.4,-67.5);

	this.instance_2 = new lib.hat3_img();
	this.instance_2.setTransform(-114.4,-65.5);

	this.instance_3 = new lib.hat4_img();
	this.instance_3.setTransform(-94.4,-62.5);

	this.instance_4 = new lib.hat5_img();
	this.instance_4.setTransform(-53.9,-11.5);

	this.instance_5 = new lib.hat6_img();
	this.instance_5.setTransform(-58.9,-17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.5,-72,229,144);
p.frameBounds = [rect, new cjs.Rectangle(-109.4,-67.5,229,132), new cjs.Rectangle(-114.4,-65.5,235,134), new cjs.Rectangle(-94.4,-62.5,195,133), new cjs.Rectangle(-53.9,-11.5,119,53), new cjs.Rectangle(-58.9,-17.5,137,79), null];


(lib.hero3_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hair0_img();
	this.instance.setTransform(-108,-71);

	this.instance_1 = new lib.hair1_img();
	this.instance_1.setTransform(-82.9,-76.5);

	this.instance_2 = new lib.hair2_img();
	this.instance_2.setTransform(29.5,38.5);

	this.instance_3 = new lib.hair3_img();
	this.instance_3.setTransform(-82,-49.5);

	this.instance_4 = new lib.hair4_img();
	this.instance_4.setTransform(-99.4,-57.5);

	this.instance_5 = new lib.hair5_img();
	this.instance_5.setTransform(-141.5,-78);

	this.instance_6 = new lib.hair6_img();
	this.instance_6.setTransform(-16.9,45.5);

	this.instance_7 = new lib.hair7_img();
	this.instance_7.setTransform(-105,-86.5);

	this.instance_8 = new lib.hair8_img();
	this.instance_8.setTransform(-137.9,-55);

	this.instance_9 = new lib.hair9_img();
	this.instance_9.setTransform(-84.4,-40.5);

	this.instance_10 = new lib.hair10_img();
	this.instance_10.setTransform(-136.9,-75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108,-71,215,241);
p.frameBounds = [rect, new cjs.Rectangle(-82.9,-76.5,193,341), new cjs.Rectangle(29.5,38.5,84,87), new cjs.Rectangle(-82,-49.5,184,275), new cjs.Rectangle(-99.4,-57.5,196,320), new cjs.Rectangle(-141.5,-78,280,326), new cjs.Rectangle(-16.9,45.5,114,104), new cjs.Rectangle(-105,-86.5,219,223), new cjs.Rectangle(-137.9,-55,286,406), new cjs.Rectangle(-84.4,-40.5,173,171), new cjs.Rectangle(-136.9,-75,292,386)];


(lib.hero3_glasses_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.glasses13_img();
	this.instance.setTransform(-65.5,-28);

	this.instance_1 = new lib.glasses14_img();
	this.instance_1.setTransform(-78.5,-61);

	this.instance_2 = new lib.glasses15_img();
	this.instance_2.setTransform(-72.5,-36);

	this.instance_3 = new lib.glasses16_img();
	this.instance_3.setTransform(-71.5,-38);

	this.instance_4 = new lib.glasses17_img();
	this.instance_4.setTransform(-62.5,-26);

	this.instance_5 = new lib.glasses18_img();
	this.instance_5.setTransform(-62.5,-42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.5,-28,128,58);
p.frameBounds = [rect, new cjs.Rectangle(-78.5,-61,157,99), new cjs.Rectangle(-72.5,-36,145,72), new cjs.Rectangle(-71.5,-38,142,59), new cjs.Rectangle(-62.5,-26,125,54), new cjs.Rectangle(-62.5,-42,126,70), null];


(lib.hero3_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.fringe0_img();
	this.instance.setTransform(-95,-70.5);

	this.instance_1 = new lib.fringe1_img();
	this.instance_1.setTransform(-82.4,-75.5);

	this.instance_2 = new lib.fringe2_img();
	this.instance_2.setTransform(-80.9,-76);

	this.instance_3 = new lib.fringe3_img();
	this.instance_3.setTransform(-72.4,-70.5);

	this.instance_4 = new lib.fringe4_img();
	this.instance_4.setTransform(-88.9,-72);

	this.instance_5 = new lib.fringe5_img();
	this.instance_5.setTransform(-128.4,-78);

	this.instance_6 = new lib.fringe6_img();
	this.instance_6.setTransform(-79.9,-82);

	this.instance_7 = new lib.fringe7_img();
	this.instance_7.setTransform(-104.9,-86);

	this.instance_8 = new lib.fringe8_img();
	this.instance_8.setTransform(-102.4,-75.5);

	this.instance_9 = new lib.fringe9_img();
	this.instance_9.setTransform(-94.9,-72.5);

	this.instance_10 = new lib.fringe10_img();
	this.instance_10.setTransform(-117.9,-75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-70.5,190,141);
p.frameBounds = [rect, new cjs.Rectangle(-82.4,-75.5,193,195), new cjs.Rectangle(-80.9,-76,189,161), new cjs.Rectangle(-72.4,-70.5,163,172), new cjs.Rectangle(-88.9,-72,179,267), new cjs.Rectangle(-128.4,-78,267,176), new cjs.Rectangle(-79.9,-82,177,278), new cjs.Rectangle(-104.9,-86,219,217), new cjs.Rectangle(-102.4,-75.5,210,245), new cjs.Rectangle(-94.9,-72.5,192,218), new cjs.Rectangle(-117.9,-75,244,205)];


(lib.hero3_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.eyes1_img();
	this.instance.setTransform(-77.5,-91);

	this.instance_1 = new lib.eyes2_img();
	this.instance_1.setTransform(-77.5,-91);

	this.instance_2 = new lib.eyes3_img();
	this.instance_2.setTransform(-77.5,-91);

	this.instance_3 = new lib.eyes4_img();
	this.instance_3.setTransform(-77.5,-91);

	this.instance_4 = new lib.eyes5_img();
	this.instance_4.setTransform(-77.5,-91);

	this.instance_5 = new lib.eyes6_img();
	this.instance_5.setTransform(-77.5,-91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.5,-91,155,182);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero3_eyebrows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.eyebrows1_img();
	this.instance.setTransform(-77.5,-91);

	this.instance_1 = new lib.eyebrows2_img();
	this.instance_1.setTransform(-77.5,-91);

	this.instance_2 = new lib.eyebrows3_img();
	this.instance_2.setTransform(-77.5,-91);

	this.instance_3 = new lib.eyebrows4_img();
	this.instance_3.setTransform(-77.5,-91);

	this.instance_4 = new lib.eyebrows5_img();
	this.instance_4.setTransform(-77.5,-91);

	this.instance_5 = new lib.eyebrows6_img();
	this.instance_5.setTransform(-77.5,-91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.5,-91,155,182);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero3_earringsb_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.earring13_img();
	this.instance.setTransform(46.5,-28.3,0.3,0.3);

	this.instance_1 = new lib.earring14_img();
	this.instance_1.setTransform(43.5,-29.3,0.3,0.3);

	this.instance_2 = new lib.earring15_img();
	this.instance_2.setTransform(58.5,-27.3,0.3,0.3);

	this.instance_3 = new lib.earring16_img();
	this.instance_3.setTransform(31.5,-29.3,0.3,0.3);

	this.instance_4 = new lib.earring17_img();
	this.instance_4.setTransform(46.5,-34.3,0.3,0.3);

	this.instance_5 = new lib.earring18_img();
	this.instance_5.setTransform(45.5,-26.3,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(46.5,-28.3,25.2,81);
p.frameBounds = [rect, new cjs.Rectangle(43.5,-29.3,33.3,80.1), new cjs.Rectangle(58.5,-27.3,7.5,82.5), new cjs.Rectangle(31.5,-29.3,56.4,75.9), new cjs.Rectangle(46.5,-34.3,38.1,81.3), new cjs.Rectangle(45.5,-26.3,41.4,60.3), null];


(lib.hero3_earrings_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.earring13_img();
	this.instance.setTransform(46.5,-28.3,0.3,0.3);

	this.instance_1 = new lib.earring14_img();
	this.instance_1.setTransform(43.5,-29.3,0.3,0.3);

	this.instance_2 = new lib.earring15_img();
	this.instance_2.setTransform(58.5,-27.3,0.3,0.3);

	this.instance_3 = new lib.earring16_img();
	this.instance_3.setTransform(31.5,-29.3,0.3,0.3);

	this.instance_4 = new lib.earring17_img();
	this.instance_4.setTransform(46.5,-34.3,0.3,0.3);

	this.instance_5 = new lib.earring18_img();
	this.instance_5.setTransform(45.5,-26.3,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(46.5,-28.3,25.2,81);
p.frameBounds = [rect, new cjs.Rectangle(43.5,-29.3,33.3,80.1), new cjs.Rectangle(58.5,-27.3,7.5,82.5), new cjs.Rectangle(31.5,-29.3,56.4,75.9), new cjs.Rectangle(46.5,-34.3,38.1,81.3), new cjs.Rectangle(45.5,-26.3,41.4,60.3), null];


(lib.hero3_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_dress_19_img();
	this.instance.setTransform(-218,-234.5);

	this.instance_1 = new lib.hero_dress_20_img();
	this.instance_1.setTransform(-218,-234.5);

	this.instance_2 = new lib.hero_dress_21_img();
	this.instance_2.setTransform(-218,-234.5);

	this.instance_3 = new lib.hero_dress_22_img();
	this.instance_3.setTransform(-218,-234.5);

	this.instance_4 = new lib.hero_dress_23_img();
	this.instance_4.setTransform(-218,-234.5);

	this.instance_5 = new lib.hero_dress_24_img();
	this.instance_5.setTransform(-218,-234.5);

	this.instance_6 = new lib.hero_dress_25_img();
	this.instance_6.setTransform(-218,-234.5);

	this.instance_7 = new lib.hero_dress_26_img();
	this.instance_7.setTransform(-218,-234.5);

	this.instance_8 = new lib.hero_dress_27_img();
	this.instance_8.setTransform(-218,-234.5);

	this.instance_9 = new lib.hero_dress_28_img();
	this.instance_9.setTransform(-218,-234.5);

	this.instance_10 = new lib.hero_dress_29_img();
	this.instance_10.setTransform(-218,-234.5);

	this.instance_11 = new lib.hero_dress_30_img();
	this.instance_11.setTransform(-218,-234.5);

	this.instance_12 = new lib.hero_dress_31_img();
	this.instance_12.setTransform(-218,-234.5);

	this.instance_13 = new lib.hero_dress_32_img();
	this.instance_13.setTransform(-218,-234.5);

	this.instance_14 = new lib.hero_dress_0_img();
	this.instance_14.setTransform(-218,-234.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-218,-234.5,436,469);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero2_shadows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadows1_img();
	this.instance.setTransform(-77.5,-91);

	this.instance_1 = new lib.shadows2_img();
	this.instance_1.setTransform(-77.5,-91);

	this.instance_2 = new lib.shadows3_img();
	this.instance_2.setTransform(-77.5,-91);

	this.instance_3 = new lib.shadows4_img();
	this.instance_3.setTransform(-77.5,-91);

	this.instance_4 = new lib.shadows5_img();
	this.instance_4.setTransform(-77.5,-91);

	this.instance_5 = new lib.shadows6_img();
	this.instance_5.setTransform(-77.5,-91);

	this.instance_6 = new lib.shadows7_img();
	this.instance_6.setTransform(-77.5,-91);

	this.instance_7 = new lib.shadows8_img();
	this.instance_7.setTransform(-77.5,-91);

	this.instance_8 = new lib.shadows9_img();
	this.instance_8.setTransform(-77.5,-91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.5,-91,155,182);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.hero2_mic_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.mic1_img();
	this.instance.setTransform(-38,-42);

	this.instance_1 = new lib.mic2_img();
	this.instance_1.setTransform(-40.5,-56);

	this.instance_2 = new lib.mic3_img();
	this.instance_2.setTransform(-46,-59.5);

	this.instance_3 = new lib.mic4_img();
	this.instance_3.setTransform(-42,-55.5);

	this.instance_4 = new lib.mic5_img();
	this.instance_4.setTransform(-31.5,-39);

	this.instance_5 = new lib.mic6_img();
	this.instance_5.setTransform(-37,-47);

	this.instance_6 = new lib.mic7_img();
	this.instance_6.setTransform(-39.5,-52);

	this.instance_7 = new lib.mic8_img();
	this.instance_7.setTransform(-44,-50);

	this.instance_8 = new lib.mic9_img();
	this.instance_8.setTransform(-37.5,-42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-42,76,84);
p.frameBounds = [rect, new cjs.Rectangle(-40.5,-56,82,106), new cjs.Rectangle(-46,-59.5,74,96), new cjs.Rectangle(-42,-55.5,88,109), new cjs.Rectangle(-31.5,-39,72,84), new cjs.Rectangle(-37,-47,77,92), new cjs.Rectangle(-39.5,-52,78,101), new cjs.Rectangle(-44,-50,89,99), new cjs.Rectangle(-37.5,-42,71,77), null];


(lib.hero2_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lips1_img();
	this.instance.setTransform(-77.5,-91);

	this.instance_1 = new lib.lips2_img();
	this.instance_1.setTransform(-77.5,-91);

	this.instance_2 = new lib.lips3_img();
	this.instance_2.setTransform(-77.5,-91);

	this.instance_3 = new lib.lips4_img();
	this.instance_3.setTransform(-77.5,-91);

	this.instance_4 = new lib.lips5_img();
	this.instance_4.setTransform(-77.5,-91);

	this.instance_5 = new lib.lips6_img();
	this.instance_5.setTransform(-77.5,-91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.5,-91,155,182);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_hat_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hat1_img();
	this.instance.setTransform(-114.5,-72);

	this.instance_1 = new lib.hat2_img();
	this.instance_1.setTransform(-109.4,-67.5);

	this.instance_2 = new lib.hat3_img();
	this.instance_2.setTransform(-114.4,-65.5);

	this.instance_3 = new lib.hat4_img();
	this.instance_3.setTransform(-94.4,-62.5);

	this.instance_4 = new lib.hat5_img();
	this.instance_4.setTransform(-53.9,-11.5);

	this.instance_5 = new lib.hat6_img();
	this.instance_5.setTransform(-58.9,-17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.5,-72,229,144);
p.frameBounds = [rect, new cjs.Rectangle(-109.4,-67.5,229,132), new cjs.Rectangle(-114.4,-65.5,235,134), new cjs.Rectangle(-94.4,-62.5,195,133), new cjs.Rectangle(-53.9,-11.5,119,53), new cjs.Rectangle(-58.9,-17.5,137,79), null];


(lib.hero2_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hair0_img();
	this.instance.setTransform(-108,-71);

	this.instance_1 = new lib.hair1_img();
	this.instance_1.setTransform(-82.9,-76.5);

	this.instance_2 = new lib.hair2_img();
	this.instance_2.setTransform(29.5,38.5);

	this.instance_3 = new lib.hair3_img();
	this.instance_3.setTransform(-82,-49.5);

	this.instance_4 = new lib.hair4_img();
	this.instance_4.setTransform(-99.4,-57.5);

	this.instance_5 = new lib.hair5_img();
	this.instance_5.setTransform(-141.5,-78);

	this.instance_6 = new lib.hair6_img();
	this.instance_6.setTransform(-16.9,45.5);

	this.instance_7 = new lib.hair7_img();
	this.instance_7.setTransform(-105,-86.5);

	this.instance_8 = new lib.hair8_img();
	this.instance_8.setTransform(-137.9,-55);

	this.instance_9 = new lib.hair9_img();
	this.instance_9.setTransform(-84.4,-40.5);

	this.instance_10 = new lib.hair10_img();
	this.instance_10.setTransform(-136.9,-75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108,-71,215,241);
p.frameBounds = [rect, new cjs.Rectangle(-82.9,-76.5,193,341), new cjs.Rectangle(29.5,38.5,84,87), new cjs.Rectangle(-82,-49.5,184,275), new cjs.Rectangle(-99.4,-57.5,196,320), new cjs.Rectangle(-141.5,-78,280,326), new cjs.Rectangle(-16.9,45.5,114,104), new cjs.Rectangle(-105,-86.5,219,223), new cjs.Rectangle(-137.9,-55,286,406), new cjs.Rectangle(-84.4,-40.5,173,171), new cjs.Rectangle(-136.9,-75,292,386)];


(lib.hero2_glasses_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.glasses7_img();
	this.instance.setTransform(-68.5,-22);

	this.instance_1 = new lib.glasses8_img();
	this.instance_1.setTransform(-64.5,-25);

	this.instance_2 = new lib.glasses9_img();
	this.instance_2.setTransform(-64.5,-42);

	this.instance_3 = new lib.glasses10_img();
	this.instance_3.setTransform(-63.5,-26);

	this.instance_4 = new lib.glasses11_img();
	this.instance_4.setTransform(-59.5,-22);

	this.instance_5 = new lib.glasses12_img();
	this.instance_5.setTransform(-59.5,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.5,-22,136,45);
p.frameBounds = [rect, new cjs.Rectangle(-64.5,-25,127,53), new cjs.Rectangle(-64.5,-42,147,70), new cjs.Rectangle(-63.5,-26,123,52), new cjs.Rectangle(-59.5,-22,117,48), new cjs.Rectangle(-59.5,-20,117,41), null];


(lib.hero2_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.fringe0_img();
	this.instance.setTransform(-95,-70.5);

	this.instance_1 = new lib.fringe1_img();
	this.instance_1.setTransform(-82.4,-75.5);

	this.instance_2 = new lib.fringe2_img();
	this.instance_2.setTransform(-80.9,-76);

	this.instance_3 = new lib.fringe3_img();
	this.instance_3.setTransform(-72.4,-70.5);

	this.instance_4 = new lib.fringe4_img();
	this.instance_4.setTransform(-88.9,-72);

	this.instance_5 = new lib.fringe5_img();
	this.instance_5.setTransform(-128.4,-78);

	this.instance_6 = new lib.fringe6_img();
	this.instance_6.setTransform(-79.9,-82);

	this.instance_7 = new lib.fringe7_img();
	this.instance_7.setTransform(-104.9,-86);

	this.instance_8 = new lib.fringe8_img();
	this.instance_8.setTransform(-102.4,-75.5);

	this.instance_9 = new lib.fringe9_img();
	this.instance_9.setTransform(-94.9,-72.5);

	this.instance_10 = new lib.fringe10_img();
	this.instance_10.setTransform(-117.9,-75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-70.5,190,141);
p.frameBounds = [rect, new cjs.Rectangle(-82.4,-75.5,193,195), new cjs.Rectangle(-80.9,-76,189,161), new cjs.Rectangle(-72.4,-70.5,163,172), new cjs.Rectangle(-88.9,-72,179,267), new cjs.Rectangle(-128.4,-78,267,176), new cjs.Rectangle(-79.9,-82,177,278), new cjs.Rectangle(-104.9,-86,219,217), new cjs.Rectangle(-102.4,-75.5,210,245), new cjs.Rectangle(-94.9,-72.5,192,218), new cjs.Rectangle(-117.9,-75,244,205)];


(lib.hero2_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.eyes1_img();
	this.instance.setTransform(-77.5,-91);

	this.instance_1 = new lib.eyes2_img();
	this.instance_1.setTransform(-77.5,-91);

	this.instance_2 = new lib.eyes3_img();
	this.instance_2.setTransform(-77.5,-91);

	this.instance_3 = new lib.eyes4_img();
	this.instance_3.setTransform(-77.5,-91);

	this.instance_4 = new lib.eyes5_img();
	this.instance_4.setTransform(-77.5,-91);

	this.instance_5 = new lib.eyes6_img();
	this.instance_5.setTransform(-77.5,-91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.5,-91,155,182);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_eyebrows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.eyebrows1_img();
	this.instance.setTransform(-77.5,-91);

	this.instance_1 = new lib.eyebrows2_img();
	this.instance_1.setTransform(-77.5,-91);

	this.instance_2 = new lib.eyebrows3_img();
	this.instance_2.setTransform(-77.5,-91);

	this.instance_3 = new lib.eyebrows4_img();
	this.instance_3.setTransform(-77.5,-91);

	this.instance_4 = new lib.eyebrows5_img();
	this.instance_4.setTransform(-77.5,-91);

	this.instance_5 = new lib.eyebrows6_img();
	this.instance_5.setTransform(-77.5,-91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.5,-91,155,182);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_earringsb_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.earring7_img();
	this.instance.setTransform(41.5,-26.3,0.3,0.3);

	this.instance_1 = new lib.earring8_img();
	this.instance_1.setTransform(37.5,-30.3,0.3,0.3);

	this.instance_2 = new lib.earring9_img();
	this.instance_2.setTransform(52.5,-26.3,0.3,0.3);

	this.instance_3 = new lib.earring10_img();
	this.instance_3.setTransform(43.5,-25.8,0.3,0.3);

	this.instance_4 = new lib.earring11_img();
	this.instance_4.setTransform(41.5,-25.8,0.3,0.3);

	this.instance_5 = new lib.earring12_img();
	this.instance_5.setTransform(45.5,-29.8,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(41.5,-26.3,43.2,88.5);
p.frameBounds = [rect, new cjs.Rectangle(37.5,-30.3,47.4,75), new cjs.Rectangle(52.5,-26.3,17.7,84.6), new cjs.Rectangle(43.5,-25.8,36,81.9), new cjs.Rectangle(41.5,-25.8,35.7,88.2), new cjs.Rectangle(45.5,-29.8,30.9,89.7), null];


(lib.hero2_earrings_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.earring7_img();
	this.instance.setTransform(41.5,-26.3,0.3,0.3);

	this.instance_1 = new lib.earring8_img();
	this.instance_1.setTransform(37.5,-30.3,0.3,0.3);

	this.instance_2 = new lib.earring9_img();
	this.instance_2.setTransform(52.5,-26.3,0.3,0.3);

	this.instance_3 = new lib.earring10_img();
	this.instance_3.setTransform(43.5,-25.8,0.3,0.3);

	this.instance_4 = new lib.earring11_img();
	this.instance_4.setTransform(41.5,-25.8,0.3,0.3);

	this.instance_5 = new lib.earring12_img();
	this.instance_5.setTransform(45.5,-29.8,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(41.5,-26.3,43.2,88.5);
p.frameBounds = [rect, new cjs.Rectangle(37.5,-30.3,47.4,75), new cjs.Rectangle(52.5,-26.3,17.7,84.6), new cjs.Rectangle(43.5,-25.8,36,81.9), new cjs.Rectangle(41.5,-25.8,35.7,88.2), new cjs.Rectangle(45.5,-29.8,30.9,89.7), null];


(lib.hero2_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_dress_11_img();
	this.instance.setTransform(-218,-234.5);

	this.instance_1 = new lib.hero_dress_12_img();
	this.instance_1.setTransform(-218,-234.5);

	this.instance_2 = new lib.hero_dress_13_img();
	this.instance_2.setTransform(-218,-234.5);

	this.instance_3 = new lib.hero_dress_14_img();
	this.instance_3.setTransform(-218,-234.5);

	this.instance_4 = new lib.hero_dress_15_img();
	this.instance_4.setTransform(-218,-234.5);

	this.instance_5 = new lib.hero_dress_16_img();
	this.instance_5.setTransform(-218,-234.5);

	this.instance_6 = new lib.hero_dress_17_img();
	this.instance_6.setTransform(-218,-234.5);

	this.instance_7 = new lib.hero_dress_18_img();
	this.instance_7.setTransform(-218,-234.5);

	this.instance_8 = new lib.hero_dress_0_img();
	this.instance_8.setTransform(-218,-234.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-218,-234.5,436,469);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_shadows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadows1_img();
	this.instance.setTransform(-77.5,-91);

	this.instance_1 = new lib.shadows2_img();
	this.instance_1.setTransform(-77.5,-91);

	this.instance_2 = new lib.shadows3_img();
	this.instance_2.setTransform(-77.5,-91);

	this.instance_3 = new lib.shadows4_img();
	this.instance_3.setTransform(-77.5,-91);

	this.instance_4 = new lib.shadows5_img();
	this.instance_4.setTransform(-77.5,-91);

	this.instance_5 = new lib.shadows6_img();
	this.instance_5.setTransform(-77.5,-91);

	this.instance_6 = new lib.shadows7_img();
	this.instance_6.setTransform(-77.5,-91);

	this.instance_7 = new lib.shadows8_img();
	this.instance_7.setTransform(-77.5,-91);

	this.instance_8 = new lib.shadows9_img();
	this.instance_8.setTransform(-77.5,-91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.5,-91,155,182);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.hero1_mic_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.mic1_img();
	this.instance.setTransform(-38,-42);

	this.instance_1 = new lib.mic2_img();
	this.instance_1.setTransform(-40.5,-56);

	this.instance_2 = new lib.mic3_img();
	this.instance_2.setTransform(-46,-59.5);

	this.instance_3 = new lib.mic4_img();
	this.instance_3.setTransform(-42,-55.5);

	this.instance_4 = new lib.mic5_img();
	this.instance_4.setTransform(-31.5,-39);

	this.instance_5 = new lib.mic6_img();
	this.instance_5.setTransform(-37,-47);

	this.instance_6 = new lib.mic7_img();
	this.instance_6.setTransform(-39.5,-52);

	this.instance_7 = new lib.mic8_img();
	this.instance_7.setTransform(-44,-50);

	this.instance_8 = new lib.mic9_img();
	this.instance_8.setTransform(-37.5,-42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-42,76,84);
p.frameBounds = [rect, new cjs.Rectangle(-40.5,-56,82,106), new cjs.Rectangle(-46,-59.5,74,96), new cjs.Rectangle(-42,-55.5,88,109), new cjs.Rectangle(-31.5,-39,72,84), new cjs.Rectangle(-37,-47,77,92), new cjs.Rectangle(-39.5,-52,78,101), new cjs.Rectangle(-44,-50,89,99), new cjs.Rectangle(-37.5,-42,71,77), null];


(lib.hero1_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lips1_img();
	this.instance.setTransform(-77.5,-91);

	this.instance_1 = new lib.lips2_img();
	this.instance_1.setTransform(-77.5,-91);

	this.instance_2 = new lib.lips3_img();
	this.instance_2.setTransform(-77.5,-91);

	this.instance_3 = new lib.lips4_img();
	this.instance_3.setTransform(-77.5,-91);

	this.instance_4 = new lib.lips5_img();
	this.instance_4.setTransform(-77.5,-91);

	this.instance_5 = new lib.lips6_img();
	this.instance_5.setTransform(-77.5,-91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.5,-91,155,182);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_hat_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hat1_img();
	this.instance.setTransform(-114.5,-72);

	this.instance_1 = new lib.hat2_img();
	this.instance_1.setTransform(-109.4,-67.5);

	this.instance_2 = new lib.hat3_img();
	this.instance_2.setTransform(-114.4,-65.5);

	this.instance_3 = new lib.hat4_img();
	this.instance_3.setTransform(-94.4,-62.5);

	this.instance_4 = new lib.hat5_img();
	this.instance_4.setTransform(-53.9,-11.5);

	this.instance_5 = new lib.hat6_img();
	this.instance_5.setTransform(-58.9,-17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.5,-72,229,144);
p.frameBounds = [rect, new cjs.Rectangle(-109.4,-67.5,229,132), new cjs.Rectangle(-114.4,-65.5,235,134), new cjs.Rectangle(-94.4,-62.5,195,133), new cjs.Rectangle(-53.9,-11.5,119,53), new cjs.Rectangle(-58.9,-17.5,137,79), null];


(lib.hero1_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hair0_img();
	this.instance.setTransform(-108,-71);

	this.instance_1 = new lib.hair1_img();
	this.instance_1.setTransform(-82.9,-76.5);

	this.instance_2 = new lib.hair2_img();
	this.instance_2.setTransform(29.5,38.5);

	this.instance_3 = new lib.hair3_img();
	this.instance_3.setTransform(-82,-49.5);

	this.instance_4 = new lib.hair4_img();
	this.instance_4.setTransform(-99.4,-57.5);

	this.instance_5 = new lib.hair5_img();
	this.instance_5.setTransform(-141.5,-78);

	this.instance_6 = new lib.hair6_img();
	this.instance_6.setTransform(-16.9,45.5);

	this.instance_7 = new lib.hair7_img();
	this.instance_7.setTransform(-105,-86.5);

	this.instance_8 = new lib.hair8_img();
	this.instance_8.setTransform(-137.9,-55);

	this.instance_9 = new lib.hair9_img();
	this.instance_9.setTransform(-84.4,-40.5);

	this.instance_10 = new lib.hair10_img();
	this.instance_10.setTransform(-136.9,-75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108,-71,215,241);
p.frameBounds = [rect, new cjs.Rectangle(-82.9,-76.5,193,341), new cjs.Rectangle(29.5,38.5,84,87), new cjs.Rectangle(-82,-49.5,184,275), new cjs.Rectangle(-99.4,-57.5,196,320), new cjs.Rectangle(-141.5,-78,280,326), new cjs.Rectangle(-16.9,45.5,114,104), new cjs.Rectangle(-105,-86.5,219,223), new cjs.Rectangle(-137.9,-55,286,406), new cjs.Rectangle(-84.4,-40.5,173,171), new cjs.Rectangle(-136.9,-75,292,386)];


(lib.hero1_glasses_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.glasses1_img();
	this.instance.setTransform(-54.5,-22);

	this.instance_1 = new lib.glasses2_img();
	this.instance_1.setTransform(-62,-20.5);

	this.instance_2 = new lib.glasses3_img();
	this.instance_2.setTransform(-66.9,-22);

	this.instance_3 = new lib.glasses4_img();
	this.instance_3.setTransform(-62.4,-22.5);

	this.instance_4 = new lib.glasses5_img();
	this.instance_4.setTransform(-70,-24);

	this.instance_5 = new lib.glasses6_img();
	this.instance_5.setTransform(-67.4,-21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.5,-22,109,44);
p.frameBounds = [rect, new cjs.Rectangle(-62,-20.5,124,43), new cjs.Rectangle(-66.9,-22,135,48), new cjs.Rectangle(-62.4,-22.5,126,50), new cjs.Rectangle(-70,-24,140,49), new cjs.Rectangle(-67.4,-21,136,48), null];


(lib.hero1_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.fringe0_img();
	this.instance.setTransform(-95,-70.5);

	this.instance_1 = new lib.fringe1_img();
	this.instance_1.setTransform(-82.4,-75.5);

	this.instance_2 = new lib.fringe2_img();
	this.instance_2.setTransform(-80.9,-76);

	this.instance_3 = new lib.fringe3_img();
	this.instance_3.setTransform(-72.4,-70.5);

	this.instance_4 = new lib.fringe4_img();
	this.instance_4.setTransform(-88.9,-72);

	this.instance_5 = new lib.fringe5_img();
	this.instance_5.setTransform(-128.4,-78);

	this.instance_6 = new lib.fringe6_img();
	this.instance_6.setTransform(-79.9,-82);

	this.instance_7 = new lib.fringe7_img();
	this.instance_7.setTransform(-104.9,-86);

	this.instance_8 = new lib.fringe8_img();
	this.instance_8.setTransform(-102.4,-75.5);

	this.instance_9 = new lib.fringe9_img();
	this.instance_9.setTransform(-94.9,-72.5);

	this.instance_10 = new lib.fringe10_img();
	this.instance_10.setTransform(-117.9,-75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-70.5,190,141);
p.frameBounds = [rect, new cjs.Rectangle(-82.4,-75.5,193,195), new cjs.Rectangle(-80.9,-76,189,161), new cjs.Rectangle(-72.4,-70.5,163,172), new cjs.Rectangle(-88.9,-72,179,267), new cjs.Rectangle(-128.4,-78,267,176), new cjs.Rectangle(-79.9,-82,177,278), new cjs.Rectangle(-104.9,-86,219,217), new cjs.Rectangle(-102.4,-75.5,210,245), new cjs.Rectangle(-94.9,-72.5,192,218), new cjs.Rectangle(-117.9,-75,244,205)];


(lib.hero1_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.eyes1_img();
	this.instance.setTransform(-77.5,-91);

	this.instance_1 = new lib.eyes2_img();
	this.instance_1.setTransform(-77.5,-91);

	this.instance_2 = new lib.eyes3_img();
	this.instance_2.setTransform(-77.5,-91);

	this.instance_3 = new lib.eyes4_img();
	this.instance_3.setTransform(-77.5,-91);

	this.instance_4 = new lib.eyes5_img();
	this.instance_4.setTransform(-77.5,-91);

	this.instance_5 = new lib.eyes6_img();
	this.instance_5.setTransform(-77.5,-91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.5,-91,155,182);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_eyebrows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.eyebrows1_img();
	this.instance.setTransform(-77.5,-91);

	this.instance_1 = new lib.eyebrows2_img();
	this.instance_1.setTransform(-77.5,-91);

	this.instance_2 = new lib.eyebrows3_img();
	this.instance_2.setTransform(-77.5,-91);

	this.instance_3 = new lib.eyebrows4_img();
	this.instance_3.setTransform(-77.5,-91);

	this.instance_4 = new lib.eyebrows5_img();
	this.instance_4.setTransform(-77.5,-91);

	this.instance_5 = new lib.eyebrows6_img();
	this.instance_5.setTransform(-77.5,-91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.5,-91,155,182);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_earringsb_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.earring1_img();
	this.instance.setTransform(-54.9,-31.3,0.3,0.3,0,0,180);

	this.instance_1 = new lib.earring2_img();
	this.instance_1.setTransform(-43.5,-32.3,0.3,0.3,0,0,180);

	this.instance_2 = new lib.earring3_img();
	this.instance_2.setTransform(-39.5,-34.8,0.3,0.3,0,0,180);

	this.instance_3 = new lib.earring4_img();
	this.instance_3.setTransform(-47,-31.8,0.3,0.3,0,0,180);

	this.instance_4 = new lib.earring5_img();
	this.instance_4.setTransform(-55.4,-42.3,0.3,0.3,0,0,180);

	this.instance_5 = new lib.earring6_img();
	this.instance_5.setTransform(-46.9,-35.3,0.3,0.3,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.4,-31.3,19.5,47.7);
p.frameBounds = [rect, new cjs.Rectangle(-78.9,-32.3,35.4,27.6), new cjs.Rectangle(-69.5,-34.8,30,66), new cjs.Rectangle(-72.5,-31.8,25.5,24.9), new cjs.Rectangle(-68.6,-42.3,13.2,81.6), new cjs.Rectangle(-87.1,-35.3,40.2,51), null];


(lib.hero1_earrings_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.earring1_img();
	this.instance.setTransform(51.5,-26.3,0.3,0.3);

	this.instance_1 = new lib.earring2_img();
	this.instance_1.setTransform(42.5,-32.3,0.3,0.3);

	this.instance_2 = new lib.earring3_img();
	this.instance_2.setTransform(47.5,-25.3,0.3,0.3);

	this.instance_3 = new lib.earring4_img();
	this.instance_3.setTransform(47.5,-25.8,0.3,0.3);

	this.instance_4 = new lib.earring5_img();
	this.instance_4.setTransform(49.5,-25.8,0.3,0.3);

	this.instance_5 = new lib.earring6_img();
	this.instance_5.setTransform(46.5,-27.8,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(51.5,-26.3,19.5,47.7);
p.frameBounds = [rect, new cjs.Rectangle(42.5,-32.3,35.4,27.6), new cjs.Rectangle(47.5,-25.3,30,66), new cjs.Rectangle(47.5,-25.8,25.5,24.9), new cjs.Rectangle(49.5,-25.8,13.2,81.6), new cjs.Rectangle(46.5,-27.8,40.2,51), null];


(lib.hero1_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_dress_1_img();
	this.instance.setTransform(-218,-234.5);

	this.instance_1 = new lib.hero_dress_2_img();
	this.instance_1.setTransform(-218,-234.5);

	this.instance_2 = new lib.hero_dress_3_img();
	this.instance_2.setTransform(-218,-234.5);

	this.instance_3 = new lib.hero_dress_4_img();
	this.instance_3.setTransform(-218,-234.5);

	this.instance_4 = new lib.hero_dress_5_img();
	this.instance_4.setTransform(-218,-234.5);

	this.instance_5 = new lib.hero_dress_6_img();
	this.instance_5.setTransform(-218,-234.5);

	this.instance_6 = new lib.hero_dress_7_img();
	this.instance_6.setTransform(-218,-234.5);

	this.instance_7 = new lib.hero_dress_8_img();
	this.instance_7.setTransform(-218,-234.5);

	this.instance_8 = new lib.hero_dress_9_img();
	this.instance_8.setTransform(-218,-234.5);

	this.instance_9 = new lib.hero_dress_10_img();
	this.instance_9.setTransform(-218,-234.5);

	this.instance_10 = new lib.hero_dress_0_img();
	this.instance_10.setTransform(-218,-234.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-218,-234.5,436,469);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero_mic_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mic3_img();
	this.instance.setTransform(-46,-59.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-59.5,74,96);
p.frameBounds = [rect];


(lib.hero_head_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_head_img();
	this.instance.setTransform(-77.5,-91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.5,-91,155,182);
p.frameBounds = [rect];


(lib.hero_hair_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hair1_img();
	this.instance.setTransform(-82.9,-76.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.9,-76.5,193,341);
p.frameBounds = [rect];


(lib.hero_fringe_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fringe1_img();
	this.instance.setTransform(-82.4,-75.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.4,-75.5,193,195);
p.frameBounds = [rect];


(lib.hero_earringsb_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.earring16_img();
	this.instance.setTransform(31.5,-29.3,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(31.5,-29.3,56.4,75.9);
p.frameBounds = [rect];


(lib.hero_earrings_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.earring16_img();
	this.instance.setTransform(31.5,-29.3,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(31.5,-29.3,56.4,75.9);
p.frameBounds = [rect];


(lib.hero_dress_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero_dress_25_img();
	this.instance.setTransform(-218,-234.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-218,-234.5,436,469);
p.frameBounds = [rect];


(lib.headdress_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat6_img();
	this.instance.setTransform(-71.6,33.4,1,1,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ar6IvIAFqpILVm5IJlgaIC2EYI1WODg");
	this.shape.setTransform(10.8,-4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.6,-78.8,158.7,157.5);
p.frameBounds = [rect];


(lib.headdress_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat5_img();
	this.instance.setTransform(-52.6,38.2,1,1,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AolFmIAlmVIIsoTIHhAEIAZEDIs5N+g");
	this.shape.setTransform(1.4,5.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.7,-64.8,110.2,129.6);
p.frameBounds = [rect];


(lib.headdress_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat4_img();
	this.instance.setTransform(-85,-58,0.872,0.872);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-58,170,116);
p.frameBounds = [rect];


(lib.headdress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat3_img();
	this.instance.setTransform(-100,-57,0.851,0.851);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-57,200,114.1);
p.frameBounds = [rect];


(lib.headdress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat2_img();
	this.instance.setTransform(-100,-58,0.873,0.873);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-58,200,115.3);
p.frameBounds = [rect];


(lib.headdress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hat1_img();
	this.instance.setTransform(-100,-63,0.873,0.873);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-63,200,125.8);
p.frameBounds = [rect];


(lib.hand_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand_img();
	this.instance.setTransform(-20,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-21,40,42);
p.frameBounds = [rect];


(lib.hairstyle_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_check_1_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.hairstyle_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_check_0_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.glasses_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glasses18_img();
	this.instance.setTransform(-63,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7GPIAAsdIV3AAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-40,140,80);
p.frameBounds = [rect];


(lib.glasses_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glasses12_img();
	this.instance.setTransform(-58.5,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7GPIAAsdIV3AAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-40,140,80);
p.frameBounds = [rect];


(lib.glasses_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glasses6_img();
	this.instance.setTransform(-68,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7GPIAAsdIV3AAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-40,140,80);
p.frameBounds = [rect];


(lib.glasses_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glasses17_img();
	this.instance.setTransform(-62.5,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7GPIAAsdIV3AAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-40,140,80);
p.frameBounds = [rect];


(lib.glasses_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glasses11_img();
	this.instance.setTransform(-58.5,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7GPIAAsdIV3AAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-40,140,80);
p.frameBounds = [rect];


(lib.glasses_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glasses5_img();
	this.instance.setTransform(-70,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7GPIAAsdIV3AAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-40,140,80);
p.frameBounds = [rect];


(lib.glasses_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glasses16_img();
	this.instance.setTransform(-71,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7GPIAAsdIV3AAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71,-40,142,80);
p.frameBounds = [rect];


(lib.glasses_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glasses10_img();
	this.instance.setTransform(-61.5,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7GPIAAsdIV3AAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-40,140,80);
p.frameBounds = [rect];


(lib.glasses_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glasses4_img();
	this.instance.setTransform(-63,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7GPIAAsdIV3AAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-40,140,80);
p.frameBounds = [rect];


(lib.glasses_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glasses15_img();
	this.instance.setTransform(-72.5,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfH0IAAvmIY/AAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-50,160,100);
p.frameBounds = [rect];


(lib.glasses_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glasses9_img();
	this.instance.setTransform(-73.5,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsHCIAAuCIXZAAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-45,150,90);
p.frameBounds = [rect];


(lib.glasses_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glasses3_img();
	this.instance.setTransform(-67.5,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7GPIAAsdIV3AAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-40,140,80);
p.frameBounds = [rect];


(lib.glasses_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glasses14_img();
	this.instance.setTransform(-78.5,-49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfH0IAAvmIY/AAIAAPmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-50,160,100);
p.frameBounds = [rect];


(lib.glasses_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glasses8_img();
	this.instance.setTransform(-63.5,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7GPIAAsdIV3AAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-40,140,80);
p.frameBounds = [rect];


(lib.glasses_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glasses2_img();
	this.instance.setTransform(-62,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7GPIAAsdIV3AAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-40,140,80);
p.frameBounds = [rect];


(lib.glasses_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glasses13_img();
	this.instance.setTransform(-64,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7GPIAAsdIV3AAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-40,140,80);
p.frameBounds = [rect];


(lib.glasses_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glasses7_img();
	this.instance.setTransform(-68,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7GPIAAsdIV3AAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-40,140,80);
p.frameBounds = [rect];


(lib.glasses_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glasses1_img();
	this.instance.setTransform(-54.5,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7GPIAAsdIV3AAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-40,140,80);
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


(lib.eyes_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.eyes_check_1_1_img();
	this.instance.setTransform(-80,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-100,160,200);
p.frameBounds = [rect];


(lib.eyebrows_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.eyebrows_check_1_1_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.earrings_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring18_img();
	this.instance.setTransform(-85,-74.8,0.741,0.741);

	this.instance_1 = new lib.earring18_img();
	this.instance_1.setTransform(-17.3,-74.1,0.741,0.741);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1ZAMAAAgx/IdrAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-160,190,320);
p.frameBounds = [rect];


(lib.earrings_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring12_img();
	this.instance.setTransform(4.5,-105.7,0.707,0.707);

	this.instance_1 = new lib.earring12_img();
	this.instance_1.setTransform(-4.1,-106,0.707,0.707,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1ZAMAAAgx/IdrAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-160,190,320);
p.frameBounds = [rect];


(lib.earrings_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring6_img();
	this.instance.setTransform(60,-154,0.896,0.895,0,0,180);

	this.instance_1 = new lib.earring6_img();
	this.instance_1.setTransform(-60,-7,0.896,0.895);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1ZAMAAAgx/IdrAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-160,190,320);
p.frameBounds = [rect];


(lib.earrings_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring17_img();
	this.instance.setTransform(-65,-71,0.526,0.526);

	this.instance_1 = new lib.earring17_img();
	this.instance_1.setTransform(-2,-71,0.526,0.526);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1ZAMAAAgx/IdrAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-160,190,320);
p.frameBounds = [rect];


(lib.earrings_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring11_img();
	this.instance.setTransform(-8,-113,0.769,0.769);

	this.instance_1 = new lib.earring11_img();
	this.instance_1.setTransform(-80,-113,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1ZAMAAAgx/IdrAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-160,190,320);
p.frameBounds = [rect];


(lib.earrings_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring5_img();
	this.instance.setTransform(6,-136);

	this.instance_1 = new lib.earring5_img();
	this.instance_1.setTransform(-50,-136);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1ZAMAAAgx/IdrAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-160,190,320);
p.frameBounds = [rect];


(lib.earrings_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring16_img();
	this.instance.setTransform(-5.5,-66.2,0.523,0.523);

	this.instance_1 = new lib.earring16_img();
	this.instance_1.setTransform(-92.8,-66.2,0.523,0.523);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1ZAMAAAgx/IdrAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-160,190,320);
p.frameBounds = [rect];


(lib.earrings_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring10_img();
	this.instance.setTransform(1,-84.5,0.621,0.621);

	this.instance_1 = new lib.earring10_img();
	this.instance_1.setTransform(-75.5,-84.9,0.621,0.621);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1ZAMAAAgx/IdrAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-160,190,320);
p.frameBounds = [rect];


(lib.earrings_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring4_img();
	this.instance.setTransform(-33,15);

	this.instance_1 = new lib.earring4_img();
	this.instance_1.setTransform(-53,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1ZAMAAAgx/IdrAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-160,190,320);
p.frameBounds = [rect];


(lib.earrings_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring15_img();
	this.instance.setTransform(8,-78,0.565,0.565);

	this.instance_1 = new lib.earring15_img();
	this.instance_1.setTransform(-22,-78,0.565,0.565);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1ZAMAAAgx/IdrAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-160,190,320);
p.frameBounds = [rect];


(lib.earrings_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring9_img();
	this.instance.setTransform(6,-111,0.789,0.789);

	this.instance_1 = new lib.earring9_img();
	this.instance_1.setTransform(-6.4,-111,0.789,0.789,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1ZAMAAAgx/IdrAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-160,190,320);
p.frameBounds = [rect];


(lib.earrings_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring3_img();
	this.instance.setTransform(-77,-110);

	this.instance_1 = new lib.earring3_img();
	this.instance_1.setTransform(-23,-110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1ZAMAAAgx/IdrAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-160,190,320);
p.frameBounds = [rect];


(lib.earrings_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring14_img();
	this.instance.setTransform(4,-76,0.57,0.57);

	this.instance_1 = new lib.earring14_img();
	this.instance_1.setTransform(-67,-76,0.57,0.57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1ZAMAAAgx/IdrAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-160,190,320);
p.frameBounds = [rect];


(lib.earrings_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring8_img();
	this.instance.setTransform(-21.4,-84,0.689,0.689);

	this.instance_1 = new lib.earring8_img();
	this.instance_1.setTransform(-87.3,-88.2,0.689,0.689);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1ZAMAAAgx/IdrAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-160,190,320);
p.frameBounds = [rect];


(lib.earrings_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring2_img();
	this.instance.setTransform(59,10,1,1,0,0,180);

	this.instance_1 = new lib.earring2_img();
	this.instance_1.setTransform(-59,-102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1ZAMAAAgx/IdrAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-160,190,320);
p.frameBounds = [rect];


(lib.earrings_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring13_img();
	this.instance.setTransform(5,-82,0.605,0.605);

	this.instance_1 = new lib.earring13_img();
	this.instance_1.setTransform(-56,-82,0.605,0.605);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1ZAMAAAgx/IdrAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-160,190,320);
p.frameBounds = [rect];


(lib.earrings_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring7_img();
	this.instance.setTransform(-22,-101,0.689,0.689);

	this.instance_1 = new lib.earring7_img();
	this.instance_1.setTransform(-75.7,-101.9,0.689,0.689);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1ZAMAAAgx/IdrAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-160,190,320);
p.frameBounds = [rect];


(lib.earrings_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earring1_img();
	this.instance.setTransform(-56.5,-80);

	this.instance_1 = new lib.earring1_img();
	this.instance_1.setTransform(-8.5,-79);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Au1ZAMAAAgx/IdrAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-160,190,320);
p.frameBounds = [rect];


(lib.dress_check_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_check_1_3_img();
	this.instance.setTransform(-100,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-135,200,270);
p.frameBounds = [rect];


(lib.dress_check_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_check_1_2_img();
	this.instance.setTransform(-105,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-140,210,280);
p.frameBounds = [rect];


(lib.dress_check_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_check_1_1_img();
	this.instance.setTransform(-105,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-130,210,260);
p.frameBounds = [rect];


(lib.dress_check_0_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_check_0_3_img();
	this.instance.setTransform(-100,-135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-135,200,270);
p.frameBounds = [rect];


(lib.dress_check_0_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_check_0_2_img();
	this.instance.setTransform(-105,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-140,210,280);
p.frameBounds = [rect];


(lib.dress_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_check_0_1_img();
	this.instance.setTransform(-105,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-130,210,260);
p.frameBounds = [rect];


(lib.decor_location_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_location_1_3_img();
	this.instance.setTransform(-140,-185);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-185,280,370);
p.frameBounds = [rect];


(lib.decor_location_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_location_1_2_img();
	this.instance.setTransform(-145,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-190,290,380);
p.frameBounds = [rect];


(lib.decor_location_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_location_1_1_img();
	this.instance.setTransform(-145,-175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-175,290,350);
p.frameBounds = [rect];


(lib.current_location_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_1_3_img();
	this.instance.setTransform(-140,-185);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-185,280,370);
p.frameBounds = [rect];


(lib.current_location_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_1_2_img();
	this.instance.setTransform(-145,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-190,290,380);
p.frameBounds = [rect];


(lib.current_location_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_1_1_img();
	this.instance.setTransform(-145,-175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-175,290,350);
p.frameBounds = [rect];


(lib.body_title_style_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// graph
	this.instance = new lib.title_style_3_en_img();
	this.instance.setTransform(-180,-45);

	this.instance_1 = new lib.title_style_3_ru_img();
	this.instance_1.setTransform(-180,-45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-45,360,90);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_style_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_style_2_en_img();
	this.instance.setTransform(-180,-45);

	this.instance_1 = new lib.title_style_2_ru_img();
	this.instance_1.setTransform(-180,-45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-45,360,90);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_style_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_style_1_en_img();
	this.instance.setTransform(-180,-45);

	this.instance_1 = new lib.title_style_1_ru_img();
	this.instance_1.setTransform(-180,-45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-45,360,90);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-270,-210);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-270,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270,-210,540,420);
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


(lib.background_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_6_img();
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

	this.instance_5 = new lib.gravity_explosion_6_img();
	this.instance_5.setTransform(-9,-9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

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
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
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
	this.instance.setTransform(-12,-12,0.75,0.75);

	this.instance_1 = new lib.gravity_big_explosion_2_img();
	this.instance_1.setTransform(-12,-12,0.75,0.75);

	this.instance_2 = new lib.gravity_big_explosion_3_img();
	this.instance_2.setTransform(-12,-12,0.75,0.75);

	this.instance_3 = new lib.gravity_big_explosion_4_img();
	this.instance_3.setTransform(-12,-12,0.75,0.75);

	this.instance_4 = new lib.gravity_big_explosion_5_img();
	this.instance_4.setTransform(-12,-12,0.75,0.75);

	this.instance_5 = new lib.gravity_big_explosion_6_img();
	this.instance_5.setTransform(-16,-16);

	this.instance_6 = new lib.gravity_big_explosion_7_img();
	this.instance_6.setTransform(-12,-12,0.75,0.75);

	this.instance_7 = new lib.gravity_big_explosion_8_img();
	this.instance_7.setTransform(-12,-12,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12,-12,24,24);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-16,-16,32,32), rect=new cjs.Rectangle(-12,-12,24,24), rect];


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


(lib.nav_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_3_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
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
	this.instance.setTransform(-60,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-75,120,150);
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
	this.instance.setTransform(-60,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-75,120,150);
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


(lib.wardrobe_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.wardrobe_3_4_mc();
	this.instance.setTransform(0,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.wardrobe_3_4_mc();
	this.instance_1.setTransform(0,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// body
	this.instance_2 = new lib.wardrobe_2_4_mc();
	this.instance_2.setTransform(0,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// body
	this.instance_3 = new lib.wardrobe_2_4_mc();
	this.instance_3.setTransform(0,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// body
	this.instance_4 = new lib.wardrobe_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-310,290,620);
p.frameBounds = [rect];


(lib.wardrobe_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.wardrobe_4_2_mc();
	this.instance.setTransform(0,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.wardrobe_4_2_mc();
	this.instance_1.setTransform(0,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// body
	this.instance_2 = new lib.wardrobe_2_2_mc();
	this.instance_2.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// body
	this.instance_3 = new lib.wardrobe_2_2_mc();
	this.instance_3.setTransform(0,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// body
	this.instance_4 = new lib.wardrobe_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-310,420,620);
p.frameBounds = [rect];


(lib.wardrobe_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.wardrobe_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-310,420,620);
p.frameBounds = [rect];


(lib.title_style_3_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_title_style_3_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-45,360,90);
p.frameBounds = [rect];


(lib.title_style_2_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_title_style_2_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-45,360,90);
p.frameBounds = [rect];


(lib.title_style_1_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.body_title_style_1_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-45,360,90);
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
p.nominalBounds = rect = new cjs.Rectangle(-270,-210,540,420);
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


(lib.shadows_check_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadows_check_1_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},39).to({alpha:0.102},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.shadows_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.shadows_check_1_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.shadows_check_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect];


(lib.shadows_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_9_1_img();
	this.instance.setTransform(-85,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.shadows_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsfMgIAA4/IY/AAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.shadows_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_8_1_img();
	this.instance.setTransform(-85,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.shadows_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsfMgIAA4/IY/AAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.shadows_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_7_1_img();
	this.instance.setTransform(-85,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.shadows_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsfMgIAA4/IY/AAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.shadows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_6_1_img();
	this.instance.setTransform(-85,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.shadows_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsfMgIAA4/IY/AAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.shadows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_5_1_img();
	this.instance.setTransform(-85,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.shadows_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsfMgIAA4/IY/AAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.shadows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_4_1_img();
	this.instance.setTransform(-85,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.shadows_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsfMgIAA4/IY/AAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.shadows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_3_1_img();
	this.instance.setTransform(-85,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.shadows_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsfMgIAA4/IY/AAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.shadows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_2_1_img();
	this.instance.setTransform(-85,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.shadows_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsfMgIAA4/IY/AAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.shadows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows_1_1_img();
	this.instance.setTransform(-85,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.shadows_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsfMgIAA4/IY/AAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.shadows_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36,-36,72,72);
p.frameBounds = [rect];


(lib.notes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.notes_2_mc();
	this.instance.setTransform(0,0,0.667,0.667);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({alpha:1},5).to({scaleX:1,scaleY:1,rotation:30,x:50,y:-50},5).to({regX:0.1,regY:-0.1,rotation:-30,x:50.1,y:-150.1},10).to({y:-200.1,alpha:0.012},5).wait(1));

	// animation
	this.instance_1 = new lib.notes_1_mc();
	this.instance_1.setTransform(0,0,0.667,0.667);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},4).to({scaleX:1,scaleY:1,rotation:-30,x:-50,y:-50},5).to({rotation:15,y:-150},10).to({y:-200,alpha:0.012},5).to({_off:true},1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect, rect=new cjs.Rectangle(-29.9,-29.9,60,60), rect, rect, new cjs.Rectangle(-30,-30,60,60), new cjs.Rectangle(-46.1,-46.1,72.4,72.4), new cjs.Rectangle(-62.5,-62.5,85.2,85.2), new cjs.Rectangle(-79,-79,98.1,98.1), new cjs.Rectangle(-95.3,-95.3,110.7,110.7), new cjs.Rectangle(-111.4,-111.4,122.9,122.9), new cjs.Rectangle(-109.8,-119.8,119.8,119.8), new cjs.Rectangle(-107.9,-128,116,116), new cjs.Rectangle(-105.7,-135.8,111.6,111.6), new cjs.Rectangle(-103.3,-143.3,106.7,106.7), new cjs.Rectangle(-100.4,-150.4,101,100.9), new cjs.Rectangle(-97.3,-157.3,94.6,94.6), new cjs.Rectangle(-96,-166.1,92,92), new cjs.Rectangle(-99.3,-179.4,98.6,98.6), new cjs.Rectangle(-102.3,-192.3,104.6,104.6), new cjs.Rectangle(-105.1,-205.1,110.2,110.2), new cjs.Rectangle(-105,-215,110,110), new cjs.Rectangle(-105,-225,110,110), new cjs.Rectangle(-105,-235,110,110), new cjs.Rectangle(-105,-245,110,110), new cjs.Rectangle(-105.1,-255.1,135.1,285.1), rect=new cjs.Rectangle(-29.9,-29.9,60,60), rect, rect, rect, new cjs.Rectangle(-30,-30,60,60), new cjs.Rectangle(-26.1,-46.1,72.4,72.4), new cjs.Rectangle(-22.5,-62.5,85.2,85.2), new cjs.Rectangle(-19,-79,98.1,98.1), new cjs.Rectangle(-15.3,-95.3,110.7,110.7), new cjs.Rectangle(-11.4,-111.4,122.9,122.9), new cjs.Rectangle(-9.3,-119.2,118.6,118.6), new cjs.Rectangle(-6.5,-126.6,113.2,113.2), new cjs.Rectangle(-3.1,-133.3,106.5,106.5), new cjs.Rectangle(0.7,-139.5,98.9,98.9), new cjs.Rectangle(5.1,-145,90,90), new cjs.Rectangle(0.8,-159.3,98.6,98.6), new cjs.Rectangle(-3.1,-173.3,106.5,106.5), new cjs.Rectangle(-6.4,-186.7,113.2,113.2), new cjs.Rectangle(-9.2,-199.4,118.6,118.6), new cjs.Rectangle(-11.4,-211.4,122.9,122.9), new cjs.Rectangle(-11.3,-221.3,122.7,122.7), new cjs.Rectangle(-11.3,-231.3,122.7,122.7), new cjs.Rectangle(-11.3,-241.3,122.7,122.7), new cjs.Rectangle(-11.3,-251.3,122.7,122.7), new cjs.Rectangle(-11.4,-261.4,122.9,122.9)];


(lib.makeup_check_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.makeup_check_1_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},39).to({alpha:0.102},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-95,120,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.makeup_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.makeup_check_1_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.makeup_check_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-95,120,190);
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


(lib.lips_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_6_1_img();
	this.instance.setTransform(-50,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AogOvIAA6JIGJjVIK4YXIi6FHg");
	this.shape.setTransform(2.5,-8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-102.7,120,197.8);
p.frameBounds = [rect];


(lib.lips_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_5_1_img();
	this.instance.setTransform(-50,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AogOvIAA6JIGJjVIK4YXIi6FHg");
	this.shape.setTransform(2.5,-8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-102.7,120,197.8);
p.frameBounds = [rect];


(lib.lips_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_4_1_img();
	this.instance.setTransform(-50,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AogOvIAA6JIGJjVIK4YXIi6FHg");
	this.shape.setTransform(2.5,-8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-102.7,120,197.8);
p.frameBounds = [rect];


(lib.lips_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_3_1_img();
	this.instance.setTransform(-50,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AogOvIAA6JIGJjVIK4YXIi6FHg");
	this.shape.setTransform(2.5,-8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-102.7,120,197.8);
p.frameBounds = [rect];


(lib.lips_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_2_1_img();
	this.instance.setTransform(-50,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AogOvIAA6JIGJjVIK4YXIi6FHg");
	this.shape.setTransform(2.5,-8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-102.7,120,197.8);
p.frameBounds = [rect];


(lib.lips_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_1_1_img();
	this.instance.setTransform(-50,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.makeup_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AogOvIAA6JIGJjVIK4YXIi6FHg");
	this.shape.setTransform(2.5,-8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-102.7,120,197.8);
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


(lib.hero_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.notes_mc();
	this.instance.setTransform(-170,-165);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	// animation
	this.instance_1 = new lib.hand_mc();
	this.instance_1.setTransform(-187,-105.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-95.5},49).to({y:-105.5},50).wait(1));

	// animation
	this.instance_2 = new lib.hero_mic_main_mc();
	this.instance_2.setTransform(-196,-116.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:4.7,y:-106.5},49).to({rotation:0,y:-116.5},50).wait(1));

	// animation
	this.instance_3 = new lib.hero_fringe_main_mc();
	this.instance_3.setTransform(40.5,-254.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-4.2,x:31.9,y:-243.6},49).to({rotation:0,x:40.5,y:-254.5},50).wait(1));

	// animation
	this.instance_4 = new lib.hero_earrings_main_mc();
	this.instance_4.setTransform(45.7,-155.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-14.2,x:50.3,y:-136.2},49).to({rotation:0,x:45.7,y:-155.5},50).wait(1));

	// animation
	this.instance_5 = new lib.hero3_shadows_main_mc();
	this.instance_5.setTransform(50.5,-217.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-4.2,x:44.5,y:-207.4},49).to({rotation:0,x:50.5,y:-217.5},50).wait(1));

	// animation
	this.instance_6 = new lib.hero_head_mc();
	this.instance_6.setTransform(50.5,-217.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-4.2,x:44.5,y:-207.4},49).to({rotation:0,x:50.5,y:-217.5},50).wait(1));

	// animation
	this.instance_7 = new lib.hero_earringsb_main_mc();
	this.instance_7.setTransform(48.7,-157.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({skewX:10.8,skewY:190.8,x:47.1,y:-139.4},49).to({skewX:0,skewY:180,x:48.7,y:-157.5},50).wait(1));

	// animation
	this.instance_8 = new lib.hero_dress_main_mc();
	this.instance_8.setTransform(11,74);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:84},49).to({y:74},50).wait(1));

	// animation
	this.instance_9 = new lib.hero_hair_main_mc();
	this.instance_9.setTransform(40.5,-254.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:-4.2,x:31.9,y:-243.6},49).to({rotation:0,x:40.5,y:-254.5},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-242.1,-331,471.1,639.5);
p.frameBounds = [rect, new cjs.Rectangle(-242.1,-330.8,471.1,639.5), new cjs.Rectangle(-242.1,-330.6,471.1,639.5), new cjs.Rectangle(-242.2,-330.8,471.3,639.9), new cjs.Rectangle(-242.3,-330.6,471.3,639.9), new cjs.Rectangle(-242.2,-330.4,471.3,639.9), new cjs.Rectangle(-242.4,-330.6,471.4,640.3), new cjs.Rectangle(-242.4,-330.4,471.4,640.3), new cjs.Rectangle(-242.5,-330.2,471.6,640.4), new cjs.Rectangle(-242.5,-330.4,471.6,640.7), new cjs.Rectangle(-242.6,-330.2,471.6,640.8), new cjs.Rectangle(-242.7,-330,471.7,640.8), new cjs.Rectangle(-242.7,-330.2,471.8,641.2), new cjs.Rectangle(-242.8,-330,471.9,641.1), new cjs.Rectangle(-242.9,-329.9,471.9,641.2), new cjs.Rectangle(-242.9,-330,471.9,641.6), new cjs.Rectangle(-243,-329.8,472.1,641.6), new cjs.Rectangle(-243,-329.6,472.1,641.6), new cjs.Rectangle(-243,-329.8,472.1,642), new cjs.Rectangle(-243.1,-329.6,472.2,642), new cjs.Rectangle(-243.2,-329.5,472.2,642.1), new cjs.Rectangle(-243.3,-329.7,472.3,642.5), new cjs.Rectangle(-243.3,-329.4,472.4,642.4), new cjs.Rectangle(-243.3,-329.3,472.4,642.5), new cjs.Rectangle(-243.5,-329.4,472.5,642.8), new cjs.Rectangle(-243.5,-329.3,472.5,642.9), new cjs.Rectangle(-243.6,-329.1,472.6,642.9), new cjs.Rectangle(-243.6,-329.3,472.7,643.3), new cjs.Rectangle(-243.6,-329,472.7,643.2), new cjs.Rectangle(-243.8,-328.8,472.8,643.2), new cjs.Rectangle(-243.7,-329.1,472.8,643.7), new cjs.Rectangle(-243.9,-328.8,473,643.7), new cjs.Rectangle(-243.9,-328.7,472.9,643.7), new cjs.Rectangle(-243.9,-328.8,473,644.1), new cjs.Rectangle(-244,-328.7,473.1,644.1), new cjs.Rectangle(-244.1,-328.4,473.1,644.1), new cjs.Rectangle(-244.1,-328.6,473.1,644.5), new cjs.Rectangle(-244.2,-328.4,473.2,644.5), new cjs.Rectangle(-244.2,-328.6,473.3,644.8), new cjs.Rectangle(-244.3,-328.4,473.4,644.8), new cjs.Rectangle(-244.4,-328.2,473.4,644.9), new cjs.Rectangle(-244.3,-328.5,473.4,645.3), new cjs.Rectangle(-244.5,-328.2,473.6,645.2), new cjs.Rectangle(-244.5,-328.1,473.5,645.4), new cjs.Rectangle(-244.6,-328.2,473.6,645.7), new cjs.Rectangle(-244.6,-328,473.7,645.7), new cjs.Rectangle(-244.6,-327.8,473.7,645.7), new cjs.Rectangle(-244.8,-328,473.8,646.1), new cjs.Rectangle(-244.8,-327.8,473.8,646.1), new cjs.Rectangle(-244.9,-327.9,474,646.4), new cjs.Rectangle(-244.8,-327.8,473.8,646.1), new cjs.Rectangle(-244.8,-328,473.8,646.1), new cjs.Rectangle(-244.6,-327.8,473.7,645.7), new cjs.Rectangle(-244.6,-328,473.7,645.7), new cjs.Rectangle(-244.6,-328.2,473.6,645.7), new cjs.Rectangle(-244.4,-328,473.5,645.3), new cjs.Rectangle(-244.5,-328.3,473.6,645.4), new cjs.Rectangle(-244.4,-328.4,473.4,645.3), new cjs.Rectangle(-244.4,-328.2,473.4,644.8), new cjs.Rectangle(-244.3,-328.5,473.4,645), new cjs.Rectangle(-244.2,-328.5,473.3,644.8), new cjs.Rectangle(-244.2,-328.4,473.2,644.5), new cjs.Rectangle(-244.2,-328.6,473.2,644.5), new cjs.Rectangle(-244,-328.7,473,644.4), new cjs.Rectangle(-244,-328.6,473,644.1), new cjs.Rectangle(-243.9,-328.8,473,644.1), new cjs.Rectangle(-243.9,-329,473,644.1), new cjs.Rectangle(-243.9,-328.8,473,643.7), new cjs.Rectangle(-243.8,-329,472.8,643.7), new cjs.Rectangle(-243.8,-329.1,472.8,643.6), new cjs.Rectangle(-243.7,-329,472.8,643.3), new cjs.Rectangle(-243.6,-329.2,472.7,643.3), new cjs.Rectangle(-243.6,-329.3,472.6,643.2), new cjs.Rectangle(-243.5,-329.2,472.5,642.8), new cjs.Rectangle(-243.4,-329.3,472.5,642.8), new cjs.Rectangle(-243.5,-329.5,472.5,642.8), new cjs.Rectangle(-243.3,-329.4,472.4,642.5), new cjs.Rectangle(-243.3,-329.6,472.4,642.5), new cjs.Rectangle(-243.2,-329.7,472.2,642.3), new cjs.Rectangle(-243.2,-329.5,472.2,642), new cjs.Rectangle(-243.1,-329.7,472.2,642), new cjs.Rectangle(-243,-329.9,472.1,642), new cjs.Rectangle(-243,-329.7,472,641.6), new cjs.Rectangle(-243,-329.9,472,641.6), new cjs.Rectangle(-242.8,-330.1,471.8,641.6), new cjs.Rectangle(-242.9,-329.9,471.9,641.2), new cjs.Rectangle(-242.7,-330.1,471.7,641.2), new cjs.Rectangle(-242.7,-330.2,471.8,641.1), new cjs.Rectangle(-242.7,-330,471.7,640.7), new cjs.Rectangle(-242.6,-330.2,471.6,640.7), new cjs.Rectangle(-242.5,-330.4,471.5,640.7), new cjs.Rectangle(-242.5,-330.3,471.6,640.4), new cjs.Rectangle(-242.4,-330.4,471.4,640.3), new cjs.Rectangle(-242.4,-330.6,471.4,640.3), new cjs.Rectangle(-242.2,-330.5,471.3,640), new cjs.Rectangle(-242.2,-330.6,471.2,639.9), new cjs.Rectangle(-242.2,-330.8,471.3,639.9), new cjs.Rectangle(-242.1,-330.6,471.1,639.5), new cjs.Rectangle(-242.1,-330.8,471.1,639.5), new cjs.Rectangle(-242.1,-331,471.1,639.5)];


(lib.hero_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// headdress
	this.headdress = new lib.hero3_hat_all_mc();
	this.headdress.setTransform(38,-294);

	this.timeline.addTween(cjs.Tween.get(this.headdress).to({rotation:-7.7,x:16.5,y:-277.5},34).to({rotation:0,x:38,y:-294},35).wait(1));

	// glasses
	this.glasses = new lib.hero3_glasses_all_mc();
	this.glasses.setTransform(26,-201.5);

	this.timeline.addTween(cjs.Tween.get(this.glasses).to({rotation:-7.7,x:17,y:-184.3},34).to({rotation:0,x:26,y:-201.5},35).wait(1));

	// body
	this.instance = new lib.hand_mc();
	this.instance.setTransform(-187,-105.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-92.5},34).to({y:-105.5},35).wait(1));

	// microphone
	this.microphone = new lib.hero3_mic_all_mc();
	this.microphone.setTransform(-196,-116.5);

	this.timeline.addTween(cjs.Tween.get(this.microphone).to({rotation:6.2,x:-195,y:-103.5},34).to({rotation:0,x:-196,y:-116.5},35).wait(1));

	// fringe
	this.fringe = new lib.hero3_fringe_all_mc();
	this.fringe.setTransform(40.5,-254.5);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({rotation:-7.7,x:24.4,y:-238.7},34).to({rotation:0,x:40.5,y:-254.5},35).wait(1));

	// earrings
	this.earrings = new lib.hero3_earrings_all_mc();
	this.earrings.setTransform(106.7,-185.5,1,1,0,0,0,61,-30);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({regY:-30.1,rotation:-1.5,x:99.3,y:-179.3},34).to({regY:-30,rotation:0,x:106.7,y:-185.5},35).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero3_eyebrows_all_mc();
	this.eyebrows.setTransform(50.5,-217.5);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).to({rotation:-7.7,x:39.2,y:-203.4},34).to({rotation:0,x:50.5,y:-217.5},35).wait(1));

	// lips
	this.lips = new lib.hero3_lips_all_mc();
	this.lips.setTransform(50.5,-217.5);

	this.timeline.addTween(cjs.Tween.get(this.lips).to({rotation:-7.7,x:39.2,y:-203.4},34).to({rotation:0,x:50.5,y:-217.5},35).wait(1));

	// shadows
	this.shadows = new lib.hero3_shadows_all_mc();
	this.shadows.setTransform(50.5,-217.5);

	this.timeline.addTween(cjs.Tween.get(this.shadows).to({rotation:-7.7,x:39.2,y:-203.4},34).to({rotation:0,x:50.5,y:-217.5},35).wait(1));

	// eyes
	this.eyes = new lib.hero3_eyes_all_mc();
	this.eyes.setTransform(50.5,-217.5);

	this.timeline.addTween(cjs.Tween.get(this.eyes).to({rotation:-7.7,x:39.2,y:-203.4},34).to({rotation:0,x:50.5,y:-217.5},35).wait(1));

	// body
	this.instance_1 = new lib.hero_head_mc();
	this.instance_1.setTransform(50.5,-217.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-7.7,x:39.2,y:-203.4},34).to({rotation:0,x:50.5,y:-217.5},35).wait(1));

	// earringsSecond
	this.earringsSecond = new lib.hero3_earringsb_all_mc();
	this.earringsSecond.setTransform(-11.3,-184.5,1,1,0,0,180,60,-27);

	this.timeline.addTween(cjs.Tween.get(this.earringsSecond).to({skewX:2,skewY:182,x:-17.6,y:-162.4},34).to({skewX:0,skewY:180,x:-11.3,y:-184.5},35).wait(1));

	// dress
	this.dress = new lib.hero3_dress_all_mc();
	this.dress.setTransform(11,74);

	this.timeline.addTween(cjs.Tween.get(this.dress).to({y:87},34).to({y:74},35).wait(1));

	// hair
	this.hair = new lib.hero3_hair_all_mc();
	this.hair.setTransform(40.5,-254.5);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({rotation:-7.7,x:24.4,y:-238.7},34).to({rotation:0,x:40.5,y:-254.5},35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-234,-366,463.1,674.5);
p.frameBounds = [rect, new cjs.Rectangle(-234,-365.6,463,674.5), new cjs.Rectangle(-234.1,-365.6,463.2,674.8), new cjs.Rectangle(-234.3,-365.6,463.3,675.3), new cjs.Rectangle(-234.3,-365.6,463.3,675.6), new cjs.Rectangle(-234.4,-365.6,463.5,676), new cjs.Rectangle(-234.5,-365.6,463.6,676.4), new cjs.Rectangle(-234.7,-365.6,463.8,676.8), new cjs.Rectangle(-234.7,-365.6,463.7,677.1), new cjs.Rectangle(-234.9,-365.6,463.9,677.5), new cjs.Rectangle(-235,-365.5,464,677.8), new cjs.Rectangle(-235.2,-365.2,464.2,677.9), new cjs.Rectangle(-235.1,-365.2,464.2,678.3), new cjs.Rectangle(-235.2,-365.2,464.3,678.6), new cjs.Rectangle(-235.4,-365.2,464.5,679.1), new cjs.Rectangle(-235.4,-365.1,464.4,679.3), new cjs.Rectangle(-235.6,-365.1,464.6,679.7), new cjs.Rectangle(-235.7,-365.1,464.7,680.1), new cjs.Rectangle(-235.8,-365.1,464.8,680.5), new cjs.Rectangle(-235.8,-365.1,464.9,680.8), new cjs.Rectangle(-235.9,-365,465,681.2), new cjs.Rectangle(-236,-365,465.1,681.6), new cjs.Rectangle(-236.2,-364.6,465.2,681.5), new cjs.Rectangle(-236.2,-364.6,465.2,681.9), new cjs.Rectangle(-236.3,-364.6,465.3,682.3), new cjs.Rectangle(-236.4,-364.6,465.5,682.6), new cjs.Rectangle(-236.5,-364.5,465.5,683), new cjs.Rectangle(-236.5,-364.5,465.6,683.3), new cjs.Rectangle(-236.7,-364.5,465.8,683.7), new cjs.Rectangle(-236.8,-364.5,465.9,684.1), new cjs.Rectangle(-236.8,-364.4,465.8,684.3), new cjs.Rectangle(-237,-364.4,466,684.7), new cjs.Rectangle(-237.1,-364.3,466.1,685), new cjs.Rectangle(-237.2,-364,466.3,685.1), new cjs.Rectangle(-237.4,-364.3,466.4,685.8), new cjs.Rectangle(-237.2,-364.3,466.3,685.4), new cjs.Rectangle(-237,-364.3,466.1,685), new cjs.Rectangle(-237,-364.3,466,684.7), new cjs.Rectangle(-236.8,-364.3,465.9,684.3), new cjs.Rectangle(-236.8,-364.3,465.9,684), new cjs.Rectangle(-236.7,-364.4,465.7,683.6), new cjs.Rectangle(-236.6,-364.4,465.6,683.3), new cjs.Rectangle(-236.6,-364.4,465.6,683), new cjs.Rectangle(-236.5,-364.4,465.5,682.6), new cjs.Rectangle(-236.3,-364.8,465.4,682.6), new cjs.Rectangle(-236.3,-364.8,465.4,682.2), new cjs.Rectangle(-236.2,-364.8,465.3,681.9), new cjs.Rectangle(-236,-364.8,465,681.5), new cjs.Rectangle(-235.9,-364.9,465,681.2), new cjs.Rectangle(-235.9,-364.9,465,680.8), new cjs.Rectangle(-235.8,-364.9,464.8,680.4), new cjs.Rectangle(-235.7,-364.9,464.7,680.1), new cjs.Rectangle(-235.6,-365.2,464.7,680), new cjs.Rectangle(-235.5,-365.2,464.6,679.7), new cjs.Rectangle(-235.3,-365.2,464.4,679.3), new cjs.Rectangle(-235.3,-365.3,464.3,679), new cjs.Rectangle(-235.3,-365.3,464.3,678.6), new cjs.Rectangle(-235.1,-365.2,464.2,678.2), new cjs.Rectangle(-235,-365.3,464,677.9), new cjs.Rectangle(-234.9,-365.2,464,677.4), new cjs.Rectangle(-234.9,-365.2,463.9,677.1), new cjs.Rectangle(-234.7,-365.7,463.7,677.1), new cjs.Rectangle(-234.6,-365.6,463.6,676.7), new cjs.Rectangle(-234.5,-365.6,463.6,676.3), new cjs.Rectangle(-234.4,-365.6,463.4,676), new cjs.Rectangle(-234.3,-365.6,463.3,675.6), new cjs.Rectangle(-234.3,-365.6,463.3,675.2), new cjs.Rectangle(-234.1,-365.6,463.2,674.8), new cjs.Rectangle(-234,-365.6,463,674.4), new cjs.Rectangle(-234,-366,463.1,674.5)];


(lib.hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// headdress
	this.headdress = new lib.hero2_hat_all_mc();
	this.headdress.setTransform(38,-294);

	this.timeline.addTween(cjs.Tween.get(this.headdress).to({rotation:-3.5,x:28,y:-279.8},29).to({rotation:0,x:38,y:-294},30).wait(1));

	// glasses
	this.glasses = new lib.hero2_glasses_all_mc();
	this.glasses.setTransform(26,-201.5);

	this.timeline.addTween(cjs.Tween.get(this.glasses).to({rotation:-3.5,x:21.6,y:-186.7},29).to({rotation:0,x:26,y:-201.5},30).wait(1));

	// body
	this.instance = new lib.hand_mc();
	this.instance.setTransform(-187,-105.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-92.5},29).to({y:-105.5},30).wait(1));

	// microphone
	this.microphone = new lib.hero2_mic_all_mc();
	this.microphone.setTransform(-196,-116.5);

	this.timeline.addTween(cjs.Tween.get(this.microphone).to({rotation:10.5,x:-195,y:-103.5},29).to({rotation:0,x:-196,y:-116.5},30).wait(1));

	// fringe
	this.fringe = new lib.hero2_fringe_all_mc();
	this.fringe.setTransform(40.5,-254.5);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({rotation:-3.5,x:32.9,y:-240.5},29).to({rotation:0,x:40.5,y:-254.5},30).wait(1));

	// earrings
	this.earrings = new lib.hero2_earrings_all_mc();
	this.earrings.setTransform(107.7,-178.5,1,1,0,0,0,62,-23);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({regX:62.1,regY:-22.9,rotation:-14.5,x:104.6,y:-168.7},29).to({regX:62,regY:-23,rotation:0,x:107.7,y:-178.5},30).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero2_eyebrows_all_mc();
	this.eyebrows.setTransform(50.5,-217.5);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).to({rotation:-3.5,x:45.1,y:-204.2},29).to({rotation:0,x:50.5,y:-217.5},30).wait(1));

	// lips
	this.lips = new lib.hero2_lips_all_mc();
	this.lips.setTransform(50.5,-217.5);

	this.timeline.addTween(cjs.Tween.get(this.lips).to({rotation:-3.5,x:45.1,y:-204.2},29).to({rotation:0,x:50.5,y:-217.5},30).wait(1));

	// shadows
	this.shadows = new lib.hero2_shadows_all_mc();
	this.shadows.setTransform(50.5,-217.5);

	this.timeline.addTween(cjs.Tween.get(this.shadows).to({rotation:-3.5,x:45.1,y:-204.2},29).to({rotation:0,x:50.5,y:-217.5},30).wait(1));

	// eyes
	this.eyes = new lib.hero2_eyes_all_mc();
	this.eyes.setTransform(50.5,-217.5);

	this.timeline.addTween(cjs.Tween.get(this.eyes).to({rotation:-3.5,x:45.1,y:-204.2},29).to({rotation:0,x:50.5,y:-217.5},30).wait(1));

	// body
	this.instance_1 = new lib.hero_head_mc();
	this.instance_1.setTransform(50.5,-217.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-3.5,x:45.1,y:-204.2},29).to({rotation:0,x:50.5,y:-217.5},30).wait(1));

	// earringsSecond
	this.earringsSecond = new lib.hero2_earringsb_all_mc();
	this.earringsSecond.setTransform(-16.3,-189.5,1,1,0,0,180,63,-25);

	this.timeline.addTween(cjs.Tween.get(this.earringsSecond).to({regX:63.1,regY:-25.1,skewX:6.8,skewY:186.8,x:-20,y:-172.3},29).to({regX:63,regY:-25,skewX:0,skewY:180,x:-16.3,y:-189.5},30).wait(1));

	// dress
	this.dress = new lib.hero2_dress_all_mc();
	this.dress.setTransform(11,74);

	this.timeline.addTween(cjs.Tween.get(this.dress).to({y:87},29).to({y:74},30).wait(1));

	// hair
	this.hair = new lib.hero2_hair_all_mc();
	this.hair.setTransform(40.5,-254.5);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({rotation:-3.5,x:32.9,y:-240.5},29).to({rotation:0,x:40.5,y:-254.5},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-234,-366,463.1,674.5);
p.frameBounds = [rect, new cjs.Rectangle(-234.1,-365.5,463.2,674.4), new cjs.Rectangle(-234.3,-365.1,463.4,674.5), new cjs.Rectangle(-234.6,-365,463.7,674.9), new cjs.Rectangle(-234.8,-364.6,463.8,674.9), new cjs.Rectangle(-235.1,-364.5,464.2,675.3), new cjs.Rectangle(-235.3,-364.1,464.3,675.3), new cjs.Rectangle(-235.6,-364.1,464.6,675.7), new cjs.Rectangle(-235.7,-363.6,464.8,675.7), new cjs.Rectangle(-236,-363.5,465,676.1), new cjs.Rectangle(-236.1,-363.1,465.2,676.1), new cjs.Rectangle(-236.3,-363.1,465.4,676.5), new cjs.Rectangle(-236.6,-362.7,465.7,676.6), new cjs.Rectangle(-236.7,-362.6,465.8,676.9), new cjs.Rectangle(-237,-362.1,466.1,676.9), new cjs.Rectangle(-237.2,-362.2,466.3,677.3), new cjs.Rectangle(-237.5,-361.7,466.5,677.3), new cjs.Rectangle(-237.6,-361.6,466.7,677.7), new cjs.Rectangle(-237.9,-361.2,466.9,677.7), new cjs.Rectangle(-238,-361.1,467.1,678.1), new cjs.Rectangle(-238.1,-360.7,467.2,678.2), new cjs.Rectangle(-238.5,-360.6,467.5,678.5), new cjs.Rectangle(-238.6,-360.2,467.6,678.5), new cjs.Rectangle(-238.8,-360.2,467.9,679), new cjs.Rectangle(-239,-359.8,468,679), new cjs.Rectangle(-239.2,-359.3,468.3,679), new cjs.Rectangle(-239.4,-359.2,468.4,679.3), new cjs.Rectangle(-239.6,-358.8,468.7,679.4), new cjs.Rectangle(-239.8,-358.7,468.8,679.8), new cjs.Rectangle(-240,-358.6,469.1,680.1), new cjs.Rectangle(-239.7,-358.7,468.8,679.7), new cjs.Rectangle(-239.6,-358.7,468.6,679.4), new cjs.Rectangle(-239.3,-359.1,468.3,679.3), new cjs.Rectangle(-239.2,-359.6,468.3,679.3), new cjs.Rectangle(-239,-359.6,468,679), new cjs.Rectangle(-238.8,-360,467.8,678.9), new cjs.Rectangle(-238.7,-360.1,467.7,678.5), new cjs.Rectangle(-238.4,-360.5,467.5,678.6), new cjs.Rectangle(-238.3,-360.5,467.4,678.1), new cjs.Rectangle(-238,-361,467.1,678.1), new cjs.Rectangle(-237.8,-361.1,466.9,677.8), new cjs.Rectangle(-237.7,-361.4,466.8,677.7), new cjs.Rectangle(-237.4,-361.5,466.5,677.4), new cjs.Rectangle(-237.3,-361.9,466.4,677.3), new cjs.Rectangle(-237,-362,466,677), new cjs.Rectangle(-236.9,-362.4,466,676.9), new cjs.Rectangle(-236.7,-362.7,465.8,676.9), new cjs.Rectangle(-236.5,-362.9,465.5,676.6), new cjs.Rectangle(-236.3,-363.2,465.4,676.5), new cjs.Rectangle(-236,-363.3,465.1,676.2), new cjs.Rectangle(-235.8,-363.7,464.9,676.1), new cjs.Rectangle(-235.7,-363.8,464.8,675.7), new cjs.Rectangle(-235.4,-364.2,464.4,675.7), new cjs.Rectangle(-235.2,-364.2,464.2,675.3), new cjs.Rectangle(-235,-364.7,464,675.3), new cjs.Rectangle(-234.8,-364.6,463.8,674.8), new cjs.Rectangle(-234.6,-365,463.7,674.8), new cjs.Rectangle(-234.3,-365.1,463.4,674.5), new cjs.Rectangle(-234.1,-365.5,463.2,674.5), new cjs.Rectangle(-234,-366,463.1,674.5)];


(lib.hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// headdress
	this.headdress = new lib.hero1_hat_all_mc();
	this.headdress.setTransform(38,-294);

	this.timeline.addTween(cjs.Tween.get(this.headdress).to({rotation:-5.9,x:21.5,y:-272.3},39).to({rotation:0,x:38,y:-294},40).wait(1));

	// glasses
	this.glasses = new lib.hero1_glasses_all_mc();
	this.glasses.setTransform(26,-201.5);

	this.timeline.addTween(cjs.Tween.get(this.glasses).to({rotation:-5.9,x:19.2,y:-179.1},39).to({rotation:0,x:26,y:-201.5},40).wait(1));

	// body
	this.instance = new lib.hand_mc();
	this.instance.setTransform(-187,-105.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-86.5},39).to({y:-105.5},40).wait(1));

	// microphone
	this.microphone = new lib.hero1_mic_all_mc();
	this.microphone.setTransform(-196,-116.5);

	this.timeline.addTween(cjs.Tween.get(this.microphone).to({rotation:7,x:-195,y:-97.5},39).to({rotation:0,x:-196,y:-116.5},40).wait(1));

	// fringe
	this.fringe = new lib.hero1_fringe_all_mc();
	this.fringe.setTransform(40.5,-254.5);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({rotation:-5.9,x:28.2,y:-233.3},39).to({rotation:0,x:40.5,y:-254.5},40).wait(1));

	// earrings
	this.earrings = new lib.hero1_earrings_all_mc();
	this.earrings.setTransform(45.7,-155.5);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({rotation:-11.7,x:46.5,y:-129.4},39).to({rotation:0,x:45.7,y:-155.5},40).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero1_eyebrows_all_mc();
	this.eyebrows.setTransform(50.5,-217.5);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).to({rotation:-5.9,x:42,y:-197.6},39).to({rotation:0,x:50.5,y:-217.5},40).wait(1));

	// lips
	this.lips = new lib.hero1_lips_all_mc();
	this.lips.setTransform(50.5,-217.5);

	this.timeline.addTween(cjs.Tween.get(this.lips).to({rotation:-5.9,x:42,y:-197.6},39).to({rotation:0,x:50.5,y:-217.5},40).wait(1));

	// shadows
	this.shadows = new lib.hero1_shadows_all_mc();
	this.shadows.setTransform(50.5,-217.5);

	this.timeline.addTween(cjs.Tween.get(this.shadows).to({rotation:-5.9,x:42,y:-197.6},39).to({rotation:0,x:50.5,y:-217.5},40).wait(1));

	// eyes
	this.eyes = new lib.hero1_eyes_all_mc();
	this.eyes.setTransform(50.5,-217.5);

	this.timeline.addTween(cjs.Tween.get(this.eyes).to({rotation:-5.9,x:42,y:-197.6},39).to({rotation:0,x:50.5,y:-217.5},40).wait(1));

	// body
	this.instance_1 = new lib.hero_head_mc();
	this.instance_1.setTransform(50.5,-217.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-5.9,x:42,y:-197.6},39).to({rotation:0,x:50.5,y:-217.5},40).wait(1));

	// earringsSecond
	this.earringsSecond = new lib.hero1_earringsb_all_mc();
	this.earringsSecond.setTransform(45.7,-155.5);

	this.timeline.addTween(cjs.Tween.get(this.earringsSecond).to({rotation:0.5,x:45.5,y:-129.4},39).to({rotation:0,x:45.7,y:-155.5},40).wait(1));

	// dress
	this.dress = new lib.hero1_dress_all_mc();
	this.dress.setTransform(11,74);

	this.timeline.addTween(cjs.Tween.get(this.dress).to({y:93},39).to({y:74},40).wait(1));

	// hair
	this.hair = new lib.hero1_hair_all_mc();
	this.hair.setTransform(40.5,-254.5);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({rotation:-5.9,x:28.2,y:-233.3},39).to({rotation:0,x:40.5,y:-254.5},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-234,-366,463.1,674.5);
p.frameBounds = [rect, new cjs.Rectangle(-234,-365.5,463,674.5), new cjs.Rectangle(-234.1,-365.4,463.2,674.8), new cjs.Rectangle(-234.3,-364.9,463.3,674.8), new cjs.Rectangle(-234.3,-364.8,463.3,675.2), new cjs.Rectangle(-234.4,-364.6,463.5,675.6), new cjs.Rectangle(-234.6,-364.2,463.6,675.6), new cjs.Rectangle(-234.7,-364.1,463.8,676), new cjs.Rectangle(-234.7,-363.6,463.8,676), new cjs.Rectangle(-234.9,-363.5,463.9,676.4), new cjs.Rectangle(-235,-363.4,464.1,676.7), new cjs.Rectangle(-235,-362.9,464.1,676.7), new cjs.Rectangle(-235.2,-362.8,464.2,677.1), new cjs.Rectangle(-235.3,-362.3,464.4,677.2), new cjs.Rectangle(-235.4,-362.2,464.5,677.5), new cjs.Rectangle(-235.4,-362.1,464.5,677.9), new cjs.Rectangle(-235.6,-361.6,464.6,677.9), new cjs.Rectangle(-235.7,-361.5,464.7,678.3), new cjs.Rectangle(-235.7,-361,464.8,678.3), new cjs.Rectangle(-235.8,-360.9,464.9,678.6), new cjs.Rectangle(-236,-360.8,465,679), new cjs.Rectangle(-236.1,-360.3,465.2,679.1), new cjs.Rectangle(-236.1,-360.2,465.2,679.3), new cjs.Rectangle(-236.2,-360.1,465.3,679.8), new cjs.Rectangle(-236.4,-359.6,465.5,679.8), new cjs.Rectangle(-236.4,-359.4,465.4,680.1), new cjs.Rectangle(-236.5,-358.9,465.6,680.1), new cjs.Rectangle(-236.7,-358.8,465.7,680.5), new cjs.Rectangle(-236.8,-358.7,465.9,680.8), new cjs.Rectangle(-236.8,-358.2,465.8,680.9), new cjs.Rectangle(-237,-358.1,466,681.2), new cjs.Rectangle(-237,-357.6,466.1,681.2), new cjs.Rectangle(-237.1,-357.5,466.1,681.6), new cjs.Rectangle(-237.2,-357.4,466.3,682), new cjs.Rectangle(-237.3,-356.9,466.4,681.9), new cjs.Rectangle(-237.4,-356.7,466.5,682.3), new cjs.Rectangle(-237.4,-356.2,466.5,682.3), new cjs.Rectangle(-237.6,-356.1,466.6,682.6), new cjs.Rectangle(-237.7,-356,466.8,683), new cjs.Rectangle(-237.8,-355.8,466.9,683.3), new cjs.Rectangle(-237.7,-356,466.7,683), new cjs.Rectangle(-237.6,-356.1,466.6,682.6), new cjs.Rectangle(-237.4,-356.5,466.4,682.6), new cjs.Rectangle(-237.4,-356.6,466.5,682.2), new cjs.Rectangle(-237.3,-356.8,466.3,681.9), new cjs.Rectangle(-237.2,-357.2,466.2,681.9), new cjs.Rectangle(-237.1,-357.4,466.2,681.6), new cjs.Rectangle(-237.1,-357.8,466.1,681.5), new cjs.Rectangle(-236.9,-358,466,681.2), new cjs.Rectangle(-236.8,-358.1,465.9,680.8), new cjs.Rectangle(-236.8,-358.6,465.8,680.9), new cjs.Rectangle(-236.7,-358.7,465.7,680.5), new cjs.Rectangle(-236.5,-359.2,465.6,680.6), new cjs.Rectangle(-236.5,-359.3,465.6,680.1), new cjs.Rectangle(-236.4,-359.3,465.4,679.7), new cjs.Rectangle(-236.3,-359.8,465.3,679.7), new cjs.Rectangle(-236.3,-359.9,465.3,679.3), new cjs.Rectangle(-236.1,-360.4,465.2,679.3), new cjs.Rectangle(-236,-360.5,465,679), new cjs.Rectangle(-235.9,-360.6,465,678.6), new cjs.Rectangle(-235.8,-361.1,464.9,678.6), new cjs.Rectangle(-235.7,-361.2,464.8,678.2), new cjs.Rectangle(-235.6,-361.7,464.6,678.3), new cjs.Rectangle(-235.6,-361.8,464.6,677.9), new cjs.Rectangle(-235.5,-361.9,464.5,677.5), new cjs.Rectangle(-235.3,-362.4,464.3,677.6), new cjs.Rectangle(-235.3,-362.5,464.3,677.2), new cjs.Rectangle(-235.1,-362.9,464.2,677.1), new cjs.Rectangle(-235.1,-363.1,464.1,676.8), new cjs.Rectangle(-234.9,-363.2,463.9,676.4), new cjs.Rectangle(-234.9,-363.6,463.9,676.4), new cjs.Rectangle(-234.8,-363.7,463.8,676), new cjs.Rectangle(-234.6,-364.2,463.6,676), new cjs.Rectangle(-234.6,-364.3,463.6,675.6), new cjs.Rectangle(-234.4,-364.4,463.5,675.3), new cjs.Rectangle(-234.3,-364.8,463.3,675.2), new cjs.Rectangle(-234.3,-364.9,463.4,674.8), new cjs.Rectangle(-234.2,-365.4,463.2,674.8), new cjs.Rectangle(-234,-365.5,463.1,674.5), new cjs.Rectangle(-234,-366,463.1,674.5)];


(lib.headdress_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0.1,0.56,0.56,0,0,0,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-28,56,56);
p.frameBounds = [rect];


(lib.hairstyle_check_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hairstyle_check_1_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},39).to({alpha:0.102},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.glasses_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0.1,0.56,0.56,0,0,0,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-28,56,56);
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

	// graph
	this.instance = new lib.eyes_check_1_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},39).to({alpha:0.102},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-100,160,200);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.eyes_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.eyes_check_1_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.eyes_check_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-100,160,200);
p.frameBounds = [rect, rect];


(lib.eyes_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_6_1_img();
	this.instance.setTransform(-70,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AltN+IkqkPIAAzAIFxksII6AAIGFFJIAAS8IlcD2g");
	this.shape.setTransform(1.5,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-100,160,200);
p.frameBounds = [rect];


(lib.eyes_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_5_1_img();
	this.instance.setTransform(-70,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AltN+IkqkPIAAzAIFxksII6AAIGFFJIAAS8IlcD2g");
	this.shape.setTransform(1.5,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-100,160,200);
p.frameBounds = [rect];


(lib.eyes_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_4_1_img();
	this.instance.setTransform(-70,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AltN+IkqkPIAAzAIFxksII6AAIGFFJIAAS8IlcD2g");
	this.shape.setTransform(1.5,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-100,160,200);
p.frameBounds = [rect];


(lib.eyes_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_3_1_img();
	this.instance.setTransform(-70,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AltN+IkqkPIAAzAIFxksII6AAIGFFJIAAS8IlcD2g");
	this.shape.setTransform(1.5,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-100,160,200);
p.frameBounds = [rect];


(lib.eyes_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_2_1_img();
	this.instance.setTransform(-70,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AltN+IkqkPIAAzAIFxksII6AAIGFFJIAAS8IlcD2g");
	this.shape.setTransform(1.5,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-100,160,200);
p.frameBounds = [rect];


(lib.eyes_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_1_1_img();
	this.instance.setTransform(-70,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyes_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AltN+IkqkPIAAzAIFxksII6AAIGFFJIAAS8IlcD2g");
	this.shape.setTransform(1.5,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-100,160,200);
p.frameBounds = [rect];


(lib.eyebrows_check_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.eyebrows_check_1_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},39).to({alpha:0.102},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.eyebrows_check_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.eyebrows_check_1_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.eyebrows_check_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect];


(lib.eyebrows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_6_1_img();
	this.instance.setTransform(-85,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxLJ3Ibz55IGkGEI8RaBg");
	this.shape.setTransform(-3.4,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113.4,-99.3,220.1,205.6);
p.frameBounds = [rect];


(lib.eyebrows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_5_1_img();
	this.instance.setTransform(-85,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxLJ3Ibz55IGkGEI8RaBg");
	this.shape.setTransform(-3.4,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113.4,-99.3,220.1,205.6);
p.frameBounds = [rect];


(lib.eyebrows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_4_1_img();
	this.instance.setTransform(-85,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxLJ3Ibz55IGkGEI8RaBg");
	this.shape.setTransform(-3.4,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113.4,-99.3,220.1,205.6);
p.frameBounds = [rect];


(lib.eyebrows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_3_1_img();
	this.instance.setTransform(-85,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxLJ3Ibz55IGkGEI8RaBg");
	this.shape.setTransform(-3.4,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113.4,-99.3,220.1,205.6);
p.frameBounds = [rect];


(lib.eyebrows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_2_1_img();
	this.instance.setTransform(-85,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxLJ3Ibz55IGkGEI8RaBg");
	this.shape.setTransform(-3.4,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113.4,-99.3,220.1,205.6);
p.frameBounds = [rect];


(lib.eyebrows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_1_1_img();
	this.instance.setTransform(-85,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.eyebrows_check_0_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxLJ3Ibz55IGkGEI8RaBg");
	this.shape.setTransform(-3.4,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113.4,-99.3,220.1,205.6);
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


(lib.dress_check_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_check_1_3_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},39).to({alpha:0.102},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-135,200,270);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.dress_check_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_check_1_2_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},39).to({alpha:0.102},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-140,210,280);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.dress_check_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dress_check_1_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},39).to({alpha:0.102},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-130,210,260);
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


(lib.closet_2_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.microphone_7 = new lib.microphone_7_1_mc();
	this.microphone_7.setTransform(0,50);

	this.microphone_9 = new lib.microphone_9_1_mc();
	this.microphone_9.setTransform(60,-130);

	this.microphone_3 = new lib.microphone_3_1_mc();
	this.microphone_3.setTransform(-35,-140);

	this.microphone_4 = new lib.microphone_4_1_mc();
	this.microphone_4.setTransform(0,45);

	this.microphone_6 = new lib.microphone_6_1_mc();
	this.microphone_6.setTransform(60,-140);

	this.microphone_5 = new lib.microphone_5_1_mc();
	this.microphone_5.setTransform(-40,-135);

	this.microphone_2 = new lib.microphone_2_1_mc();
	this.microphone_2.setTransform(-45,-145);

	this.microphone_1 = new lib.microphone_1_1_mc();
	this.microphone_1.setTransform(0,55);

	this.microphone_8 = new lib.microphone_8_1_mc();
	this.microphone_8.setTransform(55,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.microphone_3},{t:this.microphone_9},{t:this.microphone_7}]}).to({state:[{t:this.microphone_5},{t:this.microphone_6},{t:this.microphone_4}]},1).to({state:[{t:this.microphone_8},{t:this.microphone_1},{t:this.microphone_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-195,180,302.5);
p.frameBounds = [rect, new cjs.Rectangle(-82.5,-195,187.5,300), new cjs.Rectangle(-90,-202.5,195,305.5)];


(lib.closet_2_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(132,-125);

	this.timeline.addTween(cjs.Tween.get(this.earrings_0).wait(6));

	// options
	this.earrings_1 = new lib.earrings_1_3_mc();

	this.earrings_2 = new lib.earrings_2_3_mc();

	this.earrings_3 = new lib.earrings_3_3_mc();

	this.earrings_4 = new lib.earrings_4_3_mc();

	this.earrings_5 = new lib.earrings_5_3_mc();

	this.earrings_6 = new lib.earrings_6_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.earrings_1}]}).to({state:[{t:this.earrings_2}]},1).to({state:[{t:this.earrings_3}]},1).to({state:[{t:this.earrings_4}]},1).to({state:[{t:this.earrings_5}]},1).to({state:[{t:this.earrings_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-160,255,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.closet_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.microphone_7 = new lib.microphone_7_1_mc();
	this.microphone_7.setTransform(0,50);

	this.microphone_9 = new lib.microphone_9_1_mc();
	this.microphone_9.setTransform(60,-130);

	this.microphone_3 = new lib.microphone_3_1_mc();
	this.microphone_3.setTransform(-35,-140);

	this.microphone_4 = new lib.microphone_4_1_mc();
	this.microphone_4.setTransform(0,45);

	this.microphone_6 = new lib.microphone_6_1_mc();
	this.microphone_6.setTransform(60,-140);

	this.microphone_5 = new lib.microphone_5_1_mc();
	this.microphone_5.setTransform(-40,-135);

	this.microphone_2 = new lib.microphone_2_1_mc();
	this.microphone_2.setTransform(-45,-145);

	this.microphone_1 = new lib.microphone_1_1_mc();
	this.microphone_1.setTransform(0,55);

	this.microphone_8 = new lib.microphone_8_1_mc();
	this.microphone_8.setTransform(55,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.microphone_3},{t:this.microphone_9},{t:this.microphone_7}]}).to({state:[{t:this.microphone_5},{t:this.microphone_6},{t:this.microphone_4}]},1).to({state:[{t:this.microphone_8},{t:this.microphone_1},{t:this.microphone_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-195,180,302.5);
p.frameBounds = [rect, new cjs.Rectangle(-82.5,-195,187.5,300), new cjs.Rectangle(-90,-202.5,195,305.5)];


(lib.closet_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(132,-125);

	this.timeline.addTween(cjs.Tween.get(this.earrings_0).wait(6));

	// options
	this.earrings_1 = new lib.earrings_1_2_mc();
	this.earrings_1.setTransform(0,-10);

	this.earrings_2 = new lib.earrings_2_2_mc();

	this.earrings_3 = new lib.earrings_3_2_mc();

	this.earrings_4 = new lib.earrings_4_2_mc();

	this.earrings_5 = new lib.earrings_5_2_mc();

	this.earrings_6 = new lib.earrings_6_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.earrings_1}]}).to({state:[{t:this.earrings_2}]},1).to({state:[{t:this.earrings_3}]},1).to({state:[{t:this.earrings_4}]},1).to({state:[{t:this.earrings_5}]},1).to({state:[{t:this.earrings_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-170,255,320);
p.frameBounds = [rect, rect=new cjs.Rectangle(-95,-160,255,320), rect, rect, rect, rect];


(lib.closet_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.microphone_7 = new lib.microphone_7_1_mc();
	this.microphone_7.setTransform(0,50);

	this.microphone_9 = new lib.microphone_9_1_mc();
	this.microphone_9.setTransform(60,-130);

	this.microphone_3 = new lib.microphone_3_1_mc();
	this.microphone_3.setTransform(-35,-140);

	this.microphone_4 = new lib.microphone_4_1_mc();
	this.microphone_4.setTransform(0,45);

	this.microphone_6 = new lib.microphone_6_1_mc();
	this.microphone_6.setTransform(60,-140);

	this.microphone_5 = new lib.microphone_5_1_mc();
	this.microphone_5.setTransform(-40,-135);

	this.microphone_2 = new lib.microphone_2_1_mc();
	this.microphone_2.setTransform(-45,-145);

	this.microphone_1 = new lib.microphone_1_1_mc();
	this.microphone_1.setTransform(0,55);

	this.microphone_8 = new lib.microphone_8_1_mc();
	this.microphone_8.setTransform(55,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.microphone_3},{t:this.microphone_9},{t:this.microphone_7}]}).to({state:[{t:this.microphone_5},{t:this.microphone_6},{t:this.microphone_4}]},1).to({state:[{t:this.microphone_8},{t:this.microphone_1},{t:this.microphone_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-195,180,302.5);
p.frameBounds = [rect, new cjs.Rectangle(-82.5,-195,187.5,300), new cjs.Rectangle(-90,-202.5,195,305.5)];


(lib.closet_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(132,-125);

	this.timeline.addTween(cjs.Tween.get(this.earrings_0).wait(6));

	// options
	this.earrings_1 = new lib.earrings_1_1_mc();

	this.earrings_2 = new lib.earrings_2_1_mc();

	this.earrings_3 = new lib.earrings_3_1_mc();

	this.earrings_4 = new lib.earrings_4_1_mc();

	this.earrings_5 = new lib.earrings_5_1_mc();
	this.earrings_5.setTransform(0,-10);

	this.earrings_6 = new lib.earrings_6_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.earrings_1}]}).to({state:[{t:this.earrings_2}]},1).to({state:[{t:this.earrings_3}]},1).to({state:[{t:this.earrings_4}]},1).to({state:[{t:this.earrings_5}]},1).to({state:[{t:this.earrings_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-160,255,320);
p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(-95,-170,255,320), new cjs.Rectangle(-95,-160,255,320)];


(lib.closet_1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(167,-210);

	this.timeline.addTween(cjs.Tween.get(this.shadows_0).to({_off:true},5).wait(6));

	// options
	this.shadows_2 = new lib.shadows_2_1_mc();

	this.shadows_1 = new lib.shadows_1_1_mc();
	this.shadows_1.setTransform(0,-170);

	this.shadows_4 = new lib.shadows_4_1_mc();

	this.shadows_3 = new lib.shadows_3_1_mc();
	this.shadows_3.setTransform(0,-170);

	this.shadows_6 = new lib.shadows_6_1_mc();

	this.shadows_5 = new lib.shadows_5_1_mc();
	this.shadows_5.setTransform(0,-170);

	this.shadows_8 = new lib.shadows_8_1_mc();

	this.shadows_7 = new lib.shadows_7_1_mc();
	this.shadows_7.setTransform(0,-170);

	this.shadows_9 = new lib.shadows_9_1_mc();
	this.shadows_9.setTransform(0,-80);

	this.lips_3 = new lib.lips_3_1_mc();
	this.lips_3.setTransform(80,-5);

	this.lips_2 = new lib.lips_2_1_mc();
	this.lips_2.setTransform(-10,-160);

	this.lips_4 = new lib.lips_4_1_mc();
	this.lips_4.setTransform(-70,-5);

	this.lips_1 = new lib.lips_1_1_mc();
	this.lips_1.setTransform(80,-5);

	this.lips_6 = new lib.lips_6_1_mc();
	this.lips_6.setTransform(-10,-160);

	this.lips_5 = new lib.lips_5_1_mc();
	this.lips_5.setTransform(-70,-5);

	this.eyes_6 = new lib.eyes_6_1_mc();
	this.eyes_6.setTransform(70,-5);

	this.eyes_3 = new lib.eyes_3_1_mc();
	this.eyes_3.setTransform(-70,-5);

	this.eyes_2 = new lib.eyes_2_1_mc();
	this.eyes_2.setTransform(0,-175);

	this.eyes_1 = new lib.eyes_1_1_mc();
	this.eyes_1.setTransform(70,-5);

	this.eyes_5 = new lib.eyes_5_1_mc();
	this.eyes_5.setTransform(-70,-5);

	this.eyes_4 = new lib.eyes_4_1_mc();
	this.eyes_4.setTransform(0,-175);

	this.eyebrows_6 = new lib.eyebrows_6_1_mc();
	this.eyebrows_6.setTransform(-10,5,1,1,0,-15,165);

	this.eyebrows_3 = new lib.eyebrows_3_1_mc();
	this.eyebrows_3.setTransform(-10,-85,1,1,0,-15,165);

	this.eyebrows_2 = new lib.eyebrows_2_1_mc();
	this.eyebrows_2.setTransform(-10,-175,1,1,0,-15,165);

	this.eyebrows_1 = new lib.eyebrows_1_1_mc();
	this.eyebrows_1.setTransform(-10,5,1,1,0,-15,165);

	this.eyebrows_5 = new lib.eyebrows_5_1_mc();
	this.eyebrows_5.setTransform(-10,-85,1,1,0,-15,165);

	this.eyebrows_4 = new lib.eyebrows_4_1_mc();
	this.eyebrows_4.setTransform(-10,-175,1,1,0,-15,165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shadows_1},{t:this.shadows_2}]}).to({state:[{t:this.shadows_3},{t:this.shadows_4}]},1).to({state:[{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.shadows_7},{t:this.shadows_8}]},1).to({state:[{t:this.shadows_9}]},1).to({state:[{t:this.lips_4},{t:this.lips_2},{t:this.lips_3}]},1).to({state:[{t:this.lips_5},{t:this.lips_6},{t:this.lips_1}]},1).to({state:[{t:this.eyes_2},{t:this.eyes_3},{t:this.eyes_6}]},1).to({state:[{t:this.eyes_4},{t:this.eyes_5},{t:this.eyes_1}]},1).to({state:[{t:this.eyebrows_2},{t:this.eyebrows_3},{t:this.eyebrows_6}]},1).to({state:[{t:this.eyebrows_4},{t:this.eyebrows_5},{t:this.eyebrows_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-265,298,360);
p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(-95,-246,298,261), rect=new cjs.Rectangle(-130,-262.7,270,352.8), rect, rect=new cjs.Rectangle(-150,-275,300,370), rect, rect=new cjs.Rectangle(-138.7,-300.2,265.8,435.5), rect];


(lib.closet_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(167,-210);
	this.shadows_0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shadows_0).wait(4).to({_off:false},0).to({_off:true},5).wait(2));

	// options
	this.eyes_6 = new lib.eyes_6_1_mc();
	this.eyes_6.setTransform(70,-5);

	this.eyes_3 = new lib.eyes_3_1_mc();
	this.eyes_3.setTransform(-70,-5);

	this.eyes_2 = new lib.eyes_2_1_mc();
	this.eyes_2.setTransform(0,-175);

	this.eyes_1 = new lib.eyes_1_1_mc();
	this.eyes_1.setTransform(70,-5);

	this.eyes_5 = new lib.eyes_5_1_mc();
	this.eyes_5.setTransform(-70,-5);

	this.eyes_4 = new lib.eyes_4_1_mc();
	this.eyes_4.setTransform(0,-175);

	this.lips_3 = new lib.lips_3_1_mc();
	this.lips_3.setTransform(80,-5);

	this.lips_2 = new lib.lips_2_1_mc();
	this.lips_2.setTransform(-10,-160);

	this.lips_4 = new lib.lips_4_1_mc();
	this.lips_4.setTransform(-70,-5);

	this.lips_1 = new lib.lips_1_1_mc();
	this.lips_1.setTransform(80,-5);

	this.lips_6 = new lib.lips_6_1_mc();
	this.lips_6.setTransform(-10,-160);

	this.lips_5 = new lib.lips_5_1_mc();
	this.lips_5.setTransform(-70,-5);

	this.shadows_2 = new lib.shadows_2_1_mc();

	this.shadows_1 = new lib.shadows_1_1_mc();
	this.shadows_1.setTransform(0,-170);

	this.shadows_4 = new lib.shadows_4_1_mc();

	this.shadows_3 = new lib.shadows_3_1_mc();
	this.shadows_3.setTransform(0,-170);

	this.shadows_6 = new lib.shadows_6_1_mc();

	this.shadows_5 = new lib.shadows_5_1_mc();
	this.shadows_5.setTransform(0,-170);

	this.shadows_8 = new lib.shadows_8_1_mc();

	this.shadows_7 = new lib.shadows_7_1_mc();
	this.shadows_7.setTransform(0,-170);

	this.shadows_9 = new lib.shadows_9_1_mc();
	this.shadows_9.setTransform(0,-80);

	this.eyebrows_6 = new lib.eyebrows_6_1_mc();
	this.eyebrows_6.setTransform(-10,5,1,1,0,-15,165);

	this.eyebrows_3 = new lib.eyebrows_3_1_mc();
	this.eyebrows_3.setTransform(-10,-85,1,1,0,-15,165);

	this.eyebrows_2 = new lib.eyebrows_2_1_mc();
	this.eyebrows_2.setTransform(-10,-175,1,1,0,-15,165);

	this.eyebrows_1 = new lib.eyebrows_1_1_mc();
	this.eyebrows_1.setTransform(-10,5,1,1,0,-15,165);

	this.eyebrows_5 = new lib.eyebrows_5_1_mc();
	this.eyebrows_5.setTransform(-10,-85,1,1,0,-15,165);

	this.eyebrows_4 = new lib.eyebrows_4_1_mc();
	this.eyebrows_4.setTransform(-10,-175,1,1,0,-15,165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eyes_2},{t:this.eyes_3},{t:this.eyes_6}]}).to({state:[{t:this.eyes_4},{t:this.eyes_5},{t:this.eyes_1}]},1).to({state:[{t:this.lips_4},{t:this.lips_2},{t:this.lips_3}]},1).to({state:[{t:this.lips_5},{t:this.lips_6},{t:this.lips_1}]},1).to({state:[{t:this.shadows_1},{t:this.shadows_2}]},1).to({state:[{t:this.shadows_3},{t:this.shadows_4}]},1).to({state:[{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.shadows_7},{t:this.shadows_8}]},1).to({state:[{t:this.shadows_9}]},1).to({state:[{t:this.eyebrows_2},{t:this.eyebrows_3},{t:this.eyebrows_6}]},1).to({state:[{t:this.eyebrows_4},{t:this.eyebrows_5},{t:this.eyebrows_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-275,300,370);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-130,-262.7,270,352.8), rect, rect=new cjs.Rectangle(-95,-265,298,360), rect, rect, rect, new cjs.Rectangle(-95,-246,298,261), rect=new cjs.Rectangle(-138.7,-300.2,265.8,435.5), rect];


(lib.closet_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(167,-210);
	this.shadows_0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shadows_0).wait(4).to({_off:false},0).to({_off:true},5).wait(2));

	// options
	this.lips_3 = new lib.lips_3_1_mc();
	this.lips_3.setTransform(80,-5);

	this.lips_2 = new lib.lips_2_1_mc();
	this.lips_2.setTransform(-10,-160);

	this.lips_4 = new lib.lips_4_1_mc();
	this.lips_4.setTransform(-70,-5);

	this.lips_1 = new lib.lips_1_1_mc();
	this.lips_1.setTransform(80,-5);

	this.lips_6 = new lib.lips_6_1_mc();
	this.lips_6.setTransform(-10,-160);

	this.lips_5 = new lib.lips_5_1_mc();
	this.lips_5.setTransform(-70,-5);

	this.eyes_6 = new lib.eyes_6_1_mc();
	this.eyes_6.setTransform(70,-5);

	this.eyes_3 = new lib.eyes_3_1_mc();
	this.eyes_3.setTransform(-70,-5);

	this.eyes_2 = new lib.eyes_2_1_mc();
	this.eyes_2.setTransform(0,-175);

	this.eyes_1 = new lib.eyes_1_1_mc();
	this.eyes_1.setTransform(70,-5);

	this.eyes_5 = new lib.eyes_5_1_mc();
	this.eyes_5.setTransform(-70,-5);

	this.eyes_4 = new lib.eyes_4_1_mc();
	this.eyes_4.setTransform(0,-175);

	this.shadows_2 = new lib.shadows_2_1_mc();

	this.shadows_1 = new lib.shadows_1_1_mc();
	this.shadows_1.setTransform(0,-170);

	this.shadows_4 = new lib.shadows_4_1_mc();

	this.shadows_3 = new lib.shadows_3_1_mc();
	this.shadows_3.setTransform(0,-170);

	this.shadows_6 = new lib.shadows_6_1_mc();

	this.shadows_5 = new lib.shadows_5_1_mc();
	this.shadows_5.setTransform(0,-170);

	this.shadows_8 = new lib.shadows_8_1_mc();

	this.shadows_7 = new lib.shadows_7_1_mc();
	this.shadows_7.setTransform(0,-170);

	this.shadows_9 = new lib.shadows_9_1_mc();
	this.shadows_9.setTransform(0,-80);

	this.eyebrows_6 = new lib.eyebrows_6_1_mc();
	this.eyebrows_6.setTransform(-10,5,1,1,0,-15,165);

	this.eyebrows_3 = new lib.eyebrows_3_1_mc();
	this.eyebrows_3.setTransform(-10,-85,1,1,0,-15,165);

	this.eyebrows_2 = new lib.eyebrows_2_1_mc();
	this.eyebrows_2.setTransform(-10,-175,1,1,0,-15,165);

	this.eyebrows_1 = new lib.eyebrows_1_1_mc();
	this.eyebrows_1.setTransform(-10,5,1,1,0,-15,165);

	this.eyebrows_5 = new lib.eyebrows_5_1_mc();
	this.eyebrows_5.setTransform(-10,-85,1,1,0,-15,165);

	this.eyebrows_4 = new lib.eyebrows_4_1_mc();
	this.eyebrows_4.setTransform(-10,-175,1,1,0,-15,165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lips_4},{t:this.lips_2},{t:this.lips_3}]}).to({state:[{t:this.lips_5},{t:this.lips_6},{t:this.lips_1}]},1).to({state:[{t:this.eyes_2},{t:this.eyes_3},{t:this.eyes_6}]},1).to({state:[{t:this.eyes_4},{t:this.eyes_5},{t:this.eyes_1}]},1).to({state:[{t:this.shadows_1},{t:this.shadows_2}]},1).to({state:[{t:this.shadows_3},{t:this.shadows_4}]},1).to({state:[{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.shadows_7},{t:this.shadows_8}]},1).to({state:[{t:this.shadows_9}]},1).to({state:[{t:this.eyebrows_2},{t:this.eyebrows_3},{t:this.eyebrows_6}]},1).to({state:[{t:this.eyebrows_4},{t:this.eyebrows_5},{t:this.eyebrows_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-262.7,270,352.8);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-150,-275,300,370), rect, rect=new cjs.Rectangle(-95,-265,298,360), rect, rect, rect, new cjs.Rectangle(-95,-246,298,261), rect=new cjs.Rectangle(-138.7,-300.2,265.8,435.5), rect];


(lib.bodyDressupPanel_2_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_3
	this.hero_3 = new lib.closet_2_9_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-195,180,302.5);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_3
	this.hero_3 = new lib.closet_2_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-160,255,320);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_2_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-195,180,302.5);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_2_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-170,255,320);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_2_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-195,180,302.5);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-160,255,320);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_3
	this.hero_3 = new lib.closet_1_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-265,298,360);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-275,300,370);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-262.7,270,352.8);
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


(lib.animation_current_location_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_location_1_3_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},39).to({alpha:0.102},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-185,280,370);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_current_location_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_location_1_2_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},39).to({alpha:0.102},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-190,290,380);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_current_location_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_location_1_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},39).to({alpha:0.102},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-175,290,350);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.anim_title_style_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.title_style_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},29).to({alpha:1},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-45,360,90);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.anim_title_style_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.title_style_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},29).to({alpha:1},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-45,360,90);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.anim_title_style_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.title_style_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},29).to({alpha:1},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-45,360,90);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:29,end:59});

	// animation
	this.instance = new lib.curtain_1_mc();
	this.instance.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:0,alpha:0.012},0).to({alpha:1},13).wait(25).to({alpha:0.012},19).to({_off:true},1).wait(1));

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
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.67,scaleY:0.67,alpha:0.012},19).to({scaleX:1,scaleY:1,alpha:0.301},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect, new cjs.Rectangle(-24.5,-24.5,49.1,49.1), new cjs.Rectangle(-24.1,-24.1,48.3,48.3), new cjs.Rectangle(-23.6,-23.6,47.3,47.3), new cjs.Rectangle(-23.2,-23.2,46.5,46.5), new cjs.Rectangle(-22.8,-22.8,45.6,45.6), new cjs.Rectangle(-22.3,-22.3,44.8,44.8), new cjs.Rectangle(-21.9,-21.9,43.8,43.8), new cjs.Rectangle(-21.4,-21.4,43,43), new cjs.Rectangle(-21,-21,42.1,42.1), new cjs.Rectangle(-20.6,-20.6,41.3,41.3), new cjs.Rectangle(-20.1,-20.1,40.3,40.3), new cjs.Rectangle(-19.7,-19.7,39.5,39.5), new cjs.Rectangle(-19.2,-19.2,38.6,38.6), new cjs.Rectangle(-18.8,-18.8,37.7,37.7), new cjs.Rectangle(-18.4,-18.4,36.8,36.8), new cjs.Rectangle(-17.9,-17.9,36,36), new cjs.Rectangle(-17.5,-17.5,35.1,35.1), new cjs.Rectangle(-17.1,-17.1,34.2,34.2), new cjs.Rectangle(-16.6,-16.6,33.3,33.3), new cjs.Rectangle(-17,-17,34.2,34.2), new cjs.Rectangle(-17.4,-17.4,35,35), new cjs.Rectangle(-17.9,-17.9,35.8,35.8), new cjs.Rectangle(-18.3,-18.3,36.7,36.7), new cjs.Rectangle(-18.7,-18.7,37.5,37.5), new cjs.Rectangle(-19.1,-19.1,38.3,38.3), new cjs.Rectangle(-19.5,-19.5,39.2,39.2), new cjs.Rectangle(-19.9,-19.9,40,40), new cjs.Rectangle(-20.4,-20.4,40.8,40.8), new cjs.Rectangle(-20.8,-20.8,41.7,41.7), new cjs.Rectangle(-21.2,-21.2,42.5,42.5), new cjs.Rectangle(-21.6,-21.6,43.3,43.3), new cjs.Rectangle(-22,-22,44.2,44.2), new cjs.Rectangle(-22.4,-22.4,45,45), new cjs.Rectangle(-22.9,-22.9,45.8,45.8), new cjs.Rectangle(-23.3,-23.3,46.7,46.7), new cjs.Rectangle(-23.7,-23.7,47.5,47.5), new cjs.Rectangle(-24.1,-24.1,48.3,48.3), new cjs.Rectangle(-24.5,-24.5,49.2,49.2), new cjs.Rectangle(-25,-25,50,50)];


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
p.nominalBounds = rect = new cjs.Rectangle(-12,-12,24,24);
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
	this.instance = new lib.nav_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-10},9).to({x:5},20).to({x:0},10).wait(51));

	// animation
	this.instance_1 = new lib.nav_2_1_mc();
	this.instance_1.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("AmEMgQhsAAhNhNQhLhMAAhrIAAw3QAAhrBLhMQBNhNBsAAIMJAAQBsAABMBNQBNBMgBBrIAAQ3QABBrhNBMQhMBNhsAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-80,130,160);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-65.5,-80,130.6,160), new cjs.Rectangle(-66.6,-80,131.7,160), new cjs.Rectangle(-67.8,-80,132.8,160), new cjs.Rectangle(-68.9,-80,133.9,160), new cjs.Rectangle(-70,-80,135,160), new cjs.Rectangle(-69.2,-80,134.3,160), new cjs.Rectangle(-68.5,-80,133.5,160), new cjs.Rectangle(-67.7,-80,132.8,160), new cjs.Rectangle(-67,-80,132,160), new cjs.Rectangle(-66.2,-80,131.3,160), new cjs.Rectangle(-65.5,-80,130.5,160), rect=new cjs.Rectangle(-65,-80,130,160), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.location_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_9_img();
	this.instance.setTransform(-120,-165);

	this.instance_1 = new lib.location_1_9_img();
	this.instance_1.setTransform(-120,-165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_3_mc();

	this.instance_3 = new lib.animation_current_location_1_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AwjU+Qm4osAAsSQAAsRG4otQG3otJsABQJtgBG3ItQG4ItAAMRQAAMSm4IsQm3ItptAAQpsAAm3otg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-190,300,380);
p.frameBounds = [rect, rect, rect];


(lib.location_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_8_img();
	this.instance.setTransform(-120,-165);

	this.instance_1 = new lib.location_1_8_img();
	this.instance_1.setTransform(-120,-165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_3_mc();

	this.instance_3 = new lib.animation_current_location_1_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AwjU+Qm4osAAsSQAAsRG4otQG3otJsABQJtgBG3ItQG4ItAAMRQAAMSm4IsQm3ItptAAQpsAAm3otg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-190,300,380);
p.frameBounds = [rect, rect, rect];


(lib.location_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_7_img();
	this.instance.setTransform(-120,-165);

	this.instance_1 = new lib.location_1_7_img();
	this.instance_1.setTransform(-120,-165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_3_mc();

	this.instance_3 = new lib.animation_current_location_1_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AwjU+Qm4osAAsSQAAsRG4otQG3otJsABQJtgBG3ItQG4ItAAMRQAAMSm4IsQm3ItptAAQpsAAm3otg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-190,300,380);
p.frameBounds = [rect, rect, rect];


(lib.location_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_6_img();
	this.instance.setTransform(-125,-170);

	this.instance_1 = new lib.location_1_6_img();
	this.instance_1.setTransform(-125,-170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_2_mc();

	this.instance_3 = new lib.animation_current_location_1_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AwjU+Qm4osAAsSQAAsRG4otQG3otJsABQJtgBG3ItQG4ItAAMRQAAMSm4IsQm3ItptAAQpsAAm3otg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-190,300,380);
p.frameBounds = [rect, rect, rect];


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_5_img();
	this.instance.setTransform(-125,-170);

	this.instance_1 = new lib.location_1_5_img();
	this.instance_1.setTransform(-125,-170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_2_mc();

	this.instance_3 = new lib.animation_current_location_1_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AwjU+Qm4osAAsSQAAsRG4otQG3otJsABQJtgBG3ItQG4ItAAMRQAAMSm4IsQm3ItptAAQpsAAm3otg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-190,300,380);
p.frameBounds = [rect, rect, rect];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_4_img();
	this.instance.setTransform(-125,-170);

	this.instance_1 = new lib.location_1_4_img();
	this.instance_1.setTransform(-125,-170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_2_mc();

	this.instance_3 = new lib.animation_current_location_1_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AwjU+Qm4osAAsSQAAsRG4otQG3otJsABQJtgBG3ItQG4ItAAMRQAAMSm4IsQm3ItptAAQpsAAm3otg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-190,300,380);
p.frameBounds = [rect, rect, rect];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_3_img();
	this.instance.setTransform(-130,-160);

	this.instance_1 = new lib.location_1_3_img();
	this.instance_1.setTransform(-130,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_1_mc();

	this.instance_3 = new lib.animation_current_location_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AwjU+Qm4osAAsSQAAsRG4otQG3otJsABQJtgBG3ItQG4ItAAMRQAAMSm4IsQm3ItptAAQpsAAm3otg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-190,300,380);
p.frameBounds = [rect, rect, rect];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_2_img();
	this.instance.setTransform(-130,-160);

	this.instance_1 = new lib.location_1_2_img();
	this.instance_1.setTransform(-130,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_1_mc();

	this.instance_3 = new lib.animation_current_location_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AwjU+Qm4osAAsSQAAsRG4otQG3otJsABQJtgBG3ItQG4ItAAMRQAAMSm4IsQm3ItptAAQpsAAm3otg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-190,300,380);
p.frameBounds = [rect, rect, rect];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_1_img();
	this.instance.setTransform(-130,-160);

	this.instance_1 = new lib.location_1_1_img();
	this.instance_1.setTransform(-130,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_1_1_mc();

	this.instance_3 = new lib.animation_current_location_1_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AwjU+Qm4osAAsSQAAsRG4otQG3otJsABQJtgBG3ItQG4ItAAMRQAAMSm4IsQm3ItptAAQpsAAm3otg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-190,300,380);
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


(lib.hairstyle_check_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hairstyle_check_0_1_mc();
	this.instance.alpha = 0.602;

	this.instance_1 = new lib.hairstyle_check_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect, rect];


(lib.hairstyle_11_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_11_1_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqeKgQkXkXAAmJQAAmIEXkWQEWkXGIAAQGJAAEXEXQEVEWABGIQgBGJkVEXQkXEVmJABQmIgBkWkVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.hairstyle_10_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_10_1_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqeKgQkXkXAAmJQAAmIEXkWQEWkXGIAAQGJAAEXEXQEVEWABGIQgBGJkVEXQkXEVmJABQmIgBkWkVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.hairstyle_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_9_1_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqeKgQkXkXAAmJQAAmIEXkWQEWkXGIAAQGJAAEXEXQEVEWABGIQgBGJkVEXQkXEVmJABQmIgBkWkVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.hairstyle_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_8_1_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqeKgQkXkXAAmJQAAmIEXkWQEWkXGIAAQGJAAEXEXQEVEWABGIQgBGJkVEXQkXEVmJABQmIgBkWkVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.hairstyle_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_7_1_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqeKgQkXkXAAmJQAAmIEXkWQEWkXGIAAQGJAAEXEXQEVEWABGIQgBGJkVEXQkXEVmJABQmIgBkWkVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.hairstyle_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_6_1_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqeKgQkXkXAAmJQAAmIEXkWQEWkXGIAAQGJAAEXEXQEVEWABGIQgBGJkVEXQkXEVmJABQmIgBkWkVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.hairstyle_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_5_1_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqeKgQkXkXAAmJQAAmIEXkWQEWkXGIAAQGJAAEXEXQEVEWABGIQgBGJkVEXQkXEVmJABQmIgBkWkVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.hairstyle_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_4_1_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqeKgQkXkXAAmJQAAmIEXkWQEWkXGIAAQGJAAEXEXQEVEWABGIQgBGJkVEXQkXEVmJABQmIgBkWkVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.hairstyle_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_3_1_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqeKgQkXkXAAmJQAAmIEXkWQEWkXGIAAQGJAAEXEXQEVEWABGIQgBGJkVEXQkXEVmJABQmIgBkWkVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.hairstyle_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_2_1_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqeKgQkXkXAAmJQAAmIEXkWQEWkXGIAAQGJAAEXEXQEVEWABGIQgBGJkVEXQkXEVmJABQmIgBkWkVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.hairstyle_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_1_1_img();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.hairstyle_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqeKgQkXkXAAmJQAAmIEXkWQEWkXGIAAQGJAAEXEXQEVEWABGIQgBGJkVEXQkXEVmJABQmIgBkWkVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.frame_locations_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":149});

	// timeline functions:
	this.frame_29 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.1);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(40).call(this.frame_69).wait(15).call(this.frame_84).wait(15).call(this.frame_99).wait(51));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(180,270,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(120,270,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(60,270,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(0,270,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_1_mc();
	this.instance_4.setTransform(-60,270,0.833,0.833);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.location_progress_1_mc();
	this.instance_5.setTransform(-120,270,0.833,0.833);
	this.instance_5.alpha = 0.301;

	this.instance_6 = new lib.location_progress_1_mc();
	this.instance_6.setTransform(-180,270,0.833,0.833);
	this.instance_6.alpha = 0.301;

	this.instance_7 = new lib.location_progress_1_mc();
	this.instance_7.setTransform(-240,270,0.833,0.833);
	this.instance_7.alpha = 0.301;

	this.instance_8 = new lib.location_progress_2_mc();
	this.instance_8.setTransform(240,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(150));

	// location_7
	this.location_7 = new lib.location_7_mc();
	this.location_7.setTransform(-250,10);

	this.timeline.addTween(cjs.Tween.get(this.location_7).wait(69).to({y:-90},5).to({y:650},15).wait(61));

	// location_8
	this.location_8 = new lib.location_8_mc();
	this.location_8.setTransform(0,-60);

	this.timeline.addTween(cjs.Tween.get(this.location_8).wait(84).to({y:-140},5).to({y:550},15).wait(46));

	// location_9
	this.location_9 = new lib.location_9_mc();
	this.location_9.setTransform(250,10);

	this.timeline.addTween(cjs.Tween.get(this.location_9).wait(24).to({scaleX:1.07,scaleY:1.07},10).to({scaleX:1,scaleY:1},10).wait(5).to({scaleX:0.93,scaleY:0.93},5).to({scaleX:1,scaleY:1},10).wait(35).to({y:-90},5).to({y:650},15).wait(31));

	// title
	this.instance_9 = new lib.anim_title_style_3_mc();
	this.instance_9.setTransform(0,220);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-250,800,550);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-250,801,550), new cjs.Rectangle(-400,-250,802,550), new cjs.Rectangle(-400,-250,803,550), new cjs.Rectangle(-400,-250,804,550), new cjs.Rectangle(-400,-250,805,550), new cjs.Rectangle(-400,-250,806,550), new cjs.Rectangle(-400,-250,807,550), new cjs.Rectangle(-400,-250,808,550), new cjs.Rectangle(-400,-250,809,550), new cjs.Rectangle(-400,-250,810,550), new cjs.Rectangle(-400,-250,809,550), new cjs.Rectangle(-400,-250,808,550), new cjs.Rectangle(-400,-250,807,550), new cjs.Rectangle(-400,-250,806,550), new cjs.Rectangle(-400,-250,805,550), new cjs.Rectangle(-400,-250,804,550), new cjs.Rectangle(-400,-250,803,550), new cjs.Rectangle(-400,-250,802,550), new cjs.Rectangle(-400,-250,801,550), rect=new cjs.Rectangle(-400,-250,800,550), rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-250,798,550), new cjs.Rectangle(-400,-250,796,550), new cjs.Rectangle(-400,-250,794.1,550), new cjs.Rectangle(-400,-250,792.1,550), new cjs.Rectangle(-400,-250,790,550), new cjs.Rectangle(-400,-250,791,550), new cjs.Rectangle(-400,-250,792,550), new cjs.Rectangle(-400,-250,793.1,550), new cjs.Rectangle(-400,-250,794,550), new cjs.Rectangle(-400,-250,795,550), new cjs.Rectangle(-400,-250,796,550), new cjs.Rectangle(-400,-250,797,550), new cjs.Rectangle(-400,-250,798,550), new cjs.Rectangle(-400,-250,799,550), rect=new cjs.Rectangle(-400,-250,800,550), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-260,800,560), new cjs.Rectangle(-400,-280,800,580), rect=new cjs.Rectangle(-400,-250,800,550), rect, rect, rect, new cjs.Rectangle(-400,-250,800,596.7), new cjs.Rectangle(-400,-250,800,646), new cjs.Rectangle(-400,-250,800,695.4), new cjs.Rectangle(-400,-250,800,744.7), new cjs.Rectangle(-400,-250,800,794), new cjs.Rectangle(-400,-250,800,843.4), new cjs.Rectangle(-400,-266,800,908.7), new cjs.Rectangle(-400,-282,800,974), new cjs.Rectangle(-400,-298,800,1039.4), new cjs.Rectangle(-400,-314,800,1104.7), new cjs.Rectangle(-400,-330,800,1170), new cjs.Rectangle(-400,-284,800,1124), new cjs.Rectangle(-400,-238,800,1078), new cjs.Rectangle(-400,-192,800,1032), rect=new cjs.Rectangle(-400,-180,800,1020), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-200,800,1040), new cjs.Rectangle(-400,-220,800,1060), new cjs.Rectangle(-400,-240,800,1080), new cjs.Rectangle(-400,-260,800,1100), new cjs.Rectangle(-400,-280,800,1120), new cjs.Rectangle(-400,-230.6,800,1070.7), new cjs.Rectangle(-400,-181.3,800,1021.4), new cjs.Rectangle(-400,-132,800,972), new cjs.Rectangle(-400,-82.6,800,922.7), new cjs.Rectangle(-400,-33.3,800,873.4), new cjs.Rectangle(-400,16,800,824), new cjs.Rectangle(-400,65.4,800,774.7), new cjs.Rectangle(-400,114.7,800,725.4), new cjs.Rectangle(-400,164,800,676), rect=new cjs.Rectangle(-400,175,800,665), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":109});

	// timeline functions:
	this.frame_29 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.1);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(81));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(240,270,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(120,270,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(60,270,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(0,270,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_1_mc();
	this.instance_4.setTransform(-60,270,0.833,0.833);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.location_progress_1_mc();
	this.instance_5.setTransform(-120,270,0.833,0.833);
	this.instance_5.alpha = 0.301;

	this.instance_6 = new lib.location_progress_1_mc();
	this.instance_6.setTransform(-180,270,0.833,0.833);
	this.instance_6.alpha = 0.301;

	this.instance_7 = new lib.location_progress_1_mc();
	this.instance_7.setTransform(-240,270,0.833,0.833);
	this.instance_7.alpha = 0.301;

	this.instance_8 = new lib.location_progress_2_mc();
	this.instance_8.setTransform(180,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(110));

	// location_7
	this.location_7 = new lib.location_7_mc();
	this.location_7.setTransform(-250,10);

	this.timeline.addTween(cjs.Tween.get(this.location_7).wait(110));

	// location_8
	this.location_8 = new lib.location_8_mc();
	this.location_8.setTransform(0,-60);

	this.timeline.addTween(cjs.Tween.get(this.location_8).wait(24).to({scaleX:1.07,scaleY:1.07},10).to({scaleX:1,scaleY:1},10).wait(5).to({scaleX:0.93,scaleY:0.93},5).to({scaleX:1,scaleY:1},10).wait(46));

	// location_9
	this.location_9 = new lib.location_9_mc();
	this.location_9.setTransform(250,10);

	this.timeline.addTween(cjs.Tween.get(this.location_9).wait(110));

	// title
	this.instance_9 = new lib.anim_title_style_3_mc();
	this.instance_9.setTransform(0,220);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-250,800,550);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-251.2,800,551.3), new cjs.Rectangle(-400,-252.5,800,552.6), new cjs.Rectangle(-400,-253.8,800,553.8), new cjs.Rectangle(-400,-255,800,555.1), new cjs.Rectangle(-400,-256.3,800,556.4), new cjs.Rectangle(-400,-257.6,800,557.7), new cjs.Rectangle(-400,-258.9,800,558.9), new cjs.Rectangle(-400,-260.1,800,560.2), new cjs.Rectangle(-400,-261.4,800,561.5), new cjs.Rectangle(-400,-262.6,800,562.7), new cjs.Rectangle(-400,-261.4,800,561.4), new cjs.Rectangle(-400,-260.1,800,560.2), new cjs.Rectangle(-400,-258.8,800,558.9), new cjs.Rectangle(-400,-257.6,800,557.7), new cjs.Rectangle(-400,-256.2,800,556.3), new cjs.Rectangle(-400,-255,800,555.1), new cjs.Rectangle(-400,-253.7,800,553.8), new cjs.Rectangle(-400,-252.5,800,552.6), new cjs.Rectangle(-400,-251.2,800,551.2), rect=new cjs.Rectangle(-400,-250,800,550), rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-247.4,800,547.5), new cjs.Rectangle(-400,-244.9,800,545), new cjs.Rectangle(-400,-242.4,800,542.5), new cjs.Rectangle(-400,-239.9,800,539.9), new cjs.Rectangle(-400,-237.3,800,537.3), new cjs.Rectangle(-400,-238.6,800,538.6), new cjs.Rectangle(-400,-239.8,800,539.9), new cjs.Rectangle(-400,-241.1,800,541.2), new cjs.Rectangle(-400,-242.4,800,542.4), new cjs.Rectangle(-400,-243.5,800,543.6), new cjs.Rectangle(-400,-244.8,800,544.9), new cjs.Rectangle(-400,-246.1,800,546.2), new cjs.Rectangle(-400,-247.4,800,547.4), new cjs.Rectangle(-400,-248.7,800,548.7), rect=new cjs.Rectangle(-400,-250,800,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":139});

	// timeline functions:
	this.frame_29 = function() {
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
	this.frame_34 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.3);
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
	this.frame_49 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.3);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_59 = function() {
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
	this.frame_64 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.3);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(5).call(this.frame_34).wait(10).call(this.frame_44).wait(5).call(this.frame_49).wait(10).call(this.frame_59).wait(5).call(this.frame_64).wait(76));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(240,270,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(180,270,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(60,270,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(0,270,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_1_mc();
	this.instance_4.setTransform(-60,270,0.833,0.833);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.location_progress_1_mc();
	this.instance_5.setTransform(-120,270,0.833,0.833);
	this.instance_5.alpha = 0.301;

	this.instance_6 = new lib.location_progress_1_mc();
	this.instance_6.setTransform(-180,270,0.833,0.833);
	this.instance_6.alpha = 0.301;

	this.instance_7 = new lib.location_progress_1_mc();
	this.instance_7.setTransform(-240,270,0.833,0.833);
	this.instance_7.alpha = 0.301;

	this.instance_8 = new lib.location_progress_2_mc();
	this.instance_8.setTransform(120,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(140));

	// location_7
	this.location_7 = new lib.location_7_mc();
	this.location_7.setTransform(-250,10);

	this.timeline.addTween(cjs.Tween.get(this.location_7).wait(1).to({y:-550},0).wait(23).to({y:100},15).to({y:10},5).wait(35).to({scaleX:0.93,scaleY:0.93},5).to({scaleX:1,scaleY:1},10).wait(46));

	// location_8
	this.location_8 = new lib.location_8_mc();
	this.location_8.setTransform(0,-60);

	this.timeline.addTween(cjs.Tween.get(this.location_8).wait(1).to({y:-650},0).wait(38).to({y:40},15).to({y:-60},5).wait(81));

	// location_9
	this.location_9 = new lib.location_9_mc();
	this.location_9.setTransform(250,10);

	this.timeline.addTween(cjs.Tween.get(this.location_9).wait(1).to({y:-550},0).wait(53).to({y:100},15).to({y:10},5).wait(66));

	// title
	this.instance_9 = new lib.anim_title_style_3_mc();
	this.instance_9.setTransform(0,220);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-250,800,550);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,-840,800,1140), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-794,800,1094), new cjs.Rectangle(-400,-748,800,1048), rect=new cjs.Rectangle(-400,-740,800,1040), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-696.6,800,996.7), new cjs.Rectangle(-400,-653.3,800,953.4), new cjs.Rectangle(-400,-610,800,910), new cjs.Rectangle(-400,-566.6,800,866.7), new cjs.Rectangle(-400,-523.3,800,823.4), new cjs.Rectangle(-400,-480,800,780), new cjs.Rectangle(-400,-436.6,800,736.7), new cjs.Rectangle(-400,-393.3,800,693.4), new cjs.Rectangle(-400,-350,800,650), new cjs.Rectangle(-400,-306.6,800,606.7), new cjs.Rectangle(-400,-263.3,800,563.4), rect=new cjs.Rectangle(-400,-250,800,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-398,-250,798,550), new cjs.Rectangle(-396,-250,796,550), new cjs.Rectangle(-394,-250,794.1,550), new cjs.Rectangle(-392,-250,792.1,550), new cjs.Rectangle(-390,-250,790,550), new cjs.Rectangle(-391,-250,791,550), new cjs.Rectangle(-392,-250,792,550), new cjs.Rectangle(-393,-250,793.1,550), new cjs.Rectangle(-394,-250,794,550), new cjs.Rectangle(-394.9,-250,795,550), new cjs.Rectangle(-395.9,-250,796,550), new cjs.Rectangle(-396.9,-250,797,550), new cjs.Rectangle(-397.9,-250,798,550), new cjs.Rectangle(-398.9,-250,799,550), rect=new cjs.Rectangle(-400,-250,800,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":149});

	// timeline functions:
	this.frame_29 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.1);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(40).call(this.frame_69).wait(15).call(this.frame_84).wait(15).call(this.frame_99).wait(51));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(240,270,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(180,270,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(120,270,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(0,270,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_1_mc();
	this.instance_4.setTransform(-60,270,0.833,0.833);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.location_progress_1_mc();
	this.instance_5.setTransform(-120,270,0.833,0.833);
	this.instance_5.alpha = 0.301;

	this.instance_6 = new lib.location_progress_1_mc();
	this.instance_6.setTransform(-180,270,0.833,0.833);
	this.instance_6.alpha = 0.301;

	this.instance_7 = new lib.location_progress_1_mc();
	this.instance_7.setTransform(-240,270,0.833,0.833);
	this.instance_7.alpha = 0.301;

	this.instance_8 = new lib.location_progress_2_mc();
	this.instance_8.setTransform(60,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(150));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(-250,20);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(69).to({y:-80},5).to({y:650},15).wait(61));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(0,-60);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(84).to({y:-140},5).to({y:550},15).wait(46));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(250,20);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(24).to({scaleX:1.07,scaleY:1.07},10).to({scaleX:1,scaleY:1},10).wait(5).to({scaleX:0.93,scaleY:0.93},5).to({scaleX:1,scaleY:1},10).wait(35).to({y:-80},5).to({y:650},15).wait(31));

	// title
	this.instance_9 = new lib.anim_title_style_2_mc();
	this.instance_9.setTransform(0,220);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-250,800,550);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-250,801,550), new cjs.Rectangle(-400,-250,802,550), new cjs.Rectangle(-400,-250,803,550), new cjs.Rectangle(-400,-250,804,550), new cjs.Rectangle(-400,-250,805,550), new cjs.Rectangle(-400,-250,806,550), new cjs.Rectangle(-400,-250,807,550), new cjs.Rectangle(-400,-250,808,550), new cjs.Rectangle(-400,-250,809,550), new cjs.Rectangle(-400,-250,810,550), new cjs.Rectangle(-400,-250,809,550), new cjs.Rectangle(-400,-250,808,550), new cjs.Rectangle(-400,-250,807,550), new cjs.Rectangle(-400,-250,806,550), new cjs.Rectangle(-400,-250,805,550), new cjs.Rectangle(-400,-250,804,550), new cjs.Rectangle(-400,-250,803,550), new cjs.Rectangle(-400,-250,802,550), new cjs.Rectangle(-400,-250,801,550), rect=new cjs.Rectangle(-400,-250,800,550), rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-250,798,550), new cjs.Rectangle(-400,-250,796,550), new cjs.Rectangle(-400,-250,794.1,550), new cjs.Rectangle(-400,-250,792.1,550), new cjs.Rectangle(-400,-250,790,550), new cjs.Rectangle(-400,-250,791,550), new cjs.Rectangle(-400,-250,792,550), new cjs.Rectangle(-400,-250,793.1,550), new cjs.Rectangle(-400,-250,794,550), new cjs.Rectangle(-400,-250,795,550), new cjs.Rectangle(-400,-250,796,550), new cjs.Rectangle(-400,-250,797,550), new cjs.Rectangle(-400,-250,798,550), new cjs.Rectangle(-400,-250,799,550), rect=new cjs.Rectangle(-400,-250,800,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-270,800,570), rect=new cjs.Rectangle(-400,-250,800,550), rect, rect, new cjs.Rectangle(-400,-250,800,554.7), new cjs.Rectangle(-400,-250,800,603.4), new cjs.Rectangle(-400,-250,800,652), new cjs.Rectangle(-400,-250,800,700.7), new cjs.Rectangle(-400,-250,800,749.4), new cjs.Rectangle(-400,-250,800,798), new cjs.Rectangle(-400,-250,800,846.7), new cjs.Rectangle(-400,-266,800,911.4), new cjs.Rectangle(-400,-282,800,976), new cjs.Rectangle(-400,-298,800,1040.7), new cjs.Rectangle(-400,-314,800,1105.4), new cjs.Rectangle(-400,-330,800,1170), new cjs.Rectangle(-400,-284,800,1124), new cjs.Rectangle(-400,-238,800,1078), new cjs.Rectangle(-400,-192,800,1032), rect=new cjs.Rectangle(-400,-170,800,1010), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-190,800,1030), new cjs.Rectangle(-400,-210,800,1050), new cjs.Rectangle(-400,-230,800,1070), new cjs.Rectangle(-400,-250,800,1090), new cjs.Rectangle(-400,-270,800,1110), new cjs.Rectangle(-400,-221.3,800,1061.4), new cjs.Rectangle(-400,-172.6,800,1012.7), new cjs.Rectangle(-400,-124,800,964), new cjs.Rectangle(-400,-75.3,800,915.4), new cjs.Rectangle(-400,-26.6,800,866.7), new cjs.Rectangle(-400,22,800,818), new cjs.Rectangle(-400,70.7,800,769.4), new cjs.Rectangle(-400,119.4,800,720.7), new cjs.Rectangle(-400,168,800,672), rect=new cjs.Rectangle(-400,175,800,665), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":109});

	// timeline functions:
	this.frame_29 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.1);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(81));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(240,270,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(180,270,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(120,270,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(60,270,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_1_mc();
	this.instance_4.setTransform(-60,270,0.833,0.833);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.location_progress_1_mc();
	this.instance_5.setTransform(-120,270,0.833,0.833);
	this.instance_5.alpha = 0.301;

	this.instance_6 = new lib.location_progress_1_mc();
	this.instance_6.setTransform(-180,270,0.833,0.833);
	this.instance_6.alpha = 0.301;

	this.instance_7 = new lib.location_progress_1_mc();
	this.instance_7.setTransform(-240,270,0.833,0.833);
	this.instance_7.alpha = 0.301;

	this.instance_8 = new lib.location_progress_2_mc();
	this.instance_8.setTransform(0,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(110));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(-250,20);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(110));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(0,-60);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(24).to({scaleX:1.07,scaleY:1.07},10).to({scaleX:1,scaleY:1},10).wait(5).to({scaleX:0.93,scaleY:0.93},5).to({scaleX:1,scaleY:1},10).wait(46));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(250,20);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(110));

	// title
	this.instance_9 = new lib.anim_title_style_2_mc();
	this.instance_9.setTransform(0,220);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-250,800,550);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-251.2,800,551.3), new cjs.Rectangle(-400,-252.5,800,552.6), new cjs.Rectangle(-400,-253.8,800,553.8), new cjs.Rectangle(-400,-255,800,555.1), new cjs.Rectangle(-400,-256.3,800,556.4), new cjs.Rectangle(-400,-257.6,800,557.7), new cjs.Rectangle(-400,-258.9,800,558.9), new cjs.Rectangle(-400,-260.1,800,560.2), new cjs.Rectangle(-400,-261.4,800,561.5), new cjs.Rectangle(-400,-262.6,800,562.7), new cjs.Rectangle(-400,-261.4,800,561.4), new cjs.Rectangle(-400,-260.1,800,560.2), new cjs.Rectangle(-400,-258.8,800,558.9), new cjs.Rectangle(-400,-257.6,800,557.7), new cjs.Rectangle(-400,-256.2,800,556.3), new cjs.Rectangle(-400,-255,800,555.1), new cjs.Rectangle(-400,-253.7,800,553.8), new cjs.Rectangle(-400,-252.5,800,552.6), new cjs.Rectangle(-400,-251.2,800,551.2), rect=new cjs.Rectangle(-400,-250,800,550), rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-247.4,800,547.5), new cjs.Rectangle(-400,-244.9,800,545), new cjs.Rectangle(-400,-242.4,800,542.5), new cjs.Rectangle(-400,-239.9,800,539.9), new cjs.Rectangle(-400,-237.3,800,537.3), new cjs.Rectangle(-400,-238.6,800,538.6), new cjs.Rectangle(-400,-239.8,800,539.9), new cjs.Rectangle(-400,-241.1,800,541.2), new cjs.Rectangle(-400,-242.4,800,542.4), new cjs.Rectangle(-400,-243.5,800,543.6), new cjs.Rectangle(-400,-244.8,800,544.9), new cjs.Rectangle(-400,-246.1,800,546.2), new cjs.Rectangle(-400,-247.4,800,547.4), new cjs.Rectangle(-400,-248.7,800,548.7), rect=new cjs.Rectangle(-400,-250,800,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":139});

	// timeline functions:
	this.frame_29 = function() {
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
	this.frame_34 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.3);
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
	this.frame_49 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.3);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_59 = function() {
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
	this.frame_64 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.3);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(5).call(this.frame_34).wait(10).call(this.frame_44).wait(5).call(this.frame_49).wait(10).call(this.frame_59).wait(5).call(this.frame_64).wait(76));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(240,270,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(180,270,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(120,270,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(60,270,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_1_mc();
	this.instance_4.setTransform(0,270,0.833,0.833);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.location_progress_1_mc();
	this.instance_5.setTransform(-120,270,0.833,0.833);
	this.instance_5.alpha = 0.301;

	this.instance_6 = new lib.location_progress_1_mc();
	this.instance_6.setTransform(-180,270,0.833,0.833);
	this.instance_6.alpha = 0.301;

	this.instance_7 = new lib.location_progress_1_mc();
	this.instance_7.setTransform(-240,270,0.833,0.833);
	this.instance_7.alpha = 0.301;

	this.instance_8 = new lib.location_progress_2_mc();
	this.instance_8.setTransform(-60,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(140));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(-250,20);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({y:-550},0).wait(23).to({y:100},15).to({y:20},5).wait(35).to({scaleX:0.93,scaleY:0.93},5).to({scaleX:1,scaleY:1},10).wait(46));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(0,-60);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:-600},0).wait(38).to({y:40},15).to({y:-60},5).wait(81));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(250,20);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({y:-550},0).wait(53).to({y:100},15).to({y:20},5).wait(66));

	// title
	this.instance_9 = new lib.anim_title_style_2_mc();
	this.instance_9.setTransform(0,220);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-250,800,550);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,-790,800,1090), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-747.3,800,1047.4), rect=new cjs.Rectangle(-400,-740,800,1040), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-696.6,800,996.7), new cjs.Rectangle(-400,-653.3,800,953.4), new cjs.Rectangle(-400,-610,800,910), new cjs.Rectangle(-400,-566.6,800,866.7), new cjs.Rectangle(-400,-523.3,800,823.4), new cjs.Rectangle(-400,-480,800,780), new cjs.Rectangle(-400,-436.6,800,736.7), new cjs.Rectangle(-400,-393.3,800,693.4), new cjs.Rectangle(-400,-350,800,650), new cjs.Rectangle(-400,-306.6,800,606.7), new cjs.Rectangle(-400,-263.3,800,563.4), rect=new cjs.Rectangle(-400,-250,800,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-398,-250,798,550), new cjs.Rectangle(-396,-250,796,550), new cjs.Rectangle(-394,-250,794.1,550), new cjs.Rectangle(-392,-250,792.1,550), new cjs.Rectangle(-390,-250,790,550), new cjs.Rectangle(-391,-250,791,550), new cjs.Rectangle(-392,-250,792,550), new cjs.Rectangle(-393,-250,793.1,550), new cjs.Rectangle(-394,-250,794,550), new cjs.Rectangle(-394.9,-250,795,550), new cjs.Rectangle(-395.9,-250,796,550), new cjs.Rectangle(-396.9,-250,797,550), new cjs.Rectangle(-397.9,-250,798,550), new cjs.Rectangle(-398.9,-250,799,550), rect=new cjs.Rectangle(-400,-250,800,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":149});

	// timeline functions:
	this.frame_29 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.1);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(40).call(this.frame_69).wait(15).call(this.frame_84).wait(15).call(this.frame_99).wait(51));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(240,270,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(180,270,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(120,270,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(60,270,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_1_mc();
	this.instance_4.setTransform(0,270,0.833,0.833);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.location_progress_1_mc();
	this.instance_5.setTransform(-60,270,0.833,0.833);
	this.instance_5.alpha = 0.301;

	this.instance_6 = new lib.location_progress_1_mc();
	this.instance_6.setTransform(-180,270,0.833,0.833);
	this.instance_6.alpha = 0.301;

	this.instance_7 = new lib.location_progress_1_mc();
	this.instance_7.setTransform(-240,270,0.833,0.833);
	this.instance_7.alpha = 0.301;

	this.instance_8 = new lib.location_progress_2_mc();
	this.instance_8.setTransform(-120,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(150));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-250,30);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(69).to({y:-60},5).to({y:650},15).wait(61));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(0,-60);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(84).to({y:-150},5).to({y:550},15).wait(46));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(250,30);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(24).to({scaleX:1.07,scaleY:1.07},10).to({scaleX:1,scaleY:1},10).wait(5).to({scaleX:0.93,scaleY:0.93},5).to({scaleX:1,scaleY:1},10).wait(35).to({y:-60},5).to({y:650},15).wait(31));

	// title
	this.instance_9 = new lib.anim_title_style_1_mc();
	this.instance_9.setTransform(0,220);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-250,800,550);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-250,801,550), new cjs.Rectangle(-400,-250,802,550), new cjs.Rectangle(-400,-250,803,550), new cjs.Rectangle(-400,-250,804,550), new cjs.Rectangle(-400,-250,805,550), new cjs.Rectangle(-400,-250,806,550), new cjs.Rectangle(-400,-250,807,550), new cjs.Rectangle(-400,-250,808,550), new cjs.Rectangle(-400,-250,809,550), new cjs.Rectangle(-400,-250,810,550), new cjs.Rectangle(-400,-250,809,550), new cjs.Rectangle(-400,-250,808,550), new cjs.Rectangle(-400,-250,807,550), new cjs.Rectangle(-400,-250,806,550), new cjs.Rectangle(-400,-250,805,550), new cjs.Rectangle(-400,-250,804,550), new cjs.Rectangle(-400,-250,803,550), new cjs.Rectangle(-400,-250,802,550), new cjs.Rectangle(-400,-250,801,550), rect=new cjs.Rectangle(-400,-250,800,550), rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-250,798,550), new cjs.Rectangle(-400,-250,796,550), new cjs.Rectangle(-400,-250,794.1,550), new cjs.Rectangle(-400,-250,792.1,550), new cjs.Rectangle(-400,-250,790,550), new cjs.Rectangle(-400,-250,791,550), new cjs.Rectangle(-400,-250,792,550), new cjs.Rectangle(-400,-250,793.1,550), new cjs.Rectangle(-400,-250,794,550), new cjs.Rectangle(-400,-250,795,550), new cjs.Rectangle(-400,-250,796,550), new cjs.Rectangle(-400,-250,797,550), new cjs.Rectangle(-400,-250,798,550), new cjs.Rectangle(-400,-250,799,550), rect=new cjs.Rectangle(-400,-250,800,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-250,800,569.4), new cjs.Rectangle(-400,-250,800,616.7), new cjs.Rectangle(-400,-250,800,664), new cjs.Rectangle(-400,-250,800,711.4), new cjs.Rectangle(-400,-250,800,758.7), new cjs.Rectangle(-400,-250,800,806), new cjs.Rectangle(-400,-250,800,853.4), new cjs.Rectangle(-400,-268,800,918.7), new cjs.Rectangle(-400,-286,800,984), new cjs.Rectangle(-400,-304,800,1049.4), new cjs.Rectangle(-400,-322,800,1114.7), new cjs.Rectangle(-400,-340,800,1180), new cjs.Rectangle(-400,-293.3,800,1133.4), new cjs.Rectangle(-400,-246.6,800,1086.7), new cjs.Rectangle(-400,-200,800,1040), rect=new cjs.Rectangle(-400,-160,800,1000), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-178,800,1018), new cjs.Rectangle(-400,-196,800,1036), new cjs.Rectangle(-400,-214,800,1054), new cjs.Rectangle(-400,-232,800,1072), new cjs.Rectangle(-400,-250,800,1090), new cjs.Rectangle(-400,-202.6,800,1042.7), new cjs.Rectangle(-400,-155.3,800,995.4), new cjs.Rectangle(-400,-108,800,948), new cjs.Rectangle(-400,-60.6,800,900.7), new cjs.Rectangle(-400,-13.3,800,853.4), new cjs.Rectangle(-400,34,800,806), new cjs.Rectangle(-400,81.4,800,758.7), new cjs.Rectangle(-400,128.7,800,711.4), rect=new cjs.Rectangle(-400,175,800,665), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":49,"end":109});

	// timeline functions:
	this.frame_29 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.1);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(81));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(240,270,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(180,270,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(120,270,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(60,270,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_1_mc();
	this.instance_4.setTransform(0,270,0.833,0.833);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.location_progress_1_mc();
	this.instance_5.setTransform(-60,270,0.833,0.833);
	this.instance_5.alpha = 0.301;

	this.instance_6 = new lib.location_progress_1_mc();
	this.instance_6.setTransform(-120,270,0.833,0.833);
	this.instance_6.alpha = 0.301;

	this.instance_7 = new lib.location_progress_1_mc();
	this.instance_7.setTransform(-240,270,0.833,0.833);
	this.instance_7.alpha = 0.301;

	this.instance_8 = new lib.location_progress_2_mc();
	this.instance_8.setTransform(-180,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(110));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-250,30);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(110));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(0,-60);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(24).to({scaleX:1.07,scaleY:1.07},10).to({scaleX:1,scaleY:1},10).wait(5).to({scaleX:0.93,scaleY:0.93},5).to({scaleX:1,scaleY:1},10).wait(46));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(250,30);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(110));

	// title
	this.instance_9 = new lib.anim_title_style_1_mc();
	this.instance_9.setTransform(0,220);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-250,800,550);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-251.2,800,551.3), new cjs.Rectangle(-400,-252.5,800,552.6), new cjs.Rectangle(-400,-253.8,800,553.8), new cjs.Rectangle(-400,-255,800,555.1), new cjs.Rectangle(-400,-256.3,800,556.4), new cjs.Rectangle(-400,-257.6,800,557.7), new cjs.Rectangle(-400,-258.9,800,558.9), new cjs.Rectangle(-400,-260.1,800,560.2), new cjs.Rectangle(-400,-261.4,800,561.5), new cjs.Rectangle(-400,-262.6,800,562.7), new cjs.Rectangle(-400,-261.4,800,561.4), new cjs.Rectangle(-400,-260.1,800,560.2), new cjs.Rectangle(-400,-258.8,800,558.9), new cjs.Rectangle(-400,-257.6,800,557.7), new cjs.Rectangle(-400,-256.2,800,556.3), new cjs.Rectangle(-400,-255,800,555.1), new cjs.Rectangle(-400,-253.7,800,553.8), new cjs.Rectangle(-400,-252.5,800,552.6), new cjs.Rectangle(-400,-251.2,800,551.2), rect=new cjs.Rectangle(-400,-250,800,550), rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-247.4,800,547.5), new cjs.Rectangle(-400,-244.9,800,545), new cjs.Rectangle(-400,-242.4,800,542.5), new cjs.Rectangle(-400,-239.9,800,539.9), new cjs.Rectangle(-400,-237.3,800,537.3), new cjs.Rectangle(-400,-238.6,800,538.6), new cjs.Rectangle(-400,-239.8,800,539.9), new cjs.Rectangle(-400,-241.1,800,541.2), new cjs.Rectangle(-400,-242.4,800,542.4), new cjs.Rectangle(-400,-243.5,800,543.6), new cjs.Rectangle(-400,-244.8,800,544.9), new cjs.Rectangle(-400,-246.1,800,546.2), new cjs.Rectangle(-400,-247.4,800,547.4), new cjs.Rectangle(-400,-248.7,800,548.7), rect=new cjs.Rectangle(-400,-250,800,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":139});

	// timeline functions:
	this.frame_29 = function() {
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
	this.frame_34 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.3);
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
	this.frame_49 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.3);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_59 = function() {
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
	this.frame_64 = function() {
		try
		{
			app.addSoundFunc("tink_sound", 0.3);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(5).call(this.frame_34).wait(10).call(this.frame_44).wait(5).call(this.frame_49).wait(10).call(this.frame_59).wait(5).call(this.frame_64).wait(76));

	// progress
	this.instance = new lib.location_progress_1_mc();
	this.instance.setTransform(240,270,0.833,0.833);
	this.instance.alpha = 0.301;

	this.instance_1 = new lib.location_progress_1_mc();
	this.instance_1.setTransform(180,270,0.833,0.833);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.location_progress_1_mc();
	this.instance_2.setTransform(120,270,0.833,0.833);
	this.instance_2.alpha = 0.301;

	this.instance_3 = new lib.location_progress_1_mc();
	this.instance_3.setTransform(60,270,0.833,0.833);
	this.instance_3.alpha = 0.301;

	this.instance_4 = new lib.location_progress_1_mc();
	this.instance_4.setTransform(0,270,0.833,0.833);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.location_progress_1_mc();
	this.instance_5.setTransform(-60,270,0.833,0.833);
	this.instance_5.alpha = 0.301;

	this.instance_6 = new lib.location_progress_1_mc();
	this.instance_6.setTransform(-120,270,0.833,0.833);
	this.instance_6.alpha = 0.301;

	this.instance_7 = new lib.location_progress_1_mc();
	this.instance_7.setTransform(-180,270,0.833,0.833);
	this.instance_7.alpha = 0.301;

	this.instance_8 = new lib.location_progress_2_mc();
	this.instance_8.setTransform(-240,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(140));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-250,30);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:-550},0).wait(23).to({y:100},15).to({y:30},5).wait(35).to({scaleX:0.93,scaleY:0.93},5).to({scaleX:1,scaleY:1},10).wait(46));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(0,-60);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-650},0).wait(38).to({y:10},15).to({y:-60},5).wait(81));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(250,30);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-550},0).wait(53).to({y:100},15).to({y:30},5).wait(66));

	// title
	this.instance_9 = new lib.anim_title_style_1_mc();
	this.instance_9.setTransform(0,220);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-250,800,550);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,-840,800,1140), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-796,800,1096), new cjs.Rectangle(-400,-752,800,1052), rect=new cjs.Rectangle(-400,-740,800,1040), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-696.6,800,996.7), new cjs.Rectangle(-400,-653.3,800,953.4), new cjs.Rectangle(-400,-610,800,910), new cjs.Rectangle(-400,-566.6,800,866.7), new cjs.Rectangle(-400,-523.3,800,823.4), new cjs.Rectangle(-400,-480,800,780), new cjs.Rectangle(-400,-436.6,800,736.7), new cjs.Rectangle(-400,-393.3,800,693.4), new cjs.Rectangle(-400,-350,800,650), new cjs.Rectangle(-400,-306.6,800,606.7), new cjs.Rectangle(-400,-263.3,800,563.4), rect=new cjs.Rectangle(-400,-250,800,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-398,-250,798,550), new cjs.Rectangle(-396,-250,796,550), new cjs.Rectangle(-394,-250,794.1,550), new cjs.Rectangle(-392,-250,792.1,550), new cjs.Rectangle(-390,-250,790,550), new cjs.Rectangle(-391,-250,791,550), new cjs.Rectangle(-392,-250,792,550), new cjs.Rectangle(-393,-250,793.1,550), new cjs.Rectangle(-394,-250,794,550), new cjs.Rectangle(-394.9,-250,795,550), new cjs.Rectangle(-395.9,-250,796,550), new cjs.Rectangle(-396.9,-250,797,550), new cjs.Rectangle(-397.9,-250,798,550), new cjs.Rectangle(-398.9,-250,799,550), rect=new cjs.Rectangle(-400,-250,800,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.dress_check_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.dress_check_0_3_mc();
	this.instance.alpha = 0.602;

	this.instance_1 = new lib.dress_check_2_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-135,200,270);
p.frameBounds = [rect, rect];


(lib.dress_check_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.dress_check_0_2_mc();
	this.instance.alpha = 0.602;

	this.instance_1 = new lib.dress_check_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-140,210,280);
p.frameBounds = [rect, rect];


(lib.dress_check_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.dress_check_0_1_mc();
	this.instance.alpha = 0.602;

	this.instance_1 = new lib.dress_check_2_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-130,210,260);
p.frameBounds = [rect, rect];


(lib.dress_14_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_14_3_img();
	this.instance.setTransform(-90,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCNQQkllfABnxQgBnwEllfQEllfGdAAQGeAAElFfQEkFfAAHwQAAHxkkFfQklFfmeAAQmdAAkllfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-135,200,270);
p.frameBounds = [rect];


(lib.dress_13_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_13_3_img();
	this.instance.setTransform(-90,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCNQQkllfABnxQgBnwEllfQEllfGdAAQGeAAElFfQEkFfAAHwQAAHxkkFfQklFfmeAAQmdAAkllfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-135,200,270);
p.frameBounds = [rect];


(lib.dress_12_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_12_3_img();
	this.instance.setTransform(-90,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCNQQkllfABnxQgBnwEllfQEllfGdAAQGeAAElFfQEkFfAAHwQAAHxkkFfQklFfmeAAQmdAAkllfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-135,200,270);
p.frameBounds = [rect];


(lib.dress_11_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_11_3_img();
	this.instance.setTransform(-90,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCNQQkllfABnxQgBnwEllfQEllfGdAAQGeAAElFfQEkFfAAHwQAAHxkkFfQklFfmeAAQmdAAkllfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-135,200,270);
p.frameBounds = [rect];


(lib.dress_10_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_10_3_img();
	this.instance.setTransform(-90,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCNQQkllfABnxQgBnwEllfQEllfGdAAQGeAAElFfQEkFfAAHwQAAHxkkFfQklFfmeAAQmdAAkllfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-135,200,270);
p.frameBounds = [rect];


(lib.dress_10_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_10_1_img();
	this.instance.setTransform(-95,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCNQQkllfABnxQgBnwEllfQEllfGdAAQGeAAElFfQEkFfAAHwQAAHxkkFfQklFfmeAAQmdAAkllfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-130,210,260);
p.frameBounds = [rect];


(lib.dress_9_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_9_3_img();
	this.instance.setTransform(-90,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCNQQkllfABnxQgBnwEllfQEllfGdAAQGeAAElFfQEkFfAAHwQAAHxkkFfQklFfmeAAQmdAAkllfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-135,200,270);
p.frameBounds = [rect];


(lib.dress_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_9_1_img();
	this.instance.setTransform(-95,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCNQQkllfABnxQgBnwEllfQEllfGdAAQGeAAElFfQEkFfAAHwQAAHxkkFfQklFfmeAAQmdAAkllfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-130,210,260);
p.frameBounds = [rect];


(lib.dress_8_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_8_3_img();
	this.instance.setTransform(-90,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCNQQkllfABnxQgBnwEllfQEllfGdAAQGeAAElFfQEkFfAAHwQAAHxkkFfQklFfmeAAQmdAAkllfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-135,200,270);
p.frameBounds = [rect];


(lib.dress_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_8_2_img();
	this.instance.setTransform(-95,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCNQQkllfABnxQgBnwEllfQEllfGdAAQGeAAElFfQEkFfAAHwQAAHxkkFfQklFfmeAAQmdAAkllfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-140,210,280);
p.frameBounds = [rect];


(lib.dress_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_8_1_img();
	this.instance.setTransform(-95,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCNQQkllfABnxQgBnwEllfQEllfGdAAQGeAAElFfQEkFfAAHwQAAHxkkFfQklFfmeAAQmdAAkllfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-130,210,260);
p.frameBounds = [rect];


(lib.dress_7_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_7_3_img();
	this.instance.setTransform(-90,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCNQQkllfABnxQgBnwEllfQEllfGdAAQGeAAElFfQEkFfAAHwQAAHxkkFfQklFfmeAAQmdAAkllfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-135,200,270);
p.frameBounds = [rect];


(lib.dress_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_7_2_img();
	this.instance.setTransform(-95,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCNQQkllfABnxQgBnwEllfQEllfGdAAQGeAAElFfQEkFfAAHwQAAHxkkFfQklFfmeAAQmdAAkllfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-140,210,280);
p.frameBounds = [rect];


(lib.dress_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_7_1_img();
	this.instance.setTransform(-95,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCNQQkllfABnxQgBnwEllfQEllfGdAAQGeAAElFfQEkFfAAHwQAAHxkkFfQklFfmeAAQmdAAkllfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-130,210,260);
p.frameBounds = [rect];


(lib.dress_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_6_3_img();
	this.instance.setTransform(-90,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCNQQkllfABnxQgBnwEllfQEllfGdAAQGeAAElFfQEkFfAAHwQAAHxkkFfQklFfmeAAQmdAAkllfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-135,200,270);
p.frameBounds = [rect];


(lib.dress_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_6_2_img();
	this.instance.setTransform(-95,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCNQQkllfABnxQgBnwEllfQEllfGdAAQGeAAElFfQEkFfAAHwQAAHxkkFfQklFfmeAAQmdAAkllfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-140,210,280);
p.frameBounds = [rect];


(lib.dress_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_6_1_img();
	this.instance.setTransform(-95,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCNQQkllfABnxQgBnwEllfQEllfGdAAQGeAAElFfQEkFfAAHwQAAHxkkFfQklFfmeAAQmdAAkllfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-130,210,260);
p.frameBounds = [rect];


(lib.dress_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_5_3_img();
	this.instance.setTransform(-90,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCNQQkllfABnxQgBnwEllfQEllfGdAAQGeAAElFfQEkFfAAHwQAAHxkkFfQklFfmeAAQmdAAkllfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-135,200,270);
p.frameBounds = [rect];


(lib.dress_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_5_2_img();
	this.instance.setTransform(-95,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCNQQkllfABnxQgBnwEllfQEllfGdAAQGeAAElFfQEkFfAAHwQAAHxkkFfQklFfmeAAQmdAAkllfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-140,210,280);
p.frameBounds = [rect];


(lib.dress_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_5_1_img();
	this.instance.setTransform(-95,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCNQQkllfABnxQgBnwEllfQEllfGdAAQGeAAElFfQEkFfAAHwQAAHxkkFfQklFfmeAAQmdAAkllfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-130,210,260);
p.frameBounds = [rect];


(lib.dress_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_4_3_img();
	this.instance.setTransform(-90,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCNQQkllfABnxQgBnwEllfQEllfGdAAQGeAAElFfQEkFfAAHwQAAHxkkFfQklFfmeAAQmdAAkllfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-135,200,270);
p.frameBounds = [rect];


(lib.dress_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_4_2_img();
	this.instance.setTransform(-95,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCNQQkllfABnxQgBnwEllfQEllfGdAAQGeAAElFfQEkFfAAHwQAAHxkkFfQklFfmeAAQmdAAkllfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-140,210,280);
p.frameBounds = [rect];


(lib.dress_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_4_1_img();
	this.instance.setTransform(-95,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCNQQkllfABnxQgBnwEllfQEllfGdAAQGeAAElFfQEkFfAAHwQAAHxkkFfQklFfmeAAQmdAAkllfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-130,210,260);
p.frameBounds = [rect];


(lib.dress_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_3_3_img();
	this.instance.setTransform(-90,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCNQQkllfABnxQgBnwEllfQEllfGdAAQGeAAElFfQEkFfAAHwQAAHxkkFfQklFfmeAAQmdAAkllfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-135,200,270);
p.frameBounds = [rect];


(lib.dress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_3_2_img();
	this.instance.setTransform(-95,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCNQQkllfABnxQgBnwEllfQEllfGdAAQGeAAElFfQEkFfAAHwQAAHxkkFfQklFfmeAAQmdAAkllfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-140,210,280);
p.frameBounds = [rect];


(lib.dress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_3_1_img();
	this.instance.setTransform(-95,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCNQQkllfABnxQgBnwEllfQEllfGdAAQGeAAElFfQEkFfAAHwQAAHxkkFfQklFfmeAAQmdAAkllfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-130,210,260);
p.frameBounds = [rect];


(lib.dress_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_2_3_img();
	this.instance.setTransform(-90,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCNQQkllfABnxQgBnwEllfQEllfGdAAQGeAAElFfQEkFfAAHwQAAHxkkFfQklFfmeAAQmdAAkllfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-135,200,270);
p.frameBounds = [rect];


(lib.dress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_2_2_img();
	this.instance.setTransform(-95,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCNQQkllfABnxQgBnwEllfQEllfGdAAQGeAAElFfQEkFfAAHwQAAHxkkFfQklFfmeAAQmdAAkllfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-140,210,280);
p.frameBounds = [rect];


(lib.dress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_2_1_img();
	this.instance.setTransform(-95,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCNQQkllfABnxQgBnwEllfQEllfGdAAQGeAAElFfQEkFfAAHwQAAHxkkFfQklFfmeAAQmdAAkllfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-130,210,260);
p.frameBounds = [rect];


(lib.dress_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_1_3_img();
	this.instance.setTransform(-90,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCNQQkllfABnxQgBnwEllfQEllfGdAAQGeAAElFfQEkFfAAHwQAAHxkkFfQklFfmeAAQmdAAkllfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-135,200,270);
p.frameBounds = [rect];


(lib.dress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_1_2_img();
	this.instance.setTransform(-95,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCNQQkllfABnxQgBnwEllfQEllfGdAAQGeAAElFfQEkFfAAHwQAAHxkkFfQklFfmeAAQmdAAkllfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-140,210,280);
p.frameBounds = [rect];


(lib.dress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_1_1_img();
	this.instance.setTransform(-95,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.dress_check_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCNQQkllfABnxQgBnwEllfQEllfGdAAQGeAAElFfQEkFfAAHwQAAHxkkFfQklFfmeAAQmdAAkllfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-130,210,260);
p.frameBounds = [rect];


(lib.closet_1_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.dress_0 = new lib.dress_0_mc();
	this.dress_0.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.dress_0).wait(5));

	// options
	this.dress_13 = new lib.dress_13_3_mc();
	this.dress_13.setTransform(-100,-190);

	this.dress_3 = new lib.dress_3_3_mc();
	this.dress_3.setTransform(0,30);

	this.dress_2 = new lib.dress_2_3_mc();
	this.dress_2.setTransform(100,-190);

	this.dress_6 = new lib.dress_6_3_mc();
	this.dress_6.setTransform(0,30);

	this.dress_5 = new lib.dress_5_3_mc();
	this.dress_5.setTransform(100,-190);

	this.dress_4 = new lib.dress_4_3_mc();
	this.dress_4.setTransform(-100,-190);

	this.dress_9 = new lib.dress_9_3_mc();
	this.dress_9.setTransform(0,30);

	this.dress_8 = new lib.dress_8_3_mc();
	this.dress_8.setTransform(100,-190);

	this.dress_7 = new lib.dress_7_3_mc();
	this.dress_7.setTransform(-100,-190);

	this.dress_12 = new lib.dress_12_3_mc();
	this.dress_12.setTransform(0,30);

	this.dress_11 = new lib.dress_11_3_mc();
	this.dress_11.setTransform(100,-190);

	this.dress_10 = new lib.dress_10_3_mc();
	this.dress_10.setTransform(-100,-190);

	this.dress_1 = new lib.dress_1_3_mc();
	this.dress_1.setTransform(40,30);

	this.dress_14 = new lib.dress_14_3_mc();
	this.dress_14.setTransform(-60,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_2},{t:this.dress_3},{t:this.dress_13}]}).to({state:[{t:this.dress_4},{t:this.dress_5},{t:this.dress_6}]},1).to({state:[{t:this.dress_7},{t:this.dress_8},{t:this.dress_9}]},1).to({state:[{t:this.dress_10},{t:this.dress_11},{t:this.dress_12}]},1).to({state:[{t:this.dress_14},{t:this.dress_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-325,400,953);
p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(-160,-325,300,953)];


(lib.closet_1_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.glasses_0 = new lib.glasses_0_mc();
	this.glasses_0.setTransform(-179,-230);
	this.glasses_0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.glasses_0).wait(4).to({_off:false},0).wait(1));

	// options
	this.hair_7 = new lib.hairstyle_7_1_mc();
	this.hair_7.setTransform(0,55);

	this.hair_6 = new lib.hairstyle_6_1_mc();
	this.hair_6.setTransform(-100,-165);

	this.hair_2 = new lib.hairstyle_2_1_mc();
	this.hair_2.setTransform(100,-165);

	this.hair_8 = new lib.hairstyle_8_1_mc();
	this.hair_8.setTransform(100,-165);

	this.hair_3 = new lib.hairstyle_3_1_mc();
	this.hair_3.setTransform(0,55);

	this.hair_5 = new lib.hairstyle_5_1_mc();
	this.hair_5.setTransform(-100,-165);

	this.hair_10 = new lib.hairstyle_10_1_mc();
	this.hair_10.setTransform(-100,-165);

	this.hair_9 = new lib.hairstyle_9_1_mc();
	this.hair_9.setTransform(0,55);

	this.hair_4 = new lib.hairstyle_4_1_mc();
	this.hair_4.setTransform(100,-165);

	this.hair_11 = new lib.hairstyle_11_1_mc();
	this.hair_11.setTransform(0,-165);

	this.hair_1 = new lib.hairstyle_1_1_mc();
	this.hair_1.setTransform(0,55);

	this.glasses_6 = new lib.glasses_6_3_mc();
	this.glasses_6.setTransform(80,-95);

	this.glasses_5 = new lib.glasses_5_3_mc();
	this.glasses_5.setTransform(-80,-87);

	this.glasses_4 = new lib.glasses_4_3_mc();
	this.glasses_4.setTransform(80,-210);

	this.glasses_3 = new lib.glasses_3_3_mc();
	this.glasses_3.setTransform(0,145);

	this.glasses_2 = new lib.glasses_2_3_mc();
	this.glasses_2.setTransform(0,20);

	this.glasses_1 = new lib.glasses_1_3_mc();
	this.glasses_1.setTransform(-80,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_2},{t:this.hair_6},{t:this.hair_7}]}).to({state:[{t:this.hair_5},{t:this.hair_3},{t:this.hair_8}]},1).to({state:[{t:this.hair_4},{t:this.hair_9},{t:this.hair_10}]},1).to({state:[{t:this.hair_1},{t:this.hair_11}]},1).to({state:[{t:this.glasses_1},{t:this.glasses_2},{t:this.glasses_3},{t:this.glasses_4},{t:this.glasses_5},{t:this.glasses_6}]},1).wait(1));

	// decor
	this.instance = new lib.wardrobe_3_2_mc();
	this.instance.setTransform(0,150);

	this.instance_1 = new lib.wardrobe_3_2_mc();
	this.instance_1.setTransform(0,-70);

	this.instance_2 = new lib.wardrobe_2_2_mc();
	this.instance_2.setTransform(0,55);

	this.instance_3 = new lib.wardrobe_2_2_mc();
	this.instance_3.setTransform(0,-165);

	this.instance_4 = new lib.wardrobe_3_2_mc();
	this.instance_4.setTransform(0,180);

	this.instance_5 = new lib.wardrobe_3_2_mc();
	this.instance_5.setTransform(0,60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{y:-70}},{t:this.instance,p:{y:150}}]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{y:-70}},{t:this.instance,p:{y:150}}]},1).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{y:-70}},{t:this.instance,p:{y:150}}]},1).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{y:-70}},{t:this.instance,p:{y:150}}]},1).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_1,p:{y:-60}},{t:this.instance,p:{y:-180}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-275,420,455);
p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(-210,-258,420,468)];


(lib.closet_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.dress_0 = new lib.dress_0_mc();
	this.dress_0.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.dress_0).wait(3));

	// options
	this.dress_3 = new lib.dress_3_2_mc();
	this.dress_3.setTransform(0,30);

	this.dress_2 = new lib.dress_2_2_mc();
	this.dress_2.setTransform(100,-190);

	this.dress_8 = new lib.dress_8_2_mc();
	this.dress_8.setTransform(-100,-190);

	this.dress_6 = new lib.dress_6_2_mc();
	this.dress_6.setTransform(0,30);

	this.dress_5 = new lib.dress_5_2_mc();
	this.dress_5.setTransform(100,-190);

	this.dress_4 = new lib.dress_4_2_mc();
	this.dress_4.setTransform(-100,-190);

	this.dress_1 = new lib.dress_1_2_mc();
	this.dress_1.setTransform(30,30);

	this.dress_7 = new lib.dress_7_2_mc();
	this.dress_7.setTransform(-60,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_8},{t:this.dress_2},{t:this.dress_3}]}).to({state:[{t:this.dress_4},{t:this.dress_5},{t:this.dress_6}]},1).to({state:[{t:this.dress_7},{t:this.dress_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-330,410,958);
p.frameBounds = [rect, rect, new cjs.Rectangle(-165,-330,300,958)];


(lib.closet_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.glasses_0 = new lib.glasses_0_mc();
	this.glasses_0.setTransform(-179,-230);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(-179,-230);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.glasses_0}]},4).to({state:[{t:this.headdress_0}]},1).wait(1));

	// options
	this.hair_11 = new lib.hairstyle_11_1_mc();
	this.hair_11.setTransform(0,55);

	this.hair_8 = new lib.hairstyle_8_1_mc();
	this.hair_8.setTransform(100,-165);

	this.hair_10 = new lib.hairstyle_10_1_mc();
	this.hair_10.setTransform(-100,-165);

	this.hair_2 = new lib.hairstyle_2_1_mc();
	this.hair_2.setTransform(100,-165);

	this.hair_3 = new lib.hairstyle_3_1_mc();
	this.hair_3.setTransform(0,55);

	this.hair_5 = new lib.hairstyle_5_1_mc();
	this.hair_5.setTransform(-100,-165);

	this.hair_9 = new lib.hairstyle_9_1_mc();
	this.hair_9.setTransform(0,55);

	this.hair_4 = new lib.hairstyle_4_1_mc();
	this.hair_4.setTransform(100,-165);

	this.hair_7 = new lib.hairstyle_7_1_mc();
	this.hair_7.setTransform(-100,-165);

	this.hair_1 = new lib.hairstyle_1_1_mc();
	this.hair_1.setTransform(0,55);

	this.hair_6 = new lib.hairstyle_6_1_mc();
	this.hair_6.setTransform(0,-165);

	this.glasses_4 = new lib.glasses_4_2_mc();
	this.glasses_4.setTransform(-80,-85);

	this.glasses_6 = new lib.glasses_6_2_mc();
	this.glasses_6.setTransform(0,158);

	this.glasses_5 = new lib.glasses_5_2_mc();
	this.glasses_5.setTransform(80,-85);

	this.glasses_3 = new lib.glasses_3_2_mc();
	this.glasses_3.setTransform(0,25);

	this.glasses_2 = new lib.glasses_2_2_mc();
	this.glasses_2.setTransform(80,-206);

	this.glasses_1 = new lib.glasses_1_2_mc();
	this.glasses_1.setTransform(-80,-203);

	this.headdress_4 = new lib.headdress_4_1_mc();
	this.headdress_4.setTransform(20,160);

	this.headdress_2 = new lib.headdress_2_1_mc();
	this.headdress_2.setTransform(-10,40);

	this.headdress_3 = new lib.headdress_3_1_mc();
	this.headdress_3.setTransform(40,-90);

	this.headdress_1 = new lib.headdress_1_1_mc();
	this.headdress_1.setTransform(-20,-200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_10},{t:this.hair_8},{t:this.hair_11}]}).to({state:[{t:this.hair_5},{t:this.hair_3},{t:this.hair_2}]},1).to({state:[{t:this.hair_7},{t:this.hair_4},{t:this.hair_9}]},1).to({state:[{t:this.hair_6},{t:this.hair_1}]},1).to({state:[{t:this.glasses_1},{t:this.glasses_2},{t:this.glasses_3},{t:this.glasses_5},{t:this.glasses_6},{t:this.glasses_4}]},1).to({state:[{t:this.headdress_1},{t:this.headdress_3},{t:this.headdress_2},{t:this.headdress_4}]},1).wait(1));

	// decor
	this.instance = new lib.wardrobe_3_2_mc();
	this.instance.setTransform(0,150);

	this.instance_1 = new lib.wardrobe_3_2_mc();
	this.instance_1.setTransform(0,-70);

	this.instance_2 = new lib.wardrobe_2_2_mc();
	this.instance_2.setTransform(0,55);

	this.instance_3 = new lib.wardrobe_2_2_mc();
	this.instance_3.setTransform(0,-165);

	this.instance_4 = new lib.wardrobe_3_2_mc();
	this.instance_4.setTransform(0,180);

	this.instance_5 = new lib.wardrobe_3_2_mc();
	this.instance_5.setTransform(0,60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{y:-70}},{t:this.instance,p:{y:150}}]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{y:-70}},{t:this.instance,p:{y:150}}]},1).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{y:-70}},{t:this.instance,p:{y:150}}]},1).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{y:-70}},{t:this.instance,p:{y:150}}]},1).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_1,p:{y:-60}},{t:this.instance,p:{y:-180}}]},1).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_1,p:{y:-60}},{t:this.instance,p:{y:-180}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-275,420,455);
p.frameBounds = [rect, rect, rect, rect, new cjs.Rectangle(-210,-258,420,468), new cjs.Rectangle(-210,-263,420,481)];


(lib.closet_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.dress_0 = new lib.dress_0_mc();
	this.dress_0.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.dress_0).wait(4));

	// options
	this.dress_3 = new lib.dress_3_1_mc();
	this.dress_3.setTransform(0,35);

	this.dress_2 = new lib.dress_2_1_mc();
	this.dress_2.setTransform(100,-185);

	this.dress_10 = new lib.dress_10_1_mc();
	this.dress_10.setTransform(-100,-185);

	this.dress_6 = new lib.dress_6_1_mc();
	this.dress_6.setTransform(0,35);

	this.dress_5 = new lib.dress_5_1_mc();
	this.dress_5.setTransform(100,-185);

	this.dress_4 = new lib.dress_4_1_mc();
	this.dress_4.setTransform(-100,-185);

	this.dress_9 = new lib.dress_9_1_mc();
	this.dress_9.setTransform(30,35);

	this.dress_8 = new lib.dress_8_1_mc();
	this.dress_8.setTransform(-40,-185);

	this.dress_7 = new lib.dress_7_1_mc();
	this.dress_7.setTransform(40,-185);

	this.dress_1 = new lib.dress_1_1_mc();
	this.dress_1.setTransform(-30,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_10},{t:this.dress_2},{t:this.dress_3}]}).to({state:[{t:this.dress_4},{t:this.dress_5},{t:this.dress_6}]},1).to({state:[{t:this.dress_8},{t:this.dress_9}]},1).to({state:[{t:this.dress_1},{t:this.dress_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-315,410,943);
p.frameBounds = [rect, rect, new cjs.Rectangle(-145,-315,280,943), new cjs.Rectangle(-135,-315,280,943)];


(lib.closet_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(-190,-295);

	this.glasses_0 = new lib.glasses_0_mc();
	this.glasses_0.setTransform(-179,-230);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.headdress_0}]},3).to({state:[{t:this.glasses_0}]},1).wait(1));

	// options
	this.hair_8 = new lib.hairstyle_8_1_mc();
	this.hair_8.setTransform(0,55);

	this.hair_2 = new lib.hairstyle_2_1_mc();
	this.hair_2.setTransform(100,-165);

	this.hair_11 = new lib.hairstyle_11_1_mc();
	this.hair_11.setTransform(-100,-165);

	this.hair_3 = new lib.hairstyle_3_1_mc();
	this.hair_3.setTransform(0,55);

	this.hair_10 = new lib.hairstyle_10_1_mc();
	this.hair_10.setTransform(100,-165);

	this.hair_5 = new lib.hairstyle_5_1_mc();
	this.hair_5.setTransform(-100,-165);

	this.hair_9 = new lib.hairstyle_9_1_mc();
	this.hair_9.setTransform(0,55);

	this.hair_4 = new lib.hairstyle_4_1_mc();
	this.hair_4.setTransform(100,-165);

	this.hair_7 = new lib.hairstyle_7_1_mc();
	this.hair_7.setTransform(-100,-165);

	this.headdress_5 = new lib.headdress_5_1_mc();
	this.headdress_5.setTransform(-157,-138);

	this.headdress_6 = new lib.headdress_6_1_mc();
	this.headdress_6.setTransform(-132,-258);

	this.hair_1 = new lib.hairstyle_1_1_mc();
	this.hair_1.setTransform(0,55);

	this.hair_6 = new lib.hairstyle_6_1_mc();
	this.hair_6.setTransform(0,-165);

	this.glasses_6 = new lib.glasses_6_1_mc();
	this.glasses_6.setTransform(0,35);

	this.glasses_5 = new lib.glasses_5_1_mc();
	this.glasses_5.setTransform(0,155);

	this.glasses_3 = new lib.glasses_3_1_mc();
	this.glasses_3.setTransform(80,-85);

	this.glasses_4 = new lib.glasses_4_1_mc();
	this.glasses_4.setTransform(-80,-85);

	this.glasses_2 = new lib.glasses_2_1_mc();
	this.glasses_2.setTransform(80,-205);

	this.glasses_1 = new lib.glasses_1_1_mc();
	this.glasses_1.setTransform(-80,-205);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_11},{t:this.hair_2},{t:this.hair_8}]}).to({state:[{t:this.hair_5},{t:this.hair_10},{t:this.hair_3}]},1).to({state:[{t:this.hair_7},{t:this.hair_4},{t:this.hair_9}]},1).to({state:[{t:this.hair_6},{t:this.hair_1},{t:this.headdress_6},{t:this.headdress_5}]},1).to({state:[{t:this.glasses_1},{t:this.glasses_2},{t:this.glasses_4},{t:this.glasses_3},{t:this.glasses_5},{t:this.glasses_6}]},1).wait(1));

	// decor
	this.instance = new lib.wardrobe_3_2_mc();
	this.instance.setTransform(0,150);

	this.instance_1 = new lib.wardrobe_3_2_mc();
	this.instance_1.setTransform(0,-70);

	this.instance_2 = new lib.wardrobe_2_2_mc();
	this.instance_2.setTransform(0,55);

	this.instance_3 = new lib.wardrobe_2_2_mc();
	this.instance_3.setTransform(0,-165);

	this.instance_4 = new lib.wardrobe_3_2_mc();
	this.instance_4.setTransform(0,180);

	this.instance_5 = new lib.wardrobe_3_2_mc();
	this.instance_5.setTransform(0,60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{y:-70}},{t:this.instance,p:{y:150}}]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{y:-70}},{t:this.instance,p:{y:150}}]},1).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{y:-70}},{t:this.instance,p:{y:150}}]},1).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{y:-70}},{t:this.instance,p:{y:150}}]},1).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_1,p:{y:-60}},{t:this.instance,p:{y:-180}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-275,420,455);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-218,-336.8,428,516.9), new cjs.Rectangle(-210,-258,420,468)];


(lib.bodyDressupPanel_1_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_3
	this.hero_3 = new lib.closet_1_9_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-325,400,953);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_3
	this.hero_3 = new lib.closet_1_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-275,420,455);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_1_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-330,410,958);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-275,420,455);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205,-315,410,943);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-275,420,455);
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
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
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
p.nominalBounds = rect = new cjs.Rectangle(-12,-12,24,24);
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
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-80,130,160);
p.frameBounds = [rect];


(lib.prev_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_2_mc();
	this.instance.setTransform(0,0,0.667,0.667,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.prev_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_2_mc();
	this.instance.setTransform(0,0,0.833,0.833,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
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
	this.shape.graphics.f("#FF0000").s().p("Ap7J8QkIkIAAl0QAAlzEIkIQEIkHFzAAQF1AAEHEHQEIEIAAFzQAAF0kIEIQkHEHl1AAQlzAAkIkHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-90,-89.9,180,180)];


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-80,130,160);
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


(lib.next_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_2_mc();
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.next_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_2_mc();
	this.instance.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
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
	this.shape.graphics.f("#FF0000").s().p("Ap7J8QkIkIAAl0QAAlzEIkIQEIkHFzAAQF1AAEHEHQEIEIAAFzQAAF0kIEIQkHEHl1AAQlzAAkIkHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-90,-89.9,180,180)];


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
	this.shape.graphics.f("#FF0000").s().p("Ap7J8QkIkIAAl0QAAlzEIkIQEIkHFzAAQF1AAEHEHQEIEIAAFzQAAF0kIEIQkHEHl1AAQlzAAkIkHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-90,-89.9,180,180)];


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


(lib.wardrobe_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(135,124);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(135,-41);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(-134,42);

	this.instance_3 = new lib.blinking_light_3_2_mc();
	this.instance_3.setTransform(-134,-124);

	this.instance_4 = new lib.blinking_light_3_2_mc();
	this.instance_4.setTransform(135,-206);

	this.instance_5 = new lib.blinking_light_3_2_mc();
	this.instance_5.setTransform(-41,-204);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// body
	this.instance_6 = new lib.wardrobe_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-240,340,480);
p.frameBounds = [rect];


(lib.wardrobe_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.nav_3_2_mc();
	this.instance.setTransform(-110,150,0.786,0.786,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.nav_3_2_mc();
	this.instance_1.setTransform(110,150,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(169,31);

	this.instance_3 = new lib.blinking_light_3_2_mc();
	this.instance_3.setTransform(-169,30);

	this.instance_4 = new lib.blinking_light_3_2_mc();
	this.instance_4.setTransform(170,-133);

	this.instance_5 = new lib.blinking_light_3_2_mc();
	this.instance_5.setTransform(-168,-133);

	this.instance_6 = new lib.blinking_light_3_2_mc();
	this.instance_6.setTransform(-166,-299);

	this.instance_7 = new lib.blinking_light_3_2_mc();
	this.instance_7.setTransform(1,-300);

	this.instance_8 = new lib.blinking_light_3_2_mc();
	this.instance_8.setTransform(167,-300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// graph
	this.instance_9 = new lib.wardrobe_1_1_img();
	this.instance_9.setTransform(-210,-330);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-330,420,660);
p.frameBounds = [rect];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{location_1:0,location_2:1,location_3:2,location_4:3,location_5:4,location_6:5,location_7:6,location_8:7,location_9:8});

	// body
	this.frame_1_mc = new lib.frame_locations_1_mc();

	this.frame_2_mc = new lib.frame_locations_2_mc();

	this.frame_3_mc = new lib.frame_locations_3_mc();

	this.frame_4_mc = new lib.frame_locations_4_mc();

	this.frame_5_mc = new lib.frame_locations_5_mc();

	this.frame_6_mc = new lib.frame_locations_6_mc();

	this.frame_7_mc = new lib.frame_locations_7_mc();

	this.frame_8_mc = new lib.frame_locations_8_mc();

	this.frame_9_mc = new lib.frame_locations_9_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).to({state:[{t:this.frame_4_mc}]},1).to({state:[{t:this.frame_5_mc}]},1).to({state:[{t:this.frame_6_mc}]},1).to({state:[{t:this.frame_7_mc}]},1).to({state:[{t:this.frame_8_mc}]},1).to({state:[{t:this.frame_9_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-250,800,550);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.dressupPanel_2_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_4_mc();
	this.next_mc.setTransform(120.1,20.1,1,1,0,0,0,0.1,0.1);

	this.prev_mc = new lib.prev_4_mc();
	this.prev_mc.setTransform(-120.1,20.1,1,1,0,0,0,-0.1,0.1);

	this.set_5 = new lib.set_0_mc();
	this.set_5.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_5},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_9_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-310,320,960);
p.frameBounds = [rect];


(lib.dressupPanel_2_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(140.1,122.1,1,1,0,0,0,0.1,0.1);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-140.1,122.1,1,1,0,0,0,-0.1,0.1);

	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_3},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-240,380,890);
p.frameBounds = [rect];


(lib.dressupPanel_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_4_mc();
	this.next_mc.setTransform(120.1,20.1,1,1,0,0,0,0.1,0.1);

	this.prev_mc = new lib.prev_4_mc();
	this.prev_mc.setTransform(-120.1,20.1,1,1,0,0,0,-0.1,0.1);

	this.set_5 = new lib.set_0_mc();
	this.set_5.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_5},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-310,320,960);
p.frameBounds = [rect];


(lib.dressupPanel_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(140.1,122.1,1,1,0,0,0,0.1,0.1);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-140.1,122.1,1,1,0,0,0,-0.1,0.1);

	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_3},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-240,380,890);
p.frameBounds = [rect];


(lib.dressupPanel_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_4_mc();
	this.next_mc.setTransform(120.1,20.1,1,1,0,0,0,0.1,0.1);

	this.prev_mc = new lib.prev_4_mc();
	this.prev_mc.setTransform(-120.1,20.1,1,1,0,0,0,-0.1,0.1);

	this.set_5 = new lib.set_0_mc();
	this.set_5.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_5},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-310,320,960);
p.frameBounds = [rect];


(lib.dressupPanel_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(140.1,122.1,1,1,0,0,0,0.1,0.1);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-140.1,122.1,1,1,0,0,0,-0.1,0.1);

	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_3},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-240,380,890);
p.frameBounds = [rect];


(lib.dressupPanel_1_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(180.1,50.1,1,1,0,0,0,0.1,0.1);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-180.1,50.1,1,1,0,0,0,-0.1,0.1);

	this.set_4 = new lib.set_0_mc();
	this.set_4.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_4},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_9_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-225,-325,450,975);
p.frameBounds = [rect];


(lib.dressupPanel_1_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(180.1,55.1,1,1,0,0,0,0.1,0.1);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-180.1,55.1,1,1,0,0,0,-0.1,0.1);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-225,-310,450,960);
p.frameBounds = [rect];


(lib.dressupPanel_1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(110.1,150.1,1,1,0,0,0,0.1,0.1);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-110.1,150.1,1,1,0,0,0,-0.1,0.1);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-330,420,980);
p.frameBounds = [rect];


(lib.dressupPanel_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(180.1,50.1,1,1,0,0,0,0.1,0.1);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-180.1,50.1,1,1,0,0,0,-0.1,0.1);

	this.set_4 = new lib.set_0_mc();
	this.set_4.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_4},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-225,-330,450,980);
p.frameBounds = [rect];


(lib.dressupPanel_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(180.1,55.1,1,1,0,0,0,0.1,0.1);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-180.1,55.1,1,1,0,0,0,-0.1,0.1);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-225,-310,450,960);
p.frameBounds = [rect];


(lib.dressupPanel_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(110.1,150.1,1,1,0,0,0,0.1,0.1);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-110.1,150.1,1,1,0,0,0,-0.1,0.1);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-330,420,980);
p.frameBounds = [rect];


(lib.dressupPanel_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(180.1,50.1,1,1,0,0,0,0.1,0.1);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-180.1,50.1,1,1,0,0,0,-0.1,0.1);

	this.set_4 = new lib.set_0_mc();
	this.set_4.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_4},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-225,-315,450,965);
p.frameBounds = [rect];


(lib.dressupPanel_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(180.1,55.1,1,1,0,0,0,0.1,0.1);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-180.1,55.1,1,1,0,0,0,-0.1,0.1);

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
p.nominalBounds = rect = new cjs.Rectangle(-225,-310,450,960);
p.frameBounds = [rect];


(lib.dressupPanel_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(110.1,150.1,1,1,0,0,0,0.1,0.1);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-110.1,150.1,1,1,0,0,0,-0.1,0.1);

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
p.nominalBounds = rect = new cjs.Rectangle(-210,-330,420,980);
p.frameBounds = [rect];


(lib.decor_shadow_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.gravity_big_explosion_comp = new lib.GravityBigExplosionMC();
	this.gravity_big_explosion_comp.setTransform(460,300);

	this.timeline.addTween(cjs.Tween.get(this.gravity_big_explosion_comp).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(448,288,24,24);
p.frameBounds = [rect];


(lib.background_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(557,66);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(235,64);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(725,88);

	this.instance_3 = new lib.blinking_light_3_2_mc();
	this.instance_3.setTransform(64,88);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_4 = new lib.background_8_img();
	this.instance_4.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(159,343);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(682,260);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(156,175);

	this.instance_3 = new lib.blinking_light_3_2_mc();
	this.instance_3.setTransform(-200,341);

	this.instance_4 = new lib.blinking_light_3_2_mc();
	this.instance_4.setTransform(-200,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_5 = new lib.background_3_img();
	this.instance_5.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(-198,418);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(-142,184);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(-240,286);

	this.instance_3 = new lib.blinking_light_3_2_mc();
	this.instance_3.setTransform(120,247);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_4 = new lib.background_2_img();
	this.instance_4.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.background_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(579,29);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(216,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_2 = new lib.background_1_img();
	this.instance_2.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

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


(lib.Bubble_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_3_mc();
	this.instance.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-15,30,30);
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
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,665);
p.frameBounds = [rect];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":99,"end":159});

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
	this.frame_74 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(25).call(this.frame_54).wait(20).call(this.frame_74).wait(86));

	// play_btn
	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(680,700,0.895,0.895);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).wait(74).to({scaleX:0.53,scaleY:0.53},0).to({scaleX:0.95,scaleY:0.95,y:450},10).to({scaleX:0.9,scaleY:0.9,y:500},10).wait(5).to({scaleX:0.79,scaleY:0.79},5).to({scaleX:0.9,scaleY:0.9},10).to({y:460},5).to({scaleX:0.53,scaleY:0.53,y:700},10).wait(31));

	// btn
	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(400.5,1050.5,0.75,0.75,0,0,0,0.7,0.7);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,920);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(400,820,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(60,540,0.727,0.727);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-40);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.social_network_mc}]}).wait(160));

	// title
	this.instance = new lib.title_mc();
	this.instance.setTransform(280,850);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({y:300},15).to({y:400},5).wait(116));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(0,400);
	this.instance_1.alpha = 0.398;
	this.instance_1.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

	// hero
	this.instance_2 = new lib.hero_main_mc();
	this.instance_2.setTransform(1500,350);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({x:440},20).to({x:540},10).wait(86));

	// decor
	this.bubble_comp = new lib.bubble_1_2_mc();
	this.bubble_comp.setTransform(-201,-1,1,1,0,0,0,-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(160));

	// bg
	this.instance_3 = new lib.background_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-270.8,2129,1365.9);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,-80,2129,1175), rect, rect, new cjs.Rectangle(-400,-270.8,2129,1365.9), rect=new cjs.Rectangle(-400,-80,2129,1175), rect, rect, new cjs.Rectangle(-400,-270.8,2129,1365.9), rect=new cjs.Rectangle(-400,-80,2129,1175), rect, rect, new cjs.Rectangle(-400,-270.8,2129,1365.9), rect=new cjs.Rectangle(-400,-80,2129,1175), rect, rect, new cjs.Rectangle(-400,-270.8,2129,1365.9), rect=new cjs.Rectangle(-400,-80,2129,1175), rect, rect, new cjs.Rectangle(-400,-270.8,2129,1365.9), rect=new cjs.Rectangle(-400,-80,2129,1175), rect, rect, new cjs.Rectangle(-400,-270.8,2129,1365.9), rect=new cjs.Rectangle(-400,-80,2129,1175), rect, rect, new cjs.Rectangle(-400,-270.8,2129,1365.9), rect=new cjs.Rectangle(-400,-80,2129,1175), rect, rect, new cjs.Rectangle(-400,-270.8,2129,1365.9), rect=new cjs.Rectangle(-400,-80,2129,1175), rect, rect, new cjs.Rectangle(-400,-270.8,2129,1365.9), rect=new cjs.Rectangle(-400,-80,2129,1175), rect, rect, new cjs.Rectangle(-400,-270.8,2129,1365.9), rect=new cjs.Rectangle(-400,-80,2129,1175), rect, rect, new cjs.Rectangle(-400,-270.8,2129,1365.9), new cjs.Rectangle(-400,-80,2076,1175), new cjs.Rectangle(-400,-80,2023,1175), new cjs.Rectangle(-400,-80,1970,1175), new cjs.Rectangle(-400,-270.8,1917,1365.9), new cjs.Rectangle(-400,-80,1864,1175), new cjs.Rectangle(-400,-80,1811,1175), new cjs.Rectangle(-400,-80,1758,1175), new cjs.Rectangle(-400,-270.8,1705,1365.9), new cjs.Rectangle(-400,-80,1652,1175), rect=new cjs.Rectangle(-400,-80,1600,1175), rect, new cjs.Rectangle(-400,-270.8,1600,1365.9), rect=new cjs.Rectangle(-400,-80,1600,1175), rect, rect, new cjs.Rectangle(-400,-270.8,1600,1365.9), rect=new cjs.Rectangle(-400,-80,1600,1175), rect, rect, new cjs.Rectangle(-400,-270.8,1600,1365.9), rect=new cjs.Rectangle(-400,-80,1600,1175), rect, rect, new cjs.Rectangle(-400,-270.8,1600,1365.9), rect=new cjs.Rectangle(-400,-80,1600,1175), rect, rect, new cjs.Rectangle(-400,-270.8,1600,1365.9), rect=new cjs.Rectangle(-400,-80,1600,1175), rect, rect, new cjs.Rectangle(-400,-270.8,1600,1365.9), rect=new cjs.Rectangle(-400,-80,1600,1175), rect, rect, new cjs.Rectangle(-400,-270.8,1600,1365.9), rect=new cjs.Rectangle(-400,-80,1600,1175), rect, rect, new cjs.Rectangle(-400,-270.8,1600,1365.9), rect=new cjs.Rectangle(-400,-80,1600,1175), rect, rect, new cjs.Rectangle(-400,-270.8,1600,1365.9), rect=new cjs.Rectangle(-400,-80,1600,1175), rect, rect, new cjs.Rectangle(-400,-270.8,1600,1365.9), rect=new cjs.Rectangle(-400,-80,1600,1175), rect, rect, new cjs.Rectangle(-400,-270.8,1600,1365.9), rect=new cjs.Rectangle(-400,-80,1600,1175), rect, rect, new cjs.Rectangle(-400,-270.8,1600,1365.9), rect=new cjs.Rectangle(-400,-80,1600,1175), rect, rect, new cjs.Rectangle(-400,-270.8,1600,1365.9), rect=new cjs.Rectangle(-400,-80,1600,1175), rect, rect, new cjs.Rectangle(-400,-270.8,1600,1365.9), rect=new cjs.Rectangle(-400,-80,1600,1175), rect, rect, new cjs.Rectangle(-400,-270.8,1600,1365.9), rect=new cjs.Rectangle(-400,-80,1600,1175), rect, rect, new cjs.Rectangle(-400,-270.8,1600,1365.9), rect=new cjs.Rectangle(-400,-80,1600,1175), rect, rect, new cjs.Rectangle(-400,-270.8,1600,1365.9), rect=new cjs.Rectangle(-400,-80,1600,1175), rect, rect, new cjs.Rectangle(-400,-270.8,1600,1365.9), rect=new cjs.Rectangle(-400,-80,1600,1175), rect, rect, new cjs.Rectangle(-400,-270.8,1600,1365.9), rect=new cjs.Rectangle(-400,-80,1600,1175), rect, rect, new cjs.Rectangle(-400,-270.8,1600,1365.9), rect=new cjs.Rectangle(-400,-80,1600,1175), rect, rect, new cjs.Rectangle(-400,-270.8,1600,1365.9), rect=new cjs.Rectangle(-400,-80,1600,1175), rect, rect, new cjs.Rectangle(-400,-270.8,1600,1365.9), rect=new cjs.Rectangle(-400,-80,1600,1175), rect, rect, new cjs.Rectangle(-400,-270.8,1600,1365.9), rect=new cjs.Rectangle(-400,-80,1600,1175), rect, rect, new cjs.Rectangle(-400,-270.8,1600,1365.9), rect=new cjs.Rectangle(-400,-80,1600,1175), rect, rect, new cjs.Rectangle(-400,-270.8,1600,1365.9), rect=new cjs.Rectangle(-400,-80,1600,1175), rect, rect, new cjs.Rectangle(-400,-270.8,1600,1365.9), rect=new cjs.Rectangle(-400,-80,1600,1175), rect, rect];


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
	this.locations_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.locations_mc).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(0,400);
	this.instance.alpha = 0.301;
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


(lib.quest_2_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":239});

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
	this.frame_119 = function() {
		try
		{
			app.addSoundFunc("magic_2_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(65).call(this.frame_74).wait(45).call(this.frame_119).wait(121));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(700,700,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(34).to({y:450},10).to({y:500},10).wait(5).to({scaleX:0.74,scaleY:0.74},5).to({scaleX:0.84,scaleY:0.84},10).to({y:460},5).to({regY:0.1,scaleX:0.63,scaleY:0.63,y:700.1},10).wait(151));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_9_mc();
	this.dressupPanel_mc.setTransform(-600,350);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(4).to({x:280},20).to({x:180},10).wait(40).to({x:280},10).to({x:-600},20).wait(136));

	// hero
	this.hero_3 = new lib.hero_3_mc();
	this.hero_3.setTransform(577.4,321.2,1,1,0,0,0,-2.6,-28.8);

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(104).to({x:397.4},20).wait(116));

	// decor
	this.instance = new lib.decor_shadow_1_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(124).to({_off:false},0).wait(116));

	// decor
	this.instance_1 = new lib.background_8_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(104).to({_off:false},0).to({alpha:1},20).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-760,-16,1569,1016);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-716,-16,1525,1016), new cjs.Rectangle(-672,-16,1481,1016), new cjs.Rectangle(-628,-16,1437,1016), new cjs.Rectangle(-584,-16,1393,1016), new cjs.Rectangle(-540,-16,1349,1016), new cjs.Rectangle(-496,-16,1305,1016), new cjs.Rectangle(-452,-16,1261,1016), new cjs.Rectangle(-408,-16,1217,1016), new cjs.Rectangle(-364,-16,1173,1016), new cjs.Rectangle(-320,-16,1129,1016), new cjs.Rectangle(-276,-16,1085,1016), new cjs.Rectangle(-232,-16,1041,1016), new cjs.Rectangle(-188,-16,997,1016), new cjs.Rectangle(-144,-16,953,1016), new cjs.Rectangle(-100,-16,909,1016), new cjs.Rectangle(-56,-16,865.1,1016), new cjs.Rectangle(-12,-16,821.1,1016), new cjs.Rectangle(32,-16,777.1,1016), new cjs.Rectangle(76,-16,733.1,1016), new cjs.Rectangle(120,-16,689,1016), new cjs.Rectangle(110,-16,699.1,1016), new cjs.Rectangle(100,-16,709.1,1016), new cjs.Rectangle(90,-16,719.1,1016), new cjs.Rectangle(80,-16,729.1,1016), new cjs.Rectangle(70,-16,739.1,1016), new cjs.Rectangle(60,-16,749.1,1016), new cjs.Rectangle(50,-16,759.1,1016), new cjs.Rectangle(40,-16,769.1,1016), new cjs.Rectangle(30,-16,779.1,1016), rect=new cjs.Rectangle(20,-16,789,1016), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(30,-16,779.1,1016), new cjs.Rectangle(40,-16,769.1,1016), new cjs.Rectangle(50,-16,759.1,1016), new cjs.Rectangle(60,-16,749.1,1016), new cjs.Rectangle(70,-16,739.1,1016), new cjs.Rectangle(80,-16,729.1,1016), new cjs.Rectangle(90,-16,719.1,1016), new cjs.Rectangle(100,-16,709.1,1016), new cjs.Rectangle(110,-16,699.1,1016), new cjs.Rectangle(120,-16,689,1016), new cjs.Rectangle(76,-16,733.1,1016), new cjs.Rectangle(32,-16,777.1,1016), new cjs.Rectangle(-12,-16,821.1,1016), new cjs.Rectangle(-56,-16,865.1,1016), new cjs.Rectangle(-100,-16,909,1016), new cjs.Rectangle(-144,-16,953,1016), new cjs.Rectangle(-188,-16,997,1016), new cjs.Rectangle(-232,-16,1041,1016), new cjs.Rectangle(-276,-16,1085,1016), new cjs.Rectangle(-320,-16,1129,1016), new cjs.Rectangle(-364,-16,1173,1016), new cjs.Rectangle(-408,-16,1217,1016), new cjs.Rectangle(-452,-16,1261,1016), new cjs.Rectangle(-496,-16,1305,1016), new cjs.Rectangle(-540,-16,1349,1016), new cjs.Rectangle(-584,-16,1393,1016), new cjs.Rectangle(-628,-16,1437,1016), new cjs.Rectangle(-672,-16,1481,1016), new cjs.Rectangle(-716,-16,1525,1016), rect=new cjs.Rectangle(-760,-16,1960,1016), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_2_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":229});

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
	this.frame_119 = function() {
		try
		{
			app.addSoundFunc("magic_2_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(65).call(this.frame_74).wait(45).call(this.frame_119).wait(111));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(550.1,700.1,0.737,0.737,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(34).to({y:450.1},10).to({y:500.1},5).wait(10).to({scaleX:0.63,scaleY:0.63},5).to({scaleX:0.74,scaleY:0.74},10).to({y:460.1},5).to({regY:0.2,scaleX:0.53,scaleY:0.53,y:700.1},10).wait(141));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_8_mc();
	this.dressupPanel_mc.setTransform(1500,280);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(4).to({x:450},20).to({x:550},10).wait(40).to({x:450},10).to({x:1500},20).wait(126));

	// hero
	this.hero_3 = new lib.hero_3_mc();
	this.hero_3.setTransform(147.4,321.2,1,1,0,0,0,-2.6,-28.8);

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(104).to({x:397.4},20).wait(106));

	// decor
	this.instance = new lib.decor_shadow_1_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(124).to({_off:false},0).wait(106));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(104).to({_off:false},0).to({alpha:1},20).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84,-16,1774.1,946);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-84,-16,1721.6,946), new cjs.Rectangle(-84,-16,1669.1,946), new cjs.Rectangle(-84,-16,1616.6,946), new cjs.Rectangle(-84,-16,1564.1,946), new cjs.Rectangle(-84,-16,1511.6,946), new cjs.Rectangle(-84,-16,1459.1,946), new cjs.Rectangle(-84,-16,1406.6,946), new cjs.Rectangle(-84,-16,1354.1,946), new cjs.Rectangle(-84,-16,1301.6,946), new cjs.Rectangle(-84,-16,1249.1,946), new cjs.Rectangle(-84,-16,1196.6,946), new cjs.Rectangle(-84,-16,1144.1,946), new cjs.Rectangle(-84,-16,1091.6,946), new cjs.Rectangle(-84,-16,1039.1,946), new cjs.Rectangle(-84,-16,986.6,946), new cjs.Rectangle(-84,-16,934.1,946), new cjs.Rectangle(-84,-16,881.6,946), new cjs.Rectangle(-84,-16,829.1,946), new cjs.Rectangle(-84,-16,776.6,946), new cjs.Rectangle(-84,-16,724.1,946), new cjs.Rectangle(-84,-16,734.1,946), new cjs.Rectangle(-84,-16,744.1,946), new cjs.Rectangle(-84,-16,754.1,946), new cjs.Rectangle(-84,-16,764.1,946), new cjs.Rectangle(-84,-16,774.1,946), new cjs.Rectangle(-84,-16,784.1,946), new cjs.Rectangle(-84,-16,794.1,946), new cjs.Rectangle(-84,-16,804.1,946), new cjs.Rectangle(-84,-16,814.1,946), rect=new cjs.Rectangle(-84,-16,824.1,946), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-84,-16,814.1,946), new cjs.Rectangle(-84,-16,804.1,946), new cjs.Rectangle(-84,-16,794.1,946), new cjs.Rectangle(-84,-16,784.1,946), new cjs.Rectangle(-84,-16,774.1,946), new cjs.Rectangle(-84,-16,764.1,946), new cjs.Rectangle(-84,-16,754.1,946), new cjs.Rectangle(-84,-16,744.1,946), new cjs.Rectangle(-84,-16,734.1,946), new cjs.Rectangle(-84,-16,724.1,946), new cjs.Rectangle(-84,-16,776.6,946), new cjs.Rectangle(-84,-16,829.1,946), new cjs.Rectangle(-84,-16,881.6,946), new cjs.Rectangle(-84,-16,934.1,946), new cjs.Rectangle(-84,-16,986.6,946), new cjs.Rectangle(-84,-16,1039.1,946), new cjs.Rectangle(-84,-16,1091.6,946), new cjs.Rectangle(-84,-16,1144.1,946), new cjs.Rectangle(-84,-16,1196.6,946), new cjs.Rectangle(-84,-16,1249.1,946), new cjs.Rectangle(-84,-16,1301.6,946), new cjs.Rectangle(-84,-16,1354.1,946), new cjs.Rectangle(-84,-16,1406.6,946), new cjs.Rectangle(-84,-16,1459.1,946), new cjs.Rectangle(-84,-16,1511.6,946), new cjs.Rectangle(-84,-16,1564.1,946), new cjs.Rectangle(-84,-16,1616.6,946), new cjs.Rectangle(-84,-16,1669.1,946), new cjs.Rectangle(-84,-16,1721.6,946), rect=new cjs.Rectangle(-410,-16,2100,946), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":239});

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
	this.frame_119 = function() {
		try
		{
			app.addSoundFunc("magic_2_sound", 0.2);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_224 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(65).call(this.frame_74).wait(45).call(this.frame_119).wait(105).call(this.frame_224).wait(16));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(700,700,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(34).to({y:450},10).to({y:500},10).wait(5).to({scaleX:0.74,scaleY:0.74},5).to({scaleX:0.84,scaleY:0.84},10).to({y:460},5).to({regY:0.1,scaleX:0.63,scaleY:0.63,y:700.1},10).wait(151));

	// decor
	this.instance = new lib.forward_mc();
	this.instance.setTransform(700.1,700.1,0.579,0.579,0,0,0,0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(219).to({_off:false},0).to({scaleX:0.9,scaleY:0.9,y:450.1},10).to({scaleX:0.79,scaleY:0.79,y:500.1},5).wait(6));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_6_mc();
	this.dressupPanel_mc.setTransform(-600,350);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(4).to({x:280},20).to({x:180},10).wait(40).to({x:280},10).to({x:-600},20).wait(136));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(577.4,321.2,1,1,0,0,0,-2.6,-28.8);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(104).to({x:397.4},20).wait(116));

	// decor
	this.instance_1 = new lib.decor_shadow_1_mc();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(124).to({_off:false},0).wait(116));

	// decor
	this.instance_2 = new lib.background_7_mc();
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(104).to({_off:false},0).to({alpha:1},20).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-760,-16,1569,1016);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-716,-16,1525,1016), new cjs.Rectangle(-672,-16,1481,1016), new cjs.Rectangle(-628,-16,1437,1016), new cjs.Rectangle(-584,-16,1393,1016), new cjs.Rectangle(-540,-16,1349,1016), new cjs.Rectangle(-496,-16,1305,1016), new cjs.Rectangle(-452,-16,1261,1016), new cjs.Rectangle(-408,-16,1217,1016), new cjs.Rectangle(-364,-16,1173,1016), new cjs.Rectangle(-320,-16,1129,1016), new cjs.Rectangle(-276,-16,1085,1016), new cjs.Rectangle(-232,-16,1041,1016), new cjs.Rectangle(-188,-16,997,1016), new cjs.Rectangle(-144,-16,953,1016), new cjs.Rectangle(-100,-16,909,1016), new cjs.Rectangle(-56,-16,865.1,1016), new cjs.Rectangle(-12,-16,821.1,1016), new cjs.Rectangle(32,-16,777.1,1016), new cjs.Rectangle(76,-16,733.1,1016), new cjs.Rectangle(120,-16,689,1016), new cjs.Rectangle(110,-16,699.1,1016), new cjs.Rectangle(100,-16,709.1,1016), new cjs.Rectangle(90,-16,719.1,1016), new cjs.Rectangle(80,-16,729.1,1016), new cjs.Rectangle(70,-16,739.1,1016), new cjs.Rectangle(60,-16,749.1,1016), new cjs.Rectangle(50,-16,759.1,1016), new cjs.Rectangle(40,-16,769.1,1016), new cjs.Rectangle(30,-16,779.1,1016), rect=new cjs.Rectangle(20,-16,789,1016), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(30,-16,779.1,1016), new cjs.Rectangle(40,-16,769.1,1016), new cjs.Rectangle(50,-16,759.1,1016), new cjs.Rectangle(60,-16,749.1,1016), new cjs.Rectangle(70,-16,739.1,1016), new cjs.Rectangle(80,-16,729.1,1016), new cjs.Rectangle(90,-16,719.1,1016), new cjs.Rectangle(100,-16,709.1,1016), new cjs.Rectangle(110,-16,699.1,1016), new cjs.Rectangle(120,-16,689,1016), new cjs.Rectangle(76,-16,733.1,1016), new cjs.Rectangle(32,-16,777.1,1016), new cjs.Rectangle(-12,-16,821.1,1016), new cjs.Rectangle(-56,-16,865.1,1016), new cjs.Rectangle(-100,-16,909,1016), new cjs.Rectangle(-144,-16,953,1016), new cjs.Rectangle(-188,-16,997,1016), new cjs.Rectangle(-232,-16,1041,1016), new cjs.Rectangle(-276,-16,1085,1016), new cjs.Rectangle(-320,-16,1129,1016), new cjs.Rectangle(-364,-16,1173,1016), new cjs.Rectangle(-408,-16,1217,1016), new cjs.Rectangle(-452,-16,1261,1016), new cjs.Rectangle(-496,-16,1305,1016), new cjs.Rectangle(-540,-16,1349,1016), new cjs.Rectangle(-584,-16,1393,1016), new cjs.Rectangle(-628,-16,1437,1016), new cjs.Rectangle(-672,-16,1481,1016), new cjs.Rectangle(-716,-16,1525,1016), rect=new cjs.Rectangle(-760,-16,1960,1016), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":229});

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
	this.frame_119 = function() {
		try
		{
			app.addSoundFunc("magic_2_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(65).call(this.frame_74).wait(45).call(this.frame_119).wait(111));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(550.1,700.1,0.737,0.737,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(34).to({y:450.1},10).to({y:500.1},5).wait(10).to({scaleX:0.63,scaleY:0.63},5).to({scaleX:0.74,scaleY:0.74},10).to({y:460.1},5).to({regY:0.2,scaleX:0.53,scaleY:0.53,y:700.1},10).wait(141));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_5_mc();
	this.dressupPanel_mc.setTransform(1500,280);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(4).to({x:450},20).to({x:550},10).wait(40).to({x:450},10).to({x:1500},20).wait(126));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(147.4,321.2,1,1,0,0,0,-2.6,-28.8);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(104).to({x:397.4},20).wait(106));

	// decor
	this.instance = new lib.decor_shadow_1_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(124).to({_off:false},0).wait(106));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(104).to({_off:false},0).to({alpha:1},20).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84,-16,1774.1,946);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-84,-16,1721.6,946), new cjs.Rectangle(-84,-16,1669.1,946), new cjs.Rectangle(-84,-16,1616.6,946), new cjs.Rectangle(-84,-16,1564.1,946), new cjs.Rectangle(-84,-16,1511.6,946), new cjs.Rectangle(-84,-16,1459.1,946), new cjs.Rectangle(-84,-16,1406.6,946), new cjs.Rectangle(-84,-16,1354.1,946), new cjs.Rectangle(-84,-16,1301.6,946), new cjs.Rectangle(-84,-16,1249.1,946), new cjs.Rectangle(-84,-16,1196.6,946), new cjs.Rectangle(-84,-16,1144.1,946), new cjs.Rectangle(-84,-16,1091.6,946), new cjs.Rectangle(-84,-16,1039.1,946), new cjs.Rectangle(-84,-16,986.6,946), new cjs.Rectangle(-84,-16,934.1,946), new cjs.Rectangle(-84,-16,881.6,946), new cjs.Rectangle(-84,-16,829.1,946), new cjs.Rectangle(-84,-16,776.6,946), new cjs.Rectangle(-84,-16,724.1,946), new cjs.Rectangle(-84,-16,734.1,946), new cjs.Rectangle(-84,-16,744.1,946), new cjs.Rectangle(-84,-16,754.1,946), new cjs.Rectangle(-84,-16,764.1,946), new cjs.Rectangle(-84,-16,774.1,946), new cjs.Rectangle(-84,-16,784.1,946), new cjs.Rectangle(-84,-16,794.1,946), new cjs.Rectangle(-84,-16,804.1,946), new cjs.Rectangle(-84,-16,814.1,946), rect=new cjs.Rectangle(-84,-16,824.1,946), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-84,-16,814.1,946), new cjs.Rectangle(-84,-16,804.1,946), new cjs.Rectangle(-84,-16,794.1,946), new cjs.Rectangle(-84,-16,784.1,946), new cjs.Rectangle(-84,-16,774.1,946), new cjs.Rectangle(-84,-16,764.1,946), new cjs.Rectangle(-84,-16,754.1,946), new cjs.Rectangle(-84,-16,744.1,946), new cjs.Rectangle(-84,-16,734.1,946), new cjs.Rectangle(-84,-16,724.1,946), new cjs.Rectangle(-84,-16,776.6,946), new cjs.Rectangle(-84,-16,829.1,946), new cjs.Rectangle(-84,-16,881.6,946), new cjs.Rectangle(-84,-16,934.1,946), new cjs.Rectangle(-84,-16,986.6,946), new cjs.Rectangle(-84,-16,1039.1,946), new cjs.Rectangle(-84,-16,1091.6,946), new cjs.Rectangle(-84,-16,1144.1,946), new cjs.Rectangle(-84,-16,1196.6,946), new cjs.Rectangle(-84,-16,1249.1,946), new cjs.Rectangle(-84,-16,1301.6,946), new cjs.Rectangle(-84,-16,1354.1,946), new cjs.Rectangle(-84,-16,1406.6,946), new cjs.Rectangle(-84,-16,1459.1,946), new cjs.Rectangle(-84,-16,1511.6,946), new cjs.Rectangle(-84,-16,1564.1,946), new cjs.Rectangle(-84,-16,1616.6,946), new cjs.Rectangle(-84,-16,1669.1,946), new cjs.Rectangle(-84,-16,1721.6,946), rect=new cjs.Rectangle(-410,-16,2100,946), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":239});

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
	this.frame_119 = function() {
		try
		{
			app.addSoundFunc("magic_2_sound", 0.2);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_224 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(65).call(this.frame_74).wait(45).call(this.frame_119).wait(105).call(this.frame_224).wait(16));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(700,700,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(34).to({y:450},10).to({y:500},10).wait(5).to({scaleX:0.74,scaleY:0.74},5).to({scaleX:0.84,scaleY:0.84},10).to({y:460},5).to({regY:0.1,scaleX:0.63,scaleY:0.63,y:700.1},10).wait(151));

	// decor
	this.instance = new lib.forward_mc();
	this.instance.setTransform(700.1,700.1,0.579,0.579,0,0,0,0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(219).to({_off:false},0).to({scaleX:0.9,scaleY:0.9,y:450.1},10).to({scaleX:0.79,scaleY:0.79,y:500.1},5).wait(6));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_3_mc();
	this.dressupPanel_mc.setTransform(-600,350);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(4).to({x:280},20).to({x:180},10).wait(40).to({x:280},10).to({x:-600},20).wait(136));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(577.4,321.2,1,1,0,0,0,-2.6,-28.8);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(104).to({x:397.4},20).wait(116));

	// decor
	this.instance_1 = new lib.decor_shadow_1_mc();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(124).to({_off:false},0).wait(116));

	// decor
	this.instance_2 = new lib.background_5_mc();
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(104).to({_off:false},0).to({alpha:1},20).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-760,-16,1569,1016);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-716,-16,1525,1016), new cjs.Rectangle(-672,-16,1481,1016), new cjs.Rectangle(-628,-16,1437,1016), new cjs.Rectangle(-584,-16,1393,1016), new cjs.Rectangle(-540,-16,1349,1016), new cjs.Rectangle(-496,-16,1305,1016), new cjs.Rectangle(-452,-16,1261,1016), new cjs.Rectangle(-408,-16,1217,1016), new cjs.Rectangle(-364,-16,1173,1016), new cjs.Rectangle(-320,-16,1129,1016), new cjs.Rectangle(-276,-16,1085,1016), new cjs.Rectangle(-232,-16,1041,1016), new cjs.Rectangle(-188,-16,997,1016), new cjs.Rectangle(-144,-16,953,1016), new cjs.Rectangle(-100,-16,909,1016), new cjs.Rectangle(-56,-16,865.1,1016), new cjs.Rectangle(-12,-16,821.1,1016), new cjs.Rectangle(32,-16,777.1,1016), new cjs.Rectangle(76,-16,733.1,1016), new cjs.Rectangle(120,-16,689,1016), new cjs.Rectangle(110,-16,699.1,1016), new cjs.Rectangle(100,-16,709.1,1016), new cjs.Rectangle(90,-16,719.1,1016), new cjs.Rectangle(80,-16,729.1,1016), new cjs.Rectangle(70,-16,739.1,1016), new cjs.Rectangle(60,-16,749.1,1016), new cjs.Rectangle(50,-16,759.1,1016), new cjs.Rectangle(40,-16,769.1,1016), new cjs.Rectangle(30,-16,779.1,1016), rect=new cjs.Rectangle(20,-16,789,1016), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(30,-16,779.1,1016), new cjs.Rectangle(40,-16,769.1,1016), new cjs.Rectangle(50,-16,759.1,1016), new cjs.Rectangle(60,-16,749.1,1016), new cjs.Rectangle(70,-16,739.1,1016), new cjs.Rectangle(80,-16,729.1,1016), new cjs.Rectangle(90,-16,719.1,1016), new cjs.Rectangle(100,-16,709.1,1016), new cjs.Rectangle(110,-16,699.1,1016), new cjs.Rectangle(120,-16,689,1016), new cjs.Rectangle(76,-16,733.1,1016), new cjs.Rectangle(32,-16,777.1,1016), new cjs.Rectangle(-12,-16,821.1,1016), new cjs.Rectangle(-56,-16,865.1,1016), new cjs.Rectangle(-100,-16,909,1016), new cjs.Rectangle(-144,-16,953,1016), new cjs.Rectangle(-188,-16,997,1016), new cjs.Rectangle(-232,-16,1041,1016), new cjs.Rectangle(-276,-16,1085,1016), new cjs.Rectangle(-320,-16,1129,1016), new cjs.Rectangle(-364,-16,1173,1016), new cjs.Rectangle(-408,-16,1217,1016), new cjs.Rectangle(-452,-16,1261,1016), new cjs.Rectangle(-496,-16,1305,1016), new cjs.Rectangle(-540,-16,1349,1016), new cjs.Rectangle(-584,-16,1393,1016), new cjs.Rectangle(-628,-16,1437,1016), new cjs.Rectangle(-672,-16,1481,1016), new cjs.Rectangle(-716,-16,1525,1016), rect=new cjs.Rectangle(-760,-16,1960,1016), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":229});

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
	this.frame_119 = function() {
		try
		{
			app.addSoundFunc("magic_2_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(65).call(this.frame_74).wait(45).call(this.frame_119).wait(111));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(550.1,700.1,0.737,0.737,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(34).to({y:450.1},10).to({y:500.1},5).wait(10).to({scaleX:0.63,scaleY:0.63},5).to({scaleX:0.74,scaleY:0.74},10).to({y:460.1},5).to({regY:0.2,scaleX:0.53,scaleY:0.53,y:700.1},10).wait(141));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_2_mc();
	this.dressupPanel_mc.setTransform(1500,280);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(4).to({x:450},20).to({x:550},10).wait(40).to({x:450},10).to({x:1500},20).wait(126));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(147.4,321.2,1,1,0,0,0,-2.6,-28.8);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(104).to({x:397.4},20).wait(106));

	// decor
	this.instance = new lib.decor_shadow_1_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(124).to({_off:false},0).wait(106));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(104).to({_off:false},0).to({alpha:1},20).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84,-16,1774.1,946);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-84,-16,1721.6,946), new cjs.Rectangle(-84,-16,1669.1,946), new cjs.Rectangle(-84,-16,1616.6,946), new cjs.Rectangle(-84,-16,1564.1,946), new cjs.Rectangle(-84,-16,1511.6,946), new cjs.Rectangle(-84,-16,1459.1,946), new cjs.Rectangle(-84,-16,1406.6,946), new cjs.Rectangle(-84,-16,1354.1,946), new cjs.Rectangle(-84,-16,1301.6,946), new cjs.Rectangle(-84,-16,1249.1,946), new cjs.Rectangle(-84,-16,1196.6,946), new cjs.Rectangle(-84,-16,1144.1,946), new cjs.Rectangle(-84,-16,1091.6,946), new cjs.Rectangle(-84,-16,1039.1,946), new cjs.Rectangle(-84,-16,986.6,946), new cjs.Rectangle(-84,-16,934.1,946), new cjs.Rectangle(-84,-16,881.6,946), new cjs.Rectangle(-84,-16,829.1,946), new cjs.Rectangle(-84,-16,776.6,946), new cjs.Rectangle(-84,-16,724.1,946), new cjs.Rectangle(-84,-16,734.1,946), new cjs.Rectangle(-84,-16,744.1,946), new cjs.Rectangle(-84,-16,754.1,946), new cjs.Rectangle(-84,-16,764.1,946), new cjs.Rectangle(-84,-16,774.1,946), new cjs.Rectangle(-84,-16,784.1,946), new cjs.Rectangle(-84,-16,794.1,946), new cjs.Rectangle(-84,-16,804.1,946), new cjs.Rectangle(-84,-16,814.1,946), rect=new cjs.Rectangle(-84,-16,824.1,946), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-84,-16,814.1,946), new cjs.Rectangle(-84,-16,804.1,946), new cjs.Rectangle(-84,-16,794.1,946), new cjs.Rectangle(-84,-16,784.1,946), new cjs.Rectangle(-84,-16,774.1,946), new cjs.Rectangle(-84,-16,764.1,946), new cjs.Rectangle(-84,-16,754.1,946), new cjs.Rectangle(-84,-16,744.1,946), new cjs.Rectangle(-84,-16,734.1,946), new cjs.Rectangle(-84,-16,724.1,946), new cjs.Rectangle(-84,-16,776.6,946), new cjs.Rectangle(-84,-16,829.1,946), new cjs.Rectangle(-84,-16,881.6,946), new cjs.Rectangle(-84,-16,934.1,946), new cjs.Rectangle(-84,-16,986.6,946), new cjs.Rectangle(-84,-16,1039.1,946), new cjs.Rectangle(-84,-16,1091.6,946), new cjs.Rectangle(-84,-16,1144.1,946), new cjs.Rectangle(-84,-16,1196.6,946), new cjs.Rectangle(-84,-16,1249.1,946), new cjs.Rectangle(-84,-16,1301.6,946), new cjs.Rectangle(-84,-16,1354.1,946), new cjs.Rectangle(-84,-16,1406.6,946), new cjs.Rectangle(-84,-16,1459.1,946), new cjs.Rectangle(-84,-16,1511.6,946), new cjs.Rectangle(-84,-16,1564.1,946), new cjs.Rectangle(-84,-16,1616.6,946), new cjs.Rectangle(-84,-16,1669.1,946), new cjs.Rectangle(-84,-16,1721.6,946), rect=new cjs.Rectangle(-410,-16,2100,946), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":109,"end":179});

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
	this.frame_59 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(30).call(this.frame_59).wait(65).call(this.frame_124).wait(56));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(250.1,540.1,0.632,0.632,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700.1},0).wait(83).to({y:490.1},10).to({y:540.1},10).wait(5).to({regY:0.3,scaleX:0.53,scaleY:0.53,y:540.2},5).to({regY:0.1,scaleX:0.63,scaleY:0.63,y:540.1},10).to({y:500.1},5).to({y:700.1},10).wait(41));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_9_mc();
	this.dressupPanel_mc.setTransform(250,350);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-700},0).wait(23).to({x:350},20).to({x:250},10).wait(70).to({x:350},10).to({x:-700},20).wait(26));

	// hero
	this.hero_3 = new lib.hero_3_mc();
	this.hero_3.setTransform(580,350);

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1).to({x:1500},0).wait(53).to({x:480},20).to({x:580},10).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(25,-16,784,1016);
p.frameBounds = [rect, rect=new cjs.Rectangle(-925,-16,2654,1016), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-872.5,-16,2601.5,1016), new cjs.Rectangle(-820,-16,2549,1016), new cjs.Rectangle(-767.5,-16,2496.5,1016), new cjs.Rectangle(-715,-16,2444,1016), new cjs.Rectangle(-662.5,-16,2391.5,1016), new cjs.Rectangle(-610,-16,2339,1016), new cjs.Rectangle(-557.5,-16,2286.5,1016), new cjs.Rectangle(-505,-16,2234,1016), new cjs.Rectangle(-452.5,-16,2181.5,1016), new cjs.Rectangle(-400,-16,2129,1016), new cjs.Rectangle(-347.5,-16,2076.5,1016), new cjs.Rectangle(-295,-16,2024,1016), new cjs.Rectangle(-242.5,-16,1971.5,1016), new cjs.Rectangle(-190,-16,1919,1016), new cjs.Rectangle(-137.5,-16,1866.5,1016), new cjs.Rectangle(-85,-16,1814.1,1016), new cjs.Rectangle(-32.5,-16,1761.6,1016), new cjs.Rectangle(20,-16,1709.1,1016), new cjs.Rectangle(72.5,-16,1656.6,1016), new cjs.Rectangle(125,-16,1604,1016), new cjs.Rectangle(115,-16,1614.1,1016), new cjs.Rectangle(105,-16,1624.1,1016), new cjs.Rectangle(95,-16,1634.1,1016), new cjs.Rectangle(85,-16,1644.1,1016), new cjs.Rectangle(75,-16,1654.1,1016), new cjs.Rectangle(65,-16,1664.1,1016), new cjs.Rectangle(55,-16,1674.1,1016), new cjs.Rectangle(45,-16,1684.1,1016), new cjs.Rectangle(35,-16,1694.1,1016), new cjs.Rectangle(25,-16,1704,1016), new cjs.Rectangle(25,-16,1653,1016), new cjs.Rectangle(25,-16,1602,1016), new cjs.Rectangle(25,-16,1551,1016), new cjs.Rectangle(25,-16,1500,1016), new cjs.Rectangle(25,-16,1449,1016), new cjs.Rectangle(25,-16,1398,1016), new cjs.Rectangle(25,-16,1347,1016), new cjs.Rectangle(25,-16,1296,1016), new cjs.Rectangle(25,-16,1245,1016), new cjs.Rectangle(25,-16,1194,1016), new cjs.Rectangle(25,-16,1143,1016), new cjs.Rectangle(25,-16,1092,1016), new cjs.Rectangle(25,-16,1041,1016), new cjs.Rectangle(25,-16,990,1016), new cjs.Rectangle(25,-16,939,1016), new cjs.Rectangle(25,-16,888,1016), new cjs.Rectangle(25,-16,837,1016), new cjs.Rectangle(25,-16,786,1016), new cjs.Rectangle(25,-16,735,1016), new cjs.Rectangle(25,-16,684,1016), new cjs.Rectangle(25,-16,694,1016), new cjs.Rectangle(25,-16,704,1016), new cjs.Rectangle(25,-16,714,1016), new cjs.Rectangle(25,-16,724,1016), new cjs.Rectangle(25,-16,734,1016), new cjs.Rectangle(25,-16,744,1016), new cjs.Rectangle(25,-16,754,1016), new cjs.Rectangle(25,-16,764,1016), new cjs.Rectangle(25,-16,774,1016), rect=new cjs.Rectangle(25,-16,784,1016), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(35,-16,774.1,1016), new cjs.Rectangle(45,-16,764.1,1016), new cjs.Rectangle(55,-16,754.1,1016), new cjs.Rectangle(65,-16,744.1,1016), new cjs.Rectangle(75,-16,734.1,1016), new cjs.Rectangle(85,-16,724.1,1016), new cjs.Rectangle(95,-16,714.1,1016), new cjs.Rectangle(105,-16,704.1,1016), new cjs.Rectangle(115,-16,694.1,1016), new cjs.Rectangle(125,-16,684,1016), new cjs.Rectangle(72.5,-16,736.6,1016), new cjs.Rectangle(20,-16,789.1,1016), new cjs.Rectangle(-32.5,-16,841.6,1016), new cjs.Rectangle(-85,-16,894.1,1016), new cjs.Rectangle(-137.5,-16,946.5,1016), new cjs.Rectangle(-190,-16,999,1016), new cjs.Rectangle(-242.5,-16,1051.5,1016), new cjs.Rectangle(-295,-16,1104,1016), new cjs.Rectangle(-347.5,-16,1156.5,1016), new cjs.Rectangle(-400,-16,1209,1016), new cjs.Rectangle(-452.5,-16,1261.5,1016), new cjs.Rectangle(-505,-16,1314,1016), new cjs.Rectangle(-557.5,-16,1366.5,1016), new cjs.Rectangle(-610,-16,1419,1016), new cjs.Rectangle(-662.5,-16,1471.5,1016), new cjs.Rectangle(-715,-16,1524,1016), new cjs.Rectangle(-767.5,-16,1576.5,1016), new cjs.Rectangle(-820,-16,1629,1016), new cjs.Rectangle(-872.5,-16,1681.5,1016), rect=new cjs.Rectangle(-925,-16,1734,1016), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":99,"end":169});

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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(25).call(this.frame_54).wait(60).call(this.frame_114).wait(56));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(100,500,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(78).to({y:450},10).to({y:500},5).wait(5).to({scaleX:0.74,scaleY:0.74},5).to({scaleX:0.84,scaleY:0.84},10).to({y:460},5).to({regY:0.1,scaleX:0.53,scaleY:0.53,y:700.1},10).wait(41));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_8_mc();
	this.dressupPanel_mc.setTransform(550,350);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:1500},0).wait(48).to({x:450},20).to({x:550},10).wait(35).to({x:450},10).to({x:1500},20).wait(26));

	// hero
	this.hero_3 = new lib.hero_3_mc();
	this.hero_3.setTransform(147.4,321.2,1,1,0,0,0,-2.6,-28.8);

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1).to({x:1497.4},0).wait(23).to({x:47.4},20).to({x:147.4},10).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84,-16,859.1,1016);
p.frameBounds = [rect, rect=new cjs.Rectangle(20,-16,1709,1016), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(20,-16,1705,1016), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-39,-16,1764.1,1016), new cjs.Rectangle(-111.5,-16,1836.6,1016), new cjs.Rectangle(-184,-16,1909.1,1016), new cjs.Rectangle(-174,-16,1899.1,1016), new cjs.Rectangle(-164,-16,1889.1,1016), new cjs.Rectangle(-154,-16,1879.1,1016), new cjs.Rectangle(-144,-16,1869.1,1016), new cjs.Rectangle(-134,-16,1859.1,1016), new cjs.Rectangle(-124,-16,1796.6,1016), new cjs.Rectangle(-114,-16,1734.1,1016), new cjs.Rectangle(-104,-16,1671.6,1016), new cjs.Rectangle(-94,-16,1609.1,1016), new cjs.Rectangle(-84,-16,1546.6,1016), new cjs.Rectangle(-84,-16,1494.1,1016), new cjs.Rectangle(-84,-16,1441.6,1016), new cjs.Rectangle(-84,-16,1389.1,1016), new cjs.Rectangle(-84,-16,1336.6,1016), new cjs.Rectangle(-84,-16,1284.1,1016), new cjs.Rectangle(-84,-16,1231.6,1016), new cjs.Rectangle(-84,-16,1179.1,1016), new cjs.Rectangle(-84,-16,1126.6,1016), new cjs.Rectangle(-84,-16,1074.1,1016), new cjs.Rectangle(-84,-16,1021.6,1016), new cjs.Rectangle(-84,-16,969.1,1016), new cjs.Rectangle(-84,-16,916.6,1016), new cjs.Rectangle(-84,-16,864.1,1016), new cjs.Rectangle(-84,-16,811.6,1016), new cjs.Rectangle(-84,-16,759.1,1016), new cjs.Rectangle(-84,-16,769.1,1016), new cjs.Rectangle(-84,-16,779.1,1016), new cjs.Rectangle(-84,-16,789.1,1016), new cjs.Rectangle(-84,-16,799.1,1016), new cjs.Rectangle(-84,-16,809.1,1016), new cjs.Rectangle(-84,-16,819.1,1016), new cjs.Rectangle(-84,-16,829.1,1016), new cjs.Rectangle(-84,-16,839.1,1016), new cjs.Rectangle(-84,-16,849.1,1016), rect=new cjs.Rectangle(-84,-16,859.1,1016), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-84,-16,849.1,1016), new cjs.Rectangle(-84,-16,839.1,1016), new cjs.Rectangle(-84,-16,829.1,1016), new cjs.Rectangle(-84,-16,819.1,1016), new cjs.Rectangle(-84,-16,809.1,1016), new cjs.Rectangle(-84,-16,799.1,1016), new cjs.Rectangle(-84,-16,789.1,1016), new cjs.Rectangle(-84,-16,779.1,1016), new cjs.Rectangle(-84,-16,769.1,1016), new cjs.Rectangle(-84,-16,759.1,1016), new cjs.Rectangle(-84,-16,811.6,1016), new cjs.Rectangle(-84,-16,864.1,1016), new cjs.Rectangle(-84,-16,916.6,1016), new cjs.Rectangle(-84,-16,969.1,1016), new cjs.Rectangle(-84,-16,1021.6,1016), new cjs.Rectangle(-84,-16,1074.1,1016), new cjs.Rectangle(-84,-16,1126.6,1016), new cjs.Rectangle(-84,-16,1179.1,1016), new cjs.Rectangle(-84,-16,1231.6,1016), new cjs.Rectangle(-84,-16,1284.1,1016), new cjs.Rectangle(-84,-16,1336.6,1016), new cjs.Rectangle(-84,-16,1389.1,1016), new cjs.Rectangle(-84,-16,1441.6,1016), new cjs.Rectangle(-84,-16,1494.1,1016), new cjs.Rectangle(-84,-16,1546.6,1016), new cjs.Rectangle(-84,-16,1599.1,1016), new cjs.Rectangle(-84,-16,1651.6,1016), new cjs.Rectangle(-84,-16,1704.1,1016), new cjs.Rectangle(-84,-16,1756.6,1016), rect=new cjs.Rectangle(-84,-16,1809.1,1016), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":99,"end":259});

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
	this.frame_149 = function() {
		try
		{
			app.addSoundFunc("magic_2_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(25).call(this.frame_49).wait(65).call(this.frame_114).wait(35).call(this.frame_149).wait(111));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(250,510,0.737,0.737);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(73).to({y:460},10).to({y:510},10).wait(5).to({regX:0.1,regY:0.1,scaleX:0.63,scaleY:0.63,x:250.1,y:510.1},5).to({regX:0,regY:0,scaleX:0.74,scaleY:0.74,x:250,y:510},10).to({y:460},5).to({y:700},15).wait(126));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_7_mc();
	this.dressupPanel_mc.setTransform(250,360);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:1000},0).wait(23).to({y:300},15).to({y:360},10).wait(65).to({y:300},5).to({y:1000},15).wait(126));

	// hero
	this.hero_3 = new lib.hero_3_mc();
	this.hero_3.setTransform(577.4,351.2,1,1,0,0,0,-2.6,-28.8);

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1).to({x:1497.4},0).wait(48).to({x:477.4},15).to({x:577.4},10).wait(60).to({x:397.4},20).wait(106));

	// decor
	this.instance = new lib.decor_shadow_1_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(154).to({_off:false},0).wait(106));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(134).to({_off:false},0).to({alpha:1},20).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(40,14,769,996);
p.frameBounds = [rect, rect=new cjs.Rectangle(40,14,1689,1636), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(40,14,1689,1589.4), new cjs.Rectangle(40,14,1689,1542.7), new cjs.Rectangle(40,14,1689,1496), new cjs.Rectangle(40,14,1689,1449.4), new cjs.Rectangle(40,14,1689,1402.7), new cjs.Rectangle(40,14,1689,1356), new cjs.Rectangle(40,14,1689,1309.4), new cjs.Rectangle(40,14,1689,1262.7), new cjs.Rectangle(40,14,1689,1216), new cjs.Rectangle(40,14,1689,1169.4), new cjs.Rectangle(40,14,1689,1122.7), new cjs.Rectangle(40,14,1689,1076), new cjs.Rectangle(40,14,1689,1029.4), new cjs.Rectangle(40,14,1689,982.7), new cjs.Rectangle(40,-30,1689,980), new cjs.Rectangle(40,-24,1689,980), new cjs.Rectangle(40,-18,1689,980), new cjs.Rectangle(40,-12,1689,980), new cjs.Rectangle(40,-6,1689,980), new cjs.Rectangle(40,0,1689,980), new cjs.Rectangle(40,6,1689,980), new cjs.Rectangle(40,12,1689,980), new cjs.Rectangle(40,14,1689,984), new cjs.Rectangle(40,14,1689,990), new cjs.Rectangle(40,14,1689,996), new cjs.Rectangle(40,14,1621,996), new cjs.Rectangle(40,14,1553,996), new cjs.Rectangle(40,14,1485,996), new cjs.Rectangle(40,14,1417,996), new cjs.Rectangle(40,14,1349,996), new cjs.Rectangle(40,14,1281,996), new cjs.Rectangle(40,14,1213,996), new cjs.Rectangle(40,14,1145,996), new cjs.Rectangle(40,14,1077,996), new cjs.Rectangle(40,14,1009,996), new cjs.Rectangle(40,14,941,996), new cjs.Rectangle(40,14,873,996), new cjs.Rectangle(40,14,805,996), new cjs.Rectangle(40,14,737,996), new cjs.Rectangle(40,14,669,996), new cjs.Rectangle(40,14,679,996), new cjs.Rectangle(40,14,689,996), new cjs.Rectangle(40,14,699,996), new cjs.Rectangle(40,14,709,996), new cjs.Rectangle(40,14,719,996), new cjs.Rectangle(40,14,729,996), new cjs.Rectangle(40,14,739,996), new cjs.Rectangle(40,14,749,996), new cjs.Rectangle(40,14,759,996), rect=new cjs.Rectangle(40,14,769,996), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(40,14,769,984), new cjs.Rectangle(40,6,769,980), new cjs.Rectangle(40,-6,769,980), new cjs.Rectangle(40,-18,769,980), new cjs.Rectangle(40,-30,769,980), new cjs.Rectangle(40,14,769,982.7), new cjs.Rectangle(40,14,769,1029.4), new cjs.Rectangle(40,14,769,1076), new cjs.Rectangle(40,14,769,1122.7), new cjs.Rectangle(40,14,769,1169.4), new cjs.Rectangle(40,14,769,1216), new cjs.Rectangle(40,14,769,1262.7), new cjs.Rectangle(40,14,769,1309.4), new cjs.Rectangle(40,14,769,1356), new cjs.Rectangle(40,14,769,1402.7), new cjs.Rectangle(40,14,769,1449.4), new cjs.Rectangle(40,14,769,1496), new cjs.Rectangle(40,14,769,1542.7), new cjs.Rectangle(40,14,769,1589.4), rect=new cjs.Rectangle(-410,-10,1620,1660), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":109,"end":169});

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
	this.frame_59 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(30).call(this.frame_59).wait(65).call(this.frame_124).wait(46));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(250.1,540.1,0.632,0.632,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700.1},0).wait(83).to({y:490.1},10).to({y:540.1},10).wait(5).to({regY:0.3,scaleX:0.53,scaleY:0.53,y:540.2},5).to({regY:0.1,scaleX:0.63,scaleY:0.63,y:540.1},10).to({y:500.1},5).to({y:700.1},10).wait(31));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_6_mc();
	this.dressupPanel_mc.setTransform(250,350);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-700},0).wait(23).to({x:350},20).to({x:250},10).wait(70).to({x:350},10).to({x:-700},20).wait(16));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(577.4,321.2,1,1,0,0,0,-2.6,-28.8);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:1497.4},0).wait(53).to({x:477.4},20).to({x:577.4},10).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(25,-16,784,1016);
p.frameBounds = [rect, rect=new cjs.Rectangle(-925,-16,2654,1016), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-872.5,-16,2601.5,1016), new cjs.Rectangle(-820,-16,2549,1016), new cjs.Rectangle(-767.5,-16,2496.5,1016), new cjs.Rectangle(-715,-16,2444,1016), new cjs.Rectangle(-662.5,-16,2391.5,1016), new cjs.Rectangle(-610,-16,2339,1016), new cjs.Rectangle(-557.5,-16,2286.5,1016), new cjs.Rectangle(-505,-16,2234,1016), new cjs.Rectangle(-452.5,-16,2181.5,1016), new cjs.Rectangle(-400,-16,2129,1016), new cjs.Rectangle(-347.5,-16,2076.5,1016), new cjs.Rectangle(-295,-16,2024,1016), new cjs.Rectangle(-242.5,-16,1971.5,1016), new cjs.Rectangle(-190,-16,1919,1016), new cjs.Rectangle(-137.5,-16,1866.5,1016), new cjs.Rectangle(-85,-16,1814.1,1016), new cjs.Rectangle(-32.5,-16,1761.6,1016), new cjs.Rectangle(20,-16,1709.1,1016), new cjs.Rectangle(72.5,-16,1656.6,1016), new cjs.Rectangle(125,-16,1604,1016), new cjs.Rectangle(115,-16,1614.1,1016), new cjs.Rectangle(105,-16,1624.1,1016), new cjs.Rectangle(95,-16,1634.1,1016), new cjs.Rectangle(85,-16,1644.1,1016), new cjs.Rectangle(75,-16,1654.1,1016), new cjs.Rectangle(65,-16,1664.1,1016), new cjs.Rectangle(55,-16,1674.1,1016), new cjs.Rectangle(45,-16,1684.1,1016), new cjs.Rectangle(35,-16,1694.1,1016), new cjs.Rectangle(25,-16,1704,1016), new cjs.Rectangle(25,-16,1653,1016), new cjs.Rectangle(25,-16,1602,1016), new cjs.Rectangle(25,-16,1551,1016), new cjs.Rectangle(25,-16,1500,1016), new cjs.Rectangle(25,-16,1449,1016), new cjs.Rectangle(25,-16,1398,1016), new cjs.Rectangle(25,-16,1347,1016), new cjs.Rectangle(25,-16,1296,1016), new cjs.Rectangle(25,-16,1245,1016), new cjs.Rectangle(25,-16,1194,1016), new cjs.Rectangle(25,-16,1143,1016), new cjs.Rectangle(25,-16,1092,1016), new cjs.Rectangle(25,-16,1041,1016), new cjs.Rectangle(25,-16,990,1016), new cjs.Rectangle(25,-16,939,1016), new cjs.Rectangle(25,-16,888,1016), new cjs.Rectangle(25,-16,837,1016), new cjs.Rectangle(25,-16,786,1016), new cjs.Rectangle(25,-16,735,1016), new cjs.Rectangle(25,-16,684,1016), new cjs.Rectangle(25,-16,694,1016), new cjs.Rectangle(25,-16,704,1016), new cjs.Rectangle(25,-16,714,1016), new cjs.Rectangle(25,-16,724,1016), new cjs.Rectangle(25,-16,734,1016), new cjs.Rectangle(25,-16,744,1016), new cjs.Rectangle(25,-16,754,1016), new cjs.Rectangle(25,-16,764,1016), new cjs.Rectangle(25,-16,774,1016), rect=new cjs.Rectangle(25,-16,784,1016), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(35,-16,774.1,1016), new cjs.Rectangle(45,-16,764.1,1016), new cjs.Rectangle(55,-16,754.1,1016), new cjs.Rectangle(65,-16,744.1,1016), new cjs.Rectangle(75,-16,734.1,1016), new cjs.Rectangle(85,-16,724.1,1016), new cjs.Rectangle(95,-16,714.1,1016), new cjs.Rectangle(105,-16,704.1,1016), new cjs.Rectangle(115,-16,694.1,1016), new cjs.Rectangle(125,-16,684,1016), new cjs.Rectangle(72.5,-16,736.6,1016), new cjs.Rectangle(20,-16,789.1,1016), new cjs.Rectangle(-32.5,-16,841.6,1016), new cjs.Rectangle(-85,-16,894.1,1016), new cjs.Rectangle(-137.5,-16,946.5,1016), new cjs.Rectangle(-190,-16,999,1016), new cjs.Rectangle(-242.5,-16,1051.5,1016), new cjs.Rectangle(-295,-16,1104,1016), new cjs.Rectangle(-347.5,-16,1156.5,1016), new cjs.Rectangle(-400,-16,1209,1016), new cjs.Rectangle(-452.5,-16,1261.5,1016), new cjs.Rectangle(-505,-16,1314,1016), new cjs.Rectangle(-557.5,-16,1366.5,1016), new cjs.Rectangle(-610,-16,1419,1016), new cjs.Rectangle(-662.5,-16,1471.5,1016), new cjs.Rectangle(-715,-16,1524,1016), new cjs.Rectangle(-767.5,-16,1576.5,1016), new cjs.Rectangle(-820,-16,1629,1016), new cjs.Rectangle(-872.5,-16,1681.5,1016), rect=new cjs.Rectangle(-925,-16,1734,1016), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":99,"end":159});

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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(25).call(this.frame_54).wait(60).call(this.frame_114).wait(46));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(100,500,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(78).to({y:450},10).to({y:500},5).wait(5).to({scaleX:0.74,scaleY:0.74},5).to({scaleX:0.84,scaleY:0.84},10).to({y:460},5).to({regY:0.1,scaleX:0.53,scaleY:0.53,y:700.1},10).wait(31));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_5_mc();
	this.dressupPanel_mc.setTransform(550,350);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:1500},0).wait(48).to({x:450},20).to({x:550},10).wait(35).to({x:450},10).to({x:1500},20).wait(16));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(147.4,321.2,1,1,0,0,0,-2.6,-28.8);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:1497.4},0).wait(23).to({x:47.4},20).to({x:147.4},10).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84,-16,859.1,1016);
p.frameBounds = [rect, rect=new cjs.Rectangle(20,-16,1709,1016), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(20,-16,1705,1016), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-39,-16,1764.1,1016), new cjs.Rectangle(-111.5,-16,1836.6,1016), new cjs.Rectangle(-184,-16,1909.1,1016), new cjs.Rectangle(-174,-16,1899.1,1016), new cjs.Rectangle(-164,-16,1889.1,1016), new cjs.Rectangle(-154,-16,1879.1,1016), new cjs.Rectangle(-144,-16,1869.1,1016), new cjs.Rectangle(-134,-16,1859.1,1016), new cjs.Rectangle(-124,-16,1796.6,1016), new cjs.Rectangle(-114,-16,1734.1,1016), new cjs.Rectangle(-104,-16,1671.6,1016), new cjs.Rectangle(-94,-16,1609.1,1016), new cjs.Rectangle(-84,-16,1546.6,1016), new cjs.Rectangle(-84,-16,1494.1,1016), new cjs.Rectangle(-84,-16,1441.6,1016), new cjs.Rectangle(-84,-16,1389.1,1016), new cjs.Rectangle(-84,-16,1336.6,1016), new cjs.Rectangle(-84,-16,1284.1,1016), new cjs.Rectangle(-84,-16,1231.6,1016), new cjs.Rectangle(-84,-16,1179.1,1016), new cjs.Rectangle(-84,-16,1126.6,1016), new cjs.Rectangle(-84,-16,1074.1,1016), new cjs.Rectangle(-84,-16,1021.6,1016), new cjs.Rectangle(-84,-16,969.1,1016), new cjs.Rectangle(-84,-16,916.6,1016), new cjs.Rectangle(-84,-16,864.1,1016), new cjs.Rectangle(-84,-16,811.6,1016), new cjs.Rectangle(-84,-16,759.1,1016), new cjs.Rectangle(-84,-16,769.1,1016), new cjs.Rectangle(-84,-16,779.1,1016), new cjs.Rectangle(-84,-16,789.1,1016), new cjs.Rectangle(-84,-16,799.1,1016), new cjs.Rectangle(-84,-16,809.1,1016), new cjs.Rectangle(-84,-16,819.1,1016), new cjs.Rectangle(-84,-16,829.1,1016), new cjs.Rectangle(-84,-16,839.1,1016), new cjs.Rectangle(-84,-16,849.1,1016), rect=new cjs.Rectangle(-84,-16,859.1,1016), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-84,-16,849.1,1016), new cjs.Rectangle(-84,-16,839.1,1016), new cjs.Rectangle(-84,-16,829.1,1016), new cjs.Rectangle(-84,-16,819.1,1016), new cjs.Rectangle(-84,-16,809.1,1016), new cjs.Rectangle(-84,-16,799.1,1016), new cjs.Rectangle(-84,-16,789.1,1016), new cjs.Rectangle(-84,-16,779.1,1016), new cjs.Rectangle(-84,-16,769.1,1016), new cjs.Rectangle(-84,-16,759.1,1016), new cjs.Rectangle(-84,-16,811.6,1016), new cjs.Rectangle(-84,-16,864.1,1016), new cjs.Rectangle(-84,-16,916.6,1016), new cjs.Rectangle(-84,-16,969.1,1016), new cjs.Rectangle(-84,-16,1021.6,1016), new cjs.Rectangle(-84,-16,1074.1,1016), new cjs.Rectangle(-84,-16,1126.6,1016), new cjs.Rectangle(-84,-16,1179.1,1016), new cjs.Rectangle(-84,-16,1231.6,1016), new cjs.Rectangle(-84,-16,1284.1,1016), new cjs.Rectangle(-84,-16,1336.6,1016), new cjs.Rectangle(-84,-16,1389.1,1016), new cjs.Rectangle(-84,-16,1441.6,1016), new cjs.Rectangle(-84,-16,1494.1,1016), new cjs.Rectangle(-84,-16,1546.6,1016), new cjs.Rectangle(-84,-16,1599.1,1016), new cjs.Rectangle(-84,-16,1651.6,1016), new cjs.Rectangle(-84,-16,1704.1,1016), new cjs.Rectangle(-84,-16,1756.6,1016), rect=new cjs.Rectangle(-84,-16,1809.1,1016), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":99,"end":259});

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
	this.frame_149 = function() {
		try
		{
			app.addSoundFunc("magic_2_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(25).call(this.frame_49).wait(65).call(this.frame_114).wait(35).call(this.frame_149).wait(111));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(250,510,0.737,0.737);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(73).to({y:460},10).to({y:510},10).wait(5).to({regX:0.1,regY:0.1,scaleX:0.63,scaleY:0.63,x:250.1,y:510.1},5).to({regX:0,regY:0,scaleX:0.74,scaleY:0.74,x:250,y:510},10).to({y:460},5).to({y:700},15).wait(126));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_4_mc();
	this.dressupPanel_mc.setTransform(250,360);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:1000},0).wait(23).to({y:300},15).to({y:360},10).wait(65).to({y:300},5).to({y:1000},15).wait(126));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(577.4,351.2,1,1,0,0,0,-2.6,-28.8);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:1497.4},0).wait(48).to({x:477.4},15).to({x:577.4},10).wait(60).to({x:397.4},20).wait(106));

	// decor
	this.instance = new lib.decor_shadow_1_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(154).to({_off:false},0).wait(106));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(134).to({_off:false},0).to({alpha:1},20).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(40,14,769,996);
p.frameBounds = [rect, rect=new cjs.Rectangle(40,14,1689,1636), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(40,14,1689,1589.4), new cjs.Rectangle(40,14,1689,1542.7), new cjs.Rectangle(40,14,1689,1496), new cjs.Rectangle(40,14,1689,1449.4), new cjs.Rectangle(40,14,1689,1402.7), new cjs.Rectangle(40,14,1689,1356), new cjs.Rectangle(40,14,1689,1309.4), new cjs.Rectangle(40,14,1689,1262.7), new cjs.Rectangle(40,14,1689,1216), new cjs.Rectangle(40,14,1689,1169.4), new cjs.Rectangle(40,14,1689,1122.7), new cjs.Rectangle(40,14,1689,1076), new cjs.Rectangle(40,14,1689,1029.4), new cjs.Rectangle(40,14,1689,982.7), new cjs.Rectangle(40,-30,1689,980), new cjs.Rectangle(40,-24,1689,980), new cjs.Rectangle(40,-18,1689,980), new cjs.Rectangle(40,-12,1689,980), new cjs.Rectangle(40,-6,1689,980), new cjs.Rectangle(40,0,1689,980), new cjs.Rectangle(40,6,1689,980), new cjs.Rectangle(40,12,1689,980), new cjs.Rectangle(40,14,1689,984), new cjs.Rectangle(40,14,1689,990), new cjs.Rectangle(40,14,1689,996), new cjs.Rectangle(40,14,1621,996), new cjs.Rectangle(40,14,1553,996), new cjs.Rectangle(40,14,1485,996), new cjs.Rectangle(40,14,1417,996), new cjs.Rectangle(40,14,1349,996), new cjs.Rectangle(40,14,1281,996), new cjs.Rectangle(40,14,1213,996), new cjs.Rectangle(40,14,1145,996), new cjs.Rectangle(40,14,1077,996), new cjs.Rectangle(40,14,1009,996), new cjs.Rectangle(40,14,941,996), new cjs.Rectangle(40,14,873,996), new cjs.Rectangle(40,14,805,996), new cjs.Rectangle(40,14,737,996), new cjs.Rectangle(40,14,669,996), new cjs.Rectangle(40,14,679,996), new cjs.Rectangle(40,14,689,996), new cjs.Rectangle(40,14,699,996), new cjs.Rectangle(40,14,709,996), new cjs.Rectangle(40,14,719,996), new cjs.Rectangle(40,14,729,996), new cjs.Rectangle(40,14,739,996), new cjs.Rectangle(40,14,749,996), new cjs.Rectangle(40,14,759,996), rect=new cjs.Rectangle(40,14,769,996), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(40,14,769,984), new cjs.Rectangle(40,6,769,980), new cjs.Rectangle(40,-6,769,980), new cjs.Rectangle(40,-18,769,980), new cjs.Rectangle(40,-30,769,980), new cjs.Rectangle(40,14,769,982.7), new cjs.Rectangle(40,14,769,1029.4), new cjs.Rectangle(40,14,769,1076), new cjs.Rectangle(40,14,769,1122.7), new cjs.Rectangle(40,14,769,1169.4), new cjs.Rectangle(40,14,769,1216), new cjs.Rectangle(40,14,769,1262.7), new cjs.Rectangle(40,14,769,1309.4), new cjs.Rectangle(40,14,769,1356), new cjs.Rectangle(40,14,769,1402.7), new cjs.Rectangle(40,14,769,1449.4), new cjs.Rectangle(40,14,769,1496), new cjs.Rectangle(40,14,769,1542.7), new cjs.Rectangle(40,14,769,1589.4), rect=new cjs.Rectangle(-410,-10,1620,1660), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":109,"end":189});

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
	this.frame_59 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(30).call(this.frame_59).wait(65).call(this.frame_124).wait(66));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(250.1,540.1,0.632,0.632,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700.1},0).wait(83).to({y:490.1},10).to({y:540.1},10).wait(5).to({regY:0.3,scaleX:0.53,scaleY:0.53,y:540.2},5).to({regY:0.1,scaleX:0.63,scaleY:0.63,y:540.1},10).to({y:500.1},5).to({y:700.1},10).wait(51));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_3_mc();
	this.dressupPanel_mc.setTransform(250,350);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-700},0).wait(23).to({x:350},20).to({x:250},10).wait(70).to({x:350},10).to({x:-700},20).wait(36));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(577.4,321.2,1,1,0,0,0,-2.6,-28.8);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:1497.4},0).wait(53).to({x:477.4},20).to({x:577.4},10).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(25,-16,784,1016);
p.frameBounds = [rect, rect=new cjs.Rectangle(-925,-16,2654,1016), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-872.5,-16,2601.5,1016), new cjs.Rectangle(-820,-16,2549,1016), new cjs.Rectangle(-767.5,-16,2496.5,1016), new cjs.Rectangle(-715,-16,2444,1016), new cjs.Rectangle(-662.5,-16,2391.5,1016), new cjs.Rectangle(-610,-16,2339,1016), new cjs.Rectangle(-557.5,-16,2286.5,1016), new cjs.Rectangle(-505,-16,2234,1016), new cjs.Rectangle(-452.5,-16,2181.5,1016), new cjs.Rectangle(-400,-16,2129,1016), new cjs.Rectangle(-347.5,-16,2076.5,1016), new cjs.Rectangle(-295,-16,2024,1016), new cjs.Rectangle(-242.5,-16,1971.5,1016), new cjs.Rectangle(-190,-16,1919,1016), new cjs.Rectangle(-137.5,-16,1866.5,1016), new cjs.Rectangle(-85,-16,1814.1,1016), new cjs.Rectangle(-32.5,-16,1761.6,1016), new cjs.Rectangle(20,-16,1709.1,1016), new cjs.Rectangle(72.5,-16,1656.6,1016), new cjs.Rectangle(125,-16,1604,1016), new cjs.Rectangle(115,-16,1614.1,1016), new cjs.Rectangle(105,-16,1624.1,1016), new cjs.Rectangle(95,-16,1634.1,1016), new cjs.Rectangle(85,-16,1644.1,1016), new cjs.Rectangle(75,-16,1654.1,1016), new cjs.Rectangle(65,-16,1664.1,1016), new cjs.Rectangle(55,-16,1674.1,1016), new cjs.Rectangle(45,-16,1684.1,1016), new cjs.Rectangle(35,-16,1694.1,1016), new cjs.Rectangle(25,-16,1704,1016), new cjs.Rectangle(25,-16,1653,1016), new cjs.Rectangle(25,-16,1602,1016), new cjs.Rectangle(25,-16,1551,1016), new cjs.Rectangle(25,-16,1500,1016), new cjs.Rectangle(25,-16,1449,1016), new cjs.Rectangle(25,-16,1398,1016), new cjs.Rectangle(25,-16,1347,1016), new cjs.Rectangle(25,-16,1296,1016), new cjs.Rectangle(25,-16,1245,1016), new cjs.Rectangle(25,-16,1194,1016), new cjs.Rectangle(25,-16,1143,1016), new cjs.Rectangle(25,-16,1092,1016), new cjs.Rectangle(25,-16,1041,1016), new cjs.Rectangle(25,-16,990,1016), new cjs.Rectangle(25,-16,939,1016), new cjs.Rectangle(25,-16,888,1016), new cjs.Rectangle(25,-16,837,1016), new cjs.Rectangle(25,-16,786,1016), new cjs.Rectangle(25,-16,735,1016), new cjs.Rectangle(25,-16,684,1016), new cjs.Rectangle(25,-16,694,1016), new cjs.Rectangle(25,-16,704,1016), new cjs.Rectangle(25,-16,714,1016), new cjs.Rectangle(25,-16,724,1016), new cjs.Rectangle(25,-16,734,1016), new cjs.Rectangle(25,-16,744,1016), new cjs.Rectangle(25,-16,754,1016), new cjs.Rectangle(25,-16,764,1016), new cjs.Rectangle(25,-16,774,1016), rect=new cjs.Rectangle(25,-16,784,1016), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(35,-16,774.1,1016), new cjs.Rectangle(45,-16,764.1,1016), new cjs.Rectangle(55,-16,754.1,1016), new cjs.Rectangle(65,-16,744.1,1016), new cjs.Rectangle(75,-16,734.1,1016), new cjs.Rectangle(85,-16,724.1,1016), new cjs.Rectangle(95,-16,714.1,1016), new cjs.Rectangle(105,-16,704.1,1016), new cjs.Rectangle(115,-16,694.1,1016), new cjs.Rectangle(125,-16,684,1016), new cjs.Rectangle(72.5,-16,736.6,1016), new cjs.Rectangle(20,-16,789.1,1016), new cjs.Rectangle(-32.5,-16,841.6,1016), new cjs.Rectangle(-85,-16,894.1,1016), new cjs.Rectangle(-137.5,-16,946.5,1016), new cjs.Rectangle(-190,-16,999,1016), new cjs.Rectangle(-242.5,-16,1051.5,1016), new cjs.Rectangle(-295,-16,1104,1016), new cjs.Rectangle(-347.5,-16,1156.5,1016), new cjs.Rectangle(-400,-16,1209,1016), new cjs.Rectangle(-452.5,-16,1261.5,1016), new cjs.Rectangle(-505,-16,1314,1016), new cjs.Rectangle(-557.5,-16,1366.5,1016), new cjs.Rectangle(-610,-16,1419,1016), new cjs.Rectangle(-662.5,-16,1471.5,1016), new cjs.Rectangle(-715,-16,1524,1016), new cjs.Rectangle(-767.5,-16,1576.5,1016), new cjs.Rectangle(-820,-16,1629,1016), new cjs.Rectangle(-872.5,-16,1681.5,1016), rect=new cjs.Rectangle(-925,-16,1734,1016), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":99,"end":179});

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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(25).call(this.frame_54).wait(60).call(this.frame_114).wait(66));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(100,500,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(78).to({y:450},10).to({y:500},5).wait(5).to({scaleX:0.74,scaleY:0.74},5).to({scaleX:0.84,scaleY:0.84},10).to({y:460},5).to({regY:0.1,scaleX:0.53,scaleY:0.53,y:700.1},10).wait(51));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_2_mc();
	this.dressupPanel_mc.setTransform(550,350);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:1500},0).wait(48).to({x:450},20).to({x:550},10).wait(35).to({x:450},10).to({x:1500},20).wait(36));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(147.4,321.2,1,1,0,0,0,-2.6,-28.8);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:1497.4},0).wait(23).to({x:47.4},20).to({x:147.4},10).wait(126));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84,-16,859.1,1016);
p.frameBounds = [rect, rect=new cjs.Rectangle(20,-16,1709,1016), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(20,-16,1705,1016), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-39,-16,1764.1,1016), new cjs.Rectangle(-111.5,-16,1836.6,1016), new cjs.Rectangle(-184,-16,1909.1,1016), new cjs.Rectangle(-174,-16,1899.1,1016), new cjs.Rectangle(-164,-16,1889.1,1016), new cjs.Rectangle(-154,-16,1879.1,1016), new cjs.Rectangle(-144,-16,1869.1,1016), new cjs.Rectangle(-134,-16,1859.1,1016), new cjs.Rectangle(-124,-16,1796.6,1016), new cjs.Rectangle(-114,-16,1734.1,1016), new cjs.Rectangle(-104,-16,1671.6,1016), new cjs.Rectangle(-94,-16,1609.1,1016), new cjs.Rectangle(-84,-16,1546.6,1016), new cjs.Rectangle(-84,-16,1494.1,1016), new cjs.Rectangle(-84,-16,1441.6,1016), new cjs.Rectangle(-84,-16,1389.1,1016), new cjs.Rectangle(-84,-16,1336.6,1016), new cjs.Rectangle(-84,-16,1284.1,1016), new cjs.Rectangle(-84,-16,1231.6,1016), new cjs.Rectangle(-84,-16,1179.1,1016), new cjs.Rectangle(-84,-16,1126.6,1016), new cjs.Rectangle(-84,-16,1074.1,1016), new cjs.Rectangle(-84,-16,1021.6,1016), new cjs.Rectangle(-84,-16,969.1,1016), new cjs.Rectangle(-84,-16,916.6,1016), new cjs.Rectangle(-84,-16,864.1,1016), new cjs.Rectangle(-84,-16,811.6,1016), new cjs.Rectangle(-84,-16,759.1,1016), new cjs.Rectangle(-84,-16,769.1,1016), new cjs.Rectangle(-84,-16,779.1,1016), new cjs.Rectangle(-84,-16,789.1,1016), new cjs.Rectangle(-84,-16,799.1,1016), new cjs.Rectangle(-84,-16,809.1,1016), new cjs.Rectangle(-84,-16,819.1,1016), new cjs.Rectangle(-84,-16,829.1,1016), new cjs.Rectangle(-84,-16,839.1,1016), new cjs.Rectangle(-84,-16,849.1,1016), rect=new cjs.Rectangle(-84,-16,859.1,1016), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-84,-16,849.1,1016), new cjs.Rectangle(-84,-16,839.1,1016), new cjs.Rectangle(-84,-16,829.1,1016), new cjs.Rectangle(-84,-16,819.1,1016), new cjs.Rectangle(-84,-16,809.1,1016), new cjs.Rectangle(-84,-16,799.1,1016), new cjs.Rectangle(-84,-16,789.1,1016), new cjs.Rectangle(-84,-16,779.1,1016), new cjs.Rectangle(-84,-16,769.1,1016), new cjs.Rectangle(-84,-16,759.1,1016), new cjs.Rectangle(-84,-16,811.6,1016), new cjs.Rectangle(-84,-16,864.1,1016), new cjs.Rectangle(-84,-16,916.6,1016), new cjs.Rectangle(-84,-16,969.1,1016), new cjs.Rectangle(-84,-16,1021.6,1016), new cjs.Rectangle(-84,-16,1074.1,1016), new cjs.Rectangle(-84,-16,1126.6,1016), new cjs.Rectangle(-84,-16,1179.1,1016), new cjs.Rectangle(-84,-16,1231.6,1016), new cjs.Rectangle(-84,-16,1284.1,1016), new cjs.Rectangle(-84,-16,1336.6,1016), new cjs.Rectangle(-84,-16,1389.1,1016), new cjs.Rectangle(-84,-16,1441.6,1016), new cjs.Rectangle(-84,-16,1494.1,1016), new cjs.Rectangle(-84,-16,1546.6,1016), new cjs.Rectangle(-84,-16,1599.1,1016), new cjs.Rectangle(-84,-16,1651.6,1016), new cjs.Rectangle(-84,-16,1704.1,1016), new cjs.Rectangle(-84,-16,1756.6,1016), rect=new cjs.Rectangle(-84,-16,1809.1,1016), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":99,"end":259});

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
	this.frame_149 = function() {
		try
		{
			app.addSoundFunc("magic_2_sound", 0.2);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(25).call(this.frame_49).wait(65).call(this.frame_114).wait(35).call(this.frame_149).wait(111));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(250,510,0.737,0.737);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(73).to({y:460},10).to({y:510},10).wait(5).to({regX:0.1,regY:0.1,scaleX:0.63,scaleY:0.63,x:250.1,y:510.1},5).to({regX:0,regY:0,scaleX:0.74,scaleY:0.74,x:250,y:510},10).to({y:460},5).to({y:700},15).wait(126));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_1_mc();
	this.dressupPanel_mc.setTransform(250,360);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:1000},0).wait(23).to({y:300},15).to({y:360},10).wait(65).to({y:300},5).to({y:1000},15).wait(126));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(577.4,351.2,1,1,0,0,0,-2.6,-28.8);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:1497.4},0).wait(48).to({x:477.4},15).to({x:577.4},10).wait(60).to({x:397.4},20).wait(106));

	// decor
	this.instance = new lib.decor_shadow_1_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(154).to({_off:false},0).wait(106));

	// shadow
	this.instance_1 = new lib.shadow_dressup_mc();
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(134).to({_off:false},0).to({alpha:1},20).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(40,14,769,996);
p.frameBounds = [rect, rect=new cjs.Rectangle(40,14,1689,1636), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(40,14,1689,1589.4), new cjs.Rectangle(40,14,1689,1542.7), new cjs.Rectangle(40,14,1689,1496), new cjs.Rectangle(40,14,1689,1449.4), new cjs.Rectangle(40,14,1689,1402.7), new cjs.Rectangle(40,14,1689,1356), new cjs.Rectangle(40,14,1689,1309.4), new cjs.Rectangle(40,14,1689,1262.7), new cjs.Rectangle(40,14,1689,1216), new cjs.Rectangle(40,14,1689,1169.4), new cjs.Rectangle(40,14,1689,1122.7), new cjs.Rectangle(40,14,1689,1076), new cjs.Rectangle(40,14,1689,1029.4), new cjs.Rectangle(40,14,1689,982.7), new cjs.Rectangle(40,-30,1689,980), new cjs.Rectangle(40,-24,1689,980), new cjs.Rectangle(40,-18,1689,980), new cjs.Rectangle(40,-12,1689,980), new cjs.Rectangle(40,-6,1689,980), new cjs.Rectangle(40,0,1689,980), new cjs.Rectangle(40,6,1689,980), new cjs.Rectangle(40,12,1689,980), new cjs.Rectangle(40,14,1689,984), new cjs.Rectangle(40,14,1689,990), new cjs.Rectangle(40,14,1689,996), new cjs.Rectangle(40,14,1621,996), new cjs.Rectangle(40,14,1553,996), new cjs.Rectangle(40,14,1485,996), new cjs.Rectangle(40,14,1417,996), new cjs.Rectangle(40,14,1349,996), new cjs.Rectangle(40,14,1281,996), new cjs.Rectangle(40,14,1213,996), new cjs.Rectangle(40,14,1145,996), new cjs.Rectangle(40,14,1077,996), new cjs.Rectangle(40,14,1009,996), new cjs.Rectangle(40,14,941,996), new cjs.Rectangle(40,14,873,996), new cjs.Rectangle(40,14,805,996), new cjs.Rectangle(40,14,737,996), new cjs.Rectangle(40,14,669,996), new cjs.Rectangle(40,14,679,996), new cjs.Rectangle(40,14,689,996), new cjs.Rectangle(40,14,699,996), new cjs.Rectangle(40,14,709,996), new cjs.Rectangle(40,14,719,996), new cjs.Rectangle(40,14,729,996), new cjs.Rectangle(40,14,739,996), new cjs.Rectangle(40,14,749,996), new cjs.Rectangle(40,14,759,996), rect=new cjs.Rectangle(40,14,769,996), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(40,14,769,984), new cjs.Rectangle(40,6,769,980), new cjs.Rectangle(40,-6,769,980), new cjs.Rectangle(40,-18,769,980), new cjs.Rectangle(40,-30,769,980), new cjs.Rectangle(40,14,769,982.7), new cjs.Rectangle(40,14,769,1029.4), new cjs.Rectangle(40,14,769,1076), new cjs.Rectangle(40,14,769,1122.7), new cjs.Rectangle(40,14,769,1169.4), new cjs.Rectangle(40,14,769,1216), new cjs.Rectangle(40,14,769,1262.7), new cjs.Rectangle(40,14,769,1309.4), new cjs.Rectangle(40,14,769,1356), new cjs.Rectangle(40,14,769,1402.7), new cjs.Rectangle(40,14,769,1449.4), new cjs.Rectangle(40,14,769,1496), new cjs.Rectangle(40,14,769,1542.7), new cjs.Rectangle(40,14,769,1589.4), rect=new cjs.Rectangle(-410,-10,1620,1660), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.heroes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(400,350);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(2).to({y:1500},0).wait(4));

	// hero_2
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(400,1500);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(2).to({y:350},0).wait(2).to({y:1500},0).wait(2));

	// hero_3
	this.hero_3 = new lib.hero_3_mc();
	this.hero_3.setTransform(400,1500);

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(4).to({y:350},0).wait(2));

	// bg
	this.instance = new lib.background_4_mc();

	this.instance_1 = new lib.background_5_mc();

	this.instance_2 = new lib.background_6_mc();

	this.instance_3 = new lib.background_7_mc();

	this.instance_4 = new lib.background_8_mc();

	this.instance_5 = new lib.background_1_mc();
	this.instance_5.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-16,1600,1824.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.quest_9_mc = function(mode,startPosition,loop) {
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
	this.frame_1_mc = new lib.quest_1_9_mc();

	this.frame_2_mc = new lib.quest_2_9_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(25,-349.4,784,1349.4);
p.frameBounds = [rect, new cjs.Rectangle(-760,-349.4,1569,1349.4)];


(lib.quest_8_mc = function(mode,startPosition,loop) {
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
	this.frame_1_mc = new lib.quest_1_8_mc();

	this.frame_2_mc = new lib.quest_2_8_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84,-349.4,859.1,1349.4);
p.frameBounds = [rect, new cjs.Rectangle(-84,-349.4,1774.1,1279.4)];


(lib.quest_7_mc = function(mode,startPosition,loop) {
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
	this.frame_1_mc = new lib.quest_1_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(40,-349.4,769,1359.4);
p.frameBounds = [rect];


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
p.nominalBounds = rect = new cjs.Rectangle(25,-349.4,784,1349.4);
p.frameBounds = [rect, new cjs.Rectangle(-760,-349.4,1569,1349.4), new cjs.Rectangle(-760,-349.4,1610,1349.4)];


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
p.nominalBounds = rect = new cjs.Rectangle(-84,-349.4,859.1,1349.4);
p.frameBounds = [rect, new cjs.Rectangle(-84,-349.4,1774.1,1279.4)];


(lib.quest_4_mc = function(mode,startPosition,loop) {
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
	this.frame_1_mc = new lib.quest_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(40,-349.4,769,1359.4);
p.frameBounds = [rect];


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
p.nominalBounds = rect = new cjs.Rectangle(25,-349.4,784,1349.4);
p.frameBounds = [rect, new cjs.Rectangle(-760,-349.4,1569,1349.4), new cjs.Rectangle(-760,-349.4,1610,1349.4)];


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
	this.frame_1_mc = new lib.quest_1_2_mc();

	this.frame_2_mc = new lib.quest_2_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84,-349.4,859.1,1349.4);
p.frameBounds = [rect, new cjs.Rectangle(-84,-349.4,1774.1,1279.4)];


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
p.nominalBounds = rect = new cjs.Rectangle(40,-349.4,769,1359.4);
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
p.nominalBounds = rect = new cjs.Rectangle(-400,-16,1600,1824.5);
p.frameBounds = [rect];


(lib.LocationScreen_9 = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.quest_9_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1349.4);
p.frameBounds = [rect];


(lib.LocationScreen_8 = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.quest_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1349.4);
p.frameBounds = [rect];


(lib.LocationScreen_7 = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.quest_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1359.4);
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

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1349.4);
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

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1349.4);
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
	this.instance = new lib.background_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1359.4);
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

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_mc();

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
	this.instance = new lib.background_3_mc();

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
p.nominalBounds = rect = new cjs.Rectangle(-400,-349.4,1600,1359.4);
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

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-319.9,1600,2128.4);
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

	this.instance_11 = new lib.LocationScreen_7();

	this.instance_12 = new lib.LocationScreen_8();

	this.instance_13 = new lib.LocationScreen_9();

	this.instance_14 = new lib.RedirectScreen();

	this.instance_15 = new lib.ResultScreen();

	this.instance_16 = new lib.InstructionScreen();

	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(690,250);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.instance_17 = new lib.forward_mc();
	this.instance_17.setTransform(500,250);

	this.instance_18 = new lib.Glitter_2();
	this.instance_18.setTransform(450,50);

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(400,50);

	this.instance_19 = new lib.FlashAnimation();
	this.instance_19.setTransform(150,280);

	this.instance_20 = new lib.TrackMove_2();
	this.instance_20.setTransform(350,50);

	this.instance_21 = new lib.TrackMove();
	this.instance_21.setTransform(270,50);

	this.instance_22 = new lib.Cursor();
	this.instance_22.setTransform(185,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(115.1,50,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(45.1,50,0.583,0.583,0,0,0,0.1,0);

	this.instance_23 = new lib.PauseAppScreen();

	this.instance_24 = new lib.OrientationLockScreen();

	this.instance_25 = new lib.CurtainScreen();

	this.instance_26 = new lib.decor_shadow_1_mc();

	this.instance_27 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.gravity_explosion_comp},{t:this.instance_18},{t:this.instance_17},{t:this.next_btn}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[]},1).to({state:[{t:this.instance_26}]},1).to({state:[]},1).to({state:[{t:this.instance_27}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,257,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,0,1600,600), rect, new cjs.Rectangle(-400,0,1600,1315), new cjs.Rectangle(-400,-270.8,2129,1365.9), new cjs.Rectangle(-400,-280.8,1600,1261.9), new cjs.Rectangle(-400,-349.4,1600,1359.4), rect=new cjs.Rectangle(-400,-349.4,1600,1349.4), rect, new cjs.Rectangle(-400,-349.4,1600,1359.4), rect=new cjs.Rectangle(-400,-349.4,1600,1349.4), rect, new cjs.Rectangle(-400,-349.4,1600,1359.4), rect=new cjs.Rectangle(-400,-349.4,1600,1349.4), rect, new cjs.Rectangle(-400,0,1600,610), new cjs.Rectangle(-400,-319.9,1600,2128.4), new cjs.Rectangle(-400,0,1600,600), new cjs.Rectangle(0,0,785,430), rect=new cjs.Rectangle(-410,-10,1620,620), rect, new cjs.Rectangle(-400,600,1600,600), null, new cjs.Rectangle(448,288,24,24), rect=null, rect, rect, rect, rect, new cjs.Rectangle(-410,-10,1620,620)];


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