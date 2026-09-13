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
		{src:"library/images/storage_atlas_17.png", id:"storage_atlas_17"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,602,1600,600],[0,0,1600,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_3", frames: [[0,602,1600,600],[0,0,1600,600]]},
		{name:"storage_atlas_4", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_5", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_6", frames: [[602,0,520,420],[1124,0,520,420],[0,0,600,700],[692,904,531,432],[0,702,1600,200],[1225,904,520,420],[0,904,690,345]]},
		{name:"storage_atlas_7", frames: [[0,0,513,412],[392,542,390,540],[907,0,390,540],[1299,0,390,540],[515,0,390,540],[0,414,390,540],[1176,542,390,540],[784,542,390,540]]},
		{name:"storage_atlas_8", frames: [[784,542,390,540],[1176,0,390,540],[1176,957,470,421],[1176,542,485,413],[0,0,390,540],[0,542,390,540],[392,0,390,540],[392,542,390,540],[784,0,390,540]]},
		{name:"storage_atlas_9", frames: [[814,997,500,300],[1216,695,500,300],[1216,393,500,300],[421,564,408,416],[0,844,410,412],[1094,0,408,391],[831,564,383,431],[0,419,419,423],[0,0,450,417],[412,982,400,400],[452,282,640,280],[452,0,640,280]]},
		{name:"storage_atlas_10", frames: [[0,0,500,300],[0,684,330,350],[734,746,320,360],[382,382,350,390],[332,774,320,360],[0,1036,320,360],[1056,780,320,360],[1152,418,320,360],[1378,780,320,360],[1474,362,320,360],[1223,0,320,360],[884,0,337,416],[734,418,416,326],[0,302,380,380],[502,0,380,380]]},
		{name:"storage_atlas_11", frames: [[0,0,320,360],[644,362,320,360],[0,362,320,360],[0,724,320,360],[322,0,320,360],[644,724,320,360],[322,362,320,360],[322,724,320,360],[644,0,320,360],[966,0,320,360],[1288,0,320,360],[966,362,320,360],[1288,362,320,360],[966,724,320,360],[1288,724,320,360]]},
		{name:"storage_atlas_12", frames: [[322,0,320,360],[0,0,320,360],[322,362,320,360],[966,0,320,360],[322,724,320,360],[0,724,320,360],[0,362,320,360],[644,0,320,360],[1288,0,320,360],[644,362,320,360],[644,724,320,360],[966,362,320,360],[1288,362,320,360],[966,724,320,360],[1288,724,276,413]]},
		{name:"storage_atlas_13", frames: [[1263,0,310,325],[269,931,310,325],[592,384,310,325],[904,711,310,325],[904,384,310,325],[592,711,310,325],[893,1038,310,325],[1216,384,310,325],[1205,1038,310,325],[1216,711,310,325],[581,1038,310,325],[324,0,345,328],[0,0,322,353],[0,931,267,397],[671,0,590,190],[671,192,590,190],[0,739,590,190],[0,355,590,190],[0,547,590,190]]},
		{name:"storage_atlas_14", frames: [[0,1089,300,300],[224,654,300,300],[0,327,310,325],[0,0,310,325],[312,0,380,260],[1064,0,300,300],[526,696,300,300],[762,302,300,300],[762,0,300,300],[1064,302,223,335],[1366,0,237,313],[312,262,236,388],[1026,639,207,341],[1605,0,135,482],[1482,1017,186,332],[1561,484,218,282],[484,998,224,331],[710,998,240,279],[828,604,196,376],[1289,572,262,247],[1235,821,332,194],[302,956,180,441],[550,262,210,432],[0,654,222,433],[1219,1017,261,242],[1289,315,270,255],[952,982,265,250]]},
		{name:"storage_atlas_15", frames: [[1540,412,190,190],[538,708,180,180],[0,404,190,190],[1046,715,180,180],[890,429,190,190],[709,0,168,313],[1031,218,181,209],[1592,0,204,218],[1480,604,196,168],[192,587,162,204],[527,0,180,314],[1031,0,225,216],[840,621,204,159],[1258,0,88,533],[680,974,168,190],[170,985,168,190],[850,1089,168,190],[170,1177,168,190],[340,1012,168,190],[1530,1158,168,190],[340,1204,168,190],[1020,1106,168,190],[510,1082,168,190],[680,1166,168,190],[1190,1106,168,190],[1360,1158,168,190],[0,1162,168,190],[0,238,236,164],[1348,194,237,185],[0,0,245,236],[879,0,150,324],[247,0,278,204],[1278,573,200,166],[465,316,231,158],[1348,0,242,192],[247,206,216,187],[170,793,168,190],[340,820,168,190],[1230,914,168,190],[510,890,168,190],[890,897,168,190],[1060,914,168,190],[1400,966,168,190],[0,970,168,190],[1570,966,168,190],[720,782,168,190],[0,778,168,190],[1417,774,168,190],[1587,774,168,190],[430,476,220,160],[1587,220,190,190],[652,518,186,188],[1082,535,194,178],[1228,741,187,171],[698,326,190,190],[1348,381,190,190],[238,395,190,190],[0,596,180,180],[356,638,180,180]]},
		{name:"storage_atlas_16", frames: [[1609,1251,120,120],[1487,1251,120,120],[1609,1129,120,120],[966,1224,120,120],[1332,1264,120,120],[1210,1224,120,120],[716,1266,120,120],[1088,1224,120,120],[915,664,180,130],[1372,0,160,192],[502,194,160,192],[1534,0,160,192],[988,194,160,192],[1048,0,160,192],[502,388,160,192],[340,336,160,192],[1150,388,160,192],[664,194,160,192],[1312,388,160,192],[664,388,160,192],[1150,194,160,192],[1312,194,160,192],[1474,194,160,192],[826,194,160,192],[826,388,160,192],[1210,0,160,192],[988,388,160,192],[513,872,184,124],[324,744,169,159],[324,1039,155,156],[340,0,220,140],[324,578,176,164],[704,582,209,135],[1474,549,195,150],[324,1197,168,141],[691,1007,157,129],[562,0,160,192],[340,142,160,192],[0,1158,160,192],[170,384,160,192],[162,578,160,192],[0,770,160,192],[162,772,160,192],[0,964,160,192],[162,966,160,192],[724,0,160,192],[162,1160,160,192],[886,0,160,192],[0,576,160,192],[1696,0,73,190],[1721,610,79,185],[170,0,168,190],[0,384,168,190],[170,192,168,190],[0,0,168,190],[0,192,168,190],[502,728,163,142],[513,998,176,128],[494,1128,166,132],[502,582,200,144],[699,872,156,133],[1002,1102,120,120],[1439,701,280,80],[819,796,260,60],[1097,714,280,80],[857,960,150,100],[1233,796,150,100],[850,1062,150,100],[814,1164,150,100],[1385,783,150,100],[1009,898,150,100],[662,1138,150,100],[1537,783,150,100],[1081,796,150,100],[1161,898,150,100],[1009,1000,150,100],[1161,1000,150,100],[857,858,150,100],[1124,1102,120,120],[1365,898,120,120],[1257,582,180,130],[494,1262,220,80],[915,582,340,80],[1636,194,130,130],[667,728,150,142],[1313,898,50,297],[324,905,187,132],[1474,388,186,159],[1662,326,120,140],[1671,468,120,140],[1365,1020,120,120],[1609,885,120,120],[1487,1129,120,120],[1487,1007,120,120],[1365,1142,120,120],[1487,885,120,120],[1609,1007,120,120]]},
		{name:"storage_atlas_17", frames: [[156,851,48,48],[0,819,50,50],[330,744,90,50],[617,755,90,50],[893,825,50,50],[52,851,50,50],[104,851,50,50],[945,825,50,50],[465,852,48,48],[515,852,48,48],[119,903,32,50],[957,919,31,47],[924,919,31,49],[323,97,20,48],[893,877,29,56],[1006,584,18,60],[413,919,24,64],[114,665,35,50],[436,586,38,57],[618,920,22,62],[484,356,42,33],[488,0,127,94],[315,224,115,92],[766,477,120,75],[0,469,114,84],[116,469,115,83],[872,0,59,185],[740,0,62,190],[73,0,69,188],[804,0,66,177],[968,249,52,184],[0,0,71,189],[144,0,67,192],[122,220,94,114],[218,220,95,112],[315,318,86,114],[888,477,84,106],[394,478,82,106],[478,557,75,113],[927,585,77,104],[642,920,14,61],[711,100,25,68],[591,920,25,56],[439,919,21,71],[0,871,33,53],[990,919,21,69],[930,351,34,34],[82,737,28,47],[565,852,29,62],[577,162,10,25],[233,478,159,55],[766,585,159,54],[233,535,159,55],[0,555,159,55],[605,536,159,55],[605,477,159,57],[161,592,159,51],[555,593,159,51],[0,612,159,51],[213,97,108,58],[484,477,119,78],[213,0,132,95],[617,0,121,98],[347,0,139,86],[933,0,80,124],[395,162,180,60],[529,100,180,60],[347,96,180,60],[213,158,180,60],[804,187,180,60],[577,192,180,60],[503,672,40,40],[833,755,60,60],[144,789,60,60],[895,763,60,60],[957,763,60,60],[82,789,60,60],[484,790,60,60],[771,755,60,60],[709,755,60,60],[422,744,60,60],[986,126,25,111],[330,796,25,111],[403,318,25,111],[384,796,25,111],[357,796,25,111],[411,806,25,111],[438,806,25,111],[233,811,25,111],[206,811,25,111],[659,807,25,111],[605,807,25,111],[632,807,25,111],[759,192,40,55],[716,593,40,43],[589,162,10,11],[688,254,69,94],[228,736,100,73],[546,790,57,60],[0,283,99,100],[997,825,23,38],[528,356,31,31],[933,126,50,50],[974,435,40,147],[432,224,50,210],[759,249,100,100],[861,249,100,100],[35,903,40,40],[77,903,40,40],[549,916,40,40],[329,909,40,40],[924,877,40,40],[465,902,40,40],[507,902,40,40],[966,877,40,40],[371,919,40,40],[156,901,40,40],[686,807,21,120],[306,811,21,120],[260,811,21,120],[755,817,21,120],[847,817,21,120],[824,817,21,120],[283,811,21,120],[778,817,21,120],[709,817,21,120],[732,817,21,120],[870,817,21,120],[801,817,21,120],[0,737,80,80],[114,717,112,70],[389,672,112,70],[322,592,112,70],[161,645,112,70],[555,646,112,70],[275,664,112,70],[0,665,112,70],[669,683,112,70],[783,683,112,70],[897,691,112,70],[503,718,112,70],[242,378,50,50],[0,191,120,90],[484,393,240,40],[688,351,240,40],[0,385,240,40],[0,427,240,40],[242,436,240,40],[726,435,240,40],[726,393,240,40],[484,435,240,40],[101,336,200,40],[716,641,200,40],[586,254,100,100],[484,254,100,100]]}
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



(lib.animation_for_pointer_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_6_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_7_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bag_bottom_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bag_top_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
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
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.copyright_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.current_face_0_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.current_face_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.current_hairstyle_0_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.current_hairstyle_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.current_location_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.decor_background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.decor_location_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.dress_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.dress_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.dress_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.dress_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.dress_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.dress_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.dress_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dress_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dress_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.dress_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.dress_7_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.dress_7_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.dress_8_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.dress_8_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.dress_9_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.dress_9_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.faceart_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.faceart_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.faceart_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.faceart_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.faceart_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.faceart_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.faceart_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.faceart_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.faceart_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.faceart_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.faceart_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.faceart_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.flash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.flash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.flash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.flash_4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.forward_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.glitter_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.glitter_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.glitter_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.glitter_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hair_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hair_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hair_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hair_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hair_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hair_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hair_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hair_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hair_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hair_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hair_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hair_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hair_7_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hair_7_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hair_8_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hair_8_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hair_9_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hair_9_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hat_main_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress8_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress9_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earring9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_faceart1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_faceart2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_faceart3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_faceart4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_faceart5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_faceart6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_finger_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe8_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair9_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero1_head_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero1_wand1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_wand2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero1_wand3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_wand4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_wand5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_wand6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_wand7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero1_wand8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero1_wand9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero2_book1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero2_book2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero2_book3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero2_book4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero2_book5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero2_book6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_book7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_book8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero2_book9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress7_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress8_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress9_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earring9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero2_faceart1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hero2_faceart2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero2_faceart3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero2_faceart4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero2_faceart5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero2_faceart6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero2_finger_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glasses1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glasses2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glasses3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glasses4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glasses5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glasses6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glasses7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glasses8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hero2_glasses9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair7_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair8_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair9_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat8_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat9_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero_1_body_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero_2_body_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_de_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_es_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.indicator_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.language_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.language_de_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.language_en_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.language_es_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.language_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.language_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.language_id_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.language_it_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.language_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.language_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.language_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.language_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.language_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.languages_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.languages_1_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.languages_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.languages_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.lens12_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.lens13_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.lens16_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.lens17_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.lens19_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.lens22_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.lens24_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.lens28_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.lens29_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new10_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new11_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new15_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new16_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new19_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new20_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new27_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new28_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new36_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_0_5_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_0_6_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.maneken_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.pencil_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.pencil_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.pencil_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.pencil_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.pencil_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.pencil_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.pencil_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.pencil_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.pencil_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.pencil_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.pencil_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.pencil_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.photoflash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.photoflash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.photoflash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(58);
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
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new10_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new15_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new22_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new30_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new37_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.shelves_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.shine_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.skip_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.table_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(6);
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
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.track_move_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(154);
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


(lib.table_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.table_img();
	this.instance.setTransform(-345,-173);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-345,-173,690,345);
p.frameBounds = [rect];


(lib.shelves_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shelves_img();
	this.instance.setTransform(-260,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-210,520,420);
p.frameBounds = [rect];


(lib.shadows_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new37_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXGQIAAseISvAAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-40,120,80);
p.frameBounds = [rect];


(lib.shadows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new2_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7HBIAAuCIV3AAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-45,140,90);
p.frameBounds = [rect];


(lib.shadows_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new1_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXGQIAAseISvAAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-40,120,80);
p.frameBounds = [rect];


(lib.shadows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new37_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7HBIAAuCIV3AAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-45,140,90);
p.frameBounds = [rect];


(lib.shadows_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new10_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXGQIAAseISvAAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-40,120,80);
p.frameBounds = [rect];


(lib.shadows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new30_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7HBIAAuCIV3AAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-45,140,90);
p.frameBounds = [rect];


(lib.shadows_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new8_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXGQIAAseISvAAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-40,120,80);
p.frameBounds = [rect];


(lib.shadows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new3_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7HBIAAuCIV3AAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-45,140,90);
p.frameBounds = [rect];


(lib.shadows_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new22_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXGQIAAseISvAAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-40,120,80);
p.frameBounds = [rect];


(lib.shadows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new4_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7HBIAAuCIV3AAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-45,140,90);
p.frameBounds = [rect];


(lib.shadows_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new15_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXGQIAAseISvAAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-40,120,80);
p.frameBounds = [rect];


(lib.shadows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new5_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7HBIAAuCIV3AAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-45,140,90);
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


(lib.pencil_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_6_2_img();
	this.instance.setTransform(-10.5,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGK8IAA13IGNAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-70,40,140);
p.frameBounds = [rect];


(lib.pencil_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_6_1_img();
	this.instance.setTransform(-10.5,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGK8IAA13IGNAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-70,40,140);
p.frameBounds = [rect];


(lib.pencil_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_5_2_img();
	this.instance.setTransform(-10.5,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGK8IAA13IGNAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-70,40,140);
p.frameBounds = [rect];


(lib.pencil_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_5_1_img();
	this.instance.setTransform(-10.5,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGK8IAA13IGNAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-70,40,140);
p.frameBounds = [rect];


(lib.pencil_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_4_2_img();
	this.instance.setTransform(-10.5,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGK8IAA13IGNAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-70,40,140);
p.frameBounds = [rect];


(lib.pencil_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_4_1_img();
	this.instance.setTransform(-10.5,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGK8IAA13IGNAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-70,40,140);
p.frameBounds = [rect];


(lib.pencil_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_3_2_img();
	this.instance.setTransform(-10.5,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGK8IAA13IGNAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-70,40,140);
p.frameBounds = [rect];


(lib.pencil_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_3_1_img();
	this.instance.setTransform(-10.5,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGK8IAA13IGNAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-70,40,140);
p.frameBounds = [rect];


(lib.pencil_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_2_2_img();
	this.instance.setTransform(-10.5,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGK8IAA13IGNAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-70,40,140);
p.frameBounds = [rect];


(lib.pencil_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_2_1_img();
	this.instance.setTransform(-10.5,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGK8IAA13IGNAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-70,40,140);
p.frameBounds = [rect];


(lib.pencil_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_1_2_img();
	this.instance.setTransform(-10.5,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGK8IAA13IGNAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-70,40,140);
p.frameBounds = [rect];


(lib.pencil_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil_1_1_img();
	this.instance.setTransform(-10.5,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGK8IAA13IGNAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-70,40,140);
p.frameBounds = [rect];


(lib.maneken_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.maneken_img();
	this.instance.setTransform(-65,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K7IAA11IV3AAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
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


(lib.lips_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new11_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGJYIAAyvIGNAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-60,40,120);
p.frameBounds = [rect];


(lib.lips_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new28_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGK7IAA11IGNAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-70,40,140);
p.frameBounds = [rect];


(lib.lips_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new10_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGJYIAAyvIGNAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-60,40,120);
p.frameBounds = [rect];


(lib.lips_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new27_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGK7IAA11IGNAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-70,40,140);
p.frameBounds = [rect];


(lib.lips_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new7_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGJYIAAyvIGNAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-60,40,120);
p.frameBounds = [rect];


(lib.lips_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new16_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGK7IAA11IGNAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-70,40,140);
p.frameBounds = [rect];


(lib.lips_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new15_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGJYIAAyvIGNAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-60,40,120);
p.frameBounds = [rect];


(lib.lips_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new3_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGK7IAA11IGNAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-70,40,140);
p.frameBounds = [rect];


(lib.lips_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new19_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGJYIAAyvIGNAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-60,40,120);
p.frameBounds = [rect];


(lib.lips_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new2_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGK7IAA11IGNAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-70,40,140);
p.frameBounds = [rect];


(lib.lips_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new20_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGJYIAAyvIGNAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-60,40,120);
p.frameBounds = [rect];


(lib.lips_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new36_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjGK7IAA11IGNAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-70,40,140);
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


(lib.hero2_shadows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_shadows1_img();
	this.instance.setTransform(-84,-95);

	this.instance_1 = new lib.hero2_shadows2_img();
	this.instance_1.setTransform(-84,-95);

	this.instance_2 = new lib.hero2_shadows3_img();
	this.instance_2.setTransform(-84,-95);

	this.instance_3 = new lib.hero2_shadows4_img();
	this.instance_3.setTransform(-84,-95);

	this.instance_4 = new lib.hero2_shadows5_img();
	this.instance_4.setTransform(-84,-95);

	this.instance_5 = new lib.hero2_shadows6_img();
	this.instance_5.setTransform(-84,-95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84,-95,168,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_lips1_img();
	this.instance.setTransform(-84,-95);

	this.instance_1 = new lib.hero2_lips2_img();
	this.instance_1.setTransform(-84,-95);

	this.instance_2 = new lib.hero2_lips3_img();
	this.instance_2.setTransform(-84,-95);

	this.instance_3 = new lib.hero2_lips4_img();
	this.instance_3.setTransform(-84,-95);

	this.instance_4 = new lib.hero2_lips5_img();
	this.instance_4.setTransform(-84,-95);

	this.instance_5 = new lib.hero2_lips6_img();
	this.instance_5.setTransform(-84,-95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84,-95,168,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_head_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_head_img();
	this.instance.setTransform(-84,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84,-95,168,190);
p.frameBounds = [rect];


(lib.hero2_hat_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_hat1_img();
	this.instance.setTransform(-54,-29);

	this.instance_1 = new lib.hero2_hat2_img();
	this.instance_1.setTransform(-60.5,-36);

	this.instance_2 = new lib.hero2_hat3_img();
	this.instance_2.setTransform(-65.4,-51.5);

	this.instance_3 = new lib.hero2_hat4_img();
	this.instance_3.setTransform(-82.9,-52.5);

	this.instance_4 = new lib.hero2_hat5_img();
	this.instance_4.setTransform(-56.5,-38);

	this.instance_5 = new lib.hero2_hat6_img();
	this.instance_5.setTransform(-99,-116);

	this.instance_6 = new lib.hero2_hat7_img();
	this.instance_6.setTransform(-109,-112.5);

	this.instance_7 = new lib.hero2_hat8_img();
	this.instance_7.setTransform(-113.5,-129);

	this.instance_8 = new lib.hero2_hat9_img();
	this.instance_8.setTransform(-98.4,-110.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-29,108,58);
p.frameBounds = [rect, new cjs.Rectangle(-60.5,-36,119,78), new cjs.Rectangle(-65.4,-51.5,132,95), new cjs.Rectangle(-82.9,-52.5,121,98), new cjs.Rectangle(-56.5,-38,139,86), new cjs.Rectangle(-99,-116,200,166), new cjs.Rectangle(-109,-112.5,231,158), new cjs.Rectangle(-113.5,-129,242,192), new cjs.Rectangle(-98.4,-110.5,216,187), null];


(lib.hero2_hair_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_hair6_img();
	this.instance.setTransform(-122.9,-47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.9,-47.5,267,397);
p.frameBounds = [rect];


(lib.hero2_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_hair1_img();
	this.instance.setTransform(-77.8,-18);

	this.instance_1 = new lib.hero2_hair3_img();
	this.instance_1.setTransform(-98,-44.5);

	this.instance_2 = new lib.hero2_hair4_img();
	this.instance_2.setTransform(-129.5,-119);

	this.instance_3 = new lib.hero2_hair6_img();
	this.instance_3.setTransform(-122.9,-47.5);

	this.instance_4 = new lib.hero2_hair7_img();
	this.instance_4.setTransform(-161,-83.5);

	this.instance_5 = new lib.hero2_hair8_img();
	this.instance_5.setTransform(-15,-106);

	this.instance_6 = new lib.hero2_hair9_img();
	this.instance_6.setTransform(-143.5,-109);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.8,-18,150,324);
p.frameBounds = [rect, null, new cjs.Rectangle(-98,-44.5,196,376), new cjs.Rectangle(-129.5,-119,262,247), null, new cjs.Rectangle(-122.9,-47.5,267,397), new cjs.Rectangle(-161,-83.5,332,194), new cjs.Rectangle(-15,-106,180,441), new cjs.Rectangle(-143.5,-109,278,204)];


(lib.hero2_glasses_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glasses1_img();
	this.instance.setTransform(-79.5,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.5,-27.5,159,55);
p.frameBounds = [rect];


(lib.hero2_glasses_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_glasses1_img();
	this.instance.setTransform(-79.5,-27.5);

	this.instance_1 = new lib.hero2_glasses2_img();
	this.instance_1.setTransform(-80.5,-29.5);

	this.instance_2 = new lib.hero2_glasses3_img();
	this.instance_2.setTransform(-80,-29.5);

	this.instance_3 = new lib.hero2_glasses4_img();
	this.instance_3.setTransform(-80.5,-29);

	this.instance_4 = new lib.hero2_glasses5_img();
	this.instance_4.setTransform(-81.5,-30);

	this.instance_5 = new lib.hero2_glasses6_img();
	this.instance_5.setTransform(-80.9,-31.5);

	this.instance_6 = new lib.hero2_glasses7_img();
	this.instance_6.setTransform(-80,-27.5);

	this.instance_7 = new lib.hero2_glasses8_img();
	this.instance_7.setTransform(-79.9,-26.5);

	this.instance_8 = new lib.hero2_glasses9_img();
	this.instance_8.setTransform(-79.9,-28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.5,-27.5,159,55);
p.frameBounds = [rect, new cjs.Rectangle(-80.5,-29.5,159,54), new cjs.Rectangle(-80,-29.5,159,55), new cjs.Rectangle(-80.5,-29,159,55), new cjs.Rectangle(-81.5,-30,159,55), new cjs.Rectangle(-80.9,-31.5,159,57), new cjs.Rectangle(-80,-27.5,159,51), new cjs.Rectangle(-79.9,-26.5,159,51), new cjs.Rectangle(-79.9,-28.5,159,51), null];


(lib.hero2_fringe_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe6_img();
	this.instance.setTransform(-122.9,-90.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.9,-90.5,245,236);
p.frameBounds = [rect];


(lib.hero2_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_fringe1_img();
	this.instance.setTransform(-81.5,-71);

	this.instance_1 = new lib.hero2_fringe2_img();
	this.instance_1.setTransform(-115.9,-104);

	this.instance_2 = new lib.hero2_fringe3_img();
	this.instance_2.setTransform(-118.4,-105.5);

	this.instance_3 = new lib.hero2_fringe4_img();
	this.instance_3.setTransform(-89,-72.5);

	this.instance_4 = new lib.hero2_fringe5_img();
	this.instance_4.setTransform(-119.9,-123);

	this.instance_5 = new lib.hero2_fringe6_img();
	this.instance_5.setTransform(-122.9,-90.5);

	this.instance_6 = new lib.hero2_fringe7_img();
	this.instance_6.setTransform(-83.4,-66);

	this.instance_7 = new lib.hero2_fringe8_img();
	this.instance_7.setTransform(-87.9,-76);

	this.instance_8 = new lib.hero2_fringe9_img();
	this.instance_8.setTransform(-78.4,-68.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.5,-71,163,142);
p.frameBounds = [rect, new cjs.Rectangle(-115.9,-104,240,279), new cjs.Rectangle(-118.4,-105.5,236,164), new cjs.Rectangle(-89,-72.5,176,128), new cjs.Rectangle(-119.9,-123,237,185), new cjs.Rectangle(-122.9,-90.5,245,236), new cjs.Rectangle(-83.4,-66,166,132), new cjs.Rectangle(-87.9,-76,200,144), new cjs.Rectangle(-78.4,-68.5,156,133)];


(lib.hero2_finger_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero2_finger_img();
	this.instance.setTransform(-5,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-12.5,10,25);
p.frameBounds = [rect];


(lib.hero2_faceart_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_faceart1_img();
	this.instance.setTransform(-84,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84,-95,168,190);
p.frameBounds = [rect];


(lib.hero2_faceart_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_faceart1_img();
	this.instance.setTransform(-84,-95);

	this.instance_1 = new lib.hero2_faceart2_img();
	this.instance_1.setTransform(-84,-95);

	this.instance_2 = new lib.hero2_faceart3_img();
	this.instance_2.setTransform(-84,-95);

	this.instance_3 = new lib.hero2_faceart4_img();
	this.instance_3.setTransform(-84,-95);

	this.instance_4 = new lib.hero2_faceart5_img();
	this.instance_4.setTransform(-84,-95);

	this.instance_5 = new lib.hero2_faceart6_img();
	this.instance_5.setTransform(-84,-95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84,-95,168,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_eyes1_img();
	this.instance.setTransform(-84,-95);

	this.instance_1 = new lib.hero2_eyes2_img();
	this.instance_1.setTransform(-84,-95);

	this.instance_2 = new lib.hero2_eyes3_img();
	this.instance_2.setTransform(-84,-95);

	this.instance_3 = new lib.hero2_eyes4_img();
	this.instance_3.setTransform(-84,-95);

	this.instance_4 = new lib.hero2_eyes5_img();
	this.instance_4.setTransform(-84,-95);

	this.instance_5 = new lib.hero2_eyes6_img();
	this.instance_5.setTransform(-84,-95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84,-95,168,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_eyebrows_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyebrows1_img();
	this.instance.setTransform(-84,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84,-95,168,190);
p.frameBounds = [rect];


(lib.hero2_eyebrows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_eyebrows1_img();
	this.instance.setTransform(-84,-95);

	this.instance_1 = new lib.hero2_eyebrows2_img();
	this.instance_1.setTransform(-84,-95);

	this.instance_2 = new lib.hero2_eyebrows3_img();
	this.instance_2.setTransform(-84,-95);

	this.instance_3 = new lib.hero2_eyebrows4_img();
	this.instance_3.setTransform(-84,-95);

	this.instance_4 = new lib.hero2_eyebrows5_img();
	this.instance_4.setTransform(-84,-95);

	this.instance_5 = new lib.hero2_eyebrows6_img();
	this.instance_5.setTransform(-84,-95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84,-95,168,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_earrings9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring9_img();
	this.instance.setTransform(75.3,-32.5,1,1,0,0,180);

	this.instance_1 = new lib.hero2_earring9_img();
	this.instance_1.setTransform(-75.3,-29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.3,-32.5,150.6,65);
p.frameBounds = [rect];


(lib.hero2_earrings8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring8_img();
	this.instance.setTransform(48.8,-26.5);

	this.instance_1 = new lib.hero2_earring8_img();
	this.instance_1.setTransform(-76.8,-20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.8,-26.5,153.6,53);
p.frameBounds = [rect];


(lib.hero2_earrings7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring7_img();
	this.instance.setTransform(81.5,-18.5,1,1,0,0,180);

	this.instance_1 = new lib.hero2_earring7_img();
	this.instance_1.setTransform(-81.5,-15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.5,-18.5,163,37);
p.frameBounds = [rect];


(lib.hero2_earrings6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring6_img();
	this.instance.setTransform(53.8,-38);

	this.instance_1 = new lib.hero2_earring6_img();
	this.instance_1.setTransform(-74.7,-31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.7,-38,149.5,76);
p.frameBounds = [rect];


(lib.hero2_earrings5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring5_img();
	this.instance.setTransform(47.5,-28.2);

	this.instance_1 = new lib.hero2_earring5_img();
	this.instance_1.setTransform(-80.5,-24.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.5,-28.2,161,56.5);
p.frameBounds = [rect];


(lib.hero2_earrings4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring4_img();
	this.instance.setTransform(73.2,-38.2,1,1,0,0,180);

	this.instance_1 = new lib.hero2_earring4_img();
	this.instance_1.setTransform(-73.2,-32.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.2,-38.2,146.5,76.5);
p.frameBounds = [rect];


(lib.hero2_earrings3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring3_img();
	this.instance.setTransform(77.2,-30.5,1,1,0,0,180);

	this.instance_1 = new lib.hero2_earring3_img();
	this.instance_1.setTransform(-77.2,-25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.2,-30.5,154.5,61);
p.frameBounds = [rect];


(lib.hero2_earrings2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring2_img();
	this.instance.setTransform(51,-37.2);

	this.instance_1 = new lib.hero2_earring2_img();
	this.instance_1.setTransform(-75.9,-30.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.9,-37.2,152,74.5);
p.frameBounds = [rect];


(lib.hero2_earrings1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring1_img();
	this.instance.setTransform(56,-34.2);

	this.instance_1 = new lib.hero2_earring1_img();
	this.instance_1.setTransform(-69.9,-26.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.9,-34.2,140,68.5);
p.frameBounds = [rect];


(lib.hero2_dress_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress3_img();
	this.instance.setTransform(-110.9,-185.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.9,-185.5,186,332);
p.frameBounds = [rect];


(lib.hero2_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_dress1_img();
	this.instance.setTransform(-161,-176.5);

	this.instance_1 = new lib.hero2_dress2_img();
	this.instance_1.setTransform(-138.9,-176.5);

	this.instance_2 = new lib.hero2_dress3_img();
	this.instance_2.setTransform(-110.9,-185.5);

	this.instance_3 = new lib.hero2_dress4_img();
	this.instance_3.setTransform(-110.4,-189.5);

	this.instance_4 = new lib.hero2_dress5_img();
	this.instance_4.setTransform(-187.9,-173);

	this.instance_5 = new lib.hero2_dress6_img();
	this.instance_5.setTransform(-165.4,-193.5);

	this.instance_6 = new lib.hero2_dress7_img();
	this.instance_6.setTransform(-171.9,-185);

	this.instance_7 = new lib.hero2_dress8_img();
	this.instance_7.setTransform(-95.9,-174.5);

	this.instance_8 = new lib.hero2_dress9_img();
	this.instance_8.setTransform(-209,-178.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-161,-176.5,322,353);
p.frameBounds = [rect, new cjs.Rectangle(-138.9,-176.5,276,413), new cjs.Rectangle(-110.9,-185.5,186,332), new cjs.Rectangle(-110.4,-189.5,218,282), new cjs.Rectangle(-187.9,-173,408,391), new cjs.Rectangle(-165.4,-193.5,383,431), new cjs.Rectangle(-171.9,-185,419,423), new cjs.Rectangle(-95.9,-174.5,224,331), new cjs.Rectangle(-209,-178.9,450,417), null];


(lib.hero2_book_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_book1_img();
	this.instance.setTransform(-46,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-45,94,114);
p.frameBounds = [rect];


(lib.hero2_book_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_book1_img();
	this.instance.setTransform(-47,-57);

	this.instance_1 = new lib.hero2_book2_img();
	this.instance_1.setTransform(-45.8,-70.5);

	this.instance_2 = new lib.hero2_book3_img();
	this.instance_2.setTransform(-44.8,-66);

	this.instance_3 = new lib.hero2_book4_img();
	this.instance_3.setTransform(-44.3,-53);

	this.instance_4 = new lib.hero2_book5_img();
	this.instance_4.setTransform(-44.8,-56);

	this.instance_5 = new lib.hero2_book6_img();
	this.instance_5.setTransform(-112.8,-132.5);

	this.instance_6 = new lib.hero2_book7_img();
	this.instance_6.setTransform(-95.8,-184);

	this.instance_7 = new lib.hero2_book8_img();
	this.instance_7.setTransform(-50.3,-68);

	this.instance_8 = new lib.hero2_book9_img();
	this.instance_8.setTransform(-55.3,-67.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-57,94,114);
p.frameBounds = [rect, new cjs.Rectangle(-45.8,-70.5,95,112), new cjs.Rectangle(-44.8,-66,86,114), new cjs.Rectangle(-44.3,-53,84,106), new cjs.Rectangle(-44.8,-56,82,106), new cjs.Rectangle(-112.8,-132.5,135,482), new cjs.Rectangle(-95.8,-184,88,533), new cjs.Rectangle(-50.3,-68,75,113), new cjs.Rectangle(-55.3,-67.5,77,104), null];


(lib.hero1_wand_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_wand2_img();
	this.instance.setTransform(-32.4,-88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.4,-88.5,73,190);
p.frameBounds = [rect];


(lib.hero1_wand_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_wand1_img();
	this.instance.setTransform(-29.5,-92.5);

	this.instance_1 = new lib.hero1_wand2_img();
	this.instance_1.setTransform(-32.4,-88.5);

	this.instance_2 = new lib.hero1_wand3_img();
	this.instance_2.setTransform(-30.9,-90.5);

	this.instance_3 = new lib.hero1_wand4_img();
	this.instance_3.setTransform(-34.9,-92.5);

	this.instance_4 = new lib.hero1_wand5_img();
	this.instance_4.setTransform(-31.4,-85.5);

	this.instance_5 = new lib.hero1_wand6_img();
	this.instance_5.setTransform(-31.4,-72.5);

	this.instance_6 = new lib.hero1_wand7_img();
	this.instance_6.setTransform(-32.9,-99);

	this.instance_7 = new lib.hero1_wand8_img();
	this.instance_7.setTransform(-37.4,-102);

	this.instance_8 = new lib.hero1_wand9_img();
	this.instance_8.setTransform(-48.4,-91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.5,-92.5,59,185);
p.frameBounds = [rect, new cjs.Rectangle(-32.4,-88.5,73,190), new cjs.Rectangle(-30.9,-90.5,62,190), new cjs.Rectangle(-34.9,-92.5,69,188), new cjs.Rectangle(-31.4,-85.5,66,177), new cjs.Rectangle(-31.4,-72.5,52,184), new cjs.Rectangle(-32.9,-99,71,189), new cjs.Rectangle(-37.4,-102,67,192), new cjs.Rectangle(-48.4,-91,79,185), null];


(lib.hero1_shadows_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shadows1_img();
	this.instance.setTransform(-80,-96);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-96,160,192);
p.frameBounds = [rect];


(lib.hero1_shadows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shadows1_img();
	this.instance.setTransform(-80,-96);

	this.instance_1 = new lib.hero1_shadows2_img();
	this.instance_1.setTransform(-80,-96);

	this.instance_2 = new lib.hero1_shadows3_img();
	this.instance_2.setTransform(-80,-96);

	this.instance_3 = new lib.hero1_shadows4_img();
	this.instance_3.setTransform(-80,-96);

	this.instance_4 = new lib.hero1_shadows5_img();
	this.instance_4.setTransform(-80,-96);

	this.instance_5 = new lib.hero1_shadows6_img();
	this.instance_5.setTransform(-80,-96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-96,160,192);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips1_img();
	this.instance.setTransform(-80,-96);

	this.instance_1 = new lib.hero1_lips2_img();
	this.instance_1.setTransform(-80,-96);

	this.instance_2 = new lib.hero1_lips3_img();
	this.instance_2.setTransform(-80,-96);

	this.instance_3 = new lib.hero1_lips4_img();
	this.instance_3.setTransform(-80,-96);

	this.instance_4 = new lib.hero1_lips5_img();
	this.instance_4.setTransform(-80,-96);

	this.instance_5 = new lib.hero1_lips6_img();
	this.instance_5.setTransform(-80,-96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-96,160,192);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_head_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_head_img();
	this.instance.setTransform(-80,-96);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-96,160,192);
p.frameBounds = [rect];


(lib.hero1_hat_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_hat1_img();
	this.instance.setTransform(-63.5,-47);

	this.instance_1 = new lib.hero1_hat2_img();
	this.instance_1.setTransform(-58,-49.5);

	this.instance_2 = new lib.hero1_hat3_img();
	this.instance_2.setTransform(-59,-40.5);

	this.instance_3 = new lib.hero1_hat4_img();
	this.instance_3.setTransform(-58,-52.5);

	this.instance_4 = new lib.hero1_hat5_img();
	this.instance_4.setTransform(-57,-45.5);

	this.instance_5 = new lib.hero1_hat6_img();
	this.instance_5.setTransform(-124,-63.5);

	this.instance_6 = new lib.hero1_hat7_img();
	this.instance_6.setTransform(-112,-48.5);

	this.instance_7 = new lib.hero1_hat8_img();
	this.instance_7.setTransform(-98,-41.5);

	this.instance_8 = new lib.hero1_hat9_img();
	this.instance_8.setTransform(-52,-51.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.5,-47,127,94);
p.frameBounds = [rect, new cjs.Rectangle(-58,-49.5,115,92), new cjs.Rectangle(-59,-40.5,120,75), new cjs.Rectangle(-58,-52.5,114,84), new cjs.Rectangle(-57,-45.5,115,83), new cjs.Rectangle(-124,-63.5,195,150), new cjs.Rectangle(-112,-48.5,204,159), new cjs.Rectangle(-98,-41.5,168,141), new cjs.Rectangle(-52,-51.5,157,129), null];


(lib.hero1_hair_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-126.3,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-126.3,-9,237,313);
p.frameBounds = [rect];


(lib.hero1_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-126.3,-9);

	this.instance_1 = new lib.hero1_hair3_img();
	this.instance_1.setTransform(-126.5,-62);

	this.instance_2 = new lib.hero1_hair4_img();
	this.instance_2.setTransform(-88.5,-16);

	this.instance_3 = new lib.hero1_hair5_img();
	this.instance_3.setTransform(-89.5,-11.5);

	this.instance_4 = new lib.hero1_hair6_img();
	this.instance_4.setTransform(-96.5,-14);

	this.instance_5 = new lib.hero1_hair7_img();
	this.instance_5.setTransform(-201,-54);

	this.instance_6 = new lib.hero1_hair8_img();
	this.instance_6.setTransform(-98.5,38);

	this.instance_7 = new lib.hero1_hair9_img();
	this.instance_7.setTransform(-109.8,-66);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-126.3,-9,237,313);
p.frameBounds = [rect, null, new cjs.Rectangle(-126.5,-62,236,388), new cjs.Rectangle(-88.5,-16,180,314), new cjs.Rectangle(-89.5,-11.5,176,164), new cjs.Rectangle(-96.5,-14,207,341), new cjs.Rectangle(-201,-54,416,326), new cjs.Rectangle(-98.5,38,209,135), new cjs.Rectangle(-109.8,-66,225,216)];


(lib.hero1_fringe_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fringe1_img();
	this.instance.setTransform(-92,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-62,184,124);
p.frameBounds = [rect];


(lib.hero1_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_fringe1_img();
	this.instance.setTransform(-92,-62);

	this.instance_1 = new lib.hero1_fringe2_img();
	this.instance_1.setTransform(-78.3,-92.5);

	this.instance_2 = new lib.hero1_fringe3_img();
	this.instance_2.setTransform(-70.3,-81);

	this.instance_3 = new lib.hero1_fringe4_img();
	this.instance_3.setTransform(-87.3,-68);

	this.instance_4 = new lib.hero1_fringe5_img();
	this.instance_4.setTransform(-103.8,-67.5);

	this.instance_5 = new lib.hero1_fringe6_img();
	this.instance_5.setTransform(-95.8,-69.5);

	this.instance_6 = new lib.hero1_fringe7_img();
	this.instance_6.setTransform(-77.3,-59.5);

	this.instance_7 = new lib.hero1_fringe8_img();
	this.instance_7.setTransform(-111.8,-67.5);

	this.instance_8 = new lib.hero1_fringe9_img();
	this.instance_8.setTransform(-104.8,-66);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-62,184,124);
p.frameBounds = [rect, new cjs.Rectangle(-78.3,-92.5,169,159), new cjs.Rectangle(-70.3,-81,155,156), new cjs.Rectangle(-87.3,-68,181,209), new cjs.Rectangle(-103.8,-67.5,204,218), new cjs.Rectangle(-95.8,-69.5,196,168), new cjs.Rectangle(-77.3,-59.5,162,204), new cjs.Rectangle(-111.8,-67.5,223,335), new cjs.Rectangle(-104.8,-66,220,140)];


(lib.hero1_finger_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_finger_img();
	this.instance.setTransform(-21,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-16.5,42,33);
p.frameBounds = [rect];


(lib.hero1_faceart_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_faceart1_img();
	this.instance.setTransform(-80,-96);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-96,160,192);
p.frameBounds = [rect];


(lib.hero1_faceart_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_faceart1_img();
	this.instance.setTransform(-80,-96);

	this.instance_1 = new lib.hero1_faceart2_img();
	this.instance_1.setTransform(-80,-96);

	this.instance_2 = new lib.hero1_faceart3_img();
	this.instance_2.setTransform(-80,-96);

	this.instance_3 = new lib.hero1_faceart4_img();
	this.instance_3.setTransform(-80,-96);

	this.instance_4 = new lib.hero1_faceart5_img();
	this.instance_4.setTransform(-80,-96);

	this.instance_5 = new lib.hero1_faceart6_img();
	this.instance_5.setTransform(-80,-96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-96,160,192);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_eyes_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyes1_img();
	this.instance.setTransform(-80,-96);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-96,160,192);
p.frameBounds = [rect];


(lib.hero1_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_eyes1_img();
	this.instance.setTransform(-80,-96);

	this.instance_1 = new lib.hero1_eyes2_img();
	this.instance_1.setTransform(-80,-96);

	this.instance_2 = new lib.hero1_eyes3_img();
	this.instance_2.setTransform(-80,-96);

	this.instance_3 = new lib.hero1_eyes4_img();
	this.instance_3.setTransform(-80,-96);

	this.instance_4 = new lib.hero1_eyes5_img();
	this.instance_4.setTransform(-80,-96);

	this.instance_5 = new lib.hero1_eyes6_img();
	this.instance_5.setTransform(-80,-96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-96,160,192);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_eyebrows_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyebrows1_img();
	this.instance.setTransform(-80,-96);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-96,160,192);
p.frameBounds = [rect];


(lib.hero1_eyebrows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyebrows1_img();
	this.instance.setTransform(-80,-96);

	this.instance_1 = new lib.hero1_eyebrows2_img();
	this.instance_1.setTransform(-80,-96);

	this.instance_2 = new lib.hero1_eyebrows3_img();
	this.instance_2.setTransform(-80,-96);

	this.instance_3 = new lib.hero1_eyebrows4_img();
	this.instance_3.setTransform(-80,-96);

	this.instance_4 = new lib.hero1_eyebrows5_img();
	this.instance_4.setTransform(-80,-96);

	this.instance_5 = new lib.hero1_eyebrows6_img();
	this.instance_5.setTransform(-80,-96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-96,160,192);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_earrings9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring9_img();
	this.instance.setTransform(50.5,-26.2);

	this.instance_1 = new lib.hero1_earring9_img();
	this.instance_1.setTransform(-72.5,-35.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.5,-35.7,145,71.5);
p.frameBounds = [rect];


(lib.hero1_earrings8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring8_img();
	this.instance.setTransform(43.5,-24.5);

	this.instance_1 = new lib.hero1_earring8_img();
	this.instance_1.setTransform(-81.5,-32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.5,-32.5,163,65);
p.frameBounds = [rect];


(lib.hero1_earrings7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring7_img();
	this.instance.setTransform(77.5,-20.7,1,1,0,0,180);

	this.instance_1 = new lib.hero1_earring7_img();
	this.instance_1.setTransform(-77.5,-29.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.5,-29.2,155,58.5);
p.frameBounds = [rect];


(lib.hero1_earrings6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring6_img();
	this.instance.setTransform(49.3,-28.2);

	this.instance_1 = new lib.hero1_earring6_img();
	this.instance_1.setTransform(-73.2,-35.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.2,-35.7,146.5,71.5);
p.frameBounds = [rect];


(lib.hero1_earrings5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring5_img();
	this.instance.setTransform(52.8,-25.5);

	this.instance_1 = new lib.hero1_earring5_img();
	this.instance_1.setTransform(-70.7,-34.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.7,-34.5,141.5,69);
p.frameBounds = [rect];


(lib.hero1_earrings4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring4_img();
	this.instance.setTransform(47.3,-25);

	this.instance_1 = new lib.hero1_earring4_img();
	this.instance_1.setTransform(-76.2,-31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.2,-31,152.5,62);
p.frameBounds = [rect];


(lib.hero1_earrings3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring3_img();
	this.instance.setTransform(51.5,-20.5);

	this.instance_1 = new lib.hero1_earring3_img();
	this.instance_1.setTransform(-71.5,-27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.5,-27.5,143,55);
p.frameBounds = [rect];


(lib.hero1_earrings2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring2_2_img();
	this.instance.setTransform(45.3,-21);

	this.instance_1 = new lib.hero1_earring2_1_img();
	this.instance_1.setTransform(-76.2,-28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.2,-28,152.5,56);
p.frameBounds = [rect];


(lib.hero1_earrings1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring1_img();
	this.instance.setTransform(76.8,-21.5,1,1,0,0,180);

	this.instance_1 = new lib.hero1_earring1_img();
	this.instance_1.setTransform(-76.7,-28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.7,-28.5,153.5,57);
p.frameBounds = [rect];


(lib.hero1_dress_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress2_img();
	this.instance.setTransform(-257.4,-222.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-257.4,-222.5,531,432);
p.frameBounds = [rect];


(lib.hero1_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_dress1_img();
	this.instance.setTransform(-235,-210.5);

	this.instance_1 = new lib.hero1_dress2_img();
	this.instance_1.setTransform(-257.4,-222.5);

	this.instance_2 = new lib.hero1_dress3_img();
	this.instance_2.setTransform(-228.4,-202);

	this.instance_3 = new lib.hero1_dress4_img();
	this.instance_3.setTransform(-188.5,-210);

	this.instance_4 = new lib.hero1_dress5_img();
	this.instance_4.setTransform(-252.4,-201);

	this.instance_5 = new lib.hero1_dress6_img();
	this.instance_5.setTransform(-186.9,-202);

	this.instance_6 = new lib.hero1_dress7_img();
	this.instance_6.setTransform(-148.4,-161.5);

	this.instance_7 = new lib.hero1_dress8_img();
	this.instance_7.setTransform(-66.5,-209);

	this.instance_8 = new lib.hero1_dress9_img();
	this.instance_8.setTransform(-160.9,-205.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-235,-210.5,470,421);
p.frameBounds = [rect, new cjs.Rectangle(-257.4,-222.5,531,432), new cjs.Rectangle(-228.4,-202,485,413), new cjs.Rectangle(-188.5,-210,408,416), new cjs.Rectangle(-252.4,-201,513,412), new cjs.Rectangle(-186.9,-202,410,412), new cjs.Rectangle(-148.4,-161.5,345,328), new cjs.Rectangle(-66.5,-209,168,313), new cjs.Rectangle(-160.9,-205.5,337,416), null];


(lib.hero_2_body_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_2_body_1_img();
	this.instance.setTransform(-111,-216.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111,-216.5,222,433);
p.frameBounds = [rect];


(lib.hero_1_body_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_1_body_1_img();
	this.instance.setTransform(-105,-216);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-216,210,432);
p.frameBounds = [rect];


(lib.headdress_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat9_img();
	this.instance.setTransform(-100,-87,0.926,0.926);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("At2KkIjHm1IS3x+IHyhBIHSaOIqIETg");
	this.shape.setTransform(2.1,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106.5,-96.1,217.4,195.6);
p.frameBounds = [rect];


(lib.headdress_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat9_img();
	this.instance.setTransform(-89.7,-47.6,1,1,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsTGVIhvibIMYvgIPKHKIAjKQIiVEQIlCBjg");
	this.shape.setTransform(-0.2,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.1,-82.9,179.9,161.8);
p.frameBounds = [rect];


(lib.headdress_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat8_img();
	this.instance.setTransform(133.5,-77.7,1,1,0,8.2,-171.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvoPjIljjpIPH8BIFsAZIVkaqIm6FMg");
	this.shape.setTransform(-7.7,-5.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-143.3,-112.3,276.8,224.7);
p.frameBounds = [rect];


(lib.headdress_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat8_img();
	this.instance.setTransform(-53.3,-82,0.892,0.892,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsKHNIhxj9IFVtUIMkgfIJ+LpIjkG9IvDChg");
	this.shape.setTransform(-2.7,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.9,-82,181.9,164);
p.frameBounds = [rect];


(lib.headdress_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat7_img();
	this.instance.setTransform(115,-79,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvnOWIktkrICms8IPirEIWhUHIhaDzIvKExg");
	this.shape.setTransform(-1.1,-6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131.2,-98.6,260.3,183.6);
p.frameBounds = [rect];


(lib.headdress_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat7_img();
	this.instance.setTransform(-54.8,-89.3,0.811,0.811,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsbIEIilk9IJmtkINqAnIGxOJIitEcIu6Bvg");
	this.shape.setTransform(-8,-8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.1,-89.3,204.2,178.6);
p.frameBounds = [rect];


(lib.headdress_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat6_img();
	this.instance.setTransform(100,-83,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlpOpIrDkVIgKjRIW21rIGVFiIEiSfIn8FQg");
	this.shape.setTransform(0.3,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.6,-95.5,215.9,187.5);
p.frameBounds = [rect];


(lib.headdress_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat6_img();
	this.instance.setTransform(-64.6,-104.6,1,1,20.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aw/H7IDHyDIMPjOIN7MAIEuKbInyEIIy0AKg");
	this.shape.setTransform(-5.8,-18.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117.7,-104.6,235.5,209.3);
p.frameBounds = [rect];


(lib.headdress_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat5_img();
	this.instance.setTransform(-69.5,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArrD3IghkkIIRoNIMvDLIDZMHInSCjg");
	this.shape.setTransform(3.2,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-56,156.3,114.3);
p.frameBounds = [rect];


(lib.headdress_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat5_img();
	this.instance.setTransform(-57.5,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqUjGIIZkfIDkAEIIsEUIiFKtIwhAGg");
	this.shape.setTransform(1.7,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.4,-49.3,132.3,97.2);
p.frameBounds = [rect];


(lib.headdress_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat4_img();
	this.instance.setTransform(-60.5,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq3GTIBBrFIH3kWIFLAcIHsHTIiKFTIt3FOg");
	this.shape.setTransform(0.7,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.9,-54.9,139.3,117);
p.frameBounds = [rect];


(lib.headdress_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat4_img();
	this.instance.setTransform(-57,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqVj/II/kdID2ALIH2FBIjULjIuoAKg");
	this.shape.setTransform(1.5,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.8,-53.4,132.6,108.3);
p.frameBounds = [rect];


(lib.headdress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat3_img();
	this.instance.setTransform(-66,-47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsYBlIA4j9IJUmvIMwFiIB1CdIj0JPIwzBBg");
	this.shape.setTransform(1.2,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.1,-61.1,158.8,117);
p.frameBounds = [rect];


(lib.headdress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat3_img();
	this.instance.setTransform(-60,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoaGcIhooDIB9jXID9iHIJ1AnIEWEyIiiIyg");
	this.shape.setTransform(-0.3,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.6,-48.9,128.6,90.9);
p.frameBounds = [rect];


(lib.headdress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat2_img();
	this.instance.setTransform(-59.5,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArVCqICknQIHkjLIIeBnIEFGtIjFGBIxNBOg");
	this.shape.setTransform(2.6,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.1,-51.6,145.4,99.8);
p.frameBounds = [rect];


(lib.headdress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat2_img();
	this.instance.setTransform(-57.5,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqqEUIAno4II6kHIL0FXIiQK+IwbBCg");
	this.shape.setTransform(5.8,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.5,-55.2,136.7,111.3);
p.frameBounds = [rect];


(lib.headdress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat1_img();
	this.instance.setTransform(-54,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqDg9IIflOILoDvIhiHQIwLBYg");
	this.shape.setTransform(1.5,-3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.9,-43.3,128.9,79.3);
p.frameBounds = [rect];


(lib.headdress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat1_img();
	this.instance.setTransform(-63.5,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApSIJIiXmHIB/mWIHPkQIIzBiIFSE9IitKqg");
	this.shape.setTransform(5.2,-4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.5,-59.8,149.4,109.9);
p.frameBounds = [rect];


(lib.hat_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hat_main_img();
	this.instance.setTransform(-94,-81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94,-81,180,130);
p.frameBounds = [rect];


(lib.glasses_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glasses9_img();
	this.instance.setTransform(-79.5,-25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfFeIAAq7IY/AAIAAK7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-35,160,70);
p.frameBounds = [rect];


(lib.glasses_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glasses8_img();
	this.instance.setTransform(-79.5,-25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfFeIAAq7IY/AAIAAK7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-35,160,70);
p.frameBounds = [rect];


(lib.glasses_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glasses7_img();
	this.instance.setTransform(-79.5,-25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfFeIAAq7IY/AAIAAK7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-35,160,70);
p.frameBounds = [rect];


(lib.glasses_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glasses6_img();
	this.instance.setTransform(-79.5,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfFeIAAq7IY/AAIAAK7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-35,160,70);
p.frameBounds = [rect];


(lib.glasses_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glasses5_img();
	this.instance.setTransform(-79.5,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfFeIAAq7IY/AAIAAK7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-35,160,70);
p.frameBounds = [rect];


(lib.glasses_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glasses4_img();
	this.instance.setTransform(-79.5,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfFeIAAq7IY/AAIAAK7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-35,160,70);
p.frameBounds = [rect];


(lib.glasses_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glasses3_img();
	this.instance.setTransform(-79.5,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfFeIAAq7IY/AAIAAK7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-35,160,70);
p.frameBounds = [rect];


(lib.glasses_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glasses2_img();
	this.instance.setTransform(-79.5,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfFeIAAq7IY/AAIAAK7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-35,160,70);
p.frameBounds = [rect];


(lib.glasses_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_glasses1_img();
	this.instance.setTransform(-79.5,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfFeIAAq7IY/AAIAAK7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-35,160,70);
p.frameBounds = [rect];


(lib.forward_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.forward_img();
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


(lib.eyes_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens12_img();
	this.instance.setTransform(1.5,-30);

	this.instance_1 = new lib.lens12_img();
	this.instance_1.setTransform(-61.5,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7GPIAAsdIV3AAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-40,140,80);
p.frameBounds = [rect];


(lib.eyes_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens28_img();
	this.instance.setTransform(1.5,-30);

	this.instance_1 = new lib.lens28_img();
	this.instance_1.setTransform(-61.5,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7HBIAAuCIV3AAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-45,140,90);
p.frameBounds = [rect];


(lib.eyes_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens13_img();
	this.instance.setTransform(1,-30);

	this.instance_1 = new lib.lens13_img();
	this.instance_1.setTransform(-61,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7GPIAAsdIV3AAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-40,140,80);
p.frameBounds = [rect];


(lib.eyes_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens13_img();
	this.instance.setTransform(1,-30);

	this.instance_1 = new lib.lens13_img();
	this.instance_1.setTransform(-61,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7HBIAAuCIV3AAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-45,140,90);
p.frameBounds = [rect];


(lib.eyes_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens19_img();
	this.instance.setTransform(1.5,-30);

	this.instance_1 = new lib.lens19_img();
	this.instance_1.setTransform(-61.5,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7GPIAAsdIV3AAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-40,140,80);
p.frameBounds = [rect];


(lib.eyes_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens16_img();
	this.instance.setTransform(1.5,-30);

	this.instance_1 = new lib.lens16_img();
	this.instance_1.setTransform(-61.5,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7HCIAAuDIV3AAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-45,140,90);
p.frameBounds = [rect];


(lib.eyes_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens16_img();
	this.instance.setTransform(1,-30);

	this.instance_1 = new lib.lens16_img();
	this.instance_1.setTransform(-61,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7GPIAAsdIV3AAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-40,140,80);
p.frameBounds = [rect];


(lib.eyes_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens24_img();
	this.instance.setTransform(1,-30);

	this.instance_1 = new lib.lens24_img();
	this.instance_1.setTransform(-61,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7HBIAAuCIV3AAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-45,140,90);
p.frameBounds = [rect];


(lib.eyes_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens29_img();
	this.instance.setTransform(1.5,-30);

	this.instance_1 = new lib.lens29_img();
	this.instance_1.setTransform(-61.5,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7GPIAAsdIV3AAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-40,140,80);
p.frameBounds = [rect];


(lib.eyes_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens22_img();
	this.instance.setTransform(1.5,-30);

	this.instance_1 = new lib.lens22_img();
	this.instance_1.setTransform(-61.5,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7HBIAAuCIV3AAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-45,140,90);
p.frameBounds = [rect];


(lib.eyes_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens17_img();
	this.instance.setTransform(1,-30);

	this.instance_1 = new lib.lens17_img();
	this.instance_1.setTransform(-61,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7GPIAAsdIV3AAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-40,140,80);
p.frameBounds = [rect];


(lib.eyes_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens12_img();
	this.instance.setTransform(1,-30);

	this.instance_1 = new lib.lens12_img();
	this.instance_1.setTransform(-61,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7HBIAAuCIV3AAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-45,140,90);
p.frameBounds = [rect];


(lib.decor_location_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.decor_location_img();
	this.instance.setTransform(-195,-270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-270,390,540);
p.frameBounds = [rect];


(lib.decor_background_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_background_1_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.current_location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_1_img();
	this.instance.setTransform(-195,-270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-270,390,540);
p.frameBounds = [rect];


(lib.current_hairstyle_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_hairstyle_1_img();
	this.instance.setTransform(-175,-195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-175,-195,350,390);
p.frameBounds = [rect];


(lib.current_hairstyle_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_hairstyle_0_img();
	this.instance.setTransform(-160,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-180,320,360);
p.frameBounds = [rect];


(lib.current_face_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_face_1_img();
	this.instance.setTransform(-165,-175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-175,330,350);
p.frameBounds = [rect];


(lib.current_face_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_face_0_img();
	this.instance.setTransform(-155,-163);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-163,310,325);
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


(lib.bag_bottom_mc = function(mode,startPosition,loop) {
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
	this.instance = new lib.bag_bottom_img();
	this.instance.setTransform(-260,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-210,520,420);
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


(lib.accessory_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_book9_img();
	this.instance.setTransform(-38.5,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.accessory_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_wand9_img();
	this.instance.setTransform(-39.5,-92.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkJQEIjd4DIHgoEID9BAIDwHaInVXtg");
	this.shape.setTransform(-0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.8,-102.7,97.4,205.8);
p.frameBounds = [rect];


(lib.accessory_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_book8_img();
	this.instance.setTransform(-37.5,-56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.accessory_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_wand8_img();
	this.instance.setTransform(-33.5,-96);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlFQ2IhQ8CIIplsIECIuInkZDg");
	this.shape.setTransform(4,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36.6,-110.6,81.3,216.3);
p.frameBounds = [rect];


(lib.accessory_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_book7_img();
	this.instance.setTransform(-15,269.7,1,1,0,173.8,-6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.4,-269.7,145,539.4);
p.frameBounds = [rect];


(lib.accessory_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_wand7_img();
	this.instance.setTransform(-35.5,-94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnXQqIBU9KIHjkcIF4JEIqhY1g");
	this.shape.setTransform(2.8,-3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.4,-111.7,94.4,217.1);
p.frameBounds = [rect];


(lib.accessory_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_book6_img();
	this.instance.setTransform(17.1,249.7,1,1,-168.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115.1,-249.7,230.2,499.4);
p.frameBounds = [rect];


(lib.accessory_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_wand6_img();
	this.instance.setTransform(-26,-92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkvPXIhr09IDfp3IGSALIDEE+In9Zyg");
	this.shape.setTransform(2.1,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39,-97.5,82.3,198.1);
p.frameBounds = [rect];


(lib.accessory_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_book5_img();
	this.instance.setTransform(-41,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.accessory_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_wand5_img();
	this.instance.setTransform(-33,-88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmoPbIBO6vIH8kPIEHHJIqiX+g");
	this.shape.setTransform(1.1,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.4,-102.2,85.2,199.3);
p.frameBounds = [rect];


(lib.accessory_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_book4_img();
	this.instance.setTransform(-42,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.accessory_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_wand4_img();
	this.instance.setTransform(-34.5,-94);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Am6Q9IgR7qIIgmqIF3IzIpCZ8g");
	this.shape.setTransform(1.2,-4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.8,-115.3,92.2,222.5);
p.frameBounds = [rect];


(lib.accessory_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_book3_img();
	this.instance.setTransform(43,-57,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJYIAAyvISvAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.accessory_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_wand3_img();
	this.instance.setTransform(-31,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmkP7IgQ89ID/jZIG/BDICrFNIqAang");
	this.shape.setTransform(5,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.7,-106.1,87.5,210.5);
p.frameBounds = [rect];


(lib.accessory_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_book2_img();
	this.instance.setTransform(47,-56,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.accessory_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_wand2_img();
	this.instance.setTransform(-36.5,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnwQPIB6+6II5hvIEuFHIrpbug");
	this.shape.setTransform(1.5,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.2,-106.2,99.5,210.4);
p.frameBounds = [rect];


(lib.accessory_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_book1_img();
	this.instance.setTransform(-47,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.accessory_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_wand1_img();
	this.instance.setTransform(-29.5,-92.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Al0QQIgU7qIH/lmIESI+IoQZDg");
	this.shape.setTransform(0.7,-3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.7,-112.3,78.8,217.9);
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
	this.instance.setTransform(-18,-18,0.75,0.75);

	this.instance_1 = new lib.gravity_explosion_2_img();
	this.instance_1.setTransform(-24,-24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect, new cjs.Rectangle(-24,-24,48,48)];


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
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
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


(lib.nav_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_2_img();
	this.instance.setTransform(-60,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-70,120,140);
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


(lib.nav_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_2_img();
	this.instance.setTransform(-60,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-70,120,140);
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
	this.substrate_mc.setTransform(0.1,0,0.525,0.525,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-21,42,42);
p.frameBounds = [rect];


(lib.lips_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.525,0.525,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-21,42,42);
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


(lib.hero2_earrings_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_earrings1_mc();

	this.instance_1 = new lib.hero2_earrings2_mc();
	this.instance_1.setTransform(0,1.3);

	this.instance_2 = new lib.hero2_earrings3_mc();
	this.instance_2.setTransform(-0.7,-3);

	this.instance_3 = new lib.hero2_earrings4_mc();
	this.instance_3.setTransform(-0.2,5.3);

	this.instance_4 = new lib.hero2_earrings5_mc();
	this.instance_4.setTransform(-0.9,-7.2);

	this.instance_5 = new lib.hero2_earrings6_mc();
	this.instance_5.setTransform(0.3,0.5);

	this.instance_6 = new lib.hero2_earrings7_mc();
	this.instance_6.setTransform(-1.4,-18.5);

	this.instance_7 = new lib.hero2_earrings8_mc();
	this.instance_7.setTransform(-0.6,-7);

	this.instance_8 = new lib.hero2_earrings9_mc();
	this.instance_8.setTransform(-0.6,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.9,-34.2,140,68.5);
p.frameBounds = [rect, new cjs.Rectangle(-75.9,-36,152,74.5), new cjs.Rectangle(-77.9,-33.5,154.5,61), new cjs.Rectangle(-73.4,-33,146.5,76.5), new cjs.Rectangle(-81.4,-35.5,161,56.5), new cjs.Rectangle(-74.4,-37.5,149.5,76), new cjs.Rectangle(-82.9,-37,163,37), new cjs.Rectangle(-77.4,-33.5,153.7,53), new cjs.Rectangle(-75.9,-34,150.7,65), null];


(lib.hero2_earring9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_earring9_img();
	this.instance.setTransform(3,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero2_earring9_img();
	this.instance_1.setTransform(-34,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero2_earring8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_earring8_img();
	this.instance.setTransform(3,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero2_earring8_img();
	this.instance_1.setTransform(-35,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero2_earring7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_earring7_img();
	this.instance.setTransform(2,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero2_earring7_img();
	this.instance_1.setTransform(-36,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero2_earring6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_earring6_img();
	this.instance.setTransform(6.4,-47.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero2_earring6_img();
	this.instance_1.setTransform(-28.6,-47.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero2_earring5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_earring5_img();
	this.instance.setTransform(1,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero2_earring5_img();
	this.instance_1.setTransform(-37,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero2_earring4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_earring4_img();
	this.instance.setTransform(2.9,-47.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero2_earring4_img();
	this.instance_1.setTransform(-33.1,-47.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero2_earring3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_earring3_img();
	this.instance.setTransform(4.4,-47.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero2_earring3_img();
	this.instance_1.setTransform(-33,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero2_earring2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_earring2_img();
	this.instance.setTransform(4.4,-47.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero2_earring2_img();
	this.instance_1.setTransform(-32.6,-47.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero2_earring1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_earring1_img();
	this.instance.setTransform(9,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero2_earring1_img();
	this.instance_1.setTransform(-25,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero1_earrings_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings3_mc();
	this.instance.setTransform(0.2,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.3,-35.5,143,55);
p.frameBounds = [rect];


(lib.hero1_earrings_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_earrings1_mc();

	this.instance_1 = new lib.hero1_earrings2_mc();
	this.instance_1.setTransform(0,-1);

	this.instance_2 = new lib.hero1_earrings3_mc();
	this.instance_2.setTransform(0.2,-8);

	this.instance_3 = new lib.hero1_earrings4_mc();
	this.instance_3.setTransform(0,-1.5);

	this.instance_4 = new lib.hero1_earrings5_mc();
	this.instance_4.setTransform(0.5,-1.5);

	this.instance_5 = new lib.hero1_earrings6_mc();
	this.instance_5.setTransform(1.5,1.3);

	this.instance_6 = new lib.hero1_earrings7_mc();
	this.instance_6.setTransform(-0.3,-1.2);

	this.instance_7 = new lib.hero1_earrings8_mc();
	this.instance_7.setTransform(-0.3,-4);

	this.instance_8 = new lib.hero1_earrings9_mc();
	this.instance_8.setTransform(-0.3,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.7,-28.5,153.5,57);
p.frameBounds = [rect, new cjs.Rectangle(-76.3,-29,152.5,56), new cjs.Rectangle(-71.3,-35.5,143,55), new cjs.Rectangle(-76.3,-32.5,152.5,62), new cjs.Rectangle(-70.3,-36,141.5,69), new cjs.Rectangle(-71.8,-34.5,146.5,71.5), new cjs.Rectangle(-77.8,-30.5,155,58.5), new cjs.Rectangle(-81.8,-36.5,163,65), new cjs.Rectangle(-72.8,-36,145,71.5), null];


(lib.hero1_earring9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_earring9_img();
	this.instance.setTransform(3.9,-45.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero1_earring9_img();
	this.instance_1.setTransform(-29.1,-45.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero1_earring8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_earring8_img();
	this.instance.setTransform(2,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero1_earring8_img();
	this.instance_1.setTransform(-42,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero1_earring7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_earring7_img();
	this.instance.setTransform(37,-46,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero1_earring7_img();
	this.instance_1.setTransform(-39,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero1_earring6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_earring6_img();
	this.instance.setTransform(4,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero1_earring6_img();
	this.instance_1.setTransform(-27,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero1_earring5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_earring5_img();
	this.instance.setTransform(6,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero1_earring5_img();
	this.instance_1.setTransform(-27,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero1_earring4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_earring4_img();
	this.instance.setTransform(2,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero1_earring4_img();
	this.instance_1.setTransform(-34,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero1_earring3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_earring3_img();
	this.instance.setTransform(4,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero1_earring3_img();
	this.instance_1.setTransform(-25,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero1_earring2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_earring2_2_img();
	this.instance.setTransform(2,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero1_earring2_1_img();
	this.instance_1.setTransform(-36,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero1_earring1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_earring1_img();
	this.instance.setTransform(2,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero1_earring1_img();
	this.instance_1.setTransform(-38.1,-47.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7K8IAA13IV3AAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// headdress
	this.headdress = new lib.hero2_hat_all_mc();
	this.headdress.setTransform(24.2,-308);

	this.timeline.addTween(cjs.Tween.get(this.headdress).to({rotation:-3.7,x:12.6,y:-292.3},69).to({rotation:0,x:24.2,y:-308},70).wait(1));

	// earrings
	this.earrings = new lib.hero2_earrings_all_mc();
	this.earrings.setTransform(29.7,-146.2);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({scaleY:1.01,skewX:2.6,skewY:-3.7,x:26.5,y:-131.2},69).to({scaleY:1,skewX:0,skewY:0,x:29.7,y:-146.2},70).wait(1));

	// body
	this.instance = new lib.hero2_finger_mc();
	this.instance.setTransform(-109.5,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-14.5},69).to({y:-29.5},70).wait(1));

	// accessory
	this.accessory = new lib.hero2_book_all_mc();
	this.accessory.setTransform(-68.3,-42.2);

	this.timeline.addTween(cjs.Tween.get(this.accessory).to({y:-27.2},69).to({y:-42.2},70).wait(1));

	// glasses
	this.glasses = new lib.hero2_glasses_all_mc();
	this.glasses.setTransform(26.2,-195);

	this.timeline.addTween(cjs.Tween.get(this.glasses).to({rotation:-3.7,x:21.8,y:-179.7},69).to({rotation:0,x:26.2,y:-195},70).wait(1));

	// fringe
	this.fringe = new lib.hero2_fringe_all_mc();
	this.fringe.setTransform(26.7,-247.7);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({rotation:-3.7,x:19,y:-232.3},69).to({rotation:0,x:26.7,y:-247.7},70).wait(1));

	// eyes
	this.eyes = new lib.hero2_eyes_all_mc();
	this.eyes.setTransform(30.5,-209.7);

	this.timeline.addTween(cjs.Tween.get(this.eyes).to({rotation:-3.7,x:25.2,y:-194.6},69).to({rotation:0,x:30.5,y:-209.7},70).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero2_eyebrows_all_mc();
	this.eyebrows.setTransform(30.5,-209.7);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).to({rotation:-3.7,x:25.2,y:-194.6},69).to({rotation:0,x:30.5,y:-209.7},70).wait(1));

	// shadows
	this.shadows = new lib.hero2_shadows_all_mc();
	this.shadows.setTransform(30.5,-209.7);

	this.timeline.addTween(cjs.Tween.get(this.shadows).to({rotation:-3.7,x:25.2,y:-194.6},69).to({rotation:0,x:30.5,y:-209.7},70).wait(1));

	// lips
	this.lips = new lib.hero2_lips_all_mc();
	this.lips.setTransform(30.5,-209.7);

	this.timeline.addTween(cjs.Tween.get(this.lips).to({rotation:-3.7,x:25.2,y:-194.6},69).to({rotation:0,x:30.5,y:-209.7},70).wait(1));

	// faceart
	this.faceart = new lib.hero2_faceart_all_mc();
	this.faceart.setTransform(30.5,-209.7);

	this.timeline.addTween(cjs.Tween.get(this.faceart).to({rotation:-3.7,x:25.2,y:-194.6},69).to({rotation:0,x:30.5,y:-209.7},70).wait(1));

	// body
	this.instance_1 = new lib.hero2_head_mc();
	this.instance_1.setTransform(30.5,-209.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-3.7,x:25.2,y:-194.6},69).to({rotation:0,x:30.5,y:-209.7},70).wait(1));

	// dress
	this.dress = new lib.hero2_dress_all_mc();
	this.dress.setTransform(35.5,67);

	this.timeline.addTween(cjs.Tween.get(this.dress).to({y:82},69).to({y:67},70).wait(1));

	// body
	this.instance_2 = new lib.hero_2_body_1_mc();
	this.instance_2.setTransform(-3.5,88.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:103.3},69).to({y:88.3},70).wait(1));

	// hair
	this.hair = new lib.hero2_hair_all_mc();
	this.hair.setTransform(26.7,-247.7);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({rotation:-3.7,x:19,y:-232.3},69).to({rotation:0,x:26.7,y:-247.7},70).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125.5,-337,322,641.8);
p.frameBounds = [rect, new cjs.Rectangle(-125.5,-336.7,322,641.7), new cjs.Rectangle(-125.5,-336.5,322,641.8), new cjs.Rectangle(-125.5,-336.3,322,641.8), new cjs.Rectangle(-125.5,-336.1,322,641.7), new cjs.Rectangle(-125.5,-336.1,322,642), new cjs.Rectangle(-125.5,-335.8,322,641.9), new cjs.Rectangle(-125.5,-335.6,322,641.9), new cjs.Rectangle(-125.5,-335.4,322,642), new cjs.Rectangle(-125.5,-335.2,322,642), new cjs.Rectangle(-125.5,-335.1,322,642.1), new cjs.Rectangle(-125.5,-335,322,642.2), new cjs.Rectangle(-125.5,-334.7,322,642.1), new cjs.Rectangle(-125.5,-334.5,322,642.2), new cjs.Rectangle(-125.5,-334.3,322,642.1), new cjs.Rectangle(-125.5,-334.3,322,642.3), new cjs.Rectangle(-125.5,-334,322,642.3), new cjs.Rectangle(-125.5,-333.9,322,642.3), new cjs.Rectangle(-125.5,-333.6,322,642.3), new cjs.Rectangle(-125.5,-333.6,322,642.5), new cjs.Rectangle(-125.5,-333.3,322,642.5), new cjs.Rectangle(-125.5,-333.1,322,642.5), new cjs.Rectangle(-125.5,-332.9,322,642.5), new cjs.Rectangle(-125.5,-332.7,322,642.5), new cjs.Rectangle(-125.5,-332.7,322,642.7), new cjs.Rectangle(-125.5,-332.4,322,642.7), new cjs.Rectangle(-125.5,-332.2,322,642.7), new cjs.Rectangle(-125.5,-332,322,642.7), new cjs.Rectangle(-125.5,-331.8,322,642.7), new cjs.Rectangle(-125.5,-331.8,322,642.9), new cjs.Rectangle(-125.5,-331.5,322,642.8), new cjs.Rectangle(-125.5,-331.3,322,642.9), new cjs.Rectangle(-125.5,-331.1,322,642.8), new cjs.Rectangle(-125.5,-331.1,322,643), new cjs.Rectangle(-125.5,-330.9,322,643.1), new cjs.Rectangle(-125.5,-330.7,322,643.1), new cjs.Rectangle(-125.5,-330.4,322,643.1), new cjs.Rectangle(-125.5,-330.2,322,643.1), new cjs.Rectangle(-125.5,-330.2,322,643.2), new cjs.Rectangle(-125.5,-330,322,643.3), new cjs.Rectangle(-125.5,-329.8,322,643.3), new cjs.Rectangle(-125.5,-329.5,322,643.2), new cjs.Rectangle(-125.5,-329.3,322,643.3), new cjs.Rectangle(-125.5,-329.2,322,643.4), new cjs.Rectangle(-125.5,-329.1,322,643.4), new cjs.Rectangle(-125.5,-328.8,322,643.4), new cjs.Rectangle(-125.5,-328.7,322,643.5), new cjs.Rectangle(-125.5,-328.6,322,643.6), new cjs.Rectangle(-125.5,-328.4,322,643.6), new cjs.Rectangle(-125.5,-328.1,322,643.6), new cjs.Rectangle(-125.5,-327.9,322,643.6), new cjs.Rectangle(-125.5,-327.7,322,643.6), new cjs.Rectangle(-125.5,-327.7,322,643.8), new cjs.Rectangle(-125.5,-327.5,322,643.8), new cjs.Rectangle(-125.5,-327.2,322,643.8), new cjs.Rectangle(-125.5,-327,322,643.8), new cjs.Rectangle(-125.5,-326.8,322,643.8), new cjs.Rectangle(-125.5,-326.8,322,644), new cjs.Rectangle(-125.5,-326.6,322,644), new cjs.Rectangle(-125.5,-326.4,322,644), new cjs.Rectangle(-125.5,-326.1,322,644), new cjs.Rectangle(-125.5,-326.1,322,644.1), new cjs.Rectangle(-125.5,-325.9,322,644.2), new cjs.Rectangle(-125.5,-325.7,322,644.2), new cjs.Rectangle(-125.5,-325.4,322,644.1), new cjs.Rectangle(-125.5,-325.2,322,644.2), new cjs.Rectangle(-125.5,-325.2,322,644.3), new cjs.Rectangle(-125.5,-325,322,644.3), new cjs.Rectangle(-125.5,-324.8,322,644.4), new cjs.Rectangle(-125.5,-324.7,322,644.5), new cjs.Rectangle(-125.5,-324.7,322,644.3), new cjs.Rectangle(-125.5,-325,322,644.3), new cjs.Rectangle(-125.5,-325.1,322,644.2), new cjs.Rectangle(-125.5,-325.2,322,644.1), new cjs.Rectangle(-125.5,-325.3,322,644.1), new cjs.Rectangle(-125.5,-325.6,322,644.1), new cjs.Rectangle(-125.5,-325.8,322,644.1), new cjs.Rectangle(-125.5,-326,322,644.1), new cjs.Rectangle(-125.5,-326,322,643.9), new cjs.Rectangle(-125.5,-326.3,322,644), new cjs.Rectangle(-125.5,-326.5,322,644), new cjs.Rectangle(-125.5,-326.8,322,644), new cjs.Rectangle(-125.5,-326.9,322,643.9), new cjs.Rectangle(-125.5,-327,322,643.8), new cjs.Rectangle(-125.5,-327.2,322,643.8), new cjs.Rectangle(-125.5,-327.4,322,643.8), new cjs.Rectangle(-125.5,-327.6,322,643.8), new cjs.Rectangle(-125.5,-327.7,322,643.7), new cjs.Rectangle(-125.5,-327.8,322,643.6), new cjs.Rectangle(-125.5,-328.1,322,643.6), new cjs.Rectangle(-125.5,-328.2,322,643.5), new cjs.Rectangle(-125.5,-328.6,322,643.7), new cjs.Rectangle(-125.5,-328.5,322,643.4), new cjs.Rectangle(-125.5,-328.8,322,643.4), new cjs.Rectangle(-125.5,-329,322,643.4), new cjs.Rectangle(-125.5,-329.2,322,643.4), new cjs.Rectangle(-125.5,-329.4,322,643.3), new cjs.Rectangle(-125.5,-329.4,322,643.2), new cjs.Rectangle(-125.5,-329.7,322,643.3), new cjs.Rectangle(-125.5,-329.9,322,643.2), new cjs.Rectangle(-125.5,-330.1,322,643.2), new cjs.Rectangle(-125.5,-330.3,322,643.2), new cjs.Rectangle(-125.5,-330.3,322,643), new cjs.Rectangle(-125.5,-330.5,322,643), new cjs.Rectangle(-125.5,-330.7,322,643), new cjs.Rectangle(-125.5,-330.9,322,643), new cjs.Rectangle(-125.5,-331,322,642.9), new cjs.Rectangle(-125.5,-331.1,322,642.8), new cjs.Rectangle(-125.5,-331.4,322,642.8), new cjs.Rectangle(-125.5,-331.6,322,642.8), new cjs.Rectangle(-125.5,-331.9,322,642.8), new cjs.Rectangle(-125.5,-331.9,322,642.7), new cjs.Rectangle(-125.5,-332.1,322,642.7), new cjs.Rectangle(-125.5,-332.2,322,642.6), new cjs.Rectangle(-125.5,-332.5,322,642.7), new cjs.Rectangle(-125.5,-332.7,322,642.7), new cjs.Rectangle(-125.5,-332.8,322,642.5), new cjs.Rectangle(-125.5,-332.9,322,642.4), new cjs.Rectangle(-125.5,-333.2,322,642.5), new cjs.Rectangle(-125.5,-333.4,322,642.5), new cjs.Rectangle(-125.5,-333.7,322,642.5), new cjs.Rectangle(-125.5,-333.6,322,642.3), new cjs.Rectangle(-125.5,-333.9,322,642.3), new cjs.Rectangle(-125.5,-334.1,322,642.3), new cjs.Rectangle(-125.5,-334.3,322,642.3), new cjs.Rectangle(-125.5,-334.3,322,642.1), new cjs.Rectangle(-125.5,-334.6,322,642.2), new cjs.Rectangle(-125.5,-334.7,322,642.1), new cjs.Rectangle(-125.5,-335,322,642.1), new cjs.Rectangle(-125.5,-335.1,322,642.1), new cjs.Rectangle(-125.5,-335.2,322,642), new cjs.Rectangle(-125.5,-335.4,322,641.8), new cjs.Rectangle(-125.5,-335.7,322,642), new cjs.Rectangle(-125.5,-335.8,322,641.9), new cjs.Rectangle(-125.5,-336.1,322,642), new cjs.Rectangle(-125.5,-336.1,322,641.7), new cjs.Rectangle(-125.5,-336.3,322,641.7), new cjs.Rectangle(-125.5,-336.5,322,641.7), new cjs.Rectangle(-125.5,-336.7,322,641.7), new cjs.Rectangle(-125.5,-337,322,641.8)];


(lib.hero_2_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero2_finger_mc();
	this.instance.setTransform(-109.5,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-19.5},59).to({y:-29.5},60).wait(1));

	// animation
	this.instance_1 = new lib.hero2_book_main_mc();
	this.instance_1.setTransform(-70.3,-37.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-68.3,y:-32.2},59).to({x:-70.3,y:-37.2},60).wait(1));

	// animation
	this.instance_2 = new lib.hero2_fringe_main_mc();
	this.instance_2.setTransform(26.7,-247.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-3.7,x:19,y:-237.3},59).to({rotation:0,x:26.7,y:-247.7},60).wait(1));

	// animation
	this.instance_3 = new lib.hero2_glasses_main_mc();
	this.instance_3.setTransform(26.2,-195);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-3.7,x:21.8,y:-184.7},59).to({rotation:0,x:26.2,y:-195},60).wait(1));

	// animation
	this.instance_4 = new lib.hero2_eyebrows_main_mc();
	this.instance_4.setTransform(30.5,-209.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-3.7,x:25.2,y:-199.6},59).to({rotation:0,x:30.5,y:-209.7},60).wait(1));

	// animation
	this.instance_5 = new lib.hero2_faceart_main_mc();
	this.instance_5.setTransform(30.5,-209.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-3.7,x:25.2,y:-199.6},59).to({rotation:0,x:30.5,y:-209.7},60).wait(1));

	// animation
	this.instance_6 = new lib.hero2_head_mc();
	this.instance_6.setTransform(30.5,-209.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-3.7,x:25.2,y:-199.6},59).to({rotation:0,x:30.5,y:-209.7},60).wait(1));

	// animation
	this.instance_7 = new lib.hero2_dress_main_mc();
	this.instance_7.setTransform(35.5,67);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:77},59).to({y:67},60).wait(1));

	// animation
	this.instance_8 = new lib.hero_2_body_1_mc();
	this.instance_8.setTransform(-3.5,88.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:98.3},59).to({y:88.3},60).wait(1));

	// animation
	this.instance_9 = new lib.hero2_hair_main_mc();
	this.instance_9.setTransform(26.7,-247.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:-3.7,x:19,y:-237.3},59).to({rotation:0,x:26.7,y:-247.7},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116.3,-338.2,287.1,643);
p.frameBounds = [rect, new cjs.Rectangle(-116.2,-338,287,643), new cjs.Rectangle(-116.2,-337.9,287,643.1), new cjs.Rectangle(-116.2,-337.7,286.9,643), new cjs.Rectangle(-116.1,-338,287.9,643.5), new cjs.Rectangle(-116.1,-337.9,287.9,643.5), new cjs.Rectangle(-116.1,-337.7,287.8,643.5), new cjs.Rectangle(-116,-337.6,287.8,643.6), new cjs.Rectangle(-116,-337.9,288.8,644), new cjs.Rectangle(-116,-337.7,288.7,644), new cjs.Rectangle(-115.9,-337.6,288.7,644.1), new cjs.Rectangle(-115.9,-337.4,288.7,644.1), new cjs.Rectangle(-115.9,-337.6,289.6,644.5), new cjs.Rectangle(-115.8,-337.5,289.5,644.5), new cjs.Rectangle(-115.8,-337.4,289.5,644.5), new cjs.Rectangle(-115.8,-337.2,289.5,644.6), new cjs.Rectangle(-115.7,-337.5,290.5,645), new cjs.Rectangle(-115.7,-337.3,290.4,645), new cjs.Rectangle(-115.7,-337.2,290.4,645), new cjs.Rectangle(-115.6,-337.1,290.3,645.1), new cjs.Rectangle(-115.6,-337.3,291.3,645.5), new cjs.Rectangle(-115.6,-337.2,291.3,645.5), new cjs.Rectangle(-115.5,-337,291.2,645.6), new cjs.Rectangle(-115.5,-336.9,291.2,645.6), new cjs.Rectangle(-115.5,-337.1,292.3,645.9), new cjs.Rectangle(-115.4,-337,292.1,646), new cjs.Rectangle(-115.4,-336.8,292.1,646), new cjs.Rectangle(-115.4,-336.6,292,646), new cjs.Rectangle(-115.3,-336.9,293,646.5), new cjs.Rectangle(-115.3,-336.8,293,646.5), new cjs.Rectangle(-115.3,-336.6,292.9,646.5), new cjs.Rectangle(-115.2,-336.5,292.9,646.5), new cjs.Rectangle(-115.2,-336.7,293.9,646.9), new cjs.Rectangle(-115.2,-336.6,293.8,647), new cjs.Rectangle(-115.1,-336.5,293.8,647), new cjs.Rectangle(-115.1,-336.3,293.7,647), new cjs.Rectangle(-115.1,-336.5,294.7,647.4), new cjs.Rectangle(-115,-336.4,294.7,647.5), new cjs.Rectangle(-115,-336.2,294.6,647.5), new cjs.Rectangle(-115,-336.1,294.6,647.5), new cjs.Rectangle(-114.9,-336.3,295.6,647.9), new cjs.Rectangle(-114.9,-336.2,295.5,648), new cjs.Rectangle(-114.9,-336.1,295.5,648), new cjs.Rectangle(-114.8,-335.9,295.4,648), new cjs.Rectangle(-114.8,-336.1,296.4,648.3), new cjs.Rectangle(-114.7,-336,296.3,648.4), new cjs.Rectangle(-114.7,-335.9,296.3,648.5), new cjs.Rectangle(-114.7,-335.7,296.2,648.5), new cjs.Rectangle(-114.6,-336,297.3,648.9), new cjs.Rectangle(-114.6,-335.8,297.2,648.9), new cjs.Rectangle(-114.6,-335.7,297.1,648.9), new cjs.Rectangle(-114.5,-335.5,297,648.9), new cjs.Rectangle(-114.5,-335.8,298,649.4), new cjs.Rectangle(-114.5,-335.6,298,649.4), new cjs.Rectangle(-114.5,-335.5,298,649.4), new cjs.Rectangle(-114.5,-335.3,297.9,649.4), new cjs.Rectangle(-114.5,-335.6,299,649.9), new cjs.Rectangle(-114.5,-335.4,298.9,649.8), new cjs.Rectangle(-114.5,-335.3,298.9,649.9), new cjs.Rectangle(-114.5,-335.4,299.7,650.2), new cjs.Rectangle(-114.5,-335.2,298.9,649.8), new cjs.Rectangle(-114.5,-335.4,298.9,649.8), new cjs.Rectangle(-114.5,-335.4,299,649.7), new cjs.Rectangle(-114.5,-335.3,297.9,649.5), new cjs.Rectangle(-114.5,-335.4,298,649.3), new cjs.Rectangle(-114.5,-335.6,298,649.4), new cjs.Rectangle(-114.5,-335.7,298,649.4), new cjs.Rectangle(-114.5,-335.5,296.9,649), new cjs.Rectangle(-114.6,-335.6,297,648.9), new cjs.Rectangle(-114.6,-335.8,297.2,648.9), new cjs.Rectangle(-114.6,-335.9,297.2,648.8), new cjs.Rectangle(-114.7,-335.6,296.2,648.4), new cjs.Rectangle(-114.7,-335.8,296.3,648.5), new cjs.Rectangle(-114.7,-336,296.3,648.4), new cjs.Rectangle(-114.8,-336.1,296.4,648.4), new cjs.Rectangle(-114.8,-335.8,295.4,648), new cjs.Rectangle(-114.8,-336,295.4,648), new cjs.Rectangle(-114.9,-336.2,295.5,648), new cjs.Rectangle(-114.9,-336.3,295.5,647.9), new cjs.Rectangle(-114.9,-336,294.5,647.5), new cjs.Rectangle(-115,-336.2,294.5,647.5), new cjs.Rectangle(-115,-336.3,294.7,647.5), new cjs.Rectangle(-115,-336.5,294.7,647.4), new cjs.Rectangle(-115.1,-336.3,293.7,647.1), new cjs.Rectangle(-115.1,-336.4,293.8,647), new cjs.Rectangle(-115.1,-336.5,293.7,647), new cjs.Rectangle(-115.2,-336.7,293.9,647), new cjs.Rectangle(-115.2,-336.4,292.8,646.6), new cjs.Rectangle(-115.2,-336.6,292.9,646.5), new cjs.Rectangle(-115.3,-336.7,293,646.5), new cjs.Rectangle(-115.3,-336.8,293,646.4), new cjs.Rectangle(-115.3,-336.6,292,646), new cjs.Rectangle(-115.4,-336.7,291.9,646), new cjs.Rectangle(-115.4,-336.8,292.1,645.9), new cjs.Rectangle(-115.4,-337,292.2,646), new cjs.Rectangle(-115.5,-336.7,291.1,645.5), new cjs.Rectangle(-115.5,-336.9,291.2,645.5), new cjs.Rectangle(-115.5,-337,291.2,645.5), new cjs.Rectangle(-115.6,-337.2,291.3,645.5), new cjs.Rectangle(-115.6,-336.9,290.3,645.1), new cjs.Rectangle(-115.6,-337.1,290.3,645), new cjs.Rectangle(-115.7,-337.2,290.4,645), new cjs.Rectangle(-115.7,-337.4,290.5,645), new cjs.Rectangle(-115.7,-337.1,289.4,644.5), new cjs.Rectangle(-115.8,-337.3,289.5,644.6), new cjs.Rectangle(-115.8,-337.4,289.5,644.6), new cjs.Rectangle(-115.8,-337.6,289.5,644.5), new cjs.Rectangle(-115.9,-337.2,288.5,644), new cjs.Rectangle(-115.9,-337.4,288.6,644.1), new cjs.Rectangle(-115.9,-337.6,288.6,644), new cjs.Rectangle(-116,-337.7,288.8,644), new cjs.Rectangle(-116,-337.5,287.7,643.6), new cjs.Rectangle(-116,-337.6,287.8,643.6), new cjs.Rectangle(-116.1,-337.7,287.9,643.5), new cjs.Rectangle(-116.1,-337.9,287.9,643.5), new cjs.Rectangle(-116.1,-337.6,286.8,643.1), new cjs.Rectangle(-116.2,-337.8,286.8,643.1), new cjs.Rectangle(-116.2,-337.9,287,643.1), new cjs.Rectangle(-116.2,-338,287,643), new cjs.Rectangle(-116.3,-338.2,287.1,643)];


(lib.hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// headdress
	this.headdress = new lib.hero1_hat_all_mc();
	this.headdress.setTransform(-25.5,-313);

	this.timeline.addTween(cjs.Tween.get(this.headdress).to({rotation:-4.4,x:-40.5,y:-329.8},59).to({rotation:0,x:-25.5,y:-313},60).wait(1));

	// earrings
	this.earrings = new lib.hero1_earrings_all_mc();
	this.earrings.setTransform(-26.5,-145);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({scaleY:1,skewX:-0.4,skewY:-4.4,x:-28.5,y:-162.2},59).to({scaleY:1,skewX:0,skewY:0,x:-26.5,y:-145},60).wait(1));

	// body
	this.instance = new lib.hero1_finger_mc();
	this.instance.setTransform(84.5,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-35.5},59).to({y:-18.5},60).wait(1));

	// accessory
	this.accessory = new lib.hero1_wand_all_mc();
	this.accessory.setTransform(113.7,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.accessory).to({rotation:5.5,x:116.7,y:-84.5},59).to({rotation:0,x:113.7,y:-67.5},60).wait(1));

	// fringe
	this.fringe = new lib.hero1_fringe_all_mc();
	this.fringe.setTransform(-27.8,-250);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({rotation:-4.4,x:-37.9,y:-266.8},59).to({rotation:0,x:-27.8,y:-250},60).wait(1));

	// eyes
	this.eyes = new lib.hero1_eyes_all_mc();
	this.eyes.setTransform(-25.5,-208.7);

	this.timeline.addTween(cjs.Tween.get(this.eyes).to({rotation:-4.4,x:-32.4,y:-225.8},59).to({rotation:0,x:-25.5,y:-208.7},60).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero1_eyebrows_all_mc();
	this.eyebrows.setTransform(-25.5,-208.7);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).to({rotation:-4.4,x:-32.4,y:-225.8},59).to({rotation:0,x:-25.5,y:-208.7},60).wait(1));

	// shadows
	this.shadows = new lib.hero1_shadows_all_mc();
	this.shadows.setTransform(-25.5,-208.7);

	this.timeline.addTween(cjs.Tween.get(this.shadows).to({rotation:-4.4,x:-32.4,y:-225.8},59).to({rotation:0,x:-25.5,y:-208.7},60).wait(1));

	// lips
	this.lips = new lib.hero1_lips_all_mc();
	this.lips.setTransform(-25.5,-208.7);

	this.timeline.addTween(cjs.Tween.get(this.lips).to({rotation:-4.4,x:-32.4,y:-225.8},59).to({rotation:0,x:-25.5,y:-208.7},60).wait(1));

	// faceart
	this.faceart = new lib.hero1_faceart_all_mc();
	this.faceart.setTransform(-25.5,-208.7);

	this.timeline.addTween(cjs.Tween.get(this.faceart).to({rotation:-4.4,x:-32.4,y:-225.8},59).to({rotation:0,x:-25.5,y:-208.7},60).wait(1));

	// body
	this.instance_1 = new lib.hero1_head_mc();
	this.instance_1.setTransform(-25.5,-208.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-4.4,x:-32.4,y:-225.8},59).to({rotation:0,x:-25.5,y:-208.7},60).wait(1));

	// dress
	this.dress = new lib.hero1_dress_all_mc();
	this.dress.setTransform(-37.8,94);

	this.timeline.addTween(cjs.Tween.get(this.dress).to({y:77},59).to({y:94},60).wait(1));

	// body
	this.instance_2 = new lib.hero_1_body_1_mc();
	this.instance_2.setTransform(0.5,88.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:71.8},59).to({y:88.8},60).wait(1));

	// hair
	this.hair = new lib.hero1_hair_all_mc();
	this.hair.setTransform(-27.8,-250);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({rotation:-4.4,x:-37.9,y:-266.8},59).to({rotation:0,x:-27.8,y:-250},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-272.8,-360,470,664.8);
p.frameBounds = [rect, new cjs.Rectangle(-272.8,-360.3,470,664.8), new cjs.Rectangle(-272.8,-360.6,470,664.8), new cjs.Rectangle(-272.8,-360.9,470,664.8), new cjs.Rectangle(-272.8,-361.5,470,665.1), new cjs.Rectangle(-272.8,-361.7,470,665), new cjs.Rectangle(-272.8,-362,470,665.1), new cjs.Rectangle(-272.8,-362.5,470,665.3), new cjs.Rectangle(-272.8,-362.8,470,665.3), new cjs.Rectangle(-272.8,-363.1,470,665.3), new cjs.Rectangle(-272.8,-363.7,470,665.6), new cjs.Rectangle(-272.8,-363.9,470,665.6), new cjs.Rectangle(-272.8,-364.3,470,665.6), new cjs.Rectangle(-272.8,-364.6,470,665.6), new cjs.Rectangle(-272.8,-365.1,470,665.8), new cjs.Rectangle(-272.8,-365.4,470,665.8), new cjs.Rectangle(-272.8,-365.7,470,665.9), new cjs.Rectangle(-272.8,-366.2,470,666.1), new cjs.Rectangle(-272.8,-366.5,470,666.1), new cjs.Rectangle(-272.8,-366.8,470,666.1), new cjs.Rectangle(-272.8,-367.4,470,666.4), new cjs.Rectangle(-272.8,-367.6,470,666.3), new cjs.Rectangle(-272.8,-367.9,470,666.3), new cjs.Rectangle(-272.8,-368.3,470,666.4), new cjs.Rectangle(-272.8,-368.7,470,666.6), new cjs.Rectangle(-272.8,-369,470,666.6), new cjs.Rectangle(-272.8,-369.4,470,666.7), new cjs.Rectangle(-272.8,-369.8,470,666.8), new cjs.Rectangle(-272.8,-370.2,470,666.9), new cjs.Rectangle(-272.8,-370.5,470,666.9), new cjs.Rectangle(-272.8,-371,470,667.2), new cjs.Rectangle(-272.8,-371.3,470,667.1), new cjs.Rectangle(-272.8,-371.6,470,667.2), new cjs.Rectangle(-272.8,-371.9,470,667.2), new cjs.Rectangle(-272.8,-372.4,470,667.4), new cjs.Rectangle(-272.8,-372.7,470,667.4), new cjs.Rectangle(-272.8,-373,470,667.5), new cjs.Rectangle(-272.8,-373.5,470,667.7), new cjs.Rectangle(-272.8,-373.9,470,667.7), new cjs.Rectangle(-272.8,-374.1,470,667.7), new cjs.Rectangle(-272.8,-374.7,470,667.9), new cjs.Rectangle(-272.8,-375,470,668), new cjs.Rectangle(-272.8,-375.2,470,667.9), new cjs.Rectangle(-272.8,-375.6,470,668), new cjs.Rectangle(-272.8,-376.1,470,668.2), new cjs.Rectangle(-272.8,-376.4,470,668.2), new cjs.Rectangle(-272.8,-376.6,470,668.2), new cjs.Rectangle(-272.8,-377.2,470,668.4), new cjs.Rectangle(-272.8,-377.5,470,668.4), new cjs.Rectangle(-272.8,-377.8,470,668.5), new cjs.Rectangle(-272.8,-378.3,470,668.7), new cjs.Rectangle(-272.8,-378.6,470,668.7), new cjs.Rectangle(-272.8,-378.9,470,668.7), new cjs.Rectangle(-272.8,-379.2,470,668.8), new cjs.Rectangle(-272.8,-379.7,470,669), new cjs.Rectangle(-272.8,-380,470,669), new cjs.Rectangle(-272.8,-380.3,470,669), new cjs.Rectangle(-272.8,-380.8,470,669.2), new cjs.Rectangle(-272.8,-381,470,669.1), new cjs.Rectangle(-272.8,-381.5,470,669.3), new cjs.Rectangle(-272.8,-381.1,470,669.2), new cjs.Rectangle(-272.8,-380.8,470,669.2), new cjs.Rectangle(-272.8,-380.3,470,669), new cjs.Rectangle(-272.8,-380,470,669), new cjs.Rectangle(-272.8,-379.7,470,668.9), new cjs.Rectangle(-272.8,-379.2,470,668.7), new cjs.Rectangle(-272.8,-378.9,470,668.7), new cjs.Rectangle(-272.8,-378.6,470,668.7), new cjs.Rectangle(-272.8,-378.3,470,668.7), new cjs.Rectangle(-272.8,-377.8,470,668.5), new cjs.Rectangle(-272.8,-377.6,470,668.5), new cjs.Rectangle(-272.8,-377.3,470,668.5), new cjs.Rectangle(-272.8,-376.7,470,668.2), new cjs.Rectangle(-272.8,-376.5,470,668.2), new cjs.Rectangle(-272.8,-376.1,470,668.1), new cjs.Rectangle(-272.8,-375.8,470,668.2), new cjs.Rectangle(-272.8,-375.3,470,667.9), new cjs.Rectangle(-272.8,-375,470,667.9), new cjs.Rectangle(-272.8,-374.7,470,667.8), new cjs.Rectangle(-272.8,-374.2,470,667.7), new cjs.Rectangle(-272.8,-373.9,470,667.7), new cjs.Rectangle(-272.8,-373.7,470,667.7), new cjs.Rectangle(-272.8,-373.1,470,667.4), new cjs.Rectangle(-272.8,-372.9,470,667.5), new cjs.Rectangle(-272.8,-372.6,470,667.5), new cjs.Rectangle(-272.8,-372.3,470,667.4), new cjs.Rectangle(-272.8,-371.8,470,667.2), new cjs.Rectangle(-272.8,-371.4,470,667.2), new cjs.Rectangle(-272.8,-371.1,470,667.1), new cjs.Rectangle(-272.8,-370.6,470,666.9), new cjs.Rectangle(-272.8,-370.3,470,666.9), new cjs.Rectangle(-272.8,-370,470,666.8), new cjs.Rectangle(-272.8,-369.5,470,666.7), new cjs.Rectangle(-272.8,-369.2,470,666.6), new cjs.Rectangle(-272.8,-369,470,666.7), new cjs.Rectangle(-272.8,-368.6,470,666.6), new cjs.Rectangle(-272.8,-368.1,470,666.4), new cjs.Rectangle(-272.8,-367.8,470,666.3), new cjs.Rectangle(-272.8,-367.5,470,666.4), new cjs.Rectangle(-272.8,-367,470,666.2), new cjs.Rectangle(-272.8,-366.7,470,666.1), new cjs.Rectangle(-272.8,-366.4,470,666.1), new cjs.Rectangle(-272.8,-366.1,470,666.1), new cjs.Rectangle(-272.8,-365.5,470,665.8), new cjs.Rectangle(-272.8,-365.4,470,665.9), new cjs.Rectangle(-272.8,-365,470,665.9), new cjs.Rectangle(-272.8,-364.6,470,665.7), new cjs.Rectangle(-272.8,-364.2,470,665.6), new cjs.Rectangle(-272.8,-363.8,470,665.5), new cjs.Rectangle(-272.8,-363.4,470,665.3), new cjs.Rectangle(-272.8,-363.1,470,665.3), new cjs.Rectangle(-272.8,-362.8,470,665.4), new cjs.Rectangle(-272.8,-362.5,470,665.3), new cjs.Rectangle(-272.8,-362,470,665.1), new cjs.Rectangle(-272.8,-361.7,470,665.1), new cjs.Rectangle(-272.8,-361.4,470,665.1), new cjs.Rectangle(-272.8,-360.9,470,664.8), new cjs.Rectangle(-272.8,-360.6,470,664.8), new cjs.Rectangle(-272.8,-360.3,470,664.8), new cjs.Rectangle(-272.8,-360,470,664.8)];


(lib.hero_1_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero1_earrings_main_mc();
	this.instance.setTransform(-26.5,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:-0.4,skewY:-4.4,x:-28.5,y:-157.2},49).to({scaleY:1,skewX:0,skewY:0,x:-26.5,y:-145},50).wait(1));

	// animation
	this.instance_1 = new lib.hero1_finger_mc();
	this.instance_1.setTransform(84.5,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-30.5},49).to({y:-18.5},50).wait(1));

	// animation
	this.instance_2 = new lib.hero1_wand_main_mc();
	this.instance_2.setTransform(113.7,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:5.5,x:116.7,y:-79.5},49).to({rotation:0,x:113.7,y:-67.5},50).wait(1));

	// animation
	this.instance_3 = new lib.hero1_fringe_main_mc();
	this.instance_3.setTransform(-27.8,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-4.4,x:-37.9,y:-261.8},49).to({rotation:0,x:-27.8,y:-250},50).wait(1));

	// animation
	this.instance_4 = new lib.hero1_eyes_main_mc();
	this.instance_4.setTransform(-25.5,-208.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-4.4,x:-32.4,y:-220.8},49).to({rotation:0,x:-25.5,y:-208.7},50).wait(1));

	// animation
	this.instance_5 = new lib.hero1_eyebrows_main_mc();
	this.instance_5.setTransform(-25.5,-208.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-4.4,x:-32.4,y:-220.8},49).to({rotation:0,x:-25.5,y:-208.7},50).wait(1));

	// animation
	this.instance_6 = new lib.hero1_shadows_main_mc();
	this.instance_6.setTransform(-25.5,-208.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-4.4,x:-32.4,y:-220.8},49).to({rotation:0,x:-25.5,y:-208.7},50).wait(1));

	// animation
	this.instance_7 = new lib.hero1_faceart_main_mc();
	this.instance_7.setTransform(-25.5,-208.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-4.4,x:-32.4,y:-220.8},49).to({rotation:0,x:-25.5,y:-208.7},50).wait(1));

	// animation
	this.instance_8 = new lib.hero1_head_mc();
	this.instance_8.setTransform(-25.5,-208.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-4.4,x:-32.4,y:-220.8},49).to({rotation:0,x:-25.5,y:-208.7},50).wait(1));

	// animation
	this.instance_9 = new lib.hero1_dress_main_mc();
	this.instance_9.setTransform(-37.8,94);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:82},49).to({y:94},50).wait(1));

	// animation
	this.instance_10 = new lib.hero_1_body_1_mc();
	this.instance_10.setTransform(0.5,88.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:76.8},49).to({y:88.8},50).wait(1));

	// animation
	this.instance_11 = new lib.hero1_hair_main_mc();
	this.instance_11.setTransform(-27.8,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({rotation:-4.4,x:-37.9,y:-261.8},49).to({rotation:0,x:-27.8,y:-250},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-295.2,-312,531,616.8);
p.frameBounds = [rect, new cjs.Rectangle(-295.2,-312.2,531,616.8), new cjs.Rectangle(-295.2,-312.5,531,616.8), new cjs.Rectangle(-295.2,-313,531,617.1), new cjs.Rectangle(-295.2,-313.4,531,617.2), new cjs.Rectangle(-295.2,-313.6,531,617.2), new cjs.Rectangle(-295.2,-314.2,531,617.6), new cjs.Rectangle(-295.2,-314.5,531,617.6), new cjs.Rectangle(-295.2,-314.8,531,617.7), new cjs.Rectangle(-295.2,-315.3,531,617.9), new cjs.Rectangle(-295.2,-315.6,531,618), new cjs.Rectangle(-295.2,-315.9,531,618), new cjs.Rectangle(-295.2,-316.5,531,618.3), new cjs.Rectangle(-295.2,-316.8,531,618.4), new cjs.Rectangle(-295.2,-317.3,531,618.7), new cjs.Rectangle(-295.2,-317.6,531,618.7), new cjs.Rectangle(-295.2,-317.8,531,618.7), new cjs.Rectangle(-295.2,-318.4,531,619.1), new cjs.Rectangle(-295.2,-318.7,531,619.1), new cjs.Rectangle(-295.2,-319,531,619.2), new cjs.Rectangle(-295.2,-319.5,531,619.4), new cjs.Rectangle(-295.2,-319.8,531,619.5), new cjs.Rectangle(-295.2,-320.1,531,619.5), new cjs.Rectangle(-295.2,-320.7,531,619.9), new cjs.Rectangle(-295.2,-321,531,619.9), new cjs.Rectangle(-295.2,-321.6,531,620.3), new cjs.Rectangle(-295.2,-321.8,531,620.3), new cjs.Rectangle(-295.2,-322.1,531,620.3), new cjs.Rectangle(-295.2,-322.7,531,620.7), new cjs.Rectangle(-295.2,-323,531,620.7), new cjs.Rectangle(-295.2,-323.2,531,620.7), new cjs.Rectangle(-295.2,-323.8,531,621), new cjs.Rectangle(-295.2,-324.1,531,621), new cjs.Rectangle(-295.2,-324.4,531,621.1), new cjs.Rectangle(-295.2,-325,531,621.4), new cjs.Rectangle(-295.2,-325.2,531,621.5), new cjs.Rectangle(-295.2,-325.8,531,621.8), new cjs.Rectangle(-295.2,-326,531,621.8), new cjs.Rectangle(-295.2,-326.3,531,621.8), new cjs.Rectangle(-295.2,-326.9,531,622.1), new cjs.Rectangle(-295.2,-327.2,531,622.2), new cjs.Rectangle(-295.2,-327.4,531,622.2), new cjs.Rectangle(-295.2,-328,531,622.5), new cjs.Rectangle(-295.2,-328.3,531,622.5), new cjs.Rectangle(-295.2,-328.5,531,622.5), new cjs.Rectangle(-295.2,-329.1,531,622.9), new cjs.Rectangle(-295.2,-329.4,531,622.9), new cjs.Rectangle(-295.2,-329.9,531,623.2), new cjs.Rectangle(-295.2,-330.2,531,623.3), new cjs.Rectangle(-295.2,-330.7,531,623.5), new cjs.Rectangle(-295.2,-330.2,531,623.2), new cjs.Rectangle(-295.2,-330,531,623.3), new cjs.Rectangle(-295.2,-329.4,531,622.9), new cjs.Rectangle(-295.2,-329.1,531,622.8), new cjs.Rectangle(-295.2,-328.6,531,622.6), new cjs.Rectangle(-295.2,-328.3,531,622.6), new cjs.Rectangle(-295.2,-328.1,531,622.6), new cjs.Rectangle(-295.2,-327.4,531,622.1), new cjs.Rectangle(-295.2,-327.2,531,622.2), new cjs.Rectangle(-295.2,-327,531,622.2), new cjs.Rectangle(-295.2,-326.3,531,621.8), new cjs.Rectangle(-295.2,-326.1,531,621.8), new cjs.Rectangle(-295.2,-325.9,531,621.8), new cjs.Rectangle(-295.2,-325.3,531,621.5), new cjs.Rectangle(-295.2,-325,531,621.4), new cjs.Rectangle(-295.2,-324.7,531,621.4), new cjs.Rectangle(-295.2,-324.2,531,621.1), new cjs.Rectangle(-295.2,-323.9,531,621), new cjs.Rectangle(-295.2,-323.6,531,621), new cjs.Rectangle(-295.2,-323.1,531,620.7), new cjs.Rectangle(-295.2,-322.8,531,620.7), new cjs.Rectangle(-295.2,-322.2,531,620.3), new cjs.Rectangle(-295.2,-321.9,531,620.2), new cjs.Rectangle(-295.2,-321.7,531,620.3), new cjs.Rectangle(-295.2,-321.1,531,619.9), new cjs.Rectangle(-295.2,-320.8,531,619.9), new cjs.Rectangle(-295.2,-320.6,531,619.9), new cjs.Rectangle(-295.2,-320,531,619.5), new cjs.Rectangle(-295.2,-319.7,531,619.5), new cjs.Rectangle(-295.2,-319.4,531,619.4), new cjs.Rectangle(-295.2,-318.9,531,619.1), new cjs.Rectangle(-295.2,-318.6,531,619.1), new cjs.Rectangle(-295.2,-318.4,531,619.1), new cjs.Rectangle(-295.2,-317.8,531,618.8), new cjs.Rectangle(-295.2,-317.5,531,618.7), new cjs.Rectangle(-295.2,-316.9,531,618.3), new cjs.Rectangle(-295.2,-316.7,531,618.3), new cjs.Rectangle(-295.2,-316.4,531,618.3), new cjs.Rectangle(-295.2,-315.8,531,618), new cjs.Rectangle(-295.2,-315.5,531,617.9), new cjs.Rectangle(-295.2,-315.3,531,617.9), new cjs.Rectangle(-295.2,-314.7,531,617.6), new cjs.Rectangle(-295.2,-314.4,531,617.5), new cjs.Rectangle(-295.2,-314.2,531,617.5), new cjs.Rectangle(-295.2,-313.6,531,617.2), new cjs.Rectangle(-295.2,-313.4,531,617.2), new cjs.Rectangle(-295.2,-313,531,617.1), new cjs.Rectangle(-295.2,-312.5,531,616.8), new cjs.Rectangle(-295.2,-312.2,531,616.8), new cjs.Rectangle(-295.2,-312,531,616.8)];


(lib.headdress_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.525,0.525,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-21,42,42);
p.frameBounds = [rect];


(lib.glasses_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.525,0.525,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-21,42,42);
p.frameBounds = [rect];


(lib.filters_exit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.filters_body_exit_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},19).to({scaleX:1,scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect, new cjs.Rectangle(-44.7,-24.8,89.6,49.8), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.2,-24.6,88.6,49.2), new cjs.Rectangle(-44,-24.4,88.1,49), new cjs.Rectangle(-43.8,-24.3,87.7,48.7), new cjs.Rectangle(-43.5,-24.2,87.2,48.4), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.1,-23.9,86.2,47.9), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-42.6,-23.6,85.3,47.3), new cjs.Rectangle(-42.3,-23.5,84.8,47.1), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-41.9,-23.2,83.9,46.6), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.4,-23,82.9,46.1), new cjs.Rectangle(-41.2,-22.8,82.4,45.8), new cjs.Rectangle(-40.9,-22.7,82,45.6), new cjs.Rectangle(-40.7,-22.6,81.5,45.3), new cjs.Rectangle(-40.5,-22.5,81,45), new cjs.Rectangle(-40.6,-22.5,81.3,45.2), new cjs.Rectangle(-40.7,-22.6,81.6,45.3), new cjs.Rectangle(-40.9,-22.7,81.9,45.5), new cjs.Rectangle(-41,-22.8,82.2,45.7), new cjs.Rectangle(-41.2,-22.9,82.5,45.8), new cjs.Rectangle(-41.3,-22.9,82.8,46), new cjs.Rectangle(-41.5,-23,83.1,46.2), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.8,-23.2,83.7,46.5), new cjs.Rectangle(-41.9,-23.3,84,46.7), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-42.2,-23.4,84.6,47), new cjs.Rectangle(-42.4,-23.5,84.9,47.2), new cjs.Rectangle(-42.5,-23.6,85.2,47.3), new cjs.Rectangle(-42.7,-23.7,85.5,47.5), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-43,-23.9,86.1,47.8), new cjs.Rectangle(-43.1,-23.9,86.4,48), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.4,-24.1,87,48.3), new cjs.Rectangle(-43.6,-24.2,87.3,48.5), new cjs.Rectangle(-43.7,-24.3,87.6,48.7), new cjs.Rectangle(-43.9,-24.4,87.9,48.8), new cjs.Rectangle(-44,-24.4,88.2,49), new cjs.Rectangle(-44.2,-24.5,88.5,49.2), new cjs.Rectangle(-44.3,-24.6,88.8,49.3), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.6,-24.8,89.4,49.7), new cjs.Rectangle(-44.8,-24.9,89.7,49.8), new cjs.Rectangle(-45,-25,90,50)];


(lib.faceart_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.525,0.525,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-21,42,42);
p.frameBounds = [rect];


(lib.earrings_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.525,0.525,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-21,42,42);
p.frameBounds = [rect];


(lib.dress_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.525,0.525,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-21,42,42);
p.frameBounds = [rect];


(lib.current_hairstyle_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_hairstyle_2_mc();
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},39).wait(20).to({alpha:0.898},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-175,-195,350,390);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_face_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_face_2_mc();
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.012},39).wait(20).to({alpha:0.898},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-175,330,350);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.bag_top_mc = function(mode,startPosition,loop) {
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
	this.instance = new lib.bag_top_img();
	this.instance.setTransform(-260,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// table
	this.instance_1 = new lib.table_mc();
	this.instance_1.setTransform(0,325);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-345,-210,690,707);
p.frameBounds = [rect];


(lib.animation_hat_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hat_main_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({rotation:5},10).to({rotation:-5},20).to({rotation:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94,-81,180,130);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-94.2,-81.5,180.7,131), new cjs.Rectangle(-94.6,-82.3,181.8,132.6), new cjs.Rectangle(-95.1,-83.1,183,134.1), new cjs.Rectangle(-95.4,-83.9,184,135.6), new cjs.Rectangle(-95.8,-84.7,185.1,137.2), new cjs.Rectangle(-96.2,-85.5,186.2,138.7), new cjs.Rectangle(-96.6,-86.2,187.1,140.2), new cjs.Rectangle(-97,-87,188.2,141.7), new cjs.Rectangle(-97.4,-87.8,189.3,143.2), new cjs.Rectangle(-97.9,-88.9,190.6,145.2), new cjs.Rectangle(-97.4,-87.8,189.3,143.2), new cjs.Rectangle(-97,-87,188.2,141.7), new cjs.Rectangle(-96.6,-86.2,187.1,140.2), new cjs.Rectangle(-96.2,-85.4,186.2,138.7), new cjs.Rectangle(-95.8,-84.7,185.1,137.1), new cjs.Rectangle(-95.4,-83.9,184,135.6), new cjs.Rectangle(-95.1,-83.1,183,134.1), new cjs.Rectangle(-94.6,-82.3,181.8,132.6), new cjs.Rectangle(-94.2,-81.5,180.7,131), new cjs.Rectangle(-93.9,-80.9,180,130), new cjs.Rectangle(-94.4,-81.4,180.7,131), new cjs.Rectangle(-95.1,-82.2,181.8,132.6), new cjs.Rectangle(-95.8,-82.9,183,134.1), new cjs.Rectangle(-96.5,-83.6,184,135.6), new cjs.Rectangle(-97.1,-84.3,185.1,137.1), new cjs.Rectangle(-97.8,-85,186.1,138.6), new cjs.Rectangle(-98.5,-85.8,187.2,140.2), new cjs.Rectangle(-99.1,-86.5,188.2,141.7), new cjs.Rectangle(-99.7,-87.2,189.2,143.2), new cjs.Rectangle(-100.7,-88.2,190.6,145.2), new cjs.Rectangle(-99.7,-87.2,189.3,143.2), new cjs.Rectangle(-99.1,-86.5,188.2,141.7), new cjs.Rectangle(-98.5,-85.8,187.2,140.2), new cjs.Rectangle(-97.8,-85.1,186.1,138.6), new cjs.Rectangle(-97.1,-84.3,185.1,137.1), new cjs.Rectangle(-96.5,-83.6,184,135.6), new cjs.Rectangle(-95.8,-82.9,183,134.1), new cjs.Rectangle(-95.1,-82.2,181.8,132.6), new cjs.Rectangle(-94.4,-81.4,180.7,131), new cjs.Rectangle(-94,-81,180,130)];


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
p.nominalBounds = rect = new cjs.Rectangle(-195,-270,390,540);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.accessory_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.525,0.525,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-21,42,42);
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


(lib.shine_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.shine_3_1_mc("synched",0);
	this.instance.setTransform(0,0,0.44,0.44,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0},9).to({scaleX:0.14,scaleY:0.14,rotation:135},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.5,-11,22,22);
p.frameBounds = [rect, new cjs.Rectangle(-14,-14.4,29.1,29.1), new cjs.Rectangle(-17.5,-17.8,36.1,36.1), new cjs.Rectangle(-20.8,-21.1,42.8,42.8), new cjs.Rectangle(-23.6,-23.8,48.5,48.5), new cjs.Rectangle(-25.9,-25.8,52.9,52.9), new cjs.Rectangle(-27.3,-27,55.5,55.5), new cjs.Rectangle(-27.7,-27.1,56.1,56.1), new cjs.Rectangle(-26.9,-26.2,54.3,54.3), new cjs.Rectangle(-25,-24,50,50), new cjs.Rectangle(-27.7,-26.6,55.1,55.1), new cjs.Rectangle(-28.1,-27,55.6,55.6), new cjs.Rectangle(-26.5,-25.5,52.2,52.2), new cjs.Rectangle(-23.4,-22.4,45.7,45.7), new cjs.Rectangle(-19.1,-18.3,37.2,37.2), new cjs.Rectangle(-14.2,-13.7,27.6,27.6), new cjs.Rectangle(-11,-10.6,21.3,21.3), new cjs.Rectangle(-10.1,-9.8,19.6,19.6), new cjs.Rectangle(-7.9,-7.8,15.5,15.5), new cjs.Rectangle(-5,-4.9,9.8,9.8)];


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
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
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
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.012},14).to({scaleX:1,scaleY:1,alpha:0.5},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect, new cjs.Rectangle(-24.6,-24.6,49.3,49.3), new cjs.Rectangle(-24.2,-24.2,48.6,48.6), new cjs.Rectangle(-23.9,-23.9,47.8,47.8), new cjs.Rectangle(-23.5,-23.5,47.2,47.2), new cjs.Rectangle(-23.2,-23.2,46.5,46.5), new cjs.Rectangle(-22.8,-22.8,45.7,45.7), new cjs.Rectangle(-22.5,-22.5,45,45), new cjs.Rectangle(-22.1,-22.1,44.3,44.3), new cjs.Rectangle(-21.7,-21.7,43.6,43.6), new cjs.Rectangle(-21.4,-21.4,42.8,42.8), new cjs.Rectangle(-21,-21,42.2,42.2), new cjs.Rectangle(-20.7,-20.7,41.5,41.5), new cjs.Rectangle(-20.3,-20.3,40.7,40.7), new cjs.Rectangle(-20,-20,40,40), new cjs.Rectangle(-20.3,-20.3,40.7,40.7), new cjs.Rectangle(-20.6,-20.6,41.3,41.3), new cjs.Rectangle(-20.9,-20.9,42,42), new cjs.Rectangle(-21.3,-21.3,42.7,42.7), new cjs.Rectangle(-21.6,-21.6,43.3,43.3), new cjs.Rectangle(-21.9,-21.9,44,44), new cjs.Rectangle(-22.3,-22.3,44.7,44.7), new cjs.Rectangle(-22.6,-22.6,45.3,45.3), new cjs.Rectangle(-22.9,-22.9,46,46), new cjs.Rectangle(-23.3,-23.3,46.7,46.7), new cjs.Rectangle(-23.6,-23.6,47.3,47.3), new cjs.Rectangle(-23.9,-23.9,48,48), new cjs.Rectangle(-24.3,-24.3,48.7,48.7), new cjs.Rectangle(-24.6,-24.6,49.3,49.3), new cjs.Rectangle(-25,-25,50,50)];


(lib.blinking_light_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_light_1_2_mc();
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.012},14).to({scaleX:1,scaleY:1,alpha:0.5},15).wait(1));

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


(lib.nav_anim_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXK7IAA11ISvAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-70,120,140);
p.frameBounds = [rect];


(lib.nav_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({x:5},5).to({x:-5},10).to({x:0},5).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.039)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDPAACSCTQCTCTAADNQAADOiTCTQiSCTjPAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-50,-50,101,100), new cjs.Rectangle(-50,-50,102,100), new cjs.Rectangle(-50,-50,103,100), new cjs.Rectangle(-50,-50,104,100), new cjs.Rectangle(-50,-50,105,100), new cjs.Rectangle(-50,-50,104,100), new cjs.Rectangle(-50,-50,103,100), new cjs.Rectangle(-50,-50,102,100), new cjs.Rectangle(-50,-50,101,100), new cjs.Rectangle(-50,-50,100,100), new cjs.Rectangle(-51,-50,101,100), new cjs.Rectangle(-52,-50,102,100), new cjs.Rectangle(-53,-50,103,100), new cjs.Rectangle(-54,-50,104,100), new cjs.Rectangle(-55,-50,105,100), new cjs.Rectangle(-54,-50,104,100), new cjs.Rectangle(-53,-50,103,100), new cjs.Rectangle(-52,-50,102,100), new cjs.Rectangle(-51,-50,101,100), new cjs.Rectangle(-50,-50,100,100)];


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
	this.instance.setTransform(-195,-270);

	this.instance_1 = new lib.location_1_6_img();
	this.instance_1.setTransform(-195,-270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_mc();

	this.instance_3 = new lib.animation_current_location_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgcHAooMAAAhROMA4PAAAMAAABROg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-270,390,540);
p.frameBounds = [rect, rect, rect];


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_5_img();
	this.instance.setTransform(-195,-270);

	this.instance_1 = new lib.location_1_5_img();
	this.instance_1.setTransform(-195,-270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_mc();

	this.instance_3 = new lib.animation_current_location_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgcHAooMAAAhROMA4PAAAMAAABROg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-270,390,540);
p.frameBounds = [rect, rect, rect];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_4_img();
	this.instance.setTransform(-195,-270);

	this.instance_1 = new lib.location_1_4_img();
	this.instance_1.setTransform(-195,-270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_mc();

	this.instance_3 = new lib.animation_current_location_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgcHAooMAAAhROMA4PAAAMAAABROg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-270,390,540);
p.frameBounds = [rect, rect, rect];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_3_img();
	this.instance.setTransform(-195,-270);

	this.instance_1 = new lib.location_1_3_img();
	this.instance_1.setTransform(-195,-270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_mc();

	this.instance_3 = new lib.animation_current_location_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgcHAooMAAAhROMA4PAAAMAAABROg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-270,390,540);
p.frameBounds = [rect, rect, rect];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_2_img();
	this.instance.setTransform(-195,-270);

	this.instance_1 = new lib.location_1_2_img();
	this.instance_1.setTransform(-195,-270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_mc();

	this.instance_3 = new lib.animation_current_location_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgcHAooMAAAhROMA4PAAAMAAABROg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-270,390,540);
p.frameBounds = [rect, rect, rect];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_1_img();
	this.instance.setTransform(-195,-270);

	this.instance_1 = new lib.location_1_1_img();
	this.instance_1.setTransform(-195,-270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_mc();

	this.instance_3 = new lib.animation_current_location_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgcHAooMAAAhROMA4PAAAMAAABROg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-195,-270,390,540);
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

	// hero_1
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(245,360);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:425,y:1500},0).wait(1).to({y:360},0).wait(1).to({x:245},0).wait(1).to({x:425,y:1500},0).wait(1).to({y:360},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:245},0).wait(1).to({scaleX:1,scaleY:1,x:425,y:1500},0).wait(1).to({y:360},0).wait(1).to({x:245},0).wait(1).to({x:425,y:1500},0).wait(1).to({x:405,y:360},0).wait(1));

	// hero_2
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(550,360);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:375},0).wait(1).to({y:1500},0).wait(1).to({x:550,y:360},0).wait(1).to({x:375},0).wait(1).to({y:1500},0).wait(1).to({x:550,y:360},0).wait(1).to({x:375},0).wait(1).to({y:1500},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:550,y:360},0).wait(1).to({scaleX:1,scaleY:1,x:375},0).wait(1).to({x:374,y:1500},0).wait(1));

	// bg
	this.instance = new lib.background_5_img();
	this.instance.setTransform(-400,0);

	this.instance_1 = new lib.background_7_img();
	this.instance_1.setTransform(-400,0);

	this.instance_2 = new lib.background_6_img();
	this.instance_2.setTransform(-400,0);

	this.instance_3 = new lib.background_1_img();
	this.instance_3.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,664.8);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,0,1600,1804.8), rect, new cjs.Rectangle(-400,0,1600,664.8), rect=new cjs.Rectangle(-400,0,1600,1804.8), rect, new cjs.Rectangle(-400,0,1600,664.8), rect=new cjs.Rectangle(-400,0,1600,1804.8), rect, new cjs.Rectangle(-400,0,1600,664.8), rect=new cjs.Rectangle(-400,0,1600,1804.8), rect];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.instance = new lib.hero_1_main_mc();
	this.instance.setTransform(245,360);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero_2
	this.instance_1 = new lib.hero_2_main_mc();
	this.instance_1.setTransform(550,380);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.2,41.8,771,643);
p.frameBounds = [rect];


(lib.frame_locations_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:74,end:139});

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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(20).call(this.frame_54).wait(86));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:-600},0).wait(23).to({y:100},15).to({y:0},5).wait(50).to({y:-50},5).to({y:600},10).wait(31));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({y:-600},0).wait(43).to({y:100},15).to({y:0},5).wait(45).to({y:-50},5).to({y:600},10).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-385,-270,770,540);
p.frameBounds = [rect, rect=new cjs.Rectangle(-385,-870,770,540), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-870,770,586.7), new cjs.Rectangle(-385,-870,770,633.4), new cjs.Rectangle(-385,-870,770,680), new cjs.Rectangle(-385,-870,770,726.7), new cjs.Rectangle(-385,-870,770,773.4), new cjs.Rectangle(-385,-870,770,820), new cjs.Rectangle(-385,-870,770,866.7), new cjs.Rectangle(-385,-870,770,913.4), new cjs.Rectangle(-385,-870,770,960), new cjs.Rectangle(-385,-870,770,1006.7), new cjs.Rectangle(-385,-870,770,1053.4), new cjs.Rectangle(-385,-870,770,1100), new cjs.Rectangle(-385,-870,770,1146.7), new cjs.Rectangle(-385,-870,770,1193.4), new cjs.Rectangle(-385,-870,770,1240), new cjs.Rectangle(-385,-870,770,1220), new cjs.Rectangle(-385,-870,770,1200), new cjs.Rectangle(-385,-870,770,1180), new cjs.Rectangle(-385,-870,770,1160), new cjs.Rectangle(-385,-870,770,1140), new cjs.Rectangle(-385,-823.3,770,1093.4), new cjs.Rectangle(-385,-776.6,770,1046.7), new cjs.Rectangle(-385,-730,770,1000), new cjs.Rectangle(-385,-683.3,770,953.4), new cjs.Rectangle(-385,-636.6,770,906.7), new cjs.Rectangle(-385,-590,770,860), new cjs.Rectangle(-385,-543.3,770,813.4), new cjs.Rectangle(-385,-496.6,770,766.7), new cjs.Rectangle(-385,-450,770,720), new cjs.Rectangle(-385,-403.3,770,673.4), new cjs.Rectangle(-385,-356.6,770,626.7), new cjs.Rectangle(-385,-310,770,580), new cjs.Rectangle(-385,-270,770,546.7), new cjs.Rectangle(-385,-270,770,593.4), new cjs.Rectangle(-385,-270,770,640), new cjs.Rectangle(-385,-270,770,620), new cjs.Rectangle(-385,-270,770,600), new cjs.Rectangle(-385,-270,770,580), new cjs.Rectangle(-385,-270,770,560), rect=new cjs.Rectangle(-385,-270,770,540), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-280,770,550), new cjs.Rectangle(-385,-290,770,560), new cjs.Rectangle(-385,-300,770,570), new cjs.Rectangle(-385,-310,770,580), new cjs.Rectangle(-385,-320,770,590), new cjs.Rectangle(-385,-270,770,555), new cjs.Rectangle(-385,-270,770,620), new cjs.Rectangle(-385,-270,770,685), new cjs.Rectangle(-385,-270,770,750), new cjs.Rectangle(-385,-270,770,815), new cjs.Rectangle(-385,-270,770,880), new cjs.Rectangle(-385,-270,770,945), new cjs.Rectangle(-385,-270,770,1010), new cjs.Rectangle(-385,-270,770,1075), new cjs.Rectangle(-385,-270,770,1140), new cjs.Rectangle(-385,-280,770,1150), new cjs.Rectangle(-385,-290,770,1160), new cjs.Rectangle(-385,-300,770,1170), new cjs.Rectangle(-385,-310,770,1180), new cjs.Rectangle(-385,-320,770,1190), new cjs.Rectangle(-385,-255,770,1125), new cjs.Rectangle(-385,-190,770,1060), new cjs.Rectangle(-385,-125,770,995), new cjs.Rectangle(-385,-60,770,930), new cjs.Rectangle(-385,5,770,865), new cjs.Rectangle(-385,70,770,800), new cjs.Rectangle(-385,135,770,735), new cjs.Rectangle(-385,200,770,670), new cjs.Rectangle(-385,265,770,605), rect=new cjs.Rectangle(-385,330,770,540), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":74,"end":139});

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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(20).call(this.frame_54).wait(86));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({y:-600},0).wait(23).to({y:100},15).to({y:0},5).wait(50).to({y:-50},5).to({y:600},10).wait(31));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:-600},0).wait(43).to({y:100},15).to({y:0},5).wait(45).to({y:-50},5).to({y:600},10).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-385,-270,770,540);
p.frameBounds = [rect, rect=new cjs.Rectangle(-385,-870,770,540), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-870,770,586.7), new cjs.Rectangle(-385,-870,770,633.4), new cjs.Rectangle(-385,-870,770,680), new cjs.Rectangle(-385,-870,770,726.7), new cjs.Rectangle(-385,-870,770,773.4), new cjs.Rectangle(-385,-870,770,820), new cjs.Rectangle(-385,-870,770,866.7), new cjs.Rectangle(-385,-870,770,913.4), new cjs.Rectangle(-385,-870,770,960), new cjs.Rectangle(-385,-870,770,1006.7), new cjs.Rectangle(-385,-870,770,1053.4), new cjs.Rectangle(-385,-870,770,1100), new cjs.Rectangle(-385,-870,770,1146.7), new cjs.Rectangle(-385,-870,770,1193.4), new cjs.Rectangle(-385,-870,770,1240), new cjs.Rectangle(-385,-870,770,1220), new cjs.Rectangle(-385,-870,770,1200), new cjs.Rectangle(-385,-870,770,1180), new cjs.Rectangle(-385,-870,770,1160), new cjs.Rectangle(-385,-870,770,1140), new cjs.Rectangle(-385,-823.3,770,1093.4), new cjs.Rectangle(-385,-776.6,770,1046.7), new cjs.Rectangle(-385,-730,770,1000), new cjs.Rectangle(-385,-683.3,770,953.4), new cjs.Rectangle(-385,-636.6,770,906.7), new cjs.Rectangle(-385,-590,770,860), new cjs.Rectangle(-385,-543.3,770,813.4), new cjs.Rectangle(-385,-496.6,770,766.7), new cjs.Rectangle(-385,-450,770,720), new cjs.Rectangle(-385,-403.3,770,673.4), new cjs.Rectangle(-385,-356.6,770,626.7), new cjs.Rectangle(-385,-310,770,580), new cjs.Rectangle(-385,-270,770,546.7), new cjs.Rectangle(-385,-270,770,593.4), new cjs.Rectangle(-385,-270,770,640), new cjs.Rectangle(-385,-270,770,620), new cjs.Rectangle(-385,-270,770,600), new cjs.Rectangle(-385,-270,770,580), new cjs.Rectangle(-385,-270,770,560), rect=new cjs.Rectangle(-385,-270,770,540), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-280,770,550), new cjs.Rectangle(-385,-290,770,560), new cjs.Rectangle(-385,-300,770,570), new cjs.Rectangle(-385,-310,770,580), new cjs.Rectangle(-385,-320,770,590), new cjs.Rectangle(-385,-270,770,555), new cjs.Rectangle(-385,-270,770,620), new cjs.Rectangle(-385,-270,770,685), new cjs.Rectangle(-385,-270,770,750), new cjs.Rectangle(-385,-270,770,815), new cjs.Rectangle(-385,-270,770,880), new cjs.Rectangle(-385,-270,770,945), new cjs.Rectangle(-385,-270,770,1010), new cjs.Rectangle(-385,-270,770,1075), new cjs.Rectangle(-385,-270,770,1140), new cjs.Rectangle(-385,-280,770,1150), new cjs.Rectangle(-385,-290,770,1160), new cjs.Rectangle(-385,-300,770,1170), new cjs.Rectangle(-385,-310,770,1180), new cjs.Rectangle(-385,-320,770,1190), new cjs.Rectangle(-385,-255,770,1125), new cjs.Rectangle(-385,-190,770,1060), new cjs.Rectangle(-385,-125,770,995), new cjs.Rectangle(-385,-60,770,930), new cjs.Rectangle(-385,5,770,865), new cjs.Rectangle(-385,70,770,800), new cjs.Rectangle(-385,135,770,735), new cjs.Rectangle(-385,200,770,670), new cjs.Rectangle(-385,265,770,605), rect=new cjs.Rectangle(-385,330,770,540), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":74,"end":139});

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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(20).call(this.frame_54).wait(86));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({y:-600},0).wait(23).to({y:100},15).to({y:0},5).wait(50).to({y:-50},5).to({y:600},10).wait(31));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:-600},0).wait(43).to({y:100},15).to({y:0},5).wait(45).to({y:-50},5).to({y:600},10).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-385,-270,770,540);
p.frameBounds = [rect, rect=new cjs.Rectangle(-385,-870,770,540), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-870,770,586.7), new cjs.Rectangle(-385,-870,770,633.4), new cjs.Rectangle(-385,-870,770,680), new cjs.Rectangle(-385,-870,770,726.7), new cjs.Rectangle(-385,-870,770,773.4), new cjs.Rectangle(-385,-870,770,820), new cjs.Rectangle(-385,-870,770,866.7), new cjs.Rectangle(-385,-870,770,913.4), new cjs.Rectangle(-385,-870,770,960), new cjs.Rectangle(-385,-870,770,1006.7), new cjs.Rectangle(-385,-870,770,1053.4), new cjs.Rectangle(-385,-870,770,1100), new cjs.Rectangle(-385,-870,770,1146.7), new cjs.Rectangle(-385,-870,770,1193.4), new cjs.Rectangle(-385,-870,770,1240), new cjs.Rectangle(-385,-870,770,1220), new cjs.Rectangle(-385,-870,770,1200), new cjs.Rectangle(-385,-870,770,1180), new cjs.Rectangle(-385,-870,770,1160), new cjs.Rectangle(-385,-870,770,1140), new cjs.Rectangle(-385,-823.3,770,1093.4), new cjs.Rectangle(-385,-776.6,770,1046.7), new cjs.Rectangle(-385,-730,770,1000), new cjs.Rectangle(-385,-683.3,770,953.4), new cjs.Rectangle(-385,-636.6,770,906.7), new cjs.Rectangle(-385,-590,770,860), new cjs.Rectangle(-385,-543.3,770,813.4), new cjs.Rectangle(-385,-496.6,770,766.7), new cjs.Rectangle(-385,-450,770,720), new cjs.Rectangle(-385,-403.3,770,673.4), new cjs.Rectangle(-385,-356.6,770,626.7), new cjs.Rectangle(-385,-310,770,580), new cjs.Rectangle(-385,-270,770,546.7), new cjs.Rectangle(-385,-270,770,593.4), new cjs.Rectangle(-385,-270,770,640), new cjs.Rectangle(-385,-270,770,620), new cjs.Rectangle(-385,-270,770,600), new cjs.Rectangle(-385,-270,770,580), new cjs.Rectangle(-385,-270,770,560), rect=new cjs.Rectangle(-385,-270,770,540), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-280,770,550), new cjs.Rectangle(-385,-290,770,560), new cjs.Rectangle(-385,-300,770,570), new cjs.Rectangle(-385,-310,770,580), new cjs.Rectangle(-385,-320,770,590), new cjs.Rectangle(-385,-270,770,555), new cjs.Rectangle(-385,-270,770,620), new cjs.Rectangle(-385,-270,770,685), new cjs.Rectangle(-385,-270,770,750), new cjs.Rectangle(-385,-270,770,815), new cjs.Rectangle(-385,-270,770,880), new cjs.Rectangle(-385,-270,770,945), new cjs.Rectangle(-385,-270,770,1010), new cjs.Rectangle(-385,-270,770,1075), new cjs.Rectangle(-385,-270,770,1140), new cjs.Rectangle(-385,-280,770,1150), new cjs.Rectangle(-385,-290,770,1160), new cjs.Rectangle(-385,-300,770,1170), new cjs.Rectangle(-385,-310,770,1180), new cjs.Rectangle(-385,-320,770,1190), new cjs.Rectangle(-385,-255,770,1125), new cjs.Rectangle(-385,-190,770,1060), new cjs.Rectangle(-385,-125,770,995), new cjs.Rectangle(-385,-60,770,930), new cjs.Rectangle(-385,5,770,865), new cjs.Rectangle(-385,70,770,800), new cjs.Rectangle(-385,135,770,735), new cjs.Rectangle(-385,200,770,670), new cjs.Rectangle(-385,265,770,605), rect=new cjs.Rectangle(-385,330,770,540), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":74,"end":139});

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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(20).call(this.frame_54).wait(86));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-600},0).wait(23).to({y:100},15).to({y:0},5).wait(50).to({y:-50},5).to({y:600},10).wait(31));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({y:-600},0).wait(43).to({y:100},15).to({y:0},5).wait(45).to({y:-50},5).to({y:600},10).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-385,-270,770,540);
p.frameBounds = [rect, rect=new cjs.Rectangle(-385,-870,770,540), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-870,770,586.7), new cjs.Rectangle(-385,-870,770,633.4), new cjs.Rectangle(-385,-870,770,680), new cjs.Rectangle(-385,-870,770,726.7), new cjs.Rectangle(-385,-870,770,773.4), new cjs.Rectangle(-385,-870,770,820), new cjs.Rectangle(-385,-870,770,866.7), new cjs.Rectangle(-385,-870,770,913.4), new cjs.Rectangle(-385,-870,770,960), new cjs.Rectangle(-385,-870,770,1006.7), new cjs.Rectangle(-385,-870,770,1053.4), new cjs.Rectangle(-385,-870,770,1100), new cjs.Rectangle(-385,-870,770,1146.7), new cjs.Rectangle(-385,-870,770,1193.4), new cjs.Rectangle(-385,-870,770,1240), new cjs.Rectangle(-385,-870,770,1220), new cjs.Rectangle(-385,-870,770,1200), new cjs.Rectangle(-385,-870,770,1180), new cjs.Rectangle(-385,-870,770,1160), new cjs.Rectangle(-385,-870,770,1140), new cjs.Rectangle(-385,-823.3,770,1093.4), new cjs.Rectangle(-385,-776.6,770,1046.7), new cjs.Rectangle(-385,-730,770,1000), new cjs.Rectangle(-385,-683.3,770,953.4), new cjs.Rectangle(-385,-636.6,770,906.7), new cjs.Rectangle(-385,-590,770,860), new cjs.Rectangle(-385,-543.3,770,813.4), new cjs.Rectangle(-385,-496.6,770,766.7), new cjs.Rectangle(-385,-450,770,720), new cjs.Rectangle(-385,-403.3,770,673.4), new cjs.Rectangle(-385,-356.6,770,626.7), new cjs.Rectangle(-385,-310,770,580), new cjs.Rectangle(-385,-270,770,546.7), new cjs.Rectangle(-385,-270,770,593.4), new cjs.Rectangle(-385,-270,770,640), new cjs.Rectangle(-385,-270,770,620), new cjs.Rectangle(-385,-270,770,600), new cjs.Rectangle(-385,-270,770,580), new cjs.Rectangle(-385,-270,770,560), rect=new cjs.Rectangle(-385,-270,770,540), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-280,770,550), new cjs.Rectangle(-385,-290,770,560), new cjs.Rectangle(-385,-300,770,570), new cjs.Rectangle(-385,-310,770,580), new cjs.Rectangle(-385,-320,770,590), new cjs.Rectangle(-385,-270,770,555), new cjs.Rectangle(-385,-270,770,620), new cjs.Rectangle(-385,-270,770,685), new cjs.Rectangle(-385,-270,770,750), new cjs.Rectangle(-385,-270,770,815), new cjs.Rectangle(-385,-270,770,880), new cjs.Rectangle(-385,-270,770,945), new cjs.Rectangle(-385,-270,770,1010), new cjs.Rectangle(-385,-270,770,1075), new cjs.Rectangle(-385,-270,770,1140), new cjs.Rectangle(-385,-280,770,1150), new cjs.Rectangle(-385,-290,770,1160), new cjs.Rectangle(-385,-300,770,1170), new cjs.Rectangle(-385,-310,770,1180), new cjs.Rectangle(-385,-320,770,1190), new cjs.Rectangle(-385,-255,770,1125), new cjs.Rectangle(-385,-190,770,1060), new cjs.Rectangle(-385,-125,770,995), new cjs.Rectangle(-385,-60,770,930), new cjs.Rectangle(-385,5,770,865), new cjs.Rectangle(-385,70,770,800), new cjs.Rectangle(-385,135,770,735), new cjs.Rectangle(-385,200,770,670), new cjs.Rectangle(-385,265,770,605), rect=new cjs.Rectangle(-385,330,770,540), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":74,"end":139});

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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(20).call(this.frame_54).wait(86));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:-600},0).wait(23).to({y:100},15).to({y:0},5).wait(50).to({y:-50},5).to({y:600},10).wait(31));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-600},0).wait(43).to({y:100},15).to({y:0},5).wait(45).to({y:-50},5).to({y:600},10).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-385,-270,770,540);
p.frameBounds = [rect, rect=new cjs.Rectangle(-385,-870,770,540), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-870,770,586.7), new cjs.Rectangle(-385,-870,770,633.4), new cjs.Rectangle(-385,-870,770,680), new cjs.Rectangle(-385,-870,770,726.7), new cjs.Rectangle(-385,-870,770,773.4), new cjs.Rectangle(-385,-870,770,820), new cjs.Rectangle(-385,-870,770,866.7), new cjs.Rectangle(-385,-870,770,913.4), new cjs.Rectangle(-385,-870,770,960), new cjs.Rectangle(-385,-870,770,1006.7), new cjs.Rectangle(-385,-870,770,1053.4), new cjs.Rectangle(-385,-870,770,1100), new cjs.Rectangle(-385,-870,770,1146.7), new cjs.Rectangle(-385,-870,770,1193.4), new cjs.Rectangle(-385,-870,770,1240), new cjs.Rectangle(-385,-870,770,1220), new cjs.Rectangle(-385,-870,770,1200), new cjs.Rectangle(-385,-870,770,1180), new cjs.Rectangle(-385,-870,770,1160), new cjs.Rectangle(-385,-870,770,1140), new cjs.Rectangle(-385,-823.3,770,1093.4), new cjs.Rectangle(-385,-776.6,770,1046.7), new cjs.Rectangle(-385,-730,770,1000), new cjs.Rectangle(-385,-683.3,770,953.4), new cjs.Rectangle(-385,-636.6,770,906.7), new cjs.Rectangle(-385,-590,770,860), new cjs.Rectangle(-385,-543.3,770,813.4), new cjs.Rectangle(-385,-496.6,770,766.7), new cjs.Rectangle(-385,-450,770,720), new cjs.Rectangle(-385,-403.3,770,673.4), new cjs.Rectangle(-385,-356.6,770,626.7), new cjs.Rectangle(-385,-310,770,580), new cjs.Rectangle(-385,-270,770,546.7), new cjs.Rectangle(-385,-270,770,593.4), new cjs.Rectangle(-385,-270,770,640), new cjs.Rectangle(-385,-270,770,620), new cjs.Rectangle(-385,-270,770,600), new cjs.Rectangle(-385,-270,770,580), new cjs.Rectangle(-385,-270,770,560), rect=new cjs.Rectangle(-385,-270,770,540), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-280,770,550), new cjs.Rectangle(-385,-290,770,560), new cjs.Rectangle(-385,-300,770,570), new cjs.Rectangle(-385,-310,770,580), new cjs.Rectangle(-385,-320,770,590), new cjs.Rectangle(-385,-270,770,555), new cjs.Rectangle(-385,-270,770,620), new cjs.Rectangle(-385,-270,770,685), new cjs.Rectangle(-385,-270,770,750), new cjs.Rectangle(-385,-270,770,815), new cjs.Rectangle(-385,-270,770,880), new cjs.Rectangle(-385,-270,770,945), new cjs.Rectangle(-385,-270,770,1010), new cjs.Rectangle(-385,-270,770,1075), new cjs.Rectangle(-385,-270,770,1140), new cjs.Rectangle(-385,-280,770,1150), new cjs.Rectangle(-385,-290,770,1160), new cjs.Rectangle(-385,-300,770,1170), new cjs.Rectangle(-385,-310,770,1180), new cjs.Rectangle(-385,-320,770,1190), new cjs.Rectangle(-385,-255,770,1125), new cjs.Rectangle(-385,-190,770,1060), new cjs.Rectangle(-385,-125,770,995), new cjs.Rectangle(-385,-60,770,930), new cjs.Rectangle(-385,5,770,865), new cjs.Rectangle(-385,70,770,800), new cjs.Rectangle(-385,135,770,735), new cjs.Rectangle(-385,200,770,670), new cjs.Rectangle(-385,265,770,605), rect=new cjs.Rectangle(-385,330,770,540), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":74,"end":139});

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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(20).call(this.frame_54).wait(86));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:-600},0).wait(23).to({y:100},15).to({y:0},5).wait(50).to({y:-50},5).to({y:600},10).wait(31));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-600},0).wait(43).to({y:100},15).to({y:0},5).wait(45).to({y:-50},5).to({y:600},10).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-385,-270,770,540);
p.frameBounds = [rect, rect=new cjs.Rectangle(-385,-870,770,540), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-870,770,586.7), new cjs.Rectangle(-385,-870,770,633.4), new cjs.Rectangle(-385,-870,770,680), new cjs.Rectangle(-385,-870,770,726.7), new cjs.Rectangle(-385,-870,770,773.4), new cjs.Rectangle(-385,-870,770,820), new cjs.Rectangle(-385,-870,770,866.7), new cjs.Rectangle(-385,-870,770,913.4), new cjs.Rectangle(-385,-870,770,960), new cjs.Rectangle(-385,-870,770,1006.7), new cjs.Rectangle(-385,-870,770,1053.4), new cjs.Rectangle(-385,-870,770,1100), new cjs.Rectangle(-385,-870,770,1146.7), new cjs.Rectangle(-385,-870,770,1193.4), new cjs.Rectangle(-385,-870,770,1240), new cjs.Rectangle(-385,-870,770,1220), new cjs.Rectangle(-385,-870,770,1200), new cjs.Rectangle(-385,-870,770,1180), new cjs.Rectangle(-385,-870,770,1160), new cjs.Rectangle(-385,-870,770,1140), new cjs.Rectangle(-385,-823.3,770,1093.4), new cjs.Rectangle(-385,-776.6,770,1046.7), new cjs.Rectangle(-385,-730,770,1000), new cjs.Rectangle(-385,-683.3,770,953.4), new cjs.Rectangle(-385,-636.6,770,906.7), new cjs.Rectangle(-385,-590,770,860), new cjs.Rectangle(-385,-543.3,770,813.4), new cjs.Rectangle(-385,-496.6,770,766.7), new cjs.Rectangle(-385,-450,770,720), new cjs.Rectangle(-385,-403.3,770,673.4), new cjs.Rectangle(-385,-356.6,770,626.7), new cjs.Rectangle(-385,-310,770,580), new cjs.Rectangle(-385,-270,770,546.7), new cjs.Rectangle(-385,-270,770,593.4), new cjs.Rectangle(-385,-270,770,640), new cjs.Rectangle(-385,-270,770,620), new cjs.Rectangle(-385,-270,770,600), new cjs.Rectangle(-385,-270,770,580), new cjs.Rectangle(-385,-270,770,560), rect=new cjs.Rectangle(-385,-270,770,540), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-385,-280,770,550), new cjs.Rectangle(-385,-290,770,560), new cjs.Rectangle(-385,-300,770,570), new cjs.Rectangle(-385,-310,770,580), new cjs.Rectangle(-385,-320,770,590), new cjs.Rectangle(-385,-270,770,555), new cjs.Rectangle(-385,-270,770,620), new cjs.Rectangle(-385,-270,770,685), new cjs.Rectangle(-385,-270,770,750), new cjs.Rectangle(-385,-270,770,815), new cjs.Rectangle(-385,-270,770,880), new cjs.Rectangle(-385,-270,770,945), new cjs.Rectangle(-385,-270,770,1010), new cjs.Rectangle(-385,-270,770,1075), new cjs.Rectangle(-385,-270,770,1140), new cjs.Rectangle(-385,-280,770,1150), new cjs.Rectangle(-385,-290,770,1160), new cjs.Rectangle(-385,-300,770,1170), new cjs.Rectangle(-385,-310,770,1180), new cjs.Rectangle(-385,-320,770,1190), new cjs.Rectangle(-385,-255,770,1125), new cjs.Rectangle(-385,-190,770,1060), new cjs.Rectangle(-385,-125,770,995), new cjs.Rectangle(-385,-60,770,930), new cjs.Rectangle(-385,5,770,865), new cjs.Rectangle(-385,70,770,800), new cjs.Rectangle(-385,135,770,735), new cjs.Rectangle(-385,200,770,670), new cjs.Rectangle(-385,265,770,605), rect=new cjs.Rectangle(-385,330,770,540), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_hairstyle_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.current_hairstyle_0_mc();

	this.instance_1 = new lib.current_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-180,320,360);
p.frameBounds = [rect, new cjs.Rectangle(-175,-195,350,390)];


(lib.current_face_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.current_face_0_mc();

	this.instance_1 = new lib.current_face_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-163,310,325);
p.frameBounds = [rect, new cjs.Rectangle(-165,-175,330,350)];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// decor
	this.instance = new lib.animation_hat_main_mc();
	this.instance.setTransform(-149,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-122},0).wait(1).to({x:-148},0).wait(1).to({x:-145},0).wait(1).to({x:-147},0).wait(1).to({x:-152},0).wait(2).to({x:-144,y:-69},0).wait(1).to({x:-140,y:-65},0).wait(1).to({x:-148},0).wait(4));

	// graph
	this.instance_1 = new lib.title_en_img();
	this.instance_1.setTransform(-295,-95);

	this.instance_2 = new lib.title_ru_img();
	this.instance_2.setTransform(-295,-95);

	this.instance_3 = new lib.title_es_img();
	this.instance_3.setTransform(-295,-95);

	this.instance_4 = new lib.title_pt_img();
	this.instance_4.setTransform(-295,-95);

	this.instance_5 = new lib.title_tr_img();
	this.instance_5.setTransform(-295,-95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1).to({_off:false},0).wait(2).to({_off:true},1).wait(3).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-295,-146,590,241);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-295,-150,590,245), rect=new cjs.Rectangle(-295,-146,590,241), rect, rect, rect, rect];


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


(lib.curtain_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.shine_1_1_mc();
	this.instance.setTransform(252.3,-18.9,1,1,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.curtain_2_img();
	this.instance_1.setTransform(-300,-350);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-350,600,700);
p.frameBounds = [rect];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":44,"end":79});

	// animation
	this.instance = new lib.curtain_2_mc();
	this.instance.setTransform(400,950);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({y:250},10).to({y:300},5).wait(35).to({y:950},15).to({_off:true},1).wait(5));

	// animation
	this.instance_1 = new lib.curtain_1_mc();
	this.instance_1.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:0,alpha:0.012},0).to({alpha:1},18).wait(40).to({alpha:0.012},19).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,600,1600,600);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,0,1600,600), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,0,1600,1300), new cjs.Rectangle(-400,0,1600,1230), new cjs.Rectangle(-400,0,1600,1160), new cjs.Rectangle(-400,0,1600,1090), new cjs.Rectangle(-400,0,1600,1020), new cjs.Rectangle(-400,0,1600,950), new cjs.Rectangle(-400,0,1600,880), new cjs.Rectangle(-400,0,1600,810), new cjs.Rectangle(-400,0,1600,740), new cjs.Rectangle(-400,-30,1600,700), new cjs.Rectangle(-400,-100,1600,700), new cjs.Rectangle(-400,-90,1600,700), new cjs.Rectangle(-400,-80,1600,700), new cjs.Rectangle(-400,-70,1600,700), new cjs.Rectangle(-400,-60,1600,700), rect=new cjs.Rectangle(-400,-50,1600,700), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-6.6,1600,700), new cjs.Rectangle(-400,0,1600,736.7), new cjs.Rectangle(-400,0,1600,780), new cjs.Rectangle(-400,0,1600,823.4), new cjs.Rectangle(-400,0,1600,866.7), new cjs.Rectangle(-400,0,1600,910), new cjs.Rectangle(-400,0,1600,953.4), new cjs.Rectangle(-400,0,1600,996.7), new cjs.Rectangle(-400,0,1600,1040), new cjs.Rectangle(-400,0,1600,1083.4), new cjs.Rectangle(-400,0,1600,1126.7), new cjs.Rectangle(-400,0,1600,1170), new cjs.Rectangle(-400,0,1600,1213.4), new cjs.Rectangle(-400,0,1600,1256.7), new cjs.Rectangle(-400,0,1600,1300), rect=new cjs.Rectangle(-400,0,1600,600), rect, rect, rect, null];


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
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.prev_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_2_mc();
	this.instance.setTransform(0,0,0.833,0.833,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-58.3,100,116.7);
p.frameBounds = [rect];


(lib.play_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_0_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AsIMJQlDlCABnHQgBnGFDlCQFDlDHFAAQHIAAFBFDQFCFBAAHHQAAHHlCFCQlBFCnIAAQnFAAlDlCg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-110,-110,220,220)];


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
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


(lib.next_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_2_mc();
	this.instance.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-58.3,100,116.6);
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
p.nominalBounds = rect = new cjs.Rectangle(-295,-146,590,241);
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
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,664.8);
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
p.nominalBounds = rect = new cjs.Rectangle(-385,-270,770,540);
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


(lib.hair_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_9_2_img();
	this.instance.setTransform(-160,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.hair_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_9_1_img();
	this.instance.setTransform(-160,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.hair_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_8_2_img();
	this.instance.setTransform(-160,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.hair_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_8_1_img();
	this.instance.setTransform(-160,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.hair_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_7_2_img();
	this.instance.setTransform(-160,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.hair_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_7_1_img();
	this.instance.setTransform(-160,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.hair_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_6_2_img();
	this.instance.setTransform(-160,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.hair_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_6_1_img();
	this.instance.setTransform(-160,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.hair_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_5_2_img();
	this.instance.setTransform(-160,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.hair_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_5_1_img();
	this.instance.setTransform(-160,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.hair_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_4_2_img();
	this.instance.setTransform(-160,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.hair_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_4_1_img();
	this.instance.setTransform(-160,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.hair_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_3_2_img();
	this.instance.setTransform(-160,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.hair_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_3_1_img();
	this.instance.setTransform(-160,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.hair_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_2_2_img();
	this.instance.setTransform(-160,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.hair_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_2_1_img();
	this.instance.setTransform(-160,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.hair_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_1_2_img();
	this.instance.setTransform(-160,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.hair_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hair_1_1_img();
	this.instance.setTransform(-160,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
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


(lib.faceart_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_6_2_img();
	this.instance.setTransform(-155,-162.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_face_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyxSyQnxnygBrAQABq/HxnyQHynxK/gBQLAABHyHxQHyHyAAK/QAALAnyHyQnyHyrAAAQq/AAnynyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.faceart_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_6_1_img();
	this.instance.setTransform(-155,-162.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_face_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyxSyQnxnygBrAQABq/HxnyQHynxK/gBQLAABHyHxQHyHyAAK/QAALAnyHyQnyHyrAAAQq/AAnynyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.faceart_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_5_2_img();
	this.instance.setTransform(-155,-162.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_face_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyxSyQnxnygBrAQABq/HxnyQHynxK/gBQLAABHyHxQHyHyAAK/QAALAnyHyQnyHyrAAAQq/AAnynyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.faceart_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_5_1_img();
	this.instance.setTransform(-155,-162.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_face_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyxSyQnxnygBrAQABq/HxnyQHynxK/gBQLAABHyHxQHyHyAAK/QAALAnyHyQnyHyrAAAQq/AAnynyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.faceart_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_4_2_img();
	this.instance.setTransform(-155,-162.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_face_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyxSyQnxnygBrAQABq/HxnyQHynxK/gBQLAABHyHxQHyHyAAK/QAALAnyHyQnyHyrAAAQq/AAnynyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.faceart_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_4_1_img();
	this.instance.setTransform(-155,-162.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_face_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyxSyQnxnygBrAQABq/HxnyQHynxK/gBQLAABHyHxQHyHyAAK/QAALAnyHyQnyHyrAAAQq/AAnynyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.faceart_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_3_2_img();
	this.instance.setTransform(-155,-162.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_face_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyxSyQnxnygBrAQABq/HxnyQHynxK/gBQLAABHyHxQHyHyAAK/QAALAnyHyQnyHyrAAAQq/AAnynyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.faceart_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_3_1_img();
	this.instance.setTransform(-155,-162.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_face_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyxSyQnxnygBrAQABq/HxnyQHynxK/gBQLAABHyHxQHyHyAAK/QAALAnyHyQnyHyrAAAQq/AAnynyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.faceart_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_2_2_img();
	this.instance.setTransform(-155,-162.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_face_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyxSyQnxnygBrAQABq/HxnyQHynxK/gBQLAABHyHxQHyHyAAK/QAALAnyHyQnyHyrAAAQq/AAnynyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.faceart_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_2_1_img();
	this.instance.setTransform(-155,-162.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_face_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyxSyQnxnygBrAQABq/HxnyQHynxK/gBQLAABHyHxQHyHyAAK/QAALAnyHyQnyHyrAAAQq/AAnynyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.faceart_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_1_2_img();
	this.instance.setTransform(-155,-162.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_face_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyxSyQnxnygBrAQABq/HxnyQHynxK/gBQLAABHyHxQHyHyAAK/QAALAnyHyQnyHyrAAAQq/AAnynyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.faceart_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.faceart_1_1_img();
	this.instance.setTransform(-155,-162.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_face_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyxSyQnxnygBrAQABq/HxnyQHynxK/gBQLAABHyHxQHyHyAAK/QAALAnyHyQnyHyrAAAQq/AAnynyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.dress_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_9_2_img();
	this.instance.setTransform(160,-180,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();
	this.check_mc.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.dress_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_9_1_img();
	this.instance.setTransform(-160,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.dress_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_8_2_img();
	this.instance.setTransform(160,-180,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();
	this.check_mc.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.dress_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_8_1_img();
	this.instance.setTransform(-160,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.dress_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_7_2_img();
	this.instance.setTransform(160,-180,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();
	this.check_mc.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.dress_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_7_1_img();
	this.instance.setTransform(-160,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.dress_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_6_2_img();
	this.instance.setTransform(160,-180,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();
	this.check_mc.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.dress_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_6_1_img();
	this.instance.setTransform(-160,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.dress_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_5_2_img();
	this.instance.setTransform(160,-180,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();
	this.check_mc.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.dress_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_5_1_img();
	this.instance.setTransform(-160,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.dress_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_4_2_img();
	this.instance.setTransform(160,-180,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();
	this.check_mc.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.dress_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_4_1_img();
	this.instance.setTransform(-160,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.dress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_3_2_img();
	this.instance.setTransform(160,-180,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();
	this.check_mc.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.dress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_3_1_img();
	this.instance.setTransform(-160,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.dress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_2_2_img();
	this.instance.setTransform(160,-180,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();
	this.check_mc.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.dress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_2_1_img();
	this.instance.setTransform(-160,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.dress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_1_2_img();
	this.instance.setTransform(160,-180,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();
	this.check_mc.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.dress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_1_1_img();
	this.instance.setTransform(-160,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyNUcQnjoeAAr+QAAr9HjoeQHjodKqAAQKrAAHkIdQHiIeAAL9QAAL+niIeQnkIdqrABQqqgBnjodg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-165,-185,330,370);
p.frameBounds = [rect];


(lib.decor_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(750,100,0.833,0.833);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(50,300);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(50,500,0.833,0.833);

	this.instance_3 = new lib.blinking_light_3_2_mc();
	this.instance_3.setTransform(150,400);

	this.instance_4 = new lib.blinking_light_3_2_mc();
	this.instance_4.setTransform(750,500,0.833,0.833);

	this.instance_5 = new lib.blinking_light_3_2_mc();
	this.instance_5.setTransform(750,300);

	this.instance_6 = new lib.blinking_light_3_2_mc();
	this.instance_6.setTransform(655,200);

	this.instance_7 = new lib.blinking_light_3_2_mc();
	this.instance_7.setTransform(150,200);

	this.instance_8 = new lib.blinking_light_3_2_mc();
	this.instance_8.setTransform(650,400);

	this.instance_9 = new lib.blinking_light_3_2_mc();
	this.instance_9.setTransform(50,100,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(26,80,748,440);
p.frameBounds = [rect];


(lib.closet_makeup_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.faceart_0 = new lib.faceart_0_mc();
	this.faceart_0.setTransform(-160,-190);

	this.lips_0 = new lib.lips_0_mc();
	this.lips_0.setTransform(-160,500);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(-160,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.faceart_0}]}).to({state:[{t:this.lips_0}]},6).to({state:[{t:this.shadows_0}]},1).to({state:[]},2).wait(3));

	// options
	this.faceart_1 = new lib.faceart_1_2_mc();
	this.faceart_1.setTransform(0,-110);

	this.faceart_2 = new lib.faceart_2_2_mc();
	this.faceart_2.setTransform(0,-110);

	this.faceart_3 = new lib.faceart_3_2_mc();
	this.faceart_3.setTransform(0,-110);

	this.faceart_4 = new lib.faceart_4_2_mc();
	this.faceart_4.setTransform(0,-110);

	this.faceart_5 = new lib.faceart_5_2_mc();
	this.faceart_5.setTransform(0,-110);

	this.faceart_6 = new lib.faceart_6_2_mc();
	this.faceart_6.setTransform(0,-110);

	this.lips_6 = new lib.lips_6_2_mc();
	this.lips_6.setTransform(20,-115);

	this.lips_5 = new lib.lips_5_2_mc();
	this.lips_5.setTransform(-20,-15);

	this.lips_4 = new lib.lips_4_2_mc();
	this.lips_4.setTransform(100,-115);

	this.lips_3 = new lib.lips_3_2_mc();
	this.lips_3.setTransform(-60,-115);

	this.lips_2 = new lib.lips_2_2_mc();
	this.lips_2.setTransform(60,-15);

	this.lips_1 = new lib.lips_1_2_mc();
	this.lips_1.setTransform(-100,-15);

	this.shadows_3 = new lib.shadows_3_2_mc();
	this.shadows_3.setTransform(-65,0);

	this.shadows_2 = new lib.shadows_2_2_mc();
	this.shadows_2.setTransform(65,0);

	this.shadows_1 = new lib.shadows_1_2_mc();
	this.shadows_1.setTransform(0,-90);

	this.shadows_6 = new lib.shadows_6_2_mc();
	this.shadows_6.setTransform(0,-90);

	this.shadows_5 = new lib.shadows_5_2_mc();
	this.shadows_5.setTransform(65,0);

	this.shadows_4 = new lib.shadows_4_2_mc();
	this.shadows_4.setTransform(-65,0);

	this.eyes_6 = new lib.eyes_6_2_mc();
	this.eyes_6.setTransform(70,5);

	this.eyes_5 = new lib.eyes_5_2_mc();
	this.eyes_5.setTransform(-70,5);

	this.eyes_2 = new lib.eyes_2_2_mc();
	this.eyes_2.setTransform(0,-85);

	this.eyes_1 = new lib.eyes_1_2_mc();
	this.eyes_1.setTransform(-70,5);

	this.eyes_4 = new lib.eyes_4_2_mc();
	this.eyes_4.setTransform(0,-85);

	this.eyes_3 = new lib.eyes_3_2_mc();
	this.eyes_3.setTransform(70,5);

	this.eyebrows_6 = new lib.pencil_6_2_mc();
	this.eyebrows_6.setTransform(-20,-20);

	this.eyebrows_5 = new lib.pencil_5_2_mc();
	this.eyebrows_5.setTransform(60,-20);

	this.eyebrows_4 = new lib.pencil_4_2_mc();
	this.eyebrows_4.setTransform(-60,-115);

	this.eyebrows_3 = new lib.pencil_3_2_mc();
	this.eyebrows_3.setTransform(100,-115);

	this.eyebrows_2 = new lib.pencil_2_2_mc();
	this.eyebrows_2.setTransform(20,-115);

	this.eyebrows_1 = new lib.pencil_1_2_mc();
	this.eyebrows_1.setTransform(-100,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.faceart_1}]}).to({state:[{t:this.faceart_2}]},1).to({state:[{t:this.faceart_3}]},1).to({state:[{t:this.faceart_4}]},1).to({state:[{t:this.faceart_5}]},1).to({state:[{t:this.faceart_6}]},1).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]},1).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3}]},1).to({state:[{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.eyes_2},{t:this.eyes_5},{t:this.eyes_6}]},1).to({state:[{t:this.eyes_3},{t:this.eyes_4},{t:this.eyes_1}]},1).to({state:[{t:this.eyebrows_1},{t:this.eyebrows_2},{t:this.eyebrows_3},{t:this.eyebrows_4},{t:this.eyebrows_5},{t:this.eyebrows_6}]},1).wait(1));

	// decor
	this.instance = new lib.shelves_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-280,520,490);
p.frameBounds = [rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-260,-210,520,731), rect=new cjs.Rectangle(-260,-211,520,421), rect, rect=new cjs.Rectangle(-260,-210,520,420), rect, rect];


(lib.closet_makeup_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.faceart_0 = new lib.faceart_0_mc();
	this.faceart_0.setTransform(160,-190);

	this.lips_0 = new lib.lips_0_mc();
	this.lips_0.setTransform(160,500);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(160,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.faceart_0}]}).to({state:[{t:this.lips_0}]},6).to({state:[{t:this.shadows_0}]},1).to({state:[]},2).wait(3));

	// options
	this.faceart_1 = new lib.faceart_1_1_mc();
	this.faceart_1.setTransform(0,-110);

	this.faceart_2 = new lib.faceart_2_1_mc();
	this.faceart_2.setTransform(0,-110);

	this.faceart_3 = new lib.faceart_3_1_mc();
	this.faceart_3.setTransform(0,-110);

	this.faceart_4 = new lib.faceart_4_1_mc();
	this.faceart_4.setTransform(0,-110);

	this.faceart_5 = new lib.faceart_5_1_mc();
	this.faceart_5.setTransform(0,-110);

	this.faceart_6 = new lib.faceart_6_1_mc();
	this.faceart_6.setTransform(0,-110);

	this.lips_6 = new lib.lips_6_1_mc();
	this.lips_6.setTransform(20,-15);

	this.lips_5 = new lib.lips_5_1_mc();
	this.lips_5.setTransform(-60,-15);

	this.lips_4 = new lib.lips_4_1_mc();
	this.lips_4.setTransform(-20,-115);

	this.lips_3 = new lib.lips_3_1_mc();
	this.lips_3.setTransform(60,-115);

	this.lips_2 = new lib.lips_2_1_mc();
	this.lips_2.setTransform(-100,-115);

	this.lips_1 = new lib.lips_1_1_mc();
	this.lips_1.setTransform(100,-15);

	this.shadows_3 = new lib.shadows_3_1_mc();
	this.shadows_3.setTransform(0,-90);

	this.shadows_6 = new lib.shadows_6_1_mc();
	this.shadows_6.setTransform(70,0);

	this.shadows_2 = new lib.shadows_2_1_mc();
	this.shadows_2.setTransform(-70,0);

	this.shadows_1 = new lib.shadows_1_1_mc();
	this.shadows_1.setTransform(70,0);

	this.shadows_4 = new lib.shadows_4_1_mc();
	this.shadows_4.setTransform(-70,0);

	this.shadows_5 = new lib.shadows_5_1_mc();
	this.shadows_5.setTransform(0,-90);

	this.eyes_4 = new lib.eyes_4_1_mc();
	this.eyes_4.setTransform(0,-85);

	this.eyes_5 = new lib.eyes_5_1_mc();
	this.eyes_5.setTransform(-70,10);

	this.eyes_2 = new lib.eyes_2_1_mc();
	this.eyes_2.setTransform(70,10);

	this.eyes_3 = new lib.eyes_3_1_mc();
	this.eyes_3.setTransform(0,-85);

	this.eyes_1 = new lib.eyes_1_1_mc();
	this.eyes_1.setTransform(70,10);

	this.eyes_6 = new lib.eyes_6_1_mc();
	this.eyes_6.setTransform(-70,10);

	this.eyebrows_6 = new lib.pencil_6_1_mc();
	this.eyebrows_6.setTransform(20,-20);

	this.eyebrows_5 = new lib.pencil_5_1_mc();
	this.eyebrows_5.setTransform(60,-115);

	this.eyebrows_4 = new lib.pencil_4_1_mc();
	this.eyebrows_4.setTransform(-60,-20);

	this.eyebrows_3 = new lib.pencil_3_1_mc();
	this.eyebrows_3.setTransform(-20,-115);

	this.eyebrows_2 = new lib.pencil_2_1_mc();
	this.eyebrows_2.setTransform(-100,-115);

	this.eyebrows_1 = new lib.pencil_1_1_mc();
	this.eyebrows_1.setTransform(100,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.faceart_1}]}).to({state:[{t:this.faceart_2}]},1).to({state:[{t:this.faceart_3}]},1).to({state:[{t:this.faceart_4}]},1).to({state:[{t:this.faceart_5}]},1).to({state:[{t:this.faceart_6}]},1).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]},1).to({state:[{t:this.shadows_2},{t:this.shadows_6},{t:this.shadows_3}]},1).to({state:[{t:this.shadows_5},{t:this.shadows_4},{t:this.shadows_1}]},1).to({state:[{t:this.eyes_2},{t:this.eyes_5},{t:this.eyes_4}]},1).to({state:[{t:this.eyes_6},{t:this.eyes_1},{t:this.eyes_3}]},1).to({state:[{t:this.eyebrows_1},{t:this.eyebrows_2},{t:this.eyebrows_3},{t:this.eyebrows_4},{t:this.eyebrows_5},{t:this.eyebrows_6}]},1).wait(1));

	// decor
	this.instance = new lib.shelves_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-280,520,490);
p.frameBounds = [rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-260,-210,520,731), rect=new cjs.Rectangle(-260,-211,520,421), rect, rect=new cjs.Rectangle(-260,-210,520,420), rect, rect];


(lib.closet_hair_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(160,-190);
	this.headdress_0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.headdress_0).wait(13).to({_off:false},0).wait(4));

	// no
	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(-160,-190);
	this.earrings_0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.earrings_0).wait(9).to({_off:false},0).to({_off:true},5).wait(3));

	// options
	this.hair_6 = new lib.hair_6_2_mc();
	this.hair_6.setTransform(0,-130);

	this.hair_2 = new lib.hair_2_2_mc();
	this.hair_2.setTransform(0,-130);

	this.hair_3 = new lib.hair_3_2_mc();
	this.hair_3.setTransform(0,-130);

	this.hair_4 = new lib.hair_4_2_mc();
	this.hair_4.setTransform(0,-130);

	this.hair_5 = new lib.hair_5_2_mc();
	this.hair_5.setTransform(0,-130);

	this.hair_9 = new lib.hair_9_2_mc();
	this.hair_9.setTransform(0,-130);

	this.hair_7 = new lib.hair_7_2_mc();
	this.hair_7.setTransform(0,-130);

	this.hair_8 = new lib.hair_8_2_mc();
	this.hair_8.setTransform(0,-130);

	this.hair_1 = new lib.hair_1_2_mc();
	this.hair_1.setTransform(0,-130);

	this.earrings_2 = new lib.hero2_earring2_mc();
	this.earrings_2.setTransform(60,-15);

	this.earrings_1 = new lib.hero2_earring1_mc();
	this.earrings_1.setTransform(-60,-110);

	this.earrings_5 = new lib.hero2_earring5_mc();
	this.earrings_5.setTransform(-60,-15);

	this.earrings_4 = new lib.hero2_earring4_mc();
	this.earrings_4.setTransform(60,-110);

	this.earrings_6 = new lib.hero2_earring6_mc();
	this.earrings_6.setTransform(60,-15);

	this.earrings_3 = new lib.hero2_earring3_mc();
	this.earrings_3.setTransform(-60,-110);

	this.earrings_9 = new lib.hero2_earring9_mc();
	this.earrings_9.setTransform(-60,-15);

	this.earrings_7 = new lib.hero2_earring7_mc();
	this.earrings_7.setTransform(60,-110);

	this.headdress_6 = new lib.headdress_6_2_mc();
	this.headdress_6.setTransform(40,-35);

	this.earrings_8 = new lib.hero2_earring8_mc();
	this.earrings_8.setTransform(-60,-110);

	this.headdress_2 = new lib.headdress_2_2_mc();
	this.headdress_2.setTransform(70,5);

	this.headdress_1 = new lib.headdress_1_2_mc();
	this.headdress_1.setTransform(-70,10);

	this.headdress_7 = new lib.headdress_7_2_mc();
	this.headdress_7.setTransform(0,-130);

	this.headdress_3 = new lib.headdress_3_2_mc();
	this.headdress_3.setTransform(-70,0);

	this.headdress_5 = new lib.headdress_5_2_mc();
	this.headdress_5.setTransform(70,10);

	this.headdress_8 = new lib.headdress_8_2_mc();
	this.headdress_8.setTransform(10,-140);

	this.headdress_4 = new lib.headdress_4_2_mc();
	this.headdress_4.setTransform(-40,15);

	this.headdress_9 = new lib.headdress_9_2_mc();
	this.headdress_9.setTransform(25,-115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_6}]}).to({state:[{t:this.hair_2}]},1).to({state:[{t:this.hair_3}]},1).to({state:[{t:this.hair_4}]},1).to({state:[{t:this.hair_5}]},1).to({state:[{t:this.hair_9}]},1).to({state:[{t:this.hair_7}]},1).to({state:[{t:this.hair_8}]},1).to({state:[{t:this.hair_1}]},1).to({state:[{t:this.earrings_1},{t:this.earrings_2}]},1).to({state:[{t:this.earrings_4},{t:this.earrings_5}]},1).to({state:[{t:this.earrings_3},{t:this.earrings_6}]},1).to({state:[{t:this.earrings_7},{t:this.earrings_9}]},1).to({state:[{t:this.earrings_8},{t:this.headdress_6}]},1).to({state:[{t:this.headdress_7},{t:this.headdress_1},{t:this.headdress_2}]},1).to({state:[{t:this.headdress_8},{t:this.headdress_5},{t:this.headdress_3}]},1).to({state:[{t:this.headdress_9},{t:this.headdress_4}]},1).wait(1));

	// decor
	this.instance = new lib.shelves_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-315,520,525);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-260,-211,520,421), rect, rect, rect, rect, new cjs.Rectangle(-260,-228.6,520,438.6), new cjs.Rectangle(-260,-252.3,520,462.3), new cjs.Rectangle(-260,-211.1,520,421.2)];


(lib.closet_hair_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(160,-190);
	this.headdress_0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.headdress_0).wait(13).to({_off:false},0).wait(4));

	// no
	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(-160,-190);
	this.earrings_0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.earrings_0).wait(9).to({_off:false},0).to({_off:true},5).wait(3));

	// options
	this.hair_8 = new lib.hair_8_1_mc();
	this.hair_8.setTransform(0,-130);

	this.hair_2 = new lib.hair_2_1_mc();
	this.hair_2.setTransform(0,-130);

	this.hair_3 = new lib.hair_3_1_mc();
	this.hair_3.setTransform(0,-130);

	this.hair_4 = new lib.hair_4_1_mc();
	this.hair_4.setTransform(0,-130);

	this.hair_5 = new lib.hair_5_1_mc();
	this.hair_5.setTransform(0,-130);

	this.hair_6 = new lib.hair_6_1_mc();
	this.hair_6.setTransform(0,-130);

	this.hair_7 = new lib.hair_7_1_mc();
	this.hair_7.setTransform(0,-130);

	this.hair_9 = new lib.hair_9_1_mc();
	this.hair_9.setTransform(0,-130);

	this.hair_1 = new lib.hair_1_1_mc();
	this.hair_1.setTransform(0,-130);

	this.earrings_3 = new lib.hero1_earring3_mc();
	this.earrings_3.setTransform(60,-15);

	this.earrings_1 = new lib.hero1_earring1_mc();
	this.earrings_1.setTransform(-60,-110);

	this.earrings_2 = new lib.hero1_earring2_mc();
	this.earrings_2.setTransform(-60,-15);

	this.earrings_4 = new lib.hero1_earring4_mc();
	this.earrings_4.setTransform(60,-110);

	this.earrings_5 = new lib.hero1_earring5_mc();
	this.earrings_5.setTransform(60,-15);

	this.earrings_6 = new lib.hero1_earring6_mc();
	this.earrings_6.setTransform(-60,-110);

	this.earrings_8 = new lib.hero1_earring8_mc();
	this.earrings_8.setTransform(-60,-15);

	this.earrings_7 = new lib.hero1_earring7_mc();
	this.earrings_7.setTransform(60,-110);

	this.headdress_9 = new lib.headdress_9_1_mc();
	this.headdress_9.setTransform(50,0);

	this.earrings_9 = new lib.hero1_earring9_mc();
	this.earrings_9.setTransform(-60,-110);

	this.headdress_3 = new lib.headdress_3_1_mc();
	this.headdress_3.setTransform(70,7);

	this.headdress_2 = new lib.headdress_2_1_mc();
	this.headdress_2.setTransform(-70,-2);

	this.headdress_1 = new lib.headdress_1_1_mc();
	this.headdress_1.setTransform(-9,-100);

	this.headdress_5 = new lib.headdress_5_1_mc();
	this.headdress_5.setTransform(-70,0);

	this.headdress_4 = new lib.headdress_4_1_mc();
	this.headdress_4.setTransform(80,0);

	this.headdress_6 = new lib.headdress_6_1_mc();
	this.headdress_6.setTransform(0,-103);

	this.headdress_8 = new lib.headdress_8_1_mc();
	this.headdress_8.setTransform(-50,5);

	this.headdress_7 = new lib.headdress_7_1_mc();
	this.headdress_7.setTransform(50,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_8}]}).to({state:[{t:this.hair_2}]},1).to({state:[{t:this.hair_3}]},1).to({state:[{t:this.hair_4}]},1).to({state:[{t:this.hair_5}]},1).to({state:[{t:this.hair_6}]},1).to({state:[{t:this.hair_7}]},1).to({state:[{t:this.hair_9}]},1).to({state:[{t:this.hair_1}]},1).to({state:[{t:this.earrings_1},{t:this.earrings_3}]},1).to({state:[{t:this.earrings_4},{t:this.earrings_2}]},1).to({state:[{t:this.earrings_6},{t:this.earrings_5}]},1).to({state:[{t:this.earrings_7},{t:this.earrings_8}]},1).to({state:[{t:this.earrings_9},{t:this.headdress_9}]},1).to({state:[{t:this.headdress_1},{t:this.headdress_2},{t:this.headdress_3}]},1).to({state:[{t:this.headdress_6},{t:this.headdress_4},{t:this.headdress_5}]},1).to({state:[{t:this.headdress_7},{t:this.headdress_8}]},1).wait(1));

	// decor
	this.instance = new lib.shelves_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-315,520,525);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-260,-211,520,421), rect, rect, rect, rect, rect, rect, rect];


(lib.closet_dress_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.dress_0 = new lib.dress_0_mc();
	this.dress_0.setTransform(-160,400);

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(-160,-190);

	this.glasses_0 = new lib.glasses_0_mc();
	this.glasses_0.setTransform(-160,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_0}]}).to({state:[{t:this.accessory_0}]},9).to({state:[{t:this.glasses_0}]},4).wait(3));

	// options
	this.dress_9 = new lib.dress_9_2_mc();
	this.dress_9.setTransform(0,-130);

	this.dress_2 = new lib.dress_2_2_mc();
	this.dress_2.setTransform(0,-130);

	this.dress_3 = new lib.dress_3_2_mc();
	this.dress_3.setTransform(0,-130);

	this.dress_4 = new lib.dress_4_2_mc();
	this.dress_4.setTransform(0,-130);

	this.dress_5 = new lib.dress_5_2_mc();
	this.dress_5.setTransform(0,-130);

	this.dress_6 = new lib.dress_6_2_mc();
	this.dress_6.setTransform(0,-130);

	this.dress_7 = new lib.dress_7_2_mc();
	this.dress_7.setTransform(0,-130);

	this.dress_8 = new lib.dress_8_2_mc();
	this.dress_8.setTransform(0,-130);

	this.dress_1 = new lib.dress_1_2_mc();
	this.dress_1.setTransform(0,-130);

	this.accessory_4 = new lib.accessory_4_2_mc();
	this.accessory_4.setTransform(50,-15);

	this.accessory_1 = new lib.accessory_1_2_mc();
	this.accessory_1.setTransform(-50,-105);

	this.accessory_3 = new lib.accessory_3_2_mc();
	this.accessory_3.setTransform(-50,-15);

	this.accessory_2 = new lib.accessory_2_2_mc();
	this.accessory_2.setTransform(50,-110);

	this.accessory_7 = new lib.accessory_7_2_mc();
	this.accessory_7.setTransform(-70,-75);

	this.accessory_6 = new lib.accessory_6_2_mc();
	this.accessory_6.setTransform(65,-50);

	this.accessory_9 = new lib.accessory_9_2_mc();
	this.accessory_9.setTransform(70,-10);

	this.accessory_8 = new lib.accessory_8_2_mc();
	this.accessory_8.setTransform(-70,-15);

	this.accessory_5 = new lib.accessory_5_2_mc();
	this.accessory_5.setTransform(8,-110);

	this.glasses_3 = new lib.glasses_3_2_mc();
	this.glasses_3.setTransform(0,10);

	this.glasses_2 = new lib.glasses_2_2_mc();
	this.glasses_2.setTransform(60,-90,1,1,-45);

	this.glasses_1 = new lib.glasses_1_2_mc();
	this.glasses_1.setTransform(-50,-90,1,1,-45);

	this.glasses_6 = new lib.glasses_6_2_mc();
	this.glasses_6.setTransform(0,10);

	this.glasses_5 = new lib.glasses_5_2_mc();
	this.glasses_5.setTransform(-50,-95,1,1,-45);

	this.glasses_4 = new lib.glasses_4_2_mc();
	this.glasses_4.setTransform(60,-95,1,1,-45);

	this.glasses_7 = new lib.glasses_7_2_mc();
	this.glasses_7.setTransform(0,10);

	this.glasses_9 = new lib.glasses_9_2_mc();
	this.glasses_9.setTransform(60,-95,1,1,-45);

	this.glasses_8 = new lib.glasses_8_2_mc();
	this.glasses_8.setTransform(-50,-95,1,1,-45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_9}]}).to({state:[{t:this.dress_2}]},1).to({state:[{t:this.dress_3}]},1).to({state:[{t:this.dress_4}]},1).to({state:[{t:this.dress_5}]},1).to({state:[{t:this.dress_6}]},1).to({state:[{t:this.dress_7}]},1).to({state:[{t:this.dress_8}]},1).to({state:[{t:this.dress_1}]},1).to({state:[{t:this.accessory_1},{t:this.accessory_4}]},1).to({state:[{t:this.accessory_2},{t:this.accessory_3}]},1).to({state:[{t:this.accessory_6},{t:this.accessory_7}]},1).to({state:[{t:this.accessory_5},{t:this.accessory_8},{t:this.accessory_9}]},1).to({state:[{t:this.glasses_1},{t:this.glasses_2},{t:this.glasses_3}]},1).to({state:[{t:this.glasses_4},{t:this.glasses_5},{t:this.glasses_6}]},1).to({state:[{t:this.glasses_8},{t:this.glasses_9},{t:this.glasses_7}]},1).wait(1));

	// decor
	this.instance = new lib.shelves_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-315,520,736);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-260,-211,520,421), rect, new cjs.Rectangle(-260,-344.7,520,554.7), rect=new cjs.Rectangle(-260,-211,520,421), rect, rect, rect];


(lib.closet_dress_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.dress_0 = new lib.dress_0_mc();
	this.dress_0.setTransform(160,400);

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(160,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_0}]}).to({state:[{t:this.accessory_0}]},9).wait(3));

	// options
	this.dress_5 = new lib.dress_5_1_mc();
	this.dress_5.setTransform(0,-130);

	this.dress_2 = new lib.dress_2_1_mc();
	this.dress_2.setTransform(0,-130);

	this.dress_3 = new lib.dress_3_1_mc();
	this.dress_3.setTransform(0,-130);

	this.dress_4 = new lib.dress_4_1_mc();
	this.dress_4.setTransform(0,-130);

	this.dress_9 = new lib.dress_9_1_mc();
	this.dress_9.setTransform(0,-130);

	this.dress_6 = new lib.dress_6_1_mc();
	this.dress_6.setTransform(0,-130);

	this.dress_7 = new lib.dress_7_1_mc();
	this.dress_7.setTransform(0,-130);

	this.dress_8 = new lib.dress_8_1_mc();
	this.dress_8.setTransform(0,-130);

	this.dress_1 = new lib.dress_1_1_mc();
	this.dress_1.setTransform(0,-130);

	this.accessory_1 = new lib.accessory_1_1_mc();
	this.accessory_1.setTransform(-80,-50);

	this.accessory_4 = new lib.accessory_4_1_mc();
	this.accessory_4.setTransform(80,-55);

	this.accessory_3 = new lib.accessory_3_1_mc();
	this.accessory_3.setTransform(10,-150);

	this.accessory_8 = new lib.accessory_8_1_mc();
	this.accessory_8.setTransform(80,-60);

	this.accessory_7 = new lib.accessory_7_1_mc();
	this.accessory_7.setTransform(-80,-55);

	this.accessory_5 = new lib.accessory_5_1_mc();
	this.accessory_5.setTransform(10,-145);

	this.accessory_6 = new lib.accessory_6_1_mc();
	this.accessory_6.setTransform(10,-145);

	this.accessory_2 = new lib.accessory_2_1_mc();
	this.accessory_2.setTransform(80,-55);

	this.accessory_9 = new lib.accessory_9_1_mc();
	this.accessory_9.setTransform(-80,-55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_5}]}).to({state:[{t:this.dress_2}]},1).to({state:[{t:this.dress_3}]},1).to({state:[{t:this.dress_4}]},1).to({state:[{t:this.dress_9}]},1).to({state:[{t:this.dress_6}]},1).to({state:[{t:this.dress_7}]},1).to({state:[{t:this.dress_8}]},1).to({state:[{t:this.dress_1}]},1).to({state:[{t:this.accessory_3},{t:this.accessory_4},{t:this.accessory_1}]},1).to({state:[{t:this.accessory_5},{t:this.accessory_7},{t:this.accessory_8}]},1).to({state:[{t:this.accessory_9},{t:this.accessory_2},{t:this.accessory_6}]},1).wait(1));

	// decor
	this.instance = new lib.shelves_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-315,520,736);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-260,-256.1,520,466.1), new cjs.Rectangle(-260,-247.2,520,457.3), new cjs.Rectangle(-260,-242.5,520,452.5)];


(lib.bodyDressupPanel_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_dress_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-315,520,736);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_hair_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-315,520,525);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-280,520,490);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_dress_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-315,520,736);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_hair_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-315,520,525);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-280,520,490);
p.frameBounds = [rect];


(lib.animation_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// animation
	this.instance = new lib.title_mc();
	this.instance.setTransform(0,250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({y:-50},15).to({y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-295,104,590,241);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-295,84,590,241), new cjs.Rectangle(-295,64,590,241), new cjs.Rectangle(-295,44,590,241), new cjs.Rectangle(-295,24,590,241), new cjs.Rectangle(-295,4,590,241), new cjs.Rectangle(-295,-16,590,241), new cjs.Rectangle(-295,-36,590,241), new cjs.Rectangle(-295,-56,590,241), new cjs.Rectangle(-295,-76,590,241), new cjs.Rectangle(-295,-96,590,241), new cjs.Rectangle(-295,-116,590,241), new cjs.Rectangle(-295,-136,590,241), new cjs.Rectangle(-295,-156,590,241), new cjs.Rectangle(-295,-176,590,241), new cjs.Rectangle(-295,-196,590,241), new cjs.Rectangle(-295,-186,590,241), new cjs.Rectangle(-295,-176,590,241), new cjs.Rectangle(-295,-166,590,241), new cjs.Rectangle(-295,-156,590,241), new cjs.Rectangle(-295,-146,590,241)];


(lib.CurtainScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.curtain_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,600,1600,600);
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


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// filters
	this.filters_animation_mc = new lib.filters_animation_mc();
	this.filters_animation_mc.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.filters_animation_mc).wait(1));

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(450,540);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(350,540);

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
p.nominalBounds = rect = new cjs.Rectangle(-400,-319.9,1600,1780);
p.frameBounds = [rect];


(lib.dressupPanel_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-190,-40);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(190,-40);

	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_3},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-315,520,865);
p.frameBounds = [rect];


(lib.dressupPanel_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-190,-40);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(190,-40);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-315,520,865);
p.frameBounds = [rect];


(lib.dressupPanel_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-190,-40);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(190,-40);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-280,520,830);
p.frameBounds = [rect];


(lib.dressupPanel_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-190,-40);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(190,-40);

	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_3},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-315,520,865);
p.frameBounds = [rect];


(lib.dressupPanel_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-190,-40);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(190,-40);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-315,520,865);
p.frameBounds = [rect];


(lib.dressupPanel_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-190,-40);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(190,-40);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-280,520,830);
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


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(700,500,0.947,0.947);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(50.5,700.5,0.75,0.75,0,0,0,0.7,0.7);

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
	this.credits_btn.setTransform(50,540,0.727,0.727);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.social_network_mc},{t:this.play_btn}]}).wait(1));

	// title
	this.instance = new lib.animation_title_mc();
	this.instance.setTransform(350,530);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(0,400);
	this.instance_1.alpha = 0.199;
	this.instance_1.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.decor_background_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// heroes
	this.instance_3 = new lib.heroes_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(200,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_4 = new lib.background_1_img();
	this.instance_4.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1281.9);
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
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(200,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1261.9);
p.frameBounds = [rect];


(lib.quest_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":99,"end":299});

	// timeline functions:
	this.frame_39 = function() {
		try
		{
			app.addSoundFunc("open_sound", 0.4);
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
			app.addSoundFunc("open_2_sound", 0.4);
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
			app.addSoundFunc("close_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(25).call(this.frame_64).wait(55).call(this.frame_119).wait(181));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(260,520,0.789,0.789);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(300));

	// bag_top
	this.instance = new lib.bag_top_mc();
	this.instance.setTransform(260,400);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:900},0).wait(38).to({y:300},20).to({y:400},5).wait(75).to({y:350},5).to({y:1200},15).wait(141));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_6_mc();
	this.dressupPanel_mc.setTransform(260,400);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:1200},0).wait(63).to({y:350},20).to({y:400},5).wait(30).to({y:350},5).to({y:1200},15).wait(161));

	// bag_bottom
	this.instance_1 = new lib.bag_bottom_mc();
	this.instance_1.setTransform(260,400);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:1200},0).wait(38).to({y:300},20).to({y:400},5).wait(75).to({y:350},5).to({y:1200},10).wait(146));

	// photoflash
	this.photoflash_comp = new lib.photoflash_0_mc();
	this.photoflash_comp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.photoflash_comp).wait(154).to({_off:false},0).to({_off:true},100).wait(46));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(620,360);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:1500},0).wait(18).to({x:520},20).to({x:620},5).wait(110).to({x:375},15).wait(100).to({skewY:180,x:430},0).wait(10).to({x:1400},20).wait(1));

	// shadow
	this.instance_2 = new lib.shadow_dressup_mc();
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(154).to({_off:false},0).to({alpha:1},15).wait(131));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,23,901.5,927);
p.frameBounds = [rect, rect=new cjs.Rectangle(-85,23,1781.5,1727), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-85,23,1732.5,1727), new cjs.Rectangle(-85,23,1683.5,1727), new cjs.Rectangle(-85,23,1634.5,1727), new cjs.Rectangle(-85,23,1585.5,1727), new cjs.Rectangle(-85,23,1536.5,1727), new cjs.Rectangle(-85,23,1487.5,1727), new cjs.Rectangle(-85,23,1438.5,1727), new cjs.Rectangle(-85,23,1389.5,1727), new cjs.Rectangle(-85,23,1340.5,1727), new cjs.Rectangle(-85,23,1291.5,1727), new cjs.Rectangle(-85,23,1242.5,1727), new cjs.Rectangle(-85,23,1193.5,1727), new cjs.Rectangle(-85,23,1144.5,1727), new cjs.Rectangle(-85,23,1095.5,1727), new cjs.Rectangle(-85,23,1046.5,1727), new cjs.Rectangle(-85,23,997.5,1727), new cjs.Rectangle(-85,23,948.5,1727), new cjs.Rectangle(-85,23,899.5,1727), new cjs.Rectangle(-85,23,850.5,1727), new cjs.Rectangle(-85,23,801.5,1727), new cjs.Rectangle(-85,23,821.5,1727), new cjs.Rectangle(-85,23,841.5,1727), new cjs.Rectangle(-85,23,861.5,1727), new cjs.Rectangle(-85,23,881.5,1727), rect=new cjs.Rectangle(-85,23,901.5,1727), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-85,23,901.5,1684.5), new cjs.Rectangle(-85,23,901.5,1642), new cjs.Rectangle(-85,23,901.5,1599.5), new cjs.Rectangle(-85,23,901.5,1557), new cjs.Rectangle(-85,23,901.5,1514.5), new cjs.Rectangle(-85,23,901.5,1472), new cjs.Rectangle(-85,23,901.5,1429.5), new cjs.Rectangle(-85,23,901.5,1387), new cjs.Rectangle(-85,23,901.5,1344.5), new cjs.Rectangle(-85,23,901.5,1302), new cjs.Rectangle(-85,23,901.5,1259.5), new cjs.Rectangle(-85,23,901.5,1217), new cjs.Rectangle(-85,23,901.5,1174.5), new cjs.Rectangle(-85,23,901.5,1132), new cjs.Rectangle(-85,23,901.5,1089.5), new cjs.Rectangle(-85,23,901.5,1047), new cjs.Rectangle(-85,23,901.5,1004.5), new cjs.Rectangle(-85,23,901.5,962), new cjs.Rectangle(-85,23,901.5,919.5), new cjs.Rectangle(-85,23,901.5,877), new cjs.Rectangle(-85,23,901.5,887), new cjs.Rectangle(-85,23,901.5,897), new cjs.Rectangle(-85,23,901.5,907), new cjs.Rectangle(-85,23,901.5,917), rect=new cjs.Rectangle(-85,23,901.5,927), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-85,23,901.5,917), new cjs.Rectangle(-85,23,901.5,907), new cjs.Rectangle(-85,23,901.5,897), new cjs.Rectangle(-85,23,901.5,887), new cjs.Rectangle(-85,23,901.5,877), new cjs.Rectangle(-85,23,901.5,933.7), new cjs.Rectangle(-85,23,901.5,990.4), new cjs.Rectangle(-85,23,901.5,1047), new cjs.Rectangle(-85,23,901.5,1103.7), new cjs.Rectangle(-85,23,901.5,1160.4), new cjs.Rectangle(-85,23,901.5,1217), new cjs.Rectangle(-85,23,901.5,1273.7), new cjs.Rectangle(-85,23,901.5,1330.4), new cjs.Rectangle(-85,23,901.5,1387), new cjs.Rectangle(-85,23,901.5,1443.7), new cjs.Rectangle(-85,23,901.5,1500.4), new cjs.Rectangle(-85,23,901.5,1557), new cjs.Rectangle(-85,23,901.5,1613.7), new cjs.Rectangle(-85,23,901.5,1670.4), rect=new cjs.Rectangle(-85,23,901.5,1727), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-410,-387,1620,2137), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-410,-10,1620,1760), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-410,-10,1644.5,1760), new cjs.Rectangle(-410,-10,1693,1760), new cjs.Rectangle(-410,-10,1741.5,1760), new cjs.Rectangle(-410,-10,1790,1760), new cjs.Rectangle(-410,-10,1838.5,1760), new cjs.Rectangle(-410,-10,1887,1760), new cjs.Rectangle(-410,-10,1935.5,1760)];


(lib.quest_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":99,"end":249});

	// timeline functions:
	this.frame_39 = function() {
		try
		{
			app.addSoundFunc("open_sound", 0.4);
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
			app.addSoundFunc("open_2_sound", 0.4);
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
			app.addSoundFunc("close_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(25).call(this.frame_64).wait(55).call(this.frame_119).wait(131));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(260,520,0.789,0.789);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(250));

	// bag_top
	this.instance = new lib.bag_top_mc();
	this.instance.setTransform(260,400);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:900},0).wait(38).to({y:300},20).to({y:400},5).wait(75).to({y:350},5).to({y:1200},15).wait(91));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_5_mc();
	this.dressupPanel_mc.setTransform(260,400);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:1200},0).wait(63).to({y:350},20).to({y:400},5).wait(30).to({y:350},5).to({y:1200},15).wait(111));

	// bag_bottom
	this.instance_1 = new lib.bag_bottom_mc();
	this.instance_1.setTransform(260,400);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:1200},0).wait(38).to({y:300},20).to({y:400},5).wait(75).to({y:350},5).to({y:1200},10).wait(96));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(620,360);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:1500},0).wait(18).to({x:520},20).to({x:620},5).wait(110).to({x:375},15).wait(81));

	// decor
	this.instance_2 = new lib.decor_shadow_mc();
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(154).to({_off:false},0).to({alpha:1},15).wait(81));

	// shadow
	this.instance_3 = new lib.shadow_dressup_mc();
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(154).to({_off:false},0).to({alpha:1},15).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,23,901.5,927);
p.frameBounds = [rect, rect=new cjs.Rectangle(-85,23,1781.5,1727), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-85,23,1732.5,1727), new cjs.Rectangle(-85,23,1683.5,1727), new cjs.Rectangle(-85,23,1634.5,1727), new cjs.Rectangle(-85,23,1585.5,1727), new cjs.Rectangle(-85,23,1536.5,1727), new cjs.Rectangle(-85,23,1487.5,1727), new cjs.Rectangle(-85,23,1438.5,1727), new cjs.Rectangle(-85,23,1389.5,1727), new cjs.Rectangle(-85,23,1340.5,1727), new cjs.Rectangle(-85,23,1291.5,1727), new cjs.Rectangle(-85,23,1242.5,1727), new cjs.Rectangle(-85,23,1193.5,1727), new cjs.Rectangle(-85,23,1144.5,1727), new cjs.Rectangle(-85,23,1095.5,1727), new cjs.Rectangle(-85,23,1046.5,1727), new cjs.Rectangle(-85,23,997.5,1727), new cjs.Rectangle(-85,23,948.5,1727), new cjs.Rectangle(-85,23,899.5,1727), new cjs.Rectangle(-85,23,850.5,1727), new cjs.Rectangle(-85,23,801.5,1727), new cjs.Rectangle(-85,23,821.5,1727), new cjs.Rectangle(-85,23,841.5,1727), new cjs.Rectangle(-85,23,861.5,1727), new cjs.Rectangle(-85,23,881.5,1727), rect=new cjs.Rectangle(-85,23,901.5,1727), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-85,23,901.5,1684.5), new cjs.Rectangle(-85,23,901.5,1642), new cjs.Rectangle(-85,23,901.5,1599.5), new cjs.Rectangle(-85,23,901.5,1557), new cjs.Rectangle(-85,23,901.5,1514.5), new cjs.Rectangle(-85,23,901.5,1472), new cjs.Rectangle(-85,23,901.5,1429.5), new cjs.Rectangle(-85,23,901.5,1387), new cjs.Rectangle(-85,23,901.5,1344.5), new cjs.Rectangle(-85,23,901.5,1302), new cjs.Rectangle(-85,23,901.5,1259.5), new cjs.Rectangle(-85,23,901.5,1217), new cjs.Rectangle(-85,23,901.5,1174.5), new cjs.Rectangle(-85,23,901.5,1132), new cjs.Rectangle(-85,23,901.5,1089.5), new cjs.Rectangle(-85,23,901.5,1047), new cjs.Rectangle(-85,23,901.5,1004.5), new cjs.Rectangle(-85,23,901.5,962), new cjs.Rectangle(-85,23,901.5,919.5), new cjs.Rectangle(-85,23,901.5,877), new cjs.Rectangle(-85,23,901.5,887), new cjs.Rectangle(-85,23,901.5,897), new cjs.Rectangle(-85,23,901.5,907), new cjs.Rectangle(-85,23,901.5,917), rect=new cjs.Rectangle(-85,23,901.5,927), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-85,23,901.5,917), new cjs.Rectangle(-85,23,901.5,907), new cjs.Rectangle(-85,23,901.5,897), new cjs.Rectangle(-85,23,901.5,887), new cjs.Rectangle(-85,23,901.5,877), new cjs.Rectangle(-85,23,901.5,933.7), new cjs.Rectangle(-85,23,901.5,990.4), new cjs.Rectangle(-85,23,901.5,1047), new cjs.Rectangle(-85,23,901.5,1103.7), new cjs.Rectangle(-85,23,901.5,1160.4), new cjs.Rectangle(-85,23,901.5,1217), new cjs.Rectangle(-85,23,901.5,1273.7), new cjs.Rectangle(-85,23,901.5,1330.4), new cjs.Rectangle(-85,23,901.5,1387), new cjs.Rectangle(-85,23,901.5,1443.7), new cjs.Rectangle(-85,23,901.5,1500.4), new cjs.Rectangle(-85,23,901.5,1557), new cjs.Rectangle(-85,23,901.5,1613.7), new cjs.Rectangle(-85,23,901.5,1670.4), rect=new cjs.Rectangle(-85,23,901.5,1727), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-410,-10,1620,1760), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":99,"end":249});

	// timeline functions:
	this.frame_39 = function() {
		try
		{
			app.addSoundFunc("open_sound", 0.4);
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
			app.addSoundFunc("open_2_sound", 0.4);
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
			app.addSoundFunc("close_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(25).call(this.frame_64).wait(55).call(this.frame_119).wait(131));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(260,520,0.789,0.789);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(250));

	// bag_top
	this.instance = new lib.bag_top_mc();
	this.instance.setTransform(260,400);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:900},0).wait(38).to({y:300},20).to({y:400},5).wait(75).to({y:350},5).to({y:1200},15).wait(91));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_4_mc();
	this.dressupPanel_mc.setTransform(260,400);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:1200},0).wait(63).to({y:350},20).to({y:400},5).wait(30).to({y:350},5).to({y:1200},15).wait(111));

	// bag_bottom
	this.instance_1 = new lib.bag_bottom_mc();
	this.instance_1.setTransform(260,400);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:1200},0).wait(38).to({y:300},20).to({y:400},5).wait(75).to({y:350},5).to({y:1200},10).wait(96));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(620,360);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:1500},0).wait(18).to({x:520},20).to({x:620},5).wait(110).to({x:375},15).wait(81));

	// decor
	this.instance_2 = new lib.decor_shadow_mc();
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(154).to({_off:false},0).to({alpha:1},15).wait(81));

	// shadow
	this.instance_3 = new lib.shadow_dressup_mc();
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(154).to({_off:false},0).to({alpha:1},15).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,23,901.5,927);
p.frameBounds = [rect, rect=new cjs.Rectangle(-85,23,1781.5,1727), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-85,23,1732.5,1727), new cjs.Rectangle(-85,23,1683.5,1727), new cjs.Rectangle(-85,23,1634.5,1727), new cjs.Rectangle(-85,23,1585.5,1727), new cjs.Rectangle(-85,23,1536.5,1727), new cjs.Rectangle(-85,23,1487.5,1727), new cjs.Rectangle(-85,23,1438.5,1727), new cjs.Rectangle(-85,23,1389.5,1727), new cjs.Rectangle(-85,23,1340.5,1727), new cjs.Rectangle(-85,23,1291.5,1727), new cjs.Rectangle(-85,23,1242.5,1727), new cjs.Rectangle(-85,23,1193.5,1727), new cjs.Rectangle(-85,23,1144.5,1727), new cjs.Rectangle(-85,23,1095.5,1727), new cjs.Rectangle(-85,23,1046.5,1727), new cjs.Rectangle(-85,23,997.5,1727), new cjs.Rectangle(-85,23,948.5,1727), new cjs.Rectangle(-85,23,899.5,1727), new cjs.Rectangle(-85,23,850.5,1727), new cjs.Rectangle(-85,23,801.5,1727), new cjs.Rectangle(-85,23,821.5,1727), new cjs.Rectangle(-85,23,841.5,1727), new cjs.Rectangle(-85,23,861.5,1727), new cjs.Rectangle(-85,23,881.5,1727), rect=new cjs.Rectangle(-85,23,901.5,1727), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-85,23,901.5,1684.5), new cjs.Rectangle(-85,23,901.5,1642), new cjs.Rectangle(-85,23,901.5,1599.5), new cjs.Rectangle(-85,23,901.5,1557), new cjs.Rectangle(-85,23,901.5,1514.5), new cjs.Rectangle(-85,23,901.5,1472), new cjs.Rectangle(-85,23,901.5,1429.5), new cjs.Rectangle(-85,23,901.5,1387), new cjs.Rectangle(-85,23,901.5,1344.5), new cjs.Rectangle(-85,23,901.5,1302), new cjs.Rectangle(-85,23,901.5,1259.5), new cjs.Rectangle(-85,23,901.5,1217), new cjs.Rectangle(-85,23,901.5,1174.5), new cjs.Rectangle(-85,23,901.5,1132), new cjs.Rectangle(-85,23,901.5,1089.5), new cjs.Rectangle(-85,23,901.5,1047), new cjs.Rectangle(-85,23,901.5,1004.5), new cjs.Rectangle(-85,23,901.5,962), new cjs.Rectangle(-85,23,901.5,919.5), new cjs.Rectangle(-85,23,901.5,877), new cjs.Rectangle(-85,23,901.5,887), new cjs.Rectangle(-85,23,901.5,897), new cjs.Rectangle(-85,23,901.5,907), new cjs.Rectangle(-85,23,901.5,917), rect=new cjs.Rectangle(-85,23,901.5,927), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-85,23,901.5,917), new cjs.Rectangle(-85,23,901.5,907), new cjs.Rectangle(-85,23,901.5,897), new cjs.Rectangle(-85,23,901.5,887), new cjs.Rectangle(-85,23,901.5,877), new cjs.Rectangle(-85,23,901.5,933.7), new cjs.Rectangle(-85,23,901.5,990.4), new cjs.Rectangle(-85,23,901.5,1047), new cjs.Rectangle(-85,23,901.5,1103.7), new cjs.Rectangle(-85,23,901.5,1160.4), new cjs.Rectangle(-85,23,901.5,1217), new cjs.Rectangle(-85,23,901.5,1273.7), new cjs.Rectangle(-85,23,901.5,1330.4), new cjs.Rectangle(-85,23,901.5,1387), new cjs.Rectangle(-85,23,901.5,1443.7), new cjs.Rectangle(-85,23,901.5,1500.4), new cjs.Rectangle(-85,23,901.5,1557), new cjs.Rectangle(-85,23,901.5,1613.7), new cjs.Rectangle(-85,23,901.5,1670.4), rect=new cjs.Rectangle(-85,23,901.5,1727), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-410,-10,1620,1760), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":99,"end":299});

	// timeline functions:
	this.frame_39 = function() {
		try
		{
			app.addSoundFunc("open_sound", 0.4);
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
			app.addSoundFunc("open_2_sound", 0.4);
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
			app.addSoundFunc("close_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(30).call(this.frame_69).wait(50).call(this.frame_119).wait(181));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(540,520,0.789,0.789);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(300));

	// bag_top
	this.instance = new lib.bag_top_mc();
	this.instance.setTransform(540,400);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:900},0).wait(38).to({y:300},20).to({y:400},10).wait(70).to({y:300},5).to({y:900},15).wait(141));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_3_mc();
	this.dressupPanel_mc.setTransform(540,400);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:1200},0).wait(68).to({y:350},15).to({y:400},5).wait(30).to({y:350},5).to({y:1200},15).wait(161));

	// bag_bottom
	this.instance_1 = new lib.bag_bottom_mc();
	this.instance_1.setTransform(540,400);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:900},0).wait(38).to({y:300},20).to({y:400},10).wait(70).to({y:300},5).to({y:900},10).wait(146));

	// photoflash
	this.photoflash_comp = new lib.photoflash_0_mc();
	this.photoflash_comp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.photoflash_comp).wait(154).to({_off:false},0).to({_off:true},100).wait(46));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(180,350);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:-800},0).wait(18).to({x:280},20).to({x:180},5).wait(110).to({x:420},15).wait(110).to({x:1400},20).wait(1));

	// shadow
	this.instance_2 = new lib.shadow_dressup_mc();
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(154).to({_off:false},0).to({alpha:1},15).wait(131));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.8,-10,977.8,960.1);
p.frameBounds = [rect, rect=new cjs.Rectangle(-1072.8,-10,1957.8,1760.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1018.8,-10,1903.8,1760.1), new cjs.Rectangle(-964.8,-10,1849.8,1760.1), new cjs.Rectangle(-910.8,-10,1795.8,1760.1), new cjs.Rectangle(-856.8,-10,1741.8,1760.1), new cjs.Rectangle(-802.8,-10,1687.8,1760.1), new cjs.Rectangle(-748.8,-10,1633.8,1760.1), new cjs.Rectangle(-694.8,-10,1579.8,1760.1), new cjs.Rectangle(-640.8,-10,1525.8,1760.1), new cjs.Rectangle(-586.8,-10,1471.8,1760.1), new cjs.Rectangle(-532.8,-10,1417.8,1760.1), new cjs.Rectangle(-478.8,-10,1363.8,1760.1), new cjs.Rectangle(-424.8,-10,1309.8,1760.1), new cjs.Rectangle(-370.8,-10,1255.8,1760.1), new cjs.Rectangle(-316.8,-10,1201.8,1760.1), new cjs.Rectangle(-262.8,-10,1147.8,1760.1), new cjs.Rectangle(-208.8,-10,1093.8,1760.1), new cjs.Rectangle(-154.8,-10,1039.8,1760.1), new cjs.Rectangle(-100.8,-10,985.8,1760.1), new cjs.Rectangle(-46.8,-10,931.8,1760.1), new cjs.Rectangle(7.2,-10,877.8,1760.1), new cjs.Rectangle(-12.8,-10,897.8,1760.1), new cjs.Rectangle(-32.8,-10,917.8,1760.1), new cjs.Rectangle(-52.8,-10,937.8,1760.1), new cjs.Rectangle(-72.8,-10,957.8,1760.1), rect=new cjs.Rectangle(-92.8,-10,977.8,1760.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-92.8,-10,977.8,1703.4), new cjs.Rectangle(-92.8,-10,977.8,1646.7), new cjs.Rectangle(-92.8,-10,977.8,1590.1), new cjs.Rectangle(-92.8,-10,977.8,1533.4), new cjs.Rectangle(-92.8,-10,977.8,1476.7), new cjs.Rectangle(-92.8,-10,977.8,1420.1), new cjs.Rectangle(-92.8,-10,977.8,1363.4), new cjs.Rectangle(-92.8,-10,977.8,1306.7), new cjs.Rectangle(-92.8,-10,977.8,1250.1), new cjs.Rectangle(-92.8,-10,977.8,1193.4), new cjs.Rectangle(-92.8,-10,977.8,1136.7), new cjs.Rectangle(-92.8,-10,977.8,1080.1), new cjs.Rectangle(-92.8,-10,977.8,1023.4), new cjs.Rectangle(-92.8,-10,977.8,966.7), new cjs.Rectangle(-92.8,-10,977.8,910.1), new cjs.Rectangle(-92.8,-10,977.8,920.1), new cjs.Rectangle(-92.8,-10,977.8,930.1), new cjs.Rectangle(-92.8,-10,977.8,940.1), new cjs.Rectangle(-92.8,-10,977.8,950.1), rect=new cjs.Rectangle(-92.8,-10,977.8,960.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-92.8,-10,977.8,950.1), new cjs.Rectangle(-92.8,-10,977.8,940.1), new cjs.Rectangle(-92.8,-10,977.8,930.1), new cjs.Rectangle(-92.8,-10,977.8,920.1), new cjs.Rectangle(-92.8,-10,977.8,910.1), new cjs.Rectangle(-92.8,-10,977.8,966.7), new cjs.Rectangle(-92.8,-10,977.8,1023.4), new cjs.Rectangle(-92.8,-10,977.8,1080.1), new cjs.Rectangle(-92.8,-10,977.8,1136.7), new cjs.Rectangle(-92.8,-10,977.8,1193.4), new cjs.Rectangle(-92.8,-10,977.8,1250.1), new cjs.Rectangle(-92.8,-10,977.8,1306.7), new cjs.Rectangle(-92.8,-10,977.8,1363.4), new cjs.Rectangle(-92.8,-10,977.8,1420.1), new cjs.Rectangle(-92.8,-10,977.8,1476.7), new cjs.Rectangle(-92.8,-10,977.8,1533.4), new cjs.Rectangle(-92.8,-10,977.8,1590.1), new cjs.Rectangle(-92.8,-10,977.8,1646.7), new cjs.Rectangle(-92.8,-10,977.8,1703.4), rect=new cjs.Rectangle(-92.8,-10,977.8,1760.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-410,-387,1620,2137), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-410,-10,1620,1760.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-410,-10,1664.2,1760.1), new cjs.Rectangle(-410,-10,1713.2,1760.1), new cjs.Rectangle(-410,-10,1762.2,1760.1), new cjs.Rectangle(-410,-10,1811.2,1760.1), new cjs.Rectangle(-410,-10,1860.2,1760.1), new cjs.Rectangle(-410,-10,1909.2,1760.1), new cjs.Rectangle(-410,-10,1958.2,1760.1), new cjs.Rectangle(-410,-10,2007.2,1760.1)];


(lib.quest_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":99,"end":249});

	// timeline functions:
	this.frame_39 = function() {
		try
		{
			app.addSoundFunc("open_sound", 0.4);
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
			app.addSoundFunc("open_2_sound", 0.4);
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
			app.addSoundFunc("close_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(25).call(this.frame_64).wait(55).call(this.frame_119).wait(131));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(540,520,0.789,0.789);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(250));

	// bag_top
	this.instance = new lib.bag_top_mc();
	this.instance.setTransform(540,400);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:900},0).wait(38).to({y:300},20).to({y:400},5).wait(75).to({y:300},5).to({y:900},15).wait(91));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_2_mc();
	this.dressupPanel_mc.setTransform(540,400);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:1200},0).wait(63).to({y:350},20).to({y:400},5).wait(30).to({y:350},5).to({y:1200},15).wait(111));

	// bag_bottom
	this.instance_1 = new lib.bag_bottom_mc();
	this.instance_1.setTransform(540,400);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:900},0).wait(38).to({y:300},20).to({y:400},5).wait(75).to({y:300},5).to({y:900},10).wait(96));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(180,350);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:-800},0).wait(18).to({x:280},20).to({x:180},5).wait(110).to({x:420},15).wait(81));

	// decor
	this.instance_2 = new lib.decor_shadow_mc();
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(154).to({_off:false},0).to({alpha:1},15).wait(81));

	// shadow
	this.instance_3 = new lib.shadow_dressup_mc();
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(154).to({_off:false},0).to({alpha:1},15).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.8,-10,977.8,960.1);
p.frameBounds = [rect, rect=new cjs.Rectangle(-1072.8,-10,1957.8,1760.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1018.8,-10,1903.8,1760.1), new cjs.Rectangle(-964.8,-10,1849.8,1760.1), new cjs.Rectangle(-910.8,-10,1795.8,1760.1), new cjs.Rectangle(-856.8,-10,1741.8,1760.1), new cjs.Rectangle(-802.8,-10,1687.8,1760.1), new cjs.Rectangle(-748.8,-10,1633.8,1760.1), new cjs.Rectangle(-694.8,-10,1579.8,1760.1), new cjs.Rectangle(-640.8,-10,1525.8,1760.1), new cjs.Rectangle(-586.8,-10,1471.8,1760.1), new cjs.Rectangle(-532.8,-10,1417.8,1760.1), new cjs.Rectangle(-478.8,-10,1363.8,1760.1), new cjs.Rectangle(-424.8,-10,1309.8,1760.1), new cjs.Rectangle(-370.8,-10,1255.8,1760.1), new cjs.Rectangle(-316.8,-10,1201.8,1760.1), new cjs.Rectangle(-262.8,-10,1147.8,1760.1), new cjs.Rectangle(-208.8,-10,1093.8,1760.1), new cjs.Rectangle(-154.8,-10,1039.8,1760.1), new cjs.Rectangle(-100.8,-10,985.8,1760.1), new cjs.Rectangle(-46.8,-10,931.8,1760.1), new cjs.Rectangle(7.2,-10,877.8,1760.1), new cjs.Rectangle(-12.8,-10,897.8,1760.1), new cjs.Rectangle(-32.8,-10,917.8,1760.1), new cjs.Rectangle(-52.8,-10,937.8,1760.1), new cjs.Rectangle(-72.8,-10,957.8,1760.1), rect=new cjs.Rectangle(-92.8,-10,977.8,1760.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-92.8,-10,977.8,1717.6), new cjs.Rectangle(-92.8,-10,977.8,1675.1), new cjs.Rectangle(-92.8,-10,977.8,1632.6), new cjs.Rectangle(-92.8,-10,977.8,1590.1), new cjs.Rectangle(-92.8,-10,977.8,1547.6), new cjs.Rectangle(-92.8,-10,977.8,1505.1), new cjs.Rectangle(-92.8,-10,977.8,1462.6), new cjs.Rectangle(-92.8,-10,977.8,1420.1), new cjs.Rectangle(-92.8,-10,977.8,1377.6), new cjs.Rectangle(-92.8,-10,977.8,1335.1), new cjs.Rectangle(-92.8,-10,977.8,1292.6), new cjs.Rectangle(-92.8,-10,977.8,1250.1), new cjs.Rectangle(-92.8,-10,977.8,1207.6), new cjs.Rectangle(-92.8,-10,977.8,1165.1), new cjs.Rectangle(-92.8,-10,977.8,1122.6), new cjs.Rectangle(-92.8,-10,977.8,1080.1), new cjs.Rectangle(-92.8,-10,977.8,1037.6), new cjs.Rectangle(-92.8,-10,977.8,995.1), new cjs.Rectangle(-92.8,-10,977.8,952.6), new cjs.Rectangle(-92.8,-10,977.8,910.1), new cjs.Rectangle(-92.8,-10,977.8,920.1), new cjs.Rectangle(-92.8,-10,977.8,930.1), new cjs.Rectangle(-92.8,-10,977.8,940.1), new cjs.Rectangle(-92.8,-10,977.8,950.1), rect=new cjs.Rectangle(-92.8,-10,977.8,960.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-92.8,-10,977.8,950.1), new cjs.Rectangle(-92.8,-10,977.8,940.1), new cjs.Rectangle(-92.8,-10,977.8,930.1), new cjs.Rectangle(-92.8,-10,977.8,920.1), new cjs.Rectangle(-92.8,-10,977.8,910.1), new cjs.Rectangle(-92.8,-10,977.8,966.7), new cjs.Rectangle(-92.8,-10,977.8,1023.4), new cjs.Rectangle(-92.8,-10,977.8,1080.1), new cjs.Rectangle(-92.8,-10,977.8,1136.7), new cjs.Rectangle(-92.8,-10,977.8,1193.4), new cjs.Rectangle(-92.8,-10,977.8,1250.1), new cjs.Rectangle(-92.8,-10,977.8,1306.7), new cjs.Rectangle(-92.8,-10,977.8,1363.4), new cjs.Rectangle(-92.8,-10,977.8,1420.1), new cjs.Rectangle(-92.8,-10,977.8,1476.7), new cjs.Rectangle(-92.8,-10,977.8,1533.4), new cjs.Rectangle(-92.8,-10,977.8,1590.1), new cjs.Rectangle(-92.8,-10,977.8,1646.7), new cjs.Rectangle(-92.8,-10,977.8,1703.4), rect=new cjs.Rectangle(-92.8,-10,977.8,1760.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-410,-10,1620,1760.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":99,"end":249});

	// timeline functions:
	this.frame_39 = function() {
		try
		{
			app.addSoundFunc("open_sound", 0.4);
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
			app.addSoundFunc("open_2_sound", 0.4);
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
			app.addSoundFunc("close_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(25).call(this.frame_64).wait(55).call(this.frame_119).wait(131));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(540,520,0.789,0.789);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(250));

	// bag_top
	this.instance = new lib.bag_top_mc();
	this.instance.setTransform(540,400);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:900},0).wait(38).to({y:300},20).to({y:400},5).wait(75).to({y:300},5).to({y:900},15).wait(91));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_1_mc();
	this.dressupPanel_mc.setTransform(540,400);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:1200},0).wait(63).to({y:350},20).to({y:400},5).wait(30).to({y:350},5).to({y:1200},15).wait(111));

	// bag_bottom
	this.instance_1 = new lib.bag_bottom_mc();
	this.instance_1.setTransform(540,400);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:900},0).wait(38).to({y:300},20).to({y:400},5).wait(75).to({y:300},5).to({y:900},10).wait(96));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(180,350);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:-800},0).wait(18).to({x:280},20).to({x:180},5).wait(110).to({x:420},15).wait(81));

	// decor
	this.instance_2 = new lib.decor_shadow_mc();
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(154).to({_off:false},0).to({alpha:1},15).wait(81));

	// shadow
	this.instance_3 = new lib.shadow_dressup_mc();
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(154).to({_off:false},0).to({alpha:1},15).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.8,-10,977.8,960.1);
p.frameBounds = [rect, rect=new cjs.Rectangle(-1072.8,-10,1957.8,1760.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1018.8,-10,1903.8,1760.1), new cjs.Rectangle(-964.8,-10,1849.8,1760.1), new cjs.Rectangle(-910.8,-10,1795.8,1760.1), new cjs.Rectangle(-856.8,-10,1741.8,1760.1), new cjs.Rectangle(-802.8,-10,1687.8,1760.1), new cjs.Rectangle(-748.8,-10,1633.8,1760.1), new cjs.Rectangle(-694.8,-10,1579.8,1760.1), new cjs.Rectangle(-640.8,-10,1525.8,1760.1), new cjs.Rectangle(-586.8,-10,1471.8,1760.1), new cjs.Rectangle(-532.8,-10,1417.8,1760.1), new cjs.Rectangle(-478.8,-10,1363.8,1760.1), new cjs.Rectangle(-424.8,-10,1309.8,1760.1), new cjs.Rectangle(-370.8,-10,1255.8,1760.1), new cjs.Rectangle(-316.8,-10,1201.8,1760.1), new cjs.Rectangle(-262.8,-10,1147.8,1760.1), new cjs.Rectangle(-208.8,-10,1093.8,1760.1), new cjs.Rectangle(-154.8,-10,1039.8,1760.1), new cjs.Rectangle(-100.8,-10,985.8,1760.1), new cjs.Rectangle(-46.8,-10,931.8,1760.1), new cjs.Rectangle(7.2,-10,877.8,1760.1), new cjs.Rectangle(-12.8,-10,897.8,1760.1), new cjs.Rectangle(-32.8,-10,917.8,1760.1), new cjs.Rectangle(-52.8,-10,937.8,1760.1), new cjs.Rectangle(-72.8,-10,957.8,1760.1), rect=new cjs.Rectangle(-92.8,-10,977.8,1760.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-92.8,-10,977.8,1717.6), new cjs.Rectangle(-92.8,-10,977.8,1675.1), new cjs.Rectangle(-92.8,-10,977.8,1632.6), new cjs.Rectangle(-92.8,-10,977.8,1590.1), new cjs.Rectangle(-92.8,-10,977.8,1547.6), new cjs.Rectangle(-92.8,-10,977.8,1505.1), new cjs.Rectangle(-92.8,-10,977.8,1462.6), new cjs.Rectangle(-92.8,-10,977.8,1420.1), new cjs.Rectangle(-92.8,-10,977.8,1377.6), new cjs.Rectangle(-92.8,-10,977.8,1335.1), new cjs.Rectangle(-92.8,-10,977.8,1292.6), new cjs.Rectangle(-92.8,-10,977.8,1250.1), new cjs.Rectangle(-92.8,-10,977.8,1207.6), new cjs.Rectangle(-92.8,-10,977.8,1165.1), new cjs.Rectangle(-92.8,-10,977.8,1122.6), new cjs.Rectangle(-92.8,-10,977.8,1080.1), new cjs.Rectangle(-92.8,-10,977.8,1037.6), new cjs.Rectangle(-92.8,-10,977.8,995.1), new cjs.Rectangle(-92.8,-10,977.8,952.6), new cjs.Rectangle(-92.8,-10,977.8,910.1), new cjs.Rectangle(-92.8,-10,977.8,920.1), new cjs.Rectangle(-92.8,-10,977.8,930.1), new cjs.Rectangle(-92.8,-10,977.8,940.1), new cjs.Rectangle(-92.8,-10,977.8,950.1), rect=new cjs.Rectangle(-92.8,-10,977.8,960.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-92.8,-10,977.8,950.1), new cjs.Rectangle(-92.8,-10,977.8,940.1), new cjs.Rectangle(-92.8,-10,977.8,930.1), new cjs.Rectangle(-92.8,-10,977.8,920.1), new cjs.Rectangle(-92.8,-10,977.8,910.1), new cjs.Rectangle(-92.8,-10,977.8,966.7), new cjs.Rectangle(-92.8,-10,977.8,1023.4), new cjs.Rectangle(-92.8,-10,977.8,1080.1), new cjs.Rectangle(-92.8,-10,977.8,1136.7), new cjs.Rectangle(-92.8,-10,977.8,1193.4), new cjs.Rectangle(-92.8,-10,977.8,1250.1), new cjs.Rectangle(-92.8,-10,977.8,1306.7), new cjs.Rectangle(-92.8,-10,977.8,1363.4), new cjs.Rectangle(-92.8,-10,977.8,1420.1), new cjs.Rectangle(-92.8,-10,977.8,1476.7), new cjs.Rectangle(-92.8,-10,977.8,1533.4), new cjs.Rectangle(-92.8,-10,977.8,1590.1), new cjs.Rectangle(-92.8,-10,977.8,1646.7), new cjs.Rectangle(-92.8,-10,977.8,1703.4), rect=new cjs.Rectangle(-92.8,-10,977.8,1760.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-410,-10,1620,1760.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_6_mc = function(mode,startPosition,loop) {
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
	this.frame_1_mc = new lib.quest_1_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-349.4,901.5,1299.4);
p.frameBounds = [rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-85,-349.4,901.5,1299.4);
p.frameBounds = [rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-85,-349.4,901.5,1299.4);
p.frameBounds = [rect];


(lib.quest_3_mc = function(mode,startPosition,loop) {
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
	this.frame_1_mc = new lib.quest_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92.8,-349.4,977.8,1299.4);
p.frameBounds = [rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-92.8,-349.4,977.8,1299.4);
p.frameBounds = [rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-92.8,-349.4,977.8,1299.4);
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
	this.fullScreen_mc.setTransform(760.1,-39.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_6_img();
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
	this.fullScreen_mc.setTransform(760.1,-39.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_5_img();
	this.instance.setTransform(-400,0);

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
	this.fullScreen_mc.setTransform(760.1,-39.9,0.583,0.583,0,0,0,0.1,0.1);

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

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_4_img();
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
	this.fullScreen_mc.setTransform(760.1,-39.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-400,0);

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
	this.fullScreen_mc.setTransform(760.1,-39.9,0.583,0.583,0,0,0,0.1,0.1);

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
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,0,1600,600), rect, new cjs.Rectangle(-400,0,1600,1165), new cjs.Rectangle(-400,-280.8,1600,1281.9), new cjs.Rectangle(-400,-280.8,1600,1261.9), rect=new cjs.Rectangle(-400,-349.4,1600,1330.4), rect, rect, rect, rect, rect, new cjs.Rectangle(-400,0,1600,610), new cjs.Rectangle(-400,-319.9,1600,1780), new cjs.Rectangle(-400,0,1600,600), new cjs.Rectangle(0,0,752,430), rect=new cjs.Rectangle(-410,-10,1620,620), rect, new cjs.Rectangle(-400,600,1600,600), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-410,-10,1620,620)];


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