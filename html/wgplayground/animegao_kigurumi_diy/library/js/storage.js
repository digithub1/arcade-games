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
		{src:"library/images/storage_atlas_19.png", id:"storage_atlas_19"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,0,1200,600]]},
		{name:"storage_atlas_5", frames: [[0,0,772,703]]},
		{name:"storage_atlas_6", frames: [[710,0,490,520],[0,0,708,733],[0,735,615,563],[617,735,600,500]]},
		{name:"storage_atlas_7", frames: [[0,0,445,550],[0,552,445,550],[447,0,445,550],[447,552,445,550]]},
		{name:"storage_atlas_8", frames: [[0,552,445,550],[0,0,445,550],[447,0,445,550],[447,552,445,550]]},
		{name:"storage_atlas_9", frames: [[0,0,445,550],[0,552,445,550],[447,0,445,550],[447,552,445,550]]},
		{name:"storage_atlas_10", frames: [[0,552,445,550],[447,0,445,550],[0,0,445,550]]},
		{name:"storage_atlas_11", frames: [[564,484,400,400],[0,0,1200,200],[564,886,400,400],[0,202,640,280],[642,202,640,280],[0,484,280,580],[282,484,280,580]]},
		{name:"storage_atlas_12", frames: [[684,986,300,300],[382,986,300,300],[0,0,500,300],[0,302,500,300],[502,302,500,300],[502,0,500,300],[0,986,380,260],[986,604,300,300],[986,906,300,300],[1004,0,260,540],[382,604,380,380],[0,604,380,380]]},
		{name:"storage_atlas_13", frames: [[302,0,300,300],[0,0,300,300],[1060,0,205,412],[604,0,220,399],[826,0,232,366],[604,683,300,280],[906,696,300,280],[0,302,300,280],[302,302,300,280],[604,401,300,280],[906,978,300,280],[604,965,300,280],[0,584,300,280],[906,414,300,280],[302,584,300,280],[302,866,300,280],[0,866,300,280]]},
		{name:"storage_atlas_14", frames: [[178,0,176,477],[0,479,176,477],[0,0,176,477],[986,622,153,442],[800,622,184,372],[376,642,196,369],[574,642,224,310],[569,0,216,373],[178,642,196,377],[356,0,211,386],[0,1021,317,210],[319,1021,317,210],[638,996,317,210],[660,480,490,140],[787,0,480,160],[178,480,480,160],[787,162,480,160],[356,388,900,90]]},
		{name:"storage_atlas_15", frames: [[0,806,119,484],[121,806,119,484],[165,0,119,484],[515,690,220,200],[515,488,220,200],[1047,984,220,200],[919,248,220,200],[384,412,129,392],[242,486,140,407],[286,0,137,410],[0,390,148,414],[447,987,194,253],[242,987,203,242],[0,0,163,388],[844,860,388,122],[829,0,388,122],[829,124,388,122],[844,488,388,122],[844,612,388,122],[844,736,388,122],[425,244,402,120],[643,987,402,120],[425,0,402,120],[425,122,402,120],[643,1109,402,120],[515,366,402,120],[242,895,600,90]]},
		{name:"storage_atlas_16", frames: [[444,0,220,200],[0,0,220,200],[222,0,220,200],[666,0,220,200],[888,0,220,200],[0,202,220,200],[0,404,220,200],[0,606,220,200],[0,808,220,200],[222,202,220,200],[0,1010,220,200],[444,202,220,200],[666,202,220,200],[888,202,220,200],[1014,622,220,180],[607,404,200,212],[1110,0,167,242],[968,840,177,225],[222,836,380,107],[809,404,394,107],[809,513,394,107],[222,618,394,107],[222,727,394,107],[618,622,394,107],[618,731,394,107],[222,404,383,111],[575,954,354,111],[578,1067,354,111],[578,1180,354,111],[222,1067,354,111],[222,1180,354,111],[934,1067,354,111],[222,945,351,114],[604,840,362,112]]},
		{name:"storage_atlas_17", frames: [[596,0,190,190],[295,678,180,180],[1080,354,220,160],[666,516,220,160],[858,354,220,160],[444,516,220,160],[636,192,220,160],[636,354,220,160],[858,192,220,160],[192,354,220,160],[222,516,220,160],[414,354,220,160],[414,192,220,160],[1080,192,220,160],[0,516,220,160],[404,0,190,190],[273,1033,150,163],[0,0,210,180],[477,678,180,180],[484,860,175,182],[0,678,174,188],[0,1133,174,123],[841,706,157,205],[111,959,160,172],[176,678,117,279],[0,868,109,261],[192,192,220,160],[851,1082,280,80],[212,0,190,190],[849,1000,340,80],[668,1082,181,125],[888,516,186,188],[1133,1082,150,142],[1076,516,194,178],[295,860,187,171],[0,374,187,132],[661,913,186,159],[0,182,190,190],[176,1250,408,50],[176,1198,408,50],[586,1209,408,50],[788,0,190,190],[980,0,190,190],[1076,696,180,180],[659,678,180,180],[425,1074,241,97],[1000,878,260,120]]},
		{name:"storage_atlas_18", frames: [[326,701,120,120],[204,844,120,120],[204,966,120,120],[326,823,120,120],[1208,1033,90,90],[448,839,70,189],[938,782,99,94],[152,1088,120,120],[718,276,120,120],[274,1088,120,120],[596,265,120,120],[326,945,120,120],[520,839,65,200],[1048,926,81,106],[1206,481,90,118],[1174,851,120,70],[152,1210,166,82],[1048,848,124,76],[448,672,160,85],[610,655,128,91],[621,163,171,100],[794,163,140,111],[418,245,176,82],[448,759,171,78],[559,474,158,78],[581,554,121,99],[1208,923,77,108],[884,1098,77,112],[963,1088,77,112],[1209,732,80,117],[1131,926,75,114],[1048,1034,78,109],[639,937,80,124],[204,722,120,120],[756,702,180,60],[756,826,180,60],[704,578,180,60],[740,640,180,60],[756,764,180,60],[846,516,180,60],[1206,240,50,239],[399,163,220,80],[549,1158,333,28],[549,1188,333,28],[549,1098,333,28],[549,1218,333,28],[549,1128,333,28],[549,1248,333,28],[922,578,99,100],[884,1212,150,54],[936,163,142,107],[719,488,125,88],[719,398,125,88],[1080,131,142,107],[963,972,83,114],[1039,732,83,114],[455,1189,92,111],[559,387,151,85],[437,573,142,97],[320,1210,133,85],[621,748,133,85],[1124,732,83,114],[938,680,99,100],[587,839,50,210],[152,722,50,297],[1134,1125,90,90],[437,451,120,120],[1042,1145,90,90],[840,276,120,120],[0,0,408,50],[0,52,408,50],[0,104,408,50],[410,0,408,50],[410,52,408,50],[962,272,120,120],[133,156,131,150],[0,308,131,150],[266,156,131,150],[0,460,131,150],[133,308,131,150],[0,612,131,150],[0,156,131,150],[0,895,150,129],[0,1026,150,129],[133,460,150,129],[0,1157,150,129],[820,0,150,129],[266,308,150,129],[972,0,150,129],[1124,0,150,129],[133,591,150,129],[0,764,150,129],[285,439,150,129],[285,570,150,129],[1258,131,29,312],[396,1067,120,120],[1084,240,120,120],[1084,362,120,120],[962,394,120,120],[437,329,120,120],[1084,484,120,120],[437,131,600,30],[721,972,240,40],[741,930,240,40],[741,888,240,40],[721,1014,240,40],[1023,606,240,40],[1039,648,240,40],[721,1056,240,40],[1039,690,240,40],[1036,1237,200,40],[639,835,100,100],[846,398,100,100]]},
		{name:"storage_atlas_19", frames: [[0,376,80,30],[947,156,75,87],[202,0,86,88],[947,60,75,94],[992,0,29,33],[695,278,90,50],[603,269,90,50],[507,366,50,50],[393,337,50,50],[149,355,50,50],[287,337,50,50],[241,438,48,48],[291,441,48,48],[222,246,73,77],[878,245,73,78],[953,245,67,82],[445,311,60,58],[604,421,51,47],[53,425,51,47],[768,426,51,47],[875,426,51,47],[657,427,51,47],[710,427,51,47],[881,563,48,20],[359,246,32,144],[821,432,51,47],[188,436,51,47],[360,392,51,47],[445,371,51,47],[201,387,51,47],[254,389,51,47],[498,418,51,47],[413,420,51,47],[878,377,51,47],[551,421,51,47],[931,407,51,47],[822,383,51,47],[82,376,51,47],[662,378,51,47],[715,378,51,47],[135,407,51,47],[307,392,51,47],[0,408,51,47],[862,0,128,58],[603,215,119,52],[174,90,112,54],[740,152,54,124],[956,329,38,76],[796,152,38,168],[297,246,60,89],[184,247,31,70],[243,491,54,36],[462,498,54,36],[299,500,54,36],[518,501,54,36],[952,487,54,36],[355,500,54,36],[341,441,54,20],[854,516,54,36],[0,505,54,36],[574,505,54,36],[630,505,54,36],[686,505,54,36],[742,510,54,36],[798,510,54,36],[56,516,54,36],[910,525,54,36],[966,525,54,36],[224,529,54,36],[112,517,54,36],[411,536,54,36],[168,517,54,36],[280,538,54,36],[467,539,54,36],[336,538,54,36],[0,543,54,36],[521,297,67,67],[0,42,70,106],[0,215,220,30],[587,543,40,40],[393,246,50,89],[446,0,50,150],[550,0,50,150],[654,0,50,150],[394,0,50,150],[810,0,50,150],[758,0,50,150],[498,0,50,150],[706,0,50,150],[290,0,50,150],[602,0,50,150],[342,0,50,150],[222,215,226,29],[523,543,62,30],[706,476,80,27],[788,481,80,27],[624,476,80,27],[79,487,80,27],[870,487,80,27],[161,488,80,27],[0,152,368,19],[370,173,368,19],[370,152,368,19],[0,173,368,19],[0,194,368,19],[370,194,368,19],[0,474,77,29],[545,470,77,29],[106,456,77,29],[466,467,77,29],[928,456,77,29],[341,469,77,29],[1004,35,6,7],[94,325,132,28],[72,117,96,31],[94,307,76,14],[862,148,83,84],[878,329,76,46],[668,330,76,46],[590,321,76,46],[0,355,147,19],[0,307,92,41],[931,563,72,13],[862,60,83,86],[420,469,40,55],[984,407,40,43],[992,35,10,11],[450,215,69,94],[72,42,100,73],[228,325,57,60],[174,42,23,38],[746,330,31,31],[559,369,50,50],[836,234,40,147],[713,548,40,40],[140,555,40,40],[839,554,40,40],[56,554,40,40],[98,555,40,40],[629,543,40,40],[797,548,40,40],[671,543,40,40],[755,548,40,40],[182,555,40,40],[787,322,33,102],[611,369,49,49],[521,215,80,80],[0,0,200,40],[0,247,90,58],[92,247,90,58]]}
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
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_for_pointer_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_0_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_10_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_11_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_12_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.arc_arrow_9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
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
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.barbie_star_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.barbie_star_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.big_hero_main_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blesk6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.body1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.body1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.body1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.body1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.body1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.body1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.body2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.body2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.body2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.body2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.body2_5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.body2_6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.check_makeup_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_0_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_10_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_11_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_12_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_13_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_14_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_15_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_16_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_17_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.circle_arrow_9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.copyright_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.copyright_title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.current_location_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.decor_title_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.flash_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.flash_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.flash_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.flash_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.glitter_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.glitter_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.glitter_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.glitter_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.glue_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.gubka_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hair_big1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hair_big1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hair_big2_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress8_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadow1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadow2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadow3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadow4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadow5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadow6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes7_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes7_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes8_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes8_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes9_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes9_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress7_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress8_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress9_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadow1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadow2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadow3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadow4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadow5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadow6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes8_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes9_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_de_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_es_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.kaplya1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.kist1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.lipstick12_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.lipstick14_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.lipstick15_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.lipstick19_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.lipstick20_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.lipstick22_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.lipstick2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.lipstick36_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.lipstick3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.lipstick5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.lipstick6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_0_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_0_6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.location_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.location_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.marker1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.marker1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.mask1_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.mask1_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.mask1_eyebrows3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.mask1_eyebrows4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.mask1_eyebrows5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.mask1_eyebrows6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.mask1_front_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.mask1_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.mask1_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.mask1_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.mask1_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.mask1_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.mask1_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.mask1_makeup_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.mask1_makeup_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.mask1_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.mask1_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.mask1_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.mask1_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.mask1_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.mask1_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.mask1_shadow1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.mask1_shadow2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.mask1_shadow3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.mask1_shadow4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.mask1_shadow5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.mask1_shadow6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.mask2_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.mask2_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.mask2_eyebrows3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.mask2_eyebrows4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.mask2_eyebrows5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.mask2_eyebrows6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.mask2_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.mask2_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.mask2_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.mask2_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.mask2_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.mask2_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.mask2_makeup_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.mask2_makeup_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.mask2_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.mask2_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.mask2_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.mask2_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.mask2_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.mask2_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.mask2_shadow1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.mask2_shadow2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.mask2_shadow3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.mask2_shadow4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.mask2_shadow5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.mask2_shadow6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.mask_1_10_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.mask_1_11_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.mask_1_12_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.mask_1_13_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.mask_1_14_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.mask_1_15_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.mask_1_16_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.mask_1_17_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.mask_1_18_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.mask_1_19_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.mask_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.mask_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.mask_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.mask_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.mask_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.mask_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.mask_1_7_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.mask_1_8_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.mask_1_9_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.mask_1eye2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.mask_1eye3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.mask_1eye4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.mask_1eye51_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.mask_1eye5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.mask_1eye7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.mask_1eye8_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.mask_2_10_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.mask_2_11_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.mask_2_12_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.mask_2_13_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.mask_2_14_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.mask_2_15_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.mask_2_16_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.mask_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.mask_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.mask_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.mask_2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.mask_2_5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.mask_2_6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.mask_2_7_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.mask_2_8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.mask_2_9_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.mask_2_eye2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.mask_2_eye3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.pencil10_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.pencil11_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.pencil12_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.pencil13_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.pencil14_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.pencil3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.pencil6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.pencil8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.piece_fan_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.pointing_finger_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.pointing_finger_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.rastr1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.rouge10_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.rouge7_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.shadows10_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.shadows15_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.shadows19_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.shadows21_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.shadows26_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.shadows35_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.shadows36_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.shadows37_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.shadows38_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.shadows39_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.shelf_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.skalpel_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.stick_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.title_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.track_move_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.veshalka2_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.veshalka_img = function() {
	this.spriteSheet = ss["storage_atlas_19"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_makeup_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_makeup_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.wind_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_redirect_img();
	this.instance.setTransform(-130,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-60,260,120);
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
	this.shape.graphics.lf(["#FFFFCC","#FFCC00"],[0,1],9.3,-48,-25.7,63.1).s().p("AlpJTQhSgOg1hAQg1hAAAhSIAArlQAAhTA2hAQA1g/BSgPQBRgOBIAqIKCF0QBJApAcBOQAcBMgcBOQgdBOhIApIqCF0Qg1Aeg6AAQgVAAgWgEg");
	this.shape.setTransform(4.7,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.4,-60,110.1,120);
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


(lib.wind_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wind_img();
	this.instance.setTransform(-900,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-900,-40,900,90);
p.frameBounds = [rect];


(lib.wardrobe_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_img();
	this.instance.setTransform(-300,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-250,600,500);
p.frameBounds = [rect];


(lib.wardrobe_makeup_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_makeup_2_img();
	this.instance.setTransform(-140,-290);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-290,280,580);
p.frameBounds = [rect];


(lib.wardrobe_makeup_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_makeup_1_img();
	this.instance.setTransform(-140,-290);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-290,280,580);
p.frameBounds = [rect];


(lib.veshalka2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.veshalka2_img();
	this.instance.setTransform(-45,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-29,90,58);
p.frameBounds = [rect];


(lib.veshalka_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.veshalka_img();
	this.instance.setTransform(-45,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-29,90,58);
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


(lib.stick_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.stick_img();
	this.instance.setTransform(-300,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-15,600,30);
p.frameBounds = [rect];


(lib.skalpel_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.skalpel_img();
	this.instance.setTransform(29,312,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,29,312);
p.frameBounds = [rect];


(lib.shoes_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes9_img();
	this.instance.setTransform(35,-53,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmhHgIBdqzIIemIIDIC1IitKnIkWFZIkoACg");
	this.shape.setTransform(0.9,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.9,-63.1,83.7,121);
p.frameBounds = [rect];


(lib.shoes_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes9_2_img();
	this.instance.setTransform(56,-27,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqNgcIB+k7IK3gLIHmHsIgxC3IsdAig");
	this.shape.setTransform(0.6,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.8,-35.8,131,71.1);
p.frameBounds = [rect];


(lib.shoes_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes8_img();
	this.instance.setTransform(39,-55,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("An5G+IJawvIDZgBIDADsIjYJ5Ik4FkIloAcg");
	this.shape.setTransform(0.1,-2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.5,-65,101.3,125.6);
p.frameBounds = [rect];


(lib.shoes_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes8_2_img();
	this.instance.setTransform(59,-26,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArJFzIAprjIOjgCIHHIoIhvC9g");
	this.shape.setTransform(-0.3,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.8,-38.6,143,74.3);
p.frameBounds = [rect];


(lib.shoes_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes7_img();
	this.instance.setTransform(54,-131,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqBryIBOpqIS1gDMgBQAg/InIJ9IlnADg");
	this.shape.setTransform(2.1,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.1,-138.8,128.5,275.3);
p.frameBounds = [rect];


(lib.shoes_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes7_2_img();
	this.instance.setTransform(64,-29,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AromBIROAAIGDIjIiBDXI1QAJg");
	this.shape.setTransform(0.6,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.9,-37.4,149.2,77.4);
p.frameBounds = [rect];


(lib.shoes_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes6_img();
	this.instance.setTransform(58,-140,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqLqdICZsCIQwCBIBOebImoMhIndACg");
	this.shape.setTransform(0.8,-2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64.4,-146,130.6,288.1);
p.frameBounds = [rect];


(lib.shoes_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes6_2_img();
	this.instance.setTransform(70,-56,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("As6lFICgk5IM6AAIGbFYIEANXIhDBFIzIAJg");
	this.shape.setTransform(0.7,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82,-65.5,165.4,128);
p.frameBounds = [rect];


(lib.shoes_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes5_img();
	this.instance.setTransform(37,-57,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Al3KIIhZivID7v+IFghiIFGDtIisKUImPGOg");
	this.shape.setTransform(-0.2,-3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.7,-68.5,93.1,129.8);
p.frameBounds = [rect];


(lib.shoes_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes5_img();
	this.instance.setTransform(87,-94,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AutIrINv4RIGQAAIJcb0Ig9DJI39AQg");
	this.shape.setTransform(-1.7,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.9,-101,188.4,199.9);
p.frameBounds = [rect];


(lib.shoes_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes4_img();
	this.instance.setTransform(40,-59,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlxKeIiMjVIFKxmIKxBrIiKLJIo7IIg");
	this.shape.setTransform(0,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.1,-67.8,102.2,134.2);
p.frameBounds = [rect];


(lib.shoes_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes4_2_img();
	this.instance.setTransform(64,-46,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArOIjIg1w9IRXgIIGwONIhfC4g");
	this.shape.setTransform(0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77,-54.9,154.6,109.5);
p.frameBounds = [rect];


(lib.shoes_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes3_img();
	this.instance.setTransform(38,-56,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmKJxIhgjTID3sgIE9j0IGhDAIj1KJImdGkg");
	this.shape.setTransform(0.9,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.2,-64.4,98.2,126.3);
p.frameBounds = [rect];


(lib.shoes_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes3_2_img();
	this.instance.setTransform(62,-38,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq5CTIBlodIPvhPIEfMcIhPCVItPACg");
	this.shape.setTransform(-0.7,-3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.5,-50.9,139.7,95);
p.frameBounds = [rect];


(lib.shoes_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes2_img();
	this.instance.setTransform(38,-56,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmlJGIgyiDIEIwMIGTgjIEUD1IkOJ9ImNFog");
	this.shape.setTransform(2.8,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.4,-63.6,94.4,124.4);
p.frameBounds = [rect];


(lib.shoes_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes2_2_img();
	this.instance.setTransform(50,-29,0.833,0.834,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1CkIAmnnINVg/IDwKjIhYBbIrBAHg");
	this.shape.setTransform(1.2,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.4,-39.9,113.3,77.4);
p.frameBounds = [rect];


(lib.shoes_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes1_2_img();
	this.instance.setTransform(33,-34,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBHBIAAuCIODAAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.shoes_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shoes1_img();
	this.instance.setTransform(87,-91,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvNGQIOp1UIFRCgIKhZSIhBBiI47A1g");
	this.shape.setTransform(-1.9,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.4,-99,194.9,193);
p.frameBounds = [rect];


(lib.shelf_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shelf_img();
	this.instance.setTransform(-300,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-45,600,90);
p.frameBounds = [rect];


(lib.shadow_dressup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("EhduAu4MAAAhdvMC7eAAAMAAABdvg");
	this.shape.setTransform(400,300,1.017,1.033);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-10,1220,620);
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


(lib.rastr1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rastr1_img();
	this.instance.setTransform(-24.5,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24.5,-24.5,49,49);
p.frameBounds = [rect];


(lib.pointing_finger_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pointing_finger_1_img();
	this.instance.setTransform(-130,-270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-270,260,540);
p.frameBounds = [rect];


(lib.pointing_finger_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pointing_finger_2_img();
	this.instance.setTransform(-245,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-70,490,140);
p.frameBounds = [rect];


(lib.pencil11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil11_img();
	this.instance.setTransform(-14.7,122.3,0.599,0.599,-90.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15.2,-122.2,30.5,244.5);
p.frameBounds = [rect];


(lib.pencil6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil6_img();
	this.instance.setTransform(-68.6,102.3,0.599,0.599,-63.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.6,-115.8,137.1,231.6);
p.frameBounds = [rect];


(lib.object_29_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuVOXQl9l9AAoaQAAoZF9l8QF8l9IZAAQIaAAF9F9QF8F8AAIZQAAIal8F9Ql9F8oaAAQoZAAl8l8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-130,260,260);
p.frameBounds = [rect];


(lib.object_26_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtPNQQlflfAAnxQAAnwFflfQFflfHwAAQHwAAFgFfQFfFfAAHwQAAHxlfFfQlgFfnwAAQnwAAlflfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-120,240,240);
p.frameBounds = [rect];


(lib.object_26_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCLDQklklABmeQgBmdElklQElklGdABQGdgBElElQEmElgBGdQABGekmElQklEkmdAAQmdAAklkkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.object_23_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgUDAi7MAAAg86IRko7MAWjAlFMgFPAgwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-128.4,-223.5,257,447.1);
p.frameBounds = [rect];


(lib.object_23_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvtfaMAAAg5dILdmdMAT+AhrIijZRIotGFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.6,-208.1,201.2,416.4);
p.frameBounds = [rect];


(lib.object_22_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EggkAgmQthtgAAzGQAAzFNhtgQNgtgTEAAQTGAANgNgQNgNgAATFQAATGtgNgQtgNgzGAAQzEAAtgtgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-295,-295,590,590);
p.frameBounds = [rect];


(lib.object_22_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EggBAgCQtRtRAAyxQAAywNRtSQNRtRSwABQSxgBNRNRQNRNSAASwQAASxtRNRQtRNRyxAAQywAAtRtRg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-290,-290,580,580);
p.frameBounds = [rect];


(lib.object_21_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AymjoINu80IXfJ/MAAAAwjI5DGXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-119.2,-207.7,238.4,415.5);
p.frameBounds = [rect];


(lib.object_21_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AzbhiIQD/6IW0NPMAAAAuLI5SHfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-124.4,-214.1,248.9,428.4);
p.frameBounds = [rect];


(lib.object_19_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ap7J8QkIkIAAl0QAAl0EIkHQEIkIFzAAQF0AAEIEIQEHEHABF0QgBF0kHEIQkIEHl0ABQlzgBkIkHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.object_19_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao0I1QjrjqAAlLQAAlKDrjrQDqjpFKgBQFLABDqDpQDrDrAAFKQAAFLjrDqQjqDrlLAAQlKAAjqjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.object_18_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClBAAnIQAAnGFClCQFClDHGABQHHgBFCFDQFCFCAAHGQAAHIlCFBQlCFCnHAAQnGAAlClCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.object_18_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCLDQkkklAAmeQAAmdEkklQElkkGdAAQGeAAElEkQEkElAAGdQAAGekkElQklEkmeAAQmdAAklkkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.object_17_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlDlBABnIQgBnGFDlCQFClDHGABQHHgBFCFDQFCFCAAHGQAAHIlCFBQlCFCnHAAQnGAAlClCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.object_17_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsIMJQlClCAAnHQAAnGFClCQFClCHGAAQHHAAFCFCQFDFCgBHGQABHHlDFCQlCFDnHgBQnGABlClDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.object_16_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqISvMAAAgldIURAAMAAAAldg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-120,130,240);
p.frameBounds = [rect];


(lib.object_16_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXSvMAAAgldISvAAMAAAAldg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-120,120,240);
p.frameBounds = [rect];


(lib.object_11_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A2pH0IAAvnMAtTAAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-50,290.1,100);
p.frameBounds = [rect];


(lib.object_11_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A2oJYIAAyvMAtRAAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-60,290,120);
p.frameBounds = [rect];


(lib.object_9_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArCLDQkkklAAmeQAAmdEkklQElkkGdAAQGeAAElEkQEkElAAGdQAAGekkElQklEkmeAAQmdAAklkkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-100,200,200);
p.frameBounds = [rect];


(lib.object_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I2QjpjrgBlLQABlKDpjqQDrjrFKAAQFLAADqDrQDrDqAAFKQAAFLjrDrQjqDplLABQlKgBjrjpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.object_8_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXUTMAAAgolISvAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-130,120,260);
p.frameBounds = [rect];


(lib.object_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aq6UTMAAAgolIV1AAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-130,140,260);
p.frameBounds = [rect];


(lib.object_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXcIMAAAg4PISvAAMAAAA4Pg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-180,120,360);
p.frameBounds = [rect];


(lib.object_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXakMAAAg1HISvAAMAAAA1Hg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-170,120,340);
p.frameBounds = [rect];


(lib.mask2_shadow_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.mask2_shadow1_img();
	this.instance.setTransform(-201,-60);

	this.instance_1 = new lib.mask2_shadow2_img();
	this.instance_1.setTransform(-201,-60);

	this.instance_2 = new lib.mask2_shadow3_img();
	this.instance_2.setTransform(-201,-60);

	this.instance_3 = new lib.mask2_shadow4_img();
	this.instance_3.setTransform(-201,-60);

	this.instance_4 = new lib.mask2_shadow5_img();
	this.instance_4.setTransform(-201,-60);

	this.instance_5 = new lib.mask2_shadow6_img();
	this.instance_5.setTransform(-201,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-201,-60,402,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.mask2_rouge_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.mask2_rouge1_img();
	this.instance.setTransform(-177,-55.5);

	this.instance_1 = new lib.mask2_rouge2_img();
	this.instance_1.setTransform(-177,-55.5);

	this.instance_2 = new lib.mask2_rouge3_img();
	this.instance_2.setTransform(-177,-55.5);

	this.instance_3 = new lib.mask2_rouge4_img();
	this.instance_3.setTransform(-177,-55.5);

	this.instance_4 = new lib.mask2_rouge5_img();
	this.instance_4.setTransform(-177,-55.5);

	this.instance_5 = new lib.mask2_rouge6_img();
	this.instance_5.setTransform(-177,-55.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-177,-55.5,354,111);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.mask2_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.mask2_lips1_img();
	this.instance.setTransform(-38.5,-15.5);

	this.instance_1 = new lib.mask2_lips2_img();
	this.instance_1.setTransform(-38.5,-15.5);

	this.instance_2 = new lib.mask2_lips3_img();
	this.instance_2.setTransform(-38.5,-15.5);

	this.instance_3 = new lib.mask2_lips4_img();
	this.instance_3.setTransform(-38.5,-15.5);

	this.instance_4 = new lib.mask2_lips5_img();
	this.instance_4.setTransform(-38.5,-15.5);

	this.instance_5 = new lib.mask2_lips6_img();
	this.instance_5.setTransform(-38.5,-15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.5,-15.5,77,29);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.mask2_eyebrows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.mask2_eyebrows1_img();
	this.instance.setTransform(-184,-9.5);

	this.instance_1 = new lib.mask2_eyebrows2_img();
	this.instance_1.setTransform(-184,-9.5);

	this.instance_2 = new lib.mask2_eyebrows3_img();
	this.instance_2.setTransform(-184,-9.5);

	this.instance_3 = new lib.mask2_eyebrows4_img();
	this.instance_3.setTransform(-184,-9.5);

	this.instance_4 = new lib.mask2_eyebrows5_img();
	this.instance_4.setTransform(-184,-9.5);

	this.instance_5 = new lib.mask2_eyebrows6_img();
	this.instance_5.setTransform(-184,-9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-184,-9.5,368,19);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.mask1_shadow_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.mask1_shadow1_img();
	this.instance.setTransform(-197,-53.5);

	this.instance_1 = new lib.mask1_shadow2_img();
	this.instance_1.setTransform(-197,-53.5);

	this.instance_2 = new lib.mask1_shadow3_img();
	this.instance_2.setTransform(-197,-53.5);

	this.instance_3 = new lib.mask1_shadow4_img();
	this.instance_3.setTransform(-197,-53.5);

	this.instance_4 = new lib.mask1_shadow5_img();
	this.instance_4.setTransform(-197,-53.5);

	this.instance_5 = new lib.mask1_shadow6_img();
	this.instance_5.setTransform(-197,-53.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-197,-53.5,394,107);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.mask1_rouge_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.mask1_rouge1_img();
	this.instance.setTransform(-187,-54.5);

	this.instance_1 = new lib.mask1_rouge2_img();
	this.instance_1.setTransform(-187,-54.5);

	this.instance_2 = new lib.mask1_rouge3_img();
	this.instance_2.setTransform(-187,-54.5);

	this.instance_3 = new lib.mask1_rouge4_img();
	this.instance_3.setTransform(-187,-54.5);

	this.instance_4 = new lib.mask1_rouge5_img();
	this.instance_4.setTransform(-187,-54.5);

	this.instance_5 = new lib.mask1_rouge6_img();
	this.instance_5.setTransform(-187,-54.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-187,-54.5,388,122);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.mask1_lips1_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.mask1_lips1_img();
	this.instance.setTransform(-41.5,-11.5);

	this.instance_1 = new lib.mask1_lips2_img();
	this.instance_1.setTransform(-41.5,-11.5);

	this.instance_2 = new lib.mask1_lips3_img();
	this.instance_2.setTransform(-41.5,-11.5);

	this.instance_3 = new lib.mask1_lips4_img();
	this.instance_3.setTransform(-41.5,-11.5);

	this.instance_4 = new lib.mask1_lips5_img();
	this.instance_4.setTransform(-41.5,-11.5);

	this.instance_5 = new lib.mask1_lips6_img();
	this.instance_5.setTransform(-41.5,-11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.5,-11.5,80,27);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.mask1_front_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.mask1_front_img();
	this.instance.setTransform(-222.5,-275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.5,-275,445,550);
p.frameBounds = [rect];


(lib.mask1_eyebrows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.mask1_eyebrows1_img();
	this.instance.setTransform(-166.5,-14);

	this.instance_1 = new lib.mask1_eyebrows2_img();
	this.instance_1.setTransform(-166.5,-14);

	this.instance_2 = new lib.mask1_eyebrows3_img();
	this.instance_2.setTransform(-166.5,-14);

	this.instance_3 = new lib.mask1_eyebrows4_img();
	this.instance_3.setTransform(-166.5,-14);

	this.instance_4 = new lib.mask1_eyebrows5_img();
	this.instance_4.setTransform(-166.5,-14);

	this.instance_5 = new lib.mask1_eyebrows6_img();
	this.instance_5.setTransform(-166.5,-14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-166.5,-14,333,28);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.mask_2_eye3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_2_eye3_img();
	this.instance.setTransform(-41.5,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.5,-43,83,86);
p.frameBounds = [rect];


(lib.mask_2_eye2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_2_eye2_img();
	this.instance.setTransform(-41.5,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.5,-57,83,114);
p.frameBounds = [rect];


(lib.mask_2_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_2_16_img();
	this.instance.setTransform(-222.5,-275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.5,-275,445,550);
p.frameBounds = [rect];


(lib.mask_2_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_2_15_img();
	this.instance.setTransform(-158.5,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-158.5,-105,317,210);
p.frameBounds = [rect];


(lib.mask_2_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_2_14_img();
	this.instance.setTransform(-75.5,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.5,-42.5,151,85);
p.frameBounds = [rect];


(lib.mask_2_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_2_13_img();
	this.instance.setTransform(-46,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-51,92,111);
p.frameBounds = [rect];


(lib.mask_2_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_2_12_img();
	this.instance.setTransform(-73.5,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.5,-9.5,147,19);
p.frameBounds = [rect];


(lib.mask_2_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_2_11_img();
	this.instance.setTransform(-181,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-181,-56,362,112);
p.frameBounds = [rect];


(lib.mask_2_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_2_10_img();
	this.instance.setTransform(-222.5,-275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.5,-275,445,550);
p.frameBounds = [rect];


(lib.mask_2_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_2_9_img();
	this.instance.setTransform(-36,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36,-6.5,72,13);
p.frameBounds = [rect];


(lib.mask_2_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_2_8_img();
	this.instance.setTransform(-222.5,-275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.5,-275,445,550);
p.frameBounds = [rect];


(lib.mask_2_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_2_7_img();
	this.instance.setTransform(-66.5,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.5,-42.5,133,85);
p.frameBounds = [rect];


(lib.mask_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_2_6_img();
	this.instance.setTransform(-222.5,-275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.5,-275,445,550);
p.frameBounds = [rect];


(lib.mask_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_2_5_img();
	this.instance.setTransform(-66.5,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.5,-42.5,133,85);
p.frameBounds = [rect];


(lib.mask_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_2_4_img();
	this.instance.setTransform(-222.5,-275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.5,-275,445,550);
p.frameBounds = [rect];


(lib.mask_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_2_3_img();
	this.instance.setTransform(-222.5,-275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.5,-275,445,550);
p.frameBounds = [rect];


(lib.mask_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_2_2_img();
	this.instance.setTransform(-71,-48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71,-48.5,142,97);
p.frameBounds = [rect];


(lib.mask_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_2_1_img();
	this.instance.setTransform(-46,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-20.5,92,41);
p.frameBounds = [rect];


(lib.mask_1eye51_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_1eye51_img();
	this.instance.setTransform(-38,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-23,76,46);
p.frameBounds = [rect];


(lib.mask_1eye8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_1eye8_img();
	this.instance.setTransform(-41.5,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.5,-57,83,114);
p.frameBounds = [rect];


(lib.mask_1eye7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_1eye7_img();
	this.instance.setTransform(-90.5,-62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.5,-62.5,181,125);
p.frameBounds = [rect];


(lib.mask_1eye5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_1eye5_img();
	this.instance.setTransform(-38,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-23,76,46);
p.frameBounds = [rect];


(lib.mask_1eye4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_1eye4_img();
	this.instance.setTransform(-38,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-23,76,46);
p.frameBounds = [rect];


(lib.mask_1eye3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_1eye3_img();
	this.instance.setTransform(-41.5,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.5,-42,83,84);
p.frameBounds = [rect];


(lib.mask_1eye2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_1eye2_img();
	this.instance.setTransform(-41.5,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.5,-57,83,114);
p.frameBounds = [rect];


(lib.mask_1_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_1_19_img();
	this.instance.setTransform(-158.5,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-158.5,-105,317,210);
p.frameBounds = [rect];


(lib.mask_1_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_1_18_img();
	this.instance.setTransform(-71,-53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71,-53.5,142,107);
p.frameBounds = [rect];


(lib.mask_1_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_1_17_img();
	this.instance.setTransform(-158.5,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-158.5,-105,317,210);
p.frameBounds = [rect];


(lib.mask_1_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_1_16_img();
	this.instance.setTransform(-222.5,-275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.5,-275,445,550);
p.frameBounds = [rect];


(lib.mask_1_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_1_15_img();
	this.instance.setTransform(-75,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-27,150,54);
p.frameBounds = [rect];


(lib.mask_1_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_1_14_img();
	this.instance.setTransform(-49.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-50,99,100);
p.frameBounds = [rect];


(lib.mask_1_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_1_13_img();
	this.instance.setTransform(-66,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66,-14,132,28);
p.frameBounds = [rect];


(lib.mask_1_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_1_12_img();
	this.instance.setTransform(-175.5,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-175.5,-57,351,114);
p.frameBounds = [rect];


(lib.mask_1_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_1_11_img();
	this.instance.setTransform(-3,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-3,-3.5,6,7);
p.frameBounds = [rect];


(lib.mask_1_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_1_10_img();
	this.instance.setTransform(-222.5,-275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.5,-275,445,550);
p.frameBounds = [rect];


(lib.mask_1_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_1_9_img();
	this.instance.setTransform(-71,-53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71,-53.5,142,107);
p.frameBounds = [rect];


(lib.mask_1_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_1_8_img();
	this.instance.setTransform(-38,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-7,76,14);
p.frameBounds = [rect];


(lib.mask_1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_1_7_img();
	this.instance.setTransform(-222.5,-275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.5,-275,445,550);
p.frameBounds = [rect];


(lib.mask_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_1_6_img();
	this.instance.setTransform(-62.5,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.5,-44,125,88);
p.frameBounds = [rect];


(lib.mask_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_1_5_img();
	this.instance.setTransform(-222.5,-275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.5,-275,445,550);
p.frameBounds = [rect];


(lib.mask_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_1_4_img();
	this.instance.setTransform(-62.5,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.5,-44,125,88);
p.frameBounds = [rect];


(lib.mask_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_1_3_img();
	this.instance.setTransform(-222.5,-275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.5,-275,445,550);
p.frameBounds = [rect];


(lib.mask_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_1_2_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,445,550);
p.frameBounds = [rect];


(lib.mask_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_1_1_img();
	this.instance.setTransform(-48,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48,-15.5,96,31);
p.frameBounds = [rect];


(lib.marker1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.marker1_2_img();
	this.instance.setTransform(-31,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31,-15,62,30);
p.frameBounds = [rect];


(lib.marker1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.marker1_1_img();
	this.instance.setTransform(-113,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113,-14.5,226,29);
p.frameBounds = [rect];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
p.frameBounds = [rect];


(lib.kist1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kist1_img();
	this.instance.setTransform(-25,-119.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-119.5,50,239);
p.frameBounds = [rect];


(lib.kaplya1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kaplya1_img();
	this.instance.setTransform(-25,-44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-44.5,50,89);
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


(lib.indicator_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_2_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,220,30);
p.frameBounds = [rect];


(lib.indicator_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
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


(lib.hero2_shoes_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shoes4_img();
	this.instance.setTransform(-45,-58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-58.5,80,117);
p.frameBounds = [rect];


(lib.hero2_shoes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_shoes1_img();
	this.instance.setTransform(-38.5,-54);

	this.instance_1 = new lib.hero2_shoes2_img();
	this.instance_1.setTransform(-40,-57);

	this.instance_2 = new lib.hero2_shoes3_img();
	this.instance_2.setTransform(-42,-60);

	this.instance_3 = new lib.hero2_shoes4_img();
	this.instance_3.setTransform(-45,-58.5);

	this.instance_4 = new lib.hero2_shoes5_img();
	this.instance_4.setTransform(-39,-61.5);

	this.instance_5 = new lib.hero2_shoes6_img();
	this.instance_5.setTransform(-45.5,-225);

	this.instance_6 = new lib.hero2_shoes7_img();
	this.instance_6.setTransform(-39,-208.5);

	this.instance_7 = new lib.hero2_shoes8_img();
	this.instance_7.setTransform(-39.5,-54.5);

	this.instance_8 = new lib.hero2_shoes9_img();
	this.instance_8.setTransform(-35,-54.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.5,-54,77,108);
p.frameBounds = [rect, new cjs.Rectangle(-40,-57,77,112), new cjs.Rectangle(-42,-60,77,112), new cjs.Rectangle(-45,-58.5,80,117), new cjs.Rectangle(-39,-61.5,75,114), new cjs.Rectangle(-45.5,-225,117,279), new cjs.Rectangle(-39,-208.5,109,261), new cjs.Rectangle(-39.5,-54.5,78,109), new cjs.Rectangle(-35,-54.5,70,106), null];


(lib.hero2_shadow_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shadow3_img();
	this.instance.setTransform(-27,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27,-18,54,36);
p.frameBounds = [rect];


(lib.hero2_shadow_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_shadow1_img();
	this.instance.setTransform(-27,-18);

	this.instance_1 = new lib.hero2_shadow2_img();
	this.instance_1.setTransform(-27,-18);

	this.instance_2 = new lib.hero2_shadow3_img();
	this.instance_2.setTransform(-27,-18);

	this.instance_3 = new lib.hero2_shadow4_img();
	this.instance_3.setTransform(-27,-18);

	this.instance_4 = new lib.hero2_shadow5_img();
	this.instance_4.setTransform(-27,-18);

	this.instance_5 = new lib.hero2_shadow6_img();
	this.instance_5.setTransform(-27,-18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27,-18,54,36);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_rouge_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_rouge1_img();
	this.instance.setTransform(-27,-18);

	this.instance_1 = new lib.hero2_rouge2_img();
	this.instance_1.setTransform(-27,-18);

	this.instance_2 = new lib.hero2_rouge3_img();
	this.instance_2.setTransform(-27,-18);

	this.instance_3 = new lib.hero2_rouge4_img();
	this.instance_3.setTransform(-27,-18);

	this.instance_4 = new lib.hero2_rouge5_img();
	this.instance_4.setTransform(-27,-18);

	this.instance_5 = new lib.hero2_rouge6_img();
	this.instance_5.setTransform(-27,-18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27,-18,54,36);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_rouge_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_rouge2_img();
	this.instance.setTransform(-27,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27,-18,54,36);
p.frameBounds = [rect];


(lib.hero2_lips_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips1_img();
	this.instance.setTransform(-27,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27,-18,54,36);
p.frameBounds = [rect];


(lib.hero2_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_lips1_img();
	this.instance.setTransform(-27,-18);

	this.instance_1 = new lib.hero2_lips2_img();
	this.instance_1.setTransform(-27,-18);

	this.instance_2 = new lib.hero2_lips3_img();
	this.instance_2.setTransform(-27,-18);

	this.instance_3 = new lib.hero2_lips4_img();
	this.instance_3.setTransform(-27,-18);

	this.instance_4 = new lib.hero2_lips5_img();
	this.instance_4.setTransform(-27,-18);

	this.instance_5 = new lib.hero2_lips6_img();
	this.instance_5.setTransform(-27,-18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27,-18,54,36);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_hair1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_hair1_img();
	this.instance.setTransform(-81.5,-194);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.5,-194,163,388);
p.frameBounds = [rect];


(lib.hero2_fringe1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe1_img();
	this.instance.setTransform(-80,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-86,160,172);
p.frameBounds = [rect];


(lib.hero2_eyes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes_img();
	this.instance.setTransform(-27,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27,-10,54,20);
p.frameBounds = [rect];


(lib.hero2_eyebrows_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyebrows1_img();
	this.instance.setTransform(-27,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27,-18,54,36);
p.frameBounds = [rect];


(lib.hero2_eyebrows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_eyebrows1_img();
	this.instance.setTransform(-27,-18);

	this.instance_1 = new lib.hero2_eyebrows2_img();
	this.instance_1.setTransform(-27,-18);

	this.instance_2 = new lib.hero2_eyebrows3_img();
	this.instance_2.setTransform(-27,-18);

	this.instance_3 = new lib.hero2_eyebrows4_img();
	this.instance_3.setTransform(-27,-18);

	this.instance_4 = new lib.hero2_eyebrows5_img();
	this.instance_4.setTransform(-27,-18);

	this.instance_5 = new lib.hero2_eyebrows6_img();
	this.instance_5.setTransform(-27,-18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27,-18,54,36);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_dress_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress4_img();
	this.instance.setTransform(-105.5,-204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105.5,-204,184,372);
p.frameBounds = [rect];


(lib.hero2_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_dress1_img();
	this.instance.setTransform(-110,-199.5);

	this.instance_1 = new lib.hero2_dress2_img();
	this.instance_1.setTransform(-152.5,-160.9);

	this.instance_2 = new lib.hero2_dress3_img();
	this.instance_2.setTransform(-92,-195.5);

	this.instance_3 = new lib.hero2_dress4_img();
	this.instance_3.setTransform(-105.5,-204);

	this.instance_4 = new lib.hero2_dress5_img();
	this.instance_4.setTransform(-96,-196.4);

	this.instance_5 = new lib.hero2_dress6_img();
	this.instance_5.setTransform(-139,-159.9);

	this.instance_6 = new lib.hero2_dress7_img();
	this.instance_6.setTransform(-106,-203.9);

	this.instance_7 = new lib.hero2_dress8_img();
	this.instance_7.setTransform(-103,-203.9);

	this.instance_8 = new lib.hero2_dress9_img();
	this.instance_8.setTransform(-102,-200.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-199.5,220,399);
p.frameBounds = [rect, new cjs.Rectangle(-152.5,-160.9,232,366), new cjs.Rectangle(-92,-195.5,157,205), new cjs.Rectangle(-105.5,-204,184,372), new cjs.Rectangle(-96,-196.4,196,369), new cjs.Rectangle(-139,-159.9,224,310), new cjs.Rectangle(-106,-203.9,216,373), new cjs.Rectangle(-103,-203.9,196,377), new cjs.Rectangle(-102,-200.9,211,386)];


(lib.hero2_accessory_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory1_img();
	this.instance.setTransform(-27,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27,-62,54,124);
p.frameBounds = [rect];


(lib.hero2_accessory_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_accessory1_img();
	this.instance.setTransform(-27,-62);

	this.instance_1 = new lib.hero2_accessory2_img();
	this.instance_1.setTransform(-17,-27);

	this.instance_2 = new lib.hero2_accessory3_img();
	this.instance_2.setTransform(-23,-102);

	this.instance_3 = new lib.hero2_accessory4_img();
	this.instance_3.setTransform(-12.9,-7.5);

	this.instance_4 = new lib.hero2_accessory5_img();
	this.instance_4.setTransform(-21.5,19);

	this.instance_5 = new lib.hero2_accessory6_img();
	this.instance_5.setTransform(-66.5,-36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27,-62,54,124);
p.frameBounds = [rect, new cjs.Rectangle(-17,-27,38,76), new cjs.Rectangle(-23,-102,38,168), new cjs.Rectangle(-12.9,-7.5,60,89), new cjs.Rectangle(-21.5,19,31,70), new cjs.Rectangle(-66.5,-36.5,121,99), null];


(lib.hero1_shoes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_shoes1_img();
	this.instance.setTransform(-87.5,-91);

	this.instance_1 = new lib.hero1_shoes2_img();
	this.instance_1.setTransform(-85,4.5);

	this.instance_2 = new lib.hero1_shoes3_img();
	this.instance_2.setTransform(-86.5,-2.5);

	this.instance_3 = new lib.hero1_shoes4_img();
	this.instance_3.setTransform(-85.4,-11.5);

	this.instance_4 = new lib.hero1_shoes5_img();
	this.instance_4.setTransform(-85.5,-100);

	this.instance_5 = new lib.hero1_shoes6_img();
	this.instance_5.setTransform(-84,-36);

	this.instance_6 = new lib.hero1_shoes7_img();
	this.instance_6.setTransform(-87.5,7);

	this.instance_7 = new lib.hero1_shoes8_img();
	this.instance_7.setTransform(-85.5,7.5);

	this.instance_8 = new lib.hero1_shoes9_img();
	this.instance_8.setTransform(-84.5,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.5,-91,175,182);
p.frameBounds = [rect, new cjs.Rectangle(-85,4.5,166,82), new cjs.Rectangle(-86.5,-2.5,160,85), new cjs.Rectangle(-85.4,-11.5,171,100), new cjs.Rectangle(-85.5,-100,174,188), new cjs.Rectangle(-84,-36,174,123), new cjs.Rectangle(-87.5,7,176,82), new cjs.Rectangle(-85.5,7.5,171,78), new cjs.Rectangle(-84.5,7.5,158,78), null];


(lib.hero1_shadow_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shadow3_img();
	this.instance.setTransform(-25.5,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-23.5,51,47);
p.frameBounds = [rect];


(lib.hero1_shadow_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_shadow1_img();
	this.instance.setTransform(-25.5,-23.5);

	this.instance_1 = new lib.hero1_shadow2_img();
	this.instance_1.setTransform(-25.5,-23.5);

	this.instance_2 = new lib.hero1_shadow3_img();
	this.instance_2.setTransform(-25.5,-23.5);

	this.instance_3 = new lib.hero1_shadow4_img();
	this.instance_3.setTransform(-25.5,-23.5);

	this.instance_4 = new lib.hero1_shadow5_img();
	this.instance_4.setTransform(-25.5,-23.5);

	this.instance_5 = new lib.hero1_shadow6_img();
	this.instance_5.setTransform(-25.5,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-23.5,51,47);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_rouge_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_rouge2_img();
	this.instance.setTransform(-25.5,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-23.5,51,47);
p.frameBounds = [rect];


(lib.hero1_rouge_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_rouge1_img();
	this.instance.setTransform(-25.5,-23.5);

	this.instance_1 = new lib.hero1_rouge2_img();
	this.instance_1.setTransform(-25.5,-23.5);

	this.instance_2 = new lib.hero1_rouge3_img();
	this.instance_2.setTransform(-25.5,-23.5);

	this.instance_3 = new lib.hero1_rouge4_img();
	this.instance_3.setTransform(-25.5,-23.5);

	this.instance_4 = new lib.hero1_rouge5_img();
	this.instance_4.setTransform(-25.5,-23.5);

	this.instance_5 = new lib.hero1_rouge6_img();
	this.instance_5.setTransform(-25.5,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-23.5,51,47);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero1_rouge_all_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_rouge1_img();
	this.instance.setTransform(-25.5,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-23.5,51,47);
p.frameBounds = [rect];


(lib.hero1_lips_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips2_img();
	this.instance.setTransform(-25.5,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-23.5,51,47);
p.frameBounds = [rect];


(lib.hero1_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_lips1_img();
	this.instance.setTransform(-25.5,-23.5);

	this.instance_1 = new lib.hero1_lips2_img();
	this.instance_1.setTransform(-25.5,-23.5);

	this.instance_2 = new lib.hero1_lips3_img();
	this.instance_2.setTransform(-25.5,-23.5);

	this.instance_3 = new lib.hero1_lips4_img();
	this.instance_3.setTransform(-25.5,-23.5);

	this.instance_4 = new lib.hero1_lips5_img();
	this.instance_4.setTransform(-25.5,-23.5);

	this.instance_5 = new lib.hero1_lips6_img();
	this.instance_5.setTransform(-25.5,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-23.5,51,47);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_hair1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-16,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16,-72,32,144);
p.frameBounds = [rect];


(lib.hero1_fringe1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_fringe1_img();
	this.instance.setTransform(-76.5,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-220,153,442);
p.frameBounds = [rect];


(lib.hero1_eyes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_eyes_img();
	this.instance.setTransform(-24,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-10,48,20);
p.frameBounds = [rect];


(lib.hero1_eyebrows_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyebrows1_img();
	this.instance.setTransform(-25.5,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-23.5,51,47);
p.frameBounds = [rect];


(lib.hero1_eyebrows_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_eyebrows1_img();
	this.instance.setTransform(-25.5,-23.5);

	this.instance_1 = new lib.hero1_eyebrows2_img();
	this.instance_1.setTransform(-25.5,-23.5);

	this.instance_2 = new lib.hero1_eyebrows3_img();
	this.instance_2.setTransform(-25.5,-23.5);

	this.instance_3 = new lib.hero1_eyebrows4_img();
	this.instance_3.setTransform(-25.5,-23.5);

	this.instance_4 = new lib.hero1_eyebrows5_img();
	this.instance_4.setTransform(-25.5,-23.5);

	this.instance_5 = new lib.hero1_eyebrows6_img();
	this.instance_5.setTransform(-25.5,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25.5,-23.5,51,47);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_dress_all2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_dress8_img();
	this.instance.setTransform(-103,-177.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-103,-177.5,205,412)];


(lib.hero1_dress_all1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_dress1_1_img();
	this.instance.setTransform(-64,-196);

	this.instance_1 = new lib.hero1_dress2_img();
	this.instance_1.setTransform(-66.5,-207);

	this.instance_2 = new lib.hero1_dress3_img();
	this.instance_2.setTransform(-68.5,-212.5);

	this.instance_3 = new lib.hero1_dress4_img();
	this.instance_3.setTransform(-65,-213);

	this.instance_4 = new lib.hero1_dress5_img();
	this.instance_4.setTransform(-60,-181.5);

	this.instance_5 = new lib.hero1_dress6_img();
	this.instance_5.setTransform(-94.5,-177);

	this.instance_6 = new lib.hero1_dress7_img();
	this.instance_6.setTransform(-79,-174.5);

	this.instance_7 = new lib.hero1_dress9_img();
	this.instance_7.setTransform(-72.5,-171);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64,-196,129,392);
p.frameBounds = [rect, new cjs.Rectangle(-66.5,-207,140,407), new cjs.Rectangle(-68.5,-212.5,137,410), new cjs.Rectangle(-65,-213,148,414), new cjs.Rectangle(-60,-181.5,167,242), new cjs.Rectangle(-94.5,-177,194,253), new cjs.Rectangle(-79,-174.5,203,242), new cjs.Rectangle(-72.5,-171,177,225), null];


(lib.hero1_accessory_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory4_img();
	this.instance.setTransform(-31,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31,-42,73,78);
p.frameBounds = [rect];


(lib.hero1_accessory_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_accessory1_img();
	this.instance.setTransform(-40.5,-53);

	this.instance_1 = new lib.hero1_accessory2_img();
	this.instance_1.setTransform(-49,-58);

	this.instance_2 = new lib.hero1_accessory3_img();
	this.instance_2.setTransform(-31.5,-42.5);

	this.instance_3 = new lib.hero1_accessory4_img();
	this.instance_3.setTransform(-31,-42);

	this.instance_4 = new lib.hero1_accessory5_img();
	this.instance_4.setTransform(-30.5,-41.5);

	this.instance_5 = new lib.hero1_accessory6_img();
	this.instance_5.setTransform(-18,-45.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.5,-53,81,106);
p.frameBounds = [rect, new cjs.Rectangle(-49,-58,90,118), new cjs.Rectangle(-31.5,-42.5,73,77), new cjs.Rectangle(-31,-42,73,78), new cjs.Rectangle(-30.5,-41.5,67,82), new cjs.Rectangle(-18,-45.5,60,58), null];


(lib.gubka_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gubka_img();
	this.instance.setTransform(-100,-106);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-106,200,212);
p.frameBounds = [rect];


(lib.glue_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glue_img();
	this.instance.setTransform(-32.5,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-100,65,200);
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


(lib.decor_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.decor_title_img();
	this.instance.setTransform(-111,-132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111,-132,220,180);
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
	this.instance_17.setTransform(-110,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(38));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,220,200);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.checkpoint_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("EgHzAnEMAAAhOHIPnAAMAAABOHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-250,100,500);
p.frameBounds = [rect];


(lib.check_makeup_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_makeup_img();
	this.instance.setTransform(-105,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-90,210,180);
p.frameBounds = [rect];


(lib.body2_51_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body2_5_img();
	this.instance.setTransform(-37.5,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.5,-47,75,94);
p.frameBounds = [rect];


(lib.body2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body2_3_img();
	this.instance.setTransform(-88,-238.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88,-238.5,176,477);
p.frameBounds = [rect];


(lib.body2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body2_2_img();
	this.instance.setTransform(-88,-238.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88,-238.5,176,477);
p.frameBounds = [rect];


(lib.body1_61_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.body1_6_img();
	this.instance.setTransform(-43,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43,-44,86,88);
p.frameBounds = [rect];


(lib.body1_51_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.body1_5_img();
	this.instance.setTransform(-35,-94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-94.5,70,189);
p.frameBounds = [rect];


(lib.body1_41_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.body1_4_img();
	this.instance.setTransform(-37.5,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.5,-43.5,75,87);
p.frameBounds = [rect];


(lib.body1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.body1_3_img();
	this.instance.setTransform(-59.5,-242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.5,-242,119,484);
p.frameBounds = [rect];


(lib.body1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.body1_2_img();
	this.instance.setTransform(-59.5,-242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.5,-242,119,484);
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


(lib.body_current_location_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.current_location_img();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-200,400,400);
p.frameBounds = [rect];


(lib.blesk6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blesk6_img();
	this.instance.setTransform(-75,-81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-81.5,150,163);
p.frameBounds = [rect];


(lib.big_hero_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.big_hero_main_img();
	this.instance.setTransform(-245,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-260,490,520);
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
	this.instance_12.setTransform(-110,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-80,220,160);
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


(lib.accessories_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory6_img();
	this.instance.setTransform(-60.5,-49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AiVH+IoepTIFjlxIGOg5IGvDIIDHFkIqIHTg");
	this.shape.setTransform(0.6,-6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.6,-58,138.5,107.5);
p.frameBounds = [rect];


(lib.accessories_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory6_img();
	this.instance.setTransform(-30,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ag7F+IlgpzIBliIII+ACICUErIj4HOg");
	this.shape.setTransform(-1.3,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.6,-37.4,82.6,76.4);
p.frameBounds = [rect];


(lib.accessories_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory5_img();
	this.instance.setTransform(-15.5,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aj5GPIAAseIHzAAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-40,50,80);
p.frameBounds = [rect];


(lib.accessories_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory5_img();
	this.instance.setTransform(33,-41,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkTCkIh3pSIELg6IFcB1ICuElIgZE1Ii4ECg");
	this.shape.setTransform(1.6,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.9,-47.9,79.1,97.9);
p.frameBounds = [rect];


(lib.accessories_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory4_img();
	this.instance.setTransform(-40.4,-35.2,1,1,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmWCiIAjqBIJEg9IDGIDIiVHxIlRBFg");
	this.shape.setTransform(0.8,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.4,-53.7,82.1,108.3);
p.frameBounds = [rect];


(lib.accessories_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory4_img();
	this.instance.setTransform(-36.5,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Am5C1IAAkGIDEkaIFdh5IFSBuIjqI7IncEgg");
	this.shape.setTransform(1.3,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43,-47.7,88.6,97.2);
p.frameBounds = [rect];


(lib.accessories_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory3_img();
	this.instance.setTransform(-19,-84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ak6lBICdpcIEaAEIC+JkIkCTRIjjACg");
	this.shape.setTransform(0.1,-2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.4,-95.3,63.1,185.3);
p.frameBounds = [rect];


(lib.accessories_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory3_img();
	this.instance.setTransform(-36.5,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Am1CuIANkoIC+jzIFBheIFfBqIjqHbInXFSg");
	this.shape.setTransform(1.1,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.7,-44.1,87.7,92.1);
p.frameBounds = [rect];


(lib.accessories_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory2_img();
	this.instance.setTransform(-19,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjhHAIhVsJICLiQIFmAyIB8GwIlRHRg");
	this.shape.setTransform(-2,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33.1,-47.9,62.3,94.9);
p.frameBounds = [rect];


(lib.accessories_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory2_img();
	this.instance.setTransform(-45,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOHvIiMlbIA3mEIDakTIGOiNIGXA7IjSK0IoDIyg");
	this.shape.setTransform(1.4,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.6,-64,108,131.5);
p.frameBounds = [rect];


(lib.accessories_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory1_img();
	this.instance.setTransform(27,-62,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AipEcIjisEIB0jQIGYgJIELUjIivBgg");
	this.shape.setTransform(-2.6,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.2,-67.9,79.3,141.3);
p.frameBounds = [rect];


(lib.accessories_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory1_img();
	this.instance.setTransform(-40.5,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkbJAIi/kUIAAmxIDfk+IGdiDIE5BXIi2KcImSGag");
	this.shape.setTransform(2.2,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.4,-59,95.2,116.8);
p.frameBounds = [rect];


(lib.curtain_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663333").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
	this.shape.setTransform(600,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,600);
p.frameBounds = [rect];


(lib.curtain_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_2_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,600);
p.frameBounds = [rect];


(lib.curtain_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,600);
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
	this.shape.setTransform(400,300,1,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,600);
p.frameBounds = [rect];


(lib.blinking_light_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_1_img();
	this.instance.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.barbie_star_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.barbie_star_2_img();
	this.instance.setTransform(-40,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-15,80,30);
p.frameBounds = [rect];


(lib.barbie_star_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.barbie_star_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
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


(lib.piece_fan_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.piece_fan_img();
	this.instance.setTransform(-16.5,-102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AheHXIAAutIC9AAIikOtg");
	this.shape.setTransform(9.5,-47.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16.5,-102,35.6,102);
p.frameBounds = [rect];


(lib.piece_fan_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.piece_fan_img();
	this.instance.setTransform(-16.5,-102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16.5,-102,33,102);
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


(lib.nav_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhH0IAAvnMAnDAAAIAAPng");
	this.shape.setTransform(0,-10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-60,250,120);
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
	this.shape.setTransform(400,300,1.017,1.033);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-10,1220,620);
p.frameBounds = [rect];


(lib.redirect_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_redirect_mc();
	this.instance.setTransform(0,400);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({y:140,alpha:1},10).to({y:160},5).wait(35).to({scaleX:0.93,scaleY:0.93},5).to({scaleX:1,scaleY:1},5).to({scaleX:0.93,scaleY:0.93},5).to({scaleX:1,scaleY:1},5).wait(110).to({y:400,alpha:0.012},10).wait(1));

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
	this.shape.setTransform(0,50,1,1.083);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,670);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-210,420,644), new cjs.Rectangle(-210,-210,420,618), new cjs.Rectangle(-210,-210,420,592), new cjs.Rectangle(-210,-210,420,566), new cjs.Rectangle(-210,-210,420,540), rect=new cjs.Rectangle(-210,-210,420,520), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-210,420,526), new cjs.Rectangle(-210,-210,420,550), new cjs.Rectangle(-210,-210,420,574), new cjs.Rectangle(-210,-210,420,598), new cjs.Rectangle(-210,-210,420,622), new cjs.Rectangle(-210,-210,420,646), new cjs.Rectangle(-210,-210,420,670)];


(lib.preloader_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.preloader_13_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.25,scaleY:1.25,x:-10},5).to({x:10},10).to({scaleX:1,scaleY:1,x:0},5).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.4,-60,110.1,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-54.9,-63,115.6,126), new cjs.Rectangle(-59.4,-66,121.1,132), new cjs.Rectangle(-63.9,-69,126.6,138), new cjs.Rectangle(-68.5,-72,132.1,144), new cjs.Rectangle(-73,-75,137.7,150), new cjs.Rectangle(-70.9,-75,137.6,150), new cjs.Rectangle(-68.9,-75,137.6,150), new cjs.Rectangle(-66.9,-75,137.6,150), new cjs.Rectangle(-64.9,-75,137.6,150), new cjs.Rectangle(-63,-75,137.6,150), new cjs.Rectangle(-61,-75,137.6,150), new cjs.Rectangle(-59,-75,137.6,150), new cjs.Rectangle(-57,-75,137.6,150), new cjs.Rectangle(-55,-75,137.6,150), new cjs.Rectangle(-53,-75,137.7,150), new cjs.Rectangle(-52.5,-72,132.1,144), new cjs.Rectangle(-52,-69,126.6,138), new cjs.Rectangle(-51.5,-66,121.1,132), new cjs.Rectangle(-50.9,-63,115.6,126), rect=new cjs.Rectangle(-50.4,-60,110.1,120), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.wind_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wind_1_mc();
	this.instance.setTransform(0,-150);
	this.instance.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.wind_1_mc();
	this.instance_1.setTransform(0,150);
	this.instance_1.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.wind_1_mc();
	this.instance_2.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-900,-190,900,390);
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


(lib.shoes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.45,0.45,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.shadows_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect];


(lib.prev_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-60,250,120);
p.frameBounds = [rect];


(lib.next_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();
	this.instance.setTransform(0,0,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-60,250,120);
p.frameBounds = [rect];


(lib.mask2_front_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_2_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.mask_2_2_mc();
	this.instance_1.setTransform(-100.6,42.4,1,1,0,0,180);

	this.instance_2 = new lib.mask_2_2_mc();
	this.instance_2.setTransform(104.4,42.4);

	this.instance_3 = new lib.mask_2_1_mc();
	this.instance_3.setTransform(-0.6,190.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.5,-275,445,550);
p.frameBounds = [rect];


(lib.mask2_back_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_1_18_mc();
	this.instance.setTransform(-104.3,46.6,1,1,0,0,180);

	this.instance_1 = new lib.mask_1_18_mc();
	this.instance_1.setTransform(100,47);

	this.instance_2 = new lib.mask_2_1_mc();
	this.instance_2.setTransform(3,192);

	this.instance_3 = new lib.mask_2_16_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.5,-275,445,550);
p.frameBounds = [rect];


(lib.mask1_back_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mask_1_18_mc();
	this.instance.setTransform(-98,47,1,1,0,0,180);

	this.instance_1 = new lib.mask_1_18_mc();
	this.instance_1.setTransform(99.4,47.4);

	this.instance_2 = new lib.mask_1_1_mc();
	this.instance_2.setTransform(2,188.4);

	this.instance_3 = new lib.mask_1_16_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.5,-275,445,550);
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


(lib.hero2_dress9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress9_img();
	this.instance.setTransform(-80.7,-189.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.veshalka_mc();
	this.instance_1.setTransform(0,-174.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.7,-203.5,211,400);
p.frameBounds = [rect];


(lib.hero2_dress8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress8_img();
	this.instance.setTransform(-84.7,-192.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.veshalka_mc();
	this.instance_1.setTransform(0,-174.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.7,-203.5,196,388);
p.frameBounds = [rect];


(lib.hero2_dress7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress7_img();
	this.instance.setTransform(-80.7,-186.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.veshalka2_mc();
	this.instance_1.setTransform(0,-174.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.7,-203.5,216,390);
p.frameBounds = [rect];


(lib.hero2_dress6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress6_img();
	this.instance.setTransform(-124.7,-178.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.veshalka_mc();
	this.instance_1.setTransform(0,-174.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-124.7,-203.5,224,335);
p.frameBounds = [rect];


(lib.hero2_dress5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress5_img();
	this.instance.setTransform(-70.7,-182.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.veshalka2_mc();
	this.instance_1.setTransform(0,-174.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.7,-203.5,196,390);
p.frameBounds = [rect];


(lib.hero2_dress4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress4_img();
	this.instance.setTransform(-79.7,-189.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.veshalka_mc();
	this.instance_1.setTransform(0,-174.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.7,-203.5,184,386);
p.frameBounds = [rect];


(lib.hero2_dress3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress3_img();
	this.instance.setTransform(-67.7,-179.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.veshalka_mc();
	this.instance_1.setTransform(0,-174.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.7,-203.5,157,229);
p.frameBounds = [rect];


(lib.hero2_dress2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress2_img();
	this.instance.setTransform(-156.7,-180.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.veshalka2_mc();
	this.instance_1.setTransform(0,-174.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-156.7,-203.5,232,389);
p.frameBounds = [rect];


(lib.hero2_dress1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress1_img();
	this.instance.setTransform(-85.7,-184.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.veshalka_mc();
	this.instance_1.setTransform(0,-174.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.7,-203.5,220,418);
p.frameBounds = [rect];


(lib.hero1_dress9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress9_img();
	this.instance.setTransform(-74.5,-166.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.veshalka_mc();
	this.instance_1.setTransform(0,-174.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.5,-203.5,177,261.6);
p.frameBounds = [rect];


(lib.hero1_dress8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress8_img();
	this.instance.setTransform(-99.5,-179.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.veshalka_mc();
	this.instance_1.setTransform(0,-174.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-99.5,-203.5,205,435.6);
p.frameBounds = [rect];


(lib.hero1_dress7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress7_img();
	this.instance.setTransform(-79.5,-168.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.veshalka_mc();
	this.instance_1.setTransform(0,-174.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.5,-203.5,203,276.6);
p.frameBounds = [rect];


(lib.hero1_dress6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress6_img();
	this.instance.setTransform(-94.5,-176.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.veshalka_mc();
	this.instance_1.setTransform(0,-174.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.5,-203.5,194,279.6);
p.frameBounds = [rect];


(lib.hero1_dress5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress5_img();
	this.instance.setTransform(-63.5,-174.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.veshalka_mc();
	this.instance_1.setTransform(0,-174.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.5,-203.5,167,270.6);
p.frameBounds = [rect];


(lib.hero1_dress4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress4_img();
	this.instance.setTransform(-82.5,-190.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.veshalka2_mc();
	this.instance_1.setTransform(0,-174.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.5,-203.5,148,426.6);
p.frameBounds = [rect];


(lib.hero1_dress3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress3_img();
	this.instance.setTransform(-83.5,-190.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.veshalka2_mc();
	this.instance_1.setTransform(0,-174.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.5,-203.5,137,422.6);
p.frameBounds = [rect];


(lib.hero1_dress2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Av2fPMAAAg+dIc5AAIAACWIC0AAMAAAA8Hg");
	mask.setTransform(-5.5,21.1);

	// Слой 2
	this.instance = new lib.hero1_dress2_img();
	this.instance.setTransform(-65.5,-205.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.veshalka_mc();
	this.instance_1.setTransform(0,-174.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.5,-203.5,140,405);
p.frameBounds = [rect];


(lib.hero1_dress1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress1_1_img();
	this.instance.setTransform(-61.5,-195.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.veshalka_mc();
	this.instance_1.setTransform(0,-174.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.5,-203.5,129,400);
p.frameBounds = [rect];


(lib.hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero2_fringe1_mc();
	this.instance.setTransform(-35,-223);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({regX:1,regY:1,x:-34,y:-222},0).to({regY:1.1,rotation:-2.3,x:-35.5,y:-222.6},39).to({regY:1,rotation:0,x:-34,y:-222},40).wait(1));

	// accessories
	this.accessories = new lib.hero2_accessory_all_mc();
	this.accessories.setTransform(105,-200.5);

	this.timeline.addTween(cjs.Tween.get(this.accessories).wait(44).to({x:106,y:-199.5},39).to({x:105,y:-200.5},40).wait(1));

	// dress
	this.dress = new lib.hero2_dress_all_mc();
	this.dress.setTransform(-1.5,10);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(124));

	// body
	this.instance_1 = new lib.body1_51_mc();
	this.instance_1.setTransform(-51,-165.5,1,1,0,0,0,24,-87.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({rotation:1.6},39).to({rotation:0},40).wait(1));

	// body
	this.instance_2 = new lib.hero2_eyes_mc();
	this.instance_2.setTransform(-14.5,-218,1,1,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({rotation:-2.2,x:-15.7,y:-217.9},39).to({rotation:2,x:-14.5,y:-218},40).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero2_eyebrows_all_mc();
	this.eyebrows.setTransform(-14,-213);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).wait(44).to({rotation:-4.2,x:-14.8,y:-212.9},39).to({rotation:0,x:-14,y:-213},40).wait(1));

	// shadows
	this.shadows = new lib.hero2_shadow_all_mc();
	this.shadows.setTransform(-14.6,-213.2);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(44).to({rotation:-4.2,x:-15.4,y:-213.1},39).to({rotation:0,x:-14.6,y:-213.2},40).wait(1));

	// lips
	this.lips = new lib.hero2_lips_all_mc();
	this.lips.setTransform(-14.7,-212.7);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(44).to({rotation:-4.2,x:-15.5,y:-212.6},39).to({rotation:0,x:-14.7,y:-212.7},40).wait(1));

	// blush
	this.blush = new lib.hero2_rouge_mc();
	this.blush.setTransform(-14.5,-210.7,1,1,2);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(44).to({rotation:-2.2,x:-15.1},39).to({rotation:2,x:-14.5},40).wait(1));

	// body
	this.instance_3 = new lib.body1_41_mc();
	this.instance_3.setTransform(-27,-196.5,1,1,2,0,0,-4,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(44).to({regY:34.6,rotation:-1.5},39).to({regY:34.5,rotation:2},40).wait(1));

	// shoes
	this.shoes = new lib.hero2_shoes_all_mc();
	this.shoes.setTransform(-12,228.8);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(124));

	// body
	this.instance_4 = new lib.body1_3_mc();
	this.instance_4.setTransform(-2.5,32);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(63).to({_off:false},0).to({alpha:1},20).to({alpha:0.012},20).to({_off:true},1).wait(20));

	// body
	this.instance_5 = new lib.body1_2_mc();
	this.instance_5.setTransform(-2.5,32);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(44).to({_off:false},0).to({alpha:1},19).wait(40).to({alpha:0.012},20).wait(1));

	// body
	this.instance_6 = new lib.body1_1_img();
	this.instance_6.setTransform(-62,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(124));

	// body
	this.instance_7 = new lib.body1_61_mc();
	this.instance_7.setTransform(24.5,-116,1,1,0,0,0,-42.5,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(44).to({regX:-42.6,rotation:1.3,x:24.4},39).to({regX:-42.5,rotation:0,x:24.5},40).wait(1));

	// body
	this.instance_8 = new lib.hero2_hair1_mc();
	this.instance_8.setTransform(-42,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(44).to({regX:16,regY:-175,x:-26,y:-237},0).to({rotation:-1.9,x:-26.9,y:-237.4},39).to({rotation:0,x:-26,y:-237},40).wait(1));

	// body
	this.instance_9 = new lib.shadow_img();
	this.instance_9.setTransform(-83,217,0.651,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(124));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.5,-309,255.5,623.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-123.4,-309,255.5,623.1), new cjs.Rectangle(-123.5,-309.1,255.6,623.2), new cjs.Rectangle(-123.5,-309.1,255.6,623.1), new cjs.Rectangle(-123.6,-309.1,255.7,623.2), new cjs.Rectangle(-123.6,-309.5,255.8,623.5), rect=new cjs.Rectangle(-123.7,-309.5,255.9,623.5), rect, new cjs.Rectangle(-123.8,-309.6,256,623.6), new cjs.Rectangle(-123.8,-309.8,256.1,623.9), new cjs.Rectangle(-123.8,-309.9,256.1,623.9), new cjs.Rectangle(-123.9,-309.9,256.2,624), new cjs.Rectangle(-123.9,-310,256.3,624), new cjs.Rectangle(-123.9,-310.2,256.3,624.3), new cjs.Rectangle(-123.9,-310.3,256.3,624.4), new cjs.Rectangle(-124,-310.3,256.4,624.4), new cjs.Rectangle(-124,-310.3,256.5,624.4), new cjs.Rectangle(-124.1,-310.4,256.5,624.5), new cjs.Rectangle(-124.1,-310.6,256.5,624.7), new cjs.Rectangle(-124.1,-310.7,256.7,624.7), new cjs.Rectangle(-124.1,-310.8,256.7,624.8), new cjs.Rectangle(-124.3,-310.8,256.9,624.9), new cjs.Rectangle(-124.3,-311.1,256.9,625.1), new cjs.Rectangle(-124.3,-311.2,257,625.2), new cjs.Rectangle(-124.3,-311.1,257,625.2), new cjs.Rectangle(-124.4,-311.2,257.1,625.2), new cjs.Rectangle(-124.4,-311.5,257.1,625.5), new cjs.Rectangle(-124.4,-311.5,257.2,625.5), new cjs.Rectangle(-124.5,-311.5,257.2,625.6), new cjs.Rectangle(-124.5,-311.6,257.3,625.7), new cjs.Rectangle(-124.6,-311.6,257.4,625.7), new cjs.Rectangle(-124.6,-311.9,257.5,625.9), new cjs.Rectangle(-124.7,-311.9,257.5,626), new cjs.Rectangle(-124.7,-312,257.6,626), new cjs.Rectangle(-124.8,-312,257.7,626.1), new cjs.Rectangle(-124.8,-312.3,257.7,626.4), new cjs.Rectangle(-124.8,-312.4,257.8,626.4), new cjs.Rectangle(-124.8,-312.3,257.8,626.4), new cjs.Rectangle(-124.9,-312.4,257.9,626.5), new cjs.Rectangle(-125,-312.8,258,626.8), new cjs.Rectangle(-124.9,-312.5,257.9,626.5), rect=new cjs.Rectangle(-124.8,-312.4,257.8,626.4), rect, new cjs.Rectangle(-124.7,-312.3,257.7,626.3), new cjs.Rectangle(-124.7,-312,257.7,626.1), new cjs.Rectangle(-124.7,-312,257.6,626), new cjs.Rectangle(-124.6,-312,257.5,626), new cjs.Rectangle(-124.6,-311.9,257.4,626), new cjs.Rectangle(-124.6,-311.9,257.5,625.9), new cjs.Rectangle(-124.4,-311.6,257.2,625.7), new cjs.Rectangle(-124.4,-311.6,257.2,625.6), new cjs.Rectangle(-124.5,-311.5,257.2,625.6), new cjs.Rectangle(-124.4,-311.5,257.2,625.5), new cjs.Rectangle(-124.4,-311.2,257.1,625.2), new cjs.Rectangle(-124.3,-311.2,257,625.2), new cjs.Rectangle(-124.3,-311.1,257,625.2), new cjs.Rectangle(-124.3,-311.1,256.9,625.2), rect=new cjs.Rectangle(-124.2,-310.8,256.8,624.8), rect, new cjs.Rectangle(-124.2,-310.7,256.7,624.8), new cjs.Rectangle(-124.1,-310.7,256.7,624.8), new cjs.Rectangle(-124.1,-310.7,256.5,624.7), new cjs.Rectangle(-124.1,-310.4,256.5,624.5), new cjs.Rectangle(-124.1,-310.4,256.5,624.4), new cjs.Rectangle(-123.9,-310.3,256.4,624.4), new cjs.Rectangle(-123.9,-310.3,256.3,624.3), new cjs.Rectangle(-123.9,-310,256.3,624), new cjs.Rectangle(-123.8,-309.9,256.2,624), new cjs.Rectangle(-123.8,-310,256.2,624), new cjs.Rectangle(-123.7,-309.9,256,624), new cjs.Rectangle(-123.8,-309.9,256.1,623.9), new cjs.Rectangle(-123.7,-309.6,256,623.6), rect=new cjs.Rectangle(-123.7,-309.5,255.9,623.5), rect, new cjs.Rectangle(-123.5,-309.4,255.7,623.5), new cjs.Rectangle(-123.5,-309.1,255.7,623.2), new cjs.Rectangle(-123.5,-309.1,255.6,623.1), new cjs.Rectangle(-123.5,-309.1,255.6,623.2), new cjs.Rectangle(-123.4,-309.1,255.5,623.1), new cjs.Rectangle(-123.5,-309,255.5,623.1)];


(lib.hero_2_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hair_big2_img();
	this.instance.setTransform(-367,-390.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.mask2_makeup_2_img();
	this.instance_1.setTransform(-171.1,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// eyebrows
	this.eyebrows = new lib.mask2_eyebrows_all_mc();
	this.eyebrows.setTransform(20,21.5);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).wait(1));

	// shadows
	this.shadows = new lib.mask2_shadow_all_mc();
	this.shadows.setTransform(20,75);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.mask2_lips_all_mc();
	this.lips.setTransform(19.4,237.3);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.mask2_rouge_all_mc();
	this.blush.setTransform(22,164.9);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_2 = new lib.mask2_makeup_1_img();
	this.instance_2.setTransform(-202.5,-228.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-367,-390.5,772,712);
p.frameBounds = [rect];


(lib.hero_2_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero2_fringe1_mc();
	this.instance.setTransform(-34,-222,1,1,0,0,0,1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:1.1,rotation:-2.3,x:-35.5,y:-222.6},39).to({regY:1,rotation:0,x:-34,y:-222},40).wait(1));

	// animation
	this.instance_1 = new lib.hero2_accessory_main_mc();
	this.instance_1.setTransform(105,-200.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:106,y:-199.5},39).to({x:105,y:-200.5},40).wait(1));

	// animation
	this.instance_2 = new lib.hero2_dress_main_mc();
	this.instance_2.setTransform(-1.5,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80));

	// animation
	this.instance_3 = new lib.body1_51_mc();
	this.instance_3.setTransform(-51,-165.5,1,1,0,0,0,24,-87.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:1.6},39).to({rotation:0},40).wait(1));

	// animation
	this.instance_4 = new lib.hero2_eyes_mc();
	this.instance_4.setTransform(-14.5,-218,1,1,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-2.2,x:-15.7,y:-217.9},39).to({rotation:2,x:-14.5,y:-218},40).wait(1));

	// animation
	this.instance_5 = new lib.hero2_eyebrows_main_mc();
	this.instance_5.setTransform(-14,-213);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-4.2,x:-14.8,y:-212.9},39).to({rotation:0,x:-14,y:-213},40).wait(1));

	// animation
	this.instance_6 = new lib.hero2_shadow_main_mc();
	this.instance_6.setTransform(-14.6,-213.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-4.2,x:-15.4,y:-213.1},39).to({rotation:0,x:-14.6,y:-213.2},40).wait(1));

	// animation
	this.instance_7 = new lib.hero2_lips_main_mc();
	this.instance_7.setTransform(-14.7,-212.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-4.2,x:-15.5,y:-212.6},39).to({rotation:0,x:-14.7,y:-212.7},40).wait(1));

	// animation
	this.instance_8 = new lib.hero2_rouge_main_mc();
	this.instance_8.setTransform(-14.5,-210.7,1,1,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-2.2,x:-15.1},39).to({rotation:2,x:-14.5},40).wait(1));

	// animation
	this.instance_9 = new lib.body1_41_mc();
	this.instance_9.setTransform(-27,-196.5,1,1,2,0,0,-4,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regY:34.6,rotation:-1.5},39).to({regY:34.5,rotation:2},40).wait(1));

	// animation
	this.instance_10 = new lib.hero2_shoes_main_mc();
	this.instance_10.setTransform(-12,228.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(80));

	// animation
	this.instance_11 = new lib.body1_3_mc();
	this.instance_11.setTransform(-2.5,32);
	this.instance_11.alpha = 0.012;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(19).to({_off:false},0).to({alpha:1},20).to({alpha:0.012},20).to({_off:true},1).wait(20));

	// animation
	this.instance_12 = new lib.body1_2_mc();
	this.instance_12.setTransform(-2.5,32);
	this.instance_12.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({alpha:1},19).wait(40).to({alpha:0.012},20).wait(1));

	// animation
	this.instance_13 = new lib.body1_1_img();
	this.instance_13.setTransform(-62,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(80));

	// animation
	this.instance_14 = new lib.body1_61_mc();
	this.instance_14.setTransform(24.5,-116,1,1,0,0,0,-42.5,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regX:-42.6,rotation:1.3,x:24.4},39).to({regX:-42.5,rotation:0,x:24.5},40).wait(1));

	// animation
	this.instance_15 = new lib.hero2_hair1_mc();
	this.instance_15.setTransform(-26,-237,1,1,0,0,0,16,-175);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({rotation:-1.9,x:-26.9,y:-237.4},39).to({rotation:0,x:-26,y:-237},40).wait(1));

	// animation
	this.instance_16 = new lib.shadow_img();
	this.instance_16.setTransform(-83,217,0.651,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-123.5,-309,255.5,623.1);
p.frameBounds = [rect, new cjs.Rectangle(-123.4,-309,255.5,623.1), new cjs.Rectangle(-123.5,-309.1,255.6,623.2), new cjs.Rectangle(-123.5,-309.1,255.6,623.1), new cjs.Rectangle(-123.6,-309.1,255.7,623.2), new cjs.Rectangle(-123.6,-309.5,255.8,623.5), rect=new cjs.Rectangle(-123.7,-309.5,255.9,623.5), rect, new cjs.Rectangle(-123.8,-309.6,256,623.6), new cjs.Rectangle(-123.8,-309.8,256.1,623.9), new cjs.Rectangle(-123.8,-309.9,256.1,623.9), new cjs.Rectangle(-123.9,-309.9,256.2,624), new cjs.Rectangle(-123.9,-310,256.3,624), new cjs.Rectangle(-123.9,-310.2,256.3,624.3), new cjs.Rectangle(-123.9,-310.3,256.3,624.4), new cjs.Rectangle(-124,-310.3,256.4,624.4), new cjs.Rectangle(-124,-310.3,256.5,624.4), new cjs.Rectangle(-124.1,-310.4,256.5,624.5), new cjs.Rectangle(-124.1,-310.6,256.5,624.7), new cjs.Rectangle(-124.1,-310.7,256.7,624.7), new cjs.Rectangle(-124.1,-310.8,256.7,624.8), new cjs.Rectangle(-124.3,-310.8,256.9,624.9), new cjs.Rectangle(-124.3,-311.1,256.9,625.1), new cjs.Rectangle(-124.3,-311.2,257,625.2), new cjs.Rectangle(-124.3,-311.1,257,625.2), new cjs.Rectangle(-124.4,-311.2,257.1,625.2), new cjs.Rectangle(-124.4,-311.5,257.1,625.5), new cjs.Rectangle(-124.4,-311.5,257.2,625.5), new cjs.Rectangle(-124.5,-311.5,257.2,625.6), new cjs.Rectangle(-124.5,-311.6,257.3,625.7), new cjs.Rectangle(-124.6,-311.6,257.4,625.7), new cjs.Rectangle(-124.6,-311.9,257.5,625.9), new cjs.Rectangle(-124.7,-311.9,257.5,626), new cjs.Rectangle(-124.7,-312,257.6,626), new cjs.Rectangle(-124.8,-312,257.7,626.1), new cjs.Rectangle(-124.8,-312.3,257.7,626.4), new cjs.Rectangle(-124.8,-312.4,257.8,626.4), new cjs.Rectangle(-124.8,-312.3,257.8,626.4), new cjs.Rectangle(-124.9,-312.4,257.9,626.5), new cjs.Rectangle(-125,-312.8,258,626.8), new cjs.Rectangle(-124.9,-312.5,257.9,626.5), rect=new cjs.Rectangle(-124.8,-312.4,257.8,626.4), rect, new cjs.Rectangle(-124.7,-312.3,257.7,626.3), new cjs.Rectangle(-124.7,-312,257.7,626.1), new cjs.Rectangle(-124.7,-312,257.6,626), new cjs.Rectangle(-124.6,-312,257.5,626), new cjs.Rectangle(-124.6,-311.9,257.4,626), new cjs.Rectangle(-124.6,-311.9,257.5,625.9), new cjs.Rectangle(-124.4,-311.6,257.2,625.7), new cjs.Rectangle(-124.4,-311.6,257.2,625.6), new cjs.Rectangle(-124.5,-311.5,257.2,625.6), new cjs.Rectangle(-124.4,-311.5,257.2,625.5), new cjs.Rectangle(-124.4,-311.2,257.1,625.2), new cjs.Rectangle(-124.3,-311.2,257,625.2), new cjs.Rectangle(-124.3,-311.1,257,625.2), new cjs.Rectangle(-124.3,-311.1,256.9,625.2), rect=new cjs.Rectangle(-124.2,-310.8,256.8,624.8), rect, new cjs.Rectangle(-124.2,-310.7,256.7,624.8), new cjs.Rectangle(-124.1,-310.7,256.7,624.8), new cjs.Rectangle(-124.1,-310.7,256.5,624.7), new cjs.Rectangle(-124.1,-310.4,256.5,624.5), new cjs.Rectangle(-124.1,-310.4,256.5,624.4), new cjs.Rectangle(-123.9,-310.3,256.4,624.4), new cjs.Rectangle(-123.9,-310.3,256.3,624.3), new cjs.Rectangle(-123.9,-310,256.3,624), new cjs.Rectangle(-123.8,-309.9,256.2,624), new cjs.Rectangle(-123.8,-310,256.2,624), new cjs.Rectangle(-123.7,-309.9,256,624), new cjs.Rectangle(-123.8,-309.9,256.1,623.9), new cjs.Rectangle(-123.7,-309.6,256,623.6), rect=new cjs.Rectangle(-123.7,-309.5,255.9,623.5), rect, new cjs.Rectangle(-123.5,-309.4,255.7,623.5), new cjs.Rectangle(-123.5,-309.1,255.7,623.2), new cjs.Rectangle(-123.5,-309.1,255.6,623.1), new cjs.Rectangle(-123.5,-309.1,255.6,623.2), new cjs.Rectangle(-123.4,-309.1,255.5,623.1), new cjs.Rectangle(-123.5,-309,255.5,623.1)];


(lib.hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero1_fringe1_mc();
	this.instance.setTransform(37,-266.1,1,1,0,0,0,-8,-203);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({regX:-8.1,regY:-203.1,rotation:-3,x:33.9},39).to({regX:-8,regY:-203,rotation:0,x:37},40).wait(1));

	// eyebrows
	this.eyebrows = new lib.hero1_eyebrows_all_mc();
	this.eyebrows.setTransform(5.3,-204.7);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).wait(44).to({rotation:-3,y:-203.7},39).to({rotation:0,y:-204.7},40).wait(1));

	// body
	this.instance_1 = new lib.hero1_eyes_mc();
	this.instance_1.setTransform(3.8,-214.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({rotation:-3,x:3.2,y:-213.4},39).to({rotation:0,x:3.8,y:-214.5},40).wait(1));

	// shadows
	this.shadows = new lib.hero1_shadow_all_mc();
	this.shadows.setTransform(5.3,-204.2);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(44).to({rotation:-3,y:-203.2},39).to({rotation:0,y:-204.2},40).wait(1));

	// lips
	this.lips = new lib.hero1_lips_all_mc();
	this.lips.setTransform(5.3,-204.7);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(44).to({rotation:-3,y:-203.7},39).to({rotation:0,y:-204.7},40).wait(1));

	// blush
	this.blush = new lib.hero1_rouge_all_mc();
	this.blush.setTransform(5.3,-204.7);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(44).to({rotation:-3,y:-203.7},39).to({rotation:0,y:-204.7},40).wait(1));

	// body
	this.instance_2 = new lib.body2_51_mc();
	this.instance_2.setTransform(21.5,-189.5,1,1,0,0,0,4.5,38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({rotation:-3},39).to({rotation:0},40).wait(1));

	// body
	this.instance_3 = new lib.body2_6_img();
	this.instance_3.setTransform(-77,-134);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(124));

	// accessories
	this.accessories = new lib.hero1_accessory_all_mc();
	this.accessories.setTransform(-82.5,-128.1);

	this.timeline.addTween(cjs.Tween.get(this.accessories).wait(44).to({rotation:-6.7,x:-84.5,y:-125.1},39).to({rotation:0,x:-82.5,y:-128.1},40).wait(1));

	// dressSecond
	this.dressSecond = new lib.hero1_dress_all2_mc();
	this.dressSecond.setTransform(3,20.9);

	this.timeline.addTween(cjs.Tween.get(this.dressSecond).wait(124));

	// shoes
	this.shoes = new lib.hero1_shoes_all_mc();
	this.shoes.setTransform(-5.5,192.3);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(124));

	// dress
	this.dress = new lib.hero1_dress_all1_mc();
	this.dress.setTransform(3,20.9);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(124));

	// body
	this.instance_4 = new lib.body2_4_img();
	this.instance_4.setTransform(-77,-175.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(124));

	// body
	this.instance_5 = new lib.body2_3_mc();
	this.instance_5.setTransform(0,36);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(63).to({_off:false},0).to({alpha:1},15).to({alpha:0.012},15).to({_off:true},1).wait(30));

	// body
	this.instance_6 = new lib.body2_2_mc();
	this.instance_6.setTransform(0,36);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(44).to({alpha:1},19).wait(30).to({alpha:0.012},30).wait(1));

	// body
	this.instance_7 = new lib.body2_1_img();
	this.instance_7.setTransform(-88,-202.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(124));

	// body
	this.instance_8 = new lib.hero1_hair1_mc();
	this.instance_8.setTransform(-8.5,-243.5,1,1,0,0,0,-3,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(44).to({rotation:-3},39).to({rotation:0},40).wait(1));

	// body
	this.instance_9 = new lib.shadow_img();
	this.instance_9.setTransform(-125,217);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(124));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-283.1,246.5,597.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-125,-283.1,246.6,597.1), new cjs.Rectangle(-125,-283.1,246.7,597.1), new cjs.Rectangle(-125,-283.1,246.7,597.2), new cjs.Rectangle(-125,-283.4,248.2,597.5), new cjs.Rectangle(-125,-283.5,248.3,597.5), new cjs.Rectangle(-125,-283.5,248.4,597.5), new cjs.Rectangle(-125,-283.8,249.8,597.8), new cjs.Rectangle(-125,-283.8,249.9,597.9), new cjs.Rectangle(-125,-283.9,249.9,597.9), new cjs.Rectangle(-125,-284.1,251.4,598.2), new cjs.Rectangle(-125.1,-284.1,251.5,598.2), new cjs.Rectangle(-125.4,-284.2,251.9,598.3), new cjs.Rectangle(-125.5,-284.5,253.4,598.6), new cjs.Rectangle(-125.7,-284.5,253.7,598.6), new cjs.Rectangle(-126,-284.6,254,598.6), new cjs.Rectangle(-126.2,-284.6,254.4,598.6), new cjs.Rectangle(-126.3,-284.9,255.9,599), new cjs.Rectangle(-126.6,-285,256.2,599), new cjs.Rectangle(-126.8,-285,256.6,599), new cjs.Rectangle(-126.9,-285.3,258.1,599.3), new cjs.Rectangle(-127.2,-285.3,258.5,599.4), new cjs.Rectangle(-127.5,-285.3,258.8,599.4), new cjs.Rectangle(-127.6,-285.6,260.4,599.7), new cjs.Rectangle(-127.8,-285.7,260.7,599.8), new cjs.Rectangle(-128.1,-285.7,261,599.8), new cjs.Rectangle(-128.2,-286,262.5,600.1), new cjs.Rectangle(-128.4,-286,262.8,600), new cjs.Rectangle(-128.7,-286.1,263.1,600.1), new cjs.Rectangle(-128.9,-286.1,263.5,600.1), new cjs.Rectangle(-129,-286.4,264.9,600.4), new cjs.Rectangle(-129.2,-286.4,265.2,600.5), new cjs.Rectangle(-129.5,-286.4,265.6,600.5), new cjs.Rectangle(-129.6,-286.8,267,600.8), new cjs.Rectangle(-129.8,-286.8,267.5,600.8), new cjs.Rectangle(-130.1,-286.8,267.8,600.9), new cjs.Rectangle(-130.1,-287.1,269.3,601.1), new cjs.Rectangle(-130.4,-287.1,269.6,601.2), new cjs.Rectangle(-130.6,-287.2,269.9,601.2), new cjs.Rectangle(-130.9,-287.4,271.6,601.5), new cjs.Rectangle(-130.6,-287.1,269.9,601.2), new cjs.Rectangle(-130.4,-287.1,269.6,601.1), new cjs.Rectangle(-130.2,-287,269.4,601.1), new cjs.Rectangle(-130.1,-286.7,267.7,600.8), new cjs.Rectangle(-129.9,-286.7,267.6,600.8), new cjs.Rectangle(-129.6,-286.7,267.2,600.7), new cjs.Rectangle(-129.5,-286.4,265.7,600.5), new cjs.Rectangle(-129.3,-286.3,265.3,600.4), new cjs.Rectangle(-129,-286.3,265,600.4), new cjs.Rectangle(-128.9,-286.3,264.9,600.3), new cjs.Rectangle(-128.7,-286,263.2,600.1), new cjs.Rectangle(-128.4,-286,262.9,600), new cjs.Rectangle(-128.3,-286,262.7,600), new cjs.Rectangle(-128.1,-285.7,261,599.7), new cjs.Rectangle(-127.9,-285.6,260.8,599.7), new cjs.Rectangle(-127.8,-285.6,260.6,599.6), new cjs.Rectangle(-127.5,-285.3,258.9,599.3), new cjs.Rectangle(-127.2,-285.2,258.6,599.3), new cjs.Rectangle(-127.2,-285.2,258.5,599.3), new cjs.Rectangle(-127,-285.2,258.1,599.2), new cjs.Rectangle(-126.7,-284.9,256.5,598.9), new cjs.Rectangle(-126.6,-284.9,256.2,598.9), new cjs.Rectangle(-126.3,-284.8,256,598.9), new cjs.Rectangle(-126.1,-284.5,254.2,598.6), new cjs.Rectangle(-126,-284.5,254.2,598.5), new cjs.Rectangle(-125.7,-284.5,253.7,598.5), new cjs.Rectangle(-125.5,-284.2,252.1,598.2), new cjs.Rectangle(-125.4,-284.2,251.9,598.2), new cjs.Rectangle(-125.1,-284.1,251.6,598.1), new cjs.Rectangle(-125,-284.1,251.4,598.2), new cjs.Rectangle(-125,-283.8,250,597.9), new cjs.Rectangle(-125,-283.8,249.9,597.8), new cjs.Rectangle(-125,-283.7,249.8,597.8), rect=new cjs.Rectangle(-125,-283.4,248.3,597.5), rect, new cjs.Rectangle(-125,-283.4,248.2,597.4), new cjs.Rectangle(-125,-283.1,246.8,597.2), new cjs.Rectangle(-125,-283,246.7,597.1), new cjs.Rectangle(-125,-283,246.6,597.1), new cjs.Rectangle(-125,-283.1,246.5,597.1)];


(lib.hero_1_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hair_big1_1_img();
	this.instance.setTransform(-339.5,-356.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.mask1_makeup_2_img();
	this.instance_1.setTransform(-169.5,39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// eyebrows
	this.eyebrows = new lib.mask1_eyebrows_all_mc();
	this.eyebrows.setTransform(20,21);

	this.timeline.addTween(cjs.Tween.get(this.eyebrows).wait(1));

	// shadows
	this.shadows = new lib.mask1_shadow_all_mc();
	this.shadows.setTransform(20,86);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.mask1_lips1_all_mc();
	this.lips.setTransform(19,234.9);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// blush
	this.blush = new lib.mask1_rouge_all_mc();
	this.blush.setTransform(20,165.9);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_2 = new lib.mask1_makeup_1_img();
	this.instance_2.setTransform(-202.5,-228.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// body
	this.instance_3 = new lib.hair_big1_2_img();
	this.instance_3.setTransform(-300.5,-235.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-339.5,-356.5,708,733);
p.frameBounds = [rect];


(lib.hero_1_main_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero1_fringe1_mc();
	this.instance.setTransform(37,-266.1,1,1,0,0,0,-8,-203);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-8.1,regY:-203.1,rotation:-3,x:33.9},39).to({regX:-8,regY:-203,rotation:0,x:37},40).wait(1));

	// animation
	this.instance_1 = new lib.hero1_eyebrows_main_mc();
	this.instance_1.setTransform(5.3,-204.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-3,y:-203.7},39).to({rotation:0,y:-204.7},40).wait(1));

	// animation
	this.instance_2 = new lib.hero1_eyes_mc();
	this.instance_2.setTransform(3.8,-214.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-3,x:3.2,y:-213.4},39).to({rotation:0,x:3.8,y:-214.5},40).wait(1));

	// animation
	this.instance_3 = new lib.hero1_shadow_main_mc();
	this.instance_3.setTransform(5.3,-204.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-3,y:-203.2},39).to({rotation:0,y:-204.2},40).wait(1));

	// animation
	this.instance_4 = new lib.hero1_lips_main_mc();
	this.instance_4.setTransform(5.3,-204.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-3,y:-203.7},39).to({rotation:0,y:-204.7},40).wait(1));

	// animation
	this.instance_5 = new lib.hero1_rouge_all_2_mc();
	this.instance_5.setTransform(5.3,-204.7);

	this.instance_6 = new lib.hero1_rouge_main_mc();
	this.instance_6.setTransform(5.3,-203.7,1,1,-3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true,rotation:-3,y:-203.7},39).to({_off:false,rotation:0,y:-204.7},40).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:false},39).to({_off:true,rotation:0,y:-204.7},40).wait(1));

	// animation
	this.instance_7 = new lib.body2_51_mc();
	this.instance_7.setTransform(21.5,-189.5,1,1,0,0,0,4.5,38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-3},39).to({rotation:0},40).wait(1));

	// animation
	this.instance_8 = new lib.body2_6_img();
	this.instance_8.setTransform(-77,-134);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(80));

	// animation
	this.instance_9 = new lib.hero1_accessory_main_mc();
	this.instance_9.setTransform(-82.5,-128.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:-6.7,x:-84.5,y:-125.1},39).to({rotation:0,x:-82.5,y:-128.1},40).wait(1));

	// animation
	this.instance_10 = new lib.hero1_dress7_img();
	this.instance_10.setTransform(-76,-152.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(80));

	// animation
	this.instance_11 = new lib.hero1_shoes8_img();
	this.instance_11.setTransform(-91,199.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(80));

	// animation
	this.instance_12 = new lib.body2_4_img();
	this.instance_12.setTransform(-77,-175.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(80));

	// animation
	this.instance_13 = new lib.body2_3_mc();
	this.instance_13.setTransform(0,36);
	this.instance_13.alpha = 0.012;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(19).to({_off:false},0).to({alpha:1},15).to({alpha:0.012},15).to({_off:true},1).wait(30));

	// animation
	this.instance_14 = new lib.body2_2_mc();
	this.instance_14.setTransform(0,36);
	this.instance_14.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({alpha:1},19).wait(30).to({alpha:0.012},30).wait(1));

	// animation
	this.instance_15 = new lib.body2_1_img();
	this.instance_15.setTransform(-88,-202.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(80));

	// animation
	this.instance_16 = new lib.hero1_hair1_mc();
	this.instance_16.setTransform(-8.5,-243.5,1,1,0,0,0,-3,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({rotation:-3},39).to({rotation:0},40).wait(1));

	// animation
	this.instance_17 = new lib.shadow_img();
	this.instance_17.setTransform(-125,217);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-283.1,252,597.1);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-125,-283.1,252,597.2), new cjs.Rectangle(-125,-283.4,252,597.5), rect=new cjs.Rectangle(-125,-283.5,252,597.5), rect, new cjs.Rectangle(-125,-283.8,252,597.8), new cjs.Rectangle(-125,-283.8,252,597.9), new cjs.Rectangle(-125,-283.9,252,597.9), rect=new cjs.Rectangle(-125,-284.1,252,598.2), rect, new cjs.Rectangle(-125,-284.2,252,598.3), new cjs.Rectangle(-125,-284.5,252.9,598.6), new cjs.Rectangle(-125,-284.5,253,598.6), new cjs.Rectangle(-125,-284.6,253,598.6), new cjs.Rectangle(-125,-284.6,253.1,598.6), new cjs.Rectangle(-125,-284.9,254.6,599), new cjs.Rectangle(-125,-285,254.6,599), new cjs.Rectangle(-125,-285,254.8,599), new cjs.Rectangle(-125,-285.3,256.2,599.3), rect=new cjs.Rectangle(-125,-285.3,256.3,599.4), rect, new cjs.Rectangle(-125,-285.6,257.8,599.7), new cjs.Rectangle(-125,-285.7,257.8,599.8), new cjs.Rectangle(-125,-285.7,257.9,599.8), new cjs.Rectangle(-125,-286,259.3,600.1), new cjs.Rectangle(-125,-286,259.4,600), new cjs.Rectangle(-125,-286.1,259.4,600.1), new cjs.Rectangle(-125,-286.1,259.5,600.1), new cjs.Rectangle(-125,-286.4,260.9,600.4), new cjs.Rectangle(-125,-286.4,261,600.5), new cjs.Rectangle(-125,-286.4,261.1,600.5), new cjs.Rectangle(-125,-286.8,262.5,600.8), new cjs.Rectangle(-125,-286.8,262.6,600.8), new cjs.Rectangle(-125,-286.8,262.7,600.9), new cjs.Rectangle(-125,-287.1,264.1,601.1), new cjs.Rectangle(-125,-287.1,264.2,601.2), new cjs.Rectangle(-125,-287.2,264.3,601.2), new cjs.Rectangle(-125,-287.4,265.7,601.5), new cjs.Rectangle(-125,-287.1,264.3,601.2), new cjs.Rectangle(-125,-287.1,264.2,601.1), new cjs.Rectangle(-125,-287,264.2,601.1), new cjs.Rectangle(-125,-286.7,262.6,600.8), new cjs.Rectangle(-125,-286.7,262.7,600.8), new cjs.Rectangle(-125,-286.7,262.6,600.7), new cjs.Rectangle(-125,-286.4,261.2,600.5), rect=new cjs.Rectangle(-125,-286.3,261,600.4), rect, new cjs.Rectangle(-125,-286.3,260.9,600.3), new cjs.Rectangle(-125,-286,259.5,600.1), rect=new cjs.Rectangle(-125,-286,259.4,600), rect, new cjs.Rectangle(-125,-285.7,257.9,599.7), new cjs.Rectangle(-125,-285.6,257.9,599.7), new cjs.Rectangle(-125,-285.6,257.8,599.6), new cjs.Rectangle(-125,-285.3,256.4,599.3), rect=new cjs.Rectangle(-125,-285.2,256.3,599.3), rect, new cjs.Rectangle(-125,-285.2,256.1,599.2), new cjs.Rectangle(-125,-284.9,254.8,598.9), new cjs.Rectangle(-125,-284.9,254.6,598.9), new cjs.Rectangle(-125,-284.8,254.7,598.9), new cjs.Rectangle(-125,-284.5,253.1,598.6), new cjs.Rectangle(-125,-284.5,253.1,598.5), new cjs.Rectangle(-125,-284.5,253,598.5), rect=new cjs.Rectangle(-125,-284.2,252,598.2), rect, new cjs.Rectangle(-125,-284.1,252,598.1), new cjs.Rectangle(-125,-284.1,252,598.2), new cjs.Rectangle(-125,-283.8,252,597.9), new cjs.Rectangle(-125,-283.8,252,597.8), new cjs.Rectangle(-125,-283.7,252,597.8), rect=new cjs.Rectangle(-125,-283.4,252,597.5), rect, new cjs.Rectangle(-125,-283.4,252,597.4), new cjs.Rectangle(-125,-283.1,252,597.2), rect=new cjs.Rectangle(-125,-283,252,597.1), rect, new cjs.Rectangle(-125,-283.1,252,597.1)];


(lib.filters_exit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.filters_body_exit_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},19).to({scaleX:1,scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect, new cjs.Rectangle(-44.7,-24.8,89.6,49.8), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.2,-24.6,88.6,49.2), new cjs.Rectangle(-44,-24.4,88.1,49), new cjs.Rectangle(-43.8,-24.3,87.7,48.7), new cjs.Rectangle(-43.5,-24.2,87.2,48.4), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.1,-23.9,86.2,47.9), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-42.6,-23.6,85.3,47.3), new cjs.Rectangle(-42.3,-23.5,84.8,47.1), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-41.9,-23.2,83.9,46.6), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.4,-23,82.9,46.1), new cjs.Rectangle(-41.2,-22.8,82.4,45.8), new cjs.Rectangle(-40.9,-22.7,82,45.6), new cjs.Rectangle(-40.7,-22.6,81.5,45.3), new cjs.Rectangle(-40.5,-22.5,81,45), new cjs.Rectangle(-40.6,-22.5,81.3,45.2), new cjs.Rectangle(-40.7,-22.6,81.6,45.3), new cjs.Rectangle(-40.9,-22.7,81.9,45.5), new cjs.Rectangle(-41,-22.8,82.2,45.7), new cjs.Rectangle(-41.2,-22.9,82.5,45.8), new cjs.Rectangle(-41.3,-22.9,82.8,46), new cjs.Rectangle(-41.5,-23,83.1,46.2), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.8,-23.2,83.7,46.5), new cjs.Rectangle(-41.9,-23.3,84,46.7), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-42.2,-23.4,84.6,47), new cjs.Rectangle(-42.4,-23.5,84.9,47.2), new cjs.Rectangle(-42.5,-23.6,85.2,47.3), new cjs.Rectangle(-42.7,-23.7,85.5,47.5), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-43,-23.9,86.1,47.8), new cjs.Rectangle(-43.1,-23.9,86.4,48), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.4,-24.1,87,48.3), new cjs.Rectangle(-43.6,-24.2,87.3,48.5), new cjs.Rectangle(-43.7,-24.3,87.6,48.7), new cjs.Rectangle(-43.9,-24.4,87.9,48.8), new cjs.Rectangle(-44,-24.4,88.2,49), new cjs.Rectangle(-44.2,-24.5,88.5,49.2), new cjs.Rectangle(-44.3,-24.6,88.8,49.3), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.6,-24.8,89.4,49.7), new cjs.Rectangle(-44.8,-24.9,89.7,49.8), new cjs.Rectangle(-45,-25,90,50)];


(lib.dress_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress9_mc();
	this.instance.setTransform(-1.3,203.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxGZPMAD7grJIOjqgIEYgBIF4JNIFfQOIhHfcg");
	this.shape.setTransform(-24.6,174.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-134.2,-7.7,219.2,407.7);
p.frameBounds = [rect];


(lib.dress_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress8_mc();
	this.instance.setTransform(-2,203.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArujIIgKgVICArpIIbm/IDVAAIGXH3IDqZ1IkcKfg");
	this.shape.setTransform(-4.7,134.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.5,-6.8,205,442.4);
p.frameBounds = [rect];


(lib.dress_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress8_mc();
	this.instance.setTransform(-1.3,203.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArLcdIk/3RICF6QIN7qkIHCAAIJTdsMgEOAhmg");
	this.shape.setTransform(-13.3,194.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116.9,-8.5,207.2,405.2);
p.frameBounds = [rect];


(lib.dress_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress9_mc();
	this.instance.setTransform(-0.5,203.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApFHDIgCtLIGiokIEGAAIHnKiIk0S3g");
	this.shape.setTransform(4.6,85.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-103,-8.5,177,270.1);
p.frameBounds = [rect];


(lib.dress_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress7_mc();
	this.instance.setTransform(-1.3,203.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Aw/bPMAGygrBIJetQII+ACIIxc1IkadOg");
	this.shape.setTransform(-26.7,177.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136.6,-8.4,218.7,398.4);
p.frameBounds = [rect];


(lib.dress_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress7_mc();
	this.instance.setTransform(-1.4,203.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AreOAIFf3YIGwpSIEMgCIGiJkIgEb1g");
	this.shape.setTransform(-18,112.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-124.9,-7,203,283.6);
p.frameBounds = [rect];


(lib.dress_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress6_mc();
	this.instance.setTransform(-1.3,203.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ax0QSMAHtgmMIGaloIF8ACIPmcBIkDRnI7LJbg");
	this.shape.setTransform(4.2,168.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.9,-7.7,233.4,352.7);
p.frameBounds = [rect];


(lib.dress_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress6_mc();
	this.instance.setTransform(-1,203.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnHImIh6uZIGTo3ID6AAIH2KAIkqTVg");
	this.shape.setTransform(6.8,85.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.5,-8,194,287.6);
p.frameBounds = [rect];


(lib.dress_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress5_mc();
	this.instance.setTransform(-1.8,203.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av8T7MAEjgpCINCqQIH2gBIGebpMgD9AjIg");
	this.shape.setTransform(-28.8,194.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130.9,-6.8,204.3,402);
p.frameBounds = [rect];


(lib.dress_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress5_mc();
	this.instance.setTransform(-1,203.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoQVTIlxmwIIQ6WIHdqnIDgABIH2JbIBAe7Il4Eeg");
	this.shape.setTransform(-22.4,136.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112.3,-7.3,179.8,287.1);
p.frameBounds = [rect];


(lib.dress_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress4_mc();
	this.instance.setTransform(-1.3,203.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Au7MGIBc9wIM+rYIHPAAIIObJIiAeUIzuAog");
	this.shape.setTransform(-12.8,176.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108.5,-9,191.4,395);
p.frameBounds = [rect];


(lib.dress_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress4_mc();
	this.instance.setTransform(-1.5,203.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ar3QmMAIzglaIErgCIIsMkIBlZVIonDuInFAGg");
	this.shape.setTransform(2.2,126.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.9,-7.4,154.9,434);
p.frameBounds = [rect];


(lib.dress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress3_mc();
	this.instance.setTransform(-1.8,203.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AroOjIhI0XIMYtaIDgAAIIvNbIA6HjIkiEhICvF7IlsGSIpWAxg");
	this.shape.setTransform(-9.4,113.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.2,-10,163.6,246.3);
p.frameBounds = [rect];


(lib.dress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress3_mc();
	this.instance.setTransform(-1,203.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqSIwIhOwdIG03bIEUgBIItKPIDMesIn1VYg");
	this.shape.setTransform(10.7,192.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63,-6.7,147.5,429.3);
p.frameBounds = [rect];


(lib.dress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress2_mc();
	this.instance.setTransform(-1.3,203.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvxhtIgCp5IH+lsIIZgCIJlJyIFrPvIz5JIg");
	this.shape.setTransform(18.4,103.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.9,-7.7,238.3,396.8);
p.frameBounds = [rect];


(lib.dress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress2_mc();
	this.instance.setTransform(-1,203.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArfKRIEO+dIGAoPIEXAAIITNgIAHcJIpqPOg");
	this.shape.setTransform(-7.7,173.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97,-9,203,433.6);
p.frameBounds = [rect];


(lib.dress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress1_mc();
	this.instance.setTransform(-2.3,203.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ax3aMMADpgrxIOdsHIGAgCIGbJ2IFORCMgBVAglg");
	this.shape.setTransform(-26.4,182.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140.8,-7.5,228.9,425.5);
p.frameBounds = [rect];


(lib.dress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress1_mc();
	this.instance.setTransform(-1.5,203.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnjGxIhkxtIGqmpIElACIHALHIjaYCg");
	this.shape.setTransform(0.6,105.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69,-7.1,129,407.2);
p.frameBounds = [rect];


(lib.current_location_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_current_location_mc();
	this.instance.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.95,scaleY:0.95,rotation:-90},19).to({scaleX:0.9,scaleY:0.9,rotation:-180},20).to({scaleX:0.95,scaleY:0.95,rotation:-270},20).to({scaleX:1,scaleY:1,rotation:-360},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-200,400,400);
p.frameBounds = [rect, new cjs.Rectangle(-214.6,-214.6,429.3,429.3), new cjs.Rectangle(-228.3,-228.3,456.8,456.8), new cjs.Rectangle(-240.4,-240.4,481,481), new cjs.Rectangle(-250.8,-250.9,501.8,501.8), new cjs.Rectangle(-259.5,-259.5,519.1,519.1), new cjs.Rectangle(-266.3,-266.3,532.7,532.7), new cjs.Rectangle(-271.2,-271.2,542.5,542.5), new cjs.Rectangle(-274.3,-274.2,548.6,548.6), new cjs.Rectangle(-275.4,-275.4,550.9,550.9), new cjs.Rectangle(-274.7,-274.7,549.5,549.5), new cjs.Rectangle(-272,-272.1,544.2,544.2), new cjs.Rectangle(-267.6,-267.6,535.3,535.3), new cjs.Rectangle(-261.3,-261.3,522.7,522.7), new cjs.Rectangle(-253.2,-253.3,506.6,506.6), new cjs.Rectangle(-243.5,-243.6,487.1,487.1), new cjs.Rectangle(-232.2,-232.2,464.4,464.4), new cjs.Rectangle(-219.3,-219.3,438.7,438.7), new cjs.Rectangle(-205,-205,410.1,410.1), new cjs.Rectangle(-190,-190,380,380), new cjs.Rectangle(-203.7,-203.7,407.5,407.5), new cjs.Rectangle(-216.1,-216.1,432.3,432.3), new cjs.Rectangle(-226.6,-226.7,453.4,453.4), new cjs.Rectangle(-236.2,-236.3,472.6,472.6), new cjs.Rectangle(-244.9,-245,490,490), new cjs.Rectangle(-251.2,-251.2,502.5,502.5), new cjs.Rectangle(-256.1,-256.2,512.3,512.3), new cjs.Rectangle(-259.2,-259.3,518.6,518.6), new cjs.Rectangle(-261,-261,522.1,522.1), new cjs.Rectangle(-261.6,-261.6,523.2,523.2), new cjs.Rectangle(-259.7,-259.7,519.3,519.3), new cjs.Rectangle(-256.5,-256.5,513,513), new cjs.Rectangle(-252,-252,504,504), new cjs.Rectangle(-245.9,-245.9,491.7,491.7), new cjs.Rectangle(-238.4,-238.4,476.9,476.9), new cjs.Rectangle(-228.7,-228.7,457.5,457.5), new cjs.Rectangle(-218.3,-218.3,436.6,436.6), new cjs.Rectangle(-207,-207,414,414), new cjs.Rectangle(-194.1,-194.1,388.1,388.1), new cjs.Rectangle(-180,-180,360,360), new cjs.Rectangle(-194.1,-194.1,388.1,388.1), new cjs.Rectangle(-207,-207,414,414), new cjs.Rectangle(-218.3,-218.3,436.6,436.6), new cjs.Rectangle(-228.7,-228.7,457.5,457.5), new cjs.Rectangle(-238.4,-238.4,476.9,476.9), new cjs.Rectangle(-245.8,-245.9,491.7,491.7), new cjs.Rectangle(-252,-252,504.1,504.1), new cjs.Rectangle(-256.5,-256.5,513,513), new cjs.Rectangle(-259.7,-259.7,519.3,519.3), new cjs.Rectangle(-261.6,-261.6,523.2,523.2), new cjs.Rectangle(-261,-261,522.1,522.1), new cjs.Rectangle(-259.3,-259.2,518.6,518.6), new cjs.Rectangle(-256.2,-256.1,512.3,512.3), new cjs.Rectangle(-251.2,-251.2,502.5,502.5), new cjs.Rectangle(-245,-244.9,490,490), new cjs.Rectangle(-236.3,-236.2,472.6,472.6), new cjs.Rectangle(-226.7,-226.6,453.4,453.4), new cjs.Rectangle(-216.1,-216.1,432.3,432.3), new cjs.Rectangle(-203.7,-203.7,407.5,407.5), new cjs.Rectangle(-190,-190,380,380), new cjs.Rectangle(-204.8,-204.8,409.6,409.6), new cjs.Rectangle(-218.4,-218.4,436.9,436.9), new cjs.Rectangle(-230.3,-230.2,460.6,460.6), new cjs.Rectangle(-241.3,-241.3,482.7,482.7), new cjs.Rectangle(-251.5,-251.5,503.1,503.1), new cjs.Rectangle(-259.3,-259.2,518.6,518.6), new cjs.Rectangle(-265.8,-265.7,531.5,531.5), new cjs.Rectangle(-270.5,-270.4,540.9,540.9), new cjs.Rectangle(-273.7,-273.7,547.5,547.5), new cjs.Rectangle(-275.7,-275.7,551.5,551.5), new cjs.Rectangle(-275.1,-275.1,550.3,550.3), new cjs.Rectangle(-273.2,-273.2,546.5,546.5), new cjs.Rectangle(-269.8,-269.8,539.8,539.8), new cjs.Rectangle(-264.6,-264.6,529.3,529.3), new cjs.Rectangle(-258,-258,516.1,516.1), new cjs.Rectangle(-248.8,-248.8,497.8,497.8), new cjs.Rectangle(-238.7,-238.7,477.4,477.4), new cjs.Rectangle(-227.5,-227.5,455.2,455.2), new cjs.Rectangle(-214.4,-214.4,429,429), new cjs.Rectangle(-200,-200,400,400)];


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


(lib.circle_arrow_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.circle_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,220,200);
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
p.nominalBounds = rect = new cjs.Rectangle(-450,-450,560,900);
p.frameBounds = [rect];


(lib.check_makeup_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.check_makeup_2_mc();
	this.instance.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},19).to({alpha:0.398},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-90,210,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.check_makeup_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.check_makeup_2_mc();
	this.instance.alpha = 0.398;

	this.instance_1 = new lib.check_makeup_3_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105,-90,210,180);
p.frameBounds = [rect, rect];


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


(lib.blush_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge10_img();
	this.instance.setTransform(-56,-70,0.933,0.933);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.blush_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.rouge3_img();
	this.instance.setTransform(-56,-70,0.933,0.933);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.blush_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge7_img();
	this.instance.setTransform(-56,-70,0.933,0.933);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.blush_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.rouge7_img();
	this.instance.setTransform(-56,-70,0.933,0.933);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.blush_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge6_img();
	this.instance.setTransform(-56,-70,0.933,0.933);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.blush_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.rouge6_img();
	this.instance.setTransform(-56,-70,0.933,0.933);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.blush_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge4_img();
	this.instance.setTransform(-56,-70,0.933,0.933);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.blush_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.rouge4_img();
	this.instance.setTransform(-56,-70,0.933,0.933);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.blush_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge3_img();
	this.instance.setTransform(-56,-70,0.933,0.933);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.blush_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.rouge1_img();
	this.instance.setTransform(-56,-70,0.933,0.933);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.blush_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge2_img();
	this.instance.setTransform(-56,-70,0.933,0.933);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.blush_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.rouge2_img();
	this.instance.setTransform(-56,-70,0.933,0.933);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.blush_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect];


(lib.arrow_checks_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_3 = new lib.checkpoint_mc();
	this.checkpoint_3.setTransform(120,0);
	this.checkpoint_3.alpha = 0.012;

	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(-120,0);
	this.checkpoint_1.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_2},{t:this.checkpoint_1},{t:this.checkpoint_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-250,340,500);
p.frameBounds = [rect];


(lib.arrow_27_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.circle_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-450,560,900);
p.frameBounds = [rect];


(lib.arrow_26_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.circle_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-450,560,900);
p.frameBounds = [rect];


(lib.arrow_21_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.circle_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-450,560,900);
p.frameBounds = [rect];


(lib.arrow_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.circle_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-450,560,900);
p.frameBounds = [rect];


(lib.arrow_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.circle_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-450,560,900);
p.frameBounds = [rect];


(lib.arrow_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.circle_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-450,560,900);
p.frameBounds = [rect];


(lib.arrow_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.circle_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-450,560,900);
p.frameBounds = [rect];


(lib.arrow_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.circle_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-450,560,900);
p.frameBounds = [rect];


(lib.arrow_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.circle_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-450,560,900);
p.frameBounds = [rect];


(lib.arrow_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.circle_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-450,560,900);
p.frameBounds = [rect];


(lib.arrow_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.circle_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-450,560,900);
p.frameBounds = [rect];


(lib.arrow_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.circle_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-450,560,900);
p.frameBounds = [rect];


(lib.arc_arrow_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.arc_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-80,220,160);
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


(lib.animation_pointing_finger_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pointing_finger_mc();
	this.instance.setTransform(-220,600,1,1,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({y:180},15).to({rotation:30,x:230,y:200},30).to({x:100,y:600},15).wait(1));

	// animation
	this.instance_1 = new lib.pointing_finger_2_mc();
	this.instance_1.setTransform(0,-100);
	this.instance_1.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.801},19).wait(45).to({alpha:0.398},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-415.4,-170,660.5,1064.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-414.5,-170,659.6,1036.1), new cjs.Rectangle(-414.5,-170,659.6,1008.1), new cjs.Rectangle(-414.5,-170,659.6,980.1), new cjs.Rectangle(-414.5,-170,659.6,952.1), new cjs.Rectangle(-414.5,-170,659.6,924.1), new cjs.Rectangle(-414.5,-170,659.6,896.1), new cjs.Rectangle(-414.5,-170,659.6,868.1), new cjs.Rectangle(-414.5,-170,659.6,840.1), new cjs.Rectangle(-414.5,-170,659.6,812.1), new cjs.Rectangle(-414.5,-170,659.6,784.1), new cjs.Rectangle(-414.5,-170,659.6,756.1), new cjs.Rectangle(-414.5,-170,659.6,728.1), new cjs.Rectangle(-414.5,-170,659.6,700.1), new cjs.Rectangle(-414.5,-170,659.6,672.1), new cjs.Rectangle(-415.4,-170,660.5,644.5), new cjs.Rectangle(-393.5,-170,638.6,643.3), new cjs.Rectangle(-372.4,-170,617.4,642.2), new cjs.Rectangle(-351.2,-170,596.2,640.9), new cjs.Rectangle(-329.7,-170,574.8,639.4), new cjs.Rectangle(-308.2,-170,553.2,637.7), new cjs.Rectangle(-286.6,-170,531.7,635.8), new cjs.Rectangle(-264.9,-170,509.9,633.7), new cjs.Rectangle(-245,-170,490,631.9), new cjs.Rectangle(-245,-170,490,629), new cjs.Rectangle(-245,-170,490,626.8), new cjs.Rectangle(-245,-170,490,630.7), new cjs.Rectangle(-245,-170,490,634.2), new cjs.Rectangle(-245,-170,490,638.1), new cjs.Rectangle(-245,-170,490,641.1), new cjs.Rectangle(-245,-170,490,644.6), new cjs.Rectangle(-245,-170,490,647.7), new cjs.Rectangle(-245,-170,490,650.7), new cjs.Rectangle(-245,-170,490,653.1), new cjs.Rectangle(-245,-170,498.5,655.2), new cjs.Rectangle(-245,-170,520.2,657.7), new cjs.Rectangle(-245,-170,540.3,659.5), new cjs.Rectangle(-245,-170,561.8,661.5), new cjs.Rectangle(-245,-170,581.7,663), new cjs.Rectangle(-245,-170,602.8,664.4), new cjs.Rectangle(-245,-170,622.5,665.6), new cjs.Rectangle(-245,-170,643.3,666.6), new cjs.Rectangle(-245,-170,662.6,667.3), new cjs.Rectangle(-245,-170,682.5,667.9), new cjs.Rectangle(-245,-170,702.2,668.3), new cjs.Rectangle(-245,-170,722.6,668.8), new cjs.Rectangle(-245,-170,713.1,695.2), new cjs.Rectangle(-245,-170,704.4,721.9), new cjs.Rectangle(-245,-170,695.8,748.5), new cjs.Rectangle(-245,-170,687.1,775.1), new cjs.Rectangle(-245,-170,678.4,801.8), new cjs.Rectangle(-245,-170,669.8,828.5), new cjs.Rectangle(-245,-170,661.1,855.1), new cjs.Rectangle(-245,-170,652.4,881.8), new cjs.Rectangle(-245,-170,643.8,908.5), new cjs.Rectangle(-245,-170,635.1,935.1), new cjs.Rectangle(-245,-170,626.4,961.8), new cjs.Rectangle(-245,-170,617.8,988.5), new cjs.Rectangle(-245,-170,609.1,1015.1), new cjs.Rectangle(-245,-170,600.4,1041.8), new cjs.Rectangle(-245,-170,592.6,1068.8)];


(lib.animation_mask2_38_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mask_1_18_mc();
	this.instance.setTransform(-105,47,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// animation
	this.instance_1 = new lib.mask_1_18_mc();
	this.instance_1.setTransform(99.4,47.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// animation
	this.instance_2 = new lib.mask_2_1_mc();
	this.instance_2.setTransform(-242.6,192.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:2.4},14).wait(1));

	// animation
	this.instance_3 = new lib.mask_2_16_mc();
	this.instance_3.setTransform(-0.6,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-288.6,-274.6,510.5,550);
p.frameBounds = [rect, new cjs.Rectangle(-271.1,-274.6,493,550), new cjs.Rectangle(-253.6,-274.6,475.5,550), new cjs.Rectangle(-236.1,-274.6,458,550), rect=new cjs.Rectangle(-223.1,-274.6,445,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_mask2_36_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mask_1_18_mc();
	this.instance.setTransform(-105,47,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// animation
	this.instance_1 = new lib.mask_1_18_mc();
	this.instance_1.setTransform(286.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:99.4,y:47.4},14).wait(1));

	// animation
	this.instance_2 = new lib.mask_2_1_mc();
	this.instance_2.setTransform(-242.6,192.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// animation
	this.instance_3 = new lib.mask_2_16_mc();
	this.instance_3.setTransform(-0.6,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-288.6,-274.6,646,550);
p.frameBounds = [rect, new cjs.Rectangle(-288.6,-274.6,632.7,550), new cjs.Rectangle(-288.6,-274.6,619.3,550), new cjs.Rectangle(-288.6,-274.6,606,550), new cjs.Rectangle(-288.6,-274.6,592.6,550), new cjs.Rectangle(-288.6,-274.6,579.2,550), new cjs.Rectangle(-288.6,-274.6,565.8,550), new cjs.Rectangle(-288.6,-274.6,552.5,550), new cjs.Rectangle(-288.6,-274.6,539.2,550), new cjs.Rectangle(-288.6,-274.6,525.8,550), new cjs.Rectangle(-288.6,-274.6,512.5,550), rect=new cjs.Rectangle(-288.6,-274.6,510.5,550), rect, rect, rect];


(lib.animation_mask2_34_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mask_1_18_mc();
	this.instance.setTransform(-302,12,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-105,y:47},14).wait(1));

	// animation
	this.instance_1 = new lib.mask_1_18_mc();
	this.instance_1.setTransform(286.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// animation
	this.instance_2 = new lib.mask_2_1_mc();
	this.instance_2.setTransform(-242.6,192.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// animation
	this.instance_3 = new lib.mask_2_16_mc();
	this.instance_3.setTransform(-0.6,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-373,-274.6,730.4,550);
p.frameBounds = [rect, new cjs.Rectangle(-358.9,-274.6,716.3,550), new cjs.Rectangle(-344.8,-274.6,702.2,550), new cjs.Rectangle(-330.8,-274.6,688.2,550), new cjs.Rectangle(-316.7,-274.6,674.1,550), new cjs.Rectangle(-302.6,-274.6,660,550), rect=new cjs.Rectangle(-288.6,-274.6,646,550), rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_mask2_32_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.glue_mc();
	this.instance.setTransform(213.4,179.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-119.3,x:-34.6,y:-83.6},11).wait(8).to({x:-22.6,y:33.4},7).wait(10).to({x:186.4,y:-105.6},12).wait(10).to({x:185.4,y:26.4},7).wait(10).to({x:84.4,y:95.3},7).wait(10).to({x:80.4,y:143.3},7).wait(11).to({rotation:-31.6,x:478.4,y:98.3,alpha:0.012},8).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.kaplya1_mc();
	this.instance_1.setTransform(-120.6,-31.6,0.081,0.081);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({scaleX:0.48,scaleY:0.48,x:-121.6,y:-15.6,alpha:0.012},8).to({_off:true},1).wait(6).to({_off:false,scaleX:0.08,scaleY:0.08,x:-108.6,y:83.3,alpha:1},0).to({scaleX:0.48,scaleY:0.48,y:101.4,alpha:0.012},10).to({_off:true},1).wait(11).to({_off:false,scaleX:0.08,scaleY:0.08,x:100.4,y:-56.6,alpha:1},0).to({scaleX:0.48,scaleY:0.48,x:102.4,y:-23.6,alpha:0.012},10).to({_off:true},1).wait(6).to({_off:false,scaleX:0.08,scaleY:0.08,x:98.4,y:78.3,alpha:1},0).to({scaleX:0.48,scaleY:0.48,x:102.4,y:103.4,alpha:0.012},10).to({_off:true},1).wait(6).to({_off:false,scaleX:0.08,scaleY:0.08,x:-2.6,y:146.3,alpha:1},0).to({scaleX:0.48,scaleY:0.48,y:163.4,alpha:0.012},10).to({_off:true},1).wait(6).to({_off:false,scaleX:0.08,scaleY:0.08,x:-5.6,y:193.3,alpha:1},0).to({scaleX:0.48,scaleY:0.48,x:-3.6,y:210.4,alpha:0.012},11).to({_off:true},1).wait(9));

	// animation
	this.instance_2 = new lib.mask_1_18_mc();
	this.instance_2.setTransform(-302,12,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120));

	// animation
	this.instance_3 = new lib.mask_1_18_mc();
	this.instance_3.setTransform(286.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120));

	// animation
	this.instance_4 = new lib.mask_2_1_mc();
	this.instance_4.setTransform(-242.6,192.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

	// animation
	this.instance_5 = new lib.mask_2_16_mc();
	this.instance_5.setTransform(-0.6,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-373,-274.6,730.4,554);
p.frameBounds = [rect, rect=new cjs.Rectangle(-373,-274.6,730.4,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-373,-274.6,757.2,550), new cjs.Rectangle(-373,-274.6,806.1,550), new cjs.Rectangle(-373,-274.6,851.3,550), new cjs.Rectangle(-373,-274.6,893,550), new cjs.Rectangle(-373,-274.6,931.4,550), new cjs.Rectangle(-373,-274.6,730.4,550)];


(lib.animation_mask2_30_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mask_1_18_mc();
	this.instance.setTransform(-585,12,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({x:-302},10).wait(1));

	// animation
	this.instance_1 = new lib.mask_1_18_mc();
	this.instance_1.setTransform(587.3,1.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).to({x:286.4},10).wait(5));

	// animation
	this.instance_2 = new lib.mask_2_1_mc();
	this.instance_2.setTransform(-605.6,192.3);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).to({x:-242.6,alpha:1},10).wait(10));

	// animation
	this.instance_3 = new lib.glue_mc();
	this.instance_3.setTransform(476.4,179.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).to({x:213.4},8).wait(7));

	// animation
	this.instance_4 = new lib.mask_2_16_mc();
	this.instance_4.setTransform(7,0,0.2,1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({_off:false},0).to({scaleX:1,x:-0.6,y:0.4},7).wait(26));

	// animation
	this.instance_5 = new lib.mask_2_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.21,x:6},6).to({_off:true},1).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.5,-275,445,550);
p.frameBounds = [rect, new cjs.Rectangle(-192.2,-275,386.4,550), new cjs.Rectangle(-161.9,-275,327.7,550), new cjs.Rectangle(-131.5,-275,269,550), new cjs.Rectangle(-101.2,-275,210.4,550), new cjs.Rectangle(-70.8,-275,151.7,550), new cjs.Rectangle(-40.5,-275,93,550), new cjs.Rectangle(-37.5,-275,89,550), new cjs.Rectangle(-63.9,-275,139.9,550), new cjs.Rectangle(-90.5,-274.9,190.7,550), new cjs.Rectangle(-117,-274.9,241.6,550), new cjs.Rectangle(-143.5,-274.8,292.4,550), new cjs.Rectangle(-170,-274.7,343.3,550), new cjs.Rectangle(-196.5,-274.7,394.2,550), rect=new cjs.Rectangle(-223.1,-274.6,445,550), rect, rect, rect, rect, rect, new cjs.Rectangle(-651.6,-274.6,873.5,550), new cjs.Rectangle(-615.3,-274.6,837.2,550), new cjs.Rectangle(-579,-274.6,800.9,550), new cjs.Rectangle(-542.7,-274.6,764.6,550), new cjs.Rectangle(-506.4,-274.6,728.3,550), new cjs.Rectangle(-470.1,-274.6,1128.4,554), new cjs.Rectangle(-433.8,-274.6,1062.1,554), new cjs.Rectangle(-397.5,-274.6,995.7,554), new cjs.Rectangle(-361.2,-274.6,929.3,554), new cjs.Rectangle(-656,-274.6,1193.9,554), new cjs.Rectangle(-627.7,-274.6,1135.6,554), new cjs.Rectangle(-599.4,-274.6,1077.2,554), new cjs.Rectangle(-571.1,-274.6,1018.8,554), new cjs.Rectangle(-542.8,-274.6,960.4,554), new cjs.Rectangle(-514.5,-274.6,902,554), new cjs.Rectangle(-486.2,-274.6,843.6,554), new cjs.Rectangle(-457.9,-274.6,815.3,554), new cjs.Rectangle(-429.6,-274.6,787,554), new cjs.Rectangle(-401.3,-274.6,758.7,554), new cjs.Rectangle(-373,-274.6,730.4,554)];


(lib.animation_mask2_28_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mask_2_8_mc();
	this.instance.setTransform(-855,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0},19).wait(1));

	// animation
	this.instance_1 = new lib.mask_2_14_mc();
	this.instance_1.setTransform(32.4,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:607.5},18).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1077.5,-275,1185.4,550);
p.frameBounds = [rect, new cjs.Rectangle(-1032.5,-275,1172.3,550), new cjs.Rectangle(-987.5,-275,1159.3,550), new cjs.Rectangle(-942.5,-275,1146.2,550), new cjs.Rectangle(-897.5,-275,1133.2,550), new cjs.Rectangle(-852.5,-275,1120.1,550), new cjs.Rectangle(-807.5,-275,1107.1,550), new cjs.Rectangle(-762.5,-275,1094,550), new cjs.Rectangle(-717.5,-275,1081,550), new cjs.Rectangle(-672.5,-275,1067.9,550), new cjs.Rectangle(-627.5,-275,1054.9,550), new cjs.Rectangle(-582.5,-275,1041.9,550), new cjs.Rectangle(-537.5,-275,1028.8,550), new cjs.Rectangle(-492.5,-275,1015.8,550), new cjs.Rectangle(-447.5,-275,1002.7,550), new cjs.Rectangle(-402.5,-275,989.7,550), new cjs.Rectangle(-357.5,-275,976.6,550), new cjs.Rectangle(-312.5,-275,963.6,550), new cjs.Rectangle(-267.5,-275,950.5,550), new cjs.Rectangle(-222.5,-275,445,550)];


(lib.animation_mask2_27_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mask_2_14_mc();
	this.instance.setTransform(32.4,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.1,-25.1,151,85);
p.frameBounds = [rect];


(lib.animation_mask2_26_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mask_2_14_mc();
	this.instance.setTransform(32.4,17.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).wait(86));

	// animation
	this.instance_1 = new lib.skalpel_mc();
	this.instance_1.setTransform(-259.6,19.1,1,1,0,35,-145,14.5,156.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:14.6,skewX:119.9,skewY:-60.1,x:-287.6,y:-149},6).to({skewX:137.7,skewY:-42.3,x:-2.6,y:-112.1},10).to({x:-79.6,y:-120.1},12).to({regX:14.5,skewX:129.4,skewY:-50.6,x:-159.7,y:-68},12).to({skewX:31.9,skewY:-148.1,x:-117.7,y:158.1},6).to({skewX:8.4,skewY:-171.6,x:-4.7,y:145.1},9).to({regX:14.6,regY:156,skewX:34.3,skewY:-145.7,y:130.1},10).to({skewX:51,skewY:-129,x:-34.8,y:105.1},3).to({x:-36.8,y:131.1},8).to({regY:156.1,skewX:-45.7,skewY:-225.7,x:188.3,y:140.3},4).to({skewX:-91,skewY:-271,x:245.3,y:-0.7},10).to({x:503.3,y:-5.7,alpha:0.012},10).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.mask_2_15_mc();
	this.instance_2.setTransform(31,14);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({_off:false},0).wait(74).to({y:419.9,alpha:0.012},10).to({_off:true},1).wait(1));

	// animation
	this.instance_3 = new lib.mask_1_19_mc();
	this.instance_3.setTransform(31,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(16).to({alpha:0.012},74).to({_off:true},1).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360.9,-117.1,550.4,272.3);
p.frameBounds = [rect, new cjs.Rectangle(-391.5,-121.9,581,240.9), new cjs.Rectangle(-414.7,-119.7,604.2,238.7), new cjs.Rectangle(-428.8,-112.9,618.4,231.9), new cjs.Rectangle(-434.5,-111.7,624.1,230.7), new cjs.Rectangle(-436.8,-177.3,626.4,296.3), new cjs.Rectangle(-430,-239.4,619.6,358.4), new cjs.Rectangle(-399.5,-239.1,589,358.1), new cjs.Rectangle(-368.7,-239.2,558.3,358.2), new cjs.Rectangle(-337.6,-239.6,527.2,358.6), new cjs.Rectangle(-306.7,-239.5,496.3,358.5), new cjs.Rectangle(-275.6,-239.3,465.1,358.3), new cjs.Rectangle(-244.4,-239,433.9,358), new cjs.Rectangle(-213,-238.6,402.6,357.6), new cjs.Rectangle(-181.6,-238.1,371.2,357.1), new cjs.Rectangle(-150.1,-237.5,339.6,356.5), new cjs.Rectangle(-127.5,-237,317,356), new cjs.Rectangle(-127.5,-237.5,317,356.5), new cjs.Rectangle(-131.1,-238.2,320.6,357.2), new cjs.Rectangle(-137.5,-238.8,327,357.8), new cjs.Rectangle(-143.9,-239.5,333.4,358.5), new cjs.Rectangle(-150.3,-240.2,339.9,359.2), new cjs.Rectangle(-156.7,-240.8,346.3,359.8), new cjs.Rectangle(-163.1,-241.5,352.7,360.5), new cjs.Rectangle(-169.6,-242.2,359.1,361.2), new cjs.Rectangle(-176,-242.8,365.5,361.8), new cjs.Rectangle(-182.4,-243.5,371.9,362.5), new cjs.Rectangle(-188.8,-244.2,378.4,363.2), new cjs.Rectangle(-195.4,-245,384.9,364), new cjs.Rectangle(-203.2,-239.3,392.8,358.3), new cjs.Rectangle(-210.9,-234,400.5,353), new cjs.Rectangle(-218.8,-228.4,408.4,347.4), new cjs.Rectangle(-226.8,-222.8,416.3,341.8), new cjs.Rectangle(-234.7,-217.2,424.3,336.2), new cjs.Rectangle(-242.3,-211.9,431.9,330.9), new cjs.Rectangle(-250.3,-206.3,439.8,325.3), new cjs.Rectangle(-258.1,-200.6,447.6,319.6), new cjs.Rectangle(-266,-194.8,455.6,313.8), new cjs.Rectangle(-273.5,-189.5,463.1,308.5), new cjs.Rectangle(-281.4,-183.8,470.9,302.8), new cjs.Rectangle(-289.3,-178.2,478.8,297.2), new cjs.Rectangle(-301.6,-104.7,491.2,223.7), new cjs.Rectangle(-302.2,-91,491.8,210), new cjs.Rectangle(-294.8,-91,484.4,210), new cjs.Rectangle(-278.5,-91,468,254), new cjs.Rectangle(-250.3,-91,439.9,326.1), new cjs.Rectangle(-212.4,-91,401.9,389.2), new cjs.Rectangle(-194.1,-91,383.6,390.5), new cjs.Rectangle(-175.3,-91,364.8,391.9), new cjs.Rectangle(-156.8,-91,346.3,393), new cjs.Rectangle(-137.8,-91,327.3,393.8), new cjs.Rectangle(-127.5,-91,317,394.1), new cjs.Rectangle(-127.5,-91,317,394.2), new cjs.Rectangle(-127.5,-91,317,394), new cjs.Rectangle(-127.5,-91,317,393.4), new cjs.Rectangle(-127.5,-91,317,392.5), new cjs.Rectangle(-127.5,-91,317,390.5), new cjs.Rectangle(-127.5,-91,317,388.1), new cjs.Rectangle(-127.5,-91,317,385.4), new cjs.Rectangle(-127.5,-91,317,382.4), new cjs.Rectangle(-127.5,-91,317,379.1), new cjs.Rectangle(-127.5,-91,317,375.5), new cjs.Rectangle(-127.5,-91,317,371.5), new cjs.Rectangle(-127.5,-91,317,367.3), new cjs.Rectangle(-127.5,-91,317,362.9), new cjs.Rectangle(-127.5,-91,317,358.2), new cjs.Rectangle(-127.5,-91,317,341.8), new cjs.Rectangle(-145.8,-91,335.3,324.3), new cjs.Rectangle(-165.1,-91,354.7,305.6), new cjs.Rectangle(-165.3,-91,354.9,308.6), new cjs.Rectangle(-165.6,-91,355.1,311.9), new cjs.Rectangle(-165.8,-91,355.4,315.1), new cjs.Rectangle(-166.1,-91,355.6,318.4), new cjs.Rectangle(-166.3,-91,355.9,321.6), new cjs.Rectangle(-166.6,-91,356.1,324.9), new cjs.Rectangle(-166.8,-91,356.4,328.1), new cjs.Rectangle(-167.1,-91,356.7,331.6), new cjs.Rectangle(-127.5,-91,317,370.1), new cjs.Rectangle(-127.5,-91,317,383.3), new cjs.Rectangle(-127.5,-91,330.2,379.3), new cjs.Rectangle(-127.5,-91,437.6,350.5), new cjs.Rectangle(-127.5,-91,450.7,327.6), new cjs.Rectangle(-127.5,-91,462.9,304.4), new cjs.Rectangle(-127.5,-91,474.4,280.6), new cjs.Rectangle(-127.5,-91,484.9,256.3), new cjs.Rectangle(-127.5,-91,494.5,231.5), new cjs.Rectangle(-127.5,-91,503.2,210), new cjs.Rectangle(-127.5,-91,511,210), new cjs.Rectangle(-127.5,-91,517.8,210), new cjs.Rectangle(-127.5,-91,523.6,210), new cjs.Rectangle(-127.5,-91,528.9,210), new cjs.Rectangle(-127.5,-50.4,554.7,210), new cjs.Rectangle(-127.5,-25.1,580.5,225.3), new cjs.Rectangle(-127.5,-25.1,606.3,265.9), new cjs.Rectangle(-127.5,-25.1,632.1,306.5), new cjs.Rectangle(-127.5,-25.1,657.9,347), new cjs.Rectangle(-127.5,-25.1,683.7,387.7), new cjs.Rectangle(-127.5,-25.1,709.5,428.3), new cjs.Rectangle(-127.5,-25.1,735.3,468.9), new cjs.Rectangle(-127.5,-25.1,761.1,509.5), new cjs.Rectangle(-127.5,-25.1,786.9,550.1), new cjs.Rectangle(-43.1,-25.1,151,85)];


(lib.animation_mask2_24_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.skalpel_mc();
	this.instance.setTransform(-1079.6,19.1,1,1,0,35,-145,14.5,156.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-259.6},24).wait(1));

	// animation
	this.instance_1 = new lib.mask_1_19_mc();
	this.instance_1.setTransform(-788.9,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:31},24).wait(1));

	// animation
	this.instance_2 = new lib.mask_1eye5_mc();
	this.instance_2.setTransform(44,-24.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:588},23).to({_off:true},1).wait(1));

	// animation
	this.instance_3 = new lib.mask_2_eye3_mc();
	this.instance_3.setTransform(44.4,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:588.4},23).to({_off:true},1).wait(1));

	// animation
	this.instance_4 = new lib.mask_1eye7_mc();
	this.instance_4.setTransform(42,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:586},23).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1180.8,-117.1,1313.4,272.3);
p.frameBounds = [rect, new cjs.Rectangle(-1146.3,-117,1302.5,272.2), new cjs.Rectangle(-1112.1,-117,1291.9,272.2), new cjs.Rectangle(-1077.9,-117,1281.4,272.2), new cjs.Rectangle(-1043.8,-117,1270.9,272.2), new cjs.Rectangle(-1009.6,-117,1260.4,272.2), new cjs.Rectangle(-975.4,-117,1249.9,272.2), new cjs.Rectangle(-941.3,-117,1239.4,272.2), new cjs.Rectangle(-907.1,-117,1228.9,272.2), new cjs.Rectangle(-872.9,-117,1218.3,272.2), new cjs.Rectangle(-838.8,-117,1207.8,272.2), new cjs.Rectangle(-804.6,-117,1197.3,272.2), new cjs.Rectangle(-770.5,-117,1186.9,272.2), new cjs.Rectangle(-736.3,-117,1176.3,272.2), new cjs.Rectangle(-702.1,-117,1165.8,272.2), new cjs.Rectangle(-668,-117,1155.3,272.2), new cjs.Rectangle(-633.8,-117,1144.8,272.2), new cjs.Rectangle(-599.6,-117,1134.3,272.2), new cjs.Rectangle(-565.5,-117,1123.8,272.2), new cjs.Rectangle(-531.3,-117,1113.2,272.2), new cjs.Rectangle(-497.1,-117,1102.7,272.2), new cjs.Rectangle(-463,-117,1092.2,272.2), new cjs.Rectangle(-428.8,-117,1081.7,272.2), new cjs.Rectangle(-394.6,-117,1071.2,272.2), new cjs.Rectangle(-360.9,-117.1,550.4,272.3)];


(lib.animation_mask2_22_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.marker1_2_mc();
	this.instance.setTransform(-49,-143);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-174},4).wait(67).to({x:-49},4).to({y:-313},3).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.marker1_1_mc();
	this.instance_1.setTransform(33,-143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({rotation:-49,x:85.2,y:-133.5},10).to({x:95.2,y:-106.5},7).to({x:107.2,y:-117.5},7).to({x:134.2,y:-107.5},4).to({x:88.2,y:-99.5},8).to({x:135.2,y:-96.5},9).to({x:107.2,y:-88.5},6).to({x:88.2,y:-97.5},8).to({rotation:0,x:33,y:-143.5},8).wait(4).to({y:-313.5},3).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.mask_1eye5_mc();
	this.instance_2.setTransform(44,-24.6);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({alpha:1},59).wait(17));

	// animation
	this.instance_3 = new lib.mask_1eye4_mc();
	this.instance_3.setTransform(44,-24.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({alpha:0.012},59).to({_off:true},1).wait(16));

	// animation
	this.instance_4 = new lib.mask_2_eye3_mc();
	this.instance_4.setTransform(44.4,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(80));

	// animation
	this.instance_5 = new lib.mask_1eye7_mc();
	this.instance_5.setTransform(42,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-158,226,229.5);
p.frameBounds = [rect, new cjs.Rectangle(-111.2,-158,257.3,229.5), new cjs.Rectangle(-142.5,-158,288.5,229.5), new cjs.Rectangle(-173.7,-158,319.8,229.5), new cjs.Rectangle(-205,-158,351,229.5), new cjs.Rectangle(-205,-166.3,357,237.8), new cjs.Rectangle(-205,-174.9,362.2,246.4), new cjs.Rectangle(-205,-182.8,366.6,254.3), new cjs.Rectangle(-205,-190.8,370.1,262.3), new cjs.Rectangle(-205,-198.2,372.9,269.7), new cjs.Rectangle(-205,-205.4,374.8,276.9), new cjs.Rectangle(-205,-212,375.8,283.5), new cjs.Rectangle(-205,-217.9,376.3,289.4), new cjs.Rectangle(-205,-223.4,376,294.9), new cjs.Rectangle(-205,-228.2,375.3,299.7), new cjs.Rectangle(-205,-224.2,376.6,295.7), new cjs.Rectangle(-205,-220.3,378,291.8), new cjs.Rectangle(-205,-216.5,379.4,288), new cjs.Rectangle(-205,-212.6,380.8,284.1), new cjs.Rectangle(-205,-208.7,382.3,280.2), new cjs.Rectangle(-205,-204.9,383.7,276.4), new cjs.Rectangle(-205,-201.2,385.3,272.7), new cjs.Rectangle(-205,-202.5,386.9,274), new cjs.Rectangle(-205,-204.1,388.6,275.6), new cjs.Rectangle(-205,-205.7,390.3,277.2), new cjs.Rectangle(-205,-207.3,392,278.8), new cjs.Rectangle(-205,-208.8,393.7,280.3), new cjs.Rectangle(-205,-210.4,395.5,281.9), new cjs.Rectangle(-205,-212.2,397.3,283.7), new cjs.Rectangle(-205,-209.5,403.9,281), new cjs.Rectangle(-205,-207,410.7,278.5), new cjs.Rectangle(-205,-204.5,417.4,276), new cjs.Rectangle(-205,-202.2,424.3,273.7), new cjs.Rectangle(-205,-201,418.4,272.5), new cjs.Rectangle(-205,-200,412.6,271.5), new cjs.Rectangle(-205,-199,406.9,270.5), new cjs.Rectangle(-205,-198,401.1,269.5), new cjs.Rectangle(-205,-197,395.4,268.5), new cjs.Rectangle(-205,-196,389.6,267.5), new cjs.Rectangle(-205,-195,383.9,266.5), new cjs.Rectangle(-205,-194.2,378.3,265.7), new cjs.Rectangle(-205,-193.6,383.3,265.1), new cjs.Rectangle(-205,-193.3,388.6,264.8), new cjs.Rectangle(-205,-193,393.8,264.5), new cjs.Rectangle(-205,-192.6,399,264.1), new cjs.Rectangle(-205,-192.3,404.2,263.8), new cjs.Rectangle(-205,-192,409.5,263.5), new cjs.Rectangle(-205,-191.6,414.7,263.1), new cjs.Rectangle(-205,-191.3,419.9,262.8), new cjs.Rectangle(-205,-191.2,425.3,262.7), new cjs.Rectangle(-205,-189.6,420.5,261.1), new cjs.Rectangle(-205,-188.3,415.8,259.8), new cjs.Rectangle(-205,-187,411.1,258.5), new cjs.Rectangle(-205,-185.6,406.5,257.1), new cjs.Rectangle(-205,-184.3,401.8,255.8), new cjs.Rectangle(-205,-183.2,397.3,254.7), new cjs.Rectangle(-205,-184.1,394.9,255.6), new cjs.Rectangle(-205,-185.2,392.5,256.7), new cjs.Rectangle(-205,-186.3,390.1,257.8), new cjs.Rectangle(-205,-187.5,387.7,259), new cjs.Rectangle(-205,-188.6,385.4,260.1), new cjs.Rectangle(-205,-189.7,383,261.2), new cjs.Rectangle(-205,-190.8,380.6,262.3), new cjs.Rectangle(-205,-192.2,378.3,263.7), new cjs.Rectangle(-205,-190.5,378.9,262), new cjs.Rectangle(-205,-187.9,378.5,259.4), new cjs.Rectangle(-205,-184.6,377,256.1), new cjs.Rectangle(-205,-180.2,374.5,251.7), new cjs.Rectangle(-205,-175.4,370.4,246.9), new cjs.Rectangle(-205,-169.7,365.2,241.2), new cjs.Rectangle(-205,-164,358.8,235.5), new cjs.Rectangle(-205,-158,351,229.5), new cjs.Rectangle(-173.7,-158,319.8,229.5), new cjs.Rectangle(-142.5,-158,288.5,229.5), new cjs.Rectangle(-111.2,-158,257.3,229.5), new cjs.Rectangle(-80,-158,226,229.5), new cjs.Rectangle(-80,-214.6,226,286.1), new cjs.Rectangle(-80,-271.3,226,342.8), new cjs.Rectangle(-80,-328,226,399.5), new cjs.Rectangle(-48.5,-53.5,181,125)];


(lib.animation_mask2_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.marker1_2_mc();
	this.instance.setTransform(-49,-143);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

	// animation
	this.instance_1 = new lib.marker1_1_mc();
	this.instance_1.setTransform(33,-143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13));

	// animation
	this.instance_2 = new lib.mask_1eye4_mc();
	this.instance_2.setTransform(38.3,-24.6,0.229,1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({scaleX:1,x:44},6).wait(1));

	// animation
	this.instance_3 = new lib.mask_2_eye3_mc();
	this.instance_3.setTransform(38.4,23,0.229,1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({scaleX:1,x:44.4,y:22},6).wait(1));

	// animation
	this.instance_4 = new lib.mask_1eye8_mc();
	this.instance_4.setTransform(44.5,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.2,x:38},6).to({_off:true},1).wait(6));

	// animation
	this.instance_5 = new lib.mask_1eye7_mc();
	this.instance_5.setTransform(42,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.2,x:37.5},6).to({scaleX:1,x:42},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-158,226,229.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_mask2_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.marker1_2_mc();
	this.instance.setTransform(-49,-143);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21));

	// animation
	this.instance_1 = new lib.marker1_1_mc();
	this.instance_1.setTransform(33,-143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21));

	// animation
	this.instance_2 = new lib.mask_1eye8_mc();
	this.instance_2.setTransform(44.4,164);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:44.5,y:9.1},9).wait(12));

	// animation
	this.instance_3 = new lib.rastr1_mc();
	this.instance_3.setTransform(45.5,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({alpha:0.012},10).to({_off:true},1).wait(1));

	// animation
	this.instance_4 = new lib.mask_1eye7_mc();
	this.instance_4.setTransform(42,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-158,226,379);
p.frameBounds = [rect, new cjs.Rectangle(-80,-158,226,361.8), new cjs.Rectangle(-80,-158,226,344.6), new cjs.Rectangle(-80,-158,226,327.4), new cjs.Rectangle(-80,-158,226,310.2), new cjs.Rectangle(-80,-158,226,292.9), new cjs.Rectangle(-80,-158,226,275.7), new cjs.Rectangle(-80,-158,226,258.5), new cjs.Rectangle(-80,-158,226,241.3), rect=new cjs.Rectangle(-80,-158,226,229.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_mask2_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.glue_mc();
	this.instance.setTransform(227,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-73.5,x:144,y:6.1},10).to({rotation:-132.4,x:116,y:-78.9},10).wait(29).to({rotation:-32.2,x:375,y:-100.9,alpha:0.012},11).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.kaplya1_mc();
	this.instance_1.setTransform(43.4,-1.7,0.245,0.245);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({scaleX:0.56,scaleY:0.56,x:46.4,y:34.3,alpha:0.012},9).to({scaleX:0.25,scaleY:0.25,x:43.4,y:-1.7,alpha:1},1).to({scaleX:0.56,scaleY:0.56,x:46.4,y:34.3,alpha:0.012},9).to({scaleX:0.25,scaleY:0.25,x:43.4,y:-1.7,alpha:1},1).to({scaleX:0.56,scaleY:0.56,x:46.4,y:34.3,alpha:0.012},9).to({_off:true},1).wait(12));

	// animation
	this.instance_2 = new lib.rastr1_mc();
	this.instance_2.setTransform(45.5,29.4);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).to({alpha:1},15).wait(13));

	// animation
	this.instance_3 = new lib.marker1_2_mc();
	this.instance_3.setTransform(-49,-143);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(62));

	// animation
	this.instance_4 = new lib.marker1_1_mc();
	this.instance_4.setTransform(33,-143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(62));

	// animation
	this.instance_5 = new lib.mask_1eye8_mc();
	this.instance_5.setTransform(44.4,164);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(62));

	// animation
	this.instance_6 = new lib.mask_1eye7_mc();
	this.instance_6.setTransform(42,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-158,339.5,379);
p.frameBounds = [rect, new cjs.Rectangle(-80,-158,343.6,379), new cjs.Rectangle(-80,-158,346.9,379), new cjs.Rectangle(-80,-158,349.7,379), new cjs.Rectangle(-80,-158,351,379), new cjs.Rectangle(-80,-158,351.1,379), new cjs.Rectangle(-80,-158,350.1,379), new cjs.Rectangle(-80,-158,347.3,379), new cjs.Rectangle(-80,-158,342.9,379), new cjs.Rectangle(-80,-158,336.8,379), new cjs.Rectangle(-80,-158,329.1,379), new cjs.Rectangle(-80,-158,325.5,379), new cjs.Rectangle(-80,-158,320.7,379), new cjs.Rectangle(-80,-158,316.2,379), new cjs.Rectangle(-80,-158,316,379), new cjs.Rectangle(-80,-158,314.7,379), new cjs.Rectangle(-80,-158,312.3,379), new cjs.Rectangle(-80,-158,308.7,379), new cjs.Rectangle(-80,-158,304.1,379), new cjs.Rectangle(-80,-158,298.3,379), new cjs.Rectangle(-80,-170.4,291.8,391.5), rect=new cjs.Rectangle(-80,-170.3,291.6,391.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-80,-170.4,291.8,391.5), new cjs.Rectangle(-80,-162.9,320.8,384), new cjs.Rectangle(-80,-158,347.5,379), new cjs.Rectangle(-80,-158,371.6,379), new cjs.Rectangle(-80,-158,392.9,379), new cjs.Rectangle(-80,-158,415.3,379), new cjs.Rectangle(-80,-158,441.8,379), new cjs.Rectangle(-80,-159.3,465.6,380.4), new cjs.Rectangle(-80,-173.3,486.9,394.3), new cjs.Rectangle(-80,-185.4,505.5,406.5), new cjs.Rectangle(-80,-195.2,521.7,416.3), new cjs.Rectangle(-80,-202.9,535.8,423.9), new cjs.Rectangle(-80,-158,226,379)];


(lib.animation_mask2_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.marker1_2_mc();
	this.instance.setTransform(-49,-143);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11));

	// animation
	this.instance_1 = new lib.marker1_1_mc();
	this.instance_1.setTransform(33,-143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11));

	// animation
	this.instance_2 = new lib.mask_1eye8_mc();
	this.instance_2.setTransform(44.4,164);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11));

	// animation
	this.instance_3 = new lib.glue_mc();
	this.instance_3.setTransform(227,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11));

	// animation
	this.instance_4 = new lib.mask_2_eye3_mc();
	this.instance_4.setTransform(44,22.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.16,x:39.5,y:24.3},5).to({_off:true},1).wait(5));

	// animation
	this.instance_5 = new lib.mask_1eye7_mc();
	this.instance_5.setTransform(42,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.16,x:39},5).to({scaleX:1,x:42},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-158,339.5,379);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_mask2_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.marker1_2_mc();
	this.instance.setTransform(-49,-342);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70).to({_off:false},0).to({y:-143},15).wait(1));

	// animation
	this.instance_1 = new lib.marker1_1_mc();
	this.instance_1.setTransform(33,-342.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70).to({_off:false},0).to({y:-143.5},15).wait(1));

	// animation
	this.instance_2 = new lib.mask_1eye8_mc();
	this.instance_2.setTransform(44.4,367);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(70).to({_off:false},0).to({y:164},15).wait(1));

	// animation
	this.instance_3 = new lib.glue_mc();
	this.instance_3.setTransform(569,8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70).to({_off:false},0).to({x:227},15).wait(1));

	// animation
	this.instance_4 = new lib.mask_1eye51_mc();
	this.instance_4.setTransform(43.9,-24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(70).to({rotation:35.2,x:48.9,y:229.1,alpha:0.012},8).to({_off:true},1).wait(7));

	// animation
	this.instance_5 = new lib.skalpel_mc();
	this.instance_5.setTransform(-154.7,-28,1,1,-154.5,0,0,14.5,156);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-202,x:-44.2,y:-157.5},14).to({rotation:-186.6,x:32.3,y:-176.5},8).to({rotation:-135.6,x:183.3,y:-125.5},9).to({rotation:-43.1,x:169.3,y:81.6},5).to({rotation:-6.3,x:72.3,y:134.7},6).to({regX:14.4,regY:156.1,rotation:9.6,x:8.2,y:133.7},6).to({rotation:33.6,x:-65.8,y:104.7},9).to({rotation:81.3,x:-132.7,y:2.6},7).to({regX:14.5,rotation:126.2,x:-92.7,y:-118.3},6).to({x:-414.7,y:-239.3,alpha:0.012},14).to({_off:true},1).wait(1));

	// animation
	this.instance_6 = new lib.mask_2_eye3_mc();
	this.instance_6.setTransform(44,22.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(86));

	// animation
	this.instance_7 = new lib.mask_2_eye2_mc();
	this.instance_7.setTransform(44.4,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:0.012},43).to({_off:true},1).wait(42));

	// animation
	this.instance_8 = new lib.mask_1eye7_mc();
	this.instance_8.setTransform(42,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-234.8,-175,367.4,294.2);
p.frameBounds = [rect, new cjs.Rectangle(-218.6,-187.1,351.2,299.7), new cjs.Rectangle(-202.2,-198.8,334.7,304.7), new cjs.Rectangle(-186,-209.9,318.6,308.4), new cjs.Rectangle(-169.1,-220.5,301.7,311.1), new cjs.Rectangle(-152.1,-230.6,284.6,312.8), new cjs.Rectangle(-135.4,-240,267.9,313.3), new cjs.Rectangle(-118.1,-249,250.6,320.5), new cjs.Rectangle(-110.3,-258.2,242.8,329.7), new cjs.Rectangle(-111.7,-267.8,244.3,339.3), new cjs.Rectangle(-112.7,-276.8,245.2,348.3), new cjs.Rectangle(-113.9,-285.2,246.4,356.7), new cjs.Rectangle(-115,-293.1,247.6,364.6), new cjs.Rectangle(-115.5,-300.5,248.1,372), new cjs.Rectangle(-116.2,-307.6,248.8,379.1), new cjs.Rectangle(-101.7,-311.3,234.3,382.8), new cjs.Rectangle(-87.2,-315,219.7,386.5), new cjs.Rectangle(-72.6,-318.3,205.2,389.8), new cjs.Rectangle(-58.5,-321.6,191,393.1), new cjs.Rectangle(-48.5,-324.7,181,396.2), new cjs.Rectangle(-48.5,-327.7,181,399.2), new cjs.Rectangle(-48.5,-330.4,181,401.9), new cjs.Rectangle(-48.5,-333.2,181,404.7), new cjs.Rectangle(-48.5,-327,181,398.5), new cjs.Rectangle(-48.5,-321.8,181,393.3), new cjs.Rectangle(-48.5,-315.5,181,387), new cjs.Rectangle(-48.5,-307.6,204.9,379.1), new cjs.Rectangle(-48.5,-298.4,235.6,369.9), new cjs.Rectangle(-48.5,-287.6,265.9,359.1), new cjs.Rectangle(-48.5,-275.3,295.4,346.8), new cjs.Rectangle(-48.5,-261.8,323.5,333.3), new cjs.Rectangle(-48.5,-247.2,351.2,318.7), new cjs.Rectangle(-48.5,-167.8,374.4,239.3), new cjs.Rectangle(-48.5,-80,382.6,151.5), new cjs.Rectangle(-48.5,-53.5,379.5,125), new cjs.Rectangle(-48.5,-53.5,364.6,180.6), new cjs.Rectangle(-48.5,-53.5,335,259), new cjs.Rectangle(-48.5,-53.5,306.7,277.3), new cjs.Rectangle(-48.5,-53.5,277.7,294.1), new cjs.Rectangle(-48.5,-53.5,247.4,309.4), new cjs.Rectangle(-48.5,-53.5,216.5,322.9), new cjs.Rectangle(-48.5,-53.5,184.5,334.8), new cjs.Rectangle(-48.5,-53.5,181,344.8), new cjs.Rectangle(-48.5,-53.5,181,344.7), rect=new cjs.Rectangle(-48.5,-53.5,181,344.1), rect, new cjs.Rectangle(-48.5,-53.5,181,344.2), new cjs.Rectangle(-48.5,-53.5,181,343.9), new cjs.Rectangle(-48.5,-53.5,181,343.4), new cjs.Rectangle(-48.5,-53.5,181,339.5), new cjs.Rectangle(-61.9,-53.5,194.5,335.2), new cjs.Rectangle(-77,-53.5,209.6,330.6), new cjs.Rectangle(-92.1,-53.5,224.6,325.6), new cjs.Rectangle(-106.5,-53.5,239.1,320.4), new cjs.Rectangle(-121.3,-53.5,253.9,314.7), new cjs.Rectangle(-135.8,-53.5,268.4,308.8), new cjs.Rectangle(-149.8,-53.5,282.3,302.7), new cjs.Rectangle(-164,-53.5,296.6,296.2), new cjs.Rectangle(-187.2,-53.5,319.7,271.8), new cjs.Rectangle(-208.9,-53.5,341.5,245.7), new cjs.Rectangle(-229.1,-53.5,361.7,217.6), new cjs.Rectangle(-247.2,-53.5,379.8,188.4), new cjs.Rectangle(-263.2,-53.5,395.8,158), new cjs.Rectangle(-277.2,-53.5,409.8,126.6), new cjs.Rectangle(-289,-53.5,421.6,125), new cjs.Rectangle(-282.3,-53.5,414.8,125), new cjs.Rectangle(-275.9,-69,408.5,140.5), new cjs.Rectangle(-267.5,-108.9,400,180.4), new cjs.Rectangle(-256.6,-147.5,389.2,219), new cjs.Rectangle(-243.1,-185.4,375.6,256.9), new cjs.Rectangle(-227.1,-357,828.6,781), new cjs.Rectangle(-250,-343.7,828.7,754.2), new cjs.Rectangle(-273,-330.4,828.9,727.4), new cjs.Rectangle(-296,-317.2,829.1,700.6), new cjs.Rectangle(-319,-303.9,829.3,673.8), new cjs.Rectangle(-342,-290.6,829.5,647), new cjs.Rectangle(-365,-277.4,829.7,620.2), new cjs.Rectangle(-388,-282.3,829.9,611.6), new cjs.Rectangle(-410.9,-290.9,830,606.7), new cjs.Rectangle(-433.9,-299.6,830.3,601.8), new cjs.Rectangle(-456.9,-308.2,830.5,596.9), new cjs.Rectangle(-479.9,-316.8,830.7,592), new cjs.Rectangle(-502.9,-325.5,830.9,587.1), new cjs.Rectangle(-525.9,-334.1,831.1,582.2), new cjs.Rectangle(-549.1,-343.1,831.4,577.7), new cjs.Rectangle(-80,-158,339.5,379)];


(lib.animation_mask2_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.skalpel_mc();
	this.instance.setTransform(-913.6,-28,1,1,-154.5,0,0,14.5,156);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-154.7},19).wait(1));

	// animation
	this.instance_1 = new lib.mask_2_eye2_mc();
	this.instance_1.setTransform(-714.9,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:44.4,y:9.5},19).wait(1));

	// animation
	this.instance_2 = new lib.mask_1eye7_mc();
	this.instance_2.setTransform(-716.9,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:42},19).wait(1));

	// animation
	this.instance_3 = new lib.mask_2_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:625.9},18).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-993.8,-275,1216.3,550);
p.frameBounds = [rect, new cjs.Rectangle(-953.4,-275,1210.7,550), new cjs.Rectangle(-913.4,-275,1205.5,550), new cjs.Rectangle(-873.5,-275,1200.3,550), new cjs.Rectangle(-833.5,-275,1195.1,550), new cjs.Rectangle(-793.6,-275,1190,550), new cjs.Rectangle(-753.7,-275,1184.8,550), new cjs.Rectangle(-713.7,-275,1179.6,550), new cjs.Rectangle(-673.8,-275,1174.4,550), new cjs.Rectangle(-633.8,-275,1169.3,550), new cjs.Rectangle(-593.9,-275,1164.1,550), new cjs.Rectangle(-553.9,-275,1159,550), new cjs.Rectangle(-514,-275,1153.8,550), new cjs.Rectangle(-474,-275,1148.6,550), new cjs.Rectangle(-434.1,-275,1143.4,550), new cjs.Rectangle(-394.2,-275,1138.3,550), new cjs.Rectangle(-354.2,-275,1133.1,550), new cjs.Rectangle(-314.3,-275,1127.9,550), new cjs.Rectangle(-274.3,-275,1122.8,550), new cjs.Rectangle(-234.8,-175,367.4,294.2)];


(lib.animation_mask2_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mask_2_9_mc();
	this.instance.setTransform(-1,189.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({rotation:12.7,x:-4,y:324.7,alpha:0.012},10).to({_off:true},1).wait(7));

	// animation
	this.instance_1 = new lib.skalpel_mc();
	this.instance_1.setTransform(-238.2,-109,1,1,0,124.3,-55.7,14.6,156.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({skewX:152.7,skewY:-27.3,x:-38.2,y:40},9).to({x:-36.2,y:59},10).to({regX:14.5,skewX:173.7,skewY:-6.3,x:-71.3,y:51},22).to({skewX:152.3,skewY:-27.7,x:-307.2,y:41,alpha:0.012},16).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.mask_2_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59));

	// animation
	this.instance_3 = new lib.mask_2_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0.012},42).to({_off:true},1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-375.2,-275,597.7,550);
p.frameBounds = [rect, new cjs.Rectangle(-348.6,-275,571.1,550), new cjs.Rectangle(-321.5,-275,544,550), new cjs.Rectangle(-293.9,-275,516.4,550), new cjs.Rectangle(-266.3,-275,488.8,550), new cjs.Rectangle(-238.1,-275,460.6,550), rect=new cjs.Rectangle(-222.5,-275,445,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-222.5,-275,445,556.8), new cjs.Rectangle(-230.3,-275,452.8,571.1), new cjs.Rectangle(-248.7,-275,471.2,585.4), new cjs.Rectangle(-266.7,-275,489.2,599.6), new cjs.Rectangle(-284.6,-275,507.1,614), new cjs.Rectangle(-303,-275,525.5,550), new cjs.Rectangle(-320.8,-275,543.3,550), new cjs.Rectangle(-338.6,-275,561.1,550), new cjs.Rectangle(-356.8,-275,579.3,550), new cjs.Rectangle(-374.5,-275,597,550), new cjs.Rectangle(-392.7,-275,615.2,550), new cjs.Rectangle(-222.5,-275,445,550)];


(lib.animation_mask2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mask_2_7_mc();
	this.instance.setTransform(-112,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100).to({rotation:-15.5,x:-124,y:203.9,alpha:0.012},11).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.skalpel_mc();
	this.instance_1.setTransform(187,-52,1,1,-114.8,0,0,14.5,156);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:0,skewX:114.8,skewY:-65.2,x:-13.1},1).to({x:-192.1,y:-73},8).to({regX:14.6,skewX:128.8,skewY:-51.2,x:-192},7).to({x:-272,y:-63},13).to({regY:156.1,skewX:72.9,skewY:-107.1,x:-276.1,y:103},9).to({regY:156,skewX:41.6,skewY:-138.4,x:-208,y:180},8).to({skewX:-5.6,skewY:-185.6,x:-65.1,y:200},11).to({regY:156.1,skewX:-81.8,skewY:-261.8,x:80,y:62.1},11).to({regY:156,skewX:-129.8,skewY:-309.8,x:27,y:-65.9},6).to({regX:14.5,skewX:-165.2,skewY:-345.2,x:-74.2,y:-112},8).to({skewX:-216.7,skewY:-396.7,x:-218.2,y:-94.9},11).to({regX:14.6,regY:156.1,skewX:-235.7,skewY:-415.7,x:-238.2,y:-109},7).wait(13));

	// animation
	this.instance_2 = new lib.mask_2_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(113));

	// animation
	this.instance_3 = new lib.mask_2_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0.012},57).to({_off:true},1).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.5,-275,557.3,550);
p.frameBounds = [rect, rect=new cjs.Rectangle(-222.5,-275,445,550), rect, rect, new cjs.Rectangle(-227.7,-275,450.2,550), new cjs.Rectangle(-250.1,-275,472.6,550), new cjs.Rectangle(-272.5,-275,495,550), new cjs.Rectangle(-294.8,-275,517.3,550), new cjs.Rectangle(-317.2,-275,539.7,550), new cjs.Rectangle(-339.8,-275,562.3,550), new cjs.Rectangle(-337.6,-275,560.1,550), new cjs.Rectangle(-335.5,-275,558,550), new cjs.Rectangle(-333.2,-275,555.7,550), new cjs.Rectangle(-330.8,-275,553.3,550), new cjs.Rectangle(-328.2,-275,550.7,550), new cjs.Rectangle(-325.5,-275,548,550), new cjs.Rectangle(-322.8,-275,545.3,550), new cjs.Rectangle(-328.7,-275,551.2,550), new cjs.Rectangle(-334.8,-275,557.3,550), new cjs.Rectangle(-341,-275,563.5,550), new cjs.Rectangle(-347.1,-275,569.6,550), new cjs.Rectangle(-353.3,-275,575.8,550), new cjs.Rectangle(-359.4,-275,581.9,550), new cjs.Rectangle(-365.6,-275,588.1,550), new cjs.Rectangle(-371.8,-275,594.3,550), new cjs.Rectangle(-377.9,-275,600.4,550), new cjs.Rectangle(-384.1,-275,606.6,550), new cjs.Rectangle(-390.2,-275,612.7,550), new cjs.Rectangle(-396.4,-275,618.8,550), new cjs.Rectangle(-402.8,-275,625.3,550), new cjs.Rectangle(-411.6,-275,634.1,550), new cjs.Rectangle(-419,-275,641.5,550), new cjs.Rectangle(-424.8,-275,647.3,550), new cjs.Rectangle(-428.7,-275,651.2,550), new cjs.Rectangle(-430.7,-275,653.2,550), new cjs.Rectangle(-431,-275,653.5,550), new cjs.Rectangle(-431.7,-275,654.2,550), new cjs.Rectangle(-431.5,-275,654,550), new cjs.Rectangle(-429.4,-275,651.8,550), new cjs.Rectangle(-418.1,-275,640.6,550), new cjs.Rectangle(-406.5,-275,629,550), new cjs.Rectangle(-393.9,-275,616.4,550), new cjs.Rectangle(-380.6,-275,603.1,550), new cjs.Rectangle(-367.1,-275,589.6,550), new cjs.Rectangle(-352.5,-275,575,550), new cjs.Rectangle(-337.8,-275,560.3,564.8), new cjs.Rectangle(-322.4,-275,544.9,581.4), new cjs.Rectangle(-300.9,-275,523.4,589.4), new cjs.Rectangle(-279,-275,501.5,597.1), new cjs.Rectangle(-256.2,-275,478.7,604.2), new cjs.Rectangle(-233.3,-275,455.8,610.3), new cjs.Rectangle(-222.5,-275,445,615.5), new cjs.Rectangle(-222.5,-275,445,619.9), new cjs.Rectangle(-222.5,-275,445,623.4), new cjs.Rectangle(-222.5,-275,445,626.1), new cjs.Rectangle(-222.5,-275,445,627.8), new cjs.Rectangle(-222.5,-275,445,629.5), new cjs.Rectangle(-222.5,-275,445,631.7), new cjs.Rectangle(-222.5,-275,445,617.8), new cjs.Rectangle(-222.5,-275,445,601.7), new cjs.Rectangle(-222.5,-275,445,583.4), new cjs.Rectangle(-222.5,-275,445,562.9), rect=new cjs.Rectangle(-222.5,-275,445,550), rect, rect, rect, rect, rect, new cjs.Rectangle(-222.5,-275,458.9,550), new cjs.Rectangle(-222.5,-275,449.6,550), rect=new cjs.Rectangle(-222.5,-275,445,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-227.4,-275,449.9,550), new cjs.Rectangle(-252.2,-275,474.7,550), new cjs.Rectangle(-276.4,-275,498.9,550), new cjs.Rectangle(-300.1,-275,522.6,550), new cjs.Rectangle(-323,-275,545.5,550), new cjs.Rectangle(-331.1,-275,553.6,550), new cjs.Rectangle(-339.1,-275,561.6,550), new cjs.Rectangle(-346.9,-275,569.3,550), new cjs.Rectangle(-354.4,-275,576.9,550), new cjs.Rectangle(-361.7,-275,584.2,550), new cjs.Rectangle(-368.4,-275,590.9,550), new cjs.Rectangle(-375.2,-275,597.7,550), rect=new cjs.Rectangle(-375.1,-275,597.6,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-375.2,-275,597.7,550)];


(lib.animation_mask2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mask_2_5_mc();
	this.instance.setTransform(112.4,44.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(94).to({rotation:23.2,x:121.6,y:240.7,alpha:0.012},11).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.skalpel_mc();
	this.instance_1.setTransform(187,-52,1,1,-114.8,0,0,14.5,156);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-127.5,x:174,y:-61},4).to({rotation:-154.2,x:224,y:-106},11).to({rotation:-115.2,x:286,y:-29.9},5).to({regX:14.4,rotation:-66.8,x:271.1,y:132.1},14).to({regY:155.9,rotation:-39.6,x:208,y:195.1},8).to({regY:156,rotation:-6.1,x:99,y:217.2},14).to({rotation:23.1,x:6,y:177.3},12).to({rotation:75.1,x:-72,y:77.4},7).to({rotation:149.1,x:-8,y:-85.6},10).to({regX:14.5,rotation:245.2,x:187,y:-52},9).wait(13));

	// animation
	this.instance_2 = new lib.mask_2_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(107));

	// animation
	this.instance_3 = new lib.mask_2_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0.012},42).to({_off:true},1).wait(64));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.5,-275,557.3,550);
p.frameBounds = [rect, new cjs.Rectangle(-222.5,-275,550.7,550), new cjs.Rectangle(-222.5,-275,543.9,550), new cjs.Rectangle(-222.5,-275,536.6,550), new cjs.Rectangle(-222.5,-275,529.1,550), new cjs.Rectangle(-222.5,-275,529.9,550), new cjs.Rectangle(-222.5,-275,530.5,550), new cjs.Rectangle(-222.5,-275,530.8,550), new cjs.Rectangle(-222.5,-275,531.3,550), new cjs.Rectangle(-222.5,-275,531.2,550), new cjs.Rectangle(-222.5,-275,530.9,550), new cjs.Rectangle(-222.5,-275,530.4,550), new cjs.Rectangle(-222.5,-275,530,550), new cjs.Rectangle(-222.5,-275,529.2,550), new cjs.Rectangle(-222.5,-275,528.2,550), new cjs.Rectangle(-222.5,-275,527.4,550), new cjs.Rectangle(-222.5,-275,557.2,550), new cjs.Rectangle(-222.5,-275,585.2,550), new cjs.Rectangle(-222.5,-275,611.1,550), new cjs.Rectangle(-222.5,-275,634.6,550), new cjs.Rectangle(-222.5,-275,655.8,550), new cjs.Rectangle(-222.5,-275,657.6,550), new cjs.Rectangle(-222.5,-275,658.9,550), new cjs.Rectangle(-222.5,-275,659.8,550), new cjs.Rectangle(-222.5,-275,660,550), new cjs.Rectangle(-222.5,-275,659.7,550), new cjs.Rectangle(-222.5,-275,658.8,550), new cjs.Rectangle(-222.5,-275,657.3,550), new cjs.Rectangle(-222.5,-275,656.5,550), new cjs.Rectangle(-222.5,-275,655.6,550), new cjs.Rectangle(-222.5,-275,654.1,550), new cjs.Rectangle(-222.5,-275,652.1,550), new cjs.Rectangle(-222.5,-275,649.4,550), new cjs.Rectangle(-222.5,-275,646.2,550), new cjs.Rectangle(-222.5,-275,642.7,550), new cjs.Rectangle(-222.5,-275,631.6,550), new cjs.Rectangle(-222.5,-275,620,550), new cjs.Rectangle(-222.5,-275,608.1,550), new cjs.Rectangle(-222.5,-275,595.5,550), new cjs.Rectangle(-222.5,-275,582.7,558.1), new cjs.Rectangle(-222.5,-275,569.1,572.3), new cjs.Rectangle(-222.5,-275,555.2,586.3), new cjs.Rectangle(-222.5,-275,541.2,599.7), new cjs.Rectangle(-222.5,-275,528.5,604.6), new cjs.Rectangle(-222.5,-275,516,609.5), new cjs.Rectangle(-222.5,-275,502.9,614.3), new cjs.Rectangle(-222.5,-275,489.7,618.8), new cjs.Rectangle(-222.5,-275,476.7,622.9), new cjs.Rectangle(-222.5,-275,463.2,626.9), new cjs.Rectangle(-222.5,-275,450,630.5), new cjs.Rectangle(-222.5,-275,445,634), new cjs.Rectangle(-222.5,-275,445,637.1), new cjs.Rectangle(-222.5,-275,445,640), new cjs.Rectangle(-222.5,-275,445,642.7), new cjs.Rectangle(-222.5,-275,445,645), new cjs.Rectangle(-222.5,-275,445,647.1), new cjs.Rectangle(-222.5,-275,445,648.9), new cjs.Rectangle(-222.5,-275,445,645.5), new cjs.Rectangle(-222.5,-275,445,641.8), new cjs.Rectangle(-222.5,-275,445,638.5), new cjs.Rectangle(-222.5,-275,445,635.5), new cjs.Rectangle(-222.5,-275,445,632.3), new cjs.Rectangle(-222.5,-275,445,628.6), new cjs.Rectangle(-222.5,-275,445,624.9), new cjs.Rectangle(-222.5,-275,445,620.8), new cjs.Rectangle(-222.5,-275,445,616.3), new cjs.Rectangle(-222.5,-275,445,611.6), new cjs.Rectangle(-222.5,-275,445,606.7), new cjs.Rectangle(-222.5,-275,445,601.6), new cjs.Rectangle(-222.5,-275,445,579.7), new cjs.Rectangle(-222.5,-275,445,555.8), rect=new cjs.Rectangle(-222.5,-275,445,550), rect, rect, rect, new cjs.Rectangle(-226.4,-275,448.9,550), rect=new cjs.Rectangle(-222.5,-275,445,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-222.5,-275,484.4,550), new cjs.Rectangle(-222.5,-275,523.2,550), new cjs.Rectangle(-222.5,-275,557.3,550), rect=new cjs.Rectangle(-222.5,-275,557,550), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-222.5,-275,557,561.4), new cjs.Rectangle(-222.5,-275,557,581), new cjs.Rectangle(-222.5,-275,557.3,550)];


(lib.animation_mask2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.skalpel_mc();
	this.instance.setTransform(286,43,1,1,0,0,0,14.5,156);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-114.8,x:187,y:-52},9).wait(1));

	// animation
	this.instance_1 = new lib.mask_2_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.5,-275,523,550);
p.frameBounds = [rect, new cjs.Rectangle(-222.5,-275,546.1,550), new cjs.Rectangle(-222.5,-275,566.8,550), new cjs.Rectangle(-222.5,-275,583.4,550), new cjs.Rectangle(-222.5,-275,594.9,550), new cjs.Rectangle(-222.5,-275,599.8,550), new cjs.Rectangle(-222.5,-275,597.6,550), new cjs.Rectangle(-222.5,-275,587.7,550), new cjs.Rectangle(-222.5,-275,575.9,550), new cjs.Rectangle(-222.5,-275,557.3,550)];


(lib.animation_mask1_38_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mask_1_18_mc();
	this.instance.setTransform(-98,47,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// animation
	this.instance_1 = new lib.mask_1_18_mc();
	this.instance_1.setTransform(99.4,47.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// animation
	this.instance_2 = new lib.mask_1_1_mc();
	this.instance_2.setTransform(-244,193.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:2,y:188.3},14).wait(1));

	// animation
	this.instance_3 = new lib.mask_1_16_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-292,-275,514.5,550);
p.frameBounds = [rect, new cjs.Rectangle(-274.4,-275,497,550), new cjs.Rectangle(-256.8,-275,479.4,550), new cjs.Rectangle(-239.3,-275,461.8,550), rect=new cjs.Rectangle(-222.5,-275,445,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_mask1_36_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mask_1_18_mc();
	this.instance.setTransform(-98,47,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// animation
	this.instance_1 = new lib.mask_1_18_mc();
	this.instance_1.setTransform(286.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:99.4,y:47.4},14).wait(1));

	// animation
	this.instance_2 = new lib.mask_1_1_mc();
	this.instance_2.setTransform(-244,193.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// animation
	this.instance_3 = new lib.mask_1_16_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-292,-275,649.4,550);
p.frameBounds = [rect, new cjs.Rectangle(-292,-275,636,550), new cjs.Rectangle(-292,-275,622.7,550), new cjs.Rectangle(-292,-275,609.3,550), new cjs.Rectangle(-292,-275,595.9,550), new cjs.Rectangle(-292,-275,582.6,550), new cjs.Rectangle(-292,-275,569.2,550), new cjs.Rectangle(-292,-275,555.9,550), new cjs.Rectangle(-292,-275,542.5,550), new cjs.Rectangle(-292,-275,529.2,550), new cjs.Rectangle(-292,-275,515.8,550), rect=new cjs.Rectangle(-292,-275,514.5,550), rect, rect, rect];


(lib.animation_mask1_34_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mask_1_18_mc();
	this.instance.setTransform(-302,12,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-98,y:47},14).wait(1));

	// animation
	this.instance_1 = new lib.mask_1_18_mc();
	this.instance_1.setTransform(286.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// animation
	this.instance_2 = new lib.mask_1_1_mc();
	this.instance_2.setTransform(-244,193.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// animation
	this.instance_3 = new lib.mask_1_16_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-373,-275,730.4,550);
p.frameBounds = [rect, new cjs.Rectangle(-358.4,-275,715.8,550), new cjs.Rectangle(-343.8,-275,701.2,550), new cjs.Rectangle(-329.3,-275,686.7,550), new cjs.Rectangle(-314.7,-275,672.1,550), new cjs.Rectangle(-300.1,-275,657.5,550), rect=new cjs.Rectangle(-292,-275,649.4,550), rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_mask1_32_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.glue_mc();
	this.instance.setTransform(213.4,179.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-119.3,x:-34.6,y:-83.6},11).wait(8).to({x:-22.6,y:33.4},7).wait(10).to({x:186.4,y:-105.6},12).wait(10).to({x:185.4,y:26.4},7).wait(10).to({x:84.4,y:95.3},7).wait(10).to({x:80.4,y:143.3},7).wait(11).to({rotation:-31.6,x:478.4,y:98.3,alpha:0.012},8).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.kaplya1_mc();
	this.instance_1.setTransform(-120.6,-31.6,0.081,0.081);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({scaleX:0.48,scaleY:0.48,x:-121.6,y:-15.6,alpha:0.012},8).to({_off:true},1).wait(6).to({_off:false,scaleX:0.08,scaleY:0.08,x:-108.6,y:83.3,alpha:1},0).to({scaleX:0.48,scaleY:0.48,y:101.4,alpha:0.012},10).to({_off:true},1).wait(11).to({_off:false,scaleX:0.08,scaleY:0.08,x:100.4,y:-56.6,alpha:1},0).to({scaleX:0.48,scaleY:0.48,x:102.4,y:-23.6,alpha:0.012},10).to({_off:true},1).wait(6).to({_off:false,scaleX:0.08,scaleY:0.08,x:98.4,y:78.3,alpha:1},0).to({scaleX:0.48,scaleY:0.48,x:102.4,y:103.4,alpha:0.012},10).to({_off:true},1).wait(6).to({_off:false,scaleX:0.08,scaleY:0.08,x:-2.6,y:146.3,alpha:1},0).to({scaleX:0.48,scaleY:0.48,y:163.4,alpha:0.012},10).to({_off:true},1).wait(6).to({_off:false,scaleX:0.08,scaleY:0.08,x:-5.6,y:193.3,alpha:1},0).to({scaleX:0.48,scaleY:0.48,x:-3.6,y:210.4,alpha:0.012},11).to({_off:true},1).wait(9));

	// animation
	this.instance_2 = new lib.mask_1_18_mc();
	this.instance_2.setTransform(-302,12,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120));

	// animation
	this.instance_3 = new lib.mask_1_18_mc();
	this.instance_3.setTransform(286.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120));

	// animation
	this.instance_4 = new lib.mask_1_1_mc();
	this.instance_4.setTransform(-244,193.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

	// animation
	this.instance_5 = new lib.mask_1_16_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-373,-275,730.4,554.4);
p.frameBounds = [rect, rect=new cjs.Rectangle(-373,-275,730.4,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-373,-275,757.2,550), new cjs.Rectangle(-373,-275,806.1,550), new cjs.Rectangle(-373,-275,851.3,550), new cjs.Rectangle(-373,-275,893,550), new cjs.Rectangle(-373,-275,931.4,550), new cjs.Rectangle(-373,-275,730.4,550)];


(lib.animation_mask1_30_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mask_1_18_mc();
	this.instance.setTransform(-585,12,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({x:-302},10).wait(1));

	// animation
	this.instance_1 = new lib.mask_1_18_mc();
	this.instance_1.setTransform(587.3,1.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).to({x:286.4},10).wait(5));

	// animation
	this.instance_2 = new lib.mask_1_1_mc();
	this.instance_2.setTransform(-244,415.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).to({y:193.3},10).wait(10));

	// animation
	this.instance_3 = new lib.glue_mc();
	this.instance_3.setTransform(476.4,179.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).to({x:213.4},8).wait(7));

	// animation
	this.instance_4 = new lib.mask_1_16_mc();
	this.instance_4.setTransform(6,0,0.205,1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({_off:false},0).to({scaleX:1,x:0},7).wait(26));

	// animation
	this.instance_5 = new lib.mask_1_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.21,x:6},7).to({_off:true},1).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.5,-275,445,550);
p.frameBounds = [rect, new cjs.Rectangle(-196.4,-275,394.5,550), new cjs.Rectangle(-170.2,-275,343.9,550), new cjs.Rectangle(-144.1,-275,293.3,550), new cjs.Rectangle(-118,-275,242.8,550), new cjs.Rectangle(-91.8,-275,192.1,550), new cjs.Rectangle(-65.7,-275,141.6,550), new cjs.Rectangle(-39.5,-275,91,550), new cjs.Rectangle(-65.6,-275,141.6,550), new cjs.Rectangle(-91.7,-275,192.2,550), new cjs.Rectangle(-117.9,-275,242.8,550), new cjs.Rectangle(-144,-275,293.3,550), new cjs.Rectangle(-170.2,-275,343.9,550), new cjs.Rectangle(-196.4,-275,394.5,550), rect=new cjs.Rectangle(-222.5,-275,445,550), rect, rect, rect, rect, rect, new cjs.Rectangle(-292,-275,514.5,705.9), new cjs.Rectangle(-292,-275,514.5,683.7), new cjs.Rectangle(-292,-275,514.5,661.5), new cjs.Rectangle(-292,-275,514.5,639.3), new cjs.Rectangle(-292,-275,514.5,617.1), new cjs.Rectangle(-292,-275,950.3,594.9), new cjs.Rectangle(-292,-275,920.2,572.7), new cjs.Rectangle(-292,-275,890.1,554.4), new cjs.Rectangle(-292,-275,860,554.4), new cjs.Rectangle(-656,-275,1193.9,554.4), new cjs.Rectangle(-627.7,-275,1135.6,554.4), new cjs.Rectangle(-599.4,-275,1077.2,554.4), new cjs.Rectangle(-571.1,-275,1018.8,554.4), new cjs.Rectangle(-542.8,-275,960.4,554.4), new cjs.Rectangle(-514.5,-275,902,554.4), new cjs.Rectangle(-486.2,-275,843.6,554.4), new cjs.Rectangle(-457.9,-275,815.3,554.4), new cjs.Rectangle(-429.6,-275,787,554.4), new cjs.Rectangle(-401.3,-275,758.7,554.4), new cjs.Rectangle(-373,-275,730.4,554.4)];


(lib.animation_mask1_28_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mask_1_7_mc();
	this.instance.setTransform(-842,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0},14).wait(1));

	// animation
	this.instance_1 = new lib.mask_1_15_mc();
	this.instance_1.setTransform(31,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:700},13).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1064.5,-275,1170.5,550);
p.frameBounds = [rect, new cjs.Rectangle(-1004.3,-275,1161.8,550), new cjs.Rectangle(-944.2,-275,1153.2,550), new cjs.Rectangle(-884.1,-275,1144.5,550), new cjs.Rectangle(-823.9,-275,1135.8,550), new cjs.Rectangle(-763.8,-275,1127.1,550), new cjs.Rectangle(-703.6,-275,1118.4,550), new cjs.Rectangle(-643.5,-275,1109.8,550), new cjs.Rectangle(-583.4,-275,1101.1,550), new cjs.Rectangle(-523.2,-275,1092.4,550), new cjs.Rectangle(-463.1,-275,1083.7,550), new cjs.Rectangle(-402.9,-275,1075.1,550), new cjs.Rectangle(-342.8,-275,1066.4,550), new cjs.Rectangle(-282.7,-275,1057.7,550), new cjs.Rectangle(-222.5,-275,445,550)];


(lib.animation_mask1_27_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mask_1_15_mc();
	this.instance.setTransform(31,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44,-15,150,54);
p.frameBounds = [rect];


(lib.animation_mask1_26_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mask_1_15_mc();
	this.instance.setTransform(31,12);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).wait(86));

	// animation
	this.instance_1 = new lib.skalpel_mc();
	this.instance_1.setTransform(-259.6,19.1,1,1,0,35,-145,14.5,156.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:14.6,skewX:119.9,skewY:-60.1,x:-287.6,y:-149},6).to({skewX:137.7,skewY:-42.3,x:-2.6,y:-112.1},10).to({x:-79.6,y:-120.1},12).to({regX:14.5,skewX:129.4,skewY:-50.6,x:-159.7,y:-68},12).to({skewX:31.9,skewY:-148.1,x:-117.7,y:158.1},6).to({skewX:8.4,skewY:-171.6,x:-4.7,y:145.1},9).to({regX:14.6,regY:156,skewX:34.3,skewY:-145.7,y:130.1},10).to({skewX:51,skewY:-129,x:-34.8,y:105.1},3).to({x:-36.8,y:131.1},8).to({regY:156.1,skewX:-45.7,skewY:-225.7,x:188.3,y:140.3},4).to({skewX:-91,skewY:-271,x:245.3,y:-0.7},10).to({x:503.3,y:-5.7,alpha:0.012},10).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.mask_1_17();
	this.instance_2.setTransform(31,14);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({_off:false},0).wait(74).to({y:419.9,alpha:0.012},10).to({_off:true},1).wait(1));

	// animation
	this.instance_3 = new lib.mask_1_19_mc();
	this.instance_3.setTransform(31,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(16).to({alpha:0.012},74).to({_off:true},1).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360.9,-117.1,550.4,272.3);
p.frameBounds = [rect, new cjs.Rectangle(-391.5,-121.9,581,240.9), new cjs.Rectangle(-414.7,-119.7,604.2,238.7), new cjs.Rectangle(-428.8,-112.9,618.4,231.9), new cjs.Rectangle(-434.5,-111.7,624.1,230.7), new cjs.Rectangle(-436.8,-177.3,626.4,296.3), new cjs.Rectangle(-430,-239.4,619.6,358.4), new cjs.Rectangle(-399.5,-239.1,589,358.1), new cjs.Rectangle(-368.7,-239.2,558.3,358.2), new cjs.Rectangle(-337.6,-239.6,527.2,358.6), new cjs.Rectangle(-306.7,-239.5,496.3,358.5), new cjs.Rectangle(-275.6,-239.3,465.1,358.3), new cjs.Rectangle(-244.4,-239,433.9,358), new cjs.Rectangle(-213,-238.6,402.6,357.6), new cjs.Rectangle(-181.6,-238.1,371.2,357.1), new cjs.Rectangle(-150.1,-237.5,339.6,356.5), new cjs.Rectangle(-127.5,-237,317,356), new cjs.Rectangle(-127.5,-237.5,317,356.5), new cjs.Rectangle(-131.1,-238.2,320.6,357.2), new cjs.Rectangle(-137.5,-238.8,327,357.8), new cjs.Rectangle(-143.9,-239.5,333.4,358.5), new cjs.Rectangle(-150.3,-240.2,339.9,359.2), new cjs.Rectangle(-156.7,-240.8,346.3,359.8), new cjs.Rectangle(-163.1,-241.5,352.7,360.5), new cjs.Rectangle(-169.6,-242.2,359.1,361.2), new cjs.Rectangle(-176,-242.8,365.5,361.8), new cjs.Rectangle(-182.4,-243.5,371.9,362.5), new cjs.Rectangle(-188.8,-244.2,378.4,363.2), new cjs.Rectangle(-195.4,-245,384.9,364), new cjs.Rectangle(-203.2,-239.3,392.8,358.3), new cjs.Rectangle(-210.9,-234,400.5,353), new cjs.Rectangle(-218.8,-228.4,408.4,347.4), new cjs.Rectangle(-226.8,-222.8,416.3,341.8), new cjs.Rectangle(-234.7,-217.2,424.3,336.2), new cjs.Rectangle(-242.3,-211.9,431.9,330.9), new cjs.Rectangle(-250.3,-206.3,439.8,325.3), new cjs.Rectangle(-258.1,-200.6,447.6,319.6), new cjs.Rectangle(-266,-194.8,455.6,313.8), new cjs.Rectangle(-273.5,-189.5,463.1,308.5), new cjs.Rectangle(-281.4,-183.8,470.9,302.8), new cjs.Rectangle(-289.3,-178.2,478.8,297.2), new cjs.Rectangle(-301.6,-104.7,491.2,223.7), new cjs.Rectangle(-302.2,-91,491.8,210), new cjs.Rectangle(-294.8,-91,484.4,210), new cjs.Rectangle(-278.5,-91,468,254), new cjs.Rectangle(-250.3,-91,439.9,326.1), new cjs.Rectangle(-212.4,-91,401.9,389.2), new cjs.Rectangle(-194.1,-91,383.6,390.5), new cjs.Rectangle(-175.3,-91,364.8,391.9), new cjs.Rectangle(-156.8,-91,346.3,393), new cjs.Rectangle(-137.8,-91,327.3,393.8), new cjs.Rectangle(-127.5,-91,317,394.1), new cjs.Rectangle(-127.5,-91,317,394.2), new cjs.Rectangle(-127.5,-91,317,394), new cjs.Rectangle(-127.5,-91,317,393.4), new cjs.Rectangle(-127.5,-91,317,392.5), new cjs.Rectangle(-127.5,-91,317,390.5), new cjs.Rectangle(-127.5,-91,317,388.1), new cjs.Rectangle(-127.5,-91,317,385.4), new cjs.Rectangle(-127.5,-91,317,382.4), new cjs.Rectangle(-127.5,-91,317,379.1), new cjs.Rectangle(-127.5,-91,317,375.5), new cjs.Rectangle(-127.5,-91,317,371.5), new cjs.Rectangle(-127.5,-91,317,367.3), new cjs.Rectangle(-127.5,-91,317,362.9), new cjs.Rectangle(-127.5,-91,317,358.2), new cjs.Rectangle(-127.5,-91,317,341.8), new cjs.Rectangle(-145.8,-91,335.3,324.3), new cjs.Rectangle(-165.1,-91,354.7,305.6), new cjs.Rectangle(-165.3,-91,354.9,308.6), new cjs.Rectangle(-165.6,-91,355.1,311.9), new cjs.Rectangle(-165.8,-91,355.4,315.1), new cjs.Rectangle(-166.1,-91,355.6,318.4), new cjs.Rectangle(-166.3,-91,355.9,321.6), new cjs.Rectangle(-166.6,-91,356.1,324.9), new cjs.Rectangle(-166.8,-91,356.4,328.1), new cjs.Rectangle(-167.1,-91,356.7,331.6), new cjs.Rectangle(-127.5,-91,317,370.1), new cjs.Rectangle(-127.5,-91,317,383.3), new cjs.Rectangle(-127.5,-91,330.2,379.3), new cjs.Rectangle(-127.5,-91,437.6,350.5), new cjs.Rectangle(-127.5,-91,450.7,327.6), new cjs.Rectangle(-127.5,-91,462.9,304.4), new cjs.Rectangle(-127.5,-91,474.4,280.6), new cjs.Rectangle(-127.5,-91,484.9,256.3), new cjs.Rectangle(-127.5,-91,494.5,231.5), new cjs.Rectangle(-127.5,-91,503.2,210), new cjs.Rectangle(-127.5,-91,511,210), new cjs.Rectangle(-127.5,-91,517.8,210), new cjs.Rectangle(-127.5,-91,523.6,210), new cjs.Rectangle(-127.5,-91,528.9,210), new cjs.Rectangle(-127.5,-50.4,554.7,210), new cjs.Rectangle(-127.5,-18.5,580.5,218.7), new cjs.Rectangle(-127.5,-19,606.3,259.8), new cjs.Rectangle(-127.5,-19.5,632.1,300.9), new cjs.Rectangle(-127.5,-20,657.9,342), new cjs.Rectangle(-127.5,-20.5,683.7,383.1), new cjs.Rectangle(-127.5,-21,709.5,424.2), new cjs.Rectangle(-127.5,-21.5,735.3,465.3), new cjs.Rectangle(-127.5,-22,761.1,506.4), new cjs.Rectangle(-127.5,-23,786.9,547.9), new cjs.Rectangle(-44,-15,150,54)];


(lib.animation_mask1_24_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.skalpel_mc();
	this.instance.setTransform(-890.6,19.1,1,1,0,35,-145,14.5,156.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-259.6},19).wait(1));

	// animation
	this.instance_1 = new lib.mask_1_19_mc();
	this.instance_1.setTransform(-780,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:31},19).wait(1));

	// animation
	this.instance_2 = new lib.mask_1eye5_mc();
	this.instance_2.setTransform(44,-24.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:588},18).to({_off:true},1).wait(1));

	// animation
	this.instance_3 = new lib.mask_1eye3_mc();
	this.instance_3.setTransform(44.4,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:588.4},18).to({_off:true},1).wait(1));

	// animation
	this.instance_4 = new lib.mask_1eye7_mc();
	this.instance_4.setTransform(42,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:586},18).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-991.8,-117.1,1124.4,272.3);
p.frameBounds = [rect, new cjs.Rectangle(-958.2,-117.1,1121,272.2), new cjs.Rectangle(-925,-117.1,1118,272.2), new cjs.Rectangle(-891.8,-117.1,1115,272.2), new cjs.Rectangle(-858.6,-117.1,1112,272.2), new cjs.Rectangle(-825.4,-117.1,1109,272.2), new cjs.Rectangle(-792.2,-117.1,1106.1,272.2), new cjs.Rectangle(-759,-117.1,1103.1,272.2), new cjs.Rectangle(-725.8,-117.1,1100.1,272.2), new cjs.Rectangle(-692.6,-117.1,1097.1,272.2), new cjs.Rectangle(-659.3,-117.1,1094.1,272.2), new cjs.Rectangle(-626.1,-117.1,1091.1,272.2), new cjs.Rectangle(-592.9,-117.1,1088.1,272.2), new cjs.Rectangle(-559.7,-117.1,1085.2,272.2), new cjs.Rectangle(-526.5,-117.1,1082.2,272.2), new cjs.Rectangle(-493.3,-117.1,1079.2,272.2), new cjs.Rectangle(-460.1,-117.1,1076.2,272.2), new cjs.Rectangle(-426.9,-117.1,1073.2,272.2), new cjs.Rectangle(-393.7,-117.1,1070.2,272.2), new cjs.Rectangle(-360.9,-117.1,550.4,272.3)];


(lib.animation_mask1_22_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.marker1_2_mc();
	this.instance.setTransform(-49,-143);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-174},4).wait(67).to({x:-49},4).to({y:-313},3).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.marker1_1_mc();
	this.instance_1.setTransform(33,-143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({rotation:-49,x:85.2,y:-133.5},10).to({x:95.2,y:-106.5},7).to({x:107.2,y:-117.5},7).to({x:134.2,y:-107.5},4).to({x:88.2,y:-99.5},8).to({x:135.2,y:-96.5},9).to({x:107.2,y:-88.5},6).to({x:88.2,y:-97.5},8).to({rotation:0,x:33,y:-143.5},8).wait(4).to({y:-313.5},3).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.mask_1eye5_mc();
	this.instance_2.setTransform(44,-24.6);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({alpha:1},59).wait(17));

	// animation
	this.instance_3 = new lib.mask_1eye4_mc();
	this.instance_3.setTransform(44,-24.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({alpha:0.012},59).to({_off:true},1).wait(16));

	// animation
	this.instance_4 = new lib.mask_1eye3_mc();
	this.instance_4.setTransform(44.4,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(80));

	// animation
	this.instance_5 = new lib.mask_1eye7_mc();
	this.instance_5.setTransform(42,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-158,226,229.5);
p.frameBounds = [rect, new cjs.Rectangle(-111.2,-158,257.3,229.5), new cjs.Rectangle(-142.5,-158,288.5,229.5), new cjs.Rectangle(-173.7,-158,319.8,229.5), new cjs.Rectangle(-205,-158,351,229.5), new cjs.Rectangle(-205,-166.3,357,237.8), new cjs.Rectangle(-205,-174.9,362.2,246.4), new cjs.Rectangle(-205,-182.8,366.6,254.3), new cjs.Rectangle(-205,-190.8,370.1,262.3), new cjs.Rectangle(-205,-198.2,372.9,269.7), new cjs.Rectangle(-205,-205.4,374.8,276.9), new cjs.Rectangle(-205,-212,375.8,283.5), new cjs.Rectangle(-205,-217.9,376.3,289.4), new cjs.Rectangle(-205,-223.4,376,294.9), new cjs.Rectangle(-205,-228.2,375.3,299.7), new cjs.Rectangle(-205,-224.2,376.6,295.7), new cjs.Rectangle(-205,-220.3,378,291.8), new cjs.Rectangle(-205,-216.5,379.4,288), new cjs.Rectangle(-205,-212.6,380.8,284.1), new cjs.Rectangle(-205,-208.7,382.3,280.2), new cjs.Rectangle(-205,-204.9,383.7,276.4), new cjs.Rectangle(-205,-201.2,385.3,272.7), new cjs.Rectangle(-205,-202.5,386.9,274), new cjs.Rectangle(-205,-204.1,388.6,275.6), new cjs.Rectangle(-205,-205.7,390.3,277.2), new cjs.Rectangle(-205,-207.3,392,278.8), new cjs.Rectangle(-205,-208.8,393.7,280.3), new cjs.Rectangle(-205,-210.4,395.5,281.9), new cjs.Rectangle(-205,-212.2,397.3,283.7), new cjs.Rectangle(-205,-209.5,403.9,281), new cjs.Rectangle(-205,-207,410.7,278.5), new cjs.Rectangle(-205,-204.5,417.4,276), new cjs.Rectangle(-205,-202.2,424.3,273.7), new cjs.Rectangle(-205,-201,418.4,272.5), new cjs.Rectangle(-205,-200,412.6,271.5), new cjs.Rectangle(-205,-199,406.9,270.5), new cjs.Rectangle(-205,-198,401.1,269.5), new cjs.Rectangle(-205,-197,395.4,268.5), new cjs.Rectangle(-205,-196,389.6,267.5), new cjs.Rectangle(-205,-195,383.9,266.5), new cjs.Rectangle(-205,-194.2,378.3,265.7), new cjs.Rectangle(-205,-193.6,383.3,265.1), new cjs.Rectangle(-205,-193.3,388.6,264.8), new cjs.Rectangle(-205,-193,393.8,264.5), new cjs.Rectangle(-205,-192.6,399,264.1), new cjs.Rectangle(-205,-192.3,404.2,263.8), new cjs.Rectangle(-205,-192,409.5,263.5), new cjs.Rectangle(-205,-191.6,414.7,263.1), new cjs.Rectangle(-205,-191.3,419.9,262.8), new cjs.Rectangle(-205,-191.2,425.3,262.7), new cjs.Rectangle(-205,-189.6,420.5,261.1), new cjs.Rectangle(-205,-188.3,415.8,259.8), new cjs.Rectangle(-205,-187,411.1,258.5), new cjs.Rectangle(-205,-185.6,406.5,257.1), new cjs.Rectangle(-205,-184.3,401.8,255.8), new cjs.Rectangle(-205,-183.2,397.3,254.7), new cjs.Rectangle(-205,-184.1,394.9,255.6), new cjs.Rectangle(-205,-185.2,392.5,256.7), new cjs.Rectangle(-205,-186.3,390.1,257.8), new cjs.Rectangle(-205,-187.5,387.7,259), new cjs.Rectangle(-205,-188.6,385.4,260.1), new cjs.Rectangle(-205,-189.7,383,261.2), new cjs.Rectangle(-205,-190.8,380.6,262.3), new cjs.Rectangle(-205,-192.2,378.3,263.7), new cjs.Rectangle(-205,-190.5,378.9,262), new cjs.Rectangle(-205,-187.9,378.5,259.4), new cjs.Rectangle(-205,-184.6,377,256.1), new cjs.Rectangle(-205,-180.2,374.5,251.7), new cjs.Rectangle(-205,-175.4,370.4,246.9), new cjs.Rectangle(-205,-169.7,365.2,241.2), new cjs.Rectangle(-205,-164,358.8,235.5), new cjs.Rectangle(-205,-158,351,229.5), new cjs.Rectangle(-173.7,-158,319.8,229.5), new cjs.Rectangle(-142.5,-158,288.5,229.5), new cjs.Rectangle(-111.2,-158,257.3,229.5), new cjs.Rectangle(-80,-158,226,229.5), new cjs.Rectangle(-80,-214.6,226,286.1), new cjs.Rectangle(-80,-271.3,226,342.8), new cjs.Rectangle(-80,-328,226,399.5), new cjs.Rectangle(-48.5,-53.5,181,125)];


(lib.animation_mask1_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.marker1_2_mc();
	this.instance.setTransform(-49,-143);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

	// animation
	this.instance_1 = new lib.marker1_1_mc();
	this.instance_1.setTransform(33,-143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13));

	// animation
	this.instance_2 = new lib.mask_1eye4_mc();
	this.instance_2.setTransform(38.3,-24.6,0.229,1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({scaleX:1,x:44},6).wait(1));

	// animation
	this.instance_3 = new lib.mask_1eye3_mc();
	this.instance_3.setTransform(38.4,23,0.229,1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({scaleX:1,x:44.4},6).wait(1));

	// animation
	this.instance_4 = new lib.mask_1eye8_mc();
	this.instance_4.setTransform(44.5,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.2,x:38},6).to({_off:true},1).wait(6));

	// animation
	this.instance_5 = new lib.mask_1eye7_mc();
	this.instance_5.setTransform(42,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.2,x:37.5},6).to({scaleX:1,x:42},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-158,226,229.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_mask1_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.marker1_2_mc();
	this.instance.setTransform(-49,-143);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21));

	// animation
	this.instance_1 = new lib.marker1_1_mc();
	this.instance_1.setTransform(33,-143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21));

	// animation
	this.instance_2 = new lib.mask_1eye8_mc();
	this.instance_2.setTransform(44.4,164);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:44.5,y:9.1},9).wait(12));

	// animation
	this.instance_3 = new lib.rastr1_mc();
	this.instance_3.setTransform(45.5,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({alpha:0.012},10).to({_off:true},1).wait(1));

	// animation
	this.instance_4 = new lib.mask_1eye7_mc();
	this.instance_4.setTransform(42,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-158,226,379);
p.frameBounds = [rect, new cjs.Rectangle(-80,-158,226,361.8), new cjs.Rectangle(-80,-158,226,344.6), new cjs.Rectangle(-80,-158,226,327.4), new cjs.Rectangle(-80,-158,226,310.2), new cjs.Rectangle(-80,-158,226,292.9), new cjs.Rectangle(-80,-158,226,275.7), new cjs.Rectangle(-80,-158,226,258.5), new cjs.Rectangle(-80,-158,226,241.3), rect=new cjs.Rectangle(-80,-158,226,229.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_mask1_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.glue_mc();
	this.instance.setTransform(227,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-73.5,x:144,y:6.1},10).to({rotation:-132.4,x:116,y:-78.9},10).wait(29).to({rotation:-32.2,x:375,y:-100.9,alpha:0.012},11).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.kaplya1_mc();
	this.instance_1.setTransform(43.4,-1.7,0.245,0.245);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({scaleX:0.56,scaleY:0.56,x:46.4,y:34.3,alpha:0.012},9).to({scaleX:0.25,scaleY:0.25,x:43.4,y:-1.7,alpha:1},1).to({scaleX:0.56,scaleY:0.56,x:46.4,y:34.3,alpha:0.012},9).to({scaleX:0.25,scaleY:0.25,x:43.4,y:-1.7,alpha:1},1).to({scaleX:0.56,scaleY:0.56,x:46.4,y:34.3,alpha:0.012},9).to({_off:true},1).wait(12));

	// animation
	this.instance_2 = new lib.rastr1_mc();
	this.instance_2.setTransform(45.5,29.4);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).to({alpha:1},15).wait(13));

	// animation
	this.instance_3 = new lib.marker1_2_mc();
	this.instance_3.setTransform(-49,-143);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(62));

	// animation
	this.instance_4 = new lib.marker1_1_mc();
	this.instance_4.setTransform(33,-143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(62));

	// animation
	this.instance_5 = new lib.mask_1eye8_mc();
	this.instance_5.setTransform(44.4,164);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(62));

	// animation
	this.instance_6 = new lib.mask_1eye7_mc();
	this.instance_6.setTransform(42,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-158,339.5,379);
p.frameBounds = [rect, new cjs.Rectangle(-80,-158,343.6,379), new cjs.Rectangle(-80,-158,346.9,379), new cjs.Rectangle(-80,-158,349.7,379), new cjs.Rectangle(-80,-158,351,379), new cjs.Rectangle(-80,-158,351.1,379), new cjs.Rectangle(-80,-158,350.1,379), new cjs.Rectangle(-80,-158,347.3,379), new cjs.Rectangle(-80,-158,342.9,379), new cjs.Rectangle(-80,-158,336.8,379), new cjs.Rectangle(-80,-158,329.1,379), new cjs.Rectangle(-80,-158,325.5,379), new cjs.Rectangle(-80,-158,320.7,379), new cjs.Rectangle(-80,-158,316.2,379), new cjs.Rectangle(-80,-158,316,379), new cjs.Rectangle(-80,-158,314.7,379), new cjs.Rectangle(-80,-158,312.3,379), new cjs.Rectangle(-80,-158,308.7,379), new cjs.Rectangle(-80,-158,304.1,379), new cjs.Rectangle(-80,-158,298.3,379), new cjs.Rectangle(-80,-170.4,291.8,391.5), rect=new cjs.Rectangle(-80,-170.3,291.6,391.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-80,-170.4,291.8,391.5), new cjs.Rectangle(-80,-162.9,320.8,384), new cjs.Rectangle(-80,-158,347.5,379), new cjs.Rectangle(-80,-158,371.6,379), new cjs.Rectangle(-80,-158,392.9,379), new cjs.Rectangle(-80,-158,415.3,379), new cjs.Rectangle(-80,-158,441.8,379), new cjs.Rectangle(-80,-159.3,465.6,380.4), new cjs.Rectangle(-80,-173.3,486.9,394.3), new cjs.Rectangle(-80,-185.4,505.5,406.5), new cjs.Rectangle(-80,-195.2,521.7,416.3), new cjs.Rectangle(-80,-202.9,535.8,423.9), new cjs.Rectangle(-80,-158,226,379)];


(lib.animation_mask1_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.marker1_2_mc();
	this.instance.setTransform(-49,-143);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11));

	// animation
	this.instance_1 = new lib.marker1_1_mc();
	this.instance_1.setTransform(33,-143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11));

	// animation
	this.instance_2 = new lib.mask_1eye8_mc();
	this.instance_2.setTransform(44.4,164);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11));

	// animation
	this.instance_3 = new lib.glue_mc();
	this.instance_3.setTransform(227,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11));

	// animation
	this.instance_4 = new lib.mask_1eye3_mc();
	this.instance_4.setTransform(44.1,23.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.16,x:39.4},5).to({_off:true},1).wait(5));

	// animation
	this.instance_5 = new lib.mask_1eye7_mc();
	this.instance_5.setTransform(42,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.16,x:39},5).to({scaleX:1,x:42},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-158,339.5,379);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_mask1_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.marker1_2_mc();
	this.instance.setTransform(-49,-342);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70).to({_off:false},0).to({y:-143},15).wait(1));

	// animation
	this.instance_1 = new lib.marker1_1_mc();
	this.instance_1.setTransform(33,-342.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70).to({_off:false},0).to({y:-143.5},15).wait(1));

	// animation
	this.instance_2 = new lib.mask_1eye8_mc();
	this.instance_2.setTransform(44.4,367);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(70).to({_off:false},0).to({y:164},15).wait(1));

	// animation
	this.instance_3 = new lib.glue_mc();
	this.instance_3.setTransform(569,8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70).to({_off:false},0).to({x:227},15).wait(1));

	// animation
	this.instance_4 = new lib.mask_1eye51_mc();
	this.instance_4.setTransform(43.9,-24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(70).to({rotation:35.2,x:48.9,y:229.1,alpha:0.012},8).to({_off:true},1).wait(7));

	// animation
	this.instance_5 = new lib.skalpel_mc();
	this.instance_5.setTransform(-154.7,-28,1,1,-154.5,0,0,14.5,156);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-202,x:-44.2,y:-157.5},14).to({rotation:-186.6,x:32.3,y:-176.5},8).to({rotation:-135.6,x:183.3,y:-125.5},9).to({rotation:-43.1,x:169.3,y:81.6},5).to({rotation:-6.3,x:72.3,y:134.7},6).to({regX:14.4,regY:156.1,rotation:9.6,x:8.2,y:133.7},6).to({rotation:33.6,x:-65.8,y:104.7},9).to({rotation:81.3,x:-132.7,y:2.6},7).to({regX:14.5,rotation:126.2,x:-92.7,y:-118.3},6).to({x:-414.7,y:-239.3,alpha:0.012},14).to({_off:true},1).wait(1));

	// animation
	this.instance_6 = new lib.mask_1eye3_mc();
	this.instance_6.setTransform(44.1,23.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(86));

	// animation
	this.instance_7 = new lib.mask_1eye2_mc();
	this.instance_7.setTransform(44,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:0.012},43).to({_off:true},1).wait(42));

	// animation
	this.instance_8 = new lib.mask_1eye7_mc();
	this.instance_8.setTransform(42,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-234.8,-175,367.4,294.2);
p.frameBounds = [rect, new cjs.Rectangle(-218.6,-187.1,351.2,299.7), new cjs.Rectangle(-202.2,-198.8,334.7,304.7), new cjs.Rectangle(-186,-209.9,318.6,308.4), new cjs.Rectangle(-169.1,-220.5,301.7,311.1), new cjs.Rectangle(-152.1,-230.6,284.6,312.8), new cjs.Rectangle(-135.4,-240,267.9,313.3), new cjs.Rectangle(-118.1,-249,250.6,320.5), new cjs.Rectangle(-110.3,-258.2,242.8,329.7), new cjs.Rectangle(-111.7,-267.8,244.3,339.3), new cjs.Rectangle(-112.7,-276.8,245.2,348.3), new cjs.Rectangle(-113.9,-285.2,246.4,356.7), new cjs.Rectangle(-115,-293.1,247.6,364.6), new cjs.Rectangle(-115.5,-300.5,248.1,372), new cjs.Rectangle(-116.2,-307.6,248.8,379.1), new cjs.Rectangle(-101.7,-311.3,234.3,382.8), new cjs.Rectangle(-87.2,-315,219.7,386.5), new cjs.Rectangle(-72.6,-318.3,205.2,389.8), new cjs.Rectangle(-58.5,-321.6,191,393.1), new cjs.Rectangle(-48.5,-324.7,181,396.2), new cjs.Rectangle(-48.5,-327.7,181,399.2), new cjs.Rectangle(-48.5,-330.4,181,401.9), new cjs.Rectangle(-48.5,-333.2,181,404.7), new cjs.Rectangle(-48.5,-327,181,398.5), new cjs.Rectangle(-48.5,-321.8,181,393.3), new cjs.Rectangle(-48.5,-315.5,181,387), new cjs.Rectangle(-48.5,-307.6,204.9,379.1), new cjs.Rectangle(-48.5,-298.4,235.6,369.9), new cjs.Rectangle(-48.5,-287.6,265.9,359.1), new cjs.Rectangle(-48.5,-275.3,295.4,346.8), new cjs.Rectangle(-48.5,-261.8,323.5,333.3), new cjs.Rectangle(-48.5,-247.2,351.2,318.7), new cjs.Rectangle(-48.5,-167.8,374.4,239.3), new cjs.Rectangle(-48.5,-80,382.6,151.5), new cjs.Rectangle(-48.5,-53.5,379.5,125), new cjs.Rectangle(-48.5,-53.5,364.6,180.6), new cjs.Rectangle(-48.5,-53.5,335,259), new cjs.Rectangle(-48.5,-53.5,306.7,277.3), new cjs.Rectangle(-48.5,-53.5,277.7,294.1), new cjs.Rectangle(-48.5,-53.5,247.4,309.4), new cjs.Rectangle(-48.5,-53.5,216.5,322.9), new cjs.Rectangle(-48.5,-53.5,184.5,334.8), new cjs.Rectangle(-48.5,-53.5,181,344.8), new cjs.Rectangle(-48.5,-53.5,181,344.7), rect=new cjs.Rectangle(-48.5,-53.5,181,344.1), rect, new cjs.Rectangle(-48.5,-53.5,181,344.2), new cjs.Rectangle(-48.5,-53.5,181,343.9), new cjs.Rectangle(-48.5,-53.5,181,343.4), new cjs.Rectangle(-48.5,-53.5,181,339.5), new cjs.Rectangle(-61.9,-53.5,194.5,335.2), new cjs.Rectangle(-77,-53.5,209.6,330.6), new cjs.Rectangle(-92.1,-53.5,224.6,325.6), new cjs.Rectangle(-106.5,-53.5,239.1,320.4), new cjs.Rectangle(-121.3,-53.5,253.9,314.7), new cjs.Rectangle(-135.8,-53.5,268.4,308.8), new cjs.Rectangle(-149.8,-53.5,282.3,302.7), new cjs.Rectangle(-164,-53.5,296.6,296.2), new cjs.Rectangle(-187.2,-53.5,319.7,271.8), new cjs.Rectangle(-208.9,-53.5,341.5,245.7), new cjs.Rectangle(-229.1,-53.5,361.7,217.6), new cjs.Rectangle(-247.2,-53.5,379.8,188.4), new cjs.Rectangle(-263.2,-53.5,395.8,158), new cjs.Rectangle(-277.2,-53.5,409.8,126.6), new cjs.Rectangle(-289,-53.5,421.6,125), new cjs.Rectangle(-282.3,-53.5,414.8,125), new cjs.Rectangle(-275.9,-69,408.5,140.5), new cjs.Rectangle(-267.5,-108.9,400,180.4), new cjs.Rectangle(-256.6,-147.5,389.2,219), new cjs.Rectangle(-243.1,-185.4,375.6,256.9), new cjs.Rectangle(-227.1,-357,828.6,781), new cjs.Rectangle(-250,-343.7,828.7,754.2), new cjs.Rectangle(-273,-330.4,828.9,727.4), new cjs.Rectangle(-296,-317.2,829.1,700.6), new cjs.Rectangle(-319,-303.9,829.3,673.8), new cjs.Rectangle(-342,-290.6,829.5,647), new cjs.Rectangle(-365,-277.4,829.7,620.2), new cjs.Rectangle(-388,-282.3,829.9,611.6), new cjs.Rectangle(-410.9,-290.9,830,606.7), new cjs.Rectangle(-433.9,-299.6,830.3,601.8), new cjs.Rectangle(-456.9,-308.2,830.5,596.9), new cjs.Rectangle(-479.9,-316.8,830.7,592), new cjs.Rectangle(-502.9,-325.5,830.9,587.1), new cjs.Rectangle(-525.9,-334.1,831.1,582.2), new cjs.Rectangle(-549.1,-343.1,831.4,577.7), new cjs.Rectangle(-80,-158,339.5,379)];


(lib.animation_mask1_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.skalpel_mc();
	this.instance.setTransform(-747.6,-28,1,1,-154.5,0,0,14.5,156);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-154.7},19).wait(1));

	// animation
	this.instance_1 = new lib.mask_1eye2_mc();
	this.instance_1.setTransform(-548.9,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:44},19).wait(1));

	// animation
	this.instance_2 = new lib.mask_1eye7_mc();
	this.instance_2.setTransform(-550.9,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:42},19).wait(1));

	// animation
	this.instance_3 = new lib.mask_1_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:625.9},18).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-827.8,-275,1050.3,550);
p.frameBounds = [rect, new cjs.Rectangle(-796.1,-275,1053.4,550), new cjs.Rectangle(-764.9,-275,1057,550), new cjs.Rectangle(-733.7,-275,1060.6,550), new cjs.Rectangle(-702.5,-275,1064.1,550), new cjs.Rectangle(-671.3,-275,1067.6,550), new cjs.Rectangle(-640.1,-275,1071.2,550), new cjs.Rectangle(-608.9,-275,1074.8,550), new cjs.Rectangle(-577.7,-275,1078.4,550), new cjs.Rectangle(-546.5,-275,1081.9,550), new cjs.Rectangle(-515.2,-275,1085.5,550), new cjs.Rectangle(-484,-275,1089.1,550), new cjs.Rectangle(-452.8,-275,1092.6,550), new cjs.Rectangle(-421.6,-275,1096.2,550), new cjs.Rectangle(-390.4,-275,1099.8,550), new cjs.Rectangle(-359.2,-275,1103.3,550), new cjs.Rectangle(-328,-275,1106.9,550), new cjs.Rectangle(-296.8,-275,1110.4,550), new cjs.Rectangle(-265.6,-275,1114,550), new cjs.Rectangle(-234.8,-175,367.4,294.2)];


(lib.animation_mask1_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mask_1_8_mc();
	this.instance.setTransform(-2,188.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({rotation:13.2,y:325.9,alpha:0.012},10).to({_off:true},1).wait(7));

	// animation
	this.instance_1 = new lib.skalpel_mc();
	this.instance_1.setTransform(-238.2,-109,1,1,0,124.3,-55.7,14.6,156.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({skewX:152.7,skewY:-27.3,x:-38.2,y:40},9).to({x:-36.2,y:59},10).to({regX:14.5,skewX:173.7,skewY:-6.3,x:-71.3,y:51},22).to({skewX:152.3,skewY:-27.7,x:-307.2,y:41,alpha:0.012},16).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.mask_1_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59));

	// animation
	this.instance_3 = new lib.mask_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0.012},42).to({_off:true},1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-375.2,-275,597.7,550);
p.frameBounds = [rect, new cjs.Rectangle(-348.6,-275,571.1,550), new cjs.Rectangle(-321.5,-275,544,550), new cjs.Rectangle(-293.9,-275,516.4,550), new cjs.Rectangle(-266.3,-275,488.8,550), new cjs.Rectangle(-238.1,-275,460.6,550), rect=new cjs.Rectangle(-222.5,-275,445,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-222.5,-275,445,558.2), new cjs.Rectangle(-230.3,-275,452.8,572.8), new cjs.Rectangle(-248.7,-275,471.2,587.3), new cjs.Rectangle(-266.7,-275,489.2,601.9), new cjs.Rectangle(-284.6,-275,507.1,616.5), new cjs.Rectangle(-303,-275,525.5,550), new cjs.Rectangle(-320.8,-275,543.3,550), new cjs.Rectangle(-338.6,-275,561.1,550), new cjs.Rectangle(-356.8,-275,579.3,550), new cjs.Rectangle(-374.5,-275,597,550), new cjs.Rectangle(-392.7,-275,615.2,550), new cjs.Rectangle(-222.5,-275,445,550)];


(lib.animation_mask1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mask_1_6_mc();
	this.instance.setTransform(-109,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100).to({rotation:-10.7,x:-125,y:197.9,alpha:0.012},11).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.skalpel_mc();
	this.instance_1.setTransform(187,-52,1,1,-114.8,0,0,14.5,156);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:0,skewX:114.8,skewY:-65.2,x:-13.1},1).to({x:-192.1,y:-73},8).to({regX:14.6,skewX:128.8,skewY:-51.2,x:-192},7).to({x:-272,y:-63},13).to({regY:156.1,skewX:72.9,skewY:-107.1,x:-276.1,y:103},9).to({regY:156,skewX:41.6,skewY:-138.4,x:-208,y:180},8).to({skewX:-5.6,skewY:-185.6,x:-65.1,y:200},11).to({regY:156.1,skewX:-81.8,skewY:-261.8,x:80,y:62.1},11).to({regY:156,skewX:-129.8,skewY:-309.8,x:27,y:-65.9},6).to({regX:14.5,skewX:-165.2,skewY:-345.2,x:-74.2,y:-112},8).to({skewX:-216.7,skewY:-396.7,x:-218.2,y:-94.9},11).to({regX:14.6,regY:156.1,skewX:-235.7,skewY:-415.7,x:-238.2,y:-109},7).wait(13));

	// animation
	this.instance_2 = new lib.mask_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(113));

	// animation
	this.instance_3 = new lib.mask_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0.012},57).to({_off:true},1).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.5,-275,557.3,550);
p.frameBounds = [rect, rect=new cjs.Rectangle(-222.5,-275,445,550), rect, rect, new cjs.Rectangle(-227.7,-275,450.2,550), new cjs.Rectangle(-250.1,-275,472.6,550), new cjs.Rectangle(-272.5,-275,495,550), new cjs.Rectangle(-294.8,-275,517.3,550), new cjs.Rectangle(-317.2,-275,539.7,550), new cjs.Rectangle(-339.8,-275,562.3,550), new cjs.Rectangle(-337.6,-275,560.1,550), new cjs.Rectangle(-335.5,-275,558,550), new cjs.Rectangle(-333.2,-275,555.7,550), new cjs.Rectangle(-330.8,-275,553.3,550), new cjs.Rectangle(-328.2,-275,550.7,550), new cjs.Rectangle(-325.5,-275,548,550), new cjs.Rectangle(-322.8,-275,545.3,550), new cjs.Rectangle(-328.7,-275,551.2,550), new cjs.Rectangle(-334.8,-275,557.3,550), new cjs.Rectangle(-341,-275,563.5,550), new cjs.Rectangle(-347.1,-275,569.6,550), new cjs.Rectangle(-353.3,-275,575.8,550), new cjs.Rectangle(-359.4,-275,581.9,550), new cjs.Rectangle(-365.6,-275,588.1,550), new cjs.Rectangle(-371.8,-275,594.3,550), new cjs.Rectangle(-377.9,-275,600.4,550), new cjs.Rectangle(-384.1,-275,606.6,550), new cjs.Rectangle(-390.2,-275,612.7,550), new cjs.Rectangle(-396.4,-275,618.8,550), new cjs.Rectangle(-402.8,-275,625.3,550), new cjs.Rectangle(-411.6,-275,634.1,550), new cjs.Rectangle(-419,-275,641.5,550), new cjs.Rectangle(-424.8,-275,647.3,550), new cjs.Rectangle(-428.7,-275,651.2,550), new cjs.Rectangle(-430.7,-275,653.2,550), new cjs.Rectangle(-431,-275,653.5,550), new cjs.Rectangle(-431.7,-275,654.2,550), new cjs.Rectangle(-431.5,-275,654,550), new cjs.Rectangle(-429.4,-275,651.8,550), new cjs.Rectangle(-418.1,-275,640.6,550), new cjs.Rectangle(-406.5,-275,629,550), new cjs.Rectangle(-393.9,-275,616.4,550), new cjs.Rectangle(-380.6,-275,603.1,550), new cjs.Rectangle(-367.1,-275,589.6,550), new cjs.Rectangle(-352.5,-275,575,550), new cjs.Rectangle(-337.8,-275,560.3,564.8), new cjs.Rectangle(-322.4,-275,544.9,581.4), new cjs.Rectangle(-300.9,-275,523.4,589.4), new cjs.Rectangle(-279,-275,501.5,597.1), new cjs.Rectangle(-256.2,-275,478.7,604.2), new cjs.Rectangle(-233.3,-275,455.8,610.3), new cjs.Rectangle(-222.5,-275,445,615.5), new cjs.Rectangle(-222.5,-275,445,619.9), new cjs.Rectangle(-222.5,-275,445,623.4), new cjs.Rectangle(-222.5,-275,445,626.1), new cjs.Rectangle(-222.5,-275,445,627.8), new cjs.Rectangle(-222.5,-275,445,629.5), new cjs.Rectangle(-222.5,-275,445,631.7), new cjs.Rectangle(-222.5,-275,445,617.8), new cjs.Rectangle(-222.5,-275,445,601.7), new cjs.Rectangle(-222.5,-275,445,583.4), new cjs.Rectangle(-222.5,-275,445,562.9), rect=new cjs.Rectangle(-222.5,-275,445,550), rect, rect, rect, rect, rect, new cjs.Rectangle(-222.5,-275,458.9,550), new cjs.Rectangle(-222.5,-275,449.6,550), rect=new cjs.Rectangle(-222.5,-275,445,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-227.4,-275,449.9,550), new cjs.Rectangle(-252.2,-275,474.7,550), new cjs.Rectangle(-276.4,-275,498.9,550), new cjs.Rectangle(-300.1,-275,522.6,550), new cjs.Rectangle(-323,-275,545.5,550), new cjs.Rectangle(-331.1,-275,553.6,550), new cjs.Rectangle(-339.1,-275,561.6,550), new cjs.Rectangle(-346.9,-275,569.3,550), new cjs.Rectangle(-354.4,-275,576.9,550), new cjs.Rectangle(-361.7,-275,584.2,550), new cjs.Rectangle(-368.4,-275,590.9,550), rect=new cjs.Rectangle(-375.2,-275,597.7,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_mask1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.mask_1_4_mc();
	this.instance.setTransform(109,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(94).to({rotation:25.2,x:119,y:241.9,alpha:0.012},11).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.skalpel_mc();
	this.instance_1.setTransform(187,-52,1,1,-114.8,0,0,14.5,156);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-127.5,x:174,y:-61},4).to({rotation:-154.2,x:224,y:-106},11).to({rotation:-115.2,x:286,y:-29.9},5).to({regX:14.4,rotation:-66.8,x:271.1,y:132.1},14).to({regY:155.9,rotation:-39.6,x:208,y:195.1},8).to({regY:156,rotation:-6.1,x:99,y:217.2},14).to({rotation:23.1,x:6,y:177.3},12).to({rotation:75.1,x:-72,y:77.4},7).to({rotation:149.1,x:-8,y:-85.6},10).to({regX:14.5,rotation:245.2,x:187,y:-52},9).wait(13));

	// animation
	this.instance_2 = new lib.mask_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(107));

	// animation
	this.instance_3 = new lib.mask_1_2_mc();
	this.instance_3.setTransform(0,0,1,1,0,0,0,222.5,275);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0.012},42).to({_off:true},1).wait(64));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.5,-275,557.3,550);
p.frameBounds = [rect, new cjs.Rectangle(-222.5,-275,550.7,550), new cjs.Rectangle(-222.5,-275,543.9,550), new cjs.Rectangle(-222.5,-275,536.6,550), new cjs.Rectangle(-222.5,-275,529.1,550), new cjs.Rectangle(-222.5,-275,529.9,550), new cjs.Rectangle(-222.5,-275,530.5,550), new cjs.Rectangle(-222.5,-275,530.8,550), new cjs.Rectangle(-222.5,-275,531.3,550), new cjs.Rectangle(-222.5,-275,531.2,550), new cjs.Rectangle(-222.5,-275,530.9,550), new cjs.Rectangle(-222.5,-275,530.4,550), new cjs.Rectangle(-222.5,-275,530,550), new cjs.Rectangle(-222.5,-275,529.2,550), new cjs.Rectangle(-222.5,-275,528.2,550), new cjs.Rectangle(-222.5,-275,527.4,550), new cjs.Rectangle(-222.5,-275,557.2,550), new cjs.Rectangle(-222.5,-275,585.2,550), new cjs.Rectangle(-222.5,-275,611.1,550), new cjs.Rectangle(-222.5,-275,634.6,550), new cjs.Rectangle(-222.5,-275,655.8,550), new cjs.Rectangle(-222.5,-275,657.6,550), new cjs.Rectangle(-222.5,-275,658.9,550), new cjs.Rectangle(-222.5,-275,659.8,550), new cjs.Rectangle(-222.5,-275,660,550), new cjs.Rectangle(-222.5,-275,659.7,550), new cjs.Rectangle(-222.5,-275,658.8,550), new cjs.Rectangle(-222.5,-275,657.3,550), new cjs.Rectangle(-222.5,-275,656.5,550), new cjs.Rectangle(-222.5,-275,655.6,550), new cjs.Rectangle(-222.5,-275,654.1,550), new cjs.Rectangle(-222.5,-275,652.1,550), new cjs.Rectangle(-222.5,-275,649.4,550), new cjs.Rectangle(-222.5,-275,646.2,550), new cjs.Rectangle(-222.5,-275,642.7,550), new cjs.Rectangle(-222.5,-275,631.6,550), new cjs.Rectangle(-222.5,-275,620,550), new cjs.Rectangle(-222.5,-275,608.1,550), new cjs.Rectangle(-222.5,-275,595.5,550), new cjs.Rectangle(-222.5,-275,582.7,558.1), new cjs.Rectangle(-222.5,-275,569.1,572.3), new cjs.Rectangle(-222.5,-275,555.2,586.3), new cjs.Rectangle(-222.5,-275,541.2,599.7), new cjs.Rectangle(-222.5,-275,528.5,604.6), new cjs.Rectangle(-222.5,-275,516,609.5), new cjs.Rectangle(-222.5,-275,502.9,614.3), new cjs.Rectangle(-222.5,-275,489.7,618.8), new cjs.Rectangle(-222.5,-275,476.7,622.9), new cjs.Rectangle(-222.5,-275,463.2,626.9), new cjs.Rectangle(-222.5,-275,450,630.5), new cjs.Rectangle(-222.5,-275,445,634), new cjs.Rectangle(-222.5,-275,445,637.1), new cjs.Rectangle(-222.5,-275,445,640), new cjs.Rectangle(-222.5,-275,445,642.7), new cjs.Rectangle(-222.5,-275,445,645), new cjs.Rectangle(-222.5,-275,445,647.1), new cjs.Rectangle(-222.5,-275,445,648.9), new cjs.Rectangle(-222.5,-275,445,645.5), new cjs.Rectangle(-222.5,-275,445,641.8), new cjs.Rectangle(-222.5,-275,445,638.5), new cjs.Rectangle(-222.5,-275,445,635.5), new cjs.Rectangle(-222.5,-275,445,632.3), new cjs.Rectangle(-222.5,-275,445,628.6), new cjs.Rectangle(-222.5,-275,445,624.9), new cjs.Rectangle(-222.5,-275,445,620.8), new cjs.Rectangle(-222.5,-275,445,616.3), new cjs.Rectangle(-222.5,-275,445,611.6), new cjs.Rectangle(-222.5,-275,445,606.7), new cjs.Rectangle(-222.5,-275,445,601.6), new cjs.Rectangle(-222.5,-275,445,579.7), new cjs.Rectangle(-222.5,-275,445,555.8), rect=new cjs.Rectangle(-222.5,-275,445,550), rect, rect, rect, new cjs.Rectangle(-226.4,-275,448.9,550), rect=new cjs.Rectangle(-222.5,-275,445,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-222.5,-275,484.4,550), new cjs.Rectangle(-222.5,-275,523.2,550), rect=new cjs.Rectangle(-222.5,-275,557.3,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-222.5,-275,557.3,563.8), new cjs.Rectangle(-222.5,-275,557.3,583.4), new cjs.Rectangle(-222.5,-275,557.3,550)];


(lib.animation_mask1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.skalpel_mc();
	this.instance.setTransform(286,43,1,1,0,0,0,14.5,156);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-114.8,x:187,y:-52},9).wait(1));

	// animation
	this.instance_1 = new lib.mask_1_2_mc();
	this.instance_1.setTransform(0,0,1,1,0,0,0,222.5,275);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.5,-275,523,550);
p.frameBounds = [rect, new cjs.Rectangle(-222.5,-275,546.1,550), new cjs.Rectangle(-222.5,-275,566.8,550), new cjs.Rectangle(-222.5,-275,583.4,550), new cjs.Rectangle(-222.5,-275,594.9,550), new cjs.Rectangle(-222.5,-275,599.8,550), new cjs.Rectangle(-222.5,-275,597.6,550), new cjs.Rectangle(-222.5,-275,587.7,550), new cjs.Rectangle(-222.5,-275,575.9,550), new cjs.Rectangle(-222.5,-275,557.3,550)];


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


(lib.anim_decor_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.decor_title_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({rotation:-20},10).to({rotation:20},20).to({rotation:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111,-132,220,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-115.5,-135.7,226.2,187.5), new cjs.Rectangle(-119.5,-138.9,231.4,194.2), new cjs.Rectangle(-124.1,-142.6,237.5,202), new cjs.Rectangle(-127.8,-145.5,242.3,208.2), new cjs.Rectangle(-131.8,-148.5,247.4,214.8), new cjs.Rectangle(-135.9,-151.6,252.5,221.7), new cjs.Rectangle(-139.2,-154,256.4,227.2), new cjs.Rectangle(-142.6,-156.5,260.6,233), new cjs.Rectangle(-145.9,-158.8,264.3,238.5), new cjs.Rectangle(-149.4,-161.3,268.3,244.4), new cjs.Rectangle(-145.9,-158.8,264.3,238.5), new cjs.Rectangle(-142.6,-156.5,260.5,233), new cjs.Rectangle(-139.5,-154.3,256.9,227.7), new cjs.Rectangle(-135.9,-151.6,252.5,221.7), new cjs.Rectangle(-131.8,-148.5,247.4,214.8), new cjs.Rectangle(-127.8,-145.5,242.3,208.2), new cjs.Rectangle(-123.7,-142.3,237.1,201.3), new cjs.Rectangle(-119.9,-139.2,232,194.9), new cjs.Rectangle(-115.5,-135.7,226.2,187.5), new cjs.Rectangle(-110.9,-131.9,220,180), new cjs.Rectangle(-112.6,-135.7,226.2,187.5), new cjs.Rectangle(-114,-139.3,232,194.9), new cjs.Rectangle(-115.2,-142.5,237,201.3), new cjs.Rectangle(-116.4,-145.7,242.3,208.2), new cjs.Rectangle(-117.4,-148.9,247.3,214.8), new cjs.Rectangle(-118.4,-152,252.5,221.7), new cjs.Rectangle(-119.2,-154.8,256.9,227.7), new cjs.Rectangle(-119.7,-157.1,260.5,233), new cjs.Rectangle(-120.2,-159.4,264.3,238.5), new cjs.Rectangle(-120.7,-162,268.3,244.4), new cjs.Rectangle(-120.2,-159.4,264.3,238.5), new cjs.Rectangle(-119.7,-157.1,260.5,233), new cjs.Rectangle(-119.1,-154.5,256.5,227.2), new cjs.Rectangle(-118.4,-152.1,252.5,221.7), new cjs.Rectangle(-117.5,-148.9,247.4,214.8), new cjs.Rectangle(-116.4,-145.8,242.3,208.2), new cjs.Rectangle(-115.3,-142.8,237.5,202), new cjs.Rectangle(-113.8,-139,231.4,194.2), new cjs.Rectangle(-112.6,-135.7,226.2,187.6), new cjs.Rectangle(-111,-132,220,180)];


(lib.accessories_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.45,0.45,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:22,end:59});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// curtain_1
	this.instance = new lib.curtain_1_mc();
	this.instance.setTransform(-1000,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({x:-944.4},0).wait(1).to({x:-888.9},0).wait(1).to({x:-833.3},0).wait(1).to({x:-777.7},0).wait(1).to({x:-722.2},0).wait(1).to({x:-666.6},0).wait(1).to({x:-611.1},0).wait(1).to({x:-555.5},0).wait(1).to({x:-500},0).wait(1).to({x:-444.4},0).wait(1).to({x:-388.9},0).wait(1).to({x:-333.3},0).wait(1).to({x:-277.7},0).wait(1).to({x:-222.2},0).wait(1).to({x:-166.6},0).wait(1).to({x:-111.1},0).wait(1).to({x:-55.5},0).wait(1).to({x:0},0).wait(10).to({x:-33.3},0).wait(1).to({x:-66.6},0).wait(1).to({x:-100},0).wait(1).to({x:-133.3},0).wait(1).to({x:-166.6},0).wait(1).to({x:-200},0).wait(1).to({x:-233.3},0).wait(1).to({x:-266.6},0).wait(1).to({x:-300},0).wait(1).to({x:-333.3},0).wait(1).to({x:-366.6},0).wait(1).to({x:-400},0).wait(1).to({x:-433.3},0).wait(1).to({x:-466.6},0).wait(1).to({x:-500},0).wait(1).to({x:-533.3},0).wait(1).to({x:-566.6},0).wait(1).to({x:-600},0).wait(1).to({x:-633.3},0).wait(1).to({x:-666.6},0).wait(1).to({x:-700},0).wait(1).to({x:-733.3},0).wait(1).to({x:-766.6},0).wait(1).to({x:-800},0).wait(1).to({x:-833.3},0).wait(1).to({x:-866.6},0).wait(1).to({x:-900},0).wait(1).to({x:-933.3},0).wait(1).to({x:-966.6},0).wait(1).to({x:-1000},0).wait(2));

	// curtain_2
	this.instance_1 = new lib.curtain_2_mc();
	this.instance_1.setTransform(1000,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({x:944.5},0).wait(1).to({x:888.9},0).wait(1).to({x:833.4},0).wait(1).to({x:777.8},0).wait(1).to({x:722.2},0).wait(1).to({x:666.7},0).wait(1).to({x:611.1},0).wait(1).to({x:555.6},0).wait(1).to({x:500},0).wait(1).to({x:444.5},0).wait(1).to({x:388.9},0).wait(1).to({x:333.4},0).wait(1).to({x:277.8},0).wait(1).to({x:222.3},0).wait(1).to({x:166.7},0).wait(1).to({x:111.1},0).wait(1).to({x:55.6},0).wait(1).to({x:0},0).wait(10).to({x:33.4},0).wait(1).to({x:66.7},0).wait(1).to({x:100},0).wait(1).to({x:133.4},0).wait(1).to({x:166.7},0).wait(1).to({x:200},0).wait(1).to({x:233.4},0).wait(1).to({x:266.7},0).wait(1).to({x:300},0).wait(1).to({x:333.4},0).wait(1).to({x:366.7},0).wait(1).to({x:400},0).wait(1).to({x:433.4},0).wait(1).to({x:466.7},0).wait(1).to({x:500},0).wait(1).to({x:533.4},0).wait(1).to({x:566.7},0).wait(1).to({x:600},0).wait(1).to({x:633.4},0).wait(1).to({x:666.7},0).wait(1).to({x:700},0).wait(1).to({x:733.4},0).wait(1).to({x:766.7},0).wait(1).to({x:800},0).wait(1).to({x:833.4},0).wait(1).to({x:866.7},0).wait(1).to({x:900},0).wait(1).to({x:933.4},0).wait(1).to({x:966.7},0).wait(1).to({x:1000},0).wait(2));

	// bg
	this.instance_2 = new lib.curtain_3_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).wait(9).to({_off:true},1).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1000,0,3200,600);
p.frameBounds = [rect, rect, new cjs.Rectangle(-944.4,0,3088.9,600), new cjs.Rectangle(-888.9,0,2977.8,600), new cjs.Rectangle(-833.3,0,2866.7,600), new cjs.Rectangle(-777.7,0,2755.5,600), new cjs.Rectangle(-722.2,0,2644.4,600), new cjs.Rectangle(-666.6,0,2533.3,600), new cjs.Rectangle(-611.1,0,2422.2,600), new cjs.Rectangle(-555.5,0,2311.1,600), new cjs.Rectangle(-500,0,2200,600), new cjs.Rectangle(-444.4,0,2088.9,600), new cjs.Rectangle(-388.9,0,1977.8,600), new cjs.Rectangle(-333.3,0,1866.7,600), new cjs.Rectangle(-277.7,0,1755.5,600), new cjs.Rectangle(-222.2,0,1644.5,600), new cjs.Rectangle(-166.6,0,1533.3,600), new cjs.Rectangle(-111.1,0,1422.2,600), new cjs.Rectangle(-55.5,0,1311.1,600), rect=new cjs.Rectangle(0,0,1200,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-33.3,0,1266.7,600), new cjs.Rectangle(-66.6,0,1333.3,600), new cjs.Rectangle(-100,0,1400,600), new cjs.Rectangle(-133.3,0,1466.7,600), new cjs.Rectangle(-166.6,0,1533.3,600), new cjs.Rectangle(-200,0,1600,600), new cjs.Rectangle(-233.3,0,1666.7,600), new cjs.Rectangle(-266.6,0,1733.3,600), new cjs.Rectangle(-300,0,1800,600), new cjs.Rectangle(-333.3,0,1866.7,600), new cjs.Rectangle(-366.6,0,1933.3,600), new cjs.Rectangle(-400,0,2000,600), new cjs.Rectangle(-433.3,0,2066.7,600), new cjs.Rectangle(-466.6,0,2133.3,600), new cjs.Rectangle(-500,0,2200,600), new cjs.Rectangle(-533.3,0,2266.7,600), new cjs.Rectangle(-566.6,0,2333.3,600), new cjs.Rectangle(-600,0,2400,600), new cjs.Rectangle(-633.3,0,2466.7,600), new cjs.Rectangle(-666.6,0,2533.3,600), new cjs.Rectangle(-700,0,2600,600), new cjs.Rectangle(-733.3,0,2666.7,600), new cjs.Rectangle(-766.6,0,2733.3,600), new cjs.Rectangle(-800,0,2800,600), new cjs.Rectangle(-833.3,0,2866.7,600), new cjs.Rectangle(-866.6,0,2933.3,600), new cjs.Rectangle(-900,0,3000,600), new cjs.Rectangle(-933.3,0,3066.7,600), new cjs.Rectangle(-966.6,0,3133.3,600), rect=new cjs.Rectangle(-1000,0,3200,600), rect];


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
	this.instance.setTransform(0,200,0.6,0.6);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,y:0,alpha:1},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,110,300,180);
p.frameBounds = [rect, new cjs.Rectangle(-151.2,106.8,302.5,181.5), new cjs.Rectangle(-154.9,97.1,309.9,186), new cjs.Rectangle(-161.1,81.1,322.2,193.4), new cjs.Rectangle(-169.7,58.6,339.5,203.7), new cjs.Rectangle(-180.8,29.7,361.7,217.1), new cjs.Rectangle(-194.4,-5.5,388.9,233.4), new cjs.Rectangle(-210.4,-47.2,421,252.6), new cjs.Rectangle(-229,-95.4,458,274.8), new cjs.Rectangle(-250,-150,500,300)];


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
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.63,scaleY:0.62,alpha:0.012},29).wait(20).to({scaleY:0.63},0).to({scaleX:1,scaleY:1,alpha:0.602},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect, new cjs.Rectangle(-44.4,-44.4,88.9,88.9), new cjs.Rectangle(-43.8,-43.8,87.7,87.7), new cjs.Rectangle(-43.2,-43.2,86.5,86.5), new cjs.Rectangle(-42.6,-42.6,85.4,85.4), new cjs.Rectangle(-42,-42,84.2,84.2), new cjs.Rectangle(-41.5,-41.5,83,83), new cjs.Rectangle(-40.9,-40.9,81.9,81.9), new cjs.Rectangle(-40.3,-40.3,80.7,80.7), new cjs.Rectangle(-39.7,-39.7,79.6,79.5), new cjs.Rectangle(-39.1,-39.1,78.4,78.4), new cjs.Rectangle(-38.5,-38.5,77.2,77.2), new cjs.Rectangle(-38,-38,76.1,76), new cjs.Rectangle(-37.4,-37.4,74.9,74.9), new cjs.Rectangle(-36.8,-36.8,73.7,73.7), new cjs.Rectangle(-36.2,-36.3,72.6,72.5), new cjs.Rectangle(-35.6,-35.7,71.4,71.4), new cjs.Rectangle(-35.1,-35.1,70.2,70.2), new cjs.Rectangle(-34.5,-34.5,69.1,69), new cjs.Rectangle(-33.9,-33.9,67.9,67.9), new cjs.Rectangle(-33.3,-33.3,66.7,66.7), new cjs.Rectangle(-32.7,-32.8,65.6,65.5), new cjs.Rectangle(-32.1,-32.2,64.4,64.4), new cjs.Rectangle(-31.6,-31.6,63.3,63.2), new cjs.Rectangle(-31,-31,62.1,62), new cjs.Rectangle(-30.4,-30.4,60.9,60.9), new cjs.Rectangle(-29.8,-29.8,59.8,59.7), new cjs.Rectangle(-29.2,-29.3,58.6,58.5), new cjs.Rectangle(-28.7,-28.7,57.4,57.4), rect=new cjs.Rectangle(-28.1,-28.1,56.3,56.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-28.5,-28.5,57.1,57.1), new cjs.Rectangle(-28.9,-28.9,58,58), new cjs.Rectangle(-29.3,-29.3,58.8,58.8), new cjs.Rectangle(-29.8,-29.8,59.6,59.6), new cjs.Rectangle(-30.2,-30.2,60.5,60.5), new cjs.Rectangle(-30.6,-30.6,61.3,61.3), new cjs.Rectangle(-31,-31,62.2,62.2), new cjs.Rectangle(-31.4,-31.4,63,63), new cjs.Rectangle(-31.9,-31.9,63.9,63.9), new cjs.Rectangle(-32.3,-32.3,64.7,64.7), new cjs.Rectangle(-32.7,-32.7,65.6,65.5), new cjs.Rectangle(-33.1,-33.1,66.4,66.4), new cjs.Rectangle(-33.6,-33.6,67.2,67.2), new cjs.Rectangle(-34,-34,68.1,68.1), new cjs.Rectangle(-34.4,-34.4,68.9,68.9), new cjs.Rectangle(-34.8,-34.8,69.8,69.8), new cjs.Rectangle(-35.2,-35.2,70.6,70.6), new cjs.Rectangle(-35.7,-35.7,71.5,71.5), new cjs.Rectangle(-36.1,-36.1,72.3,72.3), new cjs.Rectangle(-36.5,-36.5,73.1,73.1), new cjs.Rectangle(-36.9,-36.9,74,74), new cjs.Rectangle(-37.4,-37.4,74.8,74.8), new cjs.Rectangle(-37.8,-37.8,75.7,75.7), new cjs.Rectangle(-38.2,-38.2,76.5,76.5), new cjs.Rectangle(-38.6,-38.6,77.4,77.4), new cjs.Rectangle(-39,-39,78.2,78.2), new cjs.Rectangle(-39.5,-39.5,79.1,79.1), new cjs.Rectangle(-39.9,-39.9,79.9,79.9), new cjs.Rectangle(-40.3,-40.3,80.7,80.7), new cjs.Rectangle(-40.7,-40.7,81.6,81.6), new cjs.Rectangle(-41.2,-41.2,82.4,82.4), new cjs.Rectangle(-41.6,-41.6,83.3,83.3), new cjs.Rectangle(-42,-42,84.1,84.1), new cjs.Rectangle(-42.4,-42.4,85,85), new cjs.Rectangle(-42.8,-42.8,85.8,85.8), new cjs.Rectangle(-43.3,-43.3,86.6,86.6), new cjs.Rectangle(-43.7,-43.7,87.5,87.5), new cjs.Rectangle(-44.1,-44.1,88.3,88.3), new cjs.Rectangle(-44.5,-44.5,89.2,89.2), new cjs.Rectangle(-45,-45,90,90)];


(lib.barbie_star_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(1));

	// animation
	this.instance = new lib.barbie_star_3_mc();
	this.instance.setTransform(-24,24,0.599,0.599,-44.9);
	this.instance.alpha = 0.102;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:-45,x:-36,y:36,alpha:0.801},5).to({regY:-0.1,scaleX:0.6,scaleY:0.6,rotation:-44.9,x:-50,y:50,alpha:0.102},10).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.barbie_star_3_mc();
	this.instance_1.setTransform(-24,-24,0.599,0.599,-134.9,0,0,0.1,0);
	this.instance_1.alpha = 0.102;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,rotation:-135,x:-36,y:-36,alpha:0.801},5).to({regX:0.1,scaleX:0.6,scaleY:0.6,rotation:-134.9,x:-50,y:-50,alpha:0.102},10).to({_off:true},1).wait(1));

	// animation
	this.instance_2 = new lib.barbie_star_3_mc();
	this.instance_2.setTransform(24.1,24.1,0.599,0.599,45.1,0,0,0.1,0);
	this.instance_2.alpha = 0.102;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,rotation:45,x:36,y:36,alpha:0.801},5).to({regX:0.1,scaleX:0.6,scaleY:0.6,rotation:45.1,x:50.1,y:50.1,alpha:0.102},10).to({_off:true},1).wait(1));

	// animation
	this.instance_3 = new lib.barbie_star_3_mc();
	this.instance_3.setTransform(24.1,-24,0.599,0.599,-44.9,0,0,0.1,0);
	this.instance_3.alpha = 0.102;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,rotation:-45,x:36,y:-36,alpha:0.801},5).to({regX:0.1,scaleX:0.6,scaleY:0.6,rotation:-44.9,x:50.1,y:-50,alpha:0.102},10).to({_off:true},1).wait(1));

	// animation
	this.instance_4 = new lib.barbie_star_2_mc();
	this.instance_4.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:0.801},4).to({rotation:45},5).to({rotation:90},5).wait(5).to({scaleX:0.8,scaleY:0.8,alpha:0.102},10).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-68.4,-68.4,136.9,136.9), new cjs.Rectangle(-75.4,-75.4,150.9,150.9), new cjs.Rectangle(-80.6,-80.6,161.3,161.3), new cjs.Rectangle(-83.6,-83.6,167.3,167.3), new cjs.Rectangle(-84.9,-84.9,169.8,169.8), new cjs.Rectangle(-83.7,-83.6,167.4,167.4), new cjs.Rectangle(-80.6,-80.6,161.3,161.3), new cjs.Rectangle(-75.5,-75.5,151.1,151.1), new cjs.Rectangle(-68.6,-68.6,137.2,137.2), new cjs.Rectangle(-60,-60,120,120), rect=new cjs.Rectangle(-60,-59.9,120,120), rect, new cjs.Rectangle(-63.7,-63.7,127.5,127.5), new cjs.Rectangle(-69.2,-69.3,138.6,138.6), new cjs.Rectangle(-74.9,-74.9,149.8,149.8), new cjs.Rectangle(-74.7,-74.7,149.4,149.4), new cjs.Rectangle(-74.5,-74.5,149.1,149.1), new cjs.Rectangle(-74.4,-74.3,148.8,148.7), new cjs.Rectangle(-74.2,-74.2,148.5,148.4), new cjs.Rectangle(-74.1,-74,148.2,148.1), new cjs.Rectangle(-73.9,-73.9,147.9,147.8), new cjs.Rectangle(-73.8,-73.8,147.6,147.6), new cjs.Rectangle(-73.6,-73.6,147.3,147.3), new cjs.Rectangle(-73.5,-73.4,147,146.9), new cjs.Rectangle(-73.3,-73.3,146.6,146.6), null];


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

	// decor
	this.instance_2 = new lib.piece_fan_2_mc();
	this.instance_2.setTransform(0,0,1,1,110);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(99).to({rotation:55},30).to({rotation:110},30).wait(1));

	// decor
	this.instance_3 = new lib.piece_fan_mc();
	this.instance_3.setTransform(0,0,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(99).to({rotation:45},30).to({rotation:90},30).wait(1));

	// decor
	this.instance_4 = new lib.piece_fan_mc();
	this.instance_4.setTransform(0,0,1,1,70);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(99).to({rotation:35},30).to({rotation:70},30).wait(1));

	// decor
	this.instance_5 = new lib.piece_fan_mc();
	this.instance_5.setTransform(0,0,1,1,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(99).to({rotation:25},30).to({rotation:50},30).wait(1));

	// decor
	this.instance_6 = new lib.piece_fan_mc();
	this.instance_6.setTransform(0,0,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(99).to({rotation:15},30).to({rotation:30},30).wait(1));

	// decor
	this.instance_7 = new lib.piece_fan_mc();
	this.instance_7.setTransform(0,0,1,1,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(99).to({rotation:5},30).to({rotation:10},30).wait(1));

	// decor
	this.instance_8 = new lib.piece_fan_mc();
	this.instance_8.setTransform(0,0,1,1,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(99).to({rotation:-5},30).to({rotation:-10},30).wait(1));

	// decor
	this.instance_9 = new lib.piece_fan_mc();
	this.instance_9.setTransform(0,0,1,1,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({rotation:-15},30).to({rotation:-30},30).wait(1));

	// decor
	this.instance_10 = new lib.piece_fan_mc();
	this.instance_10.setTransform(0,0,1,1,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(99).to({rotation:-25},30).to({rotation:-50},30).wait(1));

	// decor
	this.instance_11 = new lib.piece_fan_mc();
	this.instance_11.setTransform(0,0,1,1,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(99).to({rotation:-35},30).to({rotation:-70},30).wait(1));

	// decor
	this.instance_12 = new lib.piece_fan_mc();
	this.instance_12.setTransform(0,0,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(99).to({rotation:-45},30).to({rotation:-90},30).wait(1));

	// decor
	this.instance_13 = new lib.piece_fan_mc();
	this.instance_13.setTransform(0,0,1,1,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(99).to({rotation:-55},30).to({rotation:-110},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-103.3,204,198.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-102.3,-103.2,204.7,198.3), new cjs.Rectangle(-102.7,-103.2,205.4,198.3), new cjs.Rectangle(-102.9,-103.2,205.9,198.3), new cjs.Rectangle(-103.1,-103.2,206.2,198.3), new cjs.Rectangle(-103.2,-103.2,206.4,198.3), new cjs.Rectangle(-103.2,-103.2,206.5,198.3), new cjs.Rectangle(-103.2,-103.2,206.4,198.3), new cjs.Rectangle(-103.1,-103.2,206.2,198.3), new cjs.Rectangle(-102.9,-103.2,205.9,198.3), new cjs.Rectangle(-102.7,-103.2,205.4,198.3), new cjs.Rectangle(-102.3,-103.2,204.7,198.3), new cjs.Rectangle(-102.4,-103.2,204.9,198.3), new cjs.Rectangle(-102.8,-103.2,205.6,198.2), new cjs.Rectangle(-103,-103.2,206.1,198.3), new cjs.Rectangle(-103.2,-103.2,206.4,198.2), new cjs.Rectangle(-103.2,-103.2,206.5,198.2), new cjs.Rectangle(-103.2,-103.2,206.4,198.2), new cjs.Rectangle(-103,-103.2,206,198.2), new cjs.Rectangle(-102.7,-103.2,205.4,198.2), new cjs.Rectangle(-102.3,-103.1,204.7,198.2), new cjs.Rectangle(-101.9,-103.1,203.8,198.2), new cjs.Rectangle(-101.2,-103.1,202.5,198.2), new cjs.Rectangle(-100.6,-103.1,201.2,198.1), new cjs.Rectangle(-99.8,-103.1,199.6,198.1), new cjs.Rectangle(-98.8,-103.1,197.7,198.1), new cjs.Rectangle(-97.9,-103,195.8,198.1), new cjs.Rectangle(-96.8,-103,193.6,198.1), new cjs.Rectangle(-95.5,-103,191.1,198.1), new cjs.Rectangle(-95,-103,190,198), new cjs.Rectangle(-95,-103,190,198.1), new cjs.Rectangle(-95,-103,190,198), new cjs.Rectangle(-95.5,-103,191.1,198.1), new cjs.Rectangle(-96.8,-103,193.6,198.1), new cjs.Rectangle(-97.9,-103,195.8,198.1), new cjs.Rectangle(-98.8,-103.1,197.7,198.1), new cjs.Rectangle(-99.8,-103.1,199.6,198.1), new cjs.Rectangle(-100.6,-103.1,201.2,198.1), new cjs.Rectangle(-101.2,-103.1,202.5,198.2), new cjs.Rectangle(-101.9,-103.1,203.8,198.2), new cjs.Rectangle(-102.3,-103.1,204.7,198.2), new cjs.Rectangle(-102.7,-103.2,205.4,198.2), new cjs.Rectangle(-103,-103.2,206,198.2), new cjs.Rectangle(-103.2,-103.2,206.4,198.2), new cjs.Rectangle(-103.2,-103.2,206.5,198.2), new cjs.Rectangle(-103.2,-103.2,206.4,198.2), new cjs.Rectangle(-103,-103.2,206.1,198.3), new cjs.Rectangle(-102.8,-103.2,205.6,198.2), new cjs.Rectangle(-102.4,-103.2,204.9,198.3), new cjs.Rectangle(-102.3,-103.2,204.7,198.3), new cjs.Rectangle(-102.7,-103.2,205.4,198.3), new cjs.Rectangle(-102.9,-103.2,205.8,198.3), new cjs.Rectangle(-103.1,-103.2,206.2,198.3), new cjs.Rectangle(-103.2,-103.2,206.4,198.3), new cjs.Rectangle(-103.2,-103.2,206.5,198.3), new cjs.Rectangle(-103.2,-103.2,206.4,198.3), new cjs.Rectangle(-103.1,-103.2,206.2,198.3), new cjs.Rectangle(-102.9,-103.2,205.9,198.3), new cjs.Rectangle(-102.7,-103.2,205.4,198.3), new cjs.Rectangle(-102.3,-103.2,204.7,198.3), new cjs.Rectangle(-102,-103.3,204,198.3)];


(lib.photo_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.photo_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(160));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

	// decor
	this.instance_2 = new lib.piece_fan_2_mc();
	this.instance_2.setTransform(0,0,1,1,110);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(99).to({rotation:55},30).to({rotation:110},30).wait(1));

	// decor
	this.instance_3 = new lib.piece_fan_mc();
	this.instance_3.setTransform(0,0,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(99).to({rotation:45},30).to({rotation:90},30).wait(1));

	// decor
	this.instance_4 = new lib.piece_fan_mc();
	this.instance_4.setTransform(0,0,1,1,70);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(99).to({rotation:35},30).to({rotation:70},30).wait(1));

	// decor
	this.instance_5 = new lib.piece_fan_mc();
	this.instance_5.setTransform(0,0,1,1,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(99).to({rotation:25},30).to({rotation:50},30).wait(1));

	// decor
	this.instance_6 = new lib.piece_fan_mc();
	this.instance_6.setTransform(0,0,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(99).to({rotation:15},30).to({rotation:30},30).wait(1));

	// decor
	this.instance_7 = new lib.piece_fan_mc();
	this.instance_7.setTransform(0,0,1,1,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(99).to({rotation:5},30).to({rotation:10},30).wait(1));

	// decor
	this.instance_8 = new lib.piece_fan_mc();
	this.instance_8.setTransform(0,0,1,1,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(99).to({rotation:-5},30).to({rotation:-10},30).wait(1));

	// decor
	this.instance_9 = new lib.piece_fan_mc();
	this.instance_9.setTransform(0,0,1,1,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({rotation:-15},30).to({rotation:-30},30).wait(1));

	// decor
	this.instance_10 = new lib.piece_fan_mc();
	this.instance_10.setTransform(0,0,1,1,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(99).to({rotation:-25},30).to({rotation:-50},30).wait(1));

	// decor
	this.instance_11 = new lib.piece_fan_mc();
	this.instance_11.setTransform(0,0,1,1,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(99).to({rotation:-35},30).to({rotation:-70},30).wait(1));

	// decor
	this.instance_12 = new lib.piece_fan_mc();
	this.instance_12.setTransform(0,0,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(99).to({rotation:-45},30).to({rotation:-90},30).wait(1));

	// decor
	this.instance_13 = new lib.piece_fan_mc();
	this.instance_13.setTransform(0,0,1,1,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(99).to({rotation:-55},30).to({rotation:-110},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-103.3,204,198.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-102.3,-103.2,204.7,198.3), new cjs.Rectangle(-102.7,-103.2,205.4,198.3), new cjs.Rectangle(-102.9,-103.2,205.9,198.3), new cjs.Rectangle(-103.1,-103.2,206.2,198.3), new cjs.Rectangle(-103.2,-103.2,206.4,198.3), new cjs.Rectangle(-103.2,-103.2,206.5,198.3), new cjs.Rectangle(-103.2,-103.2,206.4,198.3), new cjs.Rectangle(-103.1,-103.2,206.2,198.3), new cjs.Rectangle(-102.9,-103.2,205.9,198.3), new cjs.Rectangle(-102.7,-103.2,205.4,198.3), new cjs.Rectangle(-102.3,-103.2,204.7,198.3), new cjs.Rectangle(-102.4,-103.2,204.9,198.3), new cjs.Rectangle(-102.8,-103.2,205.6,198.2), new cjs.Rectangle(-103,-103.2,206.1,198.3), new cjs.Rectangle(-103.2,-103.2,206.4,198.2), new cjs.Rectangle(-103.2,-103.2,206.5,198.2), new cjs.Rectangle(-103.2,-103.2,206.4,198.2), new cjs.Rectangle(-103,-103.2,206,198.2), new cjs.Rectangle(-102.7,-103.2,205.4,198.2), new cjs.Rectangle(-102.3,-103.1,204.7,198.2), new cjs.Rectangle(-101.9,-103.1,203.8,198.2), new cjs.Rectangle(-101.2,-103.1,202.5,198.2), new cjs.Rectangle(-100.6,-103.1,201.2,198.1), new cjs.Rectangle(-99.8,-103.1,199.6,198.1), new cjs.Rectangle(-98.8,-103.1,197.7,198.1), new cjs.Rectangle(-97.9,-103,195.8,198.1), new cjs.Rectangle(-96.8,-103,193.6,198.1), new cjs.Rectangle(-95.5,-103,191.1,198.1), new cjs.Rectangle(-95,-103,190,198), new cjs.Rectangle(-95,-103,190,198.1), new cjs.Rectangle(-95,-103,190,198), new cjs.Rectangle(-95.5,-103,191.1,198.1), new cjs.Rectangle(-96.8,-103,193.6,198.1), new cjs.Rectangle(-97.9,-103,195.8,198.1), new cjs.Rectangle(-98.8,-103.1,197.7,198.1), new cjs.Rectangle(-99.8,-103.1,199.6,198.1), new cjs.Rectangle(-100.6,-103.1,201.2,198.1), new cjs.Rectangle(-101.2,-103.1,202.5,198.2), new cjs.Rectangle(-101.9,-103.1,203.8,198.2), new cjs.Rectangle(-102.3,-103.1,204.7,198.2), new cjs.Rectangle(-102.7,-103.2,205.4,198.2), new cjs.Rectangle(-103,-103.2,206,198.2), new cjs.Rectangle(-103.2,-103.2,206.4,198.2), new cjs.Rectangle(-103.2,-103.2,206.5,198.2), new cjs.Rectangle(-103.2,-103.2,206.4,198.2), new cjs.Rectangle(-103,-103.2,206.1,198.3), new cjs.Rectangle(-102.8,-103.2,205.6,198.2), new cjs.Rectangle(-102.4,-103.2,204.9,198.3), new cjs.Rectangle(-102.3,-103.2,204.7,198.3), new cjs.Rectangle(-102.7,-103.2,205.4,198.3), new cjs.Rectangle(-102.9,-103.2,205.8,198.3), new cjs.Rectangle(-103.1,-103.2,206.2,198.3), new cjs.Rectangle(-103.2,-103.2,206.4,198.3), new cjs.Rectangle(-103.2,-103.2,206.5,198.3), new cjs.Rectangle(-103.2,-103.2,206.4,198.3), new cjs.Rectangle(-103.1,-103.2,206.2,198.3), new cjs.Rectangle(-102.9,-103.2,205.9,198.3), new cjs.Rectangle(-102.7,-103.2,205.4,198.3), new cjs.Rectangle(-102.3,-103.2,204.7,198.3), new cjs.Rectangle(-102,-103.3,204,198.3)];


(lib.next_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.next_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},10).wait(116));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},10).wait(111));

	// decor
	this.instance_2 = new lib.piece_fan_2_mc();
	this.instance_2.setTransform(0,0,1,1,110);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(99).to({rotation:55},30).to({rotation:110},30).wait(1));

	// decor
	this.instance_3 = new lib.piece_fan_mc();
	this.instance_3.setTransform(0,0,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(99).to({rotation:45},30).to({rotation:90},30).wait(1));

	// decor
	this.instance_4 = new lib.piece_fan_mc();
	this.instance_4.setTransform(0,0,1,1,70);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(99).to({rotation:35},30).to({rotation:70},30).wait(1));

	// decor
	this.instance_5 = new lib.piece_fan_mc();
	this.instance_5.setTransform(0,0,1,1,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(99).to({rotation:25},30).to({rotation:50},30).wait(1));

	// decor
	this.instance_6 = new lib.piece_fan_mc();
	this.instance_6.setTransform(0,0,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(99).to({rotation:15},30).to({rotation:30},30).wait(1));

	// decor
	this.instance_7 = new lib.piece_fan_mc();
	this.instance_7.setTransform(0,0,1,1,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(99).to({rotation:5},30).to({rotation:10},30).wait(1));

	// decor
	this.instance_8 = new lib.piece_fan_mc();
	this.instance_8.setTransform(0,0,1,1,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(99).to({rotation:-5},30).to({rotation:-10},30).wait(1));

	// decor
	this.instance_9 = new lib.piece_fan_mc();
	this.instance_9.setTransform(0,0,1,1,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99).to({rotation:-15},30).to({rotation:-30},30).wait(1));

	// decor
	this.instance_10 = new lib.piece_fan_mc();
	this.instance_10.setTransform(0,0,1,1,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(99).to({rotation:-25},30).to({rotation:-50},30).wait(1));

	// decor
	this.instance_11 = new lib.piece_fan_mc();
	this.instance_11.setTransform(0,0,1,1,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(99).to({rotation:-35},30).to({rotation:-70},30).wait(1));

	// decor
	this.instance_12 = new lib.piece_fan_mc();
	this.instance_12.setTransform(0,0,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(99).to({rotation:-45},30).to({rotation:-90},30).wait(1));

	// decor
	this.instance_13 = new lib.piece_fan_mc();
	this.instance_13.setTransform(0,0,1,1,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(99).to({rotation:-55},30).to({rotation:-110},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-103.3,204,198.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-102,-103.3,204,199.3), new cjs.Rectangle(-102,-103.3,204,200.4), new cjs.Rectangle(-102,-103.3,204,201.4), new cjs.Rectangle(-102,-103.3,204,202.4), new cjs.Rectangle(-102,-103.3,204,203.3), new cjs.Rectangle(-102,-103.3,204,202.9), new cjs.Rectangle(-102,-103.3,204,202.4), new cjs.Rectangle(-102,-103.3,204,201.9), new cjs.Rectangle(-102,-103.3,204,202.4), new cjs.Rectangle(-102,-103.3,204,203.3), new cjs.Rectangle(-102,-103.3,204,202.9), new cjs.Rectangle(-102,-103.3,204,202.4), new cjs.Rectangle(-102,-103.3,204,201.9), new cjs.Rectangle(-102,-103.3,204,201.4), new cjs.Rectangle(-102,-103.3,204,200.9), new cjs.Rectangle(-102,-103.3,204,200.4), new cjs.Rectangle(-102,-103.3,204,199.9), new cjs.Rectangle(-102,-103.3,204,199.4), new cjs.Rectangle(-102,-103.3,204,198.9), rect=new cjs.Rectangle(-102,-103.3,204,198.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-102.3,-103.2,204.7,198.3), new cjs.Rectangle(-102.7,-103.2,205.4,198.3), new cjs.Rectangle(-102.9,-103.2,205.9,198.3), new cjs.Rectangle(-103.1,-103.2,206.2,198.3), new cjs.Rectangle(-103.2,-103.2,206.4,198.3), new cjs.Rectangle(-103.2,-103.2,206.5,198.3), new cjs.Rectangle(-103.2,-103.2,206.4,198.3), new cjs.Rectangle(-103.1,-103.2,206.2,198.3), new cjs.Rectangle(-102.9,-103.2,205.9,198.3), new cjs.Rectangle(-102.7,-103.2,205.4,198.3), new cjs.Rectangle(-102.3,-103.2,204.7,198.3), new cjs.Rectangle(-102.4,-103.2,204.9,198.3), new cjs.Rectangle(-102.8,-103.2,205.6,198.2), new cjs.Rectangle(-103,-103.2,206.1,198.3), new cjs.Rectangle(-103.2,-103.2,206.4,198.2), new cjs.Rectangle(-103.2,-103.2,206.5,198.2), new cjs.Rectangle(-103.2,-103.2,206.4,198.2), new cjs.Rectangle(-103,-103.2,206,198.2), new cjs.Rectangle(-102.7,-103.2,205.4,198.2), new cjs.Rectangle(-102.3,-103.1,204.7,198.2), new cjs.Rectangle(-101.9,-103.1,203.8,198.2), new cjs.Rectangle(-101.2,-103.1,202.5,198.2), new cjs.Rectangle(-100.6,-103.1,201.2,198.1), new cjs.Rectangle(-99.8,-103.1,199.6,198.1), new cjs.Rectangle(-98.8,-103.1,197.7,198.1), new cjs.Rectangle(-97.9,-103,195.8,198.1), new cjs.Rectangle(-96.8,-103,193.6,198.1), new cjs.Rectangle(-95.5,-103,191.1,198.1), new cjs.Rectangle(-95,-103,190,198), new cjs.Rectangle(-95,-103,190,198.1), new cjs.Rectangle(-95,-103,190,198), new cjs.Rectangle(-95.5,-103,191.1,198.1), new cjs.Rectangle(-96.8,-103,193.6,198.1), new cjs.Rectangle(-97.9,-103,195.8,198.1), new cjs.Rectangle(-98.8,-103.1,197.7,198.1), new cjs.Rectangle(-99.8,-103.1,199.6,198.1), new cjs.Rectangle(-100.6,-103.1,201.2,198.1), new cjs.Rectangle(-101.2,-103.1,202.5,198.2), new cjs.Rectangle(-101.9,-103.1,203.8,198.2), new cjs.Rectangle(-102.3,-103.1,204.7,198.2), new cjs.Rectangle(-102.7,-103.2,205.4,198.2), new cjs.Rectangle(-103,-103.2,206,198.2), new cjs.Rectangle(-103.2,-103.2,206.4,198.2), new cjs.Rectangle(-103.2,-103.2,206.5,198.2), new cjs.Rectangle(-103.2,-103.2,206.4,198.2), new cjs.Rectangle(-103,-103.2,206.1,198.3), new cjs.Rectangle(-102.8,-103.2,205.6,198.2), new cjs.Rectangle(-102.4,-103.2,204.9,198.3), new cjs.Rectangle(-102.3,-103.2,204.7,198.3), new cjs.Rectangle(-102.7,-103.2,205.4,198.3), new cjs.Rectangle(-102.9,-103.2,205.8,198.3), new cjs.Rectangle(-103.1,-103.2,206.2,198.3), new cjs.Rectangle(-103.2,-103.2,206.4,198.3), new cjs.Rectangle(-103.2,-103.2,206.5,198.3), new cjs.Rectangle(-103.2,-103.2,206.4,198.3), new cjs.Rectangle(-103.1,-103.2,206.2,198.3), new cjs.Rectangle(-102.9,-103.2,205.9,198.3), new cjs.Rectangle(-102.7,-103.2,205.4,198.3), new cjs.Rectangle(-102.3,-103.2,204.7,198.3), new cjs.Rectangle(-102,-103.3,204,198.3)];


(lib.nav_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_1_3_mc();
	this.instance.setTransform(15,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({scaleX:0.92,scaleY:0.92,alpha:0.801},10).wait(10).to({scaleX:1,scaleY:1,alpha:1},10).wait(1));

	// animation
	this.instance_1 = new lib.nav_1_3_mc();
	this.instance_1.setTransform(-15.1,0,0.917,0.917,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({regX:-0.2,scaleX:0.83,scaleY:0.83,alpha:0.801},10).wait(10).to({regX:-0.1,scaleX:0.92,scaleY:0.92,alpha:1},10).wait(11));

	// area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmnGnQiwivAAj4QAAj3CwiwQCwiwD3AAQD4AACvCwQCxCwAAD3QAAD4ixCvQivCxj4AAQj3AAiwixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-60,145,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-69.5,-60,144.5,120), new cjs.Rectangle(-68.9,-60,144,120), new cjs.Rectangle(-68.4,-60,143.5,120), new cjs.Rectangle(-68,-60,143,120), new cjs.Rectangle(-67.5,-60,142.5,120), new cjs.Rectangle(-66.9,-60,142,120), new cjs.Rectangle(-66.4,-60,141.5,120), new cjs.Rectangle(-66,-60,141,120), new cjs.Rectangle(-65.5,-60,140.5,120), new cjs.Rectangle(-64.9,-60,140,120), new cjs.Rectangle(-64.9,-60,139.4,120), new cjs.Rectangle(-64.9,-60,138.9,120), new cjs.Rectangle(-64.9,-60,138.4,120), new cjs.Rectangle(-64.9,-60,137.9,120), new cjs.Rectangle(-64.9,-60,137.4,120), new cjs.Rectangle(-64.9,-60,137,120), new cjs.Rectangle(-64.9,-60,136.5,120), new cjs.Rectangle(-64.9,-60,135.9,120), new cjs.Rectangle(-64.9,-60,135.4,120), new cjs.Rectangle(-64.9,-60,135,120), new cjs.Rectangle(-65.4,-60,135.5,120), new cjs.Rectangle(-65.9,-60,136,120), new cjs.Rectangle(-66.4,-60,136.5,120), new cjs.Rectangle(-66.9,-60,137,120), new cjs.Rectangle(-67.4,-60,137.5,120), new cjs.Rectangle(-67.9,-60,138,120), new cjs.Rectangle(-68.4,-60,138.5,120), new cjs.Rectangle(-68.9,-60,139,120), new cjs.Rectangle(-69.4,-60,139.5,120), new cjs.Rectangle(-70,-60,140,120), new cjs.Rectangle(-70,-60,140.6,120), new cjs.Rectangle(-70,-60,141.1,120), new cjs.Rectangle(-70,-60,141.6,120), new cjs.Rectangle(-70,-60,142.1,120), new cjs.Rectangle(-70,-60,142.6,120), new cjs.Rectangle(-70,-60,143.1,120), new cjs.Rectangle(-70,-60,143.6,120), new cjs.Rectangle(-70,-60,144.1,120), new cjs.Rectangle(-70,-60,144.6,120), new cjs.Rectangle(-70,-60,145,120)];


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
	this.shape.graphics.f("rgba(0,0,0,0.039)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDPAACSCTQCTCTAADNQAADOiTCTQiSCTjPAAQjNAAiTiTg");

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(160));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160));

	// decor
	this.instance_2 = new lib.piece_fan_2_mc();
	this.instance_2.setTransform(0,0,1,1,110);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(69).to({rotation:55},30).to({rotation:110},30).wait(31));

	// decor
	this.instance_3 = new lib.piece_fan_mc();
	this.instance_3.setTransform(0,0,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(69).to({rotation:45},30).to({rotation:90},30).wait(31));

	// decor
	this.instance_4 = new lib.piece_fan_mc();
	this.instance_4.setTransform(0,0,1,1,70);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(69).to({rotation:35},30).to({rotation:70},30).wait(31));

	// decor
	this.instance_5 = new lib.piece_fan_mc();
	this.instance_5.setTransform(0,0,1,1,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(69).to({rotation:25},30).to({rotation:50},30).wait(31));

	// decor
	this.instance_6 = new lib.piece_fan_mc();
	this.instance_6.setTransform(0,0,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(69).to({rotation:15},30).to({rotation:30},30).wait(31));

	// decor
	this.instance_7 = new lib.piece_fan_mc();
	this.instance_7.setTransform(0,0,1,1,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(69).to({rotation:5},30).to({rotation:10},30).wait(31));

	// decor
	this.instance_8 = new lib.piece_fan_mc();
	this.instance_8.setTransform(0,0,1,1,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(69).to({rotation:-5},30).to({rotation:-10},30).wait(31));

	// decor
	this.instance_9 = new lib.piece_fan_mc();
	this.instance_9.setTransform(0,0,1,1,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(69).to({rotation:-15},30).to({rotation:-30},30).wait(31));

	// decor
	this.instance_10 = new lib.piece_fan_mc();
	this.instance_10.setTransform(0,0,1,1,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(69).to({rotation:-25},30).to({rotation:-50},30).wait(31));

	// decor
	this.instance_11 = new lib.piece_fan_mc();
	this.instance_11.setTransform(0,0,1,1,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(69).to({rotation:-35},30).to({rotation:-70},30).wait(31));

	// decor
	this.instance_12 = new lib.piece_fan_mc();
	this.instance_12.setTransform(0,0,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(69).to({rotation:-45},30).to({rotation:-90},30).wait(31));

	// decor
	this.instance_13 = new lib.piece_fan_mc();
	this.instance_13.setTransform(0,0,1,1,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(69).to({rotation:-55},30).to({rotation:-110},30).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-103.3,204,198.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-102.3,-103.2,204.7,198.3), new cjs.Rectangle(-102.7,-103.2,205.4,198.3), new cjs.Rectangle(-102.9,-103.2,205.9,198.3), new cjs.Rectangle(-103.1,-103.2,206.2,198.3), new cjs.Rectangle(-103.2,-103.2,206.4,198.3), new cjs.Rectangle(-103.2,-103.2,206.5,198.3), new cjs.Rectangle(-103.2,-103.2,206.4,198.3), new cjs.Rectangle(-103.1,-103.2,206.2,198.3), new cjs.Rectangle(-102.9,-103.2,205.9,198.3), new cjs.Rectangle(-102.7,-103.2,205.4,198.3), new cjs.Rectangle(-102.3,-103.2,204.7,198.3), new cjs.Rectangle(-102.4,-103.2,204.9,198.3), new cjs.Rectangle(-102.8,-103.2,205.6,198.2), new cjs.Rectangle(-103,-103.2,206.1,198.3), new cjs.Rectangle(-103.2,-103.2,206.4,198.2), new cjs.Rectangle(-103.2,-103.2,206.5,198.2), new cjs.Rectangle(-103.2,-103.2,206.4,198.2), new cjs.Rectangle(-103,-103.2,206,198.2), new cjs.Rectangle(-102.7,-103.2,205.4,198.2), new cjs.Rectangle(-102.3,-103.1,204.7,198.2), new cjs.Rectangle(-101.9,-103.1,203.8,198.2), new cjs.Rectangle(-101.2,-103.1,202.5,198.2), new cjs.Rectangle(-100.6,-103.1,201.2,198.1), new cjs.Rectangle(-99.8,-103.1,199.6,198.1), new cjs.Rectangle(-98.8,-103.1,197.7,198.1), new cjs.Rectangle(-97.9,-103,195.8,198.1), new cjs.Rectangle(-96.8,-103,193.6,198.1), new cjs.Rectangle(-95.5,-103,191.1,198.1), new cjs.Rectangle(-95,-103,190,198), new cjs.Rectangle(-95,-103,190,198.1), new cjs.Rectangle(-95,-103,190,198), new cjs.Rectangle(-95.5,-103,191.1,198.1), new cjs.Rectangle(-96.8,-103,193.6,198.1), new cjs.Rectangle(-97.9,-103,195.8,198.1), new cjs.Rectangle(-98.8,-103.1,197.7,198.1), new cjs.Rectangle(-99.8,-103.1,199.6,198.1), new cjs.Rectangle(-100.6,-103.1,201.2,198.1), new cjs.Rectangle(-101.2,-103.1,202.5,198.2), new cjs.Rectangle(-101.9,-103.1,203.8,198.2), new cjs.Rectangle(-102.3,-103.1,204.7,198.2), new cjs.Rectangle(-102.7,-103.2,205.4,198.2), new cjs.Rectangle(-103,-103.2,206,198.2), new cjs.Rectangle(-103.2,-103.2,206.4,198.2), new cjs.Rectangle(-103.2,-103.2,206.5,198.2), new cjs.Rectangle(-103.2,-103.2,206.4,198.2), new cjs.Rectangle(-103,-103.2,206.1,198.3), new cjs.Rectangle(-102.8,-103.2,205.6,198.2), new cjs.Rectangle(-102.4,-103.2,204.9,198.3), new cjs.Rectangle(-102.3,-103.2,204.7,198.3), new cjs.Rectangle(-102.7,-103.2,205.4,198.3), new cjs.Rectangle(-102.9,-103.2,205.8,198.3), new cjs.Rectangle(-103.1,-103.2,206.2,198.3), new cjs.Rectangle(-103.2,-103.2,206.4,198.3), new cjs.Rectangle(-103.2,-103.2,206.5,198.3), new cjs.Rectangle(-103.2,-103.2,206.4,198.3), new cjs.Rectangle(-103.1,-103.2,206.2,198.3), new cjs.Rectangle(-102.9,-103.2,205.9,198.3), new cjs.Rectangle(-102.7,-103.2,205.4,198.3), new cjs.Rectangle(-102.3,-103.2,204.7,198.3), rect=new cjs.Rectangle(-102,-103.3,204,198.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,760);
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


(lib.shadows_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows39_img();
	this.instance.setTransform(-75,-64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.shadows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows19_img();
	this.instance.setTransform(-75,-64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.shadows_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows21_img();
	this.instance.setTransform(-75,-64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.shadows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows4_img();
	this.instance.setTransform(-75,-64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.shadows_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows38_img();
	this.instance.setTransform(-75,-64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.shadows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows15_img();
	this.instance.setTransform(-75,-64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.shadows_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows37_img();
	this.instance.setTransform(-75,-64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.shadows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows2_img();
	this.instance.setTransform(-75,-64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.shadows_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows36_img();
	this.instance.setTransform(-75,-64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.shadows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows10_img();
	this.instance.setTransform(-75,-64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.shadows_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows35_img();
	this.instance.setTransform(-75,-64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.shadows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows26_img();
	this.instance.setTransform(-75,-64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.prev_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_3_mc();
	this.instance.setTransform(0,0,1,1,0,-5,175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.9,-65,154.4,131.3);
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


(lib.next_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_3_mc();
	this.instance.setTransform(0,0,1,1,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.5,-65,154.4,131.3);
p.frameBounds = [rect];


(lib.location_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_6_img();
	this.instance.setTransform(-150,-140);

	this.instance_1 = new lib.location_1_6_img();
	this.instance_1.setTransform(-150,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvcOXQmal9gBoaQABoZGal9QGal8JCgBQJDABGbF8QGZF9AAIZQAAIamZF9QmbF9pDAAQpCAAmal9g");
	this.shape.setTransform(-2,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-140,300,280);
p.frameBounds = [rect, new cjs.Rectangle(-200,-200,400,400), new cjs.Rectangle(-150,-140,300,280)];


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_5_img();
	this.instance.setTransform(-150,-140);

	this.instance_1 = new lib.location_1_5_img();
	this.instance_1.setTransform(-150,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvcOXQmal9gBoaQABoZGal9QGal8JCgBQJDABGbF8QGZF9AAIZQAAIamZF9QmbF9pDAAQpCAAmal9g");
	this.shape.setTransform(-2,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-140,300,280);
p.frameBounds = [rect, new cjs.Rectangle(-200,-200,400,400), new cjs.Rectangle(-150,-140,300,280)];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_4_img();
	this.instance.setTransform(-150,-140);

	this.instance_1 = new lib.location_1_4_img();
	this.instance_1.setTransform(-150,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvcOXQmal9gBoaQABoZGal9QGal8JCgBQJDABGbF8QGZF9AAIZQAAIamZF9QmbF9pDAAQpCAAmal9g");
	this.shape.setTransform(-2,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-140,300,280);
p.frameBounds = [rect, new cjs.Rectangle(-200,-200,400,400), new cjs.Rectangle(-150,-140,300,280)];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_3_img();
	this.instance.setTransform(-150,-140);

	this.instance_1 = new lib.location_1_3_img();
	this.instance_1.setTransform(-150,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvcOXQmal9gBoaQABoZGal9QGal8JCgBQJDABGbF8QGZF9AAIZQAAIamZF9QmbF9pDAAQpCAAmal9g");
	this.shape.setTransform(-2,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-140,300,280);
p.frameBounds = [rect, new cjs.Rectangle(-200,-200,400,400), new cjs.Rectangle(-150,-140,300,280)];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_2_img();
	this.instance.setTransform(-150,-140);

	this.instance_1 = new lib.location_1_2_img();
	this.instance_1.setTransform(-150,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvcOXQmal9gBoaQABoZGal9QGal8JCgBQJDABGbF8QGZF9AAIZQAAIamZF9QmbF9pDAAQpCAAmal9g");
	this.shape.setTransform(-2,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-140,300,280);
p.frameBounds = [rect, new cjs.Rectangle(-200,-200,400,400), new cjs.Rectangle(-150,-140,300,280)];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.location_0_1_img();
	this.instance.setTransform(-150,-140);

	this.instance_1 = new lib.location_1_1_img();
	this.instance_1.setTransform(-150,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// decor
	this.instance_2 = new lib.current_location_mc();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvcOXQmal9gBoaQABoZGal9QGal8JCgBQJDABGbF8QGZF9AAIZQAAIamZF9QmbF9pDAAQpCAAmal9g");
	this.shape.setTransform(-2,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-140,300,280);
p.frameBounds = [rect, new cjs.Rectangle(-200,-200,400,400), new cjs.Rectangle(-150,-140,300,280)];


(lib.lips_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick3_img();
	this.instance.setTransform(35.4,-70.7,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.lips_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick19_img();
	this.instance.setTransform(-70.7,-35.3,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.lips_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick2_img();
	this.instance.setTransform(35.4,-70.7,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.lips_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick5_img();
	this.instance.setTransform(-70.7,-35.3,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.lips_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick22_img();
	this.instance.setTransform(35.4,-70.7,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.lips_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick12_img();
	this.instance.setTransform(-70.7,-35.3,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.lips_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick36_img();
	this.instance.setTransform(35.4,-70.7,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.lips_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick6_img();
	this.instance.setTransform(-70.7,-35.3,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.lips_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick15_img();
	this.instance.setTransform(35.4,-70.7,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.lips_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick14_img();
	this.instance.setTransform(-70.7,-35.3,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.lips_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick19_img();
	this.instance.setTransform(35.4,-70.7,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.lips_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick20_img();
	this.instance.setTransform(-70.7,-35.3,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.indicator_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuqCLQg2ABgngmQglgmgBg2QABg0AlgnQAnglA2gBIdqAAQA1ABAmAlQAnAngBA0QABA2gnAmQgmAmg1gBg");
	mask.setTransform(109,14);

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
p.nominalBounds = rect = new cjs.Rectangle(2,2,216,26);
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

	// heroes
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(505,332);

	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(300,322);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hero_1,p:{x:300,y:322}},{t:this.hero_2,p:{x:505,y:332}}]}).to({state:[{t:this.hero_2,p:{x:408,y:328}}]},1).to({state:[{t:this.hero_1,p:{x:420,y:328}}]},1).to({state:[{t:this.hero_2,p:{x:330,y:332}},{t:this.hero_1,p:{x:515,y:322}}]},1).to({state:[{t:this.hero_2,p:{x:408,y:328}}]},1).to({state:[{t:this.hero_1,p:{x:420,y:328}}]},1).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-200,0);

	this.instance_1 = new lib.background_4_img();
	this.instance_1.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,646);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,642), rect, new cjs.Rectangle(-200,0,1200,646), rect=new cjs.Rectangle(-200,0,1200,642), rect];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero_2_main_mc();
	this.instance.setTransform(1200,340,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(149).to({_off:false},0).to({x:600},30).wait(1));

	// animation
	this.instance_1 = new lib.hero_1_main_mc();
	this.instance_1.setTransform(1200,335);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({x:610},30).wait(40).to({skewY:180},0).to({x:1200},30).to({_off:true},1).wait(20));

	// animation
	this.instance_2 = new lib.hero_2_main_mc();
	this.instance_2.setTransform(600,340,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40).to({skewY:0},0).to({x:1200},29).to({_off:true},1).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(468,31,859,623.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(476.5,31,850.5,623.1), new cjs.Rectangle(497.2,31,829.8,623.1), new cjs.Rectangle(517.9,31,809.1,623.1), new cjs.Rectangle(538.6,31,788.5,623.1), new cjs.Rectangle(559.3,31,767.8,623.1), new cjs.Rectangle(580,31,747.1,623.1), new cjs.Rectangle(600.7,31,726.4,623.1), new cjs.Rectangle(621.4,31,705.7,623.1), new cjs.Rectangle(642,31,685,623.1), new cjs.Rectangle(662.7,31,664.3,623.1), new cjs.Rectangle(683.4,31,643.6,623.1), new cjs.Rectangle(704.1,31,622.9,623.1), new cjs.Rectangle(724.8,31,602.3,623.1), new cjs.Rectangle(745.5,31,581.6,623.1), new cjs.Rectangle(766.2,31,560.9,623.1), new cjs.Rectangle(786.9,31,540.2,623.1), new cjs.Rectangle(807.6,31,519.5,623.1), new cjs.Rectangle(828.3,31,498.8,623.1), new cjs.Rectangle(848.9,31,478.1,623.1), new cjs.Rectangle(869.6,31,457.4,623.1), new cjs.Rectangle(890.3,31,417.1,623.1), new cjs.Rectangle(911,31,376.7,623.1), new cjs.Rectangle(931.7,31,336.4,623.1), new cjs.Rectangle(952.4,31,296,623.1), new cjs.Rectangle(973.1,31,255.6,623.1), new cjs.Rectangle(957,31,292.3,623.1), new cjs.Rectangle(937.4,31,332.6,623.1), new cjs.Rectangle(917.7,31,372.9,623.1), new cjs.Rectangle(898,31,413.3,623.1), new cjs.Rectangle(878.4,31,453.7,623.1), new cjs.Rectangle(858.7,51.9,252,597.1), new cjs.Rectangle(839,51.9,252,597.1), new cjs.Rectangle(819.4,51.9,252,597.1), new cjs.Rectangle(799.7,51.9,252,597.1), new cjs.Rectangle(780,51.9,252,597.1), new cjs.Rectangle(760.4,51.9,252,597.1), new cjs.Rectangle(740.7,51.9,252,597.1), new cjs.Rectangle(721,51.9,252,597.1), new cjs.Rectangle(701.4,51.9,252,597.1), new cjs.Rectangle(681.7,51.9,252,597.1), new cjs.Rectangle(662,51.9,252,597.1), new cjs.Rectangle(642.4,51.9,252,597.1), new cjs.Rectangle(622.7,51.9,252,597.1), new cjs.Rectangle(603,51.9,252,597.1), new cjs.Rectangle(583.4,51.9,252,597.1), new cjs.Rectangle(563.7,51.9,252,597.1), new cjs.Rectangle(544,51.9,252,597.1), new cjs.Rectangle(524.4,51.9,252,597.1), new cjs.Rectangle(504.7,51.9,252,597.1), rect=new cjs.Rectangle(485,51.9,252,597.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(483,51.9,252,597.1), new cjs.Rectangle(502.7,51.9,252,597.1), new cjs.Rectangle(522.4,51.9,252,597.1), new cjs.Rectangle(542,51.9,252,597.1), new cjs.Rectangle(561.7,51.9,252,597.1), new cjs.Rectangle(581.4,51.9,252,597.1), new cjs.Rectangle(601,51.9,252,597.1), new cjs.Rectangle(620.7,51.9,252,597.1), new cjs.Rectangle(640.4,51.9,252,597.1), new cjs.Rectangle(660,51.9,252,597.1), new cjs.Rectangle(679.7,51.9,252,597.1), new cjs.Rectangle(699.4,51.9,252,597.1), new cjs.Rectangle(719,51.9,252,597.1), new cjs.Rectangle(738.7,51.9,252,597.1), new cjs.Rectangle(758.4,51.9,252,597.1), new cjs.Rectangle(778,51.9,252,597.1), new cjs.Rectangle(797.7,51.9,252,597.1), new cjs.Rectangle(817.4,51.9,252,597.1), new cjs.Rectangle(837,51.9,252,597.1), new cjs.Rectangle(856.7,51.9,252,597.1), new cjs.Rectangle(876.4,31,447.2,623.1), new cjs.Rectangle(896,31,407.5,623.1), new cjs.Rectangle(915.7,31,367.9,623.1), new cjs.Rectangle(935.4,31,328.2,623.1), new cjs.Rectangle(955,31,288.5,623.1), new cjs.Rectangle(968,31,258.7,623.1), new cjs.Rectangle(948,31,298.3,623.1), new cjs.Rectangle(928,31,338,623.1), new cjs.Rectangle(908,31,377.7,623.1), new cjs.Rectangle(888,31,417.3,623.1), new cjs.Rectangle(868,31,457,623.1), new cjs.Rectangle(848,31,255.5,623.1), new cjs.Rectangle(828,31,255.5,623.1), new cjs.Rectangle(808,31,255.5,623.1), new cjs.Rectangle(788,31,255.5,623.1), new cjs.Rectangle(768,31,255.5,623.1), new cjs.Rectangle(748,31,255.5,623.1), new cjs.Rectangle(728,31,255.5,623.1), new cjs.Rectangle(708,31,255.5,623.1), new cjs.Rectangle(688,31,255.5,623.1), new cjs.Rectangle(668,31,255.5,623.1), new cjs.Rectangle(648,31,255.5,623.1), new cjs.Rectangle(628,31,255.5,623.1), new cjs.Rectangle(608,31,255.5,623.1), new cjs.Rectangle(588,31,255.5,623.1), new cjs.Rectangle(568,31,255.5,623.1), new cjs.Rectangle(548,31,255.5,623.1), new cjs.Rectangle(528,31,255.5,623.1), new cjs.Rectangle(508,31,255.5,623.1), new cjs.Rectangle(488,31,255.5,623.1), new cjs.Rectangle(468,31,255.5,623.1)];


(lib.frame_locations_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":179});

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(-220,90);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({y:-500},0).wait(23).to({y:140},16).to({y:90},4).wait(45).to({scaleX:0.93,scaleY:0.93},30).wait(10).to({y:600},20).wait(31));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(220,90);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:-500},0).wait(33).to({y:140},16).to({y:90},4).wait(35).to({scaleX:0.93,scaleY:0.93},30).wait(20).to({y:600},20).wait(21));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(0,-100);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({y:-600},0).wait(43).to({y:-50},16).to({y:-100},4).wait(25).to({rotation:-5},10).to({rotation:5},20).to({rotation:0},10).wait(20).to({y:500},20).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-240,740,470);
p.frameBounds = [rect, rect=new cjs.Rectangle(-370,-740,740,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-740,740,420), new cjs.Rectangle(-370,-740,740,460), new cjs.Rectangle(-370,-740,740,500), new cjs.Rectangle(-370,-740,740,540), new cjs.Rectangle(-370,-740,740,580), new cjs.Rectangle(-370,-740,740,620), new cjs.Rectangle(-370,-740,740,660), new cjs.Rectangle(-370,-740,740,700), new cjs.Rectangle(-370,-740,740,740), new cjs.Rectangle(-370,-740,740,780), new cjs.Rectangle(-370,-740,740,820), new cjs.Rectangle(-370,-740,740,860), new cjs.Rectangle(-370,-740,740,900), new cjs.Rectangle(-370,-740,740,940), new cjs.Rectangle(-370,-740,740,980), new cjs.Rectangle(-370,-740,740,1020), new cjs.Rectangle(-370,-740,740,1007.5), new cjs.Rectangle(-370,-740,740,995), new cjs.Rectangle(-370,-740,740,982.5), new cjs.Rectangle(-370,-740,740,970), new cjs.Rectangle(-370,-705.6,740,935.6), new cjs.Rectangle(-370,-671.2,740,901.3), new cjs.Rectangle(-370,-636.9,740,866.9), new cjs.Rectangle(-370,-602.5,740,832.5), new cjs.Rectangle(-370,-568.1,740,808.1), new cjs.Rectangle(-370,-533.7,740,813.8), new cjs.Rectangle(-370,-499.4,740,766.9), new cjs.Rectangle(-370,-465,740,720), new cjs.Rectangle(-370,-430.6,740,673.2), new cjs.Rectangle(-370,-396.2,740,626.3), new cjs.Rectangle(-370,-361.9,740,591.9), new cjs.Rectangle(-370,-327.5,740,557.5), new cjs.Rectangle(-370,-293.1,740,523.2), new cjs.Rectangle(-370,-258.7,740,488.8), new cjs.Rectangle(-370,-224.4,740,454.4), new cjs.Rectangle(-370,-190,740,420), new cjs.Rectangle(-370,-202.5,740,432.5), new cjs.Rectangle(-370,-215,740,445), new cjs.Rectangle(-370,-227.5,740,457.5), rect=new cjs.Rectangle(-370,-240,740,470), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-369.6,-241.2,739.3,471), new cjs.Rectangle(-369.3,-242.6,738.6,472), new cjs.Rectangle(-368.9,-243.8,738,473), new cjs.Rectangle(-368.6,-245.1,737.3,473.9), new cjs.Rectangle(-368.3,-246.4,736.6,474.9), new cjs.Rectangle(-367.9,-247.6,736,475.8), new cjs.Rectangle(-367.6,-248.8,735.3,476.7), new cjs.Rectangle(-367.3,-250.1,734.6,477.6), new cjs.Rectangle(-366.9,-251.3,734,478.6), new cjs.Rectangle(-366.6,-252.5,733.3,479.4), new cjs.Rectangle(-366.3,-251.3,732.6,478), new cjs.Rectangle(-365.9,-250.1,732,476.4), new cjs.Rectangle(-365.6,-248.8,731.3,474.8), new cjs.Rectangle(-365.3,-247.6,730.6,473.3), new cjs.Rectangle(-365,-246.4,730,471.8), new cjs.Rectangle(-364.7,-245.1,729.4,470.3), new cjs.Rectangle(-364.3,-243.9,728.7,468.7), new cjs.Rectangle(-364,-242.5,728.1,467.1), new cjs.Rectangle(-363.7,-241.2,727.4,465.4), new cjs.Rectangle(-363.3,-240,726.7,463.9), new cjs.Rectangle(-363,-241.2,726.1,464.8), new cjs.Rectangle(-362.7,-242.5,725.4,465.8), new cjs.Rectangle(-362.3,-243.8,724.7,466.8), new cjs.Rectangle(-362,-245.1,724.1,467.7), new cjs.Rectangle(-361.7,-246.3,723.4,468.6), new cjs.Rectangle(-361.3,-247.6,722.7,469.7), new cjs.Rectangle(-361,-248.8,722.1,470.5), new cjs.Rectangle(-360.7,-250,721.4,471.4), new cjs.Rectangle(-360.3,-251.3,720.7,472.3), new cjs.Rectangle(-360,-252.5,720,473.2), new cjs.Rectangle(-360,-251.3,720,472), new cjs.Rectangle(-360,-250.1,720,470.8), new cjs.Rectangle(-360,-248.8,720,469.5), new cjs.Rectangle(-360,-247.6,720,468.3), new cjs.Rectangle(-360,-246.3,720,467), new cjs.Rectangle(-360,-245.1,720,465.8), new cjs.Rectangle(-360,-243.9,720,464.6), new cjs.Rectangle(-360,-242.5,720,463.2), new cjs.Rectangle(-360,-241.2,720,461.9), new cjs.Rectangle(-360,-240,720,460.7), new cjs.Rectangle(-359.9,-240,720,486.2), new cjs.Rectangle(-359.9,-240,720,511.6), new cjs.Rectangle(-359.9,-240,720,537.1), new cjs.Rectangle(-359.9,-240,720,562.6), new cjs.Rectangle(-359.9,-240,720,588.1), new cjs.Rectangle(-359.9,-240,720,613.6), new cjs.Rectangle(-359.9,-240,720,639.1), new cjs.Rectangle(-359.9,-240,720,664.6), new cjs.Rectangle(-359.9,-240,720,690.1), new cjs.Rectangle(-359.9,-240,720,715.6), new cjs.Rectangle(-359.9,-240,720,741.1), new cjs.Rectangle(-359.9,-240,720,766.6), new cjs.Rectangle(-359.9,-240,720,792.1), new cjs.Rectangle(-359.9,-240,720,817.6), new cjs.Rectangle(-359.9,-240,720,843.1), new cjs.Rectangle(-359.9,-240,720,868.6), new cjs.Rectangle(-359.9,-240,720,894.1), new cjs.Rectangle(-359.9,-240,720,919.6), new cjs.Rectangle(-359.9,-240,720,945.1), new cjs.Rectangle(-360,-240,720,970.7), new cjs.Rectangle(-360,-210,720,940.7), new cjs.Rectangle(-360,-180,720,910.7), new cjs.Rectangle(-360,-150,720,880.7), new cjs.Rectangle(-360,-120,720,850.7), new cjs.Rectangle(-360,-90,720,820.7), new cjs.Rectangle(-360,-60,720,790.7), new cjs.Rectangle(-360,-30,720,760.7), new cjs.Rectangle(-360,0,720,730.7), new cjs.Rectangle(-360,30,720,700.7), new cjs.Rectangle(-360,60,720,670.7), new cjs.Rectangle(-360,90,720,640.7), new cjs.Rectangle(-360,120,720,610.7), new cjs.Rectangle(-360,150,720,580.7), new cjs.Rectangle(-360,180,720,550.7), new cjs.Rectangle(-360,210,720,520.7), new cjs.Rectangle(-360,240,720,490.7), new cjs.Rectangle(-360,270,720,460.7), new cjs.Rectangle(-360,300,720,430.7), new cjs.Rectangle(-360,330,720,400.7), rect=new cjs.Rectangle(-360,360,720,370.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":149});

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(-220,90);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({y:-500},0).wait(23).to({y:140},16).to({y:90},4).wait(45).to({scaleX:0.93,scaleY:0.93},30).wait(31));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(220,90);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({y:-500},0).wait(33).to({y:140},16).to({y:90},4).wait(35).to({scaleX:0.93,scaleY:0.93},30).wait(31));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(0,-100);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:-600},0).wait(43).to({y:-50},16).to({y:-100},4).wait(25).to({rotation:-5},10).to({rotation:5},20).to({rotation:0},10).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-240,740,470);
p.frameBounds = [rect, rect=new cjs.Rectangle(-370,-740,740,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-740,740,420), new cjs.Rectangle(-370,-740,740,460), new cjs.Rectangle(-370,-740,740,500), new cjs.Rectangle(-370,-740,740,540), new cjs.Rectangle(-370,-740,740,580), new cjs.Rectangle(-370,-740,740,620), new cjs.Rectangle(-370,-740,740,660), new cjs.Rectangle(-370,-740,740,700), new cjs.Rectangle(-370,-740,740,740), new cjs.Rectangle(-370,-740,740,780), new cjs.Rectangle(-370,-740,740,820), new cjs.Rectangle(-370,-740,740,860), new cjs.Rectangle(-370,-740,740,900), new cjs.Rectangle(-370,-740,740,940), new cjs.Rectangle(-370,-740,740,980), new cjs.Rectangle(-370,-740,740,1020), new cjs.Rectangle(-370,-740,740,1007.5), new cjs.Rectangle(-370,-740,740,995), new cjs.Rectangle(-370,-740,740,982.5), new cjs.Rectangle(-370,-740,740,970), new cjs.Rectangle(-370,-705.6,740,935.6), new cjs.Rectangle(-370,-671.2,740,901.3), new cjs.Rectangle(-370,-636.9,740,866.9), new cjs.Rectangle(-370,-602.5,740,832.5), new cjs.Rectangle(-370,-568.1,740,808.1), new cjs.Rectangle(-370,-533.7,740,813.8), new cjs.Rectangle(-370,-499.4,740,766.9), new cjs.Rectangle(-370,-465,740,720), new cjs.Rectangle(-370,-430.6,740,673.2), new cjs.Rectangle(-370,-396.2,740,626.3), new cjs.Rectangle(-370,-361.9,740,591.9), new cjs.Rectangle(-370,-327.5,740,557.5), new cjs.Rectangle(-370,-293.1,740,523.2), new cjs.Rectangle(-370,-258.7,740,488.8), new cjs.Rectangle(-370,-224.4,740,454.4), new cjs.Rectangle(-370,-190,740,420), new cjs.Rectangle(-370,-202.5,740,432.5), new cjs.Rectangle(-370,-215,740,445), new cjs.Rectangle(-370,-227.5,740,457.5), rect=new cjs.Rectangle(-370,-240,740,470), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-369.6,-241.2,739.3,471), new cjs.Rectangle(-369.3,-242.6,738.6,472), new cjs.Rectangle(-368.9,-243.8,738,473), new cjs.Rectangle(-368.6,-245.1,737.3,473.9), new cjs.Rectangle(-368.3,-246.4,736.6,474.9), new cjs.Rectangle(-367.9,-247.6,736,475.8), new cjs.Rectangle(-367.6,-248.8,735.3,476.7), new cjs.Rectangle(-367.3,-250.1,734.6,477.6), new cjs.Rectangle(-366.9,-251.3,734,478.6), new cjs.Rectangle(-366.6,-252.5,733.3,479.4), new cjs.Rectangle(-366.3,-251.3,732.6,478), new cjs.Rectangle(-365.9,-250.1,732,476.4), new cjs.Rectangle(-365.6,-248.8,731.3,474.8), new cjs.Rectangle(-365.3,-247.6,730.6,473.3), new cjs.Rectangle(-365,-246.4,730,471.8), new cjs.Rectangle(-364.7,-245.1,729.4,470.3), new cjs.Rectangle(-364.3,-243.9,728.7,468.7), new cjs.Rectangle(-364,-242.5,728.1,467.1), new cjs.Rectangle(-363.7,-241.2,727.4,465.4), new cjs.Rectangle(-363.3,-240,726.7,463.9), new cjs.Rectangle(-363,-241.2,726.1,464.8), new cjs.Rectangle(-362.7,-242.5,725.4,465.8), new cjs.Rectangle(-362.3,-243.8,724.7,466.8), new cjs.Rectangle(-362,-245.1,724.1,467.7), new cjs.Rectangle(-361.7,-246.3,723.4,468.6), new cjs.Rectangle(-361.3,-247.6,722.7,469.7), new cjs.Rectangle(-361,-248.8,722.1,470.5), new cjs.Rectangle(-360.7,-250,721.4,471.4), new cjs.Rectangle(-360.3,-251.3,720.7,472.3), new cjs.Rectangle(-360,-252.5,720,473.2), new cjs.Rectangle(-360,-251.3,720,472), new cjs.Rectangle(-360,-250.1,720,470.8), new cjs.Rectangle(-360,-248.8,720,469.5), new cjs.Rectangle(-360,-247.6,720,468.3), new cjs.Rectangle(-360,-246.3,720,467), new cjs.Rectangle(-360,-245.1,720,465.8), new cjs.Rectangle(-360,-243.9,720,464.6), new cjs.Rectangle(-360,-242.5,720,463.2), new cjs.Rectangle(-360,-241.2,720,461.9), rect=new cjs.Rectangle(-360,-240,720,460.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":149});

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-220,90);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-500},0).wait(23).to({y:140},16).to({y:90},4).wait(45).to({scaleX:0.93,scaleY:0.93},30).wait(31));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(220,90);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:-500},0).wait(33).to({y:140},16).to({y:90},4).wait(35).to({scaleX:0.93,scaleY:0.93},30).wait(31));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(0,-100);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({y:-600},0).wait(43).to({y:-50},16).to({y:-100},4).wait(25).to({rotation:-5},10).to({rotation:5},20).to({rotation:0},10).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-240,740,470);
p.frameBounds = [rect, rect=new cjs.Rectangle(-370,-740,740,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-740,740,420), new cjs.Rectangle(-370,-740,740,460), new cjs.Rectangle(-370,-740,740,500), new cjs.Rectangle(-370,-740,740,540), new cjs.Rectangle(-370,-740,740,580), new cjs.Rectangle(-370,-740,740,620), new cjs.Rectangle(-370,-740,740,660), new cjs.Rectangle(-370,-740,740,700), new cjs.Rectangle(-370,-740,740,740), new cjs.Rectangle(-370,-740,740,780), new cjs.Rectangle(-370,-740,740,820), new cjs.Rectangle(-370,-740,740,860), new cjs.Rectangle(-370,-740,740,900), new cjs.Rectangle(-370,-740,740,940), new cjs.Rectangle(-370,-740,740,980), new cjs.Rectangle(-370,-740,740,1020), new cjs.Rectangle(-370,-740,740,1007.5), new cjs.Rectangle(-370,-740,740,995), new cjs.Rectangle(-370,-740,740,982.5), new cjs.Rectangle(-370,-740,740,970), new cjs.Rectangle(-370,-705.6,740,935.6), new cjs.Rectangle(-370,-671.2,740,901.3), new cjs.Rectangle(-370,-636.9,740,866.9), new cjs.Rectangle(-370,-602.5,740,832.5), new cjs.Rectangle(-370,-568.1,740,808.1), new cjs.Rectangle(-370,-533.7,740,813.8), new cjs.Rectangle(-370,-499.4,740,766.9), new cjs.Rectangle(-370,-465,740,720), new cjs.Rectangle(-370,-430.6,740,673.2), new cjs.Rectangle(-370,-396.2,740,626.3), new cjs.Rectangle(-370,-361.9,740,591.9), new cjs.Rectangle(-370,-327.5,740,557.5), new cjs.Rectangle(-370,-293.1,740,523.2), new cjs.Rectangle(-370,-258.7,740,488.8), new cjs.Rectangle(-370,-224.4,740,454.4), new cjs.Rectangle(-370,-190,740,420), new cjs.Rectangle(-370,-202.5,740,432.5), new cjs.Rectangle(-370,-215,740,445), new cjs.Rectangle(-370,-227.5,740,457.5), rect=new cjs.Rectangle(-370,-240,740,470), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-369.6,-241.2,739.3,471), new cjs.Rectangle(-369.3,-242.6,738.6,472), new cjs.Rectangle(-368.9,-243.8,738,473), new cjs.Rectangle(-368.6,-245.1,737.3,473.9), new cjs.Rectangle(-368.3,-246.4,736.6,474.9), new cjs.Rectangle(-367.9,-247.6,736,475.8), new cjs.Rectangle(-367.6,-248.8,735.3,476.7), new cjs.Rectangle(-367.3,-250.1,734.6,477.6), new cjs.Rectangle(-366.9,-251.3,734,478.6), new cjs.Rectangle(-366.6,-252.5,733.3,479.4), new cjs.Rectangle(-366.3,-251.3,732.6,478), new cjs.Rectangle(-365.9,-250.1,732,476.4), new cjs.Rectangle(-365.6,-248.8,731.3,474.8), new cjs.Rectangle(-365.3,-247.6,730.6,473.3), new cjs.Rectangle(-365,-246.4,730,471.8), new cjs.Rectangle(-364.7,-245.1,729.4,470.3), new cjs.Rectangle(-364.3,-243.9,728.7,468.7), new cjs.Rectangle(-364,-242.5,728.1,467.1), new cjs.Rectangle(-363.7,-241.2,727.4,465.4), new cjs.Rectangle(-363.3,-240,726.7,463.9), new cjs.Rectangle(-363,-241.2,726.1,464.8), new cjs.Rectangle(-362.7,-242.5,725.4,465.8), new cjs.Rectangle(-362.3,-243.8,724.7,466.8), new cjs.Rectangle(-362,-245.1,724.1,467.7), new cjs.Rectangle(-361.7,-246.3,723.4,468.6), new cjs.Rectangle(-361.3,-247.6,722.7,469.7), new cjs.Rectangle(-361,-248.8,722.1,470.5), new cjs.Rectangle(-360.7,-250,721.4,471.4), new cjs.Rectangle(-360.3,-251.3,720.7,472.3), new cjs.Rectangle(-360,-252.5,720,473.2), new cjs.Rectangle(-360,-251.3,720,472), new cjs.Rectangle(-360,-250.1,720,470.8), new cjs.Rectangle(-360,-248.8,720,469.5), new cjs.Rectangle(-360,-247.6,720,468.3), new cjs.Rectangle(-360,-246.3,720,467), new cjs.Rectangle(-360,-245.1,720,465.8), new cjs.Rectangle(-360,-243.9,720,464.6), new cjs.Rectangle(-360,-242.5,720,463.2), new cjs.Rectangle(-360,-241.2,720,461.9), rect=new cjs.Rectangle(-360,-240,720,460.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":149});

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(-220,90);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-500},0).wait(23).to({y:140},16).to({y:90},4).wait(35).to({scaleX:0.93,scaleY:0.93},30).wait(41));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(220,90);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({y:-500},0).wait(33).to({y:140},16).to({y:90},4).wait(25).to({scaleX:0.93,scaleY:0.93},30).wait(41));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(0,-100);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-600},0).wait(43).to({y:-50},16).to({y:-100},4).wait(15).to({rotation:-5},10).to({rotation:5},20).to({rotation:0},10).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-240,740,470);
p.frameBounds = [rect, rect=new cjs.Rectangle(-370,-740,740,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-740,740,420), new cjs.Rectangle(-370,-740,740,460), new cjs.Rectangle(-370,-740,740,500), new cjs.Rectangle(-370,-740,740,540), new cjs.Rectangle(-370,-740,740,580), new cjs.Rectangle(-370,-740,740,620), new cjs.Rectangle(-370,-740,740,660), new cjs.Rectangle(-370,-740,740,700), new cjs.Rectangle(-370,-740,740,740), new cjs.Rectangle(-370,-740,740,780), new cjs.Rectangle(-370,-740,740,820), new cjs.Rectangle(-370,-740,740,860), new cjs.Rectangle(-370,-740,740,900), new cjs.Rectangle(-370,-740,740,940), new cjs.Rectangle(-370,-740,740,980), new cjs.Rectangle(-370,-740,740,1020), new cjs.Rectangle(-370,-740,740,1007.5), new cjs.Rectangle(-370,-740,740,995), new cjs.Rectangle(-370,-740,740,982.5), new cjs.Rectangle(-370,-740,740,970), new cjs.Rectangle(-370,-705.6,740,935.6), new cjs.Rectangle(-370,-671.2,740,901.3), new cjs.Rectangle(-370,-636.9,740,866.9), new cjs.Rectangle(-370,-602.5,740,832.5), new cjs.Rectangle(-370,-568.1,740,808.1), new cjs.Rectangle(-370,-533.7,740,813.8), new cjs.Rectangle(-370,-499.4,740,766.9), new cjs.Rectangle(-370,-465,740,720), new cjs.Rectangle(-370,-430.6,740,673.2), new cjs.Rectangle(-370,-396.2,740,626.3), new cjs.Rectangle(-370,-361.9,740,591.9), new cjs.Rectangle(-370,-327.5,740,557.5), new cjs.Rectangle(-370,-293.1,740,523.2), new cjs.Rectangle(-370,-258.7,740,488.8), new cjs.Rectangle(-370,-224.4,740,454.4), new cjs.Rectangle(-370,-190,740,420), new cjs.Rectangle(-370,-202.5,740,432.5), new cjs.Rectangle(-370,-215,740,445), new cjs.Rectangle(-370,-227.5,740,457.5), rect=new cjs.Rectangle(-370,-240,740,470), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-369.6,-241.2,739.3,471), new cjs.Rectangle(-369.3,-242.6,738.6,472), new cjs.Rectangle(-368.9,-243.8,738,473), new cjs.Rectangle(-368.6,-245.1,737.3,473.9), new cjs.Rectangle(-368.3,-246.4,736.6,474.9), new cjs.Rectangle(-367.9,-247.6,736,475.8), new cjs.Rectangle(-367.6,-248.8,735.3,476.7), new cjs.Rectangle(-367.3,-250.1,734.6,477.6), new cjs.Rectangle(-366.9,-251.3,734,478.6), new cjs.Rectangle(-366.6,-252.5,733.3,479.4), new cjs.Rectangle(-366.3,-251.3,732.6,478), new cjs.Rectangle(-365.9,-250.1,732,476.4), new cjs.Rectangle(-365.6,-248.8,731.3,474.8), new cjs.Rectangle(-365.3,-247.6,730.6,473.3), new cjs.Rectangle(-365,-246.4,730,471.8), new cjs.Rectangle(-364.7,-245.1,729.4,470.3), new cjs.Rectangle(-364.3,-243.9,728.7,468.7), new cjs.Rectangle(-364,-242.5,728.1,467.1), new cjs.Rectangle(-363.7,-241.2,727.4,465.4), new cjs.Rectangle(-363.3,-240,726.7,463.9), new cjs.Rectangle(-363,-241.2,726.1,464.8), new cjs.Rectangle(-362.7,-242.5,725.4,465.8), new cjs.Rectangle(-362.3,-243.8,724.7,466.8), new cjs.Rectangle(-362,-245.1,724.1,467.7), new cjs.Rectangle(-361.7,-246.3,723.4,468.6), new cjs.Rectangle(-361.3,-247.6,722.7,469.7), new cjs.Rectangle(-361,-248.8,722.1,470.5), new cjs.Rectangle(-360.7,-250,721.4,471.4), new cjs.Rectangle(-360.3,-251.3,720.7,472.3), new cjs.Rectangle(-360,-252.5,720,473.2), new cjs.Rectangle(-360,-251.3,720,472), new cjs.Rectangle(-360,-250.1,720,470.8), new cjs.Rectangle(-360,-248.8,720,469.5), new cjs.Rectangle(-360,-247.6,720,468.3), new cjs.Rectangle(-360,-246.3,720,467), new cjs.Rectangle(-360,-245.1,720,465.8), new cjs.Rectangle(-360,-243.9,720,464.6), new cjs.Rectangle(-360,-242.5,720,463.2), new cjs.Rectangle(-360,-241.2,720,461.9), rect=new cjs.Rectangle(-360,-240,720,460.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":149});

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-220,90);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:-500},0).wait(23).to({y:140},16).to({y:90},4).wait(35).to({scaleX:0.93,scaleY:0.93},30).wait(41));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(220,90);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-500},0).wait(33).to({y:140},16).to({y:90},4).wait(25).to({scaleX:0.93,scaleY:0.93},30).wait(41));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(0,-100);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-600},0).wait(43).to({y:-50},16).to({y:-100},4).wait(15).to({rotation:-5},10).to({rotation:5},20).to({rotation:0},10).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-240,740,470);
p.frameBounds = [rect, rect=new cjs.Rectangle(-370,-740,740,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-740,740,420), new cjs.Rectangle(-370,-740,740,460), new cjs.Rectangle(-370,-740,740,500), new cjs.Rectangle(-370,-740,740,540), new cjs.Rectangle(-370,-740,740,580), new cjs.Rectangle(-370,-740,740,620), new cjs.Rectangle(-370,-740,740,660), new cjs.Rectangle(-370,-740,740,700), new cjs.Rectangle(-370,-740,740,740), new cjs.Rectangle(-370,-740,740,780), new cjs.Rectangle(-370,-740,740,820), new cjs.Rectangle(-370,-740,740,860), new cjs.Rectangle(-370,-740,740,900), new cjs.Rectangle(-370,-740,740,940), new cjs.Rectangle(-370,-740,740,980), new cjs.Rectangle(-370,-740,740,1020), new cjs.Rectangle(-370,-740,740,1007.5), new cjs.Rectangle(-370,-740,740,995), new cjs.Rectangle(-370,-740,740,982.5), new cjs.Rectangle(-370,-740,740,970), new cjs.Rectangle(-370,-705.6,740,935.6), new cjs.Rectangle(-370,-671.2,740,901.3), new cjs.Rectangle(-370,-636.9,740,866.9), new cjs.Rectangle(-370,-602.5,740,832.5), new cjs.Rectangle(-370,-568.1,740,808.1), new cjs.Rectangle(-370,-533.7,740,813.8), new cjs.Rectangle(-370,-499.4,740,766.9), new cjs.Rectangle(-370,-465,740,720), new cjs.Rectangle(-370,-430.6,740,673.2), new cjs.Rectangle(-370,-396.2,740,626.3), new cjs.Rectangle(-370,-361.9,740,591.9), new cjs.Rectangle(-370,-327.5,740,557.5), new cjs.Rectangle(-370,-293.1,740,523.2), new cjs.Rectangle(-370,-258.7,740,488.8), new cjs.Rectangle(-370,-224.4,740,454.4), new cjs.Rectangle(-370,-190,740,420), new cjs.Rectangle(-370,-202.5,740,432.5), new cjs.Rectangle(-370,-215,740,445), new cjs.Rectangle(-370,-227.5,740,457.5), rect=new cjs.Rectangle(-370,-240,740,470), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-369.6,-241.2,739.3,471), new cjs.Rectangle(-369.3,-242.6,738.6,472), new cjs.Rectangle(-368.9,-243.8,738,473), new cjs.Rectangle(-368.6,-245.1,737.3,473.9), new cjs.Rectangle(-368.3,-246.4,736.6,474.9), new cjs.Rectangle(-367.9,-247.6,736,475.8), new cjs.Rectangle(-367.6,-248.8,735.3,476.7), new cjs.Rectangle(-367.3,-250.1,734.6,477.6), new cjs.Rectangle(-366.9,-251.3,734,478.6), new cjs.Rectangle(-366.6,-252.5,733.3,479.4), new cjs.Rectangle(-366.3,-251.3,732.6,478), new cjs.Rectangle(-365.9,-250.1,732,476.4), new cjs.Rectangle(-365.6,-248.8,731.3,474.8), new cjs.Rectangle(-365.3,-247.6,730.6,473.3), new cjs.Rectangle(-365,-246.4,730,471.8), new cjs.Rectangle(-364.7,-245.1,729.4,470.3), new cjs.Rectangle(-364.3,-243.9,728.7,468.7), new cjs.Rectangle(-364,-242.5,728.1,467.1), new cjs.Rectangle(-363.7,-241.2,727.4,465.4), new cjs.Rectangle(-363.3,-240,726.7,463.9), new cjs.Rectangle(-363,-241.2,726.1,464.8), new cjs.Rectangle(-362.7,-242.5,725.4,465.8), new cjs.Rectangle(-362.3,-243.8,724.7,466.8), new cjs.Rectangle(-362,-245.1,724.1,467.7), new cjs.Rectangle(-361.7,-246.3,723.4,468.6), new cjs.Rectangle(-361.3,-247.6,722.7,469.7), new cjs.Rectangle(-361,-248.8,722.1,470.5), new cjs.Rectangle(-360.7,-250,721.4,471.4), new cjs.Rectangle(-360.3,-251.3,720.7,472.3), new cjs.Rectangle(-360,-252.5,720,473.2), new cjs.Rectangle(-360,-251.3,720,472), new cjs.Rectangle(-360,-250.1,720,470.8), new cjs.Rectangle(-360,-248.8,720,469.5), new cjs.Rectangle(-360,-247.6,720,468.3), new cjs.Rectangle(-360,-246.3,720,467), new cjs.Rectangle(-360,-245.1,720,465.8), new cjs.Rectangle(-360,-243.9,720,464.6), new cjs.Rectangle(-360,-242.5,720,463.2), new cjs.Rectangle(-360,-241.2,720,461.9), rect=new cjs.Rectangle(-360,-240,720,460.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.frame_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":149});

	// decor
	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(-85,-25.1,1,1,-30,0,0,0,-0.1);
	this.pointer_1.alpha = 0.012;
	this.pointer_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pointer_1).wait(60).to({_off:false},0).to({alpha:1},9).to({alpha:0.012},10).to({_off:true},1).wait(70));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(-220,90);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-500},0).wait(23).to({y:140},16).to({y:90},4).wait(35).to({scaleX:0.93,scaleY:0.93},20).wait(51));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(220,90);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-500},0).wait(33).to({y:140},16).to({y:90},4).wait(25).to({scaleX:0.93,scaleY:0.93},20).wait(51));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(0,-100);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:-600},0).wait(43).to({y:-50},16).to({y:-100},4).wait(15).to({rotation:-5},10).to({rotation:5},15).to({rotation:0},10).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-370,-240,740,470);
p.frameBounds = [rect, rect=new cjs.Rectangle(-370,-740,740,380), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-370,-740,740,420), new cjs.Rectangle(-370,-740,740,460), new cjs.Rectangle(-370,-740,740,500), new cjs.Rectangle(-370,-740,740,540), new cjs.Rectangle(-370,-740,740,580), new cjs.Rectangle(-370,-740,740,620), new cjs.Rectangle(-370,-740,740,660), new cjs.Rectangle(-370,-740,740,700), new cjs.Rectangle(-370,-740,740,740), new cjs.Rectangle(-370,-740,740,780), new cjs.Rectangle(-370,-740,740,820), new cjs.Rectangle(-370,-740,740,860), new cjs.Rectangle(-370,-740,740,900), new cjs.Rectangle(-370,-740,740,940), new cjs.Rectangle(-370,-740,740,980), new cjs.Rectangle(-370,-740,740,1020), new cjs.Rectangle(-370,-740,740,1007.5), new cjs.Rectangle(-370,-740,740,995), new cjs.Rectangle(-370,-740,740,982.5), new cjs.Rectangle(-370,-740,740,970), new cjs.Rectangle(-370,-705.6,740,935.6), new cjs.Rectangle(-370,-671.2,740,901.3), new cjs.Rectangle(-370,-636.9,740,866.9), new cjs.Rectangle(-370,-602.5,740,832.5), new cjs.Rectangle(-370,-568.1,740,808.1), new cjs.Rectangle(-370,-533.7,740,813.8), new cjs.Rectangle(-370,-499.4,740,766.9), new cjs.Rectangle(-370,-465,740,720), new cjs.Rectangle(-370,-430.6,740,673.2), new cjs.Rectangle(-370,-396.2,740,626.3), new cjs.Rectangle(-370,-361.9,740,591.9), new cjs.Rectangle(-370,-327.5,740,557.5), new cjs.Rectangle(-370,-293.1,740,523.2), new cjs.Rectangle(-370,-258.7,740,488.8), new cjs.Rectangle(-370,-224.4,740,454.4), new cjs.Rectangle(-370,-190,740,420), new cjs.Rectangle(-370,-202.5,740,432.5), new cjs.Rectangle(-370,-215,740,445), new cjs.Rectangle(-370,-227.5,740,457.5), rect=new cjs.Rectangle(-370,-240,740,470), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-369.5,-241.2,739,470.8), new cjs.Rectangle(-368.9,-242.6,738,471.7), new cjs.Rectangle(-368.5,-243.8,737,472.5), new cjs.Rectangle(-367.9,-245.1,736,473.3), new cjs.Rectangle(-367.5,-246.4,735,474.1), new cjs.Rectangle(-366.9,-247.6,734,474.9), new cjs.Rectangle(-366.5,-248.8,733,475.6), new cjs.Rectangle(-365.9,-250.1,732,476.4), new cjs.Rectangle(-365.5,-251.3,731,477.2), new cjs.Rectangle(-365,-252.5,730,477.9), new cjs.Rectangle(-364.5,-250.8,729.1,475.7), new cjs.Rectangle(-364,-248.9,728.1,473.5), new cjs.Rectangle(-363.5,-247.6,727.1,471.6), new cjs.Rectangle(-363,-245.8,726.1,469.3), new cjs.Rectangle(-362.5,-243.9,725.1,467), new cjs.Rectangle(-362,-242.5,724.1,465.2), new cjs.Rectangle(-361.5,-240.7,723.1,462.8), new cjs.Rectangle(-361,-240.6,722.1,462.3), new cjs.Rectangle(-360.5,-242.5,721.1,463.8), new cjs.Rectangle(-360,-243.9,720,464.6), new cjs.Rectangle(-360,-245.8,720,466.5), new cjs.Rectangle(-360,-247.6,720,468.3), new cjs.Rectangle(-360,-248.9,720,469.6), new cjs.Rectangle(-360,-250.7,720,471.4), new cjs.Rectangle(-360,-252.5,720,473.2), new cjs.Rectangle(-360,-251.3,720,472), new cjs.Rectangle(-360,-250.1,720,470.8), new cjs.Rectangle(-360,-248.8,720,469.5), new cjs.Rectangle(-360,-247.6,720,468.3), new cjs.Rectangle(-360,-246.3,720,467), new cjs.Rectangle(-360,-245.1,720,465.8), new cjs.Rectangle(-360,-243.9,720,464.6), new cjs.Rectangle(-360,-242.5,720,463.2), new cjs.Rectangle(-360,-241.2,720,461.9), rect=new cjs.Rectangle(-360,-240,720,460.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.eyebrows_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil11_img();
	this.instance.setTransform(-70,54.5,0.432,0.432,-44.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.eyebrows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil12_img();
	this.instance.setTransform(-70,54.5,0.432,0.432,-44.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.eyebrows_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil8_img();
	this.instance.setTransform(-70,54.5,0.432,0.432,-44.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.eyebrows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil6_img();
	this.instance.setTransform(-70,54.5,0.432,0.432,-44.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.eyebrows_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil11_img();
	this.instance.setTransform(-70,54.5,0.432,0.432,-44.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.eyebrows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil3_img();
	this.instance.setTransform(-70,54.5,0.432,0.432,-44.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.eyebrows_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil12_img();
	this.instance.setTransform(-70,54.5,0.432,0.432,-44.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.eyebrows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil14_img();
	this.instance.setTransform(-70,54.5,0.432,0.432,-44.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.eyebrows_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil10_img();
	this.instance.setTransform(-70,54.5,0.432,0.432,-44.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.eyebrows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil11_img();
	this.instance.setTransform(-70,54.5,0.432,0.432,-44.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.eyebrows_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil13_img();
	this.instance.setTransform(-70,54.5,0.432,0.432,-44.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.eyebrows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil10_img();
	this.instance.setTransform(-70,54.5,0.432,0.432,-44.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// check
	this.check_mc = new lib.check_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzhNRIAA6hMAnDAAAIAAahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-90,250,180);
p.frameBounds = [rect];


(lib.closet_makeup_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(-110,-90);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(-110,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[]},3).to({state:[{t:this.shadows_0}]},3).to({state:[]},3).wait(3));

	// options
	this.blush_2 = new lib.blush_2_2_mc();
	this.blush_2.setTransform(0,90);

	this.blush_1 = new lib.blush_1_2_mc();
	this.blush_1.setTransform(0,-90);

	this.blush_4 = new lib.blush_4_2_mc();
	this.blush_4.setTransform(0,90);

	this.blush_3 = new lib.blush_3_2_mc();
	this.blush_3.setTransform(0,-90);

	this.blush_6 = new lib.blush_6_2_mc();
	this.blush_6.setTransform(0,90);

	this.blush_5 = new lib.blush_5_2_mc();
	this.blush_5.setTransform(0,-90);

	this.lips_2 = new lib.lips_2_2_mc();
	this.lips_2.setTransform(0,90);

	this.lips_1 = new lib.lips_1_2_mc();
	this.lips_1.setTransform(0,-90);

	this.lips_4 = new lib.lips_4_2_mc();
	this.lips_4.setTransform(0,90);

	this.lips_3 = new lib.lips_3_2_mc();
	this.lips_3.setTransform(0,-90);

	this.lips_6 = new lib.lips_6_2_mc();
	this.lips_6.setTransform(0,90);

	this.lips_5 = new lib.lips_5_2_mc();
	this.lips_5.setTransform(0,-90);

	this.shadows_2 = new lib.shadows_2_2_mc();
	this.shadows_2.setTransform(0,90);

	this.shadows_1 = new lib.shadows_1_2_mc();
	this.shadows_1.setTransform(0,-90);

	this.shadows_4 = new lib.shadows_4_2_mc();
	this.shadows_4.setTransform(0,90);

	this.shadows_3 = new lib.shadows_3_2_mc();
	this.shadows_3.setTransform(0,-90);

	this.shadows_6 = new lib.shadows_6_2_mc();
	this.shadows_6.setTransform(0,90);

	this.shadows_5 = new lib.shadows_5_2_mc();
	this.shadows_5.setTransform(0,-90);

	this.eyebrows_2 = new lib.eyebrows_2_2_mc();
	this.eyebrows_2.setTransform(0,90);

	this.eyebrows_1 = new lib.eyebrows_1_2_mc();
	this.eyebrows_1.setTransform(0,-90);

	this.eyebrows_4 = new lib.eyebrows_4_2_mc();
	this.eyebrows_4.setTransform(0,90);

	this.eyebrows_3 = new lib.eyebrows_3_2_mc();
	this.eyebrows_3.setTransform(0,-90);

	this.eyebrows_6 = new lib.eyebrows_6_2_mc();
	this.eyebrows_6.setTransform(0,90);

	this.eyebrows_5 = new lib.eyebrows_5_2_mc();
	this.eyebrows_5.setTransform(0,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2}]}).to({state:[{t:this.blush_3},{t:this.blush_4}]},1).to({state:[{t:this.blush_5},{t:this.blush_6}]},1).to({state:[{t:this.lips_1},{t:this.lips_2}]},1).to({state:[{t:this.lips_3},{t:this.lips_4}]},1).to({state:[{t:this.lips_5},{t:this.lips_6}]},1).to({state:[{t:this.shadows_1},{t:this.shadows_2}]},1).to({state:[{t:this.shadows_3},{t:this.shadows_4}]},1).to({state:[{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.eyebrows_1},{t:this.eyebrows_2}]},1).to({state:[{t:this.eyebrows_3},{t:this.eyebrows_4}]},1).to({state:[{t:this.eyebrows_5},{t:this.eyebrows_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,265,360);
p.frameBounds = [rect, rect, rect, rect=new cjs.Rectangle(-125,-180,250,360), rect, rect, rect=new cjs.Rectangle(-140,-180,265,360), rect, rect, rect=new cjs.Rectangle(-125,-180,250,360), rect, rect];


(lib.closet_makeup_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(110,-90);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(110,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[]},3).to({state:[{t:this.shadows_0}]},3).to({state:[]},3).wait(3));

	// options
	this.blush_2 = new lib.blush_2_1_mc();
	this.blush_2.setTransform(0,90);

	this.blush_1 = new lib.blush_1_1_mc();
	this.blush_1.setTransform(0,-90);

	this.blush_4 = new lib.blush_4_1_mc();
	this.blush_4.setTransform(0,90);

	this.blush_3 = new lib.blush_3_1_mc();
	this.blush_3.setTransform(0,-90);

	this.blush_6 = new lib.blush_6_1_mc();
	this.blush_6.setTransform(0,90);

	this.blush_5 = new lib.blush_5_1_mc();
	this.blush_5.setTransform(0,-90);

	this.lips_2 = new lib.lips_2_1_mc();
	this.lips_2.setTransform(0,90);

	this.lips_1 = new lib.lips_1_1_mc();
	this.lips_1.setTransform(0,-90);

	this.lips_4 = new lib.lips_4_1_mc();
	this.lips_4.setTransform(0,90);

	this.lips_3 = new lib.lips_3_1_mc();
	this.lips_3.setTransform(0,-90);

	this.lips_6 = new lib.lips_6_1_mc();
	this.lips_6.setTransform(0,90);

	this.lips_5 = new lib.lips_5_1_mc();
	this.lips_5.setTransform(0,-90);

	this.shadows_2 = new lib.shadows_2_1_mc();
	this.shadows_2.setTransform(0,90);

	this.shadows_1 = new lib.shadows_1_1_mc();
	this.shadows_1.setTransform(0,-90);

	this.shadows_4 = new lib.shadows_4_1_mc();
	this.shadows_4.setTransform(0,90);

	this.shadows_3 = new lib.shadows_3_1_mc();
	this.shadows_3.setTransform(0,-90);

	this.shadows_6 = new lib.shadows_6_1_mc();
	this.shadows_6.setTransform(0,90);

	this.shadows_5 = new lib.shadows_5_1_mc();
	this.shadows_5.setTransform(0,-90);

	this.eyebrows_2 = new lib.eyebrows_2_1_mc();
	this.eyebrows_2.setTransform(0,90);

	this.eyebrows_1 = new lib.eyebrows_1_1_mc();
	this.eyebrows_1.setTransform(0,-90);

	this.eyebrows_4 = new lib.eyebrows_4_1_mc();
	this.eyebrows_4.setTransform(0,90);

	this.eyebrows_3 = new lib.eyebrows_3_1_mc();
	this.eyebrows_3.setTransform(0,-90);

	this.eyebrows_6 = new lib.eyebrows_6_1_mc();
	this.eyebrows_6.setTransform(0,90);

	this.eyebrows_5 = new lib.eyebrows_5_1_mc();
	this.eyebrows_5.setTransform(0,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2}]}).to({state:[{t:this.blush_3},{t:this.blush_4}]},1).to({state:[{t:this.blush_5},{t:this.blush_6}]},1).to({state:[{t:this.lips_1},{t:this.lips_2}]},1).to({state:[{t:this.lips_3},{t:this.lips_4}]},1).to({state:[{t:this.lips_5},{t:this.lips_6}]},1).to({state:[{t:this.shadows_1},{t:this.shadows_2}]},1).to({state:[{t:this.shadows_3},{t:this.shadows_4}]},1).to({state:[{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.eyebrows_1},{t:this.eyebrows_2}]},1).to({state:[{t:this.eyebrows_3},{t:this.eyebrows_4}]},1).to({state:[{t:this.eyebrows_5},{t:this.eyebrows_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-180,265,360);
p.frameBounds = [rect, rect, rect, rect=new cjs.Rectangle(-125,-180,250,360), rect, rect, rect=new cjs.Rectangle(-125,-180,265,360), rect, rect, rect=new cjs.Rectangle(-125,-180,250,360), rect, rect];


(lib.closet_dress_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.shoes_0 = new lib.shoes_0_mc();
	this.shoes_0.setTransform(175,-100);

	this.accessories_0 = new lib.accessories_0_mc();
	this.accessories_0.setTransform(175,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shoes_0}]},5).to({state:[{t:this.accessories_0}]},3).wait(1));

	// options
	this.dress_8 = new lib.dress_8_2_mc();
	this.dress_8.setTransform(80,-197);

	this.dress_7 = new lib.dress_7_2_mc();
	this.dress_7.setTransform(-60,-197);

	this.dress_5 = new lib.dress_5_2_mc();
	this.dress_5.setTransform(-60,-197);

	this.dress_6 = new lib.dress_6_2_mc();
	this.dress_6.setTransform(80,-197);

	this.dress_4 = new lib.dress_4_2_mc();
	this.dress_4.setTransform(80,-197);

	this.dress_9 = new lib.dress_9_2_mc();
	this.dress_9.setTransform(-60,-197);

	this.dress_3 = new lib.dress_3_2_mc();
	this.dress_3.setTransform(80,-197);

	this.dress_2 = new lib.dress_2_2_mc();
	this.dress_2.setTransform(-60,-197);

	this.dress_1 = new lib.dress_1_2_mc();
	this.dress_1.setTransform(20,-197);

	this.shoes_9 = new lib.shoes_9_2_mc();
	this.shoes_9.setTransform(-60,-46);

	this.shoes_4 = new lib.shoes_4_2_mc();
	this.shoes_4.setTransform(60,103);

	this.shoes_3 = new lib.shoes_3_2_mc();
	this.shoes_3.setTransform(-60,101);

	this.shoes_2 = new lib.shoes_2_2_mc();
	this.shoes_2.setTransform(60,-49);

	this.shoes_1 = new lib.shoes_1_2_mc();
	this.shoes_1.setTransform(0,85);

	this.shoes_8 = new lib.shoes_8_2_mc();
	this.shoes_8.setTransform(60,-51);

	this.shoes_5 = new lib.shoes_5_2_mc();
	this.shoes_5.setTransform(-60,-52);

	this.shoes_7 = new lib.shoes_7_2_mc();
	this.shoes_7.setTransform(60,-11);

	this.shoes_6 = new lib.shoes_6_2_mc();
	this.shoes_6.setTransform(-70,-20);

	this.accessories_6 = new lib.accessories_6_2_mc();
	this.accessories_6.setTransform(85,98);

	this.accessories_5 = new lib.accessories_5_2_mc();
	this.accessories_5.setTransform(-19,81);

	this.accessories_4 = new lib.accessories_4_2_mc();
	this.accessories_4.setTransform(-99,73);

	this.accessories_3 = new lib.accessories_3_2_mc();
	this.accessories_3.setTransform(5,-95);

	this.accessories_2 = new lib.accessories_2_2_mc();
	this.accessories_2.setTransform(70,-50);

	this.accessories_1 = new lib.accessories_1_2_mc();
	this.accessories_1.setTransform(-75,-74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_7},{t:this.dress_8}]}).to({state:[{t:this.dress_6},{t:this.dress_5}]},1).to({state:[{t:this.dress_9},{t:this.dress_4}]},1).to({state:[{t:this.dress_2},{t:this.dress_3}]},1).to({state:[{t:this.dress_1}]},1).to({state:[{t:this.shoes_2},{t:this.shoes_3},{t:this.shoes_4},{t:this.shoes_9}]},1).to({state:[{t:this.shoes_5},{t:this.shoes_8},{t:this.shoes_1}]},1).to({state:[{t:this.shoes_6},{t:this.shoes_7}]},1).to({state:[{t:this.accessories_1},{t:this.accessories_2},{t:this.accessories_3},{t:this.accessories_4},{t:this.accessories_5},{t:this.accessories_6}]},1).wait(1));

	// decor
	this.instance = new lib.stick_mc();
	this.instance.setTransform(0,-190);

	this.instance_1 = new lib.shelf_mc();
	this.instance_1.setTransform(0,100);

	this.instance_2 = new lib.shelf_mc();
	this.instance_2.setTransform(0,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2,p:{y:-50}},{t:this.instance_1}]},1).to({state:[{t:this.instance_2,p:{y:-50}},{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2,p:{y:-30}},{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-205.5,600,405.2);
p.frameBounds = [rect, new cjs.Rectangle(-300,-205,600,403.2), new cjs.Rectangle(-300,-206,600,409), new cjs.Rectangle(-300,-207,600,399), new cjs.Rectangle(-300,-205,600,426), new cjs.Rectangle(-300,-118,600,287.4), new cjs.Rectangle(-300,-120.5,600,265.5), new cjs.Rectangle(-300,-166,600,311.1), new cjs.Rectangle(-300,-190.3,600,337.8)];


(lib.closet_dress_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.shoes_0 = new lib.shoes_0_mc();
	this.shoes_0.setTransform(175,-100);

	this.accessories_0 = new lib.accessories_0_mc();
	this.accessories_0.setTransform(175,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shoes_0}]},3).to({state:[{t:this.accessories_0}]},4).wait(1));

	// options
	this.dress_9 = new lib.dress_9_1_mc();
	this.dress_9.setTransform(0,-198);

	this.dress_3 = new lib.dress_3_1_mc();
	this.dress_3.setTransform(-110,-198);

	this.dress_2 = new lib.dress_2_1_mc();
	this.dress_2.setTransform(110,-198);

	this.dress_5 = new lib.dress_5_1_mc();
	this.dress_5.setTransform(-110,-198);

	this.dress_4 = new lib.dress_4_1_mc();
	this.dress_4.setTransform(0,-198);

	this.dress_6 = new lib.dress_6_1_mc();
	this.dress_6.setTransform(110,-198);

	this.dress_7 = new lib.dress_7_1_mc();
	this.dress_7.setTransform(-110,-198);

	this.dress_1 = new lib.dress_1_1_mc();
	this.dress_1.setTransform(0,-198);

	this.dress_8 = new lib.dress_8_1_mc();
	this.dress_8.setTransform(110,-198);

	this.shoes_3 = new lib.shoes_3_1_mc();
	this.shoes_3.setTransform(5,100);

	this.shoes_1 = new lib.shoes_1_1_mc();
	this.shoes_1.setTransform(0,-95);

	this.shoes_7 = new lib.shoes_7_1_mc();
	this.shoes_7.setTransform(10,90);

	this.shoes_5 = new lib.shoes_5_1_mc();
	this.shoes_5.setTransform(0,-105);

	this.shoes_9 = new lib.shoes_9_1_mc();
	this.shoes_9.setTransform(-60,115);

	this.shoes_2 = new lib.shoes_2_1_mc();
	this.shoes_2.setTransform(65,98);

	this.shoes_4 = new lib.shoes_4_1_mc();
	this.shoes_4.setTransform(0,-57);

	this.shoes_6 = new lib.shoes_6_1_mc();
	this.shoes_6.setTransform(0,-65);

	this.shoes_8 = new lib.shoes_8_1_mc();
	this.shoes_8.setTransform(10,93);

	this.accessories_6 = new lib.accessories_6_1_mc();
	this.accessories_6.setTransform(0,67);

	this.accessories_5 = new lib.accessories_5_1_mc();
	this.accessories_5.setTransform(85,85);

	this.accessories_4 = new lib.accessories_4_1_mc();
	this.accessories_4.setTransform(-85,85);

	this.accessories_3 = new lib.accessories_3_1_mc();
	this.accessories_3.setTransform(-90,-46);

	this.accessories_2 = new lib.accessories_2_1_mc();
	this.accessories_2.setTransform(0,-46);

	this.accessories_1 = new lib.accessories_1_1_mc();
	this.accessories_1.setTransform(90,-46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_2},{t:this.dress_3},{t:this.dress_9}]}).to({state:[{t:this.dress_6},{t:this.dress_4},{t:this.dress_5}]},1).to({state:[{t:this.dress_8},{t:this.dress_1},{t:this.dress_7}]},1).to({state:[{t:this.shoes_1},{t:this.shoes_3}]},1).to({state:[{t:this.shoes_5},{t:this.shoes_7}]},1).to({state:[{t:this.shoes_4},{t:this.shoes_2},{t:this.shoes_9}]},1).to({state:[{t:this.shoes_8},{t:this.shoes_6}]},1).to({state:[{t:this.accessories_1},{t:this.accessories_2},{t:this.accessories_3},{t:this.accessories_4},{t:this.accessories_5},{t:this.accessories_6}]},1).wait(1));

	// decor
	this.instance = new lib.stick_mc();
	this.instance.setTransform(0,-190);

	this.instance_1 = new lib.shelf_mc();
	this.instance_1.setTransform(0,100);

	this.instance_2 = new lib.shelf_mc();
	this.instance_2.setTransform(0,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2,p:{y:-30}},{t:this.instance_1,p:{y:100}}]},1).to({state:[{t:this.instance_2,p:{y:-30}},{t:this.instance_1,p:{y:100}}]},1).to({state:[{t:this.instance_2,p:{y:-30}},{t:this.instance_1,p:{y:100}}]},1).to({state:[{t:this.instance_2,p:{y:-30}},{t:this.instance_1,p:{y:100}}]},1).to({state:[{t:this.instance_2,p:{y:-50}},{t:this.instance_1,p:{y:80}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-207,600,444.6);
p.frameBounds = [rect, new cjs.Rectangle(-300,-206,600,434.6), new cjs.Rectangle(-300,-206.5,600,408.5), new cjs.Rectangle(-300,-194,600,339.1), new cjs.Rectangle(-300,-206,600,351), new cjs.Rectangle(-300,-118,600,268.2), new cjs.Rectangle(-300,-130.5,600,275.5), new cjs.Rectangle(-300,-118,600,253)];


(lib.bodyDressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_dress_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-205.5,600,405.2);
p.frameBounds = [rect];


(lib.bodyDressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-180,265,360);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_dress_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-207,600,444.6);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-180,265,360);
p.frameBounds = [rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"en":0,"ru":1,"de":2,"fr":3,"it":4,"es":5,"pt":6,"tr":7,"ja":8,"hi":9,"ar":10,"id":11,"zh":12});

	// decor
	this.instance = new lib.big_hero_main_mc();
	this.instance.setTransform(15,-263);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(5).to({_off:true},1).wait(1).to({_off:false},0).wait(4));

	// graph
	this.instance_1 = new lib.title_en_img();
	this.instance_1.setTransform(-240,-80);

	this.instance_2 = new lib.title_ru_img();
	this.instance_2.setTransform(-240,-80);

	this.instance_3 = new lib.title_ja_img();
	this.instance_3.setTransform(-240,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1).to({_off:false},0).wait(5).to({_off:true},1).wait(1).to({_off:false},0).wait(4));

	// decor
	this.instance_4 = new lib.big_hero_main_mc();
	this.instance_4.setTransform(19,-268);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false,y:-273},0).to({_off:true},1).wait(4));

	// decor
	this.instance_5 = new lib.anim_decor_title_mc();
	this.instance_5.setTransform(164,-22,1,1,0,93,-87);

	this.instance_6 = new lib.anim_decor_title_mc();
	this.instance_6.setTransform(-158,-10,1,1,-45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6,p:{x:-158,y:-10}},{t:this.instance_5,p:{x:164,y:-22}}]}).to({state:[{t:this.instance_6,p:{x:-164,y:-10}},{t:this.instance_5,p:{x:164,y:-22}}]},1).to({state:[{t:this.instance_6,p:{x:-158,y:-10}},{t:this.instance_5,p:{x:164,y:-22}}]},1).to({state:[{t:this.instance_6,p:{x:-158,y:-10}},{t:this.instance_5,p:{x:164,y:-22}}]},1).to({state:[{t:this.instance_6,p:{x:-158,y:-10}},{t:this.instance_5,p:{x:164,y:-22}}]},1).to({state:[{t:this.instance_6,p:{x:-158,y:-10}},{t:this.instance_5,p:{x:164,y:-22}}]},1).to({state:[{t:this.instance_6,p:{x:-158,y:-10}},{t:this.instance_5,p:{x:164,y:-22}}]},1).to({state:[{t:this.instance_6,p:{x:-158,y:-10}},{t:this.instance_5,p:{x:164,y:-22}}]},1).to({state:[{t:this.instance_6,p:{x:-111,y:33.3}},{t:this.instance_5,p:{x:132,y:28}}]},1).to({state:[{t:this.instance_6,p:{x:-158,y:-10}},{t:this.instance_5,p:{x:164,y:-22}}]},1).to({state:[{t:this.instance_6,p:{x:-158,y:-10}},{t:this.instance_5,p:{x:164,y:-22}}]},1).to({state:[{t:this.instance_6,p:{x:-158,y:-10}},{t:this.instance_5,p:{x:164,y:-22}}]},1).to({state:[{t:this.instance_6,p:{x:-158,y:-10}},{t:this.instance_5,p:{x:164,y:-22}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-329.8,-523,631.3,625.5);
p.frameBounds = [rect, new cjs.Rectangle(-335.8,-528,637.3,630.5), rect=new cjs.Rectangle(-329.8,-523,631.3,625.5), rect, rect, rect, rect, rect, new cjs.Rectangle(-282.8,-533,552.3,678.7), rect=new cjs.Rectangle(-329.8,-523,631.3,625.5), rect, rect, rect];


(lib.arrow_checks_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoints_mc = new lib.arrow_checks_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.checkpoints_mc).wait(1));

	// graph
	this.instance = new lib.animation_pointing_finger_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-415.4,-250,660.5,1144.5);
p.frameBounds = [rect];


(lib.arrow_105_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arrow_checks_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-415.4,-250,660.5,1144.5);
p.frameBounds = [rect];


(lib.arrow_104_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arrow_checks_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-415.4,-250,660.5,1144.5);
p.frameBounds = [rect];


(lib.arrow_103_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arrow_checks_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-415.4,-250,660.5,1144.5);
p.frameBounds = [rect];


(lib.arrow_102_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arrow_checks_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-415.4,-250,660.5,1144.5);
p.frameBounds = [rect];


(lib.arrow_101_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arrow_checks_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-415.4,-250,660.5,1144.5);
p.frameBounds = [rect];


(lib.arrow_100_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arrow_checks_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-415.4,-250,660.5,1144.5);
p.frameBounds = [rect];


(lib.arrow_25_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arc_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.arrow_24_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arc_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.arrow_23_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arc_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.arrow_22_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arc_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.arrow_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arc_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.arrow_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arc_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.arrow_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arc_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.arrow_11_mc = function(mode,startPosition,loop) {
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


(lib.arrow_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arc_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.arrow_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arc_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.arrow_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arc_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.arrow_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arc_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.arrow_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.arc_arrow_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-254.4,-314.2,466.8,576.3);
p.frameBounds = [rect];


(lib.animation_mask2_55_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.marker1_1_mc();
	this.instance.setTransform(-289.5,115.1,1,1,124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-216.5,y:97.3},8).to({x:-230.5,y:77.3},6).to({x:-165.5,y:92.2},6).to({x:-171.5,y:79.6},3).to({x:-197.5,y:172.4},3).to({x:-199.5,y:178.6},2).to({x:-187.5,y:176.9},5).to({x:-172.5,y:177.9},3).to({x:-152.5,y:175.3},3).to({x:-142.5,y:172.9},2).to({x:-289.5,y:115.1},10).wait(1));

	// animation
	this.instance_1 = new lib.animation_mask2_27_mc();
	this.instance_1.setTransform(116.4,41.4,1,1,0,0,0,32.4,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(52));

	// animation
	this.instance_2 = new lib.animation_mask2_27_mc();
	this.instance_2.setTransform(-115.3,40.3,1,1,0,-0.3,179.7,32.4,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(52));

	// animation
	this.instance_3 = new lib.mask_2_13_mc();
	this.instance_3.setTransform(-124.5,34.9,1,1,0,0,180);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({alpha:1},33).wait(11));

	// animation
	this.instance_4 = new lib.mask_2_13_mc();
	this.instance_4.setTransform(125.5,34.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(52));

	// animation
	this.instance_5 = new lib.mask_2_12_mc();
	this.instance_5.setTransform(108.8,-22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(52));

	// animation
	this.instance_6 = new lib.mask_2_12_mc();
	this.instance_6.setTransform(-106.1,-22.6,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(52));

	// animation
	this.instance_7 = new lib.mask_2_11_mc();
	this.instance_7.setTransform(7,110.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(52));

	// animation
	this.instance_8 = new lib.mask_2_10_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(52));

	// animation
	this.instance_9 = new lib.mask_2_2_mc();
	this.instance_9.setTransform(-100.7,42.3,1,1,0,0,180);

	this.instance_10 = new lib.mask_2_2_mc();
	this.instance_10.setTransform(104.3,42.3);

	this.instance_11 = new lib.mask_2_1_mc();
	this.instance_11.setTransform(-0.7,190.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-365.4,-275,587.9,550);
p.frameBounds = [rect, new cjs.Rectangle(-356,-275,578.5,550), new cjs.Rectangle(-346.9,-275,569.3,550), new cjs.Rectangle(-337.7,-275,560.2,550), new cjs.Rectangle(-328.6,-275,551.1,550), new cjs.Rectangle(-319.5,-275,542,550), new cjs.Rectangle(-310.4,-275,532.8,550), new cjs.Rectangle(-301.2,-275,523.7,550), new cjs.Rectangle(-292.4,-275,514.9,550), new cjs.Rectangle(-294.5,-275,517,550), new cjs.Rectangle(-296.8,-275,519.3,550), new cjs.Rectangle(-299.1,-275,521.6,550), new cjs.Rectangle(-301.5,-275,524,550), new cjs.Rectangle(-303.8,-275,526.3,550), new cjs.Rectangle(-306.4,-275,528.9,550), new cjs.Rectangle(-295.3,-275,517.8,550), new cjs.Rectangle(-284.5,-275,507,550), new cjs.Rectangle(-273.6,-275,496.1,550), new cjs.Rectangle(-262.8,-275,485.3,550), new cjs.Rectangle(-252,-275,474.5,550), new cjs.Rectangle(-241.4,-275,463.9,550), new cjs.Rectangle(-243.1,-275,465.6,550), new cjs.Rectangle(-245.1,-275,467.6,550), new cjs.Rectangle(-247.4,-275,469.9,550), new cjs.Rectangle(-255.8,-275,478.3,550), new cjs.Rectangle(-264.5,-275,487,550), new cjs.Rectangle(-273.4,-275,495.9,550), new cjs.Rectangle(-274.1,-275,496.6,551.9), new cjs.Rectangle(-275.4,-275,497.9,555.1), new cjs.Rectangle(-272.8,-275,495.3,554.6), new cjs.Rectangle(-270.4,-275,492.9,554.2), new cjs.Rectangle(-268,-275,490.5,553.9), new cjs.Rectangle(-265.6,-275,488.1,553.6), new cjs.Rectangle(-263.4,-275,485.9,553.4), new cjs.Rectangle(-258.2,-275,480.7,553.6), new cjs.Rectangle(-253.2,-275,475.7,553.9), new cjs.Rectangle(-248.4,-275,470.9,554.4), new cjs.Rectangle(-241.5,-275,464,553.4), new cjs.Rectangle(-234.8,-275,457.3,552.5), new cjs.Rectangle(-228.4,-275,450.9,551.7), new cjs.Rectangle(-223.1,-275,445.6,550.4), new cjs.Rectangle(-222.5,-275,445,550), new cjs.Rectangle(-232.8,-275,455.3,550), new cjs.Rectangle(-247.5,-275,470,550), new cjs.Rectangle(-262.2,-275,484.7,550), new cjs.Rectangle(-276.9,-275,499.4,550), new cjs.Rectangle(-291.6,-275,514.1,550), new cjs.Rectangle(-306.3,-275,528.8,550), new cjs.Rectangle(-321,-275,543.5,550), new cjs.Rectangle(-335.7,-275,558.2,550), new cjs.Rectangle(-350.4,-275,572.9,550), new cjs.Rectangle(-365.4,-275,587.9,550)];


(lib.animation_mask2_53_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.marker1_2_mc();
	this.instance.setTransform(274.2,-45.1,1,1,77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:229.2,y:-228.1,alpha:0.012},4).to({_off:true},1).wait(48));

	// animation
	this.instance_1 = new lib.marker1_1_mc();
	this.instance_1.setTransform(292.5,34.9,1,1,77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({rotation:52.2,x:220.5,y:92},7).to({x:237.5,y:72.8},4).to({x:170.5,y:88},4).to({x:177.5,y:75.1},2).to({x:203.5,y:170.7},3).to({x:207.5,y:176.8},3).to({x:191.5,y:172.2},5).to({x:176.5,y:174.2},4).to({x:156.5,y:171.1},3).to({x:148.5,y:169.1},2).to({rotation:124.5,x:-289.5,y:115.1},11).wait(1));

	// animation
	this.instance_2 = new lib.animation_mask2_27_mc();
	this.instance_2.setTransform(116.4,41.4,1,1,0,0,0,32.4,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(53));

	// animation
	this.instance_3 = new lib.animation_mask2_27_mc();
	this.instance_3.setTransform(-115.3,40.3,1,1,0,-0.3,179.7,32.4,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(53));

	// animation
	this.instance_4 = new lib.mask_2_13_mc();
	this.instance_4.setTransform(125.5,34.9);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).to({alpha:1},30).wait(12));

	// animation
	this.instance_5 = new lib.mask_2_12_mc();
	this.instance_5.setTransform(108.8,-22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(53));

	// animation
	this.instance_6 = new lib.mask_2_12_mc();
	this.instance_6.setTransform(-106.1,-22.6,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(53));

	// animation
	this.instance_7 = new lib.mask_2_11_mc();
	this.instance_7.setTransform(7,110.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(53));

	// animation
	this.instance_8 = new lib.mask_2_10_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(53));

	// animation
	this.instance_9 = new lib.mask_2_2_mc();
	this.instance_9.setTransform(-100.7,42.3,1,1,0,0,180);

	this.instance_10 = new lib.mask_2_2_mc();
	this.instance_10.setTransform(104.3,42.3);

	this.instance_11 = new lib.mask_2_1_mc();
	this.instance_11.setTransform(-0.7,190.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.5,-275,553.7,550);
p.frameBounds = [rect, rect=new cjs.Rectangle(-222.5,-275,553.6,550), rect, rect, new cjs.Rectangle(-222.5,-275,553.7,550), new cjs.Rectangle(-222.5,-275,549.9,550), new cjs.Rectangle(-222.5,-275,546.2,550), new cjs.Rectangle(-222.5,-275,542.1,550), new cjs.Rectangle(-222.5,-275,537.7,550), new cjs.Rectangle(-222.5,-275,533.4,550), new cjs.Rectangle(-222.5,-275,528.5,550), new cjs.Rectangle(-222.5,-275,523.7,550), new cjs.Rectangle(-222.5,-275,527.9,550), new cjs.Rectangle(-222.5,-275,532.2,550), new cjs.Rectangle(-222.5,-275,536.4,550), new cjs.Rectangle(-222.5,-275,540.7,550), new cjs.Rectangle(-222.5,-275,523.9,550), new cjs.Rectangle(-222.5,-275,507.1,550), new cjs.Rectangle(-222.5,-275,490.4,550), new cjs.Rectangle(-222.5,-275,473.7,550), new cjs.Rectangle(-222.5,-275,477.1,550), new cjs.Rectangle(-222.5,-275,480.7,550), new cjs.Rectangle(-222.5,-275,489.3,550), new cjs.Rectangle(-222.5,-275,498,550), new cjs.Rectangle(-222.5,-275,506.7,550), new cjs.Rectangle(-222.5,-275,507.9,550), new cjs.Rectangle(-222.5,-275,509.2,550), new cjs.Rectangle(-222.5,-275,510.7,550), new cjs.Rectangle(-222.5,-275,507.4,550), new cjs.Rectangle(-222.5,-275,504.2,550), new cjs.Rectangle(-222.5,-275,501,550), new cjs.Rectangle(-222.5,-275,497.8,550), new cjs.Rectangle(-222.5,-275,494.7,550), new cjs.Rectangle(-222.5,-275,490.9,550), new cjs.Rectangle(-222.5,-275,487.1,550), new cjs.Rectangle(-222.5,-275,483.4,550), new cjs.Rectangle(-222.5,-275,479.7,550), new cjs.Rectangle(-222.5,-275,472.9,550), new cjs.Rectangle(-222.5,-275,466.2,550), new cjs.Rectangle(-222.5,-275,459.7,550), new cjs.Rectangle(-222.5,-275,455.6,550), new cjs.Rectangle(-222.5,-275,451.7,550), rect=new cjs.Rectangle(-222.5,-275,445,550), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-264.3,-275,486.8,550), new cjs.Rectangle(-315.2,-275,537.7,550), new cjs.Rectangle(-365.4,-275,587.9,550)];


(lib.animation_mask2_51_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.marker1_2_mc();
	this.instance.setTransform(274.2,-45.1,1,1,77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// animation
	this.instance_1 = new lib.marker1_1_mc();
	this.instance_1.setTransform(292.5,34.9,1,1,77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

	// animation
	this.instance_2 = new lib.animation_mask2_27_mc();
	this.instance_2.setTransform(243.4,173.4,1,1,0,0,0,32.4,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:116.4,y:41.4},19).wait(1));

	// animation
	this.instance_3 = new lib.animation_mask2_27_mc();
	this.instance_3.setTransform(243.4,188.3,1,1,31.7,0,0,32.4,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:17.2,rotation:0,skewX:-8.3,skewY:171.7,x:227.3,y:188.2},1).to({skewX:-0.3,skewY:179.7,x:-115.3,y:40.3},18).wait(1));

	// animation
	this.instance_4 = new lib.mask_2_12_mc();
	this.instance_4.setTransform(108.8,-22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

	// animation
	this.instance_5 = new lib.mask_2_12_mc();
	this.instance_5.setTransform(-106.1,-22.6,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20));

	// animation
	this.instance_6 = new lib.mask_2_11_mc();
	this.instance_6.setTransform(7,110.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20));

	// animation
	this.instance_7 = new lib.mask_2_10_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20));

	// animation
	this.instance_8 = new lib.mask_2_2_mc();
	this.instance_8.setTransform(-100.7,42.3,1,1,0,0,180);

	this.instance_9 = new lib.mask_2_2_mc();
	this.instance_9.setTransform(104.3,42.3);

	this.instance_10 = new lib.mask_2_1_mc();
	this.instance_10.setTransform(-0.7,190.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.5,-275,553.7,550);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_mask2_49_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pencil6_mc();
	this.instance.setTransform(-311.6,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:19.4,x:-127.8,y:65.1},9).to({x:-179.4,y:53.1},12).to({x:-260.4,y:61.1},13).to({rotation:-85.3,x:146.4,y:43.6},10).to({rotation:-72.3,x:175.5,y:56},15).to({x:265.5,y:62.7},14).to({x:429.5,y:438.6,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.marker1_2_mc();
	this.instance_1.setTransform(274.2,-45.1,1,1,77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88));

	// animation
	this.instance_2 = new lib.marker1_1_mc();
	this.instance_2.setTransform(292.5,34.9,1,1,77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(88));

	// animation
	this.instance_3 = new lib.animation_mask2_27_mc();
	this.instance_3.setTransform(243.4,173.4,1,1,0,0,0,32.4,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(88));

	// animation
	this.instance_4 = new lib.animation_mask2_27_mc();
	this.instance_4.setTransform(243.4,188.3,1,1,31.7,0,0,32.4,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(88));

	// animation
	this.instance_5 = new lib.mask_2_12_mc();
	this.instance_5.setTransform(108.8,-22.6);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(44).to({_off:false},0).to({alpha:1},29).wait(15));

	// animation
	this.instance_6 = new lib.mask_2_12_mc();
	this.instance_6.setTransform(-106.1,-22.6,1,1,0,0,180);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({alpha:1},25).wait(54));

	// animation
	this.instance_7 = new lib.mask_2_11_mc();
	this.instance_7.setTransform(7,110.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(88));

	// animation
	this.instance_8 = new lib.mask_2_10_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(88));

	// animation
	this.instance_9 = new lib.mask_2_2_mc();
	this.instance_9.setTransform(-100.7,42.3,1,1,0,0,180);

	this.instance_10 = new lib.mask_2_2_mc();
	this.instance_10.setTransform(104.3,42.3);

	this.instance_11 = new lib.mask_2_1_mc();
	this.instance_11.setTransform(-0.7,190.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(88));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380.2,-275,711.4,550);
p.frameBounds = [rect, new cjs.Rectangle(-363.3,-275,694.5,550), new cjs.Rectangle(-346.8,-275,678,550), new cjs.Rectangle(-329.7,-275,660.8,550), new cjs.Rectangle(-312.9,-275,644.1,550), new cjs.Rectangle(-295.9,-275,627.1,550), new cjs.Rectangle(-278.6,-275,609.8,550), new cjs.Rectangle(-261.3,-275,592.5,550), new cjs.Rectangle(-244,-275,575.2,550), new cjs.Rectangle(-231,-275,562.2,550), new cjs.Rectangle(-230.5,-275,561.7,550), new cjs.Rectangle(-234.8,-275,566,550), new cjs.Rectangle(-239.1,-275,570.3,550), new cjs.Rectangle(-243.4,-275,574.6,550), new cjs.Rectangle(-247.7,-275,578.9,550), new cjs.Rectangle(-252.1,-275,583.3,550), new cjs.Rectangle(-256.4,-275,587.6,550), new cjs.Rectangle(-260.7,-275,591.8,550), new cjs.Rectangle(-265,-275,596.2,550), new cjs.Rectangle(-269.3,-275,600.5,550), new cjs.Rectangle(-273.6,-275,604.8,550), new cjs.Rectangle(-282.7,-275,613.8,550), new cjs.Rectangle(-284.1,-275,615.3,550), new cjs.Rectangle(-290.3,-275,621.5,550), new cjs.Rectangle(-296.6,-275,627.8,550), new cjs.Rectangle(-302.8,-275,634,550), new cjs.Rectangle(-309,-275,640.2,550), new cjs.Rectangle(-315.3,-275,646.5,550), new cjs.Rectangle(-321.5,-275,652.7,550), new cjs.Rectangle(-327.7,-275,658.9,550), new cjs.Rectangle(-334,-275,665.2,550), new cjs.Rectangle(-340.2,-275,671.3,550), new cjs.Rectangle(-346.4,-275,677.6,550), new cjs.Rectangle(-352.6,-275,683.8,550), new cjs.Rectangle(-363.7,-275,694.8,550), new cjs.Rectangle(-303.1,-275,634.3,550), new cjs.Rectangle(-244.9,-275,576.1,550), rect=new cjs.Rectangle(-222.5,-275,553.7,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-222.5,-275,560,550), new cjs.Rectangle(-222.5,-275,566.4,550), new cjs.Rectangle(-222.5,-275,572.8,550), new cjs.Rectangle(-222.5,-275,579.2,550), new cjs.Rectangle(-222.5,-275,619.2,550), new cjs.Rectangle(-222.5,-275,598.4,550), new cjs.Rectangle(-222.5,-275,611,550), new cjs.Rectangle(-222.5,-275,623.6,550), new cjs.Rectangle(-222.5,-275,636.2,550), new cjs.Rectangle(-222.5,-275,648.9,578.5), new cjs.Rectangle(-222.5,-275,661.5,607.4), new cjs.Rectangle(-222.5,-275,674.1,636.3), new cjs.Rectangle(-222.5,-275,686.7,665.2), new cjs.Rectangle(-222.5,-275,699.3,694.1), new cjs.Rectangle(-222.5,-275,711.9,723.1), new cjs.Rectangle(-222.5,-275,724.5,752), new cjs.Rectangle(-222.5,-275,737.2,780.9), new cjs.Rectangle(-222.5,-275,783.2,814.2), new cjs.Rectangle(-222.5,-275,553.7,550)];


(lib.animation_mask2_47_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.kist1_mc();
	this.instance.setTransform(-230.7,166.8,0.871,0.871,39.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:45.9,x:-165.7,y:179.8},7).to({x:-200.7,y:171.8},3).to({rotation:-25.8,x:-40.7,y:216.8},6).to({rotation:45.9,x:-200.7,y:171.8},6).to({rotation:-25.8,x:-40.7,y:216.8},6).to({rotation:-25.8,x:117.3,y:203.8},14).to({rotation:-58.6,x:239.3,y:156.8},7).to({rotation:-25.8,x:117.3,y:203.8},8).to({rotation:-58.6,x:239.3,y:156.8},7).to({x:235.3,y:393.8,alpha:0.012},10).to({_off:true},1).wait(5));

	// animation
	this.instance_1 = new lib.pencil6_mc();
	this.instance_1.setTransform(-659.6,77.1);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(67).to({_off:false},0).to({x:-311.6,y:46.1,alpha:1},12).wait(1));

	// animation
	this.instance_2 = new lib.marker1_2_mc();
	this.instance_2.setTransform(274.2,-45.1,1,1,77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80));

	// animation
	this.instance_3 = new lib.marker1_1_mc();
	this.instance_3.setTransform(292.5,34.9,1,1,77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(80));

	// animation
	this.instance_4 = new lib.animation_mask2_27_mc();
	this.instance_4.setTransform(243.4,173.4,1,1,0,0,0,32.4,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(80));

	// animation
	this.instance_5 = new lib.animation_mask2_27_mc();
	this.instance_5.setTransform(243.4,188.3,1,1,31.7,0,0,32.4,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(80));

	// animation
	this.instance_6 = new lib.mask_2_11_mc();
	this.instance_6.setTransform(7,110.8);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({_off:false},0).to({alpha:1},57).wait(16));

	// animation
	this.instance_7 = new lib.mask_2_10_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(80));

	// animation
	this.instance_8 = new lib.mask_2_2_mc();
	this.instance_8.setTransform(-100.7,42.3,1,1,0,0,180);

	this.instance_9 = new lib.mask_2_2_mc();
	this.instance_9.setTransform(104.3,42.3);

	this.instance_10 = new lib.mask_2_1_mc();
	this.instance_10.setTransform(-0.7,190.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-313.6,-275,644.8,550);
p.frameBounds = [rect, new cjs.Rectangle(-305.2,-275,636.3,550), new cjs.Rectangle(-297.1,-275,628.3,550), new cjs.Rectangle(-288.6,-275,619.8,550), new cjs.Rectangle(-280.4,-275,611.6,550), new cjs.Rectangle(-272.1,-275,603.3,550), new cjs.Rectangle(-263.6,-275,594.8,550), new cjs.Rectangle(-255.5,-275,586.7,550), new cjs.Rectangle(-267,-275,598.2,550), new cjs.Rectangle(-278.7,-275,609.9,550), new cjs.Rectangle(-290.5,-275,621.7,550), new cjs.Rectangle(-250,-275,581.2,552.7), new cjs.Rectangle(-222.5,-275,553.7,566.4), new cjs.Rectangle(-222.5,-275,553.7,575.5), new cjs.Rectangle(-222.5,-275,553.7,581.5), new cjs.Rectangle(-222.5,-275,553.7,590.6), new cjs.Rectangle(-222.5,-275,553.7,595), new cjs.Rectangle(-222.5,-275,553.7,590.5), new cjs.Rectangle(-222.5,-275,553.7,581.5), new cjs.Rectangle(-222.5,-275,553.7,575.5), new cjs.Rectangle(-222.5,-275,553.7,566.4), new cjs.Rectangle(-250,-275,581.2,552.7), new cjs.Rectangle(-290.5,-275,621.7,550), new cjs.Rectangle(-250,-275,581.2,552.7), new cjs.Rectangle(-222.5,-275,553.7,566.4), new cjs.Rectangle(-222.5,-275,553.7,575.5), new cjs.Rectangle(-222.5,-275,553.7,581.5), new cjs.Rectangle(-222.5,-275,553.7,590.6), new cjs.Rectangle(-222.5,-275,553.7,595), new cjs.Rectangle(-222.5,-275,553.7,594), new cjs.Rectangle(-222.5,-275,553.7,593.1), new cjs.Rectangle(-222.5,-275,553.7,592.1), new cjs.Rectangle(-222.5,-275,553.7,591.2), new cjs.Rectangle(-222.5,-275,553.7,590.3), new cjs.Rectangle(-222.5,-275,553.7,589.4), new cjs.Rectangle(-222.5,-275,553.7,588.4), new cjs.Rectangle(-222.5,-275,553.7,587.5), new cjs.Rectangle(-222.5,-275,553.7,586.6), new cjs.Rectangle(-222.5,-275,553.7,585.6), new cjs.Rectangle(-222.5,-275,553.7,584.7), new cjs.Rectangle(-222.5,-275,553.7,583.8), new cjs.Rectangle(-222.5,-275,553.7,582.9), new cjs.Rectangle(-222.5,-275,553.7,582), new cjs.Rectangle(-222.5,-275,553.7,572.8), new cjs.Rectangle(-222.5,-275,553.7,562.9), new cjs.Rectangle(-222.5,-275,553.7,552.4), rect=new cjs.Rectangle(-222.5,-275,553.7,550), rect, rect, new cjs.Rectangle(-222.5,-275,562,550), rect=new cjs.Rectangle(-222.5,-275,553.7,550), rect, rect, rect, new cjs.Rectangle(-222.5,-275,553.7,556.4), new cjs.Rectangle(-222.5,-275,553.7,565.5), new cjs.Rectangle(-222.5,-275,553.7,573.9), new cjs.Rectangle(-222.5,-275,553.7,582), new cjs.Rectangle(-222.5,-275,553.7,572.8), new cjs.Rectangle(-222.5,-275,553.7,562.9), new cjs.Rectangle(-222.5,-275,553.7,552.4), rect=new cjs.Rectangle(-222.5,-275,553.7,550), rect, rect, new cjs.Rectangle(-222.5,-275,562,550), new cjs.Rectangle(-222.5,-275,561.5,550), new cjs.Rectangle(-222.5,-275,561.1,551.9), new cjs.Rectangle(-728.2,-275,1066.4,575.6), new cjs.Rectangle(-699.2,-275,1037,599.3), new cjs.Rectangle(-670.2,-275,1007.6,623), new cjs.Rectangle(-641.2,-275,978.2,646.7), new cjs.Rectangle(-612.2,-275,948.8,670.4), new cjs.Rectangle(-583.2,-275,919.4,694.1), new cjs.Rectangle(-554.2,-275,890,717.8), new cjs.Rectangle(-525.2,-275,860.7,741.7), new cjs.Rectangle(-496.2,-275,827.4,550), new cjs.Rectangle(-467.2,-275,798.4,550), new cjs.Rectangle(-438.2,-275,769.4,550), new cjs.Rectangle(-409.2,-275,740.4,550), new cjs.Rectangle(-380.2,-275,711.4,550)];


(lib.animation_mask2_45_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.marker1_2_mc();
	this.instance.setTransform(274.2,-45.1,1,1,77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28));

	// animation
	this.instance_1 = new lib.marker1_1_mc();
	this.instance_1.setTransform(292.5,34.9,1,1,77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28));

	// animation
	this.instance_2 = new lib.animation_mask2_27_mc();
	this.instance_2.setTransform(243.4,173.4,1,1,0,0,0,32.4,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28));

	// animation
	this.instance_3 = new lib.animation_mask2_27_mc();
	this.instance_3.setTransform(243.4,188.3,1,1,31.7,0,0,32.4,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(28));

	// animation
	this.instance_4 = new lib.kist1_mc();
	this.instance_4.setTransform(-307.6,-33.6,0.871,0.871,148);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:198,x:-227.7,y:30.4},7).to({rotation:171.5,x:-268.7,y:33.9},2).to({rotation:198,x:-227.7,y:30.4},2).to({rotation:171.5,x:-268.7,y:33.9},2).to({rotation:198,x:-227.7,y:30.4},2).to({rotation:171.5,x:-268.7,y:33.9},2).to({rotation:39.4,x:-230.7,y:166.8},10).wait(1));

	// animation
	this.instance_5 = new lib.blesk6_mc();
	this.instance_5.setTransform(-308,133.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-252.9,y:96.3},7).wait(10).to({y:396.3,alpha:0.012},9).to({_off:true},1).wait(1));

	// animation
	this.instance_6 = new lib.mask_2_10_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(28));

	// animation
	this.instance_7 = new lib.mask_2_2_mc();
	this.instance_7.setTransform(-100.7,42.3,1,1,0,0,180);

	this.instance_8 = new lib.mask_2_2_mc();
	this.instance_8.setTransform(104.3,42.3);

	this.instance_9 = new lib.mask_2_1_mc();
	this.instance_9.setTransform(-0.7,190.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-383,-275,714.2,550);
p.frameBounds = [rect, new cjs.Rectangle(-375.1,-275,706.3,550), new cjs.Rectangle(-367.2,-275,698.4,550), new cjs.Rectangle(-359.4,-275,690.6,550), new cjs.Rectangle(-351.5,-275,682.7,550), new cjs.Rectangle(-343.7,-275,674.8,550), new cjs.Rectangle(-335.8,-275,667,550), rect=new cjs.Rectangle(-327.9,-275,659.1,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-338.3,-275,669.5,550), new cjs.Rectangle(-349.1,-275,680.3,552.9), new cjs.Rectangle(-355.1,-275,686.3,586.2), new cjs.Rectangle(-355.7,-275,686.9,619.5), new cjs.Rectangle(-350.7,-275,681.8,652.8), new cjs.Rectangle(-348.2,-275,679.4,686.2), new cjs.Rectangle(-342,-275,673.2,719.5), new cjs.Rectangle(-330.2,-275,661.4,752.8), new cjs.Rectangle(-313.6,-275,644.8,550)];


(lib.animation_mask2_43_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.marker1_2_mc();
	this.instance.setTransform(274.2,-45.1,1,1,77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(130));

	// animation
	this.instance_1 = new lib.marker1_1_mc();
	this.instance_1.setTransform(292.5,34.9,1,1,77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(130));

	// animation
	this.instance_2 = new lib.animation_mask2_27_mc();
	this.instance_2.setTransform(243.4,173.4,1,1,0,0,0,32.4,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(130));

	// animation
	this.instance_3 = new lib.animation_mask2_27_mc();
	this.instance_3.setTransform(243.4,188.3,1,1,31.7,0,0,32.4,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(130));

	// animation
	this.instance_4 = new lib.kist1_mc();
	this.instance_4.setTransform(-511.6,-33.6,0.871,0.871,148);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(121).to({_off:false},0).to({x:-307.6,alpha:1},8).wait(1));

	// animation
	this.instance_5 = new lib.gubka_mc();
	this.instance_5.setTransform(-30.1,-60.8,0.63,0.63,23.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.56,scaleY:0.56},3).to({scaleX:0.63,scaleY:0.63},3).to({scaleX:0.56,scaleY:0.56},3).to({scaleX:0.63,scaleY:0.63},2).to({x:-125.1,y:-145.8},3).to({x:-12.1,y:-217.8},10).to({x:138.6,y:-109.8},12).to({x:-128.4,y:-60.8},14).to({x:-6.4,y:68.1},14).to({scaleX:0.55,scaleY:0.55},3).to({scaleX:0.63,scaleY:0.63},3).to({x:-102.4,y:137.1},11).to({x:106.6,y:143.1},13).to({x:4.6,y:248.1},15).to({x:-111.9,y:158.1},12).to({x:-369.9,y:373.1,alpha:0.012},7).to({_off:true},1).wait(1));

	// animation
	this.instance_6 = new lib.blesk6_mc();
	this.instance_6.setTransform(-8,-118.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11).to({x:-308,y:133.7},7).wait(112));

	// animation
	this.instance_7 = new lib.mask_2_10_mc();
	this.instance_7.alpha = 0.012;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).to({alpha:1},95).wait(21));

	// animation
	this.instance_8 = new lib.mask_2_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},109).wait(21));

	// animation
	this.instance_9 = new lib.mask_2_2_mc();
	this.instance_9.setTransform(-100.7,42.3,1,1,0,0,180);

	this.instance_10 = new lib.mask_2_2_mc();
	this.instance_10.setTransform(104.3,42.3);

	this.instance_11 = new lib.mask_2_1_mc();
	this.instance_11.setTransform(-0.7,190.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.5,-275,553.7,550);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-254.4,-275,585.6,550), new cjs.Rectangle(-297.3,-275,628.5,550), new cjs.Rectangle(-340.1,-275,671.3,550), rect=new cjs.Rectangle(-383,-275,714.2,550), rect, new cjs.Rectangle(-383,-275.2,714.2,550.2), new cjs.Rectangle(-383,-282.4,714.2,557.3), new cjs.Rectangle(-383,-289.6,714.2,564.6), new cjs.Rectangle(-383,-296.8,714.2,571.8), new cjs.Rectangle(-383,-304.1,714.2,579.1), new cjs.Rectangle(-383,-294.9,714.2,569.9), new cjs.Rectangle(-383,-285.9,714.2,560.9), new cjs.Rectangle(-383,-276.9,714.2,551.9), rect=new cjs.Rectangle(-383,-275,714.2,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-383,-275,714.2,553.4), new cjs.Rectangle(-383,-275,714.2,560.4), new cjs.Rectangle(-383,-275,714.2,567.4), new cjs.Rectangle(-383,-275,714.2,574.4), new cjs.Rectangle(-383,-275,714.2,581.4), new cjs.Rectangle(-383,-275,714.2,588.4), new cjs.Rectangle(-383,-275,714.2,595.4), new cjs.Rectangle(-383,-275,714.2,602.4), new cjs.Rectangle(-383,-275,714.2,609.4), new cjs.Rectangle(-383,-275,714.2,601.9), new cjs.Rectangle(-383,-275,714.2,594.4), new cjs.Rectangle(-383,-275,714.2,586.9), new cjs.Rectangle(-383,-275,714.2,579.4), new cjs.Rectangle(-383,-275,714.2,571.9), new cjs.Rectangle(-383,-275,714.2,564.4), new cjs.Rectangle(-383,-275,714.2,556.9), rect=new cjs.Rectangle(-383,-275,714.2,550), rect, rect, rect, new cjs.Rectangle(-585.1,-275,916.3,550), new cjs.Rectangle(-559.4,-275,890.6,550), new cjs.Rectangle(-533.9,-275,865.1,580.8), new cjs.Rectangle(-508.4,-275,839.6,611.5), new cjs.Rectangle(-482.9,-275,814.1,642.2), new cjs.Rectangle(-457.4,-275,788.6,672.9), new cjs.Rectangle(-431.9,-275,763.1,703.6), new cjs.Rectangle(-454.2,-275,785.3,734.4), new cjs.Rectangle(-383,-275,714.2,550)];


(lib.animation_mask2_42_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.marker1_2_mc();
	this.instance.setTransform(274.2,-45.1,1,1,77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// animation
	this.instance_1 = new lib.marker1_1_mc();
	this.instance_1.setTransform(292.5,34.9,1,1,77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// animation
	this.instance_2 = new lib.animation_mask2_27_mc();
	this.instance_2.setTransform(243.4,173.4,1,1,0,0,0,32.4,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// animation
	this.instance_3 = new lib.animation_mask2_27_mc();
	this.instance_3.setTransform(243.4,188.3,1,1,31.7,0,0,32.4,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// animation
	this.instance_4 = new lib.gubka_mc();
	this.instance_4.setTransform(-283,129.4,0.63,0.63,-16.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:23.3,x:-30.1,y:-60.8},14).wait(1));

	// animation
	this.instance_5 = new lib.blesk6_mc();
	this.instance_5.setTransform(-283,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-8,y:-118.3},14).wait(1));

	// animation
	this.instance_6 = new lib.mask_2_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

	// animation
	this.instance_7 = new lib.mask_2_2_mc();
	this.instance_7.setTransform(-100.7,42.3,1,1,0,0,180);

	this.instance_8 = new lib.mask_2_2_mc();
	this.instance_8.setTransform(104.3,42.3);

	this.instance_9 = new lib.mask_2_1_mc();
	this.instance_9.setTransform(-0.7,190.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-362.2,-275,693.3,550);
p.frameBounds = [rect, new cjs.Rectangle(-341.6,-275,672.8,550), new cjs.Rectangle(-320.9,-275,652.1,550), new cjs.Rectangle(-300.2,-275,631.4,550), new cjs.Rectangle(-279.4,-275,610.6,550), new cjs.Rectangle(-259.8,-275,591,550), new cjs.Rectangle(-240.1,-275,571.3,550), new cjs.Rectangle(-223.5,-275,554.7,550), rect=new cjs.Rectangle(-222.5,-275,553.7,550), rect, rect, rect, rect, rect, rect];


(lib.animation_mask2_40_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.marker1_2_mc();
	this.instance.setTransform(585.2,-45.1,1,1,77.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({x:274.2},10).wait(1));

	// animation
	this.instance_1 = new lib.marker1_1_mc();
	this.instance_1.setTransform(603.4,34.9,1,1,77.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).to({x:292.5},10).wait(1));

	// animation
	this.instance_2 = new lib.animation_mask2_27_mc();
	this.instance_2.setTransform(603.4,170.4,1,1,0,0,0,32.4,17.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).to({x:243.4,y:173.4},17).wait(1));

	// animation
	this.instance_3 = new lib.animation_mask2_27_mc();
	this.instance_3.setTransform(603.4,185.3,1,1,31.7,0,0,32.4,17.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(23).to({_off:false},0).to({x:243.4,y:188.3},17).wait(1));

	// animation
	this.instance_4 = new lib.gubka_mc();
	this.instance_4.setTransform(-619,129.4,0.63,0.63,-16.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({_off:false},0).to({x:-283},11).wait(1));

	// animation
	this.instance_5 = new lib.blesk6_mc();
	this.instance_5.setTransform(-618.9,-50);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(23).to({_off:false},0).to({x:-283},17).wait(1));

	// animation
	this.instance_6 = new lib.mask2_front_mc();
	this.instance_6.setTransform(8.4,0.3,0.267,1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({_off:false},0).to({scaleX:1,x:0,y:0},7).wait(27));

	// animation
	this.instance_7 = new lib.mask2_back_mc();
	this.instance_7.setTransform(-0.6,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:0.25,x:8.4},7).to({_off:true},1).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-223.1,-274.6,445,550);
p.frameBounds = [rect, new cjs.Rectangle(-198.1,-274.6,397.6,550), new cjs.Rectangle(-173.2,-274.6,350.2,550), new cjs.Rectangle(-148.2,-274.6,302.7,550), new cjs.Rectangle(-123.1,-274.6,255.3,550), new cjs.Rectangle(-98.1,-274.6,207.9,550), new cjs.Rectangle(-73.2,-274.6,160.5,550), new cjs.Rectangle(-51.1,-274.7,119,550.1), new cjs.Rectangle(-75.6,-274.7,165.6,550), new cjs.Rectangle(-100.1,-274.8,212.2,550), new cjs.Rectangle(-124.6,-274.8,258.7,550), new cjs.Rectangle(-149,-274.9,305.3,550), new cjs.Rectangle(-173.6,-274.9,351.9,550), new cjs.Rectangle(-198,-275,398.4,550), rect=new cjs.Rectangle(-222.5,-275,445,550), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-693.9,-275,1383.8,550), new cjs.Rectangle(-674.2,-275,1342.7,550), new cjs.Rectangle(-654.4,-275,1301.8,550), new cjs.Rectangle(-634.6,-275,1260.8,550), new cjs.Rectangle(-614.9,-275,1219.9,550), new cjs.Rectangle(-595.1,-275,1178.9,550), new cjs.Rectangle(-698.1,-275,1260.8,550), new cjs.Rectangle(-667.4,-275,1309.6,550), new cjs.Rectangle(-636.9,-275,1247.8,550), new cjs.Rectangle(-606.4,-275,1186.2,550), new cjs.Rectangle(-575.8,-275,1124.5,550), new cjs.Rectangle(-545.3,-275,1062.9,550), new cjs.Rectangle(-514.7,-275,1001.3,550), new cjs.Rectangle(-484.2,-275,939.6,550), new cjs.Rectangle(-453.6,-275,878,550), new cjs.Rectangle(-423.1,-275,816.3,550), new cjs.Rectangle(-392.6,-275,754.7,550), new cjs.Rectangle(-362.2,-275,693.3,550)];


(lib.animation_mask1_57_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.marker1_1_mc();
	this.instance.setTransform(-289.5,115.1,1,1,124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:139.1,x:-240.5,y:157.1},8).to({rotation:112.2,x:-199.5,y:188.1},2).to({rotation:139.1,x:-240.5,y:157.1},2).to({rotation:112.2,x:-199.5,y:188.1},2).to({rotation:139.1,x:-240.5,y:157.1},2).to({rotation:112.2,x:-199.5,y:188.1},2).to({rotation:125.6,x:-502.5,y:120.2,alpha:0.012},10).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.mask_1_11_mc();
	this.instance_1.setTransform(-159,85.9);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({alpha:1},10).wait(12));

	// animation
	this.instance_2 = new lib.animation_mask1_27_mc();
	this.instance_2.setTransform(116.4,24.1,1,1,0,0,0,31,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

	// animation
	this.instance_3 = new lib.animation_mask1_27_mc();
	this.instance_3.setTransform(-113.1,24.6,1,1,0,0.6,-179.4,30.9,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30));

	// animation
	this.instance_4 = new lib.mask_1_14_mc();
	this.instance_4.setTransform(-130,43,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30));

	// animation
	this.instance_5 = new lib.mask_1_14_mc();
	this.instance_5.setTransform(133,43);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30));

	// animation
	this.instance_6 = new lib.mask_1_13_mc();
	this.instance_6.setTransform(-99.6,-16,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30));

	// animation
	this.instance_7 = new lib.mask_1_13_mc();
	this.instance_7.setTransform(93.4,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(30));

	// animation
	this.instance_8 = new lib.mask_1_12_mc();
	this.instance_8.setTransform(0,123);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(30));

	// animation
	this.instance_9 = new lib.mask_1_10_mc();
	this.instance_9.setTransform(0.4,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(30));

	// animation
	this.instance_10 = new lib.mask_1_1_mc();
	this.instance_10.setTransform(1,193.3);

	this.instance_11 = new lib.mask_1_9_mc();
	this.instance_11.setTransform(-98.6,49.4,1,1,0,0,180);

	this.instance_12 = new lib.mask_1_9_mc();
	this.instance_12.setTransform(102.4,49.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-365.4,-274.7,588.3,550);
p.frameBounds = [rect, new cjs.Rectangle(-361.9,-274.7,584.8,550), new cjs.Rectangle(-358.3,-274.7,581.2,550), new cjs.Rectangle(-354.6,-274.7,577.5,550), new cjs.Rectangle(-351,-274.7,573.9,550), new cjs.Rectangle(-347.1,-274.7,570,550), new cjs.Rectangle(-343.3,-274.7,566.2,550), new cjs.Rectangle(-339.4,-274.7,562.3,550), new cjs.Rectangle(-335.5,-274.7,558.4,550), new cjs.Rectangle(-297.4,-274.7,520.3,550), new cjs.Rectangle(-255.6,-274.7,478.5,572.9), new cjs.Rectangle(-297.4,-274.7,520.3,550), new cjs.Rectangle(-335.5,-274.7,558.4,550), new cjs.Rectangle(-297.4,-274.7,520.3,550), new cjs.Rectangle(-255.6,-274.7,478.5,572.9), new cjs.Rectangle(-297.4,-274.7,520.3,550), new cjs.Rectangle(-335.5,-274.7,558.4,550), new cjs.Rectangle(-297.4,-274.7,520.3,550), new cjs.Rectangle(-255.6,-274.7,478.5,572.9), new cjs.Rectangle(-288.2,-274.7,511.1,565.3), new cjs.Rectangle(-320.6,-274.7,543.5,557.7), new cjs.Rectangle(-353.1,-274.7,576,550.2), new cjs.Rectangle(-385.8,-274.7,608.7,550), new cjs.Rectangle(-418.1,-274.7,641,550), new cjs.Rectangle(-450.7,-274.7,673.6,550), new cjs.Rectangle(-483,-274.7,705.9,550), new cjs.Rectangle(-515.2,-274.7,738.1,550), new cjs.Rectangle(-547.7,-274.7,770.6,550), new cjs.Rectangle(-580.1,-274.7,803,550), new cjs.Rectangle(-222.1,-274.7,445,550)];


(lib.animation_mask1_55_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.marker1_1_mc();
	this.instance.setTransform(-289.5,115.1,1,1,124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-216.5,y:97.3},8).to({x:-239.5,y:85.3},6).to({x:-215.5,y:149.4},6).to({x:-223.5,y:157.4},3).to({x:-211.5,y:156.6},3).to({x:-216.5,y:162.6},2).to({x:-187.5,y:174.9},5).to({x:-178.5,y:177.9},3).to({x:-143.5,y:173.9},3).to({y:178.9},2).to({x:-289.5,y:115.1},10).wait(1));

	// animation
	this.instance_1 = new lib.animation_mask1_27_mc();
	this.instance_1.setTransform(116.4,24.1,1,1,0,0,0,31,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(52));

	// animation
	this.instance_2 = new lib.animation_mask1_27_mc();
	this.instance_2.setTransform(-113.1,24.6,1,1,0,0.6,-179.4,30.9,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(52));

	// animation
	this.instance_3 = new lib.mask_1_14_mc();
	this.instance_3.setTransform(-130,43,1,1,0,0,180);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({alpha:1},33).wait(11));

	// animation
	this.instance_4 = new lib.mask_1_14_mc();
	this.instance_4.setTransform(133,43);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(52));

	// animation
	this.instance_5 = new lib.mask_1_13_mc();
	this.instance_5.setTransform(-99.6,-16,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(52));

	// animation
	this.instance_6 = new lib.mask_1_13_mc();
	this.instance_6.setTransform(93.4,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(52));

	// animation
	this.instance_7 = new lib.mask_1_12_mc();
	this.instance_7.setTransform(0,123);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(52));

	// animation
	this.instance_8 = new lib.mask_1_10_mc();
	this.instance_8.setTransform(0.4,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(52));

	// animation
	this.instance_9 = new lib.mask_1_1_mc();
	this.instance_9.setTransform(1,193.3);

	this.instance_10 = new lib.mask_1_9_mc();
	this.instance_10.setTransform(-98.6,49.4,1,1,0,0,180);

	this.instance_11 = new lib.mask_1_9_mc();
	this.instance_11.setTransform(102.4,49.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-365.4,-274.7,588.3,550);
p.frameBounds = [rect, new cjs.Rectangle(-356,-274.7,578.9,550), new cjs.Rectangle(-346.9,-274.7,569.8,550), new cjs.Rectangle(-337.7,-274.7,560.6,550), new cjs.Rectangle(-328.6,-274.7,551.5,550), new cjs.Rectangle(-319.5,-274.7,542.4,550), new cjs.Rectangle(-310.4,-274.7,533.3,550), new cjs.Rectangle(-301.2,-274.7,524.1,550), new cjs.Rectangle(-292.4,-274.7,515.3,550), new cjs.Rectangle(-296,-274.7,518.9,550), new cjs.Rectangle(-299.8,-274.7,522.7,550), new cjs.Rectangle(-303.6,-274.7,526.5,550), new cjs.Rectangle(-307.5,-274.7,530.4,550), new cjs.Rectangle(-311.3,-274.7,534.2,550), new cjs.Rectangle(-315.4,-274.7,538.3,550), new cjs.Rectangle(-311.1,-274.7,534,550), new cjs.Rectangle(-307.1,-274.7,530,550), new cjs.Rectangle(-303.1,-274.7,526,550), new cjs.Rectangle(-299.1,-274.7,522,550), new cjs.Rectangle(-295.1,-274.7,518,550), new cjs.Rectangle(-291.4,-274.7,514.3,550), new cjs.Rectangle(-293.7,-274.7,516.6,550), new cjs.Rectangle(-296.4,-274.7,519.3,550), new cjs.Rectangle(-299.4,-274.7,522.3,550), new cjs.Rectangle(-295.1,-274.7,518,550), new cjs.Rectangle(-291.1,-274.7,514,550), new cjs.Rectangle(-287.4,-274.7,510.3,550), new cjs.Rectangle(-289.6,-274.7,512.5,550), new cjs.Rectangle(-292.4,-274.7,515.3,550), new cjs.Rectangle(-286.4,-274.7,509.3,550), new cjs.Rectangle(-280.6,-274.7,503.5,550), new cjs.Rectangle(-274.8,-274.7,497.7,550), new cjs.Rectangle(-269,-274.7,491.9,550), new cjs.Rectangle(-263.4,-274.7,486.3,551), new cjs.Rectangle(-260.1,-274.7,483,551.8), new cjs.Rectangle(-257.1,-274.7,480,552.8), new cjs.Rectangle(-254.4,-274.7,477.3,554), new cjs.Rectangle(-242.5,-274.7,465.4,552.5), new cjs.Rectangle(-230.8,-274.7,453.7,551.2), new cjs.Rectangle(-222.1,-274.7,445,550), new cjs.Rectangle(-222.1,-274.7,445,552.3), new cjs.Rectangle(-222.1,-274.7,445,555), new cjs.Rectangle(-233.7,-274.7,456.6,550), new cjs.Rectangle(-248.3,-274.7,471.2,550), new cjs.Rectangle(-262.9,-274.7,485.8,550), new cjs.Rectangle(-277.5,-274.7,500.4,550), new cjs.Rectangle(-292.1,-274.7,515,550), new cjs.Rectangle(-306.7,-274.7,529.6,550), new cjs.Rectangle(-321.3,-274.7,544.2,550), new cjs.Rectangle(-335.9,-274.7,558.8,550), new cjs.Rectangle(-350.5,-274.7,573.4,550), new cjs.Rectangle(-365.4,-274.7,588.3,550)];


(lib.animation_mask1_53_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.marker1_2_mc();
	this.instance.setTransform(274.2,-45.1,1,1,77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:229.2,y:-228.1,alpha:0.012},4).to({_off:true},1).wait(48));

	// animation
	this.instance_1 = new lib.marker1_1_mc();
	this.instance_1.setTransform(292.5,34.9,1,1,77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({rotation:52.2,x:233.5,y:93.9},7).to({x:247.5,y:81.8},4).to({x:223.5,y:147.7},4).to({x:233.5,y:155.7},2).to({x:219.5,y:154.7},3).to({x:225.5,y:162.2},3).to({x:197.5,y:170.2},5).to({x:188.5,y:174.2},4).to({x:153.5,y:172.1},3).to({y:173.1},2).to({rotation:124.5,x:-289.5,y:115.1},11).wait(1));

	// animation
	this.instance_2 = new lib.animation_mask1_27_mc();
	this.instance_2.setTransform(116.4,24.1,1,1,0,0,0,31,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(53));

	// animation
	this.instance_3 = new lib.animation_mask1_27_mc();
	this.instance_3.setTransform(-113.1,24.6,1,1,0,0.6,-179.4,30.9,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(53));

	// animation
	this.instance_4 = new lib.mask_1_14_mc();
	this.instance_4.setTransform(133,43);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).to({alpha:1},30).wait(12));

	// animation
	this.instance_5 = new lib.mask_1_13_mc();
	this.instance_5.setTransform(-99.6,-16,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(53));

	// animation
	this.instance_6 = new lib.mask_1_13_mc();
	this.instance_6.setTransform(93.4,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(53));

	// animation
	this.instance_7 = new lib.mask_1_12_mc();
	this.instance_7.setTransform(0,123);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(53));

	// animation
	this.instance_8 = new lib.mask_1_10_mc();
	this.instance_8.setTransform(0.4,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(53));

	// animation
	this.instance_9 = new lib.mask_1_1_mc();
	this.instance_9.setTransform(1,193.3);

	this.instance_10 = new lib.mask_1_9_mc();
	this.instance_10.setTransform(-98.6,49.4,1,1,0,0,180);

	this.instance_11 = new lib.mask_1_9_mc();
	this.instance_11.setTransform(102.4,49.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.1,-274.7,553.3,550);
p.frameBounds = [rect, rect=new cjs.Rectangle(-222.1,-274.7,553.2,550), rect, rect, new cjs.Rectangle(-222.1,-274.7,553.3,550), new cjs.Rectangle(-222.1,-274.7,551.3,550), new cjs.Rectangle(-222.1,-274.7,549.5,550), new cjs.Rectangle(-222.1,-274.7,547.2,550), new cjs.Rectangle(-222.1,-274.7,544.8,550), new cjs.Rectangle(-222.1,-274.7,542.3,550), new cjs.Rectangle(-222.1,-274.7,539.3,550), new cjs.Rectangle(-222.1,-274.7,536.3,550), new cjs.Rectangle(-222.1,-274.7,539.7,550), new cjs.Rectangle(-222.1,-274.7,543.2,550), new cjs.Rectangle(-222.1,-274.7,546.7,550), new cjs.Rectangle(-222.1,-274.7,550.3,550), new cjs.Rectangle(-222.1,-274.7,544.3,550), new cjs.Rectangle(-222.1,-274.7,538.3,550), new cjs.Rectangle(-222.1,-274.7,532.3,550), new cjs.Rectangle(-222.1,-274.7,526.3,550), new cjs.Rectangle(-222.1,-274.7,531.2,550), new cjs.Rectangle(-222.1,-274.7,536.3,550), new cjs.Rectangle(-222.1,-274.7,531.5,550), new cjs.Rectangle(-222.1,-274.7,526.8,550), new cjs.Rectangle(-222.1,-274.7,522.3,550), new cjs.Rectangle(-222.1,-274.7,524.2,550), new cjs.Rectangle(-222.1,-274.7,526.2,550), new cjs.Rectangle(-222.1,-274.7,528.3,550), new cjs.Rectangle(-222.1,-274.7,522.6,550), new cjs.Rectangle(-222.1,-274.7,517,550), new cjs.Rectangle(-222.1,-274.7,511.4,550), new cjs.Rectangle(-222.1,-274.7,505.8,550), new cjs.Rectangle(-222.1,-274.7,500.3,550), new cjs.Rectangle(-222.1,-274.7,498,550), new cjs.Rectangle(-222.1,-274.7,495.7,550), new cjs.Rectangle(-222.1,-274.7,493.5,550), new cjs.Rectangle(-222.1,-274.7,491.3,550), new cjs.Rectangle(-222.1,-274.7,479.5,550), new cjs.Rectangle(-222.1,-274.7,467.8,550), new cjs.Rectangle(-222.1,-274.7,456.3,550), new cjs.Rectangle(-222.1,-274.7,456.2,550), new cjs.Rectangle(-222.1,-274.7,456.3,550), rect=new cjs.Rectangle(-222.1,-274.7,445,550), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-263.4,-274.7,486.3,550), new cjs.Rectangle(-314.7,-274.7,537.6,550), new cjs.Rectangle(-365.4,-274.7,588.3,550)];


(lib.animation_mask1_51_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.marker1_2_mc();
	this.instance.setTransform(274.2,-45.1,1,1,77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// animation
	this.instance_1 = new lib.marker1_1_mc();
	this.instance_1.setTransform(292.5,34.9,1,1,77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

	// animation
	this.instance_2 = new lib.animation_mask1_27_mc();
	this.instance_2.setTransform(255,167,1,1,0,0,0,31,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:116.4,y:24.1},19).wait(1));

	// animation
	this.instance_3 = new lib.animation_mask1_27_mc();
	this.instance_3.setTransform(247,194,1,1,0,13.2,-166.8,31,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:30.9,skewX:0.6,skewY:-179.4,x:-113.1,y:24.6},19).wait(1));

	// animation
	this.instance_4 = new lib.mask_1_13_mc();
	this.instance_4.setTransform(-99.6,-16,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

	// animation
	this.instance_5 = new lib.mask_1_13_mc();
	this.instance_5.setTransform(93.4,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20));

	// animation
	this.instance_6 = new lib.mask_1_12_mc();
	this.instance_6.setTransform(0,123);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20));

	// animation
	this.instance_7 = new lib.mask_1_10_mc();
	this.instance_7.setTransform(0.4,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20));

	// animation
	this.instance_8 = new lib.mask_1_1_mc();
	this.instance_8.setTransform(1,193.3);

	this.instance_9 = new lib.mask_1_9_mc();
	this.instance_9.setTransform(-98.6,49.4,1,1,0,0,180);

	this.instance_10 = new lib.mask_1_9_mc();
	this.instance_10.setTransform(102.4,49.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.1,-274.7,553.3,550);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_mask1_49_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pencil11_mc();
	this.instance.setTransform(-311.6,46,1,1,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:46.7,x:-127.6,y:76},9).to({x:-176.6,y:61},12).to({x:-245.6,y:55.6},13).to({rotation:-47.1,x:123.4,y:76.6},10).to({rotation:-47.1,x:178.4,y:58.6},15).to({x:245.4,y:54.6},14).to({x:510.5,y:414.7,alpha:0.012},13).to({_off:true},1).wait(1));

	// animation
	this.instance_1 = new lib.marker1_2_mc();
	this.instance_1.setTransform(274.2,-45.1,1,1,77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88));

	// animation
	this.instance_2 = new lib.marker1_1_mc();
	this.instance_2.setTransform(292.5,34.9,1,1,77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(88));

	// animation
	this.instance_3 = new lib.animation_mask1_27_mc();
	this.instance_3.setTransform(255,167,1,1,0,0,0,31,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(88));

	// animation
	this.instance_4 = new lib.animation_mask1_27_mc();
	this.instance_4.setTransform(247,194,1,1,0,13.2,-166.8,31,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(88));

	// animation
	this.instance_5 = new lib.mask_1_13_mc();
	this.instance_5.setTransform(-99.6,-16,1,1,0,0,180);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({alpha:1},25).wait(54));

	// animation
	this.instance_6 = new lib.mask_1_13_mc();
	this.instance_6.setTransform(93.4,-16);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(44).to({_off:false},0).to({alpha:1},29).wait(15));

	// animation
	this.instance_7 = new lib.mask_1_12_mc();
	this.instance_7.setTransform(0,123);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(88));

	// animation
	this.instance_8 = new lib.mask_1_10_mc();
	this.instance_8.setTransform(0.4,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(88));

	// animation
	this.instance_9 = new lib.mask_1_1_mc();
	this.instance_9.setTransform(1,193.3);

	this.instance_10 = new lib.mask_1_9_mc();
	this.instance_10.setTransform(-98.6,49.4,1,1,0,0,180);

	this.instance_11 = new lib.mask_1_9_mc();
	this.instance_11.setTransform(102.4,49.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(88));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-380.7,-274.7,711.9,550);
p.frameBounds = [rect, new cjs.Rectangle(-363.3,-274.7,694.5,550), new cjs.Rectangle(-346.7,-274.7,677.9,550), new cjs.Rectangle(-330,-274.7,661.2,550), new cjs.Rectangle(-313.1,-274.7,644.3,550), new cjs.Rectangle(-296,-274.7,627.2,550), new cjs.Rectangle(-278.9,-274.7,610.1,550), new cjs.Rectangle(-261.6,-274.7,592.8,550), new cjs.Rectangle(-244.2,-274.7,575.4,550), new cjs.Rectangle(-227.1,-274.7,558.3,550), new cjs.Rectangle(-230.6,-274.7,561.8,550), new cjs.Rectangle(-234.6,-274.7,565.8,550), new cjs.Rectangle(-238.7,-274.7,569.9,550), new cjs.Rectangle(-242.8,-274.7,574,550), new cjs.Rectangle(-246.9,-274.7,578.1,550), new cjs.Rectangle(-251,-274.7,582.2,550), new cjs.Rectangle(-255.1,-274.7,586.3,550), new cjs.Rectangle(-259.1,-274.7,590.3,550), new cjs.Rectangle(-263.2,-274.7,594.4,550), new cjs.Rectangle(-267.3,-274.7,598.5,550), new cjs.Rectangle(-271.4,-274.7,602.6,550), new cjs.Rectangle(-276.1,-274.7,607.3,550), new cjs.Rectangle(-280.8,-274.7,612,550), new cjs.Rectangle(-286.1,-274.7,617.3,550), new cjs.Rectangle(-291.4,-274.7,622.6,550), new cjs.Rectangle(-296.7,-274.7,627.9,550), new cjs.Rectangle(-302,-274.7,633.2,550), new cjs.Rectangle(-307.3,-274.7,638.5,550), new cjs.Rectangle(-312.6,-274.7,643.8,550), new cjs.Rectangle(-317.9,-274.7,649.1,550), new cjs.Rectangle(-323.2,-274.7,654.4,550), new cjs.Rectangle(-328.6,-274.7,659.8,550), new cjs.Rectangle(-333.9,-274.7,665.1,550), new cjs.Rectangle(-339.2,-274.7,670.3,550), new cjs.Rectangle(-345.1,-274.7,676.3,550), new cjs.Rectangle(-294.4,-274.7,625.6,550), new cjs.Rectangle(-241.8,-274.7,573,550), rect=new cjs.Rectangle(-222.1,-274.7,553.3,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-222.1,-274.7,557.8,550), new cjs.Rectangle(-222.1,-274.7,562.5,550), new cjs.Rectangle(-222.1,-274.7,567.5,550), new cjs.Rectangle(-222.1,-274.7,587.7,550), new cjs.Rectangle(-222.1,-274.7,608.1,550), new cjs.Rectangle(-222.1,-274.7,628.5,550), new cjs.Rectangle(-222.1,-274.7,648.8,550), new cjs.Rectangle(-222.1,-274.7,669.2,561.5), new cjs.Rectangle(-222.1,-274.7,689.6,589.2), new cjs.Rectangle(-222.1,-274.7,710,616.9), new cjs.Rectangle(-222.1,-274.7,730.4,644.6), new cjs.Rectangle(-222.1,-274.7,750.8,672.3), new cjs.Rectangle(-222.1,-274.7,771.2,700), new cjs.Rectangle(-222.1,-274.7,791.6,727.7), new cjs.Rectangle(-222.1,-274.7,811.9,755.4), new cjs.Rectangle(-222.1,-274.7,832.6,783.8), new cjs.Rectangle(-222.1,-274.7,553.3,550)];


(lib.animation_mask1_47_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.kist1_mc();
	this.instance.setTransform(-230.7,166.8,0.871,0.871,39.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:45.9,x:-165.7,y:179.8},7).to({x:-200.7,y:171.8},3).to({rotation:-25.8,x:-40.7,y:216.8},6).to({rotation:45.9,x:-200.7,y:171.8},6).to({rotation:-25.8,x:-40.7,y:216.8},6).to({rotation:-25.8,x:117.3,y:203.8},14).to({rotation:-58.6,x:239.3,y:156.8},7).to({rotation:-25.8,x:117.3,y:203.8},8).to({rotation:-58.6,x:239.3,y:156.8},7).to({x:235.3,y:393.8,alpha:0.012},10).to({_off:true},1).wait(5));

	// animation
	this.instance_1 = new lib.pencil11_mc();
	this.instance_1.setTransform(-628.6,46,1,1,27);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(67).to({_off:false},0).to({x:-311.6,alpha:1},12).wait(1));

	// animation
	this.instance_2 = new lib.marker1_2_mc();
	this.instance_2.setTransform(274.2,-45.1,1,1,77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80));

	// animation
	this.instance_3 = new lib.marker1_1_mc();
	this.instance_3.setTransform(292.5,34.9,1,1,77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(80));

	// animation
	this.instance_4 = new lib.animation_mask1_27_mc();
	this.instance_4.setTransform(255,167,1,1,0,0,0,31,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(80));

	// animation
	this.instance_5 = new lib.animation_mask1_27_mc();
	this.instance_5.setTransform(247,194,1,1,0,13.2,-166.8,31,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(80));

	// animation
	this.instance_6 = new lib.mask_1_12_mc();
	this.instance_6.setTransform(0,123);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({_off:false},0).to({alpha:1},57).wait(16));

	// animation
	this.instance_7 = new lib.mask_1_10_mc();
	this.instance_7.setTransform(0.4,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(80));

	// animation
	this.instance_8 = new lib.mask_1_1_mc();
	this.instance_8.setTransform(1,193.3);

	this.instance_9 = new lib.mask_1_9_mc();
	this.instance_9.setTransform(-98.6,49.4,1,1,0,0,180);

	this.instance_10 = new lib.mask_1_9_mc();
	this.instance_10.setTransform(102.4,49.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-313.6,-274.7,644.8,550);
p.frameBounds = [rect, new cjs.Rectangle(-305.2,-274.7,636.3,550), new cjs.Rectangle(-297.1,-274.7,628.3,550), new cjs.Rectangle(-288.6,-274.7,619.8,550), new cjs.Rectangle(-280.4,-274.7,611.6,550), new cjs.Rectangle(-272.1,-274.7,603.3,550), new cjs.Rectangle(-263.6,-274.7,594.8,550), new cjs.Rectangle(-255.5,-274.7,586.7,550), new cjs.Rectangle(-267,-274.7,598.2,550), new cjs.Rectangle(-278.7,-274.7,609.9,550), new cjs.Rectangle(-290.5,-274.7,621.7,550), new cjs.Rectangle(-250,-274.7,581.2,552.3), new cjs.Rectangle(-222.1,-274.7,553.3,566.1), new cjs.Rectangle(-222.1,-274.7,553.3,575.2), new cjs.Rectangle(-222.1,-274.7,553.3,581.1), new cjs.Rectangle(-222.1,-274.7,553.3,590.2), new cjs.Rectangle(-222.1,-274.7,553.3,594.7), new cjs.Rectangle(-222.1,-274.7,553.3,590.2), new cjs.Rectangle(-222.1,-274.7,553.3,581.1), new cjs.Rectangle(-222.1,-274.7,553.3,575.2), new cjs.Rectangle(-222.1,-274.7,553.3,566), new cjs.Rectangle(-250,-274.7,581.2,552.3), new cjs.Rectangle(-290.5,-274.7,621.7,550), new cjs.Rectangle(-250,-274.7,581.2,552.3), new cjs.Rectangle(-222.1,-274.7,553.3,566.1), new cjs.Rectangle(-222.1,-274.7,553.3,575.2), new cjs.Rectangle(-222.1,-274.7,553.3,581.1), new cjs.Rectangle(-222.1,-274.7,553.3,590.2), new cjs.Rectangle(-222.1,-274.7,553.3,594.7), new cjs.Rectangle(-222.1,-274.7,553.3,593.6), new cjs.Rectangle(-222.1,-274.7,553.3,592.7), new cjs.Rectangle(-222.1,-274.7,553.3,591.8), new cjs.Rectangle(-222.1,-274.7,553.3,590.8), new cjs.Rectangle(-222.1,-274.7,553.3,589.9), new cjs.Rectangle(-222.1,-274.7,553.3,589), new cjs.Rectangle(-222.1,-274.7,553.3,588.1), new cjs.Rectangle(-222.1,-274.7,553.3,587.1), new cjs.Rectangle(-222.1,-274.7,553.3,586.2), new cjs.Rectangle(-222.1,-274.7,553.3,585.3), new cjs.Rectangle(-222.1,-274.7,553.3,584.3), new cjs.Rectangle(-222.1,-274.7,553.3,583.4), new cjs.Rectangle(-222.1,-274.7,553.3,582.5), new cjs.Rectangle(-222.1,-274.7,553.3,581.7), new cjs.Rectangle(-222.1,-274.7,553.3,572.4), new cjs.Rectangle(-222.1,-274.7,553.3,562.5), new cjs.Rectangle(-222.1,-274.7,553.3,552), rect=new cjs.Rectangle(-222.1,-274.7,553.3,550), rect, rect, new cjs.Rectangle(-222.1,-274.7,561.6,550), rect=new cjs.Rectangle(-222.1,-274.7,553.3,550), rect, rect, rect, new cjs.Rectangle(-222.1,-274.7,553.3,556.1), new cjs.Rectangle(-222.1,-274.7,553.3,565.1), new cjs.Rectangle(-222.1,-274.7,553.3,573.6), new cjs.Rectangle(-222.1,-274.7,553.3,581.7), new cjs.Rectangle(-222.1,-274.7,553.3,572.4), new cjs.Rectangle(-222.1,-274.7,553.3,562.5), new cjs.Rectangle(-222.1,-274.7,553.3,552), rect=new cjs.Rectangle(-222.1,-274.7,553.3,550), rect, rect, new cjs.Rectangle(-222.1,-274.7,561.6,550), new cjs.Rectangle(-222.1,-274.7,561.1,550), new cjs.Rectangle(-222.1,-274.7,560.7,551.5), new cjs.Rectangle(-697.7,-274.7,1035.9,575.2), new cjs.Rectangle(-670.3,-274.7,1008.1,598.9), new cjs.Rectangle(-643.9,-274.7,981.3,622.6), new cjs.Rectangle(-617.5,-274.7,954.5,646.3), new cjs.Rectangle(-591.1,-274.7,927.7,670), new cjs.Rectangle(-564.7,-274.7,900.9,693.7), new cjs.Rectangle(-538.2,-274.7,874,717.4), new cjs.Rectangle(-511.8,-274.7,847.3,741.3), new cjs.Rectangle(-485.4,-274.7,816.6,550), new cjs.Rectangle(-459,-274.7,790.2,550), new cjs.Rectangle(-432.6,-274.7,763.8,550), new cjs.Rectangle(-406.2,-274.7,737.3,550), new cjs.Rectangle(-380.7,-274.7,711.9,550)];


(lib.animation_mask1_45_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.marker1_2_mc();
	this.instance.setTransform(274.2,-45.1,1,1,77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28));

	// animation
	this.instance_1 = new lib.marker1_1_mc();
	this.instance_1.setTransform(292.5,34.9,1,1,77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28));

	// animation
	this.instance_2 = new lib.animation_mask1_27_mc();
	this.instance_2.setTransform(255,167,1,1,0,0,0,31,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28));

	// animation
	this.instance_3 = new lib.animation_mask1_27_mc();
	this.instance_3.setTransform(247,194,1,1,0,13.2,-166.8,31,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(28));

	// animation
	this.instance_4 = new lib.kist1_mc();
	this.instance_4.setTransform(-307.6,-33.6,0.871,0.871,148);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:198,x:-227.7,y:30.4},7).to({rotation:171.5,x:-268.7,y:33.9},2).to({rotation:198,x:-227.7,y:30.4},2).to({rotation:171.5,x:-268.7,y:33.9},2).to({rotation:198,x:-227.7,y:30.4},2).to({rotation:171.5,x:-268.7,y:33.9},2).to({rotation:39.4,x:-230.7,y:166.8},10).wait(1));

	// animation
	this.instance_5 = new lib.blesk6_mc();
	this.instance_5.setTransform(-308,133.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-252.9,y:96.3},7).wait(10).to({y:396.3,alpha:0.012},9).to({_off:true},1).wait(1));

	// animation
	this.instance_6 = new lib.mask_1_10_mc();
	this.instance_6.setTransform(0.4,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(28));

	// animation
	this.instance_7 = new lib.mask_1_1_mc();
	this.instance_7.setTransform(1,193.3);

	this.instance_8 = new lib.mask_1_9_mc();
	this.instance_8.setTransform(-98.6,49.4,1,1,0,0,180);

	this.instance_9 = new lib.mask_1_9_mc();
	this.instance_9.setTransform(102.4,49.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-383,-274.7,714.2,550);
p.frameBounds = [rect, new cjs.Rectangle(-375.1,-274.7,706.3,550), new cjs.Rectangle(-367.2,-274.7,698.4,550), new cjs.Rectangle(-359.4,-274.7,690.6,550), new cjs.Rectangle(-351.5,-274.7,682.7,550), new cjs.Rectangle(-343.7,-274.7,674.8,550), new cjs.Rectangle(-335.8,-274.7,667,550), rect=new cjs.Rectangle(-327.9,-274.7,659.1,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-338.3,-274.7,669.5,550), new cjs.Rectangle(-349.1,-274.7,680.3,552.5), new cjs.Rectangle(-355.1,-274.7,686.3,585.8), new cjs.Rectangle(-355.7,-274.7,686.9,619.2), new cjs.Rectangle(-350.7,-274.7,681.8,652.5), new cjs.Rectangle(-348.2,-274.7,679.4,685.8), new cjs.Rectangle(-342,-274.7,673.2,719.1), new cjs.Rectangle(-330.2,-274.7,661.4,752.5), new cjs.Rectangle(-313.6,-274.7,644.8,550)];


(lib.animation_mask1_43_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.marker1_2_mc();
	this.instance.setTransform(274.2,-45.1,1,1,77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(130));

	// animation
	this.instance_1 = new lib.marker1_1_mc();
	this.instance_1.setTransform(292.5,34.9,1,1,77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(130));

	// animation
	this.instance_2 = new lib.animation_mask1_27_mc();
	this.instance_2.setTransform(255,167,1,1,0,0,0,31,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(130));

	// animation
	this.instance_3 = new lib.animation_mask1_27_mc();
	this.instance_3.setTransform(247,194,1,1,0,13.2,-166.8,31,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(130));

	// animation
	this.instance_4 = new lib.kist1_mc();
	this.instance_4.setTransform(-511.6,-33.6,0.871,0.871,148);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(121).to({_off:false},0).to({x:-307.6,alpha:1},8).wait(1));

	// animation
	this.instance_5 = new lib.gubka_mc();
	this.instance_5.setTransform(-30.1,-60.8,0.63,0.63,23.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.56,scaleY:0.56},3).to({scaleX:0.63,scaleY:0.63},3).to({scaleX:0.56,scaleY:0.56},3).to({scaleX:0.63,scaleY:0.63},2).to({x:-125.1,y:-145.8},3).to({x:-12.1,y:-217.8},10).to({x:138.6,y:-109.8},12).to({x:-128.4,y:-60.8},14).to({x:-6.4,y:68.1},14).to({scaleX:0.55,scaleY:0.55},3).to({scaleX:0.63,scaleY:0.63},3).to({x:-102.4,y:137.1},11).to({x:106.6,y:143.1},13).to({x:4.6,y:248.1},15).to({x:-111.9,y:158.1},12).to({x:-369.9,y:373.1,alpha:0.012},7).to({_off:true},1).wait(1));

	// animation
	this.instance_6 = new lib.blesk6_mc();
	this.instance_6.setTransform(-8,-118.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11).to({x:-308,y:133.7},7).wait(112));

	// animation
	this.instance_7 = new lib.mask_1_10_mc();
	this.instance_7.setTransform(0.4,0.3);
	this.instance_7.alpha = 0.012;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).to({alpha:1},95).wait(21));

	// animation
	this.instance_8 = new lib.mask_1_7_mc();
	this.instance_8.setTransform(0.4,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},109).wait(21));

	// animation
	this.instance_9 = new lib.mask_1_1_mc();
	this.instance_9.setTransform(1,193.3);

	this.instance_10 = new lib.mask_1_9_mc();
	this.instance_10.setTransform(-98.6,49.4,1,1,0,0,180);

	this.instance_11 = new lib.mask_1_9_mc();
	this.instance_11.setTransform(102.4,49.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.1,-274.7,553.3,550);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-254.4,-274.7,585.6,550), new cjs.Rectangle(-297.3,-274.7,628.5,550), new cjs.Rectangle(-340.1,-274.7,671.3,550), rect=new cjs.Rectangle(-383,-274.7,714.2,550), rect, new cjs.Rectangle(-383,-275.2,714.2,550.5), new cjs.Rectangle(-383,-282.4,714.2,557.7), new cjs.Rectangle(-383,-289.6,714.2,564.9), new cjs.Rectangle(-383,-296.8,714.2,572.1), new cjs.Rectangle(-383,-304.1,714.2,579.4), new cjs.Rectangle(-383,-294.9,714.2,570.3), new cjs.Rectangle(-383,-285.9,714.2,561.3), new cjs.Rectangle(-383,-276.9,714.2,552.3), rect=new cjs.Rectangle(-383,-274.7,714.2,550), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-383,-274.7,714.2,553), new cjs.Rectangle(-383,-274.7,714.2,560), new cjs.Rectangle(-383,-274.7,714.2,567), new cjs.Rectangle(-383,-274.7,714.2,574), new cjs.Rectangle(-383,-274.7,714.2,581), new cjs.Rectangle(-383,-274.7,714.2,588), new cjs.Rectangle(-383,-274.7,714.2,595), new cjs.Rectangle(-383,-274.7,714.2,602), new cjs.Rectangle(-383,-274.7,714.2,609.1), new cjs.Rectangle(-383,-274.7,714.2,601.5), new cjs.Rectangle(-383,-274.7,714.2,594), new cjs.Rectangle(-383,-274.7,714.2,586.5), new cjs.Rectangle(-383,-274.7,714.2,579), new cjs.Rectangle(-383,-274.7,714.2,571.5), new cjs.Rectangle(-383,-274.7,714.2,564), new cjs.Rectangle(-383,-274.7,714.2,556.5), rect=new cjs.Rectangle(-383,-274.7,714.2,550), rect, rect, rect, new cjs.Rectangle(-585.1,-274.7,916.3,550), new cjs.Rectangle(-559.4,-274.7,890.6,550), new cjs.Rectangle(-533.9,-274.7,865.1,580.4), new cjs.Rectangle(-508.4,-274.7,839.6,611.1), new cjs.Rectangle(-482.9,-274.7,814.1,641.8), new cjs.Rectangle(-457.4,-274.7,788.6,672.5), new cjs.Rectangle(-431.9,-274.7,763.1,703.3), new cjs.Rectangle(-454.2,-274.7,785.3,734.1), new cjs.Rectangle(-383,-274.7,714.2,550)];


(lib.animation_mask1_42_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.marker1_2_mc();
	this.instance.setTransform(274.2,-45.1,1,1,77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// animation
	this.instance_1 = new lib.marker1_1_mc();
	this.instance_1.setTransform(292.5,34.9,1,1,77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// animation
	this.instance_2 = new lib.animation_mask1_27_mc();
	this.instance_2.setTransform(255,167,1,1,0,0,0,31,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// animation
	this.instance_3 = new lib.animation_mask1_27_mc();
	this.instance_3.setTransform(247,194,1,1,0,13.2,-166.8,31,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// animation
	this.instance_4 = new lib.gubka_mc();
	this.instance_4.setTransform(-283,129.4,0.63,0.63,-16.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:23.3,x:-30.1,y:-60.8},14).wait(1));

	// animation
	this.instance_5 = new lib.blesk6_mc();
	this.instance_5.setTransform(-283,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-8,y:-118.3},14).wait(1));

	// animation
	this.instance_6 = new lib.mask_1_7_mc();
	this.instance_6.setTransform(0.4,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

	// animation
	this.instance_7 = new lib.mask_1_1_mc();
	this.instance_7.setTransform(1,193.3);

	this.instance_8 = new lib.mask_1_9_mc();
	this.instance_8.setTransform(-98.6,49.4,1,1,0,0,180);

	this.instance_9 = new lib.mask_1_9_mc();
	this.instance_9.setTransform(102.4,49.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-362.2,-274.7,693.3,550);
p.frameBounds = [rect, new cjs.Rectangle(-341.6,-274.7,672.8,550), new cjs.Rectangle(-320.9,-274.7,652.1,550), new cjs.Rectangle(-300.2,-274.7,631.4,550), new cjs.Rectangle(-279.4,-274.7,610.6,550), new cjs.Rectangle(-259.8,-274.7,591,550), new cjs.Rectangle(-240.1,-274.7,571.3,550), new cjs.Rectangle(-223.5,-274.7,554.7,550), rect=new cjs.Rectangle(-222.1,-274.7,553.3,550), rect, rect, rect, rect, rect, rect];


(lib.animation_mask1_40_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.marker1_2_mc();
	this.instance.setTransform(585.2,-45.1,1,1,77.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({x:274.2},10).wait(1));

	// animation
	this.instance_1 = new lib.marker1_1_mc();
	this.instance_1.setTransform(603.4,34.9,1,1,77.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).to({x:292.5},10).wait(1));

	// animation
	this.instance_2 = new lib.animation_mask1_27_mc();
	this.instance_2.setTransform(589,167,1,1,0,0,0,31,12);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).to({x:255},17).wait(1));

	// animation
	this.instance_3 = new lib.animation_mask1_27_mc();
	this.instance_3.setTransform(580.9,194,1,1,0,13.2,-166.8,31,12);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(23).to({_off:false},0).to({x:247},17).wait(1));

	// animation
	this.instance_4 = new lib.gubka_mc();
	this.instance_4.setTransform(-619,129.4,0.63,0.63,-16.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({_off:false},0).to({x:-283},11).wait(1));

	// animation
	this.instance_5 = new lib.blesk6_mc();
	this.instance_5.setTransform(-618.9,-50);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(23).to({_off:false},0).to({x:-283},17).wait(1));

	// animation
	this.instance_6 = new lib.mask1_front_mc();
	this.instance_6.setTransform(7.7,0.3,0.257,1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({_off:false},0).to({scaleX:1,x:0.4},7).wait(27));

	// animation
	this.instance_7 = new lib.mask1_back_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:0.26,x:7.7},7).to({_off:true},1).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-222.5,-275,445,550);
p.frameBounds = [rect, new cjs.Rectangle(-197.7,-275,397.8,550), new cjs.Rectangle(-173,-275,350.5,550), new cjs.Rectangle(-148.3,-275,303.3,550), new cjs.Rectangle(-123.6,-275,256,550), new cjs.Rectangle(-98.9,-275,208.8,550), new cjs.Rectangle(-74.1,-275,161.5,550), new cjs.Rectangle(-49.4,-275,114.3,550.4), new cjs.Rectangle(-74,-274.7,161.5,550), new cjs.Rectangle(-98.7,-274.7,208.8,550), new cjs.Rectangle(-123.4,-274.7,256,550), new cjs.Rectangle(-148.1,-274.7,303.3,550), new cjs.Rectangle(-172.7,-274.7,350.5,550), new cjs.Rectangle(-197.4,-274.7,397.8,550), rect=new cjs.Rectangle(-222.1,-274.7,445,550), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-693.9,-274.7,1357.9,550), new cjs.Rectangle(-674.2,-274.7,1318.5,550), new cjs.Rectangle(-654.4,-274.7,1279.1,550), new cjs.Rectangle(-634.6,-274.7,1239.7,550), new cjs.Rectangle(-614.9,-274.7,1200.3,550), new cjs.Rectangle(-595.1,-274.7,1160.9,550), new cjs.Rectangle(-698.1,-274.7,1244.3,550), new cjs.Rectangle(-667.4,-274.7,1309.6,550), new cjs.Rectangle(-636.9,-274.7,1247.8,550), new cjs.Rectangle(-606.4,-274.7,1186.2,550), new cjs.Rectangle(-575.8,-274.7,1124.5,550), new cjs.Rectangle(-545.3,-274.7,1062.9,550), new cjs.Rectangle(-514.7,-274.7,1001.3,550), new cjs.Rectangle(-484.2,-274.7,939.6,550), new cjs.Rectangle(-453.6,-274.7,878,550), new cjs.Rectangle(-423.1,-274.7,816.3,550), new cjs.Rectangle(-392.6,-274.7,754.7,550), new cjs.Rectangle(-362.2,-274.7,693.3,550)];


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
	this.body_mc.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1200,0,3200,600);
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
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.barbie_star_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2023 edapskov v 1.0
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
		/*
		
		*/
		var _body_mc = this.body_mc;
		_body_mc.gotoAndStop(0);
		_body_mc.loop = false;
		_body_mc.visible = false;
		/*
		
		*/
		var _timeOut_id;
		/*
		
		*/
		function _initAnimationBarbieStarFunc()
		{
			if(_timeOut_id != null)
			{
				clearTimeout(_timeOut_id);
			}
			timeOut_id = setTimeout(_startAnimationBarbieStarFunc, 1000 + (Math.random() * 2000));
		}
		/*
		
		*/
		function _startAnimationBarbieStarFunc()
		{
			try
			{
				/*
				
				*/
				_body_mc.gotoAndPlay(0);
				_body_mc.visible = true;
				/*
				
				*/
				_initAnimationBarbieStarFunc();
			}
			catch(event)
			{
				
			}
			finally
			{
				
			}
		}
		/*
		
		*/
		_initAnimationBarbieStarFunc();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.barbie_star_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
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


(lib.play_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-103.3,204,198.3);
p.frameBounds = [rect, rect, rect, rect];


(lib.photo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-103.3,204,198.3);
p.frameBounds = [rect, rect, rect, rect];


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-103.3,204,198.3);
p.frameBounds = [rect, rect, rect, rect];


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
	this.instance.setTransform(0,0,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.9,scaleY:0.9,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-85,-85,170,170), new cjs.Rectangle(-90,-90,180,180)];


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-103.3,204,198.3);
p.frameBounds = [rect, rect, rect, rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-210,-10,1220,620);
p.frameBounds = [rect];


(lib.RedirectScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.redirect_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,760);
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
p.nominalBounds = rect = new cjs.Rectangle(-329.8,-523,631.3,625.5);
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
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,646);
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
p.nominalBounds = rect = new cjs.Rectangle(-370,-240,740,470);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.indicator_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// indicator
	this.indicator_mc = new lib.indicator_1_mc();
	this.indicator_mc.setTransform(-110,-15);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// bg
	this.instance = new lib.indicator_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-47,280,87);
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


(lib.dressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-230,20);

	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(230,20);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-309.9,-250,619.8,800);
p.frameBounds = [rect];


(lib.dressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,500);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(0,215);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(0,-215);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-290,280,840);
p.frameBounds = [rect];


(lib.dressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-230,20);

	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(230,20);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-309.9,-250,619.8,800);
p.frameBounds = [rect];


(lib.dressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,500);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(0,215);

	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(0,-215);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-290,280,840);
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
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// filters
	this.filters_animation_mc = new lib.filters_animation_mc();
	this.filters_animation_mc.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.filters_animation_mc).wait(1));

	// btn
	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(700,350);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(100,350);

	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(220.5,700.5,0.75,0.75,0,0,0,0.7,0.7);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(580,700,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(700,520);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.playAgain_btn = new lib.again_btn();
	this.playAgain_btn.setTransform(100,520);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.again_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,40);
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
	this.instance.setTransform(-200,400);
	this.instance.alpha = 0.102;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_mc();

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-319.9,1262.7,1780);
p.frameBounds = [rect];


(lib.quest_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(680,375,1,1,-15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1,p:{rotation:-15,x:680,y:375,skewX:0,skewY:0,regX:0}},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:15,x:605,y:345,skewX:0,skewY:0,regX:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:-15,x:415,y:470,skewX:0,skewY:0,regX:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:435,y:150,skewX:-90,skewY:90,regX:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:30,x:590,y:495,skewX:0,skewY:0,regX:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:160,y:300,skewX:-30,skewY:150,regX:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:15,x:625,y:290,skewX:0,skewY:0,regX:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:160,y:480,skewX:-90,skewY:90,regX:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:170,y:343,skewX:10.6,skewY:-169.4,regX:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:135,y:285,skewX:-30,skewY:150,regX:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:75,x:635.1,y:435.2,skewX:0,skewY:0,regX:0.2}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0}},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]}).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:560}},{t:this.instance,p:{y:90}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).wait(1));

	// objects
	this.object_1 = new lib.object_1_4_mc();
	this.object_1.setTransform(686,329);

	this.frame_2_mc = new lib.arrow_14_mc();
	this.frame_2_mc.setTransform(520,340);

	this.frame_3_mc = new lib.arrow_15_mc();
	this.frame_3_mc.setTransform(280,340,1,1,0,0,180);

	this.frame_4_mc = new lib.arrow_16_mc();
	this.frame_4_mc.setTransform(380,465,1,1,-135);

	this.frame_5_mc = new lib.arrow_103_mc();
	this.frame_5_mc.setTransform(400,400);

	this.frame_6_mc = new lib.arrow_18_mc();
	this.frame_6_mc.setTransform(460,275);

	this.frame_7_mc = new lib.arrow_19_mc();
	this.frame_7_mc.setTransform(340,295,1,1,-90);

	this.object_8 = new lib.object_8_4_mc();
	this.object_8.setTransform(627,304);

	this.object_9 = new lib.object_9_4_mc();
	this.object_9.setTransform(446,463);

	this.frame_10_mc = new lib.arrow_20_mc();
	this.frame_10_mc.setTransform(340,290,1,1,-90);

	this.object_11 = new lib.object_11_4_mc();
	this.object_11.setTransform(435,157);

	this.frame_12_mc = new lib.arrow_104_mc();
	this.frame_12_mc.setTransform(415,515);

	this.frame_13_mc = new lib.arrow_21_mc();
	this.frame_13_mc.setTransform(445,315);

	this.frame_14_mc = new lib.arrow_105_mc();
	this.frame_14_mc.setTransform(400,400);

	this.frame_15_mc = new lib.arrow_22_mc();
	this.frame_15_mc.setTransform(175,320,1,1,-90);

	this.object_16 = new lib.object_16_4_mc();
	this.object_16.setTransform(615,476);

	this.object_17 = new lib.object_17_4_mc();
	this.object_17.setTransform(95,308);

	this.object_18 = new lib.object_18_4_mc();
	this.object_18.setTransform(690,300);

	this.object_19 = new lib.object_19_4_mc();
	this.object_19.setTransform(159,492);

	this.frame_20_mc = new lib.arrow_23_mc();
	this.frame_20_mc.setTransform(175,320,1,1,-90);

	this.object_21 = new lib.object_21_4_mc();
	this.object_21.setTransform(103,325);

	this.object_22 = new lib.object_22_4_mc();
	this.object_22.setTransform(400,305);

	this.object_23 = new lib.object_23_4_mc();
	this.object_23.setTransform(95,337);

	this.frame_24_mc = new lib.arrow_24_mc();
	this.frame_24_mc.setTransform(420,440,1,1,45);

	this.frame_25_mc = new lib.arrow_25_mc();
	this.frame_25_mc.setTransform(420,225,1,1,0,135,-45);

	this.object_26 = new lib.object_26_4_mc();
	this.object_26.setTransform(645,480);

	this.frame_27_mc = new lib.arrow_26_mc();
	this.frame_27_mc.setTransform(520,340);

	this.frame_28_mc = new lib.arrow_27_mc();
	this.frame_28_mc.setTransform(280,340,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).to({state:[{t:this.frame_4_mc}]},1).to({state:[{t:this.frame_5_mc}]},1).to({state:[{t:this.frame_6_mc}]},1).to({state:[{t:this.frame_7_mc}]},1).to({state:[{t:this.object_8}]},1).to({state:[{t:this.object_9}]},1).to({state:[{t:this.frame_10_mc}]},1).to({state:[{t:this.object_11}]},1).to({state:[{t:this.frame_12_mc}]},1).to({state:[{t:this.frame_13_mc}]},1).to({state:[{t:this.frame_14_mc}]},1).to({state:[{t:this.frame_15_mc}]},1).to({state:[{t:this.object_16}]},1).to({state:[{t:this.object_17}]},1).to({state:[{t:this.object_18}]},1).to({state:[{t:this.object_19}]},1).to({state:[{t:this.frame_20_mc}]},1).to({state:[{t:this.object_21}]},1).to({state:[{t:this.object_22}]},1).to({state:[{t:this.object_23}]},1).to({state:[{t:this.frame_24_mc}]},1).to({state:[{t:this.frame_25_mc}]},1).to({state:[{t:this.object_26}]},1).to({state:[{t:this.frame_27_mc}]},1).to({state:[{t:this.frame_28_mc}]},1).wait(1));

	// subjects
	this.subject_1 = new lib.animation_mask2_2_mc();
	this.subject_1.setTransform(400,300);

	this.subject_2 = new lib.animation_mask2_4_mc();
	this.subject_2.setTransform(400,300);

	this.subject_3 = new lib.animation_mask2_6_mc();
	this.subject_3.setTransform(400,300);

	this.subject_4 = new lib.animation_mask2_8_mc();
	this.subject_4.setTransform(400,300);

	this.subject_5 = new lib.animation_mask2_10_mc();
	this.subject_5.setTransform(400,300);

	this.subject_6 = new lib.animation_mask2_12_mc();
	this.subject_6.setTransform(400,300);

	this.subject_7 = new lib.animation_mask2_14_mc();
	this.subject_7.setTransform(400,300);

	this.subject_8 = new lib.animation_mask2_16_mc();
	this.subject_8.setTransform(400,300);

	this.subject_9 = new lib.animation_mask2_18_mc();
	this.subject_9.setTransform(400,300);

	this.subject_10 = new lib.animation_mask2_20_mc();
	this.subject_10.setTransform(400,300);

	this.subject_11 = new lib.animation_mask2_22_mc();
	this.subject_11.setTransform(400,300);

	this.subject_12 = new lib.animation_mask2_24_mc();
	this.subject_12.setTransform(400,300);

	this.subject_13 = new lib.animation_mask2_26_mc();
	this.subject_13.setTransform(400,300);

	this.subject_14 = new lib.animation_mask2_28_mc();
	this.subject_14.setTransform(400,300);

	this.subject_15 = new lib.animation_mask2_30_mc();
	this.subject_15.setTransform(400,300);

	this.subject_16 = new lib.animation_mask2_32_mc();
	this.subject_16.setTransform(400,300);

	this.subject_17 = new lib.animation_mask2_34_mc();
	this.subject_17.setTransform(400,300);

	this.subject_18 = new lib.animation_mask2_36_mc();
	this.subject_18.setTransform(400,300);

	this.subject_19 = new lib.animation_mask2_38_mc();
	this.subject_19.setTransform(400,300);

	this.subject_20 = new lib.animation_mask2_40_mc();
	this.subject_20.setTransform(400,300);

	this.subject_21 = new lib.animation_mask2_42_mc();
	this.subject_21.setTransform(400,300);

	this.subject_22 = new lib.animation_mask2_43_mc();
	this.subject_22.setTransform(400,300);

	this.subject_23 = new lib.animation_mask2_45_mc();
	this.subject_23.setTransform(400,300);

	this.subject_24 = new lib.animation_mask2_47_mc();
	this.subject_24.setTransform(400,300);

	this.subject_25 = new lib.animation_mask2_49_mc();
	this.subject_25.setTransform(400,300);

	this.subject_26 = new lib.animation_mask2_51_mc();
	this.subject_26.setTransform(400,300);

	this.subject_27 = new lib.animation_mask2_53_mc();
	this.subject_27.setTransform(400,300);

	this.subject_28 = new lib.animation_mask2_55_mc();
	this.subject_28.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[{t:this.subject_3}]},1).to({state:[{t:this.subject_4}]},1).to({state:[{t:this.subject_5}]},1).to({state:[{t:this.subject_6}]},1).to({state:[{t:this.subject_7}]},1).to({state:[{t:this.subject_8}]},1).to({state:[{t:this.subject_9}]},1).to({state:[{t:this.subject_10}]},1).to({state:[{t:this.subject_11}]},1).to({state:[{t:this.subject_12}]},1).to({state:[{t:this.subject_13}]},1).to({state:[{t:this.subject_14}]},1).to({state:[{t:this.subject_15}]},1).to({state:[{t:this.subject_16}]},1).to({state:[{t:this.subject_17}]},1).to({state:[{t:this.subject_18}]},1).to({state:[{t:this.subject_19}]},1).to({state:[{t:this.subject_20}]},1).to({state:[{t:this.subject_21}]},1).to({state:[{t:this.subject_22}]},1).to({state:[{t:this.subject_23}]},1).to({state:[{t:this.subject_24}]},1).to({state:[{t:this.subject_25}]},1).to({state:[{t:this.subject_26}]},1).to({state:[{t:this.subject_27}]},1).to({state:[{t:this.subject_28}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(177.5,-329.4,568.6,904.4);
p.frameBounds = [rect, new cjs.Rectangle(70,-329.4,664.7,1119.4), new cjs.Rectangle(170,-329.4,564.7,1119.4), new cjs.Rectangle(24.8,-329.4,597.7,1116.3), new cjs.Rectangle(-593.8,-329.4,1238.8,1623.9), new cjs.Rectangle(10,-329.4,560,1054.4), new cjs.Rectangle(25.8,-329.4,633.7,878.9), new cjs.Rectangle(260,-329.4,427,850.4), new cjs.Rectangle(260,-329.4,286,892.4), new cjs.Rectangle(25.8,-329.4,576.3,873.9), new cjs.Rectangle(260,-329.4,320,700.8), new cjs.Rectangle(-780.8,-329.4,1440.9,1738.9), new cjs.Rectangle(-5,-329.4,594.5,1094.4), new cjs.Rectangle(-677.5,-329.4,1322.5,1623.9), new cjs.Rectangle(-139.2,-329.4,761.7,904.4), new cjs.Rectangle(27,-329.4,730.4,925.4), new cjs.Rectangle(-15,-329.4,772.4,904.8), new cjs.Rectangle(111.4,-329.4,688.7,904.8), new cjs.Rectangle(69,-329.4,552.9,911.4), new cjs.Rectangle(-139.2,-329.4,761.1,904.8), new cjs.Rectangle(-16.2,-329.4,747.4,904.4), new cjs.Rectangle(105,-139,626.2,739), new cjs.Rectangle(-33.4,-329.4,764.6,904.4), new cjs.Rectangle(86.4,-329.4,644.8,1024.7), new cjs.Rectangle(19.8,-329.4,711.4,904.4), new cjs.Rectangle(177.5,-329.4,587.6,929.4), new cjs.Rectangle(70,-329.4,661.2,1119.4), new cjs.Rectangle(34.6,-329.4,695.5,1119.4)];


(lib.quest_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(680,365,1,1,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1,p:{rotation:15,x:680,y:365,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:15,x:605.1,y:345.1,regX:0.1,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:410,y:460,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:-60,x:435.1,y:165.2,regX:-0.1,regY:0.1,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:15,x:595,y:520,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:155,y:300.2,regX:0.1,regY:0.1,skewX:-30,skewY:150}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:30,x:630,y:290,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:160,y:480,regX:0,regY:0,skewX:-75,skewY:105}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:160,y:335,regX:0,regY:0,skewX:15,skewY:-165}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:140,y:280,regX:0,regY:0,skewX:-30,skewY:150}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:60,x:635,y:445.2,regX:0.1,regY:0.1,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:-45,x:240,y:415,regX:0,regY:0,skewX:0,skewY:0}},{t:this.pointer_2}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]}).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:560}},{t:this.instance,p:{y:90}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).to({state:[{t:this.indicator_mc,p:{y:-160}},{t:this.instance,p:{y:-260}}]},1).wait(1));

	// objects
	this.object_1 = new lib.object_1_1_mc();
	this.object_1.setTransform(687,342);

	this.frame_2_mc = new lib.arrow_1_mc();
	this.frame_2_mc.setTransform(520,340);

	this.frame_3_mc = new lib.arrow_2_mc();
	this.frame_3_mc.setTransform(280,340,1,1,0,0,180);

	this.frame_4_mc = new lib.arrow_3_mc();
	this.frame_4_mc.setTransform(375,465,1,1,-135);

	this.frame_5_mc = new lib.arrow_100_mc();
	this.frame_5_mc.setTransform(400,400);

	this.frame_6_mc = new lib.arrow_4_mc();
	this.frame_6_mc.setTransform(458,275);

	this.frame_7_mc = new lib.arrow_5_mc();
	this.frame_7_mc.setTransform(340,290,1,1,-90);

	this.object_8 = new lib.object_8_1_mc();
	this.object_8.setTransform(627,308);

	this.object_9 = new lib.object_9_1_mc();
	this.object_9.setTransform(445,463);

	this.frame_10_mc = new lib.arrow_6_mc();
	this.frame_10_mc.setTransform(335,300,1,1,-90);

	this.object_11 = new lib.object_11_1_mc();
	this.object_11.setTransform(435,156);

	this.frame_12_mc = new lib.arrow_101_mc();
	this.frame_12_mc.setTransform(420,520);

	this.frame_13_mc = new lib.arrow_7_mc();
	this.frame_13_mc.setTransform(440,315);

	this.frame_14_mc = new lib.arrow_102_mc();
	this.frame_14_mc.setTransform(400,400);

	this.frame_15_mc = new lib.arrow_8_mc();
	this.frame_15_mc.setTransform(180,320,1,1,-90);

	this.object_16 = new lib.object_16_1_mc();
	this.object_16.setTransform(615,475);

	this.object_17 = new lib.object_17_1_mc();
	this.object_17.setTransform(95,310);

	this.object_18 = new lib.object_18_1_mc();
	this.object_18.setTransform(690,300);

	this.object_19 = new lib.object_19_1_mc();
	this.object_19.setTransform(155,492);

	this.frame_20_mc = new lib.arrow_9_mc();
	this.frame_20_mc.setTransform(170,320,1,1,-90);

	this.object_21 = new lib.object_21_1_mc();
	this.object_21.setTransform(105,325);

	this.object_22 = new lib.object_22_1_mc();
	this.object_22.setTransform(400,300);

	this.object_23 = new lib.object_23_1_mc();
	this.object_23.setTransform(100,340);

	this.frame_24_mc = new lib.arrow_10_mc();
	this.frame_24_mc.setTransform(420,410,1,1,45);

	this.frame_25_mc = new lib.arrow_11_mc();
	this.frame_25_mc.setTransform(420,220,1,1,0,135,-45);

	this.object_26 = new lib.object_26_1_mc();
	this.object_26.setTransform(655,475);

	this.frame_27_mc = new lib.arrow_12_mc();
	this.frame_27_mc.setTransform(520,345);

	this.frame_28_mc = new lib.arrow_13_mc();
	this.frame_28_mc.setTransform(280,345,1,1,0,0,180);

	this.object_29 = new lib.object_29_1_mc();
	this.object_29.setTransform(280,430);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).to({state:[{t:this.frame_4_mc}]},1).to({state:[{t:this.frame_5_mc}]},1).to({state:[{t:this.frame_6_mc}]},1).to({state:[{t:this.frame_7_mc}]},1).to({state:[{t:this.object_8}]},1).to({state:[{t:this.object_9}]},1).to({state:[{t:this.frame_10_mc}]},1).to({state:[{t:this.object_11}]},1).to({state:[{t:this.frame_12_mc}]},1).to({state:[{t:this.frame_13_mc}]},1).to({state:[{t:this.frame_14_mc}]},1).to({state:[{t:this.frame_15_mc}]},1).to({state:[{t:this.object_16}]},1).to({state:[{t:this.object_17}]},1).to({state:[{t:this.object_18}]},1).to({state:[{t:this.object_19}]},1).to({state:[{t:this.frame_20_mc}]},1).to({state:[{t:this.object_21}]},1).to({state:[{t:this.object_22}]},1).to({state:[{t:this.object_23}]},1).to({state:[{t:this.frame_24_mc}]},1).to({state:[{t:this.frame_25_mc}]},1).to({state:[{t:this.object_26}]},1).to({state:[{t:this.frame_27_mc}]},1).to({state:[{t:this.frame_28_mc}]},1).to({state:[{t:this.object_29}]},1).wait(1));

	// subjects
	this.subject_1 = new lib.animation_mask1_2_mc();
	this.subject_1.setTransform(400,300);

	this.subject_2 = new lib.animation_mask1_4_mc();
	this.subject_2.setTransform(400,300);

	this.subject_3 = new lib.animation_mask1_6_mc();
	this.subject_3.setTransform(400,300);

	this.subject_4 = new lib.animation_mask1_8_mc();
	this.subject_4.setTransform(400,300);

	this.subject_5 = new lib.animation_mask1_10_mc();
	this.subject_5.setTransform(400,300);

	this.subject_6 = new lib.animation_mask1_12_mc();
	this.subject_6.setTransform(400,300);

	this.subject_7 = new lib.animation_mask1_14_mc();
	this.subject_7.setTransform(400,300);

	this.subject_8 = new lib.animation_mask1_16_mc();
	this.subject_8.setTransform(400,300);

	this.subject_9 = new lib.animation_mask1_18_mc();
	this.subject_9.setTransform(400,300);

	this.subject_10 = new lib.animation_mask1_20_mc();
	this.subject_10.setTransform(400,300);

	this.subject_11 = new lib.animation_mask1_22_mc();
	this.subject_11.setTransform(400,300);

	this.subject_12 = new lib.animation_mask1_24_mc();
	this.subject_12.setTransform(400,300);

	this.subject_13 = new lib.animation_mask1_26_mc();
	this.subject_13.setTransform(400,300);

	this.subject_14 = new lib.animation_mask1_28_mc();
	this.subject_14.setTransform(400,300);

	this.subject_15 = new lib.animation_mask1_30_mc();
	this.subject_15.setTransform(400,300);

	this.subject_16 = new lib.animation_mask1_32_mc();
	this.subject_16.setTransform(400,300);

	this.subject_17 = new lib.animation_mask1_34_mc();
	this.subject_17.setTransform(400,300);

	this.subject_18 = new lib.animation_mask1_36_mc();
	this.subject_18.setTransform(400,300);

	this.subject_19 = new lib.animation_mask1_38_mc();
	this.subject_19.setTransform(400,300);

	this.subject_20 = new lib.animation_mask1_40_mc();
	this.subject_20.setTransform(400,300);

	this.subject_21 = new lib.animation_mask1_42_mc();
	this.subject_21.setTransform(400,300);

	this.subject_22 = new lib.animation_mask1_43_mc();
	this.subject_22.setTransform(400,300);

	this.subject_23 = new lib.animation_mask1_45_mc();
	this.subject_23.setTransform(400,300);

	this.subject_24 = new lib.animation_mask1_47_mc();
	this.subject_24.setTransform(400,300);

	this.subject_25 = new lib.animation_mask1_49_mc();
	this.subject_25.setTransform(400,300);

	this.subject_26 = new lib.animation_mask1_51_mc();
	this.subject_26.setTransform(400,300);

	this.subject_27 = new lib.animation_mask1_53_mc();
	this.subject_27.setTransform(400,300);

	this.subject_28 = new lib.animation_mask1_55_mc();
	this.subject_28.setTransform(400,300);

	this.subject_29 = new lib.animation_mask1_57_mc();
	this.subject_29.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[{t:this.subject_3}]},1).to({state:[{t:this.subject_4}]},1).to({state:[{t:this.subject_5}]},1).to({state:[{t:this.subject_6}]},1).to({state:[{t:this.subject_7}]},1).to({state:[{t:this.subject_8}]},1).to({state:[{t:this.subject_9}]},1).to({state:[{t:this.subject_10}]},1).to({state:[{t:this.subject_11}]},1).to({state:[{t:this.subject_12}]},1).to({state:[{t:this.subject_13}]},1).to({state:[{t:this.subject_14}]},1).to({state:[{t:this.subject_15}]},1).to({state:[{t:this.subject_16}]},1).to({state:[{t:this.subject_17}]},1).to({state:[{t:this.subject_18}]},1).to({state:[{t:this.subject_19}]},1).to({state:[{t:this.subject_20}]},1).to({state:[{t:this.subject_21}]},1).to({state:[{t:this.subject_22}]},1).to({state:[{t:this.subject_23}]},1).to({state:[{t:this.subject_24}]},1).to({state:[{t:this.subject_25}]},1).to({state:[{t:this.subject_26}]},1).to({state:[{t:this.subject_27}]},1).to({state:[{t:this.subject_28}]},1).to({state:[{t:this.subject_29}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(177.5,-329.4,569.6,904.4);
p.frameBounds = [rect, new cjs.Rectangle(70,-329.4,664.7,1119.4), new cjs.Rectangle(170,-329.4,564.7,1119.4), new cjs.Rectangle(24.8,-329.4,597.7,1116.3), new cjs.Rectangle(-427.8,-329.4,1072.8,1623.9), new cjs.Rectangle(8,-329.4,560,1054.4), new cjs.Rectangle(25.8,-329.4,633.7,873.9), new cjs.Rectangle(260,-329.4,437,850.4), new cjs.Rectangle(260,-329.4,286,872.4), new cjs.Rectangle(20.8,-329.4,576.3,883.9), new cjs.Rectangle(260,-329.4,320,700.8), new cjs.Rectangle(-591.8,-329.4,1256.9,1743.9), new cjs.Rectangle(-10,-329.4,599.5,1094.4), new cjs.Rectangle(-664.5,-329.4,1309.5,1623.9), new cjs.Rectangle(-134.2,-329.4,756.7,904.4), new cjs.Rectangle(27,-329.4,730.4,924.4), new cjs.Rectangle(-15,-329.4,772.4,904.4), new cjs.Rectangle(108,-329.4,682,904.4), new cjs.Rectangle(75,-329.4,547.5,904.4), new cjs.Rectangle(-144.2,-329.4,766.7,904.4), new cjs.Rectangle(-19.4,-329.4,750.6,904.7), new cjs.Rectangle(110,-139,621.2,739), new cjs.Rectangle(-0.6,-329.4,731.8,904.7), new cjs.Rectangle(86.4,-329.4,644.8,994.7), new cjs.Rectangle(19.3,-329.4,711.9,904.7), new cjs.Rectangle(177.9,-329.4,577.2,904.7), new cjs.Rectangle(70,-329.4,661.2,1124.4), new cjs.Rectangle(34.6,-329.4,695.5,1124.4), new cjs.Rectangle(34.6,-329.4,588.3,904.7)];


(lib.quest_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":99,"end":229});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(500,540,0.879,0.879);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:750},0).wait(73).to({y:500},11).to({y:540},4).wait(30).to({y:750},10).wait(101));

	// decor
	this.instance = new lib.barbie_star_mc();
	this.instance.setTransform(110,300,0.75,0.75);

	this.instance_1 = new lib.barbie_star_mc();
	this.instance_1.setTransform(595.1,480.1,0.5,0.5,0,0,0,0.1,0.1);

	this.instance_2 = new lib.barbie_star_mc();
	this.instance_2.setTransform(625.1,108.1,0.5,0.5,0,0,0,0.1,0.1);

	this.instance_3 = new lib.barbie_star_mc();
	this.instance_3.setTransform(165.1,180.1,0.5,0.5,0,0,0,0.1,0.1);

	this.instance_4 = new lib.barbie_star_mc();
	this.instance_4.setTransform(649,326,0.75,0.75);

	this.instance_5 = new lib.barbie_star_mc();
	this.instance_5.setTransform(225,480,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},104).wait(126));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(140,315);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:-500},0).wait(43).to({skewY:180,x:1200,y:320},0).to({x:120},25).wait(1).to({skewY:0},0).to({x:140,y:315},4).wait(65).to({x:380},20).wait(71));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_4_mc();
	this.dressupPanel_mc.setTransform(500,310);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:1320},0).wait(23).to({x:450},16).to({x:500},4).wait(75).to({x:1350},20).wait(91));

	// shadow
	this.instance_6 = new lib.shadow_dressup_mc();
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(139).to({_off:false},0).to({alpha:1},20).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(16.5,6,793.4,854.1);
p.frameBounds = [rect, rect=new cjs.Rectangle(-623.5,6,2253.4,854.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-623.5,6,2199.1,854.1), new cjs.Rectangle(-623.5,6,2144.7,854.1), new cjs.Rectangle(-623.5,6,2090.3,854.1), new cjs.Rectangle(-623.5,6,2035.9,854.1), new cjs.Rectangle(-623.5,6,1981.5,854.1), new cjs.Rectangle(-623.5,6,1927.2,854.1), new cjs.Rectangle(-623.5,6,1872.8,854.1), new cjs.Rectangle(-623.5,6,1818.4,854.1), new cjs.Rectangle(-623.5,6,1764,854.1), new cjs.Rectangle(-623.5,6,1709.7,854.1), new cjs.Rectangle(-623.5,6,1655.3,854.1), new cjs.Rectangle(-623.5,6,1600.9,854.1), new cjs.Rectangle(-623.5,6,1546.6,854.1), new cjs.Rectangle(-623.5,6,1492.2,854.1), new cjs.Rectangle(-623.5,6,1437.8,854.1), new cjs.Rectangle(-623.5,6,1383.4,854.1), new cjs.Rectangle(-623.5,6,1395.9,854.1), new cjs.Rectangle(-623.5,6,1408.4,854.1), new cjs.Rectangle(-623.5,6,1420.9,854.1), new cjs.Rectangle(190.1,11,1133.5,849.1), new cjs.Rectangle(190.1,11,1090.3,849.1), new cjs.Rectangle(190.1,11,1047.1,849.1), new cjs.Rectangle(190.1,11,1003.9,849.1), new cjs.Rectangle(190.1,11,960.7,849.1), new cjs.Rectangle(190.1,11,917.5,849.1), new cjs.Rectangle(190.1,11,874.3,849.1), new cjs.Rectangle(190.1,11,831.1,849.1), new cjs.Rectangle(190.1,11,787.8,849.1), new cjs.Rectangle(190.1,11,744.7,849.1), new cjs.Rectangle(190.1,11,701.5,849.1), new cjs.Rectangle(190.1,11,658.3,849.1), rect=new cjs.Rectangle(190.1,11,619.8,849.1), rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(160.8,11,649.1,849.1), new cjs.Rectangle(117.6,11,692.3,849.1), new cjs.Rectangle(74.4,11,735.5,849.1), new cjs.Rectangle(31.2,11,778.7,849.1), new cjs.Rectangle(-12,11,821.9,849.1), new cjs.Rectangle(-3.5,11,813.4,849.1), new cjs.Rectangle(1.5,9.7,808.4,850.3), new cjs.Rectangle(6.5,8.5,803.4,851.6), new cjs.Rectangle(11.5,7.2,798.4,852.8), rect=new cjs.Rectangle(16.5,6,793.4,854.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(16.5,6,835.9,854.1), new cjs.Rectangle(16.5,6,878.4,854.1), new cjs.Rectangle(16.5,6,920.9,854.1), new cjs.Rectangle(16.5,6,963.4,854.1), new cjs.Rectangle(16.5,6,1005.9,854.1), new cjs.Rectangle(16.5,6,1048.4,854.1), new cjs.Rectangle(16.5,6,1090.9,854.1), new cjs.Rectangle(16.5,6,1133.4,854.1), new cjs.Rectangle(16.5,6,1175.9,854.1), new cjs.Rectangle(16.5,6,1218.4,854.1), new cjs.Rectangle(16.5,6,1260.9,854.1), new cjs.Rectangle(16.5,6,1303.4,854.1), new cjs.Rectangle(16.5,6,1345.9,854.1), new cjs.Rectangle(16.5,6,1388.4,854.1), new cjs.Rectangle(16.5,6,1430.9,854.1), new cjs.Rectangle(16.5,6,1473.4,854.1), new cjs.Rectangle(16.5,6,1515.9,854.1), new cjs.Rectangle(16.5,6,1558.4,854.1), new cjs.Rectangle(16.5,6,1600.9,854.1), rect=new cjs.Rectangle(-210,-10,1869.9,870), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":219});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(700,530);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:750},0).wait(43).to({y:530},10).to({scaleX:1.17,scaleY:1.17},5).to({scaleX:1,scaleY:1},5).wait(25).to({y:750},10).wait(121));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_3_mc();
	this.dressupPanel_mc.setTransform(160,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-350},0).wait(23).to({x:200},16).to({x:160},4).wait(45).to({x:-350},20).wait(111));

	// decor
	this.instance = new lib.wind_2_mc();
	this.instance.setTransform(-476,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).wait(16).to({x:74},0).wait(4).to({x:34},0).to({_off:true},1).wait(44).to({_off:false,skewY:180,x:286},0).to({x:-226},20).to({_off:true},1).wait(110));

	// hero
	this.hero_2 = new lib.hero_2_makeup_mc();
	this.hero_2.setTransform(480,225);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1).to({x:1400},0).wait(23).to({x:430},16).to({x:480},4).wait(65).to({x:380,y:235},20).wait(70).to({x:1400},20).wait(1));

	// decor
	this.instance_1 = new lib.wind_2_mc();
	this.instance_1.setTransform(1550,250,1,1,0,0,180);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).wait(16).to({x:580},0).wait(4).to({x:630},0).to({_off:true},1).wait(154).to({_off:false,skewY:0,x:250},0).to({x:1247.5},19).to({_off:true},1).wait(1));

	// shadow
	this.instance_2 = new lib.shadow_dressup_mc();
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(109).to({_off:false},0).to({alpha:1},20).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(20,-165.5,865,1015.6);
p.frameBounds = [rect, rect=new cjs.Rectangle(-490,-165.5,2295,1015.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-1376,-165.5,3826,1015.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-826,-165.5,2306,1015.6), rect, rect, rect, new cjs.Rectangle(-866,-165.5,2396,1015.6), rect=new cjs.Rectangle(20,-165.5,865,1015.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(20,-165.5,1166,1015.6), new cjs.Rectangle(-5.5,-165.5,1165.9,1015.6), new cjs.Rectangle(-31,-165.5,1165.8,1015.6), new cjs.Rectangle(-56.5,-165.5,1165.7,1015.6), new cjs.Rectangle(-82,-165.5,1165.6,1015.6), new cjs.Rectangle(-107.5,-165.5,1165.5,1015.6), new cjs.Rectangle(-133,-165.5,1165.4,1015.6), new cjs.Rectangle(-158.5,-165.5,1165.3,1015.6), new cjs.Rectangle(-184,-165.5,1165.2,1015.6), new cjs.Rectangle(-209.5,-165.5,1165.1,1015.6), new cjs.Rectangle(-235,-165.5,1165,1015.6), new cjs.Rectangle(-260.5,-165.5,1164.9,1015.6), new cjs.Rectangle(-286,-165.5,1171,1015.6), new cjs.Rectangle(-311.5,-165.5,1196.5,1015.6), new cjs.Rectangle(-337,-165.5,1222,1015.6), new cjs.Rectangle(-362.5,-165.5,1247.5,1015.6), new cjs.Rectangle(-388,-165.5,1273,1015.6), new cjs.Rectangle(-413.5,-165.5,1298.5,1015.6), new cjs.Rectangle(-439,-165.5,1324,1015.6), new cjs.Rectangle(-464.5,-165.5,1349.5,1015.6), new cjs.Rectangle(-490,-165.5,1500,1015.6), new cjs.Rectangle(-490,-165,1500,1015.1), new cjs.Rectangle(-490,-164.5,1500,1014.6), new cjs.Rectangle(-490,-164,1500,1014.1), new cjs.Rectangle(-490,-163.5,1500,1013.6), new cjs.Rectangle(-490,-163,1500,1013.1), new cjs.Rectangle(-490,-162.5,1500,1012.6), new cjs.Rectangle(-490,-162,1500,1012.1), new cjs.Rectangle(-490,-161.5,1500,1011.6), new cjs.Rectangle(-490,-161,1500,1011.1), new cjs.Rectangle(-490,-160.5,1500,1010.6), new cjs.Rectangle(-490,-160,1500,1010.1), new cjs.Rectangle(-490,-159.5,1500,1009.6), new cjs.Rectangle(-490,-159,1500,1009.1), new cjs.Rectangle(-490,-158.5,1500,1008.6), new cjs.Rectangle(-490,-158,1500,1008.1), new cjs.Rectangle(-490,-157.5,1500,1007.6), new cjs.Rectangle(-490,-157,1500,1007.1), new cjs.Rectangle(-490,-156.5,1500,1006.6), new cjs.Rectangle(-490,-156,1500,1006.1), rect=new cjs.Rectangle(-490,-155.5,1500,1005.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-650,-155.5,1660,1005.6), new cjs.Rectangle(-597.5,-155.5,1607.5,1005.6), new cjs.Rectangle(-545,-155.5,1555,1005.6), new cjs.Rectangle(-492.5,-155.5,1502.5,1005.6), new cjs.Rectangle(-490,-155.5,1500,1005.6), new cjs.Rectangle(-490,-155.5,1530,1005.6), new cjs.Rectangle(-490,-155.5,1581,1005.6), new cjs.Rectangle(-490,-155.5,1632,1005.6), new cjs.Rectangle(-490,-155.5,1683,1005.6), new cjs.Rectangle(-490,-155.5,1734,1005.6), new cjs.Rectangle(-490,-155.5,1785,1005.6), new cjs.Rectangle(-490,-155.5,1836,1005.6), new cjs.Rectangle(-490,-155.5,1887,1005.6), new cjs.Rectangle(-490,-155.5,1938,1005.6), new cjs.Rectangle(-490,-155.5,1989,1005.6), new cjs.Rectangle(-490,-155.5,2040,1005.6), new cjs.Rectangle(-490,-155.5,2091,1005.6), new cjs.Rectangle(-490,-155.5,2142,1005.6), new cjs.Rectangle(-490,-155.5,2193,1005.6), new cjs.Rectangle(-490,-155.5,2244,1005.6), new cjs.Rectangle(-490,-155.5,2295,1005.6)];


(lib.quest_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":89,"end":219});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(300,540,0.879,0.879);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:750},0).wait(63).to({y:500},11).to({y:540},4).wait(30).to({y:750},10).wait(101));

	// decor
	this.instance = new lib.barbie_star_mc();
	this.instance.setTransform(110,300,0.75,0.75);

	this.instance_1 = new lib.barbie_star_mc();
	this.instance_1.setTransform(595.1,480.1,0.5,0.5,0,0,0,0.1,0.1);

	this.instance_2 = new lib.barbie_star_mc();
	this.instance_2.setTransform(625.1,108.1,0.5,0.5,0,0,0,0.1,0.1);

	this.instance_3 = new lib.barbie_star_mc();
	this.instance_3.setTransform(165.1,180.1,0.5,0.5,0,0,0,0.1,0.1);

	this.instance_4 = new lib.barbie_star_mc();
	this.instance_4.setTransform(649,326,0.75,0.75);

	this.instance_5 = new lib.barbie_star_mc();
	this.instance_5.setTransform(225,480,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},94).wait(126));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(660,310);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:1200},0).wait(23).to({x:610},16).to({x:660},4).wait(85).to({x:420},20).wait(71));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_mc();
	this.dressupPanel_mc.setTransform(300,310);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:-520},0).wait(43).to({x:350},16).to({x:300},4).wait(45).to({x:-520},20).wait(91));

	// shadow
	this.instance_6 = new lib.shadow_dressup_mc();
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(129).to({_off:false},0).to({alpha:1},20).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9.9,26.9,791.5,833.1);
p.frameBounds = [rect, rect=new cjs.Rectangle(-829.9,26.9,2151.4,833.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-829.9,26.9,2114.6,833.1), new cjs.Rectangle(-829.9,26.9,2077.7,833.1), new cjs.Rectangle(-829.9,26.9,2040.8,833.1), new cjs.Rectangle(-829.9,26.9,2003.9,833.1), new cjs.Rectangle(-829.9,26.9,1967,833.1), new cjs.Rectangle(-829.9,26.9,1930.2,833.1), new cjs.Rectangle(-829.9,26.9,1893.3,833.1), new cjs.Rectangle(-829.9,26.9,1856.4,833.1), new cjs.Rectangle(-829.9,26.9,1819.5,833.1), new cjs.Rectangle(-829.9,26.9,1782.7,833.1), new cjs.Rectangle(-829.9,26.9,1745.8,833.1), new cjs.Rectangle(-829.9,26.9,1708.9,833.1), new cjs.Rectangle(-829.9,26.9,1672.1,833.1), new cjs.Rectangle(-829.9,26.9,1635.2,833.1), new cjs.Rectangle(-829.9,26.9,1598.3,833.1), new cjs.Rectangle(-829.9,26.9,1561.4,833.1), new cjs.Rectangle(-829.9,26.9,1573.9,833.1), new cjs.Rectangle(-829.9,26.9,1586.4,833.1), new cjs.Rectangle(-829.9,26.9,1598.9,833.1), new cjs.Rectangle(-829.9,26.9,1611.4,833.1), new cjs.Rectangle(-775.5,26.9,1557,833.1), new cjs.Rectangle(-721.1,26.9,1502.7,833.1), new cjs.Rectangle(-666.8,26.9,1448.3,833.1), new cjs.Rectangle(-612.4,26.9,1393.9,833.1), new cjs.Rectangle(-558,26.9,1339.5,833.1), new cjs.Rectangle(-503.6,26.9,1285.2,833.1), new cjs.Rectangle(-449.3,26.9,1230.8,833.1), new cjs.Rectangle(-394.9,26.9,1176.4,833.1), new cjs.Rectangle(-340.5,26.9,1122,833.1), new cjs.Rectangle(-286.1,26.9,1067.7,833.1), new cjs.Rectangle(-231.7,26.9,1013.3,833.1), new cjs.Rectangle(-177.4,26.9,958.9,833.1), new cjs.Rectangle(-123,26.9,904.6,833.1), new cjs.Rectangle(-68.7,26.9,850.2,833.1), new cjs.Rectangle(-14.4,26.9,795.9,833.1), new cjs.Rectangle(40.1,26.9,741.5,833.1), new cjs.Rectangle(27.5,26.9,754,833.1), new cjs.Rectangle(15,26.9,766.5,833.1), new cjs.Rectangle(2.5,26.9,779,833.1), rect=new cjs.Rectangle(-9.9,26.9,791.5,833.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-51,26.9,832.5,833.1), new cjs.Rectangle(-91.9,26.9,873.5,833.1), new cjs.Rectangle(-132.9,26.9,914.4,833.1), new cjs.Rectangle(-173.9,26.9,955.4,833.1), new cjs.Rectangle(-214.9,26.9,996.4,833.1), new cjs.Rectangle(-255.9,26.9,1037.4,833.1), new cjs.Rectangle(-296.9,26.9,1078.4,833.1), new cjs.Rectangle(-337.9,26.9,1119.4,833.1), new cjs.Rectangle(-378.9,26.9,1160.4,833.1), new cjs.Rectangle(-419.9,26.9,1201.4,833.1), new cjs.Rectangle(-460.9,26.9,1242.4,833.1), new cjs.Rectangle(-501.9,26.9,1283.4,833.1), new cjs.Rectangle(-542.9,26.9,1324.4,833.1), new cjs.Rectangle(-583.9,26.9,1365.4,833.1), new cjs.Rectangle(-624.9,26.9,1406.4,833.1), new cjs.Rectangle(-665.9,26.9,1447.4,833.1), new cjs.Rectangle(-706.9,26.9,1488.4,833.1), new cjs.Rectangle(-747.9,26.9,1529.4,833.1), new cjs.Rectangle(-788.9,26.9,1570.4,833.1), rect=new cjs.Rectangle(-829.9,-10,1839.9,870), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":69,"end":219});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(100,530);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1).to({y:750},0).wait(43).to({y:530},10).to({scaleX:1.17,scaleY:1.17},5).to({scaleX:1,scaleY:1},5).wait(25).to({y:750},10).wait(121));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_mc();
	this.dressupPanel_mc.setTransform(640,300);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1).to({x:1200},0).wait(23).to({x:600},16).to({x:640},4).wait(45).to({x:1200},20).wait(111));

	// decor
	this.instance = new lib.wind_2_mc();
	this.instance.setTransform(1325,300,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({x:726},16).to({x:765},4).to({_off:true},1).wait(44).to({_off:false,skewY:0,x:1000},0).wait(10).to({alpha:0.012},9).to({_off:true},1).wait(111));

	// hero
	this.hero_1 = new lib.hero_1_makeup_mc();
	this.hero_1.setTransform(260,230);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1).to({x:-600},0).wait(23).to({x:300},16).to({x:260},4).wait(65).to({x:380},20).wait(70).to({x:1400},20).wait(1));

	// decor
	this.instance_1 = new lib.wind_2_mc();
	this.instance_1.setTransform(-600,300);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({x:300},16).to({x:260},4).to({_off:true},1).wait(154).to({_off:false,x:380},0).to({x:1349},19).to({_off:true},1).wait(1));

	// shadow
	this.instance_2 = new lib.shadow_dressup_mc();
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(109).to({_off:false},0).to({alpha:1},20).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.5,-126.5,859.5,976.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-939.5,-126.5,2279.5,976.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-1500,-126.5,3725,976.5), new cjs.Rectangle(-1443.7,-126.5,3631.3,976.5), new cjs.Rectangle(-1387.5,-126.5,3537.7,976.5), new cjs.Rectangle(-1331.2,-126.5,3444,976.5), new cjs.Rectangle(-1275,-126.5,3350.3,976.5), new cjs.Rectangle(-1218.7,-126.5,3256.6,976.5), new cjs.Rectangle(-1162.5,-126.5,3162.9,976.5), new cjs.Rectangle(-1106.2,-126.5,3069.2,976.5), new cjs.Rectangle(-1050,-126.5,2975.5,976.5), new cjs.Rectangle(-993.7,-126.5,2881.8,976.5), new cjs.Rectangle(-937.5,-126.5,2788.2,976.5), new cjs.Rectangle(-881.2,-126.5,2694.5,976.5), new cjs.Rectangle(-825,-126.5,2600.8,976.5), new cjs.Rectangle(-768.7,-126.5,2507.1,976.5), new cjs.Rectangle(-712.5,-126.5,2413.4,976.5), new cjs.Rectangle(-656.2,-126.5,2319.7,976.5), new cjs.Rectangle(-600,-126.5,2226,976.5), new cjs.Rectangle(-610,-126.5,2245.8,976.5), new cjs.Rectangle(-620,-126.5,2265.5,976.5), new cjs.Rectangle(-630,-126.5,2285.3,976.5), new cjs.Rectangle(-640,-126.5,2305,976.5), rect=new cjs.Rectangle(-79.5,-126.5,859.5,976.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-79.5,-126.5,1079.5,976.5), rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-79.5,-126.5,1083.5,976.5), new cjs.Rectangle(-79.5,-126.5,1111.5,976.5), new cjs.Rectangle(-79.5,-126.5,1139.5,976.5), new cjs.Rectangle(-79.5,-126.5,1167.5,976.5), new cjs.Rectangle(-79.5,-126.5,1195.5,976.5), new cjs.Rectangle(-79.5,-126.5,1223.5,976.5), new cjs.Rectangle(-79.5,-126.5,1251.5,976.5), new cjs.Rectangle(-79.5,-126.5,1279.5,976.5), new cjs.Rectangle(-79.5,-126.5,1307.5,976.5), new cjs.Rectangle(-79.5,-126.5,1335.5,976.5), new cjs.Rectangle(-79.5,-126.5,1363.5,976.5), new cjs.Rectangle(-79.5,-126.5,1391.5,976.5), rect=new cjs.Rectangle(-210,-126.5,1550,976.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-520,-126.5,1860,976.5), new cjs.Rectangle(-469,-126.5,1809,976.5), new cjs.Rectangle(-418,-126.5,1758,976.5), new cjs.Rectangle(-367,-126.5,1707,976.5), new cjs.Rectangle(-316,-126.5,1656,976.5), new cjs.Rectangle(-265,-126.5,1605,976.5), new cjs.Rectangle(-214,-126.5,1554,976.5), rect=new cjs.Rectangle(-210,-126.5,1550,976.5), rect, rect, rect, rect, new cjs.Rectangle(-210,-126.5,1570.5,976.5), new cjs.Rectangle(-210,-126.5,1621.5,976.5), new cjs.Rectangle(-210,-126.5,1672.5,976.5), new cjs.Rectangle(-210,-126.5,1723.5,976.5), new cjs.Rectangle(-210,-126.5,1774.5,976.5), new cjs.Rectangle(-210,-126.5,1825.5,976.5), new cjs.Rectangle(-210,-126.5,1876.5,976.5), new cjs.Rectangle(-210,-126.5,1927.5,976.5), new cjs.Rectangle(-210,-126.5,1978.5,976.5)];


(lib.LocationScreen_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_5_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1310.4);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_5_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1310.4);
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
	this.instance.setTransform(350,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// container
	this.container_mc = new lib.bubble_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-130,800,730);
p.frameBounds = [rect];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(300.5,700.5,0.75,0.75,0,0,0,0.7,0.7);

	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(660,530);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,920);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(120.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(500,700,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(500,550,0.727,0.727);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.play_btn},{t:this.social_network_mc}]}).wait(1));

	// title
	this.instance = new lib.title_mc();
	this.instance.setTransform(230.5,520.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// heroes
	this.instance_2 = new lib.heroes_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(400,200,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_3 = new lib.background_4_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1589.7,1281.9);
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
	this.fullScreen_mc.setTransform(690.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

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
	this.instance.setTransform(-200,400);
	this.instance.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(400,200,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_1 = new lib.background_1_img();
	this.instance_1.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9);
p.frameBounds = [rect];


(lib.quest_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(16.5,-329.4,793.4,1189.4);
p.frameBounds = [rect];


(lib.quest_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(20,-329.4,865,1179.4);
p.frameBounds = [rect];


(lib.quest_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9.9,-329.4,791.5,1189.4);
p.frameBounds = [rect];


(lib.quest_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.5,-329.4,859.5,1179.4);
p.frameBounds = [rect];


(lib.LocationScreen_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1310.4);
p.frameBounds = [rect];


(lib.LocationScreen_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_5_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1310.4);
p.frameBounds = [rect];


(lib.LocationScreen_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(110.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1310.4);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_5_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1310.4);
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
	this.instance_6.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_7 = new lib.LocationScreen_4();

	this.instance_8 = new lib.LocationScreen_5();

	this.instance_9 = new lib.LocationScreen_6();

	this.instance_10 = new lib.RedirectScreen();

	this.instance_11 = new lib.ResultScreen();

	this.instance_12 = new lib.InstructionScreen();

	this.instance_13 = new lib.Glitter_2();
	this.instance_13.setTransform(500,50);

	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(720,80);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.instance_14 = new lib.FlashAnimation();
	this.instance_14.setTransform(150,280);

	this.instance_15 = new lib.TrackMove_2();
	this.instance_15.setTransform(350,50);

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(400,50);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_17},{t:this.instance_16},{t:this.gravity_explosion_comp},{t:this.instance_15},{t:this.instance_14},{t:this.next_btn},{t:this.instance_13}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[]},1).to({state:[{t:this.instance_20}]},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, new cjs.Rectangle(-262.6,-280.8,1589.7,1281.9), new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9), rect=new cjs.Rectangle(-262.6,-329.4,1262.7,1310.4), rect, rect, rect, rect, rect, new cjs.Rectangle(-200,0,1200,760), new cjs.Rectangle(-262.6,-319.9,1262.7,1780), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(0,-23.3,822,453.3), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-1200,0,3200,600), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-10,1220,620)];


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