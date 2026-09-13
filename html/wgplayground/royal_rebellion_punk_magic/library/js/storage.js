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
		{src:"library/images/storage_atlas_18.png", id:"storage_atlas_18"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,602,1600,600],[0,0,1600,600]]},
		{name:"storage_atlas_2", frames: [[0,602,1600,600],[0,0,1600,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1600,600],[0,602,1600,600]]},
		{name:"storage_atlas_4", frames: [[0,602,1600,600],[0,0,1600,600]]},
		{name:"storage_atlas_5", frames: [[0,602,1600,600],[0,0,1600,600]]},
		{name:"storage_atlas_6", frames: [[0,602,1600,600],[0,0,1600,600]]},
		{name:"storage_atlas_7", frames: [[0,0,1600,600],[442,804,406,501],[0,602,1600,200],[850,804,420,480],[0,804,440,520]]},
		{name:"storage_atlas_8", frames: [[1024,442,360,460],[0,0,380,480],[1024,0,400,440],[0,482,360,460],[0,944,381,427],[785,904,380,420],[1167,904,380,420],[383,904,400,400],[382,0,640,280],[382,282,640,280]]},
		{name:"storage_atlas_9", frames: [[764,844,380,420],[1146,844,430,356],[0,0,380,420],[0,422,380,420],[0,844,380,420],[382,0,380,420],[764,0,380,420],[1146,0,380,420],[382,844,380,420],[382,422,380,420],[764,422,380,420],[1146,422,380,420]]},
		{name:"storage_atlas_10", frames: [[692,1049,420,340],[1114,1049,420,340],[0,0,500,300],[0,302,500,300],[0,604,500,300],[502,0,500,300],[502,302,452,321],[1004,0,380,380],[1194,382,380,380],[502,625,690,210],[0,1118,690,210],[692,837,690,210],[0,906,690,210]]},
		{name:"storage_atlas_11", frames: [[422,0,420,340],[0,0,420,340],[844,0,420,340],[0,342,420,340],[721,342,340,340],[721,684,340,340],[1266,0,320,320],[1063,342,320,320],[1063,664,320,320],[0,1011,346,330],[704,1026,332,334],[422,342,297,465],[0,684,414,325],[348,1011,354,322],[1038,1026,376,290]]},
		{name:"storage_atlas_12", frames: [[1288,0,300,300],[1288,302,300,300],[616,644,380,260],[1300,904,300,300],[616,906,300,300],[998,904,300,300],[303,992,300,300],[644,0,320,320],[0,322,320,320],[966,0,320,320],[322,322,320,320],[0,0,320,320],[322,0,320,320],[644,322,320,320],[966,322,320,320],[0,644,320,320],[998,644,381,258],[322,644,292,346],[0,966,301,335]]},
		{name:"storage_atlas_13", frames: [[0,0,300,300],[475,565,238,286],[738,260,232,291],[576,0,319,258],[1209,0,310,249],[738,830,229,263],[689,1097,229,263],[458,1097,229,263],[920,1095,229,263],[715,565,229,263],[946,553,229,263],[969,818,229,263],[1200,563,229,263],[1151,1083,229,263],[0,1008,222,335],[224,1008,232,262],[218,308,246,294],[0,710,258,296],[260,604,213,325],[1239,251,207,310],[897,0,310,255],[302,0,272,306],[0,302,216,406],[475,853,261,242],[466,308,270,255],[972,257,265,250]]},
		{name:"storage_atlas_14", frames: [[1386,0,212,276],[1155,1037,213,272],[1155,265,229,263],[462,265,229,263],[462,1060,229,263],[693,265,229,263],[693,530,229,263],[462,530,229,263],[924,265,229,263],[693,1060,229,263],[693,795,229,263],[924,530,229,263],[1155,530,229,263],[462,795,229,263],[1155,795,247,240],[924,795,229,263],[924,1060,229,263],[0,0,229,263],[231,530,229,263],[0,265,229,263],[0,530,229,263],[0,795,229,263],[0,1060,229,263],[231,0,229,263],[231,265,229,263],[924,0,229,263],[462,0,229,263],[693,0,229,263],[231,795,229,263],[231,1060,229,263],[1155,0,229,263]]},
		{name:"storage_atlas_15", frames: [[242,0,260,220],[504,0,213,267],[719,0,196,284],[0,1001,216,251],[872,1012,216,251],[218,981,216,251],[1090,1012,216,251],[436,1028,216,251],[654,1045,216,251],[1308,1012,216,251],[436,775,216,251],[654,792,216,251],[1308,759,216,251],[1090,759,216,251],[1114,506,216,251],[896,506,216,251],[1353,253,216,251],[460,269,216,251],[678,286,216,251],[218,475,216,251],[0,495,216,251],[1135,253,216,251],[1353,0,216,251],[917,253,216,251],[242,222,216,251],[0,242,216,251],[917,0,216,251],[1135,0,216,251],[0,748,216,251],[218,728,216,251],[1332,506,216,251],[872,759,216,251],[436,522,216,251],[654,539,216,251],[0,0,240,240]]},
		{name:"storage_atlas_16", frames: [[940,625,190,190],[1417,732,180,180],[999,327,190,190],[406,253,240,220],[1009,135,190,190],[1235,732,180,180],[1201,0,160,210],[335,1233,320,130],[817,135,190,190],[218,544,240,220],[411,957,164,274],[577,762,169,262],[218,253,186,289],[436,0,304,170],[742,0,302,133],[1235,914,178,180],[1379,180,181,186],[218,957,191,255],[637,475,168,261],[648,172,167,259],[460,475,175,285],[0,0,216,251],[218,766,269,189],[657,1188,252,144],[0,1265,333,127],[0,253,216,251],[0,506,216,251],[0,759,216,251],[0,1012,216,251],[218,0,216,251],[1292,1096,192,165],[577,1026,234,160],[1005,817,228,157],[1132,519,220,160],[748,738,190,190],[1191,327,186,188],[1379,0,194,178],[1103,1096,187,171],[813,930,190,190],[911,1122,190,190],[807,433,190,190],[1379,368,180,180],[1354,550,180,180]]},
		{name:"storage_atlas_17", frames: [[0,959,130,180],[449,899,150,140],[173,169,180,170],[996,979,140,140],[1067,837,140,140],[1311,568,140,140],[1351,852,140,140],[1169,568,140,140],[1453,568,140,140],[996,1121,140,140],[1209,710,140,140],[1209,852,140,140],[1351,710,140,140],[1138,994,140,140],[1280,994,140,140],[1280,1136,140,140],[1422,994,140,140],[1422,1136,140,140],[1138,1136,140,140],[0,801,188,156],[0,0,188,167],[394,485,167,147],[715,132,169,135],[0,353,234,133],[188,640,232,125],[0,488,200,150],[578,269,163,141],[563,485,152,133],[355,145,180,147],[537,134,176,133],[442,1198,126,165],[202,488,190,148],[190,767,144,150],[0,169,171,182],[282,1229,158,137],[339,1063,158,133],[0,1141,165,136],[190,0,212,143],[167,1098,170,129],[336,767,163,130],[132,959,163,137],[422,634,159,131],[775,0,280,80],[0,1279,280,80],[593,0,180,130],[743,696,140,140],[885,269,140,140],[499,1041,140,140],[570,1183,140,140],[583,620,140,140],[717,412,140,140],[641,904,140,140],[886,82,140,140],[743,269,140,140],[601,762,140,140],[725,554,140,140],[859,411,140,140],[236,341,340,80],[297,919,150,142],[404,0,187,132],[0,640,186,159],[1028,82,140,140],[867,553,140,140],[885,695,140,140],[1001,411,140,140],[1027,224,140,140],[712,1046,140,140],[783,838,140,140],[1009,553,140,140],[1143,366,140,140],[1169,224,140,140],[712,1188,140,140],[1170,0,140,140],[1027,695,140,140],[1427,426,140,140],[854,980,140,140],[1453,142,140,140],[1454,0,140,140],[1311,284,140,140],[1285,426,140,140],[854,1122,140,140],[1453,284,140,140],[1312,0,140,140],[925,837,140,140],[1311,142,140,140],[236,423,440,60]]},
		{name:"storage_atlas_18", frames: [[244,692,120,120],[1382,665,120,120],[122,638,120,120],[1370,973,40,40],[0,835,60,120],[0,957,50,50],[1278,0,140,140],[1136,0,140,140],[1420,0,140,140],[0,142,140,140],[142,142,140,140],[284,142,140,140],[426,142,140,140],[568,142,140,140],[710,142,140,140],[852,142,140,140],[994,142,140,140],[1136,142,140,140],[670,610,120,120],[1504,665,90,120],[426,0,140,140],[0,0,140,140],[142,0,140,140],[284,0,140,140],[568,0,140,140],[710,0,140,140],[852,0,140,140],[994,0,140,140],[498,346,90,50],[1158,627,90,50],[792,610,120,120],[914,610,120,120],[366,627,120,120],[1036,627,120,120],[882,955,50,50],[366,570,50,50],[165,760,50,50],[244,516,50,50],[830,955,50,50],[934,955,50,50],[795,955,33,95],[1555,142,45,106],[468,940,51,104],[1552,515,48,101],[576,940,43,92],[1064,937,52,105],[521,940,53,99],[407,925,59,106],[488,627,57,96],[1412,973,44,30],[1158,679,59,30],[1546,997,43,18],[1458,973,43,27],[1546,973,47,22],[1252,849,53,34],[1307,849,49,33],[1404,849,42,34],[1358,849,44,33],[1396,259,168,105],[222,284,122,128],[1562,0,33,100],[621,940,43,91],[1566,250,32,96],[666,940,41,87],[753,955,40,84],[1260,505,44,83],[62,927,48,90],[62,835,49,90],[709,955,42,81],[165,967,56,42],[267,814,51,24],[152,366,58,41],[1552,618,46,39],[223,967,53,42],[320,814,43,19],[304,414,39,31],[278,967,41,41],[1503,973,41,27],[1396,142,157,115],[1278,142,116,157],[608,284,130,117],[1158,712,126,110],[488,732,113,105],[0,712,111,121],[1069,811,80,124],[304,448,120,120],[785,732,180,60],[603,794,180,60],[967,749,180,60],[785,794,180,60],[1286,787,180,60],[603,732,180,60],[346,284,260,60],[1494,889,40,40],[1196,301,150,100],[1044,284,150,100],[1348,366,150,100],[740,386,150,100],[346,346,150,100],[0,366,150,100],[892,386,150,100],[1044,386,150,100],[740,284,150,100],[498,403,150,100],[892,284,150,100],[152,414,150,100],[1196,403,150,100],[0,468,120,120],[1348,468,120,120],[0,284,220,80],[1348,301,40,55],[1306,505,40,43],[1196,284,10,11],[993,913,69,94],[1382,590,100,73],[1286,712,57,60],[1151,824,99,100],[122,468,23,38],[1562,102,31,31],[426,448,50,50],[1552,366,40,147],[113,760,50,210],[1500,366,50,297],[1468,787,100,100],[894,488,120,120],[650,488,120,120],[548,505,100,100],[1016,488,120,120],[772,488,120,120],[363,967,40,40],[112,972,40,40],[1536,889,40,40],[1118,973,40,40],[1160,973,40,40],[321,967,40,40],[1328,973,40,40],[1244,973,40,40],[1286,973,40,40],[1202,973,40,40],[426,505,120,120],[650,403,80,80],[366,749,120,90],[1138,505,120,120],[122,516,120,120],[0,590,120,120],[244,570,120,120],[1260,590,120,120],[548,610,120,120],[509,898,240,40],[267,841,240,40],[751,913,240,40],[509,856,240,40],[1252,889,240,40],[165,925,240,40],[1151,931,240,40],[267,883,240,40],[751,856,200,40],[1393,931,200,40],[967,811,100,100],[165,814,100,100]]}
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
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.anarchy_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_for_pointer_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_10_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_6_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_7_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
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



(lib.bag_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bag_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bag_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bag_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bag_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bag_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
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
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_dress_0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_top_0_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.blush_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.blush_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.blush_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.blush_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.blush_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.blush_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.blush_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.blush_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.blush_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.blush_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.blush_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.blush_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.circles_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.copyright_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.current_beads_0_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.current_beads_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.current_dress_0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.current_earrings_0_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.current_earrings_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.current_hair_0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.current_hair_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.current_location_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.current_makeup_0_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.current_makeup_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.current_top_0_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.decor_location_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dust_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.dust_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.eyes_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.eyes_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.eyes_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.eyes_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.eyes_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.eyes_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.eyes_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.eyes_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.eyes_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.eyes_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.flash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.flash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.flash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.flash_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.forward_icon_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.frame_dress_0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.frame_top_0_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.glitter_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.glitter_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.glitter_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.glitter_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress8_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings7_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings8_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero1_earrings9_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_head_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_necklace1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero1_necklace2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero1_necklace3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero1_necklace4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero1_necklace5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero1_necklace6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero1_necklace7_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hero1_necklace8_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hero1_necklace9_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hero1_piercing1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_piercing2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_piercing3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_piercing4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_piercing5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_piercing6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_skirt1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_skirt2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_skirt3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_skirt4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_skirt5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hero1_skirt6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_skirt7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_skirt8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_skirt9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero2_body_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress8_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress9_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings7_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings8_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.hero2_earrings9_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero2_necklace1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.hero2_necklace2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.hero2_necklace3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.hero2_necklace4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.hero2_necklace5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.hero2_necklace6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.hero2_necklace7_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.hero2_necklace8_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.hero2_necklace9_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.hero2_piercing1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero2_piercing2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero2_piercing3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero2_piercing4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero2_piercing5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero2_piercing6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero2_skirt1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero2_skirt2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero2_skirt3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.hero2_skirt4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero2_skirt5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero2_skirt6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero2_skirt7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero2_skirt8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero2_skirt9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top8_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero_1_body_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_de_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_es_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.indicator_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.language_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.language_de_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.language_en_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.language_es_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.language_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.language_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.language_id_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.language_it_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.language_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.language_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.language_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.language_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.language_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.languages_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.languages_1_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.languages_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.languages_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.lips_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.lips_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.lips_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.lips_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.lips_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.lips_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.lips_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.lips_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.lips_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.lips_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.lips_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.lips_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.location_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_0_5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_0_6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.location_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.pacifism_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.photoflash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.photoflash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.photoflash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.piercing_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.piercing_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.piercing_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.piercing_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.piercing_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.piercing_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.piercing_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.piercing_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.piercing_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.piercing_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.piercing_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.piercing_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.shadows_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.shadows_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.shadows_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.shadows_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.shadows_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.shadows_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.shadows_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.shadows_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.shadows_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.shadows_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.shadows_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.shadows_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.skip_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(155);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(156);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(157);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.track_move_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(158);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(159);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(85);
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
	this.instance.setTransform(-220,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-30,440,60);
p.frameBounds = [rect];


(lib.wardrobe_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_2_img();
	this.instance.setTransform(-220,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-260,440,520);
p.frameBounds = [rect];


(lib.wardrobe_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_1_img();
	this.instance.setTransform(-210,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-240,420,480);
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


(lib.pacifism_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pacifism_img();
	this.instance.setTransform(-120,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.object_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuWOWQl8l8AAoaQAAoZF8l9QF9l8IZAAQIaAAF8F8QF9F9AAIZQAAIal9F8Ql8F9oaAAQoZAAl9l9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
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


(lib.hero2_top_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_top1_img();
	this.instance.setTransform(-58,-78.5);

	this.instance_1 = new lib.hero2_top2_img();
	this.instance_1.setTransform(-71.9,-83.5);

	this.instance_2 = new lib.hero2_top3_img();
	this.instance_2.setTransform(-62,-76.5);

	this.instance_3 = new lib.hero2_top4_img();
	this.instance_3.setTransform(-55.4,-72);

	this.instance_4 = new lib.hero2_top5_img();
	this.instance_4.setTransform(-106.4,-75);

	this.instance_5 = new lib.hero2_top6_img();
	this.instance_5.setTransform(-97.4,-62);

	this.instance_6 = new lib.hero2_top7_img();
	this.instance_6.setTransform(-98.9,-73.5);

	this.instance_7 = new lib.hero2_top8_img();
	this.instance_7.setTransform(-55,-72.5);

	this.instance_8 = new lib.hero2_top9_img();
	this.instance_8.setTransform(-93.9,-74.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58,-78.5,116,157);
p.frameBounds = [rect, new cjs.Rectangle(-71.9,-83.5,130,117), new cjs.Rectangle(-62,-76.5,126,110), new cjs.Rectangle(-55.4,-72,113,105), new cjs.Rectangle(-106.4,-75,170,129), new cjs.Rectangle(-97.4,-62,163,130), new cjs.Rectangle(-98.9,-73.5,163,137), new cjs.Rectangle(-55,-72.5,111,121), new cjs.Rectangle(-93.9,-74.5,159,131), null];


(lib.hero2_skirt_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_skirt1_img();
	this.instance.setTransform(-96,-82.5);

	this.instance_1 = new lib.hero2_skirt2_img();
	this.instance_1.setTransform(-81,-85);

	this.instance_2 = new lib.hero2_skirt3_img();
	this.instance_2.setTransform(-79.5,-62);

	this.instance_3 = new lib.hero2_skirt4_img();
	this.instance_3.setTransform(-77.9,-72.5);

	this.instance_4 = new lib.hero2_skirt5_img();
	this.instance_4.setTransform(-77,-65);

	this.instance_5 = new lib.hero2_skirt6_img();
	this.instance_5.setTransform(-82.5,-61.5);

	this.instance_6 = new lib.hero2_skirt7_img();
	this.instance_6.setTransform(-101.5,-72);

	this.instance_7 = new lib.hero2_skirt8_img();
	this.instance_7.setTransform(-111.9,-66.5);

	this.instance_8 = new lib.hero2_skirt9_img();
	this.instance_8.setTransform(-112.4,-73.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96,-82.5,192,165);
p.frameBounds = [rect, new cjs.Rectangle(-81,-85,171,182), new cjs.Rectangle(-79.5,-62,157,115), new cjs.Rectangle(-77.9,-72.5,158,137), new cjs.Rectangle(-77,-65,158,133), new cjs.Rectangle(-82.5,-61.5,165,136), new cjs.Rectangle(-101.5,-72,212,143), new cjs.Rectangle(-111.9,-66.5,234,160), new cjs.Rectangle(-112.4,-73.5,228,157), null];


(lib.hero2_shadows_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_shadows1_img();
	this.instance.setTransform(-108,-125.5);

	this.instance_1 = new lib.hero2_shadows2_img();
	this.instance_1.setTransform(-108,-125.5);

	this.instance_2 = new lib.hero2_shadows3_img();
	this.instance_2.setTransform(-108,-125.5);

	this.instance_3 = new lib.hero2_shadows4_img();
	this.instance_3.setTransform(-108,-125.5);

	this.instance_4 = new lib.hero2_shadows5_img();
	this.instance_4.setTransform(-108,-125.5);

	this.instance_5 = new lib.hero2_shadows6_img();
	this.instance_5.setTransform(-108,-125.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108,-125.5,216,251);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_shadows_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero2_shadows1_img();
	this.instance.setTransform(-108,-125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108,-125.5,216,251);
p.frameBounds = [rect];


(lib.hero2_rouge_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_rouge1_img();
	this.instance.setTransform(-108,-125.5);

	this.instance_1 = new lib.hero2_rouge2_img();
	this.instance_1.setTransform(-108,-125.5);

	this.instance_2 = new lib.hero2_rouge3_img();
	this.instance_2.setTransform(-108,-125.5);

	this.instance_3 = new lib.hero2_rouge4_img();
	this.instance_3.setTransform(-108,-125.5);

	this.instance_4 = new lib.hero2_rouge5_img();
	this.instance_4.setTransform(-108,-125.5);

	this.instance_5 = new lib.hero2_rouge6_img();
	this.instance_5.setTransform(-108,-125.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108,-125.5,216,251);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_rouge_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero2_rouge2_img();
	this.instance.setTransform(-108,-125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108,-125.5,216,251);
p.frameBounds = [rect];


(lib.hero2_piercing_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_piercing1_img();
	this.instance.setTransform(-108,-125.5);

	this.instance_1 = new lib.hero2_piercing2_img();
	this.instance_1.setTransform(-108,-125.5);

	this.instance_2 = new lib.hero2_piercing3_img();
	this.instance_2.setTransform(-108,-125.5);

	this.instance_3 = new lib.hero2_piercing4_img();
	this.instance_3.setTransform(-108,-125.5);

	this.instance_4 = new lib.hero2_piercing5_img();
	this.instance_4.setTransform(-108,-125.5);

	this.instance_5 = new lib.hero2_piercing6_img();
	this.instance_5.setTransform(-108,-125.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108,-125.5,216,251);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_piercing_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero2_piercing3_img();
	this.instance.setTransform(-108,-125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108,-125.5,216,251);
p.frameBounds = [rect];


(lib.hero2_necklace_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero2_necklace5_img();
	this.instance.setTransform(-30.8,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.8,-31,53,42);
p.frameBounds = [rect];


(lib.hero2_necklace_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_necklace1_img();
	this.instance.setTransform(-28,-21);

	this.instance_1 = new lib.hero2_necklace2_img();
	this.instance_1.setTransform(-27.8,-23);

	this.instance_2 = new lib.hero2_necklace3_img();
	this.instance_2.setTransform(-32.8,-25.5);

	this.instance_3 = new lib.hero2_necklace4_img();
	this.instance_3.setTransform(-28.3,-32);

	this.instance_4 = new lib.hero2_necklace5_img();
	this.instance_4.setTransform(-30.8,-31);

	this.instance_5 = new lib.hero2_necklace6_img();
	this.instance_5.setTransform(-28.8,-30);

	this.instance_6 = new lib.hero2_necklace7_img();
	this.instance_6.setTransform(-26.3,-25);

	this.instance_7 = new lib.hero2_necklace8_img();
	this.instance_7.setTransform(-26.8,-26.5);

	this.instance_8 = new lib.hero2_necklace9_img();
	this.instance_8.setTransform(-26.8,-27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28,-21,56,42);
p.frameBounds = [rect, new cjs.Rectangle(-27.8,-23,51,24), new cjs.Rectangle(-32.8,-25.5,58,41), new cjs.Rectangle(-28.3,-32,46,39), new cjs.Rectangle(-30.8,-31,53,42), new cjs.Rectangle(-28.8,-30,43,19), new cjs.Rectangle(-26.3,-25,39,31), new cjs.Rectangle(-26.8,-26.5,41,41), new cjs.Rectangle(-26.8,-27.5,41,27), null];


(lib.hero2_lips_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_lips1_img();
	this.instance.setTransform(-108,-125.5);

	this.instance_1 = new lib.hero2_lips2_img();
	this.instance_1.setTransform(-108,-125.5);

	this.instance_2 = new lib.hero2_lips3_img();
	this.instance_2.setTransform(-108,-125.5);

	this.instance_3 = new lib.hero2_lips4_img();
	this.instance_3.setTransform(-108,-125.5);

	this.instance_4 = new lib.hero2_lips5_img();
	this.instance_4.setTransform(-108,-125.5);

	this.instance_5 = new lib.hero2_lips6_img();
	this.instance_5.setTransform(-108,-125.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108,-125.5,216,251);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_lips_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips4_img();
	this.instance.setTransform(-108,-125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108,-125.5,216,251);
p.frameBounds = [rect];


(lib.hero2_head_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero2_head_img();
	this.instance.setTransform(-108,-125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108,-125.5,216,251);
p.frameBounds = [rect];


(lib.hero2_hair_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero2_hair4_img();
	this.instance.setTransform(-173,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-173,-6,354,322);
p.frameBounds = [rect];


(lib.hero2_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_hair1_img();
	this.instance.setTransform(-128,42);

	this.instance_1 = new lib.hero2_hair2_img();
	this.instance_1.setTransform(-133,-14);

	this.instance_2 = new lib.hero2_hair4_img();
	this.instance_2.setTransform(-173,-6);

	this.instance_3 = new lib.hero2_hair5_img();
	this.instance_3.setTransform(-177,13);

	this.instance_4 = new lib.hero2_hair6_img();
	this.instance_4.setTransform(-167,-156);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128,42,252,144);
p.frameBounds = [rect, new cjs.Rectangle(-133,-14,272,306), null, new cjs.Rectangle(-173,-6,354,322), new cjs.Rectangle(-177,13,376,290), new cjs.Rectangle(-167,-156,333,127)];


(lib.hero2_fringe_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe4_img();
	this.instance.setTransform(-218,-162);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-218,-162,452,321);
p.frameBounds = [rect];


(lib.hero2_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_fringe1_img();
	this.instance.setTransform(-155,-127.5);

	this.instance_1 = new lib.hero2_fringe2_img();
	this.instance_1.setTransform(-154,-140);

	this.instance_2 = new lib.hero2_fringe3_img();
	this.instance_2.setTransform(-207,-181.9);

	this.instance_3 = new lib.hero2_fringe4_img();
	this.instance_3.setTransform(-218,-162);

	this.instance_4 = new lib.hero2_fringe5_img();
	this.instance_4.setTransform(-195,-175);

	this.instance_5 = new lib.hero2_fringe6_img();
	this.instance_5.setTransform(-139,-122);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-127.5,310,255);
p.frameBounds = [rect, new cjs.Rectangle(-154,-140,301,335), new cjs.Rectangle(-207,-181.9,430,356), new cjs.Rectangle(-218,-162,452,321), new cjs.Rectangle(-195,-175,414,325), new cjs.Rectangle(-139,-122,269,189)];


(lib.hero2_eyes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_eyes1_img();
	this.instance.setTransform(-108,-125.5);

	this.instance_1 = new lib.hero2_eyes2_img();
	this.instance_1.setTransform(-108,-125.5);

	this.instance_2 = new lib.hero2_eyes3_img();
	this.instance_2.setTransform(-108,-125.5);

	this.instance_3 = new lib.hero2_eyes4_img();
	this.instance_3.setTransform(-108,-125.5);

	this.instance_4 = new lib.hero2_eyes5_img();
	this.instance_4.setTransform(-108,-125.5);

	this.instance_5 = new lib.hero2_eyes6_img();
	this.instance_5.setTransform(-108,-125.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108,-125.5,216,251);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_eyes_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes6_img();
	this.instance.setTransform(-108,-125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108,-125.5,216,251);
p.frameBounds = [rect];


(lib.hero2_eyebrows_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_eyebrows1_img();
	this.instance.setTransform(-108,-125.5);

	this.instance_1 = new lib.hero2_eyebrows2_img();
	this.instance_1.setTransform(-108,-125.5);

	this.instance_2 = new lib.hero2_eyebrows3_img();
	this.instance_2.setTransform(-108,-125.5);

	this.instance_3 = new lib.hero2_eyebrows4_img();
	this.instance_3.setTransform(-108,-125.5);

	this.instance_4 = new lib.hero2_eyebrows5_img();
	this.instance_4.setTransform(-108,-125.5);

	this.instance_5 = new lib.hero2_eyebrows6_img();
	this.instance_5.setTransform(-108,-125.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108,-125.5,216,251);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_eyebrows_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero2_eyebrows1_img();
	this.instance.setTransform(-108,-125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108,-125.5,216,251);
p.frameBounds = [rect];


(lib.hero2_earrings9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings9_img();
	this.instance.setTransform(113.5,-40,1,1,0,0,180);

	this.instance_1 = new lib.hero2_earrings9_img();
	this.instance_1.setTransform(-113.5,-41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113.5,-41,227,82);
p.frameBounds = [rect];


(lib.hero2_earrings8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings8_img();
	this.instance.setTransform(65.7,-45);

	this.instance_1 = new lib.hero2_earrings8_img();
	this.instance_1.setTransform(-114.7,-45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.7,-45,229.5,90);
p.frameBounds = [rect];


(lib.hero2_earrings7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings7_img();
	this.instance.setTransform(66.5,-45.5);

	this.instance_1 = new lib.hero2_earrings7_img();
	this.instance_1.setTransform(-114.5,-44.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.5,-45.5,229,91);
p.frameBounds = [rect];


(lib.hero2_earrings6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings6_img();
	this.instance.setTransform(113.1,-41,1,1,0,0,180);

	this.instance_1 = new lib.hero2_earrings6_img();
	this.instance_1.setTransform(-113,-42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113,-42,226.1,84);
p.frameBounds = [rect];


(lib.hero2_earrings5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings5_img();
	this.instance.setTransform(69.3,-42);

	this.instance_1 = new lib.hero2_earrings5_img();
	this.instance_1.setTransform(-109.2,-42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.2,-42,218.5,84);
p.frameBounds = [rect];


(lib.hero2_earrings4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings4_img();
	this.instance.setTransform(108.3,-43.5,1,1,0,0,180);

	this.instance_1 = new lib.hero2_earrings4_img();
	this.instance_1.setTransform(-108.2,-43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108.2,-43.5,216.5,87);
p.frameBounds = [rect];


(lib.hero2_earrings3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings3_img();
	this.instance.setTransform(73.5,-48);

	this.instance_1 = new lib.hero2_earrings3_img();
	this.instance_1.setTransform(-105.5,-48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105.5,-48,211,96);
p.frameBounds = [rect];


(lib.hero2_earrings2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings2_img();
	this.instance.setTransform(67.2,-45.5);

	this.instance_1 = new lib.hero2_earrings2_img();
	this.instance_1.setTransform(-110.2,-45.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.2,-45.5,220.5,91);
p.frameBounds = [rect];


(lib.hero2_earrings1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_earrings1_img();
	this.instance.setTransform(73.5,-50.5);

	this.instance_1 = new lib.hero2_earrings1_img();
	this.instance_1.setTransform(-106.5,-49.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106.5,-50.5,213,101);
p.frameBounds = [rect];


(lib.hero2_dress_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero2_dress7_img();
	this.instance.setTransform(-98.9,-122);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.9,-122,175,285);
p.frameBounds = [rect];


(lib.hero2_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_dress1_img();
	this.instance.setTransform(-95.5,-127.5);

	this.instance_1 = new lib.hero2_dress2_img();
	this.instance_1.setTransform(-109.4,-123);

	this.instance_2 = new lib.hero2_dress3_img();
	this.instance_2.setTransform(-130.4,-140);

	this.instance_3 = new lib.hero2_dress4_img();
	this.instance_3.setTransform(-129.4,-128.5);

	this.instance_4 = new lib.hero2_dress5_img();
	this.instance_4.setTransform(-91.4,-127.5);

	this.instance_5 = new lib.hero2_dress6_img();
	this.instance_5.setTransform(-90.9,-121.5);

	this.instance_6 = new lib.hero2_dress7_img();
	this.instance_6.setTransform(-98.9,-122);

	this.instance_7 = new lib.hero2_dress8_img();
	this.instance_7.setTransform(-127.5,-124);

	this.instance_8 = new lib.hero2_dress9_img();
	this.instance_8.setTransform(-112.9,-122.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.5,-127.5,191,255);
p.frameBounds = [rect, new cjs.Rectangle(-109.4,-123,232,262), new cjs.Rectangle(-130.4,-140,246,294), new cjs.Rectangle(-129.4,-128.5,258,296), new cjs.Rectangle(-91.4,-127.5,168,261), new cjs.Rectangle(-90.9,-121.5,167,259), new cjs.Rectangle(-98.9,-122,175,285), new cjs.Rectangle(-127.5,-124,213,325), new cjs.Rectangle(-112.9,-122.5,207,310), null];


(lib.hero1_top_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_top1_img();
	this.instance.setTransform(-76,-66.5);

	this.instance_1 = new lib.hero1_top2_img();
	this.instance_1.setTransform(-61.4,-61);

	this.instance_2 = new lib.hero1_top3_img();
	this.instance_2.setTransform(-88.9,-70.5);

	this.instance_3 = new lib.hero1_top4_img();
	this.instance_3.setTransform(-86.9,-61);

	this.instance_4 = new lib.hero1_top5_img();
	this.instance_4.setTransform(-89.4,-55);

	this.instance_5 = new lib.hero1_top6_img();
	this.instance_5.setTransform(-90.9,-58);

	this.instance_6 = new lib.hero1_top7_img();
	this.instance_6.setTransform(-62.4,-55.5);

	this.instance_7 = new lib.hero1_top8_img();
	this.instance_7.setTransform(-95.9,-58);

	this.instance_8 = new lib.hero1_top9_img();
	this.instance_8.setTransform(-71.4,-61.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76,-66.5,152,133);
p.frameBounds = [rect, new cjs.Rectangle(-61.4,-61,122,128), new cjs.Rectangle(-88.9,-70.5,180,147), new cjs.Rectangle(-86.9,-61,176,133), new cjs.Rectangle(-89.4,-55,178,180), new cjs.Rectangle(-90.9,-58,181,186), new cjs.Rectangle(-62.4,-55.5,126,165), new cjs.Rectangle(-95.9,-58,190,148), new cjs.Rectangle(-71.4,-61.5,144,150), null];


(lib.hero1_skirt_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_skirt1_img();
	this.instance.setTransform(-94,-78);

	this.instance_1 = new lib.hero1_skirt2_img();
	this.instance_1.setTransform(-94.9,-81);

	this.instance_2 = new lib.hero1_skirt3_img();
	this.instance_2.setTransform(-85.4,-75.5);

	this.instance_3 = new lib.hero1_skirt4_img();
	this.instance_3.setTransform(-85.9,-70);

	this.instance_4 = new lib.hero1_skirt5_img();
	this.instance_4.setTransform(-83.5,-59);

	this.instance_5 = new lib.hero1_skirt6_img();
	this.instance_5.setTransform(-118.9,-81);

	this.instance_6 = new lib.hero1_skirt7_img();
	this.instance_6.setTransform(-118.4,-70.5);

	this.instance_7 = new lib.hero1_skirt8_img();
	this.instance_7.setTransform(-103.4,-73.5);

	this.instance_8 = new lib.hero1_skirt9_img();
	this.instance_8.setTransform(-80.9,-73);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94,-78,188,156);
p.frameBounds = [rect, new cjs.Rectangle(-94.9,-81,188,167), new cjs.Rectangle(-85.4,-75.5,167,147), new cjs.Rectangle(-85.9,-70,169,135), new cjs.Rectangle(-83.5,-59,168,105), new cjs.Rectangle(-118.9,-81,234,133), new cjs.Rectangle(-118.4,-70.5,232,125), new cjs.Rectangle(-103.4,-73.5,200,150), new cjs.Rectangle(-80.9,-73,163,141), null];


(lib.hero1_shadows_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_shadows1_img();
	this.instance.setTransform(-114.5,-131.5);

	this.instance_1 = new lib.hero1_shadows2_img();
	this.instance_1.setTransform(-114.5,-131.5);

	this.instance_2 = new lib.hero1_shadows3_img();
	this.instance_2.setTransform(-114.5,-131.5);

	this.instance_3 = new lib.hero1_shadows4_img();
	this.instance_3.setTransform(-114.5,-131.5);

	this.instance_4 = new lib.hero1_shadows5_img();
	this.instance_4.setTransform(-114.5,-131.5);

	this.instance_5 = new lib.hero1_shadows6_img();
	this.instance_5.setTransform(-114.5,-131.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.5,-131.5,229,263);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_shadows_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero1_shadows4_img();
	this.instance.setTransform(-114.5,-131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.5,-131.5,229,263);
p.frameBounds = [rect];


(lib.hero1_rouge_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero1_rouge1_img();
	this.instance.setTransform(-114.5,-131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.5,-131.5,229,263);
p.frameBounds = [rect];


(lib.hero1_rouge_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_rouge1_img();
	this.instance.setTransform(-114.5,-131.5);

	this.instance_1 = new lib.hero1_rouge2_img();
	this.instance_1.setTransform(-114.5,-131.5);

	this.instance_2 = new lib.hero1_rouge3_img();
	this.instance_2.setTransform(-114.5,-131.5);

	this.instance_3 = new lib.hero1_rouge4_img();
	this.instance_3.setTransform(-114.5,-131.5);

	this.instance_4 = new lib.hero1_rouge5_img();
	this.instance_4.setTransform(-114.5,-131.5);

	this.instance_5 = new lib.hero1_rouge6_img();
	this.instance_5.setTransform(-114.5,-131.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.5,-131.5,229,263);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_piercing_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_piercing1_img();
	this.instance.setTransform(-114.5,-131.5);

	this.instance_1 = new lib.hero1_piercing2_img();
	this.instance_1.setTransform(-114.5,-131.5);

	this.instance_2 = new lib.hero1_piercing3_img();
	this.instance_2.setTransform(-114.5,-131.5);

	this.instance_3 = new lib.hero1_piercing4_img();
	this.instance_3.setTransform(-114.5,-131.5);

	this.instance_4 = new lib.hero1_piercing5_img();
	this.instance_4.setTransform(-114.5,-131.5);

	this.instance_5 = new lib.hero1_piercing6_img();
	this.instance_5.setTransform(-114.5,-131.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.5,-131.5,229,263);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_piercing_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Слой 1
	this.instance = new lib.hero1_piercing6_img();
	this.instance.setTransform(-114.5,-131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.5,-131.5,229,263);
p.frameBounds = [rect, null];


(lib.hero1_necklace_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_necklace1_img();
	this.instance.setTransform(-22,-15);

	this.instance_1 = new lib.hero1_necklace2_img();
	this.instance_1.setTransform(-28.5,-14.7);

	this.instance_2 = new lib.hero1_necklace3_img();
	this.instance_2.setTransform(-21.5,-16.7);

	this.instance_3 = new lib.hero1_necklace4_img();
	this.instance_3.setTransform(-22.2,-16.2);

	this.instance_4 = new lib.hero1_necklace5_img();
	this.instance_4.setTransform(-22.2,-15.5);

	this.instance_5 = new lib.hero1_necklace6_img();
	this.instance_5.setTransform(-25.5,-14.7);

	this.instance_6 = new lib.hero1_necklace7_img();
	this.instance_6.setTransform(-24.5,-23.5);

	this.instance_7 = new lib.hero1_necklace8_img();
	this.instance_7.setTransform(-21,-22.5);

	this.instance_8 = new lib.hero1_necklace9_img();
	this.instance_8.setTransform(-21.5,-17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22,-15,44,30);
p.frameBounds = [rect, new cjs.Rectangle(-28.5,-14.7,59,30), new cjs.Rectangle(-21.5,-16.7,43,18), new cjs.Rectangle(-22.2,-16.2,43,27), new cjs.Rectangle(-22.2,-15.5,47,22), new cjs.Rectangle(-25.5,-14.7,53,34), new cjs.Rectangle(-24.5,-23.5,49,33), new cjs.Rectangle(-21,-22.5,42,34), new cjs.Rectangle(-21.5,-17.7,44,33), null];


(lib.hero1_necklace_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero1_necklace1_img();
	this.instance.setTransform(-22,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22,-15,44,30);
p.frameBounds = [rect];


(lib.hero1_lips_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips2_img();
	this.instance.setTransform(-114.5,-131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.5,-131.5,229,263);
p.frameBounds = [rect];


(lib.hero1_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_lips1_img();
	this.instance.setTransform(-114.5,-131.5);

	this.instance_1 = new lib.hero1_lips2_img();
	this.instance_1.setTransform(-114.5,-131.5);

	this.instance_2 = new lib.hero1_lips3_img();
	this.instance_2.setTransform(-114.5,-131.5);

	this.instance_3 = new lib.hero1_lips4_img();
	this.instance_3.setTransform(-114.5,-131.5);

	this.instance_4 = new lib.hero1_lips5_img();
	this.instance_4.setTransform(-114.5,-131.5);

	this.instance_5 = new lib.hero1_lips6_img();
	this.instance_5.setTransform(-114.5,-131.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.5,-131.5,229,263);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_head_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_head_img();
	this.instance.setTransform(-114.5,-131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.5,-131.5,229,263);
p.frameBounds = [rect];


(lib.hero1_hair_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-202,-57);

	this.instance_1 = new lib.hero1_hair2_img();
	this.instance_1.setTransform(-151,86);

	this.instance_2 = new lib.hero1_hair3_img();
	this.instance_2.setTransform(-183,31);

	this.instance_3 = new lib.hero1_hair4_img();
	this.instance_3.setTransform(-151,115);

	this.instance_4 = new lib.hero1_hair5_img();
	this.instance_4.setTransform(-145,-22);

	this.instance_5 = new lib.hero1_hair6_img();
	this.instance_5.setTransform(-128,56);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-202,-57,406,501);
p.frameBounds = [rect, new cjs.Rectangle(-151,86,304,170), new cjs.Rectangle(-183,31,381,427), new cjs.Rectangle(-151,115,302,133), new cjs.Rectangle(-145,-22,297,465), new cjs.Rectangle(-128,56,247,240)];


(lib.hero1_hair_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-202,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-202,-57,406,501);
p.frameBounds = [rect];


(lib.hero1_fringe_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_fringe1_img();
	this.instance.setTransform(-159.5,-129);

	this.instance_1 = new lib.hero1_fringe2_img();
	this.instance_1.setTransform(-158,-118);

	this.instance_2 = new lib.hero1_fringe3_img();
	this.instance_2.setTransform(-171,-124);

	this.instance_3 = new lib.hero1_fringe4_img();
	this.instance_3.setTransform(-193,-107);

	this.instance_4 = new lib.hero1_fringe5_img();
	this.instance_4.setTransform(-146,-148.9);

	this.instance_5 = new lib.hero1_fringe6_img();
	this.instance_5.setTransform(-143,-135.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-159.5,-129,319,258);
p.frameBounds = [rect, new cjs.Rectangle(-158,-118,310,249), new cjs.Rectangle(-171,-124,346,330), new cjs.Rectangle(-193,-107,381,258), new cjs.Rectangle(-146,-148.9,332,334), new cjs.Rectangle(-143,-135.9,292,346)];


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
	this.instance.setTransform(-159.5,-129);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-159.5,-129,319,258);
p.frameBounds = [rect];


(lib.hero1_eyes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_eyes1_img();
	this.instance.setTransform(-114.5,-131.5);

	this.instance_1 = new lib.hero1_eyes2_img();
	this.instance_1.setTransform(-114.5,-131.5);

	this.instance_2 = new lib.hero1_eyes3_img();
	this.instance_2.setTransform(-114.5,-131.5);

	this.instance_3 = new lib.hero1_eyes4_img();
	this.instance_3.setTransform(-114.5,-131.5);

	this.instance_4 = new lib.hero1_eyes5_img();
	this.instance_4.setTransform(-114.5,-131.5);

	this.instance_5 = new lib.hero1_eyes6_img();
	this.instance_5.setTransform(-114.5,-131.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.5,-131.5,229,263);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_eyes_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyes3_img();
	this.instance.setTransform(-114.5,-131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.5,-131.5,229,263);
p.frameBounds = [rect];


(lib.hero1_eyebrows_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_eyebrows1_img();
	this.instance.setTransform(-114.5,-131.5);

	this.instance_1 = new lib.hero1_eyebrows2_img();
	this.instance_1.setTransform(-114.5,-131.5);

	this.instance_2 = new lib.hero1_eyebrows3_img();
	this.instance_2.setTransform(-114.5,-131.5);

	this.instance_3 = new lib.hero1_eyebrows4_img();
	this.instance_3.setTransform(-114.5,-131.5);

	this.instance_4 = new lib.hero1_eyebrows5_img();
	this.instance_4.setTransform(-114.5,-131.5);

	this.instance_5 = new lib.hero1_eyebrows6_img();
	this.instance_5.setTransform(-114.5,-131.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.5,-131.5,229,263);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_eyebrows_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero1_eyebrows1_img();
	this.instance.setTransform(-114.5,-131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.5,-131.5,229,263);
p.frameBounds = [rect];


(lib.hero1_earrings9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings9_img();
	this.instance.setTransform(131.7,-47.2,1,1,0,0,180);

	this.instance_1 = new lib.hero1_earrings9_img();
	this.instance_1.setTransform(-131.7,-48.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-131.7,-48.7,263.5,97.5);
p.frameBounds = [rect];


(lib.hero1_earrings8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings8_img();
	this.instance.setTransform(129,-52.7,1,1,0,0,180);

	this.instance_1 = new lib.hero1_earrings8_img();
	this.instance_1.setTransform(-129,-53.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-129,-53.2,258,106.5);
p.frameBounds = [rect];


(lib.hero1_earrings7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings7_img();
	this.instance.setTransform(125,-48.7,1,1,0,0,180);

	this.instance_1 = new lib.hero1_earrings7_img();
	this.instance_1.setTransform(-125,-50.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-50.2,250,100.5);
p.frameBounds = [rect];


(lib.hero1_earrings6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings6_img();
	this.instance.setTransform(68.8,-51.4);

	this.instance_1 = new lib.hero1_earrings6_img();
	this.instance_1.setTransform(-120.8,-53.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120.8,-53.5,241.6,107.1);
p.frameBounds = [rect];


(lib.hero1_earrings5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings5_img();
	this.instance.setTransform(112.7,-46,1,1,0,0,180);

	this.instance_1 = new lib.hero1_earrings5_img();
	this.instance_1.setTransform(-112.7,-46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112.7,-46,225.5,92);
p.frameBounds = [rect];


(lib.hero1_earrings4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings4_img();
	this.instance.setTransform(127.5,-50,1,1,0,0,180);

	this.instance_1 = new lib.hero1_earrings4_img();
	this.instance_1.setTransform(-127.5,-51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-127.5,-51,255,102);
p.frameBounds = [rect];


(lib.hero1_earrings3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings3_img();
	this.instance.setTransform(70,-52);

	this.instance_1 = new lib.hero1_earrings3_img();
	this.instance_1.setTransform(-121,-52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121,-52,242,104);
p.frameBounds = [rect];


(lib.hero1_earrings2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings2_img();
	this.instance.setTransform(73.5,-53);

	this.instance_1 = new lib.hero1_earrings2_img();
	this.instance_1.setTransform(-118.5,-53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.5,-53,237,106);
p.frameBounds = [rect];


(lib.hero1_earrings1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_earrings1_img();
	this.instance.setTransform(112.5,-48.5,1,1,0,0,180);

	this.instance_1 = new lib.hero1_earrings1_img();
	this.instance_1.setTransform(-112.5,-46.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112.5,-48.5,225,97);
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
	this.instance = new lib.hero1_dress2_img();
	this.instance.setTransform(-123.4,-137.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.4,-137.5,238,286);
p.frameBounds = [rect];


(lib.hero1_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_dress1_img();
	this.instance.setTransform(-84.9,-135.5);

	this.instance_1 = new lib.hero1_dress2_img();
	this.instance_1.setTransform(-123.4,-137.5);

	this.instance_2 = new lib.hero1_dress3_img();
	this.instance_2.setTransform(-110.4,-136);

	this.instance_3 = new lib.hero1_dress4_img();
	this.instance_3.setTransform(-108.4,-136.5);

	this.instance_4 = new lib.hero1_dress5_img();
	this.instance_4.setTransform(-117.4,-136.5);

	this.instance_5 = new lib.hero1_dress6_img();
	this.instance_5.setTransform(-84.9,-133.5);

	this.instance_6 = new lib.hero1_dress7_img();
	this.instance_6.setTransform(-102.4,-133);

	this.instance_7 = new lib.hero1_dress8_img();
	this.instance_7.setTransform(-109.4,-133.5);

	this.instance_8 = new lib.hero1_dress9_img();
	this.instance_8.setTransform(-97,-137);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.9,-135.5,164,274);
p.frameBounds = [rect, new cjs.Rectangle(-123.4,-137.5,238,286), new cjs.Rectangle(-110.4,-136,212,276), new cjs.Rectangle(-108.4,-136.5,213,267), new cjs.Rectangle(-117.4,-136.5,232,291), new cjs.Rectangle(-84.9,-133.5,169,262), new cjs.Rectangle(-102.4,-133,196,284), new cjs.Rectangle(-109.4,-133.5,213,272), new cjs.Rectangle(-97,-137,186,289), null];


(lib.hero_2_body_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_body_img();
	this.instance.setTransform(-111,-167.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111,-167.5,222,335);
p.frameBounds = [rect];


(lib.hero_1_body_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero_1_body_img();
	this.instance.setTransform(-108,-152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108,-152.5,216,406);
p.frameBounds = [rect];


(lib.frame_top_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.frame_top_0_img();
	this.instance.setTransform(-120,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-110,240,220);
p.frameBounds = [rect];


(lib.frame_dress_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.frame_dress_0_img();
	this.instance.setTransform(-180,-230);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-230,360,460);
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


(lib.dust_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dust_2_img();
	this.instance.setTransform(-45,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-60,90,120);
p.frameBounds = [rect];


(lib.dust_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.dust_1_img();
	this.instance.setTransform(-10,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-115,320,130);
p.frameBounds = [rect];


(lib.decor_location_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_location_img();
	this.instance.setTransform(-190,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-210,380,420);
p.frameBounds = [rect];


(lib.current_top_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_top_0_img();
	this.instance.setTransform(-130,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.current_makeup_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_makeup_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.current_makeup_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_makeup_0_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.current_location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_1_img();
	this.instance.setTransform(-200,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-220,400,440);
p.frameBounds = [rect];


(lib.current_hair_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_hair_1_img();
	this.instance.setTransform(-170,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.current_hair_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_hair_0_img();
	this.instance.setTransform(-170,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.current_earrings_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_earrings_1_img();
	this.instance.setTransform(-90,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-85,180,170);
p.frameBounds = [rect];


(lib.current_earrings_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_earrings_0_img();
	this.instance.setTransform(-75,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-70,150,140);
p.frameBounds = [rect];


(lib.current_dress_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_dress_0_img();
	this.instance.setTransform(-190,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-240,380,480);
p.frameBounds = [rect];


(lib.current_beads_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_beads_1_img();
	this.instance.setTransform(-80,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-105,160,210);
p.frameBounds = [rect];


(lib.current_beads_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_beads_0_img();
	this.instance.setTransform(-65,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-90,130,180);
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


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-345,-105);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-345,-105);

	this.instance_2 = new lib.title_es_img();
	this.instance_2.setTransform(-345,-105);

	this.instance_3 = new lib.title_pt_img();
	this.instance_3.setTransform(-345,-105);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(2).to({_off:true},1).wait(2).to({_off:false},0).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-345,-105,690,210);
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


(lib.bg_top_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_top_0_img();
	this.instance.setTransform(-120,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A0SPnIAA/NMAolAAAIAAfNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.bg_dress_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_dress_0_img();
	this.instance.setTransform(-180,-230);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgZwAiXMAAAhEtMAzhAAAMAAABEtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-230,360,460);
p.frameBounds = [rect];


(lib.bag_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bag_3_2_img();
	this.instance.setTransform(-210,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-170,420,340);
p.frameBounds = [rect];


(lib.bag_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bag_3_1_img();
	this.instance.setTransform(-210,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-170,420,340);
p.frameBounds = [rect];


(lib.bag_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bag_2_2_img();
	this.instance.setTransform(-210,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-170,420,340);
p.frameBounds = [rect];


(lib.bag_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bag_2_1_img();
	this.instance.setTransform(-210,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-170,420,340);
p.frameBounds = [rect];


(lib.bag_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bag_1_2_img();
	this.instance.setTransform(-210,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-170,420,340);
p.frameBounds = [rect];


(lib.bag_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bag_1_1_img();
	this.instance.setTransform(-210,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-170,420,340);
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


(lib.anarchy_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.anarchy_img();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.curtain_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eh+jAwcMAAAhg2MD9GAAAMAAABg2g");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-410,-10,1620,620);
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
	this.instance.setTransform(-25,-25);

	this.instance_1 = new lib.gravity_explosion_2_img();
	this.instance_1.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect, rect];


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


(lib.blinking_light_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_1_3_img();
	this.instance.setTransform(-5,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-120,60,120);
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
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
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
	this.instance = new lib.wardrobe_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-260,440,520);
p.frameBounds = [rect];


(lib.wardrobe_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.wardrobe_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.98},39).to({scaleY:1},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-240,420,480);
p.frameBounds = [rect, new cjs.Rectangle(-210,-239.8,420,479.8), new cjs.Rectangle(-210,-239.7,420,479.5), new cjs.Rectangle(-210,-239.6,420,479.3), new cjs.Rectangle(-210,-239.4,420,479), new cjs.Rectangle(-210,-239.3,420,478.7), new cjs.Rectangle(-210,-239.2,420,478.5), new cjs.Rectangle(-210,-239.1,420,478.2), new cjs.Rectangle(-210,-238.9,420,478), new cjs.Rectangle(-210,-238.8,420,477.7), new cjs.Rectangle(-210,-238.7,420,477.5), new cjs.Rectangle(-210,-238.5,420,477.2), new cjs.Rectangle(-210,-238.4,420,476.9), new cjs.Rectangle(-210,-238.3,420,476.7), new cjs.Rectangle(-210,-238.2,420,476.4), new cjs.Rectangle(-210,-238,420,476.2), new cjs.Rectangle(-210,-237.9,420,475.9), new cjs.Rectangle(-210,-237.8,420,475.7), new cjs.Rectangle(-210,-237.6,420,475.4), new cjs.Rectangle(-210,-237.5,420,475.2), new cjs.Rectangle(-210,-237.4,420,474.9), new cjs.Rectangle(-210,-237.3,420,474.6), new cjs.Rectangle(-210,-237.1,420,474.4), new cjs.Rectangle(-210,-237,420,474.1), new cjs.Rectangle(-210,-236.9,420,473.9), new cjs.Rectangle(-210,-236.7,420,473.6), new cjs.Rectangle(-210,-236.6,420,473.4), new cjs.Rectangle(-210,-236.5,420,473.1), new cjs.Rectangle(-210,-236.4,420,472.8), new cjs.Rectangle(-210,-236.2,420,472.6), new cjs.Rectangle(-210,-236.1,420,472.3), new cjs.Rectangle(-210,-236,420,472.1), new cjs.Rectangle(-210,-235.8,420,471.8), new cjs.Rectangle(-210,-235.7,420,471.6), new cjs.Rectangle(-210,-235.6,420,471.3), new cjs.Rectangle(-210,-235.5,420,471.1), new cjs.Rectangle(-210,-235.3,420,470.8), new cjs.Rectangle(-210,-235.2,420,470.5), new cjs.Rectangle(-210,-235.1,420,470.3), new cjs.Rectangle(-210,-235,420,470), new cjs.Rectangle(-210,-235.1,420,470.3), new cjs.Rectangle(-210,-235.2,420,470.5), new cjs.Rectangle(-210,-235.3,420,470.8), new cjs.Rectangle(-210,-235.4,420,471), new cjs.Rectangle(-210,-235.6,420,471.3), new cjs.Rectangle(-210,-235.7,420,471.5), new cjs.Rectangle(-210,-235.8,420,471.8), new cjs.Rectangle(-210,-235.9,420,472), new cjs.Rectangle(-210,-236.1,420,472.3), new cjs.Rectangle(-210,-236.2,420,472.5), new cjs.Rectangle(-210,-236.3,420,472.8), new cjs.Rectangle(-210,-236.4,420,473), new cjs.Rectangle(-210,-236.6,420,473.3), new cjs.Rectangle(-210,-236.7,420,473.5), new cjs.Rectangle(-210,-236.8,420,473.8), new cjs.Rectangle(-210,-236.9,420,474), new cjs.Rectangle(-210,-237.1,420,474.3), new cjs.Rectangle(-210,-237.2,420,474.5), new cjs.Rectangle(-210,-237.3,420,474.8), new cjs.Rectangle(-210,-237.4,420,475), new cjs.Rectangle(-210,-237.6,420,475.3), new cjs.Rectangle(-210,-237.7,420,475.5), new cjs.Rectangle(-210,-237.8,420,475.8), new cjs.Rectangle(-210,-237.9,420,476), new cjs.Rectangle(-210,-238.1,420,476.3), new cjs.Rectangle(-210,-238.2,420,476.5), new cjs.Rectangle(-210,-238.3,420,476.8), new cjs.Rectangle(-210,-238.4,420,477), new cjs.Rectangle(-210,-238.6,420,477.3), new cjs.Rectangle(-210,-238.7,420,477.5), new cjs.Rectangle(-210,-238.8,420,477.8), new cjs.Rectangle(-210,-238.9,420,478), new cjs.Rectangle(-210,-239.1,420,478.3), new cjs.Rectangle(-210,-239.2,420,478.5), new cjs.Rectangle(-210,-239.3,420,478.8), new cjs.Rectangle(-210,-239.4,420,479), new cjs.Rectangle(-210,-239.6,420,479.3), new cjs.Rectangle(-210,-239.7,420,479.5), new cjs.Rectangle(-210,-239.8,420,479.8), new cjs.Rectangle(-210,-240,420,480)];


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
p.nominalBounds = rect = new cjs.Rectangle(-345,-105,690,210);
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
	this.substrate_mc.setTransform(0.1,0,0.6,0.6,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.piercing_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.6,0.6,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.lips_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.6,0.6,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
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


(lib.hero2_earrings_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_earrings1_mc();

	this.instance_1 = new lib.hero2_earrings2_mc();
	this.instance_1.setTransform(-0.2,-4);

	this.instance_2 = new lib.hero2_earrings3_mc();
	this.instance_2.setTransform(-0.9,-4);

	this.instance_3 = new lib.hero2_earrings4_mc();
	this.instance_3.setTransform(0.3,-7);

	this.instance_4 = new lib.hero2_earrings5_mc();
	this.instance_4.setTransform(0.8,-6.5);

	this.instance_5 = new lib.hero2_earrings6_mc();
	this.instance_5.setTransform(-0.4,-8);

	this.instance_6 = new lib.hero2_earrings7_mc();
	this.instance_6.setTransform(-1.4,-6.5);

	this.instance_7 = new lib.hero2_earrings8_mc();
	this.instance_7.setTransform(-1.2,-7.5);

	this.instance_8 = new lib.hero2_earrings9_mc();
	this.instance_8.setTransform(-0.4,-9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106.5,-50.5,213,101);
p.frameBounds = [rect, new cjs.Rectangle(-110.4,-49.5,220.5,91), new cjs.Rectangle(-106.4,-52,211,96), new cjs.Rectangle(-107.9,-50.5,216.5,87), new cjs.Rectangle(-108.4,-48.5,218.5,84), new cjs.Rectangle(-113.4,-50,226.1,84), new cjs.Rectangle(-115.9,-52,229,91), new cjs.Rectangle(-115.9,-52.5,229.5,90), new cjs.Rectangle(-113.9,-50.5,227,82), null];


(lib.hero2_earrings_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero2_earrings8_mc();
	this.instance.setTransform(-1.2,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115.9,-52.5,229.5,90);
p.frameBounds = [rect];


(lib.hero1_earrings_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_earrings1_mc();

	this.instance_1 = new lib.hero1_earrings2_mc();
	this.instance_1.setTransform(-0.4,6);

	this.instance_2 = new lib.hero1_earrings3_mc();
	this.instance_2.setTransform(-0.4,5);

	this.instance_3 = new lib.hero1_earrings4_mc();
	this.instance_3.setTransform(-0.9,6.5);

	this.instance_4 = new lib.hero1_earrings5_mc();
	this.instance_4.setTransform(-0.7,4);

	this.instance_5 = new lib.hero1_earrings6_mc();
	this.instance_5.setTransform(-1.1,8.5);

	this.instance_6 = new lib.hero1_earrings7_mc();
	this.instance_6.setTransform(-1.4,9.7);

	this.instance_7 = new lib.hero1_earrings8_mc();
	this.instance_7.setTransform(-0.9,13.2);

	this.instance_8 = new lib.hero1_earrings9_mc();
	this.instance_8.setTransform(-0.7,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112.5,-48.5,225,97);
p.frameBounds = [rect, new cjs.Rectangle(-118.9,-47,237,106), new cjs.Rectangle(-121.4,-47,242,104), new cjs.Rectangle(-128.4,-44.5,255,102), new cjs.Rectangle(-113.4,-42,225.5,92), new cjs.Rectangle(-121.9,-45,241.6,107.1), new cjs.Rectangle(-126.4,-40.5,250,100.5), new cjs.Rectangle(-129.9,-40,258,106.5), new cjs.Rectangle(-132.4,-49.5,263.5,97.5), null];


(lib.hero1_earrings_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.hero1_earrings7_mc();
	this.instance.setTransform(-1.4,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-126.4,-40.5,250,100.5);
p.frameBounds = [rect];


(lib.hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fringe
	this.fringe = new lib.hero2_fringe_all_mc();
	this.fringe.setTransform(-3.3,-182);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({rotation:-6.2,x:-19.8,y:-166.1},29).to({rotation:0,x:-3.3,y:-182},30).wait(1));

	// earrings
	this.earrings = new lib.hero2_earrings_mc();
	this.earrings.setTransform(-3.5,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({scaleY:1,skewX:-0.6,skewY:-6.2,x:-9.8,y:-35.4},29).to({scaleY:1,skewX:0,skewY:0,x:-3.5,y:-50.5},30).wait(1));

	// piercing
	this.piercing = new lib.hero2_piercing_mc();
	this.piercing.setTransform(-6,-156.4);

	this.timeline.addTween(cjs.Tween.get(this.piercing).to({rotation:-6.2,x:-19.7,y:-140.4},29).to({rotation:0,x:-6,y:-156.4},30).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero2_eyebrows_mc();
	this.eyebrows.setTransform(-6,-156.4);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).to({rotation:-6.2,x:-19.7,y:-140.4},29).to({rotation:0,x:-6,y:-156.4},30).wait(1));

	// eyes
	this.eyes = new lib.hero2_eyes_mc();
	this.eyes.setTransform(-6,-156.4);

	this.timeline.addTween(cjs.Tween.get(this.eyes).to({rotation:-6.2,x:-19.7,y:-140.4},29).to({rotation:0,x:-6,y:-156.4},30).wait(1));

	// shadows
	this.shadows = new lib.hero2_shadows_mc();
	this.shadows.setTransform(-6,-156.4);

	this.timeline.addTween(cjs.Tween.get(this.shadows).to({rotation:-6.2,x:-19.7,y:-140.4},29).to({rotation:0,x:-6,y:-156.4},30).wait(1));

	// lips
	this.lips = new lib.hero2_lips_mc();
	this.lips.setTransform(-6,-156.4);

	this.timeline.addTween(cjs.Tween.get(this.lips).to({rotation:-6.2,x:-19.7,y:-140.4},29).to({rotation:0,x:-6,y:-156.4},30).wait(1));

	// blush
	this.blush = new lib.hero2_rouge_mc();
	this.blush.setTransform(-6,-156.4);

	this.timeline.addTween(cjs.Tween.get(this.blush).to({rotation:-6.2,x:-19.7,y:-140.4},29).to({rotation:0,x:-6,y:-156.4},30).wait(1));

	// body
	this.instance = new lib.hero2_head_mc();
	this.instance.setTransform(-6,-156.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-6.2,x:-19.7,y:-140.4},29).to({rotation:0,x:-6,y:-156.4},30).wait(1));

	// top
	this.top = new lib.hero2_top_all_mc();
	this.top.setTransform(19.7,53.3);

	this.timeline.addTween(cjs.Tween.get(this.top).to({y:67.3},29).to({y:53.3},30).wait(1));

	// bottom
	this.bottom = new lib.hero2_skirt_all_mc();
	this.bottom.setTransform(-15,177.8);

	this.timeline.addTween(cjs.Tween.get(this.bottom).to({y:191.8},29).to({y:177.8},30).wait(1));

	// dress
	this.dress = new lib.hero2_dress_all_mc();
	this.dress.setTransform(0,103.4);

	this.timeline.addTween(cjs.Tween.get(this.dress).to({y:117.4},29).to({y:103.4},30).wait(1));

	// beads
	this.beads = new lib.hero2_necklace_all_mc();
	this.beads.setTransform(6.2,-7.9);

	this.timeline.addTween(cjs.Tween.get(this.beads).to({y:6.1},29).to({y:-7.9},30).wait(1));

	// body
	this.instance_1 = new lib.hero_2_body_mc();
	this.instance_1.setTransform(4,114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:128.5},29).to({y:114.5},30).wait(1));

	// hair
	this.hair = new lib.hero2_hair_all_mc();
	this.hair.setTransform(-3.3,-182);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({skewX:-4.4,skewY:-6.2,x:-18.8,y:-166.1},29).to({skewX:0,skewY:0,x:-3.3,y:-182},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-158.3,-309.5,310,591.5);
p.frameBounds = [rect, new cjs.Rectangle(-158.9,-309.1,310.3,591.6), new cjs.Rectangle(-160.1,-309.1,311.3,592.1), new cjs.Rectangle(-161.1,-309.2,312.4,592.7), new cjs.Rectangle(-162.3,-309.3,313.4,593.3), new cjs.Rectangle(-163.3,-309.4,314.5,593.8), new cjs.Rectangle(-164.4,-309.5,315.5,594.5), new cjs.Rectangle(-165.1,-309.1,315.8,594.6), new cjs.Rectangle(-166.2,-309.2,316.8,595.1), new cjs.Rectangle(-167.2,-309.3,317.8,595.7), new cjs.Rectangle(-168.4,-309.4,318.8,596.3), new cjs.Rectangle(-169.4,-309.4,319.9,596.8), new cjs.Rectangle(-170.5,-309.5,320.9,597.4), new cjs.Rectangle(-171.6,-309.6,321.9,597.9), new cjs.Rectangle(-172.2,-309.2,322.1,598), new cjs.Rectangle(-173.3,-309.3,323.1,598.6), new cjs.Rectangle(-174.4,-309.4,324.1,599.1), new cjs.Rectangle(-175.4,-309.4,325,599.7), new cjs.Rectangle(-176.5,-309.5,326.1,600.2), new cjs.Rectangle(-177.6,-309.6,327,600.8), new cjs.Rectangle(-178.6,-309.6,328,601.3), new cjs.Rectangle(-179.3,-309.2,328.2,601.4), new cjs.Rectangle(-180.3,-309.3,329.2,601.9), new cjs.Rectangle(-181.4,-309.3,330.2,602.5), new cjs.Rectangle(-182.4,-309.4,331,603), new cjs.Rectangle(-183.5,-309.4,332.1,603.5), new cjs.Rectangle(-184.5,-309.5,333,604.1), new cjs.Rectangle(-185.6,-309.5,334,604.6), new cjs.Rectangle(-186.3,-309.1,334.1,604.7), new cjs.Rectangle(-187.7,-309.6,335.8,605.6), new cjs.Rectangle(-186.3,-309.1,334.1,604.7), new cjs.Rectangle(-185.6,-309.4,334,604.5), new cjs.Rectangle(-184.6,-309.4,333,604.1), new cjs.Rectangle(-183.6,-309.3,332,603.5), new cjs.Rectangle(-182.6,-309.3,331.1,603), new cjs.Rectangle(-181.5,-309.2,330.2,602.4), new cjs.Rectangle(-180.8,-309.6,330,602.4), new cjs.Rectangle(-179.8,-309.5,329,601.8), new cjs.Rectangle(-178.8,-309.4,328.1,601.3), new cjs.Rectangle(-177.7,-309.3,327.1,600.7), new cjs.Rectangle(-176.7,-309.3,326.2,600.2), new cjs.Rectangle(-175.7,-309.3,325.2,599.7), new cjs.Rectangle(-175.1,-309.7,325,599.7), new cjs.Rectangle(-174,-309.5,324,599), new cjs.Rectangle(-173,-309.5,323,598.5), new cjs.Rectangle(-171.9,-309.4,322,598), new cjs.Rectangle(-170.9,-309.3,321,597.4), new cjs.Rectangle(-169.8,-309.2,320,596.8), new cjs.Rectangle(-169.2,-309.5,319.8,596.7), new cjs.Rectangle(-168.1,-309.4,318.8,596.1), new cjs.Rectangle(-167.1,-309.4,317.7,595.7), new cjs.Rectangle(-166,-309.3,316.7,595.1), new cjs.Rectangle(-164.9,-309.2,315.7,594.5), new cjs.Rectangle(-163.9,-309,314.6,593.9), new cjs.Rectangle(-163.2,-309.4,314.5,593.8), new cjs.Rectangle(-162.1,-309.3,313.4,593.2), new cjs.Rectangle(-161.1,-309.2,312.3,592.7), new cjs.Rectangle(-159.9,-309.2,311.3,592.2), new cjs.Rectangle(-158.9,-309.1,310.3,591.6), new cjs.Rectangle(-158.3,-309.5,310,591.5)];


(lib.hero_2_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero2_fringe_main_mc();
	this.instance.setTransform(-3.3,-182);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-6.2,x:-19.8,y:-171.1},29).to({rotation:0,x:-3.3,y:-182},30).wait(1));

	// animation
	this.instance_1 = new lib.hero2_earrings_main_mc();
	this.instance_1.setTransform(-3.5,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1,skewX:-0.6,skewY:-6.2,x:-9.8,y:-40.4},29).to({scaleY:1,skewX:0,skewY:0,x:-3.5,y:-50.5},30).wait(1));

	// animation
	this.instance_2 = new lib.hero2_piercing_main_mc();
	this.instance_2.setTransform(-6,-156.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-6.2,x:-19.7,y:-145.4},29).to({rotation:0,x:-6,y:-156.4},30).wait(1));

	// animation
	this.instance_3 = new lib.hero2_eyebrows_main_mc();
	this.instance_3.setTransform(-6,-156.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-6.2,x:-19.7,y:-145.4},29).to({rotation:0,x:-6,y:-156.4},30).wait(1));

	// animation
	this.instance_4 = new lib.hero2_eyes_main_mc();
	this.instance_4.setTransform(-6,-156.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-6.2,x:-19.7,y:-145.4},29).to({rotation:0,x:-6,y:-156.4},30).wait(1));

	// animation
	this.instance_5 = new lib.hero2_shadows_main_mc();
	this.instance_5.setTransform(-6,-156.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-6.2,x:-19.7,y:-145.4},29).to({rotation:0,x:-6,y:-156.4},30).wait(1));

	// animation
	this.instance_6 = new lib.hero2_lips_main_mc();
	this.instance_6.setTransform(-6,-156.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-6.2,x:-19.7,y:-145.4},29).to({rotation:0,x:-6,y:-156.4},30).wait(1));

	// animation
	this.instance_7 = new lib.hero2_rouge_main_mc();
	this.instance_7.setTransform(-6,-156.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-6.2,x:-19.7,y:-145.4},29).to({rotation:0,x:-6,y:-156.4},30).wait(1));

	// animation
	this.instance_8 = new lib.hero2_head_mc();
	this.instance_8.setTransform(-6,-156.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-6.2,x:-19.7,y:-145.4},29).to({rotation:0,x:-6,y:-156.4},30).wait(1));

	// animation
	this.instance_9 = new lib.hero2_dress_main_mc();
	this.instance_9.setTransform(0,103.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:112.4},29).to({y:103.4},30).wait(1));

	// animation
	this.instance_10 = new lib.hero2_necklace_main_mc();
	this.instance_10.setTransform(6.2,-7.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:1.1},29).to({y:-7.9},30).wait(1));

	// animation
	this.instance_11 = new lib.hero_2_body_mc();
	this.instance_11.setTransform(4,114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({y:123.5},29).to({y:114.5},30).wait(1));

	// animation
	this.instance_12 = new lib.hero2_hair_main_mc();
	this.instance_12.setTransform(-3.3,-182);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({skewX:-4.4,skewY:-6.2,x:-18.8,y:-171.1},29).to({skewX:0,skewY:0,x:-3.3,y:-182},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-221.3,-344,452,626);
p.frameBounds = [rect, new cjs.Rectangle(-221.9,-343.7,452.3,626.1), new cjs.Rectangle(-223.2,-344.4,453.7,627), new cjs.Rectangle(-224.4,-345,455,628), new cjs.Rectangle(-225.7,-345.6,456.3,628.9), new cjs.Rectangle(-226.9,-346.2,457.6,629.8), new cjs.Rectangle(-228.1,-346.8,458.9,630.7), new cjs.Rectangle(-228.9,-346.6,459.2,630.8), new cjs.Rectangle(-230.1,-347.2,460.5,631.8), new cjs.Rectangle(-231.3,-347.8,461.8,632.6), new cjs.Rectangle(-232.5,-348.4,463.1,633.5), new cjs.Rectangle(-233.7,-348.9,464.4,634.3), new cjs.Rectangle(-235,-349.5,465.6,635.3), new cjs.Rectangle(-236.2,-350.1,466.9,636.2), new cjs.Rectangle(-236.8,-349.9,467.2,636.3), new cjs.Rectangle(-238.1,-350.5,468.4,637.2), new cjs.Rectangle(-239.3,-351.1,469.6,638.1), new cjs.Rectangle(-240.4,-351.6,470.9,639), new cjs.Rectangle(-241.6,-352.2,472.1,639.9), new cjs.Rectangle(-242.8,-352.7,473.3,640.7), new cjs.Rectangle(-244,-353.3,474.5,641.6), new cjs.Rectangle(-244.7,-353.1,474.8,641.7), new cjs.Rectangle(-245.9,-353.7,475.9,642.6), new cjs.Rectangle(-247.1,-354.2,477.1,643.4), new cjs.Rectangle(-248.2,-354.8,478.3,644.3), new cjs.Rectangle(-249.4,-355.3,479.5,645.1), new cjs.Rectangle(-250.5,-355.9,480.6,646), new cjs.Rectangle(-251.7,-356.4,481.8,646.8), new cjs.Rectangle(-252.4,-356.2,482,647), new cjs.Rectangle(-254,-357.4,484.1,648.5), new cjs.Rectangle(-252.4,-356.2,482,647), new cjs.Rectangle(-251.7,-356.3,481.8,646.8), new cjs.Rectangle(-250.6,-355.9,480.7,646), new cjs.Rectangle(-249.4,-355.2,479.5,645.1), new cjs.Rectangle(-248.3,-354.8,478.3,644.3), new cjs.Rectangle(-247.2,-354.2,477.2,643.5), new cjs.Rectangle(-246.5,-354.3,476.9,643.3), new cjs.Rectangle(-245.4,-353.8,475.8,642.5), new cjs.Rectangle(-244.2,-353.3,474.5,641.6), new cjs.Rectangle(-243.1,-352.7,473.4,640.8), new cjs.Rectangle(-241.9,-352.1,472.2,639.8), new cjs.Rectangle(-240.7,-351.5,471,639), new cjs.Rectangle(-240,-351.7,470.7,638.9), new cjs.Rectangle(-238.8,-351.2,469.4,638), new cjs.Rectangle(-237.7,-350.6,468.3,637.1), new cjs.Rectangle(-236.5,-349.9,467,636.2), new cjs.Rectangle(-235.3,-349.5,465.8,635.4), new cjs.Rectangle(-234.2,-348.9,464.5,634.5), new cjs.Rectangle(-233.5,-349,464.3,634.4), new cjs.Rectangle(-232.3,-348.4,463,633.5), new cjs.Rectangle(-231.1,-347.8,461.7,632.5), new cjs.Rectangle(-229.9,-347.3,460.4,631.7), new cjs.Rectangle(-228.6,-346.7,459.2,630.8), new cjs.Rectangle(-227.5,-346,457.9,629.9), new cjs.Rectangle(-226.8,-346.2,457.6,629.8), new cjs.Rectangle(-225.6,-345.5,456.3,628.8), new cjs.Rectangle(-224.4,-345,454.9,627.9), new cjs.Rectangle(-223.2,-344.4,453.7,627), new cjs.Rectangle(-221.9,-343.8,452.3,626.1), new cjs.Rectangle(-221.3,-344,452,626)];


(lib.hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fringe
	this.fringe = new lib.hero1_fringe_mc();
	this.fringe.setTransform(0.5,-234);

	this.timeline.addTween(cjs.Tween.get(this.fringe).to({rotation:6.2,x:23.4,y:-246.4},29).to({rotation:0,x:0.5,y:-234},30).wait(1));

	// earrings
	this.earrings = new lib.hero1_earrings_mc();
	this.earrings.setTransform(1.5,-54);

	this.timeline.addTween(cjs.Tween.get(this.earrings).to({scaleY:1.01,skewX:-3.2,skewY:6.2,x:10.8,y:-67.4},29).to({scaleY:1,skewX:0,skewY:0,x:1.5,y:-54},30).wait(1));

	// piercing
	this.piercing = new lib.hero1_piercing_mc();
	this.piercing.setTransform(0,-148.7);

	this.timeline.addTween(cjs.Tween.get(this.piercing).to({rotation:6.2,x:13.6,y:-161.7},29).to({rotation:0,x:0,y:-148.7},30).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero1_eyebrows_mc();
	this.eyebrows.setTransform(0,-148.7);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).to({rotation:6.2,x:13.6,y:-161.7},29).to({rotation:0,x:0,y:-148.7},30).wait(1));

	// eyes
	this.eyes = new lib.hero1_eyes_mc();
	this.eyes.setTransform(0,-148.7);

	this.timeline.addTween(cjs.Tween.get(this.eyes).to({rotation:6.2,x:13.6,y:-161.7},29).to({rotation:0,x:0,y:-148.7},30).wait(1));

	// shadows
	this.shadows = new lib.hero1_shadows_mc();
	this.shadows.setTransform(0,-148.7);

	this.timeline.addTween(cjs.Tween.get(this.shadows).to({rotation:6.2,x:13.6,y:-161.7},29).to({rotation:0,x:0,y:-148.7},30).wait(1));

	// lips
	this.lips = new lib.hero1_lips_all_mc();
	this.lips.setTransform(0,-148.7);

	this.timeline.addTween(cjs.Tween.get(this.lips).to({rotation:6.2,x:13.6,y:-161.7},29).to({rotation:0,x:0,y:-148.7},30).wait(1));

	// blush
	this.blush = new lib.hero1_rouge_all_mc();
	this.blush.setTransform(0,-148.7);

	this.timeline.addTween(cjs.Tween.get(this.blush).to({rotation:6.2,x:13.6,y:-161.7},29).to({rotation:0,x:0,y:-148.7},30).wait(1));

	// body
	this.instance = new lib.hero1_head_mc();
	this.instance.setTransform(0,-148.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:6.2,x:13.6,y:-161.7},29).to({rotation:0,x:0,y:-148.7},30).wait(1));

	// beads
	this.beads = new lib.hero1_necklace_mc();
	this.beads.setTransform(0.5,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.beads).to({y:-14.3},29).to({y:-0.3},30).wait(1));

	// top
	this.top = new lib.hero1_top_all_mc();
	this.top.setTransform(0.2,56);

	this.timeline.addTween(cjs.Tween.get(this.top).to({y:42},29).to({y:56},30).wait(1));

	// bottom
	this.bottom = new lib.hero1_skirt_all_mc();
	this.bottom.setTransform(3.2,223.5);

	this.timeline.addTween(cjs.Tween.get(this.bottom).to({y:209.5},29).to({y:223.5},30).wait(1));

	// dress
	this.dress = new lib.hero1_dress_all_mc();
	this.dress.setTransform(4.5,134.9);

	this.timeline.addTween(cjs.Tween.get(this.dress).to({y:120.9},29).to({y:134.9},30).wait(1));

	// body
	this.instance_1 = new lib.hero_1_body_mc();
	this.instance_1.setTransform(1,123.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:109.8},29).to({y:123.8},30).wait(1));

	// hair
	this.hair = new lib.hero1_hair_mc();
	this.hair.setTransform(0.5,-234);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({rotation:3.8,x:23.4,y:-246.4},29).to({rotation:0,x:0.5,y:-234},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-201.5,-363,406,740.3);
p.frameBounds = [rect, new cjs.Rectangle(-200.9,-363.5,406.3,740.4), new cjs.Rectangle(-201.8,-364.6,408.2,741), new cjs.Rectangle(-201.3,-365.7,408.5,741.6), new cjs.Rectangle(-202.2,-366.8,410.4,742.2), new cjs.Rectangle(-201.7,-367.9,410.7,742.8), new cjs.Rectangle(-202.5,-369,412.6,743.5), new cjs.Rectangle(-202,-370.1,412.9,744), new cjs.Rectangle(-202.9,-370.7,414.7,744.2), new cjs.Rectangle(-202.4,-371.7,415,744.7), new cjs.Rectangle(-203.2,-372.8,416.9,745.3), new cjs.Rectangle(-202.7,-373.9,417.2,745.9), new cjs.Rectangle(-203.6,-375,419.1,746.5), new cjs.Rectangle(-203.1,-376.1,419.3,747.1), new cjs.Rectangle(-204,-377.1,421.2,747.7), new cjs.Rectangle(-203.4,-377.7,421.5,747.8), new cjs.Rectangle(-204.3,-378.7,423.4,748.4), new cjs.Rectangle(-203.8,-379.8,423.6,749), new cjs.Rectangle(-204.7,-380.9,425.5,749.6), new cjs.Rectangle(-204.1,-381.9,425.7,750.1), new cjs.Rectangle(-205,-383,427.6,750.7), new cjs.Rectangle(-204.4,-384,427.9,751.2), new cjs.Rectangle(-205.3,-384.6,429.7,751.3), new cjs.Rectangle(-204.8,-385.7,430,751.9), new cjs.Rectangle(-205.6,-386.7,431.8,752.5), new cjs.Rectangle(-205.1,-387.8,432.1,753.1), new cjs.Rectangle(-205.9,-388.8,433.9,753.6), new cjs.Rectangle(-205.4,-389.9,434.2,754.2), new cjs.Rectangle(-206.3,-390.9,436,754.7), new cjs.Rectangle(-207.2,-392,437.9,755.4), new cjs.Rectangle(-206.2,-390.9,436,754.7), new cjs.Rectangle(-206.7,-389.8,435.8,754.1), new cjs.Rectangle(-205.9,-388.8,434,753.6), new cjs.Rectangle(-206.4,-387.9,433.7,753.1), new cjs.Rectangle(-205.5,-386.8,431.9,752.5), new cjs.Rectangle(-206,-385.7,431.6,751.9), new cjs.Rectangle(-205.1,-385.3,429.8,751.9), new cjs.Rectangle(-205.7,-384.2,429.5,751.3), new cjs.Rectangle(-204.8,-383.1,427.7,750.7), new cjs.Rectangle(-205.3,-382.1,427.4,750.1), new cjs.Rectangle(-204.4,-381.1,425.6,749.6), new cjs.Rectangle(-204.9,-380,425.3,749), new cjs.Rectangle(-204,-379.5,423.5,748.9), new cjs.Rectangle(-204.6,-378.4,423.2,748.3), new cjs.Rectangle(-203.6,-377.4,421.3,747.7), new cjs.Rectangle(-204.2,-376.3,421.1,747.1), new cjs.Rectangle(-203.3,-375.3,419.2,746.6), new cjs.Rectangle(-203.8,-374.2,418.9,746), new cjs.Rectangle(-202.8,-373.6,417.1,745.8), new cjs.Rectangle(-203.4,-372.6,416.8,745.3), new cjs.Rectangle(-202.5,-371.5,414.9,744.7), new cjs.Rectangle(-203.1,-370.5,414.7,744.1), new cjs.Rectangle(-202.1,-369.4,412.8,743.5), new cjs.Rectangle(-202.6,-368.3,412.5,742.9), new cjs.Rectangle(-201.7,-367.7,410.6,742.7), new cjs.Rectangle(-202.2,-366.7,410.3,742.2), new cjs.Rectangle(-201.3,-365.6,408.5,741.6), new cjs.Rectangle(-201.8,-364.6,408.2,741), new cjs.Rectangle(-200.9,-363.5,406.3,740.4), new cjs.Rectangle(-201.5,-363,406,740.3)];


(lib.hero_1_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero1_fringe_main_mc();
	this.instance.setTransform(0.5,-234);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:6.2,x:23.4,y:-236.4},29).to({rotation:0,x:0.5,y:-234},30).wait(1));

	// animation
	this.instance_1 = new lib.hero1_earrings_main_mc();
	this.instance_1.setTransform(1.5,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1.01,skewX:-3.2,skewY:6.2,x:10.8,y:-57.4},29).to({scaleY:1,skewX:0,skewY:0,x:1.5,y:-54},30).wait(1));

	// animation
	this.instance_2 = new lib.hero1_piercing_main_mc();
	this.instance_2.setTransform(0,-148.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:6.2,x:13.6,y:-151.7},29).to({rotation:0,x:0,y:-148.7},30).wait(1));

	// animation
	this.instance_3 = new lib.hero1_eyebrows_main_mc();
	this.instance_3.setTransform(0,-148.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:6.2,x:13.6,y:-151.7},29).to({rotation:0,x:0,y:-148.7},30).wait(1));

	// animation
	this.instance_4 = new lib.hero1_eyes_main_mc();
	this.instance_4.setTransform(0,-148.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:6.2,x:13.6,y:-151.7},29).to({rotation:0,x:0,y:-148.7},30).wait(1));

	// animation
	this.instance_5 = new lib.hero1_shadows_main_mc();
	this.instance_5.setTransform(0,-148.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:6.2,x:13.6,y:-151.7},29).to({rotation:0,x:0,y:-148.7},30).wait(1));

	// animation
	this.instance_6 = new lib.hero1_lips_main_mc();
	this.instance_6.setTransform(0,-148.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:6.2,x:13.6,y:-151.7},29).to({rotation:0,x:0,y:-148.7},30).wait(1));

	// animation
	this.instance_7 = new lib.hero1_rouge_main_mc();
	this.instance_7.setTransform(0,-148.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:6.2,x:13.6,y:-151.7},29).to({rotation:0,x:0,y:-148.7},30).wait(1));

	// animation
	this.instance_8 = new lib.hero1_head_mc();
	this.instance_8.setTransform(0,-148.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:6.2,x:13.6,y:-151.7},29).to({rotation:0,x:0,y:-148.7},30).wait(1));

	// animation
	this.instance_9 = new lib.hero1_necklace_main_mc();
	this.instance_9.setTransform(0.5,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:-4.3},29).to({y:-0.3},30).wait(1));

	// animation
	this.instance_10 = new lib.hero1_dress_main_mc();
	this.instance_10.setTransform(4.5,134.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:130.9},29).to({y:134.9},30).wait(1));

	// animation
	this.instance_11 = new lib.hero_1_body_mc();
	this.instance_11.setTransform(1,123.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({y:119.8},29).to({y:123.8},30).wait(1));

	// animation
	this.instance_12 = new lib.hero1_hair_main_mc();
	this.instance_12.setTransform(0.5,-234);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({rotation:3.8,x:23.4,y:-236.4},29).to({rotation:0,x:0.5,y:-234},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-201.5,-363,406,740.3);
p.frameBounds = [rect, new cjs.Rectangle(-200.9,-363.2,406.3,740.3), new cjs.Rectangle(-201.8,-363.9,408.2,741), new cjs.Rectangle(-201.3,-364.7,408.5,741.6), new cjs.Rectangle(-202.2,-365.4,410.4,742.2), new cjs.Rectangle(-201.7,-366.2,410.7,742.8), new cjs.Rectangle(-202.5,-366.9,412.6,743.4), new cjs.Rectangle(-202,-367.7,412.9,744.1), new cjs.Rectangle(-202.9,-367.9,414.7,744.1), new cjs.Rectangle(-202.4,-368.6,415,744.7), new cjs.Rectangle(-203.2,-369.4,416.9,745.3), new cjs.Rectangle(-202.7,-370.1,417.2,746), new cjs.Rectangle(-203.6,-370.8,419.1,746.5), new cjs.Rectangle(-203.1,-371.6,419.3,747.1), new cjs.Rectangle(-204,-372.3,421.2,747.7), new cjs.Rectangle(-203.4,-372.5,421.5,747.8), new cjs.Rectangle(-204.3,-373.2,423.4,748.4), new cjs.Rectangle(-203.8,-374,423.6,749), new cjs.Rectangle(-204.7,-374.7,425.5,749.5), new cjs.Rectangle(-204.1,-375.4,425.7,750.1), new cjs.Rectangle(-205,-376.1,427.6,750.7), new cjs.Rectangle(-204.4,-376.8,427.9,751.2), new cjs.Rectangle(-205.3,-377,429.7,751.3), new cjs.Rectangle(-204.8,-377.8,430,752), new cjs.Rectangle(-205.6,-378.5,431.8,752.5), new cjs.Rectangle(-205.1,-379.1,432.1,753), new cjs.Rectangle(-205.9,-379.9,433.9,753.6), new cjs.Rectangle(-205.4,-380.6,434.2,754.2), new cjs.Rectangle(-206.3,-381.2,436,754.7), new cjs.Rectangle(-207.2,-382,437.9,755.4), new cjs.Rectangle(-206.3,-381.2,436,754.7), new cjs.Rectangle(-206.8,-380.6,435.8,754.2), new cjs.Rectangle(-205.9,-379.8,434,753.6), new cjs.Rectangle(-206.4,-379.2,433.7,753.1), new cjs.Rectangle(-205.5,-378.5,431.9,752.5), new cjs.Rectangle(-206.1,-377.7,431.6,751.9), new cjs.Rectangle(-205.2,-377.6,429.8,751.9), new cjs.Rectangle(-205.7,-376.9,429.5,751.3), new cjs.Rectangle(-204.8,-376.2,427.7,750.7), new cjs.Rectangle(-205.4,-375.5,427.4,750.2), new cjs.Rectangle(-204.4,-374.8,425.6,749.6), new cjs.Rectangle(-205,-374,425.3,749), new cjs.Rectangle(-204.1,-373.8,423.5,748.9), new cjs.Rectangle(-204.6,-373.1,423.2,748.3), new cjs.Rectangle(-203.7,-372.4,421.3,747.7), new cjs.Rectangle(-204.2,-371.7,421.1,747.2), new cjs.Rectangle(-203.3,-371,419.2,746.6), new cjs.Rectangle(-203.9,-370.3,418.9,746), new cjs.Rectangle(-202.9,-370,417.1,745.9), new cjs.Rectangle(-203.4,-369.2,416.8,745.2), new cjs.Rectangle(-202.5,-368.6,414.9,744.7), new cjs.Rectangle(-203.1,-367.8,414.7,744.1), new cjs.Rectangle(-202.1,-367.1,412.8,743.5), new cjs.Rectangle(-202.7,-366.4,412.5,742.9), new cjs.Rectangle(-201.8,-366.1,410.6,742.8), new cjs.Rectangle(-202.2,-365.4,410.3,742.2), new cjs.Rectangle(-201.4,-364.6,408.5,741.6), new cjs.Rectangle(-201.8,-363.9,408.2,741), new cjs.Rectangle(-200.9,-363.2,406.3,740.3), new cjs.Rectangle(-201.5,-363,406,740.3)];


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


(lib.eyes_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.6,0.6,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.earrings_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.6,0.6,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.dust_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// animation
	this.instance = new lib.dust_2_mc();
	this.instance.setTransform(280,-70,0.833,0.833);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({scaleX:1,scaleY:1,x:310,y:-80,alpha:0.602},5).to({scaleX:0.75,scaleY:0.75,x:340,y:-85,alpha:0.012},7).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.dust_1_mc();
	this.instance_1.setTransform(0,0,0.625,0.625);
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,alpha:0.602},11).to({scaleX:0.81,scaleY:0.81,x:50,alpha:0.012},7).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-6.2,-71.8,200,81.3);
p.frameBounds = [rect, new cjs.Rectangle(-6.5,-75.7,210.9,85.7), new cjs.Rectangle(-6.9,-79.7,221.8,90.1), new cjs.Rectangle(-7.2,-83.6,232.7,94.6), new cjs.Rectangle(-7.6,-87.5,243.7,99), new cjs.Rectangle(-7.9,-91.4,254.6,103.4), new cjs.Rectangle(-8.2,-120,325.8,132.5), new cjs.Rectangle(-8.6,-123.9,333.6,136.9), new cjs.Rectangle(-8.9,-127.9,341.5,141.5), new cjs.Rectangle(-9.3,-131.9,349.3,145.9), new cjs.Rectangle(-9.6,-135.9,357.1,150.4), new cjs.Rectangle(-10,-140,365,155), new cjs.Rectangle(-2.5,-138.5,360.3,153.2), new cjs.Rectangle(4.8,-137.1,355.5,151.4), new cjs.Rectangle(12.3,-135.7,350.8,149.5), new cjs.Rectangle(19.6,-134.2,346.1,147.7), new cjs.Rectangle(27,-132.8,341.4,145.8), new cjs.Rectangle(34.5,-131.4,336.6,144.1), new cjs.Rectangle(41.9,-130,331.9,142.2), null];


(lib.current_top_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_top_0_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.301},29).to({alpha:0.602},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.current_makeup_0_mc();

	this.instance_1 = new lib.current_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, rect];


(lib.current_hair_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_hair_2_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.301},29).to({alpha:0.602},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_earrings_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_earrings_2_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.301},19).to({alpha:0.602},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-85,180,170);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_dress_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_dress_0_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.301},29).to({alpha:0.602},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-240,380,480);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.current_beads_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_beads_2_mc();
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.301},19).to({alpha:0.602},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-105,160,210);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.blush_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.blush_6_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.blush_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.blush_6_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.blush_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.blush_5_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.blush_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.blush_5_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.blush_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.blush_4_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.blush_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.blush_4_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.blush_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.blush_3_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.blush_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.blush_3_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.blush_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.blush_2_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.blush_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.blush_2_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.blush_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.blush_1_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.blush_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.blush_1_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.blush_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.6,0.6,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.beads_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.6,0.6,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.bag_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.bag_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// animation
	this.instance_1 = new lib.bag_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// animation
	this.instance_2 = new lib.bag_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-170,420,340);
p.frameBounds = [rect];


(lib.bag_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.bag_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// animation
	this.instance_1 = new lib.bag_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// animation
	this.instance_2 = new lib.bag_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-170,420,340);
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


(lib.animation_current_location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.current_location_1_mc();
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},39).to({alpha:0.102},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-220,400,440);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_circles_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		///* this.stop();
		//this.mouseChildren = false;
		//this.mouseEnabled = false;*/
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


(lib.curtain_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.pacifism_mc();
	this.instance.setTransform(600,440);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.curtain_2_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.curtain_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.anarchy_mc();
	this.instance.setTransform(150,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.curtain_1_img();
	this.instance_1.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,0,1600,600);
p.frameBounds = [rect];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:29,end:59});

	// animation
	this.instance = new lib.curtain_2_mc();
	this.instance.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:900,y:0},0).to({x:400},8).to({x:0},10).wait(20).to({x:900},19).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.curtain_1_mc();
	this.instance_1.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-900,y:0},0).to({x:-400},8).to({x:0},10).wait(20).to({x:-900},19).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.curtain_3_mc();
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({alpha:1},5).wait(20).to({alpha:0.012},5).to({_off:true},1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,600,1600,600);
p.frameBounds = [rect, new cjs.Rectangle(-1300,0,3400,600), new cjs.Rectangle(-1237.5,0,3275,600), new cjs.Rectangle(-1175,0,3150,600), new cjs.Rectangle(-1112.5,0,3025,600), new cjs.Rectangle(-1050,0,2900,600), new cjs.Rectangle(-987.5,0,2775,600), new cjs.Rectangle(-925,0,2650,600), new cjs.Rectangle(-862.5,0,2525,600), new cjs.Rectangle(-800,0,2400,600), new cjs.Rectangle(-760,0,2320,600), new cjs.Rectangle(-720,0,2240,600), new cjs.Rectangle(-680,0,2160,600), new cjs.Rectangle(-640,0,2080,600), new cjs.Rectangle(-600,-10,2000,620), new cjs.Rectangle(-560,-10,1920,620), new cjs.Rectangle(-520,-10,1840,620), new cjs.Rectangle(-480,-10,1760,620), new cjs.Rectangle(-440,-10,1680,620), rect=new cjs.Rectangle(-410,-10,1620,620), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-447.3,-10,1694.7,620), new cjs.Rectangle(-494.7,-10,1789.5,620), new cjs.Rectangle(-542.1,-10,1884.2,620), new cjs.Rectangle(-589.4,-10,1978.9,620), new cjs.Rectangle(-636.8,-10,2073.7,620), new cjs.Rectangle(-684.2,0,2168.4,600), new cjs.Rectangle(-731.6,0,2263.2,600), new cjs.Rectangle(-778.9,0,2357.9,600), new cjs.Rectangle(-826.3,0,2452.6,600), new cjs.Rectangle(-873.7,0,2547.4,600), new cjs.Rectangle(-921,0,2642.1,600), new cjs.Rectangle(-968.4,0,2736.8,600), new cjs.Rectangle(-1015.8,0,2831.6,600), new cjs.Rectangle(-1063.1,0,2926.3,600), new cjs.Rectangle(-1110.5,0,3021.1,600), new cjs.Rectangle(-1157.9,0,3115.8,600), new cjs.Rectangle(-1205.2,0,3210.5,600), new cjs.Rectangle(-1252.6,0,3305.3,600), new cjs.Rectangle(-1300,0,3400,600), null];


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
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect];


(lib.glitter_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.glitter_1_2_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},4).to({scaleX:0.6,scaleY:0.6},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect, new cjs.Rectangle(-21.2,-21.2,42.5,42.5), new cjs.Rectangle(-22.4,-22.4,45,45), new cjs.Rectangle(-23.7,-23.7,47.5,47.5), new cjs.Rectangle(-25,-25,50,50), new cjs.Rectangle(-23.8,-23.8,47.8,47.8), new cjs.Rectangle(-22.7,-22.7,45.6,45.6), new cjs.Rectangle(-21.6,-21.6,43.3,43.3), new cjs.Rectangle(-20.5,-20.5,41.1,41.1), new cjs.Rectangle(-19.4,-19.4,38.9,38.9), new cjs.Rectangle(-18.3,-18.3,36.7,36.7), new cjs.Rectangle(-17.2,-17.2,34.5,34.5), new cjs.Rectangle(-16.1,-16.1,32.2,32.2), new cjs.Rectangle(-15,-15,30,30)];


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
	this.body_mc = new lib.glitter_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
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
	this.instance.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.012},14).to({scaleX:1,scaleY:1,alpha:0.398},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
p.frameBounds = [rect, new cjs.Rectangle(-24.6,-24.6,49.3,49.3), new cjs.Rectangle(-24.2,-24.2,48.6,48.6), new cjs.Rectangle(-23.9,-23.9,47.8,47.8), new cjs.Rectangle(-23.5,-23.5,47.2,47.2), new cjs.Rectangle(-23.2,-23.2,46.5,46.5), new cjs.Rectangle(-22.8,-22.8,45.7,45.7), new cjs.Rectangle(-22.5,-22.5,45,45), new cjs.Rectangle(-22.1,-22.1,44.3,44.3), new cjs.Rectangle(-21.7,-21.7,43.6,43.6), new cjs.Rectangle(-21.4,-21.4,42.8,42.8), new cjs.Rectangle(-21,-21,42.2,42.2), new cjs.Rectangle(-20.7,-20.7,41.5,41.5), new cjs.Rectangle(-20.3,-20.3,40.7,40.7), new cjs.Rectangle(-20,-20,40,40), new cjs.Rectangle(-20.3,-20.3,40.7,40.7), new cjs.Rectangle(-20.6,-20.6,41.3,41.3), new cjs.Rectangle(-20.9,-20.9,42,42), new cjs.Rectangle(-21.3,-21.3,42.7,42.7), new cjs.Rectangle(-21.6,-21.6,43.3,43.3), new cjs.Rectangle(-21.9,-21.9,44,44), new cjs.Rectangle(-22.3,-22.3,44.7,44.7), new cjs.Rectangle(-22.6,-22.6,45.3,45.3), new cjs.Rectangle(-22.9,-22.9,46,46), new cjs.Rectangle(-23.3,-23.3,46.7,46.7), new cjs.Rectangle(-23.6,-23.6,47.3,47.3), new cjs.Rectangle(-23.9,-23.9,48,48), new cjs.Rectangle(-24.3,-24.3,48.7,48.7), new cjs.Rectangle(-24.6,-24.6,49.3,49.3), new cjs.Rectangle(-25,-25,50,50)];


(lib.blinking_light_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_light_1_3_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.012},14).to({scaleX:1,scaleY:1,alpha:0.801},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-120,60,120);
p.frameBounds = [rect, new cjs.Rectangle(-4.9,-118.2,59.2,118.3), new cjs.Rectangle(-4.8,-116.5,58.3,116.6), new cjs.Rectangle(-4.7,-114.8,57.5,114.9), new cjs.Rectangle(-4.7,-113.1,56.6,113.2), new cjs.Rectangle(-4.6,-111.4,55.7,111.5), new cjs.Rectangle(-4.5,-109.7,54.9,109.7), new cjs.Rectangle(-4.5,-108,54,108), new cjs.Rectangle(-4.4,-106.2,53.2,106.3), new cjs.Rectangle(-4.3,-104.5,52.3,104.6), new cjs.Rectangle(-4.2,-102.8,51.5,102.9), new cjs.Rectangle(-4.2,-101.1,50.6,101.1), new cjs.Rectangle(-4.1,-99.4,49.7,99.5), new cjs.Rectangle(-4,-97.7,48.8,97.7), new cjs.Rectangle(-4,-96,48,96), new cjs.Rectangle(-4,-97.5,48.8,97.6), new cjs.Rectangle(-4.1,-99.1,49.6,99.2), new cjs.Rectangle(-4.1,-100.7,50.4,100.8), new cjs.Rectangle(-4.2,-102.3,51.2,102.4), new cjs.Rectangle(-4.3,-103.9,52,104), new cjs.Rectangle(-4.3,-105.5,52.8,105.6), new cjs.Rectangle(-4.4,-107.1,53.6,107.2), new cjs.Rectangle(-4.5,-108.7,54.4,108.8), new cjs.Rectangle(-4.5,-110.3,55.2,110.4), new cjs.Rectangle(-4.6,-111.9,56,112), new cjs.Rectangle(-4.7,-113.5,56.8,113.6), new cjs.Rectangle(-4.7,-115.1,57.6,115.2), new cjs.Rectangle(-4.8,-116.7,58.4,116.8), new cjs.Rectangle(-4.9,-118.3,59.2,118.4), new cjs.Rectangle(-5,-120,60,120)];


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({scaleX:0.92,scaleY:0.92,x:-5},10).to({scaleX:1,scaleY:1,x:4},20).to({x:0},10).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGoQiwiwAAj4QAAj3CwiwQCwiwD3AAQD4AACwCwQCwCwAAD3QAAD4iwCwQiwCwj4AAQj3AAiwiwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-60,-60,120.5,120), new cjs.Rectangle(-60,-60,121.2,120), new cjs.Rectangle(-60,-60,121.9,120), new cjs.Rectangle(-60,-60,122.6,120), new cjs.Rectangle(-60,-60,123.3,120), new cjs.Rectangle(-60,-60,124,120), new cjs.Rectangle(-60,-60,123.6,120), new cjs.Rectangle(-60,-60,123.2,120), new cjs.Rectangle(-60,-60,122.8,120), new cjs.Rectangle(-60,-60,122.4,120), new cjs.Rectangle(-60,-60,122,120), new cjs.Rectangle(-60,-60,121.6,120), new cjs.Rectangle(-60,-60,121.2,120), new cjs.Rectangle(-60,-60,120.8,120), new cjs.Rectangle(-60,-60,120.4,120), new cjs.Rectangle(-60,-60,120,120)];


(lib.nav_anim_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({scaleX:0.92,scaleY:0.92,x:-5},10).to({scaleX:1,scaleY:1,x:4},20).to({x:0},10).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGoQiwiwAAj4QAAj3CwiwQCwiwD3AAQD4AACwCwQCwCwAAD3QAAD4iwCwQiwCwj4AAQj3AAiwiwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-60,-60,120.5,120), new cjs.Rectangle(-60,-60,121.2,120), new cjs.Rectangle(-60,-60,121.9,120), new cjs.Rectangle(-60,-60,122.6,120), new cjs.Rectangle(-60,-60,123.3,120), new cjs.Rectangle(-60,-60,124,120), new cjs.Rectangle(-60,-60,123.6,120), new cjs.Rectangle(-60,-60,123.2,120), new cjs.Rectangle(-60,-60,122.8,120), new cjs.Rectangle(-60,-60,122.4,120), new cjs.Rectangle(-60,-60,122,120), new cjs.Rectangle(-60,-60,121.6,120), new cjs.Rectangle(-60,-60,121.2,120), new cjs.Rectangle(-60,-60,120.8,120), new cjs.Rectangle(-60,-60,120.4,120), new cjs.Rectangle(-60,-60,120,120)];


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


(lib.shadows_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.shadows_6_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.shadows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.shadows_6_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.shadows_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.shadows_5_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.shadows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.shadows_5_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.shadows_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.shadows_4_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.shadows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.shadows_4_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.shadows_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.shadows_3_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.shadows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.shadows_3_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.shadows_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.shadows_2_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.shadows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.shadows_2_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.shadows_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.shadows_1_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.shadows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.shadows_1_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
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


(lib.piercing_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.piercing_6_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.piercing_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.piercing_6_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.piercing_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.piercing_5_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.piercing_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.piercing_5_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.piercing_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.piercing_4_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.piercing_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.piercing_4_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.piercing_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.piercing_3_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.piercing_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.piercing_3_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.piercing_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.piercing_2_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.piercing_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.piercing_2_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.piercing_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.piercing_1_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.piercing_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.piercing_1_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.location_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_6_img();
	this.instance.setTransform(-190,-210);

	this.instance_1 = new lib.location_1_6_img();
	this.instance_1.setTransform(-190,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_mc();

	this.instance_3 = new lib.animation_current_location_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgcHAgzMAAAhBlMA4PAAAMAAABBlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-210,380,420);
p.frameBounds = [rect, new cjs.Rectangle(-200,-220,400,440), new cjs.Rectangle(-190,-210,380,420)];


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_5_img();
	this.instance.setTransform(-190,-210);

	this.instance_1 = new lib.location_1_5_img();
	this.instance_1.setTransform(-190,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_mc();

	this.instance_3 = new lib.animation_current_location_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgcHAgzMAAAhBlMA4PAAAMAAABBlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-210,380,420);
p.frameBounds = [rect, new cjs.Rectangle(-200,-220,400,440), new cjs.Rectangle(-190,-210,380,420)];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_4_img();
	this.instance.setTransform(-190,-210);

	this.instance_1 = new lib.location_1_4_img();
	this.instance_1.setTransform(-190,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_mc();

	this.instance_3 = new lib.animation_current_location_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgcHAgzMAAAhBlMA4PAAAMAAABBlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-210,380,420);
p.frameBounds = [rect, new cjs.Rectangle(-200,-220,400,440), new cjs.Rectangle(-190,-210,380,420)];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_3_img();
	this.instance.setTransform(-190,-210);

	this.instance_1 = new lib.location_1_3_img();
	this.instance_1.setTransform(-190,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_mc();

	this.instance_3 = new lib.animation_current_location_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgcHAgzMAAAhBlMA4PAAAMAAABBlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-210,380,420);
p.frameBounds = [rect, new cjs.Rectangle(-200,-220,400,440), new cjs.Rectangle(-190,-210,380,420)];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_2_img();
	this.instance.setTransform(-190,-210);

	this.instance_1 = new lib.location_1_2_img();
	this.instance_1.setTransform(-190,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_mc();

	this.instance_3 = new lib.animation_current_location_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgcHAgzMAAAhBlMA4PAAAMAAABBlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-210,380,420);
p.frameBounds = [rect, new cjs.Rectangle(-200,-220,400,440), new cjs.Rectangle(-190,-210,380,420)];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_1_img();
	this.instance.setTransform(-190,-210);

	this.instance_1 = new lib.location_1_1_img();
	this.instance_1.setTransform(-190,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.decor_location_mc();

	this.instance_3 = new lib.animation_current_location_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgcHAgzMAAAhBlMA4PAAAMAAABBlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-210,380,420);
p.frameBounds = [rect, new cjs.Rectangle(-200,-220,400,440), new cjs.Rectangle(-190,-210,380,420)];


(lib.lips_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.lips_6_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.lips_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.lips_6_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.lips_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.lips_5_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.lips_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.lips_5_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.lips_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.lips_4_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.lips_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.lips_4_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.lips_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.lips_3_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.lips_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.lips_3_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.lips_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.lips_2_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.lips_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.lips_2_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.lips_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.lips_1_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.lips_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.lips_1_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
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
	this.hero_1.setTransform(540,330);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:400},0).wait(1).to({y:1400},0).wait(1).to({x:260,y:330},0).wait(1).to({x:400,y:1400},0).wait(1).to({y:330},0).wait(1).to({x:540},0).wait(1).to({x:400},0).wait(1).to({y:1400},0).wait(1).to({x:260,y:330},0).wait(1).to({x:400,y:1400},0).wait(1).to({y:330},0).wait(1));

	// hero_2
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(220,330);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:400,y:1400},0).wait(1).to({y:330},0).wait(1).to({x:580},0).wait(1).to({x:400},0).wait(1).to({y:1400},0).wait(1).to({x:220,y:330},0).wait(1).to({x:400,y:1400},0).wait(1).to({y:330},0).wait(1).to({x:580},0).wait(1).to({x:400},0).wait(1).to({y:1400},0).wait(1));

	// decor
	this.instance = new lib.pacifism_mc();
	this.instance.setTransform(210.1,270.1,0.333,0.333,0,0,0,0.3,0.3);
	this.instance.alpha = 0.199;

	this.instance_1 = new lib.anarchy_mc();
	this.instance_1.setTransform(515.1,310.1,0.333,0.333,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},9).wait(3));

	// bg
	this.instance_2 = new lib.background_7_img();
	this.instance_2.setTransform(-400,0);

	this.instance_3 = new lib.background_8_img();
	this.instance_3.setTransform(-400,0);

	this.instance_4 = new lib.background_9_img();
	this.instance_4.setTransform(-400,0);

	this.instance_5 = new lib.background_10_img();
	this.instance_5.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-33,1600,740.3);
p.frameBounds = [rect, new cjs.Rectangle(-400,-33,1600,1715), new cjs.Rectangle(-400,0,1600,1777.3), new cjs.Rectangle(-400,-33,1600,740.3), new cjs.Rectangle(-400,0,1600,1777.3), new cjs.Rectangle(-400,-33,1600,1715), new cjs.Rectangle(-400,-33,1600,740.3), new cjs.Rectangle(-400,-33,1600,1715), new cjs.Rectangle(-400,0,1600,1777.3), new cjs.Rectangle(-400,-33,1600,740.3), new cjs.Rectangle(-400,0,1600,1777.3), new cjs.Rectangle(-400,-33,1600,1715)];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.instance = new lib.hero_1_main_mc();
	this.instance.setTransform(250,330);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero_2
	this.instance_1 = new lib.hero_2_main_mc();
	this.instance_1.setTransform(590,330);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(48.5,-33,772.2,740.3);
p.frameBounds = [rect];


(lib.eyes_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.eyes_6_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyes_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.eyes_6_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyes_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.eyes_5_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyes_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.eyes_5_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyes_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.eyes_4_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyes_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.eyes_4_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyes_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.eyes_3_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyes_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.eyes_3_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyes_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.eyes_2_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyes_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.eyes_2_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyebrows_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.eyebrows_6_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyebrows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.eyebrows_6_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyebrows_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.eyebrows_5_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyebrows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.eyebrows_5_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyebrows_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.eyebrows_4_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyebrows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.eyebrows_4_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyebrows_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.eyebrows_3_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyebrows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.eyebrows_3_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyebrows_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.eyebrows_2_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyebrows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.eyebrows_2_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyebrows_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.eyebrows_1_2_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.eyebrows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.current_makeup_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.eyebrows_1_1_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArsLtIAA3ZIXZAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.dusts_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		///* this.stop();
		//this.mouseChildren = false;
		//this.mouseEnabled = false;*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// animation
	this.instance = new lib.dust_mc();
	this.instance.setTransform(-110,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// animation
	this.instance_1 = new lib.dust_mc();
	this.instance_1.setTransform(110,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-303.7,-71.8,607.5,81.3);
p.frameBounds = [rect];


(lib.dusts_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		///* this.stop();
		//this.mouseChildren = false;
		//this.mouseEnabled = false;*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// animation
	this.instance = new lib.dust_mc();
	this.instance.setTransform(-110,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// animation
	this.instance_1 = new lib.dust_mc();
	this.instance_1.setTransform(110,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-303.7,-71.8,607.5,81.3);
p.frameBounds = [rect];


(lib.dusts_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.mouseChildren = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// animation
	this.instance = new lib.dust_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);
	this.instance.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// animation
	this.instance_1 = new lib.dust_mc();
	this.instance_1.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-193.7,-71.8,387.5,81.3);
p.frameBounds = [rect];


(lib.current_top_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.current_top_0_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.current_top_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect, rect];


(lib.current_hair_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.current_hair_0_mc();

	this.instance_1 = new lib.current_hair_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect, rect];


(lib.current_earrings_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.current_earrings_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// body
	this.instance_1 = new lib.current_earrings_1_mc();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-70,150,140);
p.frameBounds = [rect, new cjs.Rectangle(-90,-85,180,170)];


(lib.current_dress_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.current_dress_0_mc();
	this.instance.setTransform(0,-10);
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.current_dress_1_mc();
	this.instance_1.setTransform(0,-10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-250,380,480);
p.frameBounds = [rect, rect];


(lib.current_beads_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.current_beads_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// body
	this.instance_1 = new lib.current_beads_1_mc();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-90,130,180);
p.frameBounds = [rect, new cjs.Rectangle(-80,-105,160,210)];


(lib.closet_makeup_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.piercing_0 = new lib.piercing_0_mc();
	this.piercing_0.setTransform(185,-100);

	this.eyes_1 = new lib.eyes_1_mc();
	this.eyes_1.setTransform(185,-100);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(185,-100);

	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(185,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.piercing_0}]}).to({state:[]},2).to({state:[{t:this.eyes_1}]},2).to({state:[{t:this.shadows_0}]},2).to({state:[{t:this.blush_0}]},2).to({state:[]},2).wait(2));

	// options
	this.piercing_3 = new lib.piercing_3_2_mc();
	this.piercing_3.setTransform(0,110);

	this.piercing_2 = new lib.piercing_2_2_mc();
	this.piercing_2.setTransform(80,-100);

	this.piercing_1 = new lib.piercing_1_2_mc();
	this.piercing_1.setTransform(-80,-100);

	this.piercing_6 = new lib.piercing_6_2_mc();
	this.piercing_6.setTransform(0,110);

	this.piercing_5 = new lib.piercing_5_2_mc();
	this.piercing_5.setTransform(80,-100);

	this.piercing_4 = new lib.piercing_4_2_mc();
	this.piercing_4.setTransform(-80,-100);

	this.lips_4 = new lib.lips_4_2_mc();
	this.lips_4.setTransform(-80,-100);

	this.lips_3 = new lib.lips_3_2_mc();
	this.lips_3.setTransform(0,110);

	this.lips_2 = new lib.lips_2_2_mc();
	this.lips_2.setTransform(80,-100);

	this.lips_1 = new lib.lips_1_2_mc();
	this.lips_1.setTransform(0,110);

	this.lips_6 = new lib.lips_6_2_mc();
	this.lips_6.setTransform(-80,-100);

	this.lips_5 = new lib.lips_5_2_mc();
	this.lips_5.setTransform(80,-100);

	this.eyes_4 = new lib.eyes_4_2_mc();
	this.eyes_4.setTransform(0,110);

	this.eyes_3 = new lib.eyes_3_2_mc();
	this.eyes_3.setTransform(80,-100);

	this.eyes_2 = new lib.eyes_2_2_mc();
	this.eyes_2.setTransform(-80,-100);

	this.eyes_6 = new lib.eyes_6_2_mc();
	this.eyes_6.setTransform(0,110);

	this.eyes_5 = new lib.eyes_5_2_mc();
	this.eyes_5.setTransform(0,-100);

	this.shadows_3 = new lib.shadows_3_2_mc();
	this.shadows_3.setTransform(0,110);

	this.shadows_2 = new lib.shadows_2_2_mc();
	this.shadows_2.setTransform(80,-100);

	this.shadows_1 = new lib.shadows_1_2_mc();
	this.shadows_1.setTransform(-80,-100);

	this.shadows_6 = new lib.shadows_6_2_mc();
	this.shadows_6.setTransform(0,110);

	this.shadows_5 = new lib.shadows_5_2_mc();
	this.shadows_5.setTransform(80,-100);

	this.shadows_4 = new lib.shadows_4_2_mc();
	this.shadows_4.setTransform(-80,-100);

	this.blush_3 = new lib.blush_3_2_mc();
	this.blush_3.setTransform(0,110);

	this.blush_2 = new lib.blush_2_2_mc();
	this.blush_2.setTransform(80,-100);

	this.blush_1 = new lib.blush_1_2_mc();
	this.blush_1.setTransform(-80,-100);

	this.blush_6 = new lib.blush_6_2_mc();
	this.blush_6.setTransform(0,110);

	this.blush_5 = new lib.blush_5_2_mc();
	this.blush_5.setTransform(80,-100);

	this.blush_4 = new lib.blush_4_2_mc();
	this.blush_4.setTransform(-80,-100);

	this.eyebrows_5 = new lib.eyebrows_5_2_mc();
	this.eyebrows_5.setTransform(-80,-100);

	this.eyebrows_3 = new lib.eyebrows_3_2_mc();
	this.eyebrows_3.setTransform(0,110);

	this.eyebrows_2 = new lib.eyebrows_2_2_mc();
	this.eyebrows_2.setTransform(80,-100);

	this.eyebrows_1 = new lib.eyebrows_1_2_mc();
	this.eyebrows_1.setTransform(0,110);

	this.eyebrows_6 = new lib.eyebrows_6_2_mc();
	this.eyebrows_6.setTransform(80,-100);

	this.eyebrows_4 = new lib.eyebrows_4_2_mc();
	this.eyebrows_4.setTransform(-80,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.piercing_1},{t:this.piercing_2},{t:this.piercing_3}]}).to({state:[{t:this.piercing_4},{t:this.piercing_5},{t:this.piercing_6}]},1).to({state:[{t:this.lips_2},{t:this.lips_3},{t:this.lips_4}]},1).to({state:[{t:this.lips_5},{t:this.lips_6},{t:this.lips_1}]},1).to({state:[{t:this.eyes_2},{t:this.eyes_3},{t:this.eyes_4}]},1).to({state:[{t:this.eyes_5},{t:this.eyes_6}]},1).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3}]},1).to({state:[{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3}]},1).to({state:[{t:this.blush_4},{t:this.blush_5},{t:this.blush_6}]},1).to({state:[{t:this.eyebrows_2},{t:this.eyebrows_3},{t:this.eyebrows_5}]},1).to({state:[{t:this.eyebrows_4},{t:this.eyebrows_6},{t:this.eyebrows_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-175,364,360);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-155,-175,310,360), rect, new cjs.Rectangle(-155,-175,364,360), new cjs.Rectangle(-75,-175,284,360), rect=new cjs.Rectangle(-155,-175,364,360), rect, rect, rect, rect=new cjs.Rectangle(-155,-175,310,360), rect];


(lib.closet_makeup_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.piercing_0 = new lib.piercing_0_mc();
	this.piercing_0.setTransform(185,-100);

	this.lips_0 = new lib.lips_0_mc();
	this.lips_0.setTransform(185,-100);

	this.eyes_1 = new lib.eyes_1_mc();
	this.eyes_1.setTransform(185,-100);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(185,-100);

	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(185,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.piercing_0}]}).to({state:[{t:this.lips_0}]},2).to({state:[{t:this.eyes_1}]},2).to({state:[{t:this.shadows_0}]},2).to({state:[{t:this.blush_0}]},2).to({state:[]},2).wait(2));

	// options
	this.piercing_3 = new lib.piercing_3_1_mc();
	this.piercing_3.setTransform(0,110);

	this.piercing_2 = new lib.piercing_2_1_mc();
	this.piercing_2.setTransform(80,-100);

	this.piercing_1 = new lib.piercing_1_1_mc();
	this.piercing_1.setTransform(-80,-100);

	this.piercing_6 = new lib.piercing_6_1_mc();
	this.piercing_6.setTransform(0,110);

	this.piercing_5 = new lib.piercing_5_1_mc();
	this.piercing_5.setTransform(80,-100);

	this.piercing_4 = new lib.piercing_4_1_mc();
	this.piercing_4.setTransform(-80,-100);

	this.lips_3 = new lib.lips_3_1_mc();
	this.lips_3.setTransform(0,110);

	this.lips_2 = new lib.lips_2_1_mc();
	this.lips_2.setTransform(80,-100);

	this.lips_1 = new lib.lips_1_1_mc();
	this.lips_1.setTransform(-80,-100);

	this.lips_6 = new lib.lips_6_1_mc();
	this.lips_6.setTransform(0,110);

	this.lips_5 = new lib.lips_5_1_mc();
	this.lips_5.setTransform(80,-100);

	this.lips_4 = new lib.lips_4_1_mc();
	this.lips_4.setTransform(-80,-100);

	this.eyes_6 = new lib.eyes_6_1_mc();
	this.eyes_6.setTransform(0,110);

	this.eyes_3 = new lib.eyes_3_1_mc();
	this.eyes_3.setTransform(80,-100);

	this.eyes_2 = new lib.eyes_2_1_mc();
	this.eyes_2.setTransform(-80,-100);

	this.eyes_4 = new lib.eyes_4_1_mc();
	this.eyes_4.setTransform(0,-100);

	this.eyes_5 = new lib.eyes_5_1_mc();
	this.eyes_5.setTransform(0,110);

	this.shadows_3 = new lib.shadows_3_1_mc();
	this.shadows_3.setTransform(80,-100);

	this.shadows_2 = new lib.shadows_2_1_mc();
	this.shadows_2.setTransform(0,110);

	this.shadows_1 = new lib.shadows_1_1_mc();
	this.shadows_1.setTransform(-80,-100);

	this.shadows_6 = new lib.shadows_6_1_mc();
	this.shadows_6.setTransform(0,110);

	this.shadows_5 = new lib.shadows_5_1_mc();
	this.shadows_5.setTransform(80,-100);

	this.shadows_4 = new lib.shadows_4_1_mc();
	this.shadows_4.setTransform(-80,-100);

	this.blush_3 = new lib.blush_3_1_mc();
	this.blush_3.setTransform(0,110);

	this.blush_2 = new lib.blush_2_1_mc();
	this.blush_2.setTransform(80,-100);

	this.blush_1 = new lib.blush_1_1_mc();
	this.blush_1.setTransform(-80,-100);

	this.blush_6 = new lib.blush_6_1_mc();
	this.blush_6.setTransform(0,110);

	this.blush_5 = new lib.blush_5_1_mc();
	this.blush_5.setTransform(80,-100);

	this.blush_4 = new lib.blush_4_1_mc();
	this.blush_4.setTransform(-80,-100);

	this.eyebrows_5 = new lib.eyebrows_5_1_mc();
	this.eyebrows_5.setTransform(80,-100);

	this.eyebrows_3 = new lib.eyebrows_3_1_mc();
	this.eyebrows_3.setTransform(0,110);

	this.eyebrows_2 = new lib.eyebrows_2_1_mc();
	this.eyebrows_2.setTransform(-80,-100);

	this.eyebrows_1 = new lib.eyebrows_1_1_mc();
	this.eyebrows_1.setTransform(80,-100);

	this.eyebrows_6 = new lib.eyebrows_6_1_mc();
	this.eyebrows_6.setTransform(0,110);

	this.eyebrows_4 = new lib.eyebrows_4_1_mc();
	this.eyebrows_4.setTransform(-80,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.piercing_1},{t:this.piercing_2},{t:this.piercing_3}]}).to({state:[{t:this.piercing_4},{t:this.piercing_5},{t:this.piercing_6}]},1).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3}]},1).to({state:[{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]},1).to({state:[{t:this.eyes_2},{t:this.eyes_3},{t:this.eyes_6}]},1).to({state:[{t:this.eyes_5},{t:this.eyes_4}]},1).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3}]},1).to({state:[{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3}]},1).to({state:[{t:this.blush_4},{t:this.blush_5},{t:this.blush_6}]},1).to({state:[{t:this.eyebrows_2},{t:this.eyebrows_3},{t:this.eyebrows_5}]},1).to({state:[{t:this.eyebrows_4},{t:this.eyebrows_6},{t:this.eyebrows_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-175,364,360);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-75,-175,284,360), rect=new cjs.Rectangle(-155,-175,364,360), rect, rect, rect, rect=new cjs.Rectangle(-155,-175,310,360), rect];


(lib.bottom_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero2_skirt9_img();
	this.instance_1.setTransform(89.3,-60,0.764,0.764,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.bottom_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero1_skirt9_img();
	this.instance_1.setTransform(-70,-56,0.859,0.859);

	this.instance_2 = new lib.hero1_top8_img();
	this.instance_2.setTransform(-80,-62,0.005,0.007);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_3 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.bottom_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero2_skirt8_img();
	this.instance_1.setTransform(89.5,-60,0.75,0.75,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.bottom_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero1_skirt8_img();
	this.instance_1.setTransform(-80,-46,0.8,0.8);

	this.instance_2 = new lib.hero1_top8_img();
	this.instance_2.setTransform(-80,-62,0.005,0.007);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_3 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.bottom_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero2_skirt7_img();
	this.instance_1.setTransform(89.9,-60,0.839,0.839,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.bottom_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero1_skirt7_img();
	this.instance_1.setTransform(-90,-43,0.776,0.776);

	this.instance_2 = new lib.hero1_top8_img();
	this.instance_2.setTransform(-80,-62,0.005,0.007);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_3 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.bottom_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero2_skirt6_img();
	this.instance_1.setTransform(75.6,-62,0.882,0.882,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.bottom_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero1_skirt6_img();
	this.instance_1.setTransform(-90,-46,0.769,0.769);

	this.instance_2 = new lib.hero1_top8_img();
	this.instance_2.setTransform(-80,-62,0.005,0.007);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_3 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.bottom_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero2_skirt5_img();
	this.instance_1.setTransform(68.7,-52,0.827,0.827,0,0,180);

	this.instance_2 = new lib.hero1_top8_img();
	this.instance_2.setTransform(-80,-62,0.005,0.007);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_3 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.bottom_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero1_skirt5_img();
	this.instance_1.setTransform(-74,-42,0.881,0.881);

	this.instance_2 = new lib.hero1_top8_img();
	this.instance_2.setTransform(-80,-62,0.005,0.007);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_3 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.bottom_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero2_skirt4_img();
	this.instance_1.setTransform(71.4,-59,0.876,0.876,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.bottom_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero1_skirt4_img();
	this.instance_1.setTransform(-70,-53,0.828,0.829);

	this.instance_2 = new lib.hero1_top8_img();
	this.instance_2.setTransform(-80,-62,0.005,0.007);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_3 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.bottom_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero2_skirt3_img();
	this.instance_1.setTransform(77.2,-55,0.956,0.957,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.bottom_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero1_skirt3_img();
	this.instance_1.setTransform(-70,-52,0.838,0.838);

	this.instance_2 = new lib.hero1_top8_img();
	this.instance_2.setTransform(-80,-62,0.005,0.007);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_3 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.bottom_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero2_skirt2_img();
	this.instance_1.setTransform(71.6,-57,0.769,0.769,0,0,180);

	this.instance_2 = new lib.hero1_top8_img();
	this.instance_2.setTransform(-80,-62,0.005,0.007);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_3 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.bottom_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero1_skirt2_img();
	this.instance_1.setTransform(-75,-55,0.798,0.798);

	this.instance_2 = new lib.hero1_top8_img();
	this.instance_2.setTransform(-80,-62,0.005,0.007);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_3 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.bottom_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero2_skirt1_img();
	this.instance_1.setTransform(72.7,-57,0.727,0.727,0,0,180);

	this.instance_2 = new lib.hero1_top8_img();
	this.instance_2.setTransform(-80,-62,0.005,0.007);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_3 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.bottom_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero1_skirt1_img();
	this.instance_1.setTransform(-75,-51,0.798,0.798);

	this.instance_2 = new lib.hero1_top8_img();
	this.instance_2.setTransform(-80,-62,0.005,0.007);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_3 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-175,364,360);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-175,364,360);
p.frameBounds = [rect];


(lib.beads_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace9_img();
	this.instance.setTransform(-20,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_beads_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXMgIAA4/ISvAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-90,130,180);
p.frameBounds = [rect];


(lib.beads_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace9_img();
	this.instance.setTransform(-22,18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_beads_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXMgIAA4/ISvAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-90,130,180);
p.frameBounds = [rect];


(lib.beads_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace8_img();
	this.instance.setTransform(-20,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_beads_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXMgIAA4/ISvAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-90,130,180);
p.frameBounds = [rect];


(lib.beads_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace8_img();
	this.instance.setTransform(-20,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_beads_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXMgIAA4/ISvAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-90,130,180);
p.frameBounds = [rect];


(lib.beads_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace7_img();
	this.instance.setTransform(-19,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_beads_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXMgIAA4/ISvAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-90,130,180);
p.frameBounds = [rect];


(lib.beads_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace7_img();
	this.instance.setTransform(-24,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_beads_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXMgIAA4/ISvAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-90,130,180);
p.frameBounds = [rect];


(lib.beads_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace6_img();
	this.instance.setTransform(-20,22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_beads_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXMgIAA4/ISvAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-90,130,180);
p.frameBounds = [rect];


(lib.beads_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace6_img();
	this.instance.setTransform(-26,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_beads_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXMgIAA4/ISvAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-90,130,180);
p.frameBounds = [rect];


(lib.beads_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace5_img();
	this.instance.setTransform(-26,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_beads_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXMgIAA4/ISvAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-90,130,180);
p.frameBounds = [rect];


(lib.beads_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace5_img();
	this.instance.setTransform(-21.5,22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_beads_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXMgIAA4/ISvAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-90,130,180);
p.frameBounds = [rect];


(lib.beads_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace4_img();
	this.instance.setTransform(-23,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_beads_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXMgIAA4/ISvAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-90,130,180);
p.frameBounds = [rect];


(lib.beads_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace4_img();
	this.instance.setTransform(-22,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_beads_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXMgIAA4/ISvAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-90,130,180);
p.frameBounds = [rect];


(lib.beads_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace3_img();
	this.instance.setTransform(-29,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_beads_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXMgIAA4/ISvAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-90,130,180);
p.frameBounds = [rect];


(lib.beads_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace3_img();
	this.instance.setTransform(-21,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_beads_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXMgIAA4/ISvAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-90,130,180);
p.frameBounds = [rect];


(lib.beads_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace2_img();
	this.instance.setTransform(-24,23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_beads_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXMgIAA4/ISvAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-90,130,180);
p.frameBounds = [rect];


(lib.beads_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace2_img();
	this.instance.setTransform(-29,18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_beads_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXMgIAA4/ISvAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-90,130,180);
p.frameBounds = [rect];


(lib.beads_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_necklace1_img();
	this.instance.setTransform(-27,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_beads_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXMgIAA4/ISvAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-90,130,180);
p.frameBounds = [rect];


(lib.beads_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_necklace1_img();
	this.instance.setTransform(-21,22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_beads_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXMgIAA4/ISvAAIAAY/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-90,130,180);
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
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
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
p.nominalBounds = rect = new cjs.Rectangle(-5,-120,60,120);
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
	this.instance.setTransform(0,0,0.9,0.9,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.prev_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_3_mc();
	this.instance.setTransform(0,0,0.875,0.875,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.5,-52.5,105,105);
p.frameBounds = [rect];


(lib.prev_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_2_mc();
	this.instance.setTransform(0,0,0.875,0.875,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.5,-52.5,105,105);
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
	this.instance.setTransform(0,0,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.5,-52.5,105,105);
p.frameBounds = [rect];


(lib.next_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_anim_2_mc();
	this.instance.setTransform(0,0,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.5,-52.5,105,105);
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


(lib.top_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero2_top9_img();
	this.instance_1.setTransform(75.7,-50,0.916,0.916,0,0,180);

	this.instance_2 = new lib.hero1_top8_img();
	this.instance_2.setTransform(-80,-62,0.005,0.007);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_3 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.top_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero1_top9_img();
	this.instance_1.setTransform(-62,-51,0.867,0.867);

	this.instance_2 = new lib.hero1_top8_img();
	this.instance_2.setTransform(-80,-62,0.005,0.007);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_3 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.top_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero2_top8_img();
	this.instance_1.setTransform(50.9,-50,0.909,0.909,0,0,180);

	this.instance_2 = new lib.hero1_top8_img();
	this.instance_2.setTransform(-80,-62,0.005,0.007);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_3 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.top_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero1_top8_img();
	this.instance_1.setTransform(-70,-51,0.737,0.737);

	this.instance_2 = new lib.hero1_top8_img();
	this.instance_2.setTransform(-80,-62,0.005,0.007);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_3 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.top_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero2_top7_img();
	this.instance_1.setTransform(77.8,-47,0.876,0.876,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.top_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero1_top7_img();
	this.instance_1.setTransform(-53,-55,0.848,0.848);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.top_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero2_top6_img();
	this.instance_1.setTransform(80.5,-40,0.923,0.923,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.top_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero1_top6_img();
	this.instance_1.setTransform(-68,-54,0.753,0.753);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.top_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero2_top5_img();
	this.instance_1.setTransform(94.2,-41,0.93,0.93,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.top_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero1_top5_img();
	this.instance_1.setTransform(-70,-55,0.786,0.787);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.top_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero2_top4_img();
	this.instance_1.setTransform(59,-48,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.top_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero1_top4_img();
	this.instance_1.setTransform(-75,-52,0.852,0.852);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.top_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero2_top3_img();
	this.instance_1.setTransform(66,-52,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.top_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero1_top3_img();
	this.instance_1.setTransform(-70,-52,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.top_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero2_top2_img();
	this.instance_1.setTransform(64.2,-53,0.94,0.94,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.top_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero1_top2_img();
	this.instance_1.setTransform(-50,-48,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.top_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero2_top1_img();
	this.instance_1.setTransform(48.1,-60,0.828,0.828,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
p.frameBounds = [rect];


(lib.top_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero1_top1_img();
	this.instance_1.setTransform(-70,-49,0.921,0.921);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_top_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_top_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-110,260,220);
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
p.nominalBounds = rect = new cjs.Rectangle(-400,-33,1600,740.3);
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
	this.instance.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hair_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqRrQnVnVAAqWQAAqVHVnWQHUnTKWgBQKWABHVHTQHUHWABKVQgBKWnUHVQnVHUqWABQqWgBnUnUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.hairstyle_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_6_1_img();
	this.instance.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hair_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqRrQnVnVAAqWQAAqVHVnWQHUnTKWgBQKWABHVHTQHUHWABKVQgBKWnUHVQnVHUqWABQqWgBnUnUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.hairstyle_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_5_2_img();
	this.instance.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hair_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqRrQnVnVAAqWQAAqVHVnWQHUnTKWgBQKWABHVHTQHUHWABKVQgBKWnUHVQnVHUqWABQqWgBnUnUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.hairstyle_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_5_1_img();
	this.instance.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hair_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqRrQnVnVAAqWQAAqVHVnWQHUnTKWgBQKWABHVHTQHUHWABKVQgBKWnUHVQnVHUqWABQqWgBnUnUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.hairstyle_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_4_2_img();
	this.instance.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hair_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqRrQnVnVAAqWQAAqVHVnWQHUnTKWgBQKWABHVHTQHUHWABKVQgBKWnUHVQnVHUqWABQqWgBnUnUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.hairstyle_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_4_1_img();
	this.instance.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hair_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqRrQnVnVAAqWQAAqVHVnWQHUnTKWgBQKWABHVHTQHUHWABKVQgBKWnUHVQnVHUqWABQqWgBnUnUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.hairstyle_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_3_2_img();
	this.instance.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hair_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqRrQnVnVAAqWQAAqVHVnWQHUnTKWgBQKWABHVHTQHUHWABKVQgBKWnUHVQnVHUqWABQqWgBnUnUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.hairstyle_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_3_1_img();
	this.instance.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hair_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqRrQnVnVAAqWQAAqVHVnWQHUnTKWgBQKWABHVHTQHUHWABKVQgBKWnUHVQnVHUqWABQqWgBnUnUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.hairstyle_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_2_2_img();
	this.instance.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hair_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqRrQnVnVAAqWQAAqVHVnWQHUnTKWgBQKWABHVHTQHUHWABKVQgBKWnUHVQnVHUqWABQqWgBnUnUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.hairstyle_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_2_1_img();
	this.instance.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hair_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqRrQnVnVAAqWQAAqVHVnWQHUnTKWgBQKWABHVHTQHUHWABKVQgBKWnUHVQnVHUqWABQqWgBnUnUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.hairstyle_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_1_2_img();
	this.instance.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hair_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqRrQnVnVAAqWQAAqVHVnWQHUnTKWgBQKWABHVHTQHUHWABKVQgBKWnUHVQnVHUqWABQqWgBnUnUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.hairstyle_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hairstyle_1_1_img();
	this.instance.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.current_hair_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxqRrQnVnVAAqWQAAqVHVnWQHUnTKWgBQKWABHVHTQHUHWABKVQgBKWnUHVQnVHUqWABQqWgBnUnUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect];


(lib.frame_locations_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":159});

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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(15).call(this.frame_49).wait(111));

	// decor
	this.instance = new lib.dusts_1_mc();
	this.instance.setTransform(-180,280);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).wait(121));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:-600},0).wait(23).to({y:80},15).to({y:0},5).wait(55).to({y:-50},5).to({y:600},10).wait(46));

	// decor
	this.instance_1 = new lib.dusts_1_mc();
	this.instance_1.setTransform(180,280);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).wait(106));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({y:-600},0).wait(38).to({y:80},15).to({y:0},5).wait(55).to({y:-50},5).to({y:600},10).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-210,740,420);
p.frameBounds = [rect, rect=new cjs.Rectangle(-370,-810,740,420), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-810,740,465.4), new cjs.Rectangle(-370,-810,740,510.7), new cjs.Rectangle(-370,-810,740,556), new cjs.Rectangle(-370,-810,740,601.4), new cjs.Rectangle(-370,-810,740,646.7), new cjs.Rectangle(-370,-810,740,692), new cjs.Rectangle(-370,-810,740,737.4), new cjs.Rectangle(-370,-810,740,782.7), new cjs.Rectangle(-370,-810,740,828), new cjs.Rectangle(-370,-810,740,873.4), new cjs.Rectangle(-370,-810,740,918.7), new cjs.Rectangle(-370,-810,740,964), new cjs.Rectangle(-370,-810,740,1009.4), new cjs.Rectangle(-370,-810,740,1054.7), new cjs.Rectangle(-373.7,-810,743.8,1100), new cjs.Rectangle(-373.7,-764.6,743.8,1054.1), new cjs.Rectangle(-373.7,-719.3,743.8,1008.8), new cjs.Rectangle(-373.7,-674,743.8,963.4), new cjs.Rectangle(-373.7,-628.6,743.8,918.1), new cjs.Rectangle(-373.7,-583.3,743.8,872.8), new cjs.Rectangle(-373.7,-538,743.8,827.4), new cjs.Rectangle(-373.7,-492.6,743.8,782.1), new cjs.Rectangle(-373.7,-447.3,743.8,736.8), new cjs.Rectangle(-373.7,-402,743.8,691.4), new cjs.Rectangle(-373.7,-356.6,743.8,646.1), new cjs.Rectangle(-373.7,-311.3,743.8,600.8), new cjs.Rectangle(-373.7,-266,743.8,555.4), new cjs.Rectangle(-373.7,-220.6,743.8,510.1), new cjs.Rectangle(-373.7,-210,743.8,499.4), new cjs.Rectangle(-373.7,-210,747.5,500), rect=new cjs.Rectangle(-373.7,-210,747.5,499.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-373.7,-220,747.5,509.4), new cjs.Rectangle(-373.7,-230,747.5,519.4), new cjs.Rectangle(-373.7,-240,747.5,529.4), new cjs.Rectangle(-373.7,-250,747.5,539.4), new cjs.Rectangle(-373.7,-260,747.5,549.4), new cjs.Rectangle(-373.7,-210,747.5,499.4), new cjs.Rectangle(-373.7,-210,747.5,500), new cjs.Rectangle(-373.7,-210,747.5,565), new cjs.Rectangle(-373.7,-210,747.5,630), new cjs.Rectangle(-373.7,-210,747.5,695), new cjs.Rectangle(-373.7,-210,747.5,760), new cjs.Rectangle(-373.7,-210,747.5,825), new cjs.Rectangle(-373.7,-210,747.5,890), new cjs.Rectangle(-373.7,-210,747.5,955), new cjs.Rectangle(-373.7,-210,747.5,1020), new cjs.Rectangle(-373.7,-220,747.5,1030), new cjs.Rectangle(-373.7,-230,747.5,1040), new cjs.Rectangle(-373.7,-240,747.5,1050), new cjs.Rectangle(-373.7,-250,747.5,1060), new cjs.Rectangle(-373.7,-260,747.5,1070), new cjs.Rectangle(-373.7,-195,747.5,1005), new cjs.Rectangle(-373.7,-130,747.5,940), new cjs.Rectangle(-373.7,-65,747.5,875), new cjs.Rectangle(-373.7,0,747.5,810), new cjs.Rectangle(-373.7,65,747.5,745), new cjs.Rectangle(-373.7,130,747.5,680), new cjs.Rectangle(-373.7,195,747.5,615), rect=new cjs.Rectangle(-373.7,208.2,747.5,601.9), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":119});

	// timeline functions:
	this.frame_34 = function() {
		try
		{
			app.addSoundFunc("dust_sound", 0.4);
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
			app.addSoundFunc("dust_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(15).call(this.frame_49).wait(71));

	// decor
	this.instance = new lib.dusts_1_mc();
	this.instance.setTransform(-180,280);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).wait(81));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:-600},0).wait(23).to({y:80},15).to({y:0},5).wait(76));

	// decor
	this.instance_1 = new lib.dusts_1_mc();
	this.instance_1.setTransform(180,280);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).wait(66));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({y:-600},0).wait(38).to({y:80},15).to({y:0},5).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-210,740,420);
p.frameBounds = [rect, rect=new cjs.Rectangle(-370,-810,740,420), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-810,740,465.4), new cjs.Rectangle(-370,-810,740,510.7), new cjs.Rectangle(-370,-810,740,556), new cjs.Rectangle(-370,-810,740,601.4), new cjs.Rectangle(-370,-810,740,646.7), new cjs.Rectangle(-370,-810,740,692), new cjs.Rectangle(-370,-810,740,737.4), new cjs.Rectangle(-370,-810,740,782.7), new cjs.Rectangle(-370,-810,740,828), new cjs.Rectangle(-370,-810,740,873.4), new cjs.Rectangle(-370,-810,740,918.7), new cjs.Rectangle(-370,-810,740,964), new cjs.Rectangle(-370,-810,740,1009.4), new cjs.Rectangle(-370,-810,740,1054.7), new cjs.Rectangle(-373.7,-810,743.8,1100), new cjs.Rectangle(-373.7,-764.6,743.8,1054.1), new cjs.Rectangle(-373.7,-719.3,743.8,1008.8), new cjs.Rectangle(-373.7,-674,743.8,963.4), new cjs.Rectangle(-373.7,-628.6,743.8,918.1), new cjs.Rectangle(-373.7,-583.3,743.8,872.8), new cjs.Rectangle(-373.7,-538,743.8,827.4), new cjs.Rectangle(-373.7,-492.6,743.8,782.1), new cjs.Rectangle(-373.7,-447.3,743.8,736.8), new cjs.Rectangle(-373.7,-402,743.8,691.4), new cjs.Rectangle(-373.7,-356.6,743.8,646.1), new cjs.Rectangle(-373.7,-311.3,743.8,600.8), new cjs.Rectangle(-373.7,-266,743.8,555.4), new cjs.Rectangle(-373.7,-220.6,743.8,510.1), new cjs.Rectangle(-373.7,-210,743.8,499.4), new cjs.Rectangle(-373.7,-210,747.5,500), rect=new cjs.Rectangle(-373.7,-210,747.5,499.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":119});

	// timeline functions:
	this.frame_34 = function() {
		try
		{
			app.addSoundFunc("dust_sound", 0.4);
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
			app.addSoundFunc("dust_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(15).call(this.frame_49).wait(71));

	// decor
	this.instance = new lib.dusts_1_mc();
	this.instance.setTransform(-180,280);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).wait(81));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(-180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({y:-600},0).wait(23).to({y:80},15).to({y:0},5).wait(76));

	// decor
	this.instance_1 = new lib.dusts_1_mc();
	this.instance_1.setTransform(180,280);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).wait(66));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:-600},0).wait(38).to({y:80},15).to({y:0},5).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-210,740,420);
p.frameBounds = [rect, rect=new cjs.Rectangle(-370,-810,740,420), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-810,740,465.4), new cjs.Rectangle(-370,-810,740,510.7), new cjs.Rectangle(-370,-810,740,556), new cjs.Rectangle(-370,-810,740,601.4), new cjs.Rectangle(-370,-810,740,646.7), new cjs.Rectangle(-370,-810,740,692), new cjs.Rectangle(-370,-810,740,737.4), new cjs.Rectangle(-370,-810,740,782.7), new cjs.Rectangle(-370,-810,740,828), new cjs.Rectangle(-370,-810,740,873.4), new cjs.Rectangle(-370,-810,740,918.7), new cjs.Rectangle(-370,-810,740,964), new cjs.Rectangle(-370,-810,740,1009.4), new cjs.Rectangle(-370,-810,740,1054.7), new cjs.Rectangle(-373.7,-810,743.8,1100), new cjs.Rectangle(-373.7,-764.6,743.8,1054.1), new cjs.Rectangle(-373.7,-719.3,743.8,1008.8), new cjs.Rectangle(-373.7,-674,743.8,963.4), new cjs.Rectangle(-373.7,-628.6,743.8,918.1), new cjs.Rectangle(-373.7,-583.3,743.8,872.8), new cjs.Rectangle(-373.7,-538,743.8,827.4), new cjs.Rectangle(-373.7,-492.6,743.8,782.1), new cjs.Rectangle(-373.7,-447.3,743.8,736.8), new cjs.Rectangle(-373.7,-402,743.8,691.4), new cjs.Rectangle(-373.7,-356.6,743.8,646.1), new cjs.Rectangle(-373.7,-311.3,743.8,600.8), new cjs.Rectangle(-373.7,-266,743.8,555.4), new cjs.Rectangle(-373.7,-220.6,743.8,510.1), new cjs.Rectangle(-373.7,-210,743.8,499.4), new cjs.Rectangle(-373.7,-210,747.5,500), rect=new cjs.Rectangle(-373.7,-210,747.5,499.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":159});

	// timeline functions:
	this.frame_34 = function() {
		try
		{
			app.addSoundFunc("dust_sound", 0.4);
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
			app.addSoundFunc("dust_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(15).call(this.frame_49).wait(111));

	// decor
	this.instance = new lib.dusts_1_mc();
	this.instance.setTransform(-180,280);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).wait(121));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(-180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-600},0).wait(23).to({y:80},15).to({y:0},5).wait(55).to({y:-50},5).to({y:600},10).wait(46));

	// decor
	this.instance_1 = new lib.dusts_1_mc();
	this.instance_1.setTransform(180,280);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).wait(106));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-600},0).wait(38).to({y:80},15).to({y:0},5).wait(55).to({y:-50},5).to({y:600},10).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-210,740,420);
p.frameBounds = [rect, rect=new cjs.Rectangle(-370,-810,740,420), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-810,740,465.4), new cjs.Rectangle(-370,-810,740,510.7), new cjs.Rectangle(-370,-810,740,556), new cjs.Rectangle(-370,-810,740,601.4), new cjs.Rectangle(-370,-810,740,646.7), new cjs.Rectangle(-370,-810,740,692), new cjs.Rectangle(-370,-810,740,737.4), new cjs.Rectangle(-370,-810,740,782.7), new cjs.Rectangle(-370,-810,740,828), new cjs.Rectangle(-370,-810,740,873.4), new cjs.Rectangle(-370,-810,740,918.7), new cjs.Rectangle(-370,-810,740,964), new cjs.Rectangle(-370,-810,740,1009.4), new cjs.Rectangle(-370,-810,740,1054.7), new cjs.Rectangle(-373.7,-810,743.8,1100), new cjs.Rectangle(-373.7,-764.6,743.8,1054.1), new cjs.Rectangle(-373.7,-719.3,743.8,1008.8), new cjs.Rectangle(-373.7,-674,743.8,963.4), new cjs.Rectangle(-373.7,-628.6,743.8,918.1), new cjs.Rectangle(-373.7,-583.3,743.8,872.8), new cjs.Rectangle(-373.7,-538,743.8,827.4), new cjs.Rectangle(-373.7,-492.6,743.8,782.1), new cjs.Rectangle(-373.7,-447.3,743.8,736.8), new cjs.Rectangle(-373.7,-402,743.8,691.4), new cjs.Rectangle(-373.7,-356.6,743.8,646.1), new cjs.Rectangle(-373.7,-311.3,743.8,600.8), new cjs.Rectangle(-373.7,-266,743.8,555.4), new cjs.Rectangle(-373.7,-220.6,743.8,510.1), new cjs.Rectangle(-373.7,-210,743.8,499.4), new cjs.Rectangle(-373.7,-210,747.5,500), rect=new cjs.Rectangle(-373.7,-210,747.5,499.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-373.7,-220,747.5,509.4), new cjs.Rectangle(-373.7,-230,747.5,519.4), new cjs.Rectangle(-373.7,-240,747.5,529.4), new cjs.Rectangle(-373.7,-250,747.5,539.4), new cjs.Rectangle(-373.7,-260,747.5,549.4), new cjs.Rectangle(-373.7,-210,747.5,499.4), new cjs.Rectangle(-373.7,-210,747.5,500), new cjs.Rectangle(-373.7,-210,747.5,565), new cjs.Rectangle(-373.7,-210,747.5,630), new cjs.Rectangle(-373.7,-210,747.5,695), new cjs.Rectangle(-373.7,-210,747.5,760), new cjs.Rectangle(-373.7,-210,747.5,825), new cjs.Rectangle(-373.7,-210,747.5,890), new cjs.Rectangle(-373.7,-210,747.5,955), new cjs.Rectangle(-373.7,-210,747.5,1020), new cjs.Rectangle(-373.7,-220,747.5,1030), new cjs.Rectangle(-373.7,-230,747.5,1040), new cjs.Rectangle(-373.7,-240,747.5,1050), new cjs.Rectangle(-373.7,-250,747.5,1060), new cjs.Rectangle(-373.7,-260,747.5,1070), new cjs.Rectangle(-373.7,-195,747.5,1005), new cjs.Rectangle(-373.7,-130,747.5,940), new cjs.Rectangle(-373.7,-65,747.5,875), new cjs.Rectangle(-373.7,0,747.5,810), new cjs.Rectangle(-373.7,65,747.5,745), new cjs.Rectangle(-373.7,130,747.5,680), new cjs.Rectangle(-373.7,195,747.5,615), rect=new cjs.Rectangle(-373.7,208.2,747.5,601.9), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":119});

	// timeline functions:
	this.frame_34 = function() {
		try
		{
			app.addSoundFunc("dust_sound", 0.4);
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
			app.addSoundFunc("dust_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(15).call(this.frame_49).wait(71));

	// decor
	this.instance = new lib.dusts_1_mc();
	this.instance.setTransform(-180,280);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).wait(81));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(-180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-600},0).wait(23).to({y:80},15).to({y:0},5).wait(76));

	// decor
	this.instance_1 = new lib.dusts_1_mc();
	this.instance_1.setTransform(180,280);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).wait(66));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-600},0).wait(38).to({y:80},15).to({y:0},5).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-210,740,420);
p.frameBounds = [rect, rect=new cjs.Rectangle(-370,-810,740,420), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-810,740,465.4), new cjs.Rectangle(-370,-810,740,510.7), new cjs.Rectangle(-370,-810,740,556), new cjs.Rectangle(-370,-810,740,601.4), new cjs.Rectangle(-370,-810,740,646.7), new cjs.Rectangle(-370,-810,740,692), new cjs.Rectangle(-370,-810,740,737.4), new cjs.Rectangle(-370,-810,740,782.7), new cjs.Rectangle(-370,-810,740,828), new cjs.Rectangle(-370,-810,740,873.4), new cjs.Rectangle(-370,-810,740,918.7), new cjs.Rectangle(-370,-810,740,964), new cjs.Rectangle(-370,-810,740,1009.4), new cjs.Rectangle(-370,-810,740,1054.7), new cjs.Rectangle(-373.7,-810,743.8,1100), new cjs.Rectangle(-373.7,-764.6,743.8,1054.1), new cjs.Rectangle(-373.7,-719.3,743.8,1008.8), new cjs.Rectangle(-373.7,-674,743.8,963.4), new cjs.Rectangle(-373.7,-628.6,743.8,918.1), new cjs.Rectangle(-373.7,-583.3,743.8,872.8), new cjs.Rectangle(-373.7,-538,743.8,827.4), new cjs.Rectangle(-373.7,-492.6,743.8,782.1), new cjs.Rectangle(-373.7,-447.3,743.8,736.8), new cjs.Rectangle(-373.7,-402,743.8,691.4), new cjs.Rectangle(-373.7,-356.6,743.8,646.1), new cjs.Rectangle(-373.7,-311.3,743.8,600.8), new cjs.Rectangle(-373.7,-266,743.8,555.4), new cjs.Rectangle(-373.7,-220.6,743.8,510.1), new cjs.Rectangle(-373.7,-210,743.8,499.4), new cjs.Rectangle(-373.7,-210,747.5,500), rect=new cjs.Rectangle(-373.7,-210,747.5,499.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":159});

	// timeline functions:
	this.frame_34 = function() {
		try
		{
			app.addSoundFunc("dust_sound", 0.4);
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
			app.addSoundFunc("dust_sound", 0.4);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(15).call(this.frame_49).wait(111));

	// decor
	this.instance = new lib.dusts_1_mc();
	this.instance.setTransform(-180,280);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).wait(121));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:-600},0).wait(23).to({y:80},15).to({y:0},5).wait(65).to({x:50},10).to({x:0},5).wait(36));

	// decor
	this.instance_1 = new lib.dusts_1_mc();
	this.instance_1.setTransform(180,280);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).wait(106));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(180,0);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-600},0).wait(38).to({y:80},15).to({y:0},5).wait(30).to({y:-50},5).to({y:600},10).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-210,740,420);
p.frameBounds = [rect, rect=new cjs.Rectangle(-370,-810,740,420), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-810,740,465.4), new cjs.Rectangle(-370,-810,740,510.7), new cjs.Rectangle(-370,-810,740,556), new cjs.Rectangle(-370,-810,740,601.4), new cjs.Rectangle(-370,-810,740,646.7), new cjs.Rectangle(-370,-810,740,692), new cjs.Rectangle(-370,-810,740,737.4), new cjs.Rectangle(-370,-810,740,782.7), new cjs.Rectangle(-370,-810,740,828), new cjs.Rectangle(-370,-810,740,873.4), new cjs.Rectangle(-370,-810,740,918.7), new cjs.Rectangle(-370,-810,740,964), new cjs.Rectangle(-370,-810,740,1009.4), new cjs.Rectangle(-370,-810,740,1054.7), new cjs.Rectangle(-373.7,-810,743.8,1100), new cjs.Rectangle(-373.7,-764.6,743.8,1054.1), new cjs.Rectangle(-373.7,-719.3,743.8,1008.8), new cjs.Rectangle(-373.7,-674,743.8,963.4), new cjs.Rectangle(-373.7,-628.6,743.8,918.1), new cjs.Rectangle(-373.7,-583.3,743.8,872.8), new cjs.Rectangle(-373.7,-538,743.8,827.4), new cjs.Rectangle(-373.7,-492.6,743.8,782.1), new cjs.Rectangle(-373.7,-447.3,743.8,736.8), new cjs.Rectangle(-373.7,-402,743.8,691.4), new cjs.Rectangle(-373.7,-356.6,743.8,646.1), new cjs.Rectangle(-373.7,-311.3,743.8,600.8), new cjs.Rectangle(-373.7,-266,743.8,555.4), new cjs.Rectangle(-373.7,-220.6,743.8,510.1), new cjs.Rectangle(-373.7,-210,743.8,499.4), new cjs.Rectangle(-373.7,-210,747.5,500), rect=new cjs.Rectangle(-373.7,-210,747.5,499.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-373.7,-220,747.5,509.4), new cjs.Rectangle(-373.7,-230,747.5,519.4), new cjs.Rectangle(-373.7,-240,747.5,529.4), new cjs.Rectangle(-373.7,-250,747.5,539.4), new cjs.Rectangle(-373.7,-260,747.5,549.4), new cjs.Rectangle(-373.7,-210,747.5,499.4), new cjs.Rectangle(-373.7,-210,747.5,500), new cjs.Rectangle(-373.7,-210,747.5,565), new cjs.Rectangle(-373.7,-210,747.5,630), new cjs.Rectangle(-373.7,-210,747.5,695), new cjs.Rectangle(-373.7,-210,747.5,760), new cjs.Rectangle(-373.7,-210,747.5,825), new cjs.Rectangle(-373.7,-210,747.5,890), new cjs.Rectangle(-373.7,-210,747.5,955), rect=new cjs.Rectangle(-373.7,-210,747.5,1020), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.earrings_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_earrings9_img
	this.instance = new lib.hero2_earrings9_img();
	this.instance.setTransform(2,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero2_earrings9_img
	this.instance_1 = new lib.hero2_earrings9_img();
	this.instance_1.setTransform(-44,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_earrings_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7KKIAA0TIV3AAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-70,150,140);
p.frameBounds = [rect];


(lib.earrings_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_earrings9_img
	this.instance = new lib.hero1_earrings9_img();
	this.instance.setTransform(-1,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero1_earrings9_img
	this.instance_1 = new lib.hero1_earrings9_img();
	this.instance_1.setTransform(-52,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_earrings_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7KKIAA0TIV3AAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-70,150,140);
p.frameBounds = [rect];


(lib.earrings_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_earrings8_img
	this.instance = new lib.hero2_earrings8_img();
	this.instance.setTransform(1,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero2_earrings8_img
	this.instance_1 = new lib.hero2_earrings8_img();
	this.instance_1.setTransform(-51,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_earrings_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7KKIAA0TIV3AAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-70,150,140);
p.frameBounds = [rect];


(lib.earrings_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_earrings8_img
	this.instance = new lib.hero1_earrings8_img();
	this.instance.setTransform(-4,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero1_earrings8_img
	this.instance_1 = new lib.hero1_earrings8_img();
	this.instance_1.setTransform(-57,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_earrings_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7KKIAA0TIV3AAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-70,150,140);
p.frameBounds = [rect];


(lib.earrings_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_earrings7_img
	this.instance = new lib.hero2_earrings7_img();
	this.instance.setTransform(1,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero2_earrings7_img
	this.instance_1 = new lib.hero2_earrings7_img();
	this.instance_1.setTransform(-49,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_earrings_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7KKIAA0TIV3AAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-70,150,140);
p.frameBounds = [rect];


(lib.earrings_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_earrings7_img
	this.instance = new lib.hero1_earrings7_img();
	this.instance.setTransform(-2,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero1_earrings7_img
	this.instance_1 = new lib.hero1_earrings7_img();
	this.instance_1.setTransform(-56,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_earrings_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7KKIAA0TIV3AAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-70,150,140);
p.frameBounds = [rect];


(lib.earrings_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_earrings6_img
	this.instance = new lib.hero2_earrings6_img();
	this.instance.setTransform(1,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero2_earrings6_img
	this.instance_1 = new lib.hero2_earrings6_img();
	this.instance_1.setTransform(-45,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_earrings_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7KKIAA0TIV3AAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-70,150,140);
p.frameBounds = [rect];


(lib.earrings_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_earrings6_img
	this.instance = new lib.hero1_earrings6_img();
	this.instance.setTransform(0,-71);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero1_earrings6_img
	this.instance_1 = new lib.hero1_earrings6_img();
	this.instance_1.setTransform(-54,-71);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_earrings_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7KKIAA0TIV3AAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-71,150,141);
p.frameBounds = [rect];


(lib.earrings_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_earrings5_img
	this.instance = new lib.hero2_earrings5_img();
	this.instance.setTransform(4,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero2_earrings5_img
	this.instance_1 = new lib.hero2_earrings5_img();
	this.instance_1.setTransform(-44,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_earrings_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7KKIAA0TIV3AAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-70,150,140);
p.frameBounds = [rect];


(lib.earrings_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_earrings5_img
	this.instance = new lib.hero1_earrings5_img();
	this.instance.setTransform(3,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero1_earrings5_img
	this.instance_1 = new lib.hero1_earrings5_img();
	this.instance_1.setTransform(-47,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_earrings_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7KKIAA0TIV3AAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-70,150,140);
p.frameBounds = [rect];


(lib.earrings_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_earrings4_img
	this.instance = new lib.hero2_earrings4_img();
	this.instance.setTransform(44,-61,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero2_earrings4_img
	this.instance_1 = new lib.hero2_earrings4_img();
	this.instance_1.setTransform(-44,-61);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_earrings_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7KKIAA0TIV3AAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-70,150,140);
p.frameBounds = [rect];


(lib.earrings_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_earrings4_img
	this.instance = new lib.hero1_earrings4_img();
	this.instance.setTransform(50,-71,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero1_earrings4_img
	this.instance_1 = new lib.hero1_earrings4_img();
	this.instance_1.setTransform(-51,-71);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_earrings_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7KKIAA0TIV3AAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-71,150,141);
p.frameBounds = [rect];


(lib.earrings_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_earrings3_img
	this.instance = new lib.hero2_earrings3_img();
	this.instance.setTransform(5,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero2_earrings3_img
	this.instance_1 = new lib.hero2_earrings3_img();
	this.instance_1.setTransform(-38,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_earrings_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7KKIAA0TIV3AAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-70,150,140);
p.frameBounds = [rect];


(lib.earrings_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_earrings3_img
	this.instance = new lib.hero1_earrings3_img();
	this.instance.setTransform(1,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero1_earrings3_img
	this.instance_1 = new lib.hero1_earrings3_img();
	this.instance_1.setTransform(-52,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_earrings_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7KKIAA0TIV3AAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-72,150,142);
p.frameBounds = [rect];


(lib.earrings_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_earrings2_img
	this.instance = new lib.hero2_earrings2_img();
	this.instance.setTransform(2,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero2_earrings2_img
	this.instance_1 = new lib.hero2_earrings2_img();
	this.instance_1.setTransform(-45,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_earrings_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7KKIAA0TIV3AAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-70,150,140);
p.frameBounds = [rect];


(lib.earrings_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_earrings2_img
	this.instance = new lib.hero1_earrings2_img();
	this.instance.setTransform(2.2,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero1_earrings2_img
	this.instance_1 = new lib.hero1_earrings2_img();
	this.instance_1.setTransform(-47.8,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_earrings_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7KKIAA0TIV3AAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-70,150,140);
p.frameBounds = [rect];


(lib.earrings_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero2_earrings1_img
	this.instance = new lib.hero2_earrings1_img();
	this.instance.setTransform(6,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero2_earrings1_img
	this.instance_1 = new lib.hero2_earrings1_img();
	this.instance_1.setTransform(-40,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_earrings_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7KKIAA0TIV3AAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-70,150,140);
p.frameBounds = [rect];


(lib.earrings_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_earrings1_img
	this.instance = new lib.hero1_earrings1_img();
	this.instance.setTransform(4,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero1_earrings1_img
	this.instance_1 = new lib.hero1_earrings1_img();
	this.instance_1.setTransform(-40,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_earrings_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq7KKIAA0TIV3AAIAAUTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-70,150,140);
p.frameBounds = [rect];


(lib.dressupPanel_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-180,110);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(180,110);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-232.5,-240,465,890);
p.frameBounds = [rect];


(lib.dressupPanel_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-180,110);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(180,110);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-232.5,-240,465,890);
p.frameBounds = [rect];


(lib.dress_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero2_dress9_img();
	this.instance_1.setTransform(111.3,-120,0.968,0.968,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-250,380,480);
p.frameBounds = [rect];


(lib.dress_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero1_dress9_img();
	this.instance_1.setTransform(-93,-131);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-250,380,480);
p.frameBounds = [rect];


(lib.dress_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero2_dress8_img();
	this.instance_1.setTransform(113.6,-120,0.923,0.923,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-250,380,480);
p.frameBounds = [rect];


(lib.dress_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero1_dress8_img();
	this.instance_1.setTransform(-106,-127);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-250,380,480);
p.frameBounds = [rect];


(lib.dress_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero2_dress7_img();
	this.instance_1.setTransform(92,-118,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-250,380,480);
p.frameBounds = [rect];


(lib.dress_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero1_dress7_img();
	this.instance_1.setTransform(-98,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-250,380,480);
p.frameBounds = [rect];


(lib.dress_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero2_dress6_img();
	this.instance_1.setTransform(88,-115,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-250,380,480);
p.frameBounds = [rect];


(lib.dress_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero1_dress6_img();
	this.instance_1.setTransform(-80,-121);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-250,380,480);
p.frameBounds = [rect];


(lib.dress_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero2_dress5_img();
	this.instance_1.setTransform(89,-116,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-250,380,480);
p.frameBounds = [rect];


(lib.dress_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero1_dress5_img();
	this.instance_1.setTransform(-116,-134);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-250,380,480);
p.frameBounds = [rect];


(lib.dress_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero2_dress4_img();
	this.instance_1.setTransform(139,-133,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-250,380,480);
p.frameBounds = [rect];


(lib.dress_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero1_dress4_img();
	this.instance_1.setTransform(-107,-123);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-250,380,480);
p.frameBounds = [rect];


(lib.dress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero2_dress3_img();
	this.instance_1.setTransform(128,-137,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-250,380,480);
p.frameBounds = [rect];


(lib.dress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero1_dress3_img();
	this.instance_1.setTransform(-106,-126);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-250,380,480);
p.frameBounds = [rect];


(lib.dress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero2_dress2_img();
	this.instance_1.setTransform(116,-121,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-250,380,480);
p.frameBounds = [rect];


(lib.dress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero1_dress2_img();
	this.instance_1.setTransform(-120,-126);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-250,380,480);
p.frameBounds = [rect];


(lib.dress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero2_dress1_img();
	this.instance_1.setTransform(95,-118,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-250,380,480);
p.frameBounds = [rect];


(lib.dress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.hero1_dress1_img();
	this.instance_1.setTransform(-82,-126);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// check
	this.check_mc = new lib.current_dress_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.instance_2 = new lib.bg_dress_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-250,380,480);
p.frameBounds = [rect];


(lib.decor_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_3_3_mc();
	this.instance.setTransform(200,450,0.833,0.833,0,-105,75);

	this.instance_1 = new lib.blinking_light_3_3_mc();
	this.instance_1.setTransform(150,300,1,1,-105);

	this.instance_2 = new lib.blinking_light_3_3_mc();
	this.instance_2.setTransform(200,150.1,0.833,0.833,0,-30,150,0.1,0.1);

	this.instance_3 = new lib.blinking_light_3_3_mc();
	this.instance_3.setTransform(600,450,0.833,0.833,105);

	this.instance_4 = new lib.blinking_light_3_3_mc();
	this.instance_4.setTransform(650,300,1,1,0,105,-75);

	this.instance_5 = new lib.blinking_light_3_3_mc();
	this.instance_5.setTransform(600,150.1,0.833,0.833,30,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(19.9,61.3,760.3,458.9);
p.frameBounds = [rect];


(lib.closet_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.dress_9 = new lib.dress_9_2_mc();
	this.dress_9.setTransform(0,-20);

	this.dress_2 = new lib.dress_2_2_mc();
	this.dress_2.setTransform(0,-20);

	this.dress_3 = new lib.dress_3_2_mc();
	this.dress_3.setTransform(0,-20);

	this.dress_4 = new lib.dress_4_2_mc();
	this.dress_4.setTransform(0,-20);

	this.dress_5 = new lib.dress_5_2_mc();
	this.dress_5.setTransform(0,-20);

	this.dress_6 = new lib.dress_6_2_mc();
	this.dress_6.setTransform(0,-20);

	this.dress_7 = new lib.dress_7_2_mc();
	this.dress_7.setTransform(0,-20);

	this.dress_8 = new lib.dress_8_2_mc();
	this.dress_8.setTransform(0,-20);

	this.dress_1 = new lib.dress_1_2_mc();
	this.dress_1.setTransform(0,-20);

	this.bottom_2 = new lib.bottom_2_2_mc();
	this.bottom_2.setTransform(0,90);

	this.top_2 = new lib.top_2_2_mc();
	this.top_2.setTransform(0,-110);

	this.bottom_3 = new lib.bottom_3_2_mc();
	this.bottom_3.setTransform(0,90);

	this.top_3 = new lib.top_3_2_mc();
	this.top_3.setTransform(0,-110);

	this.bottom_4 = new lib.bottom_4_2_mc();
	this.bottom_4.setTransform(0,90);

	this.top_4 = new lib.top_4_2_mc();
	this.top_4.setTransform(0,-110);

	this.bottom_5 = new lib.bottom_5_2_mc();
	this.bottom_5.setTransform(0,90);

	this.top_5 = new lib.top_5_2_mc();
	this.top_5.setTransform(0,-110);

	this.bottom_6 = new lib.bottom_6_2_mc();
	this.bottom_6.setTransform(0,90);

	this.top_6 = new lib.top_6_2_mc();
	this.top_6.setTransform(0,-110);

	this.bottom_7 = new lib.bottom_7_2_mc();
	this.bottom_7.setTransform(0,90);

	this.top_7 = new lib.top_7_2_mc();
	this.top_7.setTransform(0,-110);

	this.bottom_8 = new lib.bottom_8_2_mc();
	this.bottom_8.setTransform(0,90);

	this.top_8 = new lib.top_8_2_mc();
	this.top_8.setTransform(0,-110);

	this.bottom_9 = new lib.bottom_9_2_mc();
	this.bottom_9.setTransform(0,90);

	this.top_9 = new lib.top_9_2_mc();
	this.top_9.setTransform(0,-110);

	this.bottom_1 = new lib.bottom_1_2_mc();
	this.bottom_1.setTransform(0,90);

	this.top_1 = new lib.top_1_2_mc();
	this.top_1.setTransform(0,-110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_9}]}).to({state:[{t:this.dress_2}]},1).to({state:[{t:this.dress_3}]},1).to({state:[{t:this.dress_4}]},1).to({state:[{t:this.dress_5}]},1).to({state:[{t:this.dress_6}]},1).to({state:[{t:this.dress_7}]},1).to({state:[{t:this.dress_8}]},1).to({state:[{t:this.dress_1}]},1).to({state:[{t:this.top_2},{t:this.bottom_2}]},1).to({state:[{t:this.top_3},{t:this.bottom_3}]},1).to({state:[{t:this.top_4},{t:this.bottom_4}]},1).to({state:[{t:this.top_5},{t:this.bottom_5}]},1).to({state:[{t:this.top_6},{t:this.bottom_6}]},1).to({state:[{t:this.top_7},{t:this.bottom_7}]},1).to({state:[{t:this.top_8},{t:this.bottom_8}]},1).to({state:[{t:this.top_9},{t:this.bottom_9}]},1).to({state:[{t:this.top_1},{t:this.bottom_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-270,380,480);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-130,-220,260,420), rect, rect, rect, rect, rect, rect, rect, rect];


(lib.closet_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// options
	this.dress_9 = new lib.dress_9_1_mc();
	this.dress_9.setTransform(0,-20);

	this.dress_2 = new lib.dress_2_1_mc();
	this.dress_2.setTransform(0,-20);

	this.dress_3 = new lib.dress_3_1_mc();
	this.dress_3.setTransform(0,-20);

	this.dress_4 = new lib.dress_4_1_mc();
	this.dress_4.setTransform(0,-20);

	this.dress_5 = new lib.dress_5_1_mc();
	this.dress_5.setTransform(0,-20);

	this.dress_6 = new lib.dress_6_1_mc();
	this.dress_6.setTransform(0,-20);

	this.dress_7 = new lib.dress_7_1_mc();
	this.dress_7.setTransform(0,-20);

	this.dress_8 = new lib.dress_8_1_mc();
	this.dress_8.setTransform(0,-20);

	this.dress_1 = new lib.dress_1_1_mc();
	this.dress_1.setTransform(0,-20);

	this.bottom_2 = new lib.bottom_2_1_mc();
	this.bottom_2.setTransform(0,90);

	this.top_2 = new lib.top_2_1_mc();
	this.top_2.setTransform(0,-110);

	this.bottom_3 = new lib.bottom_3_1_mc();
	this.bottom_3.setTransform(0,90);

	this.top_3 = new lib.top_3_1_mc();
	this.top_3.setTransform(0,-110);

	this.bottom_4 = new lib.bottom_4_1_mc();
	this.bottom_4.setTransform(0,90);

	this.top_4 = new lib.top_4_1_mc();
	this.top_4.setTransform(0,-110);

	this.bottom_5 = new lib.bottom_5_1_mc();
	this.bottom_5.setTransform(0,90);

	this.top_5 = new lib.top_5_1_mc();
	this.top_5.setTransform(0,-110);

	this.bottom_6 = new lib.bottom_6_1_mc();
	this.bottom_6.setTransform(0,90);

	this.top_6 = new lib.top_6_1_mc();
	this.top_6.setTransform(0,-110);

	this.bottom_7 = new lib.bottom_7_1_mc();
	this.bottom_7.setTransform(0,90);

	this.top_7 = new lib.top_7_1_mc();
	this.top_7.setTransform(0,-110);

	this.bottom_8 = new lib.bottom_8_1_mc();
	this.bottom_8.setTransform(0,90);

	this.top_8 = new lib.top_8_1_mc();
	this.top_8.setTransform(0,-110);

	this.bottom_9 = new lib.bottom_9_1_mc();
	this.bottom_9.setTransform(0,90);

	this.top_9 = new lib.top_9_1_mc();
	this.top_9.setTransform(0,-110);

	this.bottom_1 = new lib.bottom_1_1_mc();
	this.bottom_1.setTransform(0,90);

	this.top_1 = new lib.top_1_1_mc();
	this.top_1.setTransform(0,-110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_9}]}).to({state:[{t:this.dress_2}]},1).to({state:[{t:this.dress_3}]},1).to({state:[{t:this.dress_4}]},1).to({state:[{t:this.dress_5}]},1).to({state:[{t:this.dress_6}]},1).to({state:[{t:this.dress_7}]},1).to({state:[{t:this.dress_8}]},1).to({state:[{t:this.dress_1}]},1).to({state:[{t:this.top_2},{t:this.bottom_2}]},1).to({state:[{t:this.top_3},{t:this.bottom_3}]},1).to({state:[{t:this.top_4},{t:this.bottom_4}]},1).to({state:[{t:this.top_5},{t:this.bottom_5}]},1).to({state:[{t:this.top_6},{t:this.bottom_6}]},1).to({state:[{t:this.top_7},{t:this.bottom_7}]},1).to({state:[{t:this.top_8},{t:this.bottom_8}]},1).to({state:[{t:this.top_9},{t:this.bottom_9}]},1).to({state:[{t:this.top_1},{t:this.bottom_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-270,380,480);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-130,-220,260,420), rect, rect, rect, rect, rect, rect, rect, rect];


(lib.closet_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.beads_0 = new lib.beads_0_mc();
	this.beads_0.setTransform(-195,-130);

	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(-195,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.beads_0}]},6).to({state:[{t:this.earrings_0}]},3).wait(3));

	// options
	this.hair_5 = new lib.hairstyle_5_2_mc();
	this.hair_5.setTransform(0,-40);

	this.hair_2 = new lib.hairstyle_2_2_mc();
	this.hair_2.setTransform(0,-40);

	this.hair_3 = new lib.hairstyle_3_2_mc();
	this.hair_3.setTransform(0,-40);

	this.hair_4 = new lib.hairstyle_4_2_mc();
	this.hair_4.setTransform(0,-40);

	this.hair_6 = new lib.hairstyle_6_2_mc();
	this.hair_6.setTransform(0,-40);

	this.hair_1 = new lib.hairstyle_1_2_mc();
	this.hair_1.setTransform(0,-40);

	this.beads_2 = new lib.beads_2_2_mc();
	this.beads_2.setTransform(80,20);

	this.beads_1 = new lib.beads_1_2_mc();
	this.beads_1.setTransform(-80,20);

	this.beads_3 = new lib.beads_3_2_mc();
	this.beads_3.setTransform(0,-110);

	this.beads_6 = new lib.beads_6_2_mc();
	this.beads_6.setTransform(80,20);

	this.beads_4 = new lib.beads_4_2_mc();
	this.beads_4.setTransform(-80,20);

	this.beads_5 = new lib.beads_5_2_mc();
	this.beads_5.setTransform(0,-110);

	this.beads_8 = new lib.beads_8_2_mc();
	this.beads_8.setTransform(80,20);

	this.beads_7 = new lib.beads_7_2_mc();
	this.beads_7.setTransform(-80,20);

	this.beads_9 = new lib.beads_9_2_mc();
	this.beads_9.setTransform(0,-110);

	this.earrings_2 = new lib.earrings_2_2_mc();
	this.earrings_2.setTransform(80,25);

	this.earrings_1 = new lib.earrings_1_2_mc();
	this.earrings_1.setTransform(-80,25);

	this.earrings_3 = new lib.earrings_3_2_mc();
	this.earrings_3.setTransform(0,-125);

	this.earrings_5 = new lib.earrings_5_2_mc();
	this.earrings_5.setTransform(80,25);

	this.earrings_4 = new lib.earrings_4_2_mc();
	this.earrings_4.setTransform(-80,25);

	this.earrings_6 = new lib.earrings_6_2_mc();
	this.earrings_6.setTransform(0,-125);

	this.earrings_8 = new lib.earrings_8_2_mc();
	this.earrings_8.setTransform(80,25);

	this.earrings_7 = new lib.earrings_7_2_mc();
	this.earrings_7.setTransform(-80,25);

	this.earrings_9 = new lib.earrings_9_2_mc();
	this.earrings_9.setTransform(0,-125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_5}]}).to({state:[{t:this.hair_2}]},1).to({state:[{t:this.hair_3}]},1).to({state:[{t:this.hair_4}]},1).to({state:[{t:this.hair_6}]},1).to({state:[{t:this.hair_1}]},1).to({state:[{t:this.beads_3},{t:this.beads_1},{t:this.beads_2}]},1).to({state:[{t:this.beads_5},{t:this.beads_4},{t:this.beads_6}]},1).to({state:[{t:this.beads_9},{t:this.beads_7},{t:this.beads_8}]},1).to({state:[{t:this.earrings_3},{t:this.earrings_1},{t:this.earrings_2}]},1).to({state:[{t:this.earrings_6},{t:this.earrings_4},{t:this.earrings_5}]},1).to({state:[{t:this.earrings_9},{t:this.earrings_7},{t:this.earrings_8}]},1).wait(1));

	// decor
	this.instance = new lib.wardrobe_2_2_mc();
	this.instance.setTransform(0,-50);

	this.instance_1 = new lib.wardrobe_2_2_mc();
	this.instance_1.setTransform(0,80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance,p:{y:-50}}]},6).to({state:[{t:this.instance_1},{t:this.instance,p:{y:-70}}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-210,340,340);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-220,-200,440,310), rect, rect, rect=new cjs.Rectangle(-220,-195,440,305), rect, rect];


(lib.closet_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.beads_0 = new lib.beads_0_mc();
	this.beads_0.setTransform(-195,-130);

	this.earrings_0 = new lib.earrings_0_mc();
	this.earrings_0.setTransform(-195,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.beads_0}]},6).to({state:[{t:this.earrings_0}]},3).wait(3));

	// options
	this.hair_1 = new lib.hairstyle_1_1_mc();
	this.hair_1.setTransform(0,-40);

	this.hair_2 = new lib.hairstyle_2_1_mc();
	this.hair_2.setTransform(0,-40);

	this.hair_3 = new lib.hairstyle_3_1_mc();
	this.hair_3.setTransform(0,-40);

	this.hair_5 = new lib.hairstyle_5_1_mc();
	this.hair_5.setTransform(0,-40);

	this.hair_6 = new lib.hairstyle_6_1_mc();
	this.hair_6.setTransform(0,-40);

	this.hair_4 = new lib.hairstyle_4_1_mc();
	this.hair_4.setTransform(0,-40);

	this.beads_2 = new lib.beads_2_1_mc();
	this.beads_2.setTransform(80,10);

	this.beads_1 = new lib.beads_1_1_mc();
	this.beads_1.setTransform(-80,10);

	this.beads_3 = new lib.beads_3_1_mc();
	this.beads_3.setTransform(0,-120);

	this.beads_6 = new lib.beads_6_1_mc();
	this.beads_6.setTransform(80,10);

	this.beads_4 = new lib.beads_4_1_mc();
	this.beads_4.setTransform(-80,10);

	this.beads_5 = new lib.beads_5_1_mc();
	this.beads_5.setTransform(0,-120);

	this.beads_9 = new lib.beads_9_1_mc();
	this.beads_9.setTransform(80,10);

	this.beads_7 = new lib.beads_7_1_mc();
	this.beads_7.setTransform(-80,10);

	this.beads_8 = new lib.beads_8_1_mc();
	this.beads_8.setTransform(0,-120);

	this.earrings_3 = new lib.earrings_3_1_mc();
	this.earrings_3.setTransform(80,25);

	this.earrings_1 = new lib.earrings_1_1_mc();
	this.earrings_1.setTransform(-80,25);

	this.earrings_2 = new lib.earrings_2_1_mc();
	this.earrings_2.setTransform(0,-125);

	this.earrings_6 = new lib.earrings_6_1_mc();
	this.earrings_6.setTransform(80,25);

	this.earrings_4 = new lib.earrings_4_1_mc();
	this.earrings_4.setTransform(-80,25);

	this.earrings_5 = new lib.earrings_5_1_mc();
	this.earrings_5.setTransform(0,-125);

	this.earrings_8 = new lib.earrings_8_1_mc();
	this.earrings_8.setTransform(80,25);

	this.earrings_7 = new lib.earrings_7_1_mc();
	this.earrings_7.setTransform(-80,25);

	this.earrings_9 = new lib.earrings_9_1_mc();
	this.earrings_9.setTransform(0,-125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1}]}).to({state:[{t:this.hair_2}]},1).to({state:[{t:this.hair_3}]},1).to({state:[{t:this.hair_5}]},1).to({state:[{t:this.hair_6}]},1).to({state:[{t:this.hair_4}]},1).to({state:[{t:this.beads_3},{t:this.beads_1},{t:this.beads_2}]},1).to({state:[{t:this.beads_5},{t:this.beads_4},{t:this.beads_6}]},1).to({state:[{t:this.beads_8},{t:this.beads_7},{t:this.beads_9}]},1).to({state:[{t:this.earrings_2},{t:this.earrings_1},{t:this.earrings_3}]},1).to({state:[{t:this.earrings_5},{t:this.earrings_4},{t:this.earrings_6}]},1).to({state:[{t:this.earrings_9},{t:this.earrings_7},{t:this.earrings_8}]},1).wait(1));

	// decor
	this.instance = new lib.wardrobe_2_2_mc();
	this.instance.setTransform(0,-50);

	this.instance_1 = new lib.wardrobe_2_2_mc();
	this.instance_1.setTransform(0,80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance,p:{y:-50}}]},6).to({state:[{t:this.instance_1},{t:this.instance,p:{y:-70}}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-210,340,340);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-220,-210,440,320), rect, rect, rect=new cjs.Rectangle(-220,-195,440,305), rect, rect];


(lib.bodyDressupPanel_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-270,380,480);
p.frameBounds = [rect];


(lib.bodyDressupPanel_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-270,380,480);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-210,340,340);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-210,340,340);
p.frameBounds = [rect];


(lib.background_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_light_3_2_mc();
	this.instance.setTransform(-197,211);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(1016,202);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(401,201);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

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
	this.instance.setTransform(1023,468);

	this.instance_1 = new lib.blinking_light_3_2_mc();
	this.instance_1.setTransform(-216,463);

	this.instance_2 = new lib.blinking_light_3_2_mc();
	this.instance_2.setTransform(-114,489);

	this.instance_3 = new lib.blinking_light_3_2_mc();
	this.instance_3.setTransform(889,489);

	this.instance_4 = new lib.blinking_light_3_2_mc();
	this.instance_4.setTransform(395,176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_5 = new lib.background_1_img();
	this.instance_5.setTransform(-400,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-25,50,50);
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


(lib.quest_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":139,"end":319});

	// timeline functions:
	this.frame_39 = function() {
		try
		{
			app.addSoundFunc("dust_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_169 = function() {
		try
		{
			app.addSoundFunc("air_sound", 0.3);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_304 = function() {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(130).call(this.frame_169).wait(135).call(this.frame_304).wait(16));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(100,500);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(118).to({y:450},10).to({y:500},5).wait(186));

	// decor
	this.instance = new lib.forward_mc();
	this.instance.setTransform(700,700,0.947,0.947);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(299).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:0.84,scaleY:0.84,x:700.1,y:450.1},10).to({regX:0,regY:0,scaleX:0.95,scaleY:0.95,x:700,y:500},5).wait(6));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_2_mc();
	this.dressupPanel_mc.setTransform(560,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:900},0).wait(78).to({y:250},15).to({y:300},5).wait(70).to({y:250},5).to({y:900},15).wait(131));

	// decor
	this.instance_1 = new lib.dusts_2_mc();
	this.instance_1.setTransform(560,555);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({_off:false},0).to({_off:true},36).wait(240));

	// decor
	this.instance_2 = new lib.bag_1_mc();
	this.instance_2.setTransform(560,800);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({y:300},10).to({scaleX:0.86,scaleY:0.86,y:420},10).wait(25).to({y:800},10).to({_off:true},1).wait(240));

	// decor
	this.instance_3 = new lib.decor_shadow_mc();
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(204).to({_off:false},0).to({alpha:1},15).wait(80).to({alpha:0.012},10).to({_off:true},1).wait(10));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(200,330);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({y:1400},0).wait(98).to({y:320},15).to({y:330},5).wait(70).to({x:450},15).to({x:400},5).wait(111));

	// shadow
	this.instance_4 = new lib.shadow_dressup_mc();
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(204).to({_off:false},0).to({alpha:1},15).wait(80).to({alpha:0.012},10).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(5,20.5,787.5,949.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(5,605,787.5,1077), rect, rect, new cjs.Rectangle(5,605,787.5,1077.1), rect=new cjs.Rectangle(5,605,787.5,1077), rect, rect, new cjs.Rectangle(5,605,787.5,1077.1), rect=new cjs.Rectangle(5,605,787.5,1077), rect, rect, new cjs.Rectangle(5,605,787.5,1077.1), rect=new cjs.Rectangle(5,605,787.5,1077), rect, rect, new cjs.Rectangle(5,605,787.5,1077.1), rect=new cjs.Rectangle(5,605,787.5,1077), rect, rect, new cjs.Rectangle(5,605,787.5,1077.1), rect=new cjs.Rectangle(5,605,787.5,1077), rect, rect, new cjs.Rectangle(5,605,787.5,1077.1), new cjs.Rectangle(5,580,787.5,1102), new cjs.Rectangle(5,530,787.5,1152), new cjs.Rectangle(5,480,787.5,1202), new cjs.Rectangle(5,430,787.5,1252), new cjs.Rectangle(5,380,787.5,1302), new cjs.Rectangle(5,330,787.5,1352), new cjs.Rectangle(5,280,787.5,1402), new cjs.Rectangle(5,230,787.5,1452), new cjs.Rectangle(5,180,787.5,1502), new cjs.Rectangle(5,130,787.5,1552), new cjs.Rectangle(5,144.4,787.5,1537.6), new cjs.Rectangle(5,158.9,787.5,1523.2), new cjs.Rectangle(5,173.3,787.5,1508.8), new cjs.Rectangle(5,187.7,787.5,1494.3), new cjs.Rectangle(5,202.2,787.5,1479.9), new cjs.Rectangle(5,216.6,787.5,1465.5), new cjs.Rectangle(5,231,787.5,1451), new cjs.Rectangle(5,245.4,787.5,1436.6), new cjs.Rectangle(5,259.9,787.5,1422.2), rect=new cjs.Rectangle(5,274.3,858.8,1407.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(5,312.3,858.8,1369.8), new cjs.Rectangle(5,350.3,858.8,1331.8), new cjs.Rectangle(5,388.3,858.8,1293.8), new cjs.Rectangle(5,426.3,858.8,1255.8), new cjs.Rectangle(5,464.3,858.8,1217.8), rect=new cjs.Rectangle(5,483.2,858.8,1198.9), rect, rect, rect, rect, new cjs.Rectangle(5,605,787.5,1077.1), new cjs.Rectangle(5,573.4,787.5,1108.7), new cjs.Rectangle(5,530,787.5,1152), new cjs.Rectangle(5,486.7,787.5,1195.4), new cjs.Rectangle(5,443.4,787.5,1238.7), new cjs.Rectangle(5,400,787.5,1282), new cjs.Rectangle(5,356.7,787.5,1325.4), new cjs.Rectangle(5,313.4,787.5,1368.7), new cjs.Rectangle(5,270,787.5,1412), new cjs.Rectangle(5,226.7,787.5,1455.4), new cjs.Rectangle(5,183.4,787.5,1498.7), new cjs.Rectangle(5,140,787.5,1542), new cjs.Rectangle(5,96.7,787.5,1585.4), new cjs.Rectangle(5,53.4,787.5,1628.7), new cjs.Rectangle(5,10,787.5,1672), new cjs.Rectangle(5,20,787.5,1662), new cjs.Rectangle(5,30,787.5,1652), new cjs.Rectangle(5,40,787.5,1642), new cjs.Rectangle(5,50,787.5,1632), new cjs.Rectangle(5,60,787.5,1622), new cjs.Rectangle(5,60,787.5,1550), new cjs.Rectangle(5,60,787.5,1478), new cjs.Rectangle(5,60,787.5,1406), new cjs.Rectangle(5,60,787.5,1334), new cjs.Rectangle(5,60,787.5,1262), new cjs.Rectangle(5,60,787.5,1190), new cjs.Rectangle(5,60,787.5,1118), new cjs.Rectangle(5,60,787.5,1046), new cjs.Rectangle(5,60,787.5,974), new cjs.Rectangle(5,60,787.5,902), rect=new cjs.Rectangle(5,60,787.5,890), rect, rect, rect, new cjs.Rectangle(5,10.5,787.5,939.5), new cjs.Rectangle(5,12.5,787.5,937.5), new cjs.Rectangle(5,14.5,787.5,935.5), new cjs.Rectangle(5,16.5,787.5,933.5), new cjs.Rectangle(5,18.5,787.5,931.5), rect=new cjs.Rectangle(5,20.5,787.5,929.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(5,20.5,787.5,919.5), new cjs.Rectangle(5,20.5,787.5,909.5), new cjs.Rectangle(5,20.5,787.5,899.5), new cjs.Rectangle(5,20,787.5,890), new cjs.Rectangle(5,10,787.5,890), new cjs.Rectangle(5,20.5,787.5,922.9), new cjs.Rectangle(5,20.5,787.5,966.2), new cjs.Rectangle(5,20.5,787.5,1009.5), new cjs.Rectangle(5,20.5,787.5,1052.9), new cjs.Rectangle(5,20.5,787.5,1096.2), new cjs.Rectangle(5,20.5,787.5,1139.5), new cjs.Rectangle(5,20.5,787.5,1182.9), new cjs.Rectangle(5,20.5,787.5,1226.2), new cjs.Rectangle(5,20.5,787.5,1269.5), new cjs.Rectangle(5,20.5,787.5,1312.9), new cjs.Rectangle(5,20.5,787.5,1356.2), new cjs.Rectangle(5,20.5,787.5,1399.5), new cjs.Rectangle(5,20.5,787.5,1442.9), new cjs.Rectangle(5,20.5,787.5,1486.2), rect=new cjs.Rectangle(5,20.5,787.5,1529.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-410,-10,1620,1560), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(5,20.5,787.5,1529.5), rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":139,"end":319});

	// timeline functions:
	this.frame_39 = function() {
		try
		{
			app.addSoundFunc("dust_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_169 = function() {
		try
		{
			app.addSoundFunc("air_sound", 0.3);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_304 = function() {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(130).call(this.frame_169).wait(135).call(this.frame_304).wait(16));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(100,500);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(118).to({y:450},10).to({y:500},5).wait(186));

	// decor
	this.instance = new lib.forward_mc();
	this.instance.setTransform(700,700,0.947,0.947);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(299).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:0.84,scaleY:0.84,x:700.1,y:450.1},10).to({regX:0,regY:0,scaleX:0.95,scaleY:0.95,x:700,y:500},5).wait(6));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_1_mc();
	this.dressupPanel_mc.setTransform(560,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:900},0).wait(78).to({y:250},15).to({y:300},5).wait(70).to({y:250},5).to({y:900},15).wait(131));

	// decor
	this.instance_1 = new lib.dusts_2_mc();
	this.instance_1.setTransform(560,555);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({_off:false},0).to({_off:true},36).wait(240));

	// decor
	this.instance_2 = new lib.bag_1_mc();
	this.instance_2.setTransform(560,800);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({y:300},10).to({scaleX:0.86,scaleY:0.86,y:420},10).wait(25).to({y:800},10).to({_off:true},1).wait(240));

	// decor
	this.instance_3 = new lib.decor_shadow_mc();
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(204).to({_off:false},0).to({alpha:1},15).wait(80).to({alpha:0.012},10).to({_off:true},1).wait(10));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(200,330);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({y:1400},0).wait(98).to({y:280},15).to({y:330},5).wait(70).to({x:450},15).to({x:400},5).wait(111));

	// shadow
	this.instance_4 = new lib.shadow_dressup_mc();
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(204).to({_off:false},0).to({alpha:1},15).wait(80).to({alpha:0.012},10).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1.5,-33,794,1003);
p.frameBounds = [rect, rect=new cjs.Rectangle(-1.5,605,794,1172.3), rect, rect, new cjs.Rectangle(-1.5,605,794,1172.4), rect=new cjs.Rectangle(-1.5,605,794,1172.3), rect, rect, new cjs.Rectangle(-1.5,605,794,1172.4), rect=new cjs.Rectangle(-1.5,605,794,1172.3), rect, rect, new cjs.Rectangle(-1.5,605,794,1172.4), rect=new cjs.Rectangle(-1.5,605,794,1172.3), rect, rect, new cjs.Rectangle(-1.5,605,794,1172.4), rect=new cjs.Rectangle(-1.5,605,794,1172.3), rect, rect, new cjs.Rectangle(-1.5,605,794,1172.4), rect=new cjs.Rectangle(-1.5,605,794,1172.3), rect, rect, new cjs.Rectangle(-1.5,605,794,1172.4), new cjs.Rectangle(-1.5,580,794,1197.3), new cjs.Rectangle(-1.5,530,794,1247.3), new cjs.Rectangle(-1.5,480,794,1297.3), new cjs.Rectangle(-1.5,430,794,1347.3), new cjs.Rectangle(-1.5,380,794,1397.3), new cjs.Rectangle(-1.5,330,794,1447.3), new cjs.Rectangle(-1.5,280,794,1497.3), new cjs.Rectangle(-1.5,230,794,1547.3), new cjs.Rectangle(-1.5,180,794,1597.3), new cjs.Rectangle(-1.5,130,794,1647.3), new cjs.Rectangle(-1.5,144.4,794,1632.9), new cjs.Rectangle(-1.5,158.9,794,1618.5), new cjs.Rectangle(-1.5,173.3,794,1604.1), new cjs.Rectangle(-1.5,187.7,794,1589.6), new cjs.Rectangle(-1.5,202.2,794,1575.1), new cjs.Rectangle(-1.5,216.6,794,1560.8), new cjs.Rectangle(-1.5,231,794,1546.3), new cjs.Rectangle(-1.5,245.4,794,1531.9), new cjs.Rectangle(-1.5,259.9,794,1517.4), rect=new cjs.Rectangle(-1.5,274.3,865.3,1503), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1.5,312.3,865.3,1465.1), new cjs.Rectangle(-1.5,350.3,865.3,1427.1), new cjs.Rectangle(-1.5,388.3,865.3,1389.1), new cjs.Rectangle(-1.5,426.3,865.3,1351.1), new cjs.Rectangle(-1.5,464.3,865.3,1313.1), rect=new cjs.Rectangle(-1.5,483.2,865.3,1294.2), rect, rect, rect, rect, new cjs.Rectangle(-1.5,605,794,1172.4), new cjs.Rectangle(-1.5,573.4,794,1203.9), new cjs.Rectangle(-1.5,530,794,1247.3), new cjs.Rectangle(-1.5,486.7,794,1290.7), new cjs.Rectangle(-1.5,443.4,794,1333.9), new cjs.Rectangle(-1.5,400,794,1377.3), new cjs.Rectangle(-1.5,356.7,794,1420.7), new cjs.Rectangle(-1.5,313.4,794,1463.9), new cjs.Rectangle(-1.5,270,794,1507.3), new cjs.Rectangle(-1.5,226.7,794,1550.6), new cjs.Rectangle(-1.5,183.4,794,1594), new cjs.Rectangle(-1.5,140,794,1637.3), new cjs.Rectangle(-1.5,96.7,794,1680.7), new cjs.Rectangle(-1.5,53.4,794,1724), new cjs.Rectangle(-1.5,10,794,1767.3), new cjs.Rectangle(-1.5,20,794,1757.3), new cjs.Rectangle(-1.5,30,794,1747.3), new cjs.Rectangle(-1.5,40,794,1737.3), new cjs.Rectangle(-1.5,50,794,1727.3), new cjs.Rectangle(-1.5,60,794,1717.3), new cjs.Rectangle(-1.5,60,794,1642.7), new cjs.Rectangle(-1.5,60,794,1568), new cjs.Rectangle(-1.5,60,794,1493.3), new cjs.Rectangle(-1.5,60,794,1418.7), new cjs.Rectangle(-1.5,60,794,1344), new cjs.Rectangle(-1.5,60,794,1269.3), new cjs.Rectangle(-1.5,60,794,1194.7), new cjs.Rectangle(-1.5,60,794,1120), new cjs.Rectangle(-1.5,60,794,1045.3), new cjs.Rectangle(-1.5,60,794,970.7), new cjs.Rectangle(-1.5,60,794,896), rect=new cjs.Rectangle(-1.5,60,794,890), rect, new cjs.Rectangle(-1.5,-8.3,794,958.4), new cjs.Rectangle(-1.5,-83,794,1033), new cjs.Rectangle(-1.5,-73,794,1023), new cjs.Rectangle(-1.5,-63,794,1013), new cjs.Rectangle(-1.5,-53,794,1003), new cjs.Rectangle(-1.5,-43,794,993), rect=new cjs.Rectangle(-1.5,-33,794,983), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1.5,-33,794,973), new cjs.Rectangle(-1.5,-33,794,963), new cjs.Rectangle(-1.5,-33,794,953), new cjs.Rectangle(-1.5,-33,794,943), new cjs.Rectangle(-1.5,-33,794,933), new cjs.Rectangle(-1.5,-33,794,976.4), new cjs.Rectangle(-1.5,-33,794,1019.7), new cjs.Rectangle(-1.5,-33,794,1063), new cjs.Rectangle(-1.5,-33,794,1106.4), new cjs.Rectangle(-1.5,-33,794,1149.7), new cjs.Rectangle(-1.5,-33,794,1193), new cjs.Rectangle(-1.5,-33,794,1236.4), new cjs.Rectangle(-1.5,-33,794,1279.7), new cjs.Rectangle(-1.5,-33,794,1323), new cjs.Rectangle(-1.5,-33,794,1366.4), new cjs.Rectangle(-1.5,-33,794,1409.7), new cjs.Rectangle(-1.5,-33,794,1453), new cjs.Rectangle(-1.5,-33,794,1496.4), new cjs.Rectangle(-1.5,-33,794,1539.7), new cjs.Rectangle(-1.5,-33,794,1583), rect=new cjs.Rectangle(5,-33,787.5,1583), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-410,-33,1620,1583), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(5,-33,787.5,1583), rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-370,-210,740,420);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.dressupPanel_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-190,60);

	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(190,60);

	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_3},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_3_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-242.5,-270,485,920);
p.frameBounds = [rect];


(lib.dressupPanel_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-180,60);

	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(180,60);

	this.set_3 = new lib.set_0_mc();
	this.set_3.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_3},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_3_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-232.5,-270,465,920);
p.frameBounds = [rect];


(lib.dressupPanel_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-60,160);

	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(60,160);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-260,440,910);
p.frameBounds = [rect];


(lib.dressupPanel_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-60,160);

	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(60,160);

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
p.nominalBounds = rect = new cjs.Rectangle(-220,-260,440,910);
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
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,675);
p.frameBounds = [rect];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(400.5,1050.5,0.75,0.75,0,0,0,0.7,0.7);

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
	this.freeGames_mc.setTransform(400,1150,0.727,0.727);
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
	this.instance.setTransform(320,500);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(0,400);
	this.instance_1.alpha = 0.301;
	this.instance_1.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// heroes
	this.instance_2 = new lib.heroes_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(200,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_3 = new lib.background_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1474.4);
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
	this.instance.alpha = 0.301;
	this.instance.cache(-402,-2,1604,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(200,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_1 = new lib.background_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-400,-280.8,1600,1261.9);
p.frameBounds = [rect];


(lib.quest_4_mc = function(mode,startPosition,loop) {
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
	this.object_2 = new lib.object_2_1_mc();
	this.object_2.setTransform(700,500);
	this.object_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.object_2).wait(1).to({_off:false},0).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(5,-349.4,787.5,1319.4);
p.frameBounds = [rect, new cjs.Rectangle(5,-349.4,825,1319.4)];


(lib.quest_1_mc = function(mode,startPosition,loop) {
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
	this.object_2 = new lib.object_2_1_mc();
	this.object_2.setTransform(700,500);
	this.object_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.object_2).wait(1).to({_off:false},0).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1.5,-349.4,794,1319.4);
p.frameBounds = [rect, new cjs.Rectangle(-1.5,-349.4,831.5,1319.4)];


(lib.quest_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":259});

	// timeline functions:
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
	this.frame_109 = function() {
		try
		{
			app.addSoundFunc("air_sound", 0.3);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(65).call(this.frame_109).wait(151));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(560.1,530.1,0.842,0.842,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700.1},0).wait(53).to({y:480.1},10).to({y:530.1},5).wait(191));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_3_2_mc();
	this.dressupPanel_mc.setTransform(560,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:1500},0).wait(28).to({x:510},20).to({x:560},5).wait(55).to({x:510},5).to({x:1500},15).wait(131));

	// photoflash
	this.photoflash_comp = new lib.photoflash_0_mc();
	this.photoflash_comp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.photoflash_comp).wait(144).to({_off:false},0).to({_off:true},66).wait(50));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(180,330);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:-800},0).wait(28).to({x:230},20).to({x:180},5).wait(75).to({x:450},15).to({x:400},5).wait(111));

	// shadow
	this.instance = new lib.shadow_dressup_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(129).to({_off:false},0).to({alpha:1},15).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(21.7,20.5,780.8,929.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-958.3,20.5,2700.8,929.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-906.8,20.5,2599.8,929.5), new cjs.Rectangle(-855.3,20.5,2498.8,929.5), new cjs.Rectangle(-803.8,20.5,2397.8,929.5), new cjs.Rectangle(-752.3,20.5,2296.8,929.5), new cjs.Rectangle(-700.8,20.5,2195.8,929.5), new cjs.Rectangle(-649.3,20.5,2094.8,929.5), new cjs.Rectangle(-597.8,20.5,1993.8,929.5), new cjs.Rectangle(-546.3,20.5,1892.8,929.5), new cjs.Rectangle(-494.8,20.5,1791.8,929.5), new cjs.Rectangle(-443.3,20.5,1690.8,929.5), new cjs.Rectangle(-391.8,20.5,1589.8,929.5), new cjs.Rectangle(-340.3,20.5,1488.8,929.5), new cjs.Rectangle(-288.8,20.5,1387.8,929.5), new cjs.Rectangle(-237.3,20.5,1286.8,929.5), new cjs.Rectangle(-185.8,20.5,1185.8,929.5), new cjs.Rectangle(-134.3,20.5,1084.8,929.5), new cjs.Rectangle(-82.8,20.5,983.8,929.5), new cjs.Rectangle(-31.3,20.5,882.8,929.5), new cjs.Rectangle(20.2,20.5,781.8,929.5), new cjs.Rectangle(71.7,20.5,680.8,929.5), new cjs.Rectangle(61.7,20.5,700.8,929.5), new cjs.Rectangle(51.7,20.5,720.8,929.5), new cjs.Rectangle(41.7,20.5,740.8,929.5), new cjs.Rectangle(31.7,20.5,760.8,929.5), rect=new cjs.Rectangle(21.7,20.5,780.8,929.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(21.7,20.5,770.8,929.5), new cjs.Rectangle(21.7,20.5,760.8,929.5), new cjs.Rectangle(21.7,20.5,750.8,929.5), new cjs.Rectangle(21.7,20.5,740.8,929.5), new cjs.Rectangle(21.7,20.5,730.8,929.5), new cjs.Rectangle(21.7,20.5,796.8,929.5), new cjs.Rectangle(21.7,20.5,862.8,929.5), new cjs.Rectangle(21.7,20.5,928.8,929.5), new cjs.Rectangle(21.7,20.5,994.8,929.5), new cjs.Rectangle(21.7,20.5,1060.8,929.5), new cjs.Rectangle(21.7,20.5,1126.8,929.5), new cjs.Rectangle(21.7,20.5,1192.8,929.5), new cjs.Rectangle(21.7,20.5,1258.8,929.5), new cjs.Rectangle(21.7,20.5,1324.8,929.5), new cjs.Rectangle(21.7,20.5,1390.8,929.5), new cjs.Rectangle(21.7,20.5,1456.8,929.5), new cjs.Rectangle(21.7,20.5,1522.8,929.5), new cjs.Rectangle(21.7,20.5,1588.8,929.5), new cjs.Rectangle(21.7,20.5,1654.8,929.5), rect=new cjs.Rectangle(-410,-10,2152.5,960), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-410,-387,2152.5,1337), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-410,-10,2152.5,960), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":139,"end":319});

	// timeline functions:
	this.frame_39 = function() {
		try
		{
			app.addSoundFunc("dust_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_169 = function() {
		try
		{
			app.addSoundFunc("air_sound", 0.3);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(130).call(this.frame_169).wait(151));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(700,500,0.947,0.947);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(118).to({y:450},10).to({y:500},5).wait(186));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_2_mc();
	this.dressupPanel_mc.setTransform(220,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:900},0).wait(78).to({y:250},15).to({y:300},5).wait(70).to({y:250},5).to({y:900},15).wait(131));

	// decor
	this.instance = new lib.dusts_3_mc();
	this.instance.setTransform(220,565);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:false},0).to({_off:true},36).wait(240));

	// decor
	this.instance_1 = new lib.bag_2_mc();
	this.instance_1.setTransform(220,800);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({y:340},10).to({scaleX:0.86,scaleY:0.86,y:430},10).wait(25).to({y:800},10).to({_off:true},1).wait(240));

	// decor
	this.instance_2 = new lib.decor_shadow_mc();
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(204).to({_off:false},0).to({alpha:1},15).wait(101));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(600,330);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:1500},0).wait(98).to({skewY:180},0).to({x:550},15).to({x:600},5).wait(5).to({skewY:0},0).wait(65).to({x:350},15).to({x:400},5).wait(111));

	// shadow
	this.instance_3 = new lib.shadow_dressup_mc();
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(204).to({_off:false},0).to({alpha:1},15).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,20.5,790,949.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(0,20.5,1651.7,1529.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-83.7,20.5,1735.5,1529.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(0,20.5,1651.7,1486.2), new cjs.Rectangle(0,20.5,1651.7,1442.9), new cjs.Rectangle(0,20.5,1651.7,1399.5), new cjs.Rectangle(0,20.5,1651.7,1356.2), new cjs.Rectangle(0,20.5,1651.7,1312.9), new cjs.Rectangle(0,20.5,1651.7,1269.5), new cjs.Rectangle(0,20.5,1651.7,1226.2), new cjs.Rectangle(0,20.5,1651.7,1182.9), new cjs.Rectangle(0,20.5,1651.7,1139.5), new cjs.Rectangle(0,20.5,1651.7,1096.2), new cjs.Rectangle(0,20.5,1651.7,1052.9), new cjs.Rectangle(0,20.5,1651.7,1009.5), new cjs.Rectangle(0,20.5,1651.7,966.2), new cjs.Rectangle(0,20.5,1651.7,922.9), new cjs.Rectangle(0,-10,1651.7,910), new cjs.Rectangle(0,0,1651.7,910), new cjs.Rectangle(0,10,1651.7,910), new cjs.Rectangle(0,20,1651.7,910), new cjs.Rectangle(0,20.5,1651.7,919.5), new cjs.Rectangle(0,20.5,1658.3,929.5), new cjs.Rectangle(0,20.5,1595,929.5), new cjs.Rectangle(0,20.5,1531.7,929.5), new cjs.Rectangle(0,20.5,1468.3,929.5), new cjs.Rectangle(0,20.5,1405,929.5), new cjs.Rectangle(0,20.5,1341.7,929.5), new cjs.Rectangle(0,20.5,1278.3,929.5), new cjs.Rectangle(0,20.5,1215,929.5), new cjs.Rectangle(0,20.5,1151.7,929.5), new cjs.Rectangle(0,20.5,1088.3,929.5), new cjs.Rectangle(0,20.5,1025,929.5), new cjs.Rectangle(0,20.5,961.7,929.5), new cjs.Rectangle(0,20.5,898.3,929.5), new cjs.Rectangle(0,20.5,835,929.5), rect=new cjs.Rectangle(0,20.5,790,929.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(0,20.5,790,919.5), new cjs.Rectangle(0,20,790,910), new cjs.Rectangle(0,10,790,910), new cjs.Rectangle(0,0,790,910), new cjs.Rectangle(0,-10,790,910), new cjs.Rectangle(0,20.5,790,922.9), new cjs.Rectangle(0,20.5,790,966.2), new cjs.Rectangle(0,20.5,790,1009.5), new cjs.Rectangle(0,20.5,790,1052.9), new cjs.Rectangle(0,20.5,790,1096.2), new cjs.Rectangle(0,20.5,790,1139.5), new cjs.Rectangle(0,20.5,790,1182.9), new cjs.Rectangle(0,20.5,790,1226.2), new cjs.Rectangle(0,20.5,790,1269.5), new cjs.Rectangle(0,20.5,790,1312.9), new cjs.Rectangle(0,20.5,790,1356.2), new cjs.Rectangle(0,20.5,790,1399.5), new cjs.Rectangle(0,20.5,790,1442.9), new cjs.Rectangle(0,20.5,790,1486.2), rect=new cjs.Rectangle(0,20.5,790,1529.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-410,-10,1620,1560), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":79,"end":259});

	// timeline functions:
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
	this.frame_109 = function() {
		try
		{
			app.addSoundFunc("air_sound", 0.3);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(65).call(this.frame_109).wait(151));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(560.1,530.1,0.842,0.842,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700.1},0).wait(53).to({y:480.1},10).to({y:530.1},5).wait(191));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_3_1_mc();
	this.dressupPanel_mc.setTransform(560,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:1500},0).wait(28).to({x:510},20).to({x:560},5).wait(55).to({x:510},5).to({x:1500},15).wait(131));

	// photoflash
	this.photoflash_comp = new lib.photoflash_0_mc();
	this.photoflash_comp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.photoflash_comp).wait(144).to({_off:false},0).to({_off:true},66).wait(50));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(200,330);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:-800},0).wait(28).to({x:250},20).to({x:200},5).wait(75).to({x:450},15).to({x:400},5).wait(111));

	// shadow
	this.instance = new lib.shadow_dressup_mc();
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(129).to({_off:false},0).to({alpha:1},15).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1.5,-33,794,983);
p.frameBounds = [rect, rect=new cjs.Rectangle(-1001.5,-33,2734,983), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-949,-33,2632,983), new cjs.Rectangle(-896.5,-33,2530,983), new cjs.Rectangle(-844,-33,2428,983), new cjs.Rectangle(-791.5,-33,2326,983), new cjs.Rectangle(-739,-33,2224,983), new cjs.Rectangle(-686.5,-33,2122,983), new cjs.Rectangle(-634,-33,2020,983), new cjs.Rectangle(-581.5,-33,1918,983), new cjs.Rectangle(-529,-33,1816,983), new cjs.Rectangle(-476.5,-33,1714,983), new cjs.Rectangle(-424,-33,1612,983), new cjs.Rectangle(-371.5,-33,1510,983), new cjs.Rectangle(-319,-33,1408,983), new cjs.Rectangle(-266.5,-33,1306,983), new cjs.Rectangle(-214,-33,1204,983), new cjs.Rectangle(-161.5,-33,1102,983), new cjs.Rectangle(-109,-33,1000,983), new cjs.Rectangle(-56.5,-33,898,983), new cjs.Rectangle(-4,-33,796,983), new cjs.Rectangle(48.5,-33,694,983), new cjs.Rectangle(38.5,-33,714,983), new cjs.Rectangle(28.5,-33,734,983), new cjs.Rectangle(18.5,-33,754,983), new cjs.Rectangle(8.5,-33,774,983), rect=new cjs.Rectangle(-1.5,-33,794,983), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1.5,-33,784,983), new cjs.Rectangle(-1.5,-33,774,983), new cjs.Rectangle(-1.5,-33,764,983), new cjs.Rectangle(-1.5,-33,754,983), new cjs.Rectangle(-1.5,-33,744,983), new cjs.Rectangle(-1.5,-33,810,983), new cjs.Rectangle(-1.5,-33,876,983), new cjs.Rectangle(-1.5,-33,942,983), new cjs.Rectangle(-1.5,-33,1008,983), new cjs.Rectangle(-1.5,-33,1074,983), new cjs.Rectangle(-1.5,-33,1140,983), new cjs.Rectangle(-1.5,-33,1206,983), new cjs.Rectangle(-1.5,-33,1272,983), new cjs.Rectangle(-1.5,-33,1338,983), new cjs.Rectangle(-1.5,-33,1404,983), new cjs.Rectangle(-1.5,-33,1470,983), new cjs.Rectangle(-1.5,-33,1536,983), new cjs.Rectangle(-1.5,-33,1602,983), new cjs.Rectangle(-1.5,-33,1668,983), rect=new cjs.Rectangle(-410,-33,2142.5,983), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-410,-387,2142.5,1337), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-410,-33,2142.5,983), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":139,"end":319});

	// timeline functions:
	this.frame_39 = function() {
		try
		{
			app.addSoundFunc("dust_sound", 0.4);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
	}
	this.frame_169 = function() {
		try
		{
			app.addSoundFunc("air_sound", 0.3);
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
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(130).call(this.frame_169).wait(151));

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(700,500,0.947,0.947);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:700},0).wait(118).to({y:450},10).to({y:500},5).wait(186));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_1_mc();
	this.dressupPanel_mc.setTransform(220,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({y:900},0).wait(78).to({y:250},15).to({y:300},5).wait(70).to({y:250},5).to({y:900},15).wait(131));

	// decor
	this.instance = new lib.dusts_3_mc();
	this.instance.setTransform(220,565);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:false},0).to({_off:true},36).wait(240));

	// decor
	this.instance_1 = new lib.bag_2_mc();
	this.instance_1.setTransform(220,800);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({y:340},10).to({scaleX:0.86,scaleY:0.86,y:430},10).wait(25).to({y:800},10).to({_off:true},1).wait(240));

	// decor
	this.instance_2 = new lib.decor_shadow_mc();
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(204).to({_off:false},0).to({alpha:1},15).wait(101));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(600,330);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:1500},0).wait(98).to({x:550},15).to({x:600},5).wait(70).to({x:350},15).to({x:400},5).wait(111));

	// shadow
	this.instance_3 = new lib.shadow_dressup_mc();
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(204).to({_off:false},0).to({alpha:1},15).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-33,804.5,1003);
p.frameBounds = [rect, rect=new cjs.Rectangle(0,-33,1704.5,1583), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-83.7,-33,1788.3,1583), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(0,-33,1704.5,1539.7), new cjs.Rectangle(0,-33,1704.5,1496.4), new cjs.Rectangle(0,-33,1704.5,1453), new cjs.Rectangle(0,-33,1704.5,1409.7), new cjs.Rectangle(0,-33,1704.5,1366.4), new cjs.Rectangle(0,-33,1704.5,1323), new cjs.Rectangle(0,-33,1704.5,1279.7), new cjs.Rectangle(0,-33,1704.5,1236.4), new cjs.Rectangle(0,-33,1704.5,1193), new cjs.Rectangle(0,-33,1704.5,1149.7), new cjs.Rectangle(0,-33,1704.5,1106.4), new cjs.Rectangle(0,-33,1704.5,1063), new cjs.Rectangle(0,-33,1704.5,1019.7), new cjs.Rectangle(0,-33,1704.5,976.4), new cjs.Rectangle(0,-33,1704.5,933), new cjs.Rectangle(0,-33,1704.5,943), new cjs.Rectangle(0,-33,1704.5,953), new cjs.Rectangle(0,-33,1704.5,963), new cjs.Rectangle(0,-33,1704.5,973), new cjs.Rectangle(0,-33,1704.5,983), new cjs.Rectangle(0,-33,1641.2,983), new cjs.Rectangle(0,-33,1577.9,983), new cjs.Rectangle(0,-33,1514.5,983), new cjs.Rectangle(0,-33,1451.2,983), new cjs.Rectangle(0,-33,1387.9,983), new cjs.Rectangle(0,-33,1324.5,983), new cjs.Rectangle(0,-33,1261.2,983), new cjs.Rectangle(0,-33,1197.9,983), new cjs.Rectangle(0,-33,1134.5,983), new cjs.Rectangle(0,-33,1071.2,983), new cjs.Rectangle(0,-33,1007.9,983), new cjs.Rectangle(0,-33,944.5,983), new cjs.Rectangle(0,-33,881.2,983), new cjs.Rectangle(0,-33,817.9,983), rect=new cjs.Rectangle(0,-33,790,983), rect, rect, rect, new cjs.Rectangle(0,-33,794.5,983), rect=new cjs.Rectangle(0,-33,804.5,983), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(0,-33,804.5,973), new cjs.Rectangle(0,-33,804.5,963), new cjs.Rectangle(0,-33,804.5,953), new cjs.Rectangle(0,-33,804.5,943), new cjs.Rectangle(0,-33,804.5,933), new cjs.Rectangle(0,-33,804.5,976.4), new cjs.Rectangle(0,-33,804.5,1019.7), new cjs.Rectangle(0,-33,804.5,1063), new cjs.Rectangle(0,-33,804.5,1106.4), new cjs.Rectangle(0,-33,804.5,1149.7), new cjs.Rectangle(0,-33,804.5,1193), new cjs.Rectangle(0,-33,804.5,1236.4), new cjs.Rectangle(0,-33,804.5,1279.7), new cjs.Rectangle(0,-33,804.5,1323), new cjs.Rectangle(0,-33,804.5,1366.4), new cjs.Rectangle(0,-33,804.5,1409.7), new cjs.Rectangle(0,-33,804.5,1453), new cjs.Rectangle(0,-33,804.5,1496.4), new cjs.Rectangle(0,-33,804.5,1539.7), new cjs.Rectangle(0,-33,804.5,1583), rect=new cjs.Rectangle(0,-33,790,1583), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-410,-33,1620,1583), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
	this.instance = new lib.background_4_img();
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
p.nominalBounds = rect = new cjs.Rectangle(21.7,-349.4,780.8,1299.4);
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
p.nominalBounds = rect = new cjs.Rectangle(0,-349.4,790,1319.4);
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
p.nominalBounds = rect = new cjs.Rectangle(-1.5,-349.4,794,1299.4);
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
p.nominalBounds = rect = new cjs.Rectangle(0,-349.4,804.5,1319.4);
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
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

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
	this.instance = new lib.background_5_img();
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
	this.instance = new lib.background_5_img();
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

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(400,50);

	this.instance_14 = new lib.Glitter_2();
	this.instance_14.setTransform(500,50);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.gravity_explosion_comp}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[]},1).to({state:[{t:this.instance_22}]},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,257,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-400,0,1600,600), rect, new cjs.Rectangle(-400,0,1600,1165), new cjs.Rectangle(-400,-280.8,1600,1470.9), new cjs.Rectangle(-400,-280.8,1600,1261.9), rect=new cjs.Rectangle(-400,-349.4,1600,1330.4), rect, rect, rect, rect, rect, new cjs.Rectangle(-400,0,1600,610), new cjs.Rectangle(-400,-319.9,1600,1780), new cjs.Rectangle(-400,0,1600,600), new cjs.Rectangle(0,0,520,430), rect=new cjs.Rectangle(-410,-10,1620,620), rect, new cjs.Rectangle(-400,600,1600,600), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-410,-10,1620,620)];


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