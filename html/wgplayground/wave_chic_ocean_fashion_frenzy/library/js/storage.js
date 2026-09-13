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
		{src:"library/images/storage_atlas_15.png", id:"storage_atlas_15"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_4", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_5", frames: [[0,0,1000,600],[1002,0,480,600],[0,602,1600,200]]},
		{name:"storage_atlas_6", frames: [[964,562,520,380],[0,0,480,600],[964,944,520,380],[964,0,380,560],[0,602,480,600],[482,0,480,600],[482,602,480,600]]},
		{name:"storage_atlas_7", frames: [[421,946,500,300],[923,1086,500,300],[1164,784,500,300],[0,764,419,425],[1164,382,400,400],[522,664,640,280],[522,382,640,280],[0,0,520,380],[1044,0,520,380],[522,0,520,380],[0,382,520,380]]},
		{name:"storage_atlas_8", frames: [[502,0,460,320],[0,302,460,320],[0,0,500,300],[462,322,460,320],[964,0,460,320],[0,624,460,320],[462,644,460,320],[924,322,460,320],[462,966,460,320],[924,644,460,320],[0,946,460,320],[924,966,460,320]]},
		{name:"storage_atlas_9", frames: [[752,704,452,266],[0,1055,382,313],[390,704,360,376],[0,704,388,349],[1206,865,374,313],[764,418,507,284],[1386,0,348,416],[1273,418,309,445],[462,0,460,320],[924,0,460,320],[0,0,460,320],[0,322,380,380],[382,322,380,380],[384,1082,795,140],[384,1224,801,126]]},
		{name:"storage_atlas_10", frames: [[1482,131,300,300],[1461,433,300,300],[0,124,380,260],[1109,604,300,300],[1411,735,300,300],[302,667,300,300],[0,659,300,300],[724,131,342,284],[382,1141,366,228],[0,1141,380,220],[1068,363,391,239],[755,604,352,257],[1068,131,412,230],[382,124,340,287],[0,413,381,244],[383,417,370,248],[750,1147,776,105],[769,1037,778,108],[826,0,769,129],[0,0,824,122],[0,1027,767,112],[604,906,735,119]]},
		{name:"storage_atlas_11", frames: [[0,213,280,280],[1005,759,260,260],[1343,497,260,260],[1529,759,260,260],[1267,759,260,260],[1136,1021,260,260],[1398,1021,260,260],[1081,497,260,260],[743,689,260,260],[1116,0,285,268],[0,495,298,263],[721,497,358,190],[0,760,257,304],[785,110,291,238],[382,110,401,189],[0,0,380,211],[0,1066,349,223],[300,713,358,202],[300,506,360,205],[1403,204,361,207],[712,1196,378,182],[351,1196,359,193],[351,917,390,185],[1403,0,373,202],[351,301,368,203],[351,1104,783,90],[721,413,834,82],[382,0,732,108]]},
		{name:"storage_atlas_12", frames: [[0,0,260,260],[0,262,260,260],[0,524,260,260],[262,1048,260,260],[262,0,260,260],[524,0,260,260],[0,1048,260,260],[0,786,260,260],[786,0,260,260],[262,262,260,260],[262,524,260,260],[262,786,260,260],[524,786,260,260],[1310,262,260,260],[524,1048,260,260],[786,262,260,260],[1048,262,260,260],[786,524,260,260],[524,524,260,260],[786,786,260,260],[1310,0,260,260],[1048,0,260,260],[786,1048,260,260],[524,262,260,260],[1500,828,224,262],[1318,524,224,262],[1544,564,224,262],[1048,759,224,262],[1274,788,224,262],[1572,300,224,262],[1048,1023,224,262],[1048,524,268,233],[1572,0,220,298],[1274,1052,216,269],[1492,1092,216,269],[0,1310,795,84]]},
		{name:"storage_atlas_13", frames: [[436,0,240,240],[1487,0,220,220],[222,764,220,220],[0,813,220,220],[0,1035,220,220],[218,542,220,220],[436,242,220,220],[222,986,220,220],[440,464,220,220],[444,686,220,220],[444,908,220,220],[900,217,220,220],[888,661,220,220],[1566,222,220,220],[1122,423,220,220],[666,1105,220,220],[1344,222,220,220],[666,883,220,220],[884,439,220,220],[888,883,220,220],[1122,201,220,220],[1344,444,220,220],[444,1130,220,220],[1566,444,220,220],[1110,645,220,220],[1110,867,220,220],[678,217,220,220],[662,439,220,220],[666,661,220,220],[888,1105,220,220],[1332,888,220,220],[1332,1110,220,220],[1110,1089,220,220],[1554,666,220,220],[1554,888,220,220],[1554,1110,220,220],[1332,666,220,220],[944,0,271,199],[1217,0,268,187],[678,0,264,215],[218,271,215,269],[0,271,216,269],[0,542,216,269],[0,0,216,269],[218,0,216,269]]},
		{name:"storage_atlas_14", frames: [[1047,0,190,190],[1423,372,180,180],[1239,0,190,190],[1205,545,180,180],[865,0,180,202],[1024,384,179,189],[1203,727,171,174],[1361,965,145,165],[1605,545,174,180],[1387,554,174,177],[636,443,182,184],[836,441,183,183],[764,808,176,167],[1361,1134,146,169],[942,918,129,221],[1657,192,134,166],[714,977,132,214],[444,990,133,215],[614,629,148,217],[444,771,133,217],[579,848,133,216],[1239,354,182,189],[1017,1141,153,176],[1563,727,171,164],[1376,733,167,167],[848,1141,167,164],[1073,965,152,164],[444,576,168,193],[444,194,198,188],[1623,0,174,190],[1627,1134,113,200],[1672,893,109,239],[1509,1176,111,198],[1509,965,116,209],[694,0,169,249],[444,0,248,192],[1239,192,220,160],[1172,1305,280,80],[482,1289,280,80],[1431,0,190,190],[0,0,220,220],[0,1110,220,220],[0,222,220,220],[0,444,220,220],[222,222,220,220],[222,666,220,220],[222,444,220,220],[0,666,220,220],[0,888,220,220],[222,888,220,220],[222,0,220,220],[222,1110,220,220],[444,1207,340,80],[836,251,186,188],[1461,192,194,178],[1605,372,187,171],[1172,1131,187,132],[1002,757,186,159],[1047,192,190,190],[644,251,190,190],[444,384,190,190],[820,626,180,180],[1021,575,180,180],[0,1332,480,60],[1190,903,480,60]]},
		{name:"storage_atlas_15", frames: [[1358,62,120,120],[1480,62,120,120],[887,82,120,120],[1555,763,50,50],[1226,132,120,120],[1191,658,90,50],[172,446,90,50],[758,141,120,120],[606,144,120,120],[1009,151,120,120],[0,160,120,120],[1070,764,50,50],[66,767,50,50],[903,765,50,50],[955,765,50,50],[1607,763,48,48],[677,386,48,48],[600,266,111,118],[758,0,127,139],[1334,306,84,132],[1672,0,78,185],[375,199,79,180],[459,643,56,131],[728,263,70,191],[0,0,139,158],[531,295,63,187],[478,0,126,171],[50,666,41,91],[379,685,47,75],[1082,273,46,101],[0,666,48,83],[757,643,49,84],[196,698,41,84],[657,643,48,102],[1191,710,34,92],[1227,710,29,90],[1402,535,164,26],[932,675,164,26],[1082,376,164,26],[1283,676,164,26],[1615,676,164,26],[1449,676,164,26],[0,446,170,59],[1058,488,170,59],[1446,474,170,59],[270,443,170,59],[1230,502,170,59],[677,456,170,59],[1611,704,89,36],[1429,704,89,36],[1702,704,89,36],[950,504,89,36],[1338,704,89,36],[1520,704,89,36],[786,517,58,61],[1008,759,60,46],[878,703,69,50],[1720,521,68,54],[132,756,56,51],[1283,704,53,61],[1498,763,55,46],[1715,742,59,49],[583,768,54,45],[456,295,73,171],[1134,633,55,142],[596,386,79,128],[1592,299,72,173],[0,282,86,147],[1253,254,79,170],[1666,309,63,168],[1002,273,78,167],[800,263,74,180],[253,0,111,196],[366,0,110,197],[1109,0,115,149],[141,0,110,198],[707,643,48,96],[599,643,56,94],[299,685,40,91],[1542,306,47,86],[728,144,25,96],[341,685,36,99],[93,666,37,99],[257,685,40,91],[428,685,29,101],[1498,742,158,19],[1338,763,158,19],[1338,742,158,19],[1082,404,158,19],[583,747,158,19],[743,755,158,19],[0,507,163,51],[0,613,163,51],[1192,605,163,51],[0,560,163,51],[1357,623,163,51],[1522,623,163,51],[190,784,43,26],[281,778,43,26],[1355,784,43,26],[1752,149,43,26],[1310,784,43,26],[544,484,43,26],[1071,703,55,59],[1008,703,61,54],[0,759,64,44],[132,698,62,56],[270,321,87,54],[808,698,68,51],[517,725,64,47],[1009,82,94,52],[1658,742,55,53],[274,504,80,124],[478,173,120,120],[1264,440,180,60],[88,384,180,60],[270,381,180,60],[88,322,180,60],[876,442,180,60],[1082,426,180,60],[1358,0,260,60],[379,762,40,40],[887,0,220,80],[1226,0,130,130],[1548,394,40,55],[1568,535,40,43],[1602,62,10,11],[356,504,69,94],[1446,398,100,73],[949,703,57,60],[849,504,99,100],[1592,184,23,38],[88,282,31,31],[1258,767,50,50],[1752,0,40,147],[606,0,150,142],[1731,309,50,210],[1620,0,50,297],[840,606,90,90],[1131,151,90,90],[876,326,100,100],[1687,581,90,90],[165,606,90,90],[1618,479,100,100],[639,768,40,40],[723,776,40,40],[681,768,40,40],[765,776,40,40],[517,774,40,40],[807,776,40,40],[459,776,40,40],[849,776,40,40],[1122,777,40,40],[239,778,40,40],[1348,184,120,120],[517,643,80,80],[1420,306,120,90],[1672,187,120,120],[880,204,120,120],[1131,254,120,120],[1470,184,120,120],[253,199,120,120],[122,200,120,120],[598,601,240,40],[1434,581,240,40],[356,601,240,40],[544,559,240,40],[950,549,240,40],[950,591,240,40],[1192,563,240,40],[544,517,240,40],[932,633,200,40],[257,643,200,40],[442,484,100,100],[172,504,100,100]]}
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



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
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
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_location_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_location_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_title_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.copyright_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.current_hairstyle_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.current_makeup_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.decor_background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.decor_wardrobe_2_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.decor_wardrobe_3_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress_10_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress_10_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dress_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dress_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.dress_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.dress_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.dress_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.dress_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dress_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.dress_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dress_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.dress_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.dress_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.dress_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.dress_7_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.dress_7_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.dress_8_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.dress_8_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.dress_9_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.dress_9_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.eyes_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.eyes_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.eyes_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.eyes_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.eyes_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.eyes_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.eyes_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.eyes_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.eyes_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.eyes_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.eyes_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.eyes_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.eyeshadow_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.eyeshadow_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.eyeshadow_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.eyeshadow_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.eyeshadow_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.eyeshadow_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.eyeshadow_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.eyeshadow_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.eyeshadow_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.eyeshadow_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.eyeshadow_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.eyeshadow_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.flash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.flash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.flash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.flash_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.glitter_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.glitter_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.glitter_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.glitter_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory10_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory11_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory12_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory13_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory14_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory15_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory16_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory17_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory18_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory7_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory8_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory9_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_body_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_clothes1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_clothes2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_clothes3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_clothes4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_clothes5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_clothes6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_clothes7_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_clothes8_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_clothes9_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings8_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings9_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hat9_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_head_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero1_necklace1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero1_necklace2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hero1_necklace3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hero1_necklace4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hero1_necklace5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hero1_necklace6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hero1_necklace7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hero1_necklace8_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hero1_necklace9_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory10_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory11_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory12_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory13_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory14_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory15_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory16_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory17_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory18_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory7_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory8_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory9_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero2_body_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_clothes1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero2_clothes2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.hero2_clothes3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.hero2_clothes4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero2_clothes5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.hero2_clothes6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero2_clothes7_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero2_clothes8_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero2_clothes9_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings8_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings9_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hat9_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.hero2_necklace1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.hero2_necklace2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.hero2_necklace3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.hero2_necklace4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.hero2_necklace5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.hero2_necklace6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.hero2_necklace7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.hero2_necklace8_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.hero2_necklace9_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_de_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_es_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.indicator_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.lips_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.lips_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.lips_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.lips_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.lips_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.lips_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.lips_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.lips_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.lips_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.lips_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.lips_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.lips_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_0_5_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_0_6_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.location_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.maneken_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
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
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(155);
}).prototype = p = new cjs.Sprite();



(lib.sap1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.sap2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.sap3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.sap4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.sap5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.sap6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.serf1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.serf2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.serf3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.serf4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.serf5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.serf6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.shelf_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.shelf_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.skip_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(156);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(157);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(158);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(159);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(160);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(161);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(162);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(163);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(164);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(165);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(166);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(167);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(168);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(169);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(170);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(171);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(172);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.track_move_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(173);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(174);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_3_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(6);
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
	this.shape.setTransform(400,300,1.333,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
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
	this.shape.setTransform(400,300,1.333,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.wardrobe_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_3_img();
	this.instance.setTransform(-240,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-300,480,600);
p.frameBounds = [rect];


(lib.wardrobe_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_img();
	this.instance.setTransform(-240,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-300,480,600);
p.frameBounds = [rect];


(lib.wardrobe_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_2_img();
	this.instance.setTransform(-240,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-300,480,600);
p.frameBounds = [rect];


(lib.wardrobe_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_img();
	this.instance.setTransform(-190,-280);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-280,380,560);
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


(lib.shelf_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shelf_3_img();
	this.instance.setTransform(-240,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-30,480,60);
p.frameBounds = [rect];


(lib.shelf_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shelf_2_img();
	this.instance.setTransform(-240,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-30,480,60);
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


(lib.serf_main_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.serf1_img();
	this.instance.setTransform(-417,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-417,-41,834,82);
p.frameBounds = [rect];


(lib.serf_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.serf1_img();
	this.instance.setTransform(-417,-41);

	this.instance_1 = new lib.serf2_img();
	this.instance_1.setTransform(-417,-71);

	this.instance_2 = new lib.serf3_img();
	this.instance_2.setTransform(-417,-76);

	this.instance_3 = new lib.serf4_img();
	this.instance_3.setTransform(-389,-68);

	this.instance_4 = new lib.serf5_img();
	this.instance_4.setTransform(-386,-70);

	this.instance_5 = new lib.serf6_img();
	this.instance_5.setTransform(-357,-72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-417,-41,834,82);
p.frameBounds = [rect, new cjs.Rectangle(-417,-71,824,122), new cjs.Rectangle(-417,-76,801,126), new cjs.Rectangle(-389,-68,767,112), new cjs.Rectangle(-386,-70,732,108), new cjs.Rectangle(-357,-72,735,119), null];


(lib.sap_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sap1_img();
	this.instance.setTransform(-391.5,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-391.5,-45,783,90);
p.frameBounds = [rect];


(lib.sap_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sap1_img();
	this.instance.setTransform(-391.5,-45);

	this.instance_1 = new lib.sap2_img();
	this.instance_1.setTransform(-391.5,-54);

	this.instance_2 = new lib.sap3_img();
	this.instance_2.setTransform(-391.5,-56);

	this.instance_3 = new lib.sap4_img();
	this.instance_3.setTransform(-399.5,-79);

	this.instance_4 = new lib.sap5_img();
	this.instance_4.setTransform(-391.5,-43);

	this.instance_5 = new lib.sap6_img();
	this.instance_5.setTransform(-391.5,-78);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-391.5,-45,783,90);
p.frameBounds = [rect, new cjs.Rectangle(-391.5,-54,776,105), new cjs.Rectangle(-391.5,-56,778,108), new cjs.Rectangle(-399.5,-79,769,129), new cjs.Rectangle(-391.5,-43,795,84), new cjs.Rectangle(-391.5,-78,795,140), null];


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

	// Слой 1
	this.instance = new lib.hero2_shadows1_img();
	this.instance.setTransform(-108,-134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108,-134.5,216,269);
p.frameBounds = [rect];


(lib.hero2_shadows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_shadows1_img();
	this.instance.setTransform(-108,-134.5);

	this.instance_1 = new lib.hero2_shadows2_img();
	this.instance_1.setTransform(-108,-134.5);

	this.instance_2 = new lib.hero2_shadows3_img();
	this.instance_2.setTransform(-108,-134.5);

	this.instance_3 = new lib.hero2_shadows4_img();
	this.instance_3.setTransform(-108,-134.5);

	this.instance_4 = new lib.hero2_shadows5_img();
	this.instance_4.setTransform(-108,-134.5);

	this.instance_5 = new lib.hero2_shadows6_img();
	this.instance_5.setTransform(-108,-134.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108,-134.5,216,269);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_necklace_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_necklace1_img();
	this.instance.setTransform(-27.5,-29.5);

	this.instance_1 = new lib.hero2_necklace2_img();
	this.instance_1.setTransform(-24.5,-27);

	this.instance_2 = new lib.hero2_necklace3_img();
	this.instance_2.setTransform(-25.5,-19.5);

	this.instance_3 = new lib.hero2_necklace4_img();
	this.instance_3.setTransform(-33,-26.5);

	this.instance_4 = new lib.hero2_necklace5_img();
	this.instance_4.setTransform(-39.5,-21);

	this.instance_5 = new lib.hero2_necklace6_img();
	this.instance_5.setTransform(-30.5,-23.5);

	this.instance_6 = new lib.hero2_necklace7_img();
	this.instance_6.setTransform(-24,-19.5);

	this.instance_7 = new lib.hero2_necklace8_img();
	this.instance_7.setTransform(-39.5,-22);

	this.instance_8 = new lib.hero2_necklace9_img();
	this.instance_8.setTransform(-27,-26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27.5,-29.5,55,59);
p.frameBounds = [rect, new cjs.Rectangle(-24.5,-27,61,54), new cjs.Rectangle(-25.5,-19.5,64,44), new cjs.Rectangle(-33,-26.5,62,56), new cjs.Rectangle(-39.5,-21,87,54), new cjs.Rectangle(-30.5,-23.5,68,51), new cjs.Rectangle(-24,-19.5,64,47), new cjs.Rectangle(-39.5,-22,94,52), new cjs.Rectangle(-27,-26.5,55,53), null];


(lib.hero2_lips_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips1_img();
	this.instance.setTransform(-21.5,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21.5,-13,43,26);
p.frameBounds = [rect];


(lib.hero2_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_lips1_img();
	this.instance.setTransform(-21.5,-13);

	this.instance_1 = new lib.hero2_lips2_img();
	this.instance_1.setTransform(-21.5,-13);

	this.instance_2 = new lib.hero2_lips3_img();
	this.instance_2.setTransform(-21.5,-13);

	this.instance_3 = new lib.hero2_lips4_img();
	this.instance_3.setTransform(-21.5,-13);

	this.instance_4 = new lib.hero2_lips5_img();
	this.instance_4.setTransform(-21.5,-13);

	this.instance_5 = new lib.hero2_lips6_img();
	this.instance_5.setTransform(-21.5,-13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21.5,-13,43,26);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_head_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_head_img();
	this.instance.setTransform(-107.5,-134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.5,-134.5,215,269);
p.frameBounds = [rect];


(lib.hero2_hat_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat1_img();
	this.instance.setTransform(-180,-102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-102.5,360,205);
p.frameBounds = [rect];


(lib.hero2_hat_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_hat1_img();
	this.instance.setTransform(-180,-102.5);

	this.instance_1 = new lib.hero2_hat2_img();
	this.instance_1.setTransform(-180,-100.5);

	this.instance_2 = new lib.hero2_hat3_img();
	this.instance_2.setTransform(-186,-101.5);

	this.instance_3 = new lib.hero2_hat4_img();
	this.instance_3.setTransform(-185,-131.5);

	this.instance_4 = new lib.hero2_hat5_img();
	this.instance_4.setTransform(-180,-102.5);

	this.instance_5 = new lib.hero2_hat6_img();
	this.instance_5.setTransform(-182,-101.5);

	this.instance_6 = new lib.hero2_hat7_img();
	this.instance_6.setTransform(-173,-126.5);

	this.instance_7 = new lib.hero2_hat8_img();
	this.instance_7.setTransform(-185,-102.5);

	this.instance_8 = new lib.hero2_hat9_img();
	this.instance_8.setTransform(-180,-105.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-102.5,360,205);
p.frameBounds = [rect, new cjs.Rectangle(-180,-100.5,361,207), new cjs.Rectangle(-186,-101.5,378,182), new cjs.Rectangle(-185,-131.5,381,244), new cjs.Rectangle(-180,-102.5,359,193), new cjs.Rectangle(-182,-101.5,390,185), new cjs.Rectangle(-173,-126.5,370,248), new cjs.Rectangle(-185,-102.5,373,202), new cjs.Rectangle(-180,-105.5,368,203), null];


(lib.hero2_hair_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero2_hair1_img();
	this.instance.setTransform(-104.6,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.6,22.4,220,298);
p.frameBounds = [rect];


(lib.hero2_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_hair1_img();
	this.instance.setTransform(-104.6,22.4);

	this.instance_1 = new lib.hero2_hair2_img();
	this.instance_1.setTransform(-206.1,-111.1);

	this.instance_2 = new lib.hero2_hair4_img();
	this.instance_2.setTransform(-145.5,-78.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.6,22.4,220,298);
p.frameBounds = [rect, new cjs.Rectangle(-206.1,-111.1,419,425), null, new cjs.Rectangle(-145.5,-78.6,309,445), rect=null, rect];


(lib.hero2_fringe_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe1_img();
	this.instance.setTransform(-124,-96);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-124,-96,248,192);
p.frameBounds = [rect];


(lib.hero2_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_fringe1_img();
	this.instance.setTransform(-124,-96);

	this.instance_1 = new lib.hero2_fringe2_img();
	this.instance_1.setTransform(-127.6,-92.6);

	this.instance_2 = new lib.hero2_fringe3_img();
	this.instance_2.setTransform(-133.5,-119.1);

	this.instance_3 = new lib.hero2_fringe4_img();
	this.instance_3.setTransform(-170.5,-100.1);

	this.instance_4 = new lib.hero2_fringe5_img();
	this.instance_4.setTransform(-138.7,-96.1);

	this.instance_5 = new lib.hero2_fringe6_img();
	this.instance_5.setTransform(-166.6,-148.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-124,-96,248,192);
p.frameBounds = [rect, new cjs.Rectangle(-127.6,-92.6,268,187), new cjs.Rectangle(-133.5,-119.1,264,215), new cjs.Rectangle(-170.5,-100.1,348,416), new cjs.Rectangle(-138.7,-96.1,268,233), new cjs.Rectangle(-166.6,-148.6,340,287)];


(lib.hero2_eyes_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes1_img();
	this.instance.setTransform(-81.5,-25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.5,-25.5,163,51);
p.frameBounds = [rect];


(lib.hero2_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_eyes1_img();
	this.instance.setTransform(-81.5,-25.5);

	this.instance_1 = new lib.hero2_eyes2_img();
	this.instance_1.setTransform(-81.5,-25.5);

	this.instance_2 = new lib.hero2_eyes3_img();
	this.instance_2.setTransform(-81.5,-25.5);

	this.instance_3 = new lib.hero2_eyes4_img();
	this.instance_3.setTransform(-81.5,-25.5);

	this.instance_4 = new lib.hero2_eyes5_img();
	this.instance_4.setTransform(-81.5,-25.5);

	this.instance_5 = new lib.hero2_eyes6_img();
	this.instance_5.setTransform(-81.5,-25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.5,-25.5,163,51);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect];


(lib.hero2_eyebrows_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyebrows1_img();
	this.instance.setTransform(-79,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79,-9.5,158,19);
p.frameBounds = [rect];


(lib.hero2_eyebrows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_eyebrows1_img();
	this.instance.setTransform(-79,-9.5);

	this.instance_1 = new lib.hero2_eyebrows2_img();
	this.instance_1.setTransform(-79,-9.5);

	this.instance_2 = new lib.hero2_eyebrows3_img();
	this.instance_2.setTransform(-79,-9.5);

	this.instance_3 = new lib.hero2_eyebrows4_img();
	this.instance_3.setTransform(-79,-9.5);

	this.instance_4 = new lib.hero2_eyebrows5_img();
	this.instance_4.setTransform(-79,-9.5);

	this.instance_5 = new lib.hero2_eyebrows6_img();
	this.instance_5.setTransform(-79,-9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79,-9.5,158,19);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_earrings_all2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_earrings1_img();
	this.instance.setTransform(24,-48,1,1,0,0,180);

	this.instance_1 = new lib.hero2_earrings2_img();
	this.instance_1.setTransform(27,-48,1,1,0,0,180);

	this.instance_2 = new lib.hero2_earrings3_img();
	this.instance_2.setTransform(19,-48,1,1,0,0,180);

	this.instance_3 = new lib.hero2_earrings4_img();
	this.instance_3.setTransform(22.5,-44,1,1,0,0,180);

	this.instance_4 = new lib.hero2_earrings5_img();
	this.instance_4.setTransform(10,-44,1,1,0,0,180);

	this.instance_5 = new lib.hero2_earrings6_img();
	this.instance_5.setTransform(16.5,-46.5,1,1,0,0,180);

	this.instance_6 = new lib.hero2_earrings7_img();
	this.instance_6.setTransform(18.5,-48,1,1,0,0,180);

	this.instance_7 = new lib.hero2_earrings8_img();
	this.instance_7.setTransform(19,-47,1,1,0,0,180);

	this.instance_8 = new lib.hero2_earrings9_img();
	this.instance_8.setTransform(12.5,-44.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-48,48,96);
p.frameBounds = [rect, new cjs.Rectangle(-29,-48,56,94), new cjs.Rectangle(-21,-48,40,91), new cjs.Rectangle(-24.5,-44,47,86), new cjs.Rectangle(-15,-44,25,96), new cjs.Rectangle(-19.5,-46.5,36,99), new cjs.Rectangle(-18.5,-48,37,99), new cjs.Rectangle(-21,-47,40,91), new cjs.Rectangle(-16.5,-44.5,29,101), null];


(lib.hero2_earrings_all1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_earrings1_img();
	this.instance.setTransform(-24,-48);

	this.instance_1 = new lib.hero2_earrings2_img();
	this.instance_1.setTransform(-29,-48);

	this.instance_2 = new lib.hero2_earrings3_img();
	this.instance_2.setTransform(-21,-48);

	this.instance_3 = new lib.hero2_earrings4_img();
	this.instance_3.setTransform(-24.5,-44);

	this.instance_4 = new lib.hero2_earrings5_img();
	this.instance_4.setTransform(-15,-44);

	this.instance_5 = new lib.hero2_earrings6_img();
	this.instance_5.setTransform(-19.5,-46.5);

	this.instance_6 = new lib.hero2_earrings7_img();
	this.instance_6.setTransform(-18.5,-48);

	this.instance_7 = new lib.hero2_earrings8_img();
	this.instance_7.setTransform(-21,-47);

	this.instance_8 = new lib.hero2_earrings9_img();
	this.instance_8.setTransform(-16.5,-44.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-48,48,96);
p.frameBounds = [rect, new cjs.Rectangle(-29,-48,56,94), new cjs.Rectangle(-21,-48,40,91), new cjs.Rectangle(-24.5,-44,47,86), new cjs.Rectangle(-15,-44,25,96), new cjs.Rectangle(-19.5,-46.5,36,99), new cjs.Rectangle(-18.5,-48,37,99), new cjs.Rectangle(-21,-47,40,91), new cjs.Rectangle(-16.5,-44.5,29,101), null];


(lib.hero2_clothes_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_clothes1_img();
	this.instance.setTransform(-56.5,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.5,-100,113,200);
p.frameBounds = [rect];


(lib.hero2_clothes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_clothes1_img();
	this.instance.setTransform(-56.5,-100);

	this.instance_1 = new lib.hero2_clothes2_img();
	this.instance_1.setTransform(-54.5,-97);

	this.instance_2 = new lib.hero2_clothes3_img();
	this.instance_2.setTransform(-55.5,-102.5);

	this.instance_3 = new lib.hero2_clothes4_img();
	this.instance_3.setTransform(-55,-104);

	this.instance_4 = new lib.hero2_clothes5_img();
	this.instance_4.setTransform(-58,-46.5);

	this.instance_5 = new lib.hero2_clothes6_img();
	this.instance_5.setTransform(-56.5,-101);

	this.instance_6 = new lib.hero2_clothes7_img();
	this.instance_6.setTransform(-57.5,-100.5);

	this.instance_7 = new lib.hero2_clothes8_img();
	this.instance_7.setTransform(-66,-116.5);

	this.instance_8 = new lib.hero2_clothes9_img();
	this.instance_8.setTransform(-56,-98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.5,-100,113,200);
p.frameBounds = [rect, new cjs.Rectangle(-54.5,-97,111,196), new cjs.Rectangle(-55.5,-102.5,110,197), new cjs.Rectangle(-55,-104,109,239), new cjs.Rectangle(-58,-46.5,115,149), new cjs.Rectangle(-56.5,-101,111,198), new cjs.Rectangle(-57.5,-100.5,116,209), new cjs.Rectangle(-66,-116.5,169,249), new cjs.Rectangle(-56,-98,110,198), null];


(lib.hero2_body_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_body_img();
	this.instance.setTransform(-253.5,-142);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-253.5,-142,507,284);
p.frameBounds = [rect];


(lib.hero2_accessory_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory3_img();
	this.instance.setTransform(-96,-68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96,-68.5,171,164);
p.frameBounds = [rect];


(lib.hero2_accessory_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_accessory1_img();
	this.instance.setTransform(-91,-94.5);

	this.instance_1 = new lib.hero2_accessory2_img();
	this.instance_1.setTransform(-72,-78.5);

	this.instance_2 = new lib.hero2_accessory3_img();
	this.instance_2.setTransform(-96,-68.5);

	this.instance_3 = new lib.hero2_accessory4_img();
	this.instance_3.setTransform(-81,-68.5);

	this.instance_4 = new lib.hero2_accessory5_img();
	this.instance_4.setTransform(-91,-60.5);

	this.instance_5 = new lib.hero2_accessory6_img();
	this.instance_5.setTransform(-98,-71.5);

	this.instance_6 = new lib.hero2_accessory7_img();
	this.instance_6.setTransform(-97,-94.5);

	this.instance_7 = new lib.hero2_accessory8_img();
	this.instance_7.setTransform(-102,-87.5);

	this.instance_8 = new lib.hero2_accessory9_img();
	this.instance_8.setTransform(-74,-92.5);

	this.instance_9 = new lib.hero2_accessory10_img();
	this.instance_9.setTransform(-79,-78.5);

	this.instance_10 = new lib.hero2_accessory11_img();
	this.instance_10.setTransform(-58,-50.5);

	this.instance_11 = new lib.hero2_accessory12_img();
	this.instance_11.setTransform(-76,-36.5);

	this.instance_12 = new lib.hero2_accessory13_img();
	this.instance_12.setTransform(-72,-81.5);

	this.instance_13 = new lib.hero2_accessory14_img();
	this.instance_13.setTransform(-57,-51.5);

	this.instance_14 = new lib.hero2_accessory15_img();
	this.instance_14.setTransform(-72,-78.5);

	this.instance_15 = new lib.hero2_accessory16_img();
	this.instance_15.setTransform(-69,-75.5);

	this.instance_16 = new lib.hero2_accessory17_img();
	this.instance_16.setTransform(-81,-71.5);

	this.instance_17 = new lib.hero2_accessory18_img();
	this.instance_17.setTransform(-71,-88.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91,-94.5,182,189);
p.frameBounds = [rect, new cjs.Rectangle(-72,-78.5,153,176), new cjs.Rectangle(-96,-68.5,171,164), new cjs.Rectangle(-81,-68.5,167,167), new cjs.Rectangle(-91,-60.5,167,164), new cjs.Rectangle(-98,-71.5,152,164), new cjs.Rectangle(-97,-94.5,168,193), new cjs.Rectangle(-102,-87.5,198,188), new cjs.Rectangle(-74,-92.5,174,190), new cjs.Rectangle(-79,-78.5,73,171), new cjs.Rectangle(-58,-50.5,55,142), new cjs.Rectangle(-76,-36.5,79,128), new cjs.Rectangle(-72,-81.5,72,173), new cjs.Rectangle(-57,-51.5,86,147), new cjs.Rectangle(-72,-78.5,79,170), new cjs.Rectangle(-69,-75.5,63,168), new cjs.Rectangle(-81,-71.5,78,167), new cjs.Rectangle(-71,-88.5,74,180), null];


(lib.hero1_shadows_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_shadows1_img();
	this.instance.setTransform(-112,-131);

	this.instance_1 = new lib.hero1_shadows2_img();
	this.instance_1.setTransform(-112,-131);

	this.instance_2 = new lib.hero1_shadows3_img();
	this.instance_2.setTransform(-112,-131);

	this.instance_3 = new lib.hero1_shadows4_img();
	this.instance_3.setTransform(-112,-131);

	this.instance_4 = new lib.hero1_shadows5_img();
	this.instance_4.setTransform(-112,-131);

	this.instance_5 = new lib.hero1_shadows6_img();
	this.instance_5.setTransform(-112,-131);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112,-131,224,262);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_shadows_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shadows1_img();
	this.instance.setTransform(-112,-131);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112,-131,224,262);
p.frameBounds = [rect];


(lib.hero1_necklace_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace2_img();
	this.instance.setTransform(-34.5,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.5,-29.5,60,46);
p.frameBounds = [rect];


(lib.hero1_necklace_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_necklace1_img();
	this.instance.setTransform(-29,-30.5);

	this.instance_1 = new lib.hero1_necklace2_img();
	this.instance_1.setTransform(-34.5,-29.5);

	this.instance_2 = new lib.hero1_necklace3_img();
	this.instance_2.setTransform(-36,-31);

	this.instance_3 = new lib.hero1_necklace4_img();
	this.instance_3.setTransform(-34,-33.5);

	this.instance_4 = new lib.hero1_necklace5_img();
	this.instance_4.setTransform(-27.5,-31.5);

	this.instance_5 = new lib.hero1_necklace6_img();
	this.instance_5.setTransform(-27,-32);

	this.instance_6 = new lib.hero1_necklace7_img();
	this.instance_6.setTransform(-30.5,-29);

	this.instance_7 = new lib.hero1_necklace8_img();
	this.instance_7.setTransform(-28.5,-32);

	this.instance_8 = new lib.hero1_necklace9_img();
	this.instance_8.setTransform(-29.5,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29,-30.5,58,61);
p.frameBounds = [rect, new cjs.Rectangle(-34.5,-29.5,60,46), new cjs.Rectangle(-36,-31,69,50), new cjs.Rectangle(-34,-33.5,68,54), new cjs.Rectangle(-27.5,-31.5,56,51), new cjs.Rectangle(-27,-32,53,61), new cjs.Rectangle(-30.5,-29,55,46), new cjs.Rectangle(-28.5,-32,59,49), new cjs.Rectangle(-29.5,-30,54,45), null];


(lib.hero1_lips_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips1_img();
	this.instance.setTransform(-44.5,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.5,-18,89,36);
p.frameBounds = [rect];


(lib.hero1_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_lips1_img();
	this.instance.setTransform(-44.5,-18);

	this.instance_1 = new lib.hero1_lips2_img();
	this.instance_1.setTransform(-44.5,-18);

	this.instance_2 = new lib.hero1_lips3_img();
	this.instance_2.setTransform(-44.5,-18);

	this.instance_3 = new lib.hero1_lips4_img();
	this.instance_3.setTransform(-44.5,-18);

	this.instance_4 = new lib.hero1_lips5_img();
	this.instance_4.setTransform(-44.5,-18);

	this.instance_5 = new lib.hero1_lips6_img();
	this.instance_5.setTransform(-44.5,-18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.5,-18,89,36);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_head_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_head_img();
	this.instance.setTransform(-112,-131);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112,-131,224,262);
p.frameBounds = [rect];


(lib.hero1_hat_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_hat1_img();
	this.instance.setTransform(-200.5,-94.5);

	this.instance_1 = new lib.hero1_hat2_img();
	this.instance_1.setTransform(-196.5,-109.5);

	this.instance_2 = new lib.hero1_hat3_img();
	this.instance_2.setTransform(-195.5,-105.5);

	this.instance_3 = new lib.hero1_hat4_img();
	this.instance_3.setTransform(-173.5,-106.5);

	this.instance_4 = new lib.hero1_hat5_img();
	this.instance_4.setTransform(-208.5,-103.5);

	this.instance_5 = new lib.hero1_hat6_img();
	this.instance_5.setTransform(-191.5,-88.5);

	this.instance_6 = new lib.hero1_hat7_img();
	this.instance_6.setTransform(-193.5,-93.5);

	this.instance_7 = new lib.hero1_hat8_img();
	this.instance_7.setTransform(-197.5,-123.5);

	this.instance_8 = new lib.hero1_hat9_img();
	this.instance_8.setTransform(-208.5,-98.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200.5,-94.5,401,189);
p.frameBounds = [rect, new cjs.Rectangle(-196.5,-109.5,366,228), new cjs.Rectangle(-195.5,-105.5,380,220), new cjs.Rectangle(-173.5,-106.5,380,211), new cjs.Rectangle(-208.5,-103.5,391,239), new cjs.Rectangle(-191.5,-88.5,349,223), new cjs.Rectangle(-193.5,-93.5,358,202), new cjs.Rectangle(-197.5,-123.5,352,257), new cjs.Rectangle(-208.5,-98.5,412,230), null];


(lib.hero1_hair_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-133.1,-35.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-133.1,-35.1,271,199);
p.frameBounds = [rect];


(lib.hero1_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-133.1,-35.1);

	this.instance_1 = new lib.hero1_hair2_img();
	this.instance_1.setTransform(-124.1,23.4);

	this.instance_2 = new lib.hero1_hair3_img();
	this.instance_2.setTransform(-143.6,-71.6);

	this.instance_3 = new lib.hero1_hair4_img();
	this.instance_3.setTransform(-201.6,-144.1);

	this.instance_4 = new lib.hero1_hair5_img();
	this.instance_4.setTransform(-176.6,-85.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-133.1,-35.1,271,199);
p.frameBounds = [rect, new cjs.Rectangle(-124.1,23.4,257,304), new cjs.Rectangle(-143.6,-71.6,291,238), new cjs.Rectangle(-201.6,-144.1,388,349), new cjs.Rectangle(-176.6,-85.1,374,313), null];


(lib.hero1_fringe_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fringe1_img();
	this.instance.setTransform(-171,-142);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171,-142,342,284);
p.frameBounds = [rect];


(lib.hero1_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_fringe1_img();
	this.instance.setTransform(-171,-142);

	this.instance_1 = new lib.hero1_fringe2_img();
	this.instance_1.setTransform(-144.5,-118.6);

	this.instance_2 = new lib.hero1_fringe3_img();
	this.instance_2.setTransform(-145.6,-117.1);

	this.instance_3 = new lib.hero1_fringe4_img();
	this.instance_3.setTransform(-186.6,-117.1);

	this.instance_4 = new lib.hero1_fringe5_img();
	this.instance_4.setTransform(-184.6,-117.6);

	this.instance_5 = new lib.hero1_fringe6_img();
	this.instance_5.setTransform(-204,-132.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-171,-142,342,284);
p.frameBounds = [rect, new cjs.Rectangle(-144.5,-118.6,285,268), new cjs.Rectangle(-145.6,-117.1,298,263), new cjs.Rectangle(-186.6,-117.1,382,313), new cjs.Rectangle(-184.6,-117.6,358,190), new cjs.Rectangle(-204,-132.6,360,376)];


(lib.hero1_eyes_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyes3_img();
	this.instance.setTransform(-85,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-29.5,170,59);
p.frameBounds = [rect];


(lib.hero1_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_eyes1_img();
	this.instance.setTransform(-85,-29.5);

	this.instance_1 = new lib.hero1_eyes2_img();
	this.instance_1.setTransform(-85,-29.5);

	this.instance_2 = new lib.hero1_eyes3_img();
	this.instance_2.setTransform(-85,-29.5);

	this.instance_3 = new lib.hero1_eyes4_img();
	this.instance_3.setTransform(-85,-29.5);

	this.instance_4 = new lib.hero1_eyes5_img();
	this.instance_4.setTransform(-85,-29.5);

	this.instance_5 = new lib.hero1_eyes6_img();
	this.instance_5.setTransform(-85,-29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-29.5,170,59);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_eyebrows_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyebrows1_img();
	this.instance.setTransform(-82,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82,-13,164,26);
p.frameBounds = [rect];


(lib.hero1_eyebrows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_eyebrows1_img();
	this.instance.setTransform(-82,-13);

	this.instance_1 = new lib.hero1_eyebrows2_img();
	this.instance_1.setTransform(-82,-13);

	this.instance_2 = new lib.hero1_eyebrows3_img();
	this.instance_2.setTransform(-82,-13);

	this.instance_3 = new lib.hero1_eyebrows4_img();
	this.instance_3.setTransform(-82,-13);

	this.instance_4 = new lib.hero1_eyebrows5_img();
	this.instance_4.setTransform(-82,-13);

	this.instance_5 = new lib.hero1_eyebrows6_img();
	this.instance_5.setTransform(-82,-13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82,-13,164,26);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_earrings9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings9_img();
	this.instance.setTransform(108.7,-46,1,1,0,0,180);

	this.instance_1 = new lib.hero1_earrings9_img();
	this.instance_1.setTransform(-108.7,-44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108.7,-46,217.5,92);
p.frameBounds = [rect];


(lib.hero1_earrings8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings8_img();
	this.instance.setTransform(113.8,-45.7,1,1,0,0,180);

	this.instance_1 = new lib.hero1_earrings8_img();
	this.instance_1.setTransform(-113.7,-46.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113.7,-46.2,227.5,92.5);
p.frameBounds = [rect];


(lib.hero1_earrings7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings7_img();
	this.instance.setTransform(118.7,-50,1,1,0,0,180);

	this.instance_1 = new lib.hero1_earrings7_img();
	this.instance_1.setTransform(-118.7,-52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.7,-52,237.5,104);
p.frameBounds = [rect];


(lib.hero1_earrings6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings6_img();
	this.instance.setTransform(115,-42,1,1,0,0,180);

	this.instance_1 = new lib.hero1_earrings6_img();
	this.instance_1.setTransform(-115,-42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-42,230,84);
p.frameBounds = [rect];


(lib.hero1_earrings5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings5_img();
	this.instance.setTransform(117.5,-42,1,1,0,0,180);

	this.instance_1 = new lib.hero1_earrings5_img();
	this.instance_1.setTransform(-117.5,-42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117.5,-42,235,84);
p.frameBounds = [rect];


(lib.hero1_earrings4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings4_img();
	this.instance.setTransform(116.7,-41.5,1,1,0,0,180);

	this.instance_1 = new lib.hero1_earrings4_img();
	this.instance_1.setTransform(-116.7,-41.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116.7,-41.5,233.5,83);
p.frameBounds = [rect];


(lib.hero1_earrings3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings3_img();
	this.instance.setTransform(119.5,-50.2,1,1,0,0,180);

	this.instance_1 = new lib.hero1_earrings3_img();
	this.instance_1.setTransform(-119.5,-50.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119.5,-50.7,239,101.5);
p.frameBounds = [rect];


(lib.hero1_earrings2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings2_img();
	this.instance.setTransform(118.7,-37.5,1,1,0,0,180);

	this.instance_1 = new lib.hero1_earrings2_img();
	this.instance_1.setTransform(-118.7,-37.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.7,-37.5,237.5,75);
p.frameBounds = [rect];


(lib.hero1_earrings1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings1_img();
	this.instance.setTransform(118.5,-45.5,1,1,0,0,180);

	this.instance_1 = new lib.hero1_earrings1_img();
	this.instance_1.setTransform(-118.5,-45.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.5,-45.5,237,91);
p.frameBounds = [rect];


(lib.hero1_clothes_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_clothes1_img();
	this.instance.setTransform(-63,-85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63,-85.5,126,171);
p.frameBounds = [rect];


(lib.hero1_clothes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_clothes1_img();
	this.instance.setTransform(-63,-85.5);

	this.instance_1 = new lib.hero1_clothes2_img();
	this.instance_1.setTransform(-82.5,-82);

	this.instance_2 = new lib.hero1_clothes3_img();
	this.instance_2.setTransform(-65,-133);

	this.instance_3 = new lib.hero1_clothes4_img();
	this.instance_3.setTransform(-69,-79);

	this.instance_4 = new lib.hero1_clothes5_img();
	this.instance_4.setTransform(-68.5,-128);

	this.instance_5 = new lib.hero1_clothes6_img();
	this.instance_5.setTransform(-70.5,-129);

	this.instance_6 = new lib.hero1_clothes7_img();
	this.instance_6.setTransform(-79.9,-131);

	this.instance_7 = new lib.hero1_clothes8_img();
	this.instance_7.setTransform(-71,-132);

	this.instance_8 = new lib.hero1_clothes9_img();
	this.instance_8.setTransform(-70,-129);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63,-85.5,126,171);
p.frameBounds = [rect, new cjs.Rectangle(-82.5,-82,146,169), new cjs.Rectangle(-65,-133,129,221), new cjs.Rectangle(-69,-79,134,166), new cjs.Rectangle(-68.5,-128,132,214), new cjs.Rectangle(-70.5,-129,133,215), new cjs.Rectangle(-79.9,-131,148,217), new cjs.Rectangle(-71,-132,133,217), new cjs.Rectangle(-70,-129,133,216), null];


(lib.hero1_body_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_body_img();
	this.instance.setTransform(-226,-133);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-226,-133,452,266);
p.frameBounds = [rect];


(lib.hero1_accessory_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory2_img();
	this.instance.setTransform(-98,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98,-87,179,189);
p.frameBounds = [rect];


(lib.hero1_accessory_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_accessory1_img();
	this.instance.setTransform(-90,-101);

	this.instance_1 = new lib.hero1_accessory2_img();
	this.instance_1.setTransform(-98,-87);

	this.instance_2 = new lib.hero1_accessory3_img();
	this.instance_2.setTransform(-100,-69);

	this.instance_3 = new lib.hero1_accessory4_img();
	this.instance_3.setTransform(-94,-65);

	this.instance_4 = new lib.hero1_accessory5_img();
	this.instance_4.setTransform(-99,-81);

	this.instance_5 = new lib.hero1_accessory6_img();
	this.instance_5.setTransform(-90,-79);

	this.instance_6 = new lib.hero1_accessory7_img();
	this.instance_6.setTransform(-102,-88);

	this.instance_7 = new lib.hero1_accessory8_img();
	this.instance_7.setTransform(-107,-85);

	this.instance_8 = new lib.hero1_accessory9_img();
	this.instance_8.setTransform(-97,-66);

	this.instance_9 = new lib.hero1_accessory10_img();
	this.instance_9.setTransform(-70,-17);

	this.instance_10 = new lib.hero1_accessory11_img();
	this.instance_10.setTransform(-90,-38);

	this.instance_11 = new lib.hero1_accessory12_img();
	this.instance_11.setTransform(-67,-38);

	this.instance_12 = new lib.hero1_accessory13_img();
	this.instance_12.setTransform(-78,-91);

	this.instance_13 = new lib.hero1_accessory14_img();
	this.instance_13.setTransform(-83,-85);

	this.instance_14 = new lib.hero1_accessory15_img();
	this.instance_14.setTransform(-55,-36);

	this.instance_15 = new lib.hero1_accessory16_img();
	this.instance_15.setTransform(-69,-99);

	this.instance_16 = new lib.hero1_accessory17_img();
	this.instance_16.setTransform(-91,-57);

	this.instance_17 = new lib.hero1_accessory18_img();
	this.instance_17.setTransform(-73,-95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-101,180,202);
p.frameBounds = [rect, new cjs.Rectangle(-98,-87,179,189), new cjs.Rectangle(-100,-69,171,174), new cjs.Rectangle(-94,-65,145,165), new cjs.Rectangle(-99,-81,174,180), new cjs.Rectangle(-90,-79,174,177), new cjs.Rectangle(-102,-88,182,184), new cjs.Rectangle(-107,-85,183,183), new cjs.Rectangle(-97,-66,176,167), new cjs.Rectangle(-70,-17,111,118), new cjs.Rectangle(-90,-38,127,139), new cjs.Rectangle(-67,-38,84,132), new cjs.Rectangle(-78,-91,78,185), new cjs.Rectangle(-83,-85,79,180), new cjs.Rectangle(-55,-36,56,131), new cjs.Rectangle(-69,-99,70,191), new cjs.Rectangle(-91,-57,139,158), new cjs.Rectangle(-73,-95,63,187), null];


(lib.headdress_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat9_img();
	this.instance.setTransform(-116,-65,0.565,0.565);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116,-65,232.9,130);
p.frameBounds = [rect];


(lib.headdress_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat9_img();
	this.instance.setTransform(-128.8,-71,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128.8,-71,257.6,142.1);
p.frameBounds = [rect];


(lib.headdress_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat8_img();
	this.instance.setTransform(-114.4,-83.5,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.4,-83.5,228.8,167.1);
p.frameBounds = [rect];


(lib.headdress_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat8_img();
	this.instance.setTransform(-120,-65,0.644,0.644);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-65,240.1,130);
p.frameBounds = [rect];


(lib.headdress_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat7_img();
	this.instance.setTransform(-116.3,-65.6,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116.3,-65.6,232.7,131.3);
p.frameBounds = [rect];


(lib.headdress_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat7_img();
	this.instance.setTransform(-129.5,-86.8,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-129.5,-86.8,259,173.6);
p.frameBounds = [rect];


(lib.headdress_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat6_img();
	this.instance.setTransform(-113.4,-72.4,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113.4,-72.4,226.9,145);
p.frameBounds = [rect];


(lib.headdress_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat6_img();
	this.instance.setTransform(-136.5,-64.7,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136.5,-64.7,273,129.5);
p.frameBounds = [rect];


(lib.headdress_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat5_img();
	this.instance.setTransform(-127.1,-77.7,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-127.1,-77.7,254.2,155.4);
p.frameBounds = [rect];


(lib.headdress_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat5_img();
	this.instance.setTransform(-125.6,-67.5,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125.6,-67.5,251.3,135.1);
p.frameBounds = [rect];


(lib.headdress_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat4_img();
	this.instance.setTransform(-123.5,-68.5,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.5,-68.5,247,137.1);
p.frameBounds = [rect];


(lib.headdress_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat4_img();
	this.instance.setTransform(-133.3,-85.4,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-133.3,-85.4,266.7,170.8);
p.frameBounds = [rect];


(lib.headdress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat3_img();
	this.instance.setTransform(-123.5,-71.5,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.5,-71.5,247,143);
p.frameBounds = [rect];


(lib.headdress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat3_img();
	this.instance.setTransform(-132.3,-63.7,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-132.3,-63.7,264.6,127.4);
p.frameBounds = [rect];


(lib.headdress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat2_img();
	this.instance.setTransform(-118.9,-74.1,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.9,-74.1,237.9,148.2);
p.frameBounds = [rect];


(lib.headdress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat2_img();
	this.instance.setTransform(-113,-65,0.628,0.628);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113,-65,226.7,130);
p.frameBounds = [rect];


(lib.headdress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hat1_img();
	this.instance.setTransform(-130.3,-61.4,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130.3,-61.4,260.7,122.9);
p.frameBounds = [rect];


(lib.headdress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hat1_img();
	this.instance.setTransform(-114,-65,0.634,0.634);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114,-65,228.3,130);
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


(lib.decor_wardrobe_3_mc = function(mode,startPosition,loop) {
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
	this.instance = new lib.decor_wardrobe_3_img();
	this.instance.setTransform(-240,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-300,480,600);
p.frameBounds = [rect];


(lib.decor_wardrobe_2_mc = function(mode,startPosition,loop) {
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
	this.instance = new lib.decor_wardrobe_2_img();
	this.instance.setTransform(-240,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-300,480,600);
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


(lib.current_makeup_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_makeup_1_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.current_hairstyle_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_hairstyle_1_img();
	this.instance.setTransform(-140,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-260,-190);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-260,-190);

	this.instance_2 = new lib.title_es_img();
	this.instance_2.setTransform(-260,-190);

	this.instance_3 = new lib.title_pt_img();
	this.instance_3.setTransform(-260,-190);

	this.instance_4 = new lib.title_tr_img();
	this.instance_4.setTransform(-260,-190);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(2).to({_off:true},1).wait(3).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-190,520,380);
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


(lib.board_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sap6_img();
	this.instance.setTransform(40,-230,0.579,0.579,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgGOAlgMAAAhK/IMdAAMAAABK/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41,-240,81,480);
p.frameBounds = [rect];


(lib.board_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.serf6_img();
	this.instance.setTransform(37.5,-230,0.626,0.626,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgGOAlgMAAAhK/IMdAAMAAABK/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-240,80,480);
p.frameBounds = [rect];


(lib.board_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sap5_img();
	this.instance.setTransform(24.6,-230,0.579,0.579,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgGOAlgMAAAhK/IMdAAMAAABK/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-240,80,480);
p.frameBounds = [rect];


(lib.board_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.serf5_img();
	this.instance.setTransform(33.9,-230,0.628,0.628,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgGOAlgMAAAhK/IMdAAMAAABK/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-240,80,480);
p.frameBounds = [rect];


(lib.board_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sap4_img();
	this.instance.setTransform(38.2,-230,0.598,0.598,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgGOAlgMAAAhK/IMdAAMAAABK/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-240,80,480);
p.frameBounds = [rect];


(lib.board_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.serf4_img();
	this.instance.setTransform(33.2,-230,0.6,0.6,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgGOAlgMAAAhK/IMdAAMAAABK/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-240,80,480);
p.frameBounds = [rect];


(lib.board_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sap3_img();
	this.instance.setTransform(31.9,-230,0.591,0.591,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgGOAlgMAAAhK/IMdAAMAAABK/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-240,80,480);
p.frameBounds = [rect];


(lib.board_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.serf3_img();
	this.instance.setTransform(36.4,-230,0.574,0.574,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgGOAlgMAAAhK/IMdAAMAAABK/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-240,80,480);
p.frameBounds = [rect];


(lib.board_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sap2_img();
	this.instance.setTransform(31.3,-230,0.593,0.593,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgGOAlgMAAAhK/IMdAAMAAABK/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-240,80,480);
p.frameBounds = [rect];


(lib.board_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.serf2_img();
	this.instance.setTransform(34.1,-230,0.558,0.558,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgGOAlgMAAAhK/IMdAAMAAABK/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-240,80,480);
p.frameBounds = [rect];


(lib.board_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sap1_img();
	this.instance.setTransform(26.9,-230,0.587,0.587,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgGOAlgMAAAhK/IMdAAMAAABK/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-240,80,480);
p.frameBounds = [rect];


(lib.board_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.serf1_img();
	this.instance.setTransform(23.2,-240,0.576,0.576,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgGOAlgMAAAhK/IMdAAMAAABK/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-240,80,480);
p.frameBounds = [rect];


(lib.bg_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_title_img();
	this.instance.setTransform(-260,-190);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-190,520,380);
p.frameBounds = [rect];


(lib.bg_location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_location_2_img();
	this.instance.setTransform(-230,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-160,460,320);
p.frameBounds = [rect];


(lib.bg_location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_location_1_img();
	this.instance.setTransform(-230,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-160,460,320);
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


(lib.background_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_3_img();
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


(lib.accessory_18_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory18_img();
	this.instance.setTransform(-31.5,-93.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOO1IAA9qIMdAAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-95,80,190);
p.frameBounds = [rect];


(lib.accessory_18_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory18_img();
	this.instance.setTransform(-37,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOOEIAA8HIMdAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-90,80,180);
p.frameBounds = [rect];


(lib.accessory_17_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory17_img();
	this.instance.setTransform(-69.5,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7NRIAA6iIV3AAIAAaig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-85,140,170);
p.frameBounds = [rect];


(lib.accessory_17_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory17_img();
	this.instance.setTransform(-39,-83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBODIAA8GIODAAIAAcGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-90,90,180);
p.frameBounds = [rect];


(lib.accessory_16_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory16_img();
	this.instance.setTransform(-35,-95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOO1IAA9qIMdAAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-95.5,80,191);
p.frameBounds = [rect];


(lib.accessory_16_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory16_img();
	this.instance.setTransform(-31.5,-84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOOEIAA8HIMdAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-90,80,180);
p.frameBounds = [rect];


(lib.accessory_15_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory15_img();
	this.instance.setTransform(-28,-65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOK8IAA13IMdAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-70,80,140);
p.frameBounds = [rect];


(lib.accessory_15_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory15_img();
	this.instance.setTransform(-39.5,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBOEIAA8GIODAAIAAcGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-90,90,180);
p.frameBounds = [rect];


(lib.accessory_14_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory14_img();
	this.instance.setTransform(-39.5,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOO1IAA9qIMdAAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-95,80,190);
p.frameBounds = [rect];


(lib.accessory_14_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory14_img();
	this.instance.setTransform(-41,-70,0.952,0.952);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBK8IAA13IODAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-70,90,140);
p.frameBounds = [rect];


(lib.accessory_13_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory13_img();
	this.instance.setTransform(-39,-92.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOO1IAA9qIMdAAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-95,80,190);
p.frameBounds = [rect];


(lib.accessory_13_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory13_img();
	this.instance.setTransform(-36,-86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOOEIAA8HIMdAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-90,80,180);
p.frameBounds = [rect];


(lib.accessory_12_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory12_img();
	this.instance.setTransform(-42,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBLtIAA3ZIODAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-75,90,150);
p.frameBounds = [rect];


(lib.accessory_12_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory12_img();
	this.instance.setTransform(-39.5,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOK7IAA11IMdAAIAAV1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-70,80,140);
p.frameBounds = [rect];


(lib.accessory_11_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory11_img();
	this.instance.setTransform(-63.5,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7LtIAA3ZIV3AAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-75,140,150);
p.frameBounds = [rect];


(lib.accessory_11_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory11_img();
	this.instance.setTransform(-27.5,-71);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBMgIAA4/IODAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-80,90,160);
p.frameBounds = [rect];


(lib.accessory_10_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory10_img();
	this.instance.setTransform(-55.5,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXKKIAA0TISvAAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-65,120,130);
p.frameBounds = [rect];


(lib.accessory_10_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory10_img();
	this.instance.setTransform(-36.5,-85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOOEIAA8HIMdAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-90,80,180);
p.frameBounds = [rect];


(lib.accessory_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory9_img();
	this.instance.setTransform(-84,-80,0.958,0.958);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmOEIAA8HIfNAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-90,200,180);
p.frameBounds = [rect];


(lib.accessory_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory9_img();
	this.instance.setTransform(-82,-90,0.947,0.947);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au1ODIAA8FIdrAAIAAcFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-90,190,180);
p.frameBounds = [rect];


(lib.accessory_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory8_img();
	this.instance.setTransform(-80,-80,0.874,0.874);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmODIAA8GIfNAAIAAcGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-90,200,180);
p.frameBounds = [rect];


(lib.accessory_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory8_img();
	this.instance.setTransform(-99,-94);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKO1IAA9qMAiVAAAIAAdqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-95,220,190);
p.frameBounds = [rect];


(lib.accessory_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory7_img();
	this.instance.setTransform(-91,-92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmO2IAA9rIfNAAIAAdrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-95,200,190);
p.frameBounds = [rect];


(lib.accessory_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory7_img();
	this.instance.setTransform(-70,-80,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsNSIAA6iIXZAAIAAaig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-85,150,170);
p.frameBounds = [rect];


(lib.accessory_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory6_img();
	this.instance.setTransform(-79,-80,0.904,0.904);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfNSIAA6jIY/AAIAAajg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-85,160,170);
p.frameBounds = [rect];


(lib.accessory_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory6_img();
	this.instance.setTransform(-76,-82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmOEIAA8GIfNAAIAAcGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-90,200,180);
p.frameBounds = [rect];


(lib.accessory_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory5_img();
	this.instance.setTransform(-77,-80,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au1OEIAA8HIdrAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-90,190,180);
p.frameBounds = [rect];


(lib.accessory_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory5_img();
	this.instance.setTransform(-83.5,-82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmOEIAA8GIfNAAIAAcGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-90,200,180);
p.frameBounds = [rect];


(lib.accessory_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory4_img();
	this.instance.setTransform(-72.5,-82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmODIAA8GIfNAAIAAcGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-90,200,180);
p.frameBounds = [rect];


(lib.accessory_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory4_img();
	this.instance.setTransform(-83.5,-83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmOEIAA8GIfNAAIAAcGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-90,200,180);
p.frameBounds = [rect];


(lib.accessory_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory3_img();
	this.instance.setTransform(-85.5,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmO2IAA9rIfNAAIAAdrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-95,200,190);
p.frameBounds = [rect];


(lib.accessory_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory3_img();
	this.instance.setTransform(-85.5,-82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmOEIAA8GIfNAAIAAcGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-90,200,180);
p.frameBounds = [rect];


(lib.accessory_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory2_img();
	this.instance.setTransform(-89.5,-94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmO2IAA9rIfNAAIAAdrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-95,200,190);
p.frameBounds = [rect];


(lib.accessory_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory2_img();
	this.instance.setTransform(-76.5,-88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmOEIAA8GIfNAAIAAcGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-90,200,180);
p.frameBounds = [rect];


(lib.accessory_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory1_img();
	this.instance.setTransform(-80,-90,0.891,0.891);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmO2IAA9rIfNAAIAAdrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-95,200,190);
p.frameBounds = [rect];


(lib.accessory_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory1_img();
	this.instance.setTransform(-91,-94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvmPnIAA/NIfNAAIAAfNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.curtain_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.curtain_2_img();
	this.instance.setTransform(-500,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-500,-300,1000,600);
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
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.nav_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_2_img();
	this.instance.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
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


(lib.nav_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_3_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.nav_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_1_2_img();
	this.instance.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
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
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
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

	// bg
	this.instance = new lib.bg_title_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-260,-190,520,380);
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


(lib.hero2_necklace9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_necklace9_img();
	this.instance.setTransform(-27.6,-45.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero2_necklace8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_necklace8_img();
	this.instance.setTransform(-43.6,-45.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero2_necklace7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_necklace7_img();
	this.instance.setTransform(-27,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero2_necklace6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_necklace6_img();
	this.instance.setTransform(-33,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero2_necklace5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_necklace5_img();
	this.instance.setTransform(-45,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero2_necklace4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_necklace4_img();
	this.instance.setTransform(-26,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero2_necklace3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_necklace3_img();
	this.instance.setTransform(-28,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero2_necklace2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_necklace2_img();
	this.instance.setTransform(-23,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero2_necklace1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_necklace1_img();
	this.instance.setTransform(-23,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero2_earring9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_earrings9_img();
	this.instance.setTransform(-3,-52,1,1,0,0,180);

	this.instance_1 = new lib.hero2_earrings9_img();
	this.instance_1.setTransform(-1,-52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero2_earring8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_earrings8_img();
	this.instance.setTransform(-2,-50,1,1,0,0,180);

	this.instance_1 = new lib.hero2_earrings8_img();
	this.instance_1.setTransform(-2.5,-50.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero2_earring7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_earrings7_img();
	this.instance.setTransform(-5,-50,1,1,0,0,180);

	this.instance_1 = new lib.hero2_earrings7_img();
	this.instance_1.setTransform(-2,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero2_earring6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_earrings6_img();
	this.instance.setTransform(-3,-52,1,1,0,0,180);

	this.instance_1 = new lib.hero2_earrings6_img();
	this.instance_1.setTransform(-3,-52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero2_earring5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_earrings5_img();
	this.instance.setTransform(-5,-53,1,1,0,0,180);

	this.instance_1 = new lib.hero2_earrings5_img();
	this.instance_1.setTransform(1,-53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero2_earring4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_earrings4_img();
	this.instance.setTransform(-1,-53,1,1,0,0,180);

	this.instance_1 = new lib.hero2_earrings4_img();
	this.instance_1.setTransform(-4,-52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero2_earring3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_earrings3_img();
	this.instance.setTransform(-2,-53,1,1,0,0,180);

	this.instance_1 = new lib.hero2_earrings3_img();
	this.instance_1.setTransform(-3,-53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero2_earring2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_earrings2_img();
	this.instance.setTransform(0,-61,1,1,0,0,180);

	this.instance_1 = new lib.hero2_earrings2_img();
	this.instance_1.setTransform(-8,-61);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero2_earring1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_earrings1_img();
	this.instance.setTransform(1,-57,1,1,0,0,180);

	this.instance_1 = new lib.hero2_earrings1_img();
	this.instance_1.setTransform(-7,-57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero1_necklace9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_necklace9_img();
	this.instance.setTransform(-30,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero1_necklace8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_necklace8_img();
	this.instance.setTransform(-29,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero1_necklace7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_necklace7_img();
	this.instance.setTransform(-30,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero1_necklace6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_necklace6_img();
	this.instance.setTransform(-29.6,-46.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero1_necklace5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_necklace5_img();
	this.instance.setTransform(-30,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero1_necklace4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_necklace4_img();
	this.instance.setTransform(-38,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero1_necklace3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_necklace3_img();
	this.instance.setTransform(-36,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero1_necklace2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_necklace2_img();
	this.instance.setTransform(-30,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero1_necklace1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_necklace1_img();
	this.instance.setTransform(-31,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero1_earrings_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings2_mc();
	this.instance.setTransform(-0.4,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119.1,-45,237.5,75);
p.frameBounds = [rect];


(lib.hero1_earrings_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_earrings1_mc();

	this.instance_1 = new lib.hero1_earrings2_mc();
	this.instance_1.setTransform(-0.4,-7.5);

	this.instance_2 = new lib.hero1_earrings3_mc();
	this.instance_2.setTransform(-0.6,7.6);

	this.instance_3 = new lib.hero1_earrings4_mc();
	this.instance_3.setTransform(-1.2,0.4);

	this.instance_4 = new lib.hero1_earrings5_mc();
	this.instance_4.setTransform(-1.1,-2);

	this.instance_5 = new lib.hero1_earrings6_mc();
	this.instance_5.setTransform(-0.6,1);

	this.instance_6 = new lib.hero1_earrings7_mc();
	this.instance_6.setTransform(-1.2,6.5);

	this.instance_7 = new lib.hero1_earrings8_mc();
	this.instance_7.setTransform(0.6,0.1);

	this.instance_8 = new lib.hero1_earrings9_mc();
	this.instance_8.setTransform(-0.4,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.5,-45.5,237,91);
p.frameBounds = [rect, new cjs.Rectangle(-119.1,-45,237.5,75), new cjs.Rectangle(-120.1,-43.1,239,101.5), new cjs.Rectangle(-118,-41.1,233.5,83), new cjs.Rectangle(-118.6,-44,235,84), new cjs.Rectangle(-115.6,-41,230,84), new cjs.Rectangle(-120,-45.5,237.5,104), new cjs.Rectangle(-113.1,-46.1,227.5,92.5), new cjs.Rectangle(-109.1,-44.5,217.5,92), null];


(lib.hero1_earring9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_earrings9_img();
	this.instance.setTransform(31,-52,1,1,0,0,180);

	this.instance_1 = new lib.hero1_earrings9_img();
	this.instance_1.setTransform(-32,-52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero1_earring8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_earrings8_img();
	this.instance.setTransform(35,-50.1,1,1,0,0,180);

	this.instance_1 = new lib.hero1_earrings8_img();
	this.instance_1.setTransform(-39,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero1_earring7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_earrings7_img();
	this.instance.setTransform(45,-53,1,1,0,0,180);

	this.instance_1 = new lib.hero1_earrings7_img();
	this.instance_1.setTransform(-50,-53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero1_earring6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_earrings6_img();
	this.instance.setTransform(39,-50.1,1,1,0,0,180);

	this.instance_1 = new lib.hero1_earrings6_img();
	this.instance_1.setTransform(-42,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero1_earring5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_earrings5_img();
	this.instance.setTransform(42,-50.1,1,1,0,0,180);

	this.instance_1 = new lib.hero1_earrings5_img();
	this.instance_1.setTransform(-46,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero1_earring4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_earrings4_img();
	this.instance.setTransform(42,-50.1,1,1,0,0,180);

	this.instance_1 = new lib.hero1_earrings4_img();
	this.instance_1.setTransform(-47.5,-50.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero1_earring3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_earrings3_img();
	this.instance.setTransform(43,-53,1,1,0,0,180);

	this.instance_1 = new lib.hero1_earrings3_img();
	this.instance_1.setTransform(-45,-53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero1_earring2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_earrings2_img();
	this.instance.setTransform(41,-50,1,1,0,0,180);

	this.instance_1 = new lib.hero1_earrings2_img();
	this.instance_1.setTransform(-44,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero1_earring1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_earrings1_img();
	this.instance.setTransform(39,-51,1,1,0,0,180);

	this.instance_1 = new lib.hero1_earrings1_img();
	this.instance_1.setTransform(-43,-51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// decor
	this.instance_2 = new lib.maneken_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// headdress
	this.headdress = new lib.hero1_hat_all_mc();
	this.headdress.setTransform(4.4,-223);

	this.timeline.addTween(cjs.Tween.get(this.headdress).to({rotation:4.5,x:21.7,y:-214.7},49).to({rotation:0,x:4.4,y:-223},50).wait(1));

	// earrings
	this.earrings = new lib.hero1_earrings_all_mc();
	this.earrings.setTransform(9.4,-26.6);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({scaleY:1,skewX:-0.8,skewY:4.5,x:11.3,y:-18.6},49).to({scaleY:1,skewX:0,skewY:0,x:9.4,y:-26.6},50).wait(1));

	// accessory
	this.accessory = new lib.hero1_accessory_all_mc();
	this.accessory.setTransform(235,150.3);

	this.timeline.addTween(cjs.Tween.get(this.accessory).to({y:158.3},49).to({y:150.3},50).wait(1));

	// fringe
	this.fringe = new lib.hero1_fringe_all_mc();
	this.fringe.setTransform(7,-149.6);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({rotation:4.5,x:18.7,y:-141.4},49).to({rotation:0,x:7,y:-149.6},50).wait(1));

	// eyes
	this.eyes = new lib.hero1_eyes_all_mc();
	this.eyes.setTransform(8.4,-105.6);

	this.timeline.addTween(cjs.Tween.get(this.eyes).to({rotation:4.5,x:16.5,y:-97.4},49).to({rotation:0,x:8.4,y:-105.6},50).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero1_eyebrows_all_mc();
	this.eyebrows.setTransform(8.4,-147.1);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).to({rotation:4.5,x:19.8,y:-138.8},49).to({rotation:0,x:8.4,y:-147.1},50).wait(1));

	// lips
	this.lips = new lib.hero1_lips_all_mc();
	this.lips.setTransform(7.9,-34);

	this.timeline.addTween(cjs.Tween.get(this.lips).to({rotation:4.5,x:10.5,y:-26},49).to({rotation:0,x:7.9,y:-34},50).wait(1));

	// eyeshadow
	this.eyeshadow = new lib.hero1_shadows_mc();
	this.eyeshadow.setTransform(8.4,-120.1);

	this.timeline.addTween(cjs.Tween.get(this.eyeshadow).to({rotation:4.5,x:17.7,y:-111.9},49).to({rotation:0,x:8.4,y:-120.1},50).wait(1));

	// body
	this.instance = new lib.hero1_head_mc();
	this.instance.setTransform(8.4,-120.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4.5,x:17.7,y:-111.9},49).to({rotation:0,x:8.4,y:-120.1},50).wait(1));

	// beads
	this.beads = new lib.hero1_necklace_all_mc();
	this.beads.setTransform(12.4,44.4);

	this.timeline.addTween(cjs.Tween.get(this.beads).to({y:52.4},49).to({y:44.4},50).wait(1));

	// dress
	this.dress = new lib.hero1_clothes_all_mc();
	this.dress.setTransform(13,145.5);

	this.timeline.addTween(cjs.Tween.get(this.dress).to({y:153.5},49).to({y:145.5},50).wait(1));

	// body
	this.instance_1 = new lib.hero1_body_mc();
	this.instance_1.setTransform(-52.6,130.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:138.9},49).to({y:130.9},50).wait(1));

	// hair
	this.hair = new lib.hero1_hair_all_mc();
	this.hair.setTransform(7,-149.6);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({rotation:4.5,x:18.7,y:-141.4},49).to({rotation:0,x:7,y:-149.6},50).wait(1));

	// board
	this.board = new lib.sap_all_mc();
	this.board.setTransform(0,255);

	this.timeline.addTween(cjs.Tween.get(this.board).to({y:263},49).to({y:255},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-391.5,-317.5,783,617.5);
p.frameBounds = [rect, new cjs.Rectangle(-391.5,-317.4,783,617.5), new cjs.Rectangle(-391.5,-317.3,783,617.6), new cjs.Rectangle(-391.5,-317.8,783,618.3), new cjs.Rectangle(-391.5,-317.8,783,618.4), new cjs.Rectangle(-391.5,-317.7,783,618.5), new cjs.Rectangle(-391.5,-318.2,783,619.2), new cjs.Rectangle(-391.5,-318.1,783,619.3), new cjs.Rectangle(-391.5,-318,783,619.3), new cjs.Rectangle(-391.5,-318.6,783,620.1), new cjs.Rectangle(-391.5,-318.5,783,620.2), new cjs.Rectangle(-391.5,-319.1,783,620.9), new cjs.Rectangle(-391.5,-319,783,621), new cjs.Rectangle(-391.5,-318.9,783,621), new cjs.Rectangle(-391.5,-319.5,783,621.8), new cjs.Rectangle(-391.5,-319.4,783,621.8), new cjs.Rectangle(-391.5,-319.3,783,621.9), new cjs.Rectangle(-391.5,-319.9,783,622.7), new cjs.Rectangle(-391.5,-319.7,783,622.7), new cjs.Rectangle(-391.5,-319.7,783,622.8), new cjs.Rectangle(-391.5,-320.2,783,623.5), new cjs.Rectangle(-391.5,-320.1,783,623.6), new cjs.Rectangle(-391.5,-320.7,783,624.3), new cjs.Rectangle(-391.5,-320.6,783,624.3), new cjs.Rectangle(-391.5,-320.5,783,624.4), new cjs.Rectangle(-391.5,-321.1,783,625.2), new cjs.Rectangle(-391.5,-321,783,625.2), new cjs.Rectangle(-391.5,-320.9,783,625.3), new cjs.Rectangle(-391.5,-321.5,783,626), new cjs.Rectangle(-391.5,-321.4,783,626.1), new cjs.Rectangle(-391.5,-321.2,783,626.1), new cjs.Rectangle(-391.5,-321.9,783,626.9), new cjs.Rectangle(-391.5,-321.7,783,626.9), new cjs.Rectangle(-391.5,-322.3,783,627.7), new cjs.Rectangle(-391.5,-322.2,783,627.8), new cjs.Rectangle(-391.5,-322.1,783,627.8), new cjs.Rectangle(-391.5,-322.6,783,628.5), new cjs.Rectangle(-391.5,-322.6,783,628.6), new cjs.Rectangle(-391.5,-322.5,783,628.7), new cjs.Rectangle(-391.5,-323,783,629.4), new cjs.Rectangle(-391.5,-322.9,783,629.5), new cjs.Rectangle(-391.5,-323.5,783,630.2), new cjs.Rectangle(-391.5,-323.4,783,630.3), new cjs.Rectangle(-391.5,-323.3,783,630.3), new cjs.Rectangle(-391.5,-323.8,783,631), new cjs.Rectangle(-391.5,-323.7,783,631.1), new cjs.Rectangle(-391.5,-323.7,783,631.2), new cjs.Rectangle(-391.5,-324.2,783,631.8), new cjs.Rectangle(-391.5,-324.1,783,631.9), new cjs.Rectangle(-391.5,-324.6,783,632.6), new cjs.Rectangle(-391.5,-324.1,783,631.9), new cjs.Rectangle(-391.5,-324.2,783,631.9), new cjs.Rectangle(-391.5,-323.7,783,631.2), new cjs.Rectangle(-391.5,-323.7,783,631.1), new cjs.Rectangle(-391.5,-323.8,783,631), new cjs.Rectangle(-391.5,-323.3,783,630.3), new cjs.Rectangle(-391.5,-323.3,783,630.2), new cjs.Rectangle(-391.5,-323.5,783,630.2), new cjs.Rectangle(-391.5,-322.9,783,629.5), new cjs.Rectangle(-391.5,-323,783,629.4), new cjs.Rectangle(-391.5,-323,783,629.3), new cjs.Rectangle(-391.5,-322.6,783,628.7), new cjs.Rectangle(-391.5,-322.7,783,628.6), new cjs.Rectangle(-391.5,-322.1,783,627.8), new cjs.Rectangle(-391.5,-322.2,783,627.8), new cjs.Rectangle(-391.5,-322.2,783,627.7), new cjs.Rectangle(-391.5,-321.7,783,627), new cjs.Rectangle(-391.5,-321.8,783,626.9), new cjs.Rectangle(-391.5,-321.9,783,626.8), new cjs.Rectangle(-391.5,-321.4,783,626.2), new cjs.Rectangle(-391.5,-321.4,783,626.1), new cjs.Rectangle(-391.5,-321.5,783,626), new cjs.Rectangle(-391.5,-320.9,783,625.2), new cjs.Rectangle(-391.5,-321,783,625.2), new cjs.Rectangle(-391.5,-320.4,783,624.3), new cjs.Rectangle(-391.5,-320.6,783,624.4), new cjs.Rectangle(-391.5,-320.6,783,624.3), new cjs.Rectangle(-391.5,-320.1,783,623.6), new cjs.Rectangle(-391.5,-320.2,783,623.5), new cjs.Rectangle(-391.5,-320.3,783,623.5), new cjs.Rectangle(-391.5,-319.7,783,622.7), new cjs.Rectangle(-391.5,-319.8,783,622.7), new cjs.Rectangle(-391.5,-319.9,783,622.6), new cjs.Rectangle(-391.5,-319.3,783,621.9), new cjs.Rectangle(-391.5,-319.4,783,621.8), new cjs.Rectangle(-391.5,-319.5,783,621.7), new cjs.Rectangle(-391.5,-318.9,783,621), new cjs.Rectangle(-391.5,-319,783,620.9), new cjs.Rectangle(-391.5,-318.5,783,620.2), new cjs.Rectangle(-391.5,-318.5,783,620.1), new cjs.Rectangle(-391.5,-318.6,783,620), new cjs.Rectangle(-391.5,-318.1,783,619.4), new cjs.Rectangle(-391.5,-318.2,783,619.3), new cjs.Rectangle(-391.5,-318.2,783,619.2), new cjs.Rectangle(-391.5,-317.6,783,618.4), new cjs.Rectangle(-391.5,-317.8,783,618.4), new cjs.Rectangle(-391.5,-317.8,783,618.3), new cjs.Rectangle(-391.5,-317.3,783,617.6), new cjs.Rectangle(-391.5,-317.4,783,617.5), new cjs.Rectangle(-391.5,-317.5,783,617.5)];


(lib.hero_2_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero1_earrings_main_mc();
	this.instance.setTransform(9.4,-26.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:-0.8,skewY:4.5,x:11.3,y:-18.6},49).to({scaleY:1,skewX:0,skewY:0,x:9.4,y:-26.6},50).wait(1));

	// animation
	this.instance_1 = new lib.hero1_accessory_main_mc();
	this.instance_1.setTransform(235,150.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:158.3},49).to({y:150.3},50).wait(1));

	// animation
	this.instance_2 = new lib.hero1_fringe_main_mc();
	this.instance_2.setTransform(7,-149.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:4.5,x:18.7,y:-141.4},49).to({rotation:0,x:7,y:-149.6},50).wait(1));

	// animation
	this.instance_3 = new lib.hero1_eyes_main_mc();
	this.instance_3.setTransform(8.4,-105.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:4.5,x:16.5,y:-97.4},49).to({rotation:0,x:8.4,y:-105.6},50).wait(1));

	// animation
	this.instance_4 = new lib.hero1_eyebrows_main_mc();
	this.instance_4.setTransform(8.4,-147.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:4.5,x:19.8,y:-138.8},49).to({rotation:0,x:8.4,y:-147.1},50).wait(1));

	// animation
	this.instance_5 = new lib.hero1_lips_main_mc();
	this.instance_5.setTransform(7.9,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:4.5,x:10.5,y:-26},49).to({rotation:0,x:7.9,y:-34},50).wait(1));

	// animation
	this.instance_6 = new lib.hero1_shadows_main_mc();
	this.instance_6.setTransform(8.4,-120.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:4.5,x:17.7,y:-111.9},49).to({rotation:0,x:8.4,y:-120.1},50).wait(1));

	// animation
	this.instance_7 = new lib.hero1_head_mc();
	this.instance_7.setTransform(8.4,-120.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:4.5,x:17.7,y:-111.9},49).to({rotation:0,x:8.4,y:-120.1},50).wait(1));

	// animation
	this.instance_8 = new lib.hero1_necklace_main_mc();
	this.instance_8.setTransform(12.4,44.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:52.4},49).to({y:44.4},50).wait(1));

	// animation
	this.instance_9 = new lib.hero1_clothes_main_mc();
	this.instance_9.setTransform(13,145.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:153.5},49).to({y:145.5},50).wait(1));

	// animation
	this.instance_10 = new lib.hero1_body_mc();
	this.instance_10.setTransform(-52.6,130.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:138.9},49).to({y:130.9},50).wait(1));

	// animation
	this.instance_11 = new lib.hero1_hair_main_mc();
	this.instance_11.setTransform(7,-149.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({rotation:4.5,x:18.7,y:-141.4},49).to({rotation:0,x:7,y:-149.6},50).wait(1));

	// animation
	this.instance_12 = new lib.sap_main_mc();
	this.instance_12.setTransform(0,255);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({y:263},49).to({y:255},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-391.5,-291.6,783,591.6);
p.frameBounds = [rect, new cjs.Rectangle(-391.5,-291.5,783,591.7), new cjs.Rectangle(-391.5,-291.4,783,591.7), new cjs.Rectangle(-391.5,-291.9,783,592.3), new cjs.Rectangle(-391.5,-291.8,783,592.4), new cjs.Rectangle(-391.5,-291.6,783,592.4), new cjs.Rectangle(-391.5,-292.1,783,593.1), new cjs.Rectangle(-391.5,-292,783,593.1), new cjs.Rectangle(-391.5,-291.9,783,593.2), new cjs.Rectangle(-391.5,-292.4,783,593.8), new cjs.Rectangle(-391.5,-292.2,783,593.9), new cjs.Rectangle(-391.5,-292.7,783,594.5), new cjs.Rectangle(-391.5,-292.6,783,594.6), new cjs.Rectangle(-391.5,-292.5,783,594.6), new cjs.Rectangle(-391.5,-293,783,595.3), new cjs.Rectangle(-391.5,-292.8,783,595.3), new cjs.Rectangle(-391.5,-292.7,783,595.3), new cjs.Rectangle(-391.5,-293.2,783,596), new cjs.Rectangle(-391.5,-293.1,783,596), new cjs.Rectangle(-391.5,-293,783,596.1), new cjs.Rectangle(-391.5,-293.5,783,596.7), new cjs.Rectangle(-391.5,-293.3,783,596.8), new cjs.Rectangle(-391.5,-293.8,783,597.4), new cjs.Rectangle(-391.5,-293.7,783,597.4), new cjs.Rectangle(-391.5,-293.6,783,597.5), new cjs.Rectangle(-391.5,-294.1,783,598.2), new cjs.Rectangle(-391.5,-293.9,783,598.2), new cjs.Rectangle(-391.5,-293.8,783,598.2), new cjs.Rectangle(-391.5,-294.3,783,598.8), new cjs.Rectangle(-391.5,-294.2,783,598.9), new cjs.Rectangle(-391.5,-294.1,783,599), new cjs.Rectangle(-391.5,-294.5,783,599.6), new cjs.Rectangle(-391.5,-294.4,783,599.6), new cjs.Rectangle(-391.5,-294.8,783,600.2), new cjs.Rectangle(-391.5,-294.8,783,600.3), new cjs.Rectangle(-391.5,-294.6,783,600.3), new cjs.Rectangle(-391.5,-295.1,783,601), new cjs.Rectangle(-391.5,-294.9,783,601), new cjs.Rectangle(-391.5,-294.8,783,601), new cjs.Rectangle(-391.5,-295.3,783,601.6), new cjs.Rectangle(-391.5,-295.1,783,601.7), new cjs.Rectangle(-391.5,-295.6,783,602.3), new cjs.Rectangle(-391.5,-295.5,783,602.4), new cjs.Rectangle(-391.5,-295.4,783,602.3), new cjs.Rectangle(-391.5,-295.8,783,603), new cjs.Rectangle(-391.5,-295.6,783,603), new cjs.Rectangle(-391.5,-295.5,783,603), new cjs.Rectangle(-391.5,-296,783,603.7), new cjs.Rectangle(-391.5,-295.9,783,603.7), new cjs.Rectangle(-391.5,-296.3,783,604.3), new cjs.Rectangle(-391.5,-295.9,783,603.7), new cjs.Rectangle(-391.5,-296,783,603.7), new cjs.Rectangle(-391.5,-295.6,783,603.1), new cjs.Rectangle(-391.5,-295.7,783,603.1), new cjs.Rectangle(-391.5,-295.8,783,603), new cjs.Rectangle(-391.5,-295.4,783,602.4), new cjs.Rectangle(-391.5,-295.5,783,602.4), new cjs.Rectangle(-391.5,-295.6,783,602.3), new cjs.Rectangle(-391.5,-295.2,783,601.8), new cjs.Rectangle(-391.5,-295.3,783,601.7), new cjs.Rectangle(-391.5,-295.4,783,601.6), new cjs.Rectangle(-391.5,-294.9,783,601), new cjs.Rectangle(-391.5,-295,783,600.9), new cjs.Rectangle(-391.5,-294.6,783,600.3), new cjs.Rectangle(-391.5,-294.7,783,600.3), new cjs.Rectangle(-391.5,-294.9,783,600.3), new cjs.Rectangle(-391.5,-294.4,783,599.7), new cjs.Rectangle(-391.5,-294.5,783,599.6), new cjs.Rectangle(-391.5,-294.6,783,599.5), new cjs.Rectangle(-391.5,-294.1,783,598.9), new cjs.Rectangle(-391.5,-294.2,783,598.9), new cjs.Rectangle(-391.5,-294.4,783,598.8), new cjs.Rectangle(-391.5,-293.9,783,598.2), new cjs.Rectangle(-391.5,-294,783,598.1), new cjs.Rectangle(-391.5,-293.5,783,597.5), new cjs.Rectangle(-391.5,-293.6,783,597.5), new cjs.Rectangle(-391.5,-293.8,783,597.5), new cjs.Rectangle(-391.5,-293.3,783,596.8), new cjs.Rectangle(-391.5,-293.4,783,596.8), new cjs.Rectangle(-391.5,-293.5,783,596.7), new cjs.Rectangle(-391.5,-293.1,783,596.1), new cjs.Rectangle(-391.5,-293.2,783,596.1), new cjs.Rectangle(-391.5,-293.3,783,596), new cjs.Rectangle(-391.5,-292.8,783,595.4), new cjs.Rectangle(-391.5,-292.9,783,595.3), new cjs.Rectangle(-391.5,-293,783,595.3), new cjs.Rectangle(-391.5,-292.6,783,594.7), new cjs.Rectangle(-391.5,-292.7,783,594.6), new cjs.Rectangle(-391.5,-292.2,783,593.9), new cjs.Rectangle(-391.5,-292.3,783,593.9), new cjs.Rectangle(-391.5,-292.4,783,593.8), new cjs.Rectangle(-391.5,-291.9,783,593.2), new cjs.Rectangle(-391.5,-292,783,593.1), new cjs.Rectangle(-391.5,-292.1,783,593.1), new cjs.Rectangle(-391.5,-291.6,783,592.4), new cjs.Rectangle(-391.5,-291.8,783,592.4), new cjs.Rectangle(-391.5,-291.9,783,592.3), new cjs.Rectangle(-391.5,-291.4,783,591.7), new cjs.Rectangle(-391.5,-291.6,783,591.7), new cjs.Rectangle(-391.5,-291.6,783,591.6)];


(lib.hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// headdress
	this.headdress = new lib.hero2_hat_all_mc();
	this.headdress.setTransform(35,-236.6);

	this.timeline.addTween(cjs.Tween.get(this.headdress).to({rotation:-3.7,x:21.3,y:-225.7},54).to({rotation:0,x:35,y:-236.6},55).wait(1));

	// accessory
	this.accessory = new lib.hero2_accessory_all_mc();
	this.accessory.setTransform(232.4,136);

	this.timeline.addTween(cjs.Tween.get(this.accessory).to({y:146},54).to({y:136},55).wait(1));

	// earrings
	this.earrings = new lib.hero2_earrings_all1_mc();
	this.earrings.setTransform(121.5,-42);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({rotation:2.5,x:117.2,y:-37.1},54).to({rotation:0,x:121.5,y:-42},55).wait(1));

	// fringe
	this.fringe = new lib.hero2_fringe_all_mc();
	this.fringe.setTransform(39.9,-192.5);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({rotation:-3.7,x:28.9,y:-181.9},54).to({rotation:0,x:39.9,y:-192.5},55).wait(1));

	// eyes
	this.eyes = new lib.hero2_eyes_all_mc();
	this.eyes.setTransform(23.9,-126);

	this.timeline.addTween(cjs.Tween.get(this.eyes).to({rotation:-3.7,x:17.3,y:-114.5},54).to({rotation:0,x:23.9,y:-126},55).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero2_eyebrows_all_mc();
	this.eyebrows.setTransform(21.9,-160.1);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).to({rotation:-3.7,x:13.1,y:-148.5},54).to({rotation:0,x:21.9,y:-160.1},55).wait(1));

	// lips
	this.lips = new lib.hero2_lips_all_mc();
	this.lips.setTransform(15.9,-56.6);

	this.timeline.addTween(cjs.Tween.get(this.lips).to({rotation:-3.7,x:13.8,y:-44.8},54).to({rotation:0,x:15.9,y:-56.6},55).wait(1));

	// eyeshadow
	this.eyeshadow = new lib.hero2_shadows_all_mc();
	this.eyeshadow.setTransform(41.9,-146.6);

	this.timeline.addTween(cjs.Tween.get(this.eyeshadow).to({rotation:-3.7,x:33.9,y:-136.3},54).to({rotation:0,x:41.9,y:-146.6},55).wait(1));

	// body
	this.instance = new lib.hero2_head_mc();
	this.instance.setTransform(41.4,-146.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3.7,x:33.4,y:-136.3},54).to({rotation:0,x:41.4,y:-146.6},55).wait(1));

	// beads
	this.beads = new lib.hero2_necklace_all_mc();
	this.beads.setTransform(32.9,10.4);

	this.timeline.addTween(cjs.Tween.get(this.beads).to({y:20.4},54).to({y:10.4},55).wait(1));

	// dress
	this.dress = new lib.hero2_clothes_all_mc();
	this.dress.setTransform(24.4,87.4);

	this.timeline.addTween(cjs.Tween.get(this.dress).to({y:97.4},54).to({y:87.4},55).wait(1));

	// body
	this.instance_1 = new lib.hero2_body_mc();
	this.instance_1.setTransform(-79,106.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:116.4},54).to({y:106.4},55).wait(1));

	// earringsSecond
	this.earringsSecond = new lib.hero2_earrings_all2_mc();
	this.earringsSecond.setTransform(-45.5,-45.5);

	this.timeline.addTween(cjs.Tween.get(this.earringsSecond).to({rotation:1.2,x:-47.6,y:-29.7},54).to({rotation:0,x:-45.5,y:-45.5},55).wait(1));

	// hair
	this.hair = new lib.hero2_hair_all_mc();
	this.hair.setTransform(39.9,-192.5);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({rotation:-3.7,x:28.9,y:-181.9},54).to({rotation:0,x:39.9,y:-192.5},55).wait(1));

	// board
	this.board = new lib.serf_all_mc();
	this.board.setTransform(-11,243.3);

	this.timeline.addTween(cjs.Tween.get(this.board).to({y:253.3},54).to({y:243.3},55).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-428,-339.1,834,623.5);
p.frameBounds = [rect, new cjs.Rectangle(-428,-338.9,834,623.5), new cjs.Rectangle(-428,-338.8,834,623.5), new cjs.Rectangle(-428,-338.6,834,623.5), new cjs.Rectangle(-428,-339.1,834,624.2), new cjs.Rectangle(-428,-338.9,834,624.2), new cjs.Rectangle(-428,-338.8,834,624.3), new cjs.Rectangle(-428,-338.7,834,624.3), new cjs.Rectangle(-428,-339.1,834,624.9), new cjs.Rectangle(-428,-339,834,625), new cjs.Rectangle(-428,-338.8,834,625), new cjs.Rectangle(-428,-339.2,834,625.6), new cjs.Rectangle(-428,-339.1,834,625.6), new cjs.Rectangle(-428,-338.9,834,625.7), new cjs.Rectangle(-428,-338.8,834,625.7), new cjs.Rectangle(-428,-339.2,834,626.4), new cjs.Rectangle(-428,-339.1,834,626.4), new cjs.Rectangle(-428,-338.9,834,626.3), new cjs.Rectangle(-428,-338.7,834,626.4), new cjs.Rectangle(-428,-339.2,834,627), new cjs.Rectangle(-428,-339,834,627.1), new cjs.Rectangle(-428,-338.9,834,627.1), new cjs.Rectangle(-428,-339.3,834,627.7), new cjs.Rectangle(-428,-339.2,834,627.8), new cjs.Rectangle(-428,-339,834,627.8), new cjs.Rectangle(-428,-338.9,834,627.9), new cjs.Rectangle(-428,-339.3,834,628.5), new cjs.Rectangle(-428,-339.2,834,628.6), new cjs.Rectangle(-428,-339,834,628.5), new cjs.Rectangle(-428,-339.4,834,629.1), new cjs.Rectangle(-428,-339.3,834,629.2), new cjs.Rectangle(-428,-339.1,834,629.2), new cjs.Rectangle(-428,-339,834,629.3), new cjs.Rectangle(-428,-339.4,834,629.8), new cjs.Rectangle(-428,-339.3,834,629.9), new cjs.Rectangle(-428,-339.1,834,630), new cjs.Rectangle(-428,-339,834,630), new cjs.Rectangle(-428,-339.4,834,630.6), new cjs.Rectangle(-428,-339.2,834,630.6), new cjs.Rectangle(-428,-339.1,834,630.6), new cjs.Rectangle(-428,-339.5,834,631.3), new cjs.Rectangle(-428,-339.4,834,631.3), new cjs.Rectangle(-428,-339.2,834,631.4), new cjs.Rectangle(-428,-339.1,834,631.4), new cjs.Rectangle(-428,-339.5,834,632), new cjs.Rectangle(-428,-339.3,834,632), new cjs.Rectangle(-428,-339.1,834,632), new cjs.Rectangle(-428,-339,834,632.1), new cjs.Rectangle(-428,-339.4,834,632.7), new cjs.Rectangle(-428,-339.3,834,632.7), new cjs.Rectangle(-428,-339.1,834,632.7), new cjs.Rectangle(-428,-339.5,834,633.3), new cjs.Rectangle(-428,-339.4,834,633.4), new cjs.Rectangle(-428,-339.3,834,633.4), new cjs.Rectangle(-428,-339.7,834,634), new cjs.Rectangle(-428,-339.3,834,633.5), new cjs.Rectangle(-428,-339.5,834,633.5), new cjs.Rectangle(-428,-339.6,834,633.4), new cjs.Rectangle(-428,-339.1,834,632.7), new cjs.Rectangle(-428,-339.3,834,632.8), new cjs.Rectangle(-428,-339.5,834,632.7), new cjs.Rectangle(-428,-339.6,834,632.7), new cjs.Rectangle(-428,-339.2,834,632.1), new cjs.Rectangle(-428,-339.4,834,632.1), new cjs.Rectangle(-428,-339.5,834,632), new cjs.Rectangle(-428,-339,834,631.4), new cjs.Rectangle(-428,-339.2,834,631.4), new cjs.Rectangle(-428,-339.3,834,631.3), new cjs.Rectangle(-428,-339.5,834,631.3), new cjs.Rectangle(-428,-339.1,834,630.7), new cjs.Rectangle(-428,-339.3,834,630.7), new cjs.Rectangle(-428,-339.4,834,630.7), new cjs.Rectangle(-428,-339.5,834,630.6), new cjs.Rectangle(-428,-339.1,834,630), new cjs.Rectangle(-428,-339.3,834,630), new cjs.Rectangle(-428,-339.3,834,629.9), new cjs.Rectangle(-428,-339,834,629.3), new cjs.Rectangle(-428,-339.1,834,629.3), new cjs.Rectangle(-428,-339.3,834,629.3), new cjs.Rectangle(-428,-339.4,834,629.2), new cjs.Rectangle(-428,-339,834,628.6), new cjs.Rectangle(-428,-339.1,834,628.6), new cjs.Rectangle(-428,-339.2,834,628.5), new cjs.Rectangle(-428,-339.4,834,628.5), new cjs.Rectangle(-428,-339,834,627.9), new cjs.Rectangle(-428,-339,834,627.7), new cjs.Rectangle(-428,-339.2,834,627.7), new cjs.Rectangle(-428,-338.8,834,627.2), new cjs.Rectangle(-428,-339,834,627.1), new cjs.Rectangle(-428,-339.1,834,627.1), new cjs.Rectangle(-428,-339.3,834,627.1), new cjs.Rectangle(-428,-338.8,834,626.4), new cjs.Rectangle(-428,-339,834,626.5), new cjs.Rectangle(-428,-339.1,834,626.3), new cjs.Rectangle(-428,-339.3,834,626.4), new cjs.Rectangle(-428,-338.9,834,625.8), new cjs.Rectangle(-428,-338.9,834,625.6), new cjs.Rectangle(-428,-339.1,834,625.7), new cjs.Rectangle(-428,-338.7,834,625.1), new cjs.Rectangle(-428,-338.8,834,625), new cjs.Rectangle(-428,-339,834,625), new cjs.Rectangle(-428,-339.1,834,624.9), new cjs.Rectangle(-428,-338.7,834,624.3), new cjs.Rectangle(-428,-338.8,834,624.3), new cjs.Rectangle(-428,-339,834,624.2), new cjs.Rectangle(-428,-339.1,834,624.2), new cjs.Rectangle(-428,-338.7,834,623.6), new cjs.Rectangle(-428,-338.8,834,623.5), new cjs.Rectangle(-428,-338.9,834,623.5), new cjs.Rectangle(-428,-339.1,834,623.5)];


(lib.hero_1_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero2_hat_main_mc();
	this.instance.setTransform(35,-236.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3.7,x:21.3,y:-225.7},54).to({rotation:0,x:35,y:-236.6},55).wait(1));

	// animation
	this.instance_1 = new lib.hero2_accessory_main_mc();
	this.instance_1.setTransform(232.4,136);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:146},54).to({y:136},55).wait(1));

	// animation
	this.instance_2 = new lib.hero2_fringe_main_mc();
	this.instance_2.setTransform(39.9,-192.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-3.7,x:28.9,y:-181.9},54).to({rotation:0,x:39.9,y:-192.5},55).wait(1));

	// animation
	this.instance_3 = new lib.hero2_eyes_main_mc();
	this.instance_3.setTransform(23.9,-126);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-3.7,x:17.3,y:-114.5},54).to({rotation:0,x:23.9,y:-126},55).wait(1));

	// animation
	this.instance_4 = new lib.hero2_eyebrows_main_mc();
	this.instance_4.setTransform(21.9,-160.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-3.7,x:13.1,y:-148.5},54).to({rotation:0,x:21.9,y:-160.1},55).wait(1));

	// animation
	this.instance_5 = new lib.hero2_lips_main_mc();
	this.instance_5.setTransform(15.9,-56.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-3.7,x:13.8,y:-44.8},54).to({rotation:0,x:15.9,y:-56.6},55).wait(1));

	// animation
	this.instance_6 = new lib.hero2_shadows_main_mc();
	this.instance_6.setTransform(41.9,-146.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-3.7,x:33.9,y:-136.3},54).to({rotation:0,x:41.9,y:-146.6},55).wait(1));

	// animation
	this.instance_7 = new lib.hero2_head_mc();
	this.instance_7.setTransform(41.4,-146.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-3.7,x:33.4,y:-136.3},54).to({rotation:0,x:41.4,y:-146.6},55).wait(1));

	// animation
	this.instance_8 = new lib.hero2_clothes_main_mc();
	this.instance_8.setTransform(24.4,87.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:97.4},54).to({y:87.4},55).wait(1));

	// animation
	this.instance_9 = new lib.hero2_body_mc();
	this.instance_9.setTransform(-79,106.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:116.4},54).to({y:106.4},55).wait(1));

	// animation
	this.instance_10 = new lib.hero2_hair_main_mc();
	this.instance_10.setTransform(39.9,-192.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-3.7,x:28.9,y:-181.9},54).to({rotation:0,x:39.9,y:-192.5},55).wait(1));

	// animation
	this.instance_11 = new lib.serf_main_2_mc();
	this.instance_11.setTransform(-11,243.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({y:253.3},54).to({y:243.3},55).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-428,-339.1,834,623.5);
p.frameBounds = [rect, new cjs.Rectangle(-428,-338.9,834,623.5), new cjs.Rectangle(-428,-338.8,834,623.5), new cjs.Rectangle(-428,-338.6,834,623.5), new cjs.Rectangle(-428,-339.1,834,624.2), new cjs.Rectangle(-428,-338.9,834,624.2), new cjs.Rectangle(-428,-338.8,834,624.3), new cjs.Rectangle(-428,-338.7,834,624.3), new cjs.Rectangle(-428,-339.1,834,624.9), new cjs.Rectangle(-428,-339,834,625), new cjs.Rectangle(-428,-338.8,834,625), new cjs.Rectangle(-428,-339.2,834,625.6), new cjs.Rectangle(-428,-339.1,834,625.6), new cjs.Rectangle(-428,-338.9,834,625.7), new cjs.Rectangle(-428,-338.8,834,625.7), new cjs.Rectangle(-428,-339.2,834,626.4), new cjs.Rectangle(-428,-339.1,834,626.4), new cjs.Rectangle(-428,-338.9,834,626.3), new cjs.Rectangle(-428,-338.7,834,626.4), new cjs.Rectangle(-428,-339.2,834,627), new cjs.Rectangle(-428,-339,834,627.1), new cjs.Rectangle(-428,-338.9,834,627.1), new cjs.Rectangle(-428,-339.3,834,627.7), new cjs.Rectangle(-428,-339.2,834,627.8), new cjs.Rectangle(-428,-339,834,627.8), new cjs.Rectangle(-428,-338.9,834,627.9), new cjs.Rectangle(-428,-339.3,834,628.5), new cjs.Rectangle(-428,-339.2,834,628.6), new cjs.Rectangle(-428,-339,834,628.5), new cjs.Rectangle(-428,-339.4,834,629.1), new cjs.Rectangle(-428,-339.3,834,629.2), new cjs.Rectangle(-428,-339.1,834,629.2), new cjs.Rectangle(-428,-339,834,629.3), new cjs.Rectangle(-428,-339.4,834,629.8), new cjs.Rectangle(-428,-339.3,834,629.9), new cjs.Rectangle(-428,-339.1,834,630), new cjs.Rectangle(-428,-339,834,630), new cjs.Rectangle(-428,-339.4,834,630.6), new cjs.Rectangle(-428,-339.2,834,630.6), new cjs.Rectangle(-428,-339.1,834,630.6), new cjs.Rectangle(-428,-339.5,834,631.3), new cjs.Rectangle(-428,-339.4,834,631.3), new cjs.Rectangle(-428,-339.2,834,631.4), new cjs.Rectangle(-428,-339.1,834,631.4), new cjs.Rectangle(-428,-339.5,834,632), new cjs.Rectangle(-428,-339.3,834,632), new cjs.Rectangle(-428,-339.1,834,632), new cjs.Rectangle(-428,-339,834,632.1), new cjs.Rectangle(-428,-339.4,834,632.7), new cjs.Rectangle(-428,-339.3,834,632.7), new cjs.Rectangle(-428,-339.1,834,632.7), new cjs.Rectangle(-428,-339.5,834,633.3), new cjs.Rectangle(-428,-339.4,834,633.4), new cjs.Rectangle(-428,-339.3,834,633.4), new cjs.Rectangle(-428,-339.7,834,634), new cjs.Rectangle(-428,-339.3,834,633.5), new cjs.Rectangle(-428,-339.5,834,633.5), new cjs.Rectangle(-428,-339.6,834,633.4), new cjs.Rectangle(-428,-339.1,834,632.7), new cjs.Rectangle(-428,-339.3,834,632.8), new cjs.Rectangle(-428,-339.5,834,632.7), new cjs.Rectangle(-428,-339.6,834,632.7), new cjs.Rectangle(-428,-339.2,834,632.1), new cjs.Rectangle(-428,-339.4,834,632.1), new cjs.Rectangle(-428,-339.5,834,632), new cjs.Rectangle(-428,-339,834,631.4), new cjs.Rectangle(-428,-339.2,834,631.4), new cjs.Rectangle(-428,-339.3,834,631.3), new cjs.Rectangle(-428,-339.5,834,631.3), new cjs.Rectangle(-428,-339.1,834,630.7), new cjs.Rectangle(-428,-339.3,834,630.7), new cjs.Rectangle(-428,-339.4,834,630.7), new cjs.Rectangle(-428,-339.5,834,630.6), new cjs.Rectangle(-428,-339.1,834,630), new cjs.Rectangle(-428,-339.3,834,630), new cjs.Rectangle(-428,-339.3,834,629.9), new cjs.Rectangle(-428,-339,834,629.3), new cjs.Rectangle(-428,-339.1,834,629.3), new cjs.Rectangle(-428,-339.3,834,629.3), new cjs.Rectangle(-428,-339.4,834,629.2), new cjs.Rectangle(-428,-339,834,628.6), new cjs.Rectangle(-428,-339.1,834,628.6), new cjs.Rectangle(-428,-339.2,834,628.5), new cjs.Rectangle(-428,-339.4,834,628.5), new cjs.Rectangle(-428,-339,834,627.9), new cjs.Rectangle(-428,-339,834,627.7), new cjs.Rectangle(-428,-339.2,834,627.7), new cjs.Rectangle(-428,-338.8,834,627.2), new cjs.Rectangle(-428,-339,834,627.1), new cjs.Rectangle(-428,-339.1,834,627.1), new cjs.Rectangle(-428,-339.3,834,627.1), new cjs.Rectangle(-428,-338.8,834,626.4), new cjs.Rectangle(-428,-339,834,626.5), new cjs.Rectangle(-428,-339.1,834,626.3), new cjs.Rectangle(-428,-339.3,834,626.4), new cjs.Rectangle(-428,-338.9,834,625.8), new cjs.Rectangle(-428,-338.9,834,625.6), new cjs.Rectangle(-428,-339.1,834,625.7), new cjs.Rectangle(-428,-338.7,834,625.1), new cjs.Rectangle(-428,-338.8,834,625), new cjs.Rectangle(-428,-339,834,625), new cjs.Rectangle(-428,-339.1,834,624.9), new cjs.Rectangle(-428,-338.7,834,624.3), new cjs.Rectangle(-428,-338.8,834,624.3), new cjs.Rectangle(-428,-339,834,624.2), new cjs.Rectangle(-428,-339.1,834,624.2), new cjs.Rectangle(-428,-338.7,834,623.6), new cjs.Rectangle(-428,-338.8,834,623.5), new cjs.Rectangle(-428,-338.9,834,623.5), new cjs.Rectangle(-428,-339.1,834,623.5)];


(lib.headdress_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.6,0.6,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.filters_exit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.filters_body_exit_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},19).to({scaleX:1,scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect, new cjs.Rectangle(-44.7,-24.8,89.6,49.8), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.2,-24.6,88.6,49.2), new cjs.Rectangle(-44,-24.4,88.1,49), new cjs.Rectangle(-43.8,-24.3,87.7,48.7), new cjs.Rectangle(-43.5,-24.2,87.2,48.4), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.1,-23.9,86.2,47.9), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-42.6,-23.6,85.3,47.3), new cjs.Rectangle(-42.3,-23.5,84.8,47.1), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-41.9,-23.2,83.9,46.6), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.4,-23,82.9,46.1), new cjs.Rectangle(-41.2,-22.8,82.4,45.8), new cjs.Rectangle(-40.9,-22.7,82,45.6), new cjs.Rectangle(-40.7,-22.6,81.5,45.3), new cjs.Rectangle(-40.5,-22.5,81,45), new cjs.Rectangle(-40.6,-22.5,81.3,45.2), new cjs.Rectangle(-40.7,-22.6,81.6,45.3), new cjs.Rectangle(-40.9,-22.7,81.9,45.5), new cjs.Rectangle(-41,-22.8,82.2,45.7), new cjs.Rectangle(-41.2,-22.9,82.5,45.8), new cjs.Rectangle(-41.3,-22.9,82.8,46), new cjs.Rectangle(-41.5,-23,83.1,46.2), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.8,-23.2,83.7,46.5), new cjs.Rectangle(-41.9,-23.3,84,46.7), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-42.2,-23.4,84.6,47), new cjs.Rectangle(-42.4,-23.5,84.9,47.2), new cjs.Rectangle(-42.5,-23.6,85.2,47.3), new cjs.Rectangle(-42.7,-23.7,85.5,47.5), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-43,-23.9,86.1,47.8), new cjs.Rectangle(-43.1,-23.9,86.4,48), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.4,-24.1,87,48.3), new cjs.Rectangle(-43.6,-24.2,87.3,48.5), new cjs.Rectangle(-43.7,-24.3,87.6,48.7), new cjs.Rectangle(-43.9,-24.4,87.9,48.8), new cjs.Rectangle(-44,-24.4,88.2,49), new cjs.Rectangle(-44.2,-24.5,88.5,49.2), new cjs.Rectangle(-44.3,-24.6,88.8,49.3), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.6,-24.8,89.4,49.7), new cjs.Rectangle(-44.8,-24.9,89.7,49.8), new cjs.Rectangle(-45,-25,90,50)];


(lib.eyeshadow_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.6,0.6,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.earrings_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring9_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring9_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earring1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earring1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.earrings_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.6,0.6,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.current_makeup_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_makeup_2_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},29).to({alpha:0.602},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_hairstyle_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_hairstyle_2_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},29).to({alpha:0.602},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.bg_location_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.bg_location_2_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},29).to({alpha:0.012},30).wait(1));

	// graph
	this.instance_1 = new lib.bg_location_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-160,460,320);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.beads_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace9_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.beads_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace9_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.beads_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.beads_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.beads_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.beads_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.beads_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.beads_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.beads_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.beads_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.beads_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.beads_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.beads_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.beads_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.beads_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.beads_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.beads_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.beads_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.beads_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.6,0.6,0,0,0,0.1,0);

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


(lib.animation_decor_background_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.decor_background_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.199},39).to({alpha:1},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.accessory_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.6,0.6,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:39,end:79});

	// animation
	this.instance = new lib.curtain_2_mc();
	this.instance.setTransform(400,300,0.833,0.833);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},15).wait(20).to({alpha:0.012},15).to({_off:true},1).wait(15));

	// animation
	this.instance_1 = new lib.curtain_1_mc();
	this.instance_1.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:0,alpha:0.012},0).to({alpha:1},18).wait(40).to({alpha:0.012},19).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,600,1600,600);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,0,1600,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.copyright_title_mc = function(mode,startPosition,loop) {
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


(lib.nav_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({x:5},10).to({scaleX:0.8,scaleY:0.8,x:-5},20).to({scaleX:1,scaleY:1,x:0},10).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.039)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDPAACSCTQCTCTAADNQAADOiTCTQiSCTjPAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-50,-50,100.5,100), new cjs.Rectangle(-50,-50,101,100), new cjs.Rectangle(-50,-50,101.5,100), new cjs.Rectangle(-50,-50,102,100), new cjs.Rectangle(-50,-50,102.5,100), new cjs.Rectangle(-50,-50,103,100), new cjs.Rectangle(-50,-50,103.5,100), new cjs.Rectangle(-50,-50,104,100), new cjs.Rectangle(-50,-50,104.5,100), new cjs.Rectangle(-50,-50,105,100), new cjs.Rectangle(-50,-50,104,100), new cjs.Rectangle(-50,-50,103.1,100), new cjs.Rectangle(-50,-50,102,100), new cjs.Rectangle(-50,-50,101,100), new cjs.Rectangle(-50,-50,100.1,100), rect=new cjs.Rectangle(-50,-50,100,100), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_2_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},29).to({alpha:0.012},30).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.039)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDPAACSCTQCTCTAADNQAADOiTCTQiSCTjPAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
	this.instance.setTransform(-230,-160);

	this.instance_1 = new lib.location_1_6_img();
	this.instance_1.setTransform(-230,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// decor
	this.instance_2 = new lib.bg_location_1_mc();

	this.instance_3 = new lib.bg_location_0_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A+TZAQiVgBhphpQhqhpAAiVMAAAgmvQAAiVBqhpQBphqCVAAMA8nAAAQCVAABpBqQBqBpAACVMAAAAmvQAACVhqBpQhpBpiVABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-160,460,320);
p.frameBounds = [rect, rect, rect];


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_5_img();
	this.instance.setTransform(-230,-160);

	this.instance_1 = new lib.location_1_5_img();
	this.instance_1.setTransform(-230,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// decor
	this.instance_2 = new lib.bg_location_1_mc();

	this.instance_3 = new lib.bg_location_0_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A+TZAQiVgBhphpQhqhpAAiVMAAAgmvQAAiVBqhpQBphqCVAAMA8nAAAQCVAABpBqQBqBpAACVMAAAAmvQAACVhqBpQhpBpiVABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-160,460,320);
p.frameBounds = [rect, rect, rect];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_4_img();
	this.instance.setTransform(-230,-160);

	this.instance_1 = new lib.location_1_4_img();
	this.instance_1.setTransform(-230,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// decor
	this.instance_2 = new lib.bg_location_1_mc();

	this.instance_3 = new lib.bg_location_0_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A+TZAQiVgBhphpQhqhpAAiVMAAAgmvQAAiVBqhpQBphqCVAAMA8nAAAQCVAABpBqQBqBpAACVMAAAAmvQAACVhqBpQhpBpiVABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-160,460,320);
p.frameBounds = [rect, rect, rect];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_3_img();
	this.instance.setTransform(-230,-160);

	this.instance_1 = new lib.location_1_3_img();
	this.instance_1.setTransform(-230,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// decor
	this.instance_2 = new lib.bg_location_1_mc();

	this.instance_3 = new lib.bg_location_0_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A+TZAQiVgBhphpQhqhpAAiVMAAAgmvQAAiVBqhpQBphqCVAAMA8nAAAQCVAABpBqQBqBpAACVMAAAAmvQAACVhqBpQhpBpiVABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-160,460,320);
p.frameBounds = [rect, rect, rect];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_2_img();
	this.instance.setTransform(-230,-160);

	this.instance_1 = new lib.location_1_2_img();
	this.instance_1.setTransform(-230,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// decor
	this.instance_2 = new lib.bg_location_1_mc();

	this.instance_3 = new lib.bg_location_0_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A+TZAQiVgBhphpQhqhpAAiVMAAAgmvQAAiVBqhpQBphqCVAAMA8nAAAQCVAABpBqQBqBpAACVMAAAAmvQAACVhqBpQhpBpiVABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-160,460,320);
p.frameBounds = [rect, rect, rect];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_1_img();
	this.instance.setTransform(-230,-160);

	this.instance_1 = new lib.location_1_1_img();
	this.instance_1.setTransform(-230,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// decor
	this.instance_2 = new lib.bg_location_1_mc();

	this.instance_3 = new lib.bg_location_0_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A+TZAQiVgBhphpQhqhpAAiVMAAAgmvQAAiVBqhpQBphqCVAAMA8nAAAQCVAABpBqQBqBpAACVMAAAAmvQAACVhqBpQhpBpiVABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-160,460,320);
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


(lib.heroes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(230,310);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:390},0).wait(1).to({x:400,y:1100},0).wait(1).to({x:550,y:315},0).wait(1).to({x:400,y:1100},0).wait(1).to({x:390,y:315},0).wait(1).to({x:230,y:310},0).wait(1).to({x:390},0).wait(1).to({x:400,y:1100},0).wait(1).to({x:550,y:310},0).wait(1).to({x:400,y:1100},0).wait(1).to({x:390,y:310},0).wait(1));

	// hero_1
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(540,310);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:400,y:1100},0).wait(1).to({y:310},0).wait(1).to({x:220,y:315},0).wait(1).to({x:430,y:325},0).wait(1).to({x:400,y:1100},0).wait(1).to({x:540,y:310},0).wait(1).to({x:400,y:1100},0).wait(1).to({y:325},0).wait(1).to({x:220,y:310},0).wait(1).to({x:400,y:330},0).wait(1).to({y:1100},0).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-400,0);

	this.instance_1 = new lib.background_4_img();
	this.instance_1.setTransform(-400,0);

	this.instance_2 = new lib.background_5_img();
	this.instance_2.setTransform(-400,0);

	this.instance_3 = new lib.background_6_img();
	this.instance_3.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-29.1,1600,639.1);
p.frameBounds = [rect, new cjs.Rectangle(-400,-7.5,1600,1391.8), new cjs.Rectangle(-400,-29.1,1600,1429.1), new cjs.Rectangle(-400,-24.1,1600,639.1), new cjs.Rectangle(-400,-14.1,1600,1414.1), new cjs.Rectangle(-400,-2.5,1600,1386.8), new cjs.Rectangle(-400,-29.1,1600,639.1), new cjs.Rectangle(-400,-7.5,1600,1391.8), new cjs.Rectangle(-400,-14.1,1600,1414.1), new cjs.Rectangle(-400,-29.1,1600,639.1), new cjs.Rectangle(-400,-9.1,1600,1409.1), new cjs.Rectangle(-400,-7.5,1600,1391.8)];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.instance = new lib.hero_2_main_mc();
	this.instance.setTransform(-850,315);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(140).to({_off:false},0).to({x:250},19).to({x:200},5).wait(1));

	// hero_2
	this.instance_1 = new lib.hero_1_main_mc();
	this.instance_1.setTransform(-900,340,1,1,0,0,180);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).to({x:290},20).to({x:240},5).wait(45).to({x:1700,y:450},20).to({_off:true},1).wait(15));

	// hero_1
	this.instance_2 = new lib.hero_2_main_mc();
	this.instance_2.setTransform(200,315);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({x:1600,y:400},20).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-191.5,23.4,783,591.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-121.5,27.6,783,591.6), new cjs.Rectangle(-51.5,31.9,783,591.6), new cjs.Rectangle(18.5,36.1,783,591.6), new cjs.Rectangle(88.5,40.4,783,591.6), new cjs.Rectangle(158.5,44.6,783,591.6), new cjs.Rectangle(228.5,48.9,783,591.6), new cjs.Rectangle(298.5,53.1,783,591.6), new cjs.Rectangle(368.5,57.4,783,591.6), new cjs.Rectangle(438.5,61.6,783,591.6), new cjs.Rectangle(-1306,0.9,2597.5,656.6), new cjs.Rectangle(-1246.5,0.9,2608,660.9), new cjs.Rectangle(-1187,0.9,2618.5,665.1), new cjs.Rectangle(-1127.5,0.9,2629,669.4), new cjs.Rectangle(-1068,0.9,2639.5,673.6), new cjs.Rectangle(-1008.5,0.9,2650,677.9), new cjs.Rectangle(-949,0.9,2660.5,682.1), new cjs.Rectangle(-889.5,0.9,2671,686.4), new cjs.Rectangle(-830,0.9,2681.5,690.6), new cjs.Rectangle(-770.5,0.9,2692,694.9), new cjs.Rectangle(-711,0.9,2702.5,699.1), new cjs.Rectangle(-651.5,0.9,834,623.4), new cjs.Rectangle(-592,0.9,834,623.4), new cjs.Rectangle(-532.5,0.9,834,623.4), new cjs.Rectangle(-473,0.9,834,623.4), new cjs.Rectangle(-413.5,0.9,834,623.4), new cjs.Rectangle(-354,0.9,834,623.4), new cjs.Rectangle(-294.5,0.9,834,623.4), new cjs.Rectangle(-235,0.9,834,623.4), new cjs.Rectangle(-175.5,0.9,834,623.4), new cjs.Rectangle(-116,0.9,834,623.4), new cjs.Rectangle(-126,0.9,834,623.4), new cjs.Rectangle(-136,0.9,834,623.4), new cjs.Rectangle(-146,0.9,834,623.4), new cjs.Rectangle(-156,0.9,834,623.4), rect=new cjs.Rectangle(-166,0.9,834,623.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-93,6.4,834,623.4), new cjs.Rectangle(-20,11.9,834,623.4), new cjs.Rectangle(53,17.4,834,623.4), new cjs.Rectangle(126,22.9,834,623.4), new cjs.Rectangle(199,28.4,834,623.4), new cjs.Rectangle(272,33.9,834,623.4), new cjs.Rectangle(345,39.4,834,623.4), new cjs.Rectangle(418,44.9,834,623.4), new cjs.Rectangle(491,50.4,834,623.4), new cjs.Rectangle(564,55.9,834,623.4), new cjs.Rectangle(-1241.5,23.4,2712.5,661.4), new cjs.Rectangle(-1183.6,23.4,2727.6,666.9), new cjs.Rectangle(-1125.7,23.4,2742.7,672.4), new cjs.Rectangle(-1067.8,23.4,2757.8,677.9), new cjs.Rectangle(-1009.9,23.4,2772.9,683.4), new cjs.Rectangle(-952,23.4,2788.1,688.9), new cjs.Rectangle(-894.1,23.4,2803.1,694.4), new cjs.Rectangle(-836.2,23.4,2818.3,699.9), new cjs.Rectangle(-778.3,23.4,2833.4,705.4), new cjs.Rectangle(-720.4,23.4,2848.5,710.9), new cjs.Rectangle(-662.5,23.4,783,591.6), new cjs.Rectangle(-604.6,23.4,783,591.6), new cjs.Rectangle(-546.7,23.4,783,591.6), new cjs.Rectangle(-488.9,23.4,783,591.6), new cjs.Rectangle(-430.9,23.4,783,591.6), new cjs.Rectangle(-373.1,23.4,783,591.6), new cjs.Rectangle(-315.2,23.4,783,591.6), new cjs.Rectangle(-257.3,23.4,783,591.6), new cjs.Rectangle(-199.4,23.4,783,591.6), new cjs.Rectangle(-141.5,23.4,783,591.6), new cjs.Rectangle(-151.5,23.4,783,591.6), new cjs.Rectangle(-161.5,23.4,783,591.6), new cjs.Rectangle(-171.5,23.4,783,591.6), new cjs.Rectangle(-181.5,23.4,783,591.6), new cjs.Rectangle(-191.5,23.4,783,591.6)];


(lib.frame_locations_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":129});

	// timeline functions:
	this.frame_29 = function() {
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
	this.frame_44 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(15).call(this.frame_44).wait(86));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(170,-80);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({y:-500},0).wait(38).to({y:-30},10).to({y:-80},5).wait(40).to({y:-130},5).to({y:500},15).wait(16));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-170,80);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:-500},0).wait(18).to({y:130},15).to({y:80},5).wait(40).to({y:30},5).to({y:500},10).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-240,800,480);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,-660,800,320), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-660,800,362), new cjs.Rectangle(-400,-660,800,404), new cjs.Rectangle(-400,-660,800,446), new cjs.Rectangle(-400,-660,800,488), new cjs.Rectangle(-400,-660,800,530), new cjs.Rectangle(-400,-660,800,572), new cjs.Rectangle(-400,-660,800,614), new cjs.Rectangle(-400,-660,800,656), new cjs.Rectangle(-400,-660,800,698), new cjs.Rectangle(-400,-660,800,740), new cjs.Rectangle(-400,-660,800,782), new cjs.Rectangle(-400,-660,800,824), new cjs.Rectangle(-400,-660,800,866), new cjs.Rectangle(-400,-660,800,908), new cjs.Rectangle(-400,-660,800,950), new cjs.Rectangle(-400,-660,800,940), new cjs.Rectangle(-400,-660,800,930), new cjs.Rectangle(-400,-660,800,920), new cjs.Rectangle(-400,-660,800,910), new cjs.Rectangle(-400,-660,800,900), new cjs.Rectangle(-400,-613,800,853), new cjs.Rectangle(-400,-566,800,806), new cjs.Rectangle(-400,-519,800,759), new cjs.Rectangle(-400,-472,800,712), new cjs.Rectangle(-400,-425,800,665), new cjs.Rectangle(-400,-378,800,618), new cjs.Rectangle(-400,-331,800,571), new cjs.Rectangle(-400,-284,800,524), new cjs.Rectangle(-400,-237,800,477), new cjs.Rectangle(-400,-190,800,430), new cjs.Rectangle(-400,-200,800,440), new cjs.Rectangle(-400,-210,800,450), new cjs.Rectangle(-400,-220,800,460), new cjs.Rectangle(-400,-230,800,470), rect=new cjs.Rectangle(-400,-240,800,480), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-240,800,470), new cjs.Rectangle(-400,-240,800,460), new cjs.Rectangle(-400,-240,800,450), new cjs.Rectangle(-400,-240,800,440), new cjs.Rectangle(-400,-240,800,430), new cjs.Rectangle(-400,-240,800,477), new cjs.Rectangle(-400,-240,800,524), new cjs.Rectangle(-400,-240,800,571), new cjs.Rectangle(-400,-240,800,618), new cjs.Rectangle(-400,-240,800,665), new cjs.Rectangle(-400,-240,800,712), new cjs.Rectangle(-400,-240,800,759), new cjs.Rectangle(-400,-240,800,806), new cjs.Rectangle(-400,-240,800,853), new cjs.Rectangle(-400,-240,800,900), new cjs.Rectangle(-400,-250,800,910), new cjs.Rectangle(-400,-260,800,920), new cjs.Rectangle(-400,-270,800,930), new cjs.Rectangle(-400,-280,800,940), new cjs.Rectangle(-400,-290,800,950), new cjs.Rectangle(-400,-248,800,908), new cjs.Rectangle(-400,-206,800,866), new cjs.Rectangle(-400,-164,800,824), new cjs.Rectangle(-400,-122,800,782), new cjs.Rectangle(-400,-80,800,740), new cjs.Rectangle(-400,-38,800,698), new cjs.Rectangle(-400,4,800,656), new cjs.Rectangle(-400,46,800,614), new cjs.Rectangle(-400,88,800,572), new cjs.Rectangle(-400,130,800,530), new cjs.Rectangle(-400,172,800,488), new cjs.Rectangle(-400,214,800,446), new cjs.Rectangle(-400,256,800,404), new cjs.Rectangle(-400,298,800,362), rect=new cjs.Rectangle(-400,340,800,320), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":129});

	// timeline functions:
	this.frame_29 = function() {
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
	this.frame_44 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(15).call(this.frame_44).wait(86));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-170,-80);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:-500},0).wait(38).to({y:-30},10).to({y:-80},5).wait(40).to({y:-130},5).to({y:500},15).wait(16));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(170,80);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({y:-500},0).wait(18).to({y:130},15).to({y:80},5).wait(40).to({y:30},5).to({y:500},10).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-240,800,480);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,-660,800,320), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-660,800,362), new cjs.Rectangle(-400,-660,800,404), new cjs.Rectangle(-400,-660,800,446), new cjs.Rectangle(-400,-660,800,488), new cjs.Rectangle(-400,-660,800,530), new cjs.Rectangle(-400,-660,800,572), new cjs.Rectangle(-400,-660,800,614), new cjs.Rectangle(-400,-660,800,656), new cjs.Rectangle(-400,-660,800,698), new cjs.Rectangle(-400,-660,800,740), new cjs.Rectangle(-400,-660,800,782), new cjs.Rectangle(-400,-660,800,824), new cjs.Rectangle(-400,-660,800,866), new cjs.Rectangle(-400,-660,800,908), new cjs.Rectangle(-400,-660,800,950), new cjs.Rectangle(-400,-660,800,940), new cjs.Rectangle(-400,-660,800,930), new cjs.Rectangle(-400,-660,800,920), new cjs.Rectangle(-400,-660,800,910), new cjs.Rectangle(-400,-660,800,900), new cjs.Rectangle(-400,-613,800,853), new cjs.Rectangle(-400,-566,800,806), new cjs.Rectangle(-400,-519,800,759), new cjs.Rectangle(-400,-472,800,712), new cjs.Rectangle(-400,-425,800,665), new cjs.Rectangle(-400,-378,800,618), new cjs.Rectangle(-400,-331,800,571), new cjs.Rectangle(-400,-284,800,524), new cjs.Rectangle(-400,-237,800,477), new cjs.Rectangle(-400,-190,800,430), new cjs.Rectangle(-400,-200,800,440), new cjs.Rectangle(-400,-210,800,450), new cjs.Rectangle(-400,-220,800,460), new cjs.Rectangle(-400,-230,800,470), rect=new cjs.Rectangle(-400,-240,800,480), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-240,800,470), new cjs.Rectangle(-400,-240,800,460), new cjs.Rectangle(-400,-240,800,450), new cjs.Rectangle(-400,-240,800,440), new cjs.Rectangle(-400,-240,800,430), new cjs.Rectangle(-400,-240,800,477), new cjs.Rectangle(-400,-240,800,524), new cjs.Rectangle(-400,-240,800,571), new cjs.Rectangle(-400,-240,800,618), new cjs.Rectangle(-400,-240,800,665), new cjs.Rectangle(-400,-240,800,712), new cjs.Rectangle(-400,-240,800,759), new cjs.Rectangle(-400,-240,800,806), new cjs.Rectangle(-400,-240,800,853), new cjs.Rectangle(-400,-240,800,900), new cjs.Rectangle(-400,-250,800,910), new cjs.Rectangle(-400,-260,800,920), new cjs.Rectangle(-400,-270,800,930), new cjs.Rectangle(-400,-280,800,940), new cjs.Rectangle(-400,-290,800,950), new cjs.Rectangle(-400,-248,800,908), new cjs.Rectangle(-400,-206,800,866), new cjs.Rectangle(-400,-164,800,824), new cjs.Rectangle(-400,-122,800,782), new cjs.Rectangle(-400,-80,800,740), new cjs.Rectangle(-400,-38,800,698), new cjs.Rectangle(-400,4,800,656), new cjs.Rectangle(-400,46,800,614), new cjs.Rectangle(-400,88,800,572), new cjs.Rectangle(-400,130,800,530), new cjs.Rectangle(-400,172,800,488), new cjs.Rectangle(-400,214,800,446), new cjs.Rectangle(-400,256,800,404), new cjs.Rectangle(-400,298,800,362), rect=new cjs.Rectangle(-400,340,800,320), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":129});

	// timeline functions:
	this.frame_29 = function() {
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
	this.frame_44 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(15).call(this.frame_44).wait(86));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(170,-80);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({y:-500},0).wait(38).to({y:-30},10).to({y:-80},5).wait(40).to({y:-130},5).to({y:500},15).wait(16));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-170,80);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-500},0).wait(18).to({y:130},15).to({y:80},5).wait(40).to({y:30},5).to({y:500},10).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-240,800,480);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,-660,800,320), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-660,800,362), new cjs.Rectangle(-400,-660,800,404), new cjs.Rectangle(-400,-660,800,446), new cjs.Rectangle(-400,-660,800,488), new cjs.Rectangle(-400,-660,800,530), new cjs.Rectangle(-400,-660,800,572), new cjs.Rectangle(-400,-660,800,614), new cjs.Rectangle(-400,-660,800,656), new cjs.Rectangle(-400,-660,800,698), new cjs.Rectangle(-400,-660,800,740), new cjs.Rectangle(-400,-660,800,782), new cjs.Rectangle(-400,-660,800,824), new cjs.Rectangle(-400,-660,800,866), new cjs.Rectangle(-400,-660,800,908), new cjs.Rectangle(-400,-660,800,950), new cjs.Rectangle(-400,-660,800,940), new cjs.Rectangle(-400,-660,800,930), new cjs.Rectangle(-400,-660,800,920), new cjs.Rectangle(-400,-660,800,910), new cjs.Rectangle(-400,-660,800,900), new cjs.Rectangle(-400,-613,800,853), new cjs.Rectangle(-400,-566,800,806), new cjs.Rectangle(-400,-519,800,759), new cjs.Rectangle(-400,-472,800,712), new cjs.Rectangle(-400,-425,800,665), new cjs.Rectangle(-400,-378,800,618), new cjs.Rectangle(-400,-331,800,571), new cjs.Rectangle(-400,-284,800,524), new cjs.Rectangle(-400,-237,800,477), new cjs.Rectangle(-400,-190,800,430), new cjs.Rectangle(-400,-200,800,440), new cjs.Rectangle(-400,-210,800,450), new cjs.Rectangle(-400,-220,800,460), new cjs.Rectangle(-400,-230,800,470), rect=new cjs.Rectangle(-400,-240,800,480), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-240,800,470), new cjs.Rectangle(-400,-240,800,460), new cjs.Rectangle(-400,-240,800,450), new cjs.Rectangle(-400,-240,800,440), new cjs.Rectangle(-400,-240,800,430), new cjs.Rectangle(-400,-240,800,477), new cjs.Rectangle(-400,-240,800,524), new cjs.Rectangle(-400,-240,800,571), new cjs.Rectangle(-400,-240,800,618), new cjs.Rectangle(-400,-240,800,665), new cjs.Rectangle(-400,-240,800,712), new cjs.Rectangle(-400,-240,800,759), new cjs.Rectangle(-400,-240,800,806), new cjs.Rectangle(-400,-240,800,853), new cjs.Rectangle(-400,-240,800,900), new cjs.Rectangle(-400,-250,800,910), new cjs.Rectangle(-400,-260,800,920), new cjs.Rectangle(-400,-270,800,930), new cjs.Rectangle(-400,-280,800,940), new cjs.Rectangle(-400,-290,800,950), new cjs.Rectangle(-400,-248,800,908), new cjs.Rectangle(-400,-206,800,866), new cjs.Rectangle(-400,-164,800,824), new cjs.Rectangle(-400,-122,800,782), new cjs.Rectangle(-400,-80,800,740), new cjs.Rectangle(-400,-38,800,698), new cjs.Rectangle(-400,4,800,656), new cjs.Rectangle(-400,46,800,614), new cjs.Rectangle(-400,88,800,572), new cjs.Rectangle(-400,130,800,530), new cjs.Rectangle(-400,172,800,488), new cjs.Rectangle(-400,214,800,446), new cjs.Rectangle(-400,256,800,404), new cjs.Rectangle(-400,298,800,362), rect=new cjs.Rectangle(-400,340,800,320), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":129});

	// timeline functions:
	this.frame_29 = function() {
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
	this.frame_44 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(15).call(this.frame_44).wait(86));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-170,-80);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-500},0).wait(38).to({y:-30},10).to({y:-80},5).wait(40).to({y:-130},5).to({y:500},15).wait(16));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(170,80);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({y:-500},0).wait(18).to({y:130},15).to({y:80},5).wait(40).to({y:30},5).to({y:500},10).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-240,800,480);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,-660,800,320), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-660,800,362), new cjs.Rectangle(-400,-660,800,404), new cjs.Rectangle(-400,-660,800,446), new cjs.Rectangle(-400,-660,800,488), new cjs.Rectangle(-400,-660,800,530), new cjs.Rectangle(-400,-660,800,572), new cjs.Rectangle(-400,-660,800,614), new cjs.Rectangle(-400,-660,800,656), new cjs.Rectangle(-400,-660,800,698), new cjs.Rectangle(-400,-660,800,740), new cjs.Rectangle(-400,-660,800,782), new cjs.Rectangle(-400,-660,800,824), new cjs.Rectangle(-400,-660,800,866), new cjs.Rectangle(-400,-660,800,908), new cjs.Rectangle(-400,-660,800,950), new cjs.Rectangle(-400,-660,800,940), new cjs.Rectangle(-400,-660,800,930), new cjs.Rectangle(-400,-660,800,920), new cjs.Rectangle(-400,-660,800,910), new cjs.Rectangle(-400,-660,800,900), new cjs.Rectangle(-400,-613,800,853), new cjs.Rectangle(-400,-566,800,806), new cjs.Rectangle(-400,-519,800,759), new cjs.Rectangle(-400,-472,800,712), new cjs.Rectangle(-400,-425,800,665), new cjs.Rectangle(-400,-378,800,618), new cjs.Rectangle(-400,-331,800,571), new cjs.Rectangle(-400,-284,800,524), new cjs.Rectangle(-400,-237,800,477), new cjs.Rectangle(-400,-190,800,430), new cjs.Rectangle(-400,-200,800,440), new cjs.Rectangle(-400,-210,800,450), new cjs.Rectangle(-400,-220,800,460), new cjs.Rectangle(-400,-230,800,470), rect=new cjs.Rectangle(-400,-240,800,480), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-240,800,470), new cjs.Rectangle(-400,-240,800,460), new cjs.Rectangle(-400,-240,800,450), new cjs.Rectangle(-400,-240,800,440), new cjs.Rectangle(-400,-240,800,430), new cjs.Rectangle(-400,-240,800,477), new cjs.Rectangle(-400,-240,800,524), new cjs.Rectangle(-400,-240,800,571), new cjs.Rectangle(-400,-240,800,618), new cjs.Rectangle(-400,-240,800,665), new cjs.Rectangle(-400,-240,800,712), new cjs.Rectangle(-400,-240,800,759), new cjs.Rectangle(-400,-240,800,806), new cjs.Rectangle(-400,-240,800,853), new cjs.Rectangle(-400,-240,800,900), new cjs.Rectangle(-400,-250,800,910), new cjs.Rectangle(-400,-260,800,920), new cjs.Rectangle(-400,-270,800,930), new cjs.Rectangle(-400,-280,800,940), new cjs.Rectangle(-400,-290,800,950), new cjs.Rectangle(-400,-248,800,908), new cjs.Rectangle(-400,-206,800,866), new cjs.Rectangle(-400,-164,800,824), new cjs.Rectangle(-400,-122,800,782), new cjs.Rectangle(-400,-80,800,740), new cjs.Rectangle(-400,-38,800,698), new cjs.Rectangle(-400,4,800,656), new cjs.Rectangle(-400,46,800,614), new cjs.Rectangle(-400,88,800,572), new cjs.Rectangle(-400,130,800,530), new cjs.Rectangle(-400,172,800,488), new cjs.Rectangle(-400,214,800,446), new cjs.Rectangle(-400,256,800,404), new cjs.Rectangle(-400,298,800,362), rect=new cjs.Rectangle(-400,340,800,320), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":129});

	// timeline functions:
	this.frame_29 = function() {
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
	this.frame_44 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(15).call(this.frame_44).wait(86));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(170,-80);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-500},0).wait(38).to({y:-30},10).to({y:-80},5).wait(40).to({y:-130},5).to({y:500},15).wait(16));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-170,80);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:-500},0).wait(18).to({y:130},15).to({y:80},5).wait(40).to({y:30},5).to({y:500},10).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-240,800,480);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,-660,800,320), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-660,800,362), new cjs.Rectangle(-400,-660,800,404), new cjs.Rectangle(-400,-660,800,446), new cjs.Rectangle(-400,-660,800,488), new cjs.Rectangle(-400,-660,800,530), new cjs.Rectangle(-400,-660,800,572), new cjs.Rectangle(-400,-660,800,614), new cjs.Rectangle(-400,-660,800,656), new cjs.Rectangle(-400,-660,800,698), new cjs.Rectangle(-400,-660,800,740), new cjs.Rectangle(-400,-660,800,782), new cjs.Rectangle(-400,-660,800,824), new cjs.Rectangle(-400,-660,800,866), new cjs.Rectangle(-400,-660,800,908), new cjs.Rectangle(-400,-660,800,950), new cjs.Rectangle(-400,-660,800,940), new cjs.Rectangle(-400,-660,800,930), new cjs.Rectangle(-400,-660,800,920), new cjs.Rectangle(-400,-660,800,910), new cjs.Rectangle(-400,-660,800,900), new cjs.Rectangle(-400,-613,800,853), new cjs.Rectangle(-400,-566,800,806), new cjs.Rectangle(-400,-519,800,759), new cjs.Rectangle(-400,-472,800,712), new cjs.Rectangle(-400,-425,800,665), new cjs.Rectangle(-400,-378,800,618), new cjs.Rectangle(-400,-331,800,571), new cjs.Rectangle(-400,-284,800,524), new cjs.Rectangle(-400,-237,800,477), new cjs.Rectangle(-400,-190,800,430), new cjs.Rectangle(-400,-200,800,440), new cjs.Rectangle(-400,-210,800,450), new cjs.Rectangle(-400,-220,800,460), new cjs.Rectangle(-400,-230,800,470), rect=new cjs.Rectangle(-400,-240,800,480), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-240,800,470), new cjs.Rectangle(-400,-240,800,460), new cjs.Rectangle(-400,-240,800,450), new cjs.Rectangle(-400,-240,800,440), new cjs.Rectangle(-400,-240,800,430), new cjs.Rectangle(-400,-240,800,477), new cjs.Rectangle(-400,-240,800,524), new cjs.Rectangle(-400,-240,800,571), new cjs.Rectangle(-400,-240,800,618), new cjs.Rectangle(-400,-240,800,665), new cjs.Rectangle(-400,-240,800,712), new cjs.Rectangle(-400,-240,800,759), new cjs.Rectangle(-400,-240,800,806), new cjs.Rectangle(-400,-240,800,853), new cjs.Rectangle(-400,-240,800,900), new cjs.Rectangle(-400,-250,800,910), new cjs.Rectangle(-400,-260,800,920), new cjs.Rectangle(-400,-270,800,930), new cjs.Rectangle(-400,-280,800,940), new cjs.Rectangle(-400,-290,800,950), new cjs.Rectangle(-400,-248,800,908), new cjs.Rectangle(-400,-206,800,866), new cjs.Rectangle(-400,-164,800,824), new cjs.Rectangle(-400,-122,800,782), new cjs.Rectangle(-400,-80,800,740), new cjs.Rectangle(-400,-38,800,698), new cjs.Rectangle(-400,4,800,656), new cjs.Rectangle(-400,46,800,614), new cjs.Rectangle(-400,88,800,572), new cjs.Rectangle(-400,130,800,530), new cjs.Rectangle(-400,172,800,488), new cjs.Rectangle(-400,214,800,446), new cjs.Rectangle(-400,256,800,404), new cjs.Rectangle(-400,298,800,362), rect=new cjs.Rectangle(-400,340,800,320), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.current_makeup_2_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect, rect];


(lib.current_hairstyle_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.current_hairstyle_2_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.current_hairstyle_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect, rect];


(lib.container_pointer_mc = function(mode,startPosition,loop) {
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
	this.instance = new lib.pointer_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112,-59,120,120);
p.frameBounds = [rect];


(lib.closet_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(-105,-205);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(-105,-205);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.accessory_0}]},2).to({state:[{t:this.headdress_0}]},6).wait(4));

	// options
	this.board_6 = new lib.board_6_2_mc();
	this.board_6.setTransform(75,0);

	this.board_4 = new lib.board_4_2_mc();
	this.board_4.setTransform(-5,0);

	this.board_2 = new lib.board_2_2_mc();
	this.board_2.setTransform(-85,0);

	this.board_3 = new lib.board_3_2_mc();
	this.board_3.setTransform(80,0);

	this.board_1 = new lib.board_1_2_mc();

	this.board_5 = new lib.board_5_2_mc();
	this.board_5.setTransform(-80,0);

	this.accessory_3 = new lib.accessory_3_2_mc();
	this.accessory_3.setTransform(0,73);

	this.accessory_1 = new lib.accessory_1_2_mc();
	this.accessory_1.setTransform(0,-125);

	this.accessory_2 = new lib.accessory_2_2_mc();
	this.accessory_2.setTransform(0,-125);

	this.accessory_4 = new lib.accessory_4_2_mc();
	this.accessory_4.setTransform(0,70);

	this.accessory_17 = new lib.accessory_17_2_mc();
	this.accessory_17.setTransform(-70,-115);

	this.accessory_5 = new lib.accessory_5_2_mc();
	this.accessory_5.setTransform(0,70);

	this.accessory_6 = new lib.accessory_6_2_mc();
	this.accessory_6.setTransform(60,-120);

	this.accessory_8 = new lib.accessory_8_2_mc();
	this.accessory_8.setTransform(0,70);

	this.accessory_7 = new lib.accessory_7_2_mc();
	this.accessory_7.setTransform(0,-130);

	this.accessory_18 = new lib.accessory_18_2_mc();
	this.accessory_18.setTransform(90,-131);

	this.accessory_13 = new lib.accessory_13_2_mc();
	this.accessory_13.setTransform(10,-130);

	this.accessory_11 = new lib.accessory_11_2_mc();
	this.accessory_11.setTransform(-80,-105);

	this.accessory_9 = new lib.accessory_9_2_mc();
	this.accessory_9.setTransform(0,70);

	this.accessory_10 = new lib.accessory_10_2_mc();
	this.accessory_10.setTransform(-45,90);

	this.accessory_16 = new lib.accessory_16_2_mc();
	this.accessory_16.setTransform(80,-135);

	this.accessory_15 = new lib.accessory_15_2_mc();
	this.accessory_15.setTransform(-80,-103);

	this.accessory_14 = new lib.accessory_14_2_mc();
	this.accessory_14.setTransform(-2,-130);

	this.accessory_12 = new lib.accessory_12_2_mc();
	this.accessory_12.setTransform(60,83);

	this.headdress_3 = new lib.headdress_3_2_mc();
	this.headdress_3.setTransform(0,90);

	this.headdress_2 = new lib.headdress_2_2_mc();
	this.headdress_2.setTransform(0,-90);

	this.headdress_6 = new lib.headdress_6_2_mc();
	this.headdress_6.setTransform(-5,95);

	this.headdress_5 = new lib.headdress_5_2_mc();
	this.headdress_5.setTransform(0,-85);

	this.headdress_8 = new lib.headdress_8_2_mc();
	this.headdress_8.setTransform(0,-110);

	this.headdress_7 = new lib.headdress_7_2_mc();
	this.headdress_7.setTransform(-5,95);

	this.headdress_4 = new lib.headdress_4_2_mc();
	this.headdress_4.setTransform(10,110);

	this.headdress_1 = new lib.headdress_1_2_mc();
	this.headdress_1.setTransform(0,-20);

	this.headdress_9 = new lib.headdress_9_2_mc();
	this.headdress_9.setTransform(0,-150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.board_2},{t:this.board_4},{t:this.board_6}]}).to({state:[{t:this.board_5},{t:this.board_1},{t:this.board_3}]},1).to({state:[{t:this.accessory_1},{t:this.accessory_3}]},1).to({state:[{t:this.accessory_4},{t:this.accessory_2}]},1).to({state:[{t:this.accessory_6},{t:this.accessory_5},{t:this.accessory_17}]},1).to({state:[{t:this.accessory_7},{t:this.accessory_8}]},1).to({state:[{t:this.accessory_9},{t:this.accessory_11},{t:this.accessory_13},{t:this.accessory_18}]},1).to({state:[{t:this.accessory_12},{t:this.accessory_14},{t:this.accessory_15},{t:this.accessory_16},{t:this.accessory_10}]},1).to({state:[{t:this.headdress_2},{t:this.headdress_3}]},1).to({state:[{t:this.headdress_5},{t:this.headdress_6}]},1).to({state:[{t:this.headdress_7},{t:this.headdress_8}]},1).to({state:[{t:this.headdress_9},{t:this.headdress_1},{t:this.headdress_4}]},1).wait(1));

	// decor
	this.instance = new lib.shelf_3_mc();
	this.instance.setTransform(0,-40);

	this.instance_1 = new lib.shelf_3_mc();
	this.instance_1.setTransform(0,150);

	this.instance_2 = new lib.shelf_3_mc();
	this.instance_2.setTransform(0,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1,p:{y:150}},{t:this.instance,p:{y:-40}}]},2).to({state:[{t:this.instance_1,p:{y:150}},{t:this.instance,p:{y:-40}}]},1).to({state:[{t:this.instance_1,p:{y:150}},{t:this.instance,p:{y:-40}}]},1).to({state:[{t:this.instance_1,p:{y:150}},{t:this.instance,p:{y:-40}}]},1).to({state:[{t:this.instance_1,p:{y:150}},{t:this.instance,p:{y:-40}}]},1).to({state:[{t:this.instance_1,p:{y:150}},{t:this.instance,p:{y:-40}}]},1).to({state:[{t:this.instance_1,p:{y:130}},{t:this.instance,p:{y:-60}}]},1).to({state:[{t:this.instance_1,p:{y:130}},{t:this.instance,p:{y:-60}}]},1).to({state:[{t:this.instance_1,p:{y:130}},{t:this.instance,p:{y:-60}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:10}},{t:this.instance,p:{y:-120}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-240,240,480);
p.frameBounds = [rect, new cjs.Rectangle(-120,-240,240,480), rect=new cjs.Rectangle(-240,-229,480,409), rect, rect, rect, rect, new cjs.Rectangle(-240,-230.5,480,410.5), new cjs.Rectangle(-240,-229,480,390.5), new cjs.Rectangle(-240,-229,480,396.5), new cjs.Rectangle(-240,-229,480,389.7), new cjs.Rectangle(-240,-229,480,407.6)];


(lib.closet_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(-105,-205);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(-105,-205);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.accessory_0}]},2).to({state:[{t:this.headdress_0}]},6).wait(4));

	// options
	this.board_6 = new lib.board_6_1_mc();
	this.board_6.setTransform(80,0);

	this.board_3 = new lib.board_3_1_mc();
	this.board_3.setTransform(-80,0);

	this.board_2 = new lib.board_2_1_mc();

	this.board_1 = new lib.board_1_1_mc();

	this.board_5 = new lib.board_5_1_mc();
	this.board_5.setTransform(80,0);

	this.board_4 = new lib.board_4_1_mc();
	this.board_4.setTransform(-80,0);

	this.accessory_2 = new lib.accessory_2_1_mc();
	this.accessory_2.setTransform(0,65);

	this.accessory_1 = new lib.accessory_1_1_mc();
	this.accessory_1.setTransform(0,-135);

	this.accessory_4 = new lib.accessory_4_1_mc();
	this.accessory_4.setTransform(0,75);

	this.accessory_3 = new lib.accessory_3_1_mc();
	this.accessory_3.setTransform(0,-120);

	this.accessory_6 = new lib.accessory_6_1_mc();
	this.accessory_6.setTransform(0,70);

	this.accessory_5 = new lib.accessory_5_1_mc();
	this.accessory_5.setTransform(0,-120);

	this.accessory_15 = new lib.accessory_15_1_mc();
	this.accessory_15.setTransform(80,-126);

	this.accessory_8 = new lib.accessory_8_1_mc();
	this.accessory_8.setTransform(0,60);

	this.accessory_7 = new lib.accessory_7_1_mc();
	this.accessory_7.setTransform(-40,-120);

	this.accessory_14 = new lib.accessory_14_1_mc();
	this.accessory_14.setTransform(-80,-108);

	this.accessory_9 = new lib.accessory_9_1_mc();
	this.accessory_9.setTransform(0,65);

	this.accessory_16 = new lib.accessory_16_1_mc();
	this.accessory_16.setTransform(0,-125);

	this.accessory_10 = new lib.accessory_10_1_mc();
	this.accessory_10.setTransform(80,-126);

	this.accessory_17 = new lib.accessory_17_1_mc();
	this.accessory_17.setTransform(-55,68);

	this.accessory_18 = new lib.accessory_18_1_mc();
	this.accessory_18.setTransform(80,-129);

	this.accessory_12 = new lib.accessory_12_1_mc();
	this.accessory_12.setTransform(-80,-104);

	this.accessory_13 = new lib.accessory_13_1_mc();
	this.accessory_13.setTransform(0,-125);

	this.accessory_11 = new lib.accessory_11_1_mc();
	this.accessory_11.setTransform(55,80);

	this.headdress_7 = new lib.headdress_7_1_mc();
	this.headdress_7.setTransform(5,80);

	this.headdress_9 = new lib.headdress_9_1_mc();
	this.headdress_9.setTransform(0,-95);

	this.headdress_4 = new lib.headdress_4_1_mc();
	this.headdress_4.setTransform(10,85);

	this.headdress_3 = new lib.headdress_3_1_mc();
	this.headdress_3.setTransform(10,-95);

	this.headdress_6 = new lib.headdress_6_1_mc();
	this.headdress_6.setTransform(10,-95);

	this.headdress_5 = new lib.headdress_5_1_mc();
	this.headdress_5.setTransform(10,90);

	this.headdress_2 = new lib.headdress_2_1_mc();
	this.headdress_2.setTransform(5,110);

	this.headdress_1 = new lib.headdress_1_1_mc();
	this.headdress_1.setTransform(5,-17);

	this.headdress_8 = new lib.headdress_8_1_mc();
	this.headdress_8.setTransform(5,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.board_2},{t:this.board_3},{t:this.board_6}]}).to({state:[{t:this.board_4},{t:this.board_5},{t:this.board_1}]},1).to({state:[{t:this.accessory_1},{t:this.accessory_2}]},1).to({state:[{t:this.accessory_3},{t:this.accessory_4}]},1).to({state:[{t:this.accessory_5},{t:this.accessory_6}]},1).to({state:[{t:this.accessory_7},{t:this.accessory_8},{t:this.accessory_15}]},1).to({state:[{t:this.accessory_10},{t:this.accessory_16},{t:this.accessory_9},{t:this.accessory_14}]},1).to({state:[{t:this.accessory_11},{t:this.accessory_13},{t:this.accessory_12},{t:this.accessory_18},{t:this.accessory_17}]},1).to({state:[{t:this.headdress_9},{t:this.headdress_7}]},1).to({state:[{t:this.headdress_3},{t:this.headdress_4}]},1).to({state:[{t:this.headdress_5},{t:this.headdress_6}]},1).to({state:[{t:this.headdress_8},{t:this.headdress_1},{t:this.headdress_2}]},1).wait(1));

	// decor
	this.instance = new lib.shelf_3_mc();
	this.instance.setTransform(0,-40);

	this.instance_1 = new lib.shelf_3_mc();
	this.instance_1.setTransform(0,150);

	this.instance_2 = new lib.shelf_3_mc();
	this.instance_2.setTransform(0,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1,p:{y:150}},{t:this.instance,p:{y:-40}}]},2).to({state:[{t:this.instance_1,p:{y:150}},{t:this.instance,p:{y:-40}}]},1).to({state:[{t:this.instance_1,p:{y:150}},{t:this.instance,p:{y:-40}}]},1).to({state:[{t:this.instance_1,p:{y:150}},{t:this.instance,p:{y:-40}}]},1).to({state:[{t:this.instance_1,p:{y:150}},{t:this.instance,p:{y:-40}}]},1).to({state:[{t:this.instance_1,p:{y:150}},{t:this.instance,p:{y:-40}}]},1).to({state:[{t:this.instance_1,p:{y:130}},{t:this.instance,p:{y:-60}}]},1).to({state:[{t:this.instance_1,p:{y:130}},{t:this.instance,p:{y:-60}}]},1).to({state:[{t:this.instance_1,p:{y:130}},{t:this.instance,p:{y:-60}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{y:10}},{t:this.instance,p:{y:-120}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-240,240,480);
p.frameBounds = [rect, rect, new cjs.Rectangle(-240,-235,480,415), rect=new cjs.Rectangle(-240,-229,480,409), rect, rect, rect, rect, new cjs.Rectangle(-240,-229,480,395.8), new cjs.Rectangle(-240,-229,480,399.4), new cjs.Rectangle(-240,-229,480,389), new cjs.Rectangle(-240,-229,480,404)];


(lib.bodyDressupPanel_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-240,240,480);
p.frameBounds = [rect];


(lib.bodyDressupPanel_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-240,240,480);
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


(lib.prev_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_3_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.prev_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.next_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_0_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ap7J8QkHkIgBl0QABl0EHkHQEIkIFzAAQF1AAEHEIQEIEHAAF0QAAF0kIEIQkHEHl1ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-90,-90,180,180)];


(lib.next_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.next_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
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
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.OrientationLockScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// screen
	this.screen_mc = new lib.orientation_lock_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
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
p.nominalBounds = rect = new cjs.Rectangle(-400,-29.1,1600,639.1);
p.frameBounds = [rect];


(lib.lips_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_6_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.lips_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_6_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.lips_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_5_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.lips_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_5_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.lips_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_4_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.lips_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_4_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.lips_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_3_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.lips_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_3_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.lips_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_2_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.lips_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_2_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.lips_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_1_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.lips_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips_1_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
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


(lib.hairstyle_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_6_2_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F+oaAAQoZAAl8l+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_6_1_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F+oaAAQoZAAl8l+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_5_2_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F+oaAAQoZAAl8l+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_5_1_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F+oaAAQoZAAl8l+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_4_2_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F+oaAAQoZAAl8l+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_4_1_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F+oaAAQoZAAl8l+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_3_2_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F+oaAAQoZAAl8l+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_3_1_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F+oaAAQoZAAl8l+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_2_2_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F+oaAAQoZAAl8l+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_2_1_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F+oaAAQoZAAl8l+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_1_2_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F+oaAAQoZAAl8l+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.hairstyle_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_1_1_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F+oaAAQoZAAl8l+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.frame_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":129});

	// timeline functions:
	this.frame_29 = function() {
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
	this.frame_44 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(15).call(this.frame_44).wait(86));

	// decor
	this.instance = new lib.container_pointer_mc();
	this.instance.setTransform(-150,60.2,1,1,-105,0,0,-0.1,-0.1);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({alpha:1},10).wait(20).to({alpha:0.012},0).to({_off:true},1).wait(50));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-170,-80);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:-500},0).wait(38).to({y:-30},10).to({y:-80},5).wait(40).to({y:-130},5).to({y:500},15).wait(16));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(170,80);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-500},0).wait(18).to({y:120},15).to({y:80},5).wait(40).to({y:30},5).to({y:500},10).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-240,800,480);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,-660,800,320), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-660,800,361.4), new cjs.Rectangle(-400,-660,800,402.7), new cjs.Rectangle(-400,-660,800,444), new cjs.Rectangle(-400,-660,800,485.4), new cjs.Rectangle(-400,-660,800,526.7), new cjs.Rectangle(-400,-660,800,568), new cjs.Rectangle(-400,-660,800,609.4), new cjs.Rectangle(-400,-660,800,650.7), new cjs.Rectangle(-400,-660,800,692), new cjs.Rectangle(-400,-660,800,733.4), new cjs.Rectangle(-400,-660,800,774.7), new cjs.Rectangle(-400,-660,800,816), new cjs.Rectangle(-400,-660,800,857.4), new cjs.Rectangle(-400,-660,800,898.7), new cjs.Rectangle(-400,-660,800,940), new cjs.Rectangle(-400,-660,800,932), new cjs.Rectangle(-400,-660,800,924), new cjs.Rectangle(-400,-660,800,916), new cjs.Rectangle(-400,-660,800,908), new cjs.Rectangle(-400,-660,800,900), new cjs.Rectangle(-400,-613,800,853), new cjs.Rectangle(-400,-566,800,806), new cjs.Rectangle(-400,-519,800,759), new cjs.Rectangle(-400,-472,800,712), new cjs.Rectangle(-400,-425,800,665), new cjs.Rectangle(-400,-378,800,618), new cjs.Rectangle(-400,-331,800,571), new cjs.Rectangle(-400,-284,800,524), new cjs.Rectangle(-400,-237,800,477), new cjs.Rectangle(-400,-190,800,430), new cjs.Rectangle(-400,-200,800,440), new cjs.Rectangle(-400,-210,800,450), new cjs.Rectangle(-400,-220,800,460), new cjs.Rectangle(-400,-230,800,470), rect=new cjs.Rectangle(-400,-240,800,480), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-400,-240,800,470), new cjs.Rectangle(-400,-240,800,460), new cjs.Rectangle(-400,-240,800,450), new cjs.Rectangle(-400,-240,800,440), new cjs.Rectangle(-400,-240,800,430), new cjs.Rectangle(-400,-240,800,477), new cjs.Rectangle(-400,-240,800,524), new cjs.Rectangle(-400,-240,800,571), new cjs.Rectangle(-400,-240,800,618), new cjs.Rectangle(-400,-240,800,665), new cjs.Rectangle(-400,-240,800,712), new cjs.Rectangle(-400,-240,800,759), new cjs.Rectangle(-400,-240,800,806), new cjs.Rectangle(-400,-240,800,853), new cjs.Rectangle(-400,-240,800,900), new cjs.Rectangle(-400,-250,800,910), new cjs.Rectangle(-400,-260,800,920), new cjs.Rectangle(-400,-270,800,930), new cjs.Rectangle(-400,-280,800,940), new cjs.Rectangle(-400,-290,800,950), new cjs.Rectangle(-400,-248,800,908), new cjs.Rectangle(-400,-206,800,866), new cjs.Rectangle(-400,-164,800,824), new cjs.Rectangle(-400,-122,800,782), new cjs.Rectangle(-400,-80,800,740), new cjs.Rectangle(-400,-38,800,698), new cjs.Rectangle(-400,4,800,656), new cjs.Rectangle(-400,46,800,614), new cjs.Rectangle(-400,88,800,572), new cjs.Rectangle(-400,130,800,530), new cjs.Rectangle(-400,172,800,488), new cjs.Rectangle(-400,214,800,446), new cjs.Rectangle(-400,256,800,404), new cjs.Rectangle(-400,298,800,362), rect=new cjs.Rectangle(-400,340,800,320), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.eyeshadow_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyeshadow_6_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyeshadow_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyeshadow_6_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyeshadow_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyeshadow_5_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyeshadow_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyeshadow_5_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyeshadow_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyeshadow_4_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyeshadow_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyeshadow_4_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyeshadow_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyeshadow_3_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyeshadow_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyeshadow_3_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyeshadow_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyeshadow_2_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyeshadow_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyeshadow_2_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyeshadow_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyeshadow_1_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyeshadow_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyeshadow_1_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyes_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_6_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyes_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_6_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyes_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_5_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyes_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_5_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyes_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_4_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyes_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_4_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyes_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_3_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyes_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_3_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyes_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_2_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyes_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_2_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyes_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_1_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyes_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyes_1_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyebrows_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_6_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyebrows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_6_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyebrows_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_5_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyebrows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_5_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyebrows_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_4_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyebrows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_4_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyebrows_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_3_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyebrows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_3_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyebrows_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_2_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyebrows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_2_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyebrows_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_1_2_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.eyebrows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrows_1_1_img();
	this.instance.setTransform(-110,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AssMsQlRlQAAncQAAnbFRlRQFRlRHbAAQHcAAFQFRQFRFRABHbQgBHclRFQQlQFRncABQnbgBlRlRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.dressupPanel_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(175,80);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-175,80);

	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,-600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_3},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// decor
	this.instance = new lib.decor_wardrobe_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_6_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance_1 = new lib.wardrobe_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-650,480,950);
p.frameBounds = [rect];


(lib.dressupPanel_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(175,80);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-175,80);

	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,-600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_3},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// decor
	this.instance = new lib.decor_wardrobe_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_5_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance_1 = new lib.wardrobe_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-650,480,950);
p.frameBounds = [rect];


(lib.dress_10_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_10_2_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F+oaAAQoZAAl8l+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.dress_10_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_10_1_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F+oaAAQoZAAl8l+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.dress_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_9_2_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F+oaAAQoZAAl8l+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.dress_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_9_1_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F+oaAAQoZAAl8l+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.dress_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_8_2_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F+oaAAQoZAAl8l+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.dress_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_8_1_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F+oaAAQoZAAl8l+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.dress_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_7_2_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F+oaAAQoZAAl8l+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.dress_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_7_1_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F+oaAAQoZAAl8l+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.dress_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_6_2_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F+oaAAQoZAAl8l+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.dress_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_6_1_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F+oaAAQoZAAl8l+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.dress_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_5_2_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F+oaAAQoZAAl8l+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.dress_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_5_1_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F+oaAAQoZAAl8l+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.dress_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_4_2_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F+oaAAQoZAAl8l+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.dress_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_4_1_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F+oaAAQoZAAl8l+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.dress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_3_2_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F+oaAAQoZAAl8l+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.dress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_3_1_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F+oaAAQoZAAl8l+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.dress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_2_2_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F+oaAAQoZAAl8l+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.dress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_2_1_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F+oaAAQoZAAl8l+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.dress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_1_2_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F+oaAAQoZAAl8l+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.dress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dress_1_1_img();
	this.instance.setTransform(-130,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hairstyle_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOWQl9l8AAoaQAAoZF9l9QF8l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F+oaAAQoZAAl8l+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,280,280);
p.frameBounds = [rect];


(lib.closet_makeup_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.eyeshadow_0 = new lib.eyeshadow_0_mc();
	this.eyeshadow_0.setTransform(-110,-205);
	this.eyeshadow_0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.eyeshadow_0).wait(3).to({_off:false},0).to({_off:true},3).wait(6));

	// options
	this.eyes_2 = new lib.eyes_2_1_mc();
	this.eyes_2.setTransform(0,110);

	this.eyes_6 = new lib.eyes_6_1_mc();
	this.eyes_6.setTransform(0,-110);

	this.eyes_4 = new lib.eyes_4_1_mc();
	this.eyes_4.setTransform(0,110);

	this.eyes_3 = new lib.eyes_3_1_mc();
	this.eyes_3.setTransform(0,-110);

	this.eyes_1 = new lib.eyes_1_1_mc();
	this.eyes_1.setTransform(0,110);

	this.eyes_5 = new lib.eyes_5_1_mc();
	this.eyes_5.setTransform(0,-110);

	this.eyeshadow_2 = new lib.eyeshadow_2_1_mc();
	this.eyeshadow_2.setTransform(0,110);

	this.eyeshadow_6 = new lib.eyeshadow_6_1_mc();
	this.eyeshadow_6.setTransform(0,-110);

	this.eyeshadow_4 = new lib.eyeshadow_4_1_mc();
	this.eyeshadow_4.setTransform(0,110);

	this.eyeshadow_3 = new lib.eyeshadow_3_1_mc();
	this.eyeshadow_3.setTransform(0,-110);

	this.eyeshadow_1 = new lib.eyeshadow_1_1_mc();
	this.eyeshadow_1.setTransform(0,110);

	this.eyeshadow_5 = new lib.eyeshadow_5_1_mc();
	this.eyeshadow_5.setTransform(0,-110);

	this.lips_2 = new lib.lips_2_1_mc();
	this.lips_2.setTransform(0,110);

	this.lips_6 = new lib.lips_6_1_mc();
	this.lips_6.setTransform(0,-110);

	this.lips_4 = new lib.lips_4_1_mc();
	this.lips_4.setTransform(0,110);

	this.lips_3 = new lib.lips_3_1_mc();
	this.lips_3.setTransform(0,-110);

	this.lips_1 = new lib.lips_1_1_mc();
	this.lips_1.setTransform(0,110);

	this.lips_5 = new lib.lips_5_1_mc();
	this.lips_5.setTransform(0,-110);

	this.eyebrows_2 = new lib.eyebrows_2_1_mc();
	this.eyebrows_2.setTransform(0,110);

	this.eyebrows_6 = new lib.eyebrows_6_1_mc();
	this.eyebrows_6.setTransform(0,-110);

	this.eyebrows_4 = new lib.eyebrows_4_1_mc();
	this.eyebrows_4.setTransform(0,110);

	this.eyebrows_3 = new lib.eyebrows_3_1_mc();
	this.eyebrows_3.setTransform(0,-110);

	this.eyebrows_1 = new lib.eyebrows_1_1_mc();
	this.eyebrows_1.setTransform(0,110);

	this.eyebrows_5 = new lib.eyebrows_5_1_mc();
	this.eyebrows_5.setTransform(0,-110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eyes_6},{t:this.eyes_2}]}).to({state:[{t:this.eyes_3},{t:this.eyes_4}]},1).to({state:[{t:this.eyes_5},{t:this.eyes_1}]},1).to({state:[{t:this.eyeshadow_6},{t:this.eyeshadow_2}]},1).to({state:[{t:this.eyeshadow_3},{t:this.eyeshadow_4}]},1).to({state:[{t:this.eyeshadow_5},{t:this.eyeshadow_1}]},1).to({state:[{t:this.lips_6},{t:this.lips_2}]},1).to({state:[{t:this.lips_3},{t:this.lips_4}]},1).to({state:[{t:this.lips_5},{t:this.lips_1}]},1).to({state:[{t:this.eyebrows_6},{t:this.eyebrows_2}]},1).to({state:[{t:this.eyebrows_3},{t:this.eyebrows_4}]},1).to({state:[{t:this.eyebrows_5},{t:this.eyebrows_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-230,240,460);
p.frameBounds = [rect, rect, rect, rect=new cjs.Rectangle(-134,-230,254,460), rect, rect, rect=new cjs.Rectangle(-120,-230,240,460), rect, rect, rect, rect, rect];


(lib.closet_makeup_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.eyeshadow_0 = new lib.eyeshadow_0_mc();
	this.eyeshadow_0.setTransform(-110,-205);
	this.eyeshadow_0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.eyeshadow_0).wait(3).to({_off:false},0).to({_off:true},3).wait(6));

	// options
	this.eyes_2 = new lib.eyes_2_2_mc();
	this.eyes_2.setTransform(0,110);

	this.eyes_6 = new lib.eyes_6_2_mc();
	this.eyes_6.setTransform(0,-110);

	this.eyes_4 = new lib.eyes_4_2_mc();
	this.eyes_4.setTransform(0,110);

	this.eyes_3 = new lib.eyes_3_2_mc();
	this.eyes_3.setTransform(0,-110);

	this.eyes_1 = new lib.eyes_1_2_mc();
	this.eyes_1.setTransform(0,110);

	this.eyes_5 = new lib.eyes_5_2_mc();
	this.eyes_5.setTransform(0,-110);

	this.eyeshadow_2 = new lib.eyeshadow_2_2_mc();
	this.eyeshadow_2.setTransform(0,110);

	this.eyeshadow_6 = new lib.eyeshadow_6_2_mc();
	this.eyeshadow_6.setTransform(0,-110);

	this.eyeshadow_4 = new lib.eyeshadow_4_2_mc();
	this.eyeshadow_4.setTransform(0,110);

	this.eyeshadow_3 = new lib.eyeshadow_3_2_mc();
	this.eyeshadow_3.setTransform(0,-110);

	this.eyeshadow_1 = new lib.eyeshadow_1_2_mc();
	this.eyeshadow_1.setTransform(0,110);

	this.eyeshadow_5 = new lib.eyeshadow_5_2_mc();
	this.eyeshadow_5.setTransform(0,-110);

	this.lips_2 = new lib.lips_2_2_mc();
	this.lips_2.setTransform(0,110);

	this.lips_3 = new lib.lips_3_2_mc();
	this.lips_3.setTransform(0,-110);

	this.lips_4 = new lib.lips_4_2_mc();
	this.lips_4.setTransform(0,110);

	this.lips_6 = new lib.lips_6_2_mc();
	this.lips_6.setTransform(0,-110);

	this.lips_1 = new lib.lips_1_2_mc();
	this.lips_1.setTransform(0,110);

	this.lips_5 = new lib.lips_5_2_mc();
	this.lips_5.setTransform(0,-110);

	this.eyebrows_4 = new lib.eyebrows_4_2_mc();
	this.eyebrows_4.setTransform(0,110);

	this.eyebrows_6 = new lib.eyebrows_6_2_mc();
	this.eyebrows_6.setTransform(0,-110);

	this.eyebrows_2 = new lib.eyebrows_2_2_mc();
	this.eyebrows_2.setTransform(0,110);

	this.eyebrows_3 = new lib.eyebrows_3_2_mc();
	this.eyebrows_3.setTransform(0,-110);

	this.eyebrows_1 = new lib.eyebrows_1_2_mc();
	this.eyebrows_1.setTransform(0,110);

	this.eyebrows_5 = new lib.eyebrows_5_2_mc();
	this.eyebrows_5.setTransform(0,-110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eyes_6},{t:this.eyes_2}]}).to({state:[{t:this.eyes_3},{t:this.eyes_4}]},1).to({state:[{t:this.eyes_5},{t:this.eyes_1}]},1).to({state:[{t:this.eyeshadow_6},{t:this.eyeshadow_2}]},1).to({state:[{t:this.eyeshadow_3},{t:this.eyeshadow_4}]},1).to({state:[{t:this.eyeshadow_5},{t:this.eyeshadow_1}]},1).to({state:[{t:this.lips_3},{t:this.lips_2}]},1).to({state:[{t:this.lips_6},{t:this.lips_4}]},1).to({state:[{t:this.lips_5},{t:this.lips_1}]},1).to({state:[{t:this.eyebrows_6},{t:this.eyebrows_4}]},1).to({state:[{t:this.eyebrows_3},{t:this.eyebrows_2}]},1).to({state:[{t:this.eyebrows_5},{t:this.eyebrows_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-230,240,460);
p.frameBounds = [rect, rect, rect, rect=new cjs.Rectangle(-134,-230,254,460), rect, rect, rect=new cjs.Rectangle(-120,-230,240,460), rect, rect, rect, rect, rect];


(lib.closet_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.beads_0 = new lib.beads_0_mc();
	this.beads_0.setTransform(110,-205);

	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(110,-205);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.beads_0}]},8).to({state:[{t:this.earrings_0}]},3).wait(3));

	// options
	this.hair_2 = new lib.hairstyle_2_2_mc();
	this.hair_2.setTransform(0,100);

	this.hair_6 = new lib.hairstyle_6_2_mc();
	this.hair_6.setTransform(0,-115);

	this.hair_3 = new lib.hairstyle_3_2_mc();
	this.hair_3.setTransform(0,100);

	this.hair_4 = new lib.hairstyle_4_2_mc();
	this.hair_4.setTransform(0,-115);

	this.hair_1 = new lib.hairstyle_1_2_mc();
	this.hair_1.setTransform(0,100);

	this.hair_5 = new lib.hairstyle_5_2_mc();
	this.hair_5.setTransform(0,-115);

	this.dress_2 = new lib.dress_2_2_mc();
	this.dress_2.setTransform(0,100);

	this.dress_6 = new lib.dress_6_2_mc();
	this.dress_6.setTransform(0,-115);

	this.dress_4 = new lib.dress_4_2_mc();
	this.dress_4.setTransform(0,100);

	this.dress_3 = new lib.dress_3_2_mc();
	this.dress_3.setTransform(0,-115);

	this.dress_9 = new lib.dress_9_2_mc();
	this.dress_9.setTransform(0,100);

	this.dress_5 = new lib.dress_5_2_mc();
	this.dress_5.setTransform(0,-115);

	this.dress_8 = new lib.dress_8_2_mc();
	this.dress_8.setTransform(0,100);

	this.dress_7 = new lib.dress_7_2_mc();
	this.dress_7.setTransform(0,-115);

	this.dress_10 = new lib.dress_10_2_mc();
	this.dress_10.setTransform(0,100);

	this.dress_1 = new lib.dress_1_2_mc();
	this.dress_1.setTransform(0,-115);

	this.beads_3 = new lib.beads_3_2_mc();
	this.beads_3.setTransform(30,128);

	this.beads_2 = new lib.beads_2_2_mc();
	this.beads_2.setTransform(-30,-12);

	this.beads_1 = new lib.beads_1_2_mc();
	this.beads_1.setTransform(30,-152);

	this.beads_6 = new lib.beads_6_2_mc();
	this.beads_6.setTransform(-30,128);

	this.beads_5 = new lib.beads_5_2_mc();
	this.beads_5.setTransform(30,-12);

	this.beads_4 = new lib.beads_4_2_mc();
	this.beads_4.setTransform(-30,-152);

	this.beads_9 = new lib.beads_9_2_mc();
	this.beads_9.setTransform(30,128);

	this.beads_8 = new lib.beads_8_2_mc();
	this.beads_8.setTransform(-30,-12);

	this.beads_7 = new lib.beads_7_2_mc();
	this.beads_7.setTransform(30,-152);

	this.earrings_3 = new lib.earrings_3_2_mc();
	this.earrings_3.setTransform(-30,128);

	this.earrings_2 = new lib.earrings_2_2_mc();
	this.earrings_2.setTransform(30,-12);

	this.earrings_1 = new lib.earrings_1_2_mc();
	this.earrings_1.setTransform(-30,-152);

	this.earrings_6 = new lib.earrings_6_2_mc();
	this.earrings_6.setTransform(30,128);

	this.earrings_5 = new lib.earrings_5_2_mc();
	this.earrings_5.setTransform(-30,-12);

	this.earrings_4 = new lib.earrings_4_2_mc();
	this.earrings_4.setTransform(30,-152);

	this.earrings_9 = new lib.earrings_9_2_mc();
	this.earrings_9.setTransform(-30,128);

	this.earrings_8 = new lib.earrings_8_2_mc();
	this.earrings_8.setTransform(30,-12);

	this.earrings_7 = new lib.earrings_7_2_mc();
	this.earrings_7.setTransform(-30,-152);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_6},{t:this.hair_2}]}).to({state:[{t:this.hair_4},{t:this.hair_3}]},1).to({state:[{t:this.hair_5},{t:this.hair_1}]},1).to({state:[{t:this.dress_6},{t:this.dress_2}]},1).to({state:[{t:this.dress_3},{t:this.dress_4}]},1).to({state:[{t:this.dress_5},{t:this.dress_9}]},1).to({state:[{t:this.dress_7},{t:this.dress_8}]},1).to({state:[{t:this.dress_1},{t:this.dress_10}]},1).to({state:[{t:this.beads_1},{t:this.beads_2},{t:this.beads_3}]},1).to({state:[{t:this.beads_4},{t:this.beads_5},{t:this.beads_6}]},1).to({state:[{t:this.beads_7},{t:this.beads_8},{t:this.beads_9}]},1).to({state:[{t:this.earrings_1},{t:this.earrings_2},{t:this.earrings_3}]},1).to({state:[{t:this.earrings_4},{t:this.earrings_5},{t:this.earrings_6}]},1).to({state:[{t:this.earrings_7},{t:this.earrings_8},{t:this.earrings_9}]},1).wait(1));

	// decor
	this.instance = new lib.shelf_2_mc();
	this.instance.setTransform(0,-100);

	this.instance_1 = new lib.shelf_2_mc();
	this.instance_1.setTransform(0,40);

	this.instance_2 = new lib.shelf_2_mc();
	this.instance_2.setTransform(0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},8).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(1));

	// decor
	this.instance_3 = new lib.wardrobe_2_2_mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-255,280,495);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-240,-300,480,600), rect, rect, rect, rect, rect];


(lib.closet_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.beads_0 = new lib.beads_0_mc();
	this.beads_0.setTransform(110,-205);

	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(110,-205);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.beads_0}]},8).to({state:[{t:this.earrings_0}]},3).wait(3));

	// options
	this.hair_5 = new lib.hairstyle_5_1_mc();
	this.hair_5.setTransform(0,100);

	this.hair_2 = new lib.hairstyle_2_1_mc();
	this.hair_2.setTransform(0,-115);

	this.hair_3 = new lib.hairstyle_3_1_mc();
	this.hair_3.setTransform(0,100);

	this.hair_4 = new lib.hairstyle_4_1_mc();
	this.hair_4.setTransform(0,-115);

	this.hair_1 = new lib.hairstyle_1_1_mc();
	this.hair_1.setTransform(0,100);

	this.hair_6 = new lib.hairstyle_6_1_mc();
	this.hair_6.setTransform(0,-115);

	this.dress_2 = new lib.dress_2_1_mc();
	this.dress_2.setTransform(0,100);

	this.dress_7 = new lib.dress_7_1_mc();
	this.dress_7.setTransform(0,-115);

	this.dress_4 = new lib.dress_4_1_mc();
	this.dress_4.setTransform(0,100);

	this.dress_3 = new lib.dress_3_1_mc();
	this.dress_3.setTransform(0,-115);

	this.dress_6 = new lib.dress_6_1_mc();
	this.dress_6.setTransform(0,100);

	this.dress_5 = new lib.dress_5_1_mc();
	this.dress_5.setTransform(0,-115);

	this.dress_8 = new lib.dress_8_1_mc();
	this.dress_8.setTransform(0,100);

	this.dress_9 = new lib.dress_9_1_mc();
	this.dress_9.setTransform(0,-115);

	this.dress_10 = new lib.dress_10_1_mc();
	this.dress_10.setTransform(0,100);

	this.dress_1 = new lib.dress_1_1_mc();
	this.dress_1.setTransform(0,-115);

	this.beads_3 = new lib.beads_3_1_mc();
	this.beads_3.setTransform(-40,128);

	this.beads_2 = new lib.beads_2_1_mc();
	this.beads_2.setTransform(30,-12);

	this.beads_1 = new lib.beads_1_1_mc();
	this.beads_1.setTransform(-30,-152);

	this.beads_6 = new lib.beads_6_1_mc();
	this.beads_6.setTransform(30,128);

	this.beads_5 = new lib.beads_5_1_mc();
	this.beads_5.setTransform(-30,-12);

	this.beads_4 = new lib.beads_4_1_mc();
	this.beads_4.setTransform(30,-152);

	this.beads_9 = new lib.beads_9_1_mc();
	this.beads_9.setTransform(-30,128);

	this.beads_8 = new lib.beads_8_1_mc();
	this.beads_8.setTransform(30,-12);

	this.beads_7 = new lib.beads_7_1_mc();
	this.beads_7.setTransform(-30,-152);

	this.earrings_3 = new lib.earrings_3_1_mc();
	this.earrings_3.setTransform(30,128);

	this.earrings_2 = new lib.earrings_2_1_mc();
	this.earrings_2.setTransform(-30,-12);

	this.earrings_1 = new lib.earrings_1_1_mc();
	this.earrings_1.setTransform(30,-152);

	this.earrings_6 = new lib.earrings_6_1_mc();
	this.earrings_6.setTransform(-30,128);

	this.earrings_5 = new lib.earrings_5_1_mc();
	this.earrings_5.setTransform(30,-12);

	this.earrings_4 = new lib.earrings_4_1_mc();
	this.earrings_4.setTransform(-30,-152);

	this.earrings_9 = new lib.earrings_9_1_mc();
	this.earrings_9.setTransform(30,128);

	this.earrings_8 = new lib.earrings_8_1_mc();
	this.earrings_8.setTransform(-30,-12);

	this.earrings_7 = new lib.earrings_7_1_mc();
	this.earrings_7.setTransform(30,-152);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_2},{t:this.hair_5}]}).to({state:[{t:this.hair_4},{t:this.hair_3}]},1).to({state:[{t:this.hair_6},{t:this.hair_1}]},1).to({state:[{t:this.dress_7},{t:this.dress_2}]},1).to({state:[{t:this.dress_3},{t:this.dress_4}]},1).to({state:[{t:this.dress_5},{t:this.dress_6}]},1).to({state:[{t:this.dress_9},{t:this.dress_8}]},1).to({state:[{t:this.dress_1},{t:this.dress_10}]},1).to({state:[{t:this.beads_1},{t:this.beads_2},{t:this.beads_3}]},1).to({state:[{t:this.beads_4},{t:this.beads_5},{t:this.beads_6}]},1).to({state:[{t:this.beads_7},{t:this.beads_8},{t:this.beads_9}]},1).to({state:[{t:this.earrings_1},{t:this.earrings_2},{t:this.earrings_3}]},1).to({state:[{t:this.earrings_4},{t:this.earrings_5},{t:this.earrings_6}]},1).to({state:[{t:this.earrings_7},{t:this.earrings_8},{t:this.earrings_9}]},1).wait(1));

	// decor
	this.instance = new lib.shelf_2_mc();
	this.instance.setTransform(0,-100);

	this.instance_1 = new lib.shelf_2_mc();
	this.instance_1.setTransform(0,40);

	this.instance_2 = new lib.shelf_2_mc();
	this.instance_2.setTransform(0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},8).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(1));

	// decor
	this.instance_3 = new lib.wardrobe_2_2_mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-255,280,495);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-240,-300,480,600), rect, rect, rect, rect, rect];


(lib.bodyDressupPanel_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-255,280,495);
p.frameBounds = [rect];


(lib.bodyDressupPanel_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-255,280,495);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-230,240,460);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-230,240,460);
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


(lib.quest_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":209});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(230,520,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(89).to({y:700},10).wait(111));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_6_1_mc();
	this.dressupPanel_mc.setTransform(230,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-700},0).wait(33).to({x:280},20).to({x:230},5).wait(30).to({x:-700},15).wait(106));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(580,310);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:1700},0).wait(18).to({x:510},20).to({x:580},5).wait(60).to({x:380},15).wait(91));

	// shadow
	this.instance = new lib.background_3_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(104).to({_off:false},0).to({alpha:1},15).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-350,981.5,960);
p.frameBounds = [rect, rect=new cjs.Rectangle(-940,-350,3031.5,960), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-940,-350,2972,960), new cjs.Rectangle(-940,-350,2912.5,960), new cjs.Rectangle(-940,-350,2853,960), new cjs.Rectangle(-940,-350,2793.5,960), new cjs.Rectangle(-940,-350,2734,960), new cjs.Rectangle(-940,-350,2674.5,960), new cjs.Rectangle(-940,-350,2615,960), new cjs.Rectangle(-940,-350,2555.5,960), new cjs.Rectangle(-940,-350,2496,960), new cjs.Rectangle(-940,-350,2436.5,960), new cjs.Rectangle(-940,-350,2377,960), new cjs.Rectangle(-940,-350,2317.5,960), new cjs.Rectangle(-940,-350,2258,960), new cjs.Rectangle(-940,-350,2198.5,960), new cjs.Rectangle(-940,-350,2139,960), new cjs.Rectangle(-891,-350,2030.5,960), new cjs.Rectangle(-842,-350,1922,960), new cjs.Rectangle(-793,-350,1813.5,960), new cjs.Rectangle(-744,-350,1705,960), new cjs.Rectangle(-695,-350,1596.5,960), new cjs.Rectangle(-646,-350,1561.5,960), new cjs.Rectangle(-597,-350,1526.5,960), new cjs.Rectangle(-548,-350,1491.5,960), new cjs.Rectangle(-499,-350,1456.5,960), new cjs.Rectangle(-450,-350,1421.5,960), new cjs.Rectangle(-401,-350,1372.5,960), new cjs.Rectangle(-352,-350,1323.5,960), new cjs.Rectangle(-303,-350,1274.5,960), new cjs.Rectangle(-254,-350,1225.5,960), new cjs.Rectangle(-205,-350,1176.5,960), new cjs.Rectangle(-156,-350,1127.5,960), new cjs.Rectangle(-107,-350,1078.5,960), new cjs.Rectangle(-58,-350,1029.5,960), new cjs.Rectangle(-9,-350,980.5,960), new cjs.Rectangle(40,-350,931.5,960), new cjs.Rectangle(30,-350,941.5,960), new cjs.Rectangle(20,-350,951.5,960), new cjs.Rectangle(10,-350,961.5,960), new cjs.Rectangle(0,-350,971.5,960), rect=new cjs.Rectangle(-10,-350,981.5,960), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-72,-350,1043.5,968), new cjs.Rectangle(-134,-350,1105.5,986), new cjs.Rectangle(-196,-350,1167.5,1004), new cjs.Rectangle(-258,-350,1229.5,1022), new cjs.Rectangle(-320,-350,1291.5,1040), new cjs.Rectangle(-382,-350,1353.5,1058), new cjs.Rectangle(-444,-350,1415.5,1076), new cjs.Rectangle(-506,-350,1477.5,1094), new cjs.Rectangle(-568,-350,1539.5,1112), new cjs.Rectangle(-630,-350,1601.5,1130), new cjs.Rectangle(-692,-350,1663.5,1130), new cjs.Rectangle(-754,-350,1725.5,1130), new cjs.Rectangle(-816,-350,1787.5,1130), new cjs.Rectangle(-878,-350,1849.5,1130), rect=new cjs.Rectangle(-940,-350,2140,1130), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":209});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(230,520,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(89).to({y:700},10).wait(111));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_5_1_mc();
	this.dressupPanel_mc.setTransform(230,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-700},0).wait(33).to({x:280},20).to({x:230},5).wait(30).to({x:-700},15).wait(106));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(550,330);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:1800},0).wait(18).to({x:500},20).to({x:550},5).wait(60).to({x:460},15).wait(91));

	// shadow
	this.instance = new lib.background_3_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(104).to({_off:false},0).to({alpha:1},15).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-350,966,964.3);
p.frameBounds = [rect, rect=new cjs.Rectangle(-940,-350,3146,964.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-940,-350,3081,964.3), new cjs.Rectangle(-940,-350,3016,964.3), new cjs.Rectangle(-940,-350,2951,964.3), new cjs.Rectangle(-940,-350,2886,964.3), new cjs.Rectangle(-940,-350,2821,964.3), new cjs.Rectangle(-940,-350,2756,964.3), new cjs.Rectangle(-940,-350,2691,964.3), new cjs.Rectangle(-940,-350,2626,964.3), new cjs.Rectangle(-940,-350,2561,964.3), new cjs.Rectangle(-940,-350,2496,964.3), new cjs.Rectangle(-940,-350,2431,964.3), new cjs.Rectangle(-940,-350,2366,964.3), new cjs.Rectangle(-940,-350,2301,964.3), new cjs.Rectangle(-940,-350,2236,964.3), new cjs.Rectangle(-940,-350,2171,964.3), new cjs.Rectangle(-891,-350,2057,964.3), new cjs.Rectangle(-842,-350,1943,964.3), new cjs.Rectangle(-793,-350,1829,964.3), new cjs.Rectangle(-744,-350,1715,964.3), new cjs.Rectangle(-695,-350,1601,964.3), new cjs.Rectangle(-646,-350,1562,964.3), new cjs.Rectangle(-597,-350,1523,964.3), new cjs.Rectangle(-548,-350,1484,964.3), new cjs.Rectangle(-499,-350,1445,964.3), new cjs.Rectangle(-450,-350,1406,964.3), new cjs.Rectangle(-401,-350,1357,964.3), new cjs.Rectangle(-352,-350,1308,964.3), new cjs.Rectangle(-303,-350,1259,964.3), new cjs.Rectangle(-254,-350,1210,964.3), new cjs.Rectangle(-205,-350,1161,964.3), new cjs.Rectangle(-156,-350,1112,964.3), new cjs.Rectangle(-107,-350,1063,964.3), new cjs.Rectangle(-58,-350,1014,964.3), new cjs.Rectangle(-9,-350,965,964.3), new cjs.Rectangle(40,-350,916,964.3), new cjs.Rectangle(30,-350,926,964.3), new cjs.Rectangle(20,-350,936,964.3), new cjs.Rectangle(10,-350,946,964.3), new cjs.Rectangle(0,-350,956,964.3), rect=new cjs.Rectangle(-10,-350,966,964.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-72,-350,1028,968), new cjs.Rectangle(-134,-350,1090,986), new cjs.Rectangle(-196,-350,1152,1004), new cjs.Rectangle(-258,-350,1214,1022), new cjs.Rectangle(-320,-350,1276,1040), new cjs.Rectangle(-382,-350,1338,1058), new cjs.Rectangle(-444,-350,1400,1076), new cjs.Rectangle(-506,-350,1462,1094), new cjs.Rectangle(-568,-350,1524,1112), new cjs.Rectangle(-630,-350,1586,1130), new cjs.Rectangle(-692,-350,1648,1130), new cjs.Rectangle(-754,-350,1710,1130), new cjs.Rectangle(-816,-350,1772,1130), new cjs.Rectangle(-878,-350,1834,1130), rect=new cjs.Rectangle(-940,-350,2140,1130), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-400,-240,800,480);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.dressupPanel_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(175,80);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-175,80);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,-600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// decor
	this.instance = new lib.decor_wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_4_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance_1 = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-650,480,950);
p.frameBounds = [rect];


(lib.dressupPanel_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(175,80);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-175,80);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,-600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// decor
	this.instance = new lib.decor_wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance_1 = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-650,480,950);
p.frameBounds = [rect];


(lib.dressupPanel_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,-600);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(160,0);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-160,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-650,420,930);
p.frameBounds = [rect];


(lib.dressupPanel_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,-600);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(160,0);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-160,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-650,420,930);
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
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(515,700,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(595,550,0.727,0.727);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.play_btn},{t:this.social_network_mc}]}).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(0,400);
	this.instance.alpha = 0.102;
	this.instance.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// heroes
	this.instance_1 = new lib.heroes_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(200,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// title
	this.instance_2 = new lib.title_mc();
	this.instance_2.setTransform(560,260);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.instance_3 = new lib.background_3_img();
	this.instance_3.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

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
	this.fullScreen_mc.setTransform(40.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

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
	this.instance.alpha = 0.102;
	this.instance.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.animation_decor_background_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.background_1_img();
	this.instance_2.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1261.9);
p.frameBounds = [rect];


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
	this.frame_1_mc = new lib.quest_6_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-350,981.5,960);
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
	this.frame_1_mc = new lib.quest_5_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-350,966,964.3);
p.frameBounds = [rect];


(lib.quest_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":209});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(700,500,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(89).to({y:700},10).wait(111));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_4_1_mc();
	this.dressupPanel_mc.setTransform(230,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-700},0).wait(33).to({x:280},20).to({x:230},5).wait(30).to({x:-700},15).wait(106));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(590,310);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({y:1000},0).wait(18).to({y:290},16).to({y:310},4).wait(65).to({x:380},15).wait(91));

	// shadow
	this.instance = new lib.background_6_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(104).to({_off:false},0).to({alpha:1},15).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-350,991.5,960);
p.frameBounds = [rect, rect=new cjs.Rectangle(-940,-350,1921.5,1650), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-940,-350,1921.5,1605.6), new cjs.Rectangle(-940,-350,1921.5,1561.2), new cjs.Rectangle(-940,-350,1921.5,1516.9), new cjs.Rectangle(-940,-350,1921.5,1472.5), new cjs.Rectangle(-940,-350,1921.5,1428.1), new cjs.Rectangle(-940,-350,1921.5,1383.7), new cjs.Rectangle(-940,-350,1921.5,1339.4), new cjs.Rectangle(-940,-350,1921.5,1295), new cjs.Rectangle(-940,-350,1921.5,1250.6), new cjs.Rectangle(-940,-350,1921.5,1206.2), new cjs.Rectangle(-940,-350,1921.5,1161.8), new cjs.Rectangle(-940,-350,1921.5,1117.5), new cjs.Rectangle(-940,-350,1921.5,1073.1), new cjs.Rectangle(-940,-350,1921.5,1028.7), new cjs.Rectangle(-940,-350,1921.5,984.4), new cjs.Rectangle(-891,-350,1872.5,950), new cjs.Rectangle(-842,-350,1823.5,950), new cjs.Rectangle(-793,-350,1774.5,950), new cjs.Rectangle(-744,-350,1725.5,955), new cjs.Rectangle(-695,-350,1676.5,960), new cjs.Rectangle(-646,-350,1627.5,960), new cjs.Rectangle(-597,-350,1578.5,960), new cjs.Rectangle(-548,-350,1529.5,960), new cjs.Rectangle(-499,-350,1480.5,960), new cjs.Rectangle(-450,-350,1431.5,960), new cjs.Rectangle(-401,-350,1382.5,960), new cjs.Rectangle(-352,-350,1333.5,960), new cjs.Rectangle(-303,-350,1284.5,960), new cjs.Rectangle(-254,-350,1235.5,960), new cjs.Rectangle(-205,-350,1186.5,960), new cjs.Rectangle(-156,-350,1137.5,960), new cjs.Rectangle(-107,-350,1088.5,960), new cjs.Rectangle(-58,-350,1039.5,960), new cjs.Rectangle(-9,-350,990.5,960), new cjs.Rectangle(40,-350,941.5,960), new cjs.Rectangle(30,-350,951.5,960), new cjs.Rectangle(20,-350,961.5,960), new cjs.Rectangle(10,-350,971.5,960), new cjs.Rectangle(0,-350,981.5,960), rect=new cjs.Rectangle(-10,-350,991.5,960), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-72,-350,1053.5,960), new cjs.Rectangle(-134,-350,1115.5,970), new cjs.Rectangle(-196,-350,1177.5,990), new cjs.Rectangle(-258,-350,1239.5,1010), new cjs.Rectangle(-320,-350,1301.5,1030), new cjs.Rectangle(-382,-350,1363.5,1050), new cjs.Rectangle(-444,-350,1425.5,1070), new cjs.Rectangle(-506,-350,1487.5,1090), new cjs.Rectangle(-568,-350,1549.5,1110), new cjs.Rectangle(-630,-350,1611.5,1130), new cjs.Rectangle(-692,-350,1673.5,1130), new cjs.Rectangle(-754,-350,1735.5,1130), new cjs.Rectangle(-816,-350,1797.5,1130), new cjs.Rectangle(-878,-350,1859.5,1130), rect=new cjs.Rectangle(-940,-350,2140,1130), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":209});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(700,500,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(89).to({y:700},10).wait(111));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_3_1_mc();
	this.dressupPanel_mc.setTransform(230,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-700},0).wait(33).to({x:280},20).to({x:230},5).wait(30).to({x:-700},15).wait(106));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(570,330);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({y:1000},0).wait(18).to({y:310},16).to({y:330},4).wait(65).to({x:440},15).wait(91));

	// shadow
	this.instance = new lib.background_6_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(104).to({_off:false},0).to({alpha:1},15).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-350,986,964.3);
p.frameBounds = [rect, rect=new cjs.Rectangle(-940,-350,1916,1634.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-940,-350,1916,1591.2), new cjs.Rectangle(-940,-350,1916,1548.1), new cjs.Rectangle(-940,-350,1916,1505), new cjs.Rectangle(-940,-350,1916,1461.8), new cjs.Rectangle(-940,-350,1916,1418.7), new cjs.Rectangle(-940,-350,1916,1375.6), new cjs.Rectangle(-940,-350,1916,1332.5), new cjs.Rectangle(-940,-350,1916,1289.3), new cjs.Rectangle(-940,-350,1916,1246.2), new cjs.Rectangle(-940,-350,1916,1203.1), new cjs.Rectangle(-940,-350,1916,1159.9), new cjs.Rectangle(-940,-350,1916,1116.8), new cjs.Rectangle(-940,-350,1916,1073.7), new cjs.Rectangle(-940,-350,1916,1030.6), new cjs.Rectangle(-940,-350,1916,987.5), new cjs.Rectangle(-891,-350,1867,950), new cjs.Rectangle(-842,-350,1818,950), new cjs.Rectangle(-793,-350,1769,954.3), new cjs.Rectangle(-744,-350,1720,959.3), new cjs.Rectangle(-695,-350,1671,964.3), new cjs.Rectangle(-646,-350,1622,964.3), new cjs.Rectangle(-597,-350,1573,964.3), new cjs.Rectangle(-548,-350,1524,964.3), new cjs.Rectangle(-499,-350,1475,964.3), new cjs.Rectangle(-450,-350,1426,964.3), new cjs.Rectangle(-401,-350,1377,964.3), new cjs.Rectangle(-352,-350,1328,964.3), new cjs.Rectangle(-303,-350,1279,964.3), new cjs.Rectangle(-254,-350,1230,964.3), new cjs.Rectangle(-205,-350,1181,964.3), new cjs.Rectangle(-156,-350,1132,964.3), new cjs.Rectangle(-107,-350,1083,964.3), new cjs.Rectangle(-58,-350,1034,964.3), new cjs.Rectangle(-9,-350,985,964.3), new cjs.Rectangle(40,-350,936,964.3), new cjs.Rectangle(30,-350,946,964.3), new cjs.Rectangle(20,-350,956,964.3), new cjs.Rectangle(10,-350,966,964.3), new cjs.Rectangle(0,-350,976,964.3), rect=new cjs.Rectangle(-10,-350,986,964.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-72,-350,1048,964.3), new cjs.Rectangle(-134,-350,1110,970), new cjs.Rectangle(-196,-350,1172,990), new cjs.Rectangle(-258,-350,1234,1010), new cjs.Rectangle(-320,-350,1296,1030), new cjs.Rectangle(-382,-350,1358,1050), new cjs.Rectangle(-444,-350,1420,1070), new cjs.Rectangle(-506,-350,1482,1090), new cjs.Rectangle(-568,-350,1544,1110), new cjs.Rectangle(-630,-350,1606,1130), new cjs.Rectangle(-692,-350,1668,1130), new cjs.Rectangle(-754,-350,1730,1130), new cjs.Rectangle(-816,-350,1792,1130), new cjs.Rectangle(-878,-350,1854,1130), rect=new cjs.Rectangle(-940,-350,2140,1130), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":169});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(100,500,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(89).to({y:700},10).wait(71));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_1_mc();
	this.dressupPanel_mc.setTransform(590,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:1500},0).wait(33).to({x:540},20).to({x:590},5).wait(30).to({x:1500},15).wait(66));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(205,310);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({y:1000},0).wait(18).to({y:290},16).to({y:310},4).wait(65).to({x:450},15).wait(51));

	// shadow
	this.instance = new lib.shadow_dressup_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(104).to({_off:false},0).to({alpha:1},15).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-186.5,-350,986.5,960);
p.frameBounds = [rect, rect=new cjs.Rectangle(-186.5,-350,1896.5,1650), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-186.5,-350,1896.5,1605.6), new cjs.Rectangle(-186.5,-350,1896.5,1561.2), new cjs.Rectangle(-186.5,-350,1896.5,1516.9), new cjs.Rectangle(-186.5,-350,1896.5,1472.5), new cjs.Rectangle(-186.5,-350,1896.5,1428.1), new cjs.Rectangle(-186.5,-350,1896.5,1383.7), new cjs.Rectangle(-186.5,-350,1896.5,1339.4), new cjs.Rectangle(-186.5,-350,1896.5,1295), new cjs.Rectangle(-186.5,-350,1896.5,1250.6), new cjs.Rectangle(-186.5,-350,1896.5,1206.2), new cjs.Rectangle(-186.5,-350,1896.5,1161.8), new cjs.Rectangle(-186.5,-350,1896.5,1117.5), new cjs.Rectangle(-186.5,-350,1896.5,1073.1), new cjs.Rectangle(-186.5,-350,1896.5,1028.7), new cjs.Rectangle(-186.5,-350,1896.5,984.4), new cjs.Rectangle(-186.5,-350,1848.5,940), new cjs.Rectangle(-186.5,-350,1800.5,945), new cjs.Rectangle(-186.5,-350,1752.5,950), new cjs.Rectangle(-186.5,-350,1704.5,955), new cjs.Rectangle(-186.5,-350,1656.5,960), new cjs.Rectangle(-186.5,-350,1608.5,960), new cjs.Rectangle(-186.5,-350,1560.5,960), new cjs.Rectangle(-186.5,-350,1512.5,960), new cjs.Rectangle(-186.5,-350,1464.5,960), new cjs.Rectangle(-186.5,-350,1416.5,960), new cjs.Rectangle(-186.5,-350,1368.5,960), new cjs.Rectangle(-186.5,-350,1320.5,960), new cjs.Rectangle(-186.5,-350,1272.5,960), new cjs.Rectangle(-186.5,-350,1224.5,960), new cjs.Rectangle(-186.5,-350,1176.5,960), new cjs.Rectangle(-186.5,-350,1128.5,960), new cjs.Rectangle(-186.5,-350,1080.5,960), new cjs.Rectangle(-186.5,-350,1032.5,960), new cjs.Rectangle(-186.5,-350,984.5,960), new cjs.Rectangle(-186.5,-350,936.5,960), new cjs.Rectangle(-186.5,-350,946.5,960), new cjs.Rectangle(-186.5,-350,956.5,960), new cjs.Rectangle(-186.5,-350,966.5,960), new cjs.Rectangle(-186.5,-350,976.5,960), rect=new cjs.Rectangle(-186.5,-350,986.5,960), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-186.5,-350,1047.2,960), new cjs.Rectangle(-186.5,-350,1107.9,970), new cjs.Rectangle(-186.5,-350,1168.5,990), new cjs.Rectangle(-186.5,-350,1229.2,1010), new cjs.Rectangle(-186.5,-350,1289.9,1030), new cjs.Rectangle(-186.5,-350,1350.5,1050), new cjs.Rectangle(-186.5,-350,1411.2,1070), new cjs.Rectangle(-186.5,-350,1471.9,1090), new cjs.Rectangle(-186.5,-350,1532.5,1110), new cjs.Rectangle(-186.5,-350,1593.2,1130), new cjs.Rectangle(-186.5,-350,1653.9,1130), new cjs.Rectangle(-186.5,-350,1714.5,1130), new cjs.Rectangle(-186.5,-350,1775.2,1130), new cjs.Rectangle(-186.5,-350,1835.9,1130), rect=new cjs.Rectangle(-410,-350,2120,1130), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":169});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(100,500,0.842,0.842);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(89).to({y:700},10).wait(71));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_1_mc();
	this.dressupPanel_mc.setTransform(590,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:1500},0).wait(33).to({x:540},20).to({x:590},5).wait(30).to({x:1500},15).wait(66));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(190,330);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({y:1000},0).wait(18).to({y:310},16).to({y:330},4).wait(65).to({x:420},15).wait(51));

	// shadow
	this.instance = new lib.shadow_dressup_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(104).to({_off:false},0).to({alpha:1},15).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-238,-350,1038,964.3);
p.frameBounds = [rect, rect=new cjs.Rectangle(-238,-350,1948,1634.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-238,-350,1948,1591.2), new cjs.Rectangle(-238,-350,1948,1548.1), new cjs.Rectangle(-238,-350,1948,1505), new cjs.Rectangle(-238,-350,1948,1461.8), new cjs.Rectangle(-238,-350,1948,1418.7), new cjs.Rectangle(-238,-350,1948,1375.6), new cjs.Rectangle(-238,-350,1948,1332.5), new cjs.Rectangle(-238,-350,1948,1289.3), new cjs.Rectangle(-238,-350,1948,1246.2), new cjs.Rectangle(-238,-350,1948,1203.1), new cjs.Rectangle(-238,-350,1948,1159.9), new cjs.Rectangle(-238,-350,1948,1116.8), new cjs.Rectangle(-238,-350,1948,1073.7), new cjs.Rectangle(-238,-350,1948,1030.6), new cjs.Rectangle(-238,-350,1948,987.5), new cjs.Rectangle(-238,-350,1900,944.3), new cjs.Rectangle(-238,-350,1852,949.3), new cjs.Rectangle(-238,-350,1804,954.3), new cjs.Rectangle(-238,-350,1756,959.3), new cjs.Rectangle(-238,-350,1708,964.3), new cjs.Rectangle(-238,-350,1660,964.3), new cjs.Rectangle(-238,-350,1612,964.3), new cjs.Rectangle(-238,-350,1564,964.3), new cjs.Rectangle(-238,-350,1516,964.3), new cjs.Rectangle(-238,-350,1468,964.3), new cjs.Rectangle(-238,-350,1420,964.3), new cjs.Rectangle(-238,-350,1372,964.3), new cjs.Rectangle(-238,-350,1324,964.3), new cjs.Rectangle(-238,-350,1276,964.3), new cjs.Rectangle(-238,-350,1228,964.3), new cjs.Rectangle(-238,-350,1180,964.3), new cjs.Rectangle(-238,-350,1132,964.3), new cjs.Rectangle(-238,-350,1084,964.3), new cjs.Rectangle(-238,-350,1036,964.3), new cjs.Rectangle(-238,-350,988,964.3), new cjs.Rectangle(-238,-350,998,964.3), new cjs.Rectangle(-238,-350,1008,964.3), new cjs.Rectangle(-238,-350,1018,964.3), new cjs.Rectangle(-238,-350,1028,964.3), rect=new cjs.Rectangle(-238,-350,1038,964.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-238,-350,1098.7,964.3), new cjs.Rectangle(-238,-350,1159.4,970), new cjs.Rectangle(-238,-350,1220,990), new cjs.Rectangle(-238,-350,1280.7,1010), new cjs.Rectangle(-238,-350,1341.4,1030), new cjs.Rectangle(-238,-350,1402,1050), new cjs.Rectangle(-238,-350,1462.7,1070), new cjs.Rectangle(-238,-350,1523.4,1090), new cjs.Rectangle(-238,-350,1584,1110), new cjs.Rectangle(-238,-350,1644.7,1130), new cjs.Rectangle(-238,-350,1705.4,1130), new cjs.Rectangle(-238,-350,1766,1130), new cjs.Rectangle(-238,-350,1826.7,1130), new cjs.Rectangle(-238,-350,1887.4,1130), rect=new cjs.Rectangle(-410,-350,2120,1130), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-350,1600,1331);
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
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-350,1600,1331);
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
	this.frame_1_mc = new lib.quest_4_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-350,991.5,960);
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
	this.frame_1_mc = new lib.quest_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-350,986,964.3);
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
	this.frame_1_mc = new lib.quest_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-186.5,-350,986.5,960);
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
p.nominalBounds = rect = new cjs.Rectangle(-238,-350,1038,964.3);
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
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-350,1600,1331);
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
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-350,1600,1331);
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
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-350,1600,1331);
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
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.skip_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-350,1600,1331);
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

	this.instance_1 = new lib.CopyrightScreen();

	this.instance_2 = new lib.WelcomeScreen();

	this.instance_3 = new lib.SelectionScreen();

	this.instance_4 = new lib.LocationScreen_1();

	this.instance_5 = new lib.LocationScreen_2();

	this.instance_6 = new lib.LocationScreen_3();

	this.instance_7 = new lib.LocationScreen_4();

	this.instance_8 = new lib.LocationScreen_5();

	this.instance_9 = new lib.LocationScreen_6();

	this.instance_10 = new lib.RedirectScreen();

	this.instance_11 = new lib.ResultScreen();

	this.instance_12 = new lib.InstructionScreen();

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(400,50);

	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(467,266);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.instance_13 = new lib.Glitter_2();
	this.instance_13.setTransform(500,50);

	this.instance_14 = new lib.FlashAnimation();
	this.instance_14.setTransform(150,280);

	this.instance_15 = new lib.TrackMove_2();
	this.instance_15.setTransform(350,50);

	this.instance_16 = new lib.TrackMove();
	this.instance_16.setTransform(270,50);

	this.instance_17 = new lib.Cursor();
	this.instance_17.setTransform(185,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(115.1,50,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(45.1,50,0.583,0.583,0,0,0,0.1,0);

	this.instance_18 = new lib.OrientationLockScreen();

	this.instance_19 = new lib.CurtainScreen();

	this.instance_20 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.next_btn},{t:this.gravity_explosion_comp}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[]},1).to({state:[{t:this.instance_20}]},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,0,1600,600), rect, new cjs.Rectangle(-400,-280.8,1600,1281.9), new cjs.Rectangle(-400,-280.8,1600,1261.9), rect=new cjs.Rectangle(-400,-350,1600,1331), rect, rect, rect, rect, rect, new cjs.Rectangle(-400,0,1600,610), new cjs.Rectangle(-400,-319.9,1600,1780), new cjs.Rectangle(-400,0,1600,600), new cjs.Rectangle(0,0,562,430), new cjs.Rectangle(-410,-10,1620,620), new cjs.Rectangle(-400,600,1600,600), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-410,-10,1620,620)];


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