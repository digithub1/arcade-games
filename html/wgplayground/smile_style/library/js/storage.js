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
		{src:"library/images/storage_atlas_15.png", id:"storage_atlas_15"},
		{src:"library/images/storage_atlas_16.png", id:"storage_atlas_16"},
		{src:"library/images/storage_atlas_17.png", id:"storage_atlas_17"},
		{src:"library/images/storage_atlas_18.png", id:"storage_atlas_18"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_5", frames: [[0,0,1200,600],[0,602,600,600],[602,602,476,673]]},
		{name:"storage_atlas_6", frames: [[493,0,352,741],[0,0,491,545],[0,743,1200,200]]},
		{name:"storage_atlas_7", frames: [[462,874,500,300],[546,0,346,590],[0,874,460,374],[0,0,544,384],[894,0,400,400],[0,592,640,280],[642,592,640,280]]},
		{name:"storage_atlas_8", frames: [[764,0,338,350],[382,0,380,380],[0,0,380,380],[764,352,480,220],[0,382,480,220],[482,574,480,220],[0,604,480,220],[0,1048,480,220],[482,796,480,220],[482,1018,480,220],[0,826,480,220]]},
		{name:"storage_atlas_9", frames: [[0,666,359,276],[722,722,359,276],[0,944,359,276],[361,666,359,276],[361,944,359,276],[722,444,359,276],[722,1000,380,260],[964,0,290,343],[482,0,480,220],[0,0,480,220],[0,222,480,220],[0,444,480,220],[482,222,480,220]]},
		{name:"storage_atlas_10", frames: [[0,871,300,300],[197,404,300,300],[244,0,300,300],[302,706,300,300],[0,0,242,402],[0,404,195,465],[302,1008,250,292],[499,432,289,268],[554,1008,250,292],[604,702,250,292],[806,996,250,292],[748,0,250,292],[1042,294,250,292],[790,294,250,292],[856,588,250,292],[1000,0,250,292],[546,0,200,430]]},
		{name:"storage_atlas_11", frames: [[1008,294,250,292],[1008,588,250,292],[504,588,250,292],[504,882,250,292],[756,588,250,292],[756,882,250,292],[1008,882,250,292],[252,882,250,292],[504,294,250,292],[756,294,250,292],[252,588,250,292],[504,0,250,292],[756,0,250,292],[252,294,250,292],[1008,0,250,292],[252,0,250,292],[0,588,250,292],[0,882,250,292],[0,0,250,292],[0,294,250,292]]},
		{name:"storage_atlas_12", frames: [[0,0,250,292],[0,294,250,292],[0,588,250,292],[0,882,250,292],[252,0,250,292],[504,0,250,292],[756,0,250,292],[1008,588,250,292],[504,588,250,292],[252,882,250,292],[504,882,250,292],[756,588,250,292],[1008,0,250,292],[1008,294,250,292],[252,294,250,292],[504,294,250,292],[252,588,250,292],[756,294,250,292],[1008,882,250,292],[756,882,250,292]]},
		{name:"storage_atlas_13", frames: [[756,0,250,292],[1008,0,250,292],[252,294,250,292],[252,588,250,292],[0,882,250,292],[252,882,250,292],[504,294,250,292],[0,0,250,292],[252,0,250,292],[504,0,250,292],[756,294,250,292],[0,294,250,292],[1008,294,250,292],[0,588,250,292],[756,882,250,292],[504,588,250,292],[504,882,250,292],[756,588,250,292],[1008,588,250,292],[1008,882,250,292]]},
		{name:"storage_atlas_14", frames: [[504,501,220,260],[726,501,220,260],[512,1025,220,260],[512,763,220,260],[948,294,220,260],[948,556,220,260],[734,818,220,260],[504,294,293,205],[734,1080,245,213],[0,0,250,292],[0,294,250,292],[252,294,250,292],[0,588,250,292],[0,882,250,292],[756,0,250,292],[1008,0,250,292],[252,0,250,292],[504,0,250,292],[252,588,250,292],[956,818,230,210],[981,1030,230,210],[252,882,258,280]]},
		{name:"storage_atlas_15", frames: [[928,212,230,210],[232,636,230,210],[232,424,230,210],[928,0,230,210],[0,0,230,210],[232,0,230,210],[464,0,230,210],[696,0,230,210],[232,212,230,210],[0,212,230,210],[0,424,230,210],[0,848,230,210],[464,212,230,210],[0,636,230,210],[0,1060,230,210],[696,212,230,210],[928,424,230,210],[464,1060,230,210],[464,636,230,210],[464,848,230,210],[464,424,230,210],[232,1060,230,210],[696,848,230,210],[928,636,230,210],[696,1060,230,210],[696,424,230,210],[232,848,230,210],[928,1060,230,210],[696,636,230,210],[928,848,230,210]]},
		{name:"storage_atlas_16", frames: [[1070,1102,190,190],[0,424,250,173],[484,910,200,212],[231,1092,190,190],[1048,910,190,190],[686,1022,190,190],[878,1102,190,190],[0,212,230,210],[0,0,230,210],[494,364,240,180],[978,546,240,180],[474,182,240,180],[716,0,240,180],[716,182,240,180],[0,599,240,180],[242,728,240,180],[252,546,240,180],[0,781,240,180],[474,0,240,180],[232,0,240,180],[484,728,240,180],[232,182,240,180],[726,728,240,180],[494,546,240,180],[252,364,240,180],[736,364,240,180],[958,0,240,180],[968,728,240,180],[242,910,240,180],[736,546,240,180],[958,182,240,180],[978,364,240,180],[0,963,229,186],[686,910,360,110]]},
		{name:"storage_atlas_17", frames: [[784,0,180,180],[0,0,190,190],[966,0,180,180],[602,182,180,180],[192,0,220,160],[856,502,270,96],[837,826,280,80],[856,420,340,80],[1119,826,150,143],[648,835,150,143],[486,863,150,143],[336,1114,150,143],[324,969,150,143],[184,1114,150,143],[1148,0,150,143],[0,1022,90,255],[92,1022,90,255],[414,0,186,188],[488,1008,150,142],[192,162,194,178],[388,190,187,171],[648,701,187,132],[182,342,186,159],[324,645,160,160],[486,701,160,160],[1018,664,160,160],[856,600,160,160],[0,374,160,160],[162,503,160,160],[162,665,160,160],[0,536,160,160],[324,807,160,160],[370,483,160,160],[532,539,160,160],[0,698,160,160],[0,860,160,160],[1128,502,160,160],[162,827,160,160],[694,539,160,160],[488,1204,408,50],[800,971,408,50],[640,1023,408,50],[488,1152,408,50],[0,192,180,180],[602,0,180,180],[898,1075,131,150],[1031,1075,131,150],[1164,1023,131,150],[370,364,241,117],[1027,182,241,117],[784,301,241,117],[613,420,241,117],[1027,301,241,117],[784,182,241,117]]},
		{name:"storage_atlas_18", frames: [[0,384,120,120],[122,384,120,120],[244,384,120,120],[488,335,64,64],[852,754,50,36],[549,909,50,36],[488,401,50,40],[450,909,50,40],[700,421,120,120],[0,131,150,129],[152,131,150,129],[760,0,150,129],[304,131,150,129],[0,733,90,50],[516,566,90,50],[366,457,120,120],[822,421,120,120],[488,444,120,120],[0,506,120,120],[826,877,48,48],[776,877,48,48],[610,444,64,64],[366,262,66,68],[852,667,43,42],[876,877,45,45],[678,131,218,67],[502,909,45,44],[770,667,80,124],[678,200,120,120],[122,622,180,60],[716,605,180,60],[486,649,180,60],[716,543,180,60],[334,579,180,60],[304,641,180,60],[450,877,220,30],[852,711,40,40],[933,754,50,158],[198,871,42,42],[294,853,50,150],[0,871,50,150],[52,871,50,150],[242,853,50,150],[346,853,50,150],[398,853,50,150],[456,131,220,80],[922,299,40,55],[922,356,40,43],[898,131,10,11],[578,213,69,94],[800,200,100,73],[944,470,57,60],[106,684,99,100],[649,213,23,38],[540,401,31,31],[672,877,50,50],[156,871,40,147],[964,0,50,210],[912,0,50,297],[876,924,40,40],[549,947,40,40],[198,915,40,40],[724,927,40,40],[450,951,40,40],[808,927,40,40],[643,929,40,40],[601,909,40,40],[766,927,40,40],[923,914,40,40],[985,754,25,200],[104,871,50,124],[964,212,40,256],[456,213,120,120],[700,322,80,80],[152,0,150,129],[304,0,150,129],[456,0,150,129],[0,0,150,129],[608,0,150,129],[228,506,104,104],[610,543,104,104],[122,506,104,114],[898,543,104,103],[898,648,103,104],[0,628,104,103],[0,262,120,120],[800,299,120,120],[122,262,120,120],[366,335,120,120],[244,262,120,120],[578,322,120,120],[724,877,50,48],[207,703,240,40],[691,793,240,40],[0,829,240,40],[207,745,240,40],[242,811,240,40],[484,835,240,40],[449,769,240,40],[0,787,240,40],[726,835,200,40],[449,711,200,40],[668,667,100,100]]}
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



(lib.animation_for_pointer_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
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
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_6_img = function() {
	this.spriteSheet = ss["storage_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_7_img = function() {
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
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_location_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg_location_2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg_location_3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bg_location_4_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bg_location_5_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bg_location_6_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.body_1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.body_2_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.body_3_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.body_4_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.body_5_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.body_6_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.butterfly1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.butterfly1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.butterfly2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.butterfly2_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_3_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dayneris_lens_19_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.dayneris_lens_20_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.dayneris_lens_21_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.dayneris_lens_22_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.decor_banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.decor_banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.els_nimb1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.facebook_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.frame_location_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.gubka_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyelashes1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyelashes2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes4_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_eyes5_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_face_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero1_hand_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips0_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero1_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero1_rouge_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero1_shadows_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero1_zac_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero2_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero2_face_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero2_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero2_hand_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips0_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero2_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero2_podvodka_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero2_rouge_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero2_shadows_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyelashes1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyelashes2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes0_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero3_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero3_face_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero3_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hero3_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lens_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips0_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero3_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero3_rouge_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero3_shadows_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyebrows3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyebrows4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyelashes_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyes0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyes0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero4_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero4_face_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero4_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero4_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero4_lens_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.hero4_lips0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero4_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero4_lips2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hero4_rouge_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero4_shadows_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero5_eyebrows_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero5_eyelashes1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero5_eyes0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero5_eyes0_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero5_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero5_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero5_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero5_face_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hero5_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hero5_glasses_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hero5_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero5_lens_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.hero5_lips0_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hero5_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hero5_rouge_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hero6_eyebrows1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hero6_eyebrows2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero6_eyelashes1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hero6_eyes1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hero6_eyes2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero6_eyes3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.hero6_face_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hero6_fringe1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hero6_hair1_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hero6_lips0_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.hero6_lips1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.hero6_rouge_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.hero6_shadows_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_de_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_es_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.horns1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.kist2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.lens1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.lipstick13_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.lipstick1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.lipstick25_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.lipstick2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.lipstick35_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.lipstick5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.magic1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.magic2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.magic3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.magic4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.magic5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.magic6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.magic7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.mascara19_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.mascara1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.nav_0_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.nav_10_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.nav_11_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.nav_12_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.nav_13_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.nav_14_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.nav_15_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.nav_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.nav_3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.nav_4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.nav_5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.nav_6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.nav_7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.nav_8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.nav_9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.pencil10_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.pencil13_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.pencil33_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.pencil5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.pencil9_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.podvodka1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.podvodka1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.rouge11_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.rouge7_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.rouge8_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_0_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_10_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_11_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_12_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_13_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_14_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_15_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_16_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_17_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_18_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_19_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_20_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_21_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_22_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_23_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_24_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_25_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_26_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_27_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_28_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_29_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_2_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_30_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_31_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_32_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_33_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_3_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_4_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_5_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_6_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_7_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.round_arrow_9_img = function() {
	this.spriteSheet = ss["storage_atlas_15"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_0_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_10_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_11_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_12_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_13_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_14_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_15_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_16_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_17_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_18_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_19_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_20_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_21_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_22_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_3_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_4_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_5_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_6_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_7_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_8_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.semicircular_arrow_9_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.shadows10_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.shadows12_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.shadows13_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.shadows1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.shadows5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.shelf2_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.smile1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.smile2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.smile3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.smile4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.smile5_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.smile6_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.social_network_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.social_network_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.social_network_3_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.social_network_4_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.star1_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_en_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_antiblocking_ads_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_ar_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_de_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.title_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_hi_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_id_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_it_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_16"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.title_zh_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.top1_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.top2_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.top3_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.top4_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.top5_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.top6_img = function() {
	this.spriteSheet = ss["storage_atlas_17"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_18"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.wing1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.wings2_img = function() {
	this.spriteSheet = ss["storage_atlas_14"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_redirect_img();
	this.instance.setTransform(-180,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-55,360,110);
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
	this.shape_6.graphics.f("rgba(0,0,0,0.098)").s().p("AvdPdQmZmZAApEQAApDGZmaQGamZJDgBQJEABGZGZQGbGaAAJDQAAJEmbGZQmZGapEABQpDgBmamag");
	this.shape_6.setTransform(9.3,14);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,289.3,294);
p.frameBounds = [rect];


(lib.preloader_13_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFF0C9","#FFBE1F"],[0,1],0.1,-65,0.1,64.9).s().p("AmxJlIgEgCQgzgjgdg2IgEgGQgbg4AAg+IAAsbQAAg+Abg4IAEgGQAdg3AzgiIAEgCQA5gkBEAAQBEgBA5AkIACACIJpGPIgBgBQA1AiAgA7QAdA4AABAQAABBgdA4QggA7g1AhIAAAAIpoGPIgCABQg5AlhEgBQhEAAg5gkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-65,110,130);
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


(lib.wings2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wings2_img();
	this.instance.setTransform(-129,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-129,-140,258,280);
p.frameBounds = [rect];


(lib.wing1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wing1_img();
	this.instance.setTransform(-100,-215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-215,200,430);
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


(lib.tables = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shelf2_img();
	this.instance.setTransform(389,-16,1,1,0,0,180);

	this.instance_1 = new lib.shelf2_img();
	this.instance_1.setTransform(-389,-16);

	this.instance_2 = new lib.shelf2_img();
	this.instance_2.setTransform(389,-169.9,1,1,0,0,180);

	this.instance_3 = new lib.shelf2_img();
	this.instance_3.setTransform(-389,-169.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-389,-169.9,778,340);
p.frameBounds = [rect];


(lib.shadows13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows13_img();
	this.instance.setTransform(-52.5,-45.1,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.5,-45.1,105,90.3);
p.frameBounds = [rect];


(lib.shadows12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows12_img();
	this.instance.setTransform(-52.5,-45.1,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.5,-45.1,105,90.3);
p.frameBounds = [rect];


(lib.shadows10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows10_img();
	this.instance.setTransform(-75,-64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-64.5,150,129);
p.frameBounds = [rect];


(lib.shadows5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows5_img();
	this.instance.setTransform(-52.5,-45.1,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.5,-45.1,105,90.3);
p.frameBounds = [rect];


(lib.shadows1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadows1_img();
	this.instance.setTransform(-52.5,-45.1,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.5,-45.1,105,90.3);
p.frameBounds = [rect];


(lib.shadow_location_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("ArxT6QiFABheheQheheAAiEIAA91QAAiEBeheQBehdCFAAIXjAAQCFAABeBdQBeBeAACEIAAd1QAACEheBeQheBeiFgBg");
	this.shape.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.5,-122.5,215,255);
p.frameBounds = [rect];


(lib.semicircular_arrow_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.semicircular_arrow_1_img();
	this.instance.setTransform(-120,-90);

	this.instance_1 = new lib.semicircular_arrow_2_img();
	this.instance_1.setTransform(-120,-90);

	this.instance_2 = new lib.semicircular_arrow_3_img();
	this.instance_2.setTransform(-120,-90);

	this.instance_3 = new lib.semicircular_arrow_4_img();
	this.instance_3.setTransform(-120,-90);

	this.instance_4 = new lib.semicircular_arrow_5_img();
	this.instance_4.setTransform(-120,-90);

	this.instance_5 = new lib.semicircular_arrow_6_img();
	this.instance_5.setTransform(-120,-90);

	this.instance_6 = new lib.semicircular_arrow_7_img();
	this.instance_6.setTransform(-120,-90);

	this.instance_7 = new lib.semicircular_arrow_8_img();
	this.instance_7.setTransform(-120,-90);

	this.instance_8 = new lib.semicircular_arrow_9_img();
	this.instance_8.setTransform(-120,-90);

	this.instance_9 = new lib.semicircular_arrow_10_img();
	this.instance_9.setTransform(-120,-90);

	this.instance_10 = new lib.semicircular_arrow_11_img();
	this.instance_10.setTransform(-120,-90);

	this.instance_11 = new lib.semicircular_arrow_12_img();
	this.instance_11.setTransform(-120,-90);

	this.instance_12 = new lib.semicircular_arrow_13_img();
	this.instance_12.setTransform(-120,-90);

	this.instance_13 = new lib.semicircular_arrow_14_img();
	this.instance_13.setTransform(-120,-90);

	this.instance_14 = new lib.semicircular_arrow_15_img();
	this.instance_14.setTransform(-120,-90);

	this.instance_15 = new lib.semicircular_arrow_16_img();
	this.instance_15.setTransform(-120,-90);

	this.instance_16 = new lib.semicircular_arrow_17_img();
	this.instance_16.setTransform(-120,-90);

	this.instance_17 = new lib.semicircular_arrow_18_img();
	this.instance_17.setTransform(-120,-90);

	this.instance_18 = new lib.semicircular_arrow_19_img();
	this.instance_18.setTransform(-120,-90);

	this.instance_19 = new lib.semicircular_arrow_20_img();
	this.instance_19.setTransform(-120,-90);

	this.instance_20 = new lib.semicircular_arrow_21_img();
	this.instance_20.setTransform(-120,-90);

	this.instance_21 = new lib.semicircular_arrow_22_img();
	this.instance_21.setTransform(-120,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[]},1).wait(3));

	// bg
	this.instance_22 = new lib.semicircular_arrow_0_img();
	this.instance_22.setTransform(-120,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-120,-90,240,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.s6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.smile6_img();
	this.instance.setTransform(-52,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52,-52,104,103);
p.frameBounds = [rect];


(lib.s5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.smile5_img();
	this.instance.setTransform(-52,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52,-52,103,104);
p.frameBounds = [rect];


(lib.s4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.smile4_img();
	this.instance.setTransform(-52,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52,-52,104,103);
p.frameBounds = [rect];


(lib.s3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.smile3_img();
	this.instance.setTransform(-52,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52,-52,104,114);
p.frameBounds = [rect];


(lib.s2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.smile2_img();
	this.instance.setTransform(-52,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52,-52,104,104);
p.frameBounds = [rect];


(lib.s1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.smile1_img();
	this.instance.setTransform(-52,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52,-52,104,104);
p.frameBounds = [rect];


(lib.round_arrow_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.round_arrow_1_img();
	this.instance.setTransform(-115,-105);

	this.instance_1 = new lib.round_arrow_2_img();
	this.instance_1.setTransform(-115,-105);

	this.instance_2 = new lib.round_arrow_3_img();
	this.instance_2.setTransform(-115,-105);

	this.instance_3 = new lib.round_arrow_4_img();
	this.instance_3.setTransform(-115,-105);

	this.instance_4 = new lib.round_arrow_5_img();
	this.instance_4.setTransform(-115,-105);

	this.instance_5 = new lib.round_arrow_6_img();
	this.instance_5.setTransform(-115,-105);

	this.instance_6 = new lib.round_arrow_7_img();
	this.instance_6.setTransform(-115,-105);

	this.instance_7 = new lib.round_arrow_8_img();
	this.instance_7.setTransform(-115,-105);

	this.instance_8 = new lib.round_arrow_9_img();
	this.instance_8.setTransform(-115,-105);

	this.instance_9 = new lib.round_arrow_10_img();
	this.instance_9.setTransform(-115,-105);

	this.instance_10 = new lib.round_arrow_11_img();
	this.instance_10.setTransform(-115,-105);

	this.instance_11 = new lib.round_arrow_12_img();
	this.instance_11.setTransform(-115,-105);

	this.instance_12 = new lib.round_arrow_13_img();
	this.instance_12.setTransform(-115,-105);

	this.instance_13 = new lib.round_arrow_14_img();
	this.instance_13.setTransform(-115,-105);

	this.instance_14 = new lib.round_arrow_15_img();
	this.instance_14.setTransform(-115,-105);

	this.instance_15 = new lib.round_arrow_16_img();
	this.instance_15.setTransform(-115,-105);

	this.instance_16 = new lib.round_arrow_17_img();
	this.instance_16.setTransform(-115,-105);

	this.instance_17 = new lib.round_arrow_18_img();
	this.instance_17.setTransform(-115,-105);

	this.instance_18 = new lib.round_arrow_19_img();
	this.instance_18.setTransform(-115,-105);
	this.instance_18._off = true;

	this.instance_19 = new lib.round_arrow_20_img();
	this.instance_19.setTransform(-115,-105);

	this.instance_20 = new lib.round_arrow_21_img();
	this.instance_20.setTransform(-115,-105);

	this.instance_21 = new lib.round_arrow_22_img();
	this.instance_21.setTransform(-115,-105);

	this.instance_22 = new lib.round_arrow_23_img();
	this.instance_22.setTransform(-115,-105);

	this.instance_23 = new lib.round_arrow_24_img();
	this.instance_23.setTransform(-115,-105);

	this.instance_24 = new lib.round_arrow_25_img();
	this.instance_24.setTransform(-115,-105);

	this.instance_25 = new lib.round_arrow_26_img();
	this.instance_25.setTransform(-115,-105);

	this.instance_26 = new lib.round_arrow_27_img();
	this.instance_26.setTransform(-115,-105);

	this.instance_27 = new lib.round_arrow_28_img();
	this.instance_27.setTransform(-115,-105);

	this.instance_28 = new lib.round_arrow_29_img();
	this.instance_28.setTransform(-115,-105);

	this.instance_29 = new lib.round_arrow_30_img();
	this.instance_29.setTransform(-115,-105);

	this.instance_30 = new lib.round_arrow_31_img();
	this.instance_30.setTransform(-115,-105);

	this.instance_31 = new lib.round_arrow_32_img();
	this.instance_31.setTransform(-115,-105);

	this.instance_32 = new lib.round_arrow_33_img();
	this.instance_32.setTransform(-115,-105);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[]},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(19).to({_off:false},0).wait(3).to({_off:true},1).wait(17));

	// bg
	this.instance_33 = new lib.round_arrow_0_img();
	this.instance_33.setTransform(-115,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115,-105,230,210);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.rouge11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge11_img();
	this.instance.setTransform(-45.8,-52.5,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.8,-52.5,91.7,105);
p.frameBounds = [rect];


(lib.rouge8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge8_img();
	this.instance.setTransform(-65.5,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-65.5,-75,131,150);
p.frameBounds = [rect];


(lib.rouge7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge7_img();
	this.instance.setTransform(-45.8,-52.5,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45.8,-52.5,91.7,105);
p.frameBounds = [rect];


(lib.podvodka1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.podvodka1_4_img();
	this.instance.setTransform(-20,-128);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-20,-128,40,256);
p.frameBounds = [rect];


(lib.podvodka1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.podvodka1_1_img();
	this.instance.setTransform(-25,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-62,50,124);
p.frameBounds = [rect];


(lib.pencil33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil33_img();
	this.instance.setTransform(-12.5,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.5,-100,25,200);
p.frameBounds = [rect];


(lib.pencil13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil13_img();
	this.instance.setTransform(-61.2,-7.5,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.2,-7.5,122.4,15);
p.frameBounds = [rect];


(lib.pencil10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil10_img();
	this.instance.setTransform(-61.2,-7.5,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.2,-7.5,122.4,15);
p.frameBounds = [rect];


(lib.pencil9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil9_img();
	this.instance.setTransform(-61.2,-7.5,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-61.2,-7.5,122.4,15);
p.frameBounds = [rect];


(lib.pencil5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pencil5_img();
	this.instance.setTransform(-81.6,-10,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.6,-10,163.2,20);
p.frameBounds = [rect];


(lib.object_17_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwkQkQm2m3gBptQABprG2m5QG4m2JsgBQJsABG4G2QG3G5ABJrQgBJtm3G3Qm4G4psAAQpsAAm4m4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-150,-150,300,300);
p.frameBounds = [rect];


(lib.object_16_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ap7J8QkIkHAAl1QAAl0EIkHQEHkIF0AAQF1AAEHEIQEHEHABF0QgBF1kHEHQkHEHl1ABQl0gBkHkHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.object_14_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjNjOAAkhQAAkgDNjOQDNjMEhgBQEhABDODMQDMDOABEgQgBEhjMDOQjODMkhABQkhgBjNjMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.object_12_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHuQjMjNgBkhQABkgDMjOQDOjMEggBQEhABDNDMQDODOAAEgQAAEhjODNQjNDOkhAAQkgAAjOjOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.object_12_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ap7J8QkIkIAAl0QAAl0EIkHQEHkIF0AAQF0AAEIEIQEHEHABF0QgBF0kHEIQkIEHl0ABQl0gBkHkHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.object_11_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjMjOgBkhQABkgDMjOQDOjMEggBQEhABDODMQDMDOABEgQgBEhjMDOQjODMkhABQkggBjOjMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.object_11_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHuQjMjNgBkhQABkgDMjOQDOjNEgAAQEhAADODNQDMDOABEgQgBEhjMDNQjODOkhAAQkgAAjOjOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.object_10_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoRISQjcjcABk2QgBk1DcjcQDcjcE1ABQE2gBDcDcQDcDcgBE1QABE2jcDcQjcDbk2AAQk1AAjcjbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.object_9_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ACOGnQhkhkgqh7QgqB7hkBkQiwCxj4AAQj4AAixixQivivAAj4QAAj3CviwQCxiwD4AAQD4AACwCwQBkBkAqB8QAqh8BkhkQCwiwD5AAQD5AACvCwQCwCwAAD3QAAD4iwCvQivCxj5AAQj5AAiwixg");
	this.shape.setTransform(56.8,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,233.5,120);
p.frameBounds = [rect];


(lib.object_9_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApYJYQj4j4AAlgQAAlfD4j5QD6j5FeABQFfgBD6D5QD4D5AAFfQAAFgj4D4Qj6D6lfgBQleABj6j6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect];


(lib.object_9_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjMjOgBkhQABkgDMjOQDOjMEggBQEhABDNDMQDODOAAEgQAAEhjODOQjNDMkhABQkggBjOjMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.object_9_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHuQjNjNAAkhQAAkgDNjOQDOjNEgAAQEhAADNDNQDODOAAEgQAAEhjODNQjNDOkhAAQkgAAjOjOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.object_8_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Az3T4QoQoPAArpQAAroIQoPQIPoPLogBQLpABIPIPQIPIPABLoQgBLpoPIPQoPIQrpAAQroAAoPoQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,360,360);
p.frameBounds = [rect];


(lib.object_8_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao0I1QjrjqAAlLQAAlKDrjqQDqjrFKAAQFLAADqDrQDrDqAAFKQAAFLjrDqQjqDrlLAAQlKAAjqjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.object_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ACEGnQhZhZgrhsQgrBshZBZQiwCxj4AAQj5AAiwixQivivAAj4QAAj3CviwQCwiwD5AAQD4AACwCwQBZBZArBtQArhtBZhZQCwiwD5AAQD4AACwCwQCwCwAAD3QAAD4iwCvQiwCxj4AAQj5AAiwixg");
	this.shape.setTransform(55.8,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,231.5,120);
p.frameBounds = [rect];


(lib.object_7_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApYJYQj4j4AAlgQAAlfD4j5QD6j5FeABQFggBD5D5QD4D5AAFfQAAFgj4D4Qj5D6lggBQleABj6j6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect];


(lib.object_7_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBOEIAA8HIODAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-90,90,180);
p.frameBounds = [rect];


(lib.object_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnBPnIAA/NIODAAIAAfNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-100,90,200);
p.frameBounds = [rect];


(lib.object_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApYJZQj4j6AAlfQAAleD4j6QD6j4FeAAQFgAAD5D4QD4D6AAFeQAAFfj4D6Qj5D4lgAAQleAAj6j4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85,-85,170,170);
p.frameBounds = [rect];


(lib.object_6_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHuQjMjNgBkhQABkgDMjOQDOjMEggBQEhABDNDMQDODOAAEgQAAEhjODNQjNDOkhAAQkgAAjOjOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.object_6_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ACWGoQhthugpiJQgoCJhuBuQivCwj5AAQj4AAiwiwQiwiwAAj4QAAj3CwivQCwixD4AAQD5AACvCxQBuBtAoCJQApiJBthtQCwixD5AAQD4AACwCxQCvCvAAD3QAAD4ivCwQiwCwj4AAQj5AAiwiwg");
	this.shape.setTransform(57.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,235,120);
p.frameBounds = [rect];


(lib.object_5_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I2QjpjrgBlLQABlKDpjqQDrjrFKAAQFLAADrDrQDpDqABFKQgBFLjpDrQjrDplLABQlKgBjrjpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.object_5_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AntHvQjOjOAAkhQAAkgDOjOQDNjMEggBQEhABDODMQDMDOABEgQgBEhjMDOQjODMkhABQkggBjNjMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.object_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao0I2QjrjrAAlLQAAlKDrjqQDqjrFKAAQFLAADrDrQDpDqABFKQgBFLjpDrQjrDplLABQlKgBjqjpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.object_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoSISQjajcAAk2QAAk1DajcQDcjcE2ABQE2gBDcDcQDcDcgBE1QABE2jcDcQjcDck2gBQk2ABjcjcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.object_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I1QjpjqgBlLQABlKDpjqQDrjrFKAAQFKAADrDrQDqDqABFKQgBFLjqDqQjrDrlKAAQlKAAjrjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.object_4_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ACWGoQhthtgpiKQgoCKhuBtQiuCwj6AAQj4AAiwiwQiviwAAj4QAAj3CviwQCwiwD4AAQD6AACuCwQBuBuAoCJQApiJBthuQCwiwD5AAQD4AACvCwQCxCwAAD3QAAD4ixCwQivCwj4AAQj5AAiwiwg");
	this.shape.setTransform(-57.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-175,-60,235,120);
p.frameBounds = [rect];


(lib.object_3_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqfKfQkVkWgBmJQABmIEVkXQEXkVGIgBQGJABEWEVQEXEXAAGIQAAGJkXEWQkWEXmJAAQmIAAkXkXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.object_3_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao1I1QjpjqgBlLQABlJDpjsQDrjpFKgBQFKABDrDpQDqDsABFJQgBFLjqDqQjrDrlKAAQlKAAjrjrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.object_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ao0I2QjrjrAAlLQAAlKDrjqQDqjrFKAAQFLAADrDrQDpDqABFKQgBFLjpDrQjrDplLABQlKgBjqjpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.object_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjMjOgBkhQABkgDMjNQDOjOEgAAQEhAADNDOQDODNAAEgQAAEhjODOQjNDMkhABQkggBjOjMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.object_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoRISQjbjcAAk2QAAk1DbjcQDcjbE1AAQE2AADcDbQDcDcgBE1QABE2jcDcQjcDck2gBQk1ABjcjcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.object_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Ap7J8QkIkIAAl0QAAl0EIkHQEHkIF0AAQF1AAEHEIQEIEHAAF0QAAF0kIEIQkHEIl1AAQl0AAkHkIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.object_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHuQjMjNgBkhQABkgDMjOQDOjMEggBQEhABDNDMQDODOAAEgQAAEhjODNQjNDOkhAAQkgAAjOjOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.object_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjMjOgBkhQABkgDMjOQDOjMEggBQEhABDODMQDMDOABEgQgBEhjMDOQjODMkhABQkggBjOjMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.object_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoRISQjbjcgBk2QABk1DbjcQDcjcE1ABQE3gBDbDcQDbDcABE1QgBE2jbDcQjbDbk3AAQk1AAjcjbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.object_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjMjNgBkiQABkgDMjOQDOjMEggBQEiABDNDMQDMDOABEgQgBEijMDNQjNDNkiAAQkgAAjOjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.object_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AoRISQjbjcAAk2QAAk1DbjcQDcjcE1ABQE2gBDcDcQDcDcgBE1QABE2jcDcQjcDck2gBQk1ABjcjcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-75,150,150);
p.frameBounds = [rect];


(lib.object_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnuHvQjMjOgBkhQABkgDMjOQDOjMEggBQEhABDODMQDMDOABEgQgBEhjMDOQjODMkhABQkggBjOjMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70,-70,140,140);
p.frameBounds = [rect];


(lib.mascara19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara19_img();
	this.instance.setTransform(-27,-76.5,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27,-76.5,54,153);
p.frameBounds = [rect];


(lib.mascara1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mascara1_img();
	this.instance.setTransform(-27,-76.5,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-27,-76.5,54,153);
p.frameBounds = [rect];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
p.frameBounds = [rect];


(lib.lipstick35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick35_img();
	this.instance.setTransform(-25,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-75,50,150);
p.frameBounds = [rect];


(lib.lipstick25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick25_img();
	this.instance.setTransform(-17.5,-52.5,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-17.5,-52.5,35,105);
p.frameBounds = [rect];


(lib.lipstick13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick13_img();
	this.instance.setTransform(-17.5,-52.5,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-17.5,-52.5,35,105);
p.frameBounds = [rect];


(lib.lipstick5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick5_img();
	this.instance.setTransform(-17.5,-52.5,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-17.5,-52.5,35,105);
p.frameBounds = [rect];


(lib.lipstick2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick2_img();
	this.instance.setTransform(-17.5,-52.5,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-17.5,-52.5,35,105);
p.frameBounds = [rect];


(lib.lipstick1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick1_img();
	this.instance.setTransform(-17.5,-52.5,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-17.5,-52.5,35,105);
p.frameBounds = [rect];


(lib.lens1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lens1_img();
	this.instance.setTransform(-21,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-21,42,42);
p.frameBounds = [rect];


(lib.kist2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kist2_img();
	this.instance.setTransform(-25,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-79,50,158);
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


(lib.horns1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.horns1_img();
	this.instance.setTransform(-135,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-135,-48,270,96);
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


(lib.hero6_shadows = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero6_shadows_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero6_rouge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero6_rouge_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero6_lips1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero6_lips1_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero6_lips0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero6_lips0_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero6_fringe1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero6_fringe1_img();
	this.instance.setTransform(-272,-192);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-272,-192,544,384);
p.frameBounds = [rect];


(lib.hero6_eyes3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero6_eyes3_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero6_eyes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero6_eyes2_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero6_eyes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero6_eyes1_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero6_eyelashes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero6_eyelashes1_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero6_eyebrows2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero6_eyebrows2_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero6_eyebrows1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero6_eyebrows1_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero5_rouge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero5_rouge_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero5_lips1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero5_lips1_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero5_lips0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero5_lips0_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero5_lens = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero5_lens_img();
	this.instance.setTransform(-22.5,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.5,-22,45,44);
p.frameBounds = [rect];


(lib.hero5_glasses = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero5_glasses_img();
	this.instance.setTransform(-109,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109,-33.5,218,67);
p.frameBounds = [rect];


(lib.hero5_fringe1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero5_fringe1_img();
	this.instance.setTransform(-230,-187);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-187,460,374);
p.frameBounds = [rect];


(lib.hero5_eyes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero5_eyes1_img();
	this.instance.setTransform(-125,-146);

	this.instance_1 = new lib.hero5_eyes2_img();
	this.instance_1.setTransform(-125,-146);

	this.instance_2 = new lib.hero5_eyes3_img();
	this.instance_2.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},2).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero5_eyes0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero5_eyes0_1_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero5_eyes0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero5_eyes0_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero5_eyelashes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero5_eyelashes1_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero5_eyebrows = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero5_eyebrows_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero4_shadows = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_shadows_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero4_rouge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_rouge_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero4_lips2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_lips2_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero4_lips1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_lips1_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero4_lips0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_lips0_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero4_lens = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_lens_img();
	this.instance.setTransform(-22.5,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-22.5,-22.5,45,45);
p.frameBounds = [rect];


(lib.hero4_fringe1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_fringe1_img();
	this.instance.setTransform(-122.5,-106.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-122.5,-106.5,245,213);
p.frameBounds = [rect];


(lib.hero4_eyes3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_eyes3_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero4_eyes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_eyes2_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero4_eyes1all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_eyes1_img();
	this.instance.setTransform(-125,-146);

	this.instance_1 = new lib.hero4_eyes2_img();
	this.instance_1.setTransform(-125,-146);

	this.instance_2 = new lib.hero4_eyes3_img();
	this.instance_2.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero4_eyes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_eyes1_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero4_eyes0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_eyes0_1_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero4_eyes0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_eyes0_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero4_eyelashes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_eyelashes_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero4_eyebrows4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_eyebrows4_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero4_eyebrows3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_eyebrows3_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero4_eyebrows2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_eyebrows2_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero4_eyebrows1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_eyebrows1_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero3_shadows = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_shadows_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero3_rouge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_rouge_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero3_lips1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_lips1_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero3_lips0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_lips0_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero3_lens = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_lens_img();
	this.instance.setTransform(-21.5,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21.5,-21,43,42);
p.frameBounds = [rect];


(lib.hero3_fringe1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_fringe1_img();
	this.instance.setTransform(-169,-175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-169,-175,338,350);
p.frameBounds = [rect];


(lib.hero3_eyes3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_eyes3_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero3_eyes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_eyes2_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero3_eyes1all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_eyes1_img();
	this.instance.setTransform(-125,-146);

	this.instance_1 = new lib.hero3_eyes2_img();
	this.instance_1.setTransform(-125,-146);

	this.instance_2 = new lib.hero3_eyes3_img();
	this.instance_2.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero3_eyes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_eyes1_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero3_eyes0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_eyes0_1_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero3_eyes0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_eyes0_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero3_eyelashes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_eyelashes2_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero3_eyelashes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_eyelashes1_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero3_eyebrows2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_eyebrows2_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero3_eyebrows1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_eyebrows1_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero2_shadows = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_shadows_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero2_rouge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_rouge_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero2_podvodka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_podvodka_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero2_lips2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips2_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero2_lips1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips1_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero2_lips0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_lips0_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero2_hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hand_img();
	this.instance.setTransform(-97.5,-232.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-97.5,-232.5,195,465);
p.frameBounds = [rect];


(lib.hero2_hair1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_hair1_img();
	this.instance.setTransform(-245.5,-272.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245.5,-272.5,491,545);
p.frameBounds = [rect];


(lib.hero2_fringe1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_fringe1_img();
	this.instance.setTransform(-146.5,-102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-146.5,-102.5,293,205);
p.frameBounds = [rect];


(lib.hero2_face = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_face_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero2_eyes3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes3_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero2_eyes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes2_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero2_eyes1_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes1_img();
	this.instance.setTransform(-125,-146);

	this.instance_1 = new lib.hero2_eyes2_img();
	this.instance_1.setTransform(-125,-146);

	this.instance_2 = new lib.hero2_eyes3_img();
	this.instance_2.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},13).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero2_eyes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyes1_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero2_eyebrows2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyebrows2_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero2_eyebrows1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero2_eyebrows1_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero1_zac = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_zac_img();
	this.instance.setTransform(-33,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-33,-34,66,68);
p.frameBounds = [rect];


(lib.hero1_shadows = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_shadows_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero1_rouge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_rouge_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero1_lips2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips2_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero1_lips1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips1_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero1_lips0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips0_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero1_hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hand_img();
	this.instance.setTransform(-121,-201);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121,-201,242,402);
p.frameBounds = [rect];


(lib.hero1_hair1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_hair1_img();
	this.instance.setTransform(-176,-370.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-176,-370.5,352,741);
p.frameBounds = [rect];


(lib.hero1_eyes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyes2_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero1_eyes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyes1_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero1_eyelashes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyelashes2_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero1_eyelashes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyelashes1_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero1_eyebrows2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyebrows2_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero1_eyebrows1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyebrows1_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.hero1_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_face_img();
	this.instance.setTransform(-130.5,-266.2);

	this.instance_1 = new lib.top1_img();
	this.instance_1.setTransform(-113.5,149.3);

	this.instance_2 = new lib.body_1_img();
	this.instance_2.setTransform(-179.5,-29.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-179.5,-266.2,359,532.5);
p.frameBounds = [rect];


(lib.h6_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero6_face_img();
	this.instance.setTransform(-130.5,-266.2);

	this.instance_1 = new lib.top6_img();
	this.instance_1.setTransform(-113.5,149.3);

	this.instance_2 = new lib.body_6_img();
	this.instance_2.setTransform(-179.5,-29.1);

	this.instance_3 = new lib.hero6_hair1_img();
	this.instance_3.setTransform(-153.3,-266.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-179.5,-266.2,359,532.5);
p.frameBounds = [rect];


(lib.h5_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero5_face_img();
	this.instance.setTransform(-130.5,-266.2);

	this.instance_1 = new lib.top5_img();
	this.instance_1.setTransform(-113.5,149.3);

	this.instance_2 = new lib.body_5_img();
	this.instance_2.setTransform(-179.5,-29.1);

	this.instance_3 = new lib.hero5_hair1_img();
	this.instance_3.setTransform(-140.5,-258.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-179.5,-266.2,359,532.5);
p.frameBounds = [rect];


(lib.h4_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero4_face_img();
	this.instance.setTransform(-119.2,-284.2);

	this.instance_1 = new lib.top4_img();
	this.instance_1.setTransform(-102.2,131.2);

	this.instance_2 = new lib.body_4_img();
	this.instance_2.setTransform(-168.2,-47.2);

	this.instance_3 = new lib.hero4_hair1_img();
	this.instance_3.setTransform(-238,-336.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-238,-336.5,476,673);
p.frameBounds = [rect];


(lib.h3_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero3_face_img();
	this.instance.setTransform(-130.5,-271.7);

	this.instance_1 = new lib.top3_img();
	this.instance_1.setTransform(-113.5,143.8);

	this.instance_2 = new lib.body_3_img();
	this.instance_2.setTransform(-179.5,-34.6);

	this.instance_3 = new lib.hero3_hair1_img();
	this.instance_3.setTransform(-170,-295);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-179.5,-295,359,590);
p.frameBounds = [rect];


(lib.h2_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top2_img();
	this.instance.setTransform(-113.5,30.7);

	this.instance_1 = new lib.body_2_img();
	this.instance_1.setTransform(-179.5,-147.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-179.5,-147.7,359,295.4);
p.frameBounds = [rect];


(lib.gubka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gubka_img();
	this.instance.setTransform(-100,-106);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-106,200,212);
p.frameBounds = [rect];


(lib.frame_location_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.frame_location_img();
	this.instance.setTransform(-110,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-130,220,260);
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


(lib.els_nimb1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.els_nimb1_img();
	this.instance.setTransform(-125,-86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-86.5,250,173);
p.frameBounds = [rect];


(lib.e2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero5_eyebrows_img();
	this.instance.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect];


(lib.dayneris_lens_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dayneris_lens_22_img();
	this.instance.setTransform(-52.5,-45.1,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.5,-45.1,105,90.3);
p.frameBounds = [rect];


(lib.dayneris_lens_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dayneris_lens_21_img();
	this.instance.setTransform(-52.5,-45.1,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.5,-45.1,105,90.3);
p.frameBounds = [rect];


(lib.dayneris_lens_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dayneris_lens_20_img();
	this.instance.setTransform(-52.5,-45.1,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52.5,-45.1,105,90.3);
p.frameBounds = [rect];


(lib.dayneris_lens_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dayneris_lens_19_img();
	this.instance.setTransform(-75,-64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75,-64.5,150,129);
p.frameBounds = [rect];


(lib.checkpoint_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AmOPnIAA/NIMdAAIAAfNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-100,80,200);
p.frameBounds = [rect];


(lib.butterfly2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.butterfly2_1_img();
	this.instance.setTransform(-25,-20);

	this.instance_1 = new lib.butterfly2_2_img();
	this.instance_1.setTransform(-25,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-20,50,40);
p.frameBounds = [rect, rect, rect, rect];


(lib.butterfly1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.butterfly1_1_img();
	this.instance.setTransform(-25,-18);

	this.instance_1 = new lib.butterfly1_2_img();
	this.instance_1.setTransform(-25,-18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-18,50,36);
p.frameBounds = [rect, rect, rect, rect];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,it:4,es:5,pt:6,tr:7,ja:8,hi:9,ar:10,id:11,zh:12});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-240,-110);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-240,-110);

	this.instance_2 = new lib.title_de_img();
	this.instance_2.setTransform(-240,-110);

	this.instance_3 = new lib.title_fr_img();
	this.instance_3.setTransform(-240,-110);

	this.instance_4 = new lib.title_it_img();
	this.instance_4.setTransform(-240,-110);

	this.instance_5 = new lib.title_es_img();
	this.instance_5.setTransform(-240,-110);

	this.instance_6 = new lib.title_pt_img();
	this.instance_6.setTransform(-240,-110);

	this.instance_7 = new lib.title_tr_img();
	this.instance_7.setTransform(-240,-110);

	this.instance_8 = new lib.title_ja_img();
	this.instance_8.setTransform(-240,-110);

	this.instance_9 = new lib.title_hi_img();
	this.instance_9.setTransform(-240,-110);

	this.instance_10 = new lib.title_ar_img();
	this.instance_10.setTransform(-240,-110);

	this.instance_11 = new lib.title_id_img();
	this.instance_11.setTransform(-240,-110);

	this.instance_12 = new lib.title_zh_img();
	this.instance_12.setTransform(-240,-110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-110,480,220);
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


(lib.body_nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.nav_0_img();
	this.instance.setTransform(-80,-80);

	this.instance_1 = new lib.nav_1_img();
	this.instance_1.setTransform(-80,-80);

	this.instance_2 = new lib.nav_2_img();
	this.instance_2.setTransform(-80,-80);

	this.instance_3 = new lib.nav_3_img();
	this.instance_3.setTransform(-80,-80);

	this.instance_4 = new lib.nav_4_img();
	this.instance_4.setTransform(-80,-80);

	this.instance_5 = new lib.nav_5_img();
	this.instance_5.setTransform(-80,-80);

	this.instance_6 = new lib.nav_6_img();
	this.instance_6.setTransform(-80,-80);

	this.instance_7 = new lib.nav_7_img();
	this.instance_7.setTransform(-80,-80);

	this.instance_8 = new lib.nav_8_img();
	this.instance_8.setTransform(-80,-80);

	this.instance_9 = new lib.nav_9_img();
	this.instance_9.setTransform(-80,-80);

	this.instance_10 = new lib.nav_10_img();
	this.instance_10.setTransform(-80,-80);

	this.instance_11 = new lib.nav_11_img();
	this.instance_11.setTransform(-80,-80);

	this.instance_12 = new lib.nav_12_img();
	this.instance_12.setTransform(-80,-80);

	this.instance_13 = new lib.nav_13_img();
	this.instance_13.setTransform(-80,-80);

	this.instance_14 = new lib.nav_14_img();
	this.instance_14.setTransform(-80,-80);

	this.instance_15 = new lib.nav_15_img();
	this.instance_15.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},60).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_for_pointer_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.animation_for_pointer_1_img();
	this.instance.setTransform(-90,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180,180);
p.frameBounds = [rect];


(lib.an2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.star1_img();
	this.instance.setTransform(-25,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-24,50,48);
p.frameBounds = [rect];


(lib.curtain_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.curtain_3_img();
	this.instance.setTransform(-300,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-300,-300,600,600);
p.frameBounds = [rect];


(lib.curtain_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
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


(lib.copyright_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.copyright_img();
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

	this.instance_2 = new lib.gravity_explosion_3_img();
	this.instance_2.setTransform(-28,-28,0.875,0.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-24,-24,48,48), rect, rect, new cjs.Rectangle(-28,-28,56,56)];


(lib.bubble_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// viewer
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
	this.shape.setTransform(600,275,1,0.917);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,550);
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


(lib.track_move_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.track_move_img();
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


(lib.facebook_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.facebook_img();
	this.instance.setTransform(-60,-60,0.667,0.667);

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

	// title
	this.instance = new lib.title_redirect_mc();
	this.instance.setTransform(0,240);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({y:360},0).to({y:240,alpha:1},10).wait(40).to({alpha:0.602},5).to({alpha:1},5).to({alpha:0.602},5).to({alpha:1},5).wait(110).to({y:360,alpha:0.012},10).wait(1));

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
	this.shape.setTransform(0,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-210,-210,420,505);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-210,420,625), new cjs.Rectangle(-210,-210,420,613), new cjs.Rectangle(-210,-210,420,601), new cjs.Rectangle(-210,-210,420,589), new cjs.Rectangle(-210,-210,420,577), new cjs.Rectangle(-210,-210,420,565), new cjs.Rectangle(-210,-210,420,553), new cjs.Rectangle(-210,-210,420,541), new cjs.Rectangle(-210,-210,420,529), new cjs.Rectangle(-210,-210,420,517), rect=new cjs.Rectangle(-210,-210,420,505), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-210,-210,420,517), new cjs.Rectangle(-210,-210,420,529), new cjs.Rectangle(-210,-210,420,541), new cjs.Rectangle(-210,-210,420,553), new cjs.Rectangle(-210,-210,420,565), new cjs.Rectangle(-210,-210,420,577), new cjs.Rectangle(-210,-210,420,589), new cjs.Rectangle(-210,-210,420,601), new cjs.Rectangle(-210,-210,420,613), new cjs.Rectangle(-210,-210,420,625)];


(lib.preloader_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.preloader_13_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.25,scaleY:1.25,x:-10},5).to({x:10},10).to({scaleX:1,scaleY:1,x:0},5).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-65,110,130);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-59.7,-68.2,115.5,136.5), new cjs.Rectangle(-64.5,-71.5,121,143), new cjs.Rectangle(-69.2,-74.7,126.5,149.5), new cjs.Rectangle(-74,-78,132,156), new cjs.Rectangle(-78.7,-81.2,137.5,162.5), new cjs.Rectangle(-76.7,-81.2,137.5,162.5), new cjs.Rectangle(-74.7,-81.2,137.5,162.5), new cjs.Rectangle(-72.7,-81.2,137.5,162.5), new cjs.Rectangle(-70.7,-81.2,137.5,162.5), new cjs.Rectangle(-68.7,-81.2,137.5,162.5), new cjs.Rectangle(-66.7,-81.2,137.5,162.5), new cjs.Rectangle(-64.7,-81.2,137.5,162.5), new cjs.Rectangle(-62.7,-81.2,137.5,162.5), new cjs.Rectangle(-60.7,-81.2,137.5,162.5), new cjs.Rectangle(-58.7,-81.2,137.5,162.5), new cjs.Rectangle(-58,-78,132,156), new cjs.Rectangle(-57.3,-74.7,126.5,149.5), new cjs.Rectangle(-56.5,-71.5,121,143), new cjs.Rectangle(-55.8,-68.2,115.5,136.5), rect=new cjs.Rectangle(-55,-65,110,130), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
p.nominalBounds = rect = new cjs.Rectangle(-140,-140,289.3,294);
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


(lib.w2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wings2();
	this.instance.setTransform(-119,-9,1,1,0,-11.2,168.8,115,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:-23.2,skewY:156.8,y:-8.9},9).to({skewX:-11.2,skewY:168.8,y:-9},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-153.8,-162.4,307.7,324.9);
p.frameBounds = [rect, new cjs.Rectangle(-156.1,-167.1,312.4,329.1), new cjs.Rectangle(-158.4,-171.8,317.1,333.2), new cjs.Rectangle(-160.6,-176.5,321.6,337.2), new cjs.Rectangle(-163.1,-181.7,326.7,341.5), new cjs.Rectangle(-165.3,-186.1,330.9,345.2), new cjs.Rectangle(-167.5,-190.5,335,348.6), new cjs.Rectangle(-170,-195.4,339.5,352.3), new cjs.Rectangle(-172.1,-199.5,343.1,355.4), new cjs.Rectangle(-174.4,-204.2,347.4,358.9), new cjs.Rectangle(-172.1,-199.7,343.2,355.5), new cjs.Rectangle(-170.4,-196.3,340.2,353), new cjs.Rectangle(-168.2,-192.2,336.4,349.8), new cjs.Rectangle(-166.2,-187.9,332.6,346.5), new cjs.Rectangle(-164.1,-183.6,328.5,343.1), new cjs.Rectangle(-162.3,-179.9,325,340), new cjs.Rectangle(-160.1,-175.4,320.6,336.3), new cjs.Rectangle(-157.9,-170.9,316.2,332.4), new cjs.Rectangle(-155.8,-166.3,311.6,328.3), new cjs.Rectangle(-153.8,-162.4,307.7,324.9)];


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
p.nominalBounds = rect = new cjs.Rectangle(-240,-110,480,220);
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


(lib.star1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.an2();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:90},4).to({rotation:180},5).to({rotation:270},5).to({rotation:360},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-25,-24,50,48);
p.frameBounds = [rect, new cjs.Rectangle(-32.1,-31.6,64.4,63.4), new cjs.Rectangle(-34.6,-34.5,69.2,69.2), new cjs.Rectangle(-31.7,-32.2,63.5,64.5), new cjs.Rectangle(-24,-25,48,50), new cjs.Rectangle(-30.5,-31.1,61,62.3), new cjs.Rectangle(-34.1,-34.2,68.1,68.6), new cjs.Rectangle(-34.3,-34.1,68.6,68.2), new cjs.Rectangle(-31.2,-30.5,62.4,61.1), new cjs.Rectangle(-25,-24,50,48), new cjs.Rectangle(-31.2,-30.5,62.4,61.1), new cjs.Rectangle(-34.3,-34.1,68.6,68.2), new cjs.Rectangle(-34,-34.3,68.1,68.6), new cjs.Rectangle(-30.4,-31.1,61,62.3), new cjs.Rectangle(-24,-25,48,50), new cjs.Rectangle(-30.5,-31.2,61.1,62.4), new cjs.Rectangle(-34,-34.3,68.2,68.6), new cjs.Rectangle(-34.2,-34,68.6,68.1), new cjs.Rectangle(-31.1,-30.4,62.3,61), new cjs.Rectangle(-25,-24,50,48)];


(lib.smile6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.s6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({scaleX:0.92},4).to({scaleX:1},5).to({scaleY:0.85},4).to({scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52,-52,104,103);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-51,-52,102,103), new cjs.Rectangle(-50,-52,100,103), new cjs.Rectangle(-48.9,-52,98,103), new cjs.Rectangle(-48,-52,96,103), new cjs.Rectangle(-48.7,-52,97.6,103), new cjs.Rectangle(-49.5,-52,99.2,103), new cjs.Rectangle(-50.3,-52,100.8,103), new cjs.Rectangle(-51.1,-52,102.4,103), new cjs.Rectangle(-52,-52,104,103), new cjs.Rectangle(-52,-50,104,99.1), new cjs.Rectangle(-52,-48,104,95.1), new cjs.Rectangle(-52,-46,104,91.1), new cjs.Rectangle(-52,-44,104,87.2), new cjs.Rectangle(-52,-45.5,104,90.3), new cjs.Rectangle(-52,-47.1,104,93.5), new cjs.Rectangle(-52,-48.7,104,96.7), new cjs.Rectangle(-52,-50.3,104,99.9), new cjs.Rectangle(-52,-52,104,103)];


(lib.smile5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.s5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({scaleX:0.92},4).to({scaleX:1},5).to({scaleY:0.85},4).to({scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52,-52,103,104);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-51,-52,101,104), new cjs.Rectangle(-50,-52,99.1,104), new cjs.Rectangle(-48.9,-52,97.1,104), new cjs.Rectangle(-48,-52,95.1,104), new cjs.Rectangle(-48.7,-52,96.7,104), new cjs.Rectangle(-49.5,-52,98.3,104), new cjs.Rectangle(-50.3,-52,99.9,104), new cjs.Rectangle(-51.1,-52,101.4,104), new cjs.Rectangle(-52,-52,103,104), new cjs.Rectangle(-52,-50,103,100), new cjs.Rectangle(-52,-48,103,96), new cjs.Rectangle(-52,-46,103,92), new cjs.Rectangle(-52,-44,103,88), new cjs.Rectangle(-52,-45.5,103,91.2), new cjs.Rectangle(-52,-47.1,103,94.4), new cjs.Rectangle(-52,-48.7,103,97.6), new cjs.Rectangle(-52,-50.3,103,100.8), new cjs.Rectangle(-52,-52,103,104)];


(lib.smile4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.s4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({scaleX:0.92},4).to({scaleX:1},5).to({scaleY:0.85},4).to({scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52,-52,104,103);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-51,-52,102,103), new cjs.Rectangle(-50,-52,100,103), new cjs.Rectangle(-48.9,-52,98,103), new cjs.Rectangle(-48,-52,96,103), new cjs.Rectangle(-48.7,-52,97.6,103), new cjs.Rectangle(-49.5,-52,99.2,103), new cjs.Rectangle(-50.3,-52,100.8,103), new cjs.Rectangle(-51.1,-52,102.4,103), new cjs.Rectangle(-52,-52,104,103), new cjs.Rectangle(-52,-50,104,99.1), new cjs.Rectangle(-52,-48,104,95.1), new cjs.Rectangle(-52,-46,104,91.1), new cjs.Rectangle(-52,-44,104,87.2), new cjs.Rectangle(-52,-45.5,104,90.3), new cjs.Rectangle(-52,-47.1,104,93.5), new cjs.Rectangle(-52,-48.7,104,96.7), new cjs.Rectangle(-52,-50.3,104,99.9), new cjs.Rectangle(-52,-52,104,103)];


(lib.smile3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.s3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({scaleX:0.92},4).to({scaleX:1},5).to({scaleY:0.85},4).to({scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52,-52,104,114);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-51,-52,102,114), new cjs.Rectangle(-50,-52,100,114), new cjs.Rectangle(-48.9,-52,98,114), new cjs.Rectangle(-48,-52,96,114), new cjs.Rectangle(-48.7,-52,97.6,114), new cjs.Rectangle(-49.5,-52,99.2,114), new cjs.Rectangle(-50.3,-52,100.8,114), new cjs.Rectangle(-51.1,-52,102.4,114), new cjs.Rectangle(-52,-52,104,114), new cjs.Rectangle(-52,-50,104,109.6), new cjs.Rectangle(-52,-48,104,105.3), new cjs.Rectangle(-52,-46,104,100.9), new cjs.Rectangle(-52,-44,104,96.5), new cjs.Rectangle(-52,-45.5,104,99.9), new cjs.Rectangle(-52,-47.1,104,103.5), new cjs.Rectangle(-52,-48.7,104,107), new cjs.Rectangle(-52,-50.3,104,110.5), new cjs.Rectangle(-52,-52,104,114)];


(lib.smile2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.s2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({scaleX:0.92},4).to({scaleX:1},5).to({scaleY:0.85},4).to({scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52,-52,104,104);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-51,-52,102,104), new cjs.Rectangle(-50,-52,100,104), new cjs.Rectangle(-48.9,-52,98,104), new cjs.Rectangle(-48,-52,96,104), new cjs.Rectangle(-48.7,-52,97.6,104), new cjs.Rectangle(-49.5,-52,99.2,104), new cjs.Rectangle(-50.3,-52,100.8,104), new cjs.Rectangle(-51.1,-52,102.4,104), new cjs.Rectangle(-52,-52,104,104), new cjs.Rectangle(-52,-50,104,100), new cjs.Rectangle(-52,-48,104,96), new cjs.Rectangle(-52,-46,104,92), new cjs.Rectangle(-52,-44,104,88), new cjs.Rectangle(-52,-45.5,104,91.2), new cjs.Rectangle(-52,-47.1,104,94.4), new cjs.Rectangle(-52,-48.7,104,97.6), new cjs.Rectangle(-52,-50.3,104,100.8), new cjs.Rectangle(-52,-52,104,104)];


(lib.smile1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.s1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({scaleX:0.92},4).to({scaleX:1},5).to({scaleY:0.85},4).to({scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-52,-52,104,104);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-51,-52,102,104), new cjs.Rectangle(-50,-52,100,104), new cjs.Rectangle(-48.9,-52,98,104), new cjs.Rectangle(-48,-52,96,104), new cjs.Rectangle(-48.7,-52,97.6,104), new cjs.Rectangle(-49.5,-52,99.2,104), new cjs.Rectangle(-50.3,-52,100.8,104), new cjs.Rectangle(-51.1,-52,102.4,104), new cjs.Rectangle(-52,-52,104,104), new cjs.Rectangle(-52,-50,104,100), new cjs.Rectangle(-52,-48,104,96), new cjs.Rectangle(-52,-46,104,92), new cjs.Rectangle(-52,-44,104,88), new cjs.Rectangle(-52,-45.5,104,91.2), new cjs.Rectangle(-52,-47.1,104,94.4), new cjs.Rectangle(-52,-48.7,104,97.6), new cjs.Rectangle(-52,-50.3,104,100.8), new cjs.Rectangle(-52,-52,104,104)];


(lib.semicircular_arrow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_3 = new lib.checkpoint_mc();
	this.checkpoint_3.setTransform(28,-62,1,1,-45);
	this.checkpoint_3.alpha = 0.012;

	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(-100,40,1,1,-45);
	this.checkpoint_1.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.setTransform(-70,-45,1,1,-45);
	this.checkpoint_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_2},{t:this.checkpoint_1},{t:this.checkpoint_3}]}).wait(1));

	// graph
	this.instance = new lib.semicircular_arrow_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.round_arrow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// checkpoints
	this.checkpoint_3 = new lib.checkpoint_mc();
	this.checkpoint_3.setTransform(-20,-80);
	this.checkpoint_3.alpha = 0.012;

	this.checkpoint_1 = new lib.checkpoint_mc();
	this.checkpoint_1.setTransform(-20,80);
	this.checkpoint_1.alpha = 0.012;

	this.checkpoint_2 = new lib.checkpoint_mc();
	this.checkpoint_2.setTransform(-80,0,1,1,-90);
	this.checkpoint_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checkpoint_2},{t:this.checkpoint_1},{t:this.checkpoint_3}]}).wait(1));

	// graph
	this.instance = new lib.round_arrow_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.body_nav_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.118)").s().p("Ap7J8QkIkHAAl1QAAl0EIkHQEHkIF0AAQF0AAEIEIQEIEHAAF0QAAF1kIEHQkIEIl0AAQl0AAkHkIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180.1,180);
p.frameBounds = [rect];


(lib.magic2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_25 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(25).call(this.frame_25).wait(1));

	// butterfly1
	this.instance = new lib.butterfly1();
	this.instance.setTransform(69.1,80,0.586,0.586,-137.2);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({scaleX:0.85,scaleY:0.85,x:36.2,y:115,alpha:1},8).to({scaleX:1,scaleY:1,x:12.2,y:139,alpha:0.012},11).to({_off:true},1).wait(1));

	// butterfly2
	this.instance_1 = new lib.butterfly2();
	this.instance_1.setTransform(85.7,65,0.657,0.657,53.2);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({scaleX:0.77,scaleY:0.77,x:126.2,y:53,alpha:1},8).to({scaleX:1,scaleY:1,x:153.7,y:35,alpha:0.012},11).to({_off:true},1).wait(1));

	// butterfly1
	this.instance_2 = new lib.butterfly1();
	this.instance_2.setTransform(66.6,58,0.664,0.664,-42);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({scaleX:0.73,scaleY:0.73,x:28,y:6.6,alpha:1},8).to({scaleX:1,scaleY:1,x:-13,y:-40,alpha:0.012},11).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_3 = new lib.magic1_img();

	this.instance_4 = new lib.magic2_img();

	this.instance_5 = new lib.magic3_img();

	this.instance_6 = new lib.magic4_img();

	this.instance_7 = new lib.magic5_img();

	this.instance_8 = new lib.magic6_img();

	this.instance_9 = new lib.magic7_img();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[]},2).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,150,143);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(0,-1.9,150,145), new cjs.Rectangle(0,-8.5,150,151.5), new cjs.Rectangle(0,-15.3,150,158.3), new cjs.Rectangle(1.4,-20.2,151.8,163.4), new cjs.Rectangle(-3.1,-25.1,159.4,170.9), new cjs.Rectangle(-7.6,-30.1,167,178.5), new cjs.Rectangle(-12,-35.1,174.7,186), new cjs.Rectangle(-16.5,-40.1,182.3,193.6), new cjs.Rectangle(-21,-45,189.9,201.1), new cjs.Rectangle(-25.5,-50,197.5,208.8), new cjs.Rectangle(-30,-55.1,205.2,216.4), new cjs.Rectangle(-34.5,-60,212.8,223.9), new cjs.Rectangle(-38.9,-65,220.5,231.5), new cjs.Rectangle(-43.6,-70.1,228.3,239.3), null];


(lib.location_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsxTIQjFAAAAjFMAAAggEQAAjHDFABIMAAAIAxAxIAxgxIMBAAQDFgBAADHMAAAAgEQAADFjFAAg");

	// graph
	this.instance_1 = new lib.smile6();

	this.instance_2 = new lib.hero6_fringe1();
	this.instance_2.setTransform(-4.2,-41.1,0.4,0.4);

	this.instance_3 = new lib.hero6_eyes3();
	this.instance_3.setTransform(-1.9,-24.8,0.4,0.4);

	this.instance_4 = new lib.hero6_lips1();
	this.instance_4.setTransform(-1.9,-24.8,0.4,0.4);

	this.instance_5 = new lib.hero6_eyebrows2();
	this.instance_5.setTransform(-1.9,-24.8,0.4,0.4);

	this.instance_6 = new lib.hero6_shadows();
	this.instance_6.setTransform(-1.9,-24.8,0.4,0.4);

	this.instance_7 = new lib.hero6_rouge();
	this.instance_7.setTransform(-1.9,-24.8,0.4,0.4);

	this.instance_8 = new lib.h6_b();
	this.instance_8.setTransform(0.3,23.3,0.4,0.4);

	this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

	// bg
	this.instance_9 = new lib.bg_location_6_img();
	this.instance_9.setTransform(-110,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2));

	// shadow
	this.instance_10 = new lib.shadow_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(2));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKUTMAAAgolMAiVAAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-130,222.5,262.5);
p.frameBounds = [rect, rect];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsxTIQjFAAAAjFMAAAggEQAAjHDFABIMAAAIAxAxIAxgxIMBAAQDFgBAADHMAAAAgEQAADFjFAAg");

	// graph
	this.instance_1 = new lib.smile4();

	this.instance_2 = new lib.horns1();
	this.instance_2.setTransform(-4,-71.4,0.4,0.4);

	this.instance_3 = new lib.hero4_fringe1();
	this.instance_3.setTransform(-3.3,-46.8,0.4,0.4);

	this.instance_4 = new lib.hero4_eyes1all();
	this.instance_4.setTransform(-2.8,-19.9,0.4,0.4);

	this.instance_5 = new lib.hero4_lips2();
	this.instance_5.setTransform(-2.8,-19.9,0.4,0.4);

	this.instance_6 = new lib.hero4_lips1();
	this.instance_6.setTransform(-2.8,-19.9,0.4,0.4);

	this.instance_7 = new lib.hero4_eyebrows4();
	this.instance_7.setTransform(-2.8,-19.9,0.4,0.4);

	this.instance_8 = new lib.hero4_eyebrows3();
	this.instance_8.setTransform(-2.8,-19.9,0.4,0.4);

	this.instance_9 = new lib.hero4_eyebrows2();
	this.instance_9.setTransform(-2.8,-19.9,0.4,0.4);

	this.instance_10 = new lib.hero4_shadows();
	this.instance_10.setTransform(-2.8,-19.9,0.4,0.4);

	this.instance_11 = new lib.hero4_rouge();
	this.instance_11.setTransform(-2.8,-19.9,0.4,0.4);

	this.instance_12 = new lib.hero4_face_img();
	this.instance_12.setTransform(-53,-78,0.4,0.4);

	this.instance_13 = new lib.top4_img();
	this.instance_13.setTransform(-46,88,0.4,0.4);

	this.instance_14 = new lib.body_4_img();
	this.instance_14.setTransform(-72,17,0.4,0.4);

	this.instance_15 = new lib.wings2();
	this.instance_15.setTransform(21.8,58.4,0.4,0.4,0,-11.2,168.8,115,-32);

	this.instance_16 = new lib.wings2();
	this.instance_16.setTransform(-19,61.1,0.4,0.4,15.2,0,0,116.8,-31.9);

	this.instance_17 = new lib.hero4_hair1_img();
	this.instance_17.setTransform(-100,-99,0.4,0.4);

	this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = this.instance_11.mask = this.instance_12.mask = this.instance_13.mask = this.instance_14.mask = this.instance_15.mask = this.instance_16.mask = this.instance_17.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

	// bg
	this.instance_18 = new lib.bg_location_4_img();
	this.instance_18.setTransform(-110,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(2));

	// shadow
	this.instance_19 = new lib.shadow_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(2));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKUTMAAAgolMAiVAAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-130,222.5,262.5);
p.frameBounds = [rect, rect];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsxTIQjFAAAAjFMAAAggEQAAjHDFABIMAAAIAxAxIAxgxIMBAAQDFgBAADHMAAAAgEQAADFjFAAg");

	// graph
	this.instance_1 = new lib.smile3();

	this.instance_2 = new lib.hero3_fringe1();
	this.instance_2.setTransform(-0.4,-14.4,0.4,0.4);

	this.instance_3 = new lib.hero3_eyes1all();
	this.instance_3.setTransform(-4.2,-18.1,0.4,0.4);

	this.instance_4 = new lib.hero3_lips1();
	this.instance_4.setTransform(-4.2,-18.1,0.4,0.4);

	this.instance_5 = new lib.hero3_eyebrows2();
	this.instance_5.setTransform(-4.2,-18.1,0.4,0.4);

	this.instance_6 = new lib.hero3_shadows();
	this.instance_6.setTransform(-4.2,-18.1,0.4,0.4);

	this.instance_7 = new lib.hero3_rouge();
	this.instance_7.setTransform(-4.2,-18.1,0.4,0.4);

	this.instance_8 = new lib.h3_b();
	this.instance_8.setTransform(-2,32.2,0.4,0.4);

	this.instance_9 = new lib.els_nimb1();
	this.instance_9.setTransform(-6,-98.4,0.4,0.4);

	this.instance_10 = new lib.wing1();
	this.instance_10.setTransform(-42.2,66.9,0.4,0.4,30.2,0,0,95.1,-79.9);

	this.instance_11 = new lib.wing1();
	this.instance_11.setTransform(40.1,65.2,0.4,0.4,0,-31.2,148.8,94.9,-80);

	this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = this.instance_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

	// bg
	this.instance_12 = new lib.bg_location_3_img();
	this.instance_12.setTransform(-110,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(2));

	// shadow
	this.instance_13 = new lib.shadow_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(2));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKUTMAAAgolMAiVAAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-130,222.5,262.5);
p.frameBounds = [rect, rect];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsxTIQjFAAAAjFMAAAggEQAAjHDFABIMAAAIAxAxIAxgxIMBAAQDFgBAADHMAAAAgEQAADFjFAAg");

	// graph
	this.instance_1 = new lib.smile2();

	this.instance_2 = new lib.hero2_hand();
	this.instance_2.setTransform(46.9,111.7,0.4,0.4,0,0,180);

	this.instance_3 = new lib.hero2_hand();
	this.instance_3.setTransform(-36.3,127.6,0.4,0.4);

	this.instance_4 = new lib.hero2_fringe1();
	this.instance_4.setTransform(-7.1,-49.7,0.4,0.4);

	this.instance_5 = new lib.hero2_lips2();
	this.instance_5.setTransform(1.5,-21.4,0.4,0.4);

	this.instance_6 = new lib.hero2_lips1();
	this.instance_6.setTransform(1.5,-21.4,0.4,0.4);

	this.instance_7 = new lib.hero2_eyes1_all();
	this.instance_7.setTransform(1.5,-21.4,0.4,0.4);

	this.instance_8 = new lib.hero2_podvodka();
	this.instance_8.setTransform(1.5,-21.4,0.4,0.4);

	this.instance_9 = new lib.hero2_shadows();
	this.instance_9.setTransform(1.5,-21.4,0.4,0.4);

	this.instance_10 = new lib.hero2_eyebrows2();
	this.instance_10.setTransform(1.5,-21.4,0.4,0.4);

	this.instance_11 = new lib.hero2_rouge();
	this.instance_11.setTransform(1.5,-21.4,0.4,0.4);

	this.instance_12 = new lib.hero2_face();
	this.instance_12.setTransform(1.5,-21.4,0.4,0.4);

	this.instance_13 = new lib.h2_b();
	this.instance_13.setTransform(3.7,74.1,0.4,0.4);

	this.instance_14 = new lib.hero2_hair1();
	this.instance_14.setTransform(9,37,0.4,0.4);

	this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = this.instance_11.mask = this.instance_12.mask = this.instance_13.mask = this.instance_14.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

	// bg
	this.instance_15 = new lib.bg_location_2_img();
	this.instance_15.setTransform(-110,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(2));

	// shadow
	this.instance_16 = new lib.shadow_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(2));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKUTMAAAgolMAiVAAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-130,222.5,262.5);
p.frameBounds = [rect, rect];


(lib.hs1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero1_zac
	this.instance = new lib.hero1_zac();
	this.instance.setTransform(43.1,-102.4,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hero1_hand
	this.instance_1 = new lib.hero1_hand();
	this.instance_1.setTransform(42.7,56.7,0.355,0.355,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// hero1_hand
	this.instance_2 = new lib.hero1_hand();
	this.instance_2.setTransform(-42.6,56.3,0.355,0.355);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// eyes11
	this.instance_3 = new lib.hero1_eyelashes1_img();
	this.instance_3.setTransform(-51.9,-129.3,0.4,0.4);

	this.instance_4 = new lib.hero1_eyes2_img();
	this.instance_4.setTransform(-51.9,-129.3,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// hero1_hair1
	this.instance_5 = new lib.hero1_hair1();
	this.instance_5.setTransform(0.9,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// h1_l1
	this.instance_6 = new lib.hero1_lips1_img();
	this.instance_6.setTransform(-51.9,-129.3,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// hero1_eyebrows2
	this.instance_7 = new lib.hero1_eyebrows2();
	this.instance_7.setTransform(-1.9,-70.9,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// hero1_shadows
	this.instance_8 = new lib.hero1_shadows();
	this.instance_8.setTransform(-1.9,-70.9,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// hero1_rouge
	this.instance_9 = new lib.hero1_rouge();
	this.instance_9.setTransform(-1.9,-70.9,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// hero1_base
	this.instance_10 = new lib.hero1_base();
	this.instance_10.setTransform(0.3,-22.8,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-85.6,-148.2,171.3,296.4);
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


(lib.hero6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.smile6();
	this.instance.setTransform(-160,-195);

	this.instance_1 = new lib.smile6();
	this.instance_1.setTransform(160,-195);

	this.instance_2 = new lib.smile6();
	this.instance_2.setTransform(0,-195);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_3 = new lib.hero6_fringe1();
	this.instance_3.setTransform(-12.6,-104.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.hero6_eyes3();
	this.instance_4.setTransform(-7,-63.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.hero6_lips1();
	this.instance_5.setTransform(-7,-63.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// graph
	this.instance_6 = new lib.hero6_eyebrows2();
	this.instance_6.setTransform(-7,-63.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// graph
	this.instance_7 = new lib.hero6_shadows();
	this.instance_7.setTransform(-7,-63.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// graph
	this.instance_8 = new lib.hero6_rouge();
	this.instance_8.setTransform(-7,-63.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// graph
	this.instance_9 = new lib.h6_b();
	this.instance_9.setTransform(-1.5,56.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-284.6,-296.7,544,619.2);
p.frameBounds = [rect];


(lib.hero5_eyebrows2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.e2();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-4},2).to({y:0},2).to({y:-4},2).to({y:0},2).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect, new cjs.Rectangle(-125,-148,250,292), new cjs.Rectangle(-125,-150,250,292), new cjs.Rectangle(-125,-148,250,292), new cjs.Rectangle(-125,-146,250,292), new cjs.Rectangle(-125,-148,250,292), new cjs.Rectangle(-125,-150,250,292), new cjs.Rectangle(-125,-148,250,292), rect=new cjs.Rectangle(-125,-146,250,292), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.hero5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.smile5();
	this.instance.setTransform(-160,-192);

	this.instance_1 = new lib.smile5();
	this.instance_1.setTransform(160,-192);

	this.instance_2 = new lib.smile5();
	this.instance_2.setTransform(0,-192);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_3 = new lib.hero5_glasses();
	this.instance_3.setTransform(-10.4,-5.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.hero5_fringe1();
	this.instance_4.setTransform(-10.3,-97.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.hero5_eyes1();
	this.instance_5.setTransform(-13.2,-57.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// graph
	this.instance_6 = new lib.hero5_lips1();
	this.instance_6.setTransform(-13.2,-57.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// graph
	this.instance_7 = new lib.hero5_lips0();
	this.instance_7.setTransform(-13.2,-57.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// graph
	this.instance_8 = new lib.hero5_eyebrows2();
	this.instance_8.setTransform(-13.2,-57.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// graph
	this.instance_9 = new lib.hero5_rouge();
	this.instance_9.setTransform(-13.2,-57.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// graph
	this.instance_10 = new lib.h5_b();
	this.instance_10.setTransform(-7.7,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240.3,-284.9,460,613.7);
p.frameBounds = [rect];


(lib.hero4_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.horns1();
	this.instance.setTransform(-22.5,-249);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero4_fringe1();
	this.instance_1.setTransform(-20.7,-187.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.hero4_eyes1all();
	this.instance_2.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hero4_lips2();
	this.instance_3.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.hero4_lips1();
	this.instance_4.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.hero4_eyebrows4();
	this.instance_5.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// graph
	this.instance_6 = new lib.hero4_eyebrows3();
	this.instance_6.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// graph
	this.instance_7 = new lib.hero4_eyebrows2();
	this.instance_7.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// graph
	this.instance_8 = new lib.hero4_shadows();
	this.instance_8.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// graph
	this.instance_9 = new lib.hero4_rouge();
	this.instance_9.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// graph
	this.instance_10 = new lib.hero4_face_img();
	this.instance_10.setTransform(-144.5,-266.2);

	this.instance_11 = new lib.top4_img();
	this.instance_11.setTransform(-127.5,149.3);

	this.instance_12 = new lib.body_4_img();
	this.instance_12.setTransform(-193.5,-29.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).wait(1));

	// graph
	this.instance_13 = new lib.w2();
	this.instance_13.setTransform(161,84.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// graph
	this.instance_14 = new lib.w2();
	this.instance_14.setTransform(-299.7,63.6,1,1,0,-4.7,175.3,116.8,-31.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// graph
	this.instance_15 = new lib.hero4_hair1_img();
	this.instance_15.setTransform(-263.2,-318.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-324.7,-318.4,639.6,673);
p.frameBounds = [rect];


(lib.hero4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.smile4();
	this.instance.setTransform(-160,204);

	this.instance_1 = new lib.smile4();
	this.instance_1.setTransform(0,204);

	this.instance_2 = new lib.smile4();
	this.instance_2.setTransform(160,204);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_3 = new lib.horns1();
	this.instance_3.setTransform(-2.5,-196);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.hero4_fringe1();
	this.instance_4.setTransform(-0.7,-134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.hero4_eyes1all();
	this.instance_5.setTransform(0.5,-67.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// graph
	this.instance_6 = new lib.hero4_lips2();
	this.instance_6.setTransform(0.5,-67.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// graph
	this.instance_7 = new lib.hero4_lips1();
	this.instance_7.setTransform(0.5,-67.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// graph
	this.instance_8 = new lib.hero4_eyebrows4();
	this.instance_8.setTransform(0.5,-67.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// graph
	this.instance_9 = new lib.hero4_eyebrows3();
	this.instance_9.setTransform(0.5,-67.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// graph
	this.instance_10 = new lib.hero4_eyebrows2();
	this.instance_10.setTransform(0.5,-67.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// graph
	this.instance_11 = new lib.hero4_shadows();
	this.instance_11.setTransform(0.5,-67.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// graph
	this.instance_12 = new lib.hero4_rouge();
	this.instance_12.setTransform(0.5,-67.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// graph
	this.instance_13 = new lib.hero4_face_img();
	this.instance_13.setTransform(-125,-213);

	this.instance_14 = new lib.top4_img();
	this.instance_14.setTransform(-108,202);

	this.instance_15 = new lib.body_4_img();
	this.instance_15.setTransform(-174,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(1));

	// graph
	this.instance_16 = new lib.wings2();
	this.instance_16.setTransform(62,128.4,1,1,0,-11.2,168.8,115,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1));

	// graph
	this.instance_17 = new lib.wings2();
	this.instance_17.setTransform(-39.9,135.3,1,1,15.2,0,0,116.8,-31.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1));

	// graph
	this.instance_18 = new lib.hero4_hair1_img();
	this.instance_18.setTransform(-243,-265);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-322.2,-265,657.1,673);
p.frameBounds = [rect];


(lib.hero3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.smile3();
	this.instance.setTransform(-180,-207);

	this.instance_1 = new lib.smile3();
	this.instance_1.setTransform(180,-207);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_2 = new lib.hero3_fringe1();
	this.instance_2.setTransform(-1.6,-54.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.hero3_eyes1all();
	this.instance_3.setTransform(-11.2,-63.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.hero3_lips1();
	this.instance_4.setTransform(-11.2,-63.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.hero3_eyebrows2();
	this.instance_5.setTransform(-11.2,-63.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// graph
	this.instance_6 = new lib.hero3_shadows();
	this.instance_6.setTransform(-11.2,-63.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// graph
	this.instance_7 = new lib.hero3_rouge();
	this.instance_7.setTransform(-11.2,-63.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// graph
	this.instance_8 = new lib.h3_b();
	this.instance_8.setTransform(-5.7,61.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// graph
	this.instance_9 = new lib.els_nimb1();
	this.instance_9.setTransform(-16.7,-264.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// graph
	this.instance_10 = new lib.wing1();
	this.instance_10.setTransform(-106.3,148.2,1,1,30.2,0,0,95,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// graph
	this.instance_11 = new lib.wing1();
	this.instance_11.setTransform(99.6,144.2,1,1,0,-31.2,148.8,94.9,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-423.2,-351.2,842.4,757);
p.frameBounds = [rect];


(lib.hero2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero2_hand();
	this.instance.setTransform(112.8,281.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero2_hand();
	this.instance_1.setTransform(-95.2,321.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.smile2();
	this.instance_2.setTransform(-160,-192.2);

	this.instance_3 = new lib.smile2();
	this.instance_3.setTransform(160,-192.2);

	this.instance_4 = new lib.smile2();
	this.instance_4.setTransform(0,-192.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// graph
	this.instance_5 = new lib.hero2_fringe1();
	this.instance_5.setTransform(-22.2,-122.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// graph
	this.instance_6 = new lib.hero2_lips2();
	this.instance_6.setTransform(-0.7,-51.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// graph
	this.instance_7 = new lib.hero2_lips1();
	this.instance_7.setTransform(-0.7,-51.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// graph
	this.instance_8 = new lib.hero2_eyes1_all();
	this.instance_8.setTransform(-0.7,-51.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// graph
	this.instance_9 = new lib.hero2_podvodka();
	this.instance_9.setTransform(-0.7,-51.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// graph
	this.instance_10 = new lib.hero2_shadows();
	this.instance_10.setTransform(-0.7,-51.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// graph
	this.instance_11 = new lib.hero2_eyebrows2();
	this.instance_11.setTransform(-0.7,-51.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// graph
	this.instance_12 = new lib.hero2_rouge();
	this.instance_12.setTransform(-0.7,-51.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// graph
	this.instance_13 = new lib.hero2_face();
	this.instance_13.setTransform(-0.7,-51.4);

	this.instance_14 = new lib.h2_b();
	this.instance_14.setTransform(4.8,187.3);

	this.instance_15 = new lib.hero2_hair1();
	this.instance_15.setTransform(17.9,94.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-227.6,-244.2,491,797.8);
p.frameBounds = [rect];


(lib.h1_l1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_lips1();

	this.instance_1 = new lib.hero1_lips2();
	this.instance_1.setTransform(0,0,0.952,1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({scaleX:0.94},4).to({_off:true,scaleX:0.95},1).wait(27).to({_off:false,scaleX:0.94},1).to({scaleX:1},5).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},1).to({scaleX:1},4).wait(19).to({scaleX:0.95},4).to({_off:true,scaleX:0.94},1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-123.2,-146,246.5,292), new cjs.Rectangle(-121.5,-146,243,292), new cjs.Rectangle(-119.7,-146,239.5,292), new cjs.Rectangle(-118,-146,236,292), new cjs.Rectangle(-119,-146,238,292), new cjs.Rectangle(-120.4,-145.9,241,292), new cjs.Rectangle(-121.9,-145.9,244,292), new cjs.Rectangle(-123.4,-145.9,247,292), rect=new cjs.Rectangle(-125,-146,250,292), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-123.5,-146,247,292), new cjs.Rectangle(-121.9,-146,244,292), new cjs.Rectangle(-120.5,-146,241,292), new cjs.Rectangle(-119,-146,238,292), new cjs.Rectangle(-118,-146,236,292), new cjs.Rectangle(-119.3,-146,238.8,292), new cjs.Rectangle(-120.7,-146,241.6,292), new cjs.Rectangle(-122.1,-146,244.4,292), new cjs.Rectangle(-123.5,-146,247.2,292), rect=new cjs.Rectangle(-125,-146,250,292), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.filters_exit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.filters_body_exit_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},19).to({scaleX:1,scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect, new cjs.Rectangle(-44.7,-24.8,89.6,49.8), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.2,-24.6,88.6,49.2), new cjs.Rectangle(-44,-24.4,88.1,49), new cjs.Rectangle(-43.8,-24.3,87.7,48.7), new cjs.Rectangle(-43.5,-24.2,87.2,48.4), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.1,-23.9,86.2,47.9), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-42.6,-23.6,85.3,47.3), new cjs.Rectangle(-42.3,-23.5,84.8,47.1), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-41.9,-23.2,83.9,46.6), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.4,-23,82.9,46.1), new cjs.Rectangle(-41.2,-22.8,82.4,45.8), new cjs.Rectangle(-40.9,-22.7,82,45.6), new cjs.Rectangle(-40.7,-22.6,81.5,45.3), new cjs.Rectangle(-40.5,-22.5,81,45), new cjs.Rectangle(-40.6,-22.5,81.3,45.2), new cjs.Rectangle(-40.7,-22.6,81.6,45.3), new cjs.Rectangle(-40.9,-22.7,81.9,45.5), new cjs.Rectangle(-41,-22.8,82.2,45.7), new cjs.Rectangle(-41.2,-22.9,82.5,45.8), new cjs.Rectangle(-41.3,-22.9,82.8,46), new cjs.Rectangle(-41.5,-23,83.1,46.2), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.8,-23.2,83.7,46.5), new cjs.Rectangle(-41.9,-23.3,84,46.7), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-42.2,-23.4,84.6,47), new cjs.Rectangle(-42.4,-23.5,84.9,47.2), new cjs.Rectangle(-42.5,-23.6,85.2,47.3), new cjs.Rectangle(-42.7,-23.7,85.5,47.5), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-43,-23.9,86.1,47.8), new cjs.Rectangle(-43.1,-23.9,86.4,48), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.4,-24.1,87,48.3), new cjs.Rectangle(-43.6,-24.2,87.3,48.5), new cjs.Rectangle(-43.7,-24.3,87.6,48.7), new cjs.Rectangle(-43.9,-24.4,87.9,48.8), new cjs.Rectangle(-44,-24.4,88.2,49), new cjs.Rectangle(-44.2,-24.5,88.5,49.2), new cjs.Rectangle(-44.3,-24.6,88.8,49.3), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.6,-24.8,89.4,49.7), new cjs.Rectangle(-44.8,-24.9,89.7,49.8), new cjs.Rectangle(-45,-25,90,50)];


(lib.eyes11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hero1_eyelashes1();

	this.instance_1 = new lib.hero1_eyes2();

	this.instance_2 = new lib.hero1_eyes3_img();
	this.instance_2.setTransform(-125,-146);

	this.instance_3 = new lib.hero1_eyes4_img();
	this.instance_3.setTransform(-125,-146);

	this.instance_4 = new lib.hero1_eyes5_img();
	this.instance_4.setTransform(-125,-146);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2}]},19).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_3}]},11).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1},{t:this.instance}]},9).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-125,-146,250,292);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.arrow_7_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_6_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_5_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_5_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_4_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_4_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_3_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_3_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_3_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_2_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_2_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_2_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_2_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.semicircular_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-199,-161,326,300);
p.frameBounds = [rect];


(lib.arrow_1_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_1_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_1_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_1_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.arrow_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.body_mc = new lib.round_arrow_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180,-180,295,360);
p.frameBounds = [rect];


(lib.animation6_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// Слой 10
	this.instance = new lib.magic2();
	this.instance.setTransform(82,-75.3,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71).to({_off:false},0).wait(9));

	// Слой 4
	this.instance_1 = new lib.kist2();
	this.instance_1.setTransform(-5.6,81.4,0.693,0.693,-116.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-53.4,x:-42.6,y:-81},10).to({rotation:-113.8,x:-40.6,y:-122},4).to({rotation:-53.4,x:-42.6,y:-81},4).to({rotation:-113.8,x:-40.6,y:-122},4).to({rotation:-53.4,x:-42.6,y:-81},4).to({rotation:-113.8,x:-40.6,y:-122},4).to({rotation:-53.4,x:-42.6,y:-81},4).to({x:80.4,y:-72},5).to({rotation:-122.3,x:72.4,y:-130},4).to({rotation:-53.4,x:80.4,y:-72},4).to({rotation:-122.3,x:72.4,y:-130},4).to({rotation:-53.4,x:80.4,y:-72},4).to({rotation:-122.3,x:72.4,y:-130},4).to({rotation:-53.4,x:80.4,y:-72},4).to({rotation:-122.3,x:72.4,y:-130},4).to({rotation:-53.4,x:80.4,y:-72},4).to({scaleX:0.58,scaleY:0.58,rotation:-53.4,alpha:0.012},7).to({_off:true},1).wait(1));

	// tables
	this.instance_2 = new lib.tables();
	this.instance_2.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80));

	// smile6
	this.instance_3 = new lib.smile6();
	this.instance_3.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(80));

	// hero6_fringe1
	this.instance_4 = new lib.hero6_fringe1();
	this.instance_4.setTransform(-25.1,-160.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(80));

	// hero6_eyes1
	this.instance_5 = new lib.hero6_eyes3();
	this.instance_5.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(80));

	// Слой 5
	this.instance_6 = new lib.hero6_lips1();
	this.instance_6.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(80));

	// Слой 7
	this.instance_7 = new lib.hero6_eyebrows2();
	this.instance_7.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(80));

	// Слой 6
	this.instance_8 = new lib.hero6_shadows();
	this.instance_8.setTransform(-19.5,-120.2);
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},0).to({alpha:1},62).wait(9));

	// Слой 3
	this.instance_9 = new lib.hero6_rouge();
	this.instance_9.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(80));

	// h6_b
	this.instance_10 = new lib.h6_b();
	this.instance_10.setTransform(-14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-352.9,778,619.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation6_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_84 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(84).call(this.frame_84).wait(1));

	// Слой 6
	this.instance = new lib.magic2();
	this.instance.setTransform(112,23.8,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).to({_off:true},30).wait(1));

	// Слой 4
	this.instance_1 = new lib.pencil5();
	this.instance_1.setTransform(-21,90.2,1,1,-38.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-143,y:-13.8},9).to({x:-140,y:-4.8},4).to({x:-153,y:8.2},4).to({x:-131,y:19.2},4).to({x:-137,y:44.2},5).to({rotation:-131.7,x:105.7,y:-7.8},7).to({x:96.7,y:7.2},4).to({x:115.7,y:22.8},4).to({x:83.7,y:35.8},4).to({x:90.7,y:50.8},3).to({x:110.7,y:27.8},6).to({scaleX:0.63,scaleY:0.63,alpha:0.012},5).to({_off:true},1).wait(25));

	// Слой 13
	this.instance_2 = new lib.shadows1();
	this.instance_2.setTransform(273,47.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(85));

	// tables
	this.instance_3 = new lib.tables();
	this.instance_3.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(85));

	// smile6
	this.instance_4 = new lib.smile6();
	this.instance_4.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(85));

	// hero6_fringe1
	this.instance_5 = new lib.hero6_fringe1();
	this.instance_5.setTransform(-25.1,-160.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(85));

	// hero6_eyelashes1
	this.instance_6 = new lib.hero6_eyelashes1();
	this.instance_6.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(85));

	// hero6_eyes1
	this.instance_7 = new lib.hero6_eyes1();
	this.instance_7.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(85));

	// Слой 5
	this.instance_8 = new lib.hero6_lips1();
	this.instance_8.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(85));

	// Слой 7
	this.instance_9 = new lib.hero6_eyebrows2();
	this.instance_9.setTransform(-19.5,-120.2);
	this.instance_9.alpha = 0.012;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(47).to({_off:false},0).to({alpha:1},6).wait(32));

	// hero6_eyebrows1
	this.instance_10 = new lib.hero6_eyebrows1();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(47).to({alpha:0.012},6).to({_off:true},1).wait(31));

	// Слой 3
	this.instance_11 = new lib.hero6_rouge();
	this.instance_11.setTransform(-19.5,-120.2);
	this.instance_11.alpha = 0.012;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(9).to({_off:false},0).to({alpha:1},45).wait(31));

	// h6_b
	this.instance_12 = new lib.h6_b();
	this.instance_12.setTransform(-14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-352.9,778,619.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation6_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_97 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(97).call(this.frame_97).wait(1));

	// Слой 3
	this.instance = new lib.magic2();
	this.instance.setTransform(-69.5,20.8,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(68).to({_off:false},0).to({_off:true},29).wait(1));

	// Слой 4
	this.instance_1 = new lib.lipstick13();
	this.instance_1.setTransform(-32,98.9,1,1,30.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-63,y:19.9},9).to({x:-42,y:12.9},5).to({x:-37,y:19.9},3).to({x:-31,y:11.9},3).to({x:-17,y:18.9},5).to({x:-39,y:26.9},6).to({x:-63,y:19.9},6).to({x:-42,y:12.9},8).to({x:-37,y:19.9},3).to({x:-31,y:11.9},3).to({x:-17,y:18.9},5).to({x:-39,y:26.9},6).to({x:-63,y:19.9},6).to({scaleX:0.64,scaleY:0.64,alpha:0.012},4).to({_off:true},1).wait(25));

	// Слой 13
	this.instance_2 = new lib.shadows1();
	this.instance_2.setTransform(273,47.2);

	this.instance_3 = new lib.pencil5();
	this.instance_3.setTransform(-287,72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(98));

	// tables
	this.instance_4 = new lib.tables();
	this.instance_4.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(98));

	// smile6
	this.instance_5 = new lib.smile6();
	this.instance_5.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98));

	// hero6_fringe1
	this.instance_6 = new lib.hero6_fringe1();
	this.instance_6.setTransform(-25.1,-160.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98));

	// hero6_eyelashes1
	this.instance_7 = new lib.hero6_eyelashes1();
	this.instance_7.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(98));

	// hero6_eyes1
	this.instance_8 = new lib.hero6_eyes1();
	this.instance_8.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(98));

	// Слой 5
	this.instance_9 = new lib.hero6_lips1();
	this.instance_9.setTransform(-19.5,-120.2);
	this.instance_9.alpha = 0.012;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10).to({_off:false},0).to({alpha:1},58).wait(30));

	// hero6_lips0
	this.instance_10 = new lib.hero6_lips0();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},68).wait(30));

	// hero6_eyebrows1
	this.instance_11 = new lib.hero6_eyebrows1();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(98));

	// h6_b
	this.instance_12 = new lib.h6_b();
	this.instance_12.setTransform(-14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(98));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-352.9,778,619.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation5_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Слой 12
	this.instance = new lib.hero5_glasses();
	this.instance.setTransform(-22.6,74.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-16.6,y:-67.6},14).wait(6));

	// tables
	this.instance_1 = new lib.tables();
	this.instance_1.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

	// smile5
	this.instance_2 = new lib.smile5();
	this.instance_2.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

	// hero5_fringe1
	this.instance_3 = new lib.hero5_fringe1();
	this.instance_3.setTransform(-16.6,-160.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// hero5_eyes0
	this.instance_4 = new lib.hero5_eyes1();
	this.instance_4.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

	// Слой 5
	this.instance_5 = new lib.hero5_lips1();
	this.instance_5.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20));

	// hero5_lips0
	this.instance_6 = new lib.hero5_lips0();
	this.instance_6.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20));

	// hero5_eyebrows
	this.instance_7 = new lib.hero5_eyebrows();
	this.instance_7.setTransform(-19.5,-120.2);

	this.instance_8 = new lib.hero5_eyebrows2();
	this.instance_8.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_8}]},14).wait(6));

	// Слой 6
	this.instance_9 = new lib.hero5_rouge();
	this.instance_9.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(20));

	// h5_b
	this.instance_10 = new lib.h5_b();
	this.instance_10.setTransform(-14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-347.4,778,613.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation5_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Слой 12
	this.instance = new lib.hero5_glasses();
	this.instance.setTransform(272.4,-97.6,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:-22.6,y:74.4},14).wait(1));

	// tables
	this.instance_1 = new lib.tables();
	this.instance_1.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// smile5
	this.instance_2 = new lib.smile5();
	this.instance_2.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// hero5_fringe1
	this.instance_3 = new lib.hero5_fringe1();
	this.instance_3.setTransform(-16.6,-160.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// hero5_eyes0
	this.instance_4 = new lib.hero5_eyes1();
	this.instance_4.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

	// Слой 5
	this.instance_5 = new lib.hero5_lips1();
	this.instance_5.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

	// hero5_lips0
	this.instance_6 = new lib.hero5_lips0();
	this.instance_6.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

	// hero5_eyebrows
	this.instance_7 = new lib.hero5_eyebrows();
	this.instance_7.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

	// Слой 6
	this.instance_8 = new lib.hero5_rouge();
	this.instance_8.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15));

	// h5_b
	this.instance_9 = new lib.h5_b();
	this.instance_9.setTransform(-14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-347.4,778,613.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation5_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_95 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(95).call(this.frame_95).wait(1));

	// Слой 3
	this.instance = new lib.magic2();
	this.instance.setTransform(-62,24.4,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(72).to({_off:false},0).to({_off:true},23).wait(1));

	// Слой 4
	this.instance_1 = new lib.lipstick1();
	this.instance_1.setTransform(-25,88.7,1,1,30.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-61,y:22.7},9).to({x:-42,y:14.7},5).to({x:-37,y:19.7},2).to({x:-27,y:15.7},2).to({x:-13,y:23.7},6).to({x:-39,y:32.7},8).to({x:-61,y:22.7},8).to({x:-42,y:14.7},6).to({x:-37,y:19.7},2).to({x:-27,y:15.7},2).to({x:-13,y:23.7},6).to({x:-39,y:32.7},8).to({x:-61,y:22.7},8).to({scaleX:0.71,scaleY:0.71,alpha:0.012},4).to({_off:true},1).wait(19));

	// Слой 12
	this.instance_2 = new lib.hero5_glasses();
	this.instance_2.setTransform(272.4,-97.6,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(96));

	// tables
	this.instance_3 = new lib.tables();
	this.instance_3.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(96));

	// smile5
	this.instance_4 = new lib.smile5();
	this.instance_4.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(96));

	// hero5_fringe1
	this.instance_5 = new lib.hero5_fringe1();
	this.instance_5.setTransform(-16.6,-160.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(96));

	// hero5_eyes0
	this.instance_6 = new lib.hero5_eyes1();
	this.instance_6.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(96));

	// Слой 5
	this.instance_7 = new lib.hero5_lips1();
	this.instance_7.setTransform(-19.5,-120.2);
	this.instance_7.alpha = 0.012;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({_off:false},0).to({alpha:1},63).wait(24));

	// hero5_lips0
	this.instance_8 = new lib.hero5_lips0();
	this.instance_8.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(96));

	// hero5_eyebrows
	this.instance_9 = new lib.hero5_eyebrows();
	this.instance_9.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(96));

	// Слой 6
	this.instance_10 = new lib.hero5_rouge();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(96));

	// h5_b
	this.instance_11 = new lib.h5_b();
	this.instance_11.setTransform(-14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-347.4,778,613.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation5_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Слой 7
	this.instance = new lib.hero5_lens();
	this.instance.setTransform(9,97.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:42,y:-98},18).to({_off:true},1).wait(1));

	// Слой 4
	this.instance_1 = new lib.hero5_lens();
	this.instance_1.setTransform(-36,97.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-74,y:-97.1},18).to({_off:true},1).wait(1));

	// Слой 12
	this.instance_2 = new lib.lipstick1();
	this.instance_2.setTransform(269,37);

	this.instance_3 = new lib.hero5_glasses();
	this.instance_3.setTransform(272.4,-97.6,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(20));

	// tables
	this.instance_4 = new lib.tables();
	this.instance_4.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

	// smile5
	this.instance_5 = new lib.smile5();
	this.instance_5.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20));

	// hero5_fringe1
	this.instance_6 = new lib.hero5_fringe1();
	this.instance_6.setTransform(-16.6,-160.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20));

	// hero5_eyelashes1
	this.instance_7 = new lib.hero5_eyelashes1();
	this.instance_7.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20));

	// hero5_eyes0
	this.instance_8 = new lib.hero5_eyes0();
	this.instance_8.setTransform(-19.5,-120.2);

	this.instance_9 = new lib.hero5_eyes0_1();
	this.instance_9.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},19).wait(1));

	// hero5_lips0
	this.instance_10 = new lib.hero5_lips0();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(20));

	// hero5_eyebrows
	this.instance_11 = new lib.hero5_eyebrows();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(20));

	// Слой 6
	this.instance_12 = new lib.hero5_rouge();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(20));

	// h5_b
	this.instance_13 = new lib.h5_b();
	this.instance_13.setTransform(-14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-347.4,778,613.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation5_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(1));

	// Слой 4
	this.instance = new lib.magic2();
	this.instance.setTransform(41,-37.6,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({_off:false},0).wait(18));

	// Слой 5
	this.instance_1 = new lib.gubka();
	this.instance_1.setTransform(-14.6,84.4,0.34,0.34);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-23.7,x:-85.6,y:-35.6},9).to({scaleX:0.31,scaleY:0.31},2).to({scaleX:0.34,scaleY:0.34},2).to({scaleX:0.31,scaleY:0.31},2).to({scaleX:0.34,scaleY:0.34},2).to({scaleX:0.31,scaleY:0.31},2).to({scaleX:0.34,scaleY:0.34},2).to({rotation:28.5,x:47.1},10).to({scaleX:0.29,scaleY:0.29,rotation:28.5},2).to({scaleX:0.34,scaleY:0.34},2).to({scaleX:0.29,scaleY:0.29},2).to({scaleX:0.34,scaleY:0.34},2).to({scaleX:0.29,scaleY:0.29},2).to({scaleX:0.34,scaleY:0.34},2).to({scaleX:0.29,scaleY:0.29},2).to({scaleX:0.34,scaleY:0.34},2).to({scaleX:0.26,scaleY:0.26,alpha:0.012},10).to({_off:true},1).wait(7));

	// Слой 12
	this.instance_2 = new lib.lipstick1();
	this.instance_2.setTransform(269,37);

	this.instance_3 = new lib.dayneris_lens_22();
	this.instance_3.setTransform(-290,53);

	this.instance_4 = new lib.hero5_glasses();
	this.instance_4.setTransform(272.4,-97.6,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(65));

	// tables
	this.instance_5 = new lib.tables();
	this.instance_5.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(65));

	// smile5
	this.instance_6 = new lib.smile5();
	this.instance_6.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(65));

	// hero5_fringe1
	this.instance_7 = new lib.hero5_fringe1();
	this.instance_7.setTransform(-16.6,-160.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(65));

	// hero5_eyelashes1
	this.instance_8 = new lib.hero5_eyelashes1();
	this.instance_8.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(65));

	// hero5_eyes0
	this.instance_9 = new lib.hero5_eyes0();
	this.instance_9.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(65));

	// hero5_lips0
	this.instance_10 = new lib.hero5_lips0();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(65));

	// hero5_eyebrows
	this.instance_11 = new lib.hero5_eyebrows();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(65));

	// Слой 6
	this.instance_12 = new lib.hero5_rouge();
	this.instance_12.setTransform(-19.5,-120.2);
	this.instance_12.alpha = 0.012;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(9).to({_off:false},0).to({alpha:1},38).wait(18));

	// h5_b
	this.instance_13 = new lib.h5_b();
	this.instance_13.setTransform(-14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-347.4,778,613.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation4_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// Слой 13
	this.instance = new lib.horns1();
	this.instance.setTransform(-22.5,-309);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-249},9).wait(31));

	// tables
	this.instance_1 = new lib.tables();
	this.instance_1.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

	// smile4
	this.instance_2 = new lib.smile4();
	this.instance_2.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40));

	// hero4_fringe1
	this.instance_3 = new lib.hero4_fringe1();
	this.instance_3.setTransform(-20.7,-187.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40));

	// hero4_eyes0
	this.instance_4 = new lib.hero4_eyes1all();
	this.instance_4.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40));

	// Слой 11
	this.instance_5 = new lib.hero4_lips2();
	this.instance_5.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(40));

	// Слой 10
	this.instance_6 = new lib.hero4_lips1();
	this.instance_6.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(40));

	// Слой 9
	this.instance_7 = new lib.hero4_eyebrows4();
	this.instance_7.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(40));

	// Слой 3
	this.instance_8 = new lib.hero4_eyebrows3();
	this.instance_8.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(40));

	// Слой 6
	this.instance_9 = new lib.hero4_eyebrows2();
	this.instance_9.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(40));

	// Слой 8
	this.instance_10 = new lib.hero4_shadows();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(40));

	// Слой 5
	this.instance_11 = new lib.hero4_rouge();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(40));

	// h4_b
	this.instance_12 = new lib.hero4_face_img();
	this.instance_12.setTransform(-144.5,-266.2);

	this.instance_13 = new lib.top4_img();
	this.instance_13.setTransform(-127.5,149.3);

	this.instance_14 = new lib.body_4_img();
	this.instance_14.setTransform(-193.5,-29.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(40));

	// wings2
	this.instance_15 = new lib.wings2();
	this.instance_15.setTransform(-92,134.9,1,1,0,4.7,-175.3,115,-32);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(10).to({_off:false},0).to({skewX:-11.2,skewY:-191.2,x:42,y:75.4},9).wait(21));

	// wings2
	this.instance_16 = new lib.wings2();
	this.instance_16.setTransform(80.1,134.6,1,1,-4.8,0,0,116.8,-31.8);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10).to({_off:false},0).to({rotation:15.2,x:-59.9,y:82.3},9).wait(21));

	// Слой 7
	this.instance_17 = new lib.hero4_hair1_img();
	this.instance_17.setTransform(-263.2,-318.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-357,778,711.6);
p.frameBounds = [rect, new cjs.Rectangle(-399.5,-350.3,778,704.9), new cjs.Rectangle(-399.5,-343.6,778,698.2), new cjs.Rectangle(-399.5,-337,778,691.6), new cjs.Rectangle(-399.5,-330.3,778,684.9), new cjs.Rectangle(-399.5,-323.6,778,678.2), rect=new cjs.Rectangle(-399.5,-318.4,778,673), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation4_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(1));

	// Слой 13
	this.instance = new lib.horns1();
	this.instance.setTransform(246.4,-96,0.563,0.563);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:-22.5,y:-309},15).wait(1));

	// tables
	this.instance_1 = new lib.tables();
	this.instance_1.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16));

	// smile4
	this.instance_2 = new lib.smile4();
	this.instance_2.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16));

	// hero4_fringe1
	this.instance_3 = new lib.hero4_fringe1();
	this.instance_3.setTransform(-20.7,-187.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(16));

	// hero4_eyes0
	this.instance_4 = new lib.hero4_eyes1all();
	this.instance_4.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16));

	// Слой 11
	this.instance_5 = new lib.hero4_lips2();
	this.instance_5.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(16));

	// Слой 10
	this.instance_6 = new lib.hero4_lips1();
	this.instance_6.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16));

	// Слой 9
	this.instance_7 = new lib.hero4_eyebrows4();
	this.instance_7.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(16));

	// Слой 3
	this.instance_8 = new lib.hero4_eyebrows3();
	this.instance_8.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(16));

	// Слой 6
	this.instance_9 = new lib.hero4_eyebrows2();
	this.instance_9.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(16));

	// Слой 8
	this.instance_10 = new lib.hero4_shadows();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(16));

	// Слой 5
	this.instance_11 = new lib.hero4_rouge();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(16));

	// h4_b
	this.instance_12 = new lib.h4_b();
	this.instance_12.setTransform(-25.2,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-318.4,778,673);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-399.5,-325.7,778,680.3), new cjs.Rectangle(-399.5,-341.4,778,696), new cjs.Rectangle(-399.5,-357,778,711.6)];


(lib.animation4_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_84 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(84).call(this.frame_84).wait(1));

	// Слой 4
	this.instance = new lib.magic2();
	this.instance.setTransform(-67,18.4,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(65).to({_off:false},0).to({_off:true},19).wait(1));

	// Слой 7
	this.instance_1 = new lib.lipstick5();
	this.instance_1.setTransform(-22.7,93.9,1,1,27.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-64.7,y:19.9},9).to({x:-34.7,y:29.9},6).to({x:-6.7,y:18.9},6).to({x:-28.7,y:17.9},5).to({x:-33.7,y:22.9},2).to({x:-40.7,y:17.9},2).to({x:-64.7,y:19.9},7).to({x:-34.7,y:29.9},6).to({x:-6.7,y:18.9},6).to({x:-28.7,y:17.9},5).to({x:-33.7,y:22.9},2).to({x:-40.7,y:17.9},2).to({x:-64.7,y:19.9},7).to({scaleX:0.7,scaleY:0.7,alpha:0.012},5).to({_off:true},1).wait(14));

	// Слой 13
	this.instance_2 = new lib.horns1();
	this.instance_2.setTransform(246.4,-96,0.563,0.563);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(85));

	// tables
	this.instance_3 = new lib.tables();
	this.instance_3.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(85));

	// smile4
	this.instance_4 = new lib.smile4();
	this.instance_4.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(85));

	// hero4_fringe1
	this.instance_5 = new lib.hero4_fringe1();
	this.instance_5.setTransform(-20.7,-187.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(85));

	// hero4_eyes0
	this.instance_6 = new lib.hero4_eyes1all();
	this.instance_6.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(85));

	// Слой 11
	this.instance_7 = new lib.hero4_lips2();
	this.instance_7.setTransform(-19.5,-120.2);
	this.instance_7.alpha = 0.012;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({_off:false},0).to({alpha:1},56).wait(20));

	// Слой 10
	this.instance_8 = new lib.hero4_lips1();
	this.instance_8.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(85));

	// Слой 9
	this.instance_9 = new lib.hero4_eyebrows4();
	this.instance_9.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(85));

	// Слой 3
	this.instance_10 = new lib.hero4_eyebrows3();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(85));

	// Слой 6
	this.instance_11 = new lib.hero4_eyebrows2();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(85));

	// Слой 8
	this.instance_12 = new lib.hero4_shadows();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(85));

	// Слой 5
	this.instance_13 = new lib.hero4_rouge();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(85));

	// h4_b
	this.instance_14 = new lib.h4_b();
	this.instance_14.setTransform(-25.2,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-318.4,778,673);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation4_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// Слой 4
	this.instance = new lib.magic2();
	this.instance.setTransform(-69.5,16,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70).to({_off:false},0).to({_off:true},29).wait(1));

	// Слой 7
	this.instance_1 = new lib.lipstick2();
	this.instance_1.setTransform(-19,107.9,1,1,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-66,y:18},9).to({x:-41,y:19},5).to({x:-31,y:21},2).to({x:-9,y:20},5).to({x:-35,y:32.1},9).to({x:-66,y:18},9).to({x:-41,y:19},6).to({x:-31,y:21},2).to({x:-9,y:20},5).to({x:-35,y:32.1},9).to({x:-66,y:18},9).to({scaleX:0.8,scaleY:0.8,alpha:0.012},4).to({_off:true},1).wait(25));

	// Слой 13
	this.instance_2 = new lib.lipstick5();
	this.instance_2.setTransform(205.3,35);

	this.instance_3 = new lib.horns1();
	this.instance_3.setTransform(246.4,-96,0.563,0.563);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(100));

	// tables
	this.instance_4 = new lib.tables();
	this.instance_4.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100));

	// smile4
	this.instance_5 = new lib.smile4();
	this.instance_5.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(100));

	// hero4_fringe1
	this.instance_6 = new lib.hero4_fringe1();
	this.instance_6.setTransform(-20.7,-187.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(100));

	// hero4_eyes0
	this.instance_7 = new lib.hero4_eyes1all();
	this.instance_7.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(100));

	// Слой 10
	this.instance_8 = new lib.hero4_lips1();
	this.instance_8.setTransform(-19.5,-120.2);
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},0).to({alpha:1},61).wait(30));

	// hero4_lips0
	this.instance_9 = new lib.hero4_lips0();
	this.instance_9.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(100));

	// Слой 9
	this.instance_10 = new lib.hero4_eyebrows4();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(100));

	// Слой 3
	this.instance_11 = new lib.hero4_eyebrows3();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(100));

	// Слой 6
	this.instance_12 = new lib.hero4_eyebrows2();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(100));

	// Слой 8
	this.instance_13 = new lib.hero4_shadows();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(100));

	// Слой 5
	this.instance_14 = new lib.hero4_rouge();
	this.instance_14.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(100));

	// h4_b
	this.instance_15 = new lib.h4_b();
	this.instance_15.setTransform(-25.2,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-318.4,778,673);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation4_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// Слой 7
	this.instance = new lib.magic2();
	this.instance.setTransform(82,-75.3,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71).to({_off:false},0).wait(9));

	// Слой 4
	this.instance_1 = new lib.kist2();
	this.instance_1.setTransform(-5.6,81.4,0.693,0.693,-116.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-53.4,x:-42.6,y:-81},10).to({rotation:-113.8,x:-40.6,y:-122},4).to({rotation:-53.4,x:-42.6,y:-81},4).to({rotation:-113.8,x:-40.6,y:-122},4).to({rotation:-53.4,x:-42.6,y:-81},4).to({rotation:-113.8,x:-40.6,y:-122},4).to({rotation:-53.4,x:-42.6,y:-81},4).to({x:80.4,y:-72},5).to({rotation:-122.3,x:72.4,y:-130},4).to({rotation:-53.4,x:80.4,y:-72},4).to({rotation:-122.3,x:72.4,y:-130},4).to({rotation:-53.4,x:80.4,y:-72},4).to({rotation:-122.3,x:72.4,y:-130},4).to({rotation:-53.4,x:80.4,y:-72},4).to({rotation:-122.3,x:72.4,y:-130},4).to({rotation:-53.4,x:80.4,y:-72},4).to({scaleX:0.58,scaleY:0.58,rotation:-53.4,alpha:0.012},7).to({_off:true},1).wait(1));

	// Слой 13
	this.instance_2 = new lib.lipstick5();
	this.instance_2.setTransform(205.3,35);

	this.instance_3 = new lib.lipstick2();
	this.instance_3.setTransform(-351,41.6);

	this.instance_4 = new lib.horns1();
	this.instance_4.setTransform(246.4,-96,0.563,0.563);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(80));

	// tables
	this.instance_5 = new lib.tables();
	this.instance_5.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(80));

	// smile4
	this.instance_6 = new lib.smile4();
	this.instance_6.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(80));

	// hero4_fringe1
	this.instance_7 = new lib.hero4_fringe1();
	this.instance_7.setTransform(-20.7,-187.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(80));

	// hero4_eyes0
	this.instance_8 = new lib.hero4_eyes3();
	this.instance_8.setTransform(-19.5,-120.2);

	this.instance_9 = new lib.hero4_eyes2();
	this.instance_9.setTransform(-19.5,-120.2);

	this.instance_10 = new lib.hero4_eyes1all();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},77).to({state:[{t:this.instance_10}]},2).wait(1));

	// hero4_lips0
	this.instance_11 = new lib.hero4_lips0();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(80));

	// Слой 9
	this.instance_12 = new lib.hero4_eyebrows4();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(80));

	// Слой 3
	this.instance_13 = new lib.hero4_eyebrows3();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(80));

	// Слой 6
	this.instance_14 = new lib.hero4_eyebrows2();
	this.instance_14.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(80));

	// Слой 8
	this.instance_15 = new lib.hero4_shadows();
	this.instance_15.setTransform(-19.5,-120.2);
	this.instance_15.alpha = 0.012;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(9).to({_off:false},0).to({alpha:1},62).wait(9));

	// Слой 5
	this.instance_16 = new lib.hero4_rouge();
	this.instance_16.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(80));

	// h4_b
	this.instance_17 = new lib.h4_b();
	this.instance_17.setTransform(-25.2,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-318.4,778,673);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation4_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Слой 8
	this.instance = new lib.hero4_lens();
	this.instance.setTransform(11,93);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:41,y:-96.5},18).to({_off:true},1).wait(1));

	// Слой 7
	this.instance_1 = new lib.hero4_lens();
	this.instance_1.setTransform(-34,93);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-77,y:-96},18).to({_off:true},1).wait(1));

	// Слой 13
	this.instance_2 = new lib.shadows12();
	this.instance_2.setTransform(291.5,49);

	this.instance_3 = new lib.lipstick5();
	this.instance_3.setTransform(205.3,35);

	this.instance_4 = new lib.lipstick2();
	this.instance_4.setTransform(-351,41.6);

	this.instance_5 = new lib.horns1();
	this.instance_5.setTransform(246.4,-96,0.563,0.563);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(20));

	// tables
	this.instance_6 = new lib.tables();
	this.instance_6.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20));

	// smile4
	this.instance_7 = new lib.smile4();
	this.instance_7.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20));

	// hero4_fringe1
	this.instance_8 = new lib.hero4_fringe1();
	this.instance_8.setTransform(-20.7,-187.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(20));

	// hero4_eyelashes
	this.instance_9 = new lib.hero4_eyelashes();
	this.instance_9.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(20));

	// hero4_eyes0
	this.instance_10 = new lib.hero4_eyes0();
	this.instance_10.setTransform(-19.5,-120.2);

	this.instance_11 = new lib.hero4_eyes0_1();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_11}]},19).wait(1));

	// hero4_lips0
	this.instance_12 = new lib.hero4_lips0();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(20));

	// Слой 9
	this.instance_13 = new lib.hero4_eyebrows4();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(20));

	// Слой 3
	this.instance_14 = new lib.hero4_eyebrows3();
	this.instance_14.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(20));

	// Слой 6
	this.instance_15 = new lib.hero4_eyebrows2();
	this.instance_15.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(20));

	// Слой 5
	this.instance_16 = new lib.hero4_rouge();
	this.instance_16.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(20));

	// h4_b
	this.instance_17 = new lib.h4_b();
	this.instance_17.setTransform(-25.2,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-318.4,778,673);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation4_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

	// Слой 10
	this.instance = new lib.magic2();
	this.instance.setTransform(40,-89,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({_off:false},0).to({_off:true},34).wait(1));

	// Слой 7
	this.instance_1 = new lib.pencil13();
	this.instance_1.setTransform(-13,96,1,1,-38.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-46.4,x:36,y:-95},9).to({x:44,y:-106},5).to({x:36,y:-95},4).to({x:34,y:-112},5).to({x:36,y:-95},6).to({x:45.7,y:-94},6).wait(5).to({scaleX:0.71,scaleY:0.71,alpha:0.012},5).to({_off:true},1).wait(24));

	// Слой 13
	this.instance_2 = new lib.shadows12();
	this.instance_2.setTransform(291.5,49);

	this.instance_3 = new lib.lipstick5();
	this.instance_3.setTransform(205.3,35);

	this.instance_4 = new lib.lipstick2();
	this.instance_4.setTransform(-351,41.6);

	this.instance_5 = new lib.dayneris_lens_21();
	this.instance_5.setTransform(-262,49);

	this.instance_6 = new lib.horns1();
	this.instance_6.setTransform(246.4,-96,0.563,0.563);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(70));

	// tables
	this.instance_7 = new lib.tables();
	this.instance_7.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(70));

	// smile4
	this.instance_8 = new lib.smile4();
	this.instance_8.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(70));

	// hero4_fringe1
	this.instance_9 = new lib.hero4_fringe1();
	this.instance_9.setTransform(-20.7,-187.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(70));

	// hero4_eyelashes
	this.instance_10 = new lib.hero4_eyelashes();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(70));

	// hero4_eyes0
	this.instance_11 = new lib.hero4_eyes0();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(70));

	// hero4_lips0
	this.instance_12 = new lib.hero4_lips0();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(70));

	// Слой 9
	this.instance_13 = new lib.hero4_eyebrows4();
	this.instance_13.setTransform(-19.5,-120.2);
	this.instance_13.alpha = 0.012;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(9).to({_off:false},0).to({alpha:1},26).wait(35));

	// Слой 3
	this.instance_14 = new lib.hero4_eyebrows3();
	this.instance_14.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(70));

	// Слой 6
	this.instance_15 = new lib.hero4_eyebrows2();
	this.instance_15.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(70));

	// Слой 5
	this.instance_16 = new lib.hero4_rouge();
	this.instance_16.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(70));

	// h4_b
	this.instance_17 = new lib.h4_b();
	this.instance_17.setTransform(-25.2,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-318.4,778,673);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation4_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

	// Слой 7
	this.instance = new lib.magic2();
	this.instance.setTransform(51,-95.6,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).to({_off:true},29).wait(1));

	// Слой 4
	this.instance_1 = new lib.pencil10();
	this.instance_1.setTransform(114,-83.9,1,1,-128.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:113,y:-92.9},4).to({x:97,y:-79.9},7).to({x:70,y:-106.9},20).to({x:54,y:-94.9},9).to({scaleX:0.54,scaleY:0.54,alpha:0.012},4).to({_off:true},1).wait(25));

	// Слой 13
	this.instance_2 = new lib.shadows12();
	this.instance_2.setTransform(291.5,49);

	this.instance_3 = new lib.lipstick5();
	this.instance_3.setTransform(205.3,35);

	this.instance_4 = new lib.lipstick2();
	this.instance_4.setTransform(-351,41.6);

	this.instance_5 = new lib.dayneris_lens_21();
	this.instance_5.setTransform(-262,49);

	this.instance_6 = new lib.pencil13();
	this.instance_6.setTransform(-289,-61.9,1,1,-6.7);

	this.instance_7 = new lib.horns1();
	this.instance_7.setTransform(246.4,-96,0.563,0.563);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(70));

	// tables
	this.instance_8 = new lib.tables();
	this.instance_8.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(70));

	// smile4
	this.instance_9 = new lib.smile4();
	this.instance_9.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(70));

	// hero4_fringe1
	this.instance_10 = new lib.hero4_fringe1();
	this.instance_10.setTransform(-20.7,-187.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(70));

	// hero4_eyelashes
	this.instance_11 = new lib.hero4_eyelashes();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(70));

	// hero4_eyes0
	this.instance_12 = new lib.hero4_eyes0();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(70));

	// hero4_lips0
	this.instance_13 = new lib.hero4_lips0();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(70));

	// Слой 3
	this.instance_14 = new lib.hero4_eyebrows3();
	this.instance_14.setTransform(-19.5,-120.2);
	this.instance_14.alpha = 0.012;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(4).to({_off:false},0).to({alpha:1},36).wait(30));

	// Слой 6
	this.instance_15 = new lib.hero4_eyebrows2();
	this.instance_15.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(70));

	// Слой 5
	this.instance_16 = new lib.hero4_rouge();
	this.instance_16.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(70));

	// h4_b
	this.instance_17 = new lib.h4_b();
	this.instance_17.setTransform(-25.2,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-318.4,778,673);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation4_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_36 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(36).call(this.frame_36).wait(1));

	// Слой 4
	this.instance = new lib.pencil10();
	this.instance.setTransform(-24,89,1,1,-51.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-81,y:-88},9).to({x:-129,y:-97},6).to({x:-152,y:-81},4).to({rotation:-128.4,x:45,y:-90},5).to({x:88,y:-100.9},7).to({x:114,y:-83.9},5).wait(1));

	// Слой 13
	this.instance_1 = new lib.shadows12();
	this.instance_1.setTransform(291.5,49);

	this.instance_2 = new lib.lipstick5();
	this.instance_2.setTransform(205.3,35);

	this.instance_3 = new lib.lipstick2();
	this.instance_3.setTransform(-351,41.6);

	this.instance_4 = new lib.dayneris_lens_21();
	this.instance_4.setTransform(-262,49);

	this.instance_5 = new lib.pencil13();
	this.instance_5.setTransform(-289,-61.9,1,1,-6.7);

	this.instance_6 = new lib.horns1();
	this.instance_6.setTransform(246.4,-96,0.563,0.563);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(37));

	// tables
	this.instance_7 = new lib.tables();
	this.instance_7.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(37));

	// smile4
	this.instance_8 = new lib.smile4();
	this.instance_8.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(37));

	// hero4_fringe1
	this.instance_9 = new lib.hero4_fringe1();
	this.instance_9.setTransform(-20.7,-187.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(37));

	// hero4_eyelashes
	this.instance_10 = new lib.hero4_eyelashes();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(37));

	// hero4_eyes0
	this.instance_11 = new lib.hero4_eyes0();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(37));

	// hero4_lips0
	this.instance_12 = new lib.hero4_lips0();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(37));

	// Слой 6
	this.instance_13 = new lib.hero4_eyebrows2();
	this.instance_13.setTransform(-19.5,-120.2);
	this.instance_13.alpha = 0.012;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(9).to({_off:false},0).to({alpha:1},27).wait(1));

	// hero4_eyebrows1
	this.instance_14 = new lib.hero4_eyebrows1();
	this.instance_14.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(28).to({alpha:0.012},7).to({_off:true},1).wait(1));

	// Слой 5
	this.instance_15 = new lib.hero4_rouge();
	this.instance_15.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(37));

	// h4_b
	this.instance_16 = new lib.h4_b();
	this.instance_16.setTransform(-25.2,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-318.4,778,673);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation4_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(1));

	// Слой 4
	this.instance = new lib.magic2();
	this.instance.setTransform(41,-37.6,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({_off:false},0).wait(18));

	// Слой 3
	this.instance_1 = new lib.gubka();
	this.instance_1.setTransform(-14.6,84.4,0.34,0.34);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-23.7,x:-85.6,y:-35.6},9).to({scaleX:0.31,scaleY:0.31},2).to({scaleX:0.34,scaleY:0.34},2).to({scaleX:0.31,scaleY:0.31},2).to({scaleX:0.34,scaleY:0.34},2).to({scaleX:0.31,scaleY:0.31},2).to({scaleX:0.34,scaleY:0.34},2).to({rotation:28.5,x:47.1},10).to({scaleX:0.29,scaleY:0.29,rotation:28.5},2).to({scaleX:0.34,scaleY:0.34},2).to({scaleX:0.29,scaleY:0.29},2).to({scaleX:0.34,scaleY:0.34},2).to({scaleX:0.29,scaleY:0.29},2).to({scaleX:0.34,scaleY:0.34},2).to({scaleX:0.29,scaleY:0.29},2).to({scaleX:0.34,scaleY:0.34},2).to({scaleX:0.26,scaleY:0.26,alpha:0.012},10).to({_off:true},1).wait(7));

	// Слой 13
	this.instance_2 = new lib.shadows12();
	this.instance_2.setTransform(291.5,49);

	this.instance_3 = new lib.lipstick5();
	this.instance_3.setTransform(205.3,35);

	this.instance_4 = new lib.lipstick2();
	this.instance_4.setTransform(-351,41.6);

	this.instance_5 = new lib.dayneris_lens_21();
	this.instance_5.setTransform(-262,49);

	this.instance_6 = new lib.pencil13();
	this.instance_6.setTransform(-289,-61.9,1,1,-6.7);

	this.instance_7 = new lib.pencil10();
	this.instance_7.setTransform(-284.3,-85);

	this.instance_8 = new lib.horns1();
	this.instance_8.setTransform(246.4,-96,0.563,0.563);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(65));

	// tables
	this.instance_9 = new lib.tables();
	this.instance_9.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(65));

	// smile4
	this.instance_10 = new lib.smile4();
	this.instance_10.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(65));

	// hero4_fringe1
	this.instance_11 = new lib.hero4_fringe1();
	this.instance_11.setTransform(-20.7,-187.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(65));

	// hero4_eyelashes
	this.instance_12 = new lib.hero4_eyelashes();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(65));

	// hero4_eyes0
	this.instance_13 = new lib.hero4_eyes0();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(65));

	// hero4_lips0
	this.instance_14 = new lib.hero4_lips0();
	this.instance_14.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(65));

	// hero4_eyebrows1
	this.instance_15 = new lib.hero4_eyebrows1();
	this.instance_15.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(65));

	// Слой 5
	this.instance_16 = new lib.hero4_rouge();
	this.instance_16.setTransform(-19.5,-120.2);
	this.instance_16.alpha = 0.012;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10).to({_off:false},0).to({alpha:1},37).wait(18));

	// h4_b
	this.instance_17 = new lib.h4_b();
	this.instance_17.setTransform(-25.2,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-318.4,778,673);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation3_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// Слой 3
	this.instance = new lib.magic2();
	this.instance.setTransform(-58,19.4,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).to({_off:true},26).wait(40));

	// Слой 4
	this.instance_1 = new lib.lipstick25();
	this.instance_1.setTransform(-12,99,1,1,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-55,y:20},9).to({x:-41,y:15},5).to({x:-22,y:24},6).to({x:-35,y:28},5).to({x:-55,y:20},6).to({x:-41,y:15},6).to({x:-22,y:24},6).to({x:-35,y:28},5).to({x:-55,y:20},6).to({scaleX:0.83,scaleY:0.83,alpha:0.012},5).to({_off:true},1).wait(60));

	// smile3
	this.instance_2 = new lib.smile3();
	this.instance_2.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120));

	// tables
	this.instance_3 = new lib.tables();
	this.instance_3.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120));

	// hero3_fringe1
	this.instance_4 = new lib.hero3_fringe1();
	this.instance_4.setTransform(-9.9,-111);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

	// hero3_eyes0
	this.instance_5 = new lib.hero3_eyes1all();
	this.instance_5.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120));

	// Слой 8
	this.instance_6 = new lib.hero3_lips1();
	this.instance_6.setTransform(-19.5,-120.2);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({_off:false},0).to({alpha:1},44).wait(66));

	// hero3_lips0
	this.instance_7 = new lib.hero3_lips0();
	this.instance_7.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(47).to({alpha:0.012},7).to({_off:true},1).wait(65));

	// Слой 6
	this.instance_8 = new lib.hero3_eyebrows2();
	this.instance_8.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120));

	// Слой 7
	this.instance_9 = new lib.hero3_shadows();
	this.instance_9.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(120));

	// Слой 5
	this.instance_10 = new lib.hero3_rouge();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(120));

	// h3_b
	this.instance_11 = new lib.h3_b();
	this.instance_11.setTransform(-14,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(120));

	// els_nimb1
	this.instance_12 = new lib.els_nimb1();
	this.instance_12.setTransform(-24,-203);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(47).to({y:-321},7).to({y:-324},2).to({y:-321},2).wait(62));

	// Слой 10
	this.instance_13 = new lib.wing1();
	this.instance_13.setTransform(3.5,92,1,1,0,0,0,95,-80);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(60).to({_off:false},0).to({rotation:30.2,x:-114.5},21).wait(39));

	// Слой 9
	this.instance_14 = new lib.wing1();
	this.instance_14.setTransform(-32.6,92,1,1,0,0,180,95,-80);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(60).to({_off:false},0).to({regX:94.9,skewX:-31.2,skewY:148.8,x:91.4,y:87.9},21).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-290.6,778,591.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-399.5,-306.3,778,606.9), new cjs.Rectangle(-399.5,-323.2,778,623.7), new cjs.Rectangle(-399.5,-340,778,640.6), new cjs.Rectangle(-399.5,-356.9,778,657.5), new cjs.Rectangle(-399.5,-373.8,778,674.3), new cjs.Rectangle(-399.5,-390.6,778,691.2), new cjs.Rectangle(-399.5,-407.5,778,708), new cjs.Rectangle(-399.5,-409,778,709.5), new cjs.Rectangle(-399.5,-410.5,778,711), new cjs.Rectangle(-399.5,-409,778,709.5), rect=new cjs.Rectangle(-399.5,-407.5,778,708), rect, new cjs.Rectangle(-399.5,-407.5,778,794.5), new cjs.Rectangle(-399.5,-407.5,778,794.6), new cjs.Rectangle(-399.5,-407.5,778,794.3), new cjs.Rectangle(-399.5,-407.5,778,794), new cjs.Rectangle(-399.5,-407.5,778,793.4), new cjs.Rectangle(-399.5,-407.5,778,792.8), new cjs.Rectangle(-399.5,-407.5,778,791.8), new cjs.Rectangle(-399.5,-407.5,778,790.8), new cjs.Rectangle(-399.5,-407.5,778,789.4), new cjs.Rectangle(-399.5,-407.5,778,788), new cjs.Rectangle(-399.5,-407.5,778,786.4), new cjs.Rectangle(-399.5,-407.5,778,784.6), new cjs.Rectangle(-399.5,-407.5,778,782.5), new cjs.Rectangle(-399.5,-407.5,778,780.4), new cjs.Rectangle(-399.5,-407.5,778,778), new cjs.Rectangle(-399.5,-407.5,778,775.5), new cjs.Rectangle(-399.5,-407.5,778,772.6), new cjs.Rectangle(-399.5,-407.5,778,770), new cjs.Rectangle(-401.3,-407.5,781,766.9), new cjs.Rectangle(-411.4,-407.5,801.4,763.6), new cjs.Rectangle(-421.4,-407.5,821.6,760.1), new cjs.Rectangle(-431.5,-407.5,842.4,757), rect=new cjs.Rectangle(-430.7,-407.5,840.8,756.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-431.5,-407.5,842.4,757), rect];


(lib.animation3_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_89 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

	// Слой 4
	this.instance = new lib.magic2();
	this.instance.setTransform(82,-75.3,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71).to({_off:false},0).wait(19));

	// Слой 3
	this.instance_1 = new lib.kist2();
	this.instance_1.setTransform(-5.6,81.4,0.693,0.693,-116.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-53.4,x:-42.6,y:-81},10).to({rotation:-113.8,x:-40.6,y:-122},4).to({rotation:-53.4,x:-42.6,y:-81},4).to({rotation:-113.8,x:-40.6,y:-122},4).to({rotation:-53.4,x:-42.6,y:-81},4).to({rotation:-113.8,x:-40.6,y:-122},4).to({rotation:-53.4,x:-42.6,y:-81},4).to({x:80.4,y:-72},5).to({rotation:-122.3,x:72.4,y:-130},4).to({rotation:-53.4,x:80.4,y:-72},4).to({rotation:-122.3,x:72.4,y:-130},4).to({rotation:-53.4,x:80.4,y:-72},4).to({rotation:-122.3,x:72.4,y:-130},4).to({rotation:-53.4,x:80.4,y:-72},4).to({rotation:-122.3,x:72.4,y:-130},4).to({rotation:-53.4,x:80.4,y:-72},4).to({scaleX:0.58,scaleY:0.58,rotation:-53.4,alpha:0.012},7).to({_off:true},1).wait(11));

	// Слой 13
	this.instance_2 = new lib.lipstick25();
	this.instance_2.setTransform(279.9,-132.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

	// smile3
	this.instance_3 = new lib.smile3();
	this.instance_3.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90));

	// tables
	this.instance_4 = new lib.tables();
	this.instance_4.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(90));

	// hero3_fringe1
	this.instance_5 = new lib.hero3_fringe1();
	this.instance_5.setTransform(-9.9,-111);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(90));

	// hero3_eyes0
	this.instance_6 = new lib.hero3_eyes3();
	this.instance_6.setTransform(-19.5,-120.2);

	this.instance_7 = new lib.hero3_eyes2();
	this.instance_7.setTransform(-19.5,-120.2);

	this.instance_8 = new lib.hero3_eyes1();
	this.instance_8.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},76).to({state:[{t:this.instance_8}]},2).wait(12));

	// hero3_lips0
	this.instance_9 = new lib.hero3_lips0();
	this.instance_9.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(90));

	// Слой 6
	this.instance_10 = new lib.hero3_eyebrows2();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(90));

	// Слой 7
	this.instance_11 = new lib.hero3_shadows();
	this.instance_11.setTransform(-19.5,-120.2);
	this.instance_11.alpha = 0.012;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(9).to({_off:false},0).to({alpha:1},62).wait(19));

	// Слой 5
	this.instance_12 = new lib.hero3_rouge();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(90));

	// h3_b
	this.instance_13 = new lib.h3_b();
	this.instance_13.setTransform(-14,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(90));

	// els_nimb1
	this.instance_14 = new lib.els_nimb1();
	this.instance_14.setTransform(-24,-203);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-290.6,778,591.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation3_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_91 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(91).call(this.frame_91).wait(1));

	// Слой 3
	this.instance = new lib.magic2();
	this.instance.setTransform(37,21.4,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(72).to({_off:false},0).wait(20));

	// Слой 4
	this.instance_1 = new lib.mascara1();
	this.instance_1.setTransform(-22,81,1,1,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:93,x:-133,y:-129.9},9).to({x:-130,y:-139.9},2).to({x:-133,y:-129.9},2).to({x:-130,y:-139.9},2).to({x:-133,y:-129.9},2).to({x:-130,y:-139.9},2).to({rotation:106.4,x:-150,y:-115.9},4).to({x:-151,y:-109.9},2).to({x:-150,y:-115.9},2).to({x:-151,y:-109.9},2).to({x:-150,y:-115.9},2).to({x:-151,y:-109.9},2).to({rotation:66.7,x:-0.9,y:-104.6},6).to({x:2.1,y:-119.6},2).to({x:-0.9,y:-104.6},2).to({x:2.1,y:-119.6},2).to({x:-0.9,y:-104.6},2).to({x:2.1,y:-119.6},2).to({x:-0.9,y:-104.6},2).to({x:2.1,y:-119.6},2).to({rotation:35.6,x:25.1,y:-55.6},5).wait(10).to({x:47.1,y:10.4},4).to({scaleX:0.7,scaleY:0.7,alpha:0.012},4).to({_off:true},1).wait(15));

	// Слой 13
	this.instance_2 = new lib.shadows5();
	this.instance_2.setTransform(-292,-102.8);

	this.instance_3 = new lib.lipstick25();
	this.instance_3.setTransform(279.9,-132.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(92));

	// smile3
	this.instance_4 = new lib.smile3();
	this.instance_4.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(92));

	// tables
	this.instance_5 = new lib.tables();
	this.instance_5.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(92));

	// hero3_fringe1
	this.instance_6 = new lib.hero3_fringe1();
	this.instance_6.setTransform(-9.9,-111);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(92));

	// Слой 7
	this.instance_7 = new lib.hero3_eyelashes2();
	this.instance_7.setTransform(-19.5,-120.2);
	this.instance_7.alpha = 0.012;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({_off:false},0).to({alpha:1},63).wait(20));

	// hero3_eyelashes1
	this.instance_8 = new lib.hero3_eyelashes1();
	this.instance_8.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(64).to({alpha:0.012},8).to({_off:true},1).wait(19));

	// hero3_eyes0
	this.instance_9 = new lib.hero3_eyes0_1();
	this.instance_9.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(92));

	// hero3_lips0
	this.instance_10 = new lib.hero3_lips0();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(92));

	// Слой 6
	this.instance_11 = new lib.hero3_eyebrows2();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(92));

	// Слой 5
	this.instance_12 = new lib.hero3_rouge();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(92));

	// h3_b
	this.instance_13 = new lib.h3_b();
	this.instance_13.setTransform(-14,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(92));

	// els_nimb1
	this.instance_14 = new lib.els_nimb1();
	this.instance_14.setTransform(-24,-203);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(92));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-290.6,778,591.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation3_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Слой 7
	this.instance = new lib.hero3_lens();
	this.instance.setTransform(6.4,91);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:42.4,y:-95.5},18).to({_off:true},1).wait(1));

	// Слой 4
	this.instance_1 = new lib.hero3_lens();
	this.instance_1.setTransform(-36.6,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-74.6,y:-93.9},18).to({_off:true},1).wait(1));

	// Слой 13
	this.instance_2 = new lib.shadows5();
	this.instance_2.setTransform(-292,-102.8);

	this.instance_3 = new lib.lipstick25();
	this.instance_3.setTransform(279.9,-132.4);

	this.instance_4 = new lib.mascara19();
	this.instance_4.setTransform(310.4,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(20));

	// smile3
	this.instance_5 = new lib.smile3();
	this.instance_5.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20));

	// tables
	this.instance_6 = new lib.tables();
	this.instance_6.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20));

	// hero3_fringe1
	this.instance_7 = new lib.hero3_fringe1();
	this.instance_7.setTransform(-9.9,-111);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20));

	// hero3_eyelashes1
	this.instance_8 = new lib.hero3_eyelashes1();
	this.instance_8.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(20));

	// hero3_eyes0
	this.instance_9 = new lib.hero3_eyes0();
	this.instance_9.setTransform(-19.5,-120.2);

	this.instance_10 = new lib.hero3_eyes0_1();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_10}]},19).wait(1));

	// hero3_lips0
	this.instance_11 = new lib.hero3_lips0();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(20));

	// Слой 6
	this.instance_12 = new lib.hero3_eyebrows2();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(20));

	// Слой 5
	this.instance_13 = new lib.hero3_rouge();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(20));

	// h3_b
	this.instance_14 = new lib.h3_b();
	this.instance_14.setTransform(-14,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(20));

	// els_nimb1
	this.instance_15 = new lib.els_nimb1();
	this.instance_15.setTransform(-24,-203);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-290.6,778,591.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation3_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// Слой 3
	this.instance = new lib.magic2();
	this.instance.setTransform(127,-102.6,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({_off:true},30).wait(1));

	// Слой 4
	this.instance_1 = new lib.pencil9();
	this.instance_1.setTransform(-11.8,93.8,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-85.8,y:-95.4},9).to({x:-135.8,y:-110.4},9).to({x:-159.8,y:-97.4},5).to({rotation:-139.5,x:52.1,y:-100},7).to({x:100.1,y:-114},11).to({x:129.1,y:-101},8).to({scaleX:0.54,scaleY:0.54,alpha:0.012},5).to({_off:true},1).wait(25));

	// Слой 13
	this.instance_2 = new lib.shadows5();
	this.instance_2.setTransform(-292,-102.8);

	this.instance_3 = new lib.lipstick25();
	this.instance_3.setTransform(279.9,-132.4);

	this.instance_4 = new lib.dayneris_lens_20();
	this.instance_4.setTransform(-295,53);

	this.instance_5 = new lib.mascara19();
	this.instance_5.setTransform(310.4,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(80));

	// smile3
	this.instance_6 = new lib.smile3();
	this.instance_6.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(80));

	// tables
	this.instance_7 = new lib.tables();
	this.instance_7.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(80));

	// hero3_fringe1
	this.instance_8 = new lib.hero3_fringe1();
	this.instance_8.setTransform(-9.9,-111);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(80));

	// hero3_eyelashes1
	this.instance_9 = new lib.hero3_eyelashes1();
	this.instance_9.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(80));

	// hero3_eyes0
	this.instance_10 = new lib.hero3_eyes0();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(80));

	// hero3_lips0
	this.instance_11 = new lib.hero3_lips0();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(80));

	// Слой 6
	this.instance_12 = new lib.hero3_eyebrows2();
	this.instance_12.setTransform(-19.5,-120.2);
	this.instance_12.alpha = 0.012;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(9).to({_off:false},0).to({alpha:1},39).wait(32));

	// hero3_eyebrows1
	this.instance_13 = new lib.hero3_eyebrows1();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(39).to({alpha:0.012},9).to({_off:true},1).wait(31));

	// Слой 5
	this.instance_14 = new lib.hero3_rouge();
	this.instance_14.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(80));

	// h3_b
	this.instance_15 = new lib.h3_b();
	this.instance_15.setTransform(-14,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(80));

	// els_nimb1
	this.instance_16 = new lib.els_nimb1();
	this.instance_16.setTransform(-24,-203);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-290.6,778,591.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation3_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(1));

	// Слой 4
	this.instance = new lib.magic2();
	this.instance.setTransform(41,-37.6,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({_off:false},0).wait(18));

	// Слой 3
	this.instance_1 = new lib.gubka();
	this.instance_1.setTransform(-14.6,84.4,0.34,0.34);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-23.7,x:-85.6,y:-35.6},9).to({scaleX:0.31,scaleY:0.31},2).to({scaleX:0.34,scaleY:0.34},2).to({scaleX:0.31,scaleY:0.31},2).to({scaleX:0.34,scaleY:0.34},2).to({scaleX:0.31,scaleY:0.31},2).to({scaleX:0.34,scaleY:0.34},2).to({rotation:28.5,x:47.1},10).to({scaleX:0.29,scaleY:0.29,rotation:28.5},2).to({scaleX:0.34,scaleY:0.34},2).to({scaleX:0.29,scaleY:0.29},2).to({scaleX:0.34,scaleY:0.34},2).to({scaleX:0.29,scaleY:0.29},2).to({scaleX:0.34,scaleY:0.34},2).to({scaleX:0.29,scaleY:0.29},2).to({scaleX:0.34,scaleY:0.34},2).to({scaleX:0.26,scaleY:0.26,alpha:0.012},10).to({_off:true},1).wait(7));

	// Слой 13
	this.instance_2 = new lib.shadows5();
	this.instance_2.setTransform(-292,-102.8);

	this.instance_3 = new lib.lipstick25();
	this.instance_3.setTransform(279.9,-132.4);

	this.instance_4 = new lib.dayneris_lens_20();
	this.instance_4.setTransform(-295,53);

	this.instance_5 = new lib.mascara19();
	this.instance_5.setTransform(310.4,13.6);

	this.instance_6 = new lib.pencil9();
	this.instance_6.setTransform(239.2,-72.1,1,1,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(65));

	// smile3
	this.instance_7 = new lib.smile3();
	this.instance_7.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(65));

	// tables
	this.instance_8 = new lib.tables();
	this.instance_8.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(65));

	// hero3_fringe1
	this.instance_9 = new lib.hero3_fringe1();
	this.instance_9.setTransform(-9.9,-111);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(65));

	// hero3_eyelashes1
	this.instance_10 = new lib.hero3_eyelashes1();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(65));

	// hero3_eyes0
	this.instance_11 = new lib.hero3_eyes0();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(65));

	// hero3_lips0
	this.instance_12 = new lib.hero3_lips0();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(65));

	// hero3_eyebrows1
	this.instance_13 = new lib.hero3_eyebrows1();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(65));

	// Слой 5
	this.instance_14 = new lib.hero3_rouge();
	this.instance_14.setTransform(-19.5,-120.2);
	this.instance_14.alpha = 0.012;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(9).to({_off:false},0).to({alpha:1},37).wait(19));

	// h3_b
	this.instance_15 = new lib.h3_b();
	this.instance_15.setTransform(-14,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(65));

	// els_nimb1
	this.instance_16 = new lib.els_nimb1();
	this.instance_16.setTransform(-24,-203);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-290.6,778,591.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_119 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(1));

	// Слой 6
	this.instance = new lib.magic2();
	this.instance.setTransform(-26,83.4,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({_off:true},30).wait(41));

	// Слой 8
	this.instance_1 = new lib.lipstick2();
	this.instance_1.setTransform(-33,68,1,1,37.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-68,y:25},9).to({x:-47,y:10},6).to({x:-39,y:14},3).to({x:-28,y:8},4).to({x:-17,y:29},5).to({x:-40,y:32},7).to({x:-66,y:30},8).to({x:-24,y:87},7).to({scaleX:0.56,scaleY:0.56,alpha:0.012},4).to({_off:true},1).wait(66));

	// tables
	this.instance_2 = new lib.tables();
	this.instance_2.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120));

	// Слой 11
	this.instance_3 = new lib.hero2_hand();
	this.instance_3.setTransform(94,485.5,1,1,0,0,180);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(55).to({_off:false},0).to({y:212.5},9).wait(7).to({x:84,y:177.5},7).to({x:94,y:212.5},8).wait(34));

	// Слой 10
	this.instance_4 = new lib.hero2_hand();
	this.instance_4.setTransform(-114,525.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(55).to({_off:false},0).to({y:252.3},9).wait(22).to({x:-100,y:214.3},7).to({x:-114,y:252.3},7).wait(20));

	// smile2
	this.instance_5 = new lib.smile2();
	this.instance_5.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120));

	// Слой 16
	this.instance_6 = new lib.hero2_fringe1();
	this.instance_6.setTransform(-41,-191.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120));

	// Слой 9
	this.instance_7 = new lib.hero2_lips2();
	this.instance_7.setTransform(-19.5,-120.2);
	this.instance_7.alpha = 0.012;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({_off:false},0).to({alpha:1},40).wait(71));

	// hero2_lips0
	this.instance_8 = new lib.hero2_lips1();
	this.instance_8.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120));

	// hero2_eyes1
	this.instance_9 = new lib.hero2_eyes1_all();
	this.instance_9.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(120));

	// Слой 3
	this.instance_10 = new lib.hero2_podvodka();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(120));

	// Слой 5
	this.instance_11 = new lib.hero2_shadows();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(120));

	// Слой 4
	this.instance_12 = new lib.hero2_eyebrows2();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(120));

	// Слой 7
	this.instance_13 = new lib.hero2_rouge();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(120));

	// hero2_face
	this.instance_14 = new lib.hero2_face();
	this.instance_14.setTransform(-19.5,-120.2);

	this.instance_15 = new lib.h2_b();
	this.instance_15.setTransform(-14,118.6);

	this.instance_16 = new lib.hero2_hair1();
	this.instance_16.setTransform(-0.8,25.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-293.6,778,591.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-399.5,-293.6,778,1051.4), new cjs.Rectangle(-399.5,-293.6,778,1021), new cjs.Rectangle(-399.5,-293.6,778,990.7), new cjs.Rectangle(-399.5,-293.6,778,960.4), new cjs.Rectangle(-399.5,-293.6,778,930.1), new cjs.Rectangle(-399.5,-293.6,778,899.7), new cjs.Rectangle(-399.5,-293.6,778,869.4), new cjs.Rectangle(-399.5,-293.6,778,839.1), new cjs.Rectangle(-399.5,-293.6,778,808.8), rect=new cjs.Rectangle(-399.5,-293.6,778,778.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-399.5,-293.6,778,773), new cjs.Rectangle(-399.5,-293.6,778,767.6), new cjs.Rectangle(-399.5,-293.6,778,762.1), new cjs.Rectangle(-399.5,-293.6,778,756.7), new cjs.Rectangle(-399.5,-293.6,778,751.3), new cjs.Rectangle(-399.5,-293.6,778,745.9), new cjs.Rectangle(-399.5,-293.6,778,740.4), new cjs.Rectangle(-399.5,-293.6,778,745.9), new cjs.Rectangle(-399.5,-293.6,778,751.3), new cjs.Rectangle(-399.5,-293.6,778,756.7), new cjs.Rectangle(-399.5,-293.6,778,762.1), new cjs.Rectangle(-399.5,-293.6,778,767.6), new cjs.Rectangle(-399.5,-293.6,778,773), rect=new cjs.Rectangle(-399.5,-293.6,778,778.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// Слой 8
	this.instance = new lib.magic2();
	this.instance.setTransform(-34,70.4,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).wait(21));

	// Слой 6
	this.instance_1 = new lib.podvodka1_4();
	this.instance_1.setTransform(-13,92,0.5,0.5,143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-6,y:-43},9).to({x:-41,y:-72},7).to({x:-72,y:-62},7).to({x:-86,y:-68},4).to({rotation:219.5,x:-33,y:-40},6).to({x:11,y:-72},7).to({x:43,y:-66.3},9).to({x:34,y:-42.3},5).to({x:-31,y:63.7},5).to({scaleX:0.35,scaleY:0.35},5).to({_off:true},1).wait(15));

	// Слой 13
	this.instance_2 = new lib.lipstick2();
	this.instance_2.setTransform(-331,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80));

	// tables
	this.instance_3 = new lib.tables();
	this.instance_3.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(80));

	// smile2
	this.instance_4 = new lib.smile2();
	this.instance_4.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(80));

	// Слой 16
	this.instance_5 = new lib.hero2_fringe1();
	this.instance_5.setTransform(-41,-191.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(80));

	// hero2_lips0
	this.instance_6 = new lib.hero2_lips0();
	this.instance_6.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(80));

	// hero2_eyes1
	this.instance_7 = new lib.hero2_eyes3();
	this.instance_7.setTransform(-19.5,-120.2);

	this.instance_8 = new lib.hero2_eyes2();
	this.instance_8.setTransform(-19.5,-120.2);

	this.instance_9 = new lib.hero2_eyes1();
	this.instance_9.setTransform(-19.5,-120.2);

	this.instance_10 = new lib.hero2_eyes1_all();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_8}]},65).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).wait(11));

	// Слой 3
	this.instance_11 = new lib.hero2_podvodka();
	this.instance_11.setTransform(-19.5,-120.2);
	this.instance_11.alpha = 0.012;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(9).to({_off:false},0).to({alpha:1},50).wait(21));

	// Слой 5
	this.instance_12 = new lib.hero2_shadows();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(80));

	// Слой 4
	this.instance_13 = new lib.hero2_eyebrows2();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(80));

	// Слой 7
	this.instance_14 = new lib.hero2_rouge();
	this.instance_14.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(80));

	// hero2_face
	this.instance_15 = new lib.hero2_face();
	this.instance_15.setTransform(-19.5,-120.2);

	this.instance_16 = new lib.h2_b();
	this.instance_16.setTransform(-14,118.6);

	this.instance_17 = new lib.hero2_hair1();
	this.instance_17.setTransform(-0.8,25.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-293.6,778,591.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_89 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

	// Слой 8
	this.instance = new lib.magic2();
	this.instance.setTransform(82,-75.3,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71).to({_off:false},0).wait(19));

	// Слой 3
	this.instance_1 = new lib.kist2();
	this.instance_1.setTransform(-5.6,81.4,0.693,0.693,-116.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-53.4,x:-42.6,y:-81},10).to({rotation:-113.8,x:-40.6,y:-122},4).to({rotation:-53.4,x:-42.6,y:-81},4).to({rotation:-113.8,x:-40.6,y:-122},4).to({rotation:-53.4,x:-42.6,y:-81},4).to({rotation:-113.8,x:-40.6,y:-122},4).to({rotation:-53.4,x:-42.6,y:-81},4).to({x:80.4,y:-72},5).to({rotation:-122.3,x:72.4,y:-130},4).to({rotation:-53.4,x:80.4,y:-72},4).to({rotation:-122.3,x:72.4,y:-130},4).to({rotation:-53.4,x:80.4,y:-72},4).to({rotation:-122.3,x:72.4,y:-130},4).to({rotation:-53.4,x:80.4,y:-72},4).to({rotation:-122.3,x:72.4,y:-130},4).to({rotation:-53.4,x:80.4,y:-72},4).to({scaleX:0.58,scaleY:0.58,rotation:-53.4,alpha:0.012},7).to({_off:true},1).wait(11));

	// Слой 13
	this.instance_2 = new lib.podvodka1_4();
	this.instance_2.setTransform(242.8,9,0.685,0.685,165);

	this.instance_3 = new lib.podvodka1_1();
	this.instance_3.setTransform(232.6,52.9,0.685,0.685);

	this.instance_4 = new lib.lipstick2();
	this.instance_4.setTransform(-331,42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(90));

	// tables
	this.instance_5 = new lib.tables();
	this.instance_5.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(90));

	// smile2
	this.instance_6 = new lib.smile2();
	this.instance_6.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(90));

	// Слой 16
	this.instance_7 = new lib.hero2_fringe1();
	this.instance_7.setTransform(-41,-191.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(90));

	// hero2_lips0
	this.instance_8 = new lib.hero2_lips0();
	this.instance_8.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(90));

	// hero2_eyes1
	this.instance_9 = new lib.hero2_eyes3();
	this.instance_9.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(90));

	// Слой 5
	this.instance_10 = new lib.hero2_shadows();
	this.instance_10.setTransform(-19.5,-120.2);
	this.instance_10.alpha = 0.012;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10).to({_off:false},0).to({alpha:1},61).wait(19));

	// Слой 4
	this.instance_11 = new lib.hero2_eyebrows2();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(90));

	// Слой 7
	this.instance_12 = new lib.hero2_rouge();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(90));

	// hero2_face
	this.instance_13 = new lib.hero2_face();
	this.instance_13.setTransform(-19.5,-120.2);

	this.instance_14 = new lib.h2_b();
	this.instance_14.setTransform(-14,118.6);

	this.instance_15 = new lib.hero2_hair1();
	this.instance_15.setTransform(-0.8,25.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-293.6,778,591.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// Слой 3
	this.instance = new lib.magic2();
	this.instance.setTransform(161,-121.6,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50).to({_off:false},0).to({_off:true},29).wait(1));

	// Слой 5
	this.instance_1 = new lib.pencil10();
	this.instance_1.setTransform(-20.3,78,1,1,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-94.3,y:-101},9).to({x:-125.3,y:-118},12).to({rotation:-136,x:51.3,y:-93},5).to({x:99.3,y:-112},12).to({x:123.3,y:-102},6).to({x:166.2,y:-123},6).to({scaleX:0.8,scaleY:0.8,alpha:0.012},4).to({_off:true},1).wait(25));

	// Слой 13
	this.instance_2 = new lib.shadows13();
	this.instance_2.setTransform(-250,43.2);

	this.instance_3 = new lib.podvodka1_4();
	this.instance_3.setTransform(242.8,9,0.685,0.685,165);

	this.instance_4 = new lib.podvodka1_1();
	this.instance_4.setTransform(232.6,52.9,0.685,0.685);

	this.instance_5 = new lib.lipstick2();
	this.instance_5.setTransform(-331,42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(80));

	// tables
	this.instance_6 = new lib.tables();
	this.instance_6.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(80));

	// smile2
	this.instance_7 = new lib.smile2();
	this.instance_7.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(80));

	// Слой 16
	this.instance_8 = new lib.hero2_fringe1();
	this.instance_8.setTransform(-41,-191.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(80));

	// hero2_lips0
	this.instance_9 = new lib.hero2_lips0();
	this.instance_9.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(80));

	// hero2_eyes1
	this.instance_10 = new lib.hero2_eyes1();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(80));

	// Слой 4
	this.instance_11 = new lib.hero2_eyebrows2();
	this.instance_11.setTransform(-19.5,-120.2);
	this.instance_11.alpha = 0.012;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10).to({_off:false},0).to({alpha:1},39).wait(31));

	// hero2_eyebrows1
	this.instance_12 = new lib.hero2_eyebrows1();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(44).to({alpha:0.012},4).to({_off:true},1).wait(31));

	// Слой 7
	this.instance_13 = new lib.hero2_rouge();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(80));

	// hero2_face
	this.instance_14 = new lib.hero2_face();
	this.instance_14.setTransform(-19.5,-120.2);

	this.instance_15 = new lib.h2_b();
	this.instance_15.setTransform(-14,118.6);

	this.instance_16 = new lib.hero2_hair1();
	this.instance_16.setTransform(-0.8,25.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-293.6,778,591.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(1));

	// Слой 5
	this.instance = new lib.magic2();
	this.instance.setTransform(41,-37.6,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({_off:false},0).wait(18));

	// Слой 6
	this.instance_1 = new lib.gubka();
	this.instance_1.setTransform(-14.6,84.4,0.34,0.34);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-23.7,x:-85.6,y:-35.6},9).to({scaleX:0.31,scaleY:0.31},2).to({scaleX:0.34,scaleY:0.34},2).to({scaleX:0.31,scaleY:0.31},2).to({scaleX:0.34,scaleY:0.34},2).to({scaleX:0.31,scaleY:0.31},2).to({scaleX:0.34,scaleY:0.34},2).to({rotation:28.5,x:47.1},10).to({scaleX:0.29,scaleY:0.29,rotation:28.5},2).to({scaleX:0.34,scaleY:0.34},2).to({scaleX:0.29,scaleY:0.29},2).to({scaleX:0.34,scaleY:0.34},2).to({scaleX:0.29,scaleY:0.29},2).to({scaleX:0.34,scaleY:0.34},2).to({scaleX:0.29,scaleY:0.29},2).to({scaleX:0.34,scaleY:0.34},2).to({scaleX:0.26,scaleY:0.26,alpha:0.012},10).to({_off:true},1).wait(7));

	// Слой 13
	this.instance_2 = new lib.shadows13();
	this.instance_2.setTransform(-250,43.2);

	this.instance_3 = new lib.podvodka1_4();
	this.instance_3.setTransform(242.8,9,0.685,0.685,165);

	this.instance_4 = new lib.podvodka1_1();
	this.instance_4.setTransform(232.6,52.9,0.685,0.685);

	this.instance_5 = new lib.lipstick2();
	this.instance_5.setTransform(-331,42);

	this.instance_6 = new lib.pencil10();
	this.instance_6.setTransform(-287.3,-75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(65));

	// tables
	this.instance_7 = new lib.tables();
	this.instance_7.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(65));

	// smile2
	this.instance_8 = new lib.smile2();
	this.instance_8.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(65));

	// Слой 16
	this.instance_9 = new lib.hero2_fringe1();
	this.instance_9.setTransform(-41,-191.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(65));

	// hero2_lips0
	this.instance_10 = new lib.hero2_lips0();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(65));

	// hero2_eyes1
	this.instance_11 = new lib.hero2_eyes1();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(65));

	// hero2_eyebrows1
	this.instance_12 = new lib.hero2_eyebrows1();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(65));

	// Слой 7
	this.instance_13 = new lib.hero2_rouge();
	this.instance_13.setTransform(-19.5,-120.2);
	this.instance_13.alpha = 0.012;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(8).to({_off:false},0).to({alpha:1},39).wait(18));

	// hero2_face
	this.instance_14 = new lib.hero2_face();
	this.instance_14.setTransform(-19.5,-120.2);

	this.instance_15 = new lib.h2_b();
	this.instance_15.setTransform(-14,118.6);

	this.instance_16 = new lib.hero2_hair1();
	this.instance_16.setTransform(-0.8,25.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-293.6,778,591.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.hero1_zac();
	this.instance.setTransform(99.3,-92.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.hero1_hand();
	this.instance_1.setTransform(98.1,305,0.888,0.888,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.hero1_hand();
	this.instance_2.setTransform(-115.1,304.1,0.888,0.888);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.smile1();
	this.instance_3.setTransform(0,-192);

	this.instance_4 = new lib.smile1();
	this.instance_4.setTransform(-180,-192);

	this.instance_5 = new lib.smile1();
	this.instance_5.setTransform(180,-192);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// graph
	this.instance_6 = new lib.eyes11();
	this.instance_6.setTransform(-13.2,-13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// graph
	this.instance_7 = new lib.hero1_hair1();
	this.instance_7.setTransform(-6.2,163.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// graph
	this.instance_8 = new lib.h1_l1();
	this.instance_8.setTransform(-13.2,-13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// graph
	this.instance_9 = new lib.hero1_eyebrows2();
	this.instance_9.setTransform(-13.2,-13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// graph
	this.instance_10 = new lib.hero1_shadows();
	this.instance_10.setTransform(-13.2,-13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// graph
	this.instance_11 = new lib.hero1_rouge();
	this.instance_11.setTransform(-13.2,-13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// graph
	this.instance_12 = new lib.hero1_base();
	this.instance_12.setTransform(-7.7,106.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-232,-244,464,777.8);
p.frameBounds = [rect];


(lib.animation1_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// Слой 8
	this.instance = new lib.hero1_zac();
	this.instance.setTransform(-15,83);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:93,y:-199},9).wait(91));

	// Слой 12
	this.instance_1 = new lib.tables();
	this.instance_1.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// hero1_hand
	this.instance_2 = new lib.hero1_hand();
	this.instance_2.setTransform(91.9,455.7,0.888,0.888,0,0,180);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({y:198.7},13).wait(15).to({scaleX:0.91,scaleY:0.91,x:93,y:196.7},10).to({scaleX:0.89,scaleY:0.89,x:91.9,y:198.7},10).to({scaleX:0.91,scaleY:0.91,x:93,y:196.7},10).to({scaleX:0.89,scaleY:0.89,x:91.9,y:198.7},9).wait(14));

	// hero1_hand
	this.instance_3 = new lib.hero1_hand();
	this.instance_3.setTransform(-121.3,454.8,0.888,0.888);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({y:197.8},13).wait(15).to({scaleX:0.91,scaleY:0.91,x:-124.9,y:195.8},10).to({scaleX:0.89,scaleY:0.89,x:-121.3,y:197.8},10).to({scaleX:0.91,scaleY:0.91,x:-124.9,y:195.8},10).to({scaleX:0.89,scaleY:0.89,x:-121.3,y:197.8},9).wait(14));

	// Слой 11
	this.instance_4 = new lib.smile1();
	this.instance_4.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100));

	// hero1_eyelashes1.png
	this.instance_5 = new lib.eyes11();
	this.instance_5.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(100));

	// hero1_hair1.png
	this.instance_6 = new lib.hero1_hair1();
	this.instance_6.setTransform(-12.5,57);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(100));

	// Слой 5
	this.instance_7 = new lib.h1_l1();
	this.instance_7.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(100));

	// Слой 6
	this.instance_8 = new lib.hero1_eyebrows2();
	this.instance_8.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(100));

	// Слой 4
	this.instance_9 = new lib.hero1_shadows();
	this.instance_9.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(100));

	// Слой 3
	this.instance_10 = new lib.hero1_rouge();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(100));

	// hero1_face.png
	this.instance_11 = new lib.hero1_base();
	this.instance_11.setTransform(-14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-313.5,778,741);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-399.5,-313.5,778,947.7), new cjs.Rectangle(-399.5,-313.5,778,927.9), new cjs.Rectangle(-399.5,-313.5,778,908.1), new cjs.Rectangle(-399.5,-313.5,778,888.4), new cjs.Rectangle(-399.5,-313.5,778,868.6), new cjs.Rectangle(-399.5,-313.5,778,848.8), new cjs.Rectangle(-399.5,-313.5,778,829.1), new cjs.Rectangle(-399.5,-313.5,778,809.3), new cjs.Rectangle(-399.5,-313.5,778,789.6), new cjs.Rectangle(-399.5,-313.5,778,769.8), new cjs.Rectangle(-399.5,-313.5,778,750), rect=new cjs.Rectangle(-399.5,-313.5,778,741), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_75 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(75).call(this.frame_75).wait(1));

	// Слой 8
	this.instance = new lib.magic2();
	this.instance.setTransform(-54,24.4,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56).to({_off:false},0).wait(20));

	// Слой 7
	this.instance_1 = new lib.lipstick35();
	this.instance_1.setTransform(-31,92.3,0.668,0.668,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-59,y:17.3},9).to({x:-15,y:19.3},10).to({x:-18,y:26.3},4).to({x:-51.2,y:24.3},8).to({x:-59,y:17.3},3).to({x:-15,y:19.3},10).to({x:-18,y:26.3},4).to({x:-51.2,y:24.3},8).to({scaleX:0.45,scaleY:0.45,alpha:0.012},7).to({_off:true},1).wait(12));

	// Слой 13
	this.instance_2 = new lib.hero1_zac();
	this.instance_2.setTransform(208,-93.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(76));

	// Слой 12
	this.instance_3 = new lib.tables();
	this.instance_3.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(76));

	// Слой 15
	this.instance_4 = new lib.hero1_hand();
	this.instance_4.setTransform(91.9,455.7,0.888,0.888,0,0,180);

	this.instance_5 = new lib.hero1_hand();
	this.instance_5.setTransform(-121.3,454.8,0.888,0.888);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(76));

	// Слой 11
	this.instance_6 = new lib.smile1();
	this.instance_6.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(76));

	// hero1_eyelashes1.png
	this.instance_7 = new lib.eyes11();
	this.instance_7.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(76));

	// hero1_hair1.png
	this.instance_8 = new lib.hero1_hair1();
	this.instance_8.setTransform(-12.5,57);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(76));

	// Слой 5
	this.instance_9 = new lib.hero1_lips1();
	this.instance_9.setTransform(-19.5,-120.2);
	this.instance_9.alpha = 0.012;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10).to({_off:false},0).to({alpha:1},46).wait(20));

	// hero1_lips0.png
	this.instance_10 = new lib.hero1_lips0();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(76));

	// Слой 6
	this.instance_11 = new lib.hero1_eyebrows2();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(76));

	// Слой 4
	this.instance_12 = new lib.hero1_shadows();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(76));

	// Слой 3
	this.instance_13 = new lib.hero1_rouge();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(76));

	// hero1_face.png
	this.instance_14 = new lib.hero1_base();
	this.instance_14.setTransform(-14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-313.5,778,947.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Слой 8
	this.instance = new lib.lens1();
	this.instance.setTransform(7,74);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:42,y:-92.5},13).to({_off:true},1).wait(1));

	// Слой 7
	this.instance_1 = new lib.lens1();
	this.instance_1.setTransform(-35,74);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-74,y:-92.9},13).to({_off:true},1).wait(1));

	// Слой 13
	this.instance_2 = new lib.lipstick35();
	this.instance_2.setTransform(-259,31,0.64,0.64);

	this.instance_3 = new lib.hero1_zac();
	this.instance_3.setTransform(208,-93.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(15));

	// Слой 12
	this.instance_4 = new lib.tables();
	this.instance_4.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

	// Слой 15
	this.instance_5 = new lib.hero1_hand();
	this.instance_5.setTransform(91.9,455.7,0.888,0.888,0,0,180);

	this.instance_6 = new lib.hero1_hand();
	this.instance_6.setTransform(-121.3,454.8,0.888,0.888);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(15));

	// Слой 11
	this.instance_7 = new lib.smile1();
	this.instance_7.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

	// hero1_eyelashes1.png
	this.instance_8 = new lib.hero1_eyelashes1();
	this.instance_8.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15));

	// hero1_hair1.png
	this.instance_9 = new lib.hero1_hair1();
	this.instance_9.setTransform(-12.5,57);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15));

	// hero1_lips0.png
	this.instance_10 = new lib.hero1_lips0();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15));

	// Слой 6
	this.instance_11 = new lib.hero1_eyebrows2();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15));

	// hero1_eyelashes1.png
	this.instance_12 = new lib.hero1_eyes1();
	this.instance_12.setTransform(-19.5,-120.2);

	this.instance_13 = new lib.hero1_eyes2();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_13}]},14).wait(1));

	// Слой 4
	this.instance_14 = new lib.hero1_shadows();
	this.instance_14.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15));

	// Слой 3
	this.instance_15 = new lib.hero1_rouge();
	this.instance_15.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(15));

	// hero1_face.png
	this.instance_16 = new lib.hero1_base();
	this.instance_16.setTransform(-14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-313.5,778,947.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_89 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

	// Слой 7
	this.instance = new lib.magic2();
	this.instance.setTransform(82,-75.3,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71).to({_off:false},0).wait(19));

	// Слой 5
	this.instance_1 = new lib.kist2();
	this.instance_1.setTransform(-5.6,81.4,0.693,0.693,-116.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-53.4,x:-42.6,y:-81},10).to({rotation:-113.8,x:-40.6,y:-122},4).to({rotation:-53.4,x:-42.6,y:-81},4).to({rotation:-113.8,x:-40.6,y:-122},4).to({rotation:-53.4,x:-42.6,y:-81},4).to({rotation:-113.8,x:-40.6,y:-122},4).to({rotation:-53.4,x:-42.6,y:-81},4).to({x:80.4,y:-72},5).to({rotation:-122.3,x:72.4,y:-130},4).to({rotation:-53.4,x:80.4,y:-72},4).to({rotation:-122.3,x:72.4,y:-130},4).to({rotation:-53.4,x:80.4,y:-72},4).to({rotation:-122.3,x:72.4,y:-130},4).to({rotation:-53.4,x:80.4,y:-72},4).to({rotation:-122.3,x:72.4,y:-130},4).to({rotation:-53.4,x:80.4,y:-72},4).to({scaleX:0.58,scaleY:0.58,rotation:-53.4,alpha:0.012},7).to({_off:true},1).wait(11));

	// Слой 13
	this.instance_2 = new lib.lipstick35();
	this.instance_2.setTransform(-259,31,0.64,0.64);

	this.instance_3 = new lib.dayneris_lens_19();
	this.instance_3.setTransform(264,47,0.787,0.787);

	this.instance_4 = new lib.hero1_zac();
	this.instance_4.setTransform(208,-93.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(90));

	// Слой 12
	this.instance_5 = new lib.tables();
	this.instance_5.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(90));

	// Слой 15
	this.instance_6 = new lib.hero1_hand();
	this.instance_6.setTransform(91.9,455.7,0.888,0.888,0,0,180);

	this.instance_7 = new lib.hero1_hand();
	this.instance_7.setTransform(-121.3,454.8,0.888,0.888);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(90));

	// Слой 11
	this.instance_8 = new lib.smile1();
	this.instance_8.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(90));

	// hero1_eyelashes1.png
	this.instance_9 = new lib.hero1_eyelashes2();
	this.instance_9.setTransform(-19.5,-120.2);

	this.instance_10 = new lib.hero1_eyelashes1();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_10}]},79).wait(11));

	// hero1_hair1.png
	this.instance_11 = new lib.hero1_hair1();
	this.instance_11.setTransform(-12.5,57);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(90));

	// hero1_lips0.png
	this.instance_12 = new lib.hero1_lips0();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(90));

	// Слой 6
	this.instance_13 = new lib.hero1_eyebrows2();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(90));

	// hero1_eyelashes1.png
	this.instance_14 = new lib.hero1_eyes1();
	this.instance_14.setTransform(-19.5,-120.2);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(79).to({_off:false},0).wait(11));

	// Слой 4
	this.instance_15 = new lib.hero1_shadows();
	this.instance_15.setTransform(-19.5,-120.2);
	this.instance_15.alpha = 0.012;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(9).to({_off:false},0).to({alpha:1},61).wait(20));

	// Слой 3
	this.instance_16 = new lib.hero1_rouge();
	this.instance_16.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(90));

	// hero1_face.png
	this.instance_17 = new lib.hero1_base();
	this.instance_17.setTransform(-14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-313.5,778,947.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

	// Слой 7
	this.instance = new lib.magic2();
	this.instance.setTransform(103,-90.6,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(51).to({_off:false},0).wait(19));

	// Слой 5
	this.instance_1 = new lib.pencil33();
	this.instance_1.setTransform(-14,79,0.786,0.786,-33.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-70.1,y:-72.8},9).to({x:-53.1,y:-88.1},7).to({x:-5.1,y:-78.8},11).to({x:54.2,y:-76.8},6).to({x:96.2,y:-88.1},7).to({x:109.2,y:-83.1},9).to({scaleX:0.72,scaleY:0.72,alpha:0.012},9).to({_off:true},1).wait(11));

	// Слой 13
	this.instance_2 = new lib.shadows10();
	this.instance_2.setTransform(301,-106.9,0.733,0.733);

	this.instance_3 = new lib.lipstick35();
	this.instance_3.setTransform(-259,31,0.64,0.64);

	this.instance_4 = new lib.dayneris_lens_19();
	this.instance_4.setTransform(264,47,0.787,0.787);

	this.instance_5 = new lib.hero1_zac();
	this.instance_5.setTransform(208,-93.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(70));

	// Слой 12
	this.instance_6 = new lib.tables();
	this.instance_6.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(70));

	// Слой 15
	this.instance_7 = new lib.hero1_hand();
	this.instance_7.setTransform(91.9,455.7,0.888,0.888,0,0,180);

	this.instance_8 = new lib.hero1_hand();
	this.instance_8.setTransform(-121.3,454.8,0.888,0.888);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(70));

	// Слой 11
	this.instance_9 = new lib.smile1();
	this.instance_9.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(70));

	// hero1_eyelashes1.png
	this.instance_10 = new lib.hero1_eyelashes1();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(70));

	// hero1_hair1.png
	this.instance_11 = new lib.hero1_hair1();
	this.instance_11.setTransform(-12.5,57);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(70));

	// hero1_eyes1.png
	this.instance_12 = new lib.hero1_eyes1();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(70));

	// hero1_lips0.png
	this.instance_13 = new lib.hero1_lips0();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(70));

	// Слой 6
	this.instance_14 = new lib.hero1_eyebrows2();
	this.instance_14.setTransform(-19.5,-120.2);
	this.instance_14.alpha = 0.012;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10).to({_off:false},0).to({alpha:1},39).wait(21));

	// hero1_eyebrows1.png
	this.instance_15 = new lib.hero1_eyebrows1();
	this.instance_15.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(49).to({alpha:0.012},9).to({_off:true},1).wait(11));

	// Слой 3
	this.instance_16 = new lib.hero1_rouge();
	this.instance_16.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(70));

	// hero1_face.png
	this.instance_17 = new lib.hero1_base();
	this.instance_17.setTransform(-14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-313.5,778,947.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

	// Слой 4
	this.instance = new lib.magic2();
	this.instance.setTransform(41,-37.6,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({_off:false},0).wait(23));

	// Слой 7
	this.instance_1 = new lib.gubka();
	this.instance_1.setTransform(-14.6,84.4,0.34,0.34);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-23.7,x:-85.6,y:-35.6},9).to({scaleX:0.31,scaleY:0.31},2).to({scaleX:0.34,scaleY:0.34},2).to({scaleX:0.31,scaleY:0.31},2).to({scaleX:0.34,scaleY:0.34},2).to({scaleX:0.31,scaleY:0.31},2).to({scaleX:0.34,scaleY:0.34},2).to({rotation:28.5,x:47.1},10).to({scaleX:0.29,scaleY:0.29,rotation:28.5},2).to({scaleX:0.34,scaleY:0.34},2).to({scaleX:0.29,scaleY:0.29},2).to({scaleX:0.34,scaleY:0.34},2).to({scaleX:0.29,scaleY:0.29},2).to({scaleX:0.34,scaleY:0.34},2).to({scaleX:0.29,scaleY:0.29},2).to({scaleX:0.34,scaleY:0.34},2).to({scaleX:0.26,scaleY:0.26,alpha:0.012},10).to({_off:true},1).wait(12));

	// Слой 13
	this.instance_2 = new lib.shadows10();
	this.instance_2.setTransform(301,-106.9,0.733,0.733);

	this.instance_3 = new lib.lipstick35();
	this.instance_3.setTransform(-259,31,0.64,0.64);

	this.instance_4 = new lib.dayneris_lens_19();
	this.instance_4.setTransform(264,47,0.787,0.787);

	this.instance_5 = new lib.pencil33();
	this.instance_5.setTransform(-313,86,0.786,0.786,-83.5);

	this.instance_6 = new lib.hero1_zac();
	this.instance_6.setTransform(208,-93.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(70));

	// Слой 12
	this.instance_7 = new lib.tables();
	this.instance_7.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(70));

	// Слой 15
	this.instance_8 = new lib.hero1_hand();
	this.instance_8.setTransform(91.9,455.7,0.888,0.888,0,0,180);

	this.instance_9 = new lib.hero1_hand();
	this.instance_9.setTransform(-121.3,454.8,0.888,0.888);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(70));

	// Слой 11
	this.instance_10 = new lib.smile1();
	this.instance_10.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(70));

	// hero1_eyelashes1.png
	this.instance_11 = new lib.hero1_eyelashes1();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(70));

	// hero1_hair1.png
	this.instance_12 = new lib.hero1_hair1();
	this.instance_12.setTransform(-12.5,57);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(70));

	// hero1_eyes1.png
	this.instance_13 = new lib.hero1_eyes1();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(70));

	// hero1_lips0.png
	this.instance_14 = new lib.hero1_lips0();
	this.instance_14.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(70));

	// hero1_eyebrows1.png
	this.instance_15 = new lib.hero1_eyebrows1();
	this.instance_15.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(70));

	// Слой 3
	this.instance_16 = new lib.hero1_rouge();
	this.instance_16.setTransform(-19.5,-120.2);
	this.instance_16.alpha = 0.012;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(9).to({_off:false},0).to({alpha:1},41).wait(20));

	// hero1_face.png
	this.instance_17 = new lib.hero1_base();
	this.instance_17.setTransform(-14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-313.5,778,947.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// animation
	this.instance = new lib.title_mc();
	this.instance.setTransform(0.5,-229.5,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({y:20.5},10).to({y:0.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-340,480,220);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-240,-315,480,220), new cjs.Rectangle(-240,-290,480,220), new cjs.Rectangle(-240,-265,480,220), new cjs.Rectangle(-240,-240,480,220), new cjs.Rectangle(-240,-215,480,220), new cjs.Rectangle(-240,-190,480,220), new cjs.Rectangle(-240,-165,480,220), new cjs.Rectangle(-240,-140,480,220), new cjs.Rectangle(-240,-115,480,220), new cjs.Rectangle(-240,-90,480,220), new cjs.Rectangle(-240,-94,480,220), new cjs.Rectangle(-240,-98,480,220), new cjs.Rectangle(-240,-102,480,220), new cjs.Rectangle(-240,-106,480,220), new cjs.Rectangle(-240,-110,480,220)];


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


(lib.curtain_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mid:22,end:59});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// logo
	this.instance = new lib.curtain_4_mc();
	this.instance.setTransform(600,300,0.667,0.667);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:600.1,y:300.1,alpha:0.211},0).wait(1).to({scaleX:0.91,scaleY:0.91,alpha:0.41},0).wait(1).to({regX:0.1,regY:0.1,scaleX:1.03,scaleY:1.03,alpha:0.609},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.801},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:600,y:300,alpha:1},0).wait(10).to({alpha:0.91},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.73},0).wait(1).to({alpha:0.641},0).wait(1).to({alpha:0.551},0).wait(1).to({alpha:0.461},0).wait(1).to({alpha:0.371},0).wait(1).to({alpha:0.281},0).wait(1).to({alpha:0.191},0).wait(1).to({alpha:0.102},0).wait(1).to({alpha:0.012},0).to({_off:true},1).wait(20));

	// curtain_1
	this.instance_1 = new lib.curtain_1_mc();
	this.instance_1.setTransform(-1000,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({x:-944.4},0).wait(1).to({x:-888.9},0).wait(1).to({x:-833.3},0).wait(1).to({x:-777.7},0).wait(1).to({x:-722.2},0).wait(1).to({x:-666.6},0).wait(1).to({x:-611.1},0).wait(1).to({x:-555.5},0).wait(1).to({x:-500},0).wait(1).to({x:-444.4},0).wait(1).to({x:-388.9},0).wait(1).to({x:-333.3},0).wait(1).to({x:-277.7},0).wait(1).to({x:-222.2},0).wait(1).to({x:-166.6},0).wait(1).to({x:-111.1},0).wait(1).to({x:-55.5},0).wait(1).to({x:0},0).wait(10).to({x:-33.3},0).wait(1).to({x:-66.6},0).wait(1).to({x:-100},0).wait(1).to({x:-133.3},0).wait(1).to({x:-166.6},0).wait(1).to({x:-200},0).wait(1).to({x:-233.3},0).wait(1).to({x:-266.6},0).wait(1).to({x:-300},0).wait(1).to({x:-333.3},0).wait(1).to({x:-366.6},0).wait(1).to({x:-400},0).wait(1).to({x:-433.3},0).wait(1).to({x:-466.6},0).wait(1).to({x:-500},0).wait(1).to({x:-533.3},0).wait(1).to({x:-566.6},0).wait(1).to({x:-600},0).wait(1).to({x:-633.3},0).wait(1).to({x:-666.6},0).wait(1).to({x:-700},0).wait(1).to({x:-733.3},0).wait(1).to({x:-766.6},0).wait(1).to({x:-800},0).wait(1).to({x:-833.3},0).wait(1).to({x:-866.6},0).wait(1).to({x:-900},0).wait(1).to({x:-933.3},0).wait(1).to({x:-966.6},0).wait(1).to({x:-1000},0).wait(2));

	// curtain_2
	this.instance_2 = new lib.curtain_2_mc();
	this.instance_2.setTransform(1000,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({x:944.5},0).wait(1).to({x:888.9},0).wait(1).to({x:833.4},0).wait(1).to({x:777.8},0).wait(1).to({x:722.2},0).wait(1).to({x:666.7},0).wait(1).to({x:611.1},0).wait(1).to({x:555.6},0).wait(1).to({x:500},0).wait(1).to({x:444.5},0).wait(1).to({x:388.9},0).wait(1).to({x:333.4},0).wait(1).to({x:277.8},0).wait(1).to({x:222.3},0).wait(1).to({x:166.7},0).wait(1).to({x:111.1},0).wait(1).to({x:55.6},0).wait(1).to({x:0},0).wait(10).to({x:33.4},0).wait(1).to({x:66.7},0).wait(1).to({x:100},0).wait(1).to({x:133.4},0).wait(1).to({x:166.7},0).wait(1).to({x:200},0).wait(1).to({x:233.4},0).wait(1).to({x:266.7},0).wait(1).to({x:300},0).wait(1).to({x:333.4},0).wait(1).to({x:366.7},0).wait(1).to({x:400},0).wait(1).to({x:433.4},0).wait(1).to({x:466.7},0).wait(1).to({x:500},0).wait(1).to({x:533.4},0).wait(1).to({x:566.7},0).wait(1).to({x:600},0).wait(1).to({x:633.4},0).wait(1).to({x:666.7},0).wait(1).to({x:700},0).wait(1).to({x:733.4},0).wait(1).to({x:766.7},0).wait(1).to({x:800},0).wait(1).to({x:833.4},0).wait(1).to({x:866.7},0).wait(1).to({x:900},0).wait(1).to({x:933.4},0).wait(1).to({x:966.7},0).wait(1).to({x:1000},0).wait(2));

	// bg
	this.instance_3 = new lib.curtain_3_mc();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(9).to({_off:true},1).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1000,0,3200,600);
p.frameBounds = [rect, rect, new cjs.Rectangle(-944.4,0,3088.9,600), new cjs.Rectangle(-888.9,0,2977.8,600), new cjs.Rectangle(-833.3,0,2866.7,600), new cjs.Rectangle(-777.7,0,2755.5,600), new cjs.Rectangle(-722.2,0,2644.4,600), new cjs.Rectangle(-666.6,0,2533.3,600), new cjs.Rectangle(-611.1,0,2422.2,600), new cjs.Rectangle(-555.5,0,2311.1,600), new cjs.Rectangle(-500,0,2200,600), new cjs.Rectangle(-444.4,0,2088.9,600), new cjs.Rectangle(-388.9,0,1977.8,600), new cjs.Rectangle(-333.3,0,1866.7,600), new cjs.Rectangle(-277.7,0,1755.5,600), new cjs.Rectangle(-222.2,0,1644.5,600), new cjs.Rectangle(-166.6,0,1533.3,600), new cjs.Rectangle(-111.1,-10,1422.2,620), new cjs.Rectangle(-55.5,-5,1311.1,610), rect=new cjs.Rectangle(0,0,1200,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-33.3,0,1266.7,600), new cjs.Rectangle(-66.6,0,1333.3,600), new cjs.Rectangle(-100,0,1400,600), new cjs.Rectangle(-133.3,0,1466.7,600), new cjs.Rectangle(-166.6,0,1533.3,600), new cjs.Rectangle(-200,0,1600,600), new cjs.Rectangle(-233.3,0,1666.7,600), new cjs.Rectangle(-266.6,0,1733.3,600), new cjs.Rectangle(-300,0,1800,600), new cjs.Rectangle(-333.3,0,1866.7,600), new cjs.Rectangle(-366.6,0,1933.3,600), new cjs.Rectangle(-400,0,2000,600), new cjs.Rectangle(-433.3,0,2066.7,600), new cjs.Rectangle(-466.6,0,2133.3,600), new cjs.Rectangle(-500,0,2200,600), new cjs.Rectangle(-533.3,0,2266.7,600), new cjs.Rectangle(-566.6,0,2333.3,600), new cjs.Rectangle(-600,0,2400,600), new cjs.Rectangle(-633.3,0,2466.7,600), new cjs.Rectangle(-666.6,0,2533.3,600), new cjs.Rectangle(-700,0,2600,600), new cjs.Rectangle(-733.3,0,2666.7,600), new cjs.Rectangle(-766.6,0,2733.3,600), new cjs.Rectangle(-800,0,2800,600), new cjs.Rectangle(-833.3,0,2866.7,600), new cjs.Rectangle(-866.6,0,2933.3,600), new cjs.Rectangle(-900,0,3000,600), new cjs.Rectangle(-933.3,0,3066.7,600), new cjs.Rectangle(-966.6,0,3133.3,600), rect=new cjs.Rectangle(-1000,0,3200,600), rect];


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


(lib.blinking_light_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_light_1_mc();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.012},19).to({scaleX:1,scaleY:1,alpha:0.801},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-32,64,64);
p.frameBounds = [rect, new cjs.Rectangle(-31.6,-31.6,63.4,63.4), new cjs.Rectangle(-31.3,-31.3,62.7,62.7), new cjs.Rectangle(-30.9,-30.9,62,62), new cjs.Rectangle(-30.6,-30.6,61.3,61.3), new cjs.Rectangle(-30.3,-30.3,60.7,60.7), new cjs.Rectangle(-29.9,-29.9,60,60), new cjs.Rectangle(-29.6,-29.6,59.3,59.3), new cjs.Rectangle(-29.3,-29.3,58.6,58.6), new cjs.Rectangle(-28.9,-28.9,58,58), new cjs.Rectangle(-28.6,-28.6,57.3,57.3), new cjs.Rectangle(-28.2,-28.2,56.6,56.6), new cjs.Rectangle(-27.9,-27.9,55.9,55.9), new cjs.Rectangle(-27.6,-27.6,55.3,55.3), new cjs.Rectangle(-27.2,-27.2,54.6,54.6), new cjs.Rectangle(-26.9,-26.9,53.9,53.9), new cjs.Rectangle(-26.6,-26.6,53.2,53.2), new cjs.Rectangle(-26.2,-26.2,52.6,52.6), new cjs.Rectangle(-25.9,-25.9,51.9,51.9), new cjs.Rectangle(-25.6,-25.6,51.2,51.2), new cjs.Rectangle(-25.8,-25.8,51.7,51.7), new cjs.Rectangle(-26.1,-26.1,52.2,52.2), new cjs.Rectangle(-26.3,-26.3,52.8,52.8), new cjs.Rectangle(-26.6,-26.6,53.3,53.3), new cjs.Rectangle(-26.8,-26.8,53.8,53.8), new cjs.Rectangle(-27.1,-27.1,54.3,54.3), new cjs.Rectangle(-27.3,-27.3,54.8,54.8), new cjs.Rectangle(-27.6,-27.6,55.3,55.3), new cjs.Rectangle(-27.9,-27.9,55.8,55.8), new cjs.Rectangle(-28.1,-28.1,56.3,56.3), new cjs.Rectangle(-28.4,-28.4,56.9,56.9), new cjs.Rectangle(-28.6,-28.6,57.4,57.4), new cjs.Rectangle(-28.9,-28.9,57.9,57.9), new cjs.Rectangle(-29.1,-29.1,58.4,58.4), new cjs.Rectangle(-29.4,-29.4,58.9,58.9), new cjs.Rectangle(-29.6,-29.6,59.4,59.4), new cjs.Rectangle(-29.9,-29.9,59.9,59.9), new cjs.Rectangle(-30.2,-30.2,60.4,60.4), new cjs.Rectangle(-30.4,-30.4,61,61), new cjs.Rectangle(-30.7,-30.7,61.5,61.5), new cjs.Rectangle(-30.9,-30.9,62,62), new cjs.Rectangle(-31.2,-31.2,62.5,62.5), new cjs.Rectangle(-31.4,-31.4,63,63), new cjs.Rectangle(-31.7,-31.7,63.5,63.5), new cjs.Rectangle(-32,-32,64,64)];


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({x:5},5).to({x:-5},10).to({x:0},5).wait(1));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},10).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-96,-96,192,192), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-100,-100,200,200), new cjs.Rectangle(-99.4,-99.4,199,199), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-98.4,-98.4,197,197), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-97.4,-97.4,195,195), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-97,-96.4,193.6,193), new cjs.Rectangle(-98,-95.9,194.1,192), new cjs.Rectangle(-99,-95.4,194.6,191), new cjs.Rectangle(-100,-95,195,190), new cjs.Rectangle(-99,-95,194,190), new cjs.Rectangle(-98,-95,193,190), new cjs.Rectangle(-97,-95,192,190), new cjs.Rectangle(-96,-95,191,190), new cjs.Rectangle(-95,-95,190,190)];


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},10).wait(6));

	// bg
	this.instance_1 = new lib.bg_large_buttons_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({scaleX:1.05,scaleY:1.05},5).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-96,-96,192,192), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-100,-100,200,200), new cjs.Rectangle(-99.4,-99.4,199,199), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-98.4,-98.4,197,197), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-100,-100,200,200), new cjs.Rectangle(-99.4,-99.4,199,199), new cjs.Rectangle(-98.9,-98.9,198,198), new cjs.Rectangle(-98.4,-98.4,197,197), new cjs.Rectangle(-97.9,-97.9,196,196), new cjs.Rectangle(-97.4,-97.4,195,195), new cjs.Rectangle(-96.9,-96.9,194,194), new cjs.Rectangle(-96.4,-96.4,193,193), new cjs.Rectangle(-95.9,-95.9,192,192), new cjs.Rectangle(-95.4,-95.4,191,191), new cjs.Rectangle(-95,-95,190,190)];


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


(lib.facebook_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.facebook_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.801},0).wait(1).to({scaleX:1.17,scaleY:1.17,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect, new cjs.Rectangle(-70,-70,140,140), new cjs.Rectangle(-60,-60,120,120), new cjs.Rectangle(-70,-70,140,140)];


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

	// decor
	this.instance_1 = new lib.decor_banner_2_img();
	this.instance_1.setTransform(-130,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.banner_2_img();
	this.instance_2.setTransform(-130,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

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

	// decor
	this.instance_1 = new lib.decor_banner_1_img();
	this.instance_1.setTransform(-130,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.banner_1_img();
	this.instance_2.setTransform(-130,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

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
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
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


(lib.star2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(1));

	// Слой 1
	this.instance = new lib.star1();
	this.instance.setTransform(0,0,0.36,0.36);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.58,scaleY:0.58,x:50,alpha:0.531},13).to({scaleX:0.38,scaleY:0.38,x:68,alpha:0.012},6).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9,-8.6,18,17.3);
p.frameBounds = [rect, new cjs.Rectangle(-5.5,-9,18.9,18.1), new cjs.Rectangle(-2.1,-9.4,19.7,19), new cjs.Rectangle(1.3,-9.8,20.6,19.8), new cjs.Rectangle(4.7,-10.2,21.5,20.6), new cjs.Rectangle(8.1,-10.7,22.3,21.4), new cjs.Rectangle(11.5,-11.1,23.2,22.3), new cjs.Rectangle(14.9,-11.5,24,23.1), new cjs.Rectangle(18.3,-11.9,24.8,23.9), new cjs.Rectangle(21.7,-12.3,25.8,24.7), new cjs.Rectangle(25.2,-12.7,26.6,25.5), new cjs.Rectangle(28.6,-13.1,27.5,26.4), new cjs.Rectangle(32,-13.5,28.3,27.2), new cjs.Rectangle(35.4,-14,29.2,28), new cjs.Rectangle(39.3,-13.1,27.5,26.4), new cjs.Rectangle(43.1,-12.3,25.7,24.7), new cjs.Rectangle(47,-11.5,24,23), new cjs.Rectangle(50.9,-10.6,22.2,21.4), new cjs.Rectangle(54.7,-9.8,20.5,19.7), new cjs.Rectangle(58.6,-9,18.8,18), null];


(lib.preview_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsxTIQjFAAAAjFMAAAggEQAAjHDFABIMAAAIAxAxIAxgxIMBAAQDFgBAADHMAAAAgEQAADFjFAAg");

	// graph
	this.instance_1 = new lib.hero6();
	this.instance_1.setTransform(0,0,0.4,0.4);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.bg_location_6_img();
	this.instance_2.setTransform(-110,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-130,220,260);
p.frameBounds = [rect];


(lib.preview_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsxTIQjFAAAAjFMAAAggEQAAjHDFABIMAAAIAxAxIAxgxIMBAAQDFgBAADHMAAAAgEQAADFjFAAg");

	// graph
	this.instance_1 = new lib.hero5();
	this.instance_1.setTransform(0,0,0.4,0.4);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.bg_location_5_img();
	this.instance_2.setTransform(-110,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-130,220,260);
p.frameBounds = [rect];


(lib.preview_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsxTIQjFAAAAjFMAAAggEQAAjHDFABIMAAAIAxAxIAxgxIMBAAQDFgBAADHMAAAAgEQAADFjFAAg");

	// graph
	this.instance_1 = new lib.hero4();
	this.instance_1.setTransform(0,0,0.4,0.4);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.bg_location_4_img();
	this.instance_2.setTransform(-110,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-130,220,260);
p.frameBounds = [rect];


(lib.preview_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsxTIQjFAAAAjFMAAAggEQAAjHDFABIMAAAIAxAxIAxgxIMBAAQDFgBAADHMAAAAgEQAADFjFAAg");

	// graph
	this.instance_1 = new lib.hero3();
	this.instance_1.setTransform(0,0,0.4,0.4);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.bg_location_3_img();
	this.instance_2.setTransform(-110,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-130,220,260);
p.frameBounds = [rect];


(lib.preview_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsxTIQjFAAAAjFMAAAggEQAAjHDFABIMAAAIAxAxIAxgxIMBAAQDFgBAADHMAAAAgEQAADFjFAAg");

	// graph
	this.instance_1 = new lib.hero2();
	this.instance_1.setTransform(0,0,0.4,0.4);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.bg_location_2_img();
	this.instance_2.setTransform(-110,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-130,220,260);
p.frameBounds = [rect];


(lib.preview_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsxTIQjFAAAAjFMAAAggEQAAjHDFABIMAAAIAxAxIAxgxIMBAAQDFgBAADHMAAAAgEQAADFjFAAg");

	// graph
	this.instance_1 = new lib.animation1_25();
	this.instance_1.setTransform(0,0,0.4,0.4);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.instance_2 = new lib.bg_location_1_img();
	this.instance_2.setTransform(-110,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-130,220,260);
p.frameBounds = [rect];


(lib.prev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0.1,0,0.666,0.666,0,0,180,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-59.9,120,119.9);
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


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(0,0,0.666,0.666,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-59.9,120,119.9);
p.frameBounds = [rect];


(lib.magic1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(1));

	// Слой 6
	this.instance = new lib.star2();
	this.instance.setTransform(85,87.7,1,1,114.4);

	this.instance_1 = new lib.star2();
	this.instance_1.setTransform(73,64.6,1,1,-82.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},10).wait(25));

	// Слой 5
	this.instance_2 = new lib.star2();
	this.instance_2.setTransform(65,80,1,1,147.5);

	this.instance_3 = new lib.star2();
	this.instance_3.setTransform(89,72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},7).wait(28));

	// Слой 4
	this.instance_4 = new lib.star2();
	this.instance_4.setTransform(85,87.7,1,1,76.9);

	this.instance_5 = new lib.star2();
	this.instance_5.setTransform(73,64.6,1,1,-52.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4}]},3).wait(32));

	// Слой 3
	this.instance_6 = new lib.star2();
	this.instance_6.setTransform(65,80,1,1,-129.2);

	this.instance_7 = new lib.star2();
	this.instance_7.setTransform(89,72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(35));

	// Слой 1
	this.instance_8 = new lib.magic1_img();

	this.instance_9 = new lib.magic2_img();

	this.instance_10 = new lib.magic3_img();

	this.instance_11 = new lib.magic4_img();

	this.instance_12 = new lib.magic5_img();

	this.instance_13 = new lib.magic6_img();

	this.instance_14 = new lib.magic7_img();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[]},2).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,150,143);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(52.6,52.2,45.4,47.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.location_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsxTIQjFAAAAjFMAAAggEQAAjHDFABIMAAAIAxAxIAxgxIMBAAQDFgBAADHMAAAAgEQAADFjFAAg");

	// graph
	this.instance_1 = new lib.smile5();

	this.instance_2 = new lib.hero5_glasses();
	this.instance_2.setTransform(2.2,-1.1,0.4,0.4);

	this.instance_3 = new lib.hero5_fringe1();
	this.instance_3.setTransform(2.2,-38.2,0.4,0.4);

	this.instance_4 = new lib.hero5_eyes1();
	this.instance_4.setTransform(1,-22.1,0.4,0.4);

	this.instance_5 = new lib.hero5_lips1();
	this.instance_5.setTransform(1,-22.1,0.4,0.4);

	this.instance_6 = new lib.hero5_lips0();
	this.instance_6.setTransform(1,-22.1,0.4,0.4);

	this.instance_7 = new lib.hero5_eyebrows2();
	this.instance_7.setTransform(1,-22.1,0.4,0.4);

	this.instance_8 = new lib.hero5_rouge();
	this.instance_8.setTransform(1,-22.1,0.4,0.4);

	this.instance_9 = new lib.h5_b();
	this.instance_9.setTransform(3.2,26,0.4,0.4);

	this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

	// bg
	this.instance_10 = new lib.bg_location_5_img();
	this.instance_10.setTransform(-110,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(2));

	// shadow
	this.instance_11 = new lib.shadow_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(2));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKUTMAAAgolMAiVAAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-130,222.5,262.5);
p.frameBounds = [rect, rect];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.frame_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsxTIQjFAAAAjFMAAAggEQAAjHDFABIMAAAIAxAxIAxgxIMBAAQDFgBAADHMAAAAgEQAADFjFAAg");

	// graph
	this.instance_1 = new lib.smile1();
	this.instance_1.setTransform(-2,0);

	this.instance_2 = new lib.hs1();
	this.instance_2.setTransform(-2.8,49);

	this.instance_1.mask = this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.instance_3 = new lib.bg_location_1_img();
	this.instance_3.setTransform(-110,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

	// shadow
	this.instance_4 = new lib.shadow_location_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxKUTMAAAgolMAiVAAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-130,222.5,262.5);
p.frameBounds = [rect, rect];


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


(lib.hero_main1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.hero1_zac();
	this.instance.setTransform(93,-199);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// animation
	this.instance_1 = new lib.hero1_hand();
	this.instance_1.setTransform(91.9,198.7,0.888,0.888,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.94,scaleY:0.94,x:98.6,y:189.1},14).to({scaleX:0.89,scaleY:0.89,x:91.9,y:198.7},15).wait(1));

	// animation
	this.instance_2 = new lib.hero1_hand();
	this.instance_2.setTransform(-121.3,197.8,0.888,0.888);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.94,scaleY:0.94,x:-126.1,y:188.2},14).to({scaleX:0.89,scaleY:0.89,x:-121.3,y:197.8},15).wait(1));

	// graph
	this.instance_3 = new lib.eyes11();
	this.instance_3.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30));

	// graph
	this.instance_4 = new lib.hero1_hair1();
	this.instance_4.setTransform(-12.5,57);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30));

	// graph
	this.instance_5 = new lib.h1_l1();
	this.instance_5.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30));

	// graph
	this.instance_6 = new lib.hero1_eyebrows2();
	this.instance_6.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30));

	// graph
	this.instance_7 = new lib.hero1_shadows();
	this.instance_7.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(30));

	// graph
	this.instance_8 = new lib.hero1_rouge();
	this.instance_8.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(30));

	// graph
	this.instance_9 = new lib.hero1_base();
	this.instance_9.setTransform(-14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-228.8,-313.5,428.2,741);
p.frameBounds = [rect, new cjs.Rectangle(-229.5,-313.5,429.8,741), new cjs.Rectangle(-230.3,-313.5,431.5,741), new cjs.Rectangle(-231.1,-313.5,433.1,741), new cjs.Rectangle(-231.8,-313.5,434.7,741), new cjs.Rectangle(-232.5,-313.5,436.3,741), new cjs.Rectangle(-233.3,-313.5,438,741), new cjs.Rectangle(-234.1,-313.5,439.7,741), new cjs.Rectangle(-234.8,-313.5,441.3,741), new cjs.Rectangle(-235.6,-313.5,443,741), new cjs.Rectangle(-236.4,-313.5,444.7,741), new cjs.Rectangle(-237.1,-313.5,446.2,741), new cjs.Rectangle(-237.8,-313.5,447.9,741), new cjs.Rectangle(-238.6,-313.5,449.6,741), new cjs.Rectangle(-239.4,-313.5,451.2,741), new cjs.Rectangle(-238.7,-313.5,449.7,741), new cjs.Rectangle(-237.9,-313.5,448,741), new cjs.Rectangle(-237.3,-313.5,446.6,741), new cjs.Rectangle(-236.5,-313.5,445,741), new cjs.Rectangle(-235.9,-313.5,443.5,741), new cjs.Rectangle(-235.2,-313.5,442,741), new cjs.Rectangle(-234.4,-313.5,440.4,741), new cjs.Rectangle(-233.7,-313.5,438.9,741), new cjs.Rectangle(-233,-313.5,437.3,741), new cjs.Rectangle(-232.4,-313.5,435.9,741), new cjs.Rectangle(-231.6,-313.5,434.3,741), new cjs.Rectangle(-230.9,-313.5,432.7,741), new cjs.Rectangle(-230.2,-313.5,431.2,741), new cjs.Rectangle(-229.5,-313.5,429.7,741), new cjs.Rectangle(-228.8,-313.5,428.2,741)];


(lib.animation6_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 9
	this.instance = new lib.magic1();
	this.instance.setTransform(-10,79,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({_off:true},37).wait(1));

	// Слой 10
	this.instance_1 = new lib.kist2();
	this.instance_1.setTransform(-5.6,81.4,0.387,0.387,-116.8);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({scaleX:0.69,scaleY:0.69,alpha:1},5).wait(33));

	// Слой 4
	this.instance_2 = new lib.magic1();
	this.instance_2.setTransform(270,48.9,1,1,0,0,0,75,71.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},48).wait(1));

	// Слой 13
	this.instance_3 = new lib.shadows1();
	this.instance_3.setTransform(273,47.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},5).wait(45));

	// tables
	this.instance_4 = new lib.tables();
	this.instance_4.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50));

	// smile6
	this.instance_5 = new lib.smile6();
	this.instance_5.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50));

	// hero6_fringe1
	this.instance_6 = new lib.hero6_fringe1();
	this.instance_6.setTransform(-25.1,-160.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(50));

	// hero6_eyelashes1
	this.instance_7 = new lib.hero6_eyelashes1();
	this.instance_7.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},45).wait(5));

	// hero6_eyes1
	this.instance_8 = new lib.hero6_eyes1();
	this.instance_8.setTransform(-19.5,-120.2);

	this.instance_9 = new lib.hero6_eyes2();
	this.instance_9.setTransform(-19.5,-120.2);

	this.instance_10 = new lib.hero6_eyes3();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},46).to({state:[{t:this.instance_10}]},2).wait(2));

	// Слой 5
	this.instance_11 = new lib.hero6_lips1();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

	// Слой 7
	this.instance_12 = new lib.hero6_eyebrows2();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

	// Слой 3
	this.instance_13 = new lib.hero6_rouge();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50));

	// h6_b
	this.instance_14 = new lib.h6_b();
	this.instance_14.setTransform(-14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-352.9,778,619.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation6_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 6
	this.instance = new lib.magic1();
	this.instance.setTransform(-25,91,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({_off:true},35).wait(1));

	// Слой 4
	this.instance_1 = new lib.pencil5();
	this.instance_1.setTransform(-21,90.2,0.398,0.398,-38.9);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},4).wait(32));

	// Слой 3
	this.instance_2 = new lib.magic1();
	this.instance_2.setTransform(-299,71.5,1,1,0,0,0,75,71.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},48).wait(1));

	// Слой 13
	this.instance_3 = new lib.shadows1();
	this.instance_3.setTransform(273,47.2);

	this.instance_4 = new lib.pencil5();
	this.instance_4.setTransform(-287,72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},4).wait(46));

	// tables
	this.instance_5 = new lib.tables();
	this.instance_5.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50));

	// smile6
	this.instance_6 = new lib.smile6();
	this.instance_6.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(50));

	// hero6_fringe1
	this.instance_7 = new lib.hero6_fringe1();
	this.instance_7.setTransform(-25.1,-160.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50));

	// hero6_eyelashes1
	this.instance_8 = new lib.hero6_eyelashes1();
	this.instance_8.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50));

	// hero6_eyes1
	this.instance_9 = new lib.hero6_eyes1();
	this.instance_9.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// Слой 5
	this.instance_10 = new lib.hero6_lips1();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

	// hero6_eyebrows1
	this.instance_11 = new lib.hero6_eyebrows1();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

	// h6_b
	this.instance_12 = new lib.h6_b();
	this.instance_12.setTransform(-14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-352.9,778,619.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation6_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 5
	this.instance = new lib.magic1();
	this.instance.setTransform(-37,99.9,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({_off:true},35).wait(1));

	// Слой 4
	this.instance_1 = new lib.lipstick13();
	this.instance_1.setTransform(-32,98.9,0.633,0.633,30.7);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},4).wait(32));

	// Слой 3
	this.instance_2 = new lib.magic1();
	this.instance_2.setTransform(-292,-114.6,1,1,0,0,0,75,71.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},48).wait(1));

	// Слой 13
	this.instance_3 = new lib.shadows1();
	this.instance_3.setTransform(273,47.2);

	this.instance_4 = new lib.pencil5();
	this.instance_4.setTransform(-287,72);

	this.instance_5 = new lib.lipstick13();
	this.instance_5.setTransform(-289,-117);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).to({state:[{t:this.instance_4},{t:this.instance_3}]},4).wait(46));

	// tables
	this.instance_6 = new lib.tables();
	this.instance_6.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(50));

	// smile6
	this.instance_7 = new lib.smile6();
	this.instance_7.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50));

	// hero6_fringe1
	this.instance_8 = new lib.hero6_fringe1();
	this.instance_8.setTransform(-25.1,-160.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50));

	// hero6_eyelashes1
	this.instance_9 = new lib.hero6_eyelashes1();
	this.instance_9.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// hero6_eyes1
	this.instance_10 = new lib.hero6_eyes1();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

	// hero6_lips0
	this.instance_11 = new lib.hero6_lips0();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

	// hero6_eyebrows1
	this.instance_12 = new lib.hero6_eyebrows1();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

	// h6_b
	this.instance_13 = new lib.h6_b();
	this.instance_13.setTransform(-14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-352.9,778,619.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation5_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 5
	this.instance = new lib.magic1();
	this.instance.setTransform(-29,88.9,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({_off:true},35).wait(1));

	// Слой 4
	this.instance_1 = new lib.lipstick1();
	this.instance_1.setTransform(-25,88.7,0.585,0.585,30.2);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},5).wait(31));

	// Слой 3
	this.instance_2 = new lib.magic1();
	this.instance_2.setTransform(266,31.4,1,1,0,0,0,75,71.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},48).wait(1));

	// Слой 12
	this.instance_3 = new lib.lipstick1();
	this.instance_3.setTransform(269,37);

	this.instance_4 = new lib.hero5_glasses();
	this.instance_4.setTransform(272.4,-97.6,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},4).wait(46));

	// tables
	this.instance_5 = new lib.tables();
	this.instance_5.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50));

	// smile5
	this.instance_6 = new lib.smile5();
	this.instance_6.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(50));

	// hero5_fringe1
	this.instance_7 = new lib.hero5_fringe1();
	this.instance_7.setTransform(-16.6,-160.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50));

	// hero5_eyes0
	this.instance_8 = new lib.hero5_eyes1();
	this.instance_8.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50));

	// hero5_lips0
	this.instance_9 = new lib.hero5_lips0();
	this.instance_9.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// hero5_eyebrows
	this.instance_10 = new lib.hero5_eyebrows();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

	// Слой 6
	this.instance_11 = new lib.hero5_rouge();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

	// h5_b
	this.instance_12 = new lib.h5_b();
	this.instance_12.setTransform(-14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-347.4,778,613.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation5_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 5
	this.instance = new lib.magic1();
	this.instance.setTransform(-18,97.3,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({_off:true},35).wait(1));

	// Слой 7
	this.instance_1 = new lib.hero5_lens();
	this.instance_1.setTransform(9,97.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).wait(36));

	// Слой 4
	this.instance_2 = new lib.hero5_lens();
	this.instance_2.setTransform(-36,97.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(36));

	// Слой 3
	this.instance_3 = new lib.magic1();
	this.instance_3.setTransform(-294,52.4,1,1,0,0,0,75,71.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},48).wait(1));

	// Слой 12
	this.instance_4 = new lib.lipstick1();
	this.instance_4.setTransform(269,37);

	this.instance_5 = new lib.dayneris_lens_22();
	this.instance_5.setTransform(-290,53);

	this.instance_6 = new lib.hero5_glasses();
	this.instance_6.setTransform(272.4,-97.6,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).to({state:[{t:this.instance_6},{t:this.instance_4}]},4).wait(46));

	// tables
	this.instance_7 = new lib.tables();
	this.instance_7.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50));

	// smile5
	this.instance_8 = new lib.smile5();
	this.instance_8.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50));

	// hero5_fringe1
	this.instance_9 = new lib.hero5_fringe1();
	this.instance_9.setTransform(-16.6,-160.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// hero5_eyelashes1
	this.instance_10 = new lib.hero5_eyelashes1();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

	// hero5_eyes0
	this.instance_11 = new lib.hero5_eyes0();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

	// hero5_lips0
	this.instance_12 = new lib.hero5_lips0();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

	// hero5_eyebrows
	this.instance_13 = new lib.hero5_eyebrows();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50));

	// Слой 6
	this.instance_14 = new lib.hero5_rouge();
	this.instance_14.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50));

	// h5_b
	this.instance_15 = new lib.h5_b();
	this.instance_15.setTransform(-14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-347.4,778,613.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 3
	this.instance = new lib.magic1();
	this.instance.setTransform(-21,84,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).wait(35));

	// Слой 4
	this.instance_1 = new lib.gubka();
	this.instance_1.setTransform(-14.6,84.4,0.29,0.29);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).to({scaleX:0.34,scaleY:0.34,alpha:1},6).wait(29));

	// Слой 5
	this.instance_2 = new lib.magic1();
	this.instance_2.setTransform(-296,-98.6,1,1,0,0,0,75,71.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},33).wait(16));

	// Слой 12
	this.instance_3 = new lib.rouge8();
	this.instance_3.setTransform(-282,-103.7,0.655,0.655);

	this.instance_4 = new lib.lipstick1();
	this.instance_4.setTransform(269,37);

	this.instance_5 = new lib.dayneris_lens_22();
	this.instance_5.setTransform(-290,53);

	this.instance_6 = new lib.hero5_glasses();
	this.instance_6.setTransform(272.4,-97.6,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},4).wait(46));

	// tables
	this.instance_7 = new lib.tables();
	this.instance_7.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50));

	// smile5
	this.instance_8 = new lib.smile5();
	this.instance_8.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50));

	// hero5_fringe1
	this.instance_9 = new lib.hero5_fringe1();
	this.instance_9.setTransform(-16.6,-160.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// hero5_eyelashes1
	this.instance_10 = new lib.hero5_eyelashes1();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

	// hero5_eyes0
	this.instance_11 = new lib.hero5_eyes0();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

	// hero5_lips0
	this.instance_12 = new lib.hero5_lips0();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

	// hero5_eyebrows
	this.instance_13 = new lib.hero5_eyebrows();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50));

	// h5_b
	this.instance_14 = new lib.h5_b();
	this.instance_14.setTransform(-14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-347.4,778,613.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation4_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 11
	this.instance = new lib.magic1();
	this.instance.setTransform(-27,97.3,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({_off:true},35).wait(1));

	// Слой 7
	this.instance_1 = new lib.lipstick5();
	this.instance_1.setTransform(-22.7,93.9,0.6,0.6,27.7);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},5).wait(31));

	// Слой 4
	this.instance_2 = new lib.magic1();
	this.instance_2.setTransform(201.5,35.4,1,1,0,0,0,75,71.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},48).wait(1));

	// Слой 13
	this.instance_3 = new lib.lipstick5();
	this.instance_3.setTransform(205.3,35);

	this.instance_4 = new lib.horns1();
	this.instance_4.setTransform(246.4,-96,0.563,0.563);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},4).wait(46));

	// tables
	this.instance_5 = new lib.tables();
	this.instance_5.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50));

	// smile4
	this.instance_6 = new lib.smile4();
	this.instance_6.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(50));

	// hero4_fringe1
	this.instance_7 = new lib.hero4_fringe1();
	this.instance_7.setTransform(-20.7,-187.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50));

	// hero4_eyes0
	this.instance_8 = new lib.hero4_eyes1all();
	this.instance_8.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50));

	// Слой 10
	this.instance_9 = new lib.hero4_lips1();
	this.instance_9.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// hero4_lips0
	this.instance_10 = new lib.hero4_lips0();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

	// Слой 9
	this.instance_11 = new lib.hero4_eyebrows4();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

	// Слой 3
	this.instance_12 = new lib.hero4_eyebrows3();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

	// Слой 6
	this.instance_13 = new lib.hero4_eyebrows2();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50));

	// Слой 8
	this.instance_14 = new lib.hero4_shadows();
	this.instance_14.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50));

	// Слой 5
	this.instance_15 = new lib.hero4_rouge();
	this.instance_15.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(50));

	// h4_b
	this.instance_16 = new lib.h4_b();
	this.instance_16.setTransform(-25.2,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-318.4,778,673);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation4_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 10
	this.instance = new lib.magic1();
	this.instance.setTransform(-22,112.3,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({_off:true},35).wait(1));

	// Слой 7
	this.instance_1 = new lib.lipstick2();
	this.instance_1.setTransform(-19,107.9,0.755,0.755,27.5);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},4).wait(32));

	// Слой 4
	this.instance_2 = new lib.magic1();
	this.instance_2.setTransform(-353.9,41.4,1,1,0,0,0,75,71.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},48).wait(1));

	// Слой 13
	this.instance_3 = new lib.lipstick5();
	this.instance_3.setTransform(205.3,35);

	this.instance_4 = new lib.lipstick2();
	this.instance_4.setTransform(-351,41.6);

	this.instance_5 = new lib.horns1();
	this.instance_5.setTransform(246.4,-96,0.563,0.563);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).to({state:[{t:this.instance_5},{t:this.instance_3}]},4).wait(46));

	// tables
	this.instance_6 = new lib.tables();
	this.instance_6.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(50));

	// smile4
	this.instance_7 = new lib.smile4();
	this.instance_7.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50));

	// hero4_fringe1
	this.instance_8 = new lib.hero4_fringe1();
	this.instance_8.setTransform(-20.7,-187.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50));

	// hero4_eyes0
	this.instance_9 = new lib.hero4_eyes1all();
	this.instance_9.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// hero4_lips0
	this.instance_10 = new lib.hero4_lips0();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

	// Слой 9
	this.instance_11 = new lib.hero4_eyebrows4();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

	// Слой 3
	this.instance_12 = new lib.hero4_eyebrows3();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

	// Слой 6
	this.instance_13 = new lib.hero4_eyebrows2();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50));

	// Слой 8
	this.instance_14 = new lib.hero4_shadows();
	this.instance_14.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50));

	// Слой 5
	this.instance_15 = new lib.hero4_rouge();
	this.instance_15.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(50));

	// h4_b
	this.instance_16 = new lib.h4_b();
	this.instance_16.setTransform(-25.2,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-318.4,778,673);
p.frameBounds = [rect, rect=new cjs.Rectangle(-428.9,-318.4,807.4,673), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-399.5,-318.4,778,673)];


(lib.animation4_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 4
	this.instance = new lib.magic1();
	this.instance.setTransform(-10,79,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({_off:true},37).wait(1));

	// Слой 7
	this.instance_1 = new lib.kist2();
	this.instance_1.setTransform(-5.6,81.4,0.387,0.387,-116.8);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({scaleX:0.69,scaleY:0.69,alpha:1},5).wait(33));

	// Слой 8
	this.instance_2 = new lib.magic1();
	this.instance_2.setTransform(289,51.4,1,1,0,0,0,75,71.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},48).wait(1));

	// Слой 13
	this.instance_3 = new lib.shadows12();
	this.instance_3.setTransform(291.5,49);

	this.instance_4 = new lib.lipstick5();
	this.instance_4.setTransform(205.3,35);

	this.instance_5 = new lib.lipstick2();
	this.instance_5.setTransform(-351,41.6);

	this.instance_6 = new lib.horns1();
	this.instance_6.setTransform(246.4,-96,0.563,0.563);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},4).wait(46));

	// tables
	this.instance_7 = new lib.tables();
	this.instance_7.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50));

	// smile4
	this.instance_8 = new lib.smile4();
	this.instance_8.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50));

	// hero4_fringe1
	this.instance_9 = new lib.hero4_fringe1();
	this.instance_9.setTransform(-20.7,-187.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// hero4_eyelashes
	this.instance_10 = new lib.hero4_eyelashes();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},44).wait(6));

	// hero4_eyes0
	this.instance_11 = new lib.hero4_eyes0_1();
	this.instance_11.setTransform(-19.5,-120.2);

	this.instance_12 = new lib.hero4_eyes1();
	this.instance_12.setTransform(-19.5,-120.2);

	this.instance_13 = new lib.hero4_eyes2();
	this.instance_13.setTransform(-19.5,-120.2);

	this.instance_14 = new lib.hero4_eyes3();
	this.instance_14.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).to({state:[{t:this.instance_12}]},44).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).wait(2));

	// hero4_lips0
	this.instance_15 = new lib.hero4_lips0();
	this.instance_15.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(50));

	// Слой 9
	this.instance_16 = new lib.hero4_eyebrows4();
	this.instance_16.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(50));

	// Слой 3
	this.instance_17 = new lib.hero4_eyebrows3();
	this.instance_17.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(50));

	// Слой 6
	this.instance_18 = new lib.hero4_eyebrows2();
	this.instance_18.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(50));

	// Слой 5
	this.instance_19 = new lib.hero4_rouge();
	this.instance_19.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(50));

	// h4_b
	this.instance_20 = new lib.h4_b();
	this.instance_20.setTransform(-25.2,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-318.4,778,673);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation4_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 10
	this.instance = new lib.magic1();
	this.instance.setTransform(-16,94.3,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({_off:true},35).wait(1));

	// Слой 8
	this.instance_1 = new lib.hero4_lens();
	this.instance_1.setTransform(11,93);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).wait(36));

	// Слой 7
	this.instance_2 = new lib.hero4_lens();
	this.instance_2.setTransform(-34,93);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(36));

	// Слой 4
	this.instance_3 = new lib.magic1();
	this.instance_3.setTransform(-267,48.4,1,1,0,0,0,75,71.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},48).wait(1));

	// Слой 13
	this.instance_4 = new lib.shadows12();
	this.instance_4.setTransform(291.5,49);

	this.instance_5 = new lib.lipstick5();
	this.instance_5.setTransform(205.3,35);

	this.instance_6 = new lib.lipstick2();
	this.instance_6.setTransform(-351,41.6);

	this.instance_7 = new lib.dayneris_lens_21();
	this.instance_7.setTransform(-262,49);

	this.instance_8 = new lib.horns1();
	this.instance_8.setTransform(246.4,-96,0.563,0.563);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).to({state:[{t:this.instance_8},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},4).wait(46));

	// tables
	this.instance_9 = new lib.tables();
	this.instance_9.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// smile4
	this.instance_10 = new lib.smile4();
	this.instance_10.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

	// hero4_fringe1
	this.instance_11 = new lib.hero4_fringe1();
	this.instance_11.setTransform(-20.7,-187.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

	// hero4_eyelashes
	this.instance_12 = new lib.hero4_eyelashes();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

	// hero4_eyes0
	this.instance_13 = new lib.hero4_eyes0();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50));

	// hero4_lips0
	this.instance_14 = new lib.hero4_lips0();
	this.instance_14.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50));

	// Слой 9
	this.instance_15 = new lib.hero4_eyebrows4();
	this.instance_15.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(50));

	// Слой 3
	this.instance_16 = new lib.hero4_eyebrows3();
	this.instance_16.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(50));

	// Слой 6
	this.instance_17 = new lib.hero4_eyebrows2();
	this.instance_17.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(50));

	// Слой 5
	this.instance_18 = new lib.hero4_rouge();
	this.instance_18.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(50));

	// h4_b
	this.instance_19 = new lib.h4_b();
	this.instance_19.setTransform(-25.2,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-318.4,778,673);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation4_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 8
	this.instance = new lib.magic1();
	this.instance.setTransform(-19,95.3,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({_off:true},35).wait(1));

	// Слой 7
	this.instance_1 = new lib.pencil13();
	this.instance_1.setTransform(-13,96,0.533,0.533,-38.4);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},5).wait(31));

	// Слой 4
	this.instance_2 = new lib.magic1();
	this.instance_2.setTransform(-300.3,-59.6,1,1,0,0,0,75,71.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},48).wait(1));

	// Слой 13
	this.instance_3 = new lib.shadows12();
	this.instance_3.setTransform(291.5,49);

	this.instance_4 = new lib.lipstick5();
	this.instance_4.setTransform(205.3,35);

	this.instance_5 = new lib.lipstick2();
	this.instance_5.setTransform(-351,41.6);

	this.instance_6 = new lib.dayneris_lens_21();
	this.instance_6.setTransform(-262,49);

	this.instance_7 = new lib.pencil13();
	this.instance_7.setTransform(-289,-61.9,1,1,-6.7);

	this.instance_8 = new lib.horns1();
	this.instance_8.setTransform(246.4,-96,0.563,0.563);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).to({state:[{t:this.instance_8},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},4).wait(46));

	// tables
	this.instance_9 = new lib.tables();
	this.instance_9.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// smile4
	this.instance_10 = new lib.smile4();
	this.instance_10.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

	// hero4_fringe1
	this.instance_11 = new lib.hero4_fringe1();
	this.instance_11.setTransform(-20.7,-187.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

	// hero4_eyelashes
	this.instance_12 = new lib.hero4_eyelashes();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

	// hero4_eyes0
	this.instance_13 = new lib.hero4_eyes0();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50));

	// hero4_lips0
	this.instance_14 = new lib.hero4_lips0();
	this.instance_14.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50));

	// Слой 3
	this.instance_15 = new lib.hero4_eyebrows3();
	this.instance_15.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(50));

	// Слой 6
	this.instance_16 = new lib.hero4_eyebrows2();
	this.instance_16.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(50));

	// Слой 5
	this.instance_17 = new lib.hero4_rouge();
	this.instance_17.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(50));

	// h4_b
	this.instance_18 = new lib.h4_b();
	this.instance_18.setTransform(-25.2,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-318.4,778,673);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation4_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 6
	this.instance = new lib.magic1();
	this.instance.setTransform(-30,86.9,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({_off:true},35).wait(1));

	// Слой 4
	this.instance_1 = new lib.pencil10();
	this.instance_1.setTransform(-24,89,0.533,0.533,-51.7);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},5).wait(31));

	// Слой 3
	this.instance_2 = new lib.magic1();
	this.instance_2.setTransform(-298.1,-94.6,1,1,0,0,0,75,71.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},48).wait(1));

	// Слой 13
	this.instance_3 = new lib.shadows12();
	this.instance_3.setTransform(291.5,49);

	this.instance_4 = new lib.lipstick5();
	this.instance_4.setTransform(205.3,35);

	this.instance_5 = new lib.lipstick2();
	this.instance_5.setTransform(-351,41.6);

	this.instance_6 = new lib.dayneris_lens_21();
	this.instance_6.setTransform(-262,49);

	this.instance_7 = new lib.pencil13();
	this.instance_7.setTransform(-289,-61.9,1,1,-6.7);

	this.instance_8 = new lib.pencil10();
	this.instance_8.setTransform(-284.3,-85);

	this.instance_9 = new lib.horns1();
	this.instance_9.setTransform(246.4,-96,0.563,0.563);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).to({state:[{t:this.instance_9},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},4).wait(46));

	// tables
	this.instance_10 = new lib.tables();
	this.instance_10.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

	// smile4
	this.instance_11 = new lib.smile4();
	this.instance_11.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

	// hero4_fringe1
	this.instance_12 = new lib.hero4_fringe1();
	this.instance_12.setTransform(-20.7,-187.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

	// hero4_eyelashes
	this.instance_13 = new lib.hero4_eyelashes();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50));

	// hero4_eyes0
	this.instance_14 = new lib.hero4_eyes0();
	this.instance_14.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50));

	// hero4_lips0
	this.instance_15 = new lib.hero4_lips0();
	this.instance_15.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(50));

	// hero4_eyebrows1
	this.instance_16 = new lib.hero4_eyebrows1();
	this.instance_16.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(50));

	// Слой 5
	this.instance_17 = new lib.hero4_rouge();
	this.instance_17.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(50));

	// h4_b
	this.instance_18 = new lib.h4_b();
	this.instance_18.setTransform(-25.2,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-318.4,778,673);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 3
	this.instance = new lib.magic1();
	this.instance.setTransform(-21,84,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({_off:true},34).wait(1));

	// Слой 4
	this.instance_1 = new lib.gubka();
	this.instance_1.setTransform(-14.6,84.4,0.29,0.29);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).to({scaleX:0.34,scaleY:0.34,alpha:1},6).wait(29));

	// Слой 5
	this.instance_2 = new lib.magic1();
	this.instance_2.setTransform(283.8,-91,1,1,0,0,0,75,71.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},30).wait(19));

	// Слой 13
	this.instance_3 = new lib.rouge11();
	this.instance_3.setTransform(295.9,-92.8);

	this.instance_4 = new lib.shadows12();
	this.instance_4.setTransform(291.5,49);

	this.instance_5 = new lib.lipstick5();
	this.instance_5.setTransform(205.3,35);

	this.instance_6 = new lib.lipstick2();
	this.instance_6.setTransform(-351,41.6);

	this.instance_7 = new lib.dayneris_lens_21();
	this.instance_7.setTransform(-262,49);

	this.instance_8 = new lib.pencil13();
	this.instance_8.setTransform(-289,-61.9,1,1,-6.7);

	this.instance_9 = new lib.pencil10();
	this.instance_9.setTransform(-284.3,-85);

	this.instance_10 = new lib.horns1();
	this.instance_10.setTransform(246.4,-96,0.563,0.563);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},4).wait(46));

	// tables
	this.instance_11 = new lib.tables();
	this.instance_11.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

	// smile4
	this.instance_12 = new lib.smile4();
	this.instance_12.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

	// hero4_fringe1
	this.instance_13 = new lib.hero4_fringe1();
	this.instance_13.setTransform(-20.7,-187.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50));

	// hero4_eyelashes
	this.instance_14 = new lib.hero4_eyelashes();
	this.instance_14.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50));

	// hero4_eyes0
	this.instance_15 = new lib.hero4_eyes0();
	this.instance_15.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(50));

	// hero4_lips0
	this.instance_16 = new lib.hero4_lips0();
	this.instance_16.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(50));

	// hero4_eyebrows1
	this.instance_17 = new lib.hero4_eyebrows1();
	this.instance_17.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(50));

	// h4_b
	this.instance_18 = new lib.h4_b();
	this.instance_18.setTransform(-25.2,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-318.4,778,673);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation3_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 8
	this.instance = new lib.magic1();
	this.instance.setTransform(-17,94.4,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({_off:true},35).wait(1));

	// Слой 4
	this.instance_1 = new lib.lipstick25();
	this.instance_1.setTransform(-12,99,0.676,0.676,27.5);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},5).wait(31));

	// Слой 3
	this.instance_2 = new lib.magic1();
	this.instance_2.setTransform(275,-133.6,1,1,0,0,0,75,71.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},48).wait(1));

	// Слой 13
	this.instance_3 = new lib.lipstick25();
	this.instance_3.setTransform(279.9,-132.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},4).wait(46));

	// smile3
	this.instance_4 = new lib.smile3();
	this.instance_4.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50));

	// tables
	this.instance_5 = new lib.tables();
	this.instance_5.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50));

	// hero3_fringe1
	this.instance_6 = new lib.hero3_fringe1();
	this.instance_6.setTransform(-9.9,-111);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(50));

	// hero3_eyes0
	this.instance_7 = new lib.hero3_eyes1all();
	this.instance_7.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50));

	// hero3_lips0
	this.instance_8 = new lib.hero3_lips0();
	this.instance_8.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50));

	// Слой 6
	this.instance_9 = new lib.hero3_eyebrows2();
	this.instance_9.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// Слой 7
	this.instance_10 = new lib.hero3_shadows();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

	// Слой 5
	this.instance_11 = new lib.hero3_rouge();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

	// h3_b
	this.instance_12 = new lib.h3_b();
	this.instance_12.setTransform(-14,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

	// els_nimb1
	this.instance_13 = new lib.els_nimb1();
	this.instance_13.setTransform(-24,-203);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-290.6,778,591.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation3_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 8
	this.instance = new lib.magic1();
	this.instance.setTransform(-10,79,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({_off:true},37).wait(1));

	// Слой 4
	this.instance_1 = new lib.kist2();
	this.instance_1.setTransform(-5.6,81.4,0.387,0.387,-116.8);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({scaleX:0.69,scaleY:0.69,alpha:1},5).wait(33));

	// Слой 3
	this.instance_2 = new lib.magic1();
	this.instance_2.setTransform(-297,-102.6,1,1,0,0,0,75,71.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},48).wait(1));

	// Слой 13
	this.instance_3 = new lib.shadows5();
	this.instance_3.setTransform(-292,-102.8);

	this.instance_4 = new lib.lipstick25();
	this.instance_4.setTransform(279.9,-132.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},5).wait(45));

	// smile3
	this.instance_5 = new lib.smile3();
	this.instance_5.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50));

	// tables
	this.instance_6 = new lib.tables();
	this.instance_6.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(50));

	// hero3_fringe1
	this.instance_7 = new lib.hero3_fringe1();
	this.instance_7.setTransform(-9.9,-111);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50));

	// Слой 7
	this.instance_8 = new lib.hero3_eyelashes2();
	this.instance_8.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},44).wait(6));

	// hero3_eyes0
	this.instance_9 = new lib.hero3_eyes0_1();
	this.instance_9.setTransform(-19.5,-120.2);

	this.instance_10 = new lib.hero3_eyes1();
	this.instance_10.setTransform(-19.5,-120.2);

	this.instance_11 = new lib.hero3_eyes2();
	this.instance_11.setTransform(-19.5,-120.2);

	this.instance_12 = new lib.hero3_eyes3();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_10}]},44).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).wait(2));

	// hero3_lips0
	this.instance_13 = new lib.hero3_lips0();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50));

	// Слой 6
	this.instance_14 = new lib.hero3_eyebrows2();
	this.instance_14.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50));

	// Слой 5
	this.instance_15 = new lib.hero3_rouge();
	this.instance_15.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(50));

	// h3_b
	this.instance_16 = new lib.h3_b();
	this.instance_16.setTransform(-14,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(50));

	// els_nimb1
	this.instance_17 = new lib.els_nimb1();
	this.instance_17.setTransform(-24,-203);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-290.6,778,591.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation3_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 7
	this.instance = new lib.magic1();
	this.instance.setTransform(-27,83.3,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({_off:true},35).wait(1));

	// Слой 4
	this.instance_1 = new lib.mascara1();
	this.instance_1.setTransform(-22,81,0.707,0.707,44);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},5).wait(31));

	// Слой 3
	this.instance_2 = new lib.magic1();
	this.instance_2.setTransform(314,18.6,1,1,0,0,0,75,71.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},48).wait(1));

	// Слой 13
	this.instance_3 = new lib.shadows5();
	this.instance_3.setTransform(-292,-102.8);

	this.instance_4 = new lib.lipstick25();
	this.instance_4.setTransform(279.9,-132.4);

	this.instance_5 = new lib.mascara19();
	this.instance_5.setTransform(310.4,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).to({state:[{t:this.instance_4},{t:this.instance_3}]},4).wait(46));

	// smile3
	this.instance_6 = new lib.smile3();
	this.instance_6.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(50));

	// tables
	this.instance_7 = new lib.tables();
	this.instance_7.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50));

	// hero3_fringe1
	this.instance_8 = new lib.hero3_fringe1();
	this.instance_8.setTransform(-9.9,-111);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50));

	// hero3_eyelashes1
	this.instance_9 = new lib.hero3_eyelashes1();
	this.instance_9.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// hero3_eyes0
	this.instance_10 = new lib.hero3_eyes0_1();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

	// hero3_lips0
	this.instance_11 = new lib.hero3_lips0();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

	// Слой 6
	this.instance_12 = new lib.hero3_eyebrows2();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

	// Слой 5
	this.instance_13 = new lib.hero3_rouge();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50));

	// h3_b
	this.instance_14 = new lib.h3_b();
	this.instance_14.setTransform(-14,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50));

	// els_nimb1
	this.instance_15 = new lib.els_nimb1();
	this.instance_15.setTransform(-24,-203);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-290.6,778,591.1);
p.frameBounds = [rect, rect=new cjs.Rectangle(-399.5,-290.6,788.6,591.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-399.5,-290.6,778,591.1)];


(lib.animation3_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 8
	this.instance = new lib.magic1();
	this.instance.setTransform(-18,90.4,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({_off:true},35).wait(1));

	// Слой 7
	this.instance_1 = new lib.hero3_lens();
	this.instance_1.setTransform(6.4,91);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).wait(36));

	// Слой 4
	this.instance_2 = new lib.hero3_lens();
	this.instance_2.setTransform(-36.6,91);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(36));

	// Слой 3
	this.instance_3 = new lib.magic1();
	this.instance_3.setTransform(-297,52.4,1,1,0,0,0,75,71.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},48).wait(1));

	// Слой 13
	this.instance_4 = new lib.shadows5();
	this.instance_4.setTransform(-292,-102.8);

	this.instance_5 = new lib.lipstick25();
	this.instance_5.setTransform(279.9,-132.4);

	this.instance_6 = new lib.dayneris_lens_20();
	this.instance_6.setTransform(-295,53);

	this.instance_7 = new lib.mascara19();
	this.instance_7.setTransform(310.4,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).to({state:[{t:this.instance_7},{t:this.instance_5},{t:this.instance_4}]},4).wait(46));

	// smile3
	this.instance_8 = new lib.smile3();
	this.instance_8.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50));

	// tables
	this.instance_9 = new lib.tables();
	this.instance_9.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// hero3_fringe1
	this.instance_10 = new lib.hero3_fringe1();
	this.instance_10.setTransform(-9.9,-111);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

	// hero3_eyelashes1
	this.instance_11 = new lib.hero3_eyelashes1();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

	// hero3_eyes0
	this.instance_12 = new lib.hero3_eyes0();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

	// hero3_lips0
	this.instance_13 = new lib.hero3_lips0();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50));

	// Слой 6
	this.instance_14 = new lib.hero3_eyebrows2();
	this.instance_14.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50));

	// Слой 5
	this.instance_15 = new lib.hero3_rouge();
	this.instance_15.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(50));

	// h3_b
	this.instance_16 = new lib.h3_b();
	this.instance_16.setTransform(-14,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(50));

	// els_nimb1
	this.instance_17 = new lib.els_nimb1();
	this.instance_17.setTransform(-24,-203);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-290.6,778,591.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation3_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 6
	this.instance = new lib.magic1();
	this.instance.setTransform(-16,90.9,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({_off:true},35).wait(1));

	// Слой 4
	this.instance_1 = new lib.pencil9();
	this.instance_1.setTransform(-11.8,93.8,0.533,0.533,-45);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},6).wait(30));

	// Слой 3
	this.instance_2 = new lib.magic1();
	this.instance_2.setTransform(232,-76.4,1,1,0,0,0,75,71.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},48).wait(1));

	// Слой 13
	this.instance_3 = new lib.shadows5();
	this.instance_3.setTransform(-292,-102.8);

	this.instance_4 = new lib.lipstick25();
	this.instance_4.setTransform(279.9,-132.4);

	this.instance_5 = new lib.dayneris_lens_20();
	this.instance_5.setTransform(-295,53);

	this.instance_6 = new lib.mascara19();
	this.instance_6.setTransform(310.4,13.6);

	this.instance_7 = new lib.pencil9();
	this.instance_7.setTransform(239.2,-72.1,1,1,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},4).wait(46));

	// smile3
	this.instance_8 = new lib.smile3();
	this.instance_8.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50));

	// tables
	this.instance_9 = new lib.tables();
	this.instance_9.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// hero3_fringe1
	this.instance_10 = new lib.hero3_fringe1();
	this.instance_10.setTransform(-9.9,-111);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

	// hero3_eyelashes1
	this.instance_11 = new lib.hero3_eyelashes1();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

	// hero3_eyes0
	this.instance_12 = new lib.hero3_eyes0();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

	// hero3_lips0
	this.instance_13 = new lib.hero3_lips0();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50));

	// hero3_eyebrows1
	this.instance_14 = new lib.hero3_eyebrows1();
	this.instance_14.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50));

	// Слой 5
	this.instance_15 = new lib.hero3_rouge();
	this.instance_15.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(50));

	// h3_b
	this.instance_16 = new lib.h3_b();
	this.instance_16.setTransform(-14,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(50));

	// els_nimb1
	this.instance_17 = new lib.els_nimb1();
	this.instance_17.setTransform(-24,-203);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-290.6,778,591.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 3
	this.instance = new lib.magic1();
	this.instance.setTransform(-21,84,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({_off:true},34).wait(1));

	// Слой 4
	this.instance_1 = new lib.gubka();
	this.instance_1.setTransform(-14.6,84.4,0.29,0.29);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).to({scaleX:0.34,scaleY:0.34,alpha:1},6).wait(29));

	// Слой 5
	this.instance_2 = new lib.magic1();
	this.instance_2.setTransform(216.3,39,1,1,0,0,0,75,71.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},48).wait(1));

	// Слой 13
	this.instance_3 = new lib.shadows5();
	this.instance_3.setTransform(-292,-102.8);

	this.instance_4 = new lib.rouge7();
	this.instance_4.setTransform(228,37.5);

	this.instance_5 = new lib.lipstick25();
	this.instance_5.setTransform(279.9,-132.4);

	this.instance_6 = new lib.dayneris_lens_20();
	this.instance_6.setTransform(-295,53);

	this.instance_7 = new lib.mascara19();
	this.instance_7.setTransform(310.4,13.6);

	this.instance_8 = new lib.pencil9();
	this.instance_8.setTransform(239.2,-72.1,1,1,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_3}]},4).wait(46));

	// smile3
	this.instance_9 = new lib.smile3();
	this.instance_9.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// tables
	this.instance_10 = new lib.tables();
	this.instance_10.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

	// hero3_fringe1
	this.instance_11 = new lib.hero3_fringe1();
	this.instance_11.setTransform(-9.9,-111);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

	// hero3_eyelashes1
	this.instance_12 = new lib.hero3_eyelashes1();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

	// hero3_eyes0
	this.instance_13 = new lib.hero3_eyes0();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50));

	// hero3_lips0
	this.instance_14 = new lib.hero3_lips0();
	this.instance_14.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50));

	// hero3_eyebrows1
	this.instance_15 = new lib.hero3_eyebrows1();
	this.instance_15.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(50));

	// h3_b
	this.instance_16 = new lib.h3_b();
	this.instance_16.setTransform(-14,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(50));

	// els_nimb1
	this.instance_17 = new lib.els_nimb1();
	this.instance_17.setTransform(-24,-203);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-290.6,778,591.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 9
	this.instance = new lib.magic1();
	this.instance.setTransform(-38,71.5,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({_off:true},35).wait(1));

	// Слой 8
	this.instance_1 = new lib.lipstick2();
	this.instance_1.setTransform(-33,68,0.709,0.709,37.4);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},5).wait(31));

	// Слой 6
	this.instance_2 = new lib.magic1();
	this.instance_2.setTransform(-335,42.4,1,1,0,0,0,75,71.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},48).wait(1));

	// Слой 13
	this.instance_3 = new lib.lipstick2();
	this.instance_3.setTransform(-331,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},4).wait(46));

	// tables
	this.instance_4 = new lib.tables();
	this.instance_4.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50));

	// smile2
	this.instance_5 = new lib.smile2();
	this.instance_5.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50));

	// Слой 16
	this.instance_6 = new lib.hero2_fringe1();
	this.instance_6.setTransform(-41,-191.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(50));

	// hero2_lips0
	this.instance_7 = new lib.hero2_lips0();
	this.instance_7.setTransform(-19.5,-120.2);

	this.instance_8 = new lib.hero2_lips1();
	this.instance_8.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_8}]},49).wait(1));

	// hero2_eyes1
	this.instance_9 = new lib.hero2_eyes1_all();
	this.instance_9.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// Слой 3
	this.instance_10 = new lib.hero2_podvodka();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

	// Слой 5
	this.instance_11 = new lib.hero2_shadows();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

	// Слой 4
	this.instance_12 = new lib.hero2_eyebrows2();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

	// Слой 7
	this.instance_13 = new lib.hero2_rouge();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50));

	// hero2_face
	this.instance_14 = new lib.hero2_face();
	this.instance_14.setTransform(-19.5,-120.2);

	this.instance_15 = new lib.h2_b();
	this.instance_15.setTransform(-14,118.6);

	this.instance_16 = new lib.hero2_hair1();
	this.instance_16.setTransform(-0.8,25.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-293.6,778,591.8);
p.frameBounds = [rect, rect=new cjs.Rectangle(-410,-293.6,788.5,591.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-399.5,-293.6,778,591.8)];


(lib.animation2_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 8
	this.instance = new lib.magic1();
	this.instance.setTransform(-9,102.4,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({_off:true},35).wait(1));

	// Слой 6
	this.instance_1 = new lib.podvodka1_4();
	this.instance_1.setTransform(-13,92,0.348,0.348,143.5);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,alpha:1},5).wait(31));

	// Слой 3
	this.instance_2 = new lib.magic1();
	this.instance_2.setTransform(237,37.4,1,1,0,0,0,75,71.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},48).wait(1));

	// Слой 13
	this.instance_3 = new lib.podvodka1_4();
	this.instance_3.setTransform(242.8,9,0.685,0.685,165);

	this.instance_4 = new lib.podvodka1_1();
	this.instance_4.setTransform(232.6,52.9,0.685,0.685);

	this.instance_5 = new lib.lipstick2();
	this.instance_5.setTransform(-331,42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).to({state:[{t:this.instance_5}]},4).wait(46));

	// tables
	this.instance_6 = new lib.tables();
	this.instance_6.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(50));

	// smile2
	this.instance_7 = new lib.smile2();
	this.instance_7.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50));

	// Слой 16
	this.instance_8 = new lib.hero2_fringe1();
	this.instance_8.setTransform(-41,-191.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50));

	// hero2_lips0
	this.instance_9 = new lib.hero2_lips0();
	this.instance_9.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// hero2_eyes1
	this.instance_10 = new lib.hero2_eyes3();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

	// Слой 5
	this.instance_11 = new lib.hero2_shadows();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

	// Слой 4
	this.instance_12 = new lib.hero2_eyebrows2();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

	// Слой 7
	this.instance_13 = new lib.hero2_rouge();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50));

	// hero2_face
	this.instance_14 = new lib.hero2_face();
	this.instance_14.setTransform(-19.5,-120.2);

	this.instance_15 = new lib.h2_b();
	this.instance_15.setTransform(-14,118.6);

	this.instance_16 = new lib.hero2_hair1();
	this.instance_16.setTransform(-0.8,25.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-293.6,778,591.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 9
	this.instance = new lib.magic1();
	this.instance.setTransform(-10,79,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({_off:true},37).wait(1));

	// Слой 8
	this.instance_1 = new lib.kist2();
	this.instance_1.setTransform(-5.6,81.4,0.387,0.387,-116.8);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({scaleX:0.69,scaleY:0.69,alpha:1},5).wait(33));

	// Слой 6
	this.instance_2 = new lib.magic1();
	this.instance_2.setTransform(-254,44.4,1,1,0,0,0,75,71.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},48).wait(1));

	// Слой 13
	this.instance_3 = new lib.shadows13();
	this.instance_3.setTransform(-250,43.2);

	this.instance_4 = new lib.podvodka1_4();
	this.instance_4.setTransform(242.8,9,0.685,0.685,165);

	this.instance_5 = new lib.podvodka1_1();
	this.instance_5.setTransform(232.6,52.9,0.685,0.685);

	this.instance_6 = new lib.lipstick2();
	this.instance_6.setTransform(-331,42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},4).wait(46));

	// tables
	this.instance_7 = new lib.tables();
	this.instance_7.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50));

	// smile2
	this.instance_8 = new lib.smile2();
	this.instance_8.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50));

	// Слой 16
	this.instance_9 = new lib.hero2_fringe1();
	this.instance_9.setTransform(-41,-191.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// hero2_lips0
	this.instance_10 = new lib.hero2_lips0();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

	// hero2_eyes1
	this.instance_11 = new lib.hero2_eyes1();
	this.instance_11.setTransform(-19.5,-120.2);

	this.instance_12 = new lib.hero2_eyes2();
	this.instance_12.setTransform(-19.5,-120.2);

	this.instance_13 = new lib.hero2_eyes3();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).to({state:[{t:this.instance_12}]},41).to({state:[{t:this.instance_13}]},2).wait(7));

	// Слой 4
	this.instance_14 = new lib.hero2_eyebrows2();
	this.instance_14.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50));

	// Слой 7
	this.instance_15 = new lib.hero2_rouge();
	this.instance_15.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(50));

	// hero2_face
	this.instance_16 = new lib.hero2_face();
	this.instance_16.setTransform(-19.5,-120.2);

	this.instance_17 = new lib.h2_b();
	this.instance_17.setTransform(-14,118.6);

	this.instance_18 = new lib.hero2_hair1();
	this.instance_18.setTransform(-0.8,25.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]}).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-293.6,778,591.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 4
	this.instance = new lib.magic1();
	this.instance.setTransform(-18,80.4,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({_off:true},35).wait(1));

	// Слой 5
	this.instance_1 = new lib.pencil10();
	this.instance_1.setTransform(-20.3,78,0.537,0.537,-35.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1},6).wait(30));

	// Слой 3
	this.instance_2 = new lib.magic1();
	this.instance_2.setTransform(-297,-77.6,1,1,0,0,0,75,71.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},48).wait(1));

	// Слой 13
	this.instance_3 = new lib.shadows13();
	this.instance_3.setTransform(-250,43.2);

	this.instance_4 = new lib.podvodka1_4();
	this.instance_4.setTransform(242.8,9,0.685,0.685,165);

	this.instance_5 = new lib.podvodka1_1();
	this.instance_5.setTransform(232.6,52.9,0.685,0.685);

	this.instance_6 = new lib.lipstick2();
	this.instance_6.setTransform(-331,42);

	this.instance_7 = new lib.pencil10();
	this.instance_7.setTransform(-287.3,-75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},4).wait(46));

	// tables
	this.instance_8 = new lib.tables();
	this.instance_8.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50));

	// smile2
	this.instance_9 = new lib.smile2();
	this.instance_9.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// Слой 16
	this.instance_10 = new lib.hero2_fringe1();
	this.instance_10.setTransform(-41,-191.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

	// hero2_lips0
	this.instance_11 = new lib.hero2_lips0();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

	// hero2_eyes1
	this.instance_12 = new lib.hero2_eyes1();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

	// hero2_eyebrows1
	this.instance_13 = new lib.hero2_eyebrows1();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50));

	// Слой 7
	this.instance_14 = new lib.hero2_rouge();
	this.instance_14.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50));

	// hero2_face
	this.instance_15 = new lib.hero2_face();
	this.instance_15.setTransform(-19.5,-120.2);

	this.instance_16 = new lib.h2_b();
	this.instance_16.setTransform(-14,118.6);

	this.instance_17 = new lib.hero2_hair1();
	this.instance_17.setTransform(-0.8,25.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-293.6,778,591.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 5
	this.instance = new lib.magic1();
	this.instance.setTransform(-21,84,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).wait(35));

	// Слой 4
	this.instance_1 = new lib.gubka();
	this.instance_1.setTransform(-14.6,84.4,0.29,0.29);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).to({scaleX:0.34,scaleY:0.34,alpha:1},6).wait(29));

	// Слой 3
	this.instance_2 = new lib.magic1();
	this.instance_2.setTransform(278,-115.1,1,1,0,0,0,75,71.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(49));

	// Слой 13
	this.instance_3 = new lib.shadows13();
	this.instance_3.setTransform(-250,43.2);

	this.instance_4 = new lib.podvodka1_4();
	this.instance_4.setTransform(242.8,9,0.685,0.685,165);

	this.instance_5 = new lib.podvodka1_1();
	this.instance_5.setTransform(232.6,52.9,0.685,0.685);

	this.instance_6 = new lib.rouge11();
	this.instance_6.setTransform(290.5,-110);

	this.instance_7 = new lib.lipstick2();
	this.instance_7.setTransform(-331,42);

	this.instance_8 = new lib.pencil10();
	this.instance_8.setTransform(-287.3,-75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},3).wait(47));

	// tables
	this.instance_9 = new lib.tables();
	this.instance_9.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// smile2
	this.instance_10 = new lib.smile2();
	this.instance_10.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

	// Слой 16
	this.instance_11 = new lib.hero2_fringe1();
	this.instance_11.setTransform(-41,-191.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

	// hero2_lips0
	this.instance_12 = new lib.hero2_lips0();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

	// hero2_eyes1
	this.instance_13 = new lib.hero2_eyes1();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50));

	// hero2_eyebrows1
	this.instance_14 = new lib.hero2_eyebrows1();
	this.instance_14.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50));

	// hero2_face
	this.instance_15 = new lib.hero2_face();
	this.instance_15.setTransform(-19.5,-120.2);

	this.instance_16 = new lib.h2_b();
	this.instance_16.setTransform(-14,118.6);

	this.instance_17 = new lib.hero2_hair1();
	this.instance_17.setTransform(-0.8,25.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]}).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-293.6,778,591.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 9
	this.instance = new lib.magic1();
	this.instance.setTransform(-17,78.4,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({_off:true},35).wait(1));

	// Слой 8
	this.instance_1 = new lib.hero1_zac();
	this.instance_1.setTransform(-15,83,0.824,0.824);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},5).wait(31));

	// Слой 7
	this.instance_2 = new lib.magic1();
	this.instance_2.setTransform(206,-91.6,1,1,0,0,0,75,71.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(49));

	// Слой 13
	this.instance_3 = new lib.hero1_zac();
	this.instance_3.setTransform(208,-93.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},4).wait(46));

	// Слой 12
	this.instance_4 = new lib.tables();
	this.instance_4.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50));

	// Слой 15
	this.instance_5 = new lib.hero1_hand();
	this.instance_5.setTransform(91.9,455.7,0.888,0.888,0,0,180);

	this.instance_6 = new lib.hero1_hand();
	this.instance_6.setTransform(-121.3,454.8,0.888,0.888);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(50));

	// Слой 11
	this.instance_7 = new lib.smile1();
	this.instance_7.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50));

	// hero1_eyelashes1.png
	this.instance_8 = new lib.eyes11();
	this.instance_8.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50));

	// hero1_hair1.png
	this.instance_9 = new lib.hero1_hair1();
	this.instance_9.setTransform(-12.5,57);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// Слой 5
	this.instance_10 = new lib.hero1_lips1();
	this.instance_10.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

	// Слой 6
	this.instance_11 = new lib.hero1_eyebrows2();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

	// Слой 4
	this.instance_12 = new lib.hero1_shadows();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

	// Слой 3
	this.instance_13 = new lib.hero1_rouge();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50));

	// hero1_face.png
	this.instance_14 = new lib.hero1_base();
	this.instance_14.setTransform(-14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-313.5,778,947.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 8
	this.instance = new lib.magic1();
	this.instance.setTransform(-34,91.4,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({_off:true},35).wait(1));

	// Слой 7
	this.instance_1 = new lib.lipstick35();
	this.instance_1.setTransform(-31,92.3,0.5,0.5,24);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({scaleX:0.67,scaleY:0.67,alpha:1},4).wait(32));

	// Слой 5
	this.instance_2 = new lib.magic1();
	this.instance_2.setTransform(-263.5,32.4,1,1,0,0,0,75,71.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},48).wait(1));

	// Слой 13
	this.instance_3 = new lib.lipstick35();
	this.instance_3.setTransform(-259,31,0.64,0.64);

	this.instance_4 = new lib.hero1_zac();
	this.instance_4.setTransform(208,-93.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},3).wait(47));

	// Слой 12
	this.instance_5 = new lib.tables();
	this.instance_5.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50));

	// Слой 15
	this.instance_6 = new lib.hero1_hand();
	this.instance_6.setTransform(91.9,455.7,0.888,0.888,0,0,180);

	this.instance_7 = new lib.hero1_hand();
	this.instance_7.setTransform(-121.3,454.8,0.888,0.888);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(50));

	// Слой 11
	this.instance_8 = new lib.smile1();
	this.instance_8.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50));

	// hero1_eyelashes1.png
	this.instance_9 = new lib.eyes11();
	this.instance_9.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// hero1_hair1.png
	this.instance_10 = new lib.hero1_hair1();
	this.instance_10.setTransform(-12.5,57);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

	// hero1_lips0.png
	this.instance_11 = new lib.hero1_lips0();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

	// Слой 6
	this.instance_12 = new lib.hero1_eyebrows2();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

	// Слой 4
	this.instance_13 = new lib.hero1_shadows();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50));

	// Слой 3
	this.instance_14 = new lib.hero1_rouge();
	this.instance_14.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50));

	// hero1_face.png
	this.instance_15 = new lib.hero1_base();
	this.instance_15.setTransform(-14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-313.5,778,947.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// Слой 9
	this.instance = new lib.magic1();
	this.instance.setTransform(-16,69.4,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(26));

	// Слой 8
	this.instance_1 = new lib.lens1();
	this.instance_1.setTransform(7,74);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({alpha:1},3).wait(23));

	// Слой 7
	this.instance_2 = new lib.lens1();
	this.instance_2.setTransform(-35,74);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({alpha:1},3).wait(23));

	// Слой 5
	this.instance_3 = new lib.magic1();
	this.instance_3.setTransform(262,53.4,1,1,0,0,0,75,71.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(39));

	// Слой 13
	this.instance_4 = new lib.lipstick35();
	this.instance_4.setTransform(-259,31,0.64,0.64);

	this.instance_5 = new lib.dayneris_lens_19();
	this.instance_5.setTransform(264,47,0.787,0.787);

	this.instance_6 = new lib.hero1_zac();
	this.instance_6.setTransform(208,-93.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).to({state:[{t:this.instance_6},{t:this.instance_4}]},3).wait(37));

	// Слой 12
	this.instance_7 = new lib.tables();
	this.instance_7.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(40));

	// Слой 15
	this.instance_8 = new lib.hero1_hand();
	this.instance_8.setTransform(91.9,455.7,0.888,0.888,0,0,180);

	this.instance_9 = new lib.hero1_hand();
	this.instance_9.setTransform(-121.3,454.8,0.888,0.888);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(40));

	// Слой 11
	this.instance_10 = new lib.smile1();
	this.instance_10.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(40));

	// hero1_eyelashes1.png
	this.instance_11 = new lib.hero1_eyelashes1();
	this.instance_11.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(40));

	// hero1_hair1.png
	this.instance_12 = new lib.hero1_hair1();
	this.instance_12.setTransform(-12.5,57);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(40));

	// hero1_lips0.png
	this.instance_13 = new lib.hero1_lips0();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(40));

	// Слой 6
	this.instance_14 = new lib.hero1_eyebrows2();
	this.instance_14.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(40));

	// hero1_eyelashes1.png
	this.instance_15 = new lib.hero1_eyes1();
	this.instance_15.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(40));

	// Слой 4
	this.instance_16 = new lib.hero1_shadows();
	this.instance_16.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(40));

	// Слой 3
	this.instance_17 = new lib.hero1_rouge();
	this.instance_17.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(40));

	// hero1_face.png
	this.instance_18 = new lib.hero1_base();
	this.instance_18.setTransform(-14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-313.5,778,947.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 7
	this.instance = new lib.magic1();
	this.instance.setTransform(-10,79,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({_off:true},37).wait(1));

	// Слой 5
	this.instance_1 = new lib.kist2();
	this.instance_1.setTransform(-5.6,81.4,0.387,0.387,-116.8);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({scaleX:0.69,scaleY:0.69,alpha:1},5).wait(33));

	// Слой 4
	this.instance_2 = new lib.magic1();
	this.instance_2.setTransform(296.5,-102.6,1,1,0,0,0,75,71.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},48).wait(1));

	// Слой 13
	this.instance_3 = new lib.shadows10();
	this.instance_3.setTransform(301,-106.9,0.733,0.733);

	this.instance_4 = new lib.lipstick35();
	this.instance_4.setTransform(-259,31,0.64,0.64);

	this.instance_5 = new lib.dayneris_lens_19();
	this.instance_5.setTransform(264,47,0.787,0.787);

	this.instance_6 = new lib.hero1_zac();
	this.instance_6.setTransform(208,-93.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},3).wait(47));

	// Слой 12
	this.instance_7 = new lib.tables();
	this.instance_7.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50));

	// Слой 15
	this.instance_8 = new lib.hero1_hand();
	this.instance_8.setTransform(91.9,455.7,0.888,0.888,0,0,180);

	this.instance_9 = new lib.hero1_hand();
	this.instance_9.setTransform(-121.3,454.8,0.888,0.888);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(50));

	// Слой 11
	this.instance_10 = new lib.smile1();
	this.instance_10.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50));

	// hero1_eyelashes1.png
	this.instance_11 = new lib.hero1_eyelashes1();
	this.instance_11.setTransform(-19.5,-120.2);

	this.instance_12 = new lib.hero1_eyelashes2();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).to({state:[{t:this.instance_12}]},26).wait(24));

	// hero1_hair1.png
	this.instance_13 = new lib.hero1_hair1();
	this.instance_13.setTransform(-12.5,57);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50));

	// hero1_eyes1.png
	this.instance_14 = new lib.hero1_eyes1();
	this.instance_14.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true},26).wait(24));

	// hero1_lips0.png
	this.instance_15 = new lib.hero1_lips0();
	this.instance_15.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(50));

	// Слой 6
	this.instance_16 = new lib.hero1_eyebrows2();
	this.instance_16.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(50));

	// Слой 3
	this.instance_17 = new lib.hero1_rouge();
	this.instance_17.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(50));

	// hero1_face.png
	this.instance_18 = new lib.hero1_base();
	this.instance_18.setTransform(-14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-313.5,778,947.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 6
	this.instance = new lib.magic1();
	this.instance.setTransform(-8,86.4,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(36));

	// Слой 5
	this.instance_1 = new lib.pencil33();
	this.instance_1.setTransform(-14,79,0.488,0.488,-33.3);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({scaleX:0.79,scaleY:0.79,alpha:1},4).wait(32));

	// Слой 4
	this.instance_2 = new lib.magic1();
	this.instance_2.setTransform(-318,82.4,1,1,0,0,0,75,71.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(49));

	// Слой 13
	this.instance_3 = new lib.shadows10();
	this.instance_3.setTransform(301,-106.9,0.733,0.733);

	this.instance_4 = new lib.lipstick35();
	this.instance_4.setTransform(-259,31,0.64,0.64);

	this.instance_5 = new lib.dayneris_lens_19();
	this.instance_5.setTransform(264,47,0.787,0.787);

	this.instance_6 = new lib.pencil33();
	this.instance_6.setTransform(-313,86,0.786,0.786,-83.5);

	this.instance_7 = new lib.hero1_zac();
	this.instance_7.setTransform(208,-93.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).to({state:[{t:this.instance_7},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},2).wait(48));

	// Слой 12
	this.instance_8 = new lib.tables();
	this.instance_8.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50));

	// Слой 15
	this.instance_9 = new lib.hero1_hand();
	this.instance_9.setTransform(91.9,455.7,0.888,0.888,0,0,180);

	this.instance_10 = new lib.hero1_hand();
	this.instance_10.setTransform(-121.3,454.8,0.888,0.888);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(50));

	// Слой 11
	this.instance_11 = new lib.smile1();
	this.instance_11.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

	// hero1_eyelashes1.png
	this.instance_12 = new lib.hero1_eyelashes1();
	this.instance_12.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

	// hero1_hair1.png
	this.instance_13 = new lib.hero1_hair1();
	this.instance_13.setTransform(-12.5,57);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50));

	// hero1_eyes1.png
	this.instance_14 = new lib.hero1_eyes1();
	this.instance_14.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50));

	// hero1_lips0.png
	this.instance_15 = new lib.hero1_lips0();
	this.instance_15.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(50));

	// hero1_eyebrows1.png
	this.instance_16 = new lib.hero1_eyebrows1();
	this.instance_16.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(50));

	// Слой 3
	this.instance_17 = new lib.hero1_rouge();
	this.instance_17.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(50));

	// hero1_face.png
	this.instance_18 = new lib.hero1_base();
	this.instance_18.setTransform(-14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-313.5,778,947.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.animation1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 6
	this.instance = new lib.magic1();
	this.instance.setTransform(-21,84,1,1,0,0,0,75,71.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).wait(35));

	// Слой 7
	this.instance_1 = new lib.gubka();
	this.instance_1.setTransform(-14.6,84.4,0.29,0.29);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).to({scaleX:0.34,scaleY:0.34,alpha:1},6).wait(29));

	// Слой 3
	this.instance_2 = new lib.magic1();
	this.instance_2.setTransform(-296,-98.6,1,1,0,0,0,75,71.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},34).wait(15));

	// Слой 13
	this.instance_3 = new lib.shadows10();
	this.instance_3.setTransform(301,-106.9,0.733,0.733);

	this.instance_4 = new lib.rouge8();
	this.instance_4.setTransform(-282,-103.7,0.655,0.655);

	this.instance_5 = new lib.lipstick35();
	this.instance_5.setTransform(-259,31,0.64,0.64);

	this.instance_6 = new lib.dayneris_lens_19();
	this.instance_6.setTransform(264,47,0.787,0.787);

	this.instance_7 = new lib.pencil33();
	this.instance_7.setTransform(-313,86,0.786,0.786,-83.5);

	this.instance_8 = new lib.hero1_zac();
	this.instance_8.setTransform(208,-93.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_3}]},2).wait(48));

	// Слой 12
	this.instance_9 = new lib.tables();
	this.instance_9.setTransform(-10.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50));

	// Слой 15
	this.instance_10 = new lib.hero1_hand();
	this.instance_10.setTransform(91.9,455.7,0.888,0.888,0,0,180);

	this.instance_11 = new lib.hero1_hand();
	this.instance_11.setTransform(-121.3,454.8,0.888,0.888);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).wait(50));

	// Слой 11
	this.instance_12 = new lib.smile1();
	this.instance_12.setTransform(224.5,-238.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50));

	// hero1_eyelashes1.png
	this.instance_13 = new lib.hero1_eyelashes1();
	this.instance_13.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50));

	// hero1_hair1.png
	this.instance_14 = new lib.hero1_hair1();
	this.instance_14.setTransform(-12.5,57);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50));

	// hero1_eyes1.png
	this.instance_15 = new lib.hero1_eyes1();
	this.instance_15.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(50));

	// hero1_lips0.png
	this.instance_16 = new lib.hero1_lips0();
	this.instance_16.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(50));

	// hero1_eyebrows1.png
	this.instance_17 = new lib.hero1_eyebrows1();
	this.instance_17.setTransform(-19.5,-120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(50));

	// hero1_face.png
	this.instance_18 = new lib.hero1_base();
	this.instance_18.setTransform(-14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-399.5,-313.5,778,947.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.play_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.play_0_mc();
	this.instance.setTransform(0,0,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-90,-90,180,180)];


(lib.photo_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_0_mc();
	this.instance.setTransform(0,0,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-90,-90,180,180)];


(lib.next_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.next_0_mc();
	this.instance.setTransform(0,0,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-90,-90,180,180)];


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
	this.instance.setTransform(0,0,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-90,-90,180,180)];


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
	this.instance.setTransform(0,0,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, new cjs.Rectangle(-90,-90,180,180), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-90,-90,180,180)];


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
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
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


(lib.previews_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preview_6_mc();
	this.instance.setTransform(628,425,1,1,0,0,0,-2,0);

	this.instance_1 = new lib.preview_5_mc();
	this.instance_1.setTransform(400,425.8,1,1,0,0,0,0,0.8);

	this.instance_2 = new lib.preview_4_mc();
	this.instance_2.setTransform(172.5,441.6,1,1,0,0,0,2.5,16.6);

	this.instance_3 = new lib.preview_3_mc();
	this.instance_3.setTransform(629.2,165.9,1,1,0,0,0,-0.8,10.9);

	this.instance_4 = new lib.preview_2_mc();
	this.instance_4.setTransform(400,200.7,1,1,0,0,0,0,45.7);

	this.instance_5 = new lib.preview_1_mc();
	this.instance_5.setTransform(170,196.8,1,1,0,0,0,0,41.8);

	this.instance_6 = new lib.hero6();
	this.instance_6.setTransform(401,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_6}]},1).wait(7));

	// bg
	this.instance_7 = new lib.background_1_img();
	this.instance_7.setTransform(-200,0);

	this.instance_8 = new lib.background_2_img();
	this.instance_8.setTransform(-200,0);

	this.instance_9 = new lib.background_3_img();
	this.instance_9.setTransform(-200,0);

	this.instance_10 = new lib.background_4_img();
	this.instance_10.setTransform(-200,0);

	this.instance_11 = new lib.background_5_img();
	this.instance_11.setTransform(-200,0);

	this.instance_12 = new lib.background_6_img();
	this.instance_12.setTransform(-200,0);

	this.instance_13 = new lib.background_7_img();
	this.instance_13.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,622.5), rect, rect, rect, rect, rect, rect];


(lib.previews_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preview_6_mc();
	this.instance.setTransform(628,425,1,1,0,0,0,-2,0);

	this.instance_1 = new lib.preview_5_mc();
	this.instance_1.setTransform(400,425.8,1,1,0,0,0,0,0.8);

	this.instance_2 = new lib.preview_4_mc();
	this.instance_2.setTransform(172.5,441.6,1,1,0,0,0,2.5,16.6);

	this.instance_3 = new lib.preview_3_mc();
	this.instance_3.setTransform(629.2,165.9,1,1,0,0,0,-0.8,10.9);

	this.instance_4 = new lib.preview_2_mc();
	this.instance_4.setTransform(400,200.7,1,1,0,0,0,0,45.7);

	this.instance_5 = new lib.preview_1_mc();
	this.instance_5.setTransform(170,196.8,1,1,0,0,0,0,41.8);

	this.instance_6 = new lib.hero5();
	this.instance_6.setTransform(407,295);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_6}]},1).wait(7));

	// bg
	this.instance_7 = new lib.background_1_img();
	this.instance_7.setTransform(-200,0);

	this.instance_8 = new lib.background_2_img();
	this.instance_8.setTransform(-200,0);

	this.instance_9 = new lib.background_3_img();
	this.instance_9.setTransform(-200,0);

	this.instance_10 = new lib.background_4_img();
	this.instance_10.setTransform(-200,0);

	this.instance_11 = new lib.background_5_img();
	this.instance_11.setTransform(-200,0);

	this.instance_12 = new lib.background_6_img();
	this.instance_12.setTransform(-200,0);

	this.instance_13 = new lib.background_7_img();
	this.instance_13.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,623.8), rect, rect, rect, rect, rect, rect];


(lib.previews_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preview_6_mc();
	this.instance.setTransform(628,425,1,1,0,0,0,-2,0);

	this.instance_1 = new lib.preview_5_mc();
	this.instance_1.setTransform(400,425.8,1,1,0,0,0,0,0.8);

	this.instance_2 = new lib.preview_4_mc();
	this.instance_2.setTransform(172.5,441.6,1,1,0,0,0,2.5,16.6);

	this.instance_3 = new lib.preview_3_mc();
	this.instance_3.setTransform(629.2,165.9,1,1,0,0,0,-0.8,10.9);

	this.instance_4 = new lib.preview_2_mc();
	this.instance_4.setTransform(400,200.7,1,1,0,0,0,0,45.7);

	this.instance_5 = new lib.preview_1_mc();
	this.instance_5.setTransform(170,196.8,1,1,0,0,0,0,41.8);

	this.instance_6 = new lib.hero4();
	this.instance_6.setTransform(394,302);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_6}]},1).wait(7));

	// bg
	this.instance_7 = new lib.background_1_img();
	this.instance_7.setTransform(-200,0);

	this.instance_8 = new lib.background_2_img();
	this.instance_8.setTransform(-200,0);

	this.instance_9 = new lib.background_3_img();
	this.instance_9.setTransform(-200,0);

	this.instance_10 = new lib.background_4_img();
	this.instance_10.setTransform(-200,0);

	this.instance_11 = new lib.background_5_img();
	this.instance_11.setTransform(-200,0);

	this.instance_12 = new lib.background_6_img();
	this.instance_12.setTransform(-200,0);

	this.instance_13 = new lib.background_7_img();
	this.instance_13.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,710), rect, rect, rect, rect, rect, rect];


(lib.previews_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preview_6_mc();
	this.instance.setTransform(628,425,1,1,0,0,0,-2,0);

	this.instance_1 = new lib.preview_5_mc();
	this.instance_1.setTransform(400,425.8,1,1,0,0,0,0,0.8);

	this.instance_2 = new lib.preview_4_mc();
	this.instance_2.setTransform(172.5,441.6,1,1,0,0,0,2.5,16.6);

	this.instance_3 = new lib.preview_3_mc();
	this.instance_3.setTransform(629.2,165.9,1,1,0,0,0,-0.8,10.9);

	this.instance_4 = new lib.preview_2_mc();
	this.instance_4.setTransform(400,200.7,1,1,0,0,0,0,45.7);

	this.instance_5 = new lib.preview_1_mc();
	this.instance_5.setTransform(170,196.8,1,1,0,0,0,0,41.8);

	this.instance_6 = new lib.hero3();
	this.instance_6.setTransform(407,305);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_6}]},1).wait(7));

	// bg
	this.instance_7 = new lib.background_1_img();
	this.instance_7.setTransform(-200,0);

	this.instance_8 = new lib.background_2_img();
	this.instance_8.setTransform(-200,0);

	this.instance_9 = new lib.background_3_img();
	this.instance_9.setTransform(-200,0);

	this.instance_10 = new lib.background_4_img();
	this.instance_10.setTransform(-200,0);

	this.instance_11 = new lib.background_5_img();
	this.instance_11.setTransform(-200,0);

	this.instance_12 = new lib.background_6_img();
	this.instance_12.setTransform(-200,0);

	this.instance_13 = new lib.background_7_img();
	this.instance_13.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,-46.2,1200,757), rect, rect, rect, rect, rect, rect];


(lib.previews_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preview_6_mc();
	this.instance.setTransform(628,425,1,1,0,0,0,-2,0);

	this.instance_1 = new lib.preview_5_mc();
	this.instance_1.setTransform(400,425.8,1,1,0,0,0,0,0.8);

	this.instance_2 = new lib.preview_4_mc();
	this.instance_2.setTransform(172.5,441.6,1,1,0,0,0,2.5,16.6);

	this.instance_3 = new lib.preview_3_mc();
	this.instance_3.setTransform(629.2,165.9,1,1,0,0,0,-0.8,10.9);

	this.instance_4 = new lib.preview_2_mc();
	this.instance_4.setTransform(400,200.7,1,1,0,0,0,0,45.7);

	this.instance_5 = new lib.preview_1_mc();
	this.instance_5.setTransform(170,196.8,1,1,0,0,0,0,41.8);

	this.instance_6 = new lib.hero2();
	this.instance_6.setTransform(395,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_6}]},1).wait(7));

	// bg
	this.instance_7 = new lib.background_1_img();
	this.instance_7.setTransform(-200,0);

	this.instance_8 = new lib.background_2_img();
	this.instance_8.setTransform(-200,0);

	this.instance_9 = new lib.background_3_img();
	this.instance_9.setTransform(-200,0);

	this.instance_10 = new lib.background_4_img();
	this.instance_10.setTransform(-200,0);

	this.instance_11 = new lib.background_5_img();
	this.instance_11.setTransform(-200,0);

	this.instance_12 = new lib.background_6_img();
	this.instance_12.setTransform(-200,0);

	this.instance_13 = new lib.background_7_img();
	this.instance_13.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,823.6), rect, rect, rect, rect, rect, rect];


(lib.previews_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.preview_6_mc();
	this.instance.setTransform(628,425,1,1,0,0,0,-2,0);

	this.instance_1 = new lib.preview_5_mc();
	this.instance_1.setTransform(400,425.8,1,1,0,0,0,0,0.8);

	this.instance_2 = new lib.preview_4_mc();
	this.instance_2.setTransform(172.5,441.6,1,1,0,0,0,2.5,16.6);

	this.instance_3 = new lib.preview_3_mc();
	this.instance_3.setTransform(629.2,165.9,1,1,0,0,0,-0.8,10.9);

	this.instance_4 = new lib.preview_2_mc();
	this.instance_4.setTransform(400,200.7,1,1,0,0,0,0,45.7);

	this.instance_5 = new lib.preview_1_mc();
	this.instance_5.setTransform(170,196.8,1,1,0,0,0,0,41.8);

	this.graph = new lib.animation1_25();
	this.graph.setTransform(408,260);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.graph}]},1).wait(7));

	// bg
	this.instance_6 = new lib.background_1_img();
	this.instance_6.setTransform(-200,0);

	this.instance_7 = new lib.background_2_img();
	this.instance_7.setTransform(-200,0);

	this.instance_8 = new lib.background_3_img();
	this.instance_8.setTransform(-200,0);

	this.instance_9 = new lib.background_4_img();
	this.instance_9.setTransform(-200,0);

	this.instance_10 = new lib.background_5_img();
	this.instance_10.setTransform(-200,0);

	this.instance_11 = new lib.background_6_img();
	this.instance_11.setTransform(-200,0);

	this.instance_12 = new lib.background_7_img();
	this.instance_12.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,793.8), rect, rect, rect, rect, rect, rect];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

	// location_6
	this.location_6 = new lib.location_6_mc();
	this.location_6.setTransform(235,130);

	this.timeline.addTween(cjs.Tween.get(this.location_6).wait(1).to({y:500},0).wait(43).to({y:80},15).to({y:130},5).wait(6));

	// location_5
	this.location_5 = new lib.location_5_mc();
	this.location_5.setTransform(0,130);

	this.timeline.addTween(cjs.Tween.get(this.location_5).wait(1).to({y:500},0).wait(33).to({y:80},15).to({y:130},5).wait(16));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(-235,130);

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(1).to({y:500},0).wait(23).to({y:80},15).to({y:130},5).wait(26));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(235,-140);

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(1).to({y:-500},0).wait(43).to({y:-90},15).to({y:-140},5).wait(6));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(0,-140);

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(1).to({y:-500},0).wait(33).to({y:-90},15).to({y:-140},5).wait(16));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-235,-140);

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(1).to({y:-500},0).wait(23).to({y:-90},15).to({y:-140},5).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-345,-270,692.5,532.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-345,-630,692.5,1262.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-345,-602.6,692.5,1207.2), new cjs.Rectangle(-345,-575.3,692.5,1151.9), new cjs.Rectangle(-345,-548,692.5,1096.5), new cjs.Rectangle(-345,-520.6,692.5,1041.2), new cjs.Rectangle(-345,-493.3,692.5,985.9), new cjs.Rectangle(-345,-466,692.5,930.5), new cjs.Rectangle(-345,-438.6,692.5,875.2), new cjs.Rectangle(-345,-411.3,692.5,819.9), new cjs.Rectangle(-345,-384,692.5,764.5), new cjs.Rectangle(-345,-356.6,692.5,709.2), new cjs.Rectangle(-345,-329.3,692.5,653.9), new cjs.Rectangle(-345,-302,692.5,598.5), new cjs.Rectangle(-345,-274.6,692.5,543.2), rect=new cjs.Rectangle(-345,-270,692.5,532.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.heroes_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{location_1:0,location_2:1,location_3:2,location_4:3,location_5:4,location_6:5});

	// locations
	this.location_1 = new lib.previews_1_mc();

	this.location_2 = new lib.previews_2_mc();

	this.location_3 = new lib.previews_3_mc();

	this.location_4 = new lib.previews_4_mc();

	this.location_5 = new lib.previews_5_mc();

	this.location_6 = new lib.previews_6_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.location_1}]}).to({state:[{t:this.location_2}]},1).to({state:[{t:this.location_3}]},1).to({state:[{t:this.location_4}]},1).to({state:[{t:this.location_5}]},1).to({state:[{t:this.location_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// animation
	this.instance = new lib.hero_main1();
	this.instance.setTransform(58.5,415.6,0.9,0.9,0,0,0,-18.4,38.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({regX:-18.3,regY:38.5,x:266.6,y:415.7},15).to({regX:-18.4,regY:38.4,x:236.5,y:415.6},5).wait(1));

	// animation
	this.instance_1 = new lib.hero4_main();
	this.instance_1.setTransform(742.7,399.3,0.9,0.9,0,0,0,-13.7,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({x:529.7},15).to({x:559.7},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-130.9,96.4,1169.2,669.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-117,96.4,1141.1,669.3), new cjs.Rectangle(-103.1,96.4,1113,669.3), new cjs.Rectangle(-89.3,96.4,1085,669.3), new cjs.Rectangle(-75.4,96.4,1056.9,669.3), new cjs.Rectangle(-61.6,96.4,1028.9,669.3), new cjs.Rectangle(-47.7,96.4,1000.8,669.3), new cjs.Rectangle(-33.8,96.4,972.8,669.3), new cjs.Rectangle(-20,96.5,944.7,669.3), new cjs.Rectangle(-6.1,96.5,916.6,669.3), new cjs.Rectangle(7.7,96.5,888.6,669.3), new cjs.Rectangle(21.6,96.5,860.6,669.3), new cjs.Rectangle(35.5,96.5,832.5,669.3), new cjs.Rectangle(49.3,96.5,804.4,669.3), new cjs.Rectangle(63.2,96.5,776.3,669.3), new cjs.Rectangle(77,96.4,748.3,669.3), new cjs.Rectangle(71,96.4,760.3,669.2), new cjs.Rectangle(65,96.4,772.3,669.2), new cjs.Rectangle(59,96.4,784.3,669.3), new cjs.Rectangle(53,96.4,796.3,669.3), new cjs.Rectangle(47,96.4,808.3,669.3)];


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


(lib.Bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_light_3_mc();
	this.instance.setTransform(0,0,0.92,0.92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.4,-29.4,58.9,58.9);
p.frameBounds = [rect];


(lib.quest_6_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(132,272,1,1,0,-15,165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1,p:{skewX:-15,skewY:165,x:132,y:272,regX:0,regY:0,rotation:0}},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,regX:0,regY:0,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:-60,skewY:120,x:110.1,y:430.2,regX:0.1,regY:0.1,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,regX:0,regY:0,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:655,y:430,regX:0,regY:0,rotation:15}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,regX:0,regY:0,rotation:0}},{t:this.pointer_2}]},1).wait(1));

	// arrows
	this.object_2 = new lib.arrow_1_6_mc();
	this.object_2.setTransform(405,345,0.814,0.813);

	this.object_4 = new lib.arrow_2_6_mc();
	this.object_4.setTransform(390,345,0.813,0.813,0,180,0);

	this.object_6 = new lib.arrow_3_6_mc();
	this.object_6.setTransform(337,285.1,0.805,0.805,90,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.object_2}]},1).to({state:[]},1).to({state:[{t:this.object_4}]},1).to({state:[]},1).to({state:[{t:this.object_6}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).wait(1));

	// objects
	this.object_1 = new lib.object_1_6_mc();
	this.object_1.setTransform(120,243);

	this.object_3 = new lib.object_3_6_mc();
	this.object_3.setTransform(125,437);

	this.object_5 = new lib.object_5_6_mc();
	this.object_5.setTransform(682,415);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[]},1).to({state:[{t:this.object_3}]},1).to({state:[]},1).to({state:[{t:this.object_5}]},1).to({state:[]},1).wait(1));

	// objects
	this.subject_1 = new lib.animation6_2();
	this.subject_1.setTransform(410,366);

	this.subject_2 = new lib.animation6_4();
	this.subject_2.setTransform(410,366);

	this.subject_3 = new lib.animation6_6();
	this.subject_3.setTransform(410,366);

	this.subject_4 = new lib.animation6_8();
	this.subject_4.setTransform(410,366);

	this.subject_5 = new lib.animation6_10();
	this.subject_5.setTransform(410,366);

	this.subject_6 = new lib.animation6_12();
	this.subject_6.setTransform(410,366);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[{t:this.subject_3}]},1).to({state:[{t:this.subject_4}]},1).to({state:[{t:this.subject_5}]},1).to({state:[{t:this.subject_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10.5,-329.4,778,961.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.quest_5_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(146,269,1,1,0,-30,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1,p:{skewX:-30,skewY:150,x:146,y:269,rotation:0,regX:0,regY:0}},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:-30,skewY:150,x:145,y:435,rotation:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:45,skewY:-135,x:465,y:280,rotation:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:668,y:410,rotation:15,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:625.1,y:260.2,rotation:30,regX:0.1,regY:0.1}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:330,y:315,rotation:-45,regX:0,regY:0}},{t:this.pointer_2}]},1).wait(1));

	// arrows
	this.object_2 = new lib.arrow_1_5_mc();
	this.object_2.setTransform(407,331,0.915,0.915);

	this.object_6 = new lib.arrow_2_5_mc();
	this.object_6.setTransform(404,337,0.746,0.746);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.object_2}]},1).to({state:[]},1).to({state:[{t:this.object_6}]},3).to({state:[]},1).wait(2));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).wait(1));

	// objects
	this.object_1 = new lib.object_1_5_mc();
	this.object_1.setTransform(118,264);

	this.object_3 = new lib.object_3_5_mc();
	this.object_3.setTransform(120,425);

	this.object_4 = new lib.object_4_5_mc();
	this.object_4.setTransform(452,270);

	this.object_5 = new lib.object_5_5_mc();
	this.object_5.setTransform(678,403);

	this.object_7 = new lib.object_7_5_mc();
	this.object_7.setTransform(683,257);

	this.object_8 = new lib.object_8_5_mc();
	this.object_8.setTransform(397,245);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[]},1).to({state:[{t:this.object_3}]},1).to({state:[{t:this.object_4}]},1).to({state:[{t:this.object_5}]},1).to({state:[]},1).to({state:[{t:this.object_7}]},1).to({state:[{t:this.object_8}]},1).wait(1));

	// objects
	this.subject_1 = new lib.animation5_2();
	this.subject_1.setTransform(410,366);

	this.subject_2 = new lib.animation5_4();
	this.subject_2.setTransform(410,366);

	this.subject_3 = new lib.animation5_6();
	this.subject_3.setTransform(410,366);

	this.subject_4 = new lib.animation5_8();
	this.subject_4.setTransform(410,366);

	this.subject_5 = new lib.animation5_10();
	this.subject_5.setTransform(410,366);

	this.subject_6 = new lib.animation5_12();
	this.subject_6.setTransform(410,366);

	this.subject_7 = new lib.animation5_14();
	this.subject_7.setTransform(410,366);

	this.subject_8 = new lib.animation5_16();
	this.subject_8.setTransform(410,366);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[{t:this.subject_3}]},1).to({state:[{t:this.subject_4}]},1).to({state:[{t:this.subject_5}]},1).to({state:[{t:this.subject_6}]},1).to({state:[{t:this.subject_7}]},1).to({state:[{t:this.subject_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10.5,-329.4,778,961.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(668,274,1,1,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1,p:{rotation:15,x:668,y:274,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:120,y:275,skewX:-75,skewY:105,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:60,x:125.2,y:295.1,skewX:0,skewY:0,regX:0.1,regY:-0.1}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:175,y:428.2,skewX:-30,skewY:150,regX:0.1,regY:0.1}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:-45,x:323,y:283,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:30,x:672.1,y:430.1,skewX:0,skewY:0,regX:0.1,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:70,y:413,skewX:-15,skewY:165,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:15,x:607,y:407,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:60,x:656,y:264,skewX:0,skewY:0,regX:0,regY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:-30,x:386,y:125.2,skewX:0,skewY:0,regX:-0.1,regY:0.1}},{t:this.pointer_2}]},1).wait(1));

	// arrows
	this.object_2 = new lib.arrow_1_4_mc();
	this.object_2.setTransform(405,330,0.881,0.881);

	this.object_4 = new lib.arrow_2_4_mc();
	this.object_4.setTransform(320,228,0.813,0.813,0,0,180);

	this.object_5 = new lib.arrow_3_4_mc();
	this.object_5.setTransform(460,220.2,0.746,0.746,15,0,0,0.1,0.3);

	this.object_7 = new lib.arrow_4_4_mc();
	this.object_7.setTransform(480.1,225.1,0.814,0.813,0,0,0,0.1,0.1);

	this.object_11 = new lib.arrow_5_4_mc();
	this.object_11.setTransform(330,250,0.833,0.833,-90);

	this.object_13 = new lib.arrow_6_4_mc();
	this.object_13.setTransform(405,340,0.814,0.813);

	this.object_15 = new lib.arrow_7_4_mc();
	this.object_15.setTransform(383,336,0.814,0.813,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.object_2}]},1).to({state:[]},1).to({state:[{t:this.object_4}]},1).to({state:[{t:this.object_5}]},1).to({state:[]},1).to({state:[{t:this.object_7}]},1).to({state:[]},1).to({state:[{t:this.object_11}]},3).to({state:[]},1).to({state:[{t:this.object_13}]},1).to({state:[]},1).to({state:[{t:this.object_15}]},1).to({state:[]},1).wait(2));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).wait(1));

	// objects
	this.object_1 = new lib.object_1_4_mc();
	this.object_1.setTransform(695,275);

	this.object_3 = new lib.object_3_4_mc();
	this.object_3.setTransform(122,285);

	this.object_6 = new lib.object_6_4_mc();
	this.object_6.setTransform(120,302);

	this.object_8 = new lib.object_8_4_mc();
	this.object_8.setTransform(148,420);

	this.object_9 = new lib.object_9_4_mc();
	this.object_9.setTransform(334,275);

	this.object_10 = new lib.object_10_4_mc();
	this.object_10.setTransform(701,420);

	this.object_12 = new lib.object_12_4_mc();
	this.object_12.setTransform(58,403);

	this.object_14 = new lib.object_14_4_mc();
	this.object_14.setTransform(614,400);

	this.object_16 = new lib.object_16_4_mc();
	this.object_16.setTransform(655,260);

	this.object_17 = new lib.object_17_4_mc();
	this.object_17.setTransform(390,110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[]},1).to({state:[{t:this.object_3}]},1).to({state:[]},1).to({state:[{t:this.object_6}]},2).to({state:[]},1).to({state:[{t:this.object_8}]},1).to({state:[{t:this.object_9}]},1).to({state:[{t:this.object_10}]},1).to({state:[]},1).to({state:[{t:this.object_12}]},1).to({state:[]},1).to({state:[{t:this.object_14}]},1).to({state:[]},1).to({state:[{t:this.object_16}]},1).to({state:[{t:this.object_17}]},1).wait(1));

	// objects
	this.subject_1 = new lib.animation4_2();
	this.subject_1.setTransform(410,366);

	this.subject_2 = new lib.animation4_4();
	this.subject_2.setTransform(410,366);

	this.subject_3 = new lib.animation4_6();
	this.subject_3.setTransform(410,366);

	this.subject_4 = new lib.animation4_8();
	this.subject_4.setTransform(410,366);

	this.subject_5 = new lib.animation4_10();
	this.subject_5.setTransform(410,366);

	this.subject_6 = new lib.animation4_12();
	this.subject_6.setTransform(410,366);

	this.subject_7 = new lib.animation4_14();
	this.subject_7.setTransform(410,366);

	this.subject_8 = new lib.animation4_16();
	this.subject_8.setTransform(410,366);

	this.subject_9 = new lib.animation4_18();
	this.subject_9.setTransform(410,366);

	this.subject_10 = new lib.animation4_20();
	this.subject_10.setTransform(410,366);

	this.subject_11 = new lib.animation4_22();
	this.subject_11.setTransform(410,366);

	this.subject_12 = new lib.animation4_24();
	this.subject_12.setTransform(410,366);

	this.subject_13 = new lib.animation4_26();
	this.subject_13.setTransform(410,366);

	this.subject_14 = new lib.animation4_28();
	this.subject_14.setTransform(410,366);

	this.subject_15 = new lib.animation4_30();
	this.subject_15.setTransform(410,366);

	this.subject_16 = new lib.animation4_32();
	this.subject_16.setTransform(410,366);

	this.subject_17 = new lib.animation4_34();
	this.subject_17.setTransform(410,366);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[{t:this.subject_3}]},1).to({state:[{t:this.subject_4}]},1).to({state:[{t:this.subject_5}]},1).to({state:[{t:this.subject_6}]},1).to({state:[{t:this.subject_7}]},1).to({state:[{t:this.subject_8}]},1).to({state:[{t:this.subject_9}]},1).to({state:[{t:this.subject_10}]},1).to({state:[{t:this.subject_11}]},1).to({state:[{t:this.subject_12}]},1).to({state:[{t:this.subject_13}]},1).to({state:[{t:this.subject_14}]},1).to({state:[{t:this.subject_15}]},1).to({state:[{t:this.subject_16}]},1).to({state:[{t:this.subject_17}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10.5,-329.4,778,1049.9);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-12,-329.4,800.5,1049.9), rect=new cjs.Rectangle(10.5,-329.4,778,1049.9), rect, rect, rect, rect];


(lib.quest_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(597,402,1,1,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1,p:{rotation:15,x:597,y:402,skewX:0,skewY:0}},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:-45,x:640,y:295,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:142,y:434,skewX:-30,skewY:150}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:-45,x:325,y:282,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:15,x:715,y:380,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:145,y:280,skewX:-30,skewY:150}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:15,x:680,y:240,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).wait(1));

	// arrows
	this.object_2 = new lib.arrow_1_3_mc();
	this.object_2.setTransform(406.1,351.1,0.864,0.864,45,0,0,0.1,0);

	this.object_4 = new lib.arrow_2_3_mc();
	this.object_4.setTransform(320,225.2,0.815,0.815,0,0,-180,0,0.2);

	this.object_8 = new lib.arrow_3_3_mc();
	this.object_8.setTransform(305,260,0.92,0.92,0,0,180);

	this.object_10 = new lib.arrow_4_3_mc();
	this.object_10.setTransform(347,265,0.746,0.746);

	this.object_12 = new lib.arrow_5_3_mc();
	this.object_12.setTransform(404,344,0.746,0.746);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.object_2}]},1).to({state:[]},1).to({state:[{t:this.object_4}]},1).to({state:[]},1).to({state:[{t:this.object_8}]},3).to({state:[]},1).to({state:[{t:this.object_10}]},1).to({state:[]},1).to({state:[{t:this.object_12}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).wait(1));

	// objects
	this.object_1 = new lib.object_1_3_mc();
	this.object_1.setTransform(628,405);

	this.object_3 = new lib.object_3_3_mc();
	this.object_3.setTransform(647,292);

	this.object_5 = new lib.object_5_3_mc();
	this.object_5.setTransform(114,425);

	this.object_6 = new lib.object_6_3_mc();
	this.object_6.setTransform(337,272);

	this.object_7 = new lib.object_7_3_mc();
	this.object_7.setTransform(723,375);

	this.object_9 = new lib.object_9_3_mc();
	this.object_9.setTransform(117,265);

	this.object_11 = new lib.object_11_3_mc();
	this.object_11.setTransform(689,231);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[]},1).to({state:[{t:this.object_3}]},1).to({state:[]},1).to({state:[{t:this.object_5}]},1).to({state:[{t:this.object_6}]},1).to({state:[{t:this.object_7}]},1).to({state:[]},1).to({state:[{t:this.object_9}]},1).to({state:[]},1).to({state:[{t:this.object_11}]},1).to({state:[]},1).wait(1));

	// objects
	this.subject_1 = new lib.animation3_2();
	this.subject_1.setTransform(410,366);

	this.subject_2 = new lib.animation3_4();
	this.subject_2.setTransform(410,366);

	this.subject_3 = new lib.animation3_6();
	this.subject_3.setTransform(410,366);

	this.subject_4 = new lib.animation3_8();
	this.subject_4.setTransform(410,366);

	this.subject_5 = new lib.animation3_10();
	this.subject_5.setTransform(410,366);

	this.subject_6 = new lib.animation3_12();
	this.subject_6.setTransform(410,366);

	this.subject_7 = new lib.animation3_14();
	this.subject_7.setTransform(410,366);

	this.subject_8 = new lib.animation3_16();
	this.subject_8.setTransform(410,366);

	this.subject_9 = new lib.animation3_18();
	this.subject_9.setTransform(410,366);

	this.subject_10 = new lib.animation3_20();
	this.subject_10.setTransform(410,366);

	this.subject_11 = new lib.animation3_22();
	this.subject_11.setTransform(410,366);

	this.subject_12 = new lib.animation3_24();
	this.subject_12.setTransform(410,366);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[{t:this.subject_3}]},1).to({state:[{t:this.subject_4}]},1).to({state:[{t:this.subject_5}]},1).to({state:[{t:this.subject_6}]},1).to({state:[{t:this.subject_7}]},1).to({state:[{t:this.subject_8}]},1).to({state:[{t:this.subject_9}]},1).to({state:[{t:this.subject_10}]},1).to({state:[{t:this.subject_11}]},1).to({state:[{t:this.subject_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10.5,-329.4,778,995.9);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.quest_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(660.1,255.1,1,1,15,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1,p:{regX:0.1,rotation:15,x:660.1,y:255.1,skewX:0,skewY:0}},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1,p:{regX:0,rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,rotation:0,x:120,y:283,skewX:-75,skewY:105}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,rotation:0,x:185,y:425,skewX:-45,skewY:135}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,rotation:15,x:635,y:420,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,rotation:0,x:90,y:417,skewX:-15,skewY:165}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{regX:0,rotation:0,x:340,y:-80,skewX:0,skewY:0}},{t:this.pointer_2}]},1).wait(1));

	// arrows
	this.object_2 = new lib.arrow_1_2_mc();
	this.object_2.setTransform(405,337,0.881,0.881);

	this.object_4 = new lib.arrow_2_2_mc();
	this.object_4.setTransform(323,215.1,0.736,0.736,0,0,180,0,0.1);

	this.object_6 = new lib.arrow_3_2_mc();
	this.object_6.setTransform(343,268,0.746,0.746);

	this.object_8 = new lib.arrow_4_2_mc();
	this.object_8.setTransform(320,255,0.813,0.813,0,0,180);

	this.object_10 = new lib.arrow_5_2_mc();
	this.object_10.setTransform(398,367,0.834,0.833,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.object_2}]},1).to({state:[]},1).to({state:[{t:this.object_4}]},1).to({state:[]},1).to({state:[{t:this.object_6}]},1).to({state:[]},1).to({state:[{t:this.object_8}]},1).to({state:[]},1).to({state:[{t:this.object_10}]},1).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).wait(1));

	// objects
	this.object_1 = new lib.object_1_2_mc();
	this.object_1.setTransform(690,257);

	this.object_3 = new lib.object_3_2_mc();
	this.object_3.setTransform(124,291);

	this.object_5 = new lib.object_5_2_mc();
	this.object_5.setTransform(161,414);

	this.object_7 = new lib.object_7_2_mc();
	this.object_7.setTransform(657,375);

	this.object_9 = new lib.object_9_2_mc();
	this.object_9.setTransform(78,405);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[]},1).to({state:[{t:this.object_3}]},1).to({state:[]},1).to({state:[{t:this.object_5}]},1).to({state:[]},1).to({state:[{t:this.object_7}]},1).to({state:[]},1).to({state:[{t:this.object_9}]},1).to({state:[]},1).wait(1));

	// objects
	this.subject_1 = new lib.animation2_2();
	this.subject_1.setTransform(410,366);

	this.subject_2 = new lib.animation2_4();
	this.subject_2.setTransform(410,366);

	this.subject_3 = new lib.animation2_6();
	this.subject_3.setTransform(410,366);

	this.subject_4 = new lib.animation2_8();
	this.subject_4.setTransform(410,366);

	this.subject_5 = new lib.animation2_10();
	this.subject_5.setTransform(410,366);

	this.subject_6 = new lib.animation2_12();
	this.subject_6.setTransform(410,366);

	this.subject_7 = new lib.animation2_14();
	this.subject_7.setTransform(410,366);

	this.subject_8 = new lib.animation2_16();
	this.subject_8.setTransform(410,366);

	this.subject_9 = new lib.animation2_18();
	this.subject_9.setTransform(410,366);

	this.subject_10 = new lib.animation2_20();
	this.subject_10.setTransform(410,366);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[{t:this.subject_3}]},1).to({state:[{t:this.subject_4}]},1).to({state:[{t:this.subject_5}]},1).to({state:[{t:this.subject_6}]},1).to({state:[{t:this.subject_7}]},1).to({state:[{t:this.subject_8}]},1).to({state:[{t:this.subject_9}]},1).to({state:[{t:this.subject_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10.5,-329.4,778,993.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(8,-329.4,780.5,993.6), new cjs.Rectangle(10.5,-329.4,778,993.6)];


(lib.quest_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointers
	this.pointer_2 = new lib.pointer_mc();
	this.pointer_2.setTransform(460,-80);

	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(155,250,1,1,0,-30,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1,p:{skewX:-30,skewY:150,x:155,y:250,rotation:0}},{t:this.pointer_2}]}).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:-75,skewY:105,x:100,y:437,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:682,y:272,rotation:30}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:640,y:427,rotation:30}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:322,y:283,rotation:-45}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:-15,skewY:165,x:160,y:405,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:340,y:-80,rotation:0}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:595,y:250,rotation:30}},{t:this.pointer_2}]},1).to({state:[{t:this.pointer_1,p:{skewX:0,skewY:0,x:486,y:167,rotation:-30}},{t:this.pointer_2}]},1).wait(1));

	// arrows
	this.object_2 = new lib.arrow_1_1_mc();
	this.object_2.setTransform(406,340,0.814,0.813);

	this.object_4 = new lib.arrow_2_1_mc();
	this.object_4.setTransform(344.1,225.1,0.815,0.815,15,0,0,0.1,0.1);

	this.object_6 = new lib.arrow_3_1_mc();
	this.object_6.setTransform(350.1,276.1,0.74,0.74,75,0,0,0.1,-0.1);

	this.object_10 = new lib.arrow_4_1_mc();
	this.object_10.setTransform(403,340,0.746,0.746);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.object_2}]},1).to({state:[]},1).to({state:[{t:this.object_4}]},1).to({state:[]},1).to({state:[{t:this.object_6}]},1).to({state:[]},1).to({state:[{t:this.object_10}]},3).to({state:[]},1).wait(2));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).to({state:[{t:this.indicator_mc},{t:this.instance}]},1).wait(1));

	// objects
	this.object_1 = new lib.object_1_1_mc();
	this.object_1.setTransform(122,258);

	this.object_3 = new lib.object_3_1_mc();
	this.object_3.setTransform(97,451);

	this.object_5 = new lib.object_5_1_mc();
	this.object_5.setTransform(710,260);

	this.object_7 = new lib.object_7_1_mc();
	this.object_7.setTransform(672,418);

	this.object_8 = new lib.object_8_1_mc();
	this.object_8.setTransform(336,270);

	this.object_9 = new lib.object_9_1_mc();
	this.object_9.setTransform(150,395);

	this.object_11 = new lib.object_11_1_mc();
	this.object_11.setTransform(620,270);

	this.object_12 = new lib.object_12_1_mc();
	this.object_12.setTransform(500,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.object_1}]}).to({state:[]},1).to({state:[{t:this.object_3}]},1).to({state:[]},1).to({state:[{t:this.object_5}]},1).to({state:[]},1).to({state:[{t:this.object_7}]},1).to({state:[{t:this.object_8}]},1).to({state:[{t:this.object_9}]},1).to({state:[]},1).to({state:[{t:this.object_11}]},1).to({state:[{t:this.object_12}]},1).wait(1));

	// objects
	this.subject_1 = new lib.animation1_2();
	this.subject_1.setTransform(410,366);

	this.subject_2 = new lib.animation1_4();
	this.subject_2.setTransform(410,366);

	this.subject_3 = new lib.animation1_6();
	this.subject_3.setTransform(410,366);

	this.subject_4 = new lib.animation1_8();
	this.subject_4.setTransform(410,366);

	this.subject_5 = new lib.animation1_10();
	this.subject_5.setTransform(410,366);

	this.subject_6 = new lib.animation1_12();
	this.subject_6.setTransform(410,366);

	this.subject_7 = new lib.animation1_14();
	this.subject_7.setTransform(410,366);

	this.subject_8 = new lib.animation1_16();
	this.subject_8.setTransform(410,366);

	this.subject_9 = new lib.animation1_18();
	this.subject_9.setTransform(410,366);

	this.subject_10 = new lib.animation1_20();
	this.subject_10.setTransform(410,366);

	this.subject_11 = new lib.animation1_22();
	this.subject_11.setTransform(410,366);

	this.subject_12 = new lib.animation1_24();
	this.subject_12.setTransform(410,366);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subject_1}]}).to({state:[{t:this.subject_2}]},1).to({state:[{t:this.subject_3}]},1).to({state:[{t:this.subject_4}]},1).to({state:[{t:this.subject_5}]},1).to({state:[{t:this.subject_6}]},1).to({state:[{t:this.subject_7}]},1).to({state:[{t:this.subject_8}]},1).to({state:[{t:this.subject_9}]},1).to({state:[{t:this.subject_10}]},1).to({state:[{t:this.subject_11}]},1).to({state:[{t:this.subject_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10.5,-329.4,778,1329.6);
p.frameBounds = [rect, rect, new cjs.Rectangle(7,-329.4,781.5,1329.6), new cjs.Rectangle(10.5,-329.4,778,1329.6), new cjs.Rectangle(10.5,-329.4,779.6,1329.6), rect=new cjs.Rectangle(10.5,-329.4,778,1329.6), rect, rect, rect, rect, rect, new cjs.Rectangle(10.5,-329.4,778,1122.9)];


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
p.nominalBounds = rect = new cjs.Rectangle(-200,0,1200,600);
p.frameBounds = [rect];


(lib.LocationScreen_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400.3,760.3,0.875,0.875,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.75,0.75);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(750,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(50.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_6_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_7_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1290.2);
p.frameBounds = [rect];


(lib.LocationScreen_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400.3,760.3,0.875,0.875,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.75,0.75);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(750,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(50.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_5_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_6_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1290.2);
p.frameBounds = [rect];


(lib.LocationScreen_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400.3,760.3,0.875,0.875,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.75,0.75);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(750,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(50.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_5_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1290.2);
p.frameBounds = [rect];


(lib.LocationScreen_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400.3,760.3,0.875,0.875,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.75,0.75);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(750,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(50.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_4_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1290.2);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400.3,760.3,0.875,0.875,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.75,0.75);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(750,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(50.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1290.2);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400.3,760.3,0.875,0.875,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.75,0.75);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(750,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(50.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_2_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1329.6);
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
		_createBubblesFunc(12);
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
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,679.5);
p.frameBounds = [rect];


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(400.5,1000.5,0.75,0.75,0,0,0,0.7,0.7);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(40,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(110.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(400,800,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(590,550,0.727,0.727);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(710,510);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.play_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.social_network_mc}]}).wait(1));

	// title
	this.instance = new lib.animation_title_mc();
	this.instance.setTransform(400,110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// heroes
	this.instance_2 = new lib.heroes_0_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// decor
	this.bubble_comp = new lib.bubble_1_mc();
	this.bubble_comp.setTransform(-0.9,1,1,1,0,0,0,199.1,1);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_3 = new lib.background_6_img();
	this.instance_3.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1300.9,1325.9);
p.frameBounds = [rect];


(lib.SelectionScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(745,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(55.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

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
	this.bubble_comp.setTransform(-0.9,1,1,1,0,0,0,199.1,1);

	this.timeline.addTween(cjs.Tween.get(this.bubble_comp).wait(1));

	// bg
	this.instance_1 = new lib.background_1_img();
	this.instance_1.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// filters
	this.filters_animation_mc = new lib.filters_animation_mc();
	this.filters_animation_mc.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.filters_animation_mc).wait(1));

	// btn
	this.social_network_mc = new lib.social_network_mc();
	this.social_network_mc.setTransform(220.5,700.5,0.75,0.75,0,0,0,0.7,0.7);

	this.facebook_btn = new lib.facebook_btn();
	this.facebook_btn.setTransform(100,700);
	new cjs.ButtonHelper(this.facebook_btn, 0, 1, 2, false, new lib.facebook_btn(), 3);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(580,700,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.photo_btn = new lib.photo_btn();
	this.photo_btn.setTransform(700,500);
	new cjs.ButtonHelper(this.photo_btn, 0, 1, 2, false, new lib.photo_btn(), 3);

	this.playAgain_btn = new lib.again_btn();
	this.playAgain_btn.setTransform(100,500);
	new cjs.ButtonHelper(this.playAgain_btn, 0, 1, 2, false, new lib.again_btn(), 3);

	this.next_mc = new lib.next_mc();
	this.next_mc.setTransform(720,300);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(80,300);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(745,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(55.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.prev_mc},{t:this.next_mc},{t:this.playAgain_btn},{t:this.photo_btn},{t:this.freeGames_mc},{t:this.facebook_btn},{t:this.social_network_mc}]}).wait(1));

	// banners
	this.banner_2_mc = new lib.banner_2_mc();
	this.banner_2_mc.setTransform(720,-200,0.923,0.923);

	this.banner_1_mc = new lib.banner_1_mc();
	this.banner_1_mc.setTransform(80,-200,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.banner_1_mc},{t:this.banner_2_mc}]}).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(-200,400);
	this.instance.alpha = 0.012;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// photoContainer
	this.photoContainer_mc = new lib.photoContainer_mc();

	this.timeline.addTween(cjs.Tween.get(this.photoContainer_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-319.9,1262.7,1780);
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
	this.text = new cjs.Text("storage", "64px 'Arial'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 74;
	this.text.lineWidth = 252;
	this.text.setTransform(128.2,2);

	this.instance = new lib.PreloaderScreen();

	this.ikNode_1 = new lib.CopyrightScreen();

	this.instance_1 = new lib.WelcomeScreen();

	this.instance_2 = new lib.SelectionScreen();

	this.instance_3 = new lib.LocationScreen_1();

	this.instance_4 = new lib.LocationScreen_2();

	this.instance_5 = new lib.LocationScreen_3();

	this.instance_6 = new lib.LocationScreen_4();

	this.instance_7 = new lib.LocationScreen_5();

	this.instance_8 = new lib.LocationScreen_6();

	this.instance_9 = new lib.RedirectScreen();

	this.instance_10 = new lib.ResultScreen();

	this.instance_11 = new lib.InstructionScreen();

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(345,50);

	this.instance_12 = new lib.TrackMove();
	this.instance_12.setTransform(270,50);

	this.instance_13 = new lib.Cursor();
	this.instance_13.setTransform(185,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(115.1,50,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(45.1,50,0.583,0.583,0,0,0,0.1,0);

	this.instance_14 = new lib.OrientationLockScreen();

	this.instance_15 = new lib.CurtainScreen();

	this.instance_16 = new lib.AntiBlockingAdsScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.ikNode_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_13},{t:this.instance_12},{t:this.gravity_explosion_comp}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[]},1).to({state:[{t:this.instance_16}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, new cjs.Rectangle(-262.6,-280.8,1300.9,1325.9), new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9), new cjs.Rectangle(-262.6,-329.4,1262.7,1329.6), rect=new cjs.Rectangle(-262.6,-329.4,1262.7,1290.2), rect, rect, rect, rect, new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-262.6,-319.9,1262.7,1780), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(10,0,353,100), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-1200,0,3200,600), rect=null, rect, new cjs.Rectangle(-410,-10,1620,620)];


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