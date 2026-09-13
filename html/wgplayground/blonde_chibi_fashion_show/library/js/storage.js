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
		{src:"library/images/storage_atlas_11.png", id:"storage_atlas_11"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_5", frames: [[0,0,1200,600],[0,602,580,580],[582,602,490,490]]},
		{name:"storage_atlas_6", frames: [[0,694,430,430],[492,0,490,490],[0,0,490,490],[0,492,1200,200],[432,694,640,280],[432,976,640,280]]},
		{name:"storage_atlas_7", frames: [[0,422,420,420],[0,0,420,420],[422,0,361,445],[431,813,325,447],[422,447,405,364],[0,844,429,408],[829,302,360,360],[829,664,360,360],[785,0,500,300]]},
		{name:"storage_atlas_8", frames: [[554,576,172,434],[728,977,203,293],[211,972,187,306],[0,972,209,323],[242,0,248,423],[1020,758,203,304],[728,758,290,217],[933,1064,252,225],[0,482,225,488],[0,0,240,480],[227,482,173,445],[400,1078,274,206],[984,0,189,458],[728,576,380,180],[402,576,150,500],[492,0,490,190],[492,192,490,190],[492,384,490,190]]},
		{name:"storage_atlas_9", frames: [[1053,806,245,136],[386,871,167,221],[0,894,182,266],[0,442,222,229],[735,214,173,236],[733,452,173,220],[954,0,178,252],[545,209,188,228],[184,894,200,218],[1117,944,178,178],[232,524,225,167],[184,1114,225,167],[234,372,280,150],[780,998,153,229],[1134,0,152,236],[624,998,154,229],[1134,238,155,230],[555,766,154,230],[908,452,153,229],[711,766,154,230],[232,693,213,176],[506,0,227,207],[0,0,267,209],[516,439,215,183],[735,0,217,212],[0,673,230,219],[269,0,235,208],[411,1094,211,174],[910,254,222,179],[269,210,274,160],[1063,470,232,148],[0,211,232,229],[459,624,260,140],[935,944,180,180],[1063,620,184,184],[867,683,184,184]]},
		{name:"storage_atlas_10", frames: [[436,987,100,100],[440,514,93,189],[989,1132,97,85],[1199,647,87,109],[392,705,98,161],[897,772,153,83],[963,176,126,190],[835,176,126,192],[905,1161,82,101],[686,176,147,165],[754,370,142,156],[176,333,160,178],[1181,0,103,256],[494,338,136,174],[0,0,123,253],[535,654,145,114],[535,540,150,112],[176,176,184,155],[492,770,143,108],[0,891,212,135],[989,1220,147,54],[632,343,120,195],[1043,647,154,78],[1125,823,140,78],[565,1155,134,68],[402,1180,161,84],[811,691,169,79],[565,1225,118,75],[1052,727,118,94],[1125,903,105,104],[1012,857,111,109],[734,911,110,87],[637,789,136,113],[242,763,148,120],[687,540,137,118],[0,769,240,120],[893,1049,80,110],[975,1050,110,80],[898,482,200,110],[1100,370,200,110],[0,1183,260,110],[125,0,174,174],[477,0,174,174],[0,255,174,174],[829,0,174,174],[301,0,174,174],[0,431,174,174],[1005,0,174,174],[653,0,174,174],[189,1028,126,153],[803,1168,100,84],[618,904,114,90],[188,513,124,153],[314,513,124,153],[701,1168,100,84],[1100,482,132,163],[0,607,186,160],[0,1028,187,153],[701,1112,162,54],[508,1100,172,53],[1087,1074,158,52],[1180,1128,118,68],[897,857,113,108],[188,668,197,93],[317,1106,189,72],[1117,1009,131,63],[262,1183,138,102],[538,996,92,102],[317,987,117,117],[508,880,108,96],[897,594,144,95],[1180,1198,92,87],[632,996,95,94],[242,885,140,100],[682,660,127,127],[338,338,154,154],[1088,1128,90,90],[384,885,100,100],[898,370,200,110],[1091,258,200,110],[362,176,160,160],[775,789,120,120],[524,176,160,160],[811,1000,80,110],[729,1000,80,110],[1005,968,110,80],[893,967,110,80]]},
		{name:"storage_atlas_11", frames: [[355,82,62,88],[92,190,79,85],[0,91,65,120],[218,620,68,72],[91,0,92,82],[0,0,89,89],[419,47,89,61],[0,532,92,73],[327,412,123,31],[188,407,137,37],[406,231,106,36],[387,279,103,41],[327,378,135,32],[190,146,125,40],[186,818,121,29],[94,507,134,39],[264,237,140,40],[67,132,121,56],[173,190,144,45],[484,1007,25,10],[60,507,26,19],[317,146,27,18],[45,1005,35,13],[67,190,22,18],[245,1004,38,18],[464,942,42,21],[442,1007,40,17],[168,348,100,57],[254,82,99,62],[185,0,104,66],[287,485,60,65],[419,110,93,57],[0,887,60,53],[150,620,65,59],[0,607,72,82],[270,326,100,50],[270,378,50,19],[332,942,52,39],[386,970,54,36],[190,318,70,26],[183,460,44,37],[424,814,75,35],[412,552,84,42],[389,854,80,34],[150,548,70,70],[146,681,70,70],[320,714,60,60],[460,732,34,80],[292,924,38,60],[83,968,52,46],[119,877,54,52],[350,590,60,60],[424,732,34,80],[245,942,38,60],[137,968,52,46],[94,548,54,52],[175,880,70,40],[247,880,43,60],[0,974,70,29],[288,652,60,60],[191,922,52,46],[191,970,52,41],[436,634,58,57],[473,366,34,80],[320,776,60,38],[442,970,55,35],[332,983,50,38],[222,548,60,65],[411,445,60,60],[442,169,67,60],[62,877,55,60],[119,931,70,35],[64,348,102,59],[92,277,96,69],[372,326,112,38],[389,890,99,27],[378,919,111,21],[309,818,103,34],[412,596,96,36],[284,552,101,36],[382,696,101,34],[186,849,114,29],[91,84,161,46],[190,237,72,79],[382,732,40,83],[230,446,55,86],[0,414,58,116],[291,0,80,80],[0,300,62,112],[412,634,18,15],[285,1009,38,13],[373,47,42,21],[0,1005,43,19],[384,1008,42,14],[285,986,41,21],[332,924,40,15],[452,412,15,22],[319,172,121,45],[60,460,121,45],[264,279,121,45],[287,446,120,37],[373,0,121,45],[64,409,122,49],[0,213,90,85],[471,851,36,31],[386,942,76,26],[350,652,84,42],[302,854,85,38],[292,894,84,28],[411,507,83,43],[0,942,81,30],[473,448,30,44],[74,607,74,72],[280,714,30,30],[0,825,60,60],[62,815,60,60],[124,815,60,60],[288,590,60,60],[0,763,60,60],[258,756,60,60],[218,694,60,60],[134,753,60,60],[72,753,60,60],[196,756,60,60],[349,485,60,60],[0,691,70,70],[74,681,70,70]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
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
	this.spriteSheet = ss["storage_atlas_3"];
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
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.barbie_bag1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.barbie_bag2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.barbie_bag3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.barbie_bag4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.barbie_bag5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.barbie_bag6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.barbie_bag7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.barbie_bag8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.barbie_body_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.barbie_bottom_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.barbie_bottom_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.barbie_bottom_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.barbie_bottom_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.barbie_bottom_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.barbie_bottom_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.barbie_bottom_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.barbie_bottom_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.barbie_dress_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.barbie_dress_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.barbie_dress_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.barbie_dress_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.barbie_dress_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.barbie_dress_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.barbie_dress_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.barbie_dress_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.barbie_eyes_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.barbie_eyes_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.barbie_eyes_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.barbie_eyes_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.barbie_eyes_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.barbie_eyes_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.barbie_eyes_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.barbie_eyes_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.barbie_fringe_decor10_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.barbie_fringe_decor11_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.barbie_fringe_decor12_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.barbie_fringe_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.barbie_fringe_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.barbie_fringe_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.barbie_fringe_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.barbie_fringe_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.barbie_fringe_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.barbie_fringe_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.barbie_fringe_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.barbie_fringe_decor9_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.barbie_glasses1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.barbie_glasses2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.barbie_glasses3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.barbie_glasses4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.barbie_hair_decor10_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.barbie_hair_decor11_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.barbie_hair_decor12_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.barbie_hair_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.barbie_hair_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.barbie_hair_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.barbie_hair_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.barbie_hair_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.barbie_hair_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.barbie_hair_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.barbie_hair_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.barbie_hair_decor9_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.barbie_hat_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.barbie_hat_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.barbie_hat_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.barbie_hat_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.barbie_hat_5_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.barbie_hat_6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.barbie_hat_7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.barbie_hat_8_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.barbie_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.barbie_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.barbie_lips3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.barbie_lips4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.barbie_lips5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.barbie_lips6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.barbie_lips7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.barbie_lips8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.barbie_shoes_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.barbie_shoes_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.barbie_shoes_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.barbie_shoes_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.barbie_shoes_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.barbie_shoes_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.barbie_shoes_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.barbie_shoes_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.barbie_top_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.barbie_top_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.barbie_top_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.barbie_top_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.barbie_top_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.barbie_top_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.barbie_top_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.barbie_top_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.bg_navigation_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.bg_panel_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bl1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.bl2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.bl3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.bl4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.bl5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.bl6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.bl7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.bl8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.cancel_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.check_category_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.check_subcategory_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.color_picker_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.color_picker_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.credits_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.done_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.facebook_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hm1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hm2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.icon_background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.icon_background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.icon_background_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.icon_background_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.icon_background_5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.icon_background_6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.icon_background_7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.icon_background_8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.icon_category_10_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.icon_category_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.icon_category_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.icon_category_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.icon_category_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.icon_category_5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.icon_category_6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.icon_category_7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.icon_category_8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.icon_category_9_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_10_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_11_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_12_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_13_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_14_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_15_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_16_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.icon_subcategory_9_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.instruction_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.ken_boby_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.ken_bottom_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.ken_bottom_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.ken_bottom_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.ken_bottom_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.ken_bottom_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.ken_bottom_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.ken_bottom_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.ken_bottom_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.ken_dress_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.ken_dress_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.ken_dress_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.ken_dress_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.ken_dress_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.ken_dress_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.ken_dress_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.ken_dress_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.ken_eyes_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.ken_eyes_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.ken_eyes_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.ken_eyes_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.ken_eyes_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.ken_eyes_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.ken_eyes_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.ken_eyes_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.ken_fringe_decor10_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.ken_fringe_decor11_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.ken_fringe_decor12_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.ken_fringe_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.ken_fringe_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.ken_fringe_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.ken_fringe_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.ken_fringe_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.ken_fringe_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.ken_fringe_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.ken_fringe_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.ken_fringe_decor9_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.ken_glasses_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.ken_glasses_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.ken_glasses_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.ken_glasses_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.ken_hand1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.ken_hand2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.ken_hand3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.ken_hand4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.ken_hand5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.ken_hand6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.ken_hand7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.ken_hand8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.ken_hat_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.ken_hat_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.ken_hat_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.ken_hat_4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.ken_lips_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.ken_lips_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.ken_lips_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.ken_lips_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.ken_lips_5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.ken_lips_6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.ken_lips_7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.ken_lips_8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.ken_shoes_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.ken_shoes_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.ken_shoes_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.ken_shoes_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.ken_shoes_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.ken_shoes_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.ken_shoes_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.ken_shoes_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.ken_top_decor1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.ken_top_decor2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.ken_top_decor3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.ken_top_decor4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.ken_top_decor5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.ken_top_decor6_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.ken_top_decor7_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.ken_top_decor8_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.kl1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.kl2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.kl3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.kl4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.kl5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.kl6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.kl7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.kl8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.km1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.logo_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.nav_hero_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.nav_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.numbers_separator_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.photo_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.play_again_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.play_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.play_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.random_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.redirect_3_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.reset_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.shadow_decor_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.substrate_category_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.substrate_category_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.substrate_option_0_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.substrate_option_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.substrate_subcategory_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.substrate_subcategory_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.title_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.title_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.title_3_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(5);
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
	this.instance.setTransform(-245,-245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-245,490,490);
p.frameBounds = [rect];


(lib.redirect_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.redirect_2_img();
	this.instance.setTransform(-245,-245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-245,490,490);
p.frameBounds = [rect];


(lib.redirect_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.redirect_1_img();
	this.instance.setTransform(-245,-245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-245,490,490);
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

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgD5Au4MAAAhdvIHzAAMAAABdvg");
	this.shape.setTransform(25,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,50,600);
p.frameBounds = [rect];


(lib.preloader_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FCB9D5","#FEF5F9"],[0,1],8.6,-217.9,-6.3,159.7).s().p("EhduAu4MAAAhdvMC7dAAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.preloader_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.298)","rgba(255,255,255,0)"],[0,0.467,1],-49.9,0,50,0).s().p("AnzPnIAA/NIPnAAIAAfNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-100,100,200);
p.frameBounds = [rect];


(lib.preloader_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(189,37,94,0.098)").s().p("AnzGPQilABh2h2Qh1h1AAilQAAikB1h1QB2h1ClAAIPnAAQClAAB1B1QB2B1AACkQAAClh2B1Qh1B2ilgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-40,180,80);
p.frameBounds = [rect];


(lib.preloader_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE0044").s().p("ADkDHQgMAAgKgEQgKgEgHgJQgFgIgBgNQABgRAKgMQAJgLAPgIQAPgIAQgEIAEgWQgNAOgMAFQgMAEgKgBQgTABgMgMQgJgJgCgPIgIAKQgOAQgPAFQgOAFgLgBQgRAAgKgJQgKgJgDgSQgFAJgJAIQgJAJgLAFQgLAFgOAAQgMABgLgHQgNgGgHgOIgEgKIgJALQgPAPgPAGQgQAFgKgBQgTABgMgMQgMgMAAgYIAAgNIACgNIAsjHIA7gIIguDWIgCAHIAAAGQAAAIAEAEQAFADAHAAQAMgBAKgJQAFgFAEgHIAAgDQAAgVAGgWQAGgYANgWQANgWASgOQASgNAbAAQAQAAAJAFQAHAGABAJIAAADIAEgWIA5AAIgdCGIgBAHIAAAGQAAAJADAEQAFAEAIAAQAMAAAIgLQAIgLAFgPIAAAAIAbh/IA6AAIgdCGIgBAFIAAAFQAAAHACAGQADAFAHAAQAKAAAIgKQAJgJAEgOIAciBIA6AAIgpC4QANgEAJgHQAJgHAIgLQAGgLAGgRIARAAQgHAagNAPQgMAPgNAHQgNAIgNADIgGAdQgGAcgMAPQgMAPgOAFQgNAGgMAAIgDgBgADhCCQgJAEgFAHQgFAGAAAIQAAAEADAFQADAEAHAAQAGAAAHgJQAGgJAEgSIACgLQgKADgJAGgAAqhAQgKALgHASQgIARgEASQgEARAAAPQAAAPADAHQAEAGAEABQAGACADAAQAHAAAGgEQAHgEAFgIQAFgIADgLIAUhYQAAgDgCgEQgBgDgEgDQgDgDgHAAQgNAAgKAMgAlVBjIA2j8IA8gIIgdCGQAQgCANgJQAMgJAJgPQAKgOAFgRQAFgRAAgQQAAgPgEgMQgGgNgKgHQgMgHgRAAQgxAAgbAaQgbAZgBAtQAAALABAFIADAIIACAEQgVAAgLgIQgLgKAAgVQABgUAMgTQAMgSAUgPQAVgOAYgJQAZgJAZAAQAhABAVALQAVAKAJASQALASgBAVQABAUgJASQgHATgPAQQgPAPgVAKQgWAJgbAAIgCAAIgYBwg");
	this.shape.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.7,-17,75.5,40);
p.frameBounds = [rect];


(lib.preloader_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FC7FA6","#FFFFFF"],[0,1],20,25,20,-25).s().p("AnzD6QhnAAhJhKQhKhJABhnQgBhmBKhKQBJhIBngBIPnAAQBnABBJBIQBJBKAABmQAABnhJBJQhJBKhnAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-25,150,50);
p.frameBounds = [rect];


(lib.preloader_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC7FA6").s().p("AnzErQh8AAhXhXQhZhZAAh7QAAh6BZhZQBXhXB8AAIPnAAQB8AABXBXQBZBZAAB6QAAB7hZBZQhXBXh8AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-30,160,60);
p.frameBounds = [rect];


(lib.preloader_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(189,37,94,0.098)").s().p("A1ED5QhoAAhKhJQhIhJAAhnQAAhmBIhKQBKhIBoAAMAqKAAAQBnAABJBIQBJBKAABmQAABnhJBJQhJBJhnAAg");
	this.shape.setTransform(150,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10,-10,320,50);
p.frameBounds = [rect];


(lib.preloader_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
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

	// graph
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
	this.shape.graphics.f("#000000").s().p("AJfOoQh+Aph7geQiFghgwhkQgaArgzAeQgxAcg6AMQg8ALg4gHQg6gGgmgZQgkAQg4AOQhQAUg0gGQhJgKgdg+QgUAYgiAVQghAUgnAOQhoAlhmgSQhygVgkhUQgVguAMgwQAkiSAQiPQAVixgShyQgrANgmgBQhFgCgqgwQiEB4iiA0QivA5ifgrQjeg7gFiFQgDgcAKg1QAOhCAfiUQhZghg6hMQhChXAHhrQADhgBKhZQBThlCfhLQBmgwB3gbQCDgdB3AEQEhAKBqDIQCLg6BdA1QBFgvBMABQBSAAAyA7QBchBBmgRQBKgNBEAQQBLARAwAxQArgjA/gYQBAgZBAgGQCZgNBABaQAygfA/gRQBCgSA+ACIAVg7QBzhYArgVQBTgoBqALQBWAKAxA1QAyA2ABBVQA/hPCTAUQBUALA1AlQA/AsAJBKQBwABBABIQBagcBgAhQBZAfAxBQQAtBLADBoQADBkglBlQgnBnhIBMIAAAAQh1CLivAoIARA6Ig3A1IgbAJQhuAjgrAJQhYAQg/gWQg0gSgmgrIgnApIgTAAQAXB4gpB+QgqB/hbBTQgdAgghAZQhbBFhuAIIgfABQhfAAhTgwg");
	this.shape.setTransform(0,17.5);

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

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BD255E").s().p("AAUCVIgUgUIgSAUI0yAAQg/ABgrgtQgsgsgBg9QABg9AsgrQArgsA/gBIUxAAIATAUIAUgUIUyAAQA9ABAsAsQAtArgBA9QABA9gtAsQgsAtg9gBg");
	this.shape.setTransform(150,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,300,30);
p.frameBounds = [rect];


(lib.preloader_3_tween = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
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

	// graph
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

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC7FA6").s().p("A1EDIQhTgBg7g6Qg7g6AAhTQAAhRA7g7QA7g7BTAAMAqKAAAQBTAAA6A7QA6A7ABBRQgBBTg6A6Qg6A6hTABg");
	this.shape.setTransform(150,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,-5,310,40);
p.frameBounds = [rect];


(lib.preloader_1_tween = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuvEhQBujGAAjDIAAgOQgKjtigh1QiNhmj4gEIgZAAQieACivApQiqAoiSBEQh/A8hkBOQBuhhCdhKQCShECrgpQCugpCfgBIAZAAQD4ADCNBmQCfB1ALDuIAAANQAADQh7DRQhvC8i1CSQCmiRBiizgAooH6QANgQARgiIAYg2QAyhyAag5QAohUAggzQA1hTA2gjQgpAngoBGQgYApghBGQgbA4gxBzIgZA1QgQAjgNAPQgSAWghAXgAFZHgQg6ghgMg6QgJguAWgLQAVgLAHAhQALA7A7AhQA3AgA9gJQCwgaB6hcQiFB6jOAeQgNACgOAAQguAAgrgZgAbRHUQhUg1gphlQgKgRAWgOQAVgPALAWQAcBCAgAoQApAzA5AXQAeALAdAAQAeABAYgMIABAAQguAdgvAAQgxAAgxgfgAP7HNQhYgxguhVQgMgYASgVQASgWAMAYQAjBBAlAoQAuAyA1ATQBAAVAwgYQgpAigxAAQgsAAgzgcgEAizAD1QgGgqgRgoQgQgogxhCIg6hLQgkgygNggQgWg0AJgwQAJg0AsgQQgPAZAAAmQABAkAPAkQANAgAkAxQAUAcAmAvQAxBDAQAnQARAnAGArQgKA8gkA3QgiAyg2AnQBPhMAOhegAW3FMQAYghAMgtQAMgxgag5QgQgjgug/IhFhUQgtg5gLghQgSg3AJgrQAKgyArgRQgPAZgBAkQAAAiAMAkQALAiAtA4IBGBUQApA4ARApQAYA3gHA0QgJBIgjApQggAkhEAcQAsgeAYgjgAFehBQAghpBXg/QgxA9gZA+QgnBjALBzIBAgnIAygdQAdgSATgNIgFAGQgZAXgoAYIhFApIhAAnQABiDAXhIgEgkkAAqIACgLQgJgzAYg2QAag3A/gtQgfAfgRAkQgZA1AJA1QgEAdAEAcQgUgEgWgKgAlwiOQAEgwgFgYQgKgrgwgIQgigHgxAMQghAIgnAQQgcANgEgNQBVgrA7gOQAxgMAjAFQAvAJAKArQAFAYgEAwIgLB8IgrA3gANVjAQAChohlgmQhQgfhtATQiLAYh/BiQCPiACkgcQBsgTBRAfQBkAlgBBpQAAAmgVAJQgGADgEAAQgKAAAAgQgAAljmQgGgEAAgFQAAgmgagQQgVgNgnADQgwAEg1AnQBNhHBBgGQAlgDAWAOQAaAPAAAlQABAsgVAEIgDAAQgGAAgFgEgAe7laQA8gaBDgLQB8gQBCAZQAWAKAOAMQAVAWgYAQQgYAPgNgSQgNgOgXgJQhFgbh5ATQhxAQhUA7QAtgsBBgdgATklrQA7gbBBgMQB9gXBCAYQAdAKALAQQANASgYALQgYAMgGgJQgNgPgbgJQhEgZh6AYQhsAThUA8QAugsA+geg");
	this.shape.setTransform(-63.6,-18.2,0.576,0.576);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFF66","#FFCC00"],[0,1],0,-9.7,0,20.3).s().p("Ay/gHIAbiPQg0ASgZAKQhHAagoAaQg4AjgVAqQgRAlAGAmIgCATQgXgJgPgPQgSgQgFgWQANhFBZhJQBDg4BYgpQBggtB4gbQCKgfByAHQCHAJBOA/QBaBIAGCLQADBWgkBdQmUAulaBWQAgiVAdicgAUNCkIgrgsQgagagMgVQgig5Ang+QAxhTB8gUQAxgIAoAGQAnAGAKAQQgIARgQAEQgPAEgQgJQg2ghgrAdQgrAdANA/QAIAlA3BCQA4BEAKAqQhagNhcgLgAldg9QAugXAmgJQA/gPAIAkQADANgHBKIgJBgIBVhyQBShvA9gGQAqgDAAAfQAAAegXAlQgRAZgeAjQgVgVgZACQhHAFhDByQhKAFhiAJQAbiLgNhHgAMNB8QgsgugKgjQgOgyAng4QA3hOB3gWQAvgJAlAFQAmAEAJAOQgKAYgSACQgNABgWgKQg0gZgnAcQgpAeAMA+QAIAlAvA0QA5A+AMAXQhggHh5gGgADrg1QBXhNBlgSQBFgMAvAUQAuATAIAnQAHApgnAtQgsA0heAtIgdAOIgqAAQAmgZANgMQAVgUAQgbQAPgbAEgkQAFgqgRgXQgZgigwAUQg2AWgoBTQgRAggGAeQgEAYAAAkIiSADQAthlBThHg");
	this.shape_1.setTransform(-66.9,-26.3,0.893,0.893);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFBE0E").s().p("AzYGZQAQhUAqi9QAqi8AaiXIAFgXIgcALQhOAegfAgQgNAOgIAQQgdA+AjA0Qg4AAgtgoQgxgqAQgvQAVg/BHg+QA/g2BZgpQBSgnBigYQBrgaBhgBIAPAAQCUACBYA/QBnBKAGCVIABAJQgFCDhPCAQhNB+h8BZQh/BbiLAaQgxAJguAAQhjAAhZgogAnFEsQAsh7AchsQAgh2AChKQACgdgDgMQgDgUgRgeIAYgNQA5gcAkgJQApgKAdAJQAgALAJAiQABAIAAARQABAOgCAKQBThwBGgHQAigCAUAQQAUAPADAgQgEArggAwQgUAegtAyIgQgWQgMgQgIABQg4AEhBCFIguBnQgYA2gMAPQgeAlhEAcQg0AXgjAAQgKAAgIgCgABcDXQg+gogHhRQACgfAIgiQAah5BdhiQBhhnB4gVQBNgNA0AaQA8AdAGBGQgFA1g6A1QgtAqhBAfQhAAcg/AjQgXANgJAZQgHAWAFAbQAFAYAZAOQAZAMAZgDQBjgPBDg0QApggAggzQAaA6ATAbQAfAvAkAMQATAHAQgDQAPgDAJgLQATgWgEgoQgEglgTgYQgJgMgUgUQgXgVgJgLQglgsgGg2QgCgUAKgfQAKgaAOgUQAbgnAvgcQAtgaA2gKQBNgOAtAQQAnANAEAgQgCARgOARQgOARgXAOIgSALIgagXQgQgMgQAAQgeAAgGAYQgEASAJAbQAJAaA8BFQA2BLgHBKQAKgJAQgJIAcgOQAVA3ANAWQAYAqAlAOQAWAJARgFQAQgFAJgQQAMgVgBgjQgBgigNgVQgGgJgvgvQgogpgOgmQgGgSgCgSQgCgRAIgaQAIgWAKgSQAagrAygdQAvgcA6gJQBNgKAtARQAmAPAGAgQgEARgNAQQgOARgWANIgTALIgagYQgQgNgQgBQgegCgGAZQgEATAKAaQAHARAoA2QApA2ALAbQAMAaAEAdQgIA8gvAxQguAvhCAUQg6ASg1gFQg8gEgugfQgagSgSgYQgSgZgFgbQgeAxg3AhQg1Afg9AJQg+AJg0gSQg5gTggguQgnAmhMAaQhOAchNAAIgFAAQhSAAg1gigAFcjWQgQAFgQASQgUAVgQAiQgQAfgDATQgBAFAAAbIAmgWQAWgNANgNQALgKAJgNQAKgPAFgPQAIgXgCgTQgBgTgPAAQgEAAgGACg");
	this.shape_2.setTransform(-66.1,-9.6);

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


(lib.title_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_3_img();
	this.instance.setTransform(-245,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-95,490,190);
p.frameBounds = [rect];


(lib.title_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_2_img();
	this.instance.setTransform(-245,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-95,490,190);
p.frameBounds = [rect];


(lib.title_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_1_img();
	this.instance.setTransform(-245,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-95,490,190);
p.frameBounds = [rect];


(lib.substrate_subcategory_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.substrate_subcategory_1_img();
	this.instance.setTransform(-55,-40);

	this.instance_1 = new lib.substrate_subcategory_2_img();
	this.instance_1.setTransform(-55,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect, rect];


(lib.substrate_option_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.substrate_option_1_img();
	this.instance.setTransform(-92,-92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.substrate_option_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.substrate_option_0_img();
	this.instance.setTransform(-92,-92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.substrate_category_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.substrate_category_1_img();
	this.instance.setTransform(-40,-55);

	this.instance_1 = new lib.substrate_category_2_img();
	this.instance_1.setTransform(-40,-55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-55,80,110);
p.frameBounds = [rect, rect];


(lib.shadow_decor_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shadow_decor_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
p.frameBounds = [rect];


(lib.nav_navigation_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.arrow_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ak8E9QiFiDAAi6QAAi5CFiEQCDiEC5AAQC6AACDCEQCECEABC5QgBC6iECDQiDCEi6ABQi5gBiDiEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.ken_top_decor8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_top_decor8_img();
	this.instance.setTransform(-69.7,-50.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.7,-50.1,140,100);
p.frameBounds = [rect];


(lib.ken_top_decor7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.ken_top_decor7_img();
	this.instance.setTransform(-48.7,-48.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.7,-48.6,95,94);
p.frameBounds = [rect];


(lib.ken_top_decor6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_top_decor6_img();
	this.instance.setTransform(-46.2,-43.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.2,-43.6,92,87);
p.frameBounds = [rect];


(lib.ken_top_decor5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_top_decor5_img();
	this.instance.setTransform(-45,-42.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-42.7,90,85);
p.frameBounds = [rect];


(lib.ken_top_decor4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_top_decor4_img();
	this.instance.setTransform(-72,-47.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72,-47.7,144,95);
p.frameBounds = [rect];


(lib.ken_top_decor3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.ken_top_decor3_img();
	this.instance.setTransform(-54,-48.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-48.1,108,96);
p.frameBounds = [rect];


(lib.ken_top_decor2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.ken_top_decor2_img();
	this.instance.setTransform(-58.3,-58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.3,-58.5,117,117);
p.frameBounds = [rect];


(lib.ken_top_decor1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.ken_top_decor1_img();
	this.instance.setTransform(-46.2,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.2,-51,92,102);
p.frameBounds = [rect];


(lib.ken_top_base8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AjcHqQgDAEgFACIgBAAQgGABgFgDIgIgGIgBABIgBABQgFACgFAAIgBgBQgVgFgVgLQhKgShIgdIgDAAIgDgBIgDgCQgVgYgEgIIAAAAQgHgLAAgWQAAgaAKhCIAAAAIAhjUQgkARgTAAQgkAAgJgDQgUgDgSgTIgCgCIgIABIgCgBQgfgIgVgMQgbgQgSgSQgCgDAAgDQAAgDADgCIAIgIIADgBIADAAQATACAkgHQAkgJAjgxQAjgygGguIgKhDQgCgNAEgFQADgIAKABIAUgOIARgMQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIABAAIA2gcQAtgYAXARQAPgPADgHIAAAAQABgEAAgXQAAgKgDgUIAAAAQgEgXAHgpIACgEIAEgCIAtgJIAEAAIADADIACAEIAAAgQAAAMgIApIABAAIgEASQAWA2AcA2IAAAAIACAEIA5gvIAEgBIADAAIAEADQA4BNAUBlQAKAxAICCIABACQAJiCAFgnQAQh6AbhCQgbgIgSgOIAAAAQgkgdAAg2IAAgBIABgHQABgEACgBQACgCAEAAIB6APIADABIACACQAjA4AUARIAAAAQAPAMA2AMIAEACQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAIgDAIAAQAEgCBSBTQBFBGAfAcIACgBIAFAAIAKgOIABgBIAAgBIAAgBIgDgDIAAgEQAVhOAJgvQABgDACgCQACgCADABQADAAACACQANANATALQA3AfBPAAQAWgBAygQQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAIAEADQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAACLQAPBOAAANQAAANgTAmQgUArgbAoQhOBzhCgBQhGAAhFgXIAAAAQgxgQglgYQAoDKAAAhQAAAMgLAPQgLAOgMAGIgBAAQgzARgxALIgIAIIAAAAQgFAEgFAAQgHAAgEgFIgWAEIgCADIAAABQgDAEgGACIgBABQgFAAgFgCIAAAAIgFgEQhWAOhTAAQhHAAhFgKgAhBBiIACgNIgDABIACACIgCAAIABAKgAAik3IABABIAAgBIgBAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.7,-50.1,139.5,100.2);
p.frameBounds = [rect];


(lib.ken_top_base7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AD/HIQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAgBgBgBIh9nEQAAgDABgDQBWiqhNj+IAAgFIADgDIAEgCQAYgBAJACQCEAMBDBvIABAEIgBADQg7BqAeCmIgBAAIALAuIBGExIAAAEIgDADIigCHQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAh/G+IkEiHQgCgBgBgDQgBgCAAgDQA4i3gpi1IAAgDQA6jIhqhsQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAeg5BYgNQAPgDASgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABAAQACACABADQBPEWCLCeIACADIAAADQgbDpgrDYIgCAEIgEACIgCAAIgDgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.7,-45.7,85.5,91.5);
p.frameBounds = [rect];


(lib.ken_top_base6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Ah/GhQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgCAAQgEABgCgCIAAgBIgEABQiQgihDgaQgjgOgOgMQgRgOAEgMQgLgTAAgmQAAgRAFgPQACgKAPgZIABgBIgBgBQgbgUAAgXQAAgeAXg6QASgtAEgZIg2AJQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAIgBgFIACgEQAug8AAhwQAAg7g5hQQgCgDAAgDQABgDACgBQARgPASgNIAYgRIABAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQAGgIAOgJIAAgBQAVgMAJAAQAXAAAtALIAmgRIAEgBIAEACQAbAUAnAOQA3AVAyAAQAwAAAmgVQAVgLAQgQQABgCADAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAIAWAOQAWgLAeACQAcABBKAdIAAAAQArAVASAjIADABIgBgBQAaAEAMAJIAAAAQAOALASAvIACgBQADgBACACIAvAjQANALAMAIQACABABADQABAAAAABQAAABAAAAQAAABAAAAQAAABgBABQgVA3gaBVQggBngFArIgCAEIgDACIgEAAQgPgDgQgGIAAAAIgFgCIAHA1QABADgCADIgDACIAHAQIAAAEIADADIANAaIAAAAIAeA6QAMAbAAAYQAAAqggAgIgKAJIgEACIi+AWQgEAAgCgCIgBgBIgDADQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgDAEQgpAahOAAQg/AAhcgTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.2,-43.6,92.5,87.3);
p.frameBounds = [rect];


(lib.ken_top_base5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Al9FsQgFAEgGAAQgGgBgEgEQgfgfABgZIACADQAAgIAYgdQgIgMAAgSQAAgQAVgrIgBgCIAAgBQgCgGACgEIAHgNIAFikIAAAAQgSAGgWAAIgJAAQgDAAgCAAQgDgCAAgDQAAgEADgCQA5g4AAhiQAAhMghgqQgYgggMgWIgBgEIABgDQAfgyBSgaQAFgBA0gEIADAAIADACQBqBfBQBuQAgArAaAzIAAAAIAIAQIASApQAKg5AihUQAphjA4hoIACgDIAEgBQA4gHA8ApQA5AnAXBLQAdAFAKAEIAAAAQAQAFAFANQAMADAPAaQADADAPAIIADADQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABIgCAEQg1A0gWA8QgXBBgIBOQAFAhADALIAAAAQADALgDAkQgCAagHAPIABAAQACAFgBAGIAAABIgBADIAtBLIABAEQAAAbgLARIAAAAIgYAkIgDADIgCABIgBABQijAwiqAAQjAAAjLg+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-42.7,90.1,85.4);
p.frameBounds = [rect];


(lib.ken_top_base4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AkxG1Qh/gcg5gbQgCgBgBgDQgCgCABgDQADgLAKgNQgMACgXAJQgVAIgLAGIgEABIAAAAIgGgBIgBAAQgRgEghgpIAAAAQglgwABgSQgBgoA7hcQAZgpAggpQgxgDgpgRQg/gagfg9IAAgBIgEgIIgBgCIAAgBQgCgCABgDQABgDADgBQADgCADABQADABABADIABADIABgBIAFABIAOAJQANAHAMABIAAAAIAFABQBFgBAvhHQAng7AAg7QgBgXgWgcIgCgEIAAgDIgcgbQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAZg2AqAHIBeAAIAEABQAHgJAIgHQARgQAjgbIAEgCIAEABIAWANIADAEQABACAAADQgSA6gRAiQARANAaAMIABAAQBAAeBDAAQBiAAA6g4IgdgQIAAAAQgagNgNgPQgYgagKg+QAAgDACgDQABgCADgBQACgBADACQAgAPA3ARQBIAVAaALQBcAmAsBUIBKBBQATAQANAJQAEg7AVgTQACgCADAAIAjAAIADAAIAFACIARgqQABgDADgBQACgCADABQABABABAAQAAAAABAAQAAABABAAQAAAAAAABQASAYAaARIgBAAQAwAfBHAAQAcAAAZgKQACgBADABQAAABABAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQABAAAAABQAAAAAAABIgBAZIAAAAQAAAVAGAaQApAyABAKQABAKgJAYQgIAWhJB8QhMCBhBgBQgkAAgvgVQgYgLgSgGQAcBZAAABIgBAEQgcAxgXAXIgEACIgvANIgIAMIAHADQAOAHAAAMIAAACIgBAEIgCACQg1ArhKAYQhWAchrAAQh5AAikgkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72,-47.3,144.1,94.7);
p.frameBounds = [rect];


(lib.ken_top_base3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AlSGkQgEgBgBgDQgBgDABgDQAAgDADgBIABgBIgBgBQgCgDABgCQABgEADgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgLgQgWQgTgdAAgLQAAgmAYhgQAVheABgoIgiAWQgDACgDgBQgDgBgBgCIgBAAIgEAAIicggQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQgCgDAAgCIAAgrQAAgDADgCQACgDADAAIAKAAQADAAACADIAFAFIACACQAIABALACIAQACQArgBAmhPQAihIAAg1QAAgkgUgbQgTgZgbADQgDABgCgCQgDgCAAgCQgBgDABgDQACgDADAAQA1gRAlADIAAgBQAEgYAWgHIAAAAQAFgCAggEQAngGACg+QAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBIgCgEIABgEQATgiApgFQADAAACACQADACAAADIABAJIAFAvIAAADIAAAAIAeAPQBcAxgCAcQAAAMgHAlQgIAiAAARIAAADQAdAYAWAKQApATAHAsIABAFIANgMQAwgkABgMQAAgggrg/QgvhFABgGQgBgUAbgXQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAIgCgKQgEgZACgRQABgDACgCQACgCAEAAIBNAJIAEACQACACAAADIAAAEIACADQACAOAFANQANAkAhAEQBogMAzA2IAAABQA1BGArAoIACgCQACgDADAAQADgBADACQAaAVA3AcQADABABADIgBAGQgeA6gOA7QgRA/AABiQAAAfACAUQAAADgCACIgEADQgDAAgCgBQgogUgXgGIgBgBIgBAAQAsCvAAAaQAAAQgMAPQgEAFgJAaIgBADIgDACQiuAzipAEIggABQjBAAi9g9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-48.1,108.1,96.3);
p.frameBounds = [rect];


(lib.ken_top_base2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AlLJIQhdgkg8gjQhWgygLgtQgBgDABgCQAQglBqjXIB7j5QhpAjhehGQgBAAAAgBQgBAAAAAAQAAgBAAgBQgBAAAAgBQgBgDACgCQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQACgCADABIAMABQA1AAAkg4QAig1AAg/QgBgsg/hXQgBgCAAgDQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQACgCACgBIAjgEQAIgzBlgDIADAAQAchHBWgEIAEABIADADIABAEIgFAyIgBADIgCAEIAAAAQgHAWAAALQABAoCGBsQBHA8AVATQAvArgBAXQAAAFgDAJIgCADIgBAEQgQAphCBvQhYCOgHAcIgGBxQgEBNggAeQgnAlg8BLQgyA9gWAlIgEADIgDAAIgCAAgAGYJEIgCgDQhOikhtkaQhOjKgbhbQgBgBAAAAQAAgBAAgBQAAAAAAAAQAAgBABAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQgMgsAAgQQAAgfAKg3QAKg2AAgjQAAgfgBgHQgGgShKgiQgDgCgBgDIgUg1QAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQACgBADAAQCSAPBGA/IAIAIIADgCQACgBADACIAjAQQAmASAOAaIADgDQAGgEAKAAQARgBA9BFIAoAuIACAEQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQgfA7gbBHIAAAAQglBjADArIAAAAIAAABIDCHHIABADQABAxhjBBIhFAmIgEABIgEgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.3,-58.5,116.7,117);
p.frameBounds = [rect];


(lib.ken_top_base1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AjwH4QgqgIgogNQgvgRgrgcQgDgBAAgDQgBgDABgDQAZgrAMhIQAMhCAAhLIAAiJIgfgFQgDgBgCgCQgBgDAAgDQACgPASgGIAAAAQAHgBAKAAQgEgXASgGIACAAQAPgDAIgDIgDgOQgGgUAAgDQAAgIADgIIADgDIAEgBIALAAIgBgEQAAgLgOgUIAAAAQgTgaABgHQAAgPALgGQAEgCAAgDQgBgJgOgMIAAAAQgVgRABgMQAAgEADgHIACgFQAAgEgFgBIABAAIgUgDIgBAAQgPgFADgRQACgHgCgDIgBAAQgGgFgVgDQgZgEgHgPIgBgDIAAgZQAAgBABgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQAHAKAUABIABAAQASgbBEgIQAbgEAVgEIgBgEQAAggAXgmIAAAAQAcgtAkgFIAEAAIADADIABAEQABAxgCAVQgDAigBAZQA+DEAKA+IAGAmQAMBWAACMQAACPgCAaQgHA/gkB6QAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgBAAQgqAAgngGgAD+HfIgDgDQhNhmgdi8IgTifQgKhWgTg4IAAgBQgHgogNhaQgMhXgaghIgBgBIgXgnIAAgBQgPgcgFgdIAAgEIADgEIACgBIAyAAIAEABQArAdAcA6QAcALAuAIQA6AKAfAQIAPgMIAAgBQALgKAFgCQABgBAAAAQABAAABAAQAAAAABAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAQAAAPAHAFQAQAIgBANQABAEgHAPIAAABQgGAKAAAEQABAEAFAEIABAAQANAJAAAQQABAHgKANIAAAAQgGAHAAAIQAAAGAEAKQAGAPAAAGQAAAJgHAOIAAAAQgFAKgBAHQABAGAFAIIAAAAQAKAMgBALQAAAKgGAJIAAAAQgDAFAAADQANAagBAFQAAAGgEAJIgBABIgCAGQAKAdgBAKQAAASgHAHIgCABIgGADQA5DxA5BtIAAAFIgCAEQgUAWgkARQgXALgfAIIABAAIgNADQgaAGg1AHIgBAAIgDAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.2,-51,92.4,102);
p.frameBounds = [rect];


(lib.ken_shoes_decor8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_shoes_decor8_img();
	this.instance.setTransform(-60.8,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.8,-24.5,122,49);
p.frameBounds = [rect];


(lib.ken_shoes_decor7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_shoes_decor7_img();
	this.instance.setTransform(-69.1,-51.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.1,-51.1,138,102);
p.frameBounds = [rect];


(lib.ken_shoes_decor6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_shoes_decor6_img();
	this.instance.setTransform(-60.3,-22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.3,-22.6,121,45);
p.frameBounds = [rect];


(lib.ken_shoes_decor5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_shoes_decor5_img();
	this.instance.setTransform(-59.9,-18.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.9,-18.6,120,37);
p.frameBounds = [rect];


(lib.ken_shoes_decor4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_shoes_decor4_img();
	this.instance.setTransform(-65.5,-31.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.5,-31.2,131,63);
p.frameBounds = [rect];


(lib.ken_shoes_decor3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_shoes_decor3_img();
	this.instance.setTransform(-60.3,-22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.3,-22.6,121,45);
p.frameBounds = [rect];


(lib.ken_shoes_decor2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_shoes_decor2_img();
	this.instance.setTransform(-60.3,-22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.3,-22.6,121,45);
p.frameBounds = [rect];


(lib.ken_shoes_decor1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_shoes_decor1_img();
	this.instance.setTransform(-60.3,-22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.3,-22.6,121,45);
p.frameBounds = [rect];


(lib.ken_shoes_base8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AFOD1QgyAAhAgfQgNgGg+glIgCgCIgBgEIgBhWIAAAAIAAgCIACgWQgJgdBbhqIADgCIADgBIABAAQAegFAZAAQA0AAA2ArQAxAnAgAAQAjAAAXgWIABAAQAagYAZg9IADgEIAFgBIAEACIACADQANAugEAnIAAAAQgEAhgPAdIgBABIgBACIgBAAIgOBSQgBADgCACQhPA+gpAXQg8Akg2AAIAAAAgACdBSQADAAACADQATAXAzAYQBBAeArAAIAMAAQgBgygugeQgrgbg8AAQgTAAgKAFQgFADgEAFQgCADgDAAIgBAAIAAABIABADIgBACIAAABIAAAAIgBABIAAABIgBACIABAAIAAAAgAlcCRIgEAAIgBAAQg7gKhZg3IAAAAQhdg6gNg4IAAgEIAahhIACgEIAAgCIAAgGIAAABQACgQAQgfQANgXARgZIAEgDIAEAAIAEACIACAFQAFAwAgAgIgBAAQAhAhAdABQAJAAA4gZQA8gZAdAAQAvAAASAfIABADIAJClIAAABIAAABIABACIgBgCIgBACIACAEIAAADQgBBHgxAWQgfAOhNABIgBAAgAlEgDQgjAYgaAjQAlAMAjgBQAhABAggMQAegKAMgRIABgBIAAgBIgBgbIgDAAQgDgBgCgDIgCgEIAAAAQgNgZgXAAQgfAAgpAeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.8,-24.5,121.7,49.1);
p.frameBounds = [rect];


(lib.ken_shoes_base7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AFKHvQgcgUgKglIgDgOQgUgNgPghIAAgBIgjhdIgBgCQgvgcgGgWQgHgWADgqIAAgFQgEguAagkIAzhJIAAgBQAWgpADgiIgNgCQAAAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAIgBgsIACgFIADgDQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAIAIACIgEgiIAAgBIABgJIAMh0IACgEIADgCIAEAAQA3AQA+AAQBVAABXgXQBMgUAmgfQACgCADAAQADABACACIABAAQACACAAADQAAAdgFA9IAAAAIgEAxQACABABADQABADgBACQgMAcgKAbIAGgCQADAAACABQADABABACQABADAAACIgJAnIgCADIgDACIgUAHQgMArgGAoIAAABIAAACQAAADgCACIgGAIIABABIADADIABAFQgIBBAAAWIAAAAIAAABIAAACIgHBEQgBADgCACIgLALIAAAJQAPAEAOANQAYAXAJAjQAKAlgJAdQgLAggZAGQgZAHgZgYIAAAAIgCgCQACAZgJAXIAAAAQgNAggdAIQgdAIgbgWIAAAAQgNgKgJgNQADAagKAXIAAABQgPAggfAIQgJADgJAAQgVAAgVgQgAnBGUQgcgQgGgkIAAAAQgEgaAKgZQgPAPgTAHQgiAOgbgRQgcgPgGgkIAAgBQgEgdAOgdQgNAPgPAJIAAAAQgcATgTgMQgUgLABgiQABgdATggQASggAagRIAAAAQAOgJALgBQAEgKADgFIAGgJIgJgTIAAgDQACgeACgHQAEgSAZgoQABgCADgBIAAAAIADgJIABgBIACgEQAEgMAagsQANgXAEgnIACgTQABgcALgxIgNgRIgCgDIABgEIAMgtQAAgDADgBQACgCADAAQADABACACIAFAHIAEgPQABgDADgCQACgBADABIAFABQAEgQAHghQAIglANgnQABgCACgCQADgBADAAQACABACACQAyA6B5A4QCQBEAxAAIAHAAQADAAACABQADACAAADQABADgCADIhIBqIABACQAAADgBACIgNAZIAJACIADACIACAEIAAAEIgWAvQgBACgCACQgDABgDgBIgMgDQgWAyAAAWQAAATAJAcQAIAhAAAgQAAATgCAOIgBAHIAAABIgBADQAABegvASQgQAHgUADIgBAEQg+B+gUgHIgIgCIgEAGQgTAhggAMQgQAGgNAAQgRAAgPgJgAnNERIAEgFIgHADIABAAIgBAAIACABIgBgBIACACgApBC1IAIgIIgDgDIgFALg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.1,-51.1,138.3,102.3);
p.frameBounds = [rect];


(lib.ken_shoes_base6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AFCDgIgWgDQgpgGgjgLIgZgKQglgQgMgjIAAAAQgHgQAAgSQgFgGgBgGQgFgOAKgYQAGgWASgfIgBAAQAEgGAHgKQAMgWAVghQAegwAJgQIABAAQAJgVA7ACQA1AAAeANIAAAAQATAIATAgQAPAbAeANQAIADAJACIAAAAQAZAGAegFIAAAAQAVgEAPgIQADgCADABQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQACACAAADIgBCJIgBACQgEAUgOARQACAbgIANIAAAAQgfA9iNAEIgaAAQgeAAgbgCgAlNCoQg0gHg8gZQgUgJgVgLIAAAAQh1g9AChDQgBgPAOgYQgEgUAFgVIAAgBIA8iAQABgCADgBQADgBACAAQADABABADQAJANAQANIAAAAIARALIAAAAQAWAMAXAAQAeAAAZgSQAegWATAAQAfAAAsAVQAzAXgCAXQAAASAFA4QAEA4AAAbIAAADQAAAbgDAUQgEAggJALIAAAAQgEAGgIAEQgIAPgLANQgSASgWAGIgBAAQgLADgMAAIgBAAQgPAAgQgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.3,-22.6,120.6,45.3);
p.frameBounds = [rect];


(lib.ken_shoes_base5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AFUC6Qg/AAg3gXIAAAAQgogRglgkIgCgCIgBgDIAAhFQABgXALgPIAGgMQAag1AKgJIAAAAQALgPBIAQQBEAPAxA3QAqAwgBArIANgIQgOhMg1gtQg6g0hWAAQgNAAgHACQgDABgDgCQgDgCAAgDQgBgDABgDIAMgRIAOgRQAAgFAIgDQADgCAJgBQAOgBAcAAQA5ABBEAsQBAApAVBnQAmggAigsIAEgDIAFAAIADADIACAEIAFBZIgBADIgCADQhDA9g6AeQhCAihBAAIAAAAgACvgEIgHAHIgBACQgIAMgBARQAUAVA6AZIAAABQBFAdAvAAIAUgBQAEgugugrQgxgqg7gBQgdABgSASgAlOBaQg6gEhIgmIAAgBQg/ghg8g7QgCgCAAgDIgFhIQgMg2AagIIADgBIAAAAQAEABACACQACACAAADIAAABQAAAgApAqIABAAIASAQQAkgdA0gWQBMghBHAAQArAAAcAGQABAAABABQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAIACAmIgBAEIgDADIgFAAQgPgDgVAAQhIAAhFAjIAAAAQgsAWgZAZIATAPQAegeAmgVIAAAAQA8giA9AAQAXABAWAEQAAAAABAAQAAAAABAAQABABAAAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIAHAtQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAABQgBAAAAAAQgBABAAAAQgBAAAAABQgDABgCgBQgSgEgVAAQhEABg+A2QAZAGAcAAQAqAAAYgKIAAAAQAYgIAXgQQACgCADABQADAAACACQACACAAADIAAA6IgCAEQgRAZglAJQgYAFgiAAIgkgBgAmvgQIAGADIABgBIgBgBIgEgBIgCAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.9,-18.6,119.9,37.2);
p.frameBounds = [rect];


(lib.ken_shoes_base4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AFBE4QhegBg5gXQg7gWgwhpQgCgDABgCQABgDACgBIAEgCIACgDQAngeAagsQAWgmAnhRQAKgoACgGQADgMgDgfQgCgggCg/QAAgDABgCQACgDAEAAQACAAADACQAaAVAagDQAjgGADAaIACAUQAFgZATgOIABAAQAVgPA1gKQARgEAnACQApACAVgCQBAgFA0guIAFgCIAEABQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAIABAFQgIAmAAAFQAAAJgcBoQgdBlAAAcQAAANAEASIAAAAQAEARADATIAAAEQAAABAAABQAAAAABABQAAAAAAABQAAAAAAABIAABLQAAADgCACQg1A2gZAXQgZAXgoAdQgoAehaAAIgGAAgAqLA5IgCgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIASg5QAVhUAUgjQASghACgIIgBABIAPhbIAGgvQABgDACgCQAAgBABAAQABAAAAgBQABAAAAAAQABAAAAAAIAGABQAcAVApAMQATAEBMAOQA4AKAYAQQAhAWABAvIgBAOIAKgZQAPgiAQAEIAAABIAaACQAPAAASgGQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQABABAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgBAEIgFAJQgsBMgEAlIAAABIAAABIAAACIgEAgQgBAcASAzQAUA2AQAkIABADIAAADIgBABIAAABIgCADQhgBBhhAAQiTAAiViVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.5,-31.2,131,62.5);
p.frameBounds = [rect];


(lib.ken_shoes_base3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AFDDfIgXgDQgmgEgggKIAAgBIgGgCIgZgJIABAAQgFgCgEgCIAAAAIgBgBIgCgBQgbgQgLgeIAAABQgHgSAAgSIgCgCQgDgFgBgEQgCgHABgKQABgDADgCIABgBQgCgGADgFIAAAAIADgEQgCgCABgDIACgFQAEgMAGgLQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBIgIgSIAAAAQgDgEADgGIAAAAQADgGAFgCQAGgDAGADIAAAAIACABIAHAAIABgEIAQgbQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAgBIgEgLIgDgEIAAAAQgCgGADgGIAAgBQADgFAGgCIgBAAQAEgCAFACIAPgEQgBgDACgDIAMgTIACgCQgFgFABgGQABgGAFgEQAFgFAGABIADABIADgCQAQgKApABQA1ABAeANQANAFANARQAGAHAGALIAAgBIALAQIAAABQAOAPAUAJIARAFIAAAAQATAFAWgCIAOgCQAVgEAQgJQACgBADABQACAAACACQAAABABABQAAAAAAABQAAAAAAABQABAAAAABIgBCJIAAABQgEASgMAQIgDACQACAdgIANIABAAQgcA2hyAJIgfABIgaABQgeAAgagDgAEFCbIgBgFIAAAEIAAABIABAAIAAAAgAk9CpIgQgCIgdgEQgngJgsgTIgfgOIAAAAIgKgGIgagPIgBAAQhZg2ABg6QgBgPAOgYIgBgFQgCgSAEgSIABgBIA8iAQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQADgCADABQACABACACQAIAOAQAMIAAAAIARALIAAAAQAWAMAXAAQAYAAAVgJIgBgFQgBgGAEgFIAAAAQAEgFAGgBQAIgBANADIABgBQABgDADgBIADgBIAAAAQAKgEAIAAQAfAAAtAVIAQAIQACABABADIAAACQATgBARACQAGAAAFAGQADAEAAAGQgBAGgEAEIgBABQgFADgGAAIgEAAIAAAAIABATIgCAFIAEADIABAAQAGAAAFADQAFAEABAGQAAAGgDAFIAAAAQAAAGgFAEIAAABQgEADgFAAIABAJIABANQAAADgCACQAMAKAHAJQADAFAAAGIAAABIAAACQAAAGgFAEQgEAFgGAAIgDAAIABAPIAAACIAAAEQAAADgCACIAEAEQAFADAAAGQABAGgEAFIAAABIgFADIAAADIgCAKQgEAggJAMIAAAAIgGAGIAAABIgGADIgHANIgBABIgLAOQgSASgWAGQgMACgMAAIgQAAgAlpgPIACgBIgCAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.3,-22.6,120.6,45.3);
p.frameBounds = [rect];


(lib.ken_shoes_base2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AFMCMIgWgDQgqgFgigMIgZgKQglgQgMgjIAAAAQgHgRAAgTQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQABABAAAAIAEACQAQASAwAWIAKAEQASAHAXAFQAYAFAcACIAnABQAfAAAjgEQBogJAlgoQACgCADAAQADAAADACQACABAAAEQADAegIAOIAAgBQgfA9iNAEIgaAAQgeAAgbgCgAlEBUQg0gGg7gaQgUgJgVgLIAAAAQh1g7ABhFQAAgPAPgaQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAIAEACIACAEQANAzBSAzIAYAOIgBAAIAlATQAlAQAkAIQARADAQABIAOABQAyAAAVgKQABgBAAAAQABAAAAAAQABAAAAAAQABAAABAAIAEACIACAEIgBAFQgIARgNANQgRASgXAGQgLADgNAAQgPAAgRgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.3,-14.2,118.7,28.6);
p.frameBounds = [rect];


(lib.ken_shoes_base1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AFCDgIgWgDQgpgGgjgLIgZgKQglgQgMgjIAAAAQgHgQAAgSQgFgGgBgGQgFgOAKgYQAGgWASgfIgBAAQAEgGAHgKQAMgWAVghQAegwAJgQIABAAQAJgVA7ACQA1AAAeANIAAAAQATAIATAgQAPAbAeANQAIADAJACIAAAAQAZAGAegFIAAAAQAVgEAPgIQADgCADABQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQACACAAADIgBCJIgBACQgEAUgOARQACAbgIANIAAAAQgfA9iNAEIgaAAQgeAAgbgCgAlNCoQg0gHg8gZQgUgJgVgLIAAAAQh1g9AChDQgBgPAOgYQgEgUAFgVIAAgBIA8iAQABgCADgBQADgBACAAQADABABADQAJANAQANIAAAAIARALIAAAAQAWAMAXAAQAeAAAZgSQAegWATAAQAfAAAsAVQAzAXgCAXQAAASAFA4QAEA4AAAbIAAADQAAAbgDAUQgEAggJALIAAAAQgEAGgIAEQgIAPgLANQgSASgWAGIgBAAQgLADgMAAIgBAAQgPAAgQgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.3,-22.6,120.6,45.3);
p.frameBounds = [rect];


(lib.ken_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.ken_lips_1_img();
	this.instance.setTransform(-9.1,-7.7);

	this.instance_1 = new lib.ken_lips_2_img();
	this.instance_1.setTransform(-8.9,-5.9);

	this.instance_2 = new lib.ken_lips_3_img();
	this.instance_2.setTransform(-14.7,-11.7);

	this.instance_3 = new lib.ken_lips_4_img();
	this.instance_3.setTransform(-13.5,-8.6);

	this.instance_4 = new lib.ken_lips_5_img();
	this.instance_4.setTransform(-12.5,-5.8);

	this.instance_5 = new lib.ken_lips_6_img();
	this.instance_5.setTransform(-16.6,-11.5);

	this.instance_6 = new lib.ken_lips_7_img();
	this.instance_6.setTransform(-12,-10.6);

	this.instance_7 = new lib.ken_lips_8_img();
	this.instance_7.setTransform(-2,-10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9.1,-7.7,18,15);
p.frameBounds = [rect, new cjs.Rectangle(-8.9,-5.9,38,13), new cjs.Rectangle(-14.7,-11.7,42,21), new cjs.Rectangle(-13.5,-8.6,43,19), new cjs.Rectangle(-12.5,-5.8,42,14), new cjs.Rectangle(-16.6,-11.5,41,21), new cjs.Rectangle(-12,-10.6,40,15), new cjs.Rectangle(-2,-10,15,22)];


(lib.ken_hat_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_hat_4_img();
	this.instance.setTransform(-116.3,-74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116.3,-74.5,232,148);
p.frameBounds = [rect];


(lib.ken_hat_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.ken_hat_3_img();
	this.instance.setTransform(-94.1,-36.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.1,-36.4,189,72);
p.frameBounds = [rect];


(lib.ken_hat_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_hat_2_img();
	this.instance.setTransform(-136.7,-79.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-136.7,-79.7,274,160);
p.frameBounds = [rect];


(lib.ken_hat_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.ken_hat_1_img();
	this.instance.setTransform(-98.5,-46.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.5,-46.4,197,93);
p.frameBounds = [rect];


(lib.ken_hand8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_hand8_img();
	this.instance.setTransform(-30.8,-56.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.8,-56.1,62,112);
p.frameBounds = [rect];


(lib.ken_hand7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_hand7_img();
	this.instance.setTransform(-57.2,-55.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.2,-55.9,113,108);
p.frameBounds = [rect];


(lib.ken_hand6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_hand6_img();
	this.instance.setTransform(-51.2,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.2,-35.5,80,80);
p.frameBounds = [rect];


(lib.ken_hand5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_hand5_img();
	this.instance.setTransform(-59,-34.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59,-34.2,118,68);
p.frameBounds = [rect];


(lib.ken_hand4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_hand4_img();
	this.instance.setTransform(-28.7,-57.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.7,-57.7,58,116);
p.frameBounds = [rect];


(lib.ken_hand3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_hand3_img();
	this.instance.setTransform(-23,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-23,-44,55,86);
p.frameBounds = [rect];


(lib.ken_hand2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_hand2_img();
	this.instance.setTransform(-20,-41.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-41.7,40,83);
p.frameBounds = [rect];


(lib.ken_hand1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_hand1_img();
	this.instance.setTransform(-35.5,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.5,-39,72,79);
p.frameBounds = [rect];


(lib.ken_glasses_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_glasses_4_img();
	this.instance.setTransform(-78.8,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.8,-26,158,52);
p.frameBounds = [rect];


(lib.ken_glasses_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_glasses_3_img();
	this.instance.setTransform(-102.6,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.6,-26.5,172,53);
p.frameBounds = [rect];


(lib.ken_glasses_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_glasses_2_img();
	this.instance.setTransform(-81.1,-26.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.1,-26.7,162,54);
p.frameBounds = [rect];


(lib.ken_glasses_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_glasses_1_img();
	this.instance.setTransform(-80.7,-23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.7,-23.1,161,46);
p.frameBounds = [rect];


(lib.ken_fringe_decor12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_fringe_decor12_img();
	this.instance.setTransform(-133.6,-104.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-133.6,-104.6,267,209);
p.frameBounds = [rect];


(lib.ken_fringe_decor11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_fringe_decor11_img();
	this.instance.setTransform(-113.6,-103.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113.6,-103.6,227,207);
p.frameBounds = [rect];


(lib.ken_fringe_decor10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.ken_fringe_decor10_img();
	this.instance.setTransform(-106.5,-87.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106.5,-87.7,213,176);
p.frameBounds = [rect];


(lib.ken_fringe_decor9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_fringe_decor9_img();
	this.instance.setTransform(-111,-89.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111,-89.3,222,179);
p.frameBounds = [rect];


(lib.ken_fringe_decor8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_fringe_decor8_img();
	this.instance.setTransform(-105.3,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105.3,-87,211,174);
p.frameBounds = [rect];


(lib.ken_fringe_decor7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_fringe_decor7_img();
	this.instance.setTransform(-117.6,-104.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117.6,-104.1,235,208);
p.frameBounds = [rect];


(lib.ken_fringe_decor6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_fringe_decor6_img();
	this.instance.setTransform(-115.2,-109.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115.2,-109.7,230,219);
p.frameBounds = [rect];


(lib.ken_fringe_decor5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_fringe_decor5_img();
	this.instance.setTransform(-137.1,-103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-137.1,-103,274,206);
p.frameBounds = [rect];


(lib.ken_fringe_decor4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_fringe_decor4_img();
	this.instance.setTransform(-108.6,-105.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108.6,-105.8,217,212);
p.frameBounds = [rect];


(lib.ken_fringe_decor3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_fringe_decor3_img();
	this.instance.setTransform(-93.5,-76.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.5,-76.3,187,153);
p.frameBounds = [rect];


(lib.ken_fringe_decor2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_fringe_decor2_img();
	this.instance.setTransform(-107.3,-91.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.3,-91.4,215,183);
p.frameBounds = [rect];


(lib.ken_fringe_decor1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_fringe_decor1_img();
	this.instance.setTransform(-93.2,-80.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.2,-80.1,186,160);
p.frameBounds = [rect];


(lib.ken_fringe_base12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AA7347").s().p("AjUQWIgEgBQiDhphPixQg7Ajg9AVQAAAAgBABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBgBQAAAAAAgBQgBAAAAAAQgBgBAAgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQABgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQAwg0AuhMIABgCQgJgagHgaIAAAAIAAABQgiBcgqAzQg8BJhZAAQg9AAhcgeQg/gUghgTIgDgDQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBIAEgCQAlgEAzgZQAdgOATgOIgTABQgyAAgjgVQifAoiOh9QAAAAgBAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQBvATBChYQgggNgbgTIABAAQgcgTgXgeQhJgCg3glQg2glgLgvQAAgBAAAAQgBgBABAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAAAgBQABAAAAgBQADgBACABQAOADALAAQAnAAAngMQgIgRgFgUQAAgCABgDQABgCADgBQACgBADAAQACABACADQAKAQASAPQA6gYA4gyQA7g0Aeg1QgmAKgtAAQg/AAgagMIAAAAQgNgFgNgOQgCgCAAgDQABgDACgCQACgCADAAQA/gBApgUQhQgHg5gqQgWgOgPgTIgCgDIABgFIADgDIAFgBIAYACQBTAABLgrQAygeAvgwIAAAAIAPgQQBHhOCBjjQB/jdBVhYQBZhcBogfQA5gSA8AAQAqAAAaAGQAXgpAgggIABgBIgBABQAugsAnABQAWAAAZAKIABAAIAHACIAAAAQAQAHASALQAfgLAiAAQAsAAAjAQIgBAAIBNAjIAAAAIAtAVQARAEAXAIIAAAAQAWAIAcANIgBAAIADABIABAAIAMAGIAvAXIAAAAIAkATQBBAkA8AsQCsB7BFCBQATARARATQAWAZARAbQAjA4AhBoIAAAAIAJAfIAAAAQAnCGAABcIAAAAIAAACIAAADQAOAbANA2IAZB5QAiCGBHAMQABAAABABQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgYALghAAQg3AAgUgPQAHApAIAVQAHARAJANQALADAOAAQAZAAAagIIAAAAQAggKAigVIAAABQAagRATgQQACgCADAAQAEAAACACQACADgBADQgFBKgeA2IAAAAQgKATgNARIAAAAIgJAKIAAAAQg9BFhVAAQg3AAgpgXIAAAAQgJgEgIgGIAAAAIgIgHIAKATIAMATIAAABQAoA2BFAAQAXAAAUgHQABAAAAgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAABAAQAAABAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgfAjgaARIAAAAQgnAZg1AAQg1AAgmgVQgRBFgtBJIAAAAQgxBOiEBKQgCABgDAAQgCgBgCgCQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAgCABgCQA7hLAShsQAFgeADgnQgtA7g9BCIgBABQgCACgDABQgDAAgCgCQgCgCgBgDQAAgCABgDQCwkchOmoIABAAQgciVg7ikIhEglIhYAuQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQABgBAAAAQAAgBAAAAQAAgBABgBIAog8IhrBHIgEABIgFgBIhkhJIAiAwQABAAAAABQAAAAABABQAAABAAAAQAAABAAABQAAACgCACQAAABgBAAQAAABgBAAQAAAAgBAAQgBABAAAAQgDAAgCgBIhxg+IgEAOIA5AiQABABAAAAQABAAAAABQABAAAAABQAAAAAAABQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIhBAAIgLAwQgPBGgHBCQgTCkAYCSQARBqAoBhQABADgBACQgBADgCABQgDACgCgBQgDAAgCgDQhfh0gthWIgLgXQgehDgOhUQgZBSgkBMQhICNh4B8QggAhggAcQAJBJARBtQAVB8AWBRQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAABgBAAIgDABIgBAAgAmak1IAAAFIACgIIgCADgAhnvsIABAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-133.6,-104.6,267.2,209.4);
p.frameBounds = [rect];


(lib.ken_fringe_base11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AA7347").s().p("AoeQMQhkgMg4hjQgYgrgMguQgOg1AAg8IAAgCQgcANgtANQhUAXgjAAQgPAAg9gMIg2gMQgDgBgCgDQgBgCABgDQAAgDACgBQBBgrAkg9QAjg6AOhXQAKhmAGgxQAEggAGgaQgHAIgGAKQhBBhgNBsQgBADgCACQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBIgEgTQgJg1AAgnQAAhrA0hyQAihLAzg3QgkgMghgQQg7gch+hZQgCgCgBgCIAAAAQAAgDABgCQACgDADAAQBygbBrhZQArgkBQhQQBOhOAqgiQBMg/BCgqQgggqgTgkQg9h5AAiXIAAgHIABgbIACgFQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAIAFABQAtAWBJAUQCNAmBhAAQAnAABagHQBagHAiAAQBFAABEAJIgCgCQgshDgChKQAAgDACgCQAAgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQADAAACACIAHAFQB3BTCWAlIB2AgQAtANApASQBTAPAyAPIAEACIAAAAQADAAACACIAHAGIADgBQACgCADABIAJAEIAAAAQAxATBMBDIAJAIQAxAtAuBBQBDBdAAA9QAAAog1BdIANASQAhA2AWBjIAFAFIABAAQBYBHgBA2QAAAdggAXIgWAOIgDABQgMBzg4BAIgNAOQABAAAAABQAAAAAAAAQAAABAAABQAAAAAAABQgVBxhUBHQgCACgDAAQgDgBgCgCQgCgCAAgDQAMh+gcg6IgKgRQgCgDAAgDQABgCACgCQACgCAEAAIADABQAcAGAcAnQgKhfguhDQgNgTgQgRQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAgDABgCIAFgCQAMgBAMABQAUADASALQgSgagUgZQg0g7hFgxIgFgEIgDgEIAAgEQAAAAABgBQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAIBFAAIhCgRIgCAAIgHgCIgEgDQgCgCAAgDQABgDACgCQAogeASgfQgfAfgnAWQgaAOgeAJIgDAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAgBgBAAIgDADQgDAAgDgBIiBhRIAgA/QABACgBADQgBACgCACIgFAAIiAgfIgBACQiPD5h3HrIgCAEIgDABIgDAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQACh6AEhtQgpBMgwBCQgoA2g+BCQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgFgBQgCgBgBgDQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAXgwAShEIAKgpIgDAFQggAuhMBoQiMDEgFB/QAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAIgEADIgFgBIgDgDIgVgsIgdg6IgHgQIgchBQgOgjgLgiQg6A4geAyQglBrgGA+QABAMALAOQABACAAADQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgEADQgDAAgCgBQgYgOgQgVIgJgOQABAsAJAWQAFALAKANIABADIgBAEIgCADIgDABIgCAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113.6,-103.6,227.3,207.3);
p.frameBounds = [rect];


(lib.ken_fringe_base10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AA7347").s().p("ApUNsQhBgjgkhBQgjhAAAhJQAAgdAIglIgHAJIAAAAIgfAsQgBABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgFgKAAgbQgBguAuhLIASgdQgPADgOAFQg6AWghApIgEADIgEgBIgEgCIgBgFQABhuBGhNIgIgrIghAbQgBABAAAAQgBAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBIAlhkQhGARhKAAQgvABg6g9IABAAIgSgRQAAAAgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQgBgCACgDQABgCADgBQACgBADABQARAGATAEIgEgFIAAAAIgFgGIgCgEIABgFIAEgDIAEAAQAQAEAXAAQBCAAAqg0QAPgSASgiIAAAAIALgRQgZAMgWARQgcAXgQAXQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBABAAgBQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgGQAAhCA2hJIAFgGQg3gCgUgKQgGgDgVgRIgDgEIAAgEIADgEIAEgCQA9gBA4g/QAdgfBNh3QBIhwA6g4QBLhIBagdQgXgHgYgKIAAAAIgJgEQgCgBgCgCQgBgCAAgDQABgDACgCQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABgBQAhgDBFgSIA5gRQC+i0ESAAQA4AAA1AJIAWgEQAsgJASAAQD1AAB/DpQDGApAjDOIADABQAxAkANAfIAAABIABABIADACIAKAQIAAAAQAqBHAABUQAAAzgVArQAnA8gBAbQAAAXgGAaIAIASIAAAAQALAfAAAjQAAA2gbA2QgOAagNAQQgcCphiBoQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgDABgCgCQgBAAgBAAQAAgBAAAAQgBAAAAgBQAAAAgBgBQgBgCABgDQAhh8ghiuQgBgCACgDIASgcIgzAAQgDAAgCgBQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAIARgjIgcgDIgEgBIgDgEIAAgEIALggIgfgHIgEgCIgCgDIAAgEIALgtIgbgHQgEgBgBgDQgCgCABgDIAIgeIgLgEIAAAAQgSgGgOgMQgZAIgbgBQgYABg4gWIgpgOQgVAEgWABIgBAAIgFAAQgZAAgPgEIAAAAIgRgEQgQAIgRAJIgEABIgEgCIgCgEIgIggIgNAdIgDADIgEABIgEgBIghgTIAFAZIAAAEIgDAEIgFABIgEgCIg4gsIADAmQAAABAAAAQAAABAAAAQgBABAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAgBIgmg7IAAAjQAAADgCABQgCACgDAAQgDAAgCgBIgggVIAAAgIgBAEIgDADIgFAAIg2gNQggA/g8CCIAAAAQhHCQhKBJQhIBFhVAVIhAAzIAkAdQACACABACQAAADgBADQgCACgCABIg8AXIA7BGQABACAAADQAAADgBACQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQgCABgDgCIgtgYIA4B8QABACgBADQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQgCACgDgBQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQiAhzhOgUQhJgSgbBHQgJBQAoA4QAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAIgBAAIgEgBgAPOijIANAWQAFgTAAgUQAAgSgHgYQgDAegIAdgAJmqRQgTgdgegfQhJhMhdgQQAqAUAqAbQBMAwA3A5IAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106.5,-87.7,213,175.5);
p.frameBounds = [rect];


(lib.ken_fringe_base9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AA7347").s().p("AKSN7QgCgBgBgDQgBgDACgDQAZgxAAgjQAAgjgCgQIgJg6QgqAag1AIQgNADgLgBIgEgCIgCgDIAAgFIACgDQAxgoAuhRIAAAAIALgUQgFgnAAgZQgEhhAyiuIAAgBIABgCIgahMIgVg6QgGAagIAaIgBABQgGATgLAaIAAAAIgVArQgBACgDABQgCABgDgBQgDAAgBgDQgBgCAAgDIAFgfIADgUQAFg8gGg7QgEgngNgqIgHAhQgIAigKAgIAAgBIgFAUIgBAAQgjBrg6BfQhTCIh0BWQh6BciKAXIAAAAIgOACQgCAAgDgBQgCgBgBgDQgBgDABgCQABgDACgBQCNhMBeiMIgZhaIghh3QhOkTgKgrIgBgBIgNhTQgbgUgdgDIgDABIgBABIglANIgCAAIgDAAIgCACIgFABIgMgBIgIABIgBAAIgSAAIgBAAIgDAAQgUABgIABIgBAAIgPAEQgUAHgfAPIgYAMIAAABIgMAGIAAAAIgHAEIAAAAQgaARgZARIgQANIgBAAQhSBEgeBNQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAABgBAAQAAAAgBgBIgBAAQgDASgBATIAAABIgDATIAAAAQgEAfADAgIAGAZIAAAAIAFAaIgBgBIABACIAAACQANB3AhB6QAaBgAeBGQABACgBADQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBABAAAAQgDgBgCgBQhVhLgyiRQgJgZgHgaIgXAaIAAAAQgXAcgQAQIAZAPQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQgHADgHAIIgBABQgHAGgCAIQAGAEAKABIAQAAIAEABIADADIABAEQAAAVADAbIAJA4IAMA/QAAADgBADQgCACgDABQgDAAgDgBIgvgfIABAAQg4ghgOABQgeAGgXAiIAAAAQgNATgGAWIAAABQACAYAIAUQABADgBACQgBADgCABIgGADIgDABIgDgBQgNgEgMgIIABAAQgggSgZgdQgWgagLgeQgGgHgGgNIgDAQQgEApACAfQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQgCACgDABQgCABgDgBQgCgBgBgDIgbgzIAAAAQgWgqgIgTQgjA1gVAhQgBADgDAAQgCABgDgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBQgCgCAAgDIAGgiIAAAAQALg/ARg9QgShUgKg3QgNhBgDgcIgBgCIgEg3QgCgXAAgNIAAAAIABgWIAAgBIABgJQABgbADghIgdAnQgtA6guAoQgCACgDAAQgCAAgCgCQgCgCgBgCQAAgDABgCQAnhBAbg7IAAAAIAKgWIAAAAQAlhWAnh0QAYhGASgpIAAAAIAMgdIhnBWIgEABIgEAAIgDgDIgDgDQgBgCAAgDQAAgCACgCQAmgmBBhPIAAAAIAogzIAAAAQB1iSAug1QDPjtCqgfIADgBIADgBQANgDAogDQA9gFBxAAQBKgmBCgLQC1gdCxBUQAgAQAjAVIABABQBjA7B9BsIAAgBIAHAHIABAAQDGCoA8AoIAWANQABABAAAAQABABAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBgBQg4AAhAgVIgBAAIgMgFQB+CIA3B9QAjBOARBbQALA6ANB6QALBwACAxIABAYIAAADQgEBYgvCnQgBADgCACQgDABgCAAQgDAAgCgCQgCgCAAgDQgHhAgJiNIgGAcQgKAogNArQggBlgcAiQgBADgDAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBQgBgCAAgDQAKgxAJhFQgOAlgRAmIAAABIgZA1IAAAAQgfA/goBGQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBQgDAAgBgDQgCgCAAgDQAGgpADg2IABg7QgRApgYApQgoBFhBBMQgCACgDAAIgBABIgEgCgAICqjIgBgGIgFABIAGAFgAlKs2IAAAAIABABIACgDIgDABIgCABIABAAIABgBIABAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111,-89.3,222.1,178.6);
p.frameBounds = [rect];


(lib.ken_fringe_base8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AA7347").s().p("AnhNmQgDgBgCgDQgBgCAAgDQABgDACgCQAngfAZhBQAKgaAFgWIgaAKQgSAlgvAbQgfASgkAKQgDABgCgBQgDgCgBgCQgBgCABgDQAAgDADgBQAZgRAhgkIAJgJIgfAEQiIAPiMhHQg8gfgmglQgXgVgOgXQgBgCAAgDQAAgDACgCQABAAAAAAQABgBAAAAQABAAABAAQAAgBABAAQADAAACACQAjAaArARQAzATA6AEQgMgGgMgJIAAAAQgagSgPgTIgFgEQgCgDAAgCQAAgDACgCQACgCADgBIAKgBQAUgCARgLIgMABQgfAEgbgNIAAAAQgbgMgIgWIAAgEIACgEIAEgCIAEABQANAFAIgBIABAAQAsgFAcg6QAJgTAGgTQgMARgOAKQgWARgqAFQgZADgsgRIgBAAIgDAAIgIABQgGABgEgEIgFgEQgkgCgggUIgDgBIAAgBIgPgKIAAAAQgWgSgHgWQgBgCABgDQABgDADgBQACgBADABQACAAACADQAHAKALAFIABAAQAQAKAPgCQA2gGAegpQgVgLgQgUQgkgrgHhDQgFgvAMgzQAGgaALgbQAahAAhgaQgRgMgNgPQgCgCAAgDQAAgDACgCQABgCADgBIAOgCIABAAQAWgCAUgEIgKgPIABAAQgmg5gEgmIAAAAQgBgNACgMQACgVALgSQAag/A0gwIAAAAQAmglA1gbIAAAAQAOgHAdgMQArg/AvgeQAkgYAngEIADgBQAPgBAJABQAbg+AagiQBFhaB5gdQAdgHAggEQA1gGBJASQALgTAagPIAWgLIAAAAQAUgIAYgDQBCgIBAAHQBZAKBTAlQBVAmApA1QAbAiAJApQAJgFAPgCQA7gHBfBNIAAABIABAAIAAAAQAvAmBQB2QArBBA2BYIAAAAIAWAjQApBFAfBRQAnBiAJBQQADAggBAeQgDBUgjBHIghBCIAAAAQgPAgAEAfQADAfASALIAAABQATALAngFIgBABIAHgCQACAAADABQACABABADQABACgBADQgBADgCABQgiATggAEQg9AHgxguIAAAAQgNgMgKgNQgLArABAMQAEAhANAZIAAgBQAHALAIAHIACAEIgBAEIgDAEIgEABQhNgFgxhHQgwhEgMhwQgFgwAGg9QAGg2APg/QALgsAGgmIg5gGQgDAAgCgDQgCgCAAgDQAAgDADgCIAhgfIhPgMQgDgBgCgCQgCgCAAgDQAAgDADgCIAcgbIiAgOIgDgBIgCgBIgCgBIglgVIAEARQABACgBADQgCACgCABQgDABgCAAIhOgWIAeAkQACACgBADQAAADgCACQgCACgDAAIh4gFQAGA+AIBFIAHAxIAAABQAACMg9BeIgUAdIAAAAQgwA8hNAtQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBABgBQAAAAAAgBIAIgQQAhhKgJhLIgBgKQgQAZgTAXQhXBwh5BFQg7Aig8AVQgaCdiKBaQgfAUglARIgCABIgDABIgCAAgAHxheIACgCIgCgFIgCgBIACAIgAtXk5QgDAGgBAFIAAAAQgBAGADAjQAFAmAYAmIACgFQAohvAcg9IAAAAIABgBQg+AWgkAcgAEDryQg9gzhBAHIgnAEIgCADQA2AGA9AQIAAAAQAcAHAYAIIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105.3,-87,210.7,174.1);
p.frameBounds = [rect];


(lib.ken_fringe_base7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AA7347").s().p("AjXQQIgDgCQgLgJgLgNIAAAAQgUgXgLgUIgDAEIAAABQgYAngbATQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQABgBAAAAQAAgBAAAAQADgHgBgLQAAgggWgdIAAABQgOgSgkgfQgmghgOgSIgBgBQgLgNgGgPIgBAEQgLApgBAiQAAApACAIIAFAOIABAEIgCAEIgEACIgFAAQhIgkgphuQgIAbgLARQgaAng3AAQgeAAgZgQQgCgBgBgDQAAgDABgDQABgCADgBQAJgDAFgFIAAAAQALgKAAgXQAAgagVgWIAAAAIgzgrQhIg9gFhXIgTAIIAAAHQAAA6AYAmIAAABQAUAhAuAmIACADIAAAEIgCAEIgKAKIgBABQgQAMgWAAQhDABgphGQgfgzAAgsIABgPQhPAFheg+IgDgEIAAgEIACgEIAEgCQBZgOBdhJIAFgfQAMhGAAg1IAAAAQAAhEgRiDQgRiBAAhWQAAjhBAiMQA9iHCah+QD0jIBrg6QB/hECXgBQBZABAsAYIABABIBXA/QARgDAPAAQB5AABnAdQCSApAQBTQAdgLAaAAQBGAAAiAmQAkAnAABVIAAABIgBAcIAWAFQAuAMANAMIABAAQAZAYARAhQAKAUARAwQAVA6AYBiQAcB0APA6IAAAAQA0DLA7BxQAsBVAQAqQAbBLAABGQABBag3BgQhBB0hcgBIgKgBQgoA3hQA9QgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAlhKAMgqQAKglACgyQgWAhgoAkIAAAAQg9A2gKAMIAAAAQgfAmgBAsQAAAdACAHQAFARAoANQADABACACQABADgBADQgBADgDACQgQAIgNADQgJACgHAAQghAAgpglQAGANAJAMIAAAAQAMARAOAKQADACAAADQABACgBADQgCACgCABQgdAMgeAAQg4AAgpglQgrgmAAg3IABgMIABgEIADgCQA4gcAcgbQApgpAAg7QAAgcgNggIgIgSIAAgEIABgDIBrivIAAABQBFhxAShKIgfhDQgeg+gHgXQgWhJgUi2QgYiShEgWIgDABIgBAAQgCAAgDgCIhGg9IAJAmQABADgCADQgBACgDABQgCABgDgBIhKghIASAmIAAAEIgCAEIgEACIgFAAIhCgjQg/BhiHDRQinEDhuB6QihCxiEgBQgUABgIgGIABABQgPgHgLgYIgPAAQh0AAhbgjIAAAAIgbgMIgVAeIAAAAIgIAOIAAABQAYCHBEA3QBSBACQgxIAEAAIAEACQBzCACnBHQADACABACQABADgBADQgHAWgKA4QgLA+hLAMIgBABIgCgBgAQjG7QABBPghA3IAAAAQgJAPgLANQgHAzgPAnQA3gaAdgsIAAAAQAig1gBhRQAAg1gng7IgMgSQAIAhAAAxgAmDHQQALAFAFAAQBPgBBahgQhlBHhUAVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117.6,-104.1,235.2,208.2);
p.frameBounds = [rect];


(lib.ken_fringe_base6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AA7347").s().p("AiqREQgWgGgQgNIgBAAIgFgFIgCgBIgGgHQgVgYgGgfQgNATgPAOIAAABIgRAOIgBAAQgjAYggADIgBAAIgBAAQgDAAgCgCQgDgDAAgDQgBgEAGgDQASgQALgbQALgcAAgdQAAgUgLgqQgJAZgOAYQgMATgMANIgKAJQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQgDAAgCgBQgCgCAAgDQgBgCABgDIAKgWIAAAAQAIgYAAgdQgBgjgmhOQgWgqgKgaIgBAFIAAgBQgFAOAAAVQAAAhANAeIABACQABACAAADQgBADgDABQgCACgDgBQgDAAgCgCQgOgSgLgYQgPgmAAgpIABgNIACgRQACgNAEgPIAAAAQABgIgCgaIABgFQAAAAAAgBQABAAAAgBQAAAAABAAQABgBAAAAQACgBADABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQASASAPAKIABABIAAAAQAlAbAlAYQB8BSBdAhIAEADQABAAAAABQAAAAAAABQAAAAABABQAAABAAAAQAAAOgBACIABgBQgIAZAAAhQAAAxATAhQAIAPAPAPQACACAAADQAAADgCACQgCACgDAAQgjABgbgbIAAAAIgBgBQAEAjAWAfQANAQAKAIIACAEIAAAFIgDADIgFABQgOgBgMgDgAkVOkIABgCIgBAAgAnNLUIAAAAQACgBgCAAgAuLP1QgTgFgQgHQg2gYgig3IgDgFIAAgBQgjhAAAhXQAAgyAUhAIABgDIAFgQIABgEIgCADIgSAZIAAgBIgKAQIABAAIgCAFIgBADQgRAigCAxIAAAGIAAABIAAAKQAAAeAFAbIAAAAIAGAVQABACgBADIgDAEQgDABgDAAQgDgBgBgCQgUgWgQgiQgVgzAAg2QAAgaAEgYQANhjBFhKQAlgoAvgXQAkgSAqgHIAPgCIgJgIQgbgYgHgMIAAAAQgDgFgBgFQgKgZAAg4IAAgDIAAguIABgQQACgTAGgWIgLggIAAAAIgCgHIAAABIgRgoIgBgEIAAAAQgPgfAAgkQAAgQACgRQAEgnAPghIASgvQAAgDgHgcIgEgQQgfA6AAA8QAAAVABAQIgBAEIgEADQAAABgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgOgSgFgPIAAABQgHgRAAgXQAAhnBFhSIAMgMIAAgBQACgOAEgMIAAAAQAQhFAqgtQgCgUgBgTQgChFAUgzIgBAAQgTAYgLATIgEADIgFAAIgEgDQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIAAgFQAAhyB7gzIABAAIAOgFQATguAmgjQASgSAXgPQA3glA1gGQAMgQANgOQALgLALgJQAjgfArgPQAWgJAYgEIAAAAIA4gFQAlgDAegGQAFgHAHgFQAPgMARgKIAAAAQAHgFAHgEQAkgTAfgBQAfgBBKAHQAcADAVABIAdACQAUgIAOgEQAbgHAegBQAagBAVAIIgBAAIAZAJIABABIAXAKIABAAIAoATIACABIAVAJQARACAZgBQAvAAAVAIIAAAAQAMAEAPALIAAAAIAcASQAPALALALQAKgDAIABIABAAQAzgCApAwIAAAAQAjAnBNBvIAVAgQAwBGAtAxQAqAsAnAZQAkAWAsANIAAAAQA1AOBAgCQAMAAALgCQADgBACABIACABQgPAIASgEIAAADIADgDQgCAFgCABIgCACIgQAOIgCABIgBAAIgUANIgBAAIgKAFQgtAVguABIgBAAIgBAAQhSADg1gjIAMASIAAgBQBSBoA1BKIAsBAQACABABAEQB1CwgEB4QgEB6gsBHQgtBJhvAuQgDABgDAAIgEgDIgBgFQAAgDACgCQBChCANgUIAAABQAshIAAhLQAAgjgIglIAAAAIgDgLQgFgSgHgTIAAAAQgMgegRggQgYgrgggvQAkCDAABTIAAAcQgFBYghBRQgaA+gsA1QgrAzg7ArQgNAMgPAHIgBAAIgJAFQgEABgCgBQgEgBgBgDQgBgDABgCQABgEADgBQAFgDAFgBIABgBQAMgGALgKQAbgaARgsQAKgYAFgbQgZAsgcAgQhABIhFACIAAAAIgZgBQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgDgCAAgCQgBgDABgCQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABgBQAHgEAHgGIABAAQAkgdAfhCIAQglIAAAAQAVg2AHgyQACgVAAgUIgBgcQgNArgXAlIAAAAIgBACIAAAAQgoA+gyAWIgFAAIgEgCQgDgCAAgDQAAgDACgCQATgZAQgyIAIgeQAUhSAAg9QAAgzgShRIgMgwIAAgiIgCgIIAAAAIgBgBIgHgjIAAAAIgEgSIACATIAEAjIAAACIAAABIABACIgBgBIAAAEIAIAiIAAAJQAABbgpBiQgpBhgwAaQgDABgDAAQAAAAgBgBQgBAAAAAAQgBAAAAgBQAAAAgBgBQgCgCAAgDQAAgDACgCQAkgoAOhtQANhXgGhzQgHh0hQi8QgYgRgfAGIgBAAQgLABgLAEIgFABQgDgBgBgDQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgDADgCIASgTIAAAAIgCAAIgEgBIAAAAQghgFgnAJQgTAEgUAJQgCABgDgBQgDgBgBgCQgCgDAAgCQABgDACgCIAsgjQghgBgoAMQgDABgCgBIgEADQgkAKgnAUIgJAJIAAAAQh+CHgoExQAAADgCACQgDACgDAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgDgDAAgCIAAgCQgMmCCQg+IgZgHQgcgGgfADIgBAAQgYABgbAIIAoAWQADABABADQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQgBADgDABQgCACgDgBQgngJgpAKIgHACIgBABQgRAEgRAIIAaARIADAEIgBAGQgBACgDABIgFABQgJgDgJgBQgNgBgMAEIgCAAIgHACIABAAQgVAFgeASQgPAygLAzIAAAAQgTBOgIBOQgLBbAHBMQAGA8APAzQArCOBqCHQACACAAADQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAABQgCACgDAAQgDABgCgCQgogagkgrQgmgsggg+QgUgmgMgeQgOC0gTBCQgXBGg3AuQgSAOgVAMQgCACgDgBQgDAAgCgDQgCgCAAgDQABgDACgCQAKgIAHgPIAAAAQAHgOAHgSQAIgdAGgrQgOAcgRAZIgBAAQghAugkASIAAAAQgXAMgYABQgRABgDgCQgIgCgIgIIAAgBQgDgDAAgDQAAgDACgCQACgCADAAQAlgDAZgpIABAAQAJgQAIgUQAFgLAJghIgTAVQg1A2g/ACQgTABgQgBIgKgBIgBAAQgWgFgQgIIgBAAIgGgFQgCgCgBgDQAAgDACgCQACgDADAAQANgCAMgIQAMgIAKgNIAAAAQAXgcAQgyQAJggAFgbQgPAcgYAYIgCACQgfAeggALIAAAAQgQAFgOAAQgMABgRgGIgGgCQgDgBgCgCQgBgCAAgDQABgDACgBQACgCADAAQAZgCAWgRQAVgSATghIgJgDQgYgKgOAAQgKAAgIACIgBAAQgZAFgPAYQgLASgDAXIAAAAQgCAHAAAJIABAIIADAUIAAAAIAFAXIACAQIAAgBIABAEIAEAPIgBAEIgBACQALAbAIAOIAAABIAFAKIAAgBIAJALIAAABQASAUAVAQIADADIAAAEQgBANgHARIAAAAQgQAhgpApIAAAAIgOANIAAABQgjAggoAeQgCAQAAARQAAAsAKAcIAAABQAIATAUAbIAAABIABABIAAAAIADAFQACACgBAEQAAACgDACQgCACgDAAQgDgBgCgCIgDgEQgvgKgcglIgLgSIgCAPQAAAiAUAoQAFANAGAJQABAAAAABQAAAAAAABQAAAAABABQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAIgCAAIgCAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115.2,-109.7,230.5,219.4);
p.frameBounds = [rect];


(lib.ken_fringe_base5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AA7347").s().p("AjBQGQgDAAgCgCQiHh/hIisQhiA3hrAcQgDABgDgBQgDgBAAgDQgCgDACgCQABgDACgBQBfgsBKhMIgVgwQhBAfhGAUQhdBxiigFQgDAAgCgCQgCgCAAgCQgBgDACgDQABgCADAAQA7gPAbgmQhGgQg/gnQiuAQiVhfQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQgBAAABgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQB2ABBKg5QgDgNAAgNQgwgIg0goIgQgNQhigCh0hwIgCgEIAAgEIADgDIAFgCQBSAEA0gnIAAgBIgBgMIAAAAQgBgTACgGQABgEACgBQAEgEAGADQADABADAHIAAABIALAWQB2ghBIhqQhoAwhng5QgCgBgBgCQgBgDAAgCQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAQADgCACAAQBfAJA1g6Qh7AbhDhMIABAAQgKgLgIgMQgCgCABgDQAAgDACgCQACgCADAAQEtAGBnkSIACgFIAFgRIAAAAQAuiVCJiaQAeghAhgiIABgBIAiggIAAAAQBDg/BBgrQBVg6AwABQAcAAAtAKIAAAAIA6APQAdhBAigqQAtg2AmABQAZAAAxAIQA5AKAaAPIABAAIAAAAIABAAIAAABIAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAABABIAAACIgBADIgBABIAAAAIgDAEQAOABAXgBIABAAQA0AIBAAlIAXgCIAZgBIABAAIAKAAQAngBBhA0QBaAwBlBJIgBAAQDLCRAqBUIAeAgIABAAIADAEIAAABQAcAeAUAfIAJAOIABABIABADIABABQALAUAJATIACADIABACIAKAdQAUA8AJAqIAAAAIAIAvIAAABIABANIAAAAIAAAGIABABIACADQATA3ANA/QAOBEAMBlQALBiAUAcIAAAAQAUAdBhBQQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQABADgBACQAAABgBAAQAAABgBAAQAAAAAAABQgBAAAAABQgDABgCgBQhbgRgZgQIAAgBQgWgNgagXQAZBBAXAhIAKAOIASAIIAAAAQBbAnBLhHQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQABAAAAAAQABAAAAAAQABAAABABQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAABQgMA3gkAtQgPASgRAQIgOAMIAAAAQhGA5hIAAQgzAAg6gvIgIgHIgBAKQAAAUACAUQAOAOAQAIIAAAAQApAWBPAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAIAEAEIACADIABADIAAAAQAAADgCACQgXAdgXAPQgbASgiAFQgMACgNAAQhHAAg0guIAAAAQgZgWgNgaQgOAdgTAgIAAAAQg6BghOA1QAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQgBgBABgBQAAAAAAgBQAAAAAAgBQAwh9AThUQAHgbAEgaIAAAAQALhKABhQQgBi3hUkSIgGgTIgchXIgqgdQg3AIg9AnIgBABQgDACgDgBQgCAAgCgCQgCgDAAgDQAAgCACgCIAxgzQgyARgzA2IgEACIgEAAIgEgDQglg7hGgZIAuA5QACADAAADQAAACgCACQgCADgDAAQgDAAgCgCQg7gsg4gMIgDgBIBAAiIADADIABAEIgCAEIgEACIhQAWQghCBAACIIABAZQACBkAXBYIAAACIAAABIAAAAQAbBnBACHQABACgBADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgCACgDAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQhjhMhKiiIAAAAQgQgkgNghQgWg4gLgxIgeA5QiID3itCSQAKDxBFCTQABADgBADQAAACgDACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIAAAAgAy8ELIAAABIAAADIAEgCIgFgJIABAHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-137.1,-103,274.2,206.2);
p.frameBounds = [rect];


(lib.ken_fringe_base4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AA7347").s().p("AnXNFQgDgBgCgCQhihwhEgQIgBAAQgtgSgeAPQgdAQgQAyIgCAEQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAIgEgBIgDgDQgXguAEg7IgUATIgEACQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIgBgEIAGhzIghAcQgDABgDAAQgDAAgCgCQgCgDAAgDIAGhgIgZAaIgFACQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAIAah0IgSAUQgCACgCAAQgDABgCgCIgEgDQgBgDABgCIARg7IgkAFQgDABgCgCQgDgBAAgDQgBgDABgCIAohaIgagFQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAgBgBAAQgCgDAAgCQAAgBAAAAQAAgBABAAQAAgBAAgBQABAAAAgBIATgYQgVgGgWgKQgpAUg5gWQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABgBABAAQAhgHARgYQgrgVgugvIgCgFQAAgDABgCQACgCADAAQACgBADABQBNAoBMgGIAAgCQAAgDACgCQAtgvAIgPQhLgDg4gcIAAAAIgFgCIgBAAQgsgZgggoIgCgFQAAAAAAgBQAAAAABgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAABQABAAABAAQBlAaBUgkQgtgFgbgqQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAgBQABAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQABgBAAAAQADgBACACQAyAXAngUIAAAAIAHgEQhVgpgOhvIAAAAIgBgEQAAAAAAgBQAAAAABgBQAAgBAAAAQABgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAgBQADgBACACIADACIABABQA5A8BAABQA7h8gZiUIgBgHIAAgCIACgSQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAIAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAIABgBIABAAIABAAIAEADIANANIABABIABABQAfAoALA+QAZgbA0glQBHgzAhgaQB5hnAIhpQAAgDADgBQABgDADAAQADAAACACQACABABADIAKAxIAAgBQAEAcAAAaQAAAPgGAjIALgIQAngYATg0QAMggAQhCQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABgBABAAIACAAQAAAAABAAQAAABABAAQABAAAAAAQABABAAAAIADAEQANAwADBNIANgHQATgJBYggQB0gqBAgyQABAAAAgBQABAAAAAAQABAAAAgBQABAAABAAIABAAQADAAACADQACACAAADIAAABQAAAigLAyIgDAPQAdgjAsgbIABAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAABAAIABABIAEACIABABIABAEIgCBIQAbgSAzgWIABAAQAkgPAXgQQABAAAAgBQAAAAABAAQAAAAABgBQABAAAAAAQABAAAAAAQABABABAAQAAAAABAAQAAABABAAIADAEIAAAEIgNAlIAAAAQgHASgJAPQAdgOAagPQBJgrAohAQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABgBQADgBACACQADABABACQAPAfAOAzIAMAsIABAEIACgIIANgqQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQABAAAAABQABAAAAAAIADAEIANAsQAJAiAFAaIALhVIACgFQABAAAAAAQAAgBABAAQAAAAABAAQABgBAAAAQADgBACACIADADQBWCfAKBeQAVgZgDgNIAAgBQgCgCABgDQABgDADgBQACgCADABQADABACADIAAAAIABABIAeA1QAEAHAFANQAYgngWhjQgBgCACgDQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQACgCADABIAEACQBXBaAGDKQAGgYAEgVQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQABAAAAAAQADgBACACQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAHAQAHAXQAOApAAAWIACgDIgBAAQAJgVAEgbQABgDACgBQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQADAAACACQACACAAADIADASIAAAAQAFAeAAARQAAA2gbAuIABAFIAAADQBYA3BfgDIAEABIADADQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABIgCAEQhGBFhOASQAfBWBOApIAEADQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABIgCAEIgEACQgtAGgtgXQAoAcAqgCQABAAAAAAQABABABAAQAAAAABAAQAAABABAAIADAEIgBAFIgDADIgNAIQgUAMgWAAQgZAAgVgIIAAgBIApCRIgBAFIgDAEIgEABIgFgCIg1gwIAPBVIgBAEIgCADQgBABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgnADIA2A9QAAABAAAAQABABAAABQAAAAAAABQAAAAAAABIgBAEIgDADIgFABIhXgSIhDBKQgBABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgDAAgCgBIgEgEQgBgCABgDQBDjdAAhGQAAgUgJgpQgTApgqAiQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAIgEgBIgDgEQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAXhmgzhZQACAngRAnIgDAEIgEABIgEgCQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQgXhIg+g2QgNABgNAAQhEAAgegGIgEgDIgKgNQgCgDAAgCQABgDACgCQANgNAMgOIABgDIAAAAQg0AghBAAQghAAgXgIQgSACgUAAQgZABgXgBQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABgBIAhgcIgCABIgBAAQgiAMgjAAQgeAAgZgFIgagHQhuBKgfAXQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgDgEQgBgCACgDQAGgNAIgYIAAAAIACgGQgPAKgQAIQgeANgxALQg2AMgTAFIgFAAQgDgCgBgCQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABgDACgCQA1geAVghQgvAig1gDIgDADIgEACQgEAUAAAZQAAArAQAwQAKAhAOARQABAAAAABQAAAAAAABQAAAAABABQAAAAAAABIgBAEIgEADQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQg+gTglg3IAAAAQgXgigIgkQgKAmgBAsQAABtAUA1QAMAhAaATIADADIAEACIAEACQACACABADQABADgCADQgBACgDABQgDABgDgCIgDgBIgHAAIgBAAQgxAAgrguIAAAAIgCgDQAAAiAFAVQABACgBADIgDAEQgCACgDAAIgDgBIgBgBQgmgWgWgnIgOAzIANgGQACgCADABQAAAAABABQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAA1gQAlIAOgJQADgCADAAQACABACACQACACAAADQgDBMgdBFIAbgRQADgBADAAQACABACACQACACAAADQgDBEgYAuIAMgFQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAIACAEQALBHgXA/IgDAEIgEABIgBAAgAmfFsIABAFIAGgEIgIgFIABAEgAmYFsIAAAAIAGgEIgEgCIgDgDIABAJgApJEVIABgBIAAgBIgBACgArxAdIABABIACgBIAAgBIgDABgAEKhPIgCACIAIgEIAAgEIgGAGgAssiKIAAgDIgPABIgJAAIAYACgAsIihIACAAIgCAAgADHm9IADgDIgBgBIgCAEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108.6,-83.7,217.4,167.5);
p.frameBounds = [rect];


(lib.ken_fringe_base3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AA7347").s().p("ApML5QhnhPhRA3QgCABgDAAQgCAAgCgCQhthuADiwIAAgBIAAgHQg/hBAuhnQgqhcAlhdQgIgSgHgeIAAAAQgJgtgBgpQAAh3BYhdQAHhiBDhLIAAAAQBGhPBFADQAOAAARAFQAahIAXgeIAAABQAvhAAsACIABAAIAZAAIABAAQA2ACAkAFQBdhJB6AEQAnABAMADIAQAEQADAAACADIAAAAQBhgxBMADQBEACBIAZQAfALASATIABABIALANQBKANBSBJQAgAcAaAfQCZAbA/BtQAbAtAHA2QAEAVAAAPQAwApgBA1QAAATgBAEIAAgBIgBAIIAAAAIAAAAQAyA1gBAtIAAAFQATAQAQASIAAAAQAWAagBALQABAkgZA4QAWAlAAAfQAAAwgtBVIAAAAQgZAthRB2QgBADgDAAQgDABgCgBQgDgBgBgDQgBgDABgCQAyingki4Qh8jSl3AaQgCAAgDgCQgCgCAAgCQgBgDABgCQACgDACgBQAfgMAegIQg8gNheAOQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABgBIALgIIhbASQgDABgCgBQgCgCgCgCQgBgDABgCQAFgTBNggQhVAIg9A4QADALgBAPQABBOguBHQgwBHhaA4IAAABQhBAohaAWQgnAKgnAGQiuC3gREfQAAACgCACQgCACgDABIAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.5,-76.3,187,152.6);
p.frameBounds = [rect];


(lib.ken_fringe_base2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AA7347").s().p("AmVORQgDgBgBgCQgwhFgVgVQgUgVgkgLQglgLgmAYIAAAAQgoAZgUA2IgDADIgEACIgEgBIgDgEQgPgkgTgeIAAAAQgZgqgUheIAAgBQgBgDACgDQACgCACgBQgRgpgLg5IgXhwQgBgDACgCQABgDADgBIAEgCQACgBADABQACAAACADIABABQgSgmgWgjIAAABIhRh2QgCgCABgDQAAgDADgCQACgCADAAQAMABAMAEIgpgxIABABIgBgBIgHgBIgBgBQgGgCgDgEIgCgFQhMgYg3hHQgCgCAAgDQABgDACgCQACgCADAAQBwgBCWiUQgnAVgkALQgDAAgCgBQgDgBgBgCQgBgDABgDQAAgCADgCQAsgeAjg0QAUgfA2hzIAAAAQAshiAsgyQAvg2Beg2Qh7AxhyCKQgCACgDAAQgDABgCgCQgCgCgBgDQgBgCACgDQDBlDEqAeQAVhCA5grIAGgEQAMg8BFguQBMg0BGAEQB0AIBhBNQAkgKAOABQC/ANB8CVQAlAtAbA1QA8AoApBFIAGAMIgMgfQgBgCABgDQABgDADgBQADgCADABQACABACADIAAAAIABABQAfA5ATAuQAhBQgGBAIAAAAIgIBDQAgA3AQAgQAKAXAGAXIAAgRQAAgCACgCQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQADAAACABQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAmBQgGBRQAQgwAAg4QAAgwgRhFQgLgvgQgjQgBgDABgCQAAgDADgBQACgCADAAQACABACACQAwAxAZAzQAgBBAABQQAABUhHA+IgIAIQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABQAAAAAAABQAAAHADANIAAABQAAAcgOAvIAAABIgMAhIADgBQABAAAAAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQABADAAACQgcBigxBOQgBADgDAAQAAABgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgDgBgBgCQgBgBAAAAQAAgBgBgBQAAAAAAgBQAAAAAAgBQAGhPgyhGIgBgFIABgEIAEgDIAEAAIAyANQgUgwhAgJIgEgCIgCgEIAAgEQAIgcALgLIAHgGQgfgOgnAVQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAIATgjQhCAuhPAGIgEgBIgDgDIgBgEIADgEQAfggAJgWQgoAhg2AMQggAHgmAAIgEgBIgCgDIgBgEIACgcIg3AmQgCABgDAAQgEgBgBgCQgCgDABgDIADgRQgYAUgXgEIAAAAQgUgDgUgVIgBAYQAAADgCACQgCACgDAAQgDAAgCgCIg1gsIAFAeQAAABAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAIihggIg0gJIAAAAQg2gJhJAAIAoAQQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQACADgBACQAAADgCACQgDABgCAAQjZADiMB/IATgGIADAAIAEACIAFAEQACACABADQAAADgCADQgOARgMASQgMARgNAZIAegUQACgCADAAQADABACACQACACAAADQAAACgCADQgWAbgQAgQgLAVgMAhQATgOAZgPQAAgBABAAQAAAAABAAQABgBAAAAQABAAABAAQACABACACIABABQACACAAACQAAADgBACQgsA8gPAiQgRAlgFArQAJgPANgQIADgDIAFAAIADACIADADIACADIAAAEQgMAjgCAQQgBAIAAAsQgBAxAMAwIAAAAQADASAGAOQABADgBADQgBACgDACIgDAAIgCAAgAHGDFIgEAFIAEAHIACgEIgCgBIACgFIgCgCIACAAIAAAAIABgCIgBAAIgCACIAAAAgAPMDJIgBAIIAJgNIgIAFgAG/DNIAAABIAAgBgAiOqbIBYABIAigPIgXAAQg3AAgsAOgAEEq3IApAKQg0gng3gaQgWgLgUgHQA5AaAzAvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.3,-91.4,214.7,182.8);
p.frameBounds = [rect];


(lib.ken_fringe_base1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AA7347").s().p("Am4MgIgDgEQgcg1grgnQgqgmgpgBQgqgCghAMIABAAQggANgJAIIgFACQgBABAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBIgRgqQg3iPhBjyQhFkCAAg2QABiOBuiFIAAggIABgEIgBgEIAAgHIABgEIgBgEQAAgGAIgYQALgfASgVQALgOAZgSQAYgTAWgLIAAAAQAlgSA7goIBQg2IAPgLIgBgDQAChFBZgWQAcgIAzgEIBIgHIABAAICYgbQBggSA2AAQCfAABmApQBqArCPCAIBrBkIARAPQAhAfAcATQAyAkAQAXQAKAOgBAKQAAALgLAHQAaAfAUAgIAJAQQAWALAOAKQAbASAMASIAAABQAJAOAAAOQAAAhgOAIQgFAEgNACQAQBFAEAzIgBAEIABABIABAGIgBABIABAEIAAAYIgBAaIgBAEQABACAAADIgCACIABAEQgGBGgXB3QAAADgCACIgFABQgDAAgCgCQgCgCgBgCQgQh3gXhfQgBgDACgCQgDgBAAgDIAAgEQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIgQg5QgBgDACgDIgBAAQgDgCgBgDIAAgDIgCgDQgQg0gUgqQgBgDABgCIgCgCIgEAAQgfgIgcgOQgvgXgqgkIgMgLQgzgugbg0QhIgNg8gIQAVBUAUByIAAAAIAAABIABAJQAAADgBADIgFADQgDAAgCgBQgEgCAAgDIgCgLQgoh4gkhUIAAgDIgCgBIgDABQgwgGgmgBQAGAfAFAkQAAADgBADIgFADQgDAAgCgBQgCgCgCgCIAAgCQgNgkgOgfIAAgDIgDABIgFAAQiCAAiDAWQgEAAgCgCIgBAAIgCAAIgDAAIAAAAQgCADgDABIgEABIgBABQgBADgDABQgDABgDgBIgEgCIiAATIAAAAQgtAGgWACIgDAAQgIAVgNAfIgMAYIgOAbIABAVIAAAAIAAACIABABIABAeIAAABIABAgQAABOgNAsIAAgBQgMAngbAeQgJALgMAKIAAAAQgHAHgJAEQgDACgCgBQgDgBgCgDQgBgDABgCQAAgDAEgCQAGgDAGgFIAAgBIAAAAQALgLAHgTIAAgBIABgCIAAgBQAJgcAAghIgEhYIgWAmQhdCeAAAAQAAAOAWBoQAQBIAIA5IAHAzQAIBIAQBsQANBfgYBxIgCAEIgFACIgBABIgDgBgAqYnkQg2AfgSAMQgyAhgOA6IgCAIIADgDIAMgMIgBAAIANgNQAdgeA2gzIAngnIgLAGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.2,-80.1,186.4,160.2);
p.frameBounds = [rect];


(lib.ken_eyes_decor8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_eyes_decor8_img();
	this.instance.setTransform(-56.9,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.9,-14.7,114,29);
p.frameBounds = [rect];


(lib.ken_eyes_decor7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_eyes_decor7_img();
	this.instance.setTransform(-50.5,-16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.5,-16.8,101,34);
p.frameBounds = [rect];


(lib.ken_eyes_decor6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_eyes_decor6_img();
	this.instance.setTransform(-50.4,-17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.4,-17.9,101,36);
p.frameBounds = [rect];


(lib.ken_eyes_decor5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_eyes_decor5_img();
	this.instance.setTransform(-48.1,-17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.1,-17.7,96,36);
p.frameBounds = [rect];


(lib.ken_eyes_decor4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_eyes_decor4_img();
	this.instance.setTransform(-51.3,-17.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.3,-17.1,103,34);
p.frameBounds = [rect];


(lib.ken_eyes_decor3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_eyes_decor3_img();
	this.instance.setTransform(-55.3,-10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.3,-10.4,111,21);
p.frameBounds = [rect];


(lib.ken_eyes_decor2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_eyes_decor2_img();
	this.instance.setTransform(-49.5,-13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-13.6,99,27);
p.frameBounds = [rect];


(lib.ken_eyes_decor1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_eyes_decor1_img();
	this.instance.setTransform(-56.1,-18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.1,-18.8,112,38);
p.frameBounds = [rect];


(lib.ken_eyes_base8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AElBJQgWgGgOgaQgEgIgCgJIgDgMQgCgKAAgIIAJgCQASgDAVABIgCABQgEAGgBAHIAAAFQALgBAMADQABgJgDgGIgEgGIAnAEIAHABQACAJgBAMIgBAFIgGgBIgNABQgJACgFAEIAHACIAPAJIAGAEQgFAMgJAJQgMAMgPAAQgFAAgGgCgAlIAAQgMgLgFgOIAKgCIAUgEIAJAAQgFgGgMgEIgRgEIgJgBIgBgFQAAgNAEgKIAKABIA2AIQgEABgDAEQgEAGAAAJQAQABAPAEIABgFQAAgJgFgGIgCgCQAcAFAYAIIAMAFQgBAJgDAJIgGAMQgFAHgGAHQgWATgeAAQgeAAgVgTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.1,-7.5,70.3,15.2);
p.frameBounds = [rect];


(lib.ken_eyes_base7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AEoCIIgfgEIgOgCIgPgCQgJgJgGgOIgDgHQgRgqALgzIAAgDQAIgjAUgbIAUgLQAggRAeAGQALACAKAEIATAGQAEAIADAJIAFAMIADAIIgFgCIgBAAIgEAAQgHAAgIAHQgIAJgDANQgCAHACAHQAAAFACAEQAFALAKACQAGACAGgEIAGgEIABgBIABgCIgBARQgJAqgXAcQgEAIgHAGQgKAKgMAGIgQgCgAjlBUIgUgBIgsgBIgXgBQgOgIgMgNIgMgPQgYghABgoQgBgJACgIIABABIABABIAIAHQAHADAJAAQAOABALgLIAFgIQAFgGAAgKQgBgNgJgKQgIgIgKgCIgHAAIgBAAIgGABIAGgIIAJgLQAHgJAJgGIAbgDQAQgBAQAAQArgBApAXQAMAHAMAJQATAeABAlIAAAEQAAAygjAmIgGAFQgOAOgPAHIgUgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.9,-13.9,75.8,27.8);
p.frameBounds = [rect];


(lib.ken_eyes_base6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AEGCQQgjgGgVglQgCgDAAgDQgWgrAIg2QACgSAFgRQAIgXANgTIAPgCIAEAAQAxgEA7AJIAFABIAGAAIABABQAMAZADAeQABAJAAAKQgFgEgGgCIgHgBQgMgCgJAFQgJAEgCAIQgBAKAIAIQAHAIAMABIAIABQAHgBAFgCQgJAwgdAhIgGAHQgZAXgcAAIgKAAgAlKA2IgHgHQghgkgCgwQAGADAJACIALAAQAQAAALgGQAMgHAAgJQAAgKgMgGQgLgHgQAAIgJABQgJABgHADQACgJADgJQAIgdAVgXIABgBIAIAAIAHAAQBRAAA/ALIAGABIATAEQAOAUAGAYQAEARAAATQAAA2gkAoIgFAFQgiAigvAAQguAAgiggg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.3,-14.5,74.7,29);
p.frameBounds = [rect];


(lib.ken_eyes_base5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AERCVQgkgCgSgnIgEgIQgOgjAJguIABgFQALgvAfggIAQgPQAagTAbABQAZACARAUQAHAIAGALQARAkgIAvIgBAFQgKAxgeAhIgDAEQgfAggiAAIgEAAgAliA/IgDgDQgegkAAgvIAAgFQABgxAggjQAKgKALgIQAbgSAiAAQAjAAAcAUQAJAHAJAJQAgAjACAwIAAAGQAAAsgbAiIgHAIQgiAlgvAAQgwAAgiglg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.9,-14.9,77.8,29.9);
p.frameBounds = [rect];


(lib.ken_eyes_base4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AEICQIgBAAIAAgBQgVgLgNgZIgDgGQgTgpAIg1QAEgdANgXQAJgTANgNQAGgHAHgFQArgJAiAHIACAAQARAMALAYQAIAQADASQAGAagGAhQgHAwgaAfIgFAGQgUAWgXAFIgogGgAETgjIACABIgBgBIgBAAIAAAAgAkzBhQgbgKgVgZIgFgGQgbgjAAgvQAAgiANgbQAHgRAMgOQATgWAXgJIACAAQAsAAA0ARIAOAOQAOAQAIATQAKAaAAAfQAAAzggAlIgEAGQgWAXgcAHQgeAAgWgBgAjuhQIACAAIAAgBIgCABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.8,-15,77.7,30.1);
p.frameBounds = [rect];


(lib.ken_eyes_base3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AETA+QgKgGgKgRQgJgPgEgOQgDgKAAgLIAAgMIAKgBIABABQAOgBATAAIgDAIIABAHQACAJAGAIQAHALAKABQAJAAAHgJQAGgIABgJIABgDQAAgIgDgGIAOABIATABIAPADIACARQAAAGgCAHIgPAAIgBAAIgJAAIgIABIgBABIAAgBIgBABIgCABIAAABIgCAEIABACQACAEAPAEIAOAEQgEAIgHAIQgMAOgLAEIg7gGgAldADQgJgGgGgJIATgCQAUgDADgEIABgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIAAgBQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBIgBAAIgMgBIgKgBIgDAAIgVgCQgCgIAAgIQAAgGADgKIATgBIAbAAIATABQgDAFAAAIIAAAEQABAKAJAJQAKAKALAAQANAAALgKQAIgIADgKIAAgHQAAgCgDgGIAtAEIADAAIAMABIAAANQABAKgGAMQgFANgMAMQgOAQgNAGIhRAAQgPgFgQgQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37.7,-6.9,75.5,13.8);
p.frameBounds = [rect];


(lib.ken_eyes_base2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AETBaIgZgHQgQgYAAgfQAAgWAIgQQAFgMAJgKQAIgEAHgCQAOgEANAAQAxAAAzAvIAQARIAAAGIAAAOQgEAfgWAXIgaACIgTAAQggAAgkgIgAlXA7IgfgEIgGAAIgCgCQgcgcgDgkIAAgKIAAgPIAQgLIAGgEQBJgtA+gBIADAAQAOAAAPAEQARASAHAXQAEAOAAARQAAAqgeAfIgkAGQgcADgeAAIgXgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.5,-9.9,83,19.8);
p.frameBounds = [rect];


(lib.ken_eyes_base1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AgSCKQgcgNgaghQgPgSgJgUQgVgrAAgzQAAgRADgPQAXgbAUgOQAngbA2AAQARAAAXAGIAKAPIAOATQAOAVAIAaQAKAdAAAYIAAADQAAAlgMAjQgGATgHANQgrAhgyABQgJAAgJgDgAgdA/IAAAAIgCAAgABhgEIAAAAIgBAAIABAAgAgagrIABgBIgBAAgAAhh0IABgBIgCAAgAgRh4IAAABQADgCADAAIgDgBQAAAAgBABQAAAAgBAAQAAAAAAAAQAAABgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-11.8,-14.1,23.7,28.2);
p.frameBounds = [rect];


(lib.ken_dress_decor8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_dress_decor8_img();
	this.instance.setTransform(-77,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77,-115,154,230);
p.frameBounds = [rect];


(lib.ken_dress_decor7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_dress_decor7_img();
	this.instance.setTransform(-76.2,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.2,-115,153,229);
p.frameBounds = [rect];


(lib.ken_dress_decor6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_dress_decor6_img();
	this.instance.setTransform(-77,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77,-115,154,230);
p.frameBounds = [rect];


(lib.ken_dress_decor5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_dress_decor5_img();
	this.instance.setTransform(-77.5,-114.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.5,-114.8,155,230);
p.frameBounds = [rect];


(lib.ken_dress_decor4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_dress_decor4_img();
	this.instance.setTransform(-77,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77,-115,154,229);
p.frameBounds = [rect];


(lib.ken_dress_decor3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.ken_dress_decor3_img();
	this.instance.setTransform(-75.7,-117.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.7,-117.9,152,236);
p.frameBounds = [rect];


(lib.ken_dress_decor2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_dress_decor2_img();
	this.instance.setTransform(-66.2,-81.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.2,-81.3,132,163);
p.frameBounds = [rect];


(lib.ken_dress_decor1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_dress_decor1_img();
	this.instance.setTransform(-76.2,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.2,-115,153,229);
p.frameBounds = [rect];


(lib.ken_dress_base8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AEYLaQgEgCgBgFQhVgUgog6IgBgFQACgsAIhAQANhiAAgtQAAgQgEgXIgCgQIgCgLIgDgOIAAAAQgDgMgCgNIAAABIgFgSIAAgBIgBgEIAAAAIAAgBIgBgDQgLgqgHgeIAAgBIgDgOIgBgHQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgDIAAgBIgBgHIAAAAQgFgVgBgNQgIhCgJhiIAAgBIAAgEIAAgBQgFg4gHgzIgDA1IgBACIgCAbIgCAbIgDAWIgHA6IAAAAIgSB5IgEAeQgHA4hABLIAAAAIgGAIIgBABIgDADIAAABIgBAAIgHAIIgJALIAAAAQhHBTgjA5QgmA+gWBHQgBADgCACQguAZhGALIAAABIgBAAQgDAFgEADIgCAAQgFABgFgCQgHgEgBgGIAAgDIiChIIgBAAIgQgNIgBAAIgHgHIAAAAIgWgVQgUgUgQgWIgNgTIAAgBIgBgBQgMgSgJgTQgCgDABgCQAOhDAwhoIAAAAIAHgNIAGgOIAAAAIACgDIAAgBIBIiCIADgDIABAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQgCgEgBgFIAAgEIAAgGIAAgEIADgNIAAgBIAcgzIABgCIAGgFIADgDQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAIADABIADABIAAgDIAAgEIgBAAQgDAAgCgCQgDgCAAgDIABgEQAGhGAIh9QALiJAWhOIAAAAIAFgPIAAABIADgKIAFgMIAAAAIASgtIADgDQAAAAABgBQAAAAABAAQAAAAABAAQAAgBABAAIAEACIAQAHIABAAIATAIIgBAAIAbAJIAFABIABAAQAdAJAdADIACABQApAMAegFIAKgEIgBAAIAIgDQARgIALgSIACgCIABgBIABgBIABgBIADgCIABgBIAAAAIAFgEIAAgBIACgCIBuiQIgBAAIATgfIAUgjIADgDIADgCIAJABIABAAIApACIAHAAIAGAAIATAAIAEAAIALAAIADAAQAbgBAagCQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQAMAdANAcIAFAKQAzBpA2AqIAAABQAiAbAjAAQAngBAfgJIAAgBIAEgBIAAAAIABAAIABAAIADgCQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAABABAAQAAABAAAAQAAABAAAAIAEAZIAAgBIABAGIAHAoIADARIAHAkIAAABIACALIAAACIAAAAIABABIAOBNIACAJIAAABIACAIIABAIIAMA/QAAAfgIAlIAAABIgOBAQgBACgCACQgCACgDgBQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBIgCgBIAAAFIAAAAQADAAACADIAAAAIAAAAIABAAIgFAGIACAAQACACADgCIAAAAIABAAIACAHIADgCQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQgBAHgGgOIAEACIABAAIAAABIACABIAEAOIAAgBQAGARABAVIAAABIAAADIAAACQAAARgDANIgGAYIgDAEIgCABIACAEIAOAlIAAABIADARIAAAFIAAABIgCAGIAAACIgFAPIAAACIgCAFIgDAEIgDABIABAFIAUBNQATBIAAAvQAAAlgFBWIgEBcIgBADIgCACQgPAOgRAMIgBABIgDABIgBABIg0AhIgTALIgRAIIgBAAIh8AqIgBAAIguAIIgCAEIgBABQgEAEgGAAQgHAAgDgEgAnEBhIABAAIAAAAIABgBIgCABgAIuBIIABAAIABAAIABAAIgBgBIgBgBIgBACgAhOoAIABAAIABAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.2,-73.4,122.5,146.9);
p.frameBounds = [rect];


(lib.ken_dress_base7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("ACCR6QgEgDgBgDQhVgVgog6QAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABgsAIg/QANhjAAgtQAAgpgWhZQgZhpgFgnQgJhEgIhoQgFg3gHgzQgHBzgLBLIAAAAQgPBhgHA2QgHA4hCBLQhbBogqBEQgmA+gWBHQgBADgCACQguAZhGALIAAABIgBAAQgCAGgFACIgCAAQgFABgFgDQgHgDgBgGIAAgBQiwhHhIiRQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAOhEAwhnQAphWAshHIgBgDIAAAAQgCgHAEgFQgCgGAAgGQAAghAfgoIABAAIACgEIgBgDQgBgHAFgFIAGgHQAHhGAHh+QALiJAWhMQAHgZAWgyIgkgbQgBAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgDABgCQBojsAPg2QAliMgMh9QgiAVgkAAQgdAAgxgYQgrgVgPgUIAAAAIgEgEIAAAAQgNgMgYgeIgBgEIABgEIAAgCIADgDIAFgBQBlALAtg5QAtg6gMiAQAAgDABgCQAFgIAYgTQAZgUAdgQIACAAIBXgUIAFAAIADADIAFAHIAQgJQAOgOgDgXIABgEIADgDIAFgBIAEACQCGByAnAqIAAAAIAGAGIAAAAIAVAZIAHgfQAHgbAKggQAJgZgKgwQAAgCABgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQADgBACAAQADABABACQAYAgAGADQAGADAdAHIADABIALACIgGgMQgBgCABgDQABgDACgBQACgCADABICMAYQADABACACIAOARQA+AJAuAxIABABQA2BKAgAcIAAAAIAEgCIAPgpIACgCIAHgHIAAgBQAIgGAGgCIAAg0QAAgDACgCQACgDADAAQADAAACACQCEBkBwggQABAAAAAAQABAAAAAAQABAAABAAQAAAAABABQACABABACQABABAAAAQAAABAAAAQABABAAABQAAAAgBABIgJA0QATAKAAATIAAACIgEAPIgCACIgBACIAAAAIAAAEQgmCAgHAdQgOA2gNAbQgjBGhgABQg+AAhCgVIgBAAIhIgbIAjDEIAuEWIgBAEIgDAEQgZANgQAGIAOBQIAAAAIApDZQAAAfgIAmIAAAAIgOA9IAEAGIAAABQACAFgCAFIAAABIgCADQAKAXAAAfQAAARgDANIAAAAIgGAVIABABQACAFgCAGIgCAEQAPAiAAAWQAAAEgKAbIgBAGIgBACIgCACIAAABIAUBMQATBIAAAvQAAAmgFBVIgEBcIgBADIgCACQh9BrisAYIgCAEIgBABQgEAEgGAAQgGAAgEgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.2,-115,152.5,230.1);
p.frameBounds = [rect];


(lib.ken_dress_base6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("ABpGjIgDAAIgCAAIgBAAIgLAAIgFAAIgSAAIgGAAIgFAAIAAgCIgCAAIgOACIgMABQgKAAgFgDIgBAAIgBgBQgBgCAAgDQAAgHAFgDQAIgTAYguQAQgeANgVIAQgZIAAgCQADgNAEgDIACAGIABADIABAEIABADIALAfIABACIAAACIABACIABADIADAOIAAAAIADAJIABADIAIAYIAAABIADAJIARAvQAEACAAADIgBADIABADIgEABIgFACQgHADgHAAIgbgDgABoDLIgDgDQgHgHgGgSIAAgBIgBAAQgCABgCgGQgIgMgGgcQgKgKgXguIgBgCQgPgggYg4QgLgXgWg9IgLggQgKgJgLgRIgFgIQgOgWgJgXIACgBIgEgQIgFgGIhEhWIgZgkIAYgOIgGgGQAOgNgCgXQAAAAAAgBQAAAAAAgBQAAAAAAgBQABgBAAAAIADgDIAEgBIAFACQCGByAlAqIAGAGIAAAAIAVAYQACgOAFgQQAHgbAMggQAJgZgMgwQgBgCACgDQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQACgCADABQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQAYAfAFAEIAjAKIgBAIIAAgBIAAABIADAbIACAEIAQAZIAAABIAFANIADALIABADIAAAEIAEAJIABAAIAAABIAEARIAGAbQAGAdACAZIABAiQABAvgYA/IgNAqIgDAIIgFASQgFAUgLAaIgBADIgMAbIAAABIgBABIgHAWIgCAAIABABIgCAJIgDAGIgBAEIABANIAAAFQgBADgFACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.8,-42.2,39.6,84.5);
p.frameBounds = [rect];


(lib.ken_dress_base5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AgORCIgCgDIAAgEIAPiEQAKhjABgsQgBgqgUhZQgbhogEgnQgJhEgIhpQgFg2gHgzQgHBzgLBLIAAAAQgPBggHA3QgHA3hCBMQhcBogpBEQgnA+gVBHQgBADgDABQgrAYhPAKQgCADgCABQgDABgDgCIgDgBIAAAAIgEgBQizhHhKiSQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAOhDAwhnQAohXAshGIgBgEIAAABQgCgIAEgFQgCgFABgHQgBggAggpIAAAAIADgDIgBgEQgBgGAEgFIAGgIQAHhGAIh+QALiIAWhMQAHgZAWgzIgkgaQgBgBAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQgBgDABgCQBpjsAOg2QAliMgLh+QgiAVgkAAQgdAAgxgYQgrgVgPgUIgBAAIgEgEIAAABQgNgNgXgdIgBgEIAAgEIABgCIADgDIAEgBQBmAKAtg4QAtg7gMiAQgBgCACgDQAFgIAXgTQAZgUAegPIABgBIBYgUIAEABIAEADIAFAHIADgCIAMgIQAPgOgDgWQAAgDACgCQABgDAEAAQADgBACACQCXBvBbFHQAOhHAFg6IAAAAQAGhPgLg1QgThlgNgzQgBgDABgCQABgCADgCQACgBADABQACAAACADQAWAfAFADQAHADAdAIIACABIADAAIABAAIAIACIgGgMQgCgDABgCQABgDADgCQACgBADAAICMAZQADAAABACIAOASQA/AJAuAwIABABQA1BKAgAdIABAAIAEgCIAwiNQAAgBAAAAQABgBAAAAQABgBAAAAQAAAAABgBQACgBADAAQADAAACACQABACABADQABAQAVAQQAaATA0ASQBXAdA6AAQAEAAAFgCIAAABQAHgEAFgBQADAAACACQADABAAADQABADgBACQgDAFgKAjIAAAAIgQA1IgBADIgBABIAAABIAAAEQgmB/gIAdQgOA2gNAbQgiBHhgAAQg/AAhCgVIAAAAIhIgbIAjDFIAuEVIgBAFIgDADQgaAOgQAGIAPBPIgBAAIAqDaQgBAegIAmIAAAAIgNA9IADAHIABAAQACAFgCAGIAAAAIgCADQAJAYABAfQgBARgDAMIAAABIgFAVIABABQACAFgCAFIgCAFQAPAiAAAVQAAAFgKAaIgBAHIgCACIgBACIAAAAIATBNQAUBIAAAvQAAAlgFBWQgDA2gBBXIgBADIgCADQheBIjTAMIAAAAIgSABQhEAAg9g6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.5,-114.8,155,229.6);
p.frameBounds = [rect];


(lib.ken_dress_base4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AB6R6QgEgDgBgDQhVgVgmg6QAAgBAAAAQAAgBgBgBQAAAAAAgBQAAAAAAgBQADgsAGg/QAMhjAAgtQAAgpgVhZQgahpgFgnQgIhEgJhoQgFg3gHgzQgHBzgLBLIAAAAQgPBhgHA2QgHA4hCBLQhbBogqBEQgmA+gWBHQAAADgDACQgtAZhHALIAAABIAAAAQgDAGgFACIgCAAQgFABgFgDQgHgDgBgGIAAgBQivhHhJiRQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAOhEAwhnQAphWAshHIgBgDIAAAAQgCgHAEgFQgCgGAAgGQAAghAggoIAAAAIADgEIgBgDQgBgHAEgFIAGgHQAHhGAIh+QAKiJAWhMQAIgZAVgyIgkgbQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgDABgCQA1h4AehJIAAAAQAdhGAHgbIAAAAIABgDIAAAAQAjhvgQidIAAgDIABgBIgMADQgfAIgKAAQgvAAg/ggQgrgXgagYIgCgEQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQABAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIASACQA5gBAvg9QArg5AAg2QAAgjgLgbIAAgEIgBgDIAAAAQgBgHAEgFIABgBQADgDAGgBIAOgIIgDgEIAAgEIACgEIAPgSIABAAQANgNAWAAQAMgBAFAFIABACIADAEIBcgbQADgBACACQADABABADIAUgMQAOgOgCgXIAAgEIAEgDIAEgBIAEACQCGByAoAqIgBAAIAGAGIAAAAIAVAYIAHgeQAIgbAMggQAHgZgLgwQAAgCABgDQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQADgBACAAQABABACACQAXAgAGADQAGADAeAHIBegFIABAAQBzATALA3IAFAAQAGgCBMBFIA6A0IA/iCQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAAAAABABQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQAcAeAfAQIAAAAQAsAVA5ABQAPgBBNgNQABgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQABABABAAQAAAAAAABQABAAAAAAQABABAAABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQglDogsBoQgVAxggAcQgkAhgrAAQg7AAhEggIAAAAQg3gdgkgQIACALIAeClIAIAsIALBAIAiDTIgBAEIgDAEQgYANgRAIIAOBRIAAAAIApDZQAAAfgIAmIAAAAIgOA9IAEAGIAAABQACAFgCAFIAAABIgCADQAKAXAAAfQAAARgDANIAAAAIgFAVIAAABQACAFgCAGIgCAEQAPAiAAAWQAAAEgJAbIgCAGIgBACIgCACIAAABIAUBMQATBIAAAvQAAAmgFBVIgEBcIgBADIgCACQh9BrirAYIgDAEIgBABQgEAEgGAAQgGAAgEgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77,-115,154.1,230.1);
p.frameBounds = [rect];


(lib.ken_dress_base3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("ACNSAQhXgVgigNIgEgDIgBgFQABgxAKhqQAJhtAGgmQAGgkgdhSQgdhVgFhRQgGhQgZh4IgMhAQgVDdghBiQgeBVhCBSIAAAAQhLBVgiAxQgzBMgXBdIgCADIgDACQgRAFgKAAQhgAAhZghQhMgchEgvIgDgDIAAgFQAQhjANhAQANhCAUhIQAUhKBZhrQAfgmgBhUIgCiUIAAgBQAHhNAWh4QAXh6BQiVIAahHQgTgOAAgYIARhmIAShvIAIhKIABgNQgzABgrgPIgBAAQgYgKgWgOQgCgBgBgDIgBAAQgbAAgdgQQgPgJgtgoIgDgEQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBIAEgBQBRAHA6gxQAhgbAIgtIAAAAQAGgggGgoIAAgCIAAgCQgCgJgGgOQgEgKgIgGIgCgDIgBgEIACgDQATgcA3gSIAAgBQAegJA4gMIACAAIAaAAQAJgBAIgEIABgDIgBABQABgEACgDIALgVQAKgRABgGQABgDADgCQACgBADAAQADABACACQAYAjA5AnQAqAdATAJIAEgDIAAAAQAJgDAWgDQAJgBALACQAJgRAHgdIAIgdIACgDIAEgCIACAAQAZAKAGAIIABABIABABQADAAADACIAAAAIABAAIAAABIABAAIADAEIAiAAQADAAACABIACADQB+ABAmAYQAXANAqBHIABAAQAWAeAfAbQAaAWAdARIAAAAQAFgYAMgIIAAAAQAKgHAXACIAPgyQAIgcAEgVQABAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAAAAABABQABAAAAAAQABAAAAABQAWARAoAWQBOAsA3AAQAOAAAQgDIAEAAIADADIACAEIgBApIAAABQgCArgHAQQAaAogJAWQgIAVgiA/IAAAAQghA/gIARIAAAAQgdA/gkAVQgcAPgngBQglgBgvgPQgugPglgQIAAAAIgkgQQAmDDAAARQAAASgJAGIgBABQgIAFgJAIIAfAWQADACAAACQABADgBACIgYA3QAsCfAFBMQAFBJAHA5IAAAAQAGA5gHCXQgICXAAAtQAABLAUBCIAAAAQAUBFAIA1QAHA2gbCIIgoDBIgBADIgDACIgKAFQg0AYgqAAIAAAAQgqAAhrgbgAmJlZIAAAAIgBAAIABAAgAmClfIAAAAIABAAIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.7,-117.9,151.6,235.9);
p.frameBounds = [rect];


(lib.ken_dress_base2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AAdMoIgEgCIgCgEIgcivIgKCkQAAADgCACIgFACQgDAAgCgBQjnijj4AxQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgDgDIgBgEIABgtQAKjJA9jCIgcgLQAAgBgBAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQgCgDABgCQAHgaANghIAbhCQgQgEgDgHQgDgEAAgYIA1ixQA0i3AAgjQAAg+gViUQgTiMgaAEQgDABgCgCQgDgBAAgDQgBgDABgDQABgCADgBQAhgMAhgRIBZguQACgBADABIADABQAVgSAegBQAMgCAFADQAJADAAAVQAAAMgHAKQAYAdAWAPQBGAxA3AAQA0AAAqgaQAVgOARgSIgigQQgsgVAPg2QAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAQADgCADAAQACABACACQAWAbAsAHQAcAEA/AFIABAAQB0AOBFBZQABACAAADQAAABAAAAQAAABAAAAQgBABAAABQAAAAgBABQgRASgOAXIAAABIACACIABAEQAQBvA5EBQA2DxADAbQAEAfgJAJIgBAAQgGAGgYALIANBbQABADgCACIgEADIgfALQAiDaACDbIAAAjIAAADIgCADQiXCJjbAAQgsAAgvgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.7,-81.3,103.4,162.7);
p.frameBounds = [rect];


(lib.ken_dress_base1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("ACCR6QgEgDgBgDQhVgVgog6QAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABgsAIg/QANhjAAgtQAAgpgWhZQgZhpgFgnQgJhEgIhoQgFg3gHgzQgHBzgLBLIAAAAQgPBhgHA2QgHA4hCBLQhbBogqBEQgmA+gWBHQgBADgCACQguAZhGALIAAABIgBAAQgCAGgFACIgCAAQgFABgFgDQgHgDgBgGIAAgBQiwhHhIiRQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAOhEAwhnQAphWAshHIgBgDIAAAAQgCgHAEgFQgCgGAAgGQAAghAfgoIABAAIACgEIgBgDQgBgHAFgFIAGgHQAHhGAHh+QALiJAWhMQAHgZAWgyIgkgbQgBAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgDABgCQBojsAPg2QAliMgMh9QgiAVgkAAQgdAAgxgYQgrgVgPgUIAAAAIgEgEIAAAAQgNgMgYgeIgBgEIABgEIAAgCIADgDIAFgBQBlALAtg5QAtg6gMiAQAAgDABgCQAFgIAYgTQAZgUAdgQIACAAIBXgUIAFAAIADADIAFAHIAQgJQAOgOgDgXIABgEIADgDIAFgBIAEACQCGByAnAqIAAAAIAGAGIAAAAIAVAZIAHgfQAHgbAKggQAJgZgKgwQAAgCABgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQADgBACAAQADABABACQAYAgAGADQAGADAdAHIADABIALACIgGgMQgBgCABgDQABgDACgBQACgCADABICMAYQADABACACIAOARQA+AJAuAxIABABQA2BKAgAcIAAAAIAEgCIAPgpIACgCIAHgHIAAgBQAIgGAGgCIAAg0QAAgDACgCQACgDADAAQADAAACACQCEBkBwggQABAAAAAAQABAAAAAAQABAAABAAQAAAAABABQACABABACQABABAAAAQAAABAAAAQABABAAABQAAAAgBABIgJA0QATAKAAATIAAACIgEAPIgCACIgBACIAAAAIAAAEQgmCAgHAdQgOA2gNAbQgjBGhgABQg+AAhCgVIgBAAIhIgbIAjDEIAuEWIgBAEIgDAEQgZANgQAGIAOBQIAAAAIApDZQAAAfgIAmIAAAAIgOA9IAEAGIAAABQACAFgCAFIAAABIgCADQAKAXAAAfQAAARgDANIAAAAIgGAVIABABQACAFgCAGIgCAEQAPAiAAAWQAAAEgKAbIgBAGIgBACIgCACIAAABIAUBMQATBIAAAvQAAAmgFBVIgEBcIgBADIgCACQh9BrisAYIgCAEIgBABQgEAEgGAAQgGAAgEgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.2,-115,152.5,230.1);
p.frameBounds = [rect];


(lib.ken_bottom_decor8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_bottom_decor8_img();
	this.instance.setTransform(-49.9,-41.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.9,-41.9,100,84);
p.frameBounds = [rect];


(lib.ken_bottom_decor7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_bottom_decor7_img();
	this.instance.setTransform(-47.7,-34.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.7,-34.2,96,69);
p.frameBounds = [rect];


(lib.ken_bottom_decor6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_bottom_decor6_img();
	this.instance.setTransform(-50.8,-29.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.8,-29.3,102,59);
p.frameBounds = [rect];


(lib.ken_bottom_decor5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_bottom_decor5_img();
	this.instance.setTransform(-61.9,-76.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.9,-76.3,124,153);
p.frameBounds = [rect];


(lib.ken_bottom_decor4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_bottom_decor4_img();
	this.instance.setTransform(-61.9,-76.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.9,-76.7,124,153);
p.frameBounds = [rect];


(lib.ken_bottom_decor3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_bottom_decor3_img();
	this.instance.setTransform(-56.9,-45.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.9,-45.1,114,90);
p.frameBounds = [rect];


(lib.ken_bottom_decor2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_bottom_decor2_img();
	this.instance.setTransform(-49.9,-41.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.9,-41.9,100,84);
p.frameBounds = [rect];


(lib.ken_bottom_decor1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ken_bottom_decor1_img();
	this.instance.setTransform(-63,-76.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63,-76.7,126,153);
p.frameBounds = [rect];


(lib.ken_bottom_base8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("ABZGYQgqgJgPgMQgDgCAAgCIgXiGIgFB5QAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAIgCADQgWAGgjAFQg+ALgzAAQhyAAhUghQg+gZg/gxIgCgDIgBgDIAChqQAChLAJg5QAWiMB8j6IAKhFIACgEIADgCQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQDEA5DCACIAAAAQCsACCsgpQABAAAAgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIABAEIAFBLIAAAAQAzDKAMCdQAIBmgBC3IgBAEIgCADQgtAbhDAWQhvAjhNAAQg5AAgxgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.9,-41.9,99.8,83.9);
p.frameBounds = [rect];


(lib.ken_bottom_base7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AgCFVQighaitgOQgegDgeAAQglAAgkADIgEgBIgDgDIgBgEQAHjDAdhhQA7jJA+hKIAEgDIAEAAIApAOIA5ARQE6BTE8hjIAEAAIAEACIABAEQAXB5AKBHIAAABIAMB+QAGAxAABLIgBBrIgBAEIgDACQg0AfhDAXQiQAyhtAAQgsAAgWgCQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAgBQAAgBgBAAQAAgBAAAAIgOhPIgGBSQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQgBAAAAAAIgBAAIgCgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.7,-34.2,95.5,68.5);
p.frameBounds = [rect];


(lib.ken_bottom_base6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AgrEkIgDgDIgCgEIAAgRIABgCIACgJQgGABgIAEIgKAGIgEABIgEgBIgDgDIgBgCIgBgDIABgDIABgNQgBgCgGgDIAAgBQgOgKABgNIAAgBQgLAFgEAEIgEACQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAgBgBAAIgDgDQgBgDABgCQABgHgIgPIgIgQQgQANgKAEQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQgDgBgBgDIgKgXQgIgSgDgLIgMAGQgNAHgGABQAAAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAIgDgDIgCgEIAAgeIgKAGIAAAAQgLAGgOAAIgKAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAIgDgDQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIAEgGIAAgUIgOAJIABAAQgIAGgQgBQgQAAgDgBQgGgBgJgHQgSAWgGAFIgEADIgEgBIgDgEIgSgjQgHAGgLAIIAAAAIgJAFIAAAAIgSAKIgFABQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgCgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBIACgFIAAgBIACgJIAAgCQgLABgOgIIgVgPIgBgBIgBgCIgBgEQAAgGAHANIABAAQADAAACgBIAAgBIgEAAIACgBIgEgEIAAAAIABAAIABgBIAAgBIAEAAIgBgDIACACIABABIAAAAIgBgBQgCgEgEgBIgFADIgBADIABgEIADgDIAEgBQAGAAAIgDIARgKIAkhBQAViSBOhtQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQDDBDDHgBQAdgBAdgBQCEgHCGglQADgBADACQACABABACQAoByABCYIAAABIACAAQAdAJAdAUIACAEQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIgCAFQgOANgnASIAKANIACAEQABABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgEAEQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgOgCgJACIAAAAQgaAGAFAmIgBAEIgDADIgEABIgFAAQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAIgRgNQgMgIgGgBQgLABgFAPQgFAMADALIgBAFQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQgCABgDAAIgugGIACAGIAAADIAAAMQAAADgCACQgCACgCAAQggAEghgDQgDADgOAWIAAAAQgWAegHABIgEABIgEgCQgFgEgFgMIgCgCIgHACQgIADgEAAQgKAAgEgHQgEAEgFAHIgMAUIgDADIgEABIgEgCQgFgFgegIIgJAKIAAAAIgSAXQgDABgDAAQgDAAgCgBIgPgZIgEgJIgFALQgMAcgSACIgEgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.8,-29.3,101.7,58.6);
p.frameBounds = [rect];


(lib.ken_bottom_base5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AErLTQgbgCgfgIQgzgNgegGQgDgBgCgDQgCgCABgDIAAgBQgDgEgBgGIAAAAIgBgPIAHiWIABgVIACgsQAAgcgThEIgBgCQgBgKATgSIAPgNQglhGgbiVIAAAAIgJgwQgHgygGgzIgGg2IgGAqQgLBOgMA6QgNA6gMAmQgaBShDBQIhVBlIgKAMIgJAMIAAABQgtBBgJBSIgCAEIgDACQgJAEgSAFQgbAHgYAAQgfAAgsgQIgDgCIgVgIQgYgLgbgPIgIgEQgvgbgigRQglgTgSgJIgBAAIgFgDQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBIgCgEIABgEQADgHgDgQQgGgXAAgGQAAgNAQgMIAAAAQAJgIAAgJQAAgJgHgNQgIgQAAgKQAAgEAJgdQAKgcABgTQAEgsAWgeIACgBIAGgIIAAAAIAngtQAkgtABgHQAAgFgFgMQgFgPAAgIQgBgLAhgZQATgQANgJQgCgHgLgSIgBgEIAIg8QAHg/AAgWQAAisBTjSQAXg9AghAIgBAAIADgHQACgDADgBQACgBACABIA+AQIBEAQIAjAHIgBgBIAPADIAAAAIAZAFIAAgBIAkAGQAsAGAvAEIAaACQADABACACQACACAAADIAAAcICaAAIAAgZQAAgDACgCQADgDADAAIAqgCIAmgDIABAAIAFAAIAAAAIAWgCIAVgDIAWgCIAugHIAqgHIAEAAQAAAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAAAAAABQAAAAAAABQABAAAAABIABAGIAAABIAgCjIAJAqQAWBhAAA1IgKECQAAAJAHAdIAIAgQAAAKgMANQgHAHgBAHQABADAIAGIABABQAPAMAAANIAAAFQgDAMgVAxQApBrADAbQADAeAMAxQAKAtAAAQQAAAMgQAXIAAABIgMAQIgBAAIAIAMQAMASgBAGQABAFgZAmQgUAhgBAOQAAAQADAKIAGANQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAABIgDADQgeAcg6ATIAAAAIgJADIABAAQg0APg1AFQgZADgZAAIgUgBgABNkOIABAAIAAgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.9,-72.4,123.9,144.9);
p.frameBounds = [rect];


(lib.ken_bottom_base4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AgXBjQgDAAgCgBQgDgDAAgDIAAgdQhKgGhLgMIAAAAIgZgEIAAAAIgPgDIAAAAQhSgPhTgXQgDAAgCgCQgBgDABgDIAYhVIACgEQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABABQAAAAABAAQBMAXBMAQIAlAHQBEAMBEAFIAAgaQAAgDADgCQACgCADgBICnAAQADABADACQACACAAADIAAAaQAwgDAwgHIAwgIIBNgPIAEAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABIACADIAKBeQAAACgCACQgBADgDAAQgtAJgtAGIgVACIgVADQgzAFgzACIAAAaQAAADgCADQgDABgDAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.2,-10,78.5,20);
p.frameBounds = [rect];


(lib.ken_bottom_base3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AiLGKQg4gNgVAAQidAAhJglIgBAAQhKgmgWgXIAAAAQgagbABgMQAAgMAKgXIANggIAGgkQAGgjADgHQABgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIANAAQAAgeASgvQAUgyAGgyQAHgzAmhvQAmhvALgWQAOgdAfAMQCvArCcALQA3AEA2AAIABAAQBHAABDgHQBtgLBagUIADAAQAcAIAIATQAJASgKAbQALBsAHA0IAPBXIAAgBIASBXQAJAvgDAiQAMgCADAZQACAQAAAhIAAABQgCA9AGAOQALAThKA7QhFA3jAgEIAAAAIgRABQibAAgNgkQgOggAAgeQgBgUgFgWIgCAMQgGAfAAAOQABAbgHAPIAAAAQgJAUgaARIgCABQgqANgmAAQgYAAgWgFgAAnC3QgDgLgBgPIgGAZIABgBQAEAAAFACIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.9,-40,113.9,80);
p.frameBounds = [rect];


(lib.ken_bottom_base2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("ABZGYQgqgJgPgMQgDgCAAgCIgXiGIgFB5QAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAIgCADQgWAGgjAFQg+ALgzAAQhyAAhUghQg+gZg/gxIgCgDIgBgDIAChqQAChLAJg5QAWiMB8j6IAKhFIACgEIADgCQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQDEA5DCACIAAAAQCsACCsgpQABAAAAgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIABAEIAFBLIAAAAQAzDKAMCdQAIBmgBC3IgBAEIgCADQgtAbhDAWQhvAjhNAAQg5AAgxgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.9,-41.9,99.8,83.9);
p.frameBounds = [rect];


(lib.ken_bottom_base1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AD8KeIAAAAQgrgTgjgNIgDgDQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAg/ABh5IAAgBQgCiEgcg+QgfhEgKiFIgHhyQgfDThDCBIABAAQgTAjhMB5Qg2BWgkBKQgCADgDABIgzASQhKAagiAAQg4ABhegwQgcgOgigWIg3gnIgFgEQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgEIAFgUIApikIAAAAQAchzBfiNIgCgHQgDgJAAgHQAAgXAVgRQAHgFAKgGQgDgGgHgFIAAgBQgNgLAAgOQgBgQAlgnIAAAAIAEgEIAAgEQAAgHAFgEIgBABIAGgGQAEgkACgqIAFhmQAJh3BNjBIAJgWIAAgBIAZgwQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQACgCADABQDoA1DMAAQAiAAAhgCQCIgGB9geQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAIADADIABAEIAABPQAoBdALBbIAAABQADAeABAfQACBhADBGQADBHgIBDQAAApANAmQANAogBAIQAAAJgGAIIAAAAQgDADAAADQAUAogBACQABADgMASIAAAAQgIAMgBAJQAMAvALA0QAWBsAABOQAABYgCA2IgBAEIgEACQgiAPgrAOQhuAhhMAAQg0AAg3gVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63,-69.1,126,138.4);
p.frameBounds = [rect];


(lib.ken_boby_decor_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_boby_decor_img();
	this.instance.setTransform(-86.2,-223.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.2,-223.5,173,445);
p.frameBounds = [rect];


(lib.ken_boby_base_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("EADCAitQgggFg5gbQg9gdgDgJQgJgOABgJQgBgZAXgsQAIgQAKgRIABAAQAog+AIgPIAOjUQAIh1gCgnQgdgpgViYIgNhfQgYidgZhnIgCgGIgEAoQgVCpgPBcQgKAzgHAcQggBkg2A+IAAAAQg7BCgpA7QgPATgLASQg0BSgdBUIAHBdIADAeIAEAoQAEA3grAJIg6AKQgWAEhIgUQhHgWgvgqQgugrgHgIQgUgcgBgxQAAgbASgkIAAgBIAeg6QAplEBQhSQBLhQAChYIAFjJIAChRIABgTIAAgFIAAgCIABgFQATh/AUgWIADgLQAmh9Agg9QARgiALgrIAAAAQAJgoAEgtQAGg4AAiUQAAgagEg7IAAgOQgrAXgZAAQgxAAgzgYQgngRgkgiIgDgCIgPgPQgPgIgSgNIABAAIgVgPIgCgBIgNgLIgbgQQglgZABgTQAAgFAIgKIABAAIACgDQAFgGAHgDQgEgLgBgPIAAgCQAAgMAFgLQACgIAEgGIAGgIQgQgKgXgjQgggygCgZQgBgaADgLIAAAAQAEgQAbAAQAVgCAwA5QAoAwAQABIAFgBQAKgEADgRIgBAAQADgOgCgvQgBgvAGgTQAJgkAgABIAHAAQASAEAKAXQAJAUAAAfQABAXAKAXQAGANAOAXIABAAQAJATAlApIAJALQAwgnAygPQAEgCAOgCQATgEAmgFQAcgFAJgQQANgYAAhHIgBgdQiCg4isiDQggAZg7AAQhaAAhDhEQg3g4gKhMQgCgQAAgRQAAgyAfgcIAEgEQhgjOgdiUQgdiXASiwQARiyCzjxQA0hHBDgyQCih5D5ACQFZAEC2BwQC4BwBqCTQAkA0AdAxQAzBcAVBUQAgCCAEB/QAECAhVC0IgiBFQhDCJhLB0QAAALAEAaQAFAiAAAIQAABhhMA/QgaAVgjARQiGBCilgCQguAAgrgFQAEA8AaARQAWANBaAAQAfAAAaAGQA0AMAcAlQAnA0A3AyQAzAuAiAOIAAAAQAEgJAGgKQAQgjAIgRIABgDQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAgBIAHgaIALgtQADgRAAghQgBggggglIAAAAQgrgqgQgVIgBgDQgIgTAegLQAYgJAQAEQAOAEAWALQASAJAOAAQAHAAABgBIACgDIAAgBQgCgDAAgDQAAgQgPgdQgRgiABgJQAAgSAOgIQAEgCAEAAQANgCAXANQAcAPAOAdIAAABIAAAAQAFgCAFAAQAMAAAKAFQAMAFAKALIACAEIACACQADgCAEAAQAQADAOAFIAFABQAXAJADAfQACAegMAOIAAABIgJAHIAAAAIAMATIAJAQQANAZAEAWIAAAMQAAATgQAdQgLATgDAZIgBASQAAB1g0CIIgOAjQg5CDg3gCQg7gBhcglQg3gXgjgRIABAHIAAAAQAKBgAGBQIADAxIAGBNIAAAAQAJBeAPB/QAZBQACBbIgCFxIAAACQgLBZAfBgQAfBjAABXQAAA5gHAoQgHAigaBXIAAAAIgDAIIAAABQgYBTgFBrIAAACQgRA3hHAjIgBABQg8AhgtAPIAAABQgiALgaAAQgKAAgIgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.2,-222.3,172.5,444.7);
p.frameBounds = [rect];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.km1_img();
	this.instance.setTransform(100,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hm2_img();
	this.instance_1.setTransform(470,95);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.hm1_img();
	this.instance_2.setTransform(288,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(100,50,610,525);
p.frameBounds = [rect];


(lib.hdgrger_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.4)").s().p("AAtEaIgFhaQgCgcgEgVIAJgOQAXgiAdAAQAbAAA1BBQA3BEAAAxQAAAggZAkQgdAogkAAQhSAAgNhngAifkqQhFgXAAgWQgBgRAFgMQBCgQB3AHIABAAQCLgCBMAcQgYAwgcAEIhmAQQg2AJggAAQgjAAg9gUg");
	this.shape.setTransform(-8,-10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiBHgIABAAQjsiVgphqIAAgEQADgwAhh+IAfh1QAAgXgHgsQgJg1gFg4QAAgDACgCIAAAAIAAgBIgCgDIgEgCQgMgNgLgPQgpg6AehWQAOgrBDgSIAZgGQBCgMBqAGIABAAQCOgBBQAdQAdALAUAOQAbAUALAbIAAADQAFBigjAuIgDADIgCADIAAAAQACACAAAEIgDBPQAAA8AbAzQAUAkAvAyQBBBHAUAZQApA2AaA8QAGAMACALIABAJIAAAAQjeAYieC5IgDACQgvATglAAQgrAAgdgZgAlKiLQAHAuAAAYIAAACIgfB2QggB6gEAwQAqBmDkCRIABAAQAwAoBagjQChi7DTgcIABABIAAgBIgBAAQgag/grg5QgUgZhAhGQgwg0gVglQgdg2AAhAIADhJQgmAhg7AAQgWAAgWgFQgVgGgPgKIgDgDIASACQAtAHAUAAQA+AAAlgoIADgCIABgDQAfgrgEhbQgJgTgRgPQgVgQgggMQhMgciMABIAAAAQh3gHhCARIgWAGQgtAQgMAfQgbBOAkA0IABAAQAKAOALANIACADIADABQAZAYAbAGQACAAACACQgfAEgVgNQAEAzAJAyg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.2)").s().p("Ah1HLIgBAAQjkiRgqhmQAEgwAgh6IAfh2IAAgCQAAgYgHguQgJgygEgzQAVANAfgEQgCgCgCAAQgbgGgZgYIgDgBIgCgDQgLgNgKgOIgBAAQgkg0AbhOQAMgeAtgRQgdA3gJAWQBJAABIAeQBIAeAQAAQAOAAAxgMQAxgNARAFQAUAFAXADQAXACAPAAQAtAAAUhAIAGgXQARAPAJASQAEBbgfArIgBADIgDACQglAog+AAQgUAAgtgHIgSgCIADADQAPAKAVAGQAWAFAWAAQA7AAAmghIgDBJQAABAAdA2QAVAlAwA0QBABGAUAZQArA5AaA/QjTAcihC7QgpARgiAAQglAAgagWgAjCjeQglAPgeAHQAIBMgqByQgvCBAAA7QAABWB4BRQBuBLBYAAQAwAABhhfQBfhdAAgqIg/ieQg9iWgKhGIgDABQgNAEgHAAQgjAAg1gZQg2gZgpAAQgqAAgcALg");
	this.shape_2.setTransform(-0.2,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.1,-50.5,82.2,101.1);
p.frameBounds = [rect];


(lib.color_picker_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.color_picker_2_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,360,360);
p.frameBounds = [rect];


(lib.color_picker_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.color_picker_1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,360,360);
p.frameBounds = [rect];


(lib.body_check_subcategory_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_subcategory_img();
	this.instance.setTransform(-55,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.body_check_category_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.check_category_img();
	this.instance.setTransform(-40,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-55,80,110);
p.frameBounds = [rect];


(lib.bg_panel_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_panel_img();
	this.instance.setTransform(-215,-215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,430,430);
p.frameBounds = [rect];


(lib.bg_navigation_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.bg_navigation_img();
	this.instance.setTransform(-50,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-25,100,50);
p.frameBounds = [rect];


(lib.barbie_top_decor8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_top_decor8_img();
	this.instance.setTransform(-36.1,-41.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36.1,-41.1,72,82);
p.frameBounds = [rect];


(lib.barbie_top_decor7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_top_decor7_img();
	this.instance.setTransform(-32.3,-29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.3,-29.4,65,59);
p.frameBounds = [rect];


(lib.barbie_top_decor6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_top_decor6_img();
	this.instance.setTransform(-68.4,-58.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.4,-58.9,137,118);
p.frameBounds = [rect];


(lib.barbie_top_decor5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_top_decor5_img();
	this.instance.setTransform(-30.1,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.1,-26.5,60,53);
p.frameBounds = [rect];


(lib.barbie_top_decor4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_top_decor4_img();
	this.instance.setTransform(-74,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74,-60,148,120);
p.frameBounds = [rect];


(lib.barbie_top_decor3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_top_decor3_img();
	this.instance.setTransform(-46.4,-28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.4,-28.6,93,57);
p.frameBounds = [rect];


(lib.barbie_top_decor2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_top_decor2_img();
	this.instance.setTransform(-30,-32.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-32.3,60,65);
p.frameBounds = [rect];


(lib.barbie_top_decor1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_top_decor1_img();
	this.instance.setTransform(-67.9,-56.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.9,-56.3,136,113);
p.frameBounds = [rect];


(lib.barbie_top_base8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF61AE").s().p("AhEGbIgCAAIAAAAIgBAAQhegchfhpQgCgCAAgDIAAgEIAAgFQAAgagKglIAAABQgMgngDghIgEgtQgCgIAAgFQAAgDACgCIAAAAIAAgCIgEgCIgIgKQgYghAAgnQAAgtANgcIgqgjQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAVg3AFgoQAEgpgRhSQAAgBAAgBQgBAAABgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQBPgvBtAHIAEABQABAAAAABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQglCUAHA6QAHA6AdBDQAdBAATAnIAbATIABgBQCAiBAyhaQAzhbATiZQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABABAAAAQA1AcAnAIIAAAAQAbAFApABIAEABIADAEQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgFATgCAQQgCARAABIIAEBjIgBAEIgEADQglANgkAOQABBKgWA0IAAgBIgBADIAAACIgCAFQgBADgDABIAAAAIgBAEIgKARIADACIABAGQgIAWgCAOQgBAJAAAeQAAAVAPA3IAKAjIAAAEIgDAEQiDBhi8A1IAAAAIgCAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36.1,-41.1,72.2,82.3);
p.frameBounds = [rect];


(lib.barbie_top_base7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF61AE").s().p("ADxElQhVgMhXgHQiLgNhlAAQhSAAgLABIgDABIgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgDgCAAgCIgBgGIAAAAIgBgrIACgaQgLgIgJgLQgbggAAgyQAAghAMggQAJgXAXgmQACgDACgBQAhj0AwABIA6AAQADAAACACQACACAAADQAAADgCADQgoArgdC+QBaAQBBBOQBohTB5AEIAAAAQASiQAqhGQAFgJAFgHIAEgDQABgBAAAAQABAAAAAAQABAAAAAAQABAAABABIA5APQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABACABADQAAABgBAAQAAABAAABQAAAAAAABQgBAAAAABQgQASgLAeQgaA/gGBxQASAzgDApQgDAkgaArIgBABQABADgBACIgBADIgDARQgEARACAMIABAjQABAVAGAOQABADgBACIgEAEIgDABIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.3,-29.4,64.6,58.8);
p.frameBounds = [rect];


(lib.barbie_top_base6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF61AE").s().p("ApkIwQg0gcgSgfIgBgEIACgEIAtg6IAAAAIAYgfIAAgBQgDgBAAgDQgDgNgMgVIAAABQgLgVAAgNQAAgiBVhwIAegmIgBgEQAAgEABgEIgCgLQgDgKAAgIQAAgNAmhEIAAAAIAOgaIgBgCIAAABQgCgHADgFIAAAAIAVgkQAKgqACg7QADgzAChfQgBgCABgDIAAgPIAAgBQAHhcAjgpIAAAAQArgzBeAHQARghAQgNIAAAAQAUgSA3gPQA4gPAGABIABAAQAGAAARAMIACACQAeAlgsAgQgfAXg4AJIgIASQgRAugIBCQAMAeAmAUQAvAYA+AAQBGgBA+hKQAIgWAJgTIAehAIAAgBIAEgLQgugfAAgyQAAgHAGgcQAAgCACgCQADgCACAAQAoADAaAOIAAAAQAbANAPAvIAJAgQBlAHAmAkIABAAQAdAcAJAlQAFAVgDAYQgGBCAYA6IAAAAIAPApQAPgOAKABQAEgCATAWIACACIBDg1IAEgCIAFABIADADQAQAhAHAKQAqA/AvAbQACABABADQABADgCADIgPAaQgOAZgZAiQANBPhiA3QhSAtgoAAQg/ABhQhfQgngvgWgpQAFAvAcBFQALAaAUArQABADgBACQAAADgDABQgcAWghAWIABAAIgeASIgEABIgEgBIgCgDQgeg/gXg/QgsgGg7gMQhqgWgiAAQgxAAgtAUIAAAAIgKAFQgOBIgbA+QgBADgDABQgDABgDgBQgQgHgRgIQgwB+gaA0IAAABQgXAkgpANQgnA4gTAlIgDADIgEABIgIAAQgqAAg1gcgAHjiOIAAAAIABAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.4,-58.9,136.8,117.8);
p.frameBounds = [rect];


(lib.barbie_top_base5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF61AE").s().p("AirDzQgrgMgcgOQgCgBgBgCQgCgDACgDIADgLIADgRIAAAAIABgLQABgYgJguIABAAQgKgwAAgqQAAgYACgLQgLgKgKgNQgagkAAgnQAAgiAQgmQAHgPAIgNIACgBQAZgSAVgHIAOgDIABAAQAkgKBDAAIB4gBQBJAAAuAEIAYADIABAAQAcAEASAHQAYAJASAIQAPAHAbAVQADACAAADIAEAmQAAA6gmA1QgCAKgBAiQgBAhAOBBQAIAiAIASIABACQAFAPAIAKIABAEIgBAEIgDADQhBAohHAVQhCATh4AAQhHAAhLgWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.1,-26.5,60.3,53.1);
p.frameBounds = [rect];


(lib.barbie_top_base4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF61AE").s().p("AlGJIQgDgGgDgNIgDgQIAAAAIAAgDIgBAAIgBACIAAABQgCADgCAMQgDANgDAGIAAAAQgHAMgLgCIgBAAQgMgCgCgNQgBgGABgOIAAgQIgBgDIgBACIgBABIgHAOQgFAMgEAFQgIALgLgEIAAAAQgQgEAHggQAEgRgCgCIAAAAIgCACQgEADgFAKQgHAMgEAEIAAABQgJAKgLgFQgLgEABgOIAFgTIAEgPIAAgEQgBAAAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgEADgGAKIgLAPIgBAAQgLAJgJgGIAAABQgPgGAMggQAHgQgBgCQgDAAgLANIAAABQgVAagNgKQgOgHAPgeQAHgQgBgCIgBAAQgDgBgKAOQgWAagMgLQgPgHAPgeIAAAAQAIgQgBgCQgDAAgMANIAAgBQgXAZgMgLQgJgHAEgNQACgFAHgMIAAgBQAJgOgBgCIgCABIgOAJQgJAJgGADQgMAFgJgIIAAAAQgIgJAGgMQACgEAJgLIAAgBQAMgNAAgCIgBAAIgCABIgBAAQgEABgKAGIAAAAQgNAHgFABQgPADgFgMIAAABQgHgLAKgKIAAgBQADgEAMgIIANgJIAAAAIACgCIgDAAIgQACQgiAFgCgUIAAAAQgCgOAOgFIgBAAQAEgDATgUIAJgJIAAABQAxgzAug4QgGgCgDgFQgFgHAEgKQACgFAHgGIABgBIAAAAQALgNALgLIACgDQBNhNA2gsQAQgNATgNQACgCADAAIABgDIgBgDQAEgnAIgZQARgzAhABQARAAAGAHIAAABQAHAHAAAWIAAAGIAAAAQgBAYgKAYQABAFAEAGIAAABIACADIAAABQATAgA0AbIABABQAhALAbAOIADACIABADQADASAAAKIgBAhQgBAKgDAIQggBZgMA7IAAABIgBAEIAAABIgBABIgBAKIAAAAIgSBqIACCVIAAABQgBADACAMIACATQAAAPgKACQgPAHgOgfIAAABQgIgQgCgBIAAADIAAABIABAQQABANgBAGQgDAOgNABIgDAAQgKAAgFgKgAEaBnIAAAAQgDgGAAgJIgDgPIAAgBIgBgDIgBADQgCAEgDALQgEANgEAFIAAABQgDAFgGACIAAAAQgFACgHgBIAAgBQgPgEAAgPIAAgBQgDggAPhTQAKg4AOg5QgMiGAPhrQALhKARgwQAOgnARgXIgMgEQgDgBgBgCQgCgDABgDQABgDADgBQADgCADABQAJADAKACQAVgUAbAAQBBAAAyA2QA6A+A/CfIAAABIAAAAIABABIACAIQABABAAAAQAAABAAAAQAAABAAAAQAAABgBABIABAAIACABIBoA3QACABABADQABACgBADIgCADQAOALgGAKQgEAQghgJQgRgFgCADQAAADAQAIQAdASgIAOIAAAAQgGAPgggKIAAAAQgLgDgFAAIgCgBIgBABQAAACAPAKQAcATgKAPQgGAJgOgBIAAAAQgGgBgMgGQgOgHgEABIABADIABAAQACAEAIAHQAaAXgMANQgKAPgcgTIgOgIIAAAAIgDgBQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQACAEAHAJQAIAKADAGQAGANgIAIQgLAMgagVQgOgLgDABQgBACALAPQATAcgNAHQgLAMgZgVQgNgLgDAAQgBADAJAPIAAAAQARAbgOAIQgMAMgXgZQgMgNgDABIAAgBQgBADAIAQQAOAegPAHQgJAHgLgJIgBAAQgFgEgIgLIgKgLIABAAIgDgCIgBAAIAAADIAFAQQAEAMABAGQABAPgLAEIAAAAQgLAFgKgKIAAAAQgEgFgHgLIgIgNQgBgBAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIAAADIACAQQAFAhgSADQgLADgIgMIAAAAQgEgGgDgMIAAgBIgGgOIgCgDIAAAAQgDACABARQAAAhgRAAQgPADgHgaIgMAFIgDAJQgFAMgLABIAAAAIgCAAQgLAAgEgRgAE/BRIAIgDQgCgIgCgBIgCAEIAAAAIgCAIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74,-59.5,148.1,119);
p.frameBounds = [rect];


(lib.barbie_top_base3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF61AE").s().p("AiNENQglASgcggIgHAAQgdAAgTgNIABgBIgBAAIAAABQgSAKgQgHQgQgGgMgaIgBgDIABgEQAHgQABgSQABgSgKgxQgLgzAAgZQAAgRABgGIABgFQgJgGgHgLQgTgdgCgjQgFADgFgBQgKACgKgTIAAAAQgFgJgDgBIgGAEIAAgBQgKAHgJAAQgJABgHgPQgDgFgEgBQgDAAgCgDQgCgCAAgDQAAgDADgCIACgCIAAAAIADgCQAXgHAPgLIADgcIgPgMQgRgOABgJQAAgLAFgEQADgEALgBQANAAAIAQIAAABQACAFACABQACgBAFgEQAJgJAJgBIgBgDQgBAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAgBIAHgXIAAgCQAFgJARgBQAFAAAPAIIAAAAIAKAFIAAAAIAAAAQgBgCAHgKQANgTAOABQAJgBAHAOIABAAQACAEACAAQAFAAAEgFQAJgMAQAAQANgCADAWQABAHACAAIAKgFIAAABQANgJAEABQAVgBAAAXQAAAIADACQARgDAHAAIAAAAQAKAAAEAGQAEAFAAAKQAAAEgCAKIgDAIIAFAEIAAAAQAEAEADAAQAEgBABgKQACgZAUABQAEAAAJADIAIACQAGgBAHgSQAMgeARABQAKAAAHAKIADADQADgBAHgLIAAABQALgUAPABQAKgBAKANQAFAFAFAAQAFAAAKgHQAPgKAJAAQAFgBAOANIAAAAIAIAIQAGAAAFgEIAAAAQAJgJAJAAQANAAAKASIABAAQAEAJACABIAGgFIAAAAQAJgKANAAQARgBALAfIAWAAQADAAACACQACACAAADQABADgCACQgUAaggADIACAOIALAFIALAFQgBgBAFgIIAAAAQALgSAHACQAMAAAHAKIgBgBIACADQAEgBAFgKIAAAAQAJgWAOABQAFgBAIAHIgBgBIADACQADgBAGgMQAKgVAWACIAAAAQAMACAGgLQALgXAJACQAEAAAGAEIABAAQAIAFAAALIgBAEQgVAigCAGIAEAjQATABANAEQAJACAEADQAIAGgDAHIAAAAIAAABQgBAEgCABIgBABQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgDAAgCABQgCADgBAFQgCAbgTgBQgEAAgKgEIgBgBIgGgDQgGABgFAKQgJAVgOgCQgEABgHgEIAAgBIgDgBQgFACgGANIgBAAQgMAYgOgBQgGAAgKgGQgFgEgDAAQgGABgHAIIAAABQgNAQgNgBQgFACgIgNIgEgEQgFAAgKAHIAAABQgJAGgHACIgEAHQgBARgDALIAAABQgEAQgBAdIAAAAQgBAdAJAtIAAAAQAIAqALALIACACIABADQABAfgSAJQgPAJgcgHQgHAVgNAGQgOAIgVgMQgLAVgQADQgOAEgSgMQghAigegXQgPAOgQABQgPABgPgNQgPAMgQAAQgSAAgSgRgAkFDxIgEgCIAIgEIgDgCIgBABIAAAAIgBgBIgGAEIACACQACACADAAIAAAAgAjYCFIgFgCIgCACIAHAAIAAAAgAj4AYIABgCIgBAAgAnAh2IAAgBIAAAAgAlgjRIABABIAEAJIAGgDIAAAAIAHgDIAEgHIgRgGIgQgEQAGAEAFAJgAAXjWIgOgHIAAAAIAAAAIgBAAIAPAHIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.4,-28.6,92.9,57.3);
p.frameBounds = [rect];


(lib.barbie_top_base2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF61AE").s().p("AjmFBIgCgEQgKgogahEQgehSAAg9QgBhFBJg/QA1gvBBghIgBgBQgSg7gOhEQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAbAEASgCQALgBAKgEQADgCADABQADABABADQAaAvAfAnIAAABQA4gcA5gjIAAAAQAxgfAsgeQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABAAQAAABABAAQACACAAADQADASAQAOQAIAGAJAFQADABABADQAAABAAABQABAAAAABQAAAAgBABQAAABAAAAQgeBVgxBFQgLAPgOAQIA3AdQAxAYAfAZQACACAAADQAKBAgBAJQABBCgbApIgFArQgDAZACAbQADAhgIAGIgEACQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAIgCgDQgbg5g4gmIhthIIAAgBQgngfgegwQhkBOgXAZQg/BBgWBPIgDAEQAAABgBAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-32.3,60,64.7);
p.frameBounds = [rect];


(lib.barbie_top_base1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF61AE").s().p("AoIIzQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBgBQgMgSgOgNIgCgEIgCgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBIgDgBIgPgLIgDgDIgDgBIgDgDIgDgBQgLgFgLgDIgEgDQgCABgDgCIgBAAIgEAAIgOgDIgEgCIgCABQgCAAgDgBIgBAAIgDAAIgRAAQgDAAgCgBQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAgBAAAAQgBgDABgCIAlhRQgBgHgGgLIAAAAQgKgQAAgOQgBg1BYhwIAAAAIAqgwIgCgEQgCgJAAgGQgBgQARgaIADgCIABgEIAFgIIgBgCQgCgCAAgDQAOhQAFhcQAGhoAKhpQAKhvA5gGQAmg6BBAFQA8AFAVgCQAUgBA0gMIACAAIAVguIADgDIAEgBIAqAAIAEABIADAEIAAAEIgGAdIAAACIABAAQAOAGAUAGQAoAKAlAAQAiAAAvgUIABgBIAAgCIgEgZIAAgFIADgDIAEgBIAmAAIAEABIADAEIATA2IAAAAIAtANIAAAAQAgAJAbACQAeACAVAKQAVAIAIAlQAoAXAIAWQAHARAAAZQAAAPgEAwIAAABQgEAvAAAgQAAAmACASIAAABIAPgVIAAAAQATgYATAAQAOAAAJAIIA6gsQAAAAABAAQAAgBABAAQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABQAEARAGAOIAAAEIABABQACACAAADIAAABIACADIAKATIACADIACACQACACAAACIACADIAKALIACACIADACIADADIADABQAJAHALAEIADACQABAAABAAQAAAAABAAQAAAAABABQABAAAAAAIACACIAEAAQAKACANABQABAAAAAAQABAAAAAAQABABABAAQAAAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIgfBMQAfAwhkBaQhkBZhNAAQhAABhBhmQgQgZhDiFQgIAjAAAbQAAA9ATA9IAAAEIgCAEQgxAjg9AVQgYAJgXAGQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBgBIgBABQgCACgDgBIgBAAIgEACQgeAFgeAAIgMAAIgEgBIgCABQgCAAgDgBIgBAAIgEABIgvgEIgDgCQgDABgCAAIgEgCQgCABgDAAQgggFgkgHQgDAAgCgCQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgsgJgxgNIgGASQgZBBgFAVQgLA5gfA4QgmBCglgBIgGAAIABADIgBAEIg3BQQAAABgBAAQAAAAgBABQAAAAgBAAQAAABgBAAIgCAAIgDAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.9,-56.3,135.8,112.8);
p.frameBounds = [rect];


(lib.barbie_shoes_decor8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_shoes_decor8_img();
	this.instance.setTransform(-52.2,-32.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.2,-32.9,104,66);
p.frameBounds = [rect];


(lib.barbie_shoes_decor7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.barbie_shoes_decor7_img();
	this.instance.setTransform(-55,-43.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-43.2,110,87);
p.frameBounds = [rect];


(lib.barbie_shoes_decor6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_shoes_decor6_img();
	this.instance.setTransform(-49.5,-24.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-24.3,99,62);
p.frameBounds = [rect];


(lib.barbie_shoes_decor5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.barbie_shoes_decor5_img();
	this.instance.setTransform(-55.6,-54.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.6,-54.4,111,109);
p.frameBounds = [rect];


(lib.barbie_shoes_decor4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_shoes_decor4_img();
	this.instance.setTransform(-52.6,-51.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.6,-51.9,105,104);
p.frameBounds = [rect];


(lib.barbie_shoes_decor3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_shoes_decor3_img();
	this.instance.setTransform(-58.9,-47.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.9,-47.2,118,94);
p.frameBounds = [rect];


(lib.barbie_shoes_decor2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.barbie_shoes_decor2_img();
	this.instance.setTransform(-68,-35.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68,-35.8,118,75);
p.frameBounds = [rect];


(lib.barbie_shoes_decor1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_shoes_decor1_img();
	this.instance.setTransform(-50,-28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-28.6,100,57);
p.frameBounds = [rect];


(lib.barbie_shoes_base8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF61AE").s().p("Ak2FIIgCAAIgrgOIhFgYQgZgJgSgUQgRgUgBgaIAAgBQAAgUADgUIgDgBQgCgBgBgDQgBgDACgCIANgZIAAgBIAHgKIgMAAIgBAAQgRgBgMgDQgDgBgBgCQgCgDAAgCQABgDACgCQAKgLALgIIAAgBIAKgGIgMgFIAAgBQgQgIgJgIQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgDABgCQACgCACgCQAMgFARgDIABgBIALAAIgGgKIAAAAQgGgNgEgQQgBgCABgBQABgCADgBQACgBADAAQAJACATAFIAAABIALAFIgCgKIAAAAIgCgeQAAgCACgDQACgCADAAQADAAACABQAQALAIAGIAAAAIAJAIIABgNIAFgcQABgCACgCQACgCADAAQADABACABQAKAKAJALIAAABIAIAJIAEgLQADgMAJgPQABgCADgCQADAAACAAQADACABACIANAZIABABIADALIAIgIIAAgBQAHgIANgMQACgCADAAQADAAACACQACACAAACQAEAVAAAIIAAALIALgFIAAgBQAMgFAQgDQADAAACABQABAAABABQAAAAABAAQAAABAAAAQABABAAAAQABADgBACQgDANgIANIAAAAIgGALIAMgBQAPgCAPABQADABACABQACACAAADQAAADgBACIAAAAIgJAAIACADIgEAAIgCADIABACIAGgBIABgCIABABIAEgGIADAAQAAABABAAQAAAAABAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAIgKARIAAAAIgIAIIgBACIgJAHIAKAEIABAAQALAGAOAKQACACABADQAAACgBADQgBACgDABQgMAGgPAEIAAAAIgMACIAIAIIAAABQAJALAHANIABABQAjBJg6ApQgcAXhDAmIgDABIgBAAIgCgBgAm0DvQAKAHAQACIBlATQAzgbAUgNQATgNAKgLIgNgDIAAADQgCADgCABQgDABgCgBQgOgEgOgIIABABIgLgFIABALIAAABIgDAdQAAACgDACQgCACgCAAQgDAAgCgCQgLgJgLgLIAAAAIgHgKIgFAMQgEALgJAPQgBACgDABQgCABgDgBQgCgBgCgDIgMgaIAAgBIgEgLIgHAKIAAAAIgTAVQgCACgDAAQgCABgDgCQgCgCgBgDIgDgNgAEfAZQgkAAgXgCQgXgBgOgRIgCAAQgDAAgBgDIgQgWIAAAAIgFgLIAAABIgGAJIgBABQgJAOgJAHQgCACgDAAQgCABgDgCQgCgBgBgBQgEgPgCgNIAAgBIgBgLIgKAHIAAAAQgQAJgLAEQgCACgDgBQgCgBgCgDQgBgCAAgDQACgMAEgRIABgBIAFgKIgLAAIgBAAQgOgBgPgEQgDAAgCgDQgBgCAAgDQAAAAAAgBQAAAAABgBQAAAAAAgBQABgBAAAAQAGgHAQgNIAAAAIAKgHIgLgFIAAAAIgagNQgCgBgBgDQgBgCABgDQABgCACgCQARgIAKgEIALgEIgKgIQgLgIgLgKQgCgBgBgDQAAgDACgCQABgCADgBQAOgEAOgDIAAABIAMgDIgIgJIAAAAQgIgJgJgOQgBgCAAgDQAAgDACgCQABAAAAAAQABgBABAAQAAAAABAAQAAAAABgBQAKAAATABIABABIAMACIgEgLIAAAAIgIgcQgBgCABgDQACgDACgBQADgBADABQAUAIAGAEIAAAAIALAFIAAgMQABgNAGgQQABgDACgBQABAAAAgBQABAAABAAQAAAAABAAQAAAAABAAQADAAABACQAJAKAKAOIAAAAIAGALIAFgMIAAAAQAGgNAJgNQABgCADgBQADgBACABQACACACACIAAAAIgEAHIADABIgCADIABAEIADAAIACgGIgBgCIABAAIgDgHIABgCIAEgDIAEAAIAEADQAFAGAFALIAAAAIAEALIAAABIACAMIAJgHIAAAAQALgHAQgHQACgBADAAQADABABACQACADgBACQgBAOgEAPIAAABIgEALIALgDQAPgCAPAAQADAAACACQACABAAADQABADgCACQgJAQgHAJIgIAJIALABIABABIAcAHQADABABACQABABAAAAQAAABAAAAQAAABAAAAQABABgBAAIAHAAQATAAArANIAAAAIAcAJQATgdASgVQABAAAAAAQABgBAAAAQABAAABgBQAAAAABAAQACAAADABQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQADAHAIANIABAEIAKCRIAAAEIgDADIgEABIgUAAQgDAAgCgCQgDgCAAgDQABgrgMgKQgMgGgYAXQgKAPgHAOIgBAAQgRAhgnAcQgoAbgmAAIAAAAgAD5gyIAGANIAAABQACAGgBAHIAAABIgCAHIAMACQAlAAAggUQgSgSgYgLIAFAOQABACgBADQgBADgDABQgDABgCgBIgbgKIgBAAIgMgFgADYgfIAAgBIAAgBIgBAAIgCgDIgCgBIgBgBIAAAEIAGADg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.2,-32.9,104.4,65.9);
p.frameBounds = [rect];


(lib.barbie_shoes_base7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF61AE").s().p("AmgGWIgDgCIgBgDIguiLIAAgBQgDgGgBgHIAAABQgEgPAAgRQAAgSAEgSQgHgGgLgPIgKgLQgCgCAAgCQAAgDABgCQAQgZADgDIANgNIgBgRQgKgEgLgIIgTgQIgCgDQAAgBgBAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAHgdAOgOIAFgEIgPg4QgKgFgSgWIAAAAQgMgPgJgSQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIACgEIAgghQATgUAQAAIAAAAQAPgCAWAUQARAOANAGQA1gBAvgIIgBABIAQgDIAGgBQAwgLAXgJQAAAAABAAQABgBAAAAQABAAABABQAAAAABAAQAAAAABAAQABAAAAABQABAAAAAAQAAABABAAQABACAAADIgECZQgDA8AGAdQAKAqAPAnIAQAfIAAABQAPAggBALQAAALgCAJIgBABIgBACIgbCPIgCADIgCACQgwAbg4AAQg4AAhAgagAmMCkIgVAPQgFAOAAALIABALIABAFQABAFADAEQADAIAHAGQAVAQAuAAQA6AAAbgJQAjgNAAgmQAAgNgKgOQgKgPgQgDIABAAIgqgEIgPAAQgjAAgyAOgAmgCuIAAABIAAgBgAl+AsQgSAGgIAKIgDAFIAAABQgDAFgBAHIAAABQgBANAHAJQADAEAGACIADABQANAEAaAAQAyAAARgFQAbgIAAgaQgCgihFAAQgTAAgcAFgAlyhgQgvAEgXAPQgEAEgCAGQAGAwANAKIABABIABAAIABABIABAAIADACIABAAQAQAEAkAAQAxAAAVgJQAZgNAAgjQAAgXgXgJQgUgHgdAAIgaABgAD/DEIgDgCIgCgCIhLiwIgBgBIAAAAQgJgMAAgNQgBgWALgXQADgHAOgOIAWgXQACgCADAAIACAAQADAAADACQACACAAADQABAIALAIQANAJAPAAQAYAAAVgXQgMgHgKgKQgMgMgMgFQgNgHgfgEQgDgBgCgCQgCgCAAgDIAAguQAAgBAAAAQABgBAAAAQAAgBAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQADgBACABQArAVAPABQAPAAAwgFIABAAIADAAIABgRIAAgEIghgJQgagIgagCIgkgEQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIgDgPIAAABIgGgXQAAgBgBAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBQACgBADAAIAHABIAAAAQAYAEANAAQALAAAVgIQARgHAMgDQgEgPgCgNIgTgEQgWgFgQAAQgPAAgNAHQgOAHgYAWQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgDAAgCgCQgCgCgBgCQgDgPgIgKIgZgaQgCgDAAgDQAAgDACgCQACgCADAAIAkgDQArAAAkgeQAogkALgBQANgDAbAPQAcARgCAIIAAABIAOgKQACgCADAAQACAAADACQACACAAADIADAYQAFAXALAbQARArAQAOQAuApAHAwIAAADIgCADIgBABIAfEIIgBAEIgDADIhBAoIgDABIgEgBIghgRIgCgCIgCgDIgZiLIgDAEIANCvQABADgCACQgjAug8AAQggAAgngNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-43.2,110.1,86.6);
p.frameBounds = [rect];


(lib.barbie_shoes_base6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF61AE").s().p("AmGEvQgdgIgbgOQgHgQgJgRIgMgVQgRgPgBgNIAAAAIgBgFQgDgUADgYQADgbAQgiQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAgBABAAQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAKBbB5gTIgBAAQA4gNAYgYQAWgXgJgiQgBgDACgCQABgDACgBQADgBADABQACABACACQAhA2ANAoIAEALIAAADIgFAOIgHA6QgMARgkAXQglAXgtACIgWABQgfAAgWgGgAleDqQgWAMgFAUQAJADAFABQAGABAeAAQAsAAAagNQAOgHALgLQgXgQgggDIgKAAQgfAAgWANgADSAGIgWgUQARAIASABQgGgug3gRQgMgEgLAAIgKABQACgQAJgRQAMgaAWgMQACgCADABQADABACADQAJAPAeAKQAcALAZAAQBDAAAnhIIAAAAIAghDQAUgpAUgXQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAlARgFBDIAAABIgOCGIgBADIgCACIgUAPQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIgEgXQhJBJgZARQgmAYhGAJQgMgIgOgOg");
	this.shape.setTransform(0,6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-24.3,99.2,61.9);
p.frameBounds = [rect];


(lib.barbie_shoes_base5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF61AE").s().p("AlBIgQgSgBgTgDQgRgDgSgFIAAAAQgUgGgUgJIgCgCIgCgDIgxjJQgEgMgCgPIAAAAQgBgWAFgrQAGgrgEg3QgBgOgJgWIAAAAQgHgRgLgUIAAAAIgIgRIgBAAIgPgeQgSgkABgIQAAgOAJgFIABgBIANgGIADgBIADAAIAGACQADABACADIANAZQB9AdB3gpIAJggIACgDIAFgCQAQgCAJAMIAAABQAGAHABAMIAAABIAAADIAAACIAAAAQgBANgFAVIAAAAIgLAjIAAAAIgJAhIAAAAIgBAFIAAACQgFAaAJAkQAKArAaAwQAbA0AAAYIgBADIABACQgBALgCAKIgfDFIgCADIgCACIgTAKQgOAGgOAEQgLAEgMACIAAAAQgVAEgWAAgAFDD1IgDgBIgCgCIhWhgIgCgBIgSgVQgLgCgHgGIgBgBQhFhLAfgxQAHgOAJgJIAGgQIgBABIABgDIAAgSQgEg/gUgqQgXgzgCgOIAAABQgDgTAIgFIgEgFIgBAAQg2g+ABgGQAAgKABgCQACgGAOgIIAFgBIADACIASAMQB9goBKhpIgIgfIAAgEIACgEQAOgMALAAQAVgCAQBMIAGAdIAEASIAIAnIAfB/QAIALApAtQAfAjAGAuIAwCxIAAADQgDAVgIAUIgDADIgDABQgPACgQAEQgDABgCgBQgDgCgBgCIgshoIgNAPIAfCBQABADgBADIgOAWIAAAAQgUAbgZARQgOAKgRAGQgOAFgQACQgLACgMAAIgHAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.6,-54.4,111.4,108.9);
p.frameBounds = [rect];


(lib.barbie_shoes_base4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF61AE").s().p("AmqHnQgCgCgBgDIgOgmIgBgBIgBgDIAAgEIgCgDIgKgmIAAgEIABgDQAdgkAlgjIAAAAIALgKQgdgHgXAAIgLAAIgEgBIgDgCIgBgEIACgwQAAgDACgCQACgCADAAIAXAAIABAAQA1AGAqAQQAzgjAygOQACgBADACQADABABADIAOAhQABADgBADQgBACgDACQgdANgdASQA+AgAkATIACADIABADIAHA6IAAABIAAAxIgBADIgCADQhGA6hOAAQg7AAhAgggAlkFtQguApgYAfIADABQAQAJAjAKQAuANAdgFQAdgFAjgJQAfgIAdghQACgCADgBIgEgBQgqgfg4gbQgXgLgUgJQgWARgVAUgAnNDYQgDgBgBgDIgMglIAAgEIACgEIADgCQAdgHAegMQgtgXglgdQgCgCgBgDIgMg3QAAgDABgCQACgDADAAQADgBADACQBUA0BLAeQA9gkBCg2QACgCADAAQADABACACQACACAAADIAAAvQAAADgCACQgdAgggAZQAeAHAbADIAEACIACADIAAAEIgKAnQgBADgCABQAAABgBAAQAAAAgBAAQgBABAAAAQgBAAgBAAQg8gCg4gQQg6AdhAAIIgBAAIgEgBgADoDPQgfgMgFgMIgBAAIgMghIAAgBIgBgDIgBgBIAAAAIAAgBQgBgDABgDQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQAEg5AjgmIgCgBIgEgDIgBgEIACgfIABgCIAEgDIAFAAQAPAEAOAHIADADIACAAIACABIgDgCQAdgRAwgYIAWgMQgbgJgjgFIgJAEIAAAAQggATgTAOQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAgBAAQgCAAgCgCQgCgBgBgDIgEgfIABgDIABgDIAFgFIgBgCIgHgnIAAgEIADgEIADgBIA0gFIABAAQARAAAQACIANgIQA+giAXgpIADgDIAFgBIAEACIACAEIAFAUIAAAAIAFAQIABADIgCADQgRAcgnAbIAZALIAVAMIgDACIACgBIABAAIACgCIAJgIQAPgNAMgPQAAgBABAAQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAIAHAJIAAAAQAHAIAHAFQACACABADQAAADgCACQgNAWgRARIgBAAQAKALAIANQANgRAPgLQACgCACAAQADAAACACQADACAAADIADAxIAAABIgBADQgZB0ANAzIAAAEIgCADIgEACIgSADIgEgBIgDgCIgBgFQgBg1gSgUQgPAcgMANIAAAAQgdAfgsAUIAAAAQgvAVgsAAIgBAAQgNAAgZgKgADICPQAIAFAOAGQAXAJALAAQAaAAAbgIQgNgsgTgbQgGgIgIgHQgoAegXAsgAFtANQgiAQgYANIAKAKQAiAlAJAsQAcgQAVgWIAAAAQALgMAOgaIAAABIASgkQgRgWgRgMQgXAMgeANgAoKhTIgCgCIgBgDIAAgwQAAgDACgCQACgCADAAQADAAACABQCWBqCYgZIAEABIAEADIABAEIgDAtQAAABAAAAQAAABAAAAQAAABgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQgrAIgoAAQh+AAhmhagAl9hlIgEgCIgCgEIAAgEIADgDQASgMABgHQAAgFgMgFQhSgEg4gwIgCgDIAAgEIANg3QAAgDACgCQADgCACABQADAAACACQA8BDBaAAIABABQAgAFAKAmIAAADQgDAegWALQgNAIgUAAQgLAAgNgDgADGiSQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgcgfIgCgDIAAgFIADgDIATgMQAlgbAggkQA6hDAWhQIACgDIAEgCIAFABIADADIAbA4IABACIAAADQgYBCgxA4QghAlgnAcIAAAAQgRAMgMAHIgEAAIgBAAgADPkRIgJgDIAAAAQgdgMADgcQABgQAFgMIAAAAQAPgcAXgiQAXgiAThIQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAIAmAZIADAEIAAAEQgUBQg4BFQADAJADABQAGgBAGgIIABAAQACgDACgEIAAgGIACgDIAEgDIAFABIADADIACAEIACACQADAEgDAVQgDATgSARIAAAAQgNAMgQAAQgIAAgKgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.6,-51.9,105.3,104);
p.frameBounds = [rect];


(lib.barbie_shoes_base3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF61AE").s().p("AkBHXQhIgYhZg7IgCgDIgBgDIgCgrQgHgNAAgNQAAgMAHgbIAHghQgPAEgPAAQgPAAgOgGIgBAAIgUgKQAAgBgBAAQAAAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBgBABAAQAAgBAAAAQAHgkAHgRIAAgBQAJgXALgMQg1gJgcgnQgQgWgLgmIAAAAIgMguIgCgBQgDgCAAgDQAAgEADgCQACgCADAAIABAAIACAAQAyAGAtAcQAVAKAPAOIgKgaQgBgCABgDQABgDADgBQACgCADABQCaArB4g+QADgBADAAQADABABACQACADgBADQgSCBAYBIQAGAMAeAwQAUAgAAAcQAAAFgCAGIAAAyQAAADgCACQhNBLhEAiIgDABIgDgBgAERCVIgDgBIgCgCIgXgkQgKgIgKgUQgMgWAAgRQAAgdAcguQAZgsAAgyQAAgagNgbIgohSIgBgEIACgEIAEgCQCSgfA4hpQACgDACgBQADgBACABQADABABACIACACQAhgjAygcQABgBAAAAQABAAABAAQAAAAABgBQAAAAABABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAFAcgBANQABBUgmA1IgNASQADANAGAMQA3ABApAhQACACAAADQABADgCACQgPAWgMAMQAQAaADAjIABAtIgBADIgCADQg2AwggArQgsA/gGAEQgbAagqAOIAAAAQgYAIgfAAQgVAAgZgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.1,-47.2,118.2,94.4);
p.frameBounds = [rect];


(lib.barbie_shoes_base2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF61AE").s().p("Ak6FwIgBAAQhLgWgvgcQg0gegDgXIAAAAQgEgWADgbQADgcAQghQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAKBbB5gTIgBAAQA4gNAYgYQAWgYgJghQgBgDACgCQABgDACgBQADgBADABQACAAACADQAmA+AMArIAAADQgIAlg4AxQg1AugVAAIgDgBgAncB9IgEgCIgCgDIgHghQgBAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQADgBACAAQCQAcBTg7QABgBAAAAQABAAAAAAQABAAAAgBQABAAABAAQACAAACACQABABAAAAQAAABABAAQAAABAAAAQAAABABAAIAHAjIAAAFIgDADQhCArhSAAQgrAAgvgMgADfBCQhAgDgPgCIgEgCIgCgDQgLgaAAgXQAAgVANgYQAMgaAWgMQACgCADABQADABACADQAJAPAeAKQAcALAZAAQBDAAAnhIIAAAAIAghDQAUgqAUgWQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAAAABABQAlARgFBDIAAABIgOCGIgBADIgCACIgUAPQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgDAAgCgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIgMhAQgxA+glAcQg4Aug+AAIgHAAgADIjpIgEgCIgCgDIgKggQgBgDABgCQABgDACgBQABAAAAgBQABAAABAAQAAAAABAAQAAAAABAAQBoASBUhnQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAAAQABgBAAAAQABAAABAAQAAABABAAQAAAAABAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABIAPAgIAAAEIgBAEQhHBehiAAQgTAAgTgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-36.9,99.2,73.8);
p.frameBounds = [rect];


(lib.barbie_shoes_base1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF61AE").s().p("AnqDdIgBgCIgIg+IAAgBIABgEIAPg9QAAgDADgBQB5hTCNA+QADABABADIAWA3IABAEIAAAFIAABMIAAACQgOA5h2AQIAAAAIgYABQhtAAgihBgAnhCfQAuBaB0gLIAAAAQBvgJAChfIAAAAQg0gPg0AAQhVAAhWAogAC7ghQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBAAIgdguQgBgCAAgDQABgDACgCQACgBADAAQADAAACACQAOAPAeAJQAmAMAZgFIAAAAQAWgGAagMQg9hfhVAtQgCABgDgBQgDgBgCgDQgBgCABgDIAWhGQABgDACgBQBhg/BoCFQAQgXATglQAfg9AWgVQACgCADAAQADAAACACQADABAAADIAHAyIAAAAIAAAEIgeCcIAAACQgHARgLAEQgLAGgOgJQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAJgmgBgTQgBgIgCgDQgvA9gWAOIAAAAQgjAVgiALQgKADgNAAQggAAgvgSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-28.6,100,57.4);
p.frameBounds = [rect];


(lib.barbie_lips8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_lips8_img();
	this.instance.setTransform(-19.9,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.9,-8.6,40,17);
p.frameBounds = [rect];


(lib.barbie_lips7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_lips7_img();
	this.instance.setTransform(-21,-10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-10.4,42,21);
p.frameBounds = [rect];


(lib.barbie_lips6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_lips6_img();
	this.instance.setTransform(-18.7,-8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18.7,-8.8,38,18);
p.frameBounds = [rect];


(lib.barbie_lips5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_lips5_img();
	this.instance.setTransform(-10.9,-9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-10.9,-9.1,22,18);
p.frameBounds = [rect];


(lib.barbie_lips4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_lips4_img();
	this.instance.setTransform(-17.6,-6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-17.6,-6.4,35,13);
p.frameBounds = [rect];


(lib.barbie_lips3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_lips3_img();
	this.instance.setTransform(-13.5,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-13.5,-9,27,18);
p.frameBounds = [rect];


(lib.barbie_lips2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_lips2_img();
	this.instance.setTransform(-13.1,-9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-13.1,-9.7,26,19);
p.frameBounds = [rect];


(lib.barbie_lips1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_lips1_img();
	this.instance.setTransform(-12.5,-4.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.5,-4.8,25,10);
p.frameBounds = [rect];


(lib.barbie_hat8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.barbie_hat_8_img();
	this.instance.setTransform(-112.5,-83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112.5,-83.5,225,167);
p.frameBounds = [rect];


(lib.barbie_hat7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_hat_7_img();
	this.instance.setTransform(-84.4,-39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-84.4,-39.5,169,79);
p.frameBounds = [rect];


(lib.barbie_hat6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_hat_6_img();
	this.instance.setTransform(-80.4,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.4,-42,161,84);
p.frameBounds = [rect];


(lib.barbie_hat5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_hat_5_img();
	this.instance.setTransform(-125.9,-112.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125.9,-112.5,252,225);
p.frameBounds = [rect];


(lib.barbie_hat4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_hat_4_img();
	this.instance.setTransform(-66.9,-33.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.9,-33.8,134,68);
p.frameBounds = [rect];


(lib.barbie_hat3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_hat_3_img();
	this.instance.setTransform(-112.5,-83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112.5,-83.5,225,167);
p.frameBounds = [rect];


(lib.barbie_hat_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_hat_2_img();
	this.instance.setTransform(-70,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-39,140,78);
p.frameBounds = [rect];


(lib.barbie_hat_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_hat_1_img();
	this.instance.setTransform(-77.1,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.1,-39,154,78);
p.frameBounds = [rect];


(lib.barbie_hair_decor12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_hair_decor12_img();
	this.instance.setTransform(-104.2,-161.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.2,-161.3,209,323);
p.frameBounds = [rect];


(lib.barbie_hair_decor11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_hair_decor11_img();
	this.instance.setTransform(-93.2,-153.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.2,-153.1,187,306);
p.frameBounds = [rect];


(lib.barbie_hair_decor10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_hair_decor10_img();
	this.instance.setTransform(-180.2,-222.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.2,-222.2,361,445);
p.frameBounds = [rect];


(lib.barbie_hair_decor9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_hair_decor9_img();
	this.instance.setTransform(-214.4,-203.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-214.4,-203.7,429,408);
p.frameBounds = [rect];


(lib.barbie_hair_decor8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_hair_decor8_img();
	this.instance.setTransform(-202.2,-182);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-202.2,-182,405,364);
p.frameBounds = [rect];


(lib.barbie_hair_decor7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_hair_decor7_img();
	this.instance.setTransform(-162.2,-223.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-162.2,-223.6,325,447);
p.frameBounds = [rect];


(lib.barbie_hair_decor6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_hair_decor6_img();
	this.instance.setTransform(-145,-108.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-108.5,290,217);
p.frameBounds = [rect];


(lib.barbie_hair_decor5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_hair_decor5_img();
	this.instance.setTransform(-101.2,-152.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.2,-152.2,203,304);
p.frameBounds = [rect];


(lib.barbie_hair_decor4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_hair_decor4_img();
	this.instance.setTransform(-89.2,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.2,-89,178,178);
p.frameBounds = [rect];


(lib.barbie_hair_decor3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_hair_decor3_img();
	this.instance.setTransform(-59.9,-97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.9,-97.5,120,195);
p.frameBounds = [rect];


(lib.barbie_hair_decor2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_hair_decor2_img();
	this.instance.setTransform(-124.2,-211.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-124.2,-211.4,248,423);
p.frameBounds = [rect];


(lib.barbie_hair_decor1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_hair_decor1_img();
	this.instance.setTransform(-100,-108.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-108.9,200,218);
p.frameBounds = [rect];


(lib.barbie_hair_base12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AASZMQjChDhei4QgQAcAAAhQABA0A9AvIAfAWQABAAAAABQABAAAAAAQABABAAAAQAAABABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIgCAEIgFABQh+AQhXgZQhxgjABheQAAggAIgyQAEgmgCgNIABAAQgJgihogBQhQAAg/gvQhCgwABg/QAAgkAVgyQATgxAAgoQAAgugkgbQgZgTg6gPQhDgUgVgNQgrgYAAgtQgBg0AtgzQAdghBBgwQBKg2ATgQQAngkAAgfQAAgtglgnQgZgbg7glQhFgqgTgRQgpglAAgnQAAg/Atg+QAagmBHhFQBFhGAbgkQAqg9AAg7QAAgqgUg0IAAgBQgMgggghJIgBAAQhBieAAi2QAAlCEvjWQAZgTAbgQIABgBQBmg+B1gmQCKgtB4AAQAbgBALACIAAAAIAAAAQAMgCAbABQB4AACLAtQB0AmBmA+IABABQAaAQAaATQEvDWAAFCQAAC2hBCeQghBJgMAgIAAABQgUA0AAAqQAAA7AqA9QAaAkBGBGQBHBFAaAmIAAAAQAtA+AAA/QAAAngqAlQgSARhFAqQg7AlgZAbQglAnAAAtQAAAfAnAkQATAQBKA2QBBAwAdAhQAsAzAAA0QAAAtgrAYQgUANhEAUQg6APgZATQgkAbAAAuQAAAoATAxQAVAyAAAkQABA/hCAwQg/AvhQAAQhoABgIAiQgCANAEAmQAIAyAAAgQAABehwAjQhXAZh+gQIgFgBIgCgEQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAABgBQAAAAABAAQAAgBABAAIAfgWQA9gvABg0QAAgqgZghIAAAAIgOgQQg4DAinBZIgEAAIgDAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.2,-161.3,208.5,322.6);
p.frameBounds = [rect];


(lib.barbie_hair_base11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AECX5IgEgDQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQANgqAAgTQAAiEhKhgQg6hLh0hAIAAABIg1gbQhXgLgXABQieADhyhOQgYgQgWgTIAAAAQhhhXg/iZQhVjQgDj6IgBABQhVELAADCQAAB6AcBNIABAFIgEAEIgEABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQgygqgihBQhDh7AAi8QAAhXAOg/QAKgpAZg+QA7iUAWijQASiEABimQAAhsgJjAQgHiQA0ieQAzicBdiBIAAgBIATgZQA5hKBBg2QAkgfAngZQCDhQCDAJID5AAQCDgJCDBQQAnAZAlAfQBAA2A5BKIATAZIAAABQBdCBAzCcQA0CegHCQQgJDAAABsQABCmASCEQAWCjA7CUQAZA+AKApQAOA/AABXQAAC8hDB7QgiBBgyAqQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAIgEgBQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQgBgCABgDQAchNAAh6QAAjChVkLIAAgBQgED6hVDQQg/CZhhBXIAAAAQgWATgXAQQhfBAh7AJIAeAkIABAAQBmBLAcA0IAAABQAVAtAAAaQAABFguBTQgfA7gnAcQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.2,-153.1,186.5,306.3);
p.frameBounds = [rect];


(lib.barbie_hair_base10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("EAZ5AiuQhJgXhUgWIgEgDIgCgDIABgFQBLipAdhxQAchvAAjrQAAkuhwjvQgshdhMhzIAAAAIiOjTQi/kehokQQiElYg9nNIgSG+IgFB4QAADwA3D9QAlCsBTD/QBhEnAXBbQA3DRAREOQANDSiKEZIgEADIgFABIgEgBQjOgnjOgfIAAAAIgCAAIgBgBIgFAAQiGgUiFgQIgBAAIgFgBIgCAAIgMgCIgBAAQifgTh3gKIgBAAQhmgIhMgCIAAAAIgngBQkOAAkKAjIgBAAQiUAUiSAeIgDABQiZAgiYAsIgEgBQgBAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQgeg7gehJQhAibgMhdQgFgmAAi2QAAi+B+kQQA8iCDLk9QDMk9Bnj2QBoj3AAjnQAAjogPjKQgKiJgDhAQgSCegHCdIgQF/QgOCzg1CRQg+CpiUDhQhABfiPC/QiFCvg8BiQjHE9AAFNQAAD1BXDQQAfBKArBDIABAFIgCAEIgEADQhaAdhRAgQgDABgDgBQgDgBgBgCQgbg7gfhmQg0irAAhDQAAlEBOkKQBAjZB9jOQA8hiCrjqQCOjBA9h8QCYkyAuk6QAPhsAHiJQAFiSAEhAQAjomBmkNQB6lCD0hVIABgBQBLgaBYgEIAAAAIAEABIABAAIACgBIASAAQB0AAA8AKQBEgKBzAAQBfAABTAbIACACIACgBQABAAAAABQABAAAAAAQABAAAAAAQABABABAAQB/ArBgBuIAAABQBWBkA7CaQBmENAjImQAEBAAFCSQAHCJAPBsQAuE6CYEyQA9B8CODBQCrDqA8BiQB9DOBADZQBOEKAAFEQAABDgzCrQguCYgnA4IgEACIgDABIgCAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.2,-222.2,360.5,444.5);
p.frameBounds = [rect];


(lib.barbie_hair_base9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AVdf1IgEgCQgYgVgZgRIABABQg9gggjgXQi4g4ivgJQgCAAgCgBQgBgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBIg3kWIhJEXQAAABAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQhWAFhTARIgCAAIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBgBAAQgCgCAAgDQhjAVhgAmQABADgBACQgBADgDABIgBABQg6AXg4AcQgDACgDgBQgDgBgBgDQgbgxgIgyQiridjMCnQgJAtgYAsQgBADgDABQgDABgDgCQg4gcg6gXIgBgBQgDgBgBgDQgBgCABgDQhggmhjgVQAAADgDACQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgBAAIgCAAQhTgRhWgFIgEgCIgCgEIhJkXIg3EWQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBABQgCABgCAAQivAJi4A4QgjAXg9AgIABgBQgZARgYAVIgEACIgEgBIgDgCQgTgbgTgYIgBgBIAAAAIgBgBQgtg4gyguQgCgBgBgDQAAgDACgCQBChngVihQgnCghnAhIgEABIgDgBQjdiOkmAkQgDAAgDgBQgCgCgBgCQgBgDACgCQALgcAPgZQArhIBdhJQByhZATgVQA6hAAAhTQAAhWgwhWQgbgvgIgVQgRgoAAgtQAAhRBChGQAtgvBig9QB0hHAYgTQA9gxABguQgBgqg2iBQg4iGAAgtQAAiKBJhSQAwg3BtgxQB6g3AfgYQBEg1gBhcQABhCgehCQgfhFABg7QAAiRBMhVQAngrB+hKQBuhAAshCQBChkgLisQgRjuDqivQBhhJB3gqQBSgdC1gVQAXgIARgCIABAAIAXAAIABAAQAjAEAjARIATgBIAIAAQADAAACACIACADQCZATAuAQQB3AqBhBJQDqCvgRDuQgLCsBCBkQAsBCBuBAQB+BKAnArQBMBVAACRQABA7gfBFQgeBCABBCQgBBcBEA1QAfAYB6A3QBtAxAwA3QBJBSAACKQAAAtg4CGQg2CBgBAqQABAuA9AxQAYATB0BHQBiA9AtAvQBCBGAABRQAAAtgRAoQgIAVgbAvQgwBWAABWQAABTA6BAQATAVByBZQBdBJArBIQAPAZALAcQACACgBADQgBACgCACQgDABgDAAQkmgkjdCOIgDABIgEgBQhnghgnigQgUChBBBnQACACAAADQgBADgCABQgyAugtA4IgBABIgBABQgTAYgTAbIgDACIgDABIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-214.4,-203.7,428.9,407.5);
p.frameBounds = [rect];


(lib.barbie_hair_base8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AP+a+IgCgDIgBgDIAKg3QhQALgsg+IgCgDIABgDIAZhSQhWh6h4gWIgEgCIgCgEIAAgFQAyh3BViMQA+hnBqicIAfguQgpguA+hfIgBgKQABg5AmgbIAAAAQAUgPAegEQgZgegVgrQgqhYgBhrQAAgdALg7IAAgBIACgJQhCgwgphNQguhVgFhuQgQgZgKgaQgag+AAhkQAAhNAEgKIABgBIAEgKQhjiYAJicIgggRQhQgtghg1IgBgBIgHgSQgjhbgMg1Qg4gYg7hgIAAAAQhSiFAAibQABi7B1hqQBhhYB/AAQBoAABLA/QBoBVAAC0QAAAhgPAxIAAAAIgHAYQAcAjASAzQAaBJAABEIgBAiQAyAjAcA/IAAAAQAdBEAABfIAAAOQBOAZAyBmQAmBPAFBHQAuAgAfA5QAoBKAAAzIAEA4IAAACQgGA7gVA6QBjC4g+CbQAWAdAMAfQARAsAABRQAACAgqBXIAEALIAAAAQANApAAAcQAAA7ggA4QgJAQgJALQAXAzAHAVQEjDNBWBIQBuBbAxBJIABAEIgBAEIgDADQgfAPgqAfQhCAygbAvQAXAuAUAuIAAAAIANAeIAAADIgBAEQhmCri1AOQgDAAgCgBQgDgCAAgDIgGgkIgGggQiyBWhvhRQgEAzgGAwIgDAQIgCAEIgEACQgkAJgjAAQhxAAhahegA0PcTIgEgCIgCgEIgDgQQgGgwgEgzQhvBRiyhWIgGAgIAAAAIgGAkQAAADgDACQgCABgDAAQi1gOhmirIgBgEIAAgDIANgeIAAAAQAUguAXguQgbgvhCgyQgqgfgfgPIgDgDIgBgEIABgEQAxhJBuhbQBWhIEjjNQAHgVAXgzQgJgLgJgQQggg4AAg7QAAgcANgpIAAAAIAEgLQgqhXAAiAQAAhRARgsQAMgfAWgdQg+ibBji4QgVg6gGg7IAAgCIAEg4QAAgzAohKQAfg5AuggQAFhHAmhPQAyhmBOgZIAAgOQAAhfAdhEIAAAAQAcg/AxgjIAAgiQAAhEAahJQASgzAcgjIgHgYIAAAAQgPgxAAghQAAi0BohVQBLg/BoAAQB/AABhBYQB1BqABC7QAACbhSCFQg7Bgg4AYQgMA1gjBbIgHASIgBABQghA1hQAtIggARQAJCchjCYIAEAKIABABQAEAKAABNQAABkgaA+QgKAagRAZQgEBuguBVQgpBNhCAwIACAJIAAABQALA7AAAdQgBBrgqBYQgVArgaAeQAfAEAUAPIAAAAQAmAbABA5IgBAKQA+BfgpAuIAfAuQBqCcA+BnQBVCMAyB3IAAAFIgCAEIgEACQh4AWhWB6IAZBSIABADIgCADQgsA+hQgLIAKA3IgBADIgCADQhaBehxAAQgjAAgkgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-202.2,-182,404.5,364.1);
p.frameBounds = [rect];


(lib.barbie_hair_base7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("EgKwAiTQhJgzAAhaQAAhYAfgqQAmg1BdAAQArAAAjAJQgNgOgRgOIAAAAQgsgjiJhGQiChCg2gxQhVhNAAhlQAAhXBCiiQAfhNAQg1QgrhbhKhOQhbhgi/hzQiqhlhNhxQhTh3gEiqQAAjjBci1QBFiICTiYIAAAAQCqikBPhWQCHiTA6iMQAqhjAcj8QAbj0AshVQBfi6BOg/QBLg9B/gEQAshiB+g3IAAAAQBtgvB4AAQB0AABLAyIgBAAQBKAvBOB7QENAICCEUQCVE+gqKaQgGBeAgBFQAaA5A9A4QAQAPBtBWIAAAAQBWBDA2A8QCkC2BSB+QBqCnAAB6QABESlOEGIAAAAQhTBAiQBjQhjBHgBAeQAAAZAQAWIgBAAIAmApQA5A7AABYQAABBhABMQgiAnhoBeQhhBWgoA0QggAqgPAnQAqgVA+AAQBOAAA0A1QA0A1AABSQAABVhUAqQg/AehaAAQhtAAhXhKQg4AkhJAMQhMAMgvgIQgvgIgzgnQgvgkggg8IgVAXIAAAAQiECOilAAQgqAAg2gYQgUgJgPgJQhXBIh6AAQhQAAg8gpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-162.2,-223.6,324.5,447.4);
p.frameBounds = [rect];


(lib.barbie_hair_base6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("ABNQiQglgUgoglQgmAlgmAUQg0Abg9AAQg+AAgxgaQgagOgSgUQgMAJgKAGIAAAAQgeAQgqAAQhMAAg3gdQgtgXgbgnQgLAQgWAKIAAAAQgWAJgagBQgDAAgCgCQgCgCAAgDQAAgDACgDIACgCIAAgBQAMgQABgMQAAgMgLgeQgSAEgTAAQg5AAgsgoIAAAAQgQgOgJgQQgPAUgXAMIAAAAQgcAOgoAAQg6AAgqgkIAAAAQgpgjgCgvQgmgNgYgfQgTgagGghQgngIgagvQgcgxAAg1IAAgEQgggagWgpIABAAQgXgqgEgpQgYgSgMgXQgRgfAAg6QAAhVBDgrQA4gkBgAAQAHAAAtAGIABAAQgGgPAAgJQAAgcAXgvQAKgVAKgOIAEgCIAEAAIAEACIABAEQABAVAOAPIAAAAQAOAPAQAAQAHgBAJgSQALgUAAgLQgBgNgQgnQgSgqAAgZQAAgQAFgOQgegEgVgpQgSgkAAgfQAAgrARgiQAGgMAHgMQABAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABAAQAAABAAABQABAAAAABQAAAAAAABQAAAAAAABQACAhATASQARAPAYAAQBBgBA3htIAAAAQBFiiAwhcQBYinB4hYQChh1DwAAQBjAAAaAGIAAgBQAmAHAmAUQAngUAngHIAAABQAagGBiAAQDxAACgB1QB4BYBYCnQAxBcBECiIAAAAQA4BtBAABQAYAAARgPQAUgSABghQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAgBQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAAAAAQABABAAAAQABABAAAAQAIAMAGAMQAQAiAAArQAAAfgSAkIAAAAQgVApgdAEQAEAOAAAQQAAAZgSAqQgQAnAAANQAAALAKAUQAKASAHABQAPAAAOgPIAAAAQAOgPABgVIACgEIADgCIAFAAIAEACQAKAOAJAVIAAAAQAXAvAAAcQAAAJgGAPIACAAQAsgGAHAAQBgAAA4AkQBDArAABVQAAA6gQAfIAAAAQgNAXgYASQgEApgWAqIAAAAQgWApggAaIAAAEQAAA1gbAxQgbAvgmAIQgHAhgTAaQgXAfgmANQgCAvgpAjIAAAAQgqAkg7AAQgnAAgdgOIAAAAQgXgMgOgUQgKAQgQAOIAAAAQgsAog5AAQgTAAgRgEQgLAeAAAMQAAAMAMAQIABABIABACQADADAAADQAAADgCACQgCACgDAAQgbABgWgJIAAAAQgVgKgMgQQgaAnguAXQg3AdhLAAQgrAAgdgQIgBAAQgJgGgNgJQgRAUgbAOQgwAag+AAQg+AAg0gbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-108.5,290,217.1);
p.frameBounds = [rect];


(lib.barbie_hair_base5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("Ag9XwQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAAAQgahRg2hAQg2hAiWhqQiRhog5hNQhMhmgNiKQgmBzAAA/QAACiBZBIIADAEIgBAFQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQjfgahsiNQhXhxAAieQAAidA3h/QAlhUBUhxQBch7Acg2QA2hoAAh3QAAg+gei/QgejBAAhPQAAlvB4jJQCkkTGEAAQALAAAZAFQApgRAYgHQBFgUBAAAQEeAADIDeQBaBlAyCAQAzCDAACHQAABRgRBBQgJAggdBIQg3CGAAChQAACyAoCNQAaBdA/CEQBECNAWBFQApCAAACWQAAC0hcCQQhhCZjGB2IgFABIgDgBQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQANgvAAgzQAAg7gfiRQgMg3gMgsQgRA0gWA6QhGC6hEBGIgDADQgEAAgBgBQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIACgIIAAAAQACgMAAg5QAAg8grh7QgPBsgqBPQglBDhkCCIgFADQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgaQAAhDhDjTQgMBxhAClQgVA0gXA0IgDADIgEABIgEgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.2,-152.2,202.5,304.4);
p.frameBounds = [rect];


(lib.barbie_hair_base4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("ACdM0IgCgBIgCABQhDAig9ABQhQAAgygZQgXgMgPgQIgBgCIgBABQhDArhlABQiSAAhBhNIgDgEIgDACQgiAIgiAAQicAAhLhmQg9hTgBiJQABhRAthJQA4hZBbAAQATAAAbANIgBgFQg6kMAAivQAAlfENivQAlgYAngUIAEgBIABgBQABgCADAAIACAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQCNhECvgOIAEABQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAIADABQAAAAABgBQAAAAABAAQAAAAABAAQAAgBABAAQAmgDAqAAIAFAAIAFABIADgBQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAIAEgBQB2ACBhAfIADACIADgBQACABACACIABAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQCMAwBfBrIgBAAQCdCwgBEoQABAhhLEaIgiCCQAYgGAdAAQBmgBBIBTQBHBSAAB0QABBRhcBbQhhBeh2AIIAFAAIgGABQgiApgpAcQhLAzhPAAQh+gBhIhFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.2,-89,178.4,178);
p.frameBounds = [rect];


(lib.barbie_hair_base3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AjfOEQikhKgngxQgogwgohDQg2hZgDgtQgEgvgRhcIABAAQgPhPAAgmQAAjmBoiwQAZgtAthIIABAAQAeg5AAgwQAAgngghhQghhkgKglQgLgnAHg1QAIg1AuhDIgBAAQAGgJAHgJQAng9BSgcIAAAAQBMgZCEAAQB+AACABLQB1BFBjB7QBfB3A2CNQA5CSAACGQAACMhZB3Qg7BRiHBsQhtBYg0AvQBIgcBIAAQBkAAA1AwQA0AtAABVQABA4gtBIQgqBFhHA/QilCTijAAQhMAAimhKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.9,-97.5,119.9,195);
p.frameBounds = [rect];


(lib.barbie_hair_base2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("EgF3AhBQgigJgZgQIAAAAQg4gigKhNQgIg7Acg4Qh0hOgQhzQgEgjAHgRIABgBQAFgLAfgmQACgCADgBIACAAQhXhJABheQABhhACgMQADgZAVgbQgMgRgLgUIAAAAQgUglgEgXIgCAEQgPAZgSAPIABAFQAFAWAAAMQAAApgaAtQAUAVALAOQAZAkADA5QAFA5hTBDQhSBCh/gDQgogBgjgJQgFBsASASQAmgOAtAAQA6AAA9AfQBLAngBA5QAAAyg4ASQgfAKg9AAQhOAAhHgjQgXAzAABCQAAApALAfQABADgBACQgCADgCABQgDABgDgBQghgNgWgSQgzgqAAhNIAAgBQAAg7Ajg0QhqhdABh0QAAgjAJgQIABAAQAHgLAjghQACgCADAAIACAAQhMhUANhdQAOhgADgLQAHgaAYgXQgLgTgIgUQgPgqAAgYQAAgsAFgGQAFgHASgIQgSgmAAgqQAAgpAcg3IAAAAQAOgdARgWQgPgbgKgWQgLgZgDgrIgBgNIAAAAQgBglAJgkQAHgkAFgMQgnhFAAhJQAAhKAvgnIAAAAQAYgWAtgPQglgWgagmQg1hJAAhVQAAhsA6hFQAngvBXgtQBjgzAYgTQA1gtAAhDIAAgFQgDgygshmIAAAAQgwhuAAhfQAAhZAyh9QAxh6BQhzQBWh6BehKQBPg+BJgUQgngVgZggQhdhxABhaQAAhxBchYQBchXB2AAQA1AAAjASIANgLQBRhDCNAAQB/AABPA9QBQA9A8CPQBkDuAdAxQA0BeCKCYQAxA1BiBSICYB8IAAAAQBPBFBKB8QBfCgAACFQAAA7gcAvIAAgBQgaAshYBbIAAAAQgUAUhrBWQBGAnAiApQA6BFAABsQAABVg1BJQgbAmgkAWQAtAPAYAWIAAAAQAvAnAABKQAABJgnBFQAFAMAHAkQAIAkgBAlIAAAAIAAANQgDArgLAZQgKAWgPAbQAQAWAPAdIAAAAQAcA3AAApQAAAqgSAmQASAIAEAHQAGAGAAAsQAAAYgQAqQgIAUgKATQAYAXAHAaQADALANBgQAOBdhNBUIACAAQADAAACACQAkAhAHALIAAAAQAKAQAAAjQAAB0hpBdQAjA0AAA7QAABOgzAqQgXASggANQgDABgDgBQgDgBgBgDQgBgCABgDQALgfAAgpQAAhCgYgzQhHAjhOAAQg9AAgegKQg5gSABgyQgBg5BLgnQA8gfA6AAQAtAAAnAOQARgSgEhsQgkAJgnABQh/ADhShCQhThDAEg5QAEg5AZgkQAKgOAVgVQgagtAAgpIAAAAQAAgNAFgVIABgFQgTgPgOgZIAAAAQgXgqAAgxQAAg5AYgZIAAAAQAGgGAPgJQgegigFgrIAAAAIAAgQQAAgcAPghQg1gegfgKIABAAIgKgDIgLASQAQAXAOAeQAZA4gBApQgBApgTAmQARAIAFAHQAFAHgCAsQAAAYgRApQgJAUgLASQAXAYAHAaIAAAAQACAMALBgQAKBehPBRIACAAQADAAACACQAjAiAGAMQAKAQgCAjQgDB0hsBZQAhA1gCA8QgCBNg1AoQgXASghAMQgDABgCgBQgDgCgBgDQgBgCABgDQAMgeABgpQAChCgVg0QhJAhhOgCQg9gCgegLQg4gUACgyQABg5BNgkQA8geA7ACQAtABAmAQQASgRgBhsQgkAHgnAAQh/gBhQhEIAAAAQhPhGAGg5QAGg5AYgjQAKgPAWgTQgZguABgpQABgNAGgWIABgEQgTgQgLgZQgWgqACgxQABg6AYgYIAAAAQAGgGAPgIQgbgjgDgqIAAgQQABgdAOghQgzgfgdgLIAAAAIgDgBIgNAGIAAAAQgdAOgxAlQAUAeAEAdIAAAAIABAPIAAABQABArgZAlQAPAHAHAFIABAAQAaAWAIA5QAHAxgSArQgLAbgQASIABAFIAAgBQAIAWACAMQAFAogUAwQAXASAMANIAAAAQAeAhALA3QAMA4hKBOQhJBMh+AOQgnAEgkgEQAJBrAUAQQAkgTAtgGQA5gIBAAXQBQAdAHA5QAGAxg1AZIAAAAQgdANg9AJQhNAKhLgZQgRA1AJBCQAGApAPAdQABADgBACQgBADgCACIgEABIgCAAgAkCcJQgcAEgVAMQAhAVAZgDIAAAAQALgCAHgFIAAABQAGgGAJgCQACgSgLgEIgFAAQgKAAgSACgAMPchQAIABAIAFQAHAEALAAQAagBAegZQgXgJgcAAQgbAAgGACIAAAAQgKAGAEARgAu6cRQAfAZAZABQALAAAIgEQAHgFAJgBQAEgRgKgGIAAAAQgHgCgbAAIAAAAQgbAAgYAJgADHcQQAaAAAfgYQgXgKgbgBQgagBgIACQgKAGADARQAJACAHAEIAAAAQAHAEALABgAmJWXIAAAAIAQAGIAOAFIADgCQAlgiAPgvIAAgBIgFABQhVAHhFgUQAKA6BAAbgAN/WPIANgIQA8gjACg7QhAAchRAFIAAADQAAAgAbARIgBAAQASAMAaAFgAvcWHIAMAIQAagFASgMIAAAAQAbgRAAggIAAgDQhSgFg/gcQACA7A8AjgAEiV2IANgHIAAAAQA9ghAEg7QhAAahSACIAAAEIAAAAQgBAfAaATIAAgBQASANAZAFgAq3O7IAOAJQABgRAEgTQgIAOgLANgAqjMhQAPAhAAAcIgBAQIAAAAIAAACQAJgYALgSIgcgoIgGADgArRBJQAIA3AoAwQA0BABSgFQhDg1gjg5QgshJAAhWQAAgQACgQIgNATIAAAAQghA2AIBCgAPAhUQAAC/iDBZIAQAGQAaAJAJAAQBdAAAwhMQAig2AAg3QAAhAgpgzQgVgbglgaQAEAdAAAdgAxGhZQgpAzAABAQAAA3AiA2QAwBMBdAAQAJAAAagJIAPgGQiChZAAi/QAAgdAEgdQglAagVAbgAGThpQgCA+gPAxQghBqhaA6IAQAGQAaAKAIABIABAAQBcADAzhLQAUgfAKgfIAAAAQAGgWABgXQAChAgng1QgUgbgkgcQADAdgBAeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-124.2,-211.3,248.5,422.7);
p.frameBounds = [rect];


(lib.barbie_hair_base1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("ABYQxQglgPgcgeIgGgGIAAAAIgRgWIgQAWIAAAAIgGAGQgcAeglAPQgmAQgvAAQg4AAg3gkIgJgHQgigZgQgYIgDACQhPBGhQAAQg6AAgfgZQgMgJgbgkQgMASgSAPQgwAqhAAAQg7AAgsg4QgVgaAAgmQAAgRAEgUQAGgbAOgfIAAgDIAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQACgBADACIADADQACAEgBAFQADAbAbAaQAgAdAhABQAGAAAHgDIgXghQhIhjgTgcQiHjFABhdQAAgeA9kWIAhiWQBfmlAahMQBckHC6icIABgBQA9gzBGgoQCphfC3gQIAXgCIAAABIAWABQC3AQCpBfQBGAoA9AzIABABQC6CcBcEHQAaBMBfGlIAhCWQA9EWAAAeQABBdiHDFQgTAchIBjIgXAhQAHADAGAAQAhgBAggdQAbgaADgbQgBgFACgEIADgDQADgCACABQABAAAAABQABAAABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAIAAABIAAADQAOAfAGAbQAEAUAAARQAAAmgVAaQgsA4g7AAQhAAAgwgqQgSgPgMgSQgbAkgMAJQgfAZg6AAQhQAAhPhGIgDgCQgQAYgiAZIgJAHQg3Akg4AAQgvAAgmgQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-108.9,200.1,217.9);
p.frameBounds = [rect];


(lib.barbie_glasses4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_glasses4_img();
	this.instance.setTransform(-71.8,-22.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.8,-22.3,144,45);
p.frameBounds = [rect];


(lib.barbie_glasses3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_glasses3_img();
	this.instance.setTransform(-73.2,-27.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.2,-27.1,147,54);
p.frameBounds = [rect];


(lib.barbie_glasses2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_glasses2_img();
	this.instance.setTransform(-60.6,-28.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.6,-28.1,121,56);
p.frameBounds = [rect];


(lib.barbie_glasses1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.barbie_glasses1_img();
	this.instance.setTransform(-70.1,-19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.1,-19.9,140,40);
p.frameBounds = [rect];


(lib.barbie_fringe_decor12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_fringe_decor12_img();
	this.instance.setTransform(-101.2,-146.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.2,-146.3,203,293);
p.frameBounds = [rect];


(lib.barbie_fringe_decor11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_fringe_decor11_img();
	this.instance.setTransform(-90.7,-132.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.7,-132.7,182,266);
p.frameBounds = [rect];


(lib.barbie_fringe_decor10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_fringe_decor10_img();
	this.instance.setTransform(-72.2,-57.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.2,-57.2,145,114);
p.frameBounds = [rect];


(lib.barbie_fringe_decor9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_fringe_decor9_img();
	this.instance.setTransform(-94.2,-114);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.2,-114,188,228);
p.frameBounds = [rect];


(lib.barbie_fringe_decor8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_fringe_decor8_img();
	this.instance.setTransform(-106,-67.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106,-67.2,212,135);
p.frameBounds = [rect];


(lib.barbie_fringe_decor7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_fringe_decor7_img();
	this.instance.setTransform(-71.4,-53.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.4,-53.7,143,108);
p.frameBounds = [rect];


(lib.barbie_fringe_decor6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_fringe_decor6_img();
	this.instance.setTransform(-92,-77.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-77.7,184,155);
p.frameBounds = [rect];


(lib.barbie_fringe_decor5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_fringe_decor5_img();
	this.instance.setTransform(-89,-125.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89,-125.7,178,252);
p.frameBounds = [rect];


(lib.barbie_fringe_decor4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_fringe_decor4_img();
	this.instance.setTransform(-86.6,-109.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.6,-109.7,173,220);
p.frameBounds = [rect];


(lib.barbie_fringe_decor3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_fringe_decor3_img();
	this.instance.setTransform(-74.8,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.8,-56,150,112);
p.frameBounds = [rect];


(lib.barbie_fringe_decor2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_fringe_decor2_img();
	this.instance.setTransform(-86.2,-118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.2,-118,173,236);
p.frameBounds = [rect];


(lib.barbie_fringe_decor1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_fringe_decor1_img();
	this.instance.setTransform(-111.2,-114.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.2,-114.2,222,229);
p.frameBounds = [rect];


(lib.barbie_fringe_base12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AsXW3QgDAAgCgCQg5gxgJgbIAAAAQgJgbAAgkQAAggAOgjIADgDIAAAAIgEgDQg/hPAZhFQgkgNgkg2QgrhAAAg7QAAh6AvgpQAdgbBIABQBFABAXgOIAAAAQAHgEAGgGIAAgBIgDgDIgBgDIgDAAQgDAAgCgCQgtgxgYg0QgghJAAhGQAAgxARgtIACgDIAAgEIABgBIgBAAQgCgCgBgDIgLglQgUhMAAgWQAAhKAwhFQAcgoBMhHIAAABIAKgJIADgBIACgEIAAAAQgCgCAAgEIAAgPQAAgXgRjoQgSjoAAgXQAAmjC2jfQCtjVDlgLQDhgLCbApQCWAoBFA+IACACIADgDQADgBADACQBqAyAwAoQA+AzAlBUQAlBUAdCeQARBbAWCgIByEKQAlBXAAA6QAAA9gkA4IgCADIAAABIACADQAVAtALA4QAOBEAABIQAABGgcBHIgBACIACABQAkAYAVApIAAAAQAZAvAAA0QAABeg5BPIAAAAQgaAkg1AwIgDACIgCADIgCACIABABQACACgBADQgDAQADASQADAYA4BEQA9BKgMBBIAAAAQgNBCgjARQggAQgbAeQgYAdA1BkQACADgBACQgBADgCACQgDABgDAAQiigrhDhcIgBgBQg4hrArhSIABgBIgBAAQh+hgBGh3IBOiGIACgDIAAgBQAAgDADgCIABgBQgCgCAAgDIAEgTIADgTIACgUQgBhJghg3Qgfg3gGgzIAAgEIgBgDQgDAAgCgCIgmgaQhNgzgXgZQgwgxAAg+QAAgmAsg5IABgBIBehvQCHicABh4QAAgcgPgwQgYhLAGgiQgWg4gTg/IAAgBQgSg/gRheQgPhbgXgnQgWgmgpgjQgngihtAQIgBAAIgCAAIgDgCQgtgqh6ATQiBAVh+gcQh9gbh7BkQh5BihFDZQgBADgCACIgDAAIABAJIgBAEIACAEQAAAigCAZIgDAfQAACFApBbQAcA+A+BAQBMBQAPAXQArBAAABVQAABphOBZQgMANgQAPIgBABQACACAAADQABAdAUAjQAMATAmAyQBLBhgBA/QAABegyBKQguBEhmBIQgiAZhEAUQAKAjAAAsQAABlg2A2IgDABIACADQAPAmAAArQAABgglAyQgZAjg3AVQhBAZgLAIQgYASgFAhQgBACgCACQgCACgDAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.2,-146.3,202.5,292.7);
p.frameBounds = [rect];


(lib.barbie_fringe_base11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AuDUuQgBgBAAAAQAAgBgBAAQAAAAAAgBQgBgBAAAAIgCgLIAAAAQgCgJAAglQAAhiA5hmQATgjBniRQBTh1AmhdQA3iHAAibIAAAAIgMkiIgHiKQhMlEAAkKQAAmJC7iUQC5iVDPgDQDKgDBrAfQBpAgBFBAQAagJAhAAQDoAABVEAQA8C2AAGkQAAAPgMDJQgNDGgHClQgHClBeEPIAAAFIgDADIgEACIgEgBQhRgvg2hcQheicAAkIQAAhWAgjjIABgEIAAAAQgBgDABgDIAAAAQgDgBgBgDIgKgcQgchIAEgsQADgmgng2Qgtg9ABgLQAAgNAQglQAOgiAAgOQAAgrgnghQgdgYhBgfQhSgngXgOIAAgBQgqgagTgeIgCABQiCAZh1g0QhvgyiFAdQiFAehXBpQhWBrAAEXQAAAmAMC0QALCmgDAPQgIA2ATBNQASBLAlBHQA2BnA9AnIADAEIAAAEIgCAEIgEACQgRADgSAAQgpAAgggPQACBYAsA+QAMASAQAPQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAADgBACQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgDABgCgBQgygNgjgeQAIBOA6A0IAUARQAAAAAAAAQABABAAAAQABABAAAAQAAABAAABQABACgBADQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgdgFgZgNQADBDgSBEQgZBagyAxIAAAAQgyAwg8AcQggAPhAASIgXAHIg0AjQgSALgQANQgnAhgZArIAAABQgUAggIAeIgCAHQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.7,-132.7,181.5,265.6);
p.frameBounds = [rect];


(lib.barbie_fringe_base10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AJvI7QgDgBgCgCQgCgCABgDQAkj1iohxIgBgBIAAABQgYAegZAYIgDACIgEAAIg0gOIgDgCIgBAAQgDABgDgCIgBgBIgDAAIgqgKQgmgIgogGIgEgCIAAAAQgDABgDgBIgBgBIgEAAIgmgEIgEgCIAAAAQgDABgDgBIgBAAIgEAAQhTgJhXAAIgHAAIgDgBIgDABQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgEABIglABIgEgBIgBAAQgDABgCgBIgBAAIgEABQgyACgxAFIgEAAIgEABIgEgBIgFACQgqAFgoAHQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBABAAAAQgBAAAAAAQAAAAgBABQAAAAgBAAIgEgBQgCACgDABQgjAFghAIIg3AOQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQg6gWgugeIgCgCIgBACQhyBcAMDqQAAADgCACQgBACgDABQgDABgCgCQgDgBgBgDQiFmEBLj0IAIgaQAyioBthlQACgCADAAIAAgBQABgEACgBQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABgBQAAgBAAAAQAAAAABgBQAAAAABAAQAqgkAxgbQAegQAhgOIAEAAIADgCQACgCADABQAAgBABAAQAAgBAAAAQABAAAAAAQABgBAAAAQB9gxCegKIAEABQACgCAEABIABAAQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAmgCAmAAIAEABQADgCADABIACABIADgBIAEAAIABAAQB7AJBkAeIADABIAAAAQADAAADACIABABQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAQAwAQArAVIACACQADgBADADIABACQADgBACACQBuA4BDBeQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABIADACQACACgBADIAAACIABAAQADABACACQAUAfARAkIAAAEIABABQACACAAADIAAACIACAAQACABACACQC8D9i3IjIgBABQgBADgCABIgEABIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.2,-57.2,144.5,114.4);
p.frameBounds = [rect];


(lib.barbie_fringe_base9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AH2RzQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAgBQAfg5AAhIQgBhJgkhNQgnhQAAg5QAAhVBIhlQAlg0AKgUQAVgoABglQgBgjglgrIgBAAQgMgNhKhHQg9g4gcgrQgqg/AAhAQAAglANgyQAMgwAAgeQAAiaisgYQh4gSg5AtQgCACgDAAQAAADgCABQgDADgCgBQgCAAgCgCIgCgEQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQg5gth5ASQisAYAACaQAAAeAMAwQANAyAAAlQAABAgqA/QgcArg9A4QhKBHgMANIgBAAQglArgBAjQABAlAVAoQAKAUAlA0QBIBlAABVQAAA5gnBQQgkBNgBBJQAABIAfA5QAAABABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAABgBAAQAAgBgBAAQgBAAAAAAQgBAAAAgBIgTgLIAAAAQh/hOABhXQgBg4AshNQAphJAAgTQAAgqhOh2QhSh7AAhBQAAhBAkhNIACgDIABgCQgDgBgBgDQgUgsgTiKQgViUAAhjQABiCAzhsQiHgyg4hgQgdgwgMhDQAAgDABgCIACgCIgFgHQgCgCABgDIAAgCIgBgEQgGgoAAguIAAgLQABgDACgCIABgBIgCgDQgBgCAAgDIABgDIgBgEQAFgwARgqQABgDACgBQAAgBAAAAQgBgBAAAAQABgBAAgBQAAAAAAgBIACgEIABgDQAcg9A4gvQA8gyBOgXIAEAAIAEgCIAFABQABgDADAAQAlgJApgEIADABIADgBQADgBACACIADACIABgBQACgCADgBIAbgBQCWABBRB2QA+BZgBBkQABAjgHAbQA9gQAwgEQBOgGAgAIQAZAGASAHIAAAAIACAAIgBAAIAFgCIABAAQAQgGAVgFQAggIBOAGQAwAEA9AQQgHgbABgjQgBhkA+hZQBRh2CWgBIAbABQADABACACIABABIADgCQACgCADABIADABIADgBQApAEAlAJQADAAABADIAFgBQAAAAABAAQAAABABAAQAAAAABAAQAAABABAAIAEAAQBOAXA8AyQA4AvAcA9IABADIACAEIAAAFQADABABADQAQAqAFAwIgBAEIABADQAAADgBACIgCADIABABQACACABADIAAALQAAAugGAoIgBAEIAAACQABADgCACIgFAHIACACQACACgBADQgMBDgdAwQg4BgiHAyQAzBsABCCQAABjgVCUQgTCKgUAsQgBADgCABIAAACIACADQAkBOAABAQAABBhSB7QhOB2AAAqQAAATApBJQAsBNgBA4QABBXh/BOIAAAAIgTALIgEACIAAgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.2,-114,188.4,228);
p.frameBounds = [rect];


(lib.barbie_fringe_base8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AJzKgQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAohMAOgrQAUg4gLgVIgKgSIgRAWQgxBBgEAIQgBADgCABQgDABgDAAQgCgBgCgCQgCgCABgDQAblnh1iwQh0iskDAHIAAAAIgcABIgEgBIgDgDIgBgCQgcAFgTAGIgCAAIgZADIgGAAIgEAAIgEgDIgBgEIAAgIIAAAIQAAADgBACQgCADgEgBIgGAAIgBAAIgZgDIgCAAQgTgGgcgFIgBACIgDADIgEABIgcgBIAAAAQkDgHh0CsQh1CwAbFnQABADgCACQgCACgCABQgDAAgDgBQgCgBgBgDQgEgIgxhBIgRgWIgKASQgLAVAUA4QAOArAoBMQAAABAAAAQAAABABAAQAAABAAAAQAAABgBABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQiShSgdgYIAAgBQgbgYhAhEQhAhEgphQQgqhQABhIQgBhJAagkIAAAAQAFgIAIgHQgQgngNgmQgZhTAAhAQAAhPAvhHQAhgxAlgXIAEgCQADg4AbguQAphFBKAAQAHAAAJADIAAAAIABAAQALggAYgXQAwgwBcAAQAfAAAIACIAAgBQAJACAJAEQAcgHAgAAQBSAAAvAaQAfARAUAdQCEgSCsAhQCtghCEASQAUgdAfgRQAvgaBSAAQAgAAAcAGQAJgDAJgCIAAABQAIgCAfAAQBcAAAwAwQAYAWAMAhQAJgDAHAAQBKAAApBFQAbAuADA4IAEACQAlAXAhAxQAvBHAABPQAABAgZBTQgNAmgQAnQAIAHAFAIIAAAAQAaAkgBBJQABBIgqBQQgpBQhABEQhABEgbAYIAAABQgdAYiSBSIgEABIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106,-67.2,212,134.5);
p.frameBounds = [rect];


(lib.barbie_fringe_base7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AJ6IZQgDAAgCgCQg/hDAQhfQg9gqAUg7QhAgzgKg7QgQABgTgDIAAAAQg1gLgugtQgigjgOgnQgQAjgvAQQgzASg9gNQgFAegdAbIAAAAQgkAigkAAIgBAAQgEARAAASQAAAbAUAUIACACIABADIAAAHQAAAEgCACIgDADQgCACgDAAQgpAAgZgcIAAABQgWgYAAggQAAgVADgIIAAAAIABgDIgPgGQgygUABgqQAAgKACgLIgRAFQhBARg3gTQgzgSgPgnQgOAlghAhQgtAtg2ALQgqAIgcgRQgIAjgdAnQAhBOgrA6QAcBMg3BbQgBADgDABQgDABgDgCQgDgBgBgDQi2poEUkBQADgKAHgLQAYgrA0geQAzgeAyAAIAUACQBLgcBcgPQAigFAkgEQAkgEAmgCIABAAQA5ADA3AHIACABQAwgPA6APQArALAeAYQA8ARAzAYIADACIABADIAJAAQApAFApAYQA0AeAZArIAFAKQENEJi0JXQgBACgCACIgEABIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.4,-53.7,142.9,107.5);
p.frameBounds = [rect];


(lib.barbie_fringe_base6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AIvMIQgZgGgNgTIAAAAQgQgWgBgnQAAguArgjQAlgfABgcQgBgZgigaQgpggABglQgBgeA3g/QAxg5ABgSQAAgJgCgEIAAAAIgEgGQgNACgMAAIgFgBIgDgEIAAgEIACgEQAfgdASgdIAAAAIACgDQgcAJgKAAIgIAAIgEgCIgDgDIAAgFIACgDIAGgEIAAgBQAcgVAZggIAIgLQg5AbgYgEIgIADQgDABgDgBQgDgBgBgDQgBgDABgDQACgDACgBIAKgEIAAAAIABAAQAlgVAXgyIAAAAIAKgaQgKAIgMAIQgqAagtAEQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAWgOARgdQgVACgUAAQhmAAg4gzQgmgjgfhPIgOgjQiGhLiFBTIgBAAIgCACIgCABQgBABgCAAQgDgBgCgCIgBgEQiEhPiEBKIgOAjQgfBPgmAjQg4AzhmAAQgUAAgVgCQARAdAWAOQAAAAABABQAAAAAAABQABAAAAABQAAAAABABQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBABQAAAAAAABQgBAAgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgtgEgqgaQgMgIgKgIIAKAaIAAAAQAXAyAlAVIABAAIAAAAIAAAAIAKAEQACABACADQABADgBADQgBADgDABQgDABgDgBIgIgDQgYAEg5gbIAIALQAZAhAdAVIABABIADACQAAAAABABQAAAAABAAQAAABAAAAQABABAAABQAAAAAAABQABAAAAABQAAABgBAAQAAABAAAAQAAABAAAAQAAABgBABQAAAAgBAAQAAABAAAAQgBABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgIAAQgKAAgcgJIACADIAAAAQASAdAfAdIACAEIgBAEIgCAEIgFABIgUgBIgFgBIgCAAQAAADgCACIAAABIAAAAQgCAEAAAJQABASAxA5QA3A/gBAeQABAlgpAgQgiAagBAZQABAcAlAfQArAjAAAuQgBAngQAWIAAAAQgNATgZAGQgDABgDgCQgCgBgBgDQgBgCABgDQADgIAAgGQAAgrg4gjQgggVgLgMQgUgWAAggQgBghAbgqQAXglAAgNQAAgXgPgTIAAAAQgHgJgegbIAAABQg6gzAAhDQAAgZALgfIAAAAIAGgMIAAgBIgBAAQgmgaglgpQhziAAAi1QAAgaAGgfQABgDADgCIACgBIgBgPIABgEIgCgEIAAgqQgBhwAfg+QAqhXBwgyQADgBADABIABABIAEgFIADgCIABgEIARgTIAAAAQBZhiBeABQANAAAmAJIAEABIArAKIABAAQCqhZDwA/IAAAAQDxg/CqBZIABAAIArgKIAEgBQAmgJANAAQBegBBZBiIAAAAIARATIABAEIADACIAEAFIABgBQADgBADABQBwAyAqBXQAfA+gBBwIAAAqIgCAEIABAEIgBAPIADABQADACAAADQAGAfAAAaQAAC1hzCAQglApgnAaIAGANIAAAAQALAfAAAZQAABDg6AzIAAgBQgeAbgHAJIAAAAQgPATAAAXQAAANAXAlQAbAqgBAhQAAAggUAWQgLAMggAVQg4AjAAArQAAAGADAIQABADgBACQgBADgCABIgEABIgCAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-77.7,184,155.4);
p.frameBounds = [rect];


(lib.barbie_fringe_base5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AqvTpQh+gYgiggQgkggAAhAQAAhmBAhAIArgrIAAgBQARgYABgdQgBg8g+gzQgkgegJgJQgXgaAAgdQAAgxAmgsIAAAAQAYgcA4gpQA9gsASgSQAhghABghQgBgaghhNIAAAAQgwhrgchDQhvkKAAjIQABisA2icQA3icBmh2QDfkCFcAAQBbAAA0AVQBMAcAcAmQAYgZAogCIAAAAQAugCAnAOQAnAOBCAoQBFAqA5BNQCIC2ACEZQACCfgBD3QAICrA2A3QAnAmBDA7IAAABQAzA5ABBTQgBBOgnA9QgaAog8AxQhCA3gRAUQgkAsAAAzQAAArAgAkQAmAngBBDQABAggZAiQgWAeglAYQgCACgDAAQgDgBgCgCQgCgCABgDQgBgqgigKQgQgEhHABQhAABgegTIAAAAQgPgJgKgOQgSgFgNgHIAAAAQgcgSAAgmQgBgSANgvQAMgsAAgTQAAgrg+gVIAAAAQgmgNgKgGIAAAAQgZgPAAgbQAAghAmgmIAAgBIBNhEQBuhlAAh8QAAhlgGjdIgOlrQgHjIgzhpQhAiFiOAAQgWAAgmAKQgCABgDgCIgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgsgOg1gXIAAAAQg1gWhgAEQhhAChZAnQhZAnhKBhQhHBdgpBuQgpBuAABkQAABTAjCMIA7DiIAAAAQALAvAWA5QAUA2AVAoIAAAAQAYAqAlAxIAAAAQAZApABAxQAAAggsA7QgpA0gBAMQABAEAfBDQAiBJAAA7QAABFgtA0QgcAghEAuQhFAugjApQgfAnAeBNQABACgBADQAAADgDABIgDABIgCAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89,-125.7,178,251.5);
p.frameBounds = [rect];


(lib.barbie_fringe_base4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AnNRIQiYhUgghzQgdhhA5iiIgBgCIAAgBQhQiEgWhSIgFgXIAAgEIgCgEIgBgHIgDAAQgDgBgBgCQg0hJgZhJQgXhDAAgrQAAg/ANg0IACgEIgBgEIAEgKIgDgCQgCgCAAgDIgDggIAAgBQAAg/AihOQgbgKgTgXIAAAAQgcgkAAg3QAAgeABgGQADgHAJgRQABgDADgBIAAgEIgCgDQgFgXAAgaQgBhwBbh1QAwg/AqgeQACgCADAAIABABIABgDIACgDIABgEQAohsB5hKQAngYAqgSQADgBACABIABABIAAgCQACgCADgBIADgBIADgCQBBgaBIgMIABAAIBLADQADAAACACIABABIAAAAIAEgBIADgDQBmg+CIAAQA0AAA5AWIAAAAIBMAhIACAAQGEAEAgEhIgBAEIACADIAAADIABAAQAEABABACQAiAqAXA2QAgBMACBUIgBAEIABAEIAAAEIACABQADABABADIAfBAQAXAwAAAuQAAAvgrAtIgBABQgpAigYAYQAOBBAABIQAAA0gMA3IAAABIgCAJQAAADgDACIgEABIABANIAAADIABAFQAGBwALA3QAPBLAkAtIAAAAQAhApAzAQQADABABACQACADgBADQAAACgDACQgCACgCAAQg/gBgxgeIgBgBIgCACQggAdgbARIAAAAQgvAcgyAFQg4ENBRC/QABADgBADQgBACgCACQgCABgDAAQgBAAAAAAQgBAAAAgBQgBAAgBAAQAAgBgBAAQh6h3gDhVQgHigBfhoQibgChqhoQg+g+hdioIAAgBQhbijhAg9QhqhmifAAQggAAgZAcIgDADIAAAAQgBADgCACIgBABIgCACIgEABQiOADhTDCQhDChAACMQAAA7ALAmQAVA4ADBAIgBAGIABACQANECCIC+QAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAIgBAAIgEgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.6,-109.7,173.4,219.5);
p.frameBounds = [rect];


(lib.barbie_fringe_base3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AJlIvQgCgBgCgCQgCgCABgDQAQini6hkQmChdktlDQleDRgGHCQAAADgCACQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQhViygShMQgShNgFisQgFisBpiaQBpiaDogoQBEg7AoAEIA1ABIABAAICpgLIAAAAQBdgDCEAWQCEAWCMBWQCMBWAuBoQAqBfAABXQAACsggCZQgTBag6CdIgBADIgCADIgNAkQgBACgCABIgEABIgCAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.7,-56,149.5,112);
p.frameBounds = [rect];


(lib.barbie_fringe_base2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("ADESXQgtgNgagnIgBgBIgKgSIgBgCQgthUAZhOQgFgdgFgRQgQgtAAgtQAAh9BWhGQA9gyBygYIBigVQA7gRAogkQAbgaAMgsQAVhUgKheIgcA1QgCACgCABQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgDgBgBgCQgCgDABgCQAljHgliTQhaBGhiAEQgDAAgCgCIgCgCIgDADQgDABgDAAIgCgBIgEABQgWgBgWgEIAAAAIgZgFQgDgBgBgCIgEAAQgDAAgCgCIgEAAQg0gRgqgiIgBgBIgBABQgcAVgeAPQgCABgDgBIgBAAIgCACQgBADgDABIgDAAQgCACgDABIhMAVQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBIgDACQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBgBAAAAIgEABIgaABQgmABglgJIgDgCQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgDgBgCgCIAAgBIAAABQgDABgDgBQg4gRgxgmIgBgBIgBABQgjAdgoASIgEAAIgBABQgCACgDAAIgCAAIgEADQgZAJgaAEQgmAHgkgDIgEgBIgCABQgDAAgDgCIgDgDIgBABQgDACgDAAQhSgNhLg7Qg2CdAqCaQABADgBACQgBADgDABQgCABgDgBQgDgBgBgCQinkBAjkJQgdhEgOhQQgkjKBSiiQBTijCZgaQAagFAaAAQClipEbgSIAAAAQEEADC3C1IAEgBQAjgDAkAHQCZAaBTCjQBSCigjDKQgQBXghBJIgFAKIADACQACADgBADIgFAZIgBADIAAACQAMBlgaBwIgDAQIACABQADABAAACQAOC2BSCnQAYAwAqBPIAAAAIAEAHIgBAAQAgBGAAA0QAAB6h6AqQhKAZi6AEQhhADhBAGQARALAJAOIAAAAQAHAKADANIAAABIABAAQACAMAAAOQABBBhNArIAPAGIAAABQAaAPAAAZQABAbgvAhQglAagCAJQACARAuADQABAAAAABQABAAABAAQAAAAABABQAAAAABAAQACACAAADQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgcALgbAAQgSAAgSgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.2,-118,172.5,236.1);
p.frameBounds = [rect];


(lib.barbie_fringe_base1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("ALzRLQgmgqABg6QAAhGAvhMIAAAAQARgcAaglIAAgBIgYgWQh4hygKiOIAAgGIgBgLQgfAkgUAcQgzBDgRAwQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABIAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAIAOAOQA1AyAOAPQAfAmgBAhQABA7gvA1QgTAWgVANQgkAXgqAAQg/AAgigaQgrghgBhEQABg8AggkQAIgJAKgHQASgNAXgFQgggwABhcQAAhZAkhYIABgDQANgdAYguQARggAZgpIAAAAIACgDIACgCIABgEIAGgLIgCgCQgCgDABgDQAKhIABgvQgBh/g4iNQguh1hTh3IgBgEQhzgthwgVQhCgMg+gFQiIgJiFAcQg2AMg2ARIgBABIgBAAQgfAPgcAUIgEACIgDADQgKAHgJAJQh4BhhCDBIAAAAIgBABIAAABIAAACIABAEIACAOQALBYgMA2IAAABQgNA6gFAlQgDAkAYA9QAYA/AyBaQAnBIATArIALAXIAAABQAfBOAABAIAAAPQgGA+gzAuQgDABgDAAIgCAAIgBAEQgCAEgCABIgCABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQg3Apg+AAQgnAAgdgRQgLgHgPgNIgEAAIgHgDQgBBIgKAtIgCAGQgbBghLARQgSAEgUAAQgyAAglgbQgvgigBhFQAAg5AkgcQAAAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAIAFABIADADIAAAFQgCAJAAAJQABAbAbAZQAZAXAWAAQAbAAAZgUIABgBIAFgBIABABIAAgEIABgDIAAgDQAAgQgHgSQgJgUgTgWQgqgugugvQgwgxgXgnQgkg9AAg4IADgMQAGgeAfhVQBOjbBAi3QARgxAOgwIAEgOIAGgXQAahlAIhWQALiPAdh1QAch2BViJIAAABIAGgKIADgDQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAQAegwAgglQAzg9A2gkQBbg9BNgPQA4gLAbgBQALgBAGABIAMACQBCgsBSgOQArgIAxgCQAegCAiAAQAhAAAhAFIADABIAFAAQCIASCfBcQDKB1BRC1IAAABQBRDEBcEcQBcEZAQBHQAQBIgmBVIAAAAIgYAvIACADQAYA1AoBFIAlBCIAAAAIAGALQAaA1gBAUQABApgxBSQguBMAAA1QAABPAxABQAWAAAUgSIAMgMQACgDADAAQACgBACABQADACABADQAJAUAAAXQAAAogbAhIgFAEQgeAhgxAAQgRAAgSgHIAAAJQAAArgmAcQgjAbg2AAQgwAAgkgrgAM/QeQABAQAEALIAAABQAGAOATgEIACAAQAUgFAJgOIgBAAQALgQACgdIACggIAAAAIgBgGIgDgBIgEgDIAAgBQgNgNgJgLQgsBAgBAdgAHTM8QgLAWAGAMQAIAMAQAIQALAFALACIACAAIAAgBQALgwglghIgBgDQgHAGgJASgAq5LYQgOADgGAHQgDAIAAAYQAAAUANAOQAMANARAAIAEAAQADAAACACIABABIAAgBIADgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAcgdAAgoQAAg2gzgsQgegahXgxIgpgYIAAALQgBBNAiBcQAIgYAWgPQAcgWAiAAQAjAAAWAXQAXAVAAAfIAAAXQAAACgDADQgCACgCAAQgEAAgCgBQgCgCgBgEQgBgDgPgSIAAgBQgLgPgLAAIgDAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.2,-114.2,222.4,228.5);
p.frameBounds = [rect];


(lib.barbie_eyes_decor8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_eyes_decor8_img();
	this.instance.setTransform(-67,-19.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67,-19.6,134,39);
p.frameBounds = [rect];


(lib.barbie_eyes_decor7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_eyes_decor7_img();
	this.instance.setTransform(-60.6,-14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.6,-14.2,121,29);
p.frameBounds = [rect];


(lib.barbie_eyes_decor6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_eyes_decor6_img();
	this.instance.setTransform(-62.6,-19.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.6,-19.7,125,40);
p.frameBounds = [rect];


(lib.barbie_eyes_decor5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_eyes_decor5_img();
	this.instance.setTransform(-67.6,-16.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.6,-16.1,135,32);
p.frameBounds = [rect];


(lib.barbie_eyes_decor4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_eyes_decor4_img();
	this.instance.setTransform(-51.4,-20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.4,-20.4,103,41);
p.frameBounds = [rect];


(lib.barbie_eyes_decor3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_eyes_decor3_img();
	this.instance.setTransform(-52.9,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.9,-18,106,36);
p.frameBounds = [rect];


(lib.barbie_eyes_decor2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_eyes_decor2_img();
	this.instance.setTransform(-68.7,-18.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.7,-18.6,137,37);
p.frameBounds = [rect];


(lib.barbie_eyes_decor1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_eyes_decor1_img();
	this.instance.setTransform(-61.3,-15.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.3,-15.3,123,31);
p.frameBounds = [rect];


(lib.barbie_eyes_base8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AEpBdQgKgJgKgMQgLgMgGgPIgDgLIgCABQgFgLgCgNIgEgRIABgBQAPAAALgHQALgHAAgLQAAgKgLgIQgLgGgPAAQADgRAGgQQAXgKAmgHQAogHAgAAQAmAAAhAPQAOAbAAAsIgBAXIgFgBQgIAAgGAFQgFAEAAAHIAAABQAAAHAEAFIABACQAEAEAGABQgJAWgOATQgJALgJAIQgcAXgjAAQgiAAgbgVgAmkBbQgJgIgJgLQgOgTgJgWQAGgBAEgEIABgCQAEgFAAgHIAAgBQAAgHgFgEQgGgFgIAAIgFABIgBgXQAAgsANgbQAigPAmAAQAgAAAoAHQAmAHAXAKQAGAQADARQgPAAgLAGQgLAIAAAKQAAALALAHQAKAHAQAAIABABIgEARQgCANgFALIgCgBIgDALQgGAPgLAMQgKAMgKAJQgbAVgiAAQgjAAgcgXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.2,-11.4,94.5,22.9);
p.frameBounds = [rect];


(lib.barbie_eyes_base7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("ADoBHIgEgDQgQgSgHgVIgGgRIAAgBQgCgLAAgKQABgMACgLQAdgeAVgNQApgcA8AAQAWAAAVAIIACADQAjAjAAAwIgBALQgCAVgIARQgJARgPAPIAAAAQgiAigwAAQgxAAghgigAEng3IAAAAIAAgBIAAABgAmLBHIAAAAQgPgPgJgRQgIgRgCgVIgBgLQAAgwAjgjIACgDQAVgIAWAAQA8AAApAcQAVANAdAeQACALAAAMQAAAKgBALIAAABIgGARQgHAVgQASIgEADQghAigxAAQgwAAgigigAkmg3IAAAAIAAgBIAAABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.1,-10.5,86.2,21.2);
p.frameBounds = [rect];


(lib.barbie_eyes_base6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AE8CKIAAgEIAAAEQgngCgcgmQgbglgDgyIAAgLQAAg4AegpQAegoAqAAQAqAAAdAoQASAYAHAfQgIABgGABQgJAEAAAFQAAAFAJADQAIADAKABIABASIAAABQAAA5geApQgdAogqAAIgFAAgAlACKQgqAAgdgoQgegpAAg5IAAgBIABgSQAKgBAIgDQAJgDAAgFQAAgFgJgEQgGgBgIgBQAHgfASgYQAdgoAqAAQAqAAAeAoQAeApAAA4IAAALQgDAygbAlQgcAmgmACIgGAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42.2,-13.9,84.5,27.8);
p.frameBounds = [rect];


(lib.barbie_eyes_base5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("ADbA5IgIgOQgIgQgEgRQAIABAJgCQALgDAIgGQAGgEgBgGQgBgGgJgCIgFgBQgIAAgIACQgHABgFADIAAgPIACgRQAagUAcgNQAygVBBAAQAgAAAvAMIAAAKQAAAPgDAQIgDAQQgJAfgRAbQgJAOgLAMIgDADQgrArgzAAQgyAAgdgrgAmHA5IgDgDQgLgMgJgOQgRgbgJgfIgDgQQgDgQAAgPIAAgKQAvgMAgAAQBBAAAyAVQAcANAaAUIABARIABAPQgFgDgHgBQgIgCgIAAIgFABQgJACgBAGQgBAGAGAEQAIAGALADQAJACAIgBQgEARgIAQIgIAOQgdArgyAAQgzAAgrgrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.7,-10,89.4,20.2);
p.frameBounds = [rect];


(lib.barbie_eyes_base4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("ADjB+IgRgaIgJgQQgGgaAAgdQAAg+AjgvIADgDQgCAGAAAHIAAAHQABAQANAMQAOAPATABIACAAQAVAAAOgQIADgCQAMgOABgTQgBgUgPgPQgGgHgJgEQgIgDgMAAIgBAAQARgHATAAQAyAAAjAuQAkAvgBA+QAAAtgPAjIgGAEIgNAOQhcgYhSAXgAmdBxIgGgEQgPgjAAgtQgBg+AkgvQAjguAyAAQATAAARAHIgBAAQgMAAgIADQgJAEgGAHQgPAPgBAUQABATAMAOIADACQAOAQAVAAIABAAQAUgBAOgPQANgMABgQIAAgHQAAgHgCgGIADADQAjAvAAA+QAAAdgGAaIgJAQIgRAaQhSgXhcAYIgNgOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.6,-12.7,87.2,25.5);
p.frameBounds = [rect];


(lib.barbie_eyes_base3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AE3CHIgFgCQgXgKgUgXQghgngCg3IAAgGIABgEIAFABQAJAAAHgHQAHgGAAgKQAAgJgHgIQgGgFgIgBQAJgaASgXQAkgpAxAAQAyAAAjApQAjAqAAA4IAAAEQgBA4giAoQgMAOgOAKQgDgBgDACQgNAJgOADQgLACgUABQgQgBgQgEgAmBCHIgEgCQgYgKgTgXQgigngBg3IAAgGIAAgEIAFABQAKAAAGgHQAHgGAAgKQAAgJgHgIQgFgFgIgBQAIgaATgXQAjgpAyAAQAxAAAjApQAkAqAAA4IAAAEQgBA4gjAoQgMAOgNAKQgEgBgDACQgNAJgNADQgMACgTABQgRgBgQgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.9,-14,93.8,28);
p.frameBounds = [rect];


(lib.barbie_eyes_base2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("ADsBoQgQgKgPgPQgQgSgJgUQgLgaAAgdIAAgCQAngiArgSQgTgCAAgSQAKAOAdgFQBKgrBTAFQAGAMABAHIAGAZQACAHAAALIgBAYIgNgCIgEAAQgTABgNALIgEADQgEAFgDAFQgEAHAAAGQAAARAPALQAGAGAIADIAIACIgMASIgNAQQgoApg5AAQgfAAgagPgAmFBOIgNgQIgMgSIAIgCQAIgDAGgGQAPgLAAgRQAAgGgEgHQgDgFgEgFIgEgDQgNgLgTgBIgEAAIgNACIgBgYQAAgLACgHIAGgZQABgHAGgMQBTgFBKArQAdAFAKgOQAAASgTACQArASAnAiIAAACQAAAdgLAaQgJAUgQASQgPAPgQAKQgaAPgfAAQg5AAgogpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.3,-11.9,88.7,23.8);
p.frameBounds = [rect];


(lib.barbie_eyes_base1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AEeBdIgNgDIgUgHIgcgKQgTgGgSgOIgDgDQgPgNABgGIABgBQAOgiAjgkIALgKIAJgGQA5gqBBAAIAWABQAPACAPAFQATAFAUAJQAtAWAhAjQgFATgRAYQgRAWgiAVQgjAUgqAIQgVAEgUAAQggAAgXgGgAl9BfQgqgIgjgUQgigVgRgWQgRgYgFgTQAhgjAtgWQAUgJATgFQAPgFAPgCIAWgBQBBAAA5AqIAJAGIALAKQAjAkAOAiIABABQABAGgPANIgDADQgSAOgTAGIgcAKIgUAHIgNADQgXAGggAAQgUAAgVgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-53.2,-9.9,106.5,19.9);
p.frameBounds = [rect];


(lib.barbie_dress_decor8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_dress_decor8_img();
	this.instance.setTransform(-61.6,-126.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.6,-126.4,123,253);
p.frameBounds = [rect];


(lib.barbie_dress_decor7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_dress_decor7_img();
	this.instance.setTransform(-83.5,-110.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.5,-110.7,167,221);
p.frameBounds = [rect];


(lib.barbie_dress_decor6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_dress_decor6_img();
	this.instance.setTransform(-68.1,-86.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.1,-86.8,136,174);
p.frameBounds = [rect];


(lib.barbie_dress_decor5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_dress_decor5_img();
	this.instance.setTransform(-51.5,-127.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.5,-127.7,103,256);
p.frameBounds = [rect];


(lib.barbie_dress_decor4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_dress_decor4_img();
	this.instance.setTransform(-79.8,-88.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.8,-88.7,160,178);
p.frameBounds = [rect];


(lib.barbie_dress_decor3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_dress_decor3_img();
	this.instance.setTransform(-71,-77.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71,-77.8,142,156);
p.frameBounds = [rect];


(lib.barbie_dress_decor2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_dress_decor2_img();
	this.instance.setTransform(-73.5,-82.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.5,-82.4,147,165);
p.frameBounds = [rect];


(lib.barbie_dress_base8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF61AE").s().p("AkiTdIAAgBQgWgPgLgBQgVAAgXAOQgcARgKgBQgRABgagOIgBAAQgWgLgOgBQgOAAgXAKQgbAKgQAAQgMABgVgMIgDgDQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQg2xaC2pXIAPiIQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQgBgDABgDIACgCIAAgEQAFgdgDgNQgThHAEgxIACgEIAAgBIgEgBQgJgHgIgJQgeghAAgvQAAgaAdg0QAOgZANgQIAejyQABgCACgCQAAgBAAAAQABAAAAgBQABAAABAAQAAAAABAAIAUgDIAEABQABABAAAAQAAAAABAAQAAABABAAQAAAAAAABIABAEIgCDIQBoAnBFCQQBRihCcgOIBZi4QABgDADgBQACgBADABIAWAIQADABABACQACADgBADIgzDUIAAANIADBMQAAA1gbAtIgDADIgBADIgDAEIABACQACACAAAEQgJA1AJAsIAAAEQAAABABAAQAAABAAAAQAAABABABQAAAAAAABIgBADQAAABABAAQAAABAAAAQABABAAABQAAAAAAABQAUByA7AkIACABQFWEqCFRzQAAADgCACQgLAPgJAUQgUAogHAKIAAAAQgTAagfAFIgBAAQgaAFghArQgkAxgYAOQgYAPgsAAQgHAAgOgFQgLgFgFAAQgxAAgfAhQgiAlgzAAQg+AAg/AbIg+AcIgDAAQgMAAgmgNQgigLgGgBQgQAAgWAMQgbANgWAAIgCABQgWAAgagTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.6,-126.4,123.3,252.8);
p.frameBounds = [rect];


(lib.barbie_dress_base7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF61AE").s().p("AjEPhQiFhFg1AAQg3AAgfAlIgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAABIgBAAIgCAEIgRAUIAAAAQgQAPgVAAQgQAAg5gfQj1gWANhHIABgCQBVi9AghnQA6i+AahfQAahgApiGQAqiFAphhQAphiBGg5IAQhlIABgBQACgGAAgFQAAhQgeg9IAAAAQghhBADguQACgwApgxIAqg1IAkjeIACgEIAEgCIAegFQABgBAAAAQABAAABABQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAIgvD5QARATAbAVQAsAhBigBQBjgCApgUQApgUAqgpIAkjSIACgEIADgCIAEAAIAZAFQADAAACADQABACAAADIgsDvIAZAzQANAbAAAXQAAAPgNAuQgMAsAAAWQAAALAIA4QAHAtADAPIADACIA+BcQBOAgA0BaQA0BZAxBxQAxBvAdBSQAdBRBaDmQA9CfBkCaIABADQAPBMjhAlIgcARIAAABQgsAZgdAAQgnAAgegwIABAAIgBgBIAAgBIgCgDQgagqgmAAQgrAAgzAcQggASg+AvQg+AwggASQg3AfgwAAIAAAAQg+AAiJhHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.5,-106.4,167.1,212.8);
p.frameBounds = [rect];


(lib.barbie_dress_base6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF61AE").s().p("AjJNkQgwgCgJghIAAgCIABg0QkxgDgxhgQgBgCABgDQA0jxBBjDQhZgJgygjQgYgQgWggIgBgDIAAgEQArhpA/iKQA/iMAShCQAShCAMhIQAMhJABhoQABhsARgeQAQgeAQgDQAVgeAdgGIACAAICaAAIAJgDIBDggQACgCADACQADABACACQAKAXATALQAnAWAMAmQAOgiAhgOIABgBQAegGAlgXQANgIALgJQACgCADABQADAAACACIAtAzQCJALApAlIAAABIALAKQAqAvgFBYQgFBNANBRQAEAXAFAVIArgvIAAAAQAwg0AsgsQACgCADAAQACAAADABQACACABADQARA7AaAmQAgAwAtARIADACIABAEIgBAEQguBQhHBLQhvB2hGgBQgnABg9hSIgdgnQgYAXgcASIApBEQEJC+CTIRQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQgmBmk1AoIAIAzIAAADQgHAfgsAFQgmAEhHgSIAAAAQh/gahqA0IgBAAQhHAWgqAAIgIAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.1,-86.8,136.4,173.7);
p.frameBounds = [rect];


(lib.barbie_dress_base5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF61AE").s().p("AmvTkQglgPgdgSIgDgCIgBgEQgBghgFgsQgHhQAAgxQAAhOAWiXQAXiWADg1IAAAAQACg1gcjFQgcjIAIh+QAIiAAChsQAChtBRjtQgliAANg8QAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBIgDgBQgqghgDg2QgCgMADgWQAGguAsgfIDykrQABgDAEAAQADgBACADQACABABAEQAAADgCACIjbEQQAMgFAPgDQApgLA7AAQCOAABfAVQBJAPAnAbIAIAGQgviVgQidQAAgDACgCQACgDADAAQADgBADADQACABAAAEQARCqA3CiIAAAAIAAAAQAPAVAAAZQAAAJgVA0IgFANIgCADIAAADQAAADgCACIgCABIABABQABACAAADQgIAjAAAyQAlCMBPBMQAhAgBhCSIAAABIAfBOQAfBOAABDQAABhgsCMQgYBMgyCPQAIAFAJANIABAEQAAAJgHAIIAAABQgDAEAAADQABAEAYAYQAnAoAbAiQBhB5AwChIAAADIgBADQg5BhhQAgQghANgwAHIhFAKQgDAAgCgBQgDgCgBgCQgdhUhoiWQhwilgHhMQgOiAgMivIgNjLIAAgBIgBAAIgPgCIgEBtIgICNQgDA9AGCnQAEBsgQAiQgOAeAAArQAAArAlHiIgBAEIgCADQgxAhhCASQg4AOgrAAQg9AAhCgZgABluMIABAAIABgCIgCACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.5,-127.7,103.2,255.6);
p.frameBounds = [rect];


(lib.barbie_dress_base4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF61AE").s().p("AhlNCIgBAAQgFgCgCgPIgDgCIgDgEQhBAAgdgZQgdgYgVACQgZABg7AHQg8AIgnAAQgsAAgugbQgVgMgmgbQgDgBAAgDQgBgDABgDIANgYIgCgDIAAgDQgmgSgogzIgXgcQhtgggCgYQgDgMACgHQACgJAHgCIAEAAIgBAAIADAAIgBgEQgBgDACgCQAcgsAmgtQArg2B8iBIABgCQgZgxg4gDQgBAAgBAAQAAAAgBAAQgBAAAAAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABgBIAvh2IgCgBIgUgaIgBgBQgGgHAAgVQAAgnAagkIgBgEQgBgGAEgEIgPghQgSglAAgTQgBg1Bcg1IAAAAIAIgDIABAAIgBgCQgQgQgFgIIAAAAQgIgLALgkQAJghAshDQAphAAAgsQAAg8Afg7QAohKA+AAIATAEQAmg8AUABQA7ABAbgVIAAAAQAYgUArAIIACADIADAAQgBgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAgBIAAgBIABABIABgBQAAgCAPAIQAKAdAAAHQABAWgdAWQgcAVgdAAIgVgBIgCADQgjA+gFBDIgBACIAAABIAAABIAAANIADABQADABABACQARAmAqAbQA7AnBDAAQAuAAAqgaQAIgVAMgWIABgBIASgUIgCgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIABgEQAmhHAIgSQALgZAFgUQgYgLgNgXIgBAAQgTgfABg9QAAgDACgDQACgCADAAIADAAIACAAIAjgCQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAPAJAWAUIgBAAQATASAOAIQAIADAeAEIAAABQAjAHAGAYIAMAqQAmAOAVANQBBAlgBAzQAAATgRBIQgJAhgEAcQAMgEAIgBQAIgBAdAVIAAAAQARALAJAHIA4gwQACgCADAAQADAAACACQACACAAACQALBNBjAbQAAAAABAAQAAABABAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABIgBAEIg7BiIAKAkQAJAlAAANQACAxhqArQhZAkg2AAQgqAAg1g1IABAAQgpgqgTgqQgTAQgTALQAMAiAXApQBxBaBkBJQBmBOByB4QBJBMAwBbIABADIAAAEQghBJgzAtQg5Ayg9gBIgJAAIgCAAIABABIACAFQABADgBACIAAACIAAABQACACAAADQgBADgCACIgBACQg0AziDgbQgpAggVArIACAEIAAABQACAFgCAGIAAAAQgCAFgGADIAAAAIgEABIAAABQghBEhPAjQg9Aag+AAQhCAAiDgyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.9,-88.5,159.8,177);
p.frameBounds = [rect];


(lib.barbie_dress_base3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF61AE").s().p("AlxMJIgDgBQgggdgLhaQgKhYAAhVQAAhIAKh9QAIhrAOhDIgHgDQgXAjgYAoQgUAjgRAhIgXAtQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQg7gKgygbQg8ghgYgvIgBgFIACgEQAOgQAOgVIAAgBQAjg1AkhRQBDiaAbgpIAdhrIAAAAQAQg+AKgtQAJguAAi0QgBg3AkgoQAmguCQgEQAAAAABAAQABAAAAAAQABAAAAAAQABABABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAMAtAcAXIAAABQAJAIAeAPQADABABADQABADgBACIg/CeQAlgRAugRIgBAAICKg1IAAAAIApgRIgQg1QgBgDACgCQABgDADgBQAugQAbgcQASgVAJgZQABgDACgBQADgBADAAQBCANAyAMQA+AOATASIAAAAQAcAaAFAyIAAABQAECDAGA/QAEApAKAgIAAACIABgBIAxgsIA1gvIAAAAIAhgeIAEgBIAEAAIAEADQAPAZAXAZQA0A3A7ALQADABABACQACACAAADQAAACgCADIgeAiIAAABQg5BAgvAyIAAAAQiPCYg6gBQgqABhAhOIAPAiQAfBJAuAuQABACABADQABAagUAdQBMBnAUBrIgBAAQAPBQABBIQAAA6goB8QgeBegKAvQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgaABQgnAAg4gQQg1gOgbAAQgxAAg0ARQg4ASgfAAQgeAAg7gKQg6gKhGAAQgkAAgyANIgBAAQgXAGgPAGIgCAAIgCAAgAiYi0IhFAMQAGAtAAAgQAAAzgVBKIgIAaQDQALC4gnQgNgigPgxQgdhcgLg6QhmAAiCAVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71,-77.8,142.1,155.6);
p.frameBounds = [rect];


(lib.barbie_dress_base2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF61AE").s().p("ACYM3Qg2gGAAgWIAAgBIgPhUIgFgCIABAAQglgJhkAAIgBAAIgYABIgHBWQAAADgCACQgDADgCgBIgCAAIgCAAIgEABIgBAAIgtABIgBAAQhDgNhQgmIgKgFIAAAAQhMgkgSgSQhNA0h4gnQg8gThGgqQgDgBAAgDQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABgBIARguIAPgnIAAAAIAUgzIAPgnIAPgkIAAAAIARgqIAAABQArhqAshiIAEgKQgDgEABgFQAAgGADgEQAEgEAGgBIAEgHIAQgjQBhjKAnABQAGABAFABQADgQAAgMQAAgsgHgWQgIgWgDgWQgDgWADgWIAAAAIAAgIIAAgBIgBgZQgHgKgQgQIAAAAQgfghAAgiQAAgdAQgvQAMgjAOgYQABgDALgGIDMkIIADgCIADgBIAeAAQADABACABQACACABADQAAADgCACIijDqQBTgBA3BgQBthpCgAkIglj4QgBgDACgCQABgCADgBQACgBADABIAUAHIADADIABADIA6EGIAAAAQAKAfABANIABAZQAAAegSAwIgBAEIgBAAQgSAwAAAXQAAA1ALA2QAJAqAOAfIADgBIAAgBQAHgDAJAAQAnAAA6A3QAoAmA7BJIA0BFIAGAHIABAAIAAgBIAAACIAGAJQACADAAADIgBABIACgDQBLBiAUAaIAbAkIAeApIAeAmIAAAAIAcAkIAhAnIAYAdIAAAAIALAMIACADIAAAEQgLAggRAUIAAAAQggAmg4gBIALAVIAUAoIABAEIgCAEQgoA0hTAAQgHABgmgGIgrgFIgFAAQgtABgeALQgZAJgVARIABAHQABAwg8AbIAAAAQgTAJgVAEQgdAHggAAIAAABIgBgBgAG5BzIAAgBIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.5,-82.4,147.1,164.8);
p.frameBounds = [rect];


(lib.barbie_dress_base1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF61AE").s().p("AiBHgIABAAQjsiVgphqIAAgEQADgwAhh+IAfh1QAAgXgHgsQgJg1gFg4QAAgDACgCIAAAAIAAgBIgCgDIgEgCQgMgNgLgPQgpg6AehWQAdhXD5AOIABAAQEKgCArBmIAAADQAFBigjAuIgDADIgCADIAAAAQACACAAAEIgDBPQAAA8AbAzQAUAkAvAyQBBBHAUAZQApA2AaA8QAGAMACALIABAJIAAAAQjeAYieC5IgDACQgvATglAAQgrAAgdgZgAGHECIABABIAAgBIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.1,-50.5,82.2,101.1);
p.frameBounds = [rect];


(lib.barbie_bottom_decor8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.barbie_bottom_decor8_img();
	this.instance.setTransform(-63.1,-96.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.1,-96.1,126,192);
p.frameBounds = [rect];


(lib.barbie_bottom_decor7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_bottom_decor7_img();
	this.instance.setTransform(-46.2,-36.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.2,-36.6,92,73);
p.frameBounds = [rect];


(lib.barbie_bottom_decor6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_bottom_decor6_img();
	this.instance.setTransform(-44.4,-30.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.4,-30.3,89,61);
p.frameBounds = [rect];


(lib.barbie_bottom_decor5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_bottom_decor5_img();
	this.instance.setTransform(-122.7,-68.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.7,-68.1,245,136);
p.frameBounds = [rect];


(lib.barbie_bottom_decor4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.barbie_bottom_decor4_img();
	this.instance.setTransform(-62,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62,-95,126,190);
p.frameBounds = [rect];


(lib.barbie_bottom_decor3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_bottom_decor3_img();
	this.instance.setTransform(-76.5,-41.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-41.4,153,83);
p.frameBounds = [rect];


(lib.barbie_bottom_decor2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_bottom_decor2_img();
	this.instance.setTransform(-44.3,-44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.3,-44.6,89,89);
p.frameBounds = [rect];


(lib.barbie_bottom_decor1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_bottom_decor1_img();
	this.instance.setTransform(-45.9,-40.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.9,-40.8,92,82);
p.frameBounds = [rect];


(lib.barbie_bottom_base8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF61AE").s().p("An+PBQgsAAgtghQgPgMgMgLQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAgEQBRmQB/lMQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABgBIgBAAQAAgDACgDIgBgDIABgvQAAg5gPhLQgPhOgbh5Qgch7AGihQAGigACgVQAFg0AchnIACgDQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAAAAAQAAgBAAAAQABgBAAAAQABAAAAgBIAAgDIAUhCQABgDADgBQACgCADACQBXAWBUAJQAAAAABABQAAAAAAAAQABAAAAAAQABABAAAAIADgBQABAAAAABQABAAABAAQAAAAABAAQAAABABAAIAEgBQA1AFA2gCIAEABQACgBADABIACAAQAAAAAAAAQABAAAAgBQABAAAAAAQABAAABAAQCYgGCPg9QADgBACABQABAAAAABQABAAAAAAQAAAAABABQAAAAABAAIAtA0IACAEQADABABACIABADIADACQAbAdAjA1QAmA4APAkIAAAAQAPAlAIAwQAIAqAAAgQAABug+CyQg9CuAAAnIABATIAAACIACACIAEABQEKB+BWFEIAAADIgCAEQgiApgvAfIABAAQgYAPg+AeQgqAUgNAPQgkArguBMIAAABQguA6hQAAQghAAgogLQgagGgPgHIgDgCIgBgDQhQk1gJlCQgWgygMiHQgKh1AAh3QAAgXAFhoIABgRIgLACIgGAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgCgBIAAACQgcFDAAAzIAFBpQAABAgFAmIgGAlICUKqIgBAGQgdA+hNAjQg5AagwAAQgkAAhIgfQhEgdgaAAQgdAAgrAfQgvAigVAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.9,-96.1,125.9,192.3);
p.frameBounds = [rect];


(lib.barbie_bottom_base7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF61AE").s().p("AglFuQjCgGjUhVIgEgCIgBgEQgJhDgDhfQgDhfAciWIAAAAQAciZAQgeQAAgBAAAAQABgBAAAAQAAAAABgBQABAAAAAAQACgBADAAQC8AqCrgKIAAAAQCngKCZg+IAEAAIAEACQA6A6AvBjQAtBjAGBlQAGBkgWA+IgdBSIgCADIgDACQjNBBjtANIACAlIgBAEIgCADIgEABIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.2,-36.6,92.4,73.3);
p.frameBounds = [rect];


(lib.barbie_bottom_base6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF61AE").s().p("Am2D/IgEgDQgCgCABgDIAUiGQgGgzACg0IACghQAFhPAWhUIAAAAIAAgBIABgBIAdhUQABgDADgBQADgCADABQBvAnBnAKIAAAAIABAAQAnADAogBQBvgDBogpQAigOAhgRQADgCADABQABABAAAAQABAAAAAAQABABAAAAQABAAAAABIA2BLQCHCLATCIQASCHgWBBQgBADgDABQgDABgDgBQi8hBjhBiQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBIgBgEIAAgJIgEgxIgBgHIgPAEIgDA1QAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgDADQhIAWhRAAQh3AAiKgwgAgnDgIAEAAIAAgBIgEABgAERjPIACgBIgDgFIgBgBIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.4,-30.3,89,60.7);
p.frameBounds = [rect];


(lib.barbie_bottom_base5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF61AE").s().p("AmDKIQgXgagUgBQgVAAgWAQIAAAAQgbATgVAAQgWABgWgjQgQgZgUgBQgSAAgMAKQgQAPgYAAQgSABgcglQgVgcgXgBQgHAAgcAMQgiANgEAAQgkAAgVgnQgQgegWgBQgLAAgYAHQgaAIgOAAQgcABgQgpIAAAAQgLgeggAAIgUAHQgXAIgHAAQgaABgQgxQgMgkgOgBIgHABQgDABgCgBQgDgCgBgDQgBgDABgCIADgGQAYgoAggjIAAAAIAZgZQgHgQgGgHQgCgCAAgCQAAgBAAgBQAAAAABgBQAAAAAAgBQAAgBABAAQCLi1BAhFQA9hDA0gYIgDgLIgHgSIAAgEIABgDQBliNAtgyQAngsAZgJQgMgfgQgWQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAlguBghQQBbhOAuAEIABAAIAGABIAAAAQEiBjDziHQACgBADAAQCvAlCJBxIADADIAAAEQgGAUgHAQQBEAPBHAwQBKAzAzA2QACACAAADQAAADgCACIgFAFQAxABBiBBQBzBNCaCNQADACAAADQAAADgCADIgIAIQAsAMA7AwIACADIABAEQgDARgTAhIAAgBQgSAjg8AIQgyAHgLArIAAAAQgIAfgCADIAAAAQgKATgcAAQgIAAgSgLQgNgJgNAAQgSAAgIAMQgLAPgYAqQgcAxgvgWQgkgSgTARQgUATgDAlQgDAwhCgEQg0gDgPAhQgSAogHAJQgRAUgeABIgBAAIg8gGQgcgCgRALIAAABQgQAKgVAiIAAABQgWAggSgBQgWAAgkgQIAAAAQghgOgYAAQgSABgVAYIAAAAQgbAegdAAQgFAAgbgIIAAAAQgYgHgMAAQgmAAgRAWQgUAcgcAAQgFABghgUQgdgPgFgBQgOAAgWAQQgcAUgLgBQgMABgbgaQgXgUgSAAQgTAAghAYQgnAbgHgBIgBAAQgOAAgbghg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.7,-68.1,245.5,136.3);
p.frameBounds = [rect];


(lib.barbie_bottom_base4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF61AE").s().p("Al9N3Qg0gTgMgbQgNgbAZghIgCgCIgFgGIgCgDIgEABQg0AIgkA4IgFAEQgDAAgCgBQgTgKgNgJQghgaAAgoQAAgaAhgbQAagWABgPQgBgNgdgaQgkghABgUQAAgcAfgVQAXgRABgOQgBgNgYgVQgegbAAgbQgBgVAigaQAagXABgRQgBgSgagVQghgaAAgjQgBgUAighQAagbABgNQAAgSgVgcQgZghABgIQAAgUAegeQAZgbAAgTQAAgNgcglQgggqAAgZQAAgUATggQAQgbAAgLQAAgTgVgfQgYglAAgfQAAgMAYgnQAVghAAgNQAAgQgNgRQgRgVAAgaQAAgjAngaQAegWABgOIgVg0QgYg1AAgQQAAgTAkgxIALgNQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQABAAAAABQAkAuAxAGQANgqAQgxQAAgDADgBQADgCADABQBwAjBwAFIABAAQAkABAlgCQB8gHB+gvQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQABAAAAAAQABABAAAAQAAAAABABIATAYIANgVIACgCIACgBIACgCQACgCADAAQADAAACACQACACAAADIAAABIAAADIAAABQgBArAmAJQAbAGAIAFIAAAAQASAMAAAdQAAAHgFATQgFARAAAFQACAJAiARQAtAVgCAXQABAIgLAXIgDAHIAaAvQAcAUgBAUQAAAHgDAJQAIAcAAAVQAAAvgIA8IAAABQgJA2gPBDIgBABIgBAFQAKAQgBAJQABAKgdAnIgQA4IAFAHIABAAQATAXgBARQABAWggARQgWAMgBAWQABAFARAOQAVAWAAAYQAAAFgHAWQgEAMgCAJIAbAWIAHgBIACgBQAlAAALAYQAEAIACAXIADACIABAAIAgAcQAeAZAVAWIACACQArAwgEAeQgCAWgFAVIAKADIAAgBQAfAGAFAKIABACQAEALADAYIAFAfIgBAEIgCAEIgEABQgrAChEAzIgBABQgOAOgRALQgzAfhRAAQgXAAgUgFQglgKABgUIABgGIAAgBIgBAAQgigPgEgtIABgEIgBgFQgDAAgCgCIifjGQhQgkgFjUQgGjOAAhbIABhWIABgGIgWgEQgEA3gKBwQgJB6ADBpQAECbgIAyQgGAggNAdIgDAEIAAAEIgEAHIACACQACACAAADIgBBKIAAAbQAABkgCArQAAADgDACIgCABIAAACIADACIARAiQAOAYAAArQAAApgTApIgBACIACACQAOAOgBANQAAAJgFANIAAABQggA3gbAaQgoAmgvABIgBAAIgBAAQguAAhigjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.5,-92.2,123.1,184.5);
p.frameBounds = [rect];


(lib.barbie_bottom_base3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF61AE").s().p("AiUF8IgCgCQgOgqgXgFQgZgEglAiIgDACQgdAUgYgHQgYgGgTghIgBgDQgEgngUgJQgWgIgnAXIgBABQglAPgXgKQgXgKgJgjIgBgBQgGgugVgQQgWgOgkAQIgBAAQgjAKgTgOQgTgMgBgkIAAgBQACgjgPgNQgRgMgkAMQgDAAgCgBQgCgBgCgCQgBgDABgCQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQD/jODOkAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIAZAHIAZAGIAcAHIAjAGIAjAFIAgAEIAgACQAxADAsgEIAxgFIAegFIgBAAIAhgHIgBAAIAggJIAdgJIgBAAIAbgKIAdgMIAagNQACgCADABQACAAACADQDdEEELDQIACAFQABACgBADIgEADIgFABQgQgEgJAKQgKAMgCAdQAEAjgSAPQgRAQglgGIAAAAIgCAAQgegLgRAKQgRALgEAhIgBADQgGAmgWANQgWAOgmgNIAAAAQgggOgSAHQgRAIgFAcIgBACQgfBDhHgfIgCgBQgagWgVAGQgVAHgSAlIgBACQhCA+hWguIgDgCQgYgigbAAQgbACgiAmIgBABQgXAUgYAAQgeAAgegig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-41.4,153,83);
p.frameBounds = [rect];


(lib.barbie_bottom_base2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF61AE").s().p("AmRG+IgEgCIgCgEIgTh7IAAAAIgLh+QgFg6AAg0QAAh2AShfQAShgAJglQAKgnAJgWIABgBIAihdQABgDACgBQADgCADABQErBLDHheQACgCADABQAAAAABAAQAAABABAAQAAAAABABQAAAAABABIBABZIABABQBpBhA2B9QA2B+gJBjQgJBjgKBJIgHAxIgBAEQg1BChEAcQg0AWhbAAQhWAAh7gPQh9gPgnAAQgzAAhCAUIAAAAQgeAJgbALIgEAAIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.4,-44.6,88.8,89.4);
p.frameBounds = [rect];


(lib.barbie_bottom_base1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF61AE").s().p("AjDGYIhEgEQg6gEgsgJQgsgIgqgRIgDgCIgCgEIgBgaIAAgeQAAgWABgOIABgTQAAgDADgCQACgCADAAIAFAAIACAAIAQAGQgKhkAFgjIAIg9IAGg5IAKhyIABgEQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAIABgDIgBgEIABgIIABgEIAAgBQgBgDABgCQAEgIAGgnQAGgsArhJIABgCIAAgDIAMgvIADgEIADgCIAEABIAbAIIAEgJQABgCACgBQADgCADACIAOADIgBAAIAIABIAEACIACAEIAAAFIgDAIQAzANAuAIIAEABIAEAAQAmAFAlABIADABIAEgBQBnABBPgoIgFgJIgBgEIACgDIADgDIAUgJQADgBADABQADABABADIADAGQAPgLAOgLQACgCADAAQADAAACADIAkAsIABAEIADACIA3A+IAAAAQAmArAdAmIABADIAEADIAHAJIAAAAQAuA+ATAtQAcA+AGBVQABAXAAAYQAAAdgHAzIAAAAIgKAzIALADQACABACADQACACgBADQgDASgHAXIAAAAIgRA0QgBADgCABQgDABgDAAIgmgHQgxgHghAAQhTAAhTAWQhDASglAZQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAgBgBIgRhFIgCAWIAAABQgBASgzASQgvARgqAFQgqAEgMAAIAAAAgAAFEHIAAABIAAAUIgCAdIACgCIACgDIAGgFIAAAAIgFgoIgIhFIAAgCIgKgBIgCA2IAFAAIACAAQAIAAACASg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.9,-40.8,91.8,81.7);
p.frameBounds = [rect];


(lib.barbie_body_decor_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.barbie_body_decor_img();
	this.instance.setTransform(-85.8,-217.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.8,-217.3,172,434);
p.frameBounds = [rect];


(lib.barbie_body_base_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDE8D5").s().p("EgD0Ah4QgPgFgQgJQgmgXAAgrQAAgNAJgpIACgGIAEgVIAAgCQAAgqgoiWQgqiYAAhKQAAhEAXhyQAWhvAAgpQAAgogLgyIgBgBQgGhNgXhaQgYhcgFhcQgFhcAAgNIAAAAQACgeANiTQgBhJACgjQAEg6APhBIAAAAIATg+IhmCBIAAAAQhNBpgBAsQAAAKAHAZQAHAcAAAOQAAAQgKAdQgJAZAAAUIACAYIAAABQgBAcgRgCIgIAAQgSgFgLgfIAAAAQgJgYgBgXIAAgCIAAgEIgmAkIANASIABABQAPAXAAANQAAAKgFAHIAAABQgGAJgLAAQgHABgUgSIgBgBIgUgTIAAAAQgQgPgGgHQgBgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIgCgBIgDABQgDAAgCgCQgVgTgEgGIgBAAIAAgBQgDgDAAgDQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIgCgFIgCAAQgDAAgCgCIgPgOIAAAAQgFgGgCgGQgDgHAAgHIAAgBIAEgYIgFACIgKAFIAAAAQgRAGgNAAQgKAAgIgDQgQgGABgNIAAgDQACgNAbgKIAAAAIAKgGIABAAIANgKQAIgGAKgSQAOgXAEgEIAAAAQALgMAmgcQAhgZANgNIAAgBQAfglANgXQAMgXAXg8QAYhLAUgxQAUgyAggkQAKg6AghfIAAgBQAZhJAAgnQAAgngEgiQgEgkARh3QARh9C6AWIBBgQIAJgCQAdgJAKgKQAKgLABglQgdgEgdgGQgxgKgugRQhWgghUgkQhXglgqhVQgIgQgGgPIgBgCQgHgBgNgFIgUgJQgmgQgohHQgnhIAAguIAAgDQAAgtAWgVQASgRAYgEIgMgwQgLgngFgoQgNhagFhcQgEhdALheQAKhZAjhVQAnhcBRg6QBMg3BaggQBUgfBZgQQBUgQBXgBQBYAABWARIAAAAQBYAQBVAfQBZAgBOA3QArAeAeArIAAAAQA4BNAVBeQASBUADBVQACBUgHBUQgIBhgXBeIgLAvQAZAEATASQARARAEAhIABATQAAAugnBIQgoBHgmAQIgOAHIAAAAQgRAGgIACIAAACQgoBbhSAyQgMAIgOAFIABAAQhVAjhVAgQg2AUg4AMQAAAnAGAXQADAMAEAHIAAABQAOAUBwAXIgBAAQBfAIAVA6QAVA3AABbQgBBWAHAfQAFAaANAcQANgSAigaIAUgRQApgkAlgvIgFgPQgDgLAAgJQAAgPAEgUQADgRAAgKQAAgLgFgRQgHgUAAgQQAAghAQACQAPgBAeAcIABABQAQAUAEAeIAAABIABAFQAGgJALgKIAcgZIAGgFIAWgjIAAgBQAcglARAEQATADAAATQAAANgOAcIgBAAQgMAXgBAJQAAADADACQAEADAFAAQAKgBAagOQAdgSAQAAQAMAAAHAKIABABQAFAIAAAJQAAAEgBAEQgDAHgKAKQAFADAGAEQALAKgBALQACASgoAdQgaATgGAKIgBAEQABAHAKABQAPACAIgBQAVgDAKAGQAKAGACALIAAAEQABAMgMAMQgLALgPADIgBAAQgNACgUAIIgXAJQg8AXgjAAIgFAAQghBBgYAdIguA3QgPAPghAgQghAggbAXQgtAkgkgBQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQg2gng8heQgzhPgWg4QgJAUgOARIgCABIAAABQACACAAADIAAAJIgEBDQAABBAdA4QAVAqAxA4QBKBVANARQAyBCAcBGIABABQASBBAEAoQAFAngBA8QgBA7g7DGIg7DEQABAUASATQAHAIAMAIQBDAuADAEQAdAdAWAuQAMAaAVAzIAAAAQAPAgALA2QAMA6AHATQAHAQALAUQANAXAKALQAbAbAEAGQAQAVAAAXQABAJgGAMQgGAOgPAUQgOASgYAbQgTAjgQAVQgTAVgTAEQgPAEgaAPIgBAAQgRAKgOAEQgKADgIAAQgRAAgNgGIgBAAIgXgNIgXgIIAAAAQgTgHAAgUQAAgNARgfQARggADgLQAEgUABgbIAChFIAAAAIAAgEQAAgLgDgMQgQg3hRhYQhqhygugqQgmgjgLgbIgEgNQgFgegDgiQgEgiAAgNQAAgHgPhwQgPhyAAhUIAAgzIAAg0IADgpIgWAGIgLADIgCAAIAAADIgIBKIgGBAQgIBjgCA+QgCA9AAA2IAABIQAAB8gLAYQgGARgPAeIgDADIAAADIAAAAIABABQACACABADIABAKQAGA4AAAaIABAQIAAAyQABAkgMB6QgNB5AABVQAABDAgA7QAgA+AAAOQAAAYgZAWQgVASgRAAQgSARgQAFIgBAAQgJACgfgEIAAAAQgdgDgZAFIgOABQgKAAgKgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.7,-217.1,171.5,434.2);
p.frameBounds = [rect];


(lib.barbie_bag8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.barbie_bag8_img();
	this.instance.setTransform(-34.2,-47.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.2,-47.2,68,72);
p.frameBounds = [rect];


(lib.barbie_bag7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.barbie_bag7_img();
	this.instance.setTransform(-49.1,-80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.1,-80.5,98,161);
p.frameBounds = [rect];


(lib.barbie_bag6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.barbie_bag6_img();
	this.instance.setTransform(-43.3,-54.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.3,-54.3,87,109);
p.frameBounds = [rect];


(lib.barbie_bag5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_bag5_img();
	this.instance.setTransform(-48.4,-42.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.4,-42.4,97,85);
p.frameBounds = [rect];


(lib.barbie_bag4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_bag4_img();
	this.instance.setTransform(-32.5,-59.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.5,-59.7,65,120);
p.frameBounds = [rect];


(lib.barbie_bag3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_bag3_img();
	this.instance.setTransform(-39.7,-42.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-39.7,-42.7,79,85);
p.frameBounds = [rect];


(lib.barbie_bag2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_bag2_img();
	this.instance.setTransform(-30.8,-44.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.8,-44.1,62,88);
p.frameBounds = [rect];


(lib.barbie_bag1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_bag1_img();
	this.instance.setTransform(-46.7,-94.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.7,-94.6,93,189);
p.frameBounds = [rect];


(lib.backgrounds_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.background_1_img();
	this.instance.setTransform(-200,0);

	this.instance_1 = new lib.background_2_img();
	this.instance_1.setTransform(-200,0);

	this.instance_2 = new lib.background_3_img();
	this.instance_2.setTransform(-200,0);

	this.instance_3 = new lib.background_4_img();
	this.instance_3.setTransform(-200,0);

	this.instance_4 = new lib.background_5_img();
	this.instance_4.setTransform(-200,0);

	this.instance_5 = new lib.background_6_img();
	this.instance_5.setTransform(-200,0);

	this.instance_6 = new lib.background_7_img();
	this.instance_6.setTransform(-200,0);

	this.instance_7 = new lib.background_8_img();
	this.instance_7.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect];


(lib.adfsafa_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.barbie_dress_decor1_img();
	this.instance.setTransform(-41,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41,-50.5,82,101);
p.frameBounds = [rect];


(lib.curtain_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_2_img();
	this.instance.setTransform(-290,-290);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-290,-290,580,580);
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


(lib.numbers_separator_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.numbers_separator_img();
	this.instance.setTransform(-24,-24,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.numbers_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.numbers_0_img();
	this.instance.setTransform(-30,-30);

	this.instance_1 = new lib.numbers_1_img();
	this.instance_1.setTransform(-30,-30);

	this.instance_2 = new lib.numbers_2_img();
	this.instance_2.setTransform(-30,-30);

	this.instance_3 = new lib.numbers_3_img();
	this.instance_3.setTransform(-30,-30);

	this.instance_4 = new lib.numbers_4_img();
	this.instance_4.setTransform(-30,-30);

	this.instance_5 = new lib.numbers_5_img();
	this.instance_5.setTransform(-30,-30);

	this.instance_6 = new lib.numbers_6_img();
	this.instance_6.setTransform(-30,-30);

	this.instance_7 = new lib.numbers_7_img();
	this.instance_7.setTransform(-30,-30);

	this.instance_8 = new lib.numbers_8_img();
	this.instance_8.setTransform(-30,-30);

	this.instance_9 = new lib.numbers_9_img();
	this.instance_9.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.numbers_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.numbers_0_img();
	this.instance.setTransform(-30,-30);

	this.instance_1 = new lib.numbers_1_img();
	this.instance_1.setTransform(-30,-30);

	this.instance_2 = new lib.numbers_2_img();
	this.instance_2.setTransform(-30,-30);

	this.instance_3 = new lib.numbers_3_img();
	this.instance_3.setTransform(-30,-30);

	this.instance_4 = new lib.numbers_4_img();
	this.instance_4.setTransform(-30,-30);

	this.instance_5 = new lib.numbers_5_img();
	this.instance_5.setTransform(-30,-30);

	this.instance_6 = new lib.numbers_6_img();
	this.instance_6.setTransform(-30,-30);

	this.instance_7 = new lib.numbers_7_img();
	this.instance_7.setTransform(-30,-30);

	this.instance_8 = new lib.numbers_8_img();
	this.instance_8.setTransform(-30,-30);

	this.instance_9 = new lib.numbers_9_img();
	this.instance_9.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.reset_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.reset_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
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
	this.instance.setTransform(-30,-30,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect, null];


(lib.random_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.random_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.play_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_img();
	this.instance.setTransform(-130,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130,-70,260,140);
p.frameBounds = [rect];


(lib.play_again_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_again_img();
	this.instance.setTransform(-100,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-55,200,110);
p.frameBounds = [rect];


(lib.photo_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_img();
	this.instance.setTransform(-100,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-55,200,110);
p.frameBounds = [rect];


(lib.nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_img();
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AlgFhQiTiTAAjOQAAjNCTiTQCTiTDNAAQDOAACTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.nav_hero_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AlgFhQiTiTAAjOQAAjOCTiSQCTiTDNAAQDOAACTCTQCTCSAADOQAADOiTCTQiTCTjOAAQjNAAiTiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.nav_hero_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nav_hero_img();
	this.instance.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.more_games_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.more_games_5_img();
	this.instance.setTransform(-77.2,-77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.2,-77.5,154,154);
p.frameBounds = [rect];


(lib.more_games_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.more_games_4_img();
	this.instance.setTransform(-4.9,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-4.9,-11,30,30);
p.frameBounds = [rect];


(lib.more_games_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.more_games_2_img();
	this.instance.setTransform(-34.7,-22.8,0.868,0.868);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.7,-22.8,64.3,62.5);
p.frameBounds = [rect];


(lib.more_games_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.more_games_1_img();
	this.instance.setTransform(10.4,-6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10.4,-6.7,232,229);
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
	this.instance.setTransform(-140,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-75,280,150);
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


(lib.done_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.done_img();
	this.instance.setTransform(-100,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-55,200,110);
p.frameBounds = [rect];


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
	this.instance.setTransform(-100,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-55,200,110);
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
p.nominalBounds = rect = new cjs.Rectangle(-245,-245,490,490);
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

	// animation
	this.instance = new lib.preloader_5_tween("synched",0);
	this.instance.setTransform(10.8,0,0.011,0.011);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({_off:false},0).to({scaleX:1.83,scaleY:1.83,x:17.9},89,cjs.Ease.get(-1)).to({alpha:0},11,cjs.Ease.get(1)).wait(1));

	// animation
	this.instance_1 = new lib.preloader_5_tween("synched",0);
	this.instance_1.setTransform(10.8,0,0.011,0.011);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50).to({_off:false},0).to({scaleX:1.83,scaleY:1.83,x:17.9},89,cjs.Ease.get(-1)).to({alpha:0},11,cjs.Ease.get(1)).to({_off:true},1).wait(24));

	// animation
	this.instance_2 = new lib.preloader_5_tween("synched",0);
	this.instance_2.setTransform(10.8,0,0.011,0.011);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).to({scaleX:1.83,scaleY:1.83,x:17.9},89,cjs.Ease.get(-1)).to({alpha:0},11,cjs.Ease.get(1)).to({_off:true},1).wait(51));

	// animation
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

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.preloader_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnzErQh8AAhXhXQhZhZAAh7QAAh6BZhZQBXhXB8AAIPnAAQB8AABXBXQBZBZAAB6QAAB7hZBZQhXBXh8AAg");

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

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

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
	this.instance_2.setTransform(-450,-15);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:150,regY:15,x:0,y:0},99).wait(1));

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


(lib.title_navigation_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.totalPages_mc = new lib.numbers_2_mc();
	this.totalPages_mc.setTransform(25,0,0.7,0.7);

	this.currentPage_mc = new lib.numbers_1_mc();
	this.currentPage_mc.setTransform(-25,0,0.7,0.7);

	this.instance = new lib.numbers_separator_mc();
	this.instance.setTransform(0,0,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.currentPage_mc},{t:this.totalPages_mc}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-21,92,42);
p.frameBounds = [rect];


(lib.title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.title_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({y:-4},5).to({y:10},10).to({y:0},10).to({y:-5},5).to({y:10},10).to({y:0},10).wait(1));

	// animation
	this.instance_1 = new lib.title_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({y:5},5).to({y:-10},10).to({y:0},10).to({y:5},5).to({y:-10},10).to({y:0},10).wait(1));

	// graph
	this.instance_2 = new lib.title_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245,-95,490,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-245,-95.8,490,191.8), new cjs.Rectangle(-245,-96.6,490,193.6), new cjs.Rectangle(-245,-97.4,490,195.4), new cjs.Rectangle(-245,-98.2,490,197.2), new cjs.Rectangle(-245,-99,490,199), new cjs.Rectangle(-245,-97.6,490,196.1), new cjs.Rectangle(-245,-96.2,490,193.2), new cjs.Rectangle(-245,-95,490,190.5), new cjs.Rectangle(-245,-96,490,192.6), new cjs.Rectangle(-245,-97.5,490,195.5), new cjs.Rectangle(-245,-99,490,198.4), new cjs.Rectangle(-245,-100.5,490,201.3), new cjs.Rectangle(-245,-102,490,204.2), new cjs.Rectangle(-245,-103.5,490,207.1), new cjs.Rectangle(-245,-105,490,210), new cjs.Rectangle(-245,-104,490,208), new cjs.Rectangle(-245,-103,490,206), new cjs.Rectangle(-245,-102,490,204), new cjs.Rectangle(-245,-101,490,202), new cjs.Rectangle(-245,-100,490,200), new cjs.Rectangle(-245,-99,490,198), new cjs.Rectangle(-245,-98,490,196), new cjs.Rectangle(-245,-97,490,194), new cjs.Rectangle(-245,-96,490,192), new cjs.Rectangle(-245,-95,490,190), new cjs.Rectangle(-245,-96,490,192), new cjs.Rectangle(-245,-97,490,194), new cjs.Rectangle(-245,-98,490,196), new cjs.Rectangle(-245,-99,490,198), new cjs.Rectangle(-245,-100,490,200), new cjs.Rectangle(-245,-98.5,490,197), new cjs.Rectangle(-245,-97,490,194), new cjs.Rectangle(-245,-95.5,490,191), new cjs.Rectangle(-245,-96,490,192), new cjs.Rectangle(-245,-97.5,490,195), new cjs.Rectangle(-245,-99,490,198), new cjs.Rectangle(-245,-100.5,490,201), new cjs.Rectangle(-245,-102,490,204), new cjs.Rectangle(-245,-103.5,490,207), new cjs.Rectangle(-245,-105,490,210), new cjs.Rectangle(-245,-104,490,208), new cjs.Rectangle(-245,-103,490,206), new cjs.Rectangle(-245,-102,490,204), new cjs.Rectangle(-245,-101,490,202), new cjs.Rectangle(-245,-100,490,200), new cjs.Rectangle(-245,-99,490,198), new cjs.Rectangle(-245,-98,490,196), new cjs.Rectangle(-245,-97,490,194), new cjs.Rectangle(-245,-96,490,192), new cjs.Rectangle(-245,-95,490,190)];


(lib.substrate_option_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.substrate_option_0_mc();

	this.instance_1 = new lib.substrate_option_1_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect, rect];


(lib.shoes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.prev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
p.frameBounds = [rect];


(lib.ken_top8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_top_decor8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_top_base8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.7,-50.1,140,100.2);
p.frameBounds = [rect];


(lib.ken_top7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_top_decor7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_top_base7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.7,-48.6,95,94.4);
p.frameBounds = [rect];


(lib.ken_top6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_top_decor6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_top_base6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.2,-43.6,92.5,87.3);
p.frameBounds = [rect];


(lib.ken_top5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_top_decor5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_top_base5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-42.7,90.1,85.4);
p.frameBounds = [rect];


(lib.ken_top4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_top_decor4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_top_base4_mc();
	this.body_mc.setTransform(0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72,-47.7,144.1,95.4);
p.frameBounds = [rect];


(lib.ken_top3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_top_decor3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_top_base3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-48.1,108.1,96.3);
p.frameBounds = [rect];


(lib.ken_top2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_top_decor2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_top_base2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-58.3,-58.5,117,117);
p.frameBounds = [rect];


(lib.ken_top1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_top_decor1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_top_base1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.2,-51,92.4,102);
p.frameBounds = [rect];


(lib.ken_top_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.ken_top1_mc();
	this.body_1.setTransform(18.5,-190.2);

	this.body_2 = new lib.ken_top2_mc();
	this.body_2.setTransform(17.3,-179.1);

	this.body_3 = new lib.ken_top3_mc();
	this.body_3.setTransform(15.3,-192.1);

	this.body_4 = new lib.ken_top4_mc();
	this.body_4.setTransform(28.3,-190.4);

	this.body_5 = new lib.ken_top5_mc();
	this.body_5.setTransform(20.8,-186.8);

	this.body_6 = new lib.ken_top6_mc();
	this.body_6.setTransform(20.6,-186.3);

	this.body_7 = new lib.ken_top7_mc();
	this.body_7.setTransform(18.5,-183.3);

	this.body_8 = new lib.ken_top8_mc();
	this.body_8.setTransform(27.9,-193.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27.7,-241.2,92.4,102);
p.frameBounds = [rect, new cjs.Rectangle(-41,-237.6,117,117), new cjs.Rectangle(-38.7,-240.2,108.1,96.3), new cjs.Rectangle(-43.7,-238.1,144.1,95.4), new cjs.Rectangle(-24.2,-229.5,90.1,85.4), new cjs.Rectangle(-25.6,-229.9,92.4,87.3), new cjs.Rectangle(-30.2,-232,95,94.4), new cjs.Rectangle(-41.8,-244,140,100.2), null];


(lib.ken_shoes8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_shoes_decor8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_shoes_base8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.8,-24.5,122,49.1);
p.frameBounds = [rect];


(lib.ken_shoes7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_shoes_decor7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_shoes_base7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-69.1,-51.1,138.3,102.3);
p.frameBounds = [rect];


(lib.ken_shoes6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_shoes_decor6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_shoes_base6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.3,-22.6,121,45.3);
p.frameBounds = [rect];


(lib.ken_shoes5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_shoes_decor5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_shoes_base5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.9,-18.6,120,37.2);
p.frameBounds = [rect];


(lib.ken_shoes4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_shoes_decor4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_shoes_base4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.5,-31.2,131,63);
p.frameBounds = [rect];


(lib.ken_shoes3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_shoes_decor3_mc();
	this.instance.setTransform(0.4,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_shoes_base3_mc();
	this.body_mc.setTransform(0.4,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.9,-23,121,45.3);
p.frameBounds = [rect];


(lib.ken_shoes2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_shoes_decor2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_shoes_base2_mc();
	this.body_mc.setTransform(-0.9,8.4);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.3,-22.6,121,45.3);
p.frameBounds = [rect];


(lib.ken_shoes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_shoes_decor1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_shoes_base1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.3,-22.6,121,45.3);
p.frameBounds = [rect];


(lib.ken_shoes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.ken_shoes1_mc();

	this.body_2 = new lib.ken_shoes2_mc();

	this.body_3 = new lib.ken_shoes3_mc();
	this.body_3.setTransform(0.1,0,1,1,0,0,0,0.4,-0.4);

	this.body_4 = new lib.ken_shoes4_mc();
	this.body_4.setTransform(2,-2.1);

	this.body_5 = new lib.ken_shoes5_mc();
	this.body_5.setTransform(-0.2,8.7);

	this.body_6 = new lib.ken_shoes6_mc();

	this.body_7 = new lib.ken_shoes7_mc();
	this.body_7.setTransform(-2.3,-5.1);

	this.body_8 = new lib.ken_shoes8_mc();
	this.body_8.setTransform(-0.1,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.3,-22.6,121,45.3);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-63.5,-33.3,131,63), new cjs.Rectangle(-60.1,-9.9,120,37.2), new cjs.Rectangle(-60.3,-22.6,121,45.3), new cjs.Rectangle(-71.5,-56.2,138.3,102.3), new cjs.Rectangle(-61,-21.1,122,49.1), null];


(lib.ken_icon_top8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_top8_mc();
	this.instance.setTransform(1.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_top7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_top7_mc();
	this.instance.setTransform(-0.6,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_top6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_top6_mc();
	this.instance.setTransform(-1.6,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_top5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_top5_mc();
	this.instance.setTransform(-0.6,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_top4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_top4_mc();
	this.instance.setTransform(4.4,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_top3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_top3_mc();
	this.instance.setTransform(-1.6,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_top2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_top2_mc();
	this.instance.setTransform(0.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_top1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_top1_mc();
	this.instance.setTransform(1.4,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_shoes8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_shoes8_mc();
	this.instance.setTransform(2.4,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_shoes7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_shoes7_mc();
	this.instance.setTransform(0.4,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_shoes6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_shoes6_mc();
	this.instance.setTransform(2.4,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_shoes5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_shoes5_mc();
	this.instance.setTransform(2.4,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_shoes4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_shoes4_mc();
	this.instance.setTransform(2.4,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_shoes3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_shoes3_mc();
	this.instance.setTransform(1.4,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_shoes2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_shoes2_mc();
	this.instance.setTransform(1.4,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_shoes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_shoes1_mc();
	this.instance.setTransform(2.4,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_mouth8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.kl8_img();
	this.instance.setTransform(-15.8,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_mouth7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.kl7_img();
	this.instance.setTransform(-41.4,-10.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_mouth6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.kl6_img();
	this.instance.setTransform(-42.3,-16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_mouth5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.kl5_img();
	this.instance.setTransform(-43,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_mouth4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.kl4_img();
	this.instance.setTransform(-44,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_mouth3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.kl3_img();
	this.instance.setTransform(-42.9,-15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_mouth2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.kl2_img();
	this.instance.setTransform(-38.7,-8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_mouth1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.kl1_img();
	this.instance.setTransform(-19.2,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_glasses4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_glasses_4_mc();
	this.instance.setTransform(-4.6,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_glasses3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_glasses_3_mc();
	this.instance.setTransform(16.4,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_glasses2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_glasses_2_mc();
	this.instance.setTransform(-2.6,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_glasses1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_glasses_1_mc();
	this.instance.setTransform(-2.6,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_accessory_head4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_hat_4_mc();
	this.instance.setTransform(1.6,-5.4,0.6,0.6,0,0,0,1.5,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_accessory_head3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_hat_3_mc();
	this.instance.setTransform(2.6,-4.5,0.8,0.8,0,0,0,1.6,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_accessory_head2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_hat_2_mc();
	this.instance.setTransform(0.6,-4.4,0.6,0.6,0,0,0,1.5,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_accessory_head1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_hat_1_mc();
	this.instance.setTransform(3.6,-4.5,0.8,0.8,0,0,0,1.6,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_accessory_hand8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_hand8_mc();
	this.instance.setTransform(3,18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_accessory_hand7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_hand7_mc();
	this.instance.setTransform(1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_accessory_hand6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_hand6_mc();
	this.instance.setTransform(8,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_accessory_hand5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_hand5_mc();
	this.instance.setTransform(1.4,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_accessory_hand4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_hand4_mc();
	this.instance.setTransform(11.4,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_accessory_hand3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_hand3_mc();
	this.instance.setTransform(-2.6,5.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_accessory_hand2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_hand2_mc();
	this.instance.setTransform(1.4,4.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_accessory_hand1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_hand1_mc();
	this.instance.setTransform(15.9,2.1,1,1,0,0,0,11.5,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_hat_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.ken_hat_1_mc();
	this.instance.setTransform(185.3,-3.7);

	this.instance_1 = new lib.ken_hat_2_mc();
	this.instance_1.setTransform(186,-21.5);

	this.instance_2 = new lib.ken_hat_3_mc();
	this.instance_2.setTransform(179.7,2.5);

	this.instance_3 = new lib.ken_hat_4_mc();
	this.instance_3.setTransform(177,-18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(86.8,-50.2,197,93);
p.frameBounds = [rect, new cjs.Rectangle(49.3,-101.2,274,160), new cjs.Rectangle(85.5,-34,189,72), new cjs.Rectangle(60.7,-92.7,232,148), null];


(lib.ken_hand_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.ken_hand1_mc();
	this.instance.setTransform(11.5,0.7,1,1,0,0,0,11.5,0.7);

	this.instance_1 = new lib.ken_hand2_mc();
	this.instance_1.setTransform(-8,-1);

	this.instance_2 = new lib.ken_hand3_mc();
	this.instance_2.setTransform(-15,9);

	this.instance_3 = new lib.ken_hand4_mc();
	this.instance_3.setTransform(12.6,74.9);

	this.instance_4 = new lib.ken_hand5_mc();
	this.instance_4.setTransform(-7,51);

	this.instance_5 = new lib.ken_hand6_mc();
	this.instance_5.setTransform(4,8.1);

	this.instance_6 = new lib.ken_hand7_mc();
	this.instance_6.setTransform(-16.9,14);

	this.instance_7 = new lib.ken_hand8_mc();
	this.instance_7.setTransform(-22.1,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.5,-39,72,79);
p.frameBounds = [rect, new cjs.Rectangle(-28,-42.7,40,83), new cjs.Rectangle(-38,-35,55,86), new cjs.Rectangle(-16.1,17.2,58,116), new cjs.Rectangle(-66,16.8,118,68), new cjs.Rectangle(-47.2,-27.4,80,80), new cjs.Rectangle(-74.2,-42,113,108), new cjs.Rectangle(-52.9,-37.1,62,112), null];


(lib.ken_glasses_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.ken_glasses_1_mc();
	this.instance.setTransform(177,32.9);

	this.instance_1 = new lib.ken_glasses_2_mc();
	this.instance_1.setTransform(177.9,37.1);

	this.instance_2 = new lib.ken_glasses_3_mc();
	this.instance_2.setTransform(196.9,32.7);

	this.instance_3 = new lib.ken_glasses_4_mc();
	this.instance_3.setTransform(176.5,32.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(96.3,9.8,161,46);
p.frameBounds = [rect, new cjs.Rectangle(96.8,10.4,162,54), new cjs.Rectangle(94.3,6.2,172,53), new cjs.Rectangle(97.7,6.1,158,52), null];


(lib.ken_fringe12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_fringe_decor12_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_fringe_base12_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-133.6,-104.6,267.2,209.4);
p.frameBounds = [rect];


(lib.ken_fringe11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_fringe_decor11_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_fringe_base11_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-113.6,-103.6,227.3,207.3);
p.frameBounds = [rect];


(lib.ken_fringe10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_fringe_decor10_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_fringe_base10_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106.5,-87.7,213,176);
p.frameBounds = [rect];


(lib.ken_fringe9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_fringe_decor9_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_fringe_base9_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111,-89.3,222.1,179);
p.frameBounds = [rect];


(lib.ken_fringe8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_fringe_decor8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_fringe_base8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-105.3,-87,211,174.1);
p.frameBounds = [rect];


(lib.ken_fringe7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_fringe_decor7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_fringe_base7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117.6,-104.1,235.2,208.2);
p.frameBounds = [rect];


(lib.ken_fringe6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_fringe_decor6_mc();
	this.instance.setTransform(-1.2,-2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_fringe_base6_mc();
	this.body_mc.setTransform(-1.2,-2.4);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116.4,-112.1,230.5,219.4);
p.frameBounds = [rect];


(lib.ken_fringe5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_fringe_decor5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_fringe_base5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-137.1,-103,274.2,206.2);
p.frameBounds = [rect];


(lib.ken_fringe4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_fringe_decor4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_fringe_base4_mc();
	this.body_mc.setTransform(0,-22);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108.6,-105.8,217.4,212);
p.frameBounds = [rect];


(lib.ken_fringe3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_fringe_decor3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_fringe_base3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.5,-76.3,187,153);
p.frameBounds = [rect];


(lib.ken_fringe2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_fringe_decor2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_fringe_base2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.3,-91.4,215,183);
p.frameBounds = [rect];


(lib.ken_fringe1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_fringe_decor1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_fringe_base1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.2,-80.1,186.4,160.2);
p.frameBounds = [rect];


(lib.ken_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.ken_fringe1_mc();

	this.body_2 = new lib.ken_fringe2_mc();
	this.body_2.setTransform(-3.9,-12.4);

	this.body_3 = new lib.ken_fringe3_mc();
	this.body_3.setTransform(8,-6.6);

	this.body_4 = new lib.ken_fringe4_mc();
	this.body_4.setTransform(5,17.4);

	this.body_5 = new lib.ken_fringe5_mc();
	this.body_5.setTransform(-7,10.3);

	this.body_6 = new lib.ken_fringe6_mc();
	this.body_6.setTransform(9.9,34.4);

	this.body_7 = new lib.ken_fringe7_mc();
	this.body_7.setTransform(0.8,25.2);

	this.body_8 = new lib.ken_fringe8_mc();
	this.body_8.setTransform(-0.6,0.7);

	this.body_9 = new lib.ken_fringe9_mc();
	this.body_9.setTransform(0.3,4.7);

	this.body_10 = new lib.ken_fringe10_mc();
	this.body_10.setTransform(-8.6,-1.1);

	this.body_11 = new lib.ken_fringe11_mc();
	this.body_11.setTransform(-5.3,4.3);

	this.body_12 = new lib.ken_fringe12_mc();
	this.body_12.setTransform(-3.8,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[{t:this.body_9}]},1).to({state:[{t:this.body_10}]},1).to({state:[{t:this.body_11}]},1).to({state:[{t:this.body_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.2,-80.1,186.4,160.2);
p.frameBounds = [rect, new cjs.Rectangle(-111.3,-103.8,215,183), new cjs.Rectangle(-85.5,-82.9,187,153), new cjs.Rectangle(-103.6,-88.4,217.4,212), new cjs.Rectangle(-144.1,-92.7,274.2,206.2), new cjs.Rectangle(-106.5,-77.7,230.5,219.4), new cjs.Rectangle(-116.8,-78.9,235.2,208.2), new cjs.Rectangle(-105.9,-86.3,211,174.1), new cjs.Rectangle(-110.8,-84.6,222.1,179), new cjs.Rectangle(-115.1,-88.8,213,176), new cjs.Rectangle(-118.9,-99.3,227.3,207.3), new cjs.Rectangle(-137.4,-83.8,267.2,209.4)];


(lib.ken_eyes8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_eyes_decor8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_eyes_base8_mc();
	this.body_mc.setTransform(3.1,1.9);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.9,-14.7,114,29);
p.frameBounds = [rect];


(lib.ken_eyes7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_eyes_decor7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_eyes_base7_mc();
	this.body_mc.setTransform(0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.5,-16.8,101,34);
p.frameBounds = [rect];


(lib.ken_eyes6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_eyes_decor6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_eyes_base6_mc();
	this.body_mc.setTransform(1.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.4,-17.9,101,36);
p.frameBounds = [rect];


(lib.ken_eyes5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_eyes_decor5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_eyes_base5_mc();
	this.body_mc.setTransform(1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-48.1,-17.7,96,36);
p.frameBounds = [rect];


(lib.ken_eyes4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_eyes_decor4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_eyes_base4_mc();
	this.body_mc.setTransform(0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.3,-17.1,103,34);
p.frameBounds = [rect];


(lib.ken_eyes3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_eyes_decor3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_eyes_base3_mc();
	this.body_mc.setTransform(2.8,2.1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.3,-10.4,111,21);
p.frameBounds = [rect];


(lib.ken_eyes2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_eyes_decor2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_eyes_base2_mc();
	this.body_mc.setTransform(1.4,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-13.6,99,27);
p.frameBounds = [rect];


(lib.ken_eyes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_eyes_decor1_mc();
	this.instance.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_eyes_base1_mc();
	this.body_mc.setTransform(-31.1,4.8);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.1,-18.9,112,38);
p.frameBounds = [rect];


(lib.ken_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.ken_eyes1_mc();

	this.body_2 = new lib.ken_eyes2_mc();
	this.body_2.setTransform(2,0.1);

	this.body_3 = new lib.ken_eyes3_mc();
	this.body_3.setTransform(2.3,-1.8);

	this.body_4 = new lib.ken_eyes4_mc();
	this.body_4.setTransform(2.2,3.3);

	this.body_5 = new lib.ken_eyes5_mc();
	this.body_5.setTransform(3.8,3.8);

	this.body_6 = new lib.ken_eyes6_mc();
	this.body_6.setTransform(3.4,4.2);

	this.body_7 = new lib.ken_eyes7_mc();
	this.body_7.setTransform(3.1,2.9);

	this.body_8 = new lib.ken_eyes8_mc();
	this.body_8.setTransform(0.6,-2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.1,-18.9,112,38);
p.frameBounds = [rect, new cjs.Rectangle(-47.5,-13.6,99,27), new cjs.Rectangle(-53.1,-12.2,111,21), new cjs.Rectangle(-49.1,-13.8,103,34), new cjs.Rectangle(-44.3,-14,96,36), new cjs.Rectangle(-47,-13.7,101,36), new cjs.Rectangle(-47.5,-14,101,34), new cjs.Rectangle(-56.4,-17.2,114,29)];


(lib.ken_dress8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_dress_decor8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_dress_base8_mc();
	this.body_mc.setTransform(-15.7,41.6);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77,-115,154,230.1);
p.frameBounds = [rect];


(lib.ken_dress7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_dress_decor7_mc();
	this.instance.setTransform(0,-0.4,1,1,0,0,0,0,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_dress_base7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.2,-115,153,230.1);
p.frameBounds = [rect];


(lib.ken_dress6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_dress_decor6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_dress_base6_mc();
	this.body_mc.setTransform(-7.7,-72.8);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77,-115,154,230);
p.frameBounds = [rect];


(lib.ken_dress5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_dress_decor5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_dress_base5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77.5,-114.8,155,230);
p.frameBounds = [rect];


(lib.ken_dress4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_dress_decor4_mc();
	this.instance.setTransform(0,-0.4,1,1,0,0,0,0,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_dress_base4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-77,-115,154.1,230.1);
p.frameBounds = [rect];


(lib.ken_dress3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_dress_decor3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_dress_base3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.7,-117.9,152,236);
p.frameBounds = [rect];


(lib.ken_dress2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_dress_decor2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_dress_base2_mc();
	this.body_mc.setTransform(-14.5,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-66.2,-81.3,132,163);
p.frameBounds = [rect];


(lib.ken_dress1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_dress_decor1_mc();
	this.instance.setTransform(0,-0.4,1,1,0,0,0,0,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_dress_base1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.2,-115,153,230.1);
p.frameBounds = [rect];


(lib.ken_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.ken_dress1_mc();
	this.body_1.setTransform(20.9,-119.9,1,1,0,0,0,0,-0.4);

	this.body_2 = new lib.ken_dress2_mc();
	this.body_2.setTransform(30,-152.9);

	this.body_3 = new lib.ken_dress3_mc();
	this.body_3.setTransform(21.2,-116.6);

	this.body_4 = new lib.ken_dress4_mc();
	this.body_4.setTransform(21.7,-119.9,1,1,0,0,0,0,-0.4);

	this.body_5 = new lib.ken_dress5_mc();
	this.body_5.setTransform(22.2,-119.8);

	this.body_6 = new lib.ken_dress6_mc();
	this.body_6.setTransform(21.7,-119.5);

	this.body_7 = new lib.ken_dress7_mc();
	this.body_7.setTransform(20.9,-119.9,1,1,0,0,0,0,-0.4);

	this.body_8 = new lib.ken_dress8_mc();
	this.body_8.setTransform(21.7,-119.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.3,-234.6,153,230.1);
p.frameBounds = [rect, new cjs.Rectangle(-36.2,-234.2,132,163), new cjs.Rectangle(-54.6,-234.6,152,236), new cjs.Rectangle(-55.3,-234.6,154.1,230.1), new cjs.Rectangle(-55.3,-234.6,155,230), new cjs.Rectangle(-55.3,-234.6,154,230), new cjs.Rectangle(-55.3,-234.6,153,230.1), new cjs.Rectangle(-55.3,-234.6,154,230.1), null];


(lib.ken_bottom8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_bottom_decor8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_bottom_base8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.9,-41.9,100,84);
p.frameBounds = [rect];


(lib.ken_bottom7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_bottom_decor7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_bottom_base7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-47.7,-34.2,96,69);
p.frameBounds = [rect];


(lib.ken_bottom6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_bottom_decor6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_bottom_base6_mc();
	this.body_mc.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.8,-29.3,102,59);
p.frameBounds = [rect];


(lib.ken_bottom5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_bottom_decor5_mc();
	this.instance.setTransform(0,0,1,1,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_bottom_base5_mc();
	this.body_mc.setTransform(0,4.2);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.9,-76.7,124,153.4);
p.frameBounds = [rect];


(lib.ken_bottom4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_bottom_decor4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_bottom_base4_mc();
	this.body_mc.setTransform(10.8,-66.7);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.9,-76.7,124,153);
p.frameBounds = [rect];


(lib.ken_bottom3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_bottom_decor3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_bottom_base3_mc();
	this.body_mc.setTransform(0,5.1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56.9,-45.1,114,90.2);
p.frameBounds = [rect];


(lib.ken_bottom2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_bottom_decor2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_bottom_base2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.9,-41.9,100,84);
p.frameBounds = [rect];


(lib.ken_bottom1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_bottom_decor1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_bottom_base1_mc();
	this.body_mc.setTransform(0,7.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63,-76.7,126,153.4);
p.frameBounds = [rect];


(lib.ken_bottom_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.ken_bottom1_mc();
	this.body_1.setTransform(5.8,-81.9);

	this.body_2 = new lib.ken_bottom2_mc();
	this.body_2.setTransform(14.3,-115.6);

	this.body_3 = new lib.ken_bottom3_mc();
	this.body_3.setTransform(11.7,-109.5);

	this.body_4 = new lib.ken_bottom4_mc();
	this.body_4.setTransform(7.2,-77.4);

	this.body_5 = new lib.ken_bottom5_mc();
	this.body_5.setTransform(7.2,-77.4);

	this.body_6 = new lib.ken_bottom6_mc();
	this.body_6.setTransform(15.6,-124.3);

	this.body_7 = new lib.ken_bottom7_mc();
	this.body_7.setTransform(13.5,-119.8);

	this.body_8 = new lib.ken_bottom8_mc();
	this.body_8.setTransform(14.3,-115.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57.2,-158.6,126,153.4);
p.frameBounds = [rect, new cjs.Rectangle(-35.6,-157.6,100,84), new cjs.Rectangle(-45.2,-154.6,114,90.1), new cjs.Rectangle(-54.7,-154.1,124,153), new cjs.Rectangle(-54.7,-154.1,124,153.4), new cjs.Rectangle(-35.2,-153.6,102,59), new cjs.Rectangle(-34.2,-154.1,96,69), new cjs.Rectangle(-35.6,-157.6,100,84), null];


(lib.jewelry_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.icon_mouth8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.bl8_img();
	this.instance.setTransform(-40,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_mouth7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.bl7_img();
	this.instance.setTransform(-42.6,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_mouth6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.bl6_img();
	this.instance.setTransform(-38,-14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_mouth5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.bl5_img();
	this.instance.setTransform(-22.5,-14.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_mouth4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.bl4_img();
	this.instance.setTransform(-35.8,-9.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_mouth3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.bl3_img();
	this.instance.setTransform(-27.6,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_mouth2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.bl2_img();
	this.instance.setTransform(-26.8,-16.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_mouth1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.bl1_img();
	this.instance.setTransform(-26,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_glasses4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_glasses4_mc();
	this.instance.setTransform(-0.5,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_glasses3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_glasses3_mc();
	this.instance.setTransform(-0.5,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_glasses2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_glasses2_mc();
	this.instance.setTransform(-0.5,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_glasses1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_glasses1_mc();
	this.instance.setTransform(-0.5,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_background_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.icon_background_8_img();
	this.instance.setTransform(-87,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_background_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.icon_background_7_img();
	this.instance.setTransform(-87,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_background_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.icon_background_6_img();
	this.instance.setTransform(-87,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_background_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.icon_background_5_img();
	this.instance.setTransform(-87,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_background_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.icon_background_4_img();
	this.instance.setTransform(-87,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_background_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.icon_background_3_img();
	this.instance.setTransform(-87,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_background_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.icon_background_2_img();
	this.instance.setTransform(-87,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_background_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.icon_background_1_img();
	this.instance.setTransform(-87,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_head8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_hat8_mc();
	this.instance.setTransform(1,1,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_head7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_hat7_mc();
	this.instance.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_head6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_hat6_mc();
	this.instance.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_head5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_hat5_mc();
	this.instance.setTransform(1,1,0.6,0.606);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_head4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_hat4_mc();
	this.instance.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_head3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_hat3_mc();
	this.instance.setTransform(1,1,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_head2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_hat_2_mc();
	this.instance.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_head1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_hat_1_mc();
	this.instance.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_hand8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_bag8_mc();
	this.instance.setTransform(0.1,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_hand7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_bag7_mc();
	this.instance.setTransform(2.1,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_hand6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_bag6_mc();
	this.instance.setTransform(-4.9,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_hand5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_bag5_mc();
	this.instance.setTransform(-1.9,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_hand4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_bag4_mc();
	this.instance.setTransform(2.1,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_hand3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_bag3_mc();
	this.instance.setTransform(2.1,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_hand2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_bag2_mc();
	this.instance.setTransform(-1.9,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_accessory_hand1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_bag1_mc();
	this.instance.setTransform(2.1,3,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.headdress_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.check_subcategory_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body_check_subcategory_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect, rect];


(lib.check_category_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body_check_category_mc();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-55,80,110);
p.frameBounds = [rect, rect];


(lib.category_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_category_10_img();
	this.instance.setTransform(-26,-41,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-55,80,110);
p.frameBounds = [rect];


(lib.category_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_category_9_img();
	this.instance.setTransform(-26,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-55,80,110);
p.frameBounds = [rect];


(lib.category_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_category_8_img();
	this.instance.setTransform(-26,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-55,80,110);
p.frameBounds = [rect];


(lib.category_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_category_7_img();
	this.instance.setTransform(-19,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-55,80,110);
p.frameBounds = [rect];


(lib.category_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_category_6_img();
	this.instance.setTransform(-11,-43,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-55,80,110);
p.frameBounds = [rect];


(lib.category_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_category_5_img();
	this.instance.setTransform(-26,-41,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-55,80,110);
p.frameBounds = [rect];


(lib.category_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_category_4_img();
	this.instance.setTransform(-26,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-55,80,110);
p.frameBounds = [rect];


(lib.category_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 6
	this.instance = new lib.icon_category_3_img();
	this.instance.setTransform(-26,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-55,80,110);
p.frameBounds = [rect];


(lib.category_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_category_2_img();
	this.instance.setTransform(-19,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-55,80,110);
p.frameBounds = [rect];


(lib.category_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 7
	this.instance = new lib.icon_category_1_img();
	this.instance.setTransform(-11,-43,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_category_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-55,80,110);
p.frameBounds = [rect];


(lib.body_1_ken_boby_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.ken_boby_decor_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.ken_boby_base_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.2,-223.5,173,445.9);
p.frameBounds = [rect];


(lib.body_1_barbie_body_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_body_decor_mc();
	this.instance.setTransform(0,-72.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_body_base_mc();
	this.body_mc.setTransform(0,-72.1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.8,-289.5,172,434.5);
p.frameBounds = [rect];


(lib.barbie_top8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_top_decor8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_top_base8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36.1,-41.1,72.2,82.3);
p.frameBounds = [rect];


(lib.barbie_top7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_top_decor7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_top_base7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.3,-29.4,65,59);
p.frameBounds = [rect];


(lib.barbie_top6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_top_decor6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_top_base6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.4,-58.9,137,118);
p.frameBounds = [rect];


(lib.barbie_top5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_top_decor5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_top_base5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.1,-26.5,60.3,53.1);
p.frameBounds = [rect];


(lib.barbie_top4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_top_decor4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_top_base4_mc();
	this.body_mc.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74,-60,148.1,120);
p.frameBounds = [rect];


(lib.barbie_top3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_top_decor3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_top_base3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.4,-28.6,93,57.3);
p.frameBounds = [rect];


(lib.barbie_top2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_top_decor2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_top_base2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-32.3,60,65);
p.frameBounds = [rect];


(lib.barbie_top1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_top_decor1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_top_base1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.9,-56.3,136,113);
p.frameBounds = [rect];


(lib.barbie_top_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.barbie_top1_mc();
	this.body_1.setTransform(0,-19.7);

	this.body_2 = new lib.barbie_top2_mc();
	this.body_2.setTransform(-8.7,-40.8);

	this.body_3 = new lib.barbie_top3_mc();
	this.body_3.setTransform(-1.3,-22.6);

	this.body_4 = new lib.barbie_top4_mc();
	this.body_4.setTransform(-12.2,-9.7);

	this.body_5 = new lib.barbie_top5_mc();
	this.body_5.setTransform(-8.6,-19.3);

	this.body_6 = new lib.barbie_top6_mc();
	this.body_6.setTransform(-0.5,-20.7);

	this.body_7 = new lib.barbie_top7_mc();
	this.body_7.setTransform(-6.4,-40.4);

	this.body_8 = new lib.barbie_top8_mc();
	this.body_8.setTransform(-5.4,-29.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.9,-76,136,113);
p.frameBounds = [rect, new cjs.Rectangle(-38.7,-73.2,60,65), new cjs.Rectangle(-47.7,-51.2,93,57.3), new cjs.Rectangle(-86.2,-69.7,148.1,120), new cjs.Rectangle(-38.7,-45.8,60.3,53.1), new cjs.Rectangle(-68.9,-79.6,137,118), new cjs.Rectangle(-38.7,-69.8,65,59), new cjs.Rectangle(-41.5,-70.8,72.2,82.3), null];


(lib.barbie_shoes8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_shoes_decor8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_shoes_base8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.2,-32.9,104.4,66);
p.frameBounds = [rect];


(lib.barbie_shoes7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_shoes_decor7_mc();
	this.instance.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_shoes_base7_mc();
	this.body_mc.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-43.2,110.1,87);
p.frameBounds = [rect];


(lib.barbie_shoes6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_shoes_decor6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_shoes_base6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-24.3,99.2,62);
p.frameBounds = [rect];


(lib.barbie_shoes5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_shoes_decor5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_shoes_base5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.6,-54.4,111.4,109);
p.frameBounds = [rect];


(lib.barbie_shoes4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_shoes_decor4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_shoes_base4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.6,-51.9,105.3,104);
p.frameBounds = [rect];


(lib.barbie_shoes3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_shoes_decor3_mc();
	this.instance.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_shoes_base3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.1,-47.2,118.3,94.4);
p.frameBounds = [rect];


(lib.barbie_shoes2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_shoes_decor2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_shoes_base2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68,-36.9,118,76.1);
p.frameBounds = [rect];


(lib.barbie_shoes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_shoes_decor1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_shoes_base1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-28.6,100,57.4);
p.frameBounds = [rect];


(lib.barbie_shoes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.barbie_shoes1_mc();
	this.body_1.setTransform(18.4,178.1);

	this.body_2 = new lib.barbie_shoes2_mc();
	this.body_2.setTransform(18.5,171.1);

	this.body_3 = new lib.barbie_shoes3_mc();
	this.body_3.setTransform(10.9,164.5);

	this.body_4 = new lib.barbie_shoes4_mc();
	this.body_4.setTransform(15.2,155.4);

	this.body_5 = new lib.barbie_shoes5_mc();
	this.body_5.setTransform(17.9,166.2);

	this.body_6 = new lib.barbie_shoes6_mc();
	this.body_6.setTransform(18.5,171.1);

	this.body_7 = new lib.barbie_shoes7_mc();
	this.body_7.setTransform(15.8,170.7);

	this.body_8 = new lib.barbie_shoes8_mc();
	this.body_8.setTransform(17.7,175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.6,149.5,100,57.4);
p.frameBounds = [rect, new cjs.Rectangle(-49.6,134.2,118,76.1), new cjs.Rectangle(-48.2,117.3,118.3,94.4), new cjs.Rectangle(-37.4,103.5,105.3,104), new cjs.Rectangle(-37.7,111.8,111.4,109), new cjs.Rectangle(-31.1,146.8,99.2,62), new cjs.Rectangle(-39.2,127.5,110.1,87), new cjs.Rectangle(-34.5,142,104.4,66), null];


(lib.barbie_lips_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.barbie_lips1_mc();

	this.instance_1 = new lib.barbie_lips2_mc();
	this.instance_1.setTransform(-0.2,-0.2);

	this.instance_2 = new lib.barbie_lips3_mc();
	this.instance_2.setTransform(-0.9,-0.8);

	this.instance_3 = new lib.barbie_lips4_mc();
	this.instance_3.setTransform(-0.6,-1.2);

	this.instance_4 = new lib.barbie_lips5_mc();
	this.instance_4.setTransform(-1.2,-0.3);

	this.instance_5 = new lib.barbie_lips6_mc();
	this.instance_5.setTransform(0.3,-0.2);

	this.instance_6 = new lib.barbie_lips7_mc();
	this.instance_6.setTransform(-0.6,0);

	this.instance_7 = new lib.barbie_lips8_mc();
	this.instance_7.setTransform(-1.8,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.5,-4.8,25,10);
p.frameBounds = [rect, new cjs.Rectangle(-13.3,-10,26,19), new cjs.Rectangle(-14.4,-9.9,27,18), new cjs.Rectangle(-18.2,-7.6,35,13), new cjs.Rectangle(-12.1,-9.4,22,18), new cjs.Rectangle(-18.4,-9,38,18), new cjs.Rectangle(-21.6,-10.5,42,21), new cjs.Rectangle(-21.7,-9.1,40,17)];


(lib.barbie_hat_all2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.barbie_hat3_mc();
	this.instance.setTransform(221.3,27.3);

	this.instance_1 = new lib.barbie_hat5_mc();
	this.instance_1.setTransform(218.3,39.7,1,1,0,0,0,0,-0.1);

	this.instance_2 = new lib.barbie_hat8_mc();
	this.instance_2.setTransform(221.3,27.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(108.8,-56.2,225,167), new cjs.Rectangle(92.4,-72.7,252,225), new cjs.Rectangle(108.8,-56.2,225,167), null];


(lib.barbie_hat_all1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.barbie_hat_1_mc();
	this.instance.setTransform(217.6,5.7);

	this.instance_1 = new lib.barbie_hat_2_mc();
	this.instance_1.setTransform(218.1,9);

	this.instance_2 = new lib.barbie_hat4_mc();
	this.instance_2.setTransform(223.8,-12.2);

	this.instance_3 = new lib.barbie_hat6_mc();
	this.instance_3.setTransform(215.4,-23.3);

	this.instance_4 = new lib.barbie_hat7_mc();
	this.instance_4.setTransform(214.2,-7.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(140.5,-33.3,154,78);
p.frameBounds = [rect, new cjs.Rectangle(148.1,-30,140,78), new cjs.Rectangle(156.9,-46.1,134,68), new cjs.Rectangle(134.9,-65.4,161,84), new cjs.Rectangle(129.8,-46.8,169,79), rect=null, rect, rect, rect];


(lib.barbie_hair_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_hair_decor12_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_hair_base12_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.2,-161.3,209,323);
p.frameBounds = [rect];


(lib.barbie_hair_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_hair_decor11_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_hair_base11_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-93.2,-153.1,187,306.3);
p.frameBounds = [rect];


(lib.barbie_hair_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_hair_decor10_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_hair_base10_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.2,-222.2,361,445);
p.frameBounds = [rect];


(lib.barbie_hair_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_hair_decor9_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_hair_base9_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-214.4,-203.7,429,408);
p.frameBounds = [rect];


(lib.barbie_hair_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_hair_decor8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_hair_base8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-202.2,-182,405,364.1);
p.frameBounds = [rect];


(lib.barbie_hair_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_hair_decor7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_hair_base7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-162.2,-223.6,325,447.4);
p.frameBounds = [rect];


(lib.barbie_hair_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_hair_decor6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_hair_base6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-108.5,290,217.1);
p.frameBounds = [rect];


(lib.barbie_hair_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_hair_decor5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_hair_base5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.2,-152.2,203,304.4);
p.frameBounds = [rect];


(lib.barbie_hair_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_hair_decor4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_hair_base4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.2,-89,178.4,178);
p.frameBounds = [rect];


(lib.barbie_hair_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_hair_decor3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_hair_base3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-59.9,-97.5,120,195);
p.frameBounds = [rect];


(lib.barbie_hair_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_hair_decor2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_hair_base2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-124.2,-211.5,248.5,423);
p.frameBounds = [rect];


(lib.barbie_hair_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_hair_decor1_mc();
	this.instance.setTransform(10.9,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_hair_base1_mc();
	this.body_mc.setTransform(10.9,0.1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.2,-108.8,200.2,218);
p.frameBounds = [rect];


(lib.barbie_glasses_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.barbie_glasses1_mc();
	this.instance.setTransform(180.3,52);

	this.instance_1 = new lib.barbie_glasses2_mc();
	this.instance_1.setTransform(180.3,54.9);

	this.instance_2 = new lib.barbie_glasses3_mc();
	this.instance_2.setTransform(179.8,55.2);

	this.instance_3 = new lib.barbie_glasses4_mc();
	this.instance_3.setTransform(179.7,56.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(110.2,32.1,140,40);
p.frameBounds = [rect, new cjs.Rectangle(119.7,26.8,121,56), new cjs.Rectangle(106.6,28.1,147,54), new cjs.Rectangle(107.9,33.8,144,45), null];


(lib.barbie_fringe12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_fringe_decor12_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_fringe_base12_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.2,-146.3,203,293);
p.frameBounds = [rect];


(lib.barbie_fringe11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_fringe_decor11_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_fringe_base11_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90.7,-132.7,182,266);
p.frameBounds = [rect];


(lib.barbie_fringe10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_fringe_decor10_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_fringe_base10_mc();
	this.body_mc.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.2,-57.2,145,114.4);
p.frameBounds = [rect];


(lib.barbie_fringe9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_fringe_decor9_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_fringe_base9_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-94.2,-114,188.4,228);
p.frameBounds = [rect];


(lib.barbie_fringe8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_fringe_decor8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_fringe_base8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-106,-67.2,212,135);
p.frameBounds = [rect];


(lib.barbie_fringe7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_fringe_decor7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_fringe_base7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71.4,-53.7,143,108);
p.frameBounds = [rect];


(lib.barbie_fringe6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_fringe_decor6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_fringe_base6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-77.7,184,155.4);
p.frameBounds = [rect];


(lib.barbie_fringe5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_fringe_decor5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_fringe_base5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89,-125.7,178,252);
p.frameBounds = [rect];


(lib.barbie_fringe4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_fringe_decor4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_fringe_base4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.6,-109.7,173.4,220);
p.frameBounds = [rect];


(lib.barbie_fringe3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_fringe_decor3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_fringe_base3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-74.8,-56,150,112);
p.frameBounds = [rect];


(lib.barbie_fringe2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_fringe_decor2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_fringe_base2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.2,-118,173,236.1);
p.frameBounds = [rect];


(lib.barbie_fringe1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_fringe_decor1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_fringe_base1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.2,-114.2,222.4,229);
p.frameBounds = [rect];


(lib.barbie_fringe_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.barbie_fringe1_mc();

	this.body_2 = new lib.barbie_fringe2_mc();
	this.body_2.setTransform(5,-3.2);

	this.body_3 = new lib.barbie_fringe3_mc();
	this.body_3.setTransform(-1,-34.2);

	this.body_4 = new lib.barbie_fringe4_mc();
	this.body_4.setTransform(0.9,-35.5);

	this.body_5 = new lib.barbie_fringe5_mc();
	this.body_5.setTransform(5.8,25.5);

	this.body_6 = new lib.barbie_fringe6_mc();
	this.body_6.setTransform(-0.2,-20.7);

	this.body_7 = new lib.barbie_fringe7_mc();
	this.body_7.setTransform(-0.9,-38);

	this.body_8 = new lib.barbie_fringe8_mc();
	this.body_8.setTransform(-1.2,-30);

	this.body_9 = new lib.barbie_fringe9_mc();
	this.body_9.setTransform(-2.9,-10.7);

	this.body_10 = new lib.barbie_fringe10_mc();
	this.body_10.setTransform(-0.9,-39.9);

	this.body_11 = new lib.barbie_fringe11_mc();
	this.body_11.setTransform(-10,39);

	this.body_12 = new lib.barbie_fringe12_mc();
	this.body_12.setTransform(-5,50.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[{t:this.body_9}]},1).to({state:[{t:this.body_10}]},1).to({state:[{t:this.body_11}]},1).to({state:[{t:this.body_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.2,-114.2,222.4,229);
p.frameBounds = [rect, new cjs.Rectangle(-81.2,-121.2,173,236.1), new cjs.Rectangle(-75.8,-90.2,150,112), new cjs.Rectangle(-85.7,-145.2,173.4,220), new cjs.Rectangle(-83.2,-100.2,178,252), new cjs.Rectangle(-92.2,-98.4,184,155.4), new cjs.Rectangle(-72.4,-91.7,143,108), new cjs.Rectangle(-107.2,-97.2,212,135), new cjs.Rectangle(-97.1,-124.7,188.4,228), new cjs.Rectangle(-73.2,-97.1,145,114.4), new cjs.Rectangle(-100.7,-93.8,182,266), new cjs.Rectangle(-106.2,-96,203,293)];


(lib.barbie_eyes8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_eyes_decor8_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_eyes_base8_mc();
	this.body_mc.setTransform(0,2.8);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67,-19.6,134,39);
p.frameBounds = [rect];


(lib.barbie_eyes7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_eyes_decor7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_eyes_base7_mc();
	this.body_mc.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60.6,-14.2,121,29);
p.frameBounds = [rect];


(lib.barbie_eyes6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_eyes_decor6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_eyes_base6_mc();
	this.body_mc.setTransform(0,2.9);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.6,-19.7,125,40);
p.frameBounds = [rect];


(lib.barbie_eyes5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_eyes_decor5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_eyes_base5_mc();
	this.body_mc.setTransform(0,4.6);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-67.6,-16.1,135,32);
p.frameBounds = [rect];


(lib.barbie_eyes4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_eyes_decor4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_eyes_base4_mc();
	this.body_mc.setTransform(0,4.6);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.4,-20.4,103,41);
p.frameBounds = [rect];


(lib.barbie_eyes3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_eyes_decor3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_eyes_base3_mc();
	this.body_mc.setTransform(-0.4,2.1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.9,-18,106,36);
p.frameBounds = [rect];


(lib.barbie_eyes2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_eyes_decor2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_eyes_base2_mc();
	this.body_mc.setTransform(0,1.6);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.7,-18.6,137,37);
p.frameBounds = [rect];


(lib.barbie_eyes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_eyes_decor1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_eyes_base1_mc();
	this.body_mc.setTransform(0,2.7);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.3,-15.3,123,31);
p.frameBounds = [rect];


(lib.barbie_eyes_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.barbie_eyes1_mc();

	this.body_2 = new lib.barbie_eyes2_mc();
	this.body_2.setTransform(0.6,3.3);

	this.body_3 = new lib.barbie_eyes3_mc();
	this.body_3.setTransform(0.5,6.1);

	this.body_4 = new lib.barbie_eyes4_mc();
	this.body_4.setTransform(-0.5,1.1);

	this.body_5 = new lib.barbie_eyes5_mc();
	this.body_5.setTransform(0.3,1.2);

	this.body_6 = new lib.barbie_eyes6_mc();
	this.body_6.setTransform(-0.4,5.4);

	this.body_7 = new lib.barbie_eyes7_mc();
	this.body_7.setTransform(0.3,3.1);

	this.body_8 = new lib.barbie_eyes8_mc();
	this.body_8.setTransform(-0.3,4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.3,-15.3,123,31);
p.frameBounds = [rect, new cjs.Rectangle(-68.1,-15.4,137,37), new cjs.Rectangle(-52.5,-12,106,36), new cjs.Rectangle(-52,-19.3,103,41), new cjs.Rectangle(-67.3,-14.9,135,32), new cjs.Rectangle(-63,-14.4,125,40), new cjs.Rectangle(-60.4,-11.1,121,29), new cjs.Rectangle(-67.3,-15.2,134,39)];


(lib.barbie_dress8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_dress_decor8_mc();
	this.instance.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_dress_base8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.6,-126.4,123.3,253);
p.frameBounds = [rect];


(lib.barbie_dress7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_dress_decor7_mc();
	this.instance.setTransform(0,3.9,1,1,0,0,0,0,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_dress_base7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-83.5,-106.4,167.1,221);
p.frameBounds = [rect];


(lib.barbie_dress6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_dress_decor6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_dress_base6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-68.1,-86.8,136.4,174);
p.frameBounds = [rect];


(lib.barbie_dress5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_dress_decor5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_dress_base5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51.5,-127.7,103.2,256);
p.frameBounds = [rect];


(lib.barbie_dress4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_dress_decor4_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_dress_base4_mc();
	this.body_mc.setTransform(0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-79.9,-88.7,160.1,178);
p.frameBounds = [rect];


(lib.barbie_dress3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_dress_decor3_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_dress_base3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-71,-77.8,142.1,156);
p.frameBounds = [rect];


(lib.barbie_dress2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_dress_decor2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_dress_base2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-73.5,-82.4,147.1,165);
p.frameBounds = [rect];


(lib.barbie_dress_decor1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hdgrger_mc();

	this.instance_1 = new lib.adfsafa_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.1,-50.5,82.2,101.1);
p.frameBounds = [rect];


(lib.barbie_bottom8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_bottom_decor8_mc();
	this.instance.setTransform(0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_bottom_base8_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.9,-96.1,126,192.3);
p.frameBounds = [rect];


(lib.barbie_bottom7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_bottom_decor7_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_bottom_base7_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46.2,-36.6,92.4,73.3);
p.frameBounds = [rect];


(lib.barbie_bottom6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_bottom_decor6_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_bottom_base6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.4,-30.3,89,61);
p.frameBounds = [rect];


(lib.barbie_bottom5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_bottom_decor5_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_bottom_base5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.7,-68.1,245.5,136.3);
p.frameBounds = [rect];


(lib.barbie_bottom4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_bottom_decor4_mc();
	this.instance.setTransform(-1.5,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_bottom_base4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.5,-97.9,126,190.2);
p.frameBounds = [rect];


(lib.barbie_bottom3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_bottom_decor3_mc();
	this.instance.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_bottom_base3_mc();
	this.body_mc.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.5,-41.4,153,83);
p.frameBounds = [rect];


(lib.barbie_bottom2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_bottom_decor2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_bottom_base2_mc();
	this.body_mc.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.3,-44.6,89,89.4);
p.frameBounds = [rect];


(lib.barbie_bottom1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_bottom_decor1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_bottom_base1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.9,-40.8,92,82);
p.frameBounds = [rect];


(lib.barbie_bottom_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.barbie_bottom1_mc();
	this.body_1.setTransform(1.5,35.3);

	this.body_2 = new lib.barbie_bottom2_mc();
	this.body_2.setTransform(2.9,39.6);

	this.body_3 = new lib.barbie_bottom3_mc();
	this.body_3.setTransform(-3.8,41.9);

	this.body_4 = new lib.barbie_bottom4_mc();
	this.body_4.setTransform(7.3,92.1);

	this.body_5 = new lib.barbie_bottom5_mc();
	this.body_5.setTransform(6.6,66.1);

	this.body_6 = new lib.barbie_bottom6_mc();
	this.body_6.setTransform(2.8,30.8);

	this.body_7 = new lib.barbie_bottom7_mc();
	this.body_7.setTransform(2.6,49.3);

	this.body_8 = new lib.barbie_bottom8_mc();
	this.body_8.setTransform(8.4,101.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.4,-5.6,92,82);
p.frameBounds = [rect, new cjs.Rectangle(-41.5,-5,89,89.4), new cjs.Rectangle(-80.3,0.5,153,83), new cjs.Rectangle(-56.2,-5.8,126,190.2), new cjs.Rectangle(-116.1,-2,245.5,136.3), new cjs.Rectangle(-41.6,0.5,89,61), new cjs.Rectangle(-43.6,12.7,92.4,73.3), new cjs.Rectangle(-54.5,5.5,126,192.3), null];


(lib.barbie_body_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.body_1_barbie_body_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.8,-289.5,172,434.5);
p.frameBounds = [rect];


(lib.barbie_bag_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.barbie_bag1_mc();
	this.instance.setTransform(-105.3,5.7);

	this.instance_1 = new lib.barbie_bag2_mc();
	this.instance_1.setTransform(-223.7,78.3);

	this.instance_2 = new lib.barbie_bag3_mc();
	this.instance_2.setTransform(-236.5,74.6);

	this.instance_3 = new lib.barbie_bag4_mc();
	this.instance_3.setTransform(-221.7,94.4);

	this.instance_4 = new lib.barbie_bag5_mc();
	this.instance_4.setTransform(-239.8,30.7);

	this.instance_5 = new lib.barbie_bag6_mc();
	this.instance_5.setTransform(-237.4,88.1);

	this.instance_6 = new lib.barbie_bag7_mc();
	this.instance_6.setTransform(-136.8,-11.3);

	this.instance_7 = new lib.barbie_bag8_mc();
	this.instance_7.setTransform(-233.1,80.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-152,-88.9,93,189);
p.frameBounds = [rect, new cjs.Rectangle(-254.5,34.2,62,88), new cjs.Rectangle(-276.2,31.9,79,85), new cjs.Rectangle(-254.2,34.7,65,120), new cjs.Rectangle(-288.3,-11.7,97,85), new cjs.Rectangle(-280.7,33.8,87,109), new cjs.Rectangle(-185.9,-91.8,98,161), new cjs.Rectangle(-267.3,33.2,68,72), null];


(lib.accessory_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-20,40,40);
p.frameBounds = [rect];


(lib.curtain_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.logo_1_mc();
	this.instance.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-190,-85,380,180);
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
	this.instance.setTransform(0,200,0.6,0.6);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,y:0,alpha:1},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,110,300,180);
p.frameBounds = [rect, new cjs.Rectangle(-151.2,106.8,302.5,181.5), new cjs.Rectangle(-154.9,97.1,309.9,186), new cjs.Rectangle(-161.1,81.1,322.2,193.4), new cjs.Rectangle(-169.7,58.6,339.5,203.7), new cjs.Rectangle(-180.8,29.7,361.7,217.1), new cjs.Rectangle(-194.4,-5.5,388.9,233.4), new cjs.Rectangle(-210.4,-47.2,421,252.6), new cjs.Rectangle(-229,-95.4,458,274.8), new cjs.Rectangle(-250,-150,500,300)];


(lib.reset_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.reset_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect];


(lib.remove_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.remove_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60,60);
p.frameBounds = [rect, new cjs.Rectangle(-35,-35,70,70), new cjs.Rectangle(-30,-30,60,60), new cjs.Rectangle(-35,-35,70,70)];


(lib.random_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.random_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect];


(lib.play_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_mc();
	this.instance.setTransform(0,0,0.962,0.961);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-67.3,250,134.6);
p.frameBounds = [rect, new cjs.Rectangle(-130,-70,260,140), new cjs.Rectangle(-125,-67.3,250,134.6), new cjs.Rectangle(-130,-70,260,140)];


(lib.play_again_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_again_mc();
	this.instance.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.301},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-52.2,190,104.5);
p.frameBounds = [rect, new cjs.Rectangle(-100,-55,200,110), new cjs.Rectangle(-95,-52.2,190,104.5), new cjs.Rectangle(-100,-55,200,110)];


(lib.photo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_mc();
	this.instance.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.301},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-52.2,190,104.5);
p.frameBounds = [rect, new cjs.Rectangle(-100,-55,200,110), new cjs.Rectangle(-95,-52.2,190,104.5), new cjs.Rectangle(-100,-55,200,110)];


(lib.navigation_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_mc = new lib.nav_navigation_mc();
	this.prev_mc.setTransform(-130,-120,1,1,0,0,180);

	this.next_mc = new lib.nav_navigation_mc();
	this.next_mc.setTransform(130,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.next_mc},{t:this.prev_mc}]}).wait(1));

	// text
	this.title_mc = new lib.title_navigation_mc();

	this.timeline.addTween(cjs.Tween.get(this.title_mc).wait(1));

	// bg
	this.instance = new lib.bg_navigation_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-170,360,195);
p.frameBounds = [rect];


(lib.nav_hero_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_hero_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({scaleX:0.89,scaleY:0.89,alpha:0.801},10).to({scaleX:1,scaleY:1,alpha:1},20).wait(1));

	// bg
	this.instance_1 = new lib.nav_hero_2_mc();
	this.instance_1.setTransform(-5,0);
	this.instance_1.alpha = 0.051;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-50,100,100);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.more_games_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.more_games_3_mc();
	this.instance.setTransform(205.1,101.5,0.832,0.832,0,0,0,10.2,4);

	this.instance_1 = new lib.more_games_3_mc();
	this.instance_1.setTransform(188.6,76.5,1.164,1.164,0,0,0,10.2,4);

	this.instance_2 = new lib.more_games_3_mc();
	this.instance_2.setTransform(218.6,67,1.301,1.301,0,0,0,10.2,4);

	this.instance_3 = new lib.more_games_3_mc();
	this.instance_3.setTransform(205.6,94.5,0.866,0.866,0,0,0,10.2,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1,p:{scaleX:1.164,scaleY:1.164,x:188.6,y:76.5}},{t:this.instance,p:{scaleX:0.832,scaleY:0.832,x:205.1,y:101.5}}]},3).to({state:[{t:this.instance_3,p:{x:205.6,y:94.5}},{t:this.instance_2,p:{x:218.6,y:67}},{t:this.instance_1,p:{scaleX:1.301,scaleY:1.301,x:179.1,y:69.6}},{t:this.instance,p:{scaleX:0.804,scaleY:0.804,x:199,y:119.1}}]},2).to({state:[{t:this.instance_3,p:{x:177.6,y:101}},{t:this.instance_2,p:{x:203.6,y:122.3}},{t:this.instance_1,p:{scaleX:1.301,scaleY:1.301,x:216.6,y:66.1}},{t:this.instance,p:{scaleX:0.804,scaleY:0.804,x:222,y:90.6}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.164,scaleY:1.164,x:188.6,y:76.5}},{t:this.instance,p:{scaleX:0.832,scaleY:0.832,x:205.1,y:101.5}}]},2).to({state:[{t:this.instance_3,p:{x:188.6,y:99.5}},{t:this.instance_2,p:{x:226.6,y:76.9}},{t:this.instance_1,p:{scaleX:1.301,scaleY:1.301,x:199.1,y:76.9}},{t:this.instance,p:{scaleX:0.804,scaleY:0.804,x:199,y:119.1}}]},2).to({state:[{t:this.instance_3,p:{x:177.6,y:101}},{t:this.instance_2,p:{x:203.6,y:122.3}},{t:this.instance_1,p:{scaleX:1.301,scaleY:1.301,x:216.6,y:66.1}},{t:this.instance,p:{scaleX:0.804,scaleY:0.804,x:222,y:90.6}}]},2).to({state:[]},2).wait(8));

	// animation
	this.instance_4 = new lib.more_games_2_mc();
	this.instance_4.setTransform(204.7,83.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.15,scaleY:1.15},11).to({scaleX:1,scaleY:1},11).wait(1));

	// animation
	this.instance_5 = new lib.more_games_4_mc();
	this.instance_5.setTransform(203.6,87);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:45,x:201.1,y:90},22).wait(1));

	// animation
	this.instance_6 = new lib.more_games_3_img();
	this.instance_6.setTransform(138.5,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(23));

	// animation
	this.instance_7 = new lib.more_games_1_mc();
	this.instance_7.setTransform(197.4,87.8,0.765,0.765,0,0,0,118.1,106.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:0.5,scaleY:0.5},11).to({scaleX:0.77,scaleY:0.77},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(115,1.4,177.5,175.2);
p.frameBounds = [rect, new cjs.Rectangle(117.5,4,171.9,169.7), new cjs.Rectangle(120.1,4.5,166.4,166.5), new cjs.Rectangle(118.5,2.2,169.3,169.3), new cjs.Rectangle(116,0,174,174), new cjs.Rectangle(113.7,-2,178.5,178.5), new cjs.Rectangle(111.3,-4.3,183.1,183.1), new cjs.Rectangle(109.2,-6.1,187.1,187.1), new cjs.Rectangle(107.3,-7.9,190.9,190.9), new cjs.Rectangle(105.4,-9.5,194.4,194.4), new cjs.Rectangle(103.6,-11,197.7,197.7), new cjs.Rectangle(102,-12.4,200.8,200.8), new cjs.Rectangle(100.4,-13.7,203.8,203.8), new cjs.Rectangle(99,-14.9,206.3,206.3), new cjs.Rectangle(97.8,-15.9,208.6,208.6), new cjs.Rectangle(96.7,-16.7,210.6,210.6), new cjs.Rectangle(95.7,-17.5,212.4,212.4), new cjs.Rectangle(94.8,-18.2,214.1,214.1), new cjs.Rectangle(94.1,-18.6,215.3,215.3), new cjs.Rectangle(93.5,-18.9,216.2,216.2), new cjs.Rectangle(93.1,-19.1,216.9,216.9), new cjs.Rectangle(92.8,-19.2,217.3,217.3), new cjs.Rectangle(92.5,-19.4,217.8,217.8)];


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
	this.shape.graphics.f("#FF0000").s().p("A13LtIAA3ZMArvAAAIAAXZg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.964,scaleY:0.964,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.964,scaleY:0.964,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-72.3,270,144.6);
p.frameBounds = [rect, new cjs.Rectangle(-140,-75,280,150), new cjs.Rectangle(-135,-72.3,270,144.6), new cjs.Rectangle(-140,-75,280,150)];


(lib.done_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.done_mc();
	this.instance.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.301},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-52.2,190,104.5);
p.frameBounds = [rect, new cjs.Rectangle(-100,-55,200,110), new cjs.Rectangle(-95,-52.2,190,104.5), new cjs.Rectangle(-100,-55,200,110)];


(lib.credits_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.credits_mc();
	this.instance.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.801},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-52.2,190,104.5);
p.frameBounds = [rect, new cjs.Rectangle(-100,-55,200,110), new cjs.Rectangle(-95,-52.2,190,104.5), new cjs.Rectangle(-100,-55,200,110)];


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
p.nominalBounds = rect = new cjs.Rectangle(-200,-51,1200,651);
p.frameBounds = [rect];


(lib.preloader_24_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
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
	this.shape.graphics.f("#FFFFFF").s().p("AgiC3QgSgOgNAAQgOAAgSAOQgKAJgbAaQAagbAJgLQAOgSAAgNQAAgNgOgTQgJgKgagbQAbAbAKAIQASAPAOAAQANAAASgPQAKgIAZgbQgYAbgJAKQgOATABANQgBANAOASQAJALAYAbQgZgagKgJgABogEQgIAAgWATQATgSACgHQACgJgRgRQASAQAJgBQAGgCAVgUQgVAXAAAHQAAAIAWAVQgXgUgIAAgABdgqQgEgCgJAIIgHgIIAHAHQAIgHgBgFQgCgFgLgKQANAMAEAAQAFAAAMgMQgMAMAAAFQAAAFAMAMQgKgKgFgCgAg1ixQgIAAgWAWQAWgXgBgHQAAgJgXgXQAYAXAIAAQAIAAAXgXQgXAXABAJQgBAHAWAXQgXgWgHAAg");
	this.shape.setTransform(-156.1,-9.1);
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
	this.logo_mc.setTransform(0,0,0.85,0.855);

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


(lib.subcategory_13_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_13_img();
	this.instance.setTransform(-37,-27,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_12_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_13_img();
	this.instance.setTransform(-37,-27,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_12_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 7
	this.instance = new lib.icon_subcategory_12_img();
	this.instance.setTransform(-44,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_11_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_subcategory_12_img();
	this.instance.setTransform(-44,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_11_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 7
	this.instance = new lib.icon_subcategory_11_img();
	this.instance.setTransform(-41.4,-7.5,0.917,0.917,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_10_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_subcategory_11_img();
	this.instance.setTransform(-41.4,-7.5,0.917,0.917,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_10_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 7
	this.instance = new lib.icon_subcategory_10_img();
	this.instance.setTransform(-45,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_subcategory_10_img();
	this.instance.setTransform(-45,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 7
	this.instance = new lib.icon_subcategory_9_img();
	this.instance.setTransform(18.3,-25.9,1,1,0,-15,165);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 7
	this.instance = new lib.icon_subcategory_9_img();
	this.instance.setTransform(18.3,-25.9,1,1,0,-15,165);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_8_img();
	this.instance.setTransform(-37,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_subcategory_16_img();
	this.instance.setTransform(-38,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_7_img();
	this.instance.setTransform(-40,-27,0.896,0.896);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_subcategory_15_img();
	this.instance.setTransform(-36,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_6_img();
	this.instance.setTransform(-35,-25,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 2
	this.instance = new lib.icon_subcategory_14_img();
	this.instance.setTransform(-36,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_5_img();
	this.instance.setTransform(-33,-27,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_4_img();
	this.instance.setTransform(-35,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_4_img();
	this.instance.setTransform(-35,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_3_img();
	this.instance.setTransform(-36,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_3_img();
	this.instance.setTransform(-36,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_2_img();
	this.instance.setTransform(-37,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_2_img();
	this.instance.setTransform(-37,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_1_img();
	this.instance.setTransform(-19,-30,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.subcategory_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// check
	this.check_mc = new lib.check_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.check_mc).wait(1));

	// Слой 3
	this.instance = new lib.icon_subcategory_1_img();
	this.instance.setTransform(-19,-30,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_subcategory_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.panel_25_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(2));

	// options
	this.bg_4 = new lib.icon_background_4_mc();
	this.bg_4.setTransform(100,100);

	this.bg_3 = new lib.icon_background_3_mc();
	this.bg_3.setTransform(-100,100);

	this.bg_2 = new lib.icon_background_2_mc();
	this.bg_2.setTransform(100,-100);

	this.bg_1 = new lib.icon_background_1_mc();
	this.bg_1.setTransform(-100,-100);

	this.bg_8 = new lib.icon_background_8_mc();
	this.bg_8.setTransform(100,100);

	this.bg_7 = new lib.icon_background_7_mc();
	this.bg_7.setTransform(-100,100);

	this.bg_6 = new lib.icon_background_6_mc();
	this.bg_6.setTransform(100,-100);

	this.bg_5 = new lib.icon_background_5_mc();
	this.bg_5.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bg_1},{t:this.bg_2},{t:this.bg_3},{t:this.bg_4}]}).to({state:[{t:this.bg_5},{t:this.bg_6},{t:this.bg_7},{t:this.bg_8}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,430,590);
p.frameBounds = [rect, rect];


(lib.panel_24_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(1));

	// no
	this.jewelry_0 = new lib.jewelry_0_mc();
	this.jewelry_0.setTransform(204,0);

	this.timeline.addTween(cjs.Tween.get(this.jewelry_0).wait(1));

	// options
	this.jewelry_4 = new lib.ken_icon_glasses4_mc();
	this.jewelry_4.setTransform(100,100);

	this.jewelry_3 = new lib.ken_icon_glasses3_mc();
	this.jewelry_3.setTransform(-100,100);

	this.jewelry_2 = new lib.ken_icon_glasses2_mc();
	this.jewelry_2.setTransform(100,-100);

	this.jewelry_1 = new lib.ken_icon_glasses1_mc();
	this.jewelry_1.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.jewelry_1},{t:this.jewelry_2},{t:this.jewelry_3},{t:this.jewelry_4}]}).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,439,590);
p.frameBounds = [rect];


(lib.panel_23_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(2));

	// no
	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(204,0);

	this.timeline.addTween(cjs.Tween.get(this.accessory_0).wait(2));

	// options
	this.accessory_4 = new lib.ken_icon_accessory_hand4_mc();
	this.accessory_4.setTransform(100,100);

	this.accessory_3 = new lib.ken_icon_accessory_hand3_mc();
	this.accessory_3.setTransform(-100,100);

	this.accessory_2 = new lib.ken_icon_accessory_hand2_mc();
	this.accessory_2.setTransform(100,-100);

	this.accessory_1 = new lib.ken_icon_accessory_hand1_mc();
	this.accessory_1.setTransform(-100,-100);

	this.accessory_8 = new lib.ken_icon_accessory_hand8_mc();
	this.accessory_8.setTransform(100,100);

	this.accessory_7 = new lib.ken_icon_accessory_hand7_mc();
	this.accessory_7.setTransform(-100,100);

	this.accessory_6 = new lib.ken_icon_accessory_hand6_mc();
	this.accessory_6.setTransform(100,-100);

	this.accessory_5 = new lib.ken_icon_accessory_hand5_mc();
	this.accessory_5.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3},{t:this.accessory_4}]}).to({state:[{t:this.accessory_5},{t:this.accessory_6},{t:this.accessory_7},{t:this.accessory_8}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,439,590);
p.frameBounds = [rect, rect];


(lib.panel_22_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(1));

	// no
	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(204,0);

	this.timeline.addTween(cjs.Tween.get(this.headdress_0).wait(1));

	// options
	this.headdress_4 = new lib.ken_icon_accessory_head4_mc();
	this.headdress_4.setTransform(100,100);

	this.headdress_3 = new lib.ken_icon_accessory_head3_mc();
	this.headdress_3.setTransform(-100,100);

	this.headdress_2 = new lib.ken_icon_accessory_head2_mc();
	this.headdress_2.setTransform(100,-100);

	this.headdress_1 = new lib.ken_icon_accessory_head1_mc();
	this.headdress_1.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.headdress_1},{t:this.headdress_2},{t:this.headdress_3},{t:this.headdress_4}]}).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,439,590);
p.frameBounds = [rect];


(lib.panel_21_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

	// no
	this.shoes_0 = new lib.shoes_0_mc();
	this.shoes_0.setTransform(204,0);

	this.timeline.addTween(cjs.Tween.get(this.shoes_0).wait(3));

	// options
	this.shoes_4 = new lib.ken_icon_shoes4_mc();
	this.shoes_4.setTransform(100,100);

	this.shoes_3 = new lib.ken_icon_shoes3_mc();
	this.shoes_3.setTransform(-100,100);

	this.shoes_2 = new lib.ken_icon_shoes2_mc();
	this.shoes_2.setTransform(100,-100);

	this.shoes_1 = new lib.ken_icon_shoes1_mc();
	this.shoes_1.setTransform(-100,-100);

	this.shoes_8 = new lib.ken_icon_shoes8_mc();
	this.shoes_8.setTransform(100,100);

	this.shoes_7 = new lib.ken_icon_shoes7_mc();
	this.shoes_7.setTransform(-100,100);

	this.shoes_6 = new lib.ken_icon_shoes6_mc();
	this.shoes_6.setTransform(100,-100);

	this.shoes_5 = new lib.ken_icon_shoes5_mc();
	this.shoes_5.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shoes_1},{t:this.shoes_2},{t:this.shoes_3},{t:this.shoes_4}]}).to({state:[{t:this.shoes_5},{t:this.shoes_6},{t:this.shoes_7},{t:this.shoes_8}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_shoes = new lib.color_picker_2_mc();
	this.color_shoes.setTransform(-180,-180);
	this.color_shoes._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_shoes).wait(2).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,439,590);
p.frameBounds = [rect, rect, rect];


(lib.panel_18_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

	// options
	this.top_4 = new lib.ken_icon_top4_mc();
	this.top_4.setTransform(100,100);

	this.top_3 = new lib.ken_icon_top3_mc();
	this.top_3.setTransform(-100,100);

	this.top_2 = new lib.ken_icon_top2_mc();
	this.top_2.setTransform(100,-100);

	this.top_1 = new lib.ken_icon_top1_mc();
	this.top_1.setTransform(-100,-100);

	this.top_8 = new lib.ken_icon_top8_mc();
	this.top_8.setTransform(100,100);

	this.top_7 = new lib.ken_icon_top7_mc();
	this.top_7.setTransform(-100,100);

	this.top_6 = new lib.ken_icon_top6_mc();
	this.top_6.setTransform(100,-100);

	this.top_5 = new lib.ken_icon_top5_mc();
	this.top_5.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.top_1},{t:this.top_2},{t:this.top_3},{t:this.top_4}]}).to({state:[{t:this.top_5},{t:this.top_6},{t:this.top_7},{t:this.top_8}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_top = new lib.color_picker_2_mc();
	this.color_top.setTransform(-180,-180);
	this.color_top._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_top).wait(2).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,430,590);
p.frameBounds = [rect, rect, rect];


(lib.panel_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(2));

	// options
	this.mouth_4 = new lib.ken_icon_mouth4_mc();
	this.mouth_4.setTransform(100,100);

	this.mouth_3 = new lib.ken_icon_mouth3_mc();
	this.mouth_3.setTransform(-100,100);

	this.mouth_2 = new lib.ken_icon_mouth2_mc();
	this.mouth_2.setTransform(100,-100);

	this.mouth_1 = new lib.ken_icon_mouth1_mc();
	this.mouth_1.setTransform(-100,-100);

	this.mouth_8 = new lib.ken_icon_mouth8_mc();
	this.mouth_8.setTransform(100,100);

	this.mouth_7 = new lib.ken_icon_mouth7_mc();
	this.mouth_7.setTransform(-100,100);

	this.mouth_6 = new lib.ken_icon_mouth6_mc();
	this.mouth_6.setTransform(100,-100);

	this.mouth_5 = new lib.ken_icon_mouth5_mc();
	this.mouth_5.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mouth_1},{t:this.mouth_2},{t:this.mouth_3},{t:this.mouth_4}]}).to({state:[{t:this.mouth_5},{t:this.mouth_6},{t:this.mouth_7},{t:this.mouth_8}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,430,590);
p.frameBounds = [rect, rect];


(lib.panel_14_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(1));

	// palette
	this.color_skin = new lib.color_picker_1_mc();
	this.color_skin.setTransform(-180,-180);

	this.timeline.addTween(cjs.Tween.get(this.color_skin).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,430,590);
p.frameBounds = [rect];


(lib.panel_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(2));

	// options
	this.bg_4 = new lib.icon_background_4_mc();
	this.bg_4.setTransform(100,100);

	this.bg_3 = new lib.icon_background_3_mc();
	this.bg_3.setTransform(-100,100);

	this.bg_2 = new lib.icon_background_2_mc();
	this.bg_2.setTransform(100,-100);

	this.bg_1 = new lib.icon_background_1_mc();
	this.bg_1.setTransform(-100,-100);

	this.bg_8 = new lib.icon_background_8_mc();
	this.bg_8.setTransform(100,100);

	this.bg_7 = new lib.icon_background_7_mc();
	this.bg_7.setTransform(-100,100);

	this.bg_6 = new lib.icon_background_6_mc();
	this.bg_6.setTransform(100,-100);

	this.bg_5 = new lib.icon_background_5_mc();
	this.bg_5.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bg_1},{t:this.bg_2},{t:this.bg_3},{t:this.bg_4}]}).to({state:[{t:this.bg_5},{t:this.bg_6},{t:this.bg_7},{t:this.bg_8}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,430,590);
p.frameBounds = [rect, rect];


(lib.panel_12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(1));

	// no
	this.jewelry_0 = new lib.jewelry_0_mc();
	this.jewelry_0.setTransform(204,0);

	this.timeline.addTween(cjs.Tween.get(this.jewelry_0).wait(1));

	// options
	this.jewelry_4 = new lib.icon_glasses4_mc();
	this.jewelry_4.setTransform(100,100);

	this.jewelry_3 = new lib.icon_glasses3_mc();
	this.jewelry_3.setTransform(-100,100);

	this.jewelry_2 = new lib.icon_glasses2_mc();
	this.jewelry_2.setTransform(100,-100);

	this.jewelry_1 = new lib.icon_glasses1_mc();
	this.jewelry_1.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.jewelry_1},{t:this.jewelry_2},{t:this.jewelry_3},{t:this.jewelry_4}]}).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,439,590);
p.frameBounds = [rect];


(lib.panel_11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(2));

	// no
	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(204,0);

	this.timeline.addTween(cjs.Tween.get(this.accessory_0).wait(2));

	// options
	this.accessory_4 = new lib.icon_accessory_hand4_mc();
	this.accessory_4.setTransform(100,100);

	this.accessory_3 = new lib.icon_accessory_hand3_mc();
	this.accessory_3.setTransform(-100,100);

	this.accessory_2 = new lib.icon_accessory_hand2_mc();
	this.accessory_2.setTransform(100,-100);

	this.accessory_1 = new lib.icon_accessory_hand1_mc();
	this.accessory_1.setTransform(-100,-100);

	this.accessory_8 = new lib.icon_accessory_hand8_mc();
	this.accessory_8.setTransform(100,100);

	this.accessory_7 = new lib.icon_accessory_hand7_mc();
	this.accessory_7.setTransform(-100,100);

	this.accessory_6 = new lib.icon_accessory_hand6_mc();
	this.accessory_6.setTransform(100,-100);

	this.accessory_5 = new lib.icon_accessory_hand5_mc();
	this.accessory_5.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3},{t:this.accessory_4}]}).to({state:[{t:this.accessory_5},{t:this.accessory_6},{t:this.accessory_7},{t:this.accessory_8}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,439,590);
p.frameBounds = [rect, rect];


(lib.panel_10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(2));

	// no
	this.headdress_0 = new lib.headdress_0_mc();
	this.headdress_0.setTransform(204,0);

	this.timeline.addTween(cjs.Tween.get(this.headdress_0).wait(2));

	// options
	this.headdress_3 = new lib.icon_accessory_head4_mc();
	this.headdress_3.setTransform(100,100);

	this.headdress_6 = new lib.icon_accessory_head3_mc();
	this.headdress_6.setTransform(-100,100);

	this.headdress_2 = new lib.icon_accessory_head2_mc();
	this.headdress_2.setTransform(100,-100);

	this.headdress_1 = new lib.icon_accessory_head1_mc();
	this.headdress_1.setTransform(-100,-100);

	this.headdress_8 = new lib.icon_accessory_head8_mc();
	this.headdress_8.setTransform(100,100);

	this.headdress_5 = new lib.icon_accessory_head7_mc();
	this.headdress_5.setTransform(-100,100);

	this.headdress_4 = new lib.icon_accessory_head6_mc();
	this.headdress_4.setTransform(100.2,-99.8);

	this.headdress_7 = new lib.icon_accessory_head5_mc();
	this.headdress_7.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.headdress_1},{t:this.headdress_2},{t:this.headdress_6},{t:this.headdress_3}]}).to({state:[{t:this.headdress_7},{t:this.headdress_4},{t:this.headdress_5},{t:this.headdress_8}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,439,590);
p.frameBounds = [rect, rect];


(lib.panel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(2));

	// options
	this.mouth_4 = new lib.icon_mouth4_mc();
	this.mouth_4.setTransform(100,100);

	this.mouth_3 = new lib.icon_mouth3_mc();
	this.mouth_3.setTransform(-100,100);

	this.mouth_2 = new lib.icon_mouth2_mc();
	this.mouth_2.setTransform(100,-100);

	this.mouth_1 = new lib.icon_mouth1_mc();
	this.mouth_1.setTransform(-100,-100);

	this.mouth_8 = new lib.icon_mouth8_mc();
	this.mouth_8.setTransform(100,100);

	this.mouth_7 = new lib.icon_mouth7_mc();
	this.mouth_7.setTransform(-100,100);

	this.mouth_6 = new lib.icon_mouth6_mc();
	this.mouth_6.setTransform(100.2,-99.8);

	this.mouth_5 = new lib.icon_mouth5_mc();
	this.mouth_5.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mouth_1},{t:this.mouth_2},{t:this.mouth_3},{t:this.mouth_4}]}).to({state:[{t:this.mouth_5},{t:this.mouth_6},{t:this.mouth_7},{t:this.mouth_8}]},1).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,430,590);
p.frameBounds = [rect, rect];


(lib.panel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(1));

	// palette
	this.color_skin = new lib.color_picker_1_mc();
	this.color_skin.setTransform(-180,-180);

	this.timeline.addTween(cjs.Tween.get(this.color_skin).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,430,590);
p.frameBounds = [rect];


(lib.ken_icon_fringe12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_fringe12_mc();
	this.instance.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_fringe11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_fringe11_mc();
	this.instance.setTransform(-4,1,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_fringe10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_fringe10_mc();
	this.instance.setTransform(-4,1,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_fringe9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_fringe9_mc();
	this.instance.setTransform(0,1,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_fringe8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_fringe8_mc();
	this.instance.setTransform(-2,1,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_fringe7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_fringe7_mc();
	this.instance.setTransform(-2,1,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_fringe6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_fringe6_mc();
	this.instance.setTransform(0,1,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_fringe5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_fringe5_mc();
	this.instance.setTransform(-2,1,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_fringe4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_fringe4_mc();
	this.instance.setTransform(-2,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_fringe3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_fringe3_mc();
	this.instance.setTransform(0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_fringe2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_fringe2_mc();
	this.instance.setTransform(-4,-2,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_fringe1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_fringe1_mc();
	this.instance.setTransform(-1,1,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_eyes8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_eyes8_mc();
	this.instance.setTransform(-2,4.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_eyes7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_eyes7_mc();
	this.instance.setTransform(-2,4.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_eyes6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_eyes6_mc();
	this.instance.setTransform(-2,4.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_eyes5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_eyes5_mc();
	this.instance.setTransform(-2,4.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_eyes4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_eyes4_mc();
	this.instance.setTransform(-2,4.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_eyes3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_eyes3_mc();
	this.instance.setTransform(-2,4.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_eyes2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_eyes2_mc();
	this.instance.setTransform(-2,4.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_eyes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_eyes1_mc();
	this.instance.setTransform(-2,4.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_dress8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_dress8_mc();
	this.instance.setTransform(2.4,1.4,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_dress7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_dress7_mc();
	this.instance.setTransform(2.4,2.4,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_dress6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_dress6_mc();
	this.instance.setTransform(2.4,2.4,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_dress5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_dress5_mc();
	this.instance.setTransform(3.4,2.4,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_dress4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_dress4_mc();
	this.instance.setTransform(1.4,1.4,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_dress3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_dress3_mc();
	this.instance.setTransform(3.4,2.4,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_dress2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_dress2_mc();
	this.instance.setTransform(3.4,-0.6,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_dress1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_dress1_mc();
	this.instance.setTransform(2.4,2.4,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_bottom8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_bottom8_mc();
	this.instance.setTransform(-2,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_bottom7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_bottom7_mc();
	this.instance.setTransform(-2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_bottom6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_bottom6_mc();
	this.instance.setTransform(-2,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_bottom5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_bottom5_mc();
	this.instance.setTransform(-3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_bottom4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_bottom4_mc();
	this.instance.setTransform(-3,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_bottom3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_bottom3_mc();
	this.instance.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_bottom2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_bottom2_mc();
	this.instance.setTransform(-1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_icon_bottom1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ken_bottom1_mc();
	this.instance.setTransform(-7,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.ken_boby_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.body_1_ken_boby_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86.2,-223.5,173,445.9);
p.frameBounds = [rect];


(lib.icon_top8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_top8_mc();
	this.instance.setTransform(-0.6,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_top7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_top7_mc();
	this.instance.setTransform(-0.6,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_top6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_top6_mc();
	this.instance.setTransform(2.4,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_top5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_top5_mc();
	this.instance.setTransform(-0.6,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_top4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_top4_mc();
	this.instance.setTransform(-3.6,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_top3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_top3_mc();
	this.instance.setTransform(-0.6,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_top2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_top2_mc();
	this.instance.setTransform(-0.6,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_top1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_top1_mc();
	this.instance.setTransform(4.4,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_shoes8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_shoes8_mc();
	this.instance.setTransform(1.4,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_shoes7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_shoes7_mc();
	this.instance.setTransform(-0.6,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_shoes6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_shoes6_mc();
	this.instance.setTransform(-1.6,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_shoes5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_shoes5_mc();
	this.instance.setTransform(1.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_shoes4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_shoes4_mc();
	this.instance.setTransform(0.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_shoes3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_shoes3_mc();
	this.instance.setTransform(-1.6,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_shoes2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_shoes2_mc();
	this.instance.setTransform(7.4,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_shoes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_shoes1_mc();
	this.instance.setTransform(0.4,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_hair_12_mc();
	this.instance.setTransform(4.4,-2,0.4,0.4,0,0,0,11,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_hair_11_mc();
	this.instance.setTransform(4.4,4,0.5,0.5,0,0,0,11.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_hair_10_mc();
	this.instance.setTransform(4.4,0,0.35,0.35,0,0,0,11,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_hair_9_mc();
	this.instance.setTransform(4.4,-1,0.4,0.4,0,0,0,11,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_hair_8_mc();
	this.instance.setTransform(4.4,-2,0.4,0.4,0,0,0,11,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_hair_7_mc();
	this.instance.setTransform(4.4,-2,0.35,0.35,0,0,0,11,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_hair_6_mc();
	this.instance.setTransform(4.4,-2,0.5,0.5,0,0,0,10.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_hair_5_mc();
	this.instance.setTransform(4.4,0,0.5,0.5,0,0,0,10.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_hair_4_mc();
	this.instance.setTransform(5.4,-2,0.6,0.6,0,0,0,10.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_hair_3_mc();
	this.instance.setTransform(11.5,4,0.7,0.7,0,0,0,11,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_hair_2_mc();
	this.instance.setTransform(4.4,-2,0.35,0.35,0,0,0,10.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_hair1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_hair_1_mc();
	this.instance.setTransform(4.4,-2,0.5,0.5,0,0,0,10.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe12_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_fringe12_mc();
	this.instance.setTransform(2.4,1.4,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe11_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_fringe11_mc();
	this.instance.setTransform(2.4,1.4,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe10_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_fringe10_mc();
	this.instance.setTransform(2.4,1.4,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_fringe9_mc();
	this.instance.setTransform(2.4,1.4,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_fringe8_mc();
	this.instance.setTransform(2.4,1.4,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_fringe7_mc();
	this.instance.setTransform(2.4,1.4,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_fringe6_mc();
	this.instance.setTransform(0.4,1.4,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_fringe5_mc();
	this.instance.setTransform(2.4,1.4,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_fringe4_mc();
	this.instance.setTransform(2.4,7.4,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_fringe3_mc();
	this.instance.setTransform(2.4,1.4,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_fringe2_mc();
	this.instance.setTransform(2.4,1.4,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_fringe1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_fringe1_mc();
	this.instance.setTransform(2.4,1.4,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_eyes8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_eyes8_mc();
	this.instance.setTransform(1.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_eyes7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_eyes7_mc();
	this.instance.setTransform(1.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_eyes6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_eyes6_mc();
	this.instance.setTransform(1.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_eyes5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_eyes5_mc();
	this.instance.setTransform(1.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_eyes4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_eyes4_mc();
	this.instance.setTransform(1.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_eyes3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_eyes3_mc();
	this.instance.setTransform(1.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_eyes2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_eyes2_mc();
	this.instance.setTransform(1.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_eyes1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_eyes1_mc();
	this.instance.setTransform(1.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_dress8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_dress8_mc();
	this.instance.setTransform(6,2.4,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_dress7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_dress7_mc();
	this.instance.setTransform(1,1.4,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,185);
p.frameBounds = [rect];


(lib.icon_dress6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_dress6_mc();
	this.instance.setTransform(1,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,185.5);
p.frameBounds = [rect];


(lib.icon_dress5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_dress5_mc();
	this.instance.setTransform(5,2.4,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_dress4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_dress4_mc();
	this.instance.setTransform(-1,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184.6);
p.frameBounds = [rect];


(lib.icon_dress3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_dress3_mc();
	this.instance.setTransform(2,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_dress2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_dress2_mc();
	this.instance.setTransform(2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_bottom8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_bottom8_mc();
	this.instance.setTransform(1.1,0.4,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_bottom7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_bottom7_mc();
	this.instance.setTransform(-1.9,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_bottom6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_bottom6_mc();
	this.instance.setTransform(-1.9,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_bottom5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_bottom5_mc();
	this.instance.setTransform(0.1,1.4,0.7,0.7,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_bottom4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_bottom4_mc();
	this.instance.setTransform(6.1,2.4,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_bottom3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_bottom3_mc();
	this.instance.setTransform(-1.9,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_bottom2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_bottom2_mc();
	this.instance.setTransform(0.1,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.icon_bottom1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_bottom1_mc();
	this.instance.setTransform(-1.9,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.barbie_hair_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.barbie_hair_1_mc();
	this.body_1.setTransform(-10.9,-0.1);

	this.body_2 = new lib.barbie_hair_2_mc();
	this.body_2.setTransform(0,49.6);

	this.body_3 = new lib.barbie_hair_3_mc();
	this.body_3.setTransform(63.7,8.3);

	this.body_4 = new lib.barbie_hair_4_mc();
	this.body_4.setTransform(-8.5,-2.7);

	this.body_5 = new lib.barbie_hair_5_mc();
	this.body_5.setTransform(-14.5,41.5);

	this.body_6 = new lib.barbie_hair_6_mc();
	this.body_6.setTransform(-7.1,3.7);

	this.body_7 = new lib.barbie_hair_7_mc();
	this.body_7.setTransform(-5.5,37.9);

	this.body_8 = new lib.barbie_hair_8_mc();
	this.body_8.setTransform(-5.7,119.7);

	this.body_9 = new lib.barbie_hair_9_mc();
	this.body_9.setTransform(-13.7,94);

	this.body_10 = new lib.barbie_hair_10_mc();
	this.body_10.setTransform(-7.5,112.5);

	this.body_11 = new lib.barbie_hair_11_mc();
	this.body_11.setTransform(-7.5,45.3);

	this.body_12 = new lib.barbie_hair_12_mc();
	this.body_12.setTransform(-5.5,53.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[{t:this.body_9}]},1).to({state:[{t:this.body_10}]},1).to({state:[{t:this.body_11}]},1).to({state:[{t:this.body_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.1,-108.9,200.1,218);
p.frameBounds = [rect, new cjs.Rectangle(-124.3,-161.9,248.5,423), new cjs.Rectangle(3.8,-89.2,120,195), new cjs.Rectangle(-97.7,-91.7,178.4,178), new cjs.Rectangle(-115.7,-110.7,203,304.4), new cjs.Rectangle(-152.1,-104.8,290,217.1), new cjs.Rectangle(-167.7,-185.7,325,447.4), new cjs.Rectangle(-207.9,-62.3,405,364.1), new cjs.Rectangle(-228.2,-109.7,429,408), new cjs.Rectangle(-187.7,-109.7,361,445), new cjs.Rectangle(-100.7,-107.8,187,306.3), new cjs.Rectangle(-109.7,-107.7,209,323)];


(lib.barbie_dress1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.barbie_dress_decor1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// body
	this.body_mc = new lib.barbie_dress_base1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-41.1,-50.5,82.2,101.1);
p.frameBounds = [rect];


(lib.barbie_dress_all_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_1 = new lib.barbie_dress1_mc();
	this.body_1.setTransform(2.2,2.8);

	this.body_2 = new lib.barbie_dress2_mc();
	this.body_2.setTransform(4.4,10.9);

	this.body_3 = new lib.barbie_dress3_mc();
	this.body_3.setTransform(1.5,8.1);

	this.body_4 = new lib.barbie_dress4_mc();
	this.body_4.setTransform(-1.4,9);

	this.body_5 = new lib.barbie_dress5_mc();
	this.body_5.setTransform(9.8,55.5);

	this.body_6 = new lib.barbie_dress6_mc();
	this.body_6.setTransform(1,13);

	this.body_7 = new lib.barbie_dress7_mc();
	this.body_7.setTransform(2.1,36.9);

	this.body_8 = new lib.barbie_dress8_mc();
	this.body_8.setTransform(12.9,57.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.body_1}]}).to({state:[{t:this.body_2}]},1).to({state:[{t:this.body_3}]},1).to({state:[{t:this.body_4}]},1).to({state:[{t:this.body_5}]},1).to({state:[{t:this.body_6}]},1).to({state:[{t:this.body_7}]},1).to({state:[{t:this.body_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-38.9,-47.7,82.2,101.1);
p.frameBounds = [rect, new cjs.Rectangle(-69.1,-71.5,147.1,165), new cjs.Rectangle(-69.6,-69.7,142.1,156), new cjs.Rectangle(-81.3,-79.7,160.1,178), new cjs.Rectangle(-41.7,-72.3,103.2,256), new cjs.Rectangle(-67.2,-73.8,136.4,174), new cjs.Rectangle(-81.4,-69.5,167.2,221), new cjs.Rectangle(-48.7,-69,123.3,253), null];


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


(lib.prev_hero_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_hero_mc();
	this.instance.setTransform(0,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-50,100,100);
p.frameBounds = [rect];


(lib.next_hero_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_hero_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-50,100,100);
p.frameBounds = [rect];


(lib.more_games_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_0_mc();
	this.instance.setTransform(0.1,0,1,1,0,0,0,203.7,88.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-88.7,-87.6,177.5,175.1);
p.frameBounds = [rect];


(lib.more_games_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.more_games_mc();
	this.instance.setTransform(0,0,0.964,0.963);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ArCLDQkkkmAAmdQAAmdEkklQElklGdAAQGeAAElElQEkElAAGdQAAGdkkEmQklEkmeAAQmdAAklkkg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.964,scaleY:0.963,alpha:1}}]}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:0.999,alpha:1}}]},1).to({state:[{t:this.instance,p:{scaleX:0.964,scaleY:0.963,alpha:0.801}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.5,-84.3,171.2,168.7);
p.frameBounds = [rect, new cjs.Rectangle(-88.6,-87.5,177.5,175.1), new cjs.Rectangle(-85.5,-84.3,171.2,168.7), new cjs.Rectangle(-100,-100,200,200)];


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
p.nominalBounds = rect = new cjs.Rectangle(-200,-51,1200,651);
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


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(670,510);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,1050);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(685,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instruction_btn},{t:this.moreGames_btn},{t:this.play_btn},{t:this.credits_btn}]}).wait(1));

	// title
	this.instance = new lib.title_mc();
	this.instance.setTransform(310,500);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.shadow_decor_mc();
	this.instance_1.setTransform(400,500,1,1,0,0,0,600,100);
	this.instance_1.alpha = 0.301;
	this.instance_1.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// heroes
	this.instance_2 = new lib.heroes_0_mc();
	this.instance_2.setTransform(347.4,288.4,1,1,0,0,0,347.4,288.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.instance_3 = new lib.background_7_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-76.9,1200,1214.4);
p.frameBounds = [rect];


(lib.panel_20_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

	// options
	this.dress_4 = new lib.ken_icon_dress4_mc();
	this.dress_4.setTransform(100,100);

	this.dress_3 = new lib.ken_icon_dress3_mc();
	this.dress_3.setTransform(-100,100);

	this.dress_2 = new lib.ken_icon_dress2_mc();
	this.dress_2.setTransform(100,-100);

	this.dress_1 = new lib.ken_icon_dress1_mc();
	this.dress_1.setTransform(-100,-100);

	this.dress_8 = new lib.ken_icon_dress8_mc();
	this.dress_8.setTransform(100,100);

	this.dress_7 = new lib.ken_icon_dress7_mc();
	this.dress_7.setTransform(-100,100);

	this.dress_6 = new lib.ken_icon_dress6_mc();
	this.dress_6.setTransform(100,-100);

	this.dress_5 = new lib.ken_icon_dress5_mc();
	this.dress_5.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_1},{t:this.dress_2},{t:this.dress_3},{t:this.dress_4}]}).to({state:[{t:this.dress_5},{t:this.dress_6},{t:this.dress_7},{t:this.dress_8}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_dress = new lib.color_picker_2_mc();
	this.color_dress.setTransform(-180,-180);
	this.color_dress._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_dress).wait(2).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,430,590);
p.frameBounds = [rect, rect, rect];


(lib.panel_19_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

	// options
	this.bottom_4 = new lib.ken_icon_bottom4_mc();
	this.bottom_4.setTransform(100,100);

	this.bottom_3 = new lib.ken_icon_bottom3_mc();
	this.bottom_3.setTransform(-100,100);

	this.bottom_2 = new lib.ken_icon_bottom2_mc();
	this.bottom_2.setTransform(100,-100);

	this.bottom_1 = new lib.ken_icon_bottom1_mc();
	this.bottom_1.setTransform(-100,-100);

	this.bottom_8 = new lib.ken_icon_bottom8_mc();
	this.bottom_8.setTransform(100,100);

	this.bottom_7 = new lib.ken_icon_bottom7_mc();
	this.bottom_7.setTransform(-100,100);

	this.bottom_6 = new lib.ken_icon_bottom6_mc();
	this.bottom_6.setTransform(100,-100);

	this.bottom_5 = new lib.ken_icon_bottom5_mc();
	this.bottom_5.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bottom_1},{t:this.bottom_2},{t:this.bottom_3},{t:this.bottom_4}]}).to({state:[{t:this.bottom_5},{t:this.bottom_6},{t:this.bottom_7},{t:this.bottom_8}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_bottom = new lib.color_picker_2_mc();
	this.color_bottom.setTransform(-180,-180);
	this.color_bottom._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_bottom).wait(2).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,430,590);
p.frameBounds = [rect, rect, rect];


(lib.panel_17_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(4));

	// options
	this.hair_4 = new lib.ken_icon_fringe4_mc();
	this.hair_4.setTransform(100,100);

	this.hair_3 = new lib.ken_icon_fringe3_mc();
	this.hair_3.setTransform(-100,100);

	this.hair_2 = new lib.ken_icon_fringe2_mc();
	this.hair_2.setTransform(100,-100);

	this.hair_1 = new lib.ken_icon_fringe1_mc();
	this.hair_1.setTransform(-100,-100);

	this.hair_8 = new lib.ken_icon_fringe8_mc();
	this.hair_8.setTransform(100,100);

	this.hair_7 = new lib.ken_icon_fringe7_mc();
	this.hair_7.setTransform(-100,100);

	this.hair_6 = new lib.ken_icon_fringe6_mc();
	this.hair_6.setTransform(100,-100);

	this.hair_5 = new lib.ken_icon_fringe5_mc();
	this.hair_5.setTransform(-100,-100);

	this.hair_12 = new lib.ken_icon_fringe12_mc();
	this.hair_12.setTransform(100,100);

	this.hair_11 = new lib.ken_icon_fringe11_mc();
	this.hair_11.setTransform(-100,100);

	this.hair_10 = new lib.ken_icon_fringe10_mc();
	this.hair_10.setTransform(100,-100);

	this.hair_9 = new lib.ken_icon_fringe9_mc();
	this.hair_9.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_2},{t:this.hair_3},{t:this.hair_4}]}).to({state:[{t:this.hair_5},{t:this.hair_6},{t:this.hair_7},{t:this.hair_8}]},1).to({state:[{t:this.hair_9},{t:this.hair_10},{t:this.hair_11},{t:this.hair_12}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_hair = new lib.color_picker_2_mc();
	this.color_hair.setTransform(-180,-180);
	this.color_hair._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_hair).wait(3).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,430,590);
p.frameBounds = [rect, rect, rect, rect];


(lib.panel_15_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

	// options
	this.eyes_4 = new lib.ken_icon_eyes4_mc();
	this.eyes_4.setTransform(100,100);

	this.eyes_3 = new lib.ken_icon_eyes3_mc();
	this.eyes_3.setTransform(-100,100);

	this.eyes_2 = new lib.ken_icon_eyes2_mc();
	this.eyes_2.setTransform(100,-100);

	this.eyes_1 = new lib.ken_icon_eyes1_mc();
	this.eyes_1.setTransform(-100,-100);

	this.eyes_8 = new lib.ken_icon_eyes8_mc();
	this.eyes_8.setTransform(100,100);

	this.eyes_7 = new lib.ken_icon_eyes7_mc();
	this.eyes_7.setTransform(-100,100);

	this.eyes_6 = new lib.ken_icon_eyes6_mc();
	this.eyes_6.setTransform(100,-100);

	this.eyes_5 = new lib.ken_icon_eyes5_mc();
	this.eyes_5.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eyes_1},{t:this.eyes_2},{t:this.eyes_3},{t:this.eyes_4}]}).to({state:[{t:this.eyes_5},{t:this.eyes_6},{t:this.eyes_7},{t:this.eyes_8}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_eyes = new lib.color_picker_2_mc();
	this.color_eyes.setTransform(-180,-180);
	this.color_eyes._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_eyes).wait(2).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,430,590);
p.frameBounds = [rect, rect, rect];


(lib.panel_9_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

	// no
	this.shoes_0 = new lib.shoes_0_mc();
	this.shoes_0.setTransform(204,0);

	this.timeline.addTween(cjs.Tween.get(this.shoes_0).wait(3));

	// options
	this.shoes_4 = new lib.icon_shoes4_mc();
	this.shoes_4.setTransform(100,100);

	this.shoes_3 = new lib.icon_shoes3_mc();
	this.shoes_3.setTransform(-100,100);

	this.shoes_2 = new lib.icon_shoes2_mc();
	this.shoes_2.setTransform(100,-100);

	this.shoes_1 = new lib.icon_shoes1_mc();
	this.shoes_1.setTransform(-100,-100);

	this.shoes_8 = new lib.icon_shoes8_mc();
	this.shoes_8.setTransform(100,100);

	this.shoes_7 = new lib.icon_shoes7_mc();
	this.shoes_7.setTransform(-100,100);

	this.shoes_6 = new lib.icon_shoes6_mc();
	this.shoes_6.setTransform(100,-100);

	this.shoes_5 = new lib.icon_shoes5_mc();
	this.shoes_5.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shoes_1},{t:this.shoes_2},{t:this.shoes_3},{t:this.shoes_4}]}).to({state:[{t:this.shoes_5},{t:this.shoes_6},{t:this.shoes_7},{t:this.shoes_8}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_shoes = new lib.color_picker_2_mc();
	this.color_shoes.setTransform(-180,-180);
	this.color_shoes._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_shoes).wait(2).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,439,590);
p.frameBounds = [rect, rect, rect];


(lib.panel_7_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

	// options
	this.bottom_4 = new lib.icon_bottom4_mc();
	this.bottom_4.setTransform(100,100);

	this.bottom_3 = new lib.icon_bottom3_mc();
	this.bottom_3.setTransform(-100,100);

	this.bottom_2 = new lib.icon_bottom2_mc();
	this.bottom_2.setTransform(100,-100);

	this.bottom_1 = new lib.icon_bottom1_mc();
	this.bottom_1.setTransform(-100,-100);

	this.bottom_8 = new lib.icon_bottom8_mc();
	this.bottom_8.setTransform(100,100);

	this.bottom_7 = new lib.icon_bottom7_mc();
	this.bottom_7.setTransform(-100,100);

	this.bottom_6 = new lib.icon_bottom6_mc();
	this.bottom_6.setTransform(100,-100);

	this.bottom_5 = new lib.icon_bottom5_mc();
	this.bottom_5.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bottom_1},{t:this.bottom_2},{t:this.bottom_3},{t:this.bottom_4}]}).to({state:[{t:this.bottom_5},{t:this.bottom_6},{t:this.bottom_7},{t:this.bottom_8}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_bottom = new lib.color_picker_2_mc();
	this.color_bottom.setTransform(-180,-180);
	this.color_bottom._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_bottom).wait(2).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,430,590);
p.frameBounds = [rect, rect, rect];


(lib.panel_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

	// options
	this.top_4 = new lib.icon_top4_mc();
	this.top_4.setTransform(100,100);

	this.top_3 = new lib.icon_top3_mc();
	this.top_3.setTransform(-100,100);

	this.top_2 = new lib.icon_top2_mc();
	this.top_2.setTransform(100,-100);

	this.top_1 = new lib.icon_top1_mc();
	this.top_1.setTransform(-100,-100);

	this.top_8 = new lib.icon_top8_mc();
	this.top_8.setTransform(100,100);

	this.top_7 = new lib.icon_top7_mc();
	this.top_7.setTransform(-100,100);

	this.top_6 = new lib.icon_top6_mc();
	this.top_6.setTransform(100,-100);

	this.top_5 = new lib.icon_top5_mc();
	this.top_5.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.top_1},{t:this.top_2},{t:this.top_3},{t:this.top_4}]}).to({state:[{t:this.top_5},{t:this.top_6},{t:this.top_7},{t:this.top_8}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_top = new lib.color_picker_2_mc();
	this.color_top.setTransform(-180,-180);
	this.color_top._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_top).wait(2).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,430,590);
p.frameBounds = [rect, rect, rect];


(lib.panel_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(4));

	// options
	this.hair_4 = new lib.icon_hair4_mc();
	this.hair_4.setTransform(100,100);

	this.hair_3 = new lib.icon_hair3_mc();
	this.hair_3.setTransform(-100,100);

	this.hair_2 = new lib.icon_hair2_mc();
	this.hair_2.setTransform(100,-100);

	this.hair_1 = new lib.icon_hair1_mc();
	this.hair_1.setTransform(-100,-100);

	this.hair_8 = new lib.icon_hair8_mc();
	this.hair_8.setTransform(100,100);

	this.hair_7 = new lib.icon_hair7_mc();
	this.hair_7.setTransform(-100,100);

	this.hair_6 = new lib.icon_hair6_mc();
	this.hair_6.setTransform(100,-100);

	this.hair_5 = new lib.icon_hair5_mc();
	this.hair_5.setTransform(-100,-100);

	this.hair_12 = new lib.icon_hair12_mc();
	this.hair_12.setTransform(100,100);

	this.hair_11 = new lib.icon_hair11_mc();
	this.hair_11.setTransform(-100,100);

	this.hair_10 = new lib.icon_hair10_mc();
	this.hair_10.setTransform(100,-100);

	this.hair_9 = new lib.icon_hair9_mc();
	this.hair_9.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hair_1},{t:this.hair_2},{t:this.hair_3},{t:this.hair_4}]}).to({state:[{t:this.hair_5},{t:this.hair_6},{t:this.hair_7},{t:this.hair_8}]},1).to({state:[{t:this.hair_9},{t:this.hair_10},{t:this.hair_11},{t:this.hair_12}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_hair = new lib.color_picker_2_mc();
	this.color_hair.setTransform(-180,-180);
	this.color_hair._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_hair).wait(3).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,430,590);
p.frameBounds = [rect, rect, rect, rect];


(lib.panel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(4));

	// options
	this.fringe_4 = new lib.icon_fringe4_mc();
	this.fringe_4.setTransform(100,100);

	this.fringe_3 = new lib.icon_fringe3_mc();
	this.fringe_3.setTransform(-100,100);

	this.fringe_2 = new lib.icon_fringe2_mc();
	this.fringe_2.setTransform(100,-100);

	this.fringe_1 = new lib.icon_fringe1_mc();
	this.fringe_1.setTransform(-100,-100);

	this.fringe_8 = new lib.icon_fringe8_mc();
	this.fringe_8.setTransform(100,100);

	this.fringe_7 = new lib.icon_fringe7_mc();
	this.fringe_7.setTransform(-100,100);

	this.fringe_6 = new lib.icon_fringe6_mc();
	this.fringe_6.setTransform(100,-100);

	this.fringe_5 = new lib.icon_fringe5_mc();
	this.fringe_5.setTransform(-100,-100);

	this.fringe_12 = new lib.icon_fringe12_mc();
	this.fringe_12.setTransform(100,100);

	this.fringe_11 = new lib.icon_fringe11_mc();
	this.fringe_11.setTransform(-100,100);

	this.fringe_10 = new lib.icon_fringe10_mc();
	this.fringe_10.setTransform(100,-100);

	this.fringe_9 = new lib.icon_fringe9_mc();
	this.fringe_9.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fringe_1},{t:this.fringe_2},{t:this.fringe_3},{t:this.fringe_4}]}).to({state:[{t:this.fringe_5},{t:this.fringe_6},{t:this.fringe_7},{t:this.fringe_8}]},1).to({state:[{t:this.fringe_9},{t:this.fringe_10},{t:this.fringe_11},{t:this.fringe_12}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_fringe = new lib.color_picker_2_mc();
	this.color_fringe.setTransform(-180,-180);
	this.color_fringe._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_fringe).wait(3).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,430,590);
p.frameBounds = [rect, rect, rect, rect];


(lib.panel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

	// options
	this.eyes_4 = new lib.icon_eyes4_mc();
	this.eyes_4.setTransform(100,100);

	this.eyes_3 = new lib.icon_eyes3_mc();
	this.eyes_3.setTransform(-100,100);

	this.eyes_2 = new lib.icon_eyes2_mc();
	this.eyes_2.setTransform(100,-100);

	this.eyes_1 = new lib.icon_eyes1_mc();
	this.eyes_1.setTransform(-100,-100);

	this.eyes_8 = new lib.icon_eyes8_mc();
	this.eyes_8.setTransform(100,100);

	this.eyes_7 = new lib.icon_eyes7_mc();
	this.eyes_7.setTransform(-100,100);

	this.eyes_6 = new lib.icon_eyes6_mc();
	this.eyes_6.setTransform(100,-100);

	this.eyes_5 = new lib.icon_eyes5_mc();
	this.eyes_5.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eyes_1},{t:this.eyes_2},{t:this.eyes_3},{t:this.eyes_4}]}).to({state:[{t:this.eyes_5},{t:this.eyes_6},{t:this.eyes_7},{t:this.eyes_8}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_eyes = new lib.color_picker_2_mc();
	this.color_eyes.setTransform(-180,-180);
	this.color_eyes._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_eyes).wait(2).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,430,590);
p.frameBounds = [rect, rect, rect];


(lib.ken_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// accessory
	this.accessory = new lib.ken_hand_all_mc();
	this.accessory.setTransform(-25.8,-23.3,1,1,0,0,0,11.5,0.7);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// headdress
	this.headdress = new lib.ken_hat_all_mc();
	this.headdress.setTransform(16,-155,1,1,0,0,0,188.5,-4.5);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// jewelry
	this.jewelry = new lib.ken_glasses_all_mc();
	this.jewelry.setTransform(13,-67.4,1,1,0,0,0,178.5,31.4);

	this.timeline.addTween(cjs.Tween.get(this.jewelry).wait(1));

	// hair
	this.hair = new lib.ken_fringe_all_mc();
	this.hair.setTransform(7.5,-138.1);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

	// eyes
	this.eyes = new lib.ken_eyes_all_mc();
	this.eyes.setTransform(19.9,-70.1);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// mouth
	this.mouth = new lib.ken_lips_all_mc();
	this.mouth.setTransform(18.1,-34);

	this.timeline.addTween(cjs.Tween.get(this.mouth).wait(1));

	// dress
	this.dress = new lib.ken_dress_all_mc();
	this.dress.setTransform(19.4,97.8,1,1,0,0,0,20.9,-119.6);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// top
	this.top = new lib.ken_top_all_mc();
	this.top.setTransform(16.9,27.1,1,1,0,0,0,18.4,-190.3);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

	// bottom
	this.bottom = new lib.ken_bottom_all_mc();
	this.bottom.setTransform(-0.5,137.4,1,1,0,0,0,1,-80);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1));

	// shoes
	this.shoes = new lib.ken_shoes_all_mc();
	this.shoes.setTransform(-1.5,217.4);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// skin
	this.skin = new lib.ken_boby_mc();
	this.skin.setTransform(10.2,16.2);

	this.timeline.addTween(cjs.Tween.get(this.skin).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.7,-218.2,197,458.3);
p.frameBounds = [rect];


(lib.icon_dress1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.barbie_dress1_mc();
	this.instance.setTransform(6,4.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// substrate
	this.substrate_mc = new lib.substrate_option_mc();

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-92,-92,184,184);
p.frameBounds = [rect];


(lib.barbie_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// headdress
	this.headdress = new lib.barbie_hat_all1_mc();
	this.headdress.setTransform(-13,-169,1,1,0,0,0,219.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.headdress).wait(1));

	// jewelry
	this.jewelry = new lib.barbie_glasses_all_mc();
	this.jewelry.setTransform(-195.8,-128.7);

	this.timeline.addTween(cjs.Tween.get(this.jewelry).wait(1));

	// accessory
	this.accessory = new lib.barbie_bag_all_mc();
	this.accessory.setTransform(39.1,74.8,1,1,0,0,0,-105.4,5.7);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// fringe
	this.fringe = new lib.barbie_fringe_all_mc();
	this.fringe.setTransform(-14.5,-96);

	this.timeline.addTween(cjs.Tween.get(this.fringe).wait(1));

	// mouth
	this.mouth = new lib.barbie_lips_all_mc();
	this.mouth.setTransform(-16.2,-41.4);

	this.timeline.addTween(cjs.Tween.get(this.mouth).wait(1));

	// eyes
	this.eyes = new lib.barbie_eyes_all_mc();
	this.eyes.setTransform(-16.5,-81.9);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// dress
	this.dress = new lib.barbie_dress_all_mc();
	this.dress.setTransform(-16.7,54.3,1,1,0,0,0,-1.6,4.5);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// bottom
	this.bottom = new lib.barbie_bottom_all_mc();
	this.bottom.setTransform(-19.1,86.8,1,1,0,0,0,-4,37);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(1));

	// top
	this.top = new lib.barbie_top_all_mc();
	this.top.setTransform(-15.2,26.8,1,1,0,0,0,-0.1,-23);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(1));

	// shoes
	this.shoes = new lib.barbie_shoes_all_mc();
	this.shoes.setTransform(3.3,227.9,1,1,0,0,0,18.4,178.1);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// skin
	this.skin = new lib.barbie_body_mc();
	this.skin.setTransform(-13.7,107.9);

	this.timeline.addTween(cjs.Tween.get(this.skin).wait(1));

	// headdressSecond
	this.headdressSecond = new lib.barbie_hat_all2_mc();
	this.headdressSecond.setTransform(-13,-169,1,1,0,0,0,219.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.headdressSecond).wait(1));

	// hair
	this.hair = new lib.barbie_hair_all_mc();
	this.hair.setTransform(-8.6,-80.1);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125.7,-210.2,222.4,466.9);
p.frameBounds = [rect];


(lib.photoContainer_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.logo_btn = new lib.logo_1_mc();
	this.logo_btn.setTransform(100.1,50.2,0.526,0.526,0,0,0,0.1,0.4);
	this.logo_btn.cache(-192,-92,384,184);

	this.timeline.addTween(cjs.Tween.get(this.logo_btn).wait(1));

	// hero
	this.hero_2 = new lib.ken_mc();
	this.hero_2.setTransform(277,330.4,1,1,0,0,0,0,0.4);

	this.hero_1 = new lib.barbie_mc();
	this.hero_1.setTransform(515,330);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hero_1},{t:this.hero_2}]}).wait(1));

	// bg
	this.bg = new lib.backgrounds_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.panel_8_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// navigation
	this.navigation_mc = new lib.navigation_mc();
	this.navigation_mc.setTransform(0,350);

	this.timeline.addTween(cjs.Tween.get(this.navigation_mc).wait(3));

	// options
	this.dress_4 = new lib.icon_dress4_mc();
	this.dress_4.setTransform(100,100);

	this.dress_3 = new lib.icon_dress3_mc();
	this.dress_3.setTransform(-100,100);

	this.dress_2 = new lib.icon_dress2_mc();
	this.dress_2.setTransform(100,-100);

	this.dress_1 = new lib.icon_dress1_mc();
	this.dress_1.setTransform(-100,-100);

	this.dress_8 = new lib.icon_dress8_mc();
	this.dress_8.setTransform(100,100);

	this.dress_7 = new lib.icon_dress7_mc();
	this.dress_7.setTransform(-100,100);

	this.dress_6 = new lib.icon_dress6_mc();
	this.dress_6.setTransform(100,-100);

	this.dress_5 = new lib.icon_dress5_mc();
	this.dress_5.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_1},{t:this.dress_2},{t:this.dress_3},{t:this.dress_4}]}).to({state:[{t:this.dress_5},{t:this.dress_6},{t:this.dress_7},{t:this.dress_8}]},1).to({state:[]},1).wait(1));

	// palette
	this.color_dress = new lib.color_picker_2_mc();
	this.color_dress.setTransform(-180,-180);
	this.color_dress._off = true;

	this.timeline.addTween(cjs.Tween.get(this.color_dress).wait(2).to({_off:false},0).wait(1));

	// bg
	this.instance = new lib.bg_panel_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-215,-215,430,590);
p.frameBounds = [rect, rect, rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(700,530);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.playAgain_btn = new lib.play_again_btn();
	this.playAgain_btn.setTransform(100,530);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.play_again_btn(), 3);

	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(450,700);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(350,700);

	this.facebook_btn = new lib.facebook_btn();
	this.facebook_btn.setTransform(400,900,0.8,0.8);
	new cjs.ButtonHelper(this.facebook_btn, 0, 1, 2, false, new lib.facebook_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800,0.824,0.824);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(685,40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.moreGames_btn},{t:this.facebook_btn},{t:this.prev_mc},{t:this.next_mc},{t:this.playAgain_btn},{t:this.photo_btn}]}).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-490,1200,1425.9);
p.frameBounds = [rect];


(lib.panels_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{hero_1_category_1_subcategory_1:0,hero_1_category_1_subcategory_2:1,hero_1_category_1_subcategory_3:2,hero_1_category_2_subcategory_1:3,hero_1_category_2_subcategory_2:4,hero_1_category_3_subcategory_1:5,hero_1_category_3_subcategory_2:6,hero_1_category_3_subcategory_3:7,hero_1_category_3_subcategory_4:8,hero_1_category_4_subcategory_1:9,hero_1_category_4_subcategory_2:10,hero_1_category_4_subcategory_3:11,hero_1_category_5_subcategory_1:12,hero_2_category_6_subcategory_1:13,hero_2_category_6_subcategory_2:14,hero_2_category_6_subcategory_3:15,hero_2_category_7_subcategory_1:16,hero_2_category_8_subcategory_1:17,hero_2_category_8_subcategory_2:18,hero_2_category_8_subcategory_3:19,hero_2_category_8_subcategory_4:20,hero_2_category_9_subcategory_1:21,hero_2_category_9_subcategory_2:22,hero_2_category_9_subcategory_3:23,hero_2_category_10_subcategory_1:24});

	// panels
	this.panel_1 = new lib.panel_1_mc();

	this.panel_2 = new lib.panel_2_mc();

	this.panel_3 = new lib.panel_3_mc();

	this.panel_4 = new lib.panel_4_mc();

	this.panel_5 = new lib.panel_5_mc();

	this.panel_6 = new lib.panel_6_mc();

	this.panel_7 = new lib.panel_7_mc();

	this.panel_8 = new lib.panel_8_mc();

	this.panel_9 = new lib.panel_9_mc();

	this.panel_10 = new lib.panel_10_mc();

	this.panel_11 = new lib.panel_11_mc();

	this.panel_12 = new lib.panel_12_mc();

	this.panel_13 = new lib.panel_13_mc();

	this.panel_14 = new lib.panel_14_mc();

	this.panel_15 = new lib.panel_15_mc();

	this.panel_16 = new lib.panel_16_mc();

	this.panel_17 = new lib.panel_17_mc();

	this.panel_18 = new lib.panel_18_mc();

	this.panel_19 = new lib.panel_19_mc();

	this.panel_20 = new lib.panel_20_mc();

	this.panel_21 = new lib.panel_21_mc();

	this.panel_22 = new lib.panel_22_mc();

	this.panel_23 = new lib.panel_23_mc();

	this.panel_24 = new lib.panel_24_mc();

	this.panel_25 = new lib.panel_25_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.panel_1}]}).to({state:[{t:this.panel_2}]},1).to({state:[{t:this.panel_3}]},1).to({state:[{t:this.panel_4}]},1).to({state:[{t:this.panel_5}]},1).to({state:[{t:this.panel_6}]},1).to({state:[{t:this.panel_7}]},1).to({state:[{t:this.panel_8}]},1).to({state:[{t:this.panel_9}]},1).to({state:[{t:this.panel_10}]},1).to({state:[{t:this.panel_11}]},1).to({state:[{t:this.panel_12}]},1).to({state:[{t:this.panel_13}]},1).to({state:[{t:this.panel_14}]},1).to({state:[{t:this.panel_15}]},1).to({state:[{t:this.panel_16}]},1).to({state:[{t:this.panel_17}]},1).to({state:[{t:this.panel_18}]},1).to({state:[{t:this.panel_19}]},1).to({state:[{t:this.panel_20}]},1).to({state:[{t:this.panel_21}]},1).to({state:[{t:this.panel_22}]},1).to({state:[{t:this.panel_23}]},1).to({state:[{t:this.panel_24}]},1).to({state:[{t:this.panel_25}]},1).wait(1));

	// category
	this.category_5 = new lib.category_5_mc();
	this.category_5.setTransform(160,-230);

	this.category_4 = new lib.category_4_mc();
	this.category_4.setTransform(80,-230);

	this.category_3 = new lib.category_3_mc();
	this.category_3.setTransform(0,-230);

	this.category_2 = new lib.category_2_mc();
	this.category_2.setTransform(-80,-230);

	this.category_1 = new lib.category_1_mc();
	this.category_1.setTransform(-160,-230);

	this.category_10 = new lib.category_10_mc();
	this.category_10.setTransform(160,-230);

	this.category_9 = new lib.category_9_mc();
	this.category_9.setTransform(80,-230);

	this.category_8 = new lib.category_8_mc();
	this.category_8.setTransform(0,-230);

	this.category_7 = new lib.category_7_mc();
	this.category_7.setTransform(-80,-230);

	this.category_6 = new lib.category_6_mc();
	this.category_6.setTransform(-160,-230);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.category_1},{t:this.category_2},{t:this.category_3},{t:this.category_4},{t:this.category_5}]}).to({state:[{t:this.category_6},{t:this.category_7},{t:this.category_8},{t:this.category_9},{t:this.category_10}]},13).wait(12));

	// subcategory
	this.subcategory_1_1 = new lib.subcategory_1_1_mc();
	this.subcategory_1_1.setTransform(-240,-160);

	this.subcategory_3_1 = new lib.subcategory_3_1_mc();
	this.subcategory_3_1.setTransform(-240,0);

	this.subcategory_2_1 = new lib.subcategory_2_1_mc();
	this.subcategory_2_1.setTransform(-240,-80);

	this.subcategory_2_2 = new lib.subcategory_5_1_mc();
	this.subcategory_2_2.setTransform(-240,-80);

	this.subcategory_1_2 = new lib.subcategory_4_1_mc();
	this.subcategory_1_2.setTransform(-240,-160);

	this.subcategory_4_3 = new lib.subcategory_9_1_mc();
	this.subcategory_4_3.setTransform(-240,80);

	this.subcategory_3_3 = new lib.subcategory_8_1_mc();
	this.subcategory_3_3.setTransform(-240,0);

	this.subcategory_2_3 = new lib.subcategory_7_1_mc();
	this.subcategory_2_3.setTransform(-240,-80);

	this.subcategory_1_3 = new lib.subcategory_6_1_mc();
	this.subcategory_1_3.setTransform(-240,-160);

	this.subcategory_3_4 = new lib.subcategory_12_1_mc();
	this.subcategory_3_4.setTransform(-240,0);

	this.subcategory_2_4 = new lib.subcategory_11_1_mc();
	this.subcategory_2_4.setTransform(-240,-80);

	this.subcategory_1_4 = new lib.subcategory_10_1_mc();
	this.subcategory_1_4.setTransform(-240,-160);

	this.subcategory_1_5 = new lib.subcategory_13_1_mc();
	this.subcategory_1_5.setTransform(-240,-160);

	this.subcategory_3_6 = new lib.subcategory_3_2_mc();
	this.subcategory_3_6.setTransform(-240,0);

	this.subcategory_2_6 = new lib.subcategory_2_2_mc();
	this.subcategory_2_6.setTransform(-240,-80);

	this.subcategory_1_6 = new lib.subcategory_1_2_mc();
	this.subcategory_1_6.setTransform(-240,-160);

	this.subcategory_1_7 = new lib.subcategory_4_2_mc();
	this.subcategory_1_7.setTransform(-240,-160);

	this.subcategory_4_8 = new lib.subcategory_8_2_mc();
	this.subcategory_4_8.setTransform(-240,80);

	this.subcategory_3_8 = new lib.subcategory_7_2_mc();
	this.subcategory_3_8.setTransform(-240,0);

	this.subcategory_2_8 = new lib.subcategory_6_2_mc();
	this.subcategory_2_8.setTransform(-240,-80);

	this.subcategory_1_8 = new lib.subcategory_5_2_mc();
	this.subcategory_1_8.setTransform(-240,-160);

	this.subcategory_3_9 = new lib.subcategory_11_2_mc();
	this.subcategory_3_9.setTransform(-240,0);

	this.subcategory_2_9 = new lib.subcategory_10_2_mc();
	this.subcategory_2_9.setTransform(-240,-80);

	this.subcategory_1_9 = new lib.subcategory_9_2_mc();
	this.subcategory_1_9.setTransform(-240,-160);

	this.subcategory_1_10 = new lib.subcategory_12_2_mc();
	this.subcategory_1_10.setTransform(-240,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subcategory_2_1},{t:this.subcategory_3_1},{t:this.subcategory_1_1}]}).to({state:[{t:this.subcategory_1_2},{t:this.subcategory_2_2}]},3).to({state:[{t:this.subcategory_1_3},{t:this.subcategory_2_3},{t:this.subcategory_3_3},{t:this.subcategory_4_3}]},2).to({state:[{t:this.subcategory_1_4},{t:this.subcategory_2_4},{t:this.subcategory_3_4}]},4).to({state:[{t:this.subcategory_1_5}]},3).to({state:[{t:this.subcategory_1_6},{t:this.subcategory_2_6},{t:this.subcategory_3_6}]},1).to({state:[{t:this.subcategory_1_7}]},3).to({state:[{t:this.subcategory_1_8},{t:this.subcategory_2_8},{t:this.subcategory_3_8},{t:this.subcategory_4_8}]},1).to({state:[{t:this.subcategory_1_9},{t:this.subcategory_2_9},{t:this.subcategory_3_9}]},4).to({state:[{t:this.subcategory_1_10}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-295,-285,510,660);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-295,-285,519,660), rect, rect, rect, rect=new cjs.Rectangle(-295,-285,510,660), rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-295,-285,519,660), rect, rect, rect, new cjs.Rectangle(-295,-285,510,660)];


(lib.ConstructorScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.prev_hero_mc = new lib.prev_hero_mc();
	this.prev_hero_mc.setTransform(50,470);

	this.next_hero_mc = new lib.next_hero_mc();
	this.next_hero_mc.setTransform(250,470);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,800);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.done_btn = new lib.done_btn();
	this.done_btn.setTransform(580,530);
	new cjs.ButtonHelper(this.done_btn, 0, 1, 2, false, new lib.done_btn(), 3);

	this.random_btn = new lib.random_btn();
	this.random_btn.setTransform(600,800);
	new cjs.ButtonHelper(this.random_btn, 0, 1, 2, false, new lib.random_btn(), 3);

	this.reset_btn = new lib.reset_btn();
	this.reset_btn.setTransform(200,800);
	new cjs.ButtonHelper(this.reset_btn, 0, 1, 2, false, new lib.reset_btn(), 3);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(760,-40);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,40);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(100,-50,0.905,0.905);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.reset_btn},{t:this.random_btn},{t:this.done_btn},{t:this.moreGames_btn},{t:this.next_hero_mc},{t:this.prev_hero_mc}]}).wait(1));

	// panels
	this.panels_mc = new lib.panels_mc();
	this.panels_mc.setTransform(580,300);

	this.timeline.addTween(cjs.Tween.get(this.panels_mc).wait(1));

	// hero_1
	this.hero_1 = new lib.barbie_mc();
	this.hero_1.setTransform(160,300);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

	// hero_2
	this.hero_2 = new lib.ken_mc();
	this.hero_2.setTransform(145,310.4,1,1,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

	// bg
	this.bg = new lib.backgrounds_mc();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-176.9,1200,1064.4);
p.frameBounds = [rect];


(lib.storage_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

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

	this.instance_3 = new lib.ConstructorScreen();

	this.redirect_mc = new lib.RedirectScreen();

	this.instance_4 = new lib.ResultScreen();

	this.instance_5 = new lib.InstructionScreen();

	this.instance_6 = new lib.Cursor();
	this.instance_6.setTransform(257.2,68.7);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(158.7,69.2);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(65.7,69.2);

	this.instance_7 = new lib.OrientationLockScreen();

	this.instance_8 = new lib.CurtainScreen();

	this.instance_9 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.redirect_mc}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).to({state:[{t:this.instance_9}]},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,127,39.8);
p.frameBounds = [rect, new cjs.Rectangle(-200,0,1200,601.4), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-200,-76.9,1200,1211.3), new cjs.Rectangle(-200,-176.9,1200,1061.3), new cjs.Rectangle(-200,-51,1200,651), new cjs.Rectangle(-200,-490,1200,1424.1), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(30.7,33.7,261.5,70.5), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-1400,0,1200,600), rect=null, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-10,1220,620)];


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