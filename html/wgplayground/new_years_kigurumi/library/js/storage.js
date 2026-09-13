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
		{src:"library/images/storage_atlas_13.png", id:"storage_atlas_13"}
	]
};



lib.ssMetadata = [
		{name:"storage_atlas_", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_2", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_3", frames: [[0,602,1200,600],[0,0,1200,600]]},
		{name:"storage_atlas_4", frames: [[0,0,1200,600],[0,602,1200,600]]},
		{name:"storage_atlas_5", frames: [[0,0,600,600],[0,602,1200,200],[602,0,480,520]]},
		{name:"storage_atlas_6", frames: [[797,307,500,300],[628,0,594,305],[0,0,343,680],[345,0,281,655],[0,682,393,457],[395,657,400,400],[797,609,380,380]]},
		{name:"storage_atlas_7", frames: [[626,273,242,567],[382,273,242,568],[382,0,529,271],[870,421,257,507],[0,382,333,393],[913,0,334,419],[0,777,310,420],[0,0,380,380],[312,843,460,280],[774,930,460,280]]},
		{name:"storage_atlas_8", frames: [[1060,402,201,534],[669,564,191,567],[462,564,205,531],[862,564,196,550],[924,0,287,400],[0,0,460,280],[0,564,460,280],[462,0,460,280],[462,282,460,280],[0,846,460,280],[0,282,460,280]]},
		{name:"storage_atlas_9", frames: [[522,338,293,346],[0,948,325,296],[0,0,311,339],[522,0,311,336],[0,341,196,514],[835,0,240,435],[198,686,380,260],[1077,0,214,472],[817,437,194,511],[313,0,207,506],[1013,474,181,534],[580,686,179,509]]},
		{name:"storage_atlas_10", frames: [[0,0,186,485],[188,0,257,336],[447,0,256,336],[876,292,195,426],[705,0,290,290],[1073,292,182,409],[924,720,332,232],[924,954,330,232],[584,922,338,232],[292,338,290,290],[997,0,290,290],[0,487,290,290],[0,779,290,290],[292,630,290,290],[292,922,290,290],[584,338,290,290],[584,630,290,290]]},
		{name:"storage_atlas_11", frames: [[231,1110,190,190],[824,627,180,180],[0,598,200,300],[0,296,200,300],[280,780,190,190],[1006,780,180,180],[0,900,278,208],[1044,598,180,180],[0,234,1200,60],[636,296,220,160],[472,680,190,190],[1054,447,218,149],[824,476,218,149],[1054,296,218,149],[423,1164,246,130],[671,1144,248,125],[947,0,275,232],[668,0,277,232],[0,0,318,232],[1109,1135,182,159],[636,458,186,188],[858,296,194,178],[979,962,187,171],[921,1135,186,159],[423,972,190,190],[444,296,190,190],[202,296,240,240],[202,538,240,240],[444,488,190,190],[797,809,180,180],[615,962,180,180],[320,0,346,186],[0,1110,229,186]]},
		{name:"storage_atlas_12", frames: [[1160,666,90,104],[569,854,85,104],[480,1140,90,102],[656,854,85,102],[816,535,100,104],[317,1038,100,102],[1001,334,120,120],[1123,334,120,120],[572,528,120,120],[905,893,90,90],[572,406,120,120],[0,1036,226,104],[292,115,226,104],[0,1142,226,104],[572,1176,83,66],[1049,1056,74,88],[228,1003,87,173],[331,604,216,60],[235,221,219,104],[819,859,84,98],[241,693,92,139],[827,641,89,110],[1095,792,88,101],[753,657,72,137],[1009,792,84,106],[241,531,88,160],[0,564,157,159],[938,413,60,95],[1199,889,99,72],[960,1147,68,76],[794,205,205,84],[569,108,225,92],[1006,123,224,87],[1046,0,205,121],[0,288,229,112],[344,508,226,94],[344,409,220,97],[1001,212,120,120],[635,284,120,120],[1123,212,120,120],[879,291,120,120],[513,284,120,120],[671,657,80,124],[757,291,120,120],[335,666,180,60],[290,852,180,60],[335,728,180,60],[335,790,180,60],[290,914,180,60],[317,976,180,60],[231,327,280,80],[833,1248,220,30],[800,1034,76,95],[388,1142,90,104],[885,1170,73,74],[796,108,208,95],[342,0,225,113],[569,0,237,106],[808,0,236,106],[0,174,233,112],[482,1244,173,50],[228,1178,158,60],[657,1248,174,41],[800,1131,152,37],[971,1056,76,89],[1225,963,57,124],[827,753,87,104],[902,985,67,108],[916,792,91,99],[1185,772,77,115],[743,796,74,112],[918,535,87,112],[0,859,136,175],[572,202,220,80],[0,0,340,80],[1125,1056,69,94],[800,959,100,73],[419,1038,99,100],[1253,0,40,147],[138,859,150,142],[517,666,50,210],[189,531,50,297],[0,725,187,132],[0,402,160,160],[162,409,180,120],[694,413,120,120],[472,878,80,80],[1030,1147,78,64],[1135,1221,78,64],[1190,1155,78,64],[1196,1089,78,64],[1055,1218,78,64],[1110,1152,78,64],[1215,1221,78,64],[997,984,112,70],[520,1032,112,70],[613,960,112,70],[499,960,112,70],[1111,984,112,70],[634,1032,112,70],[572,1104,112,70],[657,1176,112,70],[686,1104,112,70],[771,1176,112,70],[0,1248,480,40],[0,82,290,90],[816,413,120,120],[694,535,120,120],[569,650,100,100],[918,708,240,40],[1007,498,240,40],[1007,540,240,40],[1007,582,240,40],[1007,624,240,40],[918,666,240,40],[918,750,240,40],[1007,456,240,40],[997,900,200,40],[997,942,200,40],[569,752,100,100]]},
		{name:"storage_atlas_13", frames: [[254,287,42,80],[86,283,64,64],[352,297,23,101],[435,134,74,56],[0,334,71,50],[91,181,89,49],[183,180,89,49],[0,170,89,49],[190,78,89,49],[190,129,89,49],[92,130,89,49],[281,134,89,49],[372,134,61,68],[227,0,67,70],[160,0,65,76],[296,67,70,65],[368,67,70,65],[296,0,70,65],[368,0,70,65],[440,0,70,65],[440,67,70,65],[98,78,90,50],[0,118,90,50],[377,297,48,48],[179,446,48,48],[0,221,80,53],[371,434,40,40],[360,204,61,48],[0,66,96,50],[435,192,69,60],[354,254,96,41],[54,462,64,37],[274,185,84,49],[82,232,84,49],[268,236,84,49],[168,282,84,49],[182,231,84,49],[0,283,84,49],[298,287,25,111],[73,349,25,111],[100,349,25,111],[0,386,25,111],[152,333,25,111],[325,287,25,111],[27,386,25,111],[179,333,25,111],[260,369,25,111],[206,333,25,111],[233,369,25,111],[427,316,40,55],[377,347,40,43],[73,334,10,11],[452,254,57,60],[127,349,23,38],[413,457,31,31],[127,446,50,50],[469,358,40,40],[469,316,40,40],[419,373,40,40],[377,392,40,40],[329,400,40,40],[287,457,40,40],[461,400,40,40],[419,415,40,40],[461,442,40,40],[287,400,40,40],[0,0,78,64],[80,0,78,64],[229,482,24,24]]}
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
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animation_for_pointer_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.b005 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.b01 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.b02 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.b03 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.b04 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.b057 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.b06 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.background_1_img = function() {
	this.spriteSheet = ss["storage_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background_2_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(0);
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
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background_6_img = function() {
	this.spriteSheet = ss["storage_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.banner_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.banner_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.banner_play_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.bg_large_buttons_ny_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bg_small_buttons_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.blinking_light_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.blinking_star_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.copyright_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.corner_filters_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.credits_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.curtain_1_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.curtain_2_img = function() {
	this.spriteSheet = ss["storage_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.curtain_3_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.els_bod2_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.els_bod_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.els_eyes1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.els_eyes1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.els_eyes1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.els_hb0_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.els_headmake1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.els_headmake_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.els_hf1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.els_hfbraid_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.els_makedr_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.els_makehb_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.els_makehf_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.els_rouge1 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.els_rouge2 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.els_rouge3 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.els_rouge4 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.els_rouge5 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.els_rouge6 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.elsa_dr1 = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.elsa_dr2 = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.elsa_dr3 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.elsa_dr4 = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.elsa_dr5 = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.elsa_dr6 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.elsa_dr7 = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.elsa_dr8 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.elsa_drb1 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.elsa_drb2 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.elsa_drb3 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.elsa_drb4 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.elsa_drb5 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.elsa_drb6 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.elsa_drb7 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.elsa_drb8 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.elsa_gift1 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.elsa_gift2 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.elsa_gift3 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.elsa_glass1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.elsa_lips0 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.elsa_lips1 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.elsa_lips2 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.elsa_lips3 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.elsa_lips4 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.elsa_lips5 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.elsa_lips6 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.elsa_sh1 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.elsa_sh2 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.elsa_sh3 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.elsa_sh4 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.elsa_shad0 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.elsa_shad1 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.elsa_shad2 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.elsa_shad3 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.elsa_shad4 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.elsa_shad5 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.elsa_shad6 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.explosion_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.explosion_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.explosion_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.explosion_3_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.explosion_4_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.explosion_5_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.facebook_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.filters_bg_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.filters_exit_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.filters_open_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.frame_location_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.free_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.free_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.full_screen_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.garland_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.gravity_explosion_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.hanger1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.hint_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hint_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_arrow_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_de_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_es_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.hint_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.indicator_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.indicator_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.indicator_part_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.instruction_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.jas_bod_img = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.jas_bodmake_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.jas_dress1 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.jas_dress2 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.jas_dress3 = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.jas_dress4 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.jas_dress5 = function() {
	this.spriteSheet = ss["storage_atlas_9"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.jas_dress6 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.jas_dress7 = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.jas_dress8 = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.jas_eyesbl1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.jas_eyesbl1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.jas_eyesbl1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.jas_glasses1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.jas_hb1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.jas_hf0_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.jas_hf2 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.jas_hfmake_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.jas_shadows0 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.jas_shadows1 = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.jas_shadows2 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.jas_shadows3 = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.jas_shadows4 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.jas_shadows5 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.jas_shadows6 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.jas_shoes1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.jas_shoes1cl_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.jas_shoes2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.jas_shoes2cl_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.jas_shoes3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.jas_shoes3cl_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.jas_shoes4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.jas_shoes4cl_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.jashead_make1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.jashead_make_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_drb1 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_drb2 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_drb3 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_drb4 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_drb5 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_drb7 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_drb8 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_lips1 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_lips2 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_lips3 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_lips4 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_lips5 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_lips6 = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_rouge1 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_rouge2 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_rouge3 = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_rouge4 = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_rouge5 = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.jasmine_rouge6 = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.jass_acc1 = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.jass_acc3 = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new11_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new16_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new17_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new18_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new24_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new29_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new30_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.lipstick_new9_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.location_0_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.location_0_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.location_0_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.location_0_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.location_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.location_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.location_1_3_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.location_1_4_img = function() {
	this.spriteSheet = ss["storage_atlas_10"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.logo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.logotype_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.lower_shadow_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.makehb_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.more_games_10_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.more_games_11_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.more_games_12_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.more_games_13_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.more_games_14_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.more_games_15_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.more_games_16_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.more_games_17_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.more_games_18_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.more_games_19_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.more_games_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.more_games_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.more_games_3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.more_games_4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.more_games_5_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.more_games_6_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.more_games_7_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.more_games_8_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.more_games_9_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.nav_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.nav_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.next_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_0_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_3_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_4_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_5_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_7_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_8_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.output_numbers_9_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.photo_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.photo_frame_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.photo_frame_2_1_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.pillow_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.pillow_2_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.play_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.pointer_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_0_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.radio_button_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.redirect_0_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.redirect_1_img = function() {
	this.spriteSheet = ss["storage_atlas_6"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.redirect_2_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.remove_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new10_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new11_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new13_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new17_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new18_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new19_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new20_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new2_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.rouge_new6_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new11_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new20_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new25_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new29_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new30_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new33_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new34_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new3_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.shadow_new4_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.shelf_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.snow_logo_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.snowfall_1_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.snowfall_1_img = function() {
	this.spriteSheet = ss["storage_atlas_13"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.sound_1_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.sound_2_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.title_de_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_en_img = function() {
	this.spriteSheet = ss["storage_atlas_7"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_es_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_en_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_0_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_en_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_1_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_en_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_2_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_en_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_3_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_en_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.title_filter_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.title_fr_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.title_ja_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title_pt_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.title_ru_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title_tr_img = function() {
	this.spriteSheet = ss["storage_atlas_8"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.track_move_img = function() {
	this.spriteSheet = ss["storage_atlas_12"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_1_1_img = function() {
	this.spriteSheet = ss["storage_atlas_11"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.wardrobe_2_img = function() {
	this.spriteSheet = ss["storage_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.title_redirect_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.title_redirect_img();
	this.instance.setTransform(-104,-56,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104,-56,207.6,111.6);
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
	this.shape.graphics.lf(["#FFFFFF","#FFCCFF"],[0,1],0,-59.9,0,60).s().p("AmoJIQgZgRgPgbQgOgeAAggIAAu7QAAggAOgeQAPgbAZgRQAZgQAdAAQAdAAAaAQILkHfQAZARAPAcQAOAcAAAfQAAAggOAcQgPAcgZARIrkHfQgaAQgdAAQgdAAgZgQg");
	this.shape.setTransform(2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-60,96,120);
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


(lib.wardrobe_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_2_img();
	this.instance.setTransform(-240,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-260,480,520);
p.frameBounds = [rect];


(lib.wardrobe_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wardrobe_1_1_img();
	this.instance.setTransform(-114.5,-93);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-114.5,-93,229,186);
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


(lib.shoes_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jas_shoes4cl_img();
	this.instance.setTransform(-32,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOGPIAAsdIMdAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.shoes_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elsa_sh4();
	this.instance.setTransform(32,-38,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOGPIAAseIMdAAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.shoes_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jas_shoes3cl_img();
	this.instance.setTransform(-48,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokGQIAAseIRJAAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.shoes_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elsa_sh3();
	this.instance.setTransform(33,-35,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOGPIAAseIMdAAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.shoes_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jas_shoes2cl_img();
	this.instance.setTransform(-34.5,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOGPIAAsdIMdAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.shoes_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elsa_sh2();
	this.instance.setTransform(34,-38,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOGPIAAseIMdAAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.shoes_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jas_shoes1cl_img();
	this.instance.setTransform(-48,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AokGQIAAseIRJAAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-40,110,80);
p.frameBounds = [rect];


(lib.shoes_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elsa_sh1();
	this.instance.setTransform(30,-34,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AmOGPIAAseIMdAAIAAMeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-40,80,80);
p.frameBounds = [rect];


(lib.shelf_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.shelf_2_img();
	this.instance.setTransform(-240,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240,-20,480,40);
p.frameBounds = [rect];


(lib.shadows_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new29_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfJYIAAyuIY/AAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-60,160,120);
p.frameBounds = [rect];


(lib.shadows_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new3_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfJYIAAyuIY/AAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-60,160,120);
p.frameBounds = [rect];


(lib.shadows_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new34_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfJYIAAyuIY/AAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-60,160,120);
p.frameBounds = [rect];


(lib.shadows_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new33_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfJYIAAyuIY/AAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-60,160,120);
p.frameBounds = [rect];


(lib.shadows_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new11_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfJYIAAyuIY/AAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-60,160,120);
p.frameBounds = [rect];


(lib.shadows_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new29_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfJYIAAyuIY/AAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-60,160,120);
p.frameBounds = [rect];


(lib.shadows_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new30_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfJYIAAyuIY/AAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-60,160,120);
p.frameBounds = [rect];


(lib.shadows_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new4_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfJYIAAyuIY/AAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-60,160,120);
p.frameBounds = [rect];


(lib.shadows_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new25_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfJYIAAyuIY/AAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-60,160,120);
p.frameBounds = [rect];


(lib.shadows_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new20_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfJYIAAyuIY/AAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-60,160,120);
p.frameBounds = [rect];


(lib.shadows_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new33_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfJYIAAyuIY/AAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-60,160,120);
p.frameBounds = [rect];


(lib.shadows_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shadow_new2_img();
	this.instance.setTransform(-56,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsfJYIAAyuIY/AAIAASug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-60,160,120);
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


(lib.pillow_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pillow_1_img();
	this.instance.setTransform(-110,-110,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.pillow_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pillow_2_img();
	this.instance.setTransform(-110,-110,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-110,-110,220,220);
p.frameBounds = [rect];


(lib.photo_frame_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_frame_2_1_img();
	this.instance.setTransform(-155,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-210,310,420);
p.frameBounds = [rect];


(lib.photo_frame_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.photo_frame_1_1_img();
	this.instance.setTransform(-144,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-144,-200,287,400);
p.frameBounds = [rect];


(lib.lower_shadow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.lower_shadow_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,200);
p.frameBounds = [rect];


(lib.lips_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new2_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.lips_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new30_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.lips_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new11_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.lips_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new17_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.lips_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new18_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.lips_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new24_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.lips_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new29_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.lips_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new29_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.lips_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new16_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.lips_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new7_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.lips_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new9_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.lips_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lipstick_new5_img();
	this.instance.setTransform(-12.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzK8IAA13IPnAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-70,100,140);
p.frameBounds = [rect];


(lib.jas_shads = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.jas_shadows0();

	this.instance_1 = new lib.jas_shadows1();
	this.instance_1.setTransform(-17.3,-24.7);

	this.instance_2 = new lib.jas_shadows2();
	this.instance_2.setTransform(-10.3,-3.1);

	this.instance_3 = new lib.jas_shadows3();
	this.instance_3.setTransform(-11.1,-16.6);

	this.instance_4 = new lib.jas_shadows4();
	this.instance_4.setTransform(-9.6,-11.6);

	this.instance_5 = new lib.jas_shadows5();
	this.instance_5.setTransform(-9,-8.5);

	this.instance_6 = new lib.jas_shadows6();
	this.instance_6.setTransform(-11,-10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,208,95);
p.frameBounds = [rect, new cjs.Rectangle(-17.3,-24.7,246,130), new cjs.Rectangle(-10.3,-3.1,225,113), new cjs.Rectangle(-11.1,-16.6,248,125), new cjs.Rectangle(-9.6,-11.6,237,106), new cjs.Rectangle(-9,-8.5,236,106), new cjs.Rectangle(-11,-10.1,233,112)];


(lib.jas_sh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.jas_shoes1_img();

	this.instance_1 = new lib.jas_shoes2_img();
	this.instance_1.setTransform(8.6,-11.8);

	this.instance_2 = new lib.jas_shoes3_img();
	this.instance_2.setTransform(0.3,4.6);

	this.instance_3 = new lib.jas_shoes4_img();
	this.instance_3.setTransform(9.5,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,173,50);
p.frameBounds = [rect, new cjs.Rectangle(8.6,-11.8,158,60), new cjs.Rectangle(0.3,4.6,174,41), new cjs.Rectangle(9.5,6.5,152,37), null];


(lib.jas_rouge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.jasmine_rouge1();
	this.instance.setTransform(-56,-71.1);

	this.instance_1 = new lib.jasmine_rouge2();
	this.instance_1.setTransform(-45.9,-71.1);

	this.instance_2 = new lib.jasmine_rouge3();
	this.instance_2.setTransform(0,-71.1);

	this.instance_3 = new lib.jasmine_rouge4();
	this.instance_3.setTransform(-1.7,-71.1);

	this.instance_4 = new lib.jasmine_rouge5();
	this.instance_4.setTransform(-42,-71.1);

	this.instance_5 = new lib.jasmine_rouge6();
	this.instance_5.setTransform(-62.5,-71.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-56,-71.1,332,232);
p.frameBounds = [rect, new cjs.Rectangle(-45.9,-71.1,330,232), new cjs.Rectangle(0,-71.1,275,232), new cjs.Rectangle(-1.7,-71.1,277,232), new cjs.Rectangle(-42,-71.1,318,232), new cjs.Rectangle(-62.5,-71.1,338,232), null];


(lib.jas_lips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.jasmine_lips1();
	this.instance.setTransform(0.1,0);

	this.instance_1 = new lib.jasmine_lips2();
	this.instance_1.setTransform(0.1,0);

	this.instance_2 = new lib.jasmine_lips3();
	this.instance_2.setTransform(0.1,0);

	this.instance_3 = new lib.jasmine_lips4();
	this.instance_3.setTransform(0.1,0);

	this.instance_4 = new lib.jasmine_lips5();
	this.instance_4.setTransform(0.1,0);

	this.instance_5 = new lib.jasmine_lips6();
	this.instance_5.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.1,0,84,49);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.jas_glasses = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jas_glasses1_img();
	this.instance.setTransform(-30.5,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30.5,-24,61,48);
p.frameBounds = [rect, null];


(lib.jas_eyesbl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.jas_eyesbl1_1_img();
	this.instance.setTransform(-63.4,-77.4);

	this.instance_1 = new lib.jas_eyesbl1_2_img();
	this.instance_1.setTransform(-63.4,-77.4);

	this.instance_2 = new lib.jas_eyesbl1_3_img();
	this.instance_2.setTransform(-63.4,-77.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},40).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-63.4,-77.4,218,149);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.jas_drb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.jasmine_drb1();
	this.instance.setTransform(68,24.2);

	this.instance_1 = new lib.jasmine_drb2();
	this.instance_1.setTransform(58.1,26.6);

	this.instance_2 = new lib.jasmine_drb3();
	this.instance_2.setTransform(68.5,30);

	this.instance_3 = new lib.jasmine_drb4();
	this.instance_3.setTransform(51.5,31);

	this.instance_4 = new lib.jasmine_drb5();
	this.instance_4.setTransform(60,23);

	this.instance_5 = new lib.jasmine_drb7();
	this.instance_5.setTransform(61,27);

	this.instance_6 = new lib.jasmine_drb8();
	this.instance_6.setTransform(59.5,15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(68,24.2,57,124);
p.frameBounds = [rect, new cjs.Rectangle(58.1,26.6,87,104), new cjs.Rectangle(68.5,30,67,108), new cjs.Rectangle(51.5,31,91,99), new cjs.Rectangle(60,23,77,115), null, new cjs.Rectangle(61,27,74,112), new cjs.Rectangle(59.5,15.9,87,112)];


(lib.jas_dr_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.jas_hf2();
	this.instance.setTransform(58.4,44.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgbpAvWMAAAhdSIBsAAIAAhZMA1nAAAMAAABergAktkGIADABIABABIAsAeIgBAGIAAAAQAAAlAJATQALAZATgBQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIAAg5QAPAlAJAGQAQAKAHgEIAAABIAGgEQAGADAHAAQAKAAADgGQAEgEAAgKIAAgBIgah+QANARAMgBQAPAAgBgLQAAgGgQgnIABABIgYhAIgBgBIAAABQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIiGgDIgDABIhfBDQgIAMgQAPQgNAOgNAIQgbAegSAAIAAgBIgBABIAAADQAOAgAUASIAAAAQAVAVATAAQAOAAAUgQQARgQAFgCIABgBIAUgSIAAAAQAMgMARgCgAjAlXIAAAAIghgVIAmgDIADAAQARAkAEAGIgdgSg");
	mask.setTransform(98.2,256.1);

	// Layer 1
	this.instance_1 = new lib.jas_dress2();
	this.instance_1.setTransform(-12.4,3.3);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-12.4,3.3,207,506);
p.frameBounds = [rect];


(lib.jas_dr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.jas_hf2();
	this.instance.setTransform(58.4,44.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:true},1).wait(1).to({_off:false},0).wait(5));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgbpAvWMAAAhc0IBOAAIAAh3MA2FAAAMAAABergAktkGIADABIABABIAsAeIgBAGIAAAAQAAAlAJATQALAZATgBQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIAAg5QAPAlAJAGQAQAKAHgEIAAABIAGgEQAGADAHAAQAKAAADgGQAEgEAAgKIAAgBIgah+QANARAMgBQAPAAgBgLQAAgGgQgnIABABIgYhAIgBgBIAAABQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIiGgDIgDABIhsBMQgGgDgOAWIgFAHIgDADQggA1gPAHQALAVAPANIAAAAQAVAVATAAQAOAAAUgQQARgQAFgCIABgBIAUgSIAAAAQAMgMARgCgAjAlXIAAAAIghgVIAmgDIADAAQARAkAEAGIgdgSg");
	var mask_graphics_1 = new cjs.Graphics().p("EgbpAvWMAAAhdSIBsAAIAAhZMA1nAAAMAAABergAktkGIADABIABABIAsAeIgBAGIAAAAQAAAlAJATQALAZATgBQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIAAg5QAPAlAJAGQAQAKAHgEIAAABIAGgEQAGADAHAAQAKAAADgGQAEgEAAgKIAAgBIgah+QANARAMgBQAPAAgBgLQAAgGgQgnIABABIgYhAIgBgBIAAABQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIiGgDIgDABIhfBDQgIAMgQAPQgNAOgNAIQgbAegSAAIAAgBIgBABIAAADQAOAgAUASIAAAAQAVAVATAAQAOAAAUgQQARgQAFgCIABgBIAUgSIAAAAQAMgMARgCgAjAlXIAAAAIghgVIAmgDIADAAQARAkAEAGIgdgSg");
	var mask_graphics_2 = new cjs.Graphics().p("EgbpAvWMAAAhaeIDGAAIAAkNMA0NAAAMAAABergAktkGIADABIABABIAsAeIgBAGIAAAAQAAAlAJATQALAZATgBQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIAAg5QAPAlAJAGQAQAKAHgEIAAABIAGgEQAGADAHAAQAKAAADgGQAEgEAAgKIAAgBIgah+QANARAMgBQAPAAgBgLQAAgGgQgnIABABIgYhAIgBgBIAAABQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIiGgDIgDABIhnBIIgIAOIgBACIgVAmQgUAngOAYIAKAKIAAAAQAVAVATAAQAOAAAUgQQARgQAFgCIABgBIAUgSIAAAAQAMgMARgCgAjAlXIAAAAIghgVIAmgDIADAAQARAkAEAGIgdgSg");
	var mask_graphics_3 = new cjs.Graphics().p("EgbpAvWMAAAhdwIBiAAIAAg7MA1xAAAMAAABergAkskGIACACIAAAAIABAAIAAAAIAsAeIAAAAIgBAGIAAAAQAAAlAJATIAAAAQALAZATgBIAAAAQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAIAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBIAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIAAAAIAAg5QAPAlAJAGIAAAAQAQAKAHgEIAAAAIAAABIAGgEIAAAAQAGADAHAAIAAAAQAKAAADgGIAAAAQAEgEAAgKIAAAAIAAgBIAAAAIgah+QANARAMgBIAAAAQAPAAgBgLIAAAAQAAgGgQgnIAAAAIABABIgYhAIAAAAIgBgBIAAAAIAAABQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBIAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIAAAAIiGgDIgCABIAAAAIhoBIIgDAGIAAAAIhLBXIAPAXIgBABIAAAAIAEAEIAAAAIAGAGIAAAAIAAABQAVAUATAAIAAAAQAOAAAUgQIAAAAQARgQAFgCIAAAAIABgBIAAAAIAUgSIAAAAIAAAAQAMgMARgCIAAAAgAjAlXIAAAAIghgVIAAAAIAmgDIADAAQARAkAEAHIAAAAIgdgTg");
	var mask_graphics_4 = new cjs.Graphics().p("EgbpAvWMAAAhc0IBEAAIAAh3MA2PAAAMAAABergAktkGIADABIABABIAsAeIgBAGIAAAAQAAAlAJATQALAZATgBQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIAAg5QAPAlAJAGQAQAKAHgEIAAABIAGgEQAGADAHAAQAKAAADgGQAEgEAAgKIAAgBIgah+QANARAMgBQAPAAgBgLQAAgGgQgnIABABIgYhAIgBgBIAAABQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIiGgDIgDABIheBBQg0BfgXAZIADADIgBABIADAEIAHAGIAAAAQAVAVATAAQAOAAAUgQQARgQAFgCIABgBIAUgSIAAAAQAMgMARgCgAjAlXIAAAAIghgVIAmgDIADAAQARAkAEAGIgdgSg");
	var mask_graphics_5 = new cjs.Graphics().p("EgbpAvWMAAAhdIIBYAAIAAhjMA17AAAMAAABergAktkGIADABIABABIAsAeIgBAGIAAAAQAAAlAJATQALAZATgBQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIAAg5QAPAlAJAGQAQAKAHgEIAAABIAGgEQAGADAHAAQAKAAADgGQAEgEAAgKIAAgBIgah+QANARAMgBQAPAAgBgLQAAgGgQgnIABABIgYhAIgBgBIAAABQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIiGgDIgDABIhnBIIgDAGIhPBPIAEAIIAAAAIAPAXIgBABIADAEIAHAGIAAAAQAVAVATAAQAOAAAUgQQARgQAFgCIABgBIAUgSIAAAAQAMgMARgCgAjAlXIAAAAIghgVIAmgDIADAAQARAkAEAGIgdgSg");
	var mask_graphics_6 = new cjs.Graphics().p("EgbpAvWMAAAhcCIBOAAIAAipMA2FAAAMAAABergAktkGIADABIABABIAsAeIgBAGIAAAAQAAAlAJATQALAZATgBQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIAAg5QAPAlAJAGQAQAKAHgEIAAABIAGgEQAGADAHAAQAKAAADgGQAEgEAAgKIAAgBIgah+QANARAMgBQAPAAgBgLQAAgGgQgnIABABIgYhAIgBgBIAAABQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIiGgDIgDABIhlBHIgEAFIgBACIgCABIgXAeQgeAmgTAVIAOAUIgBABIADAEIAHAGIAAAAQAVAVATAAQAOAAAUgQQARgQAFgCIABgBIAUgSIAAAAQAMgMARgCgAjAlXIAAAAIghgVIAmgDIADAAQARAkAEAGIgdgSg");
	var mask_graphics_7 = new cjs.Graphics().p("EgbpAvWMAAAhc+IBiAAIAAhtMA1xAAAMAAABergAktkGIADABIABABIAsAeIgBAGIAAAAQAAAlAJATQALAZATgBQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIAAg5QAPAlAJAGQAQAKAHgEIAAABIAGgEQAGADAHAAQAKAAADgGQAEgEAAgKIAAgBIgah+QANARAMgBQAPAAgBgLQAAgGgQgnIABABIgYhAIgBgBIAAABQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIiGgDIgDABIhlBHIgEAFIgBACIgCABIgCADIgJgOQgcATgYAaQgPAQgKAPIAKALIAUAhIgBABIADAEIAHAGIAAAAQAVAVATAAQAOAAAUgQQARgQAFgCIABgBIAUgSIAAAAQAMgMARgCgAjAlXIAAAAIghgVIAmgDIADAAQARAkAEAGIgdgSg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:98.2,y:256.1}).wait(1).to({graphics:mask_graphics_1,x:98.2,y:256.1}).wait(1).to({graphics:mask_graphics_2,x:98.2,y:256.1}).wait(1).to({graphics:mask_graphics_3,x:98.2,y:256.1}).wait(1).to({graphics:mask_graphics_4,x:98.2,y:256.1}).wait(1).to({graphics:mask_graphics_5,x:98.2,y:256.1}).wait(1).to({graphics:mask_graphics_6,x:98.2,y:256.1}).wait(1).to({graphics:mask_graphics_7,x:98.2,y:256.1}).wait(1));

	// Layer 1
	this.instance_1 = new lib.jas_dress1();

	this.instance_2 = new lib.jas_dress2();
	this.instance_2.setTransform(-12.4,3.3);

	this.instance_3 = new lib.jas_dress3();
	this.instance_3.setTransform(1.7,-35.2);

	this.instance_4 = new lib.jas_dress4();
	this.instance_4.setTransform(12.4,-26.7);

	this.instance_5 = new lib.jas_dress5();
	this.instance_5.setTransform(14.1,3.9);

	this.instance_6 = new lib.jas_dress6();
	this.instance_6.setTransform(9.5,100.6);

	this.instance_7 = new lib.jas_dress7();
	this.instance_7.setTransform(-40.6,-38.4);

	this.instance_8 = new lib.jas_dress8();
	this.instance_8.setTransform(-62.1,6.9);

	this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,194,511);
p.frameBounds = [rect, new cjs.Rectangle(-12.4,3.3,207,506), new cjs.Rectangle(1.7,-35.2,196,550), new cjs.Rectangle(12.4,-26.7,181,534), new cjs.Rectangle(14.1,3.9,179,509), new cjs.Rectangle(9.5,44.4,182,465.2), new cjs.Rectangle(-40.6,-38.4,281,597.7), new cjs.Rectangle(-62.1,6.9,257,507)];


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


(lib.hanger1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hanger1_img();
	this.instance.setTransform(-40,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-26.5,80,53);
p.frameBounds = [rect];


(lib.glasses_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jas_glasses1_img();
	this.instance.setTransform(-30.5,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AnzGPIAAsdIPnAAIAAMdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-40,100,80);
p.frameBounds = [rect];


(lib.glasses_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elsa_glass1_img();
	this.instance.setTransform(49,-36,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("An2BeICOmuIKTg3IDMEBIh2HMIq7BCg");
	this.shape.setTransform(-4,-3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54.3,-43,103.3,79.1);
p.frameBounds = [rect];


(lib.frame_location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.frame_location_1_img();
	this.instance.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,290,290);
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


(lib.elsa_glass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elsa_glass1_img();
	this.instance.setTransform(-49.5,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-49.5,-36,99,72);
p.frameBounds = [rect, null];


(lib.els_shads = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.elsa_shad0();

	this.instance_1 = new lib.elsa_shad1();
	this.instance_1.setTransform(-17.2,0);

	this.instance_2 = new lib.elsa_shad2();
	this.instance_2.setTransform(-11.9,0);

	this.instance_3 = new lib.elsa_shad3();
	this.instance_3.setTransform(0,-37.5);

	this.instance_4 = new lib.elsa_shad4();
	this.instance_4.setTransform(-12.9,-7.5);

	this.instance_5 = new lib.elsa_shad5();
	this.instance_5.setTransform(-11.5,4.6);

	this.instance_6 = new lib.elsa_shad6();
	this.instance_6.setTransform(-7.4,-6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,205,84);
p.frameBounds = [rect, new cjs.Rectangle(-17.2,0,225,92), new cjs.Rectangle(-11.9,0,224,87), new cjs.Rectangle(0,-37.5,205,121), new cjs.Rectangle(-12.9,-7.5,229,112), new cjs.Rectangle(-11.5,4.6,226,94), new cjs.Rectangle(-7.4,-6.5,220,97)];


(lib.els_sh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.elsa_sh1();

	this.instance_1 = new lib.elsa_sh2();
	this.instance_1.setTransform(-7.7,-1.6);

	this.instance_2 = new lib.elsa_sh3();
	this.instance_2.setTransform(-6.6,-1.1);

	this.instance_3 = new lib.elsa_sh4();
	this.instance_3.setTransform(-7.2,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,61,68);
p.frameBounds = [rect, new cjs.Rectangle(-7.7,-1.6,68,76), new cjs.Rectangle(-6.6,-1.1,67,70), new cjs.Rectangle(-7.2,-1.2,65,76), null];


(lib.els_rouge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.els_rouge1();
	this.instance.setTransform(-24.1,-168.7);

	this.instance_1 = new lib.els_rouge2();
	this.instance_1.setTransform(-1.1,-168.7);

	this.instance_2 = new lib.els_rouge3();
	this.instance_2.setTransform(29.7,47);

	this.instance_3 = new lib.els_rouge4();
	this.instance_3.setTransform(19.9,23.6);

	this.instance_4 = new lib.els_rouge5();
	this.instance_4.setTransform(0,-168.7);

	this.instance_5 = new lib.els_rouge6();
	this.instance_5.setTransform(-21.6,-168.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24.1,-168.7,311,339);
p.frameBounds = [rect, new cjs.Rectangle(-1.1,-168.7,257,336), new cjs.Rectangle(29.7,47,216,60), new cjs.Rectangle(19.9,23.6,219,104), new cjs.Rectangle(0,-168.7,256,336), new cjs.Rectangle(-21.6,-168.7,311,336), null];


(lib.els_lips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.elsa_lips0();

	this.instance_1 = new lib.elsa_lips1();

	this.instance_2 = new lib.elsa_lips2();

	this.instance_3 = new lib.elsa_lips3();

	this.instance_4 = new lib.elsa_lips4();

	this.instance_5 = new lib.elsa_lips5();
	this.instance_5.setTransform(0,-0.2);

	this.instance_6 = new lib.elsa_lips6();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,89,49);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(0,-0.2,89,49), new cjs.Rectangle(0,0,89,49)];


(lib.els_eyes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.els_eyes1_1_img();
	this.instance.setTransform(-44.7,-68.7);

	this.instance_1 = new lib.els_eyes1_2_img();
	this.instance_1.setTransform(-44.7,-68.7);

	this.instance_2 = new lib.els_eyes1_3_img();
	this.instance_2.setTransform(-44.7,-68.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},48).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-44.7,-68.7,226,104);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.els_dr_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EghfAxGMAPkg+OInfAAMAESghBIC8AAIAAi8MApnAEmIDYfXIjfAAMAKMA+OgAjHkzIAPAtQAVAzAggRIgNg9IAVAbQAbAZARgTQAMAGALgLIAEgEIAAgIIAAgCIg2iAIAIAHQAIAFAKAAQAJAAAEgEQADgDABgHIhBhsIiQAYIhbBhIg4CDQANAMATAIQARAIAJAAQAbAAAog7IAKgOIAIgIIAXgOIABAAgAETm8IAvBFQArBCArgQIAfgQIgGgNQgDgGgMg3QgHgcgBgmIhfh3IhvgqIhmgOIgBACQgDAGAAAEQAAAbAjAIQAQAEAoADIAbAQIg9gDIhlAaIgBAEQAAAOAJAIQAIAHANAAQAUAAAggHIg4AVIAAACIAAADIAFAGQAGAIACABQACACALACQALADAGAAQAWAAAugTIBIANIADAFIg5ABIhMAVIAAADQgCALAMAJQALAIAMABQAMAAALgEIAWgHgAjBnAIApgKIAbAmg");
	mask.setTransform(98.7,155.4);

	// Layer 1
	this.instance = new lib.elsa_dr6();
	this.instance.setTransform(6.9,-20.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(6.9,-20.5,195,426);
p.frameBounds = [rect];


(lib.els_dr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EghfAxJMAMlhg9IByAAIAAhUMAqjAEsMAKFBdlgAjHkwIAPAtQAVAzAggRIgNg9IAVAbQAbAaARgUQAMAGALgKIAEgFIAAgIIAAgCIg2iAIAIAHQAIAFAKAAQAJAAAEgEQADgDABgHIhBhsIiQAZIhFBGQgDAUAAAJQAABKAMAkQAEAMAGALQANgNAPgXIAKgOIAIgIIAXgOIABAAgAETm4IAsBAQAkguANgdQAOgdABggIhEhVIhvgqIhmgNIgBABQgDAGAAAEQAAAbAjAIQAQAEAoAEIAbAPIg9gDIhlAaIgBAEQAAAOAJAIQAIAHANAAQAUAAAggHIg4AVIAAACIAAADIAFAGQAGAIACABQACACALACQALADAGAAQAWAAAugTIBIANIADAFIg5ABIhMAVIAAADQgCALAMAJQALAJAMAAQAMAAALgEIAWgHgAjBm9IApgKIAbAmg");
	var mask_graphics_1 = new cjs.Graphics().p("EghfAyfMAPkg+OInfAAMAEjgjEIB5AAIAAhRMArBgCaMACwAmvIjfAAMAKMA+OgAnDh7IAphLIgJAaQANAMATAIQARAHAJAAQAbAAAog6IAKgOIAIgJIAXgNIABAAIA1AVIAPAtQAVAzAggRIgNg9IAVAbQATARANgEQAHgBAFgGQAMAGALgLIAEgEIAAgIIAAgCIg2iAIAIAHIAHADQAFACAGAAQAJAAAEgEQADgDABgHIhBhtIiQAZIhABBIAAABIhKCIgAG1jhIgCgagAETljIAvBFQArBBArgPIAbgPIgJh5IgHhZIAHBZIhviLIhvgqIhmgOIgBACQgDAFAAAFQAAAbAjAIQAQAEAoADIAbAQIg9gDIhlAZIgBAFQAAAOAJAHQAIAIANAAQAUAAAggIIg4AWIAAACIAAACIAFAHQAGAIACABQACACALACQALADAGAAQAWAAAugTIBIAMIADAGIg5ABIhMAVIAAACQgCAMAMAJQALAIAMABQAMAAALgEIAWgHgAjBlnIApgLIAbAng");
	var mask_graphics_2 = new cjs.Graphics().p("EghfAxIMAPkg+OInfAAMAEggiwICQAAIAAhRMAqFAEqIDYfXIjfAAMAKMA+OgAjHkxIAPAtQAVAyAggRIgNg8IAVAbQAbAZARgUQAMAHALgLIAEgFIAAgHIAAgDIg2h/IAIAHQAIAFAKAAQAJAAAEgEQADgEABgGIhBhtIiQAZIhNBPIgwCkIAKAFQARAHAJAAQAbAAAog6IAKgPIAIgIIAXgOIABAAgAETm6IAvBFQArBBArgPIA3gdIgWhiIgFADIh5iYIhvgqIhmgNIgBACQgDAFAAAFQAAAbAjAIQAQADAoAEIAbAQIg9gDIhlAZIgBAFQAAANAJAIQAIAIANAAQAUAAAggIIg4AWIAAABIAAADIAFAHQAGAHACABQACACALADQALADAGAAQAWAAAugTIBIAMIADAFIg5ABIhMAWIAAACQgCAMAMAIQALAJAMAAQAMAAALgDIAWgHgAjBm/IApgKIAbAng");
	var mask_graphics_3 = new cjs.Graphics().p("EghfAxJMAPkg+OInfAAMAEggiwIB8AAIAAhTMAqZAEsIDYfXIjfAAMAKMA+OgAjHkwIAPAtQAVAyAggRIgNg8IAVAbQAbAZARgUQAMAHALgLIAEgEIAAgIIAAgCIg2iAIAIAHQAIAFAKAAQAJAAAEgEQADgEABgGIhBhtIiQAZIhbBgIg4CEQANAMATAIQARAHAJAAQAbAAAog6IAKgPIAIgIIAXgNIABgBgAETm5IAvBFQArBBArgPIA4geIglhpIhwiMIhvgrIhmgNIgBACQgDAFAAAFQAAAbAjAIQAQADAoAEIAbAQIg9gDIhlAZIgBAFQAAANAJAIQAIAIANAAQAUAAAggIIg4AWIAAABIAAADIAFAHQAGAHACABQACACALADQALADAGAAQAWAAAugTIBIAMIADAGIg5AAIhMAWIAAACQgCAMAMAIQALAJAMAAQAMAAALgDIAWgHgAjBm9IApgLIAbAng");
	var mask_graphics_4 = new cjs.Graphics().p("EghfAyHMAPkg+OInfAAMAEigi5IBmAAIAAhZMArtgBtMACYAl/IjfAAMAKMA+OgAjHjyIAPAtQAVAzAggRIgNg9IAVAbQAbAZARgTQAMAGALgLIAEgEIAAgIIAAgCIg2iAIAIAHQAIAFAKAAQAJAAAEgEQADgDABgHIhBhtIiQAZIhbBgIg4CEQANAMATAIQARAHAJAAQAbAAAog6IAKgOIAIgJIAXgNIABAAgAETl7IAvBFQArBBArgPIAwgZQgEgNgEgRIgCgLIgDgOIgBgMIgPgrIhwiMIhvgqIhmgOIgBACQgDAFAAAFQAAAbAjAIQAQAEAoADIAbAQIg9gDIhlAZIgBAFQAAAOAJAHQAIAIANAAQAUAAAggIIg4AWIAAACIAAACIAFAHQAGAIACABQACACALACQALADAGAAQAWAAAugTIBIANIADAFIg5ABIhMAVIAAACQgCAMAMAJQALAIAMABQAMAAALgEIAWgHgAjBl/IApgLIAbAng");
	var mask_graphics_5 = new cjs.Graphics().p("EghfAxGMAPkg+OInfAAMAESghBIC8AAIAAi8MApnAEmIDYfXIjfAAMAKMA+OgAjHkzIAPAtQAVAzAggRIgNg9IAVAbQAbAZARgTQAMAGALgLIAEgEIAAgIIAAgCIg2iAIAIAHQAIAFAKAAQAJAAAEgEQADgDABgHIhBhsIiQAYIhbBhIg4CDQANAMATAIQARAIAJAAQAbAAAog7IAKgOIAIgIIAXgOIABAAgAETm8IAvBFQArBCArgQIAfgQIgGgNQgDgGgMg3QgHgcgBgmIhfh3IhvgqIhmgOIgBACQgDAGAAAEQAAAbAjAIQAQAEAoADIAbAQIg9gDIhlAaIgBAEQAAAOAJAIQAIAHANAAQAUAAAggHIg4AVIAAACIAAADIAFAGQAGAIACABQACACALACQALADAGAAQAWAAAugTIBIANIADAFIg5ABIhMAVIAAADQgCALAMAJQALAIAMABQAMAAALgEIAWgHgAjBnAIApgKIAbAmg");
	var mask_graphics_6 = new cjs.Graphics().p("EghfAxPMAPkg+OInfAAMAEtgkPMAsIAE4IDYfXIjfAAMAKMA+OgAjHkqIAPAtQAVAzAggRIgNg9IAVAbQAbAZARgTQAMAGALgLIAEgEIAAgIIAAgCIg2iAIAIAHQAIAFAKAAQAJAAAEgEQADgDABgHIhBhtIiQAZIhGBKQAJAFAAAOQgcA9gNAFIAAABQgEAGgFAAIgDAAQgHAGgDAFQgCAGgCAKIgHATQgEAJgGADIgBAEIgBAAIAEADQAMAKAQAHQARAHAJAAQAbAAAog6IAKgOIAIgJIAXgNIABAAgAETmzIAvBFQAZAmAYALQATAIASgHIAfgQIgBgCIAEgBIAAAAIgBgEIAEgLQADgJAAgDIgHgPQgHgOAAgOQAAgHAHgOIADgIIgBAAIAAABIgHgIIgBgBQgFgJgPgQIgFgFIhfh3IhvgqIhmgOIgBACQgDAFAAAFQAAAbAjAIQAQAEAoADIAbAQIg9gDIhlAZIgBAFQAAAOAJAHQAIAIANAAQAUAAAggIIg4AWIAAACIAAACIAFAHQAGAIACABQACACALACQALADAGAAQAWAAAugTIBIAMIADAGIg5ABIhMAVIAAACQgCAMAMAJQALAIAMABQAMAAALgEIAWgHgAjBm3IApgLIAbAng");
	var mask_graphics_7 = new cjs.Graphics().p("EghfAxPMAPkg+OInfAAMAEtgkPMAsIAE4IDYfXIjfAAMAKMA+OgAjHkqIAPAtQAVAzAggRIgNg9IAVAbQAbAZARgTQAMAGALgLIAEgEIAAgIIAAgCIg2iAIAIAHQAIAFAKAAQAJAAAEgEQADgDABgHIhBhtIiQAZIhPBTIgGANQgDAXgfAyQgHAPgHALIgOAhQANAMATAIQARAHAJAAQAbAAAog6IAKgOIAIgJIAXgNIABAAgAETmzIAvBFQArBBArgPIAJgFQgDgJgBgQIgBgrIAAgjIAAgDIABgNIACgaIhkh9IhvgqIhmgOIgBACQgDAFAAAFQAAAbAjAIQAQAEAoADIAbAQIg9gDIhlAZIgBAFQAAAOAJAHQAIAIANAAQAUAAAggIIg4AWIAAACIAAACIAFAHQAGAIACABQACACALACQALADAGAAQAWAAAugTIBIAMIADAGIg5ABIhMAVIAAACQgCAMAMAJQALAIAMABQAMAAALgEIAWgHgAjBm3IApgLIAbAng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:98.7,y:155.1}).wait(1).to({graphics:mask_graphics_1,x:98.7,y:146.6}).wait(1).to({graphics:mask_graphics_2,x:98.7,y:155.3}).wait(1).to({graphics:mask_graphics_3,x:98.7,y:155.2}).wait(1).to({graphics:mask_graphics_4,x:98.7,y:149}).wait(1).to({graphics:mask_graphics_5,x:98.7,y:155.4}).wait(1).to({graphics:mask_graphics_6,x:98.7,y:154.6}).wait(1).to({graphics:mask_graphics_7,x:98.7,y:154.6}).wait(1));

	// Layer 1
	this.instance = new lib.elsa_dr1();
	this.instance.setTransform(6.2,-119);

	this.instance_1 = new lib.elsa_dr2();
	this.instance_1.setTransform(10.5,-154.7);

	this.instance_2 = new lib.elsa_dr3();
	this.instance_2.setTransform(8.1,-111);

	this.instance_3 = new lib.elsa_dr4();
	this.instance_3.setTransform(-17.9,-155.2);

	this.instance_4 = new lib.elsa_dr5();
	this.instance_4.setTransform(-15.2,-156.6);

	this.instance_5 = new lib.elsa_dr6();
	this.instance_5.setTransform(6.9,-20.5);

	this.instance_6 = new lib.elsa_dr7();
	this.instance_6.setTransform(2.5,-120.7);

	this.instance_7 = new lib.elsa_dr8();
	this.instance_7.setTransform(-17.6,-28.3);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(6.2,-119,201,534);
p.frameBounds = [rect, new cjs.Rectangle(10.5,-154.7,191,567), new cjs.Rectangle(8.1,-111,196,514), new cjs.Rectangle(-17.9,-155.2,242,567), new cjs.Rectangle(-15.2,-156.6,242,568), new cjs.Rectangle(6.9,-20.5,195,426), new cjs.Rectangle(2.5,-120.7,205,531), new cjs.Rectangle(-17.6,-28.3,240,435)];


(lib.els_db = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.elsa_drb1();
	this.instance.setTransform(74,-80.5);

	this.instance_1 = new lib.elsa_drb2();
	this.instance_1.setTransform(66.4,-94.1);

	this.instance_2 = new lib.elsa_drb3();
	this.instance_2.setTransform(70.9,-84);

	this.instance_3 = new lib.elsa_drb4();
	this.instance_3.setTransform(71.5,-77);

	this.instance_4 = new lib.elsa_drb5();
	this.instance_4.setTransform(84.5,-93.8);

	this.instance_5 = new lib.elsa_drb6();
	this.instance_5.setTransform(70.1,-21);

	this.instance_6 = new lib.elsa_drb7();
	this.instance_6.setTransform(74,-80.4);

	this.instance_7 = new lib.elsa_drb8();
	this.instance_7.setTransform(75.4,-14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(74,-80.5,84,98);
p.frameBounds = [rect, new cjs.Rectangle(66.4,-94.1,92,139), new cjs.Rectangle(70.9,-84,89,110), new cjs.Rectangle(71.5,-77,88,101), new cjs.Rectangle(84.5,-93.8,72,137), new cjs.Rectangle(70.1,-21,74,56), new cjs.Rectangle(74,-80.4,84,106), new cjs.Rectangle(75.4,-14.7,71,50)];


(lib.els_acc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EghfAxGMAMWhfFIC9AAIAAjGMApnAEmMAKFBdlgAjHkzIAPAtQAVAzAggRIgNg9IAVAbQAbAZARgTQAMAGALgLIAEgEIAAgIIAAgCIg2iAIAIAHQAIAFAKAAQAJAAAEgEQADgDABgHIhBhsIiQAYIhFBHIAAAAQgTAVgFAEIgDAGIgxCCIAcANQAzAYAdg0IAPgUIAKgOIAIgIIAXgOIABAAgAETm8IAsBBIALAPQAaAjAWAHQAbAHAtgeIgRhqIh2iVIhvgqIhmgOIgBACQgDAGAAAEQAAAbAjAIQAQAEAoADIAbAQIg9gDIhlAaIgBAEQAAAOAJAIQAIAHANAAQAUAAAggHIg4AVIAAACIAAADIAFAGQAGAIACABQACACALACQALADAGAAQAWAAAugTIBIANIADAFIg5ABIhMAVIAAADQgCALAMAJQALAIAMABQAMAAALgEIAWgHgAjBnAIApgKIAbAmg");
	var mask_graphics_1 = new cjs.Graphics().p("EghfAxGMAMWhfFIC9AAIAAjGMApnAEmMAKFBdlgAjHkzIAPAtQAVAzAggRIgNg9IAVAbQAbAZARgTQAMAGALgLIAEgEIAAgIIAAgCIg2iAIAIAHQAIAFAKAAQAJAAAEgEQADgDABgHIhBhsIiQAYIhFBHIAAAAQgTAVgFAEIgDAGIgxCCIAcANQAzAYAdg0IAPgUIAKgOIAIgIIAXgOIABAAgAETm8IAsBBIALAPQAaAjAWAHQAbAHAtgeIgRhqIh2iVIhvgqIhmgOIgBACQgDAGAAAEQAAAbAjAIQAQAEAoADIAbAQIg9gDIhlAaIgBAEQAAAOAJAIQAIAHANAAQAUAAAggHIg4AVIAAACIAAADIAFAGQAGAIACABQACACALACQALADAGAAQAWAAAugTIBIANIADAFIg5ABIhMAVIAAADQgCALAMAJQALAIAMABQAMAAALgEIAWgHgAjBnAIApgKIAbAmg");
	var mask_graphics_2 = new cjs.Graphics().p("EghfAxDMAMfhgLIDmAAIAAh6MAo1AEgMAKFBdlgAETm+IAsBAIALAQQAaAiAWAHQAbAHAtgeIgRhqIh2iVIhvgqIgYgDQgDAMgMAdIAYADIAbAPIg5gCIgDAHIgEAXQgHAogIAcQAUgEAhgOIBIANIADAFIg5ABIhMAVIAAADQgCALAMAJQALAJAMAAQAMAAALgEIAWgHg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:98.7,y:155.4}).wait(1).to({graphics:mask_graphics_1,x:98.7,y:155.4}).wait(1).to({graphics:mask_graphics_2,x:98.7,y:155.7}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// Layer 1
	this.instance = new lib.elsa_gift1();
	this.instance.setTransform(54,26.2);

	this.instance_1 = new lib.elsa_gift2();
	this.instance_1.setTransform(24.7,81.1);

	this.instance_2 = new lib.elsa_gift3();
	this.instance_2.setTransform(65.3,38.3);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(54,26.2,88,160);
p.frameBounds = [rect, new cjs.Rectangle(24.7,81.1,157,159), new cjs.Rectangle(65.3,38.3,60,95), null];


(lib.body_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{en:0,ru:1,de:2,fr:3,es:4,pt:5,tr:6,ja:7});

	// graph
	this.instance = new lib.title_en_img();
	this.instance.setTransform(-230,-140);

	this.instance_1 = new lib.title_ru_img();
	this.instance_1.setTransform(-230,-140);

	this.instance_2 = new lib.title_de_img();
	this.instance_2.setTransform(-230,-140);

	this.instance_3 = new lib.title_fr_img();
	this.instance_3.setTransform(-230,-140);

	this.instance_4 = new lib.title_es_img();
	this.instance_4.setTransform(-230,-140);

	this.instance_5 = new lib.title_pt_img();
	this.instance_5.setTransform(-230,-140);

	this.instance_6 = new lib.title_tr_img();
	this.instance_6.setTransform(-230,-140);

	this.instance_7 = new lib.title_ja_img();
	this.instance_7.setTransform(-230,-140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-140,460,280);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect];


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

	// graph
	this.instance = new lib.nav_img();
	this.instance.setTransform(-90,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-60,180,120);
p.frameBounds = [rect];


(lib.body_nav_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_img();
	this.instance.setTransform(-80,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect];


(lib.bo8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b057();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,100,104);
p.frameBounds = [rect];


(lib.bo7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b06();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,100,102);
p.frameBounds = [rect];


(lib.bo4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b04();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,85,102);
p.frameBounds = [rect];


(lib.bo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b03();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,90,102);
p.frameBounds = [rect];


(lib.bo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b01();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,85,104);
p.frameBounds = [rect];


(lib.blush_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new20_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.blush_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new20_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.blush_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new11_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.blush_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new18_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.blush_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new13_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.blush_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new10_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.blush_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new6_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.blush_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new17_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.blush_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new17_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.blush_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new19_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.blush_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new19_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.blush_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rouge_new2_img();
	this.instance.setTransform(-39,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJXIAAytISvAAIAAStg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-60,120,120);
p.frameBounds = [rect];


(lib.b05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b005();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,90,104);
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


(lib.accessory_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jass_acc3();
	this.instance.setTransform(-68,-87.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AtWIUIBNsDIJKr+IQWKZIuKUVIlpAtg");
	this.shape.setTransform(3.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.3,-100.5,171.1,201.3);
p.frameBounds = [rect];


(lib.accessory_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elsa_gift3();
	this.instance.setTransform(-30,-47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AkBJMIiOqWIHboQIEwBrIAUL7IlBFOg");
	this.shape.setTransform(-3.6,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-43.7,-60.8,80.1,120.6);
p.frameBounds = [rect];


(lib.accessory_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elsa_gift2();
	this.instance.setTransform(0.8,-111.7,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.7,-111.7,223.5,223.5);
p.frameBounds = [rect];


(lib.accessory_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jass_acc1();
	this.instance.setTransform(-89.8,27.6,0.777,0.777,-58.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-89.8,-92.7,179.6,185.4);
p.frameBounds = [rect];


(lib.accessory_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elsa_gift1();
	this.instance.setTransform(-31.7,-85.6,1,1,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55.4,-85.6,110.8,171.3);
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
	this.shape.graphics.f("#FFFFFF").s().p("EhdvAu4MAAAhdvMC7eAAAMAAABdvg");
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


(lib.Snowflake = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.snowfall_1_img();
	this.instance.setTransform(-9,-9,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9,-9,18,18);
p.frameBounds = [rect];


(lib.snowfall_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// viewer
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Eg+fA2sMAAAhtXMB8/AAAMAAABtXg");
	this.shape.setTransform(400,275,1,0.786);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,550);
p.frameBounds = [rect];


(lib.Snowflake_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.snowfall_1_2_img();
	this.instance.setTransform(-45,-45,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.snowfall_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// viewer
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Eg+fA2sMAAAhtXMB8/AAAMAAABtXg");
	this.shape.setTransform(400,275,1,0.786);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,550);
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
	this.instance_2.setTransform(-30,-30,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect, new cjs.Rectangle(-24,-24,48,48), new cjs.Rectangle(-30,-30,60,60)];


(lib.explosion_0_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(1));

	// animation
	this.instance = new lib.explosion_0_1_img();
	this.instance.setTransform(-35,-32.5);

	this.instance_1 = new lib.explosion_1_1_img();
	this.instance_1.setTransform(-35,-33);

	this.instance_2 = new lib.explosion_2_1_img();
	this.instance_2.setTransform(-35,-33);

	this.instance_3 = new lib.explosion_3_1_img();
	this.instance_3.setTransform(-35,-33);

	this.instance_4 = new lib.explosion_4_1_img();
	this.instance_4.setTransform(-35,-33);

	this.instance_5 = new lib.explosion_5_1_img();
	this.instance_5.setTransform(-35,-33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35,-32.5,70,65);
p.frameBounds = [rect, rect=new cjs.Rectangle(-35,-33,70,65), rect, rect, rect, rect, null];


(lib.blinking_star_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.blinking_star_1_img();
	this.instance.setTransform(-45,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
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
	this.instance.setTransform(-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50,-50,100,100);
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


(lib.snow_logo_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.snow_logo_img();
	this.instance.setTransform(-145,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-45,290,90);
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
	this.instance = new lib.bg_large_buttons_ny_img();
	this.instance.setTransform(-95,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-95,-95,190,190);
p.frameBounds = [rect];


(lib.beam_light_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		///* this.stop();
		//this.mouseChildren = false;
		//this.mouseEnabled = false;*/
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


(lib.redirect_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_redirect_mc();
	this.instance.setTransform(-188,-182,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(220));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(220));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EggyAlgMAAAhK/MBBlAAAMAAABK/g");
	this.shape.setTransform(0,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-301.1,-294.8,511.2,564.9);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.preloader_16_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.preloader_13_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:1.25,scaleY:1.25,x:-10},5).to({x:10},10).to({scaleX:1,scaleY:1,x:0},5).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-46,-60,96,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-50.3,-63,100.8,126), new cjs.Rectangle(-54.5,-66,105.6,132), new cjs.Rectangle(-58.8,-69,110.4,138), new cjs.Rectangle(-63.2,-72,115.2,144), new cjs.Rectangle(-67.5,-75,120,150), new cjs.Rectangle(-65.4,-75,120,150), new cjs.Rectangle(-63.4,-75,120,150), new cjs.Rectangle(-61.4,-75,120,150), new cjs.Rectangle(-59.5,-75,120,150), new cjs.Rectangle(-57.5,-75,120,150), new cjs.Rectangle(-55.5,-75,120,150), new cjs.Rectangle(-53.5,-75,120,150), new cjs.Rectangle(-51.5,-75,120,150), new cjs.Rectangle(-49.5,-75,120,150), new cjs.Rectangle(-47.5,-75,120,150), new cjs.Rectangle(-47.2,-72,115.2,144), new cjs.Rectangle(-47,-69,110.4,138), new cjs.Rectangle(-46.7,-66,105.6,132), new cjs.Rectangle(-46.4,-63,100.8,126), rect=new cjs.Rectangle(-46,-60,96,120), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.wardrobe_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.wardrobe_1_1_mc();
	this.instance.setTransform(290,180,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.wardrobe_1_1_mc();
	this.instance_1.setTransform(290,30,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// graph
	this.instance_2 = new lib.wardrobe_1_1_mc();
	this.instance_2.setTransform(290,-120,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// graph
	this.instance_3 = new lib.wardrobe_1_1_mc();
	this.instance_3.setTransform(-290,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// graph
	this.instance_4 = new lib.wardrobe_1_1_mc();
	this.instance_4.setTransform(-290,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// graph
	this.instance_5 = new lib.wardrobe_1_1_mc();
	this.instance_5.setTransform(-290,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-404.5,-213,809,486);
p.frameBounds = [rect];


(lib.title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		устанавливаем рус. или англ. название
		https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		*/
		this.stop();
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
		else if (lang_str == "tr")
		{
			this.body_mc.gotoAndStop("tr");
		}
		else if (lang_str == "ja")
		{
			this.body_mc.gotoAndStop("ja");
		}
		else
		{
			this.body_mc.gotoAndStop("en");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.body_title_mc();
	this.body_mc.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-140,460,280);
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
	this.substrate_mc.setTransform(0.1,0,0.4,0.4,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16,-16,32,32);
p.frameBounds = [rect];


(lib.shadows_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.6,0.6,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.pillows_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.pillow_1_mc();
	this.instance.setTransform(-80,0,1,1,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({rotation:-25},15).wait(20).to({rotation:-15},15).wait(1));

	// animation
	this.instance_1 = new lib.pillow_2_mc();
	this.instance_1.setTransform(80,0,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({rotation:25},15).wait(20).to({rotation:15},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-214.7,-134.7,429.4,269.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-215.3,-135.3,430.6,270.8), new cjs.Rectangle(-216.3,-136.3,432.7,272.7), new cjs.Rectangle(-217,-136.9,434,274), new cjs.Rectangle(-217.9,-137.9,435.9,275.9), new cjs.Rectangle(-218.8,-138.8,437.7,277.6), new cjs.Rectangle(-219.5,-139.4,439,279), new cjs.Rectangle(-220.4,-140.3,440.8,280.7), new cjs.Rectangle(-221.3,-141.1,442.6,282.4), new cjs.Rectangle(-221.8,-141.7,443.7,283.5), new cjs.Rectangle(-222.7,-142.5,445.4,285.2), new cjs.Rectangle(-223.4,-143.3,446.9,286.8), new cjs.Rectangle(-224.2,-144,448.4,288.2), new cjs.Rectangle(-224.7,-144.6,449.5,289.3), new cjs.Rectangle(-225.4,-145.3,450.8,290.7), rect=new cjs.Rectangle(-226.2,-146.2,452.4,292.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-225.3,-145.3,450.7,290.8), new cjs.Rectangle(-224.6,-144.6,449.3,289.3), new cjs.Rectangle(-224.1,-144,448.2,288.2), new cjs.Rectangle(-223.3,-143.3,446.7,286.8), new cjs.Rectangle(-222.6,-142.5,445.2,285.2), new cjs.Rectangle(-221.8,-141.8,443.7,283.5), new cjs.Rectangle(-221.2,-141.1,442.4,282.4), new cjs.Rectangle(-220.3,-140.3,440.7,280.7), new cjs.Rectangle(-219.5,-139.4,439,279), new cjs.Rectangle(-218.8,-138.8,437.6,277.7), new cjs.Rectangle(-217.9,-137.9,435.8,275.9), new cjs.Rectangle(-216.9,-137,433.9,274.1), new cjs.Rectangle(-216.2,-136.3,432.5,272.7), new cjs.Rectangle(-215.3,-135.3,430.6,270.7), new cjs.Rectangle(-214.7,-134.7,429.4,269.4)];


(lib.nav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApAECIiygXQA3jcg3j5ICogIIAokCIUVH0I0JH1g");

	// animation
	this.instance = new lib.beam_light_0_mc();
	this.instance.setTransform(-200,0,1,1,30);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({x:200},20).wait(41));

	// graph
	this.instance_1 = new lib.body_nav_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ap7J8QkIkHAAl1QAAl0EIkHQEHkIF0AAQF0AAEIEIQEIEHAAF0QAAF1kIEHQkIEIl0AAQl0AAkHkIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-90,180.1,180);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.nav_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjpGBQgjgkgBgyQABgxAjgjIDXjXIjXjWQgjgjgBgxQABgyAjgjQAjgkAxAAQAyAAAkAkIEpEsQAkAjAAAwQAAAxgkAjIkpEtQgkAigyABQgxgBgjgig");

	// animation
	this.instance = new lib.beam_light_0_mc();
	this.instance.setTransform(-200,0,1,1,30);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({x:200},20).wait(41));

	// graph
	this.instance_1 = new lib.body_nav_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApXJYIAAyvISvAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-80,160,160);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.lips_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.6,0.6,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.jasm_dress8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// elsa_dr1
	this.instance = new lib.jas_dress8();
	this.instance.setTransform(-154.5,-248);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(8.5,-214);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.jasmine_drb8();
	this.instance_2.setTransform(-33.5,-229.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-154.5,-248,257,507);
p.frameBounds = [rect];


(lib.jasm_dress7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// elsa_dr1
	this.instance = new lib.jas_dress7();
	this.instance.setTransform(-126.5,-291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(8.5,-214);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.jasmine_drb7();
	this.instance_2.setTransform(-30.5,-220.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-126.5,-291,281,655);
p.frameBounds = [rect];


(lib.jasm_dress6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// elsa_dr1
	this.instance = new lib.jas_dress6();
	this.instance.setTransform(-82.5,-223.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(8.5,-214);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82.5,-240.5,182,425.9);
p.frameBounds = [rect];


(lib.jasm_dress5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// elsa_dr1
	this.instance = new lib.jas_dress5();
	this.instance.setTransform(-80.5,-252);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(8.5,-214);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.jasmine_drb5();
	this.instance_2.setTransform(-33.5,-229.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80.5,-252,179,509);
p.frameBounds = [rect];


(lib.jasm_dress4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// elsa_dr1
	this.instance = new lib.jas_dress4();
	this.instance.setTransform(-72.5,-279);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(8.5,-214);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.jasmine_drb4();
	this.instance_2.setTransform(-30.5,-221.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-72.5,-279,181,534);
p.frameBounds = [rect];


(lib.jasm_dress3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// elsa_dr1
	this.instance = new lib.jas_dress3();
	this.instance.setTransform(-96.5,-291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(8.5,-214);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.jasmine_drb3();
	this.instance_2.setTransform(-28.5,-227.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96.5,-291,196,550);
p.frameBounds = [rect];


(lib.jasm_dress2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// elsa_dr1
	this.instance = new lib.jas_dress2();
	this.instance.setTransform(-107.5,-256);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(8.5,-214);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.jasmine_drb2();
	this.instance_2.setTransform(-31.5,-227.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.5,-256,207,506);
p.frameBounds = [rect];


(lib.jasm_dress1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// elsa_dr1
	this.instance = new lib.jas_dress1();
	this.instance.setTransform(-91.5,-258);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(8.5,-214);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.jasmine_drb1();
	this.instance_2.setTransform(-23.5,-227.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-91.5,-258,194,511);
p.frameBounds = [rect];


(lib.jas_make = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.jas_hfmake_img();
	this.instance.setTransform(223.4,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// eyes
	this.instance_1 = new lib.jas_eyesbl();
	this.instance_1.setTransform(399.8,217.1,0.999,1,0,0,0,46,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// shadows
	this.shadows = new lib.jas_shads();
	this.shadows.setTransform(403.4,226.6,1,1,0,0,0,104,43.1);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// blush
	this.blush = new lib.jas_rouge();
	this.blush.setTransform(398.4,266.5,1,1,0,0,0,109.7,45.1);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// lips
	this.lips = new lib.jas_lips();
	this.lips.setTransform(381.8,358.5,1,1,0,0,0,42,24.4);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// body
	this.instance_2 = new lib.jashead_make_img();
	this.instance_2.setTransform(256.8,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// body
	this.instance_3 = new lib.jas_bodmake_img();
	this.instance_3.setTransform(87.4,336.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// body
	this.instance_4 = new lib.makehb_img();
	this.instance_4.setTransform(263.3,39.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(87.4,6,529.1,601.9);
p.frameBounds = [rect];


(lib.jas_acc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 14
	this.instance = new lib.bo1();
	this.instance.setTransform(56,16.2,1.811,1.811,0,0,0,42.6,52.1);
	this.instance.alpha = 0.262;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:52,scaleX:2.09,scaleY:2.09,x:53.1,y:16.8,alpha:0.012},1).to({_off:true},1).wait(10).to({_off:false,scaleX:0.98,scaleY:0.98,x:64.7,y:14,alpha:1},0).to({scaleX:1.53,scaleY:1.53,x:58.9,y:15.4,alpha:0.512},2).wait(1));

	// Layer 9
	this.instance_1 = new lib.bo8();
	this.instance_1.setTransform(69.2,14.7,0.979,0.979,0,0,0,49.9,52);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({regX:50,scaleX:2.09,scaleY:2.09,x:62.8,y:18.2,alpha:0.012},4).wait(1));

	// Layer 10
	this.instance_2 = new lib.bo7();
	this.instance_2.setTransform(91.6,17.6,0.979,0.979,0,0,0,50,51.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({regX:49.8,scaleX:2.09,scaleY:2.09,x:110.3,y:24.6,alpha:0.012},4).to({_off:true},1).wait(2));

	// Layer 11
	this.instance_3 = new lib.bo1();
	this.instance_3.setTransform(64.7,14,0.979,0.979,0,0,0,42.6,52);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({scaleX:2.09,scaleY:2.09,x:53.1,y:16.8,alpha:0.012},4).to({_off:true},1).wait(4));

	// Layer 12
	this.instance_4 = new lib.b05();
	this.instance_4.setTransform(62,6.2,0.979,0.979,0,0,0,44.9,52.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({regY:52,scaleX:2.09,scaleY:2.09,x:47.3,y:0.1,alpha:0.012},4).to({_off:true},1).wait(6));

	// Layer 13
	this.instance_5 = new lib.bo4();
	this.instance_5.setTransform(69.2,17.7,0.979,0.979,0,0,0,42.6,51);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).to({regY:51.1,scaleX:2.09,scaleY:2.09,x:62.7,y:24.9,alpha:0.012},4).to({_off:true},1).wait(8));

	// Layer 2
	this.instance_6 = new lib.bo3();
	this.instance_6.setTransform(53.5,10.9,0.979,0.979,0,0,0,44.9,51.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:45,scaleX:2.09,scaleY:2.09,x:29.2,y:10.3,alpha:0.012},4).to({_off:true},1).wait(10));

	// Layer 1
	this.instance_7 = new lib.b02();
	this.instance_7.setTransform(27.2,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21.1,-78.2,153.9,188.3);
p.frameBounds = [rect, new cjs.Rectangle(-35.8,-91.7,177.5,217.2), new cjs.Rectangle(-27.5,-67.7,138.2,168.1), new cjs.Rectangle(-46,-82.1,166.9,184.7), new cjs.Rectangle(-64.7,-96.4,195.8,213), new cjs.Rectangle(-12.7,-69.2,153.9,184.7), new cjs.Rectangle(-26.3,-81.8,177.5,213), new cjs.Rectangle(-30.3,-92.6,163,193), new cjs.Rectangle(-46.5,-108.4,187.9,217.2), new cjs.Rectangle(-21,-78,180.1,188.3), new cjs.Rectangle(-35.8,-91.7,213.5,217.2), new cjs.Rectangle(4.9,-69.6,191.3,184.7), new cjs.Rectangle(-10.5,-82.1,225.6,213), new cjs.Rectangle(-25.9,-76.8,181,188.3), new cjs.Rectangle(-41.6,-90.3,208.8,217.2)];


(lib.jas_acc_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgbpAvWMAAAhczICoAAIAAh4MA0rAAAMAAABergAkskGIACACIABAAIAsAeIgBAGIAAAAQAAAlAJATQALAZATgBQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIAAg5QAPAlAKAGQAPAKAHgEIAAABIAGgEQAGADAHAAQAKAAADgGQAEgEAAgKIAAgBIgah+QANARAMgBQAPAAgBgLQAAgGgQgnIABABIgYhAIgBgBIgBgDQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIiGgDIgCABIhoBIIgIAOIgBACIgVAmIgiA/IAKAKIAAABQAVAUATAAQAOAAAUgQQARgQAFgCIABgBIAUgSQAMgMARgCgAjAlXIABAAIgigVIAmgDIADAAQARAkAEAHIgdgTg");
	mask.setTransform(37.5,59.5);

	// Layer 1
	this.instance = new lib.jas_acc2();
	this.instance.setTransform(162.5,83.5,1,1,0,0,0,51.1,87);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(90.3,-81.7,124.3,188.3);
p.frameBounds = [rect];


(lib.jas_acc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgbpAvWMAAAhczICoAAIAAh4MA0rAAAMAAABergAkskGIACACIABAAIAsAeIgBAGIAAAAQAAAlAJATQALAZATgBQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIAAg5QAPAlAKAGQAPAKAHgEIAAABIAGgEQAGADAHAAQAKAAADgGQAEgEAAgKIAAgBIgah+QANARAMgBQAPAAgBgLQAAgGgQgnIABABIgYhAIgBgBIgBgDQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIiGgDIgCABIhoBIIgIAOIgBACIgVAmIgiA/IAKAKIAAABQAVAUATAAQAOAAAUgQQARgQAFgCIABgBIAUgSQAMgMARgCgAjAlXIABAAIgigVIAmgDIADAAQARAkAEAHIgdgTg");
	var mask_graphics_1 = new cjs.Graphics().p("EgbpAvWMAAAhczICoAAIAAh4MA0rAAAMAAABergAkskGIACACIABAAIAsAeIgBAGIAAAAQAAAlAJATQALAZATgBQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIAAg5QAPAlAKAGQAPAKAHgEIAAABIAGgEQAGADAHAAQAKAAADgGQAEgEAAgKIAAgBIgah+QANARAMgBQAPAAgBgLQAAgGgQgnIABABIgYhAIgBgBIgBgDQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIiGgDIgCABIhoBIIgIAOIgBACIgVAmIgiA/IAKAKIAAABQAVAUATAAQAOAAAUgQQARgQAFgCIABgBIAUgSQAMgMARgCgAjAlXIABAAIgigVIAmgDIADAAQARAkAEAHIgdgTg");
	var mask_graphics_2 = new cjs.Graphics().p("AvGInIFispIAaAeQAPAPAQAUQAQAUAHgCQAHgBAFgEQAEgFABgXQABgXgLgQIgVggQgKgPAAgcIADgeIGArmIRwIBIixGFIoyT8ItmALg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:37.5,y:59.5}).wait(1).to({graphics:mask_graphics_1,x:37.5,y:59.5}).wait(1).to({graphics:mask_graphics_2,x:188.5,y:119.4}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// Layer 1
	this.instance = new lib.jass_acc1();

	this.instance_1 = new lib.jas_acc2();
	this.instance_1.setTransform(162.5,83.5,1,1,0,0,0,51.1,87);

	this.instance_2 = new lib.jass_acc3();
	this.instance_2.setTransform(120.1,33.3);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,182,159);
p.frameBounds = [rect, new cjs.Rectangle(90.3,-81.7,124.3,188.3), new cjs.Rectangle(120.1,33.3,136,175), null];


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


(lib.glasses_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.4,0.4,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16,-16,32,32);
p.frameBounds = [rect];


(lib.filters_exit_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.filters_body_exit_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},19).to({scaleX:1,scaleY:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-25,90,50);
p.frameBounds = [rect, new cjs.Rectangle(-44.7,-24.8,89.6,49.8), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.2,-24.6,88.6,49.2), new cjs.Rectangle(-44,-24.4,88.1,49), new cjs.Rectangle(-43.8,-24.3,87.7,48.7), new cjs.Rectangle(-43.5,-24.2,87.2,48.4), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.1,-23.9,86.2,47.9), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-42.6,-23.6,85.3,47.3), new cjs.Rectangle(-42.3,-23.5,84.8,47.1), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-41.9,-23.2,83.9,46.6), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.4,-23,82.9,46.1), new cjs.Rectangle(-41.2,-22.8,82.4,45.8), new cjs.Rectangle(-40.9,-22.7,82,45.6), new cjs.Rectangle(-40.7,-22.6,81.5,45.3), new cjs.Rectangle(-40.5,-22.5,81,45), new cjs.Rectangle(-40.6,-22.5,81.3,45.2), new cjs.Rectangle(-40.7,-22.6,81.6,45.3), new cjs.Rectangle(-40.9,-22.7,81.9,45.5), new cjs.Rectangle(-41,-22.8,82.2,45.7), new cjs.Rectangle(-41.2,-22.9,82.5,45.8), new cjs.Rectangle(-41.3,-22.9,82.8,46), new cjs.Rectangle(-41.5,-23,83.1,46.2), new cjs.Rectangle(-41.6,-23.1,83.4,46.3), new cjs.Rectangle(-41.8,-23.2,83.7,46.5), new cjs.Rectangle(-41.9,-23.3,84,46.7), new cjs.Rectangle(-42.1,-23.4,84.3,46.8), new cjs.Rectangle(-42.2,-23.4,84.6,47), new cjs.Rectangle(-42.4,-23.5,84.9,47.2), new cjs.Rectangle(-42.5,-23.6,85.2,47.3), new cjs.Rectangle(-42.7,-23.7,85.5,47.5), new cjs.Rectangle(-42.8,-23.8,85.8,47.7), new cjs.Rectangle(-43,-23.9,86.1,47.8), new cjs.Rectangle(-43.1,-23.9,86.4,48), new cjs.Rectangle(-43.3,-24,86.7,48.2), new cjs.Rectangle(-43.4,-24.1,87,48.3), new cjs.Rectangle(-43.6,-24.2,87.3,48.5), new cjs.Rectangle(-43.7,-24.3,87.6,48.7), new cjs.Rectangle(-43.9,-24.4,87.9,48.8), new cjs.Rectangle(-44,-24.4,88.2,49), new cjs.Rectangle(-44.2,-24.5,88.5,49.2), new cjs.Rectangle(-44.3,-24.6,88.8,49.3), new cjs.Rectangle(-44.5,-24.7,89.1,49.5), new cjs.Rectangle(-44.6,-24.8,89.4,49.7), new cjs.Rectangle(-44.8,-24.9,89.7,49.8), new cjs.Rectangle(-45,-25,90,50)];


(lib.elsa_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// glasses
	this.glasses = new lib.elsa_glass();
	this.glasses.setTransform(110.3,71.6);

	this.timeline.addTween(cjs.Tween.get(this.glasses).wait(1));

	// accessory
	this.accessory = new lib.els_acc();
	this.accessory.setTransform(97,246.9,1,1,0,0,0,103.2,127.8);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// body
	this.instance = new lib.els_hfbraid_img();
	this.instance.setTransform(76.3,91.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// dress
	this.dress = new lib.els_dr();
	this.dress.setTransform(97,246.9,1,1,0,0,0,103.2,127.8);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// shoes
	this.shoes = new lib.els_sh();
	this.shoes.setTransform(106.2,546.9,1,1,0,0,0,30.5,34);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// body
	this.instance_1 = new lib.els_hf1_img();
	this.instance_1.setTransform(65.6,19.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// eyes
	this.instance_2 = new lib.els_eyes1();
	this.instance_2.setTransform(113.4,141.4,0.254,0.254,0,0,180,69.9,232.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// blush
	this.blush = new lib.els_rouge();
	this.blush.setTransform(114.7,73.1,0.254,0.254,0,0,0,141.9,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// shadows
	this.shadows = new lib.els_shads();
	this.shadows.setTransform(113.2,103,0.254,0.254,0,0,0,103.4,148);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.els_lips();
	this.lips.setTransform(107.4,127,0.254,0.254,0,0,0,23.4,119.7);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// body
	this.instance_3 = new lib.els_headmake1_img();
	this.instance_3.setTransform(73.4,29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// body
	this.instance_4 = new lib.els_bod_img();
	this.instance_4.setTransform(6.7,93.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// body
	this.instance_5 = new lib.els_hb0_img();
	this.instance_5.setTransform(68.5,36.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// dressSecond
	this.dressSecond = new lib.els_db();
	this.dressSecond.setTransform(97,246.9,1,1,0,0,0,103.2,127.8);

	this.timeline.addTween(cjs.Tween.get(this.dressSecond).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121.9,-40.4,428.9,629.2);
p.frameBounds = [rect];


(lib.elsa_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// braid
	this.instance = new lib.els_hfbraid_img();
	this.instance.setTransform(76.3,91.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// dr
	this.instance_1 = new lib.els_dr_main();
	this.instance_1.setTransform(97,246.9,1,1,0,0,0,103.2,127.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// sh
	this.instance_2 = new lib.elsa_sh3();
	this.instance_2.setTransform(67.7,512.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// hf
	this.instance_3 = new lib.els_hf1_img();
	this.instance_3.setTransform(65.6,19.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// eyes
	this.instance_4 = new lib.els_eyes1();
	this.instance_4.setTransform(113.4,141.4,0.254,0.254,0,0,180,69.9,232.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// rouge
	this.instance_5 = new lib.els_rouge1();
	this.instance_5.setTransform(72.5,30.5,0.254,0.254);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// shad
	this.instance_6 = new lib.elsa_shad3();
	this.instance_6.setTransform(87,56.4,0.254,0.254);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// lips
	this.instance_7 = new lib.elsa_lips3();
	this.instance_7.setTransform(101.4,96.6,0.254,0.254);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// head
	this.instance_8 = new lib.els_headmake1_img();
	this.instance_8.setTransform(73.4,29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// bod
	this.instance_9 = new lib.els_bod_img();
	this.instance_9.setTransform(6.7,93.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// hb
	this.instance_10 = new lib.els_hb0_img();
	this.instance_10.setTransform(68.5,36.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// drb
	this.instance_11 = new lib.elsa_drb1();
	this.instance_11.setTransform(67.8,38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121.9,-39.7,428.9,628.5);
p.frameBounds = [rect];


(lib.elsa_dress8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// elsa_dr1
	this.instance = new lib.elsa_dr8();
	this.instance.setTransform(-108.5,-222.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(8.5,-214);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.elsa_drb8();
	this.instance_2.setTransform(-17.5,-207.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-108.5,-240.5,240,452.9);
p.frameBounds = [rect];


(lib.elsa_dress7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// elsa_dr1
	this.instance = new lib.elsa_dr7();
	this.instance.setTransform(-107.5,-264);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(8.5,-214);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.elsa_drb7();
	this.instance_2.setTransform(-34.5,-223.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.5,-264,205,531);
p.frameBounds = [rect];


(lib.elsa_dress6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// elsa_dr1
	this.instance = new lib.elsa_dr6();
	this.instance.setTransform(-87.5,-213);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(8.5,-214);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.elsa_drb6();
	this.instance_2.setTransform(-24.5,-213.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-87.5,-240.5,195,453.6);
p.frameBounds = [rect];


(lib.elsa_dress5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// elsa_dr1
	this.instance = new lib.elsa_dr5();
	this.instance.setTransform(-124.5,-291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(8.5,-214);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.elsa_drb5();
	this.instance_2.setTransform(-30.5,-220.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-124.5,-291,242,568);
p.frameBounds = [rect];


(lib.elsa_dress4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// elsa_dr1
	this.instance = new lib.elsa_dr4();
	this.instance.setTransform(-126.5,-299);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(8.5,-214);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.elsa_drb4();
	this.instance_2.setTransform(-36.5,-223.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-126.5,-299,242,567);
p.frameBounds = [rect];


(lib.elsa_dress3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// elsa_dr1
	this.instance = new lib.elsa_dr3();
	this.instance.setTransform(-100.5,-267);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(8.5,-214);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.elsa_drb3();
	this.instance_2.setTransform(-37.5,-233.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.5,-267,196,514);
p.frameBounds = [rect];


(lib.elsa_dress2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// elsa_dr1
	this.instance = new lib.elsa_dr2();
	this.instance.setTransform(-102.5,-295);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(8.5,-214);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.elsa_drb2();
	this.instance_2.setTransform(-43.5,-220.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.5,-295,191,567);
p.frameBounds = [rect];


(lib.elsa_dress1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// elsa_dr1
	this.instance = new lib.elsa_dr1();
	this.instance.setTransform(-100.5,-267);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hanger1
	this.instance_1 = new lib.hanger1();
	this.instance_1.setTransform(8.5,-214);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.elsa_drb1();
	this.instance_2.setTransform(-31.5,-230.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.5,-267,201,534);
p.frameBounds = [rect];


(lib.els_make = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.els_makehf_img();
	this.instance.setTransform(280,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// eyes
	this.instance_1 = new lib.els_eyes1();
	this.instance_1.setTransform(468,493.6,1,1,0,0,180,69.8,232.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// blush
	this.blush = new lib.els_rouge();
	this.blush.setTransform(473.2,224.8,1,1,0,0,0,141.6,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// shadows
	this.shadows = new lib.els_shads();
	this.shadows.setTransform(466.9,342.3,1,1,0,0,0,102.7,148.1);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// lips
	this.lips = new lib.els_lips();
	this.lips.setTransform(466.9,342.3,1,1,0,0,0,46,24.8);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// body
	this.instance_2 = new lib.els_headmake_img();
	this.instance_2.setTransform(310.8,51.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// dress
	this.instance_3 = new lib.els_makedr_img();
	this.instance_3.setTransform(255.1,409.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// body
	this.instance_4 = new lib.els_bod2_img();
	this.instance_4.setTransform(86.2,307.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// body
	this.instance_5 = new lib.els_makehb_img();
	this.instance_5.setTransform(291.7,81);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(86.2,12,594,680);
p.frameBounds = [rect];


(lib.dress_8_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jasm_dress8();
	this.instance.setTransform(-7.4,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgBGAn/Iz2pwMAVhhG4ILrgDMAIGAlxMAAnApmIj1CCg");
	this.shape.setTransform(-33.2,246.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-167.4,-14.4,268.4,521.1);
p.frameBounds = [rect];


(lib.dress_8_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elsa_dress8();
	this.instance.setTransform(-8,240.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgFNAkjMgLYg3iIJCxjIMkAAILlU+MgKjA0Hg");
	this.shape.setTransform(10.2,228);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116.5,-5.9,240,468);
p.frameBounds = [rect];


(lib.dress_7_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jasm_dress7();
	this.instance.setTransform(-8,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgIfArWMgG8g0yIHj7qIJhnXIK4LQMAC7BNrg");
	this.shape.setTransform(7.7,221.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-134.5,-63.3,281,667.4);
p.frameBounds = [rect];


(lib.dress_7_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elsa_dress7();
	this.instance.setTransform(-8,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgCqAqFMgNng0OIMK/7IPMCfIFNdmMgKiA0Eg");
	this.shape.setTransform(-14.6,236.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-118.8,-32.7,208.5,539.8);
p.frameBounds = [rect];


(lib.dress_6_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jasm_dress6();
	this.instance.setTransform(-8,240.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgHMAh3MgIUg3sILHsRII7gGIK/dIMgBxAnRg");
	this.shape.setTransform(3.3,212.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-96,-6,198.6,437.8);
p.frameBounds = [rect];


(lib.dress_6_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elsa_dress6();
	this.instance.setTransform(-7.5,240.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgChAkKMgNNg1PILCzKIJHgCILVU2MgJkAzug");
	this.shape.setTransform(2.4,224.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-98.4,-7.3,201.6,464.6);
p.frameBounds = [rect];


(lib.dress_5_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jasm_dress5();
	this.instance.setTransform(-8,239.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("Av1trIJH3BIJvlXIHpIsMAFMBKmI5lA1g");
	this.shape.setTransform(-1.3,242.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-102.8,-26.3,203,538.5);
p.frameBounds = [rect];


(lib.dress_5_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elsa_dress5();
	this.instance.setTransform(-8,239.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgFHAs9MgKrg3EMAHMgg0ISliPMAF0AmzMgKXAzig");
	this.shape.setTransform(-13.8,228.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-132.5,-60.4,242,578.3);
p.frameBounds = [rect];


(lib.dress_4_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jasm_dress4();
	this.instance.setTransform(-7.5,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AukwdIIb6GIKjgpIFTFuMAE4AjoMgAeAsFI20A+g");
	this.shape.setTransform(11.3,228.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-81.9,-48.1,186.6,553.1);
p.frameBounds = [rect];


(lib.dress_4_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elsa_dress4();
	this.instance.setTransform(-8,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwMovIIE8yILkl6IIXFBMAEaAgFMgJMAxrIqOAGg");
	this.shape.setTransform(-12.2,221.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-134.5,-59,242,567);
p.frameBounds = [rect];


(lib.dress_3_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jasm_dress3();
	this.instance.setTransform(-8,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgIkAsiMgHrg2IIGR41IKEqGIMYJBMADyBQCg");
	this.shape.setTransform(-8.5,216.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112.5,-68.1,208.1,570.1);
p.frameBounds = [rect];


(lib.dress_3_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elsa_dress3();
	this.instance.setTransform(-8,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgA8Ap3MgPRg0CILJ/rIO7B1IGYdUMgAcAkDIriQhg");
	this.shape.setTransform(-12.5,228);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-116.4,-39.9,207.8,536);
p.frameBounds = [rect];


(lib.dress_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jasm_dress2();
	this.instance.setTransform(-7.5,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AxYdmMADLgr9IJg6kIORAfMAH1ApzMgDDAnYIy0ANg");
	this.shape.setTransform(-6.3,239.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-117.6,-22.5,222.6,524.2);
p.frameBounds = [rect];


(lib.dress_2_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elsa_dress2();
	this.instance.setTransform(-8,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AvYo4MAL+gj/IJcADMAJWAnHMgKbAyiInnADg");
	this.shape.setTransform(-14.5,225.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-112.9,-61.7,197,574.6);
p.frameBounds = [rect];


(lib.dress_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jasm_dress1();
	this.instance.setTransform(-7.5,239.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EgFtAopIpcsDMABEgn0IIj9mIO7AzMAFxAj8MgAoAs6g");
	this.shape.setTransform(-3.2,238.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100.2,-23.2,195.2,522.7);
p.frameBounds = [rect];


(lib.dress_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.elsa_dress1();
	this.instance.setTransform(-8,239.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwNrfIMG+vIN/BpMAGWAgZMgJWAyYIrEADg");
	this.shape.setTransform(-7.6,236.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-111.5,-33.7,207.8,540.6);
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


(lib.blush_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.6,0.6,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-24,-24,48,48);
p.frameBounds = [rect];


(lib.bg_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.pillows_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-214.7,-134.7,429.4,269.4);
p.frameBounds = [rect];


(lib.animation_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.instance = new lib.title_mc();
	this.instance.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.bg_title_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-230,-140,460,280);
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


(lib.accessory_2_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jas_acc2();
	this.instance.setTransform(0,0.1,1,1,0,0,0,55.8,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AqaL0IhS0pINMk4IIGFdICHMWIyfJpg");
	this.shape.setTransform(16.8,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.9,-94.1,168.7,192.4);
p.frameBounds = [rect];


(lib.accessory_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.substrate_mc = new lib.remove_1_mc();
	this.substrate_mc.setTransform(0.1,0,0.4,0.4,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.substrate_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16,-16,32,32);
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
	this.instance.setTransform(600,300);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.41},0).wait(1).to({alpha:0.609},0).wait(1).to({alpha:0.801},0).wait(1).to({alpha:1},0).wait(10).to({alpha:0.91},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.73},0).wait(1).to({alpha:0.641},0).wait(1).to({alpha:0.551},0).wait(1).to({alpha:0.461},0).wait(1).to({alpha:0.371},0).wait(1).to({alpha:0.281},0).wait(1).to({alpha:0.191},0).wait(1).to({alpha:0.102},0).wait(1).to({alpha:0.012},0).to({_off:true},1).wait(20));

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
p.frameBounds = [rect, rect, new cjs.Rectangle(-944.4,0,3088.9,600), new cjs.Rectangle(-888.9,0,2977.8,600), new cjs.Rectangle(-833.3,0,2866.7,600), new cjs.Rectangle(-777.7,0,2755.5,600), new cjs.Rectangle(-722.2,0,2644.4,600), new cjs.Rectangle(-666.6,0,2533.3,600), new cjs.Rectangle(-611.1,0,2422.2,600), new cjs.Rectangle(-555.5,0,2311.1,600), new cjs.Rectangle(-500,0,2200,600), new cjs.Rectangle(-444.4,0,2088.9,600), new cjs.Rectangle(-388.9,0,1977.8,600), new cjs.Rectangle(-333.3,0,1866.7,600), new cjs.Rectangle(-277.7,0,1755.5,600), new cjs.Rectangle(-222.2,0,1644.5,600), new cjs.Rectangle(-166.6,0,1533.3,600), new cjs.Rectangle(-111.1,0,1422.2,600), new cjs.Rectangle(-55.5,0,1311.1,600), rect=new cjs.Rectangle(0,0,1200,600), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-33.3,0,1266.7,600), new cjs.Rectangle(-66.6,0,1333.3,600), new cjs.Rectangle(-100,0,1400,600), new cjs.Rectangle(-133.3,0,1466.7,600), new cjs.Rectangle(-166.6,0,1533.3,600), new cjs.Rectangle(-200,0,1600,600), new cjs.Rectangle(-233.3,0,1666.7,600), new cjs.Rectangle(-266.6,0,1733.3,600), new cjs.Rectangle(-300,0,1800,600), new cjs.Rectangle(-333.3,0,1866.7,600), new cjs.Rectangle(-366.6,0,1933.3,600), new cjs.Rectangle(-400,0,2000,600), new cjs.Rectangle(-433.3,0,2066.7,600), new cjs.Rectangle(-466.6,0,2133.3,600), new cjs.Rectangle(-500,0,2200,600), new cjs.Rectangle(-533.3,0,2266.7,600), new cjs.Rectangle(-566.6,0,2333.3,600), new cjs.Rectangle(-600,0,2400,600), new cjs.Rectangle(-633.3,0,2466.7,600), new cjs.Rectangle(-666.6,0,2533.3,600), new cjs.Rectangle(-700,0,2600,600), new cjs.Rectangle(-733.3,0,2666.7,600), new cjs.Rectangle(-766.6,0,2733.3,600), new cjs.Rectangle(-800,0,2800,600), new cjs.Rectangle(-833.3,0,2866.7,600), new cjs.Rectangle(-866.6,0,2933.3,600), new cjs.Rectangle(-900,0,3000,600), new cjs.Rectangle(-933.3,0,3066.7,600), new cjs.Rectangle(-966.6,0,3133.3,600), rect=new cjs.Rectangle(-1000,0,3200,600), rect];


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


(lib.snowfall_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2017 edapskov v 1.0
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
		_createSnowflakesFunc(10);
		/*
		функция, создающая пузыри
		*/
		function _createSnowflakesFunc(snowflakes_num) 
		{
			/*
			переменные
			*/
			var randomScale_num;
			var i = 0;
			/*
			цикл
			*/
			while (i < snowflakes_num) 
			{
				/*
				создаём пузырь
				*/
				var snowflake_mc = new lib.Snowflake();
				container_mc.addChild(snowflake_mc);
				snowflake_mc.gotoAndStop(0);
				snowflake_mc.rad = Math.random() * _CURRENT_NUM - Math.random() * _CURRENT_NUM;
				randomScale_num = Math.random() * (1 - 0.5) + 0.5;
				snowflake_mc.scaleX = randomScale_num;
				snowflake_mc.scaleY = randomScale_num;
				snowflake_mc.alpha = randomScale_num;
				snowflake_mc.x = Math.random() * _containerBounds_rect.width;
				snowflake_mc.y = Math.random() * _containerBounds_rect.height;
				snowflake_mc.addEventListener("tick", _onTickSnowflakeFunc, false);
				/*
				обновление итератора
				*/
				i++;
			}
		}
		/*
		обновляем в каждом кадре
		*/
		function _onTickSnowflakeFunc(event)
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
			target_mc.y += _SPEED_NUM;
			target_mc.rotation += 0.1;
			/*
			если пузырь уходит за границы, то исправляем это
			*/
			if (target_mc.y >= _containerBounds_rect.height)
			{
				target_mc.y = _BUBBLE_DIAMETER_NUM;
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

	// snowfall
	this.instance = new lib.Snowflake();
	this.instance.setTransform(400,650);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// container
	this.container_mc = new lib.snowfall_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,659);
p.frameBounds = [rect];


(lib.snowfall_1_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		* @author edapskov
		* @copyright 2017 edapskov v 1.0
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
		_createSnowflakesFunc(4);
		/*
		функция, создающая пузыри
		*/
		function _createSnowflakesFunc(snowflakes_num) 
		{
			/*
			переменные
			*/
			var randomScale_num;
			var i = 0;
			/*
			цикл
			*/
			while (i < snowflakes_num) 
			{
				/*
				создаём пузырь
				*/
				var snowflake_mc = new lib.Snowflake_2();
				container_mc.addChild(snowflake_mc);
				snowflake_mc.gotoAndStop(0);
				snowflake_mc.rad = Math.random() * _CURRENT_NUM - Math.random() * _CURRENT_NUM;
				randomScale_num = Math.random() * (1 - 0.5) + 0.5;
				snowflake_mc.scaleX = randomScale_num;
				snowflake_mc.scaleY = randomScale_num;
				snowflake_mc.alpha = randomScale_num;
				snowflake_mc.x = Math.random() * _containerBounds_rect.width;
				snowflake_mc.y = Math.random() * _containerBounds_rect.height;
				snowflake_mc.addEventListener("tick", _onTickSnowflakeFunc, false);
				/*
				обновление итератора
				*/
				i++;
			}
		}
		/*
		обновляем в каждом кадре
		*/
		function _onTickSnowflakeFunc(event)
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
			target_mc.y += _SPEED_NUM;
			target_mc.rotation += 0.1;
			/*
			если пузырь уходит за границы, то исправляем это
			*/
			if (target_mc.y >= _containerBounds_rect.height)
			{
				target_mc.y = _BUBBLE_DIAMETER_NUM;
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

	// snowfall
	this.instance = new lib.Snowflake_2();
	this.instance.setTransform(400,650);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// container
	this.container_mc = new lib.snowfall_2_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.container_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,695);
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
p.nominalBounds = rect = new cjs.Rectangle(-18,-18,36,36);
p.frameBounds = [rect];


(lib.explosion_1_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		@author edapskov
		@copyright 2018 edapskov v 1.0
		*/
		this.gotoAndStop(0);
		this.mouseEnabled = false;
		this.mouseChildren = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// body
	this.body_mc = new lib.explosion_0_1_mc();
	this.body_mc.setTransform(0,0,2.857,2.857);

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-92.8,200,185.7);
p.frameBounds = [rect];


(lib.blinking_star_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_star_1_mc();
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.012},14).to({scaleX:1,scaleY:1,alpha:0.5},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect, new cjs.Rectangle(-44.3,-44.3,88.7,88.7), new cjs.Rectangle(-43.7,-43.7,87.5,87.5), new cjs.Rectangle(-43,-43,86.2,86.2), new cjs.Rectangle(-42.4,-42.4,84.9,84.9), new cjs.Rectangle(-41.7,-41.7,83.6,83.6), new cjs.Rectangle(-41.1,-41.1,82.3,82.3), new cjs.Rectangle(-40.5,-40.5,81,81), new cjs.Rectangle(-39.8,-39.8,79.7,79.7), new cjs.Rectangle(-39.2,-39.2,78.5,78.5), new cjs.Rectangle(-38.5,-38.5,77.2,77.2), new cjs.Rectangle(-37.9,-37.9,75.9,75.9), new cjs.Rectangle(-37.2,-37.2,74.6,74.6), new cjs.Rectangle(-36.6,-36.6,73.3,73.3), new cjs.Rectangle(-36,-36,72,72), new cjs.Rectangle(-36.5,-36.5,73.2,73.2), new cjs.Rectangle(-37.1,-37.1,74.4,74.4), new cjs.Rectangle(-37.7,-37.7,75.6,75.6), new cjs.Rectangle(-38.3,-38.3,76.8,76.8), new cjs.Rectangle(-38.9,-38.9,78,78), new cjs.Rectangle(-39.5,-39.5,79.2,79.2), new cjs.Rectangle(-40.1,-40.1,80.4,80.4), new cjs.Rectangle(-40.7,-40.7,81.6,81.6), new cjs.Rectangle(-41.3,-41.3,82.8,82.8), new cjs.Rectangle(-41.9,-41.9,84,84), new cjs.Rectangle(-42.5,-42.5,85.2,85.2), new cjs.Rectangle(-43.1,-43.1,86.4,86.4), new cjs.Rectangle(-43.7,-43.7,87.6,87.6), new cjs.Rectangle(-44.3,-44.3,88.8,88.8), new cjs.Rectangle(-45,-45,90,90)];


(lib.blinking_light_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_light_1_mc();
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,alpha:0.012},14).to({scaleX:1,scaleY:1,alpha:0.5},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32,-32,64,64);
p.frameBounds = [rect, new cjs.Rectangle(-31.5,-31.5,63.1,63.1), new cjs.Rectangle(-31,-31,62.2,62.2), new cjs.Rectangle(-30.6,-30.6,61.3,61.3), new cjs.Rectangle(-30.1,-30.1,60.4,60.4), new cjs.Rectangle(-29.7,-29.7,59.5,59.5), new cjs.Rectangle(-29.2,-29.2,58.5,58.5), new cjs.Rectangle(-28.8,-28.8,57.6,57.6), new cjs.Rectangle(-28.3,-28.3,56.7,56.7), new cjs.Rectangle(-27.8,-27.8,55.8,55.8), new cjs.Rectangle(-27.4,-27.4,54.9,54.9), new cjs.Rectangle(-26.9,-26.9,54,54), new cjs.Rectangle(-26.5,-26.5,53.1,53.1), new cjs.Rectangle(-26,-26,52.1,52.1), new cjs.Rectangle(-25.6,-25.6,51.2,51.2), new cjs.Rectangle(-26,-26,52.1,52.1), new cjs.Rectangle(-26.4,-26.4,52.9,52.9), new cjs.Rectangle(-26.8,-26.8,53.8,53.8), new cjs.Rectangle(-27.3,-27.3,54.6,54.6), new cjs.Rectangle(-27.7,-27.7,55.5,55.5), new cjs.Rectangle(-28.1,-28.1,56.3,56.3), new cjs.Rectangle(-28.5,-28.5,57.2,57.2), new cjs.Rectangle(-29,-29,58,58), new cjs.Rectangle(-29.4,-29.4,58.9,58.9), new cjs.Rectangle(-29.8,-29.8,59.8,59.8), new cjs.Rectangle(-30.2,-30.2,60.6,60.6), new cjs.Rectangle(-30.7,-30.7,61.5,61.5), new cjs.Rectangle(-31.1,-31.1,62.3,62.3), new cjs.Rectangle(-31.5,-31.5,63.2,63.2), new cjs.Rectangle(-32,-32,64,64)];


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
	this.instance.setTransform(7,0,0.4,0.4);

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

	// decor
	this.instance = new lib.snow_logo_mc();
	this.instance.setTransform(0,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak2F3QgagPgdgZIABAAQh0hjg1hFIgFgIIgCgBIgKgOIgBgCQgpAyhWBFQgWASgTALQgNAHgNgFQgWgGgZgLQhmgyg0gnQg7gvgmg1QgWgfgNggQgPgggEgiQgLhiA/g0QAnghA2gGQAdgEAaAEQAbgJAfgDQAjgEAjADQAWACAVAFQAjgZA0gGIAAAAIACAAIAKgBIACAAIADAAQAeg8A+gcQA/geBHAKQBSANAyAuQAkAgAZA2QAmgsAsgVIAAAAQA+gfBPANQBIAKAzAvQAPAOAMAPQAwAJAdAbQAXAVAQAiQAYgcAdgOQAegOAlABIgDgHIgCgNIAAgBIAAgBIgBgDIAAgBQgGg2AigcQAWgSAdgEQAhgDAZANQASAJAPASQAKgWAQgMIgBAAQAWgTAhgDQAdgEAZANQApATAGA2IAAADIABAOIAAAFIAHgIIA/gsIADgBIACgBIAIgDQA4gXA6ANQAxAJAjAkQAYAYARAlIAFAKIAAADQAKAZAGAcIAAABIACAPIAAAAQAEAlgEAqIgBALQgJBIgiBNQgeBDhLBnQgSAagTASQgLALgPgBQgaAAgfgGIAAAAQh+gXhDgcQhOghg5gvQgigdgZggIgaAVIgBAAIAEAIQABAFgKADQgIACgLgBQgqAZhDAeQgXAKgSAFQgMADgKgGQgRgKgTgQQgogjgcgcQgFAGgFACQgRAGgQAEQgiAhgoAfIgBAAIgBABQhGAyiJA9QgiAPgeAIIgLACQgMAAgLgHg");

	// animation
	this.instance_1 = new lib.beam_light_0_mc();
	this.instance_1.setTransform(-220,0,1,1,30);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({regX:-0.1,regY:0.1,scaleX:0.53,scaleY:0.53,x:-200.1},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:29.9,x:0},15).to({regX:0.1,regY:-0.1,scaleX:0.53,scaleY:0.53,rotation:30,x:200.1},15).wait(1));

	// graph
	this.instance_2 = new lib.logo_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-74,290,114);
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
	this.instance.setTransform(0,100,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.banner_2_img();
	this.instance_1.setTransform(-87,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDUUMAAAgomIcHAAMAAAAomg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-130,180,275);
p.frameBounds = [rect];


(lib.banner_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.instance = new lib.banner_play_0_mc();
	this.instance.setTransform(0,100,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// graph
	this.instance_1 = new lib.banner_1_img();
	this.instance_1.setTransform(-87,-130,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AuDUTMAAAgolIcHAAMAAAAolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-90,-130,180,275);
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


(lib.prev_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(133.3,0,0.889,0.889,0,0,180,-150,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-80,-225.7,426.5,451.4);
p.frameBounds = [rect];


(lib.prev_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();
	this.instance.setTransform(-0.9,0,0.75,0.75,0,0,180,1.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-60,-190.5,352.5,381.1);
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


(lib.photo_frame_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.photo_frame_1_1_mc();
	this.instance.setTransform(-0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAXdrIgXgWIgWAWI0VAAMAAAg7VMApXAAAMAAAA7Vg");

	// graph
	this.hero_2 = new lib.jas_make();
	this.hero_2.setTransform(43,42.3,1,1,0,0,180,357.4,308.7);

	this.hero_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

	// bg
	this.instance_1 = new lib.photo_frame_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-210,310,420);
p.frameBounds = [rect];


(lib.photo_frame_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.instance = new lib.photo_frame_1_1_mc();
	this.instance.setTransform(-0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAXdrIgXgWIgWAWI0VAAMAAAg7VMApXAAAMAAAA7Vg");

	// graph
	this.hero_1 = new lib.els_make();
	this.hero_1.setTransform(-342.9,1.6,1,1,0,0,0,125.7,260.1);

	this.hero_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

	// bg
	this.instance_1 = new lib.photo_frame_2_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155,-210,310,420);
p.frameBounds = [rect];


(lib.next_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_mc();
	this.instance.setTransform(-133.3,0,0.889,0.889,0,0,0,-150,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-346.5,-225.7,426.5,451.4);
p.frameBounds = [rect];


(lib.next_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// graph
	this.instance = new lib.nav_2_mc();
	this.instance.setTransform(0.9,0,0.75,0.75,0,0,0,1.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-292.4,-190.5,352.5,381.1);
p.frameBounds = [rect];


(lib.jasmine_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// glasses
	this.glasses = new lib.jas_glasses();
	this.glasses.setTransform(95.8,63.8);

	this.timeline.addTween(cjs.Tween.get(this.glasses).wait(1));

	// accessory
	this.accessory = new lib.jas_acc();
	this.accessory.setTransform(151.6,276,1,1,0,0,0,90.8,79.4);

	this.timeline.addTween(cjs.Tween.get(this.accessory).wait(1));

	// dress
	this.dress = new lib.jas_dr();
	this.dress.setTransform(96.8,255.5,1,1,0,0,0,96.8,255.5);

	this.timeline.addTween(cjs.Tween.get(this.dress).wait(1));

	// body
	this.instance = new lib.jas_hf0_img();
	this.instance.setTransform(57.7,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shoes
	this.shoes = new lib.jas_sh();
	this.shoes.setTransform(134.4,537.3,1,1,0,0,0,86.4,24.8);

	this.timeline.addTween(cjs.Tween.get(this.shoes).wait(1));

	// eyes
	this.instance_1 = new lib.jas_eyesbl();
	this.instance_1.setTransform(103,121,0.227,0.227,0,0,0,69.7,232.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// shadows
	this.shadows = new lib.jas_shads();
	this.shadows.setTransform(98.5,87.9,0.227,0.227,0,0,0,104.2,138.1);

	this.timeline.addTween(cjs.Tween.get(this.shadows).wait(1));

	// blush
	this.blush = new lib.jas_rouge();
	this.blush.setTransform(97.3,75.5,0.227,0.227,0,0,0,109.2,45.4);

	this.timeline.addTween(cjs.Tween.get(this.blush).wait(1));

	// lips
	this.lips = new lib.jas_lips();
	this.lips.setTransform(93.6,96.3,0.227,0.227,0,0,0,42.1,24.2);

	this.timeline.addTween(cjs.Tween.get(this.lips).wait(1));

	// body
	this.instance_2 = new lib.jashead_make1_img();
	this.instance_2.setTransform(65.2,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// body
	this.instance_3 = new lib.jas_bod_img();
	this.instance_3.setTransform(15.8,92.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// body
	this.instance_4 = new lib.jas_hb1_img();
	this.instance_4.setTransform(67.1,24.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// dressSecond
	this.dressSecond = new lib.jas_drb();
	this.dressSecond.setTransform(96.8,255.5,1,1,0,0,0,96.8,255.5);

	this.timeline.addTween(cjs.Tween.get(this.dressSecond).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.8,-47,354.1,611.4);
p.frameBounds = [rect];


(lib.jasmine_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// acc
	this.instance = new lib.jas_acc_main();
	this.instance.setTransform(151.6,276,1,1,0,0,0,90.8,79.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// dr
	this.instance_1 = new lib.jas_dr_main();
	this.instance_1.setTransform(96.8,255.5,1,1,0,0,0,96.8,255.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// hf
	this.instance_2 = new lib.jas_hf0_img();
	this.instance_2.setTransform(57.7,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// sh
	this.instance_3 = new lib.jas_shoes1_img();
	this.instance_3.setTransform(48,512.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// eyes
	this.instance_4 = new lib.jas_eyesbl();
	this.instance_4.setTransform(103,121,0.227,0.227,0,0,0,69.7,232.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// shad
	this.instance_5 = new lib.jas_shadows1();
	this.instance_5.setTransform(71.9,50.6,0.227,0.227);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// rouge
	this.instance_6 = new lib.jasmine_rouge1();
	this.instance_6.setTransform(59.8,49,0.227,0.227);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// lips
	this.instance_7 = new lib.jasmine_lips2();
	this.instance_7.setTransform(84.1,90.8,0.227,0.227);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// head
	this.instance_8 = new lib.jashead_make1_img();
	this.instance_8.setTransform(65.2,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// body
	this.instance_9 = new lib.jas_bod_img();
	this.instance_9.setTransform(15.8,92.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// hb
	this.instance_10 = new lib.jas_hb1_img();
	this.instance_10.setTransform(67.1,24.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// drb
	this.instance_11 = new lib.jasmine_drb1();
	this.instance_11.setTransform(68,24.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-78.8,-47,383.7,611.4);
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
	this.hero_1 = new lib.elsa_mc();
	this.hero_1.setTransform(320.7,274.1,1,1,0,0,0,125.7,260.1);

	this.hero_2 = new lib.jasmine_mc();
	this.hero_2.setTransform(511.4,267.7,1,1,0,0,0,106.4,235.7);

	this.container_1_mc = new lib.photo_frame_1_mc();
	this.container_1_mc.setTransform(290,260);

	this.container_2_mc = new lib.photo_frame_2_mc();
	this.container_2_mc.setTransform(290,260);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hero_2,p:{x:511.4,y:267.7}},{t:this.hero_1,p:{x:320.7,y:274.1}}]}).to({state:[{t:this.hero_1,p:{x:565.7,y:280.1}},{t:this.container_1_mc}]},1).to({state:[{t:this.hero_2,p:{x:546.4,y:270.7}},{t:this.container_2_mc}]},1).to({state:[{t:this.hero_2,p:{x:306.4,y:267.7}},{t:this.hero_1,p:{x:525.7,y:274.1}}]},1).to({state:[{t:this.hero_2,p:{x:416.4,y:270.7}}]},1).to({state:[{t:this.hero_1,p:{x:420.7,y:280.1}}]},1).to({state:[{t:this.hero_2,p:{x:511.4,y:267.7}},{t:this.hero_1,p:{x:320.7,y:274.1}}]},1).to({state:[{t:this.hero_1,p:{x:420.7,y:280.1}}]},1).to({state:[{t:this.hero_2,p:{x:416.4,y:270.7}}]},1).to({state:[{t:this.hero_2,p:{x:306.4,y:267.7}},{t:this.hero_1,p:{x:525.7,y:274.1}}]},1).to({state:[{t:this.hero_2,p:{x:416.4,y:270.7}}]},1).to({state:[{t:this.hero_1,p:{x:420.7,y:280.1}}]},1).to({state:[{t:this.hero_2,p:{x:511.4,y:267.7}},{t:this.hero_1,p:{x:320.7,y:274.1}}]},1).to({state:[{t:this.hero_1,p:{x:420.7,y:280.1}}]},1).to({state:[{t:this.hero_2,p:{x:416.4,y:270.7}}]},1).wait(1));

	// bg
	this.instance = new lib.background_4_img();
	this.instance.setTransform(-200,0);

	this.instance_1 = new lib.background_5_img();
	this.instance_1.setTransform(-200,0);

	this.instance_2 = new lib.background_1_img();
	this.instance_2.setTransform(-200,0);

	this.instance_3 = new lib.background_6_img();
	this.instance_3.setTransform(-200,0);

	this.instance_4 = new lib.background_2_img();
	this.instance_4.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-26.4,1200,629.2);
p.frameBounds = [rect, new cjs.Rectangle(-200,-20.4,1200,713.9), new cjs.Rectangle(-200,-12,1200,613.5), new cjs.Rectangle(-200,-26.4,1200,629.2), new cjs.Rectangle(-200,-12,1200,612), new cjs.Rectangle(-200,-20.4,1200,629.2), new cjs.Rectangle(-200,-26.4,1200,629.2), new cjs.Rectangle(-200,-20.4,1200,629.2), new cjs.Rectangle(-200,-12,1200,612), new cjs.Rectangle(-200,-26.4,1200,629.2), new cjs.Rectangle(-200,-12,1200,612), new cjs.Rectangle(-200,-20.4,1200,629.2), new cjs.Rectangle(-200,-26.4,1200,629.2), new cjs.Rectangle(-200,-20.4,1200,629.2), new cjs.Rectangle(-200,-12,1200,612)];


(lib.heroes_0_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.elsa_main();
	this.instance.setTransform(555.7,280.1,1,1,0,0,0,125.7,260.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({x:915.7,alpha:0},20).wait(80).to({x:545.7,alpha:1},16).to({x:555.7},4).wait(1));

	// animation
	this.instance_1 = new lib.jasmine_main();
	this.instance_1.setTransform(896.4,265.7,1,1,0,0,0,106.4,235.7);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69).to({x:506.4,alpha:1},15).to({x:516.4},5).wait(60).to({x:896.4,alpha:0},20).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(308.1,-19.7,786.8,628.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(448.7,-17,646.2,619.9), new cjs.Rectangle(466.7,-17,628.2,619.9), new cjs.Rectangle(484.7,-17,610.2,619.9), new cjs.Rectangle(502.7,-17,592.2,619.9), new cjs.Rectangle(520.7,-17,574.2,619.9), new cjs.Rectangle(538.7,-17,556.2,619.9), new cjs.Rectangle(556.7,-17,538.2,619.9), new cjs.Rectangle(574.7,-17,520.2,619.9), new cjs.Rectangle(592.7,-17,502.2,619.9), new cjs.Rectangle(610.7,-17,484.2,619.9), new cjs.Rectangle(628.7,33.3,410.6,569.7), new cjs.Rectangle(646.7,33.3,366.6,569.7), new cjs.Rectangle(664.7,33.3,322.6,569.7), new cjs.Rectangle(673.6,33.3,287.7,569.7), new cjs.Rectangle(647.6,33.3,287.7,569.7), new cjs.Rectangle(621.6,33.3,292.1,569.7), new cjs.Rectangle(595.6,33.3,336.1,569.7), new cjs.Rectangle(569.6,33.3,380.1,569.7), new cjs.Rectangle(543.6,33.3,424.1,569.7), new cjs.Rectangle(517.6,-19.7,579.4,628.5), new cjs.Rectangle(491.6,-19.7,605.4,628.5), new cjs.Rectangle(465.6,-19.7,631.4,628.5), new cjs.Rectangle(439.6,-19.7,657.4,628.5), new cjs.Rectangle(413.6,-19.7,683.4,628.5), new cjs.Rectangle(321.2,-19.7,775.8,628.5), new cjs.Rectangle(389.6,-19.7,707.4,628.5), new cjs.Rectangle(391.6,-19.7,705.4,628.5), new cjs.Rectangle(393.6,-19.7,703.4,628.5), new cjs.Rectangle(395.6,-19.7,701.4,628.5), rect=new cjs.Rectangle(331.2,-19.7,765.8,628.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(416.6,-19.7,680.4,628.5), new cjs.Rectangle(435.6,-19.7,661.4,628.5), new cjs.Rectangle(454.6,-19.7,642.4,628.5), new cjs.Rectangle(473.6,-19.7,623.4,628.5), new cjs.Rectangle(492.6,-19.7,604.4,628.5), new cjs.Rectangle(511.6,-19.7,585.4,628.5), new cjs.Rectangle(530.6,-19.7,566.4,628.5), new cjs.Rectangle(549.6,-19.7,547.4,628.5), new cjs.Rectangle(568.6,-19.7,528.4,628.5), new cjs.Rectangle(587.6,-19.7,509.4,628.5), new cjs.Rectangle(606.6,33.3,356,569.7), new cjs.Rectangle(625.6,33.3,313.9,569.7), new cjs.Rectangle(644.6,33.3,287.7,569.7), new cjs.Rectangle(663.6,33.3,287.7,569.7), new cjs.Rectangle(675.1,33.3,295.3,569.7), new cjs.Rectangle(652,33.3,337.3,569.7), new cjs.Rectangle(628.9,33.3,379.4,569.7), new cjs.Rectangle(605.7,33.3,421.6,569.7), new cjs.Rectangle(582.6,33.3,463.8,569.7), new cjs.Rectangle(559.5,-17,535.5,619.9), new cjs.Rectangle(536.3,-17,558.6,619.9), new cjs.Rectangle(513.2,-17,581.7,619.9), new cjs.Rectangle(490.1,-17,604.8,619.9), new cjs.Rectangle(467,-17,628,619.9), new cjs.Rectangle(443.9,-17,651.1,619.9), new cjs.Rectangle(298.1,-19.7,796.8,628.5), new cjs.Rectangle(423.2,-17,671.7,619.9), new cjs.Rectangle(425.7,-17,669.2,619.9), new cjs.Rectangle(428.2,-17,666.7,619.9), new cjs.Rectangle(308.1,-19.7,786.8,628.5)];


(lib.closet_makeup_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(190,-300);

	this.shadows_1 = new lib.shadows_1_mc();
	this.shadows_1.setTransform(190,-300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[]},1).to({state:[{t:this.shadows_1}]},1).wait(1));

	// options
	this.blush_6 = new lib.blush_6_2_mc();
	this.blush_6.setTransform(290,95);

	this.blush_5 = new lib.blush_5_2_mc();
	this.blush_5.setTransform(290,-55);

	this.blush_4 = new lib.blush_4_2_mc();
	this.blush_4.setTransform(290,-205);

	this.blush_3 = new lib.blush_3_2_mc();
	this.blush_3.setTransform(-290,95);

	this.blush_2 = new lib.blush_2_2_mc();
	this.blush_2.setTransform(-290,-55);

	this.blush_1 = new lib.blush_1_2_mc();
	this.blush_1.setTransform(-290,-205);

	this.lips_6 = new lib.lips_6_2_mc();
	this.lips_6.setTransform(-290,-230);

	this.lips_5 = new lib.lips_5_2_mc();
	this.lips_5.setTransform(260,-85);

	this.lips_4 = new lib.lips_4_2_mc();
	this.lips_4.setTransform(290,-230);

	this.lips_3 = new lib.lips_3_2_mc();
	this.lips_3.setTransform(-230,63);

	this.lips_2 = new lib.lips_2_2_mc();
	this.lips_2.setTransform(-260,-85);

	this.lips_1 = new lib.lips_1_2_mc();
	this.lips_1.setTransform(230,63);

	this.shadows_7 = new lib.shadows_7_2_mc();
	this.shadows_7.setTransform(290,90);

	this.shadows_6 = new lib.shadows_6_2_mc();
	this.shadows_6.setTransform(290,-60);

	this.shadows_5 = new lib.shadows_5_2_mc();
	this.shadows_5.setTransform(290,-210);

	this.shadows_4 = new lib.shadows_4_2_mc();
	this.shadows_4.setTransform(-290,90);

	this.shadows_3 = new lib.shadows_3_2_mc();
	this.shadows_3.setTransform(-290,-60);

	this.shadows_2 = new lib.shadows_2_2_mc();
	this.shadows_2.setTransform(-290,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4},{t:this.blush_5},{t:this.blush_6}]}).to({state:[{t:this.lips_1},{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6}]},1).to({state:[{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6},{t:this.shadows_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,-324,700,479);
p.frameBounds = [rect, new cjs.Rectangle(-340,-300,680,433), new cjs.Rectangle(-370,-324,740,474)];


(lib.closet_makeup_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.blush_0 = new lib.blush_0_mc();
	this.blush_0.setTransform(190,-300);

	this.lips_1 = new lib.lips_1_mc();
	this.lips_1.setTransform(190,-300);

	this.shadows_1 = new lib.shadows_1_mc();
	this.shadows_1.setTransform(190,-300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_0}]}).to({state:[{t:this.lips_1}]},1).to({state:[{t:this.shadows_1}]},1).wait(1));

	// options
	this.blush_6 = new lib.blush_6_1_mc();
	this.blush_6.setTransform(290,95);

	this.blush_5 = new lib.blush_5_1_mc();
	this.blush_5.setTransform(290,-55);

	this.blush_4 = new lib.blush_4_1_mc();
	this.blush_4.setTransform(290,-205);

	this.blush_3 = new lib.blush_3_1_mc();
	this.blush_3.setTransform(-290,95);

	this.blush_2 = new lib.blush_2_1_mc();
	this.blush_2.setTransform(-290,-55);

	this.blush_1 = new lib.blush_1_1_mc();
	this.blush_1.setTransform(-290,-205);

	this.lips_7 = new lib.lips_7_1_mc();
	this.lips_7.setTransform(230,63);

	this.lips_6 = new lib.lips_6_1_mc();
	this.lips_6.setTransform(260,-85);

	this.lips_5 = new lib.lips_5_1_mc();
	this.lips_5.setTransform(290,-230);

	this.lips_4 = new lib.lips_4_1_mc();
	this.lips_4.setTransform(-230,63);

	this.lips_3 = new lib.lips_3_1_mc();
	this.lips_3.setTransform(-260,-85);

	this.lips_2 = new lib.lips_2_1_mc();
	this.lips_2.setTransform(-290,-230);

	this.shadows_7 = new lib.shadows_7_1_mc();
	this.shadows_7.setTransform(290,90);

	this.shadows_6 = new lib.shadows_6_1_mc();
	this.shadows_6.setTransform(290,-60);

	this.shadows_5 = new lib.shadows_5_1_mc();
	this.shadows_5.setTransform(290,-210);

	this.shadows_4 = new lib.shadows_4_1_mc();
	this.shadows_4.setTransform(-290,90);

	this.shadows_3 = new lib.shadows_3_1_mc();
	this.shadows_3.setTransform(-290,-60);

	this.shadows_2 = new lib.shadows_2_1_mc();
	this.shadows_2.setTransform(-290,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.blush_1},{t:this.blush_2},{t:this.blush_3},{t:this.blush_4},{t:this.blush_5},{t:this.blush_6}]}).to({state:[{t:this.lips_2},{t:this.lips_3},{t:this.lips_4},{t:this.lips_5},{t:this.lips_6},{t:this.lips_7}]},1).to({state:[{t:this.shadows_2},{t:this.shadows_3},{t:this.shadows_4},{t:this.shadows_5},{t:this.shadows_6},{t:this.shadows_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,-324,700,479);
p.frameBounds = [rect, new cjs.Rectangle(-340,-324,680,457), new cjs.Rectangle(-370,-324,740,474)];


(lib.closet_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.shoes_0 = new lib.shoes_0_mc();
	this.shoes_0.setTransform(221,100);

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(221,-90);

	this.glasses_0 = new lib.glasses_0_mc();
	this.glasses_0.setTransform(221,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.glasses_0},{t:this.accessory_0},{t:this.shoes_0}]},4).wait(1));

	// options
	this.dress_2 = new lib.dress_2_2_mc();
	this.dress_2.setTransform(80,-252);

	this.dress_1 = new lib.dress_1_2_mc();
	this.dress_1.setTransform(-80,-252);

	this.dress_3 = new lib.dress_3_2_mc();
	this.dress_3.setTransform(-80,-252);

	this.dress_4 = new lib.dress_4_2_mc();
	this.dress_4.setTransform(80,-252);

	this.dress_7 = new lib.dress_7_2_mc();
	this.dress_7.setTransform(-80,-252);

	this.dress_8 = new lib.dress_8_2_mc();
	this.dress_8.setTransform(80,-252);

	this.dress_6 = new lib.dress_6_2_mc();
	this.dress_6.setTransform(80,-252);

	this.dress_5 = new lib.dress_5_2_mc();
	this.dress_5.setTransform(-80,-252);

	this.accessory_3 = new lib.accessory_3_2_mc();
	this.accessory_3.setTransform(-40,-169.6);

	this.accessory_2 = new lib.accessory_2_2_mc();
	this.accessory_2.setTransform(100,-36);

	this.accessory_1 = new lib.accessory_1_2_mc();
	this.accessory_1.setTransform(-65,-7);

	this.glasses_1 = new lib.glasses_1_2_mc();
	this.glasses_1.setTransform(120,-152);

	this.shoes_4 = new lib.shoes_4_2_mc();
	this.shoes_4.setTransform(45,123);

	this.shoes_3 = new lib.shoes_3_2_mc();
	this.shoes_3.setTransform(150,123);

	this.shoes_2 = new lib.shoes_2_2_mc();
	this.shoes_2.setTransform(-45,112);

	this.shoes_1 = new lib.shoes_1_2_mc();
	this.shoes_1.setTransform(-150,118);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_1},{t:this.dress_2}]}).to({state:[{t:this.dress_4},{t:this.dress_3}]},1).to({state:[{t:this.dress_8},{t:this.dress_7}]},1).to({state:[{t:this.dress_5},{t:this.dress_6}]},1).to({state:[{t:this.shoes_1},{t:this.shoes_2},{t:this.shoes_3},{t:this.shoes_4},{t:this.glasses_1},{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3}]},1).wait(1));

	// decor
	this.instance = new lib.shelf_2_mc();
	this.instance.setTransform(0,-130);

	this.instance_1 = new lib.shelf_2_mc();
	this.instance_1.setTransform(0,10);

	this.instance_2 = new lib.shelf_2_mc();
	this.instance_2.setTransform(0,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.2,-275.2,365.2,524.9);
p.frameBounds = [rect, new cjs.Rectangle(-192.5,-320.1,377.2,573.1), new cjs.Rectangle(-214.5,-315.3,395.5,667.4), new cjs.Rectangle(-182.8,-278.3,365.4,538.5), new cjs.Rectangle(-240,-270.1,480,433.1)];


(lib.closet_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// no
	this.shoes_0 = new lib.shoes_0_mc();
	this.shoes_0.setTransform(221,100);

	this.accessory_0 = new lib.accessory_0_mc();
	this.accessory_0.setTransform(221,-90);

	this.glasses_0 = new lib.glasses_0_mc();
	this.glasses_0.setTransform(221,-210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.glasses_0},{t:this.accessory_0},{t:this.shoes_0}]},4).wait(1));

	// options
	this.dress_1 = new lib.dress_1_1_mc();
	this.dress_1.setTransform(-70,-252);

	this.dress_2 = new lib.dress_2_1_mc();
	this.dress_2.setTransform(90,-252);

	this.dress_3 = new lib.dress_3_1_mc();
	this.dress_3.setTransform(-70,-252);

	this.dress_4 = new lib.dress_4_1_mc();
	this.dress_4.setTransform(90,-252);

	this.dress_8 = new lib.dress_8_1_mc();
	this.dress_8.setTransform(90,-252);

	this.dress_7 = new lib.dress_7_1_mc();
	this.dress_7.setTransform(-70,-252);

	this.dress_6 = new lib.dress_6_1_mc();
	this.dress_6.setTransform(90,-252);

	this.dress_5 = new lib.dress_5_1_mc();
	this.dress_5.setTransform(-70,-252);

	this.glasses_1 = new lib.glasses_1_1_mc();
	this.glasses_1.setTransform(19.9,-152.5);

	this.accessory_3 = new lib.accessory_3_1_mc();
	this.accessory_3.setTransform(-0.1,-40.3);

	this.accessory_2 = new lib.accessory_2_1_mc();
	this.accessory_2.setTransform(111.7,-40.2);

	this.accessory_1 = new lib.accessory_1_1_mc();
	this.accessory_1.setTransform(-115.6,-55.3);

	this.shoes_4 = new lib.shoes_4_1_mc();
	this.shoes_4.setTransform(150,110);

	this.shoes_3 = new lib.shoes_3_1_mc();
	this.shoes_3.setTransform(50,110);

	this.shoes_2 = new lib.shoes_2_1_mc();
	this.shoes_2.setTransform(-50,110);

	this.shoes_1 = new lib.shoes_1_1_mc();
	this.shoes_1.setTransform(-150,110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dress_2},{t:this.dress_1}]}).to({state:[{t:this.dress_4},{t:this.dress_3}]},1).to({state:[{t:this.dress_7},{t:this.dress_8}]},1).to({state:[{t:this.dress_5},{t:this.dress_6}]},1).to({state:[{t:this.shoes_1},{t:this.shoes_2},{t:this.shoes_3},{t:this.shoes_4},{t:this.accessory_1},{t:this.accessory_2},{t:this.accessory_3},{t:this.glasses_1}]},1).wait(1));

	// decor
	this.instance = new lib.shelf_2_mc();
	this.instance.setTransform(0,-130);

	this.instance_1 = new lib.shelf_2_mc();
	this.instance_1.setTransform(0,10);

	this.instance_2 = new lib.shelf_2_mc();
	this.instance_2.setTransform(0,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-181.5,-313.7,355.6,574.6);
p.frameBounds = [rect, new cjs.Rectangle(-186.4,-311,383.9,567), new cjs.Rectangle(-188.8,-284.7,402.4,539.8), new cjs.Rectangle(-202.5,-312.4,395.7,578.3), new cjs.Rectangle(-240,-226,480,386)];


(lib.bodyDressupPanel_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-180.2,-275.2,365.2,524.9);
p.frameBounds = [rect];


(lib.bodyDressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_2
	this.hero_2 = new lib.closet_makeup_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,-324,700,479);
p.frameBounds = [rect];


(lib.bodyDressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-181.5,-313.7,355.6,574.6);
p.frameBounds = [rect];


(lib.bodyDressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hero_1
	this.hero_1 = new lib.closet_makeup_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-350,-324,700,479);
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


(lib.blinking_star_3_mc = function(mode,startPosition,loop) {
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
	this.body_mc = new lib.blinking_star_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-45,-45,90,90);
p.frameBounds = [rect];


(lib.blinking_light_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		@author edapskov
		@copyright 2019 edapskov v 1.0
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
p.nominalBounds = rect = new cjs.Rectangle(-372.6,-230.8,504.5,461.7);
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


(lib.WelcomeScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.instance = new lib.logo_0_mc();
	this.instance.setTransform(110,40,0.909,0.909);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.freeGames_mc = new lib.free_games_btn();
	this.freeGames_mc.setTransform(400,820,0.727,0.727);
	new cjs.ButtonHelper(this.freeGames_mc, 0, 1, 2, false, new lib.free_games_btn(), 3);

	this.credits_btn = new lib.credits_btn();
	this.credits_btn.setTransform(720,545,0.727,0.727);
	new cjs.ButtonHelper(this.credits_btn, 0, 1, 2, false, new lib.credits_btn(), 3);

	this.instruction_btn = new lib.instruction_btn();
	this.instruction_btn.setTransform(400,700);
	new cjs.ButtonHelper(this.instruction_btn, 0, 1, 2, false, new lib.instruction_btn(), 3);

	this.play_btn = new lib.play_btn();
	this.play_btn.setTransform(190,490);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.play_btn},{t:this.instruction_btn},{t:this.credits_btn},{t:this.freeGames_mc},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.instance}]}).wait(1));

	// title
	this.instance_1 = new lib.animation_title_mc();
	this.instance_1.setTransform(190,280);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// decor
	this.instance_2 = new lib.lower_shadow_mc();
	this.instance_2.setTransform(-200,400);
	this.instance_2.alpha = 0.5;
	this.instance_2.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// decor
	this.snowfall_comp = new lib.snowfall_1_2_mc();
	this.snowfall_comp.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.snowfall_comp).wait(1));

	// heroes
	this.instance_3 = new lib.heroes_0_mc();
	this.instance_3.setTransform(347.1,280.8,1,1,0,0,0,347.1,280.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// decor
	this.snowfall_comp_1 = new lib.snowfall_1_mc();
	this.snowfall_comp_1.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.snowfall_comp_1).wait(1));

	// bg
	this.instance_4 = new lib.background_1_img();
	this.instance_4.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1357.6,1261.9);
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
p.nominalBounds = rect = new cjs.Rectangle(-200,-26.4,1200,629.2);
p.frameBounds = [rect];


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


(lib.garland_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.blinking_star_3_mc();
	this.instance.setTransform(732.5,26.5);

	this.instance_1 = new lib.blinking_star_3_mc();
	this.instance_1.setTransform(602.5,28.5);

	this.instance_2 = new lib.blinking_star_3_mc();
	this.instance_2.setTransform(513.5,28.5);

	this.instance_3 = new lib.blinking_star_3_mc();
	this.instance_3.setTransform(384.5,26.5);

	this.instance_4 = new lib.blinking_star_3_mc();
	this.instance_4.setTransform(252.5,27.5);

	this.instance_5 = new lib.blinking_star_3_mc();
	this.instance_5.setTransform(105.5,26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_6 = new lib.garland_img();
	this.instance_6.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-18.5,1200,92);
p.frameBounds = [rect];


(lib.frame_location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animation
	this.instance = new lib.blinking_light_3_mc();
	this.instance.setTransform(33,119,0.813,0.813);

	this.instance_1 = new lib.blinking_light_3_mc();
	this.instance_1.setTransform(121,-79,0.813,0.813);

	this.instance_2 = new lib.blinking_light_3_mc();
	this.instance_2.setTransform(-116,-113,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// graph
	this.instance_3 = new lib.frame_location_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-145,-145,292,290);
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
	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(225,0);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-225,0);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,-500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-285,-550,570,810);
p.frameBounds = [rect];


(lib.dressupPanel_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(100,170);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-100,170);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,-500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-404.5,-550,809,910.6);
p.frameBounds = [rect];


(lib.dressupPanel_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(225,0);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-225,0);

	this.set_2 = new lib.set_0_mc();
	this.set_2.setTransform(0,-500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_2},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-285,-550,570,810.9);
p.frameBounds = [rect];


(lib.dressupPanel_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_mc = new lib.next_3_mc();
	this.next_mc.setTransform(100,170);

	this.prev_mc = new lib.prev_3_mc();
	this.prev_mc.setTransform(-100,170);

	this.set_1 = new lib.set_0_mc();
	this.set_1.setTransform(0,-500);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.set_1},{t:this.prev_mc},{t:this.next_mc}]}).wait(1));

	// body
	this.body_mc = new lib.bodyDressupPanel_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.wardrobe_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-404.5,-550,809,910.6);
p.frameBounds = [rect];


(lib.ResultScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// filters
	this.filters_animation_mc = new lib.filters_animation_mc();
	this.filters_animation_mc.setTransform(0,600);

	this.timeline.addTween(cjs.Tween.get(this.filters_animation_mc).wait(1));

	// btn
	this.instance = new lib.logo_0_mc();
	this.instance.setTransform(110,40,0.909,0.909);

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
	this.next_mc.setTransform(480,540);

	this.prev_mc = new lib.prev_mc();
	this.prev_mc.setTransform(320,540);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(690.1,40.1,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.prev_mc},{t:this.next_mc},{t:this.playAgain_btn},{t:this.photo_btn},{t:this.freeGames_mc},{t:this.facebook_btn},{t:this.instance}]}).wait(1));

	// banners
	this.banner_2_mc = new lib.banner_2_mc();
	this.banner_2_mc.setTransform(720,-200,0.923,0.923);

	this.banner_1_mc = new lib.banner_1_mc();
	this.banner_1_mc.setTransform(80,-200,0.923,0.923);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.banner_1_mc},{t:this.banner_2_mc}]}).wait(1));

	// decor
	this.instance_1 = new lib.lower_shadow_mc();
	this.instance_1.setTransform(-200,400);
	this.instance_1.alpha = 0.199;
	this.instance_1.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

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
	this.pointer_1.setTransform(340,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pointer_1},{t:this.pointer_2}]}).wait(1));

	// indicator
	this.instance = new lib.hint_mc();
	this.instance.setTransform(400,-260,0.868,0.867);

	this.indicator_mc = new lib.indicator_mc();
	this.indicator_mc.setTransform(400,-160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.indicator_mc},{t:this.instance}]}).wait(1));

	// decor
	this.instance_1 = new lib.garland_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// objects
	this.hero_2 = new lib.jasmine_mc();
	this.hero_2.setTransform(641.8,260.6,0.957,0.957,0,0,0,106.4,235.7);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_4_mc();
	this.dressupPanel_1_mc.setTransform(280,320);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-329.4,1200,909.4);
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

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_3_mc();
	this.dressupPanel_1_mc.setTransform(400,370);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_2 = new lib.jas_make();
	this.hero_2.setTransform(337.4,308.7,1,1,0,0,0,357.4,308.7);

	this.timeline.addTween(cjs.Tween.get(this.hero_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-4.5,-329.4,809,1059.9);
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

	// decor
	this.instance_1 = new lib.garland_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// objects
	this.hero_1 = new lib.elsa_mc();
	this.hero_1.setTransform(666.9,276.8,0.929,0.93,0,0,0,125.8,260.1);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_2_mc();
	this.dressupPanel_1_mc.setTransform(280,320);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-200,-329.4,1200,911.7);
p.frameBounds = [rect];


(lib.quest_1_mc = function(mode,startPosition,loop) {
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

	// tools
	this.dressupPanel_1_mc = new lib.dressupPanel_1_mc();
	this.dressupPanel_1_mc.setTransform(400,370);

	this.timeline.addTween(cjs.Tween.get(this.dressupPanel_1_mc).wait(1));

	// objects
	this.hero_1 = new lib.els_make();
	this.hero_1.setTransform(68.7,260.1,1,1,0,0,0,125.7,260.1);

	this.timeline.addTween(cjs.Tween.get(this.hero_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-4.5,-329.4,809,1059.9);
p.frameBounds = [rect];


(lib.LocationScreen_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(280.1,530.1,0.75,0.75,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(760.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_4_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_4_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3);
p.frameBounds = [rect];


(lib.LocationScreen_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400.1,530.1,0.75,0.75,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(760.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_3_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3);
p.frameBounds = [rect];


(lib.LocationScreen_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(280.1,530.1,0.75,0.75,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(760.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_2_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_4_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3);
p.frameBounds = [rect];


(lib.LocationScreen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.next_btn = new lib.next_btn();
	this.next_btn.setTransform(400.1,530.1,0.75,0.75,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.next_btn(), 3);

	this.moreGames_btn = new lib.more_games_btn();
	this.moreGames_btn.setTransform(400,900,0.875,0.875);
	new cjs.ButtonHelper(this.moreGames_btn, 0, 1, 2, false, new lib.more_games_btn(), 3);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(760,40,0.583,0.583);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(760.1,-49.9,0.583,0.583,0,0,0,0.1,0.1);

	this.logo_btn = new lib.logo_btn();
	this.logo_btn.setTransform(110,-50);
	new cjs.ButtonHelper(this.logo_btn, 0, 1, 2, false, new lib.logo_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.logo_btn},{t:this.fullScreen_mc},{t:this.sound_mc},{t:this.moreGames_btn},{t:this.next_btn}]}).wait(1));

	// body
	this.body_mc = new lib.quest_1_mc();

	this.timeline.addTween(cjs.Tween.get(this.body_mc).wait(1));

	// bg
	this.instance = new lib.background_3_img();
	this.instance.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3);
p.frameBounds = [rect];


(lib.location_4_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.frame_location_1_mc();

	this.instance_1 = new lib.frame_location_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// graph
	this.instance_2 = new lib.location_0_4_img();
	this.instance_2.setTransform(-145,-145);

	this.instance_3 = new lib.location_1_4_img();
	this.instance_3.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4/XbMAAAgu1MAx/AAAMAAAAu1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-150,320,300);
p.frameBounds = [rect, rect, rect];


(lib.location_3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.frame_location_1_mc();

	this.instance_1 = new lib.frame_location_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// graph
	this.instance_2 = new lib.location_0_2_img();
	this.instance_2.setTransform(-145,-145);

	this.instance_3 = new lib.location_1_2_img();
	this.instance_3.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4/XbMAAAgu1MAx/AAAMAAAAu1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-150,320,300);
p.frameBounds = [rect, rect, rect];


(lib.location_2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.instance = new lib.frame_location_1_mc();

	this.instance_1 = new lib.frame_location_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// graph
	this.instance_2 = new lib.location_0_3_img();
	this.instance_2.setTransform(-145,-145);

	this.instance_3 = new lib.location_1_3_img();
	this.instance_3.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4/XbMAAAgu1MAx/AAAMAAAAu1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-150,320,300);
p.frameBounds = [rect, rect, rect];


(lib.location_1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// decor
	this.pointer_1 = new lib.pointer_mc();
	this.pointer_1.setTransform(-115,90,1,1,-15);
	this.pointer_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pointer_1).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// decor
	this.instance = new lib.frame_location_1_mc();

	this.instance_1 = new lib.frame_location_2_mc();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// graph
	this.instance_2 = new lib.location_0_1_img();
	this.instance_2.setTransform(-145,-145);

	this.instance_3 = new lib.location_1_1_img();
	this.instance_3.setTransform(-145,-145);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A4/XbMAAAgu1MAx/AAAMAAAAu1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-160,-150,320,300);
p.frameBounds = [rect, new cjs.Rectangle(-238.4,-150,398.5,327.9), new cjs.Rectangle(-160,-150,320,300)];


(lib.locations_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

	// decor
	this.explosion_1_comp = new lib.explosion_1_1_mc();
	this.explosion_1_comp.setTransform(-150,140);
	this.explosion_1_comp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.explosion_1_comp).wait(49).to({_off:false},0).wait(21));

	// location_4
	this.location_4 = new lib.location_4_mc();
	this.location_4.setTransform(-150,140,0.931,0.931);
	this.location_4.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_4).wait(49).to({regX:-0.1,regY:0.1,scaleX:0.47,scaleY:0.47,y:140.1},0).to({scaleX:1,scaleY:1,x:-150.1,alpha:0.75},15).to({regX:0,regY:0,scaleX:0.93,scaleY:0.93,x:-150,y:140,alpha:1},5).wait(1));

	// decor
	this.explosion_1_comp_1 = new lib.explosion_1_1_mc();
	this.explosion_1_comp_1.setTransform(150,-140);
	this.explosion_1_comp_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.explosion_1_comp_1).wait(39).to({_off:false},0).wait(31));

	// location_3
	this.location_3 = new lib.location_3_mc();
	this.location_3.setTransform(150,-140,0.931,0.931);
	this.location_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_3).wait(39).to({regX:0.2,regY:-0.1,scaleX:0.47,scaleY:0.47,x:150.1},0).to({regX:0.1,scaleX:1,scaleY:1,y:-140.1,alpha:0.75},15).to({regX:0,regY:0,scaleX:0.93,scaleY:0.93,x:150,y:-140,alpha:1},5).wait(11));

	// decor
	this.explosion_1_comp_2 = new lib.explosion_1_1_mc();
	this.explosion_1_comp_2.setTransform(150,140);
	this.explosion_1_comp_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.explosion_1_comp_2).wait(29).to({_off:false},0).wait(41));

	// location_2
	this.location_2 = new lib.location_2_mc();
	this.location_2.setTransform(150,140,0.931,0.931);
	this.location_2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_2).wait(29).to({regY:0.1,scaleX:0.44,scaleY:0.44,y:140.1},0).to({regX:0.1,scaleX:1,scaleY:1,x:150.1,alpha:0.75},15).to({regX:0,regY:0,scaleX:0.93,scaleY:0.93,x:150,y:140,alpha:1},5).wait(21));

	// decor
	this.explosion_1_comp_3 = new lib.explosion_1_1_mc();
	this.explosion_1_comp_3.setTransform(-150,-140);
	this.explosion_1_comp_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.explosion_1_comp_3).wait(19).to({_off:false},0).wait(51));

	// location_1
	this.location_1 = new lib.location_1_mc();
	this.location_1.setTransform(-150,-140,0.931,0.931);
	this.location_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.location_1).wait(19).to({regX:-0.1,regY:-0.1,scaleX:0.47,scaleY:0.47},0).to({scaleX:1,scaleY:1,x:-150.1,y:-140.1,alpha:0.75},15).to({regX:0,regY:0,scaleX:0.93,scaleY:0.93,x:-150,y:-140,alpha:1},5).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-298.9,-279.6,597.9,559.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-304.3,-284.6,603.3,564.3), new cjs.Rectangle(-310,-290,609,569.7), new cjs.Rectangle(-307.8,-287.9,606.8,567.6), new cjs.Rectangle(-305.5,-285.8,604.5,565.5), new cjs.Rectangle(-303.3,-283.7,602.3,563.3), new cjs.Rectangle(-301,-281.6,600,561.3), new cjs.Rectangle(-298.9,-279.6,579,559.3), new cjs.Rectangle(-298.9,-279.6,585,559.3), new cjs.Rectangle(-298.9,-279.6,591.1,559.3), new cjs.Rectangle(-298.9,-279.6,597.1,559.3), new cjs.Rectangle(-298.9,-279.6,603.1,564), new cjs.Rectangle(-298.9,-279.6,609,569.7), new cjs.Rectangle(-298.9,-279.6,606.8,567.6), new cjs.Rectangle(-298.9,-279.6,604.5,565.5), new cjs.Rectangle(-298.9,-279.6,602.3,563.3), new cjs.Rectangle(-298.9,-279.6,600,561.3), rect=new cjs.Rectangle(-298.9,-279.6,597.9,559.3), rect, rect, rect, new cjs.Rectangle(-298.9,-284.6,603.3,564.3), new cjs.Rectangle(-298.9,-290,609,569.7), new cjs.Rectangle(-298.9,-287.9,606.8,567.6), new cjs.Rectangle(-298.9,-285.8,604.5,565.5), new cjs.Rectangle(-298.9,-283.7,602.3,563.3), new cjs.Rectangle(-298.9,-281.6,600,561.3), rect=new cjs.Rectangle(-298.9,-279.6,597.9,559.3), rect, rect, rect, new cjs.Rectangle(-304.3,-279.6,603.3,564.3), new cjs.Rectangle(-310,-279.6,609,569.7), new cjs.Rectangle(-307.8,-279.6,606.8,567.6), new cjs.Rectangle(-305.5,-279.6,604.5,565.5), new cjs.Rectangle(-303.3,-279.6,602.3,563.3), new cjs.Rectangle(-301,-279.6,600,561.3), new cjs.Rectangle(-298.9,-279.6,597.9,559.3)];


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
	this.locations_mc.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.locations_mc).wait(1));

	// decor
	this.instance = new lib.lower_shadow_mc();
	this.instance.setTransform(-200,400);
	this.instance.alpha = 0.102;
	this.instance.cache(-2,-2,1204,204);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// decor
	this.snowfall_comp = new lib.snowfall_1_2_mc();
	this.snowfall_comp.setTransform(400,300,1,1,0,0,0,400,300);

	this.timeline.addTween(cjs.Tween.get(this.snowfall_comp).wait(1));

	// decor
	this.instance_1 = new lib.blinking_light_3_mc();
	this.instance_1.setTransform(774,419,0.813,0.813);

	this.instance_2 = new lib.blinking_light_3_mc();
	this.instance_2.setTransform(707,315,0.813,0.813);

	this.instance_3 = new lib.blinking_light_3_mc();
	this.instance_3.setTransform(641,443,0.813,0.813);

	this.instance_4 = new lib.blinking_light_3_mc();
	this.instance_4.setTransform(800,353,0.813,0.813);

	this.instance_5 = new lib.blinking_light_3_mc();
	this.instance_5.setTransform(636,307,0.813,0.813);

	this.instance_6 = new lib.blinking_light_3_mc();
	this.instance_6.setTransform(712,215,0.813,0.813);

	this.instance_7 = new lib.blinking_light_3_mc();
	this.instance_7.setTransform(278.4,286.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// bg
	this.instance_8 = new lib.background_2_img();
	this.instance_8.setTransform(-200,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9);
p.frameBounds = [rect];


(lib.storage_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		///* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// storage
	this.text = new cjs.Text("storage", "64px 'Arial'", "#FF0000");
	this.text.lineHeight = 74;
	this.text.lineWidth = 252;
	this.text.setTransform(2,2);

	this.instance = new lib.PreloaderScreen();

	this.instance_1 = new lib.CopyrightScreen();

	this.instance_2 = new lib.WelcomeScreen();

	this.instance_3 = new lib.SelectionScreen();

	this.instance_4 = new lib.LocationScreen_1();
	this.instance_4.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_5 = new lib.LocationScreen_2();

	this.instance_6 = new lib.LocationScreen_3();
	this.instance_6.setTransform(0,-0.3,1,1,0,0,0,0,-0.3);

	this.instance_7 = new lib.LocationScreen_4();

	this.instance_8 = new lib.RedirectScreen();

	this.instance_9 = new lib.ResultScreen();

	this.instance_10 = new lib.InstructionScreen();

	this.gravity_explosion_comp = new lib.GravityExplosionMC();
	this.gravity_explosion_comp.setTransform(345,50);

	this.instance_11 = new lib.TrackMove();
	this.instance_11.setTransform(270,50);

	this.instance_12 = new lib.Cursor();
	this.instance_12.setTransform(185,50);

	this.fullScreen_mc = new lib.full_screen_mc();
	this.fullScreen_mc.setTransform(115.1,50,0.583,0.583,0,0,0,0.1,0);

	this.sound_mc = new lib.sound_mc();
	this.sound_mc.setTransform(45.1,50,0.583,0.583,0,0,0,0.1,0);

	this.instance_13 = new lib.OrientationLockScreen();

	this.instance_14 = new lib.CurtainScreen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.sound_mc},{t:this.fullScreen_mc},{t:this.instance_12},{t:this.instance_11},{t:this.gravity_explosion_comp}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256.5,75.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-200,0,1200,600), rect, new cjs.Rectangle(-262.6,-280.8,1357.6,1261.9), new cjs.Rectangle(-262.6,-280.8,1262.7,1261.9), rect=new cjs.Rectangle(-262.6,-329.4,1262.7,1300.3), rect, rect, rect, new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(-262.6,-319.9,1262.7,1780), new cjs.Rectangle(-200,0,1200,600), new cjs.Rectangle(10,0,353,100), new cjs.Rectangle(-200,-10,1200,620), new cjs.Rectangle(-1200,0,3200,600), rect=null, rect, rect, rect, rect];


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