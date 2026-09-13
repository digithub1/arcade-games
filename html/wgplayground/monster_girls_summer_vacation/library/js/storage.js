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
		{src:"library/images/storage_atlas_12.png", id:"storage_atlas_12"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,0,700,560],[0,764,481,446],[702,0,431,463],[0,562,1200,200],[483,764,428,500]]},
		{name:"storage_atlas_5", frames: [[422,564,420,420],[0,582,420,420],[422,986,500,300],[984,0,287,483],[844,564,386,404],[342,282,640,280],[342,0,640,280],[0,0,340,580]]},
		{name:"storage_atlas_6", frames: [[0,0,412,311],[362,684,340,340],[704,684,340,340],[362,342,340,340],[704,342,340,340],[0,313,360,340],[0,655,360,340],[414,0,360,340],[776,0,360,340]]},
		{name:"storage_atlas_7", frames: [[342,0,340,340],[0,684,340,340],[0,0,340,340],[0,342,340,340],[684,342,340,340],[342,684,340,340],[684,684,340,340],[684,0,340,340],[342,342,340,340]]},
		{name:"storage_atlas_8", frames: [[694,681,230,436],[945,0,290,330],[342,743,350,296],[342,0,296,380],[971,332,282,331],[647,361,322,318],[342,382,303,359],[926,681,210,447],[640,0,303,359],[0,684,340,340],[0,0,340,340],[0,342,340,340]]},
		{name:"storage_atlas_9", frames: [[0,957,220,200],[997,443,220,200],[492,828,220,200],[222,1035,220,200],[997,645,220,200],[553,424,220,200],[936,1049,220,200],[775,645,220,200],[714,1049,220,200],[775,443,220,200],[553,626,220,200],[714,847,220,200],[936,847,220,200],[492,1030,220,200],[210,0,317,272],[152,516,168,439],[322,516,229,246],[0,0,208,426],[914,242,240,199],[322,764,168,269],[532,242,380,180],[0,428,150,500],[529,0,320,240],[851,0,320,240],[210,274,320,240]]},
		{name:"storage_atlas_10", frames: [[1012,366,240,120],[1012,122,280,120],[1024,893,260,110],[0,404,220,200],[0,606,220,200],[222,404,220,200],[222,202,220,200],[0,202,220,200],[0,1010,220,200],[222,0,220,200],[0,0,220,200],[222,606,220,200],[0,808,220,200],[222,808,193,227],[444,291,127,247],[444,540,144,236],[1169,1005,122,217],[444,0,139,289],[585,0,143,271],[592,998,120,265],[874,610,121,268],[904,880,118,260],[585,273,143,265],[384,1043,117,248],[1133,693,149,172],[592,540,232,152],[1024,1005,143,193],[1024,610,107,281],[714,1131,165,154],[1133,488,133,203],[417,808,173,233],[881,1200,265,95],[222,1037,160,231],[774,880,128,249],[1012,244,280,120],[730,366,280,120],[730,244,280,120],[730,0,280,120],[730,122,280,120],[826,488,280,120],[592,694,280,120],[592,816,180,180],[1012,0,280,120]]},
		{name:"storage_atlas_11", frames: [[771,113,180,100],[707,643,120,120],[0,969,140,140],[597,0,193,110],[402,0,193,110],[500,1103,104,147],[738,1040,90,147],[0,629,126,165],[104,403,90,210],[728,403,93,157],[452,962,121,139],[310,398,191,92],[310,492,191,92],[387,209,191,93],[263,586,191,92],[321,680,191,92],[1076,333,191,92],[995,643,119,119],[829,590,82,174],[580,214,108,164],[0,399,102,228],[1166,0,134,143],[1189,521,105,135],[721,765,104,134],[1076,239,191,92],[883,280,191,92],[690,309,191,92],[883,374,191,92],[690,215,191,92],[1063,145,191,92],[606,1190,149,102],[575,962,152,107],[207,1204,150,91],[606,1071,130,117],[196,403,112,168],[0,796,116,171],[207,1039,106,163],[107,1111,98,182],[953,113,108,165],[128,757,191,92],[142,945,191,92],[118,851,191,92],[1076,427,191,92],[272,304,191,92],[792,0,185,111],[584,112,185,100],[979,0,185,111],[315,1114,183,84],[138,233,132,168],[0,1111,105,185],[913,590,80,178],[151,62,137,169],[0,224,136,173],[503,380,119,125],[0,62,149,160],[624,403,102,144],[335,962,115,150],[1116,658,99,130],[128,615,133,140],[335,868,191,92],[514,774,191,92],[321,774,191,92],[528,868,191,92],[456,586,191,92],[514,680,191,92],[0,0,400,60],[729,901,100,137],[945,468,120,120],[1067,521,120,120],[823,468,120,120],[827,770,113,112],[946,998,113,112],[1175,1132,113,112],[831,884,113,112],[942,770,113,112],[946,884,113,112],[831,998,113,112],[830,1112,113,112],[945,1112,113,112],[1061,904,113,112],[1060,1112,113,112],[1061,790,113,112],[1176,790,113,112],[1176,904,113,112],[1175,1018,113,112],[290,62,95,195],[387,112,195,95]]},
		{name:"storage_atlas_12", frames: [[1151,734,80,100],[1069,734,80,100],[213,1199,83,35],[1079,1195,83,35],[1164,1198,83,35],[744,484,83,35],[515,1073,70,70],[857,1079,70,70],[132,1212,77,28],[950,1202,72,31],[1264,1037,31,50],[0,1012,62,82],[807,952,74,91],[970,1000,60,99],[1131,0,124,96],[1032,1094,71,65],[1189,1037,73,77],[1060,356,72,48],[693,259,220,51],[444,280,220,51],[0,269,220,51],[935,0,105,114],[655,596,87,113],[980,828,87,84],[1116,950,86,79],[286,1158,76,39],[364,1158,76,39],[1001,1161,76,39],[638,1159,76,39],[1183,1157,76,39],[716,1167,76,39],[444,234,25,29],[1035,468,184,54],[558,484,184,54],[186,487,184,54],[0,487,184,54],[849,468,184,54],[666,312,186,58],[515,1001,85,70],[399,1083,56,66],[792,1045,63,79],[1204,962,90,73],[1041,139,85,53],[956,356,102,54],[1024,1232,73,29],[0,811,86,85],[558,596,95,104],[578,702,68,127],[1116,1031,71,80],[323,1087,70,69],[858,0,75,160],[563,0,76,162],[471,174,220,51],[1041,197,220,51],[693,206,220,51],[648,711,84,102],[1208,250,69,157],[459,906,81,89],[301,697,105,90],[713,86,100,118],[1263,156,30,52],[471,125,76,39],[767,1126,76,39],[857,162,76,39],[558,442,76,39],[1183,1116,76,39],[1105,1113,76,39],[1263,210,25,29],[372,431,184,54],[663,372,184,54],[663,428,184,54],[186,431,184,54],[956,412,184,54],[0,431,184,54],[713,0,143,84],[78,1194,52,52],[883,954,54,44],[0,1096,55,63],[587,1103,49,69],[298,1199,86,33],[230,1074,91,54],[188,340,168,63],[935,116,104,110],[459,997,54,118],[602,1040,87,61],[980,734,87,92],[444,333,117,91],[471,227,220,51],[0,216,220,51],[222,234,220,51],[707,1028,83,69],[362,125,107,107],[67,1008,82,71],[1137,250,69,160],[1042,0,87,137],[0,599,95,102],[57,1153,76,39],[845,1151,76,39],[1105,1154,76,39],[457,1145,76,39],[923,1153,76,39],[208,1130,76,39],[744,524,184,54],[0,322,186,58],[1116,524,184,54],[930,524,184,54],[558,540,184,54],[372,487,184,54],[1142,412,57,54],[691,1099,74,58],[1032,1021,82,71],[505,599,39,89],[787,1233,80,22],[613,1200,78,23],[1257,0,41,112],[815,86,40,109],[641,0,70,172],[1069,836,81,90],[626,954,79,84],[301,789,86,93],[542,912,82,87],[915,250,220,51],[915,303,220,51],[222,287,220,51],[389,806,91,84],[460,0,101,123],[563,333,98,107],[135,1171,76,39],[872,1194,76,39],[535,1174,76,39],[0,1194,76,39],[442,1186,76,39],[794,1192,76,39],[0,543,184,54],[186,543,184,54],[372,543,184,54],[744,580,184,54],[930,580,184,54],[1116,580,184,54],[900,734,78,104],[498,702,78,120],[323,1006,74,79],[1037,928,77,91],[482,824,94,80],[399,1006,58,75],[707,954,92,72],[578,831,93,79],[0,148,360,32],[0,182,360,32],[0,114,360,32],[298,1234,40,40],[88,894,65,112],[1221,409,65,112],[1233,734,65,112],[1152,836,65,112],[0,898,65,112],[392,892,65,112],[817,838,65,112],[740,840,65,112],[673,840,65,112],[884,840,65,112],[1219,848,65,112],[258,884,65,112],[172,889,65,112],[325,892,65,112],[1131,98,120,97],[951,914,84,84],[258,795,40,40],[1099,1232,40,40],[854,312,40,40],[258,837,40,40],[1249,1198,40,40],[1254,636,40,40],[1254,678,40,40],[1253,114,40,40],[626,912,40,40],[638,1103,40,40],[386,1227,399,7],[403,599,100,96],[744,636,100,96],[301,599,100,96],[846,636,100,96],[948,636,100,96],[97,599,100,96],[1050,636,100,96],[199,599,100,96],[199,697,100,96],[97,697,100,96],[1152,636,100,96],[345,0,113,112],[115,0,113,112],[0,0,113,112],[230,0,113,112],[0,405,416,24],[88,795,82,97],[408,697,88,107],[734,734,81,104],[817,734,81,102],[172,795,84,92],[929,1101,82,50],[155,1003,73,81],[0,703,86,106],[358,340,72,62],[239,998,82,74],[883,1000,85,77],[64,1081,70,70],[136,1086,70,70],[854,356,100,100]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.animation_rubbing_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_rubbing_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_rubbing_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
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
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.body_pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cancel_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.check_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.credits_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.eyebrow1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.eyebrow2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.eyebrow3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.eyebrow4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.facebook_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_2_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_3_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_4_4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_5_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hairstyle_6_4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hanger2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hanger_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_accessory6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_body0_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_body1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_bottom4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero1_head1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero1_nose_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shoes4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero1_top4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero2_accessory6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero2_body0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero2_body_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero2_bottom4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero2_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair0_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hand_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hero2_head1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.hero2_nose_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shoes4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.hero2_top4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.hero3_accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.hero3_accessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.hero3_accessory3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.hero3_accessory4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.hero3_accessory5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.hero3_accessory6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.hero3_b0_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero3_body_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero3_bottom4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero3_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair0_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.hero3_head1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shoes4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.hero3_top4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.hero4_accessory1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.hero4_accessory2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.hero4_accessory3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.hero4_accessory4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.hero4_accessory5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.hero4_accessory6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.hero4_b0_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero4_body_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero4_bottom1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.hero4_bottom2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.hero4_bottom3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.hero4_bottom4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.hero4_dress1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.hero4_dress2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.hero4_dress3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hero4_dress4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.hero4_fringe0_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero4_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hero4_fringe2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.hero4_fringe3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.hero4_fringe4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.hero4_fringe5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero4_fringe6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.hero4_hair0_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero4_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.hero4_hair2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.hero4_hair3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.hero4_hair4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.hero4_hair5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hero4_hair6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.hero4_head1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero4_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.hero4_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.hero4_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.hero4_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.hero4_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.hero4_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.hero4_rouge1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.hero4_rouge2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.hero4_rouge3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.hero4_rouge4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.hero4_rouge5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.hero4_rouge6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shadows2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shadows3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shadows4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shadows6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shoes1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shoes2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shoes3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shoes4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.hero4_top1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.hero4_top2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.hero4_top3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.hero4_top4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.instruction_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_21_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_23_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_24_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_31_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(155);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_32_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(156);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_37_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(157);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_38_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(158);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_48_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(159);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_50_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(160);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_56_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(161);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_57_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(162);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_60_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(163);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_61_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(164);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.location_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.location_0_5_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.location_0_6_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.location_0_7_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_0_8_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.location_1_5_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.location_1_6_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.location_1_7_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.location_1_8_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.logo_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(165);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(166);
}).prototype = p = new cjs.Sprite();



(lib.more_games_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.next_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.next_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(167);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(168);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(169);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(170);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(171);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(172);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(173);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(174);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(175);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(176);
}).prototype = p = new cjs.Sprite();



(lib.photo_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.pipe_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(177);
}).prototype = p = new cjs.Sprite();



(lib.play_again_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.play_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.play_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.redirect_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.rouge_10_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(178);
}).prototype = p = new cjs.Sprite();



(lib.rouge_16_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(179);
}).prototype = p = new cjs.Sprite();



(lib.rouge_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(180);
}).prototype = p = new cjs.Sprite();



(lib.rouge_21_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(181);
}).prototype = p = new cjs.Sprite();



(lib.rouge_22_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(182);
}).prototype = p = new cjs.Sprite();



(lib.rouge_24_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(183);
}).prototype = p = new cjs.Sprite();



(lib.rouge_26_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(184);
}).prototype = p = new cjs.Sprite();



(lib.rouge_28_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(185);
}).prototype = p = new cjs.Sprite();



(lib.rouge_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(186);
}).prototype = p = new cjs.Sprite();



(lib.rouge_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(187);
}).prototype = p = new cjs.Sprite();



(lib.rouge_9_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(188);
}).prototype = p = new cjs.Sprite();



(lib.shadow_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.shadows11_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.shadows12_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.shadows15_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.shadows16_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.shadows1_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(189);
}).prototype = p = new cjs.Sprite();



(lib.shadows20_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.shadows21_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.shadows23_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(190);
}).prototype = p = new cjs.Sprite();



(lib.shadows25_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.shadows29_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.shadows33_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.shadows34_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(191);
}).prototype = p = new cjs.Sprite();



(lib.shadows37_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(192);
}).prototype = p = new cjs.Sprite();



(lib.shadows41_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.shadows42_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.shadows44_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.shadows46_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.shadows48_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.shadows4_closet_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.shelf_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(193);
}).prototype = p = new cjs.Sprite();



(lib.shoes_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.shoes_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(194);
}).prototype = p = new cjs.Sprite();



(lib.shoes_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(195);
}).prototype = p = new cjs.Sprite();



(lib.shoes_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(196);
}).prototype = p = new cjs.Sprite();



(lib.shoes_2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(197);
}).prototype = p = new cjs.Sprite();



(lib.shoes_2_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(198);
}).prototype = p = new cjs.Sprite();



(lib.shoes_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(199);
}).prototype = p = new cjs.Sprite();



(lib.shoes_3_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(200);
}).prototype = p = new cjs.Sprite();



(lib.shoes_3_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(201);
}).prototype = p = new cjs.Sprite();



(lib.shoes_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(202);
}).prototype = p = new cjs.Sprite();



(lib.shoes_4_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(203);
}).prototype = p = new cjs.Sprite();



(lib.shoes_4_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(204);
}).prototype = p = new cjs.Sprite();



(lib.skip_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(205);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(206);
}).prototype = p = new cjs.Sprite();



(lib.tale_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.title_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_3_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_4_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(207);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_2_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.redirect_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A4/SvMAAAgldMAx/AAAMAAAAldg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-120,320,240);
p.frameBounds = [rect];


(lib.redirect_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.redirect_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.redirect_3_img();
	this.instance.setTransform(-160,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-120,320,240);
p.frameBounds = [rect];


(lib.redirect_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.redirect_2_img();
	this.instance.setTransform(-160,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-120,320,240);
p.frameBounds = [rect];


(lib.redirect_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.redirect_1_img();
	this.instance.setTransform(-160,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-120,320,240);
p.frameBounds = [rect];


(lib.play_redirect_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_redirect_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.cancel_redirect_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.cancel_redirect_img();
	this.instance.setTransform(-120,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-60,240,120);
p.frameBounds = [rect];


(lib.preloader_32_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC7FA6").s().p("AgQARQgIgIAAgJQAAgJAIgHQAHgIAJAAQAKAAAHAIQAIAHAAAJQAAAJgIAIQgHAIgKAAQgJAAgHgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2.5,-2.5,5,5);
p.frameBounds = [rect];


(lib.preloader_30_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC7FA6").s().p("AGNBOQgUgLgNgWQgMgVAAgYQAAghAXgaQAbgeAqAAQAXABASAIQARAHAQARIgXAWQgWgWgdAAQgZAAgRAQQgSARABAXQgBAYATARQARARAbABQAQgBAMgGQALgIAIgPIgyAAIAAgdIBWAAIAAAGQAAAWgMAUQgLAVgTAKQgSAKgZABQgbAAgVgMgAmXA/QgagaAAglQAAgXALgVQAMgUAWgMQAUgNAZAAQAjAAAbAbQAaAaAAAkQAAAmgaAZQgaAagkABQgoAAgYgbgAmAgoQgRAQAAAYQABAdAUAQQAQANAVAAQAWAAARgRQAQgRAAgYQAAgWgQgSQgRgQgXAAQgYAAgQAQgAEhBWIhJhvIAABvIghAAIAAirIAgAAIBJBwIAAhwIAhAAIAACrgABzBWIAAirIAgAAIAACrgAgwBWIAAirIAnAAQAjAAASAKQASAJAMAWQAMAUAAAaQAAATgHARQgGARgMALQgMALgNAEQgOAEgeABgAgQA2IAQAAQAUAAAKgGQALgEAFgNQAHgMAAgSQgBgZgPgPQgNgOgdAAIgLAAgAhrBWIgOgkIhFAAIgPAkIgiAAIBDirIAhAAIBCCrgAizASIAuAAIgWg4gAoRBWIAAirIAgAAIAACLIAwAAIAAAgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53,-9,106.1,18);
p.frameBounds = [rect];


(lib.preloader_27_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.686)","rgba(255,255,255,0)"],[0,0.525,1],0,0,0,0,0,13).s().p("AgCAIIhwAzIBrg9Ig0hwIA9BrIBxg0IhrA9IAzBxg");
	this.shape.setTransform(11.5,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,23,23);
p.frameBounds = [rect];


(lib.preloader_25_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.686)","rgba(255,255,255,0)"],[0,0.525,1],0,-0.1,0,0,-0.1,18.2).s().p("AgHAIIisgIICsgHIAHisIAICsICsAHIisAIIgICsg");
	this.shape.setTransform(18,18);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,36,36);
p.frameBounds = [rect];


(lib.preloader_23_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdAeQgMgNAAgRQAAgQAMgNQANgMAQAAQARAAANAMQAMANAAAQQAAARgMANQgNAMgRAAQgQAAgNgMg");
	this.shape.setTransform(4.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,8.5,8.5);
p.frameBounds = [rect];


(lib.preloader_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgD5Au4MAAAhdvIHzAAMAAABdvg");
	this.shape.setTransform(25,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,50,600);
p.frameBounds = [rect];


(lib.preloader_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FCB9D5","#FEF5F9"],[0,1],5.7,-217.9,-4.2,159.7).s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");
	this.shape.setTransform(400,300,1.5,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.preloader_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.298)","rgba(255,255,255,0)"],[0,0.467,1],-49.9,0,50,0).s().p("AnzPnIAA/NIPnAAIAAfNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-100,100,200);
p.frameBounds = [rect];


(lib.preloader_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(252,185,213,0.6)").s().p("AnzGPQilABh2h2Qh1h1AAilQAAikB1h1QB2h1ClAAIPnAAQClAAB1B1QB2B1AACkQAAClh2B1Qh1B2ilgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-40,180,80);
p.frameBounds = [rect];


(lib.preloader_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE0044").s().p("ADkDHQgMAAgKgEQgKgEgHgJQgFgIgBgNQABgRAKgMQAJgLAPgIQAPgIAQgEIAEgWQgNAOgMAFQgMAEgKgBQgTABgMgMQgJgJgCgPIgIAKQgOAQgPAFQgOAFgLgBQgRAAgKgJQgKgJgDgSQgFAJgJAIQgJAJgLAFQgLAFgOAAQgMABgLgHQgNgGgHgOIgEgKIgJALQgPAPgPAGQgQAFgKgBQgTABgMgMQgMgMAAgYIAAgNIACgNIAsjHIA7gIIguDWIgCAHIAAAGQAAAIAEAEQAFADAHAAQAMgBAKgJQAFgFAEgHIAAgDQAAgVAGgWQAGgYANgWQANgWASgOQASgNAbAAQAQAAAJAFQAHAGABAJIAAADIAEgWIA5AAIgdCGIgBAHIAAAGQAAAJADAEQAFAEAIAAQAMAAAIgLQAIgLAFgPIAAAAIAbh/IA6AAIgdCGIgBAFIAAAFQAAAHACAGQADAFAHAAQAKAAAIgKQAJgJAEgOIAciBIA6AAIgpC4QANgEAJgHQAJgHAIgLQAGgLAGgRIARAAQgHAagNAPQgMAPgNAHQgNAIgNADIgGAdQgGAcgMAPQgMAPgOAFQgNAGgMAAIgDgBgADhCCQgJAEgFAHQgFAGAAAIQAAAEADAFQADAEAHAAQAGAAAHgJQAGgJAEgSIACgLQgKADgJAGgAAqhAQgKALgHASQgIARgEASQgEARAAAPQAAAPADAHQAEAGAEABQAGACADAAQAHAAAGgEQAHgEAFgIQAFgIADgLIAUhYQAAgDgCgEQgBgDgEgDQgDgDgHAAQgNAAgKAMgAlVBjIA2j8IA8gIIgdCGQAQgCANgJQAMgJAJgPQAKgOAFgRQAFgRAAgQQAAgPgEgMQgGgNgKgHQgMgHgRAAQgxAAgbAaQgbAZgBAtQAAALABAFIADAIIACAEQgVAAgLgIQgLgKAAgVQABgUAMgTQAMgSAUgPQAVgOAYgJQAZgJAZAAQAhABAVALQAVAKAJASQALASgBAVQABAUgJASQgHATgPAQQgPAPgVAKQgWAJgbAAIgCAAIgYBwg");
	this.shape.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.7,-17,75.5,40);
p.frameBounds = [rect];


(lib.preloader_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FC7FA6","#FFFFFF"],[0,1],20,25,20,-25).s().rr(-75,-25,150,50,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-25,150,50);
p.frameBounds = [rect];


(lib.preloader_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC7FA6").s().rr(-80,-30,160,60,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-30,160,60);
p.frameBounds = [rect];


(lib.preloader_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(252,185,213,0.898)").s().p("A1ED5QhoAAhKhJQhIhJAAhnQAAhmBIhKQBKhIBoAAMAqKAAAQBnAABJBIQBJBKAABmQAABnhJBJQhJBJhnAAg");
	this.shape.setTransform(150,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-10,320,50);
p.frameBounds = [rect];


(lib.preloader_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.2)","rgba(255,255,255,0)"],[0,1],0,15,0,-14.9).s().p("A3bCVIAAkqMAu2AAAIAAEqg");
	this.shape.setTransform(150,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,300,30);
p.frameBounds = [rect];


(lib.preloader_5_tween = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.682)").s().p("EgnoAnpQwbwbAA3OQAA3NQbwbQQbwbXNAAQXOAAQbQbQQbQbAAXNQAAXOwbQbQwbQb3OAAQ3NAAwbwbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-358.8,-358.8,717.6,717.6);
p.frameBounds = [rect];


(lib.preloader_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bCVIAAkqMAu2AAAIAAEqg");
	this.shape.setTransform(150,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,300,30);
p.frameBounds = [rect];


(lib.preloader_4_tween = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AQRZHQjYBFjTg0Qjjg4hTirQgsBJhZA0QhTAwhmAUQhmAUhggMQhjgLhCgrQg/AchfAYQiJAjhZgMQh+gQgxhrQgjApg6AkQg4AjhEAYQizA/iugfQjEgkg9iQQgkhPAUhTQA9j6Adj1QAjkvgejEQhKAXhBgCQh3gDhHhTQjjDOkWBZQktBhkQhJQl+hlgJjlQgEgwARhaQAYh0A2j9QiZg5hkiDQhxiVALi3IABAAQAGilB9iZQCPitEQiAQCwhTDNguQDhgzDLAHQHxARC1FZQDvhkCgBaQB2hPCBAAQCOAABVBlQCehuCwgeQB/gWB0AbQCBAeBSBUQBLg9BsgpQBugqBugKQEGgYBvCcQBVg1BtgeQBwgfBrADIAkhkQDEiXBLgkQCPhGC2AUQCTARBUBbQBVBcACCSQBsiID8AiQCRAUBbBAQBrBLAQB/QDAABBuB8QCbgvClA4QCYA0BUCLQBNCAAFCyQAFCshACtQhCCyh8CCIAAABQjIDvktBEIAeBjIhfBbIguAPQi9A9hJAOQiXAdhtgmQhYgfhChLIhDBIIghAAQAnDOhGDXQhIDaicCOQgxA4g4ArQidB2i+AOQgaACgZAAQijAAiQhSg");
	this.shape.setTransform(0,17.5,0.583,0.583);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("EgiWAPnIAA/NMBEtAAAIAAfNg");
	this.shape_1.setTransform(0,17.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-220,-82.4,440,200);
p.frameBounds = [rect];


(lib.preloader_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BD255E").s().p("AAUCVIgUgUIgSAUI0yAAQg/ABgrgtQgsgsgBg9QABg9AsgrQArgsA/gBIUxAAIATAUIAUgUIUyAAQA9ABAsAsQAtArgBA9QABA9gtAsQgsAtg9gBg");
	this.shape.setTransform(150,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,300,30);
p.frameBounds = [rect];


(lib.preloader_3_tween = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#323232","#4C4C4C"],[0,1],0,-5.7,0,5.1).s().p("Ailg4QAcgEA7APQA/AQAPgBQAQABA/gQQA7gPAcAEQgHAsghBEQhGgnhMAIQg1AGgzAbQgihIgHgqg");
	this.shape.setTransform(-287,-75.6,0.595,0.595);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#313131","#4B4B4B"],[0,1],-8.4,-21,1.1,12).s().p("Ai4BeQAPh+ADgTQAViiAdgZQgNECASDDQgsAPgxAJQAJg1ALhcgAhMhHQgIh7AHgNQAOABAMgIQAKgFAFgKQATB6AXBOQAcBTAsAvQg0Avg5AgQgjhlgKiWgAA1g7QgghIgGhrQAJAHAcBDQAcBDAfAWQAkAZA6gUQgfA8gmAvQgzgagghGg");
	this.shape_1.setTransform(-281,-39.5,0.923,0.923);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#323232").s().p("AlcE+QAjjXAKgzQAmjGBQhKQAeAJARAFQAZAGAYAAQAAAQAFAYQALAAATgKQAZgNAAgQIANgBQAAASAWANQASAJANAAQAFgbAAgYIAegJQAjAhAVAlQALAUAXA3QAmBZBFAVQA/ATA/gsQhxEPjPCTQjGCPkPAOQAOhDAgjIgAgxkCQgQgOgTgFQgGAbAAAcQgogBgrgPIg8iFQgfhLgHgzQAkgGBNAVQBRAWAVgCQAWACBPgWQBMgVAkAGQgHAzgfBLIg8CFIgRAFQAAgVgFgXQgTAFgRAOQgRARAAATIgNABQAAgUgUgRgAh+oMQgjgVgZgbIAhgMQBhBXBfhXIAhAMQgZAbgiAVQgkAVghAGQghgGglgVg");
	this.shape_2.setTransform(-283.6,-51.5,0.595,0.595);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC9933").s().p("AlcE/QAjjXAKg0QAmjGBQhKQAeAKARAEQAZAGAYAAQAAARAFAYQALAAATgLQAZgMAAgRIANgBQAAATAWAMQASAKANAAQAFgbAAgYIAegJQAjAgAVAmQALATAXA4QAmBYBFAUQA/ATA/grQhxEPjPCUQjGCOkPAOQAOhDAgjHgAgxkBQgQgOgTgFQgGAbAAAbQgpAAgqgQIg8iFQgfhLgHgzQAkgFBNAUQBRAWAVgCQAWACBPgWQBMgUAkAFQgHAzgfBLIg8CGIgRAFQAAgVgFgXQgTAEgRAOQgRARAAATIgNABQAAgUgUgQgAh+oMQgjgVgZgaIAhgNQBhBYBfhYIAhANQgZAagiAVQgjAWgiAGQghgGglgWg");
	this.shape_3.setTransform(-283.6,-51.8,0.595,0.595);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFCC").s().p("AlcE/QAjjYAKgzQAmjGBQhJQA5ASAnABQAAARAFAXQAKABAUgLQAZgNAAgQIANgBQAAASAWANQASAKANgBQAFgaAAgYIAegJQAjAgAVAmQALATAXA4QAmBYBFAUQA/AUA/gsQhxEPjPCTQjHCQkOANQAOhDAgjHgAgxkBQgQgOgTgFQgGAbAAAbQgpgBgqgPIg8iFQgfhLgHgzQAkgFBNAUQBRAWAVgCQAVACBQgWQBMgUAkAFQgHAygfBMIg8CGIgRAEQAAgUgFgXQgTAEgRAOQgRAQAAAUIgNABQAAgUgUgQgAh+oMQgjgVgZgaIAhgNQBhBYBfhYIAhANQgZAagiAVQgjAWgiAGQghgGglgWg");
	this.shape_4.setTransform(-283.6,-50.8,0.595,0.595);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-307.2,-86.6,47.1,70.7);
p.frameBounds = [rect];


(lib.preloader_2_tween = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNIkQgPgPgHgTIAAAAQgLgcAGgpIAHgdIAShPIABgBIABgFIgTAJIAAAAQgbALgaABIgDAAIgYAAQgPgCgSgEIgogRQgMgJgIgNIgEgHQgGgLgEgOQgcAkgjAYIgPAKQgSASgWAOQg0AkgyAEQhhAGhCg6QhHg+AAh2QABg7AyjWQA9j/AGgoQAHgvgFgWQgGgXgYgQIA2grQAkgcApgJQApgKAxAGQBIAHAKA9QAGAogXBmQgMAyg2DOQgxDAgBA+QAAAmAPASQAOARAZAAQAPAAATgJQApgrAVgqQAfhBAoiUQAmiQALhUQgDgeAEgXQAGgsAigOQAKgEAWgEQAXgDAPABIAAAAQAXgCAgAEQBCAJAZAXQAhAfgWA9QgQAqgPAsIAfgYQA/gTAqgCQBEgDAiAkQASATAEAbQADAVgGAcQAxgtAugPQA4gTA/AWQA3ATAeA9QAYAyAAA9QgBBTgjBSQgjBSg7A4IgBABQgjAgglATIg8ArIgLAEQgYAIgXAFIhNAGIgrgHIgOgEQgDAPAAALQAAAjAQA2Ig2AqQg5ATgpACIgIAAQg3AAgegfgAFjArQhIBngUA2QANAUAdAJQAXAHASgFQAIgLAIgNIAPgdIAPgrIAFgQQAMgtACgqQADgigHgMIgBgCIgBAAIgCgBQgVAXgbAlgAA6hpQgfB0gNBhQgHAzABATQAAAXAGARIAKghIAdhqIACgGIABgCIAgiEQAIgnABgZQACgqgLgVIgEgGQgOArgMAug");
	this.shape.setTransform(139.2,-6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AzUG+QgLgFACgVIAGgiIAEgUIA6kQQAqi8AZiWQg7AZgcAQQgwAegQAnQgQAjAMAfIADAHIAGAKQAOAWAeAMQgiALgkgGQgkgGgcgVQhBguARhOQADgPAHgPIAVgnQANgUATgUIASgTIAHgGIAZgUICHhSQAWgLAYgJICCgqIADgBIATgEIASgEIATgEIB+gOIANAAIAJgBIAPAAQAnABAjAEIBiAZIAhAQQAcAPAXAUQANALALAOIAyBcQAMAoACAyQAHCThNCTQhJCPh9BpQiBBqiPAgQg1ALgyAAQhjAAhagsgAnWE4IAUg3QAth8AbhqQAThHAJg8IAFgiIABgMIAAgOIABgOQAAgSgCgKIAAgCIAAgBQgEgOgIgSIgIgPIAYgMIAOgHIANgGIAGgDIABAAQAggPAbgGQAqgLAcAKIACABQAHACAFAEIAQAPQAGAIADAMIABADIABADIABASIAAAOIgBANQBShwBGgGQAagCASAJIAKAHIADACIAGAGIANAjIABAOQgBAzghA3QgUAhgwA6QgIgPgHgJQgMgSgIABQg3AEhBCSIgvBwQgXA8gNAQQgkAxhTAgQgpAPgaAAQgbAAgJgSgADCEOQhfgLgrg+Qgmg4AHhZIAAgKQADgaAGgbQAbh7BchiQBhhmB5gVQBFgMAxAUIAFACIAFADIAMAGIARANQAWAUAJAeIAEAOIABAQIAAACIAAANQgBA7g6A9QguAwhDAjQgRAJg0AUQgsATgYAPQgUAMgDAHQgDAEABAKIABAOQAFAYAZANQAZANAZgEQBjgOBDg1QAogfAhgxQAaA3ASAcQAgAuAkANQAMAEAKAAIAFAAIAHgBQAPgDAKgKIAGgKQAHgNgBgSQAAgVgSgXQgGgIgigiQg8g/gHhBQgBgUABgTQABgRAFgQQAGgVALgTIAFgHIAEgHQAPgVAUgSIAVgQQAagTAhgNIAsgNIAOgDIBpgDIAJACIAHADIAZAMQAPAMAEARIAAAEQADARgKATQgNAdghAVIgTANIgZgZQgRgNgPAAQgTAAgHAIQgIAJAAATIABAFIACAHQADAKALAQIAEAFQAMARAgAmIAPAUIAGALQAnBBgHA9QAKgIAQgJIAdgOQAUA3ANAWQAZAqAkAOIAEABIAAABIATADQAIABAIgCIADgBIAJgFQAUgOAAghQAAgVgSgYQgGgIgigjQg8hCgHhBQgCgVACgTQACgPADgOQAGgXANgVIACgCIAPgWQAMgOAPgMIAXgRQAMgIAOgGIA1gVIAjgHIBpACQAJACAHADQAeAMAKAVIACAEIAAABQAIAVgNAaQgOAbggAVIgSAMIgagbQgRgOgPgBQgSgBgIAIQgHAIAAAUQAAAIALAUIAdAqIACACIAGAIIACADIAFAHIAvBKQAHASAFASIACAKQANBDglBCQgvBUheAfQg6ATg1gFQg8gFgughQgZgUgSgaQgSgbgFgdQgeA0g3AkQg1Ajg9AJQg+AKg0gTQg4gVgggyQgtAvhZAdQhHAYhCAAQgTAAgTgCgAFLjfQgpAkgdBbIAmgVQAXgOANgMQAKgKAJgOIAKgRIAFgMIABgDIABgEQADgMgCgJQgCgMgLAAQgMAAgQANg");
	this.shape_1.setTransform(-65.9,-5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AuhGtQgnAAgVgLQgZgLAGgYQAkiXARiRQAViugQh7QgQh5gtgWQA0goBdAAQApAAAdALQAgAKAIATQAeBGgBCrQgBCYgXBmQAphFAshcQA0huAOg4QADgMgFgMQgEgMgJgBQA2gaA9gJQBKgKASAdQASAdADCUQABBBgBCEQAnhUAbhkQARhEAXh6QAIgqAAgJQAAgXgPgbQgUgkgigOQAngRAsgJQAzgLAlAFQA7AHAIAxQAEASgEAeIgFA1QgDAqgZBbQgaBbgkBhQhZDyg8AtQgbAVhXATQhbATABgbQAKh5AFhGQAIh/gLhRQg3CdhWCHQgfAzgmAiQgVAUglAbQgOAMgkAIQghAIgiAAIgEAAgAKQGjQgogJgjgTQgkgUgcgcQg1A+heADQgjABgigIQgegHgRgMQgtgfgVg2QgVg2AKg8QAHgrATg+QAVhEAIglQAEgUAAgIQAAgLgIgGQgVAMgsA8QgSAYg4BUQgcArgiA/IgrBWQgbA3h0AQQgsAFgegEQgegFAJgMQBIhiBJjpQBGjaAHiDQABgTgEgPIgOghQA4gbApgHQA8gJAkAeQASAQgCAiQgBANgNA+QgKA0gOA2QgOA1gKAbQBAg+BGghQBCgeA3ACQA2ADAYAlQAbAogRBHQgLAtglBqQggBkgCA+QgDA8AmAOQAjAMA5gfQg7hfAeiHQAdh/BZhUQBMhFBhgCQBcgBBHA6QhMAHg2AqQgwAmglBGQgdA5gQBFQgMA2ABApQADBCAqABQAtABApheQAchBAOhHQAHgogGgPQgIgQgjgBQAQgaAdgXQAggaAggJQBSgaAgBYQAbBIgMBYQgMBXgtBIQgwBNhJAjQg1Aag7AAQgfAAgggHg");
	this.shape_2.setTransform(8,64.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-205.8,-63.9,412.4,171.1);
p.frameBounds = [rect];


(lib.preloader_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC7FA6").s().rr(-155,-20,310,40,20);
	this.shape.setTransform(150,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,310,40);
p.frameBounds = [rect];


(lib.preloader_1_tween = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuvEhQBujGAAjDIAAgOQgKjtigh1QiNhmj4gEIgZAAQieACivApQiqAoiSBEQh/A8hkBOQBuhhCdhKQCShECrgpQCugpCfgBIAZAAQD4ADCNBmQCfB1ALDuIAAANQAADQh7DRQhvC8i1CSQCmiRBiizgAooH6QANgQARgiIAYg2QAyhyAag5QAohUAggzQA1hTA2gjQgpAngoBGQgYApghBGQgbA4gxBzIgZA1QgQAjgNAPQgSAWghAXgAFZHgQg6ghgMg6QgJguAWgLQAVgLAHAhQALA7A7AhQA3AgA9gJQCwgaB6hcQiFB6jOAeQgNACgOAAQguAAgrgZgAbRHUQhUg1gphlQgKgRAWgOQAVgPALAWQAcBCAgAoQApAzA5AXQAeALAdAAQAeABAYgMIABAAQguAdgvAAQgxAAgxgfgAP7HNQhYgxguhVQgMgYASgVQASgWAMAYQAjBBAlAoQAuAyA1ATQBAAVAwgYQgpAigxAAQgsAAgzgcgEAizAD1QgGgqgRgoQgQgogxhCIg6hLQgkgygNggQgWg0AJgwQAJg0AsgQQgPAZAAAmQABAkAPAkQANAgAkAxQAUAcAmAvQAxBDAQAnQARAnAGArQgKA8gkA3QgiAyg2AnQBPhMAOhegAW3FMQAYghAMgtQAMgxgag5QgQgjgug/IhFhUQgtg5gLghQgSg3AJgrQAKgyArgRQgPAZgBAkQAAAiAMAkQALAiAtA4IBGBUQApA4ARApQAYA3gHA0QgJBIgjApQggAkhEAcQAsgeAYgjgAFehBQAghpBXg/QgxA9gZA+QgnBjALBzIBAgnIAygdQAdgSATgNIgFAGQgZAXgoAYIhFApIhAAnQABiDAXhIgEgkkAAqIACgLQgJgzAYg2QAag3A/gtQgfAfgRAkQgZA1AJA1QgEAdAEAcQgUgEgWgKgAlwiOQAEgwgFgYQgKgrgwgIQgigHgxAMQghAIgnAQQgcANgEgNQBVgrA7gOQAxgMAjAFQAvAJAKArQAFAYgEAwIgLB8IgrA3gANVjAQAChohlgmQhQgfhtATQiLAYh/BiQCPiACkgcQBsgTBRAfQBkAlgBBpQAAAmgVAJQgGADgEAAQgKAAAAgQgAAljmQgGgEAAgFQAAgmgagQQgVgNgnADQgwAEg1AnQBNhHBBgGQAlgDAWAOQAaAPAAAlQABAsgVAEIgDAAQgGAAgFgEgAe7laQA8gaBDgLQB8gQBCAZQAWAKAOAMQAVAWgYAQQgYAPgNgSQgNgOgXgJQhFgbh5ATQhxAQhUA7QAtgsBBgdgATklrQA7gbBBgMQB9gXBCAYQAdAKALAQQANASgYALQgYAMgGgJQgNgPgbgJQhEgZh6AYQhsAThUA8QAugsA+geg");
	this.shape.setTransform(-63.6,-18.2,0.576,0.576);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFF66","#FFCC00"],[0,1],0,-9.7,0,20.3).s().p("Ay/gHIAbiPQg0ASgZAKQhHAagoAaQg4AjgVAqQgRAlAGAmIgCATQgXgJgPgPQgSgQgFgWQANhFBZhJQBDg4BYgpQBggtB4gbQCKgfByAHQCHAJBOA/QBaBIAGCLQADBWgkBdQmUAulaBWQAgiVAdicgAUNCkIgrgsQgagagMgVQgig5Ang+QAxhTB8gUQAxgIAoAGQAnAGAKAQQgIARgQAEQgPAEgQgJQg2ghgrAdQgrAdANA/QAIAlA3BCQA4BEAKAqQhagNhcgLgAldg9QAugXAmgJQA/gPAIAkQADANgHBKIgJBgIBVhyQBShvA9gGQAqgDAAAfQAAAegXAlQgRAZgeAjQgVgVgZACQhHAFhDByQhKAFhiAJQAbiLgNhHgAMNB8QgsgugKgjQgOgyAng4QA3hOB3gWQAvgJAlAFQAmAEAJAOQgKAYgSACQgNABgWgKQg0gZgnAcQgpAeAMA+QAIAlAvA0QA5A+AMAXQhggHh5gGgADrg1QBXhNBlgSQBFgMAvAUQAuATAIAnQAHApgnAtQgsA0heAtIgdAOIgqAAQAmgZANgMQAVgUAQgbQAPgbAEgkQAFgqgRgXQgZgigwAUQg2AWgoBTQgRAggGAeQgEAYAAAkIiSADQAthlBThHg");
	this.shape_1.setTransform(-66.9,-26.3,0.893,0.893);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFBE0E").s().p("EghrALHQAdiRBIlJQBJlIAtkHIAJgnIgxASQiGA0g3A5QgXAXgNAcQgzBtA9BZQhhAAhPhFQhUhJAchSQAjhuB9hqQBtheCahIQCOhDCqgqQC6gtCpgCIAaAAQECADCYBuQCzCAALEEIAAAOQgHDkiKDgQiFDajXCbQjdCfjyAsQhVAQhRAAQirAAibhFgAsUIJQBNjVAxi8QA2jNAFiBQADgygFgWQgGgigcg1IApgVQBjgyA/gQQBHgRAyARQA4ASAOA7QADAOAAAdQABAYgCASQCQjDB7gLQA7gFAiAcQAjAbAEA3QgFBMg5BTQgiAzhRBYQgPgYgLgPQgVgbgOABQhhAHhxDoQgMAYhFCbQgpBegWAbQgzA/h2AyQhbAmg7AAQgSAAgPgDgAChF2QhshFgNiOQAEg1ANg6QAvjVCgiqQCoizDSgkQCFgXBbAtQBoAyAJB7QgIBbhkBcQhPBJhxA2QhvAzhuA9QgnAWgPArQgNAmAJAvQAIAqAtAYQAqAWAsgHQCrgZB1hbQBHg3A5hYQAtBjAgAwQA2BRA/AWQAhALAbgFQAagFARgTQAggmgIhFQgGhBghgqQgPgVgkgjQgnglgQgTQhAhNgLheQgEgjATg1QARgtAYgjQAwhEBRgwQBOgtBdgSQCHgYBNAbQBEAXAIA3QgFAegYAdQgYAfgnAXIghAUIgsgnQgdgVgbAAQgzAAgLApQgIAeAQAvQAPAtBpB4QBeCDgNCCQASgQAcgQIAxgYQAkBhAWAmQArBJA/AYQAmAPAegIQAdgJAPgbQAUgmgCg8QgBg8gWgjQgLgRhShTQhGhHgXhCQgLgfgDgfQgDgdAOgtQAMgoASgeQAuhMBWgyQBSgwBlgPQCGgSBNAeQBDAaAJA3QgFAdgYAdQgYAdgnAWIggATQgkgjgJgHQgcgWgbgCQg2gCgJArQgIAhATAtQALAdBGBdQBHBfAUAvQAUAuAGAzQgNBnhSBVQhQBThzAjQhkAehdgHQhngIhQg2QgtgfgfgpQgggsgIgvQg1BVhgA5QhbA3hqAPQhsAQhbgfQhighg3hRQhEBCiEAuQiIAviFABIgIAAQiQAAhbg7gAJcl1QgaAJgdAfQgiAlgdA6QgaA3gGAhQgBAJAAAvIBBgmQAngYAWgVQATgSAQgXQASgbAIgZQANgogCggQgDgjgZAAQgIAAgLAEg");
	this.shape_2.setTransform(-66.1,-9.6,0.576,0.576);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E68525","#FFCC00"],[0,1],0,14.2,0,31.2).s().p("A1sH1QgNgGACgYIAHglQAUhjAyjmQAvjTAdipQhDAcgfATQg3AigSArQgRAnANAkQAPAmAsASQgmANgogHQgogHgggXQhJg0AThXQAQhMBThLQBJhBBrgyQBvg0CDgbQCUgeB6ANQCNAPBRBHQBdBSAGCXQAHClhVCmQhSCgiNB1QiRB4ihAjQg6ANg5AAQhvAAhlgxgAoRFfQBCivAmiSQAWhQAKhDQAQhqgTglIgOgbIBAggQAlgRAegHQA1gNAiAQQAnASAAA1IgCAeQBdh+BPgHQApgDAXAVQAWAVAAApQgBA5glA+QgWAlg2BBQgKgRgHgKQgOgUgJABQg+AFhJCjIg0B/QgbBCgOATQgpA3hdAjQguASgcAAQgfAAgLgUgADZEvQhqgMgxhGQg5hTAhiWQAeiKBohuQBsh0CIgXQBagQA8AhQBFAlgCBYQgBBDhBBEQg0A2hLAnQgUALg6AXQgxAVgbARQgWANgEAIQgFAIAEAXQAFAbAdAPQAbAPAdgFQBvgQBLg7QAtgjAlg3QAdA+AVAfQAjA0ApAOQAjAMAXgQQAWgQAAglQAAgXgUgaQgHgJgmgmQhEhIgHhJQgKhjBHhIQBAhCBogUQBNgNAwAMQAqAKAOAcQAMAagPAfQgPAgglAYIgVAOIgcgcQgTgOgRgBQgVAAgJAKQgIAKAAAVQAAATAXAeQAOASAkArQBFBagJBXQALgKASgKIAggPQAXA+AOAYQAcAwAoAPQAjAOAXgQQAWgQAAgkQAAgYgUgbQgGgJgngoQhDhKgIhJQgKhkBIhGQBAg/BogQQBMgKAwAOQArAMAOAdQAMAagPAgQgQAfgkAXIgVANQgXgZgGgEQgSgQgRgBQgVgBgJAJQgIAJAAAVQABATAuA+QA3BJANAfQAsBmg4BjQg0BehqAjQhAAVg8gFQhDgFg0gmQgdgWgTgdQgVgfgFghQgiA7g+ApQg7AmhEALQhGALg7gVQg/gYgjg4QgzA0hkAiQhQAbhJAAQgWAAgWgDgAFzj6QguAnggBnIArgYQAZgPAOgOQATgSANgYQAOgcgDgVQgDgNgNAAQgNAAgSAPg");
	this.shape_3.setTransform(-65.9,-5.2,0.893,0.893);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#82FFAC","#FFFFFF"],[0,1],-11.4,35.7,8.1,-35.8).s().p("ABXH+QAAgZAThPIAkiQQApiSAVhOQAliLAEhBQAFg+gjgYQA8gSApACQA7ACAnAqQgggYgwgDQgpgDgqAMQAgAoguDFQgPA+gaBaIggByQgSA+gXBiQgRBLgBATQgEA6AgAjQgvgiABhAgApsC9QAAhDA6jwQBDkeAHguQAHgugDgVQgFghgfgVQAtghBFgDQBLgCAjApQglgYg5ABQg5AAglAXQAXAfgFBEQgFA6hDEXQhAEJAABHQgBBBAUAsQATArAqAjQhig1AAiVgAGxE4QglgBgPgSQAQAKAfgEQAYgEAVgLQBIglAlhyQAkhygbhhQAXAcAEAjQALBegjBbQglBfhCAiQgYANgfAAIgDAAgAl/EYQAuAXBShGQBFg8Abg1QAjhIAridQApiYALhdQACgKgHgdQgGgYAHgKQAIgNAcgFQAdgEAlAEQBZAKAWAnQgZgZhOgMQhRgNgLAfQgDAKAEAeIADAkQgMBdgpCZQgrCcgjBIQgKAVgbAfQgeAjghAaQg5AtgqAAQgXAAgTgNg");
	this.shape_4.setTransform(136.1,-8.5,0.893,0.893);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#82FFAC","#FFFFFF"],[0,1],-62.3,9.2,-55.1,36.1).s().p("AicAmQA/hOBTgZQBigfBMBOQhWhDhmArQhXAkg0BRg");
	this.shape_5.setTransform(186.9,-18.6,0.893,0.893);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#19FE68","#FFFFCC"],[0,1],-5,23.6,14.5,-35.4).s().p("AHcFhQAXhAAFhAQAFg9gPgWIgFgJIgLgDQgggHg3A7QgsAvgzBSQhegThmgRQAfhvAKgzQAVhvgVgrQB7gfAsAwQAWAXgFAxQgDAdgOA9IA7g4QAigeAbgPQBHgnBRAZQA1ASAbA7QAYAzAAA9QAABggqBbQhOgYhYgWgAjZDmQAghfAdh9QAdh0AIhGQgFgkAIgOQAOgXBRALQA/AIAUASQAbAYgUA1QhIDDglDBQhWgMhbgLgAqrDEIA6jyQAiiRAKg7QAGgqgBgYQgDghgRgXQAtgYBAgBQBFgCAVAfQARAZgIA+QgDAbgOA+QgPBBgkCDQgjCCgPBHQhTgGhegDg");
	this.shape_6.setTransform(145.3,-27.5,0.893,0.893);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#19FE68","#FFFFCC"],[0,1],-8.3,21.2,-21.7,67.7).s().p("AAOJOQgigjAEg7QABgTAQhMIANg1QgkASggAEQgiAEgsgKQgugKgVghQgTgcgFgyQguBnhOA2Qg7Apg4ADQhuAHhJhAQhQhHAAiEQABhCA5jxQBDkdAHgvQAJg0gHgZQgGgZgbgTQAogeAvgLQAtgMA3AHQBRAJALBEQAHAsgaBzQgNA4g9DnQg3DZgBBFQAAAqARAVQAPATAcAAQAmAAA5g2QAygyAYgyQAkhIAsinQArihAMheQgGgoALgVQAWgnBkAOQBJAKAcAaQAlAigaBFQgpBsghB8QgjCDgNBtQgIA5ABAVQADBDAnAXIAFgTIBCjtQArifAEhGQAEg/gigXQBHgVAvgCQBNgEAmApQAUAVAFAfQADAXgHAgQA3gzAzgRQA/gVBHAZQA+AVAhBEQAbA4AABDQAABfgoBcQgnBdhEA/QhIBDhWAQQhfAShigwQgPBAAAAfQgBAoASA8QhBAVgsACIgKAAQg+AAgjgkgAFxBJQhSBzgWA9QAPAWAgAKQAhAKAYgMQBHglAkiFQAOgzADgtQACgqgIgNIgEgBQgeAAhUB0g");
	this.shape_7.setTransform(142.4,-8,0.893,0.893);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#004E40","#00DC72"],[0,1],0.1,-3.6,-0.9,8.4).s().p("AgqAwQABgIAQhAIAMg1IA7gwIgZBoQgNBCAPAkIg8AtQgMgfAHgvg");
	this.shape_8.setTransform(139.5,34.4,0.893,0.893);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#004E40","#00DC72"],[0,1],2.6,-13.6,-6.4,19.4).s().p("AhAEIQgLgPgBgJIAih4QAVhLAMgwQAShRAEgkQAJhJgWgeQALggACgDIAhgbQAnAagKBZQgFApgaBnIhUE4QgMgHgMgPg");
	this.shape_9.setTransform(148.1,-5.5,0.893,0.893);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#004E40","#00DC72"],[0,1],1.5,-8.2,-1.5,14.3).s().p("AgBABQAQhbgPgYIgBgBQArg0ASAFQAEAFACAMQAIA+gfBfQgkByg/AhIgLAFQAug8AUhng");
	this.shape_10.setTransform(180.5,2.7,0.893,0.893);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#004E40","#00AA61"],[0,1],-2.9,5.1,6,-3.8).s().p("AkaBTQAEgdARhIQCYBJCSgcQCHgZBvhoQhhB0iaA3QhbAihaAAQhEAAhBgUg");
	this.shape_11.setTransform(177.6,29.4,0.576,0.576);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#004E40","#00DC72"],[0,1],-4.1,0.4,7.4,6.9).s().p("AgiBQQgjgIgUgVQgTgTgJgfQAfgkAWg0QAEAjAKAYQAMAcAYAPQAXARAqAFQAmAFAdgGIgbAlQgeANgdABIgJABQgYAAghgIg");
	this.shape_12.setTransform(128.2,21.6,0.893,0.893);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#00AA61","#00C148"],[0,1],-7,-33.5,7.5,29.7).s().p("AAWOgQg1g3AFhcQACgfAah1IAThSQg5AdgwAGQg1AHhFgQQhHgQgig0QgcgqgIhOQhHCfh6BUQhaA/hXAFQiqALhyhkQh9htABjNQABhnBYl2QBom7AMhHQANhSgKgmQgKgogqgcIBehKQDShGBOB7QBFBrgwDQQgTBXhgFnQhVFRgBBrQAABBAbAhQAXAdArAAQA8ABBXhVQBOhNAmhOQA2hwBGkEQBCj6ASiSQgEg1AGgoQALhMA7gZQAQgHAngGQApgGAZABIAFBPQBxAQAsAoQA5A1goBrQhACpgzDAQg2DMgVCoQgMBXABAiQAFBpA9AjIAIgeQBBjoAkiHQBEj5AHhrQAGhig2gkIBfhKIBJAnQCDgLA/BDQAgAiAGAvQAEAjgJAzQBVhPBQgbQBhggBuAmQBgAhAzBpQAqBYAABoQgBChgUBVQgcB5hSBZQhvCGiwAyQi/A3ijhRQgSBKgEAkQgGAwAIAwIB2AXIhfBKQhkAghFADIgQABQhfAAg3g3gAI8B9Qh+CygiBeQAXAkAyAPQAyAPAlgSQBvg5A4jPQAVhOAEhIQAEhCgNgUIgFAAQgwAAiCC0g");
	this.shape_13.setTransform(136.6,-4.6,0.576,0.576);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("A7AKSIAGgXQAdAcBygIQBxgJAmgfQBlhSAOgOQAxgvAyhPQBhibBDibQAvhpBJjXQAfDtgCCEQgBh5gcjNQhJDUgvBrQhDCchhCbQgyBOgxAvQgQAQhjBQQgtAmiEADIgVABQhvAAAJgpgAR7KqQhPgRg7glQg0ggg7g+Qg5BCg0AcQg8AghWADQguABgxgJQg7gLgegVQhCgtghhNQgfhJAFhTQAEBIAfA8QAhBAA5AoQAeAVA7ALQAxAJAugCQBDgCAxgTQAvgSAqgmIAgggQgXgqgKgWQgqhfAEh3QAFB+A6BdQAWAlAEADQACAEAjAgQAvAsAvAZQAzAcBDAOQD5A2Cri5QBKhQArhuQAqhsADhxQAEB1gmBzQgnB2hLBXQhQBehpAnQhGAahMAAQgyAAg1gLgAukJ4IADgqQAmAJB1geQBzgdAhgZQBQg9B9k5QBukSA9j2QAiiIAEh4QAHBGgYCFQgkDQiCFTQiNF2haBEQgiAZh0AeQhZAXgrAAQgPAAgJgDgAmVJYQAPgXAKgRQBVAFBfggQBqgkAcg4QBBiBBeiZQB5jBBdhmQApgtAqgEQAvgFABA6QgDgPgQgRQgIgIgQACQgOABgKAIQhfBMiSDsQhjChhZC0QgeA7h8AhQhNAUhAAAQgbAAgZgEgAKJBbQBGjPARhDQAHgeADgdQAEAsgOA5QgPA+hAC7Qg6C4gFBmQgGhnA9jIgA09C1QARhMAMh2QAJheADhfQgBBogJBqQgMCFgTBTIgbB7IgPAagARaB2QAehuAmhIQAzhjA+g/QBEhFBWggQAbAKAcAPQhsAahRBKQhKBDg7BxQghA/gcBhQgjBzgEBZQgEhbAkiFgAColGQAbhZAdiMIALgyQAIgjADgYQAEAcgKAzQgFAcgLAsQgaB+gWBOQgVBKgmBpIgYAXQA2iTAVhIgA5amEQgWiug9hEIAXgKQArBIARCKQALBZABBgQgDhKgJhFgAnQpVQgZg4gpgjIAfgKQAUAbAPAfQAWAygGAxQgDgbgNgdgAgvqtIAOgGQAJAdgDAlIAAAHQgDgcgRgng");
	this.shape_14.setTransform(7.8,65.3,0.576,0.576);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FF7FE5","#FFCBFF"],[0,1],0.8,-23.8,-0.7,25.7).s().p("AOZEAIAEgSQAIgqgFgWQgGgcgbgKQAzg3A1gKQBAgMAbBJQAbBLgLBcQhVgWhkgVgAwehMQgPhwgngsQA3gbBSABQBTACANAeQAbA/AECMQADB3gOB8QhiANhpASQAVi+gRiJgAIcDEQASg0AdgtQAdguAkghQBCg7BVgMQBVgMBLArQhFAQg1AuQgvArgmBJQgNAZgOAnQhWgOhngMgAqWgoQAFgUgHgTQAsgSA0gIQBHgMAOAXQAWAjAADuIiBAKQgEg8gLhSQgfBZgXA8IhsANQBRibAYhegAEICsIAJglQAGgjgDgMQgDgOgVgTQgqAXhABZQh+gFh4ACQAghqAUhfQAVhiAEhCQABgVgDgPQgDgMgIgSQB7g4A2AuQAQANgGArQgDAYgKAoQgTBbgRA5QgOAtgiBfIA/g+QA9g7BHgiQBFgjA4gCQA6gCAaAiQAcAlgSBJQgHAegZBKQhggJhMgEgAlOA0QALgxAThlIAKg4QACgcgNgdQgQgkgagXQAlgNAkgFQAqgHAeAFQA2AHAFAsQADARgEAeIgFA4QgDAngXBVQgWBRgiBiQhMACg7AEQARg2APhDg");
	this.shape_15.setTransform(8.8,50,0.893,0.893);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF7FE5").s().p("A7AKkQBCkOAdj7QAjkwgcjdQgXivg9hDQBWgrB/ADQCBADAUAvQA0B5gEEoQgEEEglCmIgrDAQCIjnBIiKQB7jrAjiQQAHgfgLgeQBGgbBQgNQBugSAWAjQAeAxADE8QABBkgFE+QByj1AuiTQAmh9AykPIAQhYQADgqgVguQgYg3gpgkQA6gUA4gIQBAgKAwAGQBSALAJBFQAEAagFAvIgJBXQgFBFgsCdQgrCbg+CmQiYGhhiBKQghAZh1AeQh3AegkgKQAFhzALh/QALiAACglQAIiagjkKQhKDVguBrQhDCbhiCbQgxBPgxAvQgQAPhkBRQgtAliDAEIgVAAQhwAAAKgogAR7K7QhQgRg7gkQgzggg8g/Qg4BCg1AdQg7AfhWADQguACgxgJQg7gLgfgVQhKgzgghZQgehUAPhcQAMhDAih1QAmiAALg2QALg1gFgUQgFgVghgdQheA0ifD8QhrCqhiDHQgfA8h8AgQhvAdhSgNQB9i5B7mJQB1l2AOjmQACgfgGgYQgEgTgNgcQDBhXBUBIQAYAUgJBDQgFAlgQA/QgdCMgaBZQgWBIg1CTIBhhfQBghcBug4QBrg2BXgDQBagDAoA1QArA7gcBzQgJAmgsCCQgsCFgTBNQhAEDBeA+QAxAgBJgSQArgLBLgnIgSgcQhiifA1jiQAxjUCRiGQBnheCDgSQCFgTB0BCQhsAahRBJQhKBDg6ByQgcA0gbBUQgfBigKBTQgcDgCEAEQBgACBOiqQA1h0AbiMQAMhBgHgiQgJgpgqgQQBPhVBRgPQBkgTApByQAsB2gTCSQgTCQhKB3QhPB/h2A6QhWAqhiAAQgyAAg1gLg");
	this.shape_16.setTransform(7.9,64.3,0.576,0.576);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF63DD").s().p("A5SLrQhEAAglgSQgrgVAKgoQBAkHAdj9QAjkwgbjXQgbjThQgmQBbhGCiABQBIABAzARQA3ATAOAhQA0B6gCEoQgCELgoCyQBHh4BOijQBai+AYhiQAFgVgHgUQgIgVgQgDQBfgtBqgPQB/gTAgAzQAfAzAGECQADBxgEDoQBFiTAviwQAeh2AojUQANhKABgPQAAgogbgwQgjg9g7gYQBEgfBNgQQBZgTBBAJQBmANAOBVQAGAfgFA0IgJBcQgFBJgtCfQgtCfg+CpQicGmhnBOQgxAliWAhQifAiADgvQAQjTAIh6QAOjegTiPQhfETiWDsQg3BYhBA8QglAig/AwQgaAVg+AOQg7ANg8AAIgEAAgAR2LZQhFgPg+ghQg+gigwgyQhdBsiiAGQg+ACg8gPQg0gMgdgUQhPg3glheQgjheARhoQAMhKAhhsQAkh3AOhBQAHgkAAgOQgBgTgMgKQglAUhMBqQggAqhhCSQgyBMg6BtIhNCWQgwBgjJAbQhNAKgzgIQg1gIAQgVQB8iqCAmWQB5l/AOjjQACghgIgZQgEgMgVguQBjgwBHgLQBqgRA+A1QAgAbgEA9QgBAVgWBsQgTBbgYBdQgZBegRAuQBvhrB6g5QB0g2BeAFQBgAFAqBBQAtBFgdB7QgUBPhAC5Qg3CvgDBsQgGBpBCAXQA9AVBkg1QhnimA1jrQAyjgCaiQQCGh5CngDQCggDB9BnQiFALhfBKQhTBChBB7QgyBigbB6QgWBeADBGQAEBzBKACQBPACBHikQAxhxAXh7QAOhHgMgaQgNgeg9gBQAcgsAygpQA4gsA3gSQCPgtA4CaQAuB+gUCaQgVCYhPB9QhTCGh+A9QhcAshnAAQg2AAg5gMg");
	this.shape_17.setTransform(7.8,64.3,0.576,0.576);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-206.2,-63.9,413.5,171.4);
p.frameBounds = [rect];


(lib.orientation_lock_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhUD6ICdAAIAAj6QAAjIiMiLQiNiIjIAAQhJAAhCAUIAAlMQBEgMBHAAQFQABDpDoQDoDpAAFNIAAD6ICbAAIk7Img");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.8,-80,109.7,160);
p.frameBounds = [rect];


(lib.orientation_lock_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhFBHQgegfABgoQgBgoAegdQAegdAnAAQApAAAeAdQAcAdAAAoQAAAogcAfQgeAdgpAAQgnAAgegdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-10,20,20);
p.frameBounds = [rect];


(lib.orientation_lock_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Am3A8QgZAAgRgSQgRgRgBgZQABgYARgRQARgSAZAAINvAAQAZAAARASQARARABAYQgBAZgRARQgRASgZAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-6,100,12);
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
	this.shape.graphics.f("#000000").s().p("EgVFAgzMAAAhBlMAqLAAAMAAABBlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-210,270,420);
p.frameBounds = [rect];


(lib.orientation_lock_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgSaArvQiFABheheQheheAAiEMAAAhNeQAAiFBeheQBeheCFAAMAk1AAAQCFAABdBeQBfBeAACFMAAABNeQAACEhfBeQhdBeiFgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-280,300,560);
p.frameBounds = [rect];


(lib.instruction_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.wardrobe_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_img();
	this.instance.setTransform(-214,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-214,-250,428,500);
p.frameBounds = [rect];


(lib.wardrobe_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_img();
	this.instance.setTransform(-170,-290);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-290,340,580);
p.frameBounds = [rect];


(lib.title_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_4_img();
	this.instance.setTransform(-180,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-170,360,340);
p.frameBounds = [rect];


(lib.title_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_3_img();
	this.instance.setTransform(-180,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-170,360,340);
p.frameBounds = [rect];


(lib.title_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_2_img();
	this.instance.setTransform(-180,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-170,360,340);
p.frameBounds = [rect];


(lib.title_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_1_img();
	this.instance.setTransform(-180,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-170,360,340);
p.frameBounds = [rect];


(lib.tale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tale_img();
	this.instance.setTransform(-97.3,-47.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.3,-47.6,195,95);
p.frameBounds = [rect];


(lib.shoes_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_shoes4_img();
	this.instance.setTransform(-38.5,-45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.5,-45.5,77,91);
p.frameBounds = [rect];


(lib.shoes_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_4_3_img();
	this.instance.setTransform(-43,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnaEUIgFqAIBIh4IJVgPIBhBBIDBLyIhLCEIqDAvg");
	this.shape.setTransform(0.8,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.3,-57.5,96.1,100);
p.frameBounds = [rect];


(lib.shoes_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_4_2_img();
	this.instance.setTransform(-41,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnPjSIBNjgIG4gCIGaEZIgDI4IrBAYg");
	this.shape.setTransform(-0.5,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47,-43.3,93,87.4);
p.frameBounds = [rect];


(lib.shoes_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_4_1_img();
	this.instance.setTransform(36,-31,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AgUGAIksiTIhamSIBGjDIEBgdIHKHDIAkCkIhTCkg");
	this.shape.setTransform(-1,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.1,-42.5,82.4,78.1);
p.frameBounds = [rect];


(lib.shoes_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_shoes3_img();
	this.instance.setTransform(-37,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37,-39.5,74,79);
p.frameBounds = [rect];


(lib.shoes_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_3_3_img();
	this.instance.setTransform(-43,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("An+glIDvolIIpgIIDlPqIh2CsIr4APg");
	this.shape.setTransform(-0.3,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.4,-60.2,102.3,119.1);
p.frameBounds = [rect];


(lib.shoes_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_3_2_img();
	this.instance.setTransform(-37,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlyGNIg+pkIBnjuIFSgGIGoLsIg1CYInJATg");
	this.shape.setTransform(-0.8,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.1,-47,86.7,92.2);
p.frameBounds = [rect];


(lib.shoes_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_3_1_img();
	this.instance.setTransform(41,-25,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnMgIIBulmIIMgJIEfGdIgpFNIrXAFg");
	this.shape.setTransform(1,-9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.1,-46.9,92.4,75.4);
p.frameBounds = [rect];


(lib.shoes_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_shoes2_img();
	this.instance.setTransform(-39,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39,-60,78,120);
p.frameBounds = [rect];


(lib.shoes_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_2_3_img();
	this.instance.setTransform(-42,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlrGbIh8mxIC9njIIZgEID5NOIhCCBIonAsg");
	this.shape.setTransform(-0.3,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.1,-50.6,97.7,102.2);
p.frameBounds = [rect];


(lib.shoes_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_2_2_img();
	this.instance.setTransform(-41,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AiZI6Iktk8IARnGIDcl0IINAQICTQsIhMA9g");
	this.shape.setTransform(-0.3,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.8,-58.3,91.1,114.7);
p.frameBounds = [rect];


(lib.shoes_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_2_1_img();
	this.instance.setTransform(40,-52,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjFI3IkPk/IAHr5IH7hTIGnNyIgkDNIlrBqg");
	this.shape.setTransform(-0.3,-2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.2,-62.1,93.9,119.5);
p.frameBounds = [rect];


(lib.shoes_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_shoes1_img();
	this.instance.setTransform(-39,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39,-52,78,104);
p.frameBounds = [rect];


(lib.shoes_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_1_3_img();
	this.instance.setTransform(-44,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("An4hDIDGoHIJcAEIDPPEIhrCzIrWAag");
	this.shape.setTransform(-0.7,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.3,-59.9,101.2,117.5);
p.frameBounds = [rect];


(lib.shoes_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_1_2_img();
	this.instance.setTransform(-41,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkNH6IjNrVIDglSIIhgHIC0PHIg+Cig");
	this.shape.setTransform(-0.4,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.9,-57.9,95,113.1);
p.frameBounds = [rect];


(lib.shoes_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shoes_1_1_img();
	this.instance.setTransform(47,-98,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkaNIIkE8+IJ0gcIHJZ4IgdE/InpBug");
	this.shape.setTransform(-1.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.9,-104.3,108.8,208.8);
p.frameBounds = [rect];


(lib.shelf_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shelf_img();
	this.instance.setTransform(-208,-9,1,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-208,-9,416,18);
p.frameBounds = [rect];


(lib.shadows_6_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows4_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.shadows_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows16_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.shadows_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows1_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.shadows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows46_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.shadows_5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows23_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.shadows_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows33_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.shadows_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows21_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.shadows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows44_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.shadows_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows20_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.shadows_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows44_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.shadows_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows48_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.shadows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows37_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.shadows_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows15_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.shadows_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows34_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.shadows_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows44_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.shadows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows25_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.shadows_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows29_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.shadows_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows46_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.shadows_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows11_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.shadows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows12_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.shadows_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows41_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.shadows_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows42_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.shadows_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows4_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.shadows_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows33_closet_img();
	this.instance.setTransform(-56.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.shadow_decor_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_decor_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
p.frameBounds = [rect];


(lib.set_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.pipe_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pipe_img();
	this.instance.setTransform(-200,-3,1,0.714);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-3,399,5);
p.frameBounds = [rect];


(lib.lips_6_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_21_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_50_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_24_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_23_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_57_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_38_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_21_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_38_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_61_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_31_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_23_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_21_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_24_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_37_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_2_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_2_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_60_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_24_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_56_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_32_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_2_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_21_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_48_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.lips_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_48_img();
	this.instance.setTransform(-32.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBKJIAA0RIODAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-65,90,130);
p.frameBounds = [rect];


(lib.indicator_part_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_part_0_img();
	this.instance.setTransform(-200,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-30,400,60);
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


(lib.indicator_part_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_part_3_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,360,32);
p.frameBounds = [rect];


(lib.indicator_part_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_part_2_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,360,32);
p.frameBounds = [rect];


(lib.indicator_part_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.indicator_part_1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,360,32);
p.frameBounds = [rect];


(lib.hero4_top_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero4_top1_img();
	this.instance.setTransform(108,-80.4);

	this.instance_1 = new lib.hero4_top2_img();
	this.instance_1.setTransform(126.4,-78.6);

	this.instance_2 = new lib.hero4_top3_img();
	this.instance_2.setTransform(109.3,-78.3);

	this.instance_3 = new lib.hero4_top4_img();
	this.instance_3.setTransform(109.6,-80.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(108,-80.4,94,80);
p.frameBounds = [rect, new cjs.Rectangle(126.4,-78.6,58,75), new cjs.Rectangle(109.3,-78.3,92,72), new cjs.Rectangle(109.6,-80.2,93,79), null];


(lib.hero4_shoes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.hero4_shoes1_img();
	this.instance.setTransform(97.8,248);

	this.instance_1 = new lib.hero4_shoes2_img();
	this.instance_1.setTransform(97.8,232.6);

	this.instance_2 = new lib.hero4_shoes3_img();
	this.instance_2.setTransform(98.7,265);

	this.instance_3 = new lib.hero4_shoes4_img();
	this.instance_3.setTransform(97.7,255.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(97.8,248,78,104);
p.frameBounds = [rect, new cjs.Rectangle(97.8,232.6,78,120), new cjs.Rectangle(98.7,265,74,79), new cjs.Rectangle(97.7,255.2,77,91), null];


(lib.hero4_shadows_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_shadows1_img();
	this.instance.setTransform(-90.2,-24.6);

	this.instance_1 = new lib.hero4_shadows2_img();
	this.instance_1.setTransform(-90.2,-24.6);

	this.instance_2 = new lib.hero4_shadows3_img();
	this.instance_2.setTransform(-90.2,-24.6);

	this.instance_3 = new lib.hero4_shadows4_img();
	this.instance_3.setTransform(-90.2,-24.6);

	this.instance_4 = new lib.hero4_shadows5_img();
	this.instance_4.setTransform(-90.2,-24.6);

	this.instance_5 = new lib.hero4_shadows6_img();
	this.instance_5.setTransform(-90.2,-24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.2,-24.6,184,54);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero4_rouge_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_rouge1_img();
	this.instance.setTransform(-95.5,-45.8);

	this.instance_1 = new lib.hero4_rouge2_img();
	this.instance_1.setTransform(-95.5,-45.8);

	this.instance_2 = new lib.hero4_rouge3_img();
	this.instance_2.setTransform(-95.5,-45.8);

	this.instance_3 = new lib.hero4_rouge4_img();
	this.instance_3.setTransform(-95.5,-45.8);

	this.instance_4 = new lib.hero4_rouge5_img();
	this.instance_4.setTransform(-95.5,-45.8);

	this.instance_5 = new lib.hero4_rouge6_img();
	this.instance_5.setTransform(-95.5,-45.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.5,-45.8,191,92);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero4_lips_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_lips1_img();
	this.instance.setTransform(-38,-19.5);

	this.instance_1 = new lib.hero4_lips2_img();
	this.instance_1.setTransform(-38,-19.5);

	this.instance_2 = new lib.hero4_lips3_img();
	this.instance_2.setTransform(-38,-19.5);

	this.instance_3 = new lib.hero4_lips4_img();
	this.instance_3.setTransform(-38,-19.5);

	this.instance_4 = new lib.hero4_lips5_img();
	this.instance_4.setTransform(-38,-19.5);

	this.instance_5 = new lib.hero4_lips6_img();
	this.instance_5.setTransform(-38,-19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-19.5,76,39);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero4_head1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_head1_img();
	this.instance.setTransform(-149,-179.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-149,-179.5,303,359);
p.frameBounds = [rect];


(lib.hero4_hair_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero4_hair1_img();
	this.instance.setTransform(-54.2,-63.4);

	this.instance_1 = new lib.hero4_hair2_img();
	this.instance_1.setTransform(-50,-78.3);

	this.instance_2 = new lib.hero4_hair3_img();
	this.instance_2.setTransform(-59.5,-64.1);

	this.instance_3 = new lib.hero4_hair4_img();
	this.instance_3.setTransform(-50.5,-96.5);

	this.instance_4 = new lib.hero4_hair5_img();
	this.instance_4.setTransform(-75.6,-78.7);

	this.instance_5 = new lib.hero4_hair6_img();
	this.instance_5.setTransform(-71.1,-80.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.2,-63.4,102,144);
p.frameBounds = [rect, new cjs.Rectangle(-50,-78.3,98,107), new cjs.Rectangle(-59.5,-64.1,115,150), new cjs.Rectangle(-50.5,-96.5,99,130), new cjs.Rectangle(-75.6,-78.7,128,249), new cjs.Rectangle(-71.1,-80.9,133,140)];


(lib.hero4_fringe_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_fringe1_img();
	this.instance.setTransform(-68,-86.3);

	this.instance_1 = new lib.hero4_fringe2_img();
	this.instance_1.setTransform(-59.4,-87.9);

	this.instance_2 = new lib.hero4_fringe3_img();
	this.instance_2.setTransform(-47.7,-82.8);

	this.instance_3 = new lib.hero4_fringe4_img();
	this.instance_3.setTransform(-52.2,-115.6);

	this.instance_4 = new lib.hero4_fringe5_img();
	this.instance_4.setTransform(-95.8,-94.7);

	this.instance_5 = new lib.hero4_fringe6_img();
	this.instance_5.setTransform(-79.5,-96.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68,-86.3,136,173);
p.frameBounds = [rect, new cjs.Rectangle(-59.4,-87.9,119,125), new cjs.Rectangle(-47.7,-82.8,91,84), new cjs.Rectangle(-52.2,-115.6,101,123), new cjs.Rectangle(-95.8,-94.7,168,269), new cjs.Rectangle(-79.5,-96.7,149,160)];


(lib.hero4_eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.hero4_eyes1_img();
	this.instance.setTransform(-111.2,-24.5);

	this.instance_1 = new lib.hero4_eyes2_img();
	this.instance_1.setTransform(-111.2,-24.5);

	this.instance_2 = new lib.hero4_eyes3_img();
	this.instance_2.setTransform(-111.2,-24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},31).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.2,-24.5,220,51);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero4_dress_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.hero4_dress1_img();
	this.instance.setTransform(93.8,-77.8);

	this.instance_1 = new lib.hero4_dress2_img();
	this.instance_1.setTransform(104.5,-78);

	this.instance_2 = new lib.hero4_dress3_img();
	this.instance_2.setTransform(63.8,-88.7);

	this.instance_3 = new lib.hero4_dress4_img();
	this.instance_3.setTransform(90.3,-76.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(93.8,-77.8,105,185);
p.frameBounds = [rect, new cjs.Rectangle(104.5,-78,80,178), new cjs.Rectangle(63.8,-88.7,160,231), new cjs.Rectangle(90.3,-76.5,137,169), null];


(lib.hero4_bottom_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_bottom1_img();
	this.instance.setTransform(104,10);

	this.instance_1 = new lib.hero4_bottom2_img();
	this.instance_1.setTransform(104.2,4.5);

	this.instance_2 = new lib.hero4_bottom3_img();
	this.instance_2.setTransform(101.1,5.2);

	this.instance_3 = new lib.hero4_bottom4_img();
	this.instance_3.setTransform(104.7,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(104,10,81,90);
p.frameBounds = [rect, new cjs.Rectangle(104.2,4.5,79,84), new cjs.Rectangle(101.1,5.2,86,93), new cjs.Rectangle(104.7,0.8,82,87), null];


(lib.hero4_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_body_img();
	this.instance.setTransform(-104.8,-223.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.8,-223.4,210,447);
p.frameBounds = [rect];


(lib.hero4_accessory_all3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_accessory6_img();
	this.instance.setTransform(-35,-86);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-35,-86,70,172), null];


(lib.hero4_accessory_all2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_accessory2_img();
	this.instance.setTransform(-40,-11);

	this.instance_1 = new lib.hero4_accessory3_img();
	this.instance_1.setTransform(-40,-8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-11,80,22);
p.frameBounds = [rect, new cjs.Rectangle(-40,-8.1,78,23), null];


(lib.hero4_accessory_all1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_accessory1_img();
	this.instance.setTransform(-19.5,-44.5);

	this.instance_1 = new lib.hero4_accessory4_img();
	this.instance_1.setTransform(-15,11);

	this.instance_2 = new lib.hero4_accessory5_img();
	this.instance_2.setTransform(-17,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.5,-44.5,39,89);
p.frameBounds = [rect, new cjs.Rectangle(-15,11,41,112), new cjs.Rectangle(-17,13,40,109), rect=null, rect];


(lib.hero3_top_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.hero3_top1_img();
	this.instance.setTransform(140.7,-169.3);

	this.instance_1 = new lib.hero3_top2_img();
	this.instance_1.setTransform(180.8,-159.8);

	this.instance_2 = new lib.hero3_top3_img();
	this.instance_2.setTransform(180.8,-159.7);

	this.instance_3 = new lib.hero3_top4_img();
	this.instance_3.setTransform(176.7,-159.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(140.7,-169.3,132,168);
p.frameBounds = [rect, new cjs.Rectangle(180.8,-159.8,57,54), new cjs.Rectangle(180.8,-159.7,74,58), new cjs.Rectangle(176.7,-159.7,82,71), null];


(lib.hero3_shoes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_shoes1_img();
	this.instance.setTransform(102.8,136.3);

	this.instance_1 = new lib.hero3_shoes2_img();
	this.instance_1.setTransform(104.2,145.4);

	this.instance_2 = new lib.hero3_shoes3_img();
	this.instance_2.setTransform(102.8,136.3);

	this.instance_3 = new lib.hero3_shoes4_img();
	this.instance_3.setTransform(106.8,169.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(102.8,136.3,185,111);
p.frameBounds = [rect, new cjs.Rectangle(104.2,145.4,185,100), new cjs.Rectangle(102.8,136.3,185,111), new cjs.Rectangle(106.8,169.2,183,84), null];


(lib.hero3_shadows_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_shadows1_img();
	this.instance.setTransform(-90.2,-24.6);

	this.instance_1 = new lib.hero3_shadows2_img();
	this.instance_1.setTransform(-91,-28.6);

	this.instance_2 = new lib.hero3_shadows3_img();
	this.instance_2.setTransform(-90.2,-24.6);

	this.instance_3 = new lib.hero3_shadows4_img();
	this.instance_3.setTransform(-90.2,-24.6);

	this.instance_4 = new lib.hero3_shadows5_img();
	this.instance_4.setTransform(-90.2,-24.6);

	this.instance_5 = new lib.hero3_shadows6_img();
	this.instance_5.setTransform(-90.2,-24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.2,-24.6,184,54);
p.frameBounds = [rect, new cjs.Rectangle(-91,-28.6,186,58), rect=new cjs.Rectangle(-90.2,-24.6,184,54), rect, rect, rect, null];


(lib.hero3_rouge_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_rouge1_img();
	this.instance.setTransform(-95.5,-45.8);

	this.instance_1 = new lib.hero3_rouge2_img();
	this.instance_1.setTransform(-95.5,-45.8);

	this.instance_2 = new lib.hero3_rouge3_img();
	this.instance_2.setTransform(-132.5,-49.6);

	this.instance_3 = new lib.hero3_rouge4_img();
	this.instance_3.setTransform(-95.5,-46.1);

	this.instance_4 = new lib.hero3_rouge5_img();
	this.instance_4.setTransform(-95.5,-45.8);

	this.instance_5 = new lib.hero3_rouge6_img();
	this.instance_5.setTransform(-95.5,-45.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.5,-45.8,191,92);
p.frameBounds = [rect, rect, new cjs.Rectangle(-132.5,-49.6,265,95), new cjs.Rectangle(-95.5,-46.1,191,92), rect=new cjs.Rectangle(-95.5,-45.8,191,92), rect, null];


(lib.hero3_lips_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_lips1_img();
	this.instance.setTransform(-38,-19.5);

	this.instance_1 = new lib.hero3_lips2_img();
	this.instance_1.setTransform(-38,-19.5);

	this.instance_2 = new lib.hero3_lips3_img();
	this.instance_2.setTransform(-38,-19.5);

	this.instance_3 = new lib.hero3_lips4_img();
	this.instance_3.setTransform(-38,-19.5);

	this.instance_4 = new lib.hero3_lips5_img();
	this.instance_4.setTransform(-38,-19.5);

	this.instance_5 = new lib.hero3_lips6_img();
	this.instance_5.setTransform(-38,-19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-19.5,76,39);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero3_head1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_head1_img();
	this.instance.setTransform(-149,-179.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-149,-179.5,303,359);
p.frameBounds = [rect];


(lib.hero3_hair_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero3_hair1_img();
	this.instance.setTransform(-80.5,-58.5);

	this.instance_1 = new lib.hero3_hair2_img();
	this.instance_1.setTransform(-36.2,-13.8);

	this.instance_2 = new lib.hero3_hair3_img();
	this.instance_2.setTransform(-65.3,-21.4);

	this.instance_3 = new lib.hero3_hair4_img();
	this.instance_3.setTransform(-41.2,-23.4);

	this.instance_4 = new lib.hero3_hair5_img();
	this.instance_4.setTransform(-89.8,-68.2);

	this.instance_5 = new lib.hero3_hair6_img();
	this.instance_5.setTransform(-52.1,-22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.5,-58.5,165,154);
p.frameBounds = [rect, new cjs.Rectangle(-36.2,-13.8,69,160), new cjs.Rectangle(-65.3,-21.4,133,203), new cjs.Rectangle(-41.2,-23.4,87,137), new cjs.Rectangle(-89.8,-68.2,173,233), new cjs.Rectangle(-52.1,-22.8,95,102)];


(lib.hero3_fringe_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_fringe1_img();
	this.instance.setTransform(-41.4,-34.4);

	this.instance_1 = new lib.hero3_fringe2_img();
	this.instance_1.setTransform(-48.2,-31);

	this.instance_2 = new lib.hero3_fringe3_img();
	this.instance_2.setTransform(-50.9,-31);

	this.instance_3 = new lib.hero3_fringe4_img();
	this.instance_3.setTransform(-52.5,-41);

	this.instance_4 = new lib.hero3_fringe5_img();
	this.instance_4.setTransform(-41.7,-34.5);

	this.instance_5 = new lib.hero3_fringe6_img();
	this.instance_5.setTransform(-58.6,-35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.4,-34.4,83,69);
p.frameBounds = [rect, new cjs.Rectangle(-48.2,-31,98,182), new cjs.Rectangle(-50.9,-31,107,107), new cjs.Rectangle(-52.5,-41,108,165), new cjs.Rectangle(-41.7,-34.5,82,71), new cjs.Rectangle(-58.6,-35,107,281)];


(lib.hero3_eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.hero3_eyes1_img();
	this.instance.setTransform(-110.7,-24.9);

	this.instance_1 = new lib.hero3_eyes2_img();
	this.instance_1.setTransform(-110.7,-24.9);

	this.instance_2 = new lib.hero3_eyes3_img();
	this.instance_2.setTransform(-110.7,-24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},31).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.7,-24.9,220,51);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero3_dress_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.hero3_dress1_img();
	this.instance.setTransform(146.3,-162.7);

	this.instance_1 = new lib.hero3_dress2_img();
	this.instance_1.setTransform(145.7,-164.8);

	this.instance_2 = new lib.hero3_dress3_img();
	this.instance_2.setTransform(130.7,-161);

	this.instance_3 = new lib.hero3_dress4_img();
	this.instance_3.setTransform(140.3,-160.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(146.3,-162.7,112,168);
p.frameBounds = [rect, new cjs.Rectangle(145.7,-164.8,116,171), new cjs.Rectangle(130.7,-161,143,193), new cjs.Rectangle(140.3,-160.1,106,163), null];


(lib.hero3_bottom_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero3_bottom1_img();
	this.instance.setTransform(145.3,-91.8);

	this.instance_1 = new lib.hero3_bottom2_img();
	this.instance_1.setTransform(130.3,-85.3);

	this.instance_2 = new lib.hero3_bottom3_img();
	this.instance_2.setTransform(74.3,-93.3);

	this.instance_3 = new lib.hero3_bottom4_img();
	this.instance_3.setTransform(123.3,-79.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(145.3,-91.8,87,92);
p.frameBounds = [rect, new cjs.Rectangle(130.3,-85.3,117,91), new cjs.Rectangle(74.3,-93.3,232,152), new cjs.Rectangle(123.3,-79.3,130,117), null];


(lib.hero3_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_body_img();
	this.instance.setTransform(-104.1,-213);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.1,-213,208,426);
p.frameBounds = [rect];


(lib.hero3_accessory_all3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory6_img();
	this.instance.setTransform(-49,-22);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, new cjs.Rectangle(-49,-22,87,61), null];


(lib.hero3_accessory_all2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory4_img();
	this.instance.setTransform(-52,-55);

	this.instance_1 = new lib.hero3_accessory5_img();
	this.instance_1.setTransform(-14,-55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52,-55,104,110);
p.frameBounds = [rect, new cjs.Rectangle(-14,-55,54,118), rect=null, rect];


(lib.hero3_accessory_all1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory1_img();
	this.instance.setTransform(-44,-16.5);

	this.instance_1 = new lib.hero3_accessory2_img();
	this.instance_1.setTransform(-47,-43.5);

	this.instance_2 = new lib.hero3_accessory3_img();
	this.instance_2.setTransform(-83,-38.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44,-16.5,86,33);
p.frameBounds = [rect, new cjs.Rectangle(-47,-43.5,91,54), new cjs.Rectangle(-83,-38.5,168,63), null];


(lib.hero2_top_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AweLFIAA2JIdCAAIAAE2ID7AAIAARTgAkyhpIA6B2QEMipATg8QABgogUAAQgzAAkTCXg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:114.5,y:4.1}).wait(4).to({graphics:null,x:0,y:0}).wait(1));

	// топ
	this.instance = new lib.hero2_top1_img();
	this.instance.setTransform(107.4,-57.2);

	this.instance_1 = new lib.hero2_top2_img();
	this.instance_1.setTransform(105.9,-33.5);

	this.instance_2 = new lib.hero2_top3_img();
	this.instance_2.setTransform(105,-56.9);

	this.instance_3 = new lib.hero2_top4_img();
	this.instance_3.setTransform(110,-55.9);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(107.4,-57.2,52,52);
p.frameBounds = [rect, new cjs.Rectangle(105.9,-33.5,54,44), new cjs.Rectangle(105,-56.9,55,63), new cjs.Rectangle(110,-55.9,49,69), null];


(lib.hero2_shoes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// обувь
	this.instance = new lib.hero2_shoes1_img();
	this.instance.setTransform(20.1,271.3);

	this.instance_1 = new lib.hero2_shoes2_img();
	this.instance_1.setTransform(12.5,263.8);

	this.instance_2 = new lib.hero2_shoes3_img();
	this.instance_2.setTransform(17.2,277.1);

	this.instance_3 = new lib.hero2_shoes4_img();
	this.instance_3.setTransform(20,284.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(20.1,271.3,149,102);
p.frameBounds = [rect, new cjs.Rectangle(12.5,263.8,152,107), new cjs.Rectangle(17.2,277.1,150,91), new cjs.Rectangle(20,284.3,143,84), null];


(lib.hero2_shadows_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_shadows1_img();
	this.instance.setTransform(-90.2,-24.6);

	this.instance_1 = new lib.hero2_shadows2_img();
	this.instance_1.setTransform(-90.2,-24.6);

	this.instance_2 = new lib.hero2_shadows3_img();
	this.instance_2.setTransform(-90.2,-24.6);

	this.instance_3 = new lib.hero2_shadows4_img();
	this.instance_3.setTransform(-90.2,-24.6);

	this.instance_4 = new lib.hero2_shadows5_img();
	this.instance_4.setTransform(-90.2,-24.6);

	this.instance_5 = new lib.hero2_shadows6_img();
	this.instance_5.setTransform(-90.2,-24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.2,-24.6,184,54);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_rouge_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_rouge1_img();
	this.instance.setTransform(-95.5,-45.8);

	this.instance_1 = new lib.hero2_rouge2_img();
	this.instance_1.setTransform(-95.5,-45.8);

	this.instance_2 = new lib.hero2_rouge3_img();
	this.instance_2.setTransform(-95.5,-45.8);

	this.instance_3 = new lib.hero2_rouge4_img();
	this.instance_3.setTransform(-95.5,-45.8);

	this.instance_4 = new lib.hero2_rouge5_img();
	this.instance_4.setTransform(-95.5,-45.8);

	this.instance_5 = new lib.hero2_rouge6_img();
	this.instance_5.setTransform(-95.5,-45.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.5,-45.8,191,92);
p.frameBounds = [rect, rect, rect, rect, rect, rect, null];


(lib.hero2_nose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_nose_img();
	this.instance.setTransform(-12.9,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.9,-14,25,29);
p.frameBounds = [rect];


(lib.hero2_lips_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips1_img();
	this.instance.setTransform(-38,-19.5);

	this.instance_1 = new lib.hero2_lips2_img();
	this.instance_1.setTransform(-38,-19.5);

	this.instance_2 = new lib.hero2_lips3_img();
	this.instance_2.setTransform(-38,-19.5);

	this.instance_3 = new lib.hero2_lips4_img();
	this.instance_3.setTransform(-38,-19.5);

	this.instance_4 = new lib.hero2_lips5_img();
	this.instance_4.setTransform(-38,-19.5);

	this.instance_5 = new lib.hero2_lips6_img();
	this.instance_5.setTransform(-38,-19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-19.5,76,39);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero2_head1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_head1_img();
	this.instance.setTransform(-161,-159);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-161,-159,322,318);
p.frameBounds = [rect];


(lib.hero2_hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hand_img();
	this.instance.setTransform(-15.1,-25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15.1,-25.9,30,52);
p.frameBounds = [rect];


(lib.hero2_hair_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero2_hair1_img();
	this.instance.setTransform(-19,-114.2);

	this.instance_1 = new lib.hero2_hair2_img();
	this.instance_1.setTransform(-38.8,-98.2);

	this.instance_2 = new lib.hero2_hair3_img();
	this.instance_2.setTransform(-25.9,-96.2);

	this.instance_3 = new lib.hero2_hair5_img();
	this.instance_3.setTransform(-35.6,-104.9);

	this.instance_4 = new lib.hero2_hair6_img();
	this.instance_4.setTransform(-42.5,-110.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19,-114.2,69,157);
p.frameBounds = [rect, new cjs.Rectangle(-38.8,-98.2,104,134), new cjs.Rectangle(-25.9,-96.2,81,89), null, new cjs.Rectangle(-35.6,-104.9,105,90), new cjs.Rectangle(-42.5,-110.4,100,118)];


(lib.hero2_fringe_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe1_img();
	this.instance.setTransform(-57,-123.7);

	this.instance_1 = new lib.hero2_fringe2_img();
	this.instance_1.setTransform(-59.2,-122.1);

	this.instance_2 = new lib.hero2_fringe3_img();
	this.instance_2.setTransform(-34.5,-120.2);

	this.instance_3 = new lib.hero2_fringe4_img();
	this.instance_3.setTransform(-27,-145.8);

	this.instance_4 = new lib.hero2_fringe5_img();
	this.instance_4.setTransform(-53.3,-144.4);

	this.instance_5 = new lib.hero2_fringe6_img();
	this.instance_5.setTransform(-47,-119.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57,-123.7,117,248);
p.frameBounds = [rect, new cjs.Rectangle(-59.2,-122.1,149,172), new cjs.Rectangle(-34.5,-120.2,102,228), new cjs.Rectangle(-27,-145.8,84,102), new cjs.Rectangle(-53.3,-144.4,134,143), new cjs.Rectangle(-47,-119.3,105,135)];


(lib.hero2_eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.hero2_eyes1_img();
	this.instance.setTransform(-111.4,-24.6);

	this.instance_1 = new lib.hero2_eyes2_img();
	this.instance_1.setTransform(-111.4,-24.6);

	this.instance_2 = new lib.hero2_eyes3_img();
	this.instance_2.setTransform(-111.4,-24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},31).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.4,-24.6,220,51);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero2_dress_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgQeAgpMAAAhBRIdCAAIAAE2ID7AAMAAAA8bgAky3NIA6B4QEMirATg8QABgogUAAQgzAAkTCXg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:114.5,y:142.1}).wait(4).to({graphics:null,x:0,y:0}).wait(1));

	// платье
	this.instance = new lib.hero2_dress1_img();
	this.instance.setTransform(109.1,-56.7);

	this.instance_1 = new lib.hero2_dress2_img();
	this.instance_1.setTransform(104.9,-57.3);

	this.instance_2 = new lib.hero2_dress3_img();
	this.instance_2.setTransform(75.8,-58.7);

	this.instance_3 = new lib.hero2_dress4_img();
	this.instance_3.setTransform(107.2,-57.2);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(109.1,-56.7,75,160);
p.frameBounds = [rect, new cjs.Rectangle(104.9,-57.3,82,174), new cjs.Rectangle(75.8,-58.7,108,164), new cjs.Rectangle(107.2,-57.2,76,162), null];


(lib.hero2_bottom_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// низ
	this.instance = new lib.hero2_bottom1_img();
	this.instance.setTransform(42.7,27);

	this.instance_1 = new lib.hero2_bottom2_img();
	this.instance_1.setTransform(91.2,19.8);

	this.instance_2 = new lib.hero2_bottom3_img();
	this.instance_2.setTransform(112.3,26.3);

	this.instance_3 = new lib.hero2_bottom4_img();
	this.instance_3.setTransform(113.4,31.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(42.7,27,143,265);
p.frameBounds = [rect, new cjs.Rectangle(91.2,19.8,119,119), new cjs.Rectangle(112.3,26.3,71,80), new cjs.Rectangle(113.4,31.6,70,69), null];


(lib.hero2_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_body_img();
	this.instance.setTransform(-83.7,-219.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.7,-219.7,168,439);
p.frameBounds = [rect];


(lib.hero2_accessory_all3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory4_img();
	this.instance.setTransform(-43,-42.5);

	this.instance_1 = new lib.hero2_accessory5_img();
	this.instance_1.setTransform(-46.4,-46.5);

	this.instance_2 = new lib.hero2_accessory6_img();
	this.instance_2.setTransform(-35.9,-44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43,-42.5,86,85);
p.frameBounds = [rect, new cjs.Rectangle(-46.4,-46.5,95,104), new cjs.Rectangle(-35.9,-44,68,127), null];


(lib.hero2_accessory_all2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory3_img();
	this.instance.setTransform(-36.5,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36.5,-14.5,73,29);
p.frameBounds = [rect, null];


(lib.hero2_accessory_all1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory1_img();
	this.instance.setTransform(-42.5,-26.5);

	this.instance_1 = new lib.hero2_accessory2_img();
	this.instance_1.setTransform(-55,-31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.5,-26.5,85,53);
p.frameBounds = [rect, new cjs.Rectangle(-55,-31.5,102,54), null];


(lib.hero1_top_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// топ
	this.instance = new lib.hero1_top1_img();
	this.instance.setTransform(165.5,-77.2);

	this.instance_1 = new lib.hero1_top2_img();
	this.instance_1.setTransform(186.2,-78.5);

	this.instance_2 = new lib.hero1_top3_img();
	this.instance_2.setTransform(178.2,-77);

	this.instance_3 = new lib.hero1_top4_img();
	this.instance_3.setTransform(163.7,-80.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(165.5,-77.2,85,70);
p.frameBounds = [rect, new cjs.Rectangle(186.2,-78.5,56,66), new cjs.Rectangle(178.2,-77,63,79), new cjs.Rectangle(163.7,-80.2,90,73), null];


(lib.hero1_shoes_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// обувь
	this.instance = new lib.hero1_shoes1_img();
	this.instance.setTransform(87.3,71.3);

	this.instance_1 = new lib.hero1_shoes2_img();
	this.instance_1.setTransform(93.3,70.7);

	this.instance_2 = new lib.hero1_shoes3_img();
	this.instance_2.setTransform(91.7,71.6);

	this.instance_3 = new lib.hero1_shoes4_img();
	this.instance_3.setTransform(93,74.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(87.3,71.3,143,271);
p.frameBounds = [rect, new cjs.Rectangle(93.3,70.7,120,265), new cjs.Rectangle(91.7,71.6,121,268), new cjs.Rectangle(93,74.9,118,260), null];


(lib.hero1_shadows_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_shadows1_img();
	this.instance.setTransform(-90.2,-24.6);

	this.instance_1 = new lib.hero1_shadows2_img();
	this.instance_1.setTransform(-90.2,-24.6);

	this.instance_2 = new lib.hero1_shadows3_img();
	this.instance_2.setTransform(-90.2,-24.6);

	this.instance_3 = new lib.hero1_shadows4_img();
	this.instance_3.setTransform(-90.2,-24.6);

	this.instance_4 = new lib.hero1_shadows5_img();
	this.instance_4.setTransform(-90.2,-24.6);

	this.instance_5 = new lib.hero1_shadows6_img();
	this.instance_5.setTransform(-91,-28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.2,-24.6,184,54);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(-91,-28.6,186,58), null];


(lib.hero1_rouge_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_rouge1_img();
	this.instance.setTransform(-95.5,-45.8);

	this.instance_1 = new lib.hero1_rouge2_img();
	this.instance_1.setTransform(-95.5,-45.8);

	this.instance_2 = new lib.hero1_rouge3_img();
	this.instance_2.setTransform(-95.5,-46.7);

	this.instance_3 = new lib.hero1_rouge4_img();
	this.instance_3.setTransform(-95.5,-45.8);

	this.instance_4 = new lib.hero1_rouge5_img();
	this.instance_4.setTransform(-95.5,-45.8);

	this.instance_5 = new lib.hero1_rouge6_img();
	this.instance_5.setTransform(-95.5,-45.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95.5,-45.8,191,92);
p.frameBounds = [rect, rect, new cjs.Rectangle(-95.5,-46.7,191,93), rect=new cjs.Rectangle(-95.5,-45.8,191,92), rect, rect, null];


(lib.hero1_nose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_nose_img();
	this.instance.setTransform(-12.6,-14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.6,-14.3,25,29);
p.frameBounds = [rect];


(lib.hero1_lips_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_lips_1_img();
	this.instance.setTransform(-38,-19.5);

	this.instance_1 = new lib.hero1_lips_2_img();
	this.instance_1.setTransform(-38,-19.5);

	this.instance_2 = new lib.hero1_lips_3_img();
	this.instance_2.setTransform(-38,-19.5);

	this.instance_3 = new lib.hero1_lips_4_img();
	this.instance_3.setTransform(-38,-19.5);

	this.instance_4 = new lib.hero1_lips_5_img();
	this.instance_4.setTransform(-38,-19.5);

	this.instance_5 = new lib.hero1_lips_6_img();
	this.instance_5.setTransform(-38,-19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38,-19.5,76,39);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.hero1_head1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_head1_img();
	this.instance.setTransform(-145,-164);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-164,290,330);
p.frameBounds = [rect];


(lib.hero1_hair_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-29.2,-106.2);

	this.instance_1 = new lib.hero1_hair2_img();
	this.instance_1.setTransform(-27.7,-103.9);

	this.instance_2 = new lib.hero1_hair4_img();
	this.instance_2.setTransform(-25.7,-124.3);

	this.instance_3 = new lib.hero1_hair5_img();
	this.instance_3.setTransform(-28.9,-103.1);

	this.instance_4 = new lib.hero1_hair6_img();
	this.instance_4.setTransform(-43.8,-114);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.2,-106.2,87,113);
p.frameBounds = [rect, new cjs.Rectangle(-27.7,-103.9,87,84), null, new cjs.Rectangle(-25.7,-124.3,122,217), new cjs.Rectangle(-28.9,-103.1,86,79), new cjs.Rectangle(-43.8,-114,139,289)];


(lib.hero1_fringe_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_fringe1_img();
	this.instance.setTransform(-57.9,-124.5);

	this.instance_1 = new lib.hero1_fringe2_img();
	this.instance_1.setTransform(-29.2,-121.3);

	this.instance_2 = new lib.hero1_fringe3_img();
	this.instance_2.setTransform(-32.1,-154.1);

	this.instance_3 = new lib.hero1_fringe4_img();
	this.instance_3.setTransform(-46.5,-121.9);

	this.instance_4 = new lib.hero1_fringe5_img();
	this.instance_4.setTransform(-35.3,-137);

	this.instance_5 = new lib.hero1_fringe6_img();
	this.instance_5.setTransform(-38.1,-134.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.9,-124.5,127,247);
p.frameBounds = [rect, new cjs.Rectangle(-29.2,-121.3,90,210), new cjs.Rectangle(-32.1,-154.1,93,157), new cjs.Rectangle(-46.5,-121.9,144,236), new cjs.Rectangle(-35.3,-137,105,114), new cjs.Rectangle(-38.1,-134.3,121,139)];


(lib.hero1_eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.hero1_eyes1_img();
	this.instance.setTransform(-110.9,-25);

	this.instance_1 = new lib.hero1_eyes2_img();
	this.instance_1.setTransform(-111,-25);

	this.instance_2 = new lib.hero1_eyes3_img();
	this.instance_2.setTransform(-111,-25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},31).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110.9,-25,220,51);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-111,-25,220,51), rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-110.9,-25,220,51), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero1_dress_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// платье
	this.instance = new lib.hero1_dress1_img();
	this.instance.setTransform(79.3,-81);

	this.instance_1 = new lib.hero1_dress2_img();
	this.instance_1.setTransform(149.8,-79.7);

	this.instance_2 = new lib.hero1_dress3_img();
	this.instance_2.setTransform(151.8,-77.7);

	this.instance_3 = new lib.hero1_dress4_img();
	this.instance_3.setTransform(119.9,-82.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(79.3,-81,193,227);
p.frameBounds = [rect, new cjs.Rectangle(149.8,-79.7,104,147), new cjs.Rectangle(151.8,-77.7,90,147), new cjs.Rectangle(119.9,-82.5,126,165), null];


(lib.hero1_bottom_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// низ
	this.instance = new lib.hero1_bottom1_img();
	this.instance.setTransform(120.9,-10);

	this.instance_1 = new lib.hero1_bottom2_img();
	this.instance_1.setTransform(151.8,-9.2);

	this.instance_2 = new lib.hero1_bottom3_img();
	this.instance_2.setTransform(151.9,-6);

	this.instance_3 = new lib.hero1_bottom4_img();
	this.instance_3.setTransform(150.9,-9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(120.9,-10,124,96);
p.frameBounds = [rect, new cjs.Rectangle(151.8,-9.2,71,65), new cjs.Rectangle(151.9,-6,73,77), new cjs.Rectangle(150.9,-9.5,72,48), null];


(lib.hero1_accessory_all2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory3_img();
	this.instance.setTransform(-15.5,-25);

	this.instance_1 = new lib.hero1_accessory4_img();
	this.instance_1.setTransform(-29,13.5);

	this.instance_2 = new lib.hero1_accessory5_img();
	this.instance_2.setTransform(-44,13.5);

	this.instance_3 = new lib.hero1_accessory6_img();
	this.instance_3.setTransform(-27,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15.5,-25,31,50);
p.frameBounds = [rect, new cjs.Rectangle(-29,13.5,62,82), new cjs.Rectangle(-44,13.5,74,91), new cjs.Rectangle(-27,13.5,60,99), null];


(lib.hero1_accessory_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory1_img();
	this.instance.setTransform(-38.5,-14);

	this.instance_1 = new lib.hero1_accessory2_img();
	this.instance_1.setTransform(-36,-13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.5,-14,77,28);
p.frameBounds = [rect, new cjs.Rectangle(-36,-13.5,72,31), null];


(lib.headdress_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory3_img();
	this.instance.setTransform(-84,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AniF6IlthnIg7i9ILWnOIHEgBIJ7IJIgiCWIkxBUg");
	this.shape.setTransform(-0.9,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.6,-37.7,181.5,75.7);
p.frameBounds = [rect];


(lib.headdress_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_accessory3_img();
	this.instance.setTransform(-39,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzD6IAAnzIPnAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-25,100,50);
p.frameBounds = [rect];


(lib.headdress_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory2_img();
	this.instance.setTransform(-45.5,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmRE2IihmTID2jgINvgGIhBKHg");
	this.shape.setTransform(-0.6,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.9,-33.7,112.8,64.9);
p.frameBounds = [rect];


(lib.headdress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory2_img();
	this.instance.setTransform(-51,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXHCIAAuDISvAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-45,120,90);
p.frameBounds = [rect];


(lib.headdress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory2_img();
	this.instance.setTransform(-36,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzErIAApWIPnAAIAAJWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-30,100,60);
p.frameBounds = [rect];


(lib.headdress_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_accessory2_img();
	this.instance.setTransform(-40,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzD6IAAnzIPnAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-25,100,50);
p.frameBounds = [rect];


(lib.headdress_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory1_img();
	this.instance.setTransform(-43,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzETIAAolIPnAAIAAIlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-27.5,100,55);
p.frameBounds = [rect];


(lib.headdress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory1_img();
	this.instance.setTransform(-42.5,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzFeIAAq7IPnAAIAAK7g");
	this.shape.setTransform(-0.5,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.5,-36.5,100,70);
p.frameBounds = [rect];


(lib.headdress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory1_img();
	this.instance.setTransform(-38.5,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzErIAApWIPnAAIAAJWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-30,100,60);
p.frameBounds = [rect];


(lib.hanger2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hanger2_img();
	this.instance.setTransform(-46.8,-31.6,0.461,0.461);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.8,-31.6,88.9,50.7);
p.frameBounds = [rect];


(lib.hanger = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hanger_img();
	this.instance.setTransform(-46.8,-31.6,0.461,0.461);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.8,-31.6,88.9,50.7);
p.frameBounds = [rect];


(lib.h2_d0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgQeAgpMAAAhBRIdCAAIAAE2ID7AAMAAAA8bgAky3NIA6B4QEMirATg8QABgogUAAQgzAAkTCXg");
	mask.setTransform(114.5,142.1);

	// платье
	this.instance = new lib.hero2_dress4_img();
	this.instance.setTransform(107.2,-57.2);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(107.2,-57.2,76,162);
p.frameBounds = [rect];


(lib.glasses_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory3_img();
	this.instance.setTransform(-36.5,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzErIAApVIPnAAIAAJVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-30,100,60);
p.frameBounds = [rect];


(lib.eyebrow4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrow4_img();
	this.instance.setTransform(-41.4,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.4,-17.5,83,35);
p.frameBounds = [rect];


(lib.eyebrow3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrow3_img();
	this.instance.setTransform(-41.4,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.4,-17.5,83,35);
p.frameBounds = [rect];


(lib.eyebrow2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrow2_img();
	this.instance.setTransform(-41.4,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.4,-17.5,83,35);
p.frameBounds = [rect];


(lib.eyebrow1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eyebrow1_img();
	this.instance.setTransform(-41.4,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.4,-17.5,83,35);
p.frameBounds = [rect];


(lib.body1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_body1_img();
	this.instance.setTransform(-115,-218);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-218,230,436);
p.frameBounds = [rect];


(lib.body_pointer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body_pointer_img();
	this.instance.setTransform(-55,-55,0.916,0.916);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.body_check_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_img();
	this.instance.setTransform(-70,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.blush_6_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_22_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokIlIAAxJIRJAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.blush_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_9_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokIlIAAxJIRJAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.blush_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_10_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokIlIAAxJIRJAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.blush_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_9_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokIlIAAxJIRJAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.blush_5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_26_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokIlIAAxJIRJAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.blush_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_16_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokIlIAAxJIRJAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.blush_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_21_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokIlIAAxJIRJAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.blush_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_4_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokIlIAAxJIRJAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.blush_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_24_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokIlIAAxJIRJAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.blush_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_26_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokIlIAAxJIRJAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.blush_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_4_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokIlIAAxJIRJAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.blush_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_21_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokIlIAAxJIRJAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.blush_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_9_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokIlIAAxJIRJAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.blush_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_28_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokIlIAAxJIRJAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.blush_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_16_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokIlIAAxJIRJAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.blush_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_28_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokIlIAAxJIRJAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.blush_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_21_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokIlIAAxJIRJAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.blush_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_21_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokIlIAAxJIRJAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.blush_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_28_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokIlIAAxJIRJAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.blush_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_1_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokIlIAAxJIRJAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.blush_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_3_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokIlIAAxJIRJAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.blush_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_3_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokIlIAAxJIRJAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.blush_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_3_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokIlIAAxJIRJAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.blush_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_3_img();
	this.instance.setTransform(-50,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokIlIAAxJIRJAAIAARJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect];


(lib.animation_rubbing_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_rubbing_2_img();
	this.instance.setTransform(-40,-50);

	this.instance_1 = new lib.animation_rubbing_3_img();
	this.instance_1.setTransform(-40,-50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-50,80,100);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_rubbing_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.animation_rubbing_1_img();
	this.instance.setTransform(-90,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-50,180,100);
p.frameBounds = [rect];


(lib.accessory_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_accessory6_img();
	this.instance.setTransform(-35,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ag/N/Ilt8VIDVgFIKEXJIgyCtIkBDBg");
	this.shape.setTransform(-0.7,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.7,-91,85.9,185);
p.frameBounds = [rect];


(lib.accessory_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory6_img();
	this.instance.setTransform(-30,-49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlhiIICambICfgHIEBGCICJJfIkuBxIl7ADg");
	this.shape.setTransform(1.7,-2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33.7,-57.7,70.9,111.1);
p.frameBounds = [rect];


(lib.accessory_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_accessory5_img();
	this.instance.setTransform(-20,-54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqJYIAAyuIJVAAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-60,60,120);
p.frameBounds = [rect];


(lib.accessory_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory6_img();
	this.instance.setTransform(-35,-24,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnSh2IB5jSIK4AAIB0DlIlRGfIlBANg");
	this.shape.setTransform(-1.6,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.3,-32.5,93.5,65.9);
p.frameBounds = [rect];


(lib.accessory_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory6_img();
	this.instance.setTransform(-27,-51,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AleATIDkpaIDKgGIDrIkIAkJHIqRAwg");
	this.shape.setTransform(0,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.1,-60.7,70.4,118.1);
p.frameBounds = [rect];


(lib.accessory_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory5_img();
	this.instance.setTransform(-37,-45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmmDKIAUkQIDmm8IDlgSIFuH1IgRE3IiPC6IoIBDg");
	this.shape.setTransform(-0.1,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.5,-53.7,84.8,106.7);
p.frameBounds = [rect];


(lib.accessory_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_accessory4_img();
	this.instance.setTransform(-20.5,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqKJIAA0RIJVAAIAAURg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-65,60,130);
p.frameBounds = [rect];


(lib.accessory_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory5_img();
	this.instance.setTransform(-22,-47,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlGGZIBfvEIEpgeIEFOTIhJC1InbBLg");
	this.shape.setTransform(0.7,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.1,-57.8,65.6,117.4);
p.frameBounds = [rect];


(lib.accessory_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory5_img();
	this.instance.setTransform(-38,-42,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnSBKIEAoVIEUgnIGRG6IhOGxIqpB6g");
	this.shape.setTransform(1.9,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.9,-49.7,93.6,99.8);
p.frameBounds = [rect];


(lib.accessory_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory4_img();
	this.instance.setTransform(-31,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AluFiIBZsiIEBglIGDJVIgWDjIoyCTg");
	this.shape.setTransform(0.1,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36.6,-47.9,73.6,97.4);
p.frameBounds = [rect];


(lib.accessory_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_accessory1_img();
	this.instance.setTransform(-16,-36,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkSHBIAAuCIIlAAIAAOCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27.5,-45,55,90);
p.frameBounds = [rect];


(lib.accessory_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_accessory4_img();
	this.instance.setTransform(-42,-44,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlmHtIiMoSIGMnRID3ADIFiHlIiBIFg");
	this.shape.setTransform(-0.6,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.6,-50.1,100,100.8);
p.frameBounds = [rect];


(lib.accessory_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_accessory4_img();
	this.instance.setTransform(-34,-34,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmchgIDJkkIEEgiIEBDtIBrHXIr2CJg");
	this.shape.setTransform(1,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40.3,-43.2,82.7,84.8);
p.frameBounds = [rect];


(lib.accessory_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_accessory3_img();
	this.instance.setTransform(-15.5,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkqGPIAAsdIJVAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-40,60,80);
p.frameBounds = [rect];


(lib.curtain_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_2_img();
	this.instance.setTransform(-350,-280);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,-280,700,560);
p.frameBounds = [rect];


(lib.curtain_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,600);
p.frameBounds = [rect];


(lib.copyright_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.copyright_img();
	this.instance.setTransform(-250,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-250,-150,500,300);
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


(lib.track_move_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.track_move_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.sound_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.sound_1_img();
	this.instance.setTransform(-35,-35);

	this.instance_1 = new lib.sound_2_img();
	this.instance_1.setTransform(-35,-35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect, rect];


(lib.skip_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.skip_img();
	this.instance.setTransform(-140,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-60,280,120);
p.frameBounds = [rect];


(lib.remove_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.remove_1_img();
	this.instance.setTransform(-35,-35,0.583,0.583);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(5,2,0,3).p("AAAAAIBQBQABQhPIhQBPAhPBQIBPhQIhPhP");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect, null];


(lib.play_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_img();
	this.instance.setTransform(-140,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-60,280,120);
p.frameBounds = [rect];


(lib.play_again_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_again_img();
	this.instance.setTransform(-140,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-60,280,120);
p.frameBounds = [rect];


(lib.photo_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_img();
	this.instance.setTransform(-140,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-60,280,120);
p.frameBounds = [rect];


(lib.next_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_img();
	this.instance.setTransform(-140,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-60,280,120);
p.frameBounds = [rect];


(lib.next_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_2_img();
	this.instance.setTransform(-140,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-60,280,120);
p.frameBounds = [rect];


(lib.nav_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nav_2_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.nav_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nav_1_img();
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.more_games_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_img();
	this.instance.setTransform(-140,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-60,280,120);
p.frameBounds = [rect];


(lib.more_games_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.more_games_3_2_img();
	this.instance.setTransform(-5,-11,0.36,0.36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-11,30.3,30.3);
p.frameBounds = [rect];


(lib.more_games_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.more_games_2_2_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,100,137);
p.frameBounds = [rect];


(lib.logo_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo_2_img();
	this.instance.setTransform(-75,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-250,150,500);
p.frameBounds = [rect];


(lib.logo_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.logo_1_img();
	this.instance.setTransform(-190,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-90,380,180);
p.frameBounds = [rect];


(lib.instruction_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.instruction_img();
	this.instance.setTransform(-140,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-60,280,120);
p.frameBounds = [rect];


(lib.full_screen_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.full_screen_1_img();
	this.instance.setTransform(-35,-35);

	this.instance_1 = new lib.full_screen_2_img();
	this.instance_1.setTransform(-35,-35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect, rect];


(lib.facebook_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.facebook_img();
	this.instance.setTransform(-100,-42,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.81,scaleY:0.81,x:-105,y:-44},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:-100,y:-42},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:-105,y:-44},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-42,200,84.6);
p.frameBounds = [rect, new cjs.Rectangle(-105,-44,210,88.9), new cjs.Rectangle(-100,-42,200,84.6), new cjs.Rectangle(-105,-44,210,88.9)];


(lib.Cursor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"default":0});

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,153,0,0.008)").s().p("Aj2D3QhnhnAAiQQAAiPBnhnQBnhnCPAAQCQAABnBnQBnBnAACPQAACQhnBnQhnBniQAAQiPAAhnhng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect];


(lib.credits_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.credits_img();
	this.instance.setTransform(-140,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-60,280,120);
p.frameBounds = [rect];


(lib.banner_body_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pic
	this.instance = new lib.banner_2_img();
	this.instance.setTransform(-210,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.banner_body_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pic
	this.instance = new lib.banner_1_img();
	this.instance.setTransform(-210,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,420);
p.frameBounds = [rect];


(lib.body_title_antiblocking_ads_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

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


(lib.redirect_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// image_1
	this.instance = new lib.redirect_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({alpha:0},10).wait(70).to({alpha:1},10).wait(1));

	// image_2
	this.instance_1 = new lib.redirect_2_mc();
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({alpha:1},10).wait(30).to({alpha:0},10).wait(41));

	// image_3
	this.instance_2 = new lib.redirect_3_mc();
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(69).to({alpha:1},10).wait(30).to({alpha:0},10).wait(1));

	// area
	this.instance_3 = new lib.redirect_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120));

	// shadow
	this.instance_4 = new lib.redirect_6_mc();
	this.instance_4.setTransform(5,5);
	this.instance_4.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-120,325,245);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.play_redirect_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_redirect_mc();
	this.instance.setTransform(0,0,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.83,scaleY:0.83},0).wait(1).to({scaleX:0.78,scaleY:0.78,alpha:0.801},0).wait(1).to({scaleX:0.83,scaleY:0.83,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, new cjs.Rectangle(-75,-75,150,150), new cjs.Rectangle(-70,-70,140,140), new cjs.Rectangle(-75,-75,150,150)];


(lib.cancel_redirect_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.cancel_redirect_mc();
	this.instance.setTransform(0,0,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.83,scaleY:0.83,alpha:0.801},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-50,200,100);
p.frameBounds = [rect, new cjs.Rectangle(-105,-52.5,210,105), new cjs.Rectangle(-100,-50,200,100), new cjs.Rectangle(-105,-52.5,210,105)];


(lib.preloader_33_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.preloader_32_mc();

	this.instance_1 = new lib.preloader_32_mc();

	this.instance_2 = new lib.preloader_32_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{x:0}}]},9).to({state:[{t:this.instance_1,p:{x:0}},{t:this.instance,p:{x:8}}]},10).to({state:[{t:this.instance_2},{t:this.instance_1,p:{x:8}},{t:this.instance,p:{x:16}}]},10).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-2.5,-2.5,5,5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-2.5,-2.5,13,5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-2.5,-2.5,21,5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preloader_31_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.preloader_30_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// animation
	this.instance_1 = new lib.preloader_33_mc();
	this.instance_1.setTransform(62,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53,-9,106.1,18);
p.frameBounds = [rect];


(lib.preloader_29_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 15
	this.instance = new lib.preloader_5_tween("synched",0);
	this.instance.setTransform(10.8,0,0.011,0.011);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({_off:false},0).to({scaleX:1.83,scaleY:1.83,x:17.9},89,cjs.Ease.get(-1)).to({alpha:0},11,cjs.Ease.get(1)).wait(1));

	// Layer 14
	this.instance_1 = new lib.preloader_5_tween("synched",0);
	this.instance_1.setTransform(10.8,0,0.011,0.011);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50).to({_off:false},0).to({scaleX:1.83,scaleY:1.83,x:17.9},89,cjs.Ease.get(-1)).to({alpha:0},11,cjs.Ease.get(1)).to({_off:true},1).wait(24));

	// Layer 13
	this.instance_2 = new lib.preloader_5_tween("synched",0);
	this.instance_2.setTransform(10.8,0,0.011,0.011);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).to({scaleX:1.83,scaleY:1.83,x:17.9},89,cjs.Ease.get(-1)).to({alpha:0},11,cjs.Ease.get(1)).to({_off:true},1).wait(51));

	// Layer 1
	this.instance_3 = new lib.preloader_5_tween("synched",0);
	this.instance_3.setTransform(10.8,0,0.011,0.011);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.83,scaleY:1.83,x:17.9},89,cjs.Ease.get(-1)).to({alpha:0},11,cjs.Ease.get(1)).to({_off:true},1).wait(74));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(6.8,-4,8,8);
p.frameBounds = [rect, new cjs.Rectangle(6.8,-4,8.1,8.1), new cjs.Rectangle(6.5,-4.3,8.6,8.6), new cjs.Rectangle(6.1,-4.7,9.4,9.4), new cjs.Rectangle(5.5,-5.3,10.6,10.6), new cjs.Rectangle(4.8,-6,12.1,12.1), new cjs.Rectangle(3.9,-6.9,13.9,13.9), new cjs.Rectangle(2.9,-8,16,16), new cjs.Rectangle(1.6,-9.2,18.5,18.5), new cjs.Rectangle(0.2,-10.6,21.3,21.3), new cjs.Rectangle(-1.3,-12.2,24.4,24.4), new cjs.Rectangle(-3,-13.9,27.9,27.9), new cjs.Rectangle(-4.8,-15.8,31.7,31.7), new cjs.Rectangle(-6.9,-17.9,35.8,35.8), new cjs.Rectangle(-9.1,-20.1,40.2,40.2), new cjs.Rectangle(-11.5,-22.5,45,45), new cjs.Rectangle(-14,-25,50.1,50.1), new cjs.Rectangle(-16.7,-27.7,55.5,55.5), new cjs.Rectangle(-19.5,-30.6,61.3,61.3), new cjs.Rectangle(-22.6,-33.7,67.4,67.4), new cjs.Rectangle(-25.7,-36.9,73.8,73.8), new cjs.Rectangle(-29,-40.2,80.5,80.5), new cjs.Rectangle(-32.5,-43.8,87.6,87.6), new cjs.Rectangle(-36.2,-47.5,95,95), new cjs.Rectangle(-40.1,-51.4,102.8,102.8), new cjs.Rectangle(-44,-55.4,110.8,110.8), new cjs.Rectangle(-48.2,-59.6,119.2,119.2), new cjs.Rectangle(-52.5,-63.9,127.9,127.9), new cjs.Rectangle(-57,-68.5,137,137), new cjs.Rectangle(-61.6,-73.1,146.3,146.3), new cjs.Rectangle(-66.3,-78,156,156), new cjs.Rectangle(-71.4,-83,166.1,166.1), new cjs.Rectangle(-76.5,-88.2,176.5,176.5), new cjs.Rectangle(-81.8,-93.6,187.2,187.2), new cjs.Rectangle(-87.2,-99.1,198.2,198.2), new cjs.Rectangle(-92.8,-104.7,209.5,209.5), new cjs.Rectangle(-98.6,-110.6,221.2,221.2), new cjs.Rectangle(-104.5,-116.6,233.2,233.2), new cjs.Rectangle(-110.7,-122.8,245.6,245.6), new cjs.Rectangle(-116.9,-129.1,258.2,258.2), new cjs.Rectangle(-123.3,-135.6,271.2,271.2), new cjs.Rectangle(-130,-142.3,284.6,284.6), new cjs.Rectangle(-136.7,-149.1,298.2,298.2), new cjs.Rectangle(-143.6,-156.1,312.2,312.2), new cjs.Rectangle(-150.7,-163.2,326.5,326.5), new cjs.Rectangle(-157.9,-170.5,341.1,341.1), new cjs.Rectangle(-165.3,-178,356.1,356.1), new cjs.Rectangle(-172.8,-185.7,371.4,371.4), new cjs.Rectangle(-180.6,-193.5,387.1,387.1), new cjs.Rectangle(-188.5,-201.5,403,403), new cjs.Rectangle(-196.6,-209.6,419.3,419.3), new cjs.Rectangle(-204.8,-217.9,435.9,435.9), new cjs.Rectangle(-213.2,-226.4,452.9,452.9), new cjs.Rectangle(-221.7,-235,470.1,470.1), new cjs.Rectangle(-230.4,-243.8,487.7,487.7), new cjs.Rectangle(-239.3,-252.8,505.7,505.7), new cjs.Rectangle(-248.3,-261.9,523.9,523.9), new cjs.Rectangle(-257.5,-271.2,542.5,542.5), new cjs.Rectangle(-266.8,-280.7,561.4,561.4), new cjs.Rectangle(-276.4,-290.3,580.7,580.7), new cjs.Rectangle(-286.1,-300.1,600.3,600.3), new cjs.Rectangle(-295.9,-310.1,620.2,620.2), new cjs.Rectangle(-305.9,-320.2,640.4,640.4), new cjs.Rectangle(-316.1,-330.5,661,661), new cjs.Rectangle(-326.4,-340.9,681.9,681.9), new cjs.Rectangle(-336.9,-351.5,703.1,703.1), new cjs.Rectangle(-347.6,-362.3,724.7,724.7), new cjs.Rectangle(-358.5,-373.3,746.6,746.6), new cjs.Rectangle(-369.4,-384.3,768.7,768.7), new cjs.Rectangle(-380.6,-395.6,791.3,791.3), new cjs.Rectangle(-391.9,-407.1,814.2,814.2), new cjs.Rectangle(-403.4,-418.7,837.4,837.4), new cjs.Rectangle(-414.9,-430.4,860.9,860.9), new cjs.Rectangle(-426.7,-442.3,884.7,884.7), new cjs.Rectangle(-438.7,-454.4,908.9,908.9), new cjs.Rectangle(-450.8,-466.7,933.5,933.5), new cjs.Rectangle(-463.1,-479.1,958.3,958.3), new cjs.Rectangle(-475.6,-491.7,983.5,983.5), new cjs.Rectangle(-488.2,-504.5,1009,1009), new cjs.Rectangle(-500.9,-517.4,1034.8,1034.8), new cjs.Rectangle(-513.9,-530.5,1061,1061), new cjs.Rectangle(-527,-543.7,1087.4,1087.4), new cjs.Rectangle(-540.2,-557.1,1114.2,1114.2), new cjs.Rectangle(-553.6,-570.7,1141.4,1141.4), new cjs.Rectangle(-567.3,-584.4,1168.9,1168.9), new cjs.Rectangle(-581,-598.3,1196.7,1196.7), new cjs.Rectangle(-594.9,-612.4,1224.8,1224.8), new cjs.Rectangle(-609,-626.6,1253.3,1253.3), new cjs.Rectangle(-623.2,-641,1282.1,1282.1), rect=new cjs.Rectangle(-637.7,-655.6,1311.2,1311.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-488.2,-504.5,1009,1009), new cjs.Rectangle(-500.9,-517.4,1034.8,1034.8), new cjs.Rectangle(-513.9,-530.5,1061,1061), new cjs.Rectangle(-527,-543.7,1087.4,1087.4), new cjs.Rectangle(-540.2,-557.1,1114.2,1114.2), new cjs.Rectangle(-553.6,-570.7,1141.4,1141.4), new cjs.Rectangle(-567.3,-584.4,1168.9,1168.9), new cjs.Rectangle(-581,-598.3,1196.7,1196.7), new cjs.Rectangle(-594.9,-612.4,1224.8,1224.8), new cjs.Rectangle(-609,-626.6,1253.3,1253.3), new cjs.Rectangle(-623.2,-641,1282.1,1282.1), rect=new cjs.Rectangle(-637.7,-655.6,1311.2,1311.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-438.7,-454.4,908.9,908.9), new cjs.Rectangle(-450.8,-466.7,933.5,933.5), new cjs.Rectangle(-463.1,-479.1,958.3,958.3), new cjs.Rectangle(-475.6,-491.7,983.5,983.5), new cjs.Rectangle(-488.2,-504.5,1009,1009), new cjs.Rectangle(-500.9,-517.4,1034.8,1034.8), new cjs.Rectangle(-513.9,-530.5,1061,1061), new cjs.Rectangle(-527,-543.7,1087.4,1087.4), new cjs.Rectangle(-540.2,-557.1,1114.2,1114.2), new cjs.Rectangle(-553.6,-570.7,1141.4,1141.4), new cjs.Rectangle(-567.3,-584.4,1168.9,1168.9), new cjs.Rectangle(-581,-598.3,1196.7,1196.7), new cjs.Rectangle(-594.9,-612.4,1224.8,1224.8), new cjs.Rectangle(-609,-626.6,1253.3,1253.3), new cjs.Rectangle(-623.2,-641,1282.1,1282.1), rect=new cjs.Rectangle(-637.7,-655.6,1311.2,1311.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-475.6,-491.7,983.5,983.5), new cjs.Rectangle(-488.2,-504.5,1009,1009), new cjs.Rectangle(-500.9,-517.4,1034.8,1034.8), new cjs.Rectangle(-513.9,-530.5,1061,1061), new cjs.Rectangle(-527,-543.7,1087.4,1087.4), new cjs.Rectangle(-540.2,-557.1,1114.2,1114.2), new cjs.Rectangle(-553.6,-570.7,1141.4,1141.4), new cjs.Rectangle(-567.3,-584.4,1168.9,1168.9), new cjs.Rectangle(-581,-598.3,1196.7,1196.7), new cjs.Rectangle(-594.9,-612.4,1224.8,1224.8), new cjs.Rectangle(-609,-626.6,1253.3,1253.3), new cjs.Rectangle(-623.2,-641,1282.1,1282.1), rect=new cjs.Rectangle(-637.7,-655.6,1311.2,1311.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preloader_28_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.preloader_27_mc();
	this.instance.setTransform(11.5,11.5,1,1,0,0,0,11.5,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.39,scaleY:0.39},19).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,23,23);
p.frameBounds = [rect, new cjs.Rectangle(0.4,0.4,22.3,22.3), new cjs.Rectangle(0.8,0.8,21.6,21.6), new cjs.Rectangle(1.2,1.2,20.8,20.8), new cjs.Rectangle(1.5,1.5,20.1,20.1), new cjs.Rectangle(1.9,1.9,19.3,19.3), new cjs.Rectangle(2.3,2.3,18.6,18.6), new cjs.Rectangle(2.6,2.6,17.8,17.8), new cjs.Rectangle(3,3,17.1,17.1), new cjs.Rectangle(3.4,3.4,16.3,16.3), new cjs.Rectangle(3.7,3.7,15.7,15.7), new cjs.Rectangle(4.1,4.1,14.9,14.9), new cjs.Rectangle(4.5,4.5,14.2,14.2), new cjs.Rectangle(4.8,4.8,13.4,13.4), new cjs.Rectangle(5.2,5.2,12.7,12.7), new cjs.Rectangle(5.6,5.6,12,12), new cjs.Rectangle(5.9,5.9,11.2,11.2), new cjs.Rectangle(6.3,6.3,10.5,10.5), new cjs.Rectangle(6.7,6.7,9.7,9.7), rect=new cjs.Rectangle(7,7,9,9), rect, rect, rect, rect, rect];


(lib.preloader_26_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.preloader_25_mc();
	this.instance.setTransform(18,18,1,1,0,0,0,18,18);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:18.6,regY:19.1,rotation:174,x:17.3,y:17,alpha:0},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,36,36);
p.frameBounds = [rect, new cjs.Rectangle(0.2,0.2,35.7,35.7), new cjs.Rectangle(0.6,0.6,34.9,34.9), new cjs.Rectangle(1.3,1.3,33.5,33.5), new cjs.Rectangle(2.2,2.3,31.5,31.5), new cjs.Rectangle(3.4,3.4,29.1,29.1), new cjs.Rectangle(4.8,4.8,26.1,26.1), new cjs.Rectangle(3.9,3.9,27.8,27.8), new cjs.Rectangle(2.5,2.5,30.5,30.5), new cjs.Rectangle(1.4,1.5,32.7,32.7), new cjs.Rectangle(0.5,0.6,34.3,34.3), new cjs.Rectangle(0,0,35.4,35.4), rect=new cjs.Rectangle(-0.4,-0.4,35.9,35.9), rect, new cjs.Rectangle(-0.1,-0.2,35.3,35.3), new cjs.Rectangle(0.4,0.4,34.1,34.1), new cjs.Rectangle(1.3,1.2,32.4,32.3), new cjs.Rectangle(2.4,2.3,30.1,30.1), new cjs.Rectangle(3.8,3.6,27.4,27.4), new cjs.Rectangle(4.1,3.9,26.6,26.6), new cjs.Rectangle(2.7,2.4,29.4,29.4), new cjs.Rectangle(1.4,1.3,31.8,31.8), new cjs.Rectangle(0.5,0.3,33.7,33.7), new cjs.Rectangle(-0.2,-0.5,35,35), new cjs.Rectangle(-1.7,-1.8,39.6,39.6)];


(lib.preloader_22_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.preloader_23_mc();
	this.instance.setTransform(1.6,2.6,0.235,0.235,0,0,0,4.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:4.2,scaleX:0.87,scaleY:0.87,rotation:157.5,x:2.3,y:3.3,alpha:0.607},0).wait(1).to({scaleX:1.32,scaleY:1.32,rotation:270,x:2.8,y:3.9,alpha:0.326},0).wait(1).to({scaleX:1.59,scaleY:1.59,rotation:337.5,x:3,y:4.2,alpha:0.158},0).wait(1).to({regX:4.3,scaleX:1.68,scaleY:1.68,rotation:360,x:3.2,y:4.4,alpha:0.102},0).wait(1).to({regX:4.2,scaleX:1.05,scaleY:1.05,x:2.8,y:4.1,alpha:0.079},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:2.6,y:3.8,alpha:0.063},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:2.5,y:3.7,alpha:0.054},0).wait(1).to({regX:4.3,scaleX:0.24,scaleY:0.24,y:3.6,alpha:0.051},0).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.6,1.6,2,2);
p.frameBounds = [rect, new cjs.Rectangle(-1.5,-0.5,7.4,7.5), new cjs.Rectangle(-2.8,-1.8,11.2,11.3), new cjs.Rectangle(-3.7,-2.6,13.6,13.6), new cjs.Rectangle(-4.1,-2.9,14.3,14.3), new cjs.Rectangle(-1.6,-0.5,8.9,9), new cjs.Rectangle(0.2,1.2,5.1,5.1), new cjs.Rectangle(1.3,2.3,2.8,2.8), rect=new cjs.Rectangle(1.5,2.6,2,2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preloader_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preloader_18_mc();
	this.instance.setTransform(976,300,0.96,1,0,0,0,25,300);

	this.instance_1 = new lib.preloader_18_mc();
	this.instance_1.setTransform(880,300,0.96,1,0,0,0,25,300);

	this.instance_2 = new lib.preloader_18_mc();
	this.instance_2.setTransform(784,300,0.96,1,0,0,0,25,300);

	this.instance_3 = new lib.preloader_18_mc();
	this.instance_3.setTransform(688,300,0.96,1,0,0,0,25,300);

	this.instance_4 = new lib.preloader_18_mc();
	this.instance_4.setTransform(592,300,0.96,1,0,0,0,25,300);

	this.instance_5 = new lib.preloader_18_mc();
	this.instance_5.setTransform(496,300,0.96,1,0,0,0,25,300);

	this.instance_6 = new lib.preloader_18_mc();
	this.instance_6.setTransform(400,300,0.96,1,0,0,0,25,300);

	this.instance_7 = new lib.preloader_18_mc();
	this.instance_7.setTransform(304,300,0.96,1,0,0,0,25,300);

	this.instance_8 = new lib.preloader_18_mc();
	this.instance_8.setTransform(208,300,0.96,1,0,0,0,25,300);

	this.instance_9 = new lib.preloader_18_mc();
	this.instance_9.setTransform(112,300,0.96,1,0,0,0,25,300);

	this.instance_10 = new lib.preloader_18_mc();
	this.instance_10.setTransform(16,300,0.96,1,0,0,0,25,300);

	this.instance_11 = new lib.preloader_18_mc();
	this.instance_11.setTransform(-80,300,0.96,1,0,0,0,25,300);

	this.instance_12 = new lib.preloader_18_mc();
	this.instance_12.setTransform(-176,300,0.96,1,0,0,0,25,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.preloader_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preloader_19_mc();
	this.instance.setTransform(25,300,1,1,0,0,0,25,300);
	this.instance.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.preloader_16_mc();
	this.instance_1.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.preloader_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnzkrIPnAAQApABAmAKQAmALAiATQAhAUAcAbQAbAcAUAhQATAiALAmQAKAmABAoIAAAAQgBApgKAmQgLAmgTAiQgUAhgbAcQgcAbghAUQgiATgmALQgmAKgpABIvnAAQg+gBg2gXQg3gXgpgpQgpgpgXg3QgXg2gBg+IAAAAQABgoAKgmQALgmATgiQAUghAbgcQAcgbAhgUQAigTAmgLQAmgKApgBg");

	// animation
	this.instance = new lib.preloader_15_mc();
	this.instance.setTransform(-200,0,1,1,45);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:200},29).wait(71));

	// graph
	this.instance_1 = new lib.preloader_11_mc();

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// graph
	this.instance_2 = new lib.preloader_9_mc();

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

	// shadow
	this.instance_3 = new lib.preloader_14_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-40,180,80);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preloader_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.preloader_31_mc();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},98).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAUCWIgUgVIgSAVI0zAAQg+AAgsgsQgsgsAAg+QAAg9AsgsQAsgsA+AAIUzAAIASAVIATgVIUzAAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAg");

	// shadow
	this.instance_1 = new lib.preloader_6_mc();
	this.instance_1.setTransform(0,0,1,1,0,0,0,150,15);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// band
	this.instance_2 = new lib.preloader_5_mc();
	this.instance_2.setTransform(-300,0,1,1,0,0,0,150,15);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:0},99).wait(1));

	// bg
	this.instance_3 = new lib.preloader_4_mc();
	this.instance_3.setTransform(-4,-4,1,1,0,0,0,146,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100));

	// bg
	this.instance_4 = new lib.preloader_2_mc();
	this.instance_4.setTransform(0,0,1,1,0,0,0,150,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100));

	// bg
	this.instance_5 = new lib.preloader_7_mc();
	this.instance_5.setTransform(0,0,1,1,0,0,0,150,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-25,320,50);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.orientation_lock_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.orientation_lock_8_mc();
	this.instance.setTransform(70,0);

	this.instance_1 = new lib.orientation_lock_6_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-10,130,20);
p.frameBounds = [rect];


(lib.title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.title_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(149).to({scaleX:0.94,scaleY:0.94,alpha:0.801},10).to({scaleX:1,scaleY:1,alpha:1},10).to({scaleX:0.97,scaleY:0.97,alpha:0.801},10).to({scaleX:1,scaleY:1,alpha:1},10).wait(1));

	// animation
	this.instance_1 = new lib.title_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(109).to({rotation:10},10).to({rotation:-10},10).to({rotation:0},10).wait(51));

	// animation
	this.instance_2 = new lib.title_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({scaleX:0.94,scaleY:0.94,alpha:0.801},10).to({scaleX:1,scaleY:1,alpha:1},10).to({scaleX:0.97,scaleY:0.97,alpha:0.801},10).to({scaleX:1,scaleY:1,alpha:1},10).wait(91));

	// animation
	this.instance_3 = new lib.title_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(190));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-170,360,340);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-182.9,-173.1,365.9,346.3), new cjs.Rectangle(-185.7,-176.1,371.6,352.3), new cjs.Rectangle(-188.6,-179.1,377.3,358.3), new cjs.Rectangle(-191.3,-182.1,382.8,364.2), new cjs.Rectangle(-194,-184.9,388.2,370), new cjs.Rectangle(-196.7,-187.8,393.5,375.7), new cjs.Rectangle(-199.3,-190.6,398.6,381.2), new cjs.Rectangle(-201.8,-193.3,403.7,386.7), new cjs.Rectangle(-204.2,-195.9,408.6,392), new cjs.Rectangle(-206.7,-198.6,413.5,397.3), new cjs.Rectangle(-201.7,-193.3,403.6,386.6), new cjs.Rectangle(-196.7,-187.8,393.5,375.7), new cjs.Rectangle(-191.3,-182,382.8,364.2), new cjs.Rectangle(-185.7,-176.1,371.6,352.3), new cjs.Rectangle(-180,-170,360.1,340.1), new cjs.Rectangle(-185.7,-176.1,371.6,352.3), new cjs.Rectangle(-191.3,-182,382.8,364.2), new cjs.Rectangle(-196.7,-187.7,393.5,375.6), new cjs.Rectangle(-201.8,-193.3,403.6,386.6), new cjs.Rectangle(-206.7,-198.6,413.5,397.3), new cjs.Rectangle(-204.2,-195.9,408.6,392), new cjs.Rectangle(-201.8,-193.3,403.6,386.6), new cjs.Rectangle(-199.2,-190.5,398.6,381.2), new cjs.Rectangle(-196.7,-187.8,393.5,375.7), new cjs.Rectangle(-194,-184.9,388.2,370), new cjs.Rectangle(-191.3,-182,382.8,364.2), new cjs.Rectangle(-188.6,-179.1,377.3,358.3), new cjs.Rectangle(-185.7,-176.1,371.6,352.3), new cjs.Rectangle(-182.9,-173.1,365.9,346.2), rect=new cjs.Rectangle(-180,-170,360,340), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.shoes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,-0.1,0.514,0.514,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.shadows_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.657,0.657,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23,-23,46,46);
p.frameBounds = [rect];


(lib.pointer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.body_pointer_mc();
	this.instance.cache(-57,-57,114,114);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.14,scaleY:1.14,x:10},9).to({scaleX:1,scaleY:1,x:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-55,110,110);
p.frameBounds = [rect, new cjs.Rectangle(-54.7,-55.8,111.7,111.7), new cjs.Rectangle(-54.4,-56.7,113.5,113.5), new cjs.Rectangle(-54.2,-57.6,115.2,115.2), new cjs.Rectangle(-54,-58.4,117,117), new cjs.Rectangle(-53.7,-59.3,118.7,118.7), new cjs.Rectangle(-53.5,-60.2,120.5,120.5), new cjs.Rectangle(-53.3,-61.1,122.2,122.2), new cjs.Rectangle(-53,-61.9,124,124), new cjs.Rectangle(-52.8,-62.8,125.7,125.7), new cjs.Rectangle(-52.9,-62.3,124.7,124.7), new cjs.Rectangle(-53.1,-61.8,123.6,123.6), new cjs.Rectangle(-53.3,-61.2,122.6,122.6), new cjs.Rectangle(-53.4,-60.7,121.5,121.5), new cjs.Rectangle(-53.5,-60.2,120.5,120.5), new cjs.Rectangle(-53.7,-59.7,119.4,119.4), new cjs.Rectangle(-53.8,-59.1,118.4,118.4), new cjs.Rectangle(-54,-58.6,117.3,117.3), new cjs.Rectangle(-54.2,-58.1,116.3,116.3), new cjs.Rectangle(-54.3,-57.6,115.2,115.2), new cjs.Rectangle(-54.4,-57,114.2,114.2), new cjs.Rectangle(-54.6,-56.5,113.1,113.1), new cjs.Rectangle(-54.7,-56,112.1,112.1), new cjs.Rectangle(-54.9,-55.5,111,111), new cjs.Rectangle(-55,-55,110,110)];


(lib.hero4_top4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_top4_img();
	this.instance.setTransform(-14,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14,-124.2,93,98.3);
p.frameBounds = [rect];


(lib.hero4_top3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_top3_img();
	this.instance.setTransform(-14,-101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14,-124.2,92,95.3);
p.frameBounds = [rect];


(lib.hero4_top2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_top2_img();
	this.instance.setTransform(5.5,-105.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.1,-124.2,89,93.5);
p.frameBounds = [rect];


(lib.hero4_top1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_top1_img();
	this.instance.setTransform(-15.5,-100.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15.5,-124.2,94,103.5);
p.frameBounds = [rect];


(lib.hero4_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero4_accessory1_img();
	this.instance.setTransform(58.5,-180.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero4_accessory2_img();
	this.instance_1.setTransform(-55.6,-248.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.hero4_fringe1_img();
	this.instance_2.setTransform(-81.6,-269.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hero4_eyes();
	this.instance_3.setTransform(-15.8,-202.3,0.339,0.339);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.hero4_lips1_img();
	this.instance_4.setTransform(-28.5,-175.1,0.339,0.339);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.eyebrow4();
	this.instance_5.setTransform(-36.6,-212.2,0.323,0.339,0,0.7,-175.6);

	this.instance_6 = new lib.eyebrow4();
	this.instance_6.setTransform(2.7,-212.9,0.339,0.339);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// graph
	this.instance_7 = new lib.hero4_shadows5_img();
	this.instance_7.setTransform(-46.5,-210.3,0.339,0.339);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// graph
	this.instance_8 = new lib.hero4_head1();
	this.instance_8.setTransform(-14.2,-213.5,0.34,0.34);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// graph
	this.instance_9 = new lib.hero4_top4_img();
	this.instance_9.setTransform(-58.9,-148.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// graph
	this.instance_10 = new lib.hero4_bottom4_img();
	this.instance_10.setTransform(-63.8,-67.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// graph
	this.instance_11 = new lib.hero4_shoes4_img();
	this.instance_11.setTransform(-70.8,186.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// graph
	this.instance_12 = new lib.hero4_body();
	this.instance_12.setTransform(-9.3,50.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// graph
	this.instance_13 = new lib.tale();
	this.instance_13.setTransform(16.7,74.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// graph
	this.instance_14 = new lib.hero4_hair1_img();
	this.instance_14.setTransform(-67.8,-246.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.1,-274.6,228.5,552.1);
p.frameBounds = [rect];


(lib.hero4_dress4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_dress4_img();
	this.instance.setTransform(-32.5,-105.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-124.2,137,187.5);
p.frameBounds = [rect];


(lib.hero4_dress3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_dress3_img();
	this.instance.setTransform(-53.5,-116.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.5,-124.2,160,238.5);
p.frameBounds = [rect];


(lib.hero4_dress2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_dress2_img();
	this.instance.setTransform(-20.5,-99.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20.5,-124.2,98.3,202.5);
p.frameBounds = [rect];


(lib.hero4_dress1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_dress1_img();
	this.instance.setTransform(-30.5,-99.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.5,-124.2,108.3,209.5);
p.frameBounds = [rect];


(lib.hero4_bottom4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_bottom4_img();
	this.instance.setTransform(-10.5,-99.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.1,-124.2,89,111.5);
p.frameBounds = [rect];


(lib.hero4_bottom3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_bottom3_img();
	this.instance.setTransform(-10.5,-99.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.1,-124.2,89,117.5);
p.frameBounds = [rect];


(lib.hero4_bottom2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_bottom2_img();
	this.instance.setTransform(-10.5,-99.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.1,-124.2,89,108.5);
p.frameBounds = [rect];


(lib.hero4_bottom1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero4_bottom1_img();
	this.instance.setTransform(-10.5,-99.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.1,-124.2,89,114.5);
p.frameBounds = [rect];


(lib.hero3_top4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_top4_img();
	this.instance.setTransform(-3,-98.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.1,-124.2,90.2,96.5);
p.frameBounds = [rect];


(lib.hero3_top3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_top3_img();
	this.instance.setTransform(1,-99.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.1,-124.2,89,82.5);
p.frameBounds = [rect];


(lib.hero3_top2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_top2_img();
	this.instance.setTransform(1,-99.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.1,-124.2,89,78.5);
p.frameBounds = [rect];


(lib.hero3_top1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_top1_img();
	this.instance.setTransform(-41.5,-107.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.5,-124.2,132,184.5);
p.frameBounds = [rect];


(lib.hero3_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_accessory5_img();
	this.instance.setTransform(68,35.3);

	this.instance_1 = new lib.hero3_accessory1_img();
	this.instance_1.setTransform(-25.6,-248.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_2 = new lib.hero3_fringe4_img();
	this.instance_2.setTransform(-33.8,-263.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hero3_eyes();
	this.instance_3.setTransform(18.1,-191.4,0.342,0.342);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.hero3_lips6_img();
	this.instance_4.setTransform(5.2,-164,0.342,0.342);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.eyebrow1();
	this.instance_5.setTransform(-2.9,-201.4,0.326,0.342,0,0.7,-175.6);

	this.instance_6 = new lib.eyebrow1();
	this.instance_6.setTransform(36.7,-202.1,0.342,0.342);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// graph
	this.instance_7 = new lib.hero3_shadows2_img();
	this.instance_7.setTransform(-12.9,-199.4,0.342,0.342);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// graph
	this.instance_8 = new lib.hero3_head1();
	this.instance_8.setTransform(19.6,-202.3,0.34,0.34);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// graph
	this.instance_9 = new lib.hero3_dress3_img();
	this.instance_9.setTransform(-59.8,-133.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// graph
	this.instance_10 = new lib.hero3_shoes3_img();
	this.instance_10.setTransform(-90.3,163.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// graph
	this.instance_11 = new lib.hero3_body();
	this.instance_11.setTransform(0,51);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// graph
	this.instance_12 = new lib.hero3_hair4_img();
	this.instance_12.setTransform(-22.6,-246);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.1,-263.5,226.1,538);
p.frameBounds = [rect];


(lib.hero3_dress4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_dress4_img();
	this.instance.setTransform(-39.5,-98.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.5,-124.2,117.4,188.5);
p.frameBounds = [rect];


(lib.hero3_dress3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_dress3_img();
	this.instance.setTransform(-47.5,-100.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.5,-124.2,143,216.5);
p.frameBounds = [rect];


(lib.hero3_dress2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_dress2_img();
	this.instance.setTransform(-34.5,-105.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.5,-124.2,116,189.5);
p.frameBounds = [rect];


(lib.hero3_dress1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_dress1_img();
	this.instance.setTransform(-34.5,-102.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.5,-124.2,112.4,189.5);
p.frameBounds = [rect];


(lib.hero3_bottom4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_bottom4_img();
	this.instance.setTransform(-35.5,-109.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.5,-124.2,130,131.5);
p.frameBounds = [rect];


(lib.hero3_bottom3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_bottom3_img();
	this.instance.setTransform(-86.5,-110.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.5,-124.2,232,165.5);
p.frameBounds = [rect];


(lib.hero3_bottom2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_bottom2_img();
	this.instance.setTransform(-28.5,-106.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.5,-124.2,117,108.5);
p.frameBounds = [rect];


(lib.hero3_bottom1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero3_bottom1_img();
	this.instance.setTransform(-14.5,-105.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-14.5,-124.2,92.4,110.5);
p.frameBounds = [rect];


(lib.hero2_top4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_top4_img();
	this.instance.setTransform(19.5,-107.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.1,-124.2,89,85.5);
p.frameBounds = [rect];


(lib.hero2_top3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_top3_img();
	this.instance.setTransform(15.5,-107.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.1,-124.2,89,79.5);
p.frameBounds = [rect];


(lib.hero2_top2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_top2_img();
	this.instance.setTransform(7.5,-98.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.1,-124.2,89,69.5);
p.frameBounds = [rect];


(lib.hero2_top1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_top1_img();
	this.instance.setTransform(18.5,-107.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.1,-124.2,89,68.5);
p.frameBounds = [rect];


(lib.hero2_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_accessory1_img();
	this.instance.setTransform(-18.7,-314.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero2_hand();
	this.instance_1.setTransform(18.4,-187.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.hero2_fringe3_img();
	this.instance_2.setTransform(-33.2,-317.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hero2_eyes();
	this.instance_3.setTransform(16.9,-253.7,0.341,0.341);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.hero2_lips4_img();
	this.instance_4.setTransform(4,-226.4,0.341,0.341);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.eyebrow3();
	this.instance_5.setTransform(-4.1,-263.7,0.324,0.341,0,0.7,-175.6);

	this.instance_6 = new lib.eyebrow3();
	this.instance_6.setTransform(35.4,-264.3,0.341,0.341);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// graph
	this.instance_7 = new lib.hero2_shadows2_img();
	this.instance_7.setTransform(-14,-261.7,0.341,0.341);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// graph
	this.instance_8 = new lib.hero2_nose();
	this.instance_8.setTransform(15.8,-233.9,0.341,0.341);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// graph
	this.instance_9 = new lib.hero2_head1();
	this.instance_9.setTransform(17.5,-257.6,0.34,0.34);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// graph
	this.instance_10 = new lib.h2_d0();
	this.instance_10.setTransform(36.1,-126.1,1,1,0,0,0,147,18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// graph
	this.instance_11 = new lib.hero2_shoes1_img();
	this.instance_11.setTransform(-90.9,126.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// graph
	this.instance_12 = new lib.hero2_body();

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// graph
	this.instance_13 = new lib.hero2_hair3_img();
	this.instance_13.setTransform(-24.6,-293.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-317.6,211,545.8);
p.frameBounds = [rect];


(lib.hero2_dress4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress4_img();
	this.instance.setTransform(17.5,-107.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.1,-124.2,104.6,178.5);
p.frameBounds = [rect];


(lib.hero2_dress3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress3_img();
	this.instance.setTransform(-18.5,-111.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18.5,-124.2,108,176.5);
p.frameBounds = [rect];


(lib.hero2_dress2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress2_img();
	this.instance.setTransform(18.5,-107.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.1,-124.2,111.6,190.5);
p.frameBounds = [rect];


(lib.hero2_dress1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_dress1_img();
	this.instance.setTransform(19.5,-106.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.1,-124.2,105.6,177.5);
p.frameBounds = [rect];


(lib.hero2_bottom4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_bottom4_img();
	this.instance.setTransform(-1.5,-104.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.1,-124.2,89,88.5);
p.frameBounds = [rect];


(lib.hero2_bottom3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_bottom3_img();
	this.instance.setTransform(-1.5,-104.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.1,-124.2,89,99.5);
p.frameBounds = [rect];


(lib.hero2_bottom2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_bottom2_img();
	this.instance.setTransform(-22.5,-105.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.5,-124.2,119,137.5);
p.frameBounds = [rect];


(lib.hero2_bottom1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero2_bottom1_img();
	this.instance.setTransform(-71.5,-107.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.5,-124.2,149.4,281.5);
p.frameBounds = [rect];


(lib.hero1_top4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_top4_img();
	this.instance.setTransform(-45.6,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(4.5,-14.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.6,-46.5,92.3,92);
p.frameBounds = [rect];


(lib.hero1_top3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_top3_img();
	this.instance.setTransform(-34.6,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger();
	this.instance_1.setTransform(4.5,-14.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.3,-46.5,88.9,102);
p.frameBounds = [rect];


(lib.hero1_top2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_top2_img();
	this.instance.setTransform(-26.6,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger();
	this.instance_1.setTransform(4.5,-14.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.3,-46.5,88.9,88);
p.frameBounds = [rect];


(lib.hero1_top1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_top1_img();
	this.instance.setTransform(-46.6,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger();
	this.instance_1.setTransform(4.5,-14.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.6,-46.5,93.3,93);
p.frameBounds = [rect];


(lib.hero1_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_accessory6_img();
	this.instance.setTransform(72.5,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero1_fringe6_img();
	this.instance_1.setTransform(-30.3,-318.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.hero1_eyes();
	this.instance_2.setTransform(23.6,-244.3,0.331,0.331);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hero1_lips_6_img();
	this.instance_3.setTransform(11,-217.8,0.331,0.331);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.eyebrow2();
	this.instance_4.setTransform(3.2,-254,0.316,0.331,0,0.7,-175.6);

	this.instance_5 = new lib.eyebrow2();
	this.instance_5.setTransform(41.6,-254.7,0.331,0.331);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// graph
	this.instance_6 = new lib.hero1_shadows4_img();
	this.instance_6.setTransform(-6.5,-252.1,0.331,0.331);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// graph
	this.instance_7 = new lib.hero1_nose();
	this.instance_7.setTransform(22.5,-225.1,0.331,0.331);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// graph
	this.instance_8 = new lib.hero1_head1();
	this.instance_8.setTransform(24.2,-247.9,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// graph
	this.instance_9 = new lib.hero1_top1_img();
	this.instance_9.setTransform(-24.4,-188);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// graph
	this.instance_10 = new lib.hero1_bottom1_img();
	this.instance_10.setTransform(-69,-120.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// graph
	this.instance_11 = new lib.hero1_shoes1_img();
	this.instance_11.setTransform(-102.6,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// graph
	this.instance_12 = new lib.body1();

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// graph
	this.instance_13 = new lib.hero1_hair6_img();
	this.instance_13.setTransform(-36,-298);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-318.2,247.5,549.8);
p.frameBounds = [rect];


(lib.hero1_dress4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress4_img();
	this.instance.setTransform(-62.5,-103.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.5,-124.2,140.3,185.5);
p.frameBounds = [rect];


(lib.hero1_dress3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress3_img();
	this.instance.setTransform(-27.5,-100.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27.5,-124.2,105.3,170.5);
p.frameBounds = [rect];


(lib.hero1_dress2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress2_img();
	this.instance.setTransform(-28.5,-102.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.5,-124.2,106.3,168.5);
p.frameBounds = [rect];


(lib.hero1_dress1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_dress1_img();
	this.instance.setTransform(-96.5,-102.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger();
	this.instance_1.setTransform(35.7,-92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.5,-124.2,193,248.5);
p.frameBounds = [rect];


(lib.hero1_bottom4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_bottom4_img();
	this.instance.setTransform(-35.6,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(4.5,-14.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.3,-46.5,88.9,67);
p.frameBounds = [rect];


(lib.hero1_bottom3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_bottom3_img();
	this.instance.setTransform(-27.6,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(4.5,-14.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.3,-46.5,88.9,96);
p.frameBounds = [rect];


(lib.hero1_bottom2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_bottom2_img();
	this.instance.setTransform(-36.6,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(4.5,-14.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.3,-46.5,88.9,84);
p.frameBounds = [rect];


(lib.hero1_bottom1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.hero1_bottom1_img();
	this.instance.setTransform(-63.6,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hanger2();
	this.instance_1.setTransform(4.5,-14.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.6,-46.5,124,116);
p.frameBounds = [rect];


(lib.hero_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.hero4_accessory_all1();
	this.accessory.setTransform(78,-135.9);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// headdress
	this.headdress = new lib.hero4_accessory_all2();
	this.headdress.setTransform(-15.6,-237.6);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// accessorySecond
	this.accessorySecond = new lib.hero4_accessory_all3();
	this.accessorySecond.setTransform(-0.8,-58.2);

	this.timeline.addTween(cjs.Tween.get(this.accessorySecond).wait(1));

	// fringe
	this.fringe = new lib.hero4_fringe_all();
	this.fringe.setTransform(-13.6,-183.1);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// body
	this.instance = new lib.hero4_eyes();
	this.instance.setTransform(-15.8,-202.3,0.339,0.339);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// lips
	this.lips = new lib.hero4_lips_all();
	this.lips.setTransform(-15.7,-168.5,0.339,0.339);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// body
	this.instance_1 = new lib.eyebrow4();
	this.instance_1.setTransform(-36.6,-212.2,0.323,0.339,0,0.7,-175.6);

	this.instance_2 = new lib.eyebrow4();
	this.instance_2.setTransform(2.7,-212.9,0.339,0.339);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// shadows
	this.shadows = new lib.hero4_shadows_all();
	this.shadows.setTransform(-15.9,-201.9,0.339,0.339);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// blush
	this.blush = new lib.hero4_rouge_all();
	this.blush.setTransform(-15.6,-181.5,0.339,0.339);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_3 = new lib.hero4_head1();
	this.instance_3.setTransform(-14.2,-213.5,0.34,0.34);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// dress
	this.dress = new lib.hero4_dress_all();
	this.dress.setTransform(-22.2,-53.8,1,1,0,0,0,146.3,14.9);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// top
	this.top = new lib.hero4_top_all();
	this.top.setTransform(-9.2,-110.8,1,1,0,0,0,159.3,-42.1);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

	// bottom
	this.bottom = new lib.hero4_bottom_all();
	this.bottom.setTransform(-24.2,-13.9,1,1,0,0,0,144.3,54.8);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1));

	// shoes
	this.shoes = new lib.hero4_shoes_all();
	this.shoes.setTransform(-37.2,230.1,1,1,0,0,0,131.3,298.8);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// body
	this.instance_4 = new lib.hero4_body();
	this.instance_4.setTransform(-9.3,50.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// body
	this.instance_5 = new lib.tale();
	this.instance_5.setTransform(16.7,74.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// hair
	this.hair = new lib.hero4_hair_all();
	this.hair.setTransform(-13.6,-183.1);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.1,-274.6,228.5,557.9);
p.frameBounds = [rect];


(lib.hero_4_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero4_fringe0_img();
	this.instance.setTransform(-227.9,-185.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.hero4_eyes();
	this.instance_1.setTransform(-4.5,33.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// lips
	this.lips = new lib.hero4_lips_all();
	this.lips.setTransform(-4.3,132.9);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// body
	this.instance_2 = new lib.eyebrow4();
	this.instance_2.setTransform(-66.1,3.9,0.953,1,0,0.7,-175.6);

	this.instance_3 = new lib.eyebrow4();
	this.instance_3.setTransform(49.9,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// shadows
	this.shadows = new lib.hero4_shadows_all();
	this.shadows.setTransform(-5,34.2);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// blush
	this.blush = new lib.hero4_rouge_all();
	this.blush.setTransform(-3.6,97.6);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_4 = new lib.hero4_head1();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// body
	this.instance_5 = new lib.hero4_b0_img();
	this.instance_5.setTransform(-140,125.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// body
	this.instance_6 = new lib.hero4_hair0_img();
	this.instance_6.setTransform(-203.7,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-227.9,-185.7,499.9,622.1);
p.frameBounds = [rect];


(lib.hero_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessorySecond
	this.accessorySecond = new lib.hero3_accessory_all3();
	this.accessorySecond.setTransform(5.2,-31.6);

	this.timeline.addTween(cjs.Tween.get(this.accessorySecond).wait(1));

	// accessory
	this.accessory = new lib.hero3_accessory_all2();
	this.accessory.setTransform(80.4,91.3);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// headdress
	this.headdress = new lib.hero3_accessory_all1();
	this.headdress.setTransform(17.4,-236);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// fringe
	this.fringe = new lib.hero3_fringe_all();
	this.fringe.setTransform(18.9,-229.2,1,1,0,0,0,0.2,-6.7);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// body
	this.instance = new lib.hero3_eyes();
	this.instance.setTransform(18.1,-191.4,0.342,0.342);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// lips
	this.lips = new lib.hero3_lips_all();
	this.lips.setTransform(18.2,-157.3,0.342,0.342);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// body
	this.instance_1 = new lib.eyebrow1();
	this.instance_1.setTransform(-2.9,-201.4,0.326,0.342,0,0.7,-175.6);

	this.instance_2 = new lib.eyebrow1();
	this.instance_2.setTransform(36.7,-202.1,0.342,0.342);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// shadows
	this.shadows = new lib.hero3_shadows_all();
	this.shadows.setTransform(17.9,-191,0.342,0.342);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// blush
	this.blush = new lib.hero3_rouge_all();
	this.blush.setTransform(17.7,-169.9,0.342,0.342);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_3 = new lib.hero3_head1();
	this.instance_3.setTransform(19.6,-202.3,0.34,0.34);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// dress
	this.dress = new lib.hero3_dress_all();
	this.dress.setTransform(11,-53.9,1,1,0,0,0,204,-81);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// top
	this.top = new lib.hero3_top_all();
	this.top.setTransform(11,-53.9,1,1,0,0,0,204,-81);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

	// bottom
	this.bottom = new lib.hero3_bottom_all();
	this.bottom.setTransform(-7.5,-17.4,1,1,0,0,0,185.5,-44.5);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1));

	// shoes
	this.shoes = new lib.hero3_shoes_all();
	this.shoes.setTransform(-1.5,217.1,1,1,0,0,0,191.5,190);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// body
	this.instance_4 = new lib.hero3_body();
	this.instance_4.setTransform(0,51);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// hair
	this.hair = new lib.hero3_hair_all();
	this.hair.setTransform(18.9,-229.2,1,1,0,0,0,0.2,-6.7);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.1,-281.1,236.5,555.5);
p.frameBounds = [rect];


(lib.hero_3_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero3_fringe0_img();
	this.instance.setTransform(-123.8,-156.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.hero3_eyes();
	this.instance_1.setTransform(-4.5,33.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// lips
	this.lips = new lib.hero3_lips_all();
	this.lips.setTransform(-4.3,132.9);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// body
	this.instance_2 = new lib.eyebrow1();
	this.instance_2.setTransform(-66.1,3.9,0.953,1,0,0.7,-175.6);

	this.instance_3 = new lib.eyebrow1();
	this.instance_3.setTransform(49.9,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// shadows
	this.shadows = new lib.hero3_shadows_all();
	this.shadows.setTransform(-5,34.2);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// blush
	this.blush = new lib.hero3_rouge_all();
	this.blush.setTransform(-3.6,97.6);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_4 = new lib.hero3_head1();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// body
	this.instance_5 = new lib.hero3_b0_img();
	this.instance_5.setTransform(-117.2,129.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// body
	this.instance_6 = new lib.hero3_hair0_img();
	this.instance_6.setTransform(-235.3,-233);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-235.3,-233,481,608.5);
p.frameBounds = [rect];


(lib.hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.hero2_accessory_all3();
	this.accessory.setTransform(79.2,-67.4);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// glasses
	this.glasses = new lib.hero2_accessory_all2();
	this.glasses.setTransform(15.3,-246.7);

	this.timeline.addTween(cjs.Tween.get(this.glasses).wait(1));

	// headdress
	this.headdress = new lib.hero2_accessory_all1();
	this.headdress.setTransform(23.8,-288.1);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// body
	this.instance = new lib.hero2_hand();
	this.instance.setTransform(18.4,-187.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fringe
	this.fringe = new lib.hero2_fringe_all();
	this.fringe.setTransform(2.8,-197.3,1,1,0,0,0,1.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// body
	this.instance_1 = new lib.hero2_eyes();
	this.instance_1.setTransform(16.9,-253.7,0.341,0.341);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// lips
	this.lips = new lib.hero2_lips_all();
	this.lips.setTransform(16.9,-219.7,0.341,0.341);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// body
	this.instance_2 = new lib.eyebrow3();
	this.instance_2.setTransform(-4.1,-263.7,0.324,0.341,0,0.7,-175.6);

	this.instance_3 = new lib.eyebrow3();
	this.instance_3.setTransform(35.4,-264.3,0.341,0.341);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// shadows
	this.shadows = new lib.hero2_shadows_all();
	this.shadows.setTransform(16.7,-253.3,0.341,0.341);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// body
	this.instance_4 = new lib.hero2_nose();
	this.instance_4.setTransform(15.8,-233.9,0.341,0.341);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// blush
	this.blush = new lib.hero2_rouge_all();
	this.blush.setTransform(17.4,-232,0.341,0.341);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_5 = new lib.hero2_head1();
	this.instance_5.setTransform(17.5,-257.6,0.34,0.34);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// dress
	this.dress = new lib.hero2_dress_all();
	this.dress.setTransform(36.1,-126.1,1,1,0,0,0,147,18.9);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// top
	this.top = new lib.hero2_top_all();
	this.top.setTransform(33.1,-179,1,1,0,0,0,144,-34);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

	// bottom
	this.bottom = new lib.hero2_bottom_all();
	this.bottom.setTransform(1.1,21,1,1,0,0,0,112,166);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1));

	// shoes
	this.shoes = new lib.hero2_shoes_all();
	this.shoes.setTransform(-18.9,170.9,1,1,0,0,0,92,315.9);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// body
	this.instance_6 = new lib.hero2_body();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// hair
	this.hair = new lib.hero2_hair_all();
	this.hair.setTransform(2.8,-197.3,1,1,0,0,0,1.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102,-321.2,224.2,549.4);
p.frameBounds = [rect];


(lib.hero_2_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero2_fringe0_img();
	this.instance.setTransform(-177.6,-150.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.hero2_hand();
	this.instance_1.setTransform(8.3,227.5,2.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// body
	this.instance_2 = new lib.hero2_eyes();
	this.instance_2.setTransform(-4.5,33.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// lips
	this.lips = new lib.hero2_lips_all();
	this.lips.setTransform(-4.3,132.9);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// body
	this.instance_3 = new lib.eyebrow3();
	this.instance_3.setTransform(-66.1,3.9,0.953,1,0,0.7,-175.6);

	this.instance_4 = new lib.eyebrow3();
	this.instance_4.setTransform(49.9,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// shadows
	this.shadows = new lib.hero2_shadows_all();
	this.shadows.setTransform(-5,34.2);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// body
	this.instance_5 = new lib.hero2_nose();
	this.instance_5.setTransform(-7.7,91.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// blush
	this.blush = new lib.hero2_rouge_all();
	this.blush.setTransform(-3.6,97.6);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_6 = new lib.hero2_head1();
	this.instance_6.setTransform(-3,20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// body
	this.instance_7 = new lib.hero2_body0_img();
	this.instance_7.setTransform(-172,146.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// body
	this.instance_8 = new lib.hero2_hair0_img();
	this.instance_8.setTransform(-161,-119.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-177.6,-150.9,355.5,593.3);
p.frameBounds = [rect];


(lib.hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// headdress
	this.headdress = new lib.hero1_accessory_all();
	this.headdress.setTransform(23.1,-240.6);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// accessory
	this.accessory = new lib.hero1_accessory_all2();
	this.accessory.setTransform(99.5,-64.5);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// fringe
	this.fringe = new lib.hero1_fringe_all();
	this.fringe.setTransform(13.5,-185.2,1,1,0,0,0,5.7,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// body
	this.instance = new lib.hero1_eyes();
	this.instance.setTransform(23.6,-244.3,0.331,0.331);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// lips
	this.lips = new lib.hero1_lips_all();
	this.lips.setTransform(23.6,-211.3,0.331,0.331);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// body
	this.instance_1 = new lib.eyebrow2();
	this.instance_1.setTransform(3.2,-254,0.316,0.331,0,0.7,-175.6);

	this.instance_2 = new lib.eyebrow2();
	this.instance_2.setTransform(41.6,-254.7,0.331,0.331);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// shadows
	this.shadows = new lib.hero1_shadows_all();
	this.shadows.setTransform(23.4,-244,0.331,0.331);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// body
	this.instance_3 = new lib.hero1_nose();
	this.instance_3.setTransform(22.5,-225.1,0.331,0.331);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// blush
	this.blush = new lib.hero1_rouge_all();
	this.blush.setTransform(23.7,-223.5,0.331,0.331,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_4 = new lib.hero1_head1();
	this.instance_4.setTransform(24.2,-247.9,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// dress
	this.dress = new lib.hero1_dress_all();
	this.dress.setTransform(0.1,-78.8,1,1,0,0,0,190,31.9);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// top
	this.top = new lib.hero1_top_all();
	this.top.setTransform(26.1,-158.8,1,1,0,0,0,216,-48.1);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

	// bottom
	this.bottom = new lib.hero1_bottom_all();
	this.bottom.setTransform(0.1,-78.8,1,1,0,0,0,190,31.9);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1));

	// shoes
	this.shoes = new lib.hero1_shoes_all();
	this.shoes.setTransform(-27.9,98.2,1,1,0,0,0,162,208.9);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// body
	this.instance_5 = new lib.body1();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// hair
	this.hair = new lib.hero1_hair_all();
	this.hair.setTransform(13.5,-185.2,1,1,0,0,0,5.7,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-308.5,230,540);
p.frameBounds = [rect];


(lib.hero_1_makeup_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.hero1_fringe0_img();
	this.instance.setTransform(-156,-264.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.instance_1 = new lib.hero1_eyes();
	this.instance_1.setTransform(-4.5,33.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// lips
	this.lips = new lib.hero1_lips_all();
	this.lips.setTransform(-4.3,132.9);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// body
	this.instance_2 = new lib.eyebrow2();
	this.instance_2.setTransform(-66.1,3.9,0.953,1,0,0.7,-175.6);

	this.instance_3 = new lib.eyebrow2();
	this.instance_3.setTransform(49.9,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// shadows
	this.shadows = new lib.hero1_shadows_all();
	this.shadows.setTransform(-5,34.2);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// body
	this.instance_4 = new lib.hero1_nose();
	this.instance_4.setTransform(-7.7,91.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// blush
	this.blush = new lib.hero1_rouge_all();
	this.blush.setTransform(-3.6,97.6);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// body
	this.instance_5 = new lib.hero1_head1();
	this.instance_5.setTransform(-3.6,20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// body
	this.instance_6 = new lib.hero1_body0_img();
	this.instance_6.setTransform(-204,116.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-204,-264.5,345.4,653.5);
p.frameBounds = [rect];


(lib.headdress_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,-0.1,0.514,0.514,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.glasses_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,-0.1,0.514,0.514,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.dress_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_dress4();
	this.instance.setTransform(-33,124.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArcGmIDkwFIFTmFIEOACIJ0MxIoxRWIqiBAg");
	this.shape.setTransform(4.6,93.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.7,-6.3,146.7,199.5);
p.frameBounds = [rect];


(lib.dress_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_dress4();
	this.instance.setTransform(33.4,124.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApmoCIGUn2IDcABIGXIrIDGVuIu4BXg");
	this.shape.setTransform(12.8,93.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.7,-8.4,123,203.5);
p.frameBounds = [rect];


(lib.dress_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress4();
	this.instance.setTransform(-32.6,124.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao7m7IFnn5IEnAAIFjIIICGOmIgdGxIrtAKg");
	this.shape.setTransform(8.8,87.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.5,-7.5,114.6,189.9);
p.frameBounds = [rect];


(lib.dress_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress4();
	this.instance.setTransform(-32.6,124.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ArqKTIJSs7IgplPIGAnUIDfAAIFOHxIjHVeIhRBFIs7ADg");
	this.shape.setTransform(-27.5,89.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.3,-7.5,149.6,194.5);
p.frameBounds = [rect];


(lib.dress_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_dress3();
	this.instance.setTransform(-33,124.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmuSnImQjpIFk8KIHKluICZAAIFmGlIFQcmImeCqg");
	this.shape.setTransform(-3.7,113.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.8,-7.4,166.3,245.9);
p.frameBounds = [rect];


(lib.dress_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_dress3();
	this.instance.setTransform(33.5,124.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnCOzIk94JIInoyIDqAAIF/JXIFvVgIpzFag");
	this.shape.setTransform(9.4,109.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.4,-7,153.7,232.3);
p.frameBounds = [rect];


(lib.dress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress3();
	this.instance.setTransform(-32.4,124.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApHnoIFYngIEvgBIHMJZIA7T8IrrA+g");
	this.shape.setTransform(3.4,88.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-8.7,116.8,194.1);
p.frameBounds = [rect];


(lib.dress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress3();
	this.instance.setTransform(-33.1,124.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApEDwID0lbIgrmZIFzmiIDrAAIFiHaIloUbIqWBYg");
	this.shape.setTransform(-8.5,87.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.6,-6,116.3,187.1);
p.frameBounds = [rect];


(lib.dress_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_dress2();
	this.instance.setTransform(-32.6,124.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoJKtIBr0vIF7m/IC5AAIFzHnIjtZmIqeA2g");
	this.shape.setTransform(-4.7,102);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.9,-7,104.4,218.2);
p.frameBounds = [rect];


(lib.dress_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_dress2();
	this.instance.setTransform(33.1,124.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApqCMIBDsyIFblpIDTgCIFqIIIDjNgIAXJ4IuEBDg");
	this.shape.setTransform(10.3,95.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.7,-9,124,208.5);
p.frameBounds = [rect];


(lib.dress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress2();
	this.instance.setTransform(-32.6,124.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjuPoIls3sIGTnvIDtAAIFrIOIDKQgIgRG5g");
	this.shape.setTransform(13.4,94.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.9,-7,120.7,202.6);
p.frameBounds = [rect];


(lib.dress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress2();
	this.instance.setTransform(-33.1,124.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao0GhICIrmIGDpZIGNAAIDRMrIkuO6Ip6BYg");
	this.shape.setTransform(-10.5,83.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.1,-9,113.1,185.5);
p.frameBounds = [rect];


(lib.dress_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_dress1();
	this.instance.setTransform(-32.6,124.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao5QaICi6CIFkn0IENgCIFhGcIgjchg");
	this.shape.setTransform(-9.8,105.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.9,-6.4,114.2,223.9);
p.frameBounds = [rect];


(lib.dress_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_dress1();
	this.instance.setTransform(33.9,124.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApdlaIAdjZIE+nbIDjgBIE9GaIExONIAPJ9ItaB7g");
	this.shape.setTransform(11,94.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.6,-9.3,121.2,208.2);
p.frameBounds = [rect];


(lib.dress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_dress1();
	this.instance.setTransform(-33.1,124.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ai5OyImA2kIG2nZICGABIFmHAIDRRGIg7GQg");
	this.shape.setTransform(8.3,91.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.7,-5.2,114.1,194.4);
p.frameBounds = [rect];


(lib.dress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_dress1();
	this.instance.setTransform(-33,124.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvPOQIgkljIOGvSIhanUIGom+IEEAAIE6IWIj8KiIHRRTIjIDSIsmCSg");
	this.shape.setTransform(-31.5,125.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-132.7,-8.2,202.5,267.3);
p.frameBounds = [rect];


(lib.bottom_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_bottom4();
	this.instance.setTransform(-32.8,124.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmZJMIgepaIGJpcICpAAIEvIbIANK6g");
	this.shape.setTransform(-1.8,55.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.8,-6,90.8,124);
p.frameBounds = [rect];


(lib.bottom_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_bottom4();
	this.instance.setTransform(34.1,124.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqwFYIB7qSIGnmKIDGgBIEpDtIFQK/IndGcIonBDg");
	this.shape.setTransform(4.9,64.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-64,-6.2,137.9,142.1);
p.frameBounds = [rect];


(lib.bottom_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bottom4();
	this.instance.setTransform(0.7,38.3,1,1,0,0,0,34,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmPhZIE8mrIDrAAIEIGCIgyJmIsNAhg");
	this.shape.setTransform(1.3,43.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.4,-8,89,103.5);
p.frameBounds = [rect];


(lib.bottom_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bottom4();
	this.instance.setTransform(-2.1,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmGFRIghkjIFgm3IC9AAIEyHSIgnFBg");
	this.shape.setTransform(-1.1,32.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.4,-6.5,89,78.9);
p.frameBounds = [rect];


(lib.bottom_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_bottom3();
	this.instance.setTransform(-32.8,124.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnIAPIFiqKIDEAAIEtGrIBYM/IvFANg");
	this.shape.setTransform(1,58.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.3,-5.5,96.8,127.4);
p.frameBounds = [rect];


(lib.bottom_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_bottom3();
	this.instance.setTransform(34,124.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjFkUIFXAAIDLGzIq5B2g");
	this.shape.setTransform(-4.8,20.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.4,-7.5,232,173);
p.frameBounds = [rect];


(lib.bottom_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bottom3();
	this.instance.setTransform(0.7,38.3,1,1,0,0,0,34,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmViFIEjnAIDjAAIElHeIgQKrIsKACg");
	this.shape.setTransform(1.5,49.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.4,-9,89,116.5);
p.frameBounds = [rect];


(lib.bottom_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bottom3();
	this.instance.setTransform(-2.1,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmTGEIgEooIEGmAIDRAAIFCHHIAWJSIhuAwg");
	this.shape.setTransform(8.1,47.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.4,-7,93.4,110);
p.frameBounds = [rect];


(lib.bottom_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_bottom2();
	this.instance.setTransform(-32.8,124.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmvAWIF8psIDfAAIEEIVIgyKWIsIACg");
	this.shape.setTransform(-3.3,53.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.6,-6,91.6,120);
p.frameBounds = [rect];


(lib.bottom_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_bottom2();
	this.instance.setTransform(33.6,124.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ap9HuICVqtIE9mlIDcgBIFzGUIDaI8IsdD7g");
	this.shape.setTransform(5.8,54.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58,-6.7,127.8,122.9);
p.frameBounds = [rect];


(lib.bottom_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bottom2();
	this.instance.setTransform(1.1,38.3,1,1,0,0,0,34,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqoHfIH5zWIFmABIHyShIkaEwIpTAdg");
	this.shape.setTransform(2.6,67.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.5,-8.4,136.3,152);
p.frameBounds = [rect];


(lib.bottom_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bottom2();
	this.instance.setTransform(-2.2,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmBCFIAUjiIEdmFIDNgCIEAHqIAFHdIqdACg");
	this.shape.setTransform(-2.4,40.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.5,-7.7,89,97.1);
p.frameBounds = [rect];


(lib.bottom_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_bottom1();
	this.instance.setTransform(-33.3,124.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnLhNIFsoUIC+ACIFtGIIg6M0IsqAFg");
	this.shape.setTransform(-2.9,56.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49,-4.3,93.5,122.2);
p.frameBounds = [rect];


(lib.bottom_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_bottom1();
	this.instance.setTransform(33.4,124.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnKjOIFJmUICfAAIGQH1IAdKgIuSAwg");
	this.shape.setTransform(4.6,56.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.4,-4.9,95.1,122.4);
p.frameBounds = [rect];


(lib.bottom_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_bottom1();
	this.instance.setTransform(0.9,38.3,1,1,0,0,0,34,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("An1W2IksjPMALggkmIFVmYIDfAAIEvIXMgD3AmYg");
	this.shape.setTransform(-33.2,140.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113.4,-9.5,160.5,299.3);
p.frameBounds = [rect];


(lib.bottom_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_bottom1();
	this.instance.setTransform(-2.3,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AjeJpInSmDIH/uEIHdgDIGFRSImrDxg");
	this.shape.setTransform(-3.4,58.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.2,-8.6,137.8,134.9);
p.frameBounds = [rect];


(lib.body_check_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.body_check_1_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.121},0).to({scaleX:1,scaleY:1,alpha:1},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, new cjs.Rectangle(-35,-35,70,70), new cjs.Rectangle(-39.3,-39.3,78.7,78.7), new cjs.Rectangle(-43.7,-43.7,87.5,87.5), new cjs.Rectangle(-48.1,-48.1,96.2,96.2), new cjs.Rectangle(-52.4,-52.4,105,105), new cjs.Rectangle(-56.8,-56.8,113.8,113.8), new cjs.Rectangle(-61.2,-61.2,122.5,122.5), new cjs.Rectangle(-65.6,-65.6,131.3,131.3), new cjs.Rectangle(-70,-70,140,140)];


(lib.blush_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.657,0.657,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23,-23,46,46);
p.frameBounds = [rect];


(lib.animation_rubbing_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.animation_rubbing_2_mc();
	this.instance.setTransform(0,25,0.8,0.8,-45,0,0,0,62.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:45},19).to({rotation:-45},20).wait(1));

	// bg
	this.instance_1 = new lib.animation_rubbing_1_mc();
	this.instance_1.cache(-92,-52,184,104);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-61.3,180,111.4);
p.frameBounds = [rect, new cjs.Rectangle(-90,-64.1,180,114.1), new cjs.Rectangle(-90,-66.5,180,116.6), new cjs.Rectangle(-90,-68.5,180,118.5), new cjs.Rectangle(-90,-69.7,180,119.8), new cjs.Rectangle(-90,-70.3,180,120.3), new cjs.Rectangle(-90,-70.2,180,120.3), new cjs.Rectangle(-90,-69.5,180,119.6), new cjs.Rectangle(-90,-68.2,180,118.2), rect=new cjs.Rectangle(-90,-66.1,180,116.2), rect, new cjs.Rectangle(-90,-68.1,180,118.2), new cjs.Rectangle(-90,-69.5,180,119.6), new cjs.Rectangle(-90,-70.2,180,120.3), new cjs.Rectangle(-90,-70.3,180,120.4), new cjs.Rectangle(-90,-69.7,180,119.8), new cjs.Rectangle(-90,-68.5,180,118.6), new cjs.Rectangle(-90,-66.6,180,116.7), new cjs.Rectangle(-90,-64.1,180,114.2), new cjs.Rectangle(-90,-61.3,180,111.4), new cjs.Rectangle(-90,-63.9,180,114), new cjs.Rectangle(-90,-66.3,180,116.4), new cjs.Rectangle(-90,-68.2,180,118.3), new cjs.Rectangle(-90,-69.5,180,119.6), new cjs.Rectangle(-90,-70.2,180,120.2), new cjs.Rectangle(-90,-70.3,180,120.4), new cjs.Rectangle(-90,-69.8,180,119.9), new cjs.Rectangle(-90,-68.8,180,118.8), new cjs.Rectangle(-90,-67.1,180,117.2), new cjs.Rectangle(-90,-64.9,180,115), new cjs.Rectangle(-90,-67.1,180,117.1), new cjs.Rectangle(-90,-68.7,180,118.8), new cjs.Rectangle(-90,-69.8,180,119.9), new cjs.Rectangle(-90,-70.3,180,120.4), new cjs.Rectangle(-90,-70.3,180,120.3), new cjs.Rectangle(-90,-69.6,180,119.6), new cjs.Rectangle(-90,-68.3,180,118.3), new cjs.Rectangle(-90,-66.5,180,116.5), new cjs.Rectangle(-90,-64.1,180,114.2), new cjs.Rectangle(-90,-61.3,180,111.4)];


(lib.accessory_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,-0.1,0.514,0.514,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.curtain_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.logo_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-90,380,180);
p.frameBounds = [rect];


(lib.curtain_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:22,end:59});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// decor
	this.instance = new lib.curtain_4_mc();
	this.instance.setTransform(600.1,299.7,0.333,0.333,0,0,0,0.1,-0.9);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({regX:-0.1,regY:-1,scaleX:1,scaleY:1,x:599.9,y:299,alpha:1},10).wait(10).to({regX:0.1,regY:-0.9,scaleX:0.33,scaleY:0.33,x:600.1,y:299.7,alpha:0.012},20).to({_off:true},1).wait(10));

	// decor
	this.instance_1 = new lib.curtain_5_mc();
	this.instance_1.setTransform(600,300);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({alpha:1},10).wait(20).to({alpha:0.012},15).to({_off:true},1).wait(10));

	// animation
	this.instance_2 = new lib.curtain_2_mc();
	this.instance_2.setTransform(-1200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:0,alpha:0.012},0).to({alpha:1},8).wait(25).to({alpha:0.012},24).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1200,0,1200,600);
p.frameBounds = [rect, rect=new cjs.Rectangle(0,0,1200,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, null];


(lib.copyright_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// animation
	this.instance = new lib.copyright_2_mc();
	this.instance.setTransform(200,200,0.6,0.6);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:0,y:0,alpha:1},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(50,110,300,180);
p.frameBounds = [rect, new cjs.Rectangle(46.3,106.8,302.5,181.5), new cjs.Rectangle(35.2,97.1,309.9,186), new cjs.Rectangle(16.7,81.1,322.2,193.4), new cjs.Rectangle(-9.3,58.6,339.5,203.7), new cjs.Rectangle(-42.6,29.7,361.7,217.1), new cjs.Rectangle(-83.3,-5.5,388.9,233.4), new cjs.Rectangle(-131.4,-47.2,421,252.6), new cjs.Rectangle(-187,-95.4,458,274.8), new cjs.Rectangle(-250,-150,500,300)];


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


(lib.skip_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.skip_mc();
	this.instance.setTransform(0,0,0.964,0.964);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Aw3JYQiEAAhehfQhehdAAiFIAAotQAAiFBeheQBeheCEAAMAhvAAAQCEAABdBeQBfBeAACFIAAItQAACFhfBdQhdBfiEAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.964,scaleY:0.964,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.964,scaleY:0.964,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-57.8,270,115.7);
p.frameBounds = [rect, new cjs.Rectangle(-140,-60,280,120), new cjs.Rectangle(-135,-57.8,270,115.7), new cjs.Rectangle(-140,-60,280,120)];


(lib.remove_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.remove_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-35,70,70);
p.frameBounds = [rect, new cjs.Rectangle(-40.8,-40.8,81.7,81.7), new cjs.Rectangle(-35,-35,70,70), new cjs.Rectangle(-40.8,-40.8,81.7,81.7)];


(lib.play_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_mc();
	this.instance.setTransform(0,0,0.964,0.964);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Aw3JYQiEAAhehfQhehdAAiFIAAotQAAiFBeheQBeheCEAAMAhvAAAQCEAABdBeQBfBeAACFIAAItQAACFhfBdQhdBfiEAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.964,scaleY:0.964,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.964,scaleY:0.964,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-57.8,270,115.7);
p.frameBounds = [rect, new cjs.Rectangle(-140,-60,280,120), new cjs.Rectangle(-135,-57.8,270,115.7), new cjs.Rectangle(-140,-60,280,120)];


(lib.play_again_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_again_mc();
	this.instance.setTransform(0,0,0.964,0.964);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Aw3JYQiEAAhehfQhehdAAiFIAAotQAAiFBeheQBeheCEAAMAhvAAAQCEAABdBeQBfBeAACFIAAItQAACFhfBdQhdBfiEAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.964,scaleY:0.964,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.964,scaleY:0.964,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-57.8,270,115.7);
p.frameBounds = [rect, new cjs.Rectangle(-140,-60,280,120), new cjs.Rectangle(-135,-57.8,270,115.7), new cjs.Rectangle(-140,-60,280,120)];


(lib.photo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_mc();
	this.instance.setTransform(0,0,0.964,0.964);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Aw3JYQiEAAhehfQhehdAAiFIAAotQAAiFBeheQBeheCEAAMAhvAAAQCEAABdBeQBfBeAACFIAAItQAACFhfBdQhdBfiEAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.964,scaleY:0.964,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.964,scaleY:0.964,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-57.8,270,115.7);
p.frameBounds = [rect, new cjs.Rectangle(-140,-60,280,120), new cjs.Rectangle(-135,-57.8,270,115.7), new cjs.Rectangle(-140,-60,280,120)];


(lib.next_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_1_mc();
	this.instance.setTransform(0,0,0.962,0.961);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AugIlQiFABheheQheheAAiEIAAnLQAAiEBeheQBehdCFAAIdBAAQCFAABdBdQBeBeABCEIAAHLQgBCEheBeQhdBeiFgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.962,scaleY:0.961,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.962,scaleY:0.961,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-134.6,-57.6,269.2,115.3);
p.frameBounds = [rect, new cjs.Rectangle(-140,-60,280,120), new cjs.Rectangle(-134.6,-57.6,269.2,115.3), new cjs.Rectangle(-125,-55,250,110)];


(lib.next_2_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_1_2_mc();
	this.instance.setTransform(0,0,0.964,0.964);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Aw3JYQiEAAhehfQhehdAAiFIAAotQAAiFBeheQBeheCEAAMAhvAAAQCEAABdBeQBfBeAACFIAAItQAACFhfBdQhdBfiEAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.964,scaleY:0.964,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.964,scaleY:0.964,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-57.8,270,115.7);
p.frameBounds = [rect, new cjs.Rectangle(-140,-60,280,120), new cjs.Rectangle(-135,-57.8,270,115.7), new cjs.Rectangle(-140,-60,280,120)];


(lib.nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({x:6},10).to({x:-6},15).to({x:0},15).wait(1));

	// bg
	this.instance_1 = new lib.nav_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-60,-60,120.6,120), new cjs.Rectangle(-60,-60,121.2,120), new cjs.Rectangle(-60,-60,121.8,120), new cjs.Rectangle(-60,-60,122.4,120), new cjs.Rectangle(-60,-60,123,120), new cjs.Rectangle(-60,-60,123.6,120), new cjs.Rectangle(-60,-60,124.2,120), new cjs.Rectangle(-60,-60,124.8,120), new cjs.Rectangle(-60,-60,125.4,120), new cjs.Rectangle(-60,-60,126,120), new cjs.Rectangle(-60,-60,125.2,120), new cjs.Rectangle(-60,-60,124.4,120), new cjs.Rectangle(-60,-60,123.6,120), new cjs.Rectangle(-60,-60,122.8,120), new cjs.Rectangle(-60,-60,122,120), new cjs.Rectangle(-60,-60,121.2,120), new cjs.Rectangle(-60,-60,120.4,120), new cjs.Rectangle(-60.4,-60,120.4,120), new cjs.Rectangle(-61.2,-60,121.2,120), new cjs.Rectangle(-62,-60,122,120), new cjs.Rectangle(-62.8,-60,122.8,120), new cjs.Rectangle(-63.6,-60,123.6,120), new cjs.Rectangle(-64.4,-60,124.4,120), new cjs.Rectangle(-65.2,-60,125.2,120), new cjs.Rectangle(-66,-60,126,120), new cjs.Rectangle(-65.6,-60,125.6,120), new cjs.Rectangle(-65.2,-60,125.2,120), new cjs.Rectangle(-64.8,-60,124.8,120), new cjs.Rectangle(-64.4,-60,124.4,120), new cjs.Rectangle(-64,-60,124,120), new cjs.Rectangle(-63.6,-60,123.6,120), new cjs.Rectangle(-63.2,-60,123.2,120), new cjs.Rectangle(-62.8,-60,122.8,120), new cjs.Rectangle(-62.4,-60,122.4,120), new cjs.Rectangle(-62,-60,122,120), new cjs.Rectangle(-61.6,-60,121.6,120), new cjs.Rectangle(-61.2,-60,121.2,120), new cjs.Rectangle(-60.8,-60,120.8,120), new cjs.Rectangle(-60.4,-60,120.4,120), new cjs.Rectangle(-60,-60,120,120)];


(lib.more_games_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_mc();
	this.instance.setTransform(0,0,0.964,0.963);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Aw3JYQiEAAhehfQhehdAAiFIAAotQAAiFBeheQBeheCEAAMAhvAAAQCEAABdBeQBfBeAACFIAAItQAACFhfBdQhdBfiEAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.964,scaleY:0.963,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:0.999,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.964,scaleY:0.963,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-57.8,270,115.6);
p.frameBounds = [rect, new cjs.Rectangle(-140,-59.9,280,119.9), new cjs.Rectangle(-135,-57.8,270,115.6), new cjs.Rectangle(-140,-60,280,120)];


(lib.more_games_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.more_games_3_2_mc();
	this.instance.setTransform(48.1,58,0.567,0.567,0,0,0,10.2,4);

	this.instance_1 = new lib.more_games_3_2_mc();
	this.instance_1.setTransform(84,76,0.567,0.567,0,0,0,10.2,4);

	this.instance_2 = new lib.more_games_3_2_mc();
	this.instance_2.setTransform(70.3,91,0.817,0.817,0,0,0,10.2,4);

	this.instance_3 = new lib.more_games_3_2_mc();
	this.instance_3.setTransform(42.8,77.5,1,1,0,0,0,10.2,4);

	this.instance_4 = new lib.more_games_3_2_mc();
	this.instance_4.setTransform(82.8,54.5,1,1,0,0,0,10.2,4);

	this.instance_5 = new lib.more_games_3_2_mc();
	this.instance_5.setTransform(48.5,55.1,0.75,0.75,0,0,0,10.2,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{scaleX:1,scaleY:1,x:82.8,y:54.5,regX:10.2}},{t:this.instance_3,p:{regX:10.2,scaleX:1,scaleY:1,x:42.8,y:77.5}},{t:this.instance_2,p:{x:70.3,y:91,scaleX:0.817,scaleY:0.817}},{t:this.instance_1,p:{x:84,y:76,scaleX:0.567,scaleY:0.567}},{t:this.instance,p:{x:48.1,y:58}}]}).to({state:[{t:this.instance_4,p:{scaleX:0.468,scaleY:0.468,x:64.3,y:69.5,regX:10.2}},{t:this.instance_3,p:{regX:10.1,scaleX:0.628,scaleY:0.628,x:72.8,y:86}},{t:this.instance_2,p:{x:50.8,y:92.8,scaleX:0.817,scaleY:0.817}},{t:this.instance_1,p:{x:85.2,y:64.3,scaleX:0.567,scaleY:0.567}},{t:this.instance,p:{x:34.1,y:74.5}}]},2).to({state:[{t:this.instance_5},{t:this.instance_4,p:{scaleX:0.378,scaleY:0.378,x:72.8,y:86,regX:10.1}},{t:this.instance_3,p:{regX:10.2,scaleX:0.453,scaleY:0.453,x:50.7,y:92.8}},{t:this.instance_2,p:{x:93,y:77.5,scaleX:0.834,scaleY:0.834}},{t:this.instance_1,p:{x:45.8,y:72,scaleX:1.016,scaleY:1.016}},{t:this.instance,p:{x:68.4,y:103.7}}]},2).to({state:[{t:this.instance_4,p:{scaleX:1,scaleY:1,x:82.8,y:54.5,regX:10.2}},{t:this.instance_3,p:{regX:10.2,scaleX:1,scaleY:1,x:42.8,y:77.5}},{t:this.instance_2,p:{x:70.3,y:91,scaleX:0.817,scaleY:0.817}},{t:this.instance_1,p:{x:84,y:76,scaleX:0.567,scaleY:0.567}},{t:this.instance,p:{x:48.1,y:58}}]},3).to({state:[{t:this.instance_4,p:{scaleX:0.468,scaleY:0.468,x:64.3,y:69.5,regX:10.2}},{t:this.instance_3,p:{regX:10.1,scaleX:0.628,scaleY:0.628,x:72.8,y:86}},{t:this.instance_2,p:{x:50.8,y:92.8,scaleX:0.817,scaleY:0.817}},{t:this.instance_1,p:{x:85.2,y:64.3,scaleX:0.567,scaleY:0.567}},{t:this.instance,p:{x:34.1,y:74.5}}]},2).to({state:[{t:this.instance_5},{t:this.instance_4,p:{scaleX:0.378,scaleY:0.378,x:72.8,y:86,regX:10.1}},{t:this.instance_3,p:{regX:10.2,scaleX:0.453,scaleY:0.453,x:50.7,y:92.8}},{t:this.instance_2,p:{x:93,y:77.5,scaleX:0.834,scaleY:0.834}},{t:this.instance_1,p:{x:45.8,y:72,scaleX:1.016,scaleY:1.016}},{t:this.instance,p:{x:68.4,y:103.7}}]},2).to({state:[{t:this.instance_4,p:{scaleX:1,scaleY:1,x:82.8,y:54.5,regX:10.2}},{t:this.instance_3,p:{regX:10.2,scaleX:1,scaleY:1,x:42.8,y:77.5}},{t:this.instance_2,p:{x:70.3,y:91,scaleX:0.817,scaleY:0.817}},{t:this.instance_1,p:{x:84,y:76,scaleX:0.567,scaleY:0.567}},{t:this.instance,p:{x:48.1,y:58}}]},3).to({state:[{t:this.instance_4,p:{scaleX:0.468,scaleY:0.468,x:64.3,y:69.5,regX:10.2}},{t:this.instance_3,p:{regX:10.1,scaleX:0.628,scaleY:0.628,x:72.8,y:86}},{t:this.instance_2,p:{x:50.8,y:92.8,scaleX:0.817,scaleY:0.817}},{t:this.instance_1,p:{x:85.2,y:64.3,scaleX:0.567,scaleY:0.567}},{t:this.instance,p:{x:34.1,y:74.5}}]},2).to({state:[{t:this.instance_5},{t:this.instance_4,p:{scaleX:0.378,scaleY:0.378,x:72.8,y:86,regX:10.1}},{t:this.instance_3,p:{regX:10.2,scaleX:0.453,scaleY:0.453,x:50.7,y:92.8}},{t:this.instance_2,p:{x:93,y:77.5,scaleX:0.834,scaleY:0.834}},{t:this.instance_1,p:{x:45.8,y:72,scaleX:1.016,scaleY:1.016}},{t:this.instance,p:{x:68.4,y:103.7}}]},2).to({state:[]},2).wait(23));

	// animation
	this.instance_6 = new lib.more_games_1_2_mc();
	this.instance_6.setTransform(105.7,131.3,0.837,0.837,75,0,0,50,68.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({rotation:-15,x:83.2,y:92.3},11,cjs.Ease.get(1)).to({rotation:75,x:105.7,y:131.3},12,cjs.Ease.get(-1)).wait(1));

	// animation
	this.instance_7 = new lib.more_games_1_2_mc();
	this.instance_7.setTransform(18.6,131.8,0.837,0.837,0,-75,105,50,68.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(19).to({regY:68.5,skewX:15,skewY:195,x:45.1,y:90.8},11,cjs.Ease.get(1)).to({regY:68.6,skewX:-75,skewY:105,x:18.6,y:131.8},12,cjs.Ease.get(-1)).wait(1));

	// graph
	this.instance_8 = new lib.more_games_1_2_img();
	this.instance_8.setTransform(27.1,51.8,0.608,0.608);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(43));

	// animation
	this.instance_9 = new lib.more_games_1_2_mc();
	this.instance_9.setTransform(73.5,51.6,0.692,0.692,-25.4,0,0,50.1,68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({regX:50,regY:68.4,rotation:-30.2,x:72.5,y:52},11,cjs.Ease.get(1)).to({regX:50.1,regY:68.5,rotation:-25.4,x:73.5,y:51.6},12,cjs.Ease.get(-1)).wait(1));

	// animation
	this.instance_10 = new lib.more_games_1_2_mc();
	this.instance_10.setTransform(44.6,53.7,0.692,0.692,0,15.5,-164.5,50.1,68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(19).to({regX:50,regY:68.4,skewX:24,skewY:-156,x:51.1,y:52.6},11,cjs.Ease.get(1)).to({regX:50.1,regY:68.5,skewX:15.5,skewY:-164.5,x:44.6,y:53.7},12,cjs.Ease.get(-1)).wait(1));

	// animation
	this.instance_11 = new lib.more_games_1_2_mc();
	this.instance_11.setTransform(29.1,59.1,0.692,0.692,0,-10.3,169.7,50.1,68.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(19).to({skewX:4.7,skewY:184.7,x:39,y:69.1},11,cjs.Ease.get(1)).to({skewX:-10.3,skewY:169.7,x:29.1,y:59.1},12,cjs.Ease.get(-1)).wait(1));

	// animation
	this.instance_12 = new lib.more_games_1_2_mc();
	this.instance_12.setTransform(18.3,75.8,0.692,0.692,0,-30,150,50,68.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(19).to({regY:68.5,skewX:-15,skewY:165,x:43.3,y:92.3},11,cjs.Ease.get(1)).to({regY:68.4,skewX:-30,skewY:150,x:18.3,y:75.8},12,cjs.Ease.get(-1)).wait(1));

	// animation
	this.instance_13 = new lib.more_games_1_2_mc();
	this.instance_13.setTransform(15.6,100.8,0.692,0.692,0,-60,120,50.1,68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(19).to({regX:50,scaleY:0.59,skewX:-15,skewY:165,x:45.1,y:99.8},11,cjs.Ease.get(1)).to({regX:50.1,scaleY:0.69,skewX:-60,skewY:120,x:15.6,y:100.8},12,cjs.Ease.get(-1)).wait(1));

	// animation
	this.instance_14 = new lib.more_games_1_2_mc();
	this.instance_14.setTransform(92.2,59.1,0.692,0.692,10.3,0,0,50.1,68.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(19).to({regY:68.5,rotation:-11.5,x:77.2,y:69.2},11,cjs.Ease.get(1)).to({regY:68.4,rotation:10.3,x:92.2,y:59.1},12,cjs.Ease.get(-1)).wait(1));

	// animation
	this.instance_15 = new lib.more_games_1_2_mc();
	this.instance_15.setTransform(102.9,75.8,0.692,0.692,30,0,0,50,68.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(19).to({regX:50.1,regY:68.3,rotation:-9,x:81.4,y:83.8},11,cjs.Ease.get(1)).to({regX:50,regY:68.4,rotation:30,x:102.9,y:75.8},12,cjs.Ease.get(-1)).wait(1));

	// animation
	this.instance_16 = new lib.more_games_1_2_mc();
	this.instance_16.setTransform(105.7,100.8,0.692,0.692,60,0,0,50.1,68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(19).to({regX:50,rotation:6.4,x:77.2,y:106.3},11,cjs.Ease.get(1)).to({regX:50.1,rotation:60,x:105.7,y:100.8},12,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.7,-6,219.7,193.2);
p.frameBounds = [rect, rect=new cjs.Rectangle(-47.6,-5.9,219.5,193), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-47.7,-6,219.7,193.2), new cjs.Rectangle(-47.5,-6.1,220,196), new cjs.Rectangle(-42.9,-6.1,211.3,194.4), new cjs.Rectangle(-35.1,-6.1,196.3,189.8), new cjs.Rectangle(-25.5,-6.1,177.7,182.7), new cjs.Rectangle(-15.5,-6.2,158.2,174.6), new cjs.Rectangle(-9.8,-6.2,143,166.8), new cjs.Rectangle(-6.7,-6.2,137.8,165.8), new cjs.Rectangle(-6.6,-6.2,141.1,164.8), new cjs.Rectangle(-8.7,-6.2,145.6,164.4), new cjs.Rectangle(-9.9,-6.2,148,164.5), new cjs.Rectangle(-10.1,-6.2,148.7,164.7), new cjs.Rectangle(-9.7,-6.2,147.8,164.5), new cjs.Rectangle(-8.9,-6.2,145.9,164.5), new cjs.Rectangle(-7.1,-6.2,142.3,164.8), new cjs.Rectangle(-6.1,-6.2,138.5,165.5), new cjs.Rectangle(-8.3,-6.2,137.8,166.6), new cjs.Rectangle(-11.7,-6.1,149.4,170.4), new cjs.Rectangle(-19.5,-6.2,166.1,178), new cjs.Rectangle(-28.7,-6.1,184,185.3), new cjs.Rectangle(-37.2,-6.1,200.4,191.2), new cjs.Rectangle(-43.8,-6.1,213,194.9), new cjs.Rectangle(-47.5,-6,220,195.8), new cjs.Rectangle(-47.7,-6,219.7,193.2)];


(lib.logo_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AH0MEQhoAhhlgZQhugbgnhSQgWAjgqAZQgoAXgwAKQgxAJgugFQgwgGgfgUQgeANguALQhCARgrgFQg8gIgYg0QgQAUgdASQgaAQghAMQhWAehTgPQhfgRgdhFQgRgmAKgoQAdh4ANh2QARiRgOhfQgjALggAAQg5gCgigoQhtBjiGArQiQAviDgjQi3gxgEhuQgDgXAJgrIAliwQhJgbgwhAQg3hHAGhYQADhPA8hKQBFhTCDg9QBUgoBigWQBsgZBiAEQDuAIBXClQBzgwBNAsQA5gnA+ABQBEAAApAwQBMg1BUgOQA9gLA4ANQA+APAnAoQAjgdA0gUQA1gUA1gFQB+gLA1BKQApgZA0gPQA2gOAzABIASgwQBehJAkgRQBEghBYAJQBHAIAoAsQApAsABBGQA0hBB5ARQBFAJAsAfQAzAkAIA9QBdAAA0A8QBKgXBQAbQBIAZApBDQAlA9ACBWQADBTgfBTQggBUg7A/QhgByiRAhIAPAwIguAsIgWAHQhbAdgjAHQhIAOg1gSQgqgQgggjIggAiIgQAAQATBjgiBnQgiBphLBFQgYAagbAVQhLA4hbAHIgZABQhOAAhFgng");

	// animation
	this.instance = new lib.logo_4_mc();
	this.instance.setTransform(-300,0,1,1,30);
	this.instance.cache(-77,-252,154,504);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:300},29).wait(71));

	// graph
	this.instance_1 = new lib.logo_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-90,380,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.instruction_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.instruction_mc();
	this.instance.setTransform(0,0,0.964,0.964);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Aw3JYQiEAAhehfQhehdAAiFIAAotQAAiFBeheQBeheCEAAMAhvAAAQCEAABdBeQBfBeAACFIAAItQAACFhfBdQhdBfiEAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.964,scaleY:0.964,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.964,scaleY:0.964,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-57.8,270,115.7);
p.frameBounds = [rect, new cjs.Rectangle(-140,-60,280,120), new cjs.Rectangle(-135,-57.8,270,115.7), new cjs.Rectangle(-140,-60,280,120)];


(lib.credits_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.credits_mc();
	this.instance.setTransform(0,0,0.964,0.964);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Aw3JYQiEAAhehfQhehdAAiFIAAotQAAiFBeheQBeheCEAAMAhvAAAQCEAABdBeQBfBeAACFIAAItQAACFhfBdQhdBfiEAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.964,scaleY:0.964,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.964,scaleY:0.964,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-57.8,270,115.7);
p.frameBounds = [rect, new cjs.Rectangle(-140,-60,280,120), new cjs.Rectangle(-135,-57.8,270,115.7), new cjs.Rectangle(-140,-60,280,120)];


(lib.banner_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.banner_body_2_mc();
	this.instance.setTransform(0,0,0.905,0.905);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
p.frameBounds = [rect];


(lib.banner_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.banner_body_1_mc();
	this.instance.setTransform(0,0,0.905,0.905);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-190,380,380);
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
	this.cancelRedirect_btn = new lib.cancel_redirect_btn();
	this.cancelRedirect_btn.setTransform(400,510);
	new cjs.ButtonHelper(this.cancelRedirect_btn, 0, 1, 2, false, new lib.cancel_redirect_btn(), 3);

	this.playRedirect_btn = new lib.play_redirect_btn();
	this.playRedirect_btn.setTransform(400,380);
	new cjs.ButtonHelper(this.playRedirect_btn, 0, 1, 2, false, new lib.play_redirect_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.playRedirect_btn},{t:this.cancelRedirect_btn}]}).wait(1));

	// banner
	this.banner_mc = new lib.redirect_5_mc();
	this.banner_mc.setTransform(400,194);

	this.timeline.addTween(cjs.Tween.get(this.banner_mc).wait(1));

	// bg
	this.instance = new lib.redirect_4_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.preloader_24_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.preloader_28_mc();
	this.instance.setTransform(-0.3,0.6,1,1,0,0,0,11.5,11.5);

	this.instance_1 = new lib.preloader_22_mc();
	this.instance_1.setTransform(-0.7,-0.8,1,1,0,0,0,1.6,2.6);

	this.instance_2 = new lib.preloader_26_mc();
	this.instance_2.setTransform(0,0,1,1,0,0,0,18,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.preloader_21_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_105 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(105).call(this.frame_105).wait(1));

	// graph
	this.instance = new lib.preloader_24_mc();
	this.instance.setTransform(-161.7,-27.6,0.466,0.466,132);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(102).to({_off:false},0).wait(4));

	// graph
	this.instance_1 = new lib.preloader_24_mc();
	this.instance_1.setTransform(-146.6,-10.4,0.717,0.717,132);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(92).to({_off:false},0).wait(14));

	// graph
	this.instance_2 = new lib.preloader_24_mc();
	this.instance_2.setTransform(-161.7,5.3,1.74,1.74,132);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(84).to({_off:false},0).wait(22));

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEFmQgjgbgaAAQgaAAgjAbQgVARg1A0QA0g1AQgUQAcgkAAgaQAAgagcgkQgQgUg0g1QA1A0AVARQAjAcAaAAQAaAAAjgcQAVgRAzg0QgyA1gRAUQgbAkAAAaQAAAaAbAkQARAUAyA1Qgzg0gVgRgADMgLQgQAAgrAoQAmglADgNQAEgSggghIgMALIAMgMIgOgNIAOANQAOgPgDgLQgDgHgUgVQAYAYAJAAQAJAAAYgYQgYAZAAAJQAAAIAYAZQgVgVgHgDQgKgDgQAOQAiAhARgEQAOgDAogmQgrArAAAPQAAAPAtAsQgugrgPAAgAhplcQgQgBgrArQAqgsAAgOQAAgQgtguQAuAtAQAAQAPAAAugtQgtAuAAAQQAAAOAqAsQgrgrgPABg");
	this.shape.setTransform(-156.1,-9.1,0.511,0.511);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(84).to({_off:false},0).wait(22));

	// graph
	this.instance_3 = new lib.preloader_3_tween("synched",0);
	this.instance_3.setTransform(1191.4,271.6,4.528,4.528);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(56).to({_off:false},0).to({scaleX:1,scaleY:1,x:134.8,y:49.4,alpha:1},23,cjs.Ease.get(1)).to({scaleX:0.94,scaleY:0.94,x:117.7,y:45.4},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:134.8,y:49.4},2).wait(23));

	// graph
	this.instance_4 = new lib.preloader_1_tween("synched",0);
	this.instance_4.setTransform(-0.3,1.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(22).to({_off:false},0).to({alpha:1},3).to({alpha:0},4).to({alpha:1},3).to({alpha:0.57},2).to({alpha:1},2).to({startPosition:0},30).wait(40));

	// graph
	this.instance_5 = new lib.preloader_2_tween("synched",0);
	this.instance_5.setTransform(-1.5,7.3,0.046,0.046);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,x:-0.3,y:1.6,alpha:1},13).to({scaleX:0.88,scaleY:0.88},4).to({scaleX:1,scaleY:1},4).to({startPosition:0},44).wait(40));

	// graph
	this.instance_6 = new lib.preloader_4_tween("synched",0);
	this.instance_6.setTransform(-1.5,7.6,0.046,0.046);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},13).to({scaleX:0.9,scaleY:0.9},4).to({scaleX:1,scaleY:1},4).to({startPosition:0},44).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, new cjs.Rectangle(-11.6,3.8,20.1,9.1), new cjs.Rectangle(-27.7,-2.2,52.4,23.8), new cjs.Rectangle(-43.9,-8.3,84.7,38.5), new cjs.Rectangle(-60,-14.3,117,53.2), new cjs.Rectangle(-76.2,-20.4,149.3,67.9), new cjs.Rectangle(-92.3,-26.5,181.6,82.6), new cjs.Rectangle(-108.4,-32.5,213.9,97.3), new cjs.Rectangle(-124.6,-38.6,246.2,111.9), new cjs.Rectangle(-140.8,-44.6,278.5,126.6), new cjs.Rectangle(-156.9,-50.7,310.8,141.3), new cjs.Rectangle(-173.1,-56.7,343.1,156), new cjs.Rectangle(-189.2,-62.7,375.4,170.7), new cjs.Rectangle(-205.3,-68.8,407.7,185.3), new cjs.Rectangle(-221.5,-74.9,440,200), new cjs.Rectangle(-215.8,-72.7,428.5,194.8), new cjs.Rectangle(-210,-70.6,417,189.6), new cjs.Rectangle(-204.3,-68.4,405.5,184.3), new cjs.Rectangle(-198.5,-66.2,393.9,179.1), new cjs.Rectangle(-204.2,-68.4,405.4,184.3), new cjs.Rectangle(-210,-70.6,417,189.6), new cjs.Rectangle(-215.7,-72.7,428.5,194.8), rect=new cjs.Rectangle(-221.5,-74.9,440,200), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-221.5,-120.7,440,320.1), new cjs.Rectangle(-221.5,-113.4,440,298.8), new cjs.Rectangle(-221.5,-106.7,440,278.5), new cjs.Rectangle(-221.5,-100.3,440,259.2), new cjs.Rectangle(-221.5,-94.1,440,240.9), new cjs.Rectangle(-221.5,-88.3,440,223.4), new cjs.Rectangle(-221.5,-82.7,440,207.9), new cjs.Rectangle(-221.5,-77.5,440,202.6), rect=new cjs.Rectangle(-221.5,-74.9,440,200), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preloader_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"end":120});

	// timeline functions:
	this.frame_120 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(120).call(this.frame_120).wait(1));

	// logo
	this.logo_mc = new lib.preloader_21_mc();
	this.logo_mc.setTransform(-1.8,130.1,0.85,0.855,0,0,0,-2.1,152.1);

	this.timeline.addTween(cjs.Tween.get(this.logo_mc).wait(121));

	// animation
	this.instance = new lib.preloader_29_mc();
	this.instance.alpha = 0.262;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(6.8,-4,8,8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preloader_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.preloader_12_mc();
	this.instance.setTransform(0,0,1.25,1.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.preloader_10_mc();
	this.instance_1.setTransform(0,0,1.333,1.333);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-408.1,-141.4,528.1,282.8);
p.frameBounds = [rect];


(lib.preloader_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// indicator
	this.indicator_mc = new lib.preloader_3_mc();
	this.indicator_mc.setTransform(150,15,1,1,0,0,0,150,15);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-450,-25,610,50);
p.frameBounds = [rect];


(lib.orientation_lock_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.orientation_lock_7_mc();
	this.instance.setTransform(-15,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65,-10,130,20);
p.frameBounds = [rect];


(lib.orientation_lock_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.orientation_lock_9_mc();
	this.instance.setTransform(0,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.orientation_lock_5_mc();
	this.instance_1.setTransform(0,235);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.orientation_lock_4_mc();
	this.instance_2.setTransform(0,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.orientation_lock_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-280,300,560);
p.frameBounds = [rect];


(lib.orientation_lock_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.orientation_lock_10_mc();
	this.instance.setTransform(400,210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.orientation_lock_2_mc();
	this.instance_1.setTransform(200,280.1,0.833,0.833,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.orientation_lock_2_mc();
	this.instance_2.setTransform(520,430,0.833,0.833,90);
	this.instance_2.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(75,46.7,678.3,508.3);
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
	this.text = new cjs.Text("instruction", "46px 'Lobster 1.4'", "#FF0000");
	this.text.lineHeight = 60;
	this.text.lineWidth = 278;
	this.text.setTransform(272,256);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// screen
	this.screen_mc = new lib.instruction_1_mc();
	this.screen_mc.setTransform(600,300,1,1,0,0,0,600,300);

	this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.top_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_top4();
	this.instance.setTransform(-33,124.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoACyIAwk/IF+mgIC4gBIFbF/IBADeIk+HsImjAUg");
	this.shape.setTransform(1.1,50.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.2,-5.6,102.7,111.8);
p.frameBounds = [rect];


(lib.top_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_top4();
	this.instance.setTransform(33.6,124.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnUDcIAumYIFTlzIDMgBIFcIiIhCGbIm8Ckg");
	this.shape.setTransform(-1.6,47.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.5,-8.2,93.8,112.3);
p.frameBounds = [rect];


(lib.top_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_top4();
	this.instance.setTransform(1.7,39.3,1,1,0,0,0,35,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnbCKIgcilIGcnmIDDgBIGQH8IiGG4IlOBRg");
	this.shape.setTransform(0.7,42.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.7,-8.7,101,103.1);
p.frameBounds = [rect];


(lib.top_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_top4();
	this.instance.setTransform(-2,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkpHaIjIniIFen/IHTADICyLsIlkEgg");
	this.shape.setTransform(-1.8,46.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.6,-5.9,99.7,104.1);
p.frameBounds = [rect];


(lib.top_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_top3();
	this.instance.setTransform(-32.5,124.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlzIQIh3iaIAknBIFgnOIEHACIFFGAIAFImIjtCLg");
	this.shape.setTransform(-1.5,47);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.6,-6.8,98.3,107.7);
p.frameBounds = [rect];


(lib.top_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_top3();
	this.instance.setTransform(33.7,124.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnQgpIFEm4IEZgBIFEHVIhMHnIslAJg");
	this.shape.setTransform(0.1,41.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.4,-6.7,93.1,96.6);
p.frameBounds = [rect];


(lib.top_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_top3();
	this.instance.setTransform(1.7,39.3,1,1,0,0,0,35,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnrAXIFpnuIFFAAIEpIBIhxGZIsCAVg");
	this.shape.setTransform(0.9,40.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.3,-7,98.5,94.6);
p.frameBounds = [rect];


(lib.top_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_top3();
	this.instance.setTransform(-2.1,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Al8IKIhNqPIFWmuIEGAAIE3HrIgHB7IlrIBg");
	this.shape.setTransform(0.8,49.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.1,-6.5,91.8,113);
p.frameBounds = [rect];


(lib.top_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_top2();
	this.instance.setTransform(-33.3,124.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnWhQIGLnAICZACIGJHKIg9JIItLANg");
	this.shape.setTransform(0.2,46.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.9,-6.6,94.3,106);
p.frameBounds = [rect];


(lib.top_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_top2();
	this.instance.setTransform(33.2,124.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AneAPIF3nmIDxgCIFVGyIgdGoIr6BZg");
	this.shape.setTransform(-1.8,41.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.7,-6.4,95.9,95);
p.frameBounds = [rect];


(lib.top_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_top2();
	this.instance.setTransform(1.7,39.3,1,1,0,0,0,35,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlkgIID/mhIEFABIDFGEIhCGSInsA8g");
	this.shape.setTransform(0.9,35.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.5,-6.9,89,85.3);
p.frameBounds = [rect];


(lib.top_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_top2();
	this.instance.setTransform(-1.7,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmAHsIhEoZIFtnDID7ABIEhHHIgDEXIkNECg");
	this.shape.setTransform(-0.5,43.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.9,-6.4,90.9,99.5);
p.frameBounds = [rect];


(lib.top_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_top1();
	this.instance.setTransform(-33,124.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("An6CxIASkBIF+nwIDwAAIF1F5Ig/IaIjvDqIngAEg");
	this.shape.setTransform(-2.6,51.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.3,-6.7,101.5,115.6);
p.frameBounds = [rect];


(lib.top_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_top1();
	this.instance.setTransform(33.6,124.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("An2i2IFdmcIDvgBIEFFHICcLRIvgCPg");
	this.shape.setTransform(2.6,54.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.9,-4.9,132,189.4);
p.frameBounds = [rect];


(lib.top_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_top1();
	this.instance.setTransform(1.7,39.3,1,1,0,0,0,35,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnxA3IGYn1IELAAIFAIFIhfE0IsQBEg");
	this.shape.setTransform(-1.2,36.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51,-8,99.8,89.5);
p.frameBounds = [rect];


(lib.top_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_top1();
	this.instance.setTransform(-2.5,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlCHYIi+oLIIqnlIB+gBIFZHUIgCDfIk4GAg");
	this.shape.setTransform(-6.4,46);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.7,-7.8,102.7,107.7);
p.frameBounds = [rect];


(lib.location_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(70,95);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_8_img();
	this.instance_1.setTransform(-170,-170);

	this.instance_2 = new lib.location_1_8_img();
	this.instance_2.setTransform(-170,-170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1sZxQhsAAhNhMQhMhMABhsMAAAgrZQgBhsBMhNQBNhMBsABMArZAAAQBsgBBMBMQBMBNAABsMAAAArZQAABshMBMQhMBMhsAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect, rect, rect];


(lib.location_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(70,95);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_7_img();
	this.instance_1.setTransform(-170,-170);

	this.instance_2 = new lib.location_1_7_img();
	this.instance_2.setTransform(-170,-170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1sZxQhsAAhNhMQhMhMABhsMAAAgrZQgBhsBMhNQBNhMBsABMArZAAAQBsgBBMBMQBMBNAABsMAAAArZQAABshMBMQhMBMhsAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect, rect, rect];


(lib.location_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(70,95);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_6_img();
	this.instance_1.setTransform(-170,-170);

	this.instance_2 = new lib.location_1_6_img();
	this.instance_2.setTransform(-170,-170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1sZxQhsAAhNhMQhMhMABhsMAAAgrZQgBhsBMhNQBNhMBsABMArZAAAQBsgBBMBMQBMBNAABsMAAAArZQAABshMBMQhMBMhsAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect, rect, rect];


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(70,95);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_5_img();
	this.instance_1.setTransform(-170,-170);

	this.instance_2 = new lib.location_1_5_img();
	this.instance_2.setTransform(-170,-170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1sZxQhsAAhNhMQhMhMABhsMAAAgrZQgBhsBMhNQBNhMBsABMArZAAAQBsgBBMBMQBMBNAABsMAAAArZQAABshMBMQhMBMhsAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect, rect, rect];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(70,95);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_4_img();
	this.instance_1.setTransform(-170,-170);

	this.instance_2 = new lib.location_1_4_img();
	this.instance_2.setTransform(-170,-170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1sZxQhsAAhNhMQhMhMABhsMAAAgrZQgBhsBMhNQBNhMBsABMArZAAAQBsgBBMBMQBMBNAABsMAAAArZQAABshMBMQhMBMhsAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect, rect, rect];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(70,95);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_3_img();
	this.instance_1.setTransform(-170,-170);

	this.instance_2 = new lib.location_1_3_img();
	this.instance_2.setTransform(-170,-170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1sZxQhsAAhNhMQhMhMABhsMAAAgrZQgBhsBMhNQBNhMBsABMArZAAAQBsgBBMBMQBMBNAABsMAAAArZQAABshMBMQhMBMhsAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect, rect, rect];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(70,95);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_2_img();
	this.instance_1.setTransform(-170,-170);

	this.instance_2 = new lib.location_1_2_img();
	this.instance_2.setTransform(-170,-170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1sZxQhsAAhNhMQhMhMABhsMAAAgrZQgBhsBMhNQBNhMBsABMArZAAAQBsgBBMBMQBMBNAABsMAAAArZQAABshMBMQhMBMhsAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect, rect, rect];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.body_check_2_mc();
	this.instance.setTransform(70,95);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// graph
	this.instance_1 = new lib.location_0_1_img();
	this.instance_1.setTransform(-170,-170);

	this.instance_2 = new lib.location_1_1_img();
	this.instance_2.setTransform(-170,-170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A1sZxQhsAAhNhMQhMhMABhsMAAAgrZQgBhsBMhNQBNhMBsABMArZAAAQBsgBBMBMQBMBNAABsMAAAArZQAABshMBMQhMBMhsAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-170,-170,340,340);
p.frameBounds = [rect, rect, rect];


(lib.indicator_part_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shadow
	this.instance = new lib.indicator_part_3_mc();
	this.instance.alpha = 0.5;
	this.instance.cache(-2,-2,364,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A5mCgQhCAAgwgwQgugugBhCQABhAAugwQAwguBCgBIZbAAIALANIAMgNIZbAAQBCABAwAuQAuAwABBAQgBBCguAuQgwAwhCAAg");
	mask.setTransform(180,16);

	// text
	this.output_numbers_comp = new lib.output_numbers_1_mc();
	this.output_numbers_comp.setTransform(150.1,-39.4,0.6,0.6,0,0,0,0.1,1);

	this.output_numbers_comp.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.output_numbers_comp).wait(1));

	// indicator
	this.indicator_mc = new lib.indicator_part_2_mc();

	this.indicator_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// bg
	this.instance_1 = new lib.indicator_part_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,360,32);
p.frameBounds = [rect];


(lib.hint_rub_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// graph
	this.instance = new lib.animation_rubbing_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-61.3,180,111.4);
p.frameBounds = [rect, rect];


(lib.hint_rub_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(this.body_mc)
		{
			if(createjs.Touch.isSupported())
			{
				this.body_mc.gotoAndStop(1);
			}
			else
			{
				this.body_mc.gotoAndStop(0);
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.hint_rub_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-61.3,180,111.4);
p.frameBounds = [rect];


(lib.heroes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// heroes
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(125,350);

	this.hero_3 = new lib.hero_3_mc();
	this.hero_3.setTransform(465,313);

	this.hero_4 = new lib.hero_4_mc();
	this.hero_4.setTransform(685,315);

	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(270,355);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hero_2,p:{x:270,y:355}},{t:this.hero_4,p:{x:685,y:315}},{t:this.hero_3,p:{x:465,y:313}},{t:this.hero_1,p:{x:125}}]}).to({state:[{t:this.hero_1,p:{x:390}}]},1).to({state:[{t:this.hero_2,p:{x:385,y:360}}]},1).to({state:[{t:this.hero_3,p:{x:385,y:315}}]},1).to({state:[{t:this.hero_4,p:{x:417,y:310}}]},1).to({state:[{t:this.hero_2,p:{x:270,y:355}},{t:this.hero_4,p:{x:685,y:315}},{t:this.hero_3,p:{x:465,y:313}},{t:this.hero_1,p:{x:125}}]},1).to({state:[{t:this.hero_1,p:{x:390}}]},1).to({state:[{t:this.hero_2,p:{x:385,y:360}}]},1).to({state:[{t:this.hero_3,p:{x:385,y:315}}]},1).to({state:[{t:this.hero_4,p:{x:417,y:310}}]},1).to({state:[{t:this.hero_2,p:{x:270,y:355}},{t:this.hero_4,p:{x:685,y:315}},{t:this.hero_3,p:{x:465,y:313}},{t:this.hero_1,p:{x:125}}]},1).to({state:[{t:this.hero_1,p:{x:390}}]},1).to({state:[{t:this.hero_2,p:{x:385,y:360}}]},1).to({state:[{t:this.hero_3,p:{x:385,y:315}}]},1).to({state:[{t:this.hero_4,p:{x:417,y:310}}]},1).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-200,0);

	this.instance_1 = new lib.background_4_img();
	this.instance_1.setTransform(-200,0);

	this.instance_2 = new lib.background_5_img();
	this.instance_2.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero3_main();
	this.instance.setTransform(480,306);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero4_main();
	this.instance_1.setTransform(675,318);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.hero1_main();
	this.instance_2.setTransform(125,364);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hero2_main();
	this.instance_3.setTransform(295,352);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10,34.4,779.4,561.2);
p.frameBounds = [rect];


(lib.closet_makeup_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(130,-120);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(130,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[{t:this.shadows_0}]},1).to({state:[]},1).wait(1));

	// options
	this.blush_6 = new lib.blush_6_4_mc();
	this.blush_6.setTransform(55,75);

	this.blush_5 = new lib.blush_5_4_mc();
	this.blush_5.setTransform(-55,95);

	this.blush_4 = new lib.blush_4_4_mc();
	this.blush_4.setTransform(55,-75);

	this.blush_3 = new lib.blush_3_4_mc();
	this.blush_3.setTransform(-55,-55);

	this.blush_2 = new lib.blush_2_4_mc();
	this.blush_2.setTransform(55,-225);

	this.blush_1 = new lib.blush_1_4_mc();
	this.blush_1.setTransform(-55,-205);

	this.shadows_6 = new lib.shadows_6_4_mc();
	this.shadows_6.setTransform(65,65);

	this.shadows_5 = new lib.shadows_5_4_mc();
	this.shadows_5.setTransform(-55,90);

	this.shadows_4 = new lib.shadows_4_4_mc();
	this.shadows_4.setTransform(65,-85);

	this.shadows_3 = new lib.shadows_3_4_mc();
	this.shadows_3.setTransform(-55,-65);

	this.shadows_2 = new lib.shadows_2_4_mc();
	this.shadows_2.setTransform(65,-235);

	this.shadows_1 = new lib.shadows_1_4_mc();
	this.shadows_1.setTransform(-55,-215);

	this.lips_6 = new lib.lips_6_4_mc();
	this.lips_6.setTransform(-40,-215);

	this.lips_5 = new lib.lips_5_4_mc();
	this.lips_5.setTransform(-40,85);

	this.lips_4 = new lib.lips_4_4_mc();
	this.lips_4.setTransform(60,-85);

	this.lips_3 = new lib.lips_3_4_mc();
	this.lips_3.setTransform(-40,-70);

	this.lips_2 = new lib.lips_2_4_mc();
	this.lips_2.setTransform(60,-235);

	this.lips_1 = new lib.lips_1_4_mc();
	this.lips_1.setTransform(60,65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4},{t:this.blush_5},{t:this.blush_6}]}).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-280,263,430);
p.frameBounds = [rect, new cjs.Rectangle(-115,-295,268,445), new cjs.Rectangle(-85,-300,190,450)];


(lib.closet_makeup_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(130,-120);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(130,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[{t:this.shadows_0}]},1).to({state:[]},1).wait(1));

	// options
	this.blush_6 = new lib.blush_6_3_mc();
	this.blush_6.setTransform(55,75);

	this.blush_5 = new lib.blush_5_3_mc();
	this.blush_5.setTransform(-55,95);

	this.blush_4 = new lib.blush_4_3_mc();
	this.blush_4.setTransform(55,-75);

	this.blush_3 = new lib.blush_3_3_mc();
	this.blush_3.setTransform(-55,-55);

	this.blush_2 = new lib.blush_2_3_mc();
	this.blush_2.setTransform(55,-225);

	this.blush_1 = new lib.blush_1_3_mc();
	this.blush_1.setTransform(-55,-205);

	this.shadows_6 = new lib.shadows_6_3_mc();
	this.shadows_6.setTransform(65,65);

	this.shadows_5 = new lib.shadows_5_3_mc();
	this.shadows_5.setTransform(-55,90);

	this.shadows_4 = new lib.shadows_4_3_mc();
	this.shadows_4.setTransform(65,-85);

	this.shadows_3 = new lib.shadows_3_3_mc();
	this.shadows_3.setTransform(-55,-65);

	this.shadows_2 = new lib.shadows_2_3_mc();
	this.shadows_2.setTransform(65,-235);

	this.shadows_1 = new lib.shadows_1_3_mc();
	this.shadows_1.setTransform(-55,-215);

	this.lips_6 = new lib.lips_6_3_mc();
	this.lips_6.setTransform(-40,-215);

	this.lips_5 = new lib.lips_5_3_mc();
	this.lips_5.setTransform(-40,85);

	this.lips_4 = new lib.lips_4_3_mc();
	this.lips_4.setTransform(60,-85);

	this.lips_3 = new lib.lips_3_3_mc();
	this.lips_3.setTransform(-40,-70);

	this.lips_2 = new lib.lips_2_3_mc();
	this.lips_2.setTransform(60,-235);

	this.lips_1 = new lib.lips_1_3_mc();
	this.lips_1.setTransform(60,65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4},{t:this.blush_5},{t:this.blush_6}]}).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-280,263,430);
p.frameBounds = [rect, new cjs.Rectangle(-115,-295,268,445), new cjs.Rectangle(-85,-300,190,450)];


(lib.closet_makeup_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(130,-120);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(130,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[{t:this.shadows_0}]},1).to({state:[]},1).wait(1));

	// options
	this.blush_6 = new lib.blush_6_2_mc();
	this.blush_6.setTransform(55,75);

	this.blush_5 = new lib.blush_5_2_mc();
	this.blush_5.setTransform(-55,95);

	this.blush_4 = new lib.blush_4_2_mc();
	this.blush_4.setTransform(55,-75);

	this.blush_3 = new lib.blush_3_2_mc();
	this.blush_3.setTransform(-55,-55);

	this.blush_2 = new lib.blush_2_2_mc();
	this.blush_2.setTransform(55,-225);

	this.blush_1 = new lib.blush_1_2_mc();
	this.blush_1.setTransform(-55,-205);

	this.shadows_6 = new lib.shadows_6_2_mc();
	this.shadows_6.setTransform(65,65);

	this.shadows_5 = new lib.shadows_5_2_mc();
	this.shadows_5.setTransform(-55,90);

	this.shadows_4 = new lib.shadows_4_2_mc();
	this.shadows_4.setTransform(65,-85);

	this.shadows_3 = new lib.shadows_3_2_mc();
	this.shadows_3.setTransform(-55,-65);

	this.shadows_2 = new lib.shadows_2_2_mc();
	this.shadows_2.setTransform(65,-235);

	this.shadows_1 = new lib.shadows_1_2_mc();
	this.shadows_1.setTransform(-55,-215);

	this.lips_6 = new lib.lips_6_2_mc();
	this.lips_6.setTransform(-40,-215);

	this.lips_5 = new lib.lips_5_2_mc();
	this.lips_5.setTransform(-40,85);

	this.lips_4 = new lib.lips_4_2_mc();
	this.lips_4.setTransform(60,-85);

	this.lips_3 = new lib.lips_3_2_mc();
	this.lips_3.setTransform(-40,-70);

	this.lips_2 = new lib.lips_2_2_mc();
	this.lips_2.setTransform(60,-235);

	this.lips_1 = new lib.lips_1_2_mc();
	this.lips_1.setTransform(60,65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4},{t:this.blush_5},{t:this.blush_6}]}).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-280,263,430);
p.frameBounds = [rect, new cjs.Rectangle(-115,-295,268,445), new cjs.Rectangle(-85,-300,190,450)];


(lib.closet_makeup_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(130,-120);

	this.shadows_0 = new lib.shadows_0_mc();
	this.shadows_0.setTransform(130,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[{t:this.shadows_0}]},1).to({state:[]},1).wait(1));

	// options
	this.blush_6 = new lib.blush_6_1_mc();
	this.blush_6.setTransform(-55,-205);

	this.blush_5 = new lib.blush_5_1_mc();
	this.blush_5.setTransform(-55,95);

	this.blush_4 = new lib.blush_4_1_mc();
	this.blush_4.setTransform(55,-75);

	this.blush_3 = new lib.blush_3_1_mc();
	this.blush_3.setTransform(-55,-55);

	this.blush_2 = new lib.blush_2_1_mc();
	this.blush_2.setTransform(55,-225);

	this.blush_1 = new lib.blush_1_1_mc();
	this.blush_1.setTransform(55,75);

	this.shadows_6 = new lib.shadows_6_1_mc();
	this.shadows_6.setTransform(65,65);

	this.shadows_5 = new lib.shadows_5_1_mc();
	this.shadows_5.setTransform(-55,90);

	this.shadows_4 = new lib.shadows_4_1_mc();
	this.shadows_4.setTransform(65,-85);

	this.shadows_3 = new lib.shadows_3_1_mc();
	this.shadows_3.setTransform(-55,-65);

	this.shadows_2 = new lib.shadows_2_1_mc();
	this.shadows_2.setTransform(65,-235);

	this.shadows_1 = new lib.shadows_1_1_mc();
	this.shadows_1.setTransform(-55,-215);

	this.lips_1 = new lib.lips_1_1_mc();
	this.lips_1.setTransform(60,65);

	this.lips_6 = new lib.lips_6_1_mc();
	this.lips_6.setTransform(-40,-215);

	this.lips_5 = new lib.lips_5_1_mc();
	this.lips_5.setTransform(-40,85);

	this.lips_4 = new lib.lips_4_1_mc();
	this.lips_4.setTransform(60,-85);

	this.lips_3 = new lib.lips_3_1_mc();
	this.lips_3.setTransform(-40,-70);

	this.lips_2 = new lib.lips_2_1_mc();
	this.lips_2.setTransform(60,-235);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4},{t:this.blush_5},{t:this.blush_6}]}).to({state:[{t:this.shadows_1},{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6}]},1).to({state:[{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6},{t:this.lips_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-280,263,430);
p.frameBounds = [rect, new cjs.Rectangle(-115,-295,268,445), new cjs.Rectangle(-85,-300,190,450)];


(lib.check_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body_check_1_mc();
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.body_check_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect, rect];


(lib.bodyDressupPanel_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_4
	this.hero_4 = new lib.closet_makeup_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-280,263,430);
p.frameBounds = [rect];


(lib.bodyDressupPanel_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_3
	this.hero_3 = new lib.closet_makeup_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-280,263,430);
p.frameBounds = [rect];


(lib.bodyDressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-280,263,430);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-280,263,430);
p.frameBounds = [rect];


(lib.body_locations_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":79});

	// location_7
	this.location_7 = new lib.location_7_mc();
	this.location_7.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_7).wait(80));

	// location_8
	this.location_8 = new lib.location_8_mc();
	this.location_8.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_8).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-170,720,340);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_locations_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":79});

	// location_7
	this.location_7 = new lib.location_7_mc();
	this.location_7.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_7).wait(1).to({y:-500},0).wait(18).to({y:50},16).to({y:0},4).wait(41));

	// location_8
	this.location_8 = new lib.location_8_mc();
	this.location_8.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_8).wait(1).to({y:-500},0).wait(28).to({y:50},16).to({y:0},4).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-170,720,340);
p.frameBounds = [rect, rect=new cjs.Rectangle(-360,-670,720,340), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-360,-670,720,374.4), new cjs.Rectangle(-360,-670,720,408.8), new cjs.Rectangle(-360,-670,720,443.1), new cjs.Rectangle(-360,-670,720,477.5), new cjs.Rectangle(-360,-670,720,511.9), new cjs.Rectangle(-360,-670,720,546.3), new cjs.Rectangle(-360,-670,720,580.6), new cjs.Rectangle(-360,-670,720,615), new cjs.Rectangle(-360,-670,720,649.4), new cjs.Rectangle(-360,-670,720,683.8), new cjs.Rectangle(-360,-635.6,720,683.7), new cjs.Rectangle(-360,-601.2,720,683.8), new cjs.Rectangle(-360,-566.9,720,683.8), new cjs.Rectangle(-360,-532.5,720,683.8), new cjs.Rectangle(-360,-498.1,720,683.7), new cjs.Rectangle(-360,-463.7,720,683.8), new cjs.Rectangle(-360,-429.4,720,636.9), new cjs.Rectangle(-360,-395,720,590), new cjs.Rectangle(-360,-360.6,720,543.2), new cjs.Rectangle(-360,-326.2,720,496.3), new cjs.Rectangle(-360,-291.9,720,461.9), new cjs.Rectangle(-360,-257.5,720,427.5), new cjs.Rectangle(-360,-223.1,720,393.2), new cjs.Rectangle(-360,-188.7,720,358.8), new cjs.Rectangle(-360,-170,720,355.6), new cjs.Rectangle(-360,-170,720,390), new cjs.Rectangle(-360,-170,720,377.5), new cjs.Rectangle(-360,-170,720,365), new cjs.Rectangle(-360,-170,720,352.5), rect=new cjs.Rectangle(-360,-170,720,340), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_locations_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":79});

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(80));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-170,720,340);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_locations_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":79});

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:-500},0).wait(18).to({y:50},16).to({y:0},4).wait(41));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({y:-500},0).wait(28).to({y:50},16).to({y:0},4).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-170,720,340);
p.frameBounds = [rect, rect=new cjs.Rectangle(-360,-670,720,340), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-360,-670,720,374.4), new cjs.Rectangle(-360,-670,720,408.8), new cjs.Rectangle(-360,-670,720,443.1), new cjs.Rectangle(-360,-670,720,477.5), new cjs.Rectangle(-360,-670,720,511.9), new cjs.Rectangle(-360,-670,720,546.3), new cjs.Rectangle(-360,-670,720,580.6), new cjs.Rectangle(-360,-670,720,615), new cjs.Rectangle(-360,-670,720,649.4), new cjs.Rectangle(-360,-670,720,683.8), new cjs.Rectangle(-360,-635.6,720,683.7), new cjs.Rectangle(-360,-601.2,720,683.8), new cjs.Rectangle(-360,-566.9,720,683.8), new cjs.Rectangle(-360,-532.5,720,683.8), new cjs.Rectangle(-360,-498.1,720,683.7), new cjs.Rectangle(-360,-463.7,720,683.8), new cjs.Rectangle(-360,-429.4,720,636.9), new cjs.Rectangle(-360,-395,720,590), new cjs.Rectangle(-360,-360.6,720,543.2), new cjs.Rectangle(-360,-326.2,720,496.3), new cjs.Rectangle(-360,-291.9,720,461.9), new cjs.Rectangle(-360,-257.5,720,427.5), new cjs.Rectangle(-360,-223.1,720,393.2), new cjs.Rectangle(-360,-188.7,720,358.8), new cjs.Rectangle(-360,-170,720,355.6), new cjs.Rectangle(-360,-170,720,390), new cjs.Rectangle(-360,-170,720,377.5), new cjs.Rectangle(-360,-170,720,365), new cjs.Rectangle(-360,-170,720,352.5), rect=new cjs.Rectangle(-360,-170,720,340), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_locations_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":79});

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(80));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-170,720,340);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_locations_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":79});

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-500},0).wait(18).to({y:50},16).to({y:0},4).wait(41));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({y:-500},0).wait(28).to({y:50},16).to({y:0},4).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-170,720,340);
p.frameBounds = [rect, rect=new cjs.Rectangle(-360,-670,720,340), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-360,-670,720,374.4), new cjs.Rectangle(-360,-670,720,408.8), new cjs.Rectangle(-360,-670,720,443.1), new cjs.Rectangle(-360,-670,720,477.5), new cjs.Rectangle(-360,-670,720,511.9), new cjs.Rectangle(-360,-670,720,546.3), new cjs.Rectangle(-360,-670,720,580.6), new cjs.Rectangle(-360,-670,720,615), new cjs.Rectangle(-360,-670,720,649.4), new cjs.Rectangle(-360,-670,720,683.8), new cjs.Rectangle(-360,-635.6,720,683.7), new cjs.Rectangle(-360,-601.2,720,683.8), new cjs.Rectangle(-360,-566.9,720,683.8), new cjs.Rectangle(-360,-532.5,720,683.8), new cjs.Rectangle(-360,-498.1,720,683.7), new cjs.Rectangle(-360,-463.7,720,683.8), new cjs.Rectangle(-360,-429.4,720,636.9), new cjs.Rectangle(-360,-395,720,590), new cjs.Rectangle(-360,-360.6,720,543.2), new cjs.Rectangle(-360,-326.2,720,496.3), new cjs.Rectangle(-360,-291.9,720,461.9), new cjs.Rectangle(-360,-257.5,720,427.5), new cjs.Rectangle(-360,-223.1,720,393.2), new cjs.Rectangle(-360,-188.7,720,358.8), new cjs.Rectangle(-360,-170,720,355.6), new cjs.Rectangle(-360,-170,720,390), new cjs.Rectangle(-360,-170,720,377.5), new cjs.Rectangle(-360,-170,720,365), new cjs.Rectangle(-360,-170,720,352.5), rect=new cjs.Rectangle(-360,-170,720,340), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_locations_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":79});

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(80));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-170,720,340);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.body_locations_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"mid":59,"end":79});

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:-500},0).wait(18).to({y:50},16).to({y:0},4).wait(41));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(190,0);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-500},0).wait(28).to({y:50},16).to({y:0},4).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-170,720,340);
p.frameBounds = [rect, rect=new cjs.Rectangle(-360,-670,720,340), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-360,-670,720,374.4), new cjs.Rectangle(-360,-670,720,408.8), new cjs.Rectangle(-360,-670,720,443.1), new cjs.Rectangle(-360,-670,720,477.5), new cjs.Rectangle(-360,-670,720,511.9), new cjs.Rectangle(-360,-670,720,546.3), new cjs.Rectangle(-360,-670,720,580.6), new cjs.Rectangle(-360,-670,720,615), new cjs.Rectangle(-360,-670,720,649.4), new cjs.Rectangle(-360,-670,720,683.8), new cjs.Rectangle(-360,-635.6,720,683.7), new cjs.Rectangle(-360,-601.2,720,683.8), new cjs.Rectangle(-360,-566.9,720,683.8), new cjs.Rectangle(-360,-532.5,720,683.8), new cjs.Rectangle(-360,-498.1,720,683.7), new cjs.Rectangle(-360,-463.7,720,683.8), new cjs.Rectangle(-360,-429.4,720,636.9), new cjs.Rectangle(-360,-395,720,590), new cjs.Rectangle(-360,-360.6,720,543.2), new cjs.Rectangle(-360,-326.2,720,496.3), new cjs.Rectangle(-360,-291.9,720,461.9), new cjs.Rectangle(-360,-257.5,720,427.5), new cjs.Rectangle(-360,-223.1,720,393.2), new cjs.Rectangle(-360,-188.7,720,358.8), new cjs.Rectangle(-360,-170,720,355.6), new cjs.Rectangle(-360,-170,720,390), new cjs.Rectangle(-360,-170,720,377.5), new cjs.Rectangle(-360,-170,720,365), new cjs.Rectangle(-360,-170,720,352.5), rect=new cjs.Rectangle(-360,-170,720,340), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.CurtainScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.curtain_1_mc();
	this.body_mc.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1400,0,1200,600);
p.frameBounds = [rect];


(lib.CopyrightScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// screen
	this.screen_mc = new lib.copyright_1_mc();
	this.screen_mc.setTransform(1000,600,1,1,0,0,0,600,300);

	this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.prev_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0,0,0.75,0.75,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.prev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0,0,0.75,0.75,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.prev_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0.1,0.1,0.667,0.667,0,0,180,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.next_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.next_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0,0.1,0.667,0.667,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.more_games_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_2_2_mc();
	this.instance.setTransform(-62,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.7,-96,219.7,193.1);
p.frameBounds = [rect];


(lib.logo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.logo_2_mc();
	this.instance.setTransform(-82.9,0,0.553,0.553,0,0,0,-150,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.58,scaleY:0.58,x:-86.8},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:-82.9,alpha:0.801},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:-86.8,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-270.7,-140.3,375.8,280.6);
p.frameBounds = [rect, new cjs.Rectangle(-283.6,-146.9,393.6,293.9), new cjs.Rectangle(-270.7,-140.3,375.8,280.6), new cjs.Rectangle(-283.6,-146.9,393.6,293.9)];


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
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.PreloaderScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.play_mc = new lib.preloader_13_mc();
	this.play_mc.setTransform(400,460);

	this.timeline.addTween(cjs.Tween.get(this.play_mc).wait(1));

	// indicator
	this.indicator_mc = new lib.preloader_8_mc();
	this.indicator_mc.setTransform(400,460);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// animation
	this.animation_mc = new lib.preloader_20_mc();
	this.animation_mc.setTransform(400,250);

	this.timeline.addTween(cjs.Tween.get(this.animation_mc).wait(1));

	// bg
	this.bg_mc = new lib.preloader_17_mc();
	this.bg_mc.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,601.4);
p.frameBounds = [rect];


(lib.OrientationLockScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// screen
	this.screen_mc = new lib.orientation_lock_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.screen_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-10,1200,620);
p.frameBounds = [rect];


(lib.photoContainer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_btn = new lib.logo_1_mc();
	this.logo_btn.setTransform(90.1,50.2,0.421,0.421,0,0,0,0.1,0.4);
	this.logo_btn.cache(-192,-92,384,184);

	this.timeline.addTween(cjs.Tween.get(this.logo_btn).wait(1));

	// heroes
	this.heroes_mc = new lib.heroes_mc();

	this.timeline.addTween(cjs.Tween.get(this.heroes_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{location_1:0,location_2:1,location_3:2,location_4:3,location_5:4,location_6:5,location_7:6,location_8:7});

	// body
	this.frame_1_mc = new lib.body_locations_1_mc();

	this.frame_2_mc = new lib.body_locations_2_mc();

	this.frame_3_mc = new lib.body_locations_3_mc();

	this.frame_4_mc = new lib.body_locations_4_mc();

	this.frame_5_mc = new lib.body_locations_5_mc();

	this.frame_6_mc = new lib.body_locations_6_mc();

	this.frame_7_mc = new lib.body_locations_7_mc();

	this.frame_8_mc = new lib.body_locations_8_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame_1_mc}]}).to({state:[{t:this.frame_2_mc}]},1).to({state:[{t:this.frame_3_mc}]},1).to({state:[{t:this.frame_4_mc}]},1).to({state:[{t:this.frame_5_mc}]},1).to({state:[{t:this.frame_6_mc}]},1).to({state:[{t:this.frame_7_mc}]},1).to({state:[{t:this.frame_8_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360,-170,720,340);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect];


(lib.indicator_part_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// indicator
	this.indicator_mc = new lib.indicator_part_1_mc();
	this.indicator_mc.setTransform(-180,-16);

	this.timeline.addTween(cjs.Tween.get(this.indicator_mc).wait(1));

	// bg
	this.instance = new lib.indicator_part_6_mc();
	this.instance.cache(-202,-32,404,64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-68,400,98);
p.frameBounds = [rect];


(lib.hairstyle_6_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,50.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_6_4_img();
	this.instance.setTransform(-110,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,225,200);
p.frameBounds = [rect];


(lib.hairstyle_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,50.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_6_3_img();
	this.instance.setTransform(-110,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,225,200);
p.frameBounds = [rect];


(lib.hairstyle_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,50.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_6_2_img();
	this.instance.setTransform(-110,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,225,200);
p.frameBounds = [rect];


(lib.hairstyle_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,50.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_6_1_img();
	this.instance.setTransform(-110,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,225,200);
p.frameBounds = [rect];


(lib.hairstyle_5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,50.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_5_4_img();
	this.instance.setTransform(-110,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,225,200);
p.frameBounds = [rect];


(lib.hairstyle_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,50.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_5_3_img();
	this.instance.setTransform(-110,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,225,200);
p.frameBounds = [rect];


(lib.hairstyle_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,50.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_5_2_img();
	this.instance.setTransform(-110,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,225,200);
p.frameBounds = [rect];


(lib.hairstyle_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,50.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_5_1_img();
	this.instance.setTransform(-110,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,225,200);
p.frameBounds = [rect];


(lib.hairstyle_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,50.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_4_4_img();
	this.instance.setTransform(-110,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,225,200);
p.frameBounds = [rect];


(lib.hairstyle_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,50.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_4_3_img();
	this.instance.setTransform(-110,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,225,200);
p.frameBounds = [rect];


(lib.hairstyle_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,50.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_4_2_img();
	this.instance.setTransform(-110,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,225,200);
p.frameBounds = [rect];


(lib.hairstyle_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,50.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_4_1_img();
	this.instance.setTransform(-110,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,225,200);
p.frameBounds = [rect];


(lib.hairstyle_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,50.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_3_4_img();
	this.instance.setTransform(-110,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,225,200);
p.frameBounds = [rect];


(lib.hairstyle_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,50.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_3_3_img();
	this.instance.setTransform(-110,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,225,200);
p.frameBounds = [rect];


(lib.hairstyle_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,50.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_3_2_img();
	this.instance.setTransform(-110,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,225,200);
p.frameBounds = [rect];


(lib.hairstyle_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,50.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_3_1_img();
	this.instance.setTransform(-110,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,225,200);
p.frameBounds = [rect];


(lib.hairstyle_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,50.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_2_4_img();
	this.instance.setTransform(-110,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,225,200);
p.frameBounds = [rect];


(lib.hairstyle_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,50.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_2_3_img();
	this.instance.setTransform(-110,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,225,200);
p.frameBounds = [rect];


(lib.hairstyle_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,50.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_2_2_img();
	this.instance.setTransform(-110,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,225,200);
p.frameBounds = [rect];


(lib.hairstyle_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,50.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_2_1_img();
	this.instance.setTransform(-110,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,225,200);
p.frameBounds = [rect];


(lib.hairstyle_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,50.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_1_4_img();
	this.instance.setTransform(-110,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,225,200);
p.frameBounds = [rect];


(lib.hairstyle_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,50.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_1_3_img();
	this.instance.setTransform(-110,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,225,200);
p.frameBounds = [rect];


(lib.hairstyle_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,50.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_1_2_img();
	this.instance.setTransform(-110,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,225,200);
p.frameBounds = [rect];


(lib.hairstyle_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_mc();
	this.check_mc.setTransform(75.1,50.1,0.571,0.571,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 1
	this.instance = new lib.hairstyle_1_1_img();
	this.instance.setTransform(-110,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-100,225,200);
p.frameBounds = [rect];


(lib.dressupPanel_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,-500);

	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(140,90);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(-140,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-185,-550,370,840);
p.frameBounds = [rect];


(lib.dressupPanel_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,-500);

	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(140,90);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(-140,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-185,-550,370,840);
p.frameBounds = [rect];


(lib.dressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,-500);

	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(140,90);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(-140,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-185,-550,370,840);
p.frameBounds = [rect];


(lib.dressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,-500);

	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(140,90);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(-140,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prev_mc},{t:this.next_mc},{t:this.set_1}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-185,-550,370,840);
p.frameBounds = [rect];


(lib.closet_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(205,110);

	this.shoes_0 = new lib.shoes_0_mc();
	this.shoes_0.setTransform(205,110);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(205,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.accessory_0}]},2).to({state:[]},1).to({state:[{t:this.headdress_0},{t:this.shoes_0}]},1).wait(1));

	// options
	this.hair_3 = new lib.hairstyle_3_4_mc();
	this.hair_3.setTransform(0,90);

	this.hair_2 = new lib.hairstyle_2_4_mc();
	this.hair_2.setTransform(105,-90);

	this.hair_1 = new lib.hairstyle_1_4_mc();
	this.hair_1.setTransform(-105,-90);

	this.hair_6 = new lib.hairstyle_6_4_mc();
	this.hair_6.setTransform(0,90);

	this.hair_5 = new lib.hairstyle_5_4_mc();
	this.hair_5.setTransform(105,-90);

	this.hair_4 = new lib.hairstyle_4_4_mc();
	this.hair_4.setTransform(-105,-90);

	this.dress_3 = new lib.dress_3_4_mc();
	this.dress_3.setTransform(135,-158);

	this.dress_4 = new lib.dress_4_4_mc();
	this.dress_4.setTransform(45,-158);

	this.dress_2 = new lib.dress_2_4_mc();
	this.dress_2.setTransform(-45,-158);

	this.dress_1 = new lib.dress_1_4_mc();
	this.dress_1.setTransform(-135,-158);

	this.accessory_4 = new lib.accessory_4_4_mc();
	this.accessory_4.setTransform(120,89);

	this.accessory_3 = new lib.accessory_3_4_mc();
	this.accessory_3.setTransform(35,122);

	this.accessory_2 = new lib.accessory_2_4_mc();
	this.accessory_2.setTransform(-45,122);

	this.accessory_1 = new lib.accessory_1_4_mc();
	this.accessory_1.setTransform(-130,139);

	this.top_1 = new lib.top_1_4_mc();
	this.top_1.setTransform(-120,-147.7,1,1,0,0,0,0,10.4);

	this.top_4 = new lib.top_4_4_mc();
	this.top_4.setTransform(120,-146.1,1,1,0,0,0,0,11.9);

	this.top_3 = new lib.top_3_4_mc();
	this.top_3.setTransform(40,-143.6,1,1,0,0,0,0,14.4);

	this.top_2 = new lib.top_2_4_mc();
	this.top_2.setTransform(-40.1,-142.6,1,1,0,0,0,-0.1,15.4);

	this.bottom_4 = new lib.bottom_4_4_mc();
	this.bottom_4.setTransform(117.5,-1.6,1,1,0,0,0,0,6.4);

	this.bottom_3 = new lib.bottom_3_4_mc();
	this.bottom_3.setTransform(37.5,-4.6,1,1,0,0,0,0,3.4);

	this.bottom_2 = new lib.bottom_2_4_mc();
	this.bottom_2.setTransform(-37.6,-0.1,1,1,0,0,0,-0.1,7.9);

	this.bottom_1 = new lib.bottom_1_4_mc();
	this.bottom_1.setTransform(-117.6,-3.1,1,1,0,0,0,-0.1,4.9);

	this.headdress_2 = new lib.headdress_2_4_mc();
	this.headdress_2.setTransform(70,8.5);

	this.headdress_1 = new lib.headdress_1_4_mc();
	this.headdress_1.setTransform(-70,10.5);

	this.shoes_4 = new lib.shoes_4_4_mc();
	this.shoes_4.setTransform(51.5,147);

	this.shoes_3 = new lib.shoes_3_4_mc();
	this.shoes_3.setTransform(140,148);

	this.shoes_2 = new lib.shoes_2_4_mc();
	this.shoes_2.setTransform(-43.5,136);

	this.shoes_1 = new lib.shoes_1_4_mc();
	this.shoes_1.setTransform(-140,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_2},{t:this.hair_3}]}).to({state:[{t:this.hair_4},{t:this.hair_5},{t:this.hair_6}]},1).to({state:[{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3},{t:this.accessory_4},{t:this.dress_1},{t:this.dress_2},{t:this.dress_4},{t:this.dress_3}]},1).to({state:[{t:this.bottom_1},{t:this.bottom_2},{t:this.bottom_3},{t:this.bottom_4},{t:this.top_2},{t:this.top_3},{t:this.top_4},{t:this.top_1}]},1).to({state:[{t:this.shoes_1},{t:this.shoes_2},{t:this.shoes_3},{t:this.shoes_4},{t:this.headdress_1},{t:this.headdress_2}]},1).wait(1));

	// decor
	this.instance = new lib.pipe_mc();
	this.instance.setTransform(0,100);

	this.instance_1 = new lib.pipe_mc();
	this.instance_1.setTransform(0,-80);

	this.instance_2 = new lib.pipe_mc();
	this.instance_2.setTransform(0,80);

	this.instance_3 = new lib.pipe_mc();
	this.instance_3.setTransform(0,-100);

	this.instance_4 = new lib.shelf_mc();
	this.instance_4.setTransform(0,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{y:-80}},{t:this.instance,p:{y:100}}]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{y:-80}},{t:this.instance,p:{y:100}}]},1).to({state:[{t:this.instance_1,p:{y:-150}},{t:this.instance,p:{y:10}}]},1).to({state:[{t:this.instance_1,p:{y:-150}},{t:this.instance,p:{y:0}}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-190,435,380);
p.frameBounds = [rect, rect, new cjs.Rectangle(-201.9,-165.4,424.9,352.4), new cjs.Rectangle(-200,-164.8,399,278.7), new cjs.Rectangle(-208,-108,431,304)];


(lib.closet_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(205,110);

	this.shoes_0 = new lib.shoes_0_mc();
	this.shoes_0.setTransform(205,110);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(205,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.accessory_0}]},2).to({state:[]},1).to({state:[{t:this.headdress_0},{t:this.shoes_0}]},1).wait(1));

	// options
	this.hair_3 = new lib.hairstyle_3_3_mc();
	this.hair_3.setTransform(0,90);

	this.hair_2 = new lib.hairstyle_2_3_mc();
	this.hair_2.setTransform(105,-90);

	this.hair_1 = new lib.hairstyle_1_3_mc();
	this.hair_1.setTransform(-105,-90);

	this.hair_6 = new lib.hairstyle_6_3_mc();
	this.hair_6.setTransform(0,90);

	this.hair_5 = new lib.hairstyle_5_3_mc();
	this.hair_5.setTransform(105,-90);

	this.hair_4 = new lib.hairstyle_4_3_mc();
	this.hair_4.setTransform(-105,-90);

	this.dress_3 = new lib.dress_3_3_mc();
	this.dress_3.setTransform(35,-158);

	this.accessory_3 = new lib.accessory_3_3_mc();
	this.accessory_3.setTransform(20,149);

	this.accessory_2 = new lib.accessory_2_3_mc();
	this.accessory_2.setTransform(110,127.2);

	this.accessory_1 = new lib.accessory_1_3_mc();
	this.accessory_1.setTransform(-100,128);

	this.dress_4 = new lib.dress_4_3_mc();
	this.dress_4.setTransform(115,-158);

	this.dress_2 = new lib.dress_2_3_mc();
	this.dress_2.setTransform(-55,-158);

	this.dress_1 = new lib.dress_1_3_mc();
	this.dress_1.setTransform(-145,-158);

	this.bottom_1 = new lib.bottom_1_3_mc();
	this.bottom_1.setTransform(-120.1,-1.1,1,1,0,0,0,-0.1,6.9);

	this.bottom_4 = new lib.bottom_4_3_mc();
	this.bottom_4.setTransform(-40,-8);

	this.top_1 = new lib.top_1_3_mc();
	this.top_1.setTransform(-135,-158);

	this.top_4 = new lib.top_4_3_mc();
	this.top_4.setTransform(135,-144.1,1,1,0,0,0,0,13.9);

	this.top_3 = new lib.top_3_3_mc();
	this.top_3.setTransform(45,-137.1,1,1,0,0,0,0,20.9);

	this.top_2 = new lib.top_2_3_mc();
	this.top_2.setTransform(-45.1,-135.1,1,1,0,0,0,-0.1,22.9);

	this.bottom_2 = new lib.bottom_2_3_mc();
	this.bottom_2.setTransform(120,-0.1,1,1,0,0,0,0,7.9);

	this.bottom_3 = new lib.bottom_3_3_mc();
	this.bottom_3.setTransform(40,-8);

	this.headdress_3 = new lib.headdress_3_3_mc();
	this.headdress_3.setTransform(0,-62);

	this.headdress_2 = new lib.headdress_2_3_mc();
	this.headdress_2.setTransform(-140,-54);

	this.headdress_1 = new lib.headdress_1_3_mc();
	this.headdress_1.setTransform(140,-47);

	this.shoes_4 = new lib.shoes_4_3_mc();
	this.shoes_4.setTransform(145,140);

	this.shoes_3 = new lib.shoes_3_3_mc();
	this.shoes_3.setTransform(50,125);

	this.shoes_2 = new lib.shoes_2_3_mc();
	this.shoes_2.setTransform(-45,130);

	this.shoes_1 = new lib.shoes_1_3_mc();
	this.shoes_1.setTransform(-145,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_2},{t:this.hair_3}]}).to({state:[{t:this.hair_4},{t:this.hair_5},{t:this.hair_6}]},1).to({state:[{t:this.dress_1},{t:this.dress_2},{t:this.dress_4},{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3},{t:this.dress_3}]},1).to({state:[{t:this.bottom_3},{t:this.bottom_2},{t:this.top_2},{t:this.top_3},{t:this.top_4},{t:this.top_1},{t:this.bottom_4},{t:this.bottom_1}]},1).to({state:[{t:this.shoes_1},{t:this.shoes_2},{t:this.shoes_3},{t:this.shoes_4},{t:this.headdress_1},{t:this.headdress_2},{t:this.headdress_3}]},1).wait(1));

	// decor
	this.instance = new lib.pipe_mc();
	this.instance.setTransform(0,100);

	this.instance_1 = new lib.pipe_mc();
	this.instance_1.setTransform(0,-80);

	this.instance_2 = new lib.pipe_mc();
	this.instance_2.setTransform(0,80);

	this.instance_3 = new lib.pipe_mc();
	this.instance_3.setTransform(0,-100);

	this.instance_4 = new lib.shelf_mc();
	this.instance_4.setTransform(0,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{y:-80}},{t:this.instance,p:{y:100}}]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{y:-80}},{t:this.instance,p:{y:100}}]},1).to({state:[{t:this.instance,p:{y:-150}}]},1).to({state:[{t:this.instance_1,p:{y:-150}},{t:this.instance,p:{y:0}}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-190,435,380);
p.frameBounds = [rect, rect, new cjs.Rectangle(-200,-167.3,423,354.1), new cjs.Rectangle(-200,-166.2,399,323.7), new cjs.Rectangle(-208,-108,431,291.8)];


(lib.closet_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(205,110);

	this.glasses_0 = new lib.glasses_0_mc();
	this.glasses_0.setTransform(-205,-90);

	this.shoes_0 = new lib.shoes_0_mc();
	this.shoes_0.setTransform(205,110);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(205,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.accessory_0}]},2).to({state:[]},1).to({state:[{t:this.headdress_0},{t:this.shoes_0},{t:this.glasses_0}]},1).wait(1));

	// options
	this.hair_3 = new lib.hairstyle_3_2_mc();
	this.hair_3.setTransform(0,90);

	this.hair_2 = new lib.hairstyle_2_2_mc();
	this.hair_2.setTransform(105,-90);

	this.hair_1 = new lib.hairstyle_1_2_mc();
	this.hair_1.setTransform(-105,-90);

	this.hair_6 = new lib.hairstyle_6_2_mc();
	this.hair_6.setTransform(0,90);

	this.hair_5 = new lib.hairstyle_5_2_mc();
	this.hair_5.setTransform(105,-90);

	this.hair_4 = new lib.hairstyle_4_2_mc();
	this.hair_4.setTransform(-105,-90);

	this.dress_3 = new lib.dress_3_2_mc();
	this.dress_3.setTransform(30,-158);

	this.dress_4 = new lib.dress_4_2_mc();
	this.dress_4.setTransform(120,-158);

	this.dress_2 = new lib.dress_2_2_mc();
	this.dress_2.setTransform(-60,-158);

	this.dress_1 = new lib.dress_1_2_mc();
	this.dress_1.setTransform(-150,-158);

	this.accessory_3 = new lib.accessory_3_2_mc();
	this.accessory_3.setTransform(0,125);

	this.accessory_2 = new lib.accessory_2_2_mc();
	this.accessory_2.setTransform(110,135);

	this.accessory_1 = new lib.accessory_1_2_mc();
	this.accessory_1.setTransform(-110,142);

	this.top_4 = new lib.top_4_2_mc();
	this.top_4.setTransform(130,-158);

	this.top_3 = new lib.top_3_2_mc();
	this.top_3.setTransform(-40,-158);

	this.top_2 = new lib.top_2_2_mc();
	this.top_2.setTransform(45,-158);

	this.top_1 = new lib.top_1_2_mc();
	this.top_1.setTransform(-135,-158);

	this.bottom_4 = new lib.bottom_4_2_mc();
	this.bottom_4.setTransform(-120,-48);

	this.bottom_3 = new lib.bottom_3_2_mc();
	this.bottom_3.setTransform(120,-48);

	this.bottom_2 = new lib.bottom_2_2_mc();
	this.bottom_2.setTransform(-40,-48);

	this.bottom_1 = new lib.bottom_1_2_mc();
	this.bottom_1.setTransform(40,-48);

	this.shoes_4 = new lib.shoes_4_2_mc();
	this.shoes_4.setTransform(130,137);

	this.shoes_3 = new lib.shoes_3_2_mc();
	this.shoes_3.setTransform(47.5,135);

	this.shoes_2 = new lib.shoes_2_2_mc();
	this.shoes_2.setTransform(-42.5,125);

	this.shoes_1 = new lib.shoes_1_2_mc();
	this.shoes_1.setTransform(-135,127);

	this.glasses_1 = new lib.glasses_1_2_mc();
	this.glasses_1.setTransform(-120,-55);

	this.headdress_2 = new lib.headdress_2_2_mc();
	this.headdress_2.setTransform(0,-67);

	this.headdress_1 = new lib.headdress_1_2_mc();
	this.headdress_1.setTransform(120,-62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_2},{t:this.hair_3}]}).to({state:[{t:this.hair_4},{t:this.hair_5},{t:this.hair_6}]},1).to({state:[{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3},{t:this.dress_1},{t:this.dress_2},{t:this.dress_4},{t:this.dress_3}]},1).to({state:[{t:this.bottom_1},{t:this.bottom_2},{t:this.bottom_3},{t:this.bottom_4},{t:this.top_1},{t:this.top_2},{t:this.top_3},{t:this.top_4}]},1).to({state:[{t:this.headdress_1},{t:this.headdress_2},{t:this.glasses_1},{t:this.shoes_1},{t:this.shoes_2},{t:this.shoes_3},{t:this.shoes_4}]},1).wait(1));

	// decor
	this.instance = new lib.pipe_mc();
	this.instance.setTransform(0,100);

	this.instance_1 = new lib.pipe_mc();
	this.instance_1.setTransform(0,-80);

	this.instance_2 = new lib.pipe_mc();
	this.instance_2.setTransform(0,80);

	this.instance_3 = new lib.pipe_mc();
	this.instance_3.setTransform(0,-100);

	this.instance_4 = new lib.shelf_mc();
	this.instance_4.setTransform(0,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{y:-80}},{t:this.instance,p:{y:100}}]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{y:-80}},{t:this.instance,p:{y:100}}]},1).to({state:[{t:this.instance,p:{y:-150}}]},1).to({state:[{t:this.instance_1,p:{y:-150}},{t:this.instance,p:{y:-40}}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-190,435,380);
p.frameBounds = [rect, rect, new cjs.Rectangle(-200,-166.7,423,351.9), new cjs.Rectangle(-200,-166.7,399,408.5), new cjs.Rectangle(-223,-112,446,294.1)];


(lib.closet_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(205,110);

	this.shoes_0 = new lib.shoes_0_mc();
	this.shoes_0.setTransform(205,110);

	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(205,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.accessory_0}]},3).to({state:[{t:this.headdress_0},{t:this.shoes_0}]},1).wait(1));

	// options
	this.hair_3 = new lib.hairstyle_3_1_mc();
	this.hair_3.setTransform(0,90);

	this.hair_2 = new lib.hairstyle_2_1_mc();
	this.hair_2.setTransform(105,-90);

	this.hair_1 = new lib.hairstyle_1_1_mc();
	this.hair_1.setTransform(-105,-90);

	this.hair_6 = new lib.hairstyle_6_1_mc();
	this.hair_6.setTransform(0,90);

	this.hair_5 = new lib.hairstyle_5_1_mc();
	this.hair_5.setTransform(105,-90);

	this.hair_4 = new lib.hairstyle_4_1_mc();
	this.hair_4.setTransform(-105,-90);

	this.dress_2 = new lib.dress_2_1_mc();
	this.dress_2.setTransform(-135,-158);

	this.dress_1 = new lib.dress_1_1_mc();
	this.dress_1.setTransform(-45,-158);

	this.dress_4 = new lib.dress_4_1_mc();
	this.dress_4.setTransform(45,-158);

	this.dress_3 = new lib.dress_3_1_mc();
	this.dress_3.setTransform(135,-158);

	this.top_4 = new lib.top_4_1_mc();
	this.top_4.setTransform(135,-158);

	this.top_3 = new lib.top_3_1_mc();
	this.top_3.setTransform(45,-158);

	this.top_2 = new lib.top_2_1_mc();
	this.top_2.setTransform(-45,-158);

	this.top_1 = new lib.top_1_1_mc();
	this.top_1.setTransform(-135,-158);

	this.bottom_4 = new lib.bottom_4_1_mc();
	this.bottom_4.setTransform(115,-48);

	this.bottom_3 = new lib.bottom_3_1_mc();
	this.bottom_3.setTransform(35,-48);

	this.bottom_2 = new lib.bottom_2_1_mc();
	this.bottom_2.setTransform(-35,-48);

	this.bottom_1 = new lib.bottom_1_1_mc();
	this.bottom_1.setTransform(-115,-48);

	this.accessory_4 = new lib.accessory_4_1_mc();
	this.accessory_4.setTransform(70,128);

	this.accessory_3 = new lib.accessory_3_1_mc();
	this.accessory_3.setTransform(-25,130);

	this.accessory_2 = new lib.accessory_2_1_mc();
	this.accessory_2.setTransform(-125,135);

	this.accessory_1 = new lib.accessory_1_1_mc();
	this.accessory_1.setTransform(145,150);

	this.shoes_4 = new lib.shoes_4_1_mc();
	this.shoes_4.setTransform(50,148);

	this.shoes_3 = new lib.shoes_3_1_mc();
	this.shoes_3.setTransform(135,159);

	this.headdress_2 = new lib.headdress_2_1_mc();
	this.headdress_2.setTransform(70,-55);

	this.headdress_1 = new lib.headdress_1_1_mc();
	this.headdress_1.setTransform(-70,-55);

	this.shoes_2 = new lib.shoes_2_1_mc();
	this.shoes_2.setTransform(-30,144);

	this.shoes_1 = new lib.shoes_1_1_mc();
	this.shoes_1.setTransform(-130,88);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_2},{t:this.hair_3}]}).to({state:[{t:this.hair_4},{t:this.hair_5},{t:this.hair_6}]},1).to({state:[{t:this.dress_3},{t:this.dress_4},{t:this.dress_1},{t:this.dress_2}]},1).to({state:[{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3},{t:this.accessory_4},{t:this.bottom_1},{t:this.bottom_2},{t:this.bottom_3},{t:this.bottom_4},{t:this.top_1},{t:this.top_2},{t:this.top_3},{t:this.top_4}]},1).to({state:[{t:this.shoes_1},{t:this.shoes_2},{t:this.headdress_1},{t:this.headdress_2},{t:this.shoes_3},{t:this.shoes_4}]},1).wait(1));

	// decor
	this.instance = new lib.pipe_mc();
	this.instance.setTransform(0,100);

	this.instance_1 = new lib.pipe_mc();
	this.instance_1.setTransform(0,-80);

	this.instance_2 = new lib.pipe_mc();
	this.instance_2.setTransform(0,80);

	this.instance_3 = new lib.pipe_mc();
	this.instance_3.setTransform(0,-100);

	this.instance_4 = new lib.shelf_mc();
	this.instance_4.setTransform(0,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{y:-80}},{t:this.instance,p:{y:100}}]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{y:-80}},{t:this.instance,p:{y:100}}]},1).to({state:[{t:this.instance,p:{y:-150}}]},1).to({state:[{t:this.instance_1,p:{y:-150}},{t:this.instance,p:{y:-40}}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-190,435,380);
p.frameBounds = [rect, rect, new cjs.Rectangle(-202.1,-167,401.1,268.2), new cjs.Rectangle(-200,-165.8,423,355.9), new cjs.Rectangle(-208,-108,431,309.4)];


(lib.bodyDressupPanel_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_4
	this.hero_4 = new lib.closet_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-190,435,380);
p.frameBounds = [rect];


(lib.bodyDressupPanel_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_3
	this.hero_3 = new lib.closet_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-190,435,380);
p.frameBounds = [rect];


(lib.bodyDressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-190,435,380);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-190,435,380);
p.frameBounds = [rect];


(lib.moreGames_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_2_mc();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AsJMJQlClCABnHQgBnGFClCQFDlCHGgBQHHABFCFCQFDFCgBHGQABHHlDFCQlCFDnHAAQnGAAlDlDg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.7,-96,219.7,193.1);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-110,-110,220,220)];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(600,450,0.963,0.963);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400,900,0.901,0.86);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(600,540,0.778,0.777);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,-50);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instruction_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this._moreGames_btn},{t:this.logo_btn},{t:this.credits_btn},{t:this.moreGames_btn},{t:this.play_btn}]}).wait(1));

	// title
	this.instance = new lib.title_mc();
	this.instance.setTransform(300,435);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.shadow_decor_mc();
	this.instance_1.setTransform(400,500,1,1,0,0,0,600,100);
	this.instance_1.alpha = 0.301;
	this.instance_1.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// heroes
	this.instance_2 = new lib.heroes_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.instance_3 = new lib.background_5_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-85,1200,1068.4);
p.frameBounds = [rect];


(lib.SelectionScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,-50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,-50);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.logo_btn},{t:this._moreGames_btn},{t:this.moreGames_btn}]}).wait(1));

	// locations
	this.locations_mc = new lib.locations_mc();
	this.locations_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.locations_mc).wait(1));

	// decor
	this.instance = new lib.shadow_decor_mc();
	this.instance.setTransform(400,500,1,1,0,0,0,600,100);
	this.instance.alpha = 0.199;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-176.9,1200,1174.1);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.facebook_btn = new lib.facebook_btn();
	this.facebook_btn.setTransform(400,1000,0.8,0.8);
	new cjs.ButtonHelper(this.facebook_btn, 0, 1, 2, false, new lib.facebook_btn(), 3);

	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.playAgain_btn = new lib.play_again_btn();
	this.playAgain_btn.setTransform(140,535,0.889,0.888);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.play_again_btn(), 3);

	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(660,535,0.889,0.888);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.prev_mc = new lib.prev_nav_mc();
	this.prev_mc.setTransform(350,530);

	this.next_mc = new lib.next_nav_mc();
	this.next_mc.setTransform(450,530);

	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400,-200);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,-100);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100.2,50.1,0.905,0.904,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,-50);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.logo_btn},{t:this._moreGames_btn},{t:this.next_btn},{t:this.next_mc},{t:this.prev_mc},{t:this.photo_btn},{t:this.playAgain_btn},{t:this.moreGames_btn},{t:this.facebook_btn}]}).wait(1));

	// banners
	this.banner_2_mc = new lib.banner_2_mc();
	this.banner_2_mc.setTransform(600,-300);

	this.banner_1_mc = new lib.banner_1_mc();
	this.banner_1_mc.setTransform(200,-300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.banner_1_mc},{t:this.banner_2_mc}]}).wait(1));

	// decor
	this.instance = new lib.shadow_decor_mc();
	this.instance.setTransform(400,500,1,1,0,0,0,600,100);
	this.instance.alpha = 0.102;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_mc();
	this.photoContainer_mc.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-490,1200,1525.9);
p.frameBounds = [rect];


(lib.quest_1_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(220,550,0.88,0.88);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_7_mc();
	this.dressupPanel_mc.setTransform(220,360);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1));

	// hero
	this.hero_4 = new lib.hero_4_makeup_mc();
	this.hero_4.setTransform(580,200);

	this.timeline.addTween(cjs.Tween.get(this.hero_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(35,-190,817,840);
p.frameBounds = [rect];


(lib.quest_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(220,550,0.88,0.88);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_5_mc();
	this.dressupPanel_mc.setTransform(220,360);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1));

	// hero
	this.hero_3 = new lib.hero_3_makeup_mc();
	this.hero_3.setTransform(580,240);

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(35,-190,790.7,840);
p.frameBounds = [rect];


(lib.quest_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(220,550,0.88,0.88);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_3_mc();
	this.dressupPanel_mc.setTransform(220,360);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1));

	// hero
	this.hero_2 = new lib.hero_2_makeup_mc();
	this.hero_2.setTransform(565,190);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(35,-190,708,840);
p.frameBounds = [rect];


(lib.quest_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(220,550,0.88,0.88);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_1_mc();
	this.dressupPanel_mc.setTransform(220,360);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1));

	// hero
	this.hero_1 = new lib.hero_1_makeup_mc();
	this.hero_1.setTransform(560,265);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(35,-190,666.4,843.9);
p.frameBounds = [rect];


(lib.dressupPanel_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-200,20);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(200,20);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,-500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-550,480,800);
p.frameBounds = [rect];


(lib.dressupPanel_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-200,20);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(200,20);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,-500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-550,480,800);
p.frameBounds = [rect];


(lib.dressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-200,20);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(200,20);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,-500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-550,480,800);
p.frameBounds = [rect];


(lib.dressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.prev_2_mc();
	this.prev_mc.setTransform(-200,20);

	this.next_mc = new lib.next_2_mc();
	this.next_mc.setTransform(200,20);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,-500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-550,480,800);
p.frameBounds = [rect];


(lib.quest_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(450,-60);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(350,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.hint_mc = new lib.hint_rub_0_mc();
	this.hint_mc.setTransform(400,-200);

	this.indicator_mc = new lib.indicator_part_4_mc();
	this.indicator_mc.setTransform(400,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.hint_mc}]}).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(35,-261.3,817,911.4);
p.frameBounds = [rect];


(lib.quest_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(450,-60);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(350,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.hint_mc = new lib.hint_rub_0_mc();
	this.hint_mc.setTransform(400,-200);

	this.indicator_mc = new lib.indicator_part_4_mc();
	this.indicator_mc.setTransform(400,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.hint_mc}]}).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(35,-261.3,790.7,911.4);
p.frameBounds = [rect];


(lib.quest_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(450,-60);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(350,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.hint_mc = new lib.hint_rub_0_mc();
	this.hint_mc.setTransform(400,-200);

	this.indicator_mc = new lib.indicator_part_4_mc();
	this.indicator_mc.setTransform(400,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.hint_mc}]}).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(35,-261.3,708,911.4);
p.frameBounds = [rect];


(lib.quest_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(450,-60);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(350,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.hint_mc = new lib.hint_rub_0_mc();
	this.hint_mc.setTransform(400,-200);

	this.indicator_mc = new lib.indicator_part_4_mc();
	this.indicator_mc.setTransform(400,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.hint_mc}]}).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(35,-261.3,666.4,915.3);
p.frameBounds = [rect];


(lib.quest_1_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(280,550,0.88,0.88);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_8_mc();
	this.dressupPanel_mc.setTransform(280,315);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1));

	// hero
	this.hero_4 = new lib.hero_4_mc();
	this.hero_4.setTransform(640,315);

	this.timeline.addTween(cjs.Tween.get(this.hero_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(40,-235,714.4,837.8);
p.frameBounds = [rect];


(lib.quest_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(280,550,0.88,0.88);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_6_mc();
	this.dressupPanel_mc.setTransform(280,315);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1));

	// hero
	this.hero_3 = new lib.hero_3_mc();
	this.hero_3.setTransform(630,315);

	this.timeline.addTween(cjs.Tween.get(this.hero_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(40,-235,722.4,837.8);
p.frameBounds = [rect];


(lib.quest_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(280,550,0.88,0.88);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_4_mc();
	this.dressupPanel_mc.setTransform(280,315);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1));

	// hero
	this.hero_2 = new lib.hero_2_mc();
	this.hero_2.setTransform(610,360);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(40,-235,692.2,837.8);
p.frameBounds = [rect];


(lib.quest_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_2_btn();
	this.next_btn.setTransform(280,550,0.88,0.88);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_2_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).wait(1));

	// panel
	this.dressupPanel_mc = new lib.dressupPanel_2_mc();
	this.dressupPanel_mc.setTransform(280,315);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_mc).wait(1));

	// hero
	this.hero_1 = new lib.hero_1_mc();
	this.hero_1.setTransform(620,360);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(40,-235,695,837.8);
p.frameBounds = [rect];


(lib.LocationScreen_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,810);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,-50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,-50);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.logo_btn},{t:this._moreGames_btn},{t:this.skip_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1258.5);
p.frameBounds = [rect];


(lib.LocationScreen_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,810);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,-50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,-50);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.logo_btn},{t:this._moreGames_btn},{t:this.skip_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1258.5);
p.frameBounds = [rect];


(lib.LocationScreen_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,810);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,-50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,-50);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.logo_btn},{t:this._moreGames_btn},{t:this.skip_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1258.5);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,810);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,-50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,-50);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.logo_btn},{t:this._moreGames_btn},{t:this.skip_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1258.5);
p.frameBounds = [rect];


(lib.quest_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(450,-60);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(350,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.hint_mc = new lib.hint_rub_0_mc();
	this.hint_mc.setTransform(400,-200);

	this.indicator_mc = new lib.indicator_part_4_mc();
	this.indicator_mc.setTransform(400,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.hint_mc}]}).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(40,-261.3,714.4,862.3);
p.frameBounds = [rect];


(lib.quest_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(450,-60);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(350,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.hint_mc = new lib.hint_rub_0_mc();
	this.hint_mc.setTransform(400,-200);

	this.indicator_mc = new lib.indicator_part_4_mc();
	this.indicator_mc.setTransform(400,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.hint_mc}]}).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(40,-261.3,722.4,862.3);
p.frameBounds = [rect];


(lib.quest_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(450,-60);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(350,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.hint_mc = new lib.hint_rub_0_mc();
	this.hint_mc.setTransform(400,-200);

	this.indicator_mc = new lib.indicator_part_4_mc();
	this.indicator_mc.setTransform(400,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.hint_mc}]}).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(40,-261.3,692.2,862.3);
p.frameBounds = [rect];


(lib.quest_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(450,-60);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(350,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.hint_mc = new lib.hint_rub_0_mc();
	this.hint_mc.setTransform(400,-200);

	this.indicator_mc = new lib.indicator_part_4_mc();
	this.indicator_mc.setTransform(400,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.hint_mc}]}).wait(1));

	// objects
	this.frame_1_mc = new lib.quest_1_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.frame_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(40,-261.3,695,862.3);
p.frameBounds = [rect];


(lib.LocationScreen_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400,900,0.865,0.865);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,810);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,-50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,-50);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.logo_btn},{t:this._moreGames_btn},{t:this.skip_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1245.2);
p.frameBounds = [rect];


(lib.LocationScreen_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400,900,0.865,0.865);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,810);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,-50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,-50);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.logo_btn},{t:this._moreGames_btn},{t:this.skip_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1245.2);
p.frameBounds = [rect];


(lib.LocationScreen_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400,900,0.865,0.865);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,810);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,-50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,-50);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.logo_btn},{t:this._moreGames_btn},{t:this.skip_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1245.2);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.moreGames_btn();
	this.moreGames_btn.setTransform(400,900,0.865,0.865);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.moreGames_btn(), 3);

	this.skip_btn = new lib.skip_btn();
	this.skip_btn.setTransform(400,810);
	new cjs.ButtonHelper(this.skip_btn, 0, 1, 2, false, new lib.skip_btn(), 3);

	this._moreGames_btn = new lib.more_games_btn();
	this._moreGames_btn.setTransform(400,700);
	new cjs.ButtonHelper(this._moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,-50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690,-50);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.logo_btn},{t:this._moreGames_btn},{t:this.skip_btn},{t:this.moreGames_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-261.3,1200,1245.2);
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
	this.text = new cjs.Text("storage", "32px 'Arial'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 38;
	this.text.lineWidth = 123;
	this.text.setTransform(63.5,2);

	this.instance = new lib.PreloaderScreen();
	this.instance.setTransform(-2,0.1,1,1,0,0,0,-2,0.1);

	this.instance_1 = new lib.CopyrightScreen();

	this.instance_2 = new lib.WelcomeScreen();

	this.instance_3 = new lib.SelectionScreen();

	this.instance_4 = new lib.LocationScreen_1();

	this.instance_5 = new lib.LocationScreen_2();

	this.instance_6 = new lib.LocationScreen_3();
	this.instance_6.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_7 = new lib.LocationScreen_4();

	this.instance_8 = new lib.LocationScreen_5();
	this.instance_8.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_9 = new lib.LocationScreen_6();

	this.instance_10 = new lib.LocationScreen_7();
	this.instance_10.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_11 = new lib.LocationScreen_8();
	this.instance_11.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.redirect_mc = new lib.RedirectScreen();

	this.instance_12 = new lib.ResultScreen();
	this.instance_12.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_13 = new lib.InstructionScreen();

	this.instance_14 = new lib.TrackMove();
	this.instance_14.setTransform(361.4,68.4);

	this.instance_15 = new lib.Cursor();
	this.instance_15.setTransform(257.2,68.7);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(158.7,69.2);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(65.7,69.2);

	this.instance_16 = new lib.OrientationLockScreen();

	this.instance_17 = new lib.CurtainScreen();

	this.instance_18 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.redirect_mc}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_15},{t:this.instance_14}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[]},1).to({state:[{t:this.instance_18}]},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,127,39.8);
p.frameBounds = [rect, new cjs.Rectangle(-200,0,1200,601.4), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-200,-85,1200,1068.4), new cjs.Rectangle(-200,-176.9,1200,1174.1), new cjs.Rectangle(-200,-261.3,1200,1258.5), new cjs.Rectangle(-200,-261.3,1200,1245.2), new cjs.Rectangle(-200,-261.3,1200,1258.5), new cjs.Rectangle(-200,-261.3,1200,1245.2), new cjs.Rectangle(-200,-261.3,1200,1258.5), new cjs.Rectangle(-200,-261.3,1200,1245.2), new cjs.Rectangle(-200,-261.3,1200,1258.5), new cjs.Rectangle(-200,-261.3,1200,1245.2), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-200,-490,1200,1524.1), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(30.7,18.4,380.7,100), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-1400,0,1200,600), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-10,1220,620)];


// stage content:
(lib.storage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// storage
	this.instance = new lib.storage_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(400,300,127,39.8);
p.frameBounds = [rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;